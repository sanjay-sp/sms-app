const mongoose = require("mongoose");

const CreateContact = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Contact = mongoose.model("contacts", CreateContact);

module.exports = Contact;
