<template>
  <div id="reservation-page">
    <div class="md-display-1">We are now using Microsoft Bookings!</div>
    <div class="announcement-bubble">
      <span class="material-icons"> warning </span>
      <span class="announcement-content">
        <strong>10xGenomics, MissionBio and DLP appointments</strong> can now be made on our new
        <a :href="scCalendar" target="__blank">Single Cell Calendar.</a>
        Cancellations can be made <strong>no less than 2 hours before the scheduled arrival time.</strong> If you have an emergency, please
        contact genomics@mskcc.org as soon as possible.<br /><br />All other sample drop-off appointments, including fresh samples for
        ATAC-Seq can be made <a :href="spmCalendar" target="__blank">here</a>.<br /><br />Appointments previously scheduled through
        https://genomics.mskcc.org/reservations have been moved by an IGO staff member to their respective Microsoft Bookings calendar. If
        you did not receive a new confirmation email please contact zzPDL_SKI_IGO_DATA@mskcc.org.
      </span>
    </div>
    <div v-if="!microsoftBookingsIsActive">
      <div class="md-layout">
        <form class="md-layout-item" @submit.prevent="book()">
          <md-card>
            <md-card-content>
              <md-field>
                <label>Request Type</label>
                <!-- <md-select v-model="requestType" name="requestType" id="requestType" :disabled="daySelected"> -->
                <md-select v-model="requestType" name="requestType" id="requestType" :disabled="dateSelected ? true : false">
                  <md-option value="10xGenomics">10X Genomics single cell</md-option>
                  <md-option value="atacSeq">ATAC Seq (Thursdays only)</md-option>
                  <md-option value="missionBio" disabled>MissionBio</md-option>
                  <md-option value="spm">All Others</md-option>
                </md-select>
              </md-field>
            </md-card-content>
            <div v-show="requestType">
              <span v-html="message"> </span>
            </div>
            <span v-show="dateSelected">
              <span v-show="timeRange">
                <md-card-content>
                  <md-button class="md-raised md-primary" v-for="(time, index) in timeRange" :key="index" @click="changeHandler(time)">
                    {{ new Date().setHours(parseInt(time.string.split(':')[0]), parseInt(time.string.split(':')[1])) | moment('h:mm A') }}
                  </md-button>
                  <span v-show="form.time.militaryTime">
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label>Selected date</label>
                          <md-input v-model="dateSelected.id" readonly></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-small-size-100">
                        <md-field>
                          <label>Selected time (24hr)</label>
                          <md-input v-model="form.time.militaryTime" readonly> </md-input>
                        </md-field>
                      </div>
                    </div>

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
                    <span v-if="requestType !== 'spm'">
                      <md-field :class="getValidationClass('sampleNumber')">
                        <label>Estimated Number of Samples</label>
                        <md-input v-model="form.sampleNumber" />
                        <span class="md-error" v-if="!$v.form.sampleNumber.required">Number of samples is required</span>
                        <span class="md-error" v-else-if="!$v.form.sampleNumber.numeric">Please enter a number</span>
                        <!-- <span class="md-error" v-else-if="!$v.form.sampleNumber.maxValue">We cannot accept more than 25 samples/day</span> -->
                      </md-field>
                    </span>

                    <span v-if="requestType === '10xGenomics'">
                      <md-field :class="getValidationClass('chemistry')">
                        <label>Chemistry</label>
                        <md-select v-model="form.chemistry">
                          <md-option value="10x 5’ RNA seq'">10x 5’ RNA seq</md-option>
                          <md-option value="10x 3’ RNA seq'">10x 3’ RNA seq</md-option>
                          <md-option value="10x Multiome">10x Multiome</md-option>
                        </md-select>
                        <span class="md-error" v-if="!$v.form.chemistry.required">Chemistry is required</span>
                      </md-field>
                    </span>
                    <span v-if="requestType === 'spm'">
                      <md-field :class="getValidationClass('ilabServiceId')">
                        <label>iLab Service ID</label>
                        <md-input v-model="form.ilabServiceId" />
                        <span class="md-error" v-if="!$v.form.ilabServiceId.required">iLab Service ID is required</span>
                      </md-field>
                    </span>
                  </span>
                </md-card-content>
                <md-card-actions>
                  <md-button class="md-primary" @click="reset">Clear</md-button>
                  <span v-show="form.time.militaryTime">
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
            :min-date="getMinDate()"
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
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL } from './../../config.js';
import { required, email, numeric, requiredIf } from 'vuelidate/lib/validators';
import ExistingReservations from '../ExistingReservations.vue';

