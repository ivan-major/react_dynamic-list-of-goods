(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r),c=n(5),o=n(6),s=n(7),u=n(10),i=n(8),l=n(3),b=n.n(l),d=n(1),f=n.n(d),j=(n(16),n(0)),m=function(t){var e=t.goods;return Object(j.jsx)("ul",{className:"goods",children:e.map((function(t){return Object(j.jsxs)("li",{style:{color:t.color},children:[t.name," - ",t.color]},t.id)}))})},h=(n(18),n(9));function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(t){return Object(h.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)},O=function(t){return t.filter((function(t){return"red"===t.color}))},v=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.sort=function(){var e=Object(c.a)(b.a.mark((function e(n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:r=e.sent,a=[],e.t0=n,e.next="all"===e.t0?7:"five"===e.t0?9:"red"===e.t0?11:13;break;case 7:return a=r,e.abrupt("break",14);case 9:return a=g(r),e.abrupt("break",14);case 11:return a=O(r),e.abrupt("break",14);case 13:return e.abrupt("break",14);case 14:t.setState({goods:a});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"container__title",children:"Dynamic list of Goods"}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{name:"all",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"All"}),Object(j.jsx)("button",{name:"five",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"5"}),Object(j.jsx)("button",{name:"red",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"Red"})]}),Object(j.jsx)(m,{goods:e})]})}}]),n}(f.a.Component),y=v;a.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.71690d98.chunk.js.map