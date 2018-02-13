//TodoView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var template = require('../templates/home.hbs');
var BridgeModel = require('../models/BridgeModel.js');
var LightCollection = require('../collections/LightCollection.js');


module.exports = Backbone.View.extend({

  el: $('#app'),
  events:{
  },


  initialize: function() {
  },

  render: function(render=false) {
    if(render==false)
    {
      var that = this;
      var bridge = new BridgeModel({
        ip: '192.168.1.10',
        token: "SzeJNNH4ZEB636mc4NxuBdDKcLMkgZ61TYyCxyS3"
      });
      bridge.getLights(function(lights){
        //console.log(lights);
        that.lights = lights;
        that.render(true);
      });
    }
    else
    {
      console.log(this.lights);
      var compiled = template({lights: this.lights.toJSON()});
      $(this.el).html(compiled);
      return this;
    }
  }


});
