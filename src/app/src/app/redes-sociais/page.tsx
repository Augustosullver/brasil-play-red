import { Facebook, Youtube, Instagram } from "lucide-react";

export default function RedesSociais() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Nossas Redes Sociais</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/groups/540876708479252/?ref=share&mibextid=NSMWBT"
          target="_blank"
          className="flex items-center gap-4 bg-blue-700 hover:bg-blue-800 p-4 rounded-xl shadow-lg transition"
        >
          <Facebook className="w-8 h-8" />
          <span className="text-lg font-semibold">Facebook</span>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@barone_samp?si=dhHroxpWQKpmMHXX"
          target="_blank"
          className="flex items-center gap-4 bg-red-700 hover:bg-red-800 p-4 rounded-xl shadow-lg transition"
        >
          <Youtube className="w-8 h-8" />
          <span className="text-lg font-semibold">YouTube</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/augustosullver?igsh=YzljYTk1ODg3Zg=="
          target="_blank"
          className="flex items-center gap-4 bg-pink-600 hover:bg-pink-700 p-4 rounded-xl shadow-lg transition"
        >
          <Instagram className="w-8 h-8" />
          <span className="text-lg font-semibold">Instagram</span>
        </a>
      </div>
    </main>
  );
}
