<template>
  <div id="reservation-page">
    <div class="md-display-1">Reservations</div>
    <div class="announcement-bubble reservation-announcement">
      <span class="material-icons"> priority_high </span>
      <span class="announcement-content">
        Please note reservations cannot be made until all <a href="/submission-guidelines">submission guideline steps</a> have been completed.
      </span>
    </div>
    <div class="reservation-buttons-container">
        <div class="reservations-button">
            <a :href="spmCalendar" target="__blank">
                <div>
                    <i class="far fa-box-open reservations-button-icon"></i>
                </div>
                <div class="md-title">
                    Container Pickup
                </div>
            </a>
        </div>
        <div class="reservations-button">
            <a @click="showDialogMethod">
                <div>
                    <i class="fas fa-vials reservations-button-icon"></i>
                </div>
                <div class="md-title">
                    Sample Drop Off
                </div>
            </a>
        </div>
        <div class="reservations-button">
            <a :href="scCalendar" target="__blank">
                <div>
                    <i class="fas fa-vial reservations-button-icon"></i>
                </div>
                <div class="md-title">
                    Fresh Single Cell
                </div>
            </a>
        </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Have you prepared your submission?</md-dialog-title>
        <md-dialog-content md-dynamic-height>
            Sample drop offs cannot be scheduled until the following forms have been submitted:
            <ol>
                <li><a href="https://my.ilabsolutions.com/account/saml/mskcc" target="__blank">iLabs request</a></li>
                <li><a href="https://igo.mskcc.org/sample-submission" target="__blank">Sample Submission form</a></li>
            </ol>
            For more information please see our <a href="/submission-guidelines">submission guidelines</a>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" :href="spmCalendar">Yes</md-button>
          <md-button class="md-secondary" href="/submission-guidelines">Not yet</md-button>
        </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
import { SPM_CALENDAR, SC_CALENDAR } from './../../config.js';

export default {
    name: 'ReservationPageNew',
    data: function() {
        return {
            spmCalendar: SPM_CALENDAR,
            scCalendar: SC_CALENDAR,
            showDialog: false,
        }
    },
    methods: {
        showDialogMethod: function() {
            this.showDialog = true;
        }
    }
}
</script>