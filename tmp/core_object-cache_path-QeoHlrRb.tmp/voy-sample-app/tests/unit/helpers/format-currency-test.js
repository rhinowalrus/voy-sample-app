define('voy-sample-app/tests/unit/helpers/format-currency-test', ['voy-sample-app/helpers/format-currency', 'qunit'], function (format_currency, qunit) {

  'use strict';

  qunit.module('Unit | Helper | format currency');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = format_currency.formatCurrency(42);
    assert.ok(result);
  });

});