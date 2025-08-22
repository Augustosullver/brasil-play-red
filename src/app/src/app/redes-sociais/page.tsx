import { Youtube, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

export default function RedesSociaisPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-24 px-6">
      <header className="max-w-5xl mx-auto text-center pt-8">
        <h1 className="text-4xl font-extrabold">Nossas Redes</h1>
        <p className="text-gray-300 mt-2">
          Siga o Brasil Play Red e fique por dentro das novidades, eventos e
          atualizações.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-6 mt-10 sm:grid-cols-2">
        {/* YouTube */}
        <Card className="bg-red-800/80 backdrop-blur-md border-none hover:scale-[1.01] transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Youtube className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold">YouTube</h2>
            </div>
            <p className="text-gray-200 mb-4">
              Assista trailers, highlights e tutoriais do servidor.
            </p>
            <a
              href="https://youtube.com/@barone_samp?si=dhHroxpWQKpmMHXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg font-semibold"
            >
              Abrir YouTube
            </a>
          </CardContent>
        </Card>

        {/* Facebook */}
        <Card className="bg-red-800/80 backdrop-blur-md border-none hover:scale-[1.01] transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Facebook className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold">Facebook</h2>
            </div>
            <p className="text-gray-200 mb-4">
              Acompanhe posts, fotos e eventos da comunidade.
            </p>
            <a
              href="https://www.facebook.com/groups/540876708479252/?ref=share&mibextid=NSMWBT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg font-semibold"
            >
              Abrir Facebook
            </a>
          </CardContent>
        </Card>

        {/* Instagram */}
        <Card className="bg-red-800/80 backdrop-blur-md border-none hover:scale-[1.01] transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold">Instagram</h2>
            </div>
            <p className="text-gray-200 mb-4">
              Prints, stories e bastidores do servidor.
            </p>
            <a
              href="https://www.instagram.com/augustosullver?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg font-semibold"
            >
              Abrir Instagram
            </a>
          </CardContent>
        </Card>

        {/* Discord */}
        <Card className="bg-red-800/80 backdrop-blur-md border-none hover:scale-[1.01] transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold">Discord</h2>
            </div>
            <p className="text-gray-200 mb-4">
              Entre no nosso Discord para suporte e eventos.
            </p>
            <a
              href="https://discord.gg/2FvPEJaB9T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg font-semibold"
            >
              Entrar no Discord
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
  
