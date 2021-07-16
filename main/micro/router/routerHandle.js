import { isChangeApp } from '../utils';

// 切换App
export const toggleApplication = () => {
  if (isChangeApp()) {
    console.log('路由切换了');
  }
};
