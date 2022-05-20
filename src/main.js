import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

import ColorPicker from 'colorpicker-v3' ;// 注册组件
// 注册插件

import mitt from 'mitt';
const app = createApp(App)
app.config.globalProperties.$mitt = mitt();
app.use(store).use(ElementPlus).use(ColorPicker)
app.mount('#app')
