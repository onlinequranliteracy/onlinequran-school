// src/app/payment/page.tsx
'use client';
import { useState, useEffect } from 'react';
import BackToHome from '@/components/BackToHome';

// ✅ Declare global at top level (outside component)
declare global {
  interface Window {
    PaystackPop: any;
  }
}

export default function Payment() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePayment = (plan: 'group' | 'private') => {
    if (!isClient || typeof window === 'undefined') return;

    const studentId = localStorage.getItem('studentId');
    const email = localStorage.getItem('studentEmail') || 'user@example.com';
    
    if (!studentId) {
      alert('Please complete signup first');
      return;
    }

    const USD_TO_GHS = 15;
    const amountGHS = plan === 'group'
      ? 150 * USD_TO_GHS * 100
      : 250 * USD_TO_GHS * 100;

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.onload = () => {
      // ✅ Now safe to use window.PaystackPop
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email,
        amount: amountGHS,
        currency: 'GHS',
        meta: { studentId },
        onSuccess: (transaction: { customer_code: string }) => {
          fetch('/api/paystack-webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: 'charge.success',
              data: {
                customer: { customer_code: transaction.customer_code },
                meta: { studentId }
              }
            })
          }).then(() => {
            window.location.href = '/dashboard';
          });
        },
        onCancel: () => alert('Payment cancelled')
      });
      handler.openIframe();
    };
    document.body.appendChild(script);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="p-8 bg-white rounded shadow-lg text-center">
          Loading payment options...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BackToHome />
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Group Plan */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-emerald-700">Group Hifz</h3>
          <p className="text-3xl font-bold my-2">$150<span className="text-lg">/month</span></p>
          <p className="text-sm text-gray-500 mb-4">Charged in GHS at current exchange rate</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✓ 4 live group sessions/week</li>
            <li>✓ Small groups (max 6 students)</li>
            <li>✓ Weekly assignments & feedback</li>
            <li>✓ Juz completion certificate</li>
          </ul>
          <button 
            onClick={() => handlePayment('group')}
            className="mt-6 w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
          >
            Enroll in Group
          </button>
        </div>

        {/* Private Plan */}
        <div className="border-2 border-emerald-600 rounded-lg p-6 bg-emerald-50">
          <h3 className="text-xl font-bold text-emerald-800">One-on-One Coaching</h3>
          <p className="text-3xl font-bold my-2">$250<span className="text-lg">/month</span></p>
          <p className="text-sm text-gray-500 mb-4">Charged in GHS at current exchange rate</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✓ 2 private live sessions/week</li>
            <li>✓ Fully personalized pace</li>
            <li>✓ Priority scheduling</li>
            <li>✓ Detailed tajweed correction</li>
            <li>✓ Monthly progress reports</li>
          </ul>
          <button 
            onClick={() => handlePayment('private')}
            className="mt-6 w-full bg-emerald-800 text-white py-2 rounded hover:bg-emerald-900"
          >
            Enroll in Private
          </button>
        </div>
      </div>
    </div>
  );
}