<template>
  <div id="reservation-page">
    <div class="md-display-1">Schedule an appointment</div>
    <div class="announcement-bubble">
      <span class="material-icons"> warning </span>
      <span class="announcement-content">
        <strong>We require at least 48 hours notice for sample drop-off and at least 2 hours notice for cancellation.</strong> If you have
        an emergency, please contact genomics@mskcc.org as soon as possible.
      </span>
    </div>
    <div class="md-layout">
      <form class="md-layout-item" @submit.prevent="book()">
        <md-card>
          <md-card-content>
            <md-field>
              <label>Request Type</label>
              <md-select v-model="requestType" name="requestType" id="requestType" :disabled="daySelected">
                <md-option value="10xGenomics">10X Genomics scRNASeq</md-option>
                <md-option value="atacSeq">ATAC Seq (Thursdays only)</md-option>
                <md-option value="missionBio" disabled>MissionBio</md-option>
              </md-select>
            </md-field>
          </md-card-content>
          <div v-show="requestType">
            <span v-html="message"> </span>
          </div>
          <span v-show="daySelected">
            <span v-show="timesAvailable">
              <md-card-content>
                <vue-timepicker
                  format="hh A"
                  v-model="form.time"
                  :hour-range="hourRange"
                  hide-disabled-items
                  @change="changeHandler"
                  placeholder="Dropoff Time"
                  close-on-complete
                  ref="timePicker"
                >
                  <template v-slot:icon>
                    <i class="far fa-clock"></i>
                  </template>
                </vue-timepicker>
                <div v-show="invalidTimeSelected">Invalid time slot, please correct</div>
                <span v-show="timeSelected">
                  <md-field>
                    <label>Selected date</label>
                    <md-input v-model="dateSelected.id" readonly>{{ dateSelected.id }}</md-input>
                  </md-field>

                  <md-field :class="getValidationClass('name')">
                    <label>Full Name</label>
                    <md-input v-model="form.name" />
                    <span class="md-error" v-if="!$v.form.name.required">Name is required</span>
                  </md-field>
                  <md-field :class="getValidationClass('email')">
                    <label>Email</label>
                    <md-input v-model="form.email" />
                    <span class="md-error" v-if="!$v.form.email.required">Email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Please enter a valid email</span>
                  </md-field>
                  <md-field :class="getValidationClass('sampleNumber')">
                    <label>Estimated Number of Samples</label>
                    <md-input v-model="form.sampleNumber" />
                    <span class="md-error" v-if="!$v.form.sampleNumber.required">Number of samples is required</span>
                    <span class="md-error" v-else-if="!$v.form.sampleNumber.numeric">Please enter a number</span>
                    <!-- <span class="md-error" v-else-if="!$v.form.sampleNumber.maxValue">We cannot accept more than 25 samples/day</span> -->
                  </md-field>

                  <!-- <md-field :class="getValidationClass('chemistry')">
                    <label>Chemistry</label>
                    <md-select v-model="form.chemistry">
                      <md-option value="10x 5’ RNA seq'">10x 5’ RNA seq</md-option>
                      <md-option value="10x 3’ RNA seq'">10x 3’ RNA seq</md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.form.chemistry.required">Chemistry is required</span>
                  </md-field> -->
                  <span v-if="requestType === '10xGenomics'">
                    <md-field :class="getValidationClass('chemistry')">
                      <label>Chemistry</label>
                      <md-select v-model="form.chemistry">
                        <md-option value="10x 5’ RNA seq'">10x 5’ RNA seq</md-option>
                        <md-option value="10x 3’ RNA seq'">10x 3’ RNA seq</md-option>
                      </md-select>
                      <span class="md-error" v-if="!$v.form.chemistry.required">Chemistry is required</span>
                    </md-field>
                  </span>
                </span>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-primary" @click="reset">Clear</md-button>
                <span v-show="timeSelected">
                  <md-button type="submit" class="md-primary">Submit</md-button>
                </span>
              </md-card-actions>
            </span>
          </span>
        </md-card>
      </form>
      <div class="md-layout-item" v-if="requestType">
        <vc-date-picker
          :attributes="attrs"
          :disabled-dates="disabledDates"
          :min-date="new Date().setDate(new Date().getDate() + 2)"
          :max-date="getMaxDate()"
          :value="dateSelected"
          @dayclick="(event) => dayClick(event)"
        />

        <div v-if="requestType">
          <existing-reservations></existing-reservations>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import { required, email, numeric, requiredIf } from 'vuelidate/lib/validators';
// import { HotTable } from '@handsontable/vue';
import ExistingReservations from '../ExistingReservations.vue';

export default {
  name: 'ReservationPage',
  components: { VueTimepicker, ExistingReservations },
  data: function() {
    return {
      message: 'Please select a day.',
      daySelected: false,
      timeSelected: false,
      invalidTimeSelected: false,
      timesAvailable: false,
      requestType: '',
      form: {
        name: '',
        email: '',
        sampleNumber: '',
        chemistry: '',
        time: { A: '', hh: '', h: '', militaryTime: '', weekday: '' },
      },
      hourRange: [],
      formHasErrors: false,
      // for vc-date-picker
      dateSelected: new Date(),
      disabledDates: [
        new Date('1/1/2021'),
        new Date('1/18/2021'),
        new Date('5/31/2021'),
        new Date('7/5/2021'),
        new Date('7/20/2021'),
        new Date('9/6/2021'),
        new Date('11/25/2021'),
        new Date('12/24/2021'),
        { weekdays: [1, 7] },
      ],
      attrs: [
        {
          highlight: {
            fillMode: 'solid',
          },
        },
      ],
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        sampleNumber: {
          required,
          numeric,
          // maxValue: maxValue(function() {
          //   if (this.requestType === 'atacSeq') {
          //     return 25;
          //   }
          // }),
          // between: between(1, 25),
        },
        chemistry: {
          required: requiredIf(function() {
            return this.requestType === '10xGenomics';
          }),
        },
      },
    };
  },
  watch: {
    //   for global errors
    // "$v.$invalid": function() {
    //   this.formHasErrors = this.$v.$invalid;
    // },

    dateSelected: function() {
      // console.log(this.form.time);
      if (this.requestType === 'atacSeq' && this.form.time.weekday !== '6') {
        this.message = 'At this time ATAC Seq reservations can only be made on Thursdays';
        this.timesAvailable = false;
      } else {
        this.message =
          'If your desired time slot is not available please complete <a href="https://docs.google.com/forms/d/e/1FAIpQLSffons9-vDVlxCU6zVlZnh7wC9rlyNnJaGoB1a8ZwhuSa9SNA/viewform">this waitlist form</a>';
      }
    },
    requestType: function() {
      this.$store.commit('setRequestType', this.requestType);
      this.$store.dispatch('setExistingReservations');
    },
  },

  methods: {
    reset() {
      this.requestType = '';
      this.daySelected = false;
      this.timeSelected = false;
      this.form.name = '';
      this.form.email = '';
      this.form.sampleNumber = '';
      this.form.chemistry = '';
      this.form.time.A = '';
      this.form.time.hh = '';
      this.form.time.h = '';
      this.form.time.militaryTime = '';

      // time: { A: null, hh: null, h: null, militaryTime: null },
    },
    dayClick(date) {
      // console.log(date);
      // user clicked on a valid day
      if (date.isDisabled === false) {
        // console.log(date.isDisabled);
        if (!this.requestType) {
          this.message = 'Please select a Request Type';
        }
        if (this.requestType) {
          this.form.time.weekday = date.weekday;
          this.daySelected = true;
          this.dateSelected = date;
          app.axios
            .get(`${API_URL}/availableSlots/${this.requestType}/${this.dateSelected.weekday}/${this.dateSelected.id}`)
            .then((response) => {
              if (response.status === 204 && this.requestType === 'atacSeq') {
                this.timesAvailable = false;
                this.message = 'At this time ATAC Seq reservations can only be made on Thursdays';
              } else if (response.status === 204 && this.requestType === '10xGenomics') {
                this.timesAvailable = false;
                this.message =
                  'There are no available times for this day. You can join the waitlist <a href="https://docs.google.com/forms/d/e/1FAIpQLSffons9-vDVlxCU6zVlZnh7wC9rlyNnJaGoB1a8ZwhuSa9SNA/viewform">here</a>. If you are looking to cancel an existing appointment, please refer to your confirmation email.';
              } else {
                this.timesAvailable = true;
                this.hourRange = response.data.hourRange;
              }
            });
        }
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    book() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        return;
      }
      if (!this.formHasErrors) {
        app.axios
          .post(`${API_URL}/bookTime`, {
            data: {
              ...this.form,
              date: this.dateSelected.id,
              requestType: this.requestType,
              notificationDate: this.dateSelected.ariaLabel,
            },
          })
          .then((response) => {
            this.$swal({ title: 'Booked', text: response.data.message, animation: false, icon: 'success' });
            // this.daySelected = false;
            this.reset();
          })
          .catch((error) => this.$swal({ title: 'Unable to book', text: error.response.data.message, animation: false, icon: 'error' }));
      }
    },
    changeHandler(eventData) {
      // eventData -> {data: {HH:..., mm:...}, displayTime: 'HH:mm'}
      if (eventData.data.A && eventData.data.HH) {
        // check if the time selected is valid
        if (this.$refs.timePicker.hasInvalidInput) {
          this.invalidTimeSelected = true;
          this.timeSelected = false;
        } else {
          this.invalidTimeSelected = false;
          this.timeSelected = true;
        }

        // const input = document.getElementsByClassName('vue__time-picker time-picker')[0].querySelector('input');
        // this.invalidTimeSelected = input.classList.contains('invalid');
        // console.log(input);
        // this.validTimeSelected = true;

        this.form.time.militaryTime = parseInt(eventData.data.HH);
        this.form.time.h = eventData.data.h;
      } else {
        this.timeSelected = false;
      }
    },
    getMaxDate() {
      var today = new Date();
      var newdate = new Date();
      return newdate.setDate(today.getDate() + 90);
    },
  },
  // mounted: function() {
  //   let todaysDate = new Date().toLocaleString().split(',')[0];
  //   console.log(todaysDate);
  //   this.disabledDates.push(new Date());
  // },
};
</script>

<style src="../../../node_modules/handsontable/dist/handsontable.full.css"></style>
