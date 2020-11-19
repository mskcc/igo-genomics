<template>
  <div id="app" v-cloak>
    <div class="container">
      <div class="header">
        <div class="nav">
          <router-link
            exact
            v-for="link in links"
            :key="link"
            :to="{ name: link }"
            class="nav-link"
            v-bind:class="{ 'router-link-active': teamIsActive && link === 'about' }"
          >
            <md-button class="md-ripple nav-button">{{ link }}</md-button></router-link
          >
          <md-menu md-size="medium" md-align-trigger class="nav-link" v-bind:class="{ 'router-link-active': toolsIsActive }">
            <md-button md-menu-trigger class="md-ripple nav-button">Tools</md-button>
            <md-menu-content>
              <md-menu-item v-for="toolLink in toolLinks" :key="toolLink"
                ><router-link :to="{ name: toolLink }" class="nav-link">
                  <md-button class="md-ripple nav-button">{{ toolLink }}</md-button></router-link
                ></md-menu-item
              >
            </md-menu-content></md-menu
          >
        </div>

        <img class="igo-logo" alt="IGO logo" src="./assets/logoWhiteOnTransp.png" />
      </div>

      <div class="main">
        <router-view></router-view>
      </div>
      <div class="footer">
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
  },
  data: function() {
    return {
      links: ["home", "about", "services and prices", "samples", "contacts", "faqs"],
      toolLinks: ["criteria", "ddpcr", "services and prices"],
      toolsIsActive: ["criteria", "ddpcr", "services and prices"].includes(this.$route.name),
      teamIsActive: function() {
        return this.$route.path.includes("about");
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
