const express = require("express");
const router = express.Router();
const {
  getBattery,
  createBattery,
  getEditBettery,
  editBatteryDetails,
  deleteSpeaker,
} = require("../controllers/speaker");
const battery = require("../models/speaker");

router.post("/", createBattery);
router.get("/", getBattery);
router.get("/:id", getEditBettery);
router.put("/:id", editBatteryDetails);
router.delete("/:id", deleteSpeaker);

module.exports = router;
