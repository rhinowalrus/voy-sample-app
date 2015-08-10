define('voy-sample-app/routes/employment/employment-item', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			return this.store.findRecord('Employment', params.id);
		},
		setupController: function setupController(controller, model) {
			var parentController = this.controllerFor('employment');
			parentController.set('content', model);
		}
	});

});