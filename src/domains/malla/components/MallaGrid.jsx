// Domain Component: Grid principal que muestra toda la malla
// Props: career, progress, onCourseToggle
// Integra CycleSection components y layout responsivo

import React from 'react';
import CycleSection from './CycleSection';

const MallaGrid = ({ career, progress, onCourseToggle }) => {
  if (!career) return null;
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
      {career.cycles.map(cycle => (
        <CycleSection
          key={cycle.number}
          cycle={cycle}
          completedCourses={progress.completedCourses}
          onCourseToggle={onCourseToggle}
        />
      ))}
    </div>
  );
};

export default MallaGrid;
