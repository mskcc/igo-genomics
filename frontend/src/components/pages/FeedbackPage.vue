<template>
  <div>
    <div v-if="!valid">
      Sorry, that's not a valid application!
    </div>

    <div v-else>
      <form class="md-layout">
        <md-card class="md-layout-item">
          <md-card-header>
            <div class="md-title">What is your opinion of {{ application }}?</div>
          </md-card-header>
          <md-card-content>
            <div>
              <table>
                <tr>
                  <td><span class="material-icons">sentiment_very_dissatisfied</span></td>
                  <td><span class="material-icons">sentiment_dissatisfied</span></td>
                  <td><span class="material-icons">sentiment_satisfied</span></td>
                  <td><span class="material-icons">sentiment_satisfied_alt</span></td>
                  <td><span class="material-icons">sentiment_very_satisfied</span></td>
                </tr>
                <tr>
                  <td>Very dissatisfied</td>
                  <td>Dissatisfied</td>
                  <td>Neutral</td>
                  <td>Satisfied</td>
                  <td>Very satisfied</td>
                </tr>
              </table>
            </div>
            <br />
            <md-divider></md-divider>
            <br />
            <div>
              Please select your feedback category below
              <div>
                <!-- <md-chip class="md-accent" md-clickable v-for="(category, index) in feedbackCategory" :key="index">{{ category }}</md-chip> -->
                <md-radio v-model="form.feedbackCategory" value="suggestion">Suggestion</md-radio>
                <md-radio v-model="form.feedbackCategory" value="something not right">Some is not quite right</md-radio>
                <md-radio v-model="form.feedbackCategory" value="compliment">Compliment</md-radio>
              </div>
            </div>
            <br />
            <md-divider></md-divider>
            <br />
            <div>
              <div>Is there anything else you'd like to share about our product and customer experience?</div>
              <md-field>
                <label>Textarea</label>
                <md-textarea v-model="form.textarea"></md-textarea>
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
export default {
  name: 'FeedbackPage',
  props: ['application'],
  data: function() {
    return {
      validApplications: ['sample-qc', 'sample-submission', 'request-tracker', 'data-delivery'],
      //   feedbackCategory: ['suggestion', 'something not right', 'compliment'],

      form: {
        feedbackCategory: '',
        textArea: '',
      },
    };
  },
  computed: {
    valid: function() {
      return this.validApplications.includes(this.application);
    },
  },
};
</script>

<style></style>
