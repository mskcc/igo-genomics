<template>
  <div>
    <div v-if="announcement" class="announcement-bubble">
      <!-- <span class="material-icons"> priority_high </span> -->
      <span class="material-icons"> notifications_active </span>
      <span class="announcement-content">
        Core Facilities Tech Day is September 14!
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
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD530a954525e3a7dc7_at_1664942400_65226_A69FC099-7EFC-4F0D-9586-C6E0A697737E&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/app/msk_is_igo/report?sid=scheduler__mirhajf_bXNrX2lzX2lnbw__RMD53d4c8f6a16f673e8_at_1664942400_35426_47E5C73B-C856-4312-B334-29BD0C36636C&s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue"
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
