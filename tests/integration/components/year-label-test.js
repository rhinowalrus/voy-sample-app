import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('year-label', 'Integration | Component | year label', {
  integration: true
});

test('Generates expected value', function(assert) {
  assert.expect(1);
  this.render(hbs`{{year-label monthlyAmount=1}}`);
  assert.equal(this.$().text().trim(), '$ 12.00');
});