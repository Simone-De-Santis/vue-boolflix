(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},a={app:0},n=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{on:{listMovies:e.getListMovies,listSeries:e.getListSeries}}),r("Main",{attrs:{listMovies:e.listMovies,listSeries:e.listSeries}}),r("h1",[e._v("titolo originale arrivato al padre {{}}")])],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-light bg-light"},[r("div",{staticClass:"container-fluid"},[r("a",{staticClass:"navbar-brand"},[e._v("Navbar")]),r("div",{staticClass:"d-flex"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.queryUserSearch,expression:"queryUserSearch",modifiers:{trim:!0}}],staticClass:"w-100",attrs:{type:"text",placeholder:"Cerca o inizia una nuova chat..."},domProps:{value:e.queryUserSearch},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.StartSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.queryUserSearch=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:e.StartSearch}},[e._v(" Search ")])])])])},o=[],l=(r("99af"),r("bc3a")),c=r.n(l),u={name:"Header",data:function(){return{baseUri:"https://api.themoviedb.org/3/",typeSearch:"search/movie",apiKey:"?api_key=7df8fb39dc7a1252ca6c3e09b990db4b",queryUserSearch:"pinocchio",listMovies:[],listSeries:[]}},methods:{StartSearch:function(){var e=this;c.a.get("".concat(this.baseUri).concat(this.typeSearch).concat(this.apiKey,"&query=").concat(this.queryUserSearch)).then((function(t){e.listMovies=t.data.results,e.$emit("listMovies",e.listMovies)})),c.a.get("".concat(this.baseUri,"search/tv").concat(this.apiKey,"&query=").concat(this.queryUserSearch)).then((function(t){e.listSeries=t.data.results,e.$emit("listSeries",e.listSeries)}))}},created:function(){}},p=u,d=r("2877"),f=Object(d["a"])(p,s,o,!1,null,"f61ec89e",null),v=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("list di movies")]),r("div",{staticClass:"container d-flex flex-wrap"},e._l(e.listMovies,(function(e,t){return r("Card",{key:t,attrs:{Titleoriginal:e.original_title,Title:e.title,Lenguage:e.original_language,Vote:e.vote_average}})})),1),r("h2",[e._v("list series")]),r("div",{staticClass:"container d-flex flex-wrap"},e._l(e.listSeries,(function(e,t){return r("Card",{key:t,attrs:{Titleoriginal:e.original_name,Title:e.name,Lenguage:e.original_language,Vote:e.vote_average}})})),1)])},g=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:"",alt:"..."}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"},[e._v("Title original:"+e._s(e.Titleoriginal))]),r("p",{staticClass:"card-text"},[e._v("Title:"+e._s(e.Title))]),r("p",{staticClass:"card-text"},[e._v("Lenguage:"+e._s(e.Lenguage))]),r("p",{staticClass:"card-text"},[e._v("Vote:"+e._s(e.Vote))])])])},y=[],m=(r("a9e3"),{name:"Card",props:{Titleoriginal:String,Title:String,Lenguage:String,Vote:Number}}),S=m,_=Object(d["a"])(S,b,y,!1,null,null,null),x=_.exports,C={name:"Main",components:{Card:x},data:function(){return{}},props:{listMovies:Array,listSeries:Array},methods:{}},M=C,w=Object(d["a"])(M,h,g,!1,null,null,null),O=w.exports,j={name:"App",components:{Header:v,Main:O},data:function(){return{listMovies:[],listSeries:[]}},methods:{getListMovies:function(e){this.listMovies=e},getListSeries:function(e){this.listSeries=e}}},T=j,k=(r("5c0b"),Object(d["a"])(T,a,n,!1,null,null,null)),U=k.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(U)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.3c003832.js.map