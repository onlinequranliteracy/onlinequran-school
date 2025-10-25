// src/app/dashboard/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import BackToHome from '@/components/BackToHome';

export default function Dashboard() {
  const [student, setStudent] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const checkAccess = async () => {
      try {
        const { data: students, error } = await supabase
          .from('students')
          .select('*')
          .limit(1);

        if (error || !students?.length || students[0].subscription_status !== 'active') {
          window.location.href = '/payment';
          return;
        }

        setStudent(students[0]);
      } catch (err) {
        console.error('Dashboard error:', err);
        window.location.href = '/payment';
      }
    };

    checkAccess();
  }, [isClient]);

  const joinClass = () => {
    if (student?.meet_link) {
      window.open(student.meet_link, '_blank');
    } else {
      alert('Class link not available yet. Please contact your teacher.');
    }
  };

  if (!isClient) return <div className="p-12 text-center">Loading...</div>;
  if (!student) return <div className="p-12 text-center">Verifying enrollment...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BackToHome />

      <h1 className="text-2xl font-bold text-emerald-800">Welcome, {student.student_name}!</h1>
      <p className="mt-2 text-gray-600">
        Group: <span className="font-semibold">Group {student.hifz_group}</span>
      </p>
      <p className="text-gray-600">Status: <span className="text-green-600 font-medium">Active</span></p>

      <button 
        onClick={joinClass}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold"
      >
        Join Live Hifz Class (Google Meet)
      </button>

      <div className="mt-8 p-4 bg-amber-50 rounded border border-amber-200">
        <h3 className="font-bold text-amber-800">Class Instructions</h3>
        <ul className="mt-2 text-sm text-amber-700 list-disc pl-5 space-y-1">
          <li>Use headphones to avoid echo</li>
          <li>Mute when not reciting</li>
          <li>Be ready with your Mushaf</li>
          <li>Classes start at your scheduled time</li>
        </ul>
      </div>
    </div>
  );
}