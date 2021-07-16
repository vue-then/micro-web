import { registerMicroApps, start } from '../../../micro/index';

export const generateMicroWebApp = (list, lifeCycle) => {
  // 注册子应用到微前端框架中
  registerMicroApps(list, lifeCycle);
  // 启动
  start();
};
