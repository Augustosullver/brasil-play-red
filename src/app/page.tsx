import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pb-32">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-red-700 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
        <h1 className="text-2xl font-bold">Brasil Play Red</h1>
        <div className="flex gap-6 text-lg font-medium">
          <a href="#sobre" className="hover:text-gray-200">Sobre</a>
          <a href="#como-jogar" className="hover:text-gray-200">Como Jogar</a>
          <a href="#ranking" className="hover:text-gray-200">Ranking</a>
          <a href="#discord" className="hover:text-gray-200">Discord</a>
        </div>
      </nav>

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

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {/* Aqui você pode colocar os Cards que já tinha feito */}
      </section>

      {/* DISCORD */}
      <section
        id="discord"
        className="max-w-4xl mx-auto p-6 text-center mt-12 bg-black/70 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Nosso Discord</h2>
        <iframe
          src="https://discord.com/widget?id=1394872603315015680&theme=dark"
          width="100%"
          height="400"
          className="rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* BOTÃO DA PLAY STORE */}
      <div className="flex justify-center mt-12">
        <a
          href="https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 px-8 py-4 text-xl font-bold rounded-lg shadow-lg transition text-white"
        >
          🎮 Baixar na Play Store
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-red-700 text-center p-4">
        &copy; 2025 Brasil Play Red — Todos os direitos reservados.
      </footer>
    </main>
  );
}
