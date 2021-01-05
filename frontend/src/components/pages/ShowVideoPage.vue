<template>
  <div>
    <div class="md-display-1">IGO At Home</div>
    <vue-core-video-player :src="'https://igo.mskcc.org/media/webinars_2020/' + name + '.mp4'"></vue-core-video-player>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data: function() {
    return {};
  },
};
</script>

<style></style>
