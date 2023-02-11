const mongoose = require("mongoose");

const NewMessage = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  otp: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Message = mongoose.model("messages", NewMessage);

module.exports = Message;
