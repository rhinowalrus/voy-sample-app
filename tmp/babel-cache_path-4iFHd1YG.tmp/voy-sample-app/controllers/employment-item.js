import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['employment-list', 'employment'],
	contentBinding: 'controllers.employment-list.selection'
});