async function fetchWalletData(wallet) {
  // Placeholder data — to be replaced with actual Alchemy/Covalent/Aptos API logic
  return {
    walletAge: 365, // days
    txCount: 120,   // number of tx
    assets: {
      stablecoin_ratio: 0.3,
      bluechip_ratio: 0.6,
      nft_count: 3
    }
  };
}

module.exports = { fetchWalletData };
