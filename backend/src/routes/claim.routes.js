const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {
  claimDeal,
  getMyClaims,
} = require("../controllers/claim.controller");

router.post("/", authMiddleware, claimDeal);
router.get("/my", authMiddleware, getMyClaims);

module.exports = router;
