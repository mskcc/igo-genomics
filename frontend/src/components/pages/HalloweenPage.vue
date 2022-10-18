<template>
  <div>
    <!-- <div class="md-display-1">Submitting a Project</div> -->
    <md-card class="data-delivery-card">
      <md-card-content class="center-page">
        <md-card-header>
          <div class="md-subheading">
            <a href="https://outlook.office365.com/owa/calendar/HalloweenOpenHouse@mskcc.onmicrosoft.com/bookings/" target="__blank" class="generic-button">Register for a workshop or consultation</a>
            <div class="spacer-30"></div>
            <a href="https://igo.mskcc.org/swabnseq/about" class="generic-button">Learn about Swab&Seq</a>
          </div>
        </md-card-header>
        <div class="about-image-container">
          <md-content class="md-elevation-24 lab-photo">
            <img src="../../assets/images/news/OpenHouse2021-Flyer-Final-Landscape.jpg" alt="2021 Flyer" />
          </md-content>
          <!-- <iframe
            height="611"
            width="795"
            frameborder="0"
            src="../../assets/images/news/OpenHouse2021-Flyer-Final-Landscape.jpg">
          </iframe> -->
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { OH_CALENDAR } from '../../config.js';

export default {
  name: 'HalloweenPage',
  data: function() {
    return {
      ohCalendar: OH_CALENDAR,
    };
  },
  components: {},
  methods: {
    // whatIsthis() {
    //   if (document.querySelector('#this-page')) {
    //     console.log(this);
    //   }
    // },
    // toggle() {
    //   this.covid = !this.covid;
    // },
  },
};
</script>

<style></style>
