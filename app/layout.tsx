import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Kuldeep Malviya | Full-Stack Developer & AI Explorer",
  description: "Full-stack developer & AI explorer from Greater Noida, India. Building scalable systems with Java, React, Next.js, and AI integrations.",
  keywords: ["Kuldeep Malviya", "Full-Stack Developer", "AI Explorer", "React", "Next.js", "Java", "Spring Boot", "Portfolio", "Greater Noida"],
  authors: [{ name: "Kuldeep Malviya" }],
  creator: "Kuldeep Malviya",
  metadataBase: new URL('https://kuldeep-malviya-atelier-pfpv.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kuldeep-malviya-atelier-pfpv.vercel.app',
    title: "Kuldeep Malviya | Full-Stack Developer & AI Explorer",
    description: "Full-stack developer & AI explorer from Greater Noida, India. Building scalable systems with Java, React, Next.js, and AI integrations.",
    siteName: "Kuldeep Malviya · Software Atelier",
    images: [
      {
        url: '/portrait.png',
        width: 800,
        height: 800,
        alt: 'Kuldeep Malviya - Full-Stack Developer & AI Explorer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kuldeep Malviya | Full-Stack Developer & AI Explorer",
    description: "Full-stack developer & AI explorer from Greater Noida, India.",
    images: ['/portrait.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark selection:bg-[#c9a961] selection:text-[#0a0a0a]">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] antialiased`}>
        <div className="relative z-0 min-h-screen overflow-x-hidden">
          {/* Global Carbon Texture Layer */}
          <div className="fixed inset-0 pointer-events-none z-[110] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] invert" />
          
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
