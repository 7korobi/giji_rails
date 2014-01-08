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
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
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
/*jshint shadow:true*/
/*globals jQuery, alert*/


(function ($) {

    "use strict";

    $.fn.gantt = function (options) {

        var cookieKey = "jquery.fn.gantt";
        var scales = ["hours", "days", "weeks", "months"];

        var settings = {
            source: null,
            itemsPerPage: 7,
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dow: ["S", "M", "T", "W", "T", "F", "S"],
            startPos: new Date(),
            navigate: "buttons",
            scale: "days",
            useCookie: false,
            maxScale: "months",
            minScale: "hours",
            waitText: "Please wait...",
            onItemClick: function (data) { return; },
            onAddClick: function (data) { return; },
            scrollToToday: true
        };

        $.extend($.expr[":"], {
            findday: function (a, i, m) {
                var cd = new Date(parseInt(m[3],10));
                var id = $(a).attr("id");
                id = id ? id : "";
                var si = id.indexOf("-") + 1;
                var ed = new Date(parseInt(id.substring(si, id.length),10));
                cd = new Date(cd.getFullYear(), cd.getMonth(), cd.getDate());
                ed = new Date(ed.getFullYear(), ed.getMonth(), ed.getDate());
                return cd.getTime() === ed.getTime();
            }
        });

        $.extend($.expr[":"], {
            findweek: function (a, i, m) {
                var cd = new Date(parseInt(m[3],10));
                var id = $(a).attr("id");
                id = id ? id : "";
                var si = id.indexOf("-") + 1;
                cd = cd.getFullYear() + "-" + cd.getDayForWeek().getWeekOfYear();
                var ed = id.substring(si, id.length);
                return cd === ed;
            }
        });

        $.extend($.expr[":"], {
            findmonth: function (a, i, m) {
                var cd = new Date(parseInt(m[3],10));
                cd = cd.getFullYear() + "-" + cd.getMonth();
                var id = $(a).attr("id");
                id = id ? id : "";
                var si = id.indexOf("-") + 1;
                var ed = id.substring(si, id.length);
                return cd === ed;
            }
        });

        Date.prototype.getWeekId = function () {
            var y = this.getFullYear();
            var w = this.getDayForWeek().getWeekOfYear();
            var m = this.getMonth();
            if (m === 11 && w === 1) {
                y++;
            }
            return 'dh-' + y + "-" + w;
        };



        Date.prototype.genRepDate = function () {
            switch (settings.scale) {
                case "hours":
                    return this.getTime();
                case "weeks":
                    return this.getDayForWeek().getTime();
                case "months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                default:
                    return this.getTime();
            }
        };
        Date.prototype.getDayOfYear = function () {
            var fd = new Date(this.getFullYear(), 0, 0);
            var sd = new Date(this.getFullYear(), this.getMonth(), this.getDate());
            return Math.ceil((sd - fd) / 86400000);
        };
        Date.prototype.getWeekOfYear = function () {
            var ys = new Date(this.getFullYear(), 0, 1);
            var sd = new Date(this.getFullYear(), this.getMonth(), this.getDate());
            if (ys.getDay() > 3) {
                ys = new Date(sd.getFullYear(), 0, (7 - ys.getDay()));
            }
            var daysCount = sd.getDayOfYear() - ys.getDayOfYear();
            return Math.ceil(daysCount / 7);

        };
        Date.prototype.getDaysInMonth = function () {
            return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
        };
        Date.prototype.hasWeek = function () {
            var df = new Date(this.valueOf());
            df.setDate(df.getDate() - df.getDay());
            var dt = new Date(this.valueOf());
            dt.setDate(dt.getDate() + (6 - dt.getDay()));

            if (df.getMonth() === dt.getMonth()) {
                return true;
            } else {
                return (df.getMonth() === this.getMonth() && dt.getDate() < 4) || (df.getMonth() !== this.getMonth() && dt.getDate() >= 4);
            }
        };
        Date.prototype.getDayForWeek = function () {
            var df = new Date(this.valueOf());
            df.setDate(df.getDate() - df.getDay());
            var dt = new Date(this.valueOf());
            dt.setDate(dt.getDate() + (6 - dt.getDay()));
            if ((df.getMonth() === dt.getMonth()) || (df.getMonth() !== dt.getMonth() && dt.getDate() >= 4)) {
                return new Date(dt.setDate(dt.getDate() - 3));
            } else {
                return new Date(df.setDate(df.getDate() + 3));
            }
        };

        /**
        * Core functions for creating grid.
        */
        var core = {

            elementFromPoint: function (x, y) {

                if ($.browser.msie) {
                    x -= $(document).scrollLeft();
                    y -= $(document).scrollTop();
                } else {
                    x -= window.pageXOffset;
                    y -= window.pageYOffset;
                }

                return document.elementFromPoint(x, y);
            },
            /**
            * Create header
            */
            create: function (element) {
                /**
                * Retrieve data
                */
                $.ajaxSetup({ scriptCharset: "utf-8", contentType: "application/json; charset=utf-8" });
                if (typeof settings.source !== "string") {
                    element.data = settings.source;
                    core.init(element);
                } else {
                    $.getJSON(settings.source, function (jsData) {
                        element.data = jsData;
                        core.init(element);
                    });
                }
            },
            init: function (element) {
                element.rowsNum = element.data.length;
                element.pageCount = Math.ceil(element.rowsNum / settings.itemsPerPage);
                element.rowsOnLastPage = element.rowsNum - (Math.floor(element.rowsNum / settings.itemsPerPage) * settings.itemsPerPage);

                element.dateStart = tools.getMinDate(element);
                element.dateEnd = tools.getMaxDate(element);


                // core.render(element);
                core.waitToggle(element, true, function () { core.render(element); });
            },
            render: function (element) {
                var content = $('<div class="fn-content"/>');
                var $leftPanel = core.leftPanel(element);
                content.append($leftPanel);
                var $rightPanel = core.rightPanel(element, $leftPanel);
                var mLeft, hPos;

                content.append($rightPanel);
                content.append(core.navigation(element));

                var $dataPanel = $rightPanel.find(".dataPanel");

                element.gantt = $('<div class="fn-gantt" />').append(content);

                $(element).html(element.gantt);

                element.scrollNavigation.panelMargin = parseInt($dataPanel.css("margin-left").replace("px", ""),10);
                element.scrollNavigation.panelMaxPos = ($dataPanel.width() - $rightPanel.width());

                element.scrollNavigation.canScroll = ($dataPanel.width() > $rightPanel.width());

                core.markNow(element);
                core.fillData(element, $dataPanel, $leftPanel);

                if (settings.useCookie) {
                    var sc = $.cookie(this.cookieKey + "ScrollPos");
                    if (sc) {
                        element.hPosition = sc;
                    }
                }

                if (settings.scrollToToday) {
                    var startPos = Math.round((settings.startPos / 1000 - element.dateStart / 1000) / 86400) - 2;
                    if ((startPos > 0 && element.hPosition !== 0)) {
                        if (element.scaleOldWidth) {
                            mLeft = ($dataPanel.width() - $rightPanel.width());
                            hPos = mLeft * element.hPosition / element.scaleOldWidth;
                            hPos = hPos > 0 ? 0 : hPos;
                            $dataPanel.css({ "margin-left": hPos + "px" });
                            element.scrollNavigation.panelMargin = hPos;
                            element.hPosition = hPos;
                            element.scaleOldWidth = null;
                        } else {
                            $dataPanel.css({ "margin-left": element.hPosition + "px" });
                            element.scrollNavigation.panelMargin = element.hPosition;
                        }
                        core.repositionLabel(element);
                    } else {
                        core.repositionLabel(element);
                    }
                } else {
                    if ((element.hPosition !== 0)) {
                        if (element.scaleOldWidth) {
                            mLeft = ($dataPanel.width() - $rightPanel.width());
                            hPos = mLeft * element.hPosition / element.scaleOldWidth;
                            hPos = hPos > 0 ? 0 : hPos;
                            $dataPanel.css({ "margin-left": hPos + "px" });
                            element.scrollNavigation.panelMargin = hPos;
                            element.hPosition = hPos;
                            element.scaleOldWidth = null;
                        } else {
                            $dataPanel.css({ "margin-left": element.hPosition + "px" });
                            element.scrollNavigation.panelMargin = element.hPosition;
                        }
                        core.repositionLabel(element);
                    } else {
                        core.repositionLabel(element);
                    }
                }

                $dataPanel.css({ height: $leftPanel.height() });
                core.waitToggle(element, false);
            },
            leftPanel: function (element) {
                /* Left panel */
                var ganttLeftPanel = $('<div class="leftPanel"/>')
                    .append($('<div class="row spacer"/>')
                    .css("height", tools.getCellSize() * element.headerRows + "px")
                    .css("width", "100%"));

                var entries = [];
                $.each(element.data, function (i, entry) {
                    if (i >= element.pageNum * settings.itemsPerPage && i < (element.pageNum * settings.itemsPerPage + settings.itemsPerPage)) {
                        entries.push('<div class="row name row' + i + '" id="rowheader' + i + '" offset="' + i * tools.getCellSize() + '">');
                        entries.push('<span class="fn-label ' + entry.cssClass + '">' + entry.name + '</span>');
                        entries.push('</div>');

                        entries.push('<div class="row desc row' + i + ' " id="RowdId_' + i + '" data-id="' + entry.id + '">');
                        entries.push('<span class="fn-label ' + entry.cssClass + '">' + entry.desc + '</span>');
                        entries.push('</div>');

                    }
                });
                ganttLeftPanel.append(entries.join(""));
                return ganttLeftPanel;
            },
            dataPanel: function (element, width) {
                var dataPanel = $('<div class="dataPanel" style="width: ' + width + 'px;"/>');
                /*
                * Mouse wheel events
                */
                var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

                if (document.attachEvent) {
                    element.attachEvent("on" + mousewheelevt, function (e) { core.wheelScroll(element, e); });
                } else if (document.addEventListener) {
                    element.addEventListener(mousewheelevt, function (e) { core.wheelScroll(element, e); }, false);
                }


                // addNEwClick
                dataPanel.click(function (e) {

                    e.stopPropagation();
                    var corrX, corrY;
                    var leftpanel = $(element).find(".fn-gantt .leftPanel");
                    var datapanel = $(element).find(".fn-gantt .dataPanel");
                    switch (settings.scale) {
                        case "weeks":
                            corrY = tools.getCellSize() * 2;
                            break;
                        case "months":
                            corrY = tools.getCellSize();
                            break;
                        case "hours":
                        case "days":
                            corrY = tools.getCellSize() * 3;
                            break;
                        default:
                            corrY = tools.getCellSize() * 2;
                            break;
                    }

                    // Adjust, so get middle of elm
                    // corrY -= Math.floor(tools.getCellSize() / 2);

                    //find column
                    var col = core.elementFromPoint(e.pageX, datapanel.offset().top + corrY);
                    // hit the label?
                    if (col.className === "fn-label") {
                        col = $(col.parentNode);
                    } else {
                        col = $(col);
                    }

                    var dt = col.attr("repdate");
                    //find row
                    var row = core.elementFromPoint(leftpanel.offset().left + leftpanel.width() - 10, e.pageY);
                    // hit the label?
                    if (row.className.indexOf("fn-label") === 0) {
                        row = $(row.parentNode);
                    } else {
                        row = $(row);
                    }
                    var rowId = row.data().id;

                    settings.onAddClick(dt, rowId);
                });
                return dataPanel;
            },
            // Creates Data container with header
            rightPanel: function (element, leftPanel) {

                var range = null;
                var dowClass = [" sn", " wd", " wd", " wd", " wd", " wd", " sa"];
                var gridDowClass = [" sn", "", "", "", "", "", " sa"];

                var yearArr = ['<div class="row"/>'];
                var daysInYear = 0;

                var monthArr = ['<div class="row"/>'];
                var daysInMonth = 0;

                var dayArr = [];

                var hoursInDay = 0;

                var dowArr = [];

                var horArr = [];


                var today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                var holidays = settings.holidays ? settings.holidays.join() : '';

                switch (settings.scale) {
                    // hours /////////////////////////////////////////////////////////////////////////////////////////
                    case "hours":

                        range = tools.parseTimeRange(element.dateStart, element.dateEnd, element.scaleStep);

                        var year = range[0].getFullYear();
                        var month = range[0].getMonth();
                        var day = range[0];

                        for (var i = 0; i < range.length; i++) {
                            var rday = range[i];
                            /*
                            * Fill years
                            */
                            var rfy = rday.getFullYear();
                            if (rfy !== year) {
                                yearArr.push(
                                    ('<div class="row header year" style="width: '
                                        + tools.getCellSize() * daysInYear
                                        + 'px;"><div class="fn-label">'
                                        + year
                                        + '</div></div>'));

                                year = rfy;
                                daysInYear = 0;
                            }
                            daysInYear++;

                            /*
                            * Fill months
                            */
                            var rm = rday.getMonth();
                            if (rm !== month) {
                                monthArr.push(
                                    ('<div class="row header month" style="width: '
                                    + tools.getCellSize() * daysInMonth + 'px"><div class="fn-label">'
                                    + settings.months[month]
                                    + '</div></div>'));

                                month = rm;
                                daysInMonth = 0;
                            }
                            daysInMonth++;

                            /*
                            * Fill days & hours
                            */
                            var rgetDay = rday.getDay();
                            var getDay = day.getDay();
                            var day_class = dowClass[rgetDay];
                            var getTime = day.getTime();
                            if (holidays.indexOf((new Date(rday.getFullYear(), rday.getMonth(), rday.getDate())).getTime()) > -1) {
                                day_class = "holiday";
                            }
                            if (rgetDay !== getDay) {

                                var day_class2 = (today - day === 0) ? ' today' : (holidays.indexOf(getTime) > -1) ? "holiday" : dowClass[getDay];

                                dayArr.push('<div class="row day ' + day_class2 + '" '
                                        + ' style="width: ' + tools.getCellSize() * hoursInDay + 'px;"> '
                                        + ' <div class="fn-label">' + day.getDate() + '</div></div>');
                                dowArr.push('<div class="row day ' + day_class2 + '" '
                                        + ' style="width: ' + tools.getCellSize() * hoursInDay + 'px;"> '
                                        + ' <div class="fn-label">' + settings.dow[getDay] + '</div></div>');

                                day = rday;
                                hoursInDay = 0;
                            }
                            hoursInDay++;

                            horArr.push('<div class="row day '
                                    + day_class
                                    + '" id="dh-'
                                    + rday.getTime()
                                    + '"  offset="' + i * tools.getCellSize() + '"  repdate="' + rday.genRepDate() + '"> '
                                    + rday.getHours()
                                    + '</div>');
                        }

                        /*
                        * Last year
                        */

                        yearArr.push(
                            '<div class="row header year" style="width: '
                            + tools.getCellSize() * daysInYear + 'px;"><div class="fn-label">'
                            + year
                            + '</div></div>');
                        /*
                        * Last month
                        */
                        monthArr.push(
                            '<div class="row header month" style="width: '
                            + tools.getCellSize() * daysInMonth + 'px"><div class="fn-label">'
                            + settings.months[month]
                            + '</div></div>');

                        var day_class = dowClass[day.getDay()];

                        if (holidays.indexOf((new Date(day.getFullYear(), day.getMonth(), day.getDate())).getTime()) > -1) {
                            day_class = "holiday";
                        }

                        dayArr.push('<div class="row day ' + day_class + '" '
                                + ' style="width: ' + tools.getCellSize() * hoursInDay + 'px;"> '
                                + ' <div class="fn-label">' + day.getDate() + '</div></div>');

                        dowArr.push('<div class="row day ' + day_class + '" '
                                + ' style="width: ' + tools.getCellSize() * hoursInDay + 'px;"> '
                                + ' <div class="fn-label">' + settings.dow[day.getDay()] + '</div></div>');

                        var dataPanel = core.dataPanel(element, range.length * tools.getCellSize());

                        /*
                        * Append panel elements
                        */

                        dataPanel.append(yearArr.join(""));
                        dataPanel.append(monthArr.join(""));
                        dataPanel.append($('<div class="row"/>').html(dayArr.join("")));
                        dataPanel.append($('<div class="row"/>').html(dowArr.join("")));
                        dataPanel.append($('<div class="row"/>').html(horArr.join("")));

                        break;

                    // weeks /////////////////////////////////////////////////////////////////////////////////////////
                    case "weeks":
                        range = tools.parseWeeksRange(element.dateStart, element.dateEnd);
                        yearArr = ['<div class="row"/>'];
                        monthArr = ['<div class="row"/>'];
                        var year = range[0].getFullYear();
                        var month = range[0].getMonth();
                        var day = range[0];

                        for (var i = 0; i < range.length; i++) {
                            var rday = range[i];
                            /*
                            * Fill years
                            */
                            if (rday.getFullYear() !== year) {
                                yearArr.push(
                                    ('<div class="row header year" style="width: '
                                        + tools.getCellSize() * daysInYear
                                        + 'px;"><div class="fn-label">'
                                        + year
                                        + '</div></div>'));
                                year = rday.getFullYear();
                                daysInYear = 0;
                            }
                            daysInYear++;

                            /*
                            * Fill months
                            */
                            if (rday.getMonth() !== month) {
                                monthArr.push(
                                    ('<div class="row header month" style="width:'
                                       + tools.getCellSize() * daysInMonth
                                       + 'px;"><div class="fn-label">'
                                       + settings.months[month]
                                       + '</div></div>'));
                                month = rday.getMonth();
                                daysInMonth = 0;
                            }
                            daysInMonth++;
                            /*
                            * Fill weeks
                            */
                            dayArr.push('<div class="row day wd" '
                                    + ' id="' + rday.getWeekId() + '" offset="' + i * tools.getCellSize() + '" repdate="' + rday.genRepDate() + '"> '
                                    + ' <div class="fn-label">' + rday.getWeekOfYear() + '</div></div>');
                        }

                        /*
                        * Last year
                        */
                        yearArr.push(
                            '<div class="row header year" style="width: '
                            + tools.getCellSize() * daysInYear + 'px;"><div class="fn-label">'
                            + year
                            + '</div></div>');
                        /*
                        * Last month
                        */
                        monthArr.push(
                            '<div class="row header month" style="width: '
                            + tools.getCellSize() * daysInMonth + 'px"><div class="fn-label">'
                            + settings.months[month]
                            + '</div></div>');

                        var dataPanel = core.dataPanel(element, range.length * tools.getCellSize());


                        dataPanel.append(yearArr.join("") + monthArr.join("") + dayArr.join("") + (dowArr.join("")));



                        break;
                    // months ////////////////////////////////////////////////////////////////////////////////////////
                    case 'months':
                        range = tools.parseMonthsRange(element.dateStart, element.dateEnd);

                        var year = range[0].getFullYear();
                        var month = range[0].getMonth();
                        var day = range[0];

                        for (var i = 0; i < range.length; i++) {
                            var rday = range[i];
                            /*
                            * Fill years
                            */
                            if (rday.getFullYear() !== year) {
                                yearArr.push(
                                    ('<div class="row header year" style="width: '
                                        + tools.getCellSize() * daysInYear
                                        + 'px;"><div class="fn-label">'
                                        + year
                                        + '</div></div>'));
                                year = rday.getFullYear();
                                daysInYear = 0;
                            }
                            daysInYear++;
                            monthArr.push('<div class="row day wd" id="dh-' + tools.genId(rday.getTime()) + '" offset="' + i * tools.getCellSize() + '" repdate="' + rday.genRepDate() + '">' + (1 + rday.getMonth()) + '</div>');



                        }

                        /*
                        * Last year
                        */
                        yearArr.push(
                            '<div class="row header year" style="width: '
                            + tools.getCellSize() * daysInYear + 'px;"><div class="fn-label">'
                            + year
                            + '</div></div>');
                        /*
                        * Last month
                        */
                        monthArr.push(
                            '<div class="row header month" style="width: '
                            + tools.getCellSize() * daysInMonth + 'px">"<div class="fn-label">'
                            + settings.months[month]
                            + '</div></div>');

                        var dataPanel = core.dataPanel(element, range.length * tools.getCellSize());

                        /*
                        * Append panel elements
                        */
                        dataPanel.append(yearArr.join(""));
                        dataPanel.append(monthArr.join(""));
                        dataPanel.append($('<div class="row"/>').html(dayArr.join("")));
                        dataPanel.append($('<div class="row"/>').html(dowArr.join("")));


                        break;
                    // days //////////////////////////////////////////////////////////////////////////////////////////
                    default:
                        range = tools.parseDateRange(element.dateStart, element.dateEnd);

                        var year = range[0].getFullYear();
                        var month = range[0].getMonth();
                        var day = range[0];

                        for (var i = 0; i < range.length; i++) {
                            var rday = range[i];
                            /*
                            * Fill years
                            */
                            if (rday.getFullYear() !== year) {
                                yearArr.push(
                                    ('<div class="row header year" style="width:'
                                        + tools.getCellSize() * daysInYear
                                        + 'px;"><div class="fn-label">'
                                        + year
                                        + '</div></div>'));
                                year = rday.getFullYear();
                                daysInYear = 0;
                            }
                            daysInYear++;

                            /*
                            * Fill months
                            */
                            if (rday.getMonth() !== month) {
                                monthArr.push(
                                    ('<div class="row header month" style="width:'
                                       + tools.getCellSize() * daysInMonth
                                       + 'px;"><div class="fn-label">'
                                       + settings.months[month]
                                       + '</div></div>'));
                                month = rday.getMonth();
                                daysInMonth = 0;
                            }
                            daysInMonth++;

                            var getDay = rday.getDay();
                            var day_class = dowClass[getDay];
                            if (holidays.indexOf((new Date(rday.getFullYear(), rday.getMonth(), rday.getDate())).getTime()) > -1) {
                                day_class = "holiday";
                            }

                            dayArr.push('<div class="row day ' + day_class + '" '
                                    + ' id="dh-' + tools.genId(rday.getTime()) + '" offset="' + i * tools.getCellSize() + '" repdate="' + rday.genRepDate() + '> '
                                    + ' <div class="fn-label">' + rday.getDate() + '</div></div>');
                            dowArr.push('<div class="row day ' + day_class + '" '
                                    + ' id="dw-' + tools.genId(rday.getTime()) + '"  repdate="' + rday.genRepDate() + '"> '
                                    + ' <div class="fn-label">' + settings.dow[getDay] + '</div></div>');
                        } //for

                        /*
                        * Last year
                        */
                        yearArr.push(
                            '<div class="row header year" style="width: '
                            + tools.getCellSize() * daysInYear + 'px;"><div class="fn-label">'
                            + year
                            + '</div></div>');
                        /*
                        * Last month
                        */
                        monthArr.push(
                            '<div class="row header month" style="width: '
                            + tools.getCellSize() * daysInMonth + 'px"><div class="fn-label">'
                            + settings.months[month]
                            + '</div></div>');

                        var dataPanel = core.dataPanel(element, range.length * tools.getCellSize());

                        /*
                        * Append panel elements
                        */
                        dataPanel.append(yearArr.join(""));
                        dataPanel.append(monthArr.join(""));
                        dataPanel.append($('<div class="row"/>').html(dayArr.join("")));
                        dataPanel.append($('<div class="row"/>').html(dowArr.join("")));

                        break;
                }

                return $('<div class="rightPanel"></div>').append(dataPanel);
            },


            navigation: function (element) {
                var ganttNavigate = null;
                if (settings.navigate === "scroll") {
                    ganttNavigate = $('<div class="navigate" />')
                        .append($('<div class="nav-slider" />')
                            .append($('<div class="nav-slider-left" />')
                                .append($('<span role="button" class="nav-link nav-page-back"/>')
                                    .html('&lt;')
                                    .click(function () {
                                        core.navigatePage(element, -1);
                                    }))
                                .append($('<div class="page-number"/>')
                                        .append($('<span/>')
                                            .html(element.pageNum + 1 + ' of ' + element.pageCount)))
                                .append($('<span role="button" class="nav-link nav-page-next"/>')
                                    .html('&gt;')
                                    .click(function () {
                                        core.navigatePage(element, 1);
                                    }))
                                .append($('<span role="button" class="nav-link nav-now"/>')
                                    .html('&#9679;')
                                    .click(function () {
                                        core.navigateTo(element, 'now');
                                    }))
                                .append($('<span role="button" class="nav-link nav-prev-week"/>')
                                    .html('&lt;&lt;')
                                    .click(function () {
                                        if (settings.scale === 'hours') {
                                            core.navigateTo(element, tools.getCellSize() * 8);
                                        } else if (settings.scale === 'days') {
                                            core.navigateTo(element, tools.getCellSize() * 30);
                                        } else if (settings.scale === 'weeks') {
                                            core.navigateTo(element, tools.getCellSize() * 12);
                                        } else if (settings.scale === 'months') {
                                            core.navigateTo(element, tools.getCellSize() * 6);
                                        }
                                    }))
                                .append($('<span role="button" class="nav-link nav-prev-day"/>')
                                    .html('&lt;')
                                    .click(function () {
                                        if (settings.scale === 'hours') {
                                            core.navigateTo(element, tools.getCellSize() * 4);
                                        } else if (settings.scale === 'days') {
                                            core.navigateTo(element, tools.getCellSize() * 7);
                                        } else if (settings.scale === 'weeks') {
                                            core.navigateTo(element, tools.getCellSize() * 4);
                                        } else if (settings.scale === 'months') {
                                            core.navigateTo(element, tools.getCellSize() * 3);
                                        }
                                    })))
                            .append($('<div class="nav-slider-content" />')
                                    .append($('<div class="nav-slider-bar" />')
                                            .append($('<a class="nav-slider-button" />')
                                                )
                                                .mousedown(function (e) {
                                                    if (e.preventDefault) {
                                                        e.preventDefault();
                                                    }
                                                    element.scrollNavigation.scrollerMouseDown = true;
                                                    core.sliderScroll(element, e);
                                                })
                                                .mousemove(function (e) {
                                                    if (element.scrollNavigation.scrollerMouseDown) {
                                                        core.sliderScroll(element, e);
                                                    }
                                                })
                                            )
                                        )
                            .append($('<div class="nav-slider-right" />')
                                .append($('<span role="button" class="nav-link nav-next-day"/>')
                                    .html('&gt;')
                                    .click(function () {
                                        if (settings.scale === 'hours') {
                                            core.navigateTo(element, tools.getCellSize() * -4);
                                        } else if (settings.scale === 'days') {
                                            core.navigateTo(element, tools.getCellSize() * -7);
                                        } else if (settings.scale === 'weeks') {
                                            core.navigateTo(element, tools.getCellSize() * -4);
                                        } else  if (settings.scale === 'months') {
                                            core.navigateTo(element, tools.getCellSize() * -3);
                                        }
                                    }))
                            .append($('<span role="button" class="nav-link nav-next-week"/>')
                                    .html('&gt;&gt;')
                                    .click(function () {
                                        if (settings.scale === 'hours') {
                                            core.navigateTo(element, tools.getCellSize() * -8);
                                        } else if (settings.scale === 'days') {
                                            core.navigateTo(element, tools.getCellSize() * -30);
                                        } else if (settings.scale === 'weeks') {
                                            core.navigateTo(element, tools.getCellSize() * -12);
                                        } else if (settings.scale === 'months') {
                                            core.navigateTo(element, tools.getCellSize() * -6);
                                        }
                                    }))
                                .append($('<span role="button" class="nav-link nav-zoomIn"/>')
                                    .html('&#43;')
                                    .click(function () {
                                        core.zoomInOut(element, -1);
                                    }))
                                .append($('<span role="button" class="nav-link nav-zoomOut"/>')
                                    .html('&#45;')
                                    .click(function () {
                                        core.zoomInOut(element, 1);
                                    }))
                                    )
                                );
                    $(document).mouseup(function () {
                        element.scrollNavigation.scrollerMouseDown = false;
                    });
                } else {
                    /* Navigation panel */
                    ganttNavigate = $('<div class="navigate" />')
                        .append($('<span role="button" class="nav-link nav-page-back"/>')
                            .html('&lt;')
                            .click(function () {
                                core.navigatePage(element, -1);
                            }))
                        .append($('<div class="page-number"/>')
                                .append($('<span/>')
                                    .html(element.pageNum + 1 + ' of ' + element.pageCount)))
                        .append($('<span role="button" class="nav-link nav-page-next"/>')
                            .html('&gt;')
                            .click(function () {
                                core.navigatePage(element, 1);
                            }))
                        .append($('<span role="button" class="nav-link nav-begin"/>')
                            .html('&#124;&lt;')
                            .click(function () {
                                core.navigateTo(element, 'begin');
                            }))
                        .append($('<span role="button" class="nav-link nav-prev-week"/>')
                            .html('&lt;&lt;')
                            .click(function () {
                                core.navigateTo(element, tools.getCellSize() * 7);
                            }))
                        .append($('<span role="button" class="nav-link nav-prev-day"/>')
                            .html('&lt;')
                            .click(function () {
                                core.navigateTo(element, tools.getCellSize());
                            }))
                        .append($('<span role="button" class="nav-link nav-now"/>')
                            .html('&#9679;')
                            .click(function () {
                                core.navigateTo(element, 'now');
                            }))
                        .append($('<span role="button" class="nav-link nav-next-day"/>')
                            .html('&gt;')
                            .click(function () {
                                core.navigateTo(element, tools.getCellSize() * -1);
                            }))
                        .append($('<span role="button" class="nav-link nav-next-week"/>')
                            .html('&gt;&gt;')
                            .click(function () {
                                core.navigateTo(element, tools.getCellSize() * -7);
                            }))
                        .append($('<span role="button" class="nav-link nav-end"/>')
                            .html('&gt;&#124;')
                            .click(function () {
                                core.navigateTo(element, 'end');
                            }))
                        .append($('<span role="button" class="nav-link nav-zoomIn"/>')
                            .html('&#43;')
                            .click(function () {
                                core.zoomInOut(element, -1);
                            }))
                        .append($('<span role="button" class="nav-link nav-zoomOut"/>')
                            .html('&#45;')
                            .click(function () {
                                core.zoomInOut(element, 1);
                            }));
                }
                return $('<div class="bottom"/>').append(ganttNavigate);
            },
            createProgressBar: function (days, cls, desc, label, dataObj) {
                var cellWidth = tools.getCellSize();
                var barMarg = tools.getProgressBarMargin() || 0;
                var bar = $('<div class="bar"><div class="fn-label">' + label + '</div></div>')
                        .addClass(cls)
                        .css({
                            width: ((cellWidth * days) - barMarg) + 5
                        })
                        .data("dataObj", dataObj);

                if (desc) {
                    bar
                      .mouseover(function (e) {
                          var hint = $('<div class="fn-gantt-hint" />').html(desc);
                          $("body").append(hint);
                          hint.css("left", e.pageX);
                          hint.css("top", e.pageY);
                          hint.show();
                      })
                      .mouseout(function () {
                          $(".fn-gantt-hint").remove();
                      })
                      .mousemove(function (e) {
                          $(".fn-gantt-hint").css("left", e.pageX);
                          $(".fn-gantt-hint").css("top", e.pageY + 15);
                      });
                }
                bar.click(function (e) {
                    e.stopPropagation();
                    settings.onItemClick($(this).data("dataObj"));
                });
                return bar;
            },
            markNow: function (element) {
                switch (settings.scale) {
                    case "weeks":
                        var cd = Date.parse(new Date());
                        cd = (Math.floor(cd / 36400000) * 36400000);
                        $(element).find(':findweek("' + cd + '")').removeClass('wd').addClass('today');
                        break;
                    case "months":
                        $(element).find(':findmonth("' + new Date().getTime() + '")').removeClass('wd').addClass('today');
                        break;
                    default:
                        var cd = Date.parse(new Date());
                        cd = (Math.floor(cd / 36400000) * 36400000);
                        $(element).find(':findday("' + cd + '")').removeClass('wd').addClass('today');
                        break;
                }
            },

            fillData: function (element, datapanel, leftpanel) {
                var invertColor = function (colStr) {
                    try {
                        colStr = colStr.replace("rgb(", "").replace(")", "");
                        var rgbArr = colStr.split(",");
                        var R = parseInt(rgbArr[0],10);
                        var G = parseInt(rgbArr[1],10);
                        var B = parseInt(rgbArr[2],10);
                        var gray = Math.round((255 - (0.299 * R + 0.587 * G + 0.114 * B)) * 0.9, 1);
                        return "rgb(" + gray + ", " + gray + ", " + gray + ")";
                    } catch (err) {
                        return "";
                    }
                };
                $.each(element.data, function (i, entry) {
                    if (i >= element.pageNum * settings.itemsPerPage && i < (element.pageNum * settings.itemsPerPage + settings.itemsPerPage)) {

                        $.each(entry.values, function (j, day) {
                            var _bar = null;
                            switch (settings.scale) {
                                case "hours":


                                    var dFrom = tools.genId(tools.dateDeserialize(day.from).getTime(), element.scaleStep);
                                    var from = $(element).find('#dh-' + dFrom);

                                    var dTo = tools.genId(tools.dateDeserialize(day.to).getTime(), element.scaleStep);
                                    var to = $(element).find('#dh-' + dTo);

                                    var cFrom = from.attr("offset");
                                    var cTo = to.attr("offset");
                                    var dl = Math.floor((cTo - cFrom) / tools.getCellSize()) + 1;

                                    _bar = core.createProgressBar(
                                                dl,
                                                day.customClass ? day.customClass : "",
                                                day.desc ? day.desc : "",
                                                day.label ? day.label : "",
                                                day.dataObj ? day.dataObj : null
                                            );

                                    // find row
                                    var topEl = $(element).find("#rowheader" + i);

                                    var top = tools.getCellSize() * 3 + 2 + parseInt(topEl.attr("offset"),10);
                                    _bar.css({ 'margin-top': top, 'margin-left': Math.floor(cFrom) });

                                    datapanel.append(_bar);
                                    break;
                                case "weeks":
                                    var dtFrom = tools.dateDeserialize(day.from);
                                    var dtTo = tools.dateDeserialize(day.to);

                                    if (dtFrom.getDate() <= 3 && dtFrom.getMonth() === 0) {
                                        dtFrom.setDate(dtFrom.getDate() + 4);
                                    }

                                    if (dtFrom.getDate() <= 3 && dtFrom.getMonth() === 0) {
                                        dtFrom.setDate(dtFrom.getDate() + 4);
                                    }

                                    if (dtTo.getDate() <= 3 && dtTo.getMonth() === 0) {
                                        dtTo.setDate(dtTo.getDate() + 4);
                                    }

                                    var from = $(element).find("#" + dtFrom.getWeekId());

                                    var cFrom = from.attr("offset");

                                    var to = $(element).find("#" + dtTo.getWeekId());
                                    var cTo = to.attr("offset");

                                    var dl = Math.round((cTo - cFrom) / tools.getCellSize()) + 1;

                                    _bar = core.createProgressBar(
                                             dl,
                                             day.customClass ? day.customClass : "",
                                             day.desc ? day.desc : "",
                                             day.label ? day.label : "",
                                            day.dataObj ? day.dataObj : null
                                        );

                                    // find row
                                    var topEl = $(element).find("#rowheader" + i);

                                    var top = tools.getCellSize() * 3 + 2 + parseInt(topEl.attr("offset"),10);
                                    _bar.css({ 'margin-top': top, 'margin-left': Math.floor(cFrom) });

                                    datapanel.append(_bar);
                                    break;
                                case "months":

                                    var dtFrom = tools.dateDeserialize(day.from);
                                    var dtTo = tools.dateDeserialize(day.to);

                                    if (dtFrom.getDate() <= 3 && dtFrom.getMonth() === 0) {
                                        dtFrom.setDate(dtFrom.getDate() + 4);
                                    }

                                    if (dtFrom.getDate() <= 3 && dtFrom.getMonth() === 0) {
                                        dtFrom.setDate(dtFrom.getDate() + 4);
                                    }

                                    if (dtTo.getDate() <= 3 && dtTo.getMonth() === 0) {
                                        dtTo.setDate(dtTo.getDate() + 4);
                                    }

                                    var from = $(element).find("#dh-" + tools.genId(dtFrom.getTime()));
                                    var cFrom = from.attr("offset");
                                    var to = $(element).find("#dh-" + tools.genId(dtTo.getTime()));
                                    var cTo = to.attr("offset");
                                    var dl = Math.round((cTo - cFrom) / tools.getCellSize()) + 1;

                                    _bar = core.createProgressBar(
                                        dl,
                                        day.customClass ? day.customClass : "",
                                        day.desc ? day.desc : "",
                                        day.label ? day.label : "",
                                        day.dataObj ? day.dataObj : null
                                    );

                                    // find row
                                    var topEl = $(element).find("#rowheader" + i);

                                    var top = tools.getCellSize() * 2 + 2 + parseInt(topEl.attr("offset"),10);
                                    _bar.css({ 'margin-top': top, 'margin-left': Math.floor(cFrom) });

                                    datapanel.append(_bar);
                                    break;

                                // Days
                                default:
                                    var dFrom = tools.genId(tools.dateDeserialize(day.from).getTime());
                                    var dTo = tools.genId(tools.dateDeserialize(day.to).getTime());

                                    var from = $(element).find("#dh-" + dFrom);
                                    var cFrom = from.attr("offset");

                                    var dl = Math.floor(((dTo / 1000) - (dFrom / 1000)) / 86400) + 1;
                                    _bar = core.createProgressBar(
                                                dl,
                                                day.customClass ? day.customClass : "",
                                                day.desc ? day.desc : "",
                                                day.label ? day.label : "",
                                                day.dataObj ? day.dataObj : null
                                        );

                                    // find row
                                    var topEl = $(element).find("#rowheader" + i);

                                    var top = tools.getCellSize() * 4 + 2 + parseInt(topEl.attr("offset"),10);
                                    _bar.css({ 'margin-top': top, 'margin-left': Math.floor(cFrom) });

                                    datapanel.append(_bar);

                                    break;
                            }
                            var $l = _bar.find(".fn-label");
                            if ($l && _bar.length) {
                                var gray = invertColor(_bar[0].style.backgroundColor);
                                $l.css("color", gray);
                            } else if ($l) {
                                $l.css("color", "");
                            }
                        });

                    }
                });
            },

            navigateTo: function (element, val) {
                var $rightPanel = $(element).find(".fn-gantt .rightPanel");
                var $dataPanel = $rightPanel.find(".dataPanel");
                $dataPanel.click = function () {
                    alert(arguments.join(""));
                };
                var rightPanelWidth = $rightPanel.width();
                var dataPanelWidth = $dataPanel.width();

                switch (val) {
                    case "begin":
                        $dataPanel.animate({
                            "margin-left": "0px"
                        }, "fast", function () { core.repositionLabel(element); });
                        element.scrollNavigation.panelMargin = 0;
                        break;
                    case "end":
                        var mLeft = dataPanelWidth - rightPanelWidth;
                        element.scrollNavigation.panelMargin = mLeft * -1;
                        $dataPanel.animate({
                            "margin-left": "-" + mLeft + "px"
                        }, "fast", function () { core.repositionLabel(element); });
                        break;
                    case "now":
                        if (!element.scrollNavigation.canScroll) {
                            return false;
                        }
                        var max_left = (dataPanelWidth - rightPanelWidth) * -1;
                        var cur_marg = $dataPanel.css("margin-left").replace("px", "");
                        var val = $dataPanel.find(".today").offset().left - $dataPanel.offset().left;
                        val *= -1;
                        if (val > 0) {
                            val = 0;
                        } else if (val < max_left) {
                            val = max_left;
                        }
                        $dataPanel.animate({
                            "margin-left": val + "px"
                        }, "fast", core.repositionLabel(element));
                        element.scrollNavigation.panelMargin = val;
                        break;
                    default:
                        var max_left = (dataPanelWidth - rightPanelWidth) * -1;
                        var cur_marg = $dataPanel.css("margin-left").replace("px", "");
                        var val = parseInt(cur_marg,10) + val;
                        if (val <= 0 && val >= max_left) {
                            $dataPanel.animate({
                                "margin-left": val + "px"
                            }, "fast", core.repositionLabel(element));
                        }
                        element.scrollNavigation.panelMargin = val;
                        break;
                }



            },
            navigatePage: function (element, val) {
                if ((element.pageNum + val) >= 0 && (element.pageNum + val) < Math.ceil(element.rowsNum / settings.itemsPerPage)) {
                    core.waitToggle(element, true, function () {
                        element.pageNum += val;
                        element.hPosition = $(".fn-gantt .dataPanel").css("margin-left").replace("px", "");
                        element.scaleOldWidth = false;
                        core.init(element);
                    });
                }
            },
            zoomInOut: function (element, val) {
                core.waitToggle(element, true, function () {

                    var zoomIn = (val < 0);

                    var scaleSt = element.scaleStep + val * 3;
                    scaleSt = scaleSt <= 1 ? 1 : scaleSt === 4 ? 3 : scaleSt;
                    var scale = settings.scale;
                    var headerRows = element.headerRows;
                    if (settings.scale === "hours" && scaleSt >= 13) {
                        scale = "days";
                        headerRows = 4;
                        scaleSt = 13;
                    } else if (settings.scale === "days" && zoomIn) {
                        scale = "hours";
                        headerRows = 5;
                        scaleSt = 12;
                    } else if (settings.scale === "days" && !zoomIn) {
                        scale = "weeks";
                        headerRows = 3;
                        scaleSt = 13;
                    } else if (settings.scale === "weeks" && !zoomIn) {
                        scale = "months";
                        headerRows = 2;
                        scaleSt = 14;
                    } else if (settings.scale === "weeks" && zoomIn) {
                        scale = "days";
                        headerRows = 4;
                        scaleSt = 13;
                    } else if (settings.scale === "months" && zoomIn) {
                        scale = "weeks";
                        headerRows = 3;
                        scaleSt = 13;
                    }

                    if ((zoomIn && $.inArray(scale, scales) < $.inArray(settings.minScale, scales))
                        || (!zoomIn && $.inArray(scale, scales) > $.inArray(settings.maxScale, scales))) {
                        core.init(element);
                        return;
                    }
                    element.scaleStep = scaleSt;
                    settings.scale = scale;
                    element.headerRows = headerRows;
                    var $rightPanel = $(element).find(".fn-gantt .rightPanel");
                    var $dataPanel = $rightPanel.find(".dataPanel");
                    element.hPosition = $dataPanel.css("margin-left").replace("px", "");
                    element.scaleOldWidth = ($dataPanel.width() - $rightPanel.width());

                    if (settings.useCookie) {
                        $.cookie(this.cookieKey + "CurrentScale", settings.scale);
                        // reset scrollPos
                        $.cookie(this.cookieKey + "ScrollPos", null);
                    }
                    core.init(element);
                });
            },
            mouseScroll: function (element, e) {
                var $dataPanel = $(element).find(".fn-gantt .dataPanel");
                $dataPanel.css("cursor", "move");
                var bPos = $dataPanel.offset();
                var mPos = element.scrollNavigation.mouseX === null ? e.pageX : element.scrollNavigation.mouseX;
                var delta = e.pageX - mPos;
                element.scrollNavigation.mouseX = e.pageX;

                core.scrollPanel(element, delta);

                clearTimeout(element.scrollNavigation.repositionDelay);
                element.scrollNavigation.repositionDelay = setTimeout(core.repositionLabel, 50, element);
            },
            wheelScroll: function (element, e) {
                var delta = e.detail ? e.detail * (-50) : e.wheelDelta / 120 * 50;

                core.scrollPanel(element, delta);

                clearTimeout(element.scrollNavigation.repositionDelay);
                element.scrollNavigation.repositionDelay = setTimeout(core.repositionLabel, 50, element);

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    return false;
                }
            },
            sliderScroll: function (element, e) {
                var $sliderBar = $(element).find(".nav-slider-bar");
                var $sliderBarBtn = $sliderBar.find(".nav-slider-button");
                var $rightPanel = $(element).find(".fn-gantt .rightPanel");
                var $dataPanel = $rightPanel.find(".dataPanel");

                var bPos = $sliderBar.offset();
                var bWidth = $sliderBar.width();
                var wButton = $sliderBarBtn.width();

                var pos, mLeft;

                if ((e.pageX >= bPos.left) && (e.pageX <= bPos.left + bWidth)) {
                    pos = e.pageX - bPos.left;
                    pos = pos - wButton / 2;
                    $sliderBarBtn.css("left", pos);

                    mLeft = $dataPanel.width() - $rightPanel.width();

                    var pPos = pos * mLeft / bWidth * -1;
                    if (pPos >= 0) {
                        $dataPanel.css("margin-left", "0px");
                        element.scrollNavigation.panelMargin = 0;
                    } else if (pos >= bWidth - (wButton * 1)) {
                        $dataPanel.css("margin-left", mLeft * -1 + "px");
                        element.scrollNavigation.panelMargin = mLeft * -1;
                    } else {
                        $dataPanel.css("margin-left", pPos + "px");
                        element.scrollNavigation.panelMargin = pPos;
                    }
                    clearTimeout(element.scrollNavigation.repositionDelay);
                    element.scrollNavigation.repositionDelay = setTimeout(core.repositionLabel, 5, element);
                }
            },
            scrollPanel: function (element, delta) {
                if (!element.scrollNavigation.canScroll) {
                    return false;
                }
                var _panelMargin = parseInt(element.scrollNavigation.panelMargin,10) + delta;
                if (_panelMargin > 0) {
                    element.scrollNavigation.panelMargin = 0;
                    $(element).find(".fn-gantt .dataPanel").css("margin-left", element.scrollNavigation.panelMargin + "px");
                } else if (_panelMargin < element.scrollNavigation.panelMaxPos * -1) {
                    element.scrollNavigation.panelMargin = element.scrollNavigation.panelMaxPos * -1;
                    $(element).find(".fn-gantt .dataPanel").css("margin-left", element.scrollNavigation.panelMargin + "px");
                } else {
                    element.scrollNavigation.panelMargin = _panelMargin;
                    $(element).find(".fn-gantt .dataPanel").css("margin-left", element.scrollNavigation.panelMargin + "px");
                }
                core.synchronizeScroller(element);
            },
            synchronizeScroller: function (element) {
                if (settings.navigate === "scroll") {
                    var $rightPanel = $(element).find(".fn-gantt .rightPanel");
                    var $dataPanel = $rightPanel.find(".dataPanel");
                    var $sliderBar = $(element).find(".nav-slider-bar");
                    var $sliderBtn = $sliderBar.find(".nav-slider-button");

                    var bWidth = $sliderBar.width();
                    var wButton = $sliderBtn.width();

                    var mLeft = $dataPanel.width() - $rightPanel.width();
                    var hPos = 0;
                    if ($dataPanel.css("margin-left")) {
                        hPos = $dataPanel.css("margin-left").replace("px", "");
                    }
                    var pos = hPos * bWidth / mLeft - $sliderBtn.width() * 0.25;
                    pos = pos > 0 ? 0 : (pos * -1 >= bWidth - (wButton * 0.75)) ? (bWidth - (wButton * 1.25)) * -1 : pos;
                    $sliderBtn.css("left", pos * -1);
                }
            },
            repositionLabel: function (element) {
                setTimeout(function () {
                    var $dataPanel;
                    if (!element) {
                        $dataPanel = $(".fn-gantt .rightPanel .dataPanel");
                    } else {
                        var $rightPanel = $(element).find(".fn-gantt .rightPanel");
                        $dataPanel = $rightPanel.find(".dataPanel");
                    }

                    if (settings.useCookie) {
                        $.cookie(this.cookieKey + "ScrollPos", $dataPanel.css("margin-left").replace("px", ""));
                    }
                }, 500);
            },
            waitToggle: function (element, show, fn) {
                if (show) {
                    var eo = $(element).offset();
                    var ew = $(element).outerWidth();
                    var eh = $(element).outerHeight();

                    if (!element.loader) {
                        element.loader = $('<div class="fn-gantt-loader" style="position: absolute; top: ' + eo.top + 'px; left: ' + eo.left + 'px; width: ' + ew + 'px; height: ' + eh + 'px;">'
                        + '<div class="fn-gantt-loader-spinner"><span>' + settings.waitText + '</span></div></div>');
                    }
                    $("body").append(element.loader);
                    setTimeout(fn, 100);

                } else {
                    if (element.loader) {
                        element.loader.remove();
                    }
                    element.loader = null;
                }
            }
        };

        /**
        * Additional functions
        */
        var tools = {

            getMaxDate: function (element) {
                var maxDate = null;
                $.each(element.data, function (i, entry) {
                    $.each(entry.values, function (i, date) {
                        maxDate = maxDate < tools.dateDeserialize(date.to) ? tools.dateDeserialize(date.to) : maxDate;
                    });
                });

                switch (settings.scale) {
                    case "hours":
                        maxDate.setHours(Math.ceil((maxDate.getHours()) / element.scaleStep) * element.scaleStep);
                        maxDate.setHours(maxDate.getHours() + element.scaleStep * 3);
                        break;
                    case "weeks":
                        var bd = new Date(maxDate.getTime());
                        var bd = new Date(bd.setDate(bd.getDate() + 3 * 7));
                        var md = Math.floor(bd.getDate() / 7) * 7;
                        maxDate = new Date(bd.getFullYear(), bd.getMonth(), md === 0 ? 4 : md - 3);
                        break;
                    case "months":
                        var bd = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
                        bd.setMonth(bd.getMonth() + 2);
                        maxDate = new Date(bd.getFullYear(), bd.getMonth(), 1);
                        break;
                    default:
                        maxDate.setHours(0);
                        maxDate.setDate(maxDate.getDate() + 3);
                        break;
                }
                return maxDate;
            },
            getMinDate: function (element) {
                var minDate = null;
                $.each(element.data, function (i, entry) {
                    $.each(entry.values, function (i, date) {
                        minDate = minDate > tools.dateDeserialize(date.from) || minDate === null ? tools.dateDeserialize(date.from) : minDate;
                    });
                });
                switch (settings.scale) {
                    case "hours":
                        minDate.setHours(Math.floor((minDate.getHours()) / element.scaleStep) * element.scaleStep);
                        minDate.setHours(minDate.getHours() - element.scaleStep * 3);
                        break;
                    case "weeks":
                        var bd = new Date(minDate.getTime());
                        var bd = new Date(bd.setDate(bd.getDate() - 3 * 7));
                        var md = Math.floor(bd.getDate() / 7) * 7;
                        minDate = new Date(bd.getFullYear(), bd.getMonth(), md === 0 ? 4 : md - 3);
                        break;
                    case "months":
                        var bd = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
                        bd.setMonth(bd.getMonth() - 3);
                        minDate = new Date(bd.getFullYear(), bd.getMonth(), 1);
                        break;
                    default:
                        minDate.setHours(0);
                        minDate.setDate(minDate.getDate() - 3);
                        break;
                }
                return minDate;
            },
            parseDateRange: function (from, to) {
                var current = new Date(from.getTime());
                var end = new Date(to.getTime());
                var ret = [];
                var i = 0;
                do {
                    ret[i++] = new Date(current.getTime());
                    current.setDate(current.getDate() + 1);
                } while (current.getTime() <= to.getTime());
                return ret;

            },
            parseTimeRange: function (from, to, scaleStep) {
                var current = new Date(from);
                var end = new Date(to);
                var ret = [];
                var i = 0;
                do {
                    ret[i] = new Date(current.getTime());
                    current.setHours(current.getHours() + scaleStep);
                    current.setHours(Math.floor((current.getHours()) / scaleStep) * scaleStep);

                    if (current.getDay() !== ret[i].getDay()) {
                        current.setHours(0);
                    }

                    i++;
                } while (current.getTime() <= to.getTime());
                return ret;
            },
            parseWeeksRange: function (from, to) {

                var current = new Date(from);
                var end = new Date(to);

                var ret = [];
                var i = 0;
                do {

                    if (current.getDay() === 0) {
                        ret[i++] = current.getDayForWeek();
                    }
                    current.setDate(current.getDate() + 1);
                } while (current.getTime() <= to.getTime());

                return ret;
            },
            parseMonthsRange: function (from, to) {

                var current = new Date(from);
                var end = new Date(to);

                var ret = [];
                var i = 0;
                do {
                    ret[i++] = new Date(current.getFullYear(), current.getMonth(), 1);
                    current.setMonth(current.getMonth() + 1);
                } while (current.getTime() <= to.getTime());

                return ret;
            },
            dateDeserialize: function (dateStr) {
                //return eval("new" + dateStr.replace(/\//g, " "));
                var date = eval("new" + dateStr.replace(/\//g, " "));
                return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes());
            },



            genId: function (ticks) {
                var t = new Date(ticks);
                switch (settings.scale) {
                    case "hours":
                        var hour = t.getHours();
                        if (arguments.length >= 2) {
                            hour = (Math.floor((t.getHours()) / arguments[1]) * arguments[1]);
                        }
                        return (new Date(t.getFullYear(), t.getMonth(), t.getDate(), hour)).getTime();
                    case "weeks":
                        var y = t.getFullYear();
                        var w = t.getDayForWeek().getWeekOfYear();
                        var m = t.getMonth();
                        if (m === 11 && w === 1) {
                            y++;
                        }
                        return y + "-" + w;
                    case "months":
                        return t.getFullYear() + "-" + t.getMonth();
                    default:
                        return (new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime();
                }
            },
            _getCellSize: null,
            getCellSize: function () {
                if (!tools._getCellSize) {
                    $("body").append(
                        $('<div style="display: none; position: absolute;" class="fn-gantt" id="measureCellWidth"><div class="row"></div></div>')
                    );
                    tools._getCellSize = $("#measureCellWidth .row").height();
                    $("#measureCellWidth").empty().remove();
                }
                return tools._getCellSize;
            },
            getRightPanelSize: function () {
                $("body").append(
                    $('<div style="display: none; position: absolute;" class="fn-gantt" id="measureCellWidth"><div class="rightPanel"></div></div>')
                );
                var ret = $("#measureCellWidth .rightPanel").height();
                $("#measureCellWidth").empty().remove();
                return ret;
            },
            getPageHeight: function (element) {
                return element.pageNum + 1 === element.pageCount ? element.rowsOnLastPage * tools.getCellSize() : settings.itemsPerPage * tools.getCellSize();
            },
            _getProgressBarMargin: null,
            getProgressBarMargin: function () {
                if (!tools._getProgressBarMargin) {
                    $("body").append(
                        $('<div style="display: none; position: absolute;" id="measureBarWidth" ><div class="fn-gantt"><div class="rightPanel"><div class="dataPanel"><div class="row day"><div class="bar" /></div></div></div></div></div>')
                    );
                    tools._getProgressBarMargin = parseInt($("#measureBarWidth .fn-gantt .rightPanel .day .bar").css("margin-left").replace("px", ""),10);
                    tools._getProgressBarMargin += parseInt($("#measureBarWidth .fn-gantt .rightPanel .day .bar").css("margin-right").replace("px", ""),10);
                    $("#measureBarWidth").empty().remove();
                }
                return tools._getProgressBarMargin;
            }
        };

        this.each(function () {

            /**
            * Extend options with default values
            */
            if (options) {
                $.extend(settings, options);
            }

            this.data = null;        // Recived data
            this.pageNum = 0;        // Current page number
            this.pageCount = 0;      // Aviable pages count
            this.rowsOnLastPage = 0; // How many rows on last page
            this.rowsNum = 0;        //
            this.hPosition = 0;      // Current position on diagram (Horizontal)
            this.dateStart = null;
            this.dateEnd = null;
            this.scrollClicked = false;
            this.scaleOldWidth = null;
            this.headerRows = null;

            if (settings.useCookie) {
                var sc = $.cookie(this.cookieKey + "CurrentScale");
                if (sc) {
                    settings.scale = $.cookie(this.cookieKey + "CurrentScale");
                } else {
                    $.cookie(this.cookieKey + "CurrentScale", settings.scale);
                }
            }

            switch (settings.scale) {
                case "hours": this.headerRows = 5; this.scaleStep = 1; break;
                case "weeks": this.headerRows = 3; this.scaleStep = 13; break;
                case "months": this.headerRows = 2; this.scaleStep = 14; break;
                default: this.headerRows = 4; this.scaleStep = 13; break;
            }

            this.scrollNavigation = {
                panelMouseDown: false,
                scrollerMouseDown: false,
                mouseX: null,
                panelMargin: 0,
                repositionDelay: 0,
                panelMaxPos: 0,
                canScroll: true
            };

            this.gantt = null;
            this.loader = null;

            core.create(this);

        });

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
 AngularJS v1.0.8
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(P,T,q){'use strict';function m(b,a,c){var d;if(b)if(H(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(!b||typeof b.length!=="number"?0:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"||b instanceof L||aa&&b instanceof aa||ma.call(b)!=="[object Object]"||typeof b.callee==="function")for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],
d);return b}function nb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function hc(b,a,c){for(var d=nb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function ob(b){return function(a,c){b(c,a)}}function xa(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function pb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=
b.$$hashKey;m(arguments,function(a){a!==b&&m(a,function(a,c){b[c]=a})});pb(b,a);return b}function G(b){return parseInt(b,10)}function ya(b,a){return D(new (D(function(){},{prototype:b})),a)}function s(){}function na(b){return b}function I(b){return function(){return b}}function u(b){return typeof b=="undefined"}function v(b){return typeof b!="undefined"}function M(b){return b!=null&&typeof b=="object"}function B(b){return typeof b=="string"}function Ra(b){return typeof b=="number"}function oa(b){return ma.apply(b)==
"[object Date]"}function E(b){return ma.apply(b)=="[object Array]"}function H(b){return typeof b=="function"}function Sa(b){return ma.apply(b)=="[object RegExp]"}function pa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function ic(b){return b&&(b.nodeName||b.bind&&b.find)}function Ta(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function za(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=
za(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(pa(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(E(b))for(var c=a.length=0;c<b.length;c++)a.push(U(b[c]));else{c=a.$$hashKey;m(a,function(b,c){delete a[c]});for(var d in b)a[d]=U(b[d]);pb(a,c)}}else(a=b)&&(E(b)?a=U(b,[]):oa(b)?a=new Date(b.getTime()):Sa(b)?a=RegExp(b.source):M(b)&&(a=U(b,{})));return a}function jc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&
c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ea(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(E(b)){if(!E(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ea(b[d],a[d]))return!1;return!0}}else if(oa(b))return oa(a)&&b.getTime()==a.getTime();else if(Sa(b)&&Sa(a))return b.toString()==a.toString();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||pa(b)||pa(a)||E(a))return!1;c={};for(d in b)if(!(d.charAt(0)===
"$"||H(b[d]))){if(!ea(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==q&&!H(a[d]))return!1;return!0}return!1}function Va(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return H(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function kc(b,a){var c=a;/^\$+/.test(b)?c=q:pa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&a.$evalAsync&&
a.$watch&&(c="$SCOPE");return c}function ba(b,a){return typeof b==="undefined"?q:JSON.stringify(b,kc,a?"  ":null)}function qb(b){return B(b)?JSON.parse(b):b}function Wa(b){b&&b.length!==0?(b=y(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function qa(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return b[0].nodeType===3?y(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+y(b)})}catch(d){return y(c)}}function rb(b){try{return decodeURIComponent(b)}catch(a){}}
function Xa(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=rb(c[0]),v(d)&&(a[d]=v(c[1])?rb(c[1]):!0))});return a}function sb(b){var a=[];m(b,function(b,d){a.push(Ya(d,!0)+(b===!0?"":"="+Ya(b,!0)))});return a.length?a.join("&"):""}function Za(b){return Ya(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ya(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}
function lc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});
e&&a(e,g?[g]:[])}function tb(b,a){var c=function(){b=w(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=ub(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");$a.resumeBootstrap=function(b){m(b,function(b){a.push(b)});c()}}function ab(b,a){a=a||"_";return b.replace(mc,function(b,
d){return(d?a:"")+b.toLowerCase()})}function bb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&E(b)&&(b=b[b.length-1]);bb(H(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function cb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&H(b)?Va(e,b):b}function nc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),
"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw Error("No module: "+d);var b=[],c=[],j=a("$injector","invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider",
"register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);return this}};g&&j(g);return k})}})}function vb(b){return b.replace(oc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(pc,"Moz$1")}function db(b,a,c,d){function e(b){var f;var e=c&&b?[this.filter(b)]:[this],i=a,j,k,l,n,o,p;if(!d||b!=null)for(;e.length;){j=e.shift();k=0;for(l=j.length;k<l;k++){n=w(j[k]);i?n.triggerHandler("$destroy"):i=!i;o=0;for(f=(p=n.children()).length,
n=f;o<n;o++)e.push(aa(p[o]))}}return g.apply(this,arguments)}var g=aa.fn[b],g=g.$original||g;e.$original=g;aa.fn[b]=e}function L(b){if(b instanceof L)return b;if(!(this instanceof L)){if(B(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new L(b)}if(B(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);eb(this,a.childNodes);this.remove()}else eb(this,b)}function fb(b){return b.cloneNode(!0)}function sa(b){wb(b);for(var a=0,b=b.childNodes||
[];a<b.length;a++)sa(b[a])}function xb(b,a,c){var d=$(b,"events");$(b,"handle")&&(u(a)?m(d,function(a,c){gb(b,c,a);delete d[c]}):u(c)?(gb(b,a,d[a]),delete d[a]):Ua(d[a]||[],c))}function wb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),xb(b)),delete Ba[a],b[Aa]=q)}function $(b,a,c){var d=b[Aa],d=Ba[d||-1];if(v(c))d||(b[Aa]=d=++qc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function yb(b,a,c){var d=$(b,"data"),e=v(c),g=!e&&v(a),h=g&&!M(a);!d&&!h&&$(b,"data",d={});if(e)d[a]=
c;else if(g)if(h)return d&&d[a];else D(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>-1}function zb(b,a){a&&m(a.split(" "),function(a){b.className=S((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," "))})}function Ab(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=S(b.className+" "+S(a))})}function eb(b,a){if(a)for(var a=!a.nodeName&&v(a.length)&&!pa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Bb(b,a){return Da(b,
"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=w(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;b=b.parent()}}function Cb(b,a){var c=Ea[a.toLowerCase()];return c&&Db[b.nodeName]&&c}function rc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||T;if(u(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=
function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],function(a){a.call(b,c)});V<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function fa(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===q)c=b.$$hashKey=xa()}else c=b;return a+
":"+c}function Fa(b){m(b,this.put,this)}function hb(){}function Eb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(sc,""),c=c.match(tc),m(c[1].split(uc),function(b){b.replace(vc,function(b,c,d){a.push(d)})}),b.$inject=a}else E(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function ub(b){function a(a){return function(b,c){if(M(b))m(b,ob(a));else return a(b,c)}}function c(a,b){if(H(b)||E(b))b=l.instantiate(b);if(!b.$get)throw Error("Provider "+
a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),B(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],p=g[0]=="$injector"?l:l.get(g[0]);p[g[1]].apply(p,g[2])}}catch(h){throw h.message&&(h.message+=" from "+a),h;}}else if(H(a))try{b.push(l.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+a),i;}else if(E(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&
(o.message+=" from "+String(a[a.length-1])),o;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===h)throw Error("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],j=Eb(a),g,h,p;h=0;for(g=j.length;h<g;h++)p=j[h],f.push(e&&e.hasOwnProperty(p)?e[p]:c(p));a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();
case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(E(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return M(e)?e:c},get:c,annotate:Eb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,I(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=o.invoke(d,c);return o.invoke(b,null,{$delegate:a})}}}},
l=g(k,function(){throw Error("Unknown provider: "+i.join(" <- "));}),n={},o=n.$injector=g(n,function(a){a=l.get(a+f);return o.invoke(a.$get,a)});m(e(b),function(a){o.invoke(a||s)});return o}function wc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&y(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?
d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function xc(b,a,c,d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(p--,p===0)for(;z.length;)try{z.pop()()}catch(b){c.error(b)}}}function g(a,b){(function yc(){m(r,function(a){a()});x=b(yc,a)})()}function h(){N!=f.url()&&(N=f.url(),m(K,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,
o={};f.isMock=!1;var p=0,z=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){p++};f.notifyWhenNoOutstandingRequests=function(a){m(r,function(a){a()});p===0?a():z.push(a)};var r=[],x;f.addPollFn=function(a){u(x)&&g(100,l);r.push(a);return a};var N=j.href,A=a.find("base"),J=null;f.url=function(a,b){if(a){if(N!=a)return N=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),A.attr("href",A.attr("href"))):b?(j.replace(a),J=a):(j.href=a,J=null),f}else return J||j.href.replace(/%27/g,
"'")};var K=[],C=!1;f.onUrlChange=function(a){C||(d.history&&w(b).bind("popstate",h),d.hashchange?w(b).bind("hashchange",h):f.addPollFn(h),C=!0);K.push(a);return a};f.baseHref=function(){var a=A.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var ga={},Q="",t=f.baseHref();f.cookies=function(a,b){var d,e,f,j;if(a)if(b===q)i.cookie=escape(a)+"=;path="+t+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(B(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+t).length+1,d>4096&&c.warn("Cookie '"+
a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(i.cookie!==Q){Q=i.cookie;d=Q.split("; ");ga={};for(f=0;f<d.length;f++)e=d[f],j=e.indexOf("="),j>0&&(a=unescape(e.substring(0,j)),ga[a]===q&&(ga[a]=unescape(e.substring(j+1))))}return ga}};f.defer=function(a,b){var c;p++;c=l(function(){delete o[c];e(a)},b||0);o[c]=!0;return c};f.defer.cancel=function(a){return o[a]?(delete o[a],n(a),e(s),!0):!1}}function zc(){this.$get=["$window","$log","$sniffer","$document",
function(b,a,c,d){return new xc(b,d,a,c)}]}function Ac(){this.$get=function(){function b(b,d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var h=0,f=D({},d,{id:b}),i={},j=d&&d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);u(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),
i[a]},remove:function(a){var b=k[a];if(b){if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];delete i[a];h--}},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return D({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Bc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Fb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ",h=/^\s*(https?|ftp|mailto|file):/;this.directive=function i(d,e){B(d)?(bb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var g=b.invoke(a);if(H(g))g={compile:I(g)};else if(!g.compile&&g.link)g.compile=I(g.link);g.priority=g.priority||0;g.name=g.name||d;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";
e.push(g)}catch(h){c(h)}});return e}])),a[d].push(e)):m(d,ob(i));return this};this.urlSanitizationWhitelist=function(a){return v(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,j,k,l,n,o,p,z,r){function x(a,b,c){a instanceof w||(a=w(a));m(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var d=A(a,b,a,c);return function(b,c){bb(b,"scope");
for(var e=c?va.clone.call(a):a,g=0,j=e.length;g<j;g++){var h=e[g];(h.nodeType==1||h.nodeType==9)&&e.eq(g).data("$scope",b)}N(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function N(a,b){try{a.addClass(b)}catch(c){}}function A(a,b,c,d){function e(a,c,d,j){var h,i,k,p,o,l,n,r=[];o=0;for(l=c.length;o<l;o++)r.push(c[o]);n=o=0;for(l=g.length;o<l;n++)i=r[n],c=g[o++],h=g[o++],c?(c.scope?(k=a.$new(M(c.scope)),w(i).data("$scope",k)):k=a,(p=c.transclude)||!j&&b?c(h,k,i,d,function(b){return function(c){var d=
a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",Va(d,d.$destroy))}}(p||b)):c(h,k,i,q,j)):h&&h(a,i.childNodes,q,j)}for(var g=[],j,h,i,k=0;k<a.length;k++)h=new ia,j=J(a[k],[],h,d),h=(j=j.length?K(j,a[k],h,b,c):null)&&j.terminal||!a[k].childNodes||!a[k].childNodes.length?null:A(a[k].childNodes,j?j.transclude:b),g.push(j),g.push(h),i=i||j||h;return i?e:null}function J(a,b,c,g){var j=c.$attr,h;switch(a.nodeType){case 1:C(b,ca(Ga(a).toLowerCase()),"E",g);var i,k,o;h=a.attributes;for(var p=0,l=
h&&h.length;p<l;p++)if(i=h[p],!V||V>=8||i.specified)k=i.name,o=ca(k.toLowerCase()),j[o]=k,c[o]=i=S(V&&k=="href"?decodeURIComponent(a.getAttribute(k,2)):i.value),Cb(a,o)&&(c[o]=!0),R(a,b,i,o),C(b,o,"A",g);a=a.className;if(B(a)&&a!=="")for(;h=e.exec(a);)o=ca(h[2]),C(b,o,"C",g)&&(c[o]=S(h[3])),a=a.substr(h.index+h[0].length);break;case 3:Y(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))o=ca(h[1]),C(b,o,"M",g)&&(c[o]=S(h[2]))}catch(n){}}b.sort(t);return b}function K(a,b,c,d,e){function j(a,
b){if(a)a.require=t.require,n.push(a);if(b)b.require=t.require,r.push(b)}function h(a,b){var c,d="data",e=!1;if(B(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else E(a)&&(c=[],m(a,function(a){c.push(h(a,b))}));return c}function i(a,d,e,g,j){var l,z,t,F,N;l=b===e?c:jc(c,new ia(w(e),c.$attr));z=l.$$element;if(K){var Cc=/^\s*([@=&])\s*(\w*)\s*$/,x=d.$parent||d;m(K.scope,function(a,b){var c=
a.match(Cc)||[],e=c[2]||b,c=c[1],g,j,h;d.$$isolateBindings[b]=c+e;switch(c){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=x;break;case "=":j=o(l[e]);h=j.assign||function(){g=d[b]=j(x);throw Error(Gb+l[e]+" (directive: "+K.name+")");};g=d[b]=j(x);d.$watch(function(){var a=j(x);a!==d[b]&&(a!==g?g=d[b]=a:h(x,a=g=d[b]));return a});break;case "&":j=o(l[e]);d[b]=function(a){return j(x,a)};break;default:throw Error("Invalid isolate scope definition for directive "+K.name+": "+a);}})}Y&&
m(Y,function(a){var b={$scope:d,$element:z,$attrs:l,$transclude:j};N=a.controller;N=="@"&&(N=l[a.name]);z.data("$"+a.name+"Controller",p(N,b))});g=0;for(t=n.length;g<t;g++)try{F=n[g],F(d,z,l,F.require&&h(F.require,z))}catch(A){k(A,qa(z))}a&&a(d,e.childNodes,q,j);g=0;for(t=r.length;g<t;g++)try{F=r[g],F(d,z,l,F.require&&h(F.require,z))}catch(Dc){k(Dc,qa(z))}}for(var l=-Number.MAX_VALUE,n=[],r=[],z=null,K=null,A=null,F=c.$$element=w(b),t,C,R,ja,da=d,Y,s,u,D=0,y=a.length;D<y;D++){t=a[D];R=q;if(l>t.priority)break;
if(u=t.scope)ua("isolated scope",K,t,F),M(u)&&(N(F,"ng-isolate-scope"),K=t),N(F,"ng-scope"),z=z||t;C=t.name;if(u=t.controller)Y=Y||{},ua("'"+C+"' controller",Y[C],t,F),Y[C]=t;if(u=t.transclude)ua("transclusion",ja,t,F),ja=t,l=t.priority,u=="element"?(R=w(b),F=c.$$element=w(T.createComment(" "+C+": "+c[C]+" ")),b=F[0],v(e,w(R[0]),b),da=x(R,d,l)):(R=w(fb(b)).contents(),F.html(""),da=x(R,d));if(u=t.template)if(ua("template",A,t,F),A=t,u=Hb(u),t.replace){R=w("<div>"+S(u)+"</div>").contents();b=R[0];if(R.length!=
1||b.nodeType!==1)throw Error(g+u);v(e,F,b);C={$attr:{}};a=a.concat(J(b,a.splice(D+1,a.length-(D+1)),C));ga(c,C);y=a.length}else F.html(u);if(t.templateUrl)ua("template",A,t,F),A=t,i=Q(a.splice(D,a.length-D),i,F,c,e,t.replace,da),y=a.length;else if(t.compile)try{s=t.compile(F,c,da),H(s)?j(null,s):s&&j(s.pre,s.post)}catch(G){k(G,qa(F))}if(t.terminal)i.terminal=!0,l=Math.max(l,t.priority)}i.scope=z&&z.scope;i.transclude=ja&&da;return i}function C(d,e,g,j){var h=!1;if(a.hasOwnProperty(e))for(var o,e=
b.get(e+c),l=0,p=e.length;l<p;l++)try{if(o=e[l],(j===q||j>o.priority)&&o.restrict.indexOf(g)!=-1)d.push(o),h=!0}catch(n){k(n)}return h}function ga(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,g){g=="class"?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):g=="style"?e.attr("style",e.attr("style")+";"+b):g.charAt(0)!="$"&&!a.hasOwnProperty(g)&&(a[g]=b,d[g]=c[g])})}function Q(a,b,c,d,e,
j,h){var i=[],k,o,p=c[0],r=a.shift(),z=D({},r,{controller:null,templateUrl:null,transclude:null,scope:null});c.html("");l.get(r.templateUrl,{cache:n}).success(function(l){var n,r,l=Hb(l);if(j){r=w("<div>"+S(l)+"</div>").contents();n=r[0];if(r.length!=1||n.nodeType!==1)throw Error(g+l);l={$attr:{}};v(e,c,n);J(n,a,l);ga(d,l)}else n=p,c.html(l);a.unshift(z);k=K(a,n,d,h);for(o=A(c[0].childNodes,h);i.length;){var ia=i.pop(),l=i.pop();r=i.pop();var F=i.pop(),t=n;r!==p&&(t=fb(n),v(l,w(r),t));k(function(){b(o,
F,t,e,ia)},F,t,e,ia)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,g){i?(i.push(c),i.push(d),i.push(e),i.push(g)):k(function(){b(o,c,d,e,g)},c,d,e,g)}}function t(a,b){return b.priority-a.priority}function ua(a,b,c,d){if(b)throw Error("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+qa(d));}function Y(a,b){var c=j(b,!0);c&&a.push({priority:0,compile:I(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);N(d.data("$binding",
e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function R(a,b,c,d){var e=j(c,!0);e&&b.push({priority:100,compile:I(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=j(c[d],!0));c[d]=q;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function v(a,b,c){var d=b[0],e=d.parentNode,g,j;if(a){g=0;for(j=a.length;g<j;g++)if(a[g]==d){a[g]=c;break}}e&&e.replaceChild(c,d);c[w.expando]=d[w.expando];b[0]=c}var ia=
function(a,b){this.$$element=a;this.$attr=b||{}};ia.prototype={$normalize:ca,$set:function(a,b,c,d){var e=Cb(this.$$element[0],a),g=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));if(Ga(this.$$element[0])==="A"&&a==="href")F.setAttribute("href",b),e=F.href,e!==""&&!e.match(h)&&(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===q?this.$$element.removeAttr(d):this.$$element.attr(d,b));g&&m(g[a],function(a){try{a(b)}catch(c){k(c)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var F=r[0].createElement("a"),ja=j.startSymbol(),da=j.endSymbol(),Hb=ja=="{{"||da=="}}"?na:function(a){return a.replace(/\{\{/g,ja).replace(/}}/g,da)};return x}]}function ca(b){return vb(b.replace(Ec,""))}function Fc(){var b={};this.register=function(a,c){M(a)?D(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(B(d)){var g=
d,d=b.hasOwnProperty(g)?b[g]:cb(e.$scope,g,!0)||cb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Gc(){this.$get=["$window",function(b){return w(b.document)}]}function Hc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ic(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",function(c){function d(d,f){for(var i,j,k=0,l=[],n=d.length,o=!1,p=[];k<n;)(i=d.indexOf(b,
k))!=-1&&(j=d.indexOf(a,i+e))!=-1?(k!=i&&l.push(d.substring(k,i)),l.push(k=c(o=d.substring(i+e,j))),k.exp=o,k=j+g,o=!0):(k!=n&&l.push(d.substring(k)),k=n);if(!(n=l.length))l.push(""),n=1;if(!f||o)return p.length=n,k=function(a){for(var b=0,c=n,d;b<c;b++){if(typeof(d=l[b])=="function")d=d(a),d==null||d==q?d="":typeof d!="string"&&(d=ba(d));p[b]=d}return p.join("")},k.exp=d,k.parts=l,k}var e=b.length,g=a.length;d.startSymbol=function(){return b};d.endSymbol=function(){return a};return d}]}function Ib(b){for(var b=
b.split("/"),a=b.length;a--;)b[a]=Za(b[a]);return b.join("/")}function wa(b,a){var c=Jb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Kb[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Kb[b]?"":":"+c)}function Jc(b,a,c){var d=wa(b);return decodeURIComponent(d.path)!=a||u(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}
function Kc(b,a,c){var d=wa(b);if(decodeURIComponent(d.path)==a&&!u(d.hash)&&d.hash.indexOf(c)===0)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function ib(b,a,c){a=a||"";this.$$parse=function(b){var c=wa(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+
a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Xa(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=sb(this.$$search),c=this.$$hash?"#"+Za(this.$$hash):"";this.$$url=Ib(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ha(b,a,c){var d;this.$$parse=function(b){var c=wa(b,
this);if(c.hash&&c.hash.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Lc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Xa(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=sb(this.$$search),c=this.$$hash?"#"+Za(this.$$hash):"";this.$$url=Ib(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,
this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Lb(b,a,c,d){Ha.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ia(b){return function(){return this[b]}}function Mb(b,a){return function(c){if(u(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Mc(){var b="",a=!1;this.hashPrefix=function(a){return v(a)?(b=a,this):
b};this.html5Mode=function(b){return v(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=wa(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",f=e.history?new ib(Jc(k,i,b),j,l):new Lb(Kc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ha(k,b,l));g.bind("click",
function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=w(a.target);y(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),P.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=f.absUrl();
f.$$parse(a);h(b)}),c.$$phase||c.$digest()))});var n=0;c.$watch(function(){var a=d.url(),b=f.$$replace;if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),h(a))});f.$$replace=!1;return n});return f}]}function Nc(){this.$get=["$window",function(b){function a(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+
a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||s;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),warn:c("warn"),info:c("info"),error:c("error")}}]}function Oc(b,a){function c(a){return a.indexOf(r)!=-1}function d(){return p+1<b.length?b.charAt(p+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=
a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||p;throw Error("Lexer Error: "+a+" at column"+(v(c)?"s "+c+"-"+p+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function j(){for(var a="",c=p;p<b.length;){var g=y(b.charAt(p));if(g=="."||e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}p++}a*=1;
n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=p,f,j,i,k;p<b.length;){k=b.charAt(p);if(k=="."||h(k)||e(k))k=="."&&(f=p),c+=k;else break;p++}if(f)for(j=p;j<b.length;){k=b.charAt(j);if(k=="("){i=c.substr(f-d+1);c=c.substr(0,f-d);p=j;break}if(g(k))j++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=d.json=Ja[c];else{var l=Nb(c,a);d.fn=D(function(a,b){return l(a,b)},{assign:function(a,b){return Ob(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),
n.push({index:f+1,text:i,json:!1}))}function l(a){var c=p;p++;for(var d="",e=a,f=!1;p<b.length;){var g=b.charAt(p);e+=g;if(f)g=="u"?(g=b.substring(p+1,p+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),p+=4,d+=String.fromCharCode(parseInt(g,16))):(f=Pc[g],d+=f?f:g),f=!1;else if(g=="\\")f=!0;else if(g==a){p++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;p++}i("Unterminated quote",c)}for(var n=[],o,p=0,z=[],r,x=":";p<b.length;){r=b.charAt(p);if(c("\"'"))l(r);
else if(e(r)||c(".")&&e(d()))j();else if(h(r)){if(k(),"{,".indexOf(x)!=-1&&z[0]=="{"&&(o=n[n.length-1]))o.json=o.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:p,text:r,json:":[,".indexOf(x)!=-1&&c("{[")||c("}]:,")}),c("{[")&&z.unshift(r),c("}]")&&z.shift(),p++;else if(g(r)){p++;continue}else{var m=r+d(),A=Ja[r],J=Ja[m];J?(n.push({index:p,text:m,fn:J}),p+=2):A?(n.push({index:p,text:r,fn:A,json:"[,:".indexOf(x)!=-1&&c("+-")}),p+=1):i("Unexpected next character ",p,p+1)}x=r}return n}function Qc(b,
a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(Q.length===0)throw Error("Unexpected end of expression: "+b);return Q[0]}function h(a,b,c,d){if(Q.length>0){var e=Q[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),Q.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+
a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(Q.length>0&&!h("}",")",";","]")&&a.push(v()),!f(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(t());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}
function o(){for(var a=p(),b;;)if(b=f("||"))a=k(a,b.fn,p());else return a}function p(){var a=z(),b;if(b=f("&&"))a=k(a,b.fn,p());return a}function z(){var a=r(),b;if(b=f("==","!="))a=k(a,b.fn,z());return a}function r(){var a;a=x();for(var b;b=f("+","-");)a=k(a,b.fn,x());if(b=f("<",">","<=",">="))a=k(a,b.fn,r());return a}function x(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?A():(a=f("-"))?k(C,a.fn,m()):(a=f("!"))?j(a.fn,m()):A()}function A(){var a;
if(f("("))a=v(),i(")");else if(f("["))a=J();else if(f("{"))a=K();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=w(a,c),c=null):b.text==="["?(c=a,a=R(a)):b.text==="."?(c=a,a=Y(a)):e("IMPOSSIBLE");return a}function J(){var a=[];if(g().text!="]"){do a.push(t());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function K(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=t();
a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d}}var C=I(0),u,Q=Oc(b,d),t=function(){var a=o(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=o(),function(b,d){return a.assign(b,c(b,d),d)}):a},w=function(a,b){var c=[];if(g().text!=")"){do c.push(t());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,
e));j=a(d,e,g)||s;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},Y=function(a){var b=f().text,c=Nb(b,d);return D(function(b,d,e){return c(e||a(b,d),d)},{assign:function(c,d,e){return Ob(a(c,e),b,d)}})},R=function(a){var b=t();i("]");return D(function(c,d){var e=a(c,d),f=b(c,d),g;if(!e)return q;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=q,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},v=function(){for(var a=t(),b;;)if(b=f("|"))a=k(a,
b.fn,n());else return a};a?(t=o,w=Y=R=v=function(){e("is not valid json",{text:b,index:0})},u=A()):u=l();Q.length!==0&&e("is an unexpected token",Q[0]);return u}function Ob(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function Pb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===q)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===
q)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!c||f===null||f===q)return f;if((f=f[c])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===q)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===q)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Nb(b,a){if(jb.hasOwnProperty(b))return jb[b];
var c=b.split("."),d=c.length,e;if(a)e=d<6?Pb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,g;do g=Pb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=q,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);
e.toString=function(){return g}}return jb[b]=e}function Rc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Qc(d,!1,a,c.csp);case "function":return d;default:return s}}}]}function Sc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Tc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=
f;f=q;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=function(d){try{j.resolve((b||c)(d))}catch(e){j.reject(e),a(e)}},p=function(b){try{j.resolve((g||d)(b))}catch(c){j.reject(c),a(c)}};f?f.push([h,p]):i.then(h,p);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,
g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),h(d)}},o=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,o)))},function(a){l||(l=!0,k.resolve(o(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},
function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}function Uc(){var b={};this.when=function(a,c){b[a]=D({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(a,b){for(var b="^"+b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"$",c="",d=[],e=
{},f=/:(\w+)/g,g,j=0;(g=f.exec(b))!==null;)c+=b.slice(j,g.index),c+="([^\\/]*)",d.push(g[1]),j=f.lastIndex;c+=b.substr(j);var h=a.match(RegExp(c));h&&m(d,function(a,b){e[a]=h[b+1]});return h?e:null}function j(){var b=k(),j=o.current;if(b&&j&&b.$$route===j.$$route&&ea(b.pathParams,j.pathParams)&&!b.reloadOnSearch&&!n)j.params=b.params,U(j.params,d),a.$broadcast("$routeUpdate",j);else if(b||j)n=!1,a.$broadcast("$routeChangeStart",b,j),(o.current=b)&&b.redirectTo&&(B(b.redirectTo)?c.path(l(b.redirectTo,
b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(B(b)?g.get(b):g.invoke(b))});if(!v(d=b.template))if(v(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});v(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c={};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==o.current){if(b)b.locals=c,U(b.params,
d);a.$broadcast("$routeChangeSuccess",b,j)}},function(c){b==o.current&&a.$broadcast("$routeChangeError",b,j,c)})}function k(){var a,d;m(b,function(b,e){if(!d&&(a=i(c.path(),e)))d=ya(b,{params:D({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function l(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var n=!1,o={routes:b,reload:function(){n=
!0;a.$evalAsync(j)}};a.$on("$locationChangeSuccess",j);return o}]}function Vc(){this.$get=I({})}function Wc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function g(a){if(i.$$phase)throw Error(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?
this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!H(b)){var i=h(b||s,"listener");g.fn=function(a,b,c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){Ua(e,g)}},$digest:function(){var a,d,e,h,o,p,m,r=b,x,q=[],A,J;g("$digest");do{m=!1;x=this;do{for(o=x.$$asyncQueue;o.length;)try{x.$eval(o.shift())}catch(K){c(K)}if(h=x.$$watchers)for(p=h.length;p--;)try{if((a=
h[p])&&(d=a.get(x))!==(e=a.last)&&!(a.eq?ea(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,x),r<5&&(A=4-r,q[A]||(q[A]=[]),J=H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,J+="; newVal: "+ba(d)+"; oldVal: "+ba(e),q[A].push(J))}catch(C){c(C)}if(!(h=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(h=x.$$nextSibling);)x=x.$parent}while(x=h);if(m&&!r--)throw i.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+
ba(q));}while(m||o.length);i.$$phase=null},$destroy:function(){if(!(i==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[za(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},
defaultPrevented:!1},i=[h].concat(ha.call(arguments,1)),m,q;do{e=f.$$listeners[a]||d;h.currentScope=f;m=0;for(q=e.length;m<q;m++)if(e[m])try{if(e[m].apply(null,i),g)return h}catch(A){c(A)}else e.splice(m,1),m--,q--;f=f.$parent}while(f);return h},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ha.call(arguments,1)),h,i;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];h=0;for(i=e.length;h<i;h++)if(e[h])try{e[h].apply(null,
g)}catch(m){c(m)}else e.splice(h,1),h--,i--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var i=new e;return i}]}function Xc(){this.$get=["$window",function(b){var a={},c=G((/android (\d+)/.exec(y(b.navigator.userAgent))||[])[1]);return{history:!(!b.history||!b.history.pushState||c<4),hashchange:"onhashchange"in b&&(!b.document.documentMode||b.document.documentMode>7),hasEvent:function(c){if(c=="input"&&V==9)return!1;if(u(a[c])){var e=
b.document.createElement("div");a[c]="on"+c in e}return a[c]},csp:!1}}]}function Yc(){this.$get=I(P)}function Qb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=y(S(b.substr(0,e)));d=S(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Rb(b){var a=M(b)?b:q;return function(c){a||(a=Qb(b));return c?a[y(c)]||null:a}}function Sb(b,a,c){if(H(c))return c(b,a);m(c,function(c){b=c(b,a)});return b}function Zc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,
d=this.defaults={transformResponse:[function(d){B(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=qb(d,!0)));return d}],transformRequest:[function(a){return M(a)&&ma.apply(a)!=="[object File]"?ba(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope",
"$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=D({},a,{data:Sb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=D({},a.headers),i=D({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},d.headers.common,d.headers[y(a.method)]),k,l,o,p;a:for(k in i){l=y(k);for(o in a.headers)if(y(o)===l)continue a;g[k]=i[k]}if(u(a.data))for(var q in g)if(y(q)==="content-type"){delete g[q];
break}e=Sb(a.data,Rb(g),e);p=n(a,e,g);p=p.then(c,c);m(z,function(a){p=a(p)});p.success=function(b){p.then(function(c){b(c.data,c.status,c.headers,a)});return p};p.error=function(b){p.then(null,function(c){b(c.data,c.status,c.headers,a)});return p};return p}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(q,[a,b,Qb(c)]):m.remove(q));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Rb(d),config:b})}function h(){var a=za(l.pendingRequests,
b);a!==-1&&l.pendingRequests.splice(a,1)}var k=j.defer(),n=k.promise,m,t,q=o(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=M(b.cache)?b.cache:p);if(m)if(t=m.get(q))if(t.then)return t.then(h,h),t;else E(t)?f(t[1],t[0],U(t[2])):f(t,200,{});else m.put(q,n);t||a(b.method,q,c,e,d,b.timeout,b.withCredentials);return n}function o(a,b){if(!b)return a;var c=[];hc(b,function(a,b){a==null||a==q||(M(a)&&(a=ba(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});
return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var p=c("$http"),z=[];m(e,function(a){z.push(B(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function $c(){this.$get=["$browser","$window","$document",function(b,a,c){return ad(b,
bd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function ad(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;V?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,i,j,k,l,n,o){function p(a,c,d,e){c=(i.match(Jb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(s)}b.$$incOutstandingRequestCount();
i=i||b.url();if(y(e)=="jsonp"){var q="_"+(d.counter++).toString(36);d[q]=function(a){d[q].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+q),function(){d[q].data?p(k,200,d[q].data):p(k,-2);delete d[q]})}else{var r=new a;r.open(e,i,!0);m(l,function(a,b){a&&r.setRequestHeader(b,a)});var x;r.onreadystatechange=function(){if(r.readyState==4){var a=r.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];a||(a="",m(b,function(b){var c=
r.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));p(k,x||r.status,r.responseText,a)}};if(o)r.withCredentials=!0;r.send(j||"");n>0&&c(function(){x=-1;r.abort()},n)}}}function cd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function dd(){this.$get=["$rootScope","$browser","$q",
"$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),k=j.promise,l=v(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}finally{delete g[k.$$timeoutId]}l||b.$apply()},f);k.$$timeoutId=f;g[f]=j;return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Tb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=
["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ub);a("date",Vb);a("filter",ed);a("json",fd);a("limitTo",gd);a("lowercase",hd);a("number",Wb);a("orderBy",Xb);a("uppercase",id)}function ed(){return function(b,a){if(!E(b))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>
-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(cb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=
[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&g.push(f)}return g}}function Ub(b){var a=b.NUMBER_FORMATS;return function(b,d){if(u(d))d=a.CURRENCY_SYM;return Yb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Yb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[],j=!1;if(h.indexOf("e")!==-1){var k=h.match(/([\d\.]+)e(-?)(\d+)/);
k&&k[2]=="-"&&k[3]>e+1?h="0":(f=h,j=!0)}if(j)e>0&&b>-1&&b<1&&(f=b.toFixed(e));else{h=(h.split(Zb)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Zb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&e!=="0"&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:
a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function kb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return kb(e,a,d)}}function Ka(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Vb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+
b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;B(c)&&(c=jd.test(c)?G(c):a(c));Ra(c)&&(c=new Date(c));if(!oa(c))return c;for(;e;)(i=kd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=ld[a];g+=f?f(c,
b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function fd(){return function(b){return ba(b,!0)}}function gd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof Array))return c;a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xb(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}if(!E(a))return a;if(!c)return a;
for(var c=E(c)?c:[c],c=Ta(c,function(a){var c=!1,d=a||na;if(B(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function W(b){H(b)&&(b={link:b});b.restrict=
b.restrict||"AC";return I(b)}function $b(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?La:Ma)+c).addClass((a?Ma:La)+c)}var d=this,e=b.parent().controller("form")||Na,g=0,h=d.$error={};d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Oa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,
a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(Ua(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(za(k,j)!=-1)return}else h[a]=k=[],g++,c(!1,a),e.$setValidity(a,!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Oa).addClass(ac);d.$dirty=!0;d.$pristine=!1;e.$setDirty()}}function X(b){return u(b)||b===""||b===null||b!==b}function Pa(b,a,c,d,e,g){var h=function(){var c=S(a.val());d.$viewValue!==
c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f,i=function(){f||(f=g.defer(function(){h();f=null}))};a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||i()});a.bind("change",h);e.hasEvent("paste")&&a.bind("paste cut",i)}d.$render=function(){a.val(X(d.$viewValue)?"":d.$viewValue)};var j=c.ngPattern,k=function(a,b){return X(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),q)};j&&(j.match(/^\/(.*)\/$/)?
(j=RegExp(j.substr(1,j.length-2)),e=function(a){return k(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+c);return k(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var l=G(c.ngMinlength),e=function(a){return!X(a)&&a.length<l?(d.$setValidity("minlength",!1),q):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var n=G(c.ngMaxlength),c=function(a){return!X(a)&&a.length>n?(d.$setValidity("maxlength",
!1),q):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function lb(b,a){b="ngClass"+b;return W(function(c,d,e){function g(b){if(a===!0||c.$index%2===a)i&&!ea(b,i)&&h(i),f(b);i=U(b)}function h(a){M(a)&&!E(a)&&(a=Ta(a,function(a,b){if(a)return b}));d.removeClass(E(a)?a.join(" "):a)}function f(a){M(a)&&!E(a)&&(a=Ta(a,function(a,b){if(a)return b}));a&&d.addClass(E(a)?a.join(" "):a)}var i=q;c.$watch(e[b],g,!0);e.$observe("class",function(){var a=c.$eval(e[b]);g(a,a)});b!==
"ngClass"&&c.$watch("$index",function(d,g){var i=d&1;i!==g&1&&(i===a?f(c.$eval(e[b])):h(c.$eval(e[b])))})})}var y=function(b){return B(b)?b.toLowerCase():b},la=function(b){return B(b)?b.toUpperCase():b},V=G((/msie (\d+)/.exec(y(navigator.userAgent))||[])[1]),w,aa,ha=[].slice,Qa=[].push,ma=Object.prototype.toString,$a=P.angular||(P.angular={}),ta,Ga,Z=["0","0","0"];s.$inject=[];na.$inject=[];var S=function(){return!String.prototype.trim?function(b){return B(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):
b}:function(b){return B(b)?b.trim():b}}();Ga=V<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var mc=/[A-Z]/g,md={full:"1.0.8",major:1,minor:0,dot:8,codeName:"bubble-burst"},Ba=L.cache={},Aa=L.expando="ng-"+(new Date).getTime(),qc=1,bc=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},gb=P.document.removeEventListener?
function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},oc=/([\:\-\_]+(.))/g,pc=/^moz([A-Z])/,va=L.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);L(P).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?w(this[b]):w(this[this.length+b])},length:0,push:Qa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),
function(b){Ea[y(b)]=b});var Db={};m("input,select,option,textarea,button,form".split(","),function(b){Db[la(b)]=!0});m({data:yb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:Bb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=vb(a);if(v(c))b.style[a]=c;else{var d;V<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];V<=8&&(d=d===""?q:d);return d}},attr:function(b,a,c){var d=
y(a);if(Ea[d])if(v(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||s).specified?d:q;else if(v(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?q:b},prop:function(b,a,c){if(v(c))b[a]=c;else return b[a]},text:D(V<9?function(b,a){if(b.nodeType==1){if(u(a))return b.innerText;b.innerText=a}else{if(u(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(u(a))return b.textContent;b.textContent=a},{$dv:""}),
val:function(b,a){if(u(a)){if(Ga(b)==="SELECT"&&b.multiple){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return c.length===0?null:c}return b.value}b.value=a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);b.innerHTML=a}},function(b,a){L.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==Bb?a:d)===q)if(M(a)){for(e=0;e<this.length;e++)if(b===yb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],
a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:wb,dealoc:sa,bind:function a(c,d,e){var g=$(c,"events"),h=$(c,"handle");g||$(c,"events",g={});h||$(c,"handle",h=rc(c,g));m(d.split(" "),function(d){var i=g[d];if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=a.nodeType===9?a.documentElement:a,e=c&&c.parentNode;return a===e||!(!e||!(e.nodeType===1&&(d.contains?d.contains(e):a.compareDocumentPosition&&
a.compareDocumentPosition(e)&16)))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;(!c||c!==this&&!j(this,c))&&h(a,d)})}else bc(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:xb,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===1&&c.push(a)});
return c},contents:function(a){return a.childNodes||[]},append:function(a,c){m(new L(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new L(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){var c=w(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},
addClass:Ab,removeClass:zb,toggleClass:function(a,c,d){u(d)&&(d=!Ca(a,c));(d?Ab:zb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:fb,triggerHandler:function(a,c){var d=($(a,"events")||{})[c];m(d,function(c){c.call(a,null)})}},function(a,c){L.prototype[c]=function(c,e){for(var g,
h=0;h<this.length;h++)g==q?(g=a(this[h],c,e),g!==q&&(g=w(g))):eb(g,a(this[h],c,e));return g==q?this:g}});Fa.prototype={put:function(a,c){this[fa(a)]=c},get:function(a){return this[fa(a)]},remove:function(a){var c=this[a=fa(a)];delete this[a];return c}};hb.prototype={push:function(a,c){var d=this[a=fa(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=fa(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()},peek:function(a){if(a=this[fa(a)])return a[0]}};var tc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,
uc=/,/,vc=/^\s*(_?)(\S+?)\1\s*$/,sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Gb="Non-assignable model expression: ";Fb.$inject=["$provide"];var Ec=/^(x[\:\-_]|data[\:\-_])/i,Jb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,cc=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Lc=cc,Kb={http:80,https:443,ftp:21};ib.prototype={$$replace:!1,absUrl:Ia("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=cc.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||
"");this.hash(d[5]||"",c);return this},protocol:Ia("$$protocol"),host:Ia("$$host"),port:Ia("$$port"),path:Mb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(u(a))return this.$$search;v(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=B(a)?Xa(a):a;this.$$compose();return this},hash:Mb("$$hash",na),replace:function(){this.$$replace=!0;return this}};Ha.prototype=ya(ib.prototype);Lb.prototype=ya(Ha.prototype);var Ja={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:s,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return v(d)?v(e)?d+e:d:v(e)?e:q},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(v(d)?d:0)-(v(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":s,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Pc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},jb={},bd=P.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
};Tb.$inject=["$provide"];Ub.$inject=["$locale"];Wb.$inject=["$locale"];var Zb=".",ld={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Ka("Month"),MMM:Ka("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),EEEE:Ka("Day"),EEE:Ka("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){var a=
-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=kb(Math[a>0?"floor":"ceil"](a/60),2)+kb(Math.abs(a%60),2);return c}},kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,jd=/^\d+$/;Vb.$inject=["$locale"];var hd=I(y),id=I(la);Xb.$inject=["$parse"];var nd=I({restrict:"E",compile:function(a,c){V<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(T.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),mb={};m(Ea,function(a,
c){var d=ca("ng-"+c);mb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=ca("ng-"+a);mb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),V&&e.prop(a,g[a]))})}}}});var Na={$addControl:s,$removeControl:s,$setValidity:s,$setDirty:s};$b.$inject=["$element","$attrs","$scope"];var Qa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",
controller:$b,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};bc(d[0],"submit",i);d.bind("$destroy",function(){c(function(){gb(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=q);D(f,Na)})}}}};return a?D(U(d),{restrict:"EAC"}):d}]},od=Qa(),pd=Qa(!0),qd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
rd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,sd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,dc={text:Pa,number:function(a,c,d,e,g,h){Pa(a,c,d,e,g,h);e.$parsers.push(function(a){var c=X(a);return c||sd.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),q)});e.$formatters.push(function(a){return X(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!X(a)&&a<f?(e.$setValidity("min",!1),q):(e.$setValidity("min",!0),a)};e.$parsers.push(a);
e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!X(a)&&a>i?(e.$setValidity("max",!1),q):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return X(a)||Ra(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),q)})},url:function(a,c,d,e,g,h){Pa(a,c,d,e,g,h);a=function(a){return X(a)||qd.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,
c,d,e,g,h){Pa(a,c,d,e,g,h);a=function(a){return X(a)||rd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){u(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;B(g)||(g=!0);B(h)||(h=!1);c.bind("click",
function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:s,button:s,submit:s,reset:s},ec=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(dc[y(g.type)]||dc.text)(d,e,g,h,c,a)}}}],Ma="ng-valid",La="ng-invalid",Oa="ng-pristine",ac="ng-dirty",td=["$scope","$exceptionHandler","$attrs","$element","$parse",
function(a,c,d,e,g){function h(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?La:Ma)+c).addClass((a?Ma:La)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),i=f.assign;if(!i)throw Error(Gb+d.ngModel+" ("+qa(e)+")");this.$render=s;var j=e.inheritedData("$formController")||Na,k=0,l=this.$error={};e.addClass(Oa);h(!0);this.$setValidity=function(a,
c){if(l[a]!==!c){if(c){if(l[a]&&k--,!k)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,k++;l[a]=!c;h(c,a);j.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(Oa).addClass(ac),j.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,i(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var n=this;a.$watch(function(){var c=
f(a);if(n.$modelValue!==c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);if(n.$viewValue!==c)n.$viewValue=c,n.$render()}})}],ud=function(){return{require:["ngModel","^?form"],controller:td,link:function(a,c,d,e){var g=e[0],h=e[1]||Na;h.$addControl(g);c.bind("$destroy",function(){h.$removeControl(g)})}}},vd=I({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),fc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=
!0;var g=function(a){if(d.required&&(X(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},wd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(S(a))});return c});e.$formatters.push(function(a){return E(a)?a.join(", "):
q})}}},xd=/^(true|false|\d+)$/,yd=function(){return{priority:100,compile:function(a,c){return xd.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},zd=W(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==q?"":a)})}),Ad=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",
function(a){d.text(a)})}}],Bd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Cd=lb("",!0),Dd=lb("Odd",0),Ed=lb("Even",1),Fd=W({compile:function(a,c){c.$set("ngCloak",q);a.removeClass("ng-cloak")}}),Gd=[function(){return{scope:!0,controller:"@"}}],Hd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],gc={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "),
function(a){var c=ca("ng-"+a);gc[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(y(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Id=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,o,p=function(){o&&(o.$destroy(),o=null);h.html("")};g.$watch(f,function(f){var m=++n;f?a.get(f,{cache:c}).success(function(a){m===
n&&(o&&o.$destroy(),o=g.$new(),h.html(a),e(h.contents())(o),v(j)&&(!j||g.$eval(j))&&d(),o.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){m===n&&p()}):p()})}}}}],Jd=W({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Kd=W({terminal:!0,priority:1E3}),Ld=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||0,k=e.$eval(i),l={},n=c.startSymbol(),o=c.endSymbol();m(k,function(a,e){l[e]=
c(a.replace(d,n+f+"-"+j+o))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(c in k||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],Md=W({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+
f+"'.");j=h[3]||h[1];k=h[2];var l=new hb;a.$watch(function(a){var e,f,h=a.$eval(i),m=c,q=new hb,u,A,w,v,C,s;if(E(h))C=h||[];else{C=[];for(w in h)h.hasOwnProperty(w)&&w.charAt(0)!="$"&&C.push(w);C.sort()}u=C.length-1;e=0;for(f=C.length;e<f;e++){w=h===C?e:C[e];v=h[w];if(s=l.shift(v)){A=s.scope;q.push(v,s);if(e!==s.index)s.index=e,m.after(s.element);m=s.element}else A=a.$new();A[j]=v;k&&(A[k]=w);A.$index=e;A.$first=e===0;A.$last=e===u;A.$middle=!(A.$first||A.$last);s||d(A,function(a){m.after(a);s={scope:A,
element:m=a,index:e};q.push(v,s)})}for(w in l)if(l.hasOwnProperty(w))for(C=l[w];C.length;)v=C.pop(),v.element.remove(),v.scope.$destroy();l=q})}}}),Nd=W(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Wa(a)?"":"none")})}),Od=W(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Wa(a)?"none":"")})}),Pd=W(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Qd=I({restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(a,c,d,e){var g,h,f;a.$watch(d.ngSwitch||d.on,function(i){h&&(f.$destroy(),h.remove(),h=f=null);if(g=e.cases["!"+i]||e.cases["?"])a.$eval(d.change),f=a.$new(),g(f,function(a){h=a;c.append(a)})})}}),Rd=W({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,g,h,f){f.cases["!"+c.ngSwitchWhen]=d}}}),Sd=W({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,h,f){f.cases["?"]=d}}}),Td=W({controller:["$transclude",
"$element",function(a,c){a(function(a){c.append(a)})}]}),Ud=["$http","$templateCache","$route","$anchorScroll","$compile","$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.children().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);
e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Wd=I({terminal:!0}),Xd=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:s};return{restrict:"E",
require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+fa(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};
c.$on("$destroy",function(){i.renderUnknownOption=s})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),a===""&&x.prop("selected",!0)):u(a)&&x?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.find("option"),function(c){c.selected=v(a.get(c.value))})};a.$watch(function(){ea(e,
d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function h(){var a={"":[]},c=[""],d,i,s,v,u;s=g.$modelValue;v=o(e)||[];var x=l?nb(v):v,C,y,z;y={};u=!1;var B,E;p&&(u=new Fa(s));for(z=0;C=x.length,z<C;z++){y[k]=v[l?y[l]=x[z]:z];d=m(e,y)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);p?d=u.remove(n(e,y))!=q:(d=s===n(e,y),u=u||d);B=j(e,y);B=B===q?"":B;i.push({id:l?
x[z]:z,label:B,selected:d})}p||(r||s===null?a[""].unshift({id:"",label:"",selected:!u}):u||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(x=c.length;y<x;y++){d=c[y];i=a[d];if(w.length<=y)s={element:A.clone().attr("label",d),label:i.label},v=[s],w.push(v),f.append(s.element);else if(v=w[y],s=v[0],s.label!=d)s.element.attr("label",s.label=d);B=null;z=0;for(C=i.length;z<C;z++)if(d=i[z],u=v[z+1]){B=u.element;if(u.label!==d.label)B.text(u.label=d.label);if(u.id!==d.id)B.val(u.id=d.id);if(B[0].selected!==
d.selected)B.prop("selected",u.selected=d.selected)}else d.id===""&&r?E=r:(E=D.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:E,label:d.label,id:d.id,selected:d.selected}),B?B.after(E):s.element.append(E),B=E;for(z++;v.length>z;)v.pop().element.remove()}for(;w.length>y;)w.pop()[0].element.remove()}var i;if(!(i=s.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+s+"'.");var j=c(i[2]||i[1]),k=i[4]||
i[6],l=i[5],m=c(i[3]||""),n=c(i[2]?i[1]:k),o=c(i[7]),w=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=o(e)||[],d={},h,i,j,m,r,s;if(p){i=[];m=0;for(s=w.length;m<s;m++){a=w[m];j=1;for(r=a.length;j<r;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=q:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=h;e.$watch(h)}if(i[1]){for(var n=
i[0],o=i[1],p=f.multiple,s=f.ngOptions,r=!1,x,D=w(T.createElement("option")),A=w(T.createElement("optgroup")),y=D.clone(),i=0,B=h.children(),C=B.length;i<C;i++)if(B[i].value==""){x=r=B.eq(i);break}n.init(o,r,y);if(p&&(f.required||f.ngRequired)){var E=function(a){o.$setValidity("required",!f.required||a&&a.length);return a};o.$parsers.push(E);o.$formatters.unshift(E);f.$observe("required",function(){E(o.$viewValue)})}s?l(e,h,o):p?k(e,h,o):j(e,h,o,n)}}}}],Yd=["$interpolate",function(a){var c={addOption:s,
removeOption:s};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Zd=I({restrict:"E",terminal:!0});(aa=P.jQuery)?(w=
aa,D(aa.fn,{scope:va.scope,controller:va.controller,injector:va.injector,inheritedData:va.inheritedData}),db("remove",!0,!0,!1),db("empty",!1,!1,!1),db("html",!1,!1,!0)):w=L;$a.element=w;(function(a){D(a,{bootstrap:tb,copy:U,extend:D,equals:ea,element:w,forEach:m,injector:ub,noop:s,bind:Va,toJson:ba,fromJson:qb,identity:na,isUndefined:u,isDefined:v,isString:B,isFunction:H,isObject:M,isNumber:Ra,isElement:ic,isArray:E,version:md,isDate:oa,lowercase:y,uppercase:la,callbacks:{counter:0}});ta=nc(P);try{ta("ngLocale")}catch(c){ta("ngLocale",
[]).provider("$locale",cd)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Fb).directive({a:nd,input:ec,textarea:ec,form:od,script:Vd,select:Xd,style:Zd,option:Yd,ngBind:zd,ngBindHtmlUnsafe:Bd,ngBindTemplate:Ad,ngClass:Cd,ngClassEven:Ed,ngClassOdd:Dd,ngCsp:Hd,ngCloak:Fd,ngController:Gd,ngForm:pd,ngHide:Od,ngInclude:Id,ngInit:Jd,ngNonBindable:Kd,ngPluralize:Ld,ngRepeat:Md,ngShow:Nd,ngStyle:Pd,ngSwitch:Qd,ngSwitchWhen:Rd,ngSwitchDefault:Sd,ngOptions:Wd,ngView:Ud,ngTransclude:Td,ngModel:ud,
ngList:wd,ngChange:vd,required:fc,ngRequired:fc,ngValue:yd}).directive(mb).directive(gc);a.provider({$anchorScroll:wc,$browser:zc,$cacheFactory:Ac,$controller:Fc,$document:Gc,$exceptionHandler:Hc,$filter:Tb,$interpolate:Ic,$http:Zc,$httpBackend:$c,$location:Mc,$log:Nc,$parse:Rc,$route:Uc,$routeParams:Vc,$rootScope:Wc,$q:Sc,$sniffer:Xc,$templateCache:Bc,$timeout:dd,$window:Yc})}])})($a);w(T).ready(function(){lc(T,tb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none !important;}ng\\:form{display:block;}</style>');
/**
 * AngularUI - The companion suite for AngularJS
 * @version v0.3.2 - 2012-12-04
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */



angular.module('ui.config', []).value('ui.config', {});
angular.module('ui.filters', ['ui.config']);
angular.module('ui.directives', ['ui.config']);
angular.module('ui', ['ui.filters', 'ui.directives', 'ui.config']);

/*
 jQuery UI Sortable plugin wrapper

 @param [ui-sortable] {object} Options to pass to $.fn.sortable() merged onto ui.config
*/

angular.module('ui.directives').directive('uiSortable', [
  'ui.config', function(uiConfig) {
    var options;
    options = {};
    if (uiConfig.sortable != null) {
      angular.extend(options, uiConfig.sortable);
    }
    return {
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        var onStart, onUpdate, opts, _start, _update;
        opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
        if (ngModel != null) {
          onStart = function(e, ui) {
            return ui.item.data('ui-sortable-start', ui.item.index());
          };
          onUpdate = function(e, ui) {
            var end, start;
            start = ui.item.data('ui-sortable-start');
            end = ui.item.index();
            ngModel.$modelValue.splice(end, 0, ngModel.$modelValue.splice(start, 1)[0]);
            return scope.$apply();
          };
          _start = opts.start;
          opts.start = function(e, ui) {
            onStart(e, ui);
            if (typeof _start === "function") {
              _start(e, ui);
            }
            return scope.$apply();
          };
          _update = opts.update;
          opts.update = function(e, ui) {
            onUpdate(e, ui);
            if (typeof _update === "function") {
              _update(e, ui);
            }
            return scope.$apply();
          };
        }
        return element.sortable(opts);
      }
    };
  }
]);

/**
 * General-purpose jQuery wrapper. Simply pass the plugin name as the expression.
 *
 * It is possible to specify a default set of parameters for each jQuery plugin.
 * Under the jq key, namespace each plugin by that which will be passed to ui-jq.
 * Unfortunately, at this time you can only pre-define the first parameter.
 * @example { jq : { datepicker : { showOn:'click' } } }
 *
 * @param ui-jq {string} The $elm.[pluginName]() to call.
 * @param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
 *     Multiple parameters can be separated by commas
 *    Set {ngChange:false} to disable passthrough support for change events ( since angular watches 'input' events, not 'change' events )
 *
 * @example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter">
 */
angular.module('ui.directives').directive('uiJq', ['ui.config', function (uiConfig) {
  return {
    restrict: 'A',
    compile: function (tElm, tAttrs) {
      if (!angular.isFunction(tElm[tAttrs.uiJq])) {
        throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
      }
      var options = uiConfig.jq && uiConfig.jq[tAttrs.uiJq];
      return function (scope, elm, attrs) {
        var linkOptions = [], ngChange = 'change';

        if (attrs.uiOptions) {
          linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
          if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
            linkOptions[0] = angular.extend(options, linkOptions[0]);
          }
        } else if (options) {
          linkOptions = [options];
        }
        if (attrs.ngModel && elm.is('select,input,textarea')) {
          if (linkOptions && angular.isObject(linkOptions[0]) && linkOptions[0].ngChange !== undefined) {
            ngChange = linkOptions[0].ngChange;
          }
          if (ngChange) {
            elm.on(ngChange, function () {
              elm.trigger('input');
            });
          }
        }
        elm[attrs.uiJq].apply(elm, linkOptions);
      };
    }
  };
}]);

/**
 * General-purpose Event binding. Bind any event not natively supported by Angular
 * Pass an object with keynames for events to ui-event
 * Allows $event object and $params object to be passed
 *
 * @example <input ui-event="{ focus : 'counter++', blur : 'someCallback()' }">
 * @example <input ui-event="{ myCustomEvent : 'myEventHandler($event, $params)'}">
 *
 * @param ui-event {string|object literal} The event to bind to as a string or a hash of events with their callbacks
 */
angular.module('ui.directives').directive('uiEvent', ['$parse',
  function ($parse) {
    return function (scope, elm, attrs) {
      var events = scope.$eval(attrs.uiEvent);
      angular.forEach(events, function (uiEvent, eventName) {
        var fn = $parse(uiEvent);
        elm.bind(eventName, function (evt) {
          var params = Array.prototype.slice.call(arguments);
          //Take out first paramater (event object);
          params = params.splice(1);
          scope.$apply(function () {
            fn(scope, {$event: evt, $params: params});
          });
        });
      });
    };
  }]);

/*
 Attaches jquery-ui input mask onto input element
 */
angular.module('ui.directives').directive('uiMask', [
  function () {
    return {
      require:'ngModel',
      link:function ($scope, element, attrs, controller) {

        /* We override the render method to run the jQuery mask plugin
         */
        controller.$render = function () {
          var value = controller.$viewValue || '';
          element.val(value);
          element.mask($scope.$eval(attrs.uiMask));
        };

        /* Add a parser that extracts the masked value into the model but only if the mask is valid
         */
        controller.$parsers.push(function (value) {
          //the second check (or) is only needed due to the fact that element.isMaskValid() will keep returning undefined
          //until there was at least one key event
          var isValid = element.isMaskValid() || angular.isUndefined(element.isMaskValid()) && element.val().length>0;
          controller.$setValidity('mask', isValid);
          return isValid ? value : undefined;
        });

        /* When keyup, update the view value
         */
        element.bind('keyup', function () {
          $scope.$apply(function () {
            controller.$setViewValue(element.mask());
          });
        });
      }
    };
  }
]);

angular.module('ui.directives')
.directive('uiModal', ['$timeout', function($timeout) {
  return {
    restrict: 'EAC',
    require: 'ngModel',
    link: function(scope, elm, attrs, model) {
      //helper so you don't have to type class="modal hide"
      elm.addClass('modal hide');
      elm.on( 'shown', function() {
        elm.find( "[autofocus]" ).focus();
      });
      scope.$watch(attrs.ngModel, function(value) {
        elm.modal(value && 'show' || 'hide');
      });
      //If bootstrap animations are enabled, listen to 'shown' and 'hidden' events
      elm.on(jQuery.support.transition && 'shown' || 'show', function() {
        $timeout(function() {
          model.$setViewValue(true);
        });
      });
      elm.on(jQuery.support.transition && 'hidden' || 'hide', function() {
        $timeout(function() {
          model.$setViewValue(false);
        });
      });
    }
  };
}]);
/**
 * Add a clear button to form inputs to reset their value
 */
angular.module('ui.directives').directive('uiReset', ['ui.config', function (uiConfig) {
  var resetValue = null;
  if (uiConfig.reset !== undefined)
      resetValue = uiConfig.reset;
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      var aElement;
      aElement = angular.element('<a class="ui-reset" />');
      elm.wrap('<span class="ui-resetwrap" />').after(aElement);
      aElement.bind('click', function (e) {
        e.preventDefault();
        scope.$apply(function () {
          if (attrs.uiReset)
            ctrl.$setViewValue(scope.$eval(attrs.uiReset));
          else
            ctrl.$setViewValue(resetValue);
          ctrl.$render();
        });
      });
    }
  };
}]);

(function () {
  var app = angular.module('ui.directives');

  //Setup map events from a google map object to trigger on a given element too,
  //then we just use ui-event to catch events from an element
  function bindMapEvents(scope, eventsStr, googleObject, element) {
    angular.forEach(eventsStr.split(' '), function (eventName) {
      //Prefix all googlemap events with 'map-', so eg 'click' 
      //for the googlemap doesn't interfere with a normal 'click' event
      var $event = { type: 'map-' + eventName };
      google.maps.event.addListener(googleObject, eventName, function (evt) {
        element.trigger(angular.extend({}, $event, evt));
        //We create an $apply if it isn't happening. we need better support for this
        //We don't want to use timeout because tons of these events fire at once,
        //and we only need one $apply
        if (!scope.$$phase) scope.$apply();
      });
    });
  }

  app.directive('uiMap',
    ['ui.config', '$parse', function (uiConfig, $parse) {

      var mapEvents = 'bounds_changed center_changed click dblclick drag dragend ' +
        'dragstart heading_changed idle maptypeid_changed mousemove mouseout ' +
        'mouseover projection_changed resize rightclick tilesloaded tilt_changed ' +
        'zoom_changed';
      var options = uiConfig.map || {};

      return {
        restrict: 'A',
        //doesn't work as E for unknown reason
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          var map = new google.maps.Map(elm[0], opts);
          var model = $parse(attrs.uiMap);

          //Set scope variable for the map
          model.assign(scope, map);

          bindMapEvents(scope, mapEvents, map, elm);
        }
      };
    }]);

  app.directive('uiMapInfoWindow',
    ['ui.config', '$parse', '$compile', function (uiConfig, $parse, $compile) {

      var infoWindowEvents = 'closeclick content_change domready ' +
        'position_changed zindex_changed';
      var options = uiConfig.mapInfoWindow || {};

      return {
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          opts.content = elm[0];
          var model = $parse(attrs.uiMapInfoWindow);
          var infoWindow = model(scope);

          if (!infoWindow) {
            infoWindow = new google.maps.InfoWindow(opts);
            model.assign(scope, infoWindow);
          }

          bindMapEvents(scope, infoWindowEvents, infoWindow, elm);

          /* The info window's contents dont' need to be on the dom anymore,
           google maps has them stored.  So we just replace the infowindow element
           with an empty div. (we don't just straight remove it from the dom because
           straight removing things from the dom can mess up angular) */
          elm.replaceWith('<div></div>');

          //Decorate infoWindow.open to $compile contents before opening
          var _open = infoWindow.open;
          infoWindow.open = function open(a1, a2, a3, a4, a5, a6) {
            $compile(elm.contents())(scope);
            _open.call(infoWindow, a1, a2, a3, a4, a5, a6);
          };
        }
      };
    }]);

  /* 
   * Map overlay directives all work the same. Take map marker for example
   * <ui-map-marker="myMarker"> will $watch 'myMarker' and each time it changes,
   * it will hook up myMarker's events to the directive dom element.  Then
   * ui-event will be able to catch all of myMarker's events. Super simple.
   */
  function mapOverlayDirective(directiveName, events) {
    app.directive(directiveName, [function () {
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          scope.$watch(attrs[directiveName], function (newObject) {
            bindMapEvents(scope, events, newObject, elm);
          });
        }
      };
    }]);
  }

  mapOverlayDirective('uiMapMarker',
    'animation_changed click clickable_changed cursor_changed ' +
      'dblclick drag dragend draggable_changed dragstart flat_changed icon_changed ' +
      'mousedown mouseout mouseover mouseup position_changed rightclick ' +
      'shadow_changed shape_changed title_changed visible_changed zindex_changed');

  mapOverlayDirective('uiMapPolyline',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapPolygon',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapRectangle',
    'bounds_changed click dblclick mousedown mousemove mouseout mouseover ' +
      'mouseup rightclick');

  mapOverlayDirective('uiMapCircle',
    'center_changed click dblclick mousedown mousemove ' +
      'mouseout mouseover mouseup radius_changed rightclick');

  mapOverlayDirective('uiMapGroundOverlay',
    'click dblclick');

})();
angular.module('ui.directives').factory('keypressHelper', ['$parse', function keypress($parse){
  var keysByCode = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete'
  };

  var capitaliseFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return function(mode, scope, elm, attrs) {
    var params, combinations = [];
    params = scope.$eval(attrs['ui'+capitaliseFirstLetter(mode)]);

    // Prepare combinations for simple checking
    angular.forEach(params, function (v, k) {
      var combination, expression;
      expression = $parse(v);

      angular.forEach(k.split(' '), function(variation) {
        combination = {
          expression: expression,
          keys: {}
        };
        angular.forEach(variation.split('-'), function (value) {
          combination.keys[value] = true;
        });
        combinations.push(combination);
      });
    });

    // Check only matching of pressed keys one of the conditions
    elm.bind(mode, function (event) {
      // No need to do that inside the cycle
      var altPressed = event.metaKey || event.altKey;
      var ctrlPressed = event.ctrlKey;
      var shiftPressed = event.shiftKey;
      var keyCode = event.keyCode;

      // normalize keycodes
      if (mode === 'keypress' && !shiftPressed && keyCode >= 97 && keyCode <= 122) {
        keyCode = keyCode - 32;
      }

      // Iterate over prepared combinations
      angular.forEach(combinations, function (combination) {

        var mainKeyPressed = (combination.keys[keysByCode[event.keyCode]] || combination.keys[event.keyCode.toString()]) || false;

        var altRequired = combination.keys.alt || false;
        var ctrlRequired = combination.keys.ctrl || false;
        var shiftRequired = combination.keys.shift || false;

        if (
          mainKeyPressed &&
          ( altRequired == altPressed ) &&
          ( ctrlRequired == ctrlPressed ) &&
          ( shiftRequired == shiftPressed )
        ) {
          // Run the function
          scope.$apply(function () {
            combination.expression(scope, { '$event': event });
          });
        }
      });
    });
  };
}]);

/**
 * Bind one or more handlers to particular keys or their combination
 * @param hash {mixed} keyBindings Can be an object or string where keybinding expression of keys or keys combinations and AngularJS Exspressions are set. Object syntax: "{ keys1: expression1 [, keys2: expression2 [ , ... ]]}". String syntax: ""expression1 on keys1 [ and expression2 on keys2 [ and ... ]]"". Expression is an AngularJS Expression, and key(s) are dash-separated combinations of keys and modifiers (one or many, if any. Order does not matter). Supported modifiers are 'ctrl', 'shift', 'alt' and key can be used either via its keyCode (13 for Return) or name. Named keys are 'backspace', 'tab', 'enter', 'esc', 'space', 'pageup', 'pagedown', 'end', 'home', 'left', 'up', 'right', 'down', 'insert', 'delete'.
 * @example <input ui-keypress="{enter:'x = 1', 'ctrl-shift-space':'foo()', 'shift-13':'bar()'}" /> <input ui-keypress="foo = 2 on ctrl-13 and bar('hello') on shift-esc" />
 **/
angular.module('ui.directives').directive('uiKeydown', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keydown', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.directives').directive('uiKeypress', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keypress', scope, elm, attrs);
    }
  };
}]);

angular.module('ui.directives').directive('uiKeyup', ['keypressHelper', function(keypressHelper){
  return {
    link: function (scope, elm, attrs) {
      keypressHelper('keyup', scope, elm, attrs);
    }
  };
}]);
/**
 * General-purpose validator for ngModel.
 * angular.js comes with several built-in validation mechanism for input fields (ngRequired, ngPattern etc.) but using
 * an arbitrary validation function requires creation of a custom formatters and / or parsers.
 * The ui-validate directive makes it easy to use any function(s) defined in scope as a validator function(s).
 * A validator function will trigger validation on both model and input changes.
 *
 * @example <input ui-validate="myValidatorFunction">
 * @example <input ui-validate="{foo : validateFoo, bar : validateBar}">
 *
 * @param ui-validate {string|object literal} If strings is passed it should be a scope's function to be used as a validator.
 * If an object literal is passed a key denotes a validation error key while a value should be a validator function.
 * In both cases validator function should take a value to validate as its argument and should return true/false indicating a validation result.
 */
angular.module('ui.directives').directive('uiValidate', function () {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {

      var validateFn, validateExpr = attrs.uiValidate;

      validateExpr = scope.$eval(validateExpr);
      if (!validateExpr) {
        return;
      }

      if (angular.isFunction(validateExpr)) {
        validateExpr = { validator: validateExpr };
      }

      angular.forEach(validateExpr, function (validatorFn, key) {
        validateFn = function (valueToValidate) {
          if (validatorFn(valueToValidate)) {
            ctrl.$setValidity(key, true);
            return valueToValidate;
          } else {
            ctrl.$setValidity(key, false);
            return undefined;
          }
        };
        ctrl.$formatters.push(validateFn);
        ctrl.$parsers.push(validateFn);
      });
    }
  };
});
/**
 * Animates the injection of new DOM elements by simply creating the DOM with a class and then immediately removing it
 * Animations must be done using CSS3 transitions, but provide excellent flexibility
 *
 * @todo Add proper support for animating out
 * @param [options] {mixed} Can be an object with multiple options, or a string with the animation class
 *    class {string} the CSS class(es) to use. For example, 'ui-hide' might be an excellent alternative class.
 * @example <li ng-repeat="item in items" ui-animate=" 'ui-hide' ">{{item}}</li>
 */
angular.module('ui.directives').directive('uiAnimate', ['ui.config', '$timeout', function (uiConfig, $timeout) {
  var options = {};
  if (angular.isString(uiConfig.animate)) {
    options['class'] = uiConfig.animate;
  } else if (uiConfig.animate) {
    options = uiConfig.animate;
  }
  return {
    restrict: 'A', // supports using directive as element, attribute and class
    link: function ($scope, element, attrs) {
      var opts = {};
      if (attrs.uiAnimate) {
        opts = $scope.$eval(attrs.uiAnimate);
        if (angular.isString(opts)) {
          opts = {'class': opts};
        }
      }
      opts = angular.extend({'class': 'ui-animate'}, options, opts);

      element.addClass(opts['class']);
      $timeout(function () {
        element.removeClass(opts['class']);
      }, 20, false);
    }
  };
}]);


/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.directives').directive('uiSelect2', ['ui.config', '$http', function (uiConfig, $http) {
  var options = {};
  if (uiConfig.select2) {
    angular.extend(options, uiConfig.select2);
  }
  return {
    require: '?ngModel',
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
		repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = (tAttrs.multiple !== undefined);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find('option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
		  repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$modelValue);
            } else {
              if (isMultiple && !controller.$modelValue) {
                elm.select2('data', []);
              } else {
                elm.select2('data', controller.$modelValue);
              }
            }
          };


          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (!newVal) return;
              // Delayed so that the options have time to be rendered
              setTimeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                elm.trigger('change');
              });
            });
          }

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function () {
              scope.$apply(function () {
                controller.$setViewValue(elm.select2('data'));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(element, function (value) {
                  controller.$setViewValue(value);
                  callback(value);
                });
              };
            }
          }
        }

        attrs.$observe('disabled', function (value) {
          elm.select2(value && 'disable' || 'enable');
        });

        scope.$watch(attrs.ngMultiple, function(newVal) {
          elm.select2(opts);
        });

        // Set initial value since Angular doesn't
        elm.val(scope.$eval(attrs.ngModel));

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        setTimeout(function () {
          elm.select2(opts);
        });
      };
    }
  };
}]);

