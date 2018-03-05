var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var template = require('../templates/home.hbs');
var BridgeModel = require('../models/BridgeModel.js');
var LightCollection = require('../collections/LightCollection.js');


module.exports = Backbone.View.extend({

  el: $('#app'),
  events:{
    'click #test': 'test'
  },


  initialize: function() {
    var bridge = new BridgeModel({
      ip: '192.168.1.10',
      token: "SzeJNNH4ZEB636mc4NxuBdDKcLMkgZ61TYyCxyS3"
    });
    this.lights = bridge.getLights();
  },

  render: function() {
    var compiled = template({lights: this.lights.toJSON()});
    $(this.el).html(compiled);
    return this;
  },

  test: function(e){
    Materialize.toast('Le Bridge Hue est Introuvable', 4000);
  }


});
