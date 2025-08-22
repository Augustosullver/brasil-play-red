import { Trophy, User, Info, MessageCircle, Facebook, Youtube } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header
        className="h-[80vh] flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/fundo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600 drop-shadow-lg">
            Brasil Play Red
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
            O servidor SAMP Roleplay que é a sua cara! Entre, crie sua história e viva no mundo do roleplay.
          </p>
          <a
            href="#como-jogar"
            className="bg-red-600 hover:bg-red-500 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition"
          >
            🎮 Juntar-se Agora
          </a>
        </div>
      </header>

      {/* SOBRE / COMO JOGAR / RANKING */}
      <section id="sobre" className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-20">
        <Card className="bg-red-800/80 backdrop-blur-md border-none">
          <CardContent className="p-6 text-center">
            <Info className="mb-3 mx-auto text-white w-10 h-10" />
            <h2 className="text-2xl font-bold mb-2">Sobre o Servidor</h2>
            <p className="text-gray-200">
              Servidor Roleplay BR com empregos, facções, sistema de VIP, ranking e muito mais.
            </p>
          </CardContent>
        </Card>

        <Card id="como-jogar" className="bg-red-800/80 backdrop-blur-md border-none">
          <CardContent className="p-6 text-center">
            <User className="mb-3 mx-auto text-white w-10 h-10" />
            <h2 className="text-2xl font-bold mb-2">Como Jogar</h2>
            <p className="text-gray-200 mb-3">
              Baixe o SAMP, instale o GTA San Andreas e conecte-se ao IP:
            </p>
            <p className="font-bold text-lg text-white">177.54.146.232:7782</p>
            <a
              href="https://www.sa-mp.mp/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-red-600 hover:bg-red-500 px-6 py-2 rounded-lg font-semibold"
            >
              ⬇️ Baixar SAMP
            </a>
          </CardContent>
        </Card>

        <Card id="ranking" className="bg-red-800/80 backdrop-blur-md border-none">
          <CardContent className="p-6 text-center">
            <Trophy className="mb-3 mx-auto text-white w-10 h-10" />
            <h2 className="text-2xl font-bold mb-2">Ranking</h2>
            <p className="text-gray-200">
              Confira os tops do servidor em kills, dinheiro, facções e muito mais!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* DISCORD */}
      <section id="discord" className="max-w-5xl mx-auto p-6 text-center mt-16 bg-black/70 rounded-xl shadow-lg">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MessageCircle className="w-7 h-7 text-white" />
          <h2 className="text-3xl font-bold">Nosso Discord</h2>
        </div>
        <p className="text-gray-300 mb-6">Entre no nosso Discord e faça parte da comunidade!</p>
        <div className="flex justify-center">
          <iframe
            src="https://discord.com/widget?id=1394872603315015680&theme=dark"
            width="100%"
            height="400"
            className="rounded-xl shadow-lg"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div className="mt-6">
          <a
            href="https://discord.gg/2FvPEJaB9T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white underline text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar no Discord
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-16 bg-red-700 py-6 text-center">
        <p className="text-sm text-gray-200">
          &copy; 2025 Brasil Play Red — Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/groups/540876708479252/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
          <a
            href="https://youtube.com/@barone_samp?si=dhHroxpWQKpmMHXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Youtube className="w-5 h-5" /> YouTube
          </a>
        </div>
      </footer>
    </main>
  );
 }
        
