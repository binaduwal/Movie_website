import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-99 bg-black transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div 
        className="absolute w-40 h-40 border-4 rounded-full border-white/22 border-t-white border-l-white animate-spin" 
        style={{ 
          animationDuration: '1.8s',
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)'
        }} 
      />

      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="MovieApp Logo"
          className="w-auto h-48"
          style={{ maxWidth: '176px' }}
        />
      </div>
    </div>
  );
}

