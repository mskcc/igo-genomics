<template>
  <div class="news">
    <carousel :per-page="1" :autoplay="true" :scrollPerPage="true" paginationActiveColor="#f29934" :paginationSize="13">
      <slide>
        <md-card class="news-card">
          <md-card-media-cover>
            <md-card-media>
              <img src="../assets/images/news/Viale_190612_078.jpg" @click="showDialogMethod" />
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">New "Reservations feature"</span>
                <!-- <span class="md-title">New "Reservations feature for 10X Genomics & ATAC-Seq sample drop off"</span> -->
                <span class="md-subhead">March 9, 2021</span>
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
              <md-card-content>
                <p>
                  IGO is happy to announce the launch of a new website feature to
                  <router-link :to="{ name: 'reservations' }">book drop off appointments</router-link> of fresh samples for 10X Genomics
                  (M-F) and ATAC-Seq (Th only)! Simply select your request type from the dropdown menu, desired appointment day, AM or PM
                  and then select the hour of drop offering. Fill out the short form, including whether you are requesting 3' or 5' 10X
                  chemistry, and submit! You will receive a confirmation e-mail; don't forget to fill out your iLab request and the sample
                  webform before your appointment.
                </p>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </slide>
      <slide>
        <md-card class="news-card">
          <md-card-media-cover>
            <md-card-media>
              <img src="../assets/images/lab/wheresciencegoesigo.jpeg" @click="showDialogMethod" />
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">Welcome to the new IGO website!</span>
                <span class="md-subhead">January 15, 2021</span>
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
              <md-card-content>
                <p>
                  In support of our ongoing efforts to provide excellent customer service alongside our cutting-edge technologies, IGO's
                  Data Team has worked to upgrade our genomics.mskcc.org site. Executed in just over a month, the new site provides easier
                  access to tools and information while increasing functionality. Please feel free to contact us at genomics@mskcc.org if
                  you have any questions, comments, or suggestions for the website.
                </p>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </slide>
      <slide>
        <md-card class="news-card">
          <md-card-media-cover>
            <md-card-media>
              <img src="../assets/images/news/Viale_190612_083.jpg" @click="showDialogMethod" />
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">New project tracker, guidance for single cell applications, and changes to data delivery</span>
                <span class="md-subhead">December 3, 2020</span>
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
              <md-card-content>
                <p>
                  IGO’s Data Team is pleased to roll out a new
                  <a href="https://igo.mskcc.org/login/request-tracker"> request tracking application</a>. Use this tool for real-time
                  visualization of IGO’s progress on your project, with detail to the sample level. Try it out in the IGO Marketplace today!
                </p>
                <p>
                  As demand for single cell sequencing rises, IGO continues to invest in platforms to cover a wide variety of sample types
                  and data needs. See which application is right for your sample set
                  <router-link :to="{ name: 'single cell platforms' }">here</router-link>.
                </p>
                <p>
                  Currently, IGO’s data delivery consists of FASTQ files separated by sample, sequencer run, and read (forward vs reverse).
                  <strong>Starting January 2021, there will be an additional layer of separation: by sequencer lane. </strong>
                  <router-link :to="{ name: 'accessing your data' }">Click here for more information.</router-link>
                </p>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </slide>
    </carousel>

    <div id="read-more">
      <md-button class="md-primary" :to="{ name: 'all news' }">more news</md-button>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content md-dynamic-height><img :src="enlargedImage"/></md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import { IMAGE_URL } from './../config.js';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'HomePageNews',
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      showDialog: false,
      enlargedImage: '',
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
