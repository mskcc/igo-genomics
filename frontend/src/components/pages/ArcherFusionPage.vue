<template>
  <div>
    <div class="md-display-1">Archer Fusion Solid Tumor Panel</div>
    <md-table id="gene-table">
      <md-table-row v-for="array in archerFusionGenes" :key="array">
        <md-table-cell v-for="(gene, index) in array" :key="index">{{ gene }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { archerFusionGenes } from './../../data.js';
export default {
  name: 'ArcherFusionPage',
  data: function() {
    return { archerFusionGenes: archerFusionGenes };
  },
};
</script>

<style></style>
