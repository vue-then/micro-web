import { patchRouter } from '../utils';
import { toggleApplication } from './routerHandle'

export const rewriteRouter = () => {
  // 重写路由跳转
  window.history.pushState = patchRouter(
    window.history.pushState,
    'micro_push'
  );

  window.history.replaceState = patchRouter(
    window.history.replaceState,
    'micro_replace'
  );

  // 当路由改变时(触发H5 history事件)
  window.addEventListener('micro_push', toggleApplication);
  window.addEventListener('micro_replace', toggleApplication);
  // 当点击浏览器后退或hash改变时(hash改变仍会触发onpopState)
  window.onpopstate = function() {
    toggleApplication();
  };
};
