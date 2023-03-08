const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactByID,
  updateContactByID,
  deleteContactByID,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContactByID).put(updateContactByID).delete(deleteContactByID);

module.exports = router;
