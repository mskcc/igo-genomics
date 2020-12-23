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
                    :value="dateSelected"
                    @dayclick="(event) => dayClick(event)"
                />
            </div>
            <form style="width: 600px" @submit.prevent="book()">
                <md-card class="md-layout-item">
                    <md-card-header>
                        <div class="md-title">Book</div>
                    </md-card-header>
                    <md-card-content v-if="timeSlots">
                        <md-field>
                            <label>Selected date</label>
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
                                <md-option value="10x 3'">10x 3'</md-option>
                                <md-option value="10x 5'">10x 5'</md-option>
                            </md-select>
                        </md-field>
                        <div>
                            <md-radio v-for="time in timeSlots" :key="time" v-model="form.timeslot" :value="time">{{ time }} </md-radio>
                            {{ form.timeslot }}
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
import * as app from './../../app.js';
import { API_URL } from './../../config.js';
export default {
    data: function() {
        return {
            form: {
                name: 'lisa',
                email: 'lisa',
                cellNumber: 4,
                chemistry: 'whatev',
                timeslot: null,
            },
            timeSlots: null,
            //   radio: false,
            dateSelected: new Date(),
            disabledDates: [new Date(2020, 12, 31), { weekdays: [1, 7] }],
            attrs: [
                {
                    highlight: {
                        fillMode: 'solid',
                    },
                    //   dates: new Date(),
                },
            ],
        };
    },
    methods: {
        dayClick(date) {
            this.dateSelected = date;
            console.log(this.dateSelected);
            app.axios
                .get(`${API_URL}/availableSlots/${this.dateSelected.weekday}/${this.dateSelected.id}`)
                .then((response) => (this.timeSlots = response.data));
        },
        book() {
            // validation

            app.axios.post(`${API_URL}/bookTime`, { data: { ...this.form, date: this.dateSelected.id } });
            // console.log(form);
        },
    },
};
</script>

<style></style>
