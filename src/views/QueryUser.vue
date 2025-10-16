<script setup>
import { ref, onMounted } from 'vue';
import { UserService } from '@/services/UserService';

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  loading.value = true;
  error.value = null;
  try {
    users.value = await UserService.getUsers();
  } catch (err) {
    error.value = 'No se pudieron cargar los usuarios. Asegúrate de que el backend esté corriendo en http://localhost:3001';
  } finally {
    loading.value = false;
  }
};

// Cargar los usuarios al montar el componente
onMounted(fetchUsers);
</script>

<template>
  <div class="container">
    <h2>Lista de Usuarios Registrados</h2>
    <button @click="fetchUsers">Actualizar Lista</button>

    <p v-if="loading">Cargando usuarios...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <table v-if="users.length && !loading">
      <thead>
        <tr>
          <th>Usuario (Username)</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.usuario }}</td> 
          <td>{{ user.nombre }}</td> 
          <td>{{ user.apellido }}</td> 
        </tr>
      </tbody>
    </table>
    <p v-if="!users.length && !loading && !error">No hay usuarios registrados.</p>
  </div>
</template>