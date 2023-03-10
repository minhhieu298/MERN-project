const { productSerive } = require("../services/product.service");
const Product = require("../models/product.model");
const mongoose = require("mongoose");
mongoose.set("strictPopulate", false);
const cloudinary = require("cloudinary");
const { pageService } = require("../services/page.service");

module.exports.productCtrl = {
  createProduct: async (req, res) => {
    return res.status(201).json({
      element: await productSerive.createProduct(req),
    });
  },
  getProducts: async (req, res) => {
    const { page, pageSize, cc, keyword, cp, sort, gender, color, size } =
      req.query;
    if (Number(page) <= 0) {
      return res.status(200).json({ data: [] });
    }

    let products = await pageService.list({
      page: +page,
      pageSize: +pageSize,
      keyword,
      cc,
      cp,
      sort,
      gender,
      color,
      size,
    });

    res.status(200).json({
      // products
      data:
        products[0]?.products?.length > 0
          ? {
              products: products[0]?.products,
              meta: {
                total: Number(products[0]?.meta[0]?.total),
                page: Number(products[0]?.meta[0]?.page),
                pageSize: Number(pageSize),
                totalPage: Math.ceil(
                  Number(products[0]?.meta[0]?.total) / Number(pageSize)
                ),
              },
            }
          : [],
    });
  },
  updateProduct: async (req, res) => {
    if (req.body.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "products",
      });
      req.body.image = result.secure_url;
    }
    if (req.body.thumbnails) {
      let images = [...req.body.thumbnails];
      const imagesLinks = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i].url, {
          folder: "thumbnails",
        });
        // console.log(result);
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      req.body.thumbnails = imagesLinks;
    }

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      } else {
        Product.updateOne(
          { _id: req.params.id },
          {
            $set: req.body,
          }
        ).exec((error, p) => {
          if (error) return res.status(400).json({ message: error.message });
          if (p) return res.status(200).json({ p });
        });
      }
    } else {
      return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
    }
  },
  deleteProduct: async (req, res) => {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      }
      Product.deleteOne({ _id: req.params.id }).exec((error, p) => {
        if (error) return res.status(400).json({ message: error.message });
        if (p) return res.status(200).json();
      });
    } else {
      return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
    }
  },
  getSingleProduct: async (req, res) => {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let product = await Product.findOne({ _id: req.params.id });
      return res.status(200).json({ product });
    } else {
      return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
    }
  },
  getDiscount: async (req, res) => {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      let product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      } else {
        Product.updateOne(
          { _id: req.params.id },
          {
            $set: {
              discount: req.body.discount,
              price_after_discount:
                product.price * ((100 - Number(req.body.discount)) / 100),
            },
          }
        ).exec((error, p) => {
          if (error) return res.status(400).json({ message: error.message });
          if (p) return res.status(200).json({ p });
        });
      }
    } else {
      return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
    }
  },
};
