const express = require("express");
const router = express.Router();

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
   res.send("Get all user contacts");
});

// @route   POST  api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
   res.send("Add a new  contact");
});

// @route   PUT  api/contacts/:id
// @desc    Update an existing contact
// @access  Private
router.put("/:id", (req, res) => {
   res.send("Update an existing contact");
});

// @route   DELETE  api/contacts/:id
// @desc    Delete an existing contact
// @access  Private
router.delete("/:id", (req, res) => {
   res.send("Delete an existing contact");
});

module.exports = router;