
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el archivo de router

const app = createApp(App);

app.use(router);

app.mount('#app');