var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var Router = require('./router.js');


require('hammerjs');
require('materialize-css');


$(document).ready(function() {
  new Router();
});
