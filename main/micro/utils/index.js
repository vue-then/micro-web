import { CHILD_LIST } from "../../src/assets/js/constant";

export const patchRouter = (globalEvent, eventName) => {
  const e = new Event(eventName);
  return function() {
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};

export const findApps = (list) => {
  const currentUrl = window.location.pathname;
  return list.filter((app) => {
    return currentUrl.indexOf(app.activeWhen) !== -1;
  });
};

export const isChangeApp = () => {
  if (window.location.pathname.indexOf(window.__CURRENT__MICRO_APP) !== -1) {
    return false;
  } else {
    return true;
  }
};

export const filterApp = (key, value) => {
    const currentApp = CHILD_LIST().filter(item => item[key]===value);
    return currentApp && currentApp.length ? currentApp[0]: {}
}
export const filterByRoute = (router) => {
	return filterApp("activeRule", router);
};
export const currentApp = () => {
    const currentUrl = window.location.pathname
    return filterApp('activeRule', currentUrl)
}



// 子应用是否做了切换
export const isTurnChild = () => {
    window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__
    if(window.__CURRENT_SUB_APP__ === window.location.pathname){
        return false
    }
    const currentApp = window.location.pathname.match(/(\/\w+)/) // =>/abc
    if(!currentApp)return

    window.__CURRENT_SUB_APP__ = currentApp[0]
    return true
}

