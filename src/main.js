import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 引入Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

//Vue Router
import { router } from "./router";
app.use(router);

//全局css
import "@/styles/index.css";

app.mount("#app");
