// Shared Service: Configuración base para todas las llamadas HTTP
// Axios instance con interceptors
// Base URL, timeouts, headers comunes
// Manejo de errores global

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://my-json-server.typicode.com/Elcrackje/fake-api-malla';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  response => response,
  error => {
    console.error('HTTP Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
