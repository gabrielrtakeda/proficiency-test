require('./index.styl');
require('./new.styl');
require('./edit.styl');
require('./show.styl');

module.exports = angular.module('classrooms', [])
  .controller('ClassroomsIndexController', require('./ClassroomsIndexController'))
;
