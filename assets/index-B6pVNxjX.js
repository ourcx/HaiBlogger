const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CM_IJLH9.js","assets/Result-tL1mHlo7.js","assets/Button-BkcNe_Zu.js","assets/index-e3eb9ou1.css","assets/markdown-CPfe-qFW.js","assets/markdown-DKE4-co0.css","assets/index-BmxxDyuq.js","assets/Links-BRTC8akL.js","assets/Links-B6YxczeT.css","assets/index-CwXX1aQh.css","assets/index-DBRxsej0.js","assets/index-CNoVRu74.css","assets/index-6TDLIcbf.js","assets/index-CtkkO6vF.css","assets/index-Ci5SWTSu.js","assets/index-DgicIrxY.css","assets/index-CtSAni40.js","assets/index-B0csvvbc.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pl(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const $e={},Vr=[],dt=()=>{},Vd=()=>!1,uu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),su=e=>e.startsWith("onUpdate:"),Je=Object.assign,gl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},f1=Object.prototype.hasOwnProperty,De=(e,n)=>f1.call(e,n),ge=Array.isArray,Wr=e=>oi(e)==="[object Map]",Wd=e=>oi(e)==="[object Set]",ga=e=>oi(e)==="[object Date]",ve=e=>typeof e=="function",He=e=>typeof e=="string",Bn=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",qd=e=>(Ae(e)||ve(e))&&ve(e.then)&&ve(e.catch),Gd=Object.prototype.toString,oi=e=>Gd.call(e),h1=e=>oi(e).slice(8,-1),Zd=e=>oi(e)==="[object Object]",lu=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,So=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),au=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},p1=/-\w/g,wn=au(e=>e.replace(p1,n=>n.slice(1).toUpperCase())),g1=/\B([A-Z])/g,Ir=au(e=>e.replace(g1,"-$1").toLowerCase()),cu=au(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lu=au(e=>e?`on${cu(e)}`:""),lt=(e,n)=>!Object.is(e,n),ju=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Xd=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},m1=e=>{const n=parseFloat(e);return isNaN(n)?e:n},b1=e=>{const n=He(e)?Number(e):NaN;return isNaN(n)?e:n};let ma;const du=()=>ma||(ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ii(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=He(r)?C1(r):ii(r);if(o)for(const i in o)n[i]=o[i]}return n}else if(He(e)||Ae(e))return e}const v1=/;(?![^(]*\))/g,x1=/:([^]+)/,y1=/\/\*[^]*?\*\//g;function C1(e){const n={};return e.replace(y1,"").split(v1).forEach(t=>{if(t){const r=t.split(x1);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function fu(e){let n="";if(He(e))n=e;else if(ge(e))for(let t=0;t<e.length;t++){const r=fu(e[t]);r&&(n+=r+" ")}else if(Ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const _1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w1=pl(_1);function Yd(e){return!!e||e===""}function k1(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=ml(e[r],n[r]);return t}function ml(e,n){if(e===n)return!0;let t=ga(e),r=ga(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Bn(e),r=Bn(n),t||r)return e===n;if(t=ge(e),r=ge(n),t||r)return t&&r?k1(e,n):!1;if(t=Ae(e),r=Ae(n),t||r){if(!t||!r)return!1;const o=Object.keys(e).length,i=Object.keys(n).length;if(o!==i)return!1;for(const u in e){const s=e.hasOwnProperty(u),l=n.hasOwnProperty(u);if(s&&!l||!s&&l||!ml(e[u],n[u]))return!1}}return String(e)===String(n)}const Jd=e=>!!(e&&e.__v_isRef===!0),S1=e=>He(e)?e:e==null?"":ge(e)||Ae(e)&&(e.toString===Gd||!ve(e.toString))?Jd(e)?S1(e.value):JSON.stringify(e,Qd,2):String(e),Qd=(e,n)=>Jd(n)?Qd(e,n.value):Wr(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o],i)=>(t[Hu(r,i)+" =>"]=o,t),{})}:Wd(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Hu(t))}:Bn(n)?Hu(n):Ae(n)&&!ge(n)&&!Zd(n)?String(n):n,Hu=(e,n="")=>{var t;return Bn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class ef{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&rn&&(rn.active?(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const o=this.scopes.slice();for(n=0,t=o.length;n<t;n++)o[n].resume()}const r=this.effects.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}}run(n){if(this._active){const t=rn;try{return rn=this,n()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){if(this._on>0&&--this._on===0){if(rn===this)rn=this.prevScope;else{let n=rn;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(t=0,r=o.length;t<r;t++)o[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function nf(e){return new ef(e)}function tf(){return rn}function E1(e,n=!1){rn&&rn.cleanups.push(e)}let Oe;const Uu=new WeakSet;class rf{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&(rn.active?rn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uu.has(this)&&(Uu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ba(this),sf(this);const n=Oe,t=Yn;Oe=this,Yn=!0;try{return this.fn()}finally{lf(this),Oe=n,Yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)xl(n);this.deps=this.depsTail=void 0,ba(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ts(this)&&this.run()}get dirty(){return Ts(this)}}let of=0,Eo,Ao;function uf(e,n=!1){if(e.flags|=8,n){e.next=Ao,Ao=e;return}e.next=Eo,Eo=e}function bl(){of++}function vl(){if(--of>0)return;if(Ao){let n=Ao;for(Ao=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Eo;){let n=Eo;for(Eo=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function sf(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function lf(e){let n,t=e.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),xl(r),A1(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=n,e.depsTail=t}function Ts(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(af(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function af(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Oo)||(e.globalVersion=Oo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ts(e))))return;e.flags|=2;const n=e.dep,t=Oe,r=Yn;Oe=e,Yn=!0;try{sf(e);const o=e.fn(e._value);(n.version===0||lt(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{Oe=t,Yn=r,lf(e),e.flags&=-3}}function xl(e,n=!1){const{dep:t,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)xl(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function A1(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Yn=!0;const cf=[];function Ft(){cf.push(Yn),Yn=!1}function It(){const e=cf.pop();Yn=e===void 0?!0:e}function ba(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Oe;Oe=void 0;try{n()}finally{Oe=t}}}let Oo=0;class T1{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Oe||!Yn||Oe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Oe)t=this.activeLink=new T1(Oe,this),Oe.deps?(t.prevDep=Oe.depsTail,Oe.depsTail.nextDep=t,Oe.depsTail=t):Oe.deps=Oe.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Oe.depsTail,t.nextDep=void 0,Oe.depsTail.nextDep=t,Oe.depsTail=t,Oe.deps===t&&(Oe.deps=r)}return t}trigger(n){this.version++,Oo++,this.notify(n)}notify(n){bl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{vl()}}}function df(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)df(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Oi=new WeakMap,yr=Symbol(""),Ds=Symbol(""),Bo=Symbol("");function pn(e,n,t){if(Yn&&Oe){let r=Oi.get(e);r||Oi.set(e,r=new Map);let o=r.get(t);o||(r.set(t,o=new yl),o.map=r,o.key=t),o.track()}}function Et(e,n,t,r,o,i){const u=Oi.get(e);if(!u){Oo++;return}const s=l=>{l&&l.trigger()};if(bl(),n==="clear")u.forEach(s);else{const l=ge(e),a=l&&lu(t);if(l&&t==="length"){const c=Number(r);u.forEach((d,f)=>{(f==="length"||f===Bo||!Bn(f)&&f>=c)&&s(d)})}else switch((t!==void 0||u.has(void 0))&&s(u.get(t)),a&&s(u.get(Bo)),n){case"add":l?a&&s(u.get("length")):(s(u.get(yr)),Wr(e)&&s(u.get(Ds)));break;case"delete":l||(s(u.get(yr)),Wr(e)&&s(u.get(Ds)));break;case"set":Wr(e)&&s(u.get(yr));break}}vl()}function D1(e,n){const t=Oi.get(e);return t&&t.get(n)}function Mr(e){const n=Se(e);return n===e?n:(pn(n,"iterate",Bo),On(e)?n:n.map(Jn))}function hu(e){return pn(e=Se(e),"iterate",Bo),e}function ut(e,n){return Pt(e)?Jr(Dt(e)?Jn(n):n):Jn(n)}const z1={__proto__:null,[Symbol.iterator](){return Ku(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return Mr(this).concat(...e.map(n=>ge(n)?Mr(n):n))},entries(){return Ku(this,"entries",e=>(e[1]=ut(this,e[1]),e))},every(e,n){return yt(this,"every",e,n,void 0,arguments)},filter(e,n){return yt(this,"filter",e,n,t=>t.map(r=>ut(this,r)),arguments)},find(e,n){return yt(this,"find",e,n,t=>ut(this,t),arguments)},findIndex(e,n){return yt(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return yt(this,"findLast",e,n,t=>ut(this,t),arguments)},findLastIndex(e,n){return yt(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return yt(this,"forEach",e,n,void 0,arguments)},includes(...e){return Vu(this,"includes",e)},indexOf(...e){return Vu(this,"indexOf",e)},join(e){return Mr(this).join(e)},lastIndexOf(...e){return Vu(this,"lastIndexOf",e)},map(e,n){return yt(this,"map",e,n,void 0,arguments)},pop(){return fo(this,"pop")},push(...e){return fo(this,"push",e)},reduce(e,...n){return va(this,"reduce",e,n)},reduceRight(e,...n){return va(this,"reduceRight",e,n)},shift(){return fo(this,"shift")},some(e,n){return yt(this,"some",e,n,void 0,arguments)},splice(...e){return fo(this,"splice",e)},toReversed(){return Mr(this).toReversed()},toSorted(e){return Mr(this).toSorted(e)},toSpliced(...e){return Mr(this).toSpliced(...e)},unshift(...e){return fo(this,"unshift",e)},values(){return Ku(this,"values",e=>ut(this,e))}};function Ku(e,n,t){const r=hu(e),o=r[n]();return r!==e&&!On(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=t(i.value)),i}),o}const F1=Array.prototype;function yt(e,n,t,r,o,i){const u=hu(e),s=u!==e&&!On(e),l=u[n];if(l!==F1[n]){const d=l.apply(e,i);return s?Jn(d):d}let a=t;u!==e&&(s?a=function(d,f){return t.call(this,ut(e,d),f,e)}:t.length>2&&(a=function(d,f){return t.call(this,d,f,e)}));const c=l.call(u,a,r);return s&&o?o(c):c}function va(e,n,t,r){const o=hu(e),i=o!==e&&!On(e);let u=t,s=!1;o!==e&&(i?(s=r.length===0,u=function(a,c,d){return s&&(s=!1,a=ut(e,a)),t.call(this,a,ut(e,c),d,e)}):t.length>3&&(u=function(a,c,d){return t.call(this,a,c,d,e)}));const l=o[n](u,...r);return s?ut(e,l):l}function Vu(e,n,t){const r=Se(e);pn(r,"iterate",Bo);const o=r[n](...t);return(o===-1||o===!1)&&pu(t[0])?(t[0]=Se(t[0]),r[n](...t)):o}function fo(e,n,t=[]){Ft(),bl();const r=Se(e)[n].apply(e,t);return vl(),It(),r}const I1=pl("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bn));function P1(e){Bn(e)||(e=String(e));const n=Se(this);return pn(n,"has",e),n.hasOwnProperty(e)}class hf{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?U1:bf:i?mf:gf).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const u=ge(n);if(!o){let l;if(u&&(l=z1[t]))return l;if(t==="hasOwnProperty")return P1}const s=Reflect.get(n,t,Ze(n)?n:r);if((Bn(t)?ff.has(t):I1(t))||(o||pn(n,"get",t),i))return s;if(Ze(s)){const l=u&&lu(t)?s:s.value;return o&&Ae(l)?Er(l):l}return Ae(s)?o?Er(s):uo(s):s}}class pf extends hf{constructor(n=!1){super(!1,n)}set(n,t,r,o){let i=n[t];const u=ge(n)&&lu(t);if(!this._isShallow){const a=Pt(i);if(!On(r)&&!Pt(r)&&(i=Se(i),r=Se(r)),!u&&Ze(i)&&!Ze(r))return a||(i.value=r),!0}const s=u?Number(t)<n.length:De(n,t),l=Reflect.set(n,t,r,Ze(n)?n:o);return n===Se(o)&&l&&(s?lt(r,i)&&Et(n,"set",t,r):Et(n,"add",t,r)),l}deleteProperty(n,t){const r=De(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&r&&Et(n,"delete",t,void 0),o}has(n,t){const r=Reflect.has(n,t);return(!Bn(t)||!ff.has(t))&&pn(n,"has",t),r}ownKeys(n){return pn(n,"iterate",ge(n)?"length":yr),Reflect.ownKeys(n)}}class R1 extends hf{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const $1=new pf,O1=new R1,B1=new pf(!0);const zs=e=>e,bi=e=>Reflect.getPrototypeOf(e);function M1(e,n,t){return function(...r){const o=this.__v_raw,i=Se(o),u=Wr(i),s=e==="entries"||e===Symbol.iterator&&u,l=e==="keys"&&u,a=o[e](...r),c=t?zs:n?Jr:Jn;return!n&&pn(i,"iterate",l?Ds:yr),Je(Object.create(a),{next(){const{value:d,done:f}=a.next();return f?{value:d,done:f}:{value:s?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function vi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function N1(e,n){const t={get(o){const i=this.__v_raw,u=Se(i),s=Se(o);e||(lt(o,s)&&pn(u,"get",o),pn(u,"get",s));const{has:l}=bi(u),a=n?zs:e?Jr:Jn;if(l.call(u,o))return a(i.get(o));if(l.call(u,s))return a(i.get(s));i!==u&&i.get(o)},get size(){const o=this.__v_raw;return!e&&pn(Se(o),"iterate",yr),o.size},has(o){const i=this.__v_raw,u=Se(i),s=Se(o);return e||(lt(o,s)&&pn(u,"has",o),pn(u,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const u=this,s=u.__v_raw,l=Se(s),a=n?zs:e?Jr:Jn;return!e&&pn(l,"iterate",yr),s.forEach((c,d)=>o.call(i,a(c),a(d),u))}};return Je(t,e?{add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear")}:{add(o){const i=Se(this),u=bi(i),s=Se(o),l=!n&&!On(o)&&!Pt(o)?s:o;return u.has.call(i,l)||lt(o,l)&&u.has.call(i,o)||lt(s,l)&&u.has.call(i,s)||(i.add(l),Et(i,"add",l,l)),this},set(o,i){!n&&!On(i)&&!Pt(i)&&(i=Se(i));const u=Se(this),{has:s,get:l}=bi(u);let a=s.call(u,o);a||(o=Se(o),a=s.call(u,o));const c=l.call(u,o);return u.set(o,i),a?lt(i,c)&&Et(u,"set",o,i):Et(u,"add",o,i),this},delete(o){const i=Se(this),{has:u,get:s}=bi(i);let l=u.call(i,o);l||(o=Se(o),l=u.call(i,o)),s&&s.call(i,o);const a=i.delete(o);return l&&Et(i,"delete",o,void 0),a},clear(){const o=Se(this),i=o.size!==0,u=o.clear();return i&&Et(o,"clear",void 0,void 0),u}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=M1(o,e,n)}),t}function Cl(e,n){const t=N1(e,n);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(De(t,o)&&o in r?t:r,o,i)}const L1={get:Cl(!1,!1)},j1={get:Cl(!1,!0)},H1={get:Cl(!0,!1)};const gf=new WeakMap,mf=new WeakMap,bf=new WeakMap,U1=new WeakMap;function K1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uo(e){return Pt(e)?e:_l(e,!1,$1,L1,gf)}function vf(e){return _l(e,!1,B1,j1,mf)}function Er(e){return _l(e,!0,O1,H1,bf)}function _l(e,n,t,r,o){if(!Ae(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const u=K1(h1(e));if(u===0)return e;const s=new Proxy(e,u===2?r:t);return o.set(e,s),s}function Dt(e){return Pt(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function pu(e){return e?!!e.__v_raw:!1}function Se(e){const n=e&&e.__v_raw;return n?Se(n):e}function Mo(e){return!De(e,"__v_skip")&&Object.isExtensible(e)&&Xd(e,"__v_skip",!0),e}const Jn=e=>Ae(e)?uo(e):e,Jr=e=>Ae(e)?Er(e):e;function Ze(e){return e?e.__v_isRef===!0:!1}function te(e){return yf(e,!1)}function xf(e){return yf(e,!0)}function yf(e,n){return Ze(e)?e:new V1(e,n)}class V1{constructor(n,t){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Se(n),this._value=t?n:Jn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||On(n)||Pt(n);n=r?n:Se(n),lt(n,t)&&(this._rawValue=n,this._value=r?n:Jn(n),this.dep.trigger())}}function Ke(e){return Ze(e)?e.value:e}const W1={get:(e,n,t)=>n==="__v_raw"?e:Ke(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return Ze(o)&&!Ze(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function Cf(e){return Dt(e)?e:new Proxy(e,W1)}function q1(e){const n=ge(e)?new Array(e.length):{};for(const t in e)n[t]=_f(e,t);return n}class G1{constructor(n,t,r){this._object=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Bn(t)?t:String(t),this._raw=Se(n);let o=!0,i=n;if(!ge(n)||Bn(this._key)||!lu(this._key))do o=!pu(i)||On(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let n=this._object[this._key];return this._shallow&&(n=Ke(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&Ze(this._raw[this._key])){const t=this._object[this._key];if(Ze(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return D1(this._raw,this._key)}}class Z1{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ue(e,n,t){return Ze(e)?e:ve(e)?new Z1(e):Ae(e)&&arguments.length>1?_f(e,n,t):te(e)}function _f(e,n,t){return new G1(e,n,t)}class X1{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return uf(this,!0),!0}get value(){const n=this.dep.track();return af(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Y1(e,n,t=!1){let r,o;return ve(e)?r=e:(r=e.get,o=e.set),new X1(r,o,t)}const xi={},Bi=new WeakMap;let hr;function J1(e,n=!1,t=hr){if(t){let r=Bi.get(t);r||Bi.set(t,r=[]),r.push(e)}}function Q1(e,n,t=$e){const{immediate:r,deep:o,once:i,scheduler:u,augmentJob:s,call:l}=t,a=C=>o?C:On(C)||o===!1||o===0?At(C,1):At(C);let c,d,f,h,p=!1,g=!1;if(Ze(e)?(d=()=>e.value,p=On(e)):Dt(e)?(d=()=>a(e),p=!0):ge(e)?(g=!0,p=e.some(C=>Dt(C)||On(C)),d=()=>e.map(C=>{if(Ze(C))return C.value;if(Dt(C))return a(C);if(ve(C))return l?l(C,2):C()})):ve(e)?n?d=l?()=>l(e,2):e:d=()=>{if(f){Ft();try{f()}finally{It()}}const C=hr;hr=c;try{return l?l(e,3,[h]):e(h)}finally{hr=C}}:d=dt,n&&o){const C=d,k=o===!0?1/0:o;d=()=>At(C(),k)}const m=tf(),v=()=>{c.stop(),m&&m.active&&gl(m.effects,c)};if(i&&n){const C=n;n=(...k)=>{const D=C(...k);return v(),D}}let b=g?new Array(e.length).fill(xi):xi;const w=C=>{if(!(!(c.flags&1)||!c.dirty&&!C))if(n){const k=c.run();if(C||o||p||(g?k.some((D,y)=>lt(D,b[y])):lt(k,b))){f&&f();const D=hr;hr=c;try{const y=[k,b===xi?void 0:g&&b[0]===xi?[]:b,h];b=k,l?l(n,3,y):n(...y)}finally{hr=D}}}else c.run()};return s&&s(w),c=new rf(d),c.scheduler=u?()=>u(w,!1):w,h=C=>J1(C,!1,c),f=c.onStop=()=>{const C=Bi.get(c);if(C){if(l)l(C,4);else for(const k of C)k();Bi.delete(c)}},n?r?w(!0):b=c.run():u?u(w.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function At(e,n=1/0,t){if(n<=0||!Ae(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ze(e))At(e.value,n,t);else if(ge(e))for(let r=0;r<e.length;r++)At(e[r],n,t);else if(Wd(e)||Wr(e))e.forEach(r=>{At(r,n,t)});else if(Zd(e)){for(const r in e)At(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&At(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ui(e,n,t,r){try{return r?e(...r):e()}catch(o){gu(o,n,t)}}function Vn(e,n,t,r){if(ve(e)){const o=ui(e,n,t,r);return o&&qd(o)&&o.catch(i=>{gu(i,n,t)}),o}if(ge(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Vn(e[i],n,t,r));return o}}function gu(e,n,t,r=!0){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:u}=n&&n.appContext.config||$e;if(n){let s=n.parent;const l=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,a)===!1)return}s=s.parent}if(i){Ft(),ui(i,null,10,[e,l,a]),It();return}}eg(e,t,o,r,u)}function eg(e,n,t,r=!0,o=!1){if(o)throw e;console.error(e)}const _n=[];let it=-1;const qr=[];let Gt=null,Ur=0;const wf=Promise.resolve();let Mi=null;function si(e){const n=Mi||wf;return e?n.then(this?e.bind(this):e):n}function ng(e){let n=it+1,t=_n.length;for(;n<t;){const r=n+t>>>1,o=_n[r],i=No(o);i<e||i===e&&o.flags&2?n=r+1:t=r}return n}function wl(e){if(!(e.flags&1)){const n=No(e),t=_n[_n.length-1];!t||!(e.flags&2)&&n>=No(t)?_n.push(e):_n.splice(ng(n),0,e),e.flags|=1,kf()}}function kf(){Mi||(Mi=wf.then(Ef))}function tg(e){if(!ge(e))Gt&&e.id===-1?Gt.splice(Ur+1,0,e):e.flags&1||(qr.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)qr.push(e[n]);kf()}function xa(e,n,t=it+1){for(;t<_n.length;t++){const r=_n[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_n.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sf(e){if(qr.length){const n=[...new Set(qr)].sort((t,r)=>No(t)-No(r));if(qr.length=0,Gt){for(let t=0;t<n.length;t++)Gt.push(n[t]);return}for(Gt=n,Ur=0;Ur<Gt.length;Ur++){const t=Gt[Ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gt=null,Ur=0}}const No=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ef(e){try{for(it=0;it<_n.length;it++){const n=_n[it];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ui(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;it<_n.length;it++){const n=_n[it];n&&(n.flags&=-2)}it=-1,_n.length=0,Sf(),Mi=null,(_n.length||qr.length)&&Ef()}}let dn=null,Af=null;function Ni(e){const n=dn;return dn=e,Af=e&&e.type.__scopeId||null,n}function Cn(e,n=dn,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&Ui(-1);const i=Ni(n),u=zt.length;let s;try{s=e(...o)}finally{for(let l=zt.length;l>u;l--)Fl();Ni(i),r._d&&Ui(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function mu(e,n){if(dn===null)return e;const t=_u(dn),r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,u,s,l=$e]=n[o];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&At(u),r.push({dir:i,instance:t,value:u,oldValue:void 0,arg:s,modifiers:l}))}return e}function sr(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let u=0;u<o.length;u++){const s=o[u];i&&(s.oldValue=i[u].value);let l=s.dir[r];l&&(Ft(),Vn(l,t,8,[e.el,s,e,n]),It())}}function je(e,n){if(mn){let t=mn.provides;const r=mn.parent&&mn.parent.provides;r===t&&(t=mn.provides=Object.create(r)),t[e]=n}}function be(e,n,t=!1){const r=Rr();if(r||Cr){let o=Cr?Cr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&ve(n)?n.call(r&&r.proxy):n}}function rg(){return!!(Rr()||Cr)}const og=Symbol.for("v-scx"),ig=()=>be(og);function Rt(e,n){return kl(e,null,n)}function cn(e,n,t){return kl(e,n,t)}function kl(e,n,t=$e){const{immediate:r,deep:o,flush:i,once:u}=t,s=Je({},t),l=n&&r||!n&&i!=="post";let a;if(Uo){if(i==="sync"){const h=ig();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=dt,h.resume=dt,h.pause=dt,h}}const c=mn;s.call=(h,p,g)=>Vn(h,c,p,g);let d=!1;i==="post"?s.scheduler=h=>{vn(h,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(h,p)=>{p?h():wl(h)}),s.augmentJob=h=>{n&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Q1(e,n,s);return Uo&&(a?a.push(f):l&&f()),f}function ug(e,n,t){const r=this.proxy,o=He(e)?e.includes(".")?Tf(r,e):()=>r[e]:e.bind(r,r);let i;ve(n)?i=n:(i=n.handler,t=n);const u=ci(this),s=kl(o,i.bind(r),t);return u(),s}function Tf(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const Vt=new WeakMap,Df=Symbol("_vte"),bu=e=>e.__isTeleport,pr=e=>e&&(e.disabled||e.disabled===""),sg=e=>e&&(e.defer||e.defer===""),ya=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ca=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Fs=(e,n)=>{const t=e&&e.to;return He(t)?n?n(t):null:t},lg={name:"Teleport",__isTeleport:!0,process(e,n,t,r,o,i,u,s,l,a){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:g,createComment:m,parentNode:v}}=a,b=pr(n.props);let{dynamicChildren:w}=n;const C=(y,E,S)=>{y.shapeFlag&16&&c(y.children,E,S,o,i,u,s,l)},k=(y=n)=>{const E=pr(y.props),S=y.target=Fs(y.props,p),z=Is(S,y,g,h);S&&(u!=="svg"&&ya(S)?u="svg":u!=="mathml"&&Ca(S)&&(u="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(S),E||(C(y,S,z),yo(y,!1)))},D=y=>{const E=()=>{if(Vt.get(y)===E){if(Vt.delete(y),pr(y.props)){const S=v(y.el)||t;C(y,S,y.anchor),yo(y,!0)}k(y)}};Vt.set(y,E),vn(E,i)};if(e==null){const y=n.el=g(""),E=n.anchor=g("");if(h(y,t,r),h(E,t,r),sg(n.props)||i&&i.pendingBranch){D(n);return}b&&(C(n,t,E),yo(n,!0)),k()}else{n.el=e.el;const y=n.anchor=e.anchor,E=Vt.get(e);if(E){E.flags|=8,Vt.delete(e),D(n);return}n.targetStart=e.targetStart;const S=n.target=e.target,z=n.targetAnchor=e.targetAnchor,j=pr(e.props),I=j?t:S,q=j?y:z;if(u==="svg"||ya(S)?u="svg":(u==="mathml"||Ca(S))&&(u="mathml"),w?(f(e.dynamicChildren,w,I,o,i,u,s),zl(e,n,!0)):l||d(e,n,I,q,o,i,u,s,!1),b)j?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):yi(n,t,y,a,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const G=Fs(n.props,p);G&&(n.target=G,yi(n,G,null,a,0))}else j&&yi(n,S,z,a,1);yo(n,b)}},remove(e,n,t,{um:r,o:{remove:o}},i){const{shapeFlag:u,children:s,anchor:l,targetStart:a,targetAnchor:c,target:d,props:f}=e,h=pr(f),p=i||!h,g=Vt.get(e);if(g&&(g.flags|=8,Vt.delete(e)),d&&(o(a),o(c)),i&&o(l),!g&&(h||d)&&u&16)for(let m=0;m<s.length;m++){const v=s[m];r(v,n,t,p,!!v.dynamicChildren)}},move:yi,hydrate:ag};function yi(e,n,t,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,n,t);const{el:u,anchor:s,shapeFlag:l,children:a,props:c}=e,d=i===2;if(d&&r(u,n,t),!Vt.has(e)&&(!d||pr(c))&&l&16)for(let f=0;f<a.length;f++)o(a[f],n,t,2);d&&r(s,n,t)}function ag(e,n,t,r,o,i,{o:{nextSibling:u,parentNode:s,querySelector:l,insert:a,createText:c}},d){function f(m,v){let b=v;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")n.targetStart=b;else if(b.data==="teleport anchor"){n.targetAnchor=b,m._lpa=n.targetAnchor&&u(n.targetAnchor);break}}b=u(b)}}function h(m,v){v.anchor=d(u(m),v,s(m),t,r,o,i)}const p=n.target=Fs(n.props,l),g=pr(n.props);if(p){const m=p._lpa||p.firstChild;n.shapeFlag&16&&(g?(h(e,n),f(p,m),n.targetAnchor||Is(p,n,c,a,s(e)===p?e:null)):(n.anchor=u(e),f(p,m),n.targetAnchor||Is(p,n,c,a),d(m&&u(m),n,p,t,r,o,i))),yo(n,g)}else g&&n.shapeFlag&16&&(h(e,n),n.targetStart=e,n.targetAnchor=u(e));return n.anchor&&u(n.anchor)}const cg=lg;function yo(e,n){const t=e.ctx;if(t&&t.ut){let r,o;for(n?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Is(e,n,t,r,o=null){const i=n.targetStart=t(""),u=n.targetAnchor=t("");return i[Df]=u,e&&(r(i,e,o),r(u,e,o)),u}const Kn=Symbol("_leaveCb"),ho=Symbol("_enterCb");function zf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln(()=>{e.isMounted=!0}),qn(()=>{e.isUnmounting=!0}),e}const Hn=[Function,Array],Ff={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},If=e=>{const n=e.subTree;return n.component?If(n.component):n},dg={name:"BaseTransition",props:Ff,setup(e,{slots:n}){const t=Rr(),r=zf();return()=>{const o=n.default&&Sl(n.default(),!0),i=o&&o.length?Pf(o):t.subTree?Xg():void 0;if(!i)return;const u=Se(e),{mode:s}=u;if(r.isLeaving)return Wu(i);const l=Li(i);if(!l)return Wu(i);let a=Lo(l,u,r,t,d=>a=d);l.type!==on&&Ar(l,a);let c=t.subTree&&Li(t.subTree);if(c&&c.type!==on&&!gr(c,l)&&If(t).type!==on){let d=Lo(c,u,r,t);if(Ar(c,d),s==="out-in"&&l.type!==on)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Wu(i);s==="in-out"&&l.type!==on?d.delayLeave=(f,h,p)=>{const g=Rf(r,c);g[String(c.key)]=c,f[Kn]=()=>{h(),f[Kn]=void 0,delete a.delayedLeave,c=void 0},a.delayedLeave=()=>{p(),delete a.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Pf(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==on){n=t;break}}return n}const fg=dg;function Rf(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Lo(e,n,t,r,o){const{appear:i,mode:u,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:v,onAfterAppear:b,onAppearCancelled:w}=n,C=String(e.key),k=Rf(t,e),D=(S,z)=>{S&&Vn(S,r,9,z)},y=(S,z)=>{const j=z[1];D(S,z),ge(S)?S.every(I=>I.length<=1)&&j():S.length<=1&&j()},E={mode:u,persisted:s,beforeEnter(S){let z=l;if(!t.isMounted)if(i)z=m||l;else return;S[Kn]&&S[Kn](!0);const j=k[C];j&&gr(e,j)&&j.el[Kn]&&j.el[Kn](),D(z,[S])},enter(S){if(k[C]===e)return;let z=a,j=c,I=d;if(!t.isMounted)if(i)z=v||a,j=b||c,I=w||d;else return;let q=!1;S[ho]=$=>{q||(q=!0,$?D(I,[S]):D(j,[S]),E.delayedLeave&&E.delayedLeave(),S[ho]=void 0)};const G=S[ho].bind(null,!1);z?y(z,[S,G]):G()},leave(S,z){const j=String(e.key);if(S[ho]&&S[ho](!0),t.isUnmounting)return z();D(f,[S]);let I=!1;S[Kn]=G=>{I||(I=!0,z(),G?D(g,[S]):D(p,[S]),S[Kn]=void 0,k[j]===e&&delete k[j])};const q=S[Kn].bind(null,!1);k[j]=e,h?y(h,[S,q]):q()},clone(S){const z=Lo(S,n,t,r,o);return o&&o(z),z}};return E}function Wu(e){if(vu(e))return e=$t(e),e.children=null,e}function Li(e){if(!vu(e))return bu(e.type)&&e.children?Pf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ve(t.default))return t.default()}}function Ar(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;Ar(bu(t.type)&&Li(t)||t,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Sl(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let u=e[i];const s=t==null?u.key:String(t)+String(u.key!=null?u.key:i);u.type===Le?(u.patchFlag&128&&o++,r=r.concat(Sl(u.children,n,s))):(n||u.type!==on)&&r.push(s!=null?$t(u,{key:s}):u)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function le(e,n){return ve(e)?Je({name:e.name},n,{setup:e}):e}function $f(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _a(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ji=new WeakMap;function To(e,n,t,r,o=!1){if(ge(e)){e.forEach((g,m)=>To(g,n&&(ge(n)?n[m]:n),t,r,o));return}if(Gr(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&To(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?_u(r.component):r.el,u=o?null:i,{i:s,r:l}=e,a=n&&n.r,c=s.refs===$e?s.refs={}:s.refs,d=s.setupState,f=Se(d),h=d===$e?Vd:g=>_a(c,g)?!1:De(f,g),p=(g,m)=>!(m&&_a(c,m));if(a!=null&&a!==l){if(wa(n),He(a))c[a]=null,h(a)&&(d[a]=null);else if(Ze(a)){const g=n;p(a,g.k)&&(a.value=null),g.k&&(c[g.k]=null)}}if(ve(l))ui(l,s,12,[u,c]);else{const g=He(l),m=Ze(l);if(g||m){const v=()=>{if(e.f){const b=g?h(l)?d[l]:c[l]:p()||!e.k?l.value:c[e.k];if(o)ge(b)&&gl(b,i);else if(ge(b))b.includes(i)||b.push(i);else if(g)c[l]=[i],h(l)&&(d[l]=c[l]);else{const w=[i];p(l,e.k)&&(l.value=w),e.k&&(c[e.k]=w)}}else g?(c[l]=u,h(l)&&(d[l]=u)):m&&(p(l,e.k)&&(l.value=u),e.k&&(c[e.k]=u))};if(u){const b=()=>{v(),ji.delete(e)};b.id=-1,ji.set(e,b),vn(b,t)}else wa(e),v()}}}function wa(e){const n=ji.get(e);n&&(n.flags|=8,ji.delete(e))}du().requestIdleCallback;du().cancelIdleCallback;const Gr=e=>!!e.type.__asyncLoader,vu=e=>e.type.__isKeepAlive;function Of(e,n){Mf(e,"a",n)}function Bf(e,n){Mf(e,"da",n)}function Mf(e,n,t=mn){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(xu(n,r,t),t){let o=t.parent;for(;o&&o.parent;)vu(o.parent.vnode)&&hg(r,n,t,o),o=o.parent}}function hg(e,n,t,r){const o=xu(n,e,r,!0);Lf(()=>{gl(r[n],o)},t)}function xu(e,n,t=mn,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...u)=>{Ft();const s=ci(t),l=Vn(n,t,e,u);return s(),It(),l});return r?o.unshift(i):o.push(i),i}}const Bt=e=>(n,t=mn)=>{(!Uo||e==="sp")&&xu(e,(...r)=>n(...r),t)},li=Bt("bm"),Ln=Bt("m"),pg=Bt("bu"),Nf=Bt("u"),qn=Bt("bum"),Lf=Bt("um"),gg=Bt("sp"),mg=Bt("rtg"),bg=Bt("rtc");function vg(e,n=mn){xu("ec",e,n)}const El="components",xg="directives";function jf(e,n){return Al(El,e,!0,n)||e}const Hf=Symbol.for("v-ndc");function yg(e){return He(e)?Al(El,e,!1)||e:e||Hf}function X7(e){return Al(xg,e)}function Al(e,n,t=!0,r=!1){const o=dn||mn;if(o){const i=o.type;if(e===El){const s=om(i,!1);if(s&&(s===n||s===wn(n)||s===cu(wn(n))))return i}const u=ka(o[e]||i[e],n)||ka(o.appContext[e],n);return!u&&r?i:u}}function ka(e,n){return e&&(e[n]||e[wn(n)]||e[cu(wn(n))])}function Cg(e,n,t,r){let o;const i=t,u=ge(e);if(u||He(e)){const s=u&&Dt(e);let l=!1,a=!1;s&&(l=!On(e),a=Pt(e),e=hu(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=n(l?a?Jr(Jn(e[c])):Jn(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i)}else if(Ae(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>n(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const c=s[l];o[l]=n(e[c],c,l,i)}}else o=[];return o}function yu(e,n,t,r,o,i){if(t==null&&(t={}),dn.ce||dn.parent&&Gr(dn.parent)&&dn.parent.ce){const a=t,c=Object.keys(a).length>0;return n!=="default"&&(a.name=n),Ve(),Tr(Le,null,[_e("slot",a,r&&r())],c?-2:64)}let u=e[n];u&&u._c&&(u._d=!1);const s=zt.length;Ve();let l;try{const a=u&&Uf(u(t)),c=t.key||i||a&&a.key;l=Tr(Le,{key:(c&&!Bn(c)?c:`_${n}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&e._===1?64:-2)}catch(a){for(let c=zt.length;c>s;c--)Fl();throw a}finally{u&&u._c&&(u._d=!0)}return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Uf(e){return e.some(n=>Qr(n)?!(n.type===on||n.type===Le&&!Uf(n.children)):!0)?e:null}const Ps=e=>e?l0(e)?_u(e):Ps(e.parent):null,Do=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ps(e.parent),$root:e=>Ps(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vf(e),$forceUpdate:e=>e.f||(e.f=()=>{wl(e.update)}),$nextTick:e=>e.n||(e.n=si.bind(e.proxy)),$watch:e=>ug.bind(e)}),qu=(e,n)=>e!==$e&&!e.__isScriptSetup&&De(e,n),_g={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:u,type:s,appContext:l}=e;if(n[0]!=="$"){const f=u[n];if(f!==void 0)switch(f){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(qu(r,n))return u[n]=1,r[n];if(o!==$e&&De(o,n))return u[n]=2,o[n];if(De(i,n))return u[n]=3,i[n];if(t!==$e&&De(t,n))return u[n]=4,t[n];Rs&&(u[n]=0)}}const a=Do[n];let c,d;if(a)return n==="$attrs"&&pn(e.attrs,"get",""),a(e);if((c=s.__cssModules)&&(c=c[n]))return c;if(t!==$e&&De(t,n))return u[n]=4,t[n];if(d=l.config.globalProperties,De(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return qu(o,n)?(o[n]=t,!0):r!==$e&&De(r,n)?(r[n]=t,!0):De(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,props:i,type:u}},s){let l;return!!(t[s]||e!==$e&&s[0]!=="$"&&De(e,s)||qu(n,s)||De(i,s)||De(r,s)||De(Do,s)||De(o.config.globalProperties,s)||(l=u.__cssModules)&&l[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:De(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Sa(e){return ge(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Rs=!0;function wg(e){const n=Vf(e),t=e.proxy,r=e.ctx;Rs=!1,n.beforeCreate&&Ea(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:u,watch:s,provide:l,inject:a,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:g,deactivated:m,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:C,render:k,renderTracked:D,renderTriggered:y,errorCaptured:E,serverPrefetch:S,expose:z,inheritAttrs:j,components:I,directives:q,filters:G}=n;if(a&&kg(a,r,null),u)for(const H in u){const ee=u[H];ve(ee)&&(r[H]=ee.bind(t))}if(o){const H=o.call(t,t);Ae(H)&&(e.data=uo(H))}if(Rs=!0,i)for(const H in i){const ee=i[H],xe=ve(ee)?ee.bind(t,t):ve(ee.get)?ee.get.bind(t,t):dt,Ce=!ve(ee)&&ve(ee.set)?ee.set.bind(t):dt,ne=R({get:xe,set:Ce});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>ne.value,set:ie=>ne.value=ie})}if(s)for(const H in s)Kf(s[H],r,t,H);if(l){const H=ve(l)?l.call(t):l;Reflect.ownKeys(H).forEach(ee=>{je(ee,H[ee])})}c&&Ea(c,e,"c");function Y(H,ee){ge(ee)?ee.forEach(xe=>H(xe.bind(t))):ee&&H(ee.bind(t))}if(Y(li,d),Y(Ln,f),Y(pg,h),Y(Nf,p),Y(Of,g),Y(Bf,m),Y(vg,E),Y(bg,D),Y(mg,y),Y(qn,b),Y(Lf,C),Y(gg,S),ge(z))if(z.length){const H=e.exposed||(e.exposed={});z.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>t[ee],set:xe=>t[ee]=xe,enumerable:!0})})}else e.exposed||(e.exposed={});k&&e.render===dt&&(e.render=k),j!=null&&(e.inheritAttrs=j),I&&(e.components=I),q&&(e.directives=q),S&&$f(e)}function kg(e,n,t=dt){ge(e)&&(e=$s(e));for(const r in e){const o=e[r];let i;Ae(o)?"default"in o?i=be(o.from||r,o.default,!0):i=be(o.from||r):i=be(o),Ze(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:u=>i.value=u}):n[r]=i}}function Ea(e,n,t){Vn(ge(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Kf(e,n,t,r){let o=r.includes(".")?Tf(t,r):()=>t[r];if(He(e)){const i=n[e];ve(i)&&cn(o,i)}else if(ve(e))cn(o,e.bind(t));else if(Ae(e))if(ge(e))e.forEach(i=>Kf(i,n,t,r));else{const i=ve(e.handler)?e.handler.bind(t):n[e.handler];ve(i)&&cn(o,i,e)}}function Vf(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:u}}=e.appContext,s=i.get(n);let l;return s?l=s:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(a=>Hi(l,a,u,!0)),Hi(l,n,u)),Ae(n)&&i.set(n,l),l}function Hi(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&Hi(e,i,t,!0),o&&o.forEach(u=>Hi(e,u,t,!0));for(const u in n)if(!(r&&u==="expose")){const s=Sg[u]||t&&t[u];e[u]=s?s(e[u],n[u]):n[u]}return e}const Sg={data:Aa,props:Ta,emits:Ta,methods:Co,computed:Co,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:Co,directives:Co,watch:Ag,provide:Aa,inject:Eg};function Aa(e,n){return n?e?function(){return Je(ve(e)?e.call(this,this):e,ve(n)?n.call(this,this):n)}:n:e}function Eg(e,n){return Co($s(e),$s(n))}function $s(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function bn(e,n){return e?[...new Set([].concat(e,n))]:n}function Co(e,n){return e?Je(Object.create(null),e,n):n}function Ta(e,n){return e?ge(e)&&ge(n)?[...new Set([...e,...n])]:Je(Object.create(null),Sa(e),Sa(n??{})):n}function Ag(e,n){if(!e)return n;if(!n)return e;const t=Je(Object.create(null),e);for(const r in n)t[r]=bn(e[r],n[r]);return t}function Wf(){return{app:null,config:{isNativeTag:Vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tg=0;function Dg(e,n){return function(r,o=null){ve(r)||(r=Je({},r)),o!=null&&!Ae(o)&&(o=null);const i=Wf(),u=new WeakSet,s=[];let l=!1;const a=i.app={_uid:Tg++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:um,get config(){return i.config},set config(c){},use(c,...d){return u.has(c)||(c&&ve(c.install)?(u.add(c),c.install(a,...d)):ve(c)&&(u.add(c),c(a,...d))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,d){return d?(i.components[c]=d,a):i.components[c]},directive(c,d){return d?(i.directives[c]=d,a):i.directives[c]},mount(c,d,f){if(!l){const h=a._ceVNode||_e(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,a._container=c,c.__vue_app__=a,_u(h.component)}},onUnmount(c){s.push(c)},unmount(){l&&(Vn(s,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return i.provides[c]=d,a},runWithContext(c){const d=Cr;Cr=a;try{return c()}finally{Cr=d}}};return a}}let Cr=null;const zg=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${wn(n)}Modifiers`]||e[`${Ir(n)}Modifiers`];function Fg(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||$e;let o=t;const i=n.startsWith("update:"),u=i&&zg(r,n.slice(7));u&&(u.trim&&(o=t.map(c=>He(c)?c.trim():c)),u.number&&(o=t.map(m1)));let s,l=r[s=Lu(n)]||r[s=Lu(wn(n))];!l&&i&&(l=r[s=Lu(Ir(n))]),l&&Vn(l,e,6,o);const a=r[s+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Vn(a,e,6,o)}}const Ig=new WeakMap;function qf(e,n,t=!1){const r=t?Ig:n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let u={},s=!1;if(!ve(e)){const l=a=>{const c=qf(a,n,!0);c&&(s=!0,Je(u,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Ae(e)&&r.set(e,null),null):(ge(i)?i.forEach(l=>u[l]=null):Je(u,i),Ae(e)&&r.set(e,u),u)}function Cu(e,n){return!e||!uu(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),De(e,n[0].toLowerCase()+n.slice(1))||De(e,Ir(n))||De(e,n))}function Da(e){const{type:n,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:u,attrs:s,emit:l,render:a,renderCache:c,props:d,data:f,setupState:h,ctx:p,inheritAttrs:g}=e,m=Ni(e);let v,b;try{if(t.shapeFlag&4){const C=o||r,k=C;v=st(a.call(k,C,c,d,h,f,p)),b=s}else{const C=n;v=st(C.length>1?C(d,{attrs:s,slots:u,emit:l}):C(d,null)),b=n.props?s:Pg(s)}}catch(C){zt.length=0,gu(C,e,1),v=_e(on)}let w=v;if(b&&g!==!1){const C=Object.keys(b),{shapeFlag:k}=w;C.length&&k&7&&(i&&C.some(su)&&(b=Rg(b,i)),w=$t(w,b,!1,!0))}if(t.dirs&&(w=$t(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition){const C=bu(w.type)&&Li(w)||w;Ar(C,t.transition)}return v=w,Ni(m),v}const Pg=e=>{let n;for(const t in e)(t==="class"||t==="style"||uu(t))&&((n||(n={}))[t]=e[t]);return n},Rg=(e,n)=>{const t={};for(const r in e)(!su(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function $g(e,n,t){const{props:r,children:o,component:i}=e,{props:u,children:s,patchFlag:l}=n,a=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,u,a):!!u;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(Gf(u,r,f)&&!Cu(a,f))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===u?!1:r?u?za(r,u,a):!0:!!u;return!1}function za(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(Gf(n,e,i)&&!Cu(t,i))return!0}return!1}function Gf(e,n,t){const r=e[t],o=n[t];return t==="style"&&Ae(r)&&Ae(o)?!ml(r,o):r!==o}function Og({vnode:e,parent:n,suspense:t},r){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const Zf={},Xf=()=>Object.create(Zf),Yf=e=>Object.getPrototypeOf(e)===Zf;function Bg(e,n,t,r=!1){const o={},i=Xf();e.propsDefaults=Object.create(null),Jf(e,n,o,i);for(const u in e.propsOptions[0])u in o||(o[u]=void 0);t?e.props=r?o:vf(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Mg(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:u}}=e,s=Se(o),[l]=e.propsOptions;let a=!1;if((r||u>0)&&!(u&16)){if(u&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Cu(e.emitsOptions,f))continue;const h=n[f];if(l)if(De(i,f))h!==i[f]&&(i[f]=h,a=!0);else{const p=wn(f);o[p]=Os(l,s,p,h,e,!1)}else h!==i[f]&&(i[f]=h,a=!0)}}}else{Jf(e,n,o,i)&&(a=!0);let c;for(const d in s)(!n||!De(n,d)&&((c=Ir(d))===d||!De(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(o[d]=Os(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!n||!De(n,d))&&(delete i[d],a=!0)}a&&Et(e.attrs,"set","")}function Jf(e,n,t,r){const[o,i]=e.propsOptions;let u=!1,s;if(n)for(let l in n){if(So(l))continue;const a=n[l];let c;o&&De(o,c=wn(l))?!i||!i.includes(c)?t[c]=a:(s||(s={}))[c]=a:Cu(e.emitsOptions,l)||(!(l in r)||a!==r[l])&&(r[l]=a,u=!0)}if(i){const l=Se(t),a=s||$e;for(let c=0;c<i.length;c++){const d=i[c];t[d]=Os(o,l,d,a[d],e,!De(a,d))}}return u}function Os(e,n,t,r,o,i){const u=e[t];if(u!=null){const s=De(u,"default");if(s&&r===void 0){const l=u.default;if(u.type!==Function&&!u.skipFactory&&ve(l)){const{propsDefaults:a}=o;if(t in a)r=a[t];else{const c=ci(o);r=a[t]=l.call(null,n),c()}}else r=l;o.ce&&o.ce._setProp(t,r)}u[0]&&(i&&!s?r=!1:u[1]&&(r===""||r===Ir(t))&&(r=!0))}return r}const Ng=new WeakMap;function Qf(e,n,t=!1){const r=t?Ng:n.propsCache,o=r.get(e);if(o)return o;const i=e.props,u={},s=[];let l=!1;if(!ve(e)){const c=d=>{l=!0;const[f,h]=Qf(d,n,!0);Je(u,f),h&&s.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Ae(e)&&r.set(e,Vr),Vr;if(ge(i))for(let c=0;c<i.length;c++){const d=wn(i[c]);Fa(d)&&(u[d]=$e)}else if(i)for(const c in i){const d=wn(c);if(Fa(d)){const f=i[c],h=u[d]=ge(f)||ve(f)?{type:f}:Je({},f),p=h.type;let g=!1,m=!0;if(ge(p))for(let v=0;v<p.length;++v){const b=p[v],w=ve(b)&&b.name;if(w==="Boolean"){g=!0;break}else w==="String"&&(m=!1)}else g=ve(p)&&p.name==="Boolean";h[0]=g,h[1]=m,(g||De(h,"default"))&&s.push(d)}}const a=[u,s];return Ae(e)&&r.set(e,a),a}function Fa(e){return e[0]!=="$"&&!So(e)}const Tl=e=>e==="_"||e==="_ctx"||e==="$stable",Dl=e=>ge(e)?e.map(st):[st(e)],Lg=(e,n,t)=>{if(n._n)return n;const r=Cn((...o)=>Dl(n(...o)),t);return r._c=!1,r},e0=(e,n,t)=>{const r=e._ctx;for(const o in e){if(Tl(o))continue;const i=e[o];if(ve(i))n[o]=Lg(o,i,r);else if(i!=null){const u=Dl(i);n[o]=()=>u}}},n0=(e,n)=>{const t=Dl(n);e.slots.default=()=>t},t0=(e,n,t)=>{for(const r in n)(t||!Tl(r))&&(e[r]=n[r])},jg=(e,n,t)=>{const r=e.slots=Xf();if(e.vnode.shapeFlag&32){const o=n._;o?(t0(r,n,t),t&&Xd(r,"_",o,!0)):e0(n,r)}else n&&n0(e,n)},Hg=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,u=$e;if(r.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:t0(o,n,t):(i=!n.$stable,e0(n,o)),u=n}else n&&(n0(e,n),u={default:1});if(i)for(const s in o)!Tl(s)&&u[s]==null&&delete o[s]},vn=qg;function Ug(e){return Kg(e)}function Kg(e,n){const t=du();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:u,createText:s,createComment:l,setText:a,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=dt,insertStaticContent:p}=e,g=(x,_,T,B=null,N=null,O=null,Q=void 0,J=null,Z=!!_.dynamicChildren)=>{if(x===_)return;x&&!gr(x,_)&&(B=P(x),ie(x,N,O,!0),x=null),_.patchFlag===-2&&(Z=!1,_.dynamicChildren=null);const{type:K,ref:fe,shapeFlag:oe}=_;switch(K){case ai:m(x,_,T,B);break;case on:v(x,_,T,B);break;case Zu:x==null&&b(_,T,B,Q);break;case Le:I(x,_,T,B,N,O,Q,J,Z);break;default:oe&1?k(x,_,T,B,N,O,Q,J,Z):oe&6?q(x,_,T,B,N,O,Q,J,Z):(oe&64||oe&128)&&K.process(x,_,T,B,N,O,Q,J,Z,ae)}fe!=null&&N?To(fe,x&&x.ref,O,_||x,!_):fe==null&&x&&x.ref!=null&&To(x.ref,null,O,x,!0)},m=(x,_,T,B)=>{if(x==null)r(_.el=s(_.children),T,B);else{const N=_.el=x.el;_.children!==x.children&&a(N,_.children)}},v=(x,_,T,B)=>{x==null?r(_.el=l(_.children||""),T,B):_.el=x.el},b=(x,_,T,B)=>{[x.el,x.anchor]=p(x.children,_,T,B,x.el,x.anchor)},w=({el:x,anchor:_},T,B)=>{let N;for(;x&&x!==_;)N=f(x),r(x,T,B),x=N;r(_,T,B)},C=({el:x,anchor:_})=>{let T;for(;x&&x!==_;)T=f(x),o(x),x=T;o(_)},k=(x,_,T,B,N,O,Q,J,Z)=>{if(_.type==="svg"?Q="svg":_.type==="math"&&(Q="mathml"),x==null)D(_,T,B,N,O,Q,J,Z);else{const K=x.el&&x.el._isVueCE?x.el:null;try{K&&K._beginPatch(),S(x,_,N,O,Q,J,Z)}finally{K&&K._endPatch()}}},D=(x,_,T,B,N,O,Q,J)=>{let Z,K;const{props:fe,shapeFlag:oe,transition:ce,dirs:de}=x;if(Z=x.el=u(x.type,O,fe&&fe.is,fe),oe&8?c(Z,x.children):oe&16&&E(x.children,Z,null,B,N,Gu(x,O),Q,J),de&&sr(x,null,B,"created"),y(Z,x,x.scopeId,Q,B),fe){for(const ze in fe)ze!=="value"&&!So(ze)&&i(Z,ze,null,fe[ze],O,B);"value"in fe&&i(Z,"value",null,fe.value,O),(K=fe.onVnodeBeforeMount)&&nt(K,B,x)}de&&sr(x,null,B,"beforeMount");const ke=Vg(N,ce);ke&&ce.beforeEnter(Z),r(Z,_,T),((K=fe&&fe.onVnodeMounted)||ke||de)&&vn(()=>{try{K&&nt(K,B,x),ke&&ce.enter(Z),de&&sr(x,null,B,"mounted")}finally{}},N)},y=(x,_,T,B,N)=>{if(T&&h(x,T),B)for(let O=0;O<B.length;O++)h(x,B[O]);if(N){let O=N.subTree;if(_===O||i0(O.type)&&(O.ssContent===_||O.ssFallback===_)){const Q=N.vnode;y(x,Q,Q.scopeId,Q.slotScopeIds,N.parent)}}},E=(x,_,T,B,N,O,Q,J,Z=0)=>{for(let K=Z;K<x.length;K++){const fe=x[K]=J?St(x[K]):st(x[K]);g(null,fe,_,T,B,N,O,Q,J)}},S=(x,_,T,B,N,O,Q)=>{const J=_.el=x.el;let{patchFlag:Z,dynamicChildren:K,dirs:fe}=_;Z|=x.patchFlag&16;const oe=x.props||$e,ce=_.props||$e;let de;if(T&&lr(T,!1),(de=ce.onVnodeBeforeUpdate)&&nt(de,T,_,x),fe&&sr(_,x,T,"beforeUpdate"),T&&lr(T,!0),K&&(!x.dynamicChildren||x.dynamicChildren.length!==K.length)&&(Z=0,Q=!1,K=null),(oe.innerHTML&&ce.innerHTML==null||oe.textContent&&ce.textContent==null)&&c(J,""),K?z(x.dynamicChildren,K,J,T,B,Gu(_,N),O):Q||ee(x,_,J,null,T,B,Gu(_,N),O,!1),Z>0){if(Z&16)j(J,oe,ce,T,N);else if(Z&2&&oe.class!==ce.class&&i(J,"class",null,ce.class,N),Z&4&&i(J,"style",oe.style,ce.style,N),Z&8){const ke=_.dynamicProps;for(let ze=0;ze<ke.length;ze++){const Ee=ke[ze],We=oe[Ee],Qe=ce[Ee];(Qe!==We||Ee==="value")&&i(J,Ee,We,Qe,N,T)}}Z&1&&x.children!==_.children&&c(J,_.children)}else!Q&&K==null&&j(J,oe,ce,T,N);((de=ce.onVnodeUpdated)||fe)&&vn(()=>{de&&nt(de,T,_,x),fe&&sr(_,x,T,"updated")},B)},z=(x,_,T,B,N,O,Q)=>{for(let J=0;J<_.length;J++){const Z=x[J],K=_[J],fe=Z.el&&(Z.type===Le||!gr(Z,K)||Z.shapeFlag&198)?d(Z.el):T;g(Z,K,fe,null,B,N,O,Q,!0)}},j=(x,_,T,B,N)=>{if(_!==T){if(_!==$e)for(const O in _)!So(O)&&!(O in T)&&i(x,O,_[O],null,N,B);for(const O in T){if(So(O))continue;const Q=T[O],J=_[O];Q!==J&&O!=="value"&&i(x,O,J,Q,N,B)}"value"in T&&i(x,"value",_.value,T.value,N)}},I=(x,_,T,B,N,O,Q,J,Z)=>{const K=_.el=x?x.el:s(""),fe=_.anchor=x?x.anchor:s("");let{patchFlag:oe,dynamicChildren:ce,slotScopeIds:de}=_;de&&(J=J?J.concat(de):de),x==null?(r(K,T,B),r(fe,T,B),E(_.children||[],T,fe,N,O,Q,J,Z)):oe>0&&oe&64&&ce&&x.dynamicChildren&&x.dynamicChildren.length===ce.length?(z(x.dynamicChildren,ce,T,N,O,Q,J),(_.key!=null||N&&_===N.subTree)&&zl(x,_,!0)):ee(x,_,T,fe,N,O,Q,J,Z)},q=(x,_,T,B,N,O,Q,J,Z)=>{_.slotScopeIds=J,x==null?_.shapeFlag&512?N.ctx.activate(_,T,B,Q,Z):G(_,T,B,N,O,Q,Z):$(x,_,Z)},G=(x,_,T,B,N,O,Q)=>{const J=x.component=Qg(x,B,N);if(vu(x)&&(J.ctx.renderer=ae),em(J,!1,Q),J.asyncDep){if(N&&N.registerDep(J,Y,Q),!x.el){const Z=J.subTree=_e(on);v(null,Z,_,T),x.placeholder=Z.el}}else Y(J,x,_,T,N,O,Q)},$=(x,_,T)=>{const B=_.component=x.component;if($g(x,_,T))if(B.asyncDep&&!B.asyncResolved){H(B,_,T);return}else B.next=_,B.update();else _.el=x.el,B.vnode=_},Y=(x,_,T,B,N,O,Q)=>{const J=()=>{if(x.isMounted){let{next:oe,bu:ce,u:de,parent:ke,vnode:ze}=x;{const En=r0(x);if(En){oe&&(oe.el=ze.el,H(x,oe,Q)),En.asyncDep.then(()=>{vn(()=>{x.isUnmounted||K()},N)});return}}let Ee=oe,We;lr(x,!1),oe?(oe.el=ze.el,H(x,oe,Q)):oe=ze,ce&&ju(ce),(We=oe.props&&oe.props.onVnodeBeforeUpdate)&&nt(We,ke,oe,ze),lr(x,!0);const Qe=Da(x),Sn=x.subTree;x.subTree=Qe,g(Sn,Qe,d(Sn.el),P(Sn),x,N,O),oe.el=Qe.el,Ee===null&&Og(x,Qe.el),de&&vn(de,N),(We=oe.props&&oe.props.onVnodeUpdated)&&vn(()=>nt(We,ke,oe,ze),N)}else{let oe;const{el:ce,props:de}=_,{bm:ke,m:ze,parent:Ee,root:We,type:Qe}=x,Sn=Gr(_);lr(x,!1),ke&&ju(ke),!Sn&&(oe=de&&de.onVnodeBeforeMount)&&nt(oe,Ee,_),lr(x,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(Qe,x.parent?x.parent.type:void 0);const En=x.subTree=Da(x);g(null,En,T,B,x,N,O),_.el=En.el}if(ze&&vn(ze,N),!Sn&&(oe=de&&de.onVnodeMounted)){const En=_;vn(()=>nt(oe,Ee,En),N)}(_.shapeFlag&256||Ee&&Gr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&x.a&&vn(x.a,N),x.isMounted=!0,_=T=B=null}};x.scope.on();const Z=x.effect=new rf(J);x.scope.off();const K=x.update=Z.run.bind(Z),fe=x.job=Z.runIfDirty.bind(Z);fe.i=x,fe.id=x.uid,Z.scheduler=()=>wl(fe),lr(x,!0),K()},H=(x,_,T)=>{_.component=x;const B=x.vnode.props;x.vnode=_,x.next=null,Mg(x,_.props,B,T),Hg(x,_.children,T),Ft(),xa(x),It()},ee=(x,_,T,B,N,O,Q,J,Z=!1)=>{const K=x&&x.children,fe=x?x.shapeFlag:0,oe=_.children,{patchFlag:ce,shapeFlag:de}=_;if(ce>0){if(ce&128){Ce(K,oe,T,B,N,O,Q,J,Z);return}else if(ce&256){xe(K,oe,T,B,N,O,Q,J,Z);return}}de&8?(fe&16&&Re(K,N,O),oe!==K&&c(T,oe)):fe&16?de&16?Ce(K,oe,T,B,N,O,Q,J,Z):Re(K,N,O,!0):(fe&8&&c(T,""),de&16&&E(oe,T,B,N,O,Q,J,Z))},xe=(x,_,T,B,N,O,Q,J,Z)=>{x=x||Vr,_=_||Vr;const K=x.length,fe=_.length,oe=Math.min(K,fe);let ce;for(ce=0;ce<oe;ce++){const de=_[ce]=Z?St(_[ce]):st(_[ce]);g(x[ce],de,T,null,N,O,Q,J,Z)}K>fe?Re(x,N,O,!0,!1,oe):E(_,T,B,N,O,Q,J,Z,oe)},Ce=(x,_,T,B,N,O,Q,J,Z)=>{let K=0;const fe=_.length;let oe=x.length-1,ce=fe-1;for(;K<=oe&&K<=ce;){const de=x[K],ke=_[K]=Z?St(_[K]):st(_[K]);if(gr(de,ke))g(de,ke,T,null,N,O,Q,J,Z);else break;K++}for(;K<=oe&&K<=ce;){const de=x[oe],ke=_[ce]=Z?St(_[ce]):st(_[ce]);if(gr(de,ke))g(de,ke,T,null,N,O,Q,J,Z);else break;oe--,ce--}if(K>oe){if(K<=ce){const de=ce+1,ke=de<fe?_[de].el:B;for(;K<=ce;)g(null,_[K]=Z?St(_[K]):st(_[K]),T,ke,N,O,Q,J,Z),K++}}else if(K>ce)for(;K<=oe;)ie(x[K],N,O,!0),K++;else{const de=K,ke=K,ze=new Map;for(K=ke;K<=ce;K++){const An=_[K]=Z?St(_[K]):st(_[K]);An.key!=null&&ze.set(An.key,K)}let Ee,We=0;const Qe=ce-ke+1;let Sn=!1,En=0;const Lt=new Array(Qe);for(K=0;K<Qe;K++)Lt[K]=0;for(K=de;K<=oe;K++){const An=x[K];if(We>=Qe){ie(An,N,O,!0);continue}let W;if(An.key!=null)W=ze.get(An.key);else for(Ee=ke;Ee<=ce;Ee++)if(Lt[Ee-ke]===0&&gr(An,_[Ee])){W=Ee;break}W===void 0?ie(An,N,O,!0):(Lt[W-ke]=K+1,W>=En?En=W:Sn=!0,g(An,_[W],T,null,N,O,Q,J,Z),We++)}const xt=Sn?Wg(Lt):Vr;for(Ee=xt.length-1,K=Qe-1;K>=0;K--){const An=ke+K,W=_[An],se=_[An+1],me=An+1<fe?se.el||o0(se):B;Lt[K]===0?g(null,W,T,me,N,O,Q,J,Z):Sn&&(Ee<0||K!==xt[Ee]?ne(W,T,me,2):Ee--)}}},ne=(x,_,T,B,N=null)=>{const{el:O,type:Q,transition:J,children:Z,shapeFlag:K}=x;if(K&6){ne(x.component.subTree,_,T,B);return}if(K&128){x.suspense.move(_,T,B);return}if(K&64){Q.move(x,_,T,ae);return}if(Q===Le){r(O,_,T);for(let oe=0;oe<Z.length;oe++)ne(Z[oe],_,T,B);r(x.anchor,_,T);return}if(Q===Zu){w(x,_,T);return}if(B!==2&&K&1&&J)if(B===0)J.persisted&&!O[Kn]?r(O,_,T):(J.beforeEnter(O),r(O,_,T),vn(()=>J.enter(O),N));else{const{leave:oe,delayLeave:ce,afterLeave:de}=J,ke=()=>{x.ctx.isUnmounted?o(O):r(O,_,T)},ze=()=>{const Ee=O._isLeaving||!!O[Kn];O._isLeaving&&O[Kn](!0),J.persisted&&!Ee?ke():oe(O,()=>{ke(),de&&de()})};ce?ce(O,ke,ze):ze()}else r(O,_,T)},ie=(x,_,T,B=!1,N=!1)=>{const{type:O,props:Q,ref:J,children:Z,dynamicChildren:K,shapeFlag:fe,patchFlag:oe,dirs:ce,cacheIndex:de,memo:ke}=x;if(oe===-2&&(N=!1),J!=null&&(Ft(),To(J,null,T,x,!0),It()),de!=null&&(_.renderCache[de]=void 0),fe&256){_.ctx.deactivate(x);return}const ze=fe&1&&ce,Ee=!Gr(x);let We;if(Ee&&(We=Q&&Q.onVnodeBeforeUnmount)&&nt(We,_,x),fe&6)we(x.component,T,B);else{if(fe&128){x.suspense.unmount(T,B);return}ze&&sr(x,null,_,"beforeUnmount"),fe&64?x.type.remove(x,_,T,ae,B):K&&!K.hasOnce&&(O!==Le||oe>0&&oe&64)?Re(K,_,T,!1,!0):(O===Le&&oe&384||!N&&fe&16)&&Re(Z,_,T),B&&M(x)}const Qe=ke!=null&&de==null;(Ee&&(We=Q&&Q.onVnodeUnmounted)||ze||Qe)&&vn(()=>{We&&nt(We,_,x),ze&&sr(x,null,_,"unmounted"),Qe&&(x.el=null)},T)},M=x=>{const{type:_,el:T,anchor:B,transition:N}=x;if(_===Le){pe(T,B);return}if(_===Zu){C(x);return}const O=()=>{o(T),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(x.shapeFlag&1&&N&&!N.persisted){const{leave:Q,delayLeave:J}=N,Z=()=>Q(T,O);J?J(x.el,O,Z):Z()}else O()},pe=(x,_)=>{let T;for(;x!==_;)T=f(x),o(x),x=T;o(_)},we=(x,_,T)=>{const{bum:B,scope:N,job:O,subTree:Q,um:J,m:Z,a:K}=x;Ia(Z),Ia(K),B&&ju(B),N.stop(),O&&(O.flags|=8,ie(Q,x,_,T)),J&&vn(J,_),vn(()=>{x.isUnmounted=!0},_)},Re=(x,_,T,B=!1,N=!1,O=0)=>{for(let Q=O;Q<x.length;Q++)ie(x[Q],_,T,B,N)},P=x=>{if(x.shapeFlag&6)return P(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const _=f(x.anchor||x.el),T=_&&_[Df];return T?f(T):_};let re=!1;const F=(x,_,T)=>{let B;x==null?_._vnode&&(ie(_._vnode,null,null,!0),B=_._vnode.component):g(_._vnode||null,x,_,null,null,null,T),_._vnode=x,re||(re=!0,xa(B),Sf(),re=!1)},ae={p:g,um:ie,m:ne,r:M,mt:G,mc:E,pc:ee,pbc:z,n:P,o:e};return{render:F,hydrate:void 0,createApp:Dg(F)}}function Gu({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function lr({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Vg(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function zl(e,n,t=!1){const r=e.children,o=n.children;if(ge(r)&&ge(o))for(let i=0;i<r.length;i++){const u=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=St(o[i]),s.el=u.el),!t&&s.patchFlag!==-2&&zl(u,s)),s.type===ai&&(s.patchFlag===-1&&(s=o[i]=St(s)),s.el=u.el),s.type===on&&!s.el&&(s.el=u.el)}}function Wg(e){const n=e.slice(),t=[0];let r,o,i,u,s;const l=e.length;for(r=0;r<l;r++){const a=e[r];if(a!==0){if(o=t[t.length-1],e[o]<a){n[r]=o,t.push(r);continue}for(i=0,u=t.length-1;i<u;)s=i+u>>1,e[t[s]]<a?i=s+1:u=s;a<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,u=t[i-1];i-- >0;)t[i]=u,u=n[u];return t}function r0(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:r0(n)}function Ia(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function o0(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?o0(n.subTree):null}const i0=e=>e.__isSuspense;function qg(e,n){n&&n.pendingBranch?ge(e)?n.effects.push(...e):n.effects.push(e):tg(e)}const Le=Symbol.for("v-fgt"),ai=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Zu=Symbol.for("v-stc"),zt=[];let Rn=null;function Ve(e=!1){zt.push(Rn=e?null:[])}function Fl(){zt.pop(),Rn=zt[zt.length-1]||null}let jo=1;function Ui(e,n=!1){jo+=e,e<0&&Rn&&n&&(Rn.hasOnce=!0)}function u0(e){return e.dynamicChildren=jo>0?Rn||Vr:null,Fl(),jo>0&&Rn&&Rn.push(e),e}function fn(e,n,t,r,o,i){return u0(ue(e,n,t,r,o,i,!0))}function Tr(e,n,t,r,o){return u0(_e(e,n,t,r,o,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function gr(e,n){return e.type===n.type&&e.key===n.key}const s0=({key:e})=>e??null,Ii=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?He(e)||Ze(e)||ve(e)?{i:dn,r:e,k:n,f:!!t}:e:null);function ue(e,n=null,t=null,r=0,o=null,i=e===Le?0:1,u=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&s0(n),ref:n&&Ii(n),scopeId:Af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:dn};return s?(Ki(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=He(t)?8:16),jo>0&&!u&&Rn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rn.push(l),l}const _e=Gg;function Gg(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===Hf)&&(e=on),Qr(e)){const s=$t(e,n,!0);return t&&Ki(s,t),jo>0&&!i&&Rn&&(s.shapeFlag&6?Rn[Rn.indexOf(e)]=s:Rn.push(s)),s.patchFlag=-2,s}if(im(e)&&(e=e.__vccOpts),n){n=Zg(n);let{class:s,style:l}=n;s&&!He(s)&&(n.class=fu(s)),Ae(l)&&(pu(l)&&!ge(l)&&(l=Je({},l)),n.style=ii(l))}const u=He(e)?1:i0(e)?128:bu(e)?64:Ae(e)?4:ve(e)?2:0;return ue(e,n,t,r,o,u,i,!0)}function Zg(e){return e?pu(e)||Yf(e)?Je({},e):e:null}function $t(e,n,t=!1,r=!1){const{props:o,ref:i,patchFlag:u,children:s,transition:l}=e,a=n?Pr(o||{},n):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&s0(a),ref:n&&n.ref?t&&i?ge(i)?i.concat(Ii(n)):[i,Ii(n)]:Ii(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Le?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Ar(c,l.clone(c)),c}function yn(e=" ",n=0){return _e(ai,null,e,n)}function Xg(e="",n=!1){return n?(Ve(),Tr(on,null,e)):_e(on,null,e)}function st(e){return e==null||typeof e=="boolean"?_e(on):ge(e)?_e(Le,null,e.slice()):Qr(e)?St(e):_e(ai,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Ki(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ge(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),Ki(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!Yf(n)?n._ctx=dn:o===3&&dn&&(dn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(ve(n)){if(r&65){Ki(e,{default:n});return}n={default:n,_ctx:dn},t=32}else n=String(n),r&64?(t=16,n=[yn(n)]):t=8;e.children=n,e.shapeFlag|=t}function Pr(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=fu([n.class,r.class]));else if(o==="style")n.style=ii([n.style,r.style]);else if(uu(o)){const i=n[o],u=r[o];u&&i!==u&&!(ge(i)&&i.includes(u))?n[o]=i?[].concat(i,u):u:u==null&&i==null&&!su(o)&&(n[o]=u)}else o!==""&&(n[o]=r[o])}return n}function nt(e,n,t,r=null){Vn(e,n,7,[t,r])}const Yg=Wf();let Jg=0;function Qg(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Yg,i={uid:Jg++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qf(r,o),emitsOptions:qf(r,o),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Fg.bind(null,i),e.ce&&e.ce(i),i}let mn=null;const Rr=()=>mn||dn;let Vi,Ho;{const e=du(),n=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),i=>{o.length>1?o.forEach(u=>u(i)):o[0](i)}};Vi=n("__VUE_INSTANCE_SETTERS__",t=>mn=t),Ho=n("__VUE_SSR_SETTERS__",t=>Uo=t)}const ci=e=>{const n=mn;return Vi(e),e.scope.on(),()=>{e.scope.off(),Vi(n)}},Pa=()=>{mn&&mn.scope.off(),Vi(null)};function l0(e){return e.vnode.shapeFlag&4}let Uo=!1;function em(e,n=!1,t=!1){n&&Ho(n);const{props:r,children:o}=e.vnode,i=l0(e);Bg(e,r,i,n),jg(e,o,t||n);const u=i?nm(e,n):void 0;return n&&Ho(!1),u}function nm(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_g);const{setup:r}=t;if(r){Ft();const o=e.setupContext=r.length>1?rm(e):null,i=ci(e),u=ui(r,e,0,[e.props,o]),s=qd(u);if(It(),i(),(s||e.sp)&&!Gr(e)&&$f(e),s){if(u.then(Pa,Pa),n)return u.then(l=>{Ho(!0);try{Ra(e,l,n)}finally{Ho(!1)}}).catch(l=>{gu(l,e,0)});e.asyncDep=u}else Ra(e,u)}else a0(e)}function Ra(e,n,t){ve(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ae(n)&&(e.setupState=Cf(n)),a0(e)}function a0(e,n,t){const r=e.type;e.render||(e.render=r.render||dt);{const o=ci(e);Ft();try{wg(e)}finally{It(),o()}}}const tm={get(e,n){return pn(e,"get",""),e[n]}};function rm(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,tm),slots:e.slots,emit:e.emit,expose:n}}function _u(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Cf(Mo(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Do)return Do[t](e)},has(n,t){return t in n||t in Do}})):e.proxy}function om(e,n=!0){return ve(e)?e.displayName||e.name:e.name||n&&e.__name}function im(e){return ve(e)&&"__vccOpts"in e}const R=(e,n)=>Y1(e,n,Uo);function A(e,n,t){try{Ui(-1);const r=arguments.length;return r===2?Ae(n)&&!ge(n)?Qr(n)?_e(e,null,[n]):_e(e,n):_e(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Qr(t)&&(t=[t]),_e(e,n,t))}finally{Ui(1)}}const um="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const $a=typeof window<"u"&&window.trustedTypes;if($a)try{Bs=$a.createPolicy("vue",{createHTML:e=>e})}catch{}const c0=Bs?e=>Bs.createHTML(e):e=>e,sm="http://www.w3.org/2000/svg",lm="http://www.w3.org/1998/Math/MathML",kt=typeof document<"u"?document:null,Oa=kt&&kt.createElement("template"),am={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n==="svg"?kt.createElementNS(sm,e):n==="mathml"?kt.createElementNS(lm,e):t?kt.createElement(e,{is:t}):kt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const u=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Oa.innerHTML=c0(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=Oa.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Ht="transition",po="animation",eo=Symbol("_vtc"),d0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},f0=Je({},Ff,d0),cm=e=>(e.displayName="Transition",e.props=f0,e),Dr=cm((e,{slots:n})=>A(fg,h0(e),n)),ar=(e,n=[])=>{ge(e)?e.forEach(t=>t(...n)):e&&e(...n)},Ba=e=>e?ge(e)?e.some(n=>n.length>1):e.length>1:!1;function h0(e){const n={};for(const I in e)I in d0||(n[I]=e[I]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:u=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:a=u,appearToClass:c=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,p=dm(o),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:C,onLeaveCancelled:k,onBeforeAppear:D=v,onAppear:y=b,onAppearCancelled:E=w}=n,S=(I,q,G,$)=>{I._enterCancelled=$,Wt(I,q?c:s),Wt(I,q?a:u),G&&G()},z=(I,q)=>{I._isLeaving=!1,Wt(I,d),Wt(I,h),Wt(I,f),q&&q()},j=I=>(q,G)=>{const $=I?y:b,Y=()=>S(q,I,G);ar($,[q,Y]),Ma(()=>{Wt(q,I?l:i),ot(q,I?c:s),Ba($)||Na(q,r,g,Y)})};return Je(n,{onBeforeEnter(I){ar(v,[I]),ot(I,i),ot(I,u)},onBeforeAppear(I){ar(D,[I]),ot(I,l),ot(I,a)},onEnter:j(!1),onAppear:j(!0),onLeave(I,q){I._isLeaving=!0;const G=()=>z(I,q);ot(I,d),I._enterCancelled?(ot(I,f),Ms(I)):(Ms(I),ot(I,f)),Ma(()=>{I._isLeaving&&(Wt(I,d),ot(I,h),Ba(C)||Na(I,r,m,G))}),ar(C,[I,G])},onEnterCancelled(I){S(I,!1,void 0,!0),ar(w,[I])},onAppearCancelled(I){S(I,!0,void 0,!0),ar(E,[I])},onLeaveCancelled(I){z(I),ar(k,[I])}})}function dm(e){if(e==null)return null;if(Ae(e))return[Xu(e.enter),Xu(e.leave)];{const n=Xu(e);return[n,n]}}function Xu(e){return b1(e)}function ot(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[eo]||(e[eo]=new Set)).add(n)}function Wt(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[eo];t&&(t.delete(n),t.size||(e[eo]=void 0))}function Ma(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fm=0;function Na(e,n,t,r){const o=e._endId=++fm,i=()=>{o===e._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:u,timeout:s,propCount:l}=p0(e,n);if(!u)return r();const a=u+"end";let c=0;const d=()=>{e.removeEventListener(a,f),i()},f=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(a,f)}function p0(e,n){const t=window.getComputedStyle(e),r=p=>(t[p]||"").split(", "),o=r(`${Ht}Delay`),i=r(`${Ht}Duration`),u=La(o,i),s=r(`${po}Delay`),l=r(`${po}Duration`),a=La(s,l);let c=null,d=0,f=0;n===Ht?u>0&&(c=Ht,d=u,f=i.length):n===po?a>0&&(c=po,d=a,f=l.length):(d=Math.max(u,a),c=d>0?u>a?Ht:po:null,f=c?c===Ht?i.length:l.length:0);const h=c===Ht&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ht}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function La(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>ja(t)+ja(e[r])))}function ja(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ms(e){return(e?e.ownerDocument:document).body.offsetHeight}function hm(e,n,t){const r=e[eo];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Wi=Symbol("_vod"),Il=Symbol("_vsh"),pm={name:"show",beforeMount(e,{value:n},{transition:t}){e[Wi]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):go(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),go(e,!0),r.enter(e)):r.leave(e,()=>{go(e,!1)}):go(e,n))},beforeUnmount(e,{value:n}){go(e,n)}};function go(e,n){e.style.display=n?e[Wi]:"none",e[Il]=!n}const gm=Symbol(""),mm=/(?:^|;)\s*display\s*:/;function bm(e,n,t){const r=e.style,o=He(t);let i=!1;if(t&&!o){if(n)if(He(n))for(const u of n.split(";")){const s=u.slice(0,u.indexOf(":")).trim();t[s]==null&&_o(r,s,"")}else for(const u in n)t[u]==null&&_o(r,u,"");for(const u in t){u==="display"&&(i=!0);const s=t[u];s!=null?xm(e,u,!He(n)&&n?n[u]:void 0,s)||_o(r,u,s):_o(r,u,"")}}else if(o){if(n!==t){const u=r[gm];u&&(t+=";"+u),r.cssText=t,i=mm.test(t)}}else n&&e.removeAttribute("style");Wi in e&&(e[Wi]=i?r.display:"",e[Il]&&(r.display="none"))}const Ha=/\s*!important$/;function _o(e,n,t){if(ge(t))t.forEach(r=>_o(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=vm(e,n);Ha.test(t)?e.setProperty(Ir(r),t.replace(Ha,""),"important"):e[r]=t}}const Ua=["Webkit","Moz","ms"],Yu={};function vm(e,n){const t=Yu[n];if(t)return t;let r=wn(n);if(r!=="filter"&&r in e)return Yu[n]=r;r=cu(r);for(let o=0;o<Ua.length;o++){const i=Ua[o]+r;if(i in e)return Yu[n]=i}return n}function xm(e,n,t,r){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&He(r)&&t===r}const Ka="http://www.w3.org/1999/xlink";function Va(e,n,t,r,o,i=w1(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ka,n.slice(6,n.length)):e.setAttributeNS(Ka,n,t):t==null||i&&!Yd(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Bn(t)?String(t):t)}function Wa(e,n,t,r,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?c0(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(s!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let u=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Yd(t):t==null&&s==="string"?(t="",u=!0):s==="number"&&(t=0,u=!0)}try{e[n]=t}catch{}u&&e.removeAttribute(o||n)}function ym(e,n,t,r){e.addEventListener(n,t,r)}function Cm(e,n,t,r){e.removeEventListener(n,t,r)}const qa=Symbol("_vei");function _m(e,n,t,r,o=null){const i=e[qa]||(e[qa]={}),u=i[n];if(r&&u)u.value=r;else{const[s,l]=Sm(n);if(r){const a=i[n]=Tm(r,o);ym(e,s,a,l)}else u&&(Cm(e,s,u,l),i[n]=void 0)}}const wm=/(Once|Passive|Capture)$/,km=/^on:?(?:Once|Passive|Capture)$/;function Sm(e){let n,t;for(;(t=e.match(wm))&&!km.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ir(e.slice(2)),n]}let Ju=0;const Em=Promise.resolve(),Am=()=>Ju||(Em.then(()=>Ju=0),Ju=Date.now());function Tm(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const o=t.value;if(ge(o)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const u=o.slice(),s=[r];for(let l=0;l<u.length&&!r._stopped;l++){const a=u[l];a&&Vn(a,n,5,s)}}else Vn(o,n,5,[r])};return t.value=e,t.attached=Am(),t}const Ga=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dm=(e,n,t,r,o,i)=>{const u=o==="svg";n==="class"?hm(e,r,u):n==="style"?bm(e,t,r):uu(n)?su(n)||_m(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):zm(e,n,r,u))?(Wa(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Va(e,n,r,u,i,n!=="value")):e._isVueCE&&(Fm(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!He(r)))?Wa(e,wn(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Va(e,n,r,u))};function zm(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Ga(n)&&ve(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ga(n)&&He(t)?!1:n in e}function Fm(e,n){const t=e._def.props;if(!t)return!1;const r=wn(n);return Array.isArray(t)?t.some(o=>wn(o)===r):Object.keys(t).some(o=>wn(o)===r)}const g0=new WeakMap,m0=new WeakMap,qi=Symbol("_moveCb"),Za=Symbol("_enterCb"),Im=e=>(delete e.props.mode,e),Pm=Im({name:"TransitionGroup",props:Je({},f0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Rr(),r=zf();let o,i;return Nf(()=>{if(!o.length)return;const u=e.moveClass||`${e.name||"v"}-move`;if(!Mm(o[0].el,t.vnode.el,u)){o=[];return}o.forEach($m),o.forEach(Om);const s=o.filter(Bm);Ms(t.vnode.el),s.forEach(l=>{const a=l.el,c=a.style;ot(a,u),c.transform=c.webkitTransform=c.transitionDuration="";const d=a[qi]=f=>{f&&f.target!==a||(!f||f.propertyName.endsWith("transform"))&&(a.removeEventListener("transitionend",d),a[qi]=null,Wt(a,u))};a.addEventListener("transitionend",d)}),o=[]}),()=>{const u=Se(e),s=h0(u);let l=u.tag||Le;if(o=[],i)for(let a=0;a<i.length;a++){const c=i[a];c.el&&c.el instanceof Element&&!c.el[Il]&&(o.push(c),Ar(c,Lo(c,s,r,t)),g0.set(c,b0(c.el)))}i=n.default?Sl(n.default()):[];for(let a=0;a<i.length;a++){const c=i[a];c.key!=null&&Ar(c,Lo(c,s,r,t))}return _e(l,null,i)}}}),Rm=Pm;function $m(e){const n=e.el;n[qi]&&n[qi](),n[Za]&&n[Za]()}function Om(e){m0.set(e,b0(e.el))}function Bm(e){const n=g0.get(e),t=m0.get(e),r=n.left-t.left,o=n.top-t.top;if(r||o){const i=e.el,u=i.style,s=i.getBoundingClientRect();let l=1,a=1;return i.offsetWidth&&(l=s.width/i.offsetWidth),i.offsetHeight&&(a=s.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(a)||a===0)&&(a=1),Math.abs(l-1)<.01&&(l=1),Math.abs(a-1)<.01&&(a=1),u.transform=u.webkitTransform=`translate(${r/l}px,${o/a}px)`,u.transitionDuration="0s",e}}function b0(e){const n=e.getBoundingClientRect();return{left:n.left,top:n.top}}function Mm(e,n,t){const r=e.cloneNode(),o=e[eo];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:u}=p0(r);return i.removeChild(r),u}const Nm=["ctrl","shift","alt","meta"],Lm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Nm.some(t=>e[`${t}Key`]&&!n.includes(t))},Y7=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(o,...i)=>{for(let u=0;u<n.length;u++){const s=Lm[n[u]];if(s&&s(o,n))return}return e(o,...i)})},jm=Je({patchProp:Dm},am);let Xa;function Hm(){return Xa||(Xa=Ug(jm))}const Um=(...e)=>{const n=Hm().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=Vm(r);if(!o)return;const i=n._component;!ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const u=t(o,!1,Km(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),u},n};function Km(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vm(e){return He(e)?document.querySelector(e):e}function Wm(e){let n=".",t="__",r="--",o;if(e){let p=e.blockPrefix;p&&(n=p),p=e.elementPrefix,p&&(t=p),p=e.modifierPrefix,p&&(r=p)}const i={install(p){o=p.c;const g=p.context;g.bem={},g.bem.b=null,g.bem.els=null}};function u(p){let g,m;return{before(v){g=v.bem.b,m=v.bem.els,v.bem.els=null},after(v){v.bem.b=g,v.bem.els=m},$({context:v,props:b}){return p=typeof p=="string"?p:p({context:v,props:b}),v.bem.b=p,`${(b==null?void 0:b.bPrefix)||n}${v.bem.b}`}}}function s(p){let g;return{before(m){g=m.bem.els},after(m){m.bem.els=g},$({context:m,props:v}){return p=typeof p=="string"?p:p({context:m,props:v}),m.bem.els=p.split(",").map(b=>b.trim()),m.bem.els.map(b=>`${(v==null?void 0:v.bPrefix)||n}${m.bem.b}${t}${b}`).join(", ")}}}function l(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const v=p.split(",").map(C=>C.trim());function b(C){return v.map(k=>`&${(m==null?void 0:m.bPrefix)||n}${g.bem.b}${C!==void 0?`${t}${C}`:""}${r}${k}`).join(", ")}const w=g.bem.els;return w!==null?b(w[0]):b()}}}function a(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const v=g.bem.els;return`&:not(${(m==null?void 0:m.bPrefix)||n}${g.bem.b}${v!==null&&v.length>0?`${t}${v[0]}`:""}${r}${p})`}}}return Object.assign(i,{cB:(...p)=>o(u(p[0]),p[1],p[2]),cE:(...p)=>o(s(p[0]),p[1],p[2]),cM:(...p)=>o(l(p[0]),p[1],p[2]),cNotM:(...p)=>o(a(p[0]),p[1],p[2])}),i}function qm(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const v0=/\s*,(?![^(]*\))\s*/g,Gm=/\s+/g;function Zm(e,n){const t=[];return n.split(v0).forEach(r=>{let o=qm(r);if(o){if(o===1){e.forEach(u=>{t.push(r.replace("&",u))});return}}else{e.forEach(u=>{t.push((u&&u+" ")+r)});return}let i=[r];for(;o--;){const u=[];i.forEach(s=>{e.forEach(l=>{u.push(s.replace("&",l))})}),i=u}i.forEach(u=>t.push(u))}),t}function Xm(e,n){const t=[];return n.split(v0).forEach(r=>{e.forEach(o=>{t.push((o&&o+" ")+r)})}),t}function Ym(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Zm(n,t):n=Xm(n,t))}),n.join(", ").replace(Gm," ")}function Ya(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function wu(e,n){return(n??document.head).querySelector(`style[cssr-id="${e}"]`)}function Jm(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function Ci(e){return e?/^\s*@(s|m)/.test(e):!1}const Qm=/[A-Z]/g;function x0(e){return e.replace(Qm,n=>"-"+n.toLowerCase())}function eb(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${x0(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function nb(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Ja(e,n,t,r){if(!n)return"";const o=nb(n,t,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const u=e?[e+" {"]:[];return i.forEach(s=>{const l=o[s];if(s==="raw"){u.push(`
`+l+`
`);return}s=x0(s),l!=null&&u.push(`  ${s}${eb(l)}`)}),e&&u.push("}"),u.join(`
`)}function Ns(e,n,t){e&&e.forEach(r=>{if(Array.isArray(r))Ns(r,n,t);else if(typeof r=="function"){const o=r(n);Array.isArray(o)?Ns(o,n,t):o&&t(o)}else r&&t(r)})}function y0(e,n,t,r,o){const i=e.$;let u="";if(!i||typeof i=="string")Ci(i)?u=i:n.push(i);else if(typeof i=="function"){const a=i({context:r.context,props:o});Ci(a)?u=a:n.push(a)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")Ci(i.$)?u=i.$:n.push(i.$);else if(i.$){const a=i.$({context:r.context,props:o});Ci(a)?u=a:n.push(a)}const s=Ym(n),l=Ja(s,e.props,r,o);u?t.push(`${u} {`):l.length&&t.push(l),e.children&&Ns(e.children,{context:r.context,props:o},a=>{if(typeof a=="string"){const c=Ja(s,{raw:a},r,o);t.push(c)}else y0(a,n,t,r,o)}),n.pop(),u&&t.push("}"),i&&i.after&&i.after(r.context)}function tb(e,n,t){const r=[];return y0(e,[],r,n,t),r.join(`

`)}function Ko(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function rb(e,n,t,r){const{els:o}=n;if(t===void 0)o.forEach(Ya),n.els=[];else{const i=wu(t,r);i&&o.includes(i)&&(Ya(i),n.els=o.filter(u=>u!==i))}}function Qa(e,n){e.push(n)}function ob(e,n,t,r,o,i,u,s,l){let a;if(t===void 0&&(a=n.render(r),t=Ko(a)),l){l.adapter(t,a??n.render(r));return}s===void 0&&(s=document.head);const c=wu(t,s);if(c!==null&&!i)return c;const d=c??Jm(t);if(a===void 0&&(a=n.render(r)),d.textContent=a,c!==null)return c;if(u){const f=s.querySelector(`meta[name="${u}"]`);if(f)return s.insertBefore(d,f),Qa(n.els,d),d}return o?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),Qa(n.els,d),d}function ib(e){return tb(this,this.instance,e)}function ub(e={}){const{id:n,ssr:t,props:r,head:o=!1,force:i=!1,anchorMetaName:u,parent:s}=e;return ob(this.instance,this,n,r,o,i,u,s,t)}function sb(e={}){const{id:n,parent:t}=e;rb(this.instance,this,n,t)}const _i=function(e,n,t,r){return{instance:e,$:n,props:t,children:r,els:[],render:ib,mount:ub,unmount:sb}},lb=function(e,n,t,r){return Array.isArray(n)?_i(e,{$:null},null,n):Array.isArray(t)?_i(e,n,null,t):Array.isArray(r)?_i(e,n,t,r):_i(e,n,t,null)};function C0(e={}){const n={c:(...t)=>lb(n,...t),use:(t,...r)=>t.install(n,...r),find:wu,context:{},config:e};return n}function ab(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return wu(e)!==null}const cb="n",Vo=`.${cb}-`,db="__",fb="--",_0=C0(),w0=Wm({blockPrefix:Vo,elementPrefix:db,modifierPrefix:fb});_0.use(w0);const{c:L,find:J7}=_0,{cB:V,cE:U,cM:X,cNotM:ln}=w0;function k0(e){return L(({props:{bPrefix:n}})=>`${n||Vo}modal, ${n||Vo}drawer`,[e])}function S0(e){return L(({props:{bPrefix:n}})=>`${n||Vo}popover`,[e])}function hb(e){return L(({props:{bPrefix:n}})=>`&${n||Vo}modal`,e)}const pb=(...e)=>L(">",[V(...e)]);function Ie(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}let Gi=[];const E0=new WeakMap;function gb(){Gi.forEach(e=>e(...E0.get(e))),Gi=[]}function mb(e,...n){E0.set(e,n),!Gi.includes(e)&&Gi.push(e)===1&&requestAnimationFrame(gb)}function ec(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Zi(e){return e.composedPath()[0]||null}function nc(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function Q7(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function mr(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}const tc={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function bb(e,n,t){n/=100,t/=100;let r=(o,i=(o+e/60)%6)=>t-t*n*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function vb(e,n,t){n/=100,t/=100;let r=n*Math.min(t,1-t),o=(i,u=(i+e/30)%12)=>t-r*Math.max(Math.min(u-3,9-u,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}const pt="^\\s*",gt="\\s*$",nr="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",$n="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",br="([0-9A-Fa-f])",vr="([0-9A-Fa-f]{2})",A0=new RegExp(`${pt}hsl\\s*\\(${$n},${nr},${nr}\\)${gt}`),T0=new RegExp(`${pt}hsv\\s*\\(${$n},${nr},${nr}\\)${gt}`),D0=new RegExp(`${pt}hsla\\s*\\(${$n},${nr},${nr},${$n}\\)${gt}`),z0=new RegExp(`${pt}hsva\\s*\\(${$n},${nr},${nr},${$n}\\)${gt}`),xb=new RegExp(`${pt}rgb\\s*\\(${$n},${$n},${$n}\\)${gt}`),yb=new RegExp(`${pt}rgba\\s*\\(${$n},${$n},${$n},${$n}\\)${gt}`),Cb=new RegExp(`${pt}#${br}${br}${br}${gt}`),_b=new RegExp(`${pt}#${vr}${vr}${vr}${gt}`),wb=new RegExp(`${pt}#${br}${br}${br}${br}${gt}`),kb=new RegExp(`${pt}#${vr}${vr}${vr}${vr}${gt}`);function Dn(e){return parseInt(e,16)}function Sb(e){try{let n;if(n=D0.exec(e))return[Xi(n[1]),Jt(n[5]),Jt(n[9]),wr(n[13])];if(n=A0.exec(e))return[Xi(n[1]),Jt(n[5]),Jt(n[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(n){throw n}}function Eb(e){try{let n;if(n=z0.exec(e))return[Xi(n[1]),Jt(n[5]),Jt(n[9]),wr(n[13])];if(n=T0.exec(e))return[Xi(n[1]),Jt(n[5]),Jt(n[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(n){throw n}}function zr(e){try{let n;if(n=_b.exec(e))return[Dn(n[1]),Dn(n[2]),Dn(n[3]),1];if(n=xb.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),1];if(n=yb.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),wr(n[13])];if(n=Cb.exec(e))return[Dn(n[1]+n[1]),Dn(n[2]+n[2]),Dn(n[3]+n[3]),1];if(n=kb.exec(e))return[Dn(n[1]),Dn(n[2]),Dn(n[3]),wr(Dn(n[4])/255)];if(n=wb.exec(e))return[Dn(n[1]+n[1]),Dn(n[2]+n[2]),Dn(n[3]+n[3]),wr(Dn(n[4]+n[4])/255)];if(e in tc)return zr(tc[e]);if(A0.test(e)||D0.test(e)){const[t,r,o,i]=Sb(e);return[...vb(t,r,o),i]}else if(T0.test(e)||z0.test(e)){const[t,r,o,i]=Eb(e);return[...bb(t,r,o),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function Ab(e){return e>1?1:e<0?0:e}function Ls(e,n,t,r){return`rgba(${gn(e)}, ${gn(n)}, ${gn(t)}, ${Ab(r)})`}function Qu(e,n,t,r,o){return gn((e*n*(1-r)+t*r)/o)}function _r(e,n){Array.isArray(e)||(e=zr(e)),Array.isArray(n)||(n=zr(n));const t=e[3],r=n[3],o=wr(t+r-t*r);return Ls(Qu(e[0],t,n[0],r,o),Qu(e[1],t,n[1],r,o),Qu(e[2],t,n[2],r,o),o)}function Fe(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:zr(e);return typeof n.alpha=="number"?Ls(t,r,o,n.alpha):Ls(t,r,o,i)}function wi(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:zr(e),{lightness:u=1,alpha:s=1}=n;return Tb([t*u,r*u,o*u,i*s])}function wr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Xi(e){const n=Math.round(Number(e));return n>=360||n<0?0:n}function gn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function Jt(e){const n=Math.round(Number(e));return n>100?100:n<0?0:n}function Tb(e){const[n,t,r]=e;return 3 in e?`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, ${wr(e[3])})`:`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, 1)`}function F0(e=8){return Math.random().toString(16).slice(2,2+e)}function Pi(e){return e.composedPath()[0]}const Db={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function zb(e,n,t){if(e==="mousemoveoutside"){const r=o=>{n.contains(Pi(o))||t(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=u=>{r=!n.contains(Pi(u))},i=u=>{r&&(n.contains(Pi(u))||t(u))};return{mousedown:o,mouseup:i,touchstart:o,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function I0(e,n,t){const r=Db[e];let o=r.get(n);o===void 0&&r.set(n,o=new WeakMap);let i=o.get(t);return i===void 0&&o.set(t,i=zb(e,n,t)),i}function Fb(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=I0(e,n,t);return Object.keys(o).forEach(i=>{un(i,document,o[i],r)}),!0}return!1}function Ib(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=I0(e,n,t);return Object.keys(o).forEach(i=>{Ge(i,document,o[i],r)}),!0}return!1}function Pb(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function r(){e.set(this,!0),n.set(this,!0)}function o(y,E,S){const z=y[E];return y[E]=function(){return S.apply(y,arguments),z.apply(y,arguments)},y}function i(y,E){y[E]=Event.prototype[E]}const u=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var y;return(y=u.get(this))!==null&&y!==void 0?y:null}function a(y,E){s!==void 0&&Object.defineProperty(y,"currentTarget",{configurable:!0,enumerable:!0,get:E??s.get})}const c={bubble:{},capture:{}},d={};function f(){const y=function(E){const{type:S,eventPhase:z,bubbles:j}=E,I=Pi(E);if(z===2)return;const q=z===1?"capture":"bubble";let G=I;const $=[];for(;G===null&&(G=window),$.push(G),G!==window;)G=G.parentNode||null;const Y=c.capture[S],H=c.bubble[S];if(o(E,"stopPropagation",t),o(E,"stopImmediatePropagation",r),a(E,l),q==="capture"){if(Y===void 0)return;for(let ee=$.length-1;ee>=0&&!e.has(E);--ee){const xe=$[ee],Ce=Y.get(xe);if(Ce!==void 0){u.set(E,xe);for(const ne of Ce){if(n.has(E))break;ne(E)}}if(ee===0&&!j&&H!==void 0){const ne=H.get(xe);if(ne!==void 0)for(const ie of ne){if(n.has(E))break;ie(E)}}}}else if(q==="bubble"){if(H===void 0)return;for(let ee=0;ee<$.length&&!e.has(E);++ee){const xe=$[ee],Ce=H.get(xe);if(Ce!==void 0){u.set(E,xe);for(const ne of Ce){if(n.has(E))break;ne(E)}}}}i(E,"stopPropagation"),i(E,"stopImmediatePropagation"),a(E)};return y.displayName="evtdUnifiedHandler",y}function h(){const y=function(E){const{type:S,eventPhase:z}=E;if(z!==2)return;const j=d[S];j!==void 0&&j.forEach(I=>I(E))};return y.displayName="evtdUnifiedWindowEventHandler",y}const p=f(),g=h();function m(y,E){const S=c[y];return S[E]===void 0&&(S[E]=new Map,window.addEventListener(E,p,y==="capture")),S[E]}function v(y){return d[y]===void 0&&(d[y]=new Set,window.addEventListener(y,g)),d[y]}function b(y,E){let S=y.get(E);return S===void 0&&y.set(E,S=new Set),S}function w(y,E,S,z){const j=c[E][S];if(j!==void 0){const I=j.get(y);if(I!==void 0&&I.has(z))return!0}return!1}function C(y,E){const S=d[y];return!!(S!==void 0&&S.has(E))}function k(y,E,S,z){let j;if(typeof z=="object"&&z.once===!0?j=Y=>{D(y,E,j,z),S(Y)}:j=S,Fb(y,E,j,z))return;const q=z===!0||typeof z=="object"&&z.capture===!0?"capture":"bubble",G=m(q,y),$=b(G,E);if($.has(j)||$.add(j),E===window){const Y=v(y);Y.has(j)||Y.add(j)}}function D(y,E,S,z){if(Ib(y,E,S,z))return;const I=z===!0||typeof z=="object"&&z.capture===!0,q=I?"capture":"bubble",G=m(q,y),$=b(G,E);if(E===window&&!w(E,I?"bubble":"capture",y,S)&&C(y,S)){const H=d[y];H.delete(S),H.size===0&&(window.removeEventListener(y,g),d[y]=void 0)}$.has(S)&&$.delete(S),$.size===0&&G.delete(E),G.size===0&&(window.removeEventListener(y,p,q==="capture"),c[q][y]=void 0)}return{on:k,off:D}}const{on:un,off:Ge}=Pb();function Rb(e){const n=te(!!e.value);if(n.value)return Er(n);const t=cn(e,r=>{r&&(n.value=!0,t())});return Er(n)}function Fn(e){const n=R(e),t=te(n.value);return cn(n,r=>{t.value=r}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(r){e.set(r)}}}function $b(){return Rr()!==null}const Ob=typeof window<"u";let Zr,zo;const Bb=()=>{var e,n;Zr=Ob?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,zo=!1,Zr!==void 0?Zr.then(()=>{zo=!0}):zo=!0};Bb();function Mb(e){if(zo)return;let n=!1;Ln(()=>{zo||Zr==null||Zr.then(()=>{n||e()})}),qn(()=>{n=!0})}function Wo(e,n){return cn(e,t=>{t!==void 0&&(n.value=t)}),R(()=>e.value===void 0?n.value:e.value)}function P0(){const e=te(!1);return Ln(()=>{e.value=!0}),Er(e)}function R0(e,n){return R(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const Nb=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Lb(){return Nb}function jb(e={},n){const t=uo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(a=>{if(a!==l.key)return;const c=r[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},u=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(a=>{if(a!==l.key)return;const c=o[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},s=()=>{(n===void 0||n.value)&&(un("keydown",document,i),un("keyup",document,u)),n!==void 0&&cn(n,l=>{l?(un("keydown",document,i),un("keyup",document,u)):(Ge("keydown",document,i),Ge("keyup",document,u))})};return $b()?(li(s),qn(()=>{(n===void 0||n.value)&&(Ge("keydown",document,i),Ge("keyup",document,u))})):s(),Er(t)}function e9(e){return e}const n9="n-internal-select-menu",Hb="n-internal-select-menu-body",Pl="n-drawer-body",Rl="n-modal-body",ku="n-popover-body",$0="__disabled__";function no(e){const n=be(Rl,null),t=be(Pl,null),r=be(ku,null),o=be(Hb,null),i=te();if(typeof document<"u"){i.value=document.fullscreenElement;const u=()=>{i.value=document.fullscreenElement};Ln(()=>{un("fullscreenchange",document,u)}),qn(()=>{Ge("fullscreenchange",document,u)})}return Fn(()=>{var u;const{to:s}=e;return s!==void 0?s===!1?$0:s===!0?i.value||"body":s:n!=null&&n.value?(u=n.value.$el)!==null&&u!==void 0?u:n.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:s??(i.value||"body")})}no.tdkey=$0;no.propTo={type:[String,Object,Boolean],default:void 0};function Ub(e,n,t){const r=te(e.value);let o=null;return cn(e,i=>{o!==null&&window.clearTimeout(o),i===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const O0=typeof document<"u"&&typeof window<"u";let rc=!1;function Kb(){if(O0&&window.CSS&&!rc&&(rc=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function $l(e){const n={isDeactivated:!1};let t=!1;return Of(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Bf(()=>{n.isDeactivated=!0,t||(t=!0)}),n}function js(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return r()}function Hs(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){Hs(r,n,t);return}if(r.type===Le){if(r.children===null)return;Array.isArray(r.children)&&Hs(r.children,n,t)}else(r.type!==on||!n)&&t.push(r)}}),t}function oc(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const o=Hs(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Ut=null;function B0(){if(Ut===null&&(Ut=document.getElementById("v-binder-view-measurer"),Ut===null)){Ut=document.createElement("div"),Ut.id="v-binder-view-measurer";const{style:e}=Ut;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Ut)}return Ut.getBoundingClientRect()}function Vb(e,n){const t=B0();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function es(e){const n=e.getBoundingClientRect(),t=B0();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Wb(e){return e.nodeType===9?null:e.parentNode}function M0(e){if(e===null)return null;const n=Wb(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:r,overflowY:o}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+o+r))return n}return M0(n)}const N0=le({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;je("VBinder",(n=Rr())===null||n===void 0?void 0:n.proxy);const t=be("VBinder",null),r=te(null),o=v=>{r.value=v,t&&e.syncTargetWithParent&&t.setTargetRef(v)};let i=[];const u=()=>{let v=r.value;for(;v=M0(v),v!==null;)i.push(v);for(const b of i)un("scroll",b,d,!0)},s=()=>{for(const v of i)Ge("scroll",v,d,!0);i=[]},l=new Set,a=v=>{l.size===0&&u(),l.has(v)||l.add(v)},c=v=>{l.has(v)&&l.delete(v),l.size===0&&s()},d=()=>{mb(f)},f=()=>{l.forEach(v=>v())},h=new Set,p=v=>{h.size===0&&un("resize",window,m),h.has(v)||h.add(v)},g=v=>{h.has(v)&&h.delete(v),h.size===0&&Ge("resize",window,m)},m=()=>{h.forEach(v=>v())};return qn(()=>{Ge("resize",window,m),s()}),{targetRef:r,setTargetRef:o,addScrollListener:a,removeScrollListener:c,addResizeListener:p,removeResizeListener:g}},render(){return js("binder",this.$slots)}}),L0=le({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=be("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?mu(oc("follower",this.$slots),[[n]]):oc("follower",this.$slots)}}),Nr="@@mmoContext",qb={mounted(e,{value:n}){e[Nr]={handler:void 0},typeof n=="function"&&(e[Nr].handler=n,un("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Nr];typeof n=="function"?t.handler?t.handler!==n&&(Ge("mousemoveoutside",e,t.handler),t.handler=n,un("mousemoveoutside",e,n)):(e[Nr].handler=n,un("mousemoveoutside",e,n)):t.handler&&(Ge("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Nr];n&&Ge("mousemoveoutside",e,n),e[Nr].handler=void 0}},Lr="@@coContext",ic={mounted(e,{value:n,modifiers:t}){e[Lr]={handler:void 0},typeof n=="function"&&(e[Lr].handler=n,un("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const r=e[Lr];typeof n=="function"?r.handler?r.handler!==n&&(Ge("clickoutside",e,r.handler,{capture:t.capture}),r.handler=n,un("clickoutside",e,n,{capture:t.capture})):(e[Lr].handler=n,un("clickoutside",e,n,{capture:t.capture})):r.handler&&(Ge("clickoutside",e,r.handler,{capture:t.capture}),r.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[Lr];t&&Ge("clickoutside",e,t,{capture:n.capture}),e[Lr].handler=void 0}};function Gb(e,n){console.error(`[vdirs/${e}]: ${n}`)}class Zb{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:r}=this;if(t!==void 0){n.style.zIndex=`${t}`,r.delete(n);return}const{nextZIndex:o}=this;r.has(n)&&r.get(n)+1===this.nextZIndex||(n.style.zIndex=`${o}`,r.set(n,o),this.nextZIndex=o+1,this.squashState())}unregister(n,t){const{elementZIndex:r}=this;r.has(n)?r.delete(n):t===void 0&&Gb("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,r)=>t[1]-r[1]),this.nextZIndex=2e3,n.forEach(t=>{const r=t[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}const ns=new Zb,jr="@@ziContext",j0={mounted(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t;e[jr]={enabled:!!o,initialized:!1},o&&(ns.ensureZIndex(e,r),e[jr].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t,i=e[jr].enabled;o&&!i&&(ns.ensureZIndex(e,r),e[jr].initialized=!0),e[jr].enabled=!!o},unmounted(e,n){if(!e[jr].initialized)return;const{value:t={}}=n,{zIndex:r}=t;ns.unregister(e,r)}},Xb="@css-render/vue3-ssr";function Yb(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function Jb(e,n,t){const{styles:r,ids:o}=t;o.has(e)||r!==null&&(o.add(e),r.push(Yb(e,n)))}const Qb=typeof document<"u";function so(){if(Qb)return;const e=be(Xb,null);if(e!==null)return{adapter:(n,t)=>Jb(n,t,e),context:e}}function uc(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:wo}=C0(),H0="vueuc-style";function sc(e){var n;return typeof e=="string"?document.querySelector(e):(n=e())!==null&&n!==void 0?n:null}const ev=le({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Rb(Ue(e,"show")),mergedTo:R(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?js("lazy-teleport",this.$slots):A(cg,{disabled:this.disabled,to:this.mergedTo},js("lazy-teleport",this.$slots)):null}}),ki={top:"bottom",bottom:"top",left:"right",right:"left"},lc={start:"end",center:"center",end:"start"},ts={top:"height",bottom:"height",left:"width",right:"width"},nv={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},tv={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},rv={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},ac={top:!0,bottom:!1,left:!0,right:!1},cc={top:"end",bottom:"start",left:"end",right:"start"};function ov(e,n,t,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[u,s]=e.split("-");let l=s??"center",a={top:0,left:0};const c=(h,p,g)=>{let m=0,v=0;const b=t[h]-n[p]-n[h];return b>0&&r&&(g?v=ac[p]?b:-b:m=ac[p]?b:-b),{left:m,top:v}},d=u==="left"||u==="right";if(l!=="center"){const h=rv[e],p=ki[h],g=ts[h];if(t[g]>n[g]){if(n[h]+n[g]<t[g]){const m=(t[g]-n[g])/2;n[h]<m||n[p]<m?n[h]<n[p]?(l=lc[s],a=c(g,p,d)):a=c(g,h,d):l="center"}}else t[g]<n[g]&&n[p]<0&&n[h]>n[p]&&(l=lc[s])}else{const h=u==="bottom"||u==="top"?"left":"top",p=ki[h],g=ts[h],m=(t[g]-n[g])/2;(n[h]<m||n[p]<m)&&(n[h]>n[p]?(l=cc[h],a=c(g,h,d)):(l=cc[p],a=c(g,p,d)))}let f=u;return n[u]<t[ts[u]]&&n[u]<n[ki[u]]&&(f=ki[u]),{placement:l!=="center"?`${f}-${l}`:f,left:a.left,top:a.top}}function iv(e,n){return n?tv[e]:nv[e]}function uv(e,n,t,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const sv=wo([wo(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),wo(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[wo("> *",{pointerEvents:"all"})])]),U0=le({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=be("VBinder"),t=Fn(()=>e.enabled!==void 0?e.enabled:e.show),r=te(null),o=te(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&n.addScrollListener(l),f.includes("resize")&&n.addResizeListener(l)},u=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Ln(()=>{t.value&&(l(),i())});const s=so();sv.mount({id:"vueuc/binder",head:!0,anchorMetaName:H0,ssr:s}),qn(()=>{u()}),Mb(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const f=r.value;if(f===null)return;const h=n.targetRef,{x:p,y:g,overlap:m}=e,v=p!==void 0&&g!==void 0?Vb(p,g):es(h);f.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:b,minWidth:w,placement:C,internalShift:k,flip:D}=e;f.setAttribute("v-placement",C),m?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:y}=f;b==="target"?y.width=`${v.width}px`:b!==void 0?y.width=b:y.width="",w==="target"?y.minWidth=`${v.width}px`:w!==void 0?y.minWidth=w:y.minWidth="";const E=es(f),S=es(o.value),{left:z,top:j,placement:I}=ov(C,v,E,k,D,m),q=iv(I,m),{left:G,top:$,transform:Y}=uv(I,S,v,j,z,m);f.setAttribute("v-placement",I),f.style.setProperty("--v-offset-left",`${Math.round(z)}px`),f.style.setProperty("--v-offset-top",`${Math.round(j)}px`),f.style.transform=`translateX(${G}) translateY(${$}) ${Y}`,f.style.setProperty("--v-transform-origin",q),f.style.transformOrigin=q};cn(t,f=>{f?(i(),a()):u()});const a=()=>{si().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{cn(Ue(e,f),l)}),["teleportDisabled"].forEach(f=>{cn(Ue(e,f),a)}),cn(Ue(e,"syncTrigger"),f=>{f.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),f.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const c=P0(),d=Fn(()=>{const{to:f}=e;if(f!==void 0)return f;c.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:o,followerRef:r,mergedTo:d,syncPosition:l}},render(){return A(ev,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=A("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[A("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?mu(t,[[j0,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var kr=[],lv=function(){return kr.some(function(e){return e.activeTargets.length>0})},av=function(){return kr.some(function(e){return e.skippedTargets.length>0})},dc="ResizeObserver loop completed with undelivered notifications.",cv=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:dc}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=dc),window.dispatchEvent(e)},qo;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(qo||(qo={}));var Sr=function(e){return Object.freeze(e)},dv=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Sr(this)}return e}(),K0=function(){function e(n,t,r,o){return this.x=n,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Sr(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,r=n.y,o=n.top,i=n.right,u=n.bottom,s=n.left,l=n.width,a=n.height;return{x:t,y:r,top:o,right:i,bottom:u,left:s,width:l,height:a}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),Ol=function(e){return e instanceof SVGElement&&"getBBox"in e},V0=function(e){if(Ol(e)){var n=e.getBBox(),t=n.width,r=n.height;return!t&&!r}var o=e,i=o.offsetWidth,u=o.offsetHeight;return!(i||u||e.getClientRects().length)},fc=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},fv=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Fo=typeof window<"u"?window:{},Si=new WeakMap,hc=/auto|scroll/,hv=/^tb|vertical/,pv=/msie|trident/i.test(Fo.navigator&&Fo.navigator.userAgent),tt=function(e){return parseFloat(e||"0")},Xr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new dv((t?n:e)||0,(t?e:n)||0)},pc=Sr({devicePixelContentBoxSize:Xr(),borderBoxSize:Xr(),contentBoxSize:Xr(),contentRect:new K0(0,0,0,0)}),W0=function(e,n){if(n===void 0&&(n=!1),Si.has(e)&&!n)return Si.get(e);if(V0(e))return Si.set(e,pc),pc;var t=getComputedStyle(e),r=Ol(e)&&e.ownerSVGElement&&e.getBBox(),o=!pv&&t.boxSizing==="border-box",i=hv.test(t.writingMode||""),u=!r&&hc.test(t.overflowY||""),s=!r&&hc.test(t.overflowX||""),l=r?0:tt(t.paddingTop),a=r?0:tt(t.paddingRight),c=r?0:tt(t.paddingBottom),d=r?0:tt(t.paddingLeft),f=r?0:tt(t.borderTopWidth),h=r?0:tt(t.borderRightWidth),p=r?0:tt(t.borderBottomWidth),g=r?0:tt(t.borderLeftWidth),m=d+a,v=l+c,b=g+h,w=f+p,C=s?e.offsetHeight-w-e.clientHeight:0,k=u?e.offsetWidth-b-e.clientWidth:0,D=o?m+b:0,y=o?v+w:0,E=r?r.width:tt(t.width)-D-k,S=r?r.height:tt(t.height)-y-C,z=E+m+k+b,j=S+v+C+w,I=Sr({devicePixelContentBoxSize:Xr(Math.round(E*devicePixelRatio),Math.round(S*devicePixelRatio),i),borderBoxSize:Xr(z,j,i),contentBoxSize:Xr(E,S,i),contentRect:new K0(d,l,E,S)});return Si.set(e,I),I},q0=function(e,n,t){var r=W0(e,t),o=r.borderBoxSize,i=r.contentBoxSize,u=r.devicePixelContentBoxSize;switch(n){case qo.DEVICE_PIXEL_CONTENT_BOX:return u;case qo.BORDER_BOX:return o;default:return i}},gv=function(){function e(n){var t=W0(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Sr([t.borderBoxSize]),this.contentBoxSize=Sr([t.contentBoxSize]),this.devicePixelContentBoxSize=Sr([t.devicePixelContentBoxSize])}return e}(),G0=function(e){if(V0(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},mv=function(){var e=1/0,n=[];kr.forEach(function(u){if(u.activeTargets.length!==0){var s=[];u.activeTargets.forEach(function(a){var c=new gv(a.target),d=G0(a.target);s.push(c),a.lastReportedSize=q0(a.target,a.observedBox),d<e&&(e=d)}),n.push(function(){u.callback.call(u.observer,s,u.observer)}),u.activeTargets.splice(0,u.activeTargets.length)}});for(var t=0,r=n;t<r.length;t++){var o=r[t];o()}return e},gc=function(e){kr.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(G0(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},bv=function(){var e=0;for(gc(e);lv();)e=mv(),gc(e);return av()&&cv(),e>0},rs,Z0=[],vv=function(){return Z0.splice(0).forEach(function(e){return e()})},xv=function(e){if(!rs){var n=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return vv()}).observe(t,r),rs=function(){t.textContent="".concat(n?n--:n++)}}Z0.push(e),rs()},yv=function(e){xv(function(){requestAnimationFrame(e)})},Ri=0,Cv=function(){return!!Ri},_v=250,wv={attributes:!0,characterData:!0,childList:!0,subtree:!0},mc=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],bc=function(e){return e===void 0&&(e=0),Date.now()+e},os=!1,kv=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=_v),!os){os=!0;var r=bc(n);yv(function(){var o=!1;try{o=bv()}finally{if(os=!1,n=r-bc(),!Cv())return;o?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,wv)};document.body?t():Fo.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),mc.forEach(function(t){return Fo.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),mc.forEach(function(t){return Fo.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),Us=new kv,vc=function(e){!Ri&&e>0&&Us.start(),Ri+=e,!Ri&&Us.stop()},Sv=function(e){return!Ol(e)&&!fv(e)&&getComputedStyle(e).display==="inline"},Ev=function(){function e(n,t){this.target=n,this.observedBox=t||qo.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=q0(this.target,this.observedBox,!0);return Sv(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),Av=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),Ei=new WeakMap,xc=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Ai=function(){function e(){}return e.connect=function(n,t){var r=new Av(n,t);Ei.set(n,r)},e.observe=function(n,t,r){var o=Ei.get(n),i=o.observationTargets.length===0;xc(o.observationTargets,t)<0&&(i&&kr.push(o),o.observationTargets.push(new Ev(t,r&&r.box)),vc(1),Us.schedule())},e.unobserve=function(n,t){var r=Ei.get(n),o=xc(r.observationTargets,t),i=r.observationTargets.length===1;o>=0&&(i&&kr.splice(kr.indexOf(r),1),r.observationTargets.splice(o,1),vc(-1))},e.disconnect=function(n){var t=this,r=Ei.get(n);r.observationTargets.slice().forEach(function(o){return t.unobserve(n,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Tv=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ai.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!fc(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ai.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!fc(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ai.unobserve(this,n)},e.prototype.disconnect=function(){Ai.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Dv{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Tv)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const yc=new Dv,Yi=le({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=Rr().proxy;function r(o){const{onResize:i}=e;i!==void 0&&i(o)}Ln(()=>{const o=t.$el;if(o===void 0){uc("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){uc("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(yc.registerHandler(o.nextElementSibling,r),n=!0)}),qn(()=>{n&&yc.unregisterHandler(t.$el.nextElementSibling)})},render(){return yu(this.$slots,"default")}}),Ct="v-hidden",zv=wo("[v-hidden]",{display:"none!important"}),Fv=le({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=te(null),r=te(null);function o(u){const{value:s}=t,{getCounter:l,getTail:a}=e;let c;if(l!==void 0?c=l():c=r.value,!s||!c)return;c.hasAttribute(Ct)&&c.removeAttribute(Ct);const{children:d}=s;if(u.showAllItemsBeforeCalculate)for(const w of d)w.hasAttribute(Ct)&&w.removeAttribute(Ct);const f=s.offsetWidth,h=[],p=n.tail?a==null?void 0:a():null;let g=p?p.offsetWidth:0,m=!1;const v=s.children.length-(n.tail?1:0);for(let w=0;w<v-1;++w){if(w<0)continue;const C=d[w];if(m){C.hasAttribute(Ct)||C.setAttribute(Ct,"");continue}else C.hasAttribute(Ct)&&C.removeAttribute(Ct);const k=C.offsetWidth;if(g+=k,h[w]=k,g>f){const{updateCounter:D}=e;for(let y=w;y>=0;--y){const E=v-1-y;D!==void 0?D(E):c.textContent=`${E}`;const S=c.offsetWidth;if(g-=h[y],g+S<=f||y===0){m=!0,w=y-1,p&&(w===-1?(p.style.maxWidth=`${f-S}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:z}=e;z&&z(E);break}}}}const{onUpdateOverflow:b}=e;m?b!==void 0&&b(!0):(b!==void 0&&b(!1),c.setAttribute(Ct,""))}const i=so();return zv.mount({id:"vueuc/overflow",head:!0,anchorMetaName:H0,ssr:i}),Ln(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:o}},render(){const{$slots:e}=this;return si(()=>this.sync({showAllItemsBeforeCalculate:!1})),A("div",{class:"v-overflow",ref:"selfRef"},[yu(e,"default"),e.counter?e.counter():A("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function X0(e){return e instanceof HTMLElement}function Y0(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(X0(t)&&(Q0(t)||Y0(t)))return!0}return!1}function J0(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(X0(t)&&(Q0(t)||J0(t)))return!0}return!1}function Q0(e){if(!Iv(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Iv(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"SELECT":case"TEXTAREA":return!0;default:return!1}}let mo=[];const Pv=le({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=F0(),t=te(null),r=te(null);let o=!1,i=!1;const u=typeof document>"u"?null:document.activeElement;function s(){return mo[mo.length-1]===n}function l(m){var v;m.code==="Escape"&&s()&&((v=e.onEsc)===null||v===void 0||v.call(e,m))}Ln(()=>{cn(()=>e.active,m=>{m?(d(),un("keydown",document,l)):(Ge("keydown",document,l),o&&f())},{immediate:!0})}),qn(()=>{Ge("keydown",document,l),o&&f()});function a(m){if(!i&&s()){const v=c();if(v===null||v.contains(Zi(m)))return;h("first")}}function c(){const m=t.value;if(m===null)return null;let v=m;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function d(){var m;if(!e.disabled){if(mo.push(n),e.autoFocus){const{initialFocusTo:v}=e;v===void 0?h("first"):(m=sc(v))===null||m===void 0||m.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",a,!0)}}function f(){var m;if(e.disabled||(document.removeEventListener("focus",a,!0),mo=mo.filter(b=>b!==n),s()))return;const{finalFocusTo:v}=e;v!==void 0?(m=sc(v))===null||m===void 0||m.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&u instanceof HTMLElement&&(i=!0,u.focus({preventScroll:!0}),i=!1)}function h(m){if(s()&&e.active){const v=t.value,b=r.value;if(v!==null&&b!==null){const w=c();if(w==null||w===b){i=!0,v.focus({preventScroll:!0}),i=!1;return}i=!0;const C=m==="first"?Y0(w):J0(w);i=!1,C||(i=!0,v.focus({preventScroll:!0}),i=!1)}}}function p(m){if(i)return;const v=c();v!==null&&(m.relatedTarget!==null&&v.contains(m.relatedTarget)?h("last"):h("first"))}function g(m){i||(m.relatedTarget!==null&&m.relatedTarget===t.value?h("last"):h("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:g}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return A(Le,null,[A("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),A("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function Ks(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const Rv=/^(\d|\.)+$/,Cc=/(\d|\.)+/;function er(e,{c:n=1,offset:t=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+t)*n;return o===0?"0":`${o}px`}else if(typeof e=="string")if(Rv.test(e)){const o=(Number(e)+t)*n;return r?o===0?"0":`${o}px`:`${o}`}else{const o=Cc.exec(e);return o?e.replace(Cc,String((Number(o[0])+t)*n)):e}return e}function _c(e){const{left:n,right:t,top:r,bottom:o}=mr(e);return`${r} ${n} ${o} ${t}`}let is;function $v(){return is===void 0&&(is=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),is}function Go(e,n){console.error(`[naive/${e}]: ${n}`)}function eh(e,n){throw new Error(`[naive/${e}]: ${n}`)}function Ye(e,...n){if(Array.isArray(e))e.forEach(t=>Ye(t,...n));else return e(...n)}function Ov(e){return n=>{n?e.value=n.$el:e.value=null}}function Vs(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){Vs(r,n,t);return}if(r.type===Le){if(r.children===null)return;Array.isArray(r.children)&&Vs(r.children,n,t)}else{if(r.type===on&&n)return;t.push(r)}}}),t}function Bv(e,n="default",t=void 0){const r=e[n];if(!r)return Go("getFirstSlotVNode",`slot[${n}] is empty`),null;const o=Vs(r(t));return o.length===1?o[0]:(Go("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function Io(e,n=[],t){const r={};return n.forEach(o=>{r[o]=e[o]}),Object.assign(r,t)}function Bl(e){return Object.keys(e)}function ft(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?yn(e):typeof e=="number"?yn(String(e)):null}function Xn(e){return e.some(n=>Qr(n)?!(n.type===on||n.type===Le&&!Xn(n.children)):!0)?e:null}function Ws(e,n){return e&&Xn(e())||n()}function t9(e,n,t){return e&&Xn(e(n))||t(n)}function zn(e,n){const t=e&&Xn(e());return n(t||null)}function wc(e){return!(e&&Xn(e()))}const kc=le({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),Ot="n-config-provider",qs="n";function kn(e={},n={defaultBordered:!0}){const t=be(Ot,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:R(()=>{var r,o;const{bordered:i}=e;return i!==void 0?i:(o=(r=t==null?void 0:t.mergedBorderedRef.value)!==null&&r!==void 0?r:n.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:t?t.mergedClsPrefixRef:xf(qs),namespaceRef:R(()=>t==null?void 0:t.mergedNamespaceRef.value)}}function Gn(e,n,t,r){t||eh("useThemeClass","cssVarsRef is not passed");const o=be(Ot,null),i=o==null?void 0:o.mergedThemeHashRef,u=o==null?void 0:o.styleMountTarget,s=te(""),l=so();let a;const c=`__${e}`,d=()=>{let f=c;const h=n?n.value:void 0,p=i==null?void 0:i.value;p&&(f+=`-${p}`),h&&(f+=`-${h}`);const{themeOverrides:g,builtinThemeOverrides:m}=r;g&&(f+=`-${Ko(JSON.stringify(g))}`),m&&(f+=`-${Ko(JSON.stringify(m))}`),s.value=f,a=()=>{const v=t.value;let b="";for(const w in v)b+=`${w}: ${v[w]};`;L(`.${f}`,b).mount({id:f,ssr:l,parent:u}),a=void 0}};return Rt(()=>{d()}),{themeClass:s,onRender:()=>{a==null||a()}}}var nh=typeof global=="object"&&global&&global.Object===Object&&global,Mv=typeof self=="object"&&self&&self.Object===Object&&self,mt=nh||Mv||Function("return this")(),tr=mt.Symbol,th=Object.prototype,Nv=th.hasOwnProperty,Lv=th.toString,bo=tr?tr.toStringTag:void 0;function jv(e){var n=Nv.call(e,bo),t=e[bo];try{e[bo]=void 0;var r=!0}catch{}var o=Lv.call(e);return r&&(n?e[bo]=t:delete e[bo]),o}var Hv=Object.prototype,Uv=Hv.toString;function Kv(e){return Uv.call(e)}var Vv="[object Null]",Wv="[object Undefined]",Sc=tr?tr.toStringTag:void 0;function $r(e){return e==null?e===void 0?Wv:Vv:Sc&&Sc in Object(e)?jv(e):Kv(e)}function rr(e){return e!=null&&typeof e=="object"}var qv="[object Symbol]";function Ml(e){return typeof e=="symbol"||rr(e)&&$r(e)==qv}function rh(e,n){for(var t=-1,r=e==null?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o}var Wn=Array.isArray,Ec=tr?tr.prototype:void 0,Ac=Ec?Ec.toString:void 0;function oh(e){if(typeof e=="string")return e;if(Wn(e))return rh(e,oh)+"";if(Ml(e))return Ac?Ac.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function ir(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Nl(e){return e}var Gv="[object AsyncFunction]",Zv="[object Function]",Xv="[object GeneratorFunction]",Yv="[object Proxy]";function Ll(e){if(!ir(e))return!1;var n=$r(e);return n==Zv||n==Xv||n==Gv||n==Yv}var us=mt["__core-js_shared__"],Tc=function(){var e=/[^.]+$/.exec(us&&us.keys&&us.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Jv(e){return!!Tc&&Tc in e}var Qv=Function.prototype,e2=Qv.toString;function Or(e){if(e!=null){try{return e2.call(e)}catch{}try{return e+""}catch{}}return""}var n2=/[\\^$.*+?()[\]{}|]/g,t2=/^\[object .+?Constructor\]$/,r2=Function.prototype,o2=Object.prototype,i2=r2.toString,u2=o2.hasOwnProperty,s2=RegExp("^"+i2.call(u2).replace(n2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l2(e){if(!ir(e)||Jv(e))return!1;var n=Ll(e)?s2:t2;return n.test(Or(e))}function a2(e,n){return e==null?void 0:e[n]}function Br(e,n){var t=a2(e,n);return l2(t)?t:void 0}var Gs=Br(mt,"WeakMap"),Dc=Object.create,c2=function(){function e(){}return function(n){if(!ir(n))return{};if(Dc)return Dc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function d2(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function f2(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var h2=800,p2=16,g2=Date.now;function m2(e){var n=0,t=0;return function(){var r=g2(),o=p2-(r-t);if(t=r,o>0){if(++n>=h2)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function b2(e){return function(){return e}}var Ji=function(){try{var e=Br(Object,"defineProperty");return e({},"",{}),e}catch{}}(),v2=Ji?function(e,n){return Ji(e,"toString",{configurable:!0,enumerable:!1,value:b2(n),writable:!0})}:Nl,x2=m2(v2),y2=9007199254740991,C2=/^(?:0|[1-9]\d*)$/;function jl(e,n){var t=typeof e;return n=n??y2,!!n&&(t=="number"||t!="symbol"&&C2.test(e))&&e>-1&&e%1==0&&e<n}function Hl(e,n,t){n=="__proto__"&&Ji?Ji(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function di(e,n){return e===n||e!==e&&n!==n}var _2=Object.prototype,w2=_2.hasOwnProperty;function k2(e,n,t){var r=e[n];(!(w2.call(e,n)&&di(r,t))||t===void 0&&!(n in e))&&Hl(e,n,t)}function S2(e,n,t,r){var o=!t;t||(t={});for(var i=-1,u=n.length;++i<u;){var s=n[i],l=void 0;l===void 0&&(l=e[s]),o?Hl(t,s,l):k2(t,s,l)}return t}var zc=Math.max;function E2(e,n,t){return n=zc(n===void 0?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=zc(r.length-n,0),u=Array(i);++o<i;)u[o]=r[n+o];o=-1;for(var s=Array(n+1);++o<n;)s[o]=r[o];return s[n]=t(u),d2(e,this,s)}}function A2(e,n){return x2(E2(e,n,Nl),e+"")}var T2=9007199254740991;function Ul(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=T2}function lo(e){return e!=null&&Ul(e.length)&&!Ll(e)}function D2(e,n,t){if(!ir(t))return!1;var r=typeof n;return(r=="number"?lo(t)&&jl(n,t.length):r=="string"&&n in t)?di(t[n],e):!1}function z2(e){return A2(function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,u=o>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,u&&D2(t[0],t[1],u)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var s=t[r];s&&e(n,s,r,i)}return n})}var F2=Object.prototype;function Kl(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||F2;return e===t}function I2(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var P2="[object Arguments]";function Fc(e){return rr(e)&&$r(e)==P2}var ih=Object.prototype,R2=ih.hasOwnProperty,$2=ih.propertyIsEnumerable,Qi=Fc(function(){return arguments}())?Fc:function(e){return rr(e)&&R2.call(e,"callee")&&!$2.call(e,"callee")};function O2(){return!1}var uh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ic=uh&&typeof module=="object"&&module&&!module.nodeType&&module,B2=Ic&&Ic.exports===uh,Pc=B2?mt.Buffer:void 0,M2=Pc?Pc.isBuffer:void 0,eu=M2||O2,N2="[object Arguments]",L2="[object Array]",j2="[object Boolean]",H2="[object Date]",U2="[object Error]",K2="[object Function]",V2="[object Map]",W2="[object Number]",q2="[object Object]",G2="[object RegExp]",Z2="[object Set]",X2="[object String]",Y2="[object WeakMap]",J2="[object ArrayBuffer]",Q2="[object DataView]",ex="[object Float32Array]",nx="[object Float64Array]",tx="[object Int8Array]",rx="[object Int16Array]",ox="[object Int32Array]",ix="[object Uint8Array]",ux="[object Uint8ClampedArray]",sx="[object Uint16Array]",lx="[object Uint32Array]",Ne={};Ne[ex]=Ne[nx]=Ne[tx]=Ne[rx]=Ne[ox]=Ne[ix]=Ne[ux]=Ne[sx]=Ne[lx]=!0;Ne[N2]=Ne[L2]=Ne[J2]=Ne[j2]=Ne[Q2]=Ne[H2]=Ne[U2]=Ne[K2]=Ne[V2]=Ne[W2]=Ne[q2]=Ne[G2]=Ne[Z2]=Ne[X2]=Ne[Y2]=!1;function ax(e){return rr(e)&&Ul(e.length)&&!!Ne[$r(e)]}function cx(e){return function(n){return e(n)}}var sh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Po=sh&&typeof module=="object"&&module&&!module.nodeType&&module,dx=Po&&Po.exports===sh,ss=dx&&nh.process,Rc=function(){try{var e=Po&&Po.require&&Po.require("util").types;return e||ss&&ss.binding&&ss.binding("util")}catch{}}(),$c=Rc&&Rc.isTypedArray,Vl=$c?cx($c):ax,fx=Object.prototype,hx=fx.hasOwnProperty;function lh(e,n){var t=Wn(e),r=!t&&Qi(e),o=!t&&!r&&eu(e),i=!t&&!r&&!o&&Vl(e),u=t||r||o||i,s=u?I2(e.length,String):[],l=s.length;for(var a in e)(n||hx.call(e,a))&&!(u&&(a=="length"||o&&(a=="offset"||a=="parent")||i&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||jl(a,l)))&&s.push(a);return s}function ah(e,n){return function(t){return e(n(t))}}var px=ah(Object.keys,Object),gx=Object.prototype,mx=gx.hasOwnProperty;function bx(e){if(!Kl(e))return px(e);var n=[];for(var t in Object(e))mx.call(e,t)&&t!="constructor"&&n.push(t);return n}function Wl(e){return lo(e)?lh(e):bx(e)}function vx(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var xx=Object.prototype,yx=xx.hasOwnProperty;function Cx(e){if(!ir(e))return vx(e);var n=Kl(e),t=[];for(var r in e)r=="constructor"&&(n||!yx.call(e,r))||t.push(r);return t}function ch(e){return lo(e)?lh(e,!0):Cx(e)}var _x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wx=/^\w*$/;function ql(e,n){if(Wn(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Ml(e)?!0:wx.test(e)||!_x.test(e)||n!=null&&e in Object(n)}var Zo=Br(Object,"create");function kx(){this.__data__=Zo?Zo(null):{},this.size=0}function Sx(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var Ex="__lodash_hash_undefined__",Ax=Object.prototype,Tx=Ax.hasOwnProperty;function Dx(e){var n=this.__data__;if(Zo){var t=n[e];return t===Ex?void 0:t}return Tx.call(n,e)?n[e]:void 0}var zx=Object.prototype,Fx=zx.hasOwnProperty;function Ix(e){var n=this.__data__;return Zo?n[e]!==void 0:Fx.call(n,e)}var Px="__lodash_hash_undefined__";function Rx(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Zo&&n===void 0?Px:n,this}function Fr(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Fr.prototype.clear=kx;Fr.prototype.delete=Sx;Fr.prototype.get=Dx;Fr.prototype.has=Ix;Fr.prototype.set=Rx;function $x(){this.__data__=[],this.size=0}function Su(e,n){for(var t=e.length;t--;)if(di(e[t][0],n))return t;return-1}var Ox=Array.prototype,Bx=Ox.splice;function Mx(e){var n=this.__data__,t=Su(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Bx.call(n,t,1),--this.size,!0}function Nx(e){var n=this.__data__,t=Su(n,e);return t<0?void 0:n[t][1]}function Lx(e){return Su(this.__data__,e)>-1}function jx(e,n){var t=this.__data__,r=Su(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Mt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Mt.prototype.clear=$x;Mt.prototype.delete=Mx;Mt.prototype.get=Nx;Mt.prototype.has=Lx;Mt.prototype.set=jx;var Xo=Br(mt,"Map");function Hx(){this.size=0,this.__data__={hash:new Fr,map:new(Xo||Mt),string:new Fr}}function Ux(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Eu(e,n){var t=e.__data__;return Ux(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Kx(e){var n=Eu(this,e).delete(e);return this.size-=n?1:0,n}function Vx(e){return Eu(this,e).get(e)}function Wx(e){return Eu(this,e).has(e)}function qx(e,n){var t=Eu(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Nt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Nt.prototype.clear=Hx;Nt.prototype.delete=Kx;Nt.prototype.get=Vx;Nt.prototype.has=Wx;Nt.prototype.set=qx;var Gx="Expected a function";function Gl(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Gx);var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var u=e.apply(this,r);return t.cache=i.set(o,u)||i,u};return t.cache=new(Gl.Cache||Nt),t}Gl.Cache=Nt;var Zx=500;function Xx(e){var n=Gl(e,function(r){return t.size===Zx&&t.clear(),r}),t=n.cache;return n}var Yx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jx=/\\(\\)?/g,Qx=Xx(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Yx,function(t,r,o,i){n.push(o?i.replace(Jx,"$1"):r||t)}),n});function dh(e){return e==null?"":oh(e)}function fh(e,n){return Wn(e)?e:ql(e,n)?[e]:Qx(dh(e))}function Au(e){if(typeof e=="string"||Ml(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function hh(e,n){n=fh(n,e);for(var t=0,r=n.length;e!=null&&t<r;)e=e[Au(n[t++])];return t&&t==r?e:void 0}function e3(e,n,t){var r=e==null?void 0:hh(e,n);return r===void 0?t:r}function n3(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var ph=ah(Object.getPrototypeOf,Object),t3="[object Object]",r3=Function.prototype,o3=Object.prototype,gh=r3.toString,i3=o3.hasOwnProperty,u3=gh.call(Object);function s3(e){if(!rr(e)||$r(e)!=t3)return!1;var n=ph(e);if(n===null)return!0;var t=i3.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&gh.call(t)==u3}function l3(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),t=t>o?o:t,t<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+n];return i}function a3(e,n,t){var r=e.length;return t=t===void 0?r:t,!n&&t>=r?e:l3(e,n,t)}var c3="\\ud800-\\udfff",d3="\\u0300-\\u036f",f3="\\ufe20-\\ufe2f",h3="\\u20d0-\\u20ff",p3=d3+f3+h3,g3="\\ufe0e\\ufe0f",m3="\\u200d",b3=RegExp("["+m3+c3+p3+g3+"]");function mh(e){return b3.test(e)}function v3(e){return e.split("")}var bh="\\ud800-\\udfff",x3="\\u0300-\\u036f",y3="\\ufe20-\\ufe2f",C3="\\u20d0-\\u20ff",_3=x3+y3+C3,w3="\\ufe0e\\ufe0f",k3="["+bh+"]",Zs="["+_3+"]",Xs="\\ud83c[\\udffb-\\udfff]",S3="(?:"+Zs+"|"+Xs+")",vh="[^"+bh+"]",xh="(?:\\ud83c[\\udde6-\\uddff]){2}",yh="[\\ud800-\\udbff][\\udc00-\\udfff]",E3="\\u200d",Ch=S3+"?",_h="["+w3+"]?",A3="(?:"+E3+"(?:"+[vh,xh,yh].join("|")+")"+_h+Ch+")*",T3=_h+Ch+A3,D3="(?:"+[vh+Zs+"?",Zs,xh,yh,k3].join("|")+")",z3=RegExp(Xs+"(?="+Xs+")|"+D3+T3,"g");function F3(e){return e.match(z3)||[]}function I3(e){return mh(e)?F3(e):v3(e)}function P3(e){return function(n){n=dh(n);var t=mh(n)?I3(n):void 0,r=t?t[0]:n.charAt(0),o=t?a3(t,1).join(""):n.slice(1);return r[e]()+o}}var R3=P3("toUpperCase");function $3(){this.__data__=new Mt,this.size=0}function O3(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function B3(e){return this.__data__.get(e)}function M3(e){return this.__data__.has(e)}var N3=200;function L3(e,n){var t=this.__data__;if(t instanceof Mt){var r=t.__data__;if(!Xo||r.length<N3-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Nt(r)}return t.set(e,n),this.size=t.size,this}function ht(e){var n=this.__data__=new Mt(e);this.size=n.size}ht.prototype.clear=$3;ht.prototype.delete=O3;ht.prototype.get=B3;ht.prototype.has=M3;ht.prototype.set=L3;var wh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oc=wh&&typeof module=="object"&&module&&!module.nodeType&&module,j3=Oc&&Oc.exports===wh,Bc=j3?mt.Buffer:void 0;Bc&&Bc.allocUnsafe;function H3(e,n){return e.slice()}function U3(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var u=e[t];n(u,t,e)&&(i[o++]=u)}return i}function K3(){return[]}var V3=Object.prototype,W3=V3.propertyIsEnumerable,Mc=Object.getOwnPropertySymbols,q3=Mc?function(e){return e==null?[]:(e=Object(e),U3(Mc(e),function(n){return W3.call(e,n)}))}:K3;function G3(e,n,t){var r=n(e);return Wn(e)?r:n3(r,t(e))}function Nc(e){return G3(e,Wl,q3)}var Ys=Br(mt,"DataView"),Js=Br(mt,"Promise"),Qs=Br(mt,"Set"),Lc="[object Map]",Z3="[object Object]",jc="[object Promise]",Hc="[object Set]",Uc="[object WeakMap]",Kc="[object DataView]",X3=Or(Ys),Y3=Or(Xo),J3=Or(Js),Q3=Or(Qs),ey=Or(Gs),Zt=$r;(Ys&&Zt(new Ys(new ArrayBuffer(1)))!=Kc||Xo&&Zt(new Xo)!=Lc||Js&&Zt(Js.resolve())!=jc||Qs&&Zt(new Qs)!=Hc||Gs&&Zt(new Gs)!=Uc)&&(Zt=function(e){var n=$r(e),t=n==Z3?e.constructor:void 0,r=t?Or(t):"";if(r)switch(r){case X3:return Kc;case Y3:return Lc;case J3:return jc;case Q3:return Hc;case ey:return Uc}return n});var nu=mt.Uint8Array;function ny(e){var n=new e.constructor(e.byteLength);return new nu(n).set(new nu(e)),n}function ty(e,n){var t=ny(e.buffer);return new e.constructor(t,e.byteOffset,e.length)}function ry(e){return typeof e.constructor=="function"&&!Kl(e)?c2(ph(e)):{}}var oy="__lodash_hash_undefined__";function iy(e){return this.__data__.set(e,oy),this}function uy(e){return this.__data__.has(e)}function tu(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Nt;++n<t;)this.add(e[n])}tu.prototype.add=tu.prototype.push=iy;tu.prototype.has=uy;function sy(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function ly(e,n){return e.has(n)}var ay=1,cy=2;function kh(e,n,t,r,o,i){var u=t&ay,s=e.length,l=n.length;if(s!=l&&!(u&&l>s))return!1;var a=i.get(e),c=i.get(n);if(a&&c)return a==n&&c==e;var d=-1,f=!0,h=t&cy?new tu:void 0;for(i.set(e,n),i.set(n,e);++d<s;){var p=e[d],g=n[d];if(r)var m=u?r(g,p,d,n,e,i):r(p,g,d,e,n,i);if(m!==void 0){if(m)continue;f=!1;break}if(h){if(!sy(n,function(v,b){if(!ly(h,b)&&(p===v||o(p,v,t,r,i)))return h.push(b)})){f=!1;break}}else if(!(p===g||o(p,g,t,r,i))){f=!1;break}}return i.delete(e),i.delete(n),f}function dy(e){var n=-1,t=Array(e.size);return e.forEach(function(r,o){t[++n]=[o,r]}),t}function fy(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var hy=1,py=2,gy="[object Boolean]",my="[object Date]",by="[object Error]",vy="[object Map]",xy="[object Number]",yy="[object RegExp]",Cy="[object Set]",_y="[object String]",wy="[object Symbol]",ky="[object ArrayBuffer]",Sy="[object DataView]",Vc=tr?tr.prototype:void 0,ls=Vc?Vc.valueOf:void 0;function Ey(e,n,t,r,o,i,u){switch(t){case Sy:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ky:return!(e.byteLength!=n.byteLength||!i(new nu(e),new nu(n)));case gy:case my:case xy:return di(+e,+n);case by:return e.name==n.name&&e.message==n.message;case yy:case _y:return e==n+"";case vy:var s=dy;case Cy:var l=r&hy;if(s||(s=fy),e.size!=n.size&&!l)return!1;var a=u.get(e);if(a)return a==n;r|=py,u.set(e,n);var c=kh(s(e),s(n),r,o,i,u);return u.delete(e),c;case wy:if(ls)return ls.call(e)==ls.call(n)}return!1}var Ay=1,Ty=Object.prototype,Dy=Ty.hasOwnProperty;function zy(e,n,t,r,o,i){var u=t&Ay,s=Nc(e),l=s.length,a=Nc(n),c=a.length;if(l!=c&&!u)return!1;for(var d=l;d--;){var f=s[d];if(!(u?f in n:Dy.call(n,f)))return!1}var h=i.get(e),p=i.get(n);if(h&&p)return h==n&&p==e;var g=!0;i.set(e,n),i.set(n,e);for(var m=u;++d<l;){f=s[d];var v=e[f],b=n[f];if(r)var w=u?r(b,v,f,n,e,i):r(v,b,f,e,n,i);if(!(w===void 0?v===b||o(v,b,t,r,i):w)){g=!1;break}m||(m=f=="constructor")}if(g&&!m){var C=e.constructor,k=n.constructor;C!=k&&"constructor"in e&&"constructor"in n&&!(typeof C=="function"&&C instanceof C&&typeof k=="function"&&k instanceof k)&&(g=!1)}return i.delete(e),i.delete(n),g}var Fy=1,Wc="[object Arguments]",qc="[object Array]",Ti="[object Object]",Iy=Object.prototype,Gc=Iy.hasOwnProperty;function Py(e,n,t,r,o,i){var u=Wn(e),s=Wn(n),l=u?qc:Zt(e),a=s?qc:Zt(n);l=l==Wc?Ti:l,a=a==Wc?Ti:a;var c=l==Ti,d=a==Ti,f=l==a;if(f&&eu(e)){if(!eu(n))return!1;u=!0,c=!1}if(f&&!c)return i||(i=new ht),u||Vl(e)?kh(e,n,t,r,o,i):Ey(e,n,l,t,r,o,i);if(!(t&Fy)){var h=c&&Gc.call(e,"__wrapped__"),p=d&&Gc.call(n,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?n.value():n;return i||(i=new ht),o(g,m,t,r,i)}}return f?(i||(i=new ht),zy(e,n,t,r,o,i)):!1}function Zl(e,n,t,r,o){return e===n?!0:e==null||n==null||!rr(e)&&!rr(n)?e!==e&&n!==n:Py(e,n,t,r,Zl,o)}var Ry=1,$y=2;function Oy(e,n,t,r){var o=t.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var u=t[o];if(u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){u=t[o];var s=u[0],l=e[s],a=u[1];if(u[2]){if(l===void 0&&!(s in e))return!1}else{var c=new ht,d;if(!(d===void 0?Zl(a,l,Ry|$y,r,c):d))return!1}}return!0}function Sh(e){return e===e&&!ir(e)}function By(e){for(var n=Wl(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,Sh(o)]}return n}function Eh(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function My(e){var n=By(e);return n.length==1&&n[0][2]?Eh(n[0][0],n[0][1]):function(t){return t===e||Oy(t,e,n)}}function Ny(e,n){return e!=null&&n in Object(e)}function Ly(e,n,t){n=fh(n,e);for(var r=-1,o=n.length,i=!1;++r<o;){var u=Au(n[r]);if(!(i=e!=null&&t(e,u)))break;e=e[u]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&Ul(o)&&jl(u,o)&&(Wn(e)||Qi(e)))}function jy(e,n){return e!=null&&Ly(e,n,Ny)}var Hy=1,Uy=2;function Ky(e,n){return ql(e)&&Sh(n)?Eh(Au(e),n):function(t){var r=e3(t,e);return r===void 0&&r===n?jy(t,e):Zl(n,r,Hy|Uy)}}function Vy(e){return function(n){return n==null?void 0:n[e]}}function Wy(e){return function(n){return hh(n,e)}}function qy(e){return ql(e)?Vy(Au(e)):Wy(e)}function Gy(e){return typeof e=="function"?e:e==null?Nl:typeof e=="object"?Wn(e)?Ky(e[0],e[1]):My(e):qy(e)}function Zy(e){return function(n,t,r){for(var o=-1,i=Object(n),u=r(n),s=u.length;s--;){var l=u[++o];if(t(i[l],l,i)===!1)break}return n}}var Ah=Zy();function Xy(e,n){return e&&Ah(e,n,Wl)}function Yy(e,n){return function(t,r){if(t==null)return t;if(!lo(t))return e(t,r);for(var o=t.length,i=-1,u=Object(t);++i<o&&r(u[i],i,u)!==!1;);return t}}var Jy=Yy(Xy);function el(e,n,t){(t!==void 0&&!di(e[n],t)||t===void 0&&!(n in e))&&Hl(e,n,t)}function Qy(e){return rr(e)&&lo(e)}function nl(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function e6(e){return S2(e,ch(e))}function n6(e,n,t,r,o,i,u){var s=nl(e,t),l=nl(n,t),a=u.get(l);if(a){el(e,t,a);return}var c=i?i(s,l,t+"",e,n,u):void 0,d=c===void 0;if(d){var f=Wn(l),h=!f&&eu(l),p=!f&&!h&&Vl(l);c=l,f||h||p?Wn(s)?c=s:Qy(s)?c=f2(s):h?(d=!1,c=H3(l)):p?(d=!1,c=ty(l)):c=[]:s3(l)||Qi(l)?(c=s,Qi(s)?c=e6(s):(!ir(s)||Ll(s))&&(c=ry(l))):d=!1}d&&(u.set(l,c),o(c,l,r,i,u),u.delete(l)),el(e,t,c)}function Th(e,n,t,r,o){e!==n&&Ah(n,function(i,u){if(o||(o=new ht),ir(i))n6(e,n,u,t,Th,r,o);else{var s=r?r(nl(e,u),i,u+"",e,n,o):void 0;s===void 0&&(s=i),el(e,u,s)}},ch)}function t6(e,n){var t=-1,r=lo(e)?Array(e.length):[];return Jy(e,function(o,i,u){r[++t]=n(o,i,u)}),r}function r6(e,n){var t=Wn(e)?rh:t6;return t(e,Gy(n))}var ko=z2(function(e,n,t){Th(e,n,t)});const Yo="naive-ui-style";function Xl(e,n,t){if(!n)return;const r=so(),o=R(()=>{const{value:s}=n;if(!s)return;const l=s[e];if(l)return l}),i=be(Ot,null),u=()=>{Rt(()=>{const{value:s}=t,l=`${s}${e}Rtl`;if(ab(l,r))return;const{value:a}=o;a&&a.style.mount({id:l,head:!0,anchorMetaName:Yo,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget})})};return r?u():li(u),o}const fi={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:o6,fontFamily:i6,lineHeight:u6}=fi,Dh=L("body",`
 margin: 0;
 font-size: ${o6};
 font-family: ${i6};
 line-height: ${u6};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[L("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function zh(e,n,t){if(!n)return;const r=so(),o=be(Ot,null),i=()=>{const u=t.value;n.mount({id:u===void 0?e:u+e,head:!0,anchorMetaName:Yo,props:{bPrefix:u?`.${u}-`:void 0},ssr:r,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||Dh.mount({id:"n-global",head:!0,anchorMetaName:Yo,ssr:r,parent:o==null?void 0:o.styleMountTarget})};r?i():li(i)}function r9(e){return e}function Pe(e,n,t,r,o,i){const u=so(),s=be(Ot,null);if(t){const a=()=>{const c=i==null?void 0:i.value;t.mount({id:c===void 0?n:c+n,head:!0,props:{bPrefix:c?`.${c}-`:void 0},anchorMetaName:Yo,ssr:u,parent:s==null?void 0:s.styleMountTarget}),s!=null&&s.preflightStyleDisabled||Dh.mount({id:"n-global",head:!0,anchorMetaName:Yo,ssr:u,parent:s==null?void 0:s.styleMountTarget})};u?a():li(a)}return R(()=>{var a;const{theme:{common:c,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=o,{common:g,peers:m}=h,{common:v=void 0,[e]:{common:b=void 0,self:w=void 0,peers:C={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:k=void 0,[e]:D={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:y,peers:E={}}=D,S=ko({},c||b||v||r.common,k,y,g),z=ko((a=d||w||r.self)===null||a===void 0?void 0:a(S),p,D,h);return{common:S,self:z,peers:ko({},r.peers,C,f),peerOverrides:ko({},p.peers,E,m)}})}Pe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const s6=V("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[L("svg",`
 height: 1em;
 width: 1em;
 `)]),Yl=le({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){zh("-base-icon",s6,Ue(e,"clsPrefix"))},render(){return A("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function l6(e,n){const t=le({render(){return n()}});return le({name:R3(e),setup(){var r;const o=(r=be(Ot,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var i;const u=(i=o==null?void 0:o.value)===null||i===void 0?void 0:i[e];return u?u():A(t,null)}}})}const a6=le({name:"ChevronDownFilled",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Fh=le({name:"ChevronRight",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),c6=l6("close",()=>A("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},A("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},A("g",{fill:"currentColor","fill-rule":"nonzero"},A("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),d6=V("base-close",`
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
`,[X("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),L("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),ln("disabled",[L("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),L("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),L("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),L("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),L("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),X("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),X("round",[L("&::before",`
 border-radius: 50%;
 `)])]),Ih=le({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return zh("-base-close",d6,Ue(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:r,round:o,isButtonTag:i}=e;return A(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,r&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,o&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},A(Yl,{clsPrefix:n},{default:()=>A(c6,null)}))}}}),f6=le({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function r(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function o(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function u(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:a,mode:c}=e,d=s?Rm:Dr,f={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:a,onEnter:i,onAfterEnter:u,onBeforeLeave:t,onLeave:r,onAfterLeave:o};return s||(f.mode=c),A(d,f,n)}}}),{cubicBezierEaseInOut:Zc}=fi;function h6({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=Zc,leaveCubicBezier:o=Zc}={}){return[L(`&.${e}-transition-enter-active`,{transition:`all ${n} ${r}!important`}),L(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),L(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),L(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const he={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},p6=zr(he.neutralBase),Ph=zr(he.neutralInvertBase),g6=`rgba(${Ph.slice(0,3).join(", ")}, `;function Xc(e){return`${g6+String(e)})`}function hn(e){const n=Array.from(Ph);return n[3]=Number(e),_r(p6,n)}const In=Object.assign(Object.assign({name:"common"},fi),{baseColor:he.neutralBase,primaryColor:he.primaryDefault,primaryColorHover:he.primaryHover,primaryColorPressed:he.primaryActive,primaryColorSuppl:he.primarySuppl,infoColor:he.infoDefault,infoColorHover:he.infoHover,infoColorPressed:he.infoActive,infoColorSuppl:he.infoSuppl,successColor:he.successDefault,successColorHover:he.successHover,successColorPressed:he.successActive,successColorSuppl:he.successSuppl,warningColor:he.warningDefault,warningColorHover:he.warningHover,warningColorPressed:he.warningActive,warningColorSuppl:he.warningSuppl,errorColor:he.errorDefault,errorColorHover:he.errorHover,errorColorPressed:he.errorActive,errorColorSuppl:he.errorSuppl,textColorBase:he.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:hn(he.alpha4),placeholderColor:hn(he.alpha4),placeholderColorDisabled:hn(he.alpha5),iconColor:hn(he.alpha4),iconColorHover:wi(hn(he.alpha4),{lightness:.75}),iconColorPressed:wi(hn(he.alpha4),{lightness:.9}),iconColorDisabled:hn(he.alpha5),opacity1:he.alpha1,opacity2:he.alpha2,opacity3:he.alpha3,opacity4:he.alpha4,opacity5:he.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:hn(Number(he.alphaClose)),closeIconColorHover:hn(Number(he.alphaClose)),closeIconColorPressed:hn(Number(he.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:hn(he.alpha4),clearColorHover:wi(hn(he.alpha4),{lightness:.75}),clearColorPressed:wi(hn(he.alpha4),{lightness:.9}),scrollbarColor:Xc(he.alphaScrollbar),scrollbarColorHover:Xc(he.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:hn(he.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:he.neutralPopover,tableColor:he.neutralCard,cardColor:he.neutralCard,modalColor:he.neutralModal,bodyColor:he.neutralBody,tagColor:"#eee",avatarColor:hn(he.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:hn(he.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:he.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),m6={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function b6(e){const{scrollbarColor:n,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:o,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},m6),{height:r,width:o,borderRadius:i,color:n,colorHover:t})}const Rh={name:"Scrollbar",common:In,self:b6},v6=V("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[L(">",[V("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[L("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),L(">",[V("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),L(">, +",[V("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[X("horizontal",`
 height: var(--n-scrollbar-height);
 `,[L(">",[U("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),X("horizontal--top",`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),X("horizontal--bottom",`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),X("vertical",`
 width: var(--n-scrollbar-width);
 `,[L(">",[U("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),X("vertical--left",`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),X("vertical--right",`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),X("disabled",[L(">",[U("scrollbar","pointer-events: none;")])]),L(">",[U("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[h6(),L("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),x6=Object.assign(Object.assign({},Pe.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Tu=le({name:"Scrollbar",props:x6,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:r}=kn(e),o=Xl("Scrollbar",r,n),i=te(null),u=te(null),s=te(null),l=te(null),a=te(null),c=te(null),d=te(null),f=te(null),h=te(null),p=te(null),g=te(null),m=te(0),v=te(0),b=te(!1),w=te(!1);let C=!1,k=!1,D,y,E=0,S=0,z=0,j=0;const I=Lb(),q=Pe("Scrollbar","-scrollbar",v6,Rh,e,n),G=R(()=>{const{value:W}=f,{value:se}=c,{value:me}=p;return W===null||se===null||me===null?0:Math.min(W,me*W/se+nc(q.value.self.width)*1.5)}),$=R(()=>`${G.value}px`),Y=R(()=>{const{value:W}=h,{value:se}=d,{value:me}=g;return W===null||se===null||me===null?0:me*W/se+nc(q.value.self.height)*1.5}),H=R(()=>`${Y.value}px`),ee=R(()=>{const{value:W}=f,{value:se}=m,{value:me}=c,{value:Me}=p;if(W===null||me===null||Me===null)return 0;{const en=me-W;return en?se/en*(Me-G.value):0}}),xe=R(()=>`${ee.value}px`),Ce=R(()=>{const{value:W}=h,{value:se}=v,{value:me}=d,{value:Me}=g;if(W===null||me===null||Me===null)return 0;{const en=me-W;return en?se/en*(Me-Y.value):0}}),ne=R(()=>`${Ce.value}px`),ie=R(()=>{const{value:W}=f,{value:se}=c;return W!==null&&se!==null&&se>W}),M=R(()=>{const{value:W}=h,{value:se}=d;return W!==null&&se!==null&&se>W}),pe=R(()=>{const{trigger:W}=e;return W==="none"||b.value}),we=R(()=>{const{trigger:W}=e;return W==="none"||w.value}),Re=R(()=>{const{container:W}=e;return W?W():u.value}),P=R(()=>{const{content:W}=e;return W?W():s.value}),re=(W,se)=>{if(!e.scrollable)return;if(typeof W=="number"){_(W,se??0,0,!1,"auto");return}const{left:me,top:Me,index:en,elSize:Tn,position:Zn,behavior:qe,el:jn,debounce:jt=!0}=W;(me!==void 0||Me!==void 0)&&_(me??0,Me??0,0,!1,qe),jn!==void 0?_(0,jn.offsetTop,jn.offsetHeight,jt,qe):en!==void 0&&Tn!==void 0?_(0,en*Tn,Tn,jt,qe):Zn==="bottom"?_(0,Number.MAX_SAFE_INTEGER,0,!1,qe):Zn==="top"&&_(0,0,0,!1,qe)},F=$l(()=>{e.container||re({top:m.value,left:v.value})}),ae=()=>{F.isDeactivated||de()},ye=W=>{if(F.isDeactivated)return;const{onResize:se}=e;se&&se(W),de()},x=(W,se)=>{if(!e.scrollable)return;const{value:me}=Re;me&&(typeof W=="object"?me.scrollBy(W):me.scrollBy(W,se||0))};function _(W,se,me,Me,en){const{value:Tn}=Re;if(Tn){if(Me){const{scrollTop:Zn,offsetHeight:qe}=Tn;if(se>Zn){se+me<=Zn+qe||Tn.scrollTo({left:W,top:se+me-qe,behavior:en});return}}Tn.scrollTo({left:W,top:se,behavior:en})}}function T(){J(),Z(),de()}function B(){N()}function N(){O(),Q()}function O(){y!==void 0&&window.clearTimeout(y),y=window.setTimeout(()=>{w.value=!1},e.duration)}function Q(){D!==void 0&&window.clearTimeout(D),D=window.setTimeout(()=>{b.value=!1},e.duration)}function J(){D!==void 0&&window.clearTimeout(D),b.value=!0}function Z(){y!==void 0&&window.clearTimeout(y),w.value=!0}function K(W){const{onScroll:se}=e;se&&se(W),fe()}function fe(){const{value:W}=Re;W&&(m.value=W.scrollTop,v.value=W.scrollLeft*(o!=null&&o.value?-1:1))}function oe(){const{value:W}=P;W&&(c.value=W.offsetHeight,d.value=W.offsetWidth);const{value:se}=Re;se&&(f.value=se.offsetHeight,h.value=se.offsetWidth);const{value:me}=a,{value:Me}=l;me&&(g.value=me.offsetWidth),Me&&(p.value=Me.offsetHeight)}function ce(){const{value:W}=Re;W&&(m.value=W.scrollTop,v.value=W.scrollLeft*(o!=null&&o.value?-1:1),f.value=W.offsetHeight,h.value=W.offsetWidth,c.value=W.scrollHeight,d.value=W.scrollWidth);const{value:se}=a,{value:me}=l;se&&(g.value=se.offsetWidth),me&&(p.value=me.offsetHeight)}function de(){e.scrollable&&(e.useUnifiedContainer?ce():(oe(),fe()))}function ke(W){var se;return!(!((se=i.value)===null||se===void 0)&&se.contains(Zi(W)))}function ze(W){W.preventDefault(),W.stopPropagation(),k=!0,un("mousemove",window,Ee,!0),un("mouseup",window,We,!0),S=v.value,z=o!=null&&o.value?window.innerWidth-W.clientX:W.clientX}function Ee(W){if(!k)return;D!==void 0&&window.clearTimeout(D),y!==void 0&&window.clearTimeout(y);const{value:se}=h,{value:me}=d,{value:Me}=Y;if(se===null||me===null)return;const Tn=(o!=null&&o.value?window.innerWidth-W.clientX-z:W.clientX-z)*(me-se)/(se-Me),Zn=me-se;let qe=S+Tn;qe=Math.min(Zn,qe),qe=Math.max(qe,0);const{value:jn}=Re;if(jn){jn.scrollLeft=qe*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:jt}=e;jt&&jt(qe)}}function We(W){W.preventDefault(),W.stopPropagation(),Ge("mousemove",window,Ee,!0),Ge("mouseup",window,We,!0),k=!1,de(),ke(W)&&N()}function Qe(W){W.preventDefault(),W.stopPropagation(),C=!0,un("mousemove",window,Sn,!0),un("mouseup",window,En,!0),E=m.value,j=W.clientY}function Sn(W){if(!C)return;D!==void 0&&window.clearTimeout(D),y!==void 0&&window.clearTimeout(y);const{value:se}=f,{value:me}=c,{value:Me}=G;if(se===null||me===null)return;const Tn=(W.clientY-j)*(me-se)/(se-Me),Zn=me-se;let qe=E+Tn;qe=Math.min(Zn,qe),qe=Math.max(qe,0);const{value:jn}=Re;jn&&(jn.scrollTop=qe)}function En(W){W.preventDefault(),W.stopPropagation(),Ge("mousemove",window,Sn,!0),Ge("mouseup",window,En,!0),C=!1,de(),ke(W)&&N()}Rt(()=>{const{value:W}=M,{value:se}=ie,{value:me}=n,{value:Me}=a,{value:en}=l;Me&&(W?Me.classList.remove(`${me}-scrollbar-rail--disabled`):Me.classList.add(`${me}-scrollbar-rail--disabled`)),en&&(se?en.classList.remove(`${me}-scrollbar-rail--disabled`):en.classList.add(`${me}-scrollbar-rail--disabled`))}),Ln(()=>{e.container||de()}),qn(()=>{D!==void 0&&window.clearTimeout(D),y!==void 0&&window.clearTimeout(y),Ge("mousemove",window,Sn,!0),Ge("mouseup",window,En,!0)});const Lt=R(()=>{const{common:{cubicBezierEaseInOut:W},self:{color:se,colorHover:me,height:Me,width:en,borderRadius:Tn,railInsetHorizontalTop:Zn,railInsetHorizontalBottom:qe,railInsetVerticalRight:jn,railInsetVerticalLeft:jt,railColor:Zp}}=q.value,{top:Xp,right:Yp,bottom:Jp,left:Qp}=mr(Zn),{top:e1,right:n1,bottom:t1,left:r1}=mr(qe),{top:o1,right:i1,bottom:u1,left:s1}=mr(o!=null&&o.value?_c(jn):jn),{top:l1,right:a1,bottom:c1,left:d1}=mr(o!=null&&o.value?_c(jt):jt);return{"--n-scrollbar-bezier":W,"--n-scrollbar-color":se,"--n-scrollbar-color-hover":me,"--n-scrollbar-border-radius":Tn,"--n-scrollbar-width":en,"--n-scrollbar-height":Me,"--n-scrollbar-rail-top-horizontal-top":Xp,"--n-scrollbar-rail-right-horizontal-top":Yp,"--n-scrollbar-rail-bottom-horizontal-top":Jp,"--n-scrollbar-rail-left-horizontal-top":Qp,"--n-scrollbar-rail-top-horizontal-bottom":e1,"--n-scrollbar-rail-right-horizontal-bottom":n1,"--n-scrollbar-rail-bottom-horizontal-bottom":t1,"--n-scrollbar-rail-left-horizontal-bottom":r1,"--n-scrollbar-rail-top-vertical-right":o1,"--n-scrollbar-rail-right-vertical-right":i1,"--n-scrollbar-rail-bottom-vertical-right":u1,"--n-scrollbar-rail-left-vertical-right":s1,"--n-scrollbar-rail-top-vertical-left":l1,"--n-scrollbar-rail-right-vertical-left":a1,"--n-scrollbar-rail-bottom-vertical-left":c1,"--n-scrollbar-rail-left-vertical-left":d1,"--n-scrollbar-rail-color":Zp}}),xt=t?Gn("scrollbar",void 0,Lt,e):void 0;return Object.assign(Object.assign({},{scrollTo:re,scrollBy:x,sync:de,syncUnifiedContainer:ce,handleMouseEnterWrapper:T,handleMouseLeaveWrapper:B}),{mergedClsPrefix:n,rtlEnabled:o,containerScrollTop:m,wrapperRef:i,containerRef:u,contentRef:s,yRailRef:l,xRailRef:a,needYBar:ie,needXBar:M,yBarSizePx:$,xBarSizePx:H,yBarTopPx:xe,xBarLeftPx:ne,isShowXBar:pe,isShowYBar:we,isIos:I,handleScroll:K,handleContentResize:ae,handleContainerResize:ye,handleYScrollMouseDown:Qe,handleXScrollMouseDown:ze,cssVars:t?void 0:Lt,themeClass:xt==null?void 0:xt.themeClass,onRender:xt==null?void 0:xt.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:i,yPlacement:u,xPlacement:s,xScrollable:l}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",c=(h,p)=>A("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${u}`,h],"data-scrollbar-rail":!0,style:[p||"",this.verticalRailStyle],"aria-hidden":!0},A(a?kc:Dr,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),d=()=>{var h,p;return(h=this.onRender)===null||h===void 0||h.call(this),A("div",Pr(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=n.default)===null||p===void 0?void 0:p.call(n):A("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},A(Yi,{onResize:this.handleContentResize},{default:()=>A("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:c(void 0,void 0),l&&A("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${s}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},A(a?kc:Dr,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?d():A(Yi,{onResize:this.handleContainerResize},{default:d});return i?A(Le,null,f,c(this.themeClass,this.cssVars)):f}}),$h=Tu;function Yc(e){return Array.isArray(e)?e:[e]}const tl={STOP:"STOP"};function Oh(e,n){const t=n(e);e.children!==void 0&&t!==tl.STOP&&e.children.forEach(r=>Oh(r,n))}function y6(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?u=>{u.isLeaf||(r.push(u.key),i(u.children))}:u=>{u.isLeaf||(u.isGroup||r.push(u.key),i(u.children))};function i(u){u.forEach(o)}return i(e),r}function C6(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function _6(e){return e.children}function w6(e){return e.key}function k6(){return!1}function S6(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function E6(e){return e.disabled===!0}function A6(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function as(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function cs(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function T6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function D6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function z6(e){return(e==null?void 0:e.type)==="group"}function o9(e){const n=new Map;return e.forEach((t,r)=>{n.set(t.key,r)}),t=>{var r;return(r=n.get(t))!==null&&r!==void 0?r:null}}class F6 extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function I6(e,n,t,r){return ru(n.concat(e),t,r,!1)}function P6(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function R6(e,n,t,r){const o=ru(n,t,r,!1),i=ru(e,t,r,!0),u=P6(e,t),s=[];return o.forEach(l=>{(i.has(l)||u.has(l))&&s.push(l)}),s.forEach(l=>o.delete(l)),o}function ds(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:u,leafOnly:s,checkStrategy:l,allowNotLoaded:a}=e;if(!u)return r!==void 0?{checkedKeys:T6(t,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:D6(t,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=n;let d;o!==void 0?d=R6(o,t,n,a):r!==void 0?d=I6(r,t,n,a):d=ru(t,n,a,!1);const f=l==="parent",h=l==="child"||s,p=d,g=new Set,m=Math.max.apply(null,Array.from(c.keys()));for(let v=m;v>=0;v-=1){const b=v===0,w=c.get(v);for(const C of w){if(C.isLeaf)continue;const{key:k,shallowLoaded:D}=C;if(h&&D&&C.children.forEach(z=>{!z.disabled&&!z.isLeaf&&z.shallowLoaded&&p.has(z.key)&&p.delete(z.key)}),C.disabled||!D)continue;let y=!0,E=!1,S=!0;for(const z of C.children){const j=z.key;if(!z.disabled){if(S&&(S=!1),p.has(j))E=!0;else if(g.has(j)){E=!0,y=!1;break}else if(y=!1,E)break}}y&&!S?(f&&C.children.forEach(z=>{!z.disabled&&p.has(z.key)&&p.delete(z.key)}),p.add(k)):E&&g.add(k),b&&h&&p.has(k)&&p.delete(k)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(g)}}function ru(e,n,t,r){const{treeNodeMap:o,getChildren:i}=n,u=new Set,s=new Set(e);return e.forEach(l=>{const a=o.get(l);a!==void 0&&Oh(a,c=>{if(c.disabled)return tl.STOP;const{key:d}=c;if(!u.has(d)&&(u.add(d),s.add(d),A6(c.rawNode,i))){if(r)return tl.STOP;if(!t)throw new F6}})}),s}function $6(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const i=r.treeNodeMap;let u=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const s={keyPath:[],treeNodePath:[],treeNode:u};if(u!=null&&u.ignored)return s.treeNode=null,s;for(;u;)!u.ignored&&(n||!u.isGroup)&&s.treeNodePath.push(u),u=u.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function O6(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function B6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Jc(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?M6:B6,i={reverse:n==="prev"};let u=!1,s=null;function l(a){if(a!==null){if(a===e){if(!u)u=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!a.disabled||r)&&!a.ignored&&!a.isGroup){s=a;return}if(a.isGroup){const c=Jl(a,i);c!==null?s=c:l(o(a,t))}else{const c=o(a,!1);if(c!==null)l(c);else{const d=N6(a);d!=null&&d.isGroup?l(o(d,t)):t&&l(o(a,!0))}}}}return l(e),s}function M6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function N6(e){return e.parent}function Jl(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,i=t?o-1:0,u=t?-1:o,s=t?-1:1;for(let l=i;l!==u;l+=s){const a=r[l];if(!a.disabled&&!a.ignored)if(a.isGroup){const c=Jl(a,n);if(c!==null)return c}else return a}}return null}const L6={getChild(){return this.ignored?null:Jl(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Jc(this,"next",e)},getPrev(e={}){return Jc(this,"prev",e)}};function j6(e,n){const t=n?new Set(n):void 0,r=[];function o(i){i.forEach(u=>{r.push(u),!(u.isLeaf||!u.children||u.ignored)&&(u.isGroup||t===void 0||t.has(u.key))&&o(u.children)})}return o(e),r}function H6(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Bh(e,n,t,r,o,i=null,u=0){const s=[];return e.forEach((l,a)=>{var c;const d=Object.create(r);if(d.rawNode=l,d.siblings=s,d.level=u,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===e.length,d.parent=i,!d.ignored){const f=o(l);Array.isArray(f)&&(d.children=Bh(f,n,t,r,o,d,u+1))}s.push(d),n.set(d.key,d),t.has(u)||t.set(u,[]),(c=t.get(u))===null||c===void 0||c.push(d)}),s}function $i(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:i=E6,getIgnored:u=k6,getIsGroup:s=z6,getKey:l=w6}=n,a=(t=n.getChildren)!==null&&t!==void 0?t:_6,c=n.ignoreEmptyChildren?C=>{const k=a(C);return Array.isArray(k)?k.length?k:null:k}:a,d=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return C6(this.rawNode,c)},get shallowLoaded(){return S6(this.rawNode,c)},get ignored(){return u(this.rawNode)},contains(C){return H6(this,C)}},L6),f=Bh(e,r,o,d,c);function h(C){if(C==null)return null;const k=r.get(C);return k&&!k.isGroup&&!k.ignored?k:null}function p(C){if(C==null)return null;const k=r.get(C);return k&&!k.ignored?k:null}function g(C,k){const D=p(C);return D?D.getPrev(k):null}function m(C,k){const D=p(C);return D?D.getNext(k):null}function v(C){const k=p(C);return k?k.getParent():null}function b(C){const k=p(C);return k?k.getChild():null}const w={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(C){return j6(f,C)},getNode:h,getPrev:g,getNext:m,getParent:v,getChild:b,getFirstAvailableNode(){return O6(f)},getPath(C,k={}){return $6(C,k,w)},getCheckedKeys(C,k={}){const{cascade:D=!0,leafOnly:y=!1,checkStrategy:E="all",allowNotLoaded:S=!1}=k;return ds({checkedKeys:as(C),indeterminateKeys:cs(C),cascade:D,leafOnly:y,checkStrategy:E,allowNotLoaded:S},w)},check(C,k,D={}){const{cascade:y=!0,leafOnly:E=!1,checkStrategy:S="all",allowNotLoaded:z=!1}=D;return ds({checkedKeys:as(k),indeterminateKeys:cs(k),keysToCheck:C==null?[]:Yc(C),cascade:y,leafOnly:E,checkStrategy:S,allowNotLoaded:z},w)},uncheck(C,k,D={}){const{cascade:y=!0,leafOnly:E=!1,checkStrategy:S="all",allowNotLoaded:z=!1}=D;return ds({checkedKeys:as(k),indeterminateKeys:cs(k),keysToUncheck:C==null?[]:Yc(C),cascade:y,leafOnly:E,checkStrategy:S,allowNotLoaded:z},w)},getNonLeafKeys(C={}){return y6(f,C)}};return w}const{cubicBezierEaseIn:Qc,cubicBezierEaseOut:ed}=fi;function U6({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:r="",originalTransition:o=""}={}){return[L("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${Qc}, transform ${n} ${Qc} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${ed}, transform ${n} ${ed} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${t})`}),L("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const K6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function V6(e){const{boxShadow2:n,popoverColor:t,textColor2:r,borderRadius:o,fontSize:i,dividerColor:u}=e;return Object.assign(Object.assign({},K6),{fontSize:i,borderRadius:o,color:t,dividerColor:u,textColor:r,boxShadow:n})}const Ql={name:"Popover",common:In,self:V6},fs={top:"bottom",bottom:"top",left:"right",right:"left"},nn="var(--n-arrow-height) * 1.414",W6=L([V("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[L(">",[V("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ln("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[ln("scrollable",[ln("show-header-or-footer","padding: var(--n-padding);")])]),U("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),U("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),X("scrollable, show-header-or-footer",[U("content",`
 padding: var(--n-padding);
 `)])]),V("popover-shared",`
 transform-origin: inherit;
 `,[V("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[V("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${nn});
 height: calc(${nn});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),L("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),L("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),L("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),L("&.popover-transition-leave-active",`
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
 `),...r6({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${nn}) / 2)`,l=_t(o);return L(`[v-placement="${o}"] >`,[V("popover-shared",[X("center-arrow",[V("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function _t(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Un(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[V("popover-shared",`
 margin-${fs[t]}: var(--n-space);
 `,[X("show-arrow",`
 margin-${fs[t]}: var(--n-space-arrow);
 `),X("overlap",`
 margin: 0;
 `),pb("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${fs[t]}: auto;
 ${r}
 `,[V("popover-arrow",n)])])])}const Mh=Object.assign(Object.assign({},Pe.props),{to:no.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Nh({arrowClass:e,arrowStyle:n,arrowWrapperClass:t,arrowWrapperStyle:r,clsPrefix:o}){return A("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,t]},A("div",{class:[`${o}-popover-arrow`,e],style:n}))}const q6=le({name:"PopoverBody",inheritAttrs:!1,props:Mh,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=kn(e),u=Pe("Popover","-popover",W6,Ql,e,o),s=te(null),l=be("NPopover"),a=te(null),c=te(e.show),d=te(!1);Rt(()=>{const{show:y}=e;y&&!$v()&&!e.internalDeactivateImmediately&&(d.value=!0)});const f=R(()=>{const{trigger:y,onClickoutside:E}=e,S=[],{positionManuallyRef:{value:z}}=l;return z||(y==="click"&&!E&&S.push([ic,C,void 0,{capture:!0}]),y==="hover"&&S.push([qb,w])),E&&S.push([ic,C,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&d.value)&&S.push([pm,e.show]),S}),h=R(()=>{const{common:{cubicBezierEaseInOut:y,cubicBezierEaseIn:E,cubicBezierEaseOut:S},self:{space:z,spaceArrow:j,padding:I,fontSize:q,textColor:G,dividerColor:$,color:Y,boxShadow:H,borderRadius:ee,arrowHeight:xe,arrowOffset:Ce,arrowOffsetVertical:ne}}=u.value;return{"--n-box-shadow":H,"--n-bezier":y,"--n-bezier-ease-in":E,"--n-bezier-ease-out":S,"--n-font-size":q,"--n-text-color":G,"--n-color":Y,"--n-divider-color":$,"--n-border-radius":ee,"--n-arrow-height":xe,"--n-arrow-offset":Ce,"--n-arrow-offset-vertical":ne,"--n-padding":I,"--n-space":z,"--n-space-arrow":j}}),p=R(()=>{const y=e.width==="trigger"?void 0:er(e.width),E=[];y&&E.push({width:y});const{maxWidth:S,minWidth:z}=e;return S&&E.push({maxWidth:er(S)}),z&&E.push({maxWidth:er(z)}),i||E.push(h.value),E}),g=i?Gn("popover",void 0,h,e):void 0;l.setBodyInstance({syncPosition:m}),qn(()=>{l.setBodyInstance(null)}),cn(Ue(e,"show"),y=>{e.animated||(y?c.value=!0:c.value=!1)});function m(){var y;(y=s.value)===null||y===void 0||y.syncPosition()}function v(y){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(y)}function b(y){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(y)}function w(y){e.trigger==="hover"&&!k().contains(Zi(y))&&l.handleMouseMoveOutside(y)}function C(y){(e.trigger==="click"&&!k().contains(Zi(y))||e.onClickoutside)&&l.handleClickOutside(y)}function k(){return l.getTriggerElement()}je(ku,a),je(Pl,null),je(Rl,null);function D(){if(g==null||g.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&d.value))return null;let E;const S=l.internalRenderBodyRef.value,{value:z}=o;if(S)E=S([`${z}-popover-shared`,g==null?void 0:g.themeClass.value,e.overlap&&`${z}-popover-shared--overlap`,e.showArrow&&`${z}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${z}-popover-shared--center-arrow`],a,p.value,v,b);else{const{value:j}=l.extraClassRef,{internalTrapFocus:I}=e,q=!wc(n.header)||!wc(n.footer),G=()=>{var $,Y;const H=q?A(Le,null,zn(n.header,Ce=>Ce?A("div",{class:[`${z}-popover__header`,e.headerClass],style:e.headerStyle},Ce):null),zn(n.default,Ce=>Ce?A("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},n):null),zn(n.footer,Ce=>Ce?A("div",{class:[`${z}-popover__footer`,e.footerClass],style:e.footerStyle},Ce):null)):e.scrollable?($=n.default)===null||$===void 0?void 0:$.call(n):A("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},n),ee=e.scrollable?A($h,{contentClass:q?void 0:`${z}-popover__content ${(Y=e.contentClass)!==null&&Y!==void 0?Y:""}`,contentStyle:q?void 0:e.contentStyle},{default:()=>H}):H,xe=e.showArrow?Nh({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:z}):null;return[ee,xe]};E=A("div",Pr({class:[`${z}-popover`,`${z}-popover-shared`,g==null?void 0:g.themeClass.value,j.map($=>`${z}-${$}`),{[`${z}-popover--scrollable`]:e.scrollable,[`${z}-popover--show-header-or-footer`]:q,[`${z}-popover--raw`]:e.raw,[`${z}-popover-shared--overlap`]:e.overlap,[`${z}-popover-shared--show-arrow`]:e.showArrow,[`${z}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:a,style:p.value,onKeydown:l.handleKeydown,onMouseenter:v,onMouseleave:b},t),I?A(Pv,{active:e.show,autoFocus:!0},{default:G}):G())}return mu(E,f.value)}return{displayed:d,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:no(e),followerEnabled:c,renderContentNode:D}},render(){return A(U0,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===no.tdkey},{default:()=>this.animated?A(Dr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),G6=Object.keys(Mh),Z6={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function X6(e,n,t){Z6[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=t[r];o?e.props[r]=(...u)=>{o(...u),i(...u)}:e.props[r]=i})}const Du={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:no.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Y6=Object.assign(Object.assign(Object.assign({},Pe.props),Du),{internalOnAfterLeave:Function,internalRenderBody:Function}),Lh=le({name:"Popover",inheritAttrs:!1,props:Y6,slots:Object,__popover__:!0,setup(e){const n=P0(),t=te(null),r=R(()=>e.show),o=te(e.defaultShow),i=Wo(r,o),u=Fn(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:$}=e;return!!($!=null&&$())},l=()=>s()?!1:i.value,a=R0(e,["arrow","showArrow"]),c=R(()=>e.overlap?!1:a.value);let d=null;const f=te(null),h=te(null),p=Fn(()=>e.x!==void 0&&e.y!==void 0);function g($){const{"onUpdate:show":Y,onUpdateShow:H,onShow:ee,onHide:xe}=e;o.value=$,Y&&Ye(Y,$),H&&Ye(H,$),$&&ee&&Ye(ee,!0),$&&xe&&Ye(xe,!1)}function m(){d&&d.syncPosition()}function v(){const{value:$}=f;$&&(window.clearTimeout($),f.value=null)}function b(){const{value:$}=h;$&&(window.clearTimeout($),h.value=null)}function w(){const $=s();if(e.trigger==="focus"&&!$){if(l())return;g(!0)}}function C(){const $=s();if(e.trigger==="focus"&&!$){if(!l())return;g(!1)}}function k(){const $=s();if(e.trigger==="hover"&&!$){if(b(),f.value!==null||l())return;const Y=()=>{g(!0),f.value=null},{delay:H}=e;H===0?Y():f.value=window.setTimeout(Y,H)}}function D(){const $=s();if(e.trigger==="hover"&&!$){if(v(),h.value!==null||!l())return;const Y=()=>{g(!1),h.value=null},{duration:H}=e;H===0?Y():h.value=window.setTimeout(Y,H)}}function y(){D()}function E($){var Y;l()&&(e.trigger==="click"&&(v(),b(),g(!1)),(Y=e.onClickoutside)===null||Y===void 0||Y.call(e,$))}function S(){if(e.trigger==="click"&&!s()){v(),b();const $=!l();g($)}}function z($){e.internalTrapFocus&&$.key==="Escape"&&(v(),b(),g(!1))}function j($){o.value=$}function I(){var $;return($=t.value)===null||$===void 0?void 0:$.targetRef}function q($){d=$}return je("NPopover",{getTriggerElement:I,handleKeydown:z,handleMouseEnter:k,handleMouseLeave:D,handleClickOutside:E,handleMouseMoveOutside:y,setBodyInstance:q,positionManuallyRef:p,isMountedRef:n,zIndexRef:Ue(e,"zIndex"),extraClassRef:Ue(e,"internalExtraClass"),internalRenderBodyRef:Ue(e,"internalRenderBody")}),Rt(()=>{i.value&&s()&&g(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:u,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:l,setShow:j,handleClick:S,handleMouseEnter:k,handleMouseLeave:D,handleFocus:w,handleBlur:C,syncPosition:m}},render(){var e;const{positionManually:n,$slots:t}=this;let r,o=!1;if(!n&&(r=Bv(t,"trigger"),r)){r=$t(r),r=r.type===ai?A("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:u}=this,s=[i,...u],l={onBlur:a=>{s.forEach(c=>{c.onBlur(a)})},onFocus:a=>{s.forEach(c=>{c.onFocus(a)})},onClick:a=>{s.forEach(c=>{c.onClick(a)})},onMouseenter:a=>{s.forEach(c=>{c.onMouseenter(a)})},onMouseleave:a=>{s.forEach(c=>{c.onMouseleave(a)})}};X6(r,u?"nested":n?"manual":this.trigger,l)}}return A(N0,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?mu(A("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[j0,{enabled:i,zIndex:this.zIndex}]]):null,n?null:A(L0,null,{default:()=>r}),A(q6,Io(this.$props,G6,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var u,s;return(s=(u=this.$slots).default)===null||s===void 0?void 0:s.call(u)},header:()=>{var u,s;return(s=(u=this.$slots).header)===null||s===void 0?void 0:s.call(u)},footer:()=>{var u,s;return(s=(u=this.$slots).footer)===null||s===void 0?void 0:s.call(u)}})]}})}}),J6={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function Q6(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:r,primaryColor:o,infoColor:i,successColor:u,warningColor:s,errorColor:l,baseColor:a,borderColor:c,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,borderRadiusSmall:m,fontSizeMini:v,fontSizeTiny:b,fontSizeSmall:w,fontSizeMedium:C,heightMini:k,heightTiny:D,heightSmall:y,heightMedium:E,closeColorHover:S,closeColorPressed:z,buttonColor2Hover:j,buttonColor2Pressed:I,fontWeightStrong:q}=e;return Object.assign(Object.assign({},J6),{closeBorderRadius:m,heightTiny:k,heightSmall:D,heightMedium:y,heightLarge:E,borderRadius:m,opacityDisabled:d,fontSizeTiny:v,fontSizeSmall:b,fontSizeMedium:w,fontSizeLarge:C,fontWeightStrong:q,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:a,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:I,colorChecked:o,colorCheckedHover:t,colorCheckedPressed:r,border:`1px solid ${c}`,textColor:n,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:S,closeColorPressed:z,borderPrimary:`1px solid ${Fe(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:Fe(o,{alpha:.12}),colorBorderedPrimary:Fe(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:Fe(o,{alpha:.12}),closeColorPressedPrimary:Fe(o,{alpha:.18}),borderInfo:`1px solid ${Fe(i,{alpha:.3})}`,textColorInfo:i,colorInfo:Fe(i,{alpha:.12}),colorBorderedInfo:Fe(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:Fe(i,{alpha:.12}),closeColorPressedInfo:Fe(i,{alpha:.18}),borderSuccess:`1px solid ${Fe(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:Fe(u,{alpha:.12}),colorBorderedSuccess:Fe(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:Fe(u,{alpha:.12}),closeColorPressedSuccess:Fe(u,{alpha:.18}),borderWarning:`1px solid ${Fe(s,{alpha:.35})}`,textColorWarning:s,colorWarning:Fe(s,{alpha:.15}),colorBorderedWarning:Fe(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:Fe(s,{alpha:.12}),closeColorPressedWarning:Fe(s,{alpha:.18}),borderError:`1px solid ${Fe(l,{alpha:.23})}`,textColorError:l,colorError:Fe(l,{alpha:.1}),colorBorderedError:Fe(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:Fe(l,{alpha:.12}),closeColorPressedError:Fe(l,{alpha:.18})})}const e4={common:In,self:Q6},n4={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},t4=V("tag",`
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
`,[X("strong",`
 font-weight: var(--n-font-weight-strong);
 `),U("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),U("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),U("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),U("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[U("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),U("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),X("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),X("icon, avatar",[X("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),X("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),X("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ln("disabled",[L("&:hover","background-color: var(--n-color-hover-checkable);",[ln("checked","color: var(--n-text-color-hover-checkable);")]),L("&:active","background-color: var(--n-color-pressed-checkable);",[ln("checked","color: var(--n-text-color-pressed-checkable);")])]),X("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ln("disabled",[L("&:hover","background-color: var(--n-color-checked-hover);"),L("&:active","background-color: var(--n-color-checked-pressed);")])])])]),r4=Object.assign(Object.assign(Object.assign({},Pe.props),n4),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),jh="n-tag",i9=le({name:"Tag",props:r4,slots:Object,setup(e){const n=te(null),{mergedBorderedRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=kn(e),u=Pe("Tag","-tag",t4,e4,e,r);je(jh,{roundRef:Ue(e,"round")});function s(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:p,onUpdateChecked:g,"onUpdate:checked":m}=e;g&&g(!h),m&&m(!h),p&&p(!h)}}function l(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&Ye(p,h)}}const a={setTextContent(h){const{value:p}=n;p&&(p.textContent=h)}},c=Xl("Tag",i,r),d=R(()=>{const{type:h,size:p,color:{color:g,textColor:m}={}}=e,{common:{cubicBezierEaseInOut:v},self:{padding:b,closeMargin:w,borderRadius:C,opacityDisabled:k,textColorCheckable:D,textColorHoverCheckable:y,textColorPressedCheckable:E,textColorChecked:S,colorCheckable:z,colorHoverCheckable:j,colorPressedCheckable:I,colorChecked:q,colorCheckedHover:G,colorCheckedPressed:$,closeBorderRadius:Y,fontWeightStrong:H,[Ie("colorBordered",h)]:ee,[Ie("closeSize",p)]:xe,[Ie("closeIconSize",p)]:Ce,[Ie("fontSize",p)]:ne,[Ie("height",p)]:ie,[Ie("color",h)]:M,[Ie("textColor",h)]:pe,[Ie("border",h)]:we,[Ie("closeIconColor",h)]:Re,[Ie("closeIconColorHover",h)]:P,[Ie("closeIconColorPressed",h)]:re,[Ie("closeColorHover",h)]:F,[Ie("closeColorPressed",h)]:ae}}=u.value,ye=mr(w);return{"--n-font-weight-strong":H,"--n-avatar-size-override":`calc(${ie} - 8px)`,"--n-bezier":v,"--n-border-radius":C,"--n-border":we,"--n-close-icon-size":Ce,"--n-close-color-pressed":ae,"--n-close-color-hover":F,"--n-close-border-radius":Y,"--n-close-icon-color":Re,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":re,"--n-close-icon-color-disabled":Re,"--n-close-margin-top":ye.top,"--n-close-margin-right":ye.right,"--n-close-margin-bottom":ye.bottom,"--n-close-margin-left":ye.left,"--n-close-size":xe,"--n-color":g||(t.value?ee:M),"--n-color-checkable":z,"--n-color-checked":q,"--n-color-checked-hover":G,"--n-color-checked-pressed":$,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":I,"--n-font-size":ne,"--n-height":ie,"--n-opacity-disabled":k,"--n-padding":b,"--n-text-color":m||pe,"--n-text-color-checkable":D,"--n-text-color-checked":S,"--n-text-color-hover-checkable":y,"--n-text-color-pressed-checkable":E}}),f=o?Gn("tag",R(()=>{let h="";const{type:p,size:g,color:{color:m,textColor:v}={}}=e;return h+=p[0],h+=g[0],m&&(h+=`a${Ks(m)}`),v&&(h+=`b${Ks(v)}`),t.value&&(h+="c"),h}),d,e):void 0;return Object.assign(Object.assign({},a),{rtlEnabled:c,mergedClsPrefix:r,contentRef:n,mergedBordered:t,handleClick:s,handleCloseClick:l,cssVars:o?void 0:d,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:u,onRender:s,$slots:l}=this;s==null||s();const a=zn(l.avatar,d=>d&&A("div",{class:`${t}-tag__avatar`},d)),c=zn(l.icon,d=>d&&A("div",{class:`${t}-tag__icon`},d));return A("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:u,[`${t}-tag--avatar`]:a,[`${t}-tag--icon`]:c,[`${t}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c||a,A("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&o?A(Ih,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?A("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),{cubicBezierEaseInOut:rt,cubicBezierEaseOut:o4,cubicBezierEaseIn:i4}=fi;function u4({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:u=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",a=s?"enter":"leave";return[L(`&.fade-in-height-expand-transition-${a}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),L(`&.fade-in-height-expand-transition-${a}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),L(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${rt} ${r},
 opacity ${n} ${o4} ${r},
 margin-top ${n} ${rt} ${r},
 margin-bottom ${n} ${rt} ${r},
 padding-top ${n} ${rt} ${r},
 padding-bottom ${n} ${rt} ${r}
 ${t?`,${t}`:""}
 `),L(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${rt},
 opacity ${n} ${i4},
 margin-top ${n} ${rt},
 margin-bottom ${n} ${rt},
 padding-top ${n} ${rt},
 padding-bottom ${n} ${rt}
 ${t?`,${t}`:""}
 `)]}const s4=O0&&"loading"in document.createElement("img");function l4(e={}){var n;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}}const hs=new WeakMap,ps=new WeakMap,gs=new WeakMap,a4=(e,n,t)=>{if(!e)return()=>{};const r=l4(n),{root:o}=r.options;let i;const u=hs.get(o);u?i=u:(i=new Map,hs.set(o,i));let s,l;i.has(r.hash)?(l=i.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=ps.get(f.target),p=gs.get(f.target);h&&h(),p&&(p.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],i.set(r.hash,l));let a=!1;const c=()=>{a||(ps.delete(e),gs.delete(e),a=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(r.hash),i.size||hs.delete(o))};return ps.set(e,c),gs.set(e,t),c};function c4(e){const{borderRadius:n,avatarColor:t,cardColor:r,fontSize:o,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,modalColor:c,popoverColor:d}=e;return{borderRadius:n,fontSize:o,border:`2px solid ${r}`,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,color:_r(r,t),colorModal:_r(c,t),colorPopover:_r(d,t)}}const d4={common:In,self:c4},f4="n-avatar-group",h4=V("avatar",`
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
`,[k0(L("&","--n-merged-color: var(--n-color-modal);")),S0(L("&","--n-merged-color: var(--n-color-popover);")),L("img",`
 width: 100%;
 height: 100%;
 `),U("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),V("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),U("text","line-height: 1.25")]),p4=Object.assign(Object.assign({},Pe.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),g4=le({name:"Avatar",props:p4,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=te(!1);let o=null;const i=te(null),u=te(null),s=()=>{const{value:b}=i;if(b&&(o===null||o!==b.innerHTML)){o=b.innerHTML;const{value:w}=u;if(w){const{offsetWidth:C,offsetHeight:k}=w,{offsetWidth:D,offsetHeight:y}=b,E=.9,S=Math.min(C/D*E,k/y*E,1);b.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},l=be(f4,null),a=R(()=>{const{size:b}=e;if(b)return b;const{size:w}=l||{};return w||"medium"}),c=Pe("Avatar","-avatar",h4,d4,e,n),d=be(jh,null),f=R(()=>{if(l)return!0;const{round:b,circle:w}=e;return b!==void 0||w!==void 0?b||w:d?d.roundRef.value:!1}),h=R(()=>l?!0:e.bordered||!1),p=R(()=>{const b=a.value,w=f.value,C=h.value,{color:k}=e,{self:{borderRadius:D,fontSize:y,color:E,border:S,colorModal:z,colorPopover:j},common:{cubicBezierEaseInOut:I}}=c.value;let q;return typeof b=="number"?q=`${b}px`:q=c.value.self[Ie("height",b)],{"--n-font-size":y,"--n-border":C?S:"none","--n-border-radius":w?"50%":D,"--n-color":k||E,"--n-color-modal":k||z,"--n-color-popover":k||j,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${q})`}}),g=t?Gn("avatar",R(()=>{const b=a.value,w=f.value,C=h.value,{color:k}=e;let D="";return b&&(typeof b=="number"?D+=`a${b}`:D+=b[0]),w&&(D+="b"),C&&(D+="c"),k&&(D+=Ks(k)),D}),p,e):void 0,m=te(!e.lazy);Ln(()=>{if(e.lazy&&e.intersectionObserverOptions){let b;const w=Rt(()=>{b==null||b(),b=void 0,e.lazy&&(b=a4(u.value,e.intersectionObserverOptions,m))});qn(()=>{w(),b==null||b()})}}),cn(()=>{var b;return e.src||((b=e.imgProps)===null||b===void 0?void 0:b.src)},()=>{r.value=!1});const v=te(!e.lazy);return{textRef:i,selfRef:u,mergedRoundRef:f,mergedClsPrefix:n,fitTextTransform:s,cssVars:t?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:r,shouldStartLoading:m,loaded:v,mergedOnError:b=>{if(!m.value)return;r.value=!0;const{onError:w,imgProps:{onError:C}={}}=e;w==null||w(b),C==null||C(b)},mergedOnLoad:b=>{const{onLoad:w,imgProps:{onLoad:C}={}}=e;w==null||w(b),C==null||C(b),v.value=!0}}},render(){var e,n;const{$slots:t,src:r,mergedClsPrefix:o,lazy:i,onRender:u,loaded:s,hasLoadError:l,imgProps:a={}}=this;u==null||u();let c;const d=!s&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Ws(t.fallback,()=>[A("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=zn(t.default,f=>{if(f)return A(Yi,{onResize:this.fitTextTransform},{default:()=>A("span",{ref:"textRef",class:`${o}-avatar__text`},f)});if(r||a.src){const h=this.src||a.src;return A("img",Object.assign(Object.assign({},a),{loading:s4&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:i&&this.intersectionObserverOptions?this.shouldStartLoading?h:void 0:h,"data-image-src":h,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[a.style||"",{objectFit:this.objectFit},d?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),A("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},c,i&&d)}}),m4={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function b4(e){const{primaryColor:n,borderRadius:t,lineHeight:r,fontSize:o,cardColor:i,textColor2:u,textColor1:s,dividerColor:l,fontWeightStrong:a,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:g,boxShadow1:m,popoverColor:v,actionColor:b}=e;return Object.assign(Object.assign({},m4),{lineHeight:r,color:i,colorModal:g,colorPopover:v,colorTarget:n,colorEmbedded:b,colorEmbeddedModal:b,colorEmbeddedPopover:b,textColor:u,titleTextColor:s,borderColor:l,actionColor:b,titleFontWeight:a,closeColorHover:h,closeColorPressed:p,closeBorderRadius:t,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:m,borderRadius:t})}const v4={common:In,self:b4},x4=L([V("card",`
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
 `,[hb({background:"var(--n-color-modal)"}),X("hoverable",[L("&:hover","box-shadow: var(--n-box-shadow);")]),X("content-segmented",[L(">",[U("content",{paddingTop:"var(--n-padding-bottom)"})])]),X("content-soft-segmented",[L(">",[U("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),X("footer-segmented",[L(">",[U("footer",{paddingTop:"var(--n-padding-bottom)"})])]),X("footer-soft-segmented",[L(">",[U("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),L(">",[V("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[U("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),U("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),U("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),U("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),U("content","flex: 1; min-width: 0;"),U("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[L("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),U("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),V("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[L("img",`
 display: block;
 width: 100%;
 `)]),X("bordered",`
 border: 1px solid var(--n-border-color);
 `,[L("&:target","border-color: var(--n-color-target);")]),X("action-segmented",[L(">",[U("action",[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),X("content-segmented, content-soft-segmented",[L(">",[U("content",{transition:"border-color 0.3s var(--n-bezier)"},[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),X("footer-segmented, footer-soft-segmented",[L(">",[U("footer",{transition:"border-color 0.3s var(--n-bezier)"},[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),X("embedded",`
 background-color: var(--n-color-embedded);
 `)]),k0(V("card",`
 background: var(--n-color-modal);
 `,[X("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),S0(V("card",`
 background: var(--n-color-popover);
 `,[X("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),y4={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},C4=Object.assign(Object.assign({},Pe.props),y4),_4=le({name:"Card",props:C4,slots:Object,setup(e){const n=()=>{const{onClose:a}=e;a&&Ye(a)},{inlineThemeDisabled:t,mergedClsPrefixRef:r,mergedRtlRef:o}=kn(e),i=Pe("Card","-card",x4,v4,e,r),u=Xl("Card",o,r),s=R(()=>{const{size:a}=e,{self:{color:c,colorModal:d,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:g,borderColor:m,actionColor:v,borderRadius:b,lineHeight:w,closeIconColor:C,closeIconColorHover:k,closeIconColorPressed:D,closeColorHover:y,closeColorPressed:E,closeBorderRadius:S,closeIconSize:z,closeSize:j,boxShadow:I,colorPopover:q,colorEmbedded:G,colorEmbeddedModal:$,colorEmbeddedPopover:Y,[Ie("padding",a)]:H,[Ie("fontSize",a)]:ee,[Ie("titleFontSize",a)]:xe},common:{cubicBezierEaseInOut:Ce}}=i.value,{top:ne,left:ie,bottom:M}=mr(H);return{"--n-bezier":Ce,"--n-border-radius":b,"--n-color":c,"--n-color-modal":d,"--n-color-popover":q,"--n-color-embedded":G,"--n-color-embedded-modal":$,"--n-color-embedded-popover":Y,"--n-color-target":f,"--n-text-color":h,"--n-line-height":w,"--n-action-color":v,"--n-title-text-color":p,"--n-title-font-weight":g,"--n-close-icon-color":C,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":D,"--n-close-color-hover":y,"--n-close-color-pressed":E,"--n-border-color":m,"--n-box-shadow":I,"--n-padding-top":ne,"--n-padding-bottom":M,"--n-padding-left":ie,"--n-font-size":ee,"--n-title-font-size":xe,"--n-close-size":j,"--n-close-icon-size":z,"--n-close-border-radius":S}}),l=t?Gn("card",R(()=>e.size[0]),s,e):void 0;return{rtlEnabled:u,mergedClsPrefix:r,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:r,rtlEnabled:o,onRender:i,embedded:u,tag:s,$slots:l}=this;return i==null||i(),A(s,{class:[`${r}-card`,this.themeClass,u&&`${r}-card--embedded`,{[`${r}-card--rtl`]:o,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:n,[`${r}-card--hoverable`]:t}],style:this.cssVars,role:this.role},zn(l.cover,a=>{const c=this.cover?Xn([this.cover()]):a;return c&&A("div",{class:`${r}-card-cover`,role:"none"},c)}),zn(l.header,a=>{const{title:c}=this,d=c?Xn(typeof c=="function"?[c()]:[c]):a;return d||this.closable?A("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},A("div",{class:`${r}-card-header__main`,role:"heading"},d),zn(l["header-extra"],f=>{const h=this.headerExtra?Xn([this.headerExtra()]):f;return h&&A("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&A(Ih,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),zn(l.default,a=>{const{content:c}=this,d=c?Xn(typeof c=="function"?[c()]:[c]):a;return d&&A("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},d)}),zn(l.footer,a=>{const c=this.footer?Xn([this.footer()]):a;return c&&A("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},c)}),zn(l.action,a=>{const c=this.action?Xn([this.action()]):a;return c&&A("div",{class:`${r}-card__action`,role:"none"},c)}))}}),w4={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Go("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},k4=le({name:"ConfigProvider",alias:["App"],props:w4,setup(e){const n=be(Ot,null),t=R(()=>{const{theme:g}=e;if(g===null)return;const m=n==null?void 0:n.mergedThemeRef.value;return g===void 0?m:m===void 0?g:Object.assign({},m,g)}),r=R(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const m=n==null?void 0:n.mergedThemeOverridesRef.value;return m===void 0?g:ko({},m,g)}}}),o=Fn(()=>{const{namespace:g}=e;return g===void 0?n==null?void 0:n.mergedNamespaceRef.value:g}),i=Fn(()=>{const{bordered:g}=e;return g===void 0?n==null?void 0:n.mergedBorderedRef.value:g}),u=R(()=>{const{icons:g}=e;return g===void 0?n==null?void 0:n.mergedIconsRef.value:g}),s=R(()=>{const{componentOptions:g}=e;return g!==void 0?g:n==null?void 0:n.mergedComponentPropsRef.value}),l=R(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n?n.mergedClsPrefixRef.value:qs}),a=R(()=>{var g;const{rtl:m}=e;if(m===void 0)return n==null?void 0:n.mergedRtlRef.value;const v={};for(const b of m)v[b.name]=Mo(b),(g=b.peers)===null||g===void 0||g.forEach(w=>{w.name in v||(v[w.name]=Mo(w))});return v}),c=R(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),f=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),h=e.styleMountTarget||(n==null?void 0:n.styleMountTarget),p=R(()=>{const{value:g}=t,{value:m}=r,v=m&&Object.keys(m).length!==0,b=g==null?void 0:g.name;return b?v?`${b}-${Ko(JSON.stringify(r.value))}`:b:v?Ko(JSON.stringify(r.value)):""});return je(Ot,{mergedThemeHashRef:p,mergedBreakpointsRef:c,mergedRtlRef:a,mergedIconsRef:u,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:R(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedLocaleRef.value:g}),mergedDateLocaleRef:R(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedDateLocaleRef.value:g}),mergedHljsRef:R(()=>{const{hljs:g}=e;return g===void 0?n==null?void 0:n.mergedHljsRef.value:g}),mergedKatexRef:R(()=>{const{katex:g}=e;return g===void 0?n==null?void 0:n.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:r,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1,styleMountTarget:h}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:t,mergedThemeOverrides:r}},render(){var e,n,t,r;return this.abstract?(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t):A(this.as||this.tag,{class:`${this.mergedClsPrefix||qs}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),S4={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function E4(e){const{primaryColor:n,textColor2:t,dividerColor:r,hoverColor:o,popoverColor:i,invertedColor:u,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:g,textColor3:m,opacityDisabled:v}=e;return Object.assign(Object.assign({},S4),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:g,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:o,optionColorActive:Fe(n,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:v})}const Hh={name:"Dropdown",common:In,peers:{Popover:Ql},self:E4},A4={padding:"8px 14px"};function T4(e){const{borderRadius:n,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},A4),{borderRadius:n,boxShadow:t,color:_r(r,"rgba(0, 0, 0, .85)"),textColor:r})}const Uh={name:"Tooltip",common:In,peers:{Popover:Ql},self:T4},D4=Object.assign(Object.assign({},Du),Pe.props),z4=le({name:"Tooltip",props:D4,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=kn(e),t=Pe("Tooltip","-tooltip",void 0,Uh,e,n),r=te(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(i){r.value.setShow(i)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:R(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return A(Lh,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ea="n-dropdown-menu",zu="n-dropdown",nd="n-dropdown-option",Kh=le({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return A("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),F4=le({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=be(ea),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:i}=be(zu);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:i,renderOption:u}=this,{rawNode:s}=this.tmNode,l=A("div",Object.assign({class:`${n}-dropdown-option`},o==null?void 0:o(s)),A("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},A("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},ft(s.icon)),A("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ft((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),A("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:l,option:s}):l}});function I4(e){const{textColorBase:n,opacity1:t,opacity2:r,opacity3:o,opacity4:i,opacity5:u}=e;return{color:n,opacity1Depth:t,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:u}}const P4={common:In,self:I4},R4=V("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[X("color-transition",{transition:"color .3s var(--n-bezier)"}),X("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),$4=Object.assign(Object.assign({},Pe.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Vh=le({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:$4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Icon","-icon",R4,P4,e,n),o=R(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(u!==void 0){const{color:a,[`opacity${u}Depth`]:c}=l;return{"--n-bezier":s,"--n-color":a,"--n-opacity":c}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Gn("icon",R(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:n,mergedStyle:R(()=>{const{size:u,color:s}=e;return{fontSize:er(u),color:s}}),cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:o,onRender:i,themeClass:u}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Go("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),A("i",Pr(this.$attrs,{role:"img",class:[`${r}-icon`,u,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?A(o):this.$slots)}});function rl(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function O4(e){return e.type==="group"}function Wh(e){return e.type==="divider"}function B4(e){return e.type==="render"}const qh=le({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=be(zu),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:i,activeKeyPathRef:u,animatedRef:s,mergedShowRef:l,renderLabelRef:a,renderIconRef:c,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:p,menuPropsRef:g}=n,m=be(nd,null),v=be(ea),b=be(ku),w=R(()=>e.tmNode.rawNode),C=R(()=>{const{value:H}=f;return rl(e.tmNode.rawNode,H)}),k=R(()=>{const{disabled:H}=e.tmNode;return H}),D=R(()=>{if(!C.value)return!1;const{key:H,disabled:ee}=e.tmNode;if(ee)return!1;const{value:xe}=t,{value:Ce}=r,{value:ne}=o,{value:ie}=i;return xe!==null?ie.includes(H):Ce!==null?ie.includes(H)&&ie[ie.length-1]!==H:ne!==null?ie.includes(H):!1}),y=R(()=>r.value===null&&!s.value),E=Ub(D,300,y),S=R(()=>!!(m!=null&&m.enteringSubmenuRef.value)),z=te(!1);je(nd,{enteringSubmenuRef:z});function j(){z.value=!0}function I(){z.value=!1}function q(){const{parentKey:H,tmNode:ee}=e;ee.disabled||l.value&&(o.value=H,r.value=null,t.value=ee.key)}function G(){const{tmNode:H}=e;H.disabled||l.value&&t.value!==H.key&&q()}function $(H){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:ee}=H;ee&&!ec({target:ee},"dropdownOption")&&!ec({target:ee},"scrollbarRail")&&(t.value=null)}function Y(){const{value:H}=C,{tmNode:ee}=e;l.value&&!H&&!ee.disabled&&(n.doSelect(ee.key,ee.rawNode),n.doUpdateShow(!1))}return{labelField:d,renderLabel:a,renderIcon:c,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:b,animated:s,mergedShowSubmenu:R(()=>E.value&&!S.value),rawNode:w,hasSubmenu:C,pending:Fn(()=>{const{value:H}=i,{key:ee}=e.tmNode;return H.includes(ee)}),childActive:Fn(()=>{const{value:H}=u,{key:ee}=e.tmNode,xe=H.findIndex(Ce=>ee===Ce);return xe===-1?!1:xe<H.length-1}),active:Fn(()=>{const{value:H}=u,{key:ee}=e.tmNode,xe=H.findIndex(Ce=>ee===Ce);return xe===-1?!1:xe===H.length-1}),mergedDisabled:k,renderOption:h,nodeProps:p,handleClick:Y,handleMouseMove:G,handleMouseEnter:q,handleMouseLeave:$,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:I}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:i,siblingHasIcon:u,siblingHasSubmenu:s,renderLabel:l,renderIcon:a,renderOption:c,nodeProps:d,props:f,scrollable:h}=this;let p=null;if(o){const b=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=A(Gh,Object.assign({},b,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=d==null?void 0:d(r),v=A("div",Object.assign({class:[`${i}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),A("div",Pr(g,f),[A("div",{class:[`${i}-dropdown-option-body__prefix`,u&&`${i}-dropdown-option-body__prefix--show-icon`]},[a?a(r):ft(r.icon)]),A("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(r):ft((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),A("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?A(Vh,null,{default:()=>A(Fh,null)}):null)]),this.hasSubmenu?A(N0,null,{default:()=>[A(L0,null,{default:()=>A("div",{class:`${i}-dropdown-offset-container`},A(U0,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>A("div",{class:`${i}-dropdown-menu-wrapper`},t?A(Dr,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:v,option:r}):v}}),M4=le({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return A(Le,null,A(F4,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>{const{rawNode:i}=o;return i.show===!1?null:Wh(i)?A(Kh,{clsPrefix:t,key:o.key}):o.isGroup?(Go("dropdown","`group` node is not allowed to be put in `group` node."),null):A(qh,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),N4=le({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return A("div",n,[e==null?void 0:e()])}}),Gh=le({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=be(zu);je(ea,{showIconRef:R(()=>{const o=n.value;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>o?o(l):l.icon);const{rawNode:s}=i;return o?o(s):s.icon})}),hasSubmenuRef:R(()=>{const{value:o}=t;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>rl(l,o));const{rawNode:s}=i;return rl(s,o)})})});const r=te(null);return je(Rl,null),je(Pl,null),je(ku,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:i}=o;return i.show===!1?null:B4(i)?A(N4,{tmNode:o,key:o.key}):Wh(i)?A(Kh,{clsPrefix:n,key:o.key}):O4(i)?A(M4,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):A(qh,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:i.props,scrollable:t})});return A("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?A($h,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Nh({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),L4=V("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[U6(),V("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),V("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ln("disabled",[X("pending",`
 color: var(--n-option-text-color-hover);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),X("active",`
 color: var(--n-option-text-color-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),X("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),X("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),X("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[U("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[X("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),U("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[X("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),V("icon",`
 font-size: var(--n-option-icon-size);
 `)]),U("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),U("suffix",`
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
 `,[X("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),V("icon",`
 font-size: var(--n-option-icon-size);
 `)]),V("dropdown-menu","pointer-events: all;")]),V("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),V("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),V("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[V("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ln("scrollable",`
 padding: var(--n-padding);
 `),X("scrollable",[U("content",`
 padding: var(--n-padding);
 `)])]),j4={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},H4=Object.keys(Du),U4=Object.assign(Object.assign(Object.assign({},Du),j4),Pe.props),K4=le({name:"Dropdown",inheritAttrs:!1,props:U4,setup(e){const n=te(!1),t=Wo(Ue(e,"show"),n),r=R(()=>{const{keyField:I,childrenField:q}=e;return $i(e.options,{getKey(G){return G[I]},getDisabled(G){return G.disabled===!0},getIgnored(G){return G.type==="divider"||G.type==="render"},getChildren(G){return G[q]}})}),o=R(()=>r.value.treeNodes),i=te(null),u=te(null),s=te(null),l=R(()=>{var I,q,G;return(G=(q=(I=i.value)!==null&&I!==void 0?I:u.value)!==null&&q!==void 0?q:s.value)!==null&&G!==void 0?G:null}),a=R(()=>r.value.getPath(l.value).keyPath),c=R(()=>r.value.getPath(e.value).keyPath),d=Fn(()=>e.keyboard&&t.value);jb({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:C},ArrowDown:{prevent:!0,handler:D},ArrowLeft:{prevent:!0,handler:w},Enter:{prevent:!0,handler:y},Escape:b}},d);const{mergedClsPrefixRef:f,inlineThemeDisabled:h}=kn(e),p=Pe("Dropdown","-dropdown",L4,Hh,e,f);je(zu,{labelFieldRef:Ue(e,"labelField"),childrenFieldRef:Ue(e,"childrenField"),renderLabelRef:Ue(e,"renderLabel"),renderIconRef:Ue(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:u,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:a,activeKeyPathRef:c,animatedRef:Ue(e,"animated"),mergedShowRef:t,nodePropsRef:Ue(e,"nodeProps"),renderOptionRef:Ue(e,"renderOption"),menuPropsRef:Ue(e,"menuProps"),doSelect:g,doUpdateShow:m}),cn(t,I=>{!e.animated&&!I&&v()});function g(I,q){const{onSelect:G}=e;G&&Ye(G,I,q)}function m(I){const{"onUpdate:show":q,onUpdateShow:G}=e;q&&Ye(q,I),G&&Ye(G,I),n.value=I}function v(){i.value=null,u.value=null,s.value=null}function b(){m(!1)}function w(){S("left")}function C(){S("right")}function k(){S("up")}function D(){S("down")}function y(){const I=E();I!=null&&I.isLeaf&&t.value&&(g(I.key,I.rawNode),m(!1))}function E(){var I;const{value:q}=r,{value:G}=l;return!q||G===null?null:(I=q.getNode(G))!==null&&I!==void 0?I:null}function S(I){const{value:q}=l,{value:{getFirstAvailableNode:G}}=r;let $=null;if(q===null){const Y=G();Y!==null&&($=Y.key)}else{const Y=E();if(Y){let H;switch(I){case"down":H=Y.getNext();break;case"up":H=Y.getPrev();break;case"right":H=Y.getChild();break;case"left":H=Y.getParent();break}H&&($=H.key)}}$!==null&&(i.value=null,u.value=$)}const z=R(()=>{const{size:I,inverted:q}=e,{common:{cubicBezierEaseInOut:G},self:$}=p.value,{padding:Y,dividerColor:H,borderRadius:ee,optionOpacityDisabled:xe,[Ie("optionIconSuffixWidth",I)]:Ce,[Ie("optionSuffixWidth",I)]:ne,[Ie("optionIconPrefixWidth",I)]:ie,[Ie("optionPrefixWidth",I)]:M,[Ie("fontSize",I)]:pe,[Ie("optionHeight",I)]:we,[Ie("optionIconSize",I)]:Re}=$,P={"--n-bezier":G,"--n-font-size":pe,"--n-padding":Y,"--n-border-radius":ee,"--n-option-height":we,"--n-option-prefix-width":M,"--n-option-icon-prefix-width":ie,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":Ce,"--n-option-icon-size":Re,"--n-divider-color":H,"--n-option-opacity-disabled":xe};return q?(P["--n-color"]=$.colorInverted,P["--n-option-color-hover"]=$.optionColorHoverInverted,P["--n-option-color-active"]=$.optionColorActiveInverted,P["--n-option-text-color"]=$.optionTextColorInverted,P["--n-option-text-color-hover"]=$.optionTextColorHoverInverted,P["--n-option-text-color-active"]=$.optionTextColorActiveInverted,P["--n-option-text-color-child-active"]=$.optionTextColorChildActiveInverted,P["--n-prefix-color"]=$.prefixColorInverted,P["--n-suffix-color"]=$.suffixColorInverted,P["--n-group-header-text-color"]=$.groupHeaderTextColorInverted):(P["--n-color"]=$.color,P["--n-option-color-hover"]=$.optionColorHover,P["--n-option-color-active"]=$.optionColorActive,P["--n-option-text-color"]=$.optionTextColor,P["--n-option-text-color-hover"]=$.optionTextColorHover,P["--n-option-text-color-active"]=$.optionTextColorActive,P["--n-option-text-color-child-active"]=$.optionTextColorChildActive,P["--n-prefix-color"]=$.prefixColor,P["--n-suffix-color"]=$.suffixColor,P["--n-group-header-text-color"]=$.groupHeaderTextColor),P}),j=h?Gn("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),z,e):void 0;return{mergedClsPrefix:f,mergedTheme:p,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&v()},doUpdateShow:m,cssVars:h?void 0:z,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(r,o,i,u,s)=>{var l;const{mergedClsPrefix:a,menuProps:c}=this;(l=this.onRender)===null||l===void 0||l.call(this);const d=(c==null?void 0:c(void 0,this.tmNodes.map(h=>h.rawNode)))||{},f={ref:Ov(o),class:[r,`${a}-dropdown`,this.themeClass],clsPrefix:a,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:s};return A(Gh,Pr(this.$attrs,f,d))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return A(Lh,Object.assign({},Io(this.$props,H4),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}});function V4(e){const{textColor1:n,dividerColor:t,fontWeightStrong:r}=e;return{textColor:n,color:t,fontWeight:r}}const W4={common:In,self:V4},q4=V("divider",`
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
 `)]),U("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),X("title-position-left",[U("line",[X("left",{width:"28px"})])]),X("title-position-right",[U("line",[X("right",{width:"28px"})])]),X("dashed",[U("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),X("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),U("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),ln("dashed",[U("line",{backgroundColor:"var(--n-color)"})]),X("dashed",[U("line",{borderColor:"var(--n-color)"})]),X("vertical",{backgroundColor:"var(--n-color)"})]),G4=Object.assign(Object.assign({},Pe.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Z4=le({name:"Divider",props:G4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Divider","-divider",q4,W4,e,n),o=R(()=>{const{common:{cubicBezierEaseInOut:u},self:{color:s,textColor:l,fontWeight:a}}=r.value;return{"--n-bezier":u,"--n-color":s,"--n-text-color":l,"--n-font-weight":a}}),i=t?Gn("divider",void 0,o,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:u}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("div",{role:"separator",class:[`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:r,[`${u}-divider--no-title`]:!n.default,[`${u}-divider--dashed`]:o,[`${u}-divider--title-position-${t}`]:n.default&&t}],style:i},r?null:A("div",{class:`${u}-divider__line ${u}-divider__line--left`}),!r&&n.default?A(Le,null,A("div",{class:`${u}-divider__title`},this.$slots),A("div",{class:`${u}-divider__line ${u}-divider__line--right`})):null)}});function X4(e){const{baseColor:n,textColor2:t,bodyColor:r,cardColor:o,dividerColor:i,actionColor:u,scrollbarColor:s,scrollbarColorHover:l,invertedColor:a}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:u,headerColor:o,headerColorInverted:a,footerColor:u,footerColorInverted:a,headerBorderColor:i,headerBorderColorInverted:a,footerBorderColor:i,footerBorderColorInverted:a,siderBorderColor:i,siderBorderColorInverted:a,siderColor:o,siderColorInverted:a,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:_r(r,s),siderToggleBarColorHover:_r(r,l),__invertScrollbar:"true"}}const Zh={name:"Layout",common:In,peers:{Scrollbar:Rh},self:X4};function Y4(e,n,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}function J4(e){const{borderRadius:n,textColor3:t,primaryColor:r,textColor2:o,textColor1:i,fontSize:u,dividerColor:s,hoverColor:l,primaryColorHover:a}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:Fe(r,{alpha:.1}),itemColorActiveHover:Fe(r,{alpha:.1}),itemColorActiveCollapsed:Fe(r,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:a,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:a,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:s},Y4("#BBB",r,"#FFF","#AAA"))}const Q4={name:"Menu",common:In,peers:{Tooltip:Uh,Dropdown:Hh},self:J4},e5={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function n5(e){const{textColor3:n,infoColor:t,errorColor:r,successColor:o,warningColor:i,textColor1:u,textColor2:s,railColor:l,fontWeightStrong:a,fontSize:c}=e;return Object.assign(Object.assign({},e5),{contentFontSize:c,titleFontWeight:a,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:r,iconColorSuccess:o,iconColorWarning:i,titleTextColor:u,contentTextColor:s,metaTextColor:n,lineColor:l})}const t5={common:In,self:n5};function r5(e,n){const t=[];let r=0,o;for(;(o=n.exec(e))!==null&&(o.index>r&&t.push({text:e.slice(r,o.index),isMatch:!1}),t.push({text:o[0],isMatch:!0}),r=n.lastIndex,!!n.global););return r<e.length&&t.push({text:e.slice(r),isMatch:!1}),t}const o5={highlightTag:{type:String,default:"mark"},caseSensitive:Boolean,autoEscape:{type:Boolean,default:!0},text:String,patterns:{type:Array,default:()=>[]},highlightClass:String,highlightStyle:[Object,String]},i5=le({name:"Highlight",props:o5,setup(e){const{mergedClsPrefixRef:n}=kn(),t=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{highlightedNode:R(()=>{const o=n.value;let i=[];const{patterns:u,text:s}=e;if(u.length===0||!s)i=[s];else{const{highlightTag:l,caseSensitive:a,autoEscape:c,highlightClass:d,highlightStyle:f}=e,h=u.map(m=>c?t(m):m).join("|"),p=new RegExp(`(${h})`,a?"g":"gi");i=r5(s,p).map(({text:m,isMatch:v})=>v?A(l,{class:[`${o}-highlight__mark`,d],style:f},m):m)}return A("span",{class:`${o}-highlight`},i)}),mergedClsPrefix:n}},render(){return this.highlightedNode}}),Xh="n-layout-sider",Yh={type:String,default:"static"},u5=V("layout",`
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
`,[V("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),X("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s5={embedded:Boolean,position:Yh,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Jh="n-layout";function l5(e){return le({name:"Layout",props:Object.assign(Object.assign({},Pe.props),s5),setup(n){const t=te(null),r=te(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=kn(n),u=Pe("Layout","-layout",u5,Zh,n,o);function s(g,m){if(n.nativeScrollbar){const{value:v}=t;v&&(m===void 0?v.scrollTo(g):v.scrollTo(g,m))}else{const{value:v}=r;v&&v.scrollTo(g,m)}}je(Jh,n);let l=0,a=0;const c=g=>{var m;const v=g.target;l=v.scrollLeft,a=v.scrollTop,(m=n.onScroll)===null||m===void 0||m.call(n,g)};$l(()=>{if(n.nativeScrollbar){const g=t.value;g&&(g.scrollTop=a,g.scrollLeft=l)}});const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:s},h=R(()=>{const{common:{cubicBezierEaseInOut:g},self:m}=u.value;return{"--n-bezier":g,"--n-color":n.embedded?m.colorEmbedded:m.color,"--n-text-color":m.textColor}}),p=i?Gn("layout",R(()=>n.embedded?"e":""),h,n):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:d,mergedTheme:u,handleNativeElScroll:c,cssVars:i?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},f)},render(){var n;const{mergedClsPrefix:t,hasSider:r}=this;(n=this.onRender)===null||n===void 0||n.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return A("div",{class:i,style:this.cssVars},this.nativeScrollbar?A("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):A(Tu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const td=l5(!1),a5=V("layout-sider",`
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
`,[X("bordered",[U("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),U("left-placement",[X("bordered",[U("border",`
 right: 0;
 `)])]),X("right-placement",`
 justify-content: flex-start;
 `,[X("bordered",[U("border",`
 left: 0;
 `)]),X("collapsed",[V("layout-toggle-button",[V("base-icon",`
 transform: rotate(180deg);
 `)]),V("layout-toggle-bar",[L("&:hover",[U("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),V("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[V("base-icon",`
 transform: rotate(0);
 `)]),V("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[L("&:hover",[U("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),X("collapsed",[V("layout-toggle-bar",[L("&:hover",[U("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),V("layout-toggle-button",[V("base-icon",`
 transform: rotate(0);
 `)])]),V("layout-toggle-button",`
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
 `,[V("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),V("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[U("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),U("bottom",`
 position: absolute;
 top: 34px;
 `),L("&:hover",[U("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),U("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),L("&:hover",[U("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),U("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),V("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),X("show-content",[V("layout-sider-scroll-container",{opacity:1})]),X("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),c5=le({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},A("div",{class:`${e}-layout-toggle-bar__top`}),A("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),d5=le({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},A(Yl,{clsPrefix:e},{default:()=>A(Fh,null)}))}}),f5={position:Yh,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},h5=le({name:"LayoutSider",props:Object.assign(Object.assign({},Pe.props),f5),setup(e){const n=be(Jh),t=te(null),r=te(null),o=te(e.defaultCollapsed),i=Wo(Ue(e,"collapsed"),o),u=R(()=>er(i.value?e.collapsedWidth:e.width)),s=R(()=>e.collapseMode!=="transform"?{}:{minWidth:er(e.width)}),l=R(()=>n?n.siderPlacement:"left");function a(k,D){if(e.nativeScrollbar){const{value:y}=t;y&&(D===void 0?y.scrollTo(k):y.scrollTo(k,D))}else{const{value:y}=r;y&&y.scrollTo(k,D)}}function c(){const{"onUpdate:collapsed":k,onUpdateCollapsed:D,onExpand:y,onCollapse:E}=e,{value:S}=i;D&&Ye(D,!S),k&&Ye(k,!S),o.value=!S,S?y&&Ye(y):E&&Ye(E)}let d=0,f=0;const h=k=>{var D;const y=k.target;d=y.scrollLeft,f=y.scrollTop,(D=e.onScroll)===null||D===void 0||D.call(e,k)};$l(()=>{if(e.nativeScrollbar){const k=t.value;k&&(k.scrollTop=f,k.scrollLeft=d)}}),je(Xh,{collapsedRef:i,collapseModeRef:Ue(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=kn(e),m=Pe("Layout","-layout-sider",a5,Zh,e,p);function v(k){var D,y;k.propertyName==="max-width"&&(i.value?(D=e.onAfterLeave)===null||D===void 0||D.call(e):(y=e.onAfterEnter)===null||y===void 0||y.call(e))}const b={scrollTo:a},w=R(()=>{const{common:{cubicBezierEaseInOut:k},self:D}=m.value,{siderToggleButtonColor:y,siderToggleButtonBorder:E,siderToggleBarColor:S,siderToggleBarColorHover:z}=D,j={"--n-bezier":k,"--n-toggle-button-color":y,"--n-toggle-button-border":E,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":z};return e.inverted?(j["--n-color"]=D.siderColorInverted,j["--n-text-color"]=D.textColorInverted,j["--n-border-color"]=D.siderBorderColorInverted,j["--n-toggle-button-icon-color"]=D.siderToggleButtonIconColorInverted,j.__invertScrollbar=D.__invertScrollbar):(j["--n-color"]=D.siderColor,j["--n-text-color"]=D.textColor,j["--n-border-color"]=D.siderBorderColor,j["--n-toggle-button-icon-color"]=D.siderToggleButtonIconColor),j}),C=g?Gn("layout-sider",R(()=>e.inverted?"a":"b"),w,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:m,styleMaxWidth:u,mergedCollapsed:i,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:v,handleTriggerClick:c,inlineThemeDisabled:g,cssVars:w,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},b)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,t&&`${n}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:er(this.width)}]},this.nativeScrollbar?A("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):A(Tu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?A(c5,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):A(d5,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?A("div",{class:`${n}-layout-sider__border`}):null)}}),hi="n-menu",na="n-submenu",ta="n-menu-item-group",rd=[L("&::before","background-color: var(--n-item-color-hover);"),U("arrow",`
 color: var(--n-arrow-color-hover);
 `),U("icon",`
 color: var(--n-item-icon-color-hover);
 `),V("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[L("a",`
 color: var(--n-item-text-color-hover);
 `),U("extra",`
 color: var(--n-item-text-color-hover);
 `)])],od=[U("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),V("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),U("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],p5=L([V("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[X("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[V("submenu","margin: 0;"),V("menu-item","margin: 0;"),V("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[L("&::before","display: none;"),X("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),V("menu-item-content",[X("selected",[U("icon","color: var(--n-item-icon-color-active-horizontal);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-horizontal);"),U("extra","color: var(--n-item-text-color-active-horizontal);")])]),X("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),U("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),U("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ln("disabled",[ln("selected, child-active",[L("&:focus-within",od)]),X("selected",[cr(null,[U("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),X("child-active",[cr(null,[U("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),cr("border-bottom: 2px solid var(--n-border-color-horizontal);",od)]),V("menu-item-content-header",[L("a","color: var(--n-item-text-color-horizontal);")])])]),ln("responsive",[V("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),X("collapsed",[V("menu-item-content",[X("selected",[L("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),V("menu-item-content-header","opacity: 0;"),U("arrow","opacity: 0;"),U("icon","color: var(--n-item-icon-color-collapsed);")])]),V("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),V("menu-item-content",`
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
 `,[L("> *","z-index: 1;"),L("&::before",`
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
 `),X("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),X("collapsed",[U("arrow","transform: rotate(0);")]),X("selected",[L("&::before","background-color: var(--n-item-color-active);"),U("arrow","color: var(--n-arrow-color-active);"),U("icon","color: var(--n-item-icon-color-active);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[L("a","color: var(--n-item-text-color-active);"),U("extra","color: var(--n-item-text-color-active);")])]),X("child-active",[V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[L("a",`
 color: var(--n-item-text-color-child-active);
 `),U("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),U("arrow",`
 color: var(--n-arrow-color-child-active);
 `),U("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ln("disabled",[ln("selected, child-active",[L("&:focus-within",rd)]),X("selected",[cr(null,[U("arrow","color: var(--n-arrow-color-active-hover);"),U("icon","color: var(--n-item-icon-color-active-hover);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[L("a","color: var(--n-item-text-color-active-hover);"),U("extra","color: var(--n-item-text-color-active-hover);")])])]),X("child-active",[cr(null,[U("arrow","color: var(--n-arrow-color-child-active-hover);"),U("icon","color: var(--n-item-icon-color-child-active-hover);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[L("a","color: var(--n-item-text-color-child-active-hover);"),U("extra","color: var(--n-item-text-color-child-active-hover);")])])]),X("selected",[cr(null,[L("&::before","background-color: var(--n-item-color-active-hover);")])]),cr(null,rd)]),U("icon",`
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
 `),U("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),V("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[L("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),U("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),V("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[V("menu-item-content",`
 height: var(--n-item-height);
 `),V("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[u4({duration:".2s"})])]),V("menu-item-group",[V("menu-item-group-title",`
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
 `)])]),V("menu-tooltip",[L("a",`
 color: inherit;
 text-decoration: none;
 `)]),V("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function cr(e,n){return[X("hover",e,n),L("&:hover",e,n)]}const Qh=le({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=be(hi);return{menuProps:n,style:R(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:R(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:o}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${o}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:r,renderExtra:o,expandIcon:i}}=this,u=t?t(n.rawNode):ft(this.icon);return A("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&A("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),A("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(n.rawNode):ft(this.title),this.extra||o?A("span",{class:`${e}-menu-item-content-header__extra`}," ",o?o(n.rawNode):ft(this.extra)):null),this.showArrow?A(Yl,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):A(a6,null)}):null)}}),Di=8;function ra(e){const n=be(hi),{props:t,mergedCollapsedRef:r}=n,o=be(na,null),i=be(ta,null),u=R(()=>t.mode==="horizontal"),s=R(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=R(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),a=R(()=>{var f;return!u.value&&e.root&&r.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),c=R(()=>{if(u.value)return;const{collapsedWidth:f,indent:h,rootIndent:p}=t,{root:g,isGroup:m}=e,v=p===void 0?h:p;return g?r.value?f/2-l.value/2:v:i&&typeof i.paddingLeftRef.value=="number"?h/2+i.paddingLeftRef.value:o&&typeof o.paddingLeftRef.value=="number"?(m?h/2:h)+o.paddingLeftRef.value:0}),d=R(()=>{const{collapsedWidth:f,indent:h,rootIndent:p}=t,{value:g}=l,{root:m}=e;return u.value||!m||!r.value?Di:(p===void 0?h:p)+g+Di-(f+g)/2});return{dropdownPlacement:s,activeIconSize:a,maxIconSize:l,paddingLeft:c,iconMarginRight:d,NMenu:n,NSubmenu:o}}const oa={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},g5=le({name:"MenuDivider",setup(){const e=be(hi),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:A("div",{class:`${n.value}-menu-divider`})}}),ep=Object.assign(Object.assign({},oa),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),m5=Bl(ep),b5=le({name:"MenuOption",props:ep,setup(e){const n=ra(e),{NSubmenu:t,NMenu:r}=n,{props:o,mergedClsPrefixRef:i,mergedCollapsedRef:u}=r,s=t?t.mergedDisabledRef:{value:!1},l=R(()=>s.value||e.disabled);function a(d){const{onClick:f}=e;f&&f(d)}function c(d){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),a(d))}return{mergedClsPrefix:i,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:o,dropdownEnabled:Fn(()=>e.root&&u.value&&o.mode!=="horizontal"&&!l.value),selected:Fn(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:c}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:r,nodeProps:o}}=this,i=o==null?void 0:o(t.rawNode);return A("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),A(z4,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):ft(this.title),trigger:()=>A(Qh,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),np=Object.assign(Object.assign({},oa),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),v5=Bl(np),x5=le({name:"MenuOptionGroup",props:np,setup(e){je(na,null);const n=ra(e);je(ta,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:t,props:r}=be(hi);return function(){const{value:o}=t,i=n.paddingLeft.value,{nodeProps:u}=r,s=u==null?void 0:u(e.tmNode.rawNode);return A("div",{class:`${o}-menu-item-group`,role:"group"},A("div",Object.assign({},s,{class:[`${o}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ft(e.title),e.extra?A(Le,null," ",ft(e.extra)):null),A("div",null,e.tmNodes.map(l=>ia(l,r))))}}});function ol(e){return e.type==="divider"||e.type==="render"}function y5(e){return e.type==="divider"}function ia(e,n){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(ol(t))return y5(t)?A(g5,Object.assign({key:e.key},t.props)):null;const{labelField:o}=n,{key:i,level:u,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[o],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?A(x5,Io(l,v5,{tmNode:e,tmNodes:e.children,key:i})):A(il,Io(l,C5,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):A(b5,Io(l,m5,{key:i,tmNode:e}))}const tp=Object.assign(Object.assign({},oa),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),C5=Bl(tp),il=le({name:"Submenu",props:tp,setup(e){const n=ra(e),{NMenu:t,NSubmenu:r}=n,{props:o,mergedCollapsedRef:i,mergedThemeRef:u}=t,s=R(()=>{const{disabled:f}=e;return r!=null&&r.mergedDisabledRef.value||o.disabled?!0:f}),l=te(!1);je(na,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),je(ta,null);function a(){const{onClick:f}=e;f&&f()}function c(){s.value||(i.value||t.toggleExpand(e.internalKey),a())}function d(f){l.value=f}return{menuProps:o,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:l,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:Fn(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(e.internalKey)}),collapsed:R(()=>o.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:R(()=>!s.value&&(o.mode==="horizontal"||i.value)),handlePopoverShowChange:d,handleClick:c}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:r}}=this,o=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:l,mergedDisabled:a,maxIconSize:c,activeIconSize:d,title:f,childActive:h,icon:p,handleClick:g,menuProps:{nodeProps:m},dropdownShow:v,iconMarginRight:b,tmNode:w,mergedClsPrefix:C,isEllipsisPlaceholder:k,extra:D}=this,y=m==null?void 0:m(w.rawNode);return A("div",Object.assign({},y,{class:[`${C}-menu-item`,y==null?void 0:y.class],role:"menuitem"}),A(Qh,{tmNode:w,paddingLeft:s,collapsed:l,disabled:a,iconMarginRight:b,maxIconSize:c,activeIconSize:d,title:f,extra:D,showArrow:!u,childActive:h,clsPrefix:C,icon:p,hover:v,onClick:g,isEllipsisPlaceholder:k}))},i=()=>A(f6,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:A("div",{class:`${n}-submenu-children`,role:"menu"},u.map(l=>ia(l,this.menuProps)))}});return this.root?A(K4,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),this.isHorizontal?null:i())}):A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),i())}}),_5=Object.assign(Object.assign({},Pe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),w5=le({name:"Menu",inheritAttrs:!1,props:_5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=kn(e),r=Pe("Menu","-menu",p5,Q4,e,n),o=be(Xh,null),i=R(()=>{var ne;const{collapsed:ie}=e;if(ie!==void 0)return ie;if(o){const{collapseModeRef:M,collapsedRef:pe}=o;if(M.value==="width")return(ne=pe.value)!==null&&ne!==void 0?ne:!1}return!1}),u=R(()=>{const{keyField:ne,childrenField:ie,disabledField:M}=e;return $i(e.items||e.options,{getIgnored(pe){return ol(pe)},getChildren(pe){return pe[ie]},getDisabled(pe){return pe[M]},getKey(pe){var we;return(we=pe[ne])!==null&&we!==void 0?we:pe.name}})}),s=R(()=>new Set(u.value.treeNodes.map(ne=>ne.key))),{watchProps:l}=e,a=te(null);l!=null&&l.includes("defaultValue")?Rt(()=>{a.value=e.defaultValue}):a.value=e.defaultValue;const d=Wo(Ue(e,"value"),a),f=te([]),h=()=>{f.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(d.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?Rt(h):h();const p=R0(e,["expandedNames","expandedKeys"]),g=Wo(p,f),m=R(()=>u.value.treeNodes),v=R(()=>u.value.getPath(d.value).keyPath);je(hi,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:d,mergedExpandedKeysRef:g,activePathRef:v,mergedClsPrefixRef:n,isHorizontalRef:R(()=>e.mode==="horizontal"),invertedRef:Ue(e,"inverted"),doSelect:b,toggleExpand:C});function b(ne,ie){const{"onUpdate:value":M,onUpdateValue:pe,onSelect:we}=e;pe&&Ye(pe,ne,ie),M&&Ye(M,ne,ie),we&&Ye(we,ne,ie),a.value=ne}function w(ne){const{"onUpdate:expandedKeys":ie,onUpdateExpandedKeys:M,onExpandedNamesChange:pe,onOpenNamesChange:we}=e;ie&&Ye(ie,ne),M&&Ye(M,ne),pe&&Ye(pe,ne),we&&Ye(we,ne),f.value=ne}function C(ne){const ie=Array.from(g.value),M=ie.findIndex(pe=>pe===ne);if(~M)ie.splice(M,1);else{if(e.accordion&&s.value.has(ne)){const pe=ie.findIndex(we=>s.value.has(we));pe>-1&&ie.splice(pe,1)}ie.push(ne)}w(ie)}const k=ne=>{const ie=u.value.getPath(ne??d.value,{includeSelf:!1}).keyPath;if(!ie.length)return;const M=Array.from(g.value),pe=new Set([...M,...ie]);e.accordion&&s.value.forEach(we=>{pe.has(we)&&!ie.includes(we)&&pe.delete(we)}),w(Array.from(pe))},D=R(()=>{const{inverted:ne}=e,{common:{cubicBezierEaseInOut:ie},self:M}=r.value,{borderRadius:pe,borderColorHorizontal:we,fontSize:Re,itemHeight:P,dividerColor:re}=M,F={"--n-divider-color":re,"--n-bezier":ie,"--n-font-size":Re,"--n-border-color-horizontal":we,"--n-border-radius":pe,"--n-item-height":P};return ne?(F["--n-group-text-color"]=M.groupTextColorInverted,F["--n-color"]=M.colorInverted,F["--n-item-text-color"]=M.itemTextColorInverted,F["--n-item-text-color-hover"]=M.itemTextColorHoverInverted,F["--n-item-text-color-active"]=M.itemTextColorActiveInverted,F["--n-item-text-color-child-active"]=M.itemTextColorChildActiveInverted,F["--n-item-text-color-child-active-hover"]=M.itemTextColorChildActiveInverted,F["--n-item-text-color-active-hover"]=M.itemTextColorActiveHoverInverted,F["--n-item-icon-color"]=M.itemIconColorInverted,F["--n-item-icon-color-hover"]=M.itemIconColorHoverInverted,F["--n-item-icon-color-active"]=M.itemIconColorActiveInverted,F["--n-item-icon-color-active-hover"]=M.itemIconColorActiveHoverInverted,F["--n-item-icon-color-child-active"]=M.itemIconColorChildActiveInverted,F["--n-item-icon-color-child-active-hover"]=M.itemIconColorChildActiveHoverInverted,F["--n-item-icon-color-collapsed"]=M.itemIconColorCollapsedInverted,F["--n-item-text-color-horizontal"]=M.itemTextColorHorizontalInverted,F["--n-item-text-color-hover-horizontal"]=M.itemTextColorHoverHorizontalInverted,F["--n-item-text-color-active-horizontal"]=M.itemTextColorActiveHorizontalInverted,F["--n-item-text-color-child-active-horizontal"]=M.itemTextColorChildActiveHorizontalInverted,F["--n-item-text-color-child-active-hover-horizontal"]=M.itemTextColorChildActiveHoverHorizontalInverted,F["--n-item-text-color-active-hover-horizontal"]=M.itemTextColorActiveHoverHorizontalInverted,F["--n-item-icon-color-horizontal"]=M.itemIconColorHorizontalInverted,F["--n-item-icon-color-hover-horizontal"]=M.itemIconColorHoverHorizontalInverted,F["--n-item-icon-color-active-horizontal"]=M.itemIconColorActiveHorizontalInverted,F["--n-item-icon-color-active-hover-horizontal"]=M.itemIconColorActiveHoverHorizontalInverted,F["--n-item-icon-color-child-active-horizontal"]=M.itemIconColorChildActiveHorizontalInverted,F["--n-item-icon-color-child-active-hover-horizontal"]=M.itemIconColorChildActiveHoverHorizontalInverted,F["--n-arrow-color"]=M.arrowColorInverted,F["--n-arrow-color-hover"]=M.arrowColorHoverInverted,F["--n-arrow-color-active"]=M.arrowColorActiveInverted,F["--n-arrow-color-active-hover"]=M.arrowColorActiveHoverInverted,F["--n-arrow-color-child-active"]=M.arrowColorChildActiveInverted,F["--n-arrow-color-child-active-hover"]=M.arrowColorChildActiveHoverInverted,F["--n-item-color-hover"]=M.itemColorHoverInverted,F["--n-item-color-active"]=M.itemColorActiveInverted,F["--n-item-color-active-hover"]=M.itemColorActiveHoverInverted,F["--n-item-color-active-collapsed"]=M.itemColorActiveCollapsedInverted):(F["--n-group-text-color"]=M.groupTextColor,F["--n-color"]=M.color,F["--n-item-text-color"]=M.itemTextColor,F["--n-item-text-color-hover"]=M.itemTextColorHover,F["--n-item-text-color-active"]=M.itemTextColorActive,F["--n-item-text-color-child-active"]=M.itemTextColorChildActive,F["--n-item-text-color-child-active-hover"]=M.itemTextColorChildActiveHover,F["--n-item-text-color-active-hover"]=M.itemTextColorActiveHover,F["--n-item-icon-color"]=M.itemIconColor,F["--n-item-icon-color-hover"]=M.itemIconColorHover,F["--n-item-icon-color-active"]=M.itemIconColorActive,F["--n-item-icon-color-active-hover"]=M.itemIconColorActiveHover,F["--n-item-icon-color-child-active"]=M.itemIconColorChildActive,F["--n-item-icon-color-child-active-hover"]=M.itemIconColorChildActiveHover,F["--n-item-icon-color-collapsed"]=M.itemIconColorCollapsed,F["--n-item-text-color-horizontal"]=M.itemTextColorHorizontal,F["--n-item-text-color-hover-horizontal"]=M.itemTextColorHoverHorizontal,F["--n-item-text-color-active-horizontal"]=M.itemTextColorActiveHorizontal,F["--n-item-text-color-child-active-horizontal"]=M.itemTextColorChildActiveHorizontal,F["--n-item-text-color-child-active-hover-horizontal"]=M.itemTextColorChildActiveHoverHorizontal,F["--n-item-text-color-active-hover-horizontal"]=M.itemTextColorActiveHoverHorizontal,F["--n-item-icon-color-horizontal"]=M.itemIconColorHorizontal,F["--n-item-icon-color-hover-horizontal"]=M.itemIconColorHoverHorizontal,F["--n-item-icon-color-active-horizontal"]=M.itemIconColorActiveHorizontal,F["--n-item-icon-color-active-hover-horizontal"]=M.itemIconColorActiveHoverHorizontal,F["--n-item-icon-color-child-active-horizontal"]=M.itemIconColorChildActiveHorizontal,F["--n-item-icon-color-child-active-hover-horizontal"]=M.itemIconColorChildActiveHoverHorizontal,F["--n-arrow-color"]=M.arrowColor,F["--n-arrow-color-hover"]=M.arrowColorHover,F["--n-arrow-color-active"]=M.arrowColorActive,F["--n-arrow-color-active-hover"]=M.arrowColorActiveHover,F["--n-arrow-color-child-active"]=M.arrowColorChildActive,F["--n-arrow-color-child-active-hover"]=M.arrowColorChildActiveHover,F["--n-item-color-hover"]=M.itemColorHover,F["--n-item-color-active"]=M.itemColorActive,F["--n-item-color-active-hover"]=M.itemColorActiveHover,F["--n-item-color-active-collapsed"]=M.itemColorActiveCollapsed),F}),y=t?Gn("menu",R(()=>e.inverted?"a":"b"),D,e):void 0,E=F0(),S=te(null),z=te(null);let j=!0;const I=()=>{var ne;j?j=!1:(ne=S.value)===null||ne===void 0||ne.sync({showAllItemsBeforeCalculate:!0})};function q(){return document.getElementById(E)}const G=te(-1);function $(ne){G.value=e.options.length-ne}function Y(ne){ne||(G.value=-1)}const H=R(()=>{const ne=G.value;return{children:ne===-1?[]:e.options.slice(ne)}}),ee=R(()=>{const{childrenField:ne,disabledField:ie,keyField:M}=e;return $i([H.value],{getIgnored(pe){return ol(pe)},getChildren(pe){return pe[ne]},getDisabled(pe){return pe[ie]},getKey(pe){var we;return(we=pe[M])!==null&&we!==void 0?we:pe.name}})}),xe=R(()=>$i([{}]).treeNodes[0]);function Ce(){var ne;if(G.value===-1)return A(il,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:xe.value,domId:E,isEllipsisPlaceholder:!0});const ie=ee.value.treeNodes[0],M=v.value,pe=!!(!((ne=ie.children)===null||ne===void 0)&&ne.some(we=>M.includes(we.key)));return A(il,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:pe,tmNode:ie,domId:E,rawNodes:ie.rawNode.children||[],tmNodes:ie.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:p,uncontrolledExpanededKeys:f,mergedExpandedKeys:g,uncontrolledValue:a,mergedValue:d,activePath:v,tmNodes:m,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:D,themeClass:y==null?void 0:y.themeClass,overflowRef:S,counterRef:z,updateCounter:()=>{},onResize:I,onUpdateOverflow:Y,onUpdateCount:$,renderCounter:Ce,getCounter:q,onRender:y==null?void 0:y.onRender,showOption:k,deriveResponsiveState:I}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:r}=this;r==null||r();const o=()=>this.tmNodes.map(l=>ia(l,this.$props)),u=n==="horizontal"&&this.responsive,s=()=>A("div",Pr(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?A(Fv,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:o,counter:this.renderCounter}):o());return u?A(Yi,{onResize:this.onResize},{default:s}):s()}}),k5=Object.assign(Object.assign({},Pe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),id=le({name:"Scrollbar",props:k5,setup(){const e=te(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return A(Tu,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ud=1.25,S5=V("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ud};
`,[X("horizontal",`
 flex-direction: row;
 `,[L(">",[V("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[X("dashed-line-type",[L(">",[V("timeline-item-timeline",[U("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),L(">",[V("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[L(">",[U("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),V("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[U("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),X("right-placement",[V("timeline-item",[V("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),V("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),X("left-placement",[V("timeline-item",[V("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),V("timeline-item-timeline",`
 left: 0;
 `)])]),V("timeline-item",`
 position: relative;
 `,[L("&:last-child",[V("timeline-item-timeline",[U("line",`
 display: none;
 `)]),V("timeline-item-content",[U("meta",`
 margin-bottom: 0;
 `)])]),V("timeline-item-content",[U("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),U("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),U("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),X("dashed-line-type",[V("timeline-item-timeline",[U("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),V("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ud} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[U("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),U("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),U("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),E5=Object.assign(Object.assign({},Pe.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),rp="n-timeline",A5=le({name:"Timeline",props:E5,setup(e,{slots:n}){const{mergedClsPrefixRef:t}=kn(e),r=Pe("Timeline","-timeline",S5,t5,e,t);return je(rp,{props:e,mergedThemeRef:r,mergedClsPrefixRef:t}),()=>{const{value:o}=t;return A("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},n)}}}),T5={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},vo=le({name:"TimelineItem",props:T5,slots:Object,setup(e){const n=be(rp);n||eh("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Kb();const{inlineThemeDisabled:t}=kn(),r=R(()=>{const{props:{size:i,iconSize:u},mergedThemeRef:s}=n,{type:l}=e,{self:{titleTextColor:a,contentTextColor:c,metaTextColor:d,lineColor:f,titleFontWeight:h,contentFontSize:p,[Ie("iconSize",i)]:g,[Ie("titleMargin",i)]:m,[Ie("titleFontSize",i)]:v,[Ie("circleBorder",l)]:b,[Ie("iconColor",l)]:w},common:{cubicBezierEaseInOut:C}}=s.value;return{"--n-bezier":C,"--n-circle-border":b,"--n-icon-color":w,"--n-content-font-size":p,"--n-content-text-color":c,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":v,"--n-title-font-weight":h,"--n-title-margin":m,"--n-title-text-color":a,"--n-icon-size":er(u)||g}}),o=t?Gn("timeline-item",R(()=>{const{props:{size:i,iconSize:u}}=n,{type:s}=e;return`${i[0]}${u||"a"}${s[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:t?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:t,$slots:r}=this;return t==null||t(),A("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},A("div",{class:`${e}-timeline-item-timeline`},A("div",{class:`${e}-timeline-item-timeline__line`}),zn(r.icon,o=>o?A("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},o):A("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),A("div",{class:`${e}-timeline-item-content`},zn(r.header,o=>o||this.title?A("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),A("div",{class:`${e}-timeline-item-content__content`},Ws(r.default,()=>[this.content])),A("div",{class:`${e}-timeline-item-content__meta`},Ws(r.footer,()=>[this.time]))))}});function D5(){const e=be(Ot,null);return R(()=>{if(e===null)return In;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,r=(n==null?void 0:n.common)||In;return t!=null&&t.common?Object.assign({},r,t.common):r})}const z5={common:{primaryColor:"#b51e1e",primaryColorHover:"#c03e3e",primaryColorPressed:"#9c3c3c",primaryColorSuppl:"#d57e7e",infoColor:"#bbb5ac",successColor:"#96c24e",warningColor:"#fed71a",errorColor:"#efafad",textColorBase:"#333",textColor1:"rgba(0, 0, 0, .9)",textColor2:"rgba(0, 0, 0, .82)",textColor3:"rgba(0, 0, 0, .6)",borderColor:"#d9d9d9",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}},F5={common:{primaryColor:"#8a0000",primaryColorHover:"#a00000",primaryColorPressed:"#6e0000",primaryColorSuppl:"#c20000",infoColor:"#9e968b",successColor:"#a9c478",warningColor:"#e6c84c",errorColor:"#e28886",textColorBase:"#ccc",textColor1:"rgba(255, 255, 255, .9)",textColor2:"rgba(255, 255, 255, .82)",textColor3:"rgba(255, 255, 255, .6)",bodyColor:"#1a1a1a",borderColor:"#4d4d4d",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Kr=typeof document<"u";function op(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function I5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&op(e.default)}const Te=Object.assign;function ms(e,n){const t={};for(const r in n){const o=n[r];t[r]=Qn(o)?o.map(e):e(o)}return t}const Ro=()=>{},Qn=Array.isArray;function sd(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const ip=/#/g,P5=/&/g,R5=/\//g,$5=/=/g,O5=/\?/g,up=/\+/g,B5=/%5B/g,M5=/%5D/g,sp=/%5E/g,N5=/%60/g,lp=/%7B/g,L5=/%7C/g,ap=/%7D/g,j5=/%20/g;function ua(e){return e==null?"":encodeURI(""+e).replace(L5,"|").replace(B5,"[").replace(M5,"]")}function H5(e){return ua(e).replace(lp,"{").replace(ap,"}").replace(sp,"^")}function ul(e){return ua(e).replace(up,"%2B").replace(j5,"+").replace(ip,"%23").replace(P5,"%26").replace(N5,"`").replace(lp,"{").replace(ap,"}").replace(sp,"^")}function U5(e){return ul(e).replace($5,"%3D")}function K5(e){return ua(e).replace(ip,"%23").replace(O5,"%3F")}function V5(e){return K5(e).replace(R5,"%2F")}function Jo(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const W5=/\/$/,q5=e=>e.replace(W5,"");function bs(e,n,t="/"){let r,o={},i="",u="";const s=n.indexOf("#");let l=n.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(r=n.slice(0,l),i=n.slice(l,s>0?s:n.length),o=e(i.slice(1))),s>=0&&(r=r||n.slice(0,s),u=n.slice(s,n.length)),r=Y5(r??n,t),{fullPath:r+i+u,path:r,query:o,hash:Jo(u)}}function G5(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ld(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Z5(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&to(n.matched[r],t.matched[o])&&cp(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function to(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function cp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!X5(e[t],n[t]))return!1;return!0}function X5(e,n){return Qn(e)?ad(e,n):Qn(n)?ad(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function ad(e,n){return Qn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Y5(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,u,s;for(u=0;u<r.length;u++)if(s=r[u],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(u).join("/")}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let sl=function(e){return e.pop="pop",e.push="push",e}({}),vs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function J5(e){if(!e)if(Kr){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),q5(e)}const Q5=/^[^#]+#/;function eC(e,n){return e.replace(Q5,"#")+n}function nC(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Fu=()=>({left:window.scrollX,top:window.scrollY});function tC(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=nC(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function cd(e,n){return(history.state?history.state.position-n:-1)+e}const ll=new Map;function rC(e,n){ll.set(e,n)}function oC(e){const n=ll.get(e);return ll.delete(e),n}function iC(e){return typeof e=="string"||e&&typeof e=="object"}function dp(e){return typeof e=="string"||typeof e=="symbol"}let Xe=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const fp=Symbol("");Xe.MATCHER_NOT_FOUND+"",Xe.NAVIGATION_GUARD_REDIRECT+"",Xe.NAVIGATION_ABORTED+"",Xe.NAVIGATION_CANCELLED+"",Xe.NAVIGATION_DUPLICATED+"";function ro(e,n){return Te(new Error,{type:e,[fp]:!0},n)}function wt(e,n){return e instanceof Error&&fp in e&&(n==null||!!(e.type&n))}const uC=["params","query","hash"];function sC(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of uC)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function lC(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const o=t[r].replace(up," "),i=o.indexOf("="),u=Jo(i<0?o:o.slice(0,i)),s=i<0?null:Jo(o.slice(i+1));if(u in n){let l=n[u];Qn(l)||(l=n[u]=[l]),l.push(s)}else n[u]=s}return n}function dd(e){let n="";for(let t in e){const r=e[t];if(t=U5(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Qn(r)?r.map(o=>o&&ul(o)):[r&&ul(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function aC(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Qn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const cC=Symbol(""),fd=Symbol(""),Iu=Symbol(""),hp=Symbol(""),al=Symbol("");function xo(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Xt(e,n,t,r,o,i=u=>u()){const u=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const a=f=>{f===!1?l(ro(Xe.NAVIGATION_ABORTED,{from:t,to:n})):f instanceof Error?l(f):iC(f)?l(ro(Xe.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(u&&r.enterCallbacks[o]===u&&typeof f=="function"&&u.push(f),s())},c=i(()=>e.call(r&&r.instances[o],n,t,a));let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(f=>l(f))})}function xs(e,n,t,r,o=i=>i()){const i=[];for(const u of e)for(const s in u.components){let l=u.components[s];if(!(n!=="beforeRouteEnter"&&!u.instances[s]))if(op(l)){const a=(l.__vccOpts||l)[n];a&&i.push(Xt(a,t,r,u,s,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${s}" at "${u.path}"`);const d=I5(c)?c.default:c;u.mods[s]=c,u.components[s]=d;const f=(d.__vccOpts||d)[n];return f&&Xt(f,t,r,u,s,o)()}))}}return i}function dC(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let u=0;u<i;u++){const s=n.matched[u];s&&(e.matched.find(a=>to(a,s))?r.push(s):t.push(s));const l=e.matched[u];l&&(n.matched.find(a=>to(a,l))||o.push(l))}return[t,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let fC=()=>location.protocol+"//"+location.host;function pp(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let u=o.includes(e.slice(i))?e.slice(i).length:1,s=o.slice(u);return s[0]!=="/"&&(s="/"+s),ld(s,"")}return ld(t,e)+r+o}function hC(e,n,t,r){let o=[],i=[],u=null;const s=({state:f})=>{const h=pp(e,location),p=t.value,g=n.value;let m=0;if(f){if(t.value=h,n.value=f,u&&u===p){u=null;return}m=g?f.position-g.position:0}else r(h);o.forEach(v=>{v(t.value,p,{delta:m,type:sl.pop,direction:m?m>0?vs.forward:vs.back:vs.unknown})})};function l(){u=t.value}function a(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return i.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Te({},f.state,{scroll:Fu()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:a,destroy:d}}function hd(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?Fu():null}}function pC(e){const{history:n,location:t}=window,r={value:pp(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(l,a,c){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:fC()+e+l;try{n[c?"replaceState":"pushState"](a,"",f),o.value=a}catch(h){console.error(h),t[c?"replace":"assign"](f)}}function u(l,a){i(l,Te({},n.state,hd(o.value.back,l,o.value.forward,!0),a,{position:o.value.position}),!0),r.value=l}function s(l,a){const c=Te({},o.value,n.state,{forward:l,scroll:Fu()});i(c.current,c,!0),i(l,Te({},hd(r.value,l,null),{position:c.position+1},a),!1),r.value=l}return{location:r,state:o,push:s,replace:u}}function gC(e){e=J5(e);const n=pC(e),t=hC(e,n.state,n.location,n.replace);function r(i,u=!0){u||t.pauseListeners(),history.go(i)}const o=Te({location:"",base:e,go:r,createHref:eC.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function mC(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),gC(e)}let xr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var tn=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(tn||{});const bC={type:xr.Static,value:""},vC=/[a-zA-Z0-9_]/;function xC(e){if(!e)return[[]];if(e==="/")return[[bC]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${a}": ${h}`)}let t=tn.Static,r=t;const o=[];let i;function u(){i&&o.push(i),i=[]}let s=0,l,a="",c="";function d(){a&&(t===tn.Static?i.push({type:xr.Static,value:a}):t===tn.Param||t===tn.ParamRegExp||t===tn.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),i.push({type:xr.Param,value:a,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),a="")}function f(){a+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&t!==tn.ParamRegExp){r=t,t=tn.EscapeNext;continue}switch(t){case tn.Static:l==="/"?(a&&d(),u()):l===":"?(d(),t=tn.Param):f();break;case tn.EscapeNext:f(),t=r;break;case tn.Param:l==="("?t=tn.ParamRegExp:vC.test(l)?f():(d(),t=tn.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case tn.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=tn.ParamRegExpEnd:c+=l;break;case tn.ParamRegExpEnd:d(),t=tn.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:n("Unknown state");break}}return t===tn.ParamRegExp&&n(`Unfinished custom RegExp for param "${a}"`),d(),u(),o}const pd="[^/]+?",yC={sensitive:!1,strict:!1,start:!0,end:!0};var xn=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(xn||{});const CC=/[.+*?^${}()[\]/\\]/g;function _C(e,n){const t=Te({},yC,n),r=[];let o=t.start?"^":"";const i=[];for(const a of e){const c=a.length?[]:[xn.Root];t.strict&&!a.length&&(o+="/");for(let d=0;d<a.length;d++){const f=a[d];let h=xn.Segment+(t.sensitive?xn.BonusCaseSensitive:0);if(f.type===xr.Static)d||(o+="/"),o+=f.value.replace(CC,"\\$&"),h+=xn.Static;else if(f.type===xr.Param){const{value:p,repeatable:g,optional:m,regexp:v}=f;i.push({name:p,repeatable:g,optional:m});const b=v||pd;if(b!==pd){h+=xn.BonusCustomRegExp;try{`${b}`}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${b}): `+C.message)}}let w=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=m&&a.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),o+=w,h+=xn.Dynamic,m&&(h+=xn.BonusOptional),g&&(h+=xn.BonusRepeatable),b===".*"&&(h+=xn.BonusWildcard)}c.push(h)}r.push(c)}if(t.strict&&t.end){const a=r.length-1;r[a][r[a].length-1]+=xn.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const u=new RegExp(o,t.sensitive?"":"i");function s(a){const c=a.match(u),d={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(a){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of f)if(h.type===xr.Static)c+=h.value;else if(h.type===xr.Param){const{value:p,repeatable:g,optional:m}=h,v=p in a?a[p]:"";if(Qn(v)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const b=Qn(v)?v.join("/"):v;if(!b)if(m)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);c+=b}}return c||"/"}return{re:u,score:r,keys:i,parse:s,stringify:l}}function wC(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===xn.Static+xn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===xn.Static+xn.Segment?1:-1:0}function gp(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=wC(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(gd(r))return 1;if(gd(o))return-1}return o.length-r.length}function gd(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const kC={strict:!1,end:!0,sensitive:!1};function SC(e,n,t){const r=_C(xC(e.path),t),o=Te(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function EC(e,n){const t=[],r=new Map;n=sd(kC,n);function o(d){return r.get(d)}function i(d,f,h){const p=!h,g=bd(d);g.aliasOf=h&&h.record;const m=sd(n,d),v=[g];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of C)v.push(bd(Te({},g,{components:h?h.record.components:g.components,path:k,aliasOf:h?h.record:g})))}let b,w;for(const C of v){const{path:k}=C;if(f&&k[0]!=="/"){const D=f.record.path,y=D[D.length-1]==="/"?"":"/";C.path=f.record.path+(k&&y+k)}if(b=SC(C,f,m),h?h.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),p&&d.name&&!vd(b)&&u(d.name)),mp(b)&&l(b),g.children){const D=g.children;for(let y=0;y<D.length;y++)i(D[y],b,h&&h.children[y])}h=h||b}return w?()=>{u(w)}:Ro}function u(d){if(dp(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function s(){return t}function l(d){const f=DC(d,t);t.splice(f,0,d),d.record.name&&!vd(d)&&r.set(d.record.name,d)}function a(d,f){let h,p={},g,m;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw ro(Xe.MATCHER_NOT_FOUND,{location:d});m=h.record.name,p=Te(md(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&md(d.params,h.keys.map(w=>w.name))),g=h.stringify(p)}else if(d.path!=null)g=d.path,h=t.find(w=>w.re.test(g)),h&&(p=h.parse(g),m=h.record.name);else{if(h=f.name?r.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw ro(Xe.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,p=Te({},f.params,d.params),g=h.stringify(p)}const v=[];let b=h;for(;b;)v.unshift(b.record),b=b.parent;return{name:m,path:g,params:p,matched:v,meta:TC(v)}}e.forEach(d=>i(d));function c(){t.length=0,r.clear()}return{addRoute:i,resolve:a,removeRoute:u,clearRoutes:c,getRoutes:s,getRecordMatcher:o}}function md(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function bd(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:AC(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function AC(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function vd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function TC(e){return e.reduce((n,t)=>Te(n,t.meta),{})}function DC(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;gp(e,n[i])<0?r=i:t=i+1}const o=zC(e);return o&&(r=n.lastIndexOf(o,r-1)),r}function zC(e){let n=e;for(;n=n.parent;)if(mp(n)&&gp(e,n)===0)return n}function mp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xd(e){const n=be(Iu),t=be(hp),r=R(()=>{const l=Ke(e.to);return n.resolve(l)}),o=R(()=>{const{matched:l}=r.value,{length:a}=l,c=l[a-1],d=t.matched;if(!c||!d.length)return-1;const f=d.findIndex(to.bind(null,c));if(f>-1)return f;const h=yd(l[a-2]);return a>1&&yd(c)===h&&d[d.length-1].path!==h?d.findIndex(to.bind(null,l[a-2])):f}),i=R(()=>o.value>-1&&RC(t.params,r.value.params)),u=R(()=>o.value>-1&&o.value===t.matched.length-1&&cp(t.params,r.value.params));function s(l={}){if(PC(l)){const a=n[Ke(e.replace)?"replace":"push"](Ke(e.to)).catch(Ro);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:i,isExactActive:u,navigate:s}}function FC(e){return e.length===1?e[0]:e}const IC=le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xd,setup(e,{slots:n}){const t=uo(xd(e)),{options:r}=be(Iu),o=R(()=>({[Cd(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Cd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&FC(n.default(t));return e.custom?i:A("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),bp=IC;function PC(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function RC(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!Qn(o)||o.length!==r.length||r.some((i,u)=>i.valueOf()!==o[u].valueOf()))return!1}return!0}function yd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cd=(e,n,t)=>e??n??t,$C=le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=be(al),o=R(()=>e.route||r.value),i=be(fd,0),u=R(()=>{let a=Ke(i);const{matched:c}=o.value;let d;for(;(d=c[a])&&!d.components;)a++;return a}),s=R(()=>o.value.matched[u.value]);je(fd,R(()=>u.value+1)),je(cC,s),je(al,o);const l=te();return cn(()=>[l.value,s.value,e.name],([a,c,d],[f,h,p])=>{c&&(c.instances[d]=a,h&&h!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),a&&c&&(!h||!to(c,h)||!f)&&(c.enterCallbacks[d]||[]).forEach(g=>g(a))},{flush:"post"}),()=>{const a=o.value,c=e.name,d=s.value,f=d&&d.components[c];if(!f)return _d(t.default,{Component:f,route:a});const h=d.props[c],p=h?h===!0?a.params:typeof h=="function"?h(a):h:null,m=A(f,Te({},p,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return _d(t.default,{Component:m,route:a})||m}}});function _d(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const OC=$C;function BC(e){const n=EC(e.routes,e),t=e.parseQuery||lC,r=e.stringifyQuery||dd,o=e.history,i=xo(),u=xo(),s=xo(),l=xf(Kt);let a=Kt;Kr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ms.bind(null,P=>""+P),d=ms.bind(null,V5),f=ms.bind(null,Jo);function h(P,re){let F,ae;return dp(P)?(F=n.getRecordMatcher(P),ae=re):ae=P,n.addRoute(ae,F)}function p(P){const re=n.getRecordMatcher(P);re&&n.removeRoute(re)}function g(){return n.getRoutes().map(P=>P.record)}function m(P){return!!n.getRecordMatcher(P)}function v(P,re){if(re=Te({},re||l.value),typeof P=="string"){const T=bs(t,P,re.path),B=n.resolve({path:T.path},re),N=o.createHref(T.fullPath);return Te(T,B,{params:f(B.params),hash:Jo(T.hash),redirectedFrom:void 0,href:N})}let F;if(P.path!=null)F=Te({},P,{path:bs(t,P.path,re.path).path});else{const T=Te({},P.params);for(const B in T)T[B]==null&&delete T[B];F=Te({},P,{params:d(T)}),re.params=d(re.params)}const ae=n.resolve(F,re),ye=P.hash||"";ae.params=c(f(ae.params));const x=G5(r,Te({},P,{hash:H5(ye),path:ae.path})),_=o.createHref(x);return Te({fullPath:x,hash:ye,query:r===dd?aC(P.query):P.query||{}},ae,{redirectedFrom:void 0,href:_})}function b(P){return typeof P=="string"?bs(t,P,l.value.path):Te({},P)}function w(P,re){if(a!==P)return ro(Xe.NAVIGATION_CANCELLED,{from:re,to:P})}function C(P){return y(P)}function k(P){return C(Te(b(P),{replace:!0}))}function D(P,re){const F=P.matched[P.matched.length-1];if(F&&F.redirect){const{redirect:ae}=F;let ye=typeof ae=="function"?ae(P,re):ae;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=b(ye):{path:ye},ye.params={}),Te({query:P.query,hash:P.hash,params:ye.path!=null?{}:P.params},ye)}}function y(P,re){const F=a=v(P),ae=l.value,ye=P.state,x=P.force,_=P.replace===!0,T=D(F,ae);if(T)return y(Te(b(T),{state:typeof T=="object"?Te({},ye,T.state):ye,force:x,replace:_}),re||F);const B=F;B.redirectedFrom=re;let N;return!x&&Z5(r,ae,F)&&(N=ro(Xe.NAVIGATION_DUPLICATED,{to:B,from:ae}),ne(ae,ae,!0,!1)),(N?Promise.resolve(N):z(B,ae)).catch(O=>wt(O)?wt(O,Xe.NAVIGATION_GUARD_REDIRECT)?O:Ce(O):ee(O,B,ae)).then(O=>{if(O){if(wt(O,Xe.NAVIGATION_GUARD_REDIRECT))return y(Te({replace:_},b(O.to),{state:typeof O.to=="object"?Te({},ye,O.to.state):ye,force:x}),re||B)}else O=I(B,ae,!0,_,ye);return j(B,ae,O),O})}function E(P,re){const F=w(P,re);return F?Promise.reject(F):Promise.resolve()}function S(P){const re=pe.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(P):P()}function z(P,re){let F;const[ae,ye,x]=dC(P,re);F=xs(ae.reverse(),"beforeRouteLeave",P,re);for(const T of ae)T.leaveGuards.forEach(B=>{F.push(Xt(B,P,re))});const _=E.bind(null,P,re);return F.push(_),Re(F).then(()=>{F=[];for(const T of i.list())F.push(Xt(T,P,re));return F.push(_),Re(F)}).then(()=>{F=xs(ye,"beforeRouteUpdate",P,re);for(const T of ye)T.updateGuards.forEach(B=>{F.push(Xt(B,P,re))});return F.push(_),Re(F)}).then(()=>{F=[];for(const T of x)if(T.beforeEnter)if(Qn(T.beforeEnter))for(const B of T.beforeEnter)F.push(Xt(B,P,re));else F.push(Xt(T.beforeEnter,P,re));return F.push(_),Re(F)}).then(()=>(P.matched.forEach(T=>T.enterCallbacks={}),F=xs(x,"beforeRouteEnter",P,re,S),F.push(_),Re(F))).then(()=>{F=[];for(const T of u.list())F.push(Xt(T,P,re));return F.push(_),Re(F)}).catch(T=>wt(T,Xe.NAVIGATION_CANCELLED)?T:Promise.reject(T))}function j(P,re,F){s.list().forEach(ae=>S(()=>ae(P,re,F)))}function I(P,re,F,ae,ye){const x=w(P,re);if(x)return x;const _=re===Kt,T=Kr?history.state:{};F&&(ae||_?o.replace(P.fullPath,Te({scroll:_&&T&&T.scroll},ye)):o.push(P.fullPath,ye)),l.value=P,ne(P,re,F,_),Ce()}let q;function G(){q||(q=o.listen((P,re,F)=>{if(!we.listening)return;const ae=v(P),ye=D(ae,we.currentRoute.value);if(ye){y(Te(ye,{replace:!0,force:!0}),ae).catch(Ro);return}a=ae;const x=l.value;Kr&&rC(cd(x.fullPath,F.delta),Fu()),z(ae,x).catch(_=>wt(_,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_CANCELLED)?_:wt(_,Xe.NAVIGATION_GUARD_REDIRECT)?(y(Te(b(_.to),{force:!0}),ae).then(T=>{wt(T,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===sl.pop&&o.go(-1,!1)}).catch(Ro),Promise.reject()):(F.delta&&o.go(-F.delta,!1),ee(_,ae,x))).then(_=>{_=_||I(ae,x,!1),_&&(F.delta&&!wt(_,Xe.NAVIGATION_CANCELLED)?o.go(-F.delta,!1):F.type===sl.pop&&wt(_,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),j(ae,x,_)}).catch(Ro)}))}let $=xo(),Y=xo(),H;function ee(P,re,F){Ce(P);const ae=Y.list();return ae.length?ae.forEach(ye=>ye(P,re,F)):console.error(P),Promise.reject(P)}function xe(){return H&&l.value!==Kt?Promise.resolve():new Promise((P,re)=>{$.add([P,re])})}function Ce(P){return H||(H=!P,G(),$.list().forEach(([re,F])=>P?F(P):re()),$.reset()),P}function ne(P,re,F,ae){const{scrollBehavior:ye}=e;if(!Kr||!ye)return Promise.resolve();const x=!F&&oC(cd(P.fullPath,0))||(ae||!F)&&history.state&&history.state.scroll||null;return si().then(()=>ye(P,re,x)).then(_=>_&&tC(_)).catch(_=>ee(_,P,re))}const ie=P=>o.go(P);let M;const pe=new Set,we={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:g,resolve:v,options:e,push:C,replace:k,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:i.add,beforeResolve:u.add,afterEach:s.add,onError:Y.add,isReady:xe,install(P){P.component("RouterLink",bp),P.component("RouterView",OC),P.config.globalProperties.$router=we,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(l)}),Kr&&!M&&l.value===Kt&&(M=!0,C(o.location).catch(ae=>{}));const re={};for(const ae in Kt)Object.defineProperty(re,ae,{get:()=>l.value[ae],enumerable:!0});P.provide(Iu,we),P.provide(hp,vf(re)),P.provide(al,l);const F=P.unmount;pe.add(P),P.unmount=function(){pe.delete(P),pe.size<1&&(a=Kt,q&&q(),q=null,l.value=Kt,M=!1,H=!1),F()}}};function Re(P){return P.reduce((re,F)=>re.then(()=>S(F)),Promise.resolve())}return we}function MC(){return be(Iu)}const NC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},LC=le({name:"BookOutline",render:function(n,t){return Ve(),fn("svg",NC,t[0]||(t[0]=[ue("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1)]))}}),jC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},HC=le({name:"BriefcaseOutline",render:function(n,t){return Ve(),fn("svg",jC,t[0]||(t[0]=[ue("rect",{x:"32",y:"128",width:"448",height:"320",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 240H32"},null,-1),ue("path",{d:"M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),UC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},KC=le({name:"HomeOutline",render:function(n,t){return Ve(),fn("svg",UC,t[0]||(t[0]=[ue("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1)]))}}),VC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},WC=le({name:"InformationCircleOutline",render:function(n,t){return Ve(),fn("svg",VC,t[0]||(t[0]=[ue("path",{d:"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M220 220h32v116"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 340h88"},null,-1),ue("path",{d:"M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",fill:"currentColor"},null,-1)]))}}),qC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},GC=le({name:"LinkOutline",render:function(n,t){return Ve(),fn("svg",qC,t[0]||(t[0]=[ue("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1)]))}}),ZC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},XC=le({name:"SettingsOutline",render:function(n,t){return Ve(),fn("svg",ZC,t[0]||(t[0]=[ue("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),YC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},JC=le({name:"WineOutline",render:function(n,t){return Ve(),fn("svg",YC,t[0]||(t[0]=[ue("path",{d:"M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M256 272v160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 432H160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M112 160h288"},null,-1)]))}}),QC=`#  git基本操作

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

   执行这个命令后，你应该能看到它在下载一些东西。完成后，你可以检查一下项目目录，现在 \`src/_common\` 文件夹里应该有文件了。`,e8=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),n8=`#  开源协议

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

  ​`,t8=Object.freeze(Object.defineProperty({__proto__:null,default:n8},Symbol.toStringTag,{value:"Module"})),r8=`# go语言进阶学习

- **web开发简介**

  Go的基础net/http包提供了基础的路由

  web框架大致分为router盒mvc框架

  ​

`,o8=Object.freeze(Object.defineProperty({__proto__:null,default:r8},Symbol.toStringTag,{value:"Module"})),i8=`####  同构渲染ssr

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

`,u8=Object.freeze(Object.defineProperty({__proto__:null,default:i8},Symbol.toStringTag,{value:"Module"})),s8=`# 1.Typescript的价值

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

 



















































`,l8=Object.freeze(Object.defineProperty({__proto__:null,default:s8},Symbol.toStringTag,{value:"Module"})),a8=`
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

end!`,c8=Object.freeze(Object.defineProperty({__proto__:null,default:a8},Symbol.toStringTag,{value:"Module"})),d8=`# 实习项目—仿百度云盘

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







































`,f8=Object.freeze(Object.defineProperty({__proto__:null,default:d8},Symbol.toStringTag,{value:"Module"})),h8=`#  实现前端脚手架

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

`,p8=Object.freeze(Object.defineProperty({__proto__:null,default:h8},Symbol.toStringTag,{value:"Module"})),g8=`#  less的编译

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

   ​`,m8=Object.freeze(Object.defineProperty({__proto__:null,default:g8},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vp;const Pu=e=>vp=e,xp=Symbol();function cl(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var $o;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})($o||($o={}));function b8(){const e=nf(!0),n=e.run(()=>te({}));let t=[],r=[];const o=Mo({install(i){Pu(o),o._a=i,i.provide(xp,o),i.config.globalProperties.$pinia=o,r.forEach(u=>t.push(u)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const yp=()=>{};function wd(e,n,t,r=yp){e.add(n);const o=()=>{e.delete(n)&&r()};return!t&&tf()&&E1(o),o}function Hr(e,...n){e.forEach(t=>{t(...n)})}const v8=e=>e(),kd=Symbol(),ys=Symbol();function dl(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];cl(o)&&cl(r)&&e.hasOwnProperty(t)&&!Ze(r)&&!Dt(r)?e[t]=dl(o,r):e[t]=r}return e}const x8=Symbol();function y8(e){return!cl(e)||!Object.prototype.hasOwnProperty.call(e,x8)}const{assign:qt}=Object;function C8(e){return!!(Ze(e)&&e.effect)}function _8(e,n,t,r){const{state:o,actions:i,getters:u}=n,s=t.state.value[e];let l;function a(){s||(t.state.value[e]=o?o():{});const c=q1(t.state.value[e]);return qt(c,i,Object.keys(u||{}).reduce((d,f)=>(d[f]=Mo(R(()=>{Pu(t);const h=t._s.get(e);return u[f].call(h,h)})),d),{}))}return l=Cp(e,a,n,t,r,!0),l}function Cp(e,n,t={},r,o,i){let u;const s=qt({actions:{}},t),l={deep:!0};let a,c,d=new Set,f=new Set,h;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={});let g;function m(E){let S;a=c=!1,typeof E=="function"?(E(r.state.value[e]),S={type:$o.patchFunction,storeId:e,events:h}):(dl(r.state.value[e],E),S={type:$o.patchObject,payload:E,storeId:e,events:h});const z=g=Symbol();si().then(()=>{g===z&&(a=!0)}),c=!0,Hr(d,S,r.state.value[e])}const v=i?function(){const{state:S}=t,z=S?S():{};this.$patch(j=>{qt(j,z)})}:yp;function b(){u.stop(),d.clear(),f.clear(),r._s.delete(e)}const w=(E,S="")=>{if(kd in E)return E[ys]=S,E;const z=function(){Pu(r);const j=Array.from(arguments),I=new Set,q=new Set;function G(H){I.add(H)}function $(H){q.add(H)}Hr(f,{args:j,name:z[ys],store:k,after:G,onError:$});let Y;try{Y=E.apply(this&&this.$id===e?this:k,j)}catch(H){throw Hr(q,H),H}return Y instanceof Promise?Y.then(H=>(Hr(I,H),H)).catch(H=>(Hr(q,H),Promise.reject(H))):(Hr(I,Y),Y)};return z[kd]=!0,z[ys]=S,z},C={_p:r,$id:e,$onAction:wd.bind(null,f),$patch:m,$reset:v,$subscribe(E,S={}){const z=wd(d,E,S.detached,()=>j()),j=u.run(()=>cn(()=>r.state.value[e],I=>{(S.flush==="sync"?c:a)&&E({storeId:e,type:$o.direct,events:h},I)},qt({},l,S)));return z},$dispose:b},k=uo(C);r._s.set(e,k);const y=(r._a&&r._a.runWithContext||v8)(()=>r._e.run(()=>(u=nf()).run(()=>n({action:w}))));for(const E in y){const S=y[E];if(Ze(S)&&!C8(S)||Dt(S))i||(p&&y8(S)&&(Ze(S)?S.value=p[E]:dl(S,p[E])),r.state.value[e][E]=S);else if(typeof S=="function"){const z=w(S,E);y[E]=z,s.actions[E]=S}}return qt(k,y),qt(Se(k),y),Object.defineProperty(k,"$state",{get:()=>r.state.value[e],set:E=>{m(S=>{qt(S,E)})}}),r._p.forEach(E=>{qt(k,u.run(()=>E({store:k,app:r._a,pinia:r,options:s})))}),p&&i&&t.hydrate&&t.hydrate(k.$state,p),a=!0,c=!0,k}/*! #__NO_SIDE_EFFECTS__ */function w8(e,n,t){let r;const o=typeof n=="function";r=o?t:n;function i(u,s){const l=rg();return u=u||(l?be(xp,null):null),u&&Pu(u),u=vp,u._s.has(e)||(o?Cp(e,n,r,u):_8(e,r,u)),u._s.get(e)}return i.$id=e,i}function k8(e){const n={},t=e.match(/^---\s*([\s\S]*?)\s*---/);return t&&t[1]&&t[1].split(`
`).forEach(r=>{const[o,...i]=r.split(":");if(o&&i.length>0){const u=i.join(":").trim();n[o.trim()]=u}}),n}const Sd={};function S8(e){let n=Sd[e];if(n)return n;n=Sd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function oo(e,n){typeof n!="string"&&(n=oo.defaultChars);const t=S8(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let o="";for(let i=0,u=r.length;i<u;i+=3){const s=parseInt(r.slice(i+1,i+3),16);if(s<128){o+=t[s];continue}if((s&224)===192&&i+3<u){const l=parseInt(r.slice(i+4,i+6),16);if((l&192)===128){const a=s<<6&1984|l&63;a<128?o+="��":o+=String.fromCharCode(a),i+=3;continue}}if((s&240)===224&&i+6<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16);if((l&192)===128&&(a&192)===128){const c=s<<12&61440|l<<6&4032|a&63;c<2048||c>=55296&&c<=57343?o+="���":o+=String.fromCharCode(c),i+=6;continue}}if((s&248)===240&&i+9<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16),c=parseInt(r.slice(i+10,i+12),16);if((l&192)===128&&(a&192)===128&&(c&192)===128){let d=s<<18&1835008|l<<12&258048|a<<6&4032|c&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),i+=9;continue}}o+="�"}return o})}oo.defaultChars=";/?:@&=+$,#";oo.componentChars="";const Ed={};function E8(e){let n=Ed[e];if(n)return n;n=Ed[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function pi(e,n,t){typeof n!="string"&&(t=n,n=pi.defaultChars),typeof t>"u"&&(t=!0);const r=E8(n);let o="";for(let i=0,u=e.length;i<u;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<u&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){o+=e.slice(i,i+3),i+=2;continue}if(s<128){o+=r[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<u){const l=e.charCodeAt(i+1);if(l>=56320&&l<=57343){o+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[i])}return o}pi.defaultChars=";/?:@&=+$,-_.!~*'()#";pi.componentChars="-_.!~*'()";function sa(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function ou(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const A8=/^([a-z0-9.+-]+:)/i,T8=/:[0-9]*$/,D8=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,z8=["<",">",'"',"`"," ","\r",`
`,"	"],F8=["{","}","|","\\","^","`"].concat(z8),I8=["'"].concat(F8),Ad=["%","/","?",";","#"].concat(I8),Td=["/","?","#"],P8=255,Dd=/^[+a-z0-9A-Z_-]{0,63}$/,R8=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,zd={javascript:!0,"javascript:":!0},Fd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function la(e,n){if(e&&e instanceof ou)return e;const t=new ou;return t.parse(e,n),t}ou.prototype.parse=function(e,n){let t,r,o,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const a=D8.exec(i);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let u=A8.exec(i);if(u&&(u=u[0],t=u.toLowerCase(),this.protocol=u,i=i.substr(u.length)),(n||u||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=i.substr(0,2)==="//",o&&!(u&&zd[u])&&(i=i.substr(2),this.slashes=!0)),!zd[u]&&(o||u&&!Fd[u])){let a=-1;for(let p=0;p<Td.length;p++)r=i.indexOf(Td[p]),r!==-1&&(a===-1||r<a)&&(a=r);let c,d;a===-1?d=i.lastIndexOf("@"):d=i.lastIndexOf("@",a),d!==-1&&(c=i.slice(0,d),i=i.slice(d+1),this.auth=c),a=-1;for(let p=0;p<Ad.length;p++)r=i.indexOf(Ad[p]),r!==-1&&(a===-1||r<a)&&(a=r);a===-1&&(a=i.length),i[a-1]===":"&&a--;const f=i.slice(0,a);i=i.slice(a),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let g=0,m=p.length;g<m;g++){const v=p[g];if(v&&!v.match(Dd)){let b="";for(let w=0,C=v.length;w<C;w++)v.charCodeAt(w)>127?b+="x":b+=v[w];if(!b.match(Dd)){const w=p.slice(0,g),C=p.slice(g+1),k=v.match(R8);k&&(w.push(k[1]),C.unshift(k[2])),C.length&&(i=C.join(".")+i),this.hostname=w.join(".");break}}}}this.hostname.length>P8&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const l=i.indexOf("?");return l!==-1&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),Fd[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ou.prototype.parseHost=function(e){let n=T8.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const $8=Object.freeze(Object.defineProperty({__proto__:null,decode:oo,encode:pi,format:sa,parse:la},Symbol.toStringTag,{value:"Module"})),_p=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,wp=/[\0-\x1F\x7F-\x9F]/,O8=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,aa=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,kp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Sp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,B8=Object.freeze(Object.defineProperty({__proto__:null,Any:_p,Cc:wp,Cf:O8,P:aa,S:kp,Z:Sp},Symbol.toStringTag,{value:"Module"})),M8=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),N8=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Cs;const L8=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),j8=(Cs=String.fromCodePoint)!==null&&Cs!==void 0?Cs:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function H8(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=L8.get(e))!==null&&n!==void 0?n:e}var an;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(an||(an={}));const U8=32;var Qt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Qt||(Qt={}));function fl(e){return e>=an.ZERO&&e<=an.NINE}function K8(e){return e>=an.UPPER_A&&e<=an.UPPER_F||e>=an.LOWER_A&&e<=an.LOWER_F}function V8(e){return e>=an.UPPER_A&&e<=an.UPPER_Z||e>=an.LOWER_A&&e<=an.LOWER_Z||fl(e)}function W8(e){return e===an.EQUALS||V8(e)}var sn;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(sn||(sn={}));var Tt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Tt||(Tt={}));class q8{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=sn.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Tt.Strict}startEntity(n){this.decodeMode=n,this.state=sn.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case sn.EntityStart:return n.charCodeAt(t)===an.NUM?(this.state=sn.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=sn.NamedEntity,this.stateNamedEntity(n,t));case sn.NumericStart:return this.stateNumericStart(n,t);case sn.NumericDecimal:return this.stateNumericDecimal(n,t);case sn.NumericHex:return this.stateNumericHex(n,t);case sn.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|U8)===an.LOWER_X?(this.state=sn.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=sn.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,o){if(t!==r){const i=r-t;this.result=this.result*Math.pow(o,i)+parseInt(n.substr(t,i),o),this.consumed+=i}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(fl(o)||K8(o))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(fl(o))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===an.SEMI)this.consumed+=1;else if(this.decodeMode===Tt.Strict)return 0;return this.emitCodePoint(H8(this.result),this.consumed),this.errors&&(n!==an.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let o=r[this.treeIndex],i=(o&Qt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const u=n.charCodeAt(t);if(this.treeIndex=G8(r,o,this.treeIndex+Math.max(1,i),u),this.treeIndex<0)return this.result===0||this.decodeMode===Tt.Attribute&&(i===0||W8(u))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],i=(o&Qt.VALUE_LENGTH)>>14,i!==0){if(u===an.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Tt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,o=(r[t]&Qt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,o,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:o}=this;return this.emitCodePoint(t===1?o[n]&~Qt.VALUE_LENGTH:o[n+1],r),t===3&&this.emitCodePoint(o[n+2],r),r}end(){var n;switch(this.state){case sn.NamedEntity:return this.result!==0&&(this.decodeMode!==Tt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case sn.NumericDecimal:return this.emitNumericEntity(0,2);case sn.NumericHex:return this.emitNumericEntity(0,3);case sn.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case sn.EntityStart:return 0}}}function Ep(e){let n="";const t=new q8(e,r=>n+=j8(r));return function(o,i){let u=0,s=0;for(;(s=o.indexOf("&",s))>=0;){n+=o.slice(u,s),t.startEntity(i);const a=t.write(o,s+1);if(a<0){u=s+t.end();break}u=s+a,s=a===0?u+1:u}const l=n+o.slice(u);return n="",l}}function G8(e,n,t,r){const o=(n&Qt.BRANCH_LENGTH)>>7,i=n&Qt.JUMP_TABLE;if(o===0)return i!==0&&r===i?t:-1;if(i){const l=r-i;return l<0||l>=o?-1:e[t+l]-1}let u=t,s=u+o-1;for(;u<=s;){const l=u+s>>>1,a=e[l];if(a<r)u=l+1;else if(a>r)s=l-1;else return e[l+o]}return-1}const Ap=Ep(M8);Ep(N8);function Z8(e,n=Tt.Legacy){return Ap(e,n)}function X8(e){return Ap(e,Tt.Strict)}function Y8(e){return Object.prototype.toString.call(e)}function ca(e){return Y8(e)==="[object String]"}const J8=Object.prototype.hasOwnProperty;function Q8(e,n){return J8.call(e,n)}function Ru(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function Tp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function da(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Qo(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Dp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,e_=/&([a-z#][a-z0-9]{1,31});/gi,n_=new RegExp(Dp.source+"|"+e_.source,"gi"),t_=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function r_(e,n){if(n.charCodeAt(0)===35&&t_.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return da(r)?Qo(r):e}const t=Z8(e);return t!==e?t:e}function o_(e){return e.indexOf("\\")<0?e:e.replace(Dp,"$1")}function io(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(n_,function(n,t,r){return t||r_(n,r)})}const i_=/[&<>"]/,u_=/[&<>"]/g,s_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function l_(e){return s_[e]}function or(e){return i_.test(e)?e.replace(u_,l_):e}const a_=/[.?*+^$[\]\\(){}|-]/g;function c_(e){return e.replace(a_,"\\$&")}function Be(e){switch(e){case 9:case 32:return!0}return!1}function ei(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function zp(e){return aa.test(e)||kp.test(e)}function ni(e){return zp(Qo(e))}function ti(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function $u(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function Id(e){return e===32||e===9||e===10||e===13}function Ou(e){let n=0;for(;n<e.length&&Id(e.charCodeAt(n));n++);let t=e.length-1;for(;t>=n&&Id(e.charCodeAt(t));t--);return e.slice(n,t+1)}const d_={mdurl:$8,ucmicro:B8},f_=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Tp,asciiTrim:Ou,assign:Ru,escapeHtml:or,escapeRE:c_,fromCodePoint:Qo,has:Q8,isMdAsciiPunct:ti,isPunctChar:zp,isPunctCharCode:ni,isSpace:Be,isString:ca,isValidEntityCode:da,isWhiteSpace:ei,lib:d_,normalizeReference:$u,unescapeAll:io,unescapeMd:o_},Symbol.toStringTag,{value:"Module"}));function h_(e,n,t){let r,o,i,u;const s=e.posMax,l=e.pos;for(e.pos=n+1,r=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(r--,r===0)){o=!0;break}if(u=e.pos,e.md.inline.skipToken(e),i===91){if(u===e.pos-1)r++;else if(t)return e.pos=l,-1}}let a=-1;return o&&(a=e.pos),e.pos=l,a}function p_(e,n,t){let r,o=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<t;){if(r=e.charCodeAt(o),r===10||r===60)return i;if(r===62)return i.pos=o+1,i.str=io(e.slice(n+1,o)),i.ok=!0,i;if(r===92&&o+1<t){o+=2;continue}o++}return i}let u=0;for(;o<t&&(r=e.charCodeAt(o),!(r===32||r<32||r===127));){if(r===92&&o+1<t){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(r===40&&(u++,u>32))return i;if(r===41){if(u===0)break;u--}o++}return n===o||u!==0||(i.str=io(e.slice(n,o)),i.pos=o,i.ok=!0),i}function g_(e,n,t,r){let o,i=n;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)u.str=r.str,u.marker=r.marker;else{if(i>=t)return u;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return u;n++,i++,s===40&&(s=41),u.marker=s}for(;i<t;){if(o=e.charCodeAt(i),o===u.marker)return u.pos=i+1,u.str+=io(e.slice(n,i)),u.ok=!0,u;if(o===40&&u.marker===41)return u;o===92&&i+1<t&&i++,i++}return u.can_continue=!0,u.str+=io(e.slice(n,i)),u}const m_=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:p_,parseLinkLabel:h_,parseLinkTitle:g_},Symbol.toStringTag,{value:"Module"})),bt={};bt.code_inline=function(e,n,t,r,o){const i=e[n];return"<code"+o.renderAttrs(i)+">"+or(i.content)+"</code>"};bt.code_block=function(e,n,t,r,o){const i=e[n];return"<pre"+o.renderAttrs(i)+"><code>"+or(e[n].content)+`</code></pre>
`};bt.fence=function(e,n,t,r,o){const i=e[n],u=i.info?io(i.info).trim():"";let s="",l="";if(u){const c=u.split(/(\s+)/g);s=c[0],l=c.slice(2).join("")}let a;if(t.highlight?a=t.highlight(i.content,s,l)||or(i.content):a=or(i.content),a.indexOf("<pre")===0)return a+`
`;if(u){const c=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[];c<0?d.push(["class",t.langPrefix+s]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+s);const f={attrs:d};return`<pre><code${o.renderAttrs(f)}>${a}</code></pre>
`}return`<pre><code${o.renderAttrs(i)}>${a}</code></pre>
`};bt.image=function(e,n,t,r,o){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,t,r),o.renderToken(e,n,t)};bt.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};bt.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};bt.text=function(e,n){return or(e[n].content)};bt.html_block=function(e,n){return e[n].content};bt.html_inline=function(e,n){return e[n].content};function ao(){this.rules=Ru({},bt)}ao.prototype.renderAttrs=function(n){let t,r,o;if(!n.attrs)return"";for(o="",t=0,r=n.attrs.length;t<r;t++)o+=" "+or(n.attrs[t][0])+'="'+or(n.attrs[t][1])+'"';return o};ao.prototype.renderToken=function(n,t,r){const o=n[t];let i="";if(o.hidden)return"";o.block&&o.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(o.nesting===-1?"</":"<")+o.tag,i+=this.renderAttrs(o),o.nesting===0&&r.xhtmlOut&&(i+=" /");let u=!1;if(o.block&&(u=!0,o.nesting===1&&t+1<n.length)){const s=n[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===o.tag)&&(u=!1)}return i+=u?`>
`:">",i};ao.prototype.renderInline=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n)}return r};ao.prototype.renderInlineAsText=function(e,n,t){let r="";for(let o=0,i=e.length;o<i;o++)switch(e[o].type){case"text":r+=e[o].content;break;case"image":r+=this.renderInlineAsText(e[o].children,n,t);break;case"html_inline":case"html_block":r+=e[o].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};ao.prototype.render=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;s==="inline"?r+=this.renderInline(e[i].children,n,t):typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n,t)}return r};function Pn(){this.__rules__=[],this.__cache__=null}Pn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Pn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};Pn.prototype.at=function(e,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=o.alt||[],this.__cache__=null};Pn.prototype.before=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Pn.prototype.after=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Pn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};Pn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,t.push(r)},this),this.__cache__=null,t};Pn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Pn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,t.push(r)},this),this.__cache__=null,t};Pn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function et(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}et.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,o=t.length;r<o;r++)if(t[r][0]===n)return r;return-1};et.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};et.prototype.attrSet=function(n,t){const r=this.attrIndex(n),o=[n,t];r<0?this.attrPush(o):this.attrs[r]=o};et.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};et.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function Fp(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Fp.prototype.Token=et;const b_=/\r\n?|\n/g,v_=/\0/g;function x_(e){let n;n=e.src.replace(b_,`
`),n=n.replace(v_,"�"),e.src=n}function y_(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function C_(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const o=n[t];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function __(e){return/^<a[>\s]/i.test(e)}function w_(e){return/^<\/a\s*>/i.test(e)}function k_(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let o=n[t].children,i=0;for(let u=o.length-1;u>=0;u--){const s=o[u];if(s.type==="link_close"){for(u--;o[u].level!==s.level&&o[u].type!=="link_open";)u--;continue}if(s.type==="html_inline"&&(__(s.content)&&i>0&&i--,w_(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const l=s.content;let a=e.md.linkify.match(l);const c=[];let d=s.level,f=0;a.length>0&&a[0].index===0&&u>0&&o[u-1].type==="text_special"&&(a=a.slice(1));for(let h=0;h<a.length;h++){const p=a[h].url,g=e.md.normalizeLink(p);if(!e.md.validateLink(g))continue;let m=a[h].text;a[h].schema?a[h].schema==="mailto:"&&!/^mailto:/i.test(m)?m=e.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=e.md.normalizeLinkText(m):m=e.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const v=a[h].index;if(v>f){const k=new e.Token("text","",0);k.content=l.slice(f,v),k.level=d,c.push(k)}const b=new e.Token("link_open","a",1);b.attrs=[["href",g]],b.level=d++,b.markup="linkify",b.info="auto",c.push(b);const w=new e.Token("text","",0);w.content=m,w.level=d,c.push(w);const C=new e.Token("link_close","a",-1);C.level=--d,C.markup="linkify",C.info="auto",c.push(C),f=a[h].lastIndex}if(f<l.length){const h=new e.Token("text","",0);h.content=l.slice(f),h.level=d,c.push(h)}n[t].children=o=Tp(o,u,c)}}}}const Ip=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,S_=/\((c|tm|r)\)/i,E_=/\((c|tm|r)\)/ig,A_={c:"©",r:"®",tm:"™"};function T_(e,n){return A_[n.toLowerCase()]}function D_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(E_,T_)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function z_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Ip.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function F_(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(S_.test(e.tokens[n].content)&&D_(e.tokens[n].children),Ip.test(e.tokens[n].content)&&z_(e.tokens[n].children))}const I_=/['"]/,Pd=/['"]/g,Rd="’";function zi(e,n,t,r){e[n]||(e[n]=[]),e[n].push({pos:t,ch:r})}function P_(e,n){let t="",r=0;n.sort((o,i)=>o.pos-i.pos);for(let o=0;o<n.length;o++){const i=n[o];t+=e.slice(r,i.pos)+i.ch,r=i.pos+1}return t+e.slice(r)}function R_(e,n){let t;const r=[],o={};for(let i=0;i<e.length;i++){const u=e[i],s=e[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=s);t--);if(r.length=t+1,u.type!=="text")continue;const l=u.content;let a=0;const c=l.length;e:for(;a<c;){Pd.lastIndex=a;const d=Pd.exec(l);if(!d)break;let f=!0,h=!0;a=d.index+1;const p=d[0]==="'";let g=32;if(d.index-1>=0)g=l.charCodeAt(d.index-1);else for(t=i-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){g=e[t].content.charCodeAt(e[t].content.length-1);break}let m=32;if(a<c)m=l.charCodeAt(a);else for(t=i+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){m=e[t].content.charCodeAt(0);break}const v=ti(g)||ni(g),b=ti(m)||ni(m),w=ei(g),C=ei(m);if(C?f=!1:b&&(w||v||(f=!1)),w?h=!1:v&&(C||b||(h=!1)),m===34&&d[0]==='"'&&g>=48&&g<=57&&(h=f=!1),f&&h&&(f=v,h=b),!f&&!h){p&&zi(o,i,d.index,Rd);continue}if(h)for(t=r.length-1;t>=0;t--){let k=r[t];if(r[t].level<s)break;if(k.single===p&&r[t].level===s){k=r[t];let D,y;p?(D=n.md.options.quotes[2],y=n.md.options.quotes[3]):(D=n.md.options.quotes[0],y=n.md.options.quotes[1]),zi(o,i,d.index,y),zi(o,k.token,k.pos,D),r.length=t;continue e}}f?r.push({token:i,pos:d.index,single:p,level:s}):h&&p&&zi(o,i,d.index,Rd)}}Object.keys(o).forEach(function(i){e[i].content=P_(e[i].content,o[i])})}function $_(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!I_.test(e.tokens[n].content)||R_(e.tokens[n].children,e)}function O_(e){let n,t;const r=e.tokens,o=r.length;for(let i=0;i<o;i++){if(r[i].type!=="inline")continue;const u=r[i].children,s=u.length;for(n=0;n<s;n++)u[n].type==="text_special"&&(u[n].type="text");for(n=t=0;n<s;n++)u[n].type==="text"&&n+1<s&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}}const _s=[["normalize",x_],["block",y_],["inline",C_],["linkify",k_],["replacements",F_],["smartquotes",$_],["text_join",O_]];function fa(){this.ruler=new Pn;for(let e=0;e<_s.length;e++)this.ruler.push(_s[e][0],_s[e][1])}fa.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};fa.prototype.State=Fp;function vt(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let i=0,u=0,s=0,l=0,a=o.length,c=!1;u<a;u++){const d=o.charCodeAt(u);if(!c)if(Be(d)){s++,d===9?l+=4-l%4:l++;continue}else c=!0;(d===10||u===a-1)&&(d!==10&&u++,this.bMarks.push(i),this.eMarks.push(u),this.tShift.push(s),this.sCount.push(l),this.bsCount.push(0),c=!1,s=0,l=0,i=u+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}vt.prototype.push=function(e,n,t){const r=new et(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};vt.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};vt.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};vt.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Be(r))break}return n};vt.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Be(this.src.charCodeAt(--n)))return n+1;return n};vt.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};vt.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};vt.prototype.getLines=function(n,t,r,o){if(n>=t)return"";const i=new Array(t-n);for(let u=0,s=n;s<t;s++,u++){let l=0;const a=this.bMarks[s];let c=a,d;for(s+1<t||o?d=this.eMarks[s]+1:d=this.eMarks[s];c<d&&l<r;){const f=this.src.charCodeAt(c);if(Be(f))f===9?l+=4-(l+this.bsCount[s])%4:l++;else if(c-a<this.tShift[s])l++;else break;c++}l>r?i[u]=new Array(l-r+1).join(" ")+this.src.slice(c,d):i[u]=this.src.slice(c,d)}return i.join("")};vt.prototype.Token=et;const B_=65536;function ws(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function $d(e){const n=[],t=e.length;let r=0,o=e.charCodeAt(r),i=!1,u=0,s="";for(;r<t;)o===124&&(i?(s+=e.substring(u,r-1),u=r):(n.push(s+e.substring(u,r)),s="",u=r+1)),i=o===92,r++,o=e.charCodeAt(r);return n.push(s+e.substring(u)),n}function M_(e,n,t,r){if(n+2>t)return!1;let o=n+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let i=e.bMarks[o]+e.tShift[o];if(i>=e.eMarks[o])return!1;const u=e.src.charCodeAt(i++);if(u!==124&&u!==45&&u!==58||i>=e.eMarks[o])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!Be(s)||u===45&&Be(s))return!1;for(;i<e.eMarks[o];){const C=e.src.charCodeAt(i);if(C!==124&&C!==45&&C!==58&&!Be(C))return!1;i++}let l=ws(e,n+1),a=l.split("|");const c=[];for(let C=0;C<a.length;C++){const k=a[C].trim();if(!k){if(C===0||C===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(k))return!1;k.charCodeAt(k.length-1)===58?c.push(k.charCodeAt(0)===58?"center":"right"):k.charCodeAt(0)===58?c.push("left"):c.push("")}if(l=ws(e,n).trim(),l.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;a=$d(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const d=a.length;if(d===0||d!==c.length)return!1;if(r)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),g=[n,0];p.map=g;const m=e.push("thead_open","thead",1);m.map=[n,n+1];const v=e.push("tr_open","tr",1);v.map=[n,n+1];for(let C=0;C<a.length;C++){const k=e.push("th_open","th",1);c[C]&&(k.attrs=[["style","text-align:"+c[C]]]);const D=e.push("inline","",0);D.content=a[C].trim(),D.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let b,w=0;for(o=n+2;o<t&&!(e.sCount[o]<e.blkIndent);o++){let C=!1;for(let D=0,y=h.length;D<y;D++)if(h[D](e,o,t,!0)){C=!0;break}if(C||(l=ws(e,o).trim(),!l)||e.sCount[o]-e.blkIndent>=4||(a=$d(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),w+=d-a.length,w>B_))break;if(o===n+2){const D=e.push("tbody_open","tbody",1);D.map=b=[n+2,0]}const k=e.push("tr_open","tr",1);k.map=[o,o+1];for(let D=0;D<d;D++){const y=e.push("td_open","td",1);c[D]&&(y.attrs=[["style","text-align:"+c[D]]]);const E=e.push("inline","",0);E.content=a[D]?a[D].trim():"",E.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return b&&(e.push("tbody_close","tbody",-1),b[1]=o),e.push("table_close","table",-1),g[1]=o,e.parentType=f,e.line=o,!0}function N_(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,o=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,o=r;continue}break}e.line=o;const i=e.push("code_block","code",0);return i.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function L_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||o+3>i)return!1;const u=e.src.charCodeAt(o);if(u!==126&&u!==96)return!1;let s=o;o=e.skipChars(o,u);let l=o-s;if(l<3)return!1;const a=e.src.slice(s,o),c=e.src.slice(o,i);if(u===96&&c.indexOf(String.fromCharCode(u))>=0)return!1;if(r)return!0;let d=n,f=!1;for(;d++,!(d>=t||(o=s=e.bMarks[d]+e.tShift[d],i=e.eMarks[d],o<i&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===u&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,u),!(o-s<l)&&(o=e.skipSpaces(o),!(o<i)))){f=!0;break}l=e.sCount[n],e.line=d+(f?1:0);const h=e.push("fence","code",0);return h.info=c,h.content=e.getLines(n+1,d,l,!0),h.markup=a,h.map=[n,e.line],!0}function j_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const u=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(r)return!0;const s=[],l=[],a=[],c=[],d=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,p;for(p=n;p<t;p++){const w=e.sCount[p]<e.blkIndent;if(o=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],o>=i)break;if(e.src.charCodeAt(o++)===62&&!w){let k=e.sCount[p]+1,D,y;e.src.charCodeAt(o)===32?(o++,k++,y=!1,D=!0):e.src.charCodeAt(o)===9?(D=!0,(e.bsCount[p]+k)%4===3?(o++,k++,y=!1):y=!0):D=!1;let E=k;for(s.push(e.bMarks[p]),e.bMarks[p]=o;o<i;){const S=e.src.charCodeAt(o);if(Be(S))S===9?E+=4-(E+e.bsCount[p]+(y?1:0))%4:E++;else break;o++}h=o>=i,l.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(D?1:0),a.push(e.sCount[p]),e.sCount[p]=E-k,c.push(e.tShift[p]),e.tShift[p]=o-e.bMarks[p];continue}if(h)break;let C=!1;for(let k=0,D=d.length;k<D;k++)if(d[k](e,p,t,!0)){C=!0;break}if(C){e.lineMax=p,e.blkIndent!==0&&(s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]=-1}const g=e.blkIndent;e.blkIndent=0;const m=e.push("blockquote_open","blockquote",1);m.markup=">";const v=[n,0];m.map=v,e.md.block.tokenize(e,n,p);const b=e.push("blockquote_close","blockquote",-1);b.markup=">",e.lineMax=u,e.parentType=f,v[1]=e.line;for(let w=0;w<c.length;w++)e.bMarks[w+n]=s[w],e.tShift[w+n]=c[w],e.sCount[w+n]=a[w],e.bsCount[w+n]=l[w];return e.blkIndent=g,!0}function H_(e,n,t,r){const o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(i++);if(u!==42&&u!==45&&u!==95)return!1;let s=1;for(;i<o;){const a=e.src.charCodeAt(i++);if(a!==u&&!Be(a))return!1;a===u&&s++}if(s<3)return!1;if(r)return!0;e.line=n+1;const l=e.push("hr","hr",0);return l.map=[n,e.line],l.markup=Array(s+1).join(String.fromCharCode(u)),!0}function Od(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==43)return-1;if(r<t){const i=e.src.charCodeAt(r);if(!Be(i))return-1}return r}function Bd(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let o=t;if(o+1>=r)return-1;let i=e.src.charCodeAt(o++);if(i<48||i>57)return-1;for(;;){if(o>=r)return-1;if(i=e.src.charCodeAt(o++),i>=48&&i<=57){if(o-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return o<r&&(i=e.src.charCodeAt(o),!Be(i))?-1:o}function U_(e,n){const t=e.level+2;for(let r=n+2,o=e.tokens.length-2;r<o;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function K_(e,n,t,r){let o,i,u,s,l=n,a=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(c=!0);let d,f,h;if((h=Bd(e,l))>=0){if(d=!0,u=e.bMarks[l]+e.tShift[l],f=Number(e.src.slice(u,h-1)),c&&f!==1)return!1}else if((h=Od(e,l))>=0)d=!1;else return!1;if(c&&e.skipSpaces(h)>=e.eMarks[l])return!1;if(r)return!0;const p=e.src.charCodeAt(h-1),g=e.tokens.length;d?(s=e.push("ordered_list_open","ol",1),f!==1&&(s.attrs=[["start",f]])):s=e.push("bullet_list_open","ul",1);const m=[l,0];s.map=m,s.markup=String.fromCharCode(p);let v=!1;const b=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";l<t;){i=h,o=e.eMarks[l];const C=e.sCount[l]+h-(e.bMarks[l]+e.tShift[l]);let k=C;for(;i<o;){const $=e.src.charCodeAt(i);if($===9)k+=4-(k+e.bsCount[l])%4;else if($===32)k++;else break;i++}const D=i;let y;D>=o?y=1:y=k-C,y>4&&(y=1);const E=C+y;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(p);const S=[l,0];s.map=S,d&&(s.info=e.src.slice(u,h-1));const z=e.tight,j=e.tShift[l],I=e.sCount[l],q=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=E,e.tight=!0,e.tShift[l]=D-e.bMarks[l],e.sCount[l]=k,D>=o&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,l,t,!0),(!e.tight||v)&&(a=!1),v=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=q,e.tShift[l]=j,e.sCount[l]=I,e.tight=z,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(p),l=e.line,S[1]=l,l>=t||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let G=!1;for(let $=0,Y=b.length;$<Y;$++)if(b[$](e,l,t,!0)){G=!0;break}if(G)break;if(d){if(h=Bd(e,l),h<0)break;u=e.bMarks[l]+e.tShift[l]}else if(h=Od(e,l),h<0)break;if(p!==e.src.charCodeAt(h-1))break}return d?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(p),m[1]=l,e.line=l,e.parentType=w,a&&U_(e,g),!0}function V_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],u=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function s(b){const w=e.lineMax;if(b>=w||e.isEmpty(b))return null;let C=!1;if(e.sCount[b]-e.blkIndent>3&&(C=!0),e.sCount[b]<0&&(C=!0),!C){const y=e.md.block.ruler.getRules("reference"),E=e.parentType;e.parentType="reference";let S=!1;for(let z=0,j=y.length;z<j;z++)if(y[z](e,b,w,!0)){S=!0;break}if(e.parentType=E,S)return null}const k=e.bMarks[b]+e.tShift[b],D=e.eMarks[b];return e.src.slice(k,D+1)}let l=e.src.slice(o,i+1);i=l.length;let a=-1;for(o=1;o<i;o++){const b=l.charCodeAt(o);if(b===91)return!1;if(b===93){a=o;break}else if(b===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(b===92&&(o++,o<i&&l.charCodeAt(o)===10)){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}}if(a<0||l.charCodeAt(a+1)!==58)return!1;for(o=a+2;o<i;o++){const b=l.charCodeAt(o);if(b===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Be(b))break}const c=e.md.helpers.parseLinkDestination(l,o,i);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;o=c.pos;const f=o,h=u,p=o;for(;o<i;o++){const b=l.charCodeAt(o);if(b===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Be(b))break}let g=e.md.helpers.parseLinkTitle(l,o,i);for(;g.can_continue;){const b=s(u);if(b===null)break;l+=b,o=i,i=l.length,u++,g=e.md.helpers.parseLinkTitle(l,o,i,g)}let m;for(o<i&&p!==o&&g.ok?(m=g.str,o=g.pos):(m="",o=f,u=h);o<i;){const b=l.charCodeAt(o);if(!Be(b))break;o++}if(o<i&&l.charCodeAt(o)!==10&&m)for(m="",o=f,u=h;o<i;){const b=l.charCodeAt(o);if(!Be(b))break;o++}if(o<i&&l.charCodeAt(o)!==10)return!1;const v=$u(l.slice(1,a));return v?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[v]>"u"&&(e.env.references[v]={title:m,href:d}),e.line=u),!0):!1}const W_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],q_="[a-zA-Z_:][a-zA-Z0-9:._-]*",G_="[^\"'=<>`\\x00-\\x20]+",Z_="'[^']*'",X_='"[^"]*"',Y_="(?:"+G_+"|"+Z_+"|"+X_+")",J_="(?:\\s+"+q_+"(?:\\s*=\\s*"+Y_+")?)",Pp="<[A-Za-z][A-Za-z0-9\\-]*"+J_+"*\\s*\\/?>",Rp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Q_="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",ew="<[?][\\s\\S]*?[?]>",nw="<![A-Za-z][^>]*>",tw="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",rw=new RegExp("^(?:"+Pp+"|"+Rp+"|"+Q_+"|"+ew+"|"+nw+"|"+tw+")"),ow=new RegExp("^(?:"+Pp+"|"+Rp+")"),dr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+W_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(ow.source+"\\s*$"),/^$/,!1]];function iw(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let u=e.src.slice(o,i),s=0;for(;s<dr.length&&!dr[s][0].test(u);s++);if(s===dr.length)return!1;if(r)return dr[s][2];let l=n+1;const a=dr[s][1].test("");if(!dr[s][1].test(u)){for(;l<t&&!(e.sCount[l]<e.blkIndent&&(a||!e.isEmpty(l)));l++)if(o=e.bMarks[l]+e.tShift[l],i=e.eMarks[l],u=e.src.slice(o,i),dr[s][1].test(u)){u.length!==0&&l++;break}}e.line=l;const c=e.push("html_block","",0);return c.map=[n,l],c.content=e.getLines(n,l,e.blkIndent,!0),!0}function uw(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let u=e.src.charCodeAt(o);if(u!==35||o>=i)return!1;let s=1;for(u=e.src.charCodeAt(++o);u===35&&o<i&&s<=6;)s++,u=e.src.charCodeAt(++o);if(s>6||o<i&&!Be(u))return!1;if(r)return!0;i=e.skipSpacesBack(i,o);const l=e.skipCharsBack(i,35,o);l>o&&Be(e.src.charCodeAt(l-1))&&(i=l),e.line=n+1;const a=e.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[n,e.line];const c=e.push("inline","",0);c.content=Ou(e.src.slice(o,i)),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(s),-1);return d.markup="########".slice(0,s),!0}function sw(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let i=0,u,s=n+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let h=e.bMarks[s]+e.tShift[s];const p=e.eMarks[s];if(h<p&&(u=e.src.charCodeAt(h),(u===45||u===61)&&(h=e.skipChars(h,u),h=e.skipSpaces(h),h>=p))){i=u===61?1:2;break}}if(e.sCount[s]<0)continue;let f=!1;for(let h=0,p=r.length;h<p;h++)if(r[h](e,s,t,!0)){f=!0;break}if(f)break}if(!i)return e.parentType=o,!1;const l=Ou(e.getLines(n,s,e.blkIndent,!1));e.line=s+1;const a=e.push("heading_open","h"+String(i),1);a.markup=String.fromCharCode(u),a.map=[n,e.line];const c=e.push("inline","",0);c.content=l,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup=String.fromCharCode(u),e.parentType=o,!0}function lw(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let a=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,i,t,!0)){a=!0;break}if(a)break}const u=Ou(e.getLines(n,i,e.blkIndent,!1));e.line=i;const s=e.push("paragraph_open","p",1);s.map=[n,e.line];const l=e.push("inline","",0);return l.content=u,l.map=[n,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Fi=[["table",M_,["paragraph","reference"]],["code",N_],["fence",L_,["paragraph","reference","blockquote","list"]],["blockquote",j_,["paragraph","reference","blockquote","list"]],["hr",H_,["paragraph","reference","blockquote","list"]],["list",K_,["paragraph","reference","blockquote"]],["reference",V_],["html_block",iw,["paragraph","reference","blockquote"]],["heading",uw,["paragraph","reference","blockquote"]],["lheading",sw],["paragraph",lw]];function Bu(){this.ruler=new Pn;for(let e=0;e<Fi.length;e++)this.ruler.push(Fi[e][0],Fi[e][1],{alt:(Fi[e][2]||[]).slice()})}Bu.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),o=r.length,i=e.md.options.maxNesting;let u=n,s=!1;for(;u<t&&(e.line=u=e.skipEmptyLines(u),!(u>=t||e.sCount[u]<e.blkIndent));){if(e.level>=i){e.line=t;break}const l=e.line;let a=!1;for(let c=0;c<o;c++)if(a=r[c](e,u,t,!1),a){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),u=e.line,u<t&&e.isEmpty(u)&&(s=!0,u++,e.line=u)}};Bu.prototype.parse=function(e,n,t,r){if(!e)return;const o=new this.State(e,n,t,r);this.tokenize(o,o.line,o.lineMax)};Bu.prototype.State=vt;function gi(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}gi.prototype.pushPending=function(){const e=new et("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};gi.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new et(e,n,t);let o=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};gi.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e);let o;if(e===0)o=32;else if(e===1)o=this.src.charCodeAt(0),(o&63488)===55296&&(o=65533);else if(o=this.src.charCodeAt(e-1),(o&64512)===56320){const m=this.src.charCodeAt(e-2);o=(m&64512)===55296?65536+(m-55296<<10)+(o-56320):65533}else(o&64512)===55296&&(o=65533);let i=e;for(;i<t&&this.src.charCodeAt(i)===r;)i++;const u=i-e;let s=i<t?this.src.charCodeAt(i):32;if((s&64512)===55296){const m=this.src.charCodeAt(i+1);s=(m&64512)===56320?65536+(s-55296<<10)+(m-56320):65533}else(s&64512)===56320&&(s=65533);const l=ti(o)||ni(o),a=ti(s)||ni(s),c=ei(o),d=ei(s),f=!d&&(!a||c||l),h=!c&&(!l||d||a);return{can_open:f&&(n||!h||l),can_close:h&&(n||!f||a),length:u}};gi.prototype.Token=et;function aw(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function cw(e,n){let t=e.pos;for(;t<e.posMax&&!aw(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const dw=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function fw(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const o=e.pending.match(dw);if(!o)return!1;const i=o[1],u=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!u)return!1;let s=u.url;if(s.length<=i.length)return!1;let l=s.length;for(;l>0&&s.charCodeAt(l-1)===42;)l--;l!==s.length&&(s=s.slice(0,l));const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-i.length,!0}function hw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,o=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<o&&Be(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ha=[];for(let e=0;e<256;e++)ha.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ha[e.charCodeAt(0)]=1});function pw(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let o=e.src.charCodeAt(t);if(o===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(o=e.src.charCodeAt(t),!!Be(o));)t++;return e.pos=t,!0}if(o===32){if(!n){const s=e.push("text_special","",0);s.content="\\",s.markup="\\",s.info="escape"}return e.pos=t,!0}let i=e.src[t];if(o>=55296&&o<=56319&&t+1<r){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const u="\\"+i;if(!n){const s=e.push("text_special","",0);o<256&&ha[o]!==0?s.content=i:s.content=u,s.markup=u,s.info="escape"}return e.pos=t+1,!0}function gw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const o=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const u=e.src.slice(o,t),s=u.length;if(e.backticksScanned&&(e.backticks[s]||0)<=o)return n||(e.pending+=u),e.pos+=s,!0;let l=t,a;for(;(a=e.src.indexOf("`",l))!==-1;){for(l=a+1;l<i&&e.src.charCodeAt(l)===96;)l++;const c=l-a;if(c===s){if(!n){const d=e.push("code_inline","code",0);d.markup=u,d.content=e.src.slice(t,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[c]=a}return e.backticksScanned=!0,n||(e.pending+=u),e.pos+=s,!0}function mw(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const o=e.scanDelims(e.pos,!0);let i=o.length;const u=String.fromCharCode(r);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=u,i--);for(let l=0;l<i;l+=2)s=e.push("text","",0),s.content=u+u,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function Md(e,n){let t;const r=[],o=n.length;for(let i=0;i<o;i++){const u=n[i];if(u.marker!==126||u.end===-1)continue;const s=n[u.end];t=e.tokens[u.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&r.push(s.token-1)}for(;r.length;){const i=r.pop();let u=i+1;for(;u<e.tokens.length&&e.tokens[u].type==="s_close";)u++;u--,i!==u&&(t=e.tokens[u],e.tokens[u]=e.tokens[i],e.tokens[i]=t)}}function bw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Md(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Md(e,n[r].delimiters)}const $p={tokenize:mw,postProcess:bw};function vw(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const o=e.scanDelims(e.pos,r===42);for(let i=0;i<o.length;i++){const u=e.push("text","",0);u.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function Nd(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const o=n[r];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const i=n[o.end],u=r>0&&n[r-1].end===o.end+1&&n[r-1].marker===o.marker&&n[r-1].token===o.token-1&&n[o.end+1].token===i.token+1,s=String.fromCharCode(o.marker),l=e.tokens[o.token];l.type=u?"strong_open":"em_open",l.tag=u?"strong":"em",l.nesting=1,l.markup=u?s+s:s,l.content="";const a=e.tokens[i.token];a.type=u?"strong_close":"em_close",a.tag=u?"strong":"em",a.nesting=-1,a.markup=u?s+s:s,a.content="",u&&(e.tokens[n[r-1].token].content="",e.tokens[n[o.end+1].token].content="",r--)}}function xw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Nd(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Nd(e,n[r].delimiters)}const Op={tokenize:vw,postProcess:xw};function yw(e,n){let t,r,o,i,u="",s="",l=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let p=h+1;if(p<d&&e.src.charCodeAt(p)===40){for(a=!1,p++;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);if(p>=d)return!1;if(l=p,o=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),o.ok){for(u=e.md.normalizeLink(o.str),e.md.validateLink(u)?p=o.pos:u="",l=p;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);if(o=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<d&&l!==p&&o.ok)for(s=o.str,p=o.pos;p<d&&(t=e.src.charCodeAt(p),!(!Be(t)&&t!==10));p++);}(p>=d||e.src.charCodeAt(p)!==41)&&(a=!0),p++}if(a){if(typeof e.env.references>"u")return!1;if(p<d&&e.src.charCodeAt(p)===91?(l=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?r=e.src.slice(l,p++):p=h+1):p=h+1,r||(r=e.src.slice(f,h)),i=e.env.references[$u(r)],!i)return e.pos=c,!1;u=i.href,s=i.title}if(!n){e.pos=f,e.posMax=h;const g=e.push("link_open","a",1),m=[["href",u]];g.attrs=m,s&&m.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=d,!0}function Cw(e,n){let t,r,o,i,u,s,l,a,c="";const d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);if(i>=f)return!1;for(a=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(c=e.md.normalizeLink(s.str),e.md.validateLink(c)?i=s.pos:c=""),a=i;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&a!==i&&s.ok)for(l=s.str,i=s.pos;i<f&&(t=e.src.charCodeAt(i),!(!Be(t)&&t!==10));i++);else l="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(a=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?o=e.src.slice(a,i++):i=p+1):i=p+1,o||(o=e.src.slice(h,p)),u=e.env.references[$u(o)],!u)return e.pos=d,!1;c=u.href,l=u.title}if(!n){r=e.src.slice(h,p);const g=[];e.md.inline.parse(r,e.md,e.env,g);const m=e.push("image","img",0),v=[["src",c],["alt",""]];m.attrs=v,m.children=g,m.content=r,l&&v.push(["title",l])}return e.pos=i,e.posMax=f,!0}const _w=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ww=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function kw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,o=e.posMax;for(;;){if(++t>=o)return!1;const u=e.src.charCodeAt(t);if(u===60)return!1;if(u===62)break}const i=e.src.slice(r+1,t);if(ww.test(i)){const u=e.md.normalizeLink(i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}if(_w.test(i)){const u=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}return!1}function Sw(e){return/^<a[>\s]/i.test(e)}function Ew(e){return/^<\/a\s*>/i.test(e)}function Aw(e){const n=e|32;return n>=97&&n<=122}function Tw(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const o=e.src.charCodeAt(r+1);if(o!==33&&o!==63&&o!==47&&!Aw(o))return!1;const i=e.src.slice(r).match(rw);if(!i)return!1;if(!n){const u=e.push("html_inline","",0);u.content=i[0],Sw(u.content)&&e.linkLevel++,Ew(u.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const Dw=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,zw=/^&([a-z][a-z0-9]{1,31});/i;function Fw(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(Dw);if(i){if(!n){const u=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=da(u)?Qo(u):Qo(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(zw);if(i){const u=X8(i[0]);if(u!==i[0]){if(!n){const s=e.push("text_special","",0);s.content=u,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Ld(e){const n={},t=e.length;if(!t)return;let r=0,o=-2;const i=[];for(let u=0;u<t;u++){const s=e[u];if(i.push(0),(e[r].marker!==s.marker||o!==s.token-1)&&(r=u),o=s.token,s.length=s.length||0,!s.close)continue;n.hasOwnProperty(s.marker)||(n[s.marker]=[-1,-1,-1,-1,-1,-1]);const l=n[s.marker][(s.open?3:0)+s.length%3];let a=r-i[r]-1,c=a;for(;a>l;a-=i[a]+1){const d=e[a];if(d.marker===s.marker&&d.open&&d.end<0){let f=!1;if((d.close||s.open)&&(d.length+s.length)%3===0&&(d.length%3!==0||s.length%3!==0)&&(f=!0),!f){const h=a>0&&!e[a-1].open?i[a-1]+1:0;i[u]=u-a+h,i[a]=h,s.open=!1,d.end=u,d.close=!1,c=-1,o=-2;break}}}c!==-1&&(n[s.marker][(s.open?3:0)+(s.length||0)%3]=c)}}function Iw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Ld(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Ld(n[r].delimiters)}function Pw(e){let n,t,r=0;const o=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)o[n].nesting<0&&r--,o[n].level=r,o[n].nesting>0&&r++,o[n].type==="text"&&n+1<i&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}const ks=[["text",cw],["linkify",fw],["newline",hw],["escape",pw],["backticks",gw],["strikethrough",$p.tokenize],["emphasis",Op.tokenize],["link",yw],["image",Cw],["autolink",kw],["html_inline",Tw],["entity",Fw]],Ss=[["balance_pairs",Iw],["strikethrough",$p.postProcess],["emphasis",Op.postProcess],["fragments_join",Pw]];function mi(){this.ruler=new Pn;for(let e=0;e<ks.length;e++)this.ruler.push(ks[e][0],ks[e][1]);this.ruler2=new Pn;for(let e=0;e<Ss.length;e++)this.ruler2.push(Ss[e][0],Ss[e][1])}mi.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,o=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let u=!1;if(e.level<o){for(let s=0;s<r;s++)if(e.level++,u=t[s](e,!0),e.level--,u){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;u||e.pos++,i[n]=e.pos};mi.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,o=e.md.options.maxNesting;for(;e.pos<r;){const i=e.pos;let u=!1;if(e.level<o){for(let s=0;s<t;s++)if(u=n[s](e,!1),u){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};mi.prototype.parse=function(e,n,t,r){const o=new this.State(e,n,t,r);this.tokenize(o);const i=this.ruler2.getRules(""),u=i.length;for(let s=0;s<u;s++)i[s](o)};mi.prototype.State=gi;function Rw(e){const n={};e=e||{},n.src_Any=_p.source,n.src_Cc=wp.source,n.src_Z=Sp.source,n.src_P=aa.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter=`(?:(?!${t}|${n.src_ZPCc})${n.src_Any})`,n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth=`(?:(?:(?!${n.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator=`(?=$|${t}|${n.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${n.src_ZPCc}))`,n.src_path=`(?:[/?#](?:(?!${n.src_ZCc}|${t}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${n.src_ZCc}|\\]).)*\\]|\\((?:(?!${n.src_ZCc}|[)]).)*\\)|\\{(?:(?!${n.src_ZCc}|[}]).)*\\}|\\"(?:(?!${n.src_ZCc}|["]).)+\\"|\\'(?:(?!${n.src_ZCc}|[']).)+\\'|\\'(?=${n.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${n.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${n.src_ZCc}|$)|;(?!${n.src_ZCc}|$)|\\!+(?!${n.src_ZCc}|[!]|$)|\\?(?!${n.src_ZCc}|[?]|$))+|\\/)?`,n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+`|${n.src_pseudo_letter}{1,63})`,n.src_domain="(?:"+n.src_xn+`|(?:${n.src_pseudo_letter})|(?:${n.src_pseudo_letter}(?:-|${n.src_pseudo_letter}){0,61}${n.src_pseudo_letter}))`,n.src_host=`(?:(?:(?:(?:${n.src_domain})\\.)*${n.src_domain}))`,n.tpl_host_fuzzy="(?:"+n.src_ip4+`|(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%)))`,n.tpl_host_no_ip_fuzzy=`(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%))`,n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${n.src_ZPCc}|>|$))`,n.tpl_email_fuzzy=`(^|${t}|"|\\(|${n.src_ZCc})(${n.src_email_name}@${n.tpl_host_fuzzy_strict})`,n.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_fuzzy_strict}${n.src_path})`,n.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_no_ip_fuzzy_strict}${n.src_path})`,n}function hl(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Mu(e){return Object.prototype.toString.call(e)}function $w(e){return Mu(e)==="[object String]"}function Ow(e){return Mu(e)==="[object Object]"}function Bw(e){return Mu(e)==="[object RegExp]"}function jd(e){return Mu(e)==="[object Function]"}function Mw(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Bp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Nw(e){return Object.keys(e||{}).reduce(function(n,t){return n||Bp.hasOwnProperty(t)},!1)}const Lw={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp(`^\\/\\/${t.re.src_auth}${t.re.src_host_port_strict}${t.re.src_path}`,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+`(?:localhost|(?:(?:${t.re.src_domain})\\.)+${t.re.src_domain_root})`+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp(`^${t.re.src_email_name}@${t.re.src_host_strict}`,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},jw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Hw="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Uw(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Hd(){return function(e,n){n.normalize(e)}}function iu(e){const n=e.re=Rw(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(jw),t.push(n.src_xn),n.src_tlds=t.join("|");function r(s){return s.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.email_fuzzy_global=RegExp(r(n.tpl_email_fuzzy),"ig"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_fuzzy_global=RegExp(r(n.tpl_link_fuzzy),"ig"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.link_no_ip_fuzzy_global=RegExp(r(n.tpl_link_no_ip_fuzzy),"ig"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function i(s,l){throw new Error(`(LinkifyIt) Invalid schema "${s}": ${l}`)}Object.keys(e.__schemas__).forEach(function(s){const l=e.__schemas__[s];if(l===null)return;const a={validate:null,link:null};if(e.__compiled__[s]=a,Ow(l)){Bw(l.validate)?a.validate=Uw(l.validate):jd(l.validate)?a.validate=l.validate:i(s,l),jd(l.normalize)?a.normalize=l.normalize:l.normalize?i(s,l):a.normalize=Hd();return}if($w(l)){o.push(s);return}i(s,l)}),o.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Hd()};const u=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(Mw).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${u})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${u})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function Mp(e,n,t,r){const o=e.slice(t,r);this.schema=n.toLowerCase(),this.index=t,this.lastIndex=r,this.raw=o,this.text=o,this.url=o}function Mn(e,n){if(!(this instanceof Mn))return new Mn(e,n);n||Nw(e)&&(n=e,e={}),this.__opts__=hl({},Bp,n),this.__schemas__=hl({},Lw,e),this.__compiled__={},this.__tlds__=Hw,this.__tlds_replaced__=!1,this.re={},iu(this)}Mn.prototype.add=function(n,t){return this.__schemas__[n]=t,iu(this),this};Mn.prototype.set=function(n){return this.__opts__=hl(this.__opts__,n),this};Mn.prototype.test=function(n){if(!n.length)return!1;let t,r;if(this.re.schema_test.test(n)){for(r=this.re.schema_search,r.lastIndex=0;(t=r.exec(n))!==null;)if(this.testSchemaAt(n,t[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&n.search(this.re.host_fuzzy_test)>=0&&n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&n.indexOf("@")>=0&&n.match(this.re.email_fuzzy)!==null)};Mn.prototype.pretest=function(n){return this.re.pretest.test(n)};Mn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};Mn.prototype.match=function(n){const t=[],r=[],o=[],i=[];let u,s,l;function a(f,h){return f?h?f.index!==h.index?f.index<h.index?f:h:f.lastIndex>=h.lastIndex?f:h:f:h}if(!n.length)return null;if(this.re.schema_test.test(n))for(l=this.re.schema_search,l.lastIndex=0;(u=l.exec(n))!==null;)s=this.testSchemaAt(n,u[2],l.lastIndex),s&&r.push({schema:u[2],index:u.index+u[1].length,lastIndex:u.index+u[0].length+s});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(l=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,l.lastIndex=0;(u=l.exec(n))!==null;)o.push({schema:"",index:u.index+u[1].length,lastIndex:u.index+u[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(l=this.re.email_fuzzy_global,l.lastIndex=0;(u=l.exec(n))!==null;)i.push({schema:"mailto:",index:u.index+u[1].length,lastIndex:u.index+u[0].length});const c=[0,0,0];let d=0;for(;;){const f=[r[c[0]],i[c[1]],o[c[2]]],h=a(a(f[0],f[1]),f[2]);if(!h)break;if(h===f[0]?c[0]++:h===f[1]?c[1]++:c[2]++,h.index<d)continue;const p=new Mp(n,h.schema,h.index,h.lastIndex);this.__compiled__[p.schema].normalize(p,this),t.push(p),d=h.lastIndex}return t.length?t:null};Mn.prototype.matchAtStart=function(n){if(!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);if(!r)return null;const o=new Mp(n,t[2],t.index+t[1].length,t.index+t[0].length+r);return this.__compiled__[o.schema].normalize(o,this),o};Mn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),iu(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,iu(this),this)};Mn.prototype.normalize=function(n){n.schema||(n.url=`http://${n.url}`),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url=`mailto:${n.url}`)};Mn.prototype.onCompile=function(){};const Yr=2147483647,at=36,pa=1,ri=26,Kw=38,Vw=700,Np=72,Lp=128,jp="-",Ww=/^xn--/,qw=/[^\0-\x7F]/,Gw=/[\x2E\u3002\uFF0E\uFF61]/g,Zw={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Es=at-pa,ct=Math.floor,As=String.fromCharCode;function Yt(e){throw new RangeError(Zw[e])}function Xw(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function Hp(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(Gw,".");const o=e.split("."),i=Xw(o,n).join(".");return r+i}function Up(e){const n=[];let t=0;const r=e.length;for(;t<r;){const o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((o&1023)<<10)+(i&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}const Yw=e=>String.fromCodePoint(...e),Jw=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:at},Ud=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},Kp=function(e,n,t){let r=0;for(e=t?ct(e/Vw):e>>1,e+=ct(e/n);e>Es*ri>>1;r+=at)e=ct(e/Es);return ct(r+(Es+1)*e/(e+Kw))},Vp=function(e){const n=[],t=e.length;let r=0,o=Lp,i=Np,u=e.lastIndexOf(jp);u<0&&(u=0);for(let s=0;s<u;++s)e.charCodeAt(s)>=128&&Yt("not-basic"),n.push(e.charCodeAt(s));for(let s=u>0?u+1:0;s<t;){const l=r;for(let c=1,d=at;;d+=at){s>=t&&Yt("invalid-input");const f=Jw(e.charCodeAt(s++));f>=at&&Yt("invalid-input"),f>ct((Yr-r)/c)&&Yt("overflow"),r+=f*c;const h=d<=i?pa:d>=i+ri?ri:d-i;if(f<h)break;const p=at-h;c>ct(Yr/p)&&Yt("overflow"),c*=p}const a=n.length+1;i=Kp(r-l,a,l==0),ct(r/a)>Yr-o&&Yt("overflow"),o+=ct(r/a),r%=a,n.splice(r++,0,o)}return String.fromCodePoint(...n)},Wp=function(e){const n=[];e=Up(e);const t=e.length;let r=Lp,o=0,i=Np;for(const l of e)l<128&&n.push(As(l));const u=n.length;let s=u;for(u&&n.push(jp);s<t;){let l=Yr;for(const c of e)c>=r&&c<l&&(l=c);const a=s+1;l-r>ct((Yr-o)/a)&&Yt("overflow"),o+=(l-r)*a,r=l;for(const c of e)if(c<r&&++o>Yr&&Yt("overflow"),c===r){let d=o;for(let f=at;;f+=at){const h=f<=i?pa:f>=i+ri?ri:f-i;if(d<h)break;const p=d-h,g=at-h;n.push(As(Ud(h+p%g,0))),d=ct(p/g)}n.push(As(Ud(d,0))),i=Kp(o,a,s===u),o=0,++s}++o,++r}return n.join("")},Qw=function(e){return Hp(e,function(n){return Ww.test(n)?Vp(n.slice(4).toLowerCase()):n})},e7=function(e){return Hp(e,function(n){return qw.test(n)?"xn--"+Wp(n):n})},qp={version:"2.3.1",ucs2:{decode:Up,encode:Yw},decode:Vp,encode:Wp,toASCII:e7,toUnicode:Qw},n7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},t7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},r7={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},o7={default:n7,zero:t7,commonmark:r7},i7=/^(vbscript|javascript|file|data):/,u7=/^data:image\/(gif|png|jpeg|webp);/;function s7(e){const n=e.trim().toLowerCase();return i7.test(n)?u7.test(n):!0}const Gp=["http:","https:","mailto:"];function l7(e){const n=la(e,!0);if(n.hostname&&(!n.protocol||Gp.indexOf(n.protocol)>=0))try{n.hostname=qp.toASCII(n.hostname)}catch{}return pi(sa(n))}function a7(e){const n=la(e,!0);if(n.hostname&&(!n.protocol||Gp.indexOf(n.protocol)>=0))try{n.hostname=qp.toUnicode(n.hostname)}catch{}return oo(sa(n),oo.defaultChars+"%")}function Nn(e,n){if(!(this instanceof Nn))return new Nn(e,n);n||ca(e)||(n=e||{},e="default"),this.inline=new mi,this.block=new Bu,this.core=new fa,this.renderer=new ao,this.linkify=new Mn,this.validateLink=s7,this.normalizeLink=l7,this.normalizeLinkText=a7,this.utils=f_,this.helpers=Ru({},m_),this.options={},this.configure(e),n&&this.set(n)}Nn.prototype.set=function(e){return Ru(this.options,e),this};Nn.prototype.configure=function(e){const n=this;if(ca(e)){const t=e;if(e=o7[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};Nn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Nn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Nn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Nn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Nn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Nn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Nn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function c7(e,n=100){let t=e.replace(/<img\s+[^>]*src\s*=\s*["']([^"']*)["'][^>]*>/gi,"").replace(/!\[(.*?)\]\(.*?\)/g,"");if(n===-1)return t;if(t.length>n){const r=t.lastIndexOf(" ",n),o=r>n*.8?r:n;t=t.substring(0,o)+"..."}return t}function d7(e){let n=e.replace(/([.$+?{}()|[\]\\])/g,"\\$1");return n=n.replace(/\*\*\/\*/g,"__GLOBSTAR_WITH_SLASH_STAR__").replace(/\*\*/g,"(.*?)").replace(/\*/g,"[^/]*").replace(/__GLOBSTAR_WITH_SLASH_STAR__/g,"(.*?)[^/]*"),new RegExp(`^${n}$`)}function f7(e,n){if(!e.includes("**"))return console.error("模式中不包含 '**'."),null;const t=d7(e),r=n.match(t);return r&&r[1]!==void 0?r[1]:null}const Nu=w8("Dynamic",{state:()=>({data:[{title:"为什么写博客",content:"博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。",links:""}],theme:"light"}),getters:{},actions:{initData(){const e=new Nn,n=te([]),t=Object.assign({"/src/blog/GIT/git基本操作.md":e8,"/src/blog/GIT/git提交规范.md":t8,"/src/blog/go语言进阶学习.md":o8,"/src/blog/nuxt/Nuxt.md":u8,"/src/blog/typescript/ts.md":l8,"/src/blog/上坪支教日记.md":c8,"/src/blog/测试/实习项目—仿百度云盘.md":f8,"/src/blog/测试/脚手架.md":p8,"/src/blog/预处理器/scss.md":m8});console.log(t),n.value=Object.entries(t).map(([r,o])=>{let i=decodeURIComponent(r.split("/").pop()||"");const u=c7(o.default),s=k8(u),l=e.render(u.replace(/^---[\s\S]*?---/,"")),a=f7("/src/blog/**/*.md",r);return a&&(i=a+i),{id:i,title:i,date:s.date||"未知日期",excerpt:s.excerpt||l.substring(0,100)+"...",content:o.default}}),this.data=n.value.sort((r,o)=>r.title.localeCompare(o.title)),console.log(n.value)}}}),h7=le({__name:"Menu",setup(e){const n=te([]),t=MC(),r=te(!0),o=Nu(),i=l=>()=>A(Vh,null,{default:()=>A(l)}),u=R(()=>[{whateverLabel:"首页",whateverKey:"home",icon:i(KC),route:"home"},{whateverLabel:"项目",whateverKey:"projects",icon:i(HC),route:"projects"},{whateverLabel:"友链",whateverKey:"links",icon:i(GC),route:"links"},{whateverLabel:"关于",whateverKey:"about",icon:i(WC),route:"about"},{whateverLabel:"文章",whateverKey:"articles",icon:i(LC),whateverChildren:n.value},{whateverLabel:"归档",whateverKey:"markdown",icon:i(JC),route:"markdownIndex"},{whateverLabel:"时间线",whateverKey:"timeline",icon:i(XC),route:"time"}]);Ln(()=>{const l=[];n.value=o.data.map(a=>{var c,d;if((c=a.id)!=null&&c.includes("/")){const[f,h]=a.id.split("/");let p=!1;for(let g=0;g<l.length;g++)if(l[g].whateverLabel===f){(d=l[g].whateverChildren)==null||d.push({whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}),p=!0;break}return p||l.push({whateverLabel:f,whateverKey:f,route:"markdown",params:{id:f},whateverChildren:[{whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}]}),null}return{whateverLabel:a.title,whateverKey:a.id,route:"markdown",params:{id:a.id}}}).filter(Boolean),n.value.push(...l),console.log(n.value)});const s=R(()=>{const l=a=>a.map(c=>{const d={...c};if(d.route&&!d.whateverChildren){const f=d.whateverLabel;d.whateverLabel=()=>A(bp,{to:d.params?{name:d.route,params:d.params}:{name:d.route}},{default:()=>f}),d.onClick=()=>{d.params?t.push({name:d.route,params:d.params}):t.push({name:d.route})}}return Array.isArray(d.whateverChildren)&&(d.whateverChildren=l(d.whateverChildren)),d});return l(u.value)});return(l,a)=>(Ve(),Tr(Ke(td),{"has-sider":"",class:"xh-menu__container"},{default:Cn(()=>[_e(Ke(h5),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:r.value,"show-trigger":"",onCollapse:a[0]||(a[0]=c=>r.value=!0),onExpand:a[1]||(a[1]=c=>r.value=!1)},{default:Cn(()=>[_e(Ke(w5),{collapsed:r.value,"collapsed-width":64,"collapsed-icon-size":22,options:s.value,"key-field":"whateverKey","label-field":"whateverLabel","children-field":"whateverChildren"},null,8,["collapsed","options"])]),_:1},8,["collapsed"]),_e(Ke(td))]),_:1}))}}),ur=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},p7=ur(h7,[["__scopeId","data-v-1e89585d"]]),g7={class:"xh"},m7=le({__name:"App",setup(e){const n=Nu();n.initData();const t=R(()=>n.theme==="dark"?F5:z5);return(r,o)=>{const i=jf("router-view");return Ve(),fn("div",g7,[o[0]||(o[0]=ue("div",{class:"line-background"},null,-1)),o[1]||(o[1]=yn()),_e(Ke(k4),{"theme-overrides":t.value},{default:Cn(()=>[_e(p7),_e(i,null,{default:Cn(({Component:u})=>[_e(Dr,{name:"router-transition"},{default:Cn(()=>[(Ve(),Tr(yg(u)))]),_:2},1024)]),_:1})]),_:1},8,["theme-overrides"]),o[2]||(o[2]=ue("div",{class:"area"},[ue("ul",{class:"circles"},[ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li")])],-1))])}}}),b7=ur(m7,[["__scopeId","data-v-bd6162a2"]]),v7="modulepreload",x7=function(e){return"/HaiBlogger/"+e},Kd={},fr=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=x7(l),l in Kd)return;Kd[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":v7,a||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),a)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return o.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},y7=le({__name:"Card",props:{title:{type:String,default:"为什么写博客"},content:{type:String,default:""}},setup(e){const n=e;return(t,r)=>(Ve(),Tr(Ke(_4),{title:n.title,embedded:"",bordered:!1,innerHTML:n.content,class:"markdown-renderer"},null,8,["title","innerHTML"]))}}),C7=ur(y7,[["__scopeId","data-v-70ac4eb7"]]),_7={class:"timeline-container"},w7={__name:"TimeLine",setup(e){return(n,t)=>(Ve(),fn("div",_7,[_e(Ke(A5),{"item-placement":"right",class:"timeline"},{default:Cn(()=>[_e(Ke(vo),{content:"初次接触前端",time:"2024-10-09"}),_e(Ke(vo),{type:"success",title:"纯三件套",content:"自己的第一个博客",time:"2024-12-03"}),_e(Ke(vo),{type:"error",content:"学习ing"}),_e(Ke(vo),{type:"warning",title:"一个文档",content:"使用vitepress弄了一个博客",time:"2025-04-03"}),_e(Ke(vo),{type:"info",title:"本博客",content:"使用这段时间所学去写",time:"2025-07-19"})]),_:1})]))}},k7=ur(w7,[["__scopeId","data-v-dc9fe63a"]]),S7={class:"xh-home"},E7={class:"xh-info-container"},A7={class:"xh-avatar-container"},T7={class:"xh-info-text"},D7={class:"xh-job"},z7={class:"xh-bio"},F7={class:"xh-social-container"},I7={class:"xh-social"},P7={class:"card"},R7={class:"xh-home-timeline"},$7=le({__name:"Home",setup(e){const n=Nu(),t=D5(),r=te("近期动态"),o=te(["近期动态","随笔"]),i=te({padding:"0 6px",borderRadius:t.value.borderRadius,display:"inline-block",color:t.value.baseColor,background:t.value.primaryColor,transition:"all .3s ease-in-out",cursor:"pointer"}),u=te(1),s=R(()=>{if(u.value===1)return n.data;if(u.value===2)return[{title:"为什么写博客",content:"content",links:""}]}),l=()=>{u.value++,r.value=o.value[u.value-1],u.value>5&&(u.value=1)},a=()=>{i.value.background=t.value.primaryColorSuppl},c=()=>{i.value.background=t.value.primaryColor};return(d,f)=>{const h=jf("Light");return Ve(),fn(Le,null,[ue("div",S7,[ue("div",E7,[_e(Ke(id),{class:"xh-home-scroll"},{default:Cn(()=>[ue("div",A7,[_e(Ke(g4),{round:"",size:80,src:"https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",class:"xh-avatar"})]),ue("div",T7,[f[9]||(f[9]=ue("div",{class:"xh-name"},"小海",-1)),ue("div",D7,[_e(h,null,{default:Cn(()=>[...f[0]||(f[0]=[yn("前端开发者",-1)])]),_:1}),f[1]||(f[1]=yn("-向阳花木易为春",-1))]),f[10]||(f[10]=ue("div",{class:"xh-tags"},[ue("span",{class:"xh-tag"},"Vue"),ue("span",{class:"xh-tag"},"React"),ue("span",{class:"xh-tag"},"jest"),ue("span",{class:"xh-tag"},"Typescript"),ue("span",{class:"xh-tag"},"Javascript"),ue("span",{class:"xh-tag"},"CSS"),ue("span",{class:"xh-tag"},"HTML"),ue("span",{class:"xh-tag"},"Node"),ue("span",{class:"xh-tag"},"Git"),ue("span",{class:"xh-tag"},"Golang")],-1)),ue("div",z7,[f[5]||(f[5]=yn(" hi,",-1)),_e(h,null,{default:Cn(()=>[...f[2]||(f[2]=[yn("我是小海,也可以称我为褚喧",-1)])]),_:1}),f[6]||(f[6]=yn(",欢迎来到我的博客. 我是一个喜欢学习、喜欢生活、喜欢分享的",-1)),_e(h,null,{default:Cn(()=>[...f[3]||(f[3]=[yn("Web前端开发者",-1)])]),_:1}),f[7]||(f[7]=yn(",现在的企划只有写前端,学习音乐做一首自己的歌,想要参加开源项目,正在犀牛鸟活动中摸索,希望在未来能够参与更多开源活动,也专注 在一些线下的公益活动,",-1)),_e(h,null,{default:Cn(()=>[...f[4]||(f[4]=[yn("为世界更美好贡献自己的一份力量",-1)])]),_:1}),f[8]||(f[8]=yn(",和很多人一样,相信技术改变世界 ",-1))]),f[11]||(f[11]=ue("div",{class:"xh-bio"}," 除此以外,我也喜欢二次元,阅读(虽然这段时间的阅读也越来越少),散步,喜欢骑行的风,写文章等,爱好很少,但是可以让我一个人非常充实的活着 ",-1)),_e(Ke(Z4),null,{default:Cn(()=>[_e(Dr,{name:"flip",mode:"out-in"},{default:Cn(()=>[(Ve(),Tr(Ke(i5),{key:r.value,text:r.value,patterns:o.value,"highlight-style":i.value,onClick:l,onMouseenter:a,onMouseleave:c},null,8,["text","patterns","highlight-style"]))]),_:1})]),_:1}),ue("div",F7,[_e(Ke(id),{style:{height:"100%"}},{default:Cn(()=>[ue("div",I7,[(Ve(!0),fn(Le,null,Cg(s.value,p=>(Ve(),fn("div",P7,[_e(C7,{title:p.title,content:p.excerpt},null,8,["title","content"])]))),256))])]),_:1})])])]),_:1})])]),ue("div",R7,[_e(k7)])],64)}}}),O7=ur($7,[["__scopeId","data-v-9e7aadfc"]]),B7=[{path:"/",name:"home",component:O7},{path:"/markdown",name:"markdownIndex",component:()=>fr(()=>import("./index-CM_IJLH9.js"),__vite__mapDeps([0,1,2,3]))},{path:"/markdown/:id",name:"markdown",component:()=>fr(()=>import("./markdown-CPfe-qFW.js"),__vite__mapDeps([4,2,5]))},{path:"/projects",name:"projects",component:()=>fr(()=>import("./index-BmxxDyuq.js"),__vite__mapDeps([6,7,8,9]))},{path:"/links",name:"links",component:()=>fr(()=>import("./index-DBRxsej0.js"),__vite__mapDeps([10,7,8,11]))},{path:"/about",name:"about",component:()=>fr(()=>import("./index-6TDLIcbf.js"),__vite__mapDeps([12,2,13]))},{path:"/time",name:"time",component:()=>fr(()=>import("./index-Ci5SWTSu.js"),__vite__mapDeps([14,15]))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>fr(()=>import("./index-CtSAni40.js"),__vite__mapDeps([16,2,1,17]))}],M7=BC({history:mC(),routes:B7}),N7={__name:"Light",props:{color:{type:String,default:"#9c3c3c"},fontSize:{type:String,default:"0.9375rem"},fontWeight:{type:String,default:"700"},underline:{type:Boolean,default:!1},underlineColor:{type:String,default:""}},setup(e){const n=e,t=R(()=>({"--xh-color":n.color,"--xh-font-size":n.fontSize,"--xh-font-weight":n.fontWeight,"--xh-underline-color":n.underlineColor||n.color}));return(r,o)=>(Ve(),fn("span",{class:fu(["xh-light",{underline:e.underline}]),style:ii(t.value)},[yu(r.$slots,"default",{},void 0,!0)],6))}},L7=ur(N7,[["__scopeId","data-v-388b24da"]]),j7=["innerHTML"],H7={key:1},U7=le({__name:"Markdown",props:{theme:{default:"github-dark-dimmed"},src:{default:""},content:{default:""},height:{default:"auto"},width:{default:"auto"}},setup(e){const n=Nu(),t=e,r=te(""),o=te(""),i=te(null);return Ln(async()=>{const u=new Nn({html:!0,linkify:!0,typographer:!0,highlight:(s,l)=>s});Rt(async()=>{if(console.log("props.src",t.src),t.src)try{r.value=n.data.filter(s=>s.title===t.src)[0].content,o.value=u.render(r.value),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}else if(t.content)try{o.value=u.render(t.content),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}})}),(u,s)=>(Ve(),fn("div",{class:"fei-markdown",style:ii(`${t.width?`width:${t.width}px;`:""}${t.height?`height:${t.height}px;`:""}`)},[o.value?(Ve(),fn("div",{key:0,class:"fei-markdown-body",innerHTML:o.value},null,8,j7)):(Ve(),fn("div",H7,[...s[0]||(s[0]=[ue("p",null,"正在渲染...",-1)])]))],4))}}),K7=ur(U7,[["__scopeId","data-v-5d77a101"]]),V7={},W7={class:"xh-home"},q7={class:"xh-info-container"};function G7(e,n){return Ve(),fn("div",W7,[ue("div",q7,[yu(e.$slots,"default",{},void 0,!0)])])}const Z7=ur(V7,[["render",G7],["__scopeId","data-v-cadd73dc"]]),co=Um(b7);co.use(b8());co.component("Light",L7);co.component("Fei-Markdown",K7);co.component("Fei-Container",Z7);co.use(M7);co.mount("#app");export{i9 as $,zh as A,In as B,kn as C,Pe as D,Gn as E,Ie as F,r9 as G,Rh as H,ft as I,n9 as J,X as K,ln as L,U6 as M,Yl as N,zn as O,Xl as P,si as Q,ec as R,Tu as S,Dr as T,o9 as U,Yi as V,mr as W,Hb as X,Ql as Y,Fe as Z,kc as _,H0 as a,fi as a$,Fv as a0,Le as a1,Lh as a2,Rt as a3,e9 as a4,t9 as a5,Wo as a6,Rr as a7,un as a8,Ye as a9,Cn as aA,Ke as aB,yn as aC,id as aD,Y7 as aE,jf as aF,fu as aG,yu as aH,Tr as aI,X7 as aJ,ii as aK,Rm as aL,cg as aM,Kb as aN,er as aO,g4 as aP,_4 as aQ,Vh as aR,dh as aS,Uh as aT,h6 as aU,ev as aV,j0 as aW,z4 as aX,s4 as aY,a4 as aZ,Ot as a_,Ge as aa,Bl as ab,$i as ac,Io as ad,Ov as ae,Du as af,N0 as ag,L0 as ah,U0 as ai,no as aj,mu as ak,pm as al,ic as am,P0 as an,Zi as ao,R0 as ap,MC as aq,Ve as ar,fn as as,ue as at,S1 as au,Xg as av,Cg as aw,ur as ax,Nu as ay,_e as az,Of as b,O0 as b0,_r as b1,f6 as b2,wc as b3,Ks as b4,R as c,le as d,Bf as e,nc as f,so as g,A as h,be as i,mb as j,wo as k,Q7 as l,Pr as m,yc as n,Ln as o,je as p,qn as q,te as r,l6 as s,Ue as t,Fn as u,V as v,cn as w,L as x,U as y,Ws as z};
