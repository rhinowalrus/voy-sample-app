"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('voy-sample-app/acceptance-tests/main', ['exports', 'ember-cli-sri/acceptance-tests/main'], function (exports, main) {

	'use strict';



	exports['default'] = main['default'];

});
define('voy-sample-app/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend({});

});
define('voy-sample-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'voy-sample-app/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('voy-sample-app/components/year-label', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		monthlyAmount: null,
		yearlyAmount: (function () {
			return this.get('monthlyAmount') * 12;
		}).property('monthlyAmount')
	});

});
define('voy-sample-app/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('voy-sample-app/controllers/employment-item', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		needs: ['employment-list', 'employment'],
		contentBinding: 'controllers.employment-list.selection'
	});

});
define('voy-sample-app/controllers/employment-list', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({
		selection: null
	});

});
define('voy-sample-app/controllers/employment', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		content: null,
		list: null
	});

});
define('voy-sample-app/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('voy-sample-app/helpers/format-currency', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.formatCurrency = formatCurrency;

	function formatCurrency(params /*, hash*/) {
		'use strict';
		var formatted = parseFloat(params[0], 10).toFixed(2);
		return '$' + formatted;
	}

	exports['default'] = Ember['default'].Helper.helper(formatCurrency);

});
define('voy-sample-app/helpers/to-lower', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.toLower = toLower;

	function toLower(params /*, hash*/) {
		'use strict';
		return params[0].toLowerCase();
	}

	exports['default'] = Ember['default'].Helper.helper(toLower);

});
define('voy-sample-app/initializers/export-application-global', ['exports', 'ember', 'voy-sample-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('voy-sample-app/instance-initializers/app-version', ['exports', 'voy-sample-app/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('voy-sample-app/models/employment', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var Employment = DS['default'].Model.extend({
		name: DS['default'].attr('string'),
		amt: DS['default'].attr('number')
	});

	Employment.reopenClass({
		FIXTURES: [{
			"id": 1,
			"name": "Chris and Kiel",
			"amt": 96000
		}, {
			"id": 2,
			"name": "Nurse",
			"amt": 125000
		}]
	});

	exports['default'] = Employment;

});
define('voy-sample-app/router', ['exports', 'ember', 'voy-sample-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.resource('employment', function () {
      this.route('employment-item', { path: ":id" });
    });
    this.route('dashboard');
    this.route('savings');
    this.route('property');
    this.route('pensions');
    this.route('debt');
    this.route('expenses');
  });

  exports['default'] = Router;

});
define('voy-sample-app/routes/dashboard', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			'use strict';
			return [{
				"name": "Savings",
				"amt": 209500
			}, {
				"name": "Property",
				"amt": 606500
			}, {
				"name": "Pensions",
				"amt": 2620125
			}, {
				"name": "Employment",
				"amt": 220200
			}, {
				"name": "Expenses",
				"amt": -345600
			}, {
				"name": "Debt",
				"amt": -960833
			}];
		}
	});

});
define('voy-sample-app/routes/debt', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('voy-sample-app/routes/employment', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
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

});
define('voy-sample-app/routes/employment/employment-item', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			return this.store.findRecord('Employment', params.id);
		},
		setupController: function setupController(controller, model) {
			var parentController = this.controllerFor('employment');
			parentController.set('content', model);
		}
	});

});
define('voy-sample-app/routes/expenses', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('voy-sample-app/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this.transitionTo('dashboard');
		}
	});

});
define('voy-sample-app/routes/pensions', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('voy-sample-app/routes/property', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('voy-sample-app/routes/savings', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('voy-sample-app/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "voy-sample-app/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[2,0],[2,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/components/year-label', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/components/year-label.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/dashboard', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.6",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 3
              },
              "end": {
                "line": 7,
                "column": 3
              }
            },
            "moduleName": "voy-sample-app/templates/dashboard.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","item.name",["loc",[null,[6,4],[6,17]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 13,
              "column": 1
            }
          },
          "moduleName": "voy-sample-app/templates/dashboard.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
          return morphs;
        },
        statements: [
          ["block","linkTo",[["subexpr","to-lower",[["get","item.name",["loc",[null,[5,23],[5,32]]]]],[],["loc",[null,[5,13],[5,33]]]]],[],0,null,["loc",[null,[5,3],[7,14]]]],
          ["inline","format-currency",[["get","item.amt",["loc",[null,[10,22],[10,30]]]]],[],["loc",[null,[10,4],[10,32]]]]
        ],
        locals: ["item"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 5
          }
        },
        "moduleName": "voy-sample-app/templates/dashboard.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","asset-list");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[2,9],[2,14]]]]],[],0,null,["loc",[null,[2,1],[13,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('voy-sample-app/templates/debt', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/debt.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/employment-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/employment-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/employment', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 1
            },
            "end": {
              "line": 12,
              "column": 1
            }
          },
          "moduleName": "voy-sample-app/templates/employment.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1,"href","#");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["element","action",["selectItem",["get","item",["loc",[null,[11,36],[11,40]]]]],[],["loc",[null,[11,14],[11,42]]]],
          ["content","item.name",["loc",[null,[11,43],[11,56]]]]
        ],
        locals: ["item"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/employment.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","form-panel");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("Add Income Resource");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","list-panel");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [5]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1,1,1);
        morphs[1] = dom.createMorphAt(element1,3,3);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [3, 1]),1,1);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","controller.content.name",["loc",[null,[3,27],[3,50]]]]],[],[]],"size","50","placeholder","Name"],["loc",[null,[3,1],[3,81]]]],
        ["inline","input",[],["type","text","value",["subexpr","format-currency",[["get","controller.content.amt",["loc",[null,[4,44],[4,66]]]]],[],["loc",[null,[4,27],[4,67]]]],"size","50","placeholder","Salary"],["loc",[null,[4,1],[4,100]]]],
        ["element","action",["addIncomeResource"],[],["loc",[null,[5,9],[5,39]]]],
        ["block","each",[["get","controller.list",["loc",[null,[10,9],[10,24]]]]],[],0,null,["loc",[null,[10,1],[12,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('voy-sample-app/templates/expenses', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/expenses.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/pensions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/pensions.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/property', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/property.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/templates/savings', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voy-sample-app/templates/savings.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('voy-sample-app/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/components/year-label.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/year-label.js should pass jshint', function() { 
    ok(true, 'components/year-label.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/controllers/employment-item.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/employment-item.js should pass jshint', function() { 
    ok(true, 'controllers/employment-item.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/controllers/employment-list.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/employment-list.js should pass jshint', function() { 
    ok(true, 'controllers/employment-list.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/controllers/employment.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/employment.js should pass jshint', function() { 
    ok(true, 'controllers/employment.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/helpers/format-currency.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/format-currency.js should pass jshint', function() { 
    ok(true, 'helpers/format-currency.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'voy-sample-app/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('voy-sample-app/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/helpers/start-app', ['exports', 'ember', 'voy-sample-app/app', 'voy-sample-app/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('voy-sample-app/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/helpers/to-lower.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/to-lower.js should pass jshint', function() { 
    ok(true, 'helpers/to-lower.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/integration/components/year-label-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('year-label', 'Integration | Component | year label', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'year-label', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.6',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'year-label', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('voy-sample-app/tests/integration/components/year-label-test.jshint', function () {

  'use strict';

  module('JSHint - integration/components');
  test('integration/components/year-label-test.js should pass jshint', function() { 
    ok(true, 'integration/components/year-label-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/models/employment.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/employment.js should pass jshint', function() { 
    ok(true, 'models/employment.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/dashboard.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/dashboard.js should pass jshint', function() { 
    ok(true, 'routes/dashboard.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/debt.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/debt.js should pass jshint', function() { 
    ok(true, 'routes/debt.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/employment.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/employment.js should pass jshint', function() { 
    ok(true, 'routes/employment.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/employment/employment-item.jshint', function () {

  'use strict';

  module('JSHint - routes/employment');
  test('routes/employment/employment-item.js should pass jshint', function() { 
    ok(true, 'routes/employment/employment-item.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/expenses.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/expenses.js should pass jshint', function() { 
    ok(true, 'routes/expenses.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/pensions.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/pensions.js should pass jshint', function() { 
    ok(true, 'routes/pensions.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/property.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/property.js should pass jshint', function() { 
    ok(true, 'routes/property.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/routes/savings.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/savings.js should pass jshint', function() { 
    ok(true, 'routes/savings.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/test-helper', ['voy-sample-app/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('voy-sample-app/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('voy-sample-app/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/controllers/employment-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:employment-item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('voy-sample-app/tests/unit/controllers/employment-item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/employment-item-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/employment-item-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/controllers/employment-list-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:employment-list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('voy-sample-app/tests/unit/controllers/employment-list-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/employment-list-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/employment-list-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/controllers/employment-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:employment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('voy-sample-app/tests/unit/controllers/employment-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/employment-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/employment-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/helpers/format-currency-test', ['voy-sample-app/helpers/format-currency', 'qunit'], function (format_currency, qunit) {

  'use strict';

  qunit.module('Unit | Helper | format currency');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = format_currency.formatCurrency(42);
    assert.ok(result);
  });

});
define('voy-sample-app/tests/unit/helpers/format-currency-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers');
  test('unit/helpers/format-currency-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/format-currency-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/helpers/to-lower-test', ['voy-sample-app/helpers/to-lower', 'qunit'], function (to_lower, qunit) {

  'use strict';

  qunit.module('Unit | Helper | to lower');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = to_lower.toLower(42);
    assert.ok(result);
  });

});
define('voy-sample-app/tests/unit/helpers/to-lower-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers');
  test('unit/helpers/to-lower-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/to-lower-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/models/employment-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('employment', 'Unit | Model | employment', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('voy-sample-app/tests/unit/models/employment-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/employment-test.js should pass jshint', function() { 
    ok(true, 'unit/models/employment-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/dashboard-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/dashboard-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/dashboard-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/dashboard-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/debt-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:debt', 'Unit | Route | debt', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/debt-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/debt-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/debt-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/employment-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:employment-item', 'Unit | Route | employment item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/employment-item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/employment-item-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/employment-item-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/employment-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:employment', 'Unit | Route | employment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/employment-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/employment-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/employment-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/expenses-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:expenses', 'Unit | Route | expenses', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/expenses-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/expenses-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/expenses-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/pensions-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:pensions', 'Unit | Route | pensions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/pensions-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/pensions-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/pensions-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/property-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:property', 'Unit | Route | property', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/property-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/property-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/property-test.js should pass jshint.'); 
  });

});
define('voy-sample-app/tests/unit/routes/savings-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:savings', 'Unit | Route | savings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('voy-sample-app/tests/unit/routes/savings-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/savings-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/savings-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('voy-sample-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'voy-sample-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("voy-sample-app/tests/test-helper");
} else {
  require("voy-sample-app/app")["default"].create({"name":"voy-sample-app","version":"0.0.0+445b9854"});
}

/* jshint ignore:end */
//# sourceMappingURL=voy-sample-app.map