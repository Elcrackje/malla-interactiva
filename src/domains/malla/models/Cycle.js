// Domain Model: Represents a cycle in the malla
// Immutable object with business logic methods
// Validation and transformation capabilities

class Cycle {
  constructor({ number, courses }) {
    this.number = number;
    this.courses = Array.isArray(courses) ? courses : [];
    this.validateData({ number, courses });
    Object.freeze(this);
  }

  validateData({ number, courses }) {
    if (typeof number !== 'number' || !Array.isArray(courses)) {
      throw new Error('Datos inválidos para Cycle');
    }
  }

  getCourseCount() {
    return this.courses.length;
  }

  hasCourse(courseId) {
    return this.courses.some(c => c.id === courseId);
  }

  addCourse(course) {
    return new Cycle({ number: this.number, courses: [...this.courses, course] });
  }
}

export default Cycle;

