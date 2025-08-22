"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          Brasil Play Red
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-red-400 transition">
            Início
          </Link>
          <Link href="#sobre" className="hover:text-red-400 transition">
            Sobre
          </Link>
          <Link href="#como-jogar" className="hover:text-red-400 transition">
            Como Jogar
          </Link>
          <Link href="#ranking" className="hover:text-red-400 transition">
            Ranking
          </Link>
          <Link href="#discord" className="hover:text-red-400 transition">
            Discord
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="hover:text-red-400 transition">
            Início
          </Link>
          <Link href="#sobre" className="hover:text-red-400 transition">
            Sobre
          </Link>
          <Link href="#como-jogar" className="hover:text-red-400 transition">
            Como Jogar
          </Link>
          <Link href="#ranking" className="hover:text-red-400 transition">
            Ranking
          </Link>
          <Link href="#discord" className="hover:text-red-400 transition">
            Discord
          </Link>
        </div>
      )}
    </nav>
  );
}
