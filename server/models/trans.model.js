const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const TransSchema = new mongoose.Schema({

  paidTo: {
    type: String,
    required: [true, "Name of transaction is required!"]
  },

  amount: {
    type: String,
    required: [true, "Amount paid out is required!"]
  },

  datePaid: {
    type: String,
    required: [true, "Date bill was paid is required."]
  },

}, { timestamps: true });

module.exports = {
  Trans: mongoose.model('Trans', TransSchema),
  TransSchema: TransSchema
}