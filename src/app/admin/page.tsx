// src/app/admin/page.tsx
'use client';
import { useState, useEffect } from 'react';
import BackToHome from '@/components/BackToHome';

export default function AdminLogin() {
  const [isClient, setIsClient] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔑 CHANGE THIS TO YOUR SECRET PASSWORD
    if (password === 'Ii10289093@') {
      localStorage.setItem('admin', 'true');
      window.location.href = '/admin/dashboard';
    } else {
      setError('Incorrect password');
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
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <BackToHome />
        <h2 className="text-2xl font-bold text-center mb-6">Teacher Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded font-bold hover:bg-emerald-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}