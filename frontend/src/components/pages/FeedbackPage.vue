<template>
  <div id="feedback-page">
    <div v-if="!valid">
      Sorry, that's not a valid application!
    </div>

    <div v-else>
      <form @submit.prevent="submit">
        <md-card>
          <md-card-header>
            <div class="md-title">What is your opinion of {{ application }}?</div>
          </md-card-header>
          <br />
          <md-card-content>
            <div class="opinion-div">
              <div class="opinion">
                <i class="far fa-tired fa-3x"></i>
                <span>Very dissatisfied</span>
                <md-radio v-model="form.opinionRating" value="0"></md-radio>
              </div>
              <div class="opinion">
                <i class="far fa-frown fa-3x"></i>
                <span>Dissatisfied</span>
                <md-radio v-model="form.opinionRating" value="1"></md-radio>
              </div>
              <div class="opinion">
                <i class="far fa-meh fa-3x"></i>
                <span>Neutral</span>
                <md-radio v-model="form.opinionRating" value="2"></md-radio>
              </div>
              <div class="opinion">
                <i class="far fa-smile fa-3x"></i>
                <span>Satisfied</span>
                <md-radio v-model="form.opinionRating" value="3"></md-radio>
              </div>
              <div class="opinion">
                <i class="far fa-laugh-beam fa-3x"></i>
                <span>Very satisfied</span>
                <md-radio v-model="form.opinionRating" value="4"></md-radio>
              </div>
            </div>

            <br />
            <md-divider></md-divider>
            <br />
            <div>
              <div>Please select your feedback category below</div>
              <div>
                <md-radio v-model="form.feedbackCategory" value="suggestion">Suggestion</md-radio>
                <md-radio v-model="form.feedbackCategory" value="something not right">Something is not quite right</md-radio>
                <md-radio v-model="form.feedbackCategory" value="compliment">Compliment</md-radio>
              </div>
            </div>
            <br />
            <md-divider></md-divider>
            <br />
            <div>
              <div>Is there anything else you'd like to share about our product and customer experience?</div>
              <br />
              <md-field>
                <label>Description</label>
                <md-textarea v-model="form.description"></md-textarea>
              </md-field>
            </div>
          </md-card-content>
          <md-card-actions>
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

export default {
  name: 'FeedbackPage',
  props: ['application'],
  data: function() {
    return {
      validApplications: ['sample-qc', 'sample-submission', 'request-tracker', 'data-delivery'],
      form: {
        opinionRating: '',
        feedbackCategory: '',
        description: '',
      },
    };
  },
  computed: {
    valid: function() {
      return this.validApplications.includes(this.application);
    },
  },
  methods: {
    submit: function() {
      app.axios
        .post(`${API_URL}/submitFeedback`, {
          data: {
            ...this.form,
          },
        })
        .then((response) => {
          this.$swal({ title: 'Thank you', text: response.data.message, icon: 'success' });
          this.reset();
        })
        .catch((error) => this.$swal({ title: 'Unable to submit', text: error.response.data.message, icon: 'error' }));
    },
    reset() {
      this.form.opinionRating = '';
      this.form.feedbackCategory = '';
      this.form.description = '';
    },
  },
};
</script>

<style></style>
