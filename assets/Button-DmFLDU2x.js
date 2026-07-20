import{q as ho,i as po,c as N,a4 as vo,p as Go,d as J,an as Wo,h as x,T as Oo,x as v,b1 as go,v as Q,y as f,A as mo,t as Co,Q as _o,r as q,b2 as oo,b3 as yo,B as Mo,K as R,L as uo,O as bo,b4 as jo,u as No,C as Lo,D as Po,P as Ko,E as Vo,a9 as Qo,b5 as qo,F as t,Z as U,b6 as xo}from"./index-DkdSi9PF.js";const fo=vo("n-form-item");function Ao(o,{defaultSize:s="medium",mergedSize:d,mergedDisabled:c}={}){const n=po(fo,null);Go(fo,null);const u=N(d?()=>d(n):()=>{const{size:w}=o;if(w)return w;if(n){const{mergedSize:G}=n;if(G.value!==void 0)return G.value}return s}),L=N(c?()=>c(n):()=>{const{disabled:w}=o;return w!==void 0?w:n?n.disabled.value:!1}),O=N(()=>{const{status:w}=o;return w||(n==null?void 0:n.mergedValidationStatus.value)});return ho(()=>{n&&n.restoreValidation()}),{mergedSizeRef:u,mergedDisabledRef:L,mergedStatusRef:O,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const $o=J({name:"BaseIconSwitchTransition",setup(o,{slots:s}){const d=Wo();return()=>x(Oo,{name:"icon-switch-transition",appear:d.value},s)}}),{cubicBezierEaseInOut:Yo}=go;function io({originalTransform:o="",left:s=0,top:d=0,transition:c=`all .3s ${Yo} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${o} scale(0.75)`,left:s,top:d,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:s,top:d,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:s,top:d,transition:c})]}const Xo=v([v("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Q("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[f("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),f("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),f("container",`
 animation: rotator 3s linear infinite both;
 `,[f("icon",`
 height: 1em;
 width: 1em;
 `)])])]),so="1.6s",Uo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Zo=J({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0}},Uo),setup(o){mo("-base-loading",Xo,Co(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:s,strokeWidth:d,stroke:c,scale:n}=this,u=s/n;return x("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},x($o,null,{default:()=>this.show?x("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},x("div",{class:`${o}-base-loading__container`},x("svg",{class:`${o}-base-loading__icon`,viewBox:`0 0 ${2*u} ${2*u}`,xmlns:"http://www.w3.org/2000/svg",style:{color:c}},x("g",null,x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${u} ${u};270 ${u} ${u}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"}),x("circle",{class:`${o}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:u,cy:u,r:s-d/2,"stroke-dasharray":5.67*s,"stroke-dashoffset":18.48*s},x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${u} ${u};135 ${u} ${u};450 ${u} ${u}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"}),x("animate",{attributeName:"stroke-dashoffset",values:`${5.67*s};${1.42*s};${5.67*s}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"})))))):x("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:W}=go;function Jo({duration:o=".2s",delay:s=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${W},
 max-width ${o} ${W} ${s},
 margin-left ${o} ${W} ${s},
 margin-right ${o} ${W} ${s};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${W} ${s},
 max-width ${o} ${W},
 margin-left ${o} ${W},
 margin-right ${o} ${W};
 `)]}const oe=Q("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),ee=J({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){mo("-base-wave",oe,Co(o,"clsPrefix"));const s=q(null),d=q(!1);let c=null;return ho(()=>{c!==null&&window.clearTimeout(c)}),{active:d,selfRef:s,play(){c!==null&&(window.clearTimeout(c),d.value=!1,c=null),_o(()=>{var n;(n=s.value)===null||n===void 0||n.offsetHeight,d.value=!0,c=window.setTimeout(()=>{d.value=!1,c=null},1e3)})}}},render(){const{clsPrefix:o}=this;return x("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),re=oo&&"chrome"in window;oo&&navigator.userAgent.includes("Firefox");const te=oo&&navigator.userAgent.includes("Safari")&&!re;function j(o){return yo(o,[255,255,255,.16])}function Z(o){return yo(o,[0,0,0,.12])}const ne=vo("n-button-group"),se={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function ie(o){const{heightTiny:s,heightSmall:d,heightMedium:c,heightLarge:n,borderRadius:u,fontSizeTiny:L,fontSizeSmall:O,fontSizeMedium:w,fontSizeLarge:G,opacityDisabled:K,textColor2:C,textColor3:eo,primaryColorHover:g,primaryColorPressed:k,borderColor:A,primaryColor:F,baseColor:a,infoColor:D,infoColorHover:B,infoColorPressed:I,successColor:r,successColorHover:l,successColorPressed:y,warningColor:e,warningColorHover:P,warningColorPressed:T,errorColor:$,errorColorHover:z,errorColorPressed:S,fontWeight:V,buttonColor2:E,buttonColor2Hover:_,buttonColor2Pressed:H,fontWeightStrong:b}=o;return Object.assign(Object.assign({},se),{heightTiny:s,heightSmall:d,heightMedium:c,heightLarge:n,borderRadiusTiny:u,borderRadiusSmall:u,borderRadiusMedium:u,borderRadiusLarge:u,fontSizeTiny:L,fontSizeSmall:O,fontSizeMedium:w,fontSizeLarge:G,opacityDisabled:K,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:E,colorSecondaryHover:_,colorSecondaryPressed:H,colorTertiary:E,colorTertiaryHover:_,colorTertiaryPressed:H,colorQuaternary:"#0000",colorQuaternaryHover:_,colorQuaternaryPressed:H,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:C,textColorTertiary:eo,textColorHover:g,textColorPressed:k,textColorFocus:g,textColorDisabled:C,textColorText:C,textColorTextHover:g,textColorTextPressed:k,textColorTextFocus:g,textColorTextDisabled:C,textColorGhost:C,textColorGhostHover:g,textColorGhostPressed:k,textColorGhostFocus:g,textColorGhostDisabled:C,border:`1px solid ${A}`,borderHover:`1px solid ${g}`,borderPressed:`1px solid ${k}`,borderFocus:`1px solid ${g}`,borderDisabled:`1px solid ${A}`,rippleColor:F,colorPrimary:F,colorHoverPrimary:g,colorPressedPrimary:k,colorFocusPrimary:g,colorDisabledPrimary:F,textColorPrimary:a,textColorHoverPrimary:a,textColorPressedPrimary:a,textColorFocusPrimary:a,textColorDisabledPrimary:a,textColorTextPrimary:F,textColorTextHoverPrimary:g,textColorTextPressedPrimary:k,textColorTextFocusPrimary:g,textColorTextDisabledPrimary:C,textColorGhostPrimary:F,textColorGhostHoverPrimary:g,textColorGhostPressedPrimary:k,textColorGhostFocusPrimary:g,textColorGhostDisabledPrimary:F,borderPrimary:`1px solid ${F}`,borderHoverPrimary:`1px solid ${g}`,borderPressedPrimary:`1px solid ${k}`,borderFocusPrimary:`1px solid ${g}`,borderDisabledPrimary:`1px solid ${F}`,rippleColorPrimary:F,colorInfo:D,colorHoverInfo:B,colorPressedInfo:I,colorFocusInfo:B,colorDisabledInfo:D,textColorInfo:a,textColorHoverInfo:a,textColorPressedInfo:a,textColorFocusInfo:a,textColorDisabledInfo:a,textColorTextInfo:D,textColorTextHoverInfo:B,textColorTextPressedInfo:I,textColorTextFocusInfo:B,textColorTextDisabledInfo:C,textColorGhostInfo:D,textColorGhostHoverInfo:B,textColorGhostPressedInfo:I,textColorGhostFocusInfo:B,textColorGhostDisabledInfo:D,borderInfo:`1px solid ${D}`,borderHoverInfo:`1px solid ${B}`,borderPressedInfo:`1px solid ${I}`,borderFocusInfo:`1px solid ${B}`,borderDisabledInfo:`1px solid ${D}`,rippleColorInfo:D,colorSuccess:r,colorHoverSuccess:l,colorPressedSuccess:y,colorFocusSuccess:l,colorDisabledSuccess:r,textColorSuccess:a,textColorHoverSuccess:a,textColorPressedSuccess:a,textColorFocusSuccess:a,textColorDisabledSuccess:a,textColorTextSuccess:r,textColorTextHoverSuccess:l,textColorTextPressedSuccess:y,textColorTextFocusSuccess:l,textColorTextDisabledSuccess:C,textColorGhostSuccess:r,textColorGhostHoverSuccess:l,textColorGhostPressedSuccess:y,textColorGhostFocusSuccess:l,textColorGhostDisabledSuccess:r,borderSuccess:`1px solid ${r}`,borderHoverSuccess:`1px solid ${l}`,borderPressedSuccess:`1px solid ${y}`,borderFocusSuccess:`1px solid ${l}`,borderDisabledSuccess:`1px solid ${r}`,rippleColorSuccess:r,colorWarning:e,colorHoverWarning:P,colorPressedWarning:T,colorFocusWarning:P,colorDisabledWarning:e,textColorWarning:a,textColorHoverWarning:a,textColorPressedWarning:a,textColorFocusWarning:a,textColorDisabledWarning:a,textColorTextWarning:e,textColorTextHoverWarning:P,textColorTextPressedWarning:T,textColorTextFocusWarning:P,textColorTextDisabledWarning:C,textColorGhostWarning:e,textColorGhostHoverWarning:P,textColorGhostPressedWarning:T,textColorGhostFocusWarning:P,textColorGhostDisabledWarning:e,borderWarning:`1px solid ${e}`,borderHoverWarning:`1px solid ${P}`,borderPressedWarning:`1px solid ${T}`,borderFocusWarning:`1px solid ${P}`,borderDisabledWarning:`1px solid ${e}`,rippleColorWarning:e,colorError:$,colorHoverError:z,colorPressedError:S,colorFocusError:z,colorDisabledError:$,textColorError:a,textColorHoverError:a,textColorPressedError:a,textColorFocusError:a,textColorDisabledError:a,textColorTextError:$,textColorTextHoverError:z,textColorTextPressedError:S,textColorTextFocusError:z,textColorTextDisabledError:C,textColorGhostError:$,textColorGhostHoverError:z,textColorGhostPressedError:S,textColorGhostFocusError:z,textColorGhostDisabledError:$,borderError:`1px solid ${$}`,borderHoverError:`1px solid ${z}`,borderPressedError:`1px solid ${S}`,borderFocusError:`1px solid ${z}`,borderDisabledError:`1px solid ${$}`,rippleColorError:$,waveOpacity:"0.6",fontWeight:V,fontWeightStrong:b})}const ae={common:Mo,self:ie},le=v([Q("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("color",[f("border",{borderColor:"var(--n-border-color)"}),R("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),uo("disabled",[v("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),R("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),R("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),uo("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),R("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),R("loading","cursor: wait;"),Q("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[R("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),oo&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",`
 border: var(--n-border);
 `),f("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[Q("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),Jo()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),R("block",`
 display: flex;
 width: 100%;
 `),R("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),R("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),de=Object.assign(Object.assign({},Po.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!te},spinProps:Object}),ue=J({name:"Button",props:de,slots:Object,setup(o){const s=q(null),d=q(null),c=q(!1),n=No(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),u=po(ne,{}),{inlineThemeDisabled:L,mergedClsPrefixRef:O,mergedRtlRef:w,mergedComponentPropsRef:G}=Lo(o),{mergedSizeRef:K}=Ao({},{defaultSize:"medium",mergedSize:r=>{var l,y;const{size:e}=o;if(e)return e;const{size:P}=u;if(P)return P;const{mergedSize:T}=r||{};if(T)return T.value;const $=(y=(l=G==null?void 0:G.value)===null||l===void 0?void 0:l.Button)===null||y===void 0?void 0:y.size;return $||"medium"}}),C=N(()=>o.focusable&&!o.disabled),eo=r=>{var l;C.value||r.preventDefault(),!o.nativeFocusBehavior&&(r.preventDefault(),!o.disabled&&C.value&&((l=s.value)===null||l===void 0||l.focus({preventScroll:!0})))},g=r=>{var l;if(!o.disabled&&!o.loading){const{onClick:y}=o;y&&Qo(y,r),o.text||(l=d.value)===null||l===void 0||l.play()}},k=r=>{switch(r.key){case"Enter":if(!o.keyboard)return;c.value=!1}},A=r=>{switch(r.key){case"Enter":if(!o.keyboard||o.loading){r.preventDefault();return}c.value=!0}},F=()=>{c.value=!1},a=Po("Button","-button",le,ae,o,O),D=Ko("Button",w,O),B=N(()=>{const r=a.value,{common:{cubicBezierEaseInOut:l,cubicBezierEaseOut:y},self:e}=r,{rippleDuration:P,opacityDisabled:T,fontWeight:$,fontWeightStrong:z}=e,S=K.value,{dashed:V,type:E,ghost:_,text:H,color:b,round:ao,circle:ro,textColor:M,secondary:So,tertiary:lo,quaternary:wo,strong:To}=o,zo={"--n-font-weight":To?z:$};let h={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=E==="tertiary",co=E==="default",i=Y?"default":E;if(H){const p=M||b;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||e[t("textColorText",i)],"--n-text-color-hover":p?j(p):e[t("textColorTextHover",i)],"--n-text-color-pressed":p?Z(p):e[t("textColorTextPressed",i)],"--n-text-color-focus":p?j(p):e[t("textColorTextHover",i)],"--n-text-color-disabled":p||e[t("textColorTextDisabled",i)]}}else if(_||V){const p=M||b;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":b||e[t("rippleColor",i)],"--n-text-color":p||e[t("textColorGhost",i)],"--n-text-color-hover":p?j(p):e[t("textColorGhostHover",i)],"--n-text-color-pressed":p?Z(p):e[t("textColorGhostPressed",i)],"--n-text-color-focus":p?j(p):e[t("textColorGhostHover",i)],"--n-text-color-disabled":p||e[t("textColorGhostDisabled",i)]}}else if(So){const p=co?e.textColor:Y?e.textColorTertiary:e[t("color",i)],m=b||p,X=E!=="default"&&E!=="tertiary";h={"--n-color":X?U(m,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?U(m,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?U(m,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?U(m,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":m,"--n-text-color-hover":m,"--n-text-color-pressed":m,"--n-text-color-focus":m,"--n-text-color-disabled":m}}else if(lo||wo){const p=co?e.textColor:Y?e.textColorTertiary:e[t("color",i)],m=b||p;lo?(h["--n-color"]=e.colorTertiary,h["--n-color-hover"]=e.colorTertiaryHover,h["--n-color-pressed"]=e.colorTertiaryPressed,h["--n-color-focus"]=e.colorSecondaryHover,h["--n-color-disabled"]=e.colorTertiary):(h["--n-color"]=e.colorQuaternary,h["--n-color-hover"]=e.colorQuaternaryHover,h["--n-color-pressed"]=e.colorQuaternaryPressed,h["--n-color-focus"]=e.colorQuaternaryHover,h["--n-color-disabled"]=e.colorQuaternary),h["--n-ripple-color"]="#0000",h["--n-text-color"]=m,h["--n-text-color-hover"]=m,h["--n-text-color-pressed"]=m,h["--n-text-color-focus"]=m,h["--n-text-color-disabled"]=m}else h={"--n-color":b||e[t("color",i)],"--n-color-hover":b?j(b):e[t("colorHover",i)],"--n-color-pressed":b?Z(b):e[t("colorPressed",i)],"--n-color-focus":b?j(b):e[t("colorFocus",i)],"--n-color-disabled":b||e[t("colorDisabled",i)],"--n-ripple-color":b||e[t("rippleColor",i)],"--n-text-color":M||(b?e.textColorPrimary:Y?e.textColorTertiary:e[t("textColor",i)]),"--n-text-color-hover":M||(b?e.textColorHoverPrimary:e[t("textColorHover",i)]),"--n-text-color-pressed":M||(b?e.textColorPressedPrimary:e[t("textColorPressed",i)]),"--n-text-color-focus":M||(b?e.textColorFocusPrimary:e[t("textColorFocus",i)]),"--n-text-color-disabled":M||(b?e.textColorDisabledPrimary:e[t("textColorDisabled",i)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};H?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[t("border",i)],"--n-border-hover":e[t("borderHover",i)],"--n-border-pressed":e[t("borderPressed",i)],"--n-border-focus":e[t("borderFocus",i)],"--n-border-disabled":e[t("borderDisabled",i)]};const{[t("height",S)]:no,[t("fontSize",S)]:Ho,[t("padding",S)]:Fo,[t("paddingRound",S)]:Bo,[t("iconSize",S)]:Io,[t("borderRadius",S)]:ko,[t("iconMargin",S)]:Do,waveOpacity:Eo}=e,Ro={"--n-width":ro&&!H?no:"initial","--n-height":H?"initial":no,"--n-font-size":Ho,"--n-padding":ro||H?"initial":ao?Bo:Fo,"--n-icon-size":Io,"--n-icon-margin":Do,"--n-border-radius":H?"initial":ro||ao?no:ko};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":l,"--n-bezier-ease-out":y,"--n-ripple-duration":P,"--n-opacity-disabled":T,"--n-wave-opacity":Eo},zo),h),to),Ro)}),I=L?Vo("button",N(()=>{let r="";const{dashed:l,type:y,ghost:e,text:P,color:T,round:$,circle:z,textColor:S,secondary:V,tertiary:E,quaternary:_,strong:H}=o;l&&(r+="a"),e&&(r+="b"),P&&(r+="c"),$&&(r+="d"),z&&(r+="e"),V&&(r+="f"),E&&(r+="g"),_&&(r+="h"),H&&(r+="i"),T&&(r+=`j${xo(T)}`),S&&(r+=`k${xo(S)}`);const{value:b}=K;return r+=`l${b[0]}`,r+=`m${y[0]}`,r}),B,o):void 0;return{selfElRef:s,waveElRef:d,mergedClsPrefix:O,mergedFocusable:C,mergedSize:K,showBorder:n,enterPressed:c,rtlEnabled:D,handleMousedown:eo,handleKeydown:A,handleBlur:F,handleKeyup:k,handleClick:g,customColorCssVars:N(()=>{const{color:r}=o;if(!r)return null;const l=j(r);return{"--n-border-color":r,"--n-border-color-hover":l,"--n-border-color-pressed":Z(r),"--n-border-color-focus":l,"--n-border-color-disabled":r}}),cssVars:L?void 0:B,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:o,tag:s,onRender:d}=this;d==null||d();const c=bo(this.$slots.default,n=>n&&x("span",{class:`${o}-button__content`},n));return x(s,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&c,x(jo,{width:!0},{default:()=>bo(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&x("span",{class:`${o}-button__icon`,style:{margin:qo(this.$slots.default)?"0":""}},x($o,null,{default:()=>this.loading?x(Zo,Object.assign({clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20},this.spinProps)):x("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&c,this.text?null:x(ee,{ref:"waveElRef",clsPrefix:o}),this.showBorder?x("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?x("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});export{ue as B,$o as N,Zo as a,te as b,io as i,Ao as u};
