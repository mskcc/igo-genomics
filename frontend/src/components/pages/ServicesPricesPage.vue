<template>
  <div>
    <div class="prices-container">
      <div class="bulk-header">
        <img class="prices-image" src="../../assets/services1.png" alt="bulk logo" />
        <div class="md-title">Bulk Tissue and Cell-Free Sequencing</div>
      </div>
      <div class="single-header">
        <img class="prices-image" src="../../assets/services2.png" alt="bulk logo" />
        <div class="md-title">Single Cell Sequencing</div>
        <!-- <div class="md-title">Single Cell Sequencing<br /><span class="md-subheading"><router-link :to="{ name: 'single cell hub' }">Visit the Single Cell Hub</router-link></span></div> -->
      </div>
      <div class="other-header">
        <img class="prices-image" src="../../assets/services3.png" alt="bulk logo" />
        <div class="md-title">Other Platforms</div>
      </div>

      <div class="bulk-data">
        <div>
          <div class="list">
            <md-list>
              <md-list-item>
                <router-link :to="{ name: 'block pricing' }" class="md-list-item-text">Sequencing Only <span class="md-body-2">(investigator prepared libraries/pools)</span></router-link>
              </md-list-item>
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
                  <md-list-item v-if="service.table"
                    ><md-table>
                      <md-table-row>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('libraryType')">Library Type</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('readNumber')">Read Number (M)</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe50')">Cost Per Sample (PE50)</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostPe100')">Cost Per Sample (PE100)</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('panel')">Panel</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleType')">Sample Type</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCoverage')">Sample Coverage (X)</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFrozen')">Cost Per Sample (PCR-free)</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostFfpe')">Cost Per Sample (PCR+)</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostWet')">Wet Lab Cost</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostDry')">Dry Lab Cost</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('totalCost')" class="highlight-column">Total Cost</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('platform')">Platform</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sequencingDetails')">Sequencing Details</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('deliverable')">Deliverable</md-table-head>
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
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostWet')">${{ row.sampleCostWet }}</md-table-cell>
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostDry')">${{ row.sampleCostDry }}</md-table-cell>
                        <md-table-cell md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('totalCost')" class="highlight-column">${{ row.totalCost }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('platform')">{{ row.platform }}</md-table-cell>
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
                      <tr v-if="service.sequencingReadLength">
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
                    </table>
                    </md-list-item>
                  <md-list-item v-if="service.table"
                    ><md-table>
                      <md-table-row>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('xGenomicsPlatform')">10X Platform</md-table-head>
                        <md-table-head md-numeric v-if="service.tableHeaders && service.tableHeaders.includes('sampleCostLibrary')">Library Cost/Sample</md-table-head >
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
      <div class="other-data">
        <div>
          <div class="list">
            <md-list>
              <md-list-item
                v-for="(service, index) in otherServices"
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
                      <tr v-if="service.kitChemistry">
                        <th>Kit Chemistry:</th>
                        <td>{{ service.kitChemistry }}</td>
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
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('service')">Service</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('species')">Species</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cost')">Cost</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('startingMaterial')">Starting Material</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('extractionOutput')">Extraction Output</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')">Sample Cost</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('totalReads')">Total Reads</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe50')">PE50</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe100')">PE100</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe150')">PE150</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('special28')">28/8/91</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('serviceType')">Service Type</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('serviceSubType')">Service Subtype</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('price')">Price</md-table-head>
                      </md-table-row>
                      <md-table-row v-for="(row, j) in service.table" :key="j">
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('service')">{{ row.service }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('species')">{{ row.species }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('cost')">${{ row.cost }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('startingMaterial')">{{ row.startingMaterial }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('extractionOutput')">{{ row.extractionOutput }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')">${{ row.sampleCost }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('totalReads')">{{ row.totalReads }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe50')">${{ row.pe50 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe100')">${{ row.pe100 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe150')">${{ row.pe150 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('special28')">${{ row.special28 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('serviceType')">{{ row.serviceType }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('serviceSubType')">{{ row.serviceSubType }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('price')">{{ row.price }}</md-table-cell>
                      </md-table-row>
                    </md-table>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
      <!-- <div>single prices</div>
      <div>other prices</div> -->
    </div>
    <span class="md-caption" style="text-align: right;">
      Prices indicated on this webpage are an estimation and can be adjusted (higher or lower) at any point in time based on changes in sequencing reagent cost, labor cost, etc. Note that prices do not include QC.
    </span>
  </div>
</template>

<script>
// import ChemistryTimelinePage from './ChemistryTimelinePage.vue';
import { HOME_PAGE_PATH } from './../../config.js';
import { bulkServices, singleServices, otherServices } from './../../data.js';

export default {
  name: 'ServicesPricesPage',
  // components: { ChemistryTimelinePage },
  props: ['name'],
  data: function() {
    return {
      bulkServices: bulkServices,
      singleServices: singleServices,
      otherServices: otherServices,
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
  // computed: {
  //   updateExpandedProperty: function() {
  //     return this.
  //   }
  // }
};
</script>

<style></style>
