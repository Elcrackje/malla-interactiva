// Shared Service: Servicio genérico para operaciones CRUD
// Métodos: get(), post(), put(), delete()
// Usa http-common como base
// Manejo de respuestas y errores

import http from './http-common';

class ApiService {
  async get(url, config = {}) {
    try {
      const response = await http.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(url, data, config = {}) {
    try {
      const response = await http.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(url, data, config = {}) {
    try {
      const response = await http.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(url, config = {}) {
    try {
      const response = await http.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();
