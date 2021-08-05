<template>
  <div>
    <md-button class="md-primary" @click="submittingPricingInquiry = true">Submit a pricing inquiry</md-button>
    <div>
      <md-dialog :md-active.sync="submittingPricingInquiry" :md-fullscreen="false" style="z-index: 200;">
        <contact-form v-bind:submittingPricingInquiry.sync="submittingPricingInquiry"></contact-form>
      </md-dialog>
    </div>
    <md-list>
      <md-list-item md-expand class="md-inset">
        <md-icon>add</md-icon>
        <span class="md-list-item-text">I need LESS than 10 million reads</span>

        <md-list slot="md-expand">
          <md-list-item>
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
                <md-table-cell colspan="6">$396</md-table-cell>
                <md-table-cell>$462</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>4</md-table-cell>
                <md-table-cell colspan="6">$496</md-table-cell>
                <md-table-cell>N/A</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>20</md-table-cell>
                <md-table-cell>$1001</md-table-cell>
                <md-table-cell colspan="3">$953</md-table-cell>
                <md-table-cell colspan="2">$1241</md-table-cell>
                <md-table-cell>$1575</md-table-cell>
              </md-table-row>
            </md-table>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand class="md-inset">
        <md-icon>add</md-icon>
        <span class="md-list-item-text">I need MORE than 10 million reads</span>

        <md-list slot="md-expand">
          <md-list-item>
            PE100: $2.3/million read
          </md-list-item>
          <md-list-item>
            PE150: $2.5/million read
          </md-list-item>
          <md-list-item>
            10X (28/10/10/88): $2.7/million read
          </md-list-item>
          <md-list-item> Custom Run Type:</md-list-item><br />
          <md-list-item>
            <md-table md-card>
              <md-table-row>
                <md-table-head></md-table-head>
                <md-table-head colspan="3">Block Price</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-head>Reads Block (M)</md-table-head>
                <md-table-head>100 Cycles</md-table-head>
                <md-table-head>200 Cycles</md-table-head>
                <md-table-head>300 Cycles</md-table-head>
              </md-table-row>
              <md-table-row v-for="(row, index) in customBlockPrices" :key="index">
                <md-table-cell>{{ row.readsBlock }}</md-table-cell>
                <md-table-cell>{{ row['100Cycles'] }}</md-table-cell>
                <md-table-cell>${{ row['200Cycles'] }}</md-table-cell>
                <md-table-cell>${{ row['300Cycles'] }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { customBlockPrices } from './../../data.js';
import ContactForm from '../ContactForm.vue';

export default {
  components: { ContactForm },
  data: function() {
    return {
      customBlockPrices: customBlockPrices,
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
