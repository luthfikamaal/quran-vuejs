import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/css/output.css';
import './assets/main.css';
// import './assets/main.css';

// createApp(App).mount('#app');
const DEFAULT_TITLE = 'Home';
// router.afterEach((to, from) => {
//   nextTick(() => {
//     const title = to.meta.title || DEFAULT_TITLE;
//     document.getElementById('titleNav') = title + ' | Luthfi.';
//   });
// });
const app = createApp(App);
app.use(router);
app.mount('#app');
