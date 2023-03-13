const Address = require("../models/address.model");

module.exports.addressCtrl = {
  createAdr: async (req, res) => {
    const { payload } = req.body;
    if (payload.isSelected) {
      const adrs = await Address.find({ user: req.user.id });
      let adr = adrs.filter((item) => item.isSelected === true);
      if (!adr.length) {
        const adrUser = new Address({
          ...payload,
          is_delivery: true,
          user: req.user.id,
        });
        await adrUser.save();
        return res.status(201).json({ address: adrUser });
      } else {
        await Address.updateOne(
          { _id: adr[0]._id },
          {
            $set: {
              isSelected: false,
            },
          }
        ).exec(async (error, add) => {
          if (error) return res.status(400).json({ message: error.message });
          if (add) {
            const adrUser = new Address({
              ...payload,
              user: req.user.id,
            });
            await adrUser.save();
            return res.status(201).json({ address: adrUser });
          }
        });
      }
    } else {
      const adrUser = new Address({
        ...payload,
        user: req.user.id,
      });
      await adrUser.save();
      return res.status(201).json({ address: adrUser });
    }
  },
  getAdr: async (req, res) => {
    try {
      const adrs = await Address.find({ user: req.user.id });
      let sort = adrs.reduce((acc, ele) => {
        if (!ele.isSelected) {
          return [...acc, ele];
        }
        return [ele, ...acc];
      }, []);
      return res.status(200).json({ addresses: sort });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  updateAdr: async (req, res) => {
    const { payload } = req.body;
    try {
      if (payload.isSelected) {
        const adrs = await Address.find({ user: req.user.id });
        let adr = adrs.filter((item) => item.isSelected === true);
        const data = await Address.updateOne(
          { _id: adr[0]._id },
          {
            $set: {
              isSelected: false,
            },
          }
        );
        if (data) {
          await Address.updateOne(
            { _id: payload._id },
            {
              $set: payload,
            }
          );
          res.status(200).json({});
        }
      } else {
        await Address.updateOne(
          { _id: payload._id },
          {
            $set: payload,
          }
        );
        res.status(200).json({});
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  deleteAdr: async (req, res) => {
    const { addressId } = req.body;
    try {
      const adr = await Address.findOne({ _id: addressId });
      if (!adr) {
        return res.status(400).json({ message: "not found" });
      }
      // if (adrs.length === 1) {
      Address.deleteOne({ _id: addressId }).exec(async (err, data) => {
        if (err) return res.status(400).json({ message: err.message });
        if (data) {
          const adrs = await Address.find({ user: req.user.id });
          if (adrs.length === 1) {
            await Address.updateOne(
              { _id: adrs[0]._id },
              {
                $set: {
                  isSelected: true,
                  is_delivery: true,
                },
              }
            ).exec((err, adr) => {
              if (err) return res.status(400).json({ message: err.message });
              if (adr) return res.status(200).json({});
            });
          } else {
            res.status(200).json({});
          }
        }
      });
      // } else {
      //   await Address.deleteOne({ _id: addressId });
      // }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  setDefaultAdr: async (req, res) => {
    const { addressId } = req.body;
    try {
      const adrs = await Address.find({ user: req.user.id });
      let adr = adrs.filter((item) => item.isSelected === true);
      const d = await Address.updateOne(
        { _id: adr[0]._id },
        {
          $set: {
            isSelected: false,
          },
        }
      );
      if (d) {
        await Address.updateOne(
          { _id: addressId },
          {
            $set: {
              isSelected: true,
            },
          }
        );
        res.status(200).json({});
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getDeliveryAdr: async (req, res) => {
    try {
      const { addressId } = req.body;
      const adrs = await Address.find({ user: req.user.id });
      let adr = adrs.filter((item) => item?.is_delivery == true);
      if (!adr.length) {
        let data = await Address.updateOne(
          { _id: addressId },
          {
            $set: {
              is_delivery: true,
            },
          }
        );
        res.status(200).json({});
      } else {
        let data = await Address.updateOne(
          {
            _id: adr[0]._id,
          },
          {
            $unset: { is_delivery: true },
          }
        );
        if (data) {
          let d = await Address.updateOne(
            { _id: addressId },
            {
              $set: {
                is_delivery: true,
              },
            }
          );
          res.status(200).json({});
        }
        // res.status(200).json({ data });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
