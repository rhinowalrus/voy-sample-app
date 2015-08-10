define('voy-sample-app/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this.transitionTo('dashboard');
		}
	});

});