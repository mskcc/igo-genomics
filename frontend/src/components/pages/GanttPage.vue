<template>
  <div>
    <table>
      <tr></tr>
      <tr></tr>
      <tr></tr>
    </table>

    <div>{{ timeline }}</div>
    <hot-table
      :columns="timeline.columns"
      :colHeaders="timeline.columns.map((element) => `${element.columnHeader} ${element.year}`)"
      :data="rows"
      :rowHeaders="true"
    ></hot-table>
  </div>
</template>

<script>
import { HotTable } from "@handsontable/vue";

export default {
  components: { HotTable },
  data() {
    return {
      rows: [
        {
          name: "IDT WES v1",
          startMonth: "January",
          startYear: 2020,
          stopMonth: "March",
          stopYear: 2020,
          start: "01-01-2020",
          stop: "03-01-2020",
        },
        {
          name: "IDT WES v2",
          startMonth: "April",
          startYear: 2020,
          stopMonth: "December",
          stopYear: 2020,
          start: "04-01-2020",
          stop: "12-01-2020",
        },
        {
          name: "impact",
          startMonth: "April",
          startYear: 2019,
          stopMonth: "December",
          stopYear: 2019,
          start: "04-01-2019",
          stop: "12-01-2019",
        },
      ],
    };
  },
  computed: {
    timeline: function() {
      return this.$store.state.timeline;
    },
  },
};
</script>

<style></style>
