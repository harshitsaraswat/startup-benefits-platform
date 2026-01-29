const Claim = require("../models/Claim");
const Deal = require("../models/Deal");

exports.claimDeal = async (req, res) => {
  const deal = await Deal.findById(req.body.dealId);

  if (deal.isLocked && !req.user.isVerified) {
    return res.status(403).json({ message: "Deal is locked" });
  }

  const claim = await Claim.create({
    userId: req.user.id,
    dealId: req.body.dealId,
  });

  res.status(201).json(claim);
};

exports.getMyClaims = async (req, res) => {
  const claims = await Claim.find({ userId: req.user.id }).populate("dealId");
  res.json(claims);
};
