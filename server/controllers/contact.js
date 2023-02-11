const ContactModel = require("../models/create-contact-model");

exports.createContact = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;

  try {
    await ContactModel.create({
      firstName,
      lastName,
      phoneNumber,
    });
    res.json({ message: "contact created" });
  } catch (error) {
    console.log(error);
  }
};

exports.fetchContacts = async (req, res) => {
  try {
  } catch (error) {}
};

exports.findContact = async (req, res) => {
  try {
  } catch (error) {}
};
