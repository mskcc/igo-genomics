<template>
  <div id="app" v-cloak>
    <div class="app-container">
      <div class="app-header">
        <div class="app-nav">
          <router-link
            exact
            v-for="link in links"
            :key="link"
            :to="{ name: link }"
            v-bind:class="{ 'router-link-active': teamIsActive && link === 'about' }"
          >
            <md-button class="md-ripple nav-button">{{ link }}</md-button>
          </router-link>
          <md-menu md-size="medium" md-align-trigger v-bind:class="{ 'router-link-active': toolsIsActive }">
            <md-button md-menu-trigger class="md-ripple nav-button">Tools</md-button>
            <md-menu-content>
              <md-menu-item v-for="toolLink in toolLinks" :key="toolLink"
                ><router-link :to="{ name: toolLink }">
                  <md-button class="md-ripple nav-button">{{ toolLink }}</md-button>
                  <md-tooltip v-if="toolTips[toolLink]" md-direction="bottom">{{ toolTips[toolLink] }}</md-tooltip>
                </router-link>
              </md-menu-item>
              <md-menu-item class="md-ripple nav-button" href="https://igo.mskcc.org/">
                <md-button>IGO Marketplace</md-button>
                <md-tooltip md-direction="bottom"
                  >A series of modules aimed at easing data access. Currently home to the Sample Submission Webform and Sample QC
                  website.</md-tooltip
                >
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>

        <img class="igo-logo" alt="IGO logo" src="./assets/logoWhiteOnTransp.png" />
      </div>

      <div class="app-main">
        <router-view></router-view>
      </div>
      <div class="app-footer">
        <img class="msk-logo" alt="MSK logo" src="./assets/icon2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("setAssays");
    console.log(this.teamIsActive);
  },
  data: function() {
    return {
      links: ["home", "about", "services and prices", "samples", "contacts", "faqs"],
      toolLinks: ["criteria", "ddpcr assays"],
      toolsIsActive: ["criteria", "ddpcr assays"].includes(this.$route.name),
      teamIsActive: this.$route.path.includes("about"),
      toolTips: {
        criteria: "A comprehensive guide to quality and quantity requirements",
        // "ddpcr assays": "Available ddPPCR assays",
      },
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
