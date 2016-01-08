module.exports = function() {
  /**
   * JS
   */
  // jQuery for Bootstrap
  global.$ = global.jQuery = require('jquery');

  require('bootstrap-webpack');
  require('bootstrap-validator');
  require('bootstrap-datetimepicker-css');
  require('bootstrap-datetimepicker-js');
  require('angular');

  /**
   * Stylus
   */
};
