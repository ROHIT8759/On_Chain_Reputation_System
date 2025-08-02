import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy function to generate a reputation score
function calculateReputation(wallet: string): { score: number; reason: string } {
    // Placeholder logic — later we’ll fetch on-chain data
    const lastChar = wallet.toLowerCase().slice(-1);
    const score = parseInt(lastChar, 16) % 10 + 50; // e.g., 50-59
    const reason = 'Based on wallet address pattern';
    return { score, reason };
}

// API endpoint
app.get('/api/reputation', (req, res) => {
    const wallet = req.query.wallet as string;

    if (!wallet || !wallet.startsWith('0x') || wallet.length < 10) {
        return res.status(400).json({ error: 'Invalid wallet address' });
    }

    const reputation = calculateReputation(wallet);
    res.json({ wallet, ...reputation });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
