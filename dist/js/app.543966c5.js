(function(i){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],I=0,f=[];I<o.length;I++)s=o[I],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var i,t=0;t<a.length;t++){for(var e=a[t],n=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),i=s(s.s=e[0]))}return i}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=i,s.c=n,s.d=function(i,t,e){s.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,t){if(1&t&&(i=s(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var n in i)s.d(e,n,function(t){return i[t]}.bind(null,n));return e},s.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(t,"a",t),t},s.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"08db":function(i,t){i.exports="data:image/png;base64,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"},"3d89":function(i,t,e){},"56d7":function(i,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("Search",{attrs:{placeholder:"Search title..,",buttonText:"Search"},on:{search:i.getQuery}}),e("Results",{attrs:{items:i.listMovies,id:"film",title:"Film"}}),e("Results",{attrs:{items:i.listSeries,id:"serie",title:"Serie TV"}}),e("section",{})],1)},a=[],s=(e("99af"),function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("nav",{staticClass:"navbar navbar-light bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand",attrs:{id:"my-navbar-brand"}},[i._v("Boolfix")]),e("div",{staticClass:"d-flex"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:i.userValue,expression:"userValue",modifiers:{trim:!0}}],staticClass:"w-100",attrs:{type:"text",placeholder:i.placeholder},domProps:{value:i.userValue},on:{keyup:function(t){return!t.type.indexOf("key")&&i._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.emitSearch.apply(null,arguments)},input:function(t){t.target.composing||(i.userValue=t.target.value.trim())},blur:function(t){return i.$forceUpdate()}}}),e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"submit"},on:{click:i.emitSearch}},[i._v(" "+i._s(i.buttonText||"Search")+" ")])])])])}),o=[],c={name:"Search",props:["placeholder","buttonText"],data:function(){return{userValue:""}},methods:{emitSearch:function(){this.$emit("search",this.userValue)}}},l=c,u=(e("93a1"),e("2877")),I=Object(u["a"])(l,s,o,!1,null,"142f0660",null),f=I.exports,p=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"container"},[e("h2",[i._v(i._s(i.title))]),e("section",{staticClass:"row row-cols-1 row-cols-md-4 g-4",attrs:{id:i.id}},i._l(i.items,(function(i){return e("div",{key:i.id},[e("Cardss",{attrs:{item:i}})],1)})),0)])},A=[],v=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"col"},[e("div",{staticClass:"card text-white bg-dark"},[e("img",{staticClass:"card-img-top",attrs:{src:i.imagePath,alt:"..."}}),e("div",{staticClass:"card-img-overlay my-overflow"},[e("p",{staticClass:"card-text"},[i._v(" Title original : "+i._s(i.item.original_title||i.item.original_name)+" ")]),e("p",{staticClass:"card-text"},[i._v("Title : "+i._s(i.item.title||i.item.name))]),e("p",{staticClass:"card-text"},[i._v("Overview : "+i._s(i.item.overview))]),e("p",[i.flags.includes(i.item.original_language)?e("img",{staticClass:"flag",attrs:{src:i.getFlag(i.item.original_language),alt:i.item.original_language}}):e("img",{staticClass:"flag",attrs:{src:i.getFlag("not-flag"),alt:i.item.original_language}})]),i._m(0),e("p",{staticClass:"card-text"})])])])},g=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("section",{staticClass:"star"},[e("p")])}],d={name:"Cardss",props:["item"],data:function(){return{flags:["en","it"],baseUriPoster:"https://image.tmdb.org/t/p/w342"}},methods:{getFlag:function(i){return e("99f6")("./".concat(i,".png"))}},computed:{imagePath:function(){return this.item.poster_path?this.baseUriPoster+this.item.poster_path:"https://www.altavod.com/assets/images/poster-placeholder.png"}}},m=d,h=(e("588a"),Object(u["a"])(m,v,g,!1,null,null,null)),b=h.exports,w={name:"Results",components:{Cardss:b},props:["id","title","items"]},C=w,y=e("e662"),E=e.n(y),x=Object(u["a"])(C,p,A,!1,null,null,null);"function"===typeof E.a&&E()(x);var O=x.exports,j=e("bc3a"),M=e.n(j),P={name:"App",components:{Search:f,Results:O},data:function(){return{listMovies:[],listSeries:[],api:{baseUri:"https://api.themoviedb.org/3/",typeSearch:"search/movie",apiKey:"?api_key=7df8fb39dc7a1252ca6c3e09b990db4b"}}},methods:{getQuery:function(i){i?(this.fetchApi(i,"search/movie","listMovies"),this.fetchApi(i,"search/tv","listSeries")):this.listMovies=this.series=[]},fetchApi:function(i,t,e){var n=this,r={params:{query:i,api_key:"7df8fb39dc7a1252ca6c3e09b990db4b",language:"it-IT"}};M.a.get("".concat(this.api.baseUri).concat(t),r).then((function(i){n[e]=i.data.results})).catch((function(i){console.error(i)}))}}},S=P,B=(e("5c0b"),Object(u["a"])(S,r,a,!1,null,null,null)),F=B.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(F)}}).$mount("#app")},"588a":function(i,t,e){"use strict";e("3d89")},"5c0b":function(i,t,e){"use strict";e("9c0c")},"630f":function(i,t,e){},6495:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},"93a1":function(i,t,e){"use strict";e("630f")},"99f6":function(i,t,e){var n={"./en.png":"08db","./it.png":"6495","./not-flag.png":"d5f2"};function r(i){var t=a(i);return e(t)}function a(i){if(!e.o(n,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=a,i.exports=r,r.id="99f6"},"9c0c":function(i,t,e){},d5f2:function(i,t,e){i.exports=e.p+"img/not-flag.aa5d60e0.png"},e662:function(i,t){}});
//# sourceMappingURL=app.543966c5.js.map