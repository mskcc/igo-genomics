<template>
  <div>
    <md-table md-card class="criteria-table">
      <md-table-row>
        <md-table-head>Platform</md-table-head>
        <md-table-head>Sample Type</md-table-head>
        <md-table-head>Mass/Molarity to Pass</md-table-head>
        <md-table-head>Mass/Molarity to Try</md-table-head>
        <md-table-head>Requirements to Pass</md-table-head>
        <md-table-head>Requirements to Try</md-table-head>
        <md-table-head>Volume Requirements</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>10X Genomics</md-table-cell>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">25ng</md-table-cell>
        <md-table-cell class="try">1ng</md-table-cell>
        <md-table-cell colspan="2">No quality requirements</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ATAC-Seq</md-table-cell>
        <md-table-cell>Cells</md-table-cell>
        <md-table-cell class="pass">50,000</md-table-cell>
        <md-table-cell class="try">+/- 20%</md-table-cell>
        <md-table-cell class="pass">90% viability</md-table-cell>
        <md-table-cell class="try">80% viability</md-table-cell>
        <md-table-cell>1mL</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Libraries for Sequencing</md-table-cell>
        <md-table-cell>Individual Libraries</md-table-cell>
        <md-table-cell rowspan="2" class="pass">3nM</md-table-cell>
        <md-table-cell rowspan="2" class="try">2nM</md-table-cell>
        <md-table-cell rowspan="2" class="pass">150 &lt; bp &lt; 1000bp</md-table-cell>
        <md-table-cell rowspan="2" class="try">bp &lt; 150</md-table-cell>
        <md-table-cell>10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Pooled Libraries</md-table-cell>
        <md-table-cell>20&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>PDX/xenograft-derived samples</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="try">9ng</md-table-cell>
        <md-table-cell class="pass">60% human</md-table-cell>
        <md-table-cell class="try">50% human</md-table-cell>
        <md-table-cell>9&#181;L</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default { name: 'OtherCriteria' };
</script>

<style></style>