/*global angular, CodeMirror, Error*/
/**
 * Binds a CodeMirror widget to a <textarea> element.
 */
angular.module('ui.directives').directive('uiCodemirror', ['ui.config', '$parse', function (uiConfig, $parse) {
  'use strict';

  uiConfig.codemirror = uiConfig.codemirror || {};
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ngModel) {
      // Only works on textareas
      if (!elm.is('textarea')) {
        throw new Error('ui-codemirror can only be applied to a textarea element');
      }

      var codemirror;
      // This is the method that we use to get the value of the ui-codemirror attribute expression.
      var uiCodemirrorGet = $parse(attrs.uiCodemirror);
      // This method will be called whenever the code mirror widget content changes
      var onChangeHandler = function (ed) {
        // We only update the model if the value has changed - this helps get around a little problem where $render triggers a change despite already being inside a $apply loop.
        var newValue = ed.getValue();
        if (newValue !== ngModel.$viewValue) {
          ngModel.$setViewValue(newValue);
          scope.$apply();
        }
      };
      // Create and wire up a new code mirror widget (unwiring a previous one if necessary)
      var updateCodeMirror = function (options) {
        // Merge together the options from the uiConfig and the attribute itself with the onChange event above.
        options = angular.extend({}, options, uiConfig.codemirror);

        // We actually want to run both handlers if the user has provided their own onChange handler.
        var userOnChange = options.onChange;
        if (userOnChange) {
          options.onChange = function (ed) {
            onChangeHandler(ed);
            userOnChange(ed);
          };
        } else {
          options.onChange = onChangeHandler;
        }

        // If there is a codemirror widget for this element already then we need to unwire if first
        if (codemirror) {
          codemirror.toTextArea();
        }
        // Create the new codemirror widget
        codemirror = CodeMirror.fromTextArea(elm[0], options);
      };

      // Initialize the code mirror widget
      updateCodeMirror(uiCodemirrorGet());

      // Now watch to see if the codemirror attribute gets updated
      scope.$watch(uiCodemirrorGet, updateCodeMirror, true);

      // CodeMirror expects a string, so make sure it gets one.
      // This does not change the model.
      ngModel.$formatters.push(function (value) {
        if (angular.isUndefined(value) || value === null) {
          return '';
        }
        else if (angular.isObject(value) || angular.isArray(value)) {
          throw new Error('ui-codemirror cannot use an object or an array as a model');
        }
        return value;
      });

      // Override the ngModelController $render method, which is what gets called when the model is updated.
      // This takes care of the synchronizing the codeMirror element with the underlying model, in the case that it is changed by something else.
      ngModel.$render = function () {
        codemirror.setValue(ngModel.$viewValue);
      };
    }
  };
}]);
/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.directives').directive('uiTinymce', ['ui.config', function (uiConfig) {
  uiConfig.tinymce = uiConfig.tinymce || {};
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ngModel) {
      var expression,
        options = {
          // Update model on button click
          onchange_callback: function (inst) {
            if (inst.isDirty()) {
              inst.save();
              ngModel.$setViewValue(elm.val());
              if (!scope.$$phase)
                scope.$apply();
            }
          },
          // Update model on keypress
          handle_event_callback: function (e) {
            if (this.isDirty()) {
              this.save();
              ngModel.$setViewValue(elm.val());
              if (!scope.$$phase)
                scope.$apply();
            }
            return true; // Continue handling
          },
          // Update model when calling setContent (such as from the source editor popup)
          setup: function (ed) {
            ed.onSetContent.add(function (ed, o) {
              if (ed.isDirty()) {
                ed.save();
                ngModel.$setViewValue(elm.val());
                if (!scope.$$phase)
                  scope.$apply();
              }
            });
          }
        };
      if (attrs.uiTinymce) {
        expression = scope.$eval(attrs.uiTinymce);
      } else {
        expression = {};
      }
      angular.extend(options, uiConfig.tinymce, expression);
      setTimeout(function () {
        elm.tinymce(options);
      });
    }
  };
}]);

