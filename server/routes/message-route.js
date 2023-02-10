const express = require("express");

const router = express.Router();

router.post("/api/send-otp", (req, res) => {
  res.send("Message Sent");
});

router.get("/api/get-messages", (req, res) => {
  res.send("Fetched all messages");
});

module.exports = router;
