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
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 40
            }
          },
          "moduleName": "voy-sample-app/templates/employment.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Back to dashboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 3
            },
            "end": {
              "line": 13,
              "column": 3
            }
          },
          "moduleName": "voy-sample-app/templates/employment.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n					[");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#");
          var el3 = dom.createTextNode("edit");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("]\n					[");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"href","#");
          var el3 = dom.createTextNode("delete");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("]\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0,1,1);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [
          ["content","item.name",["loc",[null,[9,5],[9,18]]]],
          ["element","action",["selectItem",["get","item",["loc",[null,[10,40],[10,44]]]]],[],["loc",[null,[10,18],[10,46]]]],
          ["element","action",["deleteItem",["get","item",["loc",[null,[11,40],[11,44]]]]],[],["loc",[null,[11,18],[11,46]]]]
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
            "line": 24,
            "column": 6
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","content-wrapper");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","clearfix");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","list-panel pull-right");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-panel pull-left");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Yearly Salary: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        var el5 = dom.createTextNode("Add");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("Create New");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element5, [7]);
        var element7 = dom.childAt(element3, [3]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [1, 1]),1,1);
        morphs[2] = dom.createMorphAt(element5,1,1);
        morphs[3] = dom.createMorphAt(element5,3,3);
        morphs[4] = dom.createMorphAt(dom.childAt(element5, [5]),1,1);
        morphs[5] = dom.createAttrMorph(element6, 'class');
        morphs[6] = dom.createElementMorph(element6);
        morphs[7] = dom.createAttrMorph(element7, 'class');
        morphs[8] = dom.createElementMorph(element7);
        return morphs;
      },
      statements: [
        ["block","linkTo",["dashboard"],[],0,null,["loc",[null,[2,0],[2,51]]]],
        ["block","each",[["get","controller.model",["loc",[null,[7,11],[7,27]]]]],[],1,null,["loc",[null,[7,3],[13,12]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","controller.content.name",["loc",[null,[17,29],[17,52]]]]],[],[]],"size","50","placeholder","Name"],["loc",[null,[17,3],[17,83]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","controller.content.amt",["loc",[null,[18,29],[18,51]]]]],[],[]],"size","50","placeholder","Monthly Salary"],["loc",[null,[18,3],[18,92]]]],
        ["inline","year-label",[],["monthlyAmount",["subexpr","@mut",[["get","controller.content.amt",["loc",[null,[19,48],[19,70]]]]],[],[]]],["loc",[null,[19,21],[19,72]]]],
        ["attribute","class",["concat",[["subexpr","-bind-attr-class",[["get","controller.isAdding",[]],"is-adding"],[],[]]," ","execute-create"]]],
        ["element","action",["addItem"],[],["loc",[null,[20,11],[20,31]]]],
        ["attribute","class",["concat",[["subexpr","-bind-attr-class",[["get","controller.isAdding",[]],"is-adding"],[],[]]," ","enter-create"]]],
        ["element","action",["addIncomeResource"],[],["loc",[null,[23,9],[23,39]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});