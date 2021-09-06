import { getMainLifecycle } from "../const/mainLifeCycle";
import { loadHtml } from "../loader";
import { findAppByRoute } from "../utils"

export const lifecycle = async () => {
    const prevApp = findAppByRoute(window.__ORIGIN_APP__)
    const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__);

    if(!nextApp){
        return
    }
    if (prevApp && prevApp.destoryed) {
		await destoryed(prevApp);
	}
    const app = await beforeLoad(nextApp)

    mounted(app);
}

export const beforeLoad = (app) => {
    await runMainLifeCycle("beforeLoad");
    app && app.beforeLoad && app.beforeLoad();

    const subApp = await loadHtml() // 获取子应用的内容太

    return subApp;
}
export const mounted = async (app) => {
    app && app.mounted&& app.mounted();
    await runMainLifeCycle("mounted");
};
export const destoryed = async (app) => { 
    app && app.destoryed && app.destoryed()
    // 对应的执行以下主应用的生命周期
    await runMainLifeCycle('destoryed')
};
export const runMainLifeCycle = async (type) => {
    const mainLife = getMainLifecycle()
    await Promise.all(mainLife[type].map(async item => await item()))
};