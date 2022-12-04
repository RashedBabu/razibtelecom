const mongoose = require("mongoose");

const displaySchema = new mongoose.Schema(
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
    price2: {
      type: String,

      required: true,
    },
    price3: {
      type: String,

      required: true,
    },
    price4: {
      type: String,

      required: true,
    },
    replacement: {
      type: String,

      required: true,
    },
    l_sell: {
      type: String,

      required: true,
    },

    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const display = mongoose.model("display", displaySchema);

module.exports = display;
