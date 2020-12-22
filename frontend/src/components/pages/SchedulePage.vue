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
          :value="new Date()"
          @dayclick="(event) => dayClick(event)"
        />
      </div>
      <form style="width: 600px">
        <md-card class="md-layout-item">
          <md-card-header>
            <div class="md-title">Book</div>
          </md-card-header>
          <md-card-content v-if="dateSelected">
            <md-field>
              <label>Selected day</label>
              <md-input v-model="dateSelected.id" readonly>{{ dateSelected.id }}</md-input>
            </md-field>
            <md-field>
              <label>Full Name</label>
              <md-input v-model="form.name" required />
            </md-field>
            <md-field>
              <label>Email</label>
              <md-input v-model="form.email" required />
            </md-field>
            <md-field>
              <label>Estimated Number of Cells</label>
              <md-input v-model="form.cellNumber" required />
            </md-field>

            <md-field>
              <label>Chemistry</label>
              <md-select v-model="form.chemistry" required>
                <md-option value="fight-club">10x 3'</md-option>
                <md-option value="godfather">10x 5'</md-option>
              </md-select>
            </md-field>
            <div>
              <md-radio v-for="time in timeSlots" :key="time" v-model="form.chosenTime" :value="time">{{ time }} </md-radio>
              {{ form.chosenTime }}
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" class="md-primary">Submit</md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        name: null,
        email: null,
        cellNumber: null,
        chemistry: null,
        chosenTime: null,
      },
      timeSlots: ["11am - 2pm", "2pm - 5pm"],
      //   radio: false,
      dateSelected: null,
      disabledDates: [new Date(2020, 12, 31), { weekdays: [1, 7] }],
      attrs: [
        {
          highlight: {
            fillMode: "solid",
          },
          //   dates: new Date(),
        },
      ],
    };
  },
  methods: {
    dayClick(day) {
      this.dateSelected = day;
      console.log(day);
    },
  },
};
</script>

<style></style>
