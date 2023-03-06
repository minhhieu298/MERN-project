const Product = require("../models/product.model");
const cloudinary = require("cloudinary");

module.exports.productSerive = {
  createProduct: async (req) => {
    if (req.body.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "products",
      });
      req.body.image = result.secure_url;
    }
    let images = [...req.body.thumbnails];
    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "thumbnails",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.thumbnails = imagesLinks;
    req.body.user = req.user.id;

    if (req.body.discount) {
      req.body.price_after_discount =
        req.body.price * ((100 - req.body.discount) / 100);
    } else {
      req.body.price_after_discount = req.body.price;
    }
    return await Product.create(req.body);
    // console.log(req.body);
  },
};
