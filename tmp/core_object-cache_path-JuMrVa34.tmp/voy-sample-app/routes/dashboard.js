define('voy-sample-app/routes/dashboard', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			'use strict';
			return [{
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
				"amt": 220200
			}, {
				"name": "Expenses",
				"amt": -345600
			}, {
				"name": "Debt",
				"amt": -960833
			}];
		}
	});

});