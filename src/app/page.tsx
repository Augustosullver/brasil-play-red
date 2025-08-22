import { Trophy, User, Info, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured-full/papel-de-parede-para-celular-gratis-gta-san-andreas-6fz9tt0ivo7irsjj.jpg')",
      }}
    >
      {/* Início */}
      <header
        id="inicio"
        className="text-center py-8 bg-black/60 rounded-xl mt-16"
      >
        <h1 className="text-4xl font-bold">Brasil Play Red</h1>
        <p className="text-lg text-gray-300">
          O servidor SAMP que é a sua cara!
        </p>
      </header>

      {/* Sobre */}
      <section
        id="sobre"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      >
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
              Baixe o SAMP, conecte ao IP: <b>177.54.146.232:7782</b> e
              divirta-se.
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

      {/* Como Jogar */}
      <section
        id="como-jogar"
        className="mt-12 text-center bg-black/60 rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">
          Como Jogar no Brasil Play Red
        </h2>
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

      {/* Discord + Redes Sociais */}
      <section
        id="discord"
        className="mt-12 text-center bg-black/60 rounded-xl p-6"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircle className="text-white w-6 h-6" />
          <h2 className="text-2xl font-bold">Nosso Discord</h2>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://discord.com/widget?id=1394872603315015680&theme=dark"
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

        {/* Redes Sociais */}
        <div className="mt-8 flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/groups/540876708479252/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="white"
              className="hover:fill-blue-500"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@barone_samp?si=SkLnIbx03uC8JUrd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="white"
              className="hover:fill-red-600"
            >
              <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.2 4 12 4 12 4s-7.2 0-9.5.2a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2C4.8 20 12 20 12 20s7.2 0 9.5-.2a2.9 2.9 0 0 0 2-2c.3-1.9.5-3.9.5-5.8s-.2-3.9-.5-5.8ZM9.8 15.5V8.5L15.5 12l-5.7 3.5Z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-16 text-center text-sm text-gray-300 bg-black/60 rounded-xl p-4">
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
