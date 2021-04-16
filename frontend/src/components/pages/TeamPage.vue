<template>
  <div class="team-body">
    <div class="team-description md-body-1">{{ igoTeamObject[0].description }}</div>
    <div class="members-container">
      <div class="member-container" v-for="(member, index) in igoTeamObject[0].members" :key="index">
        <div v-if="member.name.includes('Position')">
          <router-link :to="{ name: 'careers' }">
            <div class="member-image-container">
              <img class="lab-member-image" :src="member.photoName | memberImage" :alt="member.photoName" />
            </div>
            <div class="md-body-2">{{ member.name }}</div>
          </router-link>
        </div>
        <div v-else>
          <div class="member-image-container">
            <img class="lab-member-image" :src="member.photoName | memberImage" :alt="member.photoName" />
          </div>
          <div class="md-body-2">{{ member.name }}</div>
        </div>
        <div class="md-body-1">{{ member.role }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { teams } from './../../data.js';

export default {
  name: 'TeamPage',
  props: ['team'],
  data: function() {
    return {
      igoteam: this.team,
      teamsArray: teams,
    };
  },
  computed: {
    igoTeamObject: function() {
      return this.teamsArray.filter((object) => {
        return object.name === this.igoteam;
      });
    },
  },

  // teamMembers: function() {
  //   return this.igoTeamObject.filter((object) => {
  //     return ob
  //   })
  // }
  // },
};
</script>

<style></style>