/*
 * Defines the ui-if tag. This removes/adds an element from the dom depending on a condition
 * Originally created by @tigbro, for the @jquery-mobile-angular-adapter
 * https://github.com/tigbro/jquery-mobile-angular-adapter
 */
angular.module('ui.directives').directive('uiIf', [function () {
  return {
    transclude: 'element',
    priority: 1000,
    terminal: true,
    restrict: 'A',
    compile: function (element, attr, linker) {
      return function (scope, iterStartElement, attr) {
        iterStartElement[0].doNotMove = true;
        var expression = attr.uiIf;
        var lastElement;
        var lastScope;
        scope.$watch(expression, function (newValue) {
          if (lastElement) {
            lastElement.remove();
            lastElement = null;
          }
          if (lastScope) {
            lastScope.$destroy();
            lastScope = null;
          }
          if (newValue) {
            lastScope = scope.$new();
            linker(lastScope, function (clone) {
              lastElement = clone;
              iterStartElement.after(clone);
            });
          }
          // Note: need to be parent() as jquery cannot trigger events on comments
          // (angular creates a comment node when using transclusion, as ng-repeat does).
          iterStartElement.parent().trigger("$childrenChanged");
        });
      };
    }
  };
}]);
/*global angular, $, document*/
/**
 * Adds a 'ui-scrollfix' class to the element when the page scrolls past it's position.
 * @param [offset] {int} optional Y-offset to override the detected offset.
 *   Takes 300 (absolute) or -300 or +300 (relative to detected)
 */
