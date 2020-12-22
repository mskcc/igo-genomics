<template>
  <div>
    <div class="md-display-1">Schedule 10x appointment</div>
    <vc-date-picker v-model="date" :rows="1" :disabled-dates="{ weekdays: [1, 7] }" :min-date="new Date()" />
    <!-- <vc-calendar></vc-calendar> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return { date: new Date() };
  },
};
</script>

<style></style>
