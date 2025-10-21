// frontend/src/services/UserService.js

// 🚨 Usamos la URL pública de tu backend en Render.
const BASE_URL = 'https://back-3-5d8a.onrender.com';
const API_URL = `${BASE_URL}/api/users`;

export const UserService = {
  // ✅ Petición POST para crear un usuario
  async createUser(userData) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Manejo de errores del backend (4xx o 5xx)
    if (!response.ok) {
      let errorMessage = 'Error desconocido al crear usuario';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (_) {
        // Ignorar errores al parsear JSON
      }
      throw new Error(errorMessage);
    }

    return response.json();
  },

  // ✅ Petición GET para consultar todos los usuarios
  async getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }

    return response.json();
  }
};
