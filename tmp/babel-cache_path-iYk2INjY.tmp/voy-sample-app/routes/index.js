import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function beforeModel() {
		this.transitionTo('dashboard');
	}
});