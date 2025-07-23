// Domain Component: Card individual para cada curso
// Props: course, isCompleted, onToggle
// Estados: normal, completed, hover
// Animaciones de transición y Tailwind

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CourseCard = ({ course, isCompleted, onToggle }) => (
  <div
    className={`cursor-pointer p-4 rounded-xl mb-3 shadow transition-all duration-200 flex items-center gap-3
      ${isCompleted ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'}
      hover:scale-105`}
    onClick={() => onToggle(course.id)}
    title={course.name}
  >
    <div className="flex-1">
      <div className="font-semibold text-base mb-1">{course.name}</div>
      {course.credits > 0 && <div className="text-xs">Créditos: {course.credits}</div>}
      {course.prerequisites?.length > 0 && (
        <div className="text-xs text-yellow-600">Electivo</div>
      )}
    </div>
    {isCompleted && (
      <CheckCircleIcon className="w-6 h-6 text-green-300 animate-bounce" />
    )}
  </div>
);

export default CourseCard;
