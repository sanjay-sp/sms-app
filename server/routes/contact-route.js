const express = require("express");

const router = express.Router();

router.post("/api/create-contact", (req, res) => {
  res.send("Contact created");
});

router.get("/api/get-contacts", (req, res) => {
  res.send("Fetched all contacts");
});

module.exports = router;