angular.module('ui.directives').directive('uiScrollfix', ['$window', function ($window) {
  'use strict';
  return {
    link: function (scope, elm, attrs) {
      var top = elm.offset().top;
      if (!attrs.uiScrollfix) {
        attrs.uiScrollfix = top;
      } else {
        // chartAt is generally faster than indexOf: http://jsperf.com/indexof-vs-chartat
        if (attrs.uiScrollfix.charAt(0) === '-') {
          attrs.uiScrollfix = top - attrs.uiScrollfix.substr(1);
        } else if (attrs.uiScrollfix.charAt(0) === '+') {
          attrs.uiScrollfix = top + parseFloat(attrs.uiScrollfix.substr(1));
        }
      }
      angular.element($window).on('scroll.ui-scrollfix', function () {
        // if pageYOffset is defined use it, otherwise use other crap for IE
        var offset;
        if (angular.isDefined($window.pageYOffset)) {
          offset = $window.pageYOffset;
        } else {
          var iebody = (document.compatMode && document.compatMode !== "BackCompat") ? document.documentElement : document.body;
          offset = iebody.scrollTop;
        }
        if (!elm.hasClass('ui-scrollfix') && offset > attrs.uiScrollfix) {
          elm.addClass('ui-scrollfix');
        } else if (elm.hasClass('ui-scrollfix') && offset < attrs.uiScrollfix) {
          elm.removeClass('ui-scrollfix');
        }
      });
    }
  };
}]);

