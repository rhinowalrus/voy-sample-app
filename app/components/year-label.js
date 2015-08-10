import Ember from 'ember';
import formatCurrencyMixin from '../mixins/format-currency';

export default Ember.Component.extend(formatCurrencyMixin,{
	monthlyAmount: 0,
	yearlyAmount: function() {
		var monthlyAmount = this.get('monthlyAmount') === '' ? 0 : this.get('monthlyAmount'),
		rawVal =  monthlyAmount * 12;
		return this.formatCurrency(rawVal);
	}.property('monthlyAmount')
});