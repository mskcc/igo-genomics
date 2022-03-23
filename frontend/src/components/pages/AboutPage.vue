<template>
  <div id="about-page">
    <div class="md-display-1">Who We Are</div>
    <md-tabs md-alignment="centered" md-sync-route>
      <md-tab :to="{ name: 'about' }" id="tab-general" md-label="General" exact>
        <div class="about-body">
          <div class="about-description">
            <p>
              The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of
              services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide
              sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing
              activities at MSK, the core empowers scientists with an array of technological options and the most efficient and
              cost-effective means of performing high-throughput genomics.
            </p>
            <p>
              IGO offers a comprehensive inventory of genomic platforms. We house a full range of Illumina NGS instruments, maximizing our
              flexibility for many sequencing applications. For more specific information, please check out the Platforms & Prices tab to
              learn more about the various platforms currently supported by IGO. We comprise seven main groups, under the leadership of Dr.
              Neeman Mohibullah. We are located on the 3rd floor of the Zuckerman Building.
            </p>
          </div>
          <div class="about-image-container">
            <md-content class="md-elevation-24 lab-photo">
              <img src="../../assets/images/lab/Viale_190612_066.jpg" alt="At the bench" />
            </md-content>
          </div></div
      ></md-tab>

      <md-tab
        :id="'tab-' + team"
        v-for="(team, index) in teamNamesInIgo"
        :key="index"
        :to="{ name: 'team', params: { id: index } }"
        :md-label="team"
        exact
      >
        <team-page :team="team"></team-page>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import TeamPage from './TeamPage.vue';
import { teams } from './../../data.js';

export default {
  name: 'AboutPage',
  components: { TeamPage },
  data: function() {
    return { teams: teams, windowWidth: '' };
  },
  computed: {
    teamNamesInIgo: function() {
      return this.$store.state.teamNamesInIgo;
    },
    // teamIsActive: function() {
    //   return this.$route.path.includes("about");
    // },
  },
  watch: {
    // $route() {
    //   this.teamisActive = this.$route.path.includes("about");
    //   console.log(this.teamisActive);
    //   console.log(this.$route);
    // },
  },
  // methods: {
  //   getWindowWidth(event) {
  //     this.windowWidth = document.documentElement.clientWidth;
  //     if (event) {
  //       if (event.type == "resize") {
  //         this.checkSpan();
  //       }
  //     }
  //   },
  //   beforeDestroy() {
  //     window.removeEventListener("resize", this.getWindowWidth);
  //   },
  //   checkSpan() {
  //     if (document.querySelector("#about-page")) {
  //       const tabsContainerSize = document.querySelector(".md-tabs-navigation.md-elevation-0").offsetTop;

  //       const spanElement = document.querySelector("span");
  //       if (tabsContainerSize < 251) {
  //         // hide span element that displays as underline under active button
  //         spanElement.style.display = "none";
  //       } else {
  //         spanElement.style.display = "block";
  //       }
  //     }
  //   },
  // },
  mounted: function() {
    this.$nextTick(function() {
      // window.addEventListener("resize", this.getWindowWidth);
      // //Init
      // this.getWindowWidth();
      const aboutPage = document.querySelector('#about-page');
      const spanElement = aboutPage.querySelector('span');
      spanElement.style.display = 'none';
    });
    // this.checkSpan(event);
  },
};
</script>

<style></style>
