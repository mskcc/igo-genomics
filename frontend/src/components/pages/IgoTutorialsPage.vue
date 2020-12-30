<template>
  <div>
    <div class="md-display-1">IGO At Home</div>
    <div class="news">
      <md-card class="news-card" v-for="(tutorial, index) in tutorials" :key="index">
        <md-card-media v-if="tutorial.screenshot">
          <router-link :to="{ name: 'show video', params: { name: tutorial.slug } }">
            <img :src="tutorial.screenshot | returnScreenshot"
          /></router-link>
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{ tutorial.title }}</div>
          <div class="md-subhead">{{ tutorial.speakers }}</div>
          <div class="md-caption">{{ tutorial.date }}</div>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
import { tutorials } from "./../../data.js";

export default {
  data: function() {
    return {
      tutorials: tutorials,
    };
  },
  filters: {
    returnScreenshot: function(screenshot) {
      return require("../../assets/images/screenshots/" + screenshot + ".png");
    },
  },
};
</script>

<style></style>
