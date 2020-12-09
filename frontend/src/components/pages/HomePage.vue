<template>
  <div>
    <div class="carousel-div">
      <carousel :per-page="1" :autoplay="true" :scrollPerPage="true" paginationActiveColor="#f29934" :paginationSize="13">
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
    <div class="md-layout-item igo-description md-headline">
      <span>
        {{ igoDescription }}
      </span>
    </div>

    <!-- <div class="news-container">
      <md-card class="news-card" md-with-hover v-for="entry in news" :key="entry.id">
        <md-card-header>
          <div class="md-title">{{ entry.name }}</div>
          <div class="md-subhead">{{ entry.date }}</div>
        </md-card-header>
        <md-card-content>{{ entry.body }}</md-card-content>
      </md-card>
    </div> -->
    <div class="news">
      <div class="news-headline md-headline md-inset">In the News</div>

      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/Viale_190612_111.jpg" @mouseover="showDialogMethod" />
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
              IGO’s Data Team is pleased to roll out a new request tracking application. Use this tool for real-time visualization of IGO’s
              progress on your project, with detail to the sample level. Try it out in the IGO Marketplace today! As demand for single cell
              sequencing rises, IGO continues to invest in platforms to cover a wide variety of sample types and data needs. See which
              application is right for your sample set here. Currently, IGO’s data delivery consists of FASTQ files separated by sample,
              sequencer run, and read (forward vs reverse). Starting in January, there will be an additional layer of separation: by
              sequencer lane. For more information, see our explanation and examples here.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/Viale_190612_078.jpg" @mouseover="showDialogMethod" />
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
              For investigators who make their own sequencing libraries to submit to IGO, we now have easy-to-understand block pricing for
              our most commonly-requested read lengths and throughputs. We accept both individual user libraries and pre-pooled libraries to
              occupy a full flow cell or lane. Custom read lengths and coverages outside the block pricing will still be accepted; contact
              us for more information.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
      <md-card class="news-card">
        <md-card-media>
          <img src="../../assets/images/news/COVIDInfographic_080720.jpg" @mouseover="showDialogMethod" />
        </md-card-media>

        <md-card-header>
          <div class="md-title">End of era in IGO + new website features</div>
          <div class="md-subhead">October 8, 2020</div>
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
              After more than 6 months and over 46,000 samples, Friday, October 9 will be the last day of COVID-19 testing in IGO. While the
              core jumped at the opportunity to support our colleagues and city through the ongoing pandemic, we also look forward to
              turning our full attention back to our mission of supporting and enabling a broad range of research efforts at MSK. We will
              continue to provide COVID-19 testing of research samples. In addition to the new 10X Genomics Visium platform, we are
              improving our website resources for investigators. A searchable, comprehensive list of our ddPCR assays is now available and
              stay tuned for a project tracker, currently in beta testing!
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content md-dynamic-height><img :src="enlargedImage"/></md-dialog-content>

      <!-- <md-dialog-actions>
        <md-button class="md-primary" @mouseover="showDialog = false">Close</md-button>
      </md-dialog-actions> -->
    </md-dialog>
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
      igoDescription:
        "The Integrated Genomics Operation (IGO) core enables basic, clinical, and translational science by providing a broad range of services and expertise to investigators interested in evaluating gene expression, chromosome structure, and nucleotide sequence. Our services are comprehensive, rapid, and user-friendly. Through the centralized management of all sequencing activities at MSK, the core empowers scientists with an array of technological options and the most efficient and cost-effective means of performing high-throughput genomics.",
      showDialog: false,
      enlargedImage: "",
    };
  },
  methods: {
    showDialogMethod: function(event) {
      const imageElement = event.target;
      const imageSrc = imageElement.getAttribute("src");
      const cleanedImageSrc = imageSrc.split("/").pop();
      this.enlargedImage = "http://localhost:8081/img/" + cleanedImageSrc;
      console.log(this.enlargedImage);
      this.showDialog = true;
    },
  },
};
</script>

<style></style>
