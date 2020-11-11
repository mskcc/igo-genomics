<template>
  <div id="app" v-cloak>
    <div class="container">
      <!-- <nav class="header">
        <ul class="nav-list">
          <li v-for="link in links" :key="link" class="nav-links">
            <router-link exact :to="{ name: link }">{{ link }}</router-link>
          </li>
        </ul>
      </nav> -->
      <div class="header">
        <md-tabs md-sync-route class="nav-links">
          <md-tab
            exact
            v-for="link in links"
            :key="link"
            :to="{ name: link }"
            :md-label="link"
          ></md-tab>
          <!-- <md-tab id="my-tools"></md-tab> -->
        </md-tabs>
        <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
          <md-button md-menu-trigger>My Tools</md-button>
          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
        <img
          class="igo-logo"
          alt="IGO logo"
          src="./assets/logoWhiteOnTransp.png"
        />
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
  // components: {
  //   // HelloWorld,
  //   HomePage,
  // },
  data: function() {
    return {
      links: [
        "home",
        "about",
        "services and prices",
        "samples",
        "contacts",
        "faqs",
        "criteria",
      ],
    };
  },
};
</script>

<style lang="css">
@import "./assets/css/style.css";
</style>
