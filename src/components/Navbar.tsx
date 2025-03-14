"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWeb3 } from "../context/Web3Context";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { walletAddress, connectWallet } = useWeb3();

  return (
    <nav className="w-full bg-black bg-opacity-80 border-b border-cyan-400 shadow-lg shadow-cyan-500/20 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-cyan-400 neon-text">
          Cybernetix
        </Link>

        {/* Wallet Connection Button */}
        <button
          className="hidden md:block px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition-all"
          onClick={connectWallet}
        >
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <NavItem href="/dashboard" pathname={pathname} text="Dashboard" />
          <NavItem href="/profile" pathname={pathname} text="Profile" />
          <NavItem href="/marketplace" pathname={pathname} text="Marketplace" />
        </div>
      </div>

      {/* Animated Mobile Navigation Menu with Neon Blur Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full h-screen bg-black bg-opacity-60 backdrop-blur-md backdrop-saturate-150 border-t border-cyan-400 flex flex-col items-center justify-center space-y-6 z-50"
          >
            <NavItem href="/dashboard" pathname={pathname} text="Dashboard" onClick={() => setIsOpen(false)} />
            <NavItem href="/profile" pathname={pathname} text="Profile" onClick={() => setIsOpen(false)} />
            <NavItem href="/marketplace" pathname={pathname} text="Marketplace" onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Navigation Item Component
function NavItem({
  href,
  pathname,
  text,
  onClick,
}: {
  href: string;
  pathname: string;
  text: string;
  onClick?: () => void;
}) {
  const isActive = pathname === href;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`block w-full text-center py-3 text-lg transition-all duration-300 ${
          isActive
            ? "text-cyan-300 neon-glow border-b border-cyan-400"
            : "text-gray-300 hover:text-cyan-400 hover:border-b hover:border-cyan-300"
        }`}
      >
        {text}
      </Link>
    </motion.div>
  );
}
