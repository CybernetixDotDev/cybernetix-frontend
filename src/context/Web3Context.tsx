"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

interface Web3ContextProps {
  walletAddress: string | null;
  connectWallet: () => void;
  buyNFT: (nftAddress: string, price: string) => void;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Connect to Wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is required!");
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setWalletAddress(await signer.getAddress());
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Buy NFT Function
  const buyNFT = async (nftAddress: string, price: string) => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Simulate NFT Purchase (Replace with actual smart contract function)
      const tx = await signer.sendTransaction({
        to: nftAddress, // Seller address or smart contract address
        value: ethers.parseEther(price),
      });

      await tx.wait();
      alert(`NFT purchased successfully! TX Hash: ${tx.hash}`);
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed, check console for details.");
    }
  };

  return (
    <Web3Context.Provider value={{ walletAddress, connectWallet, buyNFT }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
}
