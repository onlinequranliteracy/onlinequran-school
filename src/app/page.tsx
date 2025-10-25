// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
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

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 leading-tight">
            Online Quran Literacy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Live, certified Quran memorization (Hifz) classes for children (5–13) and sisters (13–70).
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
          >
            Enroll Now – Start Your Hifz Journey
          </Link>
        </section>

        {/* About Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Live & Interactive</h3>
              <p className="text-gray-600">
                No recordings. Real-time correction, tajweed feedback, and motivation from qualified teachers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Structured Hifz Path</h3>
              <p className="text-gray-600">
                Clear progression through 3 groups: Group A (Al-Fatihah to An-Naba), Group B (Al-Mursalat to Al-Waqi&apos;ah), Group C (Al-Waqi&apos;ah to An-Nas)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Accountability & Achievement</h3>
              <p className="text-gray-600">
                Weekly assignments, progress tracking, and official certificates upon Juz completion.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">What Our Students Say</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                “Alhamdulillah, my children (ages 7 and 10) have memorized 3 Juz in just 4 months! The teacher is patient, consistent, and corrects their tajweed gently. We love the structure.”
              </p>
              <p className="mt-4 font-semibold text-emerald-800">— Aisha R., Mother of 3, United Kingdom</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                “As a working nurse with irregular hours, I was worried I couldn’t commit to Hifz. But the one-on-one schedule fits my shifts, and my teacher keeps me accountable. I’ve completed Juz 29!”
              </p>
              <p className="mt-4 font-semibold text-emerald-800">— Sister Fatima, Registered Nurse, UK</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Ready to Begin?</h2>
          <p className="text-lg text-gray-700 mb-8">
            If you’re ready to learn, you sign up. No free trials — serious students only.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition"
          >
            Enroll Now
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 OnlineQuranLiteracy.com — “And We have certainly made the Qur’an easy for remembrance…” (54:17)</p>
        </div>
      </footer>
    </div>
  );
}