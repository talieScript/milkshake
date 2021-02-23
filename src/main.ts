import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import 'tailwindcss/tailwind.css';
import VueRippler from 'vue-rippler';

const app = createApp(App);

app.use(VueRippler);

app.mount('#app');
