// frontend/src/services/UserService.js
const API_URL = 'http://localhost:3001/api/users'; // El endpoint de tu backend

export const UserService = {
  // Petición POST para crear un usuario
  async createUser(userData) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Envía los datos con las claves que espera el backend (usuario, nombre, apellido)
      body: JSON.stringify(userData), 
    });

    // Manejo de errores 4xx o 5xx del backend
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido al crear usuario');
    }
    return response.json();
  },

  // Petición GET para consultar todos los usuarios
  async getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }
    return response.json();
  }
};