const mongoose = require("mongoose");

const NewMessage = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: Number, required: true },
  otp: { type: Number, required: true },
  createdAt: { type: new Date(), required: true },
});

const Message = mongoose.model("message", NewMessage);

module.exports = Message;
