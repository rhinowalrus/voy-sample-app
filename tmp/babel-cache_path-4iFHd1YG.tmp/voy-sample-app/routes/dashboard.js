import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return Ember.RSVP.hash({
			employment: this.store.findAll('Employment')
			//savings model, property model, etc..
		});
	},
	setupController: function setupController(controller, model) {
		//would repeat this pattern for each asset type
		var employmentSum = 0;
		controller.set('employmentModel', model.employment);
		controller.get('employmentModel').forEach(function (item) {
			employmentSum += parseInt(item.get('amt'));
		});

		controller.set('content', [{
			"name": "Savings",
			"amt": 209500
		}, {
			"name": "Property",
			"amt": 606500
		}, {
			"name": "Pensions",
			"amt": 2620125
		}, {
			"name": "Employment",
			"amt": employmentSum
		}, {
			"name": "Expenses",
			"amt": -345600
		}, {
			"name": "Debt",
			"amt": -960833
		}]);
	}

});