<template>
  <div>
    <md-empty-state
      v-if="env === 'prod'"
      class="md-primary"
      md-rounded
      md-icon="flight_takeoff"
      md-label="We're almost there!"
      md-description="Stay tuned for something amazing"
    >
    </md-empty-state>
  </div>
</template>

<script>
import { ENV } from './../config.js';

export default {
  data: function() {
    return {
      env: ENV,
    };
  },
};
</script>

<style></style>
