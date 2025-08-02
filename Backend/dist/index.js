"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Dummy function to generate a reputation score
function calculateReputation(wallet) {
    // Placeholder logic — later we'll fetch on-chain data
    const lastChar = wallet.toLowerCase().slice(-1);
    const score = parseInt(lastChar, 16) % 10 + 50; // e.g., 50-59
    const reason = 'Based on wallet address pattern';
    return { score, reason };
}
// API endpoint
app.get('/api/reputation', (req, res) => {
    const wallet = req.query.wallet;
    if (!wallet || !wallet.startsWith('0x') || wallet.length < 10) {
        return res.status(400).json({ error: 'Invalid wallet address' });
    }
    const reputation = calculateReputation(wallet);
    res.json({ wallet, ...reputation });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
