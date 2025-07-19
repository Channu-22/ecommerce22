import { CheckCircle } from 'lucide-react';

function Toast({ message }) {
  return (
    <div className="fixed top-1 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl animate-slide-in transition-all duration-300">
      <CheckCircle className="w-6 h-6 text-white" />
      <span className="text-white font-semibold">{message}</span>
    </div>
  );
}

export default Toast;
