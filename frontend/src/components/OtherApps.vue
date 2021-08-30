<template>
  <div>
    <div class="other-header">
        <img class="prices-image" src="../assets/services3.png" alt="bulk logo" />
        <div class="md-title">Other Platforms</div>
      </div>
    <br />
    <br />
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
                  <md-list-item v-if="service.table"><md-table>
                      <md-table-row>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('service')">Service</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('species')">Species</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('cost')">Cost</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('startingMaterial')">Starting Material</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('extractionOutput')" >Extraction Output</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sampleCost')">Sample Cost</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('totalReads')">Total Reads</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sr50')">SR50</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sr75')">SR75</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe50')">PE50</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe75')">pe75</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('sr150')">SR150</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe100')">PE100</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe150')">PE150</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('special28')">28/8/91</md-table-head>
                        <md-table-head v-if="service.tableHeaders && service.tableHeaders.includes('pe250')">PE250</md-table-head>
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
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sr50')">${{ row.sr50 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sr75')">${{ row.sr75 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe50')">${{ row.pe50 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe75')">${{ row.pe75 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('sr150')">${{ row.sr150 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe100')">${{ row.pe100 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe150')">${{ row.pe150 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('special28')">${{ row.special28 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('pe250')">${{ row.pe250 }}</md-table-cell>
                        <md-table-cell v-if="service.tableHeaders && service.tableHeaders.includes('serviceType')">{{  row.serviceType }}</md-table-cell>
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

    
  </div>
</template>

<script>

import { HOME_PAGE_PATH } from './../config.js';
import { otherServices } from './../data.js';

export default { 
  name: 'OtherApps',
  props: ['name'], 
  data: function() {
    return {
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
  };
</script>

<style></style>
