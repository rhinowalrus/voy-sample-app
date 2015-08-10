define('voy-sample-app/tests/unit/helpers/to-lower-test', ['voy-sample-app/helpers/to-lower', 'qunit'], function (to_lower, qunit) {

  'use strict';

  qunit.module('Unit | Helper | to lower');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = to_lower.toLower(42);
    assert.ok(result);
  });

});