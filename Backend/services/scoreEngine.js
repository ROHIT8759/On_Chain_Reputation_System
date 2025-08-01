const { fetchWalletData } = require('../utils/fetchData');

async function generateReputationScore(wallet) {
  // Mocked example: add real logic later
  const walletData = await fetchWalletData(wallet);

  const score = Math.floor(Math.random() * 100); // placeholder

  return {
    wallet,
    reputation_score: score,
    rank: score > 80 ? 'Gold' : score > 50 ? 'Silver' : 'Bronze',
    wallet_age_days: walletData.walletAge,
    tx_count_last_30d: walletData.txCount,
    asset_summary: walletData.assets,
    linked_socials: {
      twitter: null,
      lens: null
    }
  };
}

module.exports = { generateReputationScore };
