const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CHnIfKhZ.js","assets/Result-7CZcr9nm.js","assets/Button-DmFLDU2x.js","assets/index-D0axb8ze.css","assets/markdown-DvlbxgF9.js","assets/markdown-Dxa7j5BG.css","assets/index-DK7M3Jp_.js","assets/Links-BkgOfXay.js","assets/Links-B6YxczeT.css","assets/index-0oWmLAIE.css","assets/index-CY-pD0zd.js","assets/index-BYIflSUt.css","assets/index-B4tDWDG_.js","assets/index-CtkkO6vF.css","assets/index-C5pHbNsi.js","assets/index-Dp3mmBND.css","assets/index-DaDw9yv6.js","assets/index-B0csvvbc.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hl(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Re={},Wr=[],dt=()=>{},Wd=()=>!1,iu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),uu=e=>e.startsWith("onUpdate:"),Je=Object.assign,pl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},h1=Object.prototype.hasOwnProperty,De=(e,n)=>h1.call(e,n),ge=Array.isArray,Vr=e=>ri(e)==="[object Map]",Vd=e=>ri(e)==="[object Set]",ha=e=>ri(e)==="[object Date]",xe=e=>typeof e=="function",je=e=>typeof e=="string",Bn=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",qd=e=>(Ae(e)||xe(e))&&xe(e.then)&&xe(e.catch),Gd=Object.prototype.toString,ri=e=>Gd.call(e),p1=e=>ri(e).slice(8,-1),Zd=e=>ri(e)==="[object Object]",su=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,So=hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lu=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},g1=/-\w/g,wn=lu(e=>e.replace(g1,n=>n.slice(1).toUpperCase())),b1=/\B([A-Z])/g,Ir=lu(e=>e.replace(b1,"-$1").toLowerCase()),au=lu(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mu=lu(e=>e?`on${au(e)}`:""),lt=(e,n)=>!Object.is(e,n),Nu=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Xd=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},m1=e=>{const n=parseFloat(e);return isNaN(n)?e:n},v1=e=>{const n=je(e)?Number(e):NaN;return isNaN(n)?e:n};let pa;const cu=()=>pa||(pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oi(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=je(r)?_1(r):oi(r);if(o)for(const i in o)n[i]=o[i]}return n}else if(je(e)||Ae(e))return e}const x1=/;(?![^(]*\))/g,y1=/:([^]+)/,C1=/\/\*[^]*?\*\//g;function _1(e){const n={};return e.replace(C1,"").split(x1).forEach(t=>{if(t){const r=t.split(y1);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function du(e){let n="";if(je(e))n=e;else if(ge(e))for(let t=0;t<e.length;t++){const r=du(e[t]);r&&(n+=r+" ")}else if(Ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const w1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k1=hl(w1);function Yd(e){return!!e||e===""}function S1(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=gl(e[r],n[r]);return t}function gl(e,n){if(e===n)return!0;let t=ha(e),r=ha(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Bn(e),r=Bn(n),t||r)return e===n;if(t=ge(e),r=ge(n),t||r)return t&&r?S1(e,n):!1;if(t=Ae(e),r=Ae(n),t||r){if(!t||!r)return!1;const o=Object.keys(e).length,i=Object.keys(n).length;if(o!==i)return!1;for(const u in e){const s=e.hasOwnProperty(u),l=n.hasOwnProperty(u);if(s&&!l||!s&&l||!gl(e[u],n[u]))return!1}}return String(e)===String(n)}const Jd=e=>!!(e&&e.__v_isRef===!0),E1=e=>je(e)?e:e==null?"":ge(e)||Ae(e)&&(e.toString===Gd||!xe(e.toString))?Jd(e)?E1(e.value):JSON.stringify(e,Qd,2):String(e),Qd=(e,n)=>Jd(n)?Qd(e,n.value):Vr(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o],i)=>(t[Lu(r,i)+" =>"]=o,t),{})}:Vd(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Lu(t))}:Bn(n)?Lu(n):Ae(n)&&!ge(n)&&!Zd(n)?String(n):n,Lu=(e,n="")=>{var t;return Bn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class ef{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&rn&&(rn.active?(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const o=this.scopes.slice();for(n=0,t=o.length;n<t;n++)o[n].resume()}const r=this.effects.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}}run(n){if(this._active){const t=rn;try{return rn=this,n()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){if(this._on>0&&--this._on===0){if(rn===this)rn=this.prevScope;else{let n=rn;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(t=0,r=o.length;t<r;t++)o[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function nf(e){return new ef(e)}function tf(){return rn}function A1(e,n=!1){rn&&rn.cleanups.push(e)}let Oe;const ju=new WeakSet;class rf{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&(rn.active?rn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ju.has(this)&&(ju.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ga(this),sf(this);const n=Oe,t=Yn;Oe=this,Yn=!0;try{return this.fn()}finally{lf(this),Oe=n,Yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)vl(n);this.deps=this.depsTail=void 0,ga(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ju.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Es(this)&&this.run()}get dirty(){return Es(this)}}let of=0,Eo,Ao;function uf(e,n=!1){if(e.flags|=8,n){e.next=Ao,Ao=e;return}e.next=Eo,Eo=e}function bl(){of++}function ml(){if(--of>0)return;if(Ao){let n=Ao;for(Ao=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Eo;){let n=Eo;for(Eo=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function sf(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function lf(e){let n,t=e.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),vl(r),T1(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=n,e.depsTail=t}function Es(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(af(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function af(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Oo)||(e.globalVersion=Oo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Es(e))))return;e.flags|=2;const n=e.dep,t=Oe,r=Yn;Oe=e,Yn=!0;try{sf(e);const o=e.fn(e._value);(n.version===0||lt(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{Oe=t,Yn=r,lf(e),e.flags&=-3}}function vl(e,n=!1){const{dep:t,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)vl(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function T1(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Yn=!0;const cf=[];function Ft(){cf.push(Yn),Yn=!1}function It(){const e=cf.pop();Yn=e===void 0?!0:e}function ga(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Oe;Oe=void 0;try{n()}finally{Oe=t}}}let Oo=0;class D1{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xl{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Oe||!Yn||Oe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Oe)t=this.activeLink=new D1(Oe,this),Oe.deps?(t.prevDep=Oe.depsTail,Oe.depsTail.nextDep=t,Oe.depsTail=t):Oe.deps=Oe.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Oe.depsTail,t.nextDep=void 0,Oe.depsTail.nextDep=t,Oe.depsTail=t,Oe.deps===t&&(Oe.deps=r)}return t}trigger(n){this.version++,Oo++,this.notify(n)}notify(n){bl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ml()}}}function df(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)df(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Oi=new WeakMap,yr=Symbol(""),As=Symbol(""),Bo=Symbol("");function pn(e,n,t){if(Yn&&Oe){let r=Oi.get(e);r||Oi.set(e,r=new Map);let o=r.get(t);o||(r.set(t,o=new xl),o.map=r,o.key=t),o.track()}}function Et(e,n,t,r,o,i){const u=Oi.get(e);if(!u){Oo++;return}const s=l=>{l&&l.trigger()};if(bl(),n==="clear")u.forEach(s);else{const l=ge(e),a=l&&su(t);if(l&&t==="length"){const c=Number(r);u.forEach((d,f)=>{(f==="length"||f===Bo||!Bn(f)&&f>=c)&&s(d)})}else switch((t!==void 0||u.has(void 0))&&s(u.get(t)),a&&s(u.get(Bo)),n){case"add":l?a&&s(u.get("length")):(s(u.get(yr)),Vr(e)&&s(u.get(As)));break;case"delete":l||(s(u.get(yr)),Vr(e)&&s(u.get(As)));break;case"set":Vr(e)&&s(u.get(yr));break}}ml()}function z1(e,n){const t=Oi.get(e);return t&&t.get(n)}function Mr(e){const n=Se(e);return n===e?n:(pn(n,"iterate",Bo),On(e)?n:n.map(Jn))}function fu(e){return pn(e=Se(e),"iterate",Bo),e}function ut(e,n){return Pt(e)?Jr(Dt(e)?Jn(n):n):Jn(n)}const F1={__proto__:null,[Symbol.iterator](){return Hu(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return Mr(this).concat(...e.map(n=>ge(n)?Mr(n):n))},entries(){return Hu(this,"entries",e=>(e[1]=ut(this,e[1]),e))},every(e,n){return yt(this,"every",e,n,void 0,arguments)},filter(e,n){return yt(this,"filter",e,n,t=>t.map(r=>ut(this,r)),arguments)},find(e,n){return yt(this,"find",e,n,t=>ut(this,t),arguments)},findIndex(e,n){return yt(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return yt(this,"findLast",e,n,t=>ut(this,t),arguments)},findLastIndex(e,n){return yt(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return yt(this,"forEach",e,n,void 0,arguments)},includes(...e){return Uu(this,"includes",e)},indexOf(...e){return Uu(this,"indexOf",e)},join(e){return Mr(this).join(e)},lastIndexOf(...e){return Uu(this,"lastIndexOf",e)},map(e,n){return yt(this,"map",e,n,void 0,arguments)},pop(){return fo(this,"pop")},push(...e){return fo(this,"push",e)},reduce(e,...n){return ba(this,"reduce",e,n)},reduceRight(e,...n){return ba(this,"reduceRight",e,n)},shift(){return fo(this,"shift")},some(e,n){return yt(this,"some",e,n,void 0,arguments)},splice(...e){return fo(this,"splice",e)},toReversed(){return Mr(this).toReversed()},toSorted(e){return Mr(this).toSorted(e)},toSpliced(...e){return Mr(this).toSpliced(...e)},unshift(...e){return fo(this,"unshift",e)},values(){return Hu(this,"values",e=>ut(this,e))}};function Hu(e,n,t){const r=fu(e),o=r[n]();return r!==e&&!On(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=t(i.value)),i}),o}const I1=Array.prototype;function yt(e,n,t,r,o,i){const u=fu(e),s=u!==e&&!On(e),l=u[n];if(l!==I1[n]){const d=l.apply(e,i);return s?Jn(d):d}let a=t;u!==e&&(s?a=function(d,f){return t.call(this,ut(e,d),f,e)}:t.length>2&&(a=function(d,f){return t.call(this,d,f,e)}));const c=l.call(u,a,r);return s&&o?o(c):c}function ba(e,n,t,r){const o=fu(e),i=o!==e&&!On(e);let u=t,s=!1;o!==e&&(i?(s=r.length===0,u=function(a,c,d){return s&&(s=!1,a=ut(e,a)),t.call(this,a,ut(e,c),d,e)}):t.length>3&&(u=function(a,c,d){return t.call(this,a,c,d,e)}));const l=o[n](u,...r);return s?ut(e,l):l}function Uu(e,n,t){const r=Se(e);pn(r,"iterate",Bo);const o=r[n](...t);return(o===-1||o===!1)&&hu(t[0])?(t[0]=Se(t[0]),r[n](...t)):o}function fo(e,n,t=[]){Ft(),bl();const r=Se(e)[n].apply(e,t);return ml(),It(),r}const P1=hl("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bn));function R1(e){Bn(e)||(e=String(e));const n=Se(this);return pn(n,"has",e),n.hasOwnProperty(e)}class hf{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?K1:mf:i?bf:gf).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const u=ge(n);if(!o){let l;if(u&&(l=F1[t]))return l;if(t==="hasOwnProperty")return R1}const s=Reflect.get(n,t,Ze(n)?n:r);if((Bn(t)?ff.has(t):P1(t))||(o||pn(n,"get",t),i))return s;if(Ze(s)){const l=u&&su(t)?s:s.value;return o&&Ae(l)?Er(l):l}return Ae(s)?o?Er(s):uo(s):s}}class pf extends hf{constructor(n=!1){super(!1,n)}set(n,t,r,o){let i=n[t];const u=ge(n)&&su(t);if(!this._isShallow){const a=Pt(i);if(!On(r)&&!Pt(r)&&(i=Se(i),r=Se(r)),!u&&Ze(i)&&!Ze(r))return a||(i.value=r),!0}const s=u?Number(t)<n.length:De(n,t),l=Reflect.set(n,t,r,Ze(n)?n:o);return n===Se(o)&&l&&(s?lt(r,i)&&Et(n,"set",t,r):Et(n,"add",t,r)),l}deleteProperty(n,t){const r=De(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&r&&Et(n,"delete",t,void 0),o}has(n,t){const r=Reflect.has(n,t);return(!Bn(t)||!ff.has(t))&&pn(n,"has",t),r}ownKeys(n){return pn(n,"iterate",ge(n)?"length":yr),Reflect.ownKeys(n)}}class $1 extends hf{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const O1=new pf,B1=new $1,M1=new pf(!0);const Ts=e=>e,mi=e=>Reflect.getPrototypeOf(e);function N1(e,n,t){return function(...r){const o=this.__v_raw,i=Se(o),u=Vr(i),s=e==="entries"||e===Symbol.iterator&&u,l=e==="keys"&&u,a=o[e](...r),c=t?Ts:n?Jr:Jn;return!n&&pn(i,"iterate",l?As:yr),Je(Object.create(a),{next(){const{value:d,done:f}=a.next();return f?{value:d,done:f}:{value:s?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function vi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function L1(e,n){const t={get(o){const i=this.__v_raw,u=Se(i),s=Se(o);e||(lt(o,s)&&pn(u,"get",o),pn(u,"get",s));const{has:l}=mi(u),a=n?Ts:e?Jr:Jn;if(l.call(u,o))return a(i.get(o));if(l.call(u,s))return a(i.get(s));i!==u&&i.get(o)},get size(){const o=this.__v_raw;return!e&&pn(Se(o),"iterate",yr),o.size},has(o){const i=this.__v_raw,u=Se(i),s=Se(o);return e||(lt(o,s)&&pn(u,"has",o),pn(u,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const u=this,s=u.__v_raw,l=Se(s),a=n?Ts:e?Jr:Jn;return!e&&pn(l,"iterate",yr),s.forEach((c,d)=>o.call(i,a(c),a(d),u))}};return Je(t,e?{add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear")}:{add(o){const i=Se(this),u=mi(i),s=Se(o),l=!n&&!On(o)&&!Pt(o)?s:o;return u.has.call(i,l)||lt(o,l)&&u.has.call(i,o)||lt(s,l)&&u.has.call(i,s)||(i.add(l),Et(i,"add",l,l)),this},set(o,i){!n&&!On(i)&&!Pt(i)&&(i=Se(i));const u=Se(this),{has:s,get:l}=mi(u);let a=s.call(u,o);a||(o=Se(o),a=s.call(u,o));const c=l.call(u,o);return u.set(o,i),a?lt(i,c)&&Et(u,"set",o,i):Et(u,"add",o,i),this},delete(o){const i=Se(this),{has:u,get:s}=mi(i);let l=u.call(i,o);l||(o=Se(o),l=u.call(i,o)),s&&s.call(i,o);const a=i.delete(o);return l&&Et(i,"delete",o,void 0),a},clear(){const o=Se(this),i=o.size!==0,u=o.clear();return i&&Et(o,"clear",void 0,void 0),u}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=N1(o,e,n)}),t}function yl(e,n){const t=L1(e,n);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(De(t,o)&&o in r?t:r,o,i)}const j1={get:yl(!1,!1)},H1={get:yl(!1,!0)},U1={get:yl(!0,!1)};const gf=new WeakMap,bf=new WeakMap,mf=new WeakMap,K1=new WeakMap;function W1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uo(e){return Pt(e)?e:Cl(e,!1,O1,j1,gf)}function vf(e){return Cl(e,!1,M1,H1,bf)}function Er(e){return Cl(e,!0,B1,U1,mf)}function Cl(e,n,t,r,o){if(!Ae(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const u=W1(p1(e));if(u===0)return e;const s=new Proxy(e,u===2?r:t);return o.set(e,s),s}function Dt(e){return Pt(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function hu(e){return e?!!e.__v_raw:!1}function Se(e){const n=e&&e.__v_raw;return n?Se(n):e}function Mo(e){return!De(e,"__v_skip")&&Object.isExtensible(e)&&Xd(e,"__v_skip",!0),e}const Jn=e=>Ae(e)?uo(e):e,Jr=e=>Ae(e)?Er(e):e;function Ze(e){return e?e.__v_isRef===!0:!1}function oe(e){return yf(e,!1)}function xf(e){return yf(e,!0)}function yf(e,n){return Ze(e)?e:new V1(e,n)}class V1{constructor(n,t){this.dep=new xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Se(n),this._value=t?n:Jn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||On(n)||Pt(n);n=r?n:Se(n),lt(n,t)&&(this._rawValue=n,this._value=r?n:Jn(n),this.dep.trigger())}}function Ue(e){return Ze(e)?e.value:e}const q1={get:(e,n,t)=>n==="__v_raw"?e:Ue(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return Ze(o)&&!Ze(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function Cf(e){return Dt(e)?e:new Proxy(e,q1)}function G1(e){const n=ge(e)?new Array(e.length):{};for(const t in e)n[t]=_f(e,t);return n}class Z1{constructor(n,t,r){this._object=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Bn(t)?t:String(t),this._raw=Se(n);let o=!0,i=n;if(!ge(n)||Bn(this._key)||!su(this._key))do o=!hu(i)||On(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let n=this._object[this._key];return this._shallow&&(n=Ue(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&Ze(this._raw[this._key])){const t=this._object[this._key];if(Ze(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return z1(this._raw,this._key)}}class X1{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function He(e,n,t){return Ze(e)?e:xe(e)?new X1(e):Ae(e)&&arguments.length>1?_f(e,n,t):oe(e)}function _f(e,n,t){return new Z1(e,n,t)}class Y1{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return uf(this,!0),!0}get value(){const n=this.dep.track();return af(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function J1(e,n,t=!1){let r,o;return xe(e)?r=e:(r=e.get,o=e.set),new Y1(r,o,t)}const xi={},Bi=new WeakMap;let hr;function Q1(e,n=!1,t=hr){if(t){let r=Bi.get(t);r||Bi.set(t,r=[]),r.push(e)}}function eg(e,n,t=Re){const{immediate:r,deep:o,once:i,scheduler:u,augmentJob:s,call:l}=t,a=y=>o?y:On(y)||o===!1||o===0?At(y,1):At(y);let c,d,f,h,p=!1,g=!1;if(Ze(e)?(d=()=>e.value,p=On(e)):Dt(e)?(d=()=>a(e),p=!0):ge(e)?(g=!0,p=e.some(y=>Dt(y)||On(y)),d=()=>e.map(y=>{if(Ze(y))return y.value;if(Dt(y))return a(y);if(xe(y))return l?l(y,2):y()})):xe(e)?n?d=l?()=>l(e,2):e:d=()=>{if(f){Ft();try{f()}finally{It()}}const y=hr;hr=c;try{return l?l(e,3,[h]):e(h)}finally{hr=y}}:d=dt,n&&o){const y=d,S=o===!0?1/0:o;d=()=>At(y(),S)}const b=tf(),v=()=>{c.stop(),b&&b.active&&pl(b.effects,c)};if(i&&n){const y=n;n=(...S)=>{const z=y(...S);return v(),z}}let m=g?new Array(e.length).fill(xi):xi;const w=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(n){const S=c.run();if(y||o||p||(g?S.some((z,_)=>lt(z,m[_])):lt(S,m))){f&&f();const z=hr;hr=c;try{const _=[S,m===xi?void 0:g&&m[0]===xi?[]:m,h];m=S,l?l(n,3,_):n(..._)}finally{hr=z}}}else c.run()};return s&&s(w),c=new rf(d),c.scheduler=u?()=>u(w,!1):w,h=y=>Q1(y,!1,c),f=c.onStop=()=>{const y=Bi.get(c);if(y){if(l)l(y,4);else for(const S of y)S();Bi.delete(c)}},n?r?w(!0):m=c.run():u?u(w.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function At(e,n=1/0,t){if(n<=0||!Ae(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ze(e))At(e.value,n,t);else if(ge(e))for(let r=0;r<e.length;r++)At(e[r],n,t);else if(Vd(e)||Vr(e))e.forEach(r=>{At(r,n,t)});else if(Zd(e)){for(const r in e)At(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&At(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ii(e,n,t,r){try{return r?e(...r):e()}catch(o){pu(o,n,t)}}function Wn(e,n,t,r){if(xe(e)){const o=ii(e,n,t,r);return o&&qd(o)&&o.catch(i=>{pu(i,n,t)}),o}if(ge(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Wn(e[i],n,t,r));return o}}function pu(e,n,t,r=!0){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:u}=n&&n.appContext.config||Re;if(n){let s=n.parent;const l=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,a)===!1)return}s=s.parent}if(i){Ft(),ii(i,null,10,[e,l,a]),It();return}}ng(e,t,o,r,u)}function ng(e,n,t,r=!0,o=!1){if(o)throw e;console.error(e)}const _n=[];let it=-1;const qr=[];let Gt=null,Ur=0;const wf=Promise.resolve();let Mi=null;function ui(e){const n=Mi||wf;return e?n.then(this?e.bind(this):e):n}function tg(e){let n=it+1,t=_n.length;for(;n<t;){const r=n+t>>>1,o=_n[r],i=No(o);i<e||i===e&&o.flags&2?n=r+1:t=r}return n}function _l(e){if(!(e.flags&1)){const n=No(e),t=_n[_n.length-1];!t||!(e.flags&2)&&n>=No(t)?_n.push(e):_n.splice(tg(n),0,e),e.flags|=1,kf()}}function kf(){Mi||(Mi=wf.then(Ef))}function rg(e){ge(e)?qr.push(...e):Gt&&e.id===-1?Gt.splice(Ur+1,0,e):e.flags&1||(qr.push(e),e.flags|=1),kf()}function ma(e,n,t=it+1){for(;t<_n.length;t++){const r=_n[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_n.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sf(e){if(qr.length){const n=[...new Set(qr)].sort((t,r)=>No(t)-No(r));if(qr.length=0,Gt){Gt.push(...n);return}for(Gt=n,Ur=0;Ur<Gt.length;Ur++){const t=Gt[Ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gt=null,Ur=0}}const No=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ef(e){try{for(it=0;it<_n.length;it++){const n=_n[it];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ii(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;it<_n.length;it++){const n=_n[it];n&&(n.flags&=-2)}it=-1,_n.length=0,Sf(),Mi=null,(_n.length||qr.length)&&Ef()}}let dn=null,Af=null;function Ni(e){const n=dn;return dn=e,Af=e&&e.type.__scopeId||null,n}function Cn(e,n=dn,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&Hi(-1);const i=Ni(n),u=zt.length;let s;try{s=e(...o)}finally{for(let l=zt.length;l>u;l--)zl();Ni(i),r._d&&Hi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function gu(e,n){if(dn===null)return e;const t=yu(dn),r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,u,s,l=Re]=n[o];i&&(xe(i)&&(i={mounted:i,updated:i}),i.deep&&At(u),r.push({dir:i,instance:t,value:u,oldValue:void 0,arg:s,modifiers:l}))}return e}function sr(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let u=0;u<o.length;u++){const s=o[u];i&&(s.oldValue=i[u].value);let l=s.dir[r];l&&(Ft(),Wn(l,t,8,[e.el,s,e,n]),It())}}function Ke(e,n){if(bn){let t=bn.provides;const r=bn.parent&&bn.parent.provides;r===t&&(t=bn.provides=Object.create(r)),t[e]=n}}function ve(e,n,t=!1){const r=Rr();if(r||Cr){let o=Cr?Cr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&xe(n)?n.call(r&&r.proxy):n}}function og(){return!!(Rr()||Cr)}const ig=Symbol.for("v-scx"),ug=()=>ve(ig);function Rt(e,n){return wl(e,null,n)}function cn(e,n,t){return wl(e,n,t)}function wl(e,n,t=Re){const{immediate:r,deep:o,flush:i,once:u}=t,s=Je({},t),l=n&&r||!n&&i!=="post";let a;if(Ho){if(i==="sync"){const h=ug();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=dt,h.resume=dt,h.pause=dt,h}}const c=bn;s.call=(h,p,g)=>Wn(h,c,p,g);let d=!1;i==="post"?s.scheduler=h=>{vn(h,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(h,p)=>{p?h():_l(h)}),s.augmentJob=h=>{n&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=eg(e,n,s);return Ho&&(a?a.push(f):l&&f()),f}function sg(e,n,t){const r=this.proxy,o=je(e)?e.includes(".")?Tf(r,e):()=>r[e]:e.bind(r,r);let i;xe(n)?i=n:(i=n.handler,t=n);const u=ai(this),s=wl(o,i.bind(r),t);return u(),s}function Tf(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const Wt=new WeakMap,Df=Symbol("_vte"),zf=e=>e.__isTeleport,pr=e=>e&&(e.disabled||e.disabled===""),lg=e=>e&&(e.defer||e.defer===""),va=e=>typeof SVGElement<"u"&&e instanceof SVGElement,xa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ds=(e,n)=>{const t=e&&e.to;return je(t)?n?n(t):null:t},ag={name:"Teleport",__isTeleport:!0,process(e,n,t,r,o,i,u,s,l,a){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:g,createComment:b,parentNode:v}}=a,m=pr(n.props);let{dynamicChildren:w}=n;const y=(_,E,k)=>{_.shapeFlag&16&&c(_.children,E,k,o,i,u,s,l)},S=(_=n)=>{const E=pr(_.props),k=_.target=Ds(_.props,p),F=zs(k,_,g,h);k&&(u!=="svg"&&va(k)?u="svg":u!=="mathml"&&xa(k)&&(u="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(k),E||(y(_,k,F),yo(_,!1)))},z=_=>{const E=()=>{if(Wt.get(_)===E){if(Wt.delete(_),pr(_.props)){const k=v(_.el)||t;y(_,k,_.anchor),yo(_,!0)}S(_)}};Wt.set(_,E),vn(E,i)};if(e==null){const _=n.el=g(""),E=n.anchor=g("");if(h(_,t,r),h(E,t,r),lg(n.props)||i&&i.pendingBranch){z(n);return}m&&(y(n,t,E),yo(n,!0)),S()}else{n.el=e.el;const _=n.anchor=e.anchor,E=Wt.get(e);if(E){E.flags|=8,Wt.delete(e),z(n);return}n.targetStart=e.targetStart;const k=n.target=e.target,F=n.targetAnchor=e.targetAnchor,L=pr(e.props),I=L?t:k,J=L?_:F;if(u==="svg"||va(k)?u="svg":(u==="mathml"||xa(k))&&(u="mathml"),w?(f(e.dynamicChildren,w,I,o,i,u,s),Dl(e,n,!0)):l||d(e,n,I,J,o,i,u,s,!1),m)L?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):yi(n,t,_,a,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const G=Ds(n.props,p);G&&(n.target=G,yi(n,G,null,a,0))}else L&&yi(n,k,F,a,1);yo(n,m)}},remove(e,n,t,{um:r,o:{remove:o}},i){const{shapeFlag:u,children:s,anchor:l,targetStart:a,targetAnchor:c,target:d,props:f}=e,h=pr(f),p=i||!h,g=Wt.get(e);if(g&&(g.flags|=8,Wt.delete(e)),d&&(o(a),o(c)),i&&o(l),!g&&(h||d)&&u&16)for(let b=0;b<s.length;b++){const v=s[b];r(v,n,t,p,!!v.dynamicChildren)}},move:yi,hydrate:cg};function yi(e,n,t,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,n,t);const{el:u,anchor:s,shapeFlag:l,children:a,props:c}=e,d=i===2;if(d&&r(u,n,t),!Wt.has(e)&&(!d||pr(c))&&l&16)for(let f=0;f<a.length;f++)o(a[f],n,t,2);d&&r(s,n,t)}function cg(e,n,t,r,o,i,{o:{nextSibling:u,parentNode:s,querySelector:l,insert:a,createText:c}},d){function f(b,v){let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")n.targetStart=m;else if(m.data==="teleport anchor"){n.targetAnchor=m,b._lpa=n.targetAnchor&&u(n.targetAnchor);break}}m=u(m)}}function h(b,v){v.anchor=d(u(b),v,s(b),t,r,o,i)}const p=n.target=Ds(n.props,l),g=pr(n.props);if(p){const b=p._lpa||p.firstChild;n.shapeFlag&16&&(g?(h(e,n),f(p,b),n.targetAnchor||zs(p,n,c,a,s(e)===p?e:null)):(n.anchor=u(e),f(p,b),n.targetAnchor||zs(p,n,c,a),d(b&&u(b),n,p,t,r,o,i))),yo(n,g)}else g&&n.shapeFlag&16&&(h(e,n),n.targetStart=e,n.targetAnchor=u(e));return n.anchor&&u(n.anchor)}const dg=ag;function yo(e,n){const t=e.ctx;if(t&&t.ut){let r,o;for(n?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function zs(e,n,t,r,o=null){const i=n.targetStart=t(""),u=n.targetAnchor=t("");return i[Df]=u,e&&(r(i,e,o),r(u,e,o)),u}const Kn=Symbol("_leaveCb"),ho=Symbol("_enterCb");function Ff(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln(()=>{e.isMounted=!0}),qn(()=>{e.isUnmounting=!0}),e}const Hn=[Function,Array],If={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},Pf=e=>{const n=e.subTree;return n.component?Pf(n.component):n},fg={name:"BaseTransition",props:If,setup(e,{slots:n}){const t=Rr(),r=Ff();return()=>{const o=n.default&&kl(n.default(),!0),i=o&&o.length?Rf(o):t.subTree?Yg():void 0;if(!i)return;const u=Se(e),{mode:s}=u;if(r.isLeaving)return Ku(i);const l=ya(i);if(!l)return Ku(i);let a=Lo(l,u,r,t,d=>a=d);l.type!==on&&Ar(l,a);let c=t.subTree&&ya(t.subTree);if(c&&c.type!==on&&!gr(c,l)&&Pf(t).type!==on){let d=Lo(c,u,r,t);if(Ar(c,d),s==="out-in"&&l.type!==on)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Ku(i);s==="in-out"&&l.type!==on?d.delayLeave=(f,h,p)=>{const g=$f(r,c);g[String(c.key)]=c,f[Kn]=()=>{h(),f[Kn]=void 0,delete a.delayedLeave,c=void 0},a.delayedLeave=()=>{p(),delete a.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Rf(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==on){n=t;break}}return n}const hg=fg;function $f(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Lo(e,n,t,r,o){const{appear:i,mode:u,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:b,onAppear:v,onAfterAppear:m,onAppearCancelled:w}=n,y=String(e.key),S=$f(t,e),z=(k,F)=>{k&&Wn(k,r,9,F)},_=(k,F)=>{const L=F[1];z(k,F),ge(k)?k.every(I=>I.length<=1)&&L():k.length<=1&&L()},E={mode:u,persisted:s,beforeEnter(k){let F=l;if(!t.isMounted)if(i)F=b||l;else return;k[Kn]&&k[Kn](!0);const L=S[y];L&&gr(e,L)&&L.el[Kn]&&L.el[Kn](),z(F,[k])},enter(k){if(S[y]===e)return;let F=a,L=c,I=d;if(!t.isMounted)if(i)F=v||a,L=m||c,I=w||d;else return;let J=!1;k[ho]=$=>{J||(J=!0,$?z(I,[k]):z(L,[k]),E.delayedLeave&&E.delayedLeave(),k[ho]=void 0)};const G=k[ho].bind(null,!1);F?_(F,[k,G]):G()},leave(k,F){const L=String(e.key);if(k[ho]&&k[ho](!0),t.isUnmounting)return F();z(f,[k]);let I=!1;k[Kn]=G=>{I||(I=!0,F(),G?z(g,[k]):z(p,[k]),k[Kn]=void 0,S[L]===e&&delete S[L])};const J=k[Kn].bind(null,!1);S[L]=e,h?_(h,[k,J]):J()},clone(k){const F=Lo(k,n,t,r,o);return o&&o(F),F}};return E}function Ku(e){if(bu(e))return e=$t(e),e.children=null,e}function ya(e){if(!bu(e))return zf(e.type)&&e.children?Rf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&xe(t.default))return t.default()}}function Ar(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Ar(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function kl(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let u=e[i];const s=t==null?u.key:String(t)+String(u.key!=null?u.key:i);u.type===Le?(u.patchFlag&128&&o++,r=r.concat(kl(u.children,n,s))):(n||u.type!==on)&&r.push(s!=null?$t(u,{key:s}):u)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function le(e,n){return xe(e)?Je({name:e.name},n,{setup:e}):e}function Of(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ca(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const Li=new WeakMap;function To(e,n,t,r,o=!1){if(ge(e)){e.forEach((g,b)=>To(g,n&&(ge(n)?n[b]:n),t,r,o));return}if(Gr(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&To(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?yu(r.component):r.el,u=o?null:i,{i:s,r:l}=e,a=n&&n.r,c=s.refs===Re?s.refs={}:s.refs,d=s.setupState,f=Se(d),h=d===Re?Wd:g=>Ca(c,g)?!1:De(f,g),p=(g,b)=>!(b&&Ca(c,b));if(a!=null&&a!==l){if(_a(n),je(a))c[a]=null,h(a)&&(d[a]=null);else if(Ze(a)){const g=n;p(a,g.k)&&(a.value=null),g.k&&(c[g.k]=null)}}if(xe(l))ii(l,s,12,[u,c]);else{const g=je(l),b=Ze(l);if(g||b){const v=()=>{if(e.f){const m=g?h(l)?d[l]:c[l]:p()||!e.k?l.value:c[e.k];if(o)ge(m)&&pl(m,i);else if(ge(m))m.includes(i)||m.push(i);else if(g)c[l]=[i],h(l)&&(d[l]=c[l]);else{const w=[i];p(l,e.k)&&(l.value=w),e.k&&(c[e.k]=w)}}else g?(c[l]=u,h(l)&&(d[l]=u)):b&&(p(l,e.k)&&(l.value=u),e.k&&(c[e.k]=u))};if(u){const m=()=>{v(),Li.delete(e)};m.id=-1,Li.set(e,m),vn(m,t)}else _a(e),v()}}}function _a(e){const n=Li.get(e);n&&(n.flags|=8,Li.delete(e))}cu().requestIdleCallback;cu().cancelIdleCallback;const Gr=e=>!!e.type.__asyncLoader,bu=e=>e.type.__isKeepAlive;function Bf(e,n){Nf(e,"a",n)}function Mf(e,n){Nf(e,"da",n)}function Nf(e,n,t=bn){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(mu(n,r,t),t){let o=t.parent;for(;o&&o.parent;)bu(o.parent.vnode)&&pg(r,n,t,o),o=o.parent}}function pg(e,n,t,r){const o=mu(n,e,r,!0);jf(()=>{pl(r[n],o)},t)}function mu(e,n,t=bn,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...u)=>{Ft();const s=ai(t),l=Wn(n,t,e,u);return s(),It(),l});return r?o.unshift(i):o.push(i),i}}const Bt=e=>(n,t=bn)=>{(!Ho||e==="sp")&&mu(e,(...r)=>n(...r),t)},si=Bt("bm"),Ln=Bt("m"),gg=Bt("bu"),Lf=Bt("u"),qn=Bt("bum"),jf=Bt("um"),bg=Bt("sp"),mg=Bt("rtg"),vg=Bt("rtc");function xg(e,n=bn){mu("ec",e,n)}const Sl="components",yg="directives";function Hf(e,n){return El(Sl,e,!0,n)||e}const Uf=Symbol.for("v-ndc");function Cg(e){return je(e)?El(Sl,e,!1)||e:e||Uf}function J7(e){return El(yg,e)}function El(e,n,t=!0,r=!1){const o=dn||bn;if(o){const i=o.type;if(e===Sl){const s=ib(i,!1);if(s&&(s===n||s===wn(n)||s===au(wn(n))))return i}const u=wa(o[e]||i[e],n)||wa(o.appContext[e],n);return!u&&r?i:u}}function wa(e,n){return e&&(e[n]||e[wn(n)]||e[au(wn(n))])}function _g(e,n,t,r){let o;const i=t,u=ge(e);if(u||je(e)){const s=u&&Dt(e);let l=!1,a=!1;s&&(l=!On(e),a=Pt(e),e=fu(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=n(l?a?Jr(Jn(e[c])):Jn(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i)}else if(Ae(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>n(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const c=s[l];o[l]=n(e[c],c,l,i)}}else o=[];return o}function vu(e,n,t={},r,o,i){if(dn.ce||dn.parent&&Gr(dn.parent)&&dn.parent.ce){const a=t,c=Object.keys(a).length>0;return n!=="default"&&(a.name=n),We(),Tr(Le,null,[Ce("slot",a,r&&r())],c?-2:64)}let u=e[n];u&&u._c&&(u._d=!1);const s=zt.length;We();let l;try{const a=u&&Kf(u(t)),c=t.key||i||a&&a.key;l=Tr(Le,{key:(c&&!Bn(c)?c:`_${n}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&e._===1?64:-2)}catch(a){for(let c=zt.length;c>s;c--)zl();throw a}finally{u&&u._c&&(u._d=!0)}return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Kf(e){return e.some(n=>Qr(n)?!(n.type===on||n.type===Le&&!Kf(n.children)):!0)?e:null}const Fs=e=>e?a0(e)?yu(e):Fs(e.parent):null,Do=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fs(e.parent),$root:e=>Fs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vf(e),$forceUpdate:e=>e.f||(e.f=()=>{_l(e.update)}),$nextTick:e=>e.n||(e.n=ui.bind(e.proxy)),$watch:e=>sg.bind(e)}),Wu=(e,n)=>e!==Re&&!e.__isScriptSetup&&De(e,n),wg={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:u,type:s,appContext:l}=e;if(n[0]!=="$"){const f=u[n];if(f!==void 0)switch(f){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(Wu(r,n))return u[n]=1,r[n];if(o!==Re&&De(o,n))return u[n]=2,o[n];if(De(i,n))return u[n]=3,i[n];if(t!==Re&&De(t,n))return u[n]=4,t[n];Is&&(u[n]=0)}}const a=Do[n];let c,d;if(a)return n==="$attrs"&&pn(e.attrs,"get",""),a(e);if((c=s.__cssModules)&&(c=c[n]))return c;if(t!==Re&&De(t,n))return u[n]=4,t[n];if(d=l.config.globalProperties,De(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return Wu(o,n)?(o[n]=t,!0):r!==Re&&De(r,n)?(r[n]=t,!0):De(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,props:i,type:u}},s){let l;return!!(t[s]||e!==Re&&s[0]!=="$"&&De(e,s)||Wu(n,s)||De(i,s)||De(r,s)||De(Do,s)||De(o.config.globalProperties,s)||(l=u.__cssModules)&&l[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:De(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function ka(e){return ge(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Is=!0;function kg(e){const n=Vf(e),t=e.proxy,r=e.ctx;Is=!1,n.beforeCreate&&Sa(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:u,watch:s,provide:l,inject:a,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:g,deactivated:b,beforeDestroy:v,beforeUnmount:m,destroyed:w,unmounted:y,render:S,renderTracked:z,renderTriggered:_,errorCaptured:E,serverPrefetch:k,expose:F,inheritAttrs:L,components:I,directives:J,filters:G}=n;if(a&&Sg(a,r,null),u)for(const P in u){const Z=u[P];xe(Z)&&(r[P]=Z.bind(t))}if(o){const P=o.call(t,t);Ae(P)&&(e.data=uo(P))}if(Is=!0,i)for(const P in i){const Z=i[P],be=xe(Z)?Z.bind(t,t):xe(Z.get)?Z.get.bind(t,t):dt,ke=!xe(Z)&&xe(Z.set)?Z.set.bind(t):dt,ee=R({get:be,set:ke});Object.defineProperty(r,P,{enumerable:!0,configurable:!0,get:()=>ee.value,set:te=>ee.value=te})}if(s)for(const P in s)Wf(s[P],r,t,P);if(l){const P=xe(l)?l.call(t):l;Reflect.ownKeys(P).forEach(Z=>{Ke(Z,P[Z])})}c&&Sa(c,e,"c");function q(P,Z){ge(Z)?Z.forEach(be=>P(be.bind(t))):Z&&P(Z.bind(t))}if(q(si,d),q(Ln,f),q(gg,h),q(Lf,p),q(Bf,g),q(Mf,b),q(xg,E),q(vg,z),q(mg,_),q(qn,m),q(jf,y),q(bg,k),ge(F))if(F.length){const P=e.exposed||(e.exposed={});F.forEach(Z=>{Object.defineProperty(P,Z,{get:()=>t[Z],set:be=>t[Z]=be,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===dt&&(e.render=S),L!=null&&(e.inheritAttrs=L),I&&(e.components=I),J&&(e.directives=J),k&&Of(e)}function Sg(e,n,t=dt){ge(e)&&(e=Ps(e));for(const r in e){const o=e[r];let i;Ae(o)?"default"in o?i=ve(o.from||r,o.default,!0):i=ve(o.from||r):i=ve(o),Ze(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:u=>i.value=u}):n[r]=i}}function Sa(e,n,t){Wn(ge(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Wf(e,n,t,r){let o=r.includes(".")?Tf(t,r):()=>t[r];if(je(e)){const i=n[e];xe(i)&&cn(o,i)}else if(xe(e))cn(o,e.bind(t));else if(Ae(e))if(ge(e))e.forEach(i=>Wf(i,n,t,r));else{const i=xe(e.handler)?e.handler.bind(t):n[e.handler];xe(i)&&cn(o,i,e)}}function Vf(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:u}}=e.appContext,s=i.get(n);let l;return s?l=s:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(a=>ji(l,a,u,!0)),ji(l,n,u)),Ae(n)&&i.set(n,l),l}function ji(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&ji(e,i,t,!0),o&&o.forEach(u=>ji(e,u,t,!0));for(const u in n)if(!(r&&u==="expose")){const s=Eg[u]||t&&t[u];e[u]=s?s(e[u],n[u]):n[u]}return e}const Eg={data:Ea,props:Aa,emits:Aa,methods:Co,computed:Co,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Co,directives:Co,watch:Tg,provide:Ea,inject:Ag};function Ea(e,n){return n?e?function(){return Je(xe(e)?e.call(this,this):e,xe(n)?n.call(this,this):n)}:n:e}function Ag(e,n){return Co(Ps(e),Ps(n))}function Ps(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mn(e,n){return e?[...new Set([].concat(e,n))]:n}function Co(e,n){return e?Je(Object.create(null),e,n):n}function Aa(e,n){return e?ge(e)&&ge(n)?[...new Set([...e,...n])]:Je(Object.create(null),ka(e),ka(n??{})):n}function Tg(e,n){if(!e)return n;if(!n)return e;const t=Je(Object.create(null),e);for(const r in n)t[r]=mn(e[r],n[r]);return t}function qf(){return{app:null,config:{isNativeTag:Wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function zg(e,n){return function(r,o=null){xe(r)||(r=Je({},r)),o!=null&&!Ae(o)&&(o=null);const i=qf(),u=new WeakSet,s=[];let l=!1;const a=i.app={_uid:Dg++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:sb,get config(){return i.config},set config(c){},use(c,...d){return u.has(c)||(c&&xe(c.install)?(u.add(c),c.install(a,...d)):xe(c)&&(u.add(c),c(a,...d))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,d){return d?(i.components[c]=d,a):i.components[c]},directive(c,d){return d?(i.directives[c]=d,a):i.directives[c]},mount(c,d,f){if(!l){const h=a._ceVNode||Ce(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,a._container=c,c.__vue_app__=a,yu(h.component)}},onUnmount(c){s.push(c)},unmount(){l&&(Wn(s,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return i.provides[c]=d,a},runWithContext(c){const d=Cr;Cr=a;try{return c()}finally{Cr=d}}};return a}}let Cr=null;const Fg=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${wn(n)}Modifiers`]||e[`${Ir(n)}Modifiers`];function Ig(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Re;let o=t;const i=n.startsWith("update:"),u=i&&Fg(r,n.slice(7));u&&(u.trim&&(o=t.map(c=>je(c)?c.trim():c)),u.number&&(o=t.map(m1)));let s,l=r[s=Mu(n)]||r[s=Mu(wn(n))];!l&&i&&(l=r[s=Mu(Ir(n))]),l&&Wn(l,e,6,o);const a=r[s+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Wn(a,e,6,o)}}const Pg=new WeakMap;function Gf(e,n,t=!1){const r=t?Pg:n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let u={},s=!1;if(!xe(e)){const l=a=>{const c=Gf(a,n,!0);c&&(s=!0,Je(u,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Ae(e)&&r.set(e,null),null):(ge(i)?i.forEach(l=>u[l]=null):Je(u,i),Ae(e)&&r.set(e,u),u)}function xu(e,n){return!e||!iu(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),De(e,n[0].toLowerCase()+n.slice(1))||De(e,Ir(n))||De(e,n))}function Ta(e){const{type:n,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:u,attrs:s,emit:l,render:a,renderCache:c,props:d,data:f,setupState:h,ctx:p,inheritAttrs:g}=e,b=Ni(e);let v,m;try{if(t.shapeFlag&4){const y=o||r,S=y;v=st(a.call(S,y,c,d,h,f,p)),m=s}else{const y=n;v=st(y.length>1?y(d,{attrs:s,slots:u,emit:l}):y(d,null)),m=n.props?s:Rg(s)}}catch(y){zt.length=0,pu(y,e,1),v=Ce(on)}let w=v;if(m&&g!==!1){const y=Object.keys(m),{shapeFlag:S}=w;y.length&&S&7&&(i&&y.some(uu)&&(m=$g(m,i)),w=$t(w,m,!1,!0))}return t.dirs&&(w=$t(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Ar(w,t.transition),v=w,Ni(b),v}const Rg=e=>{let n;for(const t in e)(t==="class"||t==="style"||iu(t))&&((n||(n={}))[t]=e[t]);return n},$g=(e,n)=>{const t={};for(const r in e)(!uu(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Og(e,n,t){const{props:r,children:o,component:i}=e,{props:u,children:s,patchFlag:l}=n,a=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,u,a):!!u;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(Zf(u,r,f)&&!xu(a,f))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===u?!1:r?u?Da(r,u,a):!0:!!u;return!1}function Da(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(Zf(n,e,i)&&!xu(t,i))return!0}return!1}function Zf(e,n,t){const r=e[t],o=n[t];return t==="style"&&Ae(r)&&Ae(o)?!gl(r,o):r!==o}function Bg({vnode:e,parent:n,suspense:t},r){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const Xf={},Yf=()=>Object.create(Xf),Jf=e=>Object.getPrototypeOf(e)===Xf;function Mg(e,n,t,r=!1){const o={},i=Yf();e.propsDefaults=Object.create(null),Qf(e,n,o,i);for(const u in e.propsOptions[0])u in o||(o[u]=void 0);t?e.props=r?o:vf(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Ng(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:u}}=e,s=Se(o),[l]=e.propsOptions;let a=!1;if((r||u>0)&&!(u&16)){if(u&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(xu(e.emitsOptions,f))continue;const h=n[f];if(l)if(De(i,f))h!==i[f]&&(i[f]=h,a=!0);else{const p=wn(f);o[p]=Rs(l,s,p,h,e,!1)}else h!==i[f]&&(i[f]=h,a=!0)}}}else{Qf(e,n,o,i)&&(a=!0);let c;for(const d in s)(!n||!De(n,d)&&((c=Ir(d))===d||!De(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(o[d]=Rs(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!n||!De(n,d))&&(delete i[d],a=!0)}a&&Et(e.attrs,"set","")}function Qf(e,n,t,r){const[o,i]=e.propsOptions;let u=!1,s;if(n)for(let l in n){if(So(l))continue;const a=n[l];let c;o&&De(o,c=wn(l))?!i||!i.includes(c)?t[c]=a:(s||(s={}))[c]=a:xu(e.emitsOptions,l)||(!(l in r)||a!==r[l])&&(r[l]=a,u=!0)}if(i){const l=Se(t),a=s||Re;for(let c=0;c<i.length;c++){const d=i[c];t[d]=Rs(o,l,d,a[d],e,!De(a,d))}}return u}function Rs(e,n,t,r,o,i){const u=e[t];if(u!=null){const s=De(u,"default");if(s&&r===void 0){const l=u.default;if(u.type!==Function&&!u.skipFactory&&xe(l)){const{propsDefaults:a}=o;if(t in a)r=a[t];else{const c=ai(o);r=a[t]=l.call(null,n),c()}}else r=l;o.ce&&o.ce._setProp(t,r)}u[0]&&(i&&!s?r=!1:u[1]&&(r===""||r===Ir(t))&&(r=!0))}return r}const Lg=new WeakMap;function e0(e,n,t=!1){const r=t?Lg:n.propsCache,o=r.get(e);if(o)return o;const i=e.props,u={},s=[];let l=!1;if(!xe(e)){const c=d=>{l=!0;const[f,h]=e0(d,n,!0);Je(u,f),h&&s.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Ae(e)&&r.set(e,Wr),Wr;if(ge(i))for(let c=0;c<i.length;c++){const d=wn(i[c]);za(d)&&(u[d]=Re)}else if(i)for(const c in i){const d=wn(c);if(za(d)){const f=i[c],h=u[d]=ge(f)||xe(f)?{type:f}:Je({},f),p=h.type;let g=!1,b=!0;if(ge(p))for(let v=0;v<p.length;++v){const m=p[v],w=xe(m)&&m.name;if(w==="Boolean"){g=!0;break}else w==="String"&&(b=!1)}else g=xe(p)&&p.name==="Boolean";h[0]=g,h[1]=b,(g||De(h,"default"))&&s.push(d)}}const a=[u,s];return Ae(e)&&r.set(e,a),a}function za(e){return e[0]!=="$"&&!So(e)}const Al=e=>e==="_"||e==="_ctx"||e==="$stable",Tl=e=>ge(e)?e.map(st):[st(e)],jg=(e,n,t)=>{if(n._n)return n;const r=Cn((...o)=>Tl(n(...o)),t);return r._c=!1,r},n0=(e,n,t)=>{const r=e._ctx;for(const o in e){if(Al(o))continue;const i=e[o];if(xe(i))n[o]=jg(o,i,r);else if(i!=null){const u=Tl(i);n[o]=()=>u}}},t0=(e,n)=>{const t=Tl(n);e.slots.default=()=>t},r0=(e,n,t)=>{for(const r in n)(t||!Al(r))&&(e[r]=n[r])},Hg=(e,n,t)=>{const r=e.slots=Yf();if(e.vnode.shapeFlag&32){const o=n._;o?(r0(r,n,t),t&&Xd(r,"_",o,!0)):n0(n,r)}else n&&t0(e,n)},Ug=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,u=Re;if(r.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:r0(o,n,t):(i=!n.$stable,n0(n,o)),u=n}else n&&(t0(e,n),u={default:1});if(i)for(const s in o)!Al(s)&&u[s]==null&&delete o[s]},vn=Gg;function Kg(e){return Wg(e)}function Wg(e,n){const t=cu();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:u,createText:s,createComment:l,setText:a,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=dt,insertStaticContent:p}=e,g=(x,C,D,N=null,U=null,M=null,ne=void 0,Q=null,X=!!C.dynamicChildren)=>{if(x===C)return;x&&!gr(x,C)&&(N=B(x),te(x,U,M,!0),x=null),C.patchFlag===-2&&(X=!1,C.dynamicChildren=null);const{type:W,ref:he,shapeFlag:ie}=C;switch(W){case li:b(x,C,D,N);break;case on:v(x,C,D,N);break;case qu:x==null&&m(C,D,N,ne);break;case Le:I(x,C,D,N,U,M,ne,Q,X);break;default:ie&1?S(x,C,D,N,U,M,ne,Q,X):ie&6?J(x,C,D,N,U,M,ne,Q,X):(ie&64||ie&128)&&W.process(x,C,D,N,U,M,ne,Q,X,ae)}he!=null&&U?To(he,x&&x.ref,M,C||x,!C):he==null&&x&&x.ref!=null&&To(x.ref,null,M,x,!0)},b=(x,C,D,N)=>{if(x==null)r(C.el=s(C.children),D,N);else{const U=C.el=x.el;C.children!==x.children&&a(U,C.children)}},v=(x,C,D,N)=>{x==null?r(C.el=l(C.children||""),D,N):C.el=x.el},m=(x,C,D,N)=>{[x.el,x.anchor]=p(x.children,C,D,N,x.el,x.anchor)},w=({el:x,anchor:C},D,N)=>{let U;for(;x&&x!==C;)U=f(x),r(x,D,N),x=U;r(C,D,N)},y=({el:x,anchor:C})=>{let D;for(;x&&x!==C;)D=f(x),o(x),x=D;o(C)},S=(x,C,D,N,U,M,ne,Q,X)=>{if(C.type==="svg"?ne="svg":C.type==="math"&&(ne="mathml"),x==null)z(C,D,N,U,M,ne,Q,X);else{const W=x.el&&x.el._isVueCE?x.el:null;try{W&&W._beginPatch(),k(x,C,U,M,ne,Q,X)}finally{W&&W._endPatch()}}},z=(x,C,D,N,U,M,ne,Q)=>{let X,W;const{props:he,shapeFlag:ie,transition:ce,dirs:fe}=x;if(X=x.el=u(x.type,M,he&&he.is,he),ie&8?c(X,x.children):ie&16&&E(x.children,X,null,N,U,Vu(x,M),ne,Q),fe&&sr(x,null,N,"created"),_(X,x,x.scopeId,ne,N),he){for(const ze in he)ze!=="value"&&!So(ze)&&i(X,ze,null,he[ze],M,N);"value"in he&&i(X,"value",null,he.value,M),(W=he.onVnodeBeforeMount)&&nt(W,N,x)}fe&&sr(x,null,N,"beforeMount");const we=Vg(U,ce);we&&ce.beforeEnter(X),r(X,C,D),((W=he&&he.onVnodeMounted)||we||fe)&&vn(()=>{try{W&&nt(W,N,x),we&&ce.enter(X),fe&&sr(x,null,N,"mounted")}finally{}},U)},_=(x,C,D,N,U)=>{if(D&&h(x,D),N)for(let M=0;M<N.length;M++)h(x,N[M]);if(U){let M=U.subTree;if(C===M||u0(M.type)&&(M.ssContent===C||M.ssFallback===C)){const ne=U.vnode;_(x,ne,ne.scopeId,ne.slotScopeIds,U.parent)}}},E=(x,C,D,N,U,M,ne,Q,X=0)=>{for(let W=X;W<x.length;W++){const he=x[W]=Q?St(x[W]):st(x[W]);g(null,he,C,D,N,U,M,ne,Q)}},k=(x,C,D,N,U,M,ne)=>{const Q=C.el=x.el;let{patchFlag:X,dynamicChildren:W,dirs:he}=C;X|=x.patchFlag&16;const ie=x.props||Re,ce=C.props||Re;let fe;if(D&&lr(D,!1),(fe=ce.onVnodeBeforeUpdate)&&nt(fe,D,C,x),he&&sr(C,x,D,"beforeUpdate"),D&&lr(D,!0),W&&(!x.dynamicChildren||x.dynamicChildren.length!==W.length)&&(X=0,ne=!1,W=null),(ie.innerHTML&&ce.innerHTML==null||ie.textContent&&ce.textContent==null)&&c(Q,""),W?F(x.dynamicChildren,W,Q,D,N,Vu(C,U),M):ne||Z(x,C,Q,null,D,N,Vu(C,U),M,!1),X>0){if(X&16)L(Q,ie,ce,D,U);else if(X&2&&ie.class!==ce.class&&i(Q,"class",null,ce.class,U),X&4&&i(Q,"style",ie.style,ce.style,U),X&8){const we=C.dynamicProps;for(let ze=0;ze<we.length;ze++){const Ee=we[ze],Ve=ie[Ee],Qe=ce[Ee];(Qe!==Ve||Ee==="value")&&i(Q,Ee,Ve,Qe,U,D)}}X&1&&x.children!==C.children&&c(Q,C.children)}else!ne&&W==null&&L(Q,ie,ce,D,U);((fe=ce.onVnodeUpdated)||he)&&vn(()=>{fe&&nt(fe,D,C,x),he&&sr(C,x,D,"updated")},N)},F=(x,C,D,N,U,M,ne)=>{for(let Q=0;Q<C.length;Q++){const X=x[Q],W=C[Q],he=X.el&&(X.type===Le||!gr(X,W)||X.shapeFlag&198)?d(X.el):D;g(X,W,he,null,N,U,M,ne,!0)}},L=(x,C,D,N,U)=>{if(C!==D){if(C!==Re)for(const M in C)!So(M)&&!(M in D)&&i(x,M,C[M],null,U,N);for(const M in D){if(So(M))continue;const ne=D[M],Q=C[M];ne!==Q&&M!=="value"&&i(x,M,Q,ne,U,N)}"value"in D&&i(x,"value",C.value,D.value,U)}},I=(x,C,D,N,U,M,ne,Q,X)=>{const W=C.el=x?x.el:s(""),he=C.anchor=x?x.anchor:s("");let{patchFlag:ie,dynamicChildren:ce,slotScopeIds:fe}=C;fe&&(Q=Q?Q.concat(fe):fe),x==null?(r(W,D,N),r(he,D,N),E(C.children||[],D,he,U,M,ne,Q,X)):ie>0&&ie&64&&ce&&x.dynamicChildren&&x.dynamicChildren.length===ce.length?(F(x.dynamicChildren,ce,D,U,M,ne,Q),(C.key!=null||U&&C===U.subTree)&&Dl(x,C,!0)):Z(x,C,D,he,U,M,ne,Q,X)},J=(x,C,D,N,U,M,ne,Q,X)=>{C.slotScopeIds=Q,x==null?C.shapeFlag&512?U.ctx.activate(C,D,N,ne,X):G(C,D,N,U,M,ne,X):$(x,C,X)},G=(x,C,D,N,U,M,ne)=>{const Q=x.component=eb(x,N,U);if(bu(x)&&(Q.ctx.renderer=ae),nb(Q,!1,ne),Q.asyncDep){if(U&&U.registerDep(Q,q,ne),!x.el){const X=Q.subTree=Ce(on);v(null,X,C,D),x.placeholder=X.el}}else q(Q,x,C,D,U,M,ne)},$=(x,C,D)=>{const N=C.component=x.component;if(Og(x,C,D))if(N.asyncDep&&!N.asyncResolved){P(N,C,D);return}else N.next=C,N.update();else C.el=x.el,N.vnode=C},q=(x,C,D,N,U,M,ne)=>{const Q=()=>{if(x.isMounted){let{next:ie,bu:ce,u:fe,parent:we,vnode:ze}=x;{const En=o0(x);if(En){ie&&(ie.el=ze.el,P(x,ie,ne)),En.asyncDep.then(()=>{vn(()=>{x.isUnmounted||W()},U)});return}}let Ee=ie,Ve;lr(x,!1),ie?(ie.el=ze.el,P(x,ie,ne)):ie=ze,ce&&Nu(ce),(Ve=ie.props&&ie.props.onVnodeBeforeUpdate)&&nt(Ve,we,ie,ze),lr(x,!0);const Qe=Ta(x),Sn=x.subTree;x.subTree=Qe,g(Sn,Qe,d(Sn.el),B(Sn),x,U,M),ie.el=Qe.el,Ee===null&&Bg(x,Qe.el),fe&&vn(fe,U),(Ve=ie.props&&ie.props.onVnodeUpdated)&&vn(()=>nt(Ve,we,ie,ze),U)}else{let ie;const{el:ce,props:fe}=C,{bm:we,m:ze,parent:Ee,root:Ve,type:Qe}=x,Sn=Gr(C);lr(x,!1),we&&Nu(we),!Sn&&(ie=fe&&fe.onVnodeBeforeMount)&&nt(ie,Ee,C),lr(x,!0);{Ve.ce&&Ve.ce._hasShadowRoot()&&Ve.ce._injectChildStyle(Qe,x.parent?x.parent.type:void 0);const En=x.subTree=Ta(x);g(null,En,D,N,x,U,M),C.el=En.el}if(ze&&vn(ze,U),!Sn&&(ie=fe&&fe.onVnodeMounted)){const En=C;vn(()=>nt(ie,Ee,En),U)}(C.shapeFlag&256||Ee&&Gr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&x.a&&vn(x.a,U),x.isMounted=!0,C=D=N=null}};x.scope.on();const X=x.effect=new rf(Q);x.scope.off();const W=x.update=X.run.bind(X),he=x.job=X.runIfDirty.bind(X);he.i=x,he.id=x.uid,X.scheduler=()=>_l(he),lr(x,!0),W()},P=(x,C,D)=>{C.component=x;const N=x.vnode.props;x.vnode=C,x.next=null,Ng(x,C.props,N,D),Ug(x,C.children,D),Ft(),ma(x),It()},Z=(x,C,D,N,U,M,ne,Q,X=!1)=>{const W=x&&x.children,he=x?x.shapeFlag:0,ie=C.children,{patchFlag:ce,shapeFlag:fe}=C;if(ce>0){if(ce&128){ke(W,ie,D,N,U,M,ne,Q,X);return}else if(ce&256){be(W,ie,D,N,U,M,ne,Q,X);return}}fe&8?(he&16&&$e(W,U,M),ie!==W&&c(D,ie)):he&16?fe&16?ke(W,ie,D,N,U,M,ne,Q,X):$e(W,U,M,!0):(he&8&&c(D,""),fe&16&&E(ie,D,N,U,M,ne,Q,X))},be=(x,C,D,N,U,M,ne,Q,X)=>{x=x||Wr,C=C||Wr;const W=x.length,he=C.length,ie=Math.min(W,he);let ce;for(ce=0;ce<ie;ce++){const fe=C[ce]=X?St(C[ce]):st(C[ce]);g(x[ce],fe,D,null,U,M,ne,Q,X)}W>he?$e(x,U,M,!0,!1,ie):E(C,D,N,U,M,ne,Q,X,ie)},ke=(x,C,D,N,U,M,ne,Q,X)=>{let W=0;const he=C.length;let ie=x.length-1,ce=he-1;for(;W<=ie&&W<=ce;){const fe=x[W],we=C[W]=X?St(C[W]):st(C[W]);if(gr(fe,we))g(fe,we,D,null,U,M,ne,Q,X);else break;W++}for(;W<=ie&&W<=ce;){const fe=x[ie],we=C[ce]=X?St(C[ce]):st(C[ce]);if(gr(fe,we))g(fe,we,D,null,U,M,ne,Q,X);else break;ie--,ce--}if(W>ie){if(W<=ce){const fe=ce+1,we=fe<he?C[fe].el:N;for(;W<=ce;)g(null,C[W]=X?St(C[W]):st(C[W]),D,we,U,M,ne,Q,X),W++}}else if(W>ce)for(;W<=ie;)te(x[W],U,M,!0),W++;else{const fe=W,we=W,ze=new Map;for(W=we;W<=ce;W++){const An=C[W]=X?St(C[W]):st(C[W]);An.key!=null&&ze.set(An.key,W)}let Ee,Ve=0;const Qe=ce-we+1;let Sn=!1,En=0;const Lt=new Array(Qe);for(W=0;W<Qe;W++)Lt[W]=0;for(W=fe;W<=ie;W++){const An=x[W];if(Ve>=Qe){te(An,U,M,!0);continue}let V;if(An.key!=null)V=ze.get(An.key);else for(Ee=we;Ee<=ce;Ee++)if(Lt[Ee-we]===0&&gr(An,C[Ee])){V=Ee;break}V===void 0?te(An,U,M,!0):(Lt[V-we]=W+1,V>=En?En=V:Sn=!0,g(An,C[V],D,null,U,M,ne,Q,X),Ve++)}const xt=Sn?qg(Lt):Wr;for(Ee=xt.length-1,W=Qe-1;W>=0;W--){const An=we+W,V=C[An],se=C[An+1],me=An+1<he?se.el||i0(se):N;Lt[W]===0?g(null,V,D,me,U,M,ne,Q,X):Sn&&(Ee<0||W!==xt[Ee]?ee(V,D,me,2):Ee--)}}},ee=(x,C,D,N,U=null)=>{const{el:M,type:ne,transition:Q,children:X,shapeFlag:W}=x;if(W&6){ee(x.component.subTree,C,D,N);return}if(W&128){x.suspense.move(C,D,N);return}if(W&64){ne.move(x,C,D,ae);return}if(ne===Le){r(M,C,D);for(let ie=0;ie<X.length;ie++)ee(X[ie],C,D,N);r(x.anchor,C,D);return}if(ne===qu){w(x,C,D);return}if(N!==2&&W&1&&Q)if(N===0)Q.persisted&&!M[Kn]?r(M,C,D):(Q.beforeEnter(M),r(M,C,D),vn(()=>Q.enter(M),U));else{const{leave:ie,delayLeave:ce,afterLeave:fe}=Q,we=()=>{x.ctx.isUnmounted?o(M):r(M,C,D)},ze=()=>{const Ee=M._isLeaving||!!M[Kn];M._isLeaving&&M[Kn](!0),Q.persisted&&!Ee?we():ie(M,()=>{we(),fe&&fe()})};ce?ce(M,we,ze):ze()}else r(M,C,D)},te=(x,C,D,N=!1,U=!1)=>{const{type:M,props:ne,ref:Q,children:X,dynamicChildren:W,shapeFlag:he,patchFlag:ie,dirs:ce,cacheIndex:fe,memo:we}=x;if(ie===-2&&(U=!1),Q!=null&&(Ft(),To(Q,null,D,x,!0),It()),fe!=null&&(C.renderCache[fe]=void 0),he&256){C.ctx.deactivate(x);return}const ze=he&1&&ce,Ee=!Gr(x);let Ve;if(Ee&&(Ve=ne&&ne.onVnodeBeforeUnmount)&&nt(Ve,C,x),he&6)ye(x.component,D,N);else{if(he&128){x.suspense.unmount(D,N);return}ze&&sr(x,null,C,"beforeUnmount"),he&64?x.type.remove(x,C,D,ae,N):W&&!W.hasOnce&&(M!==Le||ie>0&&ie&64)?$e(W,C,D,!1,!0):(M===Le&&ie&384||!U&&he&16)&&$e(X,C,D),N&&j(x)}const Qe=we!=null&&fe==null;(Ee&&(Ve=ne&&ne.onVnodeUnmounted)||ze||Qe)&&vn(()=>{Ve&&nt(Ve,C,x),ze&&sr(x,null,C,"unmounted"),Qe&&(x.el=null)},D)},j=x=>{const{type:C,el:D,anchor:N,transition:U}=x;if(C===Le){de(D,N);return}if(C===qu){y(x);return}const M=()=>{o(D),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(x.shapeFlag&1&&U&&!U.persisted){const{leave:ne,delayLeave:Q}=U,X=()=>ne(D,M);Q?Q(x.el,M,X):X()}else M()},de=(x,C)=>{let D;for(;x!==C;)D=f(x),o(x),x=D;o(C)},ye=(x,C,D)=>{const{bum:N,scope:U,job:M,subTree:ne,um:Q,m:X,a:W}=x;Fa(X),Fa(W),N&&Nu(N),U.stop(),M&&(M.flags|=8,te(ne,x,C,D)),Q&&vn(Q,C),vn(()=>{x.isUnmounted=!0},C)},$e=(x,C,D,N=!1,U=!1,M=0)=>{for(let ne=M;ne<x.length;ne++)te(x[ne],C,D,N,U)},B=x=>{if(x.shapeFlag&6)return B(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const C=f(x.anchor||x.el),D=C&&C[Df];return D?f(D):C};let re=!1;const T=(x,C,D)=>{let N;x==null?C._vnode&&(te(C._vnode,null,null,!0),N=C._vnode.component):g(C._vnode||null,x,C,null,null,null,D),C._vnode=x,re||(re=!0,ma(N),Sf(),re=!1)},ae={p:g,um:te,m:ee,r:j,mt:G,mc:E,pc:Z,pbc:F,n:B,o:e};return{render:T,hydrate:void 0,createApp:zg(T)}}function Vu({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function lr({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Vg(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Dl(e,n,t=!1){const r=e.children,o=n.children;if(ge(r)&&ge(o))for(let i=0;i<r.length;i++){const u=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=St(o[i]),s.el=u.el),!t&&s.patchFlag!==-2&&Dl(u,s)),s.type===li&&(s.patchFlag===-1&&(s=o[i]=St(s)),s.el=u.el),s.type===on&&!s.el&&(s.el=u.el)}}function qg(e){const n=e.slice(),t=[0];let r,o,i,u,s;const l=e.length;for(r=0;r<l;r++){const a=e[r];if(a!==0){if(o=t[t.length-1],e[o]<a){n[r]=o,t.push(r);continue}for(i=0,u=t.length-1;i<u;)s=i+u>>1,e[t[s]]<a?i=s+1:u=s;a<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,u=t[i-1];i-- >0;)t[i]=u,u=n[u];return t}function o0(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:o0(n)}function Fa(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function i0(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?i0(n.subTree):null}const u0=e=>e.__isSuspense;function Gg(e,n){n&&n.pendingBranch?ge(e)?n.effects.push(...e):n.effects.push(e):rg(e)}const Le=Symbol.for("v-fgt"),li=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),qu=Symbol.for("v-stc"),zt=[];let Rn=null;function We(e=!1){zt.push(Rn=e?null:[])}function zl(){zt.pop(),Rn=zt[zt.length-1]||null}let jo=1;function Hi(e,n=!1){jo+=e,e<0&&Rn&&n&&(Rn.hasOnce=!0)}function s0(e){return e.dynamicChildren=jo>0?Rn||Wr:null,zl(),jo>0&&Rn&&Rn.push(e),e}function fn(e,n,t,r,o,i){return s0(ue(e,n,t,r,o,i,!0))}function Tr(e,n,t,r,o){return s0(Ce(e,n,t,r,o,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function gr(e,n){return e.type===n.type&&e.key===n.key}const l0=({key:e})=>e??null,Ii=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||Ze(e)||xe(e)?{i:dn,r:e,k:n,f:!!t}:e:null);function ue(e,n=null,t=null,r=0,o=null,i=e===Le?0:1,u=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&l0(n),ref:n&&Ii(n),scopeId:Af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:dn};return s?(Ui(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=je(t)?8:16),jo>0&&!u&&Rn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rn.push(l),l}const Ce=Zg;function Zg(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===Uf)&&(e=on),Qr(e)){const s=$t(e,n,!0);return t&&Ui(s,t),jo>0&&!i&&Rn&&(s.shapeFlag&6?Rn[Rn.indexOf(e)]=s:Rn.push(s)),s.patchFlag=-2,s}if(ub(e)&&(e=e.__vccOpts),n){n=Xg(n);let{class:s,style:l}=n;s&&!je(s)&&(n.class=du(s)),Ae(l)&&(hu(l)&&!ge(l)&&(l=Je({},l)),n.style=oi(l))}const u=je(e)?1:u0(e)?128:zf(e)?64:Ae(e)?4:xe(e)?2:0;return ue(e,n,t,r,o,u,i,!0)}function Xg(e){return e?hu(e)||Jf(e)?Je({},e):e:null}function $t(e,n,t=!1,r=!1){const{props:o,ref:i,patchFlag:u,children:s,transition:l}=e,a=n?Pr(o||{},n):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&l0(a),ref:n&&n.ref?t&&i?ge(i)?i.concat(Ii(n)):[i,Ii(n)]:Ii(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Le?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Ar(c,l.clone(c)),c}function yn(e=" ",n=0){return Ce(li,null,e,n)}function Yg(e="",n=!1){return n?(We(),Tr(on,null,e)):Ce(on,null,e)}function st(e){return e==null||typeof e=="boolean"?Ce(on):ge(e)?Ce(Le,null,e.slice()):Qr(e)?St(e):Ce(li,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Ui(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ge(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),Ui(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!Jf(n)?n._ctx=dn:o===3&&dn&&(dn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(xe(n)){if(r&65){Ui(e,{default:n});return}n={default:n,_ctx:dn},t=32}else n=String(n),r&64?(t=16,n=[yn(n)]):t=8;e.children=n,e.shapeFlag|=t}function Pr(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=du([n.class,r.class]));else if(o==="style")n.style=oi([n.style,r.style]);else if(iu(o)){const i=n[o],u=r[o];u&&i!==u&&!(ge(i)&&i.includes(u))?n[o]=i?[].concat(i,u):u:u==null&&i==null&&!uu(o)&&(n[o]=u)}else o!==""&&(n[o]=r[o])}return n}function nt(e,n,t,r=null){Wn(e,n,7,[t,r])}const Jg=qf();let Qg=0;function eb(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Jg,i={uid:Qg++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e0(r,o),emitsOptions:Gf(r,o),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Ig.bind(null,i),e.ce&&e.ce(i),i}let bn=null;const Rr=()=>bn||dn;let Ki,$s;{const e=cu(),n=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),i=>{o.length>1?o.forEach(u=>u(i)):o[0](i)}};Ki=n("__VUE_INSTANCE_SETTERS__",t=>bn=t),$s=n("__VUE_SSR_SETTERS__",t=>Ho=t)}const ai=e=>{const n=bn;return Ki(e),e.scope.on(),()=>{e.scope.off(),Ki(n)}},Ia=()=>{bn&&bn.scope.off(),Ki(null)};function a0(e){return e.vnode.shapeFlag&4}let Ho=!1;function nb(e,n=!1,t=!1){n&&$s(n);const{props:r,children:o}=e.vnode,i=a0(e);Mg(e,r,i,n),Hg(e,o,t||n);const u=i?tb(e,n):void 0;return n&&$s(!1),u}function tb(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wg);const{setup:r}=t;if(r){Ft();const o=e.setupContext=r.length>1?ob(e):null,i=ai(e),u=ii(r,e,0,[e.props,o]),s=qd(u);if(It(),i(),(s||e.sp)&&!Gr(e)&&Of(e),s){if(u.then(Ia,Ia),n)return u.then(l=>{Pa(e,l)}).catch(l=>{pu(l,e,0)});e.asyncDep=u}else Pa(e,u)}else c0(e)}function Pa(e,n,t){xe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ae(n)&&(e.setupState=Cf(n)),c0(e)}function c0(e,n,t){const r=e.type;e.render||(e.render=r.render||dt);{const o=ai(e);Ft();try{kg(e)}finally{It(),o()}}}const rb={get(e,n){return pn(e,"get",""),e[n]}};function ob(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,rb),slots:e.slots,emit:e.emit,expose:n}}function yu(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Cf(Mo(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Do)return Do[t](e)},has(n,t){return t in n||t in Do}})):e.proxy}function ib(e,n=!0){return xe(e)?e.displayName||e.name:e.name||n&&e.__name}function ub(e){return xe(e)&&"__vccOpts"in e}const R=(e,n)=>J1(e,n,Ho);function A(e,n,t){try{Hi(-1);const r=arguments.length;return r===2?Ae(n)&&!ge(n)?Qr(n)?Ce(e,null,[n]):Ce(e,n):Ce(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Qr(t)&&(t=[t]),Ce(e,n,t))}finally{Hi(1)}}const sb="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Os;const Ra=typeof window<"u"&&window.trustedTypes;if(Ra)try{Os=Ra.createPolicy("vue",{createHTML:e=>e})}catch{}const d0=Os?e=>Os.createHTML(e):e=>e,lb="http://www.w3.org/2000/svg",ab="http://www.w3.org/1998/Math/MathML",kt=typeof document<"u"?document:null,$a=kt&&kt.createElement("template"),cb={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n==="svg"?kt.createElementNS(lb,e):n==="mathml"?kt.createElementNS(ab,e):t?kt.createElement(e,{is:t}):kt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const u=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{$a.innerHTML=d0(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=$a.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Ht="transition",po="animation",eo=Symbol("_vtc"),f0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h0=Je({},If,f0),db=e=>(e.displayName="Transition",e.props=h0,e),Dr=db((e,{slots:n})=>A(hg,p0(e),n)),ar=(e,n=[])=>{ge(e)?e.forEach(t=>t(...n)):e&&e(...n)},Oa=e=>e?ge(e)?e.some(n=>n.length>1):e.length>1:!1;function p0(e){const n={};for(const I in e)I in f0||(n[I]=e[I]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:u=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:a=u,appearToClass:c=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,p=fb(o),g=p&&p[0],b=p&&p[1],{onBeforeEnter:v,onEnter:m,onEnterCancelled:w,onLeave:y,onLeaveCancelled:S,onBeforeAppear:z=v,onAppear:_=m,onAppearCancelled:E=w}=n,k=(I,J,G,$)=>{I._enterCancelled=$,Vt(I,J?c:s),Vt(I,J?a:u),G&&G()},F=(I,J)=>{I._isLeaving=!1,Vt(I,d),Vt(I,h),Vt(I,f),J&&J()},L=I=>(J,G)=>{const $=I?_:m,q=()=>k(J,I,G);ar($,[J,q]),Ba(()=>{Vt(J,I?l:i),ot(J,I?c:s),Oa($)||Ma(J,r,g,q)})};return Je(n,{onBeforeEnter(I){ar(v,[I]),ot(I,i),ot(I,u)},onBeforeAppear(I){ar(z,[I]),ot(I,l),ot(I,a)},onEnter:L(!1),onAppear:L(!0),onLeave(I,J){I._isLeaving=!0;const G=()=>F(I,J);ot(I,d),I._enterCancelled?(ot(I,f),Bs(I)):(Bs(I),ot(I,f)),Ba(()=>{I._isLeaving&&(Vt(I,d),ot(I,h),Oa(y)||Ma(I,r,b,G))}),ar(y,[I,G])},onEnterCancelled(I){k(I,!1,void 0,!0),ar(w,[I])},onAppearCancelled(I){k(I,!0,void 0,!0),ar(E,[I])},onLeaveCancelled(I){F(I),ar(S,[I])}})}function fb(e){if(e==null)return null;if(Ae(e))return[Gu(e.enter),Gu(e.leave)];{const n=Gu(e);return[n,n]}}function Gu(e){return v1(e)}function ot(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[eo]||(e[eo]=new Set)).add(n)}function Vt(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[eo];t&&(t.delete(n),t.size||(e[eo]=void 0))}function Ba(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let hb=0;function Ma(e,n,t,r){const o=e._endId=++hb,i=()=>{o===e._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:u,timeout:s,propCount:l}=g0(e,n);if(!u)return r();const a=u+"end";let c=0;const d=()=>{e.removeEventListener(a,f),i()},f=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(a,f)}function g0(e,n){const t=window.getComputedStyle(e),r=p=>(t[p]||"").split(", "),o=r(`${Ht}Delay`),i=r(`${Ht}Duration`),u=Na(o,i),s=r(`${po}Delay`),l=r(`${po}Duration`),a=Na(s,l);let c=null,d=0,f=0;n===Ht?u>0&&(c=Ht,d=u,f=i.length):n===po?a>0&&(c=po,d=a,f=l.length):(d=Math.max(u,a),c=d>0?u>a?Ht:po:null,f=c?c===Ht?i.length:l.length:0);const h=c===Ht&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ht}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function Na(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>La(t)+La(e[r])))}function La(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bs(e){return(e?e.ownerDocument:document).body.offsetHeight}function pb(e,n,t){const r=e[eo];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Wi=Symbol("_vod"),Fl=Symbol("_vsh"),gb={name:"show",beforeMount(e,{value:n},{transition:t}){e[Wi]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):go(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),go(e,!0),r.enter(e)):r.leave(e,()=>{go(e,!1)}):go(e,n))},beforeUnmount(e,{value:n}){go(e,n)}};function go(e,n){e.style.display=n?e[Wi]:"none",e[Fl]=!n}const bb=Symbol(""),mb=/(?:^|;)\s*display\s*:/;function vb(e,n,t){const r=e.style,o=je(t);let i=!1;if(t&&!o){if(n)if(je(n))for(const u of n.split(";")){const s=u.slice(0,u.indexOf(":")).trim();t[s]==null&&_o(r,s,"")}else for(const u in n)t[u]==null&&_o(r,u,"");for(const u in t){u==="display"&&(i=!0);const s=t[u];s!=null?yb(e,u,!je(n)&&n?n[u]:void 0,s)||_o(r,u,s):_o(r,u,"")}}else if(o){if(n!==t){const u=r[bb];u&&(t+=";"+u),r.cssText=t,i=mb.test(t)}}else n&&e.removeAttribute("style");Wi in e&&(e[Wi]=i?r.display:"",e[Fl]&&(r.display="none"))}const ja=/\s*!important$/;function _o(e,n,t){if(ge(t))t.forEach(r=>_o(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=xb(e,n);ja.test(t)?e.setProperty(Ir(r),t.replace(ja,""),"important"):e[r]=t}}const Ha=["Webkit","Moz","ms"],Zu={};function xb(e,n){const t=Zu[n];if(t)return t;let r=wn(n);if(r!=="filter"&&r in e)return Zu[n]=r;r=au(r);for(let o=0;o<Ha.length;o++){const i=Ha[o]+r;if(i in e)return Zu[n]=i}return n}function yb(e,n,t,r){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&je(r)&&t===r}const Ua="http://www.w3.org/1999/xlink";function Ka(e,n,t,r,o,i=k1(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ua,n.slice(6,n.length)):e.setAttributeNS(Ua,n,t):t==null||i&&!Yd(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Bn(t)?String(t):t)}function Wa(e,n,t,r,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?d0(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(s!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let u=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Yd(t):t==null&&s==="string"?(t="",u=!0):s==="number"&&(t=0,u=!0)}try{e[n]=t}catch{}u&&e.removeAttribute(o||n)}function Cb(e,n,t,r){e.addEventListener(n,t,r)}function _b(e,n,t,r){e.removeEventListener(n,t,r)}const Va=Symbol("_vei");function wb(e,n,t,r,o=null){const i=e[Va]||(e[Va]={}),u=i[n];if(r&&u)u.value=r;else{const[s,l]=Eb(n);if(r){const a=i[n]=Db(r,o);Cb(e,s,a,l)}else u&&(_b(e,s,u,l),i[n]=void 0)}}const kb=/(Once|Passive|Capture)$/,Sb=/^on:?(?:Once|Passive|Capture)$/;function Eb(e){let n,t;for(;(t=e.match(kb))&&!Sb.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ir(e.slice(2)),n]}let Xu=0;const Ab=Promise.resolve(),Tb=()=>Xu||(Ab.then(()=>Xu=0),Xu=Date.now());function Db(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const o=t.value;if(ge(o)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const u=o.slice(),s=[r];for(let l=0;l<u.length&&!r._stopped;l++){const a=u[l];a&&Wn(a,n,5,s)}}else Wn(o,n,5,[r])};return t.value=e,t.attached=Tb(),t}const qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zb=(e,n,t,r,o,i)=>{const u=o==="svg";n==="class"?pb(e,r,u):n==="style"?vb(e,t,r):iu(n)?uu(n)||wb(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Fb(e,n,r,u))?(Wa(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Ka(e,n,r,u,i,n!=="value")):e._isVueCE&&(Ib(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!je(r)))?Wa(e,wn(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Ka(e,n,r,u))};function Fb(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&qa(n)&&xe(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return qa(n)&&je(t)?!1:n in e}function Ib(e,n){const t=e._def.props;if(!t)return!1;const r=wn(n);return Array.isArray(t)?t.some(o=>wn(o)===r):Object.keys(t).some(o=>wn(o)===r)}const b0=new WeakMap,m0=new WeakMap,Vi=Symbol("_moveCb"),Ga=Symbol("_enterCb"),Pb=e=>(delete e.props.mode,e),Rb=Pb({name:"TransitionGroup",props:Je({},h0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Rr(),r=Ff();let o,i;return Lf(()=>{if(!o.length)return;const u=e.moveClass||`${e.name||"v"}-move`;if(!Nb(o[0].el,t.vnode.el,u)){o=[];return}o.forEach(Ob),o.forEach(Bb);const s=o.filter(Mb);Bs(t.vnode.el),s.forEach(l=>{const a=l.el,c=a.style;ot(a,u),c.transform=c.webkitTransform=c.transitionDuration="";const d=a[Vi]=f=>{f&&f.target!==a||(!f||f.propertyName.endsWith("transform"))&&(a.removeEventListener("transitionend",d),a[Vi]=null,Vt(a,u))};a.addEventListener("transitionend",d)}),o=[]}),()=>{const u=Se(e),s=p0(u);let l=u.tag||Le;if(o=[],i)for(let a=0;a<i.length;a++){const c=i[a];c.el&&c.el instanceof Element&&!c.el[Fl]&&(o.push(c),Ar(c,Lo(c,s,r,t)),b0.set(c,v0(c.el)))}i=n.default?kl(n.default()):[];for(let a=0;a<i.length;a++){const c=i[a];c.key!=null&&Ar(c,Lo(c,s,r,t))}return Ce(l,null,i)}}}),$b=Rb;function Ob(e){const n=e.el;n[Vi]&&n[Vi](),n[Ga]&&n[Ga]()}function Bb(e){m0.set(e,v0(e.el))}function Mb(e){const n=b0.get(e),t=m0.get(e),r=n.left-t.left,o=n.top-t.top;if(r||o){const i=e.el,u=i.style,s=i.getBoundingClientRect();let l=1,a=1;return i.offsetWidth&&(l=s.width/i.offsetWidth),i.offsetHeight&&(a=s.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(a)||a===0)&&(a=1),Math.abs(l-1)<.01&&(l=1),Math.abs(a-1)<.01&&(a=1),u.transform=u.webkitTransform=`translate(${r/l}px,${o/a}px)`,u.transitionDuration="0s",e}}function v0(e){const n=e.getBoundingClientRect();return{left:n.left,top:n.top}}function Nb(e,n,t){const r=e.cloneNode(),o=e[eo];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:u}=g0(r);return i.removeChild(r),u}const Lb=["ctrl","shift","alt","meta"],jb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Lb.some(t=>e[`${t}Key`]&&!n.includes(t))},Q7=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(o,...i)=>{for(let u=0;u<n.length;u++){const s=jb[n[u]];if(s&&s(o,n))return}return e(o,...i)})},Hb=Je({patchProp:zb},cb);let Za;function Ub(){return Za||(Za=Kg(Hb))}const Kb=(...e)=>{const n=Ub().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=Vb(r);if(!o)return;const i=n._component;!xe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const u=t(o,!1,Wb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),u},n};function Wb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vb(e){return je(e)?document.querySelector(e):e}function qb(e){let n=".",t="__",r="--",o;if(e){let p=e.blockPrefix;p&&(n=p),p=e.elementPrefix,p&&(t=p),p=e.modifierPrefix,p&&(r=p)}const i={install(p){o=p.c;const g=p.context;g.bem={},g.bem.b=null,g.bem.els=null}};function u(p){let g,b;return{before(v){g=v.bem.b,b=v.bem.els,v.bem.els=null},after(v){v.bem.b=g,v.bem.els=b},$({context:v,props:m}){return p=typeof p=="string"?p:p({context:v,props:m}),v.bem.b=p,`${(m==null?void 0:m.bPrefix)||n}${v.bem.b}`}}}function s(p){let g;return{before(b){g=b.bem.els},after(b){b.bem.els=g},$({context:b,props:v}){return p=typeof p=="string"?p:p({context:b,props:v}),b.bem.els=p.split(",").map(m=>m.trim()),b.bem.els.map(m=>`${(v==null?void 0:v.bPrefix)||n}${b.bem.b}${t}${m}`).join(", ")}}}function l(p){return{$({context:g,props:b}){p=typeof p=="string"?p:p({context:g,props:b});const v=p.split(",").map(y=>y.trim());function m(y){return v.map(S=>`&${(b==null?void 0:b.bPrefix)||n}${g.bem.b}${y!==void 0?`${t}${y}`:""}${r}${S}`).join(", ")}const w=g.bem.els;return w!==null?m(w[0]):m()}}}function a(p){return{$({context:g,props:b}){p=typeof p=="string"?p:p({context:g,props:b});const v=g.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||n}${g.bem.b}${v!==null&&v.length>0?`${t}${v[0]}`:""}${r}${p})`}}}return Object.assign(i,{cB:(...p)=>o(u(p[0]),p[1],p[2]),cE:(...p)=>o(s(p[0]),p[1],p[2]),cM:(...p)=>o(l(p[0]),p[1],p[2]),cNotM:(...p)=>o(a(p[0]),p[1],p[2])}),i}function Gb(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const x0=/\s*,(?![^(]*\))\s*/g,Zb=/\s+/g;function Xb(e,n){const t=[];return n.split(x0).forEach(r=>{let o=Gb(r);if(o){if(o===1){e.forEach(u=>{t.push(r.replace("&",u))});return}}else{e.forEach(u=>{t.push((u&&u+" ")+r)});return}let i=[r];for(;o--;){const u=[];i.forEach(s=>{e.forEach(l=>{u.push(s.replace("&",l))})}),i=u}i.forEach(u=>t.push(u))}),t}function Yb(e,n){const t=[];return n.split(x0).forEach(r=>{e.forEach(o=>{t.push((o&&o+" ")+r)})}),t}function Jb(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Xb(n,t):n=Yb(n,t))}),n.join(", ").replace(Zb," ")}function Xa(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function Cu(e,n){return(n??document.head).querySelector(`style[cssr-id="${e}"]`)}function Qb(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function Ci(e){return e?/^\s*@(s|m)/.test(e):!1}const em=/[A-Z]/g;function y0(e){return e.replace(em,n=>"-"+n.toLowerCase())}function nm(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${y0(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function tm(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Ya(e,n,t,r){if(!n)return"";const o=tm(n,t,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const u=e?[e+" {"]:[];return i.forEach(s=>{const l=o[s];if(s==="raw"){u.push(`
`+l+`
`);return}s=y0(s),l!=null&&u.push(`  ${s}${nm(l)}`)}),e&&u.push("}"),u.join(`
`)}function Ms(e,n,t){e&&e.forEach(r=>{if(Array.isArray(r))Ms(r,n,t);else if(typeof r=="function"){const o=r(n);Array.isArray(o)?Ms(o,n,t):o&&t(o)}else r&&t(r)})}function C0(e,n,t,r,o){const i=e.$;let u="";if(!i||typeof i=="string")Ci(i)?u=i:n.push(i);else if(typeof i=="function"){const a=i({context:r.context,props:o});Ci(a)?u=a:n.push(a)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")Ci(i.$)?u=i.$:n.push(i.$);else if(i.$){const a=i.$({context:r.context,props:o});Ci(a)?u=a:n.push(a)}const s=Jb(n),l=Ya(s,e.props,r,o);u?t.push(`${u} {`):l.length&&t.push(l),e.children&&Ms(e.children,{context:r.context,props:o},a=>{if(typeof a=="string"){const c=Ya(s,{raw:a},r,o);t.push(c)}else C0(a,n,t,r,o)}),n.pop(),u&&t.push("}"),i&&i.after&&i.after(r.context)}function rm(e,n,t){const r=[];return C0(e,[],r,n,t),r.join(`

`)}function Uo(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function om(e,n,t,r){const{els:o}=n;if(t===void 0)o.forEach(Xa),n.els=[];else{const i=Cu(t,r);i&&o.includes(i)&&(Xa(i),n.els=o.filter(u=>u!==i))}}function Ja(e,n){e.push(n)}function im(e,n,t,r,o,i,u,s,l){let a;if(t===void 0&&(a=n.render(r),t=Uo(a)),l){l.adapter(t,a??n.render(r));return}s===void 0&&(s=document.head);const c=Cu(t,s);if(c!==null&&!i)return c;const d=c??Qb(t);if(a===void 0&&(a=n.render(r)),d.textContent=a,c!==null)return c;if(u){const f=s.querySelector(`meta[name="${u}"]`);if(f)return s.insertBefore(d,f),Ja(n.els,d),d}return o?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),Ja(n.els,d),d}function um(e){return rm(this,this.instance,e)}function sm(e={}){const{id:n,ssr:t,props:r,head:o=!1,force:i=!1,anchorMetaName:u,parent:s}=e;return im(this.instance,this,n,r,o,i,u,s,t)}function lm(e={}){const{id:n,parent:t}=e;om(this.instance,this,n,t)}const _i=function(e,n,t,r){return{instance:e,$:n,props:t,children:r,els:[],render:um,mount:sm,unmount:lm}},am=function(e,n,t,r){return Array.isArray(n)?_i(e,{$:null},null,n):Array.isArray(t)?_i(e,n,null,t):Array.isArray(r)?_i(e,n,t,r):_i(e,n,t,null)};function _0(e={}){const n={c:(...t)=>am(n,...t),use:(t,...r)=>t.install(n,...r),find:Cu,context:{},config:e};return n}function cm(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return Cu(e)!==null}const dm="n",Ko=`.${dm}-`,fm="__",hm="--",w0=_0(),k0=qb({blockPrefix:Ko,elementPrefix:fm,modifierPrefix:hm});w0.use(k0);const{c:O,find:e9}=w0,{cB:H,cE:K,cM:Y,cNotM:ln}=k0;function S0(e){return O(({props:{bPrefix:n}})=>`${n||Ko}modal, ${n||Ko}drawer`,[e])}function E0(e){return O(({props:{bPrefix:n}})=>`${n||Ko}popover`,[e])}function pm(e){return O(({props:{bPrefix:n}})=>`&${n||Ko}modal`,e)}const gm=(...e)=>O(">",[H(...e)]);function Ie(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}let qi=[];const A0=new WeakMap;function bm(){qi.forEach(e=>e(...A0.get(e))),qi=[]}function mm(e,...n){A0.set(e,n),!qi.includes(e)&&qi.push(e)===1&&requestAnimationFrame(bm)}function Qa(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Gi(e){return e.composedPath()[0]||null}function ec(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function vm(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function br(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}const nc={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function xm(e,n,t){n/=100,t/=100;let r=(o,i=(o+e/60)%6)=>t-t*n*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function ym(e,n,t){n/=100,t/=100;let r=n*Math.min(t,1-t),o=(i,u=(i+e/30)%12)=>t-r*Math.max(Math.min(u-3,9-u,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}const pt="^\\s*",gt="\\s*$",nr="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",$n="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",mr="([0-9A-Fa-f])",vr="([0-9A-Fa-f]{2})",T0=new RegExp(`${pt}hsl\\s*\\(${$n},${nr},${nr}\\)${gt}`),D0=new RegExp(`${pt}hsv\\s*\\(${$n},${nr},${nr}\\)${gt}`),z0=new RegExp(`${pt}hsla\\s*\\(${$n},${nr},${nr},${$n}\\)${gt}`),F0=new RegExp(`${pt}hsva\\s*\\(${$n},${nr},${nr},${$n}\\)${gt}`),Cm=new RegExp(`${pt}rgb\\s*\\(${$n},${$n},${$n}\\)${gt}`),_m=new RegExp(`${pt}rgba\\s*\\(${$n},${$n},${$n},${$n}\\)${gt}`),wm=new RegExp(`${pt}#${mr}${mr}${mr}${gt}`),km=new RegExp(`${pt}#${vr}${vr}${vr}${gt}`),Sm=new RegExp(`${pt}#${mr}${mr}${mr}${mr}${gt}`),Em=new RegExp(`${pt}#${vr}${vr}${vr}${vr}${gt}`);function Dn(e){return parseInt(e,16)}function Am(e){try{let n;if(n=z0.exec(e))return[Zi(n[1]),Jt(n[5]),Jt(n[9]),wr(n[13])];if(n=T0.exec(e))return[Zi(n[1]),Jt(n[5]),Jt(n[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(n){throw n}}function Tm(e){try{let n;if(n=F0.exec(e))return[Zi(n[1]),Jt(n[5]),Jt(n[9]),wr(n[13])];if(n=D0.exec(e))return[Zi(n[1]),Jt(n[5]),Jt(n[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(n){throw n}}function zr(e){try{let n;if(n=km.exec(e))return[Dn(n[1]),Dn(n[2]),Dn(n[3]),1];if(n=Cm.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),1];if(n=_m.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),wr(n[13])];if(n=wm.exec(e))return[Dn(n[1]+n[1]),Dn(n[2]+n[2]),Dn(n[3]+n[3]),1];if(n=Em.exec(e))return[Dn(n[1]),Dn(n[2]),Dn(n[3]),wr(Dn(n[4])/255)];if(n=Sm.exec(e))return[Dn(n[1]+n[1]),Dn(n[2]+n[2]),Dn(n[3]+n[3]),wr(Dn(n[4]+n[4])/255)];if(e in nc)return zr(nc[e]);if(T0.test(e)||z0.test(e)){const[t,r,o,i]=Am(e);return[...ym(t,r,o),i]}else if(D0.test(e)||F0.test(e)){const[t,r,o,i]=Tm(e);return[...xm(t,r,o),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function Dm(e){return e>1?1:e<0?0:e}function Ns(e,n,t,r){return`rgba(${gn(e)}, ${gn(n)}, ${gn(t)}, ${Dm(r)})`}function Yu(e,n,t,r,o){return gn((e*n*(1-r)+t*r)/o)}function _r(e,n){Array.isArray(e)||(e=zr(e)),Array.isArray(n)||(n=zr(n));const t=e[3],r=n[3],o=wr(t+r-t*r);return Ns(Yu(e[0],t,n[0],r,o),Yu(e[1],t,n[1],r,o),Yu(e[2],t,n[2],r,o),o)}function Fe(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:zr(e);return typeof n.alpha=="number"?Ns(t,r,o,n.alpha):Ns(t,r,o,i)}function wi(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:zr(e),{lightness:u=1,alpha:s=1}=n;return zm([t*u,r*u,o*u,i*s])}function wr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Zi(e){const n=Math.round(Number(e));return n>=360||n<0?0:n}function gn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function Jt(e){const n=Math.round(Number(e));return n>100?100:n<0?0:n}function zm(e){const[n,t,r]=e;return 3 in e?`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, ${wr(e[3])})`:`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, 1)`}function I0(e=8){return Math.random().toString(16).slice(2,2+e)}function Pi(e){return e.composedPath()[0]}const Fm={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Im(e,n,t){if(e==="mousemoveoutside"){const r=o=>{n.contains(Pi(o))||t(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=u=>{r=!n.contains(Pi(u))},i=u=>{r&&(n.contains(Pi(u))||t(u))};return{mousedown:o,mouseup:i,touchstart:o,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function P0(e,n,t){const r=Fm[e];let o=r.get(n);o===void 0&&r.set(n,o=new WeakMap);let i=o.get(t);return i===void 0&&o.set(t,i=Im(e,n,t)),i}function Pm(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=P0(e,n,t);return Object.keys(o).forEach(i=>{un(i,document,o[i],r)}),!0}return!1}function Rm(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=P0(e,n,t);return Object.keys(o).forEach(i=>{Ge(i,document,o[i],r)}),!0}return!1}function $m(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function r(){e.set(this,!0),n.set(this,!0)}function o(_,E,k){const F=_[E];return _[E]=function(){return k.apply(_,arguments),F.apply(_,arguments)},_}function i(_,E){_[E]=Event.prototype[E]}const u=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var _;return(_=u.get(this))!==null&&_!==void 0?_:null}function a(_,E){s!==void 0&&Object.defineProperty(_,"currentTarget",{configurable:!0,enumerable:!0,get:E??s.get})}const c={bubble:{},capture:{}},d={};function f(){const _=function(E){const{type:k,eventPhase:F,bubbles:L}=E,I=Pi(E);if(F===2)return;const J=F===1?"capture":"bubble";let G=I;const $=[];for(;G===null&&(G=window),$.push(G),G!==window;)G=G.parentNode||null;const q=c.capture[k],P=c.bubble[k];if(o(E,"stopPropagation",t),o(E,"stopImmediatePropagation",r),a(E,l),J==="capture"){if(q===void 0)return;for(let Z=$.length-1;Z>=0&&!e.has(E);--Z){const be=$[Z],ke=q.get(be);if(ke!==void 0){u.set(E,be);for(const ee of ke){if(n.has(E))break;ee(E)}}if(Z===0&&!L&&P!==void 0){const ee=P.get(be);if(ee!==void 0)for(const te of ee){if(n.has(E))break;te(E)}}}}else if(J==="bubble"){if(P===void 0)return;for(let Z=0;Z<$.length&&!e.has(E);++Z){const be=$[Z],ke=P.get(be);if(ke!==void 0){u.set(E,be);for(const ee of ke){if(n.has(E))break;ee(E)}}}}i(E,"stopPropagation"),i(E,"stopImmediatePropagation"),a(E)};return _.displayName="evtdUnifiedHandler",_}function h(){const _=function(E){const{type:k,eventPhase:F}=E;if(F!==2)return;const L=d[k];L!==void 0&&L.forEach(I=>I(E))};return _.displayName="evtdUnifiedWindowEventHandler",_}const p=f(),g=h();function b(_,E){const k=c[_];return k[E]===void 0&&(k[E]=new Map,window.addEventListener(E,p,_==="capture")),k[E]}function v(_){return d[_]===void 0&&(d[_]=new Set,window.addEventListener(_,g)),d[_]}function m(_,E){let k=_.get(E);return k===void 0&&_.set(E,k=new Set),k}function w(_,E,k,F){const L=c[E][k];if(L!==void 0){const I=L.get(_);if(I!==void 0&&I.has(F))return!0}return!1}function y(_,E){const k=d[_];return!!(k!==void 0&&k.has(E))}function S(_,E,k,F){let L;if(typeof F=="object"&&F.once===!0?L=q=>{z(_,E,L,F),k(q)}:L=k,Pm(_,E,L,F))return;const J=F===!0||typeof F=="object"&&F.capture===!0?"capture":"bubble",G=b(J,_),$=m(G,E);if($.has(L)||$.add(L),E===window){const q=v(_);q.has(L)||q.add(L)}}function z(_,E,k,F){if(Rm(_,E,k,F))return;const I=F===!0||typeof F=="object"&&F.capture===!0,J=I?"capture":"bubble",G=b(J,_),$=m(G,E);if(E===window&&!w(E,I?"bubble":"capture",_,k)&&y(_,k)){const P=d[_];P.delete(k),P.size===0&&(window.removeEventListener(_,g),d[_]=void 0)}$.has(k)&&$.delete(k),$.size===0&&G.delete(E),G.size===0&&(window.removeEventListener(_,p,J==="capture"),c[J][_]=void 0)}return{on:S,off:z}}const{on:un,off:Ge}=$m();function Om(e){const n=oe(!!e.value);if(n.value)return Er(n);const t=cn(e,r=>{r&&(n.value=!0,t())});return Er(n)}function Fn(e){const n=R(e),t=oe(n.value);return cn(n,r=>{t.value=r}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(r){e.set(r)}}}function Bm(){return Rr()!==null}const Mm=typeof window<"u";let Zr,zo;const Nm=()=>{var e,n;Zr=Mm?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,zo=!1,Zr!==void 0?Zr.then(()=>{zo=!0}):zo=!0};Nm();function Lm(e){if(zo)return;let n=!1;Ln(()=>{zo||Zr==null||Zr.then(()=>{n||e()})}),qn(()=>{n=!0})}function Wo(e,n){return cn(e,t=>{t!==void 0&&(n.value=t)}),R(()=>e.value===void 0?n.value:e.value)}function R0(){const e=oe(!1);return Ln(()=>{e.value=!0}),Er(e)}function $0(e,n){return R(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const jm=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Hm(){return jm}function Um(e={},n){const t=uo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(a=>{if(a!==l.key)return;const c=r[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},u=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(a=>{if(a!==l.key)return;const c=o[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},s=()=>{(n===void 0||n.value)&&(un("keydown",document,i),un("keyup",document,u)),n!==void 0&&cn(n,l=>{l?(un("keydown",document,i),un("keyup",document,u)):(Ge("keydown",document,i),Ge("keyup",document,u))})};return Bm()?(si(s),qn(()=>{(n===void 0||n.value)&&(Ge("keydown",document,i),Ge("keyup",document,u))})):s(),Er(t)}function n9(e){return e}const t9="n-internal-select-menu",Km="n-internal-select-menu-body",Il="n-drawer-body",Pl="n-modal-body",_u="n-popover-body",O0="__disabled__";function no(e){const n=ve(Pl,null),t=ve(Il,null),r=ve(_u,null),o=ve(Km,null),i=oe();if(typeof document<"u"){i.value=document.fullscreenElement;const u=()=>{i.value=document.fullscreenElement};Ln(()=>{un("fullscreenchange",document,u)}),qn(()=>{Ge("fullscreenchange",document,u)})}return Fn(()=>{var u;const{to:s}=e;return s!==void 0?s===!1?O0:s===!0?i.value||"body":s:n!=null&&n.value?(u=n.value.$el)!==null&&u!==void 0?u:n.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:s??(i.value||"body")})}no.tdkey=O0;no.propTo={type:[String,Object,Boolean],default:void 0};function Wm(e,n,t){const r=oe(e.value);let o=null;return cn(e,i=>{o!==null&&window.clearTimeout(o),i===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const B0=typeof document<"u"&&typeof window<"u";let tc=!1;function Vm(){if(B0&&window.CSS&&!tc&&(tc=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Rl(e){const n={isDeactivated:!1};let t=!1;return Bf(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Mf(()=>{n.isDeactivated=!0,t||(t=!0)}),n}function Ls(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return r()}function js(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){js(r,n,t);return}if(r.type===Le){if(r.children===null)return;Array.isArray(r.children)&&js(r.children,n,t)}else r.type!==on&&t.push(r)}}),t}function rc(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const o=js(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Ut=null;function M0(){if(Ut===null&&(Ut=document.getElementById("v-binder-view-measurer"),Ut===null)){Ut=document.createElement("div"),Ut.id="v-binder-view-measurer";const{style:e}=Ut;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Ut)}return Ut.getBoundingClientRect()}function qm(e,n){const t=M0();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function Ju(e){const n=e.getBoundingClientRect(),t=M0();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Gm(e){return e.nodeType===9?null:e.parentNode}function N0(e){if(e===null)return null;const n=Gm(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:r,overflowY:o}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+o+r))return n}return N0(n)}const L0=le({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;Ke("VBinder",(n=Rr())===null||n===void 0?void 0:n.proxy);const t=ve("VBinder",null),r=oe(null),o=v=>{r.value=v,t&&e.syncTargetWithParent&&t.setTargetRef(v)};let i=[];const u=()=>{let v=r.value;for(;v=N0(v),v!==null;)i.push(v);for(const m of i)un("scroll",m,d,!0)},s=()=>{for(const v of i)Ge("scroll",v,d,!0);i=[]},l=new Set,a=v=>{l.size===0&&u(),l.has(v)||l.add(v)},c=v=>{l.has(v)&&l.delete(v),l.size===0&&s()},d=()=>{mm(f)},f=()=>{l.forEach(v=>v())},h=new Set,p=v=>{h.size===0&&un("resize",window,b),h.has(v)||h.add(v)},g=v=>{h.has(v)&&h.delete(v),h.size===0&&Ge("resize",window,b)},b=()=>{h.forEach(v=>v())};return qn(()=>{Ge("resize",window,b),s()}),{targetRef:r,setTargetRef:o,addScrollListener:a,removeScrollListener:c,addResizeListener:p,removeResizeListener:g}},render(){return Ls("binder",this.$slots)}}),j0=le({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=ve("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?gu(rc("follower",this.$slots),[[n]]):rc("follower",this.$slots)}}),Nr="@@mmoContext",Zm={mounted(e,{value:n}){e[Nr]={handler:void 0},typeof n=="function"&&(e[Nr].handler=n,un("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Nr];typeof n=="function"?t.handler?t.handler!==n&&(Ge("mousemoveoutside",e,t.handler),t.handler=n,un("mousemoveoutside",e,n)):(e[Nr].handler=n,un("mousemoveoutside",e,n)):t.handler&&(Ge("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Nr];n&&Ge("mousemoveoutside",e,n),e[Nr].handler=void 0}},Lr="@@coContext",oc={mounted(e,{value:n,modifiers:t}){e[Lr]={handler:void 0},typeof n=="function"&&(e[Lr].handler=n,un("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const r=e[Lr];typeof n=="function"?r.handler?r.handler!==n&&(Ge("clickoutside",e,r.handler,{capture:t.capture}),r.handler=n,un("clickoutside",e,n,{capture:t.capture})):(e[Lr].handler=n,un("clickoutside",e,n,{capture:t.capture})):r.handler&&(Ge("clickoutside",e,r.handler,{capture:t.capture}),r.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[Lr];t&&Ge("clickoutside",e,t,{capture:n.capture}),e[Lr].handler=void 0}};function Xm(e,n){console.error(`[vdirs/${e}]: ${n}`)}class Ym{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:r}=this;if(t!==void 0){n.style.zIndex=`${t}`,r.delete(n);return}const{nextZIndex:o}=this;r.has(n)&&r.get(n)+1===this.nextZIndex||(n.style.zIndex=`${o}`,r.set(n,o),this.nextZIndex=o+1,this.squashState())}unregister(n,t){const{elementZIndex:r}=this;r.has(n)?r.delete(n):t===void 0&&Xm("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,r)=>t[1]-r[1]),this.nextZIndex=2e3,n.forEach(t=>{const r=t[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}const Qu=new Ym,jr="@@ziContext",H0={mounted(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t;e[jr]={enabled:!!o,initialized:!1},o&&(Qu.ensureZIndex(e,r),e[jr].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t,i=e[jr].enabled;o&&!i&&(Qu.ensureZIndex(e,r),e[jr].initialized=!0),e[jr].enabled=!!o},unmounted(e,n){if(!e[jr].initialized)return;const{value:t={}}=n,{zIndex:r}=t;Qu.unregister(e,r)}},Jm="@css-render/vue3-ssr";function Qm(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function ev(e,n,t){const{styles:r,ids:o}=t;o.has(e)||r!==null&&(o.add(e),r.push(Qm(e,n)))}const nv=typeof document<"u";function so(){if(nv)return;const e=ve(Jm,null);if(e!==null)return{adapter:(n,t)=>ev(n,t,e),context:e}}function ic(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:wo}=_0(),U0="vueuc-style";function uc(e){return typeof e=="string"?document.querySelector(e):e()||null}const tv=le({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Om(He(e,"show")),mergedTo:R(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?Ls("lazy-teleport",this.$slots):A(dg,{disabled:this.disabled,to:this.mergedTo},Ls("lazy-teleport",this.$slots)):null}}),ki={top:"bottom",bottom:"top",left:"right",right:"left"},sc={start:"end",center:"center",end:"start"},es={top:"height",bottom:"height",left:"width",right:"width"},rv={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},ov={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},iv={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},lc={top:!0,bottom:!1,left:!0,right:!1},ac={top:"end",bottom:"start",left:"end",right:"start"};function uv(e,n,t,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[u,s]=e.split("-");let l=s??"center",a={top:0,left:0};const c=(h,p,g)=>{let b=0,v=0;const m=t[h]-n[p]-n[h];return m>0&&r&&(g?v=lc[p]?m:-m:b=lc[p]?m:-m),{left:b,top:v}},d=u==="left"||u==="right";if(l!=="center"){const h=iv[e],p=ki[h],g=es[h];if(t[g]>n[g]){if(n[h]+n[g]<t[g]){const b=(t[g]-n[g])/2;n[h]<b||n[p]<b?n[h]<n[p]?(l=sc[s],a=c(g,p,d)):a=c(g,h,d):l="center"}}else t[g]<n[g]&&n[p]<0&&n[h]>n[p]&&(l=sc[s])}else{const h=u==="bottom"||u==="top"?"left":"top",p=ki[h],g=es[h],b=(t[g]-n[g])/2;(n[h]<b||n[p]<b)&&(n[h]>n[p]?(l=ac[h],a=c(g,h,d)):(l=ac[p],a=c(g,p,d)))}let f=u;return n[u]<t[es[u]]&&n[u]<n[ki[u]]&&(f=ki[u]),{placement:l!=="center"?`${f}-${l}`:f,left:a.left,top:a.top}}function sv(e,n){return n?ov[e]:rv[e]}function lv(e,n,t,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const av=wo([wo(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),wo(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[wo("> *",{pointerEvents:"all"})])]),K0=le({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=ve("VBinder"),t=Fn(()=>e.enabled!==void 0?e.enabled:e.show),r=oe(null),o=oe(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&n.addScrollListener(l),f.includes("resize")&&n.addResizeListener(l)},u=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Ln(()=>{t.value&&(l(),i())});const s=so();av.mount({id:"vueuc/binder",head:!0,anchorMetaName:U0,ssr:s}),qn(()=>{u()}),Lm(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const f=r.value;if(f===null)return;const h=n.targetRef,{x:p,y:g,overlap:b}=e,v=p!==void 0&&g!==void 0?qm(p,g):Ju(h);f.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:m,minWidth:w,placement:y,internalShift:S,flip:z}=e;f.setAttribute("v-placement",y),b?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:_}=f;m==="target"?_.width=`${v.width}px`:m!==void 0?_.width=m:_.width="",w==="target"?_.minWidth=`${v.width}px`:w!==void 0?_.minWidth=w:_.minWidth="";const E=Ju(f),k=Ju(o.value),{left:F,top:L,placement:I}=uv(y,v,E,S,z,b),J=sv(I,b),{left:G,top:$,transform:q}=lv(I,k,v,L,F,b);f.setAttribute("v-placement",I),f.style.setProperty("--v-offset-left",`${Math.round(F)}px`),f.style.setProperty("--v-offset-top",`${Math.round(L)}px`),f.style.transform=`translateX(${G}) translateY(${$}) ${q}`,f.style.setProperty("--v-transform-origin",J),f.style.transformOrigin=J};cn(t,f=>{f?(i(),a()):u()});const a=()=>{ui().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{cn(He(e,f),l)}),["teleportDisabled"].forEach(f=>{cn(He(e,f),a)}),cn(He(e,"syncTrigger"),f=>{f.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),f.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const c=R0(),d=Fn(()=>{const{to:f}=e;if(f!==void 0)return f;c.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:o,followerRef:r,mergedTo:d,syncPosition:l}},render(){return A(tv,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=A("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[A("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?gu(t,[[H0,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var kr=[],cv=function(){return kr.some(function(e){return e.activeTargets.length>0})},dv=function(){return kr.some(function(e){return e.skippedTargets.length>0})},cc="ResizeObserver loop completed with undelivered notifications.",fv=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:cc}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=cc),window.dispatchEvent(e)},Vo;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Vo||(Vo={}));var Sr=function(e){return Object.freeze(e)},hv=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Sr(this)}return e}(),W0=function(){function e(n,t,r,o){return this.x=n,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Sr(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,r=n.y,o=n.top,i=n.right,u=n.bottom,s=n.left,l=n.width,a=n.height;return{x:t,y:r,top:o,right:i,bottom:u,left:s,width:l,height:a}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),$l=function(e){return e instanceof SVGElement&&"getBBox"in e},V0=function(e){if($l(e)){var n=e.getBBox(),t=n.width,r=n.height;return!t&&!r}var o=e,i=o.offsetWidth,u=o.offsetHeight;return!(i||u||e.getClientRects().length)},dc=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},pv=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Fo=typeof window<"u"?window:{},Si=new WeakMap,fc=/auto|scroll/,gv=/^tb|vertical/,bv=/msie|trident/i.test(Fo.navigator&&Fo.navigator.userAgent),tt=function(e){return parseFloat(e||"0")},Xr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new hv((t?n:e)||0,(t?e:n)||0)},hc=Sr({devicePixelContentBoxSize:Xr(),borderBoxSize:Xr(),contentBoxSize:Xr(),contentRect:new W0(0,0,0,0)}),q0=function(e,n){if(n===void 0&&(n=!1),Si.has(e)&&!n)return Si.get(e);if(V0(e))return Si.set(e,hc),hc;var t=getComputedStyle(e),r=$l(e)&&e.ownerSVGElement&&e.getBBox(),o=!bv&&t.boxSizing==="border-box",i=gv.test(t.writingMode||""),u=!r&&fc.test(t.overflowY||""),s=!r&&fc.test(t.overflowX||""),l=r?0:tt(t.paddingTop),a=r?0:tt(t.paddingRight),c=r?0:tt(t.paddingBottom),d=r?0:tt(t.paddingLeft),f=r?0:tt(t.borderTopWidth),h=r?0:tt(t.borderRightWidth),p=r?0:tt(t.borderBottomWidth),g=r?0:tt(t.borderLeftWidth),b=d+a,v=l+c,m=g+h,w=f+p,y=s?e.offsetHeight-w-e.clientHeight:0,S=u?e.offsetWidth-m-e.clientWidth:0,z=o?b+m:0,_=o?v+w:0,E=r?r.width:tt(t.width)-z-S,k=r?r.height:tt(t.height)-_-y,F=E+b+S+m,L=k+v+y+w,I=Sr({devicePixelContentBoxSize:Xr(Math.round(E*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:Xr(F,L,i),contentBoxSize:Xr(E,k,i),contentRect:new W0(d,l,E,k)});return Si.set(e,I),I},G0=function(e,n,t){var r=q0(e,t),o=r.borderBoxSize,i=r.contentBoxSize,u=r.devicePixelContentBoxSize;switch(n){case Vo.DEVICE_PIXEL_CONTENT_BOX:return u;case Vo.BORDER_BOX:return o;default:return i}},mv=function(){function e(n){var t=q0(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Sr([t.borderBoxSize]),this.contentBoxSize=Sr([t.contentBoxSize]),this.devicePixelContentBoxSize=Sr([t.devicePixelContentBoxSize])}return e}(),Z0=function(e){if(V0(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},vv=function(){var e=1/0,n=[];kr.forEach(function(u){if(u.activeTargets.length!==0){var s=[];u.activeTargets.forEach(function(a){var c=new mv(a.target),d=Z0(a.target);s.push(c),a.lastReportedSize=G0(a.target,a.observedBox),d<e&&(e=d)}),n.push(function(){u.callback.call(u.observer,s,u.observer)}),u.activeTargets.splice(0,u.activeTargets.length)}});for(var t=0,r=n;t<r.length;t++){var o=r[t];o()}return e},pc=function(e){kr.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(Z0(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},xv=function(){var e=0;for(pc(e);cv();)e=vv(),pc(e);return dv()&&fv(),e>0},ns,X0=[],yv=function(){return X0.splice(0).forEach(function(e){return e()})},Cv=function(e){if(!ns){var n=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return yv()}).observe(t,r),ns=function(){t.textContent="".concat(n?n--:n++)}}X0.push(e),ns()},_v=function(e){Cv(function(){requestAnimationFrame(e)})},Ri=0,wv=function(){return!!Ri},kv=250,Sv={attributes:!0,characterData:!0,childList:!0,subtree:!0},gc=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],bc=function(e){return e===void 0&&(e=0),Date.now()+e},ts=!1,Ev=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=kv),!ts){ts=!0;var r=bc(n);_v(function(){var o=!1;try{o=xv()}finally{if(ts=!1,n=r-bc(),!wv())return;o?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,Sv)};document.body?t():Fo.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),gc.forEach(function(t){return Fo.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),gc.forEach(function(t){return Fo.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),Hs=new Ev,mc=function(e){!Ri&&e>0&&Hs.start(),Ri+=e,!Ri&&Hs.stop()},Av=function(e){return!$l(e)&&!pv(e)&&getComputedStyle(e).display==="inline"},Tv=function(){function e(n,t){this.target=n,this.observedBox=t||Vo.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=G0(this.target,this.observedBox,!0);return Av(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),Dv=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),Ei=new WeakMap,vc=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Ai=function(){function e(){}return e.connect=function(n,t){var r=new Dv(n,t);Ei.set(n,r)},e.observe=function(n,t,r){var o=Ei.get(n),i=o.observationTargets.length===0;vc(o.observationTargets,t)<0&&(i&&kr.push(o),o.observationTargets.push(new Tv(t,r&&r.box)),mc(1),Hs.schedule())},e.unobserve=function(n,t){var r=Ei.get(n),o=vc(r.observationTargets,t),i=r.observationTargets.length===1;o>=0&&(i&&kr.splice(kr.indexOf(r),1),r.observationTargets.splice(o,1),mc(-1))},e.disconnect=function(n){var t=this,r=Ei.get(n);r.observationTargets.slice().forEach(function(o){return t.unobserve(n,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),zv=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ai.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!dc(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ai.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!dc(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ai.unobserve(this,n)},e.prototype.disconnect=function(){Ai.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Fv{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||zv)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const xc=new Fv,Xi=le({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=Rr().proxy;function r(o){const{onResize:i}=e;i!==void 0&&i(o)}Ln(()=>{const o=t.$el;if(o===void 0){ic("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){ic("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(xc.registerHandler(o.nextElementSibling,r),n=!0)}),qn(()=>{n&&xc.unregisterHandler(t.$el.nextElementSibling)})},render(){return vu(this.$slots,"default")}}),Ct="v-hidden",Iv=wo("[v-hidden]",{display:"none!important"}),Pv=le({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=oe(null),r=oe(null);function o(u){const{value:s}=t,{getCounter:l,getTail:a}=e;let c;if(l!==void 0?c=l():c=r.value,!s||!c)return;c.hasAttribute(Ct)&&c.removeAttribute(Ct);const{children:d}=s;if(u.showAllItemsBeforeCalculate)for(const w of d)w.hasAttribute(Ct)&&w.removeAttribute(Ct);const f=s.offsetWidth,h=[],p=n.tail?a==null?void 0:a():null;let g=p?p.offsetWidth:0,b=!1;const v=s.children.length-(n.tail?1:0);for(let w=0;w<v-1;++w){if(w<0)continue;const y=d[w];if(b){y.hasAttribute(Ct)||y.setAttribute(Ct,"");continue}else y.hasAttribute(Ct)&&y.removeAttribute(Ct);const S=y.offsetWidth;if(g+=S,h[w]=S,g>f){const{updateCounter:z}=e;for(let _=w;_>=0;--_){const E=v-1-_;z!==void 0?z(E):c.textContent=`${E}`;const k=c.offsetWidth;if(g-=h[_],g+k<=f||_===0){b=!0,w=_-1,p&&(w===-1?(p.style.maxWidth=`${f-k}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:F}=e;F&&F(E);break}}}}const{onUpdateOverflow:m}=e;b?m!==void 0&&m(!0):(m!==void 0&&m(!1),c.setAttribute(Ct,""))}const i=so();return Iv.mount({id:"vueuc/overflow",head:!0,anchorMetaName:U0,ssr:i}),Ln(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:o}},render(){const{$slots:e}=this;return ui(()=>this.sync({showAllItemsBeforeCalculate:!1})),A("div",{class:"v-overflow",ref:"selfRef"},[vu(e,"default"),e.counter?e.counter():A("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Y0(e){return e instanceof HTMLElement}function J0(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(Y0(t)&&(eh(t)||J0(t)))return!0}return!1}function Q0(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(Y0(t)&&(eh(t)||Q0(t)))return!0}return!1}function eh(e){if(!Rv(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Rv(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"SELECT":case"TEXTAREA":return!0;default:return!1}}let bo=[];const $v=le({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=I0(),t=oe(null),r=oe(null);let o=!1,i=!1;const u=typeof document>"u"?null:document.activeElement;function s(){return bo[bo.length-1]===n}function l(b){var v;b.code==="Escape"&&s()&&((v=e.onEsc)===null||v===void 0||v.call(e,b))}Ln(()=>{cn(()=>e.active,b=>{b?(d(),un("keydown",document,l)):(Ge("keydown",document,l),o&&f())},{immediate:!0})}),qn(()=>{Ge("keydown",document,l),o&&f()});function a(b){if(!i&&s()){const v=c();if(v===null||v.contains(Gi(b)))return;h("first")}}function c(){const b=t.value;if(b===null)return null;let v=b;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function d(){var b;if(!e.disabled){if(bo.push(n),e.autoFocus){const{initialFocusTo:v}=e;v===void 0?h("first"):(b=uc(v))===null||b===void 0||b.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",a,!0)}}function f(){var b;if(e.disabled||(document.removeEventListener("focus",a,!0),bo=bo.filter(m=>m!==n),s()))return;const{finalFocusTo:v}=e;v!==void 0?(b=uc(v))===null||b===void 0||b.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&u instanceof HTMLElement&&(i=!0,u.focus({preventScroll:!0}),i=!1)}function h(b){if(s()&&e.active){const v=t.value,m=r.value;if(v!==null&&m!==null){const w=c();if(w==null||w===m){i=!0,v.focus({preventScroll:!0}),i=!1;return}i=!0;const y=b==="first"?J0(w):Q0(w);i=!1,y||(i=!0,v.focus({preventScroll:!0}),i=!1)}}}function p(b){if(i)return;const v=c();v!==null&&(b.relatedTarget!==null&&v.contains(b.relatedTarget)?h("last"):h("first"))}function g(b){i||(b.relatedTarget!==null&&b.relatedTarget===t.value?h("last"):h("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:g}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return A(Le,null,[A("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),A("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function Us(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const Ov=/^(\d|\.)+$/,yc=/(\d|\.)+/;function er(e,{c:n=1,offset:t=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+t)*n;return o===0?"0":`${o}px`}else if(typeof e=="string")if(Ov.test(e)){const o=(Number(e)+t)*n;return r?o===0?"0":`${o}px`:`${o}`}else{const o=yc.exec(e);return o?e.replace(yc,String((Number(o[0])+t)*n)):e}return e}function Cc(e){const{left:n,right:t,top:r,bottom:o}=br(e);return`${r} ${n} ${o} ${t}`}let rs;function Bv(){return rs===void 0&&(rs=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),rs}function qo(e,n){console.error(`[naive/${e}]: ${n}`)}function nh(e,n){throw new Error(`[naive/${e}]: ${n}`)}function Ye(e,...n){if(Array.isArray(e))e.forEach(t=>Ye(t,...n));else return e(...n)}function Mv(e){return n=>{n?e.value=n.$el:e.value=null}}function Ks(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){Ks(r,n,t);return}if(r.type===Le){if(r.children===null)return;Array.isArray(r.children)&&Ks(r.children,n,t)}else{if(r.type===on&&n)return;t.push(r)}}}),t}function Nv(e,n="default",t=void 0){const r=e[n];if(!r)return qo("getFirstSlotVNode",`slot[${n}] is empty`),null;const o=Ks(r(t));return o.length===1?o[0]:(qo("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function Io(e,n=[],t){const r={};return n.forEach(o=>{r[o]=e[o]}),Object.assign(r,t)}function Ol(e){return Object.keys(e)}function ft(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?yn(e):typeof e=="number"?yn(String(e)):null}function Xn(e){return e.some(n=>Qr(n)?!(n.type===on||n.type===Le&&!Xn(n.children)):!0)?e:null}function Ws(e,n){return e&&Xn(e())||n()}function r9(e,n,t){return e&&Xn(e(n))||t(n)}function zn(e,n){const t=e&&Xn(e());return n(t||null)}function _c(e){return!(e&&Xn(e()))}const wc=le({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),Ot="n-config-provider",Vs="n";function kn(e={},n={defaultBordered:!0}){const t=ve(Ot,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:R(()=>{var r,o;const{bordered:i}=e;return i!==void 0?i:(o=(r=t==null?void 0:t.mergedBorderedRef.value)!==null&&r!==void 0?r:n.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:t?t.mergedClsPrefixRef:xf(Vs),namespaceRef:R(()=>t==null?void 0:t.mergedNamespaceRef.value)}}function Gn(e,n,t,r){t||nh("useThemeClass","cssVarsRef is not passed");const o=ve(Ot,null),i=o==null?void 0:o.mergedThemeHashRef,u=o==null?void 0:o.styleMountTarget,s=oe(""),l=so();let a;const c=`__${e}`,d=()=>{let f=c;const h=n?n.value:void 0,p=i==null?void 0:i.value;p&&(f+=`-${p}`),h&&(f+=`-${h}`);const{themeOverrides:g,builtinThemeOverrides:b}=r;g&&(f+=`-${Uo(JSON.stringify(g))}`),b&&(f+=`-${Uo(JSON.stringify(b))}`),s.value=f,a=()=>{const v=t.value;let m="";for(const w in v)m+=`${w}: ${v[w]};`;O(`.${f}`,m).mount({id:f,ssr:l,parent:u}),a=void 0}};return Rt(()=>{d()}),{themeClass:s,onRender:()=>{a==null||a()}}}var th=typeof global=="object"&&global&&global.Object===Object&&global,Lv=typeof self=="object"&&self&&self.Object===Object&&self,bt=th||Lv||Function("return this")(),tr=bt.Symbol,rh=Object.prototype,jv=rh.hasOwnProperty,Hv=rh.toString,mo=tr?tr.toStringTag:void 0;function Uv(e){var n=jv.call(e,mo),t=e[mo];try{e[mo]=void 0;var r=!0}catch{}var o=Hv.call(e);return r&&(n?e[mo]=t:delete e[mo]),o}var Kv=Object.prototype,Wv=Kv.toString;function Vv(e){return Wv.call(e)}var qv="[object Null]",Gv="[object Undefined]",kc=tr?tr.toStringTag:void 0;function $r(e){return e==null?e===void 0?Gv:qv:kc&&kc in Object(e)?Uv(e):Vv(e)}function rr(e){return e!=null&&typeof e=="object"}var Zv="[object Symbol]";function Bl(e){return typeof e=="symbol"||rr(e)&&$r(e)==Zv}function oh(e,n){for(var t=-1,r=e==null?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o}var Vn=Array.isArray,Sc=tr?tr.prototype:void 0,Ec=Sc?Sc.toString:void 0;function ih(e){if(typeof e=="string")return e;if(Vn(e))return oh(e,ih)+"";if(Bl(e))return Ec?Ec.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function ir(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Ml(e){return e}var Xv="[object AsyncFunction]",Yv="[object Function]",Jv="[object GeneratorFunction]",Qv="[object Proxy]";function Nl(e){if(!ir(e))return!1;var n=$r(e);return n==Yv||n==Jv||n==Xv||n==Qv}var os=bt["__core-js_shared__"],Ac=function(){var e=/[^.]+$/.exec(os&&os.keys&&os.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function e2(e){return!!Ac&&Ac in e}var n2=Function.prototype,t2=n2.toString;function Or(e){if(e!=null){try{return t2.call(e)}catch{}try{return e+""}catch{}}return""}var r2=/[\\^$.*+?()[\]{}|]/g,o2=/^\[object .+?Constructor\]$/,i2=Function.prototype,u2=Object.prototype,s2=i2.toString,l2=u2.hasOwnProperty,a2=RegExp("^"+s2.call(l2).replace(r2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function c2(e){if(!ir(e)||e2(e))return!1;var n=Nl(e)?a2:o2;return n.test(Or(e))}function d2(e,n){return e==null?void 0:e[n]}function Br(e,n){var t=d2(e,n);return c2(t)?t:void 0}var qs=Br(bt,"WeakMap"),Tc=Object.create,f2=function(){function e(){}return function(n){if(!ir(n))return{};if(Tc)return Tc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function h2(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function p2(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var g2=800,b2=16,m2=Date.now;function v2(e){var n=0,t=0;return function(){var r=m2(),o=b2-(r-t);if(t=r,o>0){if(++n>=g2)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function x2(e){return function(){return e}}var Yi=function(){try{var e=Br(Object,"defineProperty");return e({},"",{}),e}catch{}}(),y2=Yi?function(e,n){return Yi(e,"toString",{configurable:!0,enumerable:!1,value:x2(n),writable:!0})}:Ml,C2=v2(y2),_2=9007199254740991,w2=/^(?:0|[1-9]\d*)$/;function Ll(e,n){var t=typeof e;return n=n??_2,!!n&&(t=="number"||t!="symbol"&&w2.test(e))&&e>-1&&e%1==0&&e<n}function jl(e,n,t){n=="__proto__"&&Yi?Yi(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function ci(e,n){return e===n||e!==e&&n!==n}var k2=Object.prototype,S2=k2.hasOwnProperty;function E2(e,n,t){var r=e[n];(!(S2.call(e,n)&&ci(r,t))||t===void 0&&!(n in e))&&jl(e,n,t)}function A2(e,n,t,r){var o=!t;t||(t={});for(var i=-1,u=n.length;++i<u;){var s=n[i],l=void 0;l===void 0&&(l=e[s]),o?jl(t,s,l):E2(t,s,l)}return t}var Dc=Math.max;function T2(e,n,t){return n=Dc(n===void 0?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=Dc(r.length-n,0),u=Array(i);++o<i;)u[o]=r[n+o];o=-1;for(var s=Array(n+1);++o<n;)s[o]=r[o];return s[n]=t(u),h2(e,this,s)}}function D2(e,n){return C2(T2(e,n,Ml),e+"")}var z2=9007199254740991;function Hl(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=z2}function lo(e){return e!=null&&Hl(e.length)&&!Nl(e)}function F2(e,n,t){if(!ir(t))return!1;var r=typeof n;return(r=="number"?lo(t)&&Ll(n,t.length):r=="string"&&n in t)?ci(t[n],e):!1}function I2(e){return D2(function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,u=o>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,u&&F2(t[0],t[1],u)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var s=t[r];s&&e(n,s,r,i)}return n})}var P2=Object.prototype;function Ul(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||P2;return e===t}function R2(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var $2="[object Arguments]";function zc(e){return rr(e)&&$r(e)==$2}var uh=Object.prototype,O2=uh.hasOwnProperty,B2=uh.propertyIsEnumerable,Ji=zc(function(){return arguments}())?zc:function(e){return rr(e)&&O2.call(e,"callee")&&!B2.call(e,"callee")};function M2(){return!1}var sh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fc=sh&&typeof module=="object"&&module&&!module.nodeType&&module,N2=Fc&&Fc.exports===sh,Ic=N2?bt.Buffer:void 0,L2=Ic?Ic.isBuffer:void 0,Qi=L2||M2,j2="[object Arguments]",H2="[object Array]",U2="[object Boolean]",K2="[object Date]",W2="[object Error]",V2="[object Function]",q2="[object Map]",G2="[object Number]",Z2="[object Object]",X2="[object RegExp]",Y2="[object Set]",J2="[object String]",Q2="[object WeakMap]",ex="[object ArrayBuffer]",nx="[object DataView]",tx="[object Float32Array]",rx="[object Float64Array]",ox="[object Int8Array]",ix="[object Int16Array]",ux="[object Int32Array]",sx="[object Uint8Array]",lx="[object Uint8ClampedArray]",ax="[object Uint16Array]",cx="[object Uint32Array]",Ne={};Ne[tx]=Ne[rx]=Ne[ox]=Ne[ix]=Ne[ux]=Ne[sx]=Ne[lx]=Ne[ax]=Ne[cx]=!0;Ne[j2]=Ne[H2]=Ne[ex]=Ne[U2]=Ne[nx]=Ne[K2]=Ne[W2]=Ne[V2]=Ne[q2]=Ne[G2]=Ne[Z2]=Ne[X2]=Ne[Y2]=Ne[J2]=Ne[Q2]=!1;function dx(e){return rr(e)&&Hl(e.length)&&!!Ne[$r(e)]}function fx(e){return function(n){return e(n)}}var lh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Po=lh&&typeof module=="object"&&module&&!module.nodeType&&module,hx=Po&&Po.exports===lh,is=hx&&th.process,Pc=function(){try{var e=Po&&Po.require&&Po.require("util").types;return e||is&&is.binding&&is.binding("util")}catch{}}(),Rc=Pc&&Pc.isTypedArray,Kl=Rc?fx(Rc):dx,px=Object.prototype,gx=px.hasOwnProperty;function ah(e,n){var t=Vn(e),r=!t&&Ji(e),o=!t&&!r&&Qi(e),i=!t&&!r&&!o&&Kl(e),u=t||r||o||i,s=u?R2(e.length,String):[],l=s.length;for(var a in e)(n||gx.call(e,a))&&!(u&&(a=="length"||o&&(a=="offset"||a=="parent")||i&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||Ll(a,l)))&&s.push(a);return s}function ch(e,n){return function(t){return e(n(t))}}var bx=ch(Object.keys,Object),mx=Object.prototype,vx=mx.hasOwnProperty;function xx(e){if(!Ul(e))return bx(e);var n=[];for(var t in Object(e))vx.call(e,t)&&t!="constructor"&&n.push(t);return n}function Wl(e){return lo(e)?ah(e):xx(e)}function yx(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var Cx=Object.prototype,_x=Cx.hasOwnProperty;function wx(e){if(!ir(e))return yx(e);var n=Ul(e),t=[];for(var r in e)r=="constructor"&&(n||!_x.call(e,r))||t.push(r);return t}function dh(e){return lo(e)?ah(e,!0):wx(e)}var kx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sx=/^\w*$/;function Vl(e,n){if(Vn(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Bl(e)?!0:Sx.test(e)||!kx.test(e)||n!=null&&e in Object(n)}var Go=Br(Object,"create");function Ex(){this.__data__=Go?Go(null):{},this.size=0}function Ax(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var Tx="__lodash_hash_undefined__",Dx=Object.prototype,zx=Dx.hasOwnProperty;function Fx(e){var n=this.__data__;if(Go){var t=n[e];return t===Tx?void 0:t}return zx.call(n,e)?n[e]:void 0}var Ix=Object.prototype,Px=Ix.hasOwnProperty;function Rx(e){var n=this.__data__;return Go?n[e]!==void 0:Px.call(n,e)}var $x="__lodash_hash_undefined__";function Ox(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Go&&n===void 0?$x:n,this}function Fr(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Fr.prototype.clear=Ex;Fr.prototype.delete=Ax;Fr.prototype.get=Fx;Fr.prototype.has=Rx;Fr.prototype.set=Ox;function Bx(){this.__data__=[],this.size=0}function wu(e,n){for(var t=e.length;t--;)if(ci(e[t][0],n))return t;return-1}var Mx=Array.prototype,Nx=Mx.splice;function Lx(e){var n=this.__data__,t=wu(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Nx.call(n,t,1),--this.size,!0}function jx(e){var n=this.__data__,t=wu(n,e);return t<0?void 0:n[t][1]}function Hx(e){return wu(this.__data__,e)>-1}function Ux(e,n){var t=this.__data__,r=wu(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Mt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Mt.prototype.clear=Bx;Mt.prototype.delete=Lx;Mt.prototype.get=jx;Mt.prototype.has=Hx;Mt.prototype.set=Ux;var Zo=Br(bt,"Map");function Kx(){this.size=0,this.__data__={hash:new Fr,map:new(Zo||Mt),string:new Fr}}function Wx(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ku(e,n){var t=e.__data__;return Wx(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Vx(e){var n=ku(this,e).delete(e);return this.size-=n?1:0,n}function qx(e){return ku(this,e).get(e)}function Gx(e){return ku(this,e).has(e)}function Zx(e,n){var t=ku(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Nt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Nt.prototype.clear=Kx;Nt.prototype.delete=Vx;Nt.prototype.get=qx;Nt.prototype.has=Gx;Nt.prototype.set=Zx;var Xx="Expected a function";function ql(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Xx);var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var u=e.apply(this,r);return t.cache=i.set(o,u)||i,u};return t.cache=new(ql.Cache||Nt),t}ql.Cache=Nt;var Yx=500;function Jx(e){var n=ql(e,function(r){return t.size===Yx&&t.clear(),r}),t=n.cache;return n}var Qx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,e3=/\\(\\)?/g,n3=Jx(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Qx,function(t,r,o,i){n.push(o?i.replace(e3,"$1"):r||t)}),n});function fh(e){return e==null?"":ih(e)}function hh(e,n){return Vn(e)?e:Vl(e,n)?[e]:n3(fh(e))}function Su(e){if(typeof e=="string"||Bl(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function ph(e,n){n=hh(n,e);for(var t=0,r=n.length;e!=null&&t<r;)e=e[Su(n[t++])];return t&&t==r?e:void 0}function t3(e,n,t){var r=e==null?void 0:ph(e,n);return r===void 0?t:r}function r3(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var gh=ch(Object.getPrototypeOf,Object),o3="[object Object]",i3=Function.prototype,u3=Object.prototype,bh=i3.toString,s3=u3.hasOwnProperty,l3=bh.call(Object);function a3(e){if(!rr(e)||$r(e)!=o3)return!1;var n=gh(e);if(n===null)return!0;var t=s3.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&bh.call(t)==l3}function c3(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),t=t>o?o:t,t<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+n];return i}function d3(e,n,t){var r=e.length;return t=t===void 0?r:t,!n&&t>=r?e:c3(e,n,t)}var f3="\\ud800-\\udfff",h3="\\u0300-\\u036f",p3="\\ufe20-\\ufe2f",g3="\\u20d0-\\u20ff",b3=h3+p3+g3,m3="\\ufe0e\\ufe0f",v3="\\u200d",x3=RegExp("["+v3+f3+b3+m3+"]");function mh(e){return x3.test(e)}function y3(e){return e.split("")}var vh="\\ud800-\\udfff",C3="\\u0300-\\u036f",_3="\\ufe20-\\ufe2f",w3="\\u20d0-\\u20ff",k3=C3+_3+w3,S3="\\ufe0e\\ufe0f",E3="["+vh+"]",Gs="["+k3+"]",Zs="\\ud83c[\\udffb-\\udfff]",A3="(?:"+Gs+"|"+Zs+")",xh="[^"+vh+"]",yh="(?:\\ud83c[\\udde6-\\uddff]){2}",Ch="[\\ud800-\\udbff][\\udc00-\\udfff]",T3="\\u200d",_h=A3+"?",wh="["+S3+"]?",D3="(?:"+T3+"(?:"+[xh,yh,Ch].join("|")+")"+wh+_h+")*",z3=wh+_h+D3,F3="(?:"+[xh+Gs+"?",Gs,yh,Ch,E3].join("|")+")",I3=RegExp(Zs+"(?="+Zs+")|"+F3+z3,"g");function P3(e){return e.match(I3)||[]}function R3(e){return mh(e)?P3(e):y3(e)}function $3(e){return function(n){n=fh(n);var t=mh(n)?R3(n):void 0,r=t?t[0]:n.charAt(0),o=t?d3(t,1).join(""):n.slice(1);return r[e]()+o}}var O3=$3("toUpperCase");function B3(){this.__data__=new Mt,this.size=0}function M3(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function N3(e){return this.__data__.get(e)}function L3(e){return this.__data__.has(e)}var j3=200;function H3(e,n){var t=this.__data__;if(t instanceof Mt){var r=t.__data__;if(!Zo||r.length<j3-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Nt(r)}return t.set(e,n),this.size=t.size,this}function ht(e){var n=this.__data__=new Mt(e);this.size=n.size}ht.prototype.clear=B3;ht.prototype.delete=M3;ht.prototype.get=N3;ht.prototype.has=L3;ht.prototype.set=H3;var kh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$c=kh&&typeof module=="object"&&module&&!module.nodeType&&module,U3=$c&&$c.exports===kh,Oc=U3?bt.Buffer:void 0;Oc&&Oc.allocUnsafe;function K3(e,n){return e.slice()}function W3(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var u=e[t];n(u,t,e)&&(i[o++]=u)}return i}function V3(){return[]}var q3=Object.prototype,G3=q3.propertyIsEnumerable,Bc=Object.getOwnPropertySymbols,Z3=Bc?function(e){return e==null?[]:(e=Object(e),W3(Bc(e),function(n){return G3.call(e,n)}))}:V3;function X3(e,n,t){var r=n(e);return Vn(e)?r:r3(r,t(e))}function Mc(e){return X3(e,Wl,Z3)}var Xs=Br(bt,"DataView"),Ys=Br(bt,"Promise"),Js=Br(bt,"Set"),Nc="[object Map]",Y3="[object Object]",Lc="[object Promise]",jc="[object Set]",Hc="[object WeakMap]",Uc="[object DataView]",J3=Or(Xs),Q3=Or(Zo),ey=Or(Ys),ny=Or(Js),ty=Or(qs),Zt=$r;(Xs&&Zt(new Xs(new ArrayBuffer(1)))!=Uc||Zo&&Zt(new Zo)!=Nc||Ys&&Zt(Ys.resolve())!=Lc||Js&&Zt(new Js)!=jc||qs&&Zt(new qs)!=Hc)&&(Zt=function(e){var n=$r(e),t=n==Y3?e.constructor:void 0,r=t?Or(t):"";if(r)switch(r){case J3:return Uc;case Q3:return Nc;case ey:return Lc;case ny:return jc;case ty:return Hc}return n});var eu=bt.Uint8Array;function ry(e){var n=new e.constructor(e.byteLength);return new eu(n).set(new eu(e)),n}function oy(e,n){var t=ry(e.buffer);return new e.constructor(t,e.byteOffset,e.length)}function iy(e){return typeof e.constructor=="function"&&!Ul(e)?f2(gh(e)):{}}var uy="__lodash_hash_undefined__";function sy(e){return this.__data__.set(e,uy),this}function ly(e){return this.__data__.has(e)}function nu(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Nt;++n<t;)this.add(e[n])}nu.prototype.add=nu.prototype.push=sy;nu.prototype.has=ly;function ay(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function cy(e,n){return e.has(n)}var dy=1,fy=2;function Sh(e,n,t,r,o,i){var u=t&dy,s=e.length,l=n.length;if(s!=l&&!(u&&l>s))return!1;var a=i.get(e),c=i.get(n);if(a&&c)return a==n&&c==e;var d=-1,f=!0,h=t&fy?new nu:void 0;for(i.set(e,n),i.set(n,e);++d<s;){var p=e[d],g=n[d];if(r)var b=u?r(g,p,d,n,e,i):r(p,g,d,e,n,i);if(b!==void 0){if(b)continue;f=!1;break}if(h){if(!ay(n,function(v,m){if(!cy(h,m)&&(p===v||o(p,v,t,r,i)))return h.push(m)})){f=!1;break}}else if(!(p===g||o(p,g,t,r,i))){f=!1;break}}return i.delete(e),i.delete(n),f}function hy(e){var n=-1,t=Array(e.size);return e.forEach(function(r,o){t[++n]=[o,r]}),t}function py(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var gy=1,by=2,my="[object Boolean]",vy="[object Date]",xy="[object Error]",yy="[object Map]",Cy="[object Number]",_y="[object RegExp]",wy="[object Set]",ky="[object String]",Sy="[object Symbol]",Ey="[object ArrayBuffer]",Ay="[object DataView]",Kc=tr?tr.prototype:void 0,us=Kc?Kc.valueOf:void 0;function Ty(e,n,t,r,o,i,u){switch(t){case Ay:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Ey:return!(e.byteLength!=n.byteLength||!i(new eu(e),new eu(n)));case my:case vy:case Cy:return ci(+e,+n);case xy:return e.name==n.name&&e.message==n.message;case _y:case ky:return e==n+"";case yy:var s=hy;case wy:var l=r&gy;if(s||(s=py),e.size!=n.size&&!l)return!1;var a=u.get(e);if(a)return a==n;r|=by,u.set(e,n);var c=Sh(s(e),s(n),r,o,i,u);return u.delete(e),c;case Sy:if(us)return us.call(e)==us.call(n)}return!1}var Dy=1,zy=Object.prototype,Fy=zy.hasOwnProperty;function Iy(e,n,t,r,o,i){var u=t&Dy,s=Mc(e),l=s.length,a=Mc(n),c=a.length;if(l!=c&&!u)return!1;for(var d=l;d--;){var f=s[d];if(!(u?f in n:Fy.call(n,f)))return!1}var h=i.get(e),p=i.get(n);if(h&&p)return h==n&&p==e;var g=!0;i.set(e,n),i.set(n,e);for(var b=u;++d<l;){f=s[d];var v=e[f],m=n[f];if(r)var w=u?r(m,v,f,n,e,i):r(v,m,f,e,n,i);if(!(w===void 0?v===m||o(v,m,t,r,i):w)){g=!1;break}b||(b=f=="constructor")}if(g&&!b){var y=e.constructor,S=n.constructor;y!=S&&"constructor"in e&&"constructor"in n&&!(typeof y=="function"&&y instanceof y&&typeof S=="function"&&S instanceof S)&&(g=!1)}return i.delete(e),i.delete(n),g}var Py=1,Wc="[object Arguments]",Vc="[object Array]",Ti="[object Object]",Ry=Object.prototype,qc=Ry.hasOwnProperty;function $y(e,n,t,r,o,i){var u=Vn(e),s=Vn(n),l=u?Vc:Zt(e),a=s?Vc:Zt(n);l=l==Wc?Ti:l,a=a==Wc?Ti:a;var c=l==Ti,d=a==Ti,f=l==a;if(f&&Qi(e)){if(!Qi(n))return!1;u=!0,c=!1}if(f&&!c)return i||(i=new ht),u||Kl(e)?Sh(e,n,t,r,o,i):Ty(e,n,l,t,r,o,i);if(!(t&Py)){var h=c&&qc.call(e,"__wrapped__"),p=d&&qc.call(n,"__wrapped__");if(h||p){var g=h?e.value():e,b=p?n.value():n;return i||(i=new ht),o(g,b,t,r,i)}}return f?(i||(i=new ht),Iy(e,n,t,r,o,i)):!1}function Gl(e,n,t,r,o){return e===n?!0:e==null||n==null||!rr(e)&&!rr(n)?e!==e&&n!==n:$y(e,n,t,r,Gl,o)}var Oy=1,By=2;function My(e,n,t,r){var o=t.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var u=t[o];if(u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){u=t[o];var s=u[0],l=e[s],a=u[1];if(u[2]){if(l===void 0&&!(s in e))return!1}else{var c=new ht,d;if(!(d===void 0?Gl(a,l,Oy|By,r,c):d))return!1}}return!0}function Eh(e){return e===e&&!ir(e)}function Ny(e){for(var n=Wl(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,Eh(o)]}return n}function Ah(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function Ly(e){var n=Ny(e);return n.length==1&&n[0][2]?Ah(n[0][0],n[0][1]):function(t){return t===e||My(t,e,n)}}function jy(e,n){return e!=null&&n in Object(e)}function Hy(e,n,t){n=hh(n,e);for(var r=-1,o=n.length,i=!1;++r<o;){var u=Su(n[r]);if(!(i=e!=null&&t(e,u)))break;e=e[u]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&Hl(o)&&Ll(u,o)&&(Vn(e)||Ji(e)))}function Uy(e,n){return e!=null&&Hy(e,n,jy)}var Ky=1,Wy=2;function Vy(e,n){return Vl(e)&&Eh(n)?Ah(Su(e),n):function(t){var r=t3(t,e);return r===void 0&&r===n?Uy(t,e):Gl(n,r,Ky|Wy)}}function qy(e){return function(n){return n==null?void 0:n[e]}}function Gy(e){return function(n){return ph(n,e)}}function Zy(e){return Vl(e)?qy(Su(e)):Gy(e)}function Xy(e){return typeof e=="function"?e:e==null?Ml:typeof e=="object"?Vn(e)?Vy(e[0],e[1]):Ly(e):Zy(e)}function Yy(e){return function(n,t,r){for(var o=-1,i=Object(n),u=r(n),s=u.length;s--;){var l=u[++o];if(t(i[l],l,i)===!1)break}return n}}var Th=Yy();function Jy(e,n){return e&&Th(e,n,Wl)}function Qy(e,n){return function(t,r){if(t==null)return t;if(!lo(t))return e(t,r);for(var o=t.length,i=-1,u=Object(t);++i<o&&r(u[i],i,u)!==!1;);return t}}var e6=Qy(Jy);function Qs(e,n,t){(t!==void 0&&!ci(e[n],t)||t===void 0&&!(n in e))&&jl(e,n,t)}function n6(e){return rr(e)&&lo(e)}function el(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function t6(e){return A2(e,dh(e))}function r6(e,n,t,r,o,i,u){var s=el(e,t),l=el(n,t),a=u.get(l);if(a){Qs(e,t,a);return}var c=i?i(s,l,t+"",e,n,u):void 0,d=c===void 0;if(d){var f=Vn(l),h=!f&&Qi(l),p=!f&&!h&&Kl(l);c=l,f||h||p?Vn(s)?c=s:n6(s)?c=p2(s):h?(d=!1,c=K3(l)):p?(d=!1,c=oy(l)):c=[]:a3(l)||Ji(l)?(c=s,Ji(s)?c=t6(s):(!ir(s)||Nl(s))&&(c=iy(l))):d=!1}d&&(u.set(l,c),o(c,l,r,i,u),u.delete(l)),Qs(e,t,c)}function Dh(e,n,t,r,o){e!==n&&Th(n,function(i,u){if(o||(o=new ht),ir(i))r6(e,n,u,t,Dh,r,o);else{var s=r?r(el(e,u),i,u+"",e,n,o):void 0;s===void 0&&(s=i),Qs(e,u,s)}},dh)}function o6(e,n){var t=-1,r=lo(e)?Array(e.length):[];return e6(e,function(o,i,u){r[++t]=n(o,i,u)}),r}function i6(e,n){var t=Vn(e)?oh:o6;return t(e,Xy(n))}var ko=I2(function(e,n,t){Dh(e,n,t)});const Xo="naive-ui-style";function Eu(e,n,t){if(!n)return;const r=so(),o=R(()=>{const{value:s}=n;if(!s)return;const l=s[e];if(l)return l}),i=ve(Ot,null),u=()=>{Rt(()=>{const{value:s}=t,l=`${s}${e}Rtl`;if(cm(l,r))return;const{value:a}=o;a&&a.style.mount({id:l,head:!0,anchorMetaName:Xo,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget})})};return r?u():si(u),o}const di={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:u6,fontFamily:s6,lineHeight:l6}=di,zh=O("body",`
 margin: 0;
 font-size: ${u6};
 font-family: ${s6};
 line-height: ${l6};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[O("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function Fh(e,n,t){if(!n)return;const r=so(),o=ve(Ot,null),i=()=>{const u=t.value;n.mount({id:u===void 0?e:u+e,head:!0,anchorMetaName:Xo,props:{bPrefix:u?`.${u}-`:void 0},ssr:r,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||zh.mount({id:"n-global",head:!0,anchorMetaName:Xo,ssr:r,parent:o==null?void 0:o.styleMountTarget})};r?i():si(i)}function o9(e){return e}function Pe(e,n,t,r,o,i){const u=so(),s=ve(Ot,null);if(t){const a=()=>{const c=i==null?void 0:i.value;t.mount({id:c===void 0?n:c+n,head:!0,props:{bPrefix:c?`.${c}-`:void 0},anchorMetaName:Xo,ssr:u,parent:s==null?void 0:s.styleMountTarget}),s!=null&&s.preflightStyleDisabled||zh.mount({id:"n-global",head:!0,anchorMetaName:Xo,ssr:u,parent:s==null?void 0:s.styleMountTarget})};u?a():si(a)}return R(()=>{var a;const{theme:{common:c,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=o,{common:g,peers:b}=h,{common:v=void 0,[e]:{common:m=void 0,self:w=void 0,peers:y={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:S=void 0,[e]:z={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:_,peers:E={}}=z,k=ko({},c||m||v||r.common,S,_,g),F=ko((a=d||w||r.self)===null||a===void 0?void 0:a(k),p,z,h);return{common:k,self:F,peers:ko({},r.peers,y,f),peerOverrides:ko({},p.peers,E,b)}})}Pe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const a6=H("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[O("svg",`
 height: 1em;
 width: 1em;
 `)]),Zl=le({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Fh("-base-icon",a6,He(e,"clsPrefix"))},render(){return A("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function c6(e,n){const t=le({render(){return n()}});return le({name:O3(e),setup(){var r;const o=(r=ve(Ot,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var i;const u=(i=o==null?void 0:o.value)===null||i===void 0?void 0:i[e];return u?u():A(t,null)}}})}const d6=le({name:"ChevronDownFilled",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ih=le({name:"ChevronRight",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),f6=c6("close",()=>A("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},A("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},A("g",{fill:"currentColor","fill-rule":"nonzero"},A("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),h6=H("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Y("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),O("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),ln("disabled",[O("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),O("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),O("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),O("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),O("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Y("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Y("round",[O("&::before",`
 border-radius: 50%;
 `)])]),Ph=le({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Fh("-base-close",h6,He(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:r,round:o,isButtonTag:i}=e;return A(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,r&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,o&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},A(Zl,{clsPrefix:n},{default:()=>A(f6,null)}))}}}),p6=le({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function r(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function o(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function u(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:a,mode:c}=e,d=s?$b:Dr,f={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:a,onEnter:i,onAfterEnter:u,onBeforeLeave:t,onLeave:r,onAfterLeave:o};return s||(f.mode=c),A(d,f,n)}}}),{cubicBezierEaseInOut:Gc}=di;function g6({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=Gc,leaveCubicBezier:o=Gc}={}){return[O(`&.${e}-transition-enter-active`,{transition:`all ${n} ${r}!important`}),O(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),O(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),O(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const pe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},b6=zr(pe.neutralBase),Rh=zr(pe.neutralInvertBase),m6=`rgba(${Rh.slice(0,3).join(", ")}, `;function Zc(e){return`${m6+String(e)})`}function hn(e){const n=Array.from(Rh);return n[3]=Number(e),_r(b6,n)}const In=Object.assign(Object.assign({name:"common"},di),{baseColor:pe.neutralBase,primaryColor:pe.primaryDefault,primaryColorHover:pe.primaryHover,primaryColorPressed:pe.primaryActive,primaryColorSuppl:pe.primarySuppl,infoColor:pe.infoDefault,infoColorHover:pe.infoHover,infoColorPressed:pe.infoActive,infoColorSuppl:pe.infoSuppl,successColor:pe.successDefault,successColorHover:pe.successHover,successColorPressed:pe.successActive,successColorSuppl:pe.successSuppl,warningColor:pe.warningDefault,warningColorHover:pe.warningHover,warningColorPressed:pe.warningActive,warningColorSuppl:pe.warningSuppl,errorColor:pe.errorDefault,errorColorHover:pe.errorHover,errorColorPressed:pe.errorActive,errorColorSuppl:pe.errorSuppl,textColorBase:pe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:hn(pe.alpha4),placeholderColor:hn(pe.alpha4),placeholderColorDisabled:hn(pe.alpha5),iconColor:hn(pe.alpha4),iconColorHover:wi(hn(pe.alpha4),{lightness:.75}),iconColorPressed:wi(hn(pe.alpha4),{lightness:.9}),iconColorDisabled:hn(pe.alpha5),opacity1:pe.alpha1,opacity2:pe.alpha2,opacity3:pe.alpha3,opacity4:pe.alpha4,opacity5:pe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:hn(Number(pe.alphaClose)),closeIconColorHover:hn(Number(pe.alphaClose)),closeIconColorPressed:hn(Number(pe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:hn(pe.alpha4),clearColorHover:wi(hn(pe.alpha4),{lightness:.75}),clearColorPressed:wi(hn(pe.alpha4),{lightness:.9}),scrollbarColor:Zc(pe.alphaScrollbar),scrollbarColorHover:Zc(pe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:hn(pe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:pe.neutralPopover,tableColor:pe.neutralCard,cardColor:pe.neutralCard,modalColor:pe.neutralModal,bodyColor:pe.neutralBody,tagColor:"#eee",avatarColor:hn(pe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:hn(pe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:pe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),v6={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function x6(e){const{scrollbarColor:n,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:o,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},v6),{height:r,width:o,borderRadius:i,color:n,colorHover:t})}const Xl={name:"Scrollbar",common:In,self:x6},y6=H("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[O(">",[H("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),O(">",[H("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),O(">, +",[H("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[Y("horizontal",`
 height: var(--n-scrollbar-height);
 `,[O(">",[K("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Y("horizontal--top",`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),Y("horizontal--bottom",`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),Y("vertical",`
 width: var(--n-scrollbar-width);
 `,[O(">",[K("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Y("vertical--left",`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),Y("vertical--right",`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),Y("disabled",[O(">",[K("scrollbar","pointer-events: none;")])]),O(">",[K("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[g6(),O("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),C6=Object.assign(Object.assign({},Pe.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,internalExposeWidthCssVar:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),fi=le({name:"Scrollbar",props:C6,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:r}=kn(e),o=Eu("Scrollbar",r,n),i=oe(null),u=oe(null),s=oe(null),l=oe(null),a=oe(null),c=oe(null),d=oe(null),f=oe(null),h=oe(null),p=oe(null),g=oe(null),b=oe(0),v=oe(0),m=oe(!1),w=oe(!1);let y=!1,S=!1,z,_,E=0,k=0,F=0,L=0;const I=Hm(),J=Pe("Scrollbar","-scrollbar",y6,Xl,e,n),G=R(()=>{const{value:V}=f,{value:se}=c,{value:me}=p;return V===null||se===null||me===null?0:Math.min(V,me*V/se+ec(J.value.self.width)*1.5)}),$=R(()=>`${G.value}px`),q=R(()=>{const{value:V}=h,{value:se}=d,{value:me}=g;return V===null||se===null||me===null?0:me*V/se+ec(J.value.self.height)*1.5}),P=R(()=>`${q.value}px`),Z=R(()=>{const{value:V}=f,{value:se}=b,{value:me}=c,{value:Me}=p;if(V===null||me===null||Me===null)return 0;{const en=me-V;return en?se/en*(Me-G.value):0}}),be=R(()=>`${Z.value}px`),ke=R(()=>{const{value:V}=h,{value:se}=v,{value:me}=d,{value:Me}=g;if(V===null||me===null||Me===null)return 0;{const en=me-V;return en?se/en*(Me-q.value):0}}),ee=R(()=>`${ke.value}px`),te=R(()=>{const{value:V}=f,{value:se}=c;return V!==null&&se!==null&&se>V}),j=R(()=>{const{value:V}=h,{value:se}=d;return V!==null&&se!==null&&se>V}),de=R(()=>{const{trigger:V}=e;return V==="none"||m.value}),ye=R(()=>{const{trigger:V}=e;return V==="none"||w.value}),$e=R(()=>{const{container:V}=e;return V?V():u.value}),B=R(()=>{const{content:V}=e;return V?V():s.value}),re=(V,se)=>{if(!e.scrollable)return;if(typeof V=="number"){C(V,se??0,0,!1,"auto");return}const{left:me,top:Me,index:en,elSize:Tn,position:Zn,behavior:qe,el:jn,debounce:jt=!0}=V;(me!==void 0||Me!==void 0)&&C(me??0,Me??0,0,!1,qe),jn!==void 0?C(0,jn.offsetTop,jn.offsetHeight,jt,qe):en!==void 0&&Tn!==void 0?C(0,en*Tn,Tn,jt,qe):Zn==="bottom"?C(0,Number.MAX_SAFE_INTEGER,0,!1,qe):Zn==="top"&&C(0,0,0,!1,qe)},T=Rl(()=>{e.container||re({top:b.value,left:v.value})}),ae=()=>{T.isDeactivated||fe()},_e=V=>{if(T.isDeactivated)return;const{onResize:se}=e;se&&se(V),fe()},x=(V,se)=>{if(!e.scrollable)return;const{value:me}=$e;me&&(typeof V=="object"?me.scrollBy(V):me.scrollBy(V,se||0))};function C(V,se,me,Me,en){const{value:Tn}=$e;if(Tn){if(Me){const{scrollTop:Zn,offsetHeight:qe}=Tn;if(se>Zn){se+me<=Zn+qe||Tn.scrollTo({left:V,top:se+me-qe,behavior:en});return}}Tn.scrollTo({left:V,top:se,behavior:en})}}function D(){Q(),X(),fe()}function N(){U()}function U(){M(),ne()}function M(){_!==void 0&&window.clearTimeout(_),_=window.setTimeout(()=>{w.value=!1},e.duration)}function ne(){z!==void 0&&window.clearTimeout(z),z=window.setTimeout(()=>{m.value=!1},e.duration)}function Q(){z!==void 0&&window.clearTimeout(z),m.value=!0}function X(){_!==void 0&&window.clearTimeout(_),w.value=!0}function W(V){const{onScroll:se}=e;se&&se(V),he()}function he(){const{value:V}=$e;V&&(b.value=V.scrollTop,v.value=V.scrollLeft*(o!=null&&o.value?-1:1))}function ie(){const{value:V}=B;V&&(c.value=V.offsetHeight,d.value=V.offsetWidth);const{value:se}=$e;se&&(f.value=se.offsetHeight,h.value=se.offsetWidth);const{value:me}=a,{value:Me}=l;me&&(g.value=me.offsetWidth),Me&&(p.value=Me.offsetHeight)}function ce(){const{value:V}=$e;V&&(b.value=V.scrollTop,v.value=V.scrollLeft*(o!=null&&o.value?-1:1),f.value=V.offsetHeight,h.value=V.offsetWidth,c.value=V.scrollHeight,d.value=V.scrollWidth);const{value:se}=a,{value:me}=l;se&&(g.value=se.offsetWidth),me&&(p.value=me.offsetHeight)}function fe(){e.scrollable&&(e.useUnifiedContainer?ce():(ie(),he()))}function we(V){var se;return!(!((se=i.value)===null||se===void 0)&&se.contains(Gi(V)))}function ze(V){V.preventDefault(),V.stopPropagation(),S=!0,un("mousemove",window,Ee,!0),un("mouseup",window,Ve,!0),k=v.value,F=o!=null&&o.value?window.innerWidth-V.clientX:V.clientX}function Ee(V){if(!S)return;z!==void 0&&window.clearTimeout(z),_!==void 0&&window.clearTimeout(_);const{value:se}=h,{value:me}=d,{value:Me}=q;if(se===null||me===null)return;const Tn=(o!=null&&o.value?window.innerWidth-V.clientX-F:V.clientX-F)*(me-se)/(se-Me),Zn=me-se;let qe=k+Tn;qe=Math.min(Zn,qe),qe=Math.max(qe,0);const{value:jn}=$e;if(jn){jn.scrollLeft=qe*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:jt}=e;jt&&jt(qe)}}function Ve(V){V.preventDefault(),V.stopPropagation(),Ge("mousemove",window,Ee,!0),Ge("mouseup",window,Ve,!0),S=!1,fe(),we(V)&&U()}function Qe(V){V.preventDefault(),V.stopPropagation(),y=!0,un("mousemove",window,Sn,!0),un("mouseup",window,En,!0),E=b.value,L=V.clientY}function Sn(V){if(!y)return;z!==void 0&&window.clearTimeout(z),_!==void 0&&window.clearTimeout(_);const{value:se}=f,{value:me}=c,{value:Me}=G;if(se===null||me===null)return;const Tn=(V.clientY-L)*(me-se)/(se-Me),Zn=me-se;let qe=E+Tn;qe=Math.min(Zn,qe),qe=Math.max(qe,0);const{value:jn}=$e;jn&&(jn.scrollTop=qe)}function En(V){V.preventDefault(),V.stopPropagation(),Ge("mousemove",window,Sn,!0),Ge("mouseup",window,En,!0),y=!1,fe(),we(V)&&U()}Rt(()=>{const{value:V}=j,{value:se}=te,{value:me}=n,{value:Me}=a,{value:en}=l;Me&&(V?Me.classList.remove(`${me}-scrollbar-rail--disabled`):Me.classList.add(`${me}-scrollbar-rail--disabled`)),en&&(se?en.classList.remove(`${me}-scrollbar-rail--disabled`):en.classList.add(`${me}-scrollbar-rail--disabled`))}),Ln(()=>{e.container||fe()}),qn(()=>{z!==void 0&&window.clearTimeout(z),_!==void 0&&window.clearTimeout(_),Ge("mousemove",window,Sn,!0),Ge("mouseup",window,En,!0)});const Lt=R(()=>{const{common:{cubicBezierEaseInOut:V},self:{color:se,colorHover:me,height:Me,width:en,borderRadius:Tn,railInsetHorizontalTop:Zn,railInsetHorizontalBottom:qe,railInsetVerticalRight:jn,railInsetVerticalLeft:jt,railColor:Xp}}=J.value,{top:Yp,right:Jp,bottom:Qp,left:e1}=br(Zn),{top:n1,right:t1,bottom:r1,left:o1}=br(qe),{top:i1,right:u1,bottom:s1,left:l1}=br(o!=null&&o.value?Cc(jn):jn),{top:a1,right:c1,bottom:d1,left:f1}=br(o!=null&&o.value?Cc(jt):jt);return{"--n-scrollbar-bezier":V,"--n-scrollbar-color":se,"--n-scrollbar-color-hover":me,"--n-scrollbar-border-radius":Tn,"--n-scrollbar-width":en,"--n-scrollbar-height":Me,"--n-scrollbar-rail-top-horizontal-top":Yp,"--n-scrollbar-rail-right-horizontal-top":Jp,"--n-scrollbar-rail-bottom-horizontal-top":Qp,"--n-scrollbar-rail-left-horizontal-top":e1,"--n-scrollbar-rail-top-horizontal-bottom":n1,"--n-scrollbar-rail-right-horizontal-bottom":t1,"--n-scrollbar-rail-bottom-horizontal-bottom":r1,"--n-scrollbar-rail-left-horizontal-bottom":o1,"--n-scrollbar-rail-top-vertical-right":i1,"--n-scrollbar-rail-right-vertical-right":u1,"--n-scrollbar-rail-bottom-vertical-right":s1,"--n-scrollbar-rail-left-vertical-right":l1,"--n-scrollbar-rail-top-vertical-left":a1,"--n-scrollbar-rail-right-vertical-left":c1,"--n-scrollbar-rail-bottom-vertical-left":d1,"--n-scrollbar-rail-left-vertical-left":f1,"--n-scrollbar-rail-color":Xp}}),xt=t?Gn("scrollbar",void 0,Lt,e):void 0;return Object.assign(Object.assign({},{scrollTo:re,scrollBy:x,sync:fe,syncUnifiedContainer:ce,handleMouseEnterWrapper:D,handleMouseLeaveWrapper:N}),{mergedClsPrefix:n,rtlEnabled:o,containerScrollTop:b,wrapperRef:i,containerRef:u,contentRef:s,yRailRef:l,xRailRef:a,needYBar:te,needXBar:j,yBarSizePx:$,xBarSizePx:P,yBarTopPx:be,xBarLeftPx:ee,isShowXBar:de,isShowYBar:ye,isIos:I,handleScroll:W,handleContentResize:ae,handleContainerResize:_e,handleYScrollMouseDown:Qe,handleXScrollMouseDown:ze,containerWidth:h,cssVars:t?void 0:Lt,themeClass:xt==null?void 0:xt.themeClass,onRender:xt==null?void 0:xt.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:i,yPlacement:u,xPlacement:s,xScrollable:l}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",c=(h,p)=>A("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${u}`,h],"data-scrollbar-rail":!0,style:[p||"",this.verticalRailStyle],"aria-hidden":!0},A(a?wc:Dr,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),d=()=>{var h,p;return(h=this.onRender)===null||h===void 0||h.call(this),A("div",Pr(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=n.default)===null||p===void 0?void 0:p.call(n):A("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:[this.containerStyle,this.internalExposeWidthCssVar?{"--n-scrollbar-current-width":vm(this.containerWidth)}:void 0],onScroll:this.handleScroll,onWheel:this.onWheel},A(Xi,{onResize:this.handleContentResize},{default:()=>A("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:c(void 0,void 0),l&&A("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${s}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},A(a?wc:Dr,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?d():A(Xi,{onResize:this.handleContainerResize},{default:d});return i?A(Le,null,f,c(this.themeClass,this.cssVars)):f}}),$h=fi;function Xc(e){return Array.isArray(e)?e:[e]}const nl={STOP:"STOP"};function Oh(e,n){const t=n(e);e.children!==void 0&&t!==nl.STOP&&e.children.forEach(r=>Oh(r,n))}function _6(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?u=>{u.isLeaf||(r.push(u.key),i(u.children))}:u=>{u.isLeaf||(u.isGroup||r.push(u.key),i(u.children))};function i(u){u.forEach(o)}return i(e),r}function w6(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function k6(e){return e.children}function S6(e){return e.key}function E6(){return!1}function A6(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function T6(e){return e.disabled===!0}function D6(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function ss(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ls(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function z6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function F6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function I6(e){return(e==null?void 0:e.type)==="group"}function i9(e){const n=new Map;return e.forEach((t,r)=>{n.set(t.key,r)}),t=>{var r;return(r=n.get(t))!==null&&r!==void 0?r:null}}class P6 extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function R6(e,n,t,r){return tu(n.concat(e),t,r,!1)}function $6(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function O6(e,n,t,r){const o=tu(n,t,r,!1),i=tu(e,t,r,!0),u=$6(e,t),s=[];return o.forEach(l=>{(i.has(l)||u.has(l))&&s.push(l)}),s.forEach(l=>o.delete(l)),o}function as(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:u,leafOnly:s,checkStrategy:l,allowNotLoaded:a}=e;if(!u)return r!==void 0?{checkedKeys:z6(t,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:F6(t,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=n;let d;o!==void 0?d=O6(o,t,n,a):r!==void 0?d=R6(r,t,n,a):d=tu(t,n,a,!1);const f=l==="parent",h=l==="child"||s,p=d,g=new Set,b=Math.max.apply(null,Array.from(c.keys()));for(let v=b;v>=0;v-=1){const m=v===0,w=c.get(v);for(const y of w){if(y.isLeaf)continue;const{key:S,shallowLoaded:z}=y;if(h&&z&&y.children.forEach(F=>{!F.disabled&&!F.isLeaf&&F.shallowLoaded&&p.has(F.key)&&p.delete(F.key)}),y.disabled||!z)continue;let _=!0,E=!1,k=!0;for(const F of y.children){const L=F.key;if(!F.disabled){if(k&&(k=!1),p.has(L))E=!0;else if(g.has(L)){E=!0,_=!1;break}else if(_=!1,E)break}}_&&!k?(f&&y.children.forEach(F=>{!F.disabled&&p.has(F.key)&&p.delete(F.key)}),p.add(S)):E&&g.add(S),m&&h&&p.has(S)&&p.delete(S)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(g)}}function tu(e,n,t,r){const{treeNodeMap:o,getChildren:i}=n,u=new Set,s=new Set(e);return e.forEach(l=>{const a=o.get(l);a!==void 0&&Oh(a,c=>{if(c.disabled)return nl.STOP;const{key:d}=c;if(!u.has(d)&&(u.add(d),s.add(d),D6(c.rawNode,i))){if(r)return nl.STOP;if(!t)throw new P6}})}),s}function B6(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const i=r.treeNodeMap;let u=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const s={keyPath:[],treeNodePath:[],treeNode:u};if(u!=null&&u.ignored)return s.treeNode=null,s;for(;u;)!u.ignored&&(n||!u.isGroup)&&s.treeNodePath.push(u),u=u.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function M6(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function N6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Yc(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?L6:N6,i={reverse:n==="prev"};let u=!1,s=null;function l(a){if(a!==null){if(a===e){if(!u)u=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!a.disabled||r)&&!a.ignored&&!a.isGroup){s=a;return}if(a.isGroup){const c=Yl(a,i);c!==null?s=c:l(o(a,t))}else{const c=o(a,!1);if(c!==null)l(c);else{const d=j6(a);d!=null&&d.isGroup?l(o(d,t)):t&&l(o(a,!0))}}}}return l(e),s}function L6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function j6(e){return e.parent}function Yl(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,i=t?o-1:0,u=t?-1:o,s=t?-1:1;for(let l=i;l!==u;l+=s){const a=r[l];if(!a.disabled&&!a.ignored)if(a.isGroup){const c=Yl(a,n);if(c!==null)return c}else return a}}return null}const H6={getChild(){return this.ignored?null:Yl(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Yc(this,"next",e)},getPrev(e={}){return Yc(this,"prev",e)}};function U6(e,n){const t=n?new Set(n):void 0,r=[];function o(i){i.forEach(u=>{r.push(u),!(u.isLeaf||!u.children||u.ignored)&&(u.isGroup||t===void 0||t.has(u.key))&&o(u.children)})}return o(e),r}function K6(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Bh(e,n,t,r,o,i=null,u=0){const s=[];return e.forEach((l,a)=>{var c;const d=Object.create(r);if(d.rawNode=l,d.siblings=s,d.level=u,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===e.length,d.parent=i,!d.ignored){const f=o(l);Array.isArray(f)&&(d.children=Bh(f,n,t,r,o,d,u+1))}s.push(d),n.set(d.key,d),t.has(u)||t.set(u,[]),(c=t.get(u))===null||c===void 0||c.push(d)}),s}function $i(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:i=T6,getIgnored:u=E6,getIsGroup:s=I6,getKey:l=S6}=n,a=(t=n.getChildren)!==null&&t!==void 0?t:k6,c=n.ignoreEmptyChildren?y=>{const S=a(y);return Array.isArray(S)?S.length?S:null:S}:a,d=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return w6(this.rawNode,c)},get shallowLoaded(){return A6(this.rawNode,c)},get ignored(){return u(this.rawNode)},contains(y){return K6(this,y)}},H6),f=Bh(e,r,o,d,c);function h(y){if(y==null)return null;const S=r.get(y);return S&&!S.isGroup&&!S.ignored?S:null}function p(y){if(y==null)return null;const S=r.get(y);return S&&!S.ignored?S:null}function g(y,S){const z=p(y);return z?z.getPrev(S):null}function b(y,S){const z=p(y);return z?z.getNext(S):null}function v(y){const S=p(y);return S?S.getParent():null}function m(y){const S=p(y);return S?S.getChild():null}const w={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(y){return U6(f,y)},getNode:h,getPrev:g,getNext:b,getParent:v,getChild:m,getFirstAvailableNode(){return M6(f)},getPath(y,S={}){return B6(y,S,w)},getCheckedKeys(y,S={}){const{cascade:z=!0,leafOnly:_=!1,checkStrategy:E="all",allowNotLoaded:k=!1}=S;return as({checkedKeys:ss(y),indeterminateKeys:ls(y),cascade:z,leafOnly:_,checkStrategy:E,allowNotLoaded:k},w)},check(y,S,z={}){const{cascade:_=!0,leafOnly:E=!1,checkStrategy:k="all",allowNotLoaded:F=!1}=z;return as({checkedKeys:ss(S),indeterminateKeys:ls(S),keysToCheck:y==null?[]:Xc(y),cascade:_,leafOnly:E,checkStrategy:k,allowNotLoaded:F},w)},uncheck(y,S,z={}){const{cascade:_=!0,leafOnly:E=!1,checkStrategy:k="all",allowNotLoaded:F=!1}=z;return as({checkedKeys:ss(S),indeterminateKeys:ls(S),keysToUncheck:y==null?[]:Xc(y),cascade:_,leafOnly:E,checkStrategy:k,allowNotLoaded:F},w)},getNonLeafKeys(y={}){return _6(f,y)}};return w}const{cubicBezierEaseIn:Jc,cubicBezierEaseOut:Qc}=di;function W6({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:r="",originalTransition:o=""}={}){return[O("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${Jc}, transform ${n} ${Jc} ${o&&`,${o}`}`}),O("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Qc}, transform ${n} ${Qc} ${o&&`,${o}`}`}),O("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${t})`}),O("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const V6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function q6(e){const{boxShadow2:n,popoverColor:t,textColor2:r,borderRadius:o,fontSize:i,dividerColor:u}=e;return Object.assign(Object.assign({},V6),{fontSize:i,borderRadius:o,color:t,dividerColor:u,textColor:r,boxShadow:n})}const Jl={name:"Popover",common:In,peers:{Scrollbar:Xl},self:q6},cs={top:"bottom",bottom:"top",left:"right",right:"left"},nn="var(--n-arrow-height) * 1.414",G6=O([H("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[O(">",[H("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ln("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[ln("scrollable",[ln("show-header-or-footer","padding: var(--n-padding);")])]),K("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),K("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Y("scrollable, show-header-or-footer",[K("content",`
 padding: var(--n-padding);
 `)])]),H("popover-shared",`
 transform-origin: inherit;
 `,[H("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[H("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${nn});
 height: calc(${nn});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),O("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),O("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),O("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),O("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Un("top-start",`
 top: calc(${nn} / -2);
 left: calc(${_t("top-start")} - var(--v-offset-left));
 `),Un("top",`
 top: calc(${nn} / -2);
 transform: translateX(calc(${nn} / -2)) rotate(45deg);
 left: 50%;
 `),Un("top-end",`
 top: calc(${nn} / -2);
 right: calc(${_t("top-end")} + var(--v-offset-left));
 `),Un("bottom-start",`
 bottom: calc(${nn} / -2);
 left: calc(${_t("bottom-start")} - var(--v-offset-left));
 `),Un("bottom",`
 bottom: calc(${nn} / -2);
 transform: translateX(calc(${nn} / -2)) rotate(45deg);
 left: 50%;
 `),Un("bottom-end",`
 bottom: calc(${nn} / -2);
 right: calc(${_t("bottom-end")} + var(--v-offset-left));
 `),Un("left-start",`
 left: calc(${nn} / -2);
 top: calc(${_t("left-start")} - var(--v-offset-top));
 `),Un("left",`
 left: calc(${nn} / -2);
 transform: translateY(calc(${nn} / -2)) rotate(45deg);
 top: 50%;
 `),Un("left-end",`
 left: calc(${nn} / -2);
 bottom: calc(${_t("left-end")} + var(--v-offset-top));
 `),Un("right-start",`
 right: calc(${nn} / -2);
 top: calc(${_t("right-start")} - var(--v-offset-top));
 `),Un("right",`
 right: calc(${nn} / -2);
 transform: translateY(calc(${nn} / -2)) rotate(45deg);
 top: 50%;
 `),Un("right-end",`
 right: calc(${nn} / -2);
 bottom: calc(${_t("right-end")} + var(--v-offset-top));
 `),...i6({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${nn}) / 2)`,l=_t(o);return O(`[v-placement="${o}"] >`,[H("popover-shared",[Y("center-arrow",[H("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function _t(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Un(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return O(`[v-placement="${e}"] >`,[H("popover-shared",`
 margin-${cs[t]}: var(--n-space);
 `,[Y("show-arrow",`
 margin-${cs[t]}: var(--n-space-arrow);
 `),Y("overlap",`
 margin: 0;
 `),gm("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${cs[t]}: auto;
 ${r}
 `,[H("popover-arrow",n)])])])}const Mh=Object.assign(Object.assign({},Pe.props),{to:no.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Nh({arrowClass:e,arrowStyle:n,arrowWrapperClass:t,arrowWrapperStyle:r,clsPrefix:o}){return A("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,t]},A("div",{class:[`${o}-popover-arrow`,e],style:n}))}const Z6=le({name:"PopoverBody",inheritAttrs:!1,props:Mh,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:u}=kn(e),s=Pe("Popover","-popover",G6,Jl,e,o),l=Eu("Popover",u,o),a=oe(null),c=ve("NPopover"),d=oe(null),f=oe(e.show),h=oe(!1);Rt(()=>{const{show:k}=e;k&&!Bv()&&!e.internalDeactivateImmediately&&(h.value=!0)});const p=R(()=>{const{trigger:k,onClickoutside:F}=e,L=[],{positionManuallyRef:{value:I}}=c;return I||(k==="click"&&!F&&L.push([oc,z,void 0,{capture:!0}]),k==="hover"&&L.push([Zm,S])),F&&L.push([oc,z,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&L.push([gb,e.show]),L}),g=R(()=>{const{common:{cubicBezierEaseInOut:k,cubicBezierEaseIn:F,cubicBezierEaseOut:L},self:{space:I,spaceArrow:J,padding:G,fontSize:$,textColor:q,dividerColor:P,color:Z,boxShadow:be,borderRadius:ke,arrowHeight:ee,arrowOffset:te,arrowOffsetVertical:j}}=s.value;return{"--n-box-shadow":be,"--n-bezier":k,"--n-bezier-ease-in":F,"--n-bezier-ease-out":L,"--n-font-size":$,"--n-text-color":q,"--n-color":Z,"--n-divider-color":P,"--n-border-radius":ke,"--n-arrow-height":ee,"--n-arrow-offset":te,"--n-arrow-offset-vertical":j,"--n-padding":G,"--n-space":I,"--n-space-arrow":J}}),b=R(()=>{const k=e.width==="trigger"?void 0:er(e.width),F=[];k&&F.push({width:k});const{maxWidth:L,minWidth:I}=e;return L&&F.push({maxWidth:er(L)}),I&&F.push({maxWidth:er(I)}),i||F.push(g.value),F}),v=i?Gn("popover",void 0,g,e):void 0;c.setBodyInstance({syncPosition:m}),qn(()=>{c.setBodyInstance(null)}),cn(He(e,"show"),k=>{e.animated||(k?f.value=!0:f.value=!1)});function m(){var k;(k=a.value)===null||k===void 0||k.syncPosition()}function w(k){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&c.handleMouseEnter(k)}function y(k){e.trigger==="hover"&&e.keepAliveOnHover&&c.handleMouseLeave(k)}function S(k){e.trigger==="hover"&&!_().contains(Gi(k))&&c.handleMouseMoveOutside(k)}function z(k){(e.trigger==="click"&&!_().contains(Gi(k))||e.onClickoutside)&&c.handleClickOutside(k)}function _(){return c.getTriggerElement()}Ke(_u,d),Ke(Il,null),Ke(Pl,null);function E(){if(v==null||v.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let F;const L=c.internalRenderBodyRef.value,{value:I}=o;if(L)F=L([`${I}-popover-shared`,(l==null?void 0:l.value)&&`${I}-popover--rtl`,v==null?void 0:v.themeClass.value,e.overlap&&`${I}-popover-shared--overlap`,e.showArrow&&`${I}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${I}-popover-shared--center-arrow`],d,b.value,w,y);else{const{value:J}=c.extraClassRef,{internalTrapFocus:G}=e,$=!_c(n.header)||!_c(n.footer),q=()=>{var P,Z;const be=$?A(Le,null,zn(n.header,te=>te?A("div",{class:[`${I}-popover__header`,e.headerClass],style:e.headerStyle},te):null),zn(n.default,te=>te?A("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},n):null),zn(n.footer,te=>te?A("div",{class:[`${I}-popover__footer`,e.footerClass],style:e.footerStyle},te):null)):e.scrollable?(P=n.default)===null||P===void 0?void 0:P.call(n):A("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},n),ke=e.scrollable?A($h,{themeOverrides:s.value.peerOverrides.Scrollbar,theme:s.value.peers.Scrollbar,contentClass:$?void 0:`${I}-popover__content ${(Z=e.contentClass)!==null&&Z!==void 0?Z:""}`,contentStyle:$?void 0:e.contentStyle},{default:()=>be}):be,ee=e.showArrow?Nh({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:I}):null;return[ke,ee]};F=A("div",Pr({class:[`${I}-popover`,`${I}-popover-shared`,(l==null?void 0:l.value)&&`${I}-popover--rtl`,v==null?void 0:v.themeClass.value,J.map(P=>`${I}-${P}`),{[`${I}-popover--scrollable`]:e.scrollable,[`${I}-popover--show-header-or-footer`]:$,[`${I}-popover--raw`]:e.raw,[`${I}-popover-shared--overlap`]:e.overlap,[`${I}-popover-shared--show-arrow`]:e.showArrow,[`${I}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:d,style:b.value,onKeydown:c.handleKeydown,onMouseenter:w,onMouseleave:y},t),G?A($v,{active:e.show,autoFocus:!0},{default:q}):q())}return gu(F,p.value)}return{displayed:h,namespace:r,isMounted:c.isMountedRef,zIndex:c.zIndexRef,followerRef:a,adjustedTo:no(e),followerEnabled:f,renderContentNode:E}},render(){return A(K0,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===no.tdkey},{default:()=>this.animated?A(Dr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),X6=Object.keys(Mh),Y6={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function J6(e,n,t){Y6[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=t[r];o?e.props[r]=(...u)=>{o(...u),i(...u)}:e.props[r]=i})}const Au={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:no.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Q6=Object.assign(Object.assign(Object.assign({},Pe.props),Au),{internalOnAfterLeave:Function,internalRenderBody:Function}),Lh=le({name:"Popover",inheritAttrs:!1,props:Q6,slots:Object,__popover__:!0,setup(e){const n=R0(),t=oe(null),r=R(()=>e.show),o=oe(e.defaultShow),i=Wo(r,o),u=Fn(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:$}=e;return!!($!=null&&$())},l=()=>s()?!1:i.value,a=$0(e,["arrow","showArrow"]),c=R(()=>e.overlap?!1:a.value);let d=null;const f=oe(null),h=oe(null),p=Fn(()=>e.x!==void 0&&e.y!==void 0);function g($){const{"onUpdate:show":q,onUpdateShow:P,onShow:Z,onHide:be}=e;o.value=$,q&&Ye(q,$),P&&Ye(P,$),$&&Z&&Ye(Z,!0),$&&be&&Ye(be,!1)}function b(){d&&d.syncPosition()}function v(){const{value:$}=f;$&&(window.clearTimeout($),f.value=null)}function m(){const{value:$}=h;$&&(window.clearTimeout($),h.value=null)}function w(){const $=s();if(e.trigger==="focus"&&!$){if(l())return;g(!0)}}function y(){const $=s();if(e.trigger==="focus"&&!$){if(!l())return;g(!1)}}function S(){const $=s();if(e.trigger==="hover"&&!$){if(m(),f.value!==null||l())return;const q=()=>{g(!0),f.value=null},{delay:P}=e;P===0?q():f.value=window.setTimeout(q,P)}}function z(){const $=s();if(e.trigger==="hover"&&!$){if(v(),h.value!==null||!l())return;const q=()=>{g(!1),h.value=null},{duration:P}=e;P===0?q():h.value=window.setTimeout(q,P)}}function _(){z()}function E($){var q;l()&&(e.trigger==="click"&&(v(),m(),g(!1)),(q=e.onClickoutside)===null||q===void 0||q.call(e,$))}function k(){if(e.trigger==="click"&&!s()){v(),m();const $=!l();g($)}}function F($){e.internalTrapFocus&&$.key==="Escape"&&(v(),m(),g(!1))}function L($){o.value=$}function I(){var $;return($=t.value)===null||$===void 0?void 0:$.targetRef}function J($){d=$}return Ke("NPopover",{getTriggerElement:I,handleKeydown:F,handleMouseEnter:S,handleMouseLeave:z,handleClickOutside:E,handleMouseMoveOutside:_,setBodyInstance:J,positionManuallyRef:p,isMountedRef:n,zIndexRef:He(e,"zIndex"),extraClassRef:He(e,"internalExtraClass"),internalRenderBodyRef:He(e,"internalRenderBody")}),Rt(()=>{i.value&&s()&&g(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:u,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:l,setShow:L,handleClick:k,handleMouseEnter:S,handleMouseLeave:z,handleFocus:w,handleBlur:y,syncPosition:b}},render(){var e;const{positionManually:n,$slots:t}=this;let r,o=!1;if(!n&&(r=Nv(t,"trigger"),r)){r=$t(r),r=r.type===li?A("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:u}=this,s=[i,...u],l={onBlur:a=>{s.forEach(c=>{c.onBlur(a)})},onFocus:a=>{s.forEach(c=>{c.onFocus(a)})},onClick:a=>{s.forEach(c=>{c.onClick(a)})},onMouseenter:a=>{s.forEach(c=>{c.onMouseenter(a)})},onMouseleave:a=>{s.forEach(c=>{c.onMouseleave(a)})}};J6(r,u?"nested":n?"manual":this.trigger,l)}}return A(L0,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?gu(A("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[H0,{enabled:i,zIndex:this.zIndex}]]):null,n?null:A(j0,null,{default:()=>r}),A(Z6,Io(this.$props,X6,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var u,s;return(s=(u=this.$slots).default)===null||s===void 0?void 0:s.call(u)},header:()=>{var u,s;return(s=(u=this.$slots).header)===null||s===void 0?void 0:s.call(u)},footer:()=>{var u,s;return(s=(u=this.$slots).footer)===null||s===void 0?void 0:s.call(u)}})]}})}}),e4={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function n4(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:r,primaryColor:o,infoColor:i,successColor:u,warningColor:s,errorColor:l,baseColor:a,borderColor:c,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,borderRadiusSmall:b,fontSizeMini:v,fontSizeTiny:m,fontSizeSmall:w,fontSizeMedium:y,heightMini:S,heightTiny:z,heightSmall:_,heightMedium:E,closeColorHover:k,closeColorPressed:F,buttonColor2Hover:L,buttonColor2Pressed:I,fontWeightStrong:J}=e;return Object.assign(Object.assign({},e4),{closeBorderRadius:b,heightTiny:S,heightSmall:z,heightMedium:_,heightLarge:E,borderRadius:b,opacityDisabled:d,fontSizeTiny:v,fontSizeSmall:m,fontSizeMedium:w,fontSizeLarge:y,fontWeightStrong:J,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:a,colorCheckable:"#0000",colorHoverCheckable:L,colorPressedCheckable:I,colorChecked:o,colorCheckedHover:t,colorCheckedPressed:r,border:`1px solid ${c}`,textColor:n,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:k,closeColorPressed:F,borderPrimary:`1px solid ${Fe(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:Fe(o,{alpha:.12}),colorBorderedPrimary:Fe(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:Fe(o,{alpha:.12}),closeColorPressedPrimary:Fe(o,{alpha:.18}),borderInfo:`1px solid ${Fe(i,{alpha:.3})}`,textColorInfo:i,colorInfo:Fe(i,{alpha:.12}),colorBorderedInfo:Fe(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:Fe(i,{alpha:.12}),closeColorPressedInfo:Fe(i,{alpha:.18}),borderSuccess:`1px solid ${Fe(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:Fe(u,{alpha:.12}),colorBorderedSuccess:Fe(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:Fe(u,{alpha:.12}),closeColorPressedSuccess:Fe(u,{alpha:.18}),borderWarning:`1px solid ${Fe(s,{alpha:.35})}`,textColorWarning:s,colorWarning:Fe(s,{alpha:.15}),colorBorderedWarning:Fe(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:Fe(s,{alpha:.12}),closeColorPressedWarning:Fe(s,{alpha:.18}),borderError:`1px solid ${Fe(l,{alpha:.23})}`,textColorError:l,colorError:Fe(l,{alpha:.1}),colorBorderedError:Fe(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:Fe(l,{alpha:.12}),closeColorPressedError:Fe(l,{alpha:.18})})}const t4={common:In,self:n4},r4={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},o4=H("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),K("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),K("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),K("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),K("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Y("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[K("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),K("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Y("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Y("icon, avatar",[Y("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Y("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Y("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ln("disabled",[O("&:hover","background-color: var(--n-color-hover-checkable);",[ln("checked","color: var(--n-text-color-hover-checkable);")]),O("&:active","background-color: var(--n-color-pressed-checkable);",[ln("checked","color: var(--n-text-color-pressed-checkable);")])]),Y("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ln("disabled",[O("&:hover","background-color: var(--n-color-checked-hover);"),O("&:active","background-color: var(--n-color-checked-pressed);")])])])]),i4=Object.assign(Object.assign(Object.assign({},Pe.props),r4),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),jh="n-tag",u9=le({name:"Tag",props:i4,slots:Object,setup(e){const n=oe(null),{mergedBorderedRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i,mergedComponentPropsRef:u}=kn(e),s=R(()=>{var g,b;return e.size||((b=(g=u==null?void 0:u.value)===null||g===void 0?void 0:g.Tag)===null||b===void 0?void 0:b.size)||"medium"}),l=Pe("Tag","-tag",o4,t4,e,r);Ke(jh,{roundRef:He(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:g,onCheckedChange:b,onUpdateChecked:v,"onUpdate:checked":m}=e;v&&v(!g),m&&m(!g),b&&b(!g)}}function c(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:b}=e;b&&Ye(b,g)}}const d={setTextContent(g){const{value:b}=n;b&&(b.textContent=g)}},f=Eu("Tag",i,r),h=R(()=>{const{type:g,color:{color:b,textColor:v}={}}=e,m=s.value,{common:{cubicBezierEaseInOut:w},self:{padding:y,closeMargin:S,borderRadius:z,opacityDisabled:_,textColorCheckable:E,textColorHoverCheckable:k,textColorPressedCheckable:F,textColorChecked:L,colorCheckable:I,colorHoverCheckable:J,colorPressedCheckable:G,colorChecked:$,colorCheckedHover:q,colorCheckedPressed:P,closeBorderRadius:Z,fontWeightStrong:be,[Ie("colorBordered",g)]:ke,[Ie("closeSize",m)]:ee,[Ie("closeIconSize",m)]:te,[Ie("fontSize",m)]:j,[Ie("height",m)]:de,[Ie("color",g)]:ye,[Ie("textColor",g)]:$e,[Ie("border",g)]:B,[Ie("closeIconColor",g)]:re,[Ie("closeIconColorHover",g)]:T,[Ie("closeIconColorPressed",g)]:ae,[Ie("closeColorHover",g)]:_e,[Ie("closeColorPressed",g)]:x}}=l.value,C=br(S);return{"--n-font-weight-strong":be,"--n-avatar-size-override":`calc(${de} - 8px)`,"--n-bezier":w,"--n-border-radius":z,"--n-border":B,"--n-close-icon-size":te,"--n-close-color-pressed":x,"--n-close-color-hover":_e,"--n-close-border-radius":Z,"--n-close-icon-color":re,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":ae,"--n-close-icon-color-disabled":re,"--n-close-margin-top":C.top,"--n-close-margin-right":C.right,"--n-close-margin-bottom":C.bottom,"--n-close-margin-left":C.left,"--n-close-size":ee,"--n-color":b||(t.value?ke:ye),"--n-color-checkable":I,"--n-color-checked":$,"--n-color-checked-hover":q,"--n-color-checked-pressed":P,"--n-color-hover-checkable":J,"--n-color-pressed-checkable":G,"--n-font-size":j,"--n-height":de,"--n-opacity-disabled":_,"--n-padding":y,"--n-text-color":v||$e,"--n-text-color-checkable":E,"--n-text-color-checked":L,"--n-text-color-hover-checkable":k,"--n-text-color-pressed-checkable":F}}),p=o?Gn("tag",R(()=>{let g="";const{type:b,color:{color:v,textColor:m}={}}=e;return g+=b[0],g+=s.value[0],v&&(g+=`a${Us(v)}`),m&&(g+=`b${Us(m)}`),t.value&&(g+="c"),g}),h,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:f,mergedClsPrefix:r,contentRef:n,mergedBordered:t,handleClick:a,handleCloseClick:c,cssVars:o?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:u,onRender:s,$slots:l}=this;s==null||s();const a=zn(l.avatar,d=>d&&A("div",{class:`${t}-tag__avatar`},d)),c=zn(l.icon,d=>d&&A("div",{class:`${t}-tag__icon`},d));return A("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:u,[`${t}-tag--avatar`]:a,[`${t}-tag--icon`]:c,[`${t}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c||a,A("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&o?A(Ph,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?A("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),{cubicBezierEaseInOut:rt,cubicBezierEaseOut:u4,cubicBezierEaseIn:s4}=di;function l4({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:u=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",a=s?"enter":"leave";return[O(`&.fade-in-height-expand-transition-${a}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),O(`&.fade-in-height-expand-transition-${a}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),O(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${rt} ${r},
 opacity ${n} ${u4} ${r},
 margin-top ${n} ${rt} ${r},
 margin-bottom ${n} ${rt} ${r},
 padding-top ${n} ${rt} ${r},
 padding-bottom ${n} ${rt} ${r}
 ${t?`,${t}`:""}
 `),O(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${rt},
 opacity ${n} ${s4},
 margin-top ${n} ${rt},
 margin-bottom ${n} ${rt},
 padding-top ${n} ${rt},
 padding-bottom ${n} ${rt}
 ${t?`,${t}`:""}
 `)]}const a4=B0&&"loading"in document.createElement("img");function c4(e={}){var n;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}}const ds=new WeakMap,fs=new WeakMap,hs=new WeakMap,d4=(e,n,t)=>{if(!e)return()=>{};const r=c4(n),{root:o}=r.options;let i;const u=ds.get(o);u?i=u:(i=new Map,ds.set(o,i));let s,l;i.has(r.hash)?(l=i.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=fs.get(f.target),p=hs.get(f.target);h&&h(),p&&(p.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],i.set(r.hash,l));let a=!1;const c=()=>{a||(fs.delete(e),hs.delete(e),a=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(r.hash),i.size||ds.delete(o))};return fs.set(e,c),hs.set(e,t),c};function f4(e){const{borderRadius:n,avatarColor:t,cardColor:r,fontSize:o,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,modalColor:c,popoverColor:d}=e;return{borderRadius:n,fontSize:o,border:`2px solid ${r}`,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,color:_r(r,t),colorModal:_r(c,t),colorPopover:_r(d,t)}}const h4={common:In,self:f4},p4="n-avatar-group",g4=H("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[S0(O("&","--n-merged-color: var(--n-color-modal);")),E0(O("&","--n-merged-color: var(--n-color-popover);")),O("img",`
 width: 100%;
 height: 100%;
 `),K("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),H("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),K("text","line-height: 1.25")]),b4=Object.assign(Object.assign({},Pe.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),m4=le({name:"Avatar",props:b4,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=oe(!1);let o=null;const i=oe(null),u=oe(null),s=()=>{const{value:m}=i;if(m&&(o===null||o!==m.innerHTML)){o=m.innerHTML;const{value:w}=u;if(w){const{offsetWidth:y,offsetHeight:S}=w,{offsetWidth:z,offsetHeight:_}=m,E=.9,k=Math.min(y/z*E,S/_*E,1);m.style.transform=`translateX(-50%) translateY(-50%) scale(${k})`}}},l=ve(p4,null),a=R(()=>{const{size:m}=e;if(m)return m;const{size:w}=l||{};return w||"medium"}),c=Pe("Avatar","-avatar",g4,h4,e,n),d=ve(jh,null),f=R(()=>{if(l)return!0;const{round:m,circle:w}=e;return m!==void 0||w!==void 0?m||w:d?d.roundRef.value:!1}),h=R(()=>l?!0:e.bordered||!1),p=R(()=>{const m=a.value,w=f.value,y=h.value,{color:S}=e,{self:{borderRadius:z,fontSize:_,color:E,border:k,colorModal:F,colorPopover:L},common:{cubicBezierEaseInOut:I}}=c.value;let J;return typeof m=="number"?J=`${m}px`:J=c.value.self[Ie("height",m)],{"--n-font-size":_,"--n-border":y?k:"none","--n-border-radius":w?"50%":z,"--n-color":S||E,"--n-color-modal":S||F,"--n-color-popover":S||L,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${J})`}}),g=t?Gn("avatar",R(()=>{const m=a.value,w=f.value,y=h.value,{color:S}=e;let z="";return m&&(typeof m=="number"?z+=`a${m}`:z+=m[0]),w&&(z+="b"),y&&(z+="c"),S&&(z+=Us(S)),z}),p,e):void 0,b=oe(!e.lazy);Ln(()=>{if(e.lazy&&e.intersectionObserverOptions){let m;const w=Rt(()=>{m==null||m(),m=void 0,e.lazy&&(m=d4(u.value,e.intersectionObserverOptions,b))});qn(()=>{w(),m==null||m()})}}),cn(()=>{var m;return e.src||((m=e.imgProps)===null||m===void 0?void 0:m.src)},()=>{r.value=!1});const v=oe(!e.lazy);return{textRef:i,selfRef:u,mergedRoundRef:f,mergedClsPrefix:n,fitTextTransform:s,cssVars:t?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:r,shouldStartLoading:b,loaded:v,mergedOnError:m=>{if(!b.value)return;r.value=!0;const{onError:w,imgProps:{onError:y}={}}=e;w==null||w(m),y==null||y(m)},mergedOnLoad:m=>{const{onLoad:w,imgProps:{onLoad:y}={}}=e;w==null||w(m),y==null||y(m),v.value=!0}}},render(){var e,n;const{$slots:t,src:r,mergedClsPrefix:o,lazy:i,onRender:u,loaded:s,hasLoadError:l,imgProps:a={}}=this;u==null||u();let c;const d=!s&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Ws(t.fallback,()=>[A("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=zn(t.default,f=>{if(f)return A(Xi,{onResize:this.fitTextTransform},{default:()=>A("span",{ref:"textRef",class:`${o}-avatar__text`},f)});if(r||a.src){const h=this.src||a.src;return A("img",Object.assign(Object.assign({},a),{loading:a4&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:i&&this.intersectionObserverOptions?this.shouldStartLoading?h:void 0:h,"data-image-src":h,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[a.style||"",{objectFit:this.objectFit},d?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),A("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},c,i&&d)}}),v4={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function x4(e){const{primaryColor:n,borderRadius:t,lineHeight:r,fontSize:o,cardColor:i,textColor2:u,textColor1:s,dividerColor:l,fontWeightStrong:a,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:g,boxShadow1:b,popoverColor:v,actionColor:m}=e;return Object.assign(Object.assign({},v4),{lineHeight:r,color:i,colorModal:g,colorPopover:v,colorTarget:n,colorEmbedded:m,colorEmbeddedModal:m,colorEmbeddedPopover:m,textColor:u,titleTextColor:s,borderColor:l,actionColor:m,titleFontWeight:a,closeColorHover:h,closeColorPressed:p,closeBorderRadius:t,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:b,borderRadius:t})}const y4={common:In,self:x4},ed=H("card-content",`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),C4=O([H("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[pm({background:"var(--n-color-modal)"}),Y("hoverable",[O("&:hover","box-shadow: var(--n-box-shadow);")]),Y("content-segmented",[O(">",[H("card-content",`
 padding-top: var(--n-padding-bottom);
 `),K("content-scrollbar",[O(">",[H("scrollbar-container",[O(">",[H("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),Y("content-soft-segmented",[O(">",[H("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),K("content-scrollbar",[O(">",[H("scrollbar-container",[O(">",[H("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),Y("footer-segmented",[O(">",[K("footer",`
 padding-top: var(--n-padding-bottom);
 `)])]),Y("footer-soft-segmented",[O(">",[K("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),O(">",[H("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[K("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),K("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),K("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),K("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),ed,H("card-content",[O("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),K("content-scrollbar",`
 display: flex;
 flex-direction: column;
 `,[O(">",[H("scrollbar-container",[O(">",[ed])])]),O("&:first-child >",[H("scrollbar-container",[O(">",[H("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])]),K("footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[O("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),K("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),H("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[O("img",`
 display: block;
 width: 100%;
 `)]),Y("bordered",`
 border: 1px solid var(--n-border-color);
 `,[O("&:target","border-color: var(--n-color-target);")]),Y("action-segmented",[O(">",[K("action",[O("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),Y("content-segmented, content-soft-segmented",[O(">",[H("card-content",`
 transition: border-color 0.3s var(--n-bezier);
 `,[O("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)]),K("content-scrollbar",`
 transition: border-color 0.3s var(--n-bezier);
 `,[O("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),Y("footer-segmented, footer-soft-segmented",[O(">",[K("footer",`
 transition: border-color 0.3s var(--n-bezier);
 `,[O("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),Y("embedded",`
 background-color: var(--n-color-embedded);
 `)]),S0(H("card",`
 background: var(--n-color-modal);
 `,[Y("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),E0(H("card",`
 background: var(--n-color-popover);
 `,[Y("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),_4={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},w4=Object.assign(Object.assign({},Pe.props),_4),k4=le({name:"Card",props:w4,slots:Object,setup(e){const n=()=>{const{onClose:d}=e;d&&Ye(d)},{inlineThemeDisabled:t,mergedClsPrefixRef:r,mergedRtlRef:o,mergedComponentPropsRef:i}=kn(e),u=Pe("Card","-card",C4,y4,e,r),s=Eu("Card",o,r),l=R(()=>{var d,f;return e.size||((f=(d=i==null?void 0:i.value)===null||d===void 0?void 0:d.Card)===null||f===void 0?void 0:f.size)||"medium"}),a=R(()=>{const d=l.value,{self:{color:f,colorModal:h,colorTarget:p,textColor:g,titleTextColor:b,titleFontWeight:v,borderColor:m,actionColor:w,borderRadius:y,lineHeight:S,closeIconColor:z,closeIconColorHover:_,closeIconColorPressed:E,closeColorHover:k,closeColorPressed:F,closeBorderRadius:L,closeIconSize:I,closeSize:J,boxShadow:G,colorPopover:$,colorEmbedded:q,colorEmbeddedModal:P,colorEmbeddedPopover:Z,[Ie("padding",d)]:be,[Ie("fontSize",d)]:ke,[Ie("titleFontSize",d)]:ee},common:{cubicBezierEaseInOut:te}}=u.value,{top:j,left:de,bottom:ye}=br(be);return{"--n-bezier":te,"--n-border-radius":y,"--n-color":f,"--n-color-modal":h,"--n-color-popover":$,"--n-color-embedded":q,"--n-color-embedded-modal":P,"--n-color-embedded-popover":Z,"--n-color-target":p,"--n-text-color":g,"--n-line-height":S,"--n-action-color":w,"--n-title-text-color":b,"--n-title-font-weight":v,"--n-close-icon-color":z,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":E,"--n-close-color-hover":k,"--n-close-color-pressed":F,"--n-border-color":m,"--n-box-shadow":G,"--n-padding-top":j,"--n-padding-bottom":ye,"--n-padding-left":de,"--n-font-size":ke,"--n-title-font-size":ee,"--n-close-size":J,"--n-close-icon-size":I,"--n-close-border-radius":L}}),c=t?Gn("card",R(()=>l.value[0]),a,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:u,handleCloseClick:n,cssVars:t?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:r,rtlEnabled:o,onRender:i,embedded:u,tag:s,$slots:l}=this;return i==null||i(),A(s,{class:[`${r}-card`,this.themeClass,u&&`${r}-card--embedded`,{[`${r}-card--rtl`]:o,[`${r}-card--content-scrollable`]:this.contentScrollable,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:n,[`${r}-card--hoverable`]:t}],style:this.cssVars,role:this.role},zn(l.cover,a=>{const c=this.cover?Xn([this.cover()]):a;return c&&A("div",{class:`${r}-card-cover`,role:"none"},c)}),zn(l.header,a=>{const{title:c}=this,d=c?Xn(typeof c=="function"?[c()]:[c]):a;return d||this.closable?A("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},A("div",{class:`${r}-card-header__main`,role:"heading"},d),zn(l["header-extra"],f=>{const h=this.headerExtra?Xn([this.headerExtra()]):f;return h&&A("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&A(Ph,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),zn(l.default,a=>{const{content:c}=this,d=c?Xn(typeof c=="function"?[c()]:[c]):a;return d?this.contentScrollable?A(fi,{class:`${r}-card__content-scrollbar`,contentClass:[`${r}-card-content`,this.contentClass],contentStyle:this.contentStyle},d):A("div",{class:[`${r}-card-content`,this.contentClass],style:this.contentStyle,role:"none"},d):null}),zn(l.footer,a=>{const c=this.footer?Xn([this.footer()]):a;return c&&A("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},c)}),zn(l.action,a=>{const c=this.action?Xn([this.action()]):a;return c&&A("div",{class:`${r}-card__action`,role:"none"},c)}))}}),S4={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(qo("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},E4=le({name:"ConfigProvider",alias:["App"],props:S4,setup(e){const n=ve(Ot,null),t=R(()=>{const{theme:g}=e;if(g===null)return;const b=n==null?void 0:n.mergedThemeRef.value;return g===void 0?b:b===void 0?g:Object.assign({},b,g)}),r=R(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const b=n==null?void 0:n.mergedThemeOverridesRef.value;return b===void 0?g:ko({},b,g)}}}),o=Fn(()=>{const{namespace:g}=e;return g===void 0?n==null?void 0:n.mergedNamespaceRef.value:g}),i=Fn(()=>{const{bordered:g}=e;return g===void 0?n==null?void 0:n.mergedBorderedRef.value:g}),u=R(()=>{const{icons:g}=e;return g===void 0?n==null?void 0:n.mergedIconsRef.value:g}),s=R(()=>{const{componentOptions:g}=e;return g!==void 0?g:n==null?void 0:n.mergedComponentPropsRef.value}),l=R(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n?n.mergedClsPrefixRef.value:Vs}),a=R(()=>{var g;const{rtl:b}=e;if(b===void 0)return n==null?void 0:n.mergedRtlRef.value;const v={};for(const m of b)v[m.name]=Mo(m),(g=m.peers)===null||g===void 0||g.forEach(w=>{w.name in v||(v[w.name]=Mo(w))});return v}),c=R(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),f=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),h=e.styleMountTarget||(n==null?void 0:n.styleMountTarget),p=R(()=>{const{value:g}=t,{value:b}=r,v=b&&Object.keys(b).length!==0,m=g==null?void 0:g.name;return m?v?`${m}-${Uo(JSON.stringify(r.value))}`:m:v?Uo(JSON.stringify(r.value)):""});return Ke(Ot,{mergedThemeHashRef:p,mergedBreakpointsRef:c,mergedRtlRef:a,mergedIconsRef:u,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:R(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedLocaleRef.value:g}),mergedDateLocaleRef:R(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedDateLocaleRef.value:g}),mergedHljsRef:R(()=>{const{hljs:g}=e;return g===void 0?n==null?void 0:n.mergedHljsRef.value:g}),mergedKatexRef:R(()=>{const{katex:g}=e;return g===void 0?n==null?void 0:n.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:r,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1,styleMountTarget:h}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:t,mergedThemeOverrides:r}},render(){var e,n,t,r;return this.abstract?(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t):A(this.as||this.tag,{class:`${this.mergedClsPrefix||Vs}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),A4={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function T4(e){const{primaryColor:n,textColor2:t,dividerColor:r,hoverColor:o,popoverColor:i,invertedColor:u,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:g,textColor3:b,opacityDisabled:v}=e;return Object.assign(Object.assign({},A4),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:g,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:o,optionColorActive:Fe(n,{alpha:.1}),groupHeaderTextColor:b,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:v})}const Hh={name:"Dropdown",common:In,peers:{Popover:Jl},self:T4},D4={padding:"8px 14px"};function z4(e){const{borderRadius:n,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},D4),{borderRadius:n,boxShadow:t,color:_r(r,"rgba(0, 0, 0, .85)"),textColor:r})}const Uh={name:"Tooltip",common:In,peers:{Popover:Jl},self:z4},F4=Object.assign(Object.assign({},Au),Pe.props),I4=le({name:"Tooltip",props:F4,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=kn(e),t=Pe("Tooltip","-tooltip",void 0,Uh,e,n),r=oe(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(i){r.value.setShow(i)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:R(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return A(Lh,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Ql="n-dropdown-menu",Tu="n-dropdown",nd="n-dropdown-option",Kh=le({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return A("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),P4=le({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=ve(Ql),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:i}=ve(Tu);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:i,renderOption:u}=this,{rawNode:s}=this.tmNode,l=A("div",Object.assign({class:`${n}-dropdown-option`},o==null?void 0:o(s)),A("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},A("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},ft(s.icon)),A("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ft((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),A("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:l,option:s}):l}});function R4(e){const{textColorBase:n,opacity1:t,opacity2:r,opacity3:o,opacity4:i,opacity5:u}=e;return{color:n,opacity1Depth:t,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:u}}const $4={common:In,self:R4},O4=H("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[Y("color-transition",{transition:"color .3s var(--n-bezier)"}),Y("depth",{color:"var(--n-color)"},[O("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),O("svg",{height:"1em",width:"1em"})]),B4=Object.assign(Object.assign({},Pe.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Wh=le({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:B4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Icon","-icon",O4,$4,e,n),o=R(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(u!==void 0){const{color:a,[`opacity${u}Depth`]:c}=l;return{"--n-bezier":s,"--n-color":a,"--n-opacity":c}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Gn("icon",R(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:n,mergedStyle:R(()=>{const{size:u,color:s}=e;return{fontSize:er(u),color:s}}),cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:o,onRender:i,themeClass:u}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&qo("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),A("i",Pr(this.$attrs,{role:"img",class:[`${r}-icon`,u,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?A(o):this.$slots)}});function tl(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function M4(e){return e.type==="group"}function Vh(e){return e.type==="divider"}function N4(e){return e.type==="render"}const qh=le({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=ve(Tu),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:i,activeKeyPathRef:u,animatedRef:s,mergedShowRef:l,renderLabelRef:a,renderIconRef:c,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:p,menuPropsRef:g}=n,b=ve(nd,null),v=ve(Ql),m=ve(_u),w=R(()=>e.tmNode.rawNode),y=R(()=>{const{value:P}=f;return tl(e.tmNode.rawNode,P)}),S=R(()=>{const{disabled:P}=e.tmNode;return P}),z=R(()=>{if(!y.value)return!1;const{key:P,disabled:Z}=e.tmNode;if(Z)return!1;const{value:be}=t,{value:ke}=r,{value:ee}=o,{value:te}=i;return be!==null?te.includes(P):ke!==null?te.includes(P)&&te[te.length-1]!==P:ee!==null?te.includes(P):!1}),_=R(()=>r.value===null&&!s.value),E=Wm(z,300,_),k=R(()=>!!(b!=null&&b.enteringSubmenuRef.value)),F=oe(!1);Ke(nd,{enteringSubmenuRef:F});function L(){F.value=!0}function I(){F.value=!1}function J(){const{parentKey:P,tmNode:Z}=e;Z.disabled||l.value&&(o.value=P,r.value=null,t.value=Z.key)}function G(){const{tmNode:P}=e;P.disabled||l.value&&t.value!==P.key&&J()}function $(P){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:Z}=P;Z&&!Qa({target:Z},"dropdownOption")&&!Qa({target:Z},"scrollbarRail")&&(t.value=null)}function q(){const{value:P}=y,{tmNode:Z}=e;l.value&&!P&&!Z.disabled&&(n.doSelect(Z.key,Z.rawNode),n.doUpdateShow(!1))}return{labelField:d,renderLabel:a,renderIcon:c,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:m,animated:s,mergedShowSubmenu:R(()=>E.value&&!k.value),rawNode:w,hasSubmenu:y,pending:Fn(()=>{const{value:P}=i,{key:Z}=e.tmNode;return P.includes(Z)}),childActive:Fn(()=>{const{value:P}=u,{key:Z}=e.tmNode,be=P.findIndex(ke=>Z===ke);return be===-1?!1:be<P.length-1}),active:Fn(()=>{const{value:P}=u,{key:Z}=e.tmNode,be=P.findIndex(ke=>Z===ke);return be===-1?!1:be===P.length-1}),mergedDisabled:S,renderOption:h,nodeProps:p,handleClick:q,handleMouseMove:G,handleMouseEnter:J,handleMouseLeave:$,handleSubmenuBeforeEnter:L,handleSubmenuAfterEnter:I}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:i,siblingHasIcon:u,siblingHasSubmenu:s,renderLabel:l,renderIcon:a,renderOption:c,nodeProps:d,props:f,scrollable:h}=this;let p=null;if(o){const m=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=A(Gh,Object.assign({},m,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=d==null?void 0:d(r),v=A("div",Object.assign({class:[`${i}-dropdown-option`,b==null?void 0:b.class],"data-dropdown-option":!0},b),A("div",Pr(g,f),[A("div",{class:[`${i}-dropdown-option-body__prefix`,u&&`${i}-dropdown-option-body__prefix--show-icon`]},[a?a(r):ft(r.icon)]),A("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(r):ft((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),A("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?A(Wh,null,{default:()=>A(Ih,null)}):null)]),this.hasSubmenu?A(L0,null,{default:()=>[A(j0,null,{default:()=>A("div",{class:`${i}-dropdown-offset-container`},A(K0,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>A("div",{class:`${i}-dropdown-menu-wrapper`},t?A(Dr,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:v,option:r}):v}}),L4=le({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return A(Le,null,A(P4,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>{const{rawNode:i}=o;return i.show===!1?null:Vh(i)?A(Kh,{clsPrefix:t,key:o.key}):o.isGroup?(qo("dropdown","`group` node is not allowed to be put in `group` node."),null):A(qh,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),j4=le({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return A("div",n,[e==null?void 0:e()])}}),Gh=le({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=ve(Tu);Ke(Ql,{showIconRef:R(()=>{const o=n.value;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>o?o(l):l.icon);const{rawNode:s}=i;return o?o(s):s.icon})}),hasSubmenuRef:R(()=>{const{value:o}=t;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>tl(l,o));const{rawNode:s}=i;return tl(s,o)})})});const r=oe(null);return Ke(Pl,null),Ke(Il,null),Ke(_u,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:i}=o;return i.show===!1?null:N4(i)?A(j4,{tmNode:o,key:o.key}):Vh(i)?A(Kh,{clsPrefix:n,key:o.key}):M4(i)?A(L4,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):A(qh,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:i.props,scrollable:t})});return A("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?A($h,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Nh({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),H4=H("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[W6(),H("dropdown-option",`
 position: relative;
 `,[O("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[O("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),H("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[O("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ln("disabled",[Y("pending",`
 color: var(--n-option-text-color-hover);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),O("&::before","background-color: var(--n-option-color-hover);")]),Y("active",`
 color: var(--n-option-text-color-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),O("&::before","background-color: var(--n-option-color-active);")]),Y("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),Y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),Y("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[Y("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[Y("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),H("icon",`
 font-size: var(--n-option-icon-size);
 `)]),K("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),K("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[Y("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),H("icon",`
 font-size: var(--n-option-icon-size);
 `)]),H("dropdown-menu","pointer-events: all;")]),H("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),H("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),H("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),O(">",[H("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ln("scrollable",`
 padding: var(--n-padding);
 `),Y("scrollable",[K("content",`
 padding: var(--n-padding);
 `)])]),U4={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},K4=Object.keys(Au),W4=Object.assign(Object.assign(Object.assign({},Au),U4),Pe.props),V4=le({name:"Dropdown",inheritAttrs:!1,props:W4,setup(e){const n=oe(!1),t=Wo(He(e,"show"),n),r=R(()=>{const{keyField:G,childrenField:$}=e;return $i(e.options,{getKey(q){return q[G]},getDisabled(q){return q.disabled===!0},getIgnored(q){return q.type==="divider"||q.type==="render"},getChildren(q){return q[$]}})}),o=R(()=>r.value.treeNodes),i=oe(null),u=oe(null),s=oe(null),l=R(()=>{var G,$,q;return(q=($=(G=i.value)!==null&&G!==void 0?G:u.value)!==null&&$!==void 0?$:s.value)!==null&&q!==void 0?q:null}),a=R(()=>r.value.getPath(l.value).keyPath),c=R(()=>r.value.getPath(e.value).keyPath),d=Fn(()=>e.keyboard&&t.value);Um({keydown:{ArrowUp:{prevent:!0,handler:_},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:E},ArrowLeft:{prevent:!0,handler:S},Enter:{prevent:!0,handler:k},Escape:y}},d);const{mergedClsPrefixRef:f,inlineThemeDisabled:h,mergedComponentPropsRef:p}=kn(e),g=R(()=>{var G,$;return e.size||(($=(G=p==null?void 0:p.value)===null||G===void 0?void 0:G.Dropdown)===null||$===void 0?void 0:$.size)||"medium"}),b=Pe("Dropdown","-dropdown",H4,Hh,e,f);Ke(Tu,{labelFieldRef:He(e,"labelField"),childrenFieldRef:He(e,"childrenField"),renderLabelRef:He(e,"renderLabel"),renderIconRef:He(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:u,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:a,activeKeyPathRef:c,animatedRef:He(e,"animated"),mergedShowRef:t,nodePropsRef:He(e,"nodeProps"),renderOptionRef:He(e,"renderOption"),menuPropsRef:He(e,"menuProps"),doSelect:v,doUpdateShow:m}),cn(t,G=>{!e.animated&&!G&&w()});function v(G,$){const{onSelect:q}=e;q&&Ye(q,G,$)}function m(G){const{"onUpdate:show":$,onUpdateShow:q}=e;$&&Ye($,G),q&&Ye(q,G),n.value=G}function w(){i.value=null,u.value=null,s.value=null}function y(){m(!1)}function S(){L("left")}function z(){L("right")}function _(){L("up")}function E(){L("down")}function k(){const G=F();G!=null&&G.isLeaf&&t.value&&(v(G.key,G.rawNode),m(!1))}function F(){var G;const{value:$}=r,{value:q}=l;return!$||q===null?null:(G=$.getNode(q))!==null&&G!==void 0?G:null}function L(G){const{value:$}=l,{value:{getFirstAvailableNode:q}}=r;let P=null;if($===null){const Z=q();Z!==null&&(P=Z.key)}else{const Z=F();if(Z){let be;switch(G){case"down":be=Z.getNext();break;case"up":be=Z.getPrev();break;case"right":be=Z.getChild();break;case"left":be=Z.getParent();break}be&&(P=be.key)}}P!==null&&(i.value=null,u.value=P)}const I=R(()=>{const{inverted:G}=e,$=g.value,{common:{cubicBezierEaseInOut:q},self:P}=b.value,{padding:Z,dividerColor:be,borderRadius:ke,optionOpacityDisabled:ee,[Ie("optionIconSuffixWidth",$)]:te,[Ie("optionSuffixWidth",$)]:j,[Ie("optionIconPrefixWidth",$)]:de,[Ie("optionPrefixWidth",$)]:ye,[Ie("fontSize",$)]:$e,[Ie("optionHeight",$)]:B,[Ie("optionIconSize",$)]:re}=P,T={"--n-bezier":q,"--n-font-size":$e,"--n-padding":Z,"--n-border-radius":ke,"--n-option-height":B,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":de,"--n-option-suffix-width":j,"--n-option-icon-suffix-width":te,"--n-option-icon-size":re,"--n-divider-color":be,"--n-option-opacity-disabled":ee};return G?(T["--n-color"]=P.colorInverted,T["--n-option-color-hover"]=P.optionColorHoverInverted,T["--n-option-color-active"]=P.optionColorActiveInverted,T["--n-option-text-color"]=P.optionTextColorInverted,T["--n-option-text-color-hover"]=P.optionTextColorHoverInverted,T["--n-option-text-color-active"]=P.optionTextColorActiveInverted,T["--n-option-text-color-child-active"]=P.optionTextColorChildActiveInverted,T["--n-prefix-color"]=P.prefixColorInverted,T["--n-suffix-color"]=P.suffixColorInverted,T["--n-group-header-text-color"]=P.groupHeaderTextColorInverted):(T["--n-color"]=P.color,T["--n-option-color-hover"]=P.optionColorHover,T["--n-option-color-active"]=P.optionColorActive,T["--n-option-text-color"]=P.optionTextColor,T["--n-option-text-color-hover"]=P.optionTextColorHover,T["--n-option-text-color-active"]=P.optionTextColorActive,T["--n-option-text-color-child-active"]=P.optionTextColorChildActive,T["--n-prefix-color"]=P.prefixColor,T["--n-suffix-color"]=P.suffixColor,T["--n-group-header-text-color"]=P.groupHeaderTextColor),T}),J=h?Gn("dropdown",R(()=>`${g.value[0]}${e.inverted?"i":""}`),I,e):void 0;return{mergedClsPrefix:f,mergedTheme:b,mergedSize:g,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:m,cssVars:h?void 0:I,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const e=(r,o,i,u,s)=>{var l;const{mergedClsPrefix:a,menuProps:c}=this;(l=this.onRender)===null||l===void 0||l.call(this);const d=(c==null?void 0:c(void 0,this.tmNodes.map(h=>h.rawNode)))||{},f={ref:Mv(o),class:[r,`${a}-dropdown`,`${a}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:a,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:s};return A(Gh,Pr(this.$attrs,f,d))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return A(Lh,Object.assign({},Io(this.$props,K4),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}});function q4(e){const{textColor1:n,dividerColor:t,fontWeightStrong:r}=e;return{textColor:n,color:t,fontWeight:r}}const G4={common:In,self:q4},Z4=H("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[ln("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[ln("no-title",`
 display: flex;
 align-items: center;
 `)]),K("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),Y("title-position-left",[K("line",[Y("left",{width:"28px"})])]),Y("title-position-right",[K("line",[Y("right",{width:"28px"})])]),Y("dashed",[K("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),Y("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),K("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),ln("dashed",[K("line",{backgroundColor:"var(--n-color)"})]),Y("dashed",[K("line",{borderColor:"var(--n-color)"})]),Y("vertical",{backgroundColor:"var(--n-color)"})]),X4=Object.assign(Object.assign({},Pe.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Y4=le({name:"Divider",props:X4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Divider","-divider",Z4,G4,e,n),o=R(()=>{const{common:{cubicBezierEaseInOut:u},self:{color:s,textColor:l,fontWeight:a}}=r.value;return{"--n-bezier":u,"--n-color":s,"--n-text-color":l,"--n-font-weight":a}}),i=t?Gn("divider",void 0,o,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:u}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("div",{role:"separator",class:[`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:r,[`${u}-divider--no-title`]:!n.default,[`${u}-divider--dashed`]:o,[`${u}-divider--title-position-${t}`]:n.default&&t}],style:i},r?null:A("div",{class:`${u}-divider__line ${u}-divider__line--left`}),!r&&n.default?A(Le,null,A("div",{class:`${u}-divider__title`},this.$slots),A("div",{class:`${u}-divider__line ${u}-divider__line--right`})):null)}});function J4(e){const{baseColor:n,textColor2:t,bodyColor:r,cardColor:o,dividerColor:i,actionColor:u,scrollbarColor:s,scrollbarColorHover:l,invertedColor:a}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:u,headerColor:o,headerColorInverted:a,footerColor:u,footerColorInverted:a,headerBorderColor:i,headerBorderColorInverted:a,footerBorderColor:i,footerBorderColorInverted:a,siderBorderColor:i,siderBorderColorInverted:a,siderColor:o,siderColorInverted:a,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:_r(r,s),siderToggleBarColorHover:_r(r,l),__invertScrollbar:"true"}}const Zh={name:"Layout",common:In,peers:{Scrollbar:Xl},self:J4};function Q4(e,n,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}function e5(e){const{borderRadius:n,textColor3:t,primaryColor:r,textColor2:o,textColor1:i,fontSize:u,dividerColor:s,hoverColor:l,primaryColorHover:a}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:Fe(r,{alpha:.1}),itemColorActiveHover:Fe(r,{alpha:.1}),itemColorActiveCollapsed:Fe(r,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:a,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:a,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:s},Q4("#BBB",r,"#FFF","#AAA"))}const n5={name:"Menu",common:In,peers:{Tooltip:Uh,Dropdown:Hh},self:e5},t5={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function r5(e){const{textColor3:n,infoColor:t,errorColor:r,successColor:o,warningColor:i,textColor1:u,textColor2:s,railColor:l,fontWeightStrong:a,fontSize:c}=e;return Object.assign(Object.assign({},t5),{contentFontSize:c,titleFontWeight:a,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:r,iconColorSuccess:o,iconColorWarning:i,titleTextColor:u,contentTextColor:s,metaTextColor:n,lineColor:l})}const o5={common:In,self:r5};function i5(e,n){if(!n.global)throw new Error('splitAndMarkByRegex requires a global regex (with "g" flag)');const t=[];let r=0;for(const o of e.matchAll(n)){const{index:i}=o;i>r&&t.push({text:e.slice(r,i),isMatch:!1}),t.push({text:o[0],isMatch:!0}),r=i+o[0].length}return r<e.length&&t.push({text:e.slice(r),isMatch:!1}),t}const u5={highlightTag:{type:String,default:"mark"},caseSensitive:Boolean,autoEscape:{type:Boolean,default:!0},text:String,patterns:{type:Array,default:()=>[]},highlightClass:String,highlightStyle:[Object,String]},s5=le({name:"Highlight",props:u5,setup(e){const{mergedClsPrefixRef:n}=kn(),t=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{highlightedNode:R(()=>{const o=n.value;let i=[];const{patterns:u,text:s}=e;if(u.length===0||!s)i=[s];else{const{highlightTag:l,caseSensitive:a,autoEscape:c,highlightClass:d,highlightStyle:f}=e,h=u.map(b=>c?t(b):b).join("|"),p=new RegExp(`(${h})`,a?"g":"gi");i=i5(s,p).map(({text:b,isMatch:v})=>v?A(l,{class:[`${o}-highlight__mark`,d],style:f},b):b)}return A("span",{class:`${o}-highlight`},i)}),mergedClsPrefix:n}},render(){return this.highlightedNode}}),Xh="n-layout-sider",Yh={type:String,default:"static"},l5=H("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[H("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),Y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),a5={embedded:Boolean,position:Yh,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Jh="n-layout";function c5(e){return le({name:"Layout",props:Object.assign(Object.assign({},Pe.props),a5),setup(n){const t=oe(null),r=oe(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=kn(n),u=Pe("Layout","-layout",l5,Zh,n,o);function s(g,b){if(n.nativeScrollbar){const{value:v}=t;v&&(b===void 0?v.scrollTo(g):v.scrollTo(g,b))}else{const{value:v}=r;v&&v.scrollTo(g,b)}}Ke(Jh,n);let l=0,a=0;const c=g=>{var b;const v=g.target;l=v.scrollLeft,a=v.scrollTop,(b=n.onScroll)===null||b===void 0||b.call(n,g)};Rl(()=>{if(n.nativeScrollbar){const g=t.value;g&&(g.scrollTop=a,g.scrollLeft=l)}});const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:s},h=R(()=>{const{common:{cubicBezierEaseInOut:g},self:b}=u.value;return{"--n-bezier":g,"--n-color":n.embedded?b.colorEmbedded:b.color,"--n-text-color":b.textColor}}),p=i?Gn("layout",R(()=>n.embedded?"e":""),h,n):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:d,mergedTheme:u,handleNativeElScroll:c,cssVars:i?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},f)},render(){var n;const{mergedClsPrefix:t,hasSider:r}=this;(n=this.onRender)===null||n===void 0||n.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return A("div",{class:i,style:this.cssVars},this.nativeScrollbar?A("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):A(fi,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const td=c5(!1),d5=H("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[Y("bordered",[K("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),K("left-placement",[Y("bordered",[K("border",`
 right: 0;
 `)])]),Y("right-placement",`
 justify-content: flex-start;
 `,[Y("bordered",[K("border",`
 left: 0;
 `)]),Y("collapsed",[H("layout-toggle-button",[H("base-icon",`
 transform: rotate(180deg);
 `)]),H("layout-toggle-bar",[O("&:hover",[K("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),K("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),H("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[H("base-icon",`
 transform: rotate(0);
 `)]),H("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[O("&:hover",[K("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),K("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),Y("collapsed",[H("layout-toggle-bar",[O("&:hover",[K("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),K("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),H("layout-toggle-button",[H("base-icon",`
 transform: rotate(0);
 `)])]),H("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[H("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),H("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[K("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),K("bottom",`
 position: absolute;
 top: 34px;
 `),O("&:hover",[K("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),K("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),K("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),O("&:hover",[K("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),K("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),H("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),Y("show-content",[H("layout-sider-scroll-container",{opacity:1})]),Y("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),f5=le({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},A("div",{class:`${e}-layout-toggle-bar__top`}),A("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),h5=le({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},A(Zl,{clsPrefix:e},{default:()=>A(Ih,null)}))}}),p5={position:Yh,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},g5=le({name:"LayoutSider",props:Object.assign(Object.assign({},Pe.props),p5),setup(e){const n=ve(Jh),t=oe(null),r=oe(null),o=oe(e.defaultCollapsed),i=Wo(He(e,"collapsed"),o),u=R(()=>er(i.value?e.collapsedWidth:e.width)),s=R(()=>e.collapseMode!=="transform"?{}:{minWidth:er(e.width)}),l=R(()=>n?n.siderPlacement:"left");function a(S,z){if(e.nativeScrollbar){const{value:_}=t;_&&(z===void 0?_.scrollTo(S):_.scrollTo(S,z))}else{const{value:_}=r;_&&_.scrollTo(S,z)}}function c(){const{"onUpdate:collapsed":S,onUpdateCollapsed:z,onExpand:_,onCollapse:E}=e,{value:k}=i;z&&Ye(z,!k),S&&Ye(S,!k),o.value=!k,k?_&&Ye(_):E&&Ye(E)}let d=0,f=0;const h=S=>{var z;const _=S.target;d=_.scrollLeft,f=_.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,S)};Rl(()=>{if(e.nativeScrollbar){const S=t.value;S&&(S.scrollTop=f,S.scrollLeft=d)}}),Ke(Xh,{collapsedRef:i,collapseModeRef:He(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=kn(e),b=Pe("Layout","-layout-sider",d5,Zh,e,p);function v(S){var z,_;S.propertyName==="max-width"&&(i.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(_=e.onAfterEnter)===null||_===void 0||_.call(e))}const m={scrollTo:a},w=R(()=>{const{common:{cubicBezierEaseInOut:S},self:z}=b.value,{siderToggleButtonColor:_,siderToggleButtonBorder:E,siderToggleBarColor:k,siderToggleBarColorHover:F}=z,L={"--n-bezier":S,"--n-toggle-button-color":_,"--n-toggle-button-border":E,"--n-toggle-bar-color":k,"--n-toggle-bar-color-hover":F};return e.inverted?(L["--n-color"]=z.siderColorInverted,L["--n-text-color"]=z.textColorInverted,L["--n-border-color"]=z.siderBorderColorInverted,L["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,L.__invertScrollbar=z.__invertScrollbar):(L["--n-color"]=z.siderColor,L["--n-text-color"]=z.textColor,L["--n-border-color"]=z.siderBorderColor,L["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),L}),y=g?Gn("layout-sider",R(()=>e.inverted?"a":"b"),w,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:b,styleMaxWidth:u,mergedCollapsed:i,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:v,handleTriggerClick:c,inlineThemeDisabled:g,cssVars:w,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},m)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,t&&`${n}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:er(this.width)}]},this.nativeScrollbar?A("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):A(fi,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?A(f5,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):A(h5,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?A("div",{class:`${n}-layout-sider__border`}):null)}}),hi="n-menu",Qh="n-submenu",ea="n-menu-item-group",rd=[O("&::before","background-color: var(--n-item-color-hover);"),K("arrow",`
 color: var(--n-arrow-color-hover);
 `),K("icon",`
 color: var(--n-item-icon-color-hover);
 `),H("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[O("a",`
 color: var(--n-item-text-color-hover);
 `),K("extra",`
 color: var(--n-item-text-color-hover);
 `)])],od=[K("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),H("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[O("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),K("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],b5=O([H("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[Y("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[H("submenu","margin: 0;"),H("menu-item","margin: 0;"),H("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[O("&::before","display: none;"),Y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),H("menu-item-content",[Y("selected",[K("icon","color: var(--n-item-icon-color-active-horizontal);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[O("a","color: var(--n-item-text-color-active-horizontal);"),K("extra","color: var(--n-item-text-color-active-horizontal);")])]),Y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[H("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[O("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),K("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),K("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ln("disabled",[ln("selected, child-active",[O("&:focus-within",od)]),Y("selected",[cr(null,[K("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[O("a","color: var(--n-item-text-color-active-hover-horizontal);"),K("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),Y("child-active",[cr(null,[K("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[O("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),K("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),cr("border-bottom: 2px solid var(--n-border-color-horizontal);",od)]),H("menu-item-content-header",[O("a","color: var(--n-item-text-color-horizontal);")])])]),ln("responsive",[H("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Y("collapsed",[H("menu-item-content",[Y("selected",[O("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),H("menu-item-content-header","opacity: 0;"),K("arrow","opacity: 0;"),K("icon","color: var(--n-item-icon-color-collapsed);")])]),H("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),H("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[O("> *","z-index: 1;"),O("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),Y("collapsed",[K("arrow","transform: rotate(0);")]),Y("selected",[O("&::before","background-color: var(--n-item-color-active);"),K("arrow","color: var(--n-arrow-color-active);"),K("icon","color: var(--n-item-icon-color-active);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[O("a","color: var(--n-item-text-color-active);"),K("extra","color: var(--n-item-text-color-active);")])]),Y("child-active",[H("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[O("a",`
 color: var(--n-item-text-color-child-active);
 `),K("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),K("arrow",`
 color: var(--n-arrow-color-child-active);
 `),K("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ln("disabled",[ln("selected, child-active",[O("&:focus-within",rd)]),Y("selected",[cr(null,[K("arrow","color: var(--n-arrow-color-active-hover);"),K("icon","color: var(--n-item-icon-color-active-hover);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[O("a","color: var(--n-item-text-color-active-hover);"),K("extra","color: var(--n-item-text-color-active-hover);")])])]),Y("child-active",[cr(null,[K("arrow","color: var(--n-arrow-color-child-active-hover);"),K("icon","color: var(--n-item-icon-color-child-active-hover);"),H("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[O("a","color: var(--n-item-text-color-child-active-hover);"),K("extra","color: var(--n-item-text-color-child-active-hover);")])])]),Y("selected",[cr(null,[O("&::before","background-color: var(--n-item-color-active-hover);")])]),cr(null,rd)]),K("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),K("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),H("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[O("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[O("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),K("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),H("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[H("menu-item-content",`
 height: var(--n-item-height);
 `),H("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[l4({duration:".2s"})])]),H("menu-item-group",[H("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),H("menu-tooltip",[O("a",`
 color: inherit;
 text-decoration: none;
 `)]),H("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function cr(e,n){return[Y("hover",e,n),O("&:hover",e,n)]}const ep=le({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=ve(hi);return{menuProps:n,style:R(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:R(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:o}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${o}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:r,renderExtra:o,expandIcon:i}}=this,u=t?t(n.rawNode):ft(this.icon);return A("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&A("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),A("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(n.rawNode):ft(this.title),this.extra||o?A("span",{class:`${e}-menu-item-content-header__extra`}," ",o?o(n.rawNode):ft(this.extra)):null),this.showArrow?A(Zl,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):A(d6,null)}):null)}}),Di=8;function na(e){const n=ve(hi),{props:t,mergedCollapsedRef:r}=n,o=ve(Qh,null),i=ve(ea,null),u=R(()=>t.mode==="horizontal"),s=R(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=R(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),a=R(()=>{var f;return!u.value&&e.root&&r.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),c=R(()=>{if(u.value)return;const{collapsedWidth:f,indent:h,rootIndent:p}=t,{root:g,isGroup:b}=e,v=p===void 0?h:p;return g?r.value?f/2-l.value/2:v:i&&typeof i.paddingLeftRef.value=="number"?h/2+i.paddingLeftRef.value:o&&typeof o.paddingLeftRef.value=="number"?(b?h/2:h)+o.paddingLeftRef.value:0}),d=R(()=>{const{collapsedWidth:f,indent:h,rootIndent:p}=t,{value:g}=l,{root:b}=e;return u.value||!b||!r.value?Di:(p===void 0?h:p)+g+Di-(f+g)/2});return{dropdownPlacement:s,activeIconSize:a,maxIconSize:l,paddingLeft:c,iconMarginRight:d,NMenu:n,NSubmenu:o,NMenuOptionGroup:i}}const ta={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},m5=le({name:"MenuDivider",setup(){const e=ve(hi),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:A("div",{class:`${n.value}-menu-divider`})}}),np=Object.assign(Object.assign({},ta),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),v5=Ol(np),x5=le({name:"MenuOption",props:np,setup(e){const n=na(e),{NSubmenu:t,NMenu:r,NMenuOptionGroup:o}=n,{props:i,mergedClsPrefixRef:u,mergedCollapsedRef:s}=r,l=t?t.mergedDisabledRef:o?o.mergedDisabledRef:{value:!1},a=R(()=>l.value||e.disabled);function c(f){const{onClick:h}=e;h&&h(f)}function d(f){a.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),c(f))}return{mergedClsPrefix:u,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:Fn(()=>e.root&&s.value&&i.mode!=="horizontal"&&!a.value),selected:Fn(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:d}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:r,nodeProps:o}}=this,i=o==null?void 0:o(t.rawNode);return A("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),A(I4,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):ft(this.title),trigger:()=>A(ep,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),tp=Object.assign(Object.assign({},ta),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),y5=Ol(tp),C5=le({name:"MenuOptionGroup",props:tp,setup(e){const n=na(e),{NSubmenu:t}=n,r=R(()=>t!=null&&t.mergedDisabledRef.value?!0:e.tmNode.disabled);Ke(ea,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:r});const{mergedClsPrefixRef:o,props:i}=ve(hi);return function(){const{value:u}=o,s=n.paddingLeft.value,{nodeProps:l}=i,a=l==null?void 0:l(e.tmNode.rawNode);return A("div",{class:`${u}-menu-item-group`,role:"group"},A("div",Object.assign({},a,{class:[`${u}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",s!==void 0?`padding-left: ${s}px;`:""]}),ft(e.title),e.extra?A(Le,null," ",ft(e.extra)):null),A("div",null,e.tmNodes.map(c=>ra(c,i))))}}});function rl(e){return e.type==="divider"||e.type==="render"}function _5(e){return e.type==="divider"}function ra(e,n){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(rl(t))return _5(t)?A(m5,Object.assign({key:e.key},t.props)):null;const{labelField:o}=n,{key:i,level:u,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[o],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?A(C5,Io(l,y5,{tmNode:e,tmNodes:e.children,key:i})):A(ol,Io(l,w5,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):A(x5,Io(l,v5,{key:i,tmNode:e}))}const rp=Object.assign(Object.assign({},ta),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),w5=Ol(rp),ol=le({name:"Submenu",props:rp,setup(e){const n=na(e),{NMenu:t,NSubmenu:r}=n,{props:o,mergedCollapsedRef:i,mergedThemeRef:u}=t,s=R(()=>{const{disabled:f}=e;return r!=null&&r.mergedDisabledRef.value||o.disabled?!0:f}),l=oe(!1);Ke(Qh,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),Ke(ea,null);function a(){const{onClick:f}=e;f&&f()}function c(){s.value||(i.value||t.toggleExpand(e.internalKey),a())}function d(f){l.value=f}return{menuProps:o,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:l,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:Fn(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(e.internalKey)}),collapsed:R(()=>o.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:R(()=>!s.value&&(o.mode==="horizontal"||i.value)),handlePopoverShowChange:d,handleClick:c}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:r}}=this,o=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:l,mergedDisabled:a,maxIconSize:c,activeIconSize:d,title:f,childActive:h,icon:p,handleClick:g,menuProps:{nodeProps:b},dropdownShow:v,iconMarginRight:m,tmNode:w,mergedClsPrefix:y,isEllipsisPlaceholder:S,extra:z}=this,_=b==null?void 0:b(w.rawNode);return A("div",Object.assign({},_,{class:[`${y}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),A(ep,{tmNode:w,paddingLeft:s,collapsed:l,disabled:a,iconMarginRight:m,maxIconSize:c,activeIconSize:d,title:f,extra:z,showArrow:!u,childActive:h,clsPrefix:y,icon:p,hover:v,onClick:g,isEllipsisPlaceholder:S}))},i=()=>A(p6,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:A("div",{class:`${n}-submenu-children`,role:"menu"},u.map(l=>ra(l,this.menuProps)))}});return this.root?A(V4,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),this.isHorizontal?null:i())}):A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),i())}}),k5=Object.assign(Object.assign({},Pe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),S5=le({name:"Menu",inheritAttrs:!1,props:k5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Menu","-menu",b5,n5,e,n),o=ve(Xh,null),i=R(()=>{var ee;const{collapsed:te}=e;if(te!==void 0)return te;if(o){const{collapseModeRef:j,collapsedRef:de}=o;if(j.value==="width")return(ee=de.value)!==null&&ee!==void 0?ee:!1}return!1}),u=R(()=>{const{keyField:ee,childrenField:te,disabledField:j}=e;return $i(e.items||e.options,{getIgnored(de){return rl(de)},getChildren(de){return de[te]},getDisabled(de){return de[j]},getKey(de){var ye;return(ye=de[ee])!==null&&ye!==void 0?ye:de.name}})}),s=R(()=>new Set(u.value.treeNodes.map(ee=>ee.key))),{watchProps:l}=e,a=oe(null);l!=null&&l.includes("defaultValue")?Rt(()=>{a.value=e.defaultValue}):a.value=e.defaultValue;const d=Wo(He(e,"value"),a),f=oe([]),h=()=>{f.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(d.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?Rt(h):h();const p=$0(e,["expandedNames","expandedKeys"]),g=Wo(p,f),b=R(()=>u.value.treeNodes),v=R(()=>u.value.getPath(d.value).keyPath);Ke(hi,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:d,mergedExpandedKeysRef:g,activePathRef:v,mergedClsPrefixRef:n,isHorizontalRef:R(()=>e.mode==="horizontal"),invertedRef:He(e,"inverted"),doSelect:m,toggleExpand:y});function m(ee,te){const{"onUpdate:value":j,onUpdateValue:de,onSelect:ye}=e;de&&Ye(de,ee,te),j&&Ye(j,ee,te),ye&&Ye(ye,ee,te),a.value=ee}function w(ee){const{"onUpdate:expandedKeys":te,onUpdateExpandedKeys:j,onExpandedNamesChange:de,onOpenNamesChange:ye}=e;te&&Ye(te,ee),j&&Ye(j,ee),de&&Ye(de,ee),ye&&Ye(ye,ee),f.value=ee}function y(ee){const te=Array.from(g.value),j=te.findIndex(de=>de===ee);if(~j)te.splice(j,1);else{if(e.accordion&&s.value.has(ee)){const de=te.findIndex(ye=>s.value.has(ye));de>-1&&te.splice(de,1)}te.push(ee)}w(te)}const S=ee=>{const te=u.value.getPath(ee??d.value,{includeSelf:!1}).keyPath;if(!te.length)return;const j=Array.from(g.value),de=new Set([...j,...te]);e.accordion&&s.value.forEach(ye=>{de.has(ye)&&!te.includes(ye)&&de.delete(ye)}),w(Array.from(de))},z=R(()=>{const{inverted:ee}=e,{common:{cubicBezierEaseInOut:te},self:j}=r.value,{borderRadius:de,borderColorHorizontal:ye,fontSize:$e,itemHeight:B,dividerColor:re}=j,T={"--n-divider-color":re,"--n-bezier":te,"--n-font-size":$e,"--n-border-color-horizontal":ye,"--n-border-radius":de,"--n-item-height":B};return ee?(T["--n-group-text-color"]=j.groupTextColorInverted,T["--n-color"]=j.colorInverted,T["--n-item-text-color"]=j.itemTextColorInverted,T["--n-item-text-color-hover"]=j.itemTextColorHoverInverted,T["--n-item-text-color-active"]=j.itemTextColorActiveInverted,T["--n-item-text-color-child-active"]=j.itemTextColorChildActiveInverted,T["--n-item-text-color-child-active-hover"]=j.itemTextColorChildActiveInverted,T["--n-item-text-color-active-hover"]=j.itemTextColorActiveHoverInverted,T["--n-item-icon-color"]=j.itemIconColorInverted,T["--n-item-icon-color-hover"]=j.itemIconColorHoverInverted,T["--n-item-icon-color-active"]=j.itemIconColorActiveInverted,T["--n-item-icon-color-active-hover"]=j.itemIconColorActiveHoverInverted,T["--n-item-icon-color-child-active"]=j.itemIconColorChildActiveInverted,T["--n-item-icon-color-child-active-hover"]=j.itemIconColorChildActiveHoverInverted,T["--n-item-icon-color-collapsed"]=j.itemIconColorCollapsedInverted,T["--n-item-text-color-horizontal"]=j.itemTextColorHorizontalInverted,T["--n-item-text-color-hover-horizontal"]=j.itemTextColorHoverHorizontalInverted,T["--n-item-text-color-active-horizontal"]=j.itemTextColorActiveHorizontalInverted,T["--n-item-text-color-child-active-horizontal"]=j.itemTextColorChildActiveHorizontalInverted,T["--n-item-text-color-child-active-hover-horizontal"]=j.itemTextColorChildActiveHoverHorizontalInverted,T["--n-item-text-color-active-hover-horizontal"]=j.itemTextColorActiveHoverHorizontalInverted,T["--n-item-icon-color-horizontal"]=j.itemIconColorHorizontalInverted,T["--n-item-icon-color-hover-horizontal"]=j.itemIconColorHoverHorizontalInverted,T["--n-item-icon-color-active-horizontal"]=j.itemIconColorActiveHorizontalInverted,T["--n-item-icon-color-active-hover-horizontal"]=j.itemIconColorActiveHoverHorizontalInverted,T["--n-item-icon-color-child-active-horizontal"]=j.itemIconColorChildActiveHorizontalInverted,T["--n-item-icon-color-child-active-hover-horizontal"]=j.itemIconColorChildActiveHoverHorizontalInverted,T["--n-arrow-color"]=j.arrowColorInverted,T["--n-arrow-color-hover"]=j.arrowColorHoverInverted,T["--n-arrow-color-active"]=j.arrowColorActiveInverted,T["--n-arrow-color-active-hover"]=j.arrowColorActiveHoverInverted,T["--n-arrow-color-child-active"]=j.arrowColorChildActiveInverted,T["--n-arrow-color-child-active-hover"]=j.arrowColorChildActiveHoverInverted,T["--n-item-color-hover"]=j.itemColorHoverInverted,T["--n-item-color-active"]=j.itemColorActiveInverted,T["--n-item-color-active-hover"]=j.itemColorActiveHoverInverted,T["--n-item-color-active-collapsed"]=j.itemColorActiveCollapsedInverted):(T["--n-group-text-color"]=j.groupTextColor,T["--n-color"]=j.color,T["--n-item-text-color"]=j.itemTextColor,T["--n-item-text-color-hover"]=j.itemTextColorHover,T["--n-item-text-color-active"]=j.itemTextColorActive,T["--n-item-text-color-child-active"]=j.itemTextColorChildActive,T["--n-item-text-color-child-active-hover"]=j.itemTextColorChildActiveHover,T["--n-item-text-color-active-hover"]=j.itemTextColorActiveHover,T["--n-item-icon-color"]=j.itemIconColor,T["--n-item-icon-color-hover"]=j.itemIconColorHover,T["--n-item-icon-color-active"]=j.itemIconColorActive,T["--n-item-icon-color-active-hover"]=j.itemIconColorActiveHover,T["--n-item-icon-color-child-active"]=j.itemIconColorChildActive,T["--n-item-icon-color-child-active-hover"]=j.itemIconColorChildActiveHover,T["--n-item-icon-color-collapsed"]=j.itemIconColorCollapsed,T["--n-item-text-color-horizontal"]=j.itemTextColorHorizontal,T["--n-item-text-color-hover-horizontal"]=j.itemTextColorHoverHorizontal,T["--n-item-text-color-active-horizontal"]=j.itemTextColorActiveHorizontal,T["--n-item-text-color-child-active-horizontal"]=j.itemTextColorChildActiveHorizontal,T["--n-item-text-color-child-active-hover-horizontal"]=j.itemTextColorChildActiveHoverHorizontal,T["--n-item-text-color-active-hover-horizontal"]=j.itemTextColorActiveHoverHorizontal,T["--n-item-icon-color-horizontal"]=j.itemIconColorHorizontal,T["--n-item-icon-color-hover-horizontal"]=j.itemIconColorHoverHorizontal,T["--n-item-icon-color-active-horizontal"]=j.itemIconColorActiveHorizontal,T["--n-item-icon-color-active-hover-horizontal"]=j.itemIconColorActiveHoverHorizontal,T["--n-item-icon-color-child-active-horizontal"]=j.itemIconColorChildActiveHorizontal,T["--n-item-icon-color-child-active-hover-horizontal"]=j.itemIconColorChildActiveHoverHorizontal,T["--n-arrow-color"]=j.arrowColor,T["--n-arrow-color-hover"]=j.arrowColorHover,T["--n-arrow-color-active"]=j.arrowColorActive,T["--n-arrow-color-active-hover"]=j.arrowColorActiveHover,T["--n-arrow-color-child-active"]=j.arrowColorChildActive,T["--n-arrow-color-child-active-hover"]=j.arrowColorChildActiveHover,T["--n-item-color-hover"]=j.itemColorHover,T["--n-item-color-active"]=j.itemColorActive,T["--n-item-color-active-hover"]=j.itemColorActiveHover,T["--n-item-color-active-collapsed"]=j.itemColorActiveCollapsed),T}),_=t?Gn("menu",R(()=>e.inverted?"a":"b"),z,e):void 0,E=I0(),k=oe(null),F=oe(null);let L=!0;const I=()=>{var ee;L?L=!1:(ee=k.value)===null||ee===void 0||ee.sync({showAllItemsBeforeCalculate:!0})};function J(){return document.getElementById(E)}const G=oe(-1);function $(ee){G.value=e.options.length-ee}function q(ee){ee||(G.value=-1)}const P=R(()=>{const ee=G.value;return{children:ee===-1?[]:e.options.slice(ee)}}),Z=R(()=>{const{childrenField:ee,disabledField:te,keyField:j}=e;return $i([P.value],{getIgnored(de){return rl(de)},getChildren(de){return de[ee]},getDisabled(de){return de[te]},getKey(de){var ye;return(ye=de[j])!==null&&ye!==void 0?ye:de.name}})}),be=R(()=>$i([{}]).treeNodes[0]);function ke(){var ee;if(G.value===-1)return A(ol,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:be.value,domId:E,isEllipsisPlaceholder:!0});const te=Z.value.treeNodes[0],j=v.value,de=!!(!((ee=te.children)===null||ee===void 0)&&ee.some(ye=>j.includes(ye.key)));return A(ol,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:de,tmNode:te,domId:E,rawNodes:te.rawNode.children||[],tmNodes:te.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:p,uncontrolledExpanededKeys:f,mergedExpandedKeys:g,uncontrolledValue:a,mergedValue:d,activePath:v,tmNodes:b,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:z,themeClass:_==null?void 0:_.themeClass,overflowRef:k,counterRef:F,updateCounter:()=>{},onResize:I,onUpdateOverflow:q,onUpdateCount:$,renderCounter:ke,getCounter:J,onRender:_==null?void 0:_.onRender,showOption:S,deriveResponsiveState:I}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:r}=this;r==null||r();const o=()=>this.tmNodes.map(l=>ra(l,this.$props)),u=n==="horizontal"&&this.responsive,s=()=>A("div",Pr(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?A(Pv,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:o,counter:this.renderCounter}):o());return u?A(Xi,{onResize:this.onResize},{default:s}):s()}}),E5=Object.assign(Object.assign({},Pe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),id=le({name:"Scrollbar",props:E5,setup(){const e=oe(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return A(fi,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ud=1.25,A5=H("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ud};
`,[Y("horizontal",`
 flex-direction: row;
 `,[O(">",[H("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[Y("dashed-line-type",[O(">",[H("timeline-item-timeline",[K("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),O(">",[H("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[O(">",[K("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),H("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[K("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),Y("right-placement",[H("timeline-item",[H("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),H("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),Y("left-placement",[H("timeline-item",[H("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),H("timeline-item-timeline",`
 left: 0;
 `)])]),H("timeline-item",`
 position: relative;
 `,[O("&:last-child",[H("timeline-item-timeline",[K("line",`
 display: none;
 `)]),H("timeline-item-content",[K("meta",`
 margin-bottom: 0;
 `)])]),H("timeline-item-content",[K("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),K("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),K("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),Y("dashed-line-type",[H("timeline-item-timeline",[K("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),H("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ud} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[K("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),K("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),K("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),T5=Object.assign(Object.assign({},Pe.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),op="n-timeline",D5=le({name:"Timeline",props:T5,setup(e,{slots:n}){const{mergedClsPrefixRef:t}=kn(e),r=Pe("Timeline","-timeline",A5,o5,e,t);return Ke(op,{props:e,mergedThemeRef:r,mergedClsPrefixRef:t}),()=>{const{value:o}=t;return A("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},n)}}}),z5={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},vo=le({name:"TimelineItem",props:z5,slots:Object,setup(e){const n=ve(op);n||nh("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Vm();const{inlineThemeDisabled:t}=kn(),r=R(()=>{const{props:{size:i,iconSize:u},mergedThemeRef:s}=n,{type:l}=e,{self:{titleTextColor:a,contentTextColor:c,metaTextColor:d,lineColor:f,titleFontWeight:h,contentFontSize:p,[Ie("iconSize",i)]:g,[Ie("titleMargin",i)]:b,[Ie("titleFontSize",i)]:v,[Ie("circleBorder",l)]:m,[Ie("iconColor",l)]:w},common:{cubicBezierEaseInOut:y}}=s.value;return{"--n-bezier":y,"--n-circle-border":m,"--n-icon-color":w,"--n-content-font-size":p,"--n-content-text-color":c,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":v,"--n-title-font-weight":h,"--n-title-margin":b,"--n-title-text-color":a,"--n-icon-size":er(u)||g}}),o=t?Gn("timeline-item",R(()=>{const{props:{size:i,iconSize:u}}=n,{type:s}=e;return`${i[0]}${u||"a"}${s[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:t?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:t,$slots:r}=this;return t==null||t(),A("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},A("div",{class:`${e}-timeline-item-timeline`},A("div",{class:`${e}-timeline-item-timeline__line`}),zn(r.icon,o=>o?A("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},o):A("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),A("div",{class:`${e}-timeline-item-content`},zn(r.header,o=>o||this.title?A("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),A("div",{class:`${e}-timeline-item-content__content`},Ws(r.default,()=>[this.content])),A("div",{class:`${e}-timeline-item-content__meta`},Ws(r.footer,()=>[this.time]))))}});function F5(){const e=ve(Ot,null);return R(()=>{if(e===null)return In;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,r=(n==null?void 0:n.common)||In;return t!=null&&t.common?Object.assign({},r,t.common):r})}const I5={common:{primaryColor:"#b51e1e",primaryColorHover:"#c03e3e",primaryColorPressed:"#9c3c3c",primaryColorSuppl:"#d57e7e",infoColor:"#bbb5ac",successColor:"#96c24e",warningColor:"#fed71a",errorColor:"#efafad",textColorBase:"#333",textColor1:"rgba(0, 0, 0, .9)",textColor2:"rgba(0, 0, 0, .82)",textColor3:"rgba(0, 0, 0, .6)",borderColor:"#d9d9d9",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}},P5={common:{primaryColor:"#8a0000",primaryColorHover:"#a00000",primaryColorPressed:"#6e0000",primaryColorSuppl:"#c20000",infoColor:"#9e968b",successColor:"#a9c478",warningColor:"#e6c84c",errorColor:"#e28886",textColorBase:"#ccc",textColor1:"rgba(255, 255, 255, .9)",textColor2:"rgba(255, 255, 255, .82)",textColor3:"rgba(255, 255, 255, .6)",bodyColor:"#1a1a1a",borderColor:"#4d4d4d",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Kr=typeof document<"u";function ip(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function R5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ip(e.default)}const Te=Object.assign;function ps(e,n){const t={};for(const r in n){const o=n[r];t[r]=Qn(o)?o.map(e):e(o)}return t}const Ro=()=>{},Qn=Array.isArray;function sd(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const up=/#/g,$5=/&/g,O5=/\//g,B5=/=/g,M5=/\?/g,sp=/\+/g,N5=/%5B/g,L5=/%5D/g,lp=/%5E/g,j5=/%60/g,ap=/%7B/g,H5=/%7C/g,cp=/%7D/g,U5=/%20/g;function oa(e){return e==null?"":encodeURI(""+e).replace(H5,"|").replace(N5,"[").replace(L5,"]")}function K5(e){return oa(e).replace(ap,"{").replace(cp,"}").replace(lp,"^")}function il(e){return oa(e).replace(sp,"%2B").replace(U5,"+").replace(up,"%23").replace($5,"%26").replace(j5,"`").replace(ap,"{").replace(cp,"}").replace(lp,"^")}function W5(e){return il(e).replace(B5,"%3D")}function V5(e){return oa(e).replace(up,"%23").replace(M5,"%3F")}function q5(e){return V5(e).replace(O5,"%2F")}function Yo(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const G5=/\/$/,Z5=e=>e.replace(G5,"");function gs(e,n,t="/"){let r,o={},i="",u="";const s=n.indexOf("#");let l=n.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(r=n.slice(0,l),i=n.slice(l,s>0?s:n.length),o=e(i.slice(1))),s>=0&&(r=r||n.slice(0,s),u=n.slice(s,n.length)),r=Q5(r??n,t),{fullPath:r+i+u,path:r,query:o,hash:Yo(u)}}function X5(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ld(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Y5(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&to(n.matched[r],t.matched[o])&&dp(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function to(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function dp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!J5(e[t],n[t]))return!1;return!0}function J5(e,n){return Qn(e)?ad(e,n):Qn(n)?ad(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function ad(e,n){return Qn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Q5(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,u,s;for(u=0;u<r.length;u++)if(s=r[u],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(u).join("/")}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ul=function(e){return e.pop="pop",e.push="push",e}({}),bs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function eC(e){if(!e)if(Kr){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Z5(e)}const nC=/^[^#]+#/;function tC(e,n){return e.replace(nC,"#")+n}function rC(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Du=()=>({left:window.scrollX,top:window.scrollY});function oC(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=rC(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function cd(e,n){return(history.state?history.state.position-n:-1)+e}const sl=new Map;function iC(e,n){sl.set(e,n)}function uC(e){const n=sl.get(e);return sl.delete(e),n}function sC(e){return typeof e=="string"||e&&typeof e=="object"}function fp(e){return typeof e=="string"||typeof e=="symbol"}let Xe=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const hp=Symbol("");Xe.MATCHER_NOT_FOUND+"",Xe.NAVIGATION_GUARD_REDIRECT+"",Xe.NAVIGATION_ABORTED+"",Xe.NAVIGATION_CANCELLED+"",Xe.NAVIGATION_DUPLICATED+"";function ro(e,n){return Te(new Error,{type:e,[hp]:!0},n)}function wt(e,n){return e instanceof Error&&hp in e&&(n==null||!!(e.type&n))}const lC=["params","query","hash"];function aC(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of lC)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function cC(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const o=t[r].replace(sp," "),i=o.indexOf("="),u=Yo(i<0?o:o.slice(0,i)),s=i<0?null:Yo(o.slice(i+1));if(u in n){let l=n[u];Qn(l)||(l=n[u]=[l]),l.push(s)}else n[u]=s}return n}function dd(e){let n="";for(let t in e){const r=e[t];if(t=W5(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Qn(r)?r.map(o=>o&&il(o)):[r&&il(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function dC(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Qn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const fC=Symbol(""),fd=Symbol(""),zu=Symbol(""),pp=Symbol(""),ll=Symbol("");function xo(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Xt(e,n,t,r,o,i=u=>u()){const u=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const a=f=>{f===!1?l(ro(Xe.NAVIGATION_ABORTED,{from:t,to:n})):f instanceof Error?l(f):sC(f)?l(ro(Xe.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(u&&r.enterCallbacks[o]===u&&typeof f=="function"&&u.push(f),s())},c=i(()=>e.call(r&&r.instances[o],n,t,a));let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(f=>l(f))})}function ms(e,n,t,r,o=i=>i()){const i=[];for(const u of e)for(const s in u.components){let l=u.components[s];if(!(n!=="beforeRouteEnter"&&!u.instances[s]))if(ip(l)){const a=(l.__vccOpts||l)[n];a&&i.push(Xt(a,t,r,u,s,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${s}" at "${u.path}"`);const d=R5(c)?c.default:c;u.mods[s]=c,u.components[s]=d;const f=(d.__vccOpts||d)[n];return f&&Xt(f,t,r,u,s,o)()}))}}return i}function hC(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let u=0;u<i;u++){const s=n.matched[u];s&&(e.matched.find(a=>to(a,s))?r.push(s):t.push(s));const l=e.matched[u];l&&(n.matched.find(a=>to(a,l))||o.push(l))}return[t,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pC=()=>location.protocol+"//"+location.host;function gp(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let u=o.includes(e.slice(i))?e.slice(i).length:1,s=o.slice(u);return s[0]!=="/"&&(s="/"+s),ld(s,"")}return ld(t,e)+r+o}function gC(e,n,t,r){let o=[],i=[],u=null;const s=({state:f})=>{const h=gp(e,location),p=t.value,g=n.value;let b=0;if(f){if(t.value=h,n.value=f,u&&u===p){u=null;return}b=g?f.position-g.position:0}else r(h);o.forEach(v=>{v(t.value,p,{delta:b,type:ul.pop,direction:b?b>0?bs.forward:bs.back:bs.unknown})})};function l(){u=t.value}function a(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return i.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Te({},f.state,{scroll:Du()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:a,destroy:d}}function hd(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?Du():null}}function bC(e){const{history:n,location:t}=window,r={value:gp(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(l,a,c){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:pC()+e+l;try{n[c?"replaceState":"pushState"](a,"",f),o.value=a}catch(h){console.error(h),t[c?"replace":"assign"](f)}}function u(l,a){i(l,Te({},n.state,hd(o.value.back,l,o.value.forward,!0),a,{position:o.value.position}),!0),r.value=l}function s(l,a){const c=Te({},o.value,n.state,{forward:l,scroll:Du()});i(c.current,c,!0),i(l,Te({},hd(r.value,l,null),{position:c.position+1},a),!1),r.value=l}return{location:r,state:o,push:s,replace:u}}function mC(e){e=eC(e);const n=bC(e),t=gC(e,n.state,n.location,n.replace);function r(i,u=!0){u||t.pauseListeners(),history.go(i)}const o=Te({location:"",base:e,go:r,createHref:tC.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function vC(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),mC(e)}let xr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var tn=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(tn||{});const xC={type:xr.Static,value:""},yC=/[a-zA-Z0-9_]/;function CC(e){if(!e)return[[]];if(e==="/")return[[xC]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${a}": ${h}`)}let t=tn.Static,r=t;const o=[];let i;function u(){i&&o.push(i),i=[]}let s=0,l,a="",c="";function d(){a&&(t===tn.Static?i.push({type:xr.Static,value:a}):t===tn.Param||t===tn.ParamRegExp||t===tn.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xr.Param,value:a,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),a="")}function f(){a+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&t!==tn.ParamRegExp){r=t,t=tn.EscapeNext;continue}switch(t){case tn.Static:l==="/"?(a&&d(),u()):l===":"?(d(),t=tn.Param):f();break;case tn.EscapeNext:f(),t=r;break;case tn.Param:l==="("?t=tn.ParamRegExp:yC.test(l)?f():(d(),t=tn.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case tn.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=tn.ParamRegExpEnd:c+=l;break;case tn.ParamRegExpEnd:d(),t=tn.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:n("Unknown state");break}}return t===tn.ParamRegExp&&n(`Unfinished custom RegExp for param "${a}"`),d(),u(),o}const pd="[^/]+?",_C={sensitive:!1,strict:!1,start:!0,end:!0};var xn=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(xn||{});const wC=/[.+*?^${}()[\]/\\]/g;function kC(e,n){const t=Te({},_C,n),r=[];let o=t.start?"^":"";const i=[];for(const a of e){const c=a.length?[]:[xn.Root];t.strict&&!a.length&&(o+="/");for(let d=0;d<a.length;d++){const f=a[d];let h=xn.Segment+(t.sensitive?xn.BonusCaseSensitive:0);if(f.type===xr.Static)d||(o+="/"),o+=f.value.replace(wC,"\\$&"),h+=xn.Static;else if(f.type===xr.Param){const{value:p,repeatable:g,optional:b,regexp:v}=f;i.push({name:p,repeatable:g,optional:b});const m=v||pd;if(m!==pd){h+=xn.BonusCustomRegExp;try{`${m}`}catch(y){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+y.message)}}let w=g?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(w=b&&a.length<2?`(?:/${w})`:"/"+w),b&&(w+="?"),o+=w,h+=xn.Dynamic,b&&(h+=xn.BonusOptional),g&&(h+=xn.BonusRepeatable),m===".*"&&(h+=xn.BonusWildcard)}c.push(h)}r.push(c)}if(t.strict&&t.end){const a=r.length-1;r[a][r[a].length-1]+=xn.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const u=new RegExp(o,t.sensitive?"":"i");function s(a){const c=a.match(u),d={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(a){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of f)if(h.type===xr.Static)c+=h.value;else if(h.type===xr.Param){const{value:p,repeatable:g,optional:b}=h,v=p in a?a[p]:"";if(Qn(v)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=Qn(v)?v.join("/"):v;if(!m)if(b)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);c+=m}}return c||"/"}return{re:u,score:r,keys:i,parse:s,stringify:l}}function SC(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===xn.Static+xn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===xn.Static+xn.Segment?1:-1:0}function bp(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=SC(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(gd(r))return 1;if(gd(o))return-1}return o.length-r.length}function gd(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const EC={strict:!1,end:!0,sensitive:!1};function AC(e,n,t){const r=kC(CC(e.path),t),o=Te(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function TC(e,n){const t=[],r=new Map;n=sd(EC,n);function o(d){return r.get(d)}function i(d,f,h){const p=!h,g=md(d);g.aliasOf=h&&h.record;const b=sd(n,d),v=[g];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of y)v.push(md(Te({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g})))}let m,w;for(const y of v){const{path:S}=y;if(f&&S[0]!=="/"){const z=f.record.path,_=z[z.length-1]==="/"?"":"/";y.path=f.record.path+(S&&_+S)}if(m=AC(y,f,b),h?h.alias.push(m):(w=w||m,w!==m&&w.alias.push(m),p&&d.name&&!vd(m)&&u(d.name)),mp(m)&&l(m),g.children){const z=g.children;for(let _=0;_<z.length;_++)i(z[_],m,h&&h.children[_])}h=h||m}return w?()=>{u(w)}:Ro}function u(d){if(fp(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function s(){return t}function l(d){const f=FC(d,t);t.splice(f,0,d),d.record.name&&!vd(d)&&r.set(d.record.name,d)}function a(d,f){let h,p={},g,b;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw ro(Xe.MATCHER_NOT_FOUND,{location:d});b=h.record.name,p=Te(bd(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&bd(d.params,h.keys.map(w=>w.name))),g=h.stringify(p)}else if(d.path!=null)g=d.path,h=t.find(w=>w.re.test(g)),h&&(p=h.parse(g),b=h.record.name);else{if(h=f.name?r.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw ro(Xe.MATCHER_NOT_FOUND,{location:d,currentLocation:f});b=h.record.name,p=Te({},f.params,d.params),g=h.stringify(p)}const v=[];let m=h;for(;m;)v.unshift(m.record),m=m.parent;return{name:b,path:g,params:p,matched:v,meta:zC(v)}}e.forEach(d=>i(d));function c(){t.length=0,r.clear()}return{addRoute:i,resolve:a,removeRoute:u,clearRoutes:c,getRoutes:s,getRecordMatcher:o}}function bd(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function md(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:DC(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function DC(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function vd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zC(e){return e.reduce((n,t)=>Te(n,t.meta),{})}function FC(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;bp(e,n[i])<0?r=i:t=i+1}const o=IC(e);return o&&(r=n.lastIndexOf(o,r-1)),r}function IC(e){let n=e;for(;n=n.parent;)if(mp(n)&&bp(e,n)===0)return n}function mp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xd(e){const n=ve(zu),t=ve(pp),r=R(()=>{const l=Ue(e.to);return n.resolve(l)}),o=R(()=>{const{matched:l}=r.value,{length:a}=l,c=l[a-1],d=t.matched;if(!c||!d.length)return-1;const f=d.findIndex(to.bind(null,c));if(f>-1)return f;const h=yd(l[a-2]);return a>1&&yd(c)===h&&d[d.length-1].path!==h?d.findIndex(to.bind(null,l[a-2])):f}),i=R(()=>o.value>-1&&OC(t.params,r.value.params)),u=R(()=>o.value>-1&&o.value===t.matched.length-1&&dp(t.params,r.value.params));function s(l={}){if($C(l)){const a=n[Ue(e.replace)?"replace":"push"](Ue(e.to)).catch(Ro);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:i,isExactActive:u,navigate:s}}function PC(e){return e.length===1?e[0]:e}const RC=le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xd,setup(e,{slots:n}){const t=uo(xd(e)),{options:r}=ve(zu),o=R(()=>({[Cd(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Cd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&PC(n.default(t));return e.custom?i:A("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),vp=RC;function $C(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function OC(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!Qn(o)||o.length!==r.length||r.some((i,u)=>i.valueOf()!==o[u].valueOf()))return!1}return!0}function yd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cd=(e,n,t)=>e??n??t,BC=le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=ve(ll),o=R(()=>e.route||r.value),i=ve(fd,0),u=R(()=>{let a=Ue(i);const{matched:c}=o.value;let d;for(;(d=c[a])&&!d.components;)a++;return a}),s=R(()=>o.value.matched[u.value]);Ke(fd,R(()=>u.value+1)),Ke(fC,s),Ke(ll,o);const l=oe();return cn(()=>[l.value,s.value,e.name],([a,c,d],[f,h,p])=>{c&&(c.instances[d]=a,h&&h!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),a&&c&&(!h||!to(c,h)||!f)&&(c.enterCallbacks[d]||[]).forEach(g=>g(a))},{flush:"post"}),()=>{const a=o.value,c=e.name,d=s.value,f=d&&d.components[c];if(!f)return _d(t.default,{Component:f,route:a});const h=d.props[c],p=h?h===!0?a.params:typeof h=="function"?h(a):h:null,b=A(f,Te({},p,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return _d(t.default,{Component:b,route:a})||b}}});function _d(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const MC=BC;function NC(e){const n=TC(e.routes,e),t=e.parseQuery||cC,r=e.stringifyQuery||dd,o=e.history,i=xo(),u=xo(),s=xo(),l=xf(Kt);let a=Kt;Kr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ps.bind(null,B=>""+B),d=ps.bind(null,q5),f=ps.bind(null,Yo);function h(B,re){let T,ae;return fp(B)?(T=n.getRecordMatcher(B),ae=re):ae=B,n.addRoute(ae,T)}function p(B){const re=n.getRecordMatcher(B);re&&n.removeRoute(re)}function g(){return n.getRoutes().map(B=>B.record)}function b(B){return!!n.getRecordMatcher(B)}function v(B,re){if(re=Te({},re||l.value),typeof B=="string"){const D=gs(t,B,re.path),N=n.resolve({path:D.path},re),U=o.createHref(D.fullPath);return Te(D,N,{params:f(N.params),hash:Yo(D.hash),redirectedFrom:void 0,href:U})}let T;if(B.path!=null)T=Te({},B,{path:gs(t,B.path,re.path).path});else{const D=Te({},B.params);for(const N in D)D[N]==null&&delete D[N];T=Te({},B,{params:d(D)}),re.params=d(re.params)}const ae=n.resolve(T,re),_e=B.hash||"";ae.params=c(f(ae.params));const x=X5(r,Te({},B,{hash:K5(_e),path:ae.path})),C=o.createHref(x);return Te({fullPath:x,hash:_e,query:r===dd?dC(B.query):B.query||{}},ae,{redirectedFrom:void 0,href:C})}function m(B){return typeof B=="string"?gs(t,B,l.value.path):Te({},B)}function w(B,re){if(a!==B)return ro(Xe.NAVIGATION_CANCELLED,{from:re,to:B})}function y(B){return _(B)}function S(B){return y(Te(m(B),{replace:!0}))}function z(B,re){const T=B.matched[B.matched.length-1];if(T&&T.redirect){const{redirect:ae}=T;let _e=typeof ae=="function"?ae(B,re):ae;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=m(_e):{path:_e},_e.params={}),Te({query:B.query,hash:B.hash,params:_e.path!=null?{}:B.params},_e)}}function _(B,re){const T=a=v(B),ae=l.value,_e=B.state,x=B.force,C=B.replace===!0,D=z(T,ae);if(D)return _(Te(m(D),{state:typeof D=="object"?Te({},_e,D.state):_e,force:x,replace:C}),re||T);const N=T;N.redirectedFrom=re;let U;return!x&&Y5(r,ae,T)&&(U=ro(Xe.NAVIGATION_DUPLICATED,{to:N,from:ae}),ee(ae,ae,!0,!1)),(U?Promise.resolve(U):F(N,ae)).catch(M=>wt(M)?wt(M,Xe.NAVIGATION_GUARD_REDIRECT)?M:ke(M):Z(M,N,ae)).then(M=>{if(M){if(wt(M,Xe.NAVIGATION_GUARD_REDIRECT))return _(Te({replace:C},m(M.to),{state:typeof M.to=="object"?Te({},_e,M.to.state):_e,force:x}),re||N)}else M=I(N,ae,!0,C,_e);return L(N,ae,M),M})}function E(B,re){const T=w(B,re);return T?Promise.reject(T):Promise.resolve()}function k(B){const re=de.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(B):B()}function F(B,re){let T;const[ae,_e,x]=hC(B,re);T=ms(ae.reverse(),"beforeRouteLeave",B,re);for(const D of ae)D.leaveGuards.forEach(N=>{T.push(Xt(N,B,re))});const C=E.bind(null,B,re);return T.push(C),$e(T).then(()=>{T=[];for(const D of i.list())T.push(Xt(D,B,re));return T.push(C),$e(T)}).then(()=>{T=ms(_e,"beforeRouteUpdate",B,re);for(const D of _e)D.updateGuards.forEach(N=>{T.push(Xt(N,B,re))});return T.push(C),$e(T)}).then(()=>{T=[];for(const D of x)if(D.beforeEnter)if(Qn(D.beforeEnter))for(const N of D.beforeEnter)T.push(Xt(N,B,re));else T.push(Xt(D.beforeEnter,B,re));return T.push(C),$e(T)}).then(()=>(B.matched.forEach(D=>D.enterCallbacks={}),T=ms(x,"beforeRouteEnter",B,re,k),T.push(C),$e(T))).then(()=>{T=[];for(const D of u.list())T.push(Xt(D,B,re));return T.push(C),$e(T)}).catch(D=>wt(D,Xe.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function L(B,re,T){s.list().forEach(ae=>k(()=>ae(B,re,T)))}function I(B,re,T,ae,_e){const x=w(B,re);if(x)return x;const C=re===Kt,D=Kr?history.state:{};T&&(ae||C?o.replace(B.fullPath,Te({scroll:C&&D&&D.scroll},_e)):o.push(B.fullPath,_e)),l.value=B,ee(B,re,T,C),ke()}let J;function G(){J||(J=o.listen((B,re,T)=>{if(!ye.listening)return;const ae=v(B),_e=z(ae,ye.currentRoute.value);if(_e){_(Te(_e,{replace:!0,force:!0}),ae).catch(Ro);return}a=ae;const x=l.value;Kr&&iC(cd(x.fullPath,T.delta),Du()),F(ae,x).catch(C=>wt(C,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_CANCELLED)?C:wt(C,Xe.NAVIGATION_GUARD_REDIRECT)?(_(Te(m(C.to),{force:!0}),ae).then(D=>{wt(D,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===ul.pop&&o.go(-1,!1)}).catch(Ro),Promise.reject()):(T.delta&&o.go(-T.delta,!1),Z(C,ae,x))).then(C=>{C=C||I(ae,x,!1),C&&(T.delta&&!wt(C,Xe.NAVIGATION_CANCELLED)?o.go(-T.delta,!1):T.type===ul.pop&&wt(C,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),L(ae,x,C)}).catch(Ro)}))}let $=xo(),q=xo(),P;function Z(B,re,T){ke(B);const ae=q.list();return ae.length?ae.forEach(_e=>_e(B,re,T)):console.error(B),Promise.reject(B)}function be(){return P&&l.value!==Kt?Promise.resolve():new Promise((B,re)=>{$.add([B,re])})}function ke(B){return P||(P=!B,G(),$.list().forEach(([re,T])=>B?T(B):re()),$.reset()),B}function ee(B,re,T,ae){const{scrollBehavior:_e}=e;if(!Kr||!_e)return Promise.resolve();const x=!T&&uC(cd(B.fullPath,0))||(ae||!T)&&history.state&&history.state.scroll||null;return ui().then(()=>_e(B,re,x)).then(C=>C&&oC(C)).catch(C=>Z(C,B,re))}const te=B=>o.go(B);let j;const de=new Set,ye={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,clearRoutes:n.clearRoutes,hasRoute:b,getRoutes:g,resolve:v,options:e,push:y,replace:S,go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:i.add,beforeResolve:u.add,afterEach:s.add,onError:q.add,isReady:be,install(B){B.component("RouterLink",vp),B.component("RouterView",MC),B.config.globalProperties.$router=ye,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(l)}),Kr&&!j&&l.value===Kt&&(j=!0,y(o.location).catch(ae=>{}));const re={};for(const ae in Kt)Object.defineProperty(re,ae,{get:()=>l.value[ae],enumerable:!0});B.provide(zu,ye),B.provide(pp,vf(re)),B.provide(ll,l);const T=B.unmount;de.add(B),B.unmount=function(){de.delete(B),de.size<1&&(a=Kt,J&&J(),J=null,l.value=Kt,j=!1,P=!1),T()}}};function $e(B){return B.reduce((re,T)=>re.then(()=>k(T)),Promise.resolve())}return ye}function LC(){return ve(zu)}const jC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},HC=le({name:"BookOutline",render:function(n,t){return We(),fn("svg",jC,t[0]||(t[0]=[ue("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1)]))}}),UC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},KC=le({name:"BriefcaseOutline",render:function(n,t){return We(),fn("svg",UC,t[0]||(t[0]=[ue("rect",{x:"32",y:"128",width:"448",height:"320",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 240H32"},null,-1),ue("path",{d:"M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),WC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},VC=le({name:"HomeOutline",render:function(n,t){return We(),fn("svg",WC,t[0]||(t[0]=[ue("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1)]))}}),qC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},GC=le({name:"InformationCircleOutline",render:function(n,t){return We(),fn("svg",qC,t[0]||(t[0]=[ue("path",{d:"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M220 220h32v116"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 340h88"},null,-1),ue("path",{d:"M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",fill:"currentColor"},null,-1)]))}}),ZC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},XC=le({name:"LinkOutline",render:function(n,t){return We(),fn("svg",ZC,t[0]||(t[0]=[ue("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1)]))}}),YC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},JC=le({name:"SettingsOutline",render:function(n,t){return We(),fn("svg",YC,t[0]||(t[0]=[ue("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),QC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},e8=le({name:"WineOutline",render:function(n,t){return We(),fn("svg",QC,t[0]||(t[0]=[ue("path",{d:"M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M256 272v160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 432H160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M112 160h288"},null,-1)]))}}),n8=`#  git基本操作

1. 安装完成后

   配置你的用户名和email

2. 使用git

   git status查看git的状态

   git init初始化git

3. 文件状态:

   文件---|未跟踪

   ​        ---|已跟踪---|未修改:两边文件不一样

   ​                          ---|修改:磁盘和git库里的文件一样

   ​                           ---|暂存:修改和保存,未提交到仓库

   把文件git add xxx就是去跟踪它了(暂存)

   使用git commit就是把他提交到git仓库,就成未修改的状态了

   git commit -a -m "xxxx"提交所有未修改的文件

   去修改文件,未修改就成修改了 




####  vscode和git

vscode里面有一个git的图形化界面，更方便使用

1. git restore 文件路径

   重置文件，恢复上一个的快照

2. git rm 文件路径

   删除文件  

   删除文件不能删除已经修改的文件 

   使用git rm xxx -f强制删除，已经删除的文件可以使用restore强制还原git restore --staged xxx，因为这个文件已经被暂存到本地的暂存库里面

3. git mv from  to 

   from和to是文件路径

   移动文件和重命名文件

   ​

####  分支

1. 使用git log打印自己的提交日志，可以检查自己的提交情况

   git在存储文件的时候，每一次代码的提交都会创建一个与之对应的节点，git就是通过这种节点来纪录代码的状态，节点构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为master

2.  git breach 查看分支

3. git breach 名字  创建分支

4. git breach -d 名字 删除分支

5. git switch 名字  切换分支 

**作用**

不想在源代码上直接修改，不要在主分支上进行修改，在另外一个分支上进行处理，更新完成后再进行合并(自己的分支合并到主分支)

![74618961461](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746189614618.png)

> 从公司拉取代码下来的时候,先创建分支,在自己的分支上写代码,完成各自的任务

git merge 子分支

---|在目前处于主分支的时候,主分支合并子分支,当代码是增加节点的时候,可以快速合并,当不一样的时候,可能自动合并失败,就需要手动处理(覆盖和并存)

![不一样的](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746190653763.png)

![74619083534](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746190835343.png)

显示分支的插件GitLens



冲突的时候,当前主分支的代码和次要分支的代码

---|然后你再去删除子分支 



####  变基（rebase）

 在开发中除了使用merge合并分支，还能使用变基合并分支

使用merge合并分支时，在提交记录中会将所有的分支和分支合并的过程全部显示出来，这样当项目比较复杂的时候，开发过程比较波折时，需要反复创建和合并删除分支

合并分支（记录不会被删掉）

![74623425307](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746234253075.png)



变基（没用多余的分支记录）

![74623432906](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746234329060.png)

发起变基的时候

git rebase xxx 把当前的分支的基底变成xxx 

1. git会找到两条分支的最近祖先
2. 对比当前分支相对于祖先的历史提交，并把他们提取到存储在一个临时文件里面
3. 将当前部分指向目标基地
4. 以当前基地开始，重新执行历史操作

变基和merge对于合并分支的结果是一样的，但变基会使代码提交更加简洁，大部分情况下，变基和合并是可以呼唤的，但提交到远程库，不要使用变基进行操作







####  远程仓库remote

和本地库不同的是，远程库可以被多人访问而已，上面的所有操作都是在本地仓库实现的，在开发中不是这样做的，通常公司会搭建git服务器，或者购买公共的私有库，学习阶段直接使用公共仓库就好了（使用github、gitee）

> git是代码操作工具,github是远程git库

![74623978966](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746239789666.png)

创建一个新的仓库和将已经存在的本地库上传到github

> git remote add origin xxxxurl
>
> git branch -H main
>
> //修改当前分支的名字为main
>
> git push -u origin main
>
> 将本地的代码上传到origin的main分支





####  远程库操作

\`\`\`shell
git remote
#列出当前的关联的远程库
git remote add 仓库名 url
#关联远程仓库 
git remote remove 仓库名
#删除远程库
git push -h 仓库名 分支
#向远程库推送代码
git clone url
#克隆远程库，产生压缩包

#如果本地库版本低于远程库，无法将代码推送到远程库上面去
git fetch
#要想推送成功，要先去更新新的代码，fetch它会从远程库下载所有代码，但是它不会把代码和我们当前分支自动合并需要你去处理这些错误

git pull
#拉取代码，会覆盖你的本地代码（自动合并）
\`\`\`

注意：推送代码之前一定要从远程库先拉取最新的代码 







####  标签

1. git节点回到以前的节点，使用：git switch 节点id

2. ![74649474862](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746494748629.png)

   头head对应着一个分支，必须指向一个分支

   当head没有指向某个分支的头部时，就是出现了分离头指针（head detached）分离头指针也可以操纵代买，但是不能出现在任何分支下，所以在分离头指针的情况下，不要操作代码

   如果一定要在分离头指针下进行代码操作，则可以选择创建分支后操作

   git switch - c <分支名> <提交id>

3. 标签可以为提交记录设置节点说明，方便识别出不同的开发节点

   git tag查询标签的方法

   git tag xxx(版本) 为当前的节点打上一个标签

   git tag xxx(版本) id 给特定版本打

4. 有了标签以后

   git switch - c <分支名> <版本>

   可以这样去在分离指针头下操作

   也可以把标签推到远程库

   git push 库名 标签名

   git push 库名 --tags    推送所有标签

   git tag -d 标签名  删除标签

   git push -d 标签名   删除远程库标签





####  gitigone

- 默认情况下，git会监视项目中的所有内容，但是有些内容比如nide_modules目录里面的内容,我们不希望它被git管理,我们可以在项目目录里添加一个.gitigone文件,来设置那些需要给被git忽略的文件

![74661309753](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746613097534.png)

#是里面的注释文件





####  gh-pages

静态网页部署



####  docisaurus静态网页生成

和vitepress同理

别着急，这个问题很常见，特别是克隆一些复杂的开源项目时。我们来分析一下，然后一步步解决它。





git子模块的问题

### 问题分析：为什么会报错？

你运行 \`npm start\` 时，Vite 尝试启动开发服务器，但失败了。错误日志的核心是这一句：

\`X [ERROR] Could not resolve "../../../../src/_common/docs/plugins/changelog-to-json"\`

- **什么意思？**：Vite 在加载它的配置文件（\`vite.config.js\`）时，需要一个位于 \`src/_common/docs/plugins/\` 目录下的文件，但是它找不到这个文件。
- **为什么找不到？**：\`tdesign-mobile-vue\` 这个项目非常典型，它使用了一种叫做 **Git Submodule (Git 子模块)** 的技术来管理一部分公共代码（比如文档、通用插件等）。这个 \`src/_common\` 目录很可能就是一个子模块。

当你使用 \`git clone\` 克隆项目时，默认情况下**不会**下载这些子模块的内容，只会留下一个空的文件夹占位。因此，当项目试图访问子模块里的文件时，就会因为文件不存在而报错。

**简单来说：你下载的项目代码不完整，缺少了一部分依赖的“子模块”代码。**

------

### 解决方案：怎么办？

你需要做的就是去下载这部分缺失的子模块代码。请按照以下步骤操作：

#### 第 1 步：确保你安装了 Git

这个操作依赖 Git 命令。请先确保你的电脑上安装了 Git。可以在终端里运行 \`git --version\` 来检查。如果没有安装，请先[下载并安装 Git](https://git-scm.com/downloads)。

#### 第 2 步：初始化并更新子模块

1. 打开你的终端（比如 PowerShell 或 CMD）。

2. 使用 \`cd\` 命令进入到你的项目根目录 ( \`C:\\...tdesign-mobile-vue\` )。

3. 运行下面这条命令。它会自动查找项目配置好的子模块并把它们下载下来：

   Bash\`git submodule update --init --recursive\`

   - \`--init\`：初始化本地的子模块配置文件。
   - \`--recursive\`：如果子模块里面还嵌套了其他子模块，也一并下载。

   执行这个命令后，你应该能看到它在下载一些东西。完成后，你可以检查一下项目目录，现在 \`src/_common\` 文件夹里应该有文件了。`,t8=Object.freeze(Object.defineProperty({__proto__:null,default:n8},Symbol.toStringTag,{value:"Module"})),r8=`#  开源协议

开源软件的定义由**开放源代码促进会（OSI）**给出，是至今为止广泛认同的标准。OSI 的定义将开源软件描述为：

> **开源软件**是指其**源代码可被自由查阅、修改和分发**的软件，且必须满足以下所有条件——

####  **官方定义：OSI 的黄金标准**[¶](https://oss.hust.openatom.club/ch1/sec1/what-is-oss/#osi)

**开放源代码促进会（OSI）**提出的标准为我们提供了一个清晰的框架，帮助我们区分开源与闭源软件。开源软件的核心特点是：开放源代码，允许自由使用、修改、分发，且这种自由是无条件的。

![74882303798](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823037988.png)

####  运行规则

事实上，开源的蓬勃发展，恰恰建立在一套相对完善且不断演进的法律框架和社区规范之上。其中，最核心的就是**开源许可证 (Open Source Licenses)**。它们就像开源世界的“交通规则”，规定了代码的使用者和贡献者各自拥有哪些权利，需要履行哪些义务。不理解这些规则，盲目地使用或贡献开源代码，轻则可能引发不必要的麻烦，重则甚至可能卷入法律纠纷，让你辛辛苦苦的成果付诸东流。

所以，想要在开源的世界里愉快地玩耍，不仅要会写代码，还得懂点“法”。



这些许可证种类繁多，但根据其核心精神和限制程度，大致可以分为两大派别：

- **“宽松派”：permissive licenses** 这类许可证，顾名思义，对使用者非常“宽容大度”。它们通常只要求你在使用或分发代码时，保留原始的版权声明和许可证文本。至于你怎么用，用到哪里（比如集成到你自己的商业闭源软件里），它们基本不怎么干涉。
  - **代表选手**：[**MIT 许可证**](https://opensource.org/license/mit)（可能是最简洁最宽松的了）、**Apache 许可证 2.0**（除了宽松，还特别考虑了专利问题）、**BSD 系列许可证**（也有不同版本，但大体上比较自由）。
  - **核心思想**：最大限度地促进代码的传播和使用，哪怕是被用在商业产品里也没关系。
- **“传承派”：copyleft licenses (著佐权许可证)** 这一派的理念就比较“硬核”了。它们的核心思想是利用版权法来确保软件及其衍生作品**永远保持开源和自由**。也就是说，如果你修改了基于这类许可证的代码，或者将其与你自己的代码结合形成了新的软件，那么当你分发这个新软件时，通常也必须以相同或兼容的著佐权许可证来发布，并提供相应的源代码。
  - **代表选手**：大名鼎鼎的 **GNU 通用公共许可证 (GPL)** 及其变种（如 LGPL, AGPL）。GPL 以其强烈的“传染性”著称——一旦你的项目里用了一段 GPL 的代码并进行分发，那么你的整个项目很可能都得遵循 GPL 的规定。
  - **核心思想**：自由的精神需要被“传染”和“继承”，确保软件及其改进版本能够持续惠及整个社区。

![74882381166](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823811661.png)

![74882385593](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823855935.png)

做好开源协议的准备

![74882508544](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825085444.png)

在github新建LICENSE文件，可以选择你需要的许可证进行添加

![74882506232](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825062327.png)



####  提交规范

- header

![74882552140](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825521406.png)

docs:对文档的变动，包括注释和readme文件的修改

sync：同步主线或者分支的bug

style：对代码格式的变动，这些变动不影响代码的运行，通常包括空格，缩进，换行等风格的调制

![74882581300](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825813008.png)

- body

  描述，清晰一点

- footer

  footer 部分只用于两种情况。

  不兼容变动

  *如果当前代码与上一个版本不兼容, 则Footer部分以BREAKING CHANGE开头, 后面是对变动的描述、以及变动理由和迁移方法。*

  关闭 Issue

  *如果当前commit针对某个 issue, 那么可以在 Footer 部分关闭这个 issue*

  ​`,o8=Object.freeze(Object.defineProperty({__proto__:null,default:r8},Symbol.toStringTag,{value:"Module"})),i8=`# go语言进阶学习

- **web开发简介**

  Go的基础net/http包提供了基础的路由

  web框架大致分为router盒mvc框架

  ​

`,u8=Object.freeze(Object.defineProperty({__proto__:null,default:i8},Symbol.toStringTag,{value:"Module"})),s8=`####  同构渲染ssr

![75550679277](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755506792775.png)

服务端渲染，客户端渲染，同构渲染（一部分服务端，一部分客户端）

![75550811012](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508110120.png)

![75550836328](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508363289.png)

这时候的请求是一步步来的，按需使用

 ![75550871013](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508710134.png)

首屏渲染速度需要优化，搜索引擎第一次请求网页，分析网页内容，给别人搜索，客户端渲染时，搜索引擎第一次拿到的是空的页面，不利于SEO，网站不好被搜索引擎记录

**相应的框架就是vue react等**

![75550904108](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755509041087.png)

第一次请求给完整的页面，后面的请求都是用ajax进行渲染

什么时候使用同步渲染：

项目对外，需要被搜索，且首屏渲染等

的时候考虑使用同步渲染



####  开始

直接下载或者克隆

![75552518356](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525183566.png)

npm run dev -- -o

是开发服务器的启动命令



####  基本路由

![75552563939](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525639395.png)

根组件哪里挖了一个路由出口：nuxt-page组件

 ![75552578543](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525785437.png)

简单的路由设置

在路由目录下创建index.vue可以当成一个默认路由,在访问文件夹的时候使用

**父子组件**

![75552635979](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755526359799.png)

![75552637248](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755526372483.png)

  



####  路由跳转

1. 使用标签跳转

![75557708036](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755577080365.png)

\`\`\`vue
<template>
  <div>
    <h1>我是根组件</h1>
    <nuxt-link to="/users">用户-列表</nuxt-link>
    <nuxt-link to="/users/create-or-edit">用户-添加或更新</nuxt-link>
    <nuxt-link to="/about">关于</nuxt-link>
    <nuxt-link to="/roles/admin">角色-管理员</nuxt-link>
    <nuxt-link to="/roles/normal">角色-普通用户</nuxt-link>
    
    <!-- 
  		nuxt-link 会被编译成 a 标签, 但是不推荐直接使用 a 标签
    	直接用 a 标签，点击会刷新跳转，相当于一次全新的向服务端发起的请求
    	使用 nuxt-link 是浏览器端本地切换页面，即SPA
  	-->
    <nuxt-page />
  </div>
</template>

<script setup>
<\/script>

<style>
  /* nuxt-link 会被编译成 a 标签 */
	a { margin: 20px; }
</style>
\`\`\`

推荐组件有一个根标签

2. 自定义路由参数

   ![75557965227](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755579652276.png)

   query也是这样取出来

3. 自定义插件

   ![75558081894](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755580818941.png)

路由匹配失败等错误, 可以在项目根目录下创建 error.vue

中间件

![75558349011](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583490110.png)

![75558350228](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583502284.png)



####  使用组件

![75558132420](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755581324201.png)

三种使用方法:

在你隔壁的,需要你引入

在components下的,不用引入,但要区分文件夹和非文件夹,所以要用大小驼峰,有文件夹的使用驼峰





####  布局处理

![75558357197](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583571979.png)

![75558355683](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583556834.png)

页面默认布局



####  SEO的配置

在nuxt.config.ts进行相关的配置

![75577216594](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755772165946.png)

也可以在vue文件进行设置

![75577310168](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773101685.png)



还有其他设置

![75577329967](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773299676.png)

  或者用动态标题

![75577371923](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773719235.png)

动态改变

> 上面的一些配置可能有冲突,注意删除\\



####  静态资源的访存

> public目录:存放的内容相当于服务器的根目录去访问
>
> assets:构建工具会去处理的内容

1. 访问public

   ![75577408923](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774089236.png)

2. 在assets

   ![75577417514](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774175143.png)

   要用构建工具就用这个

3. 使用差别

   ![75577486830](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774868307.png)







####  配置环境变量

![75583615487](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755836154878.png)

定义环境变量

![75583616837](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755836168377.png)

这样拿到相关的值

 .env文件的值会覆盖你的nuxt.config.ts文件

  ![75583714664](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837146644.png)

在pbilic里面执行的值浏览器可以看到,通过isServer在浏览器和服务器不同的值来判断当前的环境

也可以在app.config.ts里面设置环境变量

![75583725868](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837258684.png)

然后取值

![75583726699](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837266997.png)





####  获取数据

![75583821682](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755838216824.png)

![75583843519](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755838435195.png)

nuxt框架提供了其他方式去发请求

这个是nuxt3调用http调用的首选方式

![75584017729](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755840177296.png)

只是下面那个多了一个请求的说明

 ![75584137262](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755841372621.png)

使用解构语法可以解构这几个值

**带lazy的请求**

不会阻塞在一起，会先返回

1. 使用useFetch请求数据

![75584186443](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755841864436.png)

![75584245499](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755842454994.png)



token可以在headers里面设置，也能在拦截器option里面的authorization里面设置



####  nuxt也能编写后端的代码

服务端

> 在server/api/aaaa.ts

请求对应的地址就可以了,一般在NUxt开发里面,是请求相关的后端服务器

![75595041566](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950415662.png)

写出~/server/routers/文件下面,就不用写api了

也可以写成server/api/xxx/ss.ts

或者是变化的值,路由传参

![75595085104](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950851040.png)

![75595099952](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950999520.png)

实际拿到的age

前端

![75595034024](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950340242.png)



请求方式

通过更改文件名进行请求方式的改变

![75595548513](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755955485139.png)

 拿到请求数据的body

![75595552681](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755955526814.png)



写一个api/[...].ts可以让前端匹配匹配不到的路由

**中间件**

![75595759320](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755957593201.png)

在nuxt服务端也能调用redis等数据库来传输资源





####  状态管理

![75595805196](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755958051969.png)

写在composables/states.ts下面的,自带抓状态管理

在nuxt也能使用pinia做状态管理



####  自动导入

很多ref和computed和一些工具函数在nuxt可以自动导入

在配置文件里面可以关掉







####  构建nuxt

  直接build

然后node允许index。mjs页面

**node  .output/server/index.mjs**

端口和地址可以通过 process.env 配置, 但没必要, 不要纠结



或者使用PM2，一直运行

1. 安装 pm2

npm  i  pm2  -g      // 可能需要管理员权限

pm2  -v

![75601212132](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756012121329.png)



####  路由渲染策略

\`\`\`javascript
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { swr: true },  // Static page generated on-demand, revalidates in background
    '/articles/**': { static: true },   // Static page generated on-demand once
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },   // 设置响应头信息
    '/admin/**': { ssr: false },  // Render these routes with SPA
    // Add cors headers
    '/api/v1/**': { cors: true },
    // Add redirect headers
    '/old-page': { redirect: '/new-page' },
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
  }
})

\`\`\`

简短的配置

\`\`\`javascript
export default defineNuxtConfig({
  routes: {
    '/': { prerender: true },         // 每一次构建时，都重新预渲染页面 (透过 Builder),常用的页面数据不变化的可以变成静态渲染
    '/blog/*': { static: true },      // 接收到一个请求时，页面依照需求重新渲染页面 (透过 Lambda)
    '/stats/*': { swr: '10 min' },    // 接收到一个请求时，10 分钟的快取缓存过期后，将会再次的重新取得数据进行渲染 (透过 Lambda)
    '/admin/*': { ssr: false },       // 仅在客户端渲染
    '/react/*': { redirect: '/vue' }, // 路由重定向,没找到相关路由的时候跳转
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },   // 设置响应头信息
  }
})
\`\`\`

在nuxt.config.js里面写这些,这里写了客户端渲染admin文件夹的内容,服务端不会渲染里面的内容,而是让客户端去请求

不同路径有不同的策略

**取消服务端渲染**

![75601304395](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013043952.png)





####  SSG-预渲染

在服务器构建的时候使用的东西，加快页面拼接的速度

![75601362103](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013621034.png)

执行generate生成静态页面，先生成好静态页面，直接在请求的时候返回

并且默认不生产动态路由

![75601374936](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013749366.png)

要去nuxt.config.ts定义才能渲染动态路由



---

CSR、SSR和SSG各有优缺点，适用于不同的场景和需求。在选择使用哪种技术时，需要根据项目的具体需求来权衡利弊。

例如，对于需要丰富交互效果和实时数据的场景，可以选择CSR；对于需要优化首屏加载速度和SEO效果的场景，可以选择SSR；而对于内容更新不频繁、对性能要求高的场景，可以选择SSG。同时，也可以结合使用多种技术来实现更好的用户体验和性能优化。

----





导入组件库

![75601414960](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014149607.png)

**![75601417670](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014176701.png)**

两种导入方式

![75601421346](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014213464.png)

组件懒加载方式

`,l8=Object.freeze(Object.defineProperty({__proto__:null,default:s8},Symbol.toStringTag,{value:"Module"})),a8=`# 1.Typescript的价值

js的核心是灵活，但是会加大代码的维护困难，所以需要一些类型的约束

- ts更像后端java，让js可以去开发大型应用
- 类型系统可以帮助我们在写代码时提供丰富的语法提示
- 在编写代码时进行类型检查从而避免很多线上错误

####  什么是ts

![74916904898](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749169048983.png)

1. 需要把ts代码转化为js代码才能运行

   \`npm install typescript -g\`安装转译模块,需要项目先有一个配置文件(用tsc --init),再运行tsc   

2. 通过vscode的插件完成ts文件的运行

   code-runner,如果是js文件,会直接采用node+文件名来执行,如果是ts,会使用ts-node来执行文件   

   \`sudo npm install ts-node -g\`

3. 通过代码构建工具去转化js,再去运行(webpack,rollup,esbuilde,vite),最终变成js执行 

   默认rollip,打包时会查找当前的目录,rollup.config.js

   ![74917231262](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749172312626.png)

   output要加一个sourcemap:true

####  ts的基础类型

ts关注的是类型,不是业务逻辑

> 变量名:类型=值

1. 基础类型
2. 高级类型
3. 内置类型
4. 自定义类型
5. 类型体操




ts的目的是在赋予的时候进行检查类型,只是提示作用,不是在运行的时候发生的,编译ts之后,类型就消失了(写空气)

 

ts比较偏向使用export{}来分割模块,而不是使用函数来分割

ts还有一个特点,不是所有变量都要添加类型,ts支持变量推导,可以猜测类型

 

\`\`\`typescript
//基础类型,小写的命名
const name:string="jwt"
const age:number=1
const gender:boolen=true

//大写的用来描述实例类型
\`\`\`

![74917527544](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749175275440.png)

类的类型,用来描述实例的

- 数组

\`\`\`typescript
//类型[]Array类型,用于声明数组
let arr1:number[]=[1,2,3,2,]
let arr2:Array<number>=[1,2,3,1,3]
let arr3:(number|string)[]=["ss",1]
//联合类型
\`\`\`

数组要求的是存储的格式安装特定类型来存储,不关心位置

- 元组

  你赋予的值要符合这个结构和顺序,不能无序去排列,也是不能增加额外的类型的值,只能是已有的,而且增加后无法访问

  ![74917630797](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749176307970.png)

  安全问题

  ​

- 枚举

  自带类型的对象（自己有类型,就是一个对象）

  约定一组格式我们会用枚举,状态码,权限,数据格式,标志位

  ![74943392254](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749433922540.png)

  ![74943399988](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749433999883.png)

  通过索引可以拿到枚举里面的值

   并且一般会给好这些东西一个固定的值

  ![74943415587](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749434155875.png)

   常量枚举不会额外编译成对象,更节约内存

  ![74943444037](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749434440374.png)

  异构枚举

  使用大写的命名,防止命名冲突

- null和undefiend

  也是一种基本类型,正常情况夏,只能赋予给unll和undefiend

   除非关闭相关的检测 

  void类型代表的类型是空,void用来表示函数的返回值,undefiend的范围小于void

  ​

  never是永远到不了的地方,就是never(函数无法到达结束的状态)

  ![74943557977](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749435579774.png)

   代码的完整性保护

  ![74943599357](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749435993571.png)

  不能让val到达validateCheck

  ​

  any是任何类型,能不写ant就不写,any会导致类型丧失检测,容易1导致出错,相当于没有ts加持




####  object引用类型

\`\`\`typescript
function create(val:object){
    
}
//标识非原始数据类型,用object
\`\`\`

![74943672983](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749436729830.png)

symbol和bigint

用的很少



> 基础类型
>
> string number boolean 数组 元组 枚举 null undefiend void never any object symbol bigint







####  ts的类型断言

![74943713487](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749437134875.png)

const声明的a1的类型是1,不可修改,而let的类型是number,范围会更大一点

**断言**

1. 指定类型再使用(非断言)

   \`\`\`typescript
   let strOrNum:string|number;
   strOrNum="1"
   strOrNum.endsWith()
   \`\`\`

2. 断言类型后再使用,as断言成某种类型(一定是联合类型中的某一个),!是非空断言,表示这个值一定不是空的

   不存在的结果自己承担,ts不管了

   \`\`\`typescript
   let strOrNum:string|number;
   (strOrNum! as string).charCodeAt(0);
   (<number>strOrNum!).toFixed(3)
   //这里有两个定义的方法
   \`\`\`

   使用! ? ??的使用方法

   !就是确定它存在

   ![74943900349](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439003490.png)

   值 as xxx或者<xxx>值,一般用在联合类型

   ![74943919372](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439193721.png)

   双重断言会破坏原有关系

   大类型断言成子类型

   ![74943932960](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439329602.png)

   ​







####  函数类型

 函数的声明方法

\`\`\`typescript
function sum(a,b){
    return a+b
}


const sum=function(a,b){
    return a+b
}
//一般使用第二种进行定义,因为function关键字声明的函数可以提升到作用域顶部,就是一般function用来描述外部函数,cosnt描述内部函数
\`\`\`

 对于ts来说,函数关键字标注的函数,不能标注函数类型,通过表达式来声明函数,必须赋予的值满足定义的类型

![74957027039](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749570270393.png)

**可以使用type来声明关键字**

![74957058699](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749570586992.png)

如果标明函数的类型,在使用函数的时候以标明的为准

**参数**

![74957102517](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749571025173.png)

?不能和默认值一起使用

**参数this问题**

尽量不采用this,来作为函数的上下文,this的缺陷就是类型推到问题

如果要限制this的类型,需要手动指定this类型

![74957148412](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749571484124.png)

![74957205079](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572050798.png)

ts有一个概念是重载,对于强类型语言可以写一个函数写多遍(参数不同),js实现重载考的是arguments

![74957217118](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572171189.png)

类型重载后

![74957219976](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572199760.png)

下面定义了父类型(不用any用重载前的那样也可以),上面的是一种具体的方案(子类型),上面可以限制下面的类型,根据用户给的值,来判断返回值

![74957231264](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572312648.png)





####  类的类型

类可以继承

类的组成：构造函数，属性(实例属性，原型属性，静态属性)、方法（实例的方法，原型方法，静态方法），访问器，静态相关的配置

 \`\`\`typescript
class Circle{
    //给这个类来声明属性
    public x:number
    construct(x:number,y:number=200){
        this.x=x;
        this.y=y;
        this.fn=()=>{}
    }
    //public公开属性,类的实例可以在外部可以访问这个属性,类的内部也可以访问,继承的子类也可以访问
    //protected我自己能访问,子类也可以访问,外部不能访问
    //private私有的,自己才能访问
    //readonly是在初始化后(costructor之外)时候是只读的
}



//父子类的操作
class Animal{
    constructor(portected name:string){
        this.name='name'
    }
    //原型方法,就是每一个实例共享的方法,父类提供的方法,子类是可以进行方法重写的
    //void意味着是不关心函数的返回值，并不是空的意思
    changeName(value:string,age:number):void{
        this.name=value
    }
    //这个函数等同于加了一个public
    get aliasName(){
        return '$'+this.name;
    }
    //原型属性,需要通过访问器访问
    //原型是共享的,挂在protapyte上面实现
    set alisName(name:string){
        this.name=name;
    }
    static a=1;
    static getA(){
        return this.a
    }
    //静态方法声明
}


class Cat extends Animal{
    constructor(name:string,public rendonly age:number){
        super(name);
        //super在构造函数指向的是父类，在原型方法中调用的时候指向的是父类的原型
        //super在类中访问constructor\\static函数中指向的都是父类,在原型方法中,属性访问器都是父类的原型
    }
    //子类重写父类方法要统一,赋予的函数要兼容父类,子类的参数可以比父类少
    //并且可以忽略void
    changeName(value:number){
         super.chageName(value )
         return 'abc'
    }
}

const tom=new Cat('tom',30)
//初始化
 \`\`\`



 不能被new的类

![74961944549](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749619445492.png)

ts有抽象类概念,abstract不存在的

抽象类可以含义非抽象的方法和属性,不会new它

![74962008164](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749620081641.png)

代码编程的时候,现在已经是慢慢脱离继承了,组合优于继承,类的装饰器redux\\nest\\mabx







####  接口和泛型的使用

接口：

和抽象类不同，接口必须都是抽象的，没有具体的实现

接口就是描述数据的结构或者形状，定义好结构，再去针对结构进行实现

**type和interface**

一般来说，描述对象、类，使用interface比较多,不能声明联合类型

type可以快速声明类型，比如联合类型，一些工具类型使用1type

type用的比较多，能type就用type，type不能重名,复杂类型使用type，interface可以重名

 \`\`\`typescript
//描述对象结构
interface IPerson{
    username:'abc'
}
let person:IPerson={
    username:'abc',
    age:38,
}


//子可以赋予给父亲，我们需要把一个值赋予给另外一个值，如果是声明的必须一致
let obj={
    username:'abc',
    age:38,
    address:'地址'
}
let person:IPerson=obj//赋值的时候会产生兼容性(儿子可以赋予给父亲)
 

//接口可以描述函数
interface ICounter{
    {}:number
    count:number
}
//const标识此值不能修改，let是可以修改的（如果给函数增加类型定义，函数不能被修改时只能用const）
const counter：ICount=()=>{
    return counter.count++
}
counter.count=0
 \`\`\`

//接口合并，自己的业务少

![74969126861](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691268613.png)

会改变源码的逻辑 

也可以使用继承的逻辑来扩展接口

![74969169418](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691694182.png)

![74969179266](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691792665.png)

任意类型和实例哪里的[Symbol()]:'ABC'是不用定义的



任意类型,随机的属性,描述数字索引(除了必要的属性,其他随意)

\`\`\`typescript
interface IArray{
    [key:number]:any
}
let arr:IArray={
    0:1,
    1:2,
    3:3,
    4:"abc",
    5:true 
}
//或者
let arr:IArray=[1,2,3]
\`\`\`





通过索引访问符,来获取内部类型

\`\`\`typescript
interface ResponseData{
    username:string,
        token:string
}

interface ReturnVal{
    code:number,
        data:ResponseData
}

type ICode=ReturVal['code'];
type IUsername=ReturVal['data']['username'];
type IKey = ReturnVal[teyof ReturnVal]
//interface没有联合类型
\`\`\`

接口可以实现,接口通过类实现

一个接口可以继承多个接口,接口可以用于继承类

![75024471539](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750244715390.png)

  



怎么标识自己传递了一个类,类类型不能描述类本身,描述的是实例

\`\`\`typescript
class Dog{
    
}

class Cat{
    
}




function createInstance<T>(clazz:{new:()T}){
    //不能直接使用dog为类型,也不能typeof dog来作为类型
    //ts的检验类型,鸭子类型检测,有大部分相同的就是一个类型,两个空类,是一样的类型
    //所以这里要使用泛型来完成,传什么就是什么类型
    //或者写成new ()=>Dog
}

const instance = createInstance<Dog>(Dog)
//省略写法
const instance = createInstance(Dog)

\`\`\`

**泛型:**类似坑位(函数的形式参数,刚开始不知道类型,通过使用才知道类型)

使用才传递东西

通过<>传到上面,上面用<>接收,可以一直传递

![75024632513](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750246325132.png)

也可以这样写

有参数,且接口或者type使用泛型的情况



泛型可以用于函数接口类这些东西上面

无法确定类型的时候使用

**实际使用例子**

![75024706093](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750247060934.png)

写辅助函数的时候,有多个泛型可以用于保存值

![75024731008](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750247310081.png)

弱推导类型不能发现数组交换了,所以要用泛型来





区分在使用函数的时候定义泛型还是在定于函数的时候使用泛型

![75024811269](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750248112693.png)

![75024846365](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750248463652.png)

声明时准备和使用时准备







####  泛型和交叉类型

\`\`\`typescript
//接口的返回类型可能是统一的
//code,data,message
//泛型的默认值来解决泛型的值默认情况
interface APIResponse<T>{
    error:number,
    data:T,
    message:string,
}

    interface LoginInfo{
        username:string,
            token:string
    }
    
    function login():APIResponse<LoginInfo>{
        return{
            error:1,
            data:{
                username:"sss",
                token:'sssssssss'
            },
            message:'成功'
        }
    }
let r = login()

//在开发的时候想使用联合类型
type IUnion<T=Boolen>=T|string|number
type t1=IUnion
type t2=IUnion<string[]|number[]>

//用户随意传递
//跟上面那个类似
           
//使用泛型的时候不能做运算（T+T=T？）
       
\`\`\`

\`\`\`typescript
function getVal<T extend string|number>(val:T):T{
                return val
                }
                
//约束类型T是什么什么的子类型
\`\`\`

function getLen<T entends {length:number}>(val:T){

​        return val.length

}

传入的东西要有length属性

![75029744487](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750297444878.png)

\`\`\`typescript
//类中泛型
class MyList<T extend sting|number>{
    public arr:T[]=[]
    add(val:T){
        this.arr.push(val)
    }
    getMax():T{
        let max = this.arr[0]
        for(let i = 0;i<this.arr.length;i++){
            let cur=this.arr[i];
            cur>max?(max=cur):void 0
        }
        return max
    }
}
const list = new Mylistconst 

const list = new Mylistconst<string>
list.add(1)
list.getMax()
\`\`\`

泛型使用场景:函数(参数返回值),对象坑位,类,泛型的默认值和约束







####  交叉类型

聚合类型是并集,交叉类型是交集

\`\`\`typescript
interface Person1 {
handsome:string
}
interface Person2 {
high:string
}
// let person:Person1 | Person2 ={
I1high:'高
}
let person:Person1 & Person2 ={handsome:"帅"high:'高}

//使用交叉类型需要全部都使用 
//子类型可以赋予给父类型,子类型的结构要有包含父类型的结构
\`\`\`





####  内置类型

- 条件类型 if/else 三元表达式 (extends 左边和右边的关系)

  子类型 extends 父类型 = true

  \`\`\`typescript
  type StatusCode<T>= T extend 200|201?'success':'fail'
  type IReturnMessage = StatusCode<300>

  type IObj<T>= T extend {name:'jw'}?'ok':'no'
  type IRerson = IObj<{name:'jw',age:30}>
  \`\`\`

- 类型级别:1. 根据结构的角度分析,2. 从类型角度来分析

  never是任何类型的子类型

  ![75047497514](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750474975143.png)

    {}看成结构，object看成复杂类型，而Object就是万物皆对象

    T4是false，其他是true

- ​


\`\`\`typescript
type T7= any extends unknown?true:false
type T8= unknown extend any?true:false
  //两个都是true，不区分彼此



type T9 = any extends 1?true:false
//条件类型的分发机制，1+除了1的部分，返回ture|false
type T10<T> = T extends 1?true:false
type Temp10 = T10<T>
 //返回type Temp10 = never,出现问题
//any是自带分发机制的
  //通过泛型传递的never相关机制,会产生分发机制,返回never

  //联合类型的子类型,是联合类型里的某个类型
  type T11 = 100 extends 100|200 ?true:false

  //通过条件类型来进行类型的区分,条件语句也可以实现约束的效果
  interface Fish{
      name:'鱼'
  }

  interface Water{
      name:'天'
  }

  type GetType<T extends Fish|Bird>=T extends Fish?Water:Sky
  type A1 = GetType<Bird>
  //鱼返回水,鸟返回天空


  type GetType<T extends Fish|Bird>=[T] extends [Fish]?Water:Sky
  //分发导致的问题:什么时候会有分发
  //1.联合类型通过泛型传递,泛型左边会被分发
  //2.而且比较(extends)的时候会产生分发
  //3.类型需要满足裸类型(裸类型就是泛型,就是自己没有和别人搭配)



  //有的场景不需要分发机制,要禁用,有的场景需要分发机制做判断
  type <T>=T&{}
  type UnionAssets<T,K>=Nodistribute<T> extends K?true : false
  type U1 = UnionAssets<1|2,1|2|3>
  type U2 = UnionAssets<1|2|3，1|2>
   //判断类似是否完全一致
  type isRqual<T,K,S,F>=T extends K?K extends T ? S:F:F
  type A2 = isREqual<1|2,1|2,true,false>
                        //分发导致返回bollen
                        把extens前的改成NoDistribute<T>
\`\`\`

  内置类型里面有很多基于条件类型的类型

比如Extract Exclude

\`\`\`typescript
type ExtractBes = Extract<1|2|3|4,1|2>
//实现方法
type Exclude<T,U>=T extends U?never :T
\`\`\`



- 对象类型

  \`\`\`typescript
  interface Person1{
      handsome:string;
  }
  interface Person2{
      high:string;
  }
  type Computr<T>={
      [key in keyof T]:T[key]
  }
  //ketof any
  //返回number|srting|symbol,使用的比较多
  //keyof unknow
  //返回never

  type Person3=Compute<Person1 & Person2>//合并类型
  \`\`\`

  ![75048299189](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750482991891.png)

  递归发现对象内部属性

  ​



####  inference的使用

- 类型推断inference

  infer关键字只能用于条件类型中，用来提取类型的某一部分的类型，放在不同的位置，就可以帮我们取不同位置的类型

  \`\`\`typescript
  function getUser(name:string,age:number){
      return {name:age,address:{}}
  }

  type ReturnType<T>=T extends (...args
  :any[])=>infer R?"R":never
  //用infer推到出返回值类型R

  type T1 = ReturnType<typeof getUser>

  \`\`\`

- ReturnType和Parameters和InstanceType是内置类型

  实现

  ![75063656066](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750636560663.png)

  函数和构造函数的区别是new了一下啊

- 推断数组

  \`\`\`typescript
  type TailToHead<T extends any[]> = T extends [...infer C,infer B]?[B,...C]:any

  type x = TailToHead<["jw",30,40]>
  
  //将元组转化为联合类型
  type ElementOf<T>=T extends Array<number>?"R":any
  type TupleToUnion = ElementOf<string,numer,boolean>
  //转化成了string|munber|bollean
  
  
  //深入推断
  type Promise<T>= T extends Promise<infer V>?V:any
  type PromiseReturnValue = Promise<Promise<number>>
  
  //深入拆包
    type Promise<T>= T extends Promise<infer V>?PromiseV<V>:T
  type PromiseReturnValue = Promise<Promise<number>>
  //infer就是推导条件中的某个部分
  \`\`\`






####  内置类型

exclude extract nonnullable infer returntype paramters instancetype

集合、条件来操作的



- 基于对象操作的映射类型

\`\`\`typescript
type A1 = {name:string}
type A2 = {age:number}

type Compute<T extends object>={
    [K in ketof T]:T[K]
    //映射类型
}
type A1&A2 = Compute<A1 & A2>;
//拿到合并后的类型

//对对象进行修饰操作的内置类型(必选,可选,只读)

interface Company{
    num:number;
    name:string
}
interface Person<T>{
    name:string;
    age:number;
    company:T
}
type withCompany = Partial<Person<Company>>
//Partial让所有类型都变成是可选的,只有第一层是可选的
//实现
type Partical<T>={
    [L in keyof T]?:T[L]
}
type Required<T>={
    [L in keyof T]?:T[L]
}
//必填所有项
//多层处理
type DeepPartial<T>={
    [K in keyof T]?:T[K] extends object ?DeepPartial<T[K]>:T[K]
}
type DeepRequired<T>={
    [K in keyof T]-?:T[K] extends object ?DeepRequired<T[K]>:T[K]
}

type S = Readonly<Person<Company>>
//添加只读


//pick 挑选
//omit 去掉某些属性
//exclude  extract是对集合操作
type PIckPerson = Pick<Person, "name"|"gae">
//实现
type Pick<T,K extends keyof T>{
    [P in K]:T[P]
}

type PickPerson = Omit<Person,"name"|"age">
//实现
type Omit<T,K extends keyof any>=Pick<T,Exclude<keyof T,K>>

//Record 取代object，告诉函数，这一定是一个非空对象
\`\`\`

![75064944782](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750649447828.png)

1. 根据传入的值进行类型推到，name和age会赋予给K，value会赋予给V
2. 拿到callback返回值，，使用泛型进行类型推到它的返回值，R根据返回值进行推导
3. 映射成一个新的record，由K和R组成为结果数组
4. 遍历obj，去运行回调函数





####  兼容性和类型推导

ts兼容性分为两种：

- 子extends父

- 结构来考虑

\`\`\`typescript
  let str:string="abc"
  let obj!:{toString():string}
  obj=str
  //结构来考虑

  //函数兼容性
  let sum1=(a:number,b:number)=>a+b
  let sum2=(a:number)=>a

  type Sum1 = typeof sum1
  type Sum2 = typeof sum2
  type x = Sum2 extends Sum1?true:false
  //对应函数而言,它的兼容性,少的可以赋予给多的,参数少的是子类型
  //返回值要求安全,返回值要求是子类型
  //类的兼容性,也是一样的,比较的是实例

  class A{
      a=1;
  }

  class B{
      a=1
  }

  const b:B=new A{}

  //可以赋值

  //如果类中的属性,有private或者protected则有两个值不能互相赋值

  //差异化基本类型

  class AddType<K>{
      private type!:K
  }

  type withType<T,K>=T AddType<K>

  type BTC=withType<number,"BTC">

  type USDT=withType<number,"B TC">

\`\`\`
  ts主要考虑安全性,安全就可以复制

\`\`\`typescript
//逆变（在函数参数可以标记儿子传父亲）和协变（可以标记父亲返回儿子）
class Parent{
    car(){}
}
class Chile extends Parent{
    house(){}
}
class Gradson extends Child{
    sleep(){}
} 

function fn(callback:(ctr:Child)=>Child){
    callback(new Child())
}
fn((child:Parent):Child=>{
    return new Child()
})//逆变
//内部调用函数的时候，可以传递Child和Grandson,但是在使用属性时，只能认为最多就是Child
//fn 内部调用 callback 时，传入的实际参数是 Child 类型。
//若回调函数声明参数为 Parent（父类型），则它可以安全接受 Child（子类型），因为子类拥有父类的所有属性和方法（Parent 的要求已被满足）。
//函数的返回值，需要返回子表，因为内部代码在访问属性的时候要保证可以访问到
//协变
//当函数 A 赋值给函数 B 时，A 的返回值类型必须是 B 返回值类型的子类型（或相同）。


interface MyArray<T>{
    concat(...args:T[]):T[]
}
//这种写法不进行逆变检测，所有描述对象中的方法时全部采用这种方式

\`\`\`

参数逆变，当函数 A 赋值给函数 B 时，A 的参数类型必须是 B 参数类型的**父类型**（或相同）。

返回值协变，当函数 A 赋值给函数 B 时，A 的返回值类型必须是 B 返回值类型的**子类型**（或相同）。





####  枚举

\`\`\`typescript
enum E1{}
enum E2{}

let e1:E1
let e2:E2
//两个枚举不能互相赋值,不能兼容

//泛型兼容性,如果生成结果一致,类型就兼容
type II<T>={name?:T}
type X1=II<string>extends II<string>?true:false
//生成结果一致,返回true
\`\`\`

![75073018135](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750730181355.png)

\`\`\`typescript
//对象兼容性,多的属性可以赋予给少的
//类型层级兼容性,never->字面量->基础类型->包装类型->any/unknown
//子extends父,满足即可赋值
\`\`\`

类型推到的概念

1. 赋值推断
2. 函数时通过左边来推导右边,基于上下文类型来进行自动的推导
3. 函数返回值标记成void,赋予一个函数的时候,意味不关心







####  类型保护

 基于js＋ts（收窄）

ts很多情况下，需要使用联合类型，默认情况下只能使用公共的方法，识别类型（针对某个类型进行处理）

\`\`\`typescript
function  fn(a:string|number){
    if(typeof a === "string"){
        a;
    }else{
        a;
    }
}
\`\`\`

![75101423122](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751014231222.png)

收窄了

> typeof 基础类型
>
> instanceof 类类型
>
> in 可辨识类型

\`\`\`typescript
interface Bird{
    kind:"鸟";
    fly:string
}
interface Fish{
    kind:"鱼";
    swim:string
}

function getAima(val:Bird|Fish){
    //基于差异化来辨别
    if("fly"in val){
        val
    }else{
        val
    }
    if(val.kind=="鸟"){
        val.fly
    }else{
        val.swim
    }
}
//通过各种判断来缩小范围,生命周期{}

\`\`\`

**函数**嵌套不识别的问题使用?或者!\\if都可以做到类型保护

!一定存在,?取值但不能用于赋值

![75101565822](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751015658229.png)

ts无法识别的时候,一定要用断言

> function isBird(val:Bird|Fish):val is Bird{
>
> //函数的名字和返回值无关
>
> //ts的返回值类型
>
> //true是bird还是false是bird
>
> return  "fly" in val
>
> }





####  自定义类型

unknown和any都是顶级类型,任何类型都能赋予给他

> type unionUnkown = unknow | string | true | false
>
> type sss : unkown = "ssss"可以进行赋值

如果无法确定类型，不要贸然采用any

any不校验，意味着可以任意调用和取值

但unkown是any的安全类型

如果把类型标识为unkown类型，必须先类型保护，再去使用类型

\`\`\`typescript
//自己去实现一些类型
//内置类型
//基于条件类型的 Extract Exclude 集合类型
                //基于映射的类型 Paetial Requried Readonly 修饰
                //结构的 Pick Omit Record 结构处理
                //基于推断的类型 instanceType returnType Paramtes infer 模式类型匹配
//merge类型会合并在一起

\`\`\`

\`\`\`typescript
//对象求交集
type ObjectInter<T extend object,K extends object>=Pick<T,ketof T & keyof K>
type X1 = ObjectInter<T1,T2>

//对象求查
type ObjectOff<T extend object,K extends object>=Omit<T,keyof K>
type X2 = ObjectOff<T1,T2>

//并集就是联合类型

//两个类型合并在一起,如果都有的属性,用T2的? {...T1,...T2} 
type OverWrite<T extends object,K extends object>=ObjectDiff<T,K>&ObjectDiff<K,T>&ObjectInter<K,T>
type X3=OverWrite<T1,T2>


//merge
type MergeType<T,K>={
    [K in keyof T]:K extends keyof U?T[K]|U[K]:T[K]
}
type MergeWrite<T extends object,K extends object>=ObjectDiff<T,K>&ObjectDiff<K,T>&MergeType<K,T>
type X4=Compute<MergeWrite<T1,T2>>
\`\`\`



- 命名空间----隔离同一个文件

  namespace

  import export 外部模块，就是隔离多个不同的文件

  ![75110902009](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751109020095.png)

  可以声明重复名字的变量

  给他们划分了两个对象，导出然后访问（只有导出了才能访问）

  扩展类，函数，枚举扩展的命名空间必须写在这些声明下面

  ![75110961298](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751109612982.png)

  用的不多，基本没什么用

  声明文件，装包，拆包，类型体操

  基础类型（基础类型 string number boolean null unfiened，void）

  底端类型，数组，元组，枚举

  包装类型

  any unknown

  联合类型，交叉类型，断言 as ! ?

  ​

  //函数：（签名） 参数，返回值，可选的？默认值=剩余参数。。。this的问题 函数的重载（类型的重载）

  逆变和协变

  类 ：修饰符 private protexted pulic readonly (private constructor)子类重写方法的问题

  类型兼容 原型方法和实例方法的声明。

  抽象类，类方法，构造函数类型

  ​

  接口：可选？ readonly任意类型，可索引接口 extends implements

  type 和 interface的区别

  ​

  泛型：占位置的对象，使用时传递类型

  条件类型：子extends 父 映射类型（子：子类型，子结构。父：父类型，父结构）

  分发的问题，有好有坏，注意禁用和使用

- extract exclude

  从类型 \`T\` 中**提取**能赋值给类型 \`U\` 的部分（保留交集）extract

  从类型 \`T\` 中**排除**能赋值给类型 \`U\` 的部分（取差集）exclude

- partial readonly

- pick omit record

  pick**Pick<T, K>**
  从类型 \`T\` 中**挑选**指定的属性键 \`K\`（\`K\` 需是 \`T\` 的键的子集）

  **Omit<T, K>**
  从类型 \`T\` 中**剔除**指定的属性键 \`K\`（反向 \`Pick\`）

  **Record<K, T>**
  构造一个键为类型 \`K\`，值为类型 \`T\` 的**新对象类型**

  infer推导的作用

- ​

- ​

  ​

  ​

  兼容性

  内置的类型推导，写了可以直接推导类型，函数提供上下文可以推导类型，返回值也可以推导

  类型保护typeof instanceof in 可辩别类型 is

  一种缩小类型的方式

  typeof看基本类型

  instanceof看某个类或者构造类型的实例

  in检测对象是否有某个属性

  ​

  重映射+自定义类型




#### 命名空间-外部模块

es6模块，需要转化成不同的模块方式 ，commonjs规范（require，exports），amd模块(define),导出amd需要配置file入口(在moduleResolution,的值是Node在tsconfig.json哪里)

支持直接进行转化

1. 如果要使用commonjs需要安装 \`pnpm i --save-dev @type/node \`

   commonjs规范可以转化为amd

2. target指代的是语法

   modele导出的模块规范是什么

   ​

3. ts里面,为了做到commonjs和amd的互转,发明了一种写法

   使用eport = / import = 导入,使用这种写法可以打包关联文件,我们直接用es6就好了,import基本能解决require的问题

   ![75119332479](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751193324791.png)

   一些规范的使用场景

4. 最终编写的代码,需要转为js去使用

   需要给打包的结果添加类型,就是.d.ts

5. 打包后只生产js，没有类型了，可以开启配置中自动生产类型文件

   没有ts类型的的外置包，需要添加ts类型

   或者使用cdn外链的库，也需要写声明文件

   扩展全局组件的时候，也需要写声明文件了

   特殊文件的处理也需要声明文件

   为了我们在写代码的时候不会出错，丢失类型

   声明文件的语法declare用于声明类型（全局声明），全局声明文件就算.d.ts

6. ![75119571289](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751195712890.png)

   声明文件

   ​






####  声明文件

如果有人已经给这个模块写好了类型，我们就可以直接引入人家的操作

如果我们在使用某些包的时候，别人提供了类型文件我们可以直接安装使用







查找声明文件

先看自己是否定义过用自己的,没有就向上找到node_modules 

1. 默认找当前node_MODULES下的同名模块，看是否有此文件夹，有的话找package.json>types
2. 如果没有types默认找这个模块下的index.ts
3. 查找node_modules下的@types是否有同名模块,按照上述方式继续查找

> @type/xxx是声明文件等
>
> 默认可以指定导入模块的声明文件路径 

![75216399009](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752163990098.png)

命名空间全局化

![75216411353](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164113534.png)

三斜杠指令

通常可以在模块扩展上使用

- 直接扩展

![75216428686](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164286864.png)

子模块,扩展了父模块

![75216432426](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164324262.png)

父模块

扩展后让这些模块可以变多功能

![75216447096](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164470961.png)

使用

> 注意文件命名的关系



- 针对特定的接口扩展

  父模块

  ![75216538754](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752165387542.png)

  子模块

  ![75216540257](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752165402574.png)

  这样避免了上面那一种全局污染的可能性,针对特定接口进行扩展 

- 三斜线指令可以通过types来引入其他的声明文件（第三方）

- 自己的用path来引入

- lib可以加载内置类型




####  拆包和装包

> 命名空间namespace就是一个对象

vue3的ref他就是一个包装对象

给一个对象,对他的取值操作和设置操作进行重写了

\`\`\`typescript
interface Proxy<V>{
    get():V;
    set(value:any):void;
}

type Proxify<T> ={
    [K in keyof T]:Proxy<T[K]>
}
const props = {
    nameL"jwt",
    age:30
}
function proxify<T>(obj:T):Proxify<T>{
    const result = () as Proxify<T>;
    for(let key in obj)={
        let value = obj[key]
        result[key]={
        get(){
        return value
    },
        set(val){
        value=val
    }
    }
    }
    return result
}
const proxy = proxify(props)

proxy.name.get()
proxy.name.set("abc")

export {}
\`\`\`

使用泛型进行装包



拆包

\`\`\`typescript
function unProxifiy<T>(proxy:Proxif<T>):T{
    let result=()as T
    for(let Key in proxy){
        result[key]=proxy[key].get();
    }
    return result
}
\`\`\`

进行拆包,返回原始的那个东西

> 装包也能用于axios的封装和处理

\`\`\`typescript
export type ResponseData<T = any>={
    code:number
    data?:T
    message?:string
}

class HttpRequest{
    public timeout=3000
    public loadingMaping:Record<string,string>={}
    public baseURL= import.meta.url==="development"?"https://localhost:3000:"/"
    
    public setInterceptor(instance:AxiosRequestConfig){
        return {..option,baseURL:this.baseURL,timeout:this.tomeout
    }
    
    public setInterceptor(instance:AxiosInstance){
        instance.interceptor.requset.use(
        (config)=>{
            return config
        },
        (err)=>{
            return Promise.reject()
        }
        )
    }
    public request(option:AxiosRequestConfig){
        const instance=axios.create()
        options=this.mergeConfig(options)
        this.setInterceptor(instance)
        return instance(options)
    }
    public get<T>(url:string,data:any):Promise<ResponseData<T>>{
    this.request({
        url,
        method:"get"
        data
    }).then(res=>{
        return Promise.resolve(res.data)
    }
    }
}
const http = new HttpRequest
http.get<{token:string}>("/login",{}).then((res)=>{
    res.data?.token
})
\`\`\`





####  类型体操

> 可以通过索引来访问一个对象\\数组对应的值

\`\`\`typescript
type LengthOfTuple<T extends any[]>=T['length']
type A = LengthOfTuple<["B","F","E"]>//3
\`\`\`

> 元组自带索引和长度,可以用索引和长度

\`\`\`typescript
type FirstItem<T extends any[]>=T[0]
type A = FirstItem<["B","F","E"]>//B
\`\`\`

![75221877155](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752218771558.png)

拿到最后一个

![75221893786](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752218937862.png)

去除第一个

![75221974469](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752219744698.png)

链表反转

\`\`\`typescript
//拍平
type Flat<T extends any[]>=T extends [infer L,...infer R]?
    //每次判断一下是不是数组，是就去递归它
    [: (L extends any[]?Flat<L>:[L])]:T
type A = Flat<[1,2,3]>
\`\`\`

 ![75222095927](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752220959272.png)

判断是否满足某个条件，构建数组

\`\`\`typescript
type Filter<T extend any[],K,F extends any[]=[]>=T extends [infer L,...infer R]?Filter<R,K,L&{} extends K?[...F,L]:F>:F

type A=Filter<[1,2,3,true],nmuber>//[1,2,3]
\`\`\`
找到相同的值,不仅要value一样,key也要

![75225143215](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752251432157.png)

![75225118298](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752251182985.png)

类型体操多在源码里面出现，了解源码再去考虑类型，不然很难看懂



####  模板字符串

我们可以基于字符串类型，来创建新的类型，模板字符串

\`\`\`typescript
type name = 'js'
type handsomeName = \`handsome\${name}\`

\`\`\`

当我们传入应该联合类型的时候,也有分发机制

\`\`\`typescript
type MarginOrPading='padding'|'margin'
type Dirction='felt'|'right'|'top'
type Compose=\`\${MarginOrpading}-\${Dirction}\`
\`\`\`

可以基于这种方式编写一些特定类型,scss变量

//element-plus(red-100 red-200 red-300)

![75228820877](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752288208778.png)

可以传入字面量类型,也可以传入基础类型

\`\`\`typescript
//可以对这些进行一些特殊的操作
type A1= Capitalize<I1>//开头大写
type A2= Uncapitalize<A2>//开头小写
type A3= Unprecase<A1>//全部大写
type A4= LowerCase<A3>//全部小写

\`\`\`

![75228938221](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752289382216.png)

![75229115424](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752291154244.png)

infer的使用，可以提取第一个字符，\`\${infer L}\`

如果有两个infer,最后面的就是所有的

如果有符号分隔,那就会分左右,没有默认左边的都是一个字符串







####  装饰器

平时用不到，是基于类的，是一个实验性语法，mbx，nestjs主要是靠装饰器实现的

后续的具体实现可能会发生变化，但目前是比较稳定的一种

本质就是应该函数，只能在类和类的成员上使用

ts装饰器：类装饰器，（静态丰富，原型方法）方法装饰器，（静态属性，静态方法装饰器）属性装饰器，（get，set）访问符号装饰器，（原型函数，构造函数）参数装饰器

> 要在tsconfig.json打开这个功能

- 类装饰器

\`\`\`typescript
function ClassDecorator(target:any){
    target.type="动物"
    target.getType=function(){
        return this.type;
    }
    target.protype.eat=function(){
        console.log('eat')
    }
}


@其他装饰器,也可以给其他类加东西
@ClassDecorator
class Animal{}

console.log((Animal as any).type)

\`\`\`

- 方法装饰器

\`\`\`typescript
function Enum(isEnm:boolean){
    return function(target:any,key:string,descriptot:PropertyDescriptor){
        //装饰器函数
        //类的原型和类的名字
        //属性访问器
        descriptor.enumerable=isEnm
        let original=descriptor.value
        descriptor.value=function(...args:any){
            //写一些函数逻辑
            original.call(this,...args)
            //切片和声明相关的东西
        }
    }
}

class Animal{
    @Enum(true)
    //装饰器写在这里
    eat(){}
}
const animal = new Animal()
//对类和方法进行装饰是有意义的,对其他就没有什么意义了
\`\`\`

- 属性装饰器

  如果编译成esNext会编译成

  ![75233520201](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752335202016.png)

  使用ES2015编译成,默认此值就在函数上

  ![75233523060](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752335230604.png)

  在new时候才会赋值,并不会在最开始即在函数上

- 访问符装饰器

  \`\`\`typescript
  class Animal {
      private _value: string = '';
      
      @ToUpperCase('PREFIX_') // 添加前缀参数
      get value() {
          return this._value;
      }
      
      set value(newVal: string) { // 注意这里应该和getter同名
          this._value = newVal;
      }
  }

  function ToUpperCase(prefix: string) {
      return function(target: any, key: string, descriptor: PropertyDescriptor) {
          // 保存原始的setter
          const originalSet = descriptor.set;
          
          // 修改setter
          if (originalSet) {
              descriptor.set = function(newVal: string) {
                  // 调用原始setter，但先处理值
                  originalSet.call(this, prefix + newVal.toUpperCase());
              };
          }
      };
  }

  // 使用示例
  const animal = new Animal();
  animal.value = 'test'; // 实际会存储为 "PREFIX_TEST"
  console.log(animal.value); // 输出 "PREFIX_TEST"
  \`\`\`

- 参数装饰器

  ![75239803739](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398037397.png)

  ![75239805226](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398052264.png)

  只能拿到类,key和索引

  构造函数种的参数装饰器指代的是类本身,key是undefined

- 装饰器的执行顺序

   ![75239888960](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398889604.png)

  ![75239891991](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398919918.png)

  生成顺序

  ![75239894407](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398944077.png)

  对于实例来说，先走参数，再走对应的方法（构造函数），再到静态属性，最后是自己的类

  装饰器的使用主要是切片，在类的过程里面进行添加和修改删除等操作

 

**反射元数据**

反射就是修改程序执行的时候的行为

元数据：描述数据的数据

修改执行代码的行为，对数据进行描述

 ![75247141927](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752471419272.png)

安装这个包，然后使用这个函数进行相关的描述

![75247163861](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752471638615.png)

有很多相关的扩展和处理

> 命令式和声明式的

使用声明式的装饰器来写

![75247211775](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752472117751.png)

会更加清晰一点

使用了装饰器



- 控制反转,失去了控制权

- 控制正转，整个控制的过程都是我自己完成的

- 依赖注入

  通过依赖注入让代码变得灵活，而不是四班，他是oci的具体实现。

\`\`\`typescript
  // 首先定义必要的装饰器和容器
  const container = new Map();

  // Provide 装饰器 - 用于标记可被注入的类
  function Provide(identifier?: string): ClassDecorator {
    return (target: any) => {
      const id = identifier || target.name;
      container.set(id, target);
    };
  }

  // Inject 装饰器 - 用于标记需要注入的属性
  function Inject(identifier: string): PropertyDecorator {
    return (target: any, propertyKey: string | symbol) => {
      const dependency = container.get(identifier);
      if (dependency) {
        target[propertyKey] = new dependency();
      }
    };
  }
  //装饰器实现依赖注入 



  // 定义接口
  interface Monitor {
    display(): void;
  }

  interface Host {
    start(): void;
  }

  // 实现类
  @Provide("Monitor")
  class Monitor23inch implements Monitor {
    display() {
      console.log("23英寸显示器已开启");
    }
  }

  @Provide("Host")
  class AppleHost implements Host {
    start() {
      console.log("苹果主机启动");
    }
  }

  // 计算机类使用依赖注入
  class Computer {
    @Inject("Monitor")
    public monitor: Monitor;

    @Inject("Host")
    public host: Host;
    
    bootstrap() {
      this.monitor.display();
      this.host.start();
    }
  }

  // 使用示例
  const myComputer = new Computer();
  myComputer.bootstrap();

  1. **解耦**：类不直接依赖具体实现，而是依赖抽象
  2. **可测试性**：可以轻松替换依赖进行测试
  3. **可维护性**：修改实现时不需要修改使用方代码
  4. **可扩展性**：方便添加新的实现

  这个容器可以描述成

  ![75273835513](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752738355133.png)

  可以绑定实例,自动解析依赖

  可以用Map表替代
\`\`\`


####  tsconfig.json

\`\`\`json
{
    'target':"es5",//根据最后的打包文件环境来设置,停入对应的声明文件
    "lib":[],//打包的时候引入的类型声明信息
    "jsx":"react",//jsx环境的配置,preserve是jsx不转jsx,react-jsx是新版默认值
    "experimentaDecorators":true,//启用装饰器语法
    "enitDecoratorMetadata":true,//发射元数据信息,默认使用装饰器都i会开启这个值
    "jsxFactory":"h",//为了preact提供
    "jsFragmentFatory":"Fragment",//针对Fragement实现不同的功能
    "jsxImportSource":"",//更改导入路径
    "moduleDetection":"force"//当前文件如果有import export就是模块,如果没有就是全局,强制实现
}
\`\`\`





####  模块相关配置

ts声明文件

“module”可以选择CommonJS或者es6、es2020、esnext、nodenext、AMD、UMD、systemjs（微前端）

 ![75332151375](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1753321513751.png)

> "moduleResolution":"Classic"经典的解决方法,这里也可以指定node版本,导入模块的时候,有package.json(main,module,exports)
>
> 使用更高级的node来支持更多新语法
>
> 
>
> 

 



















































`,c8=Object.freeze(Object.defineProperty({__proto__:null,default:a8},Symbol.toStringTag,{value:"Module"})),d8=`
# 大集训-7月22日
历时许久，超过了四个小时，终于在不触碰网的情况下把全体成员运过去。

开始和结束总是困难的，其实坚持下去的过程也是。起初困顿于不断的试错，慢慢寻求方法，从认为不可行到可行，一切都值得尝试。过程在于坚持：没有各位的鼓励和陪伴，从各自为营的休息到互相捶背捏肩；一次次的跌倒和咬牙坚持中，大家坚定的眼神传递力量；默契到无需言语便能及时调整策略。相信坚持会有美好发生——疲倦时未放弃，坚守"不丢下一个人"的守则。我们做到了，游戏结束亦是团队新生的开始。

我一直相信大家都是值得托付的伙伴，谢谢大家！  
小海这个名字源自歌曲**《小さな海》**（不是刘海条形码啊喂！）

正如歌词所言：

> 散々(さんざん)泣いて泣き腫らして枯れた海が  
> *那片因无数次痛哭流涕而干涸的大海*  
> また今日も明日(あす)を懲(こ)りずに探してる  
> *今天的我仍在日复一日地苦苦找寻着它*  
> 
> 簡単なことばっかりじゃつまんないかも  
> *把简单的事情遍遍重复也许枯燥无趣*  
> 今よりも少しだけ明(あか)るくなれたら  
> *可它们若能让我比现在更开朗一点*  
> いいな  
> *我便别无所求*  
> 
> ねぇ まだ今日は終わっちゃいない  
> *呐 今天还没有到此为止啊*  
> 針(はり)は指せど僕の眠気(ねむけ)は来ない  
> *时针转动不停 我却睡意全无*  
> いっそ 朝が来なければ  
> *"要是黎明永不到来就好了..."*  
> 
> **——《小さな海》**


# 出发-7月24日
大集训的最后一天

明天大家将各自奔赴四个营点，下次再见又是何时？没关系，相比离别，我更珍视我们共同经历的时光。生活广阔，这些回忆如同宝石永远镶嵌在生命里——或许在未来的某刻，你会突然想起这群伙伴：  
我们一起走过2月的面试、4月的一培、5月的营长面培、6月的二培，直至7月的大集训。那些共创的瞬间，那些寻找最好自己的时刻，这里馈赠了我最美好的夏日，就像十年前那样。  
你们的到来，让这个夏天如此不同，让我在平凡生活中看见世界的斑斓色彩。

为什么来到这里？  
除了孩子们，更是为我自己。在这个纷繁年代，我想回到十年前的夏天：  
找回当初的自己，重温心连心的珍贵。我们自五湖四海汇集，终将一起出发（也想起培训中未能同行的伙伴们，祝福你们一切顺利！）

> 感谢遇到的每一个人，我永远记得你们  
> 特别感谢所有默默的关怀与照顾，不论直接或含蓄，我都深深懂得 [流泪]

---

夏日日记正式启程  
记录此后16天的每一刻！

---

献上歌词：《蝴蝶》

> 那一只蝴蝶 拼了命破茧  
> 却没有漂亮的鳞片  
> 它依然 飞过了田野  
> 
> 多少次折断 碎成了多少片  
> 总有人爱你不圆满  
> 我看见你 有多少灿烂  
> 
> **走吧** 就算我们无法让大雨停下  
> 还有我 陪你在大雨里放肆奔跑啊  
> 地球上 天空下 我们做一对傻瓜  
> 你我生来时就注定 天真而伟大  
> 
> **你啊** 就算永远无法被世界回答  
> 没关系 还有名为自己的魔法  
> 你啊 就算下一秒全世界都崩塌  
> 还有我在你身边说我爱你啊  
> 
> 做尘埃 做晚霞 我们总会再见的吧  
> 下次见面时 我们会 手捧鲜花  
> 
> 你说你来到这个世界的那天  
> 神给了每个人快乐入场券  
> 它想让你吹吹风去看看蓝天  
> 也温柔的接住破碎的雨点  



# 招生-7月25日
### 盛大的奇迹：走访日纪实

从清晨6点起床开始：  
 早出买菜 →  准备午餐 →  逐户走访 →  深夜"客服时刻"筛选  
**各位辛苦了！** 这是所有人共同创造的盛大奇迹！

### 感谢与感动
- 小伙伴们：撑起活动的脊梁  
- 小朋友们：清晨8点就敲响会议室的活力  
- 准高中生们：结伴而来的青春身影  
- 家长们：托起梦想的坚实后盾  

走访中遇见的星光：  
带路的活泼小向导  
两年前参与的孩子（甚至找到了当年的照片！）  
启明星支教队时期的老学员们  
> 好奇着：两年前的记忆在他们心中留下了怎样的光？  
> 期待着：未来重逢时交换成长的故事  

### 天空的馈赠
վ'ᴗ' ի 这里的蓝天蓝得纯粹——  
是广州从未见过的通透画布  
当夜幕低垂，热闹沉淀成星光  
我们仍为明天的开营仪式筹备：  
**相逢意气为君饮，愿一切顺利！**

---

### 《遥远小镇的我》· 夏日记事

> 叮，早上被闹钟吵醒  
> 看，天空上布满乌云  
> 听，蝉鸣不断的声音  
> 想，出去看看 风景  
> 
> 五彩斑斓，是夏日气息  
> 微风吹过，春天留下的痕迹  
> 张开双手，去触及天际  
> 青春回忆，倒映着夏日的你  
> 
> 啦 啦 啦  
> 不知不觉看遍小镇的风景  
> 啦 啦 啦  
> 不知不觉走遍青春的轨迹  
> 
> 啦 啦 啦  
> 为何乌云会带来电闪雷鸣  
> 啦 啦 啦  
> 乌云  
> 
> 哗啦哗啦哗啦哗啦在下雨  
> 哗啦哗啦哗啦落在小镇里  
> 哗啦哗啦哗啦是谁在哭泣  
> 彩虹下的你，在那夏日里  
> 
> 哗啦哗啦哗啦时间在过去  
> 彩虹下映出雨后的涟漪  
> 夕阳记录着水洼上的我和你  
> 全部写进，夏天的日记  

![68df146a14c68aa96f28373b12f071d1.jpg](https://s2.loli.net/2025/08/19/rwlqodXRVPIsMyx.jpg)

# 开营首日-7月26日

今天正式开始了，像落叶滋润大地般自然。  
重逢启明星时期的孩子们：  
- **灰原**热情帮画黑板报，活跃得很  
  *（厨房随时等你大展厨艺[旺柴]）*  
- **小明**的漫画惊艳全场，赠我的画作  
  *（这份礼物我会永远珍藏！）*  
还有好多好多熟悉的面孔——谢谢你们让这个夏日闪闪发光！

连续数日早6点奋战至深夜00:30，今夜宿舍楼演出特别节目——  
中央电灯彻夜长明！虫群盛宴引发女生宿舍惊叫连连  
[憨笑][憨笑] 这魔性笑声在走廊回荡到天明   
前几天摸黑备课完美收工  
今夜满电供应反而怅然若失  
*「前几天晚上都没有灯，今天就那么浪费电吗...」*

---

## 班歌《我和你》

> 晴天，有点孤单。  
> 玩具，丢在旁边。  
> 电视，里没有新鲜。  
> 球鞋，跑不过时间。  
> 
> 我要，更大的世界。  
> 装满，不同的探险。  
> 能让，你陪在身边，每秒每天。  
> 
> **我和你，飞到蓝蓝的天边。**  
> **我和你，种下满满的花园。**  
> **我和你，分享暖暖的光线。**  
> 再靠近一点。(再靠近一点。)  
> 
> **我和你，就像蓝蓝的天边。**  
> **我和你，就像满满的花园。**  
> **我和你，就像暖暖的光线，把地球照亮。**  
> (把地球照亮。)  
> 
> 再靠近一点，再靠近一点。  
> 再靠近一点，再靠近一点。  




![81d7677f21bf4e5d62001d707a770963.jpg](https://s2.loli.net/2025/08/19/5I3ezAvGJ9cK4SV.jpg)



# 日常-7月27日
多云，不易观星，易探险，适合摸鱼，易敲键盘

---

> 就像是那 灰色天空中的小雨  
> 下下停停 不动声色淋湿土地  
> 尽管总是阴晴不定  
> 偶尔也会闪出星星  
> 
> **——《形容》**

---
![365b40dbfe82ecd4addf0d8bc1635978.jpg](https://s2.loli.net/2025/08/19/xTNKQ1Vp7SwrIv4.jpg)



# 日常-7月28日

** 这世界那么多人，多幸运有个我们~ ** 
今天看你们日记的时候还是挺感动的，其实没有写什么回复，因为时间太赶了，飞鼠刚发下来没多久就催收了，灰原写的太好了让我都不知道怎么回复，今天没去上什么课，都在助教，没想到就收到了你们送的袋子，太震惊了这个，感谢你们，趁机大家一起合影但是照片都在小熊的相机里，只能无奈加一个我了  

今天翻看了我的信封，竟然有两封信哎，一一回复，也算是今天里的小惊喜了  

今天依然探险后院，害怕有蛇。每天都有鹰嘴桃吃，[流泪]送了太多桃子了，秘书处已经不给我们收了，以后都要拒收了，谢谢你们！  

明天还要上两节，具体是什么？保持期待吧~反正我准备好了！  

---

> 你会翻过山 看到万丈晴天  
> 飞鸟正越过海面  
> 你会迎着风 放着胆唱着歌  
> 把风景都看遍  
> 
> 你会翻过山看到万里平原  
> 天光正穿过云间  
> 你会握着拳赤着脚流着汗  
> 攀过千难万险  
> 
> **——《亲爱的你啊》**

---
![3534c79c22d9b7c02104671a7b007373.jpg](https://s2.loli.net/2025/08/19/eZKD5NuqR7gvVQr.jpg)





# 错误-7月29日


知晓天空之蓝的人~  
没拍什么照片，基本都是合照和风景照，合照就不发了，应该没人想看我吧？还是一起看看蓝天吧！  

今天也犯了一些错误，对不起飞鼠姐姐了[失望]然后就是早上那节课并没有讲好，昨天晚上都在准备小班的课，忽略了大班，我以为可以轻松搞定的[失望]  

然后就是国王和天使环节，请我的天使看到这个朋友圈就拍我一下，还有请天使不要用夹菜的方式提醒我是天使了，今天有一群人互相夹菜，怎么可以分辨出来！  

虽然上一轮没有给国王做很多事情[失望]但也有想着去做什么的  

---

> 分享歌词：  
> 将祈愿着相会的诗，  
> 连接至时间的彼方，  
> 在那描绘的梦的世界中，  
> 静待它的到来，  
> 所以 请一直 ，  
> 一直相信当下吧，  
> 这遥不可及的夏日彼方啊，  
> 从描绘的那双手中 若是能回到被夺走的时光，  
> 无论多么寂寞 唯有听见连接的声音，  
> 一同度过这段时光  
> 
> **——《夏日彼方》**  

小提一下这首歌来源一个很喜欢的游戏，在偶然中相信一切是最好的安排，所以请一直相信当下吧！
![b145acd0b07888d763e1535e1208b718.jpg](https://s2.loli.net/2025/08/19/GP4Lma8gVe5ItlE.jpg)



#  停课-7月30日

雨天🌧️
没有去上课
最伤心

> 听歌~
> 开始谁‮不也‬明白
> 风风雨‮宁雨‬愿相信
> 明‮睛天‬天
> 爱‮好不‬的我们还能
> 迎着阳‮一光‬步一步来
> 毕竟路‮有上‬你作伴

> ——《明天晴天》

\`\`\`

\`\`\`

![87101cc19e94a319abda37d7fa9736c2.jpg](https://s2.loli.net/2025/09/12/fg8BlvHLINhyMb6.jpg)







#  家访日- 8月1日

去家访，终于到我去家访了！
​
​路上遇到灰原她们，带了一下路，大家都好热情🥺送了好多桃子，我还是觉得太好吃了，一点都不腻
​
​然后再开始我们的聚餐！偶遇音游高手，跪了卧槽，遇到大佬了▄█▀█●
​
​然后包饺子，搞游戏，狼人杀又玩了一次自己的逆天打法，村民跳预言家乱杀。。。。。
​
​晚上的星空夜谈实在是太久了，坚持不住了。。结果回到宿舍还是水灯风扇全部用不了🥺跳了。。。
​
​生活还是很长，就算时间过半，我一定永远记得你们

> 总‮经要‬历些伤疤，
> 才能算真‮长正‬大，
> 因为有‮憾缺‬存在完‮才美‬称无瑕，
> 有‮要想‬去的‮方地‬最后一定‮到会‬达，
> 哪怕途中总有人‮拽想‬你下悬崖，
> 途中难免‮风起‬沙，
> “坚持‮自做‬己就好啦”，
> 你早已写‮回下‬答，
> 笑‮把着‬眼眨了眨，
> 天‮行马‬空的想法，
> 编织无‮新数‬奇童话，
> 梦里星‮不星‬说话，
> 只等‮摘你‬下它，
> 那就去‮星追‬星吧，
> 坎坷与梦想‮爱相‬相杀，
> 数过多少日落才开‮一出‬枝花。
> ​
> ——《去追星星吧》

![75765846763](C:\\Users\\zxh\\Desktop\\前端\\博客-新\\xh-blog\\src\\blog\\上坪支教日记.assets\\1757658467639.png)





#  普通一天

正常的一天？
​迎来了陪伴者的离别，接下来就剩我们18人了🥺谢谢咚咚，笙笙，迷糊，咩咩
​
​少年的日记，还挺有中二的感觉，那是我过去的青春唉，我靠，真好
​
​今天的雨实在是太大了，平静的一天发现晚上一堆没做的，忙到现在才能回到宿舍里，其他事情可能要放一下了，现在这里有点急
​
离别的饭啊~我放宿舍的零食竟然被发现了我靠，虽然我到现在都没有吃~


​蚊子太多了，今天还爽玩音游了，啪哩打音游也好强。。。飞鼠竟然把课程共享文档ppt删掉了我靠我靠，然后被七七骂死了哈哈哈哈。。。今天晚上的菜挺好吃的，可惜今天拉了三次肚子，这段时间吃素太多已经不习惯大鱼大肉了吗。。。今天若芯她们还送了一些东西给我，有亿点点感动
​
​时间紧迫，多线程干事ing
​
END，今天没有歌词

![e8226dbc6fd2b40a8f0282cc89de66c6.jpg](https://s2.loli.net/2025/09/12/zDwXZkjgQKTvW2B.jpg)







#  我在做饭-8月3日

做饭ing，好香。。。
赶进度ing，今天做出来！
​0元购的耳机和吹风筒到了，好耶
​孩子们还是很有活力啊，真不戳！
​好像也离结束有点点近了
太快了。。

![e79fc47d18852abe94529ca38e20f5f8.jpg](https://s2.loli.net/2025/09/12/SAhTRqmlcB6x5af.jpg)
![c22d37ef2f9a4701aaff6d75057110be.jpg](https://s2.loli.net/2025/09/12/l2FdLJIuzEH1SX7.jpg)





#  离别的蛋糕 - 8月4日

时间依旧在走，半个月的支教生活来到尾声
​
感谢音游大佬十三帮我打满了支线章节。。太牛了。还有当时走访遇到的家长，因为有事要提前回中山，发来的信息。还有靖宇送来的画，孤独摇滚[流泪]还有许许多多的你们。。。。



> 但是啊
> 站在原‮看地‬着天空也被‮们我‬误认成‮一了‬种错
> 又有多‮哥少‬白尼
> 因此选‮放择‬弃了地动说
> 可是
> 可是
> 我怎么‮甘能‬心认输呢
> 闭上眼‮等睛‬待天睛
> 管他‮瓣花‬落没落
>
> ​——《如果花期只有60秒》

![29b38ae30e34d1a6de88f19ce3737cf5.jpg](https://s2.loli.net/2025/09/12/coqM3md6N9E4BOC.jpg)
![0c58fe6d94af2e613a16a31719256d25.jpg](https://s2.loli.net/2025/09/12/TRuM432yaQs1brX.jpg)



#  离开-8月7日

一个故事的结‮是尾‬另一个故事的序章
一个‮程旅‬的结‮是束‬另一个旅程的起航
我还有很多‮要想‬做的事
我还‮想有‬写的歌
我还‮想有‬画的画
​未来再见


![image.png](https://s2.loli.net/2025/09/12/Zs8SXDRWwfoubqF.png)





#  离开的回望

关于这段时光，最开始的相遇，还是要回到十年前，对于我来说，现在刚好是是十年之后
​
​2015年的夏天，小镇来了一群年轻人，在离我家不到100米的地方开始举办了那年启明星支教队的灯塔营点，那年因为年龄问题，并没有加入
​
​2016年的夏天，他们又来了，这次的我已经符合报名的年龄，可以去参与一下，开营那天有点开心，不小心摔一跤，伤疤现在还可以看到，这段时间，认识了青音，老潘 ，恒星，西西……2016的灯塔星空
​
​2017年的夏天，启明星支教队再一次来到小镇，我们再次在夏天相遇，这一年没有看到16年的你们，但也给我带来了新的回忆……
​大明，胡子，静怡……
​
​2022年，再次听到支教队在小镇的消息，这时候我已经走到了我的高中
​
​2025年春天，此时的启明星支教队已经改名为星河圆梦，我一直关注的招募通知终于发了出来，接下来的日子，从面试到一培再到面培再到二培，最后的大集训，我遇到了不一样的人们，我们一起奇思妙想，一起试课备课，一起准备夏令营的形形色色的事情，我们遇到了很多困难，也经历了很多
​
​2025年的夏天，我们来到了上坪这个地方，我们四个营点里，上坪环境可能是最难的，乡镇中学的小世界、每天刷新的小动物、阴雨绵绵的夏天、没风扇没灯的晚上、偶尔没有冷水热水的午后、晚上满天的蚊子……但是我们上坪营点的风气却是非常好，大家都在努力着，困难很多也很积极，偶尔很累也在互相安慰。

时间很长却也很短，感谢lita，七七，小敏，减减，jenny，啪哩，飞鼠，vivi，十三，鸡翅，小熊，小溪，小橘，郭行，点点，派派，TT，笙笙……你们的陪伴，还有上坪的小朋友大朋友们，从三年级到准高一，我遇见了许许多多不一样的你们
​
​最后离别的时候，其实也是有点难过的，有时候确实不想面对离别，分开后下次再见也不知道是在何时，无论在何时何地，也别忘记这段时光，即使倒计时结束我们也各自走向不一样的明天，即使不知不觉走向最后一次见面，即使……

剩下的暑假，比赛做完，把活动的任务做完，把我们这段时光的视频剪出来，写一首歌
​
​上坪营点的各位，我爱你们



> 夏虫 summer insects
>
> 无形的 火 扭曲着世‮轮界‬廓
> 高温线 耗尽 夏日‮盘的‬中 最后一滴颜色
> 面对陌生‮茧的‬壳 和渺小的自我
> 听‮广到‬阔晨星银河 跑‮我进‬的耳朵
> 若痕迹都‮曾不‬亲眼见过
> 若连平凡都‮得显‬像个传说
> 还留什‮时么‬间惋惜惶惑
> 我们‮定约‬在光源处聚合
> 固执的 夏虫汲‮着取‬美梦解渴
> 在湿漉的夜 结群飞行 就‮甩能‬开脆弱
> 鞘‮吹翅‬折 竟‮描然‬绘出微小漩涡
> 问我 数百‮伏天‬蛰 步谁‮覆的‬辙
> 下一次 何时  醒呢
>
> 满载‮考思‬的脑袋 偏爱 沉默
> 盛不住心‮的事‬我 倾囊而出 不怕干涸
> 命运‮天的‬平 将两‮都手‬摊开了
> 要‮温在‬室和寒‮中风‬取舍 我忘‮了记‬退缩
> 若痕迹都不曾‮眼亲‬见过
> 若连‮凡平‬都显得‮个像‬传说
> 身旁流‮探萤‬起万家灯火
> 再‮澜波‬坎坷 也可‮依以‬托
> 好奇‮夏的‬虫向‮火焰‬中心奔波
> 不论‮起是‬点 还是终点 就算一‮所无‬获
> 开弓无悔 为把星点可‮性能‬捕捉
> 是我 在风‮出眼‬没 将未‮触知‬摸
>
> 哪‮只怕‬是 一瞥见‮底谜‬就坠落
> 还有无数个 想‮求探‬的巧合
> 哪怕只是 领悟到答‮的案‬晦涩
> 也全‮证力‬明 所经过都值得
>
> 问我
> 是我
>
> 自由的 夏虫编‮着织‬美梦解渴
> 单‮的薄‬外壳 展开花纹 尽将内心诉说
> 鞘‮振翅‬涌 卷起击碎定论‮漩的‬涡
> 等待 数百天伏蛰 这一‮冲瞬‬破
> 最高亢的歌 予我
> 肆 意 鸣 唱
> 直到 嘶哑 那刻

![e3a4d1d42dc53b0130d6f3251a8332ee.jpg](https://s2.loli.net/2025/09/12/OhqIXVMSuszWRjf.jpg)

![f69b7f19c3614f77f87ca8785e87b141.jpg](https://s2.loli.net/2025/09/12/UoeQ6BzdPIHsmkv.jpg)

end!`,f8=Object.freeze(Object.defineProperty({__proto__:null,default:d8},Symbol.toStringTag,{value:"Module"})),h8=`# 实习项目—仿百度云盘

**项目名称：bd**云盘  

**介绍:**基于vite的网页端云盘，可以上传文件到云端服务器（开发阶段可以选择上传到虚拟机内），可以生成链接分享文件，也有页面管理或者预览文件

**设计图**

![74045808485](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740921468113.png)

![74045824678](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458246788.png)

![74045826739](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458267398.png)

![74045827746](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458277468.png)



**技术栈：**vue3、js、Ts、axios、cookies、element-plus库、vue-router......等

**要求：**

1. 用户注册，qq快捷登录，绑定邮箱
2. 文件分片上传、断点续传、秒传、上传进度显示、文件预览、文件重命名、文件移动、文件分享下载删除
3. 回收站和文件分享列表
4. 后台管理，超级管理员
5. 分享链接和分享码

**学习：**先去学习一些算法，完成页面布局的构建，准备学习一些难点





目前构建的页面图

![74075097903](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740750979031.png)







































`,p8=Object.freeze(Object.defineProperty({__proto__:null,default:h8},Symbol.toStringTag,{value:"Module"})),g8=`#  实现前端脚手架

1. 创建一个package.json

   ![74588271784](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745882717840.png)

2. 创建一个入口文件bin/entry,在package.json里面有写这个路径

   ![74588277703](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745882777031.png)

   要在这个文件里引入index.js这个js文件,entry作为了入口文件进行配置

   #! /user/bin/env node 指定了这个脚本的解释程序,#!则是发布npm包的时候使用

3. 运行:

   先sun wanghaoyi$ cnpm link到全局,sun wanghaoyi\\$ sun 运行

4. comander@9.0.0

   安装cnpm install comander@9.0.0

   一个专门处理控制台命令的东西

   在index.js配置

   ![74588353511](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745883535113.png)

   sun -v返回1.0.0

5. chalk@4.0.0

   安装cnpm install chalk@4.0.0

   控制塔命令美化效果

   在index.js写,并且使用sun来输出

   > console.log(\`\${chalk.green.underline.bold("forgive")}me\`)
   >
   > 加粗下划线绿色

6. inquirer@8.2.1

   一个命令行输入效果

   在index.js文件写

   \`\`\`javascript
   const Inquirer = require("inquirer")

   new Inquirer.prompt([{
       name:"vue",
       type:"checkbox",
       message:"xxxxxxxxxxxxxxxx",
       choices:{{
                name:"xx",
                checked:"true",
               },
       {
       name:"ts"
   },
   },
   },
                       ]).then((data)=>{
       console.log(data);
   })
   \`\`\`

   ![74588427425](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745884274257.png)

   脚手架做法,放github和放本地,放本地体积比较大

![74588582788](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745885827888.png)

根据用户输入的,去github上下载相关的库

基本上就是一个脚手架的基本功能了

剩下的就是一些代理服务器的功能,还要打包构建等

`,b8=Object.freeze(Object.defineProperty({__proto__:null,default:g8},Symbol.toStringTag,{value:"Module"})),m8=`#  less的编译

less的复代码太多了，包含颜色值，容器大小等，那我们是否可以使用js变量声明的方式解决这种问题，原本的css不支持，所以要使用less

less是一款css预处理语言，支持变量，混合，函数，嵌套，循环等特点，在css的基础上加了很多大小，比css丰满，为css增加了一些特性，将css作为目标生成文件，然后开发者就只需要使用这种语言进行编码工作

注意：

- 浏览器不认识less，写的less代码，需要编程成css
- 项目中使用预处理语言



**编译方法**

- 安装node
- 安装less     \`npm i -g less\`
- 编译less  

1. 方法1

less

\`\`\`less
@width:980px;
@height:width+100px;
@color:skyblue;
//定义变量v  
#header{
    width:@width;
    height:@height;
    background-color:@color;
}
\`\`\`

使用命令\`lessc style.less style.css\` 

css

\`\`\`css
#header{
    width:980px;
    height:1080px;
    background-color:skyblue;
}
\`\`\`

2. 方法2

   页面直接引入less.js

   通知vscode open with live server

   ![74908380253](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083802535.png)

3. 方法3

   ![74908384187](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083841872.png)

   开发的时候使用这些插件

   ![74908386336](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083863369.png)

   写完less代码后,ctrl+s自动将less转化为css

4. 方法4

   在项目中,使用工程化的打包工具

   webpack



####  变量

less允许使用@符号定义变量，变量分配使用冒号：完成，less的变量声明格式为@变量名：变量值

![74908691812](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749086918123.png)

选择器的名字也可以使用变量，url地址也可以使用变量，变量可以先使用在声明

 

####  混合

![74908740476](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087404769.png)

快速复用代码

如果不想编译.box1()

![74908743901](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087439018.png)

混合也可以给他进行传参的操作,这些参数是混合时传递给选择器块的变量

![74908771258](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087712586.png)



####  嵌套

![74937040217](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749370402174.png)

一个嵌套的写法

可以一直嵌套下去

![74937061356](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749370613566.png)

&的意思表示当前的父层级,比如这里的&就表示一个li







####  运算

基本运算符+ - * / 可以对任何数字 变量或者颜色进行运算,如果可以的话,算术运算会在加减或者比较之前会进行单位换算,计算的结果以最左侧操作数的单位类型为准,如果单位换算无效或者失去意义,则忽略单位

![74937203251](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372032514.png)

实列





####  函数

less内置了很多用于转化颜色和处理字符串,算术运算的函数,这些函数在less函数手册有记录

![74937243532](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372435320.png)





####  作用域

和js是一样的,先查找本层,再去父层查找

![74937254932](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372549322.png)

####  注释和导入

注释和js是一样的,按ctrl加/就可以了

导入是

使用

> @import '相关的路径'





#  sass

也是和less很像的一种预编译语言

创建文件的文件后缀是scss

1. 编译sass

   使用\`live sasscompiler \`插件或者使用webpack进行编译

   ![74937332507](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373325074.png)

   点哪个底部的按钮可以插件编译

   ![74937334926](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373349267.png)

2. 变量

   sass使用$来标识变量

   ![74937376860](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373768607.png)

3. 嵌套

   也可以像less一样使用嵌套去进行

4. 导入sass文件

   和less一样,变量冲突就选择最近的变量

5. 注释

   和less一样

6. 混合

   需要提前定义混合

   ![74937422085](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374220852.png)

   使用@mixin混合

   使用@include导入混合,并且支持传参

7. 选择器继承

   要用@extend进行继承

   ![74937429428](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374294285.png)

8. 运算

   也是相关的加减乘除都可以,和less很像

   指令

   ![74937435048](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374350488.png)

   ![74937435798](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374357985.png)

   for和if可以去使用

   ​`,v8=Object.freeze(Object.defineProperty({__proto__:null,default:m8},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xp;const Fu=e=>xp=e,yp=Symbol();function al(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var $o;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})($o||($o={}));function x8(){const e=nf(!0),n=e.run(()=>oe({}));let t=[],r=[];const o=Mo({install(i){Fu(o),o._a=i,i.provide(yp,o),i.config.globalProperties.$pinia=o,r.forEach(u=>t.push(u)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const Cp=()=>{};function wd(e,n,t,r=Cp){e.add(n);const o=()=>{e.delete(n)&&r()};return!t&&tf()&&A1(o),o}function Hr(e,...n){e.forEach(t=>{t(...n)})}const y8=e=>e(),kd=Symbol(),vs=Symbol();function cl(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];al(o)&&al(r)&&e.hasOwnProperty(t)&&!Ze(r)&&!Dt(r)?e[t]=cl(o,r):e[t]=r}return e}const C8=Symbol();function _8(e){return!al(e)||!Object.prototype.hasOwnProperty.call(e,C8)}const{assign:qt}=Object;function w8(e){return!!(Ze(e)&&e.effect)}function k8(e,n,t,r){const{state:o,actions:i,getters:u}=n,s=t.state.value[e];let l;function a(){s||(t.state.value[e]=o?o():{});const c=G1(t.state.value[e]);return qt(c,i,Object.keys(u||{}).reduce((d,f)=>(d[f]=Mo(R(()=>{Fu(t);const h=t._s.get(e);return u[f].call(h,h)})),d),{}))}return l=_p(e,a,n,t,r,!0),l}function _p(e,n,t={},r,o,i){let u;const s=qt({actions:{}},t),l={deep:!0};let a,c,d=new Set,f=new Set,h;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={});let g;function b(E){let k;a=c=!1,typeof E=="function"?(E(r.state.value[e]),k={type:$o.patchFunction,storeId:e,events:h}):(cl(r.state.value[e],E),k={type:$o.patchObject,payload:E,storeId:e,events:h});const F=g=Symbol();ui().then(()=>{g===F&&(a=!0)}),c=!0,Hr(d,k,r.state.value[e])}const v=i?function(){const{state:k}=t,F=k?k():{};this.$patch(L=>{qt(L,F)})}:Cp;function m(){u.stop(),d.clear(),f.clear(),r._s.delete(e)}const w=(E,k="")=>{if(kd in E)return E[vs]=k,E;const F=function(){Fu(r);const L=Array.from(arguments),I=new Set,J=new Set;function G(P){I.add(P)}function $(P){J.add(P)}Hr(f,{args:L,name:F[vs],store:S,after:G,onError:$});let q;try{q=E.apply(this&&this.$id===e?this:S,L)}catch(P){throw Hr(J,P),P}return q instanceof Promise?q.then(P=>(Hr(I,P),P)).catch(P=>(Hr(J,P),Promise.reject(P))):(Hr(I,q),q)};return F[kd]=!0,F[vs]=k,F},y={_p:r,$id:e,$onAction:wd.bind(null,f),$patch:b,$reset:v,$subscribe(E,k={}){const F=wd(d,E,k.detached,()=>L()),L=u.run(()=>cn(()=>r.state.value[e],I=>{(k.flush==="sync"?c:a)&&E({storeId:e,type:$o.direct,events:h},I)},qt({},l,k)));return F},$dispose:m},S=uo(y);r._s.set(e,S);const _=(r._a&&r._a.runWithContext||y8)(()=>r._e.run(()=>(u=nf()).run(()=>n({action:w}))));for(const E in _){const k=_[E];if(Ze(k)&&!w8(k)||Dt(k))i||(p&&_8(k)&&(Ze(k)?k.value=p[E]:cl(k,p[E])),r.state.value[e][E]=k);else if(typeof k=="function"){const F=w(k,E);_[E]=F,s.actions[E]=k}}return qt(S,_),qt(Se(S),_),Object.defineProperty(S,"$state",{get:()=>r.state.value[e],set:E=>{b(k=>{qt(k,E)})}}),r._p.forEach(E=>{qt(S,u.run(()=>E({store:S,app:r._a,pinia:r,options:s})))}),p&&i&&t.hydrate&&t.hydrate(S.$state,p),a=!0,c=!0,S}/*! #__NO_SIDE_EFFECTS__ */function S8(e,n,t){let r;const o=typeof n=="function";r=o?t:n;function i(u,s){const l=og();return u=u||(l?ve(yp,null):null),u&&Fu(u),u=xp,u._s.has(e)||(o?_p(e,n,r,u):k8(e,r,u)),u._s.get(e)}return i.$id=e,i}function E8(e){const n={},t=e.match(/^---\s*([\s\S]*?)\s*---/);return t&&t[1]&&t[1].split(`
`).forEach(r=>{const[o,...i]=r.split(":");if(o&&i.length>0){const u=i.join(":").trim();n[o.trim()]=u}}),n}const Sd={};function A8(e){let n=Sd[e];if(n)return n;n=Sd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function oo(e,n){typeof n!="string"&&(n=oo.defaultChars);const t=A8(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let o="";for(let i=0,u=r.length;i<u;i+=3){const s=parseInt(r.slice(i+1,i+3),16);if(s<128){o+=t[s];continue}if((s&224)===192&&i+3<u){const l=parseInt(r.slice(i+4,i+6),16);if((l&192)===128){const a=s<<6&1984|l&63;a<128?o+="��":o+=String.fromCharCode(a),i+=3;continue}}if((s&240)===224&&i+6<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16);if((l&192)===128&&(a&192)===128){const c=s<<12&61440|l<<6&4032|a&63;c<2048||c>=55296&&c<=57343?o+="���":o+=String.fromCharCode(c),i+=6;continue}}if((s&248)===240&&i+9<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16),c=parseInt(r.slice(i+10,i+12),16);if((l&192)===128&&(a&192)===128&&(c&192)===128){let d=s<<18&1835008|l<<12&258048|a<<6&4032|c&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),i+=9;continue}}o+="�"}return o})}oo.defaultChars=";/?:@&=+$,#";oo.componentChars="";const Ed={};function T8(e){let n=Ed[e];if(n)return n;n=Ed[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function pi(e,n,t){typeof n!="string"&&(t=n,n=pi.defaultChars),typeof t>"u"&&(t=!0);const r=T8(n);let o="";for(let i=0,u=e.length;i<u;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<u&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){o+=e.slice(i,i+3),i+=2;continue}if(s<128){o+=r[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<u){const l=e.charCodeAt(i+1);if(l>=56320&&l<=57343){o+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[i])}return o}pi.defaultChars=";/?:@&=+$,-_.!~*'()#";pi.componentChars="-_.!~*'()";function ia(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function ru(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const D8=/^([a-z0-9.+-]+:)/i,z8=/:[0-9]*$/,F8=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,I8=["<",">",'"',"`"," ","\r",`
`,"	"],P8=["{","}","|","\\","^","`"].concat(I8),R8=["'"].concat(P8),Ad=["%","/","?",";","#"].concat(R8),Td=["/","?","#"],$8=255,Dd=/^[+a-z0-9A-Z_-]{0,63}$/,O8=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,zd={javascript:!0,"javascript:":!0},Fd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ua(e,n){if(e&&e instanceof ru)return e;const t=new ru;return t.parse(e,n),t}ru.prototype.parse=function(e,n){let t,r,o,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const a=F8.exec(i);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let u=D8.exec(i);if(u&&(u=u[0],t=u.toLowerCase(),this.protocol=u,i=i.substr(u.length)),(n||u||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=i.substr(0,2)==="//",o&&!(u&&zd[u])&&(i=i.substr(2),this.slashes=!0)),!zd[u]&&(o||u&&!Fd[u])){let a=-1;for(let p=0;p<Td.length;p++)r=i.indexOf(Td[p]),r!==-1&&(a===-1||r<a)&&(a=r);let c,d;a===-1?d=i.lastIndexOf("@"):d=i.lastIndexOf("@",a),d!==-1&&(c=i.slice(0,d),i=i.slice(d+1),this.auth=c),a=-1;for(let p=0;p<Ad.length;p++)r=i.indexOf(Ad[p]),r!==-1&&(a===-1||r<a)&&(a=r);a===-1&&(a=i.length),i[a-1]===":"&&a--;const f=i.slice(0,a);i=i.slice(a),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let g=0,b=p.length;g<b;g++){const v=p[g];if(v&&!v.match(Dd)){let m="";for(let w=0,y=v.length;w<y;w++)v.charCodeAt(w)>127?m+="x":m+=v[w];if(!m.match(Dd)){const w=p.slice(0,g),y=p.slice(g+1),S=v.match(O8);S&&(w.push(S[1]),y.unshift(S[2])),y.length&&(i=y.join(".")+i),this.hostname=w.join(".");break}}}}this.hostname.length>$8&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const l=i.indexOf("?");return l!==-1&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),Fd[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ru.prototype.parseHost=function(e){let n=z8.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const B8=Object.freeze(Object.defineProperty({__proto__:null,decode:oo,encode:pi,format:ia,parse:ua},Symbol.toStringTag,{value:"Module"})),wp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,kp=/[\0-\x1F\x7F-\x9F]/,M8=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,sa=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Sp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ep=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,N8=Object.freeze(Object.defineProperty({__proto__:null,Any:wp,Cc:kp,Cf:M8,P:sa,S:Sp,Z:Ep},Symbol.toStringTag,{value:"Module"})),L8=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),j8=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var xs;const H8=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),U8=(xs=String.fromCodePoint)!==null&&xs!==void 0?xs:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function K8(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=H8.get(e))!==null&&n!==void 0?n:e}var an;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(an||(an={}));const W8=32;var Qt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Qt||(Qt={}));function dl(e){return e>=an.ZERO&&e<=an.NINE}function V8(e){return e>=an.UPPER_A&&e<=an.UPPER_F||e>=an.LOWER_A&&e<=an.LOWER_F}function q8(e){return e>=an.UPPER_A&&e<=an.UPPER_Z||e>=an.LOWER_A&&e<=an.LOWER_Z||dl(e)}function G8(e){return e===an.EQUALS||q8(e)}var sn;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(sn||(sn={}));var Tt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Tt||(Tt={}));class Z8{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=sn.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Tt.Strict}startEntity(n){this.decodeMode=n,this.state=sn.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case sn.EntityStart:return n.charCodeAt(t)===an.NUM?(this.state=sn.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=sn.NamedEntity,this.stateNamedEntity(n,t));case sn.NumericStart:return this.stateNumericStart(n,t);case sn.NumericDecimal:return this.stateNumericDecimal(n,t);case sn.NumericHex:return this.stateNumericHex(n,t);case sn.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|W8)===an.LOWER_X?(this.state=sn.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=sn.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,o){if(t!==r){const i=r-t;this.result=this.result*Math.pow(o,i)+parseInt(n.substr(t,i),o),this.consumed+=i}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(dl(o)||V8(o))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(dl(o))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===an.SEMI)this.consumed+=1;else if(this.decodeMode===Tt.Strict)return 0;return this.emitCodePoint(K8(this.result),this.consumed),this.errors&&(n!==an.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let o=r[this.treeIndex],i=(o&Qt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const u=n.charCodeAt(t);if(this.treeIndex=X8(r,o,this.treeIndex+Math.max(1,i),u),this.treeIndex<0)return this.result===0||this.decodeMode===Tt.Attribute&&(i===0||G8(u))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],i=(o&Qt.VALUE_LENGTH)>>14,i!==0){if(u===an.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Tt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,o=(r[t]&Qt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,o,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:o}=this;return this.emitCodePoint(t===1?o[n]&~Qt.VALUE_LENGTH:o[n+1],r),t===3&&this.emitCodePoint(o[n+2],r),r}end(){var n;switch(this.state){case sn.NamedEntity:return this.result!==0&&(this.decodeMode!==Tt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case sn.NumericDecimal:return this.emitNumericEntity(0,2);case sn.NumericHex:return this.emitNumericEntity(0,3);case sn.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case sn.EntityStart:return 0}}}function Ap(e){let n="";const t=new Z8(e,r=>n+=U8(r));return function(o,i){let u=0,s=0;for(;(s=o.indexOf("&",s))>=0;){n+=o.slice(u,s),t.startEntity(i);const a=t.write(o,s+1);if(a<0){u=s+t.end();break}u=s+a,s=a===0?u+1:u}const l=n+o.slice(u);return n="",l}}function X8(e,n,t,r){const o=(n&Qt.BRANCH_LENGTH)>>7,i=n&Qt.JUMP_TABLE;if(o===0)return i!==0&&r===i?t:-1;if(i){const l=r-i;return l<0||l>=o?-1:e[t+l]-1}let u=t,s=u+o-1;for(;u<=s;){const l=u+s>>>1,a=e[l];if(a<r)u=l+1;else if(a>r)s=l-1;else return e[l+o]}return-1}const Tp=Ap(L8);Ap(j8);function Y8(e,n=Tt.Legacy){return Tp(e,n)}function J8(e){return Tp(e,Tt.Strict)}function Q8(e){return Object.prototype.toString.call(e)}function la(e){return Q8(e)==="[object String]"}const e_=Object.prototype.hasOwnProperty;function n_(e,n){return e_.call(e,n)}function Iu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function Dp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function aa(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Jo(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const zp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,t_=/&([a-z#][a-z0-9]{1,31});/gi,r_=new RegExp(zp.source+"|"+t_.source,"gi"),o_=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function i_(e,n){if(n.charCodeAt(0)===35&&o_.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return aa(r)?Jo(r):e}const t=Y8(e);return t!==e?t:e}function u_(e){return e.indexOf("\\")<0?e:e.replace(zp,"$1")}function io(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(r_,function(n,t,r){return t||i_(n,r)})}const s_=/[&<>"]/,l_=/[&<>"]/g,a_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function c_(e){return a_[e]}function or(e){return s_.test(e)?e.replace(l_,c_):e}const d_=/[.?*+^$[\]\\(){}|-]/g;function f_(e){return e.replace(d_,"\\$&")}function Be(e){switch(e){case 9:case 32:return!0}return!1}function Qo(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Fp(e){return sa.test(e)||Sp.test(e)}function ei(e){return Fp(Jo(e))}function ni(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Pu(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function Id(e){return e===32||e===9||e===10||e===13}function Ru(e){let n=0;for(;n<e.length&&Id(e.charCodeAt(n));n++);let t=e.length-1;for(;t>=n&&Id(e.charCodeAt(t));t--);return e.slice(n,t+1)}const h_={mdurl:B8,ucmicro:N8},p_=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Dp,asciiTrim:Ru,assign:Iu,escapeHtml:or,escapeRE:f_,fromCodePoint:Jo,has:n_,isMdAsciiPunct:ni,isPunctChar:Fp,isPunctCharCode:ei,isSpace:Be,isString:la,isValidEntityCode:aa,isWhiteSpace:Qo,lib:h_,normalizeReference:Pu,unescapeAll:io,unescapeMd:u_},Symbol.toStringTag,{value:"Module"}));function g_(e,n,t){let r,o,i,u;const s=e.posMax,l=e.pos;for(e.pos=n+1,r=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(r--,r===0)){o=!0;break}if(u=e.pos,e.md.inline.skipToken(e),i===91){if(u===e.pos-1)r++;else if(t)return e.pos=l,-1}}let a=-1;return o&&(a=e.pos),e.pos=l,a}function b_(e,n,t){let r,o=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<t;){if(r=e.charCodeAt(o),r===10||r===60)return i;if(r===62)return i.pos=o+1,i.str=io(e.slice(n+1,o)),i.ok=!0,i;if(r===92&&o+1<t){o+=2;continue}o++}return i}let u=0;for(;o<t&&(r=e.charCodeAt(o),!(r===32||r<32||r===127));){if(r===92&&o+1<t){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(r===40&&(u++,u>32))return i;if(r===41){if(u===0)break;u--}o++}return n===o||u!==0||(i.str=io(e.slice(n,o)),i.pos=o,i.ok=!0),i}function m_(e,n,t,r){let o,i=n;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)u.str=r.str,u.marker=r.marker;else{if(i>=t)return u;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return u;n++,i++,s===40&&(s=41),u.marker=s}for(;i<t;){if(o=e.charCodeAt(i),o===u.marker)return u.pos=i+1,u.str+=io(e.slice(n,i)),u.ok=!0,u;if(o===40&&u.marker===41)return u;o===92&&i+1<t&&i++,i++}return u.can_continue=!0,u.str+=io(e.slice(n,i)),u}const v_=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:b_,parseLinkLabel:g_,parseLinkTitle:m_},Symbol.toStringTag,{value:"Module"})),mt={};mt.code_inline=function(e,n,t,r,o){const i=e[n];return"<code"+o.renderAttrs(i)+">"+or(i.content)+"</code>"};mt.code_block=function(e,n,t,r,o){const i=e[n];return"<pre"+o.renderAttrs(i)+"><code>"+or(e[n].content)+`</code></pre>
`};mt.fence=function(e,n,t,r,o){const i=e[n],u=i.info?io(i.info).trim():"";let s="",l="";if(u){const c=u.split(/(\s+)/g);s=c[0],l=c.slice(2).join("")}let a;if(t.highlight?a=t.highlight(i.content,s,l)||or(i.content):a=or(i.content),a.indexOf("<pre")===0)return a+`
`;if(u){const c=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[];c<0?d.push(["class",t.langPrefix+s]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+s);const f={attrs:d};return`<pre><code${o.renderAttrs(f)}>${a}</code></pre>
`}return`<pre><code${o.renderAttrs(i)}>${a}</code></pre>
`};mt.image=function(e,n,t,r,o){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,t,r),o.renderToken(e,n,t)};mt.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};mt.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};mt.text=function(e,n){return or(e[n].content)};mt.html_block=function(e,n){return e[n].content};mt.html_inline=function(e,n){return e[n].content};function ao(){this.rules=Iu({},mt)}ao.prototype.renderAttrs=function(n){let t,r,o;if(!n.attrs)return"";for(o="",t=0,r=n.attrs.length;t<r;t++)o+=" "+or(n.attrs[t][0])+'="'+or(n.attrs[t][1])+'"';return o};ao.prototype.renderToken=function(n,t,r){const o=n[t];let i="";if(o.hidden)return"";o.block&&o.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(o.nesting===-1?"</":"<")+o.tag,i+=this.renderAttrs(o),o.nesting===0&&r.xhtmlOut&&(i+=" /");let u=!1;if(o.block&&(u=!0,o.nesting===1&&t+1<n.length)){const s=n[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===o.tag)&&(u=!1)}return i+=u?`>
`:">",i};ao.prototype.renderInline=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n)}return r};ao.prototype.renderInlineAsText=function(e,n,t){let r="";for(let o=0,i=e.length;o<i;o++)switch(e[o].type){case"text":r+=e[o].content;break;case"image":r+=this.renderInlineAsText(e[o].children,n,t);break;case"html_inline":case"html_block":r+=e[o].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};ao.prototype.render=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;s==="inline"?r+=this.renderInline(e[i].children,n,t):typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n,t)}return r};function Pn(){this.__rules__=[],this.__cache__=null}Pn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Pn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};Pn.prototype.at=function(e,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=o.alt||[],this.__cache__=null};Pn.prototype.before=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Pn.prototype.after=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Pn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};Pn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,t.push(r)},this),this.__cache__=null,t};Pn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Pn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,t.push(r)},this),this.__cache__=null,t};Pn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function et(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}et.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,o=t.length;r<o;r++)if(t[r][0]===n)return r;return-1};et.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};et.prototype.attrSet=function(n,t){const r=this.attrIndex(n),o=[n,t];r<0?this.attrPush(o):this.attrs[r]=o};et.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};et.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function Ip(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Ip.prototype.Token=et;const x_=/\r\n?|\n/g,y_=/\0/g;function C_(e){let n;n=e.src.replace(x_,`
`),n=n.replace(y_,"�"),e.src=n}function __(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function w_(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const o=n[t];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function k_(e){return/^<a[>\s]/i.test(e)}function S_(e){return/^<\/a\s*>/i.test(e)}function E_(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let o=n[t].children,i=0;for(let u=o.length-1;u>=0;u--){const s=o[u];if(s.type==="link_close"){for(u--;o[u].level!==s.level&&o[u].type!=="link_open";)u--;continue}if(s.type==="html_inline"&&(k_(s.content)&&i>0&&i--,S_(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const l=s.content;let a=e.md.linkify.match(l);const c=[];let d=s.level,f=0;a.length>0&&a[0].index===0&&u>0&&o[u-1].type==="text_special"&&(a=a.slice(1));for(let h=0;h<a.length;h++){const p=a[h].url,g=e.md.normalizeLink(p);if(!e.md.validateLink(g))continue;let b=a[h].text;a[h].schema?a[h].schema==="mailto:"&&!/^mailto:/i.test(b)?b=e.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):b=e.md.normalizeLinkText(b):b=e.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,"");const v=a[h].index;if(v>f){const S=new e.Token("text","",0);S.content=l.slice(f,v),S.level=d,c.push(S)}const m=new e.Token("link_open","a",1);m.attrs=[["href",g]],m.level=d++,m.markup="linkify",m.info="auto",c.push(m);const w=new e.Token("text","",0);w.content=b,w.level=d,c.push(w);const y=new e.Token("link_close","a",-1);y.level=--d,y.markup="linkify",y.info="auto",c.push(y),f=a[h].lastIndex}if(f<l.length){const h=new e.Token("text","",0);h.content=l.slice(f),h.level=d,c.push(h)}n[t].children=o=Dp(o,u,c)}}}}const Pp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,A_=/\((c|tm|r)\)/i,T_=/\((c|tm|r)\)/ig,D_={c:"©",r:"®",tm:"™"};function z_(e,n){return D_[n.toLowerCase()]}function F_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(T_,z_)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function I_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Pp.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function P_(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(A_.test(e.tokens[n].content)&&F_(e.tokens[n].children),Pp.test(e.tokens[n].content)&&I_(e.tokens[n].children))}const R_=/['"]/,Pd=/['"]/g,Rd="’";function zi(e,n,t,r){e[n]||(e[n]=[]),e[n].push({pos:t,ch:r})}function $_(e,n){let t="",r=0;n.sort((o,i)=>o.pos-i.pos);for(let o=0;o<n.length;o++){const i=n[o];t+=e.slice(r,i.pos)+i.ch,r=i.pos+1}return t+e.slice(r)}function O_(e,n){let t;const r=[],o={};for(let i=0;i<e.length;i++){const u=e[i],s=e[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=s);t--);if(r.length=t+1,u.type!=="text")continue;const l=u.content;let a=0;const c=l.length;e:for(;a<c;){Pd.lastIndex=a;const d=Pd.exec(l);if(!d)break;let f=!0,h=!0;a=d.index+1;const p=d[0]==="'";let g=32;if(d.index-1>=0)g=l.charCodeAt(d.index-1);else for(t=i-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){g=e[t].content.charCodeAt(e[t].content.length-1);break}let b=32;if(a<c)b=l.charCodeAt(a);else for(t=i+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){b=e[t].content.charCodeAt(0);break}const v=ni(g)||ei(g),m=ni(b)||ei(b),w=Qo(g),y=Qo(b);if(y?f=!1:m&&(w||v||(f=!1)),w?h=!1:v&&(y||m||(h=!1)),b===34&&d[0]==='"'&&g>=48&&g<=57&&(h=f=!1),f&&h&&(f=v,h=m),!f&&!h){p&&zi(o,i,d.index,Rd);continue}if(h)for(t=r.length-1;t>=0;t--){let S=r[t];if(r[t].level<s)break;if(S.single===p&&r[t].level===s){S=r[t];let z,_;p?(z=n.md.options.quotes[2],_=n.md.options.quotes[3]):(z=n.md.options.quotes[0],_=n.md.options.quotes[1]),zi(o,i,d.index,_),zi(o,S.token,S.pos,z),r.length=t;continue e}}f?r.push({token:i,pos:d.index,single:p,level:s}):h&&p&&zi(o,i,d.index,Rd)}}Object.keys(o).forEach(function(i){e[i].content=$_(e[i].content,o[i])})}function B_(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!R_.test(e.tokens[n].content)||O_(e.tokens[n].children,e)}function M_(e){let n,t;const r=e.tokens,o=r.length;for(let i=0;i<o;i++){if(r[i].type!=="inline")continue;const u=r[i].children,s=u.length;for(n=0;n<s;n++)u[n].type==="text_special"&&(u[n].type="text");for(n=t=0;n<s;n++)u[n].type==="text"&&n+1<s&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}}const ys=[["normalize",C_],["block",__],["inline",w_],["linkify",E_],["replacements",P_],["smartquotes",B_],["text_join",M_]];function ca(){this.ruler=new Pn;for(let e=0;e<ys.length;e++)this.ruler.push(ys[e][0],ys[e][1])}ca.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};ca.prototype.State=Ip;function vt(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let i=0,u=0,s=0,l=0,a=o.length,c=!1;u<a;u++){const d=o.charCodeAt(u);if(!c)if(Be(d)){s++,d===9?l+=4-l%4:l++;continue}else c=!0;(d===10||u===a-1)&&(d!==10&&u++,this.bMarks.push(i),this.eMarks.push(u),this.tShift.push(s),this.sCount.push(l),this.bsCount.push(0),c=!1,s=0,l=0,i=u+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}vt.prototype.push=function(e,n,t){const r=new et(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};vt.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};vt.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};vt.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Be(r))break}return n};vt.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Be(this.src.charCodeAt(--n)))return n+1;return n};vt.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};vt.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};vt.prototype.getLines=function(n,t,r,o){if(n>=t)return"";const i=new Array(t-n);for(let u=0,s=n;s<t;s++,u++){let l=0;const a=this.bMarks[s];let c=a,d;for(s+1<t||o?d=this.eMarks[s]+1:d=this.eMarks[s];c<d&&l<r;){const f=this.src.charCodeAt(c);if(Be(f))f===9?l+=4-(l+this.bsCount[s])%4:l++;else if(c-a<this.tShift[s])l++;else break;c++}l>r?i[u]=new Array(l-r+1).join(" ")+this.src.slice(c,d):i[u]=this.src.slice(c,d)}return i.join("")};vt.prototype.Token=et;const N_=65536;function Cs(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function $d(e){const n=[],t=e.length;let r=0,o=e.charCodeAt(r),i=!1,u=0,s="";for(;r<t;)o===124&&(i?(s+=e.substring(u,r-1),u=r):(n.push(s+e.substring(u,r)),s="",u=r+1)),i=o===92,r++,o=e.charCodeAt(r);return n.push(s+e.substring(u)),n}function L_(e,n,t,r){if(n+2>t)return!1;let o=n+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let i=e.bMarks[o]+e.tShift[o];if(i>=e.eMarks[o])return!1;const u=e.src.charCodeAt(i++);if(u!==124&&u!==45&&u!==58||i>=e.eMarks[o])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!Be(s)||u===45&&Be(s))return!1;for(;i<e.eMarks[o];){const y=e.src.charCodeAt(i);if(y!==124&&y!==45&&y!==58&&!Be(y))return!1;i++}let l=Cs(e,n+1),a=l.split("|");const c=[];for(let y=0;y<a.length;y++){const S=a[y].trim();if(!S){if(y===0||y===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(S))return!1;S.charCodeAt(S.length-1)===58?c.push(S.charCodeAt(0)===58?"center":"right"):S.charCodeAt(0)===58?c.push("left"):c.push("")}if(l=Cs(e,n).trim(),l.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;a=$d(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const d=a.length;if(d===0||d!==c.length)return!1;if(r)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),g=[n,0];p.map=g;const b=e.push("thead_open","thead",1);b.map=[n,n+1];const v=e.push("tr_open","tr",1);v.map=[n,n+1];for(let y=0;y<a.length;y++){const S=e.push("th_open","th",1);c[y]&&(S.attrs=[["style","text-align:"+c[y]]]);const z=e.push("inline","",0);z.content=a[y].trim(),z.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let m,w=0;for(o=n+2;o<t&&!(e.sCount[o]<e.blkIndent);o++){let y=!1;for(let z=0,_=h.length;z<_;z++)if(h[z](e,o,t,!0)){y=!0;break}if(y||(l=Cs(e,o).trim(),!l)||e.sCount[o]-e.blkIndent>=4||(a=$d(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),w+=d-a.length,w>N_))break;if(o===n+2){const z=e.push("tbody_open","tbody",1);z.map=m=[n+2,0]}const S=e.push("tr_open","tr",1);S.map=[o,o+1];for(let z=0;z<d;z++){const _=e.push("td_open","td",1);c[z]&&(_.attrs=[["style","text-align:"+c[z]]]);const E=e.push("inline","",0);E.content=a[z]?a[z].trim():"",E.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return m&&(e.push("tbody_close","tbody",-1),m[1]=o),e.push("table_close","table",-1),g[1]=o,e.parentType=f,e.line=o,!0}function j_(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,o=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,o=r;continue}break}e.line=o;const i=e.push("code_block","code",0);return i.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function H_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||o+3>i)return!1;const u=e.src.charCodeAt(o);if(u!==126&&u!==96)return!1;let s=o;o=e.skipChars(o,u);let l=o-s;if(l<3)return!1;const a=e.src.slice(s,o),c=e.src.slice(o,i);if(u===96&&c.indexOf(String.fromCharCode(u))>=0)return!1;if(r)return!0;let d=n,f=!1;for(;d++,!(d>=t||(o=s=e.bMarks[d]+e.tShift[d],i=e.eMarks[d],o<i&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===u&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,u),!(o-s<l)&&(o=e.skipSpaces(o),!(o<i)))){f=!0;break}l=e.sCount[n],e.line=d+(f?1:0);const h=e.push("fence","code",0);return h.info=c,h.content=e.getLines(n+1,d,l,!0),h.markup=a,h.map=[n,e.line],!0}function U_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const u=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(r)return!0;const s=[],l=[],a=[],c=[],d=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,p;for(p=n;p<t;p++){const w=e.sCount[p]<e.blkIndent;if(o=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],o>=i)break;if(e.src.charCodeAt(o++)===62&&!w){let S=e.sCount[p]+1,z,_;e.src.charCodeAt(o)===32?(o++,S++,_=!1,z=!0):e.src.charCodeAt(o)===9?(z=!0,(e.bsCount[p]+S)%4===3?(o++,S++,_=!1):_=!0):z=!1;let E=S;for(s.push(e.bMarks[p]),e.bMarks[p]=o;o<i;){const k=e.src.charCodeAt(o);if(Be(k))k===9?E+=4-(E+e.bsCount[p]+(_?1:0))%4:E++;else break;o++}h=o>=i,l.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(z?1:0),a.push(e.sCount[p]),e.sCount[p]=E-S,c.push(e.tShift[p]),e.tShift[p]=o-e.bMarks[p];continue}if(h)break;let y=!1;for(let S=0,z=d.length;S<z;S++)if(d[S](e,p,t,!0)){y=!0;break}if(y){e.lineMax=p,e.blkIndent!==0&&(s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]=-1}const g=e.blkIndent;e.blkIndent=0;const b=e.push("blockquote_open","blockquote",1);b.markup=">";const v=[n,0];b.map=v,e.md.block.tokenize(e,n,p);const m=e.push("blockquote_close","blockquote",-1);m.markup=">",e.lineMax=u,e.parentType=f,v[1]=e.line;for(let w=0;w<c.length;w++)e.bMarks[w+n]=s[w],e.tShift[w+n]=c[w],e.sCount[w+n]=a[w],e.bsCount[w+n]=l[w];return e.blkIndent=g,!0}function K_(e,n,t,r){const o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(i++);if(u!==42&&u!==45&&u!==95)return!1;let s=1;for(;i<o;){const a=e.src.charCodeAt(i++);if(a!==u&&!Be(a))return!1;a===u&&s++}if(s<3)return!1;if(r)return!0;e.line=n+1;const l=e.push("hr","hr",0);return l.map=[n,e.line],l.markup=Array(s+1).join(String.fromCharCode(u)),!0}function Od(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==43)return-1;if(r<t){const i=e.src.charCodeAt(r);if(!Be(i))return-1}return r}function Bd(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let o=t;if(o+1>=r)return-1;let i=e.src.charCodeAt(o++);if(i<48||i>57)return-1;for(;;){if(o>=r)return-1;if(i=e.src.charCodeAt(o++),i>=48&&i<=57){if(o-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return o<r&&(i=e.src.charCodeAt(o),!Be(i))?-1:o}function W_(e,n){const t=e.level+2;for(let r=n+2,o=e.tokens.length-2;r<o;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function V_(e,n,t,r){let o,i,u,s,l=n,a=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(c=!0);let d,f,h;if((h=Bd(e,l))>=0){if(d=!0,u=e.bMarks[l]+e.tShift[l],f=Number(e.src.slice(u,h-1)),c&&f!==1)return!1}else if((h=Od(e,l))>=0)d=!1;else return!1;if(c&&e.skipSpaces(h)>=e.eMarks[l])return!1;if(r)return!0;const p=e.src.charCodeAt(h-1),g=e.tokens.length;d?(s=e.push("ordered_list_open","ol",1),f!==1&&(s.attrs=[["start",f]])):s=e.push("bullet_list_open","ul",1);const b=[l,0];s.map=b,s.markup=String.fromCharCode(p);let v=!1;const m=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";l<t;){i=h,o=e.eMarks[l];const y=e.sCount[l]+h-(e.bMarks[l]+e.tShift[l]);let S=y;for(;i<o;){const $=e.src.charCodeAt(i);if($===9)S+=4-(S+e.bsCount[l])%4;else if($===32)S++;else break;i++}const z=i;let _;z>=o?_=1:_=S-y,_>4&&(_=1);const E=y+_;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(p);const k=[l,0];s.map=k,d&&(s.info=e.src.slice(u,h-1));const F=e.tight,L=e.tShift[l],I=e.sCount[l],J=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=E,e.tight=!0,e.tShift[l]=z-e.bMarks[l],e.sCount[l]=S,z>=o&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,l,t,!0),(!e.tight||v)&&(a=!1),v=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=J,e.tShift[l]=L,e.sCount[l]=I,e.tight=F,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(p),l=e.line,k[1]=l,l>=t||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let G=!1;for(let $=0,q=m.length;$<q;$++)if(m[$](e,l,t,!0)){G=!0;break}if(G)break;if(d){if(h=Bd(e,l),h<0)break;u=e.bMarks[l]+e.tShift[l]}else if(h=Od(e,l),h<0)break;if(p!==e.src.charCodeAt(h-1))break}return d?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(p),b[1]=l,e.line=l,e.parentType=w,a&&W_(e,g),!0}function q_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],u=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function s(m){const w=e.lineMax;if(m>=w||e.isEmpty(m))return null;let y=!1;if(e.sCount[m]-e.blkIndent>3&&(y=!0),e.sCount[m]<0&&(y=!0),!y){const _=e.md.block.ruler.getRules("reference"),E=e.parentType;e.parentType="reference";let k=!1;for(let F=0,L=_.length;F<L;F++)if(_[F](e,m,w,!0)){k=!0;break}if(e.parentType=E,k)return null}const S=e.bMarks[m]+e.tShift[m],z=e.eMarks[m];return e.src.slice(S,z+1)}let l=e.src.slice(o,i+1);i=l.length;let a=-1;for(o=1;o<i;o++){const m=l.charCodeAt(o);if(m===91)return!1;if(m===93){a=o;break}else if(m===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(m===92&&(o++,o<i&&l.charCodeAt(o)===10)){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}}if(a<0||l.charCodeAt(a+1)!==58)return!1;for(o=a+2;o<i;o++){const m=l.charCodeAt(o);if(m===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Be(m))break}const c=e.md.helpers.parseLinkDestination(l,o,i);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;o=c.pos;const f=o,h=u,p=o;for(;o<i;o++){const m=l.charCodeAt(o);if(m===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Be(m))break}let g=e.md.helpers.parseLinkTitle(l,o,i);for(;g.can_continue;){const m=s(u);if(m===null)break;l+=m,o=i,i=l.length,u++,g=e.md.helpers.parseLinkTitle(l,o,i,g)}let b;for(o<i&&p!==o&&g.ok?(b=g.str,o=g.pos):(b="",o=f,u=h);o<i;){const m=l.charCodeAt(o);if(!Be(m))break;o++}if(o<i&&l.charCodeAt(o)!==10&&b)for(b="",o=f,u=h;o<i;){const m=l.charCodeAt(o);if(!Be(m))break;o++}if(o<i&&l.charCodeAt(o)!==10)return!1;const v=Pu(l.slice(1,a));return v?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[v]>"u"&&(e.env.references[v]={title:b,href:d}),e.line=u),!0):!1}const G_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Z_="[a-zA-Z_:][a-zA-Z0-9:._-]*",X_="[^\"'=<>`\\x00-\\x20]+",Y_="'[^']*'",J_='"[^"]*"',Q_="(?:"+X_+"|"+Y_+"|"+J_+")",ew="(?:\\s+"+Z_+"(?:\\s*=\\s*"+Q_+")?)",Rp="<[A-Za-z][A-Za-z0-9\\-]*"+ew+"*\\s*\\/?>",$p="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",nw="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",tw="<[?][\\s\\S]*?[?]>",rw="<![A-Za-z][^>]*>",ow="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",iw=new RegExp("^(?:"+Rp+"|"+$p+"|"+nw+"|"+tw+"|"+rw+"|"+ow+")"),uw=new RegExp("^(?:"+Rp+"|"+$p+")"),dr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+G_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(uw.source+"\\s*$"),/^$/,!1]];function sw(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let u=e.src.slice(o,i),s=0;for(;s<dr.length&&!dr[s][0].test(u);s++);if(s===dr.length)return!1;if(r)return dr[s][2];let l=n+1;const a=dr[s][1].test("");if(!dr[s][1].test(u)){for(;l<t&&!(e.sCount[l]<e.blkIndent&&(a||!e.isEmpty(l)));l++)if(o=e.bMarks[l]+e.tShift[l],i=e.eMarks[l],u=e.src.slice(o,i),dr[s][1].test(u)){u.length!==0&&l++;break}}e.line=l;const c=e.push("html_block","",0);return c.map=[n,l],c.content=e.getLines(n,l,e.blkIndent,!0),!0}function lw(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let u=e.src.charCodeAt(o);if(u!==35||o>=i)return!1;let s=1;for(u=e.src.charCodeAt(++o);u===35&&o<i&&s<=6;)s++,u=e.src.charCodeAt(++o);if(s>6||o<i&&!Be(u))return!1;if(r)return!0;i=e.skipSpacesBack(i,o);const l=e.skipCharsBack(i,35,o);l>o&&Be(e.src.charCodeAt(l-1))&&(i=l),e.line=n+1;const a=e.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[n,e.line];const c=e.push("inline","",0);c.content=Ru(e.src.slice(o,i)),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(s),-1);return d.markup="########".slice(0,s),!0}function aw(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let i=0,u,s=n+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let h=e.bMarks[s]+e.tShift[s];const p=e.eMarks[s];if(h<p&&(u=e.src.charCodeAt(h),(u===45||u===61)&&(h=e.skipChars(h,u),h=e.skipSpaces(h),h>=p))){i=u===61?1:2;break}}if(e.sCount[s]<0)continue;let f=!1;for(let h=0,p=r.length;h<p;h++)if(r[h](e,s,t,!0)){f=!0;break}if(f)break}if(!i)return e.parentType=o,!1;const l=Ru(e.getLines(n,s,e.blkIndent,!1));e.line=s+1;const a=e.push("heading_open","h"+String(i),1);a.markup=String.fromCharCode(u),a.map=[n,e.line];const c=e.push("inline","",0);c.content=l,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup=String.fromCharCode(u),e.parentType=o,!0}function cw(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let a=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,i,t,!0)){a=!0;break}if(a)break}const u=Ru(e.getLines(n,i,e.blkIndent,!1));e.line=i;const s=e.push("paragraph_open","p",1);s.map=[n,e.line];const l=e.push("inline","",0);return l.content=u,l.map=[n,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Fi=[["table",L_,["paragraph","reference"]],["code",j_],["fence",H_,["paragraph","reference","blockquote","list"]],["blockquote",U_,["paragraph","reference","blockquote","list"]],["hr",K_,["paragraph","reference","blockquote","list"]],["list",V_,["paragraph","reference","blockquote"]],["reference",q_],["html_block",sw,["paragraph","reference","blockquote"]],["heading",lw,["paragraph","reference","blockquote"]],["lheading",aw],["paragraph",cw]];function $u(){this.ruler=new Pn;for(let e=0;e<Fi.length;e++)this.ruler.push(Fi[e][0],Fi[e][1],{alt:(Fi[e][2]||[]).slice()})}$u.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),o=r.length,i=e.md.options.maxNesting;let u=n,s=!1;for(;u<t&&(e.line=u=e.skipEmptyLines(u),!(u>=t||e.sCount[u]<e.blkIndent));){if(e.level>=i){e.line=t;break}const l=e.line;let a=!1;for(let c=0;c<o;c++)if(a=r[c](e,u,t,!1),a){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),u=e.line,u<t&&e.isEmpty(u)&&(s=!0,u++,e.line=u)}};$u.prototype.parse=function(e,n,t,r){if(!e)return;const o=new this.State(e,n,t,r);this.tokenize(o,o.line,o.lineMax)};$u.prototype.State=vt;function gi(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}gi.prototype.pushPending=function(){const e=new et("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};gi.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new et(e,n,t);let o=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};gi.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e);let o;if(e===0)o=32;else if(e===1)o=this.src.charCodeAt(0),(o&63488)===55296&&(o=65533);else if(o=this.src.charCodeAt(e-1),(o&64512)===56320){const b=this.src.charCodeAt(e-2);o=(b&64512)===55296?65536+(b-55296<<10)+(o-56320):65533}else(o&64512)===55296&&(o=65533);let i=e;for(;i<t&&this.src.charCodeAt(i)===r;)i++;const u=i-e;let s=i<t?this.src.charCodeAt(i):32;if((s&64512)===55296){const b=this.src.charCodeAt(i+1);s=(b&64512)===56320?65536+(s-55296<<10)+(b-56320):65533}else(s&64512)===56320&&(s=65533);const l=ni(o)||ei(o),a=ni(s)||ei(s),c=Qo(o),d=Qo(s),f=!d&&(!a||c||l),h=!c&&(!l||d||a);return{can_open:f&&(n||!h||l),can_close:h&&(n||!f||a),length:u}};gi.prototype.Token=et;function dw(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function fw(e,n){let t=e.pos;for(;t<e.posMax&&!dw(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const hw=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function pw(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const o=e.pending.match(hw);if(!o)return!1;const i=o[1],u=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!u)return!1;let s=u.url;if(s.length<=i.length)return!1;let l=s.length;for(;l>0&&s.charCodeAt(l-1)===42;)l--;l!==s.length&&(s=s.slice(0,l));const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-i.length,!0}function gw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,o=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<o&&Be(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const da=[];for(let e=0;e<256;e++)da.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){da[e.charCodeAt(0)]=1});function bw(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let o=e.src.charCodeAt(t);if(o===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(o=e.src.charCodeAt(t),!!Be(o));)t++;return e.pos=t,!0}if(o===32){if(!n){const s=e.push("text_special","",0);s.content="\\",s.markup="\\",s.info="escape"}return e.pos=t,!0}let i=e.src[t];if(o>=55296&&o<=56319&&t+1<r){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const u="\\"+i;if(!n){const s=e.push("text_special","",0);o<256&&da[o]!==0?s.content=i:s.content=u,s.markup=u,s.info="escape"}return e.pos=t+1,!0}function mw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const o=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const u=e.src.slice(o,t),s=u.length;if(e.backticksScanned&&(e.backticks[s]||0)<=o)return n||(e.pending+=u),e.pos+=s,!0;let l=t,a;for(;(a=e.src.indexOf("`",l))!==-1;){for(l=a+1;l<i&&e.src.charCodeAt(l)===96;)l++;const c=l-a;if(c===s){if(!n){const d=e.push("code_inline","code",0);d.markup=u,d.content=e.src.slice(t,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[c]=a}return e.backticksScanned=!0,n||(e.pending+=u),e.pos+=s,!0}function vw(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const o=e.scanDelims(e.pos,!0);let i=o.length;const u=String.fromCharCode(r);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=u,i--);for(let l=0;l<i;l+=2)s=e.push("text","",0),s.content=u+u,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function Md(e,n){let t;const r=[],o=n.length;for(let i=0;i<o;i++){const u=n[i];if(u.marker!==126||u.end===-1)continue;const s=n[u.end];t=e.tokens[u.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&r.push(s.token-1)}for(;r.length;){const i=r.pop();let u=i+1;for(;u<e.tokens.length&&e.tokens[u].type==="s_close";)u++;u--,i!==u&&(t=e.tokens[u],e.tokens[u]=e.tokens[i],e.tokens[i]=t)}}function xw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Md(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Md(e,n[r].delimiters)}const Op={tokenize:vw,postProcess:xw};function yw(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const o=e.scanDelims(e.pos,r===42);for(let i=0;i<o.length;i++){const u=e.push("text","",0);u.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function Nd(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const o=n[r];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const i=n[o.end],u=r>0&&n[r-1].end===o.end+1&&n[r-1].marker===o.marker&&n[r-1].token===o.token-1&&n[o.end+1].token===i.token+1,s=String.fromCharCode(o.marker),l=e.tokens[o.token];l.type=u?"strong_open":"em_open",l.tag=u?"strong":"em",l.nesting=1,l.markup=u?s+s:s,l.content="";const a=e.tokens[i.token];a.type=u?"strong_close":"em_close",a.tag=u?"strong":"em",a.nesting=-1,a.markup=u?s+s:s,a.content="",u&&(e.tokens[n[r-1].token].content="",e.tokens[n[o.end+1].token].content="",r--)}}function Cw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Nd(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Nd(e,n[r].delimiters)}const Bp={tokenize:yw,postProcess:Cw};function _w(e,n){let t,r,o,i,u="",s="",l=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let p=h+1;if(p<d&&e.src.charCodeAt(p)===40){for(a=!1,p++;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);if(p>=d)return!1;if(l=p,o=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),o.ok){for(u=e.md.normalizeLink(o.str),e.md.validateLink(u)?p=o.pos:u="",l=p;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);if(o=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<d&&l!==p&&o.ok)for(s=o.str,p=o.pos;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);}(p>=d||e.src.charCodeAt(p)!==41)&&(a=!0),p++}if(a){if(typeof e.env.references>"u")return!1;if(p<d&&e.src.charCodeAt(p)===91?(l=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?r=e.src.slice(l,p++):p=h+1):p=h+1,r||(r=e.src.slice(f,h)),i=e.env.references[Pu(r)],!i)return e.pos=c,!1;u=i.href,s=i.title}if(!n){e.pos=f,e.posMax=h;const g=e.push("link_open","a",1),b=[["href",u]];g.attrs=b,s&&b.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=d,!0}function ww(e,n){let t,r,o,i,u,s,l,a,c="";const d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);if(i>=f)return!1;for(a=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(c=e.md.normalizeLink(s.str),e.md.validateLink(c)?i=s.pos:c=""),a=i;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&a!==i&&s.ok)for(l=s.str,i=s.pos;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);else l="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(a=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?o=e.src.slice(a,i++):i=p+1):i=p+1,o||(o=e.src.slice(h,p)),u=e.env.references[Pu(o)],!u)return e.pos=d,!1;c=u.href,l=u.title}if(!n){r=e.src.slice(h,p);const g=[];e.md.inline.parse(r,e.md,e.env,g);const b=e.push("image","img",0),v=[["src",c],["alt",""]];b.attrs=v,b.children=g,b.content=r,l&&v.push(["title",l])}return e.pos=i,e.posMax=f,!0}const kw=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Sw=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Ew(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,o=e.posMax;for(;;){if(++t>=o)return!1;const u=e.src.charCodeAt(t);if(u===60)return!1;if(u===62)break}const i=e.src.slice(r+1,t);if(Sw.test(i)){const u=e.md.normalizeLink(i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}if(kw.test(i)){const u=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}return!1}function Aw(e){return/^<a[>\s]/i.test(e)}function Tw(e){return/^<\/a\s*>/i.test(e)}function Dw(e){const n=e|32;return n>=97&&n<=122}function zw(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const o=e.src.charCodeAt(r+1);if(o!==33&&o!==63&&o!==47&&!Dw(o))return!1;const i=e.src.slice(r).match(iw);if(!i)return!1;if(!n){const u=e.push("html_inline","",0);u.content=i[0],Aw(u.content)&&e.linkLevel++,Tw(u.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const Fw=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Iw=/^&([a-z][a-z0-9]{1,31});/i;function Pw(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(Fw);if(i){if(!n){const u=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=aa(u)?Jo(u):Jo(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(Iw);if(i){const u=J8(i[0]);if(u!==i[0]){if(!n){const s=e.push("text_special","",0);s.content=u,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Ld(e){const n={},t=e.length;if(!t)return;let r=0,o=-2;const i=[];for(let u=0;u<t;u++){const s=e[u];if(i.push(0),(e[r].marker!==s.marker||o!==s.token-1)&&(r=u),o=s.token,s.length=s.length||0,!s.close)continue;n.hasOwnProperty(s.marker)||(n[s.marker]=[-1,-1,-1,-1,-1,-1]);const l=n[s.marker][(s.open?3:0)+s.length%3];let a=r-i[r]-1,c=a;for(;a>l;a-=i[a]+1){const d=e[a];if(d.marker===s.marker&&d.open&&d.end<0){let f=!1;if((d.close||s.open)&&(d.length+s.length)%3===0&&(d.length%3!==0||s.length%3!==0)&&(f=!0),!f){const h=a>0&&!e[a-1].open?i[a-1]+1:0;i[u]=u-a+h,i[a]=h,s.open=!1,d.end=u,d.close=!1,c=-1,o=-2;break}}}c!==-1&&(n[s.marker][(s.open?3:0)+(s.length||0)%3]=c)}}function Rw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Ld(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Ld(n[r].delimiters)}function $w(e){let n,t,r=0;const o=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)o[n].nesting<0&&r--,o[n].level=r,o[n].nesting>0&&r++,o[n].type==="text"&&n+1<i&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}const _s=[["text",fw],["linkify",pw],["newline",gw],["escape",bw],["backticks",mw],["strikethrough",Op.tokenize],["emphasis",Bp.tokenize],["link",_w],["image",ww],["autolink",Ew],["html_inline",zw],["entity",Pw]],ws=[["balance_pairs",Rw],["strikethrough",Op.postProcess],["emphasis",Bp.postProcess],["fragments_join",$w]];function bi(){this.ruler=new Pn;for(let e=0;e<_s.length;e++)this.ruler.push(_s[e][0],_s[e][1]);this.ruler2=new Pn;for(let e=0;e<ws.length;e++)this.ruler2.push(ws[e][0],ws[e][1])}bi.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,o=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let u=!1;if(e.level<o){for(let s=0;s<r;s++)if(e.level++,u=t[s](e,!0),e.level--,u){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;u||e.pos++,i[n]=e.pos};bi.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,o=e.md.options.maxNesting;for(;e.pos<r;){const i=e.pos;let u=!1;if(e.level<o){for(let s=0;s<t;s++)if(u=n[s](e,!1),u){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};bi.prototype.parse=function(e,n,t,r){const o=new this.State(e,n,t,r);this.tokenize(o);const i=this.ruler2.getRules(""),u=i.length;for(let s=0;s<u;s++)i[s](o)};bi.prototype.State=gi;function Ow(e){const n={};e=e||{},n.src_Any=wp.source,n.src_Cc=kp.source,n.src_Z=Ep.source,n.src_P=sa.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter=`(?:(?!${t}|${n.src_ZPCc})${n.src_Any})`,n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth=`(?:(?:(?!${n.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator=`(?=$|${t}|${n.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${n.src_ZPCc}))`,n.src_path=`(?:[/?#](?:(?!${n.src_ZCc}|${t}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${n.src_ZCc}|\\]).)*\\]|\\((?:(?!${n.src_ZCc}|[)]).)*\\)|\\{(?:(?!${n.src_ZCc}|[}]).)*\\}|\\"(?:(?!${n.src_ZCc}|["]).)+\\"|\\'(?:(?!${n.src_ZCc}|[']).)+\\'|\\'(?=${n.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${n.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${n.src_ZCc}|$)|;(?!${n.src_ZCc}|$)|\\!+(?!${n.src_ZCc}|[!]|$)|\\?(?!${n.src_ZCc}|[?]|$))+|\\/)?`,n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+`|${n.src_pseudo_letter}{1,63})`,n.src_domain="(?:"+n.src_xn+`|(?:${n.src_pseudo_letter})|(?:${n.src_pseudo_letter}(?:-|${n.src_pseudo_letter}){0,61}${n.src_pseudo_letter}))`,n.src_host=`(?:(?:(?:(?:${n.src_domain})\\.)*${n.src_domain}))`,n.tpl_host_fuzzy="(?:"+n.src_ip4+`|(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%)))`,n.tpl_host_no_ip_fuzzy=`(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%))`,n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${n.src_ZPCc}|>|$))`,n.tpl_email_fuzzy=`(^|${t}|"|\\(|${n.src_ZCc})(${n.src_email_name}@${n.tpl_host_fuzzy_strict})`,n.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_fuzzy_strict}${n.src_path})`,n.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_no_ip_fuzzy_strict}${n.src_path})`,n}function fl(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Ou(e){return Object.prototype.toString.call(e)}function Bw(e){return Ou(e)==="[object String]"}function Mw(e){return Ou(e)==="[object Object]"}function Nw(e){return Ou(e)==="[object RegExp]"}function jd(e){return Ou(e)==="[object Function]"}function Lw(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Mp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function jw(e){return Object.keys(e||{}).reduce(function(n,t){return n||Mp.hasOwnProperty(t)},!1)}const Hw={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp(`^\\/\\/${t.re.src_auth}${t.re.src_host_port_strict}${t.re.src_path}`,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+`(?:localhost|(?:(?:${t.re.src_domain})\\.)+${t.re.src_domain_root})`+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp(`^${t.re.src_email_name}@${t.re.src_host_strict}`,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},Uw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Kw="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Ww(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Hd(){return function(e,n){n.normalize(e)}}function ou(e){const n=e.re=Ow(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(Uw),t.push(n.src_xn),n.src_tlds=t.join("|");function r(s){return s.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.email_fuzzy_global=RegExp(r(n.tpl_email_fuzzy),"ig"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_fuzzy_global=RegExp(r(n.tpl_link_fuzzy),"ig"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.link_no_ip_fuzzy_global=RegExp(r(n.tpl_link_no_ip_fuzzy),"ig"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function i(s,l){throw new Error(`(LinkifyIt) Invalid schema "${s}": ${l}`)}Object.keys(e.__schemas__).forEach(function(s){const l=e.__schemas__[s];if(l===null)return;const a={validate:null,link:null};if(e.__compiled__[s]=a,Mw(l)){Nw(l.validate)?a.validate=Ww(l.validate):jd(l.validate)?a.validate=l.validate:i(s,l),jd(l.normalize)?a.normalize=l.normalize:l.normalize?i(s,l):a.normalize=Hd();return}if(Bw(l)){o.push(s);return}i(s,l)}),o.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Hd()};const u=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(Lw).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${u})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${u})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function Np(e,n,t,r){const o=e.slice(t,r);this.schema=n.toLowerCase(),this.index=t,this.lastIndex=r,this.raw=o,this.text=o,this.url=o}function Mn(e,n){if(!(this instanceof Mn))return new Mn(e,n);n||jw(e)&&(n=e,e={}),this.__opts__=fl({},Mp,n),this.__schemas__=fl({},Hw,e),this.__compiled__={},this.__tlds__=Kw,this.__tlds_replaced__=!1,this.re={},ou(this)}Mn.prototype.add=function(n,t){return this.__schemas__[n]=t,ou(this),this};Mn.prototype.set=function(n){return this.__opts__=fl(this.__opts__,n),this};Mn.prototype.test=function(n){if(!n.length)return!1;let t,r;if(this.re.schema_test.test(n)){for(r=this.re.schema_search,r.lastIndex=0;(t=r.exec(n))!==null;)if(this.testSchemaAt(n,t[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&n.search(this.re.host_fuzzy_test)>=0&&n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&n.indexOf("@")>=0&&n.match(this.re.email_fuzzy)!==null)};Mn.prototype.pretest=function(n){return this.re.pretest.test(n)};Mn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};Mn.prototype.match=function(n){const t=[],r=[],o=[],i=[];let u,s,l;function a(f,h){return f?h?f.index!==h.index?f.index<h.index?f:h:f.lastIndex>=h.lastIndex?f:h:f:h}if(!n.length)return null;if(this.re.schema_test.test(n))for(l=this.re.schema_search,l.lastIndex=0;(u=l.exec(n))!==null;)s=this.testSchemaAt(n,u[2],l.lastIndex),s&&r.push({schema:u[2],index:u.index+u[1].length,lastIndex:u.index+u[0].length+s});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(l=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,l.lastIndex=0;(u=l.exec(n))!==null;)o.push({schema:"",index:u.index+u[1].length,lastIndex:u.index+u[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(l=this.re.email_fuzzy_global,l.lastIndex=0;(u=l.exec(n))!==null;)i.push({schema:"mailto:",index:u.index+u[1].length,lastIndex:u.index+u[0].length});const c=[0,0,0];let d=0;for(;;){const f=[r[c[0]],i[c[1]],o[c[2]]],h=a(a(f[0],f[1]),f[2]);if(!h)break;if(h===f[0]?c[0]++:h===f[1]?c[1]++:c[2]++,h.index<d)continue;const p=new Np(n,h.schema,h.index,h.lastIndex);this.__compiled__[p.schema].normalize(p,this),t.push(p),d=h.lastIndex}return t.length?t:null};Mn.prototype.matchAtStart=function(n){if(!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);if(!r)return null;const o=new Np(n,t[2],t.index+t[1].length,t.index+t[0].length+r);return this.__compiled__[o.schema].normalize(o,this),o};Mn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),ou(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,ou(this),this)};Mn.prototype.normalize=function(n){n.schema||(n.url=`http://${n.url}`),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url=`mailto:${n.url}`)};Mn.prototype.onCompile=function(){};const Yr=2147483647,at=36,fa=1,ti=26,Vw=38,qw=700,Lp=72,jp=128,Hp="-",Gw=/^xn--/,Zw=/[^\0-\x7F]/,Xw=/[\x2E\u3002\uFF0E\uFF61]/g,Yw={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ks=at-fa,ct=Math.floor,Ss=String.fromCharCode;function Yt(e){throw new RangeError(Yw[e])}function Jw(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function Up(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(Xw,".");const o=e.split("."),i=Jw(o,n).join(".");return r+i}function Kp(e){const n=[];let t=0;const r=e.length;for(;t<r;){const o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((o&1023)<<10)+(i&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}const Qw=e=>String.fromCodePoint(...e),e7=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:at},Ud=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},Wp=function(e,n,t){let r=0;for(e=t?ct(e/qw):e>>1,e+=ct(e/n);e>ks*ti>>1;r+=at)e=ct(e/ks);return ct(r+(ks+1)*e/(e+Vw))},Vp=function(e){const n=[],t=e.length;let r=0,o=jp,i=Lp,u=e.lastIndexOf(Hp);u<0&&(u=0);for(let s=0;s<u;++s)e.charCodeAt(s)>=128&&Yt("not-basic"),n.push(e.charCodeAt(s));for(let s=u>0?u+1:0;s<t;){const l=r;for(let c=1,d=at;;d+=at){s>=t&&Yt("invalid-input");const f=e7(e.charCodeAt(s++));f>=at&&Yt("invalid-input"),f>ct((Yr-r)/c)&&Yt("overflow"),r+=f*c;const h=d<=i?fa:d>=i+ti?ti:d-i;if(f<h)break;const p=at-h;c>ct(Yr/p)&&Yt("overflow"),c*=p}const a=n.length+1;i=Wp(r-l,a,l==0),ct(r/a)>Yr-o&&Yt("overflow"),o+=ct(r/a),r%=a,n.splice(r++,0,o)}return String.fromCodePoint(...n)},qp=function(e){const n=[];e=Kp(e);const t=e.length;let r=jp,o=0,i=Lp;for(const l of e)l<128&&n.push(Ss(l));const u=n.length;let s=u;for(u&&n.push(Hp);s<t;){let l=Yr;for(const c of e)c>=r&&c<l&&(l=c);const a=s+1;l-r>ct((Yr-o)/a)&&Yt("overflow"),o+=(l-r)*a,r=l;for(const c of e)if(c<r&&++o>Yr&&Yt("overflow"),c===r){let d=o;for(let f=at;;f+=at){const h=f<=i?fa:f>=i+ti?ti:f-i;if(d<h)break;const p=d-h,g=at-h;n.push(Ss(Ud(h+p%g,0))),d=ct(p/g)}n.push(Ss(Ud(d,0))),i=Wp(o,a,s===u),o=0,++s}++o,++r}return n.join("")},n7=function(e){return Up(e,function(n){return Gw.test(n)?Vp(n.slice(4).toLowerCase()):n})},t7=function(e){return Up(e,function(n){return Zw.test(n)?"xn--"+qp(n):n})},Gp={version:"2.3.1",ucs2:{decode:Kp,encode:Qw},decode:Vp,encode:qp,toASCII:t7,toUnicode:n7},r7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},o7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},i7={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},u7={default:r7,zero:o7,commonmark:i7},s7=/^(vbscript|javascript|file|data):/,l7=/^data:image\/(gif|png|jpeg|webp);/;function a7(e){const n=e.trim().toLowerCase();return s7.test(n)?l7.test(n):!0}const Zp=["http:","https:","mailto:"];function c7(e){const n=ua(e,!0);if(n.hostname&&(!n.protocol||Zp.indexOf(n.protocol)>=0))try{n.hostname=Gp.toASCII(n.hostname)}catch{}return pi(ia(n))}function d7(e){const n=ua(e,!0);if(n.hostname&&(!n.protocol||Zp.indexOf(n.protocol)>=0))try{n.hostname=Gp.toUnicode(n.hostname)}catch{}return oo(ia(n),oo.defaultChars+"%")}function Nn(e,n){if(!(this instanceof Nn))return new Nn(e,n);n||la(e)||(n=e||{},e="default"),this.inline=new bi,this.block=new $u,this.core=new ca,this.renderer=new ao,this.linkify=new Mn,this.validateLink=a7,this.normalizeLink=c7,this.normalizeLinkText=d7,this.utils=p_,this.helpers=Iu({},v_),this.options={},this.configure(e),n&&this.set(n)}Nn.prototype.set=function(e){return Iu(this.options,e),this};Nn.prototype.configure=function(e){const n=this;if(la(e)){const t=e;if(e=u7[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};Nn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Nn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Nn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Nn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Nn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Nn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Nn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function f7(e,n=100){let t=e.replace(/<img\s+[^>]*src\s*=\s*["']([^"']*)["'][^>]*>/gi,"").replace(/!\[(.*?)\]\(.*?\)/g,"");if(n===-1)return t;if(t.length>n){const r=t.lastIndexOf(" ",n),o=r>n*.8?r:n;t=t.substring(0,o)+"..."}return t}function h7(e){let n=e.replace(/([.$+?{}()|[\]\\])/g,"\\$1");return n=n.replace(/\*\*\/\*/g,"__GLOBSTAR_WITH_SLASH_STAR__").replace(/\*\*/g,"(.*?)").replace(/\*/g,"[^/]*").replace(/__GLOBSTAR_WITH_SLASH_STAR__/g,"(.*?)[^/]*"),new RegExp(`^${n}$`)}function p7(e,n){if(!e.includes("**"))return console.error("模式中不包含 '**'."),null;const t=h7(e),r=n.match(t);return r&&r[1]!==void 0?r[1]:null}const Bu=S8("Dynamic",{state:()=>({data:[{title:"为什么写博客",content:"博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。",links:""}],theme:"light"}),getters:{},actions:{initData(){const e=new Nn,n=oe([]),t=Object.assign({"/src/blog/GIT/git基本操作.md":t8,"/src/blog/GIT/git提交规范.md":o8,"/src/blog/go语言进阶学习.md":u8,"/src/blog/nuxt/Nuxt.md":l8,"/src/blog/typescript/ts.md":c8,"/src/blog/上坪支教日记.md":f8,"/src/blog/测试/实习项目—仿百度云盘.md":p8,"/src/blog/测试/脚手架.md":b8,"/src/blog/预处理器/scss.md":v8});console.log(t),n.value=Object.entries(t).map(([r,o])=>{let i=decodeURIComponent(r.split("/").pop()||"");const u=f7(o.default),s=E8(u),l=e.render(u.replace(/^---[\s\S]*?---/,"")),a=p7("/src/blog/**/*.md",r);return a&&(i=a+i),{id:i,title:i,date:s.date||"未知日期",excerpt:s.excerpt||l.substring(0,100)+"...",content:o.default}}),this.data=n.value.sort((r,o)=>r.title.localeCompare(o.title)),console.log(n.value)}}}),g7=le({__name:"Menu",setup(e){const n=oe([]),t=LC(),r=oe(!0),o=Bu(),i=l=>()=>A(Wh,null,{default:()=>A(l)}),u=R(()=>[{whateverLabel:"首页",whateverKey:"home",icon:i(VC),route:"home"},{whateverLabel:"项目",whateverKey:"projects",icon:i(KC),route:"projects"},{whateverLabel:"友链",whateverKey:"links",icon:i(XC),route:"links"},{whateverLabel:"关于",whateverKey:"about",icon:i(GC),route:"about"},{whateverLabel:"文章",whateverKey:"articles",icon:i(HC),whateverChildren:n.value},{whateverLabel:"归档",whateverKey:"markdown",icon:i(e8),route:"markdownIndex"},{whateverLabel:"时间线",whateverKey:"timeline",icon:i(JC),route:"time"}]);Ln(()=>{const l=[];n.value=o.data.map(a=>{var c,d;if((c=a.id)!=null&&c.includes("/")){const[f,h]=a.id.split("/");let p=!1;for(let g=0;g<l.length;g++)if(l[g].whateverLabel===f){(d=l[g].whateverChildren)==null||d.push({whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}),p=!0;break}return p||l.push({whateverLabel:f,whateverKey:f,route:"markdown",params:{id:f},whateverChildren:[{whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}]}),null}return{whateverLabel:a.title,whateverKey:a.id,route:"markdown",params:{id:a.id}}}).filter(Boolean),n.value.push(...l),console.log(n.value)});const s=R(()=>{const l=a=>a.map(c=>{const d={...c};if(d.route&&!d.whateverChildren){const f=d.whateverLabel;d.whateverLabel=()=>A(vp,{to:d.params?{name:d.route,params:d.params}:{name:d.route}},{default:()=>f}),d.onClick=()=>{d.params?t.push({name:d.route,params:d.params}):t.push({name:d.route})}}return Array.isArray(d.whateverChildren)&&(d.whateverChildren=l(d.whateverChildren)),d});return l(u.value)});return(l,a)=>(We(),Tr(Ue(td),{"has-sider":"",class:"xh-menu__container"},{default:Cn(()=>[Ce(Ue(g5),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:r.value,"show-trigger":"",onCollapse:a[0]||(a[0]=c=>r.value=!0),onExpand:a[1]||(a[1]=c=>r.value=!1)},{default:Cn(()=>[Ce(Ue(S5),{collapsed:r.value,"collapsed-width":64,"collapsed-icon-size":22,options:s.value,"key-field":"whateverKey","label-field":"whateverLabel","children-field":"whateverChildren"},null,8,["collapsed","options"])]),_:1},8,["collapsed"]),Ce(Ue(td))]),_:1}))}}),ur=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},b7=ur(g7,[["__scopeId","data-v-1da2e027"]]),m7={class:"xh"},v7=le({__name:"App",setup(e){const n=Bu();n.initData();const t=R(()=>n.theme==="dark"?P5:I5);return(r,o)=>{const i=Hf("router-view");return We(),fn("div",m7,[o[0]||(o[0]=ue("div",{class:"line-background"},null,-1)),o[1]||(o[1]=yn()),Ce(Ue(E4),{"theme-overrides":t.value},{default:Cn(()=>[Ce(b7),Ce(i,null,{default:Cn(({Component:u})=>[Ce(Dr,{name:"router-transition"},{default:Cn(()=>[(We(),Tr(Cg(u)))]),_:2},1024)]),_:1})]),_:1},8,["theme-overrides"]),o[2]||(o[2]=ue("div",{class:"area"},[ue("ul",{class:"circles"},[ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li")])],-1))])}}}),x7=ur(v7,[["__scopeId","data-v-bd6162a2"]]),y7="modulepreload",C7=function(e){return"/HaiBlogger/"+e},Kd={},fr=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=C7(l),l in Kd)return;Kd[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":y7,a||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),a)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return o.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},_7=le({__name:"Card",props:{title:{type:String,default:"为什么写博客"},content:{type:String,default:""}},setup(e){const n=e;return(t,r)=>(We(),Tr(Ue(k4),{title:n.title,embedded:"",bordered:!1,innerHTML:n.content,class:"markdown-renderer"},null,8,["title","innerHTML"]))}}),w7=ur(_7,[["__scopeId","data-v-5a5f85f3"]]),k7={class:"timeline-container"},S7={__name:"TimeLine",setup(e){return(n,t)=>(We(),fn("div",k7,[Ce(Ue(D5),{"item-placement":"right",class:"timeline"},{default:Cn(()=>[Ce(Ue(vo),{content:"初次接触前端",time:"2024-10-09"}),Ce(Ue(vo),{type:"success",title:"纯三件套",content:"自己的第一个博客",time:"2024-12-03"}),Ce(Ue(vo),{type:"error",content:"学习ing"}),Ce(Ue(vo),{type:"warning",title:"一个文档",content:"使用vitepress弄了一个博客",time:"2025-04-03"}),Ce(Ue(vo),{type:"info",title:"本博客",content:"使用这段时间所学去写",time:"2025-07-19"})]),_:1})]))}},E7=ur(S7,[["__scopeId","data-v-dc9fe63a"]]),A7={class:"xh-home"},T7={class:"xh-info-container"},D7={class:"xh-avatar-container"},z7={class:"xh-info-text"},F7={class:"xh-job"},I7={class:"xh-bio"},P7={class:"xh-social-container"},R7={class:"xh-social"},$7={class:"card"},O7={class:"xh-home-right"},B7=le({__name:"Home",setup(e){const n=Bu(),t=F5(),r=oe("近期动态"),o=oe(["近期动态","随笔"]),i=oe({padding:"0 6px",borderRadius:t.value.borderRadius,display:"inline-block",color:t.value.baseColor,background:t.value.primaryColor,transition:"all .3s ease-in-out",cursor:"pointer"}),u=oe(1),s=R(()=>{if(u.value===1)return n.data;if(u.value===2)return[{title:"为什么写博客",content:"content",links:""}]}),l=()=>{u.value++,r.value=o.value[u.value-1],u.value>5&&(u.value=1)},a=()=>{i.value.background=t.value.primaryColorSuppl},c=()=>{i.value.background=t.value.primaryColor};return(d,f)=>{const h=Hf("Light");return We(),fn(Le,null,[ue("div",A7,[ue("div",T7,[Ce(Ue(id),{style:{height:"100vh"}},{default:Cn(()=>[ue("div",D7,[Ce(Ue(m4),{round:"",size:80,src:"https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",class:"xh-avatar"})]),ue("div",z7,[f[9]||(f[9]=ue("div",{class:"xh-name"},"小海",-1)),ue("div",F7,[Ce(h,null,{default:Cn(()=>[...f[0]||(f[0]=[yn("前端开发者",-1)])]),_:1}),f[1]||(f[1]=yn("-向阳花木易为春",-1))]),f[10]||(f[10]=ue("div",{class:"xh-tags"},[ue("span",{class:"xh-tag"},"Vue"),ue("span",{class:"xh-tag"},"React"),ue("span",{class:"xh-tag"},"jest"),ue("span",{class:"xh-tag"},"Typescript"),ue("span",{class:"xh-tag"},"Javascript"),ue("span",{class:"xh-tag"},"CSS"),ue("span",{class:"xh-tag"},"HTML"),ue("span",{class:"xh-tag"},"Node"),ue("span",{class:"xh-tag"},"Git"),ue("span",{class:"xh-tag"},"Golang")],-1)),ue("div",I7,[f[5]||(f[5]=yn(" hi,",-1)),Ce(h,null,{default:Cn(()=>[...f[2]||(f[2]=[yn("我是小海,也可以称我为褚喧",-1)])]),_:1}),f[6]||(f[6]=yn(",欢迎来到我的博客. 我是一个喜欢学习、喜欢生活、喜欢分享的",-1)),Ce(h,null,{default:Cn(()=>[...f[3]||(f[3]=[yn("Web前端开发者",-1)])]),_:1}),f[7]||(f[7]=yn(",现在的企划只有写前端,学习音乐做一首自己的歌,想要参加开源项目,正在犀牛鸟活动中摸索,希望在未来能够参与更多开源活动,也专注 在一些线下的公益活动,",-1)),Ce(h,null,{default:Cn(()=>[...f[4]||(f[4]=[yn("为世界更美好贡献自己的一份力量",-1)])]),_:1}),f[8]||(f[8]=yn(",和很多人一样,相信技术改变世界 ",-1))]),f[11]||(f[11]=ue("div",{class:"xh-bio"}," 除此以外,我也喜欢二次元,阅读(虽然这段时间的阅读也越来越少),散步,喜欢骑行的风,写文章等,爱好很少,但是可以让我一个人非常充实的活着 ",-1)),Ce(Ue(Y4),null,{default:Cn(()=>[Ce(Dr,{name:"flip",mode:"out-in"},{default:Cn(()=>[(We(),Tr(Ue(s5),{key:r.value,text:r.value,patterns:o.value,"highlight-style":i.value,onClick:l,onMouseenter:a,onMouseleave:c},null,8,["text","patterns","highlight-style"]))]),_:1})]),_:1}),ue("div",P7,[Ce(Ue(id),{style:{height:"100%"}},{default:Cn(()=>[ue("div",R7,[(We(!0),fn(Le,null,_g(s.value,p=>(We(),fn("div",$7,[Ce(w7,{title:p.title,content:p.excerpt},null,8,["title","content"])]))),256))])]),_:1})])])]),_:1})])]),ue("div",O7,[Ce(E7)])],64)}}}),M7=ur(B7,[["__scopeId","data-v-46cd620b"]]),N7=[{path:"/",name:"home",component:M7},{path:"/markdown",name:"markdownIndex",component:()=>fr(()=>import("./index-CHnIfKhZ.js"),__vite__mapDeps([0,1,2,3]))},{path:"/markdown/:id",name:"markdown",component:()=>fr(()=>import("./markdown-DvlbxgF9.js"),__vite__mapDeps([4,2,5]))},{path:"/projects",name:"projects",component:()=>fr(()=>import("./index-DK7M3Jp_.js"),__vite__mapDeps([6,7,8,9]))},{path:"/links",name:"links",component:()=>fr(()=>import("./index-CY-pD0zd.js"),__vite__mapDeps([10,7,8,11]))},{path:"/about",name:"about",component:()=>fr(()=>import("./index-B4tDWDG_.js"),__vite__mapDeps([12,2,13]))},{path:"/time",name:"time",component:()=>fr(()=>import("./index-C5pHbNsi.js"),__vite__mapDeps([14,15]))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>fr(()=>import("./index-DaDw9yv6.js"),__vite__mapDeps([16,2,1,17]))}],L7=NC({history:vC(),routes:N7}),j7={__name:"Light",props:{color:{type:String,default:"#9c3c3c"},fontSize:{type:String,default:"0.9375rem"},fontWeight:{type:String,default:"700"},underline:{type:Boolean,default:!1},underlineColor:{type:String,default:""}},setup(e){const n=e,t=R(()=>({"--xh-color":n.color,"--xh-font-size":n.fontSize,"--xh-font-weight":n.fontWeight,"--xh-underline-color":n.underlineColor||n.color}));return(r,o)=>(We(),fn("span",{class:du(["xh-light",{underline:e.underline}]),style:oi(t.value)},[vu(r.$slots,"default",{},void 0,!0)],6))}},H7=ur(j7,[["__scopeId","data-v-388b24da"]]),U7=["innerHTML"],K7={key:1},W7=le({__name:"Markdown",props:{theme:{default:"github-dark-dimmed"},src:{default:""},content:{default:""},height:{default:"auto"},width:{default:"auto"}},setup(e){const n=Bu(),t=e,r=oe(""),o=oe(""),i=oe(null);return Ln(async()=>{const u=new Nn({html:!0,linkify:!0,typographer:!0,highlight:(s,l)=>s});Rt(async()=>{if(console.log("props.src",t.src),t.src)try{r.value=n.data.filter(s=>s.title===t.src)[0].content,o.value=u.render(r.value),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}else if(t.content)try{o.value=u.render(t.content),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}})}),(u,s)=>(We(),fn("div",{class:"fei-markdown",style:oi(`${t.width?`width:${t.width}px;`:""}${t.height?`height:${t.height}px;`:""}`)},[o.value?(We(),fn("div",{key:0,class:"fei-markdown-body",innerHTML:o.value},null,8,U7)):(We(),fn("div",K7,[...s[0]||(s[0]=[ue("p",null,"正在渲染...",-1)])]))],4))}}),V7=ur(W7,[["__scopeId","data-v-7d900608"]]),q7={},G7={class:"xh-home"},Z7={class:"xh-info-container"};function X7(e,n){return We(),fn("div",G7,[ue("div",Z7,[vu(e.$slots,"default",{},void 0,!0)])])}const Y7=ur(q7,[["render",X7],["__scopeId","data-v-6d9483f4"]]),co=Kb(x7);co.use(x8());co.component("Light",H7);co.component("Fei-Markdown",V7);co.component("Fei-Container",Y7);co.use(L7);co.mount("#app");export{u9 as $,Fh as A,In as B,kn as C,Pe as D,Gn as E,Ie as F,o9 as G,Xl as H,ft as I,t9 as J,Y as K,ln as L,W6 as M,Zl as N,zn as O,Eu as P,ui as Q,Qa as R,fi as S,Dr as T,i9 as U,Xi as V,br as W,Km as X,Jl as Y,Fe as Z,wc as _,U0 as a,d4 as a$,Pv as a0,Le as a1,Lh as a2,Rt as a3,n9 as a4,r9 as a5,Wo as a6,Rr as a7,un as a8,Ye as a9,Cn as aA,Ue as aB,yn as aC,id as aD,Q7 as aE,Hf as aF,du as aG,vu as aH,Tr as aI,J7 as aJ,oi as aK,$b as aL,dg as aM,Vm as aN,er as aO,m4 as aP,k4 as aQ,Wh as aR,Y7 as aS,fh as aT,Uh as aU,g6 as aV,tv as aW,H0 as aX,G1 as aY,I4 as aZ,a4 as a_,Ge as aa,Ol as ab,$i as ac,Io as ad,Mv as ae,Au as af,L0 as ag,j0 as ah,K0 as ai,no as aj,gu as ak,gb as al,oc as am,R0 as an,Gi as ao,$0 as ap,LC as aq,We as ar,fn as as,ue as at,E1 as au,Yg as av,_g as aw,ur as ax,Bu as ay,Ce as az,Bf as b,Ot as b0,di as b1,B0 as b2,_r as b3,p6 as b4,_c as b5,Us as b6,R as c,le as d,Mf as e,ec as f,so as g,A as h,ve as i,mm as j,wo as k,vm as l,Pr as m,xc as n,Ln as o,Ke as p,qn as q,oe as r,c6 as s,He as t,Fn as u,H as v,cn as w,O as x,K as y,Ws as z};
