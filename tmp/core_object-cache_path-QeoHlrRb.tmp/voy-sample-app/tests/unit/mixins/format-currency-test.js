define('voy-sample-app/tests/unit/mixins/format-currency-test', ['ember', 'voy-sample-app/mixins/format-currency', 'qunit'], function (Ember, FormatCurrencyMixin, qunit) {

  'use strict';

  qunit.module('Unit | Mixin | format currency');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var FormatCurrencyObject = Ember['default'].Object.extend(FormatCurrencyMixin['default']);
    var subject = FormatCurrencyObject.create();
    assert.ok(subject);
  });

});