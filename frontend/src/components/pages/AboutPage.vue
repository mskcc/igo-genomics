<template>
  <div>
    <span class="md-display-3">Who We Are</span>
    <md-tabs md-alignment="centered">
      <md-tab :to="{ name: 'about' }" id="tab-general" md-label="General" exact md-sync-route>
        <div class="about-body">
          <div class="about-description md-body-1">
            <p>
              The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of
              services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide
              sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing
              activities at MSK, the core empowers scientists with an array of technological options and the most efficient and
              cost-effective means of performing high-throughput genomics.
            </p>
            <p>
              IGO offers a comprehensive inventory of genomic platforms. We house a full range of Illumina NGS instruments, maximizing our
              flexibility for many sequencing applications. For more specific information, please check out the Services and Prices tab to
              learn more about the various platforms currently supported by IGO. We comprise six main groups, under the leadership of Dr.
              Agnes Viale. We are located on the 3rd floor of the Zuckerman Building.
            </p>
          </div>
          <div class="about-image-container">
            <md-content class="md-elevation-24 lab-photo">
              <img src="../../assets/images/lab/Viale_190612_104.jpg" alt="At the bench" />
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
        md-sync-route
      >
        <team-page :team="team"></team-page>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import TeamPage from "./TeamPage.vue";
import { teams } from "./../../data.js";

export default {
  name: "AboutPage",
  components: { TeamPage },
  data: function() {
    return { teams: teams };
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
};
</script>

<style></style>
