<template>
  <div id="cancel-reservation-page">
    <!-- <div class="md-display-1">Cancel an appointment</div> -->
    <div v-if="appointment">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ appointment.requestType }}</div>
            <div class="md-subhead">{{ appointment.notificationDate }}</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <div>Starts at {{ appointment.emailTime }}</div>
          <div>{{ appointment.fullName }}</div>
          <div>{{ appointment.email }}</div>

          <div>{{ appointment.details.sampleNumber }} sample(s)</div>
          <div v-if="appointment.requestType === '10xGenomics'">{{ appointment.details.chemistry }}</div>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-accent" @click="cancelAppointment">Cancel Appointment</md-button>
        </md-card-actions>
      </md-card>

      <!-- <form>
        <md-card>
          <md-radio v-model="cancel" value="Primary" class="md-primary">Cancel</md-radio>
        </md-card>
      </form> -->
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';

export default {
  name: 'CancelReservationPage',
  props: ['id'],
  data: function() {
    return {
      appointment: '',
      cancel: Boolean,
    };
  },
  methods: {
    cancelAppointment: function() {
      this.$swal({
        // title: 'Cancel',
        text: `Are you sure you want to cancel your appointment for ${this.appointment.notificationDate}?`,
        // animation: false,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Yes, cancel it!',
        // reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          app.axios
            .get(`${API_URL}/cancelAppointment/${this.id}`)
            .then((response) => {
              if (response.status === 200) {
                // this.$swal('Deleted!', '', 'success');
                this.$swal({ title: 'Deleted', text: response.data.message, icon: 'success' });
              }
            })
            .catch((error) => {
              this.$swal({ title: 'Error', text: error.response.data.message, icon: 'error' });
            });
        }
      });
    },
  },
  mounted: function() {
    app.axios
      .get(`${API_URL}/appointment/${this.id}`)
      .then((response) => {
        this.appointment = response.data.appointment;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // this.$swal({ title: 'Appointment not found', text: error.response.data.message, animation: false, icon: 'error' })
        this.$swal({ title: 'Appointment not found' });
      });
  },
};
</script>

<style></style>
