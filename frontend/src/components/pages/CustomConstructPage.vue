<template>
  <div id="feedback-page">
    <div>
      <!-- enctype="multipart/form-data" is necessart for file uploads https://www.digitalocean.com/community/tutorials/how-to-handle-file-uploads-in-vue-2 -->
      <form enctype="multipart/form-data" @submit.prevent="submitCustomConstruct">
        <md-card>
          <md-card-header>
            <div class="md-title">
              <div>Submit a Custom Construct</div>
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
                <span class="md-error" vif="!$v.form.body.forwardPrimer.required">Forward Primer is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'reversePrimer')">
                <label>Reverse Primer</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.reversePrimer"></md-input>
                <span class="md-error" vif="!$v.form.body.reversePrimer.required">Reverse Primer is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'kitName')">
                <label>Kit Name</label>
                <md-input type="text" id="pi" name="pi" v-model="form.body.kitName"></md-input>
                <span class="md-error" vif="!$v.form.body.kitName.required">Kit Name is required</span>
              </md-field>
              <md-field :class="getValidationClass('body', 'files')">
                <label>File Upload (Optional)</label>
                <md-file accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,image/*" @change="filesChange($event)" />
                <span class="md-error" vif="!$v.form.body.files.tooLarge">File too large, max 250 KB</span>
              </md-field>
              <!-- <div v-if="acceptableFiles"><strong>Uploaded files: </strong>{{ acceptedFiles }}</div> -->
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
        <md-snackbar v-html="message" :md-active.sync="showMessage"></md-snackbar>
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
          principalInvestigator: 'test',
          forwardPrimer: 'test',
          reversePrimer: 'test',
          kitName: 'test',
          protocolDetails: 'test',
          files: [],
        },
      },
      fileCount: '',
      formHasErrors: false,
      showMessage: false,
      message: '',
      // fileHasError: false,
      maxFileSize: 250000,
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
          files: {
            tooLarge(value) {
              if (!value) {
                return true;
              }
              let file = value;
              return file.size < this.maxFileSize;
            },
          },
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

    filesChange(event) {
      // handle file changes
      // console.log(Object.keys(event.target.files));
      // console.log(event.target.files[0]);
      let numberOfUploadedFiles = event.target.files.length;
      if (numberOfUploadedFiles === 1) {
        this.form.body.files = event.target.files[0];

        if (this.form.body.files.size >= this.maxFileSize) {
          this.showMessage = true;
          this.message = `File [${event.target.files[0].name}] exceeds max size of 250 KB`;
          this.form.body.files = [];
          // this.fileHasError = true;
        } else {
          this.showMessage = false;
          this.message = '';
          // this.fileHasError = false;
        }
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.formHasErrors = true;
          return;
        }
      }
    },
    submitCustomConstruct: function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        return;
      }
      if (!this.formHasErrors) {
        const formData = new FormData();
        // append the files to FormData
        // for (const i of Object.keys(this.form.files)) {
        // formData.append('files', this.form.files);

        for (const i of Object.keys(this.form.body.files)) {
          //   console.log(this.form.files[i]);
          formData.append('files', this.form.body.files[i]);
        }
        formData.append('name', this.form.contactInfo.name);
        formData.append('email', this.form.contactInfo.email);
        formData.append('principalInvestigator', this.form.body.principalInvestigator);
        formData.append('forwardPrimer', this.form.body.forwardPrimer);
        formData.append('reversePrimer', this.form.body.reversePrimer);
        formData.append('kitName', this.form.body.kitName);
        formData.append('protocolDetails', this.form.body.protocolDetails);

        // }
        app.axios
          .post(
            `${API_URL}/customConstruct`,
            // { formData, data: { ...this.form } },
            formData,
            {
              header: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
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
      this.files = [];
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
