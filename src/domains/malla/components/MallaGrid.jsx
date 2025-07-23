// Domain Component: Grid principal que muestra toda la malla
// Props: career, progress, onCourseToggle
// Integra CycleSection components y layout responsivo

import React from 'react';
import CourseCard from './CourseCard';

const MallaGrid = ({ career, progress, onCourseToggle }) => {
  if (!career) return null;
  const cycles = career.cycles;
  const maxCourses = Math.max(...cycles.map(c => c.courses.length));

  // Construir matriz: filas = cursos, columnas = ciclos
  const rows = Array.from({ length: maxCourses }, (_, rowIdx) =>
    cycles.map((cycle, colIdx) => cycle.courses[rowIdx] || null)
  );

  return (
    <div className="overflow-x-auto mt-8 w-full">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {cycles.map(cycle => (
              <th key={cycle.number} className="bg-gradient-to-b from-indigo-200 to-indigo-100 text-indigo-700 font-bold px-6 py-4 border-r border-indigo-300 last:border-r-0 text-center sticky top-0 z-10 text-lg shadow-md">
                Ciclo {cycle.number}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((course, colIdx) => (
                <td key={colIdx} className="align-top px-4 py-4 bg-white min-w-[180px] border-r border-indigo-100 last:border-r-0">
                  {course ? (
                    <CourseCard
                      course={course}
                      isCompleted={progress.completedCourses.has(course.id)}
                      onToggle={onCourseToggle}
                    />
                  ) : (
                    <div className="h-16" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MallaGrid;
