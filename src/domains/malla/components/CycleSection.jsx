// Domain Component: Sección que agrupa cursos por ciclo
// Props: cycle, completedCourses, onCourseToggle
// Grid responsivo de cursos y header con info del ciclo

import React from 'react';
import CourseCard from './CourseCard';

const CycleSection = ({ cycle, completedCourses = new Set(), onCourseToggle }) => (
  <section className="mb-10">
    <h3 className="text-xl font-bold text-indigo-700 mb-4 border-b border-indigo-100 pb-2">Ciclo {cycle.number}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cycle.courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          isCompleted={completedCourses.has(course.id)}
          onToggle={onCourseToggle}
        />
      ))}
    </div>
  </section>
);

export default CycleSection;
