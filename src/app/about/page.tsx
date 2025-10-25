// src/app/about/page.tsx
import BackToHome from '@/components/BackToHome';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackToHome />
      <h1 className="text-3xl font-bold text-emerald-800 mb-6">About Online Quran Literacy</h1>
      <div className="prose max-w-none">
        <p>
          Online Quran Literacy is a certified, live-only Quran memorization (Hifz) school for children (5–13) and sisters (13–70). We believe in:
        </p>
        <ul>
          <li>✅ Live, interactive classes with real-time tajweed correction</li>
          <li>✅ Structured Hifz path through 3 groups</li>
          <li>✅ Accountability & achievement with weekly assignments and Juz certificates</li>
        </ul>
        <p>
          Our teachers are certified and committed to helping students build a lifelong relationship with the Qur’an.
        </p>
      </div>
    </div>
  );
}