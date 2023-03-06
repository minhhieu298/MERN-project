const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const Address = require("../models/address.model");
const { orderService } = require("../services/order.service");
const { pageService } = require("../services/page.service");

async function queryParams(query, req) {
  let orders = [];
  switch (query) {
    case "1":
      orders = await Order.find({
        user: req.user._id,
        $and: [
          {
            "paymentStatus.status": "pending",
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "ordered",
                isCompleted: true,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "packed",
                isCompleted: false,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "shipped",
                isCompleted: false,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "delivered",
                isCompleted: false,
              },
            },
          },
        ],
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;
    case "2":
      orders = await Order.find({
        user: req.user._id,
        $and: [
          {
            orderStatus: {
              $elemMatch: {
                type: "packed",
                isCompleted: true,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "shipped",
                isCompleted: false,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "delivered",
                isCompleted: false,
              },
            },
          },
        ],
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;
    case "3":
      orders = await Order.find({
        user: req.user._id,
        $and: [
          {
            orderStatus: {
              $elemMatch: {
                type: "shipped",
                isCompleted: true,
              },
            },
          },
          {
            orderStatus: {
              $elemMatch: {
                type: "delivered",
                isCompleted: false,
              },
            },
          },
        ],
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;

    case "4":
      orders = await Order.find({
        user: req.user._id,
        orderStatus: {
          $elemMatch: {
            type: "delivered",
            isCompleted: true,
          },
        },
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;

    case "5":
      orders = await Order.find({
        user: req.user._id,
        "paymentStatus.status": "cancel",
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;
    default:
      orders = await Order.find({
        user: req.user._id,
      })
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .populate("orderItems.productId", "_id name image")
        .sort("-createdAt");
      break;
  }
  return orders;
}

module.exports.orderCtrl = {
  createOrder: async (req, res) => {
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
        const order = await Order.create(req.body);
        res.status(201).json({
          success: true,
          order,
        });
      }
    });
  },
  //user
  getOrdersUser: async (req, res) => {
    const { type, keyword } = req.query;
    let orders = await queryParams(type, req);
    if (type) {
      orders = await queryParams(type, req);
    }
    if (keyword) {
      if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        orders = await Order.find({
          user: req.user.id,
          _id: keyword,
        })
          .select("_id user paymentStatus orderItems totalAmount orderStatus")
          .populate("orderItems.productId", "_id name image")
          .sort("-createdAt");
      } else {
        orders = [];
      }
    }

    return res.status(200).json({ orders });
  },
  getSingleOrder: async (req, res) => {
    Order.findOne({ _id: req.body.orderId })
      .populate("orderItems.productId", "_id name image")
      .lean()
      .exec((error, order) => {
        if (error) return res.status(400).json({ message: error.message });
        if (order) {
          Address.findOne({
            user: req.user._id,
          }).exec((error, address) => {
            if (error) return res.status(400).json({ message: error.message });

            order.address = address.address.find(
              (adr) => adr._id.toString() === order.addressId.toString()
            );

            res.status(200).json({ order });
          });
        }
      });
  },
  //start admin
  getOrdersAdmin: async (req, res) => {
    const { page, pageSize, status, keyword, sort } = req.query;
    if (Number(page) <= 0) {
      return res.status(200).json({ data: [] });
    }
    const orders = await pageService.listOrder({
      page: +page,
      pageSize: +pageSize,
      status,
      keyword,
      sort,
    });

    return res.status(200).json({
      data:
        orders[0]?.orders?.length > 0
          ? {
              orders: orders[0]?.orders,
              total: {
                total: Number(orders[0]?.meta[0]?.total),
                page: Number(orders[0]?.meta[0]?.page),
                pageSize: Number(pageSize),
                totalPage: Math.ceil(
                  Number(orders[0]?.meta[0]?.total) / Number(pageSize)
                ),
              },
            }
          : [],
    });
  },
  getSingleOrderAdmin: async (req, res) => {
    Order.findOne({ _id: req.body.orderId })
      .populate("orderItems.productId", "_id name image")
      .lean()
      .exec((error, order) => {
        if (error) return res.status(400).json({ message: error.message });
        if (order) {
          Address.findOne({
            user: req.body.userId,
          }).exec((error, address) => {
            if (error) return res.status(400).json({ message: error.message });

            order.address = address.address.find(
              (adr) => adr._id.toString() === order.addressId.toString()
            );

            res.status(200).json({ order });
          });
        }
      });
  },
  // end admin

  getOrderDetail: async (req, res) => {
    const order = await Order.findById({ _id: req.params.id }).populate(
      "orderItems.productId addressId",
      "_id name image address district city state phone"
    );
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    res.status(200).json({ order });
  },
  // update order status
  updateOrder: async (req, res) => {
    if (req.body.type === "packed") {
      Order.updateOne(
        {
          _id: req.body.orderId,
          "orderStatus.type": "packed",
        },
        {
          $set: {
            "orderStatus.$": [
              { type: "packed", date: new Date(), isCompleted: true },
            ],
            "paymentStatus.status": "completed",
            "paymentStatus.user": req.user._id,
            "paymentStatus.date": new Date(),
          },
        }
      ).exec((error, order) => {
        if (error) return res.status(400).json({ message: error.message });
        if (order) {
          res.status(200).json({ order });
        }
      });
    } else {
      Order.updateOne(
        {
          _id: req.body.orderId,
          "orderStatus.type": req.body.type,
        },
        {
          $set: {
            "orderStatus.$": [
              { type: req.body.type, date: new Date(), isCompleted: true },
            ],
          },
        }
      ).exec((error, order) => {
        if (error) return res.status(400).json({ message: error.message });
        if (order) {
          res.status(200).json({ order });
        }
      });
    }
    // if (req.body.status) {
    //   if (req.body.type) {
    //     _order
    //       .updateOne(
    //         {
    //           _id: req.body.orderId,
    //           "orderStatus.type": req.body.type,
    //         },
    //         {
    //           $set: {
    //             "orderStatus.$": [
    //               { type: req.body.type, date: new Date(), isCompleted: true },
    //             ],
    //             "paymentStatus.status": req.body.status,
    //             "paymentStatus.user": req.user._id,
    //             "paymentStatus.date": new Date(),
    //           },
    //         }
    //       )
    //       .exec((error, order) => {
    //         if (error) return res.status(400).json({ message: error.message });

    //   } else {
    //     _order
    //       .updateOne(
    //         {
    //           _id: req.body.orderId,
    //         },
    //         {
    //           $set: {
    //             "paymentStatus.status": req.body.status,
    //             "paymentStatus.user": req.user._id,
    //             "paymentStatus.date": new Date(),
    //           },
    //         }
    //       )
    //       .exec((error, order) => {
    //         if (error) return res.status(400).json({ message: error.message });
    //         if (order) {
    //           res.status(201).json({ order });
    //         }
    //       });
    //   }
    // } else {

    // }
  },
  // user can cancel order before completed
  updateStatusPaymentOrder: async (req, res) => {
    await Order.updateOne(
      {
        _id: req.body.orderId,
      },
      {
        $set: {
          "paymentStatus.status": req.body.status,
          "paymentStatus.user": req.user._id,
          "paymentStatus.date": new Date(),
        },
      }
    ).exec((error, order) => {
      if (error) return res.status(400).json({ message: error.message });
      if (order) {
        res.status(201).json({ order });
      }
    });
  },
};
