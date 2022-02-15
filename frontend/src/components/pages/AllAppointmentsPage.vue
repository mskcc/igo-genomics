<template>
  <div id="all-reservations">
    <form @submit.prevent="validateUser" class="md-layout" v-if="!showData">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <md-field>
            <label>Password</label>
            <md-input v-model="input" type="password" md-toggle-password></md-input>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Submit</md-button>
        </md-card-actions>
      </md-card>
    </form>

    <md-table v-if="showData" v-model="searched" md-sort="date" md-sort-order="desc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Existing Reservations</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item, index }">
        <md-table-cell md-label="" md-sort-by="fullName">{{ index + 1 }}</md-table-cell>
        <md-table-cell md-label="fullName" md-sort-by="fullName">{{ item.fullName }}</md-table-cell>
        <md-table-cell md-label="email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <!-- <md-table-cell md-label="date" md-sort-by="date">{{ item.date }}</md-table-cell> -->
        <md-table-cell md-label="dateTime" md-sort-by="dateTime">{{ item.dateTime }}</md-table-cell>
        <md-table-cell md-label="notificationDate" md-sort-by="notificationDate">{{ item.notificationDate }}</md-table-cell>
        <md-table-cell md-label="status" md-sort-by="status">
          <md-button class="md-primary"> {{ item.status }}</md-button>
        </md-table-cell>
        <!-- <md-table-cell md-label="startTime" md-sort-by="startTime">{{ item.startTime }}</md-table-cell> -->
        <md-table-cell md-label="emailTime" md-sort-by="emailTime">{{ item.emailTime }}</md-table-cell>
        <md-table-cell md-label="requestType" md-sort-by="requestType">{{ item.requestType }}</md-table-cell>
        <md-table-cell md-label="chemistry" md-sort-by="chemistry">{{ item.details.chemistry }}</md-table-cell>
        <md-table-cell md-label="sampleNumber" md-sort-by="sampleNumber">{{ item.details.sampleNumber }}</md-table-cell>
        <!-- <md-table-cell md-label="ilabServiceId" md-sort-by="sampleNumber">{{ item.details.ilabServiceId }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { API_URL, PW } from './../../config.js';

const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.fullName).includes(toLower(term)));
  }
  return items;
};

export default {
  data: function() {
    return {
      appointments: {},
      password: PW,
      input: '',
      showData: '',
      search: null,
      searched: [],
    };
  },
  mounted: function() {
    app.axios.get(`${API_URL}/allAppointments`).then((response) => {
      this.appointments = response.data.data.appointments;
      this.searched = this.appointments;
    });
  },
  methods: {
    validateUser() {
      if (this.input === this.password) {
        this.showData = true;
        this.input = '';
      }
    },
    searchOnTable() {
      this.searched = searchByName(this.appointments, this.search);
    },
  },
};
</script>

<style></style>
