const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: String,
  rules: Object,
  audienceSize: Number,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
