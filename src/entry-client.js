import { createApp } from "./main";
import { createRouter } from './router';
import { createStore } from './store'

const app = createApp();
const router = createRouter('client');
const store = createStore()

app.use(router)

// 判断window.__INITIAL_STATE__是否存在，存在的替换store的值
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
app.use(store)

router.isReady().then(() => {
  app.mount('#app', true);
});

