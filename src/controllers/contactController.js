/*>>===//===>>=====>> Title: contactController >>===//===>>=====>>
 * Description: This is the controller for the contact APIs.
 * Author: Muktadir Hossain (`https://github.com/muktadirhossain`) ,
 * Date: 03/03/2023 .
 >>===//===>>====>> *** >>===//===>>===>> *** >>===//===>>===>>*/

// import express async Handlers from 'express-async-handler'
// to handler the async function's try catch block

const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");

// @description: Get all the contacts.
// @route GET /api/contacts
// @access Public
const getContact = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};
// @description: POST Contact API.
// @route POST /api/contacts
// @access Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  console.log("Request Body:", name, email, phone);
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide all the required fields");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(200).json(contact);
});
// @description: Get contact By ID.
// @route GET /api/contacts/:id
// @access Public
const getContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});
// @description: Get all the contacts.
// @route GET /api/contacts/:id
// @access Public
const updateContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});
// @description: Delete contact By ID.
// @route DELETE /api/contacts/:id
// @access Public
const deleteContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getContactByID,
  updateContactByID,
  deleteContactByID,
};
