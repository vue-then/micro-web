function flattenFnArray(fns) {
  return function(props) {
    fns.reduce((pre, cur) => pre.then(() => cur(props)), Promise.resolve());
  };
}

class lifeCycleManager {
  constructor() {
    this.lifeCycle = null;
  }

  getLifeCycleList() {
    return this.lifeCycle;
  }
  setLifeCycleList(list) {
    // 保存成一个函数去执行
    const result = {};
    Object.keys(list).forEach((key) => {
      const funcList = list[key];
      result[key] = flattenFnArray(funcList);
    });
    this.lifeCycle = result;
  }
}

const lifeCycle = new lifeCycleManager();

export default lifeCycle;
