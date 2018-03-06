var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');


module.exports = Backbone.Model.extend({

  defaults:{
    id:'',
    name:'',
    ligths: []
  },

  initialize: function() {
  }

});
