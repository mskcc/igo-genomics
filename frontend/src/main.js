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
import SingleCellPage from "./components/pages/SingleCellPage.vue";
import DataDeliveryPage from "./components/pages/DataDeliveryPage.vue";
import CovidInstructionsPage from "./components/pages/CovidInstructionsPage.vue";
import GenomicsVisiumPage from "./components/pages/GenomicsVisiumPage.vue";
import NewsPage from "./components/pages/NewsPage.vue";
import ReopenFaqPage from "./components/pages/ReopenFaqPage.vue";
import IgoHomePage from "./components/pages/IgoHomePage.vue";
import {
  MdButton,
  MdCard,
  MdContent,
  MdDialog,
  MdField,
  MdList,
  MdIcon,
  MdMenu,
  MdTable,
  MdTabs,
  MdTooltip,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdDialog);
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
  { path: "/single-cell-platforms", component: SingleCellPage, name: "single cell platforms" },
  { path: "/accessing-your-data", component: DataDeliveryPage, name: "accessing your data" },
  { path: "/covid-instructions", component: CovidInstructionsPage, name: "covid submission instructions" },
  { path: "/10x-genomics-visium", component: GenomicsVisiumPage, name: "10x genomics visium" },
  { path: "/news", component: NewsPage, name: "news" },
  { path: "/reopen-faq", component: ReopenFaqPage, name: "reopen faq" },
  { path: "/igo-home", component: IgoHomePage, name: "igo home" },
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
