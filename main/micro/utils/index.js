export const patchRouter = (globalEvent, eventName) => {
  const e = new Event(eventName);
  return function() {
    console.log(eventName)
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};
