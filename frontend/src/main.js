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
import DataDeliveryPage from './components/pages/DataDeliveryPage.vue';
import NewsPage from './components/pages/NewsPage.vue';
import IgoTutorialsPage from './components/pages/IgoTutorialsPage.vue';
import ShowVideoPage from './components/pages/ShowVideoPage.vue';
import ArcherFusionPage from './components/pages/ArcherFusionPage.vue';
import RnaCriteria from './components/RnaCriteria.vue';
import OtherCriteria from './components/OtherCriteria.vue';
import TissueCriteria from './components/TissueCellCriteria.vue';
import MetricsAndThroughputPage from './components/pages/MetricsAndThroughputPage.vue';
import ReservationPage from './components/pages/ReservationPage.vue';
import CancelReservationPage from './components/pages/CancelReservationPage.vue';
import ChemistryTimelinePage from './components/pages/ChemistryTimelinePage.vue';
import CareersPage from './components/pages/CareersPage.vue';
import SingleCellHub from './components/pages/SingleCellHub.vue';
import FeedbackPage from './components/pages/FeedbackPage.vue';
import ViewFeedbackPage from './components/pages/ViewFeedbackPage.vue';
import BlockPricingPage from './components/pages/BlockPricingPage.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { HOME_PAGE_PATH } from './config.js';

import {
  MdAvatar,
  MdButton,
  MdCard,
  MdChips,
  MdContent,
  MdDatepicker,
  MdDialog,
  MdDivider,
  MdEmptyState,
  MdField,
  MdList,
  MdIcon,
  MdMenu,
  MdRadio,
  MdRipple,
  MdSteppers,
  MdTable,
  MdTabs,
  MdTooltip,
  MdApp,
  MdDrawer,
  MdToolbar,
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
Vue.use(MdChips);
Vue.use(MdContent);
Vue.use(MdDatepicker);
Vue.use(MdDivider);
Vue.use(MdDialog);
Vue.use(MdEmptyState);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdRadio);
Vue.use(MdRipple);
Vue.use(MdSteppers);
Vue.use(MdMenu);
Vue.use(MdTable);
Vue.use(MdTabs);
Vue.use(MdTooltip);

Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdToolbar);

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
    name: 'sample requirements',
    children: [
      { path: '/criteria/rna', component: RnaCriteria, name: 'rna' },
      { path: '/criteria/other', component: OtherCriteria, name: 'other' },
      { path: '/criteria/tissue', component: TissueCriteria, name: 'tissue' },
    ],
  },
  { path: '/accessing-your-data', component: DataDeliveryPage, name: 'accessing your data' },
  { path: '/news', component: NewsPage, name: 'news' },
  { path: '/igo-tutorials', component: IgoTutorialsPage, name: 'igo tutorials' },
  { path: '/igo-tutorials/:name', component: ShowVideoPage, name: 'show video', props: true },
  { path: '/archer-fusion', component: ArcherFusionPage, name: 'archer fusion' },
  { path: '/metrics-and-throughput', component: MetricsAndThroughputPage, name: 'metrics and throughput' },
  { path: '/reservations', component: ReservationPage, name: 'reservations' },
  { path: '/reservations/cancel/:id', component: CancelReservationPage, name: 'cancel reservation', props: true },
  { path: '/chemistry-timeline', component: ChemistryTimelinePage, name: 'chemistry timeline' },

  { path: '/careers', component: CareersPage, name: 'careers' },
  { path: '/single-cell-hub', component: SingleCellHub, name: 'single cell hub' },
  { path: '/feedback/:application?', component: FeedbackPage, name: 'feedback', props: true },
  { path: '/view-feedback', component: ViewFeedbackPage, name: 'view feedback' },
  { path: '/block-pricing', component: BlockPricingPage, name: 'block pricing' },
];

const router = new VueRouter({
  base: HOME_PAGE_PATH,
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

// scrolls to top of window on route change
router.beforeEach((to, from, next) => {
  // don't do it for these pages
  if (to.name !== 'about' && to.name !== 'team') {
    window.scrollTo(0, 0);
  }

  next();
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
