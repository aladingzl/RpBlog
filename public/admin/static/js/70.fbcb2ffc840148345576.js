(self.webpackChunkwall_blog=self.webpackChunkwall_blog||[]).push([[70],{1036:(t,e,r)=>{"use strict";Object.defineProperty(e,"X",{value:!0});var n=i(r(94942)),o=i(r(36803));function i(t){return t&&t.__esModule?t:{default:t}}e.Z={name:"permissionAdd",components:{},data:function(){return{header:"添加管理员",info:{username:"",pwd:"",avatar:"",roles:["default"]},roles:[{label:"超级管理员",value:"admin"},{label:"普通管理员",value:"default"}],loading:!1,rules:{username:[{required:!0,message:"请填写用户名",trigger:"blur"}],pwd:[{required:!0,message:"请填写密码",trigger:"blur"}],roles:[{required:!0,message:"请选择权限",trigger:"change",type:"array"}]}}},methods:{handleSubmit:function(t){var e,r=this;this.loading=!0,this.$refs[t].validate((e=(0,o.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=15;break}return t.prev=1,t.next=4,r.$store.dispatch("addUser",r.info);case 4:r.loading=!1,r.$router.push("/permission/list"),r.$message.success("新增成功"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),r.$message.error("新增失败"),r.loading=!1;case 13:t.next=18;break;case 15:return console.log("error submit!!"),r.loading=!1,t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,r,[[1,9]])}))),function(t){return e.apply(this,arguments)}))}}}},36803:(t,e,r)=>{"use strict";e.__esModule=!0;var n,o=r(46593),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default((function(t,r){return function n(o,a){try{var u=e[o](a),s=u.value}catch(t){return void r(t)}if(!u.done)return i.default.resolve(s).then((function(t){n("next",t)}),(function(t){n("throw",t)}));t(s)}("next")}))}}},52548:(t,e,r)=>{var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(58544),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},58544:t=>{!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",l=e.regeneratorRuntime;if(l)t.exports=l;else{(l=e.regeneratorRuntime=t.exports).wrap=w;var c="suspendedStart",f="suspendedYield",h="executing",p="completed",d={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(P([])));y&&y!==n&&o.call(y,a)&&(v=y);var g=L.prototype=x.prototype=Object.create(v);_.prototype=g.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[u]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(g),g[s]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function w(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=c;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=b(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function L(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,i,a){var u=b(t[r],t,n);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),a)}a(u.arg)}var r;this._invoke=function(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},94942:(t,e,r)=>{t.exports=r(52548)},19070:(t,e,r)=>{"use strict";r.r(e),r.d(e,{__esModule:()=>n.X,default:()=>i});var n=r(1036);const o=n.Z;const i=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"permission-add"},[r("zp-page-edit",{attrs:{back:!0},on:{back:function(e){return t.$router.back()}}},[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.header)+"\n    ")]),t._v(" "),r("el-form",{ref:"form",staticClass:"form",attrs:{model:t.info,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名：",prop:"username"}},[r("el-input",{attrs:{type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密码：",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:t.info.pwd,callback:function(e){t.$set(t.info,"pwd",e)},expression:"info.pwd"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"权限：",prop:"roles"}},[r("el-select",{staticClass:"block",attrs:{multiple:"",placeholder:"请选择"},model:{value:t.info.roles,callback:function(e){t.$set(t.info,"roles",e)},expression:"info.roles"}},t._l(t.roles,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("立即创建")])],1)],1)],1)],1)}),[],!1,null,"886bf838",null).exports}}]);