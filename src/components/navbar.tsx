// src/components/navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">
          Brasil Play Red
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:text-red-400">Sobre</a>
          <a href="#como-jogar" className="hover:text-red-400">Como jogar</a>
          <a href="#ranking" className="hover:text-red-400">Ranking</a>
          <a href="#discord" className="hover:text-red-400">Discord</a>
        </div>
      </div>
    </nav>
  );
}
