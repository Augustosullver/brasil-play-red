import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meu App',
  description: 'Projeto com Next.js + Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}


