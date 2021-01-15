<template>
  <div>
    <div class="md-display-1">Schedule 10x appointment</div>
    <!-- <vc-date-picker v-model="date" :rows="1" :disabled-dates="{ weekdays: [1, 7] }"  /> -->
    <!-- <vc-calendar></vc-calendar> -->

    <div class="md-layout">
      <div class="md-layout-item">
        <vc-date-picker
          :attributes="attrs"
          :disabled-dates="disabledDates"
          :min-date="new Date()"
          :max-date="getMaxDate()"
          :value="dateSelected"
          @dayclick="(event) => dayClick(event)"
        />
      </div>
      <form style="width: 600px" @submit.prevent="book()">
        <md-card class="md-layout-item">
          <md-card-header v-show="!daySelected">
            <div class="md-title">Please select a day</div>
          </md-card-header>
          <span v-show="daySelected">
            <md-card-header>
              <div class="md-title">Book</div>
            </md-card-header>
            <span v-show="!timesAvailable"
              >There are no available times for this day. You can join the waitlist
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSffons9-vDVlxCU6zVlZnh7wC9rlyNnJaGoB1a8ZwhuSa9SNA/viewform">here</a>. If you
              are looking to cancel an existing appointment, please refer to your confirmation email.</span
            >
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
                  <template v-slot:icon> <i class="far fa-clock"></i> </template
                ></vue-timepicker>
                <div v-if="waitListMessage">
                  If your desired time slot is not available please complete
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSffons9-vDVlxCU6zVlZnh7wC9rlyNnJaGoB1a8ZwhuSa9SNA/viewform"
                    >this waitlist form</a
                  >
                </div>
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
                    <span class="md-error" v-else-if="!$v.form.sampleNumber.email">Please enter a valid email</span>
                  </md-field>
                  <md-field :class="getValidationClass('sampleNumber')">
                    <label>Estimated Number of Samples</label>
                    <md-input v-model="form.sampleNumber" />
                    <span class="md-error" v-if="!$v.form.sampleNumber.required">Number of samples is required</span>
                    <span class="md-error" v-else-if="!$v.form.sampleNumber.numeric">Please enter a number</span>
                  </md-field>

                  <md-field :class="getValidationClass('chemistry')">
                    <label>Chemistry</label>
                    <md-select v-model="form.chemistry">
                      <md-option value="10x 5’ RNA seq'">10x 5’ RNA seq</md-option>
                      <md-option value="10x 3’ RNA seq'">10x 3’ RNA seq</md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.form.chemistry.required">Chemistry is required</span>
                  </md-field>
                </span>
              </md-card-content>
              <md-card-actions v-show="timeSelected">
                <md-button type="submit" class="md-primary">Submit</md-button>
              </md-card-actions>
            </span>
          </span>
        </md-card>
      </form>
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
  components: { VueTimepicker },
  data: function() {
    return {
      daySelected: false,
      timeSelected: false,
      waitListMessage: true,
      invalidTimeSelected: false,
      timesAvailable: true,
      form: {
        name: null,
        email: null,
        sampleNumber: null,
        chemistry: null,
        time: { A: null, hh: null, h: null, militaryTime: null },
      },
      hourRange: null,

      dateSelected: new Date(),
      disabledDates: [
        new Date('1/1/2021'),
        new Date('1/18/2021'),
        new Date('5/31/2021'),
        new Date('7/5/2021'),
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
      formHasErrors: false,
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      sampleNumber: { required, numeric },
      chemistry: { required },
    },
  },
  //   watch: {
  //     //   for global errors
  //     "$v.$invalid": function() {
  //       this.formHasErrors = this.$v.$invalid;
  //     },
  //   },

  methods: {
    dayClick(date) {
      if (date.isDisabled === false) {
        // console.log(date.isDisabled);
        this.daySelected = true;
        this.dateSelected = date;

        app.axios.get(`${API_URL}/availableSlots/${this.dateSelected.weekday}/${this.dateSelected.id}`).then((response) => {
          if (response.status === 204) {
            this.timesAvailable = false;
          } else {
            this.timesAvailable = true;
            this.hourRange = response.data.hourRange;
          }
        });
      }

      // console.log('form', this.form);
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
          .post(`${API_URL}/bookTime`, { data: { ...this.form, date: this.dateSelected.id } })
          .then((response) => {
            this.$swal({ title: 'Booked', text: response.data.message, animation: false, icon: 'success' });
            this.daySelected = false;
          })
          .catch((error) => this.$swal({ title: 'Unable to book', text: error.response.data.message, animation: false, icon: 'error' }));
      }
    },
    changeHandler(eventData) {
      // eventData -> {data: {HH:..., mm:...}, displayTime: 'HH:mm'}
      if (eventData.data.A && eventData.data.HH) {
        // check if the time selected is valid
        if (this.$refs.timePicker.hasInvalidInput) {
          this.waitListMessage = false;
          this.invalidTimeSelected = true;
          this.timeSelected = false;
        } else {
          this.waitListMessage = true;
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
};
</script>

<style></style>
