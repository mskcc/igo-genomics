<template>
  <div>
    <md-app>
      <md-app-drawer md-permanent="full">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">
          <span :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</span>
        </md-toolbar> -->

        <md-list class="md-dense">
          <md-list-item :to="{ name: 'single cell hub' }">Single Cell Sequencing & Spatial Transcriptomics Hub</md-list-item>
          <md-list-item class="indent" href="#overview">Overview</md-list-item>
          <md-list-item class="indent" href="#sample-types">SC/ST Platforms and Supported Sample Types</md-list-item>
          <md-list-item class="indent" href="#visium">10X Visium Processing & Price Summary</md-list-item>
          <md-list-item class="indent" href="#geomx">Nanostring GeoMx</md-list-item>
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
        <br />

        <span class="md-list-item-text md-title" id="geomx">Nanostring GeoMx</span>
        <md-list slot="md-expand">
          <md-list-item>
            <div class="md-layout md-gutter">
              <div class="md-layout-item">Sample type</div>
              <div class="md-layout-item">Info type</div>
            </div>
          </md-list-item>
        </md-list>
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
