import Ember from 'ember';

/* this route just gives us a URL endpoint and updates the parent controller with the current item */
export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('Employment', params.id);
	},
	setupController:function(controller,model){
		var parentController = this.controllerFor('employment');
		parentController.set('content',model);
		parentController.set('isAdding',false);
	}
});
