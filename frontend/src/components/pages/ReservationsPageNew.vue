<template>
  <div id="reservation-page">
    <div class="md-display-1">Reservations</div>
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
            <a :href="spmCalendar" target="__blank">
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
        }
    }
}
</script>