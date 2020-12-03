import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ddpcrAssaysPage from "./components/pages/ddpcrAssaysPage.vue";
import TeamPage from "./components/pages/TeamPage.vue";
import ServicesPricesPage from "./components/pages/ServicesPricesPage.vue";
import SamplesPage from "./components/pages/SamplesPage.vue";
import ContactsPage from "./components/pages/ContactsPage.vue";
import FaqsPage from "./components/pages/FaqsPage.vue";
import CriteriaPage from "./components/pages/CriteriaPage.vue";
import { MdButton, MdCard, MdContent, MdField, MdList, MdIcon, MdMenu, MdTable, MdTabs, MdTooltip } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdTable);
Vue.use(MdTabs);
Vue.use(MdTooltip);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/about", component: AboutPage, name: "about", children: [{ path: "/about/:id", component: TeamPage, name: "team" }] },
  {
    path: "/ddpcr",
    component: ddpcrAssaysPage,
    name: "ddpcr assays",
  },
  {
    path: "/services",
    component: ServicesPricesPage,
    name: "platforms & pricing",
  },
  { path: "/samples", component: SamplesPage, name: "submit" },
  { path: "/contacts", component: ContactsPage, name: "contact us" },
  { path: "/faqs", component: FaqsPage, name: "faqs" },
  { path: "/criteria", component: CriteriaPage, name: "criteria" },
];

const router = new VueRouter({
  base: "/genomics",
  routes: routes,
  mode: "history",
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
