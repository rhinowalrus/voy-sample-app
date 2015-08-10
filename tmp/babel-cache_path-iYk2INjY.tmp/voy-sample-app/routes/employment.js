import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return this.store.findAll('Employment');
	},
	setupController: function setupController(controller, model) {
		controller.set('content', {
			name: '',
			amt: ''
		});
		controller.set('list', model);
	},
	actions: {
		addIncomeResource: function addIncomeResource() {
			this.get('controller.list').set('content', {
				name: '',
				amt: ''
			});
		},
		addItem: function addItem() {
			var controller = this.get('controller'),
			    list = this.get('controller.list'),
			    currentName = controller.name,
			    currentSalary = controller.amt,
			    curItem = {
				"name": currentName,
				"amt": currentSalary
			};
			if (!list.get('selection')) {
				//new item
				list.pushObject(curItem);
			}
		},
		selectItem: function selectItem(item) {
			var list = this.get('controller.list');
			list.set('content', item);
			this.transitionTo('employment.employment-item', item);
		},
		deleteItem: function deleteItem() {
			var list = this.get('controller.list');
			list.removeObject(list.get('content'));
		}
	}
});