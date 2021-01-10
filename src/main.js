import Vue from "vue";

import App from "./App.vue";
import fonts from "./assets/index_files/fonts.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
