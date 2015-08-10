define('voy-sample-app/components/year-label', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		monthlyAmount: null,
		yearlyAmount: (function () {
			return this.get('monthlyAmount') * 12;
		}).property('monthlyAmount')
	});

});