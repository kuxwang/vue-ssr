import { createSSRApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'


export const createApp = () =>{
  // const app = createSSRApp(App).use(store).use(router).mount('#app')
  const app = createSSRApp(App)

  return app
}
