<template>
  <div>
    {{ feedback }}

    <!-- <md-table md-card v-if="feedback.data > 0"> -->
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Investigator Feedback</h1>
      </md-table-toolbar>
      <md-table-row>
        <!-- <md-table-head md-numeric></md-table-head> -->
        <md-table-head>Rating</md-table-head>
      </md-table-row>
      <md-table-row v-for="(feedback, index) in feedback.data" :key="index">
        <md-table-cell>{{ feedback.details }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';

export default {
  data: function() {
    return {
      feedback: {},
    };
  },
  mounted: function() {
    app.axios
      .get(`${API_URL}/getFeedback`, {})
      .then((response) => {
        this.feedback = response.data;
      })
      .catch((error) => this.$swal({ title: 'Unable to submit', text: error.response.data.message, icon: 'error' }));
  },
};
</script>

<style></style>
