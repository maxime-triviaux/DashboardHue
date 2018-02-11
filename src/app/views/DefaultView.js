//TodoView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
//var template = require('../templates/home.hbs');
var BridgeModel = require('../models/BridgeModel.js');



module.exports = Backbone.View.extend({

  el: $('#app'),

  events:{
    "click .checkbox-item": "checkToggle"
  },


  initialize: function() {
    this.tasks = window.tasks;
  },

  render: function() {
    // var compiled = template({tasks: this.tasks.toJSON()});
    // $(this.el).html(compiled);
    // return this;
    var bridge = new BridgeModel({
      ip: '192.168.1.10',
      token: "SzeJNNH4ZEB636mc4NxuBdDKcLMkgZ61TYyCxyS3"
    });
    bridge.getLights(function(lights){
      console.log(lights);
    });

  }


});
