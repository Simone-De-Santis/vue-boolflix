(function(t){function e(e){for(var i,n,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var i={},a={app:0},s=[];function n(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=i,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{on:{listMovies:t.getListMovies,listSeries:t.getListSeries}}),r("Main",{attrs:{listMovies:t.listMovies,listSeries:t.listSeries}}),r("h1",[t._v("titolo originale arrivato al padre {{}}")])],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-light bg-light"},[r("div",{staticClass:"container-fluid"},[r("a",{staticClass:"navbar-brand"},[t._v("Navbar")]),r("div",{staticClass:"d-flex"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.queryUserSearch,expression:"queryUserSearch",modifiers:{trim:!0}}],staticClass:"w-100",attrs:{type:"text",placeholder:"Cerca o inizia una nuova chat..."},domProps:{value:t.queryUserSearch},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.StartSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.queryUserSearch=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:t.StartSearch}},[t._v(" Search ")])])])])},c=[],o=(r("99af"),r("bc3a")),l=r.n(o),u={name:"Header",data:function(){return{baseUri:"https://api.themoviedb.org/3/",typeSearch:"search/movie",apiKey:"?api_key=7df8fb39dc7a1252ca6c3e09b990db4b",queryUserSearch:"pinocchio",listMovies:[],listSeries:[]}},methods:{StartSearch:function(){var t=this;l.a.get("".concat(this.baseUri,"search/tv").concat(this.apiKey,"&query=").concat(this.queryUserSearch)).then((function(e){t.listSeries=e.data.results,t.$emit("listSeries",t.listSeries)})),l.a.get("".concat(this.baseUri).concat(this.typeSearch).concat(this.apiKey,"&query=").concat(this.queryUserSearch)).then((function(e){t.listMovies=e.data.results,t.$emit("listMovies",t.listMovies)}))}},created:function(){}},d=u,p=r("2877"),v=Object(p["a"])(d,n,c,!1,null,"50243921",null),f=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("list di movies")]),r("div",{staticClass:"container d-flex flex-wrap"},t._l(t.listMovies,(function(e,i){return r("div",{key:i,staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:"",alt:"..."}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"},[t._v("Title original:"+t._s(e.original_title))]),r("p",{staticClass:"card-text"},[t._v("Title:"+t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v("Lenguage:"+t._s(e.original_language))]),r("p",{staticClass:"card-text"},[t._v("Vote:"+t._s(e.vote_average))])])])})),0),r("h2",[t._v("list series")]),r("div",{staticClass:"container d-flex flex-wrap"},t._l(t.listSeries,(function(e,i){return r("div",{key:i,staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:"",alt:"..."}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"},[t._v("Title original:"+t._s(e.original_name))]),r("p",{staticClass:"card-text"},[t._v("Title:"+t._s(e.name))]),r("p",{staticClass:"card-text"},[t._v("Lenguage:"+t._s(e.original_language))]),r("p",{staticClass:"card-text"},[t._v("Vote:"+t._s(e.vote_average))])])])})),0)])},y=[],b={name:"Main",data:function(){return{}},props:{listMovies:Array,listSeries:Array},methods:{}},g=b,_=Object(p["a"])(g,h,y,!1,null,null,null),m=_.exports,S={name:"App",components:{Header:f,Main:m},data:function(){return{listMovies:[],listSeries:[]}},methods:{getListMovies:function(t){this.listMovies=t},getListSeries:function(t){this.listSeries=t}}},x=S,C=(r("5c0b"),Object(p["a"])(x,a,s,!1,null,null,null)),M=C.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.f19acc40.js.map