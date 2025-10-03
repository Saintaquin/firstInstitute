import type React from "react"
import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "First Institute - Conseil et Formation en Finance",
  description:
    "First Institute vous accompagne dans le financement d'entreprise, la levée de fonds, l'asset management, et la stratégie d'entreprise.",
  keywords: "conseil financier, levée de fonds, asset management, financement entreprise, stratégie entreprise",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={merriweather.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
