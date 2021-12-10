<template>
  <div id="feedback-page">
    <div>
      <form @submit.prevent="submitFeedback">
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

              <md-field :class="getValidationClass('contactInfo', 'name')">
                <label>Principal Investigator</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.principalInvestigator"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">PI is required</span>
              </md-field>
              <md-field :class="getValidationClass('contactInfo', 'email')">
                <label>Forward primer</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.forwardPrimer"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">PI is required</span>
              </md-field>
              <md-field :class="getValidationClass('contactInfo', 'email')">
                <label>Reverse primer</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.reversePrimer"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">PI is required</span>
              </md-field>
              <md-field :class="getValidationClass('contactInfo', 'email')">
                <label>Kit name</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.kitName"></md-input>
                <span class="md-error" vif="!$v.form.body.principalInvestigator.required">PI is required</span>
              </md-field>
              <md-field>
                <label>File upload</label>
                <md-file v-model="form.file" multiple accept="image/*" />
              </md-field>
              <br />
              <md-field>
                <label>Protocol details</label>
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
          name: '',
          email: '',
        },
        body: {
          principalInvestigator: '',
          forwardPrimer: '',
          reversePrimer: '',
          kitName: '',
          protocolDetails: '',
        },
        file: '',
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
          // runLength: { required },
          // totalReads: { required },
          // projectDescription: { required },
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
    submitFeedback: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        return;
      }
      if (!this.formHasErrors) {
        app.axios
          .post(`${API_URL}/feedback/feedback`, {
            data: { application: this.applicationClone, ...this.form },
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
      this.form.opinionRating = '';
      this.form.feedbackCategory = '';
      this.form.description = '';
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
