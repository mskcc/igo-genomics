<template>
  <div>
    <div v-if="announcement" class="announcement-bubble">
      <!-- <span class="material-icons"> priority_high </span> -->
      <span class="material-icons"> notifications_active </span>
      <span class="announcement-content">
        IGO will be closed Thursday, November 25. Normal hours will resume Friday.
      </span>
    </div>

    <home-page-news></home-page-news>

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
  </div>
</template>

<script>
// import { IMAGE_URL } from './../../config.js';
import { SPM_CALENDAR, SC_CALENDAR } from './../../config.js';
import HomePageNews from '../HomePageNews.vue';

export default {
  name: 'HomePage',
  components: {
    HomePageNews,
  },
  data: function() {
    return {
      igoDescription:
        'The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing activities at MSK, the core empowers scientists with an array of technological options and the most efficient and cost-effective means of performing high-throughput genomics.',
      announcement: true,
      spmCalendar: SPM_CALENDAR,
      scCalendar: SC_CALENDAR,
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
