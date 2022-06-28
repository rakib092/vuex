import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from "./routes";
import store from "./store/store";

createApp(App).use(router).use(store).mount('#app')