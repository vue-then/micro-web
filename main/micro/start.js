import app from './app-manager';
import { rewriteRouter } from './router/rewriteRouter';

// 重写路由跳转
rewriteRouter()

export const registerMicroApps = (apps) => {
  app.setChildList(apps);
  console.log(app.getChildList())
};
