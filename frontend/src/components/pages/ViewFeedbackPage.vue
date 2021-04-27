<template>
  <div>
    <!-- <span v-if="feedback.data.length > 0">
      <md-table md-card :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort">
        <md-table-toolbar>
          <h1 class="md-title">Investigator Feedback</h1>
        </md-table-toolbar>
        <md-table-row>
          <md-table-head md-numeric></md-table-head>
          <md-table-head>Application</md-table-head>
          <md-table-head>Category</md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head>Date Created</md-table-head>
        </md-table-row>
        <md-table-row v-for="(feedback, index) in feedback.data" :key="index">
          <md-table-cell md-label="Application" md-sort-by="application">{{ feedback.application }}</md-table-cell>
          <md-table-cell md-label="Category" md-sort-by="feedbackCategory">{{ feedback.feedbackCategory }}</md-table-cell>
          <md-table-cell md-label="Description" md-sort-by="description">{{ feedback.description }}</md-table-cell>
          <md-table-cell md-label="Date Created" md-sort-by="createdAt">{{ feedback.createdAt }}</md-table-cell>
        </md-table-row>
      </md-table>
    </span> -->

    <!-- <span v-if="feedback.data.length > 0"> -->
    <md-table
      v-model="feedback.data"
      md-card
      :md-sort.sync="currentSort"
      :md-sort-order.sync="currentSortOrder"
      :md-sort-fn="customSort"
      class="existing-reservations-table"
    >
      <md-table-toolbar>
        <h1 class="md-title">Investigator Feedback</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Application" md-sort-by="application">{{ item.application }}</md-table-cell>
        <md-table-cell md-label="Rating" md-sort-by="opinionRating">{{ item.opinionRating }}</md-table-cell>
        <md-table-cell md-label="Category" md-sort-by="feedbackCategory">{{ item.feedbackCategory }}</md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Date Created" md-sort-by="createdAt">{{ item.createdAt }}</md-table-cell>
      </md-table-row>
    </md-table>
    <!-- </span> -->
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';

export default {
  data: function() {
    return {
      feedback: [],
      currentSort: 'createdAt',
      currentSortOrder: 'desc',
    };
  },
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        console.log(sortBy);

        if (this.currentSortOrder === 'desc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
  },
  mounted: function() {
    app.axios
      .get(`${API_URL}/getFeedback`)
      .then((response) => {
        this.feedback = response.data;
      })
      .catch((error) => this.$swal({ title: 'Unable to submit', text: error.response.data.message, icon: 'error' }));
  },
};
</script>

<style></style>
