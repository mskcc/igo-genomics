<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">10X Visium Processing & Price Summary</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Core</md-table-head>
        <md-table-head>Processing Step</md-table-head>
        <md-table-head>Cost</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2" style="background:#8fc7e8">MCC</md-table-cell>
        <md-table-cell>Tissue freeze & OCT embed</md-table-cell>
        <md-table-cell rowspan="4">QC $36*</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Curls cut</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2" style="background:#f29934">IGO</md-table-cell>
        <md-table-cell>RNA extraction</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>RIN check – > 7 to pass</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="2" style="background:#8fc7e8">MCC</md-table-cell>
        <md-table-cell>Preparation of tissue optimization slide</md-table-cell>
        <md-table-cell rowspan="6">Permeabilization Optimization $900*</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>H&E stain + imaging</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3" style="background:#f29934">IGO</md-table-cell>
        <md-table-cell>Tissue permeabilization (7 conditions)</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cDNA synthesis</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Tissue removal</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="3" style="background:#8fc7e8">MCC</md-table-cell>
        <md-table-cell>Fluorescent imaging</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Experimental slide preparation</md-table-cell>
        <md-table-cell rowspan="8">Spatial Transcriptomics $4,400/slide*</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>H&E stain + imaging</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell rowspan="8" style="background:#f29934">IGO</md-table-cell>
        <md-table-cell>Tissue permeabilization</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Reverse transcription</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>2nd strand synthesis</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>cDNA denaturation</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>qPCR to quantify cDNA yield</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Library preparation</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Sequencing</md-table-cell>
        <md-table-cell rowspan="2">Data Generation up to $5,232/slide</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>SpaceRanger</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell colspan="3"><strong>*Price includes IGO charges only; MCC billed separately</strong></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
