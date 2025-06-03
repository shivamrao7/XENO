const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const isSuccess = Math.random() < 0.9;
    res.status(200).json({ status: isSuccess ? 'SENT' : 'FAILED' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
