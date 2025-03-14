"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ethers, Eip1193Provider } from "ethers";

interface Web3ContextProps {
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  buyNFT: (nftAddress: string, price: string) => Promise<void>;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Restore wallet connection from local storage
  useEffect(() => {
    const storedWallet = localStorage.getItem("walletAddress");
    if (storedWallet) {
      setWalletAddress(storedWallet);
    }
  }, []);

  // Connect Wallet
  const connectWallet = async (): Promise<void> => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is required!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);
      localStorage.setItem("walletAddress", address); // Persist session
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error connecting wallet:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  // Disconnect Wallet (Clear session)
  const disconnectWallet = (): void => {
    setWalletAddress(null);
    localStorage.removeItem("walletAddress"); // Clear session
  };

  // Buy NFT
  const buyNFT = async (nftAddress: string, price: string): Promise<void> => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum as Eip1193Provider);
      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to: nftAddress,
        value: ethers.parseEther(price),
      });

      await tx.wait();
      alert(`NFT purchased successfully! TX Hash: ${tx.hash}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Purchase failed:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      alert("Purchase failed, check console for details.");
    }
  };

  return (
    <Web3Context.Provider value={{ walletAddress, connectWallet, disconnectWallet, buyNFT }}>
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
