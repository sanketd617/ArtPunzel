(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(54)},40:function(e,t,a){},41:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),r=a.n(c),l=(a(39),a(3)),s=a(4),o=a(6),m=a(5),p=a(7),u=(a(40),a(41),a(10)),g=a(24),b=a(16),d=a(19),f=a(17),j=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"category"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"/images/"+this.props.image,alt:""})),i.a.createElement("div",{className:"title"},this.props.title)))}}]),t}(i.a.Component)),O=a(13);g.a.library.add(b.a,f.a,f.e,f.b,f.f,f.c,f.d);var E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav-content"},i.a.createElement("div",{className:"brand"},"ArtPunzel"),i.a.createElement("div",{className:"arrow "+(this.props.isOpen?"rotated":""),onClick:this.props.toggle},i.a.createElement(u.a,{icon:"chevron-down"})),i.a.createElement("div",{className:"links "+(this.props.isOpen?"open":"")},i.a.createElement(O.b,{to:"/"},"Home"),this.props.categories.map((function(e,t){return i.a.createElement(O.b,{to:e.link,key:t},e.title)})),i.a.createElement("div",{className:"social"},i.a.createElement("div",{className:"title"},"Follow us on"),i.a.createElement("div",{className:"social-btns"},i.a.createElement("a",{href:"#"}," ",i.a.createElement(u.a,{icon:["fab","facebook"],size:"2x"})," "),i.a.createElement("a",{href:"#"}," ",i.a.createElement(u.a,{icon:["fab","instagram"],size:"2x"})," "))),i.a.createElement("div",{className:"dev"},i.a.createElement("div",{className:"title"},"Developer"),i.a.createElement("div",{className:"dev-name"},"Sanket Dahegaonkar"),i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"#"},i.a.createElement(u.a,{icon:["fab","linkedin"],size:"lg"})),i.a.createElement("a",{href:"#"},i.a.createElement(u.a,{icon:["fab","github"],size:"lg"})),i.a.createElement("a",{href:"#"},i.a.createElement(u.a,{icon:["fab","gitlab"],size:"lg"})),i.a.createElement("a",{href:"#"},i.a.createElement(u.a,{icon:["fab","facebook"],size:"lg"})),i.a.createElement("a",{href:"#"},i.a.createElement(u.a,{icon:["fab","hackerrank"],size:"lg"}))))))}}]),t}(i.a.Component),h=Object(d.b)((function(e){return{isOpen:e.nav.isOpen}}),(function(e){return{toggle:function(){e({type:"TOGGLE_NAV",payload:null})}}}))(E),v=(a(51),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"categories"},this.props.categories.map((function(e,t){return i.a.createElement(O.b,{to:"/gallery/"+e.link,key:t},i.a.createElement(j,{title:e.title,image:e.image}))})))}}]),t}(i.a.Component)),k=a(15);a(52),a(53);g.a.library.add(b.c,b.b);var y=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"/images/"+this.props.sketch.image,alt:""})),"# ",this.props.sketch.id,i.a.createElement("span",{className:"action"},i.a.createElement(u.a,{icon:b.b})),i.a.createElement("span",{className:"action"},i.a.createElement(u.a,{icon:b.c})))}}]),t}(i.a.Component),N=[{image:"one.jpg",id:"1",likes:100,comments:56},{image:"two.jpg",id:"2",likes:100,comments:56},{image:"three.jpg",id:"3",likes:100,comments:56},{image:"four.jpg",id:"4",likes:100,comments:56},{image:"ten.jpg",id:"5",likes:100,comments:56},{image:"nine.jpg",id:"6",likes:100,comments:56},{image:"seven.jpg",id:"7",likes:100,comments:56},{image:"eight.jpg",id:"8",likes:100,comments:56},{image:"one.jpg",id:"1",likes:100,comments:56},{image:"two.jpg",id:"2",likes:100,comments:56},{image:"three.jpg",id:"3",likes:100,comments:56},{image:"four.jpg",id:"4",likes:100,comments:56},{image:"ten.jpg",id:"5",likes:100,comments:56},{image:"nine.jpg",id:"6",likes:100,comments:56},{image:"seven.jpg",id:"7",likes:100,comments:56},{image:"eight.jpg",id:"8",likes:100,comments:56}],w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"gallery"},N.map((function(e,t){return i.a.createElement(O.b,{to:"/sketch/"+e.id,key:t},i.a.createElement(y,{sketch:e}))})))}}]),t}(i.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Error")}}]),t}(i.a.Component),P=[{title:"All",image:"one.jpg",link:"all"},{title:"Singles",image:"two.jpg",link:"singles"},{title:"Couples",image:"three.jpg",link:"couples"},{title:"Black & White",image:"four.jpg",link:"black-n-white"},{title:"Miscellaneous",image:"seven.jpg",link:"misc"}],z=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(O.a,null,i.a.createElement("div",{className:"nav "+(this.props.isNavOpen?"opened":"")},i.a.createElement(h,{categories:P})),i.a.createElement("div",{className:"main"},i.a.createElement(k.c,null,i.a.createElement(k.a,{path:"/gallery"},i.a.createElement(w,null)),i.a.createElement(k.a,{path:"/",exact:!0},i.a.createElement(v,{categories:P})),i.a.createElement(k.a,null,i.a.createElement(C,null)))))}}]),t}(i.a.Component),D=Object(d.b)((function(e){return{isNavOpen:e.nav.isOpen}}),(function(e){return{}}))(z),x=a(21),A=a(33);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B={isOpen:!1},J=Object(x.c)(Object(x.b)({nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAV":e=S({},e,{isOpen:!e.isOpen});break;default:e=S({},e)}return e}}));r.a.render(i.a.createElement(d.a,{store:J},i.a.createElement(D,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.93c551a7.chunk.js.map