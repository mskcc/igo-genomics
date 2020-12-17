<template>
  <div id="app" v-cloak>
    <div class="app-body">
      <div class="app-header md-elevation-7">
        <div class="logo-header">
          <img class="igo-logo" alt="IGO logo" src="./assets/logoDarkGrayOnTransp.png" />
          <div class="md-title">Integrated Genomics Operation</div>
        </div>
        <div class="right-header">
          <div class="pre-nav">
            <md-button :md-ripple="false" @click="$router.push('about')">About</md-button>
            <md-button :md-ripple="false" @click="$router.push('contacts')">Contact Us</md-button>
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
              v-bind:class="{ 'router-link-active': teamIsActive && link === 'about' }"
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
                          <md-tooltip md-direction="right">
                            A series of modules aimed at easing data access. Currently home to the Sample Submission Webform and Sample QC
                            website.
                          </md-tooltip>
                        </md-button>
                      </md-menu-item>
                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/request-tracker">
                          <i class="fas fa-tasks"></i> Request Tracker
                          <md-tooltip md-direction="right">
                            A series of modules aimed at easing data access. Currently home to the Sample Submission Webform and Sample QC
                            website.
                          </md-tooltip>
                        </md-button>
                      </md-menu-item>

                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/sample-qc">
                          <i class="fas fa-check"></i>
                          Sample QC
                          <md-tooltip md-direction="right">
                            A series of modules aimed at easing data access. Currently home to the Sample Submission Webform and Sample QC
                            website.
                          </md-tooltip>
                        </md-button>
                      </md-menu-item>
                      <md-menu-item>
                        <md-button href="https://igo.mskcc.org/swabnseq">
                          <i class="fas fa-dna"></i>
                          Swab 'n Seq Results
                          <md-tooltip md-direction="right">
                            A series of modules aimed at easing data access. Currently home to the Sample Submission Webform and Sample QC
                            website.
                          </md-tooltip>
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
        <!-- <img class="msk-logo" alt="MSK logo" src="./assets/icon2.png" />
        <div>ZRC 3rd floor</div> -->
        <img src="./assets/svg/msk-logo.svg" />
        <div>ZRC 3rd floor</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("setAssays");
  },
  data: function() {
    return {
      links: ["home", "about", "platforms & pricing", "submission guidelines", "faqs"],
      toolLinks: [
        "10x genomics visium",
        "accessing your data",
        "ddpcr assays",
        "igo at home",
        "metrics and throughput",
        "sample criteria",
        "single cell platforms",
      ],
      toolsIsActive: [
        "sample criteria",
        "ddpcr assays",
        "igo at home",
        "single cell platforms",
        "accessing your data",
        "10x genomics visium",
        "rna",
        "other",
        "metrics and throughput",
      ].includes(this.$route.name),
      teamIsActive: this.$route.path.includes("about"),
      toolTips: {
        criteria: "A comprehensive guide to quality and quantity requirements",
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
      this.toolsIsActive = this.toolLinks.includes(this.$route.name);
      this.teamIsActive = this.$route.path.includes("about");
      // console.log(this.toolsIsActive);
      // console.log(this.$route);
    },
  },
};
</script>

<style lang="css">
@import "./assets/css/style.css";
</style>
