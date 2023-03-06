const Product = require("../models/product.model");
const Category = require("../models/category.model");
const { pageService } = require("../services/page.service");

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

module.exports.getInitData = {
  getData: async (req, res) => {
    const { category, pageSize, page } = req.body;
    // products
    let totalPage = await Product.countDocuments();
    const products = await pageService.list({
      page: +page,
      pageSize: +pageSize,
    });
    const filter = await Product.find({
      category_id: "63d365953d026e3fc52eccce",
    }).sort({ createdAt: -1 });
    //categories
    const categories = await Category.find();
    const categoryList = createCategories(categories);

    res.status(200).json({
      products: filter ? filter : products,
      // filter: ,
      categories: categoryList,
      meta: {
        page: Number(page),
        pageSize: Number(pageSize),
        totalPage: Math.ceil(totalPage / pageSize),
      },
    });
  },

  getDataAdmin: async (req, res) => {
    try {
      //product
      let perPage = 10,
        startPage = 1;
      const { page, pageSize, cc, keyword, cp, sort, gender } = req.query;
      if (Number(page) <= 0) {
        return res.status(200).json({ data: [] });
      }
      let products = await pageService.list({
        page: +page ? +page : startPage,
        pageSize: +pageSize ? +pageSize : perPage,
        keyword,
        cc,
        cp,
        sort,
        gender,
      });

      //category
      const categories = await Category.find();
      const categoryList = createCategories(categories);

      res.status(200).json({
        categories: categoryList,
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
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
