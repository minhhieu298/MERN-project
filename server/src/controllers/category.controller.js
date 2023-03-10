const Category = require("../models/category.model");
const slug = require("slug");

function createCategories(categories, parent_id = null) {
  const categoryList = [];
  let category;
  if (parent_id == null) {
    category = categories.filter((cat) => cat.parent_id == undefined);
  } else {
    category = categories.filter((cat) => cat.parent_id == parent_id);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parent_id: cate.parent_id,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

module.exports.cateCtrl = {
  createCate: async (req, res) => {
    const cateObj = {
      name: req.body.name,
    };
    if (req.body.parent_id) {
      cateObj.parent_id = req.body.parent_id;
    }
    const check = await Category.find();
    if (check.length > 0) {
      const isExist = check.find(
        (item) => item.name.toLowerCase() === cateObj.name.toLowerCase()
      );
      if (isExist) {
        return res.status(400).json({ message: `${cateObj.name} is exist` });
      } else {
        const cate = new Category(cateObj);
        await cate.save();
        res.status(201).json({ category: cate });
      }
    } else {
      const cate = new Category(cateObj);
      await cate.save();
      res.status(201).json({ category: cate });
    }
  },
  getAllCates: async (req, res) => {
    const categories = await Category.find();
    const categoryList = createCategories(categories);
    res.status(200).json({ categories: categoryList });
  },
  updateCate: async (req, res) => {
    const { payload } = req.body;
    let cate = await Category.findOne({ _id: payload._id });
    if (!cate) {
      return res.status(400).json({ message: "data cannot found" });
    }
    await Category.updateOne(
      { _id: payload._id },
      {
        $set: {
          name: payload.name,
          slug: slug(payload.name),
        },
      }
    ).exec((error, data) => {
      if (error) return res.status(400).json({ message: error.message });
      if (data) return res.status(200).json({ message: "success" });
    });
  },
  deleteCate: async (req, res) => {
    const { payload } = req.body;
    let cate = await Category.findOne({ _id: payload._id });
    if (!cate) {
      return res.status(400).json({ message: "data cannot found" });
    }
    await Category.deleteOne({ _id: payload._id }).exec((error, data) => {
      if (error) return res.status(400).json({ message: error.message });
      if (data) {
        Category.deleteMany({ parent_id: payload._id }).exec((err, c) => {
          if (err) return res.status(400).json({ message: err.message });
          if (c) return res.status(200).json({ message: "success" });
        });
      }
    });
  },
};
