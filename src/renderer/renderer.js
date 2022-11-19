console.log('👋 This message is being logged by "renderer.js", included via webpack');
import { createApp } from 'vue'
import App from './Vue/App.vue'
import router from './Vue/router'
import store from './Vue/store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
const app = createApp(App);
app.use(store);
app.use(router);

app.use(Antd);
app.mount('#app');