define('voy-sample-app/helpers/to-lower', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.toLower = toLower;

	function toLower(params /*, hash*/) {
		return params[0].toLowerCase();
	}

	exports['default'] = Ember['default'].Helper.helper(toLower);

});