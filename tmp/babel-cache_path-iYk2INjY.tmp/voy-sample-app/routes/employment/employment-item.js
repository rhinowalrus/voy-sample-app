import Ember from 'ember';

export default Ember.Route.extend({
	model: function model(params) {
		return this.store.findRecord('Employment', params.id);
	},
	setupController: function setupController(controller, model) {
		var parentController = this.controllerFor('employment');
		parentController.set('content', model);
	}
});