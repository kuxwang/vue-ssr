import { createSSRApp } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"


export const createApp = () =>{
  const app = createSSRApp(App)
  return app
}