/*
*  AngularJs Fullcalendar Wrapper for the JQuery FullCalendar
*  inspired by http://arshaw.com/fullcalendar/ 
*  
*  Basic Angular Calendar Directive that takes in live events as the ng-model and watches that event array for changes, to update the view accordingly. 
*  Can also take in an event url as a source object(s) and feed the events per view. 
*
*/

angular.module('ui.directives').directive('uiCalendar',['ui.config', '$parse', function (uiConfig,$parse) {
    uiConfig.uiCalendar = uiConfig.uiCalendar || {};       
    //returns the fullcalendar     
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
          events: "=ngModel"
        },
        link: function(scope, elm, $attrs) {
            var ngModel = $parse($attrs.ngModel);
            //update method that is called on load and whenever the events array is changed. 
            function update() {
              //Default View Options
              var expression,
                options = {
                  header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay'
                },
              // add event name to title attribute on mouseover. 
              eventMouseover: function(event, jsEvent, view) {
              if (view.name !== 'agendaDay') {
                $(jsEvent.target).attr('title', event.title);
               }
              },
          
              // Calling the events from the scope through the ng-model binding attribute. 
              events: scope.events
              };          
              //if attrs have been entered to the directive, then create a relative expression. 
              if ($attrs.uiCalendar){
                 expression = scope.$eval($attrs.uiCalendar);
              }
              else{
                expression = {};
              } 
              //extend the options to suite the custom directive.
              angular.extend(options, uiConfig.uiCalendar, expression);
              //call fullCalendar from an empty html tag, to keep angular happy.
              elm.html('').fullCalendar(options);
            }
            //on load update call.
            update();
            //watching the length of the array to create a more efficient update process. 
            scope.$watch( 'events.length', function( newVal, oldVal )
            {
              //update the calendar on every change to events.length
              update();
            }, true );
        }
    };
}]);
/**
 * uiShow Directive
 *
 * Adds a 'ui-show' class to the element instead of display:block
 * Created to allow tighter control  of CSS without bulkier directives
 *
 * @param expression {boolean} evaluated expression to determine if the class should be added
 */
