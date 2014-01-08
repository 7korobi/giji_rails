/**
 * @license
 * Lo-Dash 2.3.0 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */

;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){var e=n.m,r=t.m;if(e!==r){if(e>r||typeof e=="undefined")return 1;if(e<r||typeof r=="undefined")return-1}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+V[n]}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}
}function l(n){n.length=0,h.length<b&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<b&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n){if(!n||ve.call(n)!=q)return false;var t=n.valueOf,e=typeof t=="function"&&(e=be(t))&&be(e);return e?n==e||be(n)==e:yt(n)}function g(n,t,e){if(!n||!U[typeof n])return n;t=t&&typeof e=="undefined"?t:ut(t,e,3);
for(var r=-1,u=U[typeof n]&&ze(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function b(n,t,e){var r;if(!n||!U[typeof n])return n;t=t&&typeof e=="undefined"?t:ut(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function V(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&U[typeof u])for(var l=-1,c=U[typeof u]&&ze(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);return o}function H(n,t,e){var r,u=n,o=u;
if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=ut(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&U[typeof u])for(var c=-1,p=U[typeof u]&&ze(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function J(n){var t,e=[];if(!n||!U[typeof n])return e;for(t in n)de.call(n,t)&&e.push(t);return e}function Z(n){return n&&typeof n=="object"&&!qe(n)&&de.call(n,"__wrapped__")?n:new nt(n)}function nt(n,t){this.__chain__=!!t,this.__wrapped__=n
}function tt(n){function t(){if(r){var n=r.slice();je.apply(n,arguments)}if(this instanceof t){var o=rt(e.prototype),n=e.apply(o,n||arguments);return kt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return We(t,n),t}function et(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!kt(n))return n;var i=ve.call(n);if(!K[i])return n;var f=Te[i];switch(i){case F:case T:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=qe(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):H({},n);return i&&(de.call(n,"index")&&(o.index=n.index),de.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?Rt:g)(n,function(n,i){o[i]=et(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function rt(n){return kt(n)?Ie(n):{}}function ut(n,t,e){if(typeof n!="function")return Qt;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(Be.funcNames&&(r=!n.name),r=r||!Be.funcDecomp,!r)){var u=_e.call(n);
Be.funcNames||(r=!O.test(u)),r||(r=E.test(u),We(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Gt(n,t)}function ot(n){function t(){var n=f?i:this;if(u){var h=u.slice();je.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&je.apply(h,o),c&&h.length<a)?(r|=16,ot([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=rt(e.prototype),h=e.apply(n,h),kt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return We(t,n),t}function it(e,r){var u=-1,i=gt(),a=e?e.length:0,f=a>=_&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function at(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(qe(i)||_t(i))){t||(i=at(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ft(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&U[typeof n]||t&&U[typeof t]))return false;if(null==n||null==t)return n===t;var f=ve.call(n),c=ve.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case F:case T:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==fe(t)}if(c=f==$,!c){var p=de.call(n,"__wrapped__"),s=de.call(t,"__wrapped__");if(p||s)return ft(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(jt(f)&&f instanceof f&&jt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(p=!u,u||(u=a()),o||(o=a()),f=u.length;f--;)if(u[f]==n)return o[f]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(f=n.length,v=t.length,i=v==n.length,!i&&!r)return i;for(;v--;)if(c=f,p=t[v],r)for(;c--&&!(i=ft(n[c],p,e,r,u,o)););else if(!(i=ft(n[v],p,e,r,u,o)))break;return i}return b(t,function(t,a,f){return de.call(f,a)?(v++,i=de.call(n,a)&&ft(n[a],t,e,r,u,o)):void 0
}),i&&!r&&b(n,function(n,t,e){return de.call(e,t)?i=-1<--v:void 0}),p&&(l(u),l(o)),i}function lt(n,t,e,r,u){(qe(t)?Rt:g)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=qe(t))||h(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?qe(l)?l:[]:h(l)?l:{}),r.push(t),u.push(l),c||lt(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function ct(n,t){return n+me(Fe()*(t-n+1))}function pt(e,r,u){var i=-1,f=gt(),p=e?e.length:0,s=[],v=!r&&p>=_&&f===n,h=u||v?a():s;
if(v){var g=o(h);g?(f=t,h=g):(v=false,h=u?h:(l(h),s))}for(;++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function st(n){return function(t,e,r){var u={};e=Z.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else g(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function vt(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||jt(n)))throw new le;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=c.slice(),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&je.apply(c[2]||(c[2]=[]),e),l&&je.apply(c[3]||(c[3]=[]),r),c[1]|=t,vt.apply(null,c)):(1==t||17===t?tt:ot)([n,t,e,r,u,o])}function ht(n){return Pe[n]}function gt(){var t=(t=Z.indexOf)===Pt?n:t;return t}function yt(n){var t,e;return n&&ve.call(n)==q&&(t=n.constructor,!jt(t)||t instanceof t)?(b(n,function(n,t){e=t}),typeof e=="undefined"||de.call(n,e)):false}function mt(n){return Ke[n]}function _t(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ve.call(n)==D||false
}function bt(n,t,e){var r=ze(n),u=r.length;for(t=ut(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function dt(n){var t=[];return b(n,function(n,e){jt(n)&&t.push(e)}),t.sort()}function wt(n){for(var t=-1,e=ze(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function jt(n){return typeof n=="function"}function kt(n){return!(!n||!U[typeof n])}function xt(n){return typeof n=="number"||n&&typeof n=="object"&&ve.call(n)==W||false}function Ct(n){return typeof n=="string"||n&&typeof n=="object"&&ve.call(n)==P||false
}function Ot(n){for(var t=-1,e=ze(n),r=e.length,u=ne(r);++t<r;)u[t]=n[e[t]];return u}function It(n,t,e){var r=-1,u=gt(),o=n?n.length:0,i=false;return e=(0>e?Ae(0,o+e):e)||0,qe(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(Ct(n)?n.indexOf(t,e):u(n,t,e)):g(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Nt(n,t,e){var r=true;t=Z.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else g(n,function(n,e,u){return r=!!t(n,e,u)});return r}function St(n,t,e){var r=[];
t=Z.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else g(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function Et(n,t,e){t=Z.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return g(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:ut(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else g(n,t);
return n}function At(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:ut(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=ze(n),r=u.length;g(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Dt(n,t,e){var r=-1,u=n?n.length:0;if(t=Z.createCallback(t,e,3),typeof u=="number")for(var o=ne(u);++r<u;)o[r]=t(n[r],r,n);else o=[],g(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function $t(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;
for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&Ct(n)?r:Z.createCallback(t,e,3),Rt(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Ft(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=ne(r);++e<r;)u[e]=n[e][t];return u||Dt(n,t)}function Tt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=Z.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else g(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)});return e
}function Bt(n,t,e,r){var u=3>arguments.length;return t=Z.createCallback(t,r,4),At(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Wt(n){var t=-1,e=n?n.length:0,r=ne(typeof e=="number"?e:0);return Rt(n,function(n){var e=ct(0,++t);r[t]=r[e],r[e]=n}),r}function qt(n,t,e){var r;t=Z.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else g(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function zt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=Z.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,De(Ae(0,r),u))}function Pt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ae(0,u+r):r||0}else if(r)return r=Lt(t,e),t[r]===e?r:-1;return n(t,e,r)}function Kt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=Z.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ae(0,t);return p(n,r)}function Lt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?Z.createCallback(e,r,1):Qt,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Mt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=Z.createCallback(e,r,3)),pt(n,t,e)}function Ut(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?$t(Ft(n,"length")):0,r=ne(0>e?0:e);++t<e;)r[t]=Ft(n,t);return r}function Vt(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Gt(n,t){return 2<arguments.length?vt(n,17,p(arguments,2),null,t):vt(n,1,null,null,t)
}function Ht(n,t,e){function r(){c&&ye(c),i=c=p=v,(g||h!==t)&&(s=we(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(we()-f);0<e?c=ke(u,e):(i&&ye(i),e=p,i=c=p=v,e&&(s=we(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!jt(n))throw new le;if(t=Ae(0,t)||0,true===e)var y=true,g=false;else kt(e)&&(y=e.leading,h="maxWait"in e&&(Ae(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=we(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ye(i)),s=f,a=n.apply(l,o)):i||(i=ke(r,v))}return m&&c?c=ye(c):c||t===h||(c=ke(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Jt(n){if(!jt(n))throw new le;var t=p(arguments,1);return ke(function(){n.apply(v,t)},1)}function Qt(n){return n}function Xt(n,t){var e=n,r=!t||jt(e);t||(e=nt,t=n,n=Z),Rt(dt(t),function(u){var o=n[u]=t[u];r&&(e.prototype[u]=function(){var t=this.__wrapped__,r=[t];return je.apply(r,arguments),r=o.apply(n,r),t&&typeof t=="object"&&t===r?this:(r=new e(r),r.__chain__=this.__chain__,r)
})})}function Yt(){}function Zt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var ne=e.Array,te=e.Boolean,ee=e.Date,re=e.Function,ue=e.Math,oe=e.Number,ie=e.Object,ae=e.RegExp,fe=e.String,le=e.TypeError,ce=[],pe=ie.prototype,se=e._,ve=pe.toString,he=ae("^"+fe(ve).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ge=ue.ceil,ye=e.clearTimeout,me=ue.floor,_e=re.prototype.toString,be=he.test(be=ie.getPrototypeOf)&&be,de=pe.hasOwnProperty,we=he.test(we=ee.now)&&we||function(){return+new ee
},je=ce.push,ke=e.setTimeout,xe=ce.splice,Ce=typeof(Ce=X&&Q&&X.setImmediate)=="function"&&!he.test(Ce)&&Ce,Oe=function(){try{var n={},t=he.test(t=ie.defineProperty)&&t,e=t(n,n,n)&&t}catch(r){}return e}(),Ie=he.test(Ie=ie.create)&&Ie,Ne=he.test(Ne=ne.isArray)&&Ne,Se=e.isFinite,Ee=e.isNaN,Re=he.test(Re=ie.keys)&&Re,Ae=ue.max,De=ue.min,$e=e.parseInt,Fe=ue.random,Te={};Te[$]=ne,Te[F]=te,Te[T]=ee,Te[B]=re,Te[q]=ie,Te[W]=oe,Te[z]=ae,Te[P]=fe,nt.prototype=Z.prototype;var Be=Z.support={};Be.funcDecomp=!he.test(e.a)&&E.test(s),Be.funcNames=typeof re.name=="string",Z.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:I,variable:"",imports:{_:Z}},Ie||(rt=function(){function n(){}return function(t){if(kt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var We=Oe?function(n,t){M.value=t,Oe(n,"__bindData__",M)}:Yt,qe=Ne||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ve.call(n)==$||false},ze=Re?function(n){return kt(n)?Re(n):[]}:J,Pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ke=wt(Pe),Le=ae("("+ze(Ke).join("|")+")","g"),Me=ae("["+ze(Pe).join("")+"]","g"),Ue=st(function(n,t,e){de.call(n,e)?n[e]++:n[e]=1}),Ve=st(function(n,t,e){(de.call(n,e)?n[e]:n[e]=[]).push(t)
}),Ge=st(function(n,t,e){n[e]=t});Ce&&(Jt=function(n){if(!jt(n))throw new le;return Ce.apply(e,arguments)});var He=8==$e(d+"08")?$e:function(n,t){return $e(Ct(n)?n.replace(N,""):n,t||0)};return Z.after=function(n,t){if(!jt(t))throw new le;return function(){return 1>--n?t.apply(this,arguments):void 0}},Z.assign=H,Z.at=function(n){for(var t=arguments,e=-1,r=at(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=ne(t);++e<t;)u[e]=n[r[e]];return u},Z.bind=Gt,Z.bindAll=function(n){for(var t=1<arguments.length?at(arguments,true,false,1):dt(n),e=-1,r=t.length;++e<r;){var u=t[e];
n[u]=vt(n[u],1,null,null,n)}return n},Z.bindKey=function(n,t){return 2<arguments.length?vt(t,19,p(arguments,2),null,n):vt(t,3,null,null,n)},Z.chain=function(n){return n=new nt(n),n.__chain__=true,n},Z.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},Z.compose=function(){for(var n=arguments,t=n.length;t--;)if(!jt(n[t]))throw new le;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},Z.countBy=Ue,Z.create=function(n,t){var e=rt(n);
return t?H(e,t):e},Z.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return ut(n,t,e);if("object"!=r)return function(t){return t[n]};var u=ze(n),o=u[0],i=n[o];return 1!=u.length||i!==i||kt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ft(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)}},Z.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,vt(n,4,null,null,null,t)},Z.debounce=Ht,Z.defaults=V,Z.defer=Jt,Z.delay=function(n,t){if(!jt(n))throw new le;
var e=p(arguments,2);return ke(function(){n.apply(v,e)},t)},Z.difference=function(n){return it(n,at(arguments,true,true,1))},Z.filter=St,Z.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Dt(n,e,r)),at(n,t)},Z.forEach=Rt,Z.forEachRight=At,Z.forIn=b,Z.forInRight=function(n,t,e){var r=[];b(n,function(n,t){r.push(t,n)});var u=r.length;for(t=ut(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},Z.forOwn=g,Z.forOwnRight=bt,Z.functions=dt,Z.groupBy=Ve,Z.indexBy=Ge,Z.initial=function(n,t,e){var r=0,u=n?n.length:0;
if(typeof t!="number"&&null!=t){var o=u;for(t=Z.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,De(Ae(0,u-r),u))},Z.intersection=function(e){for(var r=arguments,u=r.length,i=-1,f=a(),p=-1,s=gt(),v=e?e.length:0,h=[],g=a();++i<u;){var y=r[i];f[i]=s===n&&(y?y.length:0)>=_&&o(i?r[i]:g)}n:for(;++p<v;){var m=f[0],y=e[p];if(0>(m?t(m,y):s(g,y))){for(i=u,(m||g).push(y);--i;)if(m=f[i],0>(m?t(m,y):s(r[i],y)))continue n;h.push(y)}}for(;u--;)(m=f[u])&&c(m);return l(f),l(g),h},Z.invert=wt,Z.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=ne(typeof o=="number"?o:0);
return Rt(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},Z.keys=ze,Z.map=Dt,Z.max=$t,Z.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return de.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!jt(n))throw new le;return e.cache={},e},Z.merge=function(n){var t=arguments,e=2;if(!kt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=ut(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)lt(n,t[u],r,o,i);
return l(o),l(i),n},Z.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&qe(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&Ct(n)?r:Z.createCallback(t,e,3),Rt(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},Z.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];b(n,function(n,t){u.push(t)});for(var u=it(u,at(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=Z.createCallback(t,e,3),b(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},Z.once=function(n){var t,e;if(!jt(n))throw new le;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},Z.pairs=function(n){for(var t=-1,e=ze(n),r=e.length,u=ne(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},Z.partial=function(n){return vt(n,16,p(arguments,1))},Z.partialRight=function(n){return vt(n,32,null,p(arguments,1))},Z.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=at(arguments,true,false,1),i=kt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=Z.createCallback(t,e,3),b(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},Z.pluck=Ft,Z.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(xe.call(n,o--,1),u--);return n},Z.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ae(0,ge((t-n)/(e||1)));for(var u=ne(t);++r<t;)u[r]=n,n+=e;return u},Z.reject=function(n,t,e){return t=Z.createCallback(t,e,3),St(n,function(n,e,r){return!t(n,e,r)})},Z.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];
for(t=Z.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),xe.call(n,r--,1),u--);return o},Z.rest=Kt,Z.shuffle=Wt,Z.sortBy=function(n,t,e){var r=-1,o=n?n.length:0,i=ne(typeof o=="number"?o:0);for(t=Z.createCallback(t,e,3),Rt(n,function(n,e,u){var o=i[++r]=f();o.m=t(n,e,u),o.n=r,o.o=n}),o=i.length,i.sort(u);o--;)n=i[o],i[o]=n.o,c(n);return i},Z.tap=function(n,t){return t(n),n},Z.throttle=function(n,t,e){var r=true,u=true;if(!jt(n))throw new le;return false===e?r=false:kt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Ht(n,t,L)
},Z.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=ne(n);for(t=ut(t,e,1);++r<n;)u[r]=t(r);return u},Z.toArray=function(n){return n&&typeof n.length=="number"?p(n):Ot(n)},Z.transform=function(n,t,e,r){var u=qe(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=rt(o&&o.prototype)}return t&&(t=Z.createCallback(t,r,4),(u?Rt:g)(n,function(n,r,u){return t(e,n,r,u)})),e},Z.union=function(){return pt(at(arguments,true,true))},Z.uniq=Mt,Z.values=Ot,Z.where=St,Z.without=function(n){return it(n,p(arguments,1))
},Z.wrap=function(n,t){return vt(t,16,[n])},Z.zip=Ut,Z.zipObject=Vt,Z.collect=Dt,Z.drop=Kt,Z.each=Rt,Z.eachRight=At,Z.extend=H,Z.methods=dt,Z.object=Vt,Z.select=St,Z.tail=Kt,Z.unique=Mt,Z.unzip=Ut,Xt(Z),Z.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),et(n,t,typeof e=="function"&&ut(e,r,1))},Z.cloneDeep=function(n,t,e){return et(n,true,typeof t=="function"&&ut(t,e,1))},Z.contains=It,Z.escape=function(n){return null==n?"":fe(n).replace(Me,ht)},Z.every=Nt,Z.find=Et,Z.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;
for(t=Z.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},Z.findKey=function(n,t,e){var r;return t=Z.createCallback(t,e,3),g(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},Z.findLast=function(n,t,e){var r;return t=Z.createCallback(t,e,3),At(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0}),r},Z.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=Z.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},Z.findLastKey=function(n,t,e){var r;return t=Z.createCallback(t,e,3),bt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0
}),r},Z.has=function(n,t){return n?de.call(n,t):false},Z.identity=Qt,Z.indexOf=Pt,Z.isArguments=_t,Z.isArray=qe,Z.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ve.call(n)==F||false},Z.isDate=function(n){return n&&typeof n=="object"&&ve.call(n)==T||false},Z.isElement=function(n){return n&&1===n.nodeType||false},Z.isEmpty=function(n){var t=true;if(!n)return t;var e=ve.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&jt(n.splice)?!r:(g(n,function(){return t=false}),t)},Z.isEqual=function(n,t,e,r){return ft(n,t,typeof e=="function"&&ut(e,r,2))
},Z.isFinite=function(n){return Se(n)&&!Ee(parseFloat(n))},Z.isFunction=jt,Z.isNaN=function(n){return xt(n)&&n!=+n},Z.isNull=function(n){return null===n},Z.isNumber=xt,Z.isObject=kt,Z.isPlainObject=h,Z.isRegExp=function(n){return n&&typeof n=="object"&&ve.call(n)==z||false},Z.isString=Ct,Z.isUndefined=function(n){return typeof n=="undefined"},Z.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ae(0,r+e):De(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},Z.mixin=Xt,Z.noConflict=function(){return e._=se,this
},Z.noop=Yt,Z.parseInt=He,Z.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Fe(),De(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):ct(n,t)},Z.reduce=Tt,Z.reduceRight=Bt,Z.result=function(n,t){if(n){var e=n[t];return jt(e)?n[t]():e}},Z.runInContext=s,Z.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:ze(n).length},Z.some=qt,Z.sortedIndex=Lt,Z.template=function(n,t,e){var r=Z.templateSettings;
n=fe(n||""),e=V({},e,r);var u,o=V({},e.imports,r.imports),r=ze(o),o=Ot(o),a=0,f=e.interpolate||S,l="__p+='",f=ae((e.escape||S).source+"|"+f.source+"|"+(f===I?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";
try{var c=re(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},Z.unescape=function(n){return null==n?"":fe(n).replace(Le,mt)},Z.uniqueId=function(n){var t=++y;return fe(null==n?"":n)+t},Z.all=Nt,Z.any=qt,Z.detect=Et,Z.findWhere=Et,Z.foldl=Tt,Z.foldr=Bt,Z.include=It,Z.inject=Tt,g(Z,function(n,t){Z.prototype[t]||(Z.prototype[t]=function(){var t=[this.__wrapped__],e=this.__chain__;return je.apply(t,arguments),t=n.apply(Z,t),e?new nt(t,e):t})}),Z.first=zt,Z.last=function(n,t,e){var r=0,u=n?n.length:0;
if(typeof t!="number"&&null!=t){var o=u;for(t=Z.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ae(0,u-r))},Z.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=Ot(n)),null==t||e?n?n[ct(0,n.length-1)]:v:(n=Wt(n),n.length=De(Ae(0,t),n.length),n)},Z.take=zt,Z.head=zt,g(Z,function(n,t){var e="sample"!==t;Z.prototype[t]||(Z.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new nt(o,u):o
})}),Z.VERSION="2.3.0",Z.prototype.chain=function(){return this.__chain__=true,this},Z.prototype.toString=function(){return fe(this.__wrapped__)},Z.prototype.value=Zt,Z.prototype.valueOf=Zt,Rt(["join","pop","shift"],function(n){var t=ce[n];Z.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);return n?new nt(e,n):e}}),Rt(["push","reverse","sort","unshift"],function(n){var t=ce[n];Z.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),Rt(["concat","slice","splice"],function(n){var t=ce[n];
Z.prototype[n]=function(){return new nt(t.apply(this.__wrapped__,arguments),this.__chain__)}}),Z}var v,h=[],g=[],y=0,m=+new Date+"",_=75,b=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,I=/<%=([\s\S]+?)%>/g,N=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),D="[object Arguments]",$="[object Array]",F="[object Boolean]",T="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[F]=K[T]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},U={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},V={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=U[typeof window]&&window||this,H=U[typeof exports]&&exports&&!exports.nodeType&&exports,J=U[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=U[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);
/*
 *  Sugar Library v1.4.1
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */

(function(){function aa(a){return function(){return a}}
var m=Object,p=Array,q=RegExp,r=Date,s=String,t=Number,u=Math,ba="undefined"!==typeof global?global:this,v=m.prototype.toString,da=m.prototype.hasOwnProperty,ea=m.defineProperty&&m.defineProperties,fa="function"===typeof q(),ga=!("0"in new s("a")),ia={},ja=/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,w="Boolean Number String Array Date RegExp Function".split(" "),la=ka("boolean",w[0]),y=ka("number",w[1]),z=ka("string",w[2]),A=ma(w[3]),C=ma(w[4]),D=ma(w[5]),F=ma(w[6]);
function ma(a){var b="Array"===a&&p.isArray||function(b,d){return(d||v.call(b))==="[object "+a+"]"};return ia[a]=b}function ka(a,b){function c(c){return G(c)?v.call(c)==="[object "+b+"]":typeof c===a}return ia[b]=c}
function na(a){a.SugarMethods||(oa(a,"SugarMethods",{}),H(a,!1,!0,{extend:function(b,c,d){H(a,!1!==d,c,b)},sugarRestore:function(){return pa(this,a,arguments,function(a,c,d){oa(a,c,d.method)})},sugarRevert:function(){return pa(this,a,arguments,function(a,c,d){d.existed?oa(a,c,d.original):delete a[c]})}}))}function H(a,b,c,d){var e=b?a.prototype:a;na(a);I(d,function(d,f){var h=e[d],l=J(e,d);F(c)&&h&&(f=qa(h,f,c));!1===c&&h||oa(e,d,f);a.SugarMethods[d]={method:f,existed:l,original:h,instance:b}})}
function K(a,b,c,d,e){var g={};d=z(d)?d.split(","):d;d.forEach(function(a,b){e(g,a,b)});H(a,b,c,g)}function pa(a,b,c,d){var e=0===c.length,g=L(c),f=!1;I(b.SugarMethods,function(b,c){if(e||-1!==g.indexOf(b))f=!0,d(c.instance?a.prototype:a,b,c)});return f}function qa(a,b,c){return function(d){return c.apply(this,arguments)?b.apply(this,arguments):a.apply(this,arguments)}}function oa(a,b,c){ea?m.defineProperty(a,b,{value:c,configurable:!0,enumerable:!1,writable:!0}):a[b]=c}
function L(a,b,c){var d=[];c=c||0;var e;for(e=a.length;c<e;c++)d.push(a[c]),b&&b.call(a,a[c],c);return d}function sa(a,b,c){var d=a[c||0];A(d)&&(a=d,c=0);L(a,b,c)}function ta(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}function M(a){return void 0!==a}function N(a){return void 0===a}function J(a,b){return!!a&&da.call(a,b)}function G(a){return!!a&&("object"===typeof a||fa&&D(a))}function ua(a){var b=typeof a;return null==a||"string"===b||"number"===b||"boolean"===b}
function va(a,b){b=b||v.call(a);try{if(a&&a.constructor&&!J(a,"constructor")&&!J(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}return!!a&&"[object Object]"===b&&"hasOwnProperty"in a}function I(a,b){for(var c in a)if(J(a,c)&&!1===b.call(a,c,a[c],a))break}function wa(a,b){for(var c=0;c<a;c++)b(c)}function xa(a,b){I(b,function(c){a[c]=b[c]});return a}function ya(a){ua(a)&&(a=m(a));if(ga&&z(a))for(var b=a,c=0,d;d=b.charAt(c);)b[c++]=d;return a}function O(a){xa(this,ya(a))}
O.prototype.constructor=m;var P=u.abs,za=u.pow,Aa=u.ceil,Q=u.floor,R=u.round,Ca=u.min,S=u.max;function Da(a,b,c){var d=za(10,P(b||0));c=c||R;0>b&&(d=1/d);return c(a*d)/d}var Ea=48,Fa=57,Ga=65296,Ha=65305,Ia=".",Ja="",Ka={},La;function Ma(){return"\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function Na(a,b){var c="";for(a=a.toString();0<b;)if(b&1&&(c+=a),b>>=1)a+=a;return c}
function Oa(a,b){var c,d;c=a.replace(La,function(a){a=Ka[a];a===Ia&&(d=!0);return a});return d?parseFloat(c):parseInt(c,b||10)}function T(a,b,c,d){d=P(a).toString(d||10);d=Na("0",b-d.replace(/\.\d+/,"").length)+d;if(c||0>a)d=(0>a?"-":"+")+d;return d}function Pa(a){if(11<=a&&13>=a)return"th";switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}
function Qa(a,b){function c(a,c){if(a||-1<b.indexOf(c))d+=c}var d="";b=b||"";c(a.multiline,"m");c(a.ignoreCase,"i");c(a.global,"g");c(a.u,"y");return d}function Ra(a){z(a)||(a=s(a));return a.replace(/([\\/\'*+?|()\[\]{}.^$])/g,"\\$1")}function U(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function Sa(a,b,c){return a["set"+(a._utc&&"ISOWeek"!=b?"UTC":"")+b](c)}
function Ta(a,b){var c=typeof a,d,e,g,f,h,l,n;if("string"===c)return a;g=v.call(a);d=va(a,g);e=A(a,g);if(null!=a&&d||e){b||(b=[]);if(1<b.length)for(l=b.length;l--;)if(b[l]===a)return"CYC";b.push(a);d=a.valueOf()+s(a.constructor);f=e?a:m.keys(a).sort();l=0;for(n=f.length;l<n;l++)h=e?l:f[l],d+=h+Ta(a[h],b);b.pop()}else d=-Infinity===1/a?"-0":s(a&&a.valueOf?a.valueOf():a);return c+g+d}function Ua(a,b){return a===b?0!==a||1/a===1/b:Va(a)&&Va(b)?Ta(a)===Ta(b):!1}
function Va(a){var b=v.call(a);return ja.test(b)||va(a,b)}function Wa(a,b,c){var d,e=a.length,g=b.length,f=!1!==b[g-1];if(!(g>(f?1:2)))return Xa(a,e,b[0],f,c);d=[];L(b,function(b){if(la(b))return!1;d.push(Xa(a,e,b,f,c))});return d}function Xa(a,b,c,d,e){d&&(c%=b,0>c&&(c=b+c));return e?a.charAt(c):a[c]}function Ya(a,b){K(b,!0,!1,a,function(a,b){a[b+("equal"===b?"s":"")]=function(){return m[b].apply(null,[this].concat(L(arguments)))}})}na(m);I(w,function(a,b){na(ba[b])});var Za,$a;
for($a=0;9>=$a;$a++)Za=s.fromCharCode($a+Ga),Ja+=Za,Ka[Za]=s.fromCharCode($a+Ea);Ka[","]="";Ka["\uff0e"]=Ia;Ka[Ia]=Ia;La=q("["+Ja+"\uff0e,"+Ia+"]","g");
"use strict";
var W,Ib,Jb="ampm hour minute second ampm utc offset_sign offset_hours offset_minutes ampm".split(" "),Kb="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",Lb={},Mb,Nb,Ob,Pb=[],Qb={},X={yyyy:function(a){return U(a,"FullYear")},yy:function(a){return U(a,"FullYear")%100},ord:function(a){a=U(a,"Date");return a+Pa(a)},tz:function(a){return a.getUTCOffset()},isotz:function(a){return a.getUTCOffset(!0)},
Z:function(a){return a.getUTCOffset()},ZZ:function(a){return a.getUTCOffset().replace(/(\d{2})$/,":$1")}},Rb=[{name:"year",method:"FullYear",k:!0,b:function(a){return 864E5*(365+(a?a.isLeapYear()?1:0:0.25))}},{name:"month",error:0.919,method:"Month",k:!0,b:function(a,b){var c=30.4375,d;a&&(d=a.daysInMonth(),b<=d.days()&&(c=d));return 864E5*c}},{name:"week",method:"ISOWeek",b:aa(6048E5)},{name:"day",error:0.958,method:"Date",k:!0,b:aa(864E5)},{name:"hour",method:"Hours",b:aa(36E5)},{name:"minute",
method:"Minutes",b:aa(6E4)},{name:"second",method:"Seconds",b:aa(1E3)},{name:"millisecond",method:"Milliseconds",b:aa(1)}],Sb={};function Tb(a){xa(this,a);this.g=Pb.concat()}
Tb.prototype={getMonth:function(a){return y(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},addFormat:function(a,b,c,d,e){var g=c||[],f=this,h;a=a.replace(/\s+/g,"[,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(a,b){var d,e,h,B=b.match(/\?$/);h=b.match(/^(\d+)\??$/);var k=b.match(/(\d)(?:-(\d))?/),E=b.replace(/[^a-z]+$/,"");h?d=f.tokens[h[1]]:f[E]?d=f[E]:f[E+"s"]&&(d=f[E+"s"],k&&(e=[],d.forEach(function(a,b){var c=b%(f.units?8:d.length);c>=k[1]&&c<=(k[2]||
k[1])&&e.push(a)}),d=e),d=Ub(d));h?h="(?:"+d+")":(c||g.push(E),h="("+d+")");B&&(h+="?");return h});b?(b=Vb(f,e),e=["t","[\\s\\u3000]"].concat(f.timeMarker),h=a.match(/\\d\{\d,\d\}\)+\??$/),Wb(f,"(?:"+b+")[,\\s\\u3000]+?"+a,Jb.concat(g),d),Wb(f,a+"(?:[,\\s]*(?:"+e.join("|")+(h?"+":"*")+")"+b+")?",g.concat(Jb),d)):Wb(f,a,g,d)}};
function Xb(a,b,c){var d,e,g=b[0],f=b[1],h=b[2];b=a[c]||a.relative;if(F(b))return b.call(a,g,f,h,c);e=a.units[8*(a.plural&&1<g?1:0)+f]||a.units[f];a.capitalizeUnit&&(e=Yb(e));d=a.modifiers.filter(function(a){return"sign"==a.name&&a.value==(0<h?1:-1)})[0];return b.replace(/\{(.*?)\}/g,function(a,b){switch(b){case "num":return g;case "unit":return e;case "sign":return d.src}})}function Zb(a,b){b=b||a.code;return"en"===b||"en-US"===b?!0:a.variant}
function $b(a,b){return b.replace(q(a.num,"g"),function(b){return ac(a,b)||""})}function ac(a,b){var c;return y(b)?b:b&&-1!==(c=a.numbers.indexOf(b))?(c+1)%10:1}function Y(a,b){var c;z(a)||(a="");c=Sb[a]||Sb[a.slice(0,2)];if(!1===b&&!c)throw new TypeError("Invalid locale.");return c||Ib}
function bc(a,b){function c(a){var b=h[a];z(b)?h[a]=b.split(","):b||(h[a]=[])}function d(a,b){a=a.split("+").map(function(a){return a.replace(/(.+):(.+)$/,function(a,b,c){return c.split("|").map(function(a){return b+a}).join("|")})}).join("|");a.split("|").forEach(b)}function e(a,b,c){var e=[];h[a].forEach(function(a,f){b&&(a+="+"+a.slice(0,3));d(a,function(a,b){e[b*c+f]=a.toLowerCase()})});h[a]=e}function g(a,b,c){a="\\d{"+a+","+b+"}";c&&(a+="|(?:"+Ub(h.numbers)+")+");return a}function f(a,b){h[a]=
h[a]||b}var h,l;h=new Tb(b);c("modifiers");"months weekdays units numbers articles tokens timeMarker ampm timeSuffixes dateParse timeParse".split(" ").forEach(c);l=!h.monthSuffix;e("months",l,12);e("weekdays",l,7);e("units",!1,8);e("numbers",!1,10);f("code",a);f("date",g(1,2,h.digitDate));f("year","'\\d{2}|"+g(4,4));f("num",function(){var a=["-?\\d+"].concat(h.articles);h.numbers&&(a=a.concat(h.numbers));return Ub(a)}());(function(){var a=[];h.i={};h.modifiers.push({name:"day",src:"yesterday",value:-1});
h.modifiers.push({name:"day",src:"today",value:0});h.modifiers.push({name:"day",src:"tomorrow",value:1});h.modifiers.forEach(function(b){var c=b.name;d(b.src,function(d){var e=h[c];h.i[d]=b;a.push({name:c,src:d,value:b.value});h[c]=e?e+"|"+d:d})});h.day+="|"+Ub(h.weekdays);h.modifiers=a})();h.monthSuffix&&(h.month=g(1,2),h.months="1 2 3 4 5 6 7 8 9 10 11 12".split(" ").map(function(a){return a+h.monthSuffix}));h.full_month=g(1,2)+"|"+Ub(h.months);0<h.timeSuffixes.length&&h.addFormat(Vb(h),!1,Jb);
h.addFormat("{day}",!0);h.addFormat("{month}"+(h.monthSuffix||""));h.addFormat("{year}"+(h.yearSuffix||""));h.timeParse.forEach(function(a){h.addFormat(a,!0)});h.dateParse.forEach(function(a){h.addFormat(a)});return Sb[a]=h}function Wb(a,b,c,d){a.g.unshift({r:d,locale:a,q:q("^"+b+"$","i"),to:c})}function Yb(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function Ub(a){return a.filter(function(a){return!!a}).join("|")}function cc(){var a=r.SugarNewDate;return a?a():new r}
function dc(a,b){var c;if(G(a[0]))return a;if(y(a[0])&&!y(a[1]))return[a[0]];if(z(a[0])&&b)return[ec(a[0]),a[1]];c={};Nb.forEach(function(b,e){c[b.name]=a[e]});return[c]}function ec(a){var b,c={};if(a=a.match(/^(\d+)?\s?(\w+?)s?$/i))N(b)&&(b=parseInt(a[1])||1),c[a[2].toLowerCase()]=b;return c}function fc(a,b,c){var d;N(c)&&(c=Ob.length);for(b=b||0;b<c&&(d=Ob[b],!1!==a(d.name,d,b));b++);}
function gc(a,b){var c={},d,e;b.forEach(function(b,f){d=a[f+1];N(d)||""===d||("year"===b&&(c.t=d.replace(/'/,"")),e=parseFloat(d.replace(/'/,"").replace(/,/,".")),c[b]=isNaN(e)?d.toLowerCase():e)});return c}function hc(a){a=a.trim().replace(/^just (?=now)|\.+$/i,"");return ic(a)}
function ic(a){return a.replace(Mb,function(a,c,d){var e=0,g=1,f,h;if(c)return a;d.split("").reverse().forEach(function(a){a=Lb[a];var b=9<a;b?(f&&(e+=g),g*=a/(h||1),h=a):(!1===f&&(g*=10),e+=g*a);f=b});f&&(e+=g);return e})}
function jc(a,b,c,d){function e(a){vb.push(a)}function g(){vb.forEach(function(a){a.call()})}function f(){var a=n.getWeekday();n.setWeekday(7*(k.num-1)+(a>Ba?Ba+7:Ba))}function h(){var a=B.i[k.edge];fc(function(a){if(M(k[a]))return E=a,!1},4);if("year"===E)k.e="month";else if("month"===E||"week"===E)k.e="day";n[(0>a.value?"endOf":"beginningOf")+Yb(E)]();-2===a.value&&n.reset()}function l(){var a;fc(function(b,c,d){"day"===b&&(b="date");if(M(k[b])){if(d>=wb)return n.setTime(NaN),!1;a=a||{};a[b]=k[b];
delete k[b]}});a&&e(function(){n.set(a,!0)})}var n,x,ha,vb,B,k,E,wb,Ba,ra,ca;n=cc();vb=[];n.utc(d);C(a)?n.utc(a.isUTC()).setTime(a.getTime()):y(a)?n.setTime(a):G(a)?(n.set(a,!0),k=a):z(a)&&(ha=Y(b),a=hc(a),ha&&I(ha.o?[ha.o].concat(ha.g):ha.g,function(c,d){var g=a.match(d.q);if(g){B=d.locale;k=gc(g,d.to);B.o=d;k.utc&&n.utc();if(k.timestamp)return k=k.timestamp,!1;d.r&&(!z(k.month)&&(z(k.date)||Zb(ha,b)))&&(ca=k.month,k.month=k.date,k.date=ca);k.year&&2===k.t.length&&(k.year=100*R(U(cc(),"FullYear")/
100)-100*R(k.year/100)+k.year);k.month&&(k.month=B.getMonth(k.month),k.shift&&!k.unit&&(k.unit=B.units[7]));k.weekday&&k.date?delete k.weekday:k.weekday&&(k.weekday=B.getWeekday(k.weekday),k.shift&&!k.unit&&(k.unit=B.units[5]));k.day&&(ca=B.i[k.day])?(k.day=ca.value,n.reset(),x=!0):k.day&&-1<(Ba=B.getWeekday(k.day))&&(delete k.day,k.num&&k.month?(e(f),k.day=1):k.weekday=Ba);k.date&&!y(k.date)&&(k.date=$b(B,k.date));k.ampm&&k.ampm===B.ampm[1]&&12>k.hour?k.hour+=12:k.ampm===B.ampm[0]&&12===k.hour&&
(k.hour=0);if("offset_hours"in k||"offset_minutes"in k)n.utc(),k.offset_minutes=k.offset_minutes||0,k.offset_minutes+=60*k.offset_hours,"-"===k.offset_sign&&(k.offset_minutes*=-1),k.minute-=k.offset_minutes;k.unit&&(x=!0,ra=ac(B,k.num),wb=B.units.indexOf(k.unit)%8,E=W.units[wb],l(),k.shift&&(ra*=(ca=B.i[k.shift])?ca.value:0),k.sign&&(ca=B.i[k.sign])&&(ra*=ca.value),M(k.weekday)&&(n.set({weekday:k.weekday},!0),delete k.weekday),k[E]=(k[E]||0)+ra);k.edge&&e(h);"-"===k.year_sign&&(k.year*=-1);fc(function(a,
b,c){b=k[a];var d=b%1;d&&(k[Ob[c-1].name]=R(d*("second"===a?1E3:60)),k[a]=Q(b))},1,4);return!1}}),k?x?n.advance(k):(n._utc&&n.reset(),kc(n,k,!0,!1,c)):("now"!==a&&(n=new r(a)),d&&n.addMinutes(-n.getTimezoneOffset())),g(),n.utc(!1));return{c:n,set:k}}function lc(a){var b,c=P(a),d=c,e=0;fc(function(a,f,h){b=Q(Da(c/f.b(),1));1<=b&&(d=b,e=h)},1);return[d,e,a]}
function mc(a){var b=lc(a.millisecondsFromNow());if(6===b[1]||5===b[1]&&4===b[0]&&a.daysFromNow()>=cc().daysInMonth())b[0]=P(a.monthsFromNow()),b[1]=6;return b}function nc(a,b,c){function d(a,c){var d=U(a,"Month");return Y(c).months[d+12*b]}Z(a,d,c);Z(Yb(a),d,c,1)}function Z(a,b,c,d){X[a]=function(a,g){var f=b(a,g);c&&(f=f.slice(0,c));d&&(f=f.slice(0,d).toUpperCase()+f.slice(d));return f}}
function oc(a,b,c){X[a]=b;X[a+a]=function(a,c){return T(b(a,c),2)};c&&(X[a+a+a]=function(a,c){return T(b(a,c),3)},X[a+a+a+a]=function(a,c){return T(b(a,c),4)})}function pc(a){var b=a.match(/(\{\w+\})|[^{}]+/g);Qb[a]=b.map(function(a){a.replace(/\{(\w+)\}/,function(b,e){a=X[e]||e;return e});return a})}
function qc(a,b,c,d){var e;if(!a.isValid())return"Invalid Date";Date[b]?b=Date[b]:F(b)&&(e=mc(a),b=b.apply(a,e.concat(Y(d))));if(!b&&c)return e=e||mc(a),0===e[1]&&(e[1]=1,e[0]=1),a=Y(d),Xb(a,e,0<e[2]?"future":"past");b=b||"long";if("short"===b||"long"===b||"full"===b)b=Y(d)[b];Qb[b]||pc(b);var g,f;e="";b=Qb[b];g=0;for(c=b.length;g<c;g++)f=b[g],e+=F(f)?f(a,d):f;return e}
function rc(a,b,c,d,e){var g,f,h,l=0,n=0,x=0;g=jc(b,c,null,e);0<d&&(n=x=d,f=!0);if(!g.c.isValid())return!1;if(g.set&&g.set.e){Rb.forEach(function(b){b.name===g.set.e&&(l=b.b(g.c,a-g.c)-1)});b=Yb(g.set.e);if(g.set.edge||g.set.shift)g.c["beginningOf"+b]();"month"===g.set.e&&(h=g.c.clone()["endOf"+b]().getTime());!f&&(g.set.sign&&"millisecond"!=g.set.e)&&(n=50,x=-50)}f=a.getTime();b=g.c.getTime();h=sc(a,b,h||b+l);return f>=b-n&&f<=h+x}
function sc(a,b,c){b=new r(b);a=(new r(c)).utc(a.isUTC());23!==U(a,"Hours")&&(b=b.getTimezoneOffset(),a=a.getTimezoneOffset(),b!==a&&(c+=(a-b).minutes()));return c}
function kc(a,b,c,d,e){function g(a){return M(b[a])?b[a]:b[a+"s"]}function f(a){return M(g(a))}var h;if(y(b)&&d)b={milliseconds:b};else if(y(b))return a.setTime(b),a;M(b.date)&&(b.day=b.date);fc(function(d,e,g){var l="day"===d;if(f(d)||l&&f("weekday"))return b.e=d,h=+g,!1;!c||("week"===d||l&&f("week"))||Sa(a,e.method,l?1:0)});Rb.forEach(function(c){var e=c.name;c=c.method;var h;h=g(e);N(h)||(d?("week"===e&&(h=(b.day||0)+7*h,c="Date"),h=h*d+U(a,c)):"month"===e&&f("day")&&Sa(a,"Date",15),Sa(a,c,h),
d&&"month"===e&&(e=h,0>e&&(e=e%12+12),e%12!=U(a,"Month")&&Sa(a,"Date",0)))});d||(f("day")||!f("weekday"))||a.setWeekday(g("weekday"));var l;a:{switch(e){case -1:l=a>cc();break a;case 1:l=a<cc();break a}l=void 0}l&&fc(function(b,c){if((c.k||"week"===b&&f("weekday"))&&!(f(b)||"day"===b&&f("weekday")))return a[c.j](e),!1},h+1);return a}
function Vb(a,b){var c=Kb,d={h:0,m:1,s:2},e;a=a||W;return c.replace(/{([a-z])}/g,function(c,f){var h=[],l="h"===f,n=l&&!b;if("t"===f)return a.ampm.join("|");l&&h.push(":");(e=a.timeSuffixes[d[f]])&&h.push(e+"\\s*");return 0===h.length?"":"(?:"+h.join("|")+")"+(n?"":"?")})}function tc(a,b,c){var d,e;y(a[1])?d=dc(a)[0]:(d=a[0],e=a[1]);return jc(d,e,b,c).c}
H(r,!1,!0,{create:function(){return tc(arguments)},past:function(){return tc(arguments,-1)},future:function(){return tc(arguments,1)},addLocale:function(a,b){return bc(a,b)},setLocale:function(a){var b=Y(a,!1);Ib=b;a&&a!=b.code&&(b.code=a);return b},getLocale:function(a){return a?Y(a,!1):Ib},addFormat:function(a,b,c){Wb(Y(c),a,b)}});
H(r,!0,!0,{set:function(){var a=dc(arguments);return kc(this,a[0],a[1])},setWeekday:function(a){if(!N(a))return Sa(this,"Date",U(this,"Date")+a-U(this,"Day"))},setISOWeek:function(a){var b=U(this,"Day")||7;if(!N(a))return this.set({month:0,date:4}),this.set({weekday:1}),1<a&&this.addWeeks(a-1),1!==b&&this.advance({days:b-1}),this.getTime()},getISOWeek:function(){var a;a=this.clone();var b=U(a,"Day")||7;a.addDays(4-b).reset();return 1+Q(a.daysSince(a.clone().beginningOfYear())/7)},beginningOfISOWeek:function(){var a=
this.getDay();0===a?a=-6:1!==a&&(a=1);this.setWeekday(a);return this.reset()},endOfISOWeek:function(){0!==this.getDay()&&this.setWeekday(7);return this.endOfDay()},getUTCOffset:function(a){var b=this._utc?0:this.getTimezoneOffset(),c=!0===a?":":"";return!b&&a?"Z":T(Q(-b/60),2,!0)+c+T(P(b%60),2)},utc:function(a){oa(this,"_utc",!0===a||0===arguments.length);return this},isUTC:function(){return!!this._utc||0===this.getTimezoneOffset()},advance:function(){var a=dc(arguments,!0);return kc(this,a[0],a[1],
1)},rewind:function(){var a=dc(arguments,!0);return kc(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>r.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<r.create(a).getTime()+(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=r.create(a).getTime();var e=r.create(b).getTime();b=Ca(a,e);a=S(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=U(this,"FullYear");return 0===a%4&&0!==a%100||0===a%400},
daysInMonth:function(){return 32-U(new r(U(this,"FullYear"),U(this,"Month"),32),"Date")},format:function(a,b){return qc(this,a,!1,b)},relative:function(a,b){z(a)&&(b=a,a=null);return qc(this,a,!0,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(z(a))switch(a=a.trim().toLowerCase(),e=this.clone().utc(c),!0){case "future"===a:return this.getTime()>cc().getTime();case "past"===a:return this.getTime()<cc().getTime();case "weekday"===a:return 0<U(e,"Day")&&6>U(e,"Day");case "weekend"===a:return 0===
U(e,"Day")||6===U(e,"Day");case -1<(d=W.weekdays.indexOf(a)%7):return U(e,"Day")===d;case -1<(d=W.months.indexOf(a)%12):return U(e,"Month")===d}return rc(this,a,null,b,c)}},reset:function(a){var b={},c;a=a||"hours";"date"===a&&(a="days");c=Rb.some(function(b){return a===b.name||a===b.name+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,!0):this},clone:function(){var a=new r(this.getTime());a.utc(!!this._utc);return a}});
H(r,!0,!0,{iso:function(){return this.toISOString()},getWeekday:r.prototype.getDay,getUTCWeekday:r.prototype.getUTCDay});function uc(a,b){function c(){return R(this*b)}function d(){return tc(arguments)[a.j](this)}function e(){return tc(arguments)[a.j](-this)}var g=a.name,f={};f[g]=c;f[g+"s"]=c;f[g+"Before"]=e;f[g+"sBefore"]=e;f[g+"Ago"]=e;f[g+"sAgo"]=e;f[g+"After"]=d;f[g+"sAfter"]=d;f[g+"FromNow"]=d;f[g+"sFromNow"]=d;t.extend(f)}H(t,!0,!0,{duration:function(a){a=Y(a);return Xb(a,lc(this),"duration")}});
W=Ib=r.addLocale("en",{plural:!0,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],
timeParse:"{num} {unit} {sign};{sign} {num} {unit};{0} {num}{1} {day} of {month} {year?};{weekday?} {month} {date}{1?} {year?};{date} {month} {year};{date} {month};{shift} {weekday};{shift} week {weekday};{weekday} {2?} {shift} week;{num} {unit=4-5} {sign} {day};{0?} {date}{1} of {month};{0?}{month?} {date?}{1?} of {shift} {unit=6-7}".split(";")});Ob=Rb.concat().reverse();Nb=Rb.concat();Nb.splice(2,1);
K(r,!0,!0,Rb,function(a,b,c){function d(a){a/=f;var c=a%1,d=b.error||0.999;c&&P(c%1)>d&&(a=R(a));return 0>a?Aa(a):Q(a)}var e=b.name,g=Yb(e),f=b.b(),h,l;b.j="add"+g+"s";h=function(a,b){return d(this.getTime()-r.create(a,b).getTime())};l=function(a,b){return d(r.create(a,b).getTime()-this.getTime())};a[e+"sAgo"]=l;a[e+"sUntil"]=l;a[e+"sSince"]=h;a[e+"sFromNow"]=h;a[b.j]=function(a,b){var c={};c[e]=a;return this.advance(c,b)};uc(b,f);3>c&&["Last","This","Next"].forEach(function(b){a["is"+b+g]=function(){return rc(this,
b+" "+e,"en")}});4>c&&(a["beginningOf"+g]=function(){var a={};switch(e){case "year":a.year=U(this,"FullYear");break;case "month":a.month=U(this,"Month");break;case "day":a.day=U(this,"Date");break;case "week":a.weekday=0}return this.set(a,!0)},a["endOf"+g]=function(){var a={hours:23,minutes:59,seconds:59,milliseconds:999};switch(e){case "year":a.month=11;a.day=31;break;case "month":a.day=this.daysInMonth();break;case "week":a.weekday=6}return this.set(a,!0)})});
W.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",!0,["year_sign","year","month","date"],!1,!0);W.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",!0,["date","month","year"],!0);W.addFormat("{full_month}[-.](\\d{4,4})",!1,["month","year"]);W.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/",!1,["timestamp"]);W.addFormat(Vb(W),!1,Jb);Pb=W.g.slice(0,7).reverse();W.g=W.g.slice(7).concat(Pb);oc("f",function(a){return U(a,"Milliseconds")},!0);
oc("s",function(a){return U(a,"Seconds")});oc("m",function(a){return U(a,"Minutes")});oc("h",function(a){return U(a,"Hours")%12||12});oc("H",function(a){return U(a,"Hours")});oc("d",function(a){return U(a,"Date")});oc("M",function(a){return U(a,"Month")+1});(function(){function a(a,c){var d=U(a,"Hours");return Y(c).ampm[Q(d/12)]||""}Z("t",a,1);Z("tt",a);Z("T",a,1,1);Z("TT",a,null,2)})();
(function(){function a(a,c){var d=U(a,"Day");return Y(c).weekdays[d]}Z("dow",a,3);Z("Dow",a,3,1);Z("weekday",a);Z("Weekday",a,null,1)})();nc("mon",0,3);nc("month",0);nc("month2",1);nc("month3",2);X.ms=X.f;X.milliseconds=X.f;X.seconds=X.s;X.minutes=X.m;X.hours=X.h;X["24hr"]=X.H;X["12hr"]=X.h;X.date=X.d;X.day=X.d;X.year=X.yyyy;K(r,!0,!0,"short,long,full",function(a,b){a[b]=function(a){return qc(this,b,!1,a)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){9<b&&(b=za(10,b-9));Lb[a]=b});xa(Lb,Ka);Mb=q("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07"+Ja+"]+)(?!\u6628)","g");
(function(){var a=W.weekdays.slice(0,7),b=W.months.slice(0,12);K(r,!0,!0,"today yesterday tomorrow weekday weekend future past".split(" ").concat(a).concat(b),function(a,b){a["is"+Yb(b)]=function(a){return this.is(b,0,a)}})})();r.utc||(r.utc={create:function(){return tc(arguments,0,!0)},past:function(){return tc(arguments,-1,!0)},future:function(){return tc(arguments,1,!0)}});
H(r,!1,!0,{RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"});
"use strict";function Bc(a,b,c,d,e,g){var f=a.toFixed(20),h=f.search(/\./),f=f.search(/[1-9]/),h=h-f;0<h&&(h-=1);e=S(Ca(Q(h/3),!1===e?c.length:e),-d);d=c.charAt(e+d-1);-9>h&&(e=-3,b=P(h)-9,d=c.slice(0,1));c=g?za(2,10*e):za(10,3*e);return Da(a/c,b||0).format()+d.trim()}
H(t,!1,!0,{random:function(a,b){var c,d;1==arguments.length&&(b=a,a=0);c=Ca(a||0,N(b)?1:b);d=S(a||0,N(b)?1:b)+1;return Q(u.random()*(d-c)+c)}});
H(t,!0,!0,{log:function(a){return u.log(this)/(a?u.log(a):1)},abbr:function(a){return Bc(this,a,"kmbt",0,4)},metric:function(a,b){return Bc(this,a,"n\u03bcm kMGTPE",4,N(b)?1:b)},bytes:function(a,b){return Bc(this,a,"kMGTPE",0,N(b)?4:b,!0)+"B"},isInteger:function(){return 0==this%1},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return 0===this%a},format:function(a,b,c){var d,e,g,f="";N(b)&&(b=",");N(c)&&(c=".");d=
(y(a)?Da(this,a||0).toFixed(S(a,0)):this.toString()).replace(/^-/,"").split(".");e=d[0];g=d[1];for(d=e.length;0<d;d-=3)d<e.length&&(f=b+f),f=e.slice(S(0,d-3),d)+f;g&&(f+=c+Na("0",(a||0)-g.length)+g);return(0>this?"-":"")+f},hex:function(a){return this.pad(a||1,!1,16)},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return s.fromCharCode(this)},pad:function(a,b,c){return T(this,a,b,c)},ordinalize:function(){var a=P(this),a=parseInt(a.toString().slice(-2));
return this+Pa(a)},toNumber:function(){return parseFloat(this,10)}});(function(){function a(a){return function(c){return c?Da(this,c,a):a(this)}}H(t,!0,!0,{ceil:a(Aa),round:a(R),floor:a(Q)});K(t,!0,!0,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,c){a[c]=function(a,b){return u[c](this,a,b)}})})();
"use strict";
function Ic(a){a=+a;if(0>a||Infinity===a)throw new RangeError("Invalid number");return a}function Jc(a,b){return Na(M(b)?b:" ",a)}function Kc(a,b,c,d,e){var g;if(a.length<=b)return a.toString();d=N(d)?"...":d;switch(c){case "left":return a=e?Lc(a,b,!0):a.slice(a.length-b),d+a;case "middle":return c=Aa(b/2),g=Q(b/2),b=e?Lc(a,c):a.slice(0,c),a=e?Lc(a,g,!0):a.slice(a.length-g),b+d+a;default:return b=e?Lc(a,b):a.slice(0,b),b+d}}
function Lc(a,b,c){if(c)return Lc(a.reverse(),b).reverse();c=q("(?=["+Ma()+"])");var d=0;return a.split(c).filter(function(a){d+=a.length;return d<=b}).join("")}function Mc(a,b,c){z(b)&&(b=a.indexOf(b),-1===b&&(b=c?a.length:0));return b}var Nc,Oc;H(s,!0,!1,{repeat:function(a){a=Ic(a);return Na(this,a)}});
H(s,!0,function(a){return D(a)||2<arguments.length},{startsWith:function(a){var b=arguments,c=b[1],b=b[2],d=this;c&&(d=d.slice(c));N(b)&&(b=!0);c=D(a)?a.source.replace("^",""):Ra(a);return q("^"+c,b?"":"i").test(d)},endsWith:function(a){var b=arguments,c=b[1],b=b[2],d=this;M(c)&&(d=d.slice(0,c));N(b)&&(b=!0);c=D(a)?a.source.replace("$",""):Ra(a);return q(c+"$",b?"":"i").test(d)}});
H(s,!0,!0,{escapeRegExp:function(){return Ra(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,
"/").replace(/&amp;/g,"&")},encodeBase64:function(){return Nc(unescape(encodeURIComponent(this)))},decodeBase64:function(){return decodeURIComponent(escape(Oc(this)))},each:function(a,b){var c,d,e;F(a)?(b=a,a=/[\s\S]/g):a?z(a)?a=q(Ra(a),"gi"):D(a)&&(a=q(a.source,Qa(a,"g"))):a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0,e=c.length;d<e;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=s.fromCharCode(c+a)});return b},codes:function(a){var b=[],
c,d;c=0;for(d=this.length;c<d;c++){var e=this.charCodeAt(c);b.push(e);a&&a.call(this,e,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(b){if(a)var d=a.call(b);return d?d:b})},isBlank:function(){return 0===this.trim().length},has:function(a){return-1!==this.search(D(a)?a:Ra(a))},add:function(a,b){b=N(b)?
this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return"\u3000"===b?b:" "})},at:function(){return Wa(this,arguments,!0)},from:function(a){return this.slice(Mc(this,a,!0))},to:function(a){N(a)&&(a=this.length);return this.slice(0,Mc(this,a))},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,
"_").replace(s.Inflector&&s.Inflector.acronymRegExp,function(a,b){return(0<b?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=(b=s.Inflector)&&b.acronyms[d];b=z(b)?b:void 0;e=!1!==a||0<e;return b?e?b:b.toLowerCase():e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var a=this;sa(0<arguments.length?
arguments:[""],function(b){a=a.replace(q("</?"+Ra(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;sa(0<arguments.length?arguments:["\\S+"],function(b){b=q("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c){return Kc(this,a,b,c)},truncateOnWord:function(a,b,c){return Kc(this,a,b,c,!0)},pad:function(a,b){var c,d;a=Ic(a);c=S(0,a-this.length)/2;d=Q(c);c=Aa(c);return Jc(d,b)+this+Jc(c,b)},padLeft:function(a,b){a=Ic(a);return Jc(S(0,a-
this.length),b)+this},padRight:function(a,b){a=Ic(a);return this+Jc(S(0,a-this.length),b)},first:function(a){N(a)&&(a=1);return this.substr(0,a)},last:function(a){N(a)&&(a=1);return this.substr(0>this.length-a?0:this.length-a)},toNumber:function(a){return Oa(this,a)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[^']/g:/^\S/,function(a){var d=a.toUpperCase(),e;e=b?a:d;b=d!==a;return e})},assign:function(){var a={};sa(arguments,function(b,c){G(b)?xa(a,b):a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,
function(b,c){return J(a,c)?a[c]:b})}});H(s,!0,!0,{insert:s.prototype.add});
(function(a){if(ba.btoa)Nc=ba.btoa,Oc=ba.atob;else{var b=/[^A-Za-z0-9\+\/\=]/g;Nc=function(b){var d="",e,g,f,h,l,n,x=0;do e=b.charCodeAt(x++),g=b.charCodeAt(x++),f=b.charCodeAt(x++),h=e>>2,e=(e&3)<<4|g>>4,l=(g&15)<<2|f>>6,n=f&63,isNaN(g)?l=n=64:isNaN(f)&&(n=64),d=d+a.charAt(h)+a.charAt(e)+a.charAt(l)+a.charAt(n);while(x<b.length);return d};Oc=function(c){var d="",e,g,f,h,l,n=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");do e=a.indexOf(c.charAt(n++)),
g=a.indexOf(c.charAt(n++)),h=a.indexOf(c.charAt(n++)),l=a.indexOf(c.charAt(n++)),e=e<<2|g>>4,g=(g&15)<<4|h>>2,f=(h&3)<<6|l,d+=s.fromCharCode(e),64!=h&&(d+=s.fromCharCode(g)),64!=l&&(d+=s.fromCharCode(f));while(n<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");})();
(function($) {
  var bubblings, currentElement, dragCallbacks, dragStatus, dropCallbacks, holdingHandler, isMouseDown, lastElemLeft, lastElemTop, lastMouseX, lastMouseY;
  isMouseDown = false;
  currentElement = null;
  dropCallbacks = {};
  dragCallbacks = {};
  bubblings = {};
  lastMouseX = void 0;
  lastMouseY = void 0;
  lastElemTop = void 0;
  lastElemLeft = void 0;
  dragStatus = {};
  holdingHandler = false;
  $.getMousePosition = function(e) {
    var posx, posy;
    posx = 0;
    posy = 0;
    if (!e) {
      e = window.event;
    }
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
      x: posx,
      y: posy
    };
  };
  $.updatePosition = function(e) {
    var pos, spanX, spanY;
    pos = $.getMousePosition(e);
    spanX = pos.x - lastMouseX;
    spanY = pos.y - lastMouseY;
    $(currentElement).css("top", lastElemTop + spanY);
    return $(currentElement).css("left", lastElemLeft + spanX);
  };
  $.updatePositionX = function(e) {
    var pos, spanX;
    pos = $.getMousePosition(e);
    spanX = pos.x - lastMouseX;
    return $(currentElement).css("left", lastElemLeft + spanX);
  };
  $.updatePositionY = function(e) {
    var pos, spanY;
    pos = $.getMousePosition(e);
    spanY = pos.y - lastMouseY;
    return $(currentElement).css("top", lastElemTop + spanY);
  };
  $(document).mousemove(function(e) {
    if (isMouseDown && dragStatus[currentElement.id] !== "false") {
      dragStatus[currentElement.id](e);
      if (dragCallbacks[currentElement.id] !== undefined) {
        dragCallbacks[currentElement.id](e, currentElement);
      }
      return false;
    }
  });
  $(document).mouseup(function(e) {
    if (isMouseDown && dragStatus[currentElement.id] !== "false") {
      isMouseDown = false;
      if (dropCallbacks[currentElement.id] !== undefined) {
        dropCallbacks[currentElement.id](e, currentElement);
      }
      return false;
    }
  });
  $.fn.ondrag = function(callback) {
    return this.each(function() {
      return dragCallbacks[this.id] = callback;
    });
  };
  $.fn.ondrop = function(callback) {
    return this.each(function() {
      return dropCallbacks[this.id] = callback;
    });
  };
  $.fn.dragOff = function() {
    return this.each(function() {
      return dragStatus[this.id] = "off";
    });
  };
  $.fn.dragOn = function() {
    return this.each(function() {
      return dragStatus[this.id] = $.updatePosition;
    });
  };
  $.fn.dragOnY = function() {
    return this.each(function() {
      return dragStatus[this.id] = $.updatePositionY;
    });
  };
  $.fn.setHandler = function(handlerId) {
    return this.each(function() {
      var draggable;
      draggable = this;
      bubblings[this.id] = true;
      $(draggable).css("cursor", "");
      dragStatus[draggable.id] = "handler";
      $("#" + handlerId).css("cursor", "move");
      $("#" + handlerId).mousedown(function(e) {
        holdingHandler = true;
        return $(draggable).trigger("mousedown", e);
      });
      return $("#" + handlerId).mouseup(function(e) {
        return holdingHandler = false;
      });
    });
  };
  $.fn.easydrag = function(allowBubbling) {
    return this.each(function() {
      if (undefined === this.id || !this.id.length) {
        this.id = "easydrag" + (new Date().getTime());
      }
      bubblings[this.id] = (allowBubbling ? true : false);
      $(this).css("cursor", "move");
      return $(this).mousedown(function(e) {
        var pos;
        if ((dragStatus[this.id] === "off") || (dragStatus[this.id] === "handler" && !holdingHandler)) {
          return bubblings[this.id];
        }
        $(this).css("position", "absolute");
        $(this).to_z_front();
        isMouseDown = true;
        currentElement = this;
        pos = $.getMousePosition(e);
        lastMouseX = pos.x;
        lastMouseY = pos.y;
        lastElemTop = this.offsetTop;
        lastElemLeft = this.offsetLeft;
        dragStatus[this.id](e);
        return bubblings[this.id];
      });
    });
  };
  return $.fn.to_z_front = function() {
    var order;
    order = new Date().getTime();
    $(this).css("z-index", order);
    return order;
  };
})(jQuery);
/*
 * jQuery Plugin: Tokenizing Autocomplete Text Entry
 * Version 1.6.0
 *
 * Copyright (c) 2009 James Smith (http://loopj.com)
 * Licensed jointly under the GPL and MIT licenses,
 * choose which one suits your project best!
 *
 */


(function ($) {
// Default settings
var DEFAULT_SETTINGS = {
	// Search settings
    method: "GET",
    contentType: "json",
    queryParam: "q",
    searchDelay: 300,
    minChars: 1,
    propertyToSearch: "name",
    jsonContainer: null,

	// Display settings
    hintText: "Type in a search term",
    noResultsText: "No results",
    searchingText: "Searching...",
    deleteText: "&times;",
    animateDropdown: true,

	// Tokenization settings
    tokenLimit: null,
    tokenDelimiter: ",",
    preventDuplicates: false,

	// Output settings
    tokenValue: "id",

	// Prepopulation settings
    prePopulate: null,
    processPrePopulate: false,

	// Manipulation settings
    idPrefix: "token-input-",

	// Formatters
    resultsFormatter: function(item){ return "<li>" + item[this.propertyToSearch]+ "</li>" },
    tokenFormatter: function(item) { return "<li><p>" + item[this.propertyToSearch] + "</p></li>" },

	// Callbacks
    onResult: null,
    onAdd: null,
    onDelete: null,
    onReady: null
};

// Default classes to use when theming
var DEFAULT_CLASSES = {
    tokenList: "token-input-list",
    token: "token-input-token",
    tokenDelete: "token-input-delete-token",
    selectedToken: "token-input-selected-token",
    highlightedToken: "token-input-highlighted-token",
    dropdown: "token-input-dropdown",
    dropdownItem: "token-input-dropdown-item",
    dropdownItem2: "token-input-dropdown-item2",
    selectedDropdownItem: "token-input-selected-dropdown-item",
    inputToken: "token-input-input-token"
};

// Input box position "enum"
var POSITION = {
    BEFORE: 0,
    AFTER: 1,
    END: 2
};

// Keys "enum"
var KEY = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    NUMPAD_ENTER: 108,
    COMMA: 188
};

// Additional public (exposed) methods
var methods = {
    init: function(url_or_data_or_function, options) {
        var settings = $.extend({}, DEFAULT_SETTINGS, options || {});

        return this.each(function () {
            $(this).data("tokenInputObject", new $.TokenList(this, url_or_data_or_function, settings));
        });
    },
    clear: function() {
        this.data("tokenInputObject").clear();
        return this;
    },
    add: function(item) {
        this.data("tokenInputObject").add(item);
        return this;
    },
    remove: function(item) {
        this.data("tokenInputObject").remove(item);
        return this;
    },
    get: function() {
    	return this.data("tokenInputObject").getTokens();
   	}
}

// Expose the .tokenInput function to jQuery as a plugin
$.fn.tokenInput = function (method) {
    // Method calling and initialization logic
    if(methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
        return methods.init.apply(this, arguments);
    }
};

// TokenList class for each input
$.TokenList = function (input, url_or_data, settings) {
    //
    // Initialization
    //

    // Configure the data source
    if($.type(url_or_data) === "string" || $.type(url_or_data) === "function") {
        // Set the url to query against
        settings.url = url_or_data;

        // If the URL is a function, evaluate it here to do our initalization work
        var url = computeURL();

        // Make a smart guess about cross-domain if it wasn't explicitly specified
        if(settings.crossDomain === undefined) {
            if(url.indexOf("://") === -1) {
                settings.crossDomain = false;
            } else {
                settings.crossDomain = (location.href.split(/\/+/g)[1] !== url.split(/\/+/g)[1]);
            }
        }
    } else if(typeof(url_or_data) === "object") {
        // Set the local data to search through
        settings.local_data = url_or_data;
    }

    // Build class names
    if(settings.classes) {
        // Use custom class names
        settings.classes = $.extend({}, DEFAULT_CLASSES, settings.classes);
    } else if(settings.theme) {
        // Use theme-suffixed default class names
        settings.classes = {};
        $.each(DEFAULT_CLASSES, function(key, value) {
            settings.classes[key] = value + "-" + settings.theme;
        });
    } else {
        settings.classes = DEFAULT_CLASSES;
    }


    // Save the tokens
    var saved_tokens = [];

    // Keep track of the number of tokens in the list
    var token_count = 0;

    // Basic cache to save on db hits
    var cache = new $.TokenList.Cache();

    // Keep track of the timeout, old vals
    var timeout;
    var input_val;

    // Create a new text input an attach keyup events
    var input_box = $("<input type=\"text\"  autocomplete=\"off\">")
        .css({
            outline: "none"
        })
        .attr("id", settings.idPrefix + input.id)
        .focus(function () {
            if (settings.tokenLimit === null || settings.tokenLimit !== token_count) {
                show_dropdown_hint();
            }
        })
        .blur(function () {
            hide_dropdown();
            $(this).val("");
        })
        .bind("keyup keydown blur update", resize_input)
        .keydown(function (event) {
            var previous_token;
            var next_token;

            switch(event.keyCode) {
                case KEY.LEFT:
                case KEY.RIGHT:
                case KEY.UP:
                case KEY.DOWN:
                    if(!$(this).val()) {
                        previous_token = input_token.prev();
                        next_token = input_token.next();

                        if((previous_token.length && previous_token.get(0) === selected_token) || (next_token.length && next_token.get(0) === selected_token)) {
                            // Check if there is a previous/next token and it is selected
                            if(event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) {
                                deselect_token($(selected_token), POSITION.BEFORE);
                            } else {
                                deselect_token($(selected_token), POSITION.AFTER);
                            }
                        } else if((event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) && previous_token.length) {
                            // We are moving left, select the previous token if it exists
                            select_token($(previous_token.get(0)));
                        } else if((event.keyCode === KEY.RIGHT || event.keyCode === KEY.DOWN) && next_token.length) {
                            // We are moving right, select the next token if it exists
                            select_token($(next_token.get(0)));
                        }
                    } else {
                        var dropdown_item = null;

                        if(event.keyCode === KEY.DOWN || event.keyCode === KEY.RIGHT) {
                            dropdown_item = $(selected_dropdown_item).next();
                        } else {
                            dropdown_item = $(selected_dropdown_item).prev();
                        }

                        if(dropdown_item.length) {
                            select_dropdown_item(dropdown_item);
                        }
                        return false;
                    }
                    break;

                case KEY.BACKSPACE:
                    previous_token = input_token.prev();

                    if(!$(this).val().length) {
                        if(selected_token) {
                            delete_token($(selected_token));
                            hidden_input.change();
                        } else if(previous_token.length) {
                            select_token($(previous_token.get(0)));
                        }

                        return false;
                    } else if($(this).val().length === 1) {
                        hide_dropdown();
                    } else {
                        // set a timeout just long enough to let this function finish.
                        setTimeout(function(){do_search();}, 5);
                    }
                    break;

                case KEY.TAB:
                case KEY.ENTER:
                case KEY.NUMPAD_ENTER:
                case KEY.COMMA:
                  if(selected_dropdown_item) {
                    add_token($(selected_dropdown_item).data("tokeninput"));
                    hidden_input.change();
                    return false;
                  }
                  break;

                case KEY.ESCAPE:
                  hide_dropdown();
                  return true;

                default:
                    if(String.fromCharCode(event.which)) {
                        // set a timeout just long enough to let this function finish.
                        setTimeout(function(){do_search();}, 5);
                    }
                    break;
            }
        });

    // Keep a reference to the original input box
    var hidden_input = $(input)
                           .hide()
                           .val("")
                           .focus(function () {
                               input_box.focus();
                           })
                           .blur(function () {
                               input_box.blur();
                           });

    // Keep a reference to the selected token and dropdown item
    var selected_token = null;
    var selected_token_index = 0;
    var selected_dropdown_item = null;

    // The list to store the token items in
    var token_list = $("<ul />")
        .addClass(settings.classes.tokenList)
        .click(function (event) {
            var li = $(event.target).closest("li");
            if(li && li.get(0) && $.data(li.get(0), "tokeninput")) {
                toggle_select_token(li);
            } else {
                // Deselect selected token
                if(selected_token) {
                    deselect_token($(selected_token), POSITION.END);
                }

                // Focus input box
                input_box.focus();
            }
        })
        .mouseover(function (event) {
            var li = $(event.target).closest("li");
            if(li && selected_token !== this) {
                li.addClass(settings.classes.highlightedToken);
            }
        })
        .mouseout(function (event) {
            var li = $(event.target).closest("li");
            if(li && selected_token !== this) {
                li.removeClass(settings.classes.highlightedToken);
            }
        })
        .insertBefore(hidden_input);

    // The token holding the input box
    var input_token = $("<li />")
        .addClass(settings.classes.inputToken)
        .appendTo(token_list)
        .append(input_box);

    // The list to store the dropdown items in
    var dropdown = $("<div>")
        .addClass(settings.classes.dropdown)
        .appendTo("body")
        .hide();

    // Magic element to help us resize the text input
    var input_resizer = $("<tester/>")
        .insertAfter(input_box)
        .css({
            position: "absolute",
            top: -9999,
            left: -9999,
            width: "auto",
            fontSize: input_box.css("fontSize"),
            fontFamily: input_box.css("fontFamily"),
            fontWeight: input_box.css("fontWeight"),
            letterSpacing: input_box.css("letterSpacing"),
            whiteSpace: "nowrap"
        });

    // Pre-populate list if items exist
    hidden_input.val("");
    var li_data = settings.prePopulate || hidden_input.data("pre");
    if(settings.processPrePopulate && $.isFunction(settings.onResult)) {
        li_data = settings.onResult.call(hidden_input, li_data);
    }
    if(li_data && li_data.length) {
        $.each(li_data, function (index, value) {
            insert_token(value);
            checkTokenLimit();
        });
    }

    // Initialization is done
    if($.isFunction(settings.onReady)) {
        settings.onReady.call();
    }

    //
    // Public functions
    //

    this.clear = function() {
        token_list.children("li").each(function() {
            if ($(this).children("input").length === 0) {
                delete_token($(this));
            }
        });
    }

    this.add = function(item) {
        add_token(item);
    }

    this.remove = function(item) {
        token_list.children("li").each(function() {
            if ($(this).children("input").length === 0) {
                var currToken = $(this).data("tokeninput");
                var match = true;
                for (var prop in item) {
                    if (item[prop] !== currToken[prop]) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    delete_token($(this));
                }
            }
        });
    }

    this.getTokens = function() {
   		return saved_tokens;
   	}

    //
    // Private functions
    //

    function checkTokenLimit() {
        if(settings.tokenLimit !== null && token_count >= settings.tokenLimit) {
            input_box.hide();
            hide_dropdown();
            return;
        }
    }

    function resize_input() {
        if(input_val === (input_val = input_box.val())) {return;}

        // Enter new content into resizer and resize input accordingly
        var escaped = input_val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        input_resizer.html(escaped);
        input_box.width(input_resizer.width() + 30);
    }

    function is_printable_character(keycode) {
        return ((keycode >= 48 && keycode <= 90) ||     // 0-1a-z
                (keycode >= 96 && keycode <= 111) ||    // numpad 0-9 + - / * .
                (keycode >= 186 && keycode <= 192) ||   // ; = , - . / ^
                (keycode >= 219 && keycode <= 222));    // ( \ ) '
    }

    // Inner function to a token to the list
    function insert_token(item) {
        var this_token = settings.tokenFormatter(item);
        this_token = $(this_token)
          .addClass(settings.classes.token)
          .insertBefore(input_token);

        // The 'delete token' button
        $("<span>" + settings.deleteText + "</span>")
            .addClass(settings.classes.tokenDelete)
            .appendTo(this_token)
            .click(function () {
                delete_token($(this).parent());
                hidden_input.change();
                return false;
            });

        // Store data on the token
        var token_data = {"id": item.id};
        token_data[settings.propertyToSearch] = item[settings.propertyToSearch];
        $.data(this_token.get(0), "tokeninput", item);

        // Save this token for duplicate checking
        saved_tokens = saved_tokens.slice(0,selected_token_index).concat([token_data]).concat(saved_tokens.slice(selected_token_index));
        selected_token_index++;

        // Update the hidden input
        update_hidden_input(saved_tokens, hidden_input);

        token_count += 1;

        // Check the token limit
        if(settings.tokenLimit !== null && token_count >= settings.tokenLimit) {
            input_box.hide();
            hide_dropdown();
        }

        return this_token;
    }

    // Add a token to the token list based on user input
    function add_token (item) {
        var callback = settings.onAdd;

        // See if the token already exists and select it if we don't want duplicates
        if(token_count > 0 && settings.preventDuplicates) {
            var found_existing_token = null;
            token_list.children().each(function () {
                var existing_token = $(this);
                var existing_data = $.data(existing_token.get(0), "tokeninput");
                if(existing_data && existing_data.id === item.id) {
                    found_existing_token = existing_token;
                    return false;
                }
            });

            if(found_existing_token) {
                select_token(found_existing_token);
                input_token.insertAfter(found_existing_token);
                input_box.focus();
                return;
            }
        }

        // Insert the new tokens
        if(settings.tokenLimit == null || token_count < settings.tokenLimit) {
            insert_token(item);
            checkTokenLimit();
        }

        // Clear input box
        input_box.val("");

        // Don't show the help dropdown, they've got the idea
        hide_dropdown();

        // Execute the onAdd callback if defined
        if($.isFunction(callback)) {
            callback.call(hidden_input,item);
        }
    }

    // Select a token in the token list
    function select_token (token) {
        token.addClass(settings.classes.selectedToken);
        selected_token = token.get(0);

        // Hide input box
        input_box.val("");

        // Hide dropdown if it is visible (eg if we clicked to select token)
        hide_dropdown();
    }

    // Deselect a token in the token list
    function deselect_token (token, position) {
        token.removeClass(settings.classes.selectedToken);
        selected_token = null;

        if(position === POSITION.BEFORE) {
            input_token.insertBefore(token);
            selected_token_index--;
        } else if(position === POSITION.AFTER) {
            input_token.insertAfter(token);
            selected_token_index++;
        } else {
            input_token.appendTo(token_list);
            selected_token_index = token_count;
        }

        // Show the input box and give it focus again
        input_box.focus();
    }

    // Toggle selection of a token in the token list
    function toggle_select_token(token) {
        var previous_selected_token = selected_token;

        if(selected_token) {
            deselect_token($(selected_token), POSITION.END);
        }

        if(previous_selected_token === token.get(0)) {
            deselect_token(token, POSITION.END);
        } else {
            select_token(token);
        }
    }

    // Delete a token from the token list
    function delete_token (token) {
        // Remove the id from the saved list
        var token_data = $.data(token.get(0), "tokeninput");
        var callback = settings.onDelete;

        var index = token.prevAll().length;
        if(index > selected_token_index) index--;

        // Delete the token
        token.remove();
        selected_token = null;

        // Show the input box and give it focus again
        input_box.focus();

        // Remove this token from the saved list
        saved_tokens = saved_tokens.slice(0,index).concat(saved_tokens.slice(index+1));
        if(index < selected_token_index) selected_token_index--;

        // Update the hidden input
        update_hidden_input(saved_tokens, hidden_input);

        token_count -= 1;

        if(settings.tokenLimit !== null) {
            input_box
                .show()
                .val("")
                .focus();
        }

        // Execute the onDelete callback if defined
        if($.isFunction(callback)) {
            callback.call(hidden_input,token_data);
        }
    }

    // Update the hidden input box value
    function update_hidden_input(saved_tokens, hidden_input) {
        var token_values = $.map(saved_tokens, function (el) {
            return el[settings.tokenValue];
        });
        hidden_input.val(token_values.join(settings.tokenDelimiter));

    }

    // Hide and clear the results dropdown
    function hide_dropdown () {
        dropdown.hide().empty();
        selected_dropdown_item = null;
    }

    function show_dropdown() {
        dropdown
            .css({
                position: "absolute",
                top: $(token_list).offset().top + $(token_list).outerHeight(),
                left: $(token_list).offset().left,
                zindex: 999
            })
            .show();
    }

    function show_dropdown_searching () {
        if(settings.searchingText) {
            dropdown.html("<p>"+settings.searchingText+"</p>");
            show_dropdown();
        }
    }

    function show_dropdown_hint () {
        if(settings.hintText) {
            dropdown.html("<p>"+settings.hintText+"</p>");
            show_dropdown();
        }
    }

    // Highlight the query part of the search term
    function highlight_term(value, term) {
        return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>");
    }

    function find_value_and_highlight_term(template, value, term) {
        return template.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + value + ")(?![^<>]*>)(?![^&;]+;)", "g"), highlight_term(value, term));
    }

    // Populate the results dropdown with some results
    function populate_dropdown (query, results) {
        if(results && results.length) {
            dropdown.empty();
            var dropdown_ul = $("<ul>")
                .appendTo(dropdown)
                .mouseover(function (event) {
                    select_dropdown_item($(event.target).closest("li"));
                })
                .mousedown(function (event) {
                    add_token($(event.target).closest("li").data("tokeninput"));
                    hidden_input.change();
                    return false;
                })
                .hide();

            $.each(results, function(index, value) {
                var this_li = settings.resultsFormatter(value);

                this_li = find_value_and_highlight_term(this_li ,value[settings.propertyToSearch], query);

                this_li = $(this_li).appendTo(dropdown_ul);

                if(index % 2) {
                    this_li.addClass(settings.classes.dropdownItem);
                } else {
                    this_li.addClass(settings.classes.dropdownItem2);
                }

                if(index === 0) {
                    select_dropdown_item(this_li);
                }

                $.data(this_li.get(0), "tokeninput", value);
            });

            show_dropdown();

            if(settings.animateDropdown) {
                dropdown_ul.slideDown("fast");
            } else {
                dropdown_ul.show();
            }
        } else {
            if(settings.noResultsText) {
                dropdown.html("<p>"+settings.noResultsText+"</p>");
                show_dropdown();
            }
        }
    }

    // Highlight an item in the results dropdown
    function select_dropdown_item (item) {
        if(item) {
            if(selected_dropdown_item) {
                deselect_dropdown_item($(selected_dropdown_item));
            }

            item.addClass(settings.classes.selectedDropdownItem);
            selected_dropdown_item = item.get(0);
        }
    }

    // Remove highlighting from an item in the results dropdown
    function deselect_dropdown_item (item) {
        item.removeClass(settings.classes.selectedDropdownItem);
        selected_dropdown_item = null;
    }

    // Do a search and show the "searching" dropdown if the input is longer
    // than settings.minChars
    function do_search() {
        var query = input_box.val().toLowerCase();

        if(query && query.length) {
            if(selected_token) {
                deselect_token($(selected_token), POSITION.AFTER);
            }

            if(query.length >= settings.minChars) {
                show_dropdown_searching();
                clearTimeout(timeout);

                timeout = setTimeout(function(){
                    run_search(query);
                }, settings.searchDelay);
            } else {
                hide_dropdown();
            }
        }
    }

    // Do the actual search
    function run_search(query) {
        var cache_key = query + computeURL();
        var cached_results = cache.get(cache_key);
        if(cached_results) {
            populate_dropdown(query, cached_results);
        } else {
            // Are we doing an ajax search or local data search?
            if(settings.url) {
                var url = computeURL();
                // Extract exisiting get params
                var ajax_params = {};
                ajax_params.data = {};
                if(url.indexOf("?") > -1) {
                    var parts = url.split("?");
                    ajax_params.url = parts[0];

                    var param_array = parts[1].split("&");
                    $.each(param_array, function (index, value) {
                        var kv = value.split("=");
                        ajax_params.data[kv[0]] = kv[1];
                    });
                } else {
                    ajax_params.url = url;
                }

                // Prepare the request
                ajax_params.data[settings.queryParam] = query;
                ajax_params.type = settings.method;
                ajax_params.dataType = settings.contentType;
                if(settings.crossDomain) {
                    ajax_params.dataType = "jsonp";
                }

                // Attach the success callback
                ajax_params.success = function(results) {
                  if($.isFunction(settings.onResult)) {
                      results = settings.onResult.call(hidden_input, results);
                  }
                  cache.add(cache_key, settings.jsonContainer ? results[settings.jsonContainer] : results);

                  // only populate the dropdown if the results are associated with the active search query
                  if(input_box.val().toLowerCase() === query) {
                      populate_dropdown(query, settings.jsonContainer ? results[settings.jsonContainer] : results);
                  }
                };

                // Make the request
                $.ajax(ajax_params);
            } else if(settings.local_data) {
                // Do the search through local data
                var results = $.grep(settings.local_data, function (row) {
                    return row[settings.propertyToSearch].toLowerCase().indexOf(query.toLowerCase()) > -1;
                });

                if($.isFunction(settings.onResult)) {
                    results = settings.onResult.call(hidden_input, results);
                }
                cache.add(cache_key, results);
                populate_dropdown(query, results);
            }
        }
    }

    // compute the dynamic URL
    function computeURL() {
        var url = settings.url;
        if(typeof settings.url == 'function') {
            url = settings.url.call();
        }
        return url;
    }
};

// Really basic cache for the results
$.TokenList.Cache = function (options) {
    var settings = $.extend({
        max_size: 500
    }, options);

    var data = {};
    var size = 0;

    var flush = function () {
        data = {};
        size = 0;
    };

    this.add = function (query, results) {
        if(size > settings.max_size) {
            flush();
        }

        if(!data[query]) {
            size += 1;
        }

        data[query] = results;
    };

    this.get = function (query) {
        return data[query];
    };
};
}(jQuery));
Date.addLocale("ja", {
  monthSuffix: "月",
  weekdays: "日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日",
  units: "ミリ秒,秒,分,時間,日,週間|週,ヶ月|ヵ月|月,年",
  short: "{yyyy}年{M}月{d}日",
  long: "{yyyy}年{M}月{d}日 {H}時{mm}分",
  full: "{yyyy}年{M}月{d}日 {Weekday} {H}時{mm}分{ss}秒",
  past: "{num}{unit}{sign}",
  future: "{num}{unit}{sign}",
  duration: "{num}{unit}",
  timeSuffixes: "時,分,秒",
  ampm: "午前,午後",
  modifiers: [
    {
      name: "day",
      src: "一昨日",
      value: -2
    }, {
      name: "day",
      src: "昨日",
      value: -1
    }, {
      name: "day",
      src: "今日",
      value: 0
    }, {
      name: "day",
      src: "明日",
      value: 1
    }, {
      name: "day",
      src: "明後日",
      value: 2
    }, {
      name: "sign",
      src: "前",
      value: -1
    }, {
      name: "sign",
      src: "後",
      value: 1
    }, {
      name: "shift",
      src: "去|先",
      value: -1
    }, {
      name: "shift",
      src: "来",
      value: 1
    }
  ],
  dateParse: ["{num}{unit}{sign}"],
  timeParse: ["{shift}{unit=5-7}{weekday?}", "{year}年{month?}月?{date?}日?", "{month}月{date?}日?", "{date}日"]
});
/*
 AngularJS v1.2.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(W,N,r){'use strict';function G(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.5/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function pb(b){if(null==b||Aa(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(A(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(pb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Nc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Za(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Qb(b,a);return b}function R(b){return parseInt(b,
10)}function Rb(b,a){return w(new (w(function(){},{prototype:b})),a)}function s(){}function Ba(b){return b}function ca(b){return function(){return b}}function H(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function U(b){return null!=b&&"object"===typeof b}function D(b){return"string"===typeof b}function qb(b){return"number"===typeof b}function La(b){return"[object Date]"===$a.call(b)}function L(b){return"[object Array]"===$a.call(b)}function A(b){return"function"===typeof b}
function ab(b){return"[object RegExp]"===$a.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Oc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Pc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function bb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=bb(b,a);0<=c&&b.splice(c,1);return a}function ga(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");if(a){if(b===
a)throw Na("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push(ga(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ga(b[d]);Qb(a,c)}}else(a=b)&&(L(b)?a=ga(b,[]):La(b)?a=new Date(b.getTime()):ab(b)?a=RegExp(b.source):U(b)&&(a=ga(b,{})));return a}function Qc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function ta(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ta(b[d],a[d]))return!1;return!0}}else{if(La(b))return La(a)&&b.getTime()==a.getTime();if(ab(b)&&ab(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!ta(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!A(a[d]))return!1;return!0}return!1}function Sb(){return N.securityPolicy&&
N.securityPolicy.isActive||N.querySelector&&!(!N.querySelector("[ng-csp]")&&!N.querySelector("[data-ng-csp]"))}function rb(b,a){var c=2<arguments.length?ua.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ua.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:Aa(a)?c="$WINDOW":a&&N===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Rc,a?"  ":null)}function Tb(b){return D(b)?JSON.parse(b):b}function Oa(b){b&&0!==b.length?(b=v(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=x(b).clone();try{b.empty()}catch(a){}var c=x("<div>").append(b).html();try{return 3===b[0].nodeType?v(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+v(b)})}catch(d){return v(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),z(d)&&(b=z(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))}):a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))});return a.length?a.join("&"):""}function sb(b){return va(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function va(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Sc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(N.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=x(b);if(b.injector()){var c=b[0]===N?"document":ha(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Pa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Tc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(A(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function wa(b,a){if("hasOwnProperty"===b)throw Na("badname",
a);}function ub(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&A(b)?rb(e,b):b}function vb(b){var a=b[0];b=b[b.length-1];if(a===b)return x(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return x(c)}function Uc(b){var a=G("$injector"),c=G("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||G;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&
b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),
controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Ra(b){return b.replace(Vc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Wc,"Moz$1")}function wb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,t,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=x(k[m]),l?p.triggerHandler("$destroy"):l=!l,t=0,p=(C=p.children()).length;t<
p;t++)e.push(Ca(C[t]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function I(b){if(b instanceof I)return b;if(!(this instanceof I)){if(D(b)&&"<"!=b.charAt(0))throw xb("nosel");return new I(b)}if(D(b)){var a=N.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);yb(this,a.childNodes);x(N.createDocumentFragment()).append(this)}else yb(this,b)}function zb(b){return b.cloneNode(!0)}function Da(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Da(b[a])}function $b(b,a,c,d){if(z(d))throw xb("offargs");var e=ka(b,"events");ka(b,"handle")&&(H(a)?q(e,function(a,c){Ab(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Ab(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function Zb(b,a){var c=b[db],d=Sa[c];d&&(a?delete Sa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Sa[c],b[db]=r))}function ka(b,a,c){var d=b[db],d=Sa[d||-1];if(z(c))d||(b[db]=d=++Xc,d=Sa[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=ka(b,"data"),e=z(c),g=!e&&z(a),f=g&&!U(a);d||f||ka(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];w(d,a)}else return d}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function yb(b,a){if(a){a=a.nodeName||!z(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=x(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}
function cc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Da(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function dc(b,a){var c=fb[a.toLowerCase()];return c&&ec[b.nodeName]&&c}function Yc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||N);if(H(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};
c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],function(a){a.call(b,c)});8>=E?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ea(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===r&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Ta(b){q(b,this.put,this)}
function fc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Zc,""),c=c.match($c),q(c[1].split(ad),function(b){b.replace(bd,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(U(b))q(b,Pb(a));else return a(b,c)}}function c(a,b){wa(a,"service");if(A(b)||L(b))b=n.instantiate(b);if(!b.$get)throw Ua("pget",a);return m[a+h]=b}function d(a,b){return c(a,
{$get:b})}function e(a){var b=[],c,d,h,g;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Va(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,h=0,g=d.length;h<g;h++){var f=d[h],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else A(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(m){throw L(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Ua("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===
f)throw Ua("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),a[d]=f,a[d]=b(d)}finally{l.shift()}}function d(a,b,e){var h=[],g=fc(a),f,k,l;k=0;for(f=g.length;k<f;k++){l=g[k];if("string"!==typeof l)throw Ua("itkn",l);h.push(e&&e.hasOwnProperty(l)?e[l]:c(l))}a.$inject||(a=a[f]);return a.apply(b,h)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||A(e)?e:c},get:c,annotate:fc,has:function(b){return m.hasOwnProperty(b+
h)||a.hasOwnProperty(b)}}}var f={},h="Provider",l=[],k=new Ta,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ca(b))}),constant:a(function(a,b){wa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Ua("unpr",l.join(" <- "));}),p={},t=p.$injector=
g(p,function(a){a=n.get(a+h);return t.invoke(a.$get,a)});q(e(b),function(a){t.invoke(a||s)});return t}function cd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==v(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function dd(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(C--,0===C)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function g(a,b){(function la(){q(K,function(a){a()});u=b(la,a)})()}function f(){y=null;P!=h.url()&&(P=h.url(),q(ba,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,n=b.setTimeout,p=b.clearTimeout,t={};h.isMock=!1;var C=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};
h.notifyWhenNoOutstandingRequests=function(a){q(K,function(a){a()});0===C?a():B.push(a)};var K=[],u;h.addPollFn=function(a){H(u)&&g(100,n);K.push(a);return a};var P=k.href,Z=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(P!=a)return P=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",a),Z.attr("href",Z.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var ba=[],Q=!1;h.onUrlChange=function(a){if(!Q){if(d.history)x(b).on("popstate",
f);if(d.hashchange)x(b).on("hashchange",f);else h.addPollFn(f);Q=!0}ba.push(a);return a};h.baseHref=function(){var a=Z.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var Y={},X="",$=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===r?l.cookie=escape(a)+"=;path="+$+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+$).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));
else{if(l.cookie!==X)for(X=l.cookie,d=X.split("; "),Y={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Y[a]===r&&(Y[a]=unescape(e.substring(h+1))));return Y}};h.defer=function(a,b){var c;C++;c=n(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};h.defer.cancel=function(a){return t[a]?(delete t[a],p(a),e(s),!0):!1}}function ed(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new dd(b,d,a,c)}]}function fd(){this.$get=function(){function b(b,
d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var f=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!H(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=m[a];if(b)return e(b),l[a]},remove:function(a){var b=m[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete m[a],
delete l[a],f--)},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return w({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function gd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function hc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=
function l(a,e){wa(a,"directive");D(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);A(f)?f={compile:ca(f)}:!f.compile&&f.link&&(f.compile=ca(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Pb(l));return this};this.aHrefSanitizationWhitelist=
function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,t,C,B,K,u,P,Z){function y(a,b,c,d,e){a instanceof x||(a=x(a));q(a,function(b,c){3==b.nodeType&&
b.nodeValue.match(/\S+/)&&(a[c]=x(b).wrap("<span></span>").parent()[0])});var g=Q(a,b,a,c,d,e);return function(b,c,d){tb(b,"scope");var e=c?Fa.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var k=e[d];1!=k.nodeType&&9!=k.nodeType||e.eq(d).data("$scope",b)}ba(e,"ng-scope");c&&c(e,b);g&&g(b,e,e);return e}}function ba(a,b){try{a.addClass(b)}catch(c){}}function Q(a,b,c,d,e,g){function f(a,c,d,e){var g,l,m,p,n,t,C,da=[];n=0;for(t=c.length;n<t;n++)da.push(c[n]);
C=n=0;for(t=k.length;n<t;C++)l=da[C],c=k[n++],g=k[n++],m=x(l),c?(c.scope?(p=a.$new(),m.data("$scope",p),ba(m,"ng-scope")):p=a,(m=c.transclude)||!e&&b?c(g,p,l,d,Y(a,m||b)):c(g,p,l,d,e)):g&&g(a,l.childNodes,r,e)}for(var k=[],l,m,p,n=0;n<a.length;n++)m=new Eb,l=X(a[n],[],m,0===n?d:r,e),l=(g=l.length?M(l,a[n],m,b,c,null,[],[],g):null)&&g.terminal||!a[n].childNodes||!a[n].childNodes.length?null:Q(a[n].childNodes,g?g.transclude:b),k.push(g),k.push(l),p=p||g||l,g=null;return p?f:null}function Y(a,b){return function(c,
d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",rb(c,c.$destroy));return d}}function X(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:la(b,ma(Ga(a).toLowerCase()),"E",d,f);var m,p,n;l=a.attributes;for(var t=0,C=l&&l.length;t<C;t++){var B=!1,y=!1;m=l[t];if(!E||8<=E||m.specified){p=m.name;n=ma(p);xa.test(n)&&(p=cb(n.substr(6),"-"));var P=n.replace(/(Start|End)$/,"");n===P+"Start"&&(B=p,y=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));n=ma(p.toLowerCase());
k[n]=p;c[n]=m=aa(E&&"href"==p?decodeURIComponent(a.getAttribute(p,2)):m.value);dc(a,n)&&(c[n]=!0);I(a,b,m,n);la(b,n,"A",d,f,B,y)}}a=a.className;if(D(a)&&""!==a)for(;l=g.exec(a);)n=ma(l[2]),la(b,n,"C",d,f)&&(c[n]=aa(l[3])),a=a.substr(l.index+l[0].length);break;case 3:v(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))n=ma(l[1]),la(b,n,"M",d,f)&&(c[n]=aa(l[2]))}catch(K){}}b.sort(s);return b}function $(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,
c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function O(a,b,c){return function(d,e,g,f,k){e=$(e[0],b,c);return a(d,e,g,f,k)}}function M(a,c,d,e,g,f,l,p,n){function B(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=F.require;if(Q===F||F.$$isolateScope)a=T(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=F.require;if(Q===F||F.$$isolateScope)b=T(b,{isolateScope:!0});p.push(b)}}function P(a,b,c){var d,e="data",
g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ia("ctreq",a,ea);}else L(a)&&(d=[],q(a,function(a){d.push(P(a,b,c))}));return d}function K(a,e,g,f,n){function B(a,b){var c;2>arguments.length&&(b=a,a=r);Ha&&(c=O);return n(a,b,c)}var y,da,Y,u,$,J,O={},X;y=c===g?d:Qc(d,new Eb(x(g),d.$attr));da=y.$$element;if(Q){var S=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=x(g);J=e.$new(!0);M&&
M===Q.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);ba(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(S)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":y.$observe(g,function(a){J[c]=a});y.$$observers[g].$$scope=e;y[g]&&(J[c]=b(y[g])(e));break;case "=":if(f&&!y[g])break;m=t(y[g]);p=m.literal?ta:function(a,b){return a===b};n=m.assign||function(){l=J[c]=m(e);throw ia("nonassign",y[g],Q.name);};l=J[c]=m(e);J.$watch(function(){var a=
m(e);p(a,J[c])||(p(a,l)?n(e,a=J[c]):J[c]=a);return l=a},null,m.literal);break;case "&":m=t(y[g]);J[c]=function(a){return m(e,a)};break;default:throw ia("iscp",Q.name,c,a);}})}X=n&&B;Z&&q(Z,function(a){var b={$scope:a===Q||a.$$isolateScope?J:e,$element:da,$attrs:y,$transclude:X},c;$=a.controller;"@"==$&&($=y[a.name]);c=C($,b);O[a.name]=c;Ha||da.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(Y=l.length;f<Y;f++)try{u=l[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,
da,O),X)}catch(v){m(v,ha(da))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,n);for(f=p.length-1;0<=f;f--)try{u=p[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),X)}catch(hd){m(hd,ha(da))}}n=n||{};var Y=-Number.MAX_VALUE,u,Z=n.controllerDirectives,Q=n.newIsolateScopeDirective,M=n.templateDirective;n=n.nonTlbTranscludeDirective;for(var la=!1,Ha=!1,s=d.$$element=x(c),F,ea,v,w=e,G,I=0,E=a.length;I<E;I++){F=a[I];var xa=F.$$start,gb=F.$$end;xa&&(s=$(c,xa,gb));v=r;if(Y>
F.priority)break;if(v=F.scope)u=u||F,F.templateUrl||(H("new/isolated scope",Q,F,s),U(v)&&(Q=F));ea=F.name;!F.templateUrl&&F.controller&&(v=F.controller,Z=Z||{},H("'"+ea+"' controller",Z[ea],F,s),Z[ea]=F);if(v=F.transclude)la=!0,F.$$tlb||(H("transclusion",n,F,s),n=F),"element"==v?(Ha=!0,Y=F.priority,v=$(c,xa,gb),s=d.$$element=x(N.createComment(" "+ea+": "+d[ea]+" ")),c=s[0],R(g,x(ua.call(v,0)),c),w=y(v,e,Y,f&&f.name,{nonTlbTranscludeDirective:n})):(v=x(zb(c)).contents(),s.empty(),w=y(v,e));if(F.template)if(H("template",
M,F,s),M=F,v=A(F.template)?F.template(s,d):F.template,v=ic(v),F.replace){f=F;v=x("<div>"+aa(v)+"</div>").contents();c=v[0];if(1!=v.length||1!==c.nodeType)throw ia("tplrt",ea,"");R(g,s,c);E={$attr:{}};v=X(c,[],E);var V=a.splice(I+1,a.length-(I+1));Q&&S(v);a=a.concat(v).concat(V);gc(d,E);E=a.length}else s.html(v);if(F.templateUrl)H("template",M,F,s),M=F,F.replace&&(f=F),K=z(a.splice(I,a.length-I),s,d,g,w,l,p,{controllerDirectives:Z,newIsolateScopeDirective:Q,templateDirective:M,nonTlbTranscludeDirective:n}),
E=a.length;else if(F.compile)try{G=F.compile(s,d,w),A(G)?B(null,G,xa,gb):G&&B(G.pre,G.post,xa,gb)}catch(W){m(W,ha(s))}F.terminal&&(K.terminal=!0,Y=Math.max(Y,F.priority))}K.scope=u&&!0===u.scope;K.transclude=la&&w;return K}function S(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function la(b,e,g,f,k,n,p){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var C=0,B=e.length;C<B;C++)try{t=e[C],(f===r||f>t.priority)&&-1!=t.restrict.indexOf(g)&&(n&&(t=Rb(t,
{$$start:n,$$end:p})),b.push(t),k=t)}catch(y){m(y)}}return k}function gc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function z(a,b,c,d,e,g,f,k){var l=[],m,t,C=b[0],B=a.shift(),
y=w({},B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),P=A(B.templateUrl)?B.templateUrl(b,c):B.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(P),{cache:p}).success(function(n){var p,K;n=ic(n);if(B.replace){n=x("<div>"+aa(n)+"</div>").contents();p=n[0];if(1!=n.length||1!==p.nodeType)throw ia("tplrt",B.name,P);n={$attr:{}};R(d,b,p);var u=X(p,[],n);U(B.scope)&&S(u);a=u.concat(a);gc(c,n)}else p=C,b.html(n);a.unshift(y);m=M(a,p,c,e,b,B,g,f,k);q(d,function(a,c){a==p&&(d[c]=
b[0])});for(t=Q(b[0].childNodes,e);l.length;){n=l.shift();K=l.shift();var ba=l.shift(),Z=l.shift(),u=b[0];K!==C&&(u=zb(p),R(ba,x(K),u));K=m.transclude?Y(n,m.transclude):Z;m(t,n,u,d,K)}l=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){l?(l.push(b),l.push(c),l.push(d),l.push(e)):m(t,b,c,d,e)}}function s(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function H(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,
ha(d));}function v(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:ca(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ba(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function G(a,b){if("srcdoc"==b)return u.HTML;var c=Ga(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function I(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ga(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ia("nodomevents");if(g=b(l[e],!0,G(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function R(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=N.createDocumentFragment();
a.appendChild(d);c[x.expando]=d[x.expando];d=1;for(e=b.length;d<e;d++)g=b[d],x(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function T(a,b){return w(function(){return a.apply(null,arguments)},a,b)}var Eb=function(a,b){this.$$element=a;this.$attr=b||{}};Eb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(jc(b,a));this.$addClass(jc(a,
b))},$set:function(a,b,c,d){var e=dc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Ga(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=Z(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);
B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ea=b.startSymbol(),Ha=b.endSymbol(),ic="{{"==ea||"}}"==Ha?Ba:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,Ha)},xa=/^ngAttr[A-Z]/;return y}]}function ma(b){return Ra(b.replace(id,""))}function jc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function jd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,
d){wa(a,"controller");U(a)?w(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,l;D(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:ub(g.$scope,h,!0)||ub(d,h,!0),Qa(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw G("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function kd(){this.$get=["$window",function(b){return x(b.document)}]}function ld(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,
arguments)}}]}function kc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=v(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function lc(b){var a=U(b)?b:r;return function(c){a||(a=kc(b));return c?a[v(c)]||null:a}}function mc(b,a,c){if(A(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function md(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&
(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==$a.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function t(a){function c(a){var b=w({},a,{data:mc(a.data,
a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){A(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=w({},a.headers),g,f,c=w({},c.common,c[v(a.method)]);b(c);b(d);a:for(g in c){a=v(g);for(f in d)if(v(f)===a)continue a;d[g]=c[g]}return d}(a);w(d,a);d.headers=g;d.method=Ia(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||
e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=mc(a.data,lc(g),a.transformRequest);H(a.data)&&q(g,function(a,b){"content-type"===v(b)&&delete g[b]});H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],h=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();
var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function C(b,c,g){function f(a,b,c){u&&(200<=a&&300>a?u.put(r,[a,b,kc(c)]):u.remove(r));l(b,a,c);d.$$phase||d.$apply()}function l(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:lc(d),config:b})}function k(){var a=bb(t.pendingRequests,b);-1!==a&&t.pendingRequests.splice(a,
1)}var p=n.defer(),C=p.promise,u,q,r=B(b.url,b.params);t.pendingRequests.push(b);C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(u=U(b.cache)?b.cache:U(e.cache)?e.cache:K);if(u)if(q=u.get(r),z(q)){if(q.then)return q.then(k,k),q;L(q)?l(q[1],q[0],ga(q[2])):l(q,200,{})}else u.put(r,C);H(q)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function B(a,b){if(!b)return a;var c=[];Nc(b,function(a,b){null===a||H(a)||(L(a)||(a=[a]),q(a,function(a){U(a)&&(a=oa(a));
c.push(va(b)+"="+va(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var K=c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});t.pendingRequests=[];(function(a){q(arguments,function(a){t[a]=function(b,c){return t(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){t[a]=
function(b,c,d){return t(w(d||{},{method:a,url:b,data:c}))}})})("post","put");t.defaults=e;return t}]}function nd(){this.$get=["$browser","$window","$document",function(b,a,c){return od(b,pd,b.defer,a.angular.callbacks,c[0])}]}function od(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;E&&8>=E?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:
c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,t,C){function B(){u=f;r&&r();y&&y.abort()}function K(a,d,e,g){var f=ya(l).protocol;ba&&c.cancel(ba);r=y=null;d="file"==f&&0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(s)}var u;b.$$incOutstandingRequestCount();l=l||b.url();if("jsonp"==v(e)){var P="_"+(d.counter++).toString(36);d[P]=function(a){d[P].data=a};var r=g(l.replace("JSON_CALLBACK","angular.callbacks."+P),function(){d[P].data?
K(m,200,d[P].data):K(m,u||-2);delete d[P]})}else{var y=new a;y.open(e,l,!0);q(n,function(a,b){z(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(4==y.readyState){var a=null,b=null;u!==f&&(a=y.getAllResponseHeaders(),b=y.responseType?y.response:y.responseText);K(m,u||y.status,b,a)}};t&&(y.withCredentials=!0);C&&(y.responseType=C);y.send(k||null)}if(0<p)var ba=c(B,p);else p&&p.then&&p.then(B)}}function qd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=
function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,t=0,C=[],B=g.length,K=!1,u=[];t<B;)-1!=(n=g.indexOf(b,t))&&-1!=(p=g.indexOf(a,n+f))?(t!=n&&C.push(g.substring(t,n)),C.push(t=c(K=g.substring(n+f,p))),t.exp=K,t=p+h,K=!0):(t!=B&&C.push(g.substring(t)),t=B);(B=C.length)||(C.push(""),B=1);if(m&&1<C.length)throw nc("noconcat",g);if(!k||K)return u.length=B,t=function(a){try{for(var b=0,c=B,f;b<c;b++)"function"==typeof(f=C[b])&&
(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||H(f)?f="":"string"!=typeof f&&(f=oa(f))),u[b]=f;return u.join("")}catch(h){a=nc("interr",g,h.toString()),d(a)}},t.exp=g,t.parts=C,t}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function rd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,t=0,C=z(l)&&!l;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=
k(function(){n.notify(t++);0<h&&t>=h&&(n.resolve(t),m(p.$$intervalId),delete e[p.$$intervalId]);C||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function sd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function oc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function pc(b,a,c){b=ya(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||td[b.protocol]||null}function qc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ya(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?
b.pathname.substring(1):b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function rc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);pc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!D(e))throw Hb("ipthprfx",a,c);qc(e,this,b);this.$$path||
(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=oc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==r)return d=e,(e=na(a,e))!==r?c+(na("/",e)||e):b+d;if((e=na(c,d))!==r)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);pc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!D(e))throw Hb("ihshprfx",
d,a);qc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=oc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function sc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;
if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function hb(b){return function(){return this[b]}}function tc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ud(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),
k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?rc:sc):(l=Wa(k),e=Ib);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);"a"!==v(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=
k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);f(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function vd(){var b=
!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||s;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),
warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,a){if("constructor"===b)throw za("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw za("isecdom",a);}return b}function ib(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=pa(a.shift(),d);var h=b[g];
h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v={}),b=b.$$v)}g=pa(a.shift(),d);return b[g]=c}function uc(b,a,c,d,e,g,f){pa(b,g);pa(a,g);pa(c,g);pa(d,g);pa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null===k||k===r)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a||null===k||k===r)return k;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(m=k,
m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c||null===k||k===r)return k;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d||null===k||k===r)return k;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e||null===k||k===r)return k;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null===k||k===r)return k;k=k[b];if(!a||
null===k||k===r)return k;k=k[a];if(!c||null===k||k===r)return k;k=k[c];if(!d||null===k||k===r)return k;k=k[d];return e&&null!==k&&k!==r?k=k[e]:k}}function vc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];var d=b.split("."),e=d.length,g;if(a.csp)g=6>e?uc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=uc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);return h};else{var f="var l, fn, p;\n";q(d,function(b,d){pa(b,c);f+="if(s === null || s === undefined) return s;\nl=s;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=function(){return f};g=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=g);return g}function wd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!wc.hasOwnProperty(b)&&(wc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Kb(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return s}}}]}function xd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return yd(function(a){b.$evalAsync(a)},a)}]}function yd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=[],l,k;return k={resolve:function(a){if(h){var c=h;h=r;l=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},
notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var k=e(),C=function(d){try{k.resolve((A(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},B=function(b){try{k.resolve((A(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},K=function(b){try{k.notify((A(g)?g:c)(b))}catch(d){a(d)}};h?h.push([C,B,K]):l.then(C,B,K);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&A(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&A(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(f,g){var m=e();b(function(){try{m.resolve((A(g)?g:d)(c))}catch(b){m.reject(b),a(b)}});return m.promise}}};
return{defer:e,reject:f,when:function(h,l,k,m){var n=e(),p,t=function(b){try{return(A(l)?l:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(A(k)?k:d)(b)}catch(c){return a(c),f(c)}},B=function(b){try{return(A(m)?m:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(t,C,B)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(B(a))})});return n.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function zd(){var b=10,a=G("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;
this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings={}}function l(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=g(a);Qa(c,b);return c}function m(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=
a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:m,get:e,exp:a,eq:!!d};c=null;if(!A(b)){var h=k(b||s,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Ma(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Ma(g,f)}},$watchCollection:function(a,
b){var c=this,d,e,f=0,h=g(a),l=[],k={},m=0;return this.$watch(function(){e=h(c);var a,b;if(U(e))if(pb(e))for(d!==l&&(d=l,m=d.length=0,f++),a=e.length,m!==a&&(f++,d.length=m=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==k&&(d=k={},m=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(m++,d[b]=e[b],f++));if(m>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(m--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,
f,g,h,k=this.$$asyncQueue,q=this.$$postDigestQueue,r,v,y=b,s,x=[],z,X,$;l("$digest");c=null;do{v=!1;for(s=this;k.length;){try{$=k.shift(),$.scope.$eval($.expression)}catch(O){n.$$phase=null,e(O)}c=null}a:do{if(h=s.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(s))!==(g=d.last)&&!(d.eq?ta(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?ga(f):f,d.fn(f,g===m?f:g,s),5>y&&(z=4-y,x[z]||(x[z]=[]),X=A(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,X+="; newVal: "+
oa(f)+"; oldVal: "+oa(g),x[z].push(X));else if(d===c){v=!1;break a}}catch(M){n.$$phase=null,e(M)}if(!(h=s.$$childHead||s!==this&&s.$$nextSibling))for(;s!==this&&!(h=s.$$nextSibling);)s=s.$parent}while(s=h);if(v&&!y--)throw n.$$phase=null,a("infdig",b,oa(x));}while(v||k.length);for(n.$$phase=null;q.length;)try{q.shift()()}catch(S){e(S)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),
a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||f.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},
$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[bb(c,b)]=null}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ua.call(arguments,
1)),k,m;do{d=f.$$listeners[a]||c;h.currentScope=f;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ua.call(arguments,1)),h,k;do{c=d;f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}while(c=d);return f}};var n=new h;return n}]}function Ad(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!E||8<=E)if(g=ya(c).href,""!==g&&!g.match(e))return"unsafe:"+
g;return c}}}function Bd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(ab(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function xc(b){var a=[];z(b)&&q(b,function(b){a.push(Bd(b))});return a}function Cd(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&
(b=xc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=xc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);
f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=ya(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===
b[m]?Fb(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Fb(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Dd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=
ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=v(b);e[Ra("parse_as_"+c)]=function(b){return g(a,b)};e[Ra("get_trusted_"+c)]=function(b){return f(a,b)};e[Ra("trust_as_"+c)]=function(b){return h(a,b)}});
return e}]}function Ed(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(v((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);
!d||m&&n||(m=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==E)return!1;if(H(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,transitions:m,animations:n,msie:E,msieDocumentMode:f}}]}function Fd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),
m=k.promise,n=z(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ya(b,a){var c=b;E&&(T.setAttribute("href",c),c=T.href);T.setAttribute("href",c);return{href:T.href,protocol:T.protocol?T.protocol.replace(/:$/,""):"",host:T.host,
search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function Fb(b){b=D(b)?ya(b):b;return b.protocol===yc.protocol&&b.host===yc.host}function Gd(){this.$get=ca(W)}function zc(b){function a(d,e){if(U(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Ac);a("date",Bc);a("filter",Hd);a("json",Id);a("limitTo",Jd);a("lowercase",Kd);a("number",Cc);a("orderBy",Dc);a("uppercase",Ld)}function Hd(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Pa.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===
b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)"$"==f?function(){if(a[f]){var b=f;e.push(function(c){return g(c,a[b])})}}():
function(){if("undefined"!=typeof a[f]){var b=f;e.push(function(c){return g(ub(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=0;h<b.length;h++){var l=b[h];e.check(l)&&d.push(l)}return d}}function Ac(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Ec(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Cc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Ec(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}
function Ec(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Fc)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Fc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==
k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function jb(b,a){return function(c,
d){var e=c["get"+b](),g=Ia(a?"SHORT"+b:b);return d[g][e]}}function Bc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=R(b[9]+b[10]),f=R(b[9]+b[11]));h.call(a,R(b[1]),R(b[2])-1,R(b[3]));g=R(b[4]||0)-g;f=R(b[5]||0)-f;h=R(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Md.test(c)?R(c):a(c));qb(c)&&(c=new Date(c));if(!La(c))return c;for(;e;)(l=Nd.exec(e))?(f=f.concat(ua.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Od[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Id(){return function(b){return oa(b,!0)}}function Jd(){return function(b,a){if(!L(b)&&!D(b))return b;a=R(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,
b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Dc(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Pc(c,function(a){var c=!1,d=a||Ba;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=
c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Gc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}var d=this,e=b.parent().controller("form")||mb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;
d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ja);c(!0);d.$addControl=function(a){wa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Ma(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Ma(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=bb(n,h))return}else f[a]=n=[],
g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ja).addClass(nb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(nb).addClass(Ja);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ob(b,a,c,d,e,g){var f=!1;a.on("compositionstart",function(){f=!0});a.on("compositionend",function(){f=!1});var h=function(){if(!f){var e=a.val();Oa(c.ngTrim||"T")&&(e=aa(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})}};
if(e.hasEvent("input"))a.on("input",h);else{var l,k=function(){l||(l=g.defer(function(){h();l=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var m=c.ngPattern,n=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return r};m&&((e=m.match(/^\/(.*)\/([gim]*)$/))?(m=RegExp(e[1],
e[2]),e=function(a){return n(m,a)}):e=function(c){var d=b.$eval(m);if(!d||!d.test)throw G("ngPattern")("noregexp",m,d,ha(a));return n(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=R(c.ngMinlength);e=function(a){if(!d.$isEmpty(a)&&a.length<p)return d.$setValidity("minlength",!1),r;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var t=R(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>t)return d.$setValidity("maxlength",
!1),r;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===a){var d=f(b||"");h?ta(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=ga(b)}function f(a){if(L(a))return a.join(" ");if(U(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==
b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var v=function(b){return D(b)?b.toLowerCase():b},Ia=function(b){return D(b)?b.toUpperCase():b},E,x,Ca,ua=[].slice,Pd=[].push,$a=Object.prototype.toString,Na=G("ng"),Pa=W.angular||(W.angular={}),Va,Ga,ja=["0","0","0"];E=R((/msie (\d+)/.exec(v(navigator.userAgent))||[])[1]);isNaN(E)&&(E=R((/trident\/.*; rv:(\d+)/.exec(v(navigator.userAgent))||[])[1]));s.$inject=[];Ba.$inject=
[];var aa=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ga=9>E?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Tc=/[A-Z]/g,Qd={full:"1.2.5",major:1,minor:2,dot:5,codeName:"singularity-expansion"},Sa=I.cache={},db=I.expando="ng-"+(new Date).getTime(),Xc=1,Hc=W.document.addEventListener?
function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ab=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Vc=/([\:\-\_]+(.))/g,Wc=/^moz([A-Z])/,xb=G("jqLite"),Fa=I.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===N.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),I(W).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+
"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},length:0,push:Pd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[v(b)]=b});var ec={};q("input select option textarea button form details".split(" "),function(b){ec[Ia(b)]=!0});q({data:ac,inheritedData:eb,scope:function(b){return x(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x(b).data("$isolateScope")||
x(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=Ra(a);if(z(c))b.style[a]=c;else{var d;8>=E&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=E&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=v(a);if(fb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||s).specified?
d:r;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?b[e]:"";b[e]=d}var a=[];9>E?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Ga(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=
a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Da(d[c]);b.innerHTML=a},empty:cc},function(b,a){I.prototype[a]=function(a,d){var e,g;if(b!==cc&&(2==b.length&&b!==Bb&&b!==bc?a:d)===r){if(U(a)){for(e=0;e<this.length;e++)if(b===ac)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Zb,
dealoc:Da,on:function a(c,d,e,g){if(z(g))throw xb("onargs");var f=ka(c,"events"),h=ka(c,"handle");f||ka(c,"events",f={});h||ka(c,"handle",h=Yc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=N.body.contains||N.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=
c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Hc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:$b,replaceWith:function(a,c){var d,e=a.parentNode;Da(a);q(new I(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},
append:function(a,c){q(new I(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new I(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Da(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new I(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,removeClass:Cb,toggleClass:function(a,
c,d){H(d)&&(d=!Bb(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:zb,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:s,stopPropagation:s}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){I.prototype[c]=
function(c,e,g){for(var f,h=0;h<this.length;h++)H(f)?(f=a(this[h],c,e,g),z(f)&&(f=x(f))):yb(f,a(this[h],c,e,g));return z(f)?f:this};I.prototype.bind=I.prototype.on;I.prototype.unbind=I.prototype.off});Ta.prototype={put:function(a,c){this[Ea(a)]=c},get:function(a){return this[Ea(a)]},remove:function(a){var c=this[a=Ea(a)];delete this[a];return c}};var $c=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ad=/,/,bd=/^\s*(_?)(\S+?)\1\s*$/,Zc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ua=G("$injector"),Rd=G("$animate"),Sd=
["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},removeClass:function(d,
e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},enabled:s}}]}],ia=G("$compile");hc.$inject=["$provide","$$sanitizeUriProvider"];var id=/^(x[\:\-_]|data[\:\-_])/i,pd=W.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw G("$httpBackend")("noxhr");},nc=G("$interpolate"),Td=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,td={http:80,
https:443,ftp:21},Hb=G("$location");sc.prototype=Ib.prototype=rc.prototype={$$html5:!1,$$replace:!1,absUrl:hb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Td.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:hb("$$protocol"),host:hb("$$host"),port:hb("$$port"),path:tc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=
Vb(a);else if(U(a))this.$$search=a;else throw Hb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:tc("$$hash",Ba),replace:function(){this.$$replace=!0;return this}};var za=G("$parse"),wc={},qa,Ka={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:s,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?
e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":s,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=
e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ud={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=
this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ka[this.ch],f=Ka[d],h=Ka[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},
is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=
d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=v(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ka.hasOwnProperty(c))d.fn=
Ka[c],d.json=Ka[c];else{var l=vc(c,this.options,this.text);d.fn=w(function(a,c){return l(a,c)},{assign:function(d,e){return ib(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ud[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=
this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();
else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",
this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return w(function(d,e){return a(d,e,c)},{constant:c.constant})},
ternaryFn:function(a,c,d){return w(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return w(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=
this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+
this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=
this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=vc(d,this.options,this.text);return w(function(c,d,h){return e(h||a(c,d),d)},{assign:function(e,f,h){return ib(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return w(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return r;(f=Xa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=r,l.then(function(a){l.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Xa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):
g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||s;Xa(l,e.text);Xa(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return w(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=
this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return w(function(c,d){for(var e={},l=0;l<a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=G("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},T=N.createElement("a"),yc=ya(W.location.href,!0);zc.$inject=["$provide"];Ac.$inject=["$locale"];Cc.$inject=["$locale"];var Fc=
".",Od={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:jb("Month"),MMM:jb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:jb("Day"),EEE:jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Lb(Math[0<
a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Nd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Md=/^\-?\d+$/;Bc.$inject=["$locale"];var Kd=ca(v),Ld=ca(Ia);Dc.$inject=["$parse"];var Vd=ca({restrict:"E",compile:function(a,c){8>=E&&(c.href||c.name||c.$set("href",""),a.append(N.createComment("IE fix")));if(!c.href&&!c.name)return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),Nb={};q(fb,function(a,c){if("multiple"!=a){var d=ma("ng-"+
c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),E&&e.prop(a,g[a]))})}}}});var mb={$addControl:s,$removeControl:s,$setValidity:s,$setDirty:s,$setPristine:s};Gc.$inject=["$element","$attrs","$scope"];var Ic=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Gc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Hc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ab(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ib(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ib(a,k,r,k);w(f,mb)})}}}}}]},Wd=Ic(),Xd=Ic(!0),Yd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Zd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,$d=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Jc={text:ob,number:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||$d.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),r;e.$setValidity("min",
!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),r;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||qb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return r})},url:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Yd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",
!1);return r};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Zd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return r};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:s,button:s,submit:s,reset:s},Kc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Jc[v(g.type)]||Jc.text)(d,e,g,f,c,a)}}}],
lb="ng-valid",kb="ng-invalid",Ja="ng-pristine",nb="ng-dirty",ae=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),l=h.assign;if(!l)throw G("ngModel")("nonassign",d.ngModel,ha(e));
this.$render=s;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||mb,m=0,n=this.$error={};e.addClass(Ja);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&m--,m||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,m++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(nb).addClass(Ja)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ja).addClass(nb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,l(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],be=function(){return{require:["ngModel","^?form"],controller:ae,link:function(a,
c,d,e){var g=e[0],f=e[1]||mb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ce=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Lc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},
de=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ee=/^(true|false|\d+)$/,fe=function(){return{priority:100,compile:function(a,c){return ee.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,
c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ge=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),he=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ie=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);
d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],je=Mb("",!0),ke=Mb("Odd",0),le=Mb("Even",1),me=sa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),ne=[function(){return{scope:!0,controller:"@",priority:500}}],Mc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Mc[c]=["$parse",function(d){return{compile:function(e,
g){var f=d(g[c]);return function(c,d,e){d.on(v(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var oe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,l;c.$watch(e.ngIf,function(g){Oa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=N.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(l&&(l.$destroy(),l=null),h&&(a.leave(vb(h.clone)),h=null))})}}}],pe=["$http","$templateCache",
"$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Pa.noop,compile:function(f,h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,r,B){var s=0,u,v,x=function(){u&&(u.$destroy(),u=null);v&&(e.leave(v),v=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!z(m)||m&&!f.$eval(m)||d()},q=++s;g?(a.get(g,{cache:c}).success(function(a){if(q===s){var c=f.$new();r.template=a;a=B(c,
function(a){x();e.enter(a,null,h,l)});u=c;v=a;u.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===s&&x()}),f.$emit("$includeContentRequested")):(x(),r.template=null)})}}}}],qe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],re=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),se=sa({terminal:!0,priority:1E3}),te=["$locale","$interpolate",function(a,c){var d=
/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,m=e.$eval(l)||{},n={},p=c.startSymbol(),t=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(m[v(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+t))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],ue=["$parse",
"$animate",function(a,c){var d=G("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),n,p,t,r,s,v,u={$id:Ea};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[4])?(n=a(m),p=function(a,c,d){v&&(u[v]=a);u[s]=c;u.$index=d;return n(e,u)}):(t=function(a,c){return Ea(c)},r=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);s=m[3]||
m[1];v=m[2];var z={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,u={},H,O,M,S,D,w,G=[];if(pb(a))D=a,n=p||t;else{n=p||r;D=[];for(M in a)a.hasOwnProperty(M)&&"$"!=M.charAt(0)&&D.push(M);D.sort()}H=D.length;h=G.length=D.length;for(f=0;f<h;f++)if(M=a===D?f:D[f],S=a[M],S=n(M,S,f),wa(S,"`track by` id"),z.hasOwnProperty(S))w=z[S],delete z[S],u[S]=w,G[f]=w;else{if(u.hasOwnProperty(S))throw q(G,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,S);G[f]={id:S};u[S]=!1}for(M in z)z.hasOwnProperty(M)&&(w=
z[M],f=vb(w.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());f=0;for(h=D.length;f<h;f++){M=a===D?f:D[f];S=a[M];w=G[f];G[f-1]&&(m=G[f-1].clone[G[f-1].clone.length-1]);if(w.scope){O=w.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);w.clone[0]!=n&&c.move(vb(w.clone),null,x(m));m=w.clone[w.clone.length-1]}else O=e.$new();O[s]=S;v&&(O[v]=M);O.$index=f;O.$first=0===f;O.$last=f===H-1;O.$middle=!(O.$first||O.$last);O.$odd=!(O.$even=0===(f&1));w.scope||l(O,function(a){a[a.length++]=
N.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,x(m));m=a;w.scope=O;w.clone=a;u[w.id]=w})}z=u})}}}],ve=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],we=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],xe=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ye=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,l=[];c.$watch(e.ngSwitch||e.on,function(d){for(var m=0,n=l.length;m<n;m++)l[m].$destroy(),a.leave(h[m]);h=[];l=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],ze=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,
c){return function(a,e,g,f,h){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})}}}),Ae=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Be=sa({controller:["$element","$transclude",function(a,c){if(!c)throw G("ngTransclude")("orphan",ha(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),
Ce=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],De=G("ngOptions"),Ee=ca({terminal:!0}),Fe=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:s};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope",
"$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){wa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=
s})}],link:function(e,f,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&u.prop("selected",!0)):H(a)&&u?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Ta(d.$viewValue);q(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){ta(e,d.$viewValue)||(e=ga(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,s,x;s=g.$modelValue;x=t(e)||[];var B=n?Ob(x):x,H,A,J;A={};r=!1;var E,I;if(v)if(u&&L(s))for(r=new Ta([]),J=0;J<s.length;J++)A[m]=s[J],r.put(u(e,A),s[J]);else r=new Ta(s);for(J=0;H=B.length,J<H;J++){k=J;if(n){k=B[J];if("$"===k.charAt(0))continue;A[n]=k}A[m]=x[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=
[],c.push(d));v?d=z(r.remove(u?u(e,A):q(e,A))):(u?(d={},d[m]=s,d=u(e,d)===u(e,A)):d=s===q(e,A),r=r||d);E=l(e,A);E=z(E)?E:"";k.push({id:u?u(e,A):n?B[J]:J,label:E,selected:d})}v||(w||null===s?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(B=c.length;A<B;A++){d=c[A];k=a[d];y.length<=A?(s={element:G.clone().attr("label",d),label:k.label},x=[s],y.push(x),f.append(s.element)):(x=y[A],s=x[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;J=0;for(H=
k.length;J<H;J++)r=k[J],(d=x[J+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&w?I=w:(I=D.clone()).val(r.id).attr("selected",r.selected).text(r.label),x.push({element:I,label:r.label,id:r.id,selected:r.selected}),E?E.after(I):s.element.append(I),E=I);for(J++;x.length>J;)x.pop().element.remove()}for(;y.length>A;)y.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw De("iexp",
s,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),t=c(k[7]),u=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=t(e)||[],d={},h,k,l,p,s,x,w;if(v)for(k=[],p=0,x=y.length;p<x;p++)for(a=y[p],l=1,s=a.length;l<s;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(u)for(w=0;w<c.length&&(d[m]=c[w],u(e,d)!=h);w++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),
"?"==h)k=r;else if(""===h)k=null;else if(u)for(w=0;w<c.length;w++){if(d[m]=c[w],u(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0],t=l[1],v=h.multiple,s=h.ngOptions,w=!1,u,D=x(N.createElement("option")),G=x(N.createElement("optgroup")),y=D.clone();l=0;for(var A=f.children(),I=A.length;l<I;l++)if(""===A[l].value){u=w=A.eq(l);break}p.init(t,w,y);if(v&&(h.required||h.ngRequired)){var E=function(a){t.$setValidity("required",
!h.required||a&&a.length);return a};t.$parsers.push(E);t.$formatters.unshift(E);h.$observe("required",function(){E(t.$viewValue)})}s?n(e,f,t):v?m(e,f,t):k(e,f,t,p)}}}}],Ge=["$interpolate",function(a){var c={addOption:s,removeOption:s};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=
c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],He=ca({restrict:"E",terminal:!0});(Ca=W.jQuery)?(x=Ca,w(Ca.fn,{scope:Fa.scope,isolateScope:Fa.isolateScope,controller:Fa.controller,injector:Fa.injector,inheritedData:Fa.inheritedData}),wb("remove",!0,!0,!1),wb("empty",!1,!1,!1),wb("html",!1,!1,!0)):x=I;Pa.element=x;(function(a){w(a,{bootstrap:Xb,copy:ga,extend:w,equals:ta,element:x,
forEach:q,injector:Yb,noop:s,bind:rb,toJson:oa,fromJson:Tb,identity:Ba,isUndefined:H,isDefined:z,isString:D,isFunction:A,isObject:U,isNumber:qb,isElement:Oc,isArray:L,version:Qd,isDate:La,lowercase:v,uppercase:Ia,callbacks:{counter:0},$$minErr:G,$$csp:Sb});Va=Uc(W);try{Va("ngLocale")}catch(c){Va("ngLocale",[]).provider("$locale",sd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ad});a.provider("$compile",hc).directive({a:Vd,input:Kc,textarea:Kc,form:Wd,script:Ce,select:Fe,
style:He,option:Ge,ngBind:ge,ngBindHtml:ie,ngBindTemplate:he,ngClass:je,ngClassEven:le,ngClassOdd:ke,ngCloak:me,ngController:ne,ngForm:Xd,ngHide:we,ngIf:oe,ngInclude:pe,ngInit:re,ngNonBindable:se,ngPluralize:te,ngRepeat:ue,ngShow:ve,ngStyle:xe,ngSwitch:ye,ngSwitchWhen:ze,ngSwitchDefault:Ae,ngOptions:Ee,ngTransclude:Be,ngModel:be,ngList:de,ngChange:ce,required:Lc,ngRequired:Lc,ngValue:fe}).directive({ngInclude:qe}).directive(Nb).directive(Mc);a.provider({$anchorScroll:cd,$animate:Sd,$browser:ed,$cacheFactory:fd,
$controller:jd,$document:kd,$exceptionHandler:ld,$filter:zc,$interpolate:qd,$interval:rd,$http:md,$httpBackend:nd,$location:ud,$log:vd,$parse:wd,$rootScope:zd,$q:xd,$sce:Dd,$sceDelegate:Cd,$sniffer:Ed,$templateCache:gd,$timeout:Fd,$window:Gd})}])})(Pa);x(N).ready(function(){Sc(N,Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.2.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(C,k,F){'use strict';k.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(M,G){function l(l){for(var h=0;h<l.length;h++){var m=l[h];if(m.nodeType==T)return m}}var s=k.noop,m=k.forEach,N=G.$$selectors,T=1,h="$$ngAnimateState",J="ng-animate",g={running:!0};M.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(H,C,I,n,t,q,F){function O(a){if(a){var c=[],e={};a=a.substr(1).split(".");(I.transitions||I.animations)&&
a.push("");for(var f=0;f<a.length;f++){var b=a[f],l=N[b];l&&!e[b]&&(c.push(C.get(l)),e[b]=!0)}return c}}function p(a,c,e,f,b,g,q){function x(a){v();if(!0===a)w();else{if(a=e.data(h))a.done=w,e.data(h,a);p(y,"after",w)}}function p(f,b,l){var h=b+"End";m(f,function(m,g){var d=function(){a:{var d=b+"Complete",a=f[g];a[d]=!0;(a[h]||s)();for(a=0;a<f.length;a++)if(!f[a][d])break a;l()}};"before"!=b||"enter"!=a&&"move"!=a?m[b]?m[h]=z?m[b](e,c,d):m[b](e,d):d():d()})}function n(){q&&t(q,0,!1)}function v(){v.hasBeenRun||
(v.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var a=e.data(h);a&&(z?A(e):(a.closeAnimationTimeout=t(function(){A(e)},0,!1),e.data(h,a)));n()}}var u=l(e);if(u){var u=u.className,k=(" "+(u+" "+c)).replace(/\s+/g,".");f||(f=b?b.parent():e.parent());var k=O(k),z="addClass"==a||"removeClass"==a;b=e.data(h)||{};if(K(e,f)||0===k.length)v(),w();else{var y=[];b.running&&z&&b.structural||m(k,function(b){if(!b.allowCancel||b.allowCancel(e,a,c)){var f=b[a];"leave"==a?(b=f,f=null):b=b["before"+
a.charAt(0).toUpperCase()+a.substr(1)];y.push({before:b,after:f})}});0===y.length?(v(),n()):(f=" "+u+" ",b.running&&(t.cancel(b.closeAnimationTimeout),A(e),L(b.animations),b.beforeComplete?(b.done||s)(!0):z&&!b.structural&&(f="removeClass"==b.event?f.replace(b.className,""):f+b.className+" ")),u=" "+c+" ","addClass"==a&&0<=f.indexOf(u)||"removeClass"==a&&-1==f.indexOf(u)?(v(),n()):(e.addClass(J),e.data(h,{running:!0,event:a,className:c,structural:!z,animations:y,done:x}),p(y,"before",x)))}}else v(),
w()}function E(a){a=l(a);m(a.querySelectorAll("."+J),function(a){a=k.element(a);var e=a.data(h);e&&(L(e.animations),A(a))})}function L(a){m(a,function(c){a.beforeComplete||(c.beforeEnd||s)(!0);a.afterComplete||(c.afterEnd||s)(!0)})}function A(a){l(a)==l(n)?g.disabled||(g.running=!1,g.structural=!1):(a.removeClass(J),a.removeData(h))}function K(a,c){if(g.disabled)return!0;if(l(a)==l(n))return g.disabled||g.running;do{if(0===c.length)break;var e=l(c)==l(n),f=e?g:c.data(h),f=f&&(!!f.disabled||!!f.running);
if(e||f)return f;if(e)break}while(c=c.parent());return!0}n.data(h,g);q.$$postDigest(function(){q.$$postDigest(function(){g.running=!1})});return{enter:function(a,c,e,f){this.enabled(!1,a);H.enter(a,c,e);q.$$postDigest(function(){p("enter","ng-enter",a,c,e,s,f)})},leave:function(a,c){E(a);this.enabled(!1,a);q.$$postDigest(function(){p("leave","ng-leave",a,null,null,function(){H.leave(a)},c)})},move:function(a,c,e,f){E(a);this.enabled(!1,a);H.move(a,c,e);q.$$postDigest(function(){p("move","ng-move",
a,c,e,s,f)})},addClass:function(a,c,e){p("addClass",c,a,null,null,function(){H.addClass(a,c)},e)},removeClass:function(a,c,e){p("removeClass",c,a,null,null,function(){H.removeClass(a,c)},e)},enabled:function(a,c){switch(arguments.length){case 2:if(a)A(c);else{var e=c.data(h)||{};e.disabled=!0;c.data(h,e)}break;case 1:g.disabled=!a;break;default:a=!g.disabled}return!!a}}}]);G.register("",["$window","$sniffer","$timeout",function(h,g,I){function n(d){R.push(d);I.cancel(S);S=I(function(){m(R,function(d){d()});
R=[];S=null;D={}},10,!1)}function t(d,a){var b=a?D[a]:null;if(!b){var e=0,c=0,f=0,l=0,g,k,n,p;m(d,function(d){if(d.nodeType==T){d=h.getComputedStyle(d)||{};n=d[B+G];e=Math.max(q(n),e);p=d[B+v];g=d[B+w];c=Math.max(q(g),c);k=d[x+w];l=Math.max(q(k),l);var a=q(d[x+G]);0<a&&(a*=parseInt(d[x+u],10)||1);f=Math.max(a,f)}});b={total:0,transitionPropertyStyle:p,transitionDurationStyle:n,transitionDelayStyle:g,transitionDelay:c,transitionDuration:e,animationDelayStyle:k,animationDelay:l,animationDuration:f};
a&&(D[a]=b)}return b}function q(d){var a=0;d=k.isString(d)?d.split(/\s*,\s*/):[];m(d,function(d){a=Math.max(parseFloat(d)||0,a)});return a}function J(d){var a=d.parent(),b=a.data(V);b||(a.data(V,++U),b=U);return b+"-"+l(d).className}function O(d,a){var b=J(d),e=b+" "+a,c={},f=D[e]?++D[e].total:0;if(0<f){var h=a+"-stagger",c=b+" "+h;(b=!D[c])&&d.addClass(h);c=t(d,c);b&&d.removeClass(h)}d.addClass(a);e=t(d,e);h=Math.max(e.transitionDuration,e.animationDuration);if(0===h)return d.removeClass(a),!1;var g=
"";0<e.transitionDuration?(d.addClass(y),g+=M+" ",l(d).style[B+v]="none"):l(d).style[x]="none 0s";m(a.split(" "),function(d,a){g+=(0<a?" ":"")+d+"-active"});d.data(z,{className:a,activeClassName:g,maxDuration:h,classes:a+" "+g,timings:e,stagger:c,ii:f});return!0}function p(d){var a=B+v;d=l(d);d.style[a]&&0<d.style[a].length&&(d.style[a]="")}function E(d){var a=x;d=l(d);d.style[a]&&0<d.style[a].length&&(d.style[a]="")}function L(a,c,f){function h(a){a.stopPropagation();var d=a.originalEvent||a;a=d.$manualTimeStamp||
d.timeStamp||Date.now();d=parseFloat(d.elapsedTime.toFixed(N));Math.max(a-x,0)>=v&&d>=p&&f()}var r=a.data(z),m=l(a);if(-1!=m.className.indexOf(c)&&r){var k=r.timings,n=r.stagger,p=r.maxDuration,q=r.activeClassName,v=1E3*Math.max(k.transitionDelay,k.animationDelay),x=Date.now(),w=Q+" "+P,u=r.ii,y,r="",s=[];if(0<k.transitionDuration){var t=k.transitionPropertyStyle;-1==t.indexOf("all")&&(y=!0,r+=b+"transition-property: "+t+", "+(g.msie?"-ms-zoom":"border-spacing")+"; ",r+=b+"transition-duration: "+
k.transitionDurationStyle+", "+k.transitionDuration+"s; ",s.push(b+"transition-property"),s.push(b+"transition-duration"))}0<u&&(0<n.transitionDelay&&0===n.transitionDuration&&(t=k.transitionDelayStyle,y&&(t+=", "+k.transitionDelay+"s"),r+=b+"transition-delay: "+A(t,n.transitionDelay,u)+"; ",s.push(b+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=b+"animation-delay: "+A(k.animationDelayStyle,n.animationDelay,u)+"; ",s.push(b+"animation-delay")));0<s.length&&(k=m.getAttribute("style")||
"",m.setAttribute("style",k+" "+r));a.on(w,h);a.addClass(q);return function(b){a.off(w,h);a.removeClass(q);e(a,c);b=l(a);for(var f in s)b.style.removeProperty(s[f])}}f()}function A(a,b,e){var c="";m(a.split(","),function(a,d){c+=(0<d?",":"")+(e*b+parseInt(a,10))+"s"});return c}function K(a,b){if(O(a,b))return function(c){c&&e(a,b)}}function a(a,b,c){if(a.data(z))return L(a,b,c);e(a,b);c()}function c(d,b,c){var e=K(d,b);if(e){var f=e;n(function(){p(d);E(d);f=a(d,b,c)});return function(a){(f||s)(a)}}c()}
function e(a,b){a.removeClass(b);a.removeClass(y);a.removeData(z)}function f(a,b){var c="";a=k.isArray(a)?a:a.split(/\s+/);m(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var b="",B,P,x,Q;C.ontransitionend===F&&C.onwebkittransitionend!==F?(b="-webkit-",B="WebkitTransition",P="webkitTransitionEnd transitionend"):(B="transition",P="transitionend");C.onanimationend===F&&C.onwebkitanimationend!==F?(b="-webkit-",x="WebkitAnimation",Q="webkitAnimationEnd animationend"):(x="animation",
Q="animationend");var G="Duration",v="Property",w="Delay",u="IterationCount",V="$$ngAnimateKey",z="$$ngAnimateCSS3Data",y="ng-animate-start",M="ng-animate-active",N=3,D={},U=0,R=[],S;return{allowCancel:function(a,b,c){var e=(a.data(z)||{}).classes;if(!e||0<=["enter","leave","move"].indexOf(b))return!0;var h=a.parent(),g=k.element(l(a).cloneNode());g.attr("style","position:absolute; top:-9999px; left:-9999px");g.removeAttr("id");g.empty();m(e.split(" "),function(a){g.removeClass(a)});g.addClass(f(c,
"addClass"==b?"-add":"-remove"));h.append(g);a=t(g);g.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},enter:function(a,b){return c(a,"ng-enter",b)},leave:function(a,b){return c(a,"ng-leave",b)},move:function(a,b){return c(a,"ng-move",b)},beforeAddClass:function(a,b,c){if(b=K(a,f(b,"-add")))return n(function(){p(a);E(a);c()}),b;c()},addClass:function(b,c,e){return a(b,f(c,"-add"),e)},beforeRemoveClass:function(a,b,c){if(b=K(a,f(b,"-remove")))return n(function(){p(a);E(a);c()}),
b;c()},removeClass:function(b,c,e){return a(b,f(c,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
/*
 AngularJS v1.2.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(d,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&d.$apply())})();k=!0;d.$watch(function(){var a,e,d;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)(e=c[a],f.isString(e))?e!==g[a]&&(b.cookies(a,e),d=!0):f.isDefined(g[a])?c[a]=g[a]:delete c[a];if(d)for(a in e=b.cookies(),c)c[a]!==e[a]&&(m(e[a])?delete c[a]:c[a]=e[a])});
return c}]).factory("$cookieStore",["$cookies",function(d){return{get:function(b){return(b=d[b])?f.fromJson(b):b},put:function(b,c){d[b]=f.toJson(c)},remove:function(b){delete d[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map
;
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u5348\u524d",
      "\u5348\u5f8c"
    ],
    "DAY": [
      "\u65e5\u66dc\u65e5",
      "\u6708\u66dc\u65e5",
      "\u706b\u66dc\u65e5",
      "\u6c34\u66dc\u65e5",
      "\u6728\u66dc\u65e5",
      "\u91d1\u66dc\u65e5",
      "\u571f\u66dc\u65e5"
    ],
    "MONTH": [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708"
    ],
    "SHORTDAY": [
      "\u65e5",
      "\u6708",
      "\u706b",
      "\u6c34",
      "\u6728",
      "\u91d1",
      "\u571f"
    ],
    "SHORTMONTH": [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708"
    ],
    "fullDate": "y\u5e74M\u6708d\u65e5EEEE",
    "longDate": "y\u5e74M\u6708d\u65e5",
    "medium": "yyyy/MM/dd H:mm:ss",
    "mediumDate": "yyyy/MM/dd",
    "mediumTime": "H:mm:ss",
    "short": "yyyy/MM/dd H:mm",
    "shortDate": "yyyy/MM/dd",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u00a5",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "ja-jp",
  "pluralCat": function (n) {  return PLURAL_CATEGORY.OTHER;}
});
}]);
/*
 AngularJS v1.2.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(y,v,z){'use strict';function t(g,a,b){q.directive(g,["$parse","$swipe",function(l,n){var r=75,h=0.3,d=30;return function(p,m,k){function e(e){if(!u)return!1;var c=Math.abs(e.y-u.y);e=(e.x-u.x)*a;return f&&c<r&&0<e&&e>d&&c/e<h}var c=l(k[g]),u,f;n.bind(m,{start:function(e,c){u=e;f=!0},cancel:function(e){f=!1},end:function(a,f){e(a)&&p.$apply(function(){m.triggerHandler(b);c(p,{$event:f})})}})}}])}var q=v.module("ngTouch",[]);q.factory("$swipe",[function(){function g(a){var b=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,b){var l,n,r,h,d=!1;a.on("touchstart mousedown",function(a){r=g(a);d=!0;n=l=0;h=r;b.start&&b.start(r,a)});a.on("touchcancel",function(a){d=!1;b.cancel&&b.cancel(a)});a.on("touchmove mousemove",function(a){if(d&&r){var m=g(a);l+=Math.abs(m.x-h.x);n+=Math.abs(m.y-h.y);h=m;10>l&&10>n||
(n>l?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(m,a)))}});a.on("touchend mouseup",function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q.config(["$provide",function(g){g.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);q.directive("ngClick",["$parse","$timeout","$rootElement",function(g,a,b){function l(a,c,b){for(var f=0;f<a.length;f+=2)if(Math.abs(a[f]-c)<d&&Math.abs(a[f+1]-b)<d)return a.splice(f,f+2),!0;return!1}function n(a){if(!(Date.now()-m>h)){var c=
a.touches&&a.touches.length?a.touches:[a],b=c[0].clientX,c=c[0].clientY;1>b&&1>c||l(k,b,c)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur())}}function r(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;k.push(c,d);a(function(){for(var a=0;a<k.length;a+=2)if(k[a]==c&&k[a+1]==d){k.splice(a,a+2);break}},h,!1)}var h=2500,d=25,p="ng-click-active",m,k;return function(a,c,d){function f(){q=!1;c.removeClass(p)}var h=g(d.ngClick),q=!1,s,t,w,x;c.on("touchstart",
function(a){q=!0;s=a.target?a.target:a.srcElement;3==s.nodeType&&(s=s.parentNode);c.addClass(p);t=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];w=a.clientX;x=a.clientY});c.on("touchmove",function(a){f()});c.on("touchcancel",function(a){f()});c.on("touchend",function(a){var h=Date.now()-t,e=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],g=e[0].originalEvent||e[0],e=g.clientX,g=g.clientY,p=Math.sqrt(Math.pow(e-
w,2)+Math.pow(g-x,2));q&&(750>h&&12>p)&&(k||(b[0].addEventListener("click",n,!0),b[0].addEventListener("touchstart",r,!0),k=[]),m=Date.now(),l(k,e,g),s&&s.blur(),v.isDefined(d.disabled)&&!1!==d.disabled||c.triggerHandler("click",[a]));f()});c.onclick=function(a){};c.on("click",function(b,c){a.$apply(function(){h(a,{$event:c||b})})});c.on("mousedown",function(a){c.addClass(p)});c.on("mousemove mouseup",function(a){c.removeClass(p)})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,
window.angular);
//# sourceMappingURL=angular-touch.min.js.map
;
/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.0.4 - 2013-11-25
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module("ui.alias",[]).config(["$compileProvider","uiAliasConfig",function(a,b){b=b||{},angular.forEach(b,function(b,c){angular.isString(b)&&(b={replace:!0,template:b}),a.directive(c,function(){return b})})}]),angular.module("ui.event",[]).directive("uiEvent",["$parse",function(a){return function(b,c,d){var e=b.$eval(d.uiEvent);angular.forEach(e,function(d,e){var f=a(d);c.bind(e,function(a){var c=Array.prototype.slice.call(arguments);c=c.splice(1),f(b,{$event:a,$params:c}),b.$$phase||b.$apply()})})}}]),angular.module("ui.format",[]).filter("format",function(){return function(a,b){var c=a;if(angular.isString(c)&&void 0!==b)if(angular.isArray(b)||angular.isObject(b)||(b=[b]),angular.isArray(b)){var d=b.length,e=function(a,c){return c=parseInt(c,10),c>=0&&d>c?b[c]:a};c=c.replace(/\$([0-9]+)/g,e)}else angular.forEach(b,function(a,b){c=c.split(":"+b).join(a)});return c}}),angular.module("ui.highlight",[]).filter("highlight",function(){return function(a,b,c){return b||angular.isNumber(b)?(a=a.toString(),b=b.toString(),c?a.split(b).join('<span class="ui-match">'+b+"</span>"):a.replace(new RegExp(b,"gi"),'<span class="ui-match">$&</span>')):a}}),angular.module("ui.include",[]).directive("uiInclude",["$http","$templateCache","$anchorScroll","$compile",function(a,b,c,d){return{restrict:"ECA",terminal:!0,compile:function(e,f){var g=f.uiInclude||f.src,h=f.fragment||"",i=f.onload||"",j=f.autoscroll;return function(e,f){function k(){var k=++m,o=e.$eval(g),p=e.$eval(h);o?a.get(o,{cache:b}).success(function(a){if(k===m){l&&l.$destroy(),l=e.$new();var b;b=p?angular.element("<div/>").html(a).find(p):angular.element("<div/>").html(a).contents(),f.html(b),d(b)(l),!angular.isDefined(j)||j&&!e.$eval(j)||c(),l.$emit("$includeContentLoaded"),e.$eval(i)}}).error(function(){k===m&&n()}):n()}var l,m=0,n=function(){l&&(l.$destroy(),l=null),f.html("")};e.$watch(h,k),e.$watch(g,k)}}}}]),angular.module("ui.indeterminate",[]).directive("uiIndeterminate",[function(){return{compile:function(a,b){return b.type&&"checkbox"===b.type.toLowerCase()?function(a,b,c){a.$watch(c.uiIndeterminate,function(a){b[0].indeterminate=!!a})}:angular.noop}}}]),angular.module("ui.inflector",[]).filter("inflector",function(){function a(a){return a.replace(/^([a-z])|\s+([a-z])/g,function(a){return a.toUpperCase()})}function b(a,b){return a.replace(/[A-Z]/g,function(a){return b+a})}var c={humanize:function(c){return a(b(c," ").split("_").join(" "))},underscore:function(a){return a.substr(0,1).toLowerCase()+b(a.substr(1),"_").toLowerCase().split(" ").join("_")},variable:function(b){return b=b.substr(0,1).toLowerCase()+a(b.split("_").join(" ")).substr(1).split(" ").join("")}};return function(a,b){return b!==!1&&angular.isString(a)?(b=b||"humanize",c[b](a)):a}}),angular.module("ui.jq",[]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(a,b){return{restrict:"A",compile:function(c,d){if(!angular.isFunction(c[d.uiJq]))throw new Error('ui-jq: The "'+d.uiJq+'" function does not exist');var e=a&&a[d.uiJq];return function(a,c,d){function f(){b(function(){c[d.uiJq].apply(c,g)},0,!1)}var g=[];d.uiOptions?(g=a.$eval("["+d.uiOptions+"]"),angular.isObject(e)&&angular.isObject(g[0])&&(g[0]=angular.extend({},e,g[0]))):e&&(g=[e]),d.ngModel&&c.is("select,input,textarea")&&c.bind("change",function(){c.trigger("input")}),d.uiRefresh&&a.$watch(d.uiRefresh,function(){f()}),f()}}}}]),angular.module("ui.keypress",[]).factory("keypressHelper",["$parse",function(a){var b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},c=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};return function(d,e,f,g){var h,i=[];h=e.$eval(g["ui"+c(d)]),angular.forEach(h,function(b,c){var d,e;e=a(b),angular.forEach(c.split(" "),function(a){d={expression:e,keys:{}},angular.forEach(a.split("-"),function(a){d.keys[a]=!0}),i.push(d)})}),f.bind(d,function(a){var c=!(!a.metaKey||a.ctrlKey),f=!!a.altKey,g=!!a.ctrlKey,h=!!a.shiftKey,j=a.keyCode;"keypress"===d&&!h&&j>=97&&122>=j&&(j-=32),angular.forEach(i,function(d){var i=d.keys[b[j]]||d.keys[j.toString()],k=!!d.keys.meta,l=!!d.keys.alt,m=!!d.keys.ctrl,n=!!d.keys.shift;i&&k===c&&l===f&&m===g&&n===h&&e.$apply(function(){d.expression(e,{$event:a})})})})}}]),angular.module("ui.keypress").directive("uiKeydown",["keypressHelper",function(a){return{link:function(b,c,d){a("keydown",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeypress",["keypressHelper",function(a){return{link:function(b,c,d){a("keypress",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeyup",["keypressHelper",function(a){return{link:function(b,c,d){a("keyup",b,c,d)}}}]),angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/}}).directive("uiMask",["uiMaskConfig",function(a){return{priority:100,require:"ngModel",restrict:"A",compile:function(){var b=a;return function(a,c,d,e){function f(a){return angular.isDefined(a)?(s(a),N?(k(),l(),!0):j()):j()}function g(a){angular.isDefined(a)&&(D=a,N&&w())}function h(a){return N?(G=o(a||""),I=n(G),e.$setValidity("mask",I),I&&G.length?p(G):void 0):a}function i(a){return N?(G=o(a||""),I=n(G),e.$viewValue=G.length?p(G):"",e.$setValidity("mask",I),""===G&&void 0!==e.$error.required&&e.$setValidity("required",!1),I?G:void 0):a}function j(){return N=!1,m(),angular.isDefined(P)?c.attr("placeholder",P):c.removeAttr("placeholder"),angular.isDefined(Q)?c.attr("maxlength",Q):c.removeAttr("maxlength"),c.val(e.$modelValue),e.$viewValue=e.$modelValue,!1}function k(){G=K=o(e.$modelValue||""),H=J=p(G),I=n(G);var a=I&&G.length?H:"";d.maxlength&&c.attr("maxlength",2*B[B.length-1]),c.attr("placeholder",D),c.val(a),e.$viewValue=a}function l(){O||(c.bind("blur",t),c.bind("mousedown mouseup",u),c.bind("input keyup click focus",w),O=!0)}function m(){O&&(c.unbind("blur",t),c.unbind("mousedown",u),c.unbind("mouseup",u),c.unbind("input",w),c.unbind("keyup",w),c.unbind("click",w),c.unbind("focus",w),O=!1)}function n(a){return a.length?a.length>=F:!0}function o(a){var b="",c=C.slice();return a=a.toString(),angular.forEach(E,function(b){a=a.replace(b,"")}),angular.forEach(a.split(""),function(a){c.length&&c[0].test(a)&&(b+=a,c.shift())}),b}function p(a){var b="",c=B.slice();return angular.forEach(D.split(""),function(d,e){a.length&&e===c[0]?(b+=a.charAt(0)||"_",a=a.substr(1),c.shift()):b+=d}),b}function q(a){var b=d.placeholder;return"undefined"!=typeof b&&b[a]?b[a]:"_"}function r(){return D.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function s(a){var b=0;if(B=[],C=[],D="","string"==typeof a){F=0;var c=!1,d=a.split("");angular.forEach(d,function(a,d){R.maskDefinitions[a]?(B.push(b),D+=q(d),C.push(R.maskDefinitions[a]),b++,c||F++):"?"===a?c=!0:(D+=a,b++)})}B.push(B.slice().pop()+1),E=r(),N=B.length>1?!0:!1}function t(){L=0,M=0,I&&0!==G.length||(H="",c.val(""),a.$apply(function(){e.$setViewValue("")}))}function u(a){"mousedown"===a.type?c.bind("mouseout",v):c.unbind("mouseout",v)}function v(){M=A(this),c.unbind("mouseout",v)}function w(b){b=b||{};var d=b.which,f=b.type;if(16!==d&&91!==d){var g,h=c.val(),i=J,j=o(h),k=K,l=!1,m=y(this)||0,n=L||0,q=m-n,r=B[0],s=B[j.length]||B.slice().shift(),t=M||0,u=A(this)>0,v=t>0,w=h.length>i.length||t&&h.length>i.length-t,C=h.length<i.length||t&&h.length===i.length-t,D=d>=37&&40>=d&&b.shiftKey,E=37===d,F=8===d||"keyup"!==f&&C&&-1===q,G=46===d||"keyup"!==f&&C&&0===q&&!v,H=(E||F||"click"===f)&&m>r;if(M=A(this),!D&&(!u||"click"!==f&&"keyup"!==f)){if("input"===f&&C&&!v&&j===k){for(;F&&m>r&&!x(m);)m--;for(;G&&s>m&&-1===B.indexOf(m);)m++;var I=B.indexOf(m);j=j.substring(0,I)+j.substring(I+1),l=!0}for(g=p(j),J=g,K=j,c.val(g),l&&a.$apply(function(){e.$setViewValue(j)}),w&&r>=m&&(m=r+1),H&&m--,m=m>s?s:r>m?r:m;!x(m)&&m>r&&s>m;)m+=H?-1:1;(H&&s>m||w&&!x(n))&&m++,L=m,z(this,m)}}}function x(a){return B.indexOf(a)>-1}function y(a){if(void 0!==a.selectionStart)return a.selectionStart;if(document.selection){a.focus();var b=document.selection.createRange();return b.moveStart("character",-a.value.length),b.text.length}return 0}function z(a,b){if(0!==a.offsetWidth&&0!==a.offsetHeight)if(a.setSelectionRange)a.focus(),a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}}function A(a){return void 0!==a.selectionStart?a.selectionEnd-a.selectionStart:document.selection?document.selection.createRange().text.length:0}var B,C,D,E,F,G,H,I,J,K,L,M,N=!1,O=!1,P=d.placeholder,Q=d.maxlength,R={};d.uiOptions?(R=a.$eval("["+d.uiOptions+"]"),angular.isObject(R[0])&&(R=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]?angular.extend(b[c],a[c]):b[c]=angular.copy(a[c]));return b}(b,R[0]))):R=b,d.$observe("uiMask",f),d.$observe("placeholder",g),e.$formatters.push(h),e.$parsers.push(i),c.bind("mousedown mouseup",u),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&1/0!==d&&d!==-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1})}}}}]),angular.module("ui.reset",[]).value("uiResetConfig",null).directive("uiReset",["uiResetConfig",function(a){var b=null;return void 0!==a&&(b=a),{require:"ngModel",link:function(a,c,d,e){var f;f=angular.element('<a class="ui-reset" />'),c.wrap('<span class="ui-resetwrap" />').after(f),f.bind("click",function(c){c.preventDefault(),a.$apply(function(){d.uiReset?e.$setViewValue(a.$eval(d.uiReset)):e.$setViewValue(b),e.$render()})})}}}]),angular.module("ui.route",[]).directive("uiRoute",["$location","$parse",function(a,b){return{restrict:"AC",scope:!0,compile:function(c,d){var e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return function(c,d,f){function g(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),j=function(){i(c,a.path().indexOf(b)>-1)},j()}function h(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),j=function(){var d=new RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))},j()}var i=b(f.ngModel||f.routeModel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$observe("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",function(){j()}),c.$on("$stateChangeSuccess",function(){j()})}}}}]),angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(a,b){return{registerFor:function(a){var c,d,e,f,g,h,i;return d=angular.element.prototype.css,a.prototype.css=function(a,b){var c,e;return e=this,c=e[0],c&&3!==c.nodeType&&8!==c.nodeType&&c.style?d.call(e,a,b):void 0},h=function(a){return a&&a.document&&a.location&&a.alert&&a.setInterval},i=function(a,b,c){var d,e,f,g,i;return d=a[0],i={top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[b],e=i[0],g=i[1],f=i[2],h(d)?angular.isDefined(c)?d.scrollTo(a[f].call(a),c):g in d?d[g]:d.document.documentElement[e]:angular.isDefined(c)?d[e]=c:d[e]},b.getComputedStyle?(f=function(a){return b.getComputedStyle(a,null)},c=function(a,b){return parseFloat(b)}):(f=function(a){return a.currentStyle},c=function(a,b){var c,d,e,f,g,h,i;return c=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,f=new RegExp("^("+c+")(?!px)[a-z%]+$","i"),f.test(b)?(i=a.style,d=i.left,g=a.runtimeStyle,h=g&&g.left,g&&(g.left=i.left),i.left=b,e=i.pixelLeft,i.left=d,h&&(g.left=h),e):parseFloat(b)}),e=function(a,b){var d,e,g,i,j,k,l,m,n,o,p,q,r;return h(a)?(d=document.documentElement[{height:"clientHeight",width:"clientWidth"}[b]],{base:d,padding:0,border:0,margin:0}):(r={width:[a.offsetWidth,"Left","Right"],height:[a.offsetHeight,"Top","Bottom"]}[b],d=r[0],l=r[1],m=r[2],k=f(a),p=c(a,k["padding"+l])||0,q=c(a,k["padding"+m])||0,e=c(a,k["border"+l+"Width"])||0,g=c(a,k["border"+m+"Width"])||0,i=k["margin"+l],j=k["margin"+m],n=c(a,i)||0,o=c(a,j)||0,{base:d,padding:p+q,border:e+g,margin:n+o})},g=function(a,b,c){var d,g,h;return g=e(a,b),g.base>0?{base:g.base-g.padding-g.border,outer:g.base,outerfull:g.base+g.margin}[c]:(d=f(a),h=d[b],(0>h||null===h)&&(h=a.style[b]||0),h=parseFloat(h)||0,{base:h-g.padding-g.border,outer:h,outerfull:h+g.padding+g.border+g.margin}[c])},angular.forEach({before:function(a){var b,c,d,e,f,g,h;if(f=this,c=f[0],e=f.parent(),b=e.contents(),b[0]===c)return e.prepend(a);for(d=g=1,h=b.length-1;h>=1?h>=g:g>=h;d=h>=1?++g:--g)if(b[d]===c)return angular.element(b[d-1]).after(a),void 0;throw new Error("invalid DOM structure "+c.outerHTML)},height:function(a){var b;return b=this,angular.isDefined(a)?(angular.isNumber(a)&&(a+="px"),d.call(b,"height",a)):g(this[0],"height","base")},outerHeight:function(a){return g(this[0],"height",a?"outerfull":"outer")},offset:function(a){var b,c,d,e,f,g;return f=this,arguments.length?void 0===a?f:setOffset:(b={top:0,left:0},e=f[0],(c=e&&e.ownerDocument)?(d=c.documentElement,null!=e.getBoundingClientRect&&(b=e.getBoundingClientRect()),g=c.defaultView||c.parentWindow,{top:b.top+(g.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(g.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}):void 0)},scrollTop:function(a){return i(this,"top",a)},scrollLeft:function(a){return i(this,"left",a)}},function(b,c){return a.prototype[c]?void 0:a.prototype[c]=b})}}}]).run(["$log","$window","jqLiteExtras",function(a,b,c){return b.jQuery?void 0:c.registerFor(angular.element)}]),angular.module("ui.scroll",[]).directive("ngScrollViewport",["$log",function(){return{controller:["$scope","$element",function(a,b){return b}]}}]).directive("ngScroll",["$log","$injector","$rootScope","$timeout",function(a,b,c,d){return{require:["?^ngScrollViewport"],transclude:"element",priority:1e3,terminal:!0,compile:function(e,f,g){return function(f,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;if(H=i.ngScroll.match(/^\s*(\w+)\s+in\s+(\w+)\s*$/),!H)throw new Error("Expected ngScroll in form of '_item_ in _datasource_' but got '"+i.ngScroll+"'");if(F=H[1],v=H[2],D=function(a){return angular.isObject(a)&&a.get&&angular.isFunction(a.get)},u=f[v],!D(u)&&(u=b.get(v),!D(u)))throw new Error(""+v+" is not a valid datasource");return r=Math.max(3,+i.bufferSize||10),q=function(){return T.height()*Math.max(.1,+i.padding||.1)},O=function(a){var b;return null!=(b=a[0].scrollHeight)?b:a[0].document.documentElement.scrollHeight},k=null,g(R=f.$new(),function(a){var b,c,d,f,g,h;if(f=a[0].localName,"dl"===f)throw new Error("ng-scroll directive does not support <"+a[0].localName+"> as a repeating tag: "+a[0].outerHTML);return"li"!==f&&"tr"!==f&&(f="div"),h=j[0]||angular.element(window),h.css({"overflow-y":"auto",display:"block"}),d=function(a){var b,c,d;switch(a){case"tr":return d=angular.element("<table><tr><td><div></div></td></tr></table>"),b=d.find("div"),c=d.find("tr"),c.paddingHeight=function(){return b.height.apply(b,arguments)},c;default:return c=angular.element("<"+a+"></"+a+">"),c.paddingHeight=c.height,c}},c=function(a,b,c){return b[{top:"before",bottom:"after"}[c]](a),{paddingHeight:function(){return a.paddingHeight.apply(a,arguments)},insert:function(b){return a[{top:"after",bottom:"before"}[c]](b)}}},g=c(d(f),e,"top"),b=c(d(f),e,"bottom"),R.$destroy(),k={viewport:h,topPadding:g.paddingHeight,bottomPadding:b.paddingHeight,append:b.insert,prepend:g.insert,bottomDataPos:function(){return O(h)-b.paddingHeight()},topDataPos:function(){return g.paddingHeight()}}}),T=k.viewport,B=1,I=1,p=[],J=[],x=!1,n=!1,G=u.loading||function(){},E=!1,L=function(a,b){var c,d;for(c=d=a;b>=a?b>d:d>b;c=b>=a?++d:--d)p[c].scope.$destroy(),p[c].element.remove();return p.splice(a,b-a)},K=function(){return B=1,I=1,L(0,p.length),k.topPadding(0),k.bottomPadding(0),J=[],x=!1,n=!1,l(!1)},o=function(){return T.scrollTop()+T.height()},S=function(){return T.scrollTop()},P=function(){return!x&&k.bottomDataPos()<o()+q()},s=function(){var b,c,d,e,f,g;for(b=0,e=0,c=f=g=p.length-1;(0>=g?0>=f:f>=0)&&(d=p[c].element.outerHeight(!0),k.bottomDataPos()-b-d>o()+q());c=0>=g?++f:--f)b+=d,e++,x=!1;return e>0?(k.bottomPadding(k.bottomPadding()+b),L(p.length-e,p.length),I-=e,a.log("clipped off bottom "+e+" bottom padding "+k.bottomPadding())):void 0},Q=function(){return!n&&k.topDataPos()>S()-q()},t=function(){var b,c,d,e,f,g;for(e=0,d=0,f=0,g=p.length;g>f&&(b=p[f],c=b.element.outerHeight(!0),k.topDataPos()+e+c<S()-q());f++)e+=c,d++,n=!1;return d>0?(k.topPadding(k.topPadding()+e),L(0,d),B+=d,a.log("clipped off top "+d+" top padding "+k.topPadding())):void 0},w=function(a,b){return E||(E=!0,G(!0)),1===J.push(a)?z(b):void 0},C=function(a,b){var c,d,e;return c=f.$new(),c[F]=b,d=a>B,c.$index=a,d&&c.$index--,e={scope:c},g(c,function(b){return e.element=b,d?a===I?(k.append(b),p.push(e)):(p[a-B].element.after(b),p.splice(a-B+1,0,e)):(k.prepend(b),p.unshift(e))}),{appended:d,wrapper:e}},m=function(a,b){var c;return a?k.bottomPadding(Math.max(0,k.bottomPadding()-b.element.outerHeight(!0))):(c=k.topPadding()-b.element.outerHeight(!0),c>=0?k.topPadding(c):T.scrollTop(T.scrollTop()+b.element.outerHeight(!0)))},l=function(b,c,e){var f;return f=function(){return a.log("top {actual="+k.topDataPos()+" visible from="+S()+" bottom {visible through="+o()+" actual="+k.bottomDataPos()+"}"),P()?w(!0,b):Q()&&w(!1,b),e?e():void 0},c?d(function(){var a,b,d;for(b=0,d=c.length;d>b;b++)a=c[b],m(a.appended,a.wrapper);return f()}):f()},A=function(a,b){return l(a,b,function(){return J.shift(),0===J.length?(E=!1,G(!1)):z(a)})},z=function(b){var c;return c=J[0],c?p.length&&!P()?A(b):u.get(I,r,function(c){var d,e,f,g;if(e=[],0===c.length)x=!0,k.bottomPadding(0),a.log("appended: requested "+r+" records starting from "+I+" recieved: eof");else{for(t(),f=0,g=c.length;g>f;f++)d=c[f],e.push(C(++I,d));a.log("appended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)}):p.length&&!Q()?A(b):u.get(B-r,r,function(c){var d,e,f,g;if(e=[],0===c.length)n=!0,k.topPadding(0),a.log("prepended: requested "+r+" records starting from "+(B-r)+" recieved: bof");else{for(s(),d=f=g=c.length-1;0>=g?0>=f:f>=0;d=0>=g?++f:--f)e.unshift(C(--B,c[d]));a.log("prepended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)})},M=function(){return c.$$phase||E?void 0:(l(!1),f.$apply())},T.bind("resize",M),N=function(){return c.$$phase||E?void 0:(l(!0),f.$apply())},T.bind("scroll",N),f.$watch(u.revision,function(){return K()}),y=u.scope?u.scope.$new():f.$new(),f.$on("$destroy",function(){return y.$destroy(),T.unbind("resize",M),T.unbind("scroll",N)}),y.$on("update.items",function(a,b,c){var d,e,f,g,h;if(angular.isFunction(b))for(e=function(a){return b(a.scope)},f=0,g=p.length;g>f;f++)d=p[f],e(d);else 0<=(h=b-B-1)&&h<p.length&&(p[b-B-1].scope[F]=c);return null}),y.$on("delete.items",function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o;if(angular.isFunction(b)){for(e=[],h=0,k=p.length;k>h;h++)d=p[h],e.unshift(d);for(g=function(a){return b(a.scope)?(L(e.length-1-c,e.length-c),I--):void 0},c=i=0,m=e.length;m>i;c=++i)f=e[c],g(f)}else 0<=(o=b-B-1)&&o<p.length&&(L(b-B-1,b-B),I--);for(c=j=0,n=p.length;n>j;c=++j)d=p[c],d.scope.$index=B+c;return l(!1)}),y.$on("insert.item",function(a,b,c){var d,e,f,g,h,i,j,k,m,n,o,q;if(e=[],angular.isFunction(b)){for(f=[],i=0,m=p.length;m>i;i++)c=p[i],f.unshift(c);for(h=function(a){var f,g,h,i,j;if(g=b(a.scope)){if(C=function(a){return C(a,c),I++},isArray(g)){for(j=[],f=h=0,i=newitems.length;i>h;f=++h)c=newitems[f],j.push(e.push(C(d+f,c)));return j}return e.push(C(d,g))}},d=j=0,n=f.length;n>j;d=++j)g=f[d],h(g)}else 0<=(q=b-B-1)&&q<p.length&&(e.push(C(b,c)),I++);for(d=k=0,o=p.length;o>k;d=++k)c=p[d],c.scope.$index=B+d;return l(!1,e)})}}}}]),angular.module("ui.scrollfix",[]).directive("uiScrollfix",["$window",function(a){"use strict";return{require:"^?uiScrollfixTarget",link:function(b,c,d,e){function f(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")}var g=c[0].offsetTop,h=e&&e.$element||angular.element(a);d.uiScrollfix?"string"==typeof d.uiScrollfix&&("-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=g-parseFloat(d.uiScrollfix.substr(1)):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=g+parseFloat(d.uiScrollfix.substr(1)))):d.uiScrollfix=g,h.on("scroll",f),b.$on("$destroy",function(){h.off("scroll",f)})}}}]).directive("uiScrollfixTarget",[function(){"use strict";return{controller:["$element",function(a){this.$element=a}]}}]),angular.module("ui.showhide",[]).directive("uiShow",[function(){return function(a,b,c){a.$watch(c.uiShow,function(a){a?b.addClass("ui-show"):b.removeClass("ui-show")})}}]).directive("uiHide",[function(){return function(a,b,c){a.$watch(c.uiHide,function(a){a?b.addClass("ui-hide"):b.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){return function(a,b,c){a.$watch(c.uiToggle,function(a){a?b.removeClass("ui-hide").addClass("ui-show"):b.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.unique",[]).filter("unique",["$parse",function(a){return function(b,c){if(c===!1)return b;if((c||angular.isUndefined(c))&&angular.isArray(b)){var d=[],e=angular.isString(c)?a(c):function(a){return a},f=function(a){return angular.isObject(a)?e(a):a};angular.forEach(b,function(a){for(var b=!1,c=0;c<d.length;c++)if(angular.equals(f(d[c]),f(a))){b=!0;break}b||d.push(a)}),b=d}return b}}]),angular.module("ui.validate",[]).directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){function e(b){return angular.isString(b)?(a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})}),void 0):angular.isArray(b)?(angular.forEach(b,function(b){a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})})}),void 0):(angular.isObject(b)&&angular.forEach(b,function(b,c){angular.isString(b)&&a.$watch(b,function(){g[c](d.$modelValue)}),angular.isArray(b)&&angular.forEach(b,function(b){a.$watch(b,function(){g[c](d.$modelValue)})})}),void 0)}var f,g={},h=a.$eval(c.uiValidate);h&&(angular.isString(h)&&(h={validator:h}),angular.forEach(h,function(b,c){f=function(e){var f=a.$eval(b,{$value:e});return angular.isObject(f)&&angular.isFunction(f.then)?(f.then(function(){d.$setValidity(c,!0)},function(){d.$setValidity(c,!1)}),e):f?(d.$setValidity(c,!0),e):(d.$setValidity(c,!1),void 0)},g[c]=f,d.$formatters.push(f),d.$parsers.push(f)}),c.uiValidateWatch&&e(a.$eval(c.uiValidateWatch)))}}}),angular.module("ui.utils",["ui.event","ui.format","ui.highlight","ui.include","ui.indeterminate","ui.inflector","ui.jq","ui.keypress","ui.mask","ui.reset","ui.route","ui.scrollfix","ui.scroll","ui.scroll.jqlite","ui.showhide","ui.unique","ui.validate"]);
/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/
(function(a){function l(){var a=window.outerWidth||b.clientWidth;b.className=b.className.replace(/ (w|lt)-\d+/g,""),f("w-"+Math.round(a/100)*100),h(c.screens,function(b){a<=b&&f("lt-"+b)}),i.feature()}function h(a,b){for(var c=0,d=a.length;c<d;c++)b.call(a,a[c],c)}function g(a){var c=new RegExp("\\b"+a+"\\b");b.className=b.className.replace(c,"")}function f(a){d[d.length]=a}var b=a.documentElement,c={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:"-section",page:"-page",head:"head"},d=[];if(window.head_conf)for(var e in head_conf)head_conf[e]!==undefined&&(c[e]=head_conf[e]);var i=window[c.head]=function(){i.ready.apply(null,arguments)};i.feature=function(a,c,e){if(!a)b.className+=" "+d.join(" "),d=[];else{Object.prototype.toString.call(c)=="[object Function]"&&(c=c.call()),f((c?"":"no-")+a),i[a]=!!c,e||(g("no-"+a),g(a),i.feature());return i}};var j=navigator.userAgent.toLowerCase();j=/(webkit)[ \/]([\w.]+)/.exec(j)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(j)||/(msie) ([\w.]+)/.exec(j)||!/compatible/.test(j)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(j)||[],j[1]=="msie"&&(j[1]="ie",j[2]=document.documentMode||j[2]),f(j[1]),i.browser={version:j[2]},i.browser[j[1]]=!0;if(i.browser.ie){f("ie"+parseFloat(j[2]));for(var k=3;k<11;k++)parseFloat(j[2])<k&&f("lt-ie"+k);h("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(b){a.createElement(b)})}h(location.pathname.split("/"),function(a,d){if(this.length>2&&this[d+1]!==undefined)d&&f(this.slice(1,d+1).join("-")+c.section);else{var e=a||"index",g=e.indexOf(".");g>0&&(e=e.substring(0,g)),b.id=e+c.page,d||f("root"+c.section)}}),l(),window.onresize=l,i.feature("js",!0).feature()})(document),function(){function h(a){var b=a.charAt(0).toUpperCase()+a.substr(1),c=(a+" "+d.join(b+" ")+b).split(" ");return!!g(c)}function g(a){for(var c in a)if(b[a[c]]!==undefined)return!0}var a=document.createElement("i"),b=a.style,c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="Webkit Moz O ms Khtml".split(" "),e=window.head_conf&&head_conf.head||"head",f=window[e],i={gradient:function(){var a="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",e="linear-gradient(left top,#eee,#fff);";b.cssText=(a+c.join(d+a)+c.join(e+a)).slice(0,-a.length);return!!b.backgroundImage},rgba:function(){b.cssText="background-color:rgba(0,0,0,0.5)";return!!b.backgroundColor},opacity:function(){return a.style.opacity===""},textshadow:function(){return b.textShadow===""},multiplebgs:function(){b.cssText="background:url(//:),url(//:),red url(//:)";return(new RegExp("(url\\s*\\(.*?){3}")).test(b.background)},boxshadow:function(){return h("boxShadow")},borderimage:function(){return h("borderImage")},borderradius:function(){return h("borderRadius")},cssreflections:function(){return h("boxReflect")},csstransforms:function(){return h("transform")},csstransitions:function(){return h("transition")},fontface:function(){var a=navigator.userAgent,b;if(0)return!0;if(b=a.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))return b[1]>="4.0.249.4"||1*b[1].split(".")[0]>5;if((b=a.match(/Safari\/(\d+\.\d+)/))&&!/iPhone/.test(a))return b[1]>="525.13";if(/Opera/.test({}.toString.call(window.opera)))return opera.version()>="10.00";if(b=a.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))return b[1]>="1.9.1";return!1}};for(var j in i)i[j]&&f.feature(j,i[j].call(),!0);f.feature()}(),function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)}(document)
;
/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */



!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);













(function($, undefined) {
  $(function () {
    $('div.bootstrap-modal').modal();
    $('div.bootstrap-modal').modal('hide').addClass('fade');

    $("a.bootstrap-modal-cancel-button").click(function(event) {
      $(event.target).closest("div.modal").modal("hide");
    });
  });
})( jQuery );




