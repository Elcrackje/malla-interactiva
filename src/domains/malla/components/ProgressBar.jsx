// Domain Component: Barra de progreso animada
// Props: current, total, showPercentage
// Diferentes estilos: bar, circle, mini
// Animaciones de progreso y Tailwind

import React from 'react';

const ProgressBar = ({ current, total, showPercentage = true, style = 'bar' }) => {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  if (style === 'circle') {
    // Simple círculo SVG
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    return (
      <div className="flex flex-col items-center">
        <svg width="60" height="60">
          <circle
            cx="30" cy="30" r={radius}
            stroke="#e5e7eb" strokeWidth="6" fill="none"
          />
          <circle
            cx="30" cy="30" r={radius}
            stroke="#22c55e" strokeWidth="6" fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
        </svg>
        {showPercentage && (
          <span className="mt-2 text-sm font-semibold text-green-600">{percent}%</span>
        )}
      </div>
    );
  }
  // Barra horizontal por defecto
  return (
    <div className="w-full mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-700 font-medium">Progreso</span>
        {showPercentage && (
          <span className="text-sm text-gray-500">{current}/{total} cursos ({percent}%)</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="bg-green-500 h-3 rounded transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

