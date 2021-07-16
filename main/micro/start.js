import appManager from './app-manager';
import lifeCycleManager from './life-cycle-manager';
import { rewriteRouter } from './router/rewriteRouter';
import { findApps } from './utils';

// 重写路由跳转
rewriteRouter();

// 注册childApp
export const registerMicroApps = (apps, lifeCycle) => {
  // 缓存子应用列表
  appManager.setChildList(apps);
  // 缓存主应用生命周期
  lifeCycleManager.setLifeCycleList(lifeCycle);
};

// 启动
export const start = () => {
  // 当前子应用列表不为空
  const apps = appManager.getChildList();

  if (apps.length === 0) {
    throw new Error(`正确注册子应用好吗?`);
  }

  // 存在子应用内容，查找到当前子应用内容
  const currentApp = findApps(apps);

  if (currentApp && currentApp.length) {
    // 先只考虑一个应用
    // 命中App
    const app = currentApp[0];

    // 这里先执行的 后来才会执行路由方法 所以这里给自动触发一下
    window.history.pushState('', '', location.pathname + location.hash);

    window.__CURRENT__MICRO_APP = app.activeWhen;
  }
  console.log(currentApp, '当前匹配子应用');
};
