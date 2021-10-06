<template>
  <div class="news">
    <carousel :per-page="1" :autoplay="true" :scrollPerPage="true" paginationActiveColor="#f29934" :paginationSize="13">
      <slide v-for="(newsItem, index) in featuredNews" :key="index">
        <md-card class="home-news-card">
          <md-card-media-cover>
            <md-card-media>
              <img :src="newsItem.imgSource | newsImage" @click="showDialogMethod" />
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">{{ newsItem.title }}</span>
                <span class="md-subhead">{{ newsItem.date }}</span>
              </md-card-header>

              <md-card-actions>
                <md-card-expand-trigger>
                  <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>

          <md-card-expand>
            <md-card-expand-content>
              <md-card-content v-html="newsItem.body"> </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </slide>
    </carousel>

    <div id="read-more">
      <md-button class="md-primary" :to="{ name: 'news' }">more news</md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content md-dynamic-height><img :src="enlargedImage"/></md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import { IMAGE_URL } from './../config.js';
import { Carousel, Slide } from 'vue-carousel';
import { news } from './../data.js';

export default {
  name: 'HomePageNews',
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      category: 'featured',
      showDialog: false,
      enlargedImage: '',
      news: news,
    };
  },
  computed: {
    featuredNews: function() {
      return _.filter(this.news, (newsItem) => {
        return newsItem.categories.includes(this.category);
      });
    },
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
