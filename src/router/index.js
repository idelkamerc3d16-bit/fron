// frontend/src/router/index.js (Verifica las rutas)
import { createRouter, createWebHistory } from 'vue-router';
// Asegúrate que la ruta sea correcta
import CreateUser from '../views/CreateUser.vue'; 
import QueryUser from '../views/QueryUser.vue';   

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'create',
      component: CreateUser 
    },
    {
      path: '/query',
      name: 'query',
      component: QueryUser
    }
  ]
});

export default router;