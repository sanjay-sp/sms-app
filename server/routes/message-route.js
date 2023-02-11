const express = require("express");

const messageController = require("../controllers/message");

const router = express.Router();

router.get("/api/get-messages", messageController.getAllMessages);
router.post("/api/send-message", messageController.sendMessage);

module.exports = router;
