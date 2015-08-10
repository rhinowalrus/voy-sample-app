define('voy-sample-app/controllers/employment-item', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		needs: ['employment-list', 'employment'],
		contentBinding: 'controllers.employment-list.selection'
	});

});