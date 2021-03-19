<template>
  <div>
    <div v-if="appointment">
      <div class="md-display-1">Appointment Details</div>
      {{ appointment }}
      <form>
        <md-card>
          <md-radio v-model="cancel" value="Primary" class="md-primary">Cancel</md-radio>
        </md-card>
      </form>
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
