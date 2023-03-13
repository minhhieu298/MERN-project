const Order = require("../models/order.model");

module.exports.orderService = {
  list: async () => {
    let query = [
     
      // {
      //   $project: {
      //     orderItems: {
      //       productId: {
      //         description: 0,
      //         price: 0,
      //         thumbnails: 0,
      //         sizes: 0,
      //         colors: 0,
      //         stock: 0,
      //         price_after_discount: 0,
      //         slug: 0,
      //         updatedAt: 0,
      //         createdAt: 0,
      //         user: 0,
      //         gender: 0,
      //         category_parent: 0,
      //         category_id: 0,
      //         __v: 0,
      //         sold: 0,
      //       },
      //     },
      //     addressId: 0,
      //     __v: 0,
      //     updatedAt: 0,
      //   },
      // },
    ];
    return await Order.aggregate(query);
  },
};
