define('voy-sample-app/router', ['exports', 'ember', 'voy-sample-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.resource('employment', function () {
      this.route('employment-item', { path: ":id" });
    });
    this.route('dashboard');
    this.route('savings');
    this.route('property');
    this.route('pensions');
    this.route('debt');
    this.route('expenses');
  });

  exports['default'] = Router;

});