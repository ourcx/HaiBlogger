const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DM3fzegS.js","assets/Result-B1DJM9JT.js","assets/Button-kKvkv6Yz.js","assets/index-BiYTog3K.css","assets/markdown-CL4lJxrI.js","assets/markdown-Csi3vj-V.css","assets/index-Cn2MxuNb.js","assets/Links-u674PWp2.js","assets/Links-B6YxczeT.css","assets/index-BclP51lS.css","assets/index-BTIcUHa3.js","assets/index-DH_QUSme.css","assets/index-DEw4oRff.js","assets/index-Bk9ioEGj.css","assets/index-BLztOZHu.js","assets/index-D6UMQw0C.css","assets/index-C272qx4u.js","assets/index-DpnLAlwd.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function el(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Ie={},Rr=[],ot=()=>{},Yp=()=>!1,Xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),nl=e=>e.startsWith("onUpdate:"),nn=Object.assign,tl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Jp=Object.prototype.hasOwnProperty,Te=(e,n)=>Jp.call(e,n),ge=Array.isArray,Or=e=>Yi(e)==="[object Map]",$d=e=>Yi(e)==="[object Set]",me=e=>typeof e=="function",Ve=e=>typeof e=="string",St=e=>typeof e=="symbol",Me=e=>e!==null&&typeof e=="object",Id=e=>(Me(e)||me(e))&&me(e.then)&&me(e.catch),Rd=Object.prototype.toString,Yi=e=>Rd.call(e),Qp=e=>Yi(e).slice(8,-1),Od=e=>Yi(e)==="[object Object]",rl=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},e1=/-(\w)/g,Nn=Ji(e=>e.replace(e1,(n,t)=>t?t.toUpperCase():"")),n1=/\B([A-Z])/g,_r=Ji(e=>e.replace(n1,"-$1").toLowerCase()),Qi=Ji(e=>e.charAt(0).toUpperCase()+e.slice(1)),Eu=Ji(e=>e?`on${Qi(e)}`:""),Wt=(e,n)=>!Object.is(e,n),Au=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},hs=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},t1=e=>{const n=parseFloat(e);return isNaN(n)?e:n},r1=e=>{const n=Ve(e)?Number(e):NaN;return isNaN(n)?e:n};let ta;const eu=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vo(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=Ve(r)?s1(r):Vo(r);if(o)for(const i in o)n[i]=o[i]}return n}else if(Ve(e)||Me(e))return e}const o1=/;(?![^(]*\))/g,i1=/:([^]+)/,u1=/\/\*[^]*?\*\//g;function s1(e){const n={};return e.replace(u1,"").split(o1).forEach(t=>{if(t){const r=t.split(i1);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function nu(e){let n="";if(Ve(e))n=e;else if(ge(e))for(let t=0;t<e.length;t++){const r=nu(e[t]);r&&(n+=r+" ")}else if(Me(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const l1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a1=el(l1);function Md(e){return!!e||e===""}const Bd=e=>!!(e&&e.__v_isRef===!0),c1=e=>Ve(e)?e:e==null?"":ge(e)||Me(e)&&(e.toString===Rd||!me(e.toString))?Bd(e)?c1(e.value):JSON.stringify(e,Ld,2):String(e),Ld=(e,n)=>Bd(n)?Ld(e,n.value):Or(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o],i)=>(t[Tu(r,i)+" =>"]=o,t),{})}:$d(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Tu(t))}:St(n)?Tu(n):Me(n)&&!ge(n)&&!Od(n)?String(n):n,Tu=(e,n="")=>{var t;return St(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class Nd{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!n&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=hn;try{return hn=this,n()}finally{hn=t}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function jd(e){return new Nd(e)}function Hd(){return hn}function d1(e,n=!1){hn&&hn.cleanups.push(e)}let Re;const Du=new WeakSet;class Ud{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Du.has(this)&&(Du.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ra(this),qd(this);const n=Re,t=qn;Re=this,qn=!0;try{return this.fn()}finally{Vd(this),Re=n,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)ul(n);this.deps=this.depsTail=void 0,ra(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Du.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let Kd=0,ho,po;function Wd(e,n=!1){if(e.flags|=8,n){e.next=po,po=e;return}e.next=ho,ho=e}function ol(){Kd++}function il(){if(--Kd>0)return;if(po){let n=po;for(po=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ho;){let n=ho;for(ho=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function qd(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Vd(e){let n,t=e.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),ul(r),f1(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=n,e.depsTail=t}function ps(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Gd(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Gd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Eo)||(e.globalVersion=Eo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ps(e))))return;e.flags|=2;const n=e.dep,t=Re,r=qn;Re=e,qn=!0;try{qd(e);const o=e.fn(e._value);(n.version===0||Wt(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{Re=t,qn=r,Vd(e),e.flags&=-3}}function ul(e,n=!1){const{dep:t,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ul(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function f1(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let qn=!0;const Zd=[];function yt(){Zd.push(qn),qn=!1}function Ct(){const e=Zd.pop();qn=e===void 0?!0:e}function ra(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Re;Re=void 0;try{n()}finally{Re=t}}}let Eo=0;class h1{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sl{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Re||!qn||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new h1(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,Xd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(n){this.version++,Eo++,this.notify(n)}notify(n){ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{il()}}}function Xd(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Xd(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Ti=new WeakMap,dr=Symbol(""),gs=Symbol(""),Ao=Symbol("");function pn(e,n,t){if(qn&&Re){let r=Ti.get(e);r||Ti.set(e,r=new Map);let o=r.get(t);o||(r.set(t,o=new sl),o.map=r,o.key=t),o.track()}}function vt(e,n,t,r,o,i){const u=Ti.get(e);if(!u){Eo++;return}const s=l=>{l&&l.trigger()};if(ol(),n==="clear")u.forEach(s);else{const l=ge(e),a=l&&rl(t);if(l&&t==="length"){const c=Number(r);u.forEach((d,f)=>{(f==="length"||f===Ao||!St(f)&&f>=c)&&s(d)})}else switch((t!==void 0||u.has(void 0))&&s(u.get(t)),a&&s(u.get(Ao)),n){case"add":l?a&&s(u.get("length")):(s(u.get(dr)),Or(e)&&s(u.get(gs)));break;case"delete":l||(s(u.get(dr)),Or(e)&&s(u.get(gs)));break;case"set":Or(e)&&s(u.get(dr));break}}il()}function p1(e,n){const t=Ti.get(e);return t&&t.get(n)}function Ar(e){const n=Se(e);return n===e?n:(pn(n,"iterate",Ao),Ln(e)?n:n.map(an))}function tu(e){return pn(e=Se(e),"iterate",Ao),e}const g1={__proto__:null,[Symbol.iterator](){return zu(this,Symbol.iterator,an)},concat(...e){return Ar(this).concat(...e.map(n=>ge(n)?Ar(n):n))},entries(){return zu(this,"entries",e=>(e[1]=an(e[1]),e))},every(e,n){return ht(this,"every",e,n,void 0,arguments)},filter(e,n){return ht(this,"filter",e,n,t=>t.map(an),arguments)},find(e,n){return ht(this,"find",e,n,an,arguments)},findIndex(e,n){return ht(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return ht(this,"findLast",e,n,an,arguments)},findLastIndex(e,n){return ht(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return ht(this,"forEach",e,n,void 0,arguments)},includes(...e){return Fu(this,"includes",e)},indexOf(...e){return Fu(this,"indexOf",e)},join(e){return Ar(this).join(e)},lastIndexOf(...e){return Fu(this,"lastIndexOf",e)},map(e,n){return ht(this,"map",e,n,void 0,arguments)},pop(){return no(this,"pop")},push(...e){return no(this,"push",e)},reduce(e,...n){return oa(this,"reduce",e,n)},reduceRight(e,...n){return oa(this,"reduceRight",e,n)},shift(){return no(this,"shift")},some(e,n){return ht(this,"some",e,n,void 0,arguments)},splice(...e){return no(this,"splice",e)},toReversed(){return Ar(this).toReversed()},toSorted(e){return Ar(this).toSorted(e)},toSpliced(...e){return Ar(this).toSpliced(...e)},unshift(...e){return no(this,"unshift",e)},values(){return zu(this,"values",an)}};function zu(e,n,t){const r=tu(e),o=r[n]();return r!==e&&!Ln(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=t(i.value)),i}),o}const b1=Array.prototype;function ht(e,n,t,r,o,i){const u=tu(e),s=u!==e&&!Ln(e),l=u[n];if(l!==b1[n]){const d=l.apply(e,i);return s?an(d):d}let a=t;u!==e&&(s?a=function(d,f){return t.call(this,an(d),f,e)}:t.length>2&&(a=function(d,f){return t.call(this,d,f,e)}));const c=l.call(u,a,r);return s&&o?o(c):c}function oa(e,n,t,r){const o=tu(e);let i=t;return o!==e&&(Ln(e)?t.length>3&&(i=function(u,s,l){return t.call(this,u,s,l,e)}):i=function(u,s,l){return t.call(this,u,an(s),l,e)}),o[n](i,...r)}function Fu(e,n,t){const r=Se(e);pn(r,"iterate",Ao);const o=r[n](...t);return(o===-1||o===!1)&&cl(t[0])?(t[0]=Se(t[0]),r[n](...t)):o}function no(e,n,t=[]){yt(),ol();const r=Se(e)[n].apply(e,t);return il(),Ct(),r}const m1=el("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(St));function v1(e){St(e)||(e=String(e));const n=Se(this);return pn(n,"has",e),n.hasOwnProperty(e)}class Jd{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?T1:tf:i?nf:ef).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const u=ge(n);if(!o){let l;if(u&&(l=g1[t]))return l;if(t==="hasOwnProperty")return v1}const s=Reflect.get(n,t,Ge(n)?n:r);return(St(t)?Yd.has(t):m1(t))||(o||pn(n,"get",t),i)?s:Ge(s)?u&&rl(t)?s:s.value:Me(s)?o?Hr(s):Xr(s):s}}class Qd extends Jd{constructor(n=!1){super(!1,n)}set(n,t,r,o){let i=n[t];if(!this._isShallow){const l=Gt(i);if(!Ln(r)&&!Gt(r)&&(i=Se(i),r=Se(r)),!ge(n)&&Ge(i)&&!Ge(r))return l?!1:(i.value=r,!0)}const u=ge(n)&&rl(t)?Number(t)<n.length:Te(n,t),s=Reflect.set(n,t,r,Ge(n)?n:o);return n===Se(o)&&(u?Wt(r,i)&&vt(n,"set",t,r):vt(n,"add",t,r)),s}deleteProperty(n,t){const r=Te(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&r&&vt(n,"delete",t,void 0),o}has(n,t){const r=Reflect.has(n,t);return(!St(t)||!Yd.has(t))&&pn(n,"has",t),r}ownKeys(n){return pn(n,"iterate",ge(n)?"length":dr),Reflect.ownKeys(n)}}class x1 extends Jd{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const y1=new Qd,C1=new x1,_1=new Qd(!0);const bs=e=>e,ui=e=>Reflect.getPrototypeOf(e);function w1(e,n,t){return function(...r){const o=this.__v_raw,i=Se(o),u=Or(i),s=e==="entries"||e===Symbol.iterator&&u,l=e==="keys"&&u,a=o[e](...r),c=t?bs:n?Di:an;return!n&&pn(i,"iterate",l?gs:dr),{next(){const{value:d,done:f}=a.next();return f?{value:d,done:f}:{value:s?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function si(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function k1(e,n){const t={get(o){const i=this.__v_raw,u=Se(i),s=Se(o);e||(Wt(o,s)&&pn(u,"get",o),pn(u,"get",s));const{has:l}=ui(u),a=n?bs:e?Di:an;if(l.call(u,o))return a(i.get(o));if(l.call(u,s))return a(i.get(s));i!==u&&i.get(o)},get size(){const o=this.__v_raw;return!e&&pn(Se(o),"iterate",dr),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,u=Se(i),s=Se(o);return e||(Wt(o,s)&&pn(u,"has",o),pn(u,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const u=this,s=u.__v_raw,l=Se(s),a=n?bs:e?Di:an;return!e&&pn(l,"iterate",dr),s.forEach((c,d)=>o.call(i,a(c),a(d),u))}};return nn(t,e?{add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear")}:{add(o){!n&&!Ln(o)&&!Gt(o)&&(o=Se(o));const i=Se(this);return ui(i).has.call(i,o)||(i.add(o),vt(i,"add",o,o)),this},set(o,i){!n&&!Ln(i)&&!Gt(i)&&(i=Se(i));const u=Se(this),{has:s,get:l}=ui(u);let a=s.call(u,o);a||(o=Se(o),a=s.call(u,o));const c=l.call(u,o);return u.set(o,i),a?Wt(i,c)&&vt(u,"set",o,i):vt(u,"add",o,i),this},delete(o){const i=Se(this),{has:u,get:s}=ui(i);let l=u.call(i,o);l||(o=Se(o),l=u.call(i,o)),s&&s.call(i,o);const a=i.delete(o);return l&&vt(i,"delete",o,void 0),a},clear(){const o=Se(this),i=o.size!==0,u=o.clear();return i&&vt(o,"clear",void 0,void 0),u}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=w1(o,e,n)}),t}function ll(e,n){const t=k1(e,n);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(Te(t,o)&&o in r?t:r,o,i)}const S1={get:ll(!1,!1)},E1={get:ll(!1,!0)},A1={get:ll(!0,!1)};const ef=new WeakMap,nf=new WeakMap,tf=new WeakMap,T1=new WeakMap;function D1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z1(e){return e.__v_skip||!Object.isExtensible(e)?0:D1(Qp(e))}function Xr(e){return Gt(e)?e:al(e,!1,y1,S1,ef)}function rf(e){return al(e,!1,_1,E1,nf)}function Hr(e){return al(e,!0,C1,A1,tf)}function al(e,n,t,r,o){if(!Me(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=z1(e);if(i===0)return e;const u=o.get(e);if(u)return u;const s=new Proxy(e,i===2?r:t);return o.set(e,s),s}function qt(e){return Gt(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function cl(e){return e?!!e.__v_raw:!1}function Se(e){const n=e&&e.__v_raw;return n?Se(n):e}function To(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&hs(e,"__v_skip",!0),e}const an=e=>Me(e)?Xr(e):e,Di=e=>Me(e)?Hr(e):e;function Ge(e){return e?e.__v_isRef===!0:!1}function te(e){return uf(e,!1)}function of(e){return uf(e,!0)}function uf(e,n){return Ge(e)?e:new F1(e,n)}class F1{constructor(n,t){this.dep=new sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Se(n),this._value=t?n:an(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Ln(n)||Gt(n);n=r?n:Se(n),Wt(n,t)&&(this._rawValue=n,this._value=r?n:an(n),this.dep.trigger())}}function We(e){return Ge(e)?e.value:e}const P1={get:(e,n,t)=>n==="__v_raw"?e:We(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return Ge(o)&&!Ge(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function sf(e){return qt(e)?e:new Proxy(e,P1)}function $1(e){const n=ge(e)?new Array(e.length):{};for(const t in e)n[t]=lf(e,t);return n}class I1{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const n=this._object[this._key];return this._value=n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return p1(Se(this._object),this._key)}}class R1{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function He(e,n,t){return Ge(e)?e:me(e)?new R1(e):Me(e)&&arguments.length>1?lf(e,n,t):te(e)}function lf(e,n,t){const r=e[n];return Ge(r)?r:new I1(e,n,t)}class O1{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Wd(this,!0),!0}get value(){const n=this.dep.track();return Gd(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function M1(e,n,t=!1){let r,o;return me(e)?r=e:(r=e.get,o=e.set),new O1(r,o,t)}const li={},zi=new WeakMap;let ur;function B1(e,n=!1,t=ur){if(t){let r=zi.get(t);r||zi.set(t,r=[]),r.push(e)}}function L1(e,n,t=Ie){const{immediate:r,deep:o,once:i,scheduler:u,augmentJob:s,call:l}=t,a=y=>o?y:Ln(y)||o===!1||o===0?xt(y,1):xt(y);let c,d,f,h,p=!1,g=!1;if(Ge(e)?(d=()=>e.value,p=Ln(e)):qt(e)?(d=()=>a(e),p=!0):ge(e)?(g=!0,p=e.some(y=>qt(y)||Ln(y)),d=()=>e.map(y=>{if(Ge(y))return y.value;if(qt(y))return a(y);if(me(y))return l?l(y,2):y()})):me(e)?n?d=l?()=>l(e,2):e:d=()=>{if(f){yt();try{f()}finally{Ct()}}const y=ur;ur=c;try{return l?l(e,3,[h]):e(h)}finally{ur=y}}:d=ot,n&&o){const y=d,k=o===!0?1/0:o;d=()=>xt(y(),k)}const m=Hd(),b=()=>{c.stop(),m&&m.active&&tl(m.effects,c)};if(i&&n){const y=n;n=(...k)=>{y(...k),b()}}let v=g?new Array(e.length).fill(li):li;const w=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(n){const k=c.run();if(o||p||(g?k.some((T,_)=>Wt(T,v[_])):Wt(k,v))){f&&f();const T=ur;ur=c;try{const _=[k,v===li?void 0:g&&v[0]===li?[]:v,h];v=k,l?l(n,3,_):n(..._)}finally{ur=T}}}else c.run()};return s&&s(w),c=new Ud(d),c.scheduler=u?()=>u(w,!1):w,h=y=>B1(y,!1,c),f=c.onStop=()=>{const y=zi.get(c);if(y){if(l)l(y,4);else for(const k of y)k();zi.delete(c)}},n?r?w(!0):v=c.run():u?u(w.bind(null,!0),!0):c.run(),b.pause=c.pause.bind(c),b.resume=c.resume.bind(c),b.stop=b,b}function xt(e,n=1/0,t){if(n<=0||!Me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,Ge(e))xt(e.value,n,t);else if(ge(e))for(let r=0;r<e.length;r++)xt(e[r],n,t);else if($d(e)||Or(e))e.forEach(r=>{xt(r,n,t)});else if(Od(e)){for(const r in e)xt(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&xt(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Go(e,n,t,r){try{return r?e(...r):e()}catch(o){ru(o,n,t)}}function Vn(e,n,t,r){if(me(e)){const o=Go(e,n,t,r);return o&&Id(o)&&o.catch(i=>{ru(i,n,t)}),o}if(ge(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Vn(e[i],n,t,r));return o}}function ru(e,n,t,r=!0){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:u}=n&&n.appContext.config||Ie;if(n){let s=n.parent;const l=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,a)===!1)return}s=s.parent}if(i){yt(),Go(i,null,10,[e,l,a]),Ct();return}}N1(e,t,o,r,u)}function N1(e,n,t,r=!0,o=!1){if(o)throw e;console.error(e)}const yn=[];let et=-1;const Mr=[];let Ot=null,$r=0;const af=Promise.resolve();let Fi=null;function Zo(e){const n=Fi||af;return e?n.then(this?e.bind(this):e):n}function j1(e){let n=et+1,t=yn.length;for(;n<t;){const r=n+t>>>1,o=yn[r],i=Do(o);i<e||i===e&&o.flags&2?n=r+1:t=r}return n}function dl(e){if(!(e.flags&1)){const n=Do(e),t=yn[yn.length-1];!t||!(e.flags&2)&&n>=Do(t)?yn.push(e):yn.splice(j1(n),0,e),e.flags|=1,cf()}}function cf(){Fi||(Fi=af.then(ff))}function H1(e){ge(e)?Mr.push(...e):Ot&&e.id===-1?Ot.splice($r+1,0,e):e.flags&1||(Mr.push(e),e.flags|=1),cf()}function ia(e,n,t=et+1){for(;t<yn.length;t++){const r=yn[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;yn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function df(e){if(Mr.length){const n=[...new Set(Mr)].sort((t,r)=>Do(t)-Do(r));if(Mr.length=0,Ot){Ot.push(...n);return}for(Ot=n,$r=0;$r<Ot.length;$r++){const t=Ot[$r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ot=null,$r=0}}const Do=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ff(e){try{for(et=0;et<yn.length;et++){const n=yn[et];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Go(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;et<yn.length;et++){const n=yn[et];n&&(n.flags&=-2)}et=-1,yn.length=0,df(),Fi=null,(yn.length||Mr.length)&&ff()}}let Qe=null,hf=null;function Pi(e){const n=Qe;return Qe=e,hf=e&&e.type.__scopeId||null,n}function xn(e,n=Qe,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&xa(-1);const i=Pi(n);let u;try{u=e(...o)}finally{Pi(i),r._d&&xa(1)}return u};return r._n=!0,r._c=!0,r._d=!0,r}function ou(e,n){if(Qe===null)return e;const t=au(Qe),r=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[i,u,s,l=Ie]=n[o];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&xt(u),r.push({dir:i,instance:t,value:u,oldValue:void 0,arg:s,modifiers:l}))}return e}function nr(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let u=0;u<o.length;u++){const s=o[u];i&&(s.oldValue=i[u].value);let l=s.dir[r];l&&(yt(),Vn(l,t,8,[e.el,s,e,n]),Ct())}}const pf=Symbol("_vte"),gf=e=>e.__isTeleport,go=e=>e&&(e.disabled||e.disabled===""),ua=e=>e&&(e.defer||e.defer===""),sa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,la=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ms=(e,n)=>{const t=e&&e.to;return Ve(t)?n?n(t):null:t},bf={name:"Teleport",__isTeleport:!0,process(e,n,t,r,o,i,u,s,l,a){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:g,createComment:m}}=a,b=go(n.props);let{shapeFlag:v,children:w,dynamicChildren:y}=n;if(e==null){const k=n.el=g(""),T=n.anchor=g("");h(k,t,r),h(T,t,r);const _=(S,z)=>{v&16&&(o&&o.isCE&&(o.ce._teleportTarget=S),c(w,S,z,o,i,u,s,l))},E=()=>{const S=n.target=ms(n.props,p),z=mf(S,n,g,h);S&&(u!=="svg"&&sa(S)?u="svg":u!=="mathml"&&la(S)&&(u="mathml"),b||(_(S,z),_i(n,!1)))};b&&(_(t,T),_i(n,!0)),ua(n.props)?(n.el.__isMounted=!1,mn(()=>{E(),delete n.el.__isMounted},i)):E()}else{if(ua(n.props)&&e.el.__isMounted===!1){mn(()=>{bf.process(e,n,t,r,o,i,u,s,l,a)},i);return}n.el=e.el,n.targetStart=e.targetStart;const k=n.anchor=e.anchor,T=n.target=e.target,_=n.targetAnchor=e.targetAnchor,E=go(e.props),S=E?t:T,z=E?k:_;if(u==="svg"||sa(T)?u="svg":(u==="mathml"||la(T))&&(u="mathml"),y?(f(e.dynamicChildren,y,S,o,i,u,s),ml(e,n,!0)):l||d(e,n,S,z,o,i,u,s,!1),b)E?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):ai(n,t,k,a,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const j=n.target=ms(n.props,p);j&&ai(n,j,null,a,0)}else E&&ai(n,T,_,a,1);_i(n,b)}},remove(e,n,t,{um:r,o:{remove:o}},i){const{shapeFlag:u,children:s,anchor:l,targetStart:a,targetAnchor:c,target:d,props:f}=e;if(d&&(o(a),o(c)),i&&o(l),u&16){const h=i||!go(f);for(let p=0;p<s.length;p++){const g=s[p];r(g,n,t,h,!!g.dynamicChildren)}}},move:ai,hydrate:U1};function ai(e,n,t,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,n,t);const{el:u,anchor:s,shapeFlag:l,children:a,props:c}=e,d=i===2;if(d&&r(u,n,t),(!d||go(c))&&l&16)for(let f=0;f<a.length;f++)o(a[f],n,t,2);d&&r(s,n,t)}function U1(e,n,t,r,o,i,{o:{nextSibling:u,parentNode:s,querySelector:l,insert:a,createText:c}},d){const f=n.target=ms(n.props,l);if(f){const h=go(n.props),p=f._lpa||f.firstChild;if(n.shapeFlag&16)if(h)n.anchor=d(u(e),n,s(e),t,r,o,i),n.targetStart=p,n.targetAnchor=p&&u(p);else{n.anchor=u(e);let g=p;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")n.targetStart=g;else if(g.data==="teleport anchor"){n.targetAnchor=g,f._lpa=n.targetAnchor&&u(n.targetAnchor);break}}g=u(g)}n.targetAnchor||mf(f,n,c,a),d(p&&u(p),n,f,t,r,o,i)}_i(n,h)}return n.anchor&&u(n.anchor)}const K1=bf;function _i(e,n){const t=e.ctx;if(t&&t.ut){let r,o;for(n?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function mf(e,n,t,r){const o=n.targetStart=t(""),i=n.targetAnchor=t("");return o[pf]=i,e&&(r(o,e),r(i,e)),i}const Mt=Symbol("_leaveCb"),ci=Symbol("_enterCb");function vf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rn(()=>{e.isMounted=!0}),Hn(()=>{e.isUnmounting=!0}),e}const Mn=[Function,Array],xf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},yf=e=>{const n=e.subTree;return n.component?yf(n.component):n},W1={name:"BaseTransition",props:xf,setup(e,{slots:n}){const t=Jo(),r=vf();return()=>{const o=n.default&&fl(n.default(),!0);if(!o||!o.length)return;const i=Cf(o),u=Se(e),{mode:s}=u;if(r.isLeaving)return Pu(i);const l=aa(i);if(!l)return Pu(i);let a=zo(l,u,r,t,d=>a=d);l.type!==Je&&mr(l,a);let c=t.subTree&&aa(t.subTree);if(c&&c.type!==Je&&!sr(l,c)&&yf(t).type!==Je){let d=zo(c,u,r,t);if(mr(c,d),s==="out-in"&&l.type!==Je)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Pu(i);s==="in-out"&&l.type!==Je?d.delayLeave=(f,h,p)=>{const g=_f(r,c);g[String(c.key)]=c,f[Mt]=()=>{h(),f[Mt]=void 0,delete a.delayedLeave,c=void 0},a.delayedLeave=()=>{p(),delete a.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Cf(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Je){n=t;break}}return n}const q1=W1;function _f(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function zo(e,n,t,r,o){const{appear:i,mode:u,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:b,onAfterAppear:v,onAppearCancelled:w}=n,y=String(e.key),k=_f(t,e),T=(S,z)=>{S&&Vn(S,r,9,z)},_=(S,z)=>{const j=z[1];T(S,z),ge(S)?S.every(P=>P.length<=1)&&j():S.length<=1&&j()},E={mode:u,persisted:s,beforeEnter(S){let z=l;if(!t.isMounted)if(i)z=m||l;else return;S[Mt]&&S[Mt](!0);const j=k[y];j&&sr(e,j)&&j.el[Mt]&&j.el[Mt](),T(z,[S])},enter(S){let z=a,j=c,P=d;if(!t.isMounted)if(i)z=b||a,j=v||c,P=w||d;else return;let q=!1;const G=S[ci]=R=>{q||(q=!0,R?T(P,[S]):T(j,[S]),E.delayedLeave&&E.delayedLeave(),S[ci]=void 0)};z?_(z,[S,G]):G()},leave(S,z){const j=String(e.key);if(S[ci]&&S[ci](!0),t.isUnmounting)return z();T(f,[S]);let P=!1;const q=S[Mt]=G=>{P||(P=!0,z(),G?T(g,[S]):T(p,[S]),S[Mt]=void 0,k[j]===e&&delete k[j])};k[j]=e,h?_(h,[S,q]):q()},clone(S){const z=zo(S,n,t,r,o);return o&&o(z),z}};return E}function Pu(e){if(iu(e))return e=wt(e),e.children=null,e}function aa(e){if(!iu(e))return gf(e.type)&&e.children?Cf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&me(t.default))return t.default()}}function mr(e,n){e.shapeFlag&6&&e.component?(e.transition=n,mr(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function fl(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let u=e[i];const s=t==null?u.key:String(t)+String(u.key!=null?u.key:i);u.type===Ne?(u.patchFlag&128&&o++,r=r.concat(fl(u.children,n,s))):(n||u.type!==Je)&&r.push(s!=null?wt(u,{key:s}):u)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ae(e,n){return me(e)?nn({name:e.name},n,{setup:e}):e}function wf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function bo(e,n,t,r,o=!1){if(ge(e)){e.forEach((p,g)=>bo(p,n&&(ge(n)?n[g]:n),t,r,o));return}if(Br(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bo(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?au(r.component):r.el,u=o?null:i,{i:s,r:l}=e,a=n&&n.r,c=s.refs===Ie?s.refs={}:s.refs,d=s.setupState,f=Se(d),h=d===Ie?()=>!1:p=>Te(f,p);if(a!=null&&a!==l&&(Ve(a)?(c[a]=null,h(a)&&(d[a]=null)):Ge(a)&&(a.value=null)),me(l))Go(l,s,12,[u,c]);else{const p=Ve(l),g=Ge(l);if(p||g){const m=()=>{if(e.f){const b=p?h(l)?d[l]:c[l]:l.value;o?ge(b)&&tl(b,i):ge(b)?b.includes(i)||b.push(i):p?(c[l]=[i],h(l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=u,h(l)&&(d[l]=u)):g&&(l.value=u,e.k&&(c[e.k]=u))};u?(m.id=-1,mn(m,t)):m()}}}eu().requestIdleCallback;eu().cancelIdleCallback;const Br=e=>!!e.type.__asyncLoader,iu=e=>e.type.__isKeepAlive;function kf(e,n){Ef(e,"a",n)}function Sf(e,n){Ef(e,"da",n)}function Ef(e,n,t=rn){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(uu(n,r,t),t){let o=t.parent;for(;o&&o.parent;)iu(o.parent.vnode)&&V1(r,n,t,o),o=o.parent}}function V1(e,n,t,r){const o=uu(n,e,r,!0);Tf(()=>{tl(r[n],o)},t)}function uu(e,n,t=rn,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...u)=>{yt();const s=Qo(t),l=Vn(n,t,e,u);return s(),Ct(),l});return r?o.unshift(i):o.push(i),i}}const Et=e=>(n,t=rn)=>{(!Po||e==="sp")&&uu(e,(...r)=>n(...r),t)},Xo=Et("bm"),Rn=Et("m"),G1=Et("bu"),Af=Et("u"),Hn=Et("bum"),Tf=Et("um"),Z1=Et("sp"),X1=Et("rtg"),Y1=Et("rtc");function J1(e,n=rn){uu("ec",e,n)}const hl="components",Q1="directives";function Df(e,n){return pl(hl,e,!0,n)||e}const zf=Symbol.for("v-ndc");function eg(e){return Ve(e)?pl(hl,e,!1)||e:e||zf}function A7(e){return pl(Q1,e)}function pl(e,n,t=!0,r=!1){const o=Qe||rn;if(o){const i=o.type;if(e===hl){const s=jg(i,!1);if(s&&(s===n||s===Nn(n)||s===Qi(Nn(n))))return i}const u=ca(o[e]||i[e],n)||ca(o.appContext[e],n);return!u&&r?i:u}}function ca(e,n){return e&&(e[n]||e[Nn(n)]||e[Qi(Nn(n))])}function ng(e,n,t,r){let o;const i=t,u=ge(e);if(u||Ve(e)){const s=u&&qt(e);let l=!1,a=!1;s&&(l=!Ln(e),a=Gt(e),e=tu(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=n(l?a?Di(an(e[c])):an(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i)}else if(Me(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>n(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const c=s[l];o[l]=n(e[c],c,l,i)}}else o=[];return o}function su(e,n,t={},r,o){if(Qe.ce||Qe.parent&&Br(Qe.parent)&&Qe.parent.ce)return n!=="default"&&(t.name=n),Ue(),vr(Ne,null,[Ce("slot",t,r&&r())],64);let i=e[n];i&&i._c&&(i._d=!1),Ue();const u=i&&Ff(i(t)),s=t.key||u&&u.key,l=vr(Ne,{key:(s&&!St(s)?s:`_${n}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Ff(e){return e.some(n=>Ur(n)?!(n.type===Je||n.type===Ne&&!Ff(n.children)):!0)?e:null}const vs=e=>e?Zf(e)?au(e):vs(e.parent):null,mo=nn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vs(e.parent),$root:e=>vs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$f(e),$forceUpdate:e=>e.f||(e.f=()=>{dl(e.update)}),$nextTick:e=>e.n||(e.n=Zo.bind(e.proxy)),$watch:e=>wg.bind(e)}),$u=(e,n)=>e!==Ie&&!e.__isScriptSetup&&Te(e,n),tg={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:u,type:s,appContext:l}=e;let a;if(n[0]!=="$"){const h=u[n];if(h!==void 0)switch(h){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if($u(r,n))return u[n]=1,r[n];if(o!==Ie&&Te(o,n))return u[n]=2,o[n];if((a=e.propsOptions[0])&&Te(a,n))return u[n]=3,i[n];if(t!==Ie&&Te(t,n))return u[n]=4,t[n];xs&&(u[n]=0)}}const c=mo[n];let d,f;if(c)return n==="$attrs"&&pn(e.attrs,"get",""),c(e);if((d=s.__cssModules)&&(d=d[n]))return d;if(t!==Ie&&Te(t,n))return u[n]=4,t[n];if(f=l.config.globalProperties,Te(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return $u(o,n)?(o[n]=t,!0):r!==Ie&&Te(r,n)?(r[n]=t,!0):Te(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:i}},u){let s;return!!t[u]||e!==Ie&&Te(e,u)||$u(n,u)||(s=i[0])&&Te(s,u)||Te(r,u)||Te(mo,u)||Te(o.config.globalProperties,u)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Te(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function da(e){return ge(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let xs=!0;function rg(e){const n=$f(e),t=e.proxy,r=e.ctx;xs=!1,n.beforeCreate&&fa(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:u,watch:s,provide:l,inject:a,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:p,activated:g,deactivated:m,beforeDestroy:b,beforeUnmount:v,destroyed:w,unmounted:y,render:k,renderTracked:T,renderTriggered:_,errorCaptured:E,serverPrefetch:S,expose:z,inheritAttrs:j,components:P,directives:q,filters:G}=n;if(a&&og(a,r,null),u)for(const H in u){const Q=u[H];me(Q)&&(r[H]=Q.bind(t))}if(o){const H=o.call(t,t);Me(H)&&(e.data=Xr(H))}if(xs=!0,i)for(const H in i){const Q=i[H],xe=me(Q)?Q.bind(t,t):me(Q.get)?Q.get.bind(t,t):ot,ye=!me(Q)&&me(Q.set)?Q.set.bind(t):ot,ee=I({get:xe,set:ye});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>ee.value,set:ie=>ee.value=ie})}if(s)for(const H in s)Pf(s[H],r,t,H);if(l){const H=me(l)?l.call(t):l;Reflect.ownKeys(H).forEach(Q=>{je(Q,H[Q])})}c&&fa(c,e,"c");function X(H,Q){ge(Q)?Q.forEach(xe=>H(xe.bind(t))):Q&&H(Q.bind(t))}if(X(Xo,d),X(Rn,f),X(G1,h),X(Af,p),X(kf,g),X(Sf,m),X(J1,E),X(Y1,T),X(X1,_),X(Hn,v),X(Tf,y),X(Z1,S),ge(z))if(z.length){const H=e.exposed||(e.exposed={});z.forEach(Q=>{Object.defineProperty(H,Q,{get:()=>t[Q],set:xe=>t[Q]=xe})})}else e.exposed||(e.exposed={});k&&e.render===ot&&(e.render=k),j!=null&&(e.inheritAttrs=j),P&&(e.components=P),q&&(e.directives=q),S&&wf(e)}function og(e,n,t=ot){ge(e)&&(e=ys(e));for(const r in e){const o=e[r];let i;Me(o)?"default"in o?i=be(o.from||r,o.default,!0):i=be(o.from||r):i=be(o),Ge(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:u=>i.value=u}):n[r]=i}}function fa(e,n,t){Vn(ge(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Pf(e,n,t,r){let o=r.includes(".")?Kf(t,r):()=>t[r];if(Ve(e)){const i=n[e];me(i)&&sn(o,i)}else if(me(e))sn(o,e.bind(t));else if(Me(e))if(ge(e))e.forEach(i=>Pf(i,n,t,r));else{const i=me(e.handler)?e.handler.bind(t):n[e.handler];me(i)&&sn(o,i,e)}}function $f(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:u}}=e.appContext,s=i.get(n);let l;return s?l=s:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(a=>$i(l,a,u,!0)),$i(l,n,u)),Me(n)&&i.set(n,l),l}function $i(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&$i(e,i,t,!0),o&&o.forEach(u=>$i(e,u,t,!0));for(const u in n)if(!(r&&u==="expose")){const s=ig[u]||t&&t[u];e[u]=s?s(e[u],n[u]):n[u]}return e}const ig={data:ha,props:pa,emits:pa,methods:lo,computed:lo,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:lo,directives:lo,watch:sg,provide:ha,inject:ug};function ha(e,n){return n?e?function(){return nn(me(e)?e.call(this,this):e,me(n)?n.call(this,this):n)}:n:e}function ug(e,n){return lo(ys(e),ys(n))}function ys(e){if(ge(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function bn(e,n){return e?[...new Set([].concat(e,n))]:n}function lo(e,n){return e?nn(Object.create(null),e,n):n}function pa(e,n){return e?ge(e)&&ge(n)?[...new Set([...e,...n])]:nn(Object.create(null),da(e),da(n??{})):n}function sg(e,n){if(!e)return n;if(!n)return e;const t=nn(Object.create(null),e);for(const r in n)t[r]=bn(e[r],n[r]);return t}function If(){return{app:null,config:{isNativeTag:Yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function ag(e,n){return function(r,o=null){me(r)||(r=nn({},r)),o!=null&&!Me(o)&&(o=null);const i=If(),u=new WeakSet,s=[];let l=!1;const a=i.app={_uid:lg++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Ug,get config(){return i.config},set config(c){},use(c,...d){return u.has(c)||(c&&me(c.install)?(u.add(c),c.install(a,...d)):me(c)&&(u.add(c),c(a,...d))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,d){return d?(i.components[c]=d,a):i.components[c]},directive(c,d){return d?(i.directives[c]=d,a):i.directives[c]},mount(c,d,f){if(!l){const h=a._ceVNode||Ce(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,a._container=c,c.__vue_app__=a,au(h.component)}},onUnmount(c){s.push(c)},unmount(){l&&(Vn(s,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return i.provides[c]=d,a},runWithContext(c){const d=fr;fr=a;try{return c()}finally{fr=d}}};return a}}let fr=null;function je(e,n){if(rn){let t=rn.provides;const r=rn.parent&&rn.parent.provides;r===t&&(t=rn.provides=Object.create(r)),t[e]=n}}function be(e,n,t=!1){const r=rn||Qe;if(r||fr){let o=fr?fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&me(n)?n.call(r&&r.proxy):n}}function cg(){return!!(rn||Qe||fr)}const Rf={},Of=()=>Object.create(Rf),Mf=e=>Object.getPrototypeOf(e)===Rf;function dg(e,n,t,r=!1){const o={},i=Of();e.propsDefaults=Object.create(null),Bf(e,n,o,i);for(const u in e.propsOptions[0])u in o||(o[u]=void 0);t?e.props=r?o:rf(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function fg(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:u}}=e,s=Se(o),[l]=e.propsOptions;let a=!1;if((r||u>0)&&!(u&16)){if(u&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(lu(e.emitsOptions,f))continue;const h=n[f];if(l)if(Te(i,f))h!==i[f]&&(i[f]=h,a=!0);else{const p=Nn(f);o[p]=Cs(l,s,p,h,e,!1)}else h!==i[f]&&(i[f]=h,a=!0)}}}else{Bf(e,n,o,i)&&(a=!0);let c;for(const d in s)(!n||!Te(n,d)&&((c=_r(d))===d||!Te(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(o[d]=Cs(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!n||!Te(n,d))&&(delete i[d],a=!0)}a&&vt(e.attrs,"set","")}function Bf(e,n,t,r){const[o,i]=e.propsOptions;let u=!1,s;if(n)for(let l in n){if(fo(l))continue;const a=n[l];let c;o&&Te(o,c=Nn(l))?!i||!i.includes(c)?t[c]=a:(s||(s={}))[c]=a:lu(e.emitsOptions,l)||(!(l in r)||a!==r[l])&&(r[l]=a,u=!0)}if(i){const l=Se(t),a=s||Ie;for(let c=0;c<i.length;c++){const d=i[c];t[d]=Cs(o,l,d,a[d],e,!Te(a,d))}}return u}function Cs(e,n,t,r,o,i){const u=e[t];if(u!=null){const s=Te(u,"default");if(s&&r===void 0){const l=u.default;if(u.type!==Function&&!u.skipFactory&&me(l)){const{propsDefaults:a}=o;if(t in a)r=a[t];else{const c=Qo(o);r=a[t]=l.call(null,n),c()}}else r=l;o.ce&&o.ce._setProp(t,r)}u[0]&&(i&&!s?r=!1:u[1]&&(r===""||r===_r(t))&&(r=!0))}return r}const hg=new WeakMap;function Lf(e,n,t=!1){const r=t?hg:n.propsCache,o=r.get(e);if(o)return o;const i=e.props,u={},s=[];let l=!1;if(!me(e)){const c=d=>{l=!0;const[f,h]=Lf(d,n,!0);nn(u,f),h&&s.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Me(e)&&r.set(e,Rr),Rr;if(ge(i))for(let c=0;c<i.length;c++){const d=Nn(i[c]);ga(d)&&(u[d]=Ie)}else if(i)for(const c in i){const d=Nn(c);if(ga(d)){const f=i[c],h=u[d]=ge(f)||me(f)?{type:f}:nn({},f),p=h.type;let g=!1,m=!0;if(ge(p))for(let b=0;b<p.length;++b){const v=p[b],w=me(v)&&v.name;if(w==="Boolean"){g=!0;break}else w==="String"&&(m=!1)}else g=me(p)&&p.name==="Boolean";h[0]=g,h[1]=m,(g||Te(h,"default"))&&s.push(d)}}const a=[u,s];return Me(e)&&r.set(e,a),a}function ga(e){return e[0]!=="$"&&!fo(e)}const gl=e=>e[0]==="_"||e==="$stable",bl=e=>ge(e)?e.map(nt):[nt(e)],pg=(e,n,t)=>{if(n._n)return n;const r=xn((...o)=>bl(n(...o)),t);return r._c=!1,r},Nf=(e,n,t)=>{const r=e._ctx;for(const o in e){if(gl(o))continue;const i=e[o];if(me(i))n[o]=pg(o,i,r);else if(i!=null){const u=bl(i);n[o]=()=>u}}},jf=(e,n)=>{const t=bl(n);e.slots.default=()=>t},Hf=(e,n,t)=>{for(const r in n)(t||!gl(r))&&(e[r]=n[r])},gg=(e,n,t)=>{const r=e.slots=Of();if(e.vnode.shapeFlag&32){const o=n.__;o&&hs(r,"__",o,!0);const i=n._;i?(Hf(r,n,t),t&&hs(r,"_",i,!0)):Nf(n,r)}else n&&jf(e,n)},bg=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,u=Ie;if(r.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:Hf(o,n,t):(i=!n.$stable,Nf(n,o)),u=n}else n&&(jf(e,n),u={default:1});if(i)for(const s in o)!gl(s)&&u[s]==null&&delete o[s]},mn=zg;function mg(e){return vg(e)}function vg(e,n){const t=eu();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:u,createText:s,createComment:l,setText:a,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=ot,insertStaticContent:p}=e,g=(x,C,D,O=null,N=null,M=null,ne=void 0,J=null,Y=!!C.dynamicChildren)=>{if(x===C)return;x&&!sr(x,C)&&(O=$(x),ie(x,N,M,!0),x=null),C.patchFlag===-2&&(Y=!1,C.dynamicChildren=null);const{type:V,ref:de,shapeFlag:re}=C;switch(V){case Yo:m(x,C,D,O);break;case Je:b(x,C,D,O);break;case Ru:x==null&&v(C,D,O,ne);break;case Ne:P(x,C,D,O,N,M,ne,J,Y);break;default:re&1?k(x,C,D,O,N,M,ne,J,Y):re&6?q(x,C,D,O,N,M,ne,J,Y):(re&64||re&128)&&V.process(x,C,D,O,N,M,ne,J,Y,se)}de!=null&&N?bo(de,x&&x.ref,M,C||x,!C):de==null&&x&&x.ref!=null&&bo(x.ref,null,M,x,!0)},m=(x,C,D,O)=>{if(x==null)r(C.el=s(C.children),D,O);else{const N=C.el=x.el;C.children!==x.children&&a(N,C.children)}},b=(x,C,D,O)=>{x==null?r(C.el=l(C.children||""),D,O):C.el=x.el},v=(x,C,D,O)=>{[x.el,x.anchor]=p(x.children,C,D,O,x.el,x.anchor)},w=({el:x,anchor:C},D,O)=>{let N;for(;x&&x!==C;)N=f(x),r(x,D,O),x=N;r(C,D,O)},y=({el:x,anchor:C})=>{let D;for(;x&&x!==C;)D=f(x),o(x),x=D;o(C)},k=(x,C,D,O,N,M,ne,J,Y)=>{C.type==="svg"?ne="svg":C.type==="math"&&(ne="mathml"),x==null?T(C,D,O,N,M,ne,J,Y):S(x,C,N,M,ne,J,Y)},T=(x,C,D,O,N,M,ne,J)=>{let Y,V;const{props:de,shapeFlag:re,transition:ce,dirs:fe}=x;if(Y=x.el=u(x.type,M,de&&de.is,de),re&8?c(Y,x.children):re&16&&E(x.children,Y,null,O,N,Iu(x,M),ne,J),fe&&nr(x,null,O,"created"),_(Y,x,x.scopeId,ne,O),de){for(const Pe in de)Pe!=="value"&&!fo(Pe)&&i(Y,Pe,null,de[Pe],M,O);"value"in de&&i(Y,"value",null,de.value,M),(V=de.onVnodeBeforeMount)&&Xn(V,O,x)}fe&&nr(x,null,O,"beforeMount");const _e=xg(N,ce);_e&&ce.beforeEnter(Y),r(Y,C,D),((V=de&&de.onVnodeMounted)||_e||fe)&&mn(()=>{V&&Xn(V,O,x),_e&&ce.enter(Y),fe&&nr(x,null,O,"mounted")},N)},_=(x,C,D,O,N)=>{if(D&&h(x,D),O)for(let M=0;M<O.length;M++)h(x,O[M]);if(N){let M=N.subTree;if(C===M||qf(M.type)&&(M.ssContent===C||M.ssFallback===C)){const ne=N.vnode;_(x,ne,ne.scopeId,ne.slotScopeIds,N.parent)}}},E=(x,C,D,O,N,M,ne,J,Y=0)=>{for(let V=Y;V<x.length;V++){const de=x[V]=J?Bt(x[V]):nt(x[V]);g(null,de,C,D,O,N,M,ne,J)}},S=(x,C,D,O,N,M,ne)=>{const J=C.el=x.el;let{patchFlag:Y,dynamicChildren:V,dirs:de}=C;Y|=x.patchFlag&16;const re=x.props||Ie,ce=C.props||Ie;let fe;if(D&&tr(D,!1),(fe=ce.onVnodeBeforeUpdate)&&Xn(fe,D,C,x),de&&nr(C,x,D,"beforeUpdate"),D&&tr(D,!0),(re.innerHTML&&ce.innerHTML==null||re.textContent&&ce.textContent==null)&&c(J,""),V?z(x.dynamicChildren,V,J,D,O,Iu(C,N),M):ne||Q(x,C,J,null,D,O,Iu(C,N),M,!1),Y>0){if(Y&16)j(J,re,ce,D,N);else if(Y&2&&re.class!==ce.class&&i(J,"class",null,ce.class,N),Y&4&&i(J,"style",re.style,ce.style,N),Y&8){const _e=C.dynamicProps;for(let Pe=0;Pe<_e.length;Pe++){const Ee=_e[Pe],ln=re[Ee],dn=ce[Ee];(dn!==ln||Ee==="value")&&i(J,Ee,ln,dn,N,D)}}Y&1&&x.children!==C.children&&c(J,C.children)}else!ne&&V==null&&j(J,re,ce,D,N);((fe=ce.onVnodeUpdated)||de)&&mn(()=>{fe&&Xn(fe,D,C,x),de&&nr(C,x,D,"updated")},O)},z=(x,C,D,O,N,M,ne)=>{for(let J=0;J<C.length;J++){const Y=x[J],V=C[J],de=Y.el&&(Y.type===Ne||!sr(Y,V)||Y.shapeFlag&198)?d(Y.el):D;g(Y,V,de,null,O,N,M,ne,!0)}},j=(x,C,D,O,N)=>{if(C!==D){if(C!==Ie)for(const M in C)!fo(M)&&!(M in D)&&i(x,M,C[M],null,N,O);for(const M in D){if(fo(M))continue;const ne=D[M],J=C[M];ne!==J&&M!=="value"&&i(x,M,J,ne,N,O)}"value"in D&&i(x,"value",C.value,D.value,N)}},P=(x,C,D,O,N,M,ne,J,Y)=>{const V=C.el=x?x.el:s(""),de=C.anchor=x?x.anchor:s("");let{patchFlag:re,dynamicChildren:ce,slotScopeIds:fe}=C;fe&&(J=J?J.concat(fe):fe),x==null?(r(V,D,O),r(de,D,O),E(C.children||[],D,de,N,M,ne,J,Y)):re>0&&re&64&&ce&&x.dynamicChildren?(z(x.dynamicChildren,ce,D,N,M,ne,J),(C.key!=null||N&&C===N.subTree)&&ml(x,C,!0)):Q(x,C,D,de,N,M,ne,J,Y)},q=(x,C,D,O,N,M,ne,J,Y)=>{C.slotScopeIds=J,x==null?C.shapeFlag&512?N.ctx.activate(C,D,O,ne,Y):G(C,D,O,N,M,ne,Y):R(x,C,Y)},G=(x,C,D,O,N,M,ne)=>{const J=x.component=Og(x,O,N);if(iu(x)&&(J.ctx.renderer=se),Mg(J,!1,ne),J.asyncDep){if(N&&N.registerDep(J,X,ne),!x.el){const Y=J.subTree=Ce(Je);b(null,Y,C,D)}}else X(J,x,C,D,N,M,ne)},R=(x,C,D)=>{const O=C.component=x.component;if(Tg(x,C,D))if(O.asyncDep&&!O.asyncResolved){H(O,C,D);return}else O.next=C,O.update();else C.el=x.el,O.vnode=C},X=(x,C,D,O,N,M,ne)=>{const J=()=>{if(x.isMounted){let{next:re,bu:ce,u:fe,parent:_e,vnode:Pe}=x;{const wn=Uf(x);if(wn){re&&(re.el=Pe.el,H(x,re,ne)),wn.asyncDep.then(()=>{x.isUnmounted||J()});return}}let Ee=re,ln;tr(x,!1),re?(re.el=Pe.el,H(x,re,ne)):re=Pe,ce&&Au(ce),(ln=re.props&&re.props.onVnodeBeforeUpdate)&&Xn(ln,_e,re,Pe),tr(x,!0);const dn=ma(x),_n=x.subTree;x.subTree=dn,g(_n,dn,d(_n.el),$(_n),x,N,M),re.el=dn.el,Ee===null&&Dg(x,dn.el),fe&&mn(fe,N),(ln=re.props&&re.props.onVnodeUpdated)&&mn(()=>Xn(ln,_e,re,Pe),N)}else{let re;const{el:ce,props:fe}=C,{bm:_e,m:Pe,parent:Ee,root:ln,type:dn}=x,_n=Br(C);tr(x,!1),_e&&Au(_e),!_n&&(re=fe&&fe.onVnodeBeforeMount)&&Xn(re,Ee,C),tr(x,!0);{ln.ce&&ln.ce._def.shadowRoot!==!1&&ln.ce._injectChildStyle(dn);const wn=x.subTree=ma(x);g(null,wn,D,O,x,N,M),C.el=wn.el}if(Pe&&mn(Pe,N),!_n&&(re=fe&&fe.onVnodeMounted)){const wn=C;mn(()=>Xn(re,Ee,wn),N)}(C.shapeFlag&256||Ee&&Br(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&x.a&&mn(x.a,N),x.isMounted=!0,C=D=O=null}};x.scope.on();const Y=x.effect=new Ud(J);x.scope.off();const V=x.update=Y.run.bind(Y),de=x.job=Y.runIfDirty.bind(Y);de.i=x,de.id=x.uid,Y.scheduler=()=>dl(de),tr(x,!0),V()},H=(x,C,D)=>{C.component=x;const O=x.vnode.props;x.vnode=C,x.next=null,fg(x,C.props,O,D),bg(x,C.children,D),yt(),ia(x),Ct()},Q=(x,C,D,O,N,M,ne,J,Y=!1)=>{const V=x&&x.children,de=x?x.shapeFlag:0,re=C.children,{patchFlag:ce,shapeFlag:fe}=C;if(ce>0){if(ce&128){ye(V,re,D,O,N,M,ne,J,Y);return}else if(ce&256){xe(V,re,D,O,N,M,ne,J,Y);return}}fe&8?(de&16&&$e(V,N,M),re!==V&&c(D,re)):de&16?fe&16?ye(V,re,D,O,N,M,ne,J,Y):$e(V,N,M,!0):(de&8&&c(D,""),fe&16&&E(re,D,O,N,M,ne,J,Y))},xe=(x,C,D,O,N,M,ne,J,Y)=>{x=x||Rr,C=C||Rr;const V=x.length,de=C.length,re=Math.min(V,de);let ce;for(ce=0;ce<re;ce++){const fe=C[ce]=Y?Bt(C[ce]):nt(C[ce]);g(x[ce],fe,D,null,N,M,ne,J,Y)}V>de?$e(x,N,M,!0,!1,re):E(C,D,O,N,M,ne,J,Y,re)},ye=(x,C,D,O,N,M,ne,J,Y)=>{let V=0;const de=C.length;let re=x.length-1,ce=de-1;for(;V<=re&&V<=ce;){const fe=x[V],_e=C[V]=Y?Bt(C[V]):nt(C[V]);if(sr(fe,_e))g(fe,_e,D,null,N,M,ne,J,Y);else break;V++}for(;V<=re&&V<=ce;){const fe=x[re],_e=C[ce]=Y?Bt(C[ce]):nt(C[ce]);if(sr(fe,_e))g(fe,_e,D,null,N,M,ne,J,Y);else break;re--,ce--}if(V>re){if(V<=ce){const fe=ce+1,_e=fe<de?C[fe].el:O;for(;V<=ce;)g(null,C[V]=Y?Bt(C[V]):nt(C[V]),D,_e,N,M,ne,J,Y),V++}}else if(V>ce)for(;V<=re;)ie(x[V],N,M,!0),V++;else{const fe=V,_e=V,Pe=new Map;for(V=_e;V<=ce;V++){const kn=C[V]=Y?Bt(C[V]):nt(C[V]);kn.key!=null&&Pe.set(kn.key,V)}let Ee,ln=0;const dn=ce-_e+1;let _n=!1,wn=0;const Dt=new Array(dn);for(V=0;V<dn;V++)Dt[V]=0;for(V=fe;V<=re;V++){const kn=x[V];if(ln>=dn){ie(kn,N,M,!0);continue}let W;if(kn.key!=null)W=Pe.get(kn.key);else for(Ee=_e;Ee<=ce;Ee++)if(Dt[Ee-_e]===0&&sr(kn,C[Ee])){W=Ee;break}W===void 0?ie(kn,N,M,!0):(Dt[W-_e]=V+1,W>=wn?wn=W:_n=!0,g(kn,C[W],D,null,N,M,ne,J,Y),ln++)}const ft=_n?yg(Dt):Rr;for(Ee=ft.length-1,V=dn-1;V>=0;V--){const kn=_e+V,W=C[kn],le=kn+1<de?C[kn+1].el:O;Dt[V]===0?g(null,W,D,le,N,M,ne,J,Y):_n&&(Ee<0||V!==ft[Ee]?ee(W,D,le,2):Ee--)}}},ee=(x,C,D,O,N=null)=>{const{el:M,type:ne,transition:J,children:Y,shapeFlag:V}=x;if(V&6){ee(x.component.subTree,C,D,O);return}if(V&128){x.suspense.move(C,D,O);return}if(V&64){ne.move(x,C,D,se);return}if(ne===Ne){r(M,C,D);for(let re=0;re<Y.length;re++)ee(Y[re],C,D,O);r(x.anchor,C,D);return}if(ne===Ru){w(x,C,D);return}if(O!==2&&V&1&&J)if(O===0)J.beforeEnter(M),r(M,C,D),mn(()=>J.enter(M),N);else{const{leave:re,delayLeave:ce,afterLeave:fe}=J,_e=()=>{x.ctx.isUnmounted?o(M):r(M,C,D)},Pe=()=>{re(M,()=>{_e(),fe&&fe()})};ce?ce(M,_e,Pe):Pe()}else r(M,C,D)},ie=(x,C,D,O=!1,N=!1)=>{const{type:M,props:ne,ref:J,children:Y,dynamicChildren:V,shapeFlag:de,patchFlag:re,dirs:ce,cacheIndex:fe}=x;if(re===-2&&(N=!1),J!=null&&(yt(),bo(J,null,D,x,!0),Ct()),fe!=null&&(C.renderCache[fe]=void 0),de&256){C.ctx.deactivate(x);return}const _e=de&1&&ce,Pe=!Br(x);let Ee;if(Pe&&(Ee=ne&&ne.onVnodeBeforeUnmount)&&Xn(Ee,C,x),de&6)we(x.component,D,O);else{if(de&128){x.suspense.unmount(D,O);return}_e&&nr(x,null,C,"beforeUnmount"),de&64?x.type.remove(x,C,D,se,O):V&&!V.hasOnce&&(M!==Ne||re>0&&re&64)?$e(V,C,D,!1,!0):(M===Ne&&re&384||!N&&de&16)&&$e(Y,C,D),O&&B(x)}(Pe&&(Ee=ne&&ne.onVnodeUnmounted)||_e)&&mn(()=>{Ee&&Xn(Ee,C,x),_e&&nr(x,null,C,"unmounted")},D)},B=x=>{const{type:C,el:D,anchor:O,transition:N}=x;if(C===Ne){pe(D,O);return}if(C===Ru){y(x);return}const M=()=>{o(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(x.shapeFlag&1&&N&&!N.persisted){const{leave:ne,delayLeave:J}=N,Y=()=>ne(D,M);J?J(x.el,M,Y):Y()}else M()},pe=(x,C)=>{let D;for(;x!==C;)D=f(x),o(x),x=D;o(C)},we=(x,C,D)=>{const{bum:O,scope:N,job:M,subTree:ne,um:J,m:Y,a:V,parent:de,slots:{__:re}}=x;ba(Y),ba(V),O&&Au(O),de&&ge(re)&&re.forEach(ce=>{de.renderCache[ce]=void 0}),N.stop(),M&&(M.flags|=8,ie(ne,x,C,D)),J&&mn(J,C),mn(()=>{x.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},$e=(x,C,D,O=!1,N=!1,M=0)=>{for(let ne=M;ne<x.length;ne++)ie(x[ne],C,D,O,N)},$=x=>{if(x.shapeFlag&6)return $(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const C=f(x.anchor||x.el),D=C&&C[pf];return D?f(D):C};let oe=!1;const F=(x,C,D)=>{x==null?C._vnode&&ie(C._vnode,null,null,!0):g(C._vnode||null,x,C,null,null,null,D),C._vnode=x,oe||(oe=!0,ia(),df(),oe=!1)},se={p:g,um:ie,m:ee,r:B,mt:G,mc:E,pc:Q,pbc:z,n:$,o:e};return{render:F,hydrate:void 0,createApp:ag(F)}}function Iu({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function tr({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function xg(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ml(e,n,t=!1){const r=e.children,o=n.children;if(ge(r)&&ge(o))for(let i=0;i<r.length;i++){const u=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Bt(o[i]),s.el=u.el),!t&&s.patchFlag!==-2&&ml(u,s)),s.type===Yo&&(s.el=u.el),s.type===Je&&!s.el&&(s.el=u.el)}}function yg(e){const n=e.slice(),t=[0];let r,o,i,u,s;const l=e.length;for(r=0;r<l;r++){const a=e[r];if(a!==0){if(o=t[t.length-1],e[o]<a){n[r]=o,t.push(r);continue}for(i=0,u=t.length-1;i<u;)s=i+u>>1,e[t[s]]<a?i=s+1:u=s;a<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,u=t[i-1];i-- >0;)t[i]=u,u=n[u];return t}function Uf(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Uf(n)}function ba(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Cg=Symbol.for("v-scx"),_g=()=>be(Cg);function _t(e,n){return vl(e,null,n)}function sn(e,n,t){return vl(e,n,t)}function vl(e,n,t=Ie){const{immediate:r,deep:o,flush:i,once:u}=t,s=nn({},t),l=n&&r||!n&&i!=="post";let a;if(Po){if(i==="sync"){const h=_g();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ot,h.resume=ot,h.pause=ot,h}}const c=rn;s.call=(h,p,g)=>Vn(h,c,p,g);let d=!1;i==="post"?s.scheduler=h=>{mn(h,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(h,p)=>{p?h():dl(h)}),s.augmentJob=h=>{n&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=L1(e,n,s);return Po&&(a?a.push(f):l&&f()),f}function wg(e,n,t){const r=this.proxy,o=Ve(e)?e.includes(".")?Kf(r,e):()=>r[e]:e.bind(r,r);let i;me(n)?i=n:(i=n.handler,t=n);const u=Qo(this),s=vl(o,i.bind(r),t);return u(),s}function Kf(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const kg=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Nn(n)}Modifiers`]||e[`${_r(n)}Modifiers`];function Sg(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Ie;let o=t;const i=n.startsWith("update:"),u=i&&kg(r,n.slice(7));u&&(u.trim&&(o=t.map(c=>Ve(c)?c.trim():c)),u.number&&(o=t.map(t1)));let s,l=r[s=Eu(n)]||r[s=Eu(Nn(n))];!l&&i&&(l=r[s=Eu(_r(n))]),l&&Vn(l,e,6,o);const a=r[s+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Vn(a,e,6,o)}}function Wf(e,n,t=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let u={},s=!1;if(!me(e)){const l=a=>{const c=Wf(a,n,!0);c&&(s=!0,nn(u,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Me(e)&&r.set(e,null),null):(ge(i)?i.forEach(l=>u[l]=null):nn(u,i),Me(e)&&r.set(e,u),u)}function lu(e,n){return!e||!Xi(n)?!1:(n=n.slice(2).replace(/Once$/,""),Te(e,n[0].toLowerCase()+n.slice(1))||Te(e,_r(n))||Te(e,n))}function ma(e){const{type:n,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:u,attrs:s,emit:l,render:a,renderCache:c,props:d,data:f,setupState:h,ctx:p,inheritAttrs:g}=e,m=Pi(e);let b,v;try{if(t.shapeFlag&4){const y=o||r,k=y;b=nt(a.call(k,y,c,d,h,f,p)),v=s}else{const y=n;b=nt(y.length>1?y(d,{attrs:s,slots:u,emit:l}):y(d,null)),v=n.props?s:Eg(s)}}catch(y){vo.length=0,ru(y,e,1),b=Ce(Je)}let w=b;if(v&&g!==!1){const y=Object.keys(v),{shapeFlag:k}=w;y.length&&k&7&&(i&&y.some(nl)&&(v=Ag(v,i)),w=wt(w,v,!1,!0))}return t.dirs&&(w=wt(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&mr(w,t.transition),b=w,Pi(m),b}const Eg=e=>{let n;for(const t in e)(t==="class"||t==="style"||Xi(t))&&((n||(n={}))[t]=e[t]);return n},Ag=(e,n)=>{const t={};for(const r in e)(!nl(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Tg(e,n,t){const{props:r,children:o,component:i}=e,{props:u,children:s,patchFlag:l}=n,a=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?va(r,u,a):!!u;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(u[f]!==r[f]&&!lu(a,f))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===u?!1:r?u?va(r,u,a):!0:!!u;return!1}function va(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(n[i]!==e[i]&&!lu(t,i))return!0}return!1}function Dg({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const qf=e=>e.__isSuspense;function zg(e,n){n&&n.pendingBranch?ge(e)?n.effects.push(...e):n.effects.push(e):H1(e)}const Ne=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Ru=Symbol.for("v-stc"),vo=[];let Fn=null;function Ue(e=!1){vo.push(Fn=e?null:[])}function Fg(){vo.pop(),Fn=vo[vo.length-1]||null}let Fo=1;function xa(e,n=!1){Fo+=e,e<0&&Fn&&n&&(Fn.hasOnce=!0)}function Vf(e){return e.dynamicChildren=Fo>0?Fn||Rr:null,Fg(),Fo>0&&Fn&&Fn.push(e),e}function cn(e,n,t,r,o,i){return Vf(ue(e,n,t,r,o,i,!0))}function vr(e,n,t,r,o){return Vf(Ce(e,n,t,r,o,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function sr(e,n){return e.type===n.type&&e.key===n.key}const Gf=({key:e})=>e??null,wi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||Ge(e)||me(e)?{i:Qe,r:e,k:n,f:!!t}:e:null);function ue(e,n=null,t=null,r=0,o=null,i=e===Ne?0:1,u=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Gf(n),ref:n&&wi(n),scopeId:hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Qe};return s?(xl(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=Ve(t)?8:16),Fo>0&&!u&&Fn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fn.push(l),l}const Ce=Pg;function Pg(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===zf)&&(e=Je),Ur(e)){const s=wt(e,n,!0);return t&&xl(s,t),Fo>0&&!i&&Fn&&(s.shapeFlag&6?Fn[Fn.indexOf(e)]=s:Fn.push(s)),s.patchFlag=-2,s}if(Hg(e)&&(e=e.__vccOpts),n){n=$g(n);let{class:s,style:l}=n;s&&!Ve(s)&&(n.class=nu(s)),Me(l)&&(cl(l)&&!ge(l)&&(l=nn({},l)),n.style=Vo(l))}const u=Ve(e)?1:qf(e)?128:gf(e)?64:Me(e)?4:me(e)?2:0;return ue(e,n,t,r,o,u,i,!0)}function $g(e){return e?cl(e)||Mf(e)?nn({},e):e:null}function wt(e,n,t=!1,r=!1){const{props:o,ref:i,patchFlag:u,children:s,transition:l}=e,a=n?wr(o||{},n):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Gf(a),ref:n&&n.ref?t&&i?ge(i)?i.concat(wi(n)):[i,wi(n)]:wi(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ne?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&mr(c,l.clone(c)),c}function vn(e=" ",n=0){return Ce(Yo,null,e,n)}function T7(e="",n=!1){return n?(Ue(),vr(Je,null,e)):Ce(Je,null,e)}function nt(e){return e==null||typeof e=="boolean"?Ce(Je):ge(e)?Ce(Ne,null,e.slice()):Ur(e)?Bt(e):Ce(Yo,null,String(e))}function Bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function xl(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ge(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),xl(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!Mf(n)?n._ctx=Qe:o===3&&Qe&&(Qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else me(n)?(n={default:n,_ctx:Qe},t=32):(n=String(n),r&64?(t=16,n=[vn(n)]):t=8);e.children=n,e.shapeFlag|=t}function wr(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=nu([n.class,r.class]));else if(o==="style")n.style=Vo([n.style,r.style]);else if(Xi(o)){const i=n[o],u=r[o];u&&i!==u&&!(ge(i)&&i.includes(u))&&(n[o]=i?[].concat(i,u):u)}else o!==""&&(n[o]=r[o])}return n}function Xn(e,n,t,r=null){Vn(e,n,7,[t,r])}const Ig=If();let Rg=0;function Og(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Ig,i={uid:Rg++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lf(r,o),emitsOptions:Wf(r,o),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Sg.bind(null,i),e.ce&&e.ce(i),i}let rn=null;const Jo=()=>rn||Qe;let Ii,_s;{const e=eu(),n=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),i=>{o.length>1?o.forEach(u=>u(i)):o[0](i)}};Ii=n("__VUE_INSTANCE_SETTERS__",t=>rn=t),_s=n("__VUE_SSR_SETTERS__",t=>Po=t)}const Qo=e=>{const n=rn;return Ii(e),e.scope.on(),()=>{e.scope.off(),Ii(n)}},ya=()=>{rn&&rn.scope.off(),Ii(null)};function Zf(e){return e.vnode.shapeFlag&4}let Po=!1;function Mg(e,n=!1,t=!1){n&&_s(n);const{props:r,children:o}=e.vnode,i=Zf(e);dg(e,r,i,n),gg(e,o,t||n);const u=i?Bg(e,n):void 0;return n&&_s(!1),u}function Bg(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,tg);const{setup:r}=t;if(r){yt();const o=e.setupContext=r.length>1?Ng(e):null,i=Qo(e),u=Go(r,e,0,[e.props,o]),s=Id(u);if(Ct(),i(),(s||e.sp)&&!Br(e)&&wf(e),s){if(u.then(ya,ya),n)return u.then(l=>{Ca(e,l)}).catch(l=>{ru(l,e,0)});e.asyncDep=u}else Ca(e,u)}else Xf(e)}function Ca(e,n,t){me(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Me(n)&&(e.setupState=sf(n)),Xf(e)}function Xf(e,n,t){const r=e.type;e.render||(e.render=r.render||ot);{const o=Qo(e);yt();try{rg(e)}finally{Ct(),o()}}}const Lg={get(e,n){return pn(e,"get",""),e[n]}};function Ng(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Lg),slots:e.slots,emit:e.emit,expose:n}}function au(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(sf(To(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in mo)return mo[t](e)},has(n,t){return t in n||t in mo}})):e.proxy}function jg(e,n=!0){return me(e)?e.displayName||e.name:e.name||n&&e.__name}function Hg(e){return me(e)&&"__vccOpts"in e}const I=(e,n)=>M1(e,n,Po);function A(e,n,t){const r=arguments.length;return r===2?Me(n)&&!ge(n)?Ur(n)?Ce(e,null,[n]):Ce(e,n):Ce(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ur(t)&&(t=[t]),Ce(e,n,t))}const Ug="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ws;const _a=typeof window<"u"&&window.trustedTypes;if(_a)try{ws=_a.createPolicy("vue",{createHTML:e=>e})}catch{}const Yf=ws?e=>ws.createHTML(e):e=>e,Kg="http://www.w3.org/2000/svg",Wg="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,wa=mt&&mt.createElement("template"),qg={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n==="svg"?mt.createElementNS(Kg,e):n==="mathml"?mt.createElementNS(Wg,e):t?mt.createElement(e,{is:t}):mt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const u=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{wa.innerHTML=Yf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=wa.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[u?u.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Ft="transition",to="animation",Kr=Symbol("_vtc"),Jf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qf=nn({},xf,Jf),Vg=e=>(e.displayName="Transition",e.props=Qf,e),xr=Vg((e,{slots:n})=>A(q1,e0(e),n)),rr=(e,n=[])=>{ge(e)?e.forEach(t=>t(...n)):e&&e(...n)},ka=e=>e?ge(e)?e.some(n=>n.length>1):e.length>1:!1;function e0(e){const n={};for(const P in e)P in Jf||(n[P]=e[P]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:u=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:a=u,appearToClass:c=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,p=Gg(o),g=p&&p[0],m=p&&p[1],{onBeforeEnter:b,onEnter:v,onEnterCancelled:w,onLeave:y,onLeaveCancelled:k,onBeforeAppear:T=b,onAppear:_=v,onAppearCancelled:E=w}=n,S=(P,q,G,R)=>{P._enterCancelled=R,It(P,q?c:s),It(P,q?a:u),G&&G()},z=(P,q)=>{P._isLeaving=!1,It(P,d),It(P,h),It(P,f),q&&q()},j=P=>(q,G)=>{const R=P?_:v,X=()=>S(q,P,G);rr(R,[q,X]),Sa(()=>{It(q,P?l:i),Qn(q,P?c:s),ka(R)||Ea(q,r,g,X)})};return nn(n,{onBeforeEnter(P){rr(b,[P]),Qn(P,i),Qn(P,u)},onBeforeAppear(P){rr(T,[P]),Qn(P,l),Qn(P,a)},onEnter:j(!1),onAppear:j(!0),onLeave(P,q){P._isLeaving=!0;const G=()=>z(P,q);Qn(P,d),P._enterCancelled?(Qn(P,f),ks()):(ks(),Qn(P,f)),Sa(()=>{P._isLeaving&&(It(P,d),Qn(P,h),ka(y)||Ea(P,r,m,G))}),rr(y,[P,G])},onEnterCancelled(P){S(P,!1,void 0,!0),rr(w,[P])},onAppearCancelled(P){S(P,!0,void 0,!0),rr(E,[P])},onLeaveCancelled(P){z(P),rr(k,[P])}})}function Gg(e){if(e==null)return null;if(Me(e))return[Ou(e.enter),Ou(e.leave)];{const n=Ou(e);return[n,n]}}function Ou(e){return r1(e)}function Qn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Kr]||(e[Kr]=new Set)).add(n)}function It(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[Kr];t&&(t.delete(n),t.size||(e[Kr]=void 0))}function Sa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Zg=0;function Ea(e,n,t,r){const o=e._endId=++Zg,i=()=>{o===e._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:u,timeout:s,propCount:l}=n0(e,n);if(!u)return r();const a=u+"end";let c=0;const d=()=>{e.removeEventListener(a,f),i()},f=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(a,f)}function n0(e,n){const t=window.getComputedStyle(e),r=p=>(t[p]||"").split(", "),o=r(`${Ft}Delay`),i=r(`${Ft}Duration`),u=Aa(o,i),s=r(`${to}Delay`),l=r(`${to}Duration`),a=Aa(s,l);let c=null,d=0,f=0;n===Ft?u>0&&(c=Ft,d=u,f=i.length):n===to?a>0&&(c=to,d=a,f=l.length):(d=Math.max(u,a),c=d>0?u>a?Ft:to:null,f=c?c===Ft?i.length:l.length:0);const h=c===Ft&&/\b(transform|all)(,|$)/.test(r(`${Ft}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function Aa(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Ta(t)+Ta(e[r])))}function Ta(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ks(){return document.body.offsetHeight}function Xg(e,n,t){const r=e[Kr];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Ri=Symbol("_vod"),t0=Symbol("_vsh"),Yg={beforeMount(e,{value:n},{transition:t}){e[Ri]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):ro(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),ro(e,!0),r.enter(e)):r.leave(e,()=>{ro(e,!1)}):ro(e,n))},beforeUnmount(e,{value:n}){ro(e,n)}};function ro(e,n){e.style.display=n?e[Ri]:"none",e[t0]=!n}const Jg=Symbol(""),Qg=/(^|;)\s*display\s*:/;function eb(e,n,t){const r=e.style,o=Ve(t);let i=!1;if(t&&!o){if(n)if(Ve(n))for(const u of n.split(";")){const s=u.slice(0,u.indexOf(":")).trim();t[s]==null&&ki(r,s,"")}else for(const u in n)t[u]==null&&ki(r,u,"");for(const u in t)u==="display"&&(i=!0),ki(r,u,t[u])}else if(o){if(n!==t){const u=r[Jg];u&&(t+=";"+u),r.cssText=t,i=Qg.test(t)}}else n&&e.removeAttribute("style");Ri in e&&(e[Ri]=i?r.display:"",e[t0]&&(r.display="none"))}const Da=/\s*!important$/;function ki(e,n,t){if(ge(t))t.forEach(r=>ki(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=nb(e,n);Da.test(t)?e.setProperty(_r(r),t.replace(Da,""),"important"):e[r]=t}}const za=["Webkit","Moz","ms"],Mu={};function nb(e,n){const t=Mu[n];if(t)return t;let r=Nn(n);if(r!=="filter"&&r in e)return Mu[n]=r;r=Qi(r);for(let o=0;o<za.length;o++){const i=za[o]+r;if(i in e)return Mu[n]=i}return n}const Fa="http://www.w3.org/1999/xlink";function Pa(e,n,t,r,o,i=a1(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Fa,n.slice(6,n.length)):e.setAttributeNS(Fa,n,t):t==null||i&&!Md(t)?e.removeAttribute(n):e.setAttribute(n,i?"":St(t)?String(t):t)}function $a(e,n,t,r,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Yf(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(s!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let u=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Md(t):t==null&&s==="string"?(t="",u=!0):s==="number"&&(t=0,u=!0)}try{e[n]=t}catch{}u&&e.removeAttribute(o||n)}function tb(e,n,t,r){e.addEventListener(n,t,r)}function rb(e,n,t,r){e.removeEventListener(n,t,r)}const Ia=Symbol("_vei");function ob(e,n,t,r,o=null){const i=e[Ia]||(e[Ia]={}),u=i[n];if(r&&u)u.value=r;else{const[s,l]=ib(n);if(r){const a=i[n]=lb(r,o);tb(e,s,a,l)}else u&&(rb(e,s,u,l),i[n]=void 0)}}const Ra=/(?:Once|Passive|Capture)$/;function ib(e){let n;if(Ra.test(e)){n={};let r;for(;r=e.match(Ra);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_r(e.slice(2)),n]}let Bu=0;const ub=Promise.resolve(),sb=()=>Bu||(ub.then(()=>Bu=0),Bu=Date.now());function lb(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Vn(ab(r,t.value),n,5,[r])};return t.value=e,t.attached=sb(),t}function ab(e,n){if(ge(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const Oa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cb=(e,n,t,r,o,i)=>{const u=o==="svg";n==="class"?Xg(e,r,u):n==="style"?eb(e,t,r):Xi(n)?nl(n)||ob(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):db(e,n,r,u))?($a(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Pa(e,n,r,u,i,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Ve(r))?$a(e,Nn(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Pa(e,n,r,u))};function db(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Oa(n)&&me(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Oa(n)&&Ve(t)?!1:n in e}const r0=new WeakMap,o0=new WeakMap,Oi=Symbol("_moveCb"),Ma=Symbol("_enterCb"),fb=e=>(delete e.props.mode,e),hb=fb({name:"TransitionGroup",props:nn({},Qf,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Jo(),r=vf();let o,i;return Af(()=>{if(!o.length)return;const u=e.moveClass||`${e.name||"v"}-move`;if(!vb(o[0].el,t.vnode.el,u)){o=[];return}o.forEach(gb),o.forEach(bb);const s=o.filter(mb);ks(),s.forEach(l=>{const a=l.el,c=a.style;Qn(a,u),c.transform=c.webkitTransform=c.transitionDuration="";const d=a[Oi]=f=>{f&&f.target!==a||(!f||/transform$/.test(f.propertyName))&&(a.removeEventListener("transitionend",d),a[Oi]=null,It(a,u))};a.addEventListener("transitionend",d)}),o=[]}),()=>{const u=Se(e),s=e0(u);let l=u.tag||Ne;if(o=[],i)for(let a=0;a<i.length;a++){const c=i[a];c.el&&c.el instanceof Element&&(o.push(c),mr(c,zo(c,s,r,t)),r0.set(c,c.el.getBoundingClientRect()))}i=n.default?fl(n.default()):[];for(let a=0;a<i.length;a++){const c=i[a];c.key!=null&&mr(c,zo(c,s,r,t))}return Ce(l,null,i)}}}),pb=hb;function gb(e){const n=e.el;n[Oi]&&n[Oi](),n[Ma]&&n[Ma]()}function bb(e){o0.set(e,e.el.getBoundingClientRect())}function mb(e){const n=r0.get(e),t=o0.get(e),r=n.left-t.left,o=n.top-t.top;if(r||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",e}}function vb(e,n,t){const r=e.cloneNode(),o=e[Kr];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:u}=n0(r);return i.removeChild(r),u}const xb=["ctrl","shift","alt","meta"],yb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>xb.some(t=>e[`${t}Key`]&&!n.includes(t))},D7=(e,n)=>{const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(o,...i)=>{for(let u=0;u<n.length;u++){const s=yb[n[u]];if(s&&s(o,n))return}return e(o,...i)})},Cb=nn({patchProp:cb},qg);let Ba;function _b(){return Ba||(Ba=mg(Cb))}const wb=(...e)=>{const n=_b().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=Sb(r);if(!o)return;const i=n._component;!me(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const u=t(o,!1,kb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),u},n};function kb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sb(e){return Ve(e)?document.querySelector(e):e}function Eb(e){let n=".",t="__",r="--",o;if(e){let p=e.blockPrefix;p&&(n=p),p=e.elementPrefix,p&&(t=p),p=e.modifierPrefix,p&&(r=p)}const i={install(p){o=p.c;const g=p.context;g.bem={},g.bem.b=null,g.bem.els=null}};function u(p){let g,m;return{before(b){g=b.bem.b,m=b.bem.els,b.bem.els=null},after(b){b.bem.b=g,b.bem.els=m},$({context:b,props:v}){return p=typeof p=="string"?p:p({context:b,props:v}),b.bem.b=p,`${v?.bPrefix||n}${b.bem.b}`}}}function s(p){let g;return{before(m){g=m.bem.els},after(m){m.bem.els=g},$({context:m,props:b}){return p=typeof p=="string"?p:p({context:m,props:b}),m.bem.els=p.split(",").map(v=>v.trim()),m.bem.els.map(v=>`${b?.bPrefix||n}${m.bem.b}${t}${v}`).join(", ")}}}function l(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const b=p.split(",").map(y=>y.trim());function v(y){return b.map(k=>`&${m?.bPrefix||n}${g.bem.b}${y!==void 0?`${t}${y}`:""}${r}${k}`).join(", ")}const w=g.bem.els;return w!==null?v(w[0]):v()}}}function a(p){return{$({context:g,props:m}){p=typeof p=="string"?p:p({context:g,props:m});const b=g.bem.els;return`&:not(${m?.bPrefix||n}${g.bem.b}${b!==null&&b.length>0?`${t}${b[0]}`:""}${r}${p})`}}}return Object.assign(i,{cB:(...p)=>o(u(p[0]),p[1],p[2]),cE:(...p)=>o(s(p[0]),p[1],p[2]),cM:(...p)=>o(l(p[0]),p[1],p[2]),cNotM:(...p)=>o(a(p[0]),p[1],p[2])}),i}function Ab(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const i0=/\s*,(?![^(]*\))\s*/g,Tb=/\s+/g;function Db(e,n){const t=[];return n.split(i0).forEach(r=>{let o=Ab(r);if(o){if(o===1){e.forEach(u=>{t.push(r.replace("&",u))});return}}else{e.forEach(u=>{t.push((u&&u+" ")+r)});return}let i=[r];for(;o--;){const u=[];i.forEach(s=>{e.forEach(l=>{u.push(s.replace("&",l))})}),i=u}i.forEach(u=>t.push(u))}),t}function zb(e,n){const t=[];return n.split(i0).forEach(r=>{e.forEach(o=>{t.push((o&&o+" ")+r)})}),t}function Fb(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Db(n,t):n=zb(n,t))}),n.join(", ").replace(Tb," ")}function La(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function cu(e,n){return(n??document.head).querySelector(`style[cssr-id="${e}"]`)}function Pb(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function di(e){return e?/^\s*@(s|m)/.test(e):!1}const $b=/[A-Z]/g;function u0(e){return e.replace($b,n=>"-"+n.toLowerCase())}function Ib(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${u0(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function Rb(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Na(e,n,t,r){if(!n)return"";const o=Rb(n,t,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const u=e?[e+" {"]:[];return i.forEach(s=>{const l=o[s];if(s==="raw"){u.push(`
`+l+`
`);return}s=u0(s),l!=null&&u.push(`  ${s}${Ib(l)}`)}),e&&u.push("}"),u.join(`
`)}function Ss(e,n,t){e&&e.forEach(r=>{if(Array.isArray(r))Ss(r,n,t);else if(typeof r=="function"){const o=r(n);Array.isArray(o)?Ss(o,n,t):o&&t(o)}else r&&t(r)})}function s0(e,n,t,r,o){const i=e.$;let u="";if(!i||typeof i=="string")di(i)?u=i:n.push(i);else if(typeof i=="function"){const a=i({context:r.context,props:o});di(a)?u=a:n.push(a)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")di(i.$)?u=i.$:n.push(i.$);else if(i.$){const a=i.$({context:r.context,props:o});di(a)?u=a:n.push(a)}const s=Fb(n),l=Na(s,e.props,r,o);u?t.push(`${u} {`):l.length&&t.push(l),e.children&&Ss(e.children,{context:r.context,props:o},a=>{if(typeof a=="string"){const c=Na(s,{raw:a},r,o);t.push(c)}else s0(a,n,t,r,o)}),n.pop(),u&&t.push("}"),i&&i.after&&i.after(r.context)}function Ob(e,n,t){const r=[];return s0(e,[],r,n,t),r.join(`

`)}function $o(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Mb(e,n,t,r){const{els:o}=n;if(t===void 0)o.forEach(La),n.els=[];else{const i=cu(t,r);i&&o.includes(i)&&(La(i),n.els=o.filter(u=>u!==i))}}function ja(e,n){e.push(n)}function Bb(e,n,t,r,o,i,u,s,l){let a;if(t===void 0&&(a=n.render(r),t=$o(a)),l){l.adapter(t,a??n.render(r));return}s===void 0&&(s=document.head);const c=cu(t,s);if(c!==null&&!i)return c;const d=c??Pb(t);if(a===void 0&&(a=n.render(r)),d.textContent=a,c!==null)return c;if(u){const f=s.querySelector(`meta[name="${u}"]`);if(f)return s.insertBefore(d,f),ja(n.els,d),d}return o?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),ja(n.els,d),d}function Lb(e){return Ob(this,this.instance,e)}function Nb(e={}){const{id:n,ssr:t,props:r,head:o=!1,force:i=!1,anchorMetaName:u,parent:s}=e;return Bb(this.instance,this,n,r,o,i,u,s,t)}function jb(e={}){const{id:n,parent:t}=e;Mb(this.instance,this,n,t)}const fi=function(e,n,t,r){return{instance:e,$:n,props:t,children:r,els:[],render:Lb,mount:Nb,unmount:jb}},Hb=function(e,n,t,r){return Array.isArray(n)?fi(e,{$:null},null,n):Array.isArray(t)?fi(e,n,null,t):Array.isArray(r)?fi(e,n,t,r):fi(e,n,t,null)};function l0(e={}){const n={c:(...t)=>Hb(n,...t),use:(t,...r)=>t.install(n,...r),find:cu,context:{},config:e};return n}function Ub(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return cu(e)!==null}const Kb="n",Io=`.${Kb}-`,Wb="__",qb="--",a0=l0(),c0=Eb({blockPrefix:Io,elementPrefix:Wb,modifierPrefix:qb});a0.use(c0);const{c:L,find:z7}=a0,{cB:K,cE:U,cM:Z,cNotM:on}=c0;function d0(e){return L(({props:{bPrefix:n}})=>`${n||Io}modal, ${n||Io}drawer`,[e])}function f0(e){return L(({props:{bPrefix:n}})=>`${n||Io}popover`,[e])}function Vb(e){return L(({props:{bPrefix:n}})=>`&${n||Io}modal`,e)}const Gb=(...e)=>L(">",[K(...e)]);function ze(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}let Mi=[];const h0=new WeakMap;function Zb(){Mi.forEach(e=>e(...h0.get(e))),Mi=[]}function Xb(e,...n){h0.set(e,n),!Mi.includes(e)&&Mi.push(e)===1&&requestAnimationFrame(Zb)}function Ha(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Bi(e){return e.composedPath()[0]||null}function Ua(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function F7(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function lr(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?r:r[n]}const Ka={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function Yb(e,n,t){n/=100,t/=100;let r=(o,i=(o+e/60)%6)=>t-t*n*Math.max(Math.min(i,4-i,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function Jb(e,n,t){n/=100,t/=100;let r=n*Math.min(t,1-t),o=(i,u=(i+e/30)%12)=>t-r*Math.max(Math.min(u-3,9-u,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}const st="^\\s*",lt="\\s*$",Zt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",Pn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",ar="([0-9A-Fa-f])",cr="([0-9A-Fa-f]{2})",p0=new RegExp(`${st}hsl\\s*\\(${Pn},${Zt},${Zt}\\)${lt}`),g0=new RegExp(`${st}hsv\\s*\\(${Pn},${Zt},${Zt}\\)${lt}`),b0=new RegExp(`${st}hsla\\s*\\(${Pn},${Zt},${Zt},${Pn}\\)${lt}`),m0=new RegExp(`${st}hsva\\s*\\(${Pn},${Zt},${Zt},${Pn}\\)${lt}`),Qb=new RegExp(`${st}rgb\\s*\\(${Pn},${Pn},${Pn}\\)${lt}`),em=new RegExp(`${st}rgba\\s*\\(${Pn},${Pn},${Pn},${Pn}\\)${lt}`),nm=new RegExp(`${st}#${ar}${ar}${ar}${lt}`),tm=new RegExp(`${st}#${cr}${cr}${cr}${lt}`),rm=new RegExp(`${st}#${ar}${ar}${ar}${ar}${lt}`),om=new RegExp(`${st}#${cr}${cr}${cr}${cr}${lt}`);function En(e){return parseInt(e,16)}function im(e){try{let n;if(n=b0.exec(e))return[Li(n[1]),Ut(n[5]),Ut(n[9]),pr(n[13])];if(n=p0.exec(e))return[Li(n[1]),Ut(n[5]),Ut(n[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(n){throw n}}function um(e){try{let n;if(n=m0.exec(e))return[Li(n[1]),Ut(n[5]),Ut(n[9]),pr(n[13])];if(n=g0.exec(e))return[Li(n[1]),Ut(n[5]),Ut(n[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(n){throw n}}function yr(e){try{let n;if(n=tm.exec(e))return[En(n[1]),En(n[2]),En(n[3]),1];if(n=Qb.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),1];if(n=em.exec(e))return[gn(n[1]),gn(n[5]),gn(n[9]),pr(n[13])];if(n=nm.exec(e))return[En(n[1]+n[1]),En(n[2]+n[2]),En(n[3]+n[3]),1];if(n=om.exec(e))return[En(n[1]),En(n[2]),En(n[3]),pr(En(n[4])/255)];if(n=rm.exec(e))return[En(n[1]+n[1]),En(n[2]+n[2]),En(n[3]+n[3]),pr(En(n[4]+n[4])/255)];if(e in Ka)return yr(Ka[e]);if(p0.test(e)||b0.test(e)){const[t,r,o,i]=im(e);return[...Jb(t,r,o),i]}else if(g0.test(e)||m0.test(e)){const[t,r,o,i]=um(e);return[...Yb(t,r,o),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function sm(e){return e>1?1:e<0?0:e}function Es(e,n,t,r){return`rgba(${gn(e)}, ${gn(n)}, ${gn(t)}, ${sm(r)})`}function Lu(e,n,t,r,o){return gn((e*n*(1-r)+t*r)/o)}function hr(e,n){Array.isArray(e)||(e=yr(e)),Array.isArray(n)||(n=yr(n));const t=e[3],r=n[3],o=pr(t+r-t*r);return Es(Lu(e[0],t,n[0],r,o),Lu(e[1],t,n[1],r,o),Lu(e[2],t,n[2],r,o),o)}function De(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:yr(e);return typeof n.alpha=="number"?Es(t,r,o,n.alpha):Es(t,r,o,i)}function hi(e,n){const[t,r,o,i=1]=Array.isArray(e)?e:yr(e),{lightness:u=1,alpha:s=1}=n;return lm([t*u,r*u,o*u,i*s])}function pr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Li(e){const n=Math.round(Number(e));return n>=360||n<0?0:n}function gn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function Ut(e){const n=Math.round(Number(e));return n>100?100:n<0?0:n}function lm(e){const[n,t,r]=e;return 3 in e?`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, ${pr(e[3])})`:`rgba(${gn(n)}, ${gn(t)}, ${gn(r)}, 1)`}function v0(e=8){return Math.random().toString(16).slice(2,2+e)}function Si(e){return e.composedPath()[0]}const am={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function cm(e,n,t){if(e==="mousemoveoutside"){const r=o=>{n.contains(Si(o))||t(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=u=>{r=!n.contains(Si(u))},i=u=>{r&&(n.contains(Si(u))||t(u))};return{mousedown:o,mouseup:i,touchstart:o,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function x0(e,n,t){const r=am[e];let o=r.get(n);o===void 0&&r.set(n,o=new WeakMap);let i=o.get(t);return i===void 0&&o.set(t,i=cm(e,n,t)),i}function dm(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=x0(e,n,t);return Object.keys(o).forEach(i=>{en(i,document,o[i],r)}),!0}return!1}function fm(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=x0(e,n,t);return Object.keys(o).forEach(i=>{qe(i,document,o[i],r)}),!0}return!1}function hm(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function r(){e.set(this,!0),n.set(this,!0)}function o(_,E,S){const z=_[E];return _[E]=function(){return S.apply(_,arguments),z.apply(_,arguments)},_}function i(_,E){_[E]=Event.prototype[E]}const u=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var _;return(_=u.get(this))!==null&&_!==void 0?_:null}function a(_,E){s!==void 0&&Object.defineProperty(_,"currentTarget",{configurable:!0,enumerable:!0,get:E??s.get})}const c={bubble:{},capture:{}},d={};function f(){const _=function(E){const{type:S,eventPhase:z,bubbles:j}=E,P=Si(E);if(z===2)return;const q=z===1?"capture":"bubble";let G=P;const R=[];for(;G===null&&(G=window),R.push(G),G!==window;)G=G.parentNode||null;const X=c.capture[S],H=c.bubble[S];if(o(E,"stopPropagation",t),o(E,"stopImmediatePropagation",r),a(E,l),q==="capture"){if(X===void 0)return;for(let Q=R.length-1;Q>=0&&!e.has(E);--Q){const xe=R[Q],ye=X.get(xe);if(ye!==void 0){u.set(E,xe);for(const ee of ye){if(n.has(E))break;ee(E)}}if(Q===0&&!j&&H!==void 0){const ee=H.get(xe);if(ee!==void 0)for(const ie of ee){if(n.has(E))break;ie(E)}}}}else if(q==="bubble"){if(H===void 0)return;for(let Q=0;Q<R.length&&!e.has(E);++Q){const xe=R[Q],ye=H.get(xe);if(ye!==void 0){u.set(E,xe);for(const ee of ye){if(n.has(E))break;ee(E)}}}}i(E,"stopPropagation"),i(E,"stopImmediatePropagation"),a(E)};return _.displayName="evtdUnifiedHandler",_}function h(){const _=function(E){const{type:S,eventPhase:z}=E;if(z!==2)return;const j=d[S];j!==void 0&&j.forEach(P=>P(E))};return _.displayName="evtdUnifiedWindowEventHandler",_}const p=f(),g=h();function m(_,E){const S=c[_];return S[E]===void 0&&(S[E]=new Map,window.addEventListener(E,p,_==="capture")),S[E]}function b(_){return d[_]===void 0&&(d[_]=new Set,window.addEventListener(_,g)),d[_]}function v(_,E){let S=_.get(E);return S===void 0&&_.set(E,S=new Set),S}function w(_,E,S,z){const j=c[E][S];if(j!==void 0){const P=j.get(_);if(P!==void 0&&P.has(z))return!0}return!1}function y(_,E){const S=d[_];return!!(S!==void 0&&S.has(E))}function k(_,E,S,z){let j;if(typeof z=="object"&&z.once===!0?j=X=>{T(_,E,j,z),S(X)}:j=S,dm(_,E,j,z))return;const q=z===!0||typeof z=="object"&&z.capture===!0?"capture":"bubble",G=m(q,_),R=v(G,E);if(R.has(j)||R.add(j),E===window){const X=b(_);X.has(j)||X.add(j)}}function T(_,E,S,z){if(fm(_,E,S,z))return;const P=z===!0||typeof z=="object"&&z.capture===!0,q=P?"capture":"bubble",G=m(q,_),R=v(G,E);if(E===window&&!w(E,P?"bubble":"capture",_,S)&&y(_,S)){const H=d[_];H.delete(S),H.size===0&&(window.removeEventListener(_,g),d[_]=void 0)}R.has(S)&&R.delete(S),R.size===0&&G.delete(E),G.size===0&&(window.removeEventListener(_,p,q==="capture"),c[q][_]=void 0)}return{on:k,off:T}}const{on:en,off:qe}=hm();function pm(e){const n=te(!!e.value);if(n.value)return Hr(n);const t=sn(e,r=>{r&&(n.value=!0,t())});return Hr(n)}function Tn(e){const n=I(e),t=te(n.value);return sn(n,r=>{t.value=r}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(r){e.set(r)}}}function gm(){return Jo()!==null}const bm=typeof window<"u";let Lr,xo;const mm=()=>{var e,n;Lr=bm?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,xo=!1,Lr!==void 0?Lr.then(()=>{xo=!0}):xo=!0};mm();function vm(e){if(xo)return;let n=!1;Rn(()=>{xo||Lr?.then(()=>{n||e()})}),Hn(()=>{n=!0})}function Ro(e,n){return sn(e,t=>{t!==void 0&&(n.value=t)}),I(()=>e.value===void 0?n.value:e.value)}function y0(){const e=te(!1);return Rn(()=>{e.value=!0}),Hr(e)}function C0(e,n){return I(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const xm=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function ym(){return xm}function Cm(e={},n){const t=Xr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(a=>{if(a!==l.key)return;const c=r[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},u=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}o!==void 0&&Object.keys(o).forEach(a=>{if(a!==l.key)return;const c=o[a];if(typeof c=="function")c(l);else{const{stop:d=!1,prevent:f=!1}=c;d&&l.stopPropagation(),f&&l.preventDefault(),c.handler(l)}})},s=()=>{(n===void 0||n.value)&&(en("keydown",document,i),en("keyup",document,u)),n!==void 0&&sn(n,l=>{l?(en("keydown",document,i),en("keyup",document,u)):(qe("keydown",document,i),qe("keyup",document,u))})};return gm()?(Xo(s),Hn(()=>{(n===void 0||n.value)&&(qe("keydown",document,i),qe("keyup",document,u))})):s(),Hr(t)}function P7(e){return e}const $7="n-internal-select-menu",_m="n-internal-select-menu-body",yl="n-drawer-body",Cl="n-modal-body",du="n-popover-body",_0="__disabled__";function Wr(e){const n=be(Cl,null),t=be(yl,null),r=be(du,null),o=be(_m,null),i=te();if(typeof document<"u"){i.value=document.fullscreenElement;const u=()=>{i.value=document.fullscreenElement};Rn(()=>{en("fullscreenchange",document,u)}),Hn(()=>{qe("fullscreenchange",document,u)})}return Tn(()=>{var u;const{to:s}=e;return s!==void 0?s===!1?_0:s===!0?i.value||"body":s:n?.value?(u=n.value.$el)!==null&&u!==void 0?u:n.value:t?.value?t.value:r?.value?r.value:o?.value?o.value:s??(i.value||"body")})}Wr.tdkey=_0;Wr.propTo={type:[String,Object,Boolean],default:void 0};function wm(e,n,t){const r=te(e.value);let o=null;return sn(e,i=>{o!==null&&window.clearTimeout(o),i===!0?t&&!t.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const w0=typeof document<"u"&&typeof window<"u";let Wa=!1;function km(){if(w0&&window.CSS&&!Wa&&(Wa=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function _l(e){const n={isDeactivated:!1};let t=!1;return kf(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Sf(()=>{n.isDeactivated=!0,t||(t=!0)}),n}function As(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return r()}function Ts(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(vn(String(r)));return}if(Array.isArray(r)){Ts(r,n,t);return}if(r.type===Ne){if(r.children===null)return;Array.isArray(r.children)&&Ts(r.children,n,t)}else r.type!==Je&&t.push(r)}}),t}function qa(e,n,t="default"){const r=n[t];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const o=Ts(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Pt=null;function k0(){if(Pt===null&&(Pt=document.getElementById("v-binder-view-measurer"),Pt===null)){Pt=document.createElement("div"),Pt.id="v-binder-view-measurer";const{style:e}=Pt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Pt)}return Pt.getBoundingClientRect()}function Sm(e,n){const t=k0();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function Nu(e){const n=e.getBoundingClientRect(),t=k0();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Em(e){return e.nodeType===9?null:e.parentNode}function S0(e){if(e===null)return null;const n=Em(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:r,overflowY:o}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+o+r))return n}return S0(n)}const E0=ae({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;je("VBinder",(n=Jo())===null||n===void 0?void 0:n.proxy);const t=be("VBinder",null),r=te(null),o=b=>{r.value=b,t&&e.syncTargetWithParent&&t.setTargetRef(b)};let i=[];const u=()=>{let b=r.value;for(;b=S0(b),b!==null;)i.push(b);for(const v of i)en("scroll",v,d,!0)},s=()=>{for(const b of i)qe("scroll",b,d,!0);i=[]},l=new Set,a=b=>{l.size===0&&u(),l.has(b)||l.add(b)},c=b=>{l.has(b)&&l.delete(b),l.size===0&&s()},d=()=>{Xb(f)},f=()=>{l.forEach(b=>b())},h=new Set,p=b=>{h.size===0&&en("resize",window,m),h.has(b)||h.add(b)},g=b=>{h.has(b)&&h.delete(b),h.size===0&&qe("resize",window,m)},m=()=>{h.forEach(b=>b())};return Hn(()=>{qe("resize",window,m),s()}),{targetRef:r,setTargetRef:o,addScrollListener:a,removeScrollListener:c,addResizeListener:p,removeResizeListener:g}},render(){return As("binder",this.$slots)}}),A0=ae({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=be("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?ou(qa("follower",this.$slots),[[n]]):qa("follower",this.$slots)}}),Tr="@@mmoContext",Am={mounted(e,{value:n}){e[Tr]={handler:void 0},typeof n=="function"&&(e[Tr].handler=n,en("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Tr];typeof n=="function"?t.handler?t.handler!==n&&(qe("mousemoveoutside",e,t.handler),t.handler=n,en("mousemoveoutside",e,n)):(e[Tr].handler=n,en("mousemoveoutside",e,n)):t.handler&&(qe("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Tr];n&&qe("mousemoveoutside",e,n),e[Tr].handler=void 0}},Dr="@@coContext",Va={mounted(e,{value:n,modifiers:t}){e[Dr]={handler:void 0},typeof n=="function"&&(e[Dr].handler=n,en("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const r=e[Dr];typeof n=="function"?r.handler?r.handler!==n&&(qe("clickoutside",e,r.handler,{capture:t.capture}),r.handler=n,en("clickoutside",e,n,{capture:t.capture})):(e[Dr].handler=n,en("clickoutside",e,n,{capture:t.capture})):r.handler&&(qe("clickoutside",e,r.handler,{capture:t.capture}),r.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[Dr];t&&qe("clickoutside",e,t,{capture:n.capture}),e[Dr].handler=void 0}};function Tm(e,n){console.error(`[vdirs/${e}]: ${n}`)}class Dm{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:r}=this;if(t!==void 0){n.style.zIndex=`${t}`,r.delete(n);return}const{nextZIndex:o}=this;r.has(n)&&r.get(n)+1===this.nextZIndex||(n.style.zIndex=`${o}`,r.set(n,o),this.nextZIndex=o+1,this.squashState())}unregister(n,t){const{elementZIndex:r}=this;r.has(n)?r.delete(n):t===void 0&&Tm("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,r)=>t[1]-r[1]),this.nextZIndex=2e3,n.forEach(t=>{const r=t[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}const ju=new Dm,zr="@@ziContext",T0={mounted(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t;e[zr]={enabled:!!o,initialized:!1},o&&(ju.ensureZIndex(e,r),e[zr].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:r,enabled:o}=t,i=e[zr].enabled;o&&!i&&(ju.ensureZIndex(e,r),e[zr].initialized=!0),e[zr].enabled=!!o},unmounted(e,n){if(!e[zr].initialized)return;const{value:t={}}=n,{zIndex:r}=t;ju.unregister(e,r)}},zm="@css-render/vue3-ssr";function Fm(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function Pm(e,n,t){const{styles:r,ids:o}=t;o.has(e)||r!==null&&(o.add(e),r.push(Fm(e,n)))}const $m=typeof document<"u";function Yr(){if($m)return;const e=be(zm,null);if(e!==null)return{adapter:(n,t)=>Pm(n,t,e),context:e}}function Ga(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:ao}=l0(),D0="vueuc-style";function Za(e){return typeof e=="string"?document.querySelector(e):e()}const Im=ae({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:pm(He(e,"show")),mergedTo:I(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?As("lazy-teleport",this.$slots):A(K1,{disabled:this.disabled,to:this.mergedTo},As("lazy-teleport",this.$slots)):null}}),pi={top:"bottom",bottom:"top",left:"right",right:"left"},Xa={start:"end",center:"center",end:"start"},Hu={top:"height",bottom:"height",left:"width",right:"width"},Rm={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Om={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Mm={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Ya={top:!0,bottom:!1,left:!0,right:!1},Ja={top:"end",bottom:"start",left:"end",right:"start"};function Bm(e,n,t,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[u,s]=e.split("-");let l=s??"center",a={top:0,left:0};const c=(h,p,g)=>{let m=0,b=0;const v=t[h]-n[p]-n[h];return v>0&&r&&(g?b=Ya[p]?v:-v:m=Ya[p]?v:-v),{left:m,top:b}},d=u==="left"||u==="right";if(l!=="center"){const h=Mm[e],p=pi[h],g=Hu[h];if(t[g]>n[g]){if(n[h]+n[g]<t[g]){const m=(t[g]-n[g])/2;n[h]<m||n[p]<m?n[h]<n[p]?(l=Xa[s],a=c(g,p,d)):a=c(g,h,d):l="center"}}else t[g]<n[g]&&n[p]<0&&n[h]>n[p]&&(l=Xa[s])}else{const h=u==="bottom"||u==="top"?"left":"top",p=pi[h],g=Hu[h],m=(t[g]-n[g])/2;(n[h]<m||n[p]<m)&&(n[h]>n[p]?(l=Ja[h],a=c(g,h,d)):(l=Ja[p],a=c(g,p,d)))}let f=u;return n[u]<t[Hu[u]]&&n[u]<n[pi[u]]&&(f=pi[u]),{placement:l!=="center"?`${f}-${l}`:f,left:a.left,top:a.top}}function Lm(e,n){return n?Om[e]:Rm[e]}function Nm(e,n,t,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const jm=ao([ao(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ao(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ao("> *",{pointerEvents:"all"})])]),z0=ae({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=be("VBinder"),t=Tn(()=>e.enabled!==void 0?e.enabled:e.show),r=te(null),o=te(null),i=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&n.addScrollListener(l),f.includes("resize")&&n.addResizeListener(l)},u=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Rn(()=>{t.value&&(l(),i())});const s=Yr();jm.mount({id:"vueuc/binder",head:!0,anchorMetaName:D0,ssr:s}),Hn(()=>{u()}),vm(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const f=r.value;if(f===null)return;const h=n.targetRef,{x:p,y:g,overlap:m}=e,b=p!==void 0&&g!==void 0?Sm(p,g):Nu(h);f.style.setProperty("--v-target-width",`${Math.round(b.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(b.height)}px`);const{width:v,minWidth:w,placement:y,internalShift:k,flip:T}=e;f.setAttribute("v-placement",y),m?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:_}=f;v==="target"?_.width=`${b.width}px`:v!==void 0?_.width=v:_.width="",w==="target"?_.minWidth=`${b.width}px`:w!==void 0?_.minWidth=w:_.minWidth="";const E=Nu(f),S=Nu(o.value),{left:z,top:j,placement:P}=Bm(y,b,E,k,T,m),q=Lm(P,m),{left:G,top:R,transform:X}=Nm(P,S,b,j,z,m);f.setAttribute("v-placement",P),f.style.setProperty("--v-offset-left",`${Math.round(z)}px`),f.style.setProperty("--v-offset-top",`${Math.round(j)}px`),f.style.transform=`translateX(${G}) translateY(${R}) ${X}`,f.style.setProperty("--v-transform-origin",q),f.style.transformOrigin=q};sn(t,f=>{f?(i(),a()):u()});const a=()=>{Zo().then(l).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{sn(He(e,f),l)}),["teleportDisabled"].forEach(f=>{sn(He(e,f),a)}),sn(He(e,"syncTrigger"),f=>{f.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),f.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const c=y0(),d=Tn(()=>{const{to:f}=e;if(f!==void 0)return f;c.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:o,followerRef:r,mergedTo:d,syncPosition:l}},render(){return A(Im,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=A("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[A("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?ou(t,[[T0,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var gr=[],Hm=function(){return gr.some(function(e){return e.activeTargets.length>0})},Um=function(){return gr.some(function(e){return e.skippedTargets.length>0})},Qa="ResizeObserver loop completed with undelivered notifications.",Km=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Qa}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Qa),window.dispatchEvent(e)},Oo;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Oo||(Oo={}));var br=function(e){return Object.freeze(e)},Wm=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,br(this)}return e}(),F0=function(){function e(n,t,r,o){return this.x=n,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,br(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,r=n.y,o=n.top,i=n.right,u=n.bottom,s=n.left,l=n.width,a=n.height;return{x:t,y:r,top:o,right:i,bottom:u,left:s,width:l,height:a}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),wl=function(e){return e instanceof SVGElement&&"getBBox"in e},P0=function(e){if(wl(e)){var n=e.getBBox(),t=n.width,r=n.height;return!t&&!r}var o=e,i=o.offsetWidth,u=o.offsetHeight;return!(i||u||e.getClientRects().length)},ec=function(e){var n;if(e instanceof Element)return!0;var t=(n=e?.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},qm=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},yo=typeof window<"u"?window:{},gi=new WeakMap,nc=/auto|scroll/,Vm=/^tb|vertical/,Gm=/msie|trident/i.test(yo.navigator&&yo.navigator.userAgent),Yn=function(e){return parseFloat(e||"0")},Nr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new Wm((t?n:e)||0,(t?e:n)||0)},tc=br({devicePixelContentBoxSize:Nr(),borderBoxSize:Nr(),contentBoxSize:Nr(),contentRect:new F0(0,0,0,0)}),$0=function(e,n){if(n===void 0&&(n=!1),gi.has(e)&&!n)return gi.get(e);if(P0(e))return gi.set(e,tc),tc;var t=getComputedStyle(e),r=wl(e)&&e.ownerSVGElement&&e.getBBox(),o=!Gm&&t.boxSizing==="border-box",i=Vm.test(t.writingMode||""),u=!r&&nc.test(t.overflowY||""),s=!r&&nc.test(t.overflowX||""),l=r?0:Yn(t.paddingTop),a=r?0:Yn(t.paddingRight),c=r?0:Yn(t.paddingBottom),d=r?0:Yn(t.paddingLeft),f=r?0:Yn(t.borderTopWidth),h=r?0:Yn(t.borderRightWidth),p=r?0:Yn(t.borderBottomWidth),g=r?0:Yn(t.borderLeftWidth),m=d+a,b=l+c,v=g+h,w=f+p,y=s?e.offsetHeight-w-e.clientHeight:0,k=u?e.offsetWidth-v-e.clientWidth:0,T=o?m+v:0,_=o?b+w:0,E=r?r.width:Yn(t.width)-T-k,S=r?r.height:Yn(t.height)-_-y,z=E+m+k+v,j=S+b+y+w,P=br({devicePixelContentBoxSize:Nr(Math.round(E*devicePixelRatio),Math.round(S*devicePixelRatio),i),borderBoxSize:Nr(z,j,i),contentBoxSize:Nr(E,S,i),contentRect:new F0(d,l,E,S)});return gi.set(e,P),P},I0=function(e,n,t){var r=$0(e,t),o=r.borderBoxSize,i=r.contentBoxSize,u=r.devicePixelContentBoxSize;switch(n){case Oo.DEVICE_PIXEL_CONTENT_BOX:return u;case Oo.BORDER_BOX:return o;default:return i}},Zm=function(){function e(n){var t=$0(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=br([t.borderBoxSize]),this.contentBoxSize=br([t.contentBoxSize]),this.devicePixelContentBoxSize=br([t.devicePixelContentBoxSize])}return e}(),R0=function(e){if(P0(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},Xm=function(){var e=1/0,n=[];gr.forEach(function(u){if(u.activeTargets.length!==0){var s=[];u.activeTargets.forEach(function(a){var c=new Zm(a.target),d=R0(a.target);s.push(c),a.lastReportedSize=I0(a.target,a.observedBox),d<e&&(e=d)}),n.push(function(){u.callback.call(u.observer,s,u.observer)}),u.activeTargets.splice(0,u.activeTargets.length)}});for(var t=0,r=n;t<r.length;t++){var o=r[t];o()}return e},rc=function(e){gr.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(R0(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},Ym=function(){var e=0;for(rc(e);Hm();)e=Xm(),rc(e);return Um()&&Km(),e>0},Uu,O0=[],Jm=function(){return O0.splice(0).forEach(function(e){return e()})},Qm=function(e){if(!Uu){var n=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Jm()}).observe(t,r),Uu=function(){t.textContent="".concat(n?n--:n++)}}O0.push(e),Uu()},ev=function(e){Qm(function(){requestAnimationFrame(e)})},Ei=0,nv=function(){return!!Ei},tv=250,rv={attributes:!0,characterData:!0,childList:!0,subtree:!0},oc=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ic=function(e){return e===void 0&&(e=0),Date.now()+e},Ku=!1,ov=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=tv),!Ku){Ku=!0;var r=ic(n);ev(function(){var o=!1;try{o=Ym()}finally{if(Ku=!1,n=r-ic(),!nv())return;o?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,rv)};document.body?t():yo.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),oc.forEach(function(t){return yo.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),oc.forEach(function(t){return yo.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),Ds=new ov,uc=function(e){!Ei&&e>0&&Ds.start(),Ei+=e,!Ei&&Ds.stop()},iv=function(e){return!wl(e)&&!qm(e)&&getComputedStyle(e).display==="inline"},uv=function(){function e(n,t){this.target=n,this.observedBox=t||Oo.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=I0(this.target,this.observedBox,!0);return iv(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),sv=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),bi=new WeakMap,sc=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},mi=function(){function e(){}return e.connect=function(n,t){var r=new sv(n,t);bi.set(n,r)},e.observe=function(n,t,r){var o=bi.get(n),i=o.observationTargets.length===0;sc(o.observationTargets,t)<0&&(i&&gr.push(o),o.observationTargets.push(new uv(t,r&&r.box)),uc(1),Ds.schedule())},e.unobserve=function(n,t){var r=bi.get(n),o=sc(r.observationTargets,t),i=r.observationTargets.length===1;o>=0&&(i&&gr.splice(gr.indexOf(r),1),r.observationTargets.splice(o,1),uc(-1))},e.disconnect=function(n){var t=this,r=bi.get(n);r.observationTargets.slice().forEach(function(o){return t.unobserve(n,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),lv=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");mi.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ec(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");mi.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ec(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");mi.unobserve(this,n)},e.prototype.disconnect=function(){mi.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class av{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||lv)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const lc=new av,Ni=ae({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=Jo().proxy;function r(o){const{onResize:i}=e;i!==void 0&&i(o)}Rn(()=>{const o=t.$el;if(o===void 0){Ga("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){Ga("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(lc.registerHandler(o.nextElementSibling,r),n=!0)}),Hn(()=>{n&&lc.unregisterHandler(t.$el.nextElementSibling)})},render(){return su(this.$slots,"default")}}),pt="v-hidden",cv=ao("[v-hidden]",{display:"none!important"}),dv=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=te(null),r=te(null);function o(u){const{value:s}=t,{getCounter:l,getTail:a}=e;let c;if(l!==void 0?c=l():c=r.value,!s||!c)return;c.hasAttribute(pt)&&c.removeAttribute(pt);const{children:d}=s;if(u.showAllItemsBeforeCalculate)for(const w of d)w.hasAttribute(pt)&&w.removeAttribute(pt);const f=s.offsetWidth,h=[],p=n.tail?a?.():null;let g=p?p.offsetWidth:0,m=!1;const b=s.children.length-(n.tail?1:0);for(let w=0;w<b-1;++w){if(w<0)continue;const y=d[w];if(m){y.hasAttribute(pt)||y.setAttribute(pt,"");continue}else y.hasAttribute(pt)&&y.removeAttribute(pt);const k=y.offsetWidth;if(g+=k,h[w]=k,g>f){const{updateCounter:T}=e;for(let _=w;_>=0;--_){const E=b-1-_;T!==void 0?T(E):c.textContent=`${E}`;const S=c.offsetWidth;if(g-=h[_],g+S<=f||_===0){m=!0,w=_-1,p&&(w===-1?(p.style.maxWidth=`${f-S}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:z}=e;z&&z(E);break}}}}const{onUpdateOverflow:v}=e;m?v!==void 0&&v(!0):(v!==void 0&&v(!1),c.setAttribute(pt,""))}const i=Yr();return cv.mount({id:"vueuc/overflow",head:!0,anchorMetaName:D0,ssr:i}),Rn(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:o}},render(){const{$slots:e}=this;return Zo(()=>this.sync({showAllItemsBeforeCalculate:!1})),A("div",{class:"v-overflow",ref:"selfRef"},[su(e,"default"),e.counter?e.counter():A("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function M0(e){return e instanceof HTMLElement}function B0(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(M0(t)&&(N0(t)||B0(t)))return!0}return!1}function L0(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(M0(t)&&(N0(t)||L0(t)))return!0}return!1}function N0(e){if(!fv(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function fv(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let oo=[];const hv=ae({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=v0(),t=te(null),r=te(null);let o=!1,i=!1;const u=typeof document>"u"?null:document.activeElement;function s(){return oo[oo.length-1]===n}function l(m){var b;m.code==="Escape"&&s()&&((b=e.onEsc)===null||b===void 0||b.call(e,m))}Rn(()=>{sn(()=>e.active,m=>{m?(d(),en("keydown",document,l)):(qe("keydown",document,l),o&&f())},{immediate:!0})}),Hn(()=>{qe("keydown",document,l),o&&f()});function a(m){if(!i&&s()){const b=c();if(b===null||b.contains(Bi(m)))return;h("first")}}function c(){const m=t.value;if(m===null)return null;let b=m;for(;b=b.nextSibling,!(b===null||b instanceof Element&&b.tagName==="DIV"););return b}function d(){var m;if(!e.disabled){if(oo.push(n),e.autoFocus){const{initialFocusTo:b}=e;b===void 0?h("first"):(m=Za(b))===null||m===void 0||m.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",a,!0)}}function f(){var m;if(e.disabled||(document.removeEventListener("focus",a,!0),oo=oo.filter(v=>v!==n),s()))return;const{finalFocusTo:b}=e;b!==void 0?(m=Za(b))===null||m===void 0||m.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&u instanceof HTMLElement&&(i=!0,u.focus({preventScroll:!0}),i=!1)}function h(m){if(s()&&e.active){const b=t.value,v=r.value;if(b!==null&&v!==null){const w=c();if(w==null||w===v){i=!0,b.focus({preventScroll:!0}),i=!1;return}i=!0;const y=m==="first"?B0(w):L0(w);i=!1,y||(i=!0,b.focus({preventScroll:!0}),i=!1)}}}function p(m){if(i)return;const b=c();b!==null&&(m.relatedTarget!==null&&b.contains(m.relatedTarget)?h("last"):h("first"))}function g(m){i||(m.relatedTarget!==null&&m.relatedTarget===t.value?h("last"):h("first"))}return{focusableStartRef:t,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:p,handleEndFocus:g}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return A(Ne,null,[A("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),A("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function zs(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const pv=/^(\d|\.)+$/,ac=/(\d|\.)+/;function Vt(e,{c:n=1,offset:t=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+t)*n;return o===0?"0":`${o}px`}else if(typeof e=="string")if(pv.test(e)){const o=(Number(e)+t)*n;return r?o===0?"0":`${o}px`:`${o}`}else{const o=ac.exec(e);return o?e.replace(ac,String((Number(o[0])+t)*n)):e}return e}function cc(e){const{left:n,right:t,top:r,bottom:o}=lr(e);return`${r} ${n} ${o} ${t}`}let Wu;function gv(){return Wu===void 0&&(Wu=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Wu}function Mo(e,n){console.error(`[naive/${e}]: ${n}`)}function j0(e,n){throw new Error(`[naive/${e}]: ${n}`)}function Ze(e,...n){if(Array.isArray(e))e.forEach(t=>Ze(t,...n));else return e(...n)}function bv(e){return n=>{n?e.value=n.$el:e.value=null}}function Fs(e,n=!0,t=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&t.push(vn(String(r)));return}if(Array.isArray(r)){Fs(r,n,t);return}if(r.type===Ne){if(r.children===null)return;Array.isArray(r.children)&&Fs(r.children,n,t)}else{if(r.type===Je&&n)return;t.push(r)}}}),t}function mv(e,n="default",t=void 0){const r=e[n];if(!r)return Mo("getFirstSlotVNode",`slot[${n}] is empty`),null;const o=Fs(r(t));return o.length===1?o[0]:(Mo("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function Co(e,n=[],t){const r={};return n.forEach(o=>{r[o]=e[o]}),Object.assign(r,t)}function kl(e){return Object.keys(e)}function it(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?vn(e):typeof e=="number"?vn(String(e)):null}function Wn(e){return e.some(n=>Ur(n)?!(n.type===Je||n.type===Ne&&!Wn(n.children)):!0)?e:null}function Ps(e,n){return e&&Wn(e())||n()}function I7(e,n,t){return e&&Wn(e(n))||t(n)}function An(e,n){const t=e&&Wn(e());return n(t||null)}function dc(e){return!(e&&Wn(e()))}const fc=ae({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),kt="n-config-provider",$s="n";function Cn(e={},n={defaultBordered:!0}){const t=be(kt,null);return{inlineThemeDisabled:t?.inlineThemeDisabled,mergedRtlRef:t?.mergedRtlRef,mergedComponentPropsRef:t?.mergedComponentPropsRef,mergedBreakpointsRef:t?.mergedBreakpointsRef,mergedBorderedRef:I(()=>{var r,o;const{bordered:i}=e;return i!==void 0?i:(o=(r=t?.mergedBorderedRef.value)!==null&&r!==void 0?r:n.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:t?t.mergedClsPrefixRef:of($s),namespaceRef:I(()=>t?.mergedNamespaceRef.value)}}function Un(e,n,t,r){t||j0("useThemeClass","cssVarsRef is not passed");const o=be(kt,null),i=o?.mergedThemeHashRef,u=o?.styleMountTarget,s=te(""),l=Yr();let a;const c=`__${e}`,d=()=>{let f=c;const h=n?n.value:void 0,p=i?.value;p&&(f+=`-${p}`),h&&(f+=`-${h}`);const{themeOverrides:g,builtinThemeOverrides:m}=r;g&&(f+=`-${$o(JSON.stringify(g))}`),m&&(f+=`-${$o(JSON.stringify(m))}`),s.value=f,a=()=>{const b=t.value;let v="";for(const w in b)v+=`${w}: ${b[w]};`;L(`.${f}`,v).mount({id:f,ssr:l,parent:u}),a=void 0}};return _t(()=>{d()}),{themeClass:s,onRender:()=>{a?.()}}}var H0=typeof global=="object"&&global&&global.Object===Object&&global,vv=typeof self=="object"&&self&&self.Object===Object&&self,at=H0||vv||Function("return this")(),Xt=at.Symbol,U0=Object.prototype,xv=U0.hasOwnProperty,yv=U0.toString,io=Xt?Xt.toStringTag:void 0;function Cv(e){var n=xv.call(e,io),t=e[io];try{e[io]=void 0;var r=!0}catch{}var o=yv.call(e);return r&&(n?e[io]=t:delete e[io]),o}var _v=Object.prototype,wv=_v.toString;function kv(e){return wv.call(e)}var Sv="[object Null]",Ev="[object Undefined]",hc=Xt?Xt.toStringTag:void 0;function kr(e){return e==null?e===void 0?Ev:Sv:hc&&hc in Object(e)?Cv(e):kv(e)}function Yt(e){return e!=null&&typeof e=="object"}var Av="[object Symbol]";function Sl(e){return typeof e=="symbol"||Yt(e)&&kr(e)==Av}function K0(e,n){for(var t=-1,r=e==null?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o}var jn=Array.isArray,pc=Xt?Xt.prototype:void 0,gc=pc?pc.toString:void 0;function W0(e){if(typeof e=="string")return e;if(jn(e))return K0(e,W0)+"";if(Sl(e))return gc?gc.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function Qt(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function El(e){return e}var Tv="[object AsyncFunction]",Dv="[object Function]",zv="[object GeneratorFunction]",Fv="[object Proxy]";function Al(e){if(!Qt(e))return!1;var n=kr(e);return n==Dv||n==zv||n==Tv||n==Fv}var qu=at["__core-js_shared__"],bc=function(){var e=/[^.]+$/.exec(qu&&qu.keys&&qu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Pv(e){return!!bc&&bc in e}var $v=Function.prototype,Iv=$v.toString;function Sr(e){if(e!=null){try{return Iv.call(e)}catch{}try{return e+""}catch{}}return""}var Rv=/[\\^$.*+?()[\]{}|]/g,Ov=/^\[object .+?Constructor\]$/,Mv=Function.prototype,Bv=Object.prototype,Lv=Mv.toString,Nv=Bv.hasOwnProperty,jv=RegExp("^"+Lv.call(Nv).replace(Rv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Hv(e){if(!Qt(e)||Pv(e))return!1;var n=Al(e)?jv:Ov;return n.test(Sr(e))}function Uv(e,n){return e?.[n]}function Er(e,n){var t=Uv(e,n);return Hv(t)?t:void 0}var Is=Er(at,"WeakMap"),mc=Object.create,Kv=function(){function e(){}return function(n){if(!Qt(n))return{};if(mc)return mc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function Wv(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function qv(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var Vv=800,Gv=16,Zv=Date.now;function Xv(e){var n=0,t=0;return function(){var r=Zv(),o=Gv-(r-t);if(t=r,o>0){if(++n>=Vv)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Yv(e){return function(){return e}}var ji=function(){try{var e=Er(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Jv=ji?function(e,n){return ji(e,"toString",{configurable:!0,enumerable:!1,value:Yv(n),writable:!0})}:El,Qv=Xv(Jv),e2=9007199254740991,n2=/^(?:0|[1-9]\d*)$/;function Tl(e,n){var t=typeof e;return n=n??e2,!!n&&(t=="number"||t!="symbol"&&n2.test(e))&&e>-1&&e%1==0&&e<n}function Dl(e,n,t){n=="__proto__"&&ji?ji(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function ei(e,n){return e===n||e!==e&&n!==n}var t2=Object.prototype,r2=t2.hasOwnProperty;function o2(e,n,t){var r=e[n];(!(r2.call(e,n)&&ei(r,t))||t===void 0&&!(n in e))&&Dl(e,n,t)}function i2(e,n,t,r){var o=!t;t||(t={});for(var i=-1,u=n.length;++i<u;){var s=n[i],l=void 0;l===void 0&&(l=e[s]),o?Dl(t,s,l):o2(t,s,l)}return t}var vc=Math.max;function u2(e,n,t){return n=vc(n===void 0?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=vc(r.length-n,0),u=Array(i);++o<i;)u[o]=r[n+o];o=-1;for(var s=Array(n+1);++o<n;)s[o]=r[o];return s[n]=t(u),Wv(e,this,s)}}function s2(e,n){return Qv(u2(e,n,El),e+"")}var l2=9007199254740991;function zl(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=l2}function Jr(e){return e!=null&&zl(e.length)&&!Al(e)}function a2(e,n,t){if(!Qt(t))return!1;var r=typeof n;return(r=="number"?Jr(t)&&Tl(n,t.length):r=="string"&&n in t)?ei(t[n],e):!1}function c2(e){return s2(function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,u=o>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,u&&a2(t[0],t[1],u)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var s=t[r];s&&e(n,s,r,i)}return n})}var d2=Object.prototype;function Fl(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||d2;return e===t}function f2(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var h2="[object Arguments]";function xc(e){return Yt(e)&&kr(e)==h2}var q0=Object.prototype,p2=q0.hasOwnProperty,g2=q0.propertyIsEnumerable,Hi=xc(function(){return arguments}())?xc:function(e){return Yt(e)&&p2.call(e,"callee")&&!g2.call(e,"callee")};function b2(){return!1}var V0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yc=V0&&typeof module=="object"&&module&&!module.nodeType&&module,m2=yc&&yc.exports===V0,Cc=m2?at.Buffer:void 0,v2=Cc?Cc.isBuffer:void 0,Ui=v2||b2,x2="[object Arguments]",y2="[object Array]",C2="[object Boolean]",_2="[object Date]",w2="[object Error]",k2="[object Function]",S2="[object Map]",E2="[object Number]",A2="[object Object]",T2="[object RegExp]",D2="[object Set]",z2="[object String]",F2="[object WeakMap]",P2="[object ArrayBuffer]",$2="[object DataView]",I2="[object Float32Array]",R2="[object Float64Array]",O2="[object Int8Array]",M2="[object Int16Array]",B2="[object Int32Array]",L2="[object Uint8Array]",N2="[object Uint8ClampedArray]",j2="[object Uint16Array]",H2="[object Uint32Array]",Le={};Le[I2]=Le[R2]=Le[O2]=Le[M2]=Le[B2]=Le[L2]=Le[N2]=Le[j2]=Le[H2]=!0;Le[x2]=Le[y2]=Le[P2]=Le[C2]=Le[$2]=Le[_2]=Le[w2]=Le[k2]=Le[S2]=Le[E2]=Le[A2]=Le[T2]=Le[D2]=Le[z2]=Le[F2]=!1;function U2(e){return Yt(e)&&zl(e.length)&&!!Le[kr(e)]}function K2(e){return function(n){return e(n)}}var G0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_o=G0&&typeof module=="object"&&module&&!module.nodeType&&module,W2=_o&&_o.exports===G0,Vu=W2&&H0.process,_c=function(){try{var e=_o&&_o.require&&_o.require("util").types;return e||Vu&&Vu.binding&&Vu.binding("util")}catch{}}(),wc=_c&&_c.isTypedArray,Pl=wc?K2(wc):U2,q2=Object.prototype,V2=q2.hasOwnProperty;function Z0(e,n){var t=jn(e),r=!t&&Hi(e),o=!t&&!r&&Ui(e),i=!t&&!r&&!o&&Pl(e),u=t||r||o||i,s=u?f2(e.length,String):[],l=s.length;for(var a in e)(n||V2.call(e,a))&&!(u&&(a=="length"||o&&(a=="offset"||a=="parent")||i&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||Tl(a,l)))&&s.push(a);return s}function X0(e,n){return function(t){return e(n(t))}}var G2=X0(Object.keys,Object),Z2=Object.prototype,X2=Z2.hasOwnProperty;function Y2(e){if(!Fl(e))return G2(e);var n=[];for(var t in Object(e))X2.call(e,t)&&t!="constructor"&&n.push(t);return n}function $l(e){return Jr(e)?Z0(e):Y2(e)}function J2(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var Q2=Object.prototype,ex=Q2.hasOwnProperty;function nx(e){if(!Qt(e))return J2(e);var n=Fl(e),t=[];for(var r in e)r=="constructor"&&(n||!ex.call(e,r))||t.push(r);return t}function Y0(e){return Jr(e)?Z0(e,!0):nx(e)}var tx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rx=/^\w*$/;function Il(e,n){if(jn(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Sl(e)?!0:rx.test(e)||!tx.test(e)||n!=null&&e in Object(n)}var Bo=Er(Object,"create");function ox(){this.__data__=Bo?Bo(null):{},this.size=0}function ix(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var ux="__lodash_hash_undefined__",sx=Object.prototype,lx=sx.hasOwnProperty;function ax(e){var n=this.__data__;if(Bo){var t=n[e];return t===ux?void 0:t}return lx.call(n,e)?n[e]:void 0}var cx=Object.prototype,dx=cx.hasOwnProperty;function fx(e){var n=this.__data__;return Bo?n[e]!==void 0:dx.call(n,e)}var hx="__lodash_hash_undefined__";function px(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Bo&&n===void 0?hx:n,this}function Cr(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Cr.prototype.clear=ox;Cr.prototype.delete=ix;Cr.prototype.get=ax;Cr.prototype.has=fx;Cr.prototype.set=px;function gx(){this.__data__=[],this.size=0}function fu(e,n){for(var t=e.length;t--;)if(ei(e[t][0],n))return t;return-1}var bx=Array.prototype,mx=bx.splice;function vx(e){var n=this.__data__,t=fu(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():mx.call(n,t,1),--this.size,!0}function xx(e){var n=this.__data__,t=fu(n,e);return t<0?void 0:n[t][1]}function yx(e){return fu(this.__data__,e)>-1}function Cx(e,n){var t=this.__data__,r=fu(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function At(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}At.prototype.clear=gx;At.prototype.delete=vx;At.prototype.get=xx;At.prototype.has=yx;At.prototype.set=Cx;var Lo=Er(at,"Map");function _x(){this.size=0,this.__data__={hash:new Cr,map:new(Lo||At),string:new Cr}}function wx(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function hu(e,n){var t=e.__data__;return wx(n)?t[typeof n=="string"?"string":"hash"]:t.map}function kx(e){var n=hu(this,e).delete(e);return this.size-=n?1:0,n}function Sx(e){return hu(this,e).get(e)}function Ex(e){return hu(this,e).has(e)}function Ax(e,n){var t=hu(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Tt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Tt.prototype.clear=_x;Tt.prototype.delete=kx;Tt.prototype.get=Sx;Tt.prototype.has=Ex;Tt.prototype.set=Ax;var Tx="Expected a function";function Rl(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Tx);var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var u=e.apply(this,r);return t.cache=i.set(o,u)||i,u};return t.cache=new(Rl.Cache||Tt),t}Rl.Cache=Tt;var Dx=500;function zx(e){var n=Rl(e,function(r){return t.size===Dx&&t.clear(),r}),t=n.cache;return n}var Fx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Px=/\\(\\)?/g,$x=zx(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Fx,function(t,r,o,i){n.push(o?i.replace(Px,"$1"):r||t)}),n});function J0(e){return e==null?"":W0(e)}function Q0(e,n){return jn(e)?e:Il(e,n)?[e]:$x(J0(e))}function pu(e){if(typeof e=="string"||Sl(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function eh(e,n){n=Q0(n,e);for(var t=0,r=n.length;e!=null&&t<r;)e=e[pu(n[t++])];return t&&t==r?e:void 0}function Ix(e,n,t){var r=e==null?void 0:eh(e,n);return r===void 0?t:r}function Rx(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var nh=X0(Object.getPrototypeOf,Object),Ox="[object Object]",Mx=Function.prototype,Bx=Object.prototype,th=Mx.toString,Lx=Bx.hasOwnProperty,Nx=th.call(Object);function jx(e){if(!Yt(e)||kr(e)!=Ox)return!1;var n=nh(e);if(n===null)return!0;var t=Lx.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&th.call(t)==Nx}function Hx(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),t=t>o?o:t,t<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+n];return i}function Ux(e,n,t){var r=e.length;return t=t===void 0?r:t,!n&&t>=r?e:Hx(e,n,t)}var Kx="\\ud800-\\udfff",Wx="\\u0300-\\u036f",qx="\\ufe20-\\ufe2f",Vx="\\u20d0-\\u20ff",Gx=Wx+qx+Vx,Zx="\\ufe0e\\ufe0f",Xx="\\u200d",Yx=RegExp("["+Xx+Kx+Gx+Zx+"]");function rh(e){return Yx.test(e)}function Jx(e){return e.split("")}var oh="\\ud800-\\udfff",Qx="\\u0300-\\u036f",e3="\\ufe20-\\ufe2f",n3="\\u20d0-\\u20ff",t3=Qx+e3+n3,r3="\\ufe0e\\ufe0f",o3="["+oh+"]",Rs="["+t3+"]",Os="\\ud83c[\\udffb-\\udfff]",i3="(?:"+Rs+"|"+Os+")",ih="[^"+oh+"]",uh="(?:\\ud83c[\\udde6-\\uddff]){2}",sh="[\\ud800-\\udbff][\\udc00-\\udfff]",u3="\\u200d",lh=i3+"?",ah="["+r3+"]?",s3="(?:"+u3+"(?:"+[ih,uh,sh].join("|")+")"+ah+lh+")*",l3=ah+lh+s3,a3="(?:"+[ih+Rs+"?",Rs,uh,sh,o3].join("|")+")",c3=RegExp(Os+"(?="+Os+")|"+a3+l3,"g");function d3(e){return e.match(c3)||[]}function f3(e){return rh(e)?d3(e):Jx(e)}function h3(e){return function(n){n=J0(n);var t=rh(n)?f3(n):void 0,r=t?t[0]:n.charAt(0),o=t?Ux(t,1).join(""):n.slice(1);return r[e]()+o}}var p3=h3("toUpperCase");function g3(){this.__data__=new At,this.size=0}function b3(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function m3(e){return this.__data__.get(e)}function v3(e){return this.__data__.has(e)}var x3=200;function y3(e,n){var t=this.__data__;if(t instanceof At){var r=t.__data__;if(!Lo||r.length<x3-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Tt(r)}return t.set(e,n),this.size=t.size,this}function ut(e){var n=this.__data__=new At(e);this.size=n.size}ut.prototype.clear=g3;ut.prototype.delete=b3;ut.prototype.get=m3;ut.prototype.has=v3;ut.prototype.set=y3;var ch=typeof exports=="object"&&exports&&!exports.nodeType&&exports,kc=ch&&typeof module=="object"&&module&&!module.nodeType&&module,C3=kc&&kc.exports===ch,Sc=C3?at.Buffer:void 0;Sc&&Sc.allocUnsafe;function _3(e,n){return e.slice()}function w3(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var u=e[t];n(u,t,e)&&(i[o++]=u)}return i}function k3(){return[]}var S3=Object.prototype,E3=S3.propertyIsEnumerable,Ec=Object.getOwnPropertySymbols,A3=Ec?function(e){return e==null?[]:(e=Object(e),w3(Ec(e),function(n){return E3.call(e,n)}))}:k3;function T3(e,n,t){var r=n(e);return jn(e)?r:Rx(r,t(e))}function Ac(e){return T3(e,$l,A3)}var Ms=Er(at,"DataView"),Bs=Er(at,"Promise"),Ls=Er(at,"Set"),Tc="[object Map]",D3="[object Object]",Dc="[object Promise]",zc="[object Set]",Fc="[object WeakMap]",Pc="[object DataView]",z3=Sr(Ms),F3=Sr(Lo),P3=Sr(Bs),$3=Sr(Ls),I3=Sr(Is),Lt=kr;(Ms&&Lt(new Ms(new ArrayBuffer(1)))!=Pc||Lo&&Lt(new Lo)!=Tc||Bs&&Lt(Bs.resolve())!=Dc||Ls&&Lt(new Ls)!=zc||Is&&Lt(new Is)!=Fc)&&(Lt=function(e){var n=kr(e),t=n==D3?e.constructor:void 0,r=t?Sr(t):"";if(r)switch(r){case z3:return Pc;case F3:return Tc;case P3:return Dc;case $3:return zc;case I3:return Fc}return n});var Ki=at.Uint8Array;function R3(e){var n=new e.constructor(e.byteLength);return new Ki(n).set(new Ki(e)),n}function O3(e,n){var t=R3(e.buffer);return new e.constructor(t,e.byteOffset,e.length)}function M3(e){return typeof e.constructor=="function"&&!Fl(e)?Kv(nh(e)):{}}var B3="__lodash_hash_undefined__";function L3(e){return this.__data__.set(e,B3),this}function N3(e){return this.__data__.has(e)}function Wi(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Tt;++n<t;)this.add(e[n])}Wi.prototype.add=Wi.prototype.push=L3;Wi.prototype.has=N3;function j3(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function H3(e,n){return e.has(n)}var U3=1,K3=2;function dh(e,n,t,r,o,i){var u=t&U3,s=e.length,l=n.length;if(s!=l&&!(u&&l>s))return!1;var a=i.get(e),c=i.get(n);if(a&&c)return a==n&&c==e;var d=-1,f=!0,h=t&K3?new Wi:void 0;for(i.set(e,n),i.set(n,e);++d<s;){var p=e[d],g=n[d];if(r)var m=u?r(g,p,d,n,e,i):r(p,g,d,e,n,i);if(m!==void 0){if(m)continue;f=!1;break}if(h){if(!j3(n,function(b,v){if(!H3(h,v)&&(p===b||o(p,b,t,r,i)))return h.push(v)})){f=!1;break}}else if(!(p===g||o(p,g,t,r,i))){f=!1;break}}return i.delete(e),i.delete(n),f}function W3(e){var n=-1,t=Array(e.size);return e.forEach(function(r,o){t[++n]=[o,r]}),t}function q3(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var V3=1,G3=2,Z3="[object Boolean]",X3="[object Date]",Y3="[object Error]",J3="[object Map]",Q3="[object Number]",ey="[object RegExp]",ny="[object Set]",ty="[object String]",ry="[object Symbol]",oy="[object ArrayBuffer]",iy="[object DataView]",$c=Xt?Xt.prototype:void 0,Gu=$c?$c.valueOf:void 0;function uy(e,n,t,r,o,i,u){switch(t){case iy:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case oy:return!(e.byteLength!=n.byteLength||!i(new Ki(e),new Ki(n)));case Z3:case X3:case Q3:return ei(+e,+n);case Y3:return e.name==n.name&&e.message==n.message;case ey:case ty:return e==n+"";case J3:var s=W3;case ny:var l=r&V3;if(s||(s=q3),e.size!=n.size&&!l)return!1;var a=u.get(e);if(a)return a==n;r|=G3,u.set(e,n);var c=dh(s(e),s(n),r,o,i,u);return u.delete(e),c;case ry:if(Gu)return Gu.call(e)==Gu.call(n)}return!1}var sy=1,ly=Object.prototype,ay=ly.hasOwnProperty;function cy(e,n,t,r,o,i){var u=t&sy,s=Ac(e),l=s.length,a=Ac(n),c=a.length;if(l!=c&&!u)return!1;for(var d=l;d--;){var f=s[d];if(!(u?f in n:ay.call(n,f)))return!1}var h=i.get(e),p=i.get(n);if(h&&p)return h==n&&p==e;var g=!0;i.set(e,n),i.set(n,e);for(var m=u;++d<l;){f=s[d];var b=e[f],v=n[f];if(r)var w=u?r(v,b,f,n,e,i):r(b,v,f,e,n,i);if(!(w===void 0?b===v||o(b,v,t,r,i):w)){g=!1;break}m||(m=f=="constructor")}if(g&&!m){var y=e.constructor,k=n.constructor;y!=k&&"constructor"in e&&"constructor"in n&&!(typeof y=="function"&&y instanceof y&&typeof k=="function"&&k instanceof k)&&(g=!1)}return i.delete(e),i.delete(n),g}var dy=1,Ic="[object Arguments]",Rc="[object Array]",vi="[object Object]",fy=Object.prototype,Oc=fy.hasOwnProperty;function hy(e,n,t,r,o,i){var u=jn(e),s=jn(n),l=u?Rc:Lt(e),a=s?Rc:Lt(n);l=l==Ic?vi:l,a=a==Ic?vi:a;var c=l==vi,d=a==vi,f=l==a;if(f&&Ui(e)){if(!Ui(n))return!1;u=!0,c=!1}if(f&&!c)return i||(i=new ut),u||Pl(e)?dh(e,n,t,r,o,i):uy(e,n,l,t,r,o,i);if(!(t&dy)){var h=c&&Oc.call(e,"__wrapped__"),p=d&&Oc.call(n,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?n.value():n;return i||(i=new ut),o(g,m,t,r,i)}}return f?(i||(i=new ut),cy(e,n,t,r,o,i)):!1}function Ol(e,n,t,r,o){return e===n?!0:e==null||n==null||!Yt(e)&&!Yt(n)?e!==e&&n!==n:hy(e,n,t,r,Ol,o)}var py=1,gy=2;function by(e,n,t,r){var o=t.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var u=t[o];if(u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){u=t[o];var s=u[0],l=e[s],a=u[1];if(u[2]){if(l===void 0&&!(s in e))return!1}else{var c=new ut,d;if(!(d===void 0?Ol(a,l,py|gy,r,c):d))return!1}}return!0}function fh(e){return e===e&&!Qt(e)}function my(e){for(var n=$l(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,fh(o)]}return n}function hh(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function vy(e){var n=my(e);return n.length==1&&n[0][2]?hh(n[0][0],n[0][1]):function(t){return t===e||by(t,e,n)}}function xy(e,n){return e!=null&&n in Object(e)}function yy(e,n,t){n=Q0(n,e);for(var r=-1,o=n.length,i=!1;++r<o;){var u=pu(n[r]);if(!(i=e!=null&&t(e,u)))break;e=e[u]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&zl(o)&&Tl(u,o)&&(jn(e)||Hi(e)))}function Cy(e,n){return e!=null&&yy(e,n,xy)}var _y=1,wy=2;function ky(e,n){return Il(e)&&fh(n)?hh(pu(e),n):function(t){var r=Ix(t,e);return r===void 0&&r===n?Cy(t,e):Ol(n,r,_y|wy)}}function Sy(e){return function(n){return n?.[e]}}function Ey(e){return function(n){return eh(n,e)}}function Ay(e){return Il(e)?Sy(pu(e)):Ey(e)}function Ty(e){return typeof e=="function"?e:e==null?El:typeof e=="object"?jn(e)?ky(e[0],e[1]):vy(e):Ay(e)}function Dy(e){return function(n,t,r){for(var o=-1,i=Object(n),u=r(n),s=u.length;s--;){var l=u[++o];if(t(i[l],l,i)===!1)break}return n}}var ph=Dy();function zy(e,n){return e&&ph(e,n,$l)}function Fy(e,n){return function(t,r){if(t==null)return t;if(!Jr(t))return e(t,r);for(var o=t.length,i=-1,u=Object(t);++i<o&&r(u[i],i,u)!==!1;);return t}}var Py=Fy(zy);function Ns(e,n,t){(t!==void 0&&!ei(e[n],t)||t===void 0&&!(n in e))&&Dl(e,n,t)}function $y(e){return Yt(e)&&Jr(e)}function js(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function Iy(e){return i2(e,Y0(e))}function Ry(e,n,t,r,o,i,u){var s=js(e,t),l=js(n,t),a=u.get(l);if(a){Ns(e,t,a);return}var c=i?i(s,l,t+"",e,n,u):void 0,d=c===void 0;if(d){var f=jn(l),h=!f&&Ui(l),p=!f&&!h&&Pl(l);c=l,f||h||p?jn(s)?c=s:$y(s)?c=qv(s):h?(d=!1,c=_3(l)):p?(d=!1,c=O3(l)):c=[]:jx(l)||Hi(l)?(c=s,Hi(s)?c=Iy(s):(!Qt(s)||Al(s))&&(c=M3(l))):d=!1}d&&(u.set(l,c),o(c,l,r,i,u),u.delete(l)),Ns(e,t,c)}function gh(e,n,t,r,o){e!==n&&ph(n,function(i,u){if(o||(o=new ut),Qt(i))Ry(e,n,u,t,gh,r,o);else{var s=r?r(js(e,u),i,u+"",e,n,o):void 0;s===void 0&&(s=i),Ns(e,u,s)}},Y0)}function Oy(e,n){var t=-1,r=Jr(e)?Array(e.length):[];return Py(e,function(o,i,u){r[++t]=n(o,i,u)}),r}function My(e,n){var t=jn(e)?K0:Oy;return t(e,Ty(n))}var co=c2(function(e,n,t){gh(e,n,t)});const No="naive-ui-style";function Ml(e,n,t){if(!n)return;const r=Yr(),o=I(()=>{const{value:s}=n;if(!s)return;const l=s[e];if(l)return l}),i=be(kt,null),u=()=>{_t(()=>{const{value:s}=t,l=`${s}${e}Rtl`;if(Ub(l,r))return;const{value:a}=o;a&&a.style.mount({id:l,head:!0,anchorMetaName:No,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:i?.styleMountTarget})})};return r?u():Xo(u),o}const ni={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:By,fontFamily:Ly,lineHeight:Ny}=ni,bh=L("body",`
 margin: 0;
 font-size: ${By};
 font-family: ${Ly};
 line-height: ${Ny};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[L("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function mh(e,n,t){if(!n)return;const r=Yr(),o=be(kt,null),i=()=>{const u=t.value;n.mount({id:u===void 0?e:u+e,head:!0,anchorMetaName:No,props:{bPrefix:u?`.${u}-`:void 0},ssr:r,parent:o?.styleMountTarget}),o?.preflightStyleDisabled||bh.mount({id:"n-global",head:!0,anchorMetaName:No,ssr:r,parent:o?.styleMountTarget})};r?i():Xo(i)}function R7(e){return e}function Fe(e,n,t,r,o,i){const u=Yr(),s=be(kt,null);if(t){const a=()=>{const c=i?.value;t.mount({id:c===void 0?n:c+n,head:!0,props:{bPrefix:c?`.${c}-`:void 0},anchorMetaName:No,ssr:u,parent:s?.styleMountTarget}),s?.preflightStyleDisabled||bh.mount({id:"n-global",head:!0,anchorMetaName:No,ssr:u,parent:s?.styleMountTarget})};u?a():Xo(a)}return I(()=>{var a;const{theme:{common:c,self:d,peers:f={}}={},themeOverrides:h={},builtinThemeOverrides:p={}}=o,{common:g,peers:m}=h,{common:b=void 0,[e]:{common:v=void 0,self:w=void 0,peers:y={}}={}}=s?.mergedThemeRef.value||{},{common:k=void 0,[e]:T={}}=s?.mergedThemeOverridesRef.value||{},{common:_,peers:E={}}=T,S=co({},c||v||b||r.common,k,_,g),z=co((a=d||w||r.self)===null||a===void 0?void 0:a(S),p,T,h);return{common:S,self:z,peers:co({},r.peers,y,f),peerOverrides:co({},p.peers,E,m)}})}Fe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const jy=K("base-icon",`
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
 `)]),Bl=ae({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){mh("-base-icon",jy,He(e,"clsPrefix"))},render(){return A("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function Hy(e,n){const t=ae({render(){return n()}});return ae({name:p3(e),setup(){var r;const o=(r=be(kt,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var i;const u=(i=o?.value)===null||i===void 0?void 0:i[e];return u?u():A(t,null)}}})}const Uy=ae({name:"ChevronDownFilled",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),vh=ae({name:"ChevronRight",render(){return A("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ky=Hy("close",()=>A("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},A("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},A("g",{fill:"currentColor","fill-rule":"nonzero"},A("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Wy=K("base-close",`
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
`,[Z("absolute",`
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
 `)]),Z("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Z("round",[L("&::before",`
 border-radius: 50%;
 `)])]),xh=ae({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return mh("-base-close",Wy,He(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:r,round:o,isButtonTag:i}=e;return A(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,r&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,o&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},A(Bl,{clsPrefix:n},{default:()=>A(Ky,null)}))}}}),qy=ae({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function r(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function o(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function u(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:a,mode:c}=e,d=s?pb:xr,f={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:a,onEnter:i,onAfterEnter:u,onBeforeLeave:t,onLeave:r,onAfterLeave:o};return s||(f.mode=c),A(d,f,n)}}}),{cubicBezierEaseInOut:Mc}=ni;function Vy({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=Mc,leaveCubicBezier:o=Mc}={}){return[L(`&.${e}-transition-enter-active`,{transition:`all ${n} ${r}!important`}),L(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),L(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),L(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const he={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},Gy=yr(he.neutralBase),yh=yr(he.neutralInvertBase),Zy=`rgba(${yh.slice(0,3).join(", ")}, `;function Bc(e){return`${Zy+String(e)})`}function fn(e){const n=Array.from(yh);return n[3]=Number(e),hr(Gy,n)}const Dn=Object.assign(Object.assign({name:"common"},ni),{baseColor:he.neutralBase,primaryColor:he.primaryDefault,primaryColorHover:he.primaryHover,primaryColorPressed:he.primaryActive,primaryColorSuppl:he.primarySuppl,infoColor:he.infoDefault,infoColorHover:he.infoHover,infoColorPressed:he.infoActive,infoColorSuppl:he.infoSuppl,successColor:he.successDefault,successColorHover:he.successHover,successColorPressed:he.successActive,successColorSuppl:he.successSuppl,warningColor:he.warningDefault,warningColorHover:he.warningHover,warningColorPressed:he.warningActive,warningColorSuppl:he.warningSuppl,errorColor:he.errorDefault,errorColorHover:he.errorHover,errorColorPressed:he.errorActive,errorColorSuppl:he.errorSuppl,textColorBase:he.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:fn(he.alpha4),placeholderColor:fn(he.alpha4),placeholderColorDisabled:fn(he.alpha5),iconColor:fn(he.alpha4),iconColorHover:hi(fn(he.alpha4),{lightness:.75}),iconColorPressed:hi(fn(he.alpha4),{lightness:.9}),iconColorDisabled:fn(he.alpha5),opacity1:he.alpha1,opacity2:he.alpha2,opacity3:he.alpha3,opacity4:he.alpha4,opacity5:he.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:fn(Number(he.alphaClose)),closeIconColorHover:fn(Number(he.alphaClose)),closeIconColorPressed:fn(Number(he.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:fn(he.alpha4),clearColorHover:hi(fn(he.alpha4),{lightness:.75}),clearColorPressed:hi(fn(he.alpha4),{lightness:.9}),scrollbarColor:Bc(he.alphaScrollbar),scrollbarColorHover:Bc(he.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:fn(he.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:he.neutralPopover,tableColor:he.neutralCard,cardColor:he.neutralCard,modalColor:he.neutralModal,bodyColor:he.neutralBody,tagColor:"#eee",avatarColor:fn(he.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:fn(he.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:he.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),Xy={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function Yy(e){const{scrollbarColor:n,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:o,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},Xy),{height:r,width:o,borderRadius:i,color:n,colorHover:t})}const Ch={name:"Scrollbar",common:Dn,self:Yy},Jy=K("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[L(">",[K("scrollbar-container",`
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
 `),L(">",[K("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),L(">, +",[K("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[Z("horizontal",`
 height: var(--n-scrollbar-height);
 `,[L(">",[U("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Z("horizontal--top",`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),Z("horizontal--bottom",`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),Z("vertical",`
 width: var(--n-scrollbar-width);
 `,[L(">",[U("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Z("vertical--left",`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),Z("vertical--right",`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),Z("disabled",[L(">",[U("scrollbar","pointer-events: none;")])]),L(">",[U("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Vy(),L("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),Qy=Object.assign(Object.assign({},Fe.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),gu=ae({name:"Scrollbar",props:Qy,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:r}=Cn(e),o=Ml("Scrollbar",r,n),i=te(null),u=te(null),s=te(null),l=te(null),a=te(null),c=te(null),d=te(null),f=te(null),h=te(null),p=te(null),g=te(null),m=te(0),b=te(0),v=te(!1),w=te(!1);let y=!1,k=!1,T,_,E=0,S=0,z=0,j=0;const P=ym(),q=Fe("Scrollbar","-scrollbar",Jy,Ch,e,n),G=I(()=>{const{value:W}=f,{value:le}=c,{value:ve}=p;return W===null||le===null||ve===null?0:Math.min(W,ve*W/le+Ua(q.value.self.width)*1.5)}),R=I(()=>`${G.value}px`),X=I(()=>{const{value:W}=h,{value:le}=d,{value:ve}=g;return W===null||le===null||ve===null?0:ve*W/le+Ua(q.value.self.height)*1.5}),H=I(()=>`${X.value}px`),Q=I(()=>{const{value:W}=f,{value:le}=m,{value:ve}=c,{value:Be}=p;if(W===null||ve===null||Be===null)return 0;{const Xe=ve-W;return Xe?le/Xe*(Be-G.value):0}}),xe=I(()=>`${Q.value}px`),ye=I(()=>{const{value:W}=h,{value:le}=b,{value:ve}=d,{value:Be}=g;if(W===null||ve===null||Be===null)return 0;{const Xe=ve-W;return Xe?le/Xe*(Be-X.value):0}}),ee=I(()=>`${ye.value}px`),ie=I(()=>{const{value:W}=f,{value:le}=c;return W!==null&&le!==null&&le>W}),B=I(()=>{const{value:W}=h,{value:le}=d;return W!==null&&le!==null&&le>W}),pe=I(()=>{const{trigger:W}=e;return W==="none"||v.value}),we=I(()=>{const{trigger:W}=e;return W==="none"||w.value}),$e=I(()=>{const{container:W}=e;return W?W():u.value}),$=I(()=>{const{content:W}=e;return W?W():s.value}),oe=(W,le)=>{if(!e.scrollable)return;if(typeof W=="number"){C(W,le??0,0,!1,"auto");return}const{left:ve,top:Be,index:Xe,elSize:Sn,position:Kn,behavior:Ke,el:On,debounce:zt=!0}=W;(ve!==void 0||Be!==void 0)&&C(ve??0,Be??0,0,!1,Ke),On!==void 0?C(0,On.offsetTop,On.offsetHeight,zt,Ke):Xe!==void 0&&Sn!==void 0?C(0,Xe*Sn,Sn,zt,Ke):Kn==="bottom"?C(0,Number.MAX_SAFE_INTEGER,0,!1,Ke):Kn==="top"&&C(0,0,0,!1,Ke)},F=_l(()=>{e.container||oe({top:m.value,left:b.value})}),se=()=>{F.isDeactivated||fe()},ke=W=>{if(F.isDeactivated)return;const{onResize:le}=e;le&&le(W),fe()},x=(W,le)=>{if(!e.scrollable)return;const{value:ve}=$e;ve&&(typeof W=="object"?ve.scrollBy(W):ve.scrollBy(W,le||0))};function C(W,le,ve,Be,Xe){const{value:Sn}=$e;if(Sn){if(Be){const{scrollTop:Kn,offsetHeight:Ke}=Sn;if(le>Kn){le+ve<=Kn+Ke||Sn.scrollTo({left:W,top:le+ve-Ke,behavior:Xe});return}}Sn.scrollTo({left:W,top:le,behavior:Xe})}}function D(){J(),Y(),fe()}function O(){N()}function N(){M(),ne()}function M(){_!==void 0&&window.clearTimeout(_),_=window.setTimeout(()=>{w.value=!1},e.duration)}function ne(){T!==void 0&&window.clearTimeout(T),T=window.setTimeout(()=>{v.value=!1},e.duration)}function J(){T!==void 0&&window.clearTimeout(T),v.value=!0}function Y(){_!==void 0&&window.clearTimeout(_),w.value=!0}function V(W){const{onScroll:le}=e;le&&le(W),de()}function de(){const{value:W}=$e;W&&(m.value=W.scrollTop,b.value=W.scrollLeft*(o?.value?-1:1))}function re(){const{value:W}=$;W&&(c.value=W.offsetHeight,d.value=W.offsetWidth);const{value:le}=$e;le&&(f.value=le.offsetHeight,h.value=le.offsetWidth);const{value:ve}=a,{value:Be}=l;ve&&(g.value=ve.offsetWidth),Be&&(p.value=Be.offsetHeight)}function ce(){const{value:W}=$e;W&&(m.value=W.scrollTop,b.value=W.scrollLeft*(o?.value?-1:1),f.value=W.offsetHeight,h.value=W.offsetWidth,c.value=W.scrollHeight,d.value=W.scrollWidth);const{value:le}=a,{value:ve}=l;le&&(g.value=le.offsetWidth),ve&&(p.value=ve.offsetHeight)}function fe(){e.scrollable&&(e.useUnifiedContainer?ce():(re(),de()))}function _e(W){var le;return!(!((le=i.value)===null||le===void 0)&&le.contains(Bi(W)))}function Pe(W){W.preventDefault(),W.stopPropagation(),k=!0,en("mousemove",window,Ee,!0),en("mouseup",window,ln,!0),S=b.value,z=o?.value?window.innerWidth-W.clientX:W.clientX}function Ee(W){if(!k)return;T!==void 0&&window.clearTimeout(T),_!==void 0&&window.clearTimeout(_);const{value:le}=h,{value:ve}=d,{value:Be}=X;if(le===null||ve===null)return;const Sn=(o?.value?window.innerWidth-W.clientX-z:W.clientX-z)*(ve-le)/(le-Be),Kn=ve-le;let Ke=S+Sn;Ke=Math.min(Kn,Ke),Ke=Math.max(Ke,0);const{value:On}=$e;if(On){On.scrollLeft=Ke*(o?.value?-1:1);const{internalOnUpdateScrollLeft:zt}=e;zt&&zt(Ke)}}function ln(W){W.preventDefault(),W.stopPropagation(),qe("mousemove",window,Ee,!0),qe("mouseup",window,ln,!0),k=!1,fe(),_e(W)&&N()}function dn(W){W.preventDefault(),W.stopPropagation(),y=!0,en("mousemove",window,_n,!0),en("mouseup",window,wn,!0),E=m.value,j=W.clientY}function _n(W){if(!y)return;T!==void 0&&window.clearTimeout(T),_!==void 0&&window.clearTimeout(_);const{value:le}=f,{value:ve}=c,{value:Be}=G;if(le===null||ve===null)return;const Sn=(W.clientY-j)*(ve-le)/(le-Be),Kn=ve-le;let Ke=E+Sn;Ke=Math.min(Kn,Ke),Ke=Math.max(Ke,0);const{value:On}=$e;On&&(On.scrollTop=Ke)}function wn(W){W.preventDefault(),W.stopPropagation(),qe("mousemove",window,_n,!0),qe("mouseup",window,wn,!0),y=!1,fe(),_e(W)&&N()}_t(()=>{const{value:W}=B,{value:le}=ie,{value:ve}=n,{value:Be}=a,{value:Xe}=l;Be&&(W?Be.classList.remove(`${ve}-scrollbar-rail--disabled`):Be.classList.add(`${ve}-scrollbar-rail--disabled`)),Xe&&(le?Xe.classList.remove(`${ve}-scrollbar-rail--disabled`):Xe.classList.add(`${ve}-scrollbar-rail--disabled`))}),Rn(()=>{e.container||fe()}),Hn(()=>{T!==void 0&&window.clearTimeout(T),_!==void 0&&window.clearTimeout(_),qe("mousemove",window,_n,!0),qe("mouseup",window,wn,!0)});const Dt=I(()=>{const{common:{cubicBezierEaseInOut:W},self:{color:le,colorHover:ve,height:Be,width:Xe,borderRadius:Sn,railInsetHorizontalTop:Kn,railInsetHorizontalBottom:Ke,railInsetVerticalRight:On,railInsetVerticalLeft:zt,railColor:Ip}}=q.value,{top:Rp,right:Op,bottom:Mp,left:Bp}=lr(Kn),{top:Lp,right:Np,bottom:jp,left:Hp}=lr(Ke),{top:Up,right:Kp,bottom:Wp,left:qp}=lr(o?.value?cc(On):On),{top:Vp,right:Gp,bottom:Zp,left:Xp}=lr(o?.value?cc(zt):zt);return{"--n-scrollbar-bezier":W,"--n-scrollbar-color":le,"--n-scrollbar-color-hover":ve,"--n-scrollbar-border-radius":Sn,"--n-scrollbar-width":Xe,"--n-scrollbar-height":Be,"--n-scrollbar-rail-top-horizontal-top":Rp,"--n-scrollbar-rail-right-horizontal-top":Op,"--n-scrollbar-rail-bottom-horizontal-top":Mp,"--n-scrollbar-rail-left-horizontal-top":Bp,"--n-scrollbar-rail-top-horizontal-bottom":Lp,"--n-scrollbar-rail-right-horizontal-bottom":Np,"--n-scrollbar-rail-bottom-horizontal-bottom":jp,"--n-scrollbar-rail-left-horizontal-bottom":Hp,"--n-scrollbar-rail-top-vertical-right":Up,"--n-scrollbar-rail-right-vertical-right":Kp,"--n-scrollbar-rail-bottom-vertical-right":Wp,"--n-scrollbar-rail-left-vertical-right":qp,"--n-scrollbar-rail-top-vertical-left":Vp,"--n-scrollbar-rail-right-vertical-left":Gp,"--n-scrollbar-rail-bottom-vertical-left":Zp,"--n-scrollbar-rail-left-vertical-left":Xp,"--n-scrollbar-rail-color":Ip}}),ft=t?Un("scrollbar",void 0,Dt,e):void 0;return Object.assign(Object.assign({},{scrollTo:oe,scrollBy:x,sync:fe,syncUnifiedContainer:ce,handleMouseEnterWrapper:D,handleMouseLeaveWrapper:O}),{mergedClsPrefix:n,rtlEnabled:o,containerScrollTop:m,wrapperRef:i,containerRef:u,contentRef:s,yRailRef:l,xRailRef:a,needYBar:ie,needXBar:B,yBarSizePx:R,xBarSizePx:H,yBarTopPx:xe,xBarLeftPx:ee,isShowXBar:pe,isShowYBar:we,isIos:P,handleScroll:V,handleContentResize:se,handleContainerResize:ke,handleYScrollMouseDown:dn,handleXScrollMouseDown:Pe,cssVars:t?void 0:Dt,themeClass:ft?.themeClass,onRender:ft?.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:i,yPlacement:u,xPlacement:s,xScrollable:l}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",c=(h,p)=>A("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${u}`,h],"data-scrollbar-rail":!0,style:[p||"",this.verticalRailStyle],"aria-hidden":!0},A(a?fc:xr,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),d=()=>{var h,p;return(h=this.onRender)===null||h===void 0||h.call(this),A("div",wr(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=n.default)===null||p===void 0?void 0:p.call(n):A("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},A(Ni,{onResize:this.handleContentResize},{default:()=>A("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:c(void 0,void 0),l&&A("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${s}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},A(a?fc:xr,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?A("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?d():A(Ni,{onResize:this.handleContainerResize},{default:d});return i?A(Ne,null,f,c(this.themeClass,this.cssVars)):f}}),_h=gu;function Lc(e){return Array.isArray(e)?e:[e]}const Hs={STOP:"STOP"};function wh(e,n){const t=n(e);e.children!==void 0&&t!==Hs.STOP&&e.children.forEach(r=>wh(r,n))}function e6(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?u=>{u.isLeaf||(r.push(u.key),i(u.children))}:u=>{u.isLeaf||(u.isGroup||r.push(u.key),i(u.children))};function i(u){u.forEach(o)}return i(e),r}function n6(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function t6(e){return e.children}function r6(e){return e.key}function o6(){return!1}function i6(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function u6(e){return e.disabled===!0}function s6(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function Zu(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function Xu(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function l6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function a6(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function c6(e){return e?.type==="group"}function O7(e){const n=new Map;return e.forEach((t,r)=>{n.set(t.key,r)}),t=>{var r;return(r=n.get(t))!==null&&r!==void 0?r:null}}class d6 extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function f6(e,n,t,r){return qi(n.concat(e),t,r,!1)}function h6(e,n){const t=new Set;return e.forEach(r=>{const o=n.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function p6(e,n,t,r){const o=qi(n,t,r,!1),i=qi(e,t,r,!0),u=h6(e,t),s=[];return o.forEach(l=>{(i.has(l)||u.has(l))&&s.push(l)}),s.forEach(l=>o.delete(l)),o}function Yu(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:u,leafOnly:s,checkStrategy:l,allowNotLoaded:a}=e;if(!u)return r!==void 0?{checkedKeys:l6(t,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:a6(t,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=n;let d;o!==void 0?d=p6(o,t,n,a):r!==void 0?d=f6(r,t,n,a):d=qi(t,n,a,!1);const f=l==="parent",h=l==="child"||s,p=d,g=new Set,m=Math.max.apply(null,Array.from(c.keys()));for(let b=m;b>=0;b-=1){const v=b===0,w=c.get(b);for(const y of w){if(y.isLeaf)continue;const{key:k,shallowLoaded:T}=y;if(h&&T&&y.children.forEach(z=>{!z.disabled&&!z.isLeaf&&z.shallowLoaded&&p.has(z.key)&&p.delete(z.key)}),y.disabled||!T)continue;let _=!0,E=!1,S=!0;for(const z of y.children){const j=z.key;if(!z.disabled){if(S&&(S=!1),p.has(j))E=!0;else if(g.has(j)){E=!0,_=!1;break}else if(_=!1,E)break}}_&&!S?(f&&y.children.forEach(z=>{!z.disabled&&p.has(z.key)&&p.delete(z.key)}),p.add(k)):E&&g.add(k),v&&h&&p.has(k)&&p.delete(k)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(g)}}function qi(e,n,t,r){const{treeNodeMap:o,getChildren:i}=n,u=new Set,s=new Set(e);return e.forEach(l=>{const a=o.get(l);a!==void 0&&wh(a,c=>{if(c.disabled)return Hs.STOP;const{key:d}=c;if(!u.has(d)&&(u.add(d),s.add(d),s6(c.rawNode,i))){if(r)return Hs.STOP;if(!t)throw new d6}})}),s}function g6(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const i=r.treeNodeMap;let u=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const s={keyPath:[],treeNodePath:[],treeNode:u};if(u?.ignored)return s.treeNode=null,s;for(;u;)!u.ignored&&(n||!u.isGroup)&&s.treeNodePath.push(u),u=u.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function b6(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function m6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function Nc(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o=n==="prev"?v6:m6,i={reverse:n==="prev"};let u=!1,s=null;function l(a){if(a!==null){if(a===e){if(!u)u=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!a.disabled||r)&&!a.ignored&&!a.isGroup){s=a;return}if(a.isGroup){const c=Ll(a,i);c!==null?s=c:l(o(a,t))}else{const c=o(a,!1);if(c!==null)l(c);else{const d=x6(a);d?.isGroup?l(o(d,t)):t&&l(o(a,!0))}}}}return l(e),s}function v6(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:o===0?null:t[o-1]}function x6(e){return e.parent}function Ll(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:o}=r,i=t?o-1:0,u=t?-1:o,s=t?-1:1;for(let l=i;l!==u;l+=s){const a=r[l];if(!a.disabled&&!a.ignored)if(a.isGroup){const c=Ll(a,n);if(c!==null)return c}else return a}}return null}const y6={getChild(){return this.ignored?null:Ll(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return Nc(this,"next",e)},getPrev(e={}){return Nc(this,"prev",e)}};function C6(e,n){const t=n?new Set(n):void 0,r=[];function o(i){i.forEach(u=>{r.push(u),!(u.isLeaf||!u.children||u.ignored)&&(u.isGroup||t===void 0||t.has(u.key))&&o(u.children)})}return o(e),r}function _6(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function kh(e,n,t,r,o,i=null,u=0){const s=[];return e.forEach((l,a)=>{var c;const d=Object.create(r);if(d.rawNode=l,d.siblings=s,d.level=u,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===e.length,d.parent=i,!d.ignored){const f=o(l);Array.isArray(f)&&(d.children=kh(f,n,t,r,o,d,u+1))}s.push(d),n.set(d.key,d),t.has(u)||t.set(u,[]),(c=t.get(u))===null||c===void 0||c.push(d)}),s}function Ai(e,n={}){var t;const r=new Map,o=new Map,{getDisabled:i=u6,getIgnored:u=o6,getIsGroup:s=c6,getKey:l=r6}=n,a=(t=n.getChildren)!==null&&t!==void 0?t:t6,c=n.ignoreEmptyChildren?y=>{const k=a(y);return Array.isArray(k)?k.length?k:null:k}:a,d=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return n6(this.rawNode,c)},get shallowLoaded(){return i6(this.rawNode,c)},get ignored(){return u(this.rawNode)},contains(y){return _6(this,y)}},y6),f=kh(e,r,o,d,c);function h(y){if(y==null)return null;const k=r.get(y);return k&&!k.isGroup&&!k.ignored?k:null}function p(y){if(y==null)return null;const k=r.get(y);return k&&!k.ignored?k:null}function g(y,k){const T=p(y);return T?T.getPrev(k):null}function m(y,k){const T=p(y);return T?T.getNext(k):null}function b(y){const k=p(y);return k?k.getParent():null}function v(y){const k=p(y);return k?k.getChild():null}const w={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(y){return C6(f,y)},getNode:h,getPrev:g,getNext:m,getParent:b,getChild:v,getFirstAvailableNode(){return b6(f)},getPath(y,k={}){return g6(y,k,w)},getCheckedKeys(y,k={}){const{cascade:T=!0,leafOnly:_=!1,checkStrategy:E="all",allowNotLoaded:S=!1}=k;return Yu({checkedKeys:Zu(y),indeterminateKeys:Xu(y),cascade:T,leafOnly:_,checkStrategy:E,allowNotLoaded:S},w)},check(y,k,T={}){const{cascade:_=!0,leafOnly:E=!1,checkStrategy:S="all",allowNotLoaded:z=!1}=T;return Yu({checkedKeys:Zu(k),indeterminateKeys:Xu(k),keysToCheck:y==null?[]:Lc(y),cascade:_,leafOnly:E,checkStrategy:S,allowNotLoaded:z},w)},uncheck(y,k,T={}){const{cascade:_=!0,leafOnly:E=!1,checkStrategy:S="all",allowNotLoaded:z=!1}=T;return Yu({checkedKeys:Zu(k),indeterminateKeys:Xu(k),keysToUncheck:y==null?[]:Lc(y),cascade:_,leafOnly:E,checkStrategy:S,allowNotLoaded:z},w)},getNonLeafKeys(y={}){return e6(f,y)}};return w}const{cubicBezierEaseIn:jc,cubicBezierEaseOut:Hc}=ni;function w6({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:r="",originalTransition:o=""}={}){return[L("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${jc}, transform ${n} ${jc} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Hc}, transform ${n} ${Hc} ${o&&`,${o}`}`}),L("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${t})`}),L("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const k6={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function S6(e){const{boxShadow2:n,popoverColor:t,textColor2:r,borderRadius:o,fontSize:i,dividerColor:u}=e;return Object.assign(Object.assign({},k6),{fontSize:i,borderRadius:o,color:t,dividerColor:u,textColor:r,boxShadow:n})}const Nl={name:"Popover",common:Dn,self:S6},Ju={top:"bottom",bottom:"top",left:"right",right:"left"},Ye="var(--n-arrow-height) * 1.414",E6=L([K("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[L(">",[K("scrollbar",`
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
 `),Z("scrollable, show-header-or-footer",[U("content",`
 padding: var(--n-padding);
 `)])]),K("popover-shared",`
 transform-origin: inherit;
 `,[K("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[K("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ye});
 height: calc(${Ye});
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
 `)]),Bn("top-start",`
 top: calc(${Ye} / -2);
 left: calc(${gt("top-start")} - var(--v-offset-left));
 `),Bn("top",`
 top: calc(${Ye} / -2);
 transform: translateX(calc(${Ye} / -2)) rotate(45deg);
 left: 50%;
 `),Bn("top-end",`
 top: calc(${Ye} / -2);
 right: calc(${gt("top-end")} + var(--v-offset-left));
 `),Bn("bottom-start",`
 bottom: calc(${Ye} / -2);
 left: calc(${gt("bottom-start")} - var(--v-offset-left));
 `),Bn("bottom",`
 bottom: calc(${Ye} / -2);
 transform: translateX(calc(${Ye} / -2)) rotate(45deg);
 left: 50%;
 `),Bn("bottom-end",`
 bottom: calc(${Ye} / -2);
 right: calc(${gt("bottom-end")} + var(--v-offset-left));
 `),Bn("left-start",`
 left: calc(${Ye} / -2);
 top: calc(${gt("left-start")} - var(--v-offset-top));
 `),Bn("left",`
 left: calc(${Ye} / -2);
 transform: translateY(calc(${Ye} / -2)) rotate(45deg);
 top: 50%;
 `),Bn("left-end",`
 left: calc(${Ye} / -2);
 bottom: calc(${gt("left-end")} + var(--v-offset-top));
 `),Bn("right-start",`
 right: calc(${Ye} / -2);
 top: calc(${gt("right-start")} - var(--v-offset-top));
 `),Bn("right",`
 right: calc(${Ye} / -2);
 transform: translateY(calc(${Ye} / -2)) rotate(45deg);
 top: 50%;
 `),Bn("right-end",`
 right: calc(${Ye} / -2);
 bottom: calc(${gt("right-end")} + var(--v-offset-top));
 `),...My({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${Ye}) / 2)`,l=gt(o);return L(`[v-placement="${o}"] >`,[K("popover-shared",[Z("center-arrow",[K("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function gt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Bn(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[K("popover-shared",`
 margin-${Ju[t]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${Ju[t]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),Gb("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${Ju[t]}: auto;
 ${r}
 `,[K("popover-arrow",n)])])])}const Sh=Object.assign(Object.assign({},Fe.props),{to:Wr.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Eh({arrowClass:e,arrowStyle:n,arrowWrapperClass:t,arrowWrapperStyle:r,clsPrefix:o}){return A("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,t]},A("div",{class:[`${o}-popover-arrow`,e],style:n}))}const A6=ae({name:"PopoverBody",inheritAttrs:!1,props:Sh,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=Cn(e),u=Fe("Popover","-popover",E6,Nl,e,o),s=te(null),l=be("NPopover"),a=te(null),c=te(e.show),d=te(!1);_t(()=>{const{show:_}=e;_&&!gv()&&!e.internalDeactivateImmediately&&(d.value=!0)});const f=I(()=>{const{trigger:_,onClickoutside:E}=e,S=[],{positionManuallyRef:{value:z}}=l;return z||(_==="click"&&!E&&S.push([Va,y,void 0,{capture:!0}]),_==="hover"&&S.push([Am,w])),E&&S.push([Va,y,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&d.value)&&S.push([Yg,e.show]),S}),h=I(()=>{const{common:{cubicBezierEaseInOut:_,cubicBezierEaseIn:E,cubicBezierEaseOut:S},self:{space:z,spaceArrow:j,padding:P,fontSize:q,textColor:G,dividerColor:R,color:X,boxShadow:H,borderRadius:Q,arrowHeight:xe,arrowOffset:ye,arrowOffsetVertical:ee}}=u.value;return{"--n-box-shadow":H,"--n-bezier":_,"--n-bezier-ease-in":E,"--n-bezier-ease-out":S,"--n-font-size":q,"--n-text-color":G,"--n-color":X,"--n-divider-color":R,"--n-border-radius":Q,"--n-arrow-height":xe,"--n-arrow-offset":ye,"--n-arrow-offset-vertical":ee,"--n-padding":P,"--n-space":z,"--n-space-arrow":j}}),p=I(()=>{const _=e.width==="trigger"?void 0:Vt(e.width),E=[];_&&E.push({width:_});const{maxWidth:S,minWidth:z}=e;return S&&E.push({maxWidth:Vt(S)}),z&&E.push({maxWidth:Vt(z)}),i||E.push(h.value),E}),g=i?Un("popover",void 0,h,e):void 0;l.setBodyInstance({syncPosition:m}),Hn(()=>{l.setBodyInstance(null)}),sn(He(e,"show"),_=>{e.animated||(_?c.value=!0:c.value=!1)});function m(){var _;(_=s.value)===null||_===void 0||_.syncPosition()}function b(_){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(_)}function v(_){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(_)}function w(_){e.trigger==="hover"&&!k().contains(Bi(_))&&l.handleMouseMoveOutside(_)}function y(_){(e.trigger==="click"&&!k().contains(Bi(_))||e.onClickoutside)&&l.handleClickOutside(_)}function k(){return l.getTriggerElement()}je(du,a),je(yl,null),je(Cl,null);function T(){if(g?.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&d.value))return null;let E;const S=l.internalRenderBodyRef.value,{value:z}=o;if(S)E=S([`${z}-popover-shared`,g?.themeClass.value,e.overlap&&`${z}-popover-shared--overlap`,e.showArrow&&`${z}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${z}-popover-shared--center-arrow`],a,p.value,b,v);else{const{value:j}=l.extraClassRef,{internalTrapFocus:P}=e,q=!dc(n.header)||!dc(n.footer),G=()=>{var R,X;const H=q?A(Ne,null,An(n.header,ye=>ye?A("div",{class:[`${z}-popover__header`,e.headerClass],style:e.headerStyle},ye):null),An(n.default,ye=>ye?A("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},n):null),An(n.footer,ye=>ye?A("div",{class:[`${z}-popover__footer`,e.footerClass],style:e.footerStyle},ye):null)):e.scrollable?(R=n.default)===null||R===void 0?void 0:R.call(n):A("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},n),Q=e.scrollable?A(_h,{contentClass:q?void 0:`${z}-popover__content ${(X=e.contentClass)!==null&&X!==void 0?X:""}`,contentStyle:q?void 0:e.contentStyle},{default:()=>H}):H,xe=e.showArrow?Eh({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:z}):null;return[Q,xe]};E=A("div",wr({class:[`${z}-popover`,`${z}-popover-shared`,g?.themeClass.value,j.map(R=>`${z}-${R}`),{[`${z}-popover--scrollable`]:e.scrollable,[`${z}-popover--show-header-or-footer`]:q,[`${z}-popover--raw`]:e.raw,[`${z}-popover-shared--overlap`]:e.overlap,[`${z}-popover-shared--show-arrow`]:e.showArrow,[`${z}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:a,style:p.value,onKeydown:l.handleKeydown,onMouseenter:b,onMouseleave:v},t),P?A(hv,{active:e.show,autoFocus:!0},{default:G}):G())}return ou(E,f.value)}return{displayed:d,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:Wr(e),followerEnabled:c,renderContentNode:T}},render(){return A(z0,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Wr.tdkey},{default:()=>this.animated?A(xr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),T6=Object.keys(Sh),D6={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function z6(e,n,t){D6[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=t[r];o?e.props[r]=(...u)=>{o(...u),i(...u)}:e.props[r]=i})}const bu={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Wr.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},F6=Object.assign(Object.assign(Object.assign({},Fe.props),bu),{internalOnAfterLeave:Function,internalRenderBody:Function}),Ah=ae({name:"Popover",inheritAttrs:!1,props:F6,slots:Object,__popover__:!0,setup(e){const n=y0(),t=te(null),r=I(()=>e.show),o=te(e.defaultShow),i=Ro(r,o),u=Tn(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:R}=e;return!!R?.()},l=()=>s()?!1:i.value,a=C0(e,["arrow","showArrow"]),c=I(()=>e.overlap?!1:a.value);let d=null;const f=te(null),h=te(null),p=Tn(()=>e.x!==void 0&&e.y!==void 0);function g(R){const{"onUpdate:show":X,onUpdateShow:H,onShow:Q,onHide:xe}=e;o.value=R,X&&Ze(X,R),H&&Ze(H,R),R&&Q&&Ze(Q,!0),R&&xe&&Ze(xe,!1)}function m(){d&&d.syncPosition()}function b(){const{value:R}=f;R&&(window.clearTimeout(R),f.value=null)}function v(){const{value:R}=h;R&&(window.clearTimeout(R),h.value=null)}function w(){const R=s();if(e.trigger==="focus"&&!R){if(l())return;g(!0)}}function y(){const R=s();if(e.trigger==="focus"&&!R){if(!l())return;g(!1)}}function k(){const R=s();if(e.trigger==="hover"&&!R){if(v(),f.value!==null||l())return;const X=()=>{g(!0),f.value=null},{delay:H}=e;H===0?X():f.value=window.setTimeout(X,H)}}function T(){const R=s();if(e.trigger==="hover"&&!R){if(b(),h.value!==null||!l())return;const X=()=>{g(!1),h.value=null},{duration:H}=e;H===0?X():h.value=window.setTimeout(X,H)}}function _(){T()}function E(R){var X;l()&&(e.trigger==="click"&&(b(),v(),g(!1)),(X=e.onClickoutside)===null||X===void 0||X.call(e,R))}function S(){if(e.trigger==="click"&&!s()){b(),v();const R=!l();g(R)}}function z(R){e.internalTrapFocus&&R.key==="Escape"&&(b(),v(),g(!1))}function j(R){o.value=R}function P(){var R;return(R=t.value)===null||R===void 0?void 0:R.targetRef}function q(R){d=R}return je("NPopover",{getTriggerElement:P,handleKeydown:z,handleMouseEnter:k,handleMouseLeave:T,handleClickOutside:E,handleMouseMoveOutside:_,setBodyInstance:q,positionManuallyRef:p,isMountedRef:n,zIndexRef:He(e,"zIndex"),extraClassRef:He(e,"internalExtraClass"),internalRenderBodyRef:He(e,"internalRenderBody")}),_t(()=>{i.value&&s()&&g(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:u,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:l,setShow:j,handleClick:S,handleMouseEnter:k,handleMouseLeave:T,handleFocus:w,handleBlur:y,syncPosition:m}},render(){var e;const{positionManually:n,$slots:t}=this;let r,o=!1;if(!n&&(r=mv(t,"trigger"),r)){r=wt(r),r=r.type===Yo?A("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:u}=this,s=[i,...u],l={onBlur:a=>{s.forEach(c=>{c.onBlur(a)})},onFocus:a=>{s.forEach(c=>{c.onFocus(a)})},onClick:a=>{s.forEach(c=>{c.onClick(a)})},onMouseenter:a=>{s.forEach(c=>{c.onMouseenter(a)})},onMouseleave:a=>{s.forEach(c=>{c.onMouseleave(a)})}};z6(r,u?"nested":n?"manual":this.trigger,l)}}return A(E0,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?ou(A("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[T0,{enabled:i,zIndex:this.zIndex}]]):null,n?null:A(A0,null,{default:()=>r}),A(A6,Co(this.$props,T6,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var u,s;return(s=(u=this.$slots).default)===null||s===void 0?void 0:s.call(u)},header:()=>{var u,s;return(s=(u=this.$slots).header)===null||s===void 0?void 0:s.call(u)},footer:()=>{var u,s;return(s=(u=this.$slots).footer)===null||s===void 0?void 0:s.call(u)}})]}})}}),P6={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function $6(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:r,primaryColor:o,infoColor:i,successColor:u,warningColor:s,errorColor:l,baseColor:a,borderColor:c,opacityDisabled:d,tagColor:f,closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,borderRadiusSmall:m,fontSizeMini:b,fontSizeTiny:v,fontSizeSmall:w,fontSizeMedium:y,heightMini:k,heightTiny:T,heightSmall:_,heightMedium:E,closeColorHover:S,closeColorPressed:z,buttonColor2Hover:j,buttonColor2Pressed:P,fontWeightStrong:q}=e;return Object.assign(Object.assign({},P6),{closeBorderRadius:m,heightTiny:k,heightSmall:T,heightMedium:_,heightLarge:E,borderRadius:m,opacityDisabled:d,fontSizeTiny:b,fontSizeSmall:v,fontSizeMedium:w,fontSizeLarge:y,fontWeightStrong:q,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:a,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:P,colorChecked:o,colorCheckedHover:t,colorCheckedPressed:r,border:`1px solid ${c}`,textColor:n,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:S,closeColorPressed:z,borderPrimary:`1px solid ${De(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:De(o,{alpha:.12}),colorBorderedPrimary:De(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:De(o,{alpha:.12}),closeColorPressedPrimary:De(o,{alpha:.18}),borderInfo:`1px solid ${De(i,{alpha:.3})}`,textColorInfo:i,colorInfo:De(i,{alpha:.12}),colorBorderedInfo:De(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:De(i,{alpha:.12}),closeColorPressedInfo:De(i,{alpha:.18}),borderSuccess:`1px solid ${De(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:De(u,{alpha:.12}),colorBorderedSuccess:De(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:De(u,{alpha:.12}),closeColorPressedSuccess:De(u,{alpha:.18}),borderWarning:`1px solid ${De(s,{alpha:.35})}`,textColorWarning:s,colorWarning:De(s,{alpha:.15}),colorBorderedWarning:De(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:De(s,{alpha:.12}),closeColorPressedWarning:De(s,{alpha:.18}),borderError:`1px solid ${De(l,{alpha:.23})}`,textColorError:l,colorError:De(l,{alpha:.1}),colorBorderedError:De(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:De(l,{alpha:.12}),closeColorPressedError:De(l,{alpha:.18})})}const I6={common:Dn,self:$6},R6={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},O6=K("tag",`
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
`,[Z("strong",`
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
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[U("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),U("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[on("disabled",[L("&:hover","background-color: var(--n-color-hover-checkable);",[on("checked","color: var(--n-text-color-hover-checkable);")]),L("&:active","background-color: var(--n-color-pressed-checkable);",[on("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[on("disabled",[L("&:hover","background-color: var(--n-color-checked-hover);"),L("&:active","background-color: var(--n-color-checked-pressed);")])])])]),M6=Object.assign(Object.assign(Object.assign({},Fe.props),R6),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Th="n-tag",M7=ae({name:"Tag",props:M6,slots:Object,setup(e){const n=te(null),{mergedBorderedRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=Cn(e),u=Fe("Tag","-tag",O6,I6,e,r);je(Th,{roundRef:He(e,"round")});function s(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:p,onUpdateChecked:g,"onUpdate:checked":m}=e;g&&g(!h),m&&m(!h),p&&p(!h)}}function l(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&Ze(p,h)}}const a={setTextContent(h){const{value:p}=n;p&&(p.textContent=h)}},c=Ml("Tag",i,r),d=I(()=>{const{type:h,size:p,color:{color:g,textColor:m}={}}=e,{common:{cubicBezierEaseInOut:b},self:{padding:v,closeMargin:w,borderRadius:y,opacityDisabled:k,textColorCheckable:T,textColorHoverCheckable:_,textColorPressedCheckable:E,textColorChecked:S,colorCheckable:z,colorHoverCheckable:j,colorPressedCheckable:P,colorChecked:q,colorCheckedHover:G,colorCheckedPressed:R,closeBorderRadius:X,fontWeightStrong:H,[ze("colorBordered",h)]:Q,[ze("closeSize",p)]:xe,[ze("closeIconSize",p)]:ye,[ze("fontSize",p)]:ee,[ze("height",p)]:ie,[ze("color",h)]:B,[ze("textColor",h)]:pe,[ze("border",h)]:we,[ze("closeIconColor",h)]:$e,[ze("closeIconColorHover",h)]:$,[ze("closeIconColorPressed",h)]:oe,[ze("closeColorHover",h)]:F,[ze("closeColorPressed",h)]:se}}=u.value,ke=lr(w);return{"--n-font-weight-strong":H,"--n-avatar-size-override":`calc(${ie} - 8px)`,"--n-bezier":b,"--n-border-radius":y,"--n-border":we,"--n-close-icon-size":ye,"--n-close-color-pressed":se,"--n-close-color-hover":F,"--n-close-border-radius":X,"--n-close-icon-color":$e,"--n-close-icon-color-hover":$,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":$e,"--n-close-margin-top":ke.top,"--n-close-margin-right":ke.right,"--n-close-margin-bottom":ke.bottom,"--n-close-margin-left":ke.left,"--n-close-size":xe,"--n-color":g||(t.value?Q:B),"--n-color-checkable":z,"--n-color-checked":q,"--n-color-checked-hover":G,"--n-color-checked-pressed":R,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":P,"--n-font-size":ee,"--n-height":ie,"--n-opacity-disabled":k,"--n-padding":v,"--n-text-color":m||pe,"--n-text-color-checkable":T,"--n-text-color-checked":S,"--n-text-color-hover-checkable":_,"--n-text-color-pressed-checkable":E}}),f=o?Un("tag",I(()=>{let h="";const{type:p,size:g,color:{color:m,textColor:b}={}}=e;return h+=p[0],h+=g[0],m&&(h+=`a${zs(m)}`),b&&(h+=`b${zs(b)}`),t.value&&(h+="c"),h}),d,e):void 0;return Object.assign(Object.assign({},a),{rtlEnabled:c,mergedClsPrefix:r,contentRef:n,mergedBordered:t,handleClick:s,handleCloseClick:l,cssVars:o?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:u,onRender:s,$slots:l}=this;s?.();const a=An(l.avatar,d=>d&&A("div",{class:`${t}-tag__avatar`},d)),c=An(l.icon,d=>d&&A("div",{class:`${t}-tag__icon`},d));return A("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:u,[`${t}-tag--avatar`]:a,[`${t}-tag--icon`]:c,[`${t}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c||a,A("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&o?A(xh,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?A("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),{cubicBezierEaseInOut:Jn,cubicBezierEaseOut:B6,cubicBezierEaseIn:L6}=ni;function N6({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:u=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",a=s?"enter":"leave";return[L(`&.fade-in-height-expand-transition-${a}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),L(`&.fade-in-height-expand-transition-${a}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),L(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${Jn} ${r},
 opacity ${n} ${B6} ${r},
 margin-top ${n} ${Jn} ${r},
 margin-bottom ${n} ${Jn} ${r},
 padding-top ${n} ${Jn} ${r},
 padding-bottom ${n} ${Jn} ${r}
 ${t?`,${t}`:""}
 `),L(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${Jn},
 opacity ${n} ${L6},
 margin-top ${n} ${Jn},
 margin-bottom ${n} ${Jn},
 padding-top ${n} ${Jn},
 padding-bottom ${n} ${Jn}
 ${t?`,${t}`:""}
 `)]}const j6=w0&&"loading"in document.createElement("img");function H6(e={}){var n;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(n=e.threshold)!==null&&n!==void 0?n:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}}const Qu=new WeakMap,es=new WeakMap,ns=new WeakMap,U6=(e,n,t)=>{if(!e)return()=>{};const r=H6(n),{root:o}=r.options;let i;const u=Qu.get(o);u?i=u:(i=new Map,Qu.set(o,i));let s,l;i.has(r.hash)?(l=i.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const h=es.get(f.target),p=ns.get(f.target);h&&h(),p&&(p.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],i.set(r.hash,l));let a=!1;const c=()=>{a||(es.delete(e),ns.delete(e),a=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(r.hash),i.size||Qu.delete(o))};return es.set(e,c),ns.set(e,t),c};function K6(e){const{borderRadius:n,avatarColor:t,cardColor:r,fontSize:o,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,modalColor:c,popoverColor:d}=e;return{borderRadius:n,fontSize:o,border:`2px solid ${r}`,heightTiny:i,heightSmall:u,heightMedium:s,heightLarge:l,heightHuge:a,color:hr(r,t),colorModal:hr(c,t),colorPopover:hr(d,t)}}const W6={common:Dn,self:K6},q6="n-avatar-group",V6=K("avatar",`
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
`,[d0(L("&","--n-merged-color: var(--n-color-modal);")),f0(L("&","--n-merged-color: var(--n-color-popover);")),L("img",`
 width: 100%;
 height: 100%;
 `),U("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),K("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),U("text","line-height: 1.25")]),G6=Object.assign(Object.assign({},Fe.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Z6=ae({name:"Avatar",props:G6,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Cn(e),r=te(!1);let o=null;const i=te(null),u=te(null),s=()=>{const{value:v}=i;if(v&&(o===null||o!==v.innerHTML)){o=v.innerHTML;const{value:w}=u;if(w){const{offsetWidth:y,offsetHeight:k}=w,{offsetWidth:T,offsetHeight:_}=v,E=.9,S=Math.min(y/T*E,k/_*E,1);v.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},l=be(q6,null),a=I(()=>{const{size:v}=e;if(v)return v;const{size:w}=l||{};return w||"medium"}),c=Fe("Avatar","-avatar",V6,W6,e,n),d=be(Th,null),f=I(()=>{if(l)return!0;const{round:v,circle:w}=e;return v!==void 0||w!==void 0?v||w:d?d.roundRef.value:!1}),h=I(()=>l?!0:e.bordered||!1),p=I(()=>{const v=a.value,w=f.value,y=h.value,{color:k}=e,{self:{borderRadius:T,fontSize:_,color:E,border:S,colorModal:z,colorPopover:j},common:{cubicBezierEaseInOut:P}}=c.value;let q;return typeof v=="number"?q=`${v}px`:q=c.value.self[ze("height",v)],{"--n-font-size":_,"--n-border":y?S:"none","--n-border-radius":w?"50%":T,"--n-color":k||E,"--n-color-modal":k||z,"--n-color-popover":k||j,"--n-bezier":P,"--n-merged-size":`var(--n-avatar-size-override, ${q})`}}),g=t?Un("avatar",I(()=>{const v=a.value,w=f.value,y=h.value,{color:k}=e;let T="";return v&&(typeof v=="number"?T+=`a${v}`:T+=v[0]),w&&(T+="b"),y&&(T+="c"),k&&(T+=zs(k)),T}),p,e):void 0,m=te(!e.lazy);Rn(()=>{if(e.lazy&&e.intersectionObserverOptions){let v;const w=_t(()=>{v?.(),v=void 0,e.lazy&&(v=U6(u.value,e.intersectionObserverOptions,m))});Hn(()=>{w(),v?.()})}}),sn(()=>{var v;return e.src||((v=e.imgProps)===null||v===void 0?void 0:v.src)},()=>{r.value=!1});const b=te(!e.lazy);return{textRef:i,selfRef:u,mergedRoundRef:f,mergedClsPrefix:n,fitTextTransform:s,cssVars:t?void 0:p,themeClass:g?.themeClass,onRender:g?.onRender,hasLoadError:r,shouldStartLoading:m,loaded:b,mergedOnError:v=>{if(!m.value)return;r.value=!0;const{onError:w,imgProps:{onError:y}={}}=e;w?.(v),y?.(v)},mergedOnLoad:v=>{const{onLoad:w,imgProps:{onLoad:y}={}}=e;w?.(v),y?.(v),b.value=!0}}},render(){var e,n;const{$slots:t,src:r,mergedClsPrefix:o,lazy:i,onRender:u,loaded:s,hasLoadError:l,imgProps:a={}}=this;u?.();let c;const d=!s&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(n=(e=this.$slots).placeholder)===null||n===void 0?void 0:n.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Ps(t.fallback,()=>[A("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=An(t.default,f=>{if(f)return A(Ni,{onResize:this.fitTextTransform},{default:()=>A("span",{ref:"textRef",class:`${o}-avatar__text`},f)});if(r||a.src){const h=this.src||a.src;return A("img",Object.assign(Object.assign({},a),{loading:j6&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:i&&this.intersectionObserverOptions?this.shouldStartLoading?h:void 0:h,"data-image-src":h,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[a.style||"",{objectFit:this.objectFit},d?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),A("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},c,i&&d)}}),X6={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function Y6(e){const{primaryColor:n,borderRadius:t,lineHeight:r,fontSize:o,cardColor:i,textColor2:u,textColor1:s,dividerColor:l,fontWeightStrong:a,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:p,modalColor:g,boxShadow1:m,popoverColor:b,actionColor:v}=e;return Object.assign(Object.assign({},X6),{lineHeight:r,color:i,colorModal:g,colorPopover:b,colorTarget:n,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:u,titleTextColor:s,borderColor:l,actionColor:v,titleFontWeight:a,closeColorHover:h,closeColorPressed:p,closeBorderRadius:t,closeIconColor:c,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:m,borderRadius:t})}const J6={common:Dn,self:Y6},Q6=L([K("card",`
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
 `,[Vb({background:"var(--n-color-modal)"}),Z("hoverable",[L("&:hover","box-shadow: var(--n-box-shadow);")]),Z("content-segmented",[L(">",[U("content",{paddingTop:"var(--n-padding-bottom)"})])]),Z("content-soft-segmented",[L(">",[U("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),Z("footer-segmented",[L(">",[U("footer",{paddingTop:"var(--n-padding-bottom)"})])]),Z("footer-soft-segmented",[L(">",[U("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),L(">",[K("card-header",`
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
 `)]),K("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[L("img",`
 display: block;
 width: 100%;
 `)]),Z("bordered",`
 border: 1px solid var(--n-border-color);
 `,[L("&:target","border-color: var(--n-color-target);")]),Z("action-segmented",[L(">",[U("action",[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Z("content-segmented, content-soft-segmented",[L(">",[U("content",{transition:"border-color 0.3s var(--n-bezier)"},[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Z("footer-segmented, footer-soft-segmented",[L(">",[U("footer",{transition:"border-color 0.3s var(--n-bezier)"},[L("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Z("embedded",`
 background-color: var(--n-color-embedded);
 `)]),d0(K("card",`
 background: var(--n-color-modal);
 `,[Z("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),f0(K("card",`
 background: var(--n-color-popover);
 `,[Z("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),e4={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},n4=Object.assign(Object.assign({},Fe.props),e4),t4=ae({name:"Card",props:n4,slots:Object,setup(e){const n=()=>{const{onClose:a}=e;a&&Ze(a)},{inlineThemeDisabled:t,mergedClsPrefixRef:r,mergedRtlRef:o}=Cn(e),i=Fe("Card","-card",Q6,J6,e,r),u=Ml("Card",o,r),s=I(()=>{const{size:a}=e,{self:{color:c,colorModal:d,colorTarget:f,textColor:h,titleTextColor:p,titleFontWeight:g,borderColor:m,actionColor:b,borderRadius:v,lineHeight:w,closeIconColor:y,closeIconColorHover:k,closeIconColorPressed:T,closeColorHover:_,closeColorPressed:E,closeBorderRadius:S,closeIconSize:z,closeSize:j,boxShadow:P,colorPopover:q,colorEmbedded:G,colorEmbeddedModal:R,colorEmbeddedPopover:X,[ze("padding",a)]:H,[ze("fontSize",a)]:Q,[ze("titleFontSize",a)]:xe},common:{cubicBezierEaseInOut:ye}}=i.value,{top:ee,left:ie,bottom:B}=lr(H);return{"--n-bezier":ye,"--n-border-radius":v,"--n-color":c,"--n-color-modal":d,"--n-color-popover":q,"--n-color-embedded":G,"--n-color-embedded-modal":R,"--n-color-embedded-popover":X,"--n-color-target":f,"--n-text-color":h,"--n-line-height":w,"--n-action-color":b,"--n-title-text-color":p,"--n-title-font-weight":g,"--n-close-icon-color":y,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":T,"--n-close-color-hover":_,"--n-close-color-pressed":E,"--n-border-color":m,"--n-box-shadow":P,"--n-padding-top":ee,"--n-padding-bottom":B,"--n-padding-left":ie,"--n-font-size":Q,"--n-title-font-size":xe,"--n-close-size":j,"--n-close-icon-size":z,"--n-close-border-radius":S}}),l=t?Un("card",I(()=>e.size[0]),s,e):void 0;return{rtlEnabled:u,mergedClsPrefix:r,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l?.themeClass,onRender:l?.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:r,rtlEnabled:o,onRender:i,embedded:u,tag:s,$slots:l}=this;return i?.(),A(s,{class:[`${r}-card`,this.themeClass,u&&`${r}-card--embedded`,{[`${r}-card--rtl`]:o,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:n,[`${r}-card--hoverable`]:t}],style:this.cssVars,role:this.role},An(l.cover,a=>{const c=this.cover?Wn([this.cover()]):a;return c&&A("div",{class:`${r}-card-cover`,role:"none"},c)}),An(l.header,a=>{const{title:c}=this,d=c?Wn(typeof c=="function"?[c()]:[c]):a;return d||this.closable?A("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},A("div",{class:`${r}-card-header__main`,role:"heading"},d),An(l["header-extra"],f=>{const h=this.headerExtra?Wn([this.headerExtra()]):f;return h&&A("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&A(xh,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),An(l.default,a=>{const{content:c}=this,d=c?Wn(typeof c=="function"?[c()]:[c]):a;return d&&A("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},d)}),An(l.footer,a=>{const c=this.footer?Wn([this.footer()]):a;return c&&A("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},c)}),An(l.action,a=>{const c=this.action?Wn([this.action()]):a;return c&&A("div",{class:`${r}-card__action`,role:"none"},c)}))}}),r4={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Mo("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},o4=ae({name:"ConfigProvider",alias:["App"],props:r4,setup(e){const n=be(kt,null),t=I(()=>{const{theme:g}=e;if(g===null)return;const m=n?.mergedThemeRef.value;return g===void 0?m:m===void 0?g:Object.assign({},m,g)}),r=I(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n?.mergedThemeOverridesRef.value;{const m=n?.mergedThemeOverridesRef.value;return m===void 0?g:co({},m,g)}}}),o=Tn(()=>{const{namespace:g}=e;return g===void 0?n?.mergedNamespaceRef.value:g}),i=Tn(()=>{const{bordered:g}=e;return g===void 0?n?.mergedBorderedRef.value:g}),u=I(()=>{const{icons:g}=e;return g===void 0?n?.mergedIconsRef.value:g}),s=I(()=>{const{componentOptions:g}=e;return g!==void 0?g:n?.mergedComponentPropsRef.value}),l=I(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n?n.mergedClsPrefixRef.value:$s}),a=I(()=>{var g;const{rtl:m}=e;if(m===void 0)return n?.mergedRtlRef.value;const b={};for(const v of m)b[v.name]=To(v),(g=v.peers)===null||g===void 0||g.forEach(w=>{w.name in b||(b[w.name]=To(w))});return b}),c=I(()=>e.breakpoints||n?.mergedBreakpointsRef.value),d=e.inlineThemeDisabled||n?.inlineThemeDisabled,f=e.preflightStyleDisabled||n?.preflightStyleDisabled,h=e.styleMountTarget||n?.styleMountTarget,p=I(()=>{const{value:g}=t,{value:m}=r,b=m&&Object.keys(m).length!==0,v=g?.name;return v?b?`${v}-${$o(JSON.stringify(r.value))}`:v:b?$o(JSON.stringify(r.value)):""});return je(kt,{mergedThemeHashRef:p,mergedBreakpointsRef:c,mergedRtlRef:a,mergedIconsRef:u,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:I(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n?.mergedLocaleRef.value:g}),mergedDateLocaleRef:I(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n?.mergedDateLocaleRef.value:g}),mergedHljsRef:I(()=>{const{hljs:g}=e;return g===void 0?n?.mergedHljsRef.value:g}),mergedKatexRef:I(()=>{const{katex:g}=e;return g===void 0?n?.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:r,inlineThemeDisabled:d||!1,preflightStyleDisabled:f||!1,styleMountTarget:h}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:t,mergedThemeOverrides:r}},render(){var e,n,t,r;return this.abstract?(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t):A(this.as||this.tag,{class:`${this.mergedClsPrefix||$s}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),i4={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function u4(e){const{primaryColor:n,textColor2:t,dividerColor:r,hoverColor:o,popoverColor:i,invertedColor:u,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,heightSmall:f,heightMedium:h,heightLarge:p,heightHuge:g,textColor3:m,opacityDisabled:b}=e;return Object.assign(Object.assign({},i4),{optionHeightSmall:f,optionHeightMedium:h,optionHeightLarge:p,optionHeightHuge:g,borderRadius:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,fontSizeHuge:d,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:o,optionColorActive:De(n,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:b})}const Dh={name:"Dropdown",common:Dn,peers:{Popover:Nl},self:u4},s4={padding:"8px 14px"};function l4(e){const{borderRadius:n,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},s4),{borderRadius:n,boxShadow:t,color:hr(r,"rgba(0, 0, 0, .85)"),textColor:r})}const zh={name:"Tooltip",common:Dn,peers:{Popover:Nl},self:l4},a4=Object.assign(Object.assign({},bu),Fe.props),c4=ae({name:"Tooltip",props:a4,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=Cn(e),t=Fe("Tooltip","-tooltip",void 0,zh,e,n),r=te(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(i){r.value.setShow(i)}}),{popoverRef:r,mergedTheme:t,popoverThemeOverrides:I(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return A(Ah,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),jl="n-dropdown-menu",mu="n-dropdown",Uc="n-dropdown-option",Fh=ae({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return A("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),d4=ae({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=be(jl),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:o,renderOptionRef:i}=be(mu);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:o,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:r,nodeProps:o,renderLabel:i,renderOption:u}=this,{rawNode:s}=this.tmNode,l=A("div",Object.assign({class:`${n}-dropdown-option`},o?.(s)),A("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},A("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},it(s.icon)),A("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):it((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),A("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:l,option:s}):l}});function f4(e){const{textColorBase:n,opacity1:t,opacity2:r,opacity3:o,opacity4:i,opacity5:u}=e;return{color:n,opacity1Depth:t,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:u}}const h4={common:Dn,self:f4},p4=K("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[Z("color-transition",{transition:"color .3s var(--n-bezier)"}),Z("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),g4=Object.assign(Object.assign({},Fe.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Ph=ae({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:g4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Cn(e),r=Fe("Icon","-icon",p4,h4,e,n),o=I(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(u!==void 0){const{color:a,[`opacity${u}Depth`]:c}=l;return{"--n-bezier":s,"--n-color":a,"--n-opacity":c}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Un("icon",I(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:n,mergedStyle:I(()=>{const{size:u,color:s}=e;return{fontSize:Vt(u),color:s}}),cssVars:t?void 0:o,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:o,onRender:i,themeClass:u}=this;return!((e=n?.$options)===null||e===void 0)&&e._n_icon__&&Mo("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),A("i",wr(this.$attrs,{role:"img",class:[`${r}-icon`,u,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?A(o):this.$slots)}});function Us(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function b4(e){return e.type==="group"}function $h(e){return e.type==="divider"}function m4(e){return e.type==="render"}const Ih=ae({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=be(mu),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:i,activeKeyPathRef:u,animatedRef:s,mergedShowRef:l,renderLabelRef:a,renderIconRef:c,labelFieldRef:d,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:p,menuPropsRef:g}=n,m=be(Uc,null),b=be(jl),v=be(du),w=I(()=>e.tmNode.rawNode),y=I(()=>{const{value:H}=f;return Us(e.tmNode.rawNode,H)}),k=I(()=>{const{disabled:H}=e.tmNode;return H}),T=I(()=>{if(!y.value)return!1;const{key:H,disabled:Q}=e.tmNode;if(Q)return!1;const{value:xe}=t,{value:ye}=r,{value:ee}=o,{value:ie}=i;return xe!==null?ie.includes(H):ye!==null?ie.includes(H)&&ie[ie.length-1]!==H:ee!==null?ie.includes(H):!1}),_=I(()=>r.value===null&&!s.value),E=wm(T,300,_),S=I(()=>!!m?.enteringSubmenuRef.value),z=te(!1);je(Uc,{enteringSubmenuRef:z});function j(){z.value=!0}function P(){z.value=!1}function q(){const{parentKey:H,tmNode:Q}=e;Q.disabled||l.value&&(o.value=H,r.value=null,t.value=Q.key)}function G(){const{tmNode:H}=e;H.disabled||l.value&&t.value!==H.key&&q()}function R(H){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:Q}=H;Q&&!Ha({target:Q},"dropdownOption")&&!Ha({target:Q},"scrollbarRail")&&(t.value=null)}function X(){const{value:H}=y,{tmNode:Q}=e;l.value&&!H&&!Q.disabled&&(n.doSelect(Q.key,Q.rawNode),n.doUpdateShow(!1))}return{labelField:d,renderLabel:a,renderIcon:c,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:g,popoverBody:v,animated:s,mergedShowSubmenu:I(()=>E.value&&!S.value),rawNode:w,hasSubmenu:y,pending:Tn(()=>{const{value:H}=i,{key:Q}=e.tmNode;return H.includes(Q)}),childActive:Tn(()=>{const{value:H}=u,{key:Q}=e.tmNode,xe=H.findIndex(ye=>Q===ye);return xe===-1?!1:xe<H.length-1}),active:Tn(()=>{const{value:H}=u,{key:Q}=e.tmNode,xe=H.findIndex(ye=>Q===ye);return xe===-1?!1:xe===H.length-1}),mergedDisabled:k,renderOption:h,nodeProps:p,handleClick:X,handleMouseMove:G,handleMouseEnter:q,handleMouseLeave:R,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:P}},render(){var e,n;const{animated:t,rawNode:r,mergedShowSubmenu:o,clsPrefix:i,siblingHasIcon:u,siblingHasSubmenu:s,renderLabel:l,renderIcon:a,renderOption:c,nodeProps:d,props:f,scrollable:h}=this;let p=null;if(o){const v=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=A(Rh,Object.assign({},v,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=d?.(r),b=A("div",Object.assign({class:[`${i}-dropdown-option`,m?.class],"data-dropdown-option":!0},m),A("div",wr(g,f),[A("div",{class:[`${i}-dropdown-option-body__prefix`,u&&`${i}-dropdown-option-body__prefix--show-icon`]},[a?a(r):it(r.icon)]),A("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(r):it((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),A("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?A(Ph,null,{default:()=>A(vh,null)}):null)]),this.hasSubmenu?A(E0,null,{default:()=>[A(A0,null,{default:()=>A("div",{class:`${i}-dropdown-offset-container`},A(z0,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>A("div",{class:`${i}-dropdown-menu-wrapper`},t?A(xr,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:b,option:r}):b}}),v4=ae({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:r}=e;return A(Ne,null,A(d4,{clsPrefix:t,tmNode:e,key:e.key}),r?.map(o=>{const{rawNode:i}=o;return i.show===!1?null:$h(i)?A(Fh,{clsPrefix:t,key:o.key}):o.isGroup?(Mo("dropdown","`group` node is not allowed to be put in `group` node."),null):A(Ih,{clsPrefix:t,tmNode:o,parentKey:n,key:o.key})}))}}),x4=ae({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return A("div",n,[e?.()])}}),Rh=ae({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=be(mu);je(jl,{showIconRef:I(()=>{const o=n.value;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>o?o(l):l.icon);const{rawNode:s}=i;return o?o(s):s.icon})}),hasSubmenuRef:I(()=>{const{value:o}=t;return e.tmNodes.some(i=>{var u;if(i.isGroup)return(u=i.children)===null||u===void 0?void 0:u.some(({rawNode:l})=>Us(l,o));const{rawNode:s}=i;return Us(s,o)})})});const r=te(null);return je(Cl,null),je(yl,null),je(du,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,r=this.tmNodes.map(o=>{const{rawNode:i}=o;return i.show===!1?null:m4(i)?A(x4,{tmNode:o,key:o.key}):$h(i)?A(Fh,{clsPrefix:n,key:o.key}):b4(i)?A(v4,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):A(Ih,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:i.props,scrollable:t})});return A("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?A(_h,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Eh({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),y4=K("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[w6(),K("dropdown-option",`
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
 `)]),K("dropdown-option-body",`
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
 `),on("disabled",[Z("pending",`
 color: var(--n-option-text-color-hover);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),Z("active",`
 color: var(--n-option-text-color-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),Z("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[U("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),Z("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[U("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[Z("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),U("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[Z("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),K("icon",`
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
 `,[Z("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),K("icon",`
 font-size: var(--n-option-icon-size);
 `)]),K("dropdown-menu","pointer-events: all;")]),K("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),K("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),K("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[K("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),on("scrollable",`
 padding: var(--n-padding);
 `),Z("scrollable",[U("content",`
 padding: var(--n-padding);
 `)])]),C4={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},_4=Object.keys(bu),w4=Object.assign(Object.assign(Object.assign({},bu),C4),Fe.props),k4=ae({name:"Dropdown",inheritAttrs:!1,props:w4,setup(e){const n=te(!1),t=Ro(He(e,"show"),n),r=I(()=>{const{keyField:P,childrenField:q}=e;return Ai(e.options,{getKey(G){return G[P]},getDisabled(G){return G.disabled===!0},getIgnored(G){return G.type==="divider"||G.type==="render"},getChildren(G){return G[q]}})}),o=I(()=>r.value.treeNodes),i=te(null),u=te(null),s=te(null),l=I(()=>{var P,q,G;return(G=(q=(P=i.value)!==null&&P!==void 0?P:u.value)!==null&&q!==void 0?q:s.value)!==null&&G!==void 0?G:null}),a=I(()=>r.value.getPath(l.value).keyPath),c=I(()=>r.value.getPath(e.value).keyPath),d=Tn(()=>e.keyboard&&t.value);Cm({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:T},ArrowLeft:{prevent:!0,handler:w},Enter:{prevent:!0,handler:_},Escape:v}},d);const{mergedClsPrefixRef:f,inlineThemeDisabled:h}=Cn(e),p=Fe("Dropdown","-dropdown",y4,Dh,e,f);je(mu,{labelFieldRef:He(e,"labelField"),childrenFieldRef:He(e,"childrenField"),renderLabelRef:He(e,"renderLabel"),renderIconRef:He(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:u,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:a,activeKeyPathRef:c,animatedRef:He(e,"animated"),mergedShowRef:t,nodePropsRef:He(e,"nodeProps"),renderOptionRef:He(e,"renderOption"),menuPropsRef:He(e,"menuProps"),doSelect:g,doUpdateShow:m}),sn(t,P=>{!e.animated&&!P&&b()});function g(P,q){const{onSelect:G}=e;G&&Ze(G,P,q)}function m(P){const{"onUpdate:show":q,onUpdateShow:G}=e;q&&Ze(q,P),G&&Ze(G,P),n.value=P}function b(){i.value=null,u.value=null,s.value=null}function v(){m(!1)}function w(){S("left")}function y(){S("right")}function k(){S("up")}function T(){S("down")}function _(){const P=E();P?.isLeaf&&t.value&&(g(P.key,P.rawNode),m(!1))}function E(){var P;const{value:q}=r,{value:G}=l;return!q||G===null?null:(P=q.getNode(G))!==null&&P!==void 0?P:null}function S(P){const{value:q}=l,{value:{getFirstAvailableNode:G}}=r;let R=null;if(q===null){const X=G();X!==null&&(R=X.key)}else{const X=E();if(X){let H;switch(P){case"down":H=X.getNext();break;case"up":H=X.getPrev();break;case"right":H=X.getChild();break;case"left":H=X.getParent();break}H&&(R=H.key)}}R!==null&&(i.value=null,u.value=R)}const z=I(()=>{const{size:P,inverted:q}=e,{common:{cubicBezierEaseInOut:G},self:R}=p.value,{padding:X,dividerColor:H,borderRadius:Q,optionOpacityDisabled:xe,[ze("optionIconSuffixWidth",P)]:ye,[ze("optionSuffixWidth",P)]:ee,[ze("optionIconPrefixWidth",P)]:ie,[ze("optionPrefixWidth",P)]:B,[ze("fontSize",P)]:pe,[ze("optionHeight",P)]:we,[ze("optionIconSize",P)]:$e}=R,$={"--n-bezier":G,"--n-font-size":pe,"--n-padding":X,"--n-border-radius":Q,"--n-option-height":we,"--n-option-prefix-width":B,"--n-option-icon-prefix-width":ie,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":ye,"--n-option-icon-size":$e,"--n-divider-color":H,"--n-option-opacity-disabled":xe};return q?($["--n-color"]=R.colorInverted,$["--n-option-color-hover"]=R.optionColorHoverInverted,$["--n-option-color-active"]=R.optionColorActiveInverted,$["--n-option-text-color"]=R.optionTextColorInverted,$["--n-option-text-color-hover"]=R.optionTextColorHoverInverted,$["--n-option-text-color-active"]=R.optionTextColorActiveInverted,$["--n-option-text-color-child-active"]=R.optionTextColorChildActiveInverted,$["--n-prefix-color"]=R.prefixColorInverted,$["--n-suffix-color"]=R.suffixColorInverted,$["--n-group-header-text-color"]=R.groupHeaderTextColorInverted):($["--n-color"]=R.color,$["--n-option-color-hover"]=R.optionColorHover,$["--n-option-color-active"]=R.optionColorActive,$["--n-option-text-color"]=R.optionTextColor,$["--n-option-text-color-hover"]=R.optionTextColorHover,$["--n-option-text-color-active"]=R.optionTextColorActive,$["--n-option-text-color-child-active"]=R.optionTextColorChildActive,$["--n-prefix-color"]=R.prefixColor,$["--n-suffix-color"]=R.suffixColor,$["--n-group-header-text-color"]=R.groupHeaderTextColor),$}),j=h?Un("dropdown",I(()=>`${e.size[0]}${e.inverted?"i":""}`),z,e):void 0;return{mergedClsPrefix:f,mergedTheme:p,tmNodes:o,mergedShow:t,handleAfterLeave:()=>{e.animated&&b()},doUpdateShow:m,cssVars:h?void 0:z,themeClass:j?.themeClass,onRender:j?.onRender}},render(){const e=(r,o,i,u,s)=>{var l;const{mergedClsPrefix:a,menuProps:c}=this;(l=this.onRender)===null||l===void 0||l.call(this);const d=c?.(void 0,this.tmNodes.map(h=>h.rawNode))||{},f={ref:bv(o),class:[r,`${a}-dropdown`,this.themeClass],clsPrefix:a,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:s};return A(Rh,wr(this.$attrs,f,d))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return A(Ah,Object.assign({},Co(this.$props,_4),t),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}});function S4(e){const{textColor1:n,dividerColor:t,fontWeightStrong:r}=e;return{textColor:n,color:t,fontWeight:r}}const E4={common:Dn,self:S4},A4=K("divider",`
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
 `),Z("title-position-left",[U("line",[Z("left",{width:"28px"})])]),Z("title-position-right",[U("line",[Z("right",{width:"28px"})])]),Z("dashed",[U("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),Z("vertical",`
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
 `),on("dashed",[U("line",{backgroundColor:"var(--n-color)"})]),Z("dashed",[U("line",{borderColor:"var(--n-color)"})]),Z("vertical",{backgroundColor:"var(--n-color)"})]),T4=Object.assign(Object.assign({},Fe.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),D4=ae({name:"Divider",props:T4,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Cn(e),r=Fe("Divider","-divider",A4,E4,e,n),o=I(()=>{const{common:{cubicBezierEaseInOut:u},self:{color:s,textColor:l,fontWeight:a}}=r.value;return{"--n-bezier":u,"--n-color":s,"--n-text-color":l,"--n-font-weight":a}}),i=t?Un("divider",void 0,o,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:o,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:u}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("div",{role:"separator",class:[`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:r,[`${u}-divider--no-title`]:!n.default,[`${u}-divider--dashed`]:o,[`${u}-divider--title-position-${t}`]:n.default&&t}],style:i},r?null:A("div",{class:`${u}-divider__line ${u}-divider__line--left`}),!r&&n.default?A(Ne,null,A("div",{class:`${u}-divider__title`},this.$slots),A("div",{class:`${u}-divider__line ${u}-divider__line--right`})):null)}});function z4(e){const{baseColor:n,textColor2:t,bodyColor:r,cardColor:o,dividerColor:i,actionColor:u,scrollbarColor:s,scrollbarColorHover:l,invertedColor:a}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:u,headerColor:o,headerColorInverted:a,footerColor:u,footerColorInverted:a,headerBorderColor:i,headerBorderColorInverted:a,footerBorderColor:i,footerBorderColorInverted:a,siderBorderColor:i,siderBorderColorInverted:a,siderColor:o,siderColorInverted:a,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:hr(r,s),siderToggleBarColorHover:hr(r,l),__invertScrollbar:"true"}}const Oh={name:"Layout",common:Dn,peers:{Scrollbar:Ch},self:z4};function F4(e,n,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}function P4(e){const{borderRadius:n,textColor3:t,primaryColor:r,textColor2:o,textColor1:i,fontSize:u,dividerColor:s,hoverColor:l,primaryColorHover:a}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:De(r,{alpha:.1}),itemColorActiveHover:De(r,{alpha:.1}),itemColorActiveCollapsed:De(r,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:a,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:a,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:s},F4("#BBB",r,"#FFF","#AAA"))}const $4={name:"Menu",common:Dn,peers:{Tooltip:zh,Dropdown:Dh},self:P4},I4={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function R4(e){const{textColor3:n,infoColor:t,errorColor:r,successColor:o,warningColor:i,textColor1:u,textColor2:s,railColor:l,fontWeightStrong:a,fontSize:c}=e;return Object.assign(Object.assign({},I4),{contentFontSize:c,titleFontWeight:a,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:r,iconColorSuccess:o,iconColorWarning:i,titleTextColor:u,contentTextColor:s,metaTextColor:n,lineColor:l})}const O4={common:Dn,self:R4};function M4(e,n){const t=[];let r=0,o;for(;(o=n.exec(e))!==null&&(o.index>r&&t.push({text:e.slice(r,o.index),isMatch:!1}),t.push({text:o[0],isMatch:!0}),r=n.lastIndex,!!n.global););return r<e.length&&t.push({text:e.slice(r),isMatch:!1}),t}const B4={highlightTag:{type:String,default:"mark"},caseSensitive:Boolean,autoEscape:{type:Boolean,default:!0},text:String,patterns:{type:Array,default:()=>[]},highlightClass:String,highlightStyle:[Object,String]},L4=ae({name:"Highlight",props:B4,setup(e){const{mergedClsPrefixRef:n}=Cn(),t=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{highlightedNode:I(()=>{const o=n.value;let i=[];const{patterns:u,text:s}=e;if(u.length===0||!s)i=[s];else{const{highlightTag:l,caseSensitive:a,autoEscape:c,highlightClass:d,highlightStyle:f}=e,h=u.map(m=>c?t(m):m).join("|"),p=new RegExp(`(${h})`,a?"g":"gi");i=M4(s,p).map(({text:m,isMatch:b})=>b?A(l,{class:[`${o}-highlight__mark`,d],style:f},m):m)}return A("span",{class:`${o}-highlight`},i)}),mergedClsPrefix:n}},render(){return this.highlightedNode}}),Mh="n-layout-sider",Bh={type:String,default:"static"},N4=K("layout",`
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
`,[K("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),Z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),j4={embedded:Boolean,position:Bh,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Lh="n-layout";function H4(e){return ae({name:"Layout",props:Object.assign(Object.assign({},Fe.props),j4),setup(n){const t=te(null),r=te(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=Cn(n),u=Fe("Layout","-layout",N4,Oh,n,o);function s(g,m){if(n.nativeScrollbar){const{value:b}=t;b&&(m===void 0?b.scrollTo(g):b.scrollTo(g,m))}else{const{value:b}=r;b&&b.scrollTo(g,m)}}je(Lh,n);let l=0,a=0;const c=g=>{var m;const b=g.target;l=b.scrollLeft,a=b.scrollTop,(m=n.onScroll)===null||m===void 0||m.call(n,g)};_l(()=>{if(n.nativeScrollbar){const g=t.value;g&&(g.scrollTop=a,g.scrollLeft=l)}});const d={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:s},h=I(()=>{const{common:{cubicBezierEaseInOut:g},self:m}=u.value;return{"--n-bezier":g,"--n-color":n.embedded?m.colorEmbedded:m.color,"--n-text-color":m.textColor}}),p=i?Un("layout",I(()=>n.embedded?"e":""),h,n):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:d,mergedTheme:u,handleNativeElScroll:c,cssVars:i?void 0:h,themeClass:p?.themeClass,onRender:p?.onRender},f)},render(){var n;const{mergedClsPrefix:t,hasSider:r}=this;(n=this.onRender)===null||n===void 0||n.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return A("div",{class:i,style:this.cssVars},this.nativeScrollbar?A("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):A(gu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const Kc=H4(!1),U4=K("layout-sider",`
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
`,[Z("bordered",[U("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),U("left-placement",[Z("bordered",[U("border",`
 right: 0;
 `)])]),Z("right-placement",`
 justify-content: flex-start;
 `,[Z("bordered",[U("border",`
 left: 0;
 `)]),Z("collapsed",[K("layout-toggle-button",[K("base-icon",`
 transform: rotate(180deg);
 `)]),K("layout-toggle-bar",[L("&:hover",[U("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),K("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[K("base-icon",`
 transform: rotate(0);
 `)]),K("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[L("&:hover",[U("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),Z("collapsed",[K("layout-toggle-bar",[L("&:hover",[U("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),U("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),K("layout-toggle-button",[K("base-icon",`
 transform: rotate(0);
 `)])]),K("layout-toggle-button",`
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
 `,[K("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),K("layout-toggle-bar",`
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
 `),K("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),Z("show-content",[K("layout-sider-scroll-container",{opacity:1})]),Z("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),K4=ae({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},A("div",{class:`${e}-layout-toggle-bar__top`}),A("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),W4=ae({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return A("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},A(Bl,{clsPrefix:e},{default:()=>A(vh,null)}))}}),q4={position:Bh,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},V4=ae({name:"LayoutSider",props:Object.assign(Object.assign({},Fe.props),q4),setup(e){const n=be(Lh),t=te(null),r=te(null),o=te(e.defaultCollapsed),i=Ro(He(e,"collapsed"),o),u=I(()=>Vt(i.value?e.collapsedWidth:e.width)),s=I(()=>e.collapseMode!=="transform"?{}:{minWidth:Vt(e.width)}),l=I(()=>n?n.siderPlacement:"left");function a(k,T){if(e.nativeScrollbar){const{value:_}=t;_&&(T===void 0?_.scrollTo(k):_.scrollTo(k,T))}else{const{value:_}=r;_&&_.scrollTo(k,T)}}function c(){const{"onUpdate:collapsed":k,onUpdateCollapsed:T,onExpand:_,onCollapse:E}=e,{value:S}=i;T&&Ze(T,!S),k&&Ze(k,!S),o.value=!S,S?_&&Ze(_):E&&Ze(E)}let d=0,f=0;const h=k=>{var T;const _=k.target;d=_.scrollLeft,f=_.scrollTop,(T=e.onScroll)===null||T===void 0||T.call(e,k)};_l(()=>{if(e.nativeScrollbar){const k=t.value;k&&(k.scrollTop=f,k.scrollLeft=d)}}),je(Mh,{collapsedRef:i,collapseModeRef:He(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=Cn(e),m=Fe("Layout","-layout-sider",U4,Oh,e,p);function b(k){var T,_;k.propertyName==="max-width"&&(i.value?(T=e.onAfterLeave)===null||T===void 0||T.call(e):(_=e.onAfterEnter)===null||_===void 0||_.call(e))}const v={scrollTo:a},w=I(()=>{const{common:{cubicBezierEaseInOut:k},self:T}=m.value,{siderToggleButtonColor:_,siderToggleButtonBorder:E,siderToggleBarColor:S,siderToggleBarColorHover:z}=T,j={"--n-bezier":k,"--n-toggle-button-color":_,"--n-toggle-button-border":E,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":z};return e.inverted?(j["--n-color"]=T.siderColorInverted,j["--n-text-color"]=T.textColorInverted,j["--n-border-color"]=T.siderBorderColorInverted,j["--n-toggle-button-icon-color"]=T.siderToggleButtonIconColorInverted,j.__invertScrollbar=T.__invertScrollbar):(j["--n-color"]=T.siderColor,j["--n-text-color"]=T.textColor,j["--n-border-color"]=T.siderBorderColor,j["--n-toggle-button-icon-color"]=T.siderToggleButtonIconColor),j}),y=g?Un("layout-sider",I(()=>e.inverted?"a":"b"),w,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:m,styleMaxWidth:u,mergedCollapsed:i,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:b,handleTriggerClick:c,inlineThemeDisabled:g,cssVars:w,themeClass:y?.themeClass,onRender:y?.onRender},v)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),A("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,t&&`${n}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Vt(this.width)}]},this.nativeScrollbar?A("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):A(gu,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?A(K4,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):A(W4,{clsPrefix:n,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?A("div",{class:`${n}-layout-sider__border`}):null)}}),ti="n-menu",Hl="n-submenu",Ul="n-menu-item-group",Wc=[L("&::before","background-color: var(--n-item-color-hover);"),U("arrow",`
 color: var(--n-arrow-color-hover);
 `),U("icon",`
 color: var(--n-item-icon-color-hover);
 `),K("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[L("a",`
 color: var(--n-item-text-color-hover);
 `),U("extra",`
 color: var(--n-item-text-color-hover);
 `)])],qc=[U("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),K("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),U("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],G4=L([K("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[Z("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[K("submenu","margin: 0;"),K("menu-item","margin: 0;"),K("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[L("&::before","display: none;"),Z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),K("menu-item-content",[Z("selected",[U("icon","color: var(--n-item-icon-color-active-horizontal);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-horizontal);"),U("extra","color: var(--n-item-text-color-active-horizontal);")])]),Z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[K("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),U("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),U("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),on("disabled",[on("selected, child-active",[L("&:focus-within",qc)]),Z("selected",[or(null,[U("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),Z("child-active",[or(null,[U("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),U("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),or("border-bottom: 2px solid var(--n-border-color-horizontal);",qc)]),K("menu-item-content-header",[L("a","color: var(--n-item-text-color-horizontal);")])])]),on("responsive",[K("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Z("collapsed",[K("menu-item-content",[Z("selected",[L("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),K("menu-item-content-header","opacity: 0;"),U("arrow","opacity: 0;"),U("icon","color: var(--n-item-icon-color-collapsed);")])]),K("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),K("menu-item-content",`
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
 `),Z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),Z("collapsed",[U("arrow","transform: rotate(0);")]),Z("selected",[L("&::before","background-color: var(--n-item-color-active);"),U("arrow","color: var(--n-arrow-color-active);"),U("icon","color: var(--n-item-icon-color-active);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[L("a","color: var(--n-item-text-color-active);"),U("extra","color: var(--n-item-text-color-active);")])]),Z("child-active",[K("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[L("a",`
 color: var(--n-item-text-color-child-active);
 `),U("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),U("arrow",`
 color: var(--n-arrow-color-child-active);
 `),U("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),on("disabled",[on("selected, child-active",[L("&:focus-within",Wc)]),Z("selected",[or(null,[U("arrow","color: var(--n-arrow-color-active-hover);"),U("icon","color: var(--n-item-icon-color-active-hover);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[L("a","color: var(--n-item-text-color-active-hover);"),U("extra","color: var(--n-item-text-color-active-hover);")])])]),Z("child-active",[or(null,[U("arrow","color: var(--n-arrow-color-child-active-hover);"),U("icon","color: var(--n-item-icon-color-child-active-hover);"),K("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[L("a","color: var(--n-item-text-color-child-active-hover);"),U("extra","color: var(--n-item-text-color-child-active-hover);")])])]),Z("selected",[or(null,[L("&::before","background-color: var(--n-item-color-active-hover);")])]),or(null,Wc)]),U("icon",`
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
 `),K("menu-item-content-header",`
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
 `)])]),K("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[K("menu-item-content",`
 height: var(--n-item-height);
 `),K("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[N6({duration:".2s"})])]),K("menu-item-group",[K("menu-item-group-title",`
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
 `)])]),K("menu-tooltip",[L("a",`
 color: inherit;
 text-decoration: none;
 `)]),K("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function or(e,n){return[Z("hover",e,n),L("&:hover",e,n)]}const Nh=ae({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=be(ti);return{menuProps:n,style:I(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:I(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:o}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${o}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:r,renderExtra:o,expandIcon:i}}=this,u=t?t(n.rawNode):it(this.icon);return A("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&A("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),A("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(n.rawNode):it(this.title),this.extra||o?A("span",{class:`${e}-menu-item-content-header__extra`}," ",o?o(n.rawNode):it(this.extra)):null),this.showArrow?A(Bl,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):A(Uy,null)}):null)}}),xi=8;function Kl(e){const n=be(ti),{props:t,mergedCollapsedRef:r}=n,o=be(Hl,null),i=be(Ul,null),u=I(()=>t.mode==="horizontal"),s=I(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=I(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),a=I(()=>{var f;return!u.value&&e.root&&r.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),c=I(()=>{if(u.value)return;const{collapsedWidth:f,indent:h,rootIndent:p}=t,{root:g,isGroup:m}=e,b=p===void 0?h:p;return g?r.value?f/2-l.value/2:b:i&&typeof i.paddingLeftRef.value=="number"?h/2+i.paddingLeftRef.value:o&&typeof o.paddingLeftRef.value=="number"?(m?h/2:h)+o.paddingLeftRef.value:0}),d=I(()=>{const{collapsedWidth:f,indent:h,rootIndent:p}=t,{value:g}=l,{root:m}=e;return u.value||!m||!r.value?xi:(p===void 0?h:p)+g+xi-(f+g)/2});return{dropdownPlacement:s,activeIconSize:a,maxIconSize:l,paddingLeft:c,iconMarginRight:d,NMenu:n,NSubmenu:o}}const Wl={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Z4=ae({name:"MenuDivider",setup(){const e=be(ti),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:A("div",{class:`${n.value}-menu-divider`})}}),jh=Object.assign(Object.assign({},Wl),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),X4=kl(jh),Y4=ae({name:"MenuOption",props:jh,setup(e){const n=Kl(e),{NSubmenu:t,NMenu:r}=n,{props:o,mergedClsPrefixRef:i,mergedCollapsedRef:u}=r,s=t?t.mergedDisabledRef:{value:!1},l=I(()=>s.value||e.disabled);function a(d){const{onClick:f}=e;f&&f(d)}function c(d){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),a(d))}return{mergedClsPrefix:i,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:o,dropdownEnabled:Tn(()=>e.root&&u.value&&o.mode!=="horizontal"&&!l.value),selected:Tn(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:c}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:r,nodeProps:o}}=this,i=o?.(t.rawNode);return A("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i?.class]}),A(c4,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):it(this.title),trigger:()=>A(Nh,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Hh=Object.assign(Object.assign({},Wl),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),J4=kl(Hh),Q4=ae({name:"MenuOptionGroup",props:Hh,setup(e){je(Hl,null);const n=Kl(e);je(Ul,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:t,props:r}=be(ti);return function(){const{value:o}=t,i=n.paddingLeft.value,{nodeProps:u}=r,s=u?.(e.tmNode.rawNode);return A("div",{class:`${o}-menu-item-group`,role:"group"},A("div",Object.assign({},s,{class:[`${o}-menu-item-group-title`,s?.class],style:[s?.style||"",i!==void 0?`padding-left: ${i}px;`:""]}),it(e.title),e.extra?A(Ne,null," ",it(e.extra)):null),A("div",null,e.tmNodes.map(l=>ql(l,r))))}}});function Ks(e){return e.type==="divider"||e.type==="render"}function e5(e){return e.type==="divider"}function ql(e,n){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(Ks(t))return e5(t)?A(Z4,Object.assign({key:e.key},t.props)):null;const{labelField:o}=n,{key:i,level:u,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[o],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:u,root:u===0,isGroup:s});return e.children?e.isGroup?A(Q4,Co(l,J4,{tmNode:e,tmNodes:e.children,key:i})):A(Ws,Co(l,n5,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):A(Y4,Co(l,X4,{key:i,tmNode:e}))}const Uh=Object.assign(Object.assign({},Wl),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),n5=kl(Uh),Ws=ae({name:"Submenu",props:Uh,setup(e){const n=Kl(e),{NMenu:t,NSubmenu:r}=n,{props:o,mergedCollapsedRef:i,mergedThemeRef:u}=t,s=I(()=>{const{disabled:f}=e;return r?.mergedDisabledRef.value||o.disabled?!0:f}),l=te(!1);je(Hl,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:s}),je(Ul,null);function a(){const{onClick:f}=e;f&&f()}function c(){s.value||(i.value||t.toggleExpand(e.internalKey),a())}function d(f){l.value=f}return{menuProps:o,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:l,paddingLeft:n.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:Tn(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(e.internalKey)}),collapsed:I(()=>o.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!s.value&&(o.mode==="horizontal"||i.value)),handlePopoverShowChange:d,handleClick:c}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:r}}=this,o=()=>{const{isHorizontal:u,paddingLeft:s,collapsed:l,mergedDisabled:a,maxIconSize:c,activeIconSize:d,title:f,childActive:h,icon:p,handleClick:g,menuProps:{nodeProps:m},dropdownShow:b,iconMarginRight:v,tmNode:w,mergedClsPrefix:y,isEllipsisPlaceholder:k,extra:T}=this,_=m?.(w.rawNode);return A("div",Object.assign({},_,{class:[`${y}-menu-item`,_?.class],role:"menuitem"}),A(Nh,{tmNode:w,paddingLeft:s,collapsed:l,disabled:a,iconMarginRight:v,maxIconSize:c,activeIconSize:d,title:f,extra:T,showArrow:!u,childActive:h,clsPrefix:y,icon:p,hover:b,onClick:g,isEllipsisPlaceholder:k}))},i=()=>A(qy,null,{default:()=>{const{tmNodes:u,collapsed:s}=this;return s?null:A("div",{class:`${n}-submenu-children`,role:"menu"},u.map(l=>ql(l,this.menuProps)))}});return this.root?A(k4,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),this.isHorizontal?null:i())}):A("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},o(),i())}}),t5=Object.assign(Object.assign({},Fe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),r5=ae({name:"Menu",inheritAttrs:!1,props:t5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Cn(e),r=Fe("Menu","-menu",G4,$4,e,n),o=be(Mh,null),i=I(()=>{var ee;const{collapsed:ie}=e;if(ie!==void 0)return ie;if(o){const{collapseModeRef:B,collapsedRef:pe}=o;if(B.value==="width")return(ee=pe.value)!==null&&ee!==void 0?ee:!1}return!1}),u=I(()=>{const{keyField:ee,childrenField:ie,disabledField:B}=e;return Ai(e.items||e.options,{getIgnored(pe){return Ks(pe)},getChildren(pe){return pe[ie]},getDisabled(pe){return pe[B]},getKey(pe){var we;return(we=pe[ee])!==null&&we!==void 0?we:pe.name}})}),s=I(()=>new Set(u.value.treeNodes.map(ee=>ee.key))),{watchProps:l}=e,a=te(null);l?.includes("defaultValue")?_t(()=>{a.value=e.defaultValue}):a.value=e.defaultValue;const c=He(e,"value"),d=Ro(c,a),f=te([]),h=()=>{f.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(d.value,{includeSelf:!1}).keyPath};l?.includes("defaultExpandedKeys")?_t(h):h();const p=C0(e,["expandedNames","expandedKeys"]),g=Ro(p,f),m=I(()=>u.value.treeNodes),b=I(()=>u.value.getPath(d.value).keyPath);je(ti,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:d,mergedExpandedKeysRef:g,activePathRef:b,mergedClsPrefixRef:n,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:He(e,"inverted"),doSelect:v,toggleExpand:y});function v(ee,ie){const{"onUpdate:value":B,onUpdateValue:pe,onSelect:we}=e;pe&&Ze(pe,ee,ie),B&&Ze(B,ee,ie),we&&Ze(we,ee,ie),a.value=ee}function w(ee){const{"onUpdate:expandedKeys":ie,onUpdateExpandedKeys:B,onExpandedNamesChange:pe,onOpenNamesChange:we}=e;ie&&Ze(ie,ee),B&&Ze(B,ee),pe&&Ze(pe,ee),we&&Ze(we,ee),f.value=ee}function y(ee){const ie=Array.from(g.value),B=ie.findIndex(pe=>pe===ee);if(~B)ie.splice(B,1);else{if(e.accordion&&s.value.has(ee)){const pe=ie.findIndex(we=>s.value.has(we));pe>-1&&ie.splice(pe,1)}ie.push(ee)}w(ie)}const k=ee=>{const ie=u.value.getPath(ee??d.value,{includeSelf:!1}).keyPath;if(!ie.length)return;const B=Array.from(g.value),pe=new Set([...B,...ie]);e.accordion&&s.value.forEach(we=>{pe.has(we)&&!ie.includes(we)&&pe.delete(we)}),w(Array.from(pe))},T=I(()=>{const{inverted:ee}=e,{common:{cubicBezierEaseInOut:ie},self:B}=r.value,{borderRadius:pe,borderColorHorizontal:we,fontSize:$e,itemHeight:$,dividerColor:oe}=B,F={"--n-divider-color":oe,"--n-bezier":ie,"--n-font-size":$e,"--n-border-color-horizontal":we,"--n-border-radius":pe,"--n-item-height":$};return ee?(F["--n-group-text-color"]=B.groupTextColorInverted,F["--n-color"]=B.colorInverted,F["--n-item-text-color"]=B.itemTextColorInverted,F["--n-item-text-color-hover"]=B.itemTextColorHoverInverted,F["--n-item-text-color-active"]=B.itemTextColorActiveInverted,F["--n-item-text-color-child-active"]=B.itemTextColorChildActiveInverted,F["--n-item-text-color-child-active-hover"]=B.itemTextColorChildActiveInverted,F["--n-item-text-color-active-hover"]=B.itemTextColorActiveHoverInverted,F["--n-item-icon-color"]=B.itemIconColorInverted,F["--n-item-icon-color-hover"]=B.itemIconColorHoverInverted,F["--n-item-icon-color-active"]=B.itemIconColorActiveInverted,F["--n-item-icon-color-active-hover"]=B.itemIconColorActiveHoverInverted,F["--n-item-icon-color-child-active"]=B.itemIconColorChildActiveInverted,F["--n-item-icon-color-child-active-hover"]=B.itemIconColorChildActiveHoverInverted,F["--n-item-icon-color-collapsed"]=B.itemIconColorCollapsedInverted,F["--n-item-text-color-horizontal"]=B.itemTextColorHorizontalInverted,F["--n-item-text-color-hover-horizontal"]=B.itemTextColorHoverHorizontalInverted,F["--n-item-text-color-active-horizontal"]=B.itemTextColorActiveHorizontalInverted,F["--n-item-text-color-child-active-horizontal"]=B.itemTextColorChildActiveHorizontalInverted,F["--n-item-text-color-child-active-hover-horizontal"]=B.itemTextColorChildActiveHoverHorizontalInverted,F["--n-item-text-color-active-hover-horizontal"]=B.itemTextColorActiveHoverHorizontalInverted,F["--n-item-icon-color-horizontal"]=B.itemIconColorHorizontalInverted,F["--n-item-icon-color-hover-horizontal"]=B.itemIconColorHoverHorizontalInverted,F["--n-item-icon-color-active-horizontal"]=B.itemIconColorActiveHorizontalInverted,F["--n-item-icon-color-active-hover-horizontal"]=B.itemIconColorActiveHoverHorizontalInverted,F["--n-item-icon-color-child-active-horizontal"]=B.itemIconColorChildActiveHorizontalInverted,F["--n-item-icon-color-child-active-hover-horizontal"]=B.itemIconColorChildActiveHoverHorizontalInverted,F["--n-arrow-color"]=B.arrowColorInverted,F["--n-arrow-color-hover"]=B.arrowColorHoverInverted,F["--n-arrow-color-active"]=B.arrowColorActiveInverted,F["--n-arrow-color-active-hover"]=B.arrowColorActiveHoverInverted,F["--n-arrow-color-child-active"]=B.arrowColorChildActiveInverted,F["--n-arrow-color-child-active-hover"]=B.arrowColorChildActiveHoverInverted,F["--n-item-color-hover"]=B.itemColorHoverInverted,F["--n-item-color-active"]=B.itemColorActiveInverted,F["--n-item-color-active-hover"]=B.itemColorActiveHoverInverted,F["--n-item-color-active-collapsed"]=B.itemColorActiveCollapsedInverted):(F["--n-group-text-color"]=B.groupTextColor,F["--n-color"]=B.color,F["--n-item-text-color"]=B.itemTextColor,F["--n-item-text-color-hover"]=B.itemTextColorHover,F["--n-item-text-color-active"]=B.itemTextColorActive,F["--n-item-text-color-child-active"]=B.itemTextColorChildActive,F["--n-item-text-color-child-active-hover"]=B.itemTextColorChildActiveHover,F["--n-item-text-color-active-hover"]=B.itemTextColorActiveHover,F["--n-item-icon-color"]=B.itemIconColor,F["--n-item-icon-color-hover"]=B.itemIconColorHover,F["--n-item-icon-color-active"]=B.itemIconColorActive,F["--n-item-icon-color-active-hover"]=B.itemIconColorActiveHover,F["--n-item-icon-color-child-active"]=B.itemIconColorChildActive,F["--n-item-icon-color-child-active-hover"]=B.itemIconColorChildActiveHover,F["--n-item-icon-color-collapsed"]=B.itemIconColorCollapsed,F["--n-item-text-color-horizontal"]=B.itemTextColorHorizontal,F["--n-item-text-color-hover-horizontal"]=B.itemTextColorHoverHorizontal,F["--n-item-text-color-active-horizontal"]=B.itemTextColorActiveHorizontal,F["--n-item-text-color-child-active-horizontal"]=B.itemTextColorChildActiveHorizontal,F["--n-item-text-color-child-active-hover-horizontal"]=B.itemTextColorChildActiveHoverHorizontal,F["--n-item-text-color-active-hover-horizontal"]=B.itemTextColorActiveHoverHorizontal,F["--n-item-icon-color-horizontal"]=B.itemIconColorHorizontal,F["--n-item-icon-color-hover-horizontal"]=B.itemIconColorHoverHorizontal,F["--n-item-icon-color-active-horizontal"]=B.itemIconColorActiveHorizontal,F["--n-item-icon-color-active-hover-horizontal"]=B.itemIconColorActiveHoverHorizontal,F["--n-item-icon-color-child-active-horizontal"]=B.itemIconColorChildActiveHorizontal,F["--n-item-icon-color-child-active-hover-horizontal"]=B.itemIconColorChildActiveHoverHorizontal,F["--n-arrow-color"]=B.arrowColor,F["--n-arrow-color-hover"]=B.arrowColorHover,F["--n-arrow-color-active"]=B.arrowColorActive,F["--n-arrow-color-active-hover"]=B.arrowColorActiveHover,F["--n-arrow-color-child-active"]=B.arrowColorChildActive,F["--n-arrow-color-child-active-hover"]=B.arrowColorChildActiveHover,F["--n-item-color-hover"]=B.itemColorHover,F["--n-item-color-active"]=B.itemColorActive,F["--n-item-color-active-hover"]=B.itemColorActiveHover,F["--n-item-color-active-collapsed"]=B.itemColorActiveCollapsed),F}),_=t?Un("menu",I(()=>e.inverted?"a":"b"),T,e):void 0,E=v0(),S=te(null),z=te(null);let j=!0;const P=()=>{var ee;j?j=!1:(ee=S.value)===null||ee===void 0||ee.sync({showAllItemsBeforeCalculate:!0})};function q(){return document.getElementById(E)}const G=te(-1);function R(ee){G.value=e.options.length-ee}function X(ee){ee||(G.value=-1)}const H=I(()=>{const ee=G.value;return{children:ee===-1?[]:e.options.slice(ee)}}),Q=I(()=>{const{childrenField:ee,disabledField:ie,keyField:B}=e;return Ai([H.value],{getIgnored(pe){return Ks(pe)},getChildren(pe){return pe[ee]},getDisabled(pe){return pe[ie]},getKey(pe){var we;return(we=pe[B])!==null&&we!==void 0?we:pe.name}})}),xe=I(()=>Ai([{}]).treeNodes[0]);function ye(){var ee;if(G.value===-1)return A(Ws,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:xe.value,domId:E,isEllipsisPlaceholder:!0});const ie=Q.value.treeNodes[0],B=b.value,pe=!!(!((ee=ie.children)===null||ee===void 0)&&ee.some(we=>B.includes(we.key)));return A(Ws,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:pe,tmNode:ie,domId:E,rawNodes:ie.rawNode.children||[],tmNodes:ie.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:p,uncontrolledExpanededKeys:f,mergedExpandedKeys:g,uncontrolledValue:a,mergedValue:d,activePath:b,tmNodes:m,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:T,themeClass:_?.themeClass,overflowRef:S,counterRef:z,updateCounter:()=>{},onResize:P,onUpdateOverflow:X,onUpdateCount:R,renderCounter:ye,getCounter:q,onRender:_?.onRender,showOption:k,deriveResponsiveState:P}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:r}=this;r?.();const o=()=>this.tmNodes.map(l=>ql(l,this.$props)),u=n==="horizontal"&&this.responsive,s=()=>A("div",wr(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?A(dv,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:o,counter:this.renderCounter}):o());return u?A(Ni,{onResize:this.onResize},{default:s}):s()}}),o5=Object.assign(Object.assign({},Fe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Vc=ae({name:"Scrollbar",props:o5,setup(){const e=te(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return A(gu,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Gc=1.25,i5=K("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Gc};
`,[Z("horizontal",`
 flex-direction: row;
 `,[L(">",[K("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[Z("dashed-line-type",[L(">",[K("timeline-item-timeline",[U("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),L(">",[K("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[L(">",[U("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),K("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[U("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),Z("right-placement",[K("timeline-item",[K("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),K("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),Z("left-placement",[K("timeline-item",[K("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),K("timeline-item-timeline",`
 left: 0;
 `)])]),K("timeline-item",`
 position: relative;
 `,[L("&:last-child",[K("timeline-item-timeline",[U("line",`
 display: none;
 `)]),K("timeline-item-content",[U("meta",`
 margin-bottom: 0;
 `)])]),K("timeline-item-content",[U("title",`
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
 `)]),Z("dashed-line-type",[K("timeline-item-timeline",[U("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),K("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Gc} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),u5=Object.assign(Object.assign({},Fe.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Kh="n-timeline",s5=ae({name:"Timeline",props:u5,setup(e,{slots:n}){const{mergedClsPrefixRef:t}=Cn(e),r=Fe("Timeline","-timeline",i5,O4,e,t);return je(Kh,{props:e,mergedThemeRef:r,mergedClsPrefixRef:t}),()=>{const{value:o}=t;return A("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},n)}}}),l5={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},uo=ae({name:"TimelineItem",props:l5,slots:Object,setup(e){const n=be(Kh);n||j0("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),km();const{inlineThemeDisabled:t}=Cn(),r=I(()=>{const{props:{size:i,iconSize:u},mergedThemeRef:s}=n,{type:l}=e,{self:{titleTextColor:a,contentTextColor:c,metaTextColor:d,lineColor:f,titleFontWeight:h,contentFontSize:p,[ze("iconSize",i)]:g,[ze("titleMargin",i)]:m,[ze("titleFontSize",i)]:b,[ze("circleBorder",l)]:v,[ze("iconColor",l)]:w},common:{cubicBezierEaseInOut:y}}=s.value;return{"--n-bezier":y,"--n-circle-border":v,"--n-icon-color":w,"--n-content-font-size":p,"--n-content-text-color":c,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":b,"--n-title-font-weight":h,"--n-title-margin":m,"--n-title-text-color":a,"--n-icon-size":Vt(u)||g}}),o=t?Un("timeline-item",I(()=>{const{props:{size:i,iconSize:u}}=n,{type:s}=e;return`${i[0]}${u||"a"}${s[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:t?void 0:r,themeClass:o?.themeClass,onRender:o?.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:t,$slots:r}=this;return t?.(),A("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},A("div",{class:`${e}-timeline-item-timeline`},A("div",{class:`${e}-timeline-item-timeline__line`}),An(r.icon,o=>o?A("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},o):A("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),A("div",{class:`${e}-timeline-item-content`},An(r.header,o=>o||this.title?A("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),A("div",{class:`${e}-timeline-item-content__content`},Ps(r.default,()=>[this.content])),A("div",{class:`${e}-timeline-item-content__meta`},Ps(r.footer,()=>[this.time]))))}});function a5(){const e=be(kt,null);return I(()=>{if(e===null)return Dn;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,r=n?.common||Dn;return t?.common?Object.assign({},r,t.common):r})}const c5={common:{primaryColor:"#b51e1e",primaryColorHover:"#c03e3e",primaryColorPressed:"#9c3c3c",primaryColorSuppl:"#d57e7e",infoColor:"#bbb5ac",successColor:"#96c24e",warningColor:"#fed71a",errorColor:"#efafad",textColorBase:"#333",textColor1:"rgba(0, 0, 0, .9)",textColor2:"rgba(0, 0, 0, .82)",textColor3:"rgba(0, 0, 0, .6)",borderColor:"#d9d9d9",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}},d5={common:{primaryColor:"#8a0000",primaryColorHover:"#a00000",primaryColorPressed:"#6e0000",primaryColorSuppl:"#c20000",infoColor:"#9e968b",successColor:"#a9c478",warningColor:"#e6c84c",errorColor:"#e28886",textColorBase:"#ccc",textColor1:"rgba(255, 255, 255, .9)",textColor2:"rgba(255, 255, 255, .82)",textColor3:"rgba(255, 255, 255, .6)",bodyColor:"#1a1a1a",borderColor:"#4d4d4d",borderRadius:"4px",borderRadiusSmall:"2px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"14px"}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ir=typeof document<"u";function Wh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function f5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wh(e.default)}const Ae=Object.assign;function ts(e,n){const t={};for(const r in n){const o=n[r];t[r]=Gn(o)?o.map(e):e(o)}return t}const wo=()=>{},Gn=Array.isArray,qh=/#/g,h5=/&/g,p5=/\//g,g5=/=/g,b5=/\?/g,Vh=/\+/g,m5=/%5B/g,v5=/%5D/g,Gh=/%5E/g,x5=/%60/g,Zh=/%7B/g,y5=/%7C/g,Xh=/%7D/g,C5=/%20/g;function Vl(e){return encodeURI(""+e).replace(y5,"|").replace(m5,"[").replace(v5,"]")}function _5(e){return Vl(e).replace(Zh,"{").replace(Xh,"}").replace(Gh,"^")}function qs(e){return Vl(e).replace(Vh,"%2B").replace(C5,"+").replace(qh,"%23").replace(h5,"%26").replace(x5,"`").replace(Zh,"{").replace(Xh,"}").replace(Gh,"^")}function w5(e){return qs(e).replace(g5,"%3D")}function k5(e){return Vl(e).replace(qh,"%23").replace(b5,"%3F")}function S5(e){return e==null?"":k5(e).replace(p5,"%2F")}function jo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const E5=/\/$/,A5=e=>e.replace(E5,"");function rs(e,n,t="/"){let r,o={},i="",u="";const s=n.indexOf("#");let l=n.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=n.slice(0,l),i=n.slice(l+1,s>-1?s:n.length),o=e(i)),s>-1&&(r=r||n.slice(0,s),u=n.slice(s,n.length)),r=F5(r??n,t),{fullPath:r+(i&&"?")+i+u,path:r,query:o,hash:jo(u)}}function T5(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Zc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function D5(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&qr(n.matched[r],t.matched[o])&&Yh(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function qr(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Yh(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!z5(e[t],n[t]))return!1;return!0}function z5(e,n){return Gn(e)?Xc(e,n):Gn(n)?Xc(n,e):e===n}function Xc(e,n){return Gn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function F5(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=t.length-1,u,s;for(u=0;u<r.length;u++)if(s=r[u],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(u).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ho;(function(e){e.pop="pop",e.push="push"})(Ho||(Ho={}));var ko;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ko||(ko={}));function P5(e){if(!e)if(Ir){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),A5(e)}const $5=/^[^#]+#/;function I5(e,n){return e.replace($5,"#")+n}function R5(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const vu=()=>({left:window.scrollX,top:window.scrollY});function O5(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=R5(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Yc(e,n){return(history.state?history.state.position-n:-1)+e}const Vs=new Map;function M5(e,n){Vs.set(e,n)}function B5(e){const n=Vs.get(e);return Vs.delete(e),n}let L5=()=>location.protocol+"//"+location.host;function Jh(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let s=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(s);return l[0]!=="/"&&(l="/"+l),Zc(l,"")}return Zc(t,e)+r+o}function N5(e,n,t,r){let o=[],i=[],u=null;const s=({state:f})=>{const h=Jh(e,location),p=t.value,g=n.value;let m=0;if(f){if(t.value=h,n.value=f,u&&u===p){u=null;return}m=g?f.position-g.position:0}else r(h);o.forEach(b=>{b(t.value,p,{delta:m,type:Ho.pop,direction:m?m>0?ko.forward:ko.back:ko.unknown})})};function l(){u=t.value}function a(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return i.push(h),h}function c(){const{history:f}=window;f.state&&f.replaceState(Ae({},f.state,{scroll:vu()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:a,destroy:d}}function Jc(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?vu():null}}function j5(e){const{history:n,location:t}=window,r={value:Jh(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(l,a,c){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:L5()+e+l;try{n[c?"replaceState":"pushState"](a,"",f),o.value=a}catch(h){console.error(h),t[c?"replace":"assign"](f)}}function u(l,a){const c=Ae({},n.state,Jc(o.value.back,l,o.value.forward,!0),a,{position:o.value.position});i(l,c,!0),r.value=l}function s(l,a){const c=Ae({},o.value,n.state,{forward:l,scroll:vu()});i(c.current,c,!0);const d=Ae({},Jc(r.value,l,null),{position:c.position+1},a);i(l,d,!1),r.value=l}return{location:r,state:o,push:s,replace:u}}function H5(e){e=P5(e);const n=j5(e),t=N5(e,n.state,n.location,n.replace);function r(i,u=!0){u||t.pauseListeners(),history.go(i)}const o=Ae({location:"",base:e,go:r,createHref:I5.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function U5(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H5(e)}function K5(e){return typeof e=="string"||e&&typeof e=="object"}function Qh(e){return typeof e=="string"||typeof e=="symbol"}const ep=Symbol("");var Qc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Qc||(Qc={}));function Vr(e,n){return Ae(new Error,{type:e,[ep]:!0},n)}function bt(e,n){return e instanceof Error&&ep in e&&(n==null||!!(e.type&n))}const ed="[^/]+?",W5={sensitive:!1,strict:!1,start:!0,end:!0},q5=/[.+*?^${}()[\]/\\]/g;function V5(e,n){const t=Ae({},W5,n),r=[];let o=t.start?"^":"";const i=[];for(const a of e){const c=a.length?[]:[90];t.strict&&!a.length&&(o+="/");for(let d=0;d<a.length;d++){const f=a[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(q5,"\\$&"),h+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:b}=f;i.push({name:p,repeatable:g,optional:m});const v=b||ed;if(v!==ed){h+=10;try{new RegExp(`(${v})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+y.message)}}let w=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(w=m&&a.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),o+=w,h+=20,m&&(h+=-8),g&&(h+=-20),v===".*"&&(h+=-50)}c.push(h)}r.push(c)}if(t.strict&&t.end){const a=r.length-1;r[a][r[a].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const u=new RegExp(o,t.sensitive?"":"i");function s(a){const c=a.match(u),d={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",p=i[f-1];d[p.name]=h&&p.repeatable?h.split("/"):h}return d}function l(a){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of f)if(h.type===0)c+=h.value;else if(h.type===1){const{value:p,repeatable:g,optional:m}=h,b=p in a?a[p]:"";if(Gn(b)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Gn(b)?b.join("/"):b;if(!v)if(m)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);c+=v}}return c||"/"}return{re:u,score:r,keys:i,parse:s,stringify:l}}function G5(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function np(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=G5(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(nd(r))return 1;if(nd(o))return-1}return o.length-r.length}function nd(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Z5={type:0,value:""},X5=/[a-zA-Z0-9_]/;function Y5(e){if(!e)return[[]];if(e==="/")return[[Z5]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${a}": ${h}`)}let t=0,r=t;const o=[];let i;function u(){i&&o.push(i),i=[]}let s=0,l,a="",c="";function d(){a&&(t===0?i.push({type:0,value:a}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:a,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),a="")}function f(){a+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(a&&d(),u()):l===":"?(d(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:X5.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${a}"`),d(),u(),o}function J5(e,n,t){const r=V5(Y5(e.path),t),o=Ae(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Q5(e,n){const t=[],r=new Map;n=id({strict:!1,end:!0,sensitive:!1},n);function o(d){return r.get(d)}function i(d,f,h){const p=!h,g=rd(d);g.aliasOf=h&&h.record;const m=id(n,d),b=[g];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of y)b.push(rd(Ae({},g,{components:h?h.record.components:g.components,path:k,aliasOf:h?h.record:g})))}let v,w;for(const y of b){const{path:k}=y;if(f&&k[0]!=="/"){const T=f.record.path,_=T[T.length-1]==="/"?"":"/";y.path=f.record.path+(k&&_+k)}if(v=J5(y,f,m),h?h.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),p&&d.name&&!od(v)&&u(d.name)),tp(v)&&l(v),g.children){const T=g.children;for(let _=0;_<T.length;_++)i(T[_],v,h&&h.children[_])}h=h||v}return w?()=>{u(w)}:wo}function u(d){if(Qh(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function s(){return t}function l(d){const f=t8(d,t);t.splice(f,0,d),d.record.name&&!od(d)&&r.set(d.record.name,d)}function a(d,f){let h,p={},g,m;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Vr(1,{location:d});m=h.record.name,p=Ae(td(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&td(d.params,h.keys.map(w=>w.name))),g=h.stringify(p)}else if(d.path!=null)g=d.path,h=t.find(w=>w.re.test(g)),h&&(p=h.parse(g),m=h.record.name);else{if(h=f.name?r.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw Vr(1,{location:d,currentLocation:f});m=h.record.name,p=Ae({},f.params,d.params),g=h.stringify(p)}const b=[];let v=h;for(;v;)b.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:b,meta:n8(b)}}e.forEach(d=>i(d));function c(){t.length=0,r.clear()}return{addRoute:i,resolve:a,removeRoute:u,clearRoutes:c,getRoutes:s,getRecordMatcher:o}}function td(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function rd(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:e8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function e8(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function od(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function n8(e){return e.reduce((n,t)=>Ae(n,t.meta),{})}function id(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function t8(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;np(e,n[i])<0?r=i:t=i+1}const o=r8(e);return o&&(r=n.lastIndexOf(o,r-1)),r}function r8(e){let n=e;for(;n=n.parent;)if(tp(n)&&np(e,n)===0)return n}function tp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function o8(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Vh," "),u=i.indexOf("="),s=jo(u<0?i:i.slice(0,u)),l=u<0?null:jo(i.slice(u+1));if(s in n){let a=n[s];Gn(a)||(a=n[s]=[a]),a.push(l)}else n[s]=l}return n}function ud(e){let n="";for(let t in e){const r=e[t];if(t=w5(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Gn(r)?r.map(i=>i&&qs(i)):[r&&qs(r)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+t,i!=null&&(n+="="+i))})}return n}function i8(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Gn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const u8=Symbol(""),sd=Symbol(""),xu=Symbol(""),rp=Symbol(""),Gs=Symbol("");function so(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Nt(e,n,t,r,o,i=u=>u()){const u=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const a=f=>{f===!1?l(Vr(4,{from:t,to:n})):f instanceof Error?l(f):K5(f)?l(Vr(2,{from:n,to:f})):(u&&r.enterCallbacks[o]===u&&typeof f=="function"&&u.push(f),s())},c=i(()=>e.call(r&&r.instances[o],n,t,a));let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(f=>l(f))})}function os(e,n,t,r,o=i=>i()){const i=[];for(const u of e)for(const s in u.components){let l=u.components[s];if(!(n!=="beforeRouteEnter"&&!u.instances[s]))if(Wh(l)){const c=(l.__vccOpts||l)[n];c&&i.push(Nt(c,t,r,u,s,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${s}" at "${u.path}"`);const d=f5(c)?c.default:c;u.mods[s]=c,u.components[s]=d;const h=(d.__vccOpts||d)[n];return h&&Nt(h,t,r,u,s,o)()}))}}return i}function ld(e){const n=be(xu),t=be(rp),r=I(()=>{const l=We(e.to);return n.resolve(l)}),o=I(()=>{const{matched:l}=r.value,{length:a}=l,c=l[a-1],d=t.matched;if(!c||!d.length)return-1;const f=d.findIndex(qr.bind(null,c));if(f>-1)return f;const h=ad(l[a-2]);return a>1&&ad(c)===h&&d[d.length-1].path!==h?d.findIndex(qr.bind(null,l[a-2])):f}),i=I(()=>o.value>-1&&c8(t.params,r.value.params)),u=I(()=>o.value>-1&&o.value===t.matched.length-1&&Yh(t.params,r.value.params));function s(l={}){if(a8(l)){const a=n[We(e.replace)?"replace":"push"](We(e.to)).catch(wo);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:i,isExactActive:u,navigate:s}}function s8(e){return e.length===1?e[0]:e}const l8=ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ld,setup(e,{slots:n}){const t=Xr(ld(e)),{options:r}=be(xu),o=I(()=>({[cd(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[cd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&s8(n.default(t));return e.custom?i:A("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),op=l8;function a8(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function c8(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!Gn(o)||o.length!==r.length||r.some((i,u)=>i!==o[u]))return!1}return!0}function ad(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const cd=(e,n,t)=>e??n??t,d8=ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=be(Gs),o=I(()=>e.route||r.value),i=be(sd,0),u=I(()=>{let a=We(i);const{matched:c}=o.value;let d;for(;(d=c[a])&&!d.components;)a++;return a}),s=I(()=>o.value.matched[u.value]);je(sd,I(()=>u.value+1)),je(u8,s),je(Gs,o);const l=te();return sn(()=>[l.value,s.value,e.name],([a,c,d],[f,h,p])=>{c&&(c.instances[d]=a,h&&h!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),a&&c&&(!h||!qr(c,h)||!f)&&(c.enterCallbacks[d]||[]).forEach(g=>g(a))},{flush:"post"}),()=>{const a=o.value,c=e.name,d=s.value,f=d&&d.components[c];if(!f)return dd(t.default,{Component:f,route:a});const h=d.props[c],p=h?h===!0?a.params:typeof h=="function"?h(a):h:null,m=A(f,Ae({},p,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return dd(t.default,{Component:m,route:a})||m}}});function dd(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const f8=d8;function h8(e){const n=Q5(e.routes,e),t=e.parseQuery||o8,r=e.stringifyQuery||ud,o=e.history,i=so(),u=so(),s=so(),l=of($t);let a=$t;Ir&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ts.bind(null,$=>""+$),d=ts.bind(null,S5),f=ts.bind(null,jo);function h($,oe){let F,se;return Qh($)?(F=n.getRecordMatcher($),se=oe):se=$,n.addRoute(se,F)}function p($){const oe=n.getRecordMatcher($);oe&&n.removeRoute(oe)}function g(){return n.getRoutes().map($=>$.record)}function m($){return!!n.getRecordMatcher($)}function b($,oe){if(oe=Ae({},oe||l.value),typeof $=="string"){const D=rs(t,$,oe.path),O=n.resolve({path:D.path},oe),N=o.createHref(D.fullPath);return Ae(D,O,{params:f(O.params),hash:jo(D.hash),redirectedFrom:void 0,href:N})}let F;if($.path!=null)F=Ae({},$,{path:rs(t,$.path,oe.path).path});else{const D=Ae({},$.params);for(const O in D)D[O]==null&&delete D[O];F=Ae({},$,{params:d(D)}),oe.params=d(oe.params)}const se=n.resolve(F,oe),ke=$.hash||"";se.params=c(f(se.params));const x=T5(r,Ae({},$,{hash:_5(ke),path:se.path})),C=o.createHref(x);return Ae({fullPath:x,hash:ke,query:r===ud?i8($.query):$.query||{}},se,{redirectedFrom:void 0,href:C})}function v($){return typeof $=="string"?rs(t,$,l.value.path):Ae({},$)}function w($,oe){if(a!==$)return Vr(8,{from:oe,to:$})}function y($){return _($)}function k($){return y(Ae(v($),{replace:!0}))}function T($){const oe=$.matched[$.matched.length-1];if(oe&&oe.redirect){const{redirect:F}=oe;let se=typeof F=="function"?F($):F;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=v(se):{path:se},se.params={}),Ae({query:$.query,hash:$.hash,params:se.path!=null?{}:$.params},se)}}function _($,oe){const F=a=b($),se=l.value,ke=$.state,x=$.force,C=$.replace===!0,D=T(F);if(D)return _(Ae(v(D),{state:typeof D=="object"?Ae({},ke,D.state):ke,force:x,replace:C}),oe||F);const O=F;O.redirectedFrom=oe;let N;return!x&&D5(r,se,F)&&(N=Vr(16,{to:O,from:se}),ee(se,se,!0,!1)),(N?Promise.resolve(N):z(O,se)).catch(M=>bt(M)?bt(M,2)?M:ye(M):Q(M,O,se)).then(M=>{if(M){if(bt(M,2))return _(Ae({replace:C},v(M.to),{state:typeof M.to=="object"?Ae({},ke,M.to.state):ke,force:x}),oe||O)}else M=P(O,se,!0,C,ke);return j(O,se,M),M})}function E($,oe){const F=w($,oe);return F?Promise.reject(F):Promise.resolve()}function S($){const oe=pe.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext($):$()}function z($,oe){let F;const[se,ke,x]=p8($,oe);F=os(se.reverse(),"beforeRouteLeave",$,oe);for(const D of se)D.leaveGuards.forEach(O=>{F.push(Nt(O,$,oe))});const C=E.bind(null,$,oe);return F.push(C),$e(F).then(()=>{F=[];for(const D of i.list())F.push(Nt(D,$,oe));return F.push(C),$e(F)}).then(()=>{F=os(ke,"beforeRouteUpdate",$,oe);for(const D of ke)D.updateGuards.forEach(O=>{F.push(Nt(O,$,oe))});return F.push(C),$e(F)}).then(()=>{F=[];for(const D of x)if(D.beforeEnter)if(Gn(D.beforeEnter))for(const O of D.beforeEnter)F.push(Nt(O,$,oe));else F.push(Nt(D.beforeEnter,$,oe));return F.push(C),$e(F)}).then(()=>($.matched.forEach(D=>D.enterCallbacks={}),F=os(x,"beforeRouteEnter",$,oe,S),F.push(C),$e(F))).then(()=>{F=[];for(const D of u.list())F.push(Nt(D,$,oe));return F.push(C),$e(F)}).catch(D=>bt(D,8)?D:Promise.reject(D))}function j($,oe,F){s.list().forEach(se=>S(()=>se($,oe,F)))}function P($,oe,F,se,ke){const x=w($,oe);if(x)return x;const C=oe===$t,D=Ir?history.state:{};F&&(se||C?o.replace($.fullPath,Ae({scroll:C&&D&&D.scroll},ke)):o.push($.fullPath,ke)),l.value=$,ee($,oe,F,C),ye()}let q;function G(){q||(q=o.listen(($,oe,F)=>{if(!we.listening)return;const se=b($),ke=T(se);if(ke){_(Ae(ke,{replace:!0,force:!0}),se).catch(wo);return}a=se;const x=l.value;Ir&&M5(Yc(x.fullPath,F.delta),vu()),z(se,x).catch(C=>bt(C,12)?C:bt(C,2)?(_(Ae(v(C.to),{force:!0}),se).then(D=>{bt(D,20)&&!F.delta&&F.type===Ho.pop&&o.go(-1,!1)}).catch(wo),Promise.reject()):(F.delta&&o.go(-F.delta,!1),Q(C,se,x))).then(C=>{C=C||P(se,x,!1),C&&(F.delta&&!bt(C,8)?o.go(-F.delta,!1):F.type===Ho.pop&&bt(C,20)&&o.go(-1,!1)),j(se,x,C)}).catch(wo)}))}let R=so(),X=so(),H;function Q($,oe,F){ye($);const se=X.list();return se.length?se.forEach(ke=>ke($,oe,F)):console.error($),Promise.reject($)}function xe(){return H&&l.value!==$t?Promise.resolve():new Promise(($,oe)=>{R.add([$,oe])})}function ye($){return H||(H=!$,G(),R.list().forEach(([oe,F])=>$?F($):oe()),R.reset()),$}function ee($,oe,F,se){const{scrollBehavior:ke}=e;if(!Ir||!ke)return Promise.resolve();const x=!F&&B5(Yc($.fullPath,0))||(se||!F)&&history.state&&history.state.scroll||null;return Zo().then(()=>ke($,oe,x)).then(C=>C&&O5(C)).catch(C=>Q(C,$,oe))}const ie=$=>o.go($);let B;const pe=new Set,we={currentRoute:l,listening:!0,addRoute:h,removeRoute:p,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:g,resolve:b,options:e,push:y,replace:k,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:i.add,beforeResolve:u.add,afterEach:s.add,onError:X.add,isReady:xe,install($){const oe=this;$.component("RouterLink",op),$.component("RouterView",f8),$.config.globalProperties.$router=oe,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),Ir&&!B&&l.value===$t&&(B=!0,y(o.location).catch(ke=>{}));const F={};for(const ke in $t)Object.defineProperty(F,ke,{get:()=>l.value[ke],enumerable:!0});$.provide(xu,oe),$.provide(rp,rf(F)),$.provide(Gs,l);const se=$.unmount;pe.add($),$.unmount=function(){pe.delete($),pe.size<1&&(a=$t,q&&q(),q=null,l.value=$t,B=!1,H=!1),se()}}};function $e($){return $.reduce((oe,F)=>oe.then(()=>S(F)),Promise.resolve())}return we}function p8(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let u=0;u<i;u++){const s=n.matched[u];s&&(e.matched.find(a=>qr(a,s))?r.push(s):t.push(s));const l=e.matched[u];l&&(n.matched.find(a=>qr(a,l))||o.push(l))}return[t,r,o]}function g8(){return be(xu)}const b8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},m8=ae({name:"BookOutline",render:function(n,t){return Ue(),cn("svg",b8,t[0]||(t[0]=[ue("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1)]))}}),v8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},x8=ae({name:"BriefcaseOutline",render:function(n,t){return Ue(),cn("svg",v8,t[0]||(t[0]=[ue("rect",{x:"32",y:"128",width:"448",height:"320",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 240H32"},null,-1),ue("path",{d:"M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),y8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},C8=ae({name:"HomeOutline",render:function(n,t){return Ue(),cn("svg",y8,t[0]||(t[0]=[ue("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1)]))}}),_8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},w8=ae({name:"InformationCircleOutline",render:function(n,t){return Ue(),cn("svg",_8,t[0]||(t[0]=[ue("path",{d:"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M220 220h32v116"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 340h88"},null,-1),ue("path",{d:"M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",fill:"currentColor"},null,-1)]))}}),k8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},S8=ae({name:"LinkOutline",render:function(n,t){return Ue(),cn("svg",k8,t[0]||(t[0]=[ue("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1)]))}}),E8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},A8=ae({name:"SettingsOutline",render:function(n,t){return Ue(),cn("svg",E8,t[0]||(t[0]=[ue("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),T8={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},D8=ae({name:"WineOutline",render:function(n,t){return Ue(),cn("svg",T8,t[0]||(t[0]=[ue("path",{d:"M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M256 272v160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 432H160"},null,-1),ue("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M112 160h288"},null,-1)]))}}),z8=`#  git基本操作\r
\r
1. 安装完成后\r
\r
   配置你的用户名和email\r
\r
2. 使用git\r
\r
   git status查看git的状态\r
\r
   git init初始化git\r
\r
3. 文件状态:\r
\r
   文件---|未跟踪\r
\r
   ​        ---|已跟踪---|未修改:两边文件不一样\r
\r
   ​                          ---|修改:磁盘和git库里的文件一样\r
\r
   ​                           ---|暂存:修改和保存,未提交到仓库\r
\r
   把文件git add xxx就是去跟踪它了(暂存)\r
\r
   使用git commit就是把他提交到git仓库,就成未修改的状态了\r
\r
   git commit -a -m "xxxx"提交所有未修改的文件\r
\r
   去修改文件,未修改就成修改了 \r
\r
\r
\r
\r
####  vscode和git\r
\r
vscode里面有一个git的图形化界面，更方便使用\r
\r
1. git restore 文件路径\r
\r
   重置文件，恢复上一个的快照\r
\r
2. git rm 文件路径\r
\r
   删除文件  \r
\r
   删除文件不能删除已经修改的文件 \r
\r
   使用git rm xxx -f强制删除，已经删除的文件可以使用restore强制还原git restore --staged xxx，因为这个文件已经被暂存到本地的暂存库里面\r
\r
3. git mv from  to \r
\r
   from和to是文件路径\r
\r
   移动文件和重命名文件\r
\r
   ​\r
\r
####  分支\r
\r
1. 使用git log打印自己的提交日志，可以检查自己的提交情况\r
\r
   git在存储文件的时候，每一次代码的提交都会创建一个与之对应的节点，git就是通过这种节点来纪录代码的状态，节点构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为master\r
\r
2.  git breach 查看分支\r
\r
3. git breach 名字  创建分支\r
\r
4. git breach -d 名字 删除分支\r
\r
5. git switch 名字  切换分支 \r
\r
**作用**\r
\r
不想在源代码上直接修改，不要在主分支上进行修改，在另外一个分支上进行处理，更新完成后再进行合并(自己的分支合并到主分支)\r
\r
![74618961461](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746189614618.png)\r
\r
> 从公司拉取代码下来的时候,先创建分支,在自己的分支上写代码,完成各自的任务\r
\r
git merge 子分支\r
\r
---|在目前处于主分支的时候,主分支合并子分支,当代码是增加节点的时候,可以快速合并,当不一样的时候,可能自动合并失败,就需要手动处理(覆盖和并存)\r
\r
![不一样的](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746190653763.png)\r
\r
![74619083534](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746190835343.png)\r
\r
显示分支的插件GitLens\r
\r
\r
\r
冲突的时候,当前主分支的代码和次要分支的代码\r
\r
---|然后你再去删除子分支 \r
\r
\r
\r
####  变基（rebase）\r
\r
 在开发中除了使用merge合并分支，还能使用变基合并分支\r
\r
使用merge合并分支时，在提交记录中会将所有的分支和分支合并的过程全部显示出来，这样当项目比较复杂的时候，开发过程比较波折时，需要反复创建和合并删除分支\r
\r
合并分支（记录不会被删掉）\r
\r
![74623425307](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746234253075.png)\r
\r
\r
\r
变基（没用多余的分支记录）\r
\r
![74623432906](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746234329060.png)\r
\r
发起变基的时候\r
\r
git rebase xxx 把当前的分支的基底变成xxx \r
\r
1. git会找到两条分支的最近祖先\r
2. 对比当前分支相对于祖先的历史提交，并把他们提取到存储在一个临时文件里面\r
3. 将当前部分指向目标基地\r
4. 以当前基地开始，重新执行历史操作\r
\r
变基和merge对于合并分支的结果是一样的，但变基会使代码提交更加简洁，大部分情况下，变基和合并是可以呼唤的，但提交到远程库，不要使用变基进行操作\r
\r
\r
\r
\r
\r
\r
\r
####  远程仓库remote\r
\r
和本地库不同的是，远程库可以被多人访问而已，上面的所有操作都是在本地仓库实现的，在开发中不是这样做的，通常公司会搭建git服务器，或者购买公共的私有库，学习阶段直接使用公共仓库就好了（使用github、gitee）\r
\r
> git是代码操作工具,github是远程git库\r
\r
![74623978966](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746239789666.png)\r
\r
创建一个新的仓库和将已经存在的本地库上传到github\r
\r
> git remote add origin xxxxurl\r
>\r
> git branch -H main\r
>\r
> //修改当前分支的名字为main\r
>\r
> git push -u origin main\r
>\r
> 将本地的代码上传到origin的main分支\r
\r
\r
\r
\r
\r
####  远程库操作\r
\r
\`\`\`shell\r
git remote\r
#列出当前的关联的远程库\r
git remote add 仓库名 url\r
#关联远程仓库 \r
git remote remove 仓库名\r
#删除远程库\r
git push -h 仓库名 分支\r
#向远程库推送代码\r
git clone url\r
#克隆远程库，产生压缩包\r
\r
#如果本地库版本低于远程库，无法将代码推送到远程库上面去\r
git fetch\r
#要想推送成功，要先去更新新的代码，fetch它会从远程库下载所有代码，但是它不会把代码和我们当前分支自动合并需要你去处理这些错误\r
\r
git pull\r
#拉取代码，会覆盖你的本地代码（自动合并）\r
\`\`\`\r
\r
注意：推送代码之前一定要从远程库先拉取最新的代码 \r
\r
\r
\r
\r
\r
\r
\r
####  标签\r
\r
1. git节点回到以前的节点，使用：git switch 节点id\r
\r
2. ![74649474862](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746494748629.png)\r
\r
   头head对应着一个分支，必须指向一个分支\r
\r
   当head没有指向某个分支的头部时，就是出现了分离头指针（head detached）分离头指针也可以操纵代买，但是不能出现在任何分支下，所以在分离头指针的情况下，不要操作代码\r
\r
   如果一定要在分离头指针下进行代码操作，则可以选择创建分支后操作\r
\r
   git switch - c <分支名> <提交id>\r
\r
3. 标签可以为提交记录设置节点说明，方便识别出不同的开发节点\r
\r
   git tag查询标签的方法\r
\r
   git tag xxx(版本) 为当前的节点打上一个标签\r
\r
   git tag xxx(版本) id 给特定版本打\r
\r
4. 有了标签以后\r
\r
   git switch - c <分支名> <版本>\r
\r
   可以这样去在分离指针头下操作\r
\r
   也可以把标签推到远程库\r
\r
   git push 库名 标签名\r
\r
   git push 库名 --tags    推送所有标签\r
\r
   git tag -d 标签名  删除标签\r
\r
   git push -d 标签名   删除远程库标签\r
\r
\r
\r
\r
\r
####  gitigone\r
\r
- 默认情况下，git会监视项目中的所有内容，但是有些内容比如nide_modules目录里面的内容,我们不希望它被git管理,我们可以在项目目录里添加一个.gitigone文件,来设置那些需要给被git忽略的文件\r
\r
![74661309753](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git基本操作.assets\\1746613097534.png)\r
\r
#是里面的注释文件\r
\r
\r
\r
\r
\r
####  gh-pages\r
\r
静态网页部署\r
\r
\r
\r
####  docisaurus静态网页生成\r
\r
和vitepress同理\r
\r
别着急，这个问题很常见，特别是克隆一些复杂的开源项目时。我们来分析一下，然后一步步解决它。\r
\r
\r
\r
\r
\r
git子模块的问题\r
\r
### 问题分析：为什么会报错？\r
\r
你运行 \`npm start\` 时，Vite 尝试启动开发服务器，但失败了。错误日志的核心是这一句：\r
\r
\`X [ERROR] Could not resolve "../../../../src/_common/docs/plugins/changelog-to-json"\`\r
\r
- **什么意思？**：Vite 在加载它的配置文件（\`vite.config.js\`）时，需要一个位于 \`src/_common/docs/plugins/\` 目录下的文件，但是它找不到这个文件。\r
- **为什么找不到？**：\`tdesign-mobile-vue\` 这个项目非常典型，它使用了一种叫做 **Git Submodule (Git 子模块)** 的技术来管理一部分公共代码（比如文档、通用插件等）。这个 \`src/_common\` 目录很可能就是一个子模块。\r
\r
当你使用 \`git clone\` 克隆项目时，默认情况下**不会**下载这些子模块的内容，只会留下一个空的文件夹占位。因此，当项目试图访问子模块里的文件时，就会因为文件不存在而报错。\r
\r
**简单来说：你下载的项目代码不完整，缺少了一部分依赖的“子模块”代码。**\r
\r
------\r
\r
### 解决方案：怎么办？\r
\r
你需要做的就是去下载这部分缺失的子模块代码。请按照以下步骤操作：\r
\r
#### 第 1 步：确保你安装了 Git\r
\r
这个操作依赖 Git 命令。请先确保你的电脑上安装了 Git。可以在终端里运行 \`git --version\` 来检查。如果没有安装，请先[下载并安装 Git](https://git-scm.com/downloads)。\r
\r
#### 第 2 步：初始化并更新子模块\r
\r
1. 打开你的终端（比如 PowerShell 或 CMD）。\r
\r
2. 使用 \`cd\` 命令进入到你的项目根目录 ( \`C:\\...tdesign-mobile-vue\` )。\r
\r
3. 运行下面这条命令。它会自动查找项目配置好的子模块并把它们下载下来：\r
\r
   Bash\`git submodule update --init --recursive\`\r
\r
   - \`--init\`：初始化本地的子模块配置文件。\r
   - \`--recursive\`：如果子模块里面还嵌套了其他子模块，也一并下载。\r
\r
   执行这个命令后，你应该能看到它在下载一些东西。完成后，你可以检查一下项目目录，现在 \`src/_common\` 文件夹里应该有文件了。`,F8=Object.freeze(Object.defineProperty({__proto__:null,default:z8},Symbol.toStringTag,{value:"Module"})),P8=`#  开源协议\r
\r
开源软件的定义由**开放源代码促进会（OSI）**给出，是至今为止广泛认同的标准。OSI 的定义将开源软件描述为：\r
\r
> **开源软件**是指其**源代码可被自由查阅、修改和分发**的软件，且必须满足以下所有条件——\r
\r
####  **官方定义：OSI 的黄金标准**[¶](https://oss.hust.openatom.club/ch1/sec1/what-is-oss/#osi)\r
\r
**开放源代码促进会（OSI）**提出的标准为我们提供了一个清晰的框架，帮助我们区分开源与闭源软件。开源软件的核心特点是：开放源代码，允许自由使用、修改、分发，且这种自由是无条件的。\r
\r
![74882303798](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823037988.png)\r
\r
####  运行规则\r
\r
事实上，开源的蓬勃发展，恰恰建立在一套相对完善且不断演进的法律框架和社区规范之上。其中，最核心的就是**开源许可证 (Open Source Licenses)**。它们就像开源世界的“交通规则”，规定了代码的使用者和贡献者各自拥有哪些权利，需要履行哪些义务。不理解这些规则，盲目地使用或贡献开源代码，轻则可能引发不必要的麻烦，重则甚至可能卷入法律纠纷，让你辛辛苦苦的成果付诸东流。\r
\r
所以，想要在开源的世界里愉快地玩耍，不仅要会写代码，还得懂点“法”。\r
\r
\r
\r
这些许可证种类繁多，但根据其核心精神和限制程度，大致可以分为两大派别：\r
\r
- **“宽松派”：permissive licenses** 这类许可证，顾名思义，对使用者非常“宽容大度”。它们通常只要求你在使用或分发代码时，保留原始的版权声明和许可证文本。至于你怎么用，用到哪里（比如集成到你自己的商业闭源软件里），它们基本不怎么干涉。\r
  - **代表选手**：[**MIT 许可证**](https://opensource.org/license/mit)（可能是最简洁最宽松的了）、**Apache 许可证 2.0**（除了宽松，还特别考虑了专利问题）、**BSD 系列许可证**（也有不同版本，但大体上比较自由）。\r
  - **核心思想**：最大限度地促进代码的传播和使用，哪怕是被用在商业产品里也没关系。\r
- **“传承派”：copyleft licenses (著佐权许可证)** 这一派的理念就比较“硬核”了。它们的核心思想是利用版权法来确保软件及其衍生作品**永远保持开源和自由**。也就是说，如果你修改了基于这类许可证的代码，或者将其与你自己的代码结合形成了新的软件，那么当你分发这个新软件时，通常也必须以相同或兼容的著佐权许可证来发布，并提供相应的源代码。\r
  - **代表选手**：大名鼎鼎的 **GNU 通用公共许可证 (GPL)** 及其变种（如 LGPL, AGPL）。GPL 以其强烈的“传染性”著称——一旦你的项目里用了一段 GPL 的代码并进行分发，那么你的整个项目很可能都得遵循 GPL 的规定。\r
  - **核心思想**：自由的精神需要被“传染”和“继承”，确保软件及其改进版本能够持续惠及整个社区。\r
\r
![74882381166](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823811661.png)\r
\r
![74882385593](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748823855935.png)\r
\r
做好开源协议的准备\r
\r
![74882508544](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825085444.png)\r
\r
在github新建LICENSE文件，可以选择你需要的许可证进行添加\r
\r
![74882506232](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825062327.png)\r
\r
\r
\r
####  提交规范\r
\r
- header\r
\r
![74882552140](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825521406.png)\r
\r
docs:对文档的变动，包括注释和readme文件的修改\r
\r
sync：同步主线或者分支的bug\r
\r
style：对代码格式的变动，这些变动不影响代码的运行，通常包括空格，缩进，换行等风格的调制\r
\r
![74882581300](C:\\Users\\zxh\\Desktop\\前端\\GIT\\git提交规范.assets\\1748825813008.png)\r
\r
- body\r
\r
  描述，清晰一点\r
\r
- footer\r
\r
  footer 部分只用于两种情况。\r
\r
  不兼容变动\r
\r
  *如果当前代码与上一个版本不兼容, 则Footer部分以BREAKING CHANGE开头, 后面是对变动的描述、以及变动理由和迁移方法。*\r
\r
  关闭 Issue\r
\r
  *如果当前commit针对某个 issue, 那么可以在 Footer 部分关闭这个 issue*\r
\r
  ​`,$8=Object.freeze(Object.defineProperty({__proto__:null,default:P8},Symbol.toStringTag,{value:"Module"})),I8=`# go语言进阶学习\r
\r
- **web开发简介**\r
\r
  Go的基础net/http包提供了基础的路由\r
\r
  web框架大致分为router盒mvc框架\r
\r
  ​\r
\r
`,R8=Object.freeze(Object.defineProperty({__proto__:null,default:I8},Symbol.toStringTag,{value:"Module"})),O8=`####  同构渲染ssr\r
\r
![75550679277](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755506792775.png)\r
\r
服务端渲染，客户端渲染，同构渲染（一部分服务端，一部分客户端）\r
\r
![75550811012](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508110120.png)\r
\r
![75550836328](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508363289.png)\r
\r
这时候的请求是一步步来的，按需使用\r
\r
 ![75550871013](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755508710134.png)\r
\r
首屏渲染速度需要优化，搜索引擎第一次请求网页，分析网页内容，给别人搜索，客户端渲染时，搜索引擎第一次拿到的是空的页面，不利于SEO，网站不好被搜索引擎记录\r
\r
**相应的框架就是vue react等**\r
\r
![75550904108](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755509041087.png)\r
\r
第一次请求给完整的页面，后面的请求都是用ajax进行渲染\r
\r
什么时候使用同步渲染：\r
\r
项目对外，需要被搜索，且首屏渲染等\r
\r
的时候考虑使用同步渲染\r
\r
\r
\r
####  开始\r
\r
直接下载或者克隆\r
\r
![75552518356](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525183566.png)\r
\r
npm run dev -- -o\r
\r
是开发服务器的启动命令\r
\r
\r
\r
####  基本路由\r
\r
![75552563939](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525639395.png)\r
\r
根组件哪里挖了一个路由出口：nuxt-page组件\r
\r
 ![75552578543](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755525785437.png)\r
\r
简单的路由设置\r
\r
在路由目录下创建index.vue可以当成一个默认路由,在访问文件夹的时候使用\r
\r
**父子组件**\r
\r
![75552635979](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755526359799.png)\r
\r
![75552637248](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755526372483.png)\r
\r
  \r
\r
\r
\r
####  路由跳转\r
\r
1. 使用标签跳转\r
\r
![75557708036](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755577080365.png)\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <h1>我是根组件</h1>\r
    <nuxt-link to="/users">用户-列表</nuxt-link>\r
    <nuxt-link to="/users/create-or-edit">用户-添加或更新</nuxt-link>\r
    <nuxt-link to="/about">关于</nuxt-link>\r
    <nuxt-link to="/roles/admin">角色-管理员</nuxt-link>\r
    <nuxt-link to="/roles/normal">角色-普通用户</nuxt-link>\r
    \r
    <!-- \r
  		nuxt-link 会被编译成 a 标签, 但是不推荐直接使用 a 标签\r
    	直接用 a 标签，点击会刷新跳转，相当于一次全新的向服务端发起的请求\r
    	使用 nuxt-link 是浏览器端本地切换页面，即SPA\r
  	-->\r
    <nuxt-page />\r
  </div>\r
</template>\r
\r
<script setup>\r
<\/script>\r
\r
<style>\r
  /* nuxt-link 会被编译成 a 标签 */\r
	a { margin: 20px; }\r
</style>\r
\`\`\`\r
\r
推荐组件有一个根标签\r
\r
2. 自定义路由参数\r
\r
   ![75557965227](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755579652276.png)\r
\r
   query也是这样取出来\r
\r
3. 自定义插件\r
\r
   ![75558081894](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755580818941.png)\r
\r
路由匹配失败等错误, 可以在项目根目录下创建 error.vue\r
\r
中间件\r
\r
![75558349011](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583490110.png)\r
\r
![75558350228](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583502284.png)\r
\r
\r
\r
####  使用组件\r
\r
![75558132420](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755581324201.png)\r
\r
三种使用方法:\r
\r
在你隔壁的,需要你引入\r
\r
在components下的,不用引入,但要区分文件夹和非文件夹,所以要用大小驼峰,有文件夹的使用驼峰\r
\r
\r
\r
\r
\r
####  布局处理\r
\r
![75558357197](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583571979.png)\r
\r
![75558355683](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755583556834.png)\r
\r
页面默认布局\r
\r
\r
\r
####  SEO的配置\r
\r
在nuxt.config.ts进行相关的配置\r
\r
![75577216594](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755772165946.png)\r
\r
也可以在vue文件进行设置\r
\r
![75577310168](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773101685.png)\r
\r
\r
\r
还有其他设置\r
\r
![75577329967](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773299676.png)\r
\r
  或者用动态标题\r
\r
![75577371923](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755773719235.png)\r
\r
动态改变\r
\r
> 上面的一些配置可能有冲突,注意删除\\\r
\r
\r
\r
####  静态资源的访存\r
\r
> public目录:存放的内容相当于服务器的根目录去访问\r
>\r
> assets:构建工具会去处理的内容\r
\r
1. 访问public\r
\r
   ![75577408923](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774089236.png)\r
\r
2. 在assets\r
\r
   ![75577417514](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774175143.png)\r
\r
   要用构建工具就用这个\r
\r
3. 使用差别\r
\r
   ![75577486830](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755774868307.png)\r
\r
\r
\r
\r
\r
\r
\r
####  配置环境变量\r
\r
![75583615487](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755836154878.png)\r
\r
定义环境变量\r
\r
![75583616837](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755836168377.png)\r
\r
这样拿到相关的值\r
\r
 .env文件的值会覆盖你的nuxt.config.ts文件\r
\r
  ![75583714664](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837146644.png)\r
\r
在pbilic里面执行的值浏览器可以看到,通过isServer在浏览器和服务器不同的值来判断当前的环境\r
\r
也可以在app.config.ts里面设置环境变量\r
\r
![75583725868](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837258684.png)\r
\r
然后取值\r
\r
![75583726699](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755837266997.png)\r
\r
\r
\r
\r
\r
####  获取数据\r
\r
![75583821682](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755838216824.png)\r
\r
![75583843519](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755838435195.png)\r
\r
nuxt框架提供了其他方式去发请求\r
\r
这个是nuxt3调用http调用的首选方式\r
\r
![75584017729](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755840177296.png)\r
\r
只是下面那个多了一个请求的说明\r
\r
 ![75584137262](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755841372621.png)\r
\r
使用解构语法可以解构这几个值\r
\r
**带lazy的请求**\r
\r
不会阻塞在一起，会先返回\r
\r
1. 使用useFetch请求数据\r
\r
![75584186443](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755841864436.png)\r
\r
![75584245499](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755842454994.png)\r
\r
\r
\r
token可以在headers里面设置，也能在拦截器option里面的authorization里面设置\r
\r
\r
\r
####  nuxt也能编写后端的代码\r
\r
服务端\r
\r
> 在server/api/aaaa.ts\r
\r
请求对应的地址就可以了,一般在NUxt开发里面,是请求相关的后端服务器\r
\r
![75595041566](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950415662.png)\r
\r
写出~/server/routers/文件下面,就不用写api了\r
\r
也可以写成server/api/xxx/ss.ts\r
\r
或者是变化的值,路由传参\r
\r
![75595085104](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950851040.png)\r
\r
![75595099952](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950999520.png)\r
\r
实际拿到的age\r
\r
前端\r
\r
![75595034024](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755950340242.png)\r
\r
\r
\r
请求方式\r
\r
通过更改文件名进行请求方式的改变\r
\r
![75595548513](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755955485139.png)\r
\r
 拿到请求数据的body\r
\r
![75595552681](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755955526814.png)\r
\r
\r
\r
写一个api/[...].ts可以让前端匹配匹配不到的路由\r
\r
**中间件**\r
\r
![75595759320](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755957593201.png)\r
\r
在nuxt服务端也能调用redis等数据库来传输资源\r
\r
\r
\r
\r
\r
####  状态管理\r
\r
![75595805196](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1755958051969.png)\r
\r
写在composables/states.ts下面的,自带抓状态管理\r
\r
在nuxt也能使用pinia做状态管理\r
\r
\r
\r
####  自动导入\r
\r
很多ref和computed和一些工具函数在nuxt可以自动导入\r
\r
在配置文件里面可以关掉\r
\r
\r
\r
\r
\r
\r
\r
####  构建nuxt\r
\r
  直接build\r
\r
然后node允许index。mjs页面\r
\r
**node  .output/server/index.mjs**\r
\r
端口和地址可以通过 process.env 配置, 但没必要, 不要纠结\r
\r
\r
\r
或者使用PM2，一直运行\r
\r
1. 安装 pm2\r
\r
npm  i  pm2  -g      // 可能需要管理员权限\r
\r
pm2  -v\r
\r
![75601212132](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756012121329.png)\r
\r
\r
\r
####  路由渲染策略\r
\r
\`\`\`javascript\r
export default defineNuxtConfig({\r
  routeRules: {\r
    '/blog/**': { swr: true },  // Static page generated on-demand, revalidates in background\r
    '/articles/**': { static: true },   // Static page generated on-demand once\r
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },   // 设置响应头信息\r
    '/admin/**': { ssr: false },  // Render these routes with SPA\r
    // Add cors headers\r
    '/api/v1/**': { cors: true },\r
    // Add redirect headers\r
    '/old-page': { redirect: '/new-page' },\r
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }\r
  }\r
})\r
\r
\`\`\`\r
\r
简短的配置\r
\r
\`\`\`javascript\r
export default defineNuxtConfig({\r
  routes: {\r
    '/': { prerender: true },         // 每一次构建时，都重新预渲染页面 (透过 Builder),常用的页面数据不变化的可以变成静态渲染\r
    '/blog/*': { static: true },      // 接收到一个请求时，页面依照需求重新渲染页面 (透过 Lambda)\r
    '/stats/*': { swr: '10 min' },    // 接收到一个请求时，10 分钟的快取缓存过期后，将会再次的重新取得数据进行渲染 (透过 Lambda)\r
    '/admin/*': { ssr: false },       // 仅在客户端渲染\r
    '/react/*': { redirect: '/vue' }, // 路由重定向,没找到相关路由的时候跳转\r
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },   // 设置响应头信息\r
  }\r
})\r
\`\`\`\r
\r
在nuxt.config.js里面写这些,这里写了客户端渲染admin文件夹的内容,服务端不会渲染里面的内容,而是让客户端去请求\r
\r
不同路径有不同的策略\r
\r
**取消服务端渲染**\r
\r
![75601304395](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013043952.png)\r
\r
\r
\r
\r
\r
####  SSG-预渲染\r
\r
在服务器构建的时候使用的东西，加快页面拼接的速度\r
\r
![75601362103](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013621034.png)\r
\r
执行generate生成静态页面，先生成好静态页面，直接在请求的时候返回\r
\r
并且默认不生产动态路由\r
\r
![75601374936](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756013749366.png)\r
\r
要去nuxt.config.ts定义才能渲染动态路由\r
\r
\r
\r
---\r
\r
CSR、SSR和SSG各有优缺点，适用于不同的场景和需求。在选择使用哪种技术时，需要根据项目的具体需求来权衡利弊。\r
\r
例如，对于需要丰富交互效果和实时数据的场景，可以选择CSR；对于需要优化首屏加载速度和SEO效果的场景，可以选择SSR；而对于内容更新不频繁、对性能要求高的场景，可以选择SSG。同时，也可以结合使用多种技术来实现更好的用户体验和性能优化。\r
\r
----\r
\r
\r
\r
\r
\r
导入组件库\r
\r
![75601414960](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014149607.png)\r
\r
**![75601417670](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014176701.png)**\r
\r
两种导入方式\r
\r
![75601421346](C:\\Users\\zxh\\Desktop\\前端\\nuxt\\Nuxt.assets\\1756014213464.png)\r
\r
组件懒加载方式\r
\r
`,M8=Object.freeze(Object.defineProperty({__proto__:null,default:O8},Symbol.toStringTag,{value:"Module"})),B8=`# 1.Typescript的价值\r
\r
js的核心是灵活，但是会加大代码的维护困难，所以需要一些类型的约束\r
\r
- ts更像后端java，让js可以去开发大型应用\r
- 类型系统可以帮助我们在写代码时提供丰富的语法提示\r
- 在编写代码时进行类型检查从而避免很多线上错误\r
\r
####  什么是ts\r
\r
![74916904898](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749169048983.png)\r
\r
1. 需要把ts代码转化为js代码才能运行\r
\r
   \`npm install typescript -g\`安装转译模块,需要项目先有一个配置文件(用tsc --init),再运行tsc   \r
\r
2. 通过vscode的插件完成ts文件的运行\r
\r
   code-runner,如果是js文件,会直接采用node+文件名来执行,如果是ts,会使用ts-node来执行文件   \r
\r
   \`sudo npm install ts-node -g\`\r
\r
3. 通过代码构建工具去转化js,再去运行(webpack,rollup,esbuilde,vite),最终变成js执行 \r
\r
   默认rollip,打包时会查找当前的目录,rollup.config.js\r
\r
   ![74917231262](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749172312626.png)\r
\r
   output要加一个sourcemap:true\r
\r
####  ts的基础类型\r
\r
ts关注的是类型,不是业务逻辑\r
\r
> 变量名:类型=值\r
\r
1. 基础类型\r
2. 高级类型\r
3. 内置类型\r
4. 自定义类型\r
5. 类型体操\r
\r
\r
\r
\r
ts的目的是在赋予的时候进行检查类型,只是提示作用,不是在运行的时候发生的,编译ts之后,类型就消失了(写空气)\r
\r
 \r
\r
ts比较偏向使用export{}来分割模块,而不是使用函数来分割\r
\r
ts还有一个特点,不是所有变量都要添加类型,ts支持变量推导,可以猜测类型\r
\r
 \r
\r
\`\`\`typescript\r
//基础类型,小写的命名\r
const name:string="jwt"\r
const age:number=1\r
const gender:boolen=true\r
\r
//大写的用来描述实例类型\r
\`\`\`\r
\r
![74917527544](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749175275440.png)\r
\r
类的类型,用来描述实例的\r
\r
- 数组\r
\r
\`\`\`typescript\r
//类型[]Array类型,用于声明数组\r
let arr1:number[]=[1,2,3,2,]\r
let arr2:Array<number>=[1,2,3,1,3]\r
let arr3:(number|string)[]=["ss",1]\r
//联合类型\r
\`\`\`\r
\r
数组要求的是存储的格式安装特定类型来存储,不关心位置\r
\r
- 元组\r
\r
  你赋予的值要符合这个结构和顺序,不能无序去排列,也是不能增加额外的类型的值,只能是已有的,而且增加后无法访问\r
\r
  ![74917630797](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749176307970.png)\r
\r
  安全问题\r
\r
  ​\r
\r
- 枚举\r
\r
  自带类型的对象（自己有类型,就是一个对象）\r
\r
  约定一组格式我们会用枚举,状态码,权限,数据格式,标志位\r
\r
  ![74943392254](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749433922540.png)\r
\r
  ![74943399988](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749433999883.png)\r
\r
  通过索引可以拿到枚举里面的值\r
\r
   并且一般会给好这些东西一个固定的值\r
\r
  ![74943415587](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749434155875.png)\r
\r
   常量枚举不会额外编译成对象,更节约内存\r
\r
  ![74943444037](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749434440374.png)\r
\r
  异构枚举\r
\r
  使用大写的命名,防止命名冲突\r
\r
- null和undefiend\r
\r
  也是一种基本类型,正常情况夏,只能赋予给unll和undefiend\r
\r
   除非关闭相关的检测 \r
\r
  void类型代表的类型是空,void用来表示函数的返回值,undefiend的范围小于void\r
\r
  ​\r
\r
  never是永远到不了的地方,就是never(函数无法到达结束的状态)\r
\r
  ![74943557977](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749435579774.png)\r
\r
   代码的完整性保护\r
\r
  ![74943599357](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749435993571.png)\r
\r
  不能让val到达validateCheck\r
\r
  ​\r
\r
  any是任何类型,能不写ant就不写,any会导致类型丧失检测,容易1导致出错,相当于没有ts加持\r
\r
\r
\r
\r
####  object引用类型\r
\r
\`\`\`typescript\r
function create(val:object){\r
    \r
}\r
//标识非原始数据类型,用object\r
\`\`\`\r
\r
![74943672983](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749436729830.png)\r
\r
symbol和bigint\r
\r
用的很少\r
\r
\r
\r
> 基础类型\r
>\r
> string number boolean 数组 元组 枚举 null undefiend void never any object symbol bigint\r
\r
\r
\r
\r
\r
\r
\r
####  ts的类型断言\r
\r
![74943713487](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749437134875.png)\r
\r
const声明的a1的类型是1,不可修改,而let的类型是number,范围会更大一点\r
\r
**断言**\r
\r
1. 指定类型再使用(非断言)\r
\r
   \`\`\`typescript\r
   let strOrNum:string|number;\r
   strOrNum="1"\r
   strOrNum.endsWith()\r
   \`\`\`\r
\r
2. 断言类型后再使用,as断言成某种类型(一定是联合类型中的某一个),!是非空断言,表示这个值一定不是空的\r
\r
   不存在的结果自己承担,ts不管了\r
\r
   \`\`\`typescript\r
   let strOrNum:string|number;\r
   (strOrNum! as string).charCodeAt(0);\r
   (<number>strOrNum!).toFixed(3)\r
   //这里有两个定义的方法\r
   \`\`\`\r
\r
   使用! ? ??的使用方法\r
\r
   !就是确定它存在\r
\r
   ![74943900349](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439003490.png)\r
\r
   值 as xxx或者<xxx>值,一般用在联合类型\r
\r
   ![74943919372](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439193721.png)\r
\r
   双重断言会破坏原有关系\r
\r
   大类型断言成子类型\r
\r
   ![74943932960](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749439329602.png)\r
\r
   ​\r
\r
\r
\r
\r
\r
\r
\r
####  函数类型\r
\r
 函数的声明方法\r
\r
\`\`\`typescript\r
function sum(a,b){\r
    return a+b\r
}\r
\r
\r
const sum=function(a,b){\r
    return a+b\r
}\r
//一般使用第二种进行定义,因为function关键字声明的函数可以提升到作用域顶部,就是一般function用来描述外部函数,cosnt描述内部函数\r
\`\`\`\r
\r
 对于ts来说,函数关键字标注的函数,不能标注函数类型,通过表达式来声明函数,必须赋予的值满足定义的类型\r
\r
![74957027039](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749570270393.png)\r
\r
**可以使用type来声明关键字**\r
\r
![74957058699](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749570586992.png)\r
\r
如果标明函数的类型,在使用函数的时候以标明的为准\r
\r
**参数**\r
\r
![74957102517](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749571025173.png)\r
\r
?不能和默认值一起使用\r
\r
**参数this问题**\r
\r
尽量不采用this,来作为函数的上下文,this的缺陷就是类型推到问题\r
\r
如果要限制this的类型,需要手动指定this类型\r
\r
![74957148412](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749571484124.png)\r
\r
![74957205079](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572050798.png)\r
\r
ts有一个概念是重载,对于强类型语言可以写一个函数写多遍(参数不同),js实现重载考的是arguments\r
\r
![74957217118](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572171189.png)\r
\r
类型重载后\r
\r
![74957219976](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572199760.png)\r
\r
下面定义了父类型(不用any用重载前的那样也可以),上面的是一种具体的方案(子类型),上面可以限制下面的类型,根据用户给的值,来判断返回值\r
\r
![74957231264](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749572312648.png)\r
\r
\r
\r
\r
\r
####  类的类型\r
\r
类可以继承\r
\r
类的组成：构造函数，属性(实例属性，原型属性，静态属性)、方法（实例的方法，原型方法，静态方法），访问器，静态相关的配置\r
\r
 \`\`\`typescript\r
class Circle{\r
    //给这个类来声明属性\r
    public x:number\r
    construct(x:number,y:number=200){\r
        this.x=x;\r
        this.y=y;\r
        this.fn=()=>{}\r
    }\r
    //public公开属性,类的实例可以在外部可以访问这个属性,类的内部也可以访问,继承的子类也可以访问\r
    //protected我自己能访问,子类也可以访问,外部不能访问\r
    //private私有的,自己才能访问\r
    //readonly是在初始化后(costructor之外)时候是只读的\r
}\r
\r
\r
\r
//父子类的操作\r
class Animal{\r
    constructor(portected name:string){\r
        this.name='name'\r
    }\r
    //原型方法,就是每一个实例共享的方法,父类提供的方法,子类是可以进行方法重写的\r
    //void意味着是不关心函数的返回值，并不是空的意思\r
    changeName(value:string,age:number):void{\r
        this.name=value\r
    }\r
    //这个函数等同于加了一个public\r
    get aliasName(){\r
        return '$'+this.name;\r
    }\r
    //原型属性,需要通过访问器访问\r
    //原型是共享的,挂在protapyte上面实现\r
    set alisName(name:string){\r
        this.name=name;\r
    }\r
    static a=1;\r
    static getA(){\r
        return this.a\r
    }\r
    //静态方法声明\r
}\r
\r
\r
class Cat extends Animal{\r
    constructor(name:string,public rendonly age:number){\r
        super(name);\r
        //super在构造函数指向的是父类，在原型方法中调用的时候指向的是父类的原型\r
        //super在类中访问constructor\\static函数中指向的都是父类,在原型方法中,属性访问器都是父类的原型\r
    }\r
    //子类重写父类方法要统一,赋予的函数要兼容父类,子类的参数可以比父类少\r
    //并且可以忽略void\r
    changeName(value:number){\r
         super.chageName(value )\r
         return 'abc'\r
    }\r
}\r
\r
const tom=new Cat('tom',30)\r
//初始化\r
 \`\`\`\r
\r
\r
\r
 不能被new的类\r
\r
![74961944549](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749619445492.png)\r
\r
ts有抽象类概念,abstract不存在的\r
\r
抽象类可以含义非抽象的方法和属性,不会new它\r
\r
![74962008164](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749620081641.png)\r
\r
代码编程的时候,现在已经是慢慢脱离继承了,组合优于继承,类的装饰器redux\\nest\\mabx\r
\r
\r
\r
\r
\r
\r
\r
####  接口和泛型的使用\r
\r
接口：\r
\r
和抽象类不同，接口必须都是抽象的，没有具体的实现\r
\r
接口就是描述数据的结构或者形状，定义好结构，再去针对结构进行实现\r
\r
**type和interface**\r
\r
一般来说，描述对象、类，使用interface比较多,不能声明联合类型\r
\r
type可以快速声明类型，比如联合类型，一些工具类型使用1type\r
\r
type用的比较多，能type就用type，type不能重名,复杂类型使用type，interface可以重名\r
\r
 \`\`\`typescript\r
//描述对象结构\r
interface IPerson{\r
    username:'abc'\r
}\r
let person:IPerson={\r
    username:'abc',\r
    age:38,\r
}\r
\r
\r
//子可以赋予给父亲，我们需要把一个值赋予给另外一个值，如果是声明的必须一致\r
let obj={\r
    username:'abc',\r
    age:38,\r
    address:'地址'\r
}\r
let person:IPerson=obj//赋值的时候会产生兼容性(儿子可以赋予给父亲)\r
 \r
\r
//接口可以描述函数\r
interface ICounter{\r
    {}:number\r
    count:number\r
}\r
//const标识此值不能修改，let是可以修改的（如果给函数增加类型定义，函数不能被修改时只能用const）\r
const counter：ICount=()=>{\r
    return counter.count++\r
}\r
counter.count=0\r
 \`\`\`\r
\r
//接口合并，自己的业务少\r
\r
![74969126861](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691268613.png)\r
\r
会改变源码的逻辑 \r
\r
也可以使用继承的逻辑来扩展接口\r
\r
![74969169418](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691694182.png)\r
\r
![74969179266](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1749691792665.png)\r
\r
任意类型和实例哪里的[Symbol()]:'ABC'是不用定义的\r
\r
\r
\r
任意类型,随机的属性,描述数字索引(除了必要的属性,其他随意)\r
\r
\`\`\`typescript\r
interface IArray{\r
    [key:number]:any\r
}\r
let arr:IArray={\r
    0:1,\r
    1:2,\r
    3:3,\r
    4:"abc",\r
    5:true \r
}\r
//或者\r
let arr:IArray=[1,2,3]\r
\`\`\`\r
\r
\r
\r
\r
\r
通过索引访问符,来获取内部类型\r
\r
\`\`\`typescript\r
interface ResponseData{\r
    username:string,\r
        token:string\r
}\r
\r
interface ReturnVal{\r
    code:number,\r
        data:ResponseData\r
}\r
\r
type ICode=ReturVal['code'];\r
type IUsername=ReturVal['data']['username'];\r
type IKey = ReturnVal[teyof ReturnVal]\r
//interface没有联合类型\r
\`\`\`\r
\r
接口可以实现,接口通过类实现\r
\r
一个接口可以继承多个接口,接口可以用于继承类\r
\r
![75024471539](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750244715390.png)\r
\r
  \r
\r
\r
\r
怎么标识自己传递了一个类,类类型不能描述类本身,描述的是实例\r
\r
\`\`\`typescript\r
class Dog{\r
    \r
}\r
\r
class Cat{\r
    \r
}\r
\r
\r
\r
\r
function createInstance<T>(clazz:{new:()T}){\r
    //不能直接使用dog为类型,也不能typeof dog来作为类型\r
    //ts的检验类型,鸭子类型检测,有大部分相同的就是一个类型,两个空类,是一样的类型\r
    //所以这里要使用泛型来完成,传什么就是什么类型\r
    //或者写成new ()=>Dog\r
}\r
\r
const instance = createInstance<Dog>(Dog)\r
//省略写法\r
const instance = createInstance(Dog)\r
\r
\`\`\`\r
\r
**泛型:**类似坑位(函数的形式参数,刚开始不知道类型,通过使用才知道类型)\r
\r
使用才传递东西\r
\r
通过<>传到上面,上面用<>接收,可以一直传递\r
\r
![75024632513](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750246325132.png)\r
\r
也可以这样写\r
\r
有参数,且接口或者type使用泛型的情况\r
\r
\r
\r
泛型可以用于函数接口类这些东西上面\r
\r
无法确定类型的时候使用\r
\r
**实际使用例子**\r
\r
![75024706093](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750247060934.png)\r
\r
写辅助函数的时候,有多个泛型可以用于保存值\r
\r
![75024731008](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750247310081.png)\r
\r
弱推导类型不能发现数组交换了,所以要用泛型来\r
\r
\r
\r
\r
\r
区分在使用函数的时候定义泛型还是在定于函数的时候使用泛型\r
\r
![75024811269](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750248112693.png)\r
\r
![75024846365](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750248463652.png)\r
\r
声明时准备和使用时准备\r
\r
\r
\r
\r
\r
\r
\r
####  泛型和交叉类型\r
\r
\`\`\`typescript\r
//接口的返回类型可能是统一的\r
//code,data,message\r
//泛型的默认值来解决泛型的值默认情况\r
interface APIResponse<T>{\r
    error:number,\r
    data:T,\r
    message:string,\r
}\r
\r
    interface LoginInfo{\r
        username:string,\r
            token:string\r
    }\r
    \r
    function login():APIResponse<LoginInfo>{\r
        return{\r
            error:1,\r
            data:{\r
                username:"sss",\r
                token:'sssssssss'\r
            },\r
            message:'成功'\r
        }\r
    }\r
let r = login()\r
\r
//在开发的时候想使用联合类型\r
type IUnion<T=Boolen>=T|string|number\r
type t1=IUnion\r
type t2=IUnion<string[]|number[]>\r
\r
//用户随意传递\r
//跟上面那个类似\r
           \r
//使用泛型的时候不能做运算（T+T=T？）\r
       \r
\`\`\`\r
\r
\`\`\`typescript\r
function getVal<T extend string|number>(val:T):T{\r
                return val\r
                }\r
                \r
//约束类型T是什么什么的子类型\r
\`\`\`\r
\r
function getLen<T entends {length:number}>(val:T){\r
\r
​        return val.length\r
\r
}\r
\r
传入的东西要有length属性\r
\r
![75029744487](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750297444878.png)\r
\r
\`\`\`typescript\r
//类中泛型\r
class MyList<T extend sting|number>{\r
    public arr:T[]=[]\r
    add(val:T){\r
        this.arr.push(val)\r
    }\r
    getMax():T{\r
        let max = this.arr[0]\r
        for(let i = 0;i<this.arr.length;i++){\r
            let cur=this.arr[i];\r
            cur>max?(max=cur):void 0\r
        }\r
        return max\r
    }\r
}\r
const list = new Mylistconst \r
\r
const list = new Mylistconst<string>\r
list.add(1)\r
list.getMax()\r
\`\`\`\r
\r
泛型使用场景:函数(参数返回值),对象坑位,类,泛型的默认值和约束\r
\r
\r
\r
\r
\r
\r
\r
####  交叉类型\r
\r
聚合类型是并集,交叉类型是交集\r
\r
\`\`\`typescript\r
interface Person1 {\r
handsome:string\r
}\r
interface Person2 {\r
high:string\r
}\r
// let person:Person1 | Person2 ={\r
I1high:'高\r
}\r
let person:Person1 & Person2 ={handsome:"帅"high:'高}\r
\r
//使用交叉类型需要全部都使用 \r
//子类型可以赋予给父类型,子类型的结构要有包含父类型的结构\r
\`\`\`\r
\r
\r
\r
\r
\r
####  内置类型\r
\r
- 条件类型 if/else 三元表达式 (extends 左边和右边的关系)\r
\r
  子类型 extends 父类型 = true\r
\r
  \`\`\`typescript\r
  type StatusCode<T>= T extend 200|201?'success':'fail'\r
  type IReturnMessage = StatusCode<300>\r
\r
  type IObj<T>= T extend {name:'jw'}?'ok':'no'\r
  type IRerson = IObj<{name:'jw',age:30}>\r
  \`\`\`\r
\r
- 类型级别:1. 根据结构的角度分析,2. 从类型角度来分析\r
\r
  never是任何类型的子类型\r
\r
  ![75047497514](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750474975143.png)\r
\r
    {}看成结构，object看成复杂类型，而Object就是万物皆对象\r
\r
    T4是false，其他是true\r
\r
- ​\r
\r
\r
\`\`\`typescript\r
type T7= any extends unknown?true:false\r
type T8= unknown extend any?true:false\r
  //两个都是true，不区分彼此\r
\r
\r
\r
type T9 = any extends 1?true:false\r
//条件类型的分发机制，1+除了1的部分，返回ture|false\r
type T10<T> = T extends 1?true:false\r
type Temp10 = T10<T>\r
 //返回type Temp10 = never,出现问题\r
//any是自带分发机制的\r
  //通过泛型传递的never相关机制,会产生分发机制,返回never\r
\r
  //联合类型的子类型,是联合类型里的某个类型\r
  type T11 = 100 extends 100|200 ?true:false\r
\r
  //通过条件类型来进行类型的区分,条件语句也可以实现约束的效果\r
  interface Fish{\r
      name:'鱼'\r
  }\r
\r
  interface Water{\r
      name:'天'\r
  }\r
\r
  type GetType<T extends Fish|Bird>=T extends Fish?Water:Sky\r
  type A1 = GetType<Bird>\r
  //鱼返回水,鸟返回天空\r
\r
\r
  type GetType<T extends Fish|Bird>=[T] extends [Fish]?Water:Sky\r
  //分发导致的问题:什么时候会有分发\r
  //1.联合类型通过泛型传递,泛型左边会被分发\r
  //2.而且比较(extends)的时候会产生分发\r
  //3.类型需要满足裸类型(裸类型就是泛型,就是自己没有和别人搭配)\r
\r
\r
\r
  //有的场景不需要分发机制,要禁用,有的场景需要分发机制做判断\r
  type <T>=T&{}\r
  type UnionAssets<T,K>=Nodistribute<T> extends K?true : false\r
  type U1 = UnionAssets<1|2,1|2|3>\r
  type U2 = UnionAssets<1|2|3，1|2>\r
   //判断类似是否完全一致\r
  type isRqual<T,K,S,F>=T extends K?K extends T ? S:F:F\r
  type A2 = isREqual<1|2,1|2,true,false>\r
                        //分发导致返回bollen\r
                        把extens前的改成NoDistribute<T>\r
\`\`\`\r
\r
  内置类型里面有很多基于条件类型的类型\r
\r
比如Extract Exclude\r
\r
\`\`\`typescript\r
type ExtractBes = Extract<1|2|3|4,1|2>\r
//实现方法\r
type Exclude<T,U>=T extends U?never :T\r
\`\`\`\r
\r
\r
\r
- 对象类型\r
\r
  \`\`\`typescript\r
  interface Person1{\r
      handsome:string;\r
  }\r
  interface Person2{\r
      high:string;\r
  }\r
  type Computr<T>={\r
      [key in keyof T]:T[key]\r
  }\r
  //ketof any\r
  //返回number|srting|symbol,使用的比较多\r
  //keyof unknow\r
  //返回never\r
\r
  type Person3=Compute<Person1 & Person2>//合并类型\r
  \`\`\`\r
\r
  ![75048299189](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750482991891.png)\r
\r
  递归发现对象内部属性\r
\r
  ​\r
\r
\r
\r
####  inference的使用\r
\r
- 类型推断inference\r
\r
  infer关键字只能用于条件类型中，用来提取类型的某一部分的类型，放在不同的位置，就可以帮我们取不同位置的类型\r
\r
  \`\`\`typescript\r
  function getUser(name:string,age:number){\r
      return {name:age,address:{}}\r
  }\r
\r
  type ReturnType<T>=T extends (...args\r
  :any[])=>infer R?"R":never\r
  //用infer推到出返回值类型R\r
\r
  type T1 = ReturnType<typeof getUser>\r
\r
  \`\`\`\r
\r
- ReturnType和Parameters和InstanceType是内置类型\r
\r
  实现\r
\r
  ![75063656066](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750636560663.png)\r
\r
  函数和构造函数的区别是new了一下啊\r
\r
- 推断数组\r
\r
  \`\`\`typescript\r
  type TailToHead<T extends any[]> = T extends [...infer C,infer B]?[B,...C]:any\r
\r
  type x = TailToHead<["jw",30,40]>\r
  \r
  //将元组转化为联合类型\r
  type ElementOf<T>=T extends Array<number>?"R":any\r
  type TupleToUnion = ElementOf<string,numer,boolean>\r
  //转化成了string|munber|bollean\r
  \r
  \r
  //深入推断\r
  type Promise<T>= T extends Promise<infer V>?V:any\r
  type PromiseReturnValue = Promise<Promise<number>>\r
  \r
  //深入拆包\r
    type Promise<T>= T extends Promise<infer V>?PromiseV<V>:T\r
  type PromiseReturnValue = Promise<Promise<number>>\r
  //infer就是推导条件中的某个部分\r
  \`\`\`\r
\r
\r
\r
\r
\r
\r
####  内置类型\r
\r
exclude extract nonnullable infer returntype paramters instancetype\r
\r
集合、条件来操作的\r
\r
\r
\r
- 基于对象操作的映射类型\r
\r
\`\`\`typescript\r
type A1 = {name:string}\r
type A2 = {age:number}\r
\r
type Compute<T extends object>={\r
    [K in ketof T]:T[K]\r
    //映射类型\r
}\r
type A1&A2 = Compute<A1 & A2>;\r
//拿到合并后的类型\r
\r
//对对象进行修饰操作的内置类型(必选,可选,只读)\r
\r
interface Company{\r
    num:number;\r
    name:string\r
}\r
interface Person<T>{\r
    name:string;\r
    age:number;\r
    company:T\r
}\r
type withCompany = Partial<Person<Company>>\r
//Partial让所有类型都变成是可选的,只有第一层是可选的\r
//实现\r
type Partical<T>={\r
    [L in keyof T]?:T[L]\r
}\r
type Required<T>={\r
    [L in keyof T]?:T[L]\r
}\r
//必填所有项\r
//多层处理\r
type DeepPartial<T>={\r
    [K in keyof T]?:T[K] extends object ?DeepPartial<T[K]>:T[K]\r
}\r
type DeepRequired<T>={\r
    [K in keyof T]-?:T[K] extends object ?DeepRequired<T[K]>:T[K]\r
}\r
\r
type S = Readonly<Person<Company>>\r
//添加只读\r
\r
\r
//pick 挑选\r
//omit 去掉某些属性\r
//exclude  extract是对集合操作\r
type PIckPerson = Pick<Person, "name"|"gae">\r
//实现\r
type Pick<T,K extends keyof T>{\r
    [P in K]:T[P]\r
}\r
\r
type PickPerson = Omit<Person,"name"|"age">\r
//实现\r
type Omit<T,K extends keyof any>=Pick<T,Exclude<keyof T,K>>\r
\r
//Record 取代object，告诉函数，这一定是一个非空对象\r
\`\`\`\r
\r
![75064944782](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750649447828.png)\r
\r
1. 根据传入的值进行类型推到，name和age会赋予给K，value会赋予给V\r
2. 拿到callback返回值，，使用泛型进行类型推到它的返回值，R根据返回值进行推导\r
3. 映射成一个新的record，由K和R组成为结果数组\r
4. 遍历obj，去运行回调函数\r
\r
\r
\r
\r
\r
####  兼容性和类型推导\r
\r
ts兼容性分为两种：\r
\r
- 子extends父\r
\r
- 结构来考虑\r
\r
\`\`\`typescript\r
  let str:string="abc"\r
  let obj!:{toString():string}\r
  obj=str\r
  //结构来考虑\r
\r
  //函数兼容性\r
  let sum1=(a:number,b:number)=>a+b\r
  let sum2=(a:number)=>a\r
\r
  type Sum1 = typeof sum1\r
  type Sum2 = typeof sum2\r
  type x = Sum2 extends Sum1?true:false\r
  //对应函数而言,它的兼容性,少的可以赋予给多的,参数少的是子类型\r
  //返回值要求安全,返回值要求是子类型\r
  //类的兼容性,也是一样的,比较的是实例\r
\r
  class A{\r
      a=1;\r
  }\r
\r
  class B{\r
      a=1\r
  }\r
\r
  const b:B=new A{}\r
\r
  //可以赋值\r
\r
  //如果类中的属性,有private或者protected则有两个值不能互相赋值\r
\r
  //差异化基本类型\r
\r
  class AddType<K>{\r
      private type!:K\r
  }\r
\r
  type withType<T,K>=T AddType<K>\r
\r
  type BTC=withType<number,"BTC">\r
\r
  type USDT=withType<number,"B TC">\r
\r
\`\`\`\r
  ts主要考虑安全性,安全就可以复制\r
\r
\`\`\`typescript\r
//逆变（在函数参数可以标记儿子传父亲）和协变（可以标记父亲返回儿子）\r
class Parent{\r
    car(){}\r
}\r
class Chile extends Parent{\r
    house(){}\r
}\r
class Gradson extends Child{\r
    sleep(){}\r
} \r
\r
function fn(callback:(ctr:Child)=>Child){\r
    callback(new Child())\r
}\r
fn((child:Parent):Child=>{\r
    return new Child()\r
})//逆变\r
//内部调用函数的时候，可以传递Child和Grandson,但是在使用属性时，只能认为最多就是Child\r
//fn 内部调用 callback 时，传入的实际参数是 Child 类型。\r
//若回调函数声明参数为 Parent（父类型），则它可以安全接受 Child（子类型），因为子类拥有父类的所有属性和方法（Parent 的要求已被满足）。\r
//函数的返回值，需要返回子表，因为内部代码在访问属性的时候要保证可以访问到\r
//协变\r
//当函数 A 赋值给函数 B 时，A 的返回值类型必须是 B 返回值类型的子类型（或相同）。\r
\r
\r
interface MyArray<T>{\r
    concat(...args:T[]):T[]\r
}\r
//这种写法不进行逆变检测，所有描述对象中的方法时全部采用这种方式\r
\r
\`\`\`\r
\r
参数逆变，当函数 A 赋值给函数 B 时，A 的参数类型必须是 B 参数类型的**父类型**（或相同）。\r
\r
返回值协变，当函数 A 赋值给函数 B 时，A 的返回值类型必须是 B 返回值类型的**子类型**（或相同）。\r
\r
\r
\r
\r
\r
####  枚举\r
\r
\`\`\`typescript\r
enum E1{}\r
enum E2{}\r
\r
let e1:E1\r
let e2:E2\r
//两个枚举不能互相赋值,不能兼容\r
\r
//泛型兼容性,如果生成结果一致,类型就兼容\r
type II<T>={name?:T}\r
type X1=II<string>extends II<string>?true:false\r
//生成结果一致,返回true\r
\`\`\`\r
\r
![75073018135](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1750730181355.png)\r
\r
\`\`\`typescript\r
//对象兼容性,多的属性可以赋予给少的\r
//类型层级兼容性,never->字面量->基础类型->包装类型->any/unknown\r
//子extends父,满足即可赋值\r
\`\`\`\r
\r
类型推到的概念\r
\r
1. 赋值推断\r
2. 函数时通过左边来推导右边,基于上下文类型来进行自动的推导\r
3. 函数返回值标记成void,赋予一个函数的时候,意味不关心\r
\r
\r
\r
\r
\r
\r
\r
####  类型保护\r
\r
 基于js＋ts（收窄）\r
\r
ts很多情况下，需要使用联合类型，默认情况下只能使用公共的方法，识别类型（针对某个类型进行处理）\r
\r
\`\`\`typescript\r
function  fn(a:string|number){\r
    if(typeof a === "string"){\r
        a;\r
    }else{\r
        a;\r
    }\r
}\r
\`\`\`\r
\r
![75101423122](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751014231222.png)\r
\r
收窄了\r
\r
> typeof 基础类型\r
>\r
> instanceof 类类型\r
>\r
> in 可辨识类型\r
\r
\`\`\`typescript\r
interface Bird{\r
    kind:"鸟";\r
    fly:string\r
}\r
interface Fish{\r
    kind:"鱼";\r
    swim:string\r
}\r
\r
function getAima(val:Bird|Fish){\r
    //基于差异化来辨别\r
    if("fly"in val){\r
        val\r
    }else{\r
        val\r
    }\r
    if(val.kind=="鸟"){\r
        val.fly\r
    }else{\r
        val.swim\r
    }\r
}\r
//通过各种判断来缩小范围,生命周期{}\r
\r
\`\`\`\r
\r
**函数**嵌套不识别的问题使用?或者!\\if都可以做到类型保护\r
\r
!一定存在,?取值但不能用于赋值\r
\r
![75101565822](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751015658229.png)\r
\r
ts无法识别的时候,一定要用断言\r
\r
> function isBird(val:Bird|Fish):val is Bird{\r
>\r
> //函数的名字和返回值无关\r
>\r
> //ts的返回值类型\r
>\r
> //true是bird还是false是bird\r
>\r
> return  "fly" in val\r
>\r
> }\r
\r
\r
\r
\r
\r
####  自定义类型\r
\r
unknown和any都是顶级类型,任何类型都能赋予给他\r
\r
> type unionUnkown = unknow | string | true | false\r
>\r
> type sss : unkown = "ssss"可以进行赋值\r
\r
如果无法确定类型，不要贸然采用any\r
\r
any不校验，意味着可以任意调用和取值\r
\r
但unkown是any的安全类型\r
\r
如果把类型标识为unkown类型，必须先类型保护，再去使用类型\r
\r
\`\`\`typescript\r
//自己去实现一些类型\r
//内置类型\r
//基于条件类型的 Extract Exclude 集合类型\r
                //基于映射的类型 Paetial Requried Readonly 修饰\r
                //结构的 Pick Omit Record 结构处理\r
                //基于推断的类型 instanceType returnType Paramtes infer 模式类型匹配\r
//merge类型会合并在一起\r
\r
\`\`\`\r
\r
\`\`\`typescript\r
//对象求交集\r
type ObjectInter<T extend object,K extends object>=Pick<T,ketof T & keyof K>\r
type X1 = ObjectInter<T1,T2>\r
\r
//对象求查\r
type ObjectOff<T extend object,K extends object>=Omit<T,keyof K>\r
type X2 = ObjectOff<T1,T2>\r
\r
//并集就是联合类型\r
\r
//两个类型合并在一起,如果都有的属性,用T2的? {...T1,...T2} \r
type OverWrite<T extends object,K extends object>=ObjectDiff<T,K>&ObjectDiff<K,T>&ObjectInter<K,T>\r
type X3=OverWrite<T1,T2>\r
\r
\r
//merge\r
type MergeType<T,K>={\r
    [K in keyof T]:K extends keyof U?T[K]|U[K]:T[K]\r
}\r
type MergeWrite<T extends object,K extends object>=ObjectDiff<T,K>&ObjectDiff<K,T>&MergeType<K,T>\r
type X4=Compute<MergeWrite<T1,T2>>\r
\`\`\`\r
\r
\r
\r
- 命名空间----隔离同一个文件\r
\r
  namespace\r
\r
  import export 外部模块，就是隔离多个不同的文件\r
\r
  ![75110902009](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751109020095.png)\r
\r
  可以声明重复名字的变量\r
\r
  给他们划分了两个对象，导出然后访问（只有导出了才能访问）\r
\r
  扩展类，函数，枚举扩展的命名空间必须写在这些声明下面\r
\r
  ![75110961298](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751109612982.png)\r
\r
  用的不多，基本没什么用\r
\r
  声明文件，装包，拆包，类型体操\r
\r
  基础类型（基础类型 string number boolean null unfiened，void）\r
\r
  底端类型，数组，元组，枚举\r
\r
  包装类型\r
\r
  any unknown\r
\r
  联合类型，交叉类型，断言 as ! ?\r
\r
  ​\r
\r
  //函数：（签名） 参数，返回值，可选的？默认值=剩余参数。。。this的问题 函数的重载（类型的重载）\r
\r
  逆变和协变\r
\r
  类 ：修饰符 private protexted pulic readonly (private constructor)子类重写方法的问题\r
\r
  类型兼容 原型方法和实例方法的声明。\r
\r
  抽象类，类方法，构造函数类型\r
\r
  ​\r
\r
  接口：可选？ readonly任意类型，可索引接口 extends implements\r
\r
  type 和 interface的区别\r
\r
  ​\r
\r
  泛型：占位置的对象，使用时传递类型\r
\r
  条件类型：子extends 父 映射类型（子：子类型，子结构。父：父类型，父结构）\r
\r
  分发的问题，有好有坏，注意禁用和使用\r
\r
- extract exclude\r
\r
  从类型 \`T\` 中**提取**能赋值给类型 \`U\` 的部分（保留交集）extract\r
\r
  从类型 \`T\` 中**排除**能赋值给类型 \`U\` 的部分（取差集）exclude\r
\r
- partial readonly\r
\r
- pick omit record\r
\r
  pick**Pick<T, K>**\r
  从类型 \`T\` 中**挑选**指定的属性键 \`K\`（\`K\` 需是 \`T\` 的键的子集）\r
\r
  **Omit<T, K>**\r
  从类型 \`T\` 中**剔除**指定的属性键 \`K\`（反向 \`Pick\`）\r
\r
  **Record<K, T>**\r
  构造一个键为类型 \`K\`，值为类型 \`T\` 的**新对象类型**\r
\r
  infer推导的作用\r
\r
- ​\r
\r
- ​\r
\r
  ​\r
\r
  ​\r
\r
  兼容性\r
\r
  内置的类型推导，写了可以直接推导类型，函数提供上下文可以推导类型，返回值也可以推导\r
\r
  类型保护typeof instanceof in 可辩别类型 is\r
\r
  一种缩小类型的方式\r
\r
  typeof看基本类型\r
\r
  instanceof看某个类或者构造类型的实例\r
\r
  in检测对象是否有某个属性\r
\r
  ​\r
\r
  重映射+自定义类型\r
\r
\r
\r
\r
#### 命名空间-外部模块\r
\r
es6模块，需要转化成不同的模块方式 ，commonjs规范（require，exports），amd模块(define),导出amd需要配置file入口(在moduleResolution,的值是Node在tsconfig.json哪里)\r
\r
支持直接进行转化\r
\r
1. 如果要使用commonjs需要安装 \`pnpm i --save-dev @type/node \`\r
\r
   commonjs规范可以转化为amd\r
\r
2. target指代的是语法\r
\r
   modele导出的模块规范是什么\r
\r
   ​\r
\r
3. ts里面,为了做到commonjs和amd的互转,发明了一种写法\r
\r
   使用eport = / import = 导入,使用这种写法可以打包关联文件,我们直接用es6就好了,import基本能解决require的问题\r
\r
   ![75119332479](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751193324791.png)\r
\r
   一些规范的使用场景\r
\r
4. 最终编写的代码,需要转为js去使用\r
\r
   需要给打包的结果添加类型,就是.d.ts\r
\r
5. 打包后只生产js，没有类型了，可以开启配置中自动生产类型文件\r
\r
   没有ts类型的的外置包，需要添加ts类型\r
\r
   或者使用cdn外链的库，也需要写声明文件\r
\r
   扩展全局组件的时候，也需要写声明文件了\r
\r
   特殊文件的处理也需要声明文件\r
\r
   为了我们在写代码的时候不会出错，丢失类型\r
\r
   声明文件的语法declare用于声明类型（全局声明），全局声明文件就算.d.ts\r
\r
6. ![75119571289](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1751195712890.png)\r
\r
   声明文件\r
\r
   ​\r
\r
\r
\r
\r
\r
\r
####  声明文件\r
\r
如果有人已经给这个模块写好了类型，我们就可以直接引入人家的操作\r
\r
如果我们在使用某些包的时候，别人提供了类型文件我们可以直接安装使用\r
\r
\r
\r
\r
\r
\r
\r
查找声明文件\r
\r
先看自己是否定义过用自己的,没有就向上找到node_modules \r
\r
1. 默认找当前node_MODULES下的同名模块，看是否有此文件夹，有的话找package.json>types\r
2. 如果没有types默认找这个模块下的index.ts\r
3. 查找node_modules下的@types是否有同名模块,按照上述方式继续查找\r
\r
> @type/xxx是声明文件等\r
>\r
> 默认可以指定导入模块的声明文件路径 \r
\r
![75216399009](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752163990098.png)\r
\r
命名空间全局化\r
\r
![75216411353](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164113534.png)\r
\r
三斜杠指令\r
\r
通常可以在模块扩展上使用\r
\r
- 直接扩展\r
\r
![75216428686](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164286864.png)\r
\r
子模块,扩展了父模块\r
\r
![75216432426](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164324262.png)\r
\r
父模块\r
\r
扩展后让这些模块可以变多功能\r
\r
![75216447096](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752164470961.png)\r
\r
使用\r
\r
> 注意文件命名的关系\r
\r
\r
\r
- 针对特定的接口扩展\r
\r
  父模块\r
\r
  ![75216538754](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752165387542.png)\r
\r
  子模块\r
\r
  ![75216540257](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752165402574.png)\r
\r
  这样避免了上面那一种全局污染的可能性,针对特定接口进行扩展 \r
\r
- 三斜线指令可以通过types来引入其他的声明文件（第三方）\r
\r
- 自己的用path来引入\r
\r
- lib可以加载内置类型\r
\r
\r
\r
\r
####  拆包和装包\r
\r
> 命名空间namespace就是一个对象\r
\r
vue3的ref他就是一个包装对象\r
\r
给一个对象,对他的取值操作和设置操作进行重写了\r
\r
\`\`\`typescript\r
interface Proxy<V>{\r
    get():V;\r
    set(value:any):void;\r
}\r
\r
type Proxify<T> ={\r
    [K in keyof T]:Proxy<T[K]>\r
}\r
const props = {\r
    nameL"jwt",\r
    age:30\r
}\r
function proxify<T>(obj:T):Proxify<T>{\r
    const result = () as Proxify<T>;\r
    for(let key in obj)={\r
        let value = obj[key]\r
        result[key]={\r
        get(){\r
        return value\r
    },\r
        set(val){\r
        value=val\r
    }\r
    }\r
    }\r
    return result\r
}\r
const proxy = proxify(props)\r
\r
proxy.name.get()\r
proxy.name.set("abc")\r
\r
export {}\r
\`\`\`\r
\r
使用泛型进行装包\r
\r
\r
\r
拆包\r
\r
\`\`\`typescript\r
function unProxifiy<T>(proxy:Proxif<T>):T{\r
    let result=()as T\r
    for(let Key in proxy){\r
        result[key]=proxy[key].get();\r
    }\r
    return result\r
}\r
\`\`\`\r
\r
进行拆包,返回原始的那个东西\r
\r
> 装包也能用于axios的封装和处理\r
\r
\`\`\`typescript\r
export type ResponseData<T = any>={\r
    code:number\r
    data?:T\r
    message?:string\r
}\r
\r
class HttpRequest{\r
    public timeout=3000\r
    public loadingMaping:Record<string,string>={}\r
    public baseURL= import.meta.url==="development"?"https://localhost:3000:"/"\r
    \r
    public setInterceptor(instance:AxiosRequestConfig){\r
        return {..option,baseURL:this.baseURL,timeout:this.tomeout\r
    }\r
    \r
    public setInterceptor(instance:AxiosInstance){\r
        instance.interceptor.requset.use(\r
        (config)=>{\r
            return config\r
        },\r
        (err)=>{\r
            return Promise.reject()\r
        }\r
        )\r
    }\r
    public request(option:AxiosRequestConfig){\r
        const instance=axios.create()\r
        options=this.mergeConfig(options)\r
        this.setInterceptor(instance)\r
        return instance(options)\r
    }\r
    public get<T>(url:string,data:any):Promise<ResponseData<T>>{\r
    this.request({\r
        url,\r
        method:"get"\r
        data\r
    }).then(res=>{\r
        return Promise.resolve(res.data)\r
    }\r
    }\r
}\r
const http = new HttpRequest\r
http.get<{token:string}>("/login",{}).then((res)=>{\r
    res.data?.token\r
})\r
\`\`\`\r
\r
\r
\r
\r
\r
####  类型体操\r
\r
> 可以通过索引来访问一个对象\\数组对应的值\r
\r
\`\`\`typescript\r
type LengthOfTuple<T extends any[]>=T['length']\r
type A = LengthOfTuple<["B","F","E"]>//3\r
\`\`\`\r
\r
> 元组自带索引和长度,可以用索引和长度\r
\r
\`\`\`typescript\r
type FirstItem<T extends any[]>=T[0]\r
type A = FirstItem<["B","F","E"]>//B\r
\`\`\`\r
\r
![75221877155](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752218771558.png)\r
\r
拿到最后一个\r
\r
![75221893786](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752218937862.png)\r
\r
去除第一个\r
\r
![75221974469](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752219744698.png)\r
\r
链表反转\r
\r
\`\`\`typescript\r
//拍平\r
type Flat<T extends any[]>=T extends [infer L,...infer R]?\r
    //每次判断一下是不是数组，是就去递归它\r
    [: (L extends any[]?Flat<L>:[L])]:T\r
type A = Flat<[1,2,3]>\r
\`\`\`\r
\r
 ![75222095927](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752220959272.png)\r
\r
判断是否满足某个条件，构建数组\r
\r
\`\`\`typescript\r
type Filter<T extend any[],K,F extends any[]=[]>=T extends [infer L,...infer R]?Filter<R,K,L&{} extends K?[...F,L]:F>:F\r
\r
type A=Filter<[1,2,3,true],nmuber>//[1,2,3]\r
\`\`\`\r
找到相同的值,不仅要value一样,key也要\r
\r
![75225143215](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752251432157.png)\r
\r
![75225118298](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752251182985.png)\r
\r
类型体操多在源码里面出现，了解源码再去考虑类型，不然很难看懂\r
\r
\r
\r
####  模板字符串\r
\r
我们可以基于字符串类型，来创建新的类型，模板字符串\r
\r
\`\`\`typescript\r
type name = 'js'\r
type handsomeName = \`handsome\${name}\`\r
\r
\`\`\`\r
\r
当我们传入应该联合类型的时候,也有分发机制\r
\r
\`\`\`typescript\r
type MarginOrPading='padding'|'margin'\r
type Dirction='felt'|'right'|'top'\r
type Compose=\`\${MarginOrpading}-\${Dirction}\`\r
\`\`\`\r
\r
可以基于这种方式编写一些特定类型,scss变量\r
\r
//element-plus(red-100 red-200 red-300)\r
\r
![75228820877](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752288208778.png)\r
\r
可以传入字面量类型,也可以传入基础类型\r
\r
\`\`\`typescript\r
//可以对这些进行一些特殊的操作\r
type A1= Capitalize<I1>//开头大写\r
type A2= Uncapitalize<A2>//开头小写\r
type A3= Unprecase<A1>//全部大写\r
type A4= LowerCase<A3>//全部小写\r
\r
\`\`\`\r
\r
![75228938221](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752289382216.png)\r
\r
![75229115424](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752291154244.png)\r
\r
infer的使用，可以提取第一个字符，\`\${infer L}\`\r
\r
如果有两个infer,最后面的就是所有的\r
\r
如果有符号分隔,那就会分左右,没有默认左边的都是一个字符串\r
\r
\r
\r
\r
\r
\r
\r
####  装饰器\r
\r
平时用不到，是基于类的，是一个实验性语法，mbx，nestjs主要是靠装饰器实现的\r
\r
后续的具体实现可能会发生变化，但目前是比较稳定的一种\r
\r
本质就是应该函数，只能在类和类的成员上使用\r
\r
ts装饰器：类装饰器，（静态丰富，原型方法）方法装饰器，（静态属性，静态方法装饰器）属性装饰器，（get，set）访问符号装饰器，（原型函数，构造函数）参数装饰器\r
\r
> 要在tsconfig.json打开这个功能\r
\r
- 类装饰器\r
\r
\`\`\`typescript\r
function ClassDecorator(target:any){\r
    target.type="动物"\r
    target.getType=function(){\r
        return this.type;\r
    }\r
    target.protype.eat=function(){\r
        console.log('eat')\r
    }\r
}\r
\r
\r
@其他装饰器,也可以给其他类加东西\r
@ClassDecorator\r
class Animal{}\r
\r
console.log((Animal as any).type)\r
\r
\`\`\`\r
\r
- 方法装饰器\r
\r
\`\`\`typescript\r
function Enum(isEnm:boolean){\r
    return function(target:any,key:string,descriptot:PropertyDescriptor){\r
        //装饰器函数\r
        //类的原型和类的名字\r
        //属性访问器\r
        descriptor.enumerable=isEnm\r
        let original=descriptor.value\r
        descriptor.value=function(...args:any){\r
            //写一些函数逻辑\r
            original.call(this,...args)\r
            //切片和声明相关的东西\r
        }\r
    }\r
}\r
\r
class Animal{\r
    @Enum(true)\r
    //装饰器写在这里\r
    eat(){}\r
}\r
const animal = new Animal()\r
//对类和方法进行装饰是有意义的,对其他就没有什么意义了\r
\`\`\`\r
\r
- 属性装饰器\r
\r
  如果编译成esNext会编译成\r
\r
  ![75233520201](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752335202016.png)\r
\r
  使用ES2015编译成,默认此值就在函数上\r
\r
  ![75233523060](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752335230604.png)\r
\r
  在new时候才会赋值,并不会在最开始即在函数上\r
\r
- 访问符装饰器\r
\r
  \`\`\`typescript\r
  class Animal {\r
      private _value: string = '';\r
      \r
      @ToUpperCase('PREFIX_') // 添加前缀参数\r
      get value() {\r
          return this._value;\r
      }\r
      \r
      set value(newVal: string) { // 注意这里应该和getter同名\r
          this._value = newVal;\r
      }\r
  }\r
\r
  function ToUpperCase(prefix: string) {\r
      return function(target: any, key: string, descriptor: PropertyDescriptor) {\r
          // 保存原始的setter\r
          const originalSet = descriptor.set;\r
          \r
          // 修改setter\r
          if (originalSet) {\r
              descriptor.set = function(newVal: string) {\r
                  // 调用原始setter，但先处理值\r
                  originalSet.call(this, prefix + newVal.toUpperCase());\r
              };\r
          }\r
      };\r
  }\r
\r
  // 使用示例\r
  const animal = new Animal();\r
  animal.value = 'test'; // 实际会存储为 "PREFIX_TEST"\r
  console.log(animal.value); // 输出 "PREFIX_TEST"\r
  \`\`\`\r
\r
- 参数装饰器\r
\r
  ![75239803739](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398037397.png)\r
\r
  ![75239805226](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398052264.png)\r
\r
  只能拿到类,key和索引\r
\r
  构造函数种的参数装饰器指代的是类本身,key是undefined\r
\r
- 装饰器的执行顺序\r
\r
   ![75239888960](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398889604.png)\r
\r
  ![75239891991](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398919918.png)\r
\r
  生成顺序\r
\r
  ![75239894407](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752398944077.png)\r
\r
  对于实例来说，先走参数，再走对应的方法（构造函数），再到静态属性，最后是自己的类\r
\r
  装饰器的使用主要是切片，在类的过程里面进行添加和修改删除等操作\r
\r
 \r
\r
**反射元数据**\r
\r
反射就是修改程序执行的时候的行为\r
\r
元数据：描述数据的数据\r
\r
修改执行代码的行为，对数据进行描述\r
\r
 ![75247141927](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752471419272.png)\r
\r
安装这个包，然后使用这个函数进行相关的描述\r
\r
![75247163861](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752471638615.png)\r
\r
有很多相关的扩展和处理\r
\r
> 命令式和声明式的\r
\r
使用声明式的装饰器来写\r
\r
![75247211775](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752472117751.png)\r
\r
会更加清晰一点\r
\r
使用了装饰器\r
\r
\r
\r
- 控制反转,失去了控制权\r
\r
- 控制正转，整个控制的过程都是我自己完成的\r
\r
- 依赖注入\r
\r
  通过依赖注入让代码变得灵活，而不是四班，他是oci的具体实现。\r
\r
\`\`\`typescript\r
  // 首先定义必要的装饰器和容器\r
  const container = new Map();\r
\r
  // Provide 装饰器 - 用于标记可被注入的类\r
  function Provide(identifier?: string): ClassDecorator {\r
    return (target: any) => {\r
      const id = identifier || target.name;\r
      container.set(id, target);\r
    };\r
  }\r
\r
  // Inject 装饰器 - 用于标记需要注入的属性\r
  function Inject(identifier: string): PropertyDecorator {\r
    return (target: any, propertyKey: string | symbol) => {\r
      const dependency = container.get(identifier);\r
      if (dependency) {\r
        target[propertyKey] = new dependency();\r
      }\r
    };\r
  }\r
  //装饰器实现依赖注入 \r
\r
\r
\r
  // 定义接口\r
  interface Monitor {\r
    display(): void;\r
  }\r
\r
  interface Host {\r
    start(): void;\r
  }\r
\r
  // 实现类\r
  @Provide("Monitor")\r
  class Monitor23inch implements Monitor {\r
    display() {\r
      console.log("23英寸显示器已开启");\r
    }\r
  }\r
\r
  @Provide("Host")\r
  class AppleHost implements Host {\r
    start() {\r
      console.log("苹果主机启动");\r
    }\r
  }\r
\r
  // 计算机类使用依赖注入\r
  class Computer {\r
    @Inject("Monitor")\r
    public monitor: Monitor;\r
\r
    @Inject("Host")\r
    public host: Host;\r
    \r
    bootstrap() {\r
      this.monitor.display();\r
      this.host.start();\r
    }\r
  }\r
\r
  // 使用示例\r
  const myComputer = new Computer();\r
  myComputer.bootstrap();\r
\r
  1. **解耦**：类不直接依赖具体实现，而是依赖抽象\r
  2. **可测试性**：可以轻松替换依赖进行测试\r
  3. **可维护性**：修改实现时不需要修改使用方代码\r
  4. **可扩展性**：方便添加新的实现\r
\r
  这个容器可以描述成\r
\r
  ![75273835513](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1752738355133.png)\r
\r
  可以绑定实例,自动解析依赖\r
\r
  可以用Map表替代\r
\`\`\`\r
\r
\r
####  tsconfig.json\r
\r
\`\`\`json\r
{\r
    'target':"es5",//根据最后的打包文件环境来设置,停入对应的声明文件\r
    "lib":[],//打包的时候引入的类型声明信息\r
    "jsx":"react",//jsx环境的配置,preserve是jsx不转jsx,react-jsx是新版默认值\r
    "experimentaDecorators":true,//启用装饰器语法\r
    "enitDecoratorMetadata":true,//发射元数据信息,默认使用装饰器都i会开启这个值\r
    "jsxFactory":"h",//为了preact提供\r
    "jsFragmentFatory":"Fragment",//针对Fragement实现不同的功能\r
    "jsxImportSource":"",//更改导入路径\r
    "moduleDetection":"force"//当前文件如果有import export就是模块,如果没有就是全局,强制实现\r
}\r
\`\`\`\r
\r
\r
\r
\r
\r
####  模块相关配置\r
\r
ts声明文件\r
\r
“module”可以选择CommonJS或者es6、es2020、esnext、nodenext、AMD、UMD、systemjs（微前端）\r
\r
 ![75332151375](C:\\Users\\zxh\\Desktop\\前端\\typescript\\ts.assets\\1753321513751.png)\r
\r
> "moduleResolution":"Classic"经典的解决方法,这里也可以指定node版本,导入模块的时候,有package.json(main,module,exports)\r
>\r
> 使用更高级的node来支持更多新语法\r
>\r
> \r
>\r
> \r
\r
 \r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,L8=Object.freeze(Object.defineProperty({__proto__:null,default:B8},Symbol.toStringTag,{value:"Module"})),N8=`\r
# 大集训-7月22日\r
历时许久，超过了四个小时，终于在不触碰网的情况下把全体成员运过去。\r
\r
开始和结束总是困难的，其实坚持下去的过程也是。起初困顿于不断的试错，慢慢寻求方法，从认为不可行到可行，一切都值得尝试。过程在于坚持：没有各位的鼓励和陪伴，从各自为营的休息到互相捶背捏肩；一次次的跌倒和咬牙坚持中，大家坚定的眼神传递力量；默契到无需言语便能及时调整策略。相信坚持会有美好发生——疲倦时未放弃，坚守"不丢下一个人"的守则。我们做到了，游戏结束亦是团队新生的开始。\r
\r
我一直相信大家都是值得托付的伙伴，谢谢大家！  \r
小海这个名字源自歌曲**《小さな海》**（不是刘海条形码啊喂！）\r
\r
正如歌词所言：\r
\r
> 散々(さんざん)泣いて泣き腫らして枯れた海が  \r
> *那片因无数次痛哭流涕而干涸的大海*  \r
> また今日も明日(あす)を懲(こ)りずに探してる  \r
> *今天的我仍在日复一日地苦苦找寻着它*  \r
> \r
> 簡単なことばっかりじゃつまんないかも  \r
> *把简单的事情遍遍重复也许枯燥无趣*  \r
> 今よりも少しだけ明(あか)るくなれたら  \r
> *可它们若能让我比现在更开朗一点*  \r
> いいな  \r
> *我便别无所求*  \r
> \r
> ねぇ まだ今日は終わっちゃいない  \r
> *呐 今天还没有到此为止啊*  \r
> 針(はり)は指せど僕の眠気(ねむけ)は来ない  \r
> *时针转动不停 我却睡意全无*  \r
> いっそ 朝が来なければ  \r
> *"要是黎明永不到来就好了..."*  \r
> \r
> **——《小さな海》**\r
\r
\r
# 出发-7月24日\r
大集训的最后一天\r
\r
明天大家将各自奔赴四个营点，下次再见又是何时？没关系，相比离别，我更珍视我们共同经历的时光。生活广阔，这些回忆如同宝石永远镶嵌在生命里——或许在未来的某刻，你会突然想起这群伙伴：  \r
我们一起走过2月的面试、4月的一培、5月的营长面培、6月的二培，直至7月的大集训。那些共创的瞬间，那些寻找最好自己的时刻，这里馈赠了我最美好的夏日，就像十年前那样。  \r
你们的到来，让这个夏天如此不同，让我在平凡生活中看见世界的斑斓色彩。\r
\r
为什么来到这里？  \r
除了孩子们，更是为我自己。在这个纷繁年代，我想回到十年前的夏天：  \r
找回当初的自己，重温心连心的珍贵。我们自五湖四海汇集，终将一起出发（也想起培训中未能同行的伙伴们，祝福你们一切顺利！）\r
\r
> 感谢遇到的每一个人，我永远记得你们  \r
> 特别感谢所有默默的关怀与照顾，不论直接或含蓄，我都深深懂得 [流泪]\r
\r
---\r
\r
夏日日记正式启程  \r
记录此后16天的每一刻！\r
\r
---\r
\r
献上歌词：《蝴蝶》\r
\r
> 那一只蝴蝶 拼了命破茧  \r
> 却没有漂亮的鳞片  \r
> 它依然 飞过了田野  \r
> \r
> 多少次折断 碎成了多少片  \r
> 总有人爱你不圆满  \r
> 我看见你 有多少灿烂  \r
> \r
> **走吧** 就算我们无法让大雨停下  \r
> 还有我 陪你在大雨里放肆奔跑啊  \r
> 地球上 天空下 我们做一对傻瓜  \r
> 你我生来时就注定 天真而伟大  \r
> \r
> **你啊** 就算永远无法被世界回答  \r
> 没关系 还有名为自己的魔法  \r
> 你啊 就算下一秒全世界都崩塌  \r
> 还有我在你身边说我爱你啊  \r
> \r
> 做尘埃 做晚霞 我们总会再见的吧  \r
> 下次见面时 我们会 手捧鲜花  \r
> \r
> 你说你来到这个世界的那天  \r
> 神给了每个人快乐入场券  \r
> 它想让你吹吹风去看看蓝天  \r
> 也温柔的接住破碎的雨点  \r
\r
\r
\r
# 招生-7月25日\r
### 盛大的奇迹：走访日纪实\r
\r
从清晨6点起床开始：  \r
 早出买菜 →  准备午餐 →  逐户走访 →  深夜"客服时刻"筛选  \r
**各位辛苦了！** 这是所有人共同创造的盛大奇迹！\r
\r
### 感谢与感动\r
- 小伙伴们：撑起活动的脊梁  \r
- 小朋友们：清晨8点就敲响会议室的活力  \r
- 准高中生们：结伴而来的青春身影  \r
- 家长们：托起梦想的坚实后盾  \r
\r
走访中遇见的星光：  \r
带路的活泼小向导  \r
两年前参与的孩子（甚至找到了当年的照片！）  \r
启明星支教队时期的老学员们  \r
> 好奇着：两年前的记忆在他们心中留下了怎样的光？  \r
> 期待着：未来重逢时交换成长的故事  \r
\r
### 天空的馈赠\r
վ'ᴗ' ի 这里的蓝天蓝得纯粹——  \r
是广州从未见过的通透画布  \r
当夜幕低垂，热闹沉淀成星光  \r
我们仍为明天的开营仪式筹备：  \r
**相逢意气为君饮，愿一切顺利！**\r
\r
---\r
\r
### 《遥远小镇的我》· 夏日记事\r
\r
> 叮，早上被闹钟吵醒  \r
> 看，天空上布满乌云  \r
> 听，蝉鸣不断的声音  \r
> 想，出去看看 风景  \r
> \r
> 五彩斑斓，是夏日气息  \r
> 微风吹过，春天留下的痕迹  \r
> 张开双手，去触及天际  \r
> 青春回忆，倒映着夏日的你  \r
> \r
> 啦 啦 啦  \r
> 不知不觉看遍小镇的风景  \r
> 啦 啦 啦  \r
> 不知不觉走遍青春的轨迹  \r
> \r
> 啦 啦 啦  \r
> 为何乌云会带来电闪雷鸣  \r
> 啦 啦 啦  \r
> 乌云  \r
> \r
> 哗啦哗啦哗啦哗啦在下雨  \r
> 哗啦哗啦哗啦落在小镇里  \r
> 哗啦哗啦哗啦是谁在哭泣  \r
> 彩虹下的你，在那夏日里  \r
> \r
> 哗啦哗啦哗啦时间在过去  \r
> 彩虹下映出雨后的涟漪  \r
> 夕阳记录着水洼上的我和你  \r
> 全部写进，夏天的日记  \r
\r
![68df146a14c68aa96f28373b12f071d1.jpg](https://s2.loli.net/2025/08/19/rwlqodXRVPIsMyx.jpg)\r
\r
# 开营首日-7月26日\r
\r
今天正式开始了，像落叶滋润大地般自然。  \r
重逢启明星时期的孩子们：  \r
- **灰原**热情帮画黑板报，活跃得很  \r
  *（厨房随时等你大展厨艺[旺柴]）*  \r
- **小明**的漫画惊艳全场，赠我的画作  \r
  *（这份礼物我会永远珍藏！）*  \r
还有好多好多熟悉的面孔——谢谢你们让这个夏日闪闪发光！\r
\r
连续数日早6点奋战至深夜00:30，今夜宿舍楼演出特别节目——  \r
中央电灯彻夜长明！虫群盛宴引发女生宿舍惊叫连连  \r
[憨笑][憨笑] 这魔性笑声在走廊回荡到天明   \r
前几天摸黑备课完美收工  \r
今夜满电供应反而怅然若失  \r
*「前几天晚上都没有灯，今天就那么浪费电吗...」*\r
\r
---\r
\r
## 班歌《我和你》\r
\r
> 晴天，有点孤单。  \r
> 玩具，丢在旁边。  \r
> 电视，里没有新鲜。  \r
> 球鞋，跑不过时间。  \r
> \r
> 我要，更大的世界。  \r
> 装满，不同的探险。  \r
> 能让，你陪在身边，每秒每天。  \r
> \r
> **我和你，飞到蓝蓝的天边。**  \r
> **我和你，种下满满的花园。**  \r
> **我和你，分享暖暖的光线。**  \r
> 再靠近一点。(再靠近一点。)  \r
> \r
> **我和你，就像蓝蓝的天边。**  \r
> **我和你，就像满满的花园。**  \r
> **我和你，就像暖暖的光线，把地球照亮。**  \r
> (把地球照亮。)  \r
> \r
> 再靠近一点，再靠近一点。  \r
> 再靠近一点，再靠近一点。  \r
\r
\r
\r
\r
![81d7677f21bf4e5d62001d707a770963.jpg](https://s2.loli.net/2025/08/19/5I3ezAvGJ9cK4SV.jpg)\r
\r
\r
\r
# 日常-7月27日\r
多云，不易观星，易探险，适合摸鱼，易敲键盘\r
\r
---\r
\r
> 就像是那 灰色天空中的小雨  \r
> 下下停停 不动声色淋湿土地  \r
> 尽管总是阴晴不定  \r
> 偶尔也会闪出星星  \r
> \r
> **——《形容》**\r
\r
---\r
![365b40dbfe82ecd4addf0d8bc1635978.jpg](https://s2.loli.net/2025/08/19/xTNKQ1Vp7SwrIv4.jpg)\r
\r
\r
\r
# 日常-7月28日\r
\r
** 这世界那么多人，多幸运有个我们~ ** \r
今天看你们日记的时候还是挺感动的，其实没有写什么回复，因为时间太赶了，飞鼠刚发下来没多久就催收了，灰原写的太好了让我都不知道怎么回复，今天没去上什么课，都在助教，没想到就收到了你们送的袋子，太震惊了这个，感谢你们，趁机大家一起合影但是照片都在小熊的相机里，只能无奈加一个我了  \r
\r
今天翻看了我的信封，竟然有两封信哎，一一回复，也算是今天里的小惊喜了  \r
\r
今天依然探险后院，害怕有蛇。每天都有鹰嘴桃吃，[流泪]送了太多桃子了，秘书处已经不给我们收了，以后都要拒收了，谢谢你们！  \r
\r
明天还要上两节，具体是什么？保持期待吧~反正我准备好了！  \r
\r
---\r
\r
> 你会翻过山 看到万丈晴天  \r
> 飞鸟正越过海面  \r
> 你会迎着风 放着胆唱着歌  \r
> 把风景都看遍  \r
> \r
> 你会翻过山看到万里平原  \r
> 天光正穿过云间  \r
> 你会握着拳赤着脚流着汗  \r
> 攀过千难万险  \r
> \r
> **——《亲爱的你啊》**\r
\r
---\r
![3534c79c22d9b7c02104671a7b007373.jpg](https://s2.loli.net/2025/08/19/eZKD5NuqR7gvVQr.jpg)\r
\r
\r
\r
\r
\r
# 错误-7月29日\r
\r
\r
知晓天空之蓝的人~  \r
没拍什么照片，基本都是合照和风景照，合照就不发了，应该没人想看我吧？还是一起看看蓝天吧！  \r
\r
今天也犯了一些错误，对不起飞鼠姐姐了[失望]然后就是早上那节课并没有讲好，昨天晚上都在准备小班的课，忽略了大班，我以为可以轻松搞定的[失望]  \r
\r
然后就是国王和天使环节，请我的天使看到这个朋友圈就拍我一下，还有请天使不要用夹菜的方式提醒我是天使了，今天有一群人互相夹菜，怎么可以分辨出来！  \r
\r
虽然上一轮没有给国王做很多事情[失望]但也有想着去做什么的  \r
\r
---\r
\r
> 分享歌词：  \r
> 将祈愿着相会的诗，  \r
> 连接至时间的彼方，  \r
> 在那描绘的梦的世界中，  \r
> 静待它的到来，  \r
> 所以 请一直 ，  \r
> 一直相信当下吧，  \r
> 这遥不可及的夏日彼方啊，  \r
> 从描绘的那双手中 若是能回到被夺走的时光，  \r
> 无论多么寂寞 唯有听见连接的声音，  \r
> 一同度过这段时光  \r
> \r
> **——《夏日彼方》**  \r
\r
小提一下这首歌来源一个很喜欢的游戏，在偶然中相信一切是最好的安排，所以请一直相信当下吧！\r
![b145acd0b07888d763e1535e1208b718.jpg](https://s2.loli.net/2025/08/19/GP4Lma8gVe5ItlE.jpg)\r
\r
\r
\r
#  停课-7月30日\r
\r
雨天🌧️\r
没有去上课\r
最伤心\r
\r
> 听歌~\r
> 开始谁‮不也‬明白\r
> 风风雨‮宁雨‬愿相信\r
> 明‮睛天‬天\r
> 爱‮好不‬的我们还能\r
> 迎着阳‮一光‬步一步来\r
> 毕竟路‮有上‬你作伴\r
\r
> ——《明天晴天》\r
\r
\`\`\`\r
\r
\`\`\`\r
\r
![87101cc19e94a319abda37d7fa9736c2.jpg](https://s2.loli.net/2025/09/12/fg8BlvHLINhyMb6.jpg)\r
\r
\r
\r
\r
\r
\r
\r
#  家访日- 8月1日\r
\r
去家访，终于到我去家访了！\r
​\r
​路上遇到灰原她们，带了一下路，大家都好热情🥺送了好多桃子，我还是觉得太好吃了，一点都不腻\r
​\r
​然后再开始我们的聚餐！偶遇音游高手，跪了卧槽，遇到大佬了▄█▀█●\r
​\r
​然后包饺子，搞游戏，狼人杀又玩了一次自己的逆天打法，村民跳预言家乱杀。。。。。\r
​\r
​晚上的星空夜谈实在是太久了，坚持不住了。。结果回到宿舍还是水灯风扇全部用不了🥺跳了。。。\r
​\r
​生活还是很长，就算时间过半，我一定永远记得你们\r
\r
> 总‮经要‬历些伤疤，\r
> 才能算真‮长正‬大，\r
> 因为有‮憾缺‬存在完‮才美‬称无瑕，\r
> 有‮要想‬去的‮方地‬最后一定‮到会‬达，\r
> 哪怕途中总有人‮拽想‬你下悬崖，\r
> 途中难免‮风起‬沙，\r
> “坚持‮自做‬己就好啦”，\r
> 你早已写‮回下‬答，\r
> 笑‮把着‬眼眨了眨，\r
> 天‮行马‬空的想法，\r
> 编织无‮新数‬奇童话，\r
> 梦里星‮不星‬说话，\r
> 只等‮摘你‬下它，\r
> 那就去‮星追‬星吧，\r
> 坎坷与梦想‮爱相‬相杀，\r
> 数过多少日落才开‮一出‬枝花。\r
> ​\r
> ——《去追星星吧》\r
\r
![75765846763](C:\\Users\\zxh\\Desktop\\前端\\博客-新\\xh-blog\\src\\blog\\上坪支教日记.assets\\1757658467639.png)\r
\r
\r
\r
\r
\r
#  普通一天\r
\r
正常的一天？\r
​迎来了陪伴者的离别，接下来就剩我们18人了🥺谢谢咚咚，笙笙，迷糊，咩咩\r
​\r
​少年的日记，还挺有中二的感觉，那是我过去的青春唉，我靠，真好\r
​\r
​今天的雨实在是太大了，平静的一天发现晚上一堆没做的，忙到现在才能回到宿舍里，其他事情可能要放一下了，现在这里有点急\r
​\r
离别的饭啊~我放宿舍的零食竟然被发现了我靠，虽然我到现在都没有吃~\r
\r
\r
​蚊子太多了，今天还爽玩音游了，啪哩打音游也好强。。。飞鼠竟然把课程共享文档ppt删掉了我靠我靠，然后被七七骂死了哈哈哈哈。。。今天晚上的菜挺好吃的，可惜今天拉了三次肚子，这段时间吃素太多已经不习惯大鱼大肉了吗。。。今天若芯她们还送了一些东西给我，有亿点点感动\r
​\r
​时间紧迫，多线程干事ing\r
​\r
END，今天没有歌词\r
\r
![e8226dbc6fd2b40a8f0282cc89de66c6.jpg](https://s2.loli.net/2025/09/12/zDwXZkjgQKTvW2B.jpg)\r
\r
\r
\r
\r
\r
\r
\r
#  我在做饭-8月3日\r
\r
做饭ing，好香。。。\r
赶进度ing，今天做出来！\r
​0元购的耳机和吹风筒到了，好耶\r
​孩子们还是很有活力啊，真不戳！\r
​好像也离结束有点点近了\r
太快了。。\r
\r
![e79fc47d18852abe94529ca38e20f5f8.jpg](https://s2.loli.net/2025/09/12/SAhTRqmlcB6x5af.jpg)\r
![c22d37ef2f9a4701aaff6d75057110be.jpg](https://s2.loli.net/2025/09/12/l2FdLJIuzEH1SX7.jpg)\r
\r
\r
\r
\r
\r
#  离别的蛋糕 - 8月4日\r
\r
时间依旧在走，半个月的支教生活来到尾声\r
​\r
感谢音游大佬十三帮我打满了支线章节。。太牛了。还有当时走访遇到的家长，因为有事要提前回中山，发来的信息。还有靖宇送来的画，孤独摇滚[流泪]还有许许多多的你们。。。。\r
\r
\r
\r
> 但是啊\r
> 站在原‮看地‬着天空也被‮们我‬误认成‮一了‬种错\r
> 又有多‮哥少‬白尼\r
> 因此选‮放择‬弃了地动说\r
> 可是\r
> 可是\r
> 我怎么‮甘能‬心认输呢\r
> 闭上眼‮等睛‬待天睛\r
> 管他‮瓣花‬落没落\r
>\r
> ​——《如果花期只有60秒》\r
\r
![29b38ae30e34d1a6de88f19ce3737cf5.jpg](https://s2.loli.net/2025/09/12/coqM3md6N9E4BOC.jpg)\r
![0c58fe6d94af2e613a16a31719256d25.jpg](https://s2.loli.net/2025/09/12/TRuM432yaQs1brX.jpg)\r
\r
\r
\r
#  离开-8月7日\r
\r
一个故事的结‮是尾‬另一个故事的序章\r
一个‮程旅‬的结‮是束‬另一个旅程的起航\r
我还有很多‮要想‬做的事\r
我还‮想有‬写的歌\r
我还‮想有‬画的画\r
​未来再见\r
\r
\r
![image.png](https://s2.loli.net/2025/09/12/Zs8SXDRWwfoubqF.png)\r
\r
\r
\r
\r
\r
#  离开的回望\r
\r
关于这段时光，最开始的相遇，还是要回到十年前，对于我来说，现在刚好是是十年之后\r
​\r
​2015年的夏天，小镇来了一群年轻人，在离我家不到100米的地方开始举办了那年启明星支教队的灯塔营点，那年因为年龄问题，并没有加入\r
​\r
​2016年的夏天，他们又来了，这次的我已经符合报名的年龄，可以去参与一下，开营那天有点开心，不小心摔一跤，伤疤现在还可以看到，这段时间，认识了青音，老潘 ，恒星，西西……2016的灯塔星空\r
​\r
​2017年的夏天，启明星支教队再一次来到小镇，我们再次在夏天相遇，这一年没有看到16年的你们，但也给我带来了新的回忆……\r
​大明，胡子，静怡……\r
​\r
​2022年，再次听到支教队在小镇的消息，这时候我已经走到了我的高中\r
​\r
​2025年春天，此时的启明星支教队已经改名为星河圆梦，我一直关注的招募通知终于发了出来，接下来的日子，从面试到一培再到面培再到二培，最后的大集训，我遇到了不一样的人们，我们一起奇思妙想，一起试课备课，一起准备夏令营的形形色色的事情，我们遇到了很多困难，也经历了很多\r
​\r
​2025年的夏天，我们来到了上坪这个地方，我们四个营点里，上坪环境可能是最难的，乡镇中学的小世界、每天刷新的小动物、阴雨绵绵的夏天、没风扇没灯的晚上、偶尔没有冷水热水的午后、晚上满天的蚊子……但是我们上坪营点的风气却是非常好，大家都在努力着，困难很多也很积极，偶尔很累也在互相安慰。\r
\r
时间很长却也很短，感谢lita，七七，小敏，减减，jenny，啪哩，飞鼠，vivi，十三，鸡翅，小熊，小溪，小橘，郭行，点点，派派，TT，笙笙……你们的陪伴，还有上坪的小朋友大朋友们，从三年级到准高一，我遇见了许许多多不一样的你们\r
​\r
​最后离别的时候，其实也是有点难过的，有时候确实不想面对离别，分开后下次再见也不知道是在何时，无论在何时何地，也别忘记这段时光，即使倒计时结束我们也各自走向不一样的明天，即使不知不觉走向最后一次见面，即使……\r
\r
剩下的暑假，比赛做完，把活动的任务做完，把我们这段时光的视频剪出来，写一首歌\r
​\r
​上坪营点的各位，我爱你们\r
\r
\r
\r
> 夏虫 summer insects\r
>\r
> 无形的 火 扭曲着世‮轮界‬廓\r
> 高温线 耗尽 夏日‮盘的‬中 最后一滴颜色\r
> 面对陌生‮茧的‬壳 和渺小的自我\r
> 听‮广到‬阔晨星银河 跑‮我进‬的耳朵\r
> 若痕迹都‮曾不‬亲眼见过\r
> 若连平凡都‮得显‬像个传说\r
> 还留什‮时么‬间惋惜惶惑\r
> 我们‮定约‬在光源处聚合\r
> 固执的 夏虫汲‮着取‬美梦解渴\r
> 在湿漉的夜 结群飞行 就‮甩能‬开脆弱\r
> 鞘‮吹翅‬折 竟‮描然‬绘出微小漩涡\r
> 问我 数百‮伏天‬蛰 步谁‮覆的‬辙\r
> 下一次 何时  醒呢\r
>\r
> 满载‮考思‬的脑袋 偏爱 沉默\r
> 盛不住心‮的事‬我 倾囊而出 不怕干涸\r
> 命运‮天的‬平 将两‮都手‬摊开了\r
> 要‮温在‬室和寒‮中风‬取舍 我忘‮了记‬退缩\r
> 若痕迹都不曾‮眼亲‬见过\r
> 若连‮凡平‬都显得‮个像‬传说\r
> 身旁流‮探萤‬起万家灯火\r
> 再‮澜波‬坎坷 也可‮依以‬托\r
> 好奇‮夏的‬虫向‮火焰‬中心奔波\r
> 不论‮起是‬点 还是终点 就算一‮所无‬获\r
> 开弓无悔 为把星点可‮性能‬捕捉\r
> 是我 在风‮出眼‬没 将未‮触知‬摸\r
>\r
> 哪‮只怕‬是 一瞥见‮底谜‬就坠落\r
> 还有无数个 想‮求探‬的巧合\r
> 哪怕只是 领悟到答‮的案‬晦涩\r
> 也全‮证力‬明 所经过都值得\r
>\r
> 问我\r
> 是我\r
>\r
> 自由的 夏虫编‮着织‬美梦解渴\r
> 单‮的薄‬外壳 展开花纹 尽将内心诉说\r
> 鞘‮振翅‬涌 卷起击碎定论‮漩的‬涡\r
> 等待 数百天伏蛰 这一‮冲瞬‬破\r
> 最高亢的歌 予我\r
> 肆 意 鸣 唱\r
> 直到 嘶哑 那刻\r
\r
![e3a4d1d42dc53b0130d6f3251a8332ee.jpg](https://s2.loli.net/2025/09/12/OhqIXVMSuszWRjf.jpg)\r
\r
![f69b7f19c3614f77f87ca8785e87b141.jpg](https://s2.loli.net/2025/09/12/UoeQ6BzdPIHsmkv.jpg)\r
\r
end!`,j8=Object.freeze(Object.defineProperty({__proto__:null,default:N8},Symbol.toStringTag,{value:"Module"})),H8=`# 实习项目—仿百度云盘\r
\r
**项目名称：bd**云盘  \r
\r
**介绍:**基于vite的网页端云盘，可以上传文件到云端服务器（开发阶段可以选择上传到虚拟机内），可以生成链接分享文件，也有页面管理或者预览文件\r
\r
**设计图**\r
\r
![74045808485](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740921468113.png)\r
\r
![74045824678](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458246788.png)\r
\r
![74045826739](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458267398.png)\r
\r
![74045827746](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740458277468.png)\r
\r
\r
\r
**技术栈：**vue3、js、Ts、axios、cookies、element-plus库、vue-router......等\r
\r
**要求：**\r
\r
1. 用户注册，qq快捷登录，绑定邮箱\r
2. 文件分片上传、断点续传、秒传、上传进度显示、文件预览、文件重命名、文件移动、文件分享下载删除\r
3. 回收站和文件分享列表\r
4. 后台管理，超级管理员\r
5. 分享链接和分享码\r
\r
**学习：**先去学习一些算法，完成页面布局的构建，准备学习一些难点\r
\r
\r
\r
\r
\r
目前构建的页面图\r
\r
![74075097903](C:\\Users\\zxh\\AppData\\Local\\Temp\\1740750979031.png)\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,U8=Object.freeze(Object.defineProperty({__proto__:null,default:H8},Symbol.toStringTag,{value:"Module"})),K8=`#  实现前端脚手架\r
\r
1. 创建一个package.json\r
\r
   ![74588271784](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745882717840.png)\r
\r
2. 创建一个入口文件bin/entry,在package.json里面有写这个路径\r
\r
   ![74588277703](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745882777031.png)\r
\r
   要在这个文件里引入index.js这个js文件,entry作为了入口文件进行配置\r
\r
   #! /user/bin/env node 指定了这个脚本的解释程序,#!则是发布npm包的时候使用\r
\r
3. 运行:\r
\r
   先sun wanghaoyi$ cnpm link到全局,sun wanghaoyi\\$ sun 运行\r
\r
4. comander@9.0.0\r
\r
   安装cnpm install comander@9.0.0\r
\r
   一个专门处理控制台命令的东西\r
\r
   在index.js配置\r
\r
   ![74588353511](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745883535113.png)\r
\r
   sun -v返回1.0.0\r
\r
5. chalk@4.0.0\r
\r
   安装cnpm install chalk@4.0.0\r
\r
   控制塔命令美化效果\r
\r
   在index.js写,并且使用sun来输出\r
\r
   > console.log(\`\${chalk.green.underline.bold("forgive")}me\`)\r
   >\r
   > 加粗下划线绿色\r
\r
6. inquirer@8.2.1\r
\r
   一个命令行输入效果\r
\r
   在index.js文件写\r
\r
   \`\`\`javascript\r
   const Inquirer = require("inquirer")\r
\r
   new Inquirer.prompt([{\r
       name:"vue",\r
       type:"checkbox",\r
       message:"xxxxxxxxxxxxxxxx",\r
       choices:{{\r
                name:"xx",\r
                checked:"true",\r
               },\r
       {\r
       name:"ts"\r
   },\r
   },\r
   },\r
                       ]).then((data)=>{\r
       console.log(data);\r
   })\r
   \`\`\`\r
\r
   ![74588427425](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745884274257.png)\r
\r
   脚手架做法,放github和放本地,放本地体积比较大\r
\r
![74588582788](C:\\Users\\zxh\\Desktop\\前端\\脚手架\\脚手架.assets\\1745885827888.png)\r
\r
根据用户输入的,去github上下载相关的库\r
\r
基本上就是一个脚手架的基本功能了\r
\r
剩下的就是一些代理服务器的功能,还要打包构建等\r
\r
`,W8=Object.freeze(Object.defineProperty({__proto__:null,default:K8},Symbol.toStringTag,{value:"Module"})),q8=`#  less的编译\r
\r
less的复代码太多了，包含颜色值，容器大小等，那我们是否可以使用js变量声明的方式解决这种问题，原本的css不支持，所以要使用less\r
\r
less是一款css预处理语言，支持变量，混合，函数，嵌套，循环等特点，在css的基础上加了很多大小，比css丰满，为css增加了一些特性，将css作为目标生成文件，然后开发者就只需要使用这种语言进行编码工作\r
\r
注意：\r
\r
- 浏览器不认识less，写的less代码，需要编程成css\r
- 项目中使用预处理语言\r
\r
\r
\r
**编译方法**\r
\r
- 安装node\r
- 安装less     \`npm i -g less\`\r
- 编译less  \r
\r
1. 方法1\r
\r
less\r
\r
\`\`\`less\r
@width:980px;\r
@height:width+100px;\r
@color:skyblue;\r
//定义变量v  \r
#header{\r
    width:@width;\r
    height:@height;\r
    background-color:@color;\r
}\r
\`\`\`\r
\r
使用命令\`lessc style.less style.css\` \r
\r
css\r
\r
\`\`\`css\r
#header{\r
    width:980px;\r
    height:1080px;\r
    background-color:skyblue;\r
}\r
\`\`\`\r
\r
2. 方法2\r
\r
   页面直接引入less.js\r
\r
   通知vscode open with live server\r
\r
   ![74908380253](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083802535.png)\r
\r
3. 方法3\r
\r
   ![74908384187](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083841872.png)\r
\r
   开发的时候使用这些插件\r
\r
   ![74908386336](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749083863369.png)\r
\r
   写完less代码后,ctrl+s自动将less转化为css\r
\r
4. 方法4\r
\r
   在项目中,使用工程化的打包工具\r
\r
   webpack\r
\r
\r
\r
####  变量\r
\r
less允许使用@符号定义变量，变量分配使用冒号：完成，less的变量声明格式为@变量名：变量值\r
\r
![74908691812](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749086918123.png)\r
\r
选择器的名字也可以使用变量，url地址也可以使用变量，变量可以先使用在声明\r
\r
 \r
\r
####  混合\r
\r
![74908740476](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087404769.png)\r
\r
快速复用代码\r
\r
如果不想编译.box1()\r
\r
![74908743901](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087439018.png)\r
\r
混合也可以给他进行传参的操作,这些参数是混合时传递给选择器块的变量\r
\r
![74908771258](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749087712586.png)\r
\r
\r
\r
####  嵌套\r
\r
![74937040217](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749370402174.png)\r
\r
一个嵌套的写法\r
\r
可以一直嵌套下去\r
\r
![74937061356](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749370613566.png)\r
\r
&的意思表示当前的父层级,比如这里的&就表示一个li\r
\r
\r
\r
\r
\r
\r
\r
####  运算\r
\r
基本运算符+ - * / 可以对任何数字 变量或者颜色进行运算,如果可以的话,算术运算会在加减或者比较之前会进行单位换算,计算的结果以最左侧操作数的单位类型为准,如果单位换算无效或者失去意义,则忽略单位\r
\r
![74937203251](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372032514.png)\r
\r
实列\r
\r
\r
\r
\r
\r
####  函数\r
\r
less内置了很多用于转化颜色和处理字符串,算术运算的函数,这些函数在less函数手册有记录\r
\r
![74937243532](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372435320.png)\r
\r
\r
\r
\r
\r
####  作用域\r
\r
和js是一样的,先查找本层,再去父层查找\r
\r
![74937254932](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749372549322.png)\r
\r
####  注释和导入\r
\r
注释和js是一样的,按ctrl加/就可以了\r
\r
导入是\r
\r
使用\r
\r
> @import '相关的路径'\r
\r
\r
\r
\r
\r
#  sass\r
\r
也是和less很像的一种预编译语言\r
\r
创建文件的文件后缀是scss\r
\r
1. 编译sass\r
\r
   使用\`live sasscompiler \`插件或者使用webpack进行编译\r
\r
   ![74937332507](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373325074.png)\r
\r
   点哪个底部的按钮可以插件编译\r
\r
   ![74937334926](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373349267.png)\r
\r
2. 变量\r
\r
   sass使用$来标识变量\r
\r
   ![74937376860](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749373768607.png)\r
\r
3. 嵌套\r
\r
   也可以像less一样使用嵌套去进行\r
\r
4. 导入sass文件\r
\r
   和less一样,变量冲突就选择最近的变量\r
\r
5. 注释\r
\r
   和less一样\r
\r
6. 混合\r
\r
   需要提前定义混合\r
\r
   ![74937422085](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374220852.png)\r
\r
   使用@mixin混合\r
\r
   使用@include导入混合,并且支持传参\r
\r
7. 选择器继承\r
\r
   要用@extend进行继承\r
\r
   ![74937429428](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374294285.png)\r
\r
8. 运算\r
\r
   也是相关的加减乘除都可以,和less很像\r
\r
   指令\r
\r
   ![74937435048](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374350488.png)\r
\r
   ![74937435798](C:\\Users\\zxh\\Desktop\\前端\\预处理器\\scss.assets\\1749374357985.png)\r
\r
   for和if可以去使用\r
\r
   ​`,V8=Object.freeze(Object.defineProperty({__proto__:null,default:q8},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ip;const yu=e=>ip=e,up=Symbol();function Zs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var So;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(So||(So={}));function G8(){const e=jd(!0),n=e.run(()=>te({}));let t=[],r=[];const o=To({install(i){yu(o),o._a=i,i.provide(up,o),i.config.globalProperties.$pinia=o,r.forEach(u=>t.push(u)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const sp=()=>{};function fd(e,n,t,r=sp){e.push(n);const o=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),r())};return!t&&Hd()&&d1(o),o}function Fr(e,...n){e.slice().forEach(t=>{t(...n)})}const Z8=e=>e(),hd=Symbol(),is=Symbol();function Xs(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,r)=>e.set(r,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];Zs(o)&&Zs(r)&&e.hasOwnProperty(t)&&!Ge(r)&&!qt(r)?e[t]=Xs(o,r):e[t]=r}return e}const X8=Symbol();function Y8(e){return!Zs(e)||!Object.prototype.hasOwnProperty.call(e,X8)}const{assign:Rt}=Object;function J8(e){return!!(Ge(e)&&e.effect)}function Q8(e,n,t,r){const{state:o,actions:i,getters:u}=n,s=t.state.value[e];let l;function a(){s||(t.state.value[e]=o?o():{});const c=$1(t.state.value[e]);return Rt(c,i,Object.keys(u||{}).reduce((d,f)=>(d[f]=To(I(()=>{yu(t);const h=t._s.get(e);return u[f].call(h,h)})),d),{}))}return l=lp(e,a,n,t,r,!0),l}function lp(e,n,t={},r,o,i){let u;const s=Rt({actions:{}},t),l={deep:!0};let a,c,d=[],f=[],h;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={}),te({});let g;function m(E){let S;a=c=!1,typeof E=="function"?(E(r.state.value[e]),S={type:So.patchFunction,storeId:e,events:h}):(Xs(r.state.value[e],E),S={type:So.patchObject,payload:E,storeId:e,events:h});const z=g=Symbol();Zo().then(()=>{g===z&&(a=!0)}),c=!0,Fr(d,S,r.state.value[e])}const b=i?function(){const{state:S}=t,z=S?S():{};this.$patch(j=>{Rt(j,z)})}:sp;function v(){u.stop(),d=[],f=[],r._s.delete(e)}const w=(E,S="")=>{if(hd in E)return E[is]=S,E;const z=function(){yu(r);const j=Array.from(arguments),P=[],q=[];function G(H){P.push(H)}function R(H){q.push(H)}Fr(f,{args:j,name:z[is],store:k,after:G,onError:R});let X;try{X=E.apply(this&&this.$id===e?this:k,j)}catch(H){throw Fr(q,H),H}return X instanceof Promise?X.then(H=>(Fr(P,H),H)).catch(H=>(Fr(q,H),Promise.reject(H))):(Fr(P,X),X)};return z[hd]=!0,z[is]=S,z},y={_p:r,$id:e,$onAction:fd.bind(null,f),$patch:m,$reset:b,$subscribe(E,S={}){const z=fd(d,E,S.detached,()=>j()),j=u.run(()=>sn(()=>r.state.value[e],P=>{(S.flush==="sync"?c:a)&&E({storeId:e,type:So.direct,events:h},P)},Rt({},l,S)));return z},$dispose:v},k=Xr(y);r._s.set(e,k);const _=(r._a&&r._a.runWithContext||Z8)(()=>r._e.run(()=>(u=jd()).run(()=>n({action:w}))));for(const E in _){const S=_[E];if(Ge(S)&&!J8(S)||qt(S))i||(p&&Y8(S)&&(Ge(S)?S.value=p[E]:Xs(S,p[E])),r.state.value[e][E]=S);else if(typeof S=="function"){const z=w(S,E);_[E]=z,s.actions[E]=S}}return Rt(k,_),Rt(Se(k),_),Object.defineProperty(k,"$state",{get:()=>r.state.value[e],set:E=>{m(S=>{Rt(S,E)})}}),r._p.forEach(E=>{Rt(k,u.run(()=>E({store:k,app:r._a,pinia:r,options:s})))}),p&&i&&t.hydrate&&t.hydrate(k.$state,p),a=!0,c=!0,k}/*! #__NO_SIDE_EFFECTS__ */function eC(e,n,t){let r;const o=typeof n=="function";r=o?t:n;function i(u,s){const l=cg();return u=u||(l?be(up,null):null),u&&yu(u),u=ip,u._s.has(e)||(o?lp(e,n,r,u):Q8(e,r,u)),u._s.get(e)}return i.$id=e,i}function nC(e){const n={},t=e.match(/^---\s*([\s\S]*?)\s*---/);return t&&t[1]&&t[1].split(`
`).forEach(r=>{const[o,...i]=r.split(":");if(o&&i.length>0){const u=i.join(":").trim();n[o.trim()]=u}}),n}const pd={};function tC(e){let n=pd[e];if(n)return n;n=pd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Gr(e,n){typeof n!="string"&&(n=Gr.defaultChars);const t=tC(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let o="";for(let i=0,u=r.length;i<u;i+=3){const s=parseInt(r.slice(i+1,i+3),16);if(s<128){o+=t[s];continue}if((s&224)===192&&i+3<u){const l=parseInt(r.slice(i+4,i+6),16);if((l&192)===128){const a=s<<6&1984|l&63;a<128?o+="��":o+=String.fromCharCode(a),i+=3;continue}}if((s&240)===224&&i+6<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16);if((l&192)===128&&(a&192)===128){const c=s<<12&61440|l<<6&4032|a&63;c<2048||c>=55296&&c<=57343?o+="���":o+=String.fromCharCode(c),i+=6;continue}}if((s&248)===240&&i+9<u){const l=parseInt(r.slice(i+4,i+6),16),a=parseInt(r.slice(i+7,i+9),16),c=parseInt(r.slice(i+10,i+12),16);if((l&192)===128&&(a&192)===128&&(c&192)===128){let d=s<<18&1835008|l<<12&258048|a<<6&4032|c&63;d<65536||d>1114111?o+="����":(d-=65536,o+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),i+=9;continue}}o+="�"}return o})}Gr.defaultChars=";/?:@&=+$,#";Gr.componentChars="";const gd={};function rC(e){let n=gd[e];if(n)return n;n=gd[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function ri(e,n,t){typeof n!="string"&&(t=n,n=ri.defaultChars),typeof t>"u"&&(t=!0);const r=rC(n);let o="";for(let i=0,u=e.length;i<u;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<u&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){o+=e.slice(i,i+3),i+=2;continue}if(s<128){o+=r[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<u){const l=e.charCodeAt(i+1);if(l>=56320&&l<=57343){o+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}o+="%EF%BF%BD";continue}o+=encodeURIComponent(e[i])}return o}ri.defaultChars=";/?:@&=+$,-_.!~*'()#";ri.componentChars="-_.!~*'()";function Gl(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function Vi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const oC=/^([a-z0-9.+-]+:)/i,iC=/:[0-9]*$/,uC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,sC=["<",">",'"',"`"," ","\r",`
`,"	"],lC=["{","}","|","\\","^","`"].concat(sC),aC=["'"].concat(lC),bd=["%","/","?",";","#"].concat(aC),md=["/","?","#"],cC=255,vd=/^[+a-z0-9A-Z_-]{0,63}$/,dC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,xd={javascript:!0,"javascript:":!0},yd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Zl(e,n){if(e&&e instanceof Vi)return e;const t=new Vi;return t.parse(e,n),t}Vi.prototype.parse=function(e,n){let t,r,o,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const a=uC.exec(i);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let u=oC.exec(i);if(u&&(u=u[0],t=u.toLowerCase(),this.protocol=u,i=i.substr(u.length)),(n||u||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=i.substr(0,2)==="//",o&&!(u&&xd[u])&&(i=i.substr(2),this.slashes=!0)),!xd[u]&&(o||u&&!yd[u])){let a=-1;for(let p=0;p<md.length;p++)r=i.indexOf(md[p]),r!==-1&&(a===-1||r<a)&&(a=r);let c,d;a===-1?d=i.lastIndexOf("@"):d=i.lastIndexOf("@",a),d!==-1&&(c=i.slice(0,d),i=i.slice(d+1),this.auth=c),a=-1;for(let p=0;p<bd.length;p++)r=i.indexOf(bd[p]),r!==-1&&(a===-1||r<a)&&(a=r);a===-1&&(a=i.length),i[a-1]===":"&&a--;const f=i.slice(0,a);i=i.slice(a),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const p=this.hostname.split(/\./);for(let g=0,m=p.length;g<m;g++){const b=p[g];if(b&&!b.match(vd)){let v="";for(let w=0,y=b.length;w<y;w++)b.charCodeAt(w)>127?v+="x":v+=b[w];if(!v.match(vd)){const w=p.slice(0,g),y=p.slice(g+1),k=b.match(dC);k&&(w.push(k[1]),y.unshift(k[2])),y.length&&(i=y.join(".")+i),this.hostname=w.join(".");break}}}}this.hostname.length>cC&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const l=i.indexOf("?");return l!==-1&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),yd[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Vi.prototype.parseHost=function(e){let n=iC.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const fC=Object.freeze(Object.defineProperty({__proto__:null,decode:Gr,encode:ri,format:Gl,parse:Zl},Symbol.toStringTag,{value:"Module"})),ap=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,cp=/[\0-\x1F\x7F-\x9F]/,hC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Xl=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,dp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,fp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,pC=Object.freeze(Object.defineProperty({__proto__:null,Any:ap,Cc:cp,Cf:hC,P:Xl,S:dp,Z:fp},Symbol.toStringTag,{value:"Module"})),gC=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),bC=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var us;const mC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),vC=(us=String.fromCodePoint)!==null&&us!==void 0?us:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function xC(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=mC.get(e))!==null&&n!==void 0?n:e}var un;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(un||(un={}));const yC=32;var Kt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Kt||(Kt={}));function Ys(e){return e>=un.ZERO&&e<=un.NINE}function CC(e){return e>=un.UPPER_A&&e<=un.UPPER_F||e>=un.LOWER_A&&e<=un.LOWER_F}function _C(e){return e>=un.UPPER_A&&e<=un.UPPER_Z||e>=un.LOWER_A&&e<=un.LOWER_Z||Ys(e)}function wC(e){return e===un.EQUALS||_C(e)}var tn;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(tn||(tn={}));var Ht;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Ht||(Ht={}));class kC{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=tn.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ht.Strict}startEntity(n){this.decodeMode=n,this.state=tn.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case tn.EntityStart:return n.charCodeAt(t)===un.NUM?(this.state=tn.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=tn.NamedEntity,this.stateNamedEntity(n,t));case tn.NumericStart:return this.stateNumericStart(n,t);case tn.NumericDecimal:return this.stateNumericDecimal(n,t);case tn.NumericHex:return this.stateNumericHex(n,t);case tn.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|yC)===un.LOWER_X?(this.state=tn.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=tn.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,o){if(t!==r){const i=r-t;this.result=this.result*Math.pow(o,i)+parseInt(n.substr(t,i),o),this.consumed+=i}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(Ys(o)||CC(o))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const o=n.charCodeAt(t);if(Ys(o))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===un.SEMI)this.consumed+=1;else if(this.decodeMode===Ht.Strict)return 0;return this.emitCodePoint(xC(this.result),this.consumed),this.errors&&(n!==un.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let o=r[this.treeIndex],i=(o&Kt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const u=n.charCodeAt(t);if(this.treeIndex=SC(r,o,this.treeIndex+Math.max(1,i),u),this.treeIndex<0)return this.result===0||this.decodeMode===Ht.Attribute&&(i===0||wC(u))?0:this.emitNotTerminatedNamedEntity();if(o=r[this.treeIndex],i=(o&Kt.VALUE_LENGTH)>>14,i!==0){if(u===un.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Ht.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,o=(r[t]&Kt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,o,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:o}=this;return this.emitCodePoint(t===1?o[n]&~Kt.VALUE_LENGTH:o[n+1],r),t===3&&this.emitCodePoint(o[n+2],r),r}end(){var n;switch(this.state){case tn.NamedEntity:return this.result!==0&&(this.decodeMode!==Ht.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case tn.NumericDecimal:return this.emitNumericEntity(0,2);case tn.NumericHex:return this.emitNumericEntity(0,3);case tn.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case tn.EntityStart:return 0}}}function hp(e){let n="";const t=new kC(e,r=>n+=vC(r));return function(o,i){let u=0,s=0;for(;(s=o.indexOf("&",s))>=0;){n+=o.slice(u,s),t.startEntity(i);const a=t.write(o,s+1);if(a<0){u=s+t.end();break}u=s+a,s=a===0?u+1:u}const l=n+o.slice(u);return n="",l}}function SC(e,n,t,r){const o=(n&Kt.BRANCH_LENGTH)>>7,i=n&Kt.JUMP_TABLE;if(o===0)return i!==0&&r===i?t:-1;if(i){const l=r-i;return l<0||l>=o?-1:e[t+l]-1}let u=t,s=u+o-1;for(;u<=s;){const l=u+s>>>1,a=e[l];if(a<r)u=l+1;else if(a>r)s=l-1;else return e[l+o]}return-1}const EC=hp(gC);hp(bC);function pp(e,n=Ht.Legacy){return EC(e,n)}function AC(e){return Object.prototype.toString.call(e)}function Yl(e){return AC(e)==="[object String]"}const TC=Object.prototype.hasOwnProperty;function DC(e,n){return TC.call(e,n)}function Cu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function gp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function Jl(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Gi(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const bp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,zC=/&([a-z#][a-z0-9]{1,31});/gi,FC=new RegExp(bp.source+"|"+zC.source,"gi"),PC=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function $C(e,n){if(n.charCodeAt(0)===35&&PC.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return Jl(r)?Gi(r):e}const t=pp(e);return t!==e?t:e}function IC(e){return e.indexOf("\\")<0?e:e.replace(bp,"$1")}function Zr(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(FC,function(n,t,r){return t||$C(n,r)})}const RC=/[&<>"]/,OC=/[&<>"]/g,MC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function BC(e){return MC[e]}function Jt(e){return RC.test(e)?e.replace(OC,BC):e}const LC=/[.?*+^$[\]\\(){}|-]/g;function NC(e){return e.replace(LC,"\\$&")}function Oe(e){switch(e){case 9:case 32:return!0}return!1}function Uo(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ko(e){return Xl.test(e)||dp.test(e)}function Wo(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function _u(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const jC={mdurl:fC,ucmicro:pC},HC=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:gp,assign:Cu,escapeHtml:Jt,escapeRE:NC,fromCodePoint:Gi,has:DC,isMdAsciiPunct:Wo,isPunctChar:Ko,isSpace:Oe,isString:Yl,isValidEntityCode:Jl,isWhiteSpace:Uo,lib:jC,normalizeReference:_u,unescapeAll:Zr,unescapeMd:IC},Symbol.toStringTag,{value:"Module"}));function UC(e,n,t){let r,o,i,u;const s=e.posMax,l=e.pos;for(e.pos=n+1,r=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(r--,r===0)){o=!0;break}if(u=e.pos,e.md.inline.skipToken(e),i===91){if(u===e.pos-1)r++;else if(t)return e.pos=l,-1}}let a=-1;return o&&(a=e.pos),e.pos=l,a}function KC(e,n,t){let r,o=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(o)===60){for(o++;o<t;){if(r=e.charCodeAt(o),r===10||r===60)return i;if(r===62)return i.pos=o+1,i.str=Zr(e.slice(n+1,o)),i.ok=!0,i;if(r===92&&o+1<t){o+=2;continue}o++}return i}let u=0;for(;o<t&&(r=e.charCodeAt(o),!(r===32||r<32||r===127));){if(r===92&&o+1<t){if(e.charCodeAt(o+1)===32)break;o+=2;continue}if(r===40&&(u++,u>32))return i;if(r===41){if(u===0)break;u--}o++}return n===o||u!==0||(i.str=Zr(e.slice(n,o)),i.pos=o,i.ok=!0),i}function WC(e,n,t,r){let o,i=n;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)u.str=r.str,u.marker=r.marker;else{if(i>=t)return u;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return u;n++,i++,s===40&&(s=41),u.marker=s}for(;i<t;){if(o=e.charCodeAt(i),o===u.marker)return u.pos=i+1,u.str+=Zr(e.slice(n,i)),u.ok=!0,u;if(o===40&&u.marker===41)return u;o===92&&i+1<t&&i++,i++}return u.can_continue=!0,u.str+=Zr(e.slice(n,i)),u}const qC=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:KC,parseLinkLabel:UC,parseLinkTitle:WC},Symbol.toStringTag,{value:"Module"})),ct={};ct.code_inline=function(e,n,t,r,o){const i=e[n];return"<code"+o.renderAttrs(i)+">"+Jt(i.content)+"</code>"};ct.code_block=function(e,n,t,r,o){const i=e[n];return"<pre"+o.renderAttrs(i)+"><code>"+Jt(e[n].content)+`</code></pre>
`};ct.fence=function(e,n,t,r,o){const i=e[n],u=i.info?Zr(i.info).trim():"";let s="",l="";if(u){const c=u.split(/(\s+)/g);s=c[0],l=c.slice(2).join("")}let a;if(t.highlight?a=t.highlight(i.content,s,l)||Jt(i.content):a=Jt(i.content),a.indexOf("<pre")===0)return a+`
`;if(u){const c=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[];c<0?d.push(["class",t.langPrefix+s]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+s);const f={attrs:d};return`<pre><code${o.renderAttrs(f)}>${a}</code></pre>
`}return`<pre><code${o.renderAttrs(i)}>${a}</code></pre>
`};ct.image=function(e,n,t,r,o){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,t,r),o.renderToken(e,n,t)};ct.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};ct.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};ct.text=function(e,n){return Jt(e[n].content)};ct.html_block=function(e,n){return e[n].content};ct.html_inline=function(e,n){return e[n].content};function Qr(){this.rules=Cu({},ct)}Qr.prototype.renderAttrs=function(n){let t,r,o;if(!n.attrs)return"";for(o="",t=0,r=n.attrs.length;t<r;t++)o+=" "+Jt(n.attrs[t][0])+'="'+Jt(n.attrs[t][1])+'"';return o};Qr.prototype.renderToken=function(n,t,r){const o=n[t];let i="";if(o.hidden)return"";o.block&&o.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(o.nesting===-1?"</":"<")+o.tag,i+=this.renderAttrs(o),o.nesting===0&&r.xhtmlOut&&(i+=" /");let u=!1;if(o.block&&(u=!0,o.nesting===1&&t+1<n.length)){const s=n[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===o.tag)&&(u=!1)}return i+=u?`>
`:">",i};Qr.prototype.renderInline=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n)}return r};Qr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let o=0,i=e.length;o<i;o++)switch(e[o].type){case"text":r+=e[o].content;break;case"image":r+=this.renderInlineAsText(e[o].children,n,t);break;case"html_inline":case"html_block":r+=e[o].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Qr.prototype.render=function(e,n,t){let r="";const o=this.rules;for(let i=0,u=e.length;i<u;i++){const s=e[i].type;s==="inline"?r+=this.renderInline(e[i].children,n,t):typeof o[s]<"u"?r+=o[s](e,i,n,t,this):r+=this.renderToken(e,i,n,t)}return r};function zn(){this.__rules__=[],this.__cache__=null}zn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};zn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};zn.prototype.at=function(e,n,t){const r=this.__find__(e),o=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=o.alt||[],this.__cache__=null};zn.prototype.before=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};zn.prototype.after=function(e,n,t,r){const o=this.__find__(e),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};zn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};zn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,t.push(r)},this),this.__cache__=null,t};zn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};zn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const o=this.__find__(r);if(o<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,t.push(r)},this),this.__cache__=null,t};zn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Zn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Zn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,o=t.length;r<o;r++)if(t[r][0]===n)return r;return-1};Zn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Zn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),o=[n,t];r<0?this.attrPush(o):this.attrs[r]=o};Zn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Zn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function mp(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}mp.prototype.Token=Zn;const VC=/\r\n?|\n/g,GC=/\0/g;function ZC(e){let n;n=e.src.replace(VC,`
`),n=n.replace(GC,"�"),e.src=n}function XC(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function YC(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const o=n[t];o.type==="inline"&&e.md.inline.parse(o.content,e.md,e.env,o.children)}}function JC(e){return/^<a[>\s]/i.test(e)}function QC(e){return/^<\/a\s*>/i.test(e)}function e_(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let o=n[t].children,i=0;for(let u=o.length-1;u>=0;u--){const s=o[u];if(s.type==="link_close"){for(u--;o[u].level!==s.level&&o[u].type!=="link_open";)u--;continue}if(s.type==="html_inline"&&(JC(s.content)&&i>0&&i--,QC(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const l=s.content;let a=e.md.linkify.match(l);const c=[];let d=s.level,f=0;a.length>0&&a[0].index===0&&u>0&&o[u-1].type==="text_special"&&(a=a.slice(1));for(let h=0;h<a.length;h++){const p=a[h].url,g=e.md.normalizeLink(p);if(!e.md.validateLink(g))continue;let m=a[h].text;a[h].schema?a[h].schema==="mailto:"&&!/^mailto:/i.test(m)?m=e.md.normalizeLinkText("mailto:"+m).replace(/^mailto:/,""):m=e.md.normalizeLinkText(m):m=e.md.normalizeLinkText("http://"+m).replace(/^http:\/\//,"");const b=a[h].index;if(b>f){const k=new e.Token("text","",0);k.content=l.slice(f,b),k.level=d,c.push(k)}const v=new e.Token("link_open","a",1);v.attrs=[["href",g]],v.level=d++,v.markup="linkify",v.info="auto",c.push(v);const w=new e.Token("text","",0);w.content=m,w.level=d,c.push(w);const y=new e.Token("link_close","a",-1);y.level=--d,y.markup="linkify",y.info="auto",c.push(y),f=a[h].lastIndex}if(f<l.length){const h=new e.Token("text","",0);h.content=l.slice(f),h.level=d,c.push(h)}n[t].children=o=gp(o,u,c)}}}}const vp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,n_=/\((c|tm|r)\)/i,t_=/\((c|tm|r)\)/ig,r_={c:"©",r:"®",tm:"™"};function o_(e,n){return r_[n.toLowerCase()]}function i_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(t_,o_)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function u_(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&vp.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function s_(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(n_.test(e.tokens[n].content)&&i_(e.tokens[n].children),vp.test(e.tokens[n].content)&&u_(e.tokens[n].children))}const l_=/['"]/,Cd=/['"]/g,_d="’";function yi(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function a_(e,n){let t;const r=[];for(let o=0;o<e.length;o++){const i=e[o],u=e[o].level;for(t=r.length-1;t>=0&&!(r[t].level<=u);t--);if(r.length=t+1,i.type!=="text")continue;let s=i.content,l=0,a=s.length;e:for(;l<a;){Cd.lastIndex=l;const c=Cd.exec(s);if(!c)break;let d=!0,f=!0;l=c.index+1;const h=c[0]==="'";let p=32;if(c.index-1>=0)p=s.charCodeAt(c.index-1);else for(t=o-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){p=e[t].content.charCodeAt(e[t].content.length-1);break}let g=32;if(l<a)g=s.charCodeAt(l);else for(t=o+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){g=e[t].content.charCodeAt(0);break}const m=Wo(p)||Ko(String.fromCharCode(p)),b=Wo(g)||Ko(String.fromCharCode(g)),v=Uo(p),w=Uo(g);if(w?d=!1:b&&(v||m||(d=!1)),v?f=!1:m&&(w||b||(f=!1)),g===34&&c[0]==='"'&&p>=48&&p<=57&&(f=d=!1),d&&f&&(d=m,f=b),!d&&!f){h&&(i.content=yi(i.content,c.index,_d));continue}if(f)for(t=r.length-1;t>=0;t--){let y=r[t];if(r[t].level<u)break;if(y.single===h&&r[t].level===u){y=r[t];let k,T;h?(k=n.md.options.quotes[2],T=n.md.options.quotes[3]):(k=n.md.options.quotes[0],T=n.md.options.quotes[1]),i.content=yi(i.content,c.index,T),e[y.token].content=yi(e[y.token].content,y.pos,k),l+=T.length-1,y.token===o&&(l+=k.length-1),s=i.content,a=s.length,r.length=t;continue e}}d?r.push({token:o,pos:c.index,single:h,level:u}):f&&h&&(i.content=yi(i.content,c.index,_d))}}}function c_(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!l_.test(e.tokens[n].content)||a_(e.tokens[n].children,e)}function d_(e){let n,t;const r=e.tokens,o=r.length;for(let i=0;i<o;i++){if(r[i].type!=="inline")continue;const u=r[i].children,s=u.length;for(n=0;n<s;n++)u[n].type==="text_special"&&(u[n].type="text");for(n=t=0;n<s;n++)u[n].type==="text"&&n+1<s&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}}const ss=[["normalize",ZC],["block",XC],["inline",YC],["linkify",e_],["replacements",s_],["smartquotes",c_],["text_join",d_]];function Ql(){this.ruler=new zn;for(let e=0;e<ss.length;e++)this.ruler.push(ss[e][0],ss[e][1])}Ql.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};Ql.prototype.State=mp;function dt(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const o=this.src;for(let i=0,u=0,s=0,l=0,a=o.length,c=!1;u<a;u++){const d=o.charCodeAt(u);if(!c)if(Oe(d)){s++,d===9?l+=4-l%4:l++;continue}else c=!0;(d===10||u===a-1)&&(d!==10&&u++,this.bMarks.push(i),this.eMarks.push(u),this.tShift.push(s),this.sCount.push(l),this.bsCount.push(0),c=!1,s=0,l=0,i=u+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}dt.prototype.push=function(e,n,t){const r=new Zn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};dt.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};dt.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};dt.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Oe(r))break}return n};dt.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Oe(this.src.charCodeAt(--n)))return n+1;return n};dt.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};dt.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};dt.prototype.getLines=function(n,t,r,o){if(n>=t)return"";const i=new Array(t-n);for(let u=0,s=n;s<t;s++,u++){let l=0;const a=this.bMarks[s];let c=a,d;for(s+1<t||o?d=this.eMarks[s]+1:d=this.eMarks[s];c<d&&l<r;){const f=this.src.charCodeAt(c);if(Oe(f))f===9?l+=4-(l+this.bsCount[s])%4:l++;else if(c-a<this.tShift[s])l++;else break;c++}l>r?i[u]=new Array(l-r+1).join(" ")+this.src.slice(c,d):i[u]=this.src.slice(c,d)}return i.join("")};dt.prototype.Token=Zn;const f_=65536;function ls(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function wd(e){const n=[],t=e.length;let r=0,o=e.charCodeAt(r),i=!1,u=0,s="";for(;r<t;)o===124&&(i?(s+=e.substring(u,r-1),u=r):(n.push(s+e.substring(u,r)),s="",u=r+1)),i=o===92,r++,o=e.charCodeAt(r);return n.push(s+e.substring(u)),n}function h_(e,n,t,r){if(n+2>t)return!1;let o=n+1;if(e.sCount[o]<e.blkIndent||e.sCount[o]-e.blkIndent>=4)return!1;let i=e.bMarks[o]+e.tShift[o];if(i>=e.eMarks[o])return!1;const u=e.src.charCodeAt(i++);if(u!==124&&u!==45&&u!==58||i>=e.eMarks[o])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!Oe(s)||u===45&&Oe(s))return!1;for(;i<e.eMarks[o];){const y=e.src.charCodeAt(i);if(y!==124&&y!==45&&y!==58&&!Oe(y))return!1;i++}let l=ls(e,n+1),a=l.split("|");const c=[];for(let y=0;y<a.length;y++){const k=a[y].trim();if(!k){if(y===0||y===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(k))return!1;k.charCodeAt(k.length-1)===58?c.push(k.charCodeAt(0)===58?"center":"right"):k.charCodeAt(0)===58?c.push("left"):c.push("")}if(l=ls(e,n).trim(),l.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;a=wd(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const d=a.length;if(d===0||d!==c.length)return!1;if(r)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),g=[n,0];p.map=g;const m=e.push("thead_open","thead",1);m.map=[n,n+1];const b=e.push("tr_open","tr",1);b.map=[n,n+1];for(let y=0;y<a.length;y++){const k=e.push("th_open","th",1);c[y]&&(k.attrs=[["style","text-align:"+c[y]]]);const T=e.push("inline","",0);T.content=a[y].trim(),T.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let v,w=0;for(o=n+2;o<t&&!(e.sCount[o]<e.blkIndent);o++){let y=!1;for(let T=0,_=h.length;T<_;T++)if(h[T](e,o,t,!0)){y=!0;break}if(y||(l=ls(e,o).trim(),!l)||e.sCount[o]-e.blkIndent>=4||(a=wd(l),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),w+=d-a.length,w>f_))break;if(o===n+2){const T=e.push("tbody_open","tbody",1);T.map=v=[n+2,0]}const k=e.push("tr_open","tr",1);k.map=[o,o+1];for(let T=0;T<d;T++){const _=e.push("td_open","td",1);c[T]&&(_.attrs=[["style","text-align:"+c[T]]]);const E=e.push("inline","",0);E.content=a[T]?a[T].trim():"",E.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return v&&(e.push("tbody_close","tbody",-1),v[1]=o),e.push("table_close","table",-1),g[1]=o,e.parentType=f,e.line=o,!0}function p_(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,o=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,o=r;continue}break}e.line=o;const i=e.push("code_block","code",0);return i.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function g_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||o+3>i)return!1;const u=e.src.charCodeAt(o);if(u!==126&&u!==96)return!1;let s=o;o=e.skipChars(o,u);let l=o-s;if(l<3)return!1;const a=e.src.slice(s,o),c=e.src.slice(o,i);if(u===96&&c.indexOf(String.fromCharCode(u))>=0)return!1;if(r)return!0;let d=n,f=!1;for(;d++,!(d>=t||(o=s=e.bMarks[d]+e.tShift[d],i=e.eMarks[d],o<i&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(o)===u&&!(e.sCount[d]-e.blkIndent>=4)&&(o=e.skipChars(o,u),!(o-s<l)&&(o=e.skipSpaces(o),!(o<i)))){f=!0;break}l=e.sCount[n],e.line=d+(f?1:0);const h=e.push("fence","code",0);return h.info=c,h.content=e.getLines(n+1,d,l,!0),h.markup=a,h.map=[n,e.line],!0}function b_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const u=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==62)return!1;if(r)return!0;const s=[],l=[],a=[],c=[],d=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,p;for(p=n;p<t;p++){const w=e.sCount[p]<e.blkIndent;if(o=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],o>=i)break;if(e.src.charCodeAt(o++)===62&&!w){let k=e.sCount[p]+1,T,_;e.src.charCodeAt(o)===32?(o++,k++,_=!1,T=!0):e.src.charCodeAt(o)===9?(T=!0,(e.bsCount[p]+k)%4===3?(o++,k++,_=!1):_=!0):T=!1;let E=k;for(s.push(e.bMarks[p]),e.bMarks[p]=o;o<i;){const S=e.src.charCodeAt(o);if(Oe(S))S===9?E+=4-(E+e.bsCount[p]+(_?1:0))%4:E++;else break;o++}h=o>=i,l.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(T?1:0),a.push(e.sCount[p]),e.sCount[p]=E-k,c.push(e.tShift[p]),e.tShift[p]=o-e.bMarks[p];continue}if(h)break;let y=!1;for(let k=0,T=d.length;k<T;k++)if(d[k](e,p,t,!0)){y=!0;break}if(y){e.lineMax=p,e.blkIndent!==0&&(s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}s.push(e.bMarks[p]),l.push(e.bsCount[p]),c.push(e.tShift[p]),a.push(e.sCount[p]),e.sCount[p]=-1}const g=e.blkIndent;e.blkIndent=0;const m=e.push("blockquote_open","blockquote",1);m.markup=">";const b=[n,0];m.map=b,e.md.block.tokenize(e,n,p);const v=e.push("blockquote_close","blockquote",-1);v.markup=">",e.lineMax=u,e.parentType=f,b[1]=e.line;for(let w=0;w<c.length;w++)e.bMarks[w+n]=s[w],e.tShift[w+n]=c[w],e.sCount[w+n]=a[w],e.bsCount[w+n]=l[w];return e.blkIndent=g,!0}function m_(e,n,t,r){const o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(i++);if(u!==42&&u!==45&&u!==95)return!1;let s=1;for(;i<o;){const a=e.src.charCodeAt(i++);if(a!==u&&!Oe(a))return!1;a===u&&s++}if(s<3)return!1;if(r)return!0;e.line=n+1;const l=e.push("hr","hr",0);return l.map=[n,e.line],l.markup=Array(s+1).join(String.fromCharCode(u)),!0}function kd(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==43)return-1;if(r<t){const i=e.src.charCodeAt(r);if(!Oe(i))return-1}return r}function Sd(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let o=t;if(o+1>=r)return-1;let i=e.src.charCodeAt(o++);if(i<48||i>57)return-1;for(;;){if(o>=r)return-1;if(i=e.src.charCodeAt(o++),i>=48&&i<=57){if(o-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return o<r&&(i=e.src.charCodeAt(o),!Oe(i))?-1:o}function v_(e,n){const t=e.level+2;for(let r=n+2,o=e.tokens.length-2;r<o;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function x_(e,n,t,r){let o,i,u,s,l=n,a=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(c=!0);let d,f,h;if((h=Sd(e,l))>=0){if(d=!0,u=e.bMarks[l]+e.tShift[l],f=Number(e.src.slice(u,h-1)),c&&f!==1)return!1}else if((h=kd(e,l))>=0)d=!1;else return!1;if(c&&e.skipSpaces(h)>=e.eMarks[l])return!1;if(r)return!0;const p=e.src.charCodeAt(h-1),g=e.tokens.length;d?(s=e.push("ordered_list_open","ol",1),f!==1&&(s.attrs=[["start",f]])):s=e.push("bullet_list_open","ul",1);const m=[l,0];s.map=m,s.markup=String.fromCharCode(p);let b=!1;const v=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";l<t;){i=h,o=e.eMarks[l];const y=e.sCount[l]+h-(e.bMarks[l]+e.tShift[l]);let k=y;for(;i<o;){const R=e.src.charCodeAt(i);if(R===9)k+=4-(k+e.bsCount[l])%4;else if(R===32)k++;else break;i++}const T=i;let _;T>=o?_=1:_=k-y,_>4&&(_=1);const E=y+_;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(p);const S=[l,0];s.map=S,d&&(s.info=e.src.slice(u,h-1));const z=e.tight,j=e.tShift[l],P=e.sCount[l],q=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=E,e.tight=!0,e.tShift[l]=T-e.bMarks[l],e.sCount[l]=k,T>=o&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,l,t,!0),(!e.tight||b)&&(a=!1),b=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=q,e.tShift[l]=j,e.sCount[l]=P,e.tight=z,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(p),l=e.line,S[1]=l,l>=t||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let G=!1;for(let R=0,X=v.length;R<X;R++)if(v[R](e,l,t,!0)){G=!0;break}if(G)break;if(d){if(h=Sd(e,l),h<0)break;u=e.bMarks[l]+e.tShift[l]}else if(h=kd(e,l),h<0)break;if(p!==e.src.charCodeAt(h-1))break}return d?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(p),m[1]=l,e.line=l,e.parentType=w,a&&v_(e,g),!0}function y_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],u=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(o)!==91)return!1;function s(v){const w=e.lineMax;if(v>=w||e.isEmpty(v))return null;let y=!1;if(e.sCount[v]-e.blkIndent>3&&(y=!0),e.sCount[v]<0&&(y=!0),!y){const _=e.md.block.ruler.getRules("reference"),E=e.parentType;e.parentType="reference";let S=!1;for(let z=0,j=_.length;z<j;z++)if(_[z](e,v,w,!0)){S=!0;break}if(e.parentType=E,S)return null}const k=e.bMarks[v]+e.tShift[v],T=e.eMarks[v];return e.src.slice(k,T+1)}let l=e.src.slice(o,i+1);i=l.length;let a=-1;for(o=1;o<i;o++){const v=l.charCodeAt(o);if(v===91)return!1;if(v===93){a=o;break}else if(v===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(v===92&&(o++,o<i&&l.charCodeAt(o)===10)){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}}if(a<0||l.charCodeAt(a+1)!==58)return!1;for(o=a+2;o<i;o++){const v=l.charCodeAt(o);if(v===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Oe(v))break}const c=e.md.helpers.parseLinkDestination(l,o,i);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;o=c.pos;const f=o,h=u,p=o;for(;o<i;o++){const v=l.charCodeAt(o);if(v===10){const w=s(u);w!==null&&(l+=w,i=l.length,u++)}else if(!Oe(v))break}let g=e.md.helpers.parseLinkTitle(l,o,i);for(;g.can_continue;){const v=s(u);if(v===null)break;l+=v,o=i,i=l.length,u++,g=e.md.helpers.parseLinkTitle(l,o,i,g)}let m;for(o<i&&p!==o&&g.ok?(m=g.str,o=g.pos):(m="",o=f,u=h);o<i;){const v=l.charCodeAt(o);if(!Oe(v))break;o++}if(o<i&&l.charCodeAt(o)!==10&&m)for(m="",o=f,u=h;o<i;){const v=l.charCodeAt(o);if(!Oe(v))break;o++}if(o<i&&l.charCodeAt(o)!==10)return!1;const b=_u(l.slice(1,a));return b?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[b]>"u"&&(e.env.references[b]={title:m,href:d}),e.line=u),!0):!1}const C_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],__="[a-zA-Z_:][a-zA-Z0-9:._-]*",w_="[^\"'=<>`\\x00-\\x20]+",k_="'[^']*'",S_='"[^"]*"',E_="(?:"+w_+"|"+k_+"|"+S_+")",A_="(?:\\s+"+__+"(?:\\s*=\\s*"+E_+")?)",xp="<[A-Za-z][A-Za-z0-9\\-]*"+A_+"*\\s*\\/?>",yp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",T_="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",D_="<[?][\\s\\S]*?[?]>",z_="<![A-Za-z][^>]*>",F_="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",P_=new RegExp("^(?:"+xp+"|"+yp+"|"+T_+"|"+D_+"|"+z_+"|"+F_+")"),$_=new RegExp("^(?:"+xp+"|"+yp+")"),Pr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+C_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp($_.source+"\\s*$"),/^$/,!1]];function I_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(o)!==60)return!1;let u=e.src.slice(o,i),s=0;for(;s<Pr.length&&!Pr[s][0].test(u);s++);if(s===Pr.length)return!1;if(r)return Pr[s][2];let l=n+1;if(!Pr[s][1].test(u)){for(;l<t&&!(e.sCount[l]<e.blkIndent);l++)if(o=e.bMarks[l]+e.tShift[l],i=e.eMarks[l],u=e.src.slice(o,i),Pr[s][1].test(u)){u.length!==0&&l++;break}}e.line=l;const a=e.push("html_block","",0);return a.map=[n,l],a.content=e.getLines(n,l,e.blkIndent,!0),!0}function R_(e,n,t,r){let o=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let u=e.src.charCodeAt(o);if(u!==35||o>=i)return!1;let s=1;for(u=e.src.charCodeAt(++o);u===35&&o<i&&s<=6;)s++,u=e.src.charCodeAt(++o);if(s>6||o<i&&!Oe(u))return!1;if(r)return!0;i=e.skipSpacesBack(i,o);const l=e.skipCharsBack(i,35,o);l>o&&Oe(e.src.charCodeAt(l-1))&&(i=l),e.line=n+1;const a=e.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[n,e.line];const c=e.push("inline","",0);c.content=e.src.slice(o,i).trim(),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(s),-1);return d.markup="########".slice(0,s),!0}function O_(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const o=e.parentType;e.parentType="paragraph";let i=0,u,s=n+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let h=e.bMarks[s]+e.tShift[s];const p=e.eMarks[s];if(h<p&&(u=e.src.charCodeAt(h),(u===45||u===61)&&(h=e.skipChars(h,u),h=e.skipSpaces(h),h>=p))){i=u===61?1:2;break}}if(e.sCount[s]<0)continue;let f=!1;for(let h=0,p=r.length;h<p;h++)if(r[h](e,s,t,!0)){f=!0;break}if(f)break}if(!i)return!1;const l=e.getLines(n,s,e.blkIndent,!1).trim();e.line=s+1;const a=e.push("heading_open","h"+String(i),1);a.markup=String.fromCharCode(u),a.map=[n,e.line];const c=e.push("inline","",0);c.content=l,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup=String.fromCharCode(u),e.parentType=o,!0}function M_(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),o=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let a=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,i,t,!0)){a=!0;break}if(a)break}const u=e.getLines(n,i,e.blkIndent,!1).trim();e.line=i;const s=e.push("paragraph_open","p",1);s.map=[n,e.line];const l=e.push("inline","",0);return l.content=u,l.map=[n,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=o,!0}const Ci=[["table",h_,["paragraph","reference"]],["code",p_],["fence",g_,["paragraph","reference","blockquote","list"]],["blockquote",b_,["paragraph","reference","blockquote","list"]],["hr",m_,["paragraph","reference","blockquote","list"]],["list",x_,["paragraph","reference","blockquote"]],["reference",y_],["html_block",I_,["paragraph","reference","blockquote"]],["heading",R_,["paragraph","reference","blockquote"]],["lheading",O_],["paragraph",M_]];function wu(){this.ruler=new zn;for(let e=0;e<Ci.length;e++)this.ruler.push(Ci[e][0],Ci[e][1],{alt:(Ci[e][2]||[]).slice()})}wu.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),o=r.length,i=e.md.options.maxNesting;let u=n,s=!1;for(;u<t&&(e.line=u=e.skipEmptyLines(u),!(u>=t||e.sCount[u]<e.blkIndent));){if(e.level>=i){e.line=t;break}const l=e.line;let a=!1;for(let c=0;c<o;c++)if(a=r[c](e,u,t,!1),a){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),u=e.line,u<t&&e.isEmpty(u)&&(s=!0,u++,e.line=u)}};wu.prototype.parse=function(e,n,t,r){if(!e)return;const o=new this.State(e,n,t,r);this.tokenize(o,o.line,o.lineMax)};wu.prototype.State=dt;function oi(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}oi.prototype.pushPending=function(){const e=new Zn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};oi.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Zn(e,n,t);let o=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};oi.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),o=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===r;)i++;const u=i-e,s=i<t?this.src.charCodeAt(i):32,l=Wo(o)||Ko(String.fromCharCode(o)),a=Wo(s)||Ko(String.fromCharCode(s)),c=Uo(o),d=Uo(s),f=!d&&(!a||c||l),h=!c&&(!l||d||a);return{can_open:f&&(n||!h||l),can_close:h&&(n||!f||a),length:u}};oi.prototype.Token=Zn;function B_(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function L_(e,n){let t=e.pos;for(;t<e.posMax&&!B_(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const N_=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function j_(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const o=e.pending.match(N_);if(!o)return!1;const i=o[1],u=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!u)return!1;let s=u.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const a=e.push("link_open","a",1);a.attrs=[["href",l]],a.markup="linkify",a.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(s);const d=e.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return e.pos+=s.length-i.length,!0}function H_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,o=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<o&&Oe(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ea=[];for(let e=0;e<256;e++)ea.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ea[e.charCodeAt(0)]=1});function U_(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let o=e.src.charCodeAt(t);if(o===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(o=e.src.charCodeAt(t),!!Oe(o));)t++;return e.pos=t,!0}let i=e.src[t];if(o>=55296&&o<=56319&&t+1<r){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const u="\\"+i;if(!n){const s=e.push("text_special","",0);o<256&&ea[o]!==0?s.content=i:s.content=u,s.markup=u,s.info="escape"}return e.pos=t+1,!0}function K_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const o=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const u=e.src.slice(o,t),s=u.length;if(e.backticksScanned&&(e.backticks[s]||0)<=o)return n||(e.pending+=u),e.pos+=s,!0;let l=t,a;for(;(a=e.src.indexOf("`",l))!==-1;){for(l=a+1;l<i&&e.src.charCodeAt(l)===96;)l++;const c=l-a;if(c===s){if(!n){const d=e.push("code_inline","code",0);d.markup=u,d.content=e.src.slice(t,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[c]=a}return e.backticksScanned=!0,n||(e.pending+=u),e.pos+=s,!0}function W_(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const o=e.scanDelims(e.pos,!0);let i=o.length;const u=String.fromCharCode(r);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=u,i--);for(let l=0;l<i;l+=2)s=e.push("text","",0),s.content=u+u,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0}function Ed(e,n){let t;const r=[],o=n.length;for(let i=0;i<o;i++){const u=n[i];if(u.marker!==126||u.end===-1)continue;const s=n[u.end];t=e.tokens[u.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&r.push(s.token-1)}for(;r.length;){const i=r.pop();let u=i+1;for(;u<e.tokens.length&&e.tokens[u].type==="s_close";)u++;u--,i!==u&&(t=e.tokens[u],e.tokens[u]=e.tokens[i],e.tokens[i]=t)}}function q_(e){const n=e.tokens_meta,t=e.tokens_meta.length;Ed(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Ed(e,n[r].delimiters)}const Cp={tokenize:W_,postProcess:q_};function V_(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const o=e.scanDelims(e.pos,r===42);for(let i=0;i<o.length;i++){const u=e.push("text","",0);u.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close})}return e.pos+=o.length,!0}function Ad(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const o=n[r];if(o.marker!==95&&o.marker!==42||o.end===-1)continue;const i=n[o.end],u=r>0&&n[r-1].end===o.end+1&&n[r-1].marker===o.marker&&n[r-1].token===o.token-1&&n[o.end+1].token===i.token+1,s=String.fromCharCode(o.marker),l=e.tokens[o.token];l.type=u?"strong_open":"em_open",l.tag=u?"strong":"em",l.nesting=1,l.markup=u?s+s:s,l.content="";const a=e.tokens[i.token];a.type=u?"strong_close":"em_close",a.tag=u?"strong":"em",a.nesting=-1,a.markup=u?s+s:s,a.content="",u&&(e.tokens[n[r-1].token].content="",e.tokens[n[o.end+1].token].content="",r--)}}function G_(e){const n=e.tokens_meta,t=e.tokens_meta.length;Ad(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Ad(e,n[r].delimiters)}const _p={tokenize:V_,postProcess:G_};function Z_(e,n){let t,r,o,i,u="",s="",l=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let p=h+1;if(p<d&&e.src.charCodeAt(p)===40){for(a=!1,p++;p<d&&(t=e.src.charCodeAt(p),!(!Oe(t)&&t!==10));p++);if(p>=d)return!1;if(l=p,o=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),o.ok){for(u=e.md.normalizeLink(o.str),e.md.validateLink(u)?p=o.pos:u="",l=p;p<d&&(t=e.src.charCodeAt(p),!(!Oe(t)&&t!==10));p++);if(o=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<d&&l!==p&&o.ok)for(s=o.str,p=o.pos;p<d&&(t=e.src.charCodeAt(p),!(!Oe(t)&&t!==10));p++);}(p>=d||e.src.charCodeAt(p)!==41)&&(a=!0),p++}if(a){if(typeof e.env.references>"u")return!1;if(p<d&&e.src.charCodeAt(p)===91?(l=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?r=e.src.slice(l,p++):p=h+1):p=h+1,r||(r=e.src.slice(f,h)),i=e.env.references[_u(r)],!i)return e.pos=c,!1;u=i.href,s=i.title}if(!n){e.pos=f,e.posMax=h;const g=e.push("link_open","a",1),m=[["href",u]];g.attrs=m,s&&m.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=d,!0}function X_(e,n){let t,r,o,i,u,s,l,a,c="";const d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!Oe(t)&&t!==10));i++);if(i>=f)return!1;for(a=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(c=e.md.normalizeLink(s.str),e.md.validateLink(c)?i=s.pos:c=""),a=i;i<f&&(t=e.src.charCodeAt(i),!(!Oe(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&a!==i&&s.ok)for(l=s.str,i=s.pos;i<f&&(t=e.src.charCodeAt(i),!(!Oe(t)&&t!==10));i++);else l="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(a=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?o=e.src.slice(a,i++):i=p+1):i=p+1,o||(o=e.src.slice(h,p)),u=e.env.references[_u(o)],!u)return e.pos=d,!1;c=u.href,l=u.title}if(!n){r=e.src.slice(h,p);const g=[];e.md.inline.parse(r,e.md,e.env,g);const m=e.push("image","img",0),b=[["src",c],["alt",""]];m.attrs=b,m.children=g,m.content=r,l&&b.push(["title",l])}return e.pos=i,e.posMax=f,!0}const Y_=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,J_=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Q_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,o=e.posMax;for(;;){if(++t>=o)return!1;const u=e.src.charCodeAt(t);if(u===60)return!1;if(u===62)break}const i=e.src.slice(r+1,t);if(J_.test(i)){const u=e.md.normalizeLink(i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}if(Y_.test(i)){const u=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(u))return!1;if(!n){const s=e.push("link_open","a",1);s.attrs=[["href",u]],s.markup="autolink",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=i.length+2,!0}return!1}function ew(e){return/^<a[>\s]/i.test(e)}function nw(e){return/^<\/a\s*>/i.test(e)}function tw(e){const n=e|32;return n>=97&&n<=122}function rw(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const o=e.src.charCodeAt(r+1);if(o!==33&&o!==63&&o!==47&&!tw(o))return!1;const i=e.src.slice(r).match(P_);if(!i)return!1;if(!n){const u=e.push("html_inline","",0);u.content=i[0],ew(u.content)&&e.linkLevel++,nw(u.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const ow=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,iw=/^&([a-z][a-z0-9]{1,31});/i;function uw(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(ow);if(i){if(!n){const u=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=Jl(u)?Gi(u):Gi(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(iw);if(i){const u=pp(i[0]);if(u!==i[0]){if(!n){const s=e.push("text_special","",0);s.content=u,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Td(e){const n={},t=e.length;if(!t)return;let r=0,o=-2;const i=[];for(let u=0;u<t;u++){const s=e[u];if(i.push(0),(e[r].marker!==s.marker||o!==s.token-1)&&(r=u),o=s.token,s.length=s.length||0,!s.close)continue;n.hasOwnProperty(s.marker)||(n[s.marker]=[-1,-1,-1,-1,-1,-1]);const l=n[s.marker][(s.open?3:0)+s.length%3];let a=r-i[r]-1,c=a;for(;a>l;a-=i[a]+1){const d=e[a];if(d.marker===s.marker&&d.open&&d.end<0){let f=!1;if((d.close||s.open)&&(d.length+s.length)%3===0&&(d.length%3!==0||s.length%3!==0)&&(f=!0),!f){const h=a>0&&!e[a-1].open?i[a-1]+1:0;i[u]=u-a+h,i[a]=h,s.open=!1,d.end=u,d.close=!1,c=-1,o=-2;break}}}c!==-1&&(n[s.marker][(s.open?3:0)+(s.length||0)%3]=c)}}function sw(e){const n=e.tokens_meta,t=e.tokens_meta.length;Td(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&Td(n[r].delimiters)}function lw(e){let n,t,r=0;const o=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)o[n].nesting<0&&r--,o[n].level=r,o[n].nesting>0&&r++,o[n].type==="text"&&n+1<i&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}const as=[["text",L_],["linkify",j_],["newline",H_],["escape",U_],["backticks",K_],["strikethrough",Cp.tokenize],["emphasis",_p.tokenize],["link",Z_],["image",X_],["autolink",Q_],["html_inline",rw],["entity",uw]],cs=[["balance_pairs",sw],["strikethrough",Cp.postProcess],["emphasis",_p.postProcess],["fragments_join",lw]];function ii(){this.ruler=new zn;for(let e=0;e<as.length;e++)this.ruler.push(as[e][0],as[e][1]);this.ruler2=new zn;for(let e=0;e<cs.length;e++)this.ruler2.push(cs[e][0],cs[e][1])}ii.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,o=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let u=!1;if(e.level<o){for(let s=0;s<r;s++)if(e.level++,u=t[s](e,!0),e.level--,u){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;u||e.pos++,i[n]=e.pos};ii.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,o=e.md.options.maxNesting;for(;e.pos<r;){const i=e.pos;let u=!1;if(e.level<o){for(let s=0;s<t;s++)if(u=n[s](e,!1),u){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};ii.prototype.parse=function(e,n,t,r){const o=new this.State(e,n,t,r);this.tokenize(o);const i=this.ruler2.getRules(""),u=i.length;for(let s=0;s<u;s++)i[s](o)};ii.prototype.State=oi;function aw(e){const n={};e=e||{},n.src_Any=ap.source,n.src_Cc=cp.source,n.src_Z=fp.source,n.src_P=Xl.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function Js(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function ku(e){return Object.prototype.toString.call(e)}function cw(e){return ku(e)==="[object String]"}function dw(e){return ku(e)==="[object Object]"}function fw(e){return ku(e)==="[object RegExp]"}function Dd(e){return ku(e)==="[object Function]"}function hw(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const wp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function pw(e){return Object.keys(e||{}).reduce(function(n,t){return n||wp.hasOwnProperty(t)},!1)}const gw={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},bw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",mw="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function vw(e){e.__index__=-1,e.__text_cache__=""}function xw(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function zd(){return function(e,n){n.normalize(e)}}function Zi(e){const n=e.re=aw(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(bw),t.push(n.src_xn),n.src_tlds=t.join("|");function r(s){return s.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const o=[];e.__compiled__={};function i(s,l){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+l)}Object.keys(e.__schemas__).forEach(function(s){const l=e.__schemas__[s];if(l===null)return;const a={validate:null,link:null};if(e.__compiled__[s]=a,dw(l)){fw(l.validate)?a.validate=xw(l.validate):Dd(l.validate)?a.validate=l.validate:i(s,l),Dd(l.normalize)?a.normalize=l.normalize:l.normalize?i(s,l):a.normalize=zd();return}if(cw(l)){o.push(s);return}i(s,l)}),o.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:zd()};const u=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(hw).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+u+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),vw(e)}function yw(e,n){const t=e.__index__,r=e.__last_index__,o=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=o,this.text=o,this.url=o}function Qs(e,n){const t=new yw(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function $n(e,n){if(!(this instanceof $n))return new $n(e,n);n||pw(e)&&(n=e,e={}),this.__opts__=Js({},wp,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Js({},gw,e),this.__compiled__={},this.__tlds__=mw,this.__tlds_replaced__=!1,this.re={},Zi(this)}$n.prototype.add=function(n,t){return this.__schemas__[n]=t,Zi(this),this};$n.prototype.set=function(n){return this.__opts__=Js(this.__opts__,n),this};$n.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,o,i,u,s,l,a,c;if(this.re.schema_test.test(n)){for(l=this.re.schema_search,l.lastIndex=0;(t=l.exec(n))!==null;)if(i=this.testSchemaAt(n,t[2],l.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(a=n.search(this.re.host_fuzzy_test),a>=0&&(this.__index__<0||a<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=r.index+r[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=n.indexOf("@"),c>=0&&(o=n.match(this.re.email_fuzzy))!==null&&(u=o.index+o[1].length,s=o.index+o[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=s))),this.__index__>=0};$n.prototype.pretest=function(n){return this.re.pretest.test(n)};$n.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};$n.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(Qs(this,r)),r=this.__last_index__);let o=r?n.slice(r):n;for(;this.test(o);)t.push(Qs(this,r)),o=o.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};$n.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,Qs(this,0)):null};$n.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),Zi(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,Zi(this),this)};$n.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};$n.prototype.onCompile=function(){};const jr=2147483647,tt=36,na=1,qo=26,Cw=38,_w=700,kp=72,Sp=128,Ep="-",ww=/^xn--/,kw=/[^\0-\x7F]/,Sw=/[\x2E\u3002\uFF0E\uFF61]/g,Ew={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ds=tt-na,rt=Math.floor,fs=String.fromCharCode;function jt(e){throw new RangeError(Ew[e])}function Aw(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function Ap(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(Sw,".");const o=e.split("."),i=Aw(o,n).join(".");return r+i}function Tp(e){const n=[];let t=0;const r=e.length;for(;t<r;){const o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((o&1023)<<10)+(i&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}const Tw=e=>String.fromCodePoint(...e),Dw=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:tt},Fd=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},Dp=function(e,n,t){let r=0;for(e=t?rt(e/_w):e>>1,e+=rt(e/n);e>ds*qo>>1;r+=tt)e=rt(e/ds);return rt(r+(ds+1)*e/(e+Cw))},zp=function(e){const n=[],t=e.length;let r=0,o=Sp,i=kp,u=e.lastIndexOf(Ep);u<0&&(u=0);for(let s=0;s<u;++s)e.charCodeAt(s)>=128&&jt("not-basic"),n.push(e.charCodeAt(s));for(let s=u>0?u+1:0;s<t;){const l=r;for(let c=1,d=tt;;d+=tt){s>=t&&jt("invalid-input");const f=Dw(e.charCodeAt(s++));f>=tt&&jt("invalid-input"),f>rt((jr-r)/c)&&jt("overflow"),r+=f*c;const h=d<=i?na:d>=i+qo?qo:d-i;if(f<h)break;const p=tt-h;c>rt(jr/p)&&jt("overflow"),c*=p}const a=n.length+1;i=Dp(r-l,a,l==0),rt(r/a)>jr-o&&jt("overflow"),o+=rt(r/a),r%=a,n.splice(r++,0,o)}return String.fromCodePoint(...n)},Fp=function(e){const n=[];e=Tp(e);const t=e.length;let r=Sp,o=0,i=kp;for(const l of e)l<128&&n.push(fs(l));const u=n.length;let s=u;for(u&&n.push(Ep);s<t;){let l=jr;for(const c of e)c>=r&&c<l&&(l=c);const a=s+1;l-r>rt((jr-o)/a)&&jt("overflow"),o+=(l-r)*a,r=l;for(const c of e)if(c<r&&++o>jr&&jt("overflow"),c===r){let d=o;for(let f=tt;;f+=tt){const h=f<=i?na:f>=i+qo?qo:f-i;if(d<h)break;const p=d-h,g=tt-h;n.push(fs(Fd(h+p%g,0))),d=rt(p/g)}n.push(fs(Fd(d,0))),i=Dp(o,a,s===u),o=0,++s}++o,++r}return n.join("")},zw=function(e){return Ap(e,function(n){return ww.test(n)?zp(n.slice(4).toLowerCase()):n})},Fw=function(e){return Ap(e,function(n){return kw.test(n)?"xn--"+Fp(n):n})},Pp={version:"2.3.1",ucs2:{decode:Tp,encode:Tw},decode:zp,encode:Fp,toASCII:Fw,toUnicode:zw},Pw={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},$w={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Iw={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Rw={default:Pw,zero:$w,commonmark:Iw},Ow=/^(vbscript|javascript|file|data):/,Mw=/^data:image\/(gif|png|jpeg|webp);/;function Bw(e){const n=e.trim().toLowerCase();return Ow.test(n)?Mw.test(n):!0}const $p=["http:","https:","mailto:"];function Lw(e){const n=Zl(e,!0);if(n.hostname&&(!n.protocol||$p.indexOf(n.protocol)>=0))try{n.hostname=Pp.toASCII(n.hostname)}catch{}return ri(Gl(n))}function Nw(e){const n=Zl(e,!0);if(n.hostname&&(!n.protocol||$p.indexOf(n.protocol)>=0))try{n.hostname=Pp.toUnicode(n.hostname)}catch{}return Gr(Gl(n),Gr.defaultChars+"%")}function In(e,n){if(!(this instanceof In))return new In(e,n);n||Yl(e)||(n=e||{},e="default"),this.inline=new ii,this.block=new wu,this.core=new Ql,this.renderer=new Qr,this.linkify=new $n,this.validateLink=Bw,this.normalizeLink=Lw,this.normalizeLinkText=Nw,this.utils=HC,this.helpers=Cu({},qC),this.options={},this.configure(e),n&&this.set(n)}In.prototype.set=function(e){return Cu(this.options,e),this};In.prototype.configure=function(e){const n=this;if(Yl(e)){const t=e;if(e=Rw[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};In.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};In.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){t=t.concat(this[o].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(o){return t.indexOf(o)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};In.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};In.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};In.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};In.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};In.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function jw(e,n=100){let t=e.replace(/<img\s+[^>]*src\s*=\s*["']([^"']*)["'][^>]*>/gi,"").replace(/!\[(.*?)\]\(.*?\)/g,"");if(n===-1)return t;if(t.length>n){const r=t.lastIndexOf(" ",n),o=r>n*.8?r:n;t=t.substring(0,o)+"..."}return t}function Hw(e){let n=e.replace(/([.$+?{}()|[\]\\])/g,"\\$1");return n=n.replace(/\*\*\/\*/g,"__GLOBSTAR_WITH_SLASH_STAR__").replace(/\*\*/g,"(.*?)").replace(/\*/g,"[^/]*").replace(/__GLOBSTAR_WITH_SLASH_STAR__/g,"(.*?)[^/]*"),new RegExp(`^${n}$`)}function Uw(e,n){if(!e.includes("**"))return console.error("模式中不包含 '**'."),null;const t=Hw(e),r=n.match(t);return r&&r[1]!==void 0?r[1]:null}const Su=eC("Dynamic",{state:()=>({data:[{title:"为什么写博客",content:"博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。",links:""}],theme:"light"}),getters:{},actions:{initData(){const e=new In,n=te([]),t=Object.assign({"/src/blog/GIT/git基本操作.md":F8,"/src/blog/GIT/git提交规范.md":$8,"/src/blog/go语言进阶学习.md":R8,"/src/blog/nuxt/Nuxt.md":M8,"/src/blog/typescript/ts.md":L8,"/src/blog/上坪支教日记.md":j8,"/src/blog/测试/实习项目—仿百度云盘.md":U8,"/src/blog/测试/脚手架.md":W8,"/src/blog/预处理器/scss.md":V8});console.log(t),n.value=Object.entries(t).map(([r,o])=>{let i=decodeURIComponent(r.split("/").pop()||"");const u=jw(o.default),s=nC(u),l=e.render(u.replace(/^---[\s\S]*?---/,"")),a=Uw("/src/blog/**/*.md",r);return a&&(i=a+i),{id:i,title:i,date:s.date||"未知日期",excerpt:s.excerpt||l.substring(0,100)+"...",content:o.default}}),this.data=n.value.sort((r,o)=>r.title.localeCompare(o.title)),console.log(n.value)}}}),Kw=ae({__name:"Menu",setup(e){const n=te([]),t=g8(),r=te(!0),o=Su(),i=l=>()=>A(Ph,null,{default:()=>A(l)}),u=I(()=>[{whateverLabel:"首页",whateverKey:"home",icon:i(C8),route:"home"},{whateverLabel:"项目",whateverKey:"projects",icon:i(x8),route:"projects"},{whateverLabel:"友链",whateverKey:"links",icon:i(S8),route:"links"},{whateverLabel:"关于",whateverKey:"about",icon:i(w8),route:"about"},{whateverLabel:"文章",whateverKey:"articles",icon:i(m8),whateverChildren:n.value},{whateverLabel:"归档",whateverKey:"markdown",icon:i(D8),route:"markdownIndex"},{whateverLabel:"时间线",whateverKey:"timeline",icon:i(A8),route:"time"}]);Rn(()=>{const l=[];n.value=o.data.map(a=>{if(a.id?.includes("/")){const[c,d]=a.id.split("/");let f=!1;for(let h=0;h<l.length;h++)if(l[h].whateverLabel===c){l[h].whateverChildren?.push({whateverLabel:d,whateverKey:a.id,route:"markdown",params:{id:a.id}}),f=!0;break}return f||l.push({whateverLabel:c,whateverKey:c,route:"markdown",params:{id:c},whateverChildren:[{whateverLabel:d,whateverKey:a.id,route:"markdown",params:{id:a.id}}]}),null}return{whateverLabel:a.title,whateverKey:a.id,route:"markdown",params:{id:a.id}}}).filter(Boolean),n.value.push(...l),console.log(n.value)});const s=I(()=>{const l=a=>a.map(c=>{const d={...c};if(d.route&&!d.whateverChildren){const f=d.whateverLabel;d.whateverLabel=()=>A(op,{to:d.params?{name:d.route,params:d.params}:{name:d.route}},{default:()=>f}),d.onClick=()=>{d.params?t.push({name:d.route,params:d.params}):t.push({name:d.route})}}return Array.isArray(d.whateverChildren)&&(d.whateverChildren=l(d.whateverChildren)),d});return l(u.value)});return(l,a)=>(Ue(),vr(We(Kc),{"has-sider":"",class:"xh-menu__container"},{default:xn(()=>[Ce(We(V4),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:r.value,"show-trigger":"",onCollapse:a[0]||(a[0]=c=>r.value=!0),onExpand:a[1]||(a[1]=c=>r.value=!1)},{default:xn(()=>[Ce(We(r5),{collapsed:r.value,"collapsed-width":64,"collapsed-icon-size":22,options:s.value,"key-field":"whateverKey","label-field":"whateverLabel","children-field":"whateverChildren"},null,8,["collapsed","options"])]),_:1},8,["collapsed"]),Ce(We(Kc))]),_:1}))}}),er=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},Ww=er(Kw,[["__scopeId","data-v-5c534a7b"]]),qw={class:"xh"},Vw=ae({__name:"App",setup(e){const n=Su();n.initData();const t=I(()=>n.theme==="dark"?d5:c5);return(r,o)=>{const i=Df("router-view");return Ue(),cn("div",qw,[o[0]||(o[0]=ue("div",{class:"line-background"},null,-1)),o[1]||(o[1]=vn()),Ce(We(o4),{"theme-overrides":t.value},{default:xn(()=>[Ce(Ww),Ce(i,null,{default:xn(({Component:u})=>[Ce(xr,{name:"router-transition"},{default:xn(()=>[(Ue(),vr(eg(u)))]),_:2},1024)]),_:1})]),_:1},8,["theme-overrides"]),o[2]||(o[2]=ue("div",{class:"area"},[ue("ul",{class:"circles"},[ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li"),ue("li")])],-1))])}}}),Gw=er(Vw,[["__scopeId","data-v-23f71bd0"]]),Zw="modulepreload",Xw=function(e){return"/HaiBlogger/"+e},Pd={},ir=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){let l=function(a){return Promise.all(a.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),s=u?.nonce||u?.getAttribute("nonce");o=l(t.map(a=>{if(a=Xw(a),a in Pd)return;Pd[a]=!0;const c=a.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Zw,c||(f.as="script"),f.crossOrigin="",f.href=a,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return o.then(u=>{for(const s of u||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})},Yw=ae({__name:"Card",props:{title:{type:String,default:"为什么写博客"},content:{type:String,default:""}},setup(e){const n=e;return(t,r)=>(Ue(),vr(We(t4),{title:n.title,embedded:"",bordered:!1,innerHTML:n.content,class:"markdown-renderer"},null,8,["title","innerHTML"]))}}),Jw=er(Yw,[["__scopeId","data-v-e164c9e3"]]),Qw={class:"timeline-container"},e7={__name:"TimeLine",setup(e){return(n,t)=>(Ue(),cn("div",Qw,[Ce(We(s5),{"item-placement":"right",class:"timeline"},{default:xn(()=>[Ce(We(uo),{content:"初次接触前端",time:"2024-10-09"}),Ce(We(uo),{type:"success",title:"纯三件套",content:"自己的第一个博客",time:"2024-12-03"}),Ce(We(uo),{type:"error",content:"学习ing"}),Ce(We(uo),{type:"warning",title:"一个文档",content:"使用vitepress弄了一个博客",time:"2025-04-03"}),Ce(We(uo),{type:"info",title:"本博客",content:"使用这段时间所学去写",time:"2025-07-19"})]),_:1})]))}},n7=er(e7,[["__scopeId","data-v-fbc279ab"]]),t7={class:"xh-home"},r7={class:"xh-info-container"},o7={class:"xh-avatar-container"},i7={class:"xh-info-text"},u7={class:"xh-job"},s7={class:"xh-bio"},l7={class:"xh-social-container"},a7={class:"xh-social"},c7={class:"card"},d7={class:"xh-home-right"},f7=ae({__name:"Home",setup(e){const n=Su(),t=a5(),r=te("近期动态"),o=te(["近期动态","随笔"]),i=te({padding:"0 6px",borderRadius:t.value.borderRadius,display:"inline-block",color:t.value.baseColor,background:t.value.primaryColor,transition:"all .3s ease-in-out",cursor:"pointer"}),u=te(1),s=I(()=>{if(u.value===1)return n.data;if(u.value===2)return[{title:"为什么写博客",content:"content",links:""}]}),l=()=>{u.value++,r.value=o.value[u.value-1],u.value>5&&(u.value=1)},a=()=>{i.value.background=t.value.primaryColorSuppl},c=()=>{i.value.background=t.value.primaryColor};return(d,f)=>{const h=Df("Light");return Ue(),cn(Ne,null,[ue("div",t7,[ue("div",r7,[Ce(We(Vc),{style:{height:"100vh"}},{default:xn(()=>[ue("div",o7,[Ce(We(Z6),{round:"",size:80,src:"https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",class:"xh-avatar"})]),ue("div",i7,[f[9]||(f[9]=ue("div",{class:"xh-name"},"小海",-1)),ue("div",u7,[Ce(h,null,{default:xn(()=>f[0]||(f[0]=[vn("前端开发者")])),_:1,__:[0]}),f[1]||(f[1]=vn("-向阳花木易为春"))]),f[10]||(f[10]=ue("div",{class:"xh-tags"},[ue("span",{class:"xh-tag"},"Vue"),ue("span",{class:"xh-tag"},"React"),ue("span",{class:"xh-tag"},"jest"),ue("span",{class:"xh-tag"},"Typescript"),ue("span",{class:"xh-tag"},"Javascript"),ue("span",{class:"xh-tag"},"CSS"),ue("span",{class:"xh-tag"},"HTML"),ue("span",{class:"xh-tag"},"Node"),ue("span",{class:"xh-tag"},"Git"),ue("span",{class:"xh-tag"},"Golang")],-1)),ue("div",s7,[f[5]||(f[5]=vn(" hi,")),Ce(h,null,{default:xn(()=>f[2]||(f[2]=[vn("我是小海,也可以称我为褚喧")])),_:1,__:[2]}),f[6]||(f[6]=vn(",欢迎来到我的博客. 我是一个喜欢学习、喜欢生活、喜欢分享的")),Ce(h,null,{default:xn(()=>f[3]||(f[3]=[vn("Web前端开发者")])),_:1,__:[3]}),f[7]||(f[7]=vn(",现在的企划只有写前端,学习音乐做一首自己的歌,想要参加开源项目,正在犀牛鸟活动中摸索,希望在未来能够参与更多开源活动,也专注 在一些线下的公益活动,")),Ce(h,null,{default:xn(()=>f[4]||(f[4]=[vn("为世界更美好贡献自己的一份力量")])),_:1,__:[4]}),f[8]||(f[8]=vn(",和很多人一样,相信技术改变世界 "))]),f[11]||(f[11]=ue("div",{class:"xh-bio"}," 除此以外,我也喜欢二次元,阅读(虽然这段时间的阅读也越来越少),散步,喜欢骑行的风,写文章等,爱好很少,但是可以让我一个人非常充实的活着 ",-1)),Ce(We(D4),null,{default:xn(()=>[Ce(xr,{name:"flip",mode:"out-in"},{default:xn(()=>[(Ue(),vr(We(L4),{key:r.value,text:r.value,patterns:o.value,"highlight-style":i.value,onClick:l,onMouseenter:a,onMouseleave:c},null,8,["text","patterns","highlight-style"]))]),_:1})]),_:1}),ue("div",l7,[Ce(We(Vc),{style:{height:"100%"}},{default:xn(()=>[ue("div",a7,[(Ue(!0),cn(Ne,null,ng(s.value,p=>(Ue(),cn("div",c7,[Ce(Jw,{title:p.title,content:p.excerpt},null,8,["title","content"])]))),256))])]),_:1})])])]),_:1})])]),ue("div",d7,[Ce(n7)])],64)}}}),h7=er(f7,[["__scopeId","data-v-343e7c5b"]]),p7=[{path:"/",name:"home",component:h7},{path:"/markdown",name:"markdownIndex",component:()=>ir(()=>import("./index-DM3fzegS.js"),__vite__mapDeps([0,1,2,3]))},{path:"/markdown/:id",name:"markdown",component:()=>ir(()=>import("./markdown-CL4lJxrI.js"),__vite__mapDeps([4,2,5]))},{path:"/projects",name:"projects",component:()=>ir(()=>import("./index-Cn2MxuNb.js"),__vite__mapDeps([6,7,8,9]))},{path:"/links",name:"links",component:()=>ir(()=>import("./index-BTIcUHa3.js"),__vite__mapDeps([10,7,8,11]))},{path:"/about",name:"about",component:()=>ir(()=>import("./index-DEw4oRff.js"),__vite__mapDeps([12,2,13]))},{path:"/time",name:"time",component:()=>ir(()=>import("./index-BLztOZHu.js"),__vite__mapDeps([14,15]))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>ir(()=>import("./index-C272qx4u.js"),__vite__mapDeps([16,2,1,17]))}],g7=h8({history:U5(),routes:p7}),b7={__name:"Light",props:{color:{type:String,default:"#9c3c3c"},fontSize:{type:String,default:"0.9375rem"},fontWeight:{type:String,default:"700"},underline:{type:Boolean,default:!1},underlineColor:{type:String,default:""}},setup(e){const n=e,t=I(()=>({"--xh-color":n.color,"--xh-font-size":n.fontSize,"--xh-font-weight":n.fontWeight,"--xh-underline-color":n.underlineColor||n.color}));return(r,o)=>(Ue(),cn("span",{class:nu(["xh-light",{underline:e.underline}]),style:Vo(t.value)},[su(r.$slots,"default",{},void 0,!0)],6))}},m7=er(b7,[["__scopeId","data-v-79e67a8c"]]),v7=["innerHTML"],x7={key:1},y7=ae({__name:"Markdown",props:{theme:{default:"github-dark-dimmed"},src:{default:""},content:{default:""},height:{default:"auto"},width:{default:"auto"}},setup(e){const n=Su(),t=e,r=te(""),o=te(""),i=te(null);return Rn(async()=>{const u=new In({html:!0,linkify:!0,typographer:!0,highlight:(s,l)=>s});_t(async()=>{if(console.log("props.src",t.src),t.src)try{r.value=n.data.filter(s=>s.title===t.src)[0].content,o.value=u.render(r.value),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}else if(t.content)try{o.value=u.render(t.content),i.value=null}catch(s){i.value=s;const l=`# Error加载失败

**错误**${i.value}`;o.value=u.render(l),console.error(s)}})}),(u,s)=>(Ue(),cn("div",{class:"fei-markdown",style:Vo(`${t.width?`width:${t.width}px;`:""}${t.height?`height:${t.height}px;`:""}`)},[o.value?(Ue(),cn("div",{key:0,class:"fei-markdown-body",innerHTML:o.value},null,8,v7)):(Ue(),cn("div",x7,s[0]||(s[0]=[ue("p",null,"正在渲染...",-1)])))],4))}}),C7=er(y7,[["__scopeId","data-v-7d900608"]]),_7={},w7={class:"xh-home"},k7={class:"xh-info-container"};function S7(e,n){return Ue(),cn("div",w7,[ue("div",k7,[su(e.$slots,"default",{},void 0,!0)])])}const E7=er(_7,[["render",S7],["__scopeId","data-v-0e2c4f9f"]]),eo=wb(Gw);eo.use(G8());eo.component("Light",m7);eo.component("Fei-Markdown",C7);eo.component("Fei-Container",E7);eo.use(g7);eo.mount("#app");export{M7 as $,mh as A,Dn as B,Cn as C,Fe as D,ze as E,Un as F,R7 as G,Ch as H,it as I,$7 as J,Z as K,on as L,w6 as M,Bl as N,An as O,Ml as P,O7 as Q,lr as R,gu as S,xr as T,Ha as U,Ni as V,Zo as W,_m as X,Nl as Y,De as Z,fc as _,ao as a,kt as a$,dv as a0,Ne as a1,Ah as a2,_t as a3,P7 as a4,I7 as a5,Ro as a6,Jo as a7,en as a8,Ze as a9,xn as aA,We as aB,vn as aC,Vc as aD,Df as aE,D7 as aF,nu as aG,su as aH,vr as aI,Vo as aJ,pb as aK,K1 as aL,A7 as aM,km as aN,Vt as aO,Z6 as aP,t4 as aQ,Ph as aR,E7 as aS,J0 as aT,zh as aU,Vy as aV,Im as aW,T0 as aX,c4 as aY,j6 as aZ,U6 as a_,qe as aa,kl as ab,Ai as ac,Co as ad,bv as ae,bu as af,E0 as ag,A0 as ah,z0 as ai,Wr as aj,ou as ak,Yg as al,Va as am,C0 as an,y0 as ao,Bi as ap,g8 as aq,cn as ar,Ue as as,ue as at,T7 as au,c1 as av,ng as aw,er as ax,Su as ay,Ce as az,Yr as b,ni as b0,w0 as b1,hr as b2,qy as b3,zs as b4,dc as b5,I as c,ae as d,D0 as e,kf as f,Sf as g,A as h,be as i,Ua as j,F7 as k,Xb as l,wr as m,lc as n,Rn as o,je as p,Hn as q,te as r,Hy as s,He as t,Tn as u,K as v,sn as w,L as x,U as y,Ps as z};
