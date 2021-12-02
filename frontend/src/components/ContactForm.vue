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
            <md-field :class="getValidationClass('contactInfo', 'name')">
              <label>Full Name</label>
              <md-input type="text" id="name" name="name" v-model="form.contactInfo.name"></md-input>
              <span class="md-error" v-if="!$v.form.contactInfo.name.required">Name is required</span>
            </md-field>
          </div>
          <div>
            <md-field :class="getValidationClass('contactInfo', 'email')">
              <label>Contact Email</label>
              <md-input type="text" id="email" name="email" v-model="form.contactInfo.email"></md-input>
              <span class="md-error" v-if="!$v.form.contactInfo.email.email">Invalid email</span>
              <span class="md-error" v-else-if="!$v.form.contactInfo.email.required">Email is required</span>
            </md-field>
          </div>

          <div>
            <md-field :class="getValidationClass('body', 'runLength')">
              <label for="runLength">Run length (ex PE100, PE150)</label>
              <md-input type="text" id="runLength" name="runLength" v-model="form.body.runLength" />
              <span class="md-error" v-if="!$v.form.body.runLength.required">Run length is required</span>
            </md-field>
          </div>

          <div>
            <md-field :class="getValidationClass('body', 'totalReads')">
              <label for="totalReads">Total reads needed in project (M)</label>
              <md-input type="text" id="totalReads" name="totalReads" v-model="form.body.totalReads" />
              <span class="md-error" v-if="!$v.form.body.totalReads.required">Total reads are required</span>
            </md-field>
          </div>

          <div>
            <md-field :class="getValidationClass('body', 'projectDescription')">
              <label>Describe your project</label>
              <md-textarea v-model="form.body.projectDescription"></md-textarea>
              <span class="md-error" v-if="!$v.form.body.projectDescription.required">A project description is required</span>
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
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactForm',
  data: function() {
    return {
      formHasErrors: false,
      form: {
        contactInfo: {
          name: '',
          email: '',
        },
        body: {
          runLength: '',
          totalReads: '',
          projectDescription: '',
        },
      },
      contactEmail: 'genomics@mskcc.org',
    };
  },
  validations() {
    return {
      form: {
        contactInfo: {
          name: { required },
          email: { required, email },
        },
        body: {
          runLength: { required },
          totalReads: { required },
          projectDescription: { required },
        },
      },
    };
  },
  methods: {
    getValidationClass(category, fieldName) {
      const field = this.$v.form[category][fieldName];

      if (field) {
        return {
          'md-invalid': field.$anyError,
        };
      }
    },
    submitInquiry: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        return;
      }

      if (!this.formHasErrors) {
        app.axios
          .post(`${API_URL}/inquiry`, {
            data: { ...this.form },
          })
          .then((response) => {
            this.$swal({ title: 'Thank you', text: response.data.message, icon: 'success' }).then((result) => {
              if (result.isConfirmed) {
                this.$emit('update:submittingPricingInquiry', false);
              }
            });
          })
          .catch((error) => this.$swal({ title: 'Unable to submit', text: error.response.data.message, icon: 'error' }));
      }
    },
    cancelForm: function() {
      this.$emit('update:submittingPricingInquiry', false);
    },
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    },
  },
};
</script>

<style></style>
