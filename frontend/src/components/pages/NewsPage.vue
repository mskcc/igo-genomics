<template>
  <div id="news-page">
    <div class="md-display-1">News</div>
    <md-card>
      <md-card-header>
        <div class="md-title">New project tracker, guidance for single cell applications, and changes to data delivery</div>
        <div class="md-subhead">December 3, 2020</div>
      </md-card-header>
      
      <md-card-content>
        <p>
          IGO’s Data Team is pleased to roll out a new
          <a href="https://igo.mskcc.org/login/request-tracker"> request tracking application</a>. Use this tool for real-time
          visualization of IGO’s progress on your project, with detail to the sample level. Try it out in the IGO Marketplace today!
        </p>
        <p>
          As demand for single cell sequencing rises, IGO continues to invest in platforms to cover a wide variety of sample types and
          data needs. See which application is right for your sample set
          <router-link :to="{ name: 'single cell platforms' }">here</router-link>.
        </p>
        <p>
          Currently, IGO’s data delivery consists of FASTQ files separated by sample, sequencer run, and read (forward vs reverse).
          <strong>Starting January 2021, there will be an additional layer of separation: by sequencer lane. </strong>
          <router-link :to="{ name: 'accessing your data' }">Click here for more information.</router-link>
        </p>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">New pricing for block sequencing</div>
        <div class="md-subhead">October 26, 2020</div>
      </md-card-header>
      <md-card-content>
        <p>
          For investigators who make their own sequencing libraries to submit to IGO, we now have
          <router-link :to="{ name: 'platforms & pricing' }">easy-to-understand block pricing</router-link> for our most
          commonly-requested read lengths and throughputs. We accept both individual user libraries and pre-pooled libraries to occupy
          a full flow cell or lane. Custom read lengths and coverages outside the block pricing will still be accepted;
          <router-link :to="{ name: 'contact us' }">contact us for more information.</router-link>
        </p>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <div class="md-title">End of era in IGO + new website features</div>
        <div class="md-subhead">October 8, 2020</div>
      </md-card-header>

      <md-card-content>
        <p>
          After more than 6 months and over 46,000 samples, Friday, October 9 will be the last day of COVID-19 testing in IGO. While
          the core jumped at the opportunity to support our colleagues and city through the ongoing pandemic, we also look forward to
          turning our full attention back to our mission of supporting and enabling a broad range of research efforts at MSK. We will
          continue to provide
          <router-link :to="{ name: 'submission guidelines' }">COVID-19 testing of research samples.</router-link>
        </p>
        <p>
          In addition to the
          <router-link :to="{ name: '10x genomics visium' }">new 10X Genomics Visium platform</router-link>, we are improving our
          website resources for investigators. A searchable,
          <router-link :to="{ name: 'ddpcr assays' }">comprehensive list of our ddPCR assays</router-link> is now available and stay
          tuned for a project tracker, currently in beta testing!
        </p>
      </md-card-content>
    </md-card>
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
        <div class="md-title">Nanostring platform discontinued</div>
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
