<template>
  <div>
    <div v-if="announcement" class="announcement-bubble">
      <span class="material-icons"> priority_high </span>
      <span class="announcement-content">
        IGO will be closed Monday, 1/18 in observance of Martin Luther King Jr. Day.
      </span>
    </div>
    <div class="carousel-div">
      <carousel :per-page="1" :autoplay="true" :scrollPerPage="true" paginationActiveColor="#f29934" :paginationSize="13">
        <slide>
          <img src="../../assets/images/lab/wheresciencegoesigo.jpeg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_104.jpg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_005.jpg" />
        </slide>
        <slide>
          <img src="../../assets/images/lab/Viale_190612_030.jpg" />
        </slide>
        <!-- <slide>
          <iframe
            id="seq-capacity"
            src="https://splunkp/en-US/embed?s=%2FservicesNS%2Fnobody%2Fmsk_is_igo%2Fsaved%2Fsearches%2FIGO_Website_Sequencer_Capacity&oid=sqUFRzpFTM0Kx9UKPGZhtEcJxn0yLHFUxa2lXd4V0q4gchgRxRt%5EevDN9MFLjZ50vQjBPVtGmFMm2MqaJRLu52y2Zj_5TLhJY0Sel%5EheZWkaHvALYiFW_XKWSgiGfofu0m90pAvTq49Vu88jTpicq%5ETdoXRyfg5ZgExoGQ0"
          ></iframe>
        </slide> -->
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

    <div class="news">
      <div class="news-headline md-headline md-inset">News at the IGO</div>
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
          <img src="../../assets/images/news/Viale_190612_111.jpg" @click="showDialogMethod" />
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
      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/Viale_190612_078.jpg" @click="showDialogMethod" />
        </md-card-media>

        <md-card-header>
          <div class="md-title">New pricing for block sequencing</div>
          <div class="md-subhead">October 26, 2020</div>
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
                For investigators who make their own sequencing libraries to submit to IGO, we now have
                <router-link :to="{ name: 'platforms & pricing' }">easy-to-understand block pricing</router-link> for our most
                commonly-requested read lengths and throughputs. We accept both individual user libraries and pre-pooled libraries to occupy
                a full flow cell or lane. Custom read lengths and coverages outside the block pricing will still be accepted;
                <router-link :to="{ name: 'contact us' }">contact us for more information.</router-link>
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
    </md-dialog>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'HomePage',
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      igoDescription:
        'The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing activities at MSK, the core empowers scientists with an array of technological options and the most efficient and cost-effective means of performing high-throughput genomics.',
      showDialog: false,
      enlargedImage: '',
      announcement: true,
    };
  },
  methods: {
    showDialogMethod: function(event) {
      const imageElement = event.target;
      const imageSrc = imageElement.getAttribute('src');
      const cleanedImageSrc = imageSrc.split('/').pop();
      this.enlargedImage = 'http://localhost:8081/img/' + cleanedImageSrc;
      this.showDialog = true;
    },
  },
};
</script>

<style></style>
