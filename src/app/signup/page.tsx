// src/app/signup/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import BackToHome from '@/components/BackToHome';

export default function Signup() {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('female');
  const [hifzGroup, setHifzGroup] = useState('A');
  const [timeZone, setTimeZone] = useState('Africa/Accra');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('students')
      .insert([
        { 
          email, 
          student_name: studentName, 
          age: parseInt(age), 
          gender, 
          hifz_group: hifzGroup, 
          time_zone: timeZone 
        }
      ])
      .select();

    if (error) {
      alert('Error: ' + error.message);
      return;
    }

    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('studentId', data[0].id);
      localStorage.setItem('studentEmail', email);
      window.location.href = '/payment';
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="p-8 bg-white rounded shadow-lg text-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg mt-8">
      <BackToHome />

      <h2 className="text-2xl font-bold text-center mb-6">Enroll in Hifz Class</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          placeholder="Parent/Student Email" 
          className="w-full p-3 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Student Full Name" 
          className="w-full p-3 border rounded"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Age (5-70)" 
          min="5" 
          max="70"
          className="w-full p-3 border rounded"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
        <select 
          className="w-full p-3 border rounded"
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <select 
          className="w-full p-3 border rounded"
          value={hifzGroup}
          onChange={e => setHifzGroup(e.target.value)}
        >
          <option value="A">Group A: Al-Fatihah to An-Naba</option>
          <option value="B">Group B: Al-Mursalat to Al-Waqi&apos;ah</option>
          <option value="C">Group C: Al-Waqi&apos;ah to Al-Yasin</option>
        </select>
        <input 
          type="text" 
          placeholder="Time Zone (e.g. Africa/Accra)"
          className="w-full p-3 border rounded"
          value={timeZone}
          onChange={e => setTimeZone(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="w-full bg-emerald-600 text-white py-3 rounded font-bold hover:bg-emerald-700"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}