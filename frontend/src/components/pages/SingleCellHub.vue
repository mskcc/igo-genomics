<template>
  <div>
    <md-app>
      <md-app-drawer md-permanent="full">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">
          <span :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</span>
        </md-toolbar> -->

        <md-list class="md-dense">
          <md-list-item :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</md-list-item>
          <md-list-item class="indent" href="#sample-types">Summary of SC/ST Platforms and Supported Sample Types</md-list-item>
          <md-list-item class="indent" href="#visium">10X Genomics Visium</md-list-item>
          <md-list-item class="indent" href="#scrnaseq">10X Genomics Single Cell RNA-Seq</md-list-item>
          <md-list-item class="indent" href="#mb-tapestri">Mission Bio Tapestri</md-list-item>
          <md-list-item class="indent" href="#geomx">Nanostring GeoMx</md-list-item>
          <md-list-item class="indent" href="#plateseq">Plate-Seq</md-list-item>
          <md-list-item class="indent" href="#dlp">Direct Library Prep</md-list-item>
          <md-list-item class="indent" href="#multiome">10X Genomics Multiome</md-list-item>
          <md-list-item :to="{ name: 'platforms & pricing' }">Pricing</md-list-item>
          <md-list-item :to="{ name: 'submission guidelines' }">How to submit samples</md-list-item>
          <md-list-item :to="{ name: 'reservations' }">Make a reservation for sample drop off</md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p id="overview">
          Welcome to IGO's single cell and spatial transcriptomics hub -- here you'll find links to our pricing and submission information,
          as well as extra information about new and popular platforms.
        </p>
        <span class="md-title" id="sample-types">SC/ST Platforms and Supported Sample Types</span>
        <single-cell-table />
        <br />

        <span class="md-title" id="visium">10X Visium Processing & Price Summary</span>
        <ten-x-table />
        <div>
          Type of sample to submit: <br />
          Type of data received: <br />
          Important considerations: <br />
          <ul>
          </ul>
        </div>
        <br />

        <span class="md-title" id="scrnaseq">10X Genomics Single Cell RNA-Seq</span>
          <div>
            Type of sample to submit: single cell suspension <br />
            Type of data received: FASTQ, cloupe <br />
            Important considerations:  <br />
            <ul>
              <li>cell viability at submission should be top priority for experimental design</li>
              <li>40K cells are required for 10K output</li>
              <li>cell hashing refers to using oligo-tagged antibodies to label different samples and then combine their cells into a single 10K-cell submission</li>
              <li>feature barcoding refers to using specific antibodies against proteins of interest to measure abundance alongside RNA expression data</li>
            </ul>
          </div>
          <br />

        <span class="md-title" id="mb-tapetsri">Mission Bio Tapestri</span>
        <div>
          Type of sample to submit: <br />
          Type of data received: <br />
          Important considerations: <br />
          <ul>
          </ul>
        </div>
        <br />
        
        <span class="md-title md-title" id="geomx">Nanostring GeoMx</span>
        <div>
          Type of sample to submit: <br />
          Type of data received: <br />
          Important considerations: <br />
          <ul>
          </ul>
        </div>
        <br />

        <span class="md-title" id="plateseq">PlateSeq</span>
        <div>
          Type of sample to submit:<br />
          Type of data received: <br />
          Important considerations: <br />
          <ul>
          </ul>
        </div>
        <br />

        <span class="md-title" id="dlp">Direct Library Prep</span>
        <div>
          Type of sample to submit: <br />
          Type of data received: <br />
          Important considerations: <br />
          <ul>
          </ul>
        </div>
        <br />

        <span class="md-title" id="multiome">10X Genomics Multiome</span>
        <div>
          Type of sample to submit: <br />
          Type of data received: <br />
          Important considerations:<br />
          <ul>
          </ul>
        </div>
        <br />
          

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import SingleCellTable from '../SingleCellTable.vue';
import TenXTable from '../TenXTable.vue';

export default {
  components: { SingleCellTable, TenXTable },
};
</script>

<style></style>
