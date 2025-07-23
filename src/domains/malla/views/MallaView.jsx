// Domain View: Vista principal de la malla curricular
// Orquesta todos los components del dominio
// Manejo de estado principal, loading y error

import React, { useEffect, useState } from 'react';
import CareerService from '../services/CareerService';
import ProgressService from '../services/ProgressService';
import CareerSelector from '../components/CareerSelector';
import ProgressBar from '../components/ProgressBar';
import MallaGrid from '../components/MallaGrid';
import LoadingView from './LoadingView';
import ErrorView from './ErrorView';

const MallaView = () => {
  const [careers, setCareers] = useState([]);
  const [selectedCareerId, setSelectedCareerId] = useState('');
  const [career, setCareer] = useState(null);
  const [progress, setProgress] = useState(ProgressService.loadProgress());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    CareerService.getAllCareers()
      .then(data => {
        setCareers(data);
        // Selecciona la carrera guardada o la primera
        const initialId = progress.currentCareer || (data[0]?.id || '');
        setSelectedCareerId(initialId);
        setLoading(false);
      })
      .catch(err => {
        setError('No se pudo cargar las carreras.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedCareerId) return;
    setLoading(true);
    CareerService.getCareerById(selectedCareerId)
      .then(data => {
        setCareer(data);
        setLoading(false);
        // Actualiza el progreso con la carrera seleccionada
        setProgress(prev => new prev.constructor({
          completedCourses: prev.completedCourses,
          currentCareer: selectedCareerId,
        }));
      })
      .catch(err => {
        setError('No se pudo cargar la malla de la carrera.');
        setLoading(false);
      });
  }, [selectedCareerId]);

  const handleCareerChange = id => {
    setSelectedCareerId(id);
    setError(null);
  };

  const handleCourseToggle = courseId => {
    const updated = progress.toggleCourse(courseId);
    setProgress(updated);
    ProgressService.saveProgress(updated);
  };

  if (loading) return <LoadingView />;
  if (error) return <ErrorView message={error} onRetry={() => window.location.reload()} />;

  const totalCourses = career ? career.getTotalCourses() : 0;
  const stats = progress.getProgress(totalCourses);

  return (
    <div className="max-w-4xl mx-auto">
      <CareerSelector
        careers={careers}
        selectedCareer={selectedCareerId}
        onCareerChange={handleCareerChange}
      />
      <ProgressBar current={stats.completed} total={stats.total} showPercentage style="bar" />
      <MallaGrid
        career={career}
        progress={progress}
        onCourseToggle={handleCourseToggle}
      />
    </div>
  );
};

export default MallaView;

