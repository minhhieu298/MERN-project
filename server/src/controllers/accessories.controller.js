const { Sizes, Colors } = require("../models/accessories.model");

module.exports.accessCtrl = {
  createAccessories: async (req, res) => {
    try {
      if (req.body.size) {
        const data = await Sizes.create(req.body);
        res.status(201).json({ data });
      }
      if (req.body.color) {
        const data = await Colors.create(req.body);
        res.status(201).json({ data });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAccessories: async (req, res) => {
    try {
      const array = await Sizes.find();
      let clothings = array.filter(
        (item) => !isNaN(Number(item.size)) === false
      );
      let shoes = array.filter((item) => !isNaN(Number(item.size)) === true);
      res.status(200).json({ clothings, shoes });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateAccessories: async (req, res) => {
    if (req.body.sizeId) {
      let size = await Sizes.findOne({ _id: req.body.sizeId });
      if (!size) {
        return res.status(400).json({ message: "can not found" });
      } else {
        Sizes.updateOne(
          { _id: req.body.sizeId },
          {
            $set: {
              size: req.body.size,
            },
          }
        ).exec((error, data) => {
          if (error) return res.status(400).json({ message: error.message });
          if (data) return res.status(200).json({ data });
        });
      }
    } else {
      let color = await Colors.findOne({ _id: req.body.colorId });
      if (!color) {
        return res.status(400).json({ message: "can not found" });
      } else {
        Colors.updateOne(
          { _id: req.body.colorId },
          {
            $set: {
              color: req.body.color,
            },
          }
        ).exec((error, data) => {
          if (error) return res.status(400).json({ message: error.message });
          if (data) return res.status(200).json({ data });
        });
      }
    }
  },
  deleteAccessories: async (req, res) => {
    if (req.body.sizeId) {
      let size = await Sizes.findOne({ _id: req.body.sizeId });
      if (!size) {
        return res.status(400).json({ message: "can not found" });
      } else {
        Sizes.deleteOne({ _id: req.body.sizeId }).exec((error, data) => {
          if (error) return res.status(400).json({ message: error.message });
          if (data) return res.status(200).json({ data });
        });
      }
    } else {
      let color = await Colors.findOne({ _id: req.body.colorId });
      if (!color) {
        return res.status(400).json({ message: "can not found" });
      } else {
        Colors.deleteOne({ _id: req.body.colorId }).exec((error, data) => {
          if (error) return res.status(400).json({ message: error.message });
          if (data) return res.status(200).json({ data });
        });
      }
    }
  },
};
