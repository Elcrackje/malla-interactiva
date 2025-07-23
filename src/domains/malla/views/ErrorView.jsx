// Domain View: Vista de error específica para malla
// Mensaje contextual, botón de retry y navegación alternativa
import React from 'react';

const ErrorView = ({ message = 'No se pudo cargar la malla curricular.', onRetry }) => (
  <div className="p-8 text-center">
    <h2 className="text-xl font-bold text-red-600 mb-2">¡Error!</h2>
    <p className="text-gray-500 mb-4">{message}</p>
    <button
      className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
      onClick={onRetry}
    >
      Reintentar
    </button>
    <div className="mt-6">
      <a href="/" className="text-indigo-500 underline">Volver al inicio</a>
    </div>
  </div>
);

export default ErrorView;

