import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import VueCoreVideoPlayer from 'vue-core-video-player';
import DatePicker from 'v-calendar';
import VueTimepicker from 'vue2-timepicker';
import Vuelidate from 'vuelidate';

import './filters.js';
import HomePage from './components/pages/HomePage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import ddpcrAssaysPage from './components/pages/ddpcrAssaysPage.vue';
import TeamPage from './components/pages/TeamPage.vue';
import ServicesPricesPage from './components/pages/ServicesPricesPage.vue';
import SubmissionGuidelinesPage from './components/pages/SubmissionGuidelinesPage.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import FaqsPage from './components/pages/FaqsPage.vue';
import CriteriaPage from './components/pages/CriteriaPage.vue';
import SingleCellPage from './components/pages/SingleCellPage.vue';
import DataDeliveryPage from './components/pages/DataDeliveryPage.vue';
import GenomicsVisiumPage from './components/pages/GenomicsVisiumPage.vue';
import NewsPage from './components/pages/NewsPage.vue';
import IgoTutorialsPage from './components/pages/IgoTutorialsPage.vue';
import ShowVideoPage from './components/pages/ShowVideoPage.vue';
import ArcherFusionPage from './components/pages/ArcherFusionPage.vue';
import RnaCriteria from './components/RnaCriteria.vue';
import OtherCriteria from './components/OtherCriteria.vue';
import MetricsAndThroughputPage from './components/pages/MetricsAndThroughputPage.vue';
// import SchedulePage from './components/pages/SchedulePage.vue';
import ChemistryTimelinePage from './components/pages/ChemistryTimelinePage.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { BASE_LOCATION } from './config.js';

import {
  MdAvatar,
  MdButton,
  MdCard,
  MdContent,
  MdDatepicker,
  MdDialog,
  MdDivider,
  MdField,
  MdList,
  MdIcon,
  MdMenu,
  MdRadio,
  MdSteppers,
  MdTable,
  MdTabs,
  MdTooltip,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueCoreVideoPlayer);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);

Vue.use(VueRouter);
Vue.use(MdAvatar);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdDatepicker);
Vue.use(MdDivider);
Vue.use(MdDialog);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdRadio);
Vue.use(MdSteppers);
Vue.use(MdMenu);
Vue.use(MdTable);
Vue.use(MdTabs);
Vue.use(MdTooltip);

// Use v-calendar & v-date-picker components
Vue.use(DatePicker, {
  componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});

Vue.use(VueTimepicker);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/about', component: AboutPage, name: 'about', children: [{ path: '/about/:id', component: TeamPage, name: 'team' }] },
  {
    path: '/ddpcr',
    component: ddpcrAssaysPage,
    name: 'ddpcr assays',
  },
  {
    path: '/platforms/:name?',
    component: ServicesPricesPage,
    name: 'platforms & pricing',
    props: true,
  },
  { path: '/submission-guidelines', component: SubmissionGuidelinesPage, name: 'submission guidelines' },
  { path: '/contacts', component: ContactsPage, name: 'contact us' },
  { path: '/faqs', component: FaqsPage, name: 'faqs' },
  {
    path: '/criteria/dna',
    component: CriteriaPage,
    name: 'sample criteria',
    children: [
      { path: '/criteria/rna', component: RnaCriteria, name: 'rna' },
      { path: '/criteria/other', component: OtherCriteria, name: 'other' },
    ],
  },
  { path: '/single-cell-platforms', component: SingleCellPage, name: 'single cell platforms' },
  { path: '/accessing-your-data', component: DataDeliveryPage, name: 'accessing your data' },
  { path: '/10x-genomics-visium', component: GenomicsVisiumPage, name: '10x genomics visium' },
  { path: '/news', component: NewsPage, name: 'news' },
  { path: '/igo-tutorials', component: IgoTutorialsPage, name: 'igo tutorials' },
  { path: '/igo-tutorials/:name', component: ShowVideoPage, name: 'show video', props: true },
  { path: '/archer-fusion', component: ArcherFusionPage, name: 'archer fusion' },
  { path: '/metrics-and-throughput', component: MetricsAndThroughputPage, name: 'metrics and throughput' },
  // { path: '/schedule', component: SchedulePage, name: 'schedule 10x dropoff' },
  { path: '/chemistry-timeline', component: ChemistryTimelinePage, name: 'chemistry timeline' },
];

const router = new VueRouter({
  base: BASE_LOCATION,
  routes: routes,
  mode: 'history',
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
