"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home, ShoppingCart, Globe } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-red-700 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
        <h1 className="text-2xl font-bold">Brasil Play Red</h1>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="#sobre" className="hover:text-gray-200">Sobre</Link>
          <Link href="#como-jogar" className="hover:text-gray-200">Como Jogar</Link>
          <Link href="#ranking" className="hover:text-gray-200">Ranking</Link>
          <Link href="#discord" className="hover:text-gray-200">Discord</Link>
        </div>

        {/* Botão menu hambúrguer (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* Dropdown menu mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-red-800 w-48 rounded-lg shadow-lg p-4 z-40 flex flex-col gap-3 md:hidden">
          <Link href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link href="#como-jogar" onClick={() => setMenuOpen(false)}>Como Jogar</Link>
          <Link href="#ranking" onClick={() => setMenuOpen(false)}>Ranking</Link>
          <Link href="#discord" onClick={() => setMenuOpen(false)}>Discord</Link>
        </div>
      )}

      {/* HEADER */}
      <header
        className="h-[80vh] flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/fundo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Brasil Play Red</h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            O melhor servidor SAMP Roleplay
          </p>
        </div>
      </header>

      {/* SEÇÃO DISCORD */}
      <section id="discord" className="max-w-4xl mx-auto p-6 text-center mt-12 bg-black/70 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Nosso Discord</h2>
        <iframe
          src="https://discord.com/widget?id=1394872603315015680&theme=dark"
          width="100%"
          height="400"
          className="rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* RODAPÉ FIXO COM BOTÕES */}
      <footer className="fixed bottom-0 left-0 w-full bg-red-700 flex justify-around items-center py-3 shadow-lg">
        <Link href="/" className="flex flex-col items-center text-white">
          <Home className="w-6 h-6" />
          <span className="text-sm">Início</span>
        </Link>
        <Link href="/loja" className="flex flex-col items-center text-white">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-sm">Loja</span>
        </Link>
        <Link href="/redes-sociais" className="flex flex-col items-center text-white">
          <Globe className="w-6 h-6" />
          <span className="text-sm">Redes</span>
        </Link>
      </footer>
    </main>
  );
}