export default {
  name: 'ReservationPage',
  components: { ExistingReservations },
  data: function() {
    return {
      spmCalendar: 'https://outlook.office365.com/owa/calendar/IGOSPMReservations@mskcc.onmicrosoft.com/bookings/',
      scCalendar: 'https://outlook.office365.com/owa/calendar/igo1@mskcc.onmicrosoft.com/bookings/',
      ohCalendar: 'https://outlook.office365.com/owa/calendar/HalloweenOpenHouse@mskcc.onmicrosoft.com/bookings/',
      microsoftBookingsIsActive: true,
      message: 'Please select a day.',
      requestType: '',
      form: {
        name: '',
        email: '',
        sampleNumber: '',
        chemistry: '',
        // time: { A: '', hh: '', h: '', mm: '', militaryTime: '', weekday: '' },
        time: { militaryTime: '', weekday: '' },
        ilabServiceId: '',
      },
      timeRange: [],
      formHasErrors: false,
      // for vc-date-picker
      // dateSelected: new Date(),
      dateSelected: '',
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
          required: requiredIf(function() {
            return this.requestType !== 'spm';
          }),
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
        ilabServiceId: {
          required: requiredIf(function() {
            return this.requestType === 'spm';
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
      !this.dateSelected ? (this.message = 'Please select a day') : this.message;
    },
    requestType: function() {
      if (this.requestType) {
        this.$store.commit('setRequestType', this.requestType);
        this.$store.dispatch('setExistingReservations');
      }
    },
  },

  methods: {
    reset() {
      this.requestType = '';
      this.dateSelected = '';
      this.timeRange = [];
      this.form.name = '';
      this.form.email = '';
      this.form.sampleNumber = '';
      this.form.chemistry = '';
      // this.form.time.A = '';
      // this.form.time.hh = '';
      // this.form.time.h = '';
      this.form.time.militaryTime = '';
      this.form.time.weekday = '';
      this.form.ilabServiceId = '';

      // time: { A: null, hh: null, h: null, militaryTime: null },
    },
    dayClick(date) {
      // user clicked on a valid day
      if (date.isDisabled === false) {
        // console.log(date.isDisabled);
        if (!this.requestType) {
          this.message = 'Please select a Request Type';
        }
        if (this.requestType) {
          this.form.time.militaryTime = '';
          this.form.time.weekday = date.weekday;

          this.dateSelected = date;
          this.timeRange = [];
          app.axios
            .get(`${API_URL}/availableSlots/${this.requestType}/${this.dateSelected.weekday}/${this.dateSelected.id}`)
            .then((response) => {
              this.message = response.data.message;
              this.requestType === '10xGenomics'
                ? (this.message +=
                    '</br>If your desired time slot is not available please complete <a href="https://docs.google.com/forms/d/e/1FAIpQLSffons9-vDVlxCU6zVlZnh7wC9rlyNnJaGoB1a8ZwhuSa9SNA/viewform">this 10x waitlist form.</a>')
                : this.message;
              response.data.data.timeRange ? (this.timeRange = response.data.data.timeRange) : (this.timeRange = []);
            });
        } else {
          this.message = 'Please select a Request Type';
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
        this.$swal({
          title: 'Are you sure?',
          // text: "You won't be able to revert this!",
          icon: 'warning',
          showClass: {
            popup: '',
            backdrop: 'swal2-noanimation',
            icon: '',
          },
          hideClass: {
            popup: '',
            backdrop: '',
            icon: '',
          },
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, book it!',
        }).then((result) => {
          if (result.isConfirmed) {
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
                this.$swal({
                  title: 'Booked',
                  text: response.data.message,
                  showClass: {
                    popup: '',
                    backdrop: 'swal2-noanimation',
                    icon: '',
                  },
                  hideClass: {
                    popup: '',
                    backdrop: '',
                    icon: '',
                  },
                  icon: 'success',
                }).then((confirmedResult) => {
                  this.reset();
                  if (confirmedResult.isConfirmed) {
                    this.$router.push({ name: 'cancel reservation', params: { id: response.data.data._id } });
                  }
                });
              })
              .catch((error) =>
                this.$swal({
                  title: 'Unable to book',
                  text: error.response.data.message,
                  showClass: {
                    popup: '',
                    backdrop: 'swal2-noanimation',
                    icon: '',
                  },
                  hideClass: {
                    popup: '',
                    backdrop: '',
                    icon: '',
                  },
                  icon: 'error',
                })
              );
          }
        });
      }
    },
    changeHandler(time) {
      this.form.time.militaryTime = time.string;
    },
    getMinDate() {
      // same day bookings for spm
      if (this.requestType === 'spm') {
        return new Date();
      } else {
        return new Date().setDate(new Date().getDate() + 2);
      }
    },
    getMaxDate() {
      let today = new Date();
      let newdate = new Date();
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
