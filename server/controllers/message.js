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
  const { firstName, lastName, otp, phoneNumber } = req.body;
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  try {
    const client = require("twilio")(accountSid, authToken);
    client.messages
      .create(
        {
          body: `Hi, Your OTP is: ${otp}`,
          to: phoneNumber,
          from: "+1 620 869 6548",
        },
        (err) => res.json({ message: "error" })
      )
      .then(async () => {
        try {
          await MessageModel.create({ firstName, lastName, phoneNumber, otp });
          res.json({ message: "success" });
        } catch (error) {
          res.json({ message: "error" });
          console.log("Message create error", error);
        }
      });
  } catch (error) {
    console.log("Message catch error");
    res.json({ message: "error" });
  }
};
