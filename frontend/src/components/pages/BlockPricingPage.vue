<template>
  <div id="faq-page">
    <md-list>
      <md-list-item>
        <span>Prices below do not include:<br /><br />
          <ul>
            <li>Library or pool QC ($17.50/sample or pool)</li>
            <li>Pooling ($10/sample)</li>
            <li>Data Handling ($30/sample)</li>
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
                <md-table-head colspan="7">Block Price</md-table-head>
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
              </md-table-row>
              <md-table-row>
                <md-table-cell>1</md-table-cell>
                <md-table-cell colspan="6">$421</md-table-cell>
                <md-table-cell>$463</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>4</md-table-cell>
                <md-table-cell colspan="6">$576</md-table-cell>
                <md-table-cell>N/A</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>20</md-table-cell>
                <md-table-cell>$969</md-table-cell>
                <md-table-cell colspan="3">$1063</md-table-cell>
                <md-table-cell colspan="2">$1207</md-table-cell>
                <md-table-cell>$1712</md-table-cell>
              </md-table-row>
            </md-table>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>add</md-icon>
        <span class="md-list-item-text md-title">I need &gt; 20M reads & my run type is PE100, PE150, or 28/10/10/88 (10X Genomics) </span>
        <md-list slot="md-expand">
        <md-list-item>
          <ul>
            <li>PE100: $2.30/million read</li>
            <li>PE150: $2.50/million read</li>
            <li>10X (28/10/10/88): $2.70/million read</li>
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
              <md-table-head colspan="6">Block Price</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>Reads Block (M)</md-table-head>
              <md-table-head>SR50</md-table-head>
              <md-table-head>SR100/PE50</md-table-head>
              <md-table-head>10X</md-table-head>
              <md-table-head>PE100</md-table-head>
              <md-table-head>PE150</md-table-head>
              <md-table-head>PE250</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell>100</md-table-cell>
              <md-table-cell colspan="3">$1209</md-table-cell>
              <md-table-cell colspan="2">$1896</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>400</md-table-cell>
              <md-table-cell colspan="3">$1533</md-table-cell>
              <md-table-cell>$2808</md-table-cell>
              <md-table-cell>$3695</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>800</md-table-cell>
              <md-table-cell colspan="3">$2289</md-table-cell>
              <md-table-cell>$2837</md-table-cell>
              <md-table-cell>$3081</md-table-cell>
              <md-table-cell>$4256</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>1800</md-table-cell>
              <md-table-cell colspan="3">$4060</md-table-cell>
              <md-table-cell>$4899</md-table-cell>
              <md-table-cell>$5291</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>3600</md-table-cell>
              <md-table-cell colspan="3">$7261</md-table-cell>
              <md-table-cell>$8974</md-table-cell>
              <md-table-cell>$9561</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>11000</md-table-cell>
              <md-table-cell colspan="4">$13779</md-table-cell>
              <md-table-cell>$15222</md-table-cell>
              <md-table-cell>N/A</md-table-cell>
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
