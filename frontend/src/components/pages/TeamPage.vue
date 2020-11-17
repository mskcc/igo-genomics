<template>
  <div>
    <!-- <div v-for="member in members" :key="member.id">{{ member.name }}</div> -->
    Team: {{ team }}
  </div>
</template>

<script>
// import { members } from "./../../data.js";

export default {
  name: "TeamPage",
  props: ["team"],
  data: function() {
    return { id: this.$route.params.id };
  },
  // mounted() {
  //   this.teamOnPage = this.team;
  // },
};
</script>

<style></style>
