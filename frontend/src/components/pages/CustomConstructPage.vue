<template>
  <div id="feedback-page">
    <div>
      <form @submit.prevent="submitCustomConstruct">
        <md-card>
          <md-card-header>
            <div class="md-title">
              <div>Submit a custom construct</div>
            </div>
          </md-card-header>
          <br />
          <md-card-content>
            <div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('contactInfo', 'name')">
                    <label>Full Name</label>
                    <md-input type="text" id="name" name="name" v-model="form.contactInfo.name"></md-input>
                    <span class="md-error" v-if="!$v.form.contactInfo.name.required">Name is required</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('contactInfo', 'email')">
                    <label>Contact Email</label>
                    <md-input type="text" id="email" name="email" v-model="form.contactInfo.email"></md-input>
                    <span class="md-error" v-if="!$v.form.contactInfo.email.email">Invalid email</span>
                    <span class="md-error" v-else-if="!$v.form.contactInfo.email.required">Email is required</span>
                  </md-field>
                </div>
              </div>

              <md-field :class="getValidationClass('body', 'principalInvestigator')">
                <label>Principal Investigator</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.principalInvestigator"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">PI is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'forwardPrimer')">
                <label>Forward Primer</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.forwardPrimer"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">Forward Primer is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'reversePrimer')">
                <label>Reverse Primer</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.reversePrimer"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">Reverse Primer is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'kitName')">
                <label>Kit Name</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.kitName"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">Kit Name is required</span>
              </md-field>
              <md-field>
                <label>File Upload</label>
                <md-file v-model="form.files" multiple accept="image/*" />
              </md-field>
              <br />
              <md-field>
                <label>Protocol Details</label>
                <md-textarea v-model="form.protocolDetails"></md-textarea>
              </md-field>
            </div>
          </md-card-content>

          <md-card-actions>
            <span class="error" v-if="formHasErrors">Please correct the above errors</span>

            <md-button type="submit" class="md-primary">Submit</md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'FeedbackPage',
  data: function() {
    return {
      form: {
        contactInfo: {
          name: 'anna',
          email: 'patrunoa@mskcc.org',
        },
        body: {
          principalInvestigator: 'principalInvestigator-test',
          forwardPrimer: 'forwardPrimer-test',
          reversePrimer: 'reversePrimer-test',
          kitName: 'kitName-test',
          protocolDetails: 'protocolDetails-test',
        },
        files: [],
      },
      formHasErrors: false,
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
          principalInvestigator: { required },
          forwardPrimer: { required },
          reversePrimer: { required },
          kitName: { required },
          protocolDetails: { required },
        },
      },
    };
  },
  computed: {},
  methods: {
    getValidationClass(category, fieldName) {
      const field = this.$v.form[category][fieldName];

      if (field) {
        return {
          'md-invalid': field.$anyError,
        };
      }
    },
    submitCustomConstruct: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        return;
      }
      if (!this.formHasErrors) {
        app.axios
          .post(`${API_URL}/customConstruct`, {
            data: { ...this.form },
          })
          .then((response) => {
            this.$swal({ title: 'Thank you', text: response.data.message, icon: 'success' });
            this.reset();
          })
          .catch((error) => this.$swal({ title: 'Unable to submit', text: error.response.data.message, icon: 'error' }));
      }
    },
    reset() {
      this.$v.$reset();
      this.form.contactInfo.name = '';
      this.form.contactInfo.email = '';
      this.form.body.principalInvestigator = '';
      this.form.body.forwardPrimer = '';
      this.form.body.reversePrimer = '';
      this.form.body.kitName = '';
      this.form.body.protocolDetails = '';
      this.form.files = [];
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
