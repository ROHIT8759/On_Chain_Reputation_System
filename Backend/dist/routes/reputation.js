"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scoreEngine_1 = require("../services/scoreEngine");
const router = express_1.default.Router();
// POST /api/score
router.post('/score', async (req, res) => {
    const { addresses } = req.body;
    if (!Array.isArray(addresses) || addresses.length === 0) {
        return res.status(400).json({ error: 'addresses must be a non-empty array' });
    }
    try {
        const scores = await (0, scoreEngine_1.generateReputationScores)(addresses);
        res.json({ scores });
    }
    catch (err) {
        const message = err && typeof err === 'object' && 'message' in err ? err.message : String(err);
        res.status(500).json({ error: 'Failed to calculate scores', details: message });
    }
});
exports.default = router;
