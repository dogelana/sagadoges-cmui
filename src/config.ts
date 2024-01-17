import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "FVr5oQFUzxTEtttFPLVpncHxZh8f7xwxKx9yA7ANZgp5"
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
  process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION || "Congratulations on your Solana Saga phone! That was a smart choice! Now please enjoy a Saga Doge (or two)! These one-of-a-kind doges powered by Dogelana are sure to bring your Saga collection game to the next level.";

export const tokenType =
  process.env.NEXT_PUBLIC_TOKEN_TYPE || "Token";

export const websiteURL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.dogelana.com";

export const twitterURL =
  process.env.NEXT_PUBLIC_TWITTER_URL || "https://www.x.com/realdogelana";

export const discordURL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UNjbTguY5x";