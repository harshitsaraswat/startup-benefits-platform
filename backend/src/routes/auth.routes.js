const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

const authMiddleware = require("../middleware/auth.middleware");

router.get("/me", authMiddleware, async (req, res) => {
  const User = require("../models/User");
  const user = await User.findById(req.user.id).select("name email");
  res.json(user);
});


module.exports = router;
