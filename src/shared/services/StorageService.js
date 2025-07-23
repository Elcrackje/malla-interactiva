// Shared Service: Servicio para manejo de localStorage/sessionStorage
// Métodos: save(), get(), remove(), clear()
// Serialización/deserialización automática
// Manejo de errores de storage

class StorageService {
  constructor(storage = window.localStorage) {
    this.storage = storage;
  }

  save(key, value) {
    try {
      const serialized = JSON.stringify(value);
      this.storage.setItem(key, serialized);
    } catch (error) {
      console.error('StorageService.save error:', error);
    }
  }

  get(key) {
    try {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('StorageService.get error:', error);
      return null;
    }
  }

  remove(key) {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('StorageService.remove error:', error);
    }
  }

  clear() {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('StorageService.clear error:', error);
    }
  }
}

export default new StorageService();
