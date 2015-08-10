import Ember from 'ember';

export default Ember.Controller.extend({
	needs:['employment'],
	employmentModel:null,
	content:null
});
