"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-80 border-b border-cyan-400 shadow-lg shadow-cyan-500/20">
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

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <NavItem href="/dashboard" pathname={pathname} text="Dashboard" />
          <NavItem href="/profile" pathname={pathname} text="Profile" />
          <NavItem href="/marketplace" pathname={pathname} text="Marketplace" />
        </div>
      </div>

      {/* Mobile Navigation Menu (Full Screen Dropdown) */}
      <div
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 transition-transform duration-300 ease-in-out ${
          isOpen ? "h-auto py-4 flex flex-col items-center" : "hidden"
        }`}
      >
        <NavItem href="/dashboard" pathname={pathname} text="Dashboard" />
        <NavItem href="/profile" pathname={pathname} text="Profile" />
        <NavItem href="/marketplace" pathname={pathname} text="Marketplace" />
      </div>
    </nav>
  );
}

// Navigation Item Component
function NavItem({ href, pathname, text }: { href: string; pathname: string; text: string }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`block w-full text-center py-3 text-lg transition-all duration-300 ${
        isActive
          ? "text-cyan-300 neon-glow border-b border-cyan-400"
          : "text-gray-300 hover:text-cyan-400 hover:border-b hover:border-cyan-300"
      }`}
    >
      {text}
    </Link>
  );
}
