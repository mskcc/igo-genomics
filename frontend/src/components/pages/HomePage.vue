<template>
  <div>
    <div v-if="announcement" class="announcement-bubble">
      <!-- <span class="material-icons"> priority_high </span> -->
      <span class="material-icons"> notifications_active </span>
      <span class="announcement-content">
        Coming soon: Optical Genome Mapping with the bionano system in collaboration with the Molecular Cytology Core Facility
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
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Requests_SingleValue&oid=NLHxk5BQ8ipCsbirSp0MN3hcVLY_D_60uJvC2vT1XN8pKhVzZ1bYYYqdyyyOHfVO1WUB0IeeAmqmjTbAcBAqB87NMY1DVfk47MWdBjfRRV9ruNBGBHThKZnG9AdOSPgv%5EmT8FWGK6ZytbjW36MRjnAQW_KAqLa1Y_HtT6fhH1c7"
      ></iframe>
      <iframe
        height="96"
        width="480"
        frameborder="0"
        src="https://splunkp.mskcc.org/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Samples_SingleValue&oid=BC_qU7wK5_NDTKTqnIwGXz8rXbF_DctNM5i5pXYHHKCyyDrKATuPSzzm1B8m9bCrOFEoW_A600ORpHGy3uVDBTVzzX%5EaB95P4Cfh7FjEql3i_QplsChCBZdw7NzcH4Ln4bAhK1fu5uc%5EviSjx1q6VnzDGXlTUDQlmQcZj1AjnN"
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
