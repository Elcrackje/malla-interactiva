// Domain Model: Represents a career with cycles and courses
// Immutable object with business logic methods
// Validation and transformation capabilities

class Career {
  constructor({ id, name, cycles }) {
    this.id = id;
    this.name = name;
    this.cycles = Array.isArray(cycles) ? cycles : [];
    this.validateData({ id, name, cycles });
    Object.freeze(this);
  }

  validateData({ id, name, cycles }) {
    if (!id || !name || !Array.isArray(cycles)) {
      throw new Error('Datos inválidos para Career');
    }
  }

  getTotalCourses() {
    return this.cycles.reduce((acc, cycle) => acc + (cycle.courses?.length || 0), 0);
  }

  getCycleCount() {
    return this.cycles.length;
  }
}

export default Career;

