import express from 'express';
import { generateReputationScores } from '../services/scoreEngine';

const router = express.Router();

// POST /api/score
router.post('/score', async (req, res) => {
  const { addresses } = req.body;
  if (!Array.isArray(addresses) || addresses.length === 0) {
    return res.status(400).json({ error: 'addresses must be a non-empty array' });
  }
  try {
    const scores = await generateReputationScores(addresses);
    res.json({ scores });
  } catch (err: any) {
    const message = err && typeof err === 'object' && 'message' in err ? (err as Error).message : String(err);
    res.status(500).json({ error: 'Failed to calculate scores', details: message });
  }
});

export default router;
