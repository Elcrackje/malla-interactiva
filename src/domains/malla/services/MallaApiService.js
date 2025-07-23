// Domain Service: Servicio específico para API de malla
// Extiende ApiService
// Endpoints: /careers, /careers/:id
// Fake API implementation + preparación para real API

import ApiService from '../../../shared/services/ApiService';

class MallaApiService {
  async getCareers() {
    return await ApiService.get('/careers');
  }

  async getCareerById(id) {
    return await ApiService.get(`/careers/${id}`);
  }
}

export default new MallaApiService();

