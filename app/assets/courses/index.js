require('./index.styl');
require('./new.styl');
require('./edit.styl');
require('./show.styl');

module.exports = angular.module('courses', [])
  .controller('CoursesIndexController', require('./CoursesIndexController'))
;
