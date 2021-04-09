<template>
  <div>
    <md-dialog-content>
      <!-- <md-dialog-title> Pricing Inquiries</md-dialog-title> -->

      <form id="pricing-inquiry" @submit.prevent="submitInqquiry">
        <div>
          <div>
            <md-field>
              <label>To:</label>
              <md-input v-model="contactEmail" readonly></md-input>
            </md-field>
          </div>
          <div>
            <md-field>
              <label for="runLength">Run length (ex PE100, PE150)</label>
              <md-input type="text" id="runLength" name="runLength" v-model="form.runLength" :disabled="sending" />
            </md-field>
          </div>

          <div>
            <md-field>
              <label for="totalReads">Total reads needed in project (M)</label>
              <md-input type="text" id="totalReads" name="totalReads" v-model="form.totalReads" :disabled="sending" />
            </md-field>
          </div>

          <div>
            <md-field>
              <label>Describe your project</label>
              <md-textarea v-model="form.projectDescription"></md-textarea>
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
export default {
  name: 'ContactForm',
  data: function() {
    return {
      form: {
        runLength: '',
        totalReads: '',
        projectDescription: '',
      },
      contactEmail: 'genomics@mskcc.org',
    };
  },
  methods: {
    submitInquiry: function() {
      console.log(this.form);
    },
    cancelForm: function() {
      this.$emit('update:submittingPricingInquiry', false);
    },
  },
};
</script>

<style></style>
