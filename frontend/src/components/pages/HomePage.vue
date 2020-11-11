<template>
  <div>
    <span class="md-display-3">News</span>
    <div>
      <md-card
        class="news-card"
        md-with-hover
        v-for="entry in news"
        :key="entry.id"
      >
        <md-card-header>
          <div class="md-title">{{ entry.name }}</div>
          <div class="md-subhead">{{ entry.date }}</div>
        </md-card-header>
        <md-card-content>{{ entry.body }}</md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import { news } from "./../../data.js";
export default {
  name: "HomePage",
  data: function() {
    return {
      news: news,
    };
  },
};
</script>

<style></style>
