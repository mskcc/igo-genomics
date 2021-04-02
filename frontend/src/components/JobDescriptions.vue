<template>
  <div>
    <md-card class="news-card">
      <md-card-header>
        <div class="md-title">R&D Manager</div>
        <div class="md-subhead">Research and Development Team</div>
      </md-card-header>

      <md-card-actions>
        <md-button @click="showJobDescription = true">Learn More</md-button>
      </md-card-actions>
    </md-card>
    <md-dialog :md-active.sync="showJobDescription">
      <!-- <md-dialog-title>Job Description</md-dialog-title> -->

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui,
            atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui,
            atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui,
            atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.
          </p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showJobDescription = false">Close</md-button>
        <md-button class="md-primary" @click="showJobDescription = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'JobDescriptions',
  data: function() {
    return {
      showJobDescription: false,
    };
  },
};
</script>

<style></style>
