import Vue from 'vue';

// https://vuejs.org/v2/guide/filters.html
Vue.filter('memberImage', function(photoName) {
  try {
    return require('./assets/images/members/' + photoName + '.jpg');
  } catch (e) {
    return require('./assets/images/lab/where_science_goes.png');
  }
});
