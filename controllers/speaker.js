const { populate } = require("../models/speaker");
const Battery = require("../models/speaker");

exports.getBattery = async (req, res) => {
  try {
    const allbatterys = await Battery.find();
    res.status(200).json(allbatterys);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getEditBettery = async (req, res) => {
  const id = req.params.id;

  try {
    const battery = await Battery.findById(id);

    res.status(200).json(battery);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createBattery = async (req, res) => {
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
    const newBattery = new Battery();
    newBattery.boxNumber = boxNumber;
    newBattery.productName = productName;
    newBattery.modelName = modelName;
    newBattery.quantity = quantity;
    newBattery.allQuantity = allQuantity;
    newBattery.price = price;
    newBattery.replacement = replacement;
    newBattery.date = date;

    await newBattery.save();

    res.status(201).json({ successMessage: "Create success " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editBatteryDetails = async (req, res) => {
  const battery = req.body;

  try {
    const editBattery = new Battery(battery);
    await Battery.updateOne({ _id: req.params.id }, editBattery);
    res.status(201).json({ successMessage: "Seccessfully Updated " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteSpeaker = async (req, res) => {
  try {
    await Battery.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};
