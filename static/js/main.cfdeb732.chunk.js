(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(4),s=n.n(o),r=n(5),c=n(6),a=n(7),i=n(10),u=n(8),l=n(3),d=n.n(l),f=n(1),h=n.n(f),b=(n(16),n(0)),m=function(t){var e=t.goods;return Object(b.jsx)("ul",{className:"goods",children:e.map((function(t){return Object(b.jsxs)("li",{style:{color:t.color},children:[t.name," - ",t.color]},t.id)}))})},j=(n(18),n(9));var p=function(t){return Object(j.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)},g=function(t){return t.filter((function(t){return"red"===t.color}))},v=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={goods:[],showGoods:[]},t.sort=function(e){switch(e){case"all":t.setState((function(t){return{goods:t.showGoods}}));break;case"five":t.setState((function(t){return{goods:p(t.showGoods)}}));break;case"red":t.setState((function(t){return{goods:g(t.showGoods)}}))}},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=Object(r.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}));case 2:e=t.sent,this.setState({showGoods:e}),this.setState({goods:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.goods;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"container__title",children:"Dynamic list of Goods"}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{name:"all",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"All"}),Object(b.jsx)("button",{name:"five",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"5"}),Object(b.jsx)("button",{name:"red",type:"button",className:"button",onClick:function(e){t.sort(e.currentTarget.name)},children:"Red"})]}),Object(b.jsx)(m,{goods:e})]})}}]),n}(h.a.Component),O=v;s.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cfdeb732.chunk.js.map