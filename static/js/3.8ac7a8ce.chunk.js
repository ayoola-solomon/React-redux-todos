(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{39:function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(12),c=n(3),l=n(0),i=n.n(l),u=n(22),s=n(13),d=n.n(s),f=function(e){var t=e.active,n=e.children,r=e.setFilter;return i.a.createElement("a",{className:d()({selected:t}),style:{cursor:"pointer"},onClick:function(){return r()}},n)},p=Object(o.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{setFilter:function(){e(Object(a.setVisibilityFilter)(t.filter))}}})(f),m=n(14),b=(r={},Object(u.a)(r,m.b,"All"),Object(u.a)(r,m.a,"Active"),Object(u.a)(r,m.c,"Completed"),r),h=function(e){var t=e.activeCount,n=e.completedCount,r=e.onClearCompleted,o=1===t?"item":"items";return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",{className:"todo-count"},i.a.createElement("strong",null,t||"No")," ",o," left"),i.a.createElement("ul",{className:"filters"},Object.keys(b).map(function(e){return i.a.createElement("li",{key:e},i.a.createElement(p,{filter:e},b[e]))})),!!n&&i.a.createElement("button",{className:"clear-completed",onClick:r},"Clear completed"))},v=n(18),y=n(19),g=n(24),C=n(20),E=n(23),k=n(17),j=function(e){function t(){var e,n;Object(v.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(g.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).state={editing:!1},n.handleDoubleClick=function(){n.setState({editing:!0})},n.handleSave=function(e,t){0===t.length?n.props.deleteTodo(e):n.props.editTodo(e,t),n.setState({editing:!1})},n}return Object(E.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.todo,o=n.completeTodo,a=n.deleteTodo;return e=this.state.editing?i.a.createElement(k.a,{text:r.text,editing:this.state.editing,onSave:function(e){return t.handleSave(r.id,e)}}):i.a.createElement("div",{className:"view"},i.a.createElement("input",{className:"toggle",type:"checkbox",checked:r.completed,onChange:function(){return o(r.id)}}),i.a.createElement("label",{onDoubleClick:this.handleDoubleClick},r.text),i.a.createElement("button",{className:"destroy",onClick:function(){return a(r.id)}})),i.a.createElement("li",{className:d()({completed:r.completed,editing:this.state.editing})},e)}}]),t}(l.Component),O=function(e){var t=e.filteredTodos,n=e.actions;return i.a.createElement("ul",{className:"todo-list"},t.map(function(e){return i.a.createElement(j,Object.assign({key:e.id,todo:e},n))}))};function w(e,t){return e===t}var N=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,c=r.pop(),l=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"===typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),i=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(n)),u=e(function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return i.apply(null,e)});return u.resultFunc=c,u.dependencies=l,u.recomputations=function(){return a},u.resetRecomputations=function(){return a=0},u}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}});var A=function(e){return e.todos},T=N([function(e){return e.visibilityFilter},A],function(e,t){switch(e){case m.b:return t;case m.c:return t.filter(function(e){return e.completed});case m.a:return t.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+e)}}),x=N([A],function(e){return e.reduce(function(e,t){return t.completed?e+1:e},0)}),F=Object(o.b)(function(e){return{filteredTodos:T(e)}},function(e){return{actions:Object(c.a)(a,e)}})(O),S=function(e){var t=e.todosCount,n=e.completedCount,r=e.actions;return i.a.createElement("section",{className:"main"},!!t&&i.a.createElement("span",null,i.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:n===t,readOnly:!0}),i.a.createElement("label",{onClick:r.completeAllTodos})),i.a.createElement(F,null),!!t&&i.a.createElement(h,{completedCount:n,activeCount:t-n,onClearCompleted:r.clearCompleted}))};t.default=Object(o.b)(function(e){return{todosCount:e.todos.length,completedCount:x(e)}},function(e){return{actions:Object(c.a)(a,e)}})(S)}}]);
//# sourceMappingURL=3.8ac7a8ce.chunk.js.map