const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  spend: Number,
  visits: Number,
  lastActive: Date
});

module.exports = mongoose.model('Customer', CustomerSchema);
