import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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

export default Router;