<template>
  <div>
    <div class="md-display-1">Sample Requirements</div>
    <md-tabs md-alignment="centered" md-sync-route>
      <md-tab id="tab-dna" md-label="dna" :to="{ name: 'sample requirements' }" exact>
        <dna-criteria></dna-criteria>
      </md-tab>
      <md-tab id="tab-rna" md-label="rna" :to="{ name: 'rna' }">
        <rna-criteria></rna-criteria>
      </md-tab>
      <md-tab id="tab-tissue" md-label="tissue/cells" :to="{ name: 'tissue' }">
        <tissue-criteria></tissue-criteria>
      </md-tab>
      <md-tab id="tab-other" md-label="other" :to="{ name: 'other' }">
        <other-criteria></other-criteria>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import DnaCriteria from '../DnaCriteria.vue';
import RnaCriteria from '../RnaCriteria.vue';
import TissueCriteria from '../TissueCellCriteria.vue';
import OtherCriteria from '../OtherCriteria.vue';

export default {
  components: { DnaCriteria, RnaCriteria, TissueCriteria, OtherCriteria },
  name: 'CriteriaPage',
};
</script>

<style></style>
