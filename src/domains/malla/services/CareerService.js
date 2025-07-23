// Domain Service: Lógica de negocio para carreras
// Usa MallaApiService para datos
// Métodos: getAllCareers(), getCareerById(), searchCareers()
// Transformación de datos de API a modelos

import MallaApiService from './MallaApiService';
import Career from '../models/Career';

class CareerService {
  _normalizeCareer(rawCareer) {
    // Convierte los cursos de cada ciclo en objetos { id, name, cycle }
    return {
      ...rawCareer,
      cycles: Array.isArray(rawCareer.cycles)
        ? rawCareer.cycles.map(cycle => ({
            ...cycle,
            courses: Array.isArray(cycle.courses)
              ? cycle.courses.map((courseName, idx) =>
                  typeof courseName === 'string'
                    ? {
                        id: `${rawCareer.id}-c${cycle.number}-crs${idx}`,
                        name: courseName,
                        cycle: cycle.number,
                        credits: 0,
                        prerequisites: [],
                      }
                    : courseName
                )
              : [],
          }))
        : [],
    };
  }

  async getAllCareers() {
    const data = await MallaApiService.getCareers();
    return Array.isArray(data)
      ? data.map(c => new Career(this._normalizeCareer(c)))
      : [];
  }

  async getCareerById(id) {
    const data = await MallaApiService.getCareerById(id);
    return data ? new Career(this._normalizeCareer(data)) : null;
  }

  async searchCareers(query) {
    const careers = await this.getAllCareers();
    return careers.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  }
}

export default new CareerService();
