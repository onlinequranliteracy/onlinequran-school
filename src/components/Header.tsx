'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <svg width="36" height="36" viewBox="0 0 36 36" className="mr-2">
            <rect width="36" height="36" rx="8" fill="#2E8B57" />
            <text
              x="18"
              y="24"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
              fontFamily="serif"
            >
              📖
            </text>
          </svg>
          <span className="text-xl font-bold text-emerald-800">
            Online Quran Literacy
          </span>
        </Link>

        <nav>
          <Link
            href="/about"
            className="mx-4 text-gray-700 hover:text-emerald-800 transition-colors"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="mx-4 text-gray-700 hover:text-emerald-800 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/contact"
            className="mx-4 text-gray-700 hover:text-emerald-800 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
