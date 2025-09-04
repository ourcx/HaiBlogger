import{c as u,i as v,q as $,a4 as y,p as k,d as p,ao as C,h as i,T as B,x as l,a$ as S,v as T,y as c,A as _,t as x,b1 as f}from"./index-Ddy5gRp3.js";const g=y("n-form-item");function P(t,{defaultSize:a="medium",mergedSize:r,mergedDisabled:o}={}){const e=v(g,null);k(g,null);const n=u(r?()=>r(e):()=>{const{size:s}=t;if(s)return s;if(e){const{mergedSize:m}=e;if(m.value!==void 0)return m.value}return a}),b=u(o?()=>o(e):()=>{const{disabled:s}=t;return s!==void 0?s:e?e.disabled.value:!1}),w=u(()=>{const{status:s}=t;return s||e?.mergedValidationStatus.value});return $(()=>{e&&e.restoreValidation()}),{mergedSizeRef:n,mergedDisabledRef:b,mergedStatusRef:w,nTriggerFormBlur(){e&&e.handleContentBlur()},nTriggerFormChange(){e&&e.handleContentChange()},nTriggerFormFocus(){e&&e.handleContentFocus()},nTriggerFormInput(){e&&e.handleContentInput()}}}const I=p({name:"BaseIconSwitchTransition",setup(t,{slots:a}){const r=C();return()=>i(B,{name:"icon-switch-transition",appear:r.value},a)}}),{cubicBezierEaseInOut:N}=S;function h({originalTransform:t="",left:a=0,top:r=0,transition:o=`all .3s ${N} !important`}={}){return[l("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${t} scale(0.75)`,left:a,top:r,opacity:0}),l("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:a,top:r,opacity:1}),l("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:a,top:r,transition:o})]}const F=l([l("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),T("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[h()]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[h({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("container",`
 animation: rotator 3s linear infinite both;
 `,[c("icon",`
 height: 1em;
 width: 1em;
 `)])])]),d="1.6s",z={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},A=p({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},z),setup(t){_("-base-loading",F,x(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:a,strokeWidth:r,stroke:o,scale:e}=this,n=a/e;return i("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},i(I,null,{default:()=>this.show?i("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},i("div",{class:`${t}-base-loading__container`},i("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},i("g",null,i("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};270 ${n} ${n}`,begin:"0s",dur:d,fill:"freeze",repeatCount:"indefinite"}),i("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:n,cy:n,r:a-r/2,"stroke-dasharray":5.67*a,"stroke-dashoffset":18.48*a},i("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};135 ${n} ${n};450 ${n} ${n}`,begin:"0s",dur:d,fill:"freeze",repeatCount:"indefinite"}),i("animate",{attributeName:"stroke-dashoffset",values:`${5.67*a};${1.42*a};${5.67*a}`,begin:"0s",dur:d,fill:"freeze",repeatCount:"indefinite"})))))):i("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}}),R=f&&"chrome"in window;f&&navigator.userAgent.includes("Firefox");const L=f&&navigator.userAgent.includes("Safari")&&!R;export{I as N,A as a,L as b,h as i,P as u};
