(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"g",function(){return d});var r="ADD_TODO",u="DELETE_TODO",o="EDIT_TODO",a="COMPLETE_TODO",c="COMPLETE_ALL_TODOS",i="CLEAR_COMPLETED",d="SET_VISIBILITY_FILTER"},12:function(e,t,n){"use strict";n.r(t),n.d(t,"addTodo",function(){return u}),n.d(t,"deleteTodo",function(){return o}),n.d(t,"editTodo",function(){return a}),n.d(t,"completeTodo",function(){return c}),n.d(t,"completeAllTodos",function(){return i}),n.d(t,"clearCompleted",function(){return d}),n.d(t,"setVisibilityFilter",function(){return l});var r=n(1),u=function(e){return{type:r.a,text:e}},o=function(e){return{type:r.e,id:e}},a=function(e,t){return{type:r.f,id:e,text:t}},c=function(e){return{type:r.d,id:e}},i=function(){return{type:r.c}},d=function(){return{type:r.b}},l=function(e){return{type:r.g,filter:e}}},14:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return o});var r="show_all",u="show_completed",o="show_active"},17:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(18),u=n(19),o=n(24),a=n(20),c=n(23),i=n(0),d=n.n(i),l=n(13),s=n.n(l),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var u=arguments.length,c=new Array(u),i=0;i<u;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(c)))).state={text:n.props.text||""},n.handleSubmit=function(e){var t=e.target.value.trim();13===e.which&&(n.props.onSave(t),n.props.newTodo&&n.setState({text:""}))},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleBlur=function(e){n.props.newTodo||n.props.onSave(e.target.value)},n}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return d.a.createElement("input",{className:s()({edit:this.props.editing,"new-todo":this.props.newTodo}),type:"text",placeholder:this.props.placeholder,autoFocus:!0,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})}}]),t}(i.Component)},27:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var r=n(0),u=n.n(r),o=n(6),a=n(5),c=n(11),i=n.n(c),d=n(26),l=n(17),s=function(e){var t=e.addTodo;return u.a.createElement("header",{className:"header"},u.a.createElement("h1",null,"todos"),u.a.createElement(l.a,{newTodo:!0,onSave:function(e){0!==e.length&&t(e)},placeholder:"What needs to be done?"}))},f=n(12),p=Object(a.b)(null,{addTodo:f.addTodo})(s),h=n(3),b=n(21),v=n(1),T=n(14),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.g:return t.filter;default:return e}},O=function(e){return Object(h.b)(Object(b.a)({visibilityFilter:E},e))},m=Object(h.c)(O());var y=m,w=u.a.lazy(function(){return n.e(3).then(n.bind(null,39)).then(function(){var e=Object(d.a)(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4).then(n.bind(null,40)).then(function(e){return e.default});case 2:return r=e.sent,y.injectReducer("todos",r),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}),g=function(){return u.a.createElement(u.a.Suspense,{fallback:u.a.createElement("div",null,"loading...")},u.a.createElement(p,null),u.a.createElement(w,null))};n(37);Object(o.render)(u.a.createElement(a.a,{store:(m.asyncReducers={},m.injectReducer=function(e,t){m.asyncReducers[e]=t,m.replaceReducer(O(m.asyncReducers))},m)},u.a.createElement(g,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.39b685ad.chunk.js.map