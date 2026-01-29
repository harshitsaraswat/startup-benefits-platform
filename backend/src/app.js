const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const dealRoutes = require("./routes/deal.routes");
const claimRoutes = require("./routes/claim.routes");

const app = express();

app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

module.exports = app;
