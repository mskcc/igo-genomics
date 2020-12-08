<template>
  <div>
    <div class="carousel-div">
      <carousel :per-page="1" :autoplay="true" :scrollPerPage="true">
        <slide>
          <img src="../../assets/images/lab/Viale_190612_104.jpg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_005.jpg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_030.jpg" />
        </slide>
      </carousel>
    </div>
    <!-- <span class="md-display-3">News</span> -->
    <div class="news-container">
      <md-card class="news-card" md-with-hover v-for="entry in news" :key="entry.id">
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
import { Carousel, Slide } from "vue-carousel";
import { news } from "./../../data.js";
export default {
  name: "HomePage",
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      news: news,
    };
  },
};
</script>

<style></style>
