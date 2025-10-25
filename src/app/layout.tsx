// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Prevent iOS auto-linking (fixes hydration errors) */}
        <meta 
          name="format-detection" 
          content="telephone=no, date=no, email=no, address=no" 
        />
      </head>
      <body>{children}</body>
      {/* Google Analytics - replace G-J8C8PGG4HP with your own if different */}
      <GoogleAnalytics gaId="G-J8C8PGG4HP" />
    </html>
  );
}