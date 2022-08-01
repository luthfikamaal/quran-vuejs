import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/css/output.css';
import './assets/main.css';
// import './assets/main.css';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.mount('#app');
