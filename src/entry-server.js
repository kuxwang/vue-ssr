import { createApp } from "./main";
import { createRouter } from "./router";
import { createStore } from "./store";
import { renderToString } from "@vue/server-renderer";

/**
 * 替换标签
 * @param {*} html
 * @returns
 */
function replaceHtmlTag(html) {
  return html
    .replace(/<script(.*?)>/gi, "&lt;script$1&gt;")
    .replace(/<\/script>/g, "&lt;/script&gt;");
}

export default async (ctx) => {
  const app = createApp();
  const router = createRouter("server");
  const store = createStore();
  app.use(router);
  app.use(store);

  await router.push(ctx.url);
  await router.isReady();

  let html = await renderToString(app);

  html += `<script>window.__INITIAL_STATE__ = ${replaceHtmlTag(
    JSON.stringify(store.state)
  )}</script>`;

  return html;
};