angular.module('ui.directives').directive('uiShow', [function () {
  return function (scope, elm, attrs) {
    scope.$watch(attrs.uiShow, function (newVal, oldVal) {
      if (newVal) {
        elm.addClass('ui-show');
      } else {
        elm.removeClass('ui-show');
      }
    });
  };
}])

/**
 * uiHide Directive
 *
 * Adds a 'ui-hide' class to the element instead of display:block
 * Created to allow tighter control  of CSS without bulkier directives
 *
 * @param expression {boolean} evaluated expression to determine if the class should be added
 */
  .directive('uiHide', [function () {
  return function (scope, elm, attrs) {
    scope.$watch(attrs.uiHide, function (newVal, oldVal) {
      if (newVal) {
        elm.addClass('ui-hide');
      } else {
        elm.removeClass('ui-hide');
      }
    });
  };
}])

/**
 * uiToggle Directive
 *
 * Adds a class 'ui-show' if true, and a 'ui-hide' if false to the element instead of display:block/display:none
 * Created to allow tighter control  of CSS without bulkier directives. This also allows you to override the
 * default visibility of the element using either class.
 *
 * @param expression {boolean} evaluated expression to determine if the class should be added
 */
  .directive('uiToggle', [function () {
  return function (scope, elm, attrs) {
    scope.$watch(attrs.uiToggle, function (newVal, oldVal) {
      if (newVal) {
        elm.removeClass('ui-hide').addClass('ui-show');
      } else {
        elm.removeClass('ui-show').addClass('ui-hide');
      }
    });
  };
}]);

