const Product = require("../models/product.model");
const User = require("../models/user.model");
const Order = require("../models/order.model");
module.exports.pageService = {
  list: async ({
    page,
    pageSize,
    keyword,
    cc,
    cp,
    sort,
    gender,
    color,
    size
  }) => {
    let query = [{
      $lookup: {
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category_id"
      }
    }, {
      $unwind: "$category_id"
    }, {
      $lookup: {
        from: "categories",
        localField: "category_parent",
        foreignField: "_id",
        as: "category_parent"
      }
    }, {
      $unwind: "$category_parent"
    }, {
      $project: {
        user: 0,
        updatedAt: 0,
        __v: 0,
        category_id: {
          _id: 0,
          parent_id: 0,
          __v: 0
        },
        category_parent: {
          _id: 0,
          __v: 0
        },
        updatedAt: 0
      }
    }, {
      $facet: {
        meta: [{
          $count: "total"
        }, {
          $addFields: {
            page: page
          }
        }],
        products: [{
          $skip: (Number(page) - 1) * Number(pageSize)
        }, {
          $limit: Number(pageSize)
        }]
      }
    }];
    if (cp) {
      let cut = query.splice(0, 4);
      query.unshift({
        $match: {
          "category_parent.slug": {
            $regex: cp,
            $options: "i"
          }
        }
      });
      query = cut.concat(query);
    }
    if (cc) {
      let cut = query.splice(0, 4);
      query.unshift({
        $match: {
          "category_id.slug": {
            $regex: cc,
            $options: "i"
          }
        }
      });
      query = cut.concat(query);
    }
    if (gender) {
      query.unshift({
        $match: {
          gender: new RegExp(`^${gender}$`, "i")
        }
      });
    }
    if (keyword) {
      query.unshift({
        $match: {
          name: {
            $regex: keyword,
            $options: "i"
          }
        }
      });
    }
    if (sort === "createdAt") {
      query.unshift({
        $sort: {
          createdAt: -1
        }
      });
    }
    if (sort === "asc") {
      query.unshift({
        $sort: {
          price: 1
        }
      });
    }
    if (sort === "desc") {
      query.unshift({
        $sort: {
          price: -1
        }
      });
    }
    if (color) {
      query.unshift({
        $match: {
          colors: {
            $elemMatch: {
              color: {
                $regex: color,
                $options: "i"
              }
            }
          }
        }
      });
    }
    if (size) {
      query.unshift({
        $match: {
          sizes: {
            $elemMatch: {
              size: {
                $regex: size,
                $options: "i"
              }
            }
          }
        }
      });
    }
    return await Product.aggregate(query);
  },
  listUser: async ({
    page,
    pageSize,
    sort,
    keyword
  }) => {
    let query = [{
      $project: {
        refreshToken: 0,
        password: 0,
        updatedAt: 0,
        __v: 0
      }
    }, {
      $facet: {
        meta: [{
          $count: "total"
        }, {
          $addFields: {
            page: page
          }
        }],
        users: [{
          $skip: (Number(page) - 1) * Number(pageSize)
        }, {
          $limit: Number(pageSize)
        }]
      }
    }];
    if (keyword) {
      query.unshift({
        $match: {
          username: {
            $regex: keyword,
            $options: "i"
          }
        }
      });
      if (sort === "username") {
        query.unshift({
          $sort: {
            username: 1
          }
        });
      }
      if (sort === "createdAt") {
        query.unshift({
          $sort: {
            createdAt: -1
          }
        });
      }
      if (sort === "email") {
        query.unshift({
          $sort: {
            createdAt: -1
          }
        });
      }
    } else {
      if (sort === "username") {
        query.unshift({
          $sort: {
            username: 1
          }
        });
      }
      if (sort === "createdAt") {
        query.unshift({
          $sort: {
            createdAt: -1
          }
        });
      }
      if (sort === "email") {
        query.unshift({
          $sort: {
            createdAt: -1
          }
        });
      }
    }
    return await User.aggregate(query);
  },
  listOrder: async ({
    page,
    pageSize,
    status,
    keyword,
    sort
  }) => {
    let query = [{
      $lookup: {
        from: "addresses",
        localField: "addressId",
        foreignField: "_id",
        as: "addressId"
      }
    }, {
      $unwind: "$addressId"
    }, {
      $project: {
        addressId: {
          isSelected: 0,
          __v: 0,
          is_delivery: 0
        },
        updatedAt: 0,
        __v: 0
      }
    }, {
      $facet: {
        meta: [{
          $count: "total"
        }, {
          $addFields: {
            page: page
          }
        }],
        orders: [{
          $skip: (Number(page) - 1) * Number(pageSize)
        }, {
          $limit: Number(pageSize)
        }]
      }
    }];
    if (status) {
      query.unshift({
        $match: {
          $or: [{
            "paymentStatus.status": status
          }, {
            orderStatus: {
              $elemMatch: {
                type: {
                  $regex: status,
                  $options: "i"
                },
                isCompleted: true
              }
            }
          }]
        }
      });
    }
    if (keyword) {
      let cut = query.splice(0, 2);
      query.unshift({
        $match: {
          "addressId.phone": {
            $regex: keyword,
            $options: "i"
          }
        }
      });
      query = cut.concat(query);
    }
    if (sort === "createdAt") {
      query.unshift({
        $sort: {
          createdAt: -1
        }
      });
    }
    if (sort === "price") {
      query.unshift({
        $sort: {
          totalAmount: -1
        }
      });
    }
    return await Order.aggregate(query);
  }
};