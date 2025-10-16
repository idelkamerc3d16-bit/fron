<script setup>
import { ref } from 'vue';
import { UserService } from '@/services/UserService'; // Asegúrate de que la ruta sea correcta

const usuario = ref('');
const nombre = ref('');
const apellido = ref('');
const message = ref('');

const handleSubmit = async () => {
  message.value = ''; // Limpiar mensajes anteriores
  try {
    const userData = {
      usuario: usuario.value, // Envía el valor del formulario
      nombre: nombre.value,   // Envía el valor del formulario
      apellido: apellido.value,
    };

    await UserService.createUser(userData);
    
    message.value = `Usuario ${userData.usuario} creado con éxito.`;
    usuario.value = ''; // Limpiar formulario
    nombre.value = '';
    apellido.value = '';
    
  } catch (error) {
    // Muestra el mensaje de error del backend (ej. "El nombre de usuario ya existe")
    message.value = `Error: ${error.message}`;
  }
};
</script>

<template>
  <div class="container">
    <h2>Crear Nuevo Usuario (Tabla Boo)</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="usuario">Usuario (Username):</label>
        <input type="text" id="usuario" v-model="usuario" required>
      </div>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" required>
      </div>
      <button type="submit">Crear Usuario</button>
    </form>
    
    <p v-if="message" :class="{ 'success': message.includes('éxito'), 'error': message.includes('Error') }">{{ message }}</p>
  </div>
</template>
