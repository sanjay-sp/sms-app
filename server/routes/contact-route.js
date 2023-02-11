const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.post("/api/create-contact", contactController.createContact);
router.get("/api/get-contacts", contactController.fetchContacts);
router.get("/api/get-contact-info", contactController.findContact);

module.exports = router;
