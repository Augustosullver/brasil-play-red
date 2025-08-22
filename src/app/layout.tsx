import Navbar from "../components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasil Play Red",
  description: "Servidor SAMP Roleplay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="relative min-h-screen">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fundo.jpg')" }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Conteúdo */}
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
