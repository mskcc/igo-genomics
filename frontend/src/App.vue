<template>
  <div id="app" v-cloak>
    <div class="app-body">
      <div class="app-header md-elevation-7">
        <div class="logo-header">
          <md-button :to="{ name: 'home' }"> <img class="igo-logo" alt="IGO logo" src="./assets/logoDarkGrayOnTransp.png"/></md-button>
          <div class="md-headline">Integrated Genomics Operation</div>
        </div>
        <div class="mobile">
          <!-- <md-app> -->
            <md-button>
              <span class="material-icons" @click="showNavigation = true">
                menu
              </span>
            </md-button>
            
            <md-drawer :md-active.sync="showNavigation" md-swipeable>
              <md-toolbar class="md-transparent" md-elevation="0">
               <span class="md-title">Integrated Genomics Operation</span>
              </md-toolbar>
              <md-list>
                <md-list-item v-for="link in links" :key="link">
                  <router-link exact :to="{ name: link }">{{ link }}</router-link>
                </md-list-item>
              </md-list>
            </md-drawer>
          <!-- </md-app> -->


        </div>
        <div class="right-header">
          <div class="pre-nav">
            <!-- <md-button :md-ripple="false" :to="{ name: 'about' }">About</md-button> -->
            <md-button :md-ripple="false" :to="{ name: 'careers' }">Careers</md-button>
            <md-button :md-ripple="false" :to="{ name: 'contact us' }">Contact Us</md-button>
            <a href="https://twitter.com/genomics212?lang=en" target="_blank"><i class="fab fa-twitter fa-1x"></i></a>
            <a href="https://www.instagram.com/genomics212/" target="_blank"><i class="fab fa-instagram fa-1x"></i></a>
            <div class="search-form">
              <!-- <form>
                <md-field md-inline>
                  <label>Search</label>
                  <md-input v-model="search"></md-input>
                </md-field>
              </form> -->
            </div>
          </div>
          <div class="main-nav">
            <router-link
              exact
              v-for="link in links"
              :key="link"
              :to="{ name: link }"
              v-bind:class="{
                'router-link-active': (teamIsActive && link === 'about') || (platformsIsActive && link === 'platforms & pricing'),
              }"
            >
              <md-button class="md-ripple nav-button">{{ link }}</md-button>
            </router-link>
            <md-menu md-size="auto" md-align-trigger v-bind:class="{ 'router-link-active': toolsIsActive }">
              <md-button md-menu-trigger class="md-ripple nav-button">Tools <i class="fas fa-angle-down"></i></md-button>
              <md-menu-content class="tools-menu">
                <md-menu-item v-for="toolLink in toolLinks" :key="toolLink"
                  ><router-link :to="{ name: toolLink }">
                    <md-button class="md-ripple nav-button ">{{ toolLink }}</md-button>
                    <md-tooltip v-if="toolTips[toolLink]" md-direction="right">{{ toolTips[toolLink] }}</md-tooltip>
                  </router-link>
                </md-menu-item>

                <md-menu-item class="md-ripple nav-button">
                  <md-menu md-size="auto" :md-offset-x="400" :md-offset-y="-36">
                    <md-button md-menu-trigger>IGO Marketplace <i class="fas fa-external-link-alt"></i></md-button>
                    <md-menu-content class="tools-menu">
                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/sample-submission">
                          <i class="fas fa-upload"></i> Sample Submission
                        </md-button>
                      </md-menu-item>
                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/request-tracker"> <i class="fas fa-tasks"></i> Request Tracker </md-button>
                      </md-menu-item>

                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/sample-qc">
                          <i class="fas fa-check"></i>
                          Sample QC
                        </md-button>
                      </md-menu-item>
                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/swabnseq">
                          <i class="fas fa-dna"></i>
                          Swab 'n Seq Results
                        </md-button>
                      </md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
        </div>
      </div>
      <div class="app-main md-elevation-24">
        <router-view></router-view>
      </div>
      <div class="app-footer">
        <div></div>
        <img src="./assets/svg/msk-logo.svg" alt="MSK logo" />
        <div class="md-body-2">
          Sample receiving hours:<br />
          Mon-Fri 8:30a-3:30p by appt <br />ZRC-320 North<br />
          Tel: 646-888-3856
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('setAssays');
    this.$store.dispatch('setLastTwelveMonths');
  },
  data: function() {
    return {
      showNavigation: false,
      links: ['home', 'about', 'platforms & pricing', 'submission guidelines', 'reservations', 'faqs'],
      toolLinks: [
        '10x genomics visium',
        'accessing your data',
        'chemistry timeline',
        'ddpcr assays',
        'igo tutorials',
        'metrics and throughput',
        'sample requirements',
        'single cell platforms',
        // 'single cell hub',
      ],
      toolsIsActive: [
        'chemistry timeline',
        'sample requirements',
        'ddpcr assays',
        'igo tutorials',
        'single cell platforms',
        'accessing your data',
        // '10x genomics visium',
        'rna',
        'other',
        'metrics and throughput',
        'single cell hub',
      ].includes(this.$route.name),
      teamIsActive: this.$route.path.includes('about'),
      platformsIsActive: this.$route.path === '/platforms',
      // platformsIsActive: this.$route.name.includes('platforms & pricing'),
      toolTips: {
        'sample requirements': 'A comprehensive guide to quality and quantity requirements',
        // "ddpcr assays": "Available ddPPCR assays",
      },
      trigger: false,
      // search: null,
    };
  },
  computed: {},
  methods: {},
  watch: {
    $route() {
      this.toolsIsActive = this.toolLinks.includes(this.$route.name) || this.$route.path.includes('criteria');
      this.teamIsActive = this.$route.path.includes('about');
      this.platformsIsActive = this.$route.path === '/platforms';
      // this.platformsIsActive = this.$route.name.includes('platforms & pricing');
      // console.log(this.$route);
    },
  },
};
</script>

<style lang="css">
@import './assets/css/style.css';
</style>
