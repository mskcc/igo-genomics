<template>
  <div id="reservation-page">
    <div class="md-display-1">Reservations</div>
    <div class="reservation-buttons-container">
        <div class="reservations-button">
            <strong><a :href="spmCalendar" target="__blank"><i class="far fa-box-open"></i> Container Pickup</a></strong> 
        </div>
        <div class="reservations-button">
            <strong><a :href="spmCalendar" target="__blank"><i class="fas fa-vials"></i> Sample Drop Off</a></strong> 

        </div>
        <div class="reservations-button">
            <strong><a :href="scCalendar" target="__blank"><i class="fas fa-vial"></i> Fresh Single Cell</a></strong> 
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