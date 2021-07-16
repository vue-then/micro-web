import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { CHILD_LIST } from './assets/js/constant';
import { generateMicroWebApp } from './assets/js/utils';

generateMicroWebApp(CHILD_LIST, {
  beforeLoad: [
    () => {
      console.log('加载');
    },
    () => {
      console.log('加载2');
    },
  ],
  mounted: [
    () => {
      console.log('挂载');
    },
  ],
  destroyed: [
    () => {
      console.log('销毁');
    },
  ],
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#micro_web_main_app');
