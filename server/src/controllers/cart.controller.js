const Cart = require("../models/cart.model");

function runUpdate(condition, update) {
  return new Promise((resolve, reject) => {
    Cart.findOneAndUpdate(condition, update, { upsert: true })
      .then((result) => resolve())
      .catch((error) => reject(error));
  });
}

module.exports.cartCrtl = {
  addToCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id });
      if (cart) {
        let promiseArray = [];
        const item = req.body.cartItems;
        // console.log({ item });
        const isCart = cart.cartItems.find(
          (e) =>
            e._id.toString() === item._id ||
            (e.product.toString() === item.product &&
              e.color === item.color &&
              e.size === item.size)
        );
        let condition, update;
        if (isCart) {
          condition = {
            user: req.user._id,
            "cartItems._id": isCart._id,
          };
          update = {
            $set: {
              "cartItems.$": item,
            },
          };
        } else {
          condition = { user: req.user._id };
          update = {
            $push: {
              cartItems: item,
            },
          };
        }
        promiseArray.push(runUpdate(condition, update));
        Promise.all(promiseArray)
          .then((response) => res.status(201).json({ message: "success" }))
          .catch((error) => res.status(400).json({ message: error.message }));
      } else {
        const cart = new Cart({
          user: req.user._id,
          cartItems: [req.body.cartItems],
        });
        await cart.save();
        res.status(200).json({ cart });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id }).populate(
        "cartItems.product",
        "name image product"
      );

      if (!cart) {
        return res.status(200).json({ cartItems: [] });
      }
      return res.status(200).json({ cartItems: cart.cartItems });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteCart: async (req, res) => {
    const { id } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      Cart.updateOne(
        { user: req.user.id },
        {
          $pull: {
            cartItems: {
              _id: id,
            },
          },
        }
      ).exec((err, data) => {
        if (err) return res.status(400).json({ message: err.message });
        if (data) return res.status(200).json({ data });
      });
    }
  },
};
