import { createApp } from 'vue'
import App from './App.vue'
import vueDebounce from 'vue-debounce'

import "./scss/style.scss";
import router from "./router/index";
import store from './store/index';

import TheHeader from "./components/layouts/TheHeader.vue";

const app = createApp(App);

app.component("the-header", TheHeader);

app.use(router);
app.use(store);
app.directive('debounce', vueDebounce({ lock: true }))

app.mount("#app");
