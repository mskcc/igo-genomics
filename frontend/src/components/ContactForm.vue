<template>
  <div id="contact-form">
    <md-dialog-content>
      <!-- <md-dialog-title> Pricing Inquiries</md-dialog-title> -->

      <form id="pricing-inquiry" @submit.prevent="submitInquiry">
        <div>
          <div>
            <md-field>
              <label>To:</label>
              <md-input v-model="contactEmail" readonly></md-input>
            </md-field>
          </div>
          <div>
            <md-field>
              <label>Full Name</label>
              <md-input type="text" id="runLength" name="runLength" v-model="form.contactInfo.name"></md-input>
            </md-field>
          </div>
          <div>
            <md-field>
              <label>Email</label>
              <md-input type="text" id="runLength" name="runLength" v-model="form.contactInfo.email"></md-input>
            </md-field>
          </div>

          <div>
            <md-field>
              <label for="runLength">Run length (ex PE100, PE150)</label>
              <md-input type="text" id="runLength" name="runLength" v-model="form.body.runLength" :disabled="sending" />
            </md-field>
          </div>

          <div>
            <md-field>
              <label for="totalReads">Total reads needed in project (M)</label>
              <md-input type="text" id="totalReads" name="totalReads" v-model="form.body.totalReads" :disabled="sending" />
            </md-field>
          </div>

          <div>
            <md-field>
              <label>Describe your project</label>
              <md-textarea v-model="form.body.projectDescription"></md-textarea>
            </md-field>
          </div>
        </div>

        <md-dialog-actions>
          <md-button class="md-primary" @click="cancelForm">Close</md-button>
          <md-button type="submit" class="md-primary">Submit</md-button>
        </md-dialog-actions>
      </form>
    </md-dialog-content>
  </div>
</template>

<script>
import * as app from './../app.js';
import { API_URL } from './../config.js';

export default {
  name: 'ContactForm',
  data: function() {
    return {
      form: {
        contactInfo: {
          name: 'Anna Patruno',
          email: 'apatruno618@gmail.com',
        },
        body: {
          runLength: 'PE50',
          totalReads: '100',
          projectDescription: 'I have a pricing question',
        },
      },
      contactEmail: 'genomics@mskcc.org',
    };
  },
  methods: {
    submitInquiry: function() {
      console.log(this.form);
      app.axios
        .post(`${API_URL}/submitInquiry`, {
          data: { ...this.form },
        })
        .then((response) => {
          console.log(response);
        });
    },
    cancelForm: function() {
      this.$emit('update:submittingPricingInquiry', false);
    },
  },
};
</script>

<style></style>
