const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const messageRoutes = require("./routes/message-route");
const contactRoutes = require("./routes/contact-route");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

app.use(messageRoutes);
app.use(contactRoutes);

app.listen(4000, () => {
  console.log("Listening at PORT 4000...");
});
