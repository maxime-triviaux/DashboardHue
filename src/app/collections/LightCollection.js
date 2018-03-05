var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var LightModel = require('../models/LightModel.js');

module.exports = Backbone.Collection.extend({

  model: LightModel ,
  initialize: function() {

  }

});
