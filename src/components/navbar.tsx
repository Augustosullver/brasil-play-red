"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Brasil Play Red</h1>
        <ul className="flex gap-6">
          <li>
            <a href="#inicio" className="hover:text-red-500 transition">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-red-500 transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#como-jogar" className="hover:text-red-500 transition">
              Como Jogar
            </a>
          </li>
          <li>
            <a href="#discord" className="hover:text-red-500 transition">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
