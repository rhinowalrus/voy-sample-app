define('voy-sample-app/controllers/employment-list', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({
		selection: null
	});

});