// Domain Model: Represents a course in the malla
// Immutable object with business logic methods
// Validation and transformation capabilities

class Course {
  constructor({ id, name, cycle, credits = 0, prerequisites = [] }) {
    this.id = id;
    this.name = name;
    this.cycle = cycle;
    this.credits = credits;
    this.prerequisites = prerequisites;
    this.validateData({ id, name, cycle });
    Object.freeze(this);
  }

  validateData({ id, name, cycle }) {
    if (!id || !name || typeof cycle !== 'number') {
      throw new Error('Datos inválidos para Course');
    }
  }

  equals(other) {
    return other && this.id === other.id;
  }

  toString() {
    return `${this.name} (Ciclo ${this.cycle})`;
  }

  isElective() {
    return this.prerequisites && this.prerequisites.length > 0;
  }
}

export default Course;

