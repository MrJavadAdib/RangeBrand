(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4l63":function(t,e,a){var n=a("I+eb"),r=a("wg0c");n({global:!0,forced:parseInt!=r},{parseInt:r})},EJ6R:function(t,e,a){"use strict";a("rSZ9")},Kl3s:function(t,e,a){},MhGd:function(t,e,a){},Rm1S:function(t,e,a){"use strict";var n=a("14Sl"),r=a("glrk"),i=a("UMSQ"),s=a("HYAF"),l=a("iqWW"),o=a("FMNM");n("match",1,(function(t,e,a){return[function(e){var a=s(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var s=r(t),c=String(this);if(!s.global)return o(s,c);var u=s.unicode;s.lastIndex=0;for(var p,d=[],f=0;null!==(p=o(s,c));){var h=String(p[0]);d[f]=h,""===h&&(s.lastIndex=l(c,i(s.lastIndex),u)),f++}return 0===f?null:d}]}))},Rngc:function(t,e,a){"use strict";a.r(e);var n={props:{value:{type:String,default:""}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},r=a("KHd+"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-2 py-8"},[a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"block w-full white border border-rb-violet-200 focus:border-rb-violet-500 rounded-full pl-8 pr-14 py-2 outline-none",attrs:{type:"text",placeholder:"جستجو"},domProps:{value:t.inputVal},on:{input:function(e){e.target.composing||(t.inputVal=e.target.value)}}}),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"inline-block text-3xl transform -rotate-45 absolute top-0 right-0"},[e("div",{staticClass:"px-5 py-1 text-rb-violet-500 select-none"},[this._v("\n                ⚲\n            ")])])}],!1,null,null,null).exports,s=(a("2B1R"),a("4l63"),a("rB9j"),a("Rm1S"),a("ODXe")),l=function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},o={props:{brand:{type:Object,default:function(){return{}},require:!0}},methods:{isLight:function(t){var e=t.match(/.{1,2}/g).map((function(t){return parseInt(t,16)/255})),a=Object(s.a)(e,3),n=a[0],r=a[1],i=a[2];return function(t){return t<=216/24389?t*(24389/27):116*Math.pow(t,1/3)-16}(.2126*l(n)+.7152*l(r)+.0722*l(i))>60},copyToClipboard:function(t){var e=this;navigator.clipboard.writeText("#".concat(t.toUpperCase())).then((function(){e.$toasted.show("کپی شد!")}),(function(t){console.error("Could not copy text: ",t)}))}}},c=(a("kiDJ"),{components:{BrandItem:Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand__wrapper"},[a("ul",{staticClass:"brand__color__wrapper"},t._l(t.brand.node.colors,(function(e){return a("li",{key:""+t.brand.node.path.replace(/\//g,"_")+e,staticClass:"brand__color smooth-transition",style:{backgroundColor:"#"+e}},[a("code",{staticClass:"brand__color__code smooth-transition",class:t.isLight(e)?"text-black":"text-white",attrs:{dir:"ltr"},on:{click:function(a){return t.copyToClipboard(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])])})),0),a("div",{staticClass:"px-3 py-3"},[a("span",{staticClass:"text-black text-opacity-80"},[a("strong",[t._v("\n                "+t._s(t.brand.node.title)+"\n            ")])])])])}),[],!1,null,"4960197c",null).exports},props:{brands:{type:Array,default:function(){return[]},required:!0}}}),u=(a("EJ6R"),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",this._l(this.brands,(function(t){return e("li",{key:t.node.id},[e("brand-item",{attrs:{brand:t}})],1)})),0),this._t("default")],2)}),[],!1,null,"7277013d",null).exports),p=(a("Kw5r"),a("DOVJ")),d=(a("Y6W1"),a("ma9I"),a("qePV"),a("UxlC"),a("VTBJ")),f=a("fVfk"),h={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,n=e.data,r=e.parent,i=a.info,s=a.showLinks,l=a.showNavigation,o=a.ariaLabel,c=function(t,e){var a=t.currentPage,n=void 0===a?1:a,r=t.totalPages,i=void 0===r?1:r,s=Math.ceil(e/2),l=Math.floor(n-s),o=Math.floor(n+s);i<=e?(l=0,o=i):n<=s?(l=0,o=e):n+s>=i&&(l=i-e,o=i);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:n,total:i,start:l,end:o,pages:c}}(i,a.range),u=c.current,h=c.total,b=c.pages,g=c.start,m=c.end,x=Object(f.d)(r.$route),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===u&&(r=a.ariaCurrentLabel);var s={to:v(x,e),exact:!0};return a.activeLinkClass&&(s.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(s.exactActiveClass=a.exactActiveLinkClass),t(p.a,{class:[a.linkClass,i],attrs:Object(d.a)(Object(d.a)({},s),{},{"aria-label":r.replace("%n",e),"aria-current":u===e})},[n])},C=s?b.map((function(t){return y(t,t,a.ariaLinkLabel)})):[];if(l){var L=a.firstLabel,S=a.prevLabel,_=a.nextLabel,k=a.lastLabel,w=a.ariaFirstLabel,j=a.ariaPrevLabel,O=a.ariaNextLabel,P=a.ariaLastLabel,$=a.firstClass,I=a.prevClass,T=a.nextClass,J=a.lastClass,M=a.navClass;u>1&&C.unshift(y(u-1,S,j,[I,M])),g>0&&C.unshift(y(1,L,w,[$,M])),u<h&&C.push(y(u+1,_,O,[T,M])),m<h&&C.push(y(h,k,P,[J,M]))}return C.length<2?null:t("nav",Object(d.a)(Object(d.a)({},n),{},{attrs:{role:"navigation","aria-label":o}}),C)}};function v(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(f.g)(t)+"/".concat(e).concat(a):t}a("6NbQ");var b={components:{Pager:h},props:{info:{type:Object,default:function(){return{}}}}},g=(a("Xj9W"),{components:{BrandsList:u,Search:i,Pagination:Object(r.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pagination",attrs:{dir:"ltr"}},[e("Pager",{staticClass:"flex-center justify-center flex-row-reverse",attrs:{info:this.info,"next-label":"‹","first-label":"»","prev-label":"›","last-label":"«","link-class":"link smooth-transition flex-center justify-center"}})],1)}),[],!1,null,"f92ad136",null).exports},mixins:[{data:()=>({searchTerm:""}),computed:{searchResults(){const t=this.searchTerm;return t.length<3?[]:this.$search.search({query:t,limit:8})}},watch:{$route(t,e){this.searchTerm=""}}}],computed:{hasSearch:function(){return this.searchTerm.length>2},brands:function(){return this.hasSearch?this.searchResults:this.$page.brands.edges}},metaInfo:{title:"برندها"}}),m=null,x=Object(r.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"container mx-auto px-4"},[a("Search",{model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),a("brands-list",{attrs:{brands:t.brands}},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:!t.hasSearch,expression:"!hasSearch"}],attrs:{info:t.$page.brands.pageInfo}})],1)],1)])}),[],!1,null,null,null);"function"==typeof m&&m(x);e.default=x.exports},Xj9W:function(t,e,a){"use strict";a("MhGd")},kiDJ:function(t,e,a){"use strict";a("Kl3s")},rSZ9:function(t,e,a){},wg0c:function(t,e,a){var n=a("2oRo"),r=a("WKiH").trim,i=a("WJkJ"),s=n.parseInt,l=/^[+-]?0[Xx]/,o=8!==s(i+"08")||22!==s(i+"0x16");t.exports=o?function(t,e){var a=r(String(t));return s(a,e>>>0||(l.test(a)?16:10))}:s}}]);