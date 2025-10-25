// src/app/contact/page.tsx
import BackToHome from '@/components/BackToHome';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackToHome />
      <h1 className="text-3xl font-bold text-emerald-800 mb-6">Contact Us</h1>
      <div className="prose max-w-none">
        <p>
          Have questions? We’re here to help!
        </p>
        <p>
          📧 Email: <a href="mailto:info@onlinequranliteracy.com" className="text-emerald-600 hover:text-emerald-800">onlinequranliteracy@outlook.com</a>
        </p>
        <p>
          📞 Phone: +233 243083957 
        </p>
        <p>
          💬 WhatsApp: <a href="https://wa.me/233123456789" className="text-emerald-600 hover:text-emerald-800">+233 243083957</a>
        </p>
        <p className="mt-6">
          We respond within 24 hours on weekdays.
        </p>
      </div>
    </div>
  );
}