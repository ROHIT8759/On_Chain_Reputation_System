"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReputationScores = generateReputationScores;
const fetchData_1 = require("../utils/fetchData");
// Score a single wallet's data
function scoreWallet(data) {
    const score = Math.floor(Math.random() * 100); // placeholder
    return {
        wallet: data.wallet,
        reputation_score: score,
        rank: score > 80 ? 'Gold' : score > 50 ? 'Silver' : 'Bronze',
        wallet_age_days: data.walletAge,
        tx_count_last_30d: data.txCount,
        asset_summary: data.assets,
        linked_socials: {
            twitter: null,
            lens: null
        }
    };
}
// Batch scoring for multiple wallets
async function generateReputationScores(wallets) {
    const walletsData = await (0, fetchData_1.fetchWalletData)(wallets);
    return walletsData.map(scoreWallet);
}
