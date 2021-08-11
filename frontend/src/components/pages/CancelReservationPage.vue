<template>
  <div id="cancel-reservation-page">
    <div v-if="appointment">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">
              <span v-if="appointment.requestType !== 'spm'">{{ appointment.requestType }}</span
              ><span v-else>Sample Dropoff</span> Appointment
            </div>
            <br />
            <div class="md-subheading">
              Status:
              <span
                v-bind:class="{
                  pending: appointment.status === 'pending',
                  cancelled: appointment.status === 'cancelled',
                }"
              >
                {{ appointment.status.toUpperCase() }}
              </span>
            </div>
            <br />
            <div class="md-subheading">{{ appointment.notificationDate }}</div>
            <div class="md-subheading">
              Starts at
              {{
                new Date().setHours(parseInt(appointment.emailTime.split(':')[0]), parseInt(appointment.emailTime.split(':')[1]))
                  | moment('h:mm A')
              }}
            </div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <div>{{ appointment.fullName }}</div>
          <div>{{ appointment.email }}</div>
          <div v-if="appointment.requestType === 'spm'">iLab Service ID: {{ appointment.details.ilabServiceId }}</div>
          <div v-else>{{ appointment.details.sampleNumber }} sample(s)</div>
          <div v-if="appointment.requestType === '10xGenomics'">{{ appointment.details.chemistry }}</div>
        </md-card-content>
        <md-card-actions>
          <md-button v-if="appointment.status !== 'cancelled'" class="md-accent" @click="cancelAppointment">Cancel Appointment</md-button>
        </md-card-actions>
      </md-card>
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
            .post(`${API_URL}/cancelAppointment/${this.id}`)
            .then((response) => {
              if (response.status === 200) {
                this.$swal({ title: 'Deleted', text: response.data.message, icon: 'success' }).then((confirmedDelete) => {
                  // redirect home
                  if (confirmedDelete.isConfirmed) {
                    this.$router.push({ name: 'home' });
                  }
                });
              }
            })
            .catch((error) => {
              this.$swal({ title: 'Error', text: error.response.data.message, icon: 'error' });
            });
        }
      });
    },
  },
  // get the appointment details
  mounted: function() {
    app.axios
      .get(`${API_URL}/appointment/${this.id}`)
      .then((response) => {
        this.appointment = response.data.appointment;
      })
      .catch((error) => {
        this.$swal({ title: error.response.data.message, icon: 'error' });
      });
  },
};
</script>

<style></style>
