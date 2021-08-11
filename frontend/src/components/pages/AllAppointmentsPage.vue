<template>
  <div>
    <form @submit.prevent="validateUser" class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <md-field>
            <label>Password</label>
            <md-input v-model="input"></md-input>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Submit</md-button>
        </md-card-actions>
      </md-card>
    </form>

    <md-table v-if="showData">
      <md-table-row>
        <md-table-cell>fullName</md-table-cell>
        <md-table-cell>email</md-table-cell>
        <md-table-cell>date</md-table-cell>
        <md-table-cell>notificationDate</md-table-cell>
        <md-table-cell>startTime</md-table-cell>
        <md-table-cell>emailTime</md-table-cell>
        <md-table-cell>requestType</md-table-cell>
        <md-table-cell>status</md-table-cell>
        <md-table-cell>chemistry</md-table-cell>
        <md-table-cell>sampleNumber</md-table-cell>
      </md-table-row>
      <md-table-row v-for="(appointment, index) in appointments" :key="index">
        <md-table-cell>{{ appointment.fullName }}</md-table-cell>
        <md-table-cell>{{ appointment.email }}</md-table-cell>
        <md-table-cell>{{ appointment.date }}</md-table-cell>
        <md-table-cell>{{ appointment.notificationDate }}</md-table-cell>
        <md-table-cell>{{ appointment.startTime }}</md-table-cell>
        <md-table-cell>{{ appointment.emailTime }}</md-table-cell>
        <md-table-cell>{{ appointment.requestType }}</md-table-cell>
        <md-table-cell>{{ appointment.status }}</md-table-cell>
        <md-table-cell>{{ appointment.details.chemistry }}</md-table-cell>
        <md-table-cell>{{ appointment.details.sampleNumber }}</md-table-cell>
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
      appointments: {},
      password: 'singlecell',
      input: '',
      showData: false,
    };
  },
  mounted: function() {
    app.axios.get(`${API_URL}/allAppointments`).then((response) => {
      this.appointments = response.data.appointments;
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
};
</script>

<style></style>
