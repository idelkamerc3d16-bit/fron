// frontend/src/services/UserService.js

// 🚨 CORRECCIÓN: Usamos la URL pública de tu backend en Render.
const BASE_URL = 'https://back-3-5d8a.onrender.com'; 
const API_URL = `${BASE_URL}/api/users`; 

export const UserService = {
  // Petición POST para crear un usuario
  async createUser(userData) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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