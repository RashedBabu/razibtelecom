const express = require("express");
const router = express.Router();
const {
  getRibon,
  createRibon,
  getEditRibon,
  editRibonDetails,
  deleteRibon,
} = require("../controllers/ribonSwitch");
const battery = require("../models/ribonSwitch");

router.post("/", createRibon);
router.get("/", getRibon);
router.get("/:id", getEditRibon);
router.put("/:id", editRibonDetails);
router.delete("/:id", deleteRibon);

module.exports = router;
