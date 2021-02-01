// 程序主入口文件，ts文件
// 引入 createApp 函数，创建对应的应用，产生应用实例对象
import { createApp } from 'vue'
// 引入App组件
import App from './App.vue'
// 创建App应用返回对应的实例对象，调用mount方法进行挂载
createApp(App).mount('#app')
