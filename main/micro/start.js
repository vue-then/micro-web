import app from './app-manager';

export const registerMicroApps = (apps) => {
  app.setChildList(apps);
  console.log(app.getChildList())
};
