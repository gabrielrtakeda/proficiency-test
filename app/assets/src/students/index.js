require('./index.styl');
require('./new.styl');
require('./edit.styl');
require('./show.styl');

module.exports = angular.module('students', [])
  .controller('StudentsIndexController', require('./StudentsIndexController'))
;
