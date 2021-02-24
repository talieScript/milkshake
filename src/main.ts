import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import 'tailwindcss/tailwind.css';
import VueRippler from 'vue-rippler';
import firebase from 'firebase';
import router from './router/index';

const app = createApp(App);

app.use(VueRippler);
app.use(router);

var firebaseConfig = {
  apiKey: 'AIzaSyDE8--aBtRMnZ1sY_XR36w8LqNIAseJjTo',
  authDomain: 'crypto-app-69.firebaseapp.com',
  projectId: 'crypto-app-69',
  storageBucket: 'crypto-app-69.appspot.com',
  messagingSenderId: '408948389210',
  appId: '1:408948389210:web:1d55654f4f67dafad1af63',
  measurementId: 'G-P2TLDJ549M',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

app.mount('#app');
