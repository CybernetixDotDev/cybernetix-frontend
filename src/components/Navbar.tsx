"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-80 border-b border-cyan-400 shadow-lg shadow-cyan-500/20 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-cyan-400 neon-text">
          Cybernetix
        </Link>

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

      {/* Animated Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 border-t border-cyan-400 z-50"
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
