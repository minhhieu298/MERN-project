const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const Address = require("../models/address.model");
const { pageService } = require("../services/page.service");
const Product = require("../models/product.model");
const { orderService } = require("../services/order.service");

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
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
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
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
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
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
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
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .sort("-createdAt");
      break;

    case "5":
      orders = await Order.find({
        user: req.user._id,
        "paymentStatus.status": "cancel",
      })
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .sort("-createdAt");
      break;
    default:
      orders = await Order.find({
        user: req.user._id,
      })
        .populate("orderItems.productId", "_id name image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .sort("-createdAt");
      break;
  }
  return orders;
}

async function getDataforChart(query) {
  let data = [
    query,
    {
      $count: "total",
    },
  ];
  return await Order.aggregate(data);
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
    // const orders = await orderService.list();
    let orders = await queryParams(type, req);
    if (type) {
      orders = await queryParams(type, req);
    }
    if (keyword) {
      orders = await Order.find({
        user: req.user.id,
        orderItems: {
          $elemMatch: {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
        },
      })
        .populate("orderItems.productId", "_id image")
        .select("_id user paymentStatus orderItems totalAmount orderStatus")
        .sort("-createdAt");
    }
    // else {
    //   orders = [];
    // }

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
      if (req.body.type === "delivered") {
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
        ).exec(async (error, order) => {
          if (error) return res.status(400).json({ message: error.message });
          if (order) {
            const order = await Order.findOne({ _id: req.body.orderId });
            for (let item of order.orderItems) {
              await updateProduct(item.productId, item.purchaseQty);
            }
            return res.status(200).json({ message: "success" });
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
    }
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

  getChart: async (req, res) => {
    let orderPending = await getDataforChart({
      $match: {
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
        ],
      },
    });
    let orderShipped = await getDataforChart({
      $match: {
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
      },
    });
    let orderDelivered = await getDataforChart({
      $match: {
        orderStatus: {
          $elemMatch: {
            type: "delivered",
            isCompleted: true,
          },
        },
      },
    });
    
    return res.status(200).json({
      chart: {
        pending: orderPending[0]?.total ? orderPending[0]?.total : 0,
        shipped: orderShipped[0]?.total ? orderShipped[0]?.total : 0,
        delivered: orderDelivered[0]?.total ? orderDelivered[0]?.total : 0,
      },
    });
  },
};

async function updateProduct(id, qty) {
  let product = await Product.findById(id);
  product.stock < 1 ? 0 : (product.stock -= Number(qty));
  product.sold += Number(qty);
  await product.save({ validateBeforSave: false });
}
