import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  "https://misty-compatible-feather.solana-mainnet.quiknode.pro/3b8afc50d896f3dd0fd4e509976105552b48411c/" || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "DkwhuCW6eDaqrQHEg26yxzeLtp9k1RAWsNDsxGMgHEwv"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"



export const collectionImageURL =
  process.env.NEXT_PUBLIC_COLLECTION_IMAGE_URL || "https://www.dogelana.com/images/sagadoges.gif";

export const collectionTitle =
  process.env.NEXT_PUBLIC_COLLECTION_TITLE || "Saga Doges";

export const collectionDescription =
  process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION || "These one-of-a-kind doges powered by Dogelana are sure to bring your Saga-inspired collection game to the next level. They were first minted early to Saga Mobile phone owners only, and are now available to everyone!";

export const tokenType =
  process.env.NEXT_PUBLIC_TOKEN_TYPE || "Token";

export const websiteURL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.dogelana.com";

export const twitterURL =
  process.env.NEXT_PUBLIC_TWITTER_URL || "https://www.x.com/realdogelana";

export const discordURL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UNjbTguY5x";