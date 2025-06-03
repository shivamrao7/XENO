const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  campaignId: mongoose.Schema.Types.ObjectId,
  customerId: mongoose.Schema.Types.ObjectId,
  status: String,
  message: String
});

module.exports = mongoose.model('CommunicationLog', LogSchema);
