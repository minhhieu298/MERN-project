const Product = require("../models/product.model");

module.exports.commentCtrl = {
  createComment: async (req, res) => {
    req.body.user = req.user.id;
    Product.updateOne(
      { _id: req.body.product },
      {
        $push: {
          product_comments: req.body,
        },
      }
    ).exec(async (err, comment) => {
      if (err) return res.status(400).json({ message: err.message });
      if (comment) {
        const product = await Product.findOne({
          _id: req.body.product,
        }).populate("product_comments.user", "username avatar");
        if (product) {
          const sum = product?.product_comments?.reduce(
            (a, b) => a + Number(b.rating),
            0
          );
          product.ratings = sum / product?.product_comments?.length;
          await product.save();
        }
        return res.status(201).json({ comment });
      }
    });
  },
  updateComment: async (req, res) => {
    req.body.user = req.user.id;
    Product.updateOne(
      {
        _id: req.body.product,
        "product_comments._id": req.body.id,
      },
      {
        $set: {
          "product_comments.$": req.body,
        },
      }
    ).exec(async (err, comment) => {
      if (err) return res.status(200).json({ message: err.message });
      if (comment) {
        const product = await Product.findOne({
          _id: req.body.product,
        }).populate("product_comments.user", "username avatar");
        if (product) {
          const sum = product?.product_comments?.reduce(
            (a, b) => a + Number(b.rating),
            0
          );
          product.ratings = sum / product?.product_comments?.length;
          await product.save();
        }
        return res.status(200).json({ message: "success" });
      }
    });
  },
  deleteComment: async (req, res) => {
    Product.updateOne(
      {
        _id: req.body.product,
      },
      {
        $pull: {
          product_comments: {
            _id: req.body.id,
          },
        },
      }
    ).exec(async (err, comment) => {
      if (err) return res.status(400).json({ message: err.message });
      if (comment) {
        const product = await Product.findOne({
          _id: req.body.product,
        }).populate("product_comments.user", "username avatar");
        if (product) {
          const sum = product?.product_comments?.reduce(
            (a, b) => a + Number(b.rating),
            0
          );
          if (sum > 0) {
            product.ratings = sum / product?.product_comments?.length;
          } else {
            product.ratings = 0;
          }
          await product.save();
        }
        return res.status(200).json({ message: "success" });
      }
    });
    // const product = await Product.findOne({
    //   _id: req.body.product,
    // }).populate("product_comments.user", "username avatar");
    // if (product) {

    // } else {
    //   return res.status(400).json({ message: "not found" });
    // }
  },
};
