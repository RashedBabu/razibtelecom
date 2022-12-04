const express = require("express");
const router = express.Router();
const {
  getRibon,
  createRibon,
  getEditRibon,
  editRibonDetails,
  deleteRibon,
} = require("../controllers/ribon");
const battery = require("../models/ribon");

router.post("/", createRibon);
router.get("/", getRibon);
router.get("/:id", getEditRibon);
router.put("/:id", editRibonDetails);
router.delete("/:id", deleteRibon);

module.exports = router;
