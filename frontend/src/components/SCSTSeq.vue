<template>
  <div>
    <div class="single-header">
        <img class="prices-image" src="../assets/services2.png" alt="bulk logo" />
        <div class="md-title">Single Cell Sequencing & Spatial Transcriptomics</div>
      </div>
    <br />
    <br />
    <div class="single-data">
      <div>
        <div class="list">
          <md-list>
            <md-list-item
              v-for="(service, index) in singleServices"
              :key="index"
              md-expand
              :md-expanded="platformName.replace(/ /g, '').toLowerCase() === service.name.replace(/ /g, '').toLowerCase()"
              @click="expandList($event, service.name)">
              <span class="md-list-item-text">{{ service.name }}</span>
              <span v-if="service.name === '10x Genomics Visium'">
                <router-link exact :to="{ name: 'single cell hub' }">more info</router-link>
              </span>
              <md-list slot="md-expand">
                <md-list-item>
                  <table class="prices-table services-general-table">
                    <tr>
                      <th>Description:</th>
                      <td>{{ service.description }}</td>
                    </tr>
                    <tr>
                      <th>Starting Material:</th>
                      <td>{{ service.startingMaterial }}</td>
                    </tr>
                    <tr v-if="service.libraryChemistry">
                      <th>Library Chemistry:</th>
                      <td>{{ service.libraryChemistry }}</td>
                    </tr>
                    <tr>
                      <th>Sequencing Read Length:</th>
                      <td>{{ service.sequencingReadLength }}</td>
                    </tr>
                    <tr>
                      <th>Sequencing Coverage:</th>
                      <td>{{ service.sequencingCoverage }}</td>
                    </tr>
                    <tr>
                      <th>Deliverable:</th>
                      <td>{{ service.deliverable }}</td>
                    </tr>
                    <tr v-if="service.tissueOptimizationCost">
                      <th>Tissue Optimization Cost:</th>
                      <td>{{ service.tissueOptimizationCost }}</td>
                    </tr>
                    <tr v-if="service.libraryCost">
                      <th>Library Cost:</th>
                      <td>{{ service.libraryCost }}</td>
                    </tr>
                    <tr v-if="service.sequencingCost">
                      <th>Sequencing Cost:</th>
                      <td>{{ service.sequencingCost }}</td>
                    </tr>
                    <tr v-if="service.cost">
                      <th>Cost:</th>
                      <td>{{ service.cost }}</td>
                    </tr>
                  </table></md-list-item>
                <md-list-item v-if="service.table">
                  <md-table>
                    <md-table-row>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('xGenomicsPlatform')">10X Platform</md-table-head>
                      <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostLibrary')">Library Cost/Sample</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cellCostSequencing')">Sequencing Cost/Cell</md-table-head>
                    </md-table-row>
                    <md-table-row v-for="(row, j) in service.table" :key="j">
                      <md-table-cell>{{ row.xGenomicsPlatform }}</md-table-cell>
                      <md-table-cell>${{ row.sampleCostLibrary }}</md-table-cell>
                      <md-table-cell>{{ row.cellCostSequencing }}</md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-list-item>
              </md-list>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>

import { HOME_PAGE_PATH } from './../config.js';
import { singleServices, } from './../data.js';

export default { 
  name: 'ScstSeq',
  props: ['name'],
  data: function() {
    return {
      singleServices: singleServices,
      platformName: '',
    };
  },
  mounted: function() {
    this.platformName = this.$route.params.name || '';
    // console.log(this.platformName);
  },
  methods: {
    expandList(event, service) {
      // this.$route.params.name = service;
      if (event.target.innerHTML === 'Pricing') {
        history.pushState(service, '', `${HOME_PAGE_PATH}/block-pricing`);
      } else if (event.target.innerHTML !== 'more info') {
        history.pushState(null, null, `${HOME_PAGE_PATH}/platforms/${service.replace(/ /g, '').toLowerCase()}`);
      }
    },
  },
};

</script>

<style></style>
