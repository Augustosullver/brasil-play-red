import { Trophy, User, Info, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: "url('/fundo.jpg')" }}
    >
      <header className="text-center py-8 bg-black/50 rounded-xl">
        <h1 className="text-4xl font-bold">Brasil Play Red</h1>
        <p className="text-lg text-gray-300">
          O servidor SAMP que é a sua cara!
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-red-800/80">
          <CardContent className="p-4">
            <Info className="mb-2 text-white" />
            <h2 className="text-xl font-semibold mb-1">Sobre o Servidor</h2>
            <p>
              Servidor Roleplay BR com sistema de empregos, facções, VIP e muito
              mais!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-red-800/80">
          <CardContent className="p-4">
            <User className="mb-2 text-white" />
            <h2 className="text-xl font-semibold mb-1">Como Jogar</h2>
            <p>
              Baixe o SAMP, conecte ao IP: <b>177.54.146.232:7782</b> e divirta-se.

              Baixe o SAMP, conecte ao IP: <b>177.54.146.232:7782</b> e
              divirta-se.
	       ac67fbf (Adicionado fundo com imagem no site)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-red-800/80">
          <CardContent className="p-4">
            <Trophy className="mb-2 text-white" />
            <h2 className="text-xl font-semibold mb-1">Ranking</h2>
            <p>
              Veja quem são os tops do servidor em kills, dinheiro, facções e
              mais.
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-12 text-center bg-black/50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Como Jogar no Brasil Play Red</h2>
      <section className="mt-12 text-center bg-black/50 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          Como Jogar no Brasil Play Red
        </h2>
	 ac67fbf (Adicionado fundo com imagem no site)
        <p className="mb-6 text-gray-200">
          Baixe o SAMP, instale o GTA San Andreas e conecte-se ao IP do servidor
          para jogar com a galera!
        </p>
        <a
          href="https://www.sa-mp.mp/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-700 hover:bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          🎮 Baixar SAMP Agora
        </a>
      </section>
      <section className="mt-12 text-center bg-black/50 p-6 rounded-xl">
      <section className="mt-12 text-center bg-black/50 rounded-xl p-6">
       ac67fbf (Adicionado fundo com imagem no site)
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircle className="text-white w-6 h-6" />
          <h2 className="text-2xl font-bold">Nosso Discord</h2>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://discord.com/widget?id=1111407916965167144&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>

        <div className="mt-4">
          <a
            href="https://discord.gg/2FvPEJaB9T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white underline text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Clique aqui para entrar no nosso Discord
          </a>
        </div>
      </section>
      <footer className="mt-16 text-center text-sm text-gray-400 bg-black/50 p-4 rounded-xl">
      <footer className="mt-16 text-center text-sm text-gray-400 bg-black/50 rounded-xl py-4">
       ac67fbf (Adicionado fundo com imagem no site)
        &copy; 2025 Brasil Play Red — Todos os direitos reservados. |
        <a
          href="https://www.sa-mp.mp/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline ml-1"
        >
          Baixe o SAMP
        </a>
      </footer>
    </main>
  );
}
