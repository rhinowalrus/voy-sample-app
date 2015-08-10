import Ember from 'ember';
import FormatCurrencyMixin from '../../../mixins/format-currency';
import { module, test } from 'qunit';

module('Unit | Mixin | format currency');

// Replace this with your real tests.
test('it works', function(assert) {
  var FormatCurrencyObject = Ember.Object.extend(FormatCurrencyMixin);
  var subject = FormatCurrencyObject.create();
  assert.ok(subject);
});
