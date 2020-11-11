<template>
  <div>
    <span class="md-display-3">Sample Pass/Fail Criteria</span>
    <!-- <button v-on:click="isHidden = true">Hide the text below</button> -->

    <md-table md-card class="table-content">
      <!-- <md-table-toolbar>
        <h1 class="md-title">Sample Pass/Fail Criteria</h1>
      </md-table-toolbar> -->

      <md-table-row>
        <md-table-head>Sample Type</md-table-head>
        <md-table-head>Mass to Pass</md-table-head>
        <md-table-head>Mass to Try</md-table-head>
        <md-table-head>Quality to Pass</md-table-head>
        <md-table-head>Quality to Try</md-table-head>
        <md-table-head>Maximum Submission Volume</md-table-head>
      </md-table-row>
      <md-table-row v-on:click="isHidden = !isHidden">
        Adaptive immunoSEQ1
      </md-table-row>
      <md-table-row v-if="!isHidden">
        <md-table-cell>Lymphoid tissue</md-table-cell>
        <md-table-cell>650ng</md-table-cell>
        <md-table-cell>175ng</md-table-cell>
        <md-table-cell colspan="2" rowspan="5"
          >No quality requirements</md-table-cell
        >
        <md-table-cell rowspan="5">50µL</md-table-cell>
      </md-table-row>
      <md-table-row v-if="!isHidden">
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell>1.1µg</md-table-cell>
        <md-table-cell>275ng</md-table-cell>
      </md-table-row>
      <md-table-row v-if="!isHidden">
        <md-table-cell>T cells</md-table-cell>
        <md-table-cell>400ng</md-table-cell>
        <md-table-cell>100ng</md-table-cell>
      </md-table-row>
      <md-table-row v-if="!isHidden">
        <md-table-cell>Whole Blood/BMMCs</md-table-cell>
        <md-table-cell>1.6µg</md-table-cell>
        <md-table-cell>400ng</md-table-cell>
      </md-table-row>
      <md-table-row v-if="!isHidden">
        <md-table-cell>Other/FFPE</md-table-cell>
        <md-table-cell>3µg</md-table-cell>
        <md-table-cell>1µg</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "CriteriaPage",
  data: function() {
    return { isHidden: true };
  },
  methods: {
    // toggleDisplay: function(row) {
    //   $("#" + row).toggle();
    // },
  },
};
</script>

<style></style>
