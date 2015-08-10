define('voy-sample-app/helpers/format-currency', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.formatCurrency = formatCurrency;

	function formatCurrency(params /*, hash*/) {
		var formatted = parseFloat(params[0], 10).toFixed(2);
		return '$' + formatted;
	}

	exports['default'] = Ember['default'].Helper.helper(formatCurrency);

});