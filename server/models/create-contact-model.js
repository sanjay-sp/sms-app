const mongoose = require("mongoose");

const CreateContact = new mongoose.Schema({
  firstName: { type: String, required: true },
  firstName: { type: String, required: true },
  contact: { type: Number, required: true },
});

const Contact = mongoose.model("contact", CreateContact);

module.exports = Contact;
