import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-[#111113] text-gray-100 flex flex-col items-center justify-center font-mono">
      <div className="text-[10rem] font-bold tracking-widest text-gray-600 select-none">404</div>
      <div className="text-xl mb-4 tracking-wide text-gray-400">Page Not Found</div>

      <div className="text-sm text-gray-500 mb-10 text-center px-4 max-w-sm">
        The page you're looking for doesn't exist or has been moved. Double-check the URL or return to your dashboard.
      </div>

      <Link
        to="/"
        className="bg-[#2A2A2E] hover:bg-[#3A3A3F] border border-gray-700 px-6 py-2 rounded-sm text-sm tracking-wider"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
