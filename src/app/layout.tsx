// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

// ✅ CORRECT: "metadata" (not "meta")
export const meta: Metadata = {
  title: 'Online Quran Literacy',
  description: 'Live Quran memorization classes for children and sisters',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <svg width="36" height="36" viewBox="0 0 36 36" className="mr-2">
                <rect width="36" height="36" rx="8" fill="#2E8B57" />
                <text x="18" y="24" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">
                  📖
                </text>
              </svg>
              <span className="text-xl font-bold text-emerald-800">Online Quran Literacy</span>
            </Link>
            <nav>
              <Link href="/about" className="mx-4 text-gray-700 hover:text-emerald-800">About</Link>
              <Link href="/programs" className="mx-4 text-gray-700 hover:text-emerald-800">Programs</Link>
              <Link href="/contact" className="mx-4 text-gray-700 hover:text-emerald-800">Contact</Link>
            </nav>
          </div>
        </header>

        {children}
        <GoogleAnalytics gaId="G-J8C8PGG4HP" />
      </body>
    </html>
  );
}