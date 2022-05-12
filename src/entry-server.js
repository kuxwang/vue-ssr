import { createApp } from "./main";
import { createRouter } from "./router";
import { createStore } from "./store";
import { renderToString } from '@vue/server-renderer'

/**
 * 替换标签
 * @param {*} html 
 * @returns 
 */
 function replaceHtmlTag(html) {
  return html.replace(/<script(.*?)>/gi, '&lt;script$1&gt;').replace(/<\/script>/g, '&lt;/script&gt;')
}

export default function(ctx){
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const app = createApp()
    const router = createRouter();
    const store = createStore();
    app.use(router);
    app.use(store);

    await router.push(ctx.url);
    await router.isReady();
    // 匹配路由是否存在
    const matchedComponents = router.currentRoute.value.matched.flatMap(record => Object.values(record.components))
    // 不存在路由
    if (!matchedComponents.length) {
      return reject({ code: 404 });
    }
    // 处理store
    Promise.all(matchedComponents.map(component => {
      if (component.asyncData) {
        return component.asyncData(store)
      }
    })).then(async () => {
      let html = await renderToString(app);
      html += `<script>window.__INITIAL_STATE__ = ${replaceHtmlTag(JSON.stringify(store.state))}</script>`
      resolve(html);
    }).catch(() => {
      reject({code:404})
    })
  })
}





