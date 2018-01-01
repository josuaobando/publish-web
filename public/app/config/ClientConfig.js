'use strict';

angular.module('ConfigModule', []).provider('Config', function(){
  var self = this;
  this.config = {
    ws_timeout: 60000
  };
  this.$get = function(){
    return {config: self.config};
  };
}).constant('ClientConfig', {

  dev: true,
  wsController: 'http://api.dinerosegurohf:8080/api/controller.php',
  auth: 'testkey'

});