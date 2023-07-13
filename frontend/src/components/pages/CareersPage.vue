<template>
  <div>
    <!-- <div class="md-display-1">Jobs at IGO</div> -->
    <md-empty-state
      v-if="noJobs"
      md-rounded
      md-icon="work"
      md-label="We're fully staffed!"
      md-description="Check back for openings!"
    ></md-empty-state>
    <job-descriptions v-else></job-descriptions>
  </div>
</template>

<script>
import JobDescriptions from '../JobDescriptions.vue';
export default {
  components: { JobDescriptions },
  data: function() {
    return {
      noJobs: true,
    };
  },
};
</script>

<style></style>
