<template>
  <div id="faq-page">
    <md-list>
      <md-list-item>
        <span>Prices below do not include:<br /><br />
          <ul>
            <li>Library or pool QC ($17.50/sample or pool)</li>
            <li>$40/sample or pool for pooling and data processing</li>
          </ul>
        </span>
      </md-list-item>
      <md-list-item md-expand>
        <md-icon>add</md-icon>
        <span class="md-list-item-text md-title">I need &le; 20M reads</span>
        <md-list slot="md-expand">
          <md-list-item class="md-inset">
            <md-table md-card>
              <md-table-row>
                <md-table-head></md-table-head>
                <md-table-head colspan="8">Block Price</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-head>Reads Block (M)</md-table-head>
                <md-table-head>SR50/75</md-table-head>
                <md-table-head>PE50/75</md-table-head>
                <md-table-head>SR100/150</md-table-head>
                <md-table-head>10X</md-table-head>
                <md-table-head>PE100</md-table-head>
                <md-table-head>PE150</md-table-head>
                <md-table-head>PE250</md-table-head>
                <md-table-head>PE300</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-cell>1</md-table-cell>
                <md-table-cell colspan="6">$300</md-table-cell>
                <md-table-cell>$360</md-table-cell>
                <md-table-cell>N/A</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>4</md-table-cell>
                <md-table-cell colspan="6">$470</md-table-cell>
                <md-table-cell colspan="2">N/A</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>20</md-table-cell>
                <md-table-cell>$1,160</md-table-cell>
                <md-table-cell colspan="3">$1,200</md-table-cell>
                <md-table-cell colspan="2">$2,450</md-table-cell>
                <md-table-cell colspan="2">$2,645</md-table-cell>
              </md-table-row>
            </md-table>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>add</md-icon>
        <span class="md-list-item-text md-title">I need &gt; 20M reads & my run type is PE100, PE150, or 10X Genomics </span>
        <md-list slot="md-expand">
        <md-list-item>
          <ul>
            <li>PE100 or PE150: $2.00/million reads</li>
            <li>10X (28/10/10/88): $1.20/million reads</li>
            <li>10X ATAC (50/8/16 or 50/24/48): $2.40/million reads</li>
          </ul>
        </md-list-item>
        <md-list-item style="font-style: italic;">10-20M reads/sample OR &gt;20M reads/pool minimum </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>add</md-icon>
        <span class="md-list-item-text md-title">I need &gt; 20M reads & my run type is custom, I need a custom primer, or I need a custom demux</span>
        <md-list slot="md-expand">
        <md-list-item>
          <md-table md-card>
            <md-table-row>
              <md-table-head></md-table-head>
              <md-table-head colspan="7">Block Price</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>Reads Block</md-table-head>
              <md-table-head>SR50</md-table-head>
              <md-table-head>SR100/PE50</md-table-head>
              <md-table-head>10X</md-table-head>
              <md-table-head>PE100</md-table-head>
              <md-table-head>PE150</md-table-head>
              <md-table-head>PE250</md-table-head>
              <md-table-head>PE300</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell>100M</md-table-cell>
              <md-table-cell colspan="3">$825</md-table-cell>
              <md-table-cell colspan="2">$1,350</md-table-cell>
              <md-table-cell colspan="2">$1,740</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>400M</md-table-cell>
              <md-table-cell colspan="3">$1,040</md-table-cell>
              <md-table-cell>$1,185</md-table-cell>
              <md-table-cell>$1,265</md-table-cell>
              <md-table-cell colspan="2">$3,000</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>800M</md-table-cell>
              <md-table-cell colspan="3">$2,325</md-table-cell>
              <md-table-cell>$2,926</md-table-cell>
              <md-table-cell>$3,579</md-table-cell>
              <md-table-cell>$5,500</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>1.2B</md-table-cell>
              <md-table-cell colspan="3">$1,915</md-table-cell>
              <md-table-cell>$2,340</md-table-cell>
              <md-table-cell>$2,450</md-table-cell>
              <md-table-cell colspan="2">N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>1.6B</md-table-cell>
              <md-table-cell colspan="3">$3,820</md-table-cell>
              <md-table-cell>$4,810</md-table-cell>
              <md-table-cell>$4,270</md-table-cell>
              <md-table-cell colspan="2">N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>3.8B</md-table-cell>
              <md-table-cell colspan="3">$7,261</md-table-cell>
              <md-table-cell>$8,974</md-table-cell>
              <md-table-cell>$9,561</md-table-cell>
              <md-table-cell colspan="2">N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>10B</md-table-cell>
              <md-table-cell colspan="3">$8,000</md-table-cell>
              <md-table-cell colspan="2">$10,000</md-table-cell>
              <md-table-cell colspan="2">N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>25B</md-table-cell>
              <md-table-cell colspan="5">$17,000</md-table-cell>
              <md-table-cell colspan="2">N/A</md-table-cell>
            </md-table-row>
          </md-table>
        </md-list-item>
        </md-list>
      </md-list-item>
      
      <md-list-item @click="submittingPricingInquiry = true">
        <span>What I need is not on this page and I have to submit a pricing inquiry</span>
        <md-dialog :md-active.sync="submittingPricingInquiry" :md-fullscreen="false" style="z-index: 200;">
          <contact-form v-bind:submittingPricingInquiry.sync="submittingPricingInquiry"></contact-form>
        </md-dialog>
      </md-list-item>
     
      <md-list-item>
        <span class="md-caption">
          Prices indicated on this webpage are an estimation and can be adjusted (higher or lower) at any point in time based on changes in sequencing reagent cost, labor cost, etc.
        </span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
// import { customBlockPrices } from './../../data.js';
import ContactForm from '../ContactForm.vue';

export default {
  components: { ContactForm },
  data: function() {
    return {
      // customBlockPrices: customBlockPrices,
      submittingPricingInquiry: false,
    };
  },
};
</script>

<style scoped>
/* table, */
th,
td {
  border: 1px solid var(--md-theme-default-divider-on-background, rgba(0, 0, 0, 0.12));
  text-align: center;
}
</style>
