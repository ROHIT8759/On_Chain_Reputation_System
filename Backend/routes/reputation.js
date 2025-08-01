const express = require('express');
const router = express.Router();
const { generateReputationScore } = require('../services/scoreEngine');

router.get('/', async (req, res) => {
  const { wallet } = req.query;

  if (!wallet) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  try {
    const result = await generateReputationScore(wallet);
    res.json(result);
  } catch (err) {
    console.error('Error generating score:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
