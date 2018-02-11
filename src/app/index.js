var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var Router = require('./router.js');
var BridgeModel = require('./models/BridgeModel.js');


require('hammerjs');
require('materialize-css');


$(document).ready(function() {

  var bridge = new BridgeModel({
    ip: '192.168.1.10',
    token: "SzeJNNH4ZEB636mc4NxuBdDKcLMkgZ61TYyCxyS3"
  });
  bridge.getLights(function(lights){
    console.log(lights);
  });

  new Router();


});
