import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return this.store.findAll('Employment');
	},
	setupController: function setupController(controller, model) {
		controller.set('content', {
			name: null,
			amt: null
		});
		controller.set('model', model);
		controller.set('isAdding', true);
	},
	actions: {
		/* toggles add flag, clears form */
		addIncomeResource: function addIncomeResource() {
			var controller = this.get('controller');
			this.send('clearController');
			controller.set('isAdding', true);
		},
		/* does the actual push to the model */
		addItem: function addItem() {
			var controller = this.get('controller'),
			    currentName = controller.content.name,
			    currentSalary = controller.content.amt,
			    curItem = {
				"name": currentName,
				"amt": currentSalary
			},
			    newRecord = this.store.createRecord('Employment', curItem);
			newRecord.save().then((function (item) {
				this.transitionTo('employment.employment-item', item);
			}).bind(this));
			controller.set('isAdding', false);
		},
		selectItem: function selectItem(item) {
			var controller = this.get('controller');
			controller.set('isAdding', false);
			controller.set('content', item);
			this.transitionTo('employment.employment-item', item);
		},
		deleteItem: function deleteItem(item) {
			var isSelected = item === this.get('controller.content');
			this.get('store').find('Employment', item.id).then(function (item) {
				item.destroyRecord();
			}).then((function () {
				if (isSelected) {
					this.send('clearController');
				}
				this.transitionTo('employment');
			}).bind(this));
		},
		clearController: function clearController() {
			var controller = this.get('controller');
			controller.set('content', {
				name: null,
				amt: null
			});
		}
	}
});