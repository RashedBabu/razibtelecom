const { populate } = require("../models/ribonSwitch");
const Ribon = require("../models/ribonSwitch");

exports.getRibon = async (req, res) => {
  try {
    const allRibons = await Ribon.find();
    res.status(200).json(allRibons);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getEditRibon = async (req, res) => {
  const id = req.params.id;

  try {
    const battery = await Ribon.findById(id);

    res.status(200).json(battery);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createRibon = async (req, res) => {
  const {
    boxNumber,
    productName,
    modelName,
    quantity,
    allQuantity,
    price,
    replacement,
    date,
  } = req.body;

  try {
    const newRibon = new Ribon();
    newRibon.boxNumber = boxNumber;
    newRibon.productName = productName;
    newRibon.modelName = modelName;
    newRibon.quantity = quantity;
    newRibon.allQuantity = allQuantity;
    newRibon.price = price;
    newRibon.replacement = replacement;
    newRibon.date = date;

    await newRibon.save();

    res.status(201).json({ successMessage: "Create success " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editRibonDetails = async (req, res) => {
  const ribon = req.body;

  try {
    const editRibon = new Ribon(ribon);
    await Ribon.updateOne({ _id: req.params.id }, editRibon);
    res.status(201).json({ successMessage: "Seccessfully Updated " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteRibon = async (req, res) => {
  try {
    await Ribon.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};
