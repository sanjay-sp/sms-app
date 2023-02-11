const twilio = require("twilio");
require("dotenv").config();

const MessageModel = require("../models/new-message-model");

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find({});
    res.json(messages);
  } catch (error) {}
};

exports.sendMessage = async (req, res) => {
  const { otp, phoneNumber } = req.body;
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  try {
    const client = require("twilio")(accountSid, authToken);
    client.messages
      .create({
        body: { otp },
        to: { phoneNumber },
        from: "+1 620 869 6548",
      })
      .then(() => res.json({ message: "OTP sent successfully" }));
  } catch (error) {}
};
