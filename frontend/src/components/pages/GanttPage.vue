<template>
  <div>
    <table>
      <tr></tr>
      <tr></tr>
      <tr></tr>
    </table>

    <!-- <div>{{ timeline }}</div> -->
    <hot-table
      v-if="timeline.columns"
      :columns="timeline.columns"
      :colHeaders="timeline.columns.map((element) => `${element.columnHeader} ${element.year ? element.year : ''}`)"
      :data="timeline.rows"
      :readOnly="true"
      :disableVisualSelection="true"
      stretchH="all"
      licenseKey="non-commercial-and-evaluation"
    ></hot-table>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';

export default {
  name: 'GanttPage',
  components: { HotTable },
  data() {
    return {};
  },
  computed: {
    timeline: function() {
      return this.$store.state.timeline;
    },
  },
};
</script>

<style src="../../../node_modules/handsontable/dist/handsontable.full.css"></style>
