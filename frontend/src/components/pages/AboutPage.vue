<template>
  <div>
    <span class="md-display-3">Who We Are</span>
    <md-tabs md-alignment="centered">
      <md-tab id="tab-general" md-label="General"></md-tab>
      <md-tab id="tab-leadership" md-label="Leadership"></md-tab>
      <md-tab id="tab-support" md-label="Lab Support"></md-tab>
      <md-tab
        id="tab-favorites"
        md-label="Sample & Project Management"
      ></md-tab>
      <md-tab id="tab-expand" md-label="EXPAND"></md-tab>
      <md-tab id="tab-libraryprep" md-label="Library Preparation"></md-tab>
      <md-tab id="tab-data" md-label="Data Team"></md-tab>
      <md-tab id="tab-research" md-label="Research & Development"></md-tab>
      <md-tab id="tab-sequencing" md-label="Sequencing Team"></md-tab>
    </md-tabs>
    <div id="team-container">
      <div id="team-description">
        <p>
          The Integrated Genomics Operation (IGO) core enables basic, clinical,
          and translational science by providing a broad range of services and
          expertise to investigators interested in evaluating gene expression,
          chromosome structure, and nucleotide sequence. Our services are
          comprehensive, rapid, and user-friendly. Through the centralized
          management of all sequencing activities at MSK, the core empowers
          scientists with an array of technological options and the most
          efficient and cost-effective means of performing high-throughput
          genomics.
        </p>
        <p>
          IGO offers a comprehensive inventory of genomic platforms. We house a
          full range of Illumina NGS instruments, maximizing our flexibility for
          many sequencing applications. For more specific information, please
          check out the Services and Prices tab to learn more about the various
          platforms currently supported by IGO. We comprise six main groups,
          under the leadership of Dr. Agnes Viale. We are located on the 3rd
          floor of the Zuckerman Building.
        </p>
      </div>
      <div class="team-image">
        <md-content class="md-elevation-24">
          <img
            class="lab-photos"
            src="../../images/lab/Viale_190612_104.jpg"
            alt="At the bench"
          />
        </md-content>
      </div>
      <!-- <team-page></team-page> -->
    </div>
  </div>
</template>

<script>
// import TeamPage from "./TeamPage.vue";

export default {
  name: "AboutPage",
  // components: "TeamPage",
  data: function() {
    return {};
  },
};
</script>

<style></style>
