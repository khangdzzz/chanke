import{p as P,W,h as F,q as B,t as a,a as h,s as m,r as q,l as z,aC as x,b3 as A,m as H,K as C,aa as $,F as L,az as U,ap as K}from"./entry.75e5da12.js";import{i as G}from"./index.fcb5bc87.js";import{m as J,M as _}from"./transition.20c87304.js";import{m as Q,u as X}from"./dimensions.828db36b.js";function Y(e){return{aspectStyles:h(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const Z=P({aspectRatio:[String,Number],contentClass:String,...W(),...Q()},"v-responsive"),p=F()({name:"VResponsive",props:Z(),setup(e,o){let{slots:u}=o;const{aspectStyles:s}=Y(e),{dimensionStyles:g}=X(e);return B(()=>{var r;return a("div",{class:["v-responsive",e.class],style:[g.value,e.style]},[a("div",{class:"v-responsive__sizer",style:s.value},null),(r=u.additional)==null?void 0:r.call(u),u.default&&a("div",{class:["v-responsive__content",e.contentClass]},[u.default()])])}),{}}}),ee=P({aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...W(),...J()},"v-img"),le=F()({name:"VImg",directives:{intersect:G},props:ee(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:u,slots:s}=o;const g=m(""),r=q(),l=m(e.eager?"loading":"idle"),v=m(),f=m(),i=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=h(()=>i.value.aspect||v.value/f.value||0);z(()=>e.src,()=>{y(l.value!=="idle")}),z(d,(t,n)=>{!t&&n&&r.value&&S(r.value)}),x(()=>y());function y(t){if(!(e.eager&&t)&&!(A&&!t&&!e.eager)){if(l.value="loading",i.value.lazySrc){const n=new Image;n.src=i.value.lazySrc,S(n,null)}i.value.src&&H(()=>{var n,c;if(u("loadstart",((n=r.value)==null?void 0:n.currentSrc)||i.value.src),(c=r.value)!=null&&c.complete){if(r.value.naturalWidth||b(),l.value==="error")return;d.value||S(r.value,null),R()}else d.value||S(r.value),w()})}}function R(){var t;w(),l.value="loaded",u("load",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function b(){var t;l.value="error",u("error",((t=r.value)==null?void 0:t.currentSrc)||i.value.src)}function w(){const t=r.value;t&&(g.value=t.currentSrc||t.src)}let V=-1;function S(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const c=()=>{clearTimeout(V);const{naturalHeight:T,naturalWidth:k}=t;T||k?(v.value=k,f.value=T):!t.complete&&l.value==="loading"&&n!=null?V=window.setTimeout(c,n):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,f.value=1)};c()}const I=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var c;if(!i.value.src||l.value==="idle")return null;const t=a("img",{class:["v-img__img",I.value],src:i.value.src,srcset:i.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:R,onError:b},null),n=(c=s.sources)==null?void 0:c.call(s);return a(_,{transition:e.transition,appear:!0},{default:()=>[C(n?a("picture",{class:"v-img__picture"},[n,t]):t,[[K,l.value==="loaded"]])]})},E=()=>a(_,{transition:e.transition},{default:()=>[i.value.lazySrc&&l.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",I.value],src:i.value.lazySrc,alt:e.alt},null)]}),M=()=>s.placeholder?a(_,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,O=()=>s.error?a(_,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,j=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=m(!1);{const t=z(d,n=>{n&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),t())})}return B(()=>C(a(p,{class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:U(e.width==="auto"?v.value:e.width)},e.style],aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(L,null,[a(D,null,null),a(E,null,null),a(j,null,null),a(M,null,null),a(O,null,null)]),default:s.default}),[[$("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:g,image:r,state:l,naturalWidth:v,naturalHeight:f}}});export{le as V};