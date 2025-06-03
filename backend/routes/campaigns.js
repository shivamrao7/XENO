const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const Customer = require('../models/Customer');
const Log = require('../models/CommunicationLog');

router.get('/', async (req, res) => {
  const all = await Campaign.find().sort({ createdAt: -1 });
  res.json(all);
});

router.post('/', async (req, res) => {
  const { name, rules, message } = req.body;
  const customers = await Customer.find({
    spend: { $gt: 10000 },
    visits: { $lt: 3 }
  });

  const audienceSize = customers.length;
  const campaign = await Campaign.create({ name, rules, message, audienceSize });

  for (const c of customers) {
    const success = Math.random() > 0.1;
    const status = success ? 'SENT' : 'FAILED';

    await Log.create({
      campaignId: campaign._id,
      customerId: c._id,
      status,
      message
    });

    await fetch('http://localhost:5000/api/receipts', {
      method: 'POST',
      body: JSON.stringify({
        campaignId: campaign._id,
        customerId: c._id,
        status
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  res.json({ success: true });
});

module.exports = router;
