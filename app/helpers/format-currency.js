import Ember from 'ember';

export function formatCurrency(params /*, hash*/ ) {
	var formatted = parseFloat(params[0], 10).toFixed(2);
	return '$' + formatted;
}

export default Ember.Helper.helper(formatCurrency);