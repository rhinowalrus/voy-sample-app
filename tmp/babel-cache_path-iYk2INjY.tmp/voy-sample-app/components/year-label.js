import Ember from 'ember';

export default Ember.Component.extend({
	monthlyAmount: null,
	yearlyAmount: (function () {
		return this.get('monthlyAmount') * 12;
	}).property('monthlyAmount')
});