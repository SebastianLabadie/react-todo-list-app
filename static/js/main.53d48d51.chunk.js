(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),i=(n(15),n(9)),l=n(2),u=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){u.current.focus()}));return o.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t({id:Math.floor(1e3*Math.random()),text:r}),i("")}},o.a.createElement("input",{type:"text",name:"text",placeholder:"Add a todo ",value:r,onChange:function(e){i(e.target.value)},ref:u,className:"todo-input"}),o.a.createElement("button",{type:"submit",className:"todo-btn"},"Add Todo"))},d=n(7),m=n(8),s=function(e){var t=e.todos,n=e.completeTodo,c=e.removeTodo,r=e.updateTodo,i=Object(a.useState)({id:null,text:""}),s=Object(l.a)(i,2),f=s[0],p=s[1];return f.id?o.a.createElement(u,{edit:f,addTodo:function(e){r(f.id,e),p({id:null,text:""})}}):t.map((function(e,t){return o.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:t},o.a.createElement("div",{key:e.id,onClick:function(){return n(e.id)}},e.text),o.a.createElement("div",{className:"icons"},o.a.createElement(d.a,{onClick:function(){return c(e.id)},className:"delete-icon"}),o.a.createElement(m.a,{onClick:function(){return p({id:e.id,text:""})},className:"edit-icon"})))}))},f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"What's the Plane for Today?"),o.a.createElement(u,{addTodo:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(i.a)(n));c(t)}}}),o.a.createElement(s,{todos:n,completeTodo:function(e){var t=n.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));c(t)},removeTodo:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},updateTodo:function(e,t){t&&!/^\s*$/.test(t)&&c((function(n){return n.map((function(n){return n.id===e?n.text=t:n}))}))}}))};var p=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"todo-app"},o.a.createElement(f,null)))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.53d48d51.chunk.js.map