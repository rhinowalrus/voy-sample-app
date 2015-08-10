define('voy-sample-app/models/employment', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var Employment = DS['default'].Model.extend({
		name: DS['default'].attr('string'),
		amt: DS['default'].attr('number')
	});

	Employment.reopenClass({
		FIXTURES: [{
			"id": 1,
			"name": "Chris and Kiel",
			"amt": 96000
		}, {
			"id": 2,
			"name": "Nurse",
			"amt": 125000
		}]
	});

	exports['default'] = Employment;

});