(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var i=s(1),n=s.n(i),a=s(3),r=s.n(a),o=(s(12),s(4)),c=s(5),l=s(7),u=s(6),d=(s(13),s(0)),p=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;return Object(o.a)(this,s),(t=e.call(this)).isEditing=function(e){t.state.isEditing?t.submit(e):t.setState({isEditing:!0})},t.getInput=function(e){t.setState({input:e.target.value})},t.submit=function(e){if(e.preventDefault(),0===t.state.input.length)return alert("Pls enter something!"),0;var s={id:(new Date).getTime(),text:t.state.input,isComplete:!1};t.setState({items:t.state.items.concat(s),input:""},(function(){return t.setProgress(t.state.items)}))},t.isDone=function(e){var s=t.state.items.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));t.setState({items:s},(function(){return t.setProgress(t.state.items)}))},t.delete=function(e){var s=t.state.items.filter((function(t){return t.id!==e}));t.setState({items:s},(function(){return t.setProgress(t.state.items)}))},t.setProgress=function(e){var s=e.filter((function(t){return t.isComplete})),i=e.length?Math.floor(s.length/e.length*100):0;t.setState({progress:i})},t.state={items:[],input:"",isEditing:!1,progress:0},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("items"));null!=t&&(this.setState({items:t}),this.setState({progress:localStorage.getItem("progress")}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("items",JSON.stringify(this.state.items)),localStorage.setItem("progress",this.state.progress)}},{key:"render",value:function(){var t=this,e=this.state,s=e.items,i=e.input,n=e.isEditing;return Object(d.jsxs)("form",{className:"todo-list",onSubmit:this.submit,children:[Object(d.jsx)("div",{class:"progress",children:Object(d.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:this.state.progress+"%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:this.state.progress+"%"})}),s.length?s.map((function(e){return Object(d.jsxs)("div",{className:"todo-wrap",children:[Object(d.jsxs)("span",{onClick:function(){return t.isDone(e.id)},children:[Object(d.jsx)("input",{type:"checkbox",checked:e.isComplete}),Object(d.jsx)("label",{className:"todo",children:e.text})]}),Object(d.jsx)("span",{className:"delete-item",title:"remove",onClick:function(){return t.delete(e.id)},children:Object(d.jsx)("i",{className:"fa fa-times-circle"})})]},e.id)})):Object(d.jsx)("p",{}),n?Object(d.jsx)("div",{className:"todo-wrap",children:Object(d.jsx)("input",{id:"input-box",onChange:this.getInput,value:i})}):Object(d.jsx)("p",{}),Object(d.jsxs)("div",{id:"add-todo",onClick:this.isEditing,children:[Object(d.jsx)("i",{className:"fa fa-plus"}),"\xa0 Add an item"]})]})}}]),s}(i.Component),m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;s(t),i(t),n(t),a(t),r(t)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.d93521b0.chunk.js.map