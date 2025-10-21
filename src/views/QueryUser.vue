<script setup>
import { ref, onMounted } from 'vue';
import { UserService } from '@/services/UserService';
const API_URL ='https://back-3-5d8a.onrender.com' 

const users = ref([]);
const loading = ref(true);
const error = ref(null);
<script setup>
import { ref, onMounted } from 'vue'
import { UserService } from '@/services/UserService'

const API_URL = 'https://back-3-5d8a.onrender.com'

const users = ref([])
const loading = ref(true)
const error = ref(null)

const fetchUsers = async () => {
  loading.value = true
  error.value = null
  try {
    // Si tu servicio no usa la URL directamente, puedes pasarla como parámetro:
    users.value = await UserService.getUsers(API_URL)
  } catch (err) {
    console.error(err)
    error.value = 'No se pudieron cargar los usuarios. Asegúrate de que el backend esté corriendo en ' + API_URL
  } finally {
    loading.value = false
  }
}

// Cargar los usuarios al montar el componente
onMounted(fetchUsers)
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

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #4a90e2;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #357abd;
}

.error {
  color: #d9534f;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
</style>

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