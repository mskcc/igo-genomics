<template>
  <div>
    <div class="md-display-1">Platforms & Pricing</div>
    <md-tabs md-alignment="centered" md-sync-route>
      <md-tab id="tab-landing" md-label="home" :to="{ name: 'platforms & pricing' }" exact>
        <prices-landing-page></prices-landing-page>
      </md-tab>
      <md-tab id="tab-seq" md-label="sequencing only" :to="{ name: 'library sequencing' }">
        <library-seq></library-seq>
      </md-tab>
      <md-tab id="tab-bulk" md-label="bulk applications" :to="{ name: 'bulk library & sequencing' }">
        <bulk-seq></bulk-seq>
      </md-tab>
      <md-tab id="tab-scst" md-label="single cell & spatial" :to="{ name: 'single cell & spatial transcriptomics' }">
        <scst-seq></scst-seq>
      </md-tab>
      <md-tab id="tab-nonseq" md-label="other applications" :to="{ name: 'non sequencing' }">
        <other-apps></other-apps>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import PricesLandingPage from '../PricesLandingPage.vue';
import LibrarySeq from '../LibrarySeq.vue';
import BulkSeq from '../BulkSeq.vue';
import ScstSeq from '../SCSTSeq.vue';
import OtherApps from '../OtherApps.vue';

export default {
  components: { PricesLandingPage, LibrarySeq, BulkSeq, ScstSeq, OtherApps },
  name: 'PlatformsPricesNew',
};
</script>

<style></style>
