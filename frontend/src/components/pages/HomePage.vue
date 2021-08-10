<template>
  <div>
    <div v-if="announcement" class="announcement-bubble">
      <!-- <span class="material-icons"> priority_high </span> -->
      <span class="material-icons"> notifications_active </span>
      <span class="announcement-content">
        IGO has introduced new pricing for sequencing of investigator prepared libraries! See the Platforms & Pricing page for more
        information.
      </span>
    </div>
    <div class="carousel-div">
      <carousel :per-page="1" :autoplay="true" :scrollPerPage="true" paginationActiveColor="#f29934" :paginationSize="13">
        <slide>
          <img src="../../assets/images/lab/wheresciencegoesigo.jpeg" />
        </slide>
        <!-- <slide>
          <img src="../../assets/images/lab/Viale_190612_104.jpg" />
        </slide> -->
        <slide>
          <img src="../../assets/images/lab/Viale_190612_030.jpg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_005.jpg" />
        </slide>
      </carousel>
    </div>

    <div class="md-layout-item igo-description md-title">
      <span>
        {{ igoDescription }}
      </span>
    </div>
    <div>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=Q2WAJ0bUU5H6VvrvNWX4je81RBL6FpBswMl34LeDjwftbntREU86md93n1rleLhEogXprs8%5E_B8WrnYTtGEnIy1kv8JKzvgSyfGo3kdiBB4GiX7KHvamfqfKwWgYNk_Uv8g_Tj7LFzZJ9q4F3%5E8eH_f3DmgVRY6uvGdM6EC_sJLA"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=7wKarMvR1CyTn6ycX5yp7bY2GW7gINgA5wlwS3QVnSOplfnMZ%5EBpktUHUwg7VfRQsORWL3ajbtcMgviYZ7Kq4rH8XgNoMjkIlzK%5ELAOBiKNRNKQ1IbIw9C%5EcrSJfZy8O%5EvOH%5E%5EwAN%5E8zH4dVlMtAgnaTIa63bme3S7FIK6Jr"
      ></iframe>
    </div>
    <home-page-news></home-page-news>

    <!-- <div class="news">
      <div class="news-headline md-headline md-inset">News at the IGO</div>
      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/Viale_190612_078.jpg" @click="showDialogMethod" />
        </md-card-media>

        <md-card-header>
          <div class="md-title">New "Reservations" feature for 10X Genomics & ATAC-Seq sample drop off</div>
          <div class="md-subhead">March 9, 2021</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              <p>
                IGO is happy to announce the launch of a new website feature to
                <router-link :to="{ name: 'reservations' }">book drop off appointments</router-link> of fresh samples for 10X Genomics (M-F)
                and ATAC-Seq (Th only)! Simply select your request type from the dropdown menu, desired appointment day, AM or PM and then
                select the hour of drop offering. Fill out the short form, including whether you are requesting 3' or 5' 10X chemistry, and
                submit! You will receive a confirmation e-mail; don't forget to fill out your iLab request and the sample webform before
                your appointment.
              </p>
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>

      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/lab/wheresciencegoesigo.jpeg" @click="showDialogMethod" />
        </md-card-media>

        <md-card-header>
          <div class="md-title">Welcome to the new IGO website!</div>
          <div class="md-subhead">January 15, 2021</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              <p>
                In support of our ongoing efforts to provide excellent customer service alongside our cutting-edge technologies, IGO's Data
                Team has worked to upgrade our genomics.mskcc.org site. Executed in just over a month, the new site provides easier access
                to tools and information while increasing functionality. Please feel free to contact us at genomics@mskcc.org if you have
                any questions, comments, or suggestions for the website.
              </p>
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>

      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/Viale_190612_083.jpg" @click="showDialogMethod" />
        </md-card-media>

        <md-card-header>
          <div class="md-title">New project tracker, guidance for single cell applications, and changes to data delivery</div>
          <div class="md-subhead">December 3, 2020</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              <p>
                IGO’s Data Team is pleased to roll out a new
                <a href="https://igo.mskcc.org/login/request-tracker"> request tracking application</a>. Use this tool for real-time
                visualization of IGO’s progress on your project, with detail to the sample level. Try it out in the IGO Marketplace today!
              </p>
              <p>
                As demand for single cell sequencing rises, IGO continues to invest in platforms to cover a wide variety of sample types and
                data needs. See which application is right for your sample set
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

      <div id="read-more">
        <md-button class="md-primary" :to="{ name: 'news' }">read more</md-button>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content md-dynamic-height><img :src="enlargedImage"/></md-dialog-content>
    </md-dialog> -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
// import { IMAGE_URL } from './../../config.js';
import HomePageNews from '../HomePageNews.vue';

export default {
  name: 'HomePage',
  components: {
    Carousel,
    Slide,
    HomePageNews,
  },
  data: function() {
    return {
      igoDescription:
        'The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing activities at MSK, the core empowers scientists with an array of technological options and the most efficient and cost-effective means of performing high-throughput genomics.',
      // showDialog: false,
      // enlargedImage: '',
      announcement: true,
    };
  },
  // methods: {
  //   showDialogMethod: function(event) {
  //     const imageElement = event.target;
  //     const imageSrc = imageElement.getAttribute('src');
  //     const cleanedImageSrc = imageSrc.split('/').pop();
  //     this.enlargedImage = IMAGE_URL + cleanedImageSrc;
  //     this.showDialog = true;
  //   },
  // },
};
</script>

<style></style>
