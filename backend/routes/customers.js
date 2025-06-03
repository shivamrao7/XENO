const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.post('/', async (req, res) => {
  const c = new Customer(req.body);
  await c.save();
  res.json({ success: true });
});

module.exports = router;
