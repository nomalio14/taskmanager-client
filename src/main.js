// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import "bulma/css/bulma.css";
import { Datepicker } from "buefy/dist/components/datepicker";
import { Field } from "buefy/dist/components/field";
import "buefy/dist/buefy.css";
import "@/assets/css/mystyle.css";

Vue.config.productionTip = false;
Vue.component("b-datepicker", Datepicker);
Vue.component("b-field", Field);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
