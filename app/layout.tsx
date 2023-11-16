import type { Metadata } from 'next'
import { Inter, Sora, Montserrat } from 'next/font/google'
import './globals.css'


const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] })
const Mont = Montserrat({ subsets: ['latin'], variable: '--font-mont', weight: ['400', '500', '600', '700'] })
export const metadata: Metadata = {
  title: 'Extensivo Medcof',
  description: 'Seja aprovado na residência médica que você quiser!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${sora.variable} ${inter.variable} ${Mont.variable}`}>{children}</body>
    </html>
  )
}
