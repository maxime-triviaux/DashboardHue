//Todo Model
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var LightCollection = require('../collections/LightCollection.js');
var LightModel = require('../models/LightModel.js');

module.exports = Backbone.Model.extend({

  defaults:{
    id: 1,
    name: 'Bridge Principal',
    ip: '',
    token: '',
    url: ''
  },

  initialize: function() {
    this.set('url', 'http://'+this.get('ip')+'/api/'+this.get('token'));
  },


  /*
  * @param callback {function} Executed when ajax query is done
  * @return {LightCollection} Collection of all bridge's lights
  **/
  getLights: function(callback){
    var lightCollection = new LightCollection();
    $.ajax({
      url: this.get('url')+'/lights'
    }).done(function(data){
      $.each(data, function(i, item){
        lightCollection.add(new LightModel(item));
      });
      callback(lightCollection);
    });
  }

});
