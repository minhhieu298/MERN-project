const Category = require("../models/category.model");

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
      slug: req.body.slug,
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
};
