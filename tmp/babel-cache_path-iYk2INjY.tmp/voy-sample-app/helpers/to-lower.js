export { toLower };
import Ember from 'ember';

function toLower(params /*, hash*/) {
	'use strict';
	return params[0].toLowerCase();
}

export default Ember.Helper.helper(toLower);