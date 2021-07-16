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
