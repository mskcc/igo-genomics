<template>
  <div>
    <span v-if="feedback.data && feedback.data.length > 0">
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
          <md-table-cell md-label="Date Created" md-sort-by="createdAt">{{ new Date(item.createdAt.toString()) }}</md-table-cell>
        </md-table-row>
      </md-table>
    </span>
    <span v-else>No feedback yet!</span>
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
      currentSortOrder: 'asc',
    };
  },
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;

        if (this.currentSortOrder === 'desc') {
          return a[sortBy].toString().localeCompare(b[sortBy]);
        }

        return b[sortBy].toString().localeCompare(a[sortBy]);
      });
    },
  },
  mounted: function() {
    app.axios
      .get(`${API_URL}/allFeedback`)
      .then((response) => {
        this.feedback = response.data.data;
      })
      .catch((error) => {
        this.$swal({ title: 'Error', text: error.response.data.message, icon: 'error' });
      });
  },
};
</script>

<style></style>
