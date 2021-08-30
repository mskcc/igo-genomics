<template>
  <div>
    <div class="bulk-header">
        <img class="prices-image" src="../assets/services1.png" alt="bulk logo" />
        <div class="md-title">Bulk Tissue and Cell-Free Sequencing</div>
      </div>
    <br />
    <br />
    <div class="bulk-data">
      <div>
        <div class="list">
          <md-list>
            <md-list-item
              v-for="(service, index) in bulkServices"
              :key="index"
              md-expand
              :md-expanded="platformName.replace(/ /g, '').toLowerCase() === service.name.replace(/ /g, '').toLowerCase()"
              @click="expandList($event, service.name)">

              <span class="md-list-item-text">{{ service.name }}</span>
              <md-list slot="md-expand">
                <md-list-item>
                  <table class="prices-table services-general-table">
                    <tr>
                      <th>Description:</th>
                      <td>{{ service.description }}</td>
                    </tr>
                    <tr v-if="service.startingMaterial">
                      <th>Starting Material:</th>
                      <td>{{ service.startingMaterial }}</td>
                    </tr>
                    <tr v-if="service.libraryChemistry">
                      <th>Library Chemistry:</th>
                      <td>{{ service.libraryChemistry }}</td>
                    </tr>
                    <tr v-if="service.captureChemistry">
                      <th>Capture Chemistry:</th>
                      <td>{{ service.captureChemistry }}</td>
                    </tr>
                    <tr v-if="service.sequencingReadLength">
                      <th>Sequencing Read Length:</th>
                      <td>{{ service.sequencingReadLength }}</td>
                    </tr>
                    <tr v-if="service.sequencingCoverage">
                      <th>Sequencing Coverage:</th>
                      <td>{{ service.sequencingCoverage }}</td>
                    </tr>
                    <tr v-if="service.deliverable">
                      <th>Deliverable:</th>
                      <td>{{ service.deliverable }}</td>
                    </tr>
                  </table></md-list-item>
                <md-list-item v-if="service.table">
                  <md-table>
                    <md-table-row>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('libraryType')">Library Type</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('readNumber')">Read Number (M)</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe50')" >Cost Per Sample (PE50)</md-table-head >
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe100')">Cost Per Sample (PE100)</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('panel')">Panel</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleType')">Sample Type</md-table-head>
                      <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')">Sample Coverage (X)</md-table-head >
                      <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFrozen')">Cost Per Sample (Frozen Tissue)</md-table-head>
                      <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFfpe')">Cost Per Sample (FFPE Tissue)</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('platform')">Platform</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sequencingDetails')" >Sequencing Details</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('deliverable')" >Deliverable</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cost')">Cost Per Sample</md-table-head>
                      <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')">Cost Per Sample</md-table-head>
                    </md-table-row>
                    <md-table-row v-for="(row, j) in service.table" :key="j">
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('libraryType')">{{ row.libraryType }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('readNumber')">{{ row.readNumber }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe50')">${{ row.sampleCostPe50 }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe100')">${{ row.sampleCostPe100 }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('panel')">{{ row.panel }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleType')">{{ row.sampleType }}</md-table-cell>
                      <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')">{{ row.sampleCoverage }}</md-table-cell>
                      <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFrozen')">${{ row.sampleCostFrozen }}</md-table-cell>
                      <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFfpe')">${{ row.sampleCostFfpe }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('platform')">{{ row.platformb }</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sequencingDetails')">{{ row.sequencingDetails }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('deliverable')">{{ row.deliverable }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('cost')">{{ row.cost }}</md-table-cell>
                      <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')">${{ row.sampleCost }}</md-table-cell>
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
import { bulkServices, } from './../data.js';

export default { 
  name: 'BulkSeq',
  props: ['name'], 
  data: function() {
    return {
      bulkServices: bulkServices,
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
