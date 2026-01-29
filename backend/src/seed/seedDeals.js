require("dotenv").config();
const mongoose = require("mongoose");
const Deal = require("../models/Deal");

const MONGO_URI = process.env.MONGO_URI;

const deals = [
  {
    title: "AWS Credits",
    description: "Free AWS cloud credits for early-stage startups",
    category: "Cloud",
    isLocked: false,
  },
  {
    title: "Notion Pro",
    description: "Free Notion Pro for team collaboration",
    category: "Productivity",
    isLocked: true,
  },
  {
    title: "HubSpot Startup Program",
    description: "Marketing and CRM tools for startups",
    category: "Marketing",
    isLocked: false,
  },
];

const seedDeals = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected for seeding");

    await Deal.deleteMany(); // clear old deals
    await Deal.insertMany(deals);

    console.log("Deals seeded successfully ");
    process.exit();
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

seedDeals();
