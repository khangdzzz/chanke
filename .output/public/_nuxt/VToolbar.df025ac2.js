import{b as H}from"./index.bc80bfbd.js";import{p as y,W as x,Y as T,h as V,q as k,t as a,Z as I,ay as E,a5 as D,a0 as $,$ as w,s as q,a as h,a2 as z,az as o}from"./entry.75e5da12.js";import{m as F,a as U,b as W,u as Y,c as Z,d as j}from"./rounded.42519ff8.js";import{V as A}from"./VImg.1fb1b266.js";import{V as u}from"./dimensions.828db36b.js";const G=y({text:String,...x(),...T()},"v-toolbar-title"),J=V()({name:"VToolbarTitle",props:G(),setup(e,n){let{slots:t}=n;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),K=[null,"prominent","default","comfortable","compact"],L=y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>K.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...F(),...x(),...U(),...W(),...T({tag:"header"}),...I()},"v-toolbar"),ee=V()({name:"VToolbar",props:L(),setup(e,n){var c;let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=E(D(e,"color")),{borderClasses:_}=Y(e),{elevationClasses:C}=Z(e),{roundedClasses:B}=j(e),{themeClasses:P}=$(e),{rtlClasses:S}=w(),i=q(!!(e.extended||(c=t.extension)!=null&&c.call(t))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return z({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||t.title),R=!!(t.image||e.image),m=(g=t.extension)==null?void 0:g.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[R&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(A,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>{var v,b,f;return[a("div",{class:"v-toolbar__content",style:{height:o(r.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),N&&a(J,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>[a(H,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:o(d.value)}},[m])]})]})]})}),{contentHeight:r,extensionHeight:d}}});export{ee as V,L as m};
