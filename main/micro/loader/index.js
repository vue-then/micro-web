import { fetchResource } from "../utils/fetchResource"

// 加载 html 的方法
export const  loadHtml = async(app) => {
    // 第一个，子应用需要显示在哪里 
    let container = app.container

    // 子应用的入口
    let entry = app.entry

    const [dom, scripts] = await parseHtml(entry)

    const ct = document.querySelector(container)
    if(!ct){
        throw new Error('err! container null')
    }
    ct.innerHTML = html
    return app
}

export const parseHtml = async (entry) => {
    const html = fetchResource(entry)
    //console.log(html);
    let allScript = []
    
    const div = document.createElement('div')
    div.innerHTML = html

    const [dom, scriptUrl, script] = await getResources(div, entry);
    const fetchecScripts = await Promise.all(scriptUrl.map(async item => fetchResource(item)))

    allScript = script.concat(fetchecScripts)
    return [dom, allScript];
}
 
export const getResources = async (root, app) => {
    const scriptUrl = [],script = [], dom = root.outerHTML

    // 深度解析
    function deepParse(element) {
		const children = element.children;
		const parent = element.parent;

		//第一步处理位于script中的内容
		if (element.nodeName.toLowerCase() === "script") {
			const src = element.getAttribute("src");
			if (!src) {
				script.push(element.outerHTML);
			} else {
				if (src.startsWith("http")) {
					scriptUrl.push(src);
				} else {
					//const {entry} = app;
					scriptUrl.push(`http:${entry}/${src}`);
				}
			}

			if (parent) {
				parent.replaceChild(
					document.createComment("此js文件已经被微前端替换")
				);
			}
		}
		// link 也会有js的内容
		if (element.nodeName.toLowerCase() === "link") {
			const href = element.getAttribute("href");

			if (href.endsWith(".js")) {
				if (href.startsWith("http")) {
					scriptUrl.push(href);
				} else {
					scriptUrl.push(`http:${entry}/${src}`);
				}
			}
		}

        for(let i=0; i<children.length;i++){
            deepParse(children[i])
        }
	}
    deepParse(root)
    
    return [dom, scriptUrl, script]
}