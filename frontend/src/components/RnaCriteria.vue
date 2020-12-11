<template>
  <div>
    <md-table md-card class="criteria-table">
      <md-table-row>
        <md-table-head>Platform</md-table-head>
        <md-table-head>Sample Type</md-table-head>
        <md-table-head>Mass to Pass</md-table-head>
        <md-table-head>Mass to Try</md-table-head>
        <md-table-head>Quality to Pass</md-table-head>
        <md-table-head>Quality to Try</md-table-head>
        <md-table-head>Maximum Submission Volume</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="gray" rowspan="2">Archer FusionPlex</md-table-cell>
        <md-table-cell class="gray">FFPE</md-table-cell>
        <md-table-cell class="pass">250ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN > 6</md-table-cell>
        <md-table-cell rowspan="2" class="try">No fail range</md-table-cell>
        <md-table-cell class="gray" rowspan="2">20&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="gray">Frozen</md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">Archer Immunoverse</md-table-cell>
        <md-table-cell>PBMCs</md-table-cell>
        <md-table-cell class="pass">20ng</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell rowspan="2" class="pass">RIN > 7</md-table-cell>
        <md-table-cell rowspan="2" class="try">RIN > 5</md-table-cell>
        <md-table-cell rowspan="2">20&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Other</md-table-cell>
        <md-table-cell class="pass">400ng</md-table-cell>
        <md-table-cell class="try">20ng</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="gray" rowspan="2">ddPCR (per assay)</md-table-cell>
        <md-table-cell class="gray">FFPE</md-table-cell>
        <md-table-cell class="try">No pass range</md-table-cell>
        <md-table-cell class="try" rowspan="2">No fail range</md-table-cell>
        <md-table-cell class="try">No pass range</md-table-cell>
        <md-table-cell class="try" rowspan="2">No fail range</md-table-cell>
        <md-table-cell class="gray" rowspan="2">18&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="gray">Frozen</md-table-cell>
        <md-table-cell class="pass">2ng</md-table-cell>
        <md-table-cell class="pass">RIN > 6</md-table-cell>
      </md-table-row>
      <md-table-row></md-table-row>
      <md-table-row>
        <md-table-cell>RNASeq-PolyA</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">500ng</md-table-cell>
        <md-table-cell class="try">100ng</md-table-cell>
        <md-table-cell class="pass">RIN > 6</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>50&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2" class="gray">RNASeq-RiboDepletion</md-table-cell>
        <md-table-cell class="gray">FFPE</md-table-cell>
        <md-table-cell class="try">No pass range</md-table-cell>
        <md-table-cell rowspan="2" class="try">500ng</md-table-cell>
        <md-table-cell class="try">No pass range</md-table-cell>
        <md-table-cell rowspan="2" class="try">DV200 > 30</md-table-cell>
        <md-table-cell class="gray" rowspan="2">10&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell class="gray">Frozen</md-table-cell>
        <md-table-cell class="pass">1&#181;g</md-table-cell>
        <md-table-cell class="pass">DV200 > 50</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2">RNASeq-SMARTer</md-table-cell>
        <md-table-cell>Frozen</md-table-cell>
        <md-table-cell class="pass">2ng</md-table-cell>
        <md-table-cell class="try">100pg</md-table-cell>
        <md-table-cell class="pass">RIN > 8</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>9.5&#181;L</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cDNA</md-table-cell>
        <md-table-cell class="pass">10ng</md-table-cell>
        <md-table-cell class="try">2ng</md-table-cell>
        <md-table-cell class="pass">Normal profile</md-table-cell>
        <md-table-cell class="fail">No try range</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default { name: "RnaCriteria" };
</script>

<style></style>
