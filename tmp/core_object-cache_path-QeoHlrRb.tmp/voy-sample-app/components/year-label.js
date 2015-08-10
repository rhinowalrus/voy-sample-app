define('voy-sample-app/components/year-label', ['exports', 'ember', 'voy-sample-app/mixins/format-currency'], function (exports, Ember, formatCurrencyMixin) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend(formatCurrencyMixin['default'], {
		monthlyAmount: 0,
		yearlyAmount: (function () {
			var monthlyAmount = this.get('monthlyAmount') === '' ? 0 : this.get('monthlyAmount'),
			    rawVal = monthlyAmount * 12;
			return this.formatCurrency(rawVal);
		}).property('monthlyAmount')
	});

});