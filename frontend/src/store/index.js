import Vue from 'vue';
import Vuex from 'vuex';

import * as app from './../app.js';
import { API_URL } from './../config.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // outOfStockAssays: [],
    // mouseAssays: [],
    assaysByCategory: new Array(),
    assaysToUpdate: [],
    newCategory: [],
    assayTableObject: {},
    teamNamesInIgo: [
      'Leadership',
      'Lab Support',
      'Sample & Project Management',
      'EXPAND',
      'Nucleic Acids',
      'Sequencing',
      'Data',
      'Research & Development',
      // 'IGO Alumni',
    ],
    timeline: [],
    requestType: '',
    existingReservations: [],
  },
  mutations: {
    setTimeline(state, payload) {
      state.timeline = payload;
    },
    // setOutOfStockAssays(state, payload) {
    //   state.outOfStockAssays = payload;
    // },
    setAssaysByCategory(state, payload) {
      state.assaysByCategory = payload;
    },
    amendAssaysToUpdate(state, payload) {
      state.assaysToUpdate.push(payload);
    },
    addCategory(state, payload) {
      state.assaysByCategory[payload] = new Array();
    },
    setAssayTableObject(state, payload) {
      state.assayTableObject = payload;
    },
    // setMouseAssays(state, payload) {
    //   state.mouseAssays = payload;
    // },
    setRequestType(state, payload) {
      state.requestType = payload;
    },
    setExistingReservations(state, payload) {
      state.existingReservations = payload;
    },
  },
  actions: {
    setLastTwelveMonths(context) {
      app.axios.get(`${API_URL}/chemistryTimeline`).then((response) => {
        let timeline = response.data.data;
        context.commit('setTimeline', timeline);
      });
    },
    setAssays(context) {
      app.axios
        // .get(process.env.VUE_APP_API_ROOT + "/api/getAssaysFromMongo")
        // .get("http://localhost:8801/api/getAssaysFromMongo")
        .get(`${API_URL}/ddpcrAssays`)
        .then((response) => {
          let assays = response.data.data;

          // Creates assayTableObject from what is in assays/response.data
          let assayTableObject = {
            // Rows of the table
            rows: assays,
            columns: [
              {
                columnHeader: 'Assay Name',
                data: 'assayName',
              },
              {
                columnHeader: 'Active',
                data: 'assayType',
              },
              {
                columnHeader: 'Volume',
                data: 'assayVolume',
              },
              {
                columnHeader: 'Expiration Date',
                data: 'expirationDate',
              },
            ],
          };
          // let outOfStockAssayList = assays.filter((assay) => {
          //   if (assay.assayVolume === 0) {
          //     return assay.assayName;
          //   }
          // });
          // let outOfStockAssayNames = outOfStockAssayList.map((assay) => assay.assayName);

          // let mouseAssayList = assays.filter((assay) => {
          //   if (assay.species === 'Mouse') {
          //     return assay.assayName;
          //   }
          // });
          // let mouseAssayNames = mouseAssayList.map((assay) => assay.assayName);

          let assaysByCategory = { uncategorized: [] };

          for (let i = 0; i < assays.length; i++) {
            if (assays[i].assayType) {
              // check if assaysbyCategory has a key and if it does then push
              if (assaysByCategory[assays[i].assayType]) {
                assaysByCategory[assays[i].assayType].push(assays[i]);
              } else {
                // assaysByCategory at key of category is empty
                assaysByCategory[assays[i].assayType] = [];
                assaysByCategory[assays[i].assayType].push(assays[i]);
              }
            } else {
              assaysByCategory.uncategorized.push(assays[i]);
            }
          }
          context.commit('setAssayTableObject', assayTableObject);
          context.commit('setAssaysByCategory', assaysByCategory);
          // context.commit('setOutOfStockAssays', outOfStockAssayNames);
          // context.commit('setMouseAssays', mouseAssayNames);
        });
    },
    setExistingReservations(context) {
      // console.log(state.requestType);
      app.axios.get(`${API_URL}/existingAppointments/${context.state.requestType}`).then((response) => {
        context.commit('setExistingReservations', response.data.data);
      });
    },
  },
});
