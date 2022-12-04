const express = require("express");
const router = express.Router();
const {
  getDisplay,
  createDisplay,
  getEditDisplay,
  editDisplayDetails,
  deleteLogic,
} = require("../controllers/logic");
const display = require("../models/display");

router.post("/", createDisplay);
router.get("/", getDisplay);
router.get("/:id", getEditDisplay);
router.put("/:id", editDisplayDetails);
router.delete("/:id", deleteLogic);

module.exports = router;
