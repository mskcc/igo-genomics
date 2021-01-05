<template>
  <div>
    <div class="md-display-1">Sample Pass/Fail Criteria</div>
    <md-tabs md-alignment="centered" md-sync-route>
      <md-tab id="tab-dna" md-label="dna" :to="{ name: 'sample criteria' }" exact>
        <dna-criteria></dna-criteria>
      </md-tab>
      <md-tab id="tab-rna" md-label="rna" :to="{ name: 'rna' }">
        <rna-criteria></rna-criteria>
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
import OtherCriteria from '../OtherCriteria.vue';

export default {
  components: { DnaCriteria, RnaCriteria, OtherCriteria },
  name: 'CriteriaPage',
};
</script>

<style></style>
