<template>
  <div>
    <div class="md-display-1">News at IGO</div>
    <div class="news-container">
      <md-card class="news-card" v-for="(newsItem, index) in news" :key="index">
        <!-- <md-card-media-cover> -->
        <md-card-media>
          <img :src="newsItem.imgSource | newsImage" @click="showDialogMethod" />
        </md-card-media>
        <!-- <md-card-area> -->
        <md-card-header>
          <div class="md-title">{{ newsItem.title }}</div>
          <div class="md-subhead">{{ newsItem.date }}</div>
        </md-card-header>

        <!-- <md-card-actions>
            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions> -->
        <!-- </md-card-area> -->
        <!-- </md-card-media-cover> -->

        <!-- <md-card-expand>
        <md-card-expand-content> -->
        <md-card-content v-html="newsItem.body"> </md-card-content>
        <!-- </md-card-expand-content>
      </md-card-expand> -->
      </md-card>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content md-dynamic-height><img :src="enlargedImage"/></md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import { news } from './../../data.js';
import { IMAGE_URL } from './../../config.js';

export default {
  data: function() {
    return {
      showDialog: false,
      enlargedImage: '',
      news: news,
    };
  },
  methods: {
    showDialogMethod: function(event) {
      const imageElement = event.target;
      const imageSrc = imageElement.getAttribute('src');
      const cleanedImageSrc = imageSrc.split('/').pop();
      this.enlargedImage = IMAGE_URL + cleanedImageSrc;
      this.showDialog = true;
    },
  },
};
</script>

<style></style>
