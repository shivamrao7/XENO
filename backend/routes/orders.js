const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const o = new Order(req.body);
  await o.save();
  res.json({ success: true });
});

module.exports = router;
