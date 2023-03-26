const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const Cart = require("../models/cart.model");
const Order = require("../models/order.model");

module.exports.paymentCtrl = {
  createCheckout: async (req, res) => {
    Cart.deleteOne({ user: req.user._id }).exec(async (error, result) => {
      if (error) return res.status(400).json({ message: error.message });
      if (result) {
        req.body.user = req.user._id;
        req.body.orderStatus = [
          {
            type: "ordered",
            date: new Date(),
            isCompleted: true,
          },
          {
            type: "packed",
            isCompleted: false,
          },
          {
            type: "shipped",
            isCompleted: false,
          },
          {
            type: "delivered",
            isCompleted: false,
          },
        ];
        // const order = await Order.create(req.body);
        // res.status(201).json({
        //   success: true,
        //   order,
        // });
        const order = new Order(req.body);
        await order.save().then(async (data) => {
          if (data) {
            const list_items = req.body.orderItems.map((item) => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.name + ` - ` + item.color + ` - ` + item.size,
                  },
                  unit_amount: item.payablePrice,
                },
                quantity: item.purchaseQty,
              };
            });
            const session = await stripe.checkout.sessions.create({
              line_items: list_items,
              mode: "payment",
              success_url: `${process.env.CLIENT_URL}/checkout-success`,
              cancel_url: `${process.env.CLIENT_URL}/cart`,
            });
            res.send({ url: session.url });
          }
        });
      }
    });

    // const order = await Order.create(req.body);
    // res.status(201).json({
    //   success: true,
    //   order,
    // });
  },
};
