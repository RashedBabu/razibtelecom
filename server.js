const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const authRoutes = require("./routes/auth");
const logicRoutes = require("./routes/display");
const ribonRoutes = require("./routes/ribon");
const speakerRoutes = require("./routes/speaker");
const ribonSwitchRoutes = require("./routes/ribonSwitch");


// midleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
// app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/logic", logicRoutes);
app.use("/api/ribon", ribonRoutes);
app.use("/api/speaker", speakerRoutes);
app.use("/api/switch", ribonSwitchRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
