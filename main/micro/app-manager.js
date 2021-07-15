class AppsManager {
  constructor() {
    this.apps = null;
  }

  getChildList() {
    return this.apps;
  }
  setChildList(list) {
    this.apps = list;
  }
}

const app = new AppsManager();

export default app;
