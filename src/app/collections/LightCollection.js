//TaskCollection
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');


module.exports = Backbone.Collection.extend({

  model: require('../models/LightModel.js'),
  initialize: function() {

  }

});
