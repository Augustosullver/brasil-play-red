import { Trophy, User, Info, MessageCircle, Youtube, Facebook } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
          <a
            href="#como-jogar"
            className="bg-red-600 hover:bg-red-500 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
          >
            🎮 Juntar-se Agora
          </a>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section id="sobre" className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Sobre */}
        <div>
          <Card className="bg-red-800/80 backdrop-blur-md border-none">
            <CardContent className="p-6 text-center">
              <Info className="mb-3 mx-auto text-white w-10 h-10" />
              <h2 className="text-2xl font-bold mb-2">Sobre o Servidor</h2>
              <p>
                Servidor Roleplay BR com sistema de empregos, facções, VIP e muito mais!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Como Jogar */}
        <div id="como-jogar">
          <Card className="bg-red-800/80 backdrop-blur-md border-none">
            <CardContent className="p-6 text-center">
              <User className="mb-3 mx-auto text-white w-10 h-10" />
              <h2 className="text-2xl font-bold mb-2">Como Jogar</h2>
              <p>
                Baixe o SAMP, conecte ao IP: <b>177.54.146.232:7782</b> e divirta-se.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ranking */}
        <div id="ranking">
          <Card className="bg-red-800/80 backdrop-blur-md border-none">
            <CardContent className="p-6 text-center">
              <Trophy className="mb-3 mx-auto text-white w-10 h-10" />
              <h2 className="text-2xl font-bold mb-2">Ranking</h2>
              <p>
                Veja os tops do servidor em kills, dinheiro, facções e muito mais.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DISCORD */}
      <section id="discord" className="max-w-4xl mx-auto p-6 text-center mt-12 bg-black/70 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Nosso Discord</h2>
        <iframe
          src="https://discord.com/widget?id=1394872603315015680&theme=dark"
          width="100%"
          height="400"
          className="rounded-xl shadow-lg"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 bg-red-700 text-center p-6">
        <p>&copy; 2025 Brasil Play Red — Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/groups/540876708479252/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center gap-2"
          >
            <Facebook className="w-6 h-6" /> Facebook
          </a>
          <a
            href="https://youtube.com/@barone_samp?si=dhHroxpWQKpmMHXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 flex items-center gap-2"
          >
            <Youtube className="w-6 h-6" /> YouTube
          </a>
        </div>
      </footer>
    </main>
  );
}
