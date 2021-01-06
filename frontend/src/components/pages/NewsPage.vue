<template>
  <div id="news-page">
    <div class="md-display-1">News</div>
    <md-card>
      <md-card-header>
        <div class="md-title">COVID-19 testing continues in IGO</div>
        <div class="md-subheading">August 10, 2020</div>
      </md-card-header>

      <md-card-content>
        <p>
          When all research operations halted, the IGO’s high-throughput automation and skilled technicians turned to meet a critical
          demand: expanding MSK’s COVID-19 testing capabilities. Now, with a clinically-compliant COVID-testing infrastructure in place, the
          core continues to contribute to MSK’s expansive and rapid testing program without sacrificing turnaround time on research
          applications.
        </p>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">NEW at IGO: 10X Genomics Visium Spatial Transcriptomics</div>
        <div class="md-subheading">July 30, 2020</div>
      </md-card-header>
      <md-card-content>
        <p>
          Despite the disruption of the research shutdown and our personnel running hundreds of COVID-19 samples per day in parallel with
          our normal operations, IGO has brought into production a new spatial transcriptomics platform in collaboration with the
          <a href="https://one.mskcc.org/sites/pub/ski/CoreFacilities/Pages/Molecular-Cytology.aspx"> Molecular Cytology Core</a>.
          <router-link :to="{ name: '10x genomics visium' }"> Learn more</router-link> or
          <router-link :to="{ name: 'contact us' }">contact us</router-link> set up a meeting about your project.
        </p>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">Archer & Adaptive resumed; two new platforms now available</div>
        <div class="md-subheading">July 20, 2020</div>
      </md-card-header>
      <md-card-content>
        <p>
          Currently all IGO’s standard platform offerings are now available except for Nanostring. Additionally, we are offering COVID-19
          testing of fresh tissue or cell samples and are rolling out our new spatial transcriptomics option in collaboration with the
          <a href="https://one.mskcc.org/sites/pub/ski/CoreFacilities/Pages/Molecular-Cytology.aspx"> Molecular Cytology Core</a> using the
          <router-link :to="{ name: '10x genomics visium' }">10X Genomics Visium platform</router-link>.
        </p>
        <md-button class="md-raised md-primary" :to="{ name: 'submission guidelines' }">
          Submit for COVID19
        </md-button>
        <!-- <md-button class="md-raised md-primary" :to="{ name: 'reopen faq' }">Reopen FAQs</md-button> -->
        <md-button class="md-raised md-primary" :to="{ name: 'igo tutorials' }">IGO Tutorials</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
