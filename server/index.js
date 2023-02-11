const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const messageRoutes = require("./routes/message-route");
const contactRoutes = require("./routes/contact-route");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sanjay:rUtKnjKbX3RSWZte@cluster0.kkdls.mongodb.net/interviewTask?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

app.use(messageRoutes);
app.use(contactRoutes);

app.listen(4000, () => {
  console.log("Listening at PORT 4000...");
});
