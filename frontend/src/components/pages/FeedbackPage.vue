<template>
  <div id="feedback-page">
    <div v-if="!valid">
      Sorry, that's not a valid application!
    </div>

    <div v-else>
      <form @submit.prevent="submitFeedback">
        <md-card>
          <md-card-header>
            <div class="md-title">Tell us about your experience with {{ validApplications[application] }}*</div>
          </md-card-header>
          <br />
          <md-card-content>
            <div>
              <div class="opinion-div">
                <div class="opinion">
                  <i class="far fa-tired fa-3x" style="color: salmon;"></i>
                  <span>Very dissatisfied</span>
                  <md-radio v-model="form.opinionRating" value="1"></md-radio>
                </div>
                <div class="opinion">
                  <i class="far fa-frown fa-3x" style="color: #f29934;"></i>
                  <span>Dissatisfied</span>
                  <md-radio v-model="form.opinionRating" value="2"></md-radio>
                </div>
                <div class="opinion">
                  <i class="far fa-meh fa-3x" style="color: #ffc20e;"></i>
                  <span>Neutral</span>
                  <md-radio v-model="form.opinionRating" value="3"></md-radio>
                </div>
                <div class="opinion">
                  <i class="far fa-smile fa-3x" style="color: #a6ce39;"></i>
                  <span>Satisfied</span>
                  <md-radio v-model="form.opinionRating" value="4"></md-radio>
                </div>
                <div class="opinion">
                  <i class="far fa-laugh-beam fa-3x" style="color: #4c8b2b;"></i>
                  <span>Very satisfied</span>
                  <md-radio v-model="form.opinionRating" value="5"></md-radio>
                </div>
              </div>
              <span>
                <span class="error" v-if="formHasErrors">This field is required</span>
              </span>
            </div>

            <br />
            <md-divider></md-divider>
            <br />
            <div>
              <div>Please select your feedback category below (optional)</div>
              <md-radio v-model="form.feedbackCategory" value="suggestion">Suggestion</md-radio>
              <md-radio v-model="form.feedbackCategory" value="something not right">Something is not quite right</md-radio>
              <md-radio v-model="form.feedbackCategory" value="compliment">Compliment</md-radio>
            </div>
            <br />
            <md-divider></md-divider>
            <br />
            <div>
              <md-field>
                <label>Is there anything else you'd like to share about our product and customer experience?</label>
                <md-textarea v-model="form.description"></md-textarea>
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
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'FeedbackPage',
  props: ['application'],
  data: function() {
    return {
      validApplications: {
        'sample-qc': 'Sample QC',
        'sample-submission': 'Sample Submission',
        'request-tracker': 'Request Tracker',
        'data-delivery': 'Data Delivery',
      },
      form: {
        opinionRating: '',
        feedbackCategory: '',
        description: '',
      },
      formHasErrors: false,
    };
  },
  validations() {
    return {
      form: {
        opinionRating: { required },
      },
    };
  },
  computed: {
    valid: function() {
      return this.application in this.validApplications;
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

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
          .post(`${API_URL}/submitFeedback`, {
            data: { application: this.application, ...this.form },
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
