import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { CHILD_LIST } from './assets/js/constant';
import { registerApp } from './assets/js/utils';

registerApp(CHILD_LIST);

createApp(App)
  .use(store)
  .use(router)
  .mount('#micro_web_main_app');
