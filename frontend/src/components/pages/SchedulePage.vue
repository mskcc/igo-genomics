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
            <span v-show="!timesAvailable">There are no available times for this day. You can join the waitlist HERE.</span>
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
                >
                  <template v-slot:icon> <i class="far fa-clock"></i> </template
                ></vue-timepicker>
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
                    <label>Estimated Number of Cells</label>
                    <md-input v-model="form.sampleNumber" />
                    <span class="md-error" v-if="!$v.form.sampleNumber.required">Number of samples is required</span>
                    <span class="md-error" v-else-if="!$v.form.sampleNumber.numeric">Please enter a number</span>
                  </md-field>

                  <md-field :class="getValidationClass('chemistry')">
                    <label>Chemistry</label>
                    <md-select v-model="form.chemistry">
                      <md-option value="10x 3'">10x 3'</md-option>
                      <md-option value="10x 5'">10x 5'</md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.form.chemistry.required">Chemistry is required</span>
                  </md-field>
                </span>
              </md-card-content>
              <md-card-actions>
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
      disabledDates: [new Date(2020, 12, 31), { weekdays: [1, 7] }],
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
      // console.log(date);
      // console.log('form', this.form);
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
          .then((response) => this.$swal({ title: 'Booked', text: response.data.message, animation: false, icon: 'success' }))
          .catch((error) => this.$swal({ title: 'Unable to book', text: error.response.data.message, animation: false, icon: 'error' }));
      }
    },
    changeHandler(eventData) {
      // eventData -> {data: {HH:..., mm:...}, displayTime: 'HH:mm'}
      if (eventData.data.A && eventData.data.HH) {
        this.timeSelected = true;
        this.form.time.militaryTime = parseInt(eventData.data.HH);
        this.form.time.h = eventData.data.h;
      } else {
        this.timeSelected = false;
      }
    },
  },
};
</script>

<style></style>
