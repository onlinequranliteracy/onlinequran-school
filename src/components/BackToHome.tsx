import Link from 'next/link';

export default function BackToHome() {
  return (
    <div className="mb-6 px-4">
      <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
        ← Back to Homepage
      </Link>
    </div>
  );
}