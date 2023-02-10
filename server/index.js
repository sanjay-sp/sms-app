const express = require("express");
const cors = require("cors");

const messageRoutes = require("./routes/message-route");
const contactRoutes = require("./routes/contact-route");

const app = express();

app.use(cors());
app.use(express.json());

app.use(messageRoutes);
app.use(contactRoutes);

app.listen(4000, () => {
  console.log("Listening at PORT 4000...");
});