/*
 Gives the ability to style currency based on its sign.
 */
angular.module('ui.directives').directive('uiCurrency', ['ui.config', 'currencyFilter' , function (uiConfig, currencyFilter) {
  var options = {
    pos: 'ui-currency-pos',
    neg: 'ui-currency-neg',
    zero: 'ui-currency-zero'
  };
  if (uiConfig.currency) {
    angular.extend(options, uiConfig.currency);
  }
  return {
    restrict: 'EAC',
    require: 'ngModel',
    link: function (scope, element, attrs, controller) {
      var opts, // instance-specific options
        renderview,
        value;

      opts = angular.extend({}, options, scope.$eval(attrs.uiCurrency));

      renderview = function (viewvalue) {
        var num;
        num = viewvalue * 1;
        if (num > 0) {
          element.addClass(opts.pos);
        } else {
          element.removeClass(opts.pos);
        }
        if (num < 0) {
          element.addClass(opts.neg);
        } else {
          element.removeClass(opts.neg);
        }
        if (num === 0) {
          element.addClass(opts.zero);
        } else {
          element.removeClass(opts.zero);
        }
        if (viewvalue === '') {
          element.text('');
        } else {
          element.text(currencyFilter(num, opts.symbol));
        }
        return true;
      };

      controller.$render = function () {
        value = controller.$viewValue;
        element.val(value);
        renderview(value);
      };

    }
  };
}]);

