// Domain Service: Lógica de negocio para progreso
// Usa StorageService para persistencia
// Métodos: saveProgress(), loadProgress(), calculateStats()
// Integración con modelos de dominio

import StorageService from '../../../shared/services/StorageService';
import StudentProgress from '../models/StudentProgress';

const STORAGE_KEY = 'student_progress';

class ProgressService {
  saveProgress(progress) {
    StorageService.save(STORAGE_KEY, {
      completedCourses: Array.from(progress.completedCourses),
      currentCareer: progress.currentCareer,
    });
  }

  loadProgress() {
    const data = StorageService.get(STORAGE_KEY);
    if (!data) return new StudentProgress();
    return new StudentProgress({
      completedCourses: new Set(data.completedCourses),
      currentCareer: data.currentCareer,
    });
  }

  calculateStats(progress, totalCourses) {
    return progress.getProgress(totalCourses);
  }
}

export default new ProgressService();

