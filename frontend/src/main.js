import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import TeamPage from "./components/pages/TeamPage.vue";
import ServicesPricesPage from "./components/pages/ServicesPricesPage.vue";
import SamplesPage from "./components/pages/SamplesPage.vue";
import ContactsPage from "./components/pages/ContactsPage.vue";
import FaqsPage from "./components/pages/FaqsPage.vue";
import CriteriaPage from "./components/pages/CriteriaPage.vue";
import {
  MdButton,
  MdCard,
  MdContent,
  MdList,
  MdIcon,
  MdMenu,
  MdTable,
  MdTabs,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdTable);
Vue.use(MdTabs);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/about", component: AboutPage, name: "about" },
  { path: "/about/:team", component: TeamPage, name: "team" },
  {
    path: "/services",
    component: ServicesPricesPage,
    name: "services and prices",
  },
  { path: "/samples", component: SamplesPage, name: "samples" },
  { path: "/contacts", component: ContactsPage, name: "contacts" },
  { path: "/faqs", component: FaqsPage, name: "faqs" },
  { path: "/criteria", component: CriteriaPage, name: "criteria" },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
