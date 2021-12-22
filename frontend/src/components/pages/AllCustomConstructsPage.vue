<template>
  <div id="all-reservations">
    <md-table
      v-model="customConstructs"
      md-card
      :md-sort.sync="currentSort"
      :md-sort-order.sync="currentSortOrder"
      :md-sort-fn="customSort"
      class="existing-reservations-table"
    >
      <md-table-toolbar>
        <h1 class="md-title">Custom Construct Submissions</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Uploads" md-sort-by="files">{{ item.files }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.contactInfo.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.contactInfo.email }}</md-table-cell>
        <md-table-cell md-label="PI" md-sort-by="principalInvestigator">{{ item.body.principalInvestigator }}</md-table-cell>
        <md-table-cell md-label="Forward Primer" md-sort-by="forwardPrimer">{{ item.body.forwardPrimer }}</md-table-cell>
        <md-table-cell md-label="Reverse Primer" md-sort-by="reversePrimer">{{ item.body.reversePrimer }}</md-table-cell>
        <md-table-cell md-label="Kit Name" md-sort-by="kitName">{{ item.body.kitName }}</md-table-cell>
        <md-table-cell md-label="Protocol Details" md-sort-by="protocolDetails">{{ item.body.protocolDetails }}</md-table-cell>
        <md-table-cell md-label="Date Created" md-sort-by="createdAt">{{ new Date(item.createdAt.toString()) }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL, PW } from './../../config.js';

export default {
  data: function() {
    return {
      customConstructs: {},
      password: PW,
      input: '',
      showData: '',
      currentSort: 'createdAt',
      currentSortOrder: 'asc',
    };
  },
  mounted: function() {
    app.axios.get(`${API_URL}/customConstruct`).then((response) => {
      this.customConstructs = response.data.data.customConstructs;
    });
  },
  methods: {
    validateUser() {
      if (this.input === this.password) {
        this.showData = true;
        this.input = '';
      }
    },
  },

  //   customSort(value) {
  //     return value.sort((a, b) => {
  //       const sortBy = this.currentSort;

  //       if (this.currentSortOrder === 'desc') {
  //         return a[sortBy].toString().localeCompare(b[sortBy]);
  //       }

  //       return b[sortBy].toString().localeCompare(a[sortBy]);
  //     });
  //   },
};
</script>

<style></style>
