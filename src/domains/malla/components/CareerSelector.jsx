// Domain Component: Dropdown para selección de carrera
// Props: careers, selectedCareer, onCareerChange
// Diseño con Tailwind, íconos y animaciones

import React from 'react';

const CareerSelector = ({ careers = [], selectedCareer, onCareerChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Selecciona una carrera:</label>
    <select
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      value={selectedCareer || ''}
      onChange={e => onCareerChange(e.target.value)}
    >
      <option value="" disabled>-- Elige una carrera --</option>
      {careers.map(career => (
        <option key={career.id} value={career.id}>
          {career.name}
        </option>
      ))}
    </select>
  </div>
);

export default CareerSelector;

