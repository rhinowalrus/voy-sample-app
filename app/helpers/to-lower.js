import Ember from 'ember';

export function toLower(params /*, hash*/ ) {
	return params[0].toLowerCase();
}

export default Ember.Helper.helper(toLower);