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
    const contacts = await ContactModel.find({});
    res.json(contacts);
  } catch (error) {
    console.log(error);
  }
};

exports.findContact = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await ContactModel.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
