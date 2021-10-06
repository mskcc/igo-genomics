import Vue from 'vue';

// https://vuejs.org/v2/guide/filters.html
Vue.filter('memberImage', function(photoName) {
  try {
    return require('./assets/images/members/' + photoName + '.jpg');
  } catch (e) {
    return require('./assets/images/lab/wheresciencegoesigo.jpeg');
  }
});
Vue.filter('newsImage', function(photoName) {
  try {
    return require('./assets/images/news/' + photoName + '.jpg');
  } catch (e) {
    return require('./assets/images/lab/wheresciencegoesigo.jpeg');
  }
});
