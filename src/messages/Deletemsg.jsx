import { Trash2 } from 'lucide-react';

function DeleteToast({ message }) {
  return (
    <div className="fixed top-1 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 py-4 rounded-2xl shadow-xl animate-slide-in transition-all duration-300">
      <Trash2 className="w-6 h-6 text-white" />
      <span className="text-white font-semibold">{message}</span>
    </div>
  );
}

export default DeleteToast;
