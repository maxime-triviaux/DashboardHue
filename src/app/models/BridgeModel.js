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
  * @return {boolean} Is Bridge Unreachable
  **/
  isUnreachable(){
    var isUnreachable = false;
    $.ajax({
      url: this.get('url')+'/lights',
      async: false
    }).done((data) => {
      isUnreachable = false;
    }).fail((error) => {
      isUnreachable = true;
    });
    return isUnreachable;
  },


  /*
  * @return {LightCollection} Collection of all bridge's lights
  **/
  getLights: function(){
    var lightCollection = new LightCollection();
    $.ajax({
      url: this.get('url')+'/lights',
      async: false
    }).done(function(data){
      $.each(data, function(i, item){
        lightCollection.add(new LightModel(item));
      });
    });
    return lightCollection;
  }

});
