import { createSSRApp } from 'vue'
import App from './App.vue'
import { ConfigProvider } from 'vant';
import "@/assets/css/global.less"


export const createApp = () =>{
  const app = createSSRApp(App)
  app.use(ConfigProvider);
  return app
}
