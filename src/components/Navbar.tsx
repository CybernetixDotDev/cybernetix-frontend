"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black bg-opacity-80 border-b border-cyan-400 shadow-lg shadow-cyan-500/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-cyan-400 neon-glow">
          Cybernetix
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium">
          <NavItem href="/dashboard" pathname={pathname} text="Dashboard" />
          <NavItem href="/profile" pathname={pathname} text="Profile" />
          <NavItem href="/marketplace" pathname={pathname} text="Marketplace" />
        </div>
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
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "text-cyan-300 neon-glow border border-cyan-400"
          : "text-gray-300 hover:text-cyan-400 hover:border-cyan-300 border border-transparent"
      }`}
    >
      {text}
    </Link>
  );
}