/*global angular */
/*
 jQuery UI Datepicker plugin wrapper

 @param [ui-date] {object} Options to pass to $.fn.datepicker() merged onto ui.config
 */

angular.module('ui.directives')

.directive('uiDate', ['ui.config', function (uiConfig) {
  'use strict';
  var options;
  options = {};
  if (angular.isObject(uiConfig.date)) {
    angular.extend(options, uiConfig.date);
  }
  return {
    require:'?ngModel',
    link:function (scope, element, attrs, controller) {
      var getOptions = function () {
        return angular.extend({}, uiConfig.date, scope.$eval(attrs.uiDate));
      };
      var initDateWidget = function () {
        var opts = getOptions();

        // If we have a controller (i.e. ngModelController) then wire it up
        if (controller) {
          var updateModel = function () {
            scope.$apply(function () {
              var date = element.datepicker("getDate");
              element.datepicker("setDate", element.val());
              controller.$setViewValue(date);
            });
          };
          if (opts.onSelect) {
            // Caller has specified onSelect, so call this as well as updating the model
            var userHandler = opts.onSelect;
            opts.onSelect = function (value, picker) {
              updateModel();
              return userHandler(value, picker);
            };
          } else {
            // No onSelect already specified so just update the model
            opts.onSelect = updateModel;
          }
          // In case the user changes the text directly in the input box
          element.bind('change', updateModel);

          // Update the date picker when the model changes
          controller.$render = function () {
            var date = controller.$viewValue;
            if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
              throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + ' - use ui-date-format to convert it from a string');
            }
            element.datepicker("setDate", date);
          };
        }
        // If we don't destroy the old one it doesn't update properly when the config changes
        element.datepicker('destroy');
        // Create the new datepicker widget
        element.datepicker(opts);
        // Force a render to override whatever is in the input text box
        controller.$render();
      };
      // Watch for changes to the directives options
      scope.$watch(getOptions, initDateWidget, true);
    }
  };
}
])

.directive('uiDateFormat', [function() {
  var directive = {
    require:'ngModel',
    link: function(scope, element, attrs, modelCtrl) {
      if ( attrs.uiDateFormat === '' ) {
        // Default to ISO formatting
        modelCtrl.$formatters.push(function(value) {
          if (angular.isString(value) ) {
            return new Date(value);
          }
        });
        modelCtrl.$parsers.push(function(value){
          if (value) {
            return value.toISOString();
          }
        });
      } else {
        var format = attrs.uiDateFormat;
        // Use the datepicker with the attribute value as the format string to convert to and from a string
        modelCtrl.$formatters.push(function(value) {
          if (angular.isString(value) ) {
            return $.datepicker.parseDate(format, value);
          }
        });
        modelCtrl.$parsers.push(function(value){
          if (value) {
            return $.datepicker.formatDate(format, value);
          }
        });
      }
    }
  };
  return directive;
}]);

/**
 * Wraps the
 * @param text {string} haystack to search through
 * @param search {string} needle to search for
 * @param [caseSensitive] {boolean} optional boolean to use case-sensitive searching
 */
angular.module('ui.filters').filter('highlight', function () {
  return function (text, search, caseSensitive) {
    if (search || angular.isNumber(search)) {
      text = text.toString();
      search = search.toString();
      if (caseSensitive) {
        return text.split(search).join('<span class="ui-match">' + search + '</span>');
      } else {
        return text.replace(new RegExp(search, 'gi'), '<span class="ui-match">$&</span>');
      }
    } else {
      return text;
    }
  };
});


/**
 * A replacement utility for internationalization very similar to sprintf.
 *
 * @param replace {mixed} The tokens to replace depends on type
 *  string: all instances of $0 will be replaced
 *  array: each instance of $0, $1, $2 etc. will be placed with each array item in corresponding order
 *  object: all attributes will be iterated through, with :key being replaced with its corresponding value
 * @return string
 *
 * @example: 'Hello :name, how are you :day'.format({ name:'John', day:'Today' })
 * @example: 'Records $0 to $1 out of $2 total'.format(['10', '20', '3000'])
 * @example: '$0 agrees to all mentions $0 makes in the event that $0 hits a tree while $0 is driving drunk'.format('Bob')
 */
angular.module('ui.filters').filter('format', function(){
  return function(value, replace) {
    if (!value) {
      return value;
    }
    var target = value.toString(), token;
    if (replace === undefined) {
      return target;
    }
    if (!angular.isArray(replace) && !angular.isObject(replace)) {
      return target.split('$0').join(replace);
    }
    token = angular.isArray(replace) && '$' || ':';

    angular.forEach(replace, function(value, key){
      target = target.split(token+key).join(value);
    });
    return target;
  };
});

/**
 * Filters out all duplicate items from an array by checking the specified key
 * @param [key] {string} the name of the attribute of each object to compare for uniqueness
 if the key is empty, the entire object will be compared
 if the key === false then no filtering will be performed
 * @return {array}
 */
angular.module('ui.filters').filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});

/**
 * Converts variable-esque naming conventions to something presentational, capitalized words separated by space.
 * @param {String} value The value to be parsed and prettified.
 * @param {String} [inflector] The inflector to use. Default: humanize.
 * @return {String}
 * @example {{ 'Here Is my_phoneNumber' | inflector:'humanize' }} => Here Is My Phone Number
 *          {{ 'Here Is my_phoneNumber' | inflector:'underscore' }} => here_is_my_phone_number
 *          {{ 'Here Is my_phoneNumber' | inflector:'variable' }} => hereIsMyPhoneNumber
 */
angular.module('ui.filters').filter('inflector', function () {
  function ucwords(text) {
    return text.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  function breakup(text, separator) {
    return text.replace(/[A-Z]/g, function (match) {
      return separator + match;
    });
  }

  var inflectors = {
    humanize: function (value) {
      return ucwords(breakup(value, ' ').split('_').join(' '));
    },
    underscore: function (value) {
      return value.substr(0, 1).toLowerCase() + breakup(value.substr(1), '_').toLowerCase().split(' ').join('_');
    },
    variable: function (value) {
      value = value.substr(0, 1).toLowerCase() + ucwords(value.split('_').join(' ')).substr(1).split(' ').join('');
      return value;
    }
  };

  return function (text, inflector, separator) {
    if (inflector !== false && angular.isString(text)) {
      inflector = inflector || 'humanize';
      return inflectors[inflector](text);
    } else {
      return text;
    }
  };
});
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




