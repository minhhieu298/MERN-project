const Order = require("../models/order.model");
module.exports.orderService = {
  list: async () => {
    let query = [
    //   {
    //     $sort: {
    //       createdAt: -1,
    //     },
    //   },
    {
      $project: {
        addressId: 0,
        __v: 0,
        updatedAt: 0
      }
    }
    //   {
    //     $facet: {
    //       meta: [
    //         {
    //           $count: "total",
    //         },
    //         {
    //           $addFields: {
    //             page: page,
    //           },
    //         },
    //       ],
    //       products: [
    //         { $skip: (Number(page) - 1) * Number(pageSize) },
    //         { $limit: Number(pageSize) },
    //       ],
    //     },
    //   },
    ];

    return await Order.aggregate(query);
  }
};