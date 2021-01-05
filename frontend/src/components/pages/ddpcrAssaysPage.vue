<template>
  <div>
    <div class="md-display-1">ddPCR Assay List</div>
    <div class="controls-container">
      <div class="search-form">
        <form>
          <md-field>
            <label>Search for an assay</label>
            <md-input v-model.lazy="search"></md-input>
          </md-field>
        </form>
      </div>

      <md-card class="legend">
        <table>
          <tbody>
            <tr>
              <td>
                &#128000;
              </td>
              <td class="legend-label">
                Mouse assay
              </td>
            </tr>
            <tr>
              <td class="fa-icon fas fa-minus-circle fa-1x" style="color: Tomato"></td>
              <td class="legend-label">
                Out of stock; addt'l ordering time
              </td>
            </tr>
          </tbody>
        </table>
      </md-card>
    </div>

    <div class="flex-container">
      <div v-for="(assayArray, category) in filteredAssaysByCategory" :key="category">
        <div v-if="category != 'uncategorized'">
          <md-card md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title category-name">{{ category }}</div>
                <!-- <div class="md-subhead">{{ descriptions[category] || "–" }}</div> -->
              </md-card-header-text>
            </md-card-header>
            <md-content class="md-scrollbar">
              <div v-for="assay in assayArray" :key="assay" class="assay-list">
                {{ assay }}
                <span v-if="mouseAssays.includes(assay)"> &#128000;<md-tooltip md-direction="top">Mouse assay</md-tooltip></span>
                <span v-if="outOfStockAssays.includes(assay)" style="color: Tomato"
                  ><i class="fa-icon fas fa-minus-circle fa-1x">
                    <md-tooltip md-direction="top">Out of stock; addt'l ordering time</md-tooltip>
                  </i></span
                >
              </div>
            </md-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ddpcrAssaysPage',
  data() {
    return {
      search: '',
      // descriptions: { Mutation: "mutation description", CNV: "cnv description" }
    };
  },
  computed: {
    assaysByCategory: function() {
      return this.$store.state.assaysByCategory;
    },
    filteredAssaysByCategory() {
      // Make a copy of assaysByCategory
      let filteredAssays = JSON.parse(JSON.stringify(this.$store.state.assaysByCategory));
      // delete uncategorized assays to avoid empty card div in v-for
      delete filteredAssays.uncategorized;

      if (this.search != '') {
        let searchResults = [];
        Object.keys(filteredAssays).forEach((category) => {
          // search results for this category are filtered, assign result of filtering to searchResults
          searchResults = filteredAssays[category].filter((assayElement) => {
            return assayElement.toLowerCase().match(this.search.toLowerCase());
          });
          console.log(searchResults);
          filteredAssays[category] = searchResults;
        });
        return filteredAssays;
      } else {
        return filteredAssays;
      }
    },
    outOfStockAssays: function() {
      return this.$store.state.outOfStockAssays;
    },
    mouseAssays: function() {
      return this.$store.state.mouseAssays;
    },
  },
};
</script>

<style></style>
