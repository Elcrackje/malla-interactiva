// Domain Model: Modelo para progreso del estudiante
// Propiedades: completedCourses (Set), currentCareer
// Métodos: toggleCourse(), getProgress(), reset()
// Cálculos de porcentaje y estadísticas

class StudentProgress {
  constructor({ completedCourses = new Set(), currentCareer = null } = {}) {
    this.completedCourses = new Set(completedCourses);
    this.currentCareer = currentCareer;
    Object.freeze(this);
  }

  toggleCourse(courseId) {
    const newSet = new Set(this.completedCourses);
    if (newSet.has(courseId)) {
      newSet.delete(courseId);
    } else {
      newSet.add(courseId);
    }
    return new StudentProgress({ completedCourses: newSet, currentCareer: this.currentCareer });
  }

  getProgress(totalCourses) {
    const completed = this.completedCourses.size;
    const percent = totalCourses > 0 ? Math.round((completed / totalCourses) * 100) : 0;
    return { completed, total: totalCourses, percent };
  }

  reset() {
    return new StudentProgress({ completedCourses: new Set(), currentCareer: this.currentCareer });
  }
}

export default StudentProgress;

