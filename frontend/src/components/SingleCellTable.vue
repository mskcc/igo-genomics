<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">SC/ST Platforms and Supported Sample Types</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Platform</md-table-head>
        <md-table-head>Supported sample types</md-table-head>
        <md-table-head>Output</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.10xgenomics.com/products/single-cell-gene-expression" target="_blank"
            >10X Genomics Gene Expression</a
          ></md-table-cell
        >
        <md-table-cell>single cell suspension (fresh)</md-table-cell>
        <md-table-cell>gene expression based on 3' or 5' ends only</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.10xgenomics.com/products/single-cell-immune-profiling" target="_blank"
            >10X Genomics V(D)J Enrichment</a
          ></md-table-cell
        >
        <md-table-cell>single cell suspenion (fresh)</md-table-cell>
        <md-table-cell>TCR clonality</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><a href="https://www.biolegend.com/en-us/totalseq" target="_blank">10X Genomics Feature Barcoding</a></md-table-cell>
        <md-table-cell>single cell suspension (fresh)</md-table-cell>
        <md-table-cell>targeted protein expression</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.10xgenomics.com/products/single-cell-atac" target="_blank">10X Genomics ATAC-Seq</a></md-table-cell
        >
        <md-table-cell>single nuclei suspension</md-table-cell>
        <md-table-cell>chromatin accessibility</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><a href="https://www.nature.com/articles/nprot.2014.006" target="_blank">PlateSeq</a></md-table-cell>
        <md-table-cell>cells sorted into 96-well plate (frozen)</md-table-cell>
        <md-table-cell>gene expression from full-length cDNA</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><a href="https://missionbio.com/" target="_blank">Mission Bio Tapestri</a></md-table-cell>
        <md-table-cell>fresh or frozen single cells/nuclei</md-table-cell>
        <md-table-cell>targeted SNV/CNV & protein expression</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell><a href="https://www.ncbi.nlm.nih.gov/pubmed/31730858" target="_blank">DLP+</a></md-table-cell>
        <md-table-cell>fresh or frozen single cells/nuclei</md-table-cell>
        <md-table-cell>CNV</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.10xgenomics.com/products/spatial-gene-expression" target="_blank">10X Genomics Visium</a></md-table-cell
        >
        <md-table-cell>OCT-preserved tissue</md-table-cell>
        <md-table-cell>gene & protein expression in spatial context</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.nanostring.com/products/geomx-digital-spatial-profiler/geomx-dsp" target="_blank"
            >Nanostring Geomx</a
          ></md-table-cell
        >
        <md-table-cell>FFPE or frozen tissue</md-table-cell>
        <md-table-cell>targeted gene & protein expression in spatial context</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          ><a href="https://www.10xgenomics.com/products/single-cell-multiome-atac-plus-gene-expression" target="_blank"
            >10 Genomics Multiome</a
          ></md-table-cell
        >
        <md-table-cell>single nuclei suspension</md-table-cell>
        <md-table-cell>nuclear gene expression & chromatin accessibility</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
