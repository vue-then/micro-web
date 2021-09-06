import { fetchResource } from "../utils/fetchResource"

// 加载 html 的方法
export const  loadHtml = async(app) => {
    // 第一个，子应用需要显示在哪里 
    let container = app.container

    // 子应用的入口
    let entry = app.entry

    const html = await parseHtml(entry)

    const ct = document.querySelector(container)
    if(!ct){
        throw new Error('err! container null')
    }
    ct.innerHTML = html
    return app
}

export const parseHtml = async (entry) => {
    const html = fetchResource(entry)
    console.log(html);
    
    const div = document.createElement('div')
    div.innerHTML = html

    cosnt [dom, scriptUrl, script] = await parseJs()
    return html
}
 
export const parseJs = async () => {
    return ['', '', '']
}