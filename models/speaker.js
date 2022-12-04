const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema(
  {
    boxNumber: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,

      required: true,
    },
    allQuantity: {
      type: String,

      required: true,
    },
    price: {
      type: String,

      required: true,
    },
    replacement: {
      type: String,

      required: true,
    },

    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const battery = mongoose.model("touch", batterySchema);

module.exports = battery;
