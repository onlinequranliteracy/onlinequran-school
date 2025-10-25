// src/app/programs/page.tsx
import BackToHome from '@/components/BackToHome';

export default function Programs() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackToHome />
      <h1 className="text-3xl font-bold text-emerald-800 mb-6">Our Hifz Programs</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Group A: Al-Fatihah → An-Naba’</h2>
          <p className="text-gray-600">
            For beginners — learn the first 10 Juz with small group sessions (max 6 students).
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Group Size: 6</span>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">Price: $150/month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Group B: Al-Mursalat → Al-Waqi’ah</h2>
          <p className="text-gray-600">
            Intermediate level — continue your journey with focused recitation and feedback.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Group Size: 6</span>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">Price: $150/month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Group C: Al-Waqi’ah → Al-Yasin</h2>
          <p className="text-gray-600">
            Advanced level — perfect for those who want to complete the entire Qur’an.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Group Size: 6</span>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">Price: $150/month</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="font-bold text-yellow-800">One-on-One Coaching</h3>
        <p className="mt-2 text-yellow-700">
          For those who need personalized pacing or have irregular schedules — 2 private sessions/week, priority scheduling, detailed tajweed correction.
        </p>
        <div className="mt-4">
          <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Price: $250/month</span>
        </div>
      </div>
    </div>
  );
}