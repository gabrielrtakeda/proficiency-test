module.exports = angular
  .module('app', [
    // 3rd party
    require('angular-animate'),
    require('angular-ui-bootstrap'),
    'ui.bootstrap.datetimepicker',

    // Modules
    require('./application/index').name,
    require('./students/index').name,
    require('./courses/index').name,
    require('./classrooms/index').name,
  ])

  .config([
    '$locationProvider',
    '$sceDelegateProvider',
    function(
      $locationProvider,
      $sceDelegateProvider
    ) {
      // $sceDelegateProvider.resourceUrlWhitelist(
      //   require('./config/resource-url').whitelist
      // );
      $locationProvider.html5Mode(true);
    }
  ])
;
