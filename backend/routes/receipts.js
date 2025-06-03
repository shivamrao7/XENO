const express = require('express');
const router = express.Router();
const Log = require('../models/CommunicationLog');

router.post('/', async (req, res) => {
  const { campaignId, customerId, status } = req.body;
  await Log.updateOne({ campaignId, customerId }, { status });
  res.json({ updated: true });
});

module.exports = router;
