import { fetchWalletData } from '../utils/fetchData';

// Score a single wallet's data
function scoreWallet(data: any) {
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
export async function generateReputationScores(wallets: string[]) {
  const walletsData = await fetchWalletData(wallets);
  return walletsData.map(scoreWallet);
}
