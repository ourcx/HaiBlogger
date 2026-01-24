const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CQxKWzG6.js","assets/Result-BAMm-pCn.js","assets/Button-Ck-G_nA6.js","assets/index-D0axb8ze.css","assets/markdown-BhdzpUNH.js","assets/markdown-Dxa7j5BG.css","assets/index-vyUWaGXd.js","assets/Links-DNxAr3l5.js","assets/Links-B6YxczeT.css","assets/index-0oWmLAIE.css","assets/index-CUorKq26.js","assets/index-BYIflSUt.css","assets/index-DWOgy39q.js","assets/index-CtkkO6vF.css","assets/index-DVdvHep_.js","assets/index-Dp3mmBND.css","assets/index-DJ60bTmr.js","assets/index-B0csvvbc.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function al(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Re={},Hr=[],st=()=>{},Md=()=>!1,nu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cl=e=>e.startsWith("onUpdate:"),Ye=Object.assign,dl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},i1=Object.prototype.hasOwnProperty,Te=(e,n)=>i1.call(e,n),ge=Array.isArray,Ur=e=>tu(e)==="[object Map]",Nd=e=>tu(e)==="[object Set]",ve=e=>typeof e=="function",Ge=e=>typeof e=="string",Ft=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",Ld=e=>(Oe(e)||ve(e))&&ve(e.then)&&ve(e.catch),jd=Object.prototype.toString,tu=e=>jd.call(e),u1=e=>tu(e).slice(8,-1),Hd=e=>tu(e)==="[object Object]",ru=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xo=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ou=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},s1=/-\w/g,Hn=ou(e=>e.replace(s1,n=>n.slice(1).toUpperCase())),l1=/\B([A-Z])/g,Tr=ou(e=>e.replace(l1,"-$1").toLowerCase()),iu=ou(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ru=ou(e=>e?`on${iu(e)}`:""),Yt=(e,n)=>!Object.is(e,n),Ou=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Ud=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},a1=e=>{const n=parseFloat(e);return isNaN(n)?e:n},c1=e=>{const n=Ge(e)?Number(e):NaN;return isNaN(n)?e:n};let la;const uu=()=>la||(la=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jo(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=Ge(r)?p1(r):Jo(r);if(o)for(const i in o)n[i]=o[i]}return n}else if(Ge(e)||Oe(e))return e}const d1=/;(?![^(]*\))/g,f1=/:([^]+)/,h1=/\/\*[^]*?\*\//g;function p1(e){const n={};return e.replace(h1,"").split(d1).forEach(t=>{if(t){const r=t.split(f1);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function su(e){let n="";if(Ge(e))n=e;else if(ge(e))for(let t=0;t<e.length;t++){const r=su(e[t]);r&&(n+=r+" ")}else if(Oe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const g1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b1=al(g1);function Kd(e){return!!e||e===""}const Vd=e=>!!(e&&e.__v_isRef===!0),m1=e=>Ge(e)?e:e==null?"":ge(e)||Oe(e)&&(e.toString===jd||!ve(e.toString))?Vd(e)?m1(e.value):JSON.stringify(e,Wd,2):String(e),Wd=(e,n)=>Vd(n)?Wd(e,n.value):Ur(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o],i)=>(t[$u(r,i)+" =>"]=o,t),{})}:Nd(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>$u(t))}:Ft(n)?$u(n):Oe(n)&&!ge(n)&&!Hd(n)?String(n):n,$u=(e,n="")=>{var t;return Ft(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class qd{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!n&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=hn;try{return hn=this,n()}finally{hn=t}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Gd(e){return new qd(e)}function Zd(){return hn}function v1(e,n=!1){hn&&hn.cleanups.push(e)}let $e;const Bu=new WeakSet;class Xd{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bu.has(this)&&(Bu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,aa(this),Qd(this);const n=$e,t=Gn;$e=this,Gn=!0;try{return this.fn()}finally{ef(this),$e=n,Gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)pl(n);this.deps=this.depsTail=void 0,aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let Yd=0,yo,Co;function Jd(e,n=!1){if(e.flags|=8,n){e.next=Co,Co=e;return}e.next=yo,yo=e}function fl(){Yd++}function hl(){if(--Yd>0)return;if(Co){let n=Co;for(Co=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;yo;){let n=yo;for(yo=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Qd(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ef(e){let n,t=e.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),pl(r),x1(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=n,e.depsTail=t}function _s(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(nf(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function nf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Io)||(e.globalVersion=Io,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!_s(e))))return;e.flags|=2;const n=e.dep,t=$e,r=Gn;$e=e,Gn=!0;try{Qd(e);const o=e.fn(e._value);(n.version===0||Yt(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{$e=t,Gn=r,ef(e),e.flags&=-3}}function pl(e,n=!1){const{dep:t,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)pl(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function x1(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Gn=!0;const tf=[];function St(){tf.push(Gn),Gn=!1}function Et(){const e=tf.pop();Gn=e===void 0?!0:e}function aa(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=$e;$e=void 0;try{n()}finally{$e=t}}}let Io=0;class y1{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!$e||!Gn||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new y1($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,rf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=r)}return t}trigger(n){this.version++,Io++,this.notify(n)}notify(n){fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hl()}}}function rf(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)rf(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Ii=new WeakMap,br=Symbol(""),ws=Symbol(""),Po=Symbol("");function pn(e,n,t){if(Gn&&$e){let r=Ii.get(e);r||Ii.set(e,r=new Map);let o=r.get(t);o||(r.set(t,o=new gl),o.map=r,o.key=t),o.track()}}function _t(e,n,t,r,o,i){const u=Ii.get(e);if(!u){Io++;return}const s=l=>{l&&l.trigger()};if(fl(),n==="clear")u.forEach(s);else{const l=ge(e),a=l&&ru(t);if(l&&t==="length"){const c=Number(r);u.forEach((d,f)=>{(f==="length"||f===Po||!Ft(f)&&f>=c)&&s(d)})}else switch((t!==void 0||u.has(void 0))&&s(u.get(t)),a&&s(u.get(Po)),n){case"add":l?a&&s(u.get("length")):(s(u.get(br)),Ur(e)&&s(u.get(ws)));break;case"delete":l||(s(u.get(br)),Ur(e)&&s(u.get(ws)));break;case"set":Ur(e)&&s(u.get(br));break}}hl()}function C1(e,n){const t=Ii.get(e);return t&&t.get(n)}function Rr(e){const n=Se(e);return n===e?n:(pn(n,"iterate",Po),On(e)?n:n.map(Zn))}function lu(e){return pn(e=Se(e),"iterate",Po),e}function Ht(e,n){return At(e)?Zr(kt(e)?Zn(n):n):Zn(n)}const _1={__proto__:null,[Symbol.iterator](){return Mu(this,Symbol.iterator,e=>Ht(this,e))},concat(...e){return Rr(this).concat(...e.map(n=>ge(n)?Rr(n):n))},entries(){return Mu(this,"entries",e=>(e[1]=Ht(this,e[1]),e))},every(e,n){return bt(this,"every",e,n,void 0,arguments)},filter(e,n){return bt(this,"filter",e,n,t=>t.map(r=>Ht(this,r)),arguments)},find(e,n){return bt(this,"find",e,n,t=>Ht(this,t),arguments)},findIndex(e,n){return bt(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return bt(this,"findLast",e,n,t=>Ht(this,t),arguments)},findLastIndex(e,n){return bt(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return bt(this,"forEach",e,n,void 0,arguments)},includes(...e){return Nu(this,"includes",e)},indexOf(...e){return Nu(this,"indexOf",e)},join(e){return Rr(this).join(e)},lastIndexOf(...e){return Nu(this,"lastIndexOf",e)},map(e,n){return bt(this,"map",e,n,void 0,arguments)},pop(){return lo(this,"pop")},push(...e){return lo(this,"push",e)},reduce(e,...n){return ca(this,"reduce",e,n)},reduceRight(e,...n){return ca(this,"reduceRight",e,n)},shift(){return lo(this,"shift")},some(e,n){return bt(this,"some",e,n,void 0,arguments)},splice(...e){return lo(this,"splice",e)},toReversed(){return Rr(this).toReversed()},toSorted(e){return Rr(this).toSorted(e)},toSpliced(...e){return Rr(this).toSpliced(...e)},unshift(...e){return lo(this,"unshift",e)},values(){return Mu(this,"values",e=>Ht(this,e))}};function Mu(e,n,t){const r=lu(e),o=r[n]();return r!==e&&!On(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=t(i.value)),i}),o}const w1=Array.prototype;function bt(e,n,t,r,o,i){const u=lu(e),s=u!==e&&!On(e),l=u[n];if(l!==w1[n]){const d=l.apply(e,i);return s?Zn(d):d}let a=t;u!==e&&(s?a=function(d,f){return t.call(this,Ht(e,d),f,e)}:t.length>2&&(a=function(d,f){return t.call(this,d,f,e)}));const c=l.call(u,a,r);return s&&o?o(c):c}function ca(e,n,t,r){const o=lu(e);let i=t;return o!==e&&(On(e)?t.length>3&&(i=function(u,s,l){return t.call(this,u,s,l,e)}):i=function(u,s,l){return t.call(this,u,Ht(e,s),l,e)}),o[n](i,...r)}function Nu(e,n,t){const r=Se(e);pn(r,"iterate",Po);const o=r[n](...t);return(o===-1||o===!1)&&au(t[0])?(t[0]=Se(t[0]),r[n](...t)):o}function lo(e,n,t=[]){St(),fl();const r=Se(e)[n].apply(e,t);return hl(),Et(),r}const k1=al("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft));function S1(e){Ft(e)||(e=String(e));const n=Se(this);return pn(n,"has",e),n.hasOwnProperty(e)}class uf{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?O1:cf:i?af:lf).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const u=ge(n);if(!o){let l;if(u&&(l=_1[t]))return l;if(t==="hasOwnProperty")return S1}const s=Reflect.get(n,t,qe(n)?n:r);if((Ft(t)?of.has(t):k1(t))||(o||pn(n,"get",t),i))return s;if(qe(s)){const l=u&&ru(t)?s:s.value;return o&&Oe(l)?_r(l):l}return Oe(s)?o?_r(s):ro(s):s}}class sf extends uf{constructor(n=!1){super(!1,n)}set(n,t,r,o){let i=n[t];const u=ge(n)&&ru(t);if(!this._isShallow){const a=At(i);if(!On(r)&&!At(r)&&(i=Se(i),r=Se(r)),!u&&qe(i)&&!qe(r))return a||(i.value=r),!0}const s=u?Number(t)<n.length:Te(n,t),l=Reflect.set(n,t,r,qe(n)?n:o);return n===Se(o)&&(s?Yt(r,i)&&_t(n,"set",t,r):_t(n,"add",t,r)),l}deleteProperty(n,t){const r=Te(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&r&&_t(n,"delete",t,void 0),o}has(n,t){const r=Reflect.has(n,t);return(!Ft(t)||!of.has(t))&&pn(n,"has",t),r}ownKeys(n){return pn(n,"iterate",ge(n)?"length":br),Reflect.ownKeys(n)}}class E1 extends uf{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const A1=new sf,T1=new E1,D1=new sf(!0);const ks=e=>e,ci=e=>Reflect.getPrototypeOf(e);function z1(e,n,t){return function(...r){const o=this.__v_raw,i=Se(o),u=Ur(i),s=e==="entries"||e===Symbol.iterator&&u,l=e==="keys"&&u,a=o[e](...r),c=t?ks:n?Zr:Zn;return!n&&pn(i,"iterate",l?ws:br),Ye(Object.create(a),{next(){const{value:d,done:f}=a.next();return f?{value:d,done:f}:{value:s?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function di(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function F1(e,n){const t={get(o){const i=this.__v_raw,u=Se(i),s=Se(o);e||(Yt(o,s)&&pn(u,"get",o),pn(u,"get",s));const{has:l}=ci(u),a=n?ks:e?Zr:Zn;if(l.call(u,o))return a(i.get(o));if(l.call(u,s))return a(i.get(s));i!==u&&i.get(o)},get size(){const o=this.__v_raw;return!e&&pn(Se(o),"iterate",br),o.size},has(o){const i=this.__v_raw,u=Se(i),s=Se(o);return e||(Yt(o,s)&&pn(u,"has",o),pn(u,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const u=this,s=u.__v_raw,l=Se(s),a=n?ks:e?Zr:Zn;return!e&&pn(l,"iterate",br),s.forEach((c,d)=>o.call(i,a(c),a(d),u))}};return Ye(t,e?{add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear")}:{add(o){!n&&!On(o)&&!At(o)&&(o=Se(o));const i=Se(this);return ci(i).has.call(i,o)||(i.add(o),_t(i,"add",o,o)),this},set(o,i){!n&&!On(i)&&!At(i)&&(i=Se(i));const u=Se(this),{has:s,get:l}=ci(u);let a=s.call(u,o);a||(o=Se(o),a=s.call(u,o));const c=l.call(u,o);return u.set(o,i),a?Yt(i,c)&&_t(u,"set",o,i):_t(u,"add",o,i),this},delete(o){const i=Se(this),{has:u,get:s}=ci(i);let l=u.call(i,o);l||(o=Se(o),l=u.call(i,o)),s&&s.call(i,o);const a=i.delete(o);return l&&_t(i,"delete",o,void 0),a},clear(){const o=Se(this),i=o.size!==0,u=o.clear();return i&&_t(o,"clear",void 0,void 0),u}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=z1(o,e,n)}),t}function bl(e,n){const t=F1(e,n);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(Te(t,o)&&o in r?t:r,o,i)}const I1={get:bl(!1,!1)},P1={get:bl(!1,!0)},R1={get:bl(!0,!1)};const lf=new WeakMap,af=new WeakMap,cf=new WeakMap,O1=new WeakMap;function $1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B1(e){return e.__v_skip||!Object.isExtensible(e)?0:$1(u1(e))}function ro(e){return At(e)?e:ml(e,!1,A1,I1,lf)}function df(e){return ml(e,!1,D1,P1,af)}function _r(e){return ml(e,!0,T1,R1,cf)}function ml(e,n,t,r,o){if(!Oe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=B1(e);if(i===0)return e;const u=o.get(e);if(u)return u;const s=new Proxy(e,i===2?r:t);return o.set(e,s),s}function kt(e){return At(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function On(e){return!!(e&&e.__v_isShallow)}function au(e){return e?!!e.__v_raw:!1}function Se(e){const n=e&&e.__v_raw;return n?Se(n):e}function Ro(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&Ud(e,"__v_skip",!0),e}const Zn=e=>Oe(e)?ro(e):e,Zr=e=>Oe(e)?_r(e):e;function qe(e){return e?e.__v_isRef===!0:!1}function re(e){return hf(e,!1)}function ff(e){return hf(e,!0)}function hf(e,n){return qe(e)?e:new M1(e,n)}class M1{constructor(n,t){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Se(n),this._value=t?n:Zn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||On(n)||At(n);n=r?n:Se(n),Yt(n,t)&&(this._rawValue=n,this._value=r?n:Zn(n),this.dep.trigger())}}function He(e){return qe(e)?e.value:e}const N1={get:(e,n,t)=>n==="__v_raw"?e:He(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return qe(o)&&!qe(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function pf(e){return kt(e)?e:new Proxy(e,N1)}function L1(e){const n=ge(e)?new Array(e.length):{};for(const t in e)n[t]=gf(e,t);return n}class j1{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Se(n);let o=!0,i=n;if(!ge(n)||!ru(String(t)))do o=!au(i)||On(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let n=this._object[this._key];return this._shallow&&(n=He(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&qe(this._raw[this._key])){const t=this._object[this._key];if(qe(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return C1(this._raw,this._key)}}class H1{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function je(e,n,t){return qe(e)?e:ve(e)?new H1(e):Oe(e)&&arguments.length>1?gf(e,n,t):re(e)}function gf(e,n,t){return new j1(e,n,t)}class U1{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Jd(this,!0),!0}get value(){const n=this.dep.track();return nf(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function K1(e,n,t=!1){let r,o;return ve(e)?r=e:(r=e.get,o=e.set),new U1(r,o,t)}const fi={},Pi=new WeakMap;let cr;function V1(e,n=!1,t=cr){if(t){let r=Pi.get(t);r||Pi.set(t,r=[]),r.push(e)}}function W1(e,n,t=Re){const{immediate:r,deep:o,once:i,scheduler:u,augmentJob:s,call:l}=t,a=y=>o?y:On(y)||o===!1||o===0?wt(y,1):wt(y);let c,d,f,h,p=!1,g=!1;if(qe(e)?(d=()=>e.value,p=On(e)):kt(e)?(d=()=>a(e),p=!0):ge(e)?(g=!0,p=e.some(y=>kt(y)||On(y)),d=()=>e.map(y=>{if(qe(y))return y.value;if(kt(y))return a(y);if(ve(y))return l?l(y,2):y()})):ve(e)?n?d=l?()=>l(e,2):e:d=()=>{if(f){St();try{f()}finally{Et()}}const y=cr;cr=c;try{return l?l(e,3,[h]):e(h)}finally{cr=y}}:d=st,n&&o){const y=d,k=o===!0?1/0:o;d=()=>wt(y(),k)}const m=Zd(),b=()=>{c.stop(),m&&m.active&&dl(m.effects,c)};if(i&&n){const y=n;n=(...k)=>{y(...k),b()}}let v=g?new Array(e.length).fill(fi):fi;const _=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(n){const k=c.run();if(o||p||(g?k.some((D,S)=>Yt(D,v[S])):Yt(k,v))){f&&f();const D=cr;cr=c;try{const S=[k,v===fi?void 0:g&&v[0]===fi?[]:v,h];v=k,l?l(n,3,S):n(...S)}finally{cr=D}}}else c.run()};return s&&s(_),c=new Xd(d),c.scheduler=u?()=>u(_,!1):_,h=y=>V1(y,!1,c),f=c.onStop=()=>{const y=Pi.get(c);if(y){if(l)l(y,4);else for(const k of y)k();Pi.delete(c)}},n?r?_(!0):v=c.run():u?u(_.bind(null,!0),!0):c.run(),b.pause=c.pause.bind(c),b.resume=c.resume.bind(c),b.stop=b,b}function wt(e,n=1/0,t){if(n<=0||!Oe(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,qe(e))wt(e.value,n,t);else if(ge(e))for(let r=0;r<e.length;r++)wt(e[r],n,t);else if(Nd(e)||Ur(e))e.forEach(r=>{wt(r,n,t)});else if(Hd(e)){for(const r in e)wt(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&wt(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(e,n,t,r){try{return r?e(...r):e()}catch(o){cu(o,n,t)}}function Xn(e,n,t,r){if(ve(e)){const o=Qo(e,n,t,r);return o&&Ld(o)&&o.catch(i=>{cu(i,n,t)}),o}if(ge(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Xn(e[i],n,t,r));return o}}function cu(e,n,t,r=!0){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:u}=n&&n.appContext.config||Re;if(n){let s=n.parent;const l=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,a)===!1)return}s=s.parent}if(i){St(),Qo(i,null,10,[e,l,a]),Et();return}}q1(e,t,o,r,u)}function q1(e,n,t,r=!0,o=!1){if(o)throw e;console.error(e)}const _n=[];let rt=-1;const Kr=[];let Ut=null,Lr=0;const bf=Promise.resolve();let Ri=null;function ei(e){const n=Ri||bf;return e?n.then(this?e.bind(this):e):n}function G1(e){let n=rt+1,t=_n.length;for(;n<t;){const r=n+t>>>1,o=_n[r],i=Oo(o);i<e||i===e&&o.flags&2?n=r+1:t=r}return n}function vl(e){if(!(e.flags&1)){const n=Oo(e),t=_n[_n.length-1];!t||!(e.flags&2)&&n>=Oo(t)?_n.push(e):_n.splice(G1(n),0,e),e.flags|=1,mf()}}function mf(){Ri||(Ri=bf.then(xf))}function Z1(e){ge(e)?Kr.push(...e):Ut&&e.id===-1?Ut.splice(Lr+1,0,e):e.flags&1||(Kr.push(e),e.flags|=1),mf()}function da(e,n,t=rt+1){for(;t<_n.length;t++){const r=_n[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_n.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vf(e){if(Kr.length){const n=[...new Set(Kr)].sort((t,r)=>Oo(t)-Oo(r));if(Kr.length=0,Ut){Ut.push(...n);return}for(Ut=n,Lr=0;Lr<Ut.length;Lr++){const t=Ut[Lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ut=null,Lr=0}}const Oo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xf(e){try{for(rt=0;rt<_n.length;rt++){const n=_n[rt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Qo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;rt<_n.length;rt++){const n=_n[rt];n&&(n.flags&=-2)}rt=-1,_n.length=0,vf(),Ri=null,(_n.length||Kr.length)&&xf()}}let an=null,yf=null;function Oi(e){const n=an;return an=e,yf=e&&e.type.__scopeId||null,n}function Cn(e,n=an,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&Mi(-1);const i=Oi(n);let u;try{u=e(...o)}finally{Oi(i),r._d&&Mi(1)}return u};return r._n=!0,r._c=!0,r._d=!0,r}function du(e,n){if(an===null)return e;const t=bu(an),r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,u,s,l=Re]=n[o];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&wt(u),r.push({dir:i,instance:t,value:u,oldValue:void 0,arg:s,modifiers:l}))}return e}function ir(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let u=0;u<o.length;u++){const s=o[u];i&&(s.oldValue=i[u].value);let l=s.dir[r];l&&(St(),Xn(l,t,8,[e.el,s,e,n]),Et())}}function Ue(e,n){if(bn){let t=bn.provides;const r=bn.parent&&bn.parent.provides;r===t&&(t=bn.provides=Object.create(r)),t[e]=n}}function me(e,n,t=!1){const r=zr();if(r||mr){let o=mr?mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&ve(n)?n.call(r&&r.proxy):n}}function X1(){return!!(zr()||mr)}const Y1=Symbol.for("v-scx"),J1=()=>me(Y1);function Tt(e,n){return xl(e,null,n)}function sn(e,n,t){return xl(e,n,t)}function xl(e,n,t=Re){const{immediate:r,deep:o,flush:i,once:u}=t,s=Ye({},t),l=n&&r||!n&&i!=="post";let a;if(Mo){if(i==="sync"){const h=J1();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=st,h.resume=st,h.pause=st,h}}const c=bn;s.call=(h,p,g)=>Xn(h,c,p,g);let d=!1;i==="post"?s.scheduler=h=>{vn(h,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(h,p)=>{p?h():vl(h)}),s.augmentJob=h=>{n&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=W1(e,n,s);return Mo&&(a?a.push(f):l&&f()),f}function Q1(e,n,t){const r=this.proxy,o=Ge(e)?e.includes(".")?Cf(r,e):()=>r[e]:e.bind(r,r);let i;ve(n)?i=n:(i=n.handler,t=n);const u=ri(this),s=xl(o,i.bind(r),t);return u(),s}function Cf(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const _f=Symbol("_vte"),wf=e=>e.__isTeleport,_o=e=>e&&(e.disabled||e.disabled===""),fa=e=>e&&(e.defer||e.defer===""),ha=e=>typeof SVGElement<"u"&&e instanceof SVGElement,pa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ss=(e,n)=>{const t=e&&e.to;return Ge(t)?n?n(t):null:t},kf={name:"Teleport",__isTeleport:!0,process(e,n,t,r,o,i,u,s,l,a){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:g,createComment:m}}=a,b=_o(n.props);let{shapeFlag:v,children:_,dynamicChildren:y}=n;if(e==null){const k=n.el=g(""),D=n.anchor=g("");h(k,t,r),h(D,t,r);const S=(w,I)=>{v&16&&c(_,w,I,o,i,u,s,l)},A=()=>{const w=n.target=Ss(n.props,p),I=Sf(w,n,g,h);w&&(u!=="svg"&&ha(w)?u="svg":u!=="mathml"&&pa(w)&&(u="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(w),b||(S(w,I),Ei(n,!1)))};b&&(S(t,D),Ei(n,!0)),fa(n.props)?(n.el.__isMounted=!1,vn(()=>{A(),delete n.el.__isMounted},i)):A()}else{if(fa(n.props)&&e.el.__isMounted===!1){vn(()=>{kf.process(e,n,t,r,o,i,u,s,l,a)},i);return}n.el=e.el,n.targetStart=e.targetStart;const k=n.anchor=e.anchor,D=n.target=e.target,S=n.targetAnchor=e.targetAnchor,A=_o(e.props),w=A?t:D,I=A?k:S;if(u==="svg"||ha(D)?u="svg":(u==="mathml"||pa(D))&&(u="mathml"),y?(f(e.dynamicChildren,y,w,o,i,u,s),Sl(e,n,!0)):l||d(e,n,w,I,o,i,u,s,!1),b)A?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):hi(n,t,k,a,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const B=n.target=Ss(n.props,p);B&&hi(n,B,null,a,0)}else A&&hi(n,D,S,a,1);Ei(n,b)}},remove(e,n,t,{um:r,o:{remove:o}},i){const{shapeFlag:u,children:s,anchor:l,targetStart:a,targetAnchor:c,target:d,props:f}=e;if(d&&(o(a),o(c)),i&&o(l),u&16){const h=i||!_o(f);for(let p=0;p<s.length;p++){const g=s[p];r(g,n,t,h,!!g.dynamicChildren)}}},move:hi,hydrate:eg};function hi(e,n,t,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,n,t);const{el:u,anchor:s,shapeFlag:l,children:a,props:c}=e,d=i===2;if(d&&r(u,n,t),(!d||_o(c))&&l&16)for(let f=0;f<a.length;f++)o(a[f],n,t,2);d&&r(s,n,t)}function eg(e,n,t,r,o,i,{o:{nextSibling:u,parentNode:s,querySelector:l,insert:a,createText:c}},d){function f(g,m,b,v){m.anchor=d(u(g),m,s(g),t,r,o,i),m.targetStart=b,m.targetAnchor=v}const h=n.target=Ss(n.props,l),p=_o(n.props);if(h){const g=h._lpa||h.firstChild;if(n.shapeFlag&16)if(p)f(e,n,g,g&&u(g));else{n.anchor=u(e);let m=g;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")n.targetStart=m;else if(m.data==="teleport anchor"){n.targetAnchor=m,h._lpa=n.targetAnchor&&u(n.targetAnchor);break}}m=u(m)}n.targetAnchor||Sf(h,n,c,a),d(g&&u(g),n,h,t,r,o,i)}Ei(n,p)}else p&&n.shapeFlag&16&&f(e,n,e,u(e));return n.anchor&&u(n.anchor)}const ng=kf;function Ei(e,n){const t=e.ctx;if(t&&t.ut){let r,o;for(n?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Sf(e,n,t,r){const o=n.targetStart=t(""),i=n.targetAnchor=t("");return o[_f]=i,e&&(r(o,e),r(i,e)),i}const Ct=Symbol("_leaveCb"),pi=Symbol("_enterCb");function Ef(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mn(()=>{e.isMounted=!0}),Kn(()=>{e.isUnmounting=!0}),e}const Ln=[Function,Array],Af={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},Tf=e=>{const n=e.subTree;return n.component?Tf(n.component):n},tg={name:"BaseTransition",props:Af,setup(e,{slots:n}){const t=zr(),r=Ef();return()=>{const o=n.default&&yl(n.default(),!0);if(!o||!o.length)return;const i=Df(o),u=Se(e),{mode:s}=u;if(r.isLeaving)return Lu(i);const l=ga(i);if(!l)return Lu(i);let a=$o(l,u,r,t,d=>a=d);l.type!==nn&&wr(l,a);let c=t.subTree&&ga(t.subTree);if(c&&c.type!==nn&&!dr(c,l)&&Tf(t).type!==nn){let d=$o(c,u,r,t);if(wr(c,d),s==="out-in"&&l.type!==nn)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Lu(i);s==="in-out"&&l.type!==nn?d.delayLeave=(f,h,p)=>{const g=zf(r,c);g[String(c.key)]=c,f[Ct]=()=>{h(),f[Ct]=void 0,delete a.delayedLeave,c=void 0},a.delayedLeave=()=>{p(),delete a.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Df(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==nn){n=t;break}}return n}const rg=tg;function zf(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function $o(e,n,t,r,o){const{appear:i,mode:u,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:b,onAfterAppear:v,onAppearCancelled:_}=n,y=String(e.key),k=zf(t,e),D=(w,I)=>{w&&Xn(w,r,9,I)},S=(w,I)=>{const B=I[1];D(w,I),ge(w)?w.every(T=>T.length<=1)&&B():w.length<=1&&B()},A={mode:u,persisted:s,beforeEnter(w){let I=l;if(!t.isMounted)if(i)I=m||l;else return;w[Ct]&&w[Ct](!0);const B=k[y];B&&dr(e,B)&&B.el[Ct]&&B.el[Ct](),D(I,[w])},enter(w){let I=a,B=c,T=d;if(!t.isMounted)if(i)I=b||a,B=v||c,T=_||d;else return;let q=!1;const G=w[pi]=O=>{q||(q=!0,O?D(T,[w]):D(B,[w]),A.delayedLeave&&A.delayedLeave(),w[pi]=void 0)};I?S(I,[w,G]):G()},leave(w,I){const B=String(e.key);if(w[pi]&&w[pi](!0),t.isUnmounting)return I();D(f,[w]);let T=!1;const q=w[Ct]=G=>{T||(T=!0,I(),G?D(g,[w]):D(p,[w]),w[Ct]=void 0,k[B]===e&&delete k[B])};k[B]=e,h?S(h,[w,q]):q()},clone(w){const I=$o(w,n,t,r,o);return o&&o(I),I}};return A}function Lu(e){if(fu(e))return e=Dt(e),e.children=null,e}function ga(e){if(!fu(e))return wf(e.type)&&e.children?Df(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ve(t.default))return t.default()}}function wr(e,n){e.shapeFlag&6&&e.component?(e.transition=n,wr(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function yl(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let u=e[i];const s=t==null?u.key:String(t)+String(u.key!=null?u.key:i);u.type===Be?(u.patchFlag&128&&o++,r=r.concat(yl(u.children,n,s))):(n||u.type!==nn)&&r.push(s!=null?Dt(u,{key:s}):u)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function le(e,n){return ve(e)?Ye({name:e.name},n,{setup:e}):e}function Ff(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const $i=new WeakMap;function wo(e,n,t,r,o=!1){if(ge(e)){e.forEach((p,g)=>wo(p,n&&(ge(n)?n[g]:n),t,r,o));return}if(Vr(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&wo(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?bu(r.component):r.el,u=o?null:i,{i:s,r:l}=e,a=n&&n.r,c=s.refs===Re?s.refs={}:s.refs,d=s.setupState,f=Se(d),h=d===Re?Md:p=>Te(f,p);if(a!=null&&a!==l){if(ba(n),Ge(a))c[a]=null,h(a)&&(d[a]=null);else if(qe(a)){a.value=null;const p=n;p.k&&(c[p.k]=null)}}if(ve(l))Qo(l,s,12,[u,c]);else{const p=Ge(l),g=qe(l);if(p||g){const m=()=>{if(e.f){const b=p?h(l)?d[l]:c[l]:l.value;if(o)ge(b)&&dl(b,i);else if(ge(b))b.includes(i)||b.push(i);else if(p)c[l]=[i],h(l)&&(d[l]=c[l]);else{const v=[i];l.value=v,e.k&&(c[e.k]=v)}}else p?(c[l]=u,h(l)&&(d[l]=u)):g&&(l.value=u,e.k&&(c[e.k]=u))};if(u){const b=()=>{m(),$i.delete(e)};b.id=-1,$i.set(e,b),vn(b,t)}else ba(e),m()}}}function ba(e){const n=$i.get(e);n&&(n.flags|=8,$i.delete(e))}uu().requestIdleCallback;uu().cancelIdleCallback;const Vr=e=>!!e.type.__asyncLoader,fu=e=>e.type.__isKeepAlive;function If(e,n){Rf(e,"a",n)}function Pf(e,n){Rf(e,"da",n)}function Rf(e,n,t=bn){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(hu(n,r,t),t){let o=t.parent;for(;o&&o.parent;)fu(o.parent.vnode)&&og(r,n,t,o),o=o.parent}}function og(e,n,t,r){const o=hu(n,e,r,!0);$f(()=>{dl(r[n],o)},t)}function hu(e,n,t=bn,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...u)=>{St();const s=ri(t),l=Xn(n,t,e,u);return s(),Et(),l});return r?o.unshift(i):o.push(i),i}}const It=e=>(n,t=bn)=>{(!Mo||e==="sp")&&hu(e,(...r)=>n(...r),t)},ni=It("bm"),Mn=It("m"),ig=It("bu"),Of=It("u"),Kn=It("bum"),$f=It("um"),ug=It("sp"),sg=It("rtg"),lg=It("rtc");function ag(e,n=bn){hu("ec",e,n)}const Cl="components",cg="directives";function Bf(e,n){return _l(Cl,e,!0,n)||e}const Mf=Symbol.for("v-ndc");function dg(e){return Ge(e)?_l(Cl,e,!1)||e:e||Mf}function M7(e){return _l(cg,e)}function _l(e,n,t=!0,r=!1){const o=an||bn;if(o){const i=o.type;if(e===Cl){const s=Zg(i,!1);if(s&&(s===n||s===Hn(n)||s===iu(Hn(n))))return i}const u=ma(o[e]||i[e],n)||ma(o.appContext[e],n);return!u&&r?i:u}}function ma(e,n){return e&&(e[n]||e[Hn(n)]||e[iu(Hn(n))])}function fg(e,n,t,r){let o;const i=t,u=ge(e);if(u||Ge(e)){const s=u&&kt(e);let l=!1,a=!1;s&&(l=!On(e),a=At(e),e=lu(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=n(l?a?Zr(Zn(e[c])):Zn(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i)}else if(Oe(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>n(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const c=s[l];o[l]=n(e[c],c,l,i)}}else o=[];return o}function pu(e,n,t={},r,o){if(an.ce||an.parent&&Vr(an.parent)&&an.parent.ce){const a=Object.keys(t).length>0;return n!=="default"&&(t.name=n),Ke(),kr(Be,null,[Ce("slot",t,r&&r())],a?-2:64)}let i=e[n];i&&i._c&&(i._d=!1),Ke();const u=i&&Nf(i(t)),s=t.key||u&&u.key,l=kr(Be,{key:(s&&!Ft(s)?s:`_${n}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Nf(e){return e.some(n=>Xr(n)?!(n.type===nn||n.type===Be&&!Nf(n.children)):!0)?e:null}const Es=e=>e?r0(e)?bu(e):Es(e.parent):null,ko=Ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Es(e.parent),$root:e=>Es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jf(e),$forceUpdate:e=>e.f||(e.f=()=>{vl(e.update)}),$nextTick:e=>e.n||(e.n=ei.bind(e.proxy)),$watch:e=>Q1.bind(e)}),ju=(e,n)=>e!==Re&&!e.__isScriptSetup&&Te(e,n),hg={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:u,type:s,appContext:l}=e;if(n[0]!=="$"){const f=u[n];if(f!==void 0)switch(f){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(ju(r,n))return u[n]=1,r[n];if(o!==Re&&Te(o,n))return u[n]=2,o[n];if(Te(i,n))return u[n]=3,i[n];if(t!==Re&&Te(t,n))return u[n]=4,t[n];As&&(u[n]=0)}}const a=ko[n];let c,d;if(a)return n==="$attrs"&&pn(e.attrs,"get",""),a(e);if((c=s.__cssModules)&&(c=c[n]))return c;if(t!==Re&&Te(t,n))return u[n]=4,t[n];if(d=l.config.globalProperties,Te(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return ju(o,n)?(o[n]=t,!0):r!==Re&&Te(r,n)?(r[n]=t,!0):Te(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,props:i,type:u}},s){let l;return!!(t[s]||e!==Re&&s[0]!=="$"&&Te(e,s)||ju(n,s)||Te(i,s)||Te(r,s)||Te(ko,s)||Te(o.config.globalProperties,s)||(l=u.__cssModules)&&l[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Te(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function va(e){return ge(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let As=!0;function pg(e){const n=jf(e),t=e.proxy,r=e.ctx;As=!1,n.beforeCreate&&xa(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:u,watch:s,provide:l,inject:a,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:g,deactivated:m,beforeDestroy:b,beforeUnmount:v,destroyed:_,unmounted:y,render:k,renderTracked:D,renderTriggered:S,errorCaptured:A,serverPrefetch:w,expose:I,inheritAttrs:B,components:T,directives:q,filters:G}=n;if(a&&gg(a,r,null),u)for(const j in u){const Q=u[j];ve(Q)&&(r[j]=Q.bind(t))}if(o){const j=o.call(t,t);Oe(j)&&(e.data=ro(j))}if(As=!0,i)for(const j in i){const Q=i[j],xe=ve(Q)?Q.bind(t,t):ve(Q.get)?Q.get.bind(t,t):st,ke=!ve(Q)&&ve(Q.set)?Q.set.bind(t):st,ee=R({get:xe,set:ke});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>ee.value,set:ne=>ee.value=ne})}if(s)for(const j in s)Lf(s[j],r,t,j);if(l){const j=ve(l)?l.call(t):l;Reflect.ownKeys(j).forEach(Q=>{Ue(Q,j[Q])})}c&&xa(c,e,"c");function Y(j,Q){ge(Q)?Q.forEach(xe=>j(xe.bind(t))):Q&&j(Q.bind(t))}if(Y(ni,d),Y(Mn,f),Y(ig,h),Y(Of,p),Y(If,g),Y(Pf,m),Y(ag,A),Y(lg,D),Y(sg,S),Y(Kn,v),Y($f,y),Y(ug,w),ge(I))if(I.length){const j=e.exposed||(e.exposed={});I.forEach(Q=>{Object.defineProperty(j,Q,{get:()=>t[Q],set:xe=>t[Q]=xe,enumerable:!0})})}else e.exposed||(e.exposed={});k&&e.render===st&&(e.render=k),B!=null&&(e.inheritAttrs=B),T&&(e.components=T),q&&(e.directives=q),w&&Ff(e)}function gg(e,n,t=st){ge(e)&&(e=Ts(e));for(const r in e){const o=e[r];let i;Oe(o)?"default"in o?i=me(o.from||r,o.default,!0):i=me(o.from||r):i=me(o),qe(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:u=>i.value=u}):n[r]=i}}function xa(e,n,t){Xn(ge(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Lf(e,n,t,r){let o=r.includes(".")?Cf(t,r):()=>t[r];if(Ge(e)){const i=n[e];ve(i)&&sn(o,i)}else if(ve(e))sn(o,e.bind(t));else if(Oe(e))if(ge(e))e.forEach(i=>Lf(i,n,t,r));else{const i=ve(e.handler)?e.handler.bind(t):n[e.handler];ve(i)&&sn(o,i,e)}}function jf(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:u}}=e.appContext,s=i.get(n);let l;return s?l=s:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(a=>Bi(l,a,u,!0)),Bi(l,n,u)),Oe(n)&&i.set(n,l),l}function Bi(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&Bi(e,i,t,!0),o&&o.forEach(u=>Bi(e,u,t,!0));for(const u in n)if(!(r&&u==="expose")){const s=bg[u]||t&&t[u];e[u]=s?s(e[u],n[u]):n[u]}return e}const bg={data:ya,props:Ca,emits:Ca,methods:bo,computed:bo,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:bo,directives:bo,watch:vg,provide:ya,inject:mg};function ya(e,n){return n?e?function(){return Ye(ve(e)?e.call(this,this):e,ve(n)?n.call(this,this):n)}:n:e}function mg(e,n){return bo(Ts(e),Ts(n))}function Ts(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mn(e,n){return e?[...new Set([].concat(e,n))]:n}function bo(e,n){return e?Ye(Object.create(null),e,n):n}function Ca(e,n){return e?ge(e)&&ge(n)?[...new Set([...e,...n])]:Ye(Object.create(null),va(e),va(n??{})):n}function vg(e,n){if(!e)return n;if(!n)return e;const t=Ye(Object.create(null),e);for(const r in n)t[r]=mn(e[r],n[r]);return t}function Hf(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xg=0;function yg(e,n){return function(r,o=null){ve(r)||(r=Ye({},r)),o!=null&&!Oe(o)&&(o=null);const i=Hf(),u=new WeakSet,s=[];let l=!1;const a=i.app={_uid:xg++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Yg,get config(){return i.config},set config(c){},use(c,...d){return u.has(c)||(c&&ve(c.install)?(u.add(c),c.install(a,...d)):ve(c)&&(u.add(c),c(a,...d))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,d){return d?(i.components[c]=d,a):i.components[c]},directive(c,d){return d?(i.directives[c]=d,a):i.directives[c]},mount(c,d,f){if(!l){const h=a._ceVNode||Ce(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,a._container=c,c.__vue_app__=a,bu(h.component)}},onUnmount(c){s.push(c)},unmount(){l&&(Xn(s,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return i.provides[c]=d,a},runWithContext(c){const d=mr;mr=a;try{return c()}finally{mr=d}}};return a}}let mr=null;const Cg=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Hn(n)}Modifiers`]||e[`${Tr(n)}Modifiers`];function _g(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Re;let o=t;const i=n.startsWith("update:"),u=i&&Cg(r,n.slice(7));u&&(u.trim&&(o=t.map(c=>Ge(c)?c.trim():c)),u.number&&(o=t.map(a1)));let s,l=r[s=Ru(n)]||r[s=Ru(Hn(n))];!l&&i&&(l=r[s=Ru(Tr(n))]),l&&Xn(l,e,6,o);const a=r[s+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Xn(a,e,6,o)}}const wg=new WeakMap;function Uf(e,n,t=!1){const r=t?wg:n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let u={},s=!1;if(!ve(e)){const l=a=>{const c=Uf(a,n,!0);c&&(s=!0,Ye(u,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Oe(e)&&r.set(e,null),null):(ge(i)?i.forEach(l=>u[l]=null):Ye(u,i),Oe(e)&&r.set(e,u),u)}function gu(e,n){return!e||!nu(n)?!1:(n=n.slice(2).replace(/Once$/,""),Te(e,n[0].toLowerCase()+n.slice(1))||Te(e,Tr(n))||Te(e,n))}function _a(e){const{type:n,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:u,attrs:s,emit:l,render:a,renderCache:c,props:d,data:f,setupState:h,ctx:p,inheritAttrs:g}=e,m=Oi(e);let b,v;try{if(t.shapeFlag&4){const y=o||r,k=y;b=ot(a.call(k,y,c,d,h,f,p)),v=s}else{const y=n;b=ot(y.length>1?y(d,{attrs:s,slots:u,emit:l}):y(d,null)),v=n.props?s:kg(s)}}catch(y){So.length=0,cu(y,e,1),b=Ce(nn)}let _=b;if(v&&g!==!1){const y=Object.keys(v),{shapeFlag:k}=_;y.length&&k&7&&(i&&y.some(cl)&&(v=Sg(v,i)),_=Dt(_,v,!1,!0))}return t.dirs&&(_=Dt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&wr(_,t.transition),b=_,Oi(m),b}const kg=e=>{let n;for(const t in e)(t==="class"||t==="style"||nu(t))&&((n||(n={}))[t]=e[t]);return n},Sg=(e,n)=>{const t={};for(const r in e)(!cl(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Eg(e,n,t){const{props:r,children:o,component:i}=e,{props:u,children:s,patchFlag:l}=n,a=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?wa(r,u,a):!!u;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(u[f]!==r[f]&&!gu(a,f))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===u?!1:r?u?wa(r,u,a):!0:!!u;return!1}function wa(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(n[i]!==e[i]&&!gu(t,i))return!0}return!1}function Ag({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const Kf={},Vf=()=>Object.create(Kf),Wf=e=>Object.getPrototypeOf(e)===Kf;function Tg(e,n,t,r=!1){const o={},i=Vf();e.propsDefaults=Object.create(null),qf(e,n,o,i);for(const u in e.propsOptions[0])u in o||(o[u]=void 0);t?e.props=r?o:df(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Dg(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:u}}=e,s=Se(o),[l]=e.propsOptions;let a=!1;if((r||u>0)&&!(u&16)){if(u&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(gu(e.emitsOptions,f))continue;const h=n[f];if(l)if(Te(i,f))h!==i[f]&&(i[f]=h,a=!0);else{const p=Hn(f);o[p]=Ds(l,s,p,h,e,!1)}else h!==i[f]&&(i[f]=h,a=!0)}}}else{qf(e,n,o,i)&&(a=!0);let c;for(const d in s)(!n||!Te(n,d)&&((c=Tr(d))===d||!Te(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(o[d]=Ds(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!n||!Te(n,d))&&(delete i[d],a=!0)}a&&_t(e.attrs,"set","")}function qf(e,n,t,r){const[o,i]=e.propsOptions;let u=!1,s;if(n)for(let l in n){if(xo(l))continue;const a=n[l];let c;o&&Te(o,c=Hn(l))?!i||!i.includes(c)?t[c]=a:(s||(s={}))[c]=a:gu(e.emitsOptions,l)||(!(l in r)||a!==r[l])&&(r[l]=a,u=!0)}if(i){const l=Se(t),a=s||Re;for(let c=0;c<i.length;c++){const d=i[c];t[d]=Ds(o,l,d,a[d],e,!Te(a,d))}}return u}function Ds(e,n,t,r,o,i){const u=e[t];if(u!=null){const s=Te(u,"default");if(s&&r===void 0){const l=u.default;if(u.type!==Function&&!u.skipFactory&&ve(l)){const{propsDefaults:a}=o;if(t in a)r=a[t];else{const c=ri(o);r=a[t]=l.call(null,n),c()}}else r=l;o.ce&&o.ce._setProp(t,r)}u[0]&&(i&&!s?r=!1:u[1]&&(r===""||r===Tr(t))&&(r=!0))}return r}const zg=new WeakMap;function Gf(e,n,t=!1){const r=t?zg:n.propsCache,o=r.get(e);if(o)return o;const i=e.props,u={},s=[];let l=!1;if(!ve(e)){const c=d=>{l=!0;const[f,h]=Gf(d,n,!0);Ye(u,f),h&&s.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Oe(e)&&r.set(e,Hr),Hr;if(ge(i))for(let c=0;c<i.length;c++){const d=Hn(i[c]);ka(d)&&(u[d]=Re)}else if(i)for(const c in i){const d=Hn(c);if(ka(d)){const f=i[c],h=u[d]=ge(f)||ve(f)?{type:f}:Ye({},f),p=h.type;let g=!1,m=!0;if(ge(p))for(let b=0;b<p.length;++b){const v=p[b],_=ve(v)&&v.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(m=!1)}else g=ve(p)&&p.name==="Boolean";h[0]=g,h[1]=m,(g||Te(h,"default"))&&s.push(d)}}const a=[u,s];return Oe(e)&&r.set(e,a),a}function ka(e){return e[0]!=="$"&&!xo(e)}const wl=e=>e==="_"||e==="_ctx"||e==="$stable",kl=e=>ge(e)?e.map(ot):[ot(e)],Fg=(e,n,t)=>{if(n._n)return n;const r=Cn((...o)=>kl(n(...o)),t);return r._c=!1,r},Zf=(e,n,t)=>{const r=e._ctx;for(const o in e){if(wl(o))continue;const i=e[o];if(ve(i))n[o]=Fg(o,i,r);else if(i!=null){const u=kl(i);n[o]=()=>u}}},Xf=(e,n)=>{const t=kl(n);e.slots.default=()=>t},Yf=(e,n,t)=>{for(const r in n)(t||!wl(r))&&(e[r]=n[r])},Ig=(e,n,t)=>{const r=e.slots=Vf();if(e.vnode.shapeFlag&32){const o=n._;o?(Yf(r,n,t),t&&Ud(r,"_",o,!0)):Zf(n,r)}else n&&Xf(e,n)},Pg=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,u=Re;if(r.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:Yf(o,n,t):(i=!n.$stable,Zf(n,o)),u=n}else n&&(Xf(e,n),u={default:1});if(i)for(const s in o)!wl(s)&&u[s]==null&&delete o[s]},vn=Mg;function Rg(e){return Og(e)}function Og(e,n){const t=uu();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:u,createText:s,createComment:l,setText:a,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=st,insertStaticContent:p}=e,g=(x,C,z,$=null,H=null,M=null,te=void 0,J=null,Z=!!C.dynamicChildren)=>{if(x===C)return;x&&!dr(x,C)&&($=P(x),ne(x,H,M,!0),x=null),C.patchFlag===-2&&(Z=!1,C.dynamicChildren=null);const{type:K,ref:de,shapeFlag:ie}=C;switch(K){case ti:m(x,C,z,$);break;case nn:b(x,C,z,$);break;case Uu:x==null&&v(C,z,$,te);break;case Be:T(x,C,z,$,H,M,te,J,Z);break;default:ie&1?k(x,C,z,$,H,M,te,J,Z):ie&6?q(x,C,z,$,H,M,te,J,Z):(ie&64||ie&128)&&K.process(x,C,z,$,H,M,te,J,Z,ae)}de!=null&&H?wo(de,x&&x.ref,M,C||x,!C):de==null&&x&&x.ref!=null&&wo(x.ref,null,M,x,!0)},m=(x,C,z,$)=>{if(x==null)r(C.el=s(C.children),z,$);else{const H=C.el=x.el;C.children!==x.children&&a(H,C.children)}},b=(x,C,z,$)=>{x==null?r(C.el=l(C.children||""),z,$):C.el=x.el},v=(x,C,z,$)=>{[x.el,x.anchor]=p(x.children,C,z,$,x.el,x.anchor)},_=({el:x,anchor:C},z,$)=>{let H;for(;x&&x!==C;)H=f(x),r(x,z,$),x=H;r(C,z,$)},y=({el:x,anchor:C})=>{let z;for(;x&&x!==C;)z=f(x),o(x),x=z;o(C)},k=(x,C,z,$,H,M,te,J,Z)=>{if(C.type==="svg"?te="svg":C.type==="math"&&(te="mathml"),x==null)D(C,z,$,H,M,te,J,Z);else{const K=x.el&&x.el._isVueCE?x.el:null;try{K&&K._beginPatch(),w(x,C,H,M,te,J,Z)}finally{K&&K._endPatch()}}},D=(x,C,z,$,H,M,te,J)=>{let Z,K;const{props:de,shapeFlag:ie,transition:ce,dirs:fe}=x;if(Z=x.el=u(x.type,M,de&&de.is,de),ie&8?c(Z,x.children):ie&16&&A(x.children,Z,null,$,H,Hu(x,M),te,J),fe&&ir(x,null,$,"created"),S(Z,x,x.scopeId,te,$),de){for(const Ie in de)Ie!=="value"&&!xo(Ie)&&i(Z,Ie,null,de[Ie],M,$);"value"in de&&i(Z,"value",null,de.value,M),(K=de.onVnodeBeforeMount)&&Qn(K,$,x)}fe&&ir(x,null,$,"beforeMount");const we=$g(H,ce);we&&ce.beforeEnter(Z),r(Z,C,z),((K=de&&de.onVnodeMounted)||we||fe)&&vn(()=>{K&&Qn(K,$,x),we&&ce.enter(Z),fe&&ir(x,null,$,"mounted")},H)},S=(x,C,z,$,H)=>{if(z&&h(x,z),$)for(let M=0;M<$.length;M++)h(x,$[M]);if(H){let M=H.subTree;if(C===M||e0(M.type)&&(M.ssContent===C||M.ssFallback===C)){const te=H.vnode;S(x,te,te.scopeId,te.slotScopeIds,H.parent)}}},A=(x,C,z,$,H,M,te,J,Z=0)=>{for(let K=Z;K<x.length;K++){const de=x[K]=J?Kt(x[K]):ot(x[K]);g(null,de,C,z,$,H,M,te,J)}},w=(x,C,z,$,H,M,te)=>{const J=C.el=x.el;let{patchFlag:Z,dynamicChildren:K,dirs:de}=C;Z|=x.patchFlag&16;const ie=x.props||Re,ce=C.props||Re;let fe;if(z&&ur(z,!1),(fe=ce.onVnodeBeforeUpdate)&&Qn(fe,z,C,x),de&&ir(C,x,z,"beforeUpdate"),z&&ur(z,!0),(ie.innerHTML&&ce.innerHTML==null||ie.textContent&&ce.textContent==null)&&c(J,""),K?I(x.dynamicChildren,K,J,z,$,Hu(C,H),M):te||Q(x,C,J,null,z,$,Hu(C,H),M,!1),Z>0){if(Z&16)B(J,ie,ce,z,H);else if(Z&2&&ie.class!==ce.class&&i(J,"class",null,ce.class,H),Z&4&&i(J,"style",ie.style,ce.style,H),Z&8){const we=C.dynamicProps;for(let Ie=0;Ie<we.length;Ie++){const Ee=we[Ie],ln=ie[Ee],dn=ce[Ee];(dn!==ln||Ee==="value")&&i(J,Ee,ln,dn,H,z)}}Z&1&&x.children!==C.children&&c(J,C.children)}else!te&&K==null&&B(J,ie,ce,z,H);((fe=ce.onVnodeUpdated)||de)&&vn(()=>{fe&&Qn(fe,z,C,x),de&&ir(C,x,z,"updated")},$)},I=(x,C,z,$,H,M,te)=>{for(let J=0;J<C.length;J++){const Z=x[J],K=C[J],de=Z.el&&(Z.type===Be||!dr(Z,K)||Z.shapeFlag&198)?d(Z.el):z;g(Z,K,de,null,$,H,M,te,!0)}},B=(x,C,z,$,H)=>{if(C!==z){if(C!==Re)for(const M in C)!xo(M)&&!(M in z)&&i(x,M,C[M],null,H,$);for(const M in z){if(xo(M))continue;const te=z[M],J=C[M];te!==J&&M!=="value"&&i(x,M,J,te,H,$)}"value"in z&&i(x,"value",C.value,z.value,H)}},T=(x,C,z,$,H,M,te,J,Z)=>{const K=C.el=x?x.el:s(""),de=C.anchor=x?x.anchor:s("");let{patchFlag:ie,dynamicChildren:ce,slotScopeIds:fe}=C;fe&&(J=J?J.concat(fe):fe),x==null?(r(K,z,$),r(de,z,$),A(C.children||[],z,de,H,M,te,J,Z)):ie>0&&ie&64&&ce&&x.dynamicChildren&&x.dynamicChildren.length===ce.length?(I(x.dynamicChildren,ce,z,H,M,te,J),(C.key!=null||H&&C===H.subTree)&&Sl(x,C,!0)):Q(x,C,z,de,H,M,te,J,Z)},q=(x,C,z,$,H,M,te,J,Z)=>{C.slotScopeIds=J,x==null?C.shapeFlag&512?H.ctx.activate(C,z,$,te,Z):G(C,z,$,H,M,te,Z):O(x,C,Z)},G=(x,C,z,$,H,M,te)=>{const J=x.component=Kg(x,$,H);if(fu(x)&&(J.ctx.renderer=ae),Vg(J,!1,te),J.asyncDep){if(H&&H.registerDep(J,Y,te),!x.el){const Z=J.subTree=Ce(nn);b(null,Z,C,z),x.placeholder=Z.el}}else Y(J,x,C,z,H,M,te)},O=(x,C,z)=>{const $=C.component=x.component;if(Eg(x,C,z))if($.asyncDep&&!$.asyncResolved){j($,C,z);return}else $.next=C,$.update();else C.el=x.el,$.vnode=C},Y=(x,C,z,$,H,M,te)=>{const J=()=>{if(x.isMounted){let{next:ie,bu:ce,u:fe,parent:we,vnode:Ie}=x;{const Sn=Jf(x);if(Sn){ie&&(ie.el=Ie.el,j(x,ie,te)),Sn.asyncDep.then(()=>{x.isUnmounted||J()});return}}let Ee=ie,ln;ur(x,!1),ie?(ie.el=Ie.el,j(x,ie,te)):ie=Ie,ce&&Ou(ce),(ln=ie.props&&ie.props.onVnodeBeforeUpdate)&&Qn(ln,we,ie,Ie),ur(x,!0);const dn=_a(x),kn=x.subTree;x.subTree=dn,g(kn,dn,d(kn.el),P(kn),x,H,M),ie.el=dn.el,Ee===null&&Ag(x,dn.el),fe&&vn(fe,H),(ln=ie.props&&ie.props.onVnodeUpdated)&&vn(()=>Qn(ln,we,ie,Ie),H)}else{let ie;const{el:ce,props:fe}=C,{bm:we,m:Ie,parent:Ee,root:ln,type:dn}=x,kn=Vr(C);ur(x,!1),we&&Ou(we),!kn&&(ie=fe&&fe.onVnodeBeforeMount)&&Qn(ie,Ee,C),ur(x,!0);{ln.ce&&ln.ce._def.shadowRoot!==!1&&ln.ce._injectChildStyle(dn);const Sn=x.subTree=_a(x);g(null,Sn,z,$,x,H,M),C.el=Sn.el}if(Ie&&vn(Ie,H),!kn&&(ie=fe&&fe.onVnodeMounted)){const Sn=C;vn(()=>Qn(ie,Ee,Sn),H)}(C.shapeFlag&256||Ee&&Vr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&x.a&&vn(x.a,H),x.isMounted=!0,C=z=$=null}};x.scope.on();const Z=x.effect=new Xd(J);x.scope.off();const K=x.update=Z.run.bind(Z),de=x.job=Z.runIfDirty.bind(Z);de.i=x,de.id=x.uid,Z.scheduler=()=>vl(de),ur(x,!0),K()},j=(x,C,z)=>{C.component=x;const $=x.vnode.props;x.vnode=C,x.next=null,Dg(x,C.props,$,z),Pg(x,C.children,z),St(),da(x),Et()},Q=(x,C,z,$,H,M,te,J,Z=!1)=>{const K=x&&x.children,de=x?x.shapeFlag:0,ie=C.children,{patchFlag:ce,shapeFlag:fe}=C;if(ce>0){if(ce&128){ke(K,ie,z,$,H,M,te,J,Z);return}else if(ce&256){xe(K,ie,z,$,H,M,te,J,Z);return}}fe&8?(de&16&&Pe(K,H,M),ie!==K&&c(z,ie)):de&16?fe&16?ke(K,ie,z,$,H,M,te,J,Z):Pe(K,H,M,!0):(de&8&&c(z,""),fe&16&&A(ie,z,$,H,M,te,J,Z))},xe=(x,C,z,$,H,M,te,J,Z)=>{x=x||Hr,C=C||Hr;const K=x.length,de=C.length,ie=Math.min(K,de);let ce;for(ce=0;ce<ie;ce++){const fe=C[ce]=Z?Kt(C[ce]):ot(C[ce]);g(x[ce],fe,z,null,H,M,te,J,Z)}K>de?Pe(x,H,M,!0,!1,ie):A(C,z,$,H,M,te,J,Z,ie)},ke=(x,C,z,$,H,M,te,J,Z)=>{let K=0;const de=C.length;let ie=x.length-1,ce=de-1;for(;K<=ie&&K<=ce;){const fe=x[K],we=C[K]=Z?Kt(C[K]):ot(C[K]);if(dr(fe,we))g(fe,we,z,null,H,M,te,J,Z);else break;K++}for(;K<=ie&&K<=ce;){const fe=x[ie],we=C[ce]=Z?Kt(C[ce]):ot(C[ce]);if(dr(fe,we))g(fe,we,z,null,H,M,te,J,Z);else break;ie--,ce--}if(K>ie){if(K<=ce){const fe=ce+1,we=fe<de?C[fe].el:$;for(;K<=ce;)g(null,C[K]=Z?Kt(C[K]):ot(C[K]),z,we,H,M,te,J,Z),K++}}else if(K>ce)for(;K<=ie;)ne(x[K],H,M,!0),K++;else{const fe=K,we=K,Ie=new Map;for(K=we;K<=ce;K++){const En=C[K]=Z?Kt(C[K]):ot(C[K]);En.key!=null&&Ie.set(En.key,K)}let Ee,ln=0;const dn=ce-we+1;let kn=!1,Sn=0;const Ot=new Array(dn);for(K=0;K<dn;K++)Ot[K]=0;for(K=fe;K<=ie;K++){const En=x[K];if(ln>=dn){ne(En,H,M,!0);continue}let W;if(En.key!=null)W=Ie.get(En.key);else for(Ee=we;Ee<=ce;Ee++)if(Ot[Ee-we]===0&&dr(En,C[Ee])){W=Ee;break}W===void 0?ne(En,H,M,!0):(Ot[W-we]=K+1,W>=Sn?Sn=W:kn=!0,g(En,C[W],z,null,H,M,te,J,Z),ln++)}const gt=kn?Bg(Ot):Hr;for(Ee=gt.length-1,K=dn-1;K>=0;K--){const En=we+K,W=C[En],se=C[En+1],be=En+1<de?se.el||Qf(se):$;Ot[K]===0?g(null,W,z,be,H,M,te,J,Z):kn&&(Ee<0||K!==gt[Ee]?ee(W,z,be,2):Ee--)}}},ee=(x,C,z,$,H=null)=>{const{el:M,type:te,transition:J,children:Z,shapeFlag:K}=x;if(K&6){ee(x.component.subTree,C,z,$);return}if(K&128){x.suspense.move(C,z,$);return}if(K&64){te.move(x,C,z,ae);return}if(te===Be){r(M,C,z);for(let ie=0;ie<Z.length;ie++)ee(Z[ie],C,z,$);r(x.anchor,C,z);return}if(te===Uu){_(x,C,z);return}if($!==2&&K&1&&J)if($===0)J.beforeEnter(M),r(M,C,z),vn(()=>J.enter(M),H);else{const{leave:ie,delayLeave:ce,afterLeave:fe}=J,we=()=>{x.ctx.isUnmounted?o(M):r(M,C,z)},Ie=()=>{M._isLeaving&&M[Ct](!0),ie(M,()=>{we(),fe&&fe()})};ce?ce(M,we,Ie):Ie()}else r(M,C,z)},ne=(x,C,z,$=!1,H=!1)=>{const{type:M,props:te,ref:J,children:Z,dynamicChildren:K,shapeFlag:de,patchFlag:ie,dirs:ce,cacheIndex:fe}=x;if(ie===-2&&(H=!1),J!=null&&(St(),wo(J,null,z,x,!0),Et()),fe!=null&&(C.renderCache[fe]=void 0),de&256){C.ctx.deactivate(x);return}const we=de&1&&ce,Ie=!Vr(x);let Ee;if(Ie&&(Ee=te&&te.onVnodeBeforeUnmount)&&Qn(Ee,C,x),de&6)_e(x.component,z,$);else{if(de&128){x.suspense.unmount(z,$);return}we&&ir(x,null,C,"beforeUnmount"),de&64?x.type.remove(x,C,z,ae,$):K&&!K.hasOnce&&(M!==Be||ie>0&&ie&64)?Pe(K,C,z,!1,!0):(M===Be&&ie&384||!H&&de&16)&&Pe(Z,C,z),$&&N(x)}(Ie&&(Ee=te&&te.onVnodeUnmounted)||we)&&vn(()=>{Ee&&Qn(Ee,C,x),we&&ir(x,null,C,"unmounted")},z)},N=x=>{const{type:C,el:z,anchor:$,transition:H}=x;if(C===Be){pe(z,$);return}if(C===Uu){y(x);return}const M=()=>{o(z),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(x.shapeFlag&1&&H&&!H.persisted){const{leave:te,delayLeave:J}=H,Z=()=>te(z,M);J?J(x.el,M,Z):Z()}else M()},pe=(x,C)=>{let z;for(;x!==C;)z=f(x),o(x),x=z;o(C)},_e=(x,C,z)=>{const{bum:$,scope:H,job:M,subTree:te,um:J,m:Z,a:K}=x;Sa(Z),Sa(K),$&&Ou($),H.stop(),M&&(M.flags|=8,ne(te,x,C,z)),J&&vn(J,C),vn(()=>{x.isUnmounted=!0},C)},Pe=(x,C,z,$=!1,H=!1,M=0)=>{for(let te=M;te<x.length;te++)ne(x[te],C,z,$,H)},P=x=>{if(x.shapeFlag&6)return P(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const C=f(x.anchor||x.el),z=C&&C[_f];return z?f(z):C};let oe=!1;const F=(x,C,z)=>{let $;x==null?C._vnode&&(ne(C._vnode,null,null,!0),$=C._vnode.component):g(C._vnode||null,x,C,null,null,null,z),C._vnode=x,oe||(oe=!0,da($),vf(),oe=!1)},ae={p:g,um:ne,m:ee,r:N,mt:G,mc:A,pc:Q,pbc:I,n:P,o:e};return{render:F,hydrate:void 0,createApp:yg(F)}}function Hu({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function ur({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function $g(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Sl(e,n,t=!1){const r=e.children,o=n.children;if(ge(r)&&ge(o))for(let i=0;i<r.length;i++){const u=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Kt(o[i]),s.el=u.el),!t&&s.patchFlag!==-2&&Sl(u,s)),s.type===ti&&(s.patchFlag!==-1?s.el=u.el:s.__elIndex=i+(e.type===Be?1:0)),s.type===nn&&!s.el&&(s.el=u.el)}}function Bg(e){const n=e.slice(),t=[0];let r,o,i,u,s;const l=e.length;for(r=0;r<l;r++){const a=e[r];if(a!==0){if(o=t[t.length-1],e[o]<a){n[r]=o,t.push(r);continue}for(i=0,u=t.length-1;i<u;)s=i+u>>1,e[t[s]]<a?i=s+1:u=s;a<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,u=t[i-1];i-- >0;)t[i]=u,u=n[u];return t}function Jf(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Jf(n)}function Sa(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Qf(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Qf(n.subTree):null}const e0=e=>e.__isSuspense;function Mg(e,n){n&&n.pendingBranch?ge(e)?n.effects.push(...e):n.effects.push(e):Z1(e)}const Be=Symbol.for("v-fgt"),ti=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),Uu=Symbol.for("v-stc"),So=[];let Pn=null;function Ke(e=!1){So.push(Pn=e?null:[])}function Ng(){So.pop(),Pn=So[So.length-1]||null}let Bo=1;function Mi(e,n=!1){Bo+=e,e<0&&Pn&&n&&(Pn.hasOnce=!0)}function n0(e){return e.dynamicChildren=Bo>0?Pn||Hr:null,Ng(),Bo>0&&Pn&&Pn.push(e),e}function cn(e,n,t,r,o,i){return n0(ue(e,n,t,r,o,i,!0))}function kr(e,n,t,r,o){return n0(Ce(e,n,t,r,o,!0))}function Xr(e){return e?e.__v_isVNode===!0:!1}function dr(e,n){return e.type===n.type&&e.key===n.key}const t0=({key:e})=>e??null,Ai=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ge(e)||qe(e)||ve(e)?{i:an,r:e,k:n,f:!!t}:e:null);function ue(e,n=null,t=null,r=0,o=null,i=e===Be?0:1,u=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&t0(n),ref:n&&Ai(n),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:an};return s?(El(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=Ge(t)?8:16),Bo>0&&!u&&Pn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pn.push(l),l}const Ce=Lg;function Lg(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===Mf)&&(e=nn),Xr(e)){const s=Dt(e,n,!0);return t&&El(s,t),Bo>0&&!i&&Pn&&(s.shapeFlag&6?Pn[Pn.indexOf(e)]=s:Pn.push(s)),s.patchFlag=-2,s}if(Xg(e)&&(e=e.__vccOpts),n){n=jg(n);let{class:s,style:l}=n;s&&!Ge(s)&&(n.class=su(s)),Oe(l)&&(au(l)&&!ge(l)&&(l=Ye({},l)),n.style=Jo(l))}const u=Ge(e)?1:e0(e)?128:wf(e)?64:Oe(e)?4:ve(e)?2:0;return ue(e,n,t,r,o,u,i,!0)}function jg(e){return e?au(e)||Wf(e)?Ye({},e):e:null}function Dt(e,n,t=!1,r=!1){const{props:o,ref:i,patchFlag:u,children:s,transition:l}=e,a=n?Dr(o||{},n):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&t0(a),ref:n&&n.ref?t&&i?ge(i)?i.concat(Ai(n)):[i,Ai(n)]:Ai(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&wr(c,l.clone(c)),c}function yn(e=" ",n=0){return Ce(ti,null,e,n)}function N7(e="",n=!1){return n?(Ke(),kr(nn,null,e)):Ce(nn,null,e)}function ot(e){return e==null||typeof e=="boolean"?Ce(nn):ge(e)?Ce(Be,null,e.slice()):Xr(e)?Kt(e):Ce(ti,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function El(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ge(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),El(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!Wf(n)?n._ctx=an:o===3&&an&&(an.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ve(n)?(n={default:n,_ctx:an},t=32):(n=String(n),r&64?(t=16,n=[yn(n)]):t=8);e.children=n,e.shapeFlag|=t}function Dr(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=su([n.class,r.class]));else if(o==="style")n.style=Jo([n.style,r.style]);else if(nu(o)){const i=n[o],u=r[o];u&&i!==u&&!(ge(i)&&i.includes(u))&&(n[o]=i?[].concat(i,u):u)}else o!==""&&(n[o]=r[o])}return n}function Qn(e,n,t,r=null){Xn(e,n,7,[t,r])}const Hg=Hf();let Ug=0;function Kg(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Hg,i={uid:Ug++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(r,o),emitsOptions:Uf(r,o),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=_g.bind(null,i),e.ce&&e.ce(i),i}let bn=null;const zr=()=>bn||an;let Ni,zs;{const e=uu(),n=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),i=>{o.length>1?o.forEach(u=>u(i)):o[0](i)}};Ni=n("__VUE_INSTANCE_SETTERS__",t=>bn=t),zs=n("__VUE_SSR_SETTERS__",t=>Mo=t)}const ri=e=>{const n=bn;return Ni(e),e.scope.on(),()=>{e.scope.off(),Ni(n)}},Ea=()=>{bn&&bn.scope.off(),Ni(null)};function r0(e){return e.vnode.shapeFlag&4}let Mo=!1;function Vg(e,n=!1,t=!1){n&&zs(n);const{props:r,children:o}=e.vnode,i=r0(e);Tg(e,r,i,n),Ig(e,o,t||n);const u=i?Wg(e,n):void 0;return n&&zs(!1),u}function Wg(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hg);const{setup:r}=t;if(r){St();const o=e.setupContext=r.length>1?Gg(e):null,i=ri(e),u=Qo(r,e,0,[e.props,o]),s=Ld(u);if(Et(),i(),(s||e.sp)&&!Vr(e)&&Ff(e),s){if(u.then(Ea,Ea),n)return u.then(l=>{Aa(e,l)}).catch(l=>{cu(l,e,0)});e.asyncDep=u}else Aa(e,u)}else o0(e)}function Aa(e,n,t){ve(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Oe(n)&&(e.setupState=pf(n)),o0(e)}function o0(e,n,t){const r=e.type;e.render||(e.render=r.render||st);{const o=ri(e);St();try{pg(e)}finally{Et(),o()}}}const qg={get(e,n){return pn(e,"get",""),e[n]}};function Gg(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,qg),slots:e.slots,emit:e.emit,expose:n}}function bu(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pf(Ro(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ko)return ko[t](e)},has(n,t){return t in n||t in ko}})):e.proxy}function Zg(e,n=!0){return ve(e)?e.displayName||e.name:e.name||n&&e.__name}function Xg(e){return ve(e)&&"__vccOpts"in e}const R=(e,n)=>K1(e,n,Mo);function E(e,n,t){try{Mi(-1);const r=arguments.length;return r===2?Oe(n)&&!ge(n)?Xr(n)?Ce(e,null,[n]):Ce(e,n):Ce(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Xr(t)&&(t=[t]),Ce(e,n,t))}finally{Mi(1)}}const Yg="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fs;const Ta=typeof window<"u"&&window.trustedTypes;if(Ta)try{Fs=Ta.createPolicy("vue",{createHTML:e=>e})}catch{}const i0=Fs?e=>Fs.createHTML(e):e=>e,Jg="http://www.w3.org/2000/svg",Qg="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Da=yt&&yt.createElement("template"),eb={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n==="svg"?yt.createElementNS(Jg,e):n==="mathml"?yt.createElementNS(Qg,e):t?yt.createElement(e,{is:t}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const u=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Da.innerHTML=i0(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=Da.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Bt="transition",ao="animation",Yr=Symbol("_vtc"),u0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},s0=Ye({},Af,u0),nb=e=>(e.displayName="Transition",e.props=s0,e),Sr=nb((e,{slots:n})=>E(rg,l0(e),n)),sr=(e,n=[])=>{ge(e)?e.forEach(t=>t(...n)):e&&e(...n)},za=e=>e?ge(e)?e.some(n=>n.length>1):e.length>1:!1;function l0(e){const n={};for(const T in e)T in u0||(n[T]=e[T]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:u=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:a=u,appearToClass:c=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,p=tb(o),g=p&&p[0],m=p&&p[1],{onBeforeEnter:b,onEnter:v,onEnterCancelled:_,onLeave:y,onLeaveCancelled:k,onBeforeAppear:D=b,onAppear:S=v,onAppearCancelled:A=_}=n,w=(T,q,G,O)=>{T._enterCancelled=O,Lt(T,q?c:s),Lt(T,q?a:u),G&&G()},I=(T,q)=>{T._isLeaving=!1,Lt(T,d),Lt(T,h),Lt(T,f),q&&q()},B=T=>(q,G)=>{const O=T?S:v,Y=()=>w(q,T,G);sr(O,[q,Y]),Fa(()=>{Lt(q,T?l:i),tt(q,T?c:s),za(O)||Ia(q,r,g,Y)})};return Ye(n,{onBeforeEnter(T){sr(b,[T]),tt(T,i),tt(T,u)},onBeforeAppear(T){sr(D,[T]),tt(T,l),tt(T,a)},onEnter:B(!1),onAppear:B(!0),onLeave(T,q){T._isLeaving=!0;const G=()=>I(T,q);tt(T,d),T._enterCancelled?(tt(T,f),Is(T)):(Is(T),tt(T,f)),Fa(()=>{T._isLeaving&&(Lt(T,d),tt(T,h),za(y)||Ia(T,r,m,G))}),sr(y,[T,G])},onEnterCancelled(T){w(T,!1,void 0,!0),sr(_,[T])},onAppearCancelled(T){w(T,!0,void 0,!0),sr(A,[T])},onLeaveCancelled(T){I(T),sr(k,[T])}})}function tb(e){if(e==null)return null;if(Oe(e))return[Ku(e.enter),Ku(e.leave)];{const n=Ku(e);return[n,n]}}function Ku(e){return c1(e)}function tt(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Yr]||(e[Yr]=new Set)).add(n)}function Lt(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[Yr];t&&(t.delete(n),t.size||(e[Yr]=void 0))}function Fa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let rb=0;function Ia(e,n,t,r){const o=e._endId=++rb,i=()=>{o===e._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:u,timeout:s,propCount:l}=a0(e,n);if(!u)return r();const a=u+"end";let c=0;const d=()=>{e.removeEventListener(a,f),i()},f=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(a,f)}function a0(e,n){const t=window.getComputedStyle(e),r=p=>(t[p]||"").split(", "),o=r(`${Bt}Delay`),i=r(`${Bt}Duration`),u=Pa(o,i),s=r(`${ao}Delay`),l=r(`${ao}Duration`),a=Pa(s,l);let c=null,d=0,f=0;n===Bt?u>0&&(c=Bt,d=u,f=i.length):n===ao?a>0&&(c=ao,d=a,f=l.length):(d=Math.max(u,a),c=d>0?u>a?Bt:ao:null,f=c?c===Bt?i.length:l.length:0);const h=c===Bt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Bt}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function Pa(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Ra(t)+Ra(e[r])))}function Ra(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Is(e){return(e?e.ownerDocument:document).body.offsetHeight}function ob(e,n,t){const r=e[Yr];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Li=Symbol("_vod"),c0=Symbol("_vsh"),ib={name:"show",beforeMount(e,{value:n},{transition:t}){e[Li]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):co(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),co(e,!0),r.enter(e)):r.leave(e,()=>{co(e,!1)}):co(e,n))},beforeUnmount(e,{value:n}){co(e,n)}};function co(e,n){e.style.display=n?e[Li]:"none",e[c0]=!n}const ub=Symbol(""),sb=/(?:^|;)\s*display\s*:/;function lb(e,n,t){const r=e.style,o=Ge(t);let i=!1;if(t&&!o){if(n)if(Ge(n))for(const u of n.split(";")){const s=u.slice(0,u.indexOf(":")).trim();t[s]==null&&Ti(r,s,"")}else for(const u in n)t[u]==null&&Ti(r,u,"");for(const u in t)u==="display"&&(i=!0),Ti(r,u,t[u])}else if(o){if(n!==t){const u=r[ub];u&&(t+=";"+u),r.cssText=t,i=sb.test(t)}}else n&&e.removeAttribute("style");Li in e&&(e[Li]=i?r.display:"",e[c0]&&(r.display="none"))}const Oa=/\s*!important$/;function Ti(e,n,t){if(ge(t))t.forEach(r=>Ti(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=ab(e,n);Oa.test(t)?e.setProperty(Tr(r),t.replace(Oa,""),"important"):e[r]=t}}const $a=["Webkit","Moz","ms"],Vu={};function ab(e,n){const t=Vu[n];if(t)return t;let r=Hn(n);if(r!=="filter"&&r in e)return Vu[n]=r;r=iu(r);for(let o=0;o<$a.length;o++){const i=$a[o]+r;if(i in e)return Vu[n]=i}return n}const Ba="http://www.w3.org/1999/xlink";function Ma(e,n,t,r,o,i=b1(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ba,n.slice(6,n.length)):e.setAttributeNS(Ba,n,t):t==null||i&&!Kd(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Ft(t)?String(t):t)}function Na(e,n,t,r,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?i0(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(s!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let u=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Kd(t):t==null&&s==="string"?(t="",u=!0):s==="number"&&(t=0,u=!0)}try{e[n]=t}catch{}u&&e.removeAttribute(o||n)}function cb(e,n,t,r){e.addEventListener(n,t,r)}function db(e,n,t,r){e.removeEventListener(n,t,r)}const La=Symbol("_vei");function fb(e,n,t,r,o=null){const i=e[La]||(e[La]={}),u=i[n];if(r&&u)u.value=r;else{const[s,l]=hb(n);if(r){const a=i[n]=bb(r,o);cb(e,s,a,l)}else u&&(db(e,s,u,l),i[n]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function hb(e){let n;if(ja.test(e)){n={};let r;for(;r=e.match(ja);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tr(e.slice(2)),n]}let Wu=0;const pb=Promise.resolve(),gb=()=>Wu||(pb.then(()=>Wu=0),Wu=Date.now());function bb(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Xn(mb(r,t.value),n,5,[r])};return t.value=e,t.attached=gb(),t}function mb(e,n){if(ge(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const Ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,vb=(e,n,t,r,o,i)=>{const u=o==="svg";n==="class"?ob(e,r,u):n==="style"?lb(e,t,r):nu(n)?cl(n)||fb(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):xb(e,n,r,u))?(Na(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Ma(e,n,r,u,i,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Ge(r))?Na(e,Hn(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Ma(e,n,r,u))};function xb(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Ha(n)&&ve(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ha(n)&&Ge(t)?!1:n in e}const d0=new WeakMap,f0=new WeakMap,ji=Symbol("_moveCb"),Ua=Symbol("_enterCb"),yb=e=>(delete e.props.mode,e),Cb=yb({name:"TransitionGroup",props:Ye({},s0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=zr(),r=Ef();let o,i;return Of(()=>{if(!o.length)return;const u=e.moveClass||`${e.name||"v"}-move`;if(!Eb(o[0].el,t.vnode.el,u)){o=[];return}o.forEach(wb),o.forEach(kb);const s=o.filter(Sb);Is(t.vnode.el),s.forEach(l=>{const a=l.el,c=a.style;tt(a,u),c.transform=c.webkitTransform=c.transitionDuration="";const d=a[ji]=f=>{f&&f.target!==a||(!f||f.propertyName.endsWith("transform"))&&(a.removeEventListener("transitionend",d),a[ji]=null,Lt(a,u))};a.addEventListener("transitionend",d)}),o=[]}),()=>{const u=Se(e),s=l0(u);let l=u.tag||Be;if(o=[],i)for(let a=0;a<i.length;a++){const c=i[a];c.el&&c.el instanceof Element&&(o.push(c),wr(c,$o(c,s,r,t)),d0.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}i=n.default?yl(n.default()):[];for(let a=0;a<i.length;a++){const c=i[a];c.key!=null&&wr(c,$o(c,s,r,t))}return Ce(l,null,i)}}}),_b=Cb;function wb(e){const n=e.el;n[ji]&&n[ji](),n[Ua]&&n[Ua]()}function kb(e){f0.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Sb(e){const n=d0.get(e),t=f0.get(e),r=n.left-t.left,o=n.top-t.top;if(r||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",e}}function Eb(e,n,t){const r=e.cloneNode(),o=e[Yr];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:u}=a0(r);return i.removeChild(r),u}const Ab=["ctrl","shift","alt","meta"],Tb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Ab.some(t=>e[`${t}Key`]&&!n.includes(t))},L7=(e,n)=>{const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(o,...i)=>{for(let u=0;u<n.length;u++){const s=Tb[n[u]];if(s&&s(o,n))return}return e(o,...i)})},Db=Ye({patchProp:vb},eb);let Ka;function zb(){return Ka||(Ka=Rg(Db))}const Fb=(...e)=>{const n=zb().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=Pb(r);if(!o)return;const i=n._component;!ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const u=t(o,!1,Ib(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),u},n};function Ib(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Pb(e){return Ge(e)?document.querySelector(e):e}function Rb(e){let n=".",t="__",r="--",o;if(e){let p=e.blockPrefix;p&&(n=p),p=e.elementPrefix,p&&(t=p),p=e.modifierPrefix,p&&(r=p)}const i={install(p){o=p.c;const g=p.context;g.bem={},g.bem.b=null,g.bem.els=null}};function u(p){let g,m;return{before(b){g=b.bem.b,m=b.bem.els,b.bem.els=null},after(b){b.bem.b=g,b.bem.els=m},$({context:b,props:v}){return p=typeof p=="string"?p:p({context:b,props:v}),b.bem.b=p,`${(v==null?void 0:v.bPrefix)||n}${b.bem.b}`}}}function s(p){let g;return{before(m){g=m.bem.els},after(m){m.bem.els=g},$({context:m,props:b}){return p=typeof p=="string"?p:p({context:m,props:b}),m.bem.els=p.split(",").map(v=>v.trim()),m.bem.els.map(v=>`${(b==null?void 0:b.bPrefix)||n}${m.bem.b}${t}${v}`).join(", ")}}}function l(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const b=p.split(",").map(y=>y.trim());function v(y){return b.map(k=>`&${(m==null?void 0:m.bPrefix)||n}${g.bem.b}${y!==void 0?`${t}${y}`:""}${r}${k}`).join(", ")}const _=g.bem.els;return _!==null?v(_[0]):v()}}}function a(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const b=g.bem.els;return`&:not(${(m==null?void 0:m.bPrefix)||n}${g.bem.b}${b!==null&&b.length>0?`${t}${b[0]}`:""}${r}${p})`}}}return Object.assign(i,{cB:(...p)=>o(u(p[0]),p[1],p[2]),cE:(...p)=>o(s(p[0]),p[1],p[2]),cM:(...p)=>o(l(p[0]),p[1],p[2]),cNotM:(...p)=>o(a(p[0]),p[1],p[2])}),i}function Ob(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const h0=/\s*,(?![^(]*\))\s*/g,$b=/\s+/g;function Bb(e,n){const t=[];return n.split(h0).forEach(r=>{let o=Ob(r);if(o){if(o===1){e.forEach(u=>{t.push(r.replace("&",u))});return}}else{e.forEach(u=>{t.push((u&&u+" ")+r)});return}let i=[r];for(;o--;){const u=[];i.forEach(s=>{e.forEach(l=>{u.push(s.replace("&",l))})}),i=u}i.forEach(u=>t.push(u))}),t}function Mb(e,n){const t=[];return n.split(h0).forEach(r=>{e.forEach(o=>{t.push((o&&o+" ")+r)})}),t}function Nb(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Bb(n,t):n=Mb(n,t))}),n.join(", ").replace($b," ")}function Va(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function mu(e,n){return(n??document.head).querySelector(`style[cssr-id="${e}"]`)}function Lb(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function gi(e){return e?/^\s*@(s|m)/.test(e):!1}const jb=/[A-Z]/g;function p0(e){return e.replace(jb,n=>"-"+n.toLowerCase())}function Hb(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${p0(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function Ub(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Wa(e,n,t,r){if(!n)return"";const o=Ub(n,t,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const u=e?[e+" {"]:[];return i.forEach(s=>{const l=o[s];if(s==="raw"){u.push(`
`+l+`
`);return}s=p0(s),l!=null&&u.push(`  ${s}${Hb(l)}`)}),e&&u.push("}"),u.join(`
`)}function Ps(e,n,t){e&&e.forEach(r=>{if(Array.isArray(r))Ps(r,n,t);else if(typeof r=="function"){const o=r(n);Array.isArray(o)?Ps(o,n,t):o&&t(o)}else r&&t(r)})}function g0(e,n,t,r,o){const i=e.$;let u="";if(!i||typeof i=="string")gi(i)?u=i:n.push(i);else if(typeof i=="function"){const a=i({context:r.context,props:o});gi(a)?u=a:n.push(a)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")gi(i.$)?u=i.$:n.push(i.$);else if(i.$){const a=i.$({context:r.context,props:o});gi(a)?u=a:n.push(a)}const s=Nb(n),l=Wa(s,e.props,r,o);u?t.push(`${u} {`):l.length&&t.push(l),e.children&&Ps(e.children,{context:r.context,props:o},a=>{if(typeof a=="string"){const c=Wa(s,{raw:a},r,o);t.push(c)}else g0(a,n,t,r,o)}),n.pop(),u&&t.push("}"),i&&i.after&&i.after(r.context)}function Kb(e,n,t){const r=[];return g0(e,[],r,n,t),r.join(`

`)}function No(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Vb(e,n,t,r){const{els:o}=n;if(t===void 0)o.forEach(Va),n.els=[];else{const i=mu(t,r);i&&o.includes(i)&&(Va(i),n.els=o.filter(u=>u!==i))}}function qa(e,n){e.push(n)}function Wb(e,n,t,r,o,i,u,s,l){let a;if(t===void 0&&(a=n.render(r),t=No(a)),l){l.adapter(t,a??n.render(r));return}s===void 0&&(s=document.head);const c=mu(t,s);if(c!==null&&!i)return c;const d=c??Lb(t);if(a===void 0&&(a=n.render(r)),d.textContent=a,c!==null)return c;if(u){const f=s.querySelector(`meta[name="${u}"]`);if(f)return s.insertBefore(d,f),qa(n.els,d),d}return o?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),qa(n.els,d),d}function qb(e){return Kb(this,this.instance,e)}function Gb(e={}){const{id:n,ssr:t,props:r,head:o=!1,force:i=!1,anchorMetaName:u,parent:s}=e;return Wb(this.instance,this,n,r,o,i,u,s,t)}function Zb(e={}){const{id:n,parent:t}=e;Vb(this.instance,this,n,t)}const bi=function(e,n,t,r){return{instance:e,$:n,props:t,children:r,els:[],render:qb,mount:Gb,unmount:Zb}},Xb=function(e,n,t,r){return Array.isArray(n)?bi(e,{$:null},null,n):Array.isArray(t)?bi(e,n,null,t):Array.isArray(r)?bi(e,n,t,r):bi(e,n,t,null)};function b0(e={}){const n={c:(...t)=>Xb(n,...t),use:(t,...r)=>t.install(n,...r),find:mu,context:{},config:e};return n}function Yb(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return mu(e)!==null}const Jb="n",Lo=`.${Jb}-`,Qb="__",em="--",m0=b0(),v0=Rb({blockPrefix:Lo,elementPrefix:Qb,modifierPrefix:em});m0.use(v0);const{c:L,find:j7}=m0,{cB:V,cE:U,cM:X,cNotM:on}=v0;function x0(e){return L(({props:{bPrefix:n}})=>`${n||Lo}modal, ${n||Lo}drawer`,[e])}function y0(e){return L(({props:{bPrefix:n}})=>`${n||Lo}popover`,[e])}function nm(e){return L(({props:{bPrefix:n}})=>`&${n||Lo}modal`,e)}const tm=(...e)=>L(">",[V(...e)]);function ze(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}let Hi=[];const C0=new WeakMap;function rm(){Hi.forEach(e=>e(...C0.get(e))),Hi=[]}function om(e,...n){C0.set(e,n),!Hi.includes(e)&&Hi.push(e)===1&&requestAnimationFrame(rm)}function Ga(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Ui(e){return e.composedPath()[0]||null}function Za(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function H7(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function fr(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}const Xa={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function im(e,n,t){n/=100,t/=100;let r=(o,i=(o+e/60)%6)=>t-t*n*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function um(e,n,t){n/=100,t/=100;let r=n*Math.min(t,1-t),o=(i,u=(i+e/30)%12)=>t-r*Math.max(Math.min(u-3,9-u,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}const ct="^\\s*",dt="\\s*$",Qt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",Rn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",hr="([0-9A-Fa-f])",pr="([0-9A-Fa-f]{2})",_0=new RegExp(`${ct}hsl\\s*\\(${Rn},${Qt},${Qt}\\)${dt}`),w0=new RegExp(`${ct}hsv\\s*\\(${Rn},${Qt},${Qt}\\)${dt}`),k0=new RegExp(`${ct}hsla\\s*\\(${Rn},${Qt},${Qt},${Rn}\\)${dt}`),S0=new RegExp(`${ct}hsva\\s*\\(${Rn},${Qt},${Qt},${Rn}\\)${dt}`),sm=new RegExp(`${ct}rgb\\s*\\(${Rn},${Rn},${Rn}\\)${dt}`),lm=new RegExp(`${ct}rgba\\s*\\(${Rn},${Rn},${Rn},${Rn}\\)${dt}`),am=new RegExp(`${ct}#${hr}${hr}${hr}${dt}`),cm=new RegExp(`${ct}#${pr}${pr}${pr}${dt}`),dm=new RegExp(`${ct}#${hr}${hr}${hr}${hr}${dt}`),fm=new RegExp(`${ct}#${pr}${pr}${pr}${pr}${dt}`);function Tn(e){return parseInt(e,16)}function hm(e){try{let n;if(n=k0.exec(e))return[Ki(n[1]),Zt(n[5]),Zt(n[9]),xr(n[13])];if(n=_0.exec(e))return[Ki(n[1]),Zt(n[5]),Zt(n[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(n){throw n}}function pm(e){try{let n;if(n=S0.exec(e))return[Ki(n[1]),Zt(n[5]),Zt(n[9]),xr(n[13])];if(n=w0.exec(e))return[Ki(n[1]),Zt(n[5]),Zt(n[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(n){throw n}}function Er(e){try{let n;if(n=cm.exec(e))return[Tn(n[1]),Tn(n[2]),Tn(n[3]),1];if(n=sm.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),1];if(n=lm.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),xr(n[13])];if(n=am.exec(e))return[Tn(n[1]+n[1]),Tn(n[2]+n[2]),Tn(n[3]+n[3]),1];if(n=fm.exec(e))return[Tn(n[1]),Tn(n[2]),Tn(n[3]),xr(Tn(n[4])/255)];if(n=dm.exec(e))return[Tn(n[1]+n[1]),Tn(n[2]+n[2]),Tn(n[3]+n[3]),xr(Tn(n[4]+n[4])/255)];if(e in Xa)return Er(Xa[e]);if(_0.test(e)||k0.test(e)){const[t,r,o,i]=hm(e);return[...um(t,r,o),i]}else if(w0.test(e)||S0.test(e)){const[t,r,o,i]=pm(e);return[...im(t,r,o),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function gm(e){return e>1?1:e<0?0:e}function Rs(e,n,t,r){return`rgba(${gn(e)}, ${gn(n)}, ${gn(t)}, ${gm(r)})`}function qu(e,n,t,r,o){return gn((e*n*(1-r)+t*r)/o)}function vr(e,n){Array.isArray(e)||(e=Er(e)),Array.isArray(n)||(n=Er(n));const t=e[3],r=n[3],o=xr(t+r-t*r);return Rs(qu(e[0],t,n[0],r,o),qu(e[1],t,n[1],r,o),qu(e[2],t,n[2],r,o),o)}function De(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:Er(e);return typeof n.alpha=="number"?Rs(t,r,o,n.alpha):Rs(t,r,o,i)}function mi(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:Er(e),{lightness:u=1,alpha:s=1}=n;return bm([t*u,r*u,o*u,i*s])}function xr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Ki(e){const n=Math.round(Number(e));return n>=360||n<0?0:n}function gn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function Zt(e){const n=Math.round(Number(e));return n>100?100:n<0?0:n}function bm(e){const[n,t,r]=e;return 3 in e?`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, ${xr(e[3])})`:`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, 1)`}function E0(e=8){return Math.random().toString(16).slice(2,2+e)}function Di(e){return e.composedPath()[0]}const mm={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function vm(e,n,t){if(e==="mousemoveoutside"){const r=o=>{n.contains(Di(o))||t(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=u=>{r=!n.contains(Di(u))},i=u=>{r&&(n.contains(Di(u))||t(u))};return{mousedown:o,mouseup:i,touchstart:o,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function A0(e,n,t){const r=mm[e];let o=r.get(n);o===void 0&&r.set(n,o=new WeakMap);let i=o.get(t);return i===void 0&&o.set(t,i=vm(e,n,t)),i}function xm(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=A0(e,n,t);return Object.keys(o).forEach(i=>{tn(i,document,o[i],r)}),!0}return!1}function ym(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=A0(e,n,t);return Object.keys(o).forEach(i=>{We(i,document,o[i],r)}),!0}return!1}function Cm(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function r(){e.set(this,!0),n.set(this,!0)}function o(S,A,w){const I=S[A];return S[A]=function(){return w.apply(S,arguments),I.apply(S,arguments)},S}function i(S,A){S[A]=Event.prototype[A]}const u=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var S;return(S=u.get(this))!==null&&S!==void 0?S:null}function a(S,A){s!==void 0&&Object.defineProperty(S,"currentTarget",{configurable:!0,enumerable:!0,get:A??s.get})}const c={bubble:{},capture:{}},d={};function f(){const S=function(A){const{type:w,eventPhase:I,bubbles:B}=A,T=Di(A);if(I===2)return;const q=I===1?"capture":"bubble";let G=T;const O=[];for(;G===null&&(G=window),O.push(G),G!==window;)G=G.parentNode||null;const Y=c.capture[w],j=c.bubble[w];if(o(A,"stopPropagation",t),o(A,"stopImmediatePropagation",r),a(A,l),q==="capture"){if(Y===void 0)return;for(let Q=O.length-1;Q>=0&&!e.has(A);--Q){const xe=O[Q],ke=Y.get(xe);if(ke!==void 0){u.set(A,xe);for(const ee of ke){if(n.has(A))break;ee(A)}}if(Q===0&&!B&&j!==void 0){const ee=j.get(xe);if(ee!==void 0)for(const ne of ee){if(n.has(A))break;ne(A)}}}}else if(q==="bubble"){if(j===void 0)return;for(let Q=0;Q<O.length&&!e.has(A);++Q){const xe=O[Q],ke=j.get(xe);if(ke!==void 0){u.set(A,xe);for(const ee of ke){if(n.has(A))break;ee(A)}}}}i(A,"stopPropagation"),i(A,"stopImmediatePropagation"),a(A)};return S.displayName="evtdUnifiedHandler",S}function h(){const S=function(A){const{type:w,eventPhase:I}=A;if(I!==2)return;const B=d[w];B!==void 0&&B.forEach(T=>T(A))};return S.displayName="evtdUnifiedWindowEventHandler",S}const p=f(),g=h();function m(S,A){const w=c[S];return w[A]===void 0&&(w[A]=new Map,window.addEventListener(A,p,S==="capture")),w[A]}function b(S){return d[S]===void 0&&(d[S]=new Set,window.addEventListener(S,g)),d[S]}function v(S,A){let w=S.get(A);return w===void 0&&S.set(A,w=new Set),w}function _(S,A,w,I){const B=c[A][w];if(B!==void 0){const T=B.get(S);if(T!==void 0&&T.has(I))return!0}return!1}function y(S,A){const w=d[S];return!!(w!==void 0&&w.has(A))}function k(S,A,w,I){let B;if(typeof I=="object"&&I.once===!0?B=Y=>{D(S,A,B,I),w(Y)}:B=w,xm(S,A,B,I))return;const q=I===!0||typeof I=="object"&&I.capture===!0?"capture":"bubble",G=m(q,S),O=v(G,A);if(O.has(B)||O.add(B),A===window){const Y=b(S);Y.has(B)||Y.add(B)}}function D(S,A,w,I){if(ym(S,A,w,I))return;const T=I===!0||typeof I=="object"&&I.capture===!0,q=T?"capture":"bubble",G=m(q,S),O=v(G,A);if(A===window&&!_(A,T?"bubble":"capture",S,w)&&y(S,w)){const j=d[S];j.delete(w),j.size===0&&(window.removeEventListener(S,g),d[S]=void 0)}O.has(w)&&O.delete(w),O.size===0&&G.delete(A),G.size===0&&(window.removeEventListener(S,p,q==="capture"),c[q][S]=void 0)}return{on:k,off:D}}const{on:tn,off:We}=Cm();function _m(e){const n=re(!!e.value);if(n.value)return _r(n);const t=sn(e,r=>{r&&(n.value=!0,t())});return _r(n)}function zn(e){const n=R(e),t=re(n.value);return sn(n,r=>{t.value=r}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(r){e.set(r)}}}function wm(){return zr()!==null}const km=typeof window<"u";let Wr,Eo;const Sm=()=>{var e,n;Wr=km?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,Eo=!1,Wr!==void 0?Wr.then(()=>{Eo=!0}):Eo=!0};Sm();function Em(e){if(Eo)return;let n=!1;Mn(()=>{Eo||Wr==null||Wr.then(()=>{n||e()})}),Kn(()=>{n=!0})}function jo(e,n){return sn(e,t=>{t!==void 0&&(n.value=t)}),R(()=>e.value===void 0?n.value:e.value)}function T0(){const e=re(!1);return Mn(()=>{e.value=!0}),_r(e)}function D0(e,n){return R(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const Am=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Tm(){return Am}function Dm(e={},n){const t=ro({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(a=>{if(a!==l.key)return;const c=r[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},u=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(a=>{if(a!==l.key)return;const c=o[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},s=()=>{(n===void 0||n.value)&&(tn("keydown",document,i),tn("keyup",document,u)),n!==void 0&&sn(n,l=>{l?(tn("keydown",document,i),tn("keyup",document,u)):(We("keydown",document,i),We("keyup",document,u))})};return wm()?(ni(s),Kn(()=>{(n===void 0||n.value)&&(We("keydown",document,i),We("keyup",document,u))})):s(),_r(t)}function U7(e){return e}const K7="n-internal-select-menu",zm="n-internal-select-menu-body",Al="n-drawer-body",Tl="n-modal-body",vu="n-popover-body",z0="__disabled__";function Jr(e){const n=me(Tl,null),t=me(Al,null),r=me(vu,null),o=me(zm,null),i=re();if(typeof document<"u"){i.value=document.fullscreenElement;const u=()=>{i.value=document.fullscreenElement};Mn(()=>{tn("fullscreenchange",document,u)}),Kn(()=>{We("fullscreenchange",document,u)})}return zn(()=>{var u;const{to:s}=e;return s!==void 0?s===!1?z0:s===!0?i.value||"body":s:n!=null&&n.value?(u=n.value.$el)!==null&&u!==void 0?u:n.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:s??(i.value||"body")})}Jr.tdkey=z0;Jr.propTo={type:[String,Object,Boolean],default:void 0};function Fm(e,n,t){const r=re(e.value);let o=null;return sn(e,i=>{o!==null&&window.clearTimeout(o),i===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const F0=typeof document<"u"&&typeof window<"u";let Ya=!1;function Im(){if(F0&&window.CSS&&!Ya&&(Ya=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Dl(e){const n={isDeactivated:!1};let t=!1;return If(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Pf(()=>{n.isDeactivated=!0,t||(t=!0)}),n}function Os(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return r()}function $s(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){$s(r,n,t);return}if(r.type===Be){if(r.children===null)return;Array.isArray(r.children)&&$s(r.children,n,t)}else r.type!==nn&&t.push(r)}}),t}function Ja(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const o=$s(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Mt=null;function I0(){if(Mt===null&&(Mt=document.getElementById("v-binder-view-measurer"),Mt===null)){Mt=document.createElement("div"),Mt.id="v-binder-view-measurer";const{style:e}=Mt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Mt)}return Mt.getBoundingClientRect()}function Pm(e,n){const t=I0();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function Gu(e){const n=e.getBoundingClientRect(),t=I0();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Rm(e){return e.nodeType===9?null:e.parentNode}function P0(e){if(e===null)return null;const n=Rm(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:r,overflowY:o}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+o+r))return n}return P0(n)}const R0=le({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;Ue("VBinder",(n=zr())===null||n===void 0?void 0:n.proxy);const t=me("VBinder",null),r=re(null),o=b=>{r.value=b,t&&e.syncTargetWithParent&&t.setTargetRef(b)};let i=[];const u=()=>{let b=r.value;for(;b=P0(b),b!==null;)i.push(b);for(const v of i)tn("scroll",v,d,!0)},s=()=>{for(const b of i)We("scroll",b,d,!0);i=[]},l=new Set,a=b=>{l.size===0&&u(),l.has(b)||l.add(b)},c=b=>{l.has(b)&&l.delete(b),l.size===0&&s()},d=()=>{om(f)},f=()=>{l.forEach(b=>b())},h=new Set,p=b=>{h.size===0&&tn("resize",window,m),h.has(b)||h.add(b)},g=b=>{h.has(b)&&h.delete(b),h.size===0&&We("resize",window,m)},m=()=>{h.forEach(b=>b())};return Kn(()=>{We("resize",window,m),s()}),{targetRef:r,setTargetRef:o,addScrollListener:a,removeScrollListener:c,addResizeListener:p,removeResizeListener:g}},render(){return Os("binder",this.$slots)}}),O0=le({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=me("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?du(Ja("follower",this.$slots),[[n]]):Ja("follower",this.$slots)}}),Or="@@mmoContext",Om={mounted(e,{value:n}){e[Or]={handler:void 0},typeof n=="function"&&(e[Or].handler=n,tn("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Or];typeof n=="function"?t.handler?t.handler!==n&&(We("mousemoveoutside",e,t.handler),t.handler=n,tn("mousemoveoutside",e,n)):(e[Or].handler=n,tn("mousemoveoutside",e,n)):t.handler&&(We("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Or];n&&We("mousemoveoutside",e,n),e[Or].handler=void 0}},$r="@@coContext",Qa={mounted(e,{value:n,modifiers:t}){e[$r]={handler:void 0},typeof n=="function"&&(e[$r].handler=n,tn("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const r=e[$r];typeof n=="function"?r.handler?r.handler!==n&&(We("clickoutside",e,r.handler,{capture:t.capture}),r.handler=n,tn("clickoutside",e,n,{capture:t.capture})):(e[$r].handler=n,tn("clickoutside",e,n,{capture:t.capture})):r.handler&&(We("clickoutside",e,r.handler,{capture:t.capture}),r.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[$r];t&&We("clickoutside",e,t,{capture:n.capture}),e[$r].handler=void 0}};function $m(e,n){console.error(`[vdirs/${e}]: ${n}`)}class Bm{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:r}=this;if(t!==void 0){n.style.zIndex=`${t}`,r.delete(n);return}const{nextZIndex:o}=this;r.has(n)&&r.get(n)+1===this.nextZIndex||(n.style.zIndex=`${o}`,r.set(n,o),this.nextZIndex=o+1,this.squashState())}unregister(n,t){const{elementZIndex:r}=this;r.has(n)?r.delete(n):t===void 0&&$m("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,r)=>t[1]-r[1]),this.nextZIndex=2e3,n.forEach(t=>{const r=t[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}const Zu=new Bm,Br="@@ziContext",$0={mounted(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t;e[Br]={enabled:!!o,initialized:!1},o&&(Zu.ensureZIndex(e,r),e[Br].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t,i=e[Br].enabled;o&&!i&&(Zu.ensureZIndex(e,r),e[Br].initialized=!0),e[Br].enabled=!!o},unmounted(e,n){if(!e[Br].initialized)return;const{value:t={}}=n,{zIndex:r}=t;Zu.unregister(e,r)}},Mm="@css-render/vue3-ssr";function Nm(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function Lm(e,n,t){const{styles:r,ids:o}=t;o.has(e)||r!==null&&(o.add(e),r.push(Nm(e,n)))}const jm=typeof document<"u";function oo(){if(jm)return;const e=me(Mm,null);if(e!==null)return{adapter:(n,t)=>Lm(n,t,e),context:e}}function ec(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:mo}=b0(),B0="vueuc-style";function nc(e){return typeof e=="string"?document.querySelector(e):e()||null}const Hm=le({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:_m(je(e,"show")),mergedTo:R(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?Os("lazy-teleport",this.$slots):E(ng,{disabled:this.disabled,to:this.mergedTo},Os("lazy-teleport",this.$slots)):null}}),vi={top:"bottom",bottom:"top",left:"right",right:"left"},tc={start:"end",center:"center",end:"start"},Xu={top:"height",bottom:"height",left:"width",right:"width"},Um={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Km={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Vm={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},rc={top:!0,bottom:!1,left:!0,right:!1},oc={top:"end",bottom:"start",left:"end",right:"start"};function Wm(e,n,t,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[u,s]=e.split("-");let l=s??"center",a={top:0,left:0};const c=(h,p,g)=>{let m=0,b=0;const v=t[h]-n[p]-n[h];return v>0&&r&&(g?b=rc[p]?v:-v:m=rc[p]?v:-v),{left:m,top:b}},d=u==="left"||u==="right";if(l!=="center"){const h=Vm[e],p=vi[h],g=Xu[h];if(t[g]>n[g]){if(n[h]+n[g]<t[g]){const m=(t[g]-n[g])/2;n[h]<m||n[p]<m?n[h]<n[p]?(l=tc[s],a=c(g,p,d)):a=c(g,h,d):l="center"}}else t[g]<n[g]&&n[p]<0&&n[h]>n[p]&&(l=tc[s])}else{const h=u==="bottom"||u==="top"?"left":"top",p=vi[h],g=Xu[h],m=(t[g]-n[g])/2;(n[h]<m||n[p]<m)&&(n[h]>n[p]?(l=oc[h],a=c(g,h,d)):(l=oc[p],a=c(g,p,d)))}let f=u;return n[u]<t[Xu[u]]&&n[u]<n[vi[u]]&&(f=vi[u]),{placement:l!=="center"?`${f}-${l}`:f,left:a.left,top:a.top}}function qm(e,n){return n?Km[e]:Um[e]}function Gm(e,n,t,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const Zm=mo([mo(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),mo(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[mo("> *",{pointerEvents:"all"})])]),M0=le({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=me("VBinder"),t=zn(()=>e.enabled!==void 0?e.enabled:e.show),r=re(null),o=re(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&n.addScrollListener(l),f.includes("resize")&&n.addResizeListener(l)},u=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Mn(()=>{t.value&&(l(),i())});const s=oo();Zm.mount({id:"vueuc/binder",head:!0,anchorMetaName:B0,ssr:s}),Kn(()=>{u()}),Em(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const f=r.value;if(f===null)return;const h=n.targetRef,{x:p,y:g,overlap:m}=e,b=p!==void 0&&g!==void 0?Pm(p,g):Gu(h);f.style.setProperty("--v-target-width",`${Math.round(b.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(b.height)}px`);const{width:v,minWidth:_,placement:y,internalShift:k,flip:D}=e;f.setAttribute("v-placement",y),m?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:S}=f;v==="target"?S.width=`${b.width}px`:v!==void 0?S.width=v:S.width="",_==="target"?S.minWidth=`${b.width}px`:_!==void 0?S.minWidth=_:S.minWidth="";const A=Gu(f),w=Gu(o.value),{left:I,top:B,placement:T}=Wm(y,b,A,k,D,m),q=qm(T,m),{left:G,top:O,transform:Y}=Gm(T,w,b,B,I,m);f.setAttribute("v-placement",T),f.style.setProperty("--v-offset-left",`${Math.round(I)}px`),f.style.setProperty("--v-offset-top",`${Math.round(B)}px`),f.style.transform=`translateX(${G}) translateY(${O}) ${Y}`,f.style.setProperty("--v-transform-origin",q),f.style.transformOrigin=q};sn(t,f=>{f?(i(),a()):u()});const a=()=>{ei().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{sn(je(e,f),l)}),["teleportDisabled"].forEach(f=>{sn(je(e,f),a)}),sn(je(e,"syncTrigger"),f=>{f.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),f.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const c=T0(),d=zn(()=>{const{to:f}=e;if(f!==void 0)return f;c.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:o,followerRef:r,mergedTo:d,syncPosition:l}},render(){return E(Hm,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=E("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[E("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?du(t,[[$0,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var yr=[],Xm=function(){return yr.some(function(e){return e.activeTargets.length>0})},Ym=function(){return yr.some(function(e){return e.skippedTargets.length>0})},ic="ResizeObserver loop completed with undelivered notifications.",Jm=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ic}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ic),window.dispatchEvent(e)},Ho;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Ho||(Ho={}));var Cr=function(e){return Object.freeze(e)},Qm=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Cr(this)}return e}(),N0=function(){function e(n,t,r,o){return this.x=n,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Cr(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,r=n.y,o=n.top,i=n.right,u=n.bottom,s=n.left,l=n.width,a=n.height;return{x:t,y:r,top:o,right:i,bottom:u,left:s,width:l,height:a}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),zl=function(e){return e instanceof SVGElement&&"getBBox"in e},L0=function(e){if(zl(e)){var n=e.getBBox(),t=n.width,r=n.height;return!t&&!r}var o=e,i=o.offsetWidth,u=o.offsetHeight;return!(i||u||e.getClientRects().length)},uc=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},ev=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Ao=typeof window<"u"?window:{},xi=new WeakMap,sc=/auto|scroll/,nv=/^tb|vertical/,tv=/msie|trident/i.test(Ao.navigator&&Ao.navigator.userAgent),et=function(e){return parseFloat(e||"0")},qr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new Qm((t?n:e)||0,(t?e:n)||0)},lc=Cr({devicePixelContentBoxSize:qr(),borderBoxSize:qr(),contentBoxSize:qr(),contentRect:new N0(0,0,0,0)}),j0=function(e,n){if(n===void 0&&(n=!1),xi.has(e)&&!n)return xi.get(e);if(L0(e))return xi.set(e,lc),lc;var t=getComputedStyle(e),r=zl(e)&&e.ownerSVGElement&&e.getBBox(),o=!tv&&t.boxSizing==="border-box",i=nv.test(t.writingMode||""),u=!r&&sc.test(t.overflowY||""),s=!r&&sc.test(t.overflowX||""),l=r?0:et(t.paddingTop),a=r?0:et(t.paddingRight),c=r?0:et(t.paddingBottom),d=r?0:et(t.paddingLeft),f=r?0:et(t.borderTopWidth),h=r?0:et(t.borderRightWidth),p=r?0:et(t.borderBottomWidth),g=r?0:et(t.borderLeftWidth),m=d+a,b=l+c,v=g+h,_=f+p,y=s?e.offsetHeight-_-e.clientHeight:0,k=u?e.offsetWidth-v-e.clientWidth:0,D=o?m+v:0,S=o?b+_:0,A=r?r.width:et(t.width)-D-k,w=r?r.height:et(t.height)-S-y,I=A+m+k+v,B=w+b+y+_,T=Cr({devicePixelContentBoxSize:qr(Math.round(A*devicePixelRatio),Math.round(w*devicePixelRatio),i),borderBoxSize:qr(I,B,i),contentBoxSize:qr(A,w,i),contentRect:new N0(d,l,A,w)});return xi.set(e,T),T},H0=function(e,n,t){var r=j0(e,t),o=r.borderBoxSize,i=r.contentBoxSize,u=r.devicePixelContentBoxSize;switch(n){case Ho.DEVICE_PIXEL_CONTENT_BOX:return u;case Ho.BORDER_BOX:return o;default:return i}},rv=function(){function e(n){var t=j0(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Cr([t.borderBoxSize]),this.contentBoxSize=Cr([t.contentBoxSize]),this.devicePixelContentBoxSize=Cr([t.devicePixelContentBoxSize])}return e}(),U0=function(e){if(L0(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},ov=function(){var e=1/0,n=[];yr.forEach(function(u){if(u.activeTargets.length!==0){var s=[];u.activeTargets.forEach(function(a){var c=new rv(a.target),d=U0(a.target);s.push(c),a.lastReportedSize=H0(a.target,a.observedBox),d<e&&(e=d)}),n.push(function(){u.callback.call(u.observer,s,u.observer)}),u.activeTargets.splice(0,u.activeTargets.length)}});for(var t=0,r=n;t<r.length;t++){var o=r[t];o()}return e},ac=function(e){yr.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(U0(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},iv=function(){var e=0;for(ac(e);Xm();)e=ov(),ac(e);return Ym()&&Jm(),e>0},Yu,K0=[],uv=function(){return K0.splice(0).forEach(function(e){return e()})},sv=function(e){if(!Yu){var n=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return uv()}).observe(t,r),Yu=function(){t.textContent="".concat(n?n--:n++)}}K0.push(e),Yu()},lv=function(e){sv(function(){requestAnimationFrame(e)})},zi=0,av=function(){return!!zi},cv=250,dv={attributes:!0,characterData:!0,childList:!0,subtree:!0},cc=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],dc=function(e){return e===void 0&&(e=0),Date.now()+e},Ju=!1,fv=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=cv),!Ju){Ju=!0;var r=dc(n);lv(function(){var o=!1;try{o=iv()}finally{if(Ju=!1,n=r-dc(),!av())return;o?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,dv)};document.body?t():Ao.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),cc.forEach(function(t){return Ao.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),cc.forEach(function(t){return Ao.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),Bs=new fv,fc=function(e){!zi&&e>0&&Bs.start(),zi+=e,!zi&&Bs.stop()},hv=function(e){return!zl(e)&&!ev(e)&&getComputedStyle(e).display==="inline"},pv=function(){function e(n,t){this.target=n,this.observedBox=t||Ho.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=H0(this.target,this.observedBox,!0);return hv(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),gv=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),yi=new WeakMap,hc=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Ci=function(){function e(){}return e.connect=function(n,t){var r=new gv(n,t);yi.set(n,r)},e.observe=function(n,t,r){var o=yi.get(n),i=o.observationTargets.length===0;hc(o.observationTargets,t)<0&&(i&&yr.push(o),o.observationTargets.push(new pv(t,r&&r.box)),fc(1),Bs.schedule())},e.unobserve=function(n,t){var r=yi.get(n),o=hc(r.observationTargets,t),i=r.observationTargets.length===1;o>=0&&(i&&yr.splice(yr.indexOf(r),1),r.observationTargets.splice(o,1),fc(-1))},e.disconnect=function(n){var t=this,r=yi.get(n);r.observationTargets.slice().forEach(function(o){return t.unobserve(n,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),bv=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ci.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!uc(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ci.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!uc(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ci.unobserve(this,n)},e.prototype.disconnect=function(){Ci.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class mv{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||bv)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const pc=new mv,Vi=le({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=zr().proxy;function r(o){const{onResize:i}=e;i!==void 0&&i(o)}Mn(()=>{const o=t.$el;if(o===void 0){ec("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){ec("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(pc.registerHandler(o.nextElementSibling,r),n=!0)}),Kn(()=>{n&&pc.unregisterHandler(t.$el.nextElementSibling)})},render(){return pu(this.$slots,"default")}}),mt="v-hidden",vv=mo("[v-hidden]",{display:"none!important"}),xv=le({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=re(null),r=re(null);function o(u){const{value:s}=t,{getCounter:l,getTail:a}=e;let c;if(l!==void 0?c=l():c=r.value,!s||!c)return;c.hasAttribute(mt)&&c.removeAttribute(mt);const{children:d}=s;if(u.showAllItemsBeforeCalculate)for(const _ of d)_.hasAttribute(mt)&&_.removeAttribute(mt);const f=s.offsetWidth,h=[],p=n.tail?a==null?void 0:a():null;let g=p?p.offsetWidth:0,m=!1;const b=s.children.length-(n.tail?1:0);for(let _=0;_<b-1;++_){if(_<0)continue;const y=d[_];if(m){y.hasAttribute(mt)||y.setAttribute(mt,"");continue}else y.hasAttribute(mt)&&y.removeAttribute(mt);const k=y.offsetWidth;if(g+=k,h[_]=k,g>f){const{updateCounter:D}=e;for(let S=_;S>=0;--S){const A=b-1-S;D!==void 0?D(A):c.textContent=`${A}`;const w=c.offsetWidth;if(g-=h[S],g+w<=f||S===0){m=!0,_=S-1,p&&(_===-1?(p.style.maxWidth=`${f-w}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:I}=e;I&&I(A);break}}}}const{onUpdateOverflow:v}=e;m?v!==void 0&&v(!0):(v!==void 0&&v(!1),c.setAttribute(mt,""))}const i=oo();return vv.mount({id:"vueuc/overflow",head:!0,anchorMetaName:B0,ssr:i}),Mn(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:o}},render(){const{$slots:e}=this;return ei(()=>this.sync({showAllItemsBeforeCalculate:!1})),E("div",{class:"v-overflow",ref:"selfRef"},[pu(e,"default"),e.counter?e.counter():E("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function V0(e){return e instanceof HTMLElement}function W0(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(V0(t)&&(G0(t)||W0(t)))return!0}return!1}function q0(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(V0(t)&&(G0(t)||q0(t)))return!0}return!1}function G0(e){if(!yv(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function yv(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"SELECT":case"TEXTAREA":return!0;default:return!1}}let fo=[];const Cv=le({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=E0(),t=re(null),r=re(null);let o=!1,i=!1;const u=typeof document>"u"?null:document.activeElement;function s(){return fo[fo.length-1]===n}function l(m){var b;m.code==="Escape"&&s()&&((b=e.onEsc)===null||b===void 0||b.call(e,m))}Mn(()=>{sn(()=>e.active,m=>{m?(d(),tn("keydown",document,l)):(We("keydown",document,l),o&&f())},{immediate:!0})}),Kn(()=>{We("keydown",document,l),o&&f()});function a(m){if(!i&&s()){const b=c();if(b===null||b.contains(Ui(m)))return;h("first")}}function c(){const m=t.value;if(m===null)return null;let b=m;for(;b=b.nextSibling,!(b===null||b instanceof Element&&b.tagName==="DIV"););return b}function d(){var m;if(!e.disabled){if(fo.push(n),e.autoFocus){const{initialFocusTo:b}=e;b===void 0?h("first"):(m=nc(b))===null||m===void 0||m.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",a,!0)}}function f(){var m;if(e.disabled||(document.removeEventListener("focus",a,!0),fo=fo.filter(v=>v!==n),s()))return;const{finalFocusTo:b}=e;b!==void 0?(m=nc(b))===null||m===void 0||m.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&u instanceof HTMLElement&&(i=!0,u.focus({preventScroll:!0}),i=!1)}function h(m){if(s()&&e.active){const b=t.value,v=r.value;if(b!==null&&v!==null){const _=c();if(_==null||_===v){i=!0,b.focus({preventScroll:!0}),i=!1;return}i=!0;const y=m==="first"?W0(_):q0(_);i=!1,y||(i=!0,b.focus({preventScroll:!0}),i=!1)}}}function p(m){if(i)return;const b=c();b!==null&&(m.relatedTarget!==null&&b.contains(m.relatedTarget)?h("last"):h("first"))}function g(m){i||(m.relatedTarget!==null&&m.relatedTarget===t.value?h("last"):h("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:g}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return E(Be,null,[E("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),E("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function Ms(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const _v=/^(\d|\.)+$/,gc=/(\d|\.)+/;function Jt(e,{c:n=1,offset:t=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+t)*n;return o===0?"0":`${o}px`}else if(typeof e=="string")if(_v.test(e)){const o=(Number(e)+t)*n;return r?o===0?"0":`${o}px`:`${o}`}else{const o=gc.exec(e);return o?e.replace(gc,String((Number(o[0])+t)*n)):e}return e}function bc(e){const{left:n,right:t,top:r,bottom:o}=fr(e);return`${r} ${n} ${o} ${t}`}let Qu;function wv(){return Qu===void 0&&(Qu=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Qu}function Uo(e,n){console.error(`[naive/${e}]: ${n}`)}function Z0(e,n){throw new Error(`[naive/${e}]: ${n}`)}function Xe(e,...n){if(Array.isArray(e))e.forEach(t=>Xe(t,...n));else return e(...n)}function kv(e){return n=>{n?e.value=n.$el:e.value=null}}function Ns(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(yn(String(r)));return}if(Array.isArray(r)){Ns(r,n,t);return}if(r.type===Be){if(r.children===null)return;Array.isArray(r.children)&&Ns(r.children,n,t)}else{if(r.type===nn&&n)return;t.push(r)}}}),t}function Sv(e,n="default",t=void 0){const r=e[n];if(!r)return Uo("getFirstSlotVNode",`slot[${n}] is empty`),null;const o=Ns(r(t));return o.length===1?o[0]:(Uo("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function To(e,n=[],t){const r={};return n.forEach(o=>{r[o]=e[o]}),Object.assign(r,t)}function Fl(e){return Object.keys(e)}function lt(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?yn(e):typeof e=="number"?yn(String(e)):null}function qn(e){return e.some(n=>Xr(n)?!(n.type===nn||n.type===Be&&!qn(n.children)):!0)?e:null}function Ls(e,n){return e&&qn(e())||n()}function V7(e,n,t){return e&&qn(e(n))||t(n)}function Dn(e,n){const t=e&&qn(e());return n(t||null)}function mc(e){return!(e&&qn(e()))}const vc=le({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),zt="n-config-provider",js="n";function wn(e={},n={defaultBordered:!0}){const t=me(zt,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:R(()=>{var r,o;const{bordered:i}=e;return i!==void 0?i:(o=(r=t==null?void 0:t.mergedBorderedRef.value)!==null&&r!==void 0?r:n.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:t?t.mergedClsPrefixRef:ff(js),namespaceRef:R(()=>t==null?void 0:t.mergedNamespaceRef.value)}}function Vn(e,n,t,r){t||Z0("useThemeClass","cssVarsRef is not passed");const o=me(zt,null),i=o==null?void 0:o.mergedThemeHashRef,u=o==null?void 0:o.styleMountTarget,s=re(""),l=oo();let a;const c=`__${e}`,d=()=>{let f=c;const h=n?n.value:void 0,p=i==null?void 0:i.value;p&&(f+=`-${p}`),h&&(f+=`-${h}`);const{themeOverrides:g,builtinThemeOverrides:m}=r;g&&(f+=`-${No(JSON.stringify(g))}`),m&&(f+=`-${No(JSON.stringify(m))}`),s.value=f,a=()=>{const b=t.value;let v="";for(const _ in b)v+=`${_}: ${b[_]};`;L(`.${f}`,v).mount({id:f,ssr:l,parent:u}),a=void 0}};return Tt(()=>{d()}),{themeClass:s,onRender:()=>{a==null||a()}}}var X0=typeof global=="object"&&global&&global.Object===Object&&global,Ev=typeof self=="object"&&self&&self.Object===Object&&self,ft=X0||Ev||Function("return this")(),er=ft.Symbol,Y0=Object.prototype,Av=Y0.hasOwnProperty,Tv=Y0.toString,ho=er?er.toStringTag:void 0;function Dv(e){var n=Av.call(e,ho),t=e[ho];try{e[ho]=void 0;var r=!0}catch{}var o=Tv.call(e);return r&&(n?e[ho]=t:delete e[ho]),o}var zv=Object.prototype,Fv=zv.toString;function Iv(e){return Fv.call(e)}var Pv="[object Null]",Rv="[object Undefined]",xc=er?er.toStringTag:void 0;function Fr(e){return e==null?e===void 0?Rv:Pv:xc&&xc in Object(e)?Dv(e):Iv(e)}function nr(e){return e!=null&&typeof e=="object"}var Ov="[object Symbol]";function Il(e){return typeof e=="symbol"||nr(e)&&Fr(e)==Ov}function J0(e,n){for(var t=-1,r=e==null?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o}var Un=Array.isArray,yc=er?er.prototype:void 0,Cc=yc?yc.toString:void 0;function Q0(e){if(typeof e=="string")return e;if(Un(e))return J0(e,Q0)+"";if(Il(e))return Cc?Cc.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function rr(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Pl(e){return e}var $v="[object AsyncFunction]",Bv="[object Function]",Mv="[object GeneratorFunction]",Nv="[object Proxy]";function Rl(e){if(!rr(e))return!1;var n=Fr(e);return n==Bv||n==Mv||n==$v||n==Nv}var es=ft["__core-js_shared__"],_c=function(){var e=/[^.]+$/.exec(es&&es.keys&&es.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Lv(e){return!!_c&&_c in e}var jv=Function.prototype,Hv=jv.toString;function Ir(e){if(e!=null){try{return Hv.call(e)}catch{}try{return e+""}catch{}}return""}var Uv=/[\\^$.*+?()[\]{}|]/g,Kv=/^\[object .+?Constructor\]$/,Vv=Function.prototype,Wv=Object.prototype,qv=Vv.toString,Gv=Wv.hasOwnProperty,Zv=RegExp("^"+qv.call(Gv).replace(Uv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xv(e){if(!rr(e)||Lv(e))return!1;var n=Rl(e)?Zv:Kv;return n.test(Ir(e))}function Yv(e,n){return e==null?void 0:e[n]}function Pr(e,n){var t=Yv(e,n);return Xv(t)?t:void 0}var Hs=Pr(ft,"WeakMap"),wc=Object.create,Jv=function(){function e(){}return function(n){if(!rr(n))return{};if(wc)return wc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function Qv(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function e2(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var n2=800,t2=16,r2=Date.now;function o2(e){var n=0,t=0;return function(){var r=r2(),o=t2-(r-t);if(t=r,o>0){if(++n>=n2)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function i2(e){return function(){return e}}var Wi=function(){try{var e=Pr(Object,"defineProperty");return e({},"",{}),e}catch{}}(),u2=Wi?function(e,n){return Wi(e,"toString",{configurable:!0,enumerable:!1,value:i2(n),writable:!0})}:Pl,s2=o2(u2),l2=9007199254740991,a2=/^(?:0|[1-9]\d*)$/;function Ol(e,n){var t=typeof e;return n=n??l2,!!n&&(t=="number"||t!="symbol"&&a2.test(e))&&e>-1&&e%1==0&&e<n}function $l(e,n,t){n=="__proto__"&&Wi?Wi(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function oi(e,n){return e===n||e!==e&&n!==n}var c2=Object.prototype,d2=c2.hasOwnProperty;function f2(e,n,t){var r=e[n];(!(d2.call(e,n)&&oi(r,t))||t===void 0&&!(n in e))&&$l(e,n,t)}function h2(e,n,t,r){var o=!t;t||(t={});for(var i=-1,u=n.length;++i<u;){var s=n[i],l=void 0;l===void 0&&(l=e[s]),o?$l(t,s,l):f2(t,s,l)}return t}var kc=Math.max;function p2(e,n,t){return n=kc(n===void 0?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=kc(r.length-n,0),u=Array(i);++o<i;)u[o]=r[n+o];o=-1;for(var s=Array(n+1);++o<n;)s[o]=r[o];return s[n]=t(u),Qv(e,this,s)}}function g2(e,n){return s2(p2(e,n,Pl),e+"")}var b2=9007199254740991;function Bl(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=b2}function io(e){return e!=null&&Bl(e.length)&&!Rl(e)}function m2(e,n,t){if(!rr(t))return!1;var r=typeof n;return(r=="number"?io(t)&&Ol(n,t.length):r=="string"&&n in t)?oi(t[n],e):!1}function v2(e){return g2(function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,u=o>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,u&&m2(t[0],t[1],u)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var s=t[r];s&&e(n,s,r,i)}return n})}var x2=Object.prototype;function Ml(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||x2;return e===t}function y2(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var C2="[object Arguments]";function Sc(e){return nr(e)&&Fr(e)==C2}var eh=Object.prototype,_2=eh.hasOwnProperty,w2=eh.propertyIsEnumerable,qi=Sc(function(){return arguments}())?Sc:function(e){return nr(e)&&_2.call(e,"callee")&&!w2.call(e,"callee")};function k2(){return!1}var nh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ec=nh&&typeof module=="object"&&module&&!module.nodeType&&module,S2=Ec&&Ec.exports===nh,Ac=S2?ft.Buffer:void 0,E2=Ac?Ac.isBuffer:void 0,Gi=E2||k2,A2="[object Arguments]",T2="[object Array]",D2="[object Boolean]",z2="[object Date]",F2="[object Error]",I2="[object Function]",P2="[object Map]",R2="[object Number]",O2="[object Object]",$2="[object RegExp]",B2="[object Set]",M2="[object String]",N2="[object WeakMap]",L2="[object ArrayBuffer]",j2="[object DataView]",H2="[object Float32Array]",U2="[object Float64Array]",K2="[object Int8Array]",V2="[object Int16Array]",W2="[object Int32Array]",q2="[object Uint8Array]",G2="[object Uint8ClampedArray]",Z2="[object Uint16Array]",X2="[object Uint32Array]",Le={};Le[H2]=Le[U2]=Le[K2]=Le[V2]=Le[W2]=Le[q2]=Le[G2]=Le[Z2]=Le[X2]=!0;Le[A2]=Le[T2]=Le[L2]=Le[D2]=Le[j2]=Le[z2]=Le[F2]=Le[I2]=Le[P2]=Le[R2]=Le[O2]=Le[$2]=Le[B2]=Le[M2]=Le[N2]=!1;function Y2(e){return nr(e)&&Bl(e.length)&&!!Le[Fr(e)]}function J2(e){return function(n){return e(n)}}var th=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Do=th&&typeof module=="object"&&module&&!module.nodeType&&module,Q2=Do&&Do.exports===th,ns=Q2&&X0.process,Tc=function(){try{var e=Do&&Do.require&&Do.require("util").types;return e||ns&&ns.binding&&ns.binding("util")}catch{}}(),Dc=Tc&&Tc.isTypedArray,Nl=Dc?J2(Dc):Y2,ex=Object.prototype,nx=ex.hasOwnProperty;function rh(e,n){var t=Un(e),r=!t&&qi(e),o=!t&&!r&&Gi(e),i=!t&&!r&&!o&&Nl(e),u=t||r||o||i,s=u?y2(e.length,String):[],l=s.length;for(var a in e)(n||nx.call(e,a))&&!(u&&(a=="length"||o&&(a=="offset"||a=="parent")||i&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||Ol(a,l)))&&s.push(a);return s}function oh(e,n){return function(t){return e(n(t))}}var tx=oh(Object.keys,Object),rx=Object.prototype,ox=rx.hasOwnProperty;function ix(e){if(!Ml(e))return tx(e);var n=[];for(var t in Object(e))ox.call(e,t)&&t!="constructor"&&n.push(t);return n}function Ll(e){return io(e)?rh(e):ix(e)}function ux(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var sx=Object.prototype,lx=sx.hasOwnProperty;function ax(e){if(!rr(e))return ux(e);var n=Ml(e),t=[];for(var r in e)r=="constructor"&&(n||!lx.call(e,r))||t.push(r);return t}function ih(e){return io(e)?rh(e,!0):ax(e)}var cx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dx=/^\w*$/;function jl(e,n){if(Un(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Il(e)?!0:dx.test(e)||!cx.test(e)||n!=null&&e in Object(n)}var Ko=Pr(Object,"create");function fx(){this.__data__=Ko?Ko(null):{},this.size=0}function hx(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var px="__lodash_hash_undefined__",gx=Object.prototype,bx=gx.hasOwnProperty;function mx(e){var n=this.__data__;if(Ko){var t=n[e];return t===px?void 0:t}return bx.call(n,e)?n[e]:void 0}var vx=Object.prototype,xx=vx.hasOwnProperty;function yx(e){var n=this.__data__;return Ko?n[e]!==void 0:xx.call(n,e)}var Cx="__lodash_hash_undefined__";function _x(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ko&&n===void 0?Cx:n,this}function Ar(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Ar.prototype.clear=fx;Ar.prototype.delete=hx;Ar.prototype.get=mx;Ar.prototype.has=yx;Ar.prototype.set=_x;function wx(){this.__data__=[],this.size=0}function xu(e,n){for(var t=e.length;t--;)if(oi(e[t][0],n))return t;return-1}var kx=Array.prototype,Sx=kx.splice;function Ex(e){var n=this.__data__,t=xu(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Sx.call(n,t,1),--this.size,!0}function Ax(e){var n=this.__data__,t=xu(n,e);return t<0?void 0:n[t][1]}function Tx(e){return xu(this.__data__,e)>-1}function Dx(e,n){var t=this.__data__,r=xu(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Pt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Pt.prototype.clear=wx;Pt.prototype.delete=Ex;Pt.prototype.get=Ax;Pt.prototype.has=Tx;Pt.prototype.set=Dx;var Vo=Pr(ft,"Map");function zx(){this.size=0,this.__data__={hash:new Ar,map:new(Vo||Pt),string:new Ar}}function Fx(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function yu(e,n){var t=e.__data__;return Fx(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Ix(e){var n=yu(this,e).delete(e);return this.size-=n?1:0,n}function Px(e){return yu(this,e).get(e)}function Rx(e){return yu(this,e).has(e)}function Ox(e,n){var t=yu(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Rt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Rt.prototype.clear=zx;Rt.prototype.delete=Ix;Rt.prototype.get=Px;Rt.prototype.has=Rx;Rt.prototype.set=Ox;var $x="Expected a function";function Hl(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError($x);var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var u=e.apply(this,r);return t.cache=i.set(o,u)||i,u};return t.cache=new(Hl.Cache||Rt),t}Hl.Cache=Rt;var Bx=500;function Mx(e){var n=Hl(e,function(r){return t.size===Bx&&t.clear(),r}),t=n.cache;return n}var Nx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lx=/\\(\\)?/g,jx=Mx(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Nx,function(t,r,o,i){n.push(o?i.replace(Lx,"$1"):r||t)}),n});function uh(e){return e==null?"":Q0(e)}function sh(e,n){return Un(e)?e:jl(e,n)?[e]:jx(uh(e))}function Cu(e){if(typeof e=="string"||Il(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function lh(e,n){n=sh(n,e);for(var t=0,r=n.length;e!=null&&t<r;)e=e[Cu(n[t++])];return t&&t==r?e:void 0}function Hx(e,n,t){var r=e==null?void 0:lh(e,n);return r===void 0?t:r}function Ux(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var ah=oh(Object.getPrototypeOf,Object),Kx="[object Object]",Vx=Function.prototype,Wx=Object.prototype,ch=Vx.toString,qx=Wx.hasOwnProperty,Gx=ch.call(Object);function Zx(e){if(!nr(e)||Fr(e)!=Kx)return!1;var n=ah(e);if(n===null)return!0;var t=qx.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&ch.call(t)==Gx}function Xx(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),t=t>o?o:t,t<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+n];return i}function Yx(e,n,t){var r=e.length;return t=t===void 0?r:t,!n&&t>=r?e:Xx(e,n,t)}var Jx="\\ud800-\\udfff",Qx="\\u0300-\\u036f",e3="\\ufe20-\\ufe2f",n3="\\u20d0-\\u20ff",t3=Qx+e3+n3,r3="\\ufe0e\\ufe0f",o3="\\u200d",i3=RegExp("["+o3+Jx+t3+r3+"]");function dh(e){return i3.test(e)}function u3(e){return e.split("")}var fh="\\ud800-\\udfff",s3="\\u0300-\\u036f",l3="\\ufe20-\\ufe2f",a3="\\u20d0-\\u20ff",c3=s3+l3+a3,d3="\\ufe0e\\ufe0f",f3="["+fh+"]",Us="["+c3+"]",Ks="\\ud83c[\\udffb-\\udfff]",h3="(?:"+Us+"|"+Ks+")",hh="[^"+fh+"]",ph="(?:\\ud83c[\\udde6-\\uddff]){2}",gh="[\\ud800-\\udbff][\\udc00-\\udfff]",p3="\\u200d",bh=h3+"?",mh="["+d3+"]?",g3="(?:"+p3+"(?:"+[hh,ph,gh].join("|")+")"+mh+bh+")*",b3=mh+bh+g3,m3="(?:"+[hh+Us+"?",Us,ph,gh,f3].join("|")+")",v3=RegExp(Ks+"(?="+Ks+")|"+m3+b3,"g");function x3(e){return e.match(v3)||[]}function y3(e){return dh(e)?x3(e):u3(e)}function C3(e){return function(n){n=uh(n);var t=dh(n)?y3(n):void 0,r=t?t[0]:n.charAt(0),o=t?Yx(t,1).join(""):n.slice(1);return r[e]()+o}}var _3=C3("toUpperCase");function w3(){this.__data__=new Pt,this.size=0}function k3(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function S3(e){return this.__data__.get(e)}function E3(e){return this.__data__.has(e)}var A3=200;function T3(e,n){var t=this.__data__;if(t instanceof Pt){var r=t.__data__;if(!Vo||r.length<A3-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Rt(r)}return t.set(e,n),this.size=t.size,this}function at(e){var n=this.__data__=new Pt(e);this.size=n.size}at.prototype.clear=w3;at.prototype.delete=k3;at.prototype.get=S3;at.prototype.has=E3;at.prototype.set=T3;var vh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,zc=vh&&typeof module=="object"&&module&&!module.nodeType&&module,D3=zc&&zc.exports===vh,Fc=D3?ft.Buffer:void 0;Fc&&Fc.allocUnsafe;function z3(e,n){return e.slice()}function F3(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var u=e[t];n(u,t,e)&&(i[o++]=u)}return i}function I3(){return[]}var P3=Object.prototype,R3=P3.propertyIsEnumerable,Ic=Object.getOwnPropertySymbols,O3=Ic?function(e){return e==null?[]:(e=Object(e),F3(Ic(e),function(n){return R3.call(e,n)}))}:I3;function $3(e,n,t){var r=n(e);return Un(e)?r:Ux(r,t(e))}function Pc(e){return $3(e,Ll,O3)}var Vs=Pr(ft,"DataView"),Ws=Pr(ft,"Promise"),qs=Pr(ft,"Set"),Rc="[object Map]",B3="[object Object]",Oc="[object Promise]",$c="[object Set]",Bc="[object WeakMap]",Mc="[object DataView]",M3=Ir(Vs),N3=Ir(Vo),L3=Ir(Ws),j3=Ir(qs),H3=Ir(Hs),Vt=Fr;(Vs&&Vt(new Vs(new ArrayBuffer(1)))!=Mc||Vo&&Vt(new Vo)!=Rc||Ws&&Vt(Ws.resolve())!=Oc||qs&&Vt(new qs)!=$c||Hs&&Vt(new Hs)!=Bc)&&(Vt=function(e){var n=Fr(e),t=n==B3?e.constructor:void 0,r=t?Ir(t):"";if(r)switch(r){case M3:return Mc;case N3:return Rc;case L3:return Oc;case j3:return $c;case H3:return Bc}return n});var Zi=ft.Uint8Array;function U3(e){var n=new e.constructor(e.byteLength);return new Zi(n).set(new Zi(e)),n}function K3(e,n){var t=U3(e.buffer);return new e.constructor(t,e.byteOffset,e.length)}function V3(e){return typeof e.constructor=="function"&&!Ml(e)?Jv(ah(e)):{}}var W3="__lodash_hash_undefined__";function q3(e){return this.__data__.set(e,W3),this}function G3(e){return this.__data__.has(e)}function Xi(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Rt;++n<t;)this.add(e[n])}Xi.prototype.add=Xi.prototype.push=q3;Xi.prototype.has=G3;function Z3(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function X3(e,n){return e.has(n)}var Y3=1,J3=2;function xh(e,n,t,r,o,i){var u=t&Y3,s=e.length,l=n.length;if(s!=l&&!(u&&l>s))return!1;var a=i.get(e),c=i.get(n);if(a&&c)return a==n&&c==e;var d=-1,f=!0,h=t&J3?new Xi:void 0;for(i.set(e,n),i.set(n,e);++d<s;){var p=e[d],g=n[d];if(r)var m=u?r(g,p,d,n,e,i):r(p,g,d,e,n,i);if(m!==void 0){if(m)continue;f=!1;break}if(h){if(!Z3(n,function(b,v){if(!X3(h,v)&&(p===b||o(p,b,t,r,i)))return h.push(v)})){f=!1;break}}else if(!(p===g||o(p,g,t,r,i))){f=!1;break}}return i.delete(e),i.delete(n),f}function Q3(e){var n=-1,t=Array(e.size);return e.forEach(function(r,o){t[++n]=[o,r]}),t}function ey(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var ny=1,ty=2,ry="[object Boolean]",oy="[object Date]",iy="[object Error]",uy="[object Map]",sy="[object Number]",ly="[object RegExp]",ay="[object Set]",cy="[object String]",dy="[object Symbol]",fy="[object ArrayBuffer]",hy="[object DataView]",Nc=er?er.prototype:void 0,ts=Nc?Nc.valueOf:void 0;function py(e,n,t,r,o,i,u){switch(t){case hy:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case fy:return!(e.byteLength!=n.byteLength||!i(new Zi(e),new Zi(n)));case ry:case oy:case sy:return oi(+e,+n);case iy:return e.name==n.name&&e.message==n.message;case ly:case cy:return e==n+"";case uy:var s=Q3;case ay:var l=r&ny;if(s||(s=ey),e.size!=n.size&&!l)return!1;var a=u.get(e);if(a)return a==n;r|=ty,u.set(e,n);var c=xh(s(e),s(n),r,o,i,u);return u.delete(e),c;case dy:if(ts)return ts.call(e)==ts.call(n)}return!1}var gy=1,by=Object.prototype,my=by.hasOwnProperty;function vy(e,n,t,r,o,i){var u=t&gy,s=Pc(e),l=s.length,a=Pc(n),c=a.length;if(l!=c&&!u)return!1;for(var d=l;d--;){var f=s[d];if(!(u?f in n:my.call(n,f)))return!1}var h=i.get(e),p=i.get(n);if(h&&p)return h==n&&p==e;var g=!0;i.set(e,n),i.set(n,e);for(var m=u;++d<l;){f=s[d];var b=e[f],v=n[f];if(r)var _=u?r(v,b,f,n,e,i):r(b,v,f,e,n,i);if(!(_===void 0?b===v||o(b,v,t,r,i):_)){g=!1;break}m||(m=f=="constructor")}if(g&&!m){var y=e.constructor,k=n.constructor;y!=k&&"constructor"in e&&"constructor"in n&&!(typeof y=="function"&&y instanceof y&&typeof k=="function"&&k instanceof k)&&(g=!1)}return i.delete(e),i.delete(n),g}var xy=1,Lc="[object Arguments]",jc="[object Array]",_i="[object Object]",yy=Object.prototype,Hc=yy.hasOwnProperty;function Cy(e,n,t,r,o,i){var u=Un(e),s=Un(n),l=u?jc:Vt(e),a=s?jc:Vt(n);l=l==Lc?_i:l,a=a==Lc?_i:a;var c=l==_i,d=a==_i,f=l==a;if(f&&Gi(e)){if(!Gi(n))return!1;u=!0,c=!1}if(f&&!c)return i||(i=new at),u||Nl(e)?xh(e,n,t,r,o,i):py(e,n,l,t,r,o,i);if(!(t&xy)){var h=c&&Hc.call(e,"__wrapped__"),p=d&&Hc.call(n,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?n.value():n;return i||(i=new at),o(g,m,t,r,i)}}return f?(i||(i=new at),vy(e,n,t,r,o,i)):!1}function Ul(e,n,t,r,o){return e===n?!0:e==null||n==null||!nr(e)&&!nr(n)?e!==e&&n!==n:Cy(e,n,t,r,Ul,o)}var _y=1,wy=2;function ky(e,n,t,r){var o=t.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var u=t[o];if(u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){u=t[o];var s=u[0],l=e[s],a=u[1];if(u[2]){if(l===void 0&&!(s in e))return!1}else{var c=new at,d;if(!(d===void 0?Ul(a,l,_y|wy,r,c):d))return!1}}return!0}function yh(e){return e===e&&!rr(e)}function Sy(e){for(var n=Ll(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,yh(o)]}return n}function Ch(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function Ey(e){var n=Sy(e);return n.length==1&&n[0][2]?Ch(n[0][0],n[0][1]):function(t){return t===e||ky(t,e,n)}}function Ay(e,n){return e!=null&&n in Object(e)}function Ty(e,n,t){n=sh(n,e);for(var r=-1,o=n.length,i=!1;++r<o;){var u=Cu(n[r]);if(!(i=e!=null&&t(e,u)))break;e=e[u]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&Bl(o)&&Ol(u,o)&&(Un(e)||qi(e)))}function Dy(e,n){return e!=null&&Ty(e,n,Ay)}var zy=1,Fy=2;function Iy(e,n){return jl(e)&&yh(n)?Ch(Cu(e),n):function(t){var r=Hx(t,e);return r===void 0&&r===n?Dy(t,e):Ul(n,r,zy|Fy)}}function Py(e){return function(n){return n==null?void 0:n[e]}}function Ry(e){return function(n){return lh(n,e)}}function Oy(e){return jl(e)?Py(Cu(e)):Ry(e)}function $y(e){return typeof e=="function"?e:e==null?Pl:typeof e=="object"?Un(e)?Iy(e[0],e[1]):Ey(e):Oy(e)}function By(e){return function(n,t,r){for(var o=-1,i=Object(n),u=r(n),s=u.length;s--;){var l=u[++o];if(t(i[l],l,i)===!1)break}return n}}var _h=By();function My(e,n){return e&&_h(e,n,Ll)}function Ny(e,n){return function(t,r){if(t==null)return t;if(!io(t))return e(t,r);for(var o=t.length,i=-1,u=Object(t);++i<o&&r(u[i],i,u)!==!1;);return t}}var Ly=Ny(My);function Gs(e,n,t){(t!==void 0&&!oi(e[n],t)||t===void 0&&!(n in e))&&$l(e,n,t)}function jy(e){return nr(e)&&io(e)}function Zs(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function Hy(e){return h2(e,ih(e))}function Uy(e,n,t,r,o,i,u){var s=Zs(e,t),l=Zs(n,t),a=u.get(l);if(a){Gs(e,t,a);return}var c=i?i(s,l,t+"",e,n,u):void 0,d=c===void 0;if(d){var f=Un(l),h=!f&&Gi(l),p=!f&&!h&&Nl(l);c=l,f||h||p?Un(s)?c=s:jy(s)?c=e2(s):h?(d=!1,c=z3(l)):p?(d=!1,c=K3(l)):c=[]:Zx(l)||qi(l)?(c=s,qi(s)?c=Hy(s):(!rr(s)||Rl(s))&&(c=V3(l))):d=!1}d&&(u.set(l,c),o(c,l,r,i,u),u.delete(l)),Gs(e,t,c)}function wh(e,n,t,r,o){e!==n&&_h(n,function(i,u){if(o||(o=new at),rr(i))Uy(e,n,u,t,wh,r,o);else{var s=r?r(Zs(e,u),i,u+"",e,n,o):void 0;s===void 0&&(s=i),Gs(e,u,s)}},ih)}function Ky(e,n){var t=-1,r=io(e)?Array(e.length):[];return Ly(e,function(o,i,u){r[++t]=n(o,i,u)}),r}function Vy(e,n){var t=Un(e)?J0:Ky;return t(e,$y(n))}var vo=v2(function(e,n,t){wh(e,n,t)});const Wo="naive-ui-style";function _u(e,n,t){if(!n)return;const r=oo(),o=R(()=>{const{value:s}=n;if(!s)return;const l=s[e];if(l)return l}),i=me(zt,null),u=()=>{Tt(()=>{const{value:s}=t,l=`${s}${e}Rtl`;if(Yb(l,r))return;const{value:a}=o;a&&a.style.mount({id:l,head:!0,anchorMetaName:Wo,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget})})};return r?u():ni(u),o}const ii={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Wy,fontFamily:qy,lineHeight:Gy}=ii,kh=L("body",`
 margin: 0;
 font-size: ${Wy};
 font-family: ${qy};
 line-height: ${Gy};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[L("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function Sh(e,n,t){if(!n)return;const r=oo(),o=me(zt,null),i=()=>{const u=t.value;n.mount({id:u===void 0?e:u+e,head:!0,anchorMetaName:Wo,props:{bPrefix:u?`.${u}-`:void 0},ssr:r,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||kh.mount({id:"n-global",head:!0,anchorMetaName:Wo,ssr:r,parent:o==null?void 0:o.styleMountTarget})};r?i():ni(i)}function W7(e){return e}function Fe(e,n,t,r,o,i){const u=oo(),s=me(zt,null);if(t){const a=()=>{const c=i==null?void 0:i.value;t.mount({id:c===void 0?n:c+n,head:!0,props:{bPrefix:c?`.${c}-`:void 0},anchorMetaName:Wo,ssr:u,parent:s==null?void 0:s.styleMountTarget}),s!=null&&s.preflightStyleDisabled||kh.mount({id:"n-global",head:!0,anchorMetaName:Wo,ssr:u,parent:s==null?void 0:s.styleMountTarget})};u?a():ni(a)}return R(()=>{var a;const{theme:{common:c,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=o,{common:g,peers:m}=h,{common:b=void 0,[e]:{common:v=void 0,self:_=void 0,peers:y={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:k=void 0,[e]:D={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:S,peers:A={}}=D,w=vo({},c||v||b||r.common,k,S,g),I=vo((a=d||_||r.self)===null||a===void 0?void 0:a(w),p,D,h);return{common:w,self:I,peers:vo({},r.peers,y,f),peerOverrides:vo({},p.peers,A,m)}})}Fe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Zy=V("base-icon",`
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
 `)]),Kl=le({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Sh("-base-icon",Zy,je(e,"clsPrefix"))},render(){return E("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function Xy(e,n){const t=le({render(){return n()}});return le({name:_3(e),setup(){var r;const o=(r=me(zt,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var i;const u=(i=o==null?void 0:o.value)===null||i===void 0?void 0:i[e];return u?u():E(t,null)}}})}const Yy=le({name:"ChevronDownFilled",render(){return E("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Eh=le({name:"ChevronRight",render(){return E("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Jy=Xy("close",()=>E("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Qy=V("base-close",`
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
 `),on("disabled",[L("&:hover",`
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
 `)])]),Ah=le({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Sh("-base-close",Qy,je(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:r,round:o,isButtonTag:i}=e;return E(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,r&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,o&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},E(Kl,{clsPrefix:n},{default:()=>E(Jy,null)}))}}}),e6=le({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function r(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function o(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function u(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:a,mode:c}=e,d=s?_b:Sr,f={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:a,onEnter:i,onAfterEnter:u,onBeforeLeave:t,onLeave:r,onAfterLeave:o};return s||(f.mode=c),E(d,f,n)}}}),{cubicBezierEaseInOut:Uc}=ii;function n6({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=Uc,leaveCubicBezier:o=Uc}={}){return[L(`&.${e}-transition-enter-active`,{transition:`all ${n} ${r}!important`}),L(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),L(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),L(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const he={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},t6=Er(he.neutralBase),Th=Er(he.neutralInvertBase),r6=`rgba(${Th.slice(0,3).join(", ")}, `;function Kc(e){return`${r6+String(e)})`}function fn(e){const n=Array.from(Th);return n[3]=Number(e),vr(t6,n)}const Fn=Object.assign(Object.assign({name:"common"},ii),{baseColor:he.neutralBase,primaryColor:he.primaryDefault,primaryColorHover:he.primaryHover,primaryColorPressed:he.primaryActive,primaryColorSuppl:he.primarySuppl,infoColor:he.infoDefault,infoColorHover:he.infoHover,infoColorPressed:he.infoActive,infoColorSuppl:he.infoSuppl,successColor:he.successDefault,successColorHover:he.successHover,successColorPressed:he.successActive,successColorSuppl:he.successSuppl,warningColor:he.warningDefault,warningColorHover:he.warningHover,warningColorPressed:he.warningActive,warningColorSuppl:he.warningSuppl,errorColor:he.errorDefault,errorColorHover:he.errorHover,errorColorPressed:he.errorActive,errorColorSuppl:he.errorSuppl,textColorBase:he.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:fn(he.alpha4),placeholderColor:fn(he.alpha4),placeholderColorDisabled:fn(he.alpha5),iconColor:fn(he.alpha4),iconColorHover:mi(fn(he.alpha4),{lightness:.75}),iconColorPressed:mi(fn(he.alpha4),{lightness:.9}),iconColorDisabled:fn(he.alpha5),opacity1:he.alpha1,opacity2:he.alpha2,opacity3:he.alpha3,opacity4:he.alpha4,opacity5:he.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:fn(Number(he.alphaClose)),closeIconColorHover:fn(Number(he.alphaClose)),closeIconColorPressed:fn(Number(he.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:fn(he.alpha4),clearColorHover:mi(fn(he.alpha4),{lightness:.75}),clearColorPressed:mi(fn(he.alpha4),{lightness:.9}),scrollbarColor:Kc(he.alphaScrollbar),scrollbarColorHover:Kc(he.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:fn(he.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:he.neutralPopover,tableColor:he.neutralCard,cardColor:he.neutralCard,modalColor:he.neutralModal,bodyColor:he.neutralBody,tagColor:"#eee",avatarColor:fn(he.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:fn(he.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:he.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),o6={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function i6(e){const{scrollbarColor:n,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:o,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},o6),{height:r,width:o,borderRadius:i,color:n,colorHover:t})}const Vl={name:"Scrollbar",common:Fn,self:i6},u6=V("scrollbar",`
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
 `,[n6(),L("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),s6=Object.assign(Object.assign({},Fe.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),wu=le({name:"Scrollbar",props:s6,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:r}=wn(e),o=_u("Scrollbar",r,n),i=re(null),u=re(null),s=re(null),l=re(null),a=re(null),c=re(null),d=re(null),f=re(null),h=re(null),p=re(null),g=re(null),m=re(0),b=re(0),v=re(!1),_=re(!1);let y=!1,k=!1,D,S,A=0,w=0,I=0,B=0;const T=Tm(),q=Fe("Scrollbar","-scrollbar",u6,Vl,e,n),G=R(()=>{const{value:W}=f,{value:se}=c,{value:be}=p;return W===null||se===null||be===null?0:Math.min(W,be*W/se+Za(q.value.self.width)*1.5)}),O=R(()=>`${G.value}px`),Y=R(()=>{const{value:W}=h,{value:se}=d,{value:be}=g;return W===null||se===null||be===null?0:be*W/se+Za(q.value.self.height)*1.5}),j=R(()=>`${Y.value}px`),Q=R(()=>{const{value:W}=f,{value:se}=m,{value:be}=c,{value:Ne}=p;if(W===null||be===null||Ne===null)return 0;{const Je=be-W;return Je?se/Je*(Ne-G.value):0}}),xe=R(()=>`${Q.value}px`),ke=R(()=>{const{value:W}=h,{value:se}=b,{value:be}=d,{value:Ne}=g;if(W===null||be===null||Ne===null)return 0;{const Je=be-W;return Je?se/Je*(Ne-Y.value):0}}),ee=R(()=>`${ke.value}px`),ne=R(()=>{const{value:W}=f,{value:se}=c;return W!==null&&se!==null&&se>W}),N=R(()=>{const{value:W}=h,{value:se}=d;return W!==null&&se!==null&&se>W}),pe=R(()=>{const{trigger:W}=e;return W==="none"||v.value}),_e=R(()=>{const{trigger:W}=e;return W==="none"||_.value}),Pe=R(()=>{const{container:W}=e;return W?W():u.value}),P=R(()=>{const{content:W}=e;return W?W():s.value}),oe=(W,se)=>{if(!e.scrollable)return;if(typeof W=="number"){C(W,se??0,0,!1,"auto");return}const{left:be,top:Ne,index:Je,elSize:An,position:Wn,behavior:Ve,el:Nn,debounce:$t=!0}=W;(be!==void 0||Ne!==void 0)&&C(be??0,Ne??0,0,!1,Ve),Nn!==void 0?C(0,Nn.offsetTop,Nn.offsetHeight,$t,Ve):Je!==void 0&&An!==void 0?C(0,Je*An,An,$t,Ve):Wn==="bottom"?C(0,Number.MAX_SAFE_INTEGER,0,!1,Ve):Wn==="top"&&C(0,0,0,!1,Ve)},F=Dl(()=>{e.container||oe({top:m.value,left:b.value})}),ae=()=>{F.isDeactivated||fe()},ye=W=>{if(F.isDeactivated)return;const{onResize:se}=e;se&&se(W),fe()},x=(W,se)=>{if(!e.scrollable)return;const{value:be}=Pe;be&&(typeof W=="object"?be.scrollBy(W):be.scrollBy(W,se||0))};function C(W,se,be,Ne,Je){const{value:An}=Pe;if(An){if(Ne){const{scrollTop:Wn,offsetHeight:Ve}=An;if(se>Wn){se+be<=Wn+Ve||An.scrollTo({left:W,top:se+be-Ve,behavior:Je});return}}An.scrollTo({left:W,top:se,behavior:Je})}}function z(){J(),Z(),fe()}function $(){H()}function H(){M(),te()}function M(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{_.value=!1},e.duration)}function te(){D!==void 0&&window.clearTimeout(D),D=window.setTimeout(()=>{v.value=!1},e.duration)}function J(){D!==void 0&&window.clearTimeout(D),v.value=!0}function Z(){S!==void 0&&window.clearTimeout(S),_.value=!0}function K(W){const{onScroll:se}=e;se&&se(W),de()}function de(){const{value:W}=Pe;W&&(m.value=W.scrollTop,b.value=W.scrollLeft*(o!=null&&o.value?-1:1))}function ie(){const{value:W}=P;W&&(c.value=W.offsetHeight,d.value=W.offsetWidth);const{value:se}=Pe;se&&(f.value=se.offsetHeight,h.value=se.offsetWidth);const{value:be}=a,{value:Ne}=l;be&&(g.value=be.offsetWidth),Ne&&(p.value=Ne.offsetHeight)}function ce(){const{value:W}=Pe;W&&(m.value=W.scrollTop,b.value=W.scrollLeft*(o!=null&&o.value?-1:1),f.value=W.offsetHeight,h.value=W.offsetWidth,c.value=W.scrollHeight,d.value=W.scrollWidth);const{value:se}=a,{value:be}=l;se&&(g.value=se.offsetWidth),be&&(p.value=be.offsetHeight)}function fe(){e.scrollable&&(e.useUnifiedContainer?ce():(ie(),de()))}function we(W){var se;return!(!((se=i.value)===null||se===void 0)&&se.contains(Ui(W)))}function Ie(W){W.preventDefault(),W.stopPropagation(),k=!0,tn("mousemove",window,Ee,!0),tn("mouseup",window,ln,!0),w=b.value,I=o!=null&&o.value?window.innerWidth-W.clientX:W.clientX}function Ee(W){if(!k)return;D!==void 0&&window.clearTimeout(D),S!==void 0&&window.clearTimeout(S);const{value:se}=h,{value:be}=d,{value:Ne}=Y;if(se===null||be===null)return;const An=(o!=null&&o.value?window.innerWidth-W.clientX-I:W.clientX-I)*(be-se)/(se-Ne),Wn=be-se;let Ve=w+An;Ve=Math.min(Wn,Ve),Ve=Math.max(Ve,0);const{value:Nn}=Pe;if(Nn){Nn.scrollLeft=Ve*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:$t}=e;$t&&$t(Ve)}}function ln(W){W.preventDefault(),W.stopPropagation(),We("mousemove",window,Ee,!0),We("mouseup",window,ln,!0),k=!1,fe(),we(W)&&H()}function dn(W){W.preventDefault(),W.stopPropagation(),y=!0,tn("mousemove",window,kn,!0),tn("mouseup",window,Sn,!0),A=m.value,B=W.clientY}function kn(W){if(!y)return;D!==void 0&&window.clearTimeout(D),S!==void 0&&window.clearTimeout(S);const{value:se}=f,{value:be}=c,{value:Ne}=G;if(se===null||be===null)return;const An=(W.clientY-B)*(be-se)/(se-Ne),Wn=be-se;let Ve=A+An;Ve=Math.min(Wn,Ve),Ve=Math.max(Ve,0);const{value:Nn}=Pe;Nn&&(Nn.scrollTop=Ve)}function Sn(W){W.preventDefault(),W.stopPropagation(),We("mousemove",window,kn,!0),We("mouseup",window,Sn,!0),y=!1,fe(),we(W)&&H()}Tt(()=>{const{value:W}=N,{value:se}=ne,{value:be}=n,{value:Ne}=a,{value:Je}=l;Ne&&(W?Ne.classList.remove(`${be}-scrollbar-rail--disabled`):Ne.classList.add(`${be}-scrollbar-rail--disabled`)),Je&&(se?Je.classList.remove(`${be}-scrollbar-rail--disabled`):Je.classList.add(`${be}-scrollbar-rail--disabled`))}),Mn(()=>{e.container||fe()}),Kn(()=>{D!==void 0&&window.clearTimeout(D),S!==void 0&&window.clearTimeout(S),We("mousemove",window,kn,!0),We("mouseup",window,Sn,!0)});const Ot=R(()=>{const{common:{cubicBezierEaseInOut:W},self:{color:se,colorHover:be,height:Ne,width:Je,borderRadius:An,railInsetHorizontalTop:Wn,railInsetHorizontalBottom:Ve,railInsetVerticalRight:Nn,railInsetVerticalLeft:$t,railColor:Hp}}=q.value,{top:Up,right:Kp,bottom:Vp,left:Wp}=fr(Wn),{top:qp,right:Gp,bottom:Zp,left:Xp}=fr(Ve),{top:Yp,right:Jp,bottom:Qp,left:e1}=fr(o!=null&&o.value?bc(Nn):Nn),{top:n1,right:t1,bottom:r1,left:o1}=fr(o!=null&&o.value?bc($t):$t);return{"--n-scrollbar-bezier":W,"--n-scrollbar-color":se,"--n-scrollbar-color-hover":be,"--n-scrollbar-border-radius":An,"--n-scrollbar-width":Je,"--n-scrollbar-height":Ne,"--n-scrollbar-rail-top-horizontal-top":Up,"--n-scrollbar-rail-right-horizontal-top":Kp,"--n-scrollbar-rail-bottom-horizontal-top":Vp,"--n-scrollbar-rail-left-horizontal-top":Wp,"--n-scrollbar-rail-top-horizontal-bottom":qp,"--n-scrollbar-rail-right-horizontal-bottom":Gp,"--n-scrollbar-rail-bottom-horizontal-bottom":Zp,"--n-scrollbar-rail-left-horizontal-bottom":Xp,"--n-scrollbar-rail-top-vertical-right":Yp,"--n-scrollbar-rail-right-vertical-right":Jp,"--n-scrollbar-rail-bottom-vertical-right":Qp,"--n-scrollbar-rail-left-vertical-right":e1,"--n-scrollbar-rail-top-vertical-left":n1,"--n-scrollbar-rail-right-vertical-left":t1,"--n-scrollbar-rail-bottom-vertical-left":r1,"--n-scrollbar-rail-left-vertical-left":o1,"--n-scrollbar-rail-color":Hp}}),gt=t?Vn("scrollbar",void 0,Ot,e):void 0;return Object.assign(Object.assign({},{scrollTo:oe,scrollBy:x,sync:fe,syncUnifiedContainer:ce,handleMouseEnterWrapper:z,handleMouseLeaveWrapper:$}),{mergedClsPrefix:n,rtlEnabled:o,containerScrollTop:m,wrapperRef:i,containerRef:u,contentRef:s,yRailRef:l,xRailRef:a,needYBar:ne,needXBar:N,yBarSizePx:O,xBarSizePx:j,yBarTopPx:xe,xBarLeftPx:ee,isShowXBar:pe,isShowYBar:_e,isIos:T,handleScroll:K,handleContentResize:ae,handleContainerResize:ye,handleYScrollMouseDown:dn,handleXScrollMouseDown:Ie,cssVars:t?void 0:Ot,themeClass:gt==null?void 0:gt.themeClass,onRender:gt==null?void 0:gt.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:i,yPlacement:u,xPlacement:s,xScrollable:l}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",c=(h,p)=>E("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${u}`,h],"data-scrollbar-rail":!0,style:[p||"",this.verticalRailStyle],"aria-hidden":!0},E(a?vc:Sr,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?E("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),d=()=>{var h,p;return(h=this.onRender)===null||h===void 0||h.call(this),E("div",Dr(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=n.default)===null||p===void 0?void 0:p.call(n):E("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},E(Vi,{onResize:this.handleContentResize},{default:()=>E("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:c(void 0,void 0),l&&E("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${s}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},E(a?vc:Sr,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?E("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?d():E(Vi,{onResize:this.handleContainerResize},{default:d});return i?E(Be,null,f,c(this.themeClass,this.cssVars)):f}}),Dh=wu;function Vc(e){return Array.isArray(e)?e:[e]}const Xs={STOP:"STOP"};function zh(e,n){const t=n(e);e.children!==void 0&&t!==Xs.STOP&&e.children.forEach(r=>zh(r,n))}function l6(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?u=>{u.isLeaf||(r.push(u.key),i(u.children))}:u=>{u.isLeaf||(u.isGroup||r.push(u.key),i(u.children))};function i(u){u.forEach(o)}return i(e),r}function a6(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function c6(e){return e.children}function d6(e){return e.key}function f6(){return!1}function h6(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function p6(e){return e.disabled===!0}function g6(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function rs(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function os(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function b6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function m6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function v6(e){return(e==null?void 0:e.type)==="group"}function q7(e){const n=new Map;return e.forEach((t,r)=>{n.set(t.key,r)}),t=>{var r;return(r=n.get(t))!==null&&r!==void 0?r:null}}class x6 extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function y6(e,n,t,r){return Yi(n.concat(e),t,r,!1)}function C6(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function _6(e,n,t,r){const o=Yi(n,t,r,!1),i=Yi(e,t,r,!0),u=C6(e,t),s=[];return o.forEach(l=>{(i.has(l)||u.has(l))&&s.push(l)}),s.forEach(l=>o.delete(l)),o}function is(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:u,leafOnly:s,checkStrategy:l,allowNotLoaded:a}=e;if(!u)return r!==void 0?{checkedKeys:b6(t,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:m6(t,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=n;let d;o!==void 0?d=_6(o,t,n,a):r!==void 0?d=y6(r,t,n,a):d=Yi(t,n,a,!1);const f=l==="parent",h=l==="child"||s,p=d,g=new Set,m=Math.max.apply(null,Array.from(c.keys()));for(let b=m;b>=0;b-=1){const v=b===0,_=c.get(b);for(const y of _){if(y.isLeaf)continue;const{key:k,shallowLoaded:D}=y;if(h&&D&&y.children.forEach(I=>{!I.disabled&&!I.isLeaf&&I.shallowLoaded&&p.has(I.key)&&p.delete(I.key)}),y.disabled||!D)continue;let S=!0,A=!1,w=!0;for(const I of y.children){const B=I.key;if(!I.disabled){if(w&&(w=!1),p.has(B))A=!0;else if(g.has(B)){A=!0,S=!1;break}else if(S=!1,A)break}}S&&!w?(f&&y.children.forEach(I=>{!I.disabled&&p.has(I.key)&&p.delete(I.key)}),p.add(k)):A&&g.add(k),v&&h&&p.has(k)&&p.delete(k)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(g)}}function Yi(e,n,t,r){const{treeNodeMap:o,getChildren:i}=n,u=new Set,s=new Set(e);return e.forEach(l=>{const a=o.get(l);a!==void 0&&zh(a,c=>{if(c.disabled)return Xs.STOP;const{key:d}=c;if(!u.has(d)&&(u.add(d),s.add(d),g6(c.rawNode,i))){if(r)return Xs.STOP;if(!t)throw new x6}})}),s}function w6(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const i=r.treeNodeMap;let u=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const s={keyPath:[],treeNodePath:[],treeNode:u};if(u!=null&&u.ignored)return s.treeNode=null,s;for(;u;)!u.ignored&&(n||!u.isGroup)&&s.treeNodePath.push(u),u=u.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function k6(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function S6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Wc(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?E6:S6,i={reverse:n==="prev"};let u=!1,s=null;function l(a){if(a!==null){if(a===e){if(!u)u=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!a.disabled||r)&&!a.ignored&&!a.isGroup){s=a;return}if(a.isGroup){const c=Wl(a,i);c!==null?s=c:l(o(a,t))}else{const c=o(a,!1);if(c!==null)l(c);else{const d=A6(a);d!=null&&d.isGroup?l(o(d,t)):t&&l(o(a,!0))}}}}return l(e),s}function E6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function A6(e){return e.parent}function Wl(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,i=t?o-1:0,u=t?-1:o,s=t?-1:1;for(let l=i;l!==u;l+=s){const a=r[l];if(!a.disabled&&!a.ignored)if(a.isGroup){const c=Wl(a,n);if(c!==null)return c}else return a}}return null}const T6={getChild(){return this.ignored?null:Wl(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Wc(this,"next",e)},getPrev(e={}){return Wc(this,"prev",e)}};function D6(e,n){const t=n?new Set(n):void 0,r=[];function o(i){i.forEach(u=>{r.push(u),!(u.isLeaf||!u.children||u.ignored)&&(u.isGroup||t===void 0||t.has(u.key))&&o(u.children)})}return o(e),r}function z6(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Fh(e,n,t,r,o,i=null,u=0){const s=[];return e.forEach((l,a)=>{var c;const d=Object.create(r);if(d.rawNode=l,d.siblings=s,d.level=u,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===e.length,d.parent=i,!d.ignored){const f=o(l);Array.isArray(f)&&(d.children=Fh(f,n,t,r,o,d,u+1))}s.push(d),n.set(d.key,d),t.has(u)||t.set(u,[]),(c=t.get(u))===null||c===void 0||c.push(d)}),s}function Fi(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:i=p6,getIgnored:u=f6,getIsGroup:s=v6,getKey:l=d6}=n,a=(t=n.getChildren)!==null&&t!==void 0?t:c6,c=n.ignoreEmptyChildren?y=>{const k=a(y);return Array.isArray(k)?k.length?k:null:k}:a,d=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return a6(this.rawNode,c)},get shallowLoaded(){return h6(this.rawNode,c)},get ignored(){return u(this.rawNode)},contains(y){return z6(this,y)}},T6),f=Fh(e,r,o,d,c);function h(y){if(y==null)return null;const k=r.get(y);return k&&!k.isGroup&&!k.ignored?k:null}function p(y){if(y==null)return null;const k=r.get(y);return k&&!k.ignored?k:null}function g(y,k){const D=p(y);return D?D.getPrev(k):null}function m(y,k){const D=p(y);return D?D.getNext(k):null}function b(y){const k=p(y);return k?k.getParent():null}function v(y){const k=p(y);return k?k.getChild():null}const _={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(y){return D6(f,y)},getNode:h,getPrev:g,getNext:m,getParent:b,getChild:v,getFirstAvailableNode(){return k6(f)},getPath(y,k={}){return w6(y,k,_)},getCheckedKeys(y,k={}){const{cascade:D=!0,leafOnly:S=!1,checkStrategy:A="all",allowNotLoaded:w=!1}=k;return is({checkedKeys:rs(y),indeterminateKeys:os(y),cascade:D,leafOnly:S,checkStrategy:A,allowNotLoaded:w},_)},check(y,k,D={}){const{cascade:S=!0,leafOnly:A=!1,checkStrategy:w="all",allowNotLoaded:I=!1}=D;return is({checkedKeys:rs(k),indeterminateKeys:os(k),keysToCheck:y==null?[]:Vc(y),cascade:S,leafOnly:A,checkStrategy:w,allowNotLoaded:I},_)},uncheck(y,k,D={}){const{cascade:S=!0,leafOnly:A=!1,checkStrategy:w="all",allowNotLoaded:I=!1}=D;return is({checkedKeys:rs(k),indeterminateKeys:os(k),keysToUncheck:y==null?[]:Vc(y),cascade:S,leafOnly:A,checkStrategy:w,allowNotLoaded:I},_)},getNonLeafKeys(y={}){return l6(f,y)}};return _}const{cubicBezierEaseIn:qc,cubicBezierEaseOut:Gc}=ii;function F6({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:r="",originalTransition:o=""}={}){return[L("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${qc}, transform ${n} ${qc} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Gc}, transform ${n} ${Gc} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${t})`}),L("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const I6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function P6(e){const{boxShadow2:n,popoverColor:t,textColor2:r,borderRadius:o,fontSize:i,dividerColor:u}=e;return Object.assign(Object.assign({},I6),{fontSize:i,borderRadius:o,color:t,dividerColor:u,textColor:r,boxShadow:n})}const ql={name:"Popover",common:Fn,peers:{Scrollbar:Vl},self:P6},us={top:"bottom",bottom:"top",left:"right",right:"left"},Qe="var(--n-arrow-height) * 1.414",R6=L([V("popover",`
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
 `)]),on("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[on("scrollable",[on("show-header-or-footer","padding: var(--n-padding);")])]),U("header",`
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
 width: calc(${Qe});
 height: calc(${Qe});
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
 `)]),jn("top-start",`
 top: calc(${Qe} / -2);
 left: calc(${vt("top-start")} - var(--v-offset-left));
 `),jn("top",`
 top: calc(${Qe} / -2);
 transform: translateX(calc(${Qe} / -2)) rotate(45deg);
 left: 50%;
 `),jn("top-end",`
 top: calc(${Qe} / -2);
 right: calc(${vt("top-end")} + var(--v-offset-left));
 `),jn("bottom-start",`
 bottom: calc(${Qe} / -2);
 left: calc(${vt("bottom-start")} - var(--v-offset-left));
 `),jn("bottom",`
 bottom: calc(${Qe} / -2);
 transform: translateX(calc(${Qe} / -2)) rotate(45deg);
 left: 50%;
 `),jn("bottom-end",`
 bottom: calc(${Qe} / -2);
 right: calc(${vt("bottom-end")} + var(--v-offset-left));
 `),jn("left-start",`
 left: calc(${Qe} / -2);
 top: calc(${vt("left-start")} - var(--v-offset-top));
 `),jn("left",`
 left: calc(${Qe} / -2);
 transform: translateY(calc(${Qe} / -2)) rotate(45deg);
 top: 50%;
 `),jn("left-end",`
 left: calc(${Qe} / -2);
 bottom: calc(${vt("left-end")} + var(--v-offset-top));
 `),jn("right-start",`
 right: calc(${Qe} / -2);
 top: calc(${vt("right-start")} - var(--v-offset-top));
 `),jn("right",`
 right: calc(${Qe} / -2);
 transform: translateY(calc(${Qe} / -2)) rotate(45deg);
 top: 50%;
 `),jn("right-end",`
 right: calc(${Qe} / -2);
 bottom: calc(${vt("right-end")} + var(--v-offset-top));
 `),...Vy({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${Qe}) / 2)`,l=vt(o);return L(`[v-placement="${o}"] >`,[V("popover-shared",[X("center-arrow",[V("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function vt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function jn(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[V("popover-shared",`
 margin-${us[t]}: var(--n-space);
 `,[X("show-arrow",`
 margin-${us[t]}: var(--n-space-arrow);
 `),X("overlap",`
 margin: 0;
 `),tm("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${us[t]}: auto;
 ${r}
 `,[V("popover-arrow",n)])])])}const Ih=Object.assign(Object.assign({},Fe.props),{to:Jr.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Ph({arrowClass:e,arrowStyle:n,arrowWrapperClass:t,arrowWrapperStyle:r,clsPrefix:o}){return E("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,t]},E("div",{class:[`${o}-popover-arrow`,e],style:n}))}const O6=le({name:"PopoverBody",inheritAttrs:!1,props:Ih,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:u}=wn(e),s=Fe("Popover","-popover",R6,ql,e,o),l=_u("Popover",u,o),a=re(null),c=me("NPopover"),d=re(null),f=re(e.show),h=re(!1);Tt(()=>{const{show:w}=e;w&&!wv()&&!e.internalDeactivateImmediately&&(h.value=!0)});const p=R(()=>{const{trigger:w,onClickoutside:I}=e,B=[],{positionManuallyRef:{value:T}}=c;return T||(w==="click"&&!I&&B.push([Qa,D,void 0,{capture:!0}]),w==="hover"&&B.push([Om,k])),I&&B.push([Qa,D,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&B.push([ib,e.show]),B}),g=R(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:I,cubicBezierEaseOut:B},self:{space:T,spaceArrow:q,padding:G,fontSize:O,textColor:Y,dividerColor:j,color:Q,boxShadow:xe,borderRadius:ke,arrowHeight:ee,arrowOffset:ne,arrowOffsetVertical:N}}=s.value;return{"--n-box-shadow":xe,"--n-bezier":w,"--n-bezier-ease-in":I,"--n-bezier-ease-out":B,"--n-font-size":O,"--n-text-color":Y,"--n-color":Q,"--n-divider-color":j,"--n-border-radius":ke,"--n-arrow-height":ee,"--n-arrow-offset":ne,"--n-arrow-offset-vertical":N,"--n-padding":G,"--n-space":T,"--n-space-arrow":q}}),m=R(()=>{const w=e.width==="trigger"?void 0:Jt(e.width),I=[];w&&I.push({width:w});const{maxWidth:B,minWidth:T}=e;return B&&I.push({maxWidth:Jt(B)}),T&&I.push({maxWidth:Jt(T)}),i||I.push(g.value),I}),b=i?Vn("popover",void 0,g,e):void 0;c.setBodyInstance({syncPosition:v}),Kn(()=>{c.setBodyInstance(null)}),sn(je(e,"show"),w=>{e.animated||(w?f.value=!0:f.value=!1)});function v(){var w;(w=a.value)===null||w===void 0||w.syncPosition()}function _(w){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&c.handleMouseEnter(w)}function y(w){e.trigger==="hover"&&e.keepAliveOnHover&&c.handleMouseLeave(w)}function k(w){e.trigger==="hover"&&!S().contains(Ui(w))&&c.handleMouseMoveOutside(w)}function D(w){(e.trigger==="click"&&!S().contains(Ui(w))||e.onClickoutside)&&c.handleClickOutside(w)}function S(){return c.getTriggerElement()}Ue(vu,d),Ue(Al,null),Ue(Tl,null);function A(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let I;const B=c.internalRenderBodyRef.value,{value:T}=o;if(B)I=B([`${T}-popover-shared`,(l==null?void 0:l.value)&&`${T}-popover--rtl`,b==null?void 0:b.themeClass.value,e.overlap&&`${T}-popover-shared--overlap`,e.showArrow&&`${T}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${T}-popover-shared--center-arrow`],d,m.value,_,y);else{const{value:q}=c.extraClassRef,{internalTrapFocus:G}=e,O=!mc(n.header)||!mc(n.footer),Y=()=>{var j,Q;const xe=O?E(Be,null,Dn(n.header,ne=>ne?E("div",{class:[`${T}-popover__header`,e.headerClass],style:e.headerStyle},ne):null),Dn(n.default,ne=>ne?E("div",{class:[`${T}-popover__content`,e.contentClass],style:e.contentStyle},n):null),Dn(n.footer,ne=>ne?E("div",{class:[`${T}-popover__footer`,e.footerClass],style:e.footerStyle},ne):null)):e.scrollable?(j=n.default)===null||j===void 0?void 0:j.call(n):E("div",{class:[`${T}-popover__content`,e.contentClass],style:e.contentStyle},n),ke=e.scrollable?E(Dh,{themeOverrides:s.value.peerOverrides.Scrollbar,theme:s.value.peers.Scrollbar,contentClass:O?void 0:`${T}-popover__content ${(Q=e.contentClass)!==null&&Q!==void 0?Q:""}`,contentStyle:O?void 0:e.contentStyle},{default:()=>xe}):xe,ee=e.showArrow?Ph({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:T}):null;return[ke,ee]};I=E("div",Dr({class:[`${T}-popover`,`${T}-popover-shared`,(l==null?void 0:l.value)&&`${T}-popover--rtl`,b==null?void 0:b.themeClass.value,q.map(j=>`${T}-${j}`),{[`${T}-popover--scrollable`]:e.scrollable,[`${T}-popover--show-header-or-footer`]:O,[`${T}-popover--raw`]:e.raw,[`${T}-popover-shared--overlap`]:e.overlap,[`${T}-popover-shared--show-arrow`]:e.showArrow,[`${T}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:d,style:m.value,onKeydown:c.handleKeydown,onMouseenter:_,onMouseleave:y},t),G?E(Cv,{active:e.show,autoFocus:!0},{default:Y}):Y())}return du(I,p.value)}return{displayed:h,namespace:r,isMounted:c.isMountedRef,zIndex:c.zIndexRef,followerRef:a,adjustedTo:Jr(e),followerEnabled:f,renderContentNode:A}},render(){return E(M0,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Jr.tdkey},{default:()=>this.animated?E(Sr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),$6=Object.keys(Ih),B6={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function M6(e,n,t){B6[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=t[r];o?e.props[r]=(...u)=>{o(...u),i(...u)}:e.props[r]=i})}const ku={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Jr.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},N6=Object.assign(Object.assign(Object.assign({},Fe.props),ku),{internalOnAfterLeave:Function,internalRenderBody:Function}),Rh=le({name:"Popover",inheritAttrs:!1,props:N6,slots:Object,__popover__:!0,setup(e){const n=T0(),t=re(null),r=R(()=>e.show),o=re(e.defaultShow),i=jo(r,o),u=zn(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:O}=e;return!!(O!=null&&O())},l=()=>s()?!1:i.value,a=D0(e,["arrow","showArrow"]),c=R(()=>e.overlap?!1:a.value);let d=null;const f=re(null),h=re(null),p=zn(()=>e.x!==void 0&&e.y!==void 0);function g(O){const{"onUpdate:show":Y,onUpdateShow:j,onShow:Q,onHide:xe}=e;o.value=O,Y&&Xe(Y,O),j&&Xe(j,O),O&&Q&&Xe(Q,!0),O&&xe&&Xe(xe,!1)}function m(){d&&d.syncPosition()}function b(){const{value:O}=f;O&&(window.clearTimeout(O),f.value=null)}function v(){const{value:O}=h;O&&(window.clearTimeout(O),h.value=null)}function _(){const O=s();if(e.trigger==="focus"&&!O){if(l())return;g(!0)}}function y(){const O=s();if(e.trigger==="focus"&&!O){if(!l())return;g(!1)}}function k(){const O=s();if(e.trigger==="hover"&&!O){if(v(),f.value!==null||l())return;const Y=()=>{g(!0),f.value=null},{delay:j}=e;j===0?Y():f.value=window.setTimeout(Y,j)}}function D(){const O=s();if(e.trigger==="hover"&&!O){if(b(),h.value!==null||!l())return;const Y=()=>{g(!1),h.value=null},{duration:j}=e;j===0?Y():h.value=window.setTimeout(Y,j)}}function S(){D()}function A(O){var Y;l()&&(e.trigger==="click"&&(b(),v(),g(!1)),(Y=e.onClickoutside)===null||Y===void 0||Y.call(e,O))}function w(){if(e.trigger==="click"&&!s()){b(),v();const O=!l();g(O)}}function I(O){e.internalTrapFocus&&O.key==="Escape"&&(b(),v(),g(!1))}function B(O){o.value=O}function T(){var O;return(O=t.value)===null||O===void 0?void 0:O.targetRef}function q(O){d=O}return Ue("NPopover",{getTriggerElement:T,handleKeydown:I,handleMouseEnter:k,handleMouseLeave:D,handleClickOutside:A,handleMouseMoveOutside:S,setBodyInstance:q,positionManuallyRef:p,isMountedRef:n,zIndexRef:je(e,"zIndex"),extraClassRef:je(e,"internalExtraClass"),internalRenderBodyRef:je(e,"internalRenderBody")}),Tt(()=>{i.value&&s()&&g(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:u,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:l,setShow:B,handleClick:w,handleMouseEnter:k,handleMouseLeave:D,handleFocus:_,handleBlur:y,syncPosition:m}},render(){var e;const{positionManually:n,$slots:t}=this;let r,o=!1;if(!n&&(r=Sv(t,"trigger"),r)){r=Dt(r),r=r.type===ti?E("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:u}=this,s=[i,...u],l={onBlur:a=>{s.forEach(c=>{c.onBlur(a)})},onFocus:a=>{s.forEach(c=>{c.onFocus(a)})},onClick:a=>{s.forEach(c=>{c.onClick(a)})},onMouseenter:a=>{s.forEach(c=>{c.onMouseenter(a)})},onMouseleave:a=>{s.forEach(c=>{c.onMouseleave(a)})}};M6(r,u?"nested":n?"manual":this.trigger,l)}}return E(R0,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?du(E("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[$0,{enabled:i,zIndex:this.zIndex}]]):null,n?null:E(O0,null,{default:()=>r}),E(O6,To(this.$props,$6,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var u,s;return(s=(u=this.$slots).default)===null||s===void 0?void 0:s.call(u)},header:()=>{var u,s;return(s=(u=this.$slots).header)===null||s===void 0?void 0:s.call(u)},footer:()=>{var u,s;return(s=(u=this.$slots).footer)===null||s===void 0?void 0:s.call(u)}})]}})}}),L6={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function j6(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:r,primaryColor:o,infoColor:i,successColor:u,warningColor:s,errorColor:l,baseColor:a,borderColor:c,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,borderRadiusSmall:m,fontSizeMini:b,fontSizeTiny:v,fontSizeSmall:_,fontSizeMedium:y,heightMini:k,heightTiny:D,heightSmall:S,heightMedium:A,closeColorHover:w,closeColorPressed:I,buttonColor2Hover:B,buttonColor2Pressed:T,fontWeightStrong:q}=e;return Object.assign(Object.assign({},L6),{closeBorderRadius:m,heightTiny:k,heightSmall:D,heightMedium:S,heightLarge:A,borderRadius:m,opacityDisabled:d,fontSizeTiny:b,fontSizeSmall:v,fontSizeMedium:_,fontSizeLarge:y,fontWeightStrong:q,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:a,colorCheckable:"#0000",colorHoverCheckable:B,colorPressedCheckable:T,colorChecked:o,colorCheckedHover:t,colorCheckedPressed:r,border:`1px solid ${c}`,textColor:n,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:w,closeColorPressed:I,borderPrimary:`1px solid ${De(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:De(o,{alpha:.12}),colorBorderedPrimary:De(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:De(o,{alpha:.12}),closeColorPressedPrimary:De(o,{alpha:.18}),borderInfo:`1px solid ${De(i,{alpha:.3})}`,textColorInfo:i,colorInfo:De(i,{alpha:.12}),colorBorderedInfo:De(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:De(i,{alpha:.12}),closeColorPressedInfo:De(i,{alpha:.18}),borderSuccess:`1px solid ${De(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:De(u,{alpha:.12}),colorBorderedSuccess:De(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:De(u,{alpha:.12}),closeColorPressedSuccess:De(u,{alpha:.18}),borderWarning:`1px solid ${De(s,{alpha:.35})}`,textColorWarning:s,colorWarning:De(s,{alpha:.15}),colorBorderedWarning:De(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:De(s,{alpha:.12}),closeColorPressedWarning:De(s,{alpha:.18}),borderError:`1px solid ${De(l,{alpha:.23})}`,textColorError:l,colorError:De(l,{alpha:.1}),colorBorderedError:De(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:De(l,{alpha:.12}),closeColorPressedError:De(l,{alpha:.18})})}const H6={common:Fn,self:j6},U6={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},K6=V("tag",`
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
 `,[on("disabled",[L("&:hover","background-color: var(--n-color-hover-checkable);",[on("checked","color: var(--n-text-color-hover-checkable);")]),L("&:active","background-color: var(--n-color-pressed-checkable);",[on("checked","color: var(--n-text-color-pressed-checkable);")])]),X("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[on("disabled",[L("&:hover","background-color: var(--n-color-checked-hover);"),L("&:active","background-color: var(--n-color-checked-pressed);")])])])]),V6=Object.assign(Object.assign(Object.assign({},Fe.props),U6),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Oh="n-tag",G7=le({name:"Tag",props:V6,slots:Object,setup(e){const n=re(null),{mergedBorderedRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=wn(e),u=Fe("Tag","-tag",K6,H6,e,r);Ue(Oh,{roundRef:je(e,"round")});function s(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:p,onUpdateChecked:g,"onUpdate:checked":m}=e;g&&g(!h),m&&m(!h),p&&p(!h)}}function l(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&Xe(p,h)}}const a={setTextContent(h){const{value:p}=n;p&&(p.textContent=h)}},c=_u("Tag",i,r),d=R(()=>{const{type:h,size:p,color:{color:g,textColor:m}={}}=e,{common:{cubicBezierEaseInOut:b},self:{padding:v,closeMargin:_,borderRadius:y,opacityDisabled:k,textColorCheckable:D,textColorHoverCheckable:S,textColorPressedCheckable:A,textColorChecked:w,colorCheckable:I,colorHoverCheckable:B,colorPressedCheckable:T,colorChecked:q,colorCheckedHover:G,colorCheckedPressed:O,closeBorderRadius:Y,fontWeightStrong:j,[ze("colorBordered",h)]:Q,[ze("closeSize",p)]:xe,[ze("closeIconSize",p)]:ke,[ze("fontSize",p)]:ee,[ze("height",p)]:ne,[ze("color",h)]:N,[ze("textColor",h)]:pe,[ze("border",h)]:_e,[ze("closeIconColor",h)]:Pe,[ze("closeIconColorHover",h)]:P,[ze("closeIconColorPressed",h)]:oe,[ze("closeColorHover",h)]:F,[ze("closeColorPressed",h)]:ae}}=u.value,ye=fr(_);return{"--n-font-weight-strong":j,"--n-avatar-size-override":`calc(${ne} - 8px)`,"--n-bezier":b,"--n-border-radius":y,"--n-border":_e,"--n-close-icon-size":ke,"--n-close-color-pressed":ae,"--n-close-color-hover":F,"--n-close-border-radius":Y,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":Pe,"--n-close-margin-top":ye.top,"--n-close-margin-right":ye.right,"--n-close-margin-bottom":ye.bottom,"--n-close-margin-left":ye.left,"--n-close-size":xe,"--n-color":g||(t.value?Q:N),"--n-color-checkable":I,"--n-color-checked":q,"--n-color-checked-hover":G,"--n-color-checked-pressed":O,"--n-color-hover-checkable":B,"--n-color-pressed-checkable":T,"--n-font-size":ee,"--n-height":ne,"--n-opacity-disabled":k,"--n-padding":v,"--n-text-color":m||pe,"--n-text-color-checkable":D,"--n-text-color-checked":w,"--n-text-color-hover-checkable":S,"--n-text-color-pressed-checkable":A}}),f=o?Vn("tag",R(()=>{let h="";const{type:p,size:g,color:{color:m,textColor:b}={}}=e;return h+=p[0],h+=g[0],m&&(h+=`a${Ms(m)}`),b&&(h+=`b${Ms(b)}`),t.value&&(h+="c"),h}),d,e):void 0;return Object.assign(Object.assign({},a),{rtlEnabled:c,mergedClsPrefix:r,contentRef:n,mergedBordered:t,handleClick:s,handleCloseClick:l,cssVars:o?void 0:d,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:u,onRender:s,$slots:l}=this;s==null||s();const a=Dn(l.avatar,d=>d&&E("div",{class:`${t}-tag__avatar`},d)),c=Dn(l.icon,d=>d&&E("div",{class:`${t}-tag__icon`},d));return E("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:u,[`${t}-tag--avatar`]:a,[`${t}-tag--icon`]:c,[`${t}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c||a,E("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&o?E(Ah,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?E("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),{cubicBezierEaseInOut:nt,cubicBezierEaseOut:W6,cubicBezierEaseIn:q6}=ii;function G6({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:u=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",a=s?"enter":"leave";return[L(`&.fade-in-height-expand-transition-${a}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),L(`&.fade-in-height-expand-transition-${a}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),L(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${nt} ${r},
 opacity ${n} ${W6} ${r},
 margin-top ${n} ${nt} ${r},
 margin-bottom ${n} ${nt} ${r},
 padding-top ${n} ${nt} ${r},
 padding-bottom ${n} ${nt} ${r}
 ${t?`,${t}`:""}
 `),L(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${nt},
 opacity ${n} ${q6},
 margin-top ${n} ${nt},
 margin-bottom ${n} ${nt},
 padding-top ${n} ${nt},
 padding-bottom ${n} ${nt}
 ${t?`,${t}`:""}
 `)]}const Z6=F0&&"loading"in document.createElement("img");function X6(e={}){var n;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}}const ss=new WeakMap,ls=new WeakMap,as=new WeakMap,Y6=(e,n,t)=>{if(!e)return()=>{};const r=X6(n),{root:o}=r.options;let i;const u=ss.get(o);u?i=u:(i=new Map,ss.set(o,i));let s,l;i.has(r.hash)?(l=i.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=ls.get(f.target),p=as.get(f.target);h&&h(),p&&(p.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],i.set(r.hash,l));let a=!1;const c=()=>{a||(ls.delete(e),as.delete(e),a=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(r.hash),i.size||ss.delete(o))};return ls.set(e,c),as.set(e,t),c};function J6(e){const{borderRadius:n,avatarColor:t,cardColor:r,fontSize:o,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,modalColor:c,popoverColor:d}=e;return{borderRadius:n,fontSize:o,border:`2px solid ${r}`,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,color:vr(r,t),colorModal:vr(c,t),colorPopover:vr(d,t)}}const Q6={common:Fn,self:J6},e4="n-avatar-group",n4=V("avatar",`
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
`,[x0(L("&","--n-merged-color: var(--n-color-modal);")),y0(L("&","--n-merged-color: var(--n-color-popover);")),L("img",`
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
 `),U("text","line-height: 1.25")]),t4=Object.assign(Object.assign({},Fe.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),r4=le({name:"Avatar",props:t4,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=wn(e),r=re(!1);let o=null;const i=re(null),u=re(null),s=()=>{const{value:v}=i;if(v&&(o===null||o!==v.innerHTML)){o=v.innerHTML;const{value:_}=u;if(_){const{offsetWidth:y,offsetHeight:k}=_,{offsetWidth:D,offsetHeight:S}=v,A=.9,w=Math.min(y/D*A,k/S*A,1);v.style.transform=`translateX(-50%) translateY(-50%) scale(${w})`}}},l=me(e4,null),a=R(()=>{const{size:v}=e;if(v)return v;const{size:_}=l||{};return _||"medium"}),c=Fe("Avatar","-avatar",n4,Q6,e,n),d=me(Oh,null),f=R(()=>{if(l)return!0;const{round:v,circle:_}=e;return v!==void 0||_!==void 0?v||_:d?d.roundRef.value:!1}),h=R(()=>l?!0:e.bordered||!1),p=R(()=>{const v=a.value,_=f.value,y=h.value,{color:k}=e,{self:{borderRadius:D,fontSize:S,color:A,border:w,colorModal:I,colorPopover:B},common:{cubicBezierEaseInOut:T}}=c.value;let q;return typeof v=="number"?q=`${v}px`:q=c.value.self[ze("height",v)],{"--n-font-size":S,"--n-border":y?w:"none","--n-border-radius":_?"50%":D,"--n-color":k||A,"--n-color-modal":k||I,"--n-color-popover":k||B,"--n-bezier":T,"--n-merged-size":`var(--n-avatar-size-override, ${q})`}}),g=t?Vn("avatar",R(()=>{const v=a.value,_=f.value,y=h.value,{color:k}=e;let D="";return v&&(typeof v=="number"?D+=`a${v}`:D+=v[0]),_&&(D+="b"),y&&(D+="c"),k&&(D+=Ms(k)),D}),p,e):void 0,m=re(!e.lazy);Mn(()=>{if(e.lazy&&e.intersectionObserverOptions){let v;const _=Tt(()=>{v==null||v(),v=void 0,e.lazy&&(v=Y6(u.value,e.intersectionObserverOptions,m))});Kn(()=>{_(),v==null||v()})}}),sn(()=>{var v;return e.src||((v=e.imgProps)===null||v===void 0?void 0:v.src)},()=>{r.value=!1});const b=re(!e.lazy);return{textRef:i,selfRef:u,mergedRoundRef:f,mergedClsPrefix:n,fitTextTransform:s,cssVars:t?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:r,shouldStartLoading:m,loaded:b,mergedOnError:v=>{if(!m.value)return;r.value=!0;const{onError:_,imgProps:{onError:y}={}}=e;_==null||_(v),y==null||y(v)},mergedOnLoad:v=>{const{onLoad:_,imgProps:{onLoad:y}={}}=e;_==null||_(v),y==null||y(v),b.value=!0}}},render(){var e,n;const{$slots:t,src:r,mergedClsPrefix:o,lazy:i,onRender:u,loaded:s,hasLoadError:l,imgProps:a={}}=this;u==null||u();let c;const d=!s&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Ls(t.fallback,()=>[E("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=Dn(t.default,f=>{if(f)return E(Vi,{onResize:this.fitTextTransform},{default:()=>E("span",{ref:"textRef",class:`${o}-avatar__text`},f)});if(r||a.src){const h=this.src||a.src;return E("img",Object.assign(Object.assign({},a),{loading:Z6&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:i&&this.intersectionObserverOptions?this.shouldStartLoading?h:void 0:h,"data-image-src":h,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[a.style||"",{objectFit:this.objectFit},d?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),E("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},c,i&&d)}}),o4={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function i4(e){const{primaryColor:n,borderRadius:t,lineHeight:r,fontSize:o,cardColor:i,textColor2:u,textColor1:s,dividerColor:l,fontWeightStrong:a,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:g,boxShadow1:m,popoverColor:b,actionColor:v}=e;return Object.assign(Object.assign({},o4),{lineHeight:r,color:i,colorModal:g,colorPopover:b,colorTarget:n,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:u,titleTextColor:s,borderColor:l,actionColor:v,titleFontWeight:a,closeColorHover:h,closeColorPressed:p,closeBorderRadius:t,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:m,borderRadius:t})}const u4={common:Fn,self:i4},s4=L([V("card",`
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
 `,[nm({background:"var(--n-color-modal)"}),X("hoverable",[L("&:hover","box-shadow: var(--n-box-shadow);")]),X("content-segmented",[L(">",[U("content",{paddingTop:"var(--n-padding-bottom)"})])]),X("content-soft-segmented",[L(">",[U("content",`
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
 `)]),x0(V("card",`
 background: var(--n-color-modal);
 `,[X("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),y0(V("card",`
 background: var(--n-color-popover);
 `,[X("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),l4={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},a4=Object.assign(Object.assign({},Fe.props),l4),c4=le({name:"Card",props:a4,slots:Object,setup(e){const n=()=>{const{onClose:a}=e;a&&Xe(a)},{inlineThemeDisabled:t,mergedClsPrefixRef:r,mergedRtlRef:o}=wn(e),i=Fe("Card","-card",s4,u4,e,r),u=_u("Card",o,r),s=R(()=>{const{size:a}=e,{self:{color:c,colorModal:d,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:g,borderColor:m,actionColor:b,borderRadius:v,lineHeight:_,closeIconColor:y,closeIconColorHover:k,closeIconColorPressed:D,closeColorHover:S,closeColorPressed:A,closeBorderRadius:w,closeIconSize:I,closeSize:B,boxShadow:T,colorPopover:q,colorEmbedded:G,colorEmbeddedModal:O,colorEmbeddedPopover:Y,[ze("padding",a)]:j,[ze("fontSize",a)]:Q,[ze("titleFontSize",a)]:xe},common:{cubicBezierEaseInOut:ke}}=i.value,{top:ee,left:ne,bottom:N}=fr(j);return{"--n-bezier":ke,"--n-border-radius":v,"--n-color":c,"--n-color-modal":d,"--n-color-popover":q,"--n-color-embedded":G,"--n-color-embedded-modal":O,"--n-color-embedded-popover":Y,"--n-color-target":f,"--n-text-color":h,"--n-line-height":_,"--n-action-color":b,"--n-title-text-color":p,"--n-title-font-weight":g,"--n-close-icon-color":y,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":D,"--n-close-color-hover":S,"--n-close-color-pressed":A,"--n-border-color":m,"--n-box-shadow":T,"--n-padding-top":ee,"--n-padding-bottom":N,"--n-padding-left":ne,"--n-font-size":Q,"--n-title-font-size":xe,"--n-close-size":B,"--n-close-icon-size":I,"--n-close-border-radius":w}}),l=t?Vn("card",R(()=>e.size[0]),s,e):void 0;return{rtlEnabled:u,mergedClsPrefix:r,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:r,rtlEnabled:o,onRender:i,embedded:u,tag:s,$slots:l}=this;return i==null||i(),E(s,{class:[`${r}-card`,this.themeClass,u&&`${r}-card--embedded`,{[`${r}-card--rtl`]:o,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:n,[`${r}-card--hoverable`]:t}],style:this.cssVars,role:this.role},Dn(l.cover,a=>{const c=this.cover?qn([this.cover()]):a;return c&&E("div",{class:`${r}-card-cover`,role:"none"},c)}),Dn(l.header,a=>{const{title:c}=this,d=c?qn(typeof c=="function"?[c()]:[c]):a;return d||this.closable?E("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},E("div",{class:`${r}-card-header__main`,role:"heading"},d),Dn(l["header-extra"],f=>{const h=this.headerExtra?qn([this.headerExtra()]):f;return h&&E("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&E(Ah,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),Dn(l.default,a=>{const{content:c}=this,d=c?qn(typeof c=="function"?[c()]:[c]):a;return d&&E("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},d)}),Dn(l.footer,a=>{const c=this.footer?qn([this.footer()]):a;return c&&E("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},c)}),Dn(l.action,a=>{const c=this.action?qn([this.action()]):a;return c&&E("div",{class:`${r}-card__action`,role:"none"},c)}))}}),d4={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Uo("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},f4=le({name:"ConfigProvider",alias:["App"],props:d4,setup(e){const n=me(zt,null),t=R(()=>{const{theme:g}=e;if(g===null)return;const m=n==null?void 0:n.mergedThemeRef.value;return g===void 0?m:m===void 0?g:Object.assign({},m,g)}),r=R(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const m=n==null?void 0:n.mergedThemeOverridesRef.value;return m===void 0?g:vo({},m,g)}}}),o=zn(()=>{const{namespace:g}=e;return g===void 0?n==null?void 0:n.mergedNamespaceRef.value:g}),i=zn(()=>{const{bordered:g}=e;return g===void 0?n==null?void 0:n.mergedBorderedRef.value:g}),u=R(()=>{const{icons:g}=e;return g===void 0?n==null?void 0:n.mergedIconsRef.value:g}),s=R(()=>{const{componentOptions:g}=e;return g!==void 0?g:n==null?void 0:n.mergedComponentPropsRef.value}),l=R(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n?n.mergedClsPrefixRef.value:js}),a=R(()=>{var g;const{rtl:m}=e;if(m===void 0)return n==null?void 0:n.mergedRtlRef.value;const b={};for(const v of m)b[v.name]=Ro(v),(g=v.peers)===null||g===void 0||g.forEach(_=>{_.name in b||(b[_.name]=Ro(_))});return b}),c=R(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),f=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),h=e.styleMountTarget||(n==null?void 0:n.styleMountTarget),p=R(()=>{const{value:g}=t,{value:m}=r,b=m&&Object.keys(m).length!==0,v=g==null?void 0:g.name;return v?b?`${v}-${No(JSON.stringify(r.value))}`:v:b?No(JSON.stringify(r.value)):""});return Ue(zt,{mergedThemeHashRef:p,mergedBreakpointsRef:c,mergedRtlRef:a,mergedIconsRef:u,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:R(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedLocaleRef.value:g}),mergedDateLocaleRef:R(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedDateLocaleRef.value:g}),mergedHljsRef:R(()=>{const{hljs:g}=e;return g===void 0?n==null?void 0:n.mergedHljsRef.value:g}),mergedKatexRef:R(()=>{const{katex:g}=e;return g===void 0?n==null?void 0:n.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:r,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1,styleMountTarget:h}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:t,mergedThemeOverrides:r}},render(){var e,n,t,r;return this.abstract?(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t):E(this.as||this.tag,{class:`${this.mergedClsPrefix||js}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),h4={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function p4(e){const{primaryColor:n,textColor2:t,dividerColor:r,hoverColor:o,popoverColor:i,invertedColor:u,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:g,textColor3:m,opacityDisabled:b}=e;return Object.assign(Object.assign({},h4),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:g,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:o,optionColorActive:De(n,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:b})}const $h={name:"Dropdown",common:Fn,peers:{Popover:ql},self:p4},g4={padding:"8px 14px"};function b4(e){const{borderRadius:n,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},g4),{borderRadius:n,boxShadow:t,color:vr(r,"rgba(0, 0, 0, .85)"),textColor:r})}const Bh={name:"Tooltip",common:Fn,peers:{Popover:ql},self:b4},m4=Object.assign(Object.assign({},ku),Fe.props),v4=le({name:"Tooltip",props:m4,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=wn(e),t=Fe("Tooltip","-tooltip",void 0,Bh,e,n),r=re(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(i){r.value.setShow(i)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:R(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return E(Rh,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Gl="n-dropdown-menu",Su="n-dropdown",Zc="n-dropdown-option",Mh=le({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return E("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),x4=le({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=me(Gl),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:i}=me(Su);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:i,renderOption:u}=this,{rawNode:s}=this.tmNode,l=E("div",Object.assign({class:`${n}-dropdown-option`},o==null?void 0:o(s)),E("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},E("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},lt(s.icon)),E("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):lt((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),E("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:l,option:s}):l}});function y4(e){const{textColorBase:n,opacity1:t,opacity2:r,opacity3:o,opacity4:i,opacity5:u}=e;return{color:n,opacity1Depth:t,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:u}}const C4={common:Fn,self:y4},_4=V("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[X("color-transition",{transition:"color .3s var(--n-bezier)"}),X("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),w4=Object.assign(Object.assign({},Fe.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Nh=le({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:w4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=wn(e),r=Fe("Icon","-icon",_4,C4,e,n),o=R(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(u!==void 0){const{color:a,[`opacity${u}Depth`]:c}=l;return{"--n-bezier":s,"--n-color":a,"--n-opacity":c}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Vn("icon",R(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:n,mergedStyle:R(()=>{const{size:u,color:s}=e;return{fontSize:Jt(u),color:s}}),cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:o,onRender:i,themeClass:u}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Uo("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),E("i",Dr(this.$attrs,{role:"img",class:[`${r}-icon`,u,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?E(o):this.$slots)}});function Ys(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function k4(e){return e.type==="group"}function Lh(e){return e.type==="divider"}function S4(e){return e.type==="render"}const jh=le({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=me(Su),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:i,activeKeyPathRef:u,animatedRef:s,mergedShowRef:l,renderLabelRef:a,renderIconRef:c,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:p,menuPropsRef:g}=n,m=me(Zc,null),b=me(Gl),v=me(vu),_=R(()=>e.tmNode.rawNode),y=R(()=>{const{value:j}=f;return Ys(e.tmNode.rawNode,j)}),k=R(()=>{const{disabled:j}=e.tmNode;return j}),D=R(()=>{if(!y.value)return!1;const{key:j,disabled:Q}=e.tmNode;if(Q)return!1;const{value:xe}=t,{value:ke}=r,{value:ee}=o,{value:ne}=i;return xe!==null?ne.includes(j):ke!==null?ne.includes(j)&&ne[ne.length-1]!==j:ee!==null?ne.includes(j):!1}),S=R(()=>r.value===null&&!s.value),A=Fm(D,300,S),w=R(()=>!!(m!=null&&m.enteringSubmenuRef.value)),I=re(!1);Ue(Zc,{enteringSubmenuRef:I});function B(){I.value=!0}function T(){I.value=!1}function q(){const{parentKey:j,tmNode:Q}=e;Q.disabled||l.value&&(o.value=j,r.value=null,t.value=Q.key)}function G(){const{tmNode:j}=e;j.disabled||l.value&&t.value!==j.key&&q()}function O(j){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:Q}=j;Q&&!Ga({target:Q},"dropdownOption")&&!Ga({target:Q},"scrollbarRail")&&(t.value=null)}function Y(){const{value:j}=y,{tmNode:Q}=e;l.value&&!j&&!Q.disabled&&(n.doSelect(Q.key,Q.rawNode),n.doUpdateShow(!1))}return{labelField:d,renderLabel:a,renderIcon:c,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:g,popoverBody:v,animated:s,mergedShowSubmenu:R(()=>A.value&&!w.value),rawNode:_,hasSubmenu:y,pending:zn(()=>{const{value:j}=i,{key:Q}=e.tmNode;return j.includes(Q)}),childActive:zn(()=>{const{value:j}=u,{key:Q}=e.tmNode,xe=j.findIndex(ke=>Q===ke);return xe===-1?!1:xe<j.length-1}),active:zn(()=>{const{value:j}=u,{key:Q}=e.tmNode,xe=j.findIndex(ke=>Q===ke);return xe===-1?!1:xe===j.length-1}),mergedDisabled:k,renderOption:h,nodeProps:p,handleClick:Y,handleMouseMove:G,handleMouseEnter:q,handleMouseLeave:O,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:T}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:i,siblingHasIcon:u,siblingHasSubmenu:s,renderLabel:l,renderIcon:a,renderOption:c,nodeProps:d,props:f,scrollable:h}=this;let p=null;if(o){const v=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=E(Hh,Object.assign({},v,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=d==null?void 0:d(r),b=E("div",Object.assign({class:[`${i}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),E("div",Dr(g,f),[E("div",{class:[`${i}-dropdown-option-body__prefix`,u&&`${i}-dropdown-option-body__prefix--show-icon`]},[a?a(r):lt(r.icon)]),E("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(r):lt((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),E("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?E(Nh,null,{default:()=>E(Eh,null)}):null)]),this.hasSubmenu?E(R0,null,{default:()=>[E(O0,null,{default:()=>E("div",{class:`${i}-dropdown-offset-container`},E(M0,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>E("div",{class:`${i}-dropdown-menu-wrapper`},t?E(Sr,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:b,option:r}):b}}),E4=le({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return E(Be,null,E(x4,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(o=>{const{rawNode:i}=o;return i.show===!1?null:Lh(i)?E(Mh,{clsPrefix:t,key:o.key}):o.isGroup?(Uo("dropdown","`group` node is not allowed to be put in `group` node."),null):E(jh,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),A4=le({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return E("div",n,[e==null?void 0:e()])}}),Hh=le({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=me(Su);Ue(Gl,{showIconRef:R(()=>{const o=n.value;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>o?o(l):l.icon);const{rawNode:s}=i;return o?o(s):s.icon})}),hasSubmenuRef:R(()=>{const{value:o}=t;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>Ys(l,o));const{rawNode:s}=i;return Ys(s,o)})})});const r=re(null);return Ue(Tl,null),Ue(Al,null),Ue(vu,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:i}=o;return i.show===!1?null:S4(i)?E(A4,{tmNode:o,key:o.key}):Lh(i)?E(Mh,{clsPrefix:n,key:o.key}):k4(i)?E(E4,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):E(jh,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:i.props,scrollable:t})});return E("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?E(Dh,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ph({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),T4=V("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[F6(),V("dropdown-option",`
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
 `),on("disabled",[X("pending",`
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
 `)]),on("scrollable",`
 padding: var(--n-padding);
 `),X("scrollable",[U("content",`
 padding: var(--n-padding);
 `)])]),D4={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},z4=Object.keys(ku),F4=Object.assign(Object.assign(Object.assign({},ku),D4),Fe.props),I4=le({name:"Dropdown",inheritAttrs:!1,props:F4,setup(e){const n=re(!1),t=jo(je(e,"show"),n),r=R(()=>{const{keyField:T,childrenField:q}=e;return Fi(e.options,{getKey(G){return G[T]},getDisabled(G){return G.disabled===!0},getIgnored(G){return G.type==="divider"||G.type==="render"},getChildren(G){return G[q]}})}),o=R(()=>r.value.treeNodes),i=re(null),u=re(null),s=re(null),l=R(()=>{var T,q,G;return(G=(q=(T=i.value)!==null&&T!==void 0?T:u.value)!==null&&q!==void 0?q:s.value)!==null&&G!==void 0?G:null}),a=R(()=>r.value.getPath(l.value).keyPath),c=R(()=>r.value.getPath(e.value).keyPath),d=zn(()=>e.keyboard&&t.value);Dm({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:D},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:S},Escape:v}},d);const{mergedClsPrefixRef:f,inlineThemeDisabled:h}=wn(e),p=Fe("Dropdown","-dropdown",T4,$h,e,f);Ue(Su,{labelFieldRef:je(e,"labelField"),childrenFieldRef:je(e,"childrenField"),renderLabelRef:je(e,"renderLabel"),renderIconRef:je(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:u,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:a,activeKeyPathRef:c,animatedRef:je(e,"animated"),mergedShowRef:t,nodePropsRef:je(e,"nodeProps"),renderOptionRef:je(e,"renderOption"),menuPropsRef:je(e,"menuProps"),doSelect:g,doUpdateShow:m}),sn(t,T=>{!e.animated&&!T&&b()});function g(T,q){const{onSelect:G}=e;G&&Xe(G,T,q)}function m(T){const{"onUpdate:show":q,onUpdateShow:G}=e;q&&Xe(q,T),G&&Xe(G,T),n.value=T}function b(){i.value=null,u.value=null,s.value=null}function v(){m(!1)}function _(){w("left")}function y(){w("right")}function k(){w("up")}function D(){w("down")}function S(){const T=A();T!=null&&T.isLeaf&&t.value&&(g(T.key,T.rawNode),m(!1))}function A(){var T;const{value:q}=r,{value:G}=l;return!q||G===null?null:(T=q.getNode(G))!==null&&T!==void 0?T:null}function w(T){const{value:q}=l,{value:{getFirstAvailableNode:G}}=r;let O=null;if(q===null){const Y=G();Y!==null&&(O=Y.key)}else{const Y=A();if(Y){let j;switch(T){case"down":j=Y.getNext();break;case"up":j=Y.getPrev();break;case"right":j=Y.getChild();break;case"left":j=Y.getParent();break}j&&(O=j.key)}}O!==null&&(i.value=null,u.value=O)}const I=R(()=>{const{size:T,inverted:q}=e,{common:{cubicBezierEaseInOut:G},self:O}=p.value,{padding:Y,dividerColor:j,borderRadius:Q,optionOpacityDisabled:xe,[ze("optionIconSuffixWidth",T)]:ke,[ze("optionSuffixWidth",T)]:ee,[ze("optionIconPrefixWidth",T)]:ne,[ze("optionPrefixWidth",T)]:N,[ze("fontSize",T)]:pe,[ze("optionHeight",T)]:_e,[ze("optionIconSize",T)]:Pe}=O,P={"--n-bezier":G,"--n-font-size":pe,"--n-padding":Y,"--n-border-radius":Q,"--n-option-height":_e,"--n-option-prefix-width":N,"--n-option-icon-prefix-width":ne,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":ke,"--n-option-icon-size":Pe,"--n-divider-color":j,"--n-option-opacity-disabled":xe};return q?(P["--n-color"]=O.colorInverted,P["--n-option-color-hover"]=O.optionColorHoverInverted,P["--n-option-color-active"]=O.optionColorActiveInverted,P["--n-option-text-color"]=O.optionTextColorInverted,P["--n-option-text-color-hover"]=O.optionTextColorHoverInverted,P["--n-option-text-color-active"]=O.optionTextColorActiveInverted,P["--n-option-text-color-child-active"]=O.optionTextColorChildActiveInverted,P["--n-prefix-color"]=O.prefixColorInverted,P["--n-suffix-color"]=O.suffixColorInverted,P["--n-group-header-text-color"]=O.groupHeaderTextColorInverted):(P["--n-color"]=O.color,P["--n-option-color-hover"]=O.optionColorHover,P["--n-option-color-active"]=O.optionColorActive,P["--n-option-text-color"]=O.optionTextColor,P["--n-option-text-color-hover"]=O.optionTextColorHover,P["--n-option-text-color-active"]=O.optionTextColorActive,P["--n-option-text-color-child-active"]=O.optionTextColorChildActive,P["--n-prefix-color"]=O.prefixColor,P["--n-suffix-color"]=O.suffixColor,P["--n-group-header-text-color"]=O.groupHeaderTextColor),P}),B=h?Vn("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),I,e):void 0;return{mergedClsPrefix:f,mergedTheme:p,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&b()},doUpdateShow:m,cssVars:h?void 0:I,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(r,o,i,u,s)=>{var l;const{mergedClsPrefix:a,menuProps:c}=this;(l=this.onRender)===null||l===void 0||l.call(this);const d=(c==null?void 0:c(void 0,this.tmNodes.map(h=>h.rawNode)))||{},f={ref:kv(o),class:[r,`${a}-dropdown`,this.themeClass],clsPrefix:a,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:s};return E(Hh,Dr(this.$attrs,f,d))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return E(Rh,Object.assign({},To(this.$props,z4),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}});function P4(e){const{textColor1:n,dividerColor:t,fontWeightStrong:r}=e;return{textColor:n,color:t,fontWeight:r}}const R4={common:Fn,self:P4},O4=V("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[on("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[on("no-title",`
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
 `),on("dashed",[U("line",{backgroundColor:"var(--n-color)"})]),X("dashed",[U("line",{borderColor:"var(--n-color)"})]),X("vertical",{backgroundColor:"var(--n-color)"})]),$4=Object.assign(Object.assign({},Fe.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),B4=le({name:"Divider",props:$4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=wn(e),r=Fe("Divider","-divider",O4,R4,e,n),o=R(()=>{const{common:{cubicBezierEaseInOut:u},self:{color:s,textColor:l,fontWeight:a}}=r.value;return{"--n-bezier":u,"--n-color":s,"--n-text-color":l,"--n-font-weight":a}}),i=t?Vn("divider",void 0,o,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:u}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("div",{role:"separator",class:[`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:r,[`${u}-divider--no-title`]:!n.default,[`${u}-divider--dashed`]:o,[`${u}-divider--title-position-${t}`]:n.default&&t}],style:i},r?null:E("div",{class:`${u}-divider__line ${u}-divider__line--left`}),!r&&n.default?E(Be,null,E("div",{class:`${u}-divider__title`},this.$slots),E("div",{class:`${u}-divider__line ${u}-divider__line--right`})):null)}});function M4(e){const{baseColor:n,textColor2:t,bodyColor:r,cardColor:o,dividerColor:i,actionColor:u,scrollbarColor:s,scrollbarColorHover:l,invertedColor:a}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:u,headerColor:o,headerColorInverted:a,footerColor:u,footerColorInverted:a,headerBorderColor:i,headerBorderColorInverted:a,footerBorderColor:i,footerBorderColorInverted:a,siderBorderColor:i,siderBorderColorInverted:a,siderColor:o,siderColorInverted:a,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:vr(r,s),siderToggleBarColorHover:vr(r,l),__invertScrollbar:"true"}}const Uh={name:"Layout",common:Fn,peers:{Scrollbar:Vl},self:M4};function N4(e,n,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}function L4(e){const{borderRadius:n,textColor3:t,primaryColor:r,textColor2:o,textColor1:i,fontSize:u,dividerColor:s,hoverColor:l,primaryColorHover:a}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:De(r,{alpha:.1}),itemColorActiveHover:De(r,{alpha:.1}),itemColorActiveCollapsed:De(r,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:a,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:a,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:s},N4("#BBB",r,"#FFF","#AAA"))}const j4={name:"Menu",common:Fn,peers:{Tooltip:Bh,Dropdown:$h},self:L4},H4={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function U4(e){const{textColor3:n,infoColor:t,errorColor:r,successColor:o,warningColor:i,textColor1:u,textColor2:s,railColor:l,fontWeightStrong:a,fontSize:c}=e;return Object.assign(Object.assign({},H4),{contentFontSize:c,titleFontWeight:a,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:r,iconColorSuccess:o,iconColorWarning:i,titleTextColor:u,contentTextColor:s,metaTextColor:n,lineColor:l})}const K4={common:Fn,self:U4};function V4(e,n){if(!n.global)throw new Error('splitAndMarkByRegex requires a global regex (with "g" flag)');const t=[];let r=0;for(const o of e.matchAll(n)){const{index:i}=o;i>r&&t.push({text:e.slice(r,i),isMatch:!1}),t.push({text:o[0],isMatch:!0}),r=i+o[0].length}return r<e.length&&t.push({text:e.slice(r),isMatch:!1}),t}const W4={highlightTag:{type:String,default:"mark"},caseSensitive:Boolean,autoEscape:{type:Boolean,default:!0},text:String,patterns:{type:Array,default:()=>[]},highlightClass:String,highlightStyle:[Object,String]},q4=le({name:"Highlight",props:W4,setup(e){const{mergedClsPrefixRef:n}=wn(),t=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{highlightedNode:R(()=>{const o=n.value;let i=[];const{patterns:u,text:s}=e;if(u.length===0||!s)i=[s];else{const{highlightTag:l,caseSensitive:a,autoEscape:c,highlightClass:d,highlightStyle:f}=e,h=u.map(m=>c?t(m):m).join("|"),p=new RegExp(`(${h})`,a?"g":"gi");i=V4(s,p).map(({text:m,isMatch:b})=>b?E(l,{class:[`${o}-highlight__mark`,d],style:f},m):m)}return E("span",{class:`${o}-highlight`},i)}),mergedClsPrefix:n}},render(){return this.highlightedNode}}),Kh="n-layout-sider",Vh={type:String,default:"static"},G4=V("layout",`
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
 `)]),Z4={embedded:Boolean,position:Vh,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Wh="n-layout";function X4(e){return le({name:"Layout",props:Object.assign(Object.assign({},Fe.props),Z4),setup(n){const t=re(null),r=re(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=wn(n),u=Fe("Layout","-layout",G4,Uh,n,o);function s(g,m){if(n.nativeScrollbar){const{value:b}=t;b&&(m===void 0?b.scrollTo(g):b.scrollTo(g,m))}else{const{value:b}=r;b&&b.scrollTo(g,m)}}Ue(Wh,n);let l=0,a=0;const c=g=>{var m;const b=g.target;l=b.scrollLeft,a=b.scrollTop,(m=n.onScroll)===null||m===void 0||m.call(n,g)};Dl(()=>{if(n.nativeScrollbar){const g=t.value;g&&(g.scrollTop=a,g.scrollLeft=l)}});const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:s},h=R(()=>{const{common:{cubicBezierEaseInOut:g},self:m}=u.value;return{"--n-bezier":g,"--n-color":n.embedded?m.colorEmbedded:m.color,"--n-text-color":m.textColor}}),p=i?Vn("layout",R(()=>n.embedded?"e":""),h,n):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:d,mergedTheme:u,handleNativeElScroll:c,cssVars:i?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},f)},render(){var n;const{mergedClsPrefix:t,hasSider:r}=this;(n=this.onRender)===null||n===void 0||n.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return E("div",{class:i,style:this.cssVars},this.nativeScrollbar?E("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):E(wu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const Xc=X4(!1),Y4=V("layout-sider",`
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
 `)]),J4=le({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return E("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},E("div",{class:`${e}-layout-toggle-bar__top`}),E("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Q4=le({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return E("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},E(Kl,{clsPrefix:e},{default:()=>E(Eh,null)}))}}),e5={position:Vh,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},n5=le({name:"LayoutSider",props:Object.assign(Object.assign({},Fe.props),e5),setup(e){const n=me(Wh),t=re(null),r=re(null),o=re(e.defaultCollapsed),i=jo(je(e,"collapsed"),o),u=R(()=>Jt(i.value?e.collapsedWidth:e.width)),s=R(()=>e.collapseMode!=="transform"?{}:{minWidth:Jt(e.width)}),l=R(()=>n?n.siderPlacement:"left");function a(k,D){if(e.nativeScrollbar){const{value:S}=t;S&&(D===void 0?S.scrollTo(k):S.scrollTo(k,D))}else{const{value:S}=r;S&&S.scrollTo(k,D)}}function c(){const{"onUpdate:collapsed":k,onUpdateCollapsed:D,onExpand:S,onCollapse:A}=e,{value:w}=i;D&&Xe(D,!w),k&&Xe(k,!w),o.value=!w,w?S&&Xe(S):A&&Xe(A)}let d=0,f=0;const h=k=>{var D;const S=k.target;d=S.scrollLeft,f=S.scrollTop,(D=e.onScroll)===null||D===void 0||D.call(e,k)};Dl(()=>{if(e.nativeScrollbar){const k=t.value;k&&(k.scrollTop=f,k.scrollLeft=d)}}),Ue(Kh,{collapsedRef:i,collapseModeRef:je(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=wn(e),m=Fe("Layout","-layout-sider",Y4,Uh,e,p);function b(k){var D,S;k.propertyName==="max-width"&&(i.value?(D=e.onAfterLeave)===null||D===void 0||D.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const v={scrollTo:a},_=R(()=>{const{common:{cubicBezierEaseInOut:k},self:D}=m.value,{siderToggleButtonColor:S,siderToggleButtonBorder:A,siderToggleBarColor:w,siderToggleBarColorHover:I}=D,B={"--n-bezier":k,"--n-toggle-button-color":S,"--n-toggle-button-border":A,"--n-toggle-bar-color":w,"--n-toggle-bar-color-hover":I};return e.inverted?(B["--n-color"]=D.siderColorInverted,B["--n-text-color"]=D.textColorInverted,B["--n-border-color"]=D.siderBorderColorInverted,B["--n-toggle-button-icon-color"]=D.siderToggleButtonIconColorInverted,B.__invertScrollbar=D.__invertScrollbar):(B["--n-color"]=D.siderColor,B["--n-text-color"]=D.textColor,B["--n-border-color"]=D.siderBorderColor,B["--n-toggle-button-icon-color"]=D.siderToggleButtonIconColor),B}),y=g?Vn("layout-sider",R(()=>e.inverted?"a":"b"),_,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:m,styleMaxWidth:u,mergedCollapsed:i,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:b,handleTriggerClick:c,inlineThemeDisabled:g,cssVars:_,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},v)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),E("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,t&&`${n}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Jt(this.width)}]},this.nativeScrollbar?E("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):E(wu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?E(J4,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):E(Q4,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?E("div",{class:`${n}-layout-sider__border`}):null)}}),ui="n-menu",qh="n-submenu",Zl="n-menu-item-group",Yc=[L("&::before","background-color: var(--n-item-color-hover);"),U("arrow",`
 color: var(--n-arrow-color-hover);
 `),U("icon",`
 color: var(--n-item-icon-color-hover);
 `),V("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[L("a",`
 color: var(--n-item-text-color-hover);
 `),U("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Jc=[U("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),V("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),U("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],t5=L([V("menu",`
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
 `)]),on("disabled",[on("selected, child-active",[L("&:focus-within",Jc)]),X("selected",[lr(null,[U("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),X("child-active",[lr(null,[U("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),lr("border-bottom: 2px solid var(--n-border-color-horizontal);",Jc)]),V("menu-item-content-header",[L("a","color: var(--n-item-text-color-horizontal);")])])]),on("responsive",[V("menu-item-content-header",`
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
 `)]),on("disabled",[on("selected, child-active",[L("&:focus-within",Yc)]),X("selected",[lr(null,[U("arrow","color: var(--n-arrow-color-active-hover);"),U("icon","color: var(--n-item-icon-color-active-hover);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[L("a","color: var(--n-item-text-color-active-hover);"),U("extra","color: var(--n-item-text-color-active-hover);")])])]),X("child-active",[lr(null,[U("arrow","color: var(--n-arrow-color-child-active-hover);"),U("icon","color: var(--n-item-icon-color-child-active-hover);"),V("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[L("a","color: var(--n-item-text-color-child-active-hover);"),U("extra","color: var(--n-item-text-color-child-active-hover);")])])]),X("selected",[lr(null,[L("&::before","background-color: var(--n-item-color-active-hover);")])]),lr(null,Yc)]),U("icon",`
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
 `,[G6({duration:".2s"})])]),V("menu-item-group",[V("menu-item-group-title",`
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
 `)]);function lr(e,n){return[X("hover",e,n),L("&:hover",e,n)]}const Gh=le({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=me(ui);return{menuProps:n,style:R(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:R(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:o}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${o}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:r,renderExtra:o,expandIcon:i}}=this,u=t?t(n.rawNode):lt(this.icon);return E("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&E("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),E("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(n.rawNode):lt(this.title),this.extra||o?E("span",{class:`${e}-menu-item-content-header__extra`}," ",o?o(n.rawNode):lt(this.extra)):null),this.showArrow?E(Kl,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):E(Yy,null)}):null)}}),wi=8;function Xl(e){const n=me(ui),{props:t,mergedCollapsedRef:r}=n,o=me(qh,null),i=me(Zl,null),u=R(()=>t.mode==="horizontal"),s=R(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=R(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),a=R(()=>{var f;return!u.value&&e.root&&r.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),c=R(()=>{if(u.value)return;const{collapsedWidth:f,indent:h,rootIndent:p}=t,{root:g,isGroup:m}=e,b=p===void 0?h:p;return g?r.value?f/2-l.value/2:b:i&&typeof i.paddingLeftRef.value=="number"?h/2+i.paddingLeftRef.value:o&&typeof o.paddingLeftRef.value=="number"?(m?h/2:h)+o.paddingLeftRef.value:0}),d=R(()=>{const{collapsedWidth:f,indent:h,rootIndent:p}=t,{value:g}=l,{root:m}=e;return u.value||!m||!r.value?wi:(p===void 0?h:p)+g+wi-(f+g)/2});return{dropdownPlacement:s,activeIconSize:a,maxIconSize:l,paddingLeft:c,iconMarginRight:d,NMenu:n,NSubmenu:o,NMenuOptionGroup:i}}const Yl={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},r5=le({name:"MenuDivider",setup(){const e=me(ui),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:E("div",{class:`${n.value}-menu-divider`})}}),Zh=Object.assign(Object.assign({},Yl),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),o5=Fl(Zh),i5=le({name:"MenuOption",props:Zh,setup(e){const n=Xl(e),{NSubmenu:t,NMenu:r,NMenuOptionGroup:o}=n,{props:i,mergedClsPrefixRef:u,mergedCollapsedRef:s}=r,l=t?t.mergedDisabledRef:o?o.mergedDisabledRef:{value:!1},a=R(()=>l.value||e.disabled);function c(f){const{onClick:h}=e;h&&h(f)}function d(f){a.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),c(f))}return{mergedClsPrefix:u,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:zn(()=>e.root&&s.value&&i.mode!=="horizontal"&&!a.value),selected:zn(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:d}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:r,nodeProps:o}}=this,i=o==null?void 0:o(t.rawNode);return E("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),E(v4,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):lt(this.title),trigger:()=>E(Gh,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Xh=Object.assign(Object.assign({},Yl),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),u5=Fl(Xh),s5=le({name:"MenuOptionGroup",props:Xh,setup(e){const n=Xl(e),{NSubmenu:t}=n,r=R(()=>t!=null&&t.mergedDisabledRef.value?!0:e.tmNode.disabled);Ue(Zl,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:r});const{mergedClsPrefixRef:o,props:i}=me(ui);return function(){const{value:u}=o,s=n.paddingLeft.value,{nodeProps:l}=i,a=l==null?void 0:l(e.tmNode.rawNode);return E("div",{class:`${u}-menu-item-group`,role:"group"},E("div",Object.assign({},a,{class:[`${u}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",s!==void 0?`padding-left: ${s}px;`:""]}),lt(e.title),e.extra?E(Be,null," ",lt(e.extra)):null),E("div",null,e.tmNodes.map(c=>Jl(c,i))))}}});function Js(e){return e.type==="divider"||e.type==="render"}function l5(e){return e.type==="divider"}function Jl(e,n){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(Js(t))return l5(t)?E(r5,Object.assign({key:e.key},t.props)):null;const{labelField:o}=n,{key:i,level:u,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[o],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?E(s5,To(l,u5,{tmNode:e,tmNodes:e.children,key:i})):E(Qs,To(l,a5,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):E(i5,To(l,o5,{key:i,tmNode:e}))}const Yh=Object.assign(Object.assign({},Yl),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),a5=Fl(Yh),Qs=le({name:"Submenu",props:Yh,setup(e){const n=Xl(e),{NMenu:t,NSubmenu:r}=n,{props:o,mergedCollapsedRef:i,mergedThemeRef:u}=t,s=R(()=>{const{disabled:f}=e;return r!=null&&r.mergedDisabledRef.value||o.disabled?!0:f}),l=re(!1);Ue(qh,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),Ue(Zl,null);function a(){const{onClick:f}=e;f&&f()}function c(){s.value||(i.value||t.toggleExpand(e.internalKey),a())}function d(f){l.value=f}return{menuProps:o,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:l,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:zn(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(e.internalKey)}),collapsed:R(()=>o.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:R(()=>!s.value&&(o.mode==="horizontal"||i.value)),handlePopoverShowChange:d,handleClick:c}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:r}}=this,o=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:l,mergedDisabled:a,maxIconSize:c,activeIconSize:d,title:f,childActive:h,icon:p,handleClick:g,menuProps:{nodeProps:m},dropdownShow:b,iconMarginRight:v,tmNode:_,mergedClsPrefix:y,isEllipsisPlaceholder:k,extra:D}=this,S=m==null?void 0:m(_.rawNode);return E("div",Object.assign({},S,{class:[`${y}-menu-item`,S==null?void 0:S.class],role:"menuitem"}),E(Gh,{tmNode:_,paddingLeft:s,collapsed:l,disabled:a,iconMarginRight:v,maxIconSize:c,activeIconSize:d,title:f,extra:D,showArrow:!u,childActive:h,clsPrefix:y,icon:p,hover:b,onClick:g,isEllipsisPlaceholder:k}))},i=()=>E(e6,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:E("div",{class:`${n}-submenu-children`,role:"menu"},u.map(l=>Jl(l,this.menuProps)))}});return this.root?E(I4,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>E("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),this.isHorizontal?null:i())}):E("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),i())}}),c5=Object.assign(Object.assign({},Fe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),d5=le({name:"Menu",inheritAttrs:!1,props:c5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=wn(e),r=Fe("Menu","-menu",t5,j4,e,n),o=me(Kh,null),i=R(()=>{var ee;const{collapsed:ne}=e;if(ne!==void 0)return ne;if(o){const{collapseModeRef:N,collapsedRef:pe}=o;if(N.value==="width")return(ee=pe.value)!==null&&ee!==void 0?ee:!1}return!1}),u=R(()=>{const{keyField:ee,childrenField:ne,disabledField:N}=e;return Fi(e.items||e.options,{getIgnored(pe){return Js(pe)},getChildren(pe){return pe[ne]},getDisabled(pe){return pe[N]},getKey(pe){var _e;return(_e=pe[ee])!==null&&_e!==void 0?_e:pe.name}})}),s=R(()=>new Set(u.value.treeNodes.map(ee=>ee.key))),{watchProps:l}=e,a=re(null);l!=null&&l.includes("defaultValue")?Tt(()=>{a.value=e.defaultValue}):a.value=e.defaultValue;const d=jo(je(e,"value"),a),f=re([]),h=()=>{f.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(d.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?Tt(h):h();const p=D0(e,["expandedNames","expandedKeys"]),g=jo(p,f),m=R(()=>u.value.treeNodes),b=R(()=>u.value.getPath(d.value).keyPath);Ue(ui,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:d,mergedExpandedKeysRef:g,activePathRef:b,mergedClsPrefixRef:n,isHorizontalRef:R(()=>e.mode==="horizontal"),invertedRef:je(e,"inverted"),doSelect:v,toggleExpand:y});function v(ee,ne){const{"onUpdate:value":N,onUpdateValue:pe,onSelect:_e}=e;pe&&Xe(pe,ee,ne),N&&Xe(N,ee,ne),_e&&Xe(_e,ee,ne),a.value=ee}function _(ee){const{"onUpdate:expandedKeys":ne,onUpdateExpandedKeys:N,onExpandedNamesChange:pe,onOpenNamesChange:_e}=e;ne&&Xe(ne,ee),N&&Xe(N,ee),pe&&Xe(pe,ee),_e&&Xe(_e,ee),f.value=ee}function y(ee){const ne=Array.from(g.value),N=ne.findIndex(pe=>pe===ee);if(~N)ne.splice(N,1);else{if(e.accordion&&s.value.has(ee)){const pe=ne.findIndex(_e=>s.value.has(_e));pe>-1&&ne.splice(pe,1)}ne.push(ee)}_(ne)}const k=ee=>{const ne=u.value.getPath(ee??d.value,{includeSelf:!1}).keyPath;if(!ne.length)return;const N=Array.from(g.value),pe=new Set([...N,...ne]);e.accordion&&s.value.forEach(_e=>{pe.has(_e)&&!ne.includes(_e)&&pe.delete(_e)}),_(Array.from(pe))},D=R(()=>{const{inverted:ee}=e,{common:{cubicBezierEaseInOut:ne},self:N}=r.value,{borderRadius:pe,borderColorHorizontal:_e,fontSize:Pe,itemHeight:P,dividerColor:oe}=N,F={"--n-divider-color":oe,"--n-bezier":ne,"--n-font-size":Pe,"--n-border-color-horizontal":_e,"--n-border-radius":pe,"--n-item-height":P};return ee?(F["--n-group-text-color"]=N.groupTextColorInverted,F["--n-color"]=N.colorInverted,F["--n-item-text-color"]=N.itemTextColorInverted,F["--n-item-text-color-hover"]=N.itemTextColorHoverInverted,F["--n-item-text-color-active"]=N.itemTextColorActiveInverted,F["--n-item-text-color-child-active"]=N.itemTextColorChildActiveInverted,F["--n-item-text-color-child-active-hover"]=N.itemTextColorChildActiveInverted,F["--n-item-text-color-active-hover"]=N.itemTextColorActiveHoverInverted,F["--n-item-icon-color"]=N.itemIconColorInverted,F["--n-item-icon-color-hover"]=N.itemIconColorHoverInverted,F["--n-item-icon-color-active"]=N.itemIconColorActiveInverted,F["--n-item-icon-color-active-hover"]=N.itemIconColorActiveHoverInverted,F["--n-item-icon-color-child-active"]=N.itemIconColorChildActiveInverted,F["--n-item-icon-color-child-active-hover"]=N.itemIconColorChildActiveHoverInverted,F["--n-item-icon-color-collapsed"]=N.itemIconColorCollapsedInverted,F["--n-item-text-color-horizontal"]=N.itemTextColorHorizontalInverted,F["--n-item-text-color-hover-horizontal"]=N.itemTextColorHoverHorizontalInverted,F["--n-item-text-color-active-horizontal"]=N.itemTextColorActiveHorizontalInverted,F["--n-item-text-color-child-active-horizontal"]=N.itemTextColorChildActiveHorizontalInverted,F["--n-item-text-color-child-active-hover-horizontal"]=N.itemTextColorChildActiveHoverHorizontalInverted,F["--n-item-text-color-active-hover-horizontal"]=N.itemTextColorActiveHoverHorizontalInverted,F["--n-item-icon-color-horizontal"]=N.itemIconColorHorizontalInverted,F["--n-item-icon-color-hover-horizontal"]=N.itemIconColorHoverHorizontalInverted,F["--n-item-icon-color-active-horizontal"]=N.itemIconColorActiveHorizontalInverted,F["--n-item-icon-color-active-hover-horizontal"]=N.itemIconColorActiveHoverHorizontalInverted,F["--n-item-icon-color-child-active-horizontal"]=N.itemIconColorChildActiveHorizontalInverted,F["--n-item-icon-color-child-active-hover-horizontal"]=N.itemIconColorChildActiveHoverHorizontalInverted,F["--n-arrow-color"]=N.arrowColorInverted,F["--n-arrow-color-hover"]=N.arrowColorHoverInverted,F["--n-arrow-color-active"]=N.arrowColorActiveInverted,F["--n-arrow-color-active-hover"]=N.arrowColorActiveHoverInverted,F["--n-arrow-color-child-active"]=N.arrowColorChildActiveInverted,F["--n-arrow-color-child-active-hover"]=N.arrowColorChildActiveHoverInverted,F["--n-item-color-hover"]=N.itemColorHoverInverted,F["--n-item-color-active"]=N.itemColorActiveInverted,F["--n-item-color-active-hover"]=N.itemColorActiveHoverInverted,F["--n-item-color-active-collapsed"]=N.itemColorActiveCollapsedInverted):(F["--n-group-text-color"]=N.groupTextColor,F["--n-color"]=N.color,F["--n-item-text-color"]=N.itemTextColor,F["--n-item-text-color-hover"]=N.itemTextColorHover,F["--n-item-text-color-active"]=N.itemTextColorActive,F["--n-item-text-color-child-active"]=N.itemTextColorChildActive,F["--n-item-text-color-child-active-hover"]=N.itemTextColorChildActiveHover,F["--n-item-text-color-active-hover"]=N.itemTextColorActiveHover,F["--n-item-icon-color"]=N.itemIconColor,F["--n-item-icon-color-hover"]=N.itemIconColorHover,F["--n-item-icon-color-active"]=N.itemIconColorActive,F["--n-item-icon-color-active-hover"]=N.itemIconColorActiveHover,F["--n-item-icon-color-child-active"]=N.itemIconColorChildActive,F["--n-item-icon-color-child-active-hover"]=N.itemIconColorChildActiveHover,F["--n-item-icon-color-collapsed"]=N.itemIconColorCollapsed,F["--n-item-text-color-horizontal"]=N.itemTextColorHorizontal,F["--n-item-text-color-hover-horizontal"]=N.itemTextColorHoverHorizontal,F["--n-item-text-color-active-horizontal"]=N.itemTextColorActiveHorizontal,F["--n-item-text-color-child-active-horizontal"]=N.itemTextColorChildActiveHorizontal,F["--n-item-text-color-child-active-hover-horizontal"]=N.itemTextColorChildActiveHoverHorizontal,F["--n-item-text-color-active-hover-horizontal"]=N.itemTextColorActiveHoverHorizontal,F["--n-item-icon-color-horizontal"]=N.itemIconColorHorizontal,F["--n-item-icon-color-hover-horizontal"]=N.itemIconColorHoverHorizontal,F["--n-item-icon-color-active-horizontal"]=N.itemIconColorActiveHorizontal,F["--n-item-icon-color-active-hover-horizontal"]=N.itemIconColorActiveHoverHorizontal,F["--n-item-icon-color-child-active-horizontal"]=N.itemIconColorChildActiveHorizontal,F["--n-item-icon-color-child-active-hover-horizontal"]=N.itemIconColorChildActiveHoverHorizontal,F["--n-arrow-color"]=N.arrowColor,F["--n-arrow-color-hover"]=N.arrowColorHover,F["--n-arrow-color-active"]=N.arrowColorActive,F["--n-arrow-color-active-hover"]=N.arrowColorActiveHover,F["--n-arrow-color-child-active"]=N.arrowColorChildActive,F["--n-arrow-color-child-active-hover"]=N.arrowColorChildActiveHover,F["--n-item-color-hover"]=N.itemColorHover,F["--n-item-color-active"]=N.itemColorActive,F["--n-item-color-active-hover"]=N.itemColorActiveHover,F["--n-item-color-active-collapsed"]=N.itemColorActiveCollapsed),F}),S=t?Vn("menu",R(()=>e.inverted?"a":"b"),D,e):void 0,A=E0(),w=re(null),I=re(null);let B=!0;const T=()=>{var ee;B?B=!1:(ee=w.value)===null||ee===void 0||ee.sync({showAllItemsBeforeCalculate:!0})};function q(){return document.getElementById(A)}const G=re(-1);function O(ee){G.value=e.options.length-ee}function Y(ee){ee||(G.value=-1)}const j=R(()=>{const ee=G.value;return{children:ee===-1?[]:e.options.slice(ee)}}),Q=R(()=>{const{childrenField:ee,disabledField:ne,keyField:N}=e;return Fi([j.value],{getIgnored(pe){return Js(pe)},getChildren(pe){return pe[ee]},getDisabled(pe){return pe[ne]},getKey(pe){var _e;return(_e=pe[N])!==null&&_e!==void 0?_e:pe.name}})}),xe=R(()=>Fi([{}]).treeNodes[0]);function ke(){var ee;if(G.value===-1)return E(Qs,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:xe.value,domId:A,isEllipsisPlaceholder:!0});const ne=Q.value.treeNodes[0],N=b.value,pe=!!(!((ee=ne.children)===null||ee===void 0)&&ee.some(_e=>N.includes(_e.key)));return E(Qs,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:pe,tmNode:ne,domId:A,rawNodes:ne.rawNode.children||[],tmNodes:ne.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:p,uncontrolledExpanededKeys:f,mergedExpandedKeys:g,uncontrolledValue:a,mergedValue:d,activePath:b,tmNodes:m,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:D,themeClass:S==null?void 0:S.themeClass,overflowRef:w,counterRef:I,updateCounter:()=>{},onResize:T,onUpdateOverflow:Y,onUpdateCount:O,renderCounter:ke,getCounter:q,onRender:S==null?void 0:S.onRender,showOption:k,deriveResponsiveState:T}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:r}=this;r==null||r();const o=()=>this.tmNodes.map(l=>Jl(l,this.$props)),u=n==="horizontal"&&this.responsive,s=()=>E("div",Dr(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?E(xv,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:o,counter:this.renderCounter}):o());return u?E(Vi,{onResize:this.onResize},{default:s}):s()}}),f5=Object.assign(Object.assign({},Fe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Qc=le({name:"Scrollbar",props:f5,setup(){const e=re(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return E(wu,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ed=1.25,h5=V("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ed};
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
 top: calc(var(--n-title-font-size) * ${ed} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),p5=Object.assign(Object.assign({},Fe.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Jh="n-timeline",g5=le({name:"Timeline",props:p5,setup(e,{slots:n}){const{mergedClsPrefixRef:t}=wn(e),r=Fe("Timeline","-timeline",h5,K4,e,t);return Ue(Jh,{props:e,mergedThemeRef:r,mergedClsPrefixRef:t}),()=>{const{value:o}=t;return E("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},n)}}}),b5={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},po=le({name:"TimelineItem",props:b5,slots:Object,setup(e){const n=me(Jh);n||Z0("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Im();const{inlineThemeDisabled:t}=wn(),r=R(()=>{const{props:{size:i,iconSize:u},mergedThemeRef:s}=n,{type:l}=e,{self:{titleTextColor:a,contentTextColor:c,metaTextColor:d,lineColor:f,titleFontWeight:h,contentFontSize:p,[ze("iconSize",i)]:g,[ze("titleMargin",i)]:m,[ze("titleFontSize",i)]:b,[ze("circleBorder",l)]:v,[ze("iconColor",l)]:_},common:{cubicBezierEaseInOut:y}}=s.value;return{"--n-bezier":y,"--n-circle-border":v,"--n-icon-color":_,"--n-content-font-size":p,"--n-content-text-color":c,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":b,"--n-title-font-weight":h,"--n-title-margin":m,"--n-title-text-color":a,"--n-icon-size":Jt(u)||g}}),o=t?Vn("timeline-item",R(()=>{const{props:{size:i,iconSize:u}}=n,{type:s}=e;return`${i[0]}${u||"a"}${s[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:t?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:t,$slots:r}=this;return t==null||t(),E("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},E("div",{class:`${e}-timeline-item-timeline`},E("div",{class:`${e}-timeline-item-timeline__line`}),Dn(r.icon,o=>o?E("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},o):E("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),E("div",{class:`${e}-timeline-item-content`},Dn(r.header,o=>o||this.title?E("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),E("div",{class:`${e}-timeline-item-content__content`},Ls(r.default,()=>[this.content])),E("div",{class:`${e}-timeline-item-content__meta`},Ls(r.footer,()=>[this.time]))))}});function m5(){const e=me(zt,null);return R(()=>{if(e===null)return Fn;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,r=(n==null?void 0:n.common)||Fn;return t!=null&&t.common?Object.assign({},r,t.common):r})}const v5={common:{primaryColor:"#b51e1e",primaryColorHover:"#c03e3e",primaryColorPressed:"#9c3c3c",primaryColorSuppl:"#d57e7e",infoColor:"#bbb5ac",successColor:"#96c24e",warningColor:"#fed71a",errorColor:"#efafad",textColorBase:"#333",textColor1:"rgba(0, 0, 0, .9)",textColor2:"rgba(0, 0, 0, .82)",textColor3:"rgba(0, 0, 0, .6)",borderColor:"#d9d9d9",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}},x5={common:{primaryColor:"#8a0000",primaryColorHover:"#a00000",primaryColorPressed:"#6e0000",primaryColorSuppl:"#c20000",infoColor:"#9e968b",successColor:"#a9c478",warningColor:"#e6c84c",errorColor:"#e28886",textColorBase:"#ccc",textColor1:"rgba(255, 255, 255, .9)",textColor2:"rgba(255, 255, 255, .82)",textColor3:"rgba(255, 255, 255, .6)",bodyColor:"#1a1a1a",borderColor:"#4d4d4d",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const jr=typeof document<"u";function Qh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function y5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qh(e.default)}const Ae=Object.assign;function cs(e,n){const t={};for(const r in n){const o=n[r];t[r]=Yn(o)?o.map(e):e(o)}return t}const zo=()=>{},Yn=Array.isArray;function nd(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const ep=/#/g,C5=/&/g,_5=/\//g,w5=/=/g,k5=/\?/g,np=/\+/g,S5=/%5B/g,E5=/%5D/g,tp=/%5E/g,A5=/%60/g,rp=/%7B/g,T5=/%7C/g,op=/%7D/g,D5=/%20/g;function Ql(e){return e==null?"":encodeURI(""+e).replace(T5,"|").replace(S5,"[").replace(E5,"]")}function z5(e){return Ql(e).replace(rp,"{").replace(op,"}").replace(tp,"^")}function el(e){return Ql(e).replace(np,"%2B").replace(D5,"+").replace(ep,"%23").replace(C5,"%26").replace(A5,"`").replace(rp,"{").replace(op,"}").replace(tp,"^")}function F5(e){return el(e).replace(w5,"%3D")}function I5(e){return Ql(e).replace(ep,"%23").replace(k5,"%3F")}function P5(e){return I5(e).replace(_5,"%2F")}function qo(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const R5=/\/$/,O5=e=>e.replace(R5,"");function ds(e,n,t="/"){let r,o={},i="",u="";const s=n.indexOf("#");let l=n.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(r=n.slice(0,l),i=n.slice(l,s>0?s:n.length),o=e(i.slice(1))),s>=0&&(r=r||n.slice(0,s),u=n.slice(s,n.length)),r=N5(r??n,t),{fullPath:r+i+u,path:r,query:o,hash:qo(u)}}function $5(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function td(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function B5(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&Qr(n.matched[r],t.matched[o])&&ip(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Qr(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ip(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!M5(e[t],n[t]))return!1;return!0}function M5(e,n){return Yn(e)?rd(e,n):Yn(n)?rd(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function rd(e,n){return Yn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function N5(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,u,s;for(u=0;u<r.length;u++)if(s=r[u],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(u).join("/")}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let nl=function(e){return e.pop="pop",e.push="push",e}({}),fs=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function L5(e){if(!e)if(jr){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),O5(e)}const j5=/^[^#]+#/;function H5(e,n){return e.replace(j5,"#")+n}function U5(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Eu=()=>({left:window.scrollX,top:window.scrollY});function K5(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=U5(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function od(e,n){return(history.state?history.state.position-n:-1)+e}const tl=new Map;function V5(e,n){tl.set(e,n)}function W5(e){const n=tl.get(e);return tl.delete(e),n}function q5(e){return typeof e=="string"||e&&typeof e=="object"}function up(e){return typeof e=="string"||typeof e=="symbol"}let Ze=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const sp=Symbol("");Ze.MATCHER_NOT_FOUND+"",Ze.NAVIGATION_GUARD_REDIRECT+"",Ze.NAVIGATION_ABORTED+"",Ze.NAVIGATION_CANCELLED+"",Ze.NAVIGATION_DUPLICATED+"";function eo(e,n){return Ae(new Error,{type:e,[sp]:!0},n)}function xt(e,n){return e instanceof Error&&sp in e&&(n==null||!!(e.type&n))}const G5=["params","query","hash"];function Z5(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of G5)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function X5(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const o=t[r].replace(np," "),i=o.indexOf("="),u=qo(i<0?o:o.slice(0,i)),s=i<0?null:qo(o.slice(i+1));if(u in n){let l=n[u];Yn(l)||(l=n[u]=[l]),l.push(s)}else n[u]=s}return n}function id(e){let n="";for(let t in e){const r=e[t];if(t=F5(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Yn(r)?r.map(o=>o&&el(o)):[r&&el(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function Y5(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Yn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const J5=Symbol(""),ud=Symbol(""),Au=Symbol(""),lp=Symbol(""),rl=Symbol("");function go(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Wt(e,n,t,r,o,i=u=>u()){const u=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const a=f=>{f===!1?l(eo(Ze.NAVIGATION_ABORTED,{from:t,to:n})):f instanceof Error?l(f):q5(f)?l(eo(Ze.NAVIGATION_GUARD_REDIRECT,{from:n,to:f})):(u&&r.enterCallbacks[o]===u&&typeof f=="function"&&u.push(f),s())},c=i(()=>e.call(r&&r.instances[o],n,t,a));let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(f=>l(f))})}function hs(e,n,t,r,o=i=>i()){const i=[];for(const u of e)for(const s in u.components){let l=u.components[s];if(!(n!=="beforeRouteEnter"&&!u.instances[s]))if(Qh(l)){const a=(l.__vccOpts||l)[n];a&&i.push(Wt(a,t,r,u,s,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${s}" at "${u.path}"`);const d=y5(c)?c.default:c;u.mods[s]=c,u.components[s]=d;const f=(d.__vccOpts||d)[n];return f&&Wt(f,t,r,u,s,o)()}))}}return i}function Q5(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let u=0;u<i;u++){const s=n.matched[u];s&&(e.matched.find(a=>Qr(a,s))?r.push(s):t.push(s));const l=e.matched[u];l&&(n.matched.find(a=>Qr(a,l))||o.push(l))}return[t,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let eC=()=>location.protocol+"//"+location.host;function ap(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let u=o.includes(e.slice(i))?e.slice(i).length:1,s=o.slice(u);return s[0]!=="/"&&(s="/"+s),td(s,"")}return td(t,e)+r+o}function nC(e,n,t,r){let o=[],i=[],u=null;const s=({state:f})=>{const h=ap(e,location),p=t.value,g=n.value;let m=0;if(f){if(t.value=h,n.value=f,u&&u===p){u=null;return}m=g?f.position-g.position:0}else r(h);o.forEach(b=>{b(t.value,p,{delta:m,type:nl.pop,direction:m?m>0?fs.forward:fs.back:fs.unknown})})};function l(){u=t.value}function a(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return i.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ae({},f.state,{scroll:Eu()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:a,destroy:d}}function sd(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?Eu():null}}function tC(e){const{history:n,location:t}=window,r={value:ap(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(l,a,c){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:eC()+e+l;try{n[c?"replaceState":"pushState"](a,"",f),o.value=a}catch(h){console.error(h),t[c?"replace":"assign"](f)}}function u(l,a){i(l,Ae({},n.state,sd(o.value.back,l,o.value.forward,!0),a,{position:o.value.position}),!0),r.value=l}function s(l,a){const c=Ae({},o.value,n.state,{forward:l,scroll:Eu()});i(c.current,c,!0),i(l,Ae({},sd(r.value,l,null),{position:c.position+1},a),!1),r.value=l}return{location:r,state:o,push:s,replace:u}}function rC(e){e=L5(e);const n=tC(e),t=nC(e,n.state,n.location,n.replace);function r(i,u=!0){u||t.pauseListeners(),history.go(i)}const o=Ae({location:"",base:e,go:r,createHref:H5.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function oC(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),rC(e)}let gr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var en=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(en||{});const iC={type:gr.Static,value:""},uC=/[a-zA-Z0-9_]/;function sC(e){if(!e)return[[]];if(e==="/")return[[iC]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${a}": ${h}`)}let t=en.Static,r=t;const o=[];let i;function u(){i&&o.push(i),i=[]}let s=0,l,a="",c="";function d(){a&&(t===en.Static?i.push({type:gr.Static,value:a}):t===en.Param||t===en.ParamRegExp||t===en.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),i.push({type:gr.Param,value:a,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),a="")}function f(){a+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&t!==en.ParamRegExp){r=t,t=en.EscapeNext;continue}switch(t){case en.Static:l==="/"?(a&&d(),u()):l===":"?(d(),t=en.Param):f();break;case en.EscapeNext:f(),t=r;break;case en.Param:l==="("?t=en.ParamRegExp:uC.test(l)?f():(d(),t=en.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case en.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=en.ParamRegExpEnd:c+=l;break;case en.ParamRegExpEnd:d(),t=en.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:n("Unknown state");break}}return t===en.ParamRegExp&&n(`Unfinished custom RegExp for param "${a}"`),d(),u(),o}const ld="[^/]+?",lC={sensitive:!1,strict:!1,start:!0,end:!0};var xn=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(xn||{});const aC=/[.+*?^${}()[\]/\\]/g;function cC(e,n){const t=Ae({},lC,n),r=[];let o=t.start?"^":"";const i=[];for(const a of e){const c=a.length?[]:[xn.Root];t.strict&&!a.length&&(o+="/");for(let d=0;d<a.length;d++){const f=a[d];let h=xn.Segment+(t.sensitive?xn.BonusCaseSensitive:0);if(f.type===gr.Static)d||(o+="/"),o+=f.value.replace(aC,"\\$&"),h+=xn.Static;else if(f.type===gr.Param){const{value:p,repeatable:g,optional:m,regexp:b}=f;i.push({name:p,repeatable:g,optional:m});const v=b||ld;if(v!==ld){h+=xn.BonusCustomRegExp;try{`${v}`}catch(y){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+y.message)}}let _=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(_=m&&a.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),o+=_,h+=xn.Dynamic,m&&(h+=xn.BonusOptional),g&&(h+=xn.BonusRepeatable),v===".*"&&(h+=xn.BonusWildcard)}c.push(h)}r.push(c)}if(t.strict&&t.end){const a=r.length-1;r[a][r[a].length-1]+=xn.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const u=new RegExp(o,t.sensitive?"":"i");function s(a){const c=a.match(u),d={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(a){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of f)if(h.type===gr.Static)c+=h.value;else if(h.type===gr.Param){const{value:p,repeatable:g,optional:m}=h,b=p in a?a[p]:"";if(Yn(b)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Yn(b)?b.join("/"):b;if(!v)if(m)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);c+=v}}return c||"/"}return{re:u,score:r,keys:i,parse:s,stringify:l}}function dC(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===xn.Static+xn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===xn.Static+xn.Segment?1:-1:0}function cp(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=dC(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(ad(r))return 1;if(ad(o))return-1}return o.length-r.length}function ad(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const fC={strict:!1,end:!0,sensitive:!1};function hC(e,n,t){const r=cC(sC(e.path),t),o=Ae(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function pC(e,n){const t=[],r=new Map;n=nd(fC,n);function o(d){return r.get(d)}function i(d,f,h){const p=!h,g=dd(d);g.aliasOf=h&&h.record;const m=nd(n,d),b=[g];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of y)b.push(dd(Ae({},g,{components:h?h.record.components:g.components,path:k,aliasOf:h?h.record:g})))}let v,_;for(const y of b){const{path:k}=y;if(f&&k[0]!=="/"){const D=f.record.path,S=D[D.length-1]==="/"?"":"/";y.path=f.record.path+(k&&S+k)}if(v=hC(y,f,m),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),p&&d.name&&!fd(v)&&u(d.name)),dp(v)&&l(v),g.children){const D=g.children;for(let S=0;S<D.length;S++)i(D[S],v,h&&h.children[S])}h=h||v}return _?()=>{u(_)}:zo}function u(d){if(up(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function s(){return t}function l(d){const f=mC(d,t);t.splice(f,0,d),d.record.name&&!fd(d)&&r.set(d.record.name,d)}function a(d,f){let h,p={},g,m;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw eo(Ze.MATCHER_NOT_FOUND,{location:d});m=h.record.name,p=Ae(cd(f.params,h.keys.filter(_=>!_.optional).concat(h.parent?h.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&cd(d.params,h.keys.map(_=>_.name))),g=h.stringify(p)}else if(d.path!=null)g=d.path,h=t.find(_=>_.re.test(g)),h&&(p=h.parse(g),m=h.record.name);else{if(h=f.name?r.get(f.name):t.find(_=>_.re.test(f.path)),!h)throw eo(Ze.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,p=Ae({},f.params,d.params),g=h.stringify(p)}const b=[];let v=h;for(;v;)b.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:b,meta:bC(b)}}e.forEach(d=>i(d));function c(){t.length=0,r.clear()}return{addRoute:i,resolve:a,removeRoute:u,clearRoutes:c,getRoutes:s,getRecordMatcher:o}}function cd(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function dd(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gC(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function gC(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function fd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bC(e){return e.reduce((n,t)=>Ae(n,t.meta),{})}function mC(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;cp(e,n[i])<0?r=i:t=i+1}const o=vC(e);return o&&(r=n.lastIndexOf(o,r-1)),r}function vC(e){let n=e;for(;n=n.parent;)if(dp(n)&&cp(e,n)===0)return n}function dp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hd(e){const n=me(Au),t=me(lp),r=R(()=>{const l=He(e.to);return n.resolve(l)}),o=R(()=>{const{matched:l}=r.value,{length:a}=l,c=l[a-1],d=t.matched;if(!c||!d.length)return-1;const f=d.findIndex(Qr.bind(null,c));if(f>-1)return f;const h=pd(l[a-2]);return a>1&&pd(c)===h&&d[d.length-1].path!==h?d.findIndex(Qr.bind(null,l[a-2])):f}),i=R(()=>o.value>-1&&_C(t.params,r.value.params)),u=R(()=>o.value>-1&&o.value===t.matched.length-1&&ip(t.params,r.value.params));function s(l={}){if(CC(l)){const a=n[He(e.replace)?"replace":"push"](He(e.to)).catch(zo);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:i,isExactActive:u,navigate:s}}function xC(e){return e.length===1?e[0]:e}const yC=le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hd,setup(e,{slots:n}){const t=ro(hd(e)),{options:r}=me(Au),o=R(()=>({[gd(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[gd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&xC(n.default(t));return e.custom?i:E("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),fp=yC;function CC(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function _C(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!Yn(o)||o.length!==r.length||r.some((i,u)=>i.valueOf()!==o[u].valueOf()))return!1}return!0}function pd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gd=(e,n,t)=>e??n??t,wC=le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=me(rl),o=R(()=>e.route||r.value),i=me(ud,0),u=R(()=>{let a=He(i);const{matched:c}=o.value;let d;for(;(d=c[a])&&!d.components;)a++;return a}),s=R(()=>o.value.matched[u.value]);Ue(ud,R(()=>u.value+1)),Ue(J5,s),Ue(rl,o);const l=re();return sn(()=>[l.value,s.value,e.name],([a,c,d],[f,h,p])=>{c&&(c.instances[d]=a,h&&h!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),a&&c&&(!h||!Qr(c,h)||!f)&&(c.enterCallbacks[d]||[]).forEach(g=>g(a))},{flush:"post"}),()=>{const a=o.value,c=e.name,d=s.value,f=d&&d.components[c];if(!f)return bd(t.default,{Component:f,route:a});const h=d.props[c],p=h?h===!0?a.params:typeof h=="function"?h(a):h:null,m=E(f,Ae({},p,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return bd(t.default,{Component:m,route:a})||m}}});function bd(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const kC=wC;function SC(e){const n=pC(e.routes,e),t=e.parseQuery||X5,r=e.stringifyQuery||id,o=e.history,i=go(),u=go(),s=go(),l=ff(Nt);let a=Nt;jr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=cs.bind(null,P=>""+P),d=cs.bind(null,P5),f=cs.bind(null,qo);function h(P,oe){let F,ae;return up(P)?(F=n.getRecordMatcher(P),ae=oe):ae=P,n.addRoute(ae,F)}function p(P){const oe=n.getRecordMatcher(P);oe&&n.removeRoute(oe)}function g(){return n.getRoutes().map(P=>P.record)}function m(P){return!!n.getRecordMatcher(P)}function b(P,oe){if(oe=Ae({},oe||l.value),typeof P=="string"){const z=ds(t,P,oe.path),$=n.resolve({path:z.path},oe),H=o.createHref(z.fullPath);return Ae(z,$,{params:f($.params),hash:qo(z.hash),redirectedFrom:void 0,href:H})}let F;if(P.path!=null)F=Ae({},P,{path:ds(t,P.path,oe.path).path});else{const z=Ae({},P.params);for(const $ in z)z[$]==null&&delete z[$];F=Ae({},P,{params:d(z)}),oe.params=d(oe.params)}const ae=n.resolve(F,oe),ye=P.hash||"";ae.params=c(f(ae.params));const x=$5(r,Ae({},P,{hash:z5(ye),path:ae.path})),C=o.createHref(x);return Ae({fullPath:x,hash:ye,query:r===id?Y5(P.query):P.query||{}},ae,{redirectedFrom:void 0,href:C})}function v(P){return typeof P=="string"?ds(t,P,l.value.path):Ae({},P)}function _(P,oe){if(a!==P)return eo(Ze.NAVIGATION_CANCELLED,{from:oe,to:P})}function y(P){return S(P)}function k(P){return y(Ae(v(P),{replace:!0}))}function D(P,oe){const F=P.matched[P.matched.length-1];if(F&&F.redirect){const{redirect:ae}=F;let ye=typeof ae=="function"?ae(P,oe):ae;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=v(ye):{path:ye},ye.params={}),Ae({query:P.query,hash:P.hash,params:ye.path!=null?{}:P.params},ye)}}function S(P,oe){const F=a=b(P),ae=l.value,ye=P.state,x=P.force,C=P.replace===!0,z=D(F,ae);if(z)return S(Ae(v(z),{state:typeof z=="object"?Ae({},ye,z.state):ye,force:x,replace:C}),oe||F);const $=F;$.redirectedFrom=oe;let H;return!x&&B5(r,ae,F)&&(H=eo(Ze.NAVIGATION_DUPLICATED,{to:$,from:ae}),ee(ae,ae,!0,!1)),(H?Promise.resolve(H):I($,ae)).catch(M=>xt(M)?xt(M,Ze.NAVIGATION_GUARD_REDIRECT)?M:ke(M):Q(M,$,ae)).then(M=>{if(M){if(xt(M,Ze.NAVIGATION_GUARD_REDIRECT))return S(Ae({replace:C},v(M.to),{state:typeof M.to=="object"?Ae({},ye,M.to.state):ye,force:x}),oe||$)}else M=T($,ae,!0,C,ye);return B($,ae,M),M})}function A(P,oe){const F=_(P,oe);return F?Promise.reject(F):Promise.resolve()}function w(P){const oe=pe.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(P):P()}function I(P,oe){let F;const[ae,ye,x]=Q5(P,oe);F=hs(ae.reverse(),"beforeRouteLeave",P,oe);for(const z of ae)z.leaveGuards.forEach($=>{F.push(Wt($,P,oe))});const C=A.bind(null,P,oe);return F.push(C),Pe(F).then(()=>{F=[];for(const z of i.list())F.push(Wt(z,P,oe));return F.push(C),Pe(F)}).then(()=>{F=hs(ye,"beforeRouteUpdate",P,oe);for(const z of ye)z.updateGuards.forEach($=>{F.push(Wt($,P,oe))});return F.push(C),Pe(F)}).then(()=>{F=[];for(const z of x)if(z.beforeEnter)if(Yn(z.beforeEnter))for(const $ of z.beforeEnter)F.push(Wt($,P,oe));else F.push(Wt(z.beforeEnter,P,oe));return F.push(C),Pe(F)}).then(()=>(P.matched.forEach(z=>z.enterCallbacks={}),F=hs(x,"beforeRouteEnter",P,oe,w),F.push(C),Pe(F))).then(()=>{F=[];for(const z of u.list())F.push(Wt(z,P,oe));return F.push(C),Pe(F)}).catch(z=>xt(z,Ze.NAVIGATION_CANCELLED)?z:Promise.reject(z))}function B(P,oe,F){s.list().forEach(ae=>w(()=>ae(P,oe,F)))}function T(P,oe,F,ae,ye){const x=_(P,oe);if(x)return x;const C=oe===Nt,z=jr?history.state:{};F&&(ae||C?o.replace(P.fullPath,Ae({scroll:C&&z&&z.scroll},ye)):o.push(P.fullPath,ye)),l.value=P,ee(P,oe,F,C),ke()}let q;function G(){q||(q=o.listen((P,oe,F)=>{if(!_e.listening)return;const ae=b(P),ye=D(ae,_e.currentRoute.value);if(ye){S(Ae(ye,{replace:!0,force:!0}),ae).catch(zo);return}a=ae;const x=l.value;jr&&V5(od(x.fullPath,F.delta),Eu()),I(ae,x).catch(C=>xt(C,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_CANCELLED)?C:xt(C,Ze.NAVIGATION_GUARD_REDIRECT)?(S(Ae(v(C.to),{force:!0}),ae).then(z=>{xt(z,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===nl.pop&&o.go(-1,!1)}).catch(zo),Promise.reject()):(F.delta&&o.go(-F.delta,!1),Q(C,ae,x))).then(C=>{C=C||T(ae,x,!1),C&&(F.delta&&!xt(C,Ze.NAVIGATION_CANCELLED)?o.go(-F.delta,!1):F.type===nl.pop&&xt(C,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),B(ae,x,C)}).catch(zo)}))}let O=go(),Y=go(),j;function Q(P,oe,F){ke(P);const ae=Y.list();return ae.length?ae.forEach(ye=>ye(P,oe,F)):console.error(P),Promise.reject(P)}function xe(){return j&&l.value!==Nt?Promise.resolve():new Promise((P,oe)=>{O.add([P,oe])})}function ke(P){return j||(j=!P,G(),O.list().forEach(([oe,F])=>P?F(P):oe()),O.reset()),P}function ee(P,oe,F,ae){const{scrollBehavior:ye}=e;if(!jr||!ye)return Promise.resolve();const x=!F&&W5(od(P.fullPath,0))||(ae||!F)&&history.state&&history.state.scroll||null;return ei().then(()=>ye(P,oe,x)).then(C=>C&&K5(C)).catch(C=>Q(C,P,oe))}const ne=P=>o.go(P);let N;const pe=new Set,_e={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:g,resolve:b,options:e,push:y,replace:k,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:i.add,beforeResolve:u.add,afterEach:s.add,onError:Y.add,isReady:xe,install(P){P.component("RouterLink",fp),P.component("RouterView",kC),P.config.globalProperties.$router=_e,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>He(l)}),jr&&!N&&l.value===Nt&&(N=!0,y(o.location).catch(ae=>{}));const oe={};for(const ae in Nt)Object.defineProperty(oe,ae,{get:()=>l.value[ae],enumerable:!0});P.provide(Au,_e),P.provide(lp,df(oe)),P.provide(rl,l);const F=P.unmount;pe.add(P),P.unmount=function(){pe.delete(P),pe.size<1&&(a=Nt,q&&q(),q=null,l.value=Nt,N=!1,j=!1),F()}}};function Pe(P){return P.reduce((oe,F)=>oe.then(()=>w(F)),Promise.resolve())}return _e}function EC(){return me(Au)}const AC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},TC=le({name:"BookOutline",render:function(n,t){return Ke(),cn("svg",AC,t[0]||(t[0]=[ue("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1)]))}}),DC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zC=le({name:"BriefcaseOutline",render:function(n,t){return Ke(),cn("svg",DC,t[0]||(t[0]=[ue("rect",{x:"32",y:"128",width:"448",height:"320",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 240H32"},null,-1),ue("path",{d:"M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),FC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},IC=le({name:"HomeOutline",render:function(n,t){return Ke(),cn("svg",FC,t[0]||(t[0]=[ue("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1)]))}}),PC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},RC=le({name:"InformationCircleOutline",render:function(n,t){return Ke(),cn("svg",PC,t[0]||(t[0]=[ue("path",{d:"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M220 220h32v116"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 340h88"},null,-1),ue("path",{d:"M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",fill:"currentColor"},null,-1)]))}}),OC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$C=le({name:"LinkOutline",render:function(n,t){return Ke(),cn("svg",OC,t[0]||(t[0]=[ue("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1)]))}}),BC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},MC=le({name:"SettingsOutline",render:function(n,t){return Ke(),cn("svg",BC,t[0]||(t[0]=[ue("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),NC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},LC=le({name:"WineOutline",render:function(n,t){return Ke(),cn("svg",NC,t[0]||(t[0]=[ue("path",{d:"M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M256 272v160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 432H160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M112 160h288"},null,-1)]))}}),jC=`#  git基本操作

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

   执行这个命令后，你应该能看到它在下载一些东西。完成后，你可以检查一下项目目录，现在 \`src/_common\` 文件夹里应该有文件了。`,HC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),UC=`#  开源协议

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

  ​`,KC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),VC=`# go语言进阶学习

- **web开发简介**

  Go的基础net/http包提供了基础的路由

  web框架大致分为router盒mvc框架

  ​

`,WC=Object.freeze(Object.defineProperty({__proto__:null,default:VC},Symbol.toStringTag,{value:"Module"})),qC=`####  同构渲染ssr

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

`,GC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),ZC=`# 1.Typescript的价值

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

 



















































`,XC=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),YC=`
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

end!`,JC=Object.freeze(Object.defineProperty({__proto__:null,default:YC},Symbol.toStringTag,{value:"Module"})),QC=`# 实习项目—仿百度云盘

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







































`,e8=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),n8=`#  实现前端脚手架

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

`,t8=Object.freeze(Object.defineProperty({__proto__:null,default:n8},Symbol.toStringTag,{value:"Module"})),r8=`#  less的编译

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

   ​`,o8=Object.freeze(Object.defineProperty({__proto__:null,default:r8},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hp;const Tu=e=>hp=e,pp=Symbol();function ol(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Fo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Fo||(Fo={}));function i8(){const e=Gd(!0),n=e.run(()=>re({}));let t=[],r=[];const o=Ro({install(i){Tu(o),o._a=i,i.provide(pp,o),i.config.globalProperties.$pinia=o,r.forEach(u=>t.push(u)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const gp=()=>{};function md(e,n,t,r=gp){e.add(n);const o=()=>{e.delete(n)&&r()};return!t&&Zd()&&v1(o),o}function Mr(e,...n){e.forEach(t=>{t(...n)})}const u8=e=>e(),vd=Symbol(),ps=Symbol();function il(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];ol(o)&&ol(r)&&e.hasOwnProperty(t)&&!qe(r)&&!kt(r)?e[t]=il(o,r):e[t]=r}return e}const s8=Symbol();function l8(e){return!ol(e)||!Object.prototype.hasOwnProperty.call(e,s8)}const{assign:jt}=Object;function a8(e){return!!(qe(e)&&e.effect)}function c8(e,n,t,r){const{state:o,actions:i,getters:u}=n,s=t.state.value[e];let l;function a(){s||(t.state.value[e]=o?o():{});const c=L1(t.state.value[e]);return jt(c,i,Object.keys(u||{}).reduce((d,f)=>(d[f]=Ro(R(()=>{Tu(t);const h=t._s.get(e);return u[f].call(h,h)})),d),{}))}return l=bp(e,a,n,t,r,!0),l}function bp(e,n,t={},r,o,i){let u;const s=jt({actions:{}},t),l={deep:!0};let a,c,d=new Set,f=new Set,h;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={});let g;function m(A){let w;a=c=!1,typeof A=="function"?(A(r.state.value[e]),w={type:Fo.patchFunction,storeId:e,events:h}):(il(r.state.value[e],A),w={type:Fo.patchObject,payload:A,storeId:e,events:h});const I=g=Symbol();ei().then(()=>{g===I&&(a=!0)}),c=!0,Mr(d,w,r.state.value[e])}const b=i?function(){const{state:w}=t,I=w?w():{};this.$patch(B=>{jt(B,I)})}:gp;function v(){u.stop(),d.clear(),f.clear(),r._s.delete(e)}const _=(A,w="")=>{if(vd in A)return A[ps]=w,A;const I=function(){Tu(r);const B=Array.from(arguments),T=new Set,q=new Set;function G(j){T.add(j)}function O(j){q.add(j)}Mr(f,{args:B,name:I[ps],store:k,after:G,onError:O});let Y;try{Y=A.apply(this&&this.$id===e?this:k,B)}catch(j){throw Mr(q,j),j}return Y instanceof Promise?Y.then(j=>(Mr(T,j),j)).catch(j=>(Mr(q,j),Promise.reject(j))):(Mr(T,Y),Y)};return I[vd]=!0,I[ps]=w,I},y={_p:r,$id:e,$onAction:md.bind(null,f),$patch:m,$reset:b,$subscribe(A,w={}){const I=md(d,A,w.detached,()=>B()),B=u.run(()=>sn(()=>r.state.value[e],T=>{(w.flush==="sync"?c:a)&&A({storeId:e,type:Fo.direct,events:h},T)},jt({},l,w)));return I},$dispose:v},k=ro(y);r._s.set(e,k);const S=(r._a&&r._a.runWithContext||u8)(()=>r._e.run(()=>(u=Gd()).run(()=>n({action:_}))));for(const A in S){const w=S[A];if(qe(w)&&!a8(w)||kt(w))i||(p&&l8(w)&&(qe(w)?w.value=p[A]:il(w,p[A])),r.state.value[e][A]=w);else if(typeof w=="function"){const I=_(w,A);S[A]=I,s.actions[A]=w}}return jt(k,S),jt(Se(k),S),Object.defineProperty(k,"$state",{get:()=>r.state.value[e],set:A=>{m(w=>{jt(w,A)})}}),r._p.forEach(A=>{jt(k,u.run(()=>A({store:k,app:r._a,pinia:r,options:s})))}),p&&i&&t.hydrate&&t.hydrate(k.$state,p),a=!0,c=!0,k}/*! #__NO_SIDE_EFFECTS__ */function d8(e,n,t){let r;const o=typeof n=="function";r=o?t:n;function i(u,s){const l=X1();return u=u||(l?me(pp,null):null),u&&Tu(u),u=hp,u._s.has(e)||(o?bp(e,n,r,u):c8(e,r,u)),u._s.get(e)}return i.$id=e,i}function f8(e){const n={},t=e.match(/^---\s*([\s\S]*?)\s*---/);return t&&t[1]&&t[1].split(`
`).forEach(r=>{const[o,...i]=r.split(":");if(o&&i.length>0){const u=i.join(":").trim();n[o.trim()]=u}}),n}const xd={};function h8(e){let n=xd[e];if(n)return n;n=xd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function no(e,n){typeof n!="string"&&(n=no.defaultChars);const t=h8(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let o="";for(let i=0,u=r.length;i<u;i+=3){const s=parseInt(r.slice(i+1,i+3),16);if(s<128){o+=t[s];continue}if((s&224)===192&&i+3<u){const l=parseInt(r.slice(i+4,i+6),16);if((l&192)===128){const a=s<<6&1984|l&63;a<128?o+="��":o+=String.fromCharCode(a),i+=3;continue}}if((s&240)===224&&i+6<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16);if((l&192)===128&&(a&192)===128){const c=s<<12&61440|l<<6&4032|a&63;c<2048||c>=55296&&c<=57343?o+="���":o+=String.fromCharCode(c),i+=6;continue}}if((s&248)===240&&i+9<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16),c=parseInt(r.slice(i+10,i+12),16);if((l&192)===128&&(a&192)===128&&(c&192)===128){let d=s<<18&1835008|l<<12&258048|a<<6&4032|c&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),i+=9;continue}}o+="�"}return o})}no.defaultChars=";/?:@&=+$,#";no.componentChars="";const yd={};function p8(e){let n=yd[e];if(n)return n;n=yd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function si(e,n,t){typeof n!="string"&&(t=n,n=si.defaultChars),typeof t>"u"&&(t=!0);const r=p8(n);let o="";for(let i=0,u=e.length;i<u;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<u&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){o+=e.slice(i,i+3),i+=2;continue}if(s<128){o+=r[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<u){const l=e.charCodeAt(i+1);if(l>=56320&&l<=57343){o+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[i])}return o}si.defaultChars=";/?:@&=+$,-_.!~*'()#";si.componentChars="-_.!~*'()";function ea(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function Ji(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const g8=/^([a-z0-9.+-]+:)/i,b8=/:[0-9]*$/,m8=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,v8=["<",">",'"',"`"," ","\r",`
`,"	"],x8=["{","}","|","\\","^","`"].concat(v8),y8=["'"].concat(x8),Cd=["%","/","?",";","#"].concat(y8),_d=["/","?","#"],C8=255,wd=/^[+a-z0-9A-Z_-]{0,63}$/,_8=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,kd={javascript:!0,"javascript:":!0},Sd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function na(e,n){if(e&&e instanceof Ji)return e;const t=new Ji;return t.parse(e,n),t}Ji.prototype.parse=function(e,n){let t,r,o,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const a=m8.exec(i);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let u=g8.exec(i);if(u&&(u=u[0],t=u.toLowerCase(),this.protocol=u,i=i.substr(u.length)),(n||u||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=i.substr(0,2)==="//",o&&!(u&&kd[u])&&(i=i.substr(2),this.slashes=!0)),!kd[u]&&(o||u&&!Sd[u])){let a=-1;for(let p=0;p<_d.length;p++)r=i.indexOf(_d[p]),r!==-1&&(a===-1||r<a)&&(a=r);let c,d;a===-1?d=i.lastIndexOf("@"):d=i.lastIndexOf("@",a),d!==-1&&(c=i.slice(0,d),i=i.slice(d+1),this.auth=c),a=-1;for(let p=0;p<Cd.length;p++)r=i.indexOf(Cd[p]),r!==-1&&(a===-1||r<a)&&(a=r);a===-1&&(a=i.length),i[a-1]===":"&&a--;const f=i.slice(0,a);i=i.slice(a),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let g=0,m=p.length;g<m;g++){const b=p[g];if(b&&!b.match(wd)){let v="";for(let _=0,y=b.length;_<y;_++)b.charCodeAt(_)>127?v+="x":v+=b[_];if(!v.match(wd)){const _=p.slice(0,g),y=p.slice(g+1),k=b.match(_8);k&&(_.push(k[1]),y.unshift(k[2])),y.length&&(i=y.join(".")+i),this.hostname=_.join(".");break}}}}this.hostname.length>C8&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const l=i.indexOf("?");return l!==-1&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),Sd[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ji.prototype.parseHost=function(e){let n=b8.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const w8=Object.freeze(Object.defineProperty({__proto__:null,decode:no,encode:si,format:ea,parse:na},Symbol.toStringTag,{value:"Module"})),mp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,vp=/[\0-\x1F\x7F-\x9F]/,k8=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,ta=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,xp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,yp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,S8=Object.freeze(Object.defineProperty({__proto__:null,Any:mp,Cc:vp,Cf:k8,P:ta,S:xp,Z:yp},Symbol.toStringTag,{value:"Module"})),E8=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),A8=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var gs;const T8=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),D8=(gs=String.fromCodePoint)!==null&&gs!==void 0?gs:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function z8(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=T8.get(e))!==null&&n!==void 0?n:e}var un;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(un||(un={}));const F8=32;var Xt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Xt||(Xt={}));function ul(e){return e>=un.ZERO&&e<=un.NINE}function I8(e){return e>=un.UPPER_A&&e<=un.UPPER_F||e>=un.LOWER_A&&e<=un.LOWER_F}function P8(e){return e>=un.UPPER_A&&e<=un.UPPER_Z||e>=un.LOWER_A&&e<=un.LOWER_Z||ul(e)}function R8(e){return e===un.EQUALS||P8(e)}var rn;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(rn||(rn={}));var Gt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Gt||(Gt={}));class O8{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=rn.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Gt.Strict}startEntity(n){this.decodeMode=n,this.state=rn.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case rn.EntityStart:return n.charCodeAt(t)===un.NUM?(this.state=rn.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=rn.NamedEntity,this.stateNamedEntity(n,t));case rn.NumericStart:return this.stateNumericStart(n,t);case rn.NumericDecimal:return this.stateNumericDecimal(n,t);case rn.NumericHex:return this.stateNumericHex(n,t);case rn.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|F8)===un.LOWER_X?(this.state=rn.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=rn.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,o){if(t!==r){const i=r-t;this.result=this.result*Math.pow(o,i)+parseInt(n.substr(t,i),o),this.consumed+=i}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(ul(o)||I8(o))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(ul(o))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===un.SEMI)this.consumed+=1;else if(this.decodeMode===Gt.Strict)return 0;return this.emitCodePoint(z8(this.result),this.consumed),this.errors&&(n!==un.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let o=r[this.treeIndex],i=(o&Xt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const u=n.charCodeAt(t);if(this.treeIndex=$8(r,o,this.treeIndex+Math.max(1,i),u),this.treeIndex<0)return this.result===0||this.decodeMode===Gt.Attribute&&(i===0||R8(u))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],i=(o&Xt.VALUE_LENGTH)>>14,i!==0){if(u===un.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Gt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,o=(r[t]&Xt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,o,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:o}=this;return this.emitCodePoint(t===1?o[n]&~Xt.VALUE_LENGTH:o[n+1],r),t===3&&this.emitCodePoint(o[n+2],r),r}end(){var n;switch(this.state){case rn.NamedEntity:return this.result!==0&&(this.decodeMode!==Gt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case rn.NumericDecimal:return this.emitNumericEntity(0,2);case rn.NumericHex:return this.emitNumericEntity(0,3);case rn.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case rn.EntityStart:return 0}}}function Cp(e){let n="";const t=new O8(e,r=>n+=D8(r));return function(o,i){let u=0,s=0;for(;(s=o.indexOf("&",s))>=0;){n+=o.slice(u,s),t.startEntity(i);const a=t.write(o,s+1);if(a<0){u=s+t.end();break}u=s+a,s=a===0?u+1:u}const l=n+o.slice(u);return n="",l}}function $8(e,n,t,r){const o=(n&Xt.BRANCH_LENGTH)>>7,i=n&Xt.JUMP_TABLE;if(o===0)return i!==0&&r===i?t:-1;if(i){const l=r-i;return l<0||l>=o?-1:e[t+l]-1}let u=t,s=u+o-1;for(;u<=s;){const l=u+s>>>1,a=e[l];if(a<r)u=l+1;else if(a>r)s=l-1;else return e[l+o]}return-1}const B8=Cp(E8);Cp(A8);function _p(e,n=Gt.Legacy){return B8(e,n)}function M8(e){return Object.prototype.toString.call(e)}function ra(e){return M8(e)==="[object String]"}const N8=Object.prototype.hasOwnProperty;function L8(e,n){return N8.call(e,n)}function Du(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function wp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function oa(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Qi(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const kp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,j8=/&([a-z#][a-z0-9]{1,31});/gi,H8=new RegExp(kp.source+"|"+j8.source,"gi"),U8=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function K8(e,n){if(n.charCodeAt(0)===35&&U8.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return oa(r)?Qi(r):e}const t=_p(e);return t!==e?t:e}function V8(e){return e.indexOf("\\")<0?e:e.replace(kp,"$1")}function to(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(H8,function(n,t,r){return t||K8(n,r)})}const W8=/[&<>"]/,q8=/[&<>"]/g,G8={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Z8(e){return G8[e]}function tr(e){return W8.test(e)?e.replace(q8,Z8):e}const X8=/[.?*+^$[\]\\(){}|-]/g;function Y8(e){return e.replace(X8,"\\$&")}function Me(e){switch(e){case 9:case 32:return!0}return!1}function Go(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Zo(e){return ta.test(e)||xp.test(e)}function Xo(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function zu(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const J8={mdurl:w8,ucmicro:S8},Q8=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:wp,assign:Du,escapeHtml:tr,escapeRE:Y8,fromCodePoint:Qi,has:L8,isMdAsciiPunct:Xo,isPunctChar:Zo,isSpace:Me,isString:ra,isValidEntityCode:oa,isWhiteSpace:Go,lib:J8,normalizeReference:zu,unescapeAll:to,unescapeMd:V8},Symbol.toStringTag,{value:"Module"}));function e_(e,n,t){let r,o,i,u;const s=e.posMax,l=e.pos;for(e.pos=n+1,r=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(r--,r===0)){o=!0;break}if(u=e.pos,e.md.inline.skipToken(e),i===91){if(u===e.pos-1)r++;else if(t)return e.pos=l,-1}}let a=-1;return o&&(a=e.pos),e.pos=l,a}function n_(e,n,t){let r,o=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<t;){if(r=e.charCodeAt(o),r===10||r===60)return i;if(r===62)return i.pos=o+1,i.str=to(e.slice(n+1,o)),i.ok=!0,i;if(r===92&&o+1<t){o+=2;continue}o++}return i}let u=0;for(;o<t&&(r=e.charCodeAt(o),!(r===32||r<32||r===127));){if(r===92&&o+1<t){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(r===40&&(u++,u>32))return i;if(r===41){if(u===0)break;u--}o++}return n===o||u!==0||(i.str=to(e.slice(n,o)),i.pos=o,i.ok=!0),i}function t_(e,n,t,r){let o,i=n;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)u.str=r.str,u.marker=r.marker;else{if(i>=t)return u;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return u;n++,i++,s===40&&(s=41),u.marker=s}for(;i<t;){if(o=e.charCodeAt(i),o===u.marker)return u.pos=i+1,u.str+=to(e.slice(n,i)),u.ok=!0,u;if(o===40&&u.marker===41)return u;o===92&&i+1<t&&i++,i++}return u.can_continue=!0,u.str+=to(e.slice(n,i)),u}const r_=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:n_,parseLinkLabel:e_,parseLinkTitle:t_},Symbol.toStringTag,{value:"Module"})),ht={};ht.code_inline=function(e,n,t,r,o){const i=e[n];return"<code"+o.renderAttrs(i)+">"+tr(i.content)+"</code>"};ht.code_block=function(e,n,t,r,o){const i=e[n];return"<pre"+o.renderAttrs(i)+"><code>"+tr(e[n].content)+`</code></pre>
`};ht.fence=function(e,n,t,r,o){const i=e[n],u=i.info?to(i.info).trim():"";let s="",l="";if(u){const c=u.split(/(\s+)/g);s=c[0],l=c.slice(2).join("")}let a;if(t.highlight?a=t.highlight(i.content,s,l)||tr(i.content):a=tr(i.content),a.indexOf("<pre")===0)return a+`
`;if(u){const c=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[];c<0?d.push(["class",t.langPrefix+s]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+s);const f={attrs:d};return`<pre><code${o.renderAttrs(f)}>${a}</code></pre>
`}return`<pre><code${o.renderAttrs(i)}>${a}</code></pre>
`};ht.image=function(e,n,t,r,o){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,t,r),o.renderToken(e,n,t)};ht.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};ht.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};ht.text=function(e,n){return tr(e[n].content)};ht.html_block=function(e,n){return e[n].content};ht.html_inline=function(e,n){return e[n].content};function uo(){this.rules=Du({},ht)}uo.prototype.renderAttrs=function(n){let t,r,o;if(!n.attrs)return"";for(o="",t=0,r=n.attrs.length;t<r;t++)o+=" "+tr(n.attrs[t][0])+'="'+tr(n.attrs[t][1])+'"';return o};uo.prototype.renderToken=function(n,t,r){const o=n[t];let i="";if(o.hidden)return"";o.block&&o.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(o.nesting===-1?"</":"<")+o.tag,i+=this.renderAttrs(o),o.nesting===0&&r.xhtmlOut&&(i+=" /");let u=!1;if(o.block&&(u=!0,o.nesting===1&&t+1<n.length)){const s=n[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===o.tag)&&(u=!1)}return i+=u?`>
`:">",i};uo.prototype.renderInline=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n)}return r};uo.prototype.renderInlineAsText=function(e,n,t){let r="";for(let o=0,i=e.length;o<i;o++)switch(e[o].type){case"text":r+=e[o].content;break;case"image":r+=this.renderInlineAsText(e[o].children,n,t);break;case"html_inline":case"html_block":r+=e[o].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};uo.prototype.render=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;s==="inline"?r+=this.renderInline(e[i].children,n,t):typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n,t)}return r};function In(){this.__rules__=[],this.__cache__=null}In.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};In.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};In.prototype.at=function(e,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=o.alt||[],this.__cache__=null};In.prototype.before=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};In.prototype.after=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};In.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};In.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,t.push(r)},this),this.__cache__=null,t};In.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};In.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,t.push(r)},this),this.__cache__=null,t};In.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Jn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Jn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,o=t.length;r<o;r++)if(t[r][0]===n)return r;return-1};Jn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Jn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),o=[n,t];r<0?this.attrPush(o):this.attrs[r]=o};Jn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Jn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function Sp(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Sp.prototype.Token=Jn;const o_=/\r\n?|\n/g,i_=/\0/g;function u_(e){let n;n=e.src.replace(o_,`
`),n=n.replace(i_,"�"),e.src=n}function s_(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function l_(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const o=n[t];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function a_(e){return/^<a[>\s]/i.test(e)}function c_(e){return/^<\/a\s*>/i.test(e)}function d_(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let o=n[t].children,i=0;for(let u=o.length-1;u>=0;u--){const s=o[u];if(s.type==="link_close"){for(u--;o[u].level!==s.level&&o[u].type!=="link_open";)u--;continue}if(s.type==="html_inline"&&(a_(s.content)&&i>0&&i--,c_(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const l=s.content;let a=e.md.linkify.match(l);const c=[];let d=s.level,f=0;a.length>0&&a[0].index===0&&u>0&&o[u-1].type==="text_special"&&(a=a.slice(1));for(let h=0;h<a.length;h++){const p=a[h].url,g=e.md.normalizeLink(p);if(!e.md.validateLink(g))continue;let m=a[h].text;a[h].schema?a[h].schema==="mailto:"&&!/^mailto:/i.test(m)?m=e.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=e.md.normalizeLinkText(m):m=e.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const b=a[h].index;if(b>f){const k=new e.Token("text","",0);k.content=l.slice(f,b),k.level=d,c.push(k)}const v=new e.Token("link_open","a",1);v.attrs=[["href",g]],v.level=d++,v.markup="linkify",v.info="auto",c.push(v);const _=new e.Token("text","",0);_.content=m,_.level=d,c.push(_);const y=new e.Token("link_close","a",-1);y.level=--d,y.markup="linkify",y.info="auto",c.push(y),f=a[h].lastIndex}if(f<l.length){const h=new e.Token("text","",0);h.content=l.slice(f),h.level=d,c.push(h)}n[t].children=o=wp(o,u,c)}}}}const Ep=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,f_=/\((c|tm|r)\)/i,h_=/\((c|tm|r)\)/ig,p_={c:"©",r:"®",tm:"™"};function g_(e,n){return p_[n.toLowerCase()]}function b_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(h_,g_)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function m_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Ep.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function v_(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(f_.test(e.tokens[n].content)&&b_(e.tokens[n].children),Ep.test(e.tokens[n].content)&&m_(e.tokens[n].children))}const x_=/['"]/,Ed=/['"]/g,Ad="’";function ki(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function y_(e,n){let t;const r=[];for(let o=0;o<e.length;o++){const i=e[o],u=e[o].level;for(t=r.length-1;t>=0&&!(r[t].level<=u);t--);if(r.length=t+1,i.type!=="text")continue;let s=i.content,l=0,a=s.length;e:for(;l<a;){Ed.lastIndex=l;const c=Ed.exec(s);if(!c)break;let d=!0,f=!0;l=c.index+1;const h=c[0]==="'";let p=32;if(c.index-1>=0)p=s.charCodeAt(c.index-1);else for(t=o-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){p=e[t].content.charCodeAt(e[t].content.length-1);break}let g=32;if(l<a)g=s.charCodeAt(l);else for(t=o+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){g=e[t].content.charCodeAt(0);break}const m=Xo(p)||Zo(String.fromCharCode(p)),b=Xo(g)||Zo(String.fromCharCode(g)),v=Go(p),_=Go(g);if(_?d=!1:b&&(v||m||(d=!1)),v?f=!1:m&&(_||b||(f=!1)),g===34&&c[0]==='"'&&p>=48&&p<=57&&(f=d=!1),d&&f&&(d=m,f=b),!d&&!f){h&&(i.content=ki(i.content,c.index,Ad));continue}if(f)for(t=r.length-1;t>=0;t--){let y=r[t];if(r[t].level<u)break;if(y.single===h&&r[t].level===u){y=r[t];let k,D;h?(k=n.md.options.quotes[2],D=n.md.options.quotes[3]):(k=n.md.options.quotes[0],D=n.md.options.quotes[1]),i.content=ki(i.content,c.index,D),e[y.token].content=ki(e[y.token].content,y.pos,k),l+=D.length-1,y.token===o&&(l+=k.length-1),s=i.content,a=s.length,r.length=t;continue e}}d?r.push({token:o,pos:c.index,single:h,level:u}):f&&h&&(i.content=ki(i.content,c.index,Ad))}}}function C_(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!x_.test(e.tokens[n].content)||y_(e.tokens[n].children,e)}function __(e){let n,t;const r=e.tokens,o=r.length;for(let i=0;i<o;i++){if(r[i].type!=="inline")continue;const u=r[i].children,s=u.length;for(n=0;n<s;n++)u[n].type==="text_special"&&(u[n].type="text");for(n=t=0;n<s;n++)u[n].type==="text"&&n+1<s&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}}const bs=[["normalize",u_],["block",s_],["inline",l_],["linkify",d_],["replacements",v_],["smartquotes",C_],["text_join",__]];function ia(){this.ruler=new In;for(let e=0;e<bs.length;e++)this.ruler.push(bs[e][0],bs[e][1])}ia.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};ia.prototype.State=Sp;function pt(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let i=0,u=0,s=0,l=0,a=o.length,c=!1;u<a;u++){const d=o.charCodeAt(u);if(!c)if(Me(d)){s++,d===9?l+=4-l%4:l++;continue}else c=!0;(d===10||u===a-1)&&(d!==10&&u++,this.bMarks.push(i),this.eMarks.push(u),this.tShift.push(s),this.sCount.push(l),this.bsCount.push(0),c=!1,s=0,l=0,i=u+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}pt.prototype.push=function(e,n,t){const r=new Jn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};pt.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};pt.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};pt.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Me(r))break}return n};pt.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Me(this.src.charCodeAt(--n)))return n+1;return n};pt.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};pt.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};pt.prototype.getLines=function(n,t,r,o){if(n>=t)return"";const i=new Array(t-n);for(let u=0,s=n;s<t;s++,u++){let l=0;const a=this.bMarks[s];let c=a,d;for(s+1<t||o?d=this.eMarks[s]+1:d=this.eMarks[s];c<d&&l<r;){const f=this.src.charCodeAt(c);if(Me(f))f===9?l+=4-(l+this.bsCount[s])%4:l++;else if(c-a<this.tShift[s])l++;else break;c++}l>r?i[u]=new Array(l-r+1).join(" ")+this.src.slice(c,d):i[u]=this.src.slice(c,d)}return i.join("")};pt.prototype.Token=Jn;const w_=65536;function ms(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function Td(e){const n=[],t=e.length;let r=0,o=e.charCodeAt(r),i=!1,u=0,s="";for(;r<t;)o===124&&(i?(s+=e.substring(u,r-1),u=r):(n.push(s+e.substring(u,r)),s="",u=r+1)),i=o===92,r++,o=e.charCodeAt(r);return n.push(s+e.substring(u)),n}function k_(e,n,t,r){if(n+2>t)return!1;let o=n+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let i=e.bMarks[o]+e.tShift[o];if(i>=e.eMarks[o])return!1;const u=e.src.charCodeAt(i++);if(u!==124&&u!==45&&u!==58||i>=e.eMarks[o])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!Me(s)||u===45&&Me(s))return!1;for(;i<e.eMarks[o];){const y=e.src.charCodeAt(i);if(y!==124&&y!==45&&y!==58&&!Me(y))return!1;i++}let l=ms(e,n+1),a=l.split("|");const c=[];for(let y=0;y<a.length;y++){const k=a[y].trim();if(!k){if(y===0||y===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(k))return!1;k.charCodeAt(k.length-1)===58?c.push(k.charCodeAt(0)===58?"center":"right"):k.charCodeAt(0)===58?c.push("left"):c.push("")}if(l=ms(e,n).trim(),l.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;a=Td(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const d=a.length;if(d===0||d!==c.length)return!1;if(r)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),g=[n,0];p.map=g;const m=e.push("thead_open","thead",1);m.map=[n,n+1];const b=e.push("tr_open","tr",1);b.map=[n,n+1];for(let y=0;y<a.length;y++){const k=e.push("th_open","th",1);c[y]&&(k.attrs=[["style","text-align:"+c[y]]]);const D=e.push("inline","",0);D.content=a[y].trim(),D.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let v,_=0;for(o=n+2;o<t&&!(e.sCount[o]<e.blkIndent);o++){let y=!1;for(let D=0,S=h.length;D<S;D++)if(h[D](e,o,t,!0)){y=!0;break}if(y||(l=ms(e,o).trim(),!l)||e.sCount[o]-e.blkIndent>=4||(a=Td(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),_+=d-a.length,_>w_))break;if(o===n+2){const D=e.push("tbody_open","tbody",1);D.map=v=[n+2,0]}const k=e.push("tr_open","tr",1);k.map=[o,o+1];for(let D=0;D<d;D++){const S=e.push("td_open","td",1);c[D]&&(S.attrs=[["style","text-align:"+c[D]]]);const A=e.push("inline","",0);A.content=a[D]?a[D].trim():"",A.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return v&&(e.push("tbody_close","tbody",-1),v[1]=o),e.push("table_close","table",-1),g[1]=o,e.parentType=f,e.line=o,!0}function S_(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,o=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,o=r;continue}break}e.line=o;const i=e.push("code_block","code",0);return i.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function E_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||o+3>i)return!1;const u=e.src.charCodeAt(o);if(u!==126&&u!==96)return!1;let s=o;o=e.skipChars(o,u);let l=o-s;if(l<3)return!1;const a=e.src.slice(s,o),c=e.src.slice(o,i);if(u===96&&c.indexOf(String.fromCharCode(u))>=0)return!1;if(r)return!0;let d=n,f=!1;for(;d++,!(d>=t||(o=s=e.bMarks[d]+e.tShift[d],i=e.eMarks[d],o<i&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===u&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,u),!(o-s<l)&&(o=e.skipSpaces(o),!(o<i)))){f=!0;break}l=e.sCount[n],e.line=d+(f?1:0);const h=e.push("fence","code",0);return h.info=c,h.content=e.getLines(n+1,d,l,!0),h.markup=a,h.map=[n,e.line],!0}function A_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const u=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(r)return!0;const s=[],l=[],a=[],c=[],d=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,p;for(p=n;p<t;p++){const _=e.sCount[p]<e.blkIndent;if(o=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],o>=i)break;if(e.src.charCodeAt(o++)===62&&!_){let k=e.sCount[p]+1,D,S;e.src.charCodeAt(o)===32?(o++,k++,S=!1,D=!0):e.src.charCodeAt(o)===9?(D=!0,(e.bsCount[p]+k)%4===3?(o++,k++,S=!1):S=!0):D=!1;let A=k;for(s.push(e.bMarks[p]),e.bMarks[p]=o;o<i;){const w=e.src.charCodeAt(o);if(Me(w))w===9?A+=4-(A+e.bsCount[p]+(S?1:0))%4:A++;else break;o++}h=o>=i,l.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(D?1:0),a.push(e.sCount[p]),e.sCount[p]=A-k,c.push(e.tShift[p]),e.tShift[p]=o-e.bMarks[p];continue}if(h)break;let y=!1;for(let k=0,D=d.length;k<D;k++)if(d[k](e,p,t,!0)){y=!0;break}if(y){e.lineMax=p,e.blkIndent!==0&&(s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]=-1}const g=e.blkIndent;e.blkIndent=0;const m=e.push("blockquote_open","blockquote",1);m.markup=">";const b=[n,0];m.map=b,e.md.block.tokenize(e,n,p);const v=e.push("blockquote_close","blockquote",-1);v.markup=">",e.lineMax=u,e.parentType=f,b[1]=e.line;for(let _=0;_<c.length;_++)e.bMarks[_+n]=s[_],e.tShift[_+n]=c[_],e.sCount[_+n]=a[_],e.bsCount[_+n]=l[_];return e.blkIndent=g,!0}function T_(e,n,t,r){const o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(i++);if(u!==42&&u!==45&&u!==95)return!1;let s=1;for(;i<o;){const a=e.src.charCodeAt(i++);if(a!==u&&!Me(a))return!1;a===u&&s++}if(s<3)return!1;if(r)return!0;e.line=n+1;const l=e.push("hr","hr",0);return l.map=[n,e.line],l.markup=Array(s+1).join(String.fromCharCode(u)),!0}function Dd(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==43)return-1;if(r<t){const i=e.src.charCodeAt(r);if(!Me(i))return-1}return r}function zd(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let o=t;if(o+1>=r)return-1;let i=e.src.charCodeAt(o++);if(i<48||i>57)return-1;for(;;){if(o>=r)return-1;if(i=e.src.charCodeAt(o++),i>=48&&i<=57){if(o-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return o<r&&(i=e.src.charCodeAt(o),!Me(i))?-1:o}function D_(e,n){const t=e.level+2;for(let r=n+2,o=e.tokens.length-2;r<o;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function z_(e,n,t,r){let o,i,u,s,l=n,a=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(c=!0);let d,f,h;if((h=zd(e,l))>=0){if(d=!0,u=e.bMarks[l]+e.tShift[l],f=Number(e.src.slice(u,h-1)),c&&f!==1)return!1}else if((h=Dd(e,l))>=0)d=!1;else return!1;if(c&&e.skipSpaces(h)>=e.eMarks[l])return!1;if(r)return!0;const p=e.src.charCodeAt(h-1),g=e.tokens.length;d?(s=e.push("ordered_list_open","ol",1),f!==1&&(s.attrs=[["start",f]])):s=e.push("bullet_list_open","ul",1);const m=[l,0];s.map=m,s.markup=String.fromCharCode(p);let b=!1;const v=e.md.block.ruler.getRules("list"),_=e.parentType;for(e.parentType="list";l<t;){i=h,o=e.eMarks[l];const y=e.sCount[l]+h-(e.bMarks[l]+e.tShift[l]);let k=y;for(;i<o;){const O=e.src.charCodeAt(i);if(O===9)k+=4-(k+e.bsCount[l])%4;else if(O===32)k++;else break;i++}const D=i;let S;D>=o?S=1:S=k-y,S>4&&(S=1);const A=y+S;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(p);const w=[l,0];s.map=w,d&&(s.info=e.src.slice(u,h-1));const I=e.tight,B=e.tShift[l],T=e.sCount[l],q=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=A,e.tight=!0,e.tShift[l]=D-e.bMarks[l],e.sCount[l]=k,D>=o&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,l,t,!0),(!e.tight||b)&&(a=!1),b=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=q,e.tShift[l]=B,e.sCount[l]=T,e.tight=I,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(p),l=e.line,w[1]=l,l>=t||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let G=!1;for(let O=0,Y=v.length;O<Y;O++)if(v[O](e,l,t,!0)){G=!0;break}if(G)break;if(d){if(h=zd(e,l),h<0)break;u=e.bMarks[l]+e.tShift[l]}else if(h=Dd(e,l),h<0)break;if(p!==e.src.charCodeAt(h-1))break}return d?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(p),m[1]=l,e.line=l,e.parentType=_,a&&D_(e,g),!0}function F_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],u=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function s(v){const _=e.lineMax;if(v>=_||e.isEmpty(v))return null;let y=!1;if(e.sCount[v]-e.blkIndent>3&&(y=!0),e.sCount[v]<0&&(y=!0),!y){const S=e.md.block.ruler.getRules("reference"),A=e.parentType;e.parentType="reference";let w=!1;for(let I=0,B=S.length;I<B;I++)if(S[I](e,v,_,!0)){w=!0;break}if(e.parentType=A,w)return null}const k=e.bMarks[v]+e.tShift[v],D=e.eMarks[v];return e.src.slice(k,D+1)}let l=e.src.slice(o,i+1);i=l.length;let a=-1;for(o=1;o<i;o++){const v=l.charCodeAt(o);if(v===91)return!1;if(v===93){a=o;break}else if(v===10){const _=s(u);_!==null&&(l+=_,i=l.length,u++)}else if(v===92&&(o++,o<i&&l.charCodeAt(o)===10)){const _=s(u);_!==null&&(l+=_,i=l.length,u++)}}if(a<0||l.charCodeAt(a+1)!==58)return!1;for(o=a+2;o<i;o++){const v=l.charCodeAt(o);if(v===10){const _=s(u);_!==null&&(l+=_,i=l.length,u++)}else if(!Me(v))break}const c=e.md.helpers.parseLinkDestination(l,o,i);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;o=c.pos;const f=o,h=u,p=o;for(;o<i;o++){const v=l.charCodeAt(o);if(v===10){const _=s(u);_!==null&&(l+=_,i=l.length,u++)}else if(!Me(v))break}let g=e.md.helpers.parseLinkTitle(l,o,i);for(;g.can_continue;){const v=s(u);if(v===null)break;l+=v,o=i,i=l.length,u++,g=e.md.helpers.parseLinkTitle(l,o,i,g)}let m;for(o<i&&p!==o&&g.ok?(m=g.str,o=g.pos):(m="",o=f,u=h);o<i;){const v=l.charCodeAt(o);if(!Me(v))break;o++}if(o<i&&l.charCodeAt(o)!==10&&m)for(m="",o=f,u=h;o<i;){const v=l.charCodeAt(o);if(!Me(v))break;o++}if(o<i&&l.charCodeAt(o)!==10)return!1;const b=zu(l.slice(1,a));return b?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[b]>"u"&&(e.env.references[b]={title:m,href:d}),e.line=u),!0):!1}const I_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],P_="[a-zA-Z_:][a-zA-Z0-9:._-]*",R_="[^\"'=<>`\\x00-\\x20]+",O_="'[^']*'",$_='"[^"]*"',B_="(?:"+R_+"|"+O_+"|"+$_+")",M_="(?:\\s+"+P_+"(?:\\s*=\\s*"+B_+")?)",Ap="<[A-Za-z][A-Za-z0-9\\-]*"+M_+"*\\s*\\/?>",Tp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",N_="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",L_="<[?][\\s\\S]*?[?]>",j_="<![A-Za-z][^>]*>",H_="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",U_=new RegExp("^(?:"+Ap+"|"+Tp+"|"+N_+"|"+L_+"|"+j_+"|"+H_+")"),K_=new RegExp("^(?:"+Ap+"|"+Tp+")"),Nr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+I_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(K_.source+"\\s*$"),/^$/,!1]];function V_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let u=e.src.slice(o,i),s=0;for(;s<Nr.length&&!Nr[s][0].test(u);s++);if(s===Nr.length)return!1;if(r)return Nr[s][2];let l=n+1;if(!Nr[s][1].test(u)){for(;l<t&&!(e.sCount[l]<e.blkIndent);l++)if(o=e.bMarks[l]+e.tShift[l],i=e.eMarks[l],u=e.src.slice(o,i),Nr[s][1].test(u)){u.length!==0&&l++;break}}e.line=l;const a=e.push("html_block","",0);return a.map=[n,l],a.content=e.getLines(n,l,e.blkIndent,!0),!0}function W_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let u=e.src.charCodeAt(o);if(u!==35||o>=i)return!1;let s=1;for(u=e.src.charCodeAt(++o);u===35&&o<i&&s<=6;)s++,u=e.src.charCodeAt(++o);if(s>6||o<i&&!Me(u))return!1;if(r)return!0;i=e.skipSpacesBack(i,o);const l=e.skipCharsBack(i,35,o);l>o&&Me(e.src.charCodeAt(l-1))&&(i=l),e.line=n+1;const a=e.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[n,e.line];const c=e.push("inline","",0);c.content=e.src.slice(o,i).trim(),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(s),-1);return d.markup="########".slice(0,s),!0}function q_(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let i=0,u,s=n+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let h=e.bMarks[s]+e.tShift[s];const p=e.eMarks[s];if(h<p&&(u=e.src.charCodeAt(h),(u===45||u===61)&&(h=e.skipChars(h,u),h=e.skipSpaces(h),h>=p))){i=u===61?1:2;break}}if(e.sCount[s]<0)continue;let f=!1;for(let h=0,p=r.length;h<p;h++)if(r[h](e,s,t,!0)){f=!0;break}if(f)break}if(!i)return!1;const l=e.getLines(n,s,e.blkIndent,!1).trim();e.line=s+1;const a=e.push("heading_open","h"+String(i),1);a.markup=String.fromCharCode(u),a.map=[n,e.line];const c=e.push("inline","",0);c.content=l,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup=String.fromCharCode(u),e.parentType=o,!0}function G_(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let a=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,i,t,!0)){a=!0;break}if(a)break}const u=e.getLines(n,i,e.blkIndent,!1).trim();e.line=i;const s=e.push("paragraph_open","p",1);s.map=[n,e.line];const l=e.push("inline","",0);return l.content=u,l.map=[n,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Si=[["table",k_,["paragraph","reference"]],["code",S_],["fence",E_,["paragraph","reference","blockquote","list"]],["blockquote",A_,["paragraph","reference","blockquote","list"]],["hr",T_,["paragraph","reference","blockquote","list"]],["list",z_,["paragraph","reference","blockquote"]],["reference",F_],["html_block",V_,["paragraph","reference","blockquote"]],["heading",W_,["paragraph","reference","blockquote"]],["lheading",q_],["paragraph",G_]];function Fu(){this.ruler=new In;for(let e=0;e<Si.length;e++)this.ruler.push(Si[e][0],Si[e][1],{alt:(Si[e][2]||[]).slice()})}Fu.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),o=r.length,i=e.md.options.maxNesting;let u=n,s=!1;for(;u<t&&(e.line=u=e.skipEmptyLines(u),!(u>=t||e.sCount[u]<e.blkIndent));){if(e.level>=i){e.line=t;break}const l=e.line;let a=!1;for(let c=0;c<o;c++)if(a=r[c](e,u,t,!1),a){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),u=e.line,u<t&&e.isEmpty(u)&&(s=!0,u++,e.line=u)}};Fu.prototype.parse=function(e,n,t,r){if(!e)return;const o=new this.State(e,n,t,r);this.tokenize(o,o.line,o.lineMax)};Fu.prototype.State=pt;function li(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}li.prototype.pushPending=function(){const e=new Jn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};li.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Jn(e,n,t);let o=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};li.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),o=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===r;)i++;const u=i-e,s=i<t?this.src.charCodeAt(i):32,l=Xo(o)||Zo(String.fromCharCode(o)),a=Xo(s)||Zo(String.fromCharCode(s)),c=Go(o),d=Go(s),f=!d&&(!a||c||l),h=!c&&(!l||d||a);return{can_open:f&&(n||!h||l),can_close:h&&(n||!f||a),length:u}};li.prototype.Token=Jn;function Z_(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function X_(e,n){let t=e.pos;for(;t<e.posMax&&!Z_(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const Y_=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function J_(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const o=e.pending.match(Y_);if(!o)return!1;const i=o[1],u=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!u)return!1;let s=u.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const a=e.push("link_open","a",1);a.attrs=[["href",l]],a.markup="linkify",a.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(s);const d=e.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return e.pos+=s.length-i.length,!0}function Q_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,o=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<o&&Me(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ua=[];for(let e=0;e<256;e++)ua.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ua[e.charCodeAt(0)]=1});function ew(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let o=e.src.charCodeAt(t);if(o===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(o=e.src.charCodeAt(t),!!Me(o));)t++;return e.pos=t,!0}let i=e.src[t];if(o>=55296&&o<=56319&&t+1<r){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const u="\\"+i;if(!n){const s=e.push("text_special","",0);o<256&&ua[o]!==0?s.content=i:s.content=u,s.markup=u,s.info="escape"}return e.pos=t+1,!0}function nw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const o=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const u=e.src.slice(o,t),s=u.length;if(e.backticksScanned&&(e.backticks[s]||0)<=o)return n||(e.pending+=u),e.pos+=s,!0;let l=t,a;for(;(a=e.src.indexOf("`",l))!==-1;){for(l=a+1;l<i&&e.src.charCodeAt(l)===96;)l++;const c=l-a;if(c===s){if(!n){const d=e.push("code_inline","code",0);d.markup=u,d.content=e.src.slice(t,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[c]=a}return e.backticksScanned=!0,n||(e.pending+=u),e.pos+=s,!0}function tw(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const o=e.scanDelims(e.pos,!0);let i=o.length;const u=String.fromCharCode(r);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=u,i--);for(let l=0;l<i;l+=2)s=e.push("text","",0),s.content=u+u,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function Fd(e,n){let t;const r=[],o=n.length;for(let i=0;i<o;i++){const u=n[i];if(u.marker!==126||u.end===-1)continue;const s=n[u.end];t=e.tokens[u.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&r.push(s.token-1)}for(;r.length;){const i=r.pop();let u=i+1;for(;u<e.tokens.length&&e.tokens[u].type==="s_close";)u++;u--,i!==u&&(t=e.tokens[u],e.tokens[u]=e.tokens[i],e.tokens[i]=t)}}function rw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Fd(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Fd(e,n[r].delimiters)}const Dp={tokenize:tw,postProcess:rw};function ow(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const o=e.scanDelims(e.pos,r===42);for(let i=0;i<o.length;i++){const u=e.push("text","",0);u.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function Id(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const o=n[r];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const i=n[o.end],u=r>0&&n[r-1].end===o.end+1&&n[r-1].marker===o.marker&&n[r-1].token===o.token-1&&n[o.end+1].token===i.token+1,s=String.fromCharCode(o.marker),l=e.tokens[o.token];l.type=u?"strong_open":"em_open",l.tag=u?"strong":"em",l.nesting=1,l.markup=u?s+s:s,l.content="";const a=e.tokens[i.token];a.type=u?"strong_close":"em_close",a.tag=u?"strong":"em",a.nesting=-1,a.markup=u?s+s:s,a.content="",u&&(e.tokens[n[r-1].token].content="",e.tokens[n[o.end+1].token].content="",r--)}}function iw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Id(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Id(e,n[r].delimiters)}const zp={tokenize:ow,postProcess:iw};function uw(e,n){let t,r,o,i,u="",s="",l=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let p=h+1;if(p<d&&e.src.charCodeAt(p)===40){for(a=!1,p++;p<d&&(t=e.src.charCodeAt(p),!(!Me(t)&&t!==10));p++);if(p>=d)return!1;if(l=p,o=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),o.ok){for(u=e.md.normalizeLink(o.str),e.md.validateLink(u)?p=o.pos:u="",l=p;p<d&&(t=e.src.charCodeAt(p),!(!Me(t)&&t!==10));p++);if(o=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<d&&l!==p&&o.ok)for(s=o.str,p=o.pos;p<d&&(t=e.src.charCodeAt(p),!(!Me(t)&&t!==10));p++);}(p>=d||e.src.charCodeAt(p)!==41)&&(a=!0),p++}if(a){if(typeof e.env.references>"u")return!1;if(p<d&&e.src.charCodeAt(p)===91?(l=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?r=e.src.slice(l,p++):p=h+1):p=h+1,r||(r=e.src.slice(f,h)),i=e.env.references[zu(r)],!i)return e.pos=c,!1;u=i.href,s=i.title}if(!n){e.pos=f,e.posMax=h;const g=e.push("link_open","a",1),m=[["href",u]];g.attrs=m,s&&m.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=d,!0}function sw(e,n){let t,r,o,i,u,s,l,a,c="";const d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!Me(t)&&t!==10));i++);if(i>=f)return!1;for(a=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(c=e.md.normalizeLink(s.str),e.md.validateLink(c)?i=s.pos:c=""),a=i;i<f&&(t=e.src.charCodeAt(i),!(!Me(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&a!==i&&s.ok)for(l=s.str,i=s.pos;i<f&&(t=e.src.charCodeAt(i),!(!Me(t)&&t!==10));i++);else l="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(a=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?o=e.src.slice(a,i++):i=p+1):i=p+1,o||(o=e.src.slice(h,p)),u=e.env.references[zu(o)],!u)return e.pos=d,!1;c=u.href,l=u.title}if(!n){r=e.src.slice(h,p);const g=[];e.md.inline.parse(r,e.md,e.env,g);const m=e.push("image","img",0),b=[["src",c],["alt",""]];m.attrs=b,m.children=g,m.content=r,l&&b.push(["title",l])}return e.pos=i,e.posMax=f,!0}const lw=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,aw=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function cw(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,o=e.posMax;for(;;){if(++t>=o)return!1;const u=e.src.charCodeAt(t);if(u===60)return!1;if(u===62)break}const i=e.src.slice(r+1,t);if(aw.test(i)){const u=e.md.normalizeLink(i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}if(lw.test(i)){const u=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}return!1}function dw(e){return/^<a[>\s]/i.test(e)}function fw(e){return/^<\/a\s*>/i.test(e)}function hw(e){const n=e|32;return n>=97&&n<=122}function pw(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const o=e.src.charCodeAt(r+1);if(o!==33&&o!==63&&o!==47&&!hw(o))return!1;const i=e.src.slice(r).match(U_);if(!i)return!1;if(!n){const u=e.push("html_inline","",0);u.content=i[0],dw(u.content)&&e.linkLevel++,fw(u.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const gw=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,bw=/^&([a-z][a-z0-9]{1,31});/i;function mw(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(gw);if(i){if(!n){const u=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=oa(u)?Qi(u):Qi(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(bw);if(i){const u=_p(i[0]);if(u!==i[0]){if(!n){const s=e.push("text_special","",0);s.content=u,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Pd(e){const n={},t=e.length;if(!t)return;let r=0,o=-2;const i=[];for(let u=0;u<t;u++){const s=e[u];if(i.push(0),(e[r].marker!==s.marker||o!==s.token-1)&&(r=u),o=s.token,s.length=s.length||0,!s.close)continue;n.hasOwnProperty(s.marker)||(n[s.marker]=[-1,-1,-1,-1,-1,-1]);const l=n[s.marker][(s.open?3:0)+s.length%3];let a=r-i[r]-1,c=a;for(;a>l;a-=i[a]+1){const d=e[a];if(d.marker===s.marker&&d.open&&d.end<0){let f=!1;if((d.close||s.open)&&(d.length+s.length)%3===0&&(d.length%3!==0||s.length%3!==0)&&(f=!0),!f){const h=a>0&&!e[a-1].open?i[a-1]+1:0;i[u]=u-a+h,i[a]=h,s.open=!1,d.end=u,d.close=!1,c=-1,o=-2;break}}}c!==-1&&(n[s.marker][(s.open?3:0)+(s.length||0)%3]=c)}}function vw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Pd(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Pd(n[r].delimiters)}function xw(e){let n,t,r=0;const o=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)o[n].nesting<0&&r--,o[n].level=r,o[n].nesting>0&&r++,o[n].type==="text"&&n+1<i&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}const vs=[["text",X_],["linkify",J_],["newline",Q_],["escape",ew],["backticks",nw],["strikethrough",Dp.tokenize],["emphasis",zp.tokenize],["link",uw],["image",sw],["autolink",cw],["html_inline",pw],["entity",mw]],xs=[["balance_pairs",vw],["strikethrough",Dp.postProcess],["emphasis",zp.postProcess],["fragments_join",xw]];function ai(){this.ruler=new In;for(let e=0;e<vs.length;e++)this.ruler.push(vs[e][0],vs[e][1]);this.ruler2=new In;for(let e=0;e<xs.length;e++)this.ruler2.push(xs[e][0],xs[e][1])}ai.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,o=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let u=!1;if(e.level<o){for(let s=0;s<r;s++)if(e.level++,u=t[s](e,!0),e.level--,u){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;u||e.pos++,i[n]=e.pos};ai.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,o=e.md.options.maxNesting;for(;e.pos<r;){const i=e.pos;let u=!1;if(e.level<o){for(let s=0;s<t;s++)if(u=n[s](e,!1),u){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};ai.prototype.parse=function(e,n,t,r){const o=new this.State(e,n,t,r);this.tokenize(o);const i=this.ruler2.getRules(""),u=i.length;for(let s=0;s<u;s++)i[s](o)};ai.prototype.State=li;function yw(e){const n={};e=e||{},n.src_Any=mp.source,n.src_Cc=vp.source,n.src_Z=yp.source,n.src_P=ta.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function sl(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Iu(e){return Object.prototype.toString.call(e)}function Cw(e){return Iu(e)==="[object String]"}function _w(e){return Iu(e)==="[object Object]"}function ww(e){return Iu(e)==="[object RegExp]"}function Rd(e){return Iu(e)==="[object Function]"}function kw(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Fp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Sw(e){return Object.keys(e||{}).reduce(function(n,t){return n||Fp.hasOwnProperty(t)},!1)}const Ew={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},Aw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Tw="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Dw(e){e.__index__=-1,e.__text_cache__=""}function zw(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Od(){return function(e,n){n.normalize(e)}}function eu(e){const n=e.re=yw(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(Aw),t.push(n.src_xn),n.src_tlds=t.join("|");function r(s){return s.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function i(s,l){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+l)}Object.keys(e.__schemas__).forEach(function(s){const l=e.__schemas__[s];if(l===null)return;const a={validate:null,link:null};if(e.__compiled__[s]=a,_w(l)){ww(l.validate)?a.validate=zw(l.validate):Rd(l.validate)?a.validate=l.validate:i(s,l),Rd(l.normalize)?a.normalize=l.normalize:l.normalize?i(s,l):a.normalize=Od();return}if(Cw(l)){o.push(s);return}i(s,l)}),o.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Od()};const u=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(kw).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Dw(e)}function Fw(e,n){const t=e.__index__,r=e.__last_index__,o=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=o,this.text=o,this.url=o}function ll(e,n){const t=new Fw(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function $n(e,n){if(!(this instanceof $n))return new $n(e,n);n||Sw(e)&&(n=e,e={}),this.__opts__=sl({},Fp,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=sl({},Ew,e),this.__compiled__={},this.__tlds__=Tw,this.__tlds_replaced__=!1,this.re={},eu(this)}$n.prototype.add=function(n,t){return this.__schemas__[n]=t,eu(this),this};$n.prototype.set=function(n){return this.__opts__=sl(this.__opts__,n),this};$n.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,o,i,u,s,l,a,c;if(this.re.schema_test.test(n)){for(l=this.re.schema_search,l.lastIndex=0;(t=l.exec(n))!==null;)if(i=this.testSchemaAt(n,t[2],l.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(a=n.search(this.re.host_fuzzy_test),a>=0&&(this.__index__<0||a<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=r.index+r[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=n.indexOf("@"),c>=0&&(o=n.match(this.re.email_fuzzy))!==null&&(u=o.index+o[1].length,s=o.index+o[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=s))),this.__index__>=0};$n.prototype.pretest=function(n){return this.re.pretest.test(n)};$n.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};$n.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(ll(this,r)),r=this.__last_index__);let o=r?n.slice(r):n;for(;this.test(o);)t.push(ll(this,r)),o=o.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};$n.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,ll(this,0)):null};$n.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),eu(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,eu(this),this)};$n.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};$n.prototype.onCompile=function(){};const Gr=2147483647,it=36,sa=1,Yo=26,Iw=38,Pw=700,Ip=72,Pp=128,Rp="-",Rw=/^xn--/,Ow=/[^\0-\x7F]/,$w=/[\x2E\u3002\uFF0E\uFF61]/g,Bw={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ys=it-sa,ut=Math.floor,Cs=String.fromCharCode;function qt(e){throw new RangeError(Bw[e])}function Mw(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function Op(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace($w,".");const o=e.split("."),i=Mw(o,n).join(".");return r+i}function $p(e){const n=[];let t=0;const r=e.length;for(;t<r;){const o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((o&1023)<<10)+(i&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}const Nw=e=>String.fromCodePoint(...e),Lw=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:it},$d=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},Bp=function(e,n,t){let r=0;for(e=t?ut(e/Pw):e>>1,e+=ut(e/n);e>ys*Yo>>1;r+=it)e=ut(e/ys);return ut(r+(ys+1)*e/(e+Iw))},Mp=function(e){const n=[],t=e.length;let r=0,o=Pp,i=Ip,u=e.lastIndexOf(Rp);u<0&&(u=0);for(let s=0;s<u;++s)e.charCodeAt(s)>=128&&qt("not-basic"),n.push(e.charCodeAt(s));for(let s=u>0?u+1:0;s<t;){const l=r;for(let c=1,d=it;;d+=it){s>=t&&qt("invalid-input");const f=Lw(e.charCodeAt(s++));f>=it&&qt("invalid-input"),f>ut((Gr-r)/c)&&qt("overflow"),r+=f*c;const h=d<=i?sa:d>=i+Yo?Yo:d-i;if(f<h)break;const p=it-h;c>ut(Gr/p)&&qt("overflow"),c*=p}const a=n.length+1;i=Bp(r-l,a,l==0),ut(r/a)>Gr-o&&qt("overflow"),o+=ut(r/a),r%=a,n.splice(r++,0,o)}return String.fromCodePoint(...n)},Np=function(e){const n=[];e=$p(e);const t=e.length;let r=Pp,o=0,i=Ip;for(const l of e)l<128&&n.push(Cs(l));const u=n.length;let s=u;for(u&&n.push(Rp);s<t;){let l=Gr;for(const c of e)c>=r&&c<l&&(l=c);const a=s+1;l-r>ut((Gr-o)/a)&&qt("overflow"),o+=(l-r)*a,r=l;for(const c of e)if(c<r&&++o>Gr&&qt("overflow"),c===r){let d=o;for(let f=it;;f+=it){const h=f<=i?sa:f>=i+Yo?Yo:f-i;if(d<h)break;const p=d-h,g=it-h;n.push(Cs($d(h+p%g,0))),d=ut(p/g)}n.push(Cs($d(d,0))),i=Bp(o,a,s===u),o=0,++s}++o,++r}return n.join("")},jw=function(e){return Op(e,function(n){return Rw.test(n)?Mp(n.slice(4).toLowerCase()):n})},Hw=function(e){return Op(e,function(n){return Ow.test(n)?"xn--"+Np(n):n})},Lp={version:"2.3.1",ucs2:{decode:$p,encode:Nw},decode:Mp,encode:Np,toASCII:Hw,toUnicode:jw},Uw={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Kw={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Vw={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Ww={default:Uw,zero:Kw,commonmark:Vw},qw=/^(vbscript|javascript|file|data):/,Gw=/^data:image\/(gif|png|jpeg|webp);/;function Zw(e){const n=e.trim().toLowerCase();return qw.test(n)?Gw.test(n):!0}const jp=["http:","https:","mailto:"];function Xw(e){const n=na(e,!0);if(n.hostname&&(!n.protocol||jp.indexOf(n.protocol)>=0))try{n.hostname=Lp.toASCII(n.hostname)}catch{}return si(ea(n))}function Yw(e){const n=na(e,!0);if(n.hostname&&(!n.protocol||jp.indexOf(n.protocol)>=0))try{n.hostname=Lp.toUnicode(n.hostname)}catch{}return no(ea(n),no.defaultChars+"%")}function Bn(e,n){if(!(this instanceof Bn))return new Bn(e,n);n||ra(e)||(n=e||{},e="default"),this.inline=new ai,this.block=new Fu,this.core=new ia,this.renderer=new uo,this.linkify=new $n,this.validateLink=Zw,this.normalizeLink=Xw,this.normalizeLinkText=Yw,this.utils=Q8,this.helpers=Du({},r_),this.options={},this.configure(e),n&&this.set(n)}Bn.prototype.set=function(e){return Du(this.options,e),this};Bn.prototype.configure=function(e){const n=this;if(ra(e)){const t=e;if(e=Ww[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};Bn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Bn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Bn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Bn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Bn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Bn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Bn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function Jw(e,n=100){let t=e.replace(/<img\s+[^>]*src\s*=\s*["']([^"']*)["'][^>]*>/gi,"").replace(/!\[(.*?)\]\(.*?\)/g,"");if(n===-1)return t;if(t.length>n){const r=t.lastIndexOf(" ",n),o=r>n*.8?r:n;t=t.substring(0,o)+"..."}return t}function Qw(e){let n=e.replace(/([.$+?{}()|[\]\\])/g,"\\$1");return n=n.replace(/\*\*\/\*/g,"__GLOBSTAR_WITH_SLASH_STAR__").replace(/\*\*/g,"(.*?)").replace(/\*/g,"[^/]*").replace(/__GLOBSTAR_WITH_SLASH_STAR__/g,"(.*?)[^/]*"),new RegExp(`^${n}$`)}function e7(e,n){if(!e.includes("**"))return console.error("模式中不包含 '**'."),null;const t=Qw(e),r=n.match(t);return r&&r[1]!==void 0?r[1]:null}const Pu=d8("Dynamic",{state:()=>({data:[{title:"为什么写博客",content:"博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。",links:""}],theme:"light"}),getters:{},actions:{initData(){const e=new Bn,n=re([]),t=Object.assign({"/src/blog/GIT/git基本操作.md":HC,"/src/blog/GIT/git提交规范.md":KC,"/src/blog/go语言进阶学习.md":WC,"/src/blog/nuxt/Nuxt.md":GC,"/src/blog/typescript/ts.md":XC,"/src/blog/上坪支教日记.md":JC,"/src/blog/测试/实习项目—仿百度云盘.md":e8,"/src/blog/测试/脚手架.md":t8,"/src/blog/预处理器/scss.md":o8});console.log(t),n.value=Object.entries(t).map(([r,o])=>{let i=decodeURIComponent(r.split("/").pop()||"");const u=Jw(o.default),s=f8(u),l=e.render(u.replace(/^---[\s\S]*?---/,"")),a=e7("/src/blog/**/*.md",r);return a&&(i=a+i),{id:i,title:i,date:s.date||"未知日期",excerpt:s.excerpt||l.substring(0,100)+"...",content:o.default}}),this.data=n.value.sort((r,o)=>r.title.localeCompare(o.title)),console.log(n.value)}}}),n7=le({__name:"Menu",setup(e){const n=re([]),t=EC(),r=re(!0),o=Pu(),i=l=>()=>E(Nh,null,{default:()=>E(l)}),u=R(()=>[{whateverLabel:"首页",whateverKey:"home",icon:i(IC),route:"home"},{whateverLabel:"项目",whateverKey:"projects",icon:i(zC),route:"projects"},{whateverLabel:"友链",whateverKey:"links",icon:i($C),route:"links"},{whateverLabel:"关于",whateverKey:"about",icon:i(RC),route:"about"},{whateverLabel:"文章",whateverKey:"articles",icon:i(TC),whateverChildren:n.value},{whateverLabel:"归档",whateverKey:"markdown",icon:i(LC),route:"markdownIndex"},{whateverLabel:"时间线",whateverKey:"timeline",icon:i(MC),route:"time"}]);Mn(()=>{const l=[];n.value=o.data.map(a=>{var c,d;if((c=a.id)!=null&&c.includes("/")){const[f,h]=a.id.split("/");let p=!1;for(let g=0;g<l.length;g++)if(l[g].whateverLabel===f){(d=l[g].whateverChildren)==null||d.push({whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}),p=!0;break}return p||l.push({whateverLabel:f,whateverKey:f,route:"markdown",params:{id:f},whateverChildren:[{whateverLabel:h,whateverKey:a.id,route:"markdown",params:{id:a.id}}]}),null}return{whateverLabel:a.title,whateverKey:a.id,route:"markdown",params:{id:a.id}}}).filter(Boolean),n.value.push(...l),console.log(n.value)});const s=R(()=>{const l=a=>a.map(c=>{const d={...c};if(d.route&&!d.whateverChildren){const f=d.whateverLabel;d.whateverLabel=()=>E(fp,{to:d.params?{name:d.route,params:d.params}:{name:d.route}},{default:()=>f}),d.onClick=()=>{d.params?t.push({name:d.route,params:d.params}):t.push({name:d.route})}}return Array.isArray(d.whateverChildren)&&(d.whateverChildren=l(d.whateverChildren)),d});return l(u.value)});return(l,a)=>(Ke(),kr(He(Xc),{"has-sider":"",class:"xh-menu__container"},{default:Cn(()=>[Ce(He(n5),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:r.value,"show-trigger":"",onCollapse:a[0]||(a[0]=c=>r.value=!0),onExpand:a[1]||(a[1]=c=>r.value=!1)},{default:Cn(()=>[Ce(He(d5),{collapsed:r.value,"collapsed-width":64,"collapsed-icon-size":22,options:s.value,"key-field":"whateverKey","label-field":"whateverLabel","children-field":"whateverChildren"},null,8,["collapsed","options"])]),_:1},8,["collapsed"]),Ce(He(Xc))]),_:1}))}}),or=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},t7=or(n7,[["__scopeId","data-v-1da2e027"]]),r7={class:"xh"},o7=le({__name:"App",setup(e){const n=Pu();n.initData();const t=R(()=>n.theme==="dark"?x5:v5);return(r,o)=>{const i=Bf("router-view");return Ke(),cn("div",r7,[o[0]||(o[0]=ue("div",{class:"line-background"},null,-1)),o[1]||(o[1]=yn()),Ce(He(f4),{"theme-overrides":t.value},{default:Cn(()=>[Ce(t7),Ce(i,null,{default:Cn(({Component:u})=>[Ce(Sr,{name:"router-transition"},{default:Cn(()=>[(Ke(),kr(dg(u)))]),_:2},1024)]),_:1})]),_:1},8,["theme-overrides"]),o[2]||(o[2]=ue("div",{class:"area"},[ue("ul",{class:"circles"},[ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li")])],-1))])}}}),i7=or(o7,[["__scopeId","data-v-bd6162a2"]]),u7="modulepreload",s7=function(e){return"/HaiBlogger/"+e},Bd={},ar=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=s7(l),l in Bd)return;Bd[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":u7,a||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),a)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return o.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},l7=le({__name:"Card",props:{title:{type:String,default:"为什么写博客"},content:{type:String,default:""}},setup(e){const n=e;return(t,r)=>(Ke(),kr(He(c4),{title:n.title,embedded:"",bordered:!1,innerHTML:n.content,class:"markdown-renderer"},null,8,["title","innerHTML"]))}}),a7=or(l7,[["__scopeId","data-v-5a5f85f3"]]),c7={class:"timeline-container"},d7={__name:"TimeLine",setup(e){return(n,t)=>(Ke(),cn("div",c7,[Ce(He(g5),{"item-placement":"right",class:"timeline"},{default:Cn(()=>[Ce(He(po),{content:"初次接触前端",time:"2024-10-09"}),Ce(He(po),{type:"success",title:"纯三件套",content:"自己的第一个博客",time:"2024-12-03"}),Ce(He(po),{type:"error",content:"学习ing"}),Ce(He(po),{type:"warning",title:"一个文档",content:"使用vitepress弄了一个博客",time:"2025-04-03"}),Ce(He(po),{type:"info",title:"本博客",content:"使用这段时间所学去写",time:"2025-07-19"})]),_:1})]))}},f7=or(d7,[["__scopeId","data-v-dc9fe63a"]]),h7={class:"xh-home"},p7={class:"xh-info-container"},g7={class:"xh-avatar-container"},b7={class:"xh-info-text"},m7={class:"xh-job"},v7={class:"xh-bio"},x7={class:"xh-social-container"},y7={class:"xh-social"},C7={class:"card"},_7={class:"xh-home-right"},w7=le({__name:"Home",setup(e){const n=Pu(),t=m5(),r=re("近期动态"),o=re(["近期动态","随笔"]),i=re({padding:"0 6px",borderRadius:t.value.borderRadius,display:"inline-block",color:t.value.baseColor,background:t.value.primaryColor,transition:"all .3s ease-in-out",cursor:"pointer"}),u=re(1),s=R(()=>{if(u.value===1)return n.data;if(u.value===2)return[{title:"为什么写博客",content:"content",links:""}]}),l=()=>{u.value++,r.value=o.value[u.value-1],u.value>5&&(u.value=1)},a=()=>{i.value.background=t.value.primaryColorSuppl},c=()=>{i.value.background=t.value.primaryColor};return(d,f)=>{const h=Bf("Light");return Ke(),cn(Be,null,[ue("div",h7,[ue("div",p7,[Ce(He(Qc),{style:{height:"100vh"}},{default:Cn(()=>[ue("div",g7,[Ce(He(r4),{round:"",size:80,src:"https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",class:"xh-avatar"})]),ue("div",b7,[f[9]||(f[9]=ue("div",{class:"xh-name"},"小海",-1)),ue("div",m7,[Ce(h,null,{default:Cn(()=>[...f[0]||(f[0]=[yn("前端开发者",-1)])]),_:1}),f[1]||(f[1]=yn("-向阳花木易为春",-1))]),f[10]||(f[10]=ue("div",{class:"xh-tags"},[ue("span",{class:"xh-tag"},"Vue"),ue("span",{class:"xh-tag"},"React"),ue("span",{class:"xh-tag"},"jest"),ue("span",{class:"xh-tag"},"Typescript"),ue("span",{class:"xh-tag"},"Javascript"),ue("span",{class:"xh-tag"},"CSS"),ue("span",{class:"xh-tag"},"HTML"),ue("span",{class:"xh-tag"},"Node"),ue("span",{class:"xh-tag"},"Git"),ue("span",{class:"xh-tag"},"Golang")],-1)),ue("div",v7,[f[5]||(f[5]=yn(" hi,",-1)),Ce(h,null,{default:Cn(()=>[...f[2]||(f[2]=[yn("我是小海,也可以称我为褚喧",-1)])]),_:1}),f[6]||(f[6]=yn(",欢迎来到我的博客. 我是一个喜欢学习、喜欢生活、喜欢分享的",-1)),Ce(h,null,{default:Cn(()=>[...f[3]||(f[3]=[yn("Web前端开发者",-1)])]),_:1}),f[7]||(f[7]=yn(",现在的企划只有写前端,学习音乐做一首自己的歌,想要参加开源项目,正在犀牛鸟活动中摸索,希望在未来能够参与更多开源活动,也专注 在一些线下的公益活动,",-1)),Ce(h,null,{default:Cn(()=>[...f[4]||(f[4]=[yn("为世界更美好贡献自己的一份力量",-1)])]),_:1}),f[8]||(f[8]=yn(",和很多人一样,相信技术改变世界 ",-1))]),f[11]||(f[11]=ue("div",{class:"xh-bio"}," 除此以外,我也喜欢二次元,阅读(虽然这段时间的阅读也越来越少),散步,喜欢骑行的风,写文章等,爱好很少,但是可以让我一个人非常充实的活着 ",-1)),Ce(He(B4),null,{default:Cn(()=>[Ce(Sr,{name:"flip",mode:"out-in"},{default:Cn(()=>[(Ke(),kr(He(q4),{key:r.value,text:r.value,patterns:o.value,"highlight-style":i.value,onClick:l,onMouseenter:a,onMouseleave:c},null,8,["text","patterns","highlight-style"]))]),_:1})]),_:1}),ue("div",x7,[Ce(He(Qc),{style:{height:"100%"}},{default:Cn(()=>[ue("div",y7,[(Ke(!0),cn(Be,null,fg(s.value,p=>(Ke(),cn("div",C7,[Ce(a7,{title:p.title,content:p.excerpt},null,8,["title","content"])]))),256))])]),_:1})])])]),_:1})])]),ue("div",_7,[Ce(f7)])],64)}}}),k7=or(w7,[["__scopeId","data-v-46cd620b"]]),S7=[{path:"/",name:"home",component:k7},{path:"/markdown",name:"markdownIndex",component:()=>ar(()=>import("./index-CQxKWzG6.js"),__vite__mapDeps([0,1,2,3]))},{path:"/markdown/:id",name:"markdown",component:()=>ar(()=>import("./markdown-BhdzpUNH.js"),__vite__mapDeps([4,2,5]))},{path:"/projects",name:"projects",component:()=>ar(()=>import("./index-vyUWaGXd.js"),__vite__mapDeps([6,7,8,9]))},{path:"/links",name:"links",component:()=>ar(()=>import("./index-CUorKq26.js"),__vite__mapDeps([10,7,8,11]))},{path:"/about",name:"about",component:()=>ar(()=>import("./index-DWOgy39q.js"),__vite__mapDeps([12,2,13]))},{path:"/time",name:"time",component:()=>ar(()=>import("./index-DVdvHep_.js"),__vite__mapDeps([14,15]))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>ar(()=>import("./index-DJ60bTmr.js"),__vite__mapDeps([16,2,1,17]))}],E7=SC({history:oC(),routes:S7}),A7={__name:"Light",props:{color:{type:String,default:"#9c3c3c"},fontSize:{type:String,default:"0.9375rem"},fontWeight:{type:String,default:"700"},underline:{type:Boolean,default:!1},underlineColor:{type:String,default:""}},setup(e){const n=e,t=R(()=>({"--xh-color":n.color,"--xh-font-size":n.fontSize,"--xh-font-weight":n.fontWeight,"--xh-underline-color":n.underlineColor||n.color}));return(r,o)=>(Ke(),cn("span",{class:su(["xh-light",{underline:e.underline}]),style:Jo(t.value)},[pu(r.$slots,"default",{},void 0,!0)],6))}},T7=or(A7,[["__scopeId","data-v-388b24da"]]),D7=["innerHTML"],z7={key:1},F7=le({__name:"Markdown",props:{theme:{default:"github-dark-dimmed"},src:{default:""},content:{default:""},height:{default:"auto"},width:{default:"auto"}},setup(e){const n=Pu(),t=e,r=re(""),o=re(""),i=re(null);return Mn(async()=>{const u=new Bn({html:!0,linkify:!0,typographer:!0,highlight:(s,l)=>s});Tt(async()=>{if(console.log("props.src",t.src),t.src)try{r.value=n.data.filter(s=>s.title===t.src)[0].content,o.value=u.render(r.value),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}else if(t.content)try{o.value=u.render(t.content),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}})}),(u,s)=>(Ke(),cn("div",{class:"fei-markdown",style:Jo(`${t.width?`width:${t.width}px;`:""}${t.height?`height:${t.height}px;`:""}`)},[o.value?(Ke(),cn("div",{key:0,class:"fei-markdown-body",innerHTML:o.value},null,8,D7)):(Ke(),cn("div",z7,[...s[0]||(s[0]=[ue("p",null,"正在渲染...",-1)])]))],4))}}),I7=or(F7,[["__scopeId","data-v-7d900608"]]),P7={},R7={class:"xh-home"},O7={class:"xh-info-container"};function $7(e,n){return Ke(),cn("div",R7,[ue("div",O7,[pu(e.$slots,"default",{},void 0,!0)])])}const B7=or(P7,[["render",$7],["__scopeId","data-v-6d9483f4"]]),so=Fb(i7);so.use(i8());so.component("Light",T7);so.component("Fei-Markdown",I7);so.component("Fei-Container",B7);so.use(E7);so.mount("#app");export{G7 as $,Sh as A,Fn as B,wn as C,Fe as D,Vn as E,ze as F,W7 as G,Vl as H,lt as I,K7 as J,X as K,on as L,F6 as M,Kl as N,Dn as O,_u as P,ei as Q,Ga as R,wu as S,Sr as T,q7 as U,Vi as V,fr as W,zm as X,ql as Y,De as Z,vc as _,B0 as a,Y6 as a$,xv as a0,Be as a1,Rh as a2,Tt as a3,U7 as a4,V7 as a5,jo as a6,zr as a7,tn as a8,Xe as a9,Cn as aA,He as aB,yn as aC,Qc as aD,L7 as aE,Bf as aF,su as aG,pu as aH,kr as aI,M7 as aJ,Jo as aK,_b as aL,ng as aM,Im as aN,Jt as aO,r4 as aP,c4 as aQ,Nh as aR,B7 as aS,uh as aT,Bh as aU,n6 as aV,Hm as aW,$0 as aX,L1 as aY,v4 as aZ,Z6 as a_,We as aa,Fl as ab,Fi as ac,To as ad,kv as ae,ku as af,R0 as ag,O0 as ah,M0 as ai,Jr as aj,du as ak,ib as al,Qa as am,T0 as an,Ui as ao,D0 as ap,EC as aq,Ke as ar,cn as as,ue as at,m1 as au,N7 as av,fg as aw,or as ax,Pu as ay,Ce as az,If as b,zt as b0,ii as b1,F0 as b2,vr as b3,e6 as b4,mc as b5,Ms as b6,R as c,le as d,Pf as e,Za as f,oo as g,E as h,me as i,om as j,mo as k,H7 as l,Dr as m,pc as n,Mn as o,Ue as p,Kn as q,re as r,Xy as s,je as t,zn as u,V as v,sn as w,L as x,U as y,Ls as z};
