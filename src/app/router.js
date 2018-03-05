var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');

//VIEWS
var DefaultView = require('./views/DefaultView.js');

module.exports = Backbone.Router.extend({

  routes: {
      "":"default",
      "home": "default"
  },

  initialize: function(){
    Backbone.history.start();
  },

  default: function(){
    var defaultView = new DefaultView();
    defaultView.render();
  },


});
