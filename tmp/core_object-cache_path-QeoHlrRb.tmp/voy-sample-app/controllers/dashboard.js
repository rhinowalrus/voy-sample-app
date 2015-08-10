define('voy-sample-app/controllers/dashboard', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		needs: ['employment'],
		employmentModel: null,
		content: null
	});

});