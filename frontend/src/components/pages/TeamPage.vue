<template>
  <div>
    <div v-for="member in members" :key="member.id">{{ member.name }}</div>
  </div>
</template>

<script>
import { members } from "./../../data.js";

export default {
  name: "TeamPage",
  data: function() {
    return {
      members: members,
    };
  },
};
</script>

<style></style>
