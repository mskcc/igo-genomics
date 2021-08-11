<template>
  <div class="existing-reservations-table">
    <md-table md-card v-if="existingReservations.length > 0">
      <md-table-toolbar>
        <h1 class="md-title">Existing {{ requestType }} Reservations</h1>
      </md-table-toolbar>
      <md-table-row>
        <!-- <md-table-head md-numeric></md-table-head> -->
        <md-table-head>Name</md-table-head>
        <md-table-head>Date</md-table-head>
        <md-table-head>Time</md-table-head>
        <md-table-head v-if="requestType === '10xGenomics'">Chemistry</md-table-head>
        <md-table-head>Number of Samples</md-table-head>
      </md-table-row>
      <md-table-row v-for="(reservation, index) in existingReservations" :key="index">
        <!-- <md-table-cell md-numeric>{{ index + 1 }}</md-table-cell> -->
        <md-table-cell>{{ reservation.fullName }}</md-table-cell>
        <md-table-cell>{{ reservation.date }}</md-table-cell>
        <md-table-cell>{{ reservation.emailTime }}</md-table-cell>
        <md-table-cell v-if="requestType === '10xGenomics'">{{ reservation.details.chemistry }}</md-table-cell>
        <md-table-cell>{{ reservation.details.sampleNumber }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ExistingReservations',
  computed: {
    requestType: function() {
      return this.$store.state.requestType;
    },
    existingReservations: function() {
      return this.$store.state.existingReservations;
    },
  },
};
</script>

<style></style>
