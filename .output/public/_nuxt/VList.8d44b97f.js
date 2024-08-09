import{p as A,W as F,Z as Y,h as x,a0 as Z,k as de,a5 as k,a as f,az as ne,q as _,t as v,ab as $,s as T,a8 as N,aO as O,r as P,j as ae,aD as ve,aI as He,S as Ue,V as B,Y as R,K as fe,ap as qe,aV as ze,av as le,l as Ye,aa as Ze,F as ie,v as se,e as I,aB as me,a7 as Je,ay as Qe,a2 as Xe,aW as et}from"./entry.75e5da12.js";import{b as tt}from"./index.bc80bfbd.js";import{M as nt}from"./transition.20c87304.js";import{u as at}from"./ssrBoot.a1982877.js";import{V as q,m as ye,u as ge}from"./dimensions.828db36b.js";import{c as he,V as re}from"./VAvatar.727a47c0.js";import{m as pe,a as Se,R as lt,e as it,u as be,i as st}from"./VBtn.e95b6ffc.js";import{m as ke,a as Ce,b as Ve,u as Ie,c as we,d as Pe}from"./rounded.42519ff8.js";import{m as rt,u as ut}from"./router.bbe94cc5.js";import{V as ue}from"./VIcon.54c6b0c4.js";const ot=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...F(),...Y()},"v-divider"),ct=x()({name:"VDivider",props:ot(),setup(e,l){let{attrs:t}=l;const{themeClasses:n}=Z(e),{textColorClasses:i,textColorStyles:a}=de(k(e,"color")),s=f(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=ne(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=ne(e.thickness)),r});return _(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,i.value,e.class],style:[s.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),z=Symbol.for("vuetify:list");function Ae(){const e=$(z,{hasPrepend:T(!1),updateHasPrepend:()=>null}),l={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return N(z,l),e}function Le(){return $(z,null)}const dt={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){const a=new Set;a.add(l);let s=i.get(l);for(;s!=null;)a.add(s),s=i.get(s);return a}else return n.delete(l),n},select:()=>null},Be={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){let a=i.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=i.get(a);return n}else n.delete(l);return n},select:()=>null},vt={open:Be.open,select:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(!t)return n;const a=[];let s=i.get(l);for(;s!=null;)a.push(s),s=i.get(s);return new Set(a)}},J=e=>{const l={select:t=>{let{id:n,value:i,selected:a}=t;if(n=O(n),e&&!i){const s=Array.from(a.entries()).reduce((r,S)=>{let[g,h]=S;return h==="on"?[...r,g]:r},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,i?"on":"off"),a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:t=>{const n=[];for(const[i,a]of t.entries())a==="on"&&n.push(i);return n}};return l},xe=e=>{const l=J(e);return{select:n=>{let{selected:i,id:a,...s}=n;a=O(a);const r=i.has(a)?new Map([[a,i.get(a)]]):new Map;return l.select({...s,id:a,selected:r})},in:(n,i,a)=>{let s=new Map;return n!=null&&n.length&&(s=l.in(n.slice(0,1),i,a)),s},out:(n,i,a)=>l.out(n,i,a)}},ft=e=>{const l=J(e);return{select:n=>{let{id:i,selected:a,children:s,...r}=n;return i=O(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...r})},in:l.in,out:l.out}},mt=e=>{const l=xe(e);return{select:n=>{let{id:i,selected:a,children:s,...r}=n;return i=O(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...r})},in:l.in,out:l.out}},yt=e=>{const l={select:t=>{let{id:n,value:i,selected:a,children:s,parents:r}=t;n=O(n);const S=new Map(a),g=[n];for(;g.length;){const u=g.shift();a.set(u,i?"on":"off"),s.has(u)&&g.push(...s.get(u))}let h=r.get(n);for(;h;){const u=s.get(h),o=u.every(d=>a.get(d)==="on"),c=u.every(d=>!a.has(d)||a.get(d)==="off");a.set(h,o?"on":c?"off":"indeterminate"),h=r.get(h)}return e&&!i&&Array.from(a.entries()).reduce((o,c)=>{let[d,m]=c;return m==="on"?[...o,d]:o},[]).length===0?S:a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:(t,n)=>{const i=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&i.push(a);return i}};return l},D=Symbol.for("vuetify:nested"),Oe={id:T(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},gt=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ht=e=>{let l=!1;const t=P(new Map),n=P(new Map),i=ae(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return mt(e.mandatory);case"leaf":return ft(e.mandatory);case"independent":return J(e.mandatory);case"single-independent":return xe(e.mandatory);case"classic":default:return yt(e.mandatory)}}),s=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return vt;case"single":return dt;case"multiple":default:return Be}}),r=ae(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));ve(()=>{l=!0});function S(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const g=He("nested"),h={id:T(),root:{opened:i,selected:r,selectedValues:f(()=>{const u=[];for(const[o,c]of r.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&n.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(d=>d!==u))}n.value.delete(u),i.value.delete(u)},open:(u,o,c)=>{g.emit("click:open",{id:u,value:o,path:S(u),event:c});const d=s.value.open({id:u,value:o,opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},openOnSelect:(u,o,c)=>{const d=s.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},select:(u,o,c)=>{g.emit("click:select",{id:u,value:o,path:S(u),event:c});const d=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:c});d&&(r.value=d),h.root.openOnSelect(u,o,c)},children:t,parents:n}};return N(D,h),h.root},Me=(e,l)=>{const t=$(D,Oe),n=Symbol(Ue()),i=f(()=>e.value??n),a={...t,id:i,open:(s,r)=>t.root.open(i.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(i.value,s,r),isOpen:f(()=>t.root.opened.value.has(i.value)),parent:f(()=>t.root.parents.value.get(i.value)),select:(s,r)=>t.root.select(i.value,s,r),isSelected:f(()=>t.root.selected.value.get(O(i.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,l),ve(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&N(D,a),a},pt=()=>{const e=$(D,Oe);N(D,{...e,isGroupActivator:!0})},St=ze({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return pt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),bt=A({activeColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,title:String,value:null,...F(),...R()},"v-list-group"),oe=x()({name:"VListGroup",props:bt(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:i,id:a}=Me(k(e,"value"),!0),s=f(()=>`v-list-group--id-${String(a.value)}`),r=Le(),{isBooted:S}=at();function g(c){i(!n.value,c)}const h=f(()=>({onClick:g,class:"v-list-group__header",id:s.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return _(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(q,{defaults:o.value},{default:()=>[v(St,null,{default:()=>[t.activator({props:h.value,isOpen:n.value})]})]}),v(nt,{transition:{component:tt},disabled:!S.value},{default:()=>{var c;return[fe(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(c=t.default)==null?void 0:c.call(t)]),[[qe,n.value]])]}})]})),{}}});const kt=he("v-list-item-subtitle"),Ct=he("v-list-item-title"),Vt=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:le(),onClickOnce:le(),...ke(),...F(),...pe(),...ye(),...Ce(),...Ve(),...rt(),...R(),...Y(),...Se({variant:"text"})},"v-list-item"),ce=x()({name:"VListItem",directives:{Ripple:lt},props:Vt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:i}=l;const a=ut(e,t),s=f(()=>e.value??a.href.value),{select:r,isSelected:S,isIndeterminate:g,isGroupActivator:h,root:u,parent:o,openOnSelect:c}=Me(s,!1),d=Le(),m=f(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||S.value)}),y=f(()=>e.link!==!1&&a.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),L=f(()=>e.rounded||e.nav),j=f(()=>({color:m.value?e.activeColor??e.color:e.color,variant:e.variant}));Ye(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&o.value!=null&&u.open(o.value,!0),p&&c(p)},{immediate:!0});const{themeClasses:E}=Z(e),{borderClasses:K}=Ie(e),{colorClasses:W,colorStyles:w,variantClasses:b}=it(j),{densityClasses:G}=be(e),{dimensionStyles:Ge}=ge(e),{elevationClasses:$e}=we(e),{roundedClasses:Ne}=Pe(L),Re=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),H=f(()=>({isActive:m.value,select:r,isSelected:S.value,isIndeterminate:g.value}));function Q(p){var M;i("click",p),!(h||!V.value)&&((M=a.navigate)==null||M.call(a,p),e.value!=null&&r(!S.value,p))}function je(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),Q(p))}return _(()=>{const p=y.value?"a":e.tag,M=!d||S.value||m.value,Ee=n.title||e.title,Ke=n.subtitle||e.subtitle,X=!!(e.appendAvatar||e.appendIcon),We=!!(X||n.append),ee=!!(e.prependAvatar||e.prependIcon),U=!!(ee||n.prepend);return d==null||d.updateHasPrepend(U),fe(v(p,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!U&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&m.value},E.value,K.value,M?W.value:void 0,G.value,$e.value,Re.value,Ne.value,b.value,e.class],style:[M?w.value:void 0,Ge.value,e.style],href:a.href.value,tabindex:V.value?0:void 0,onClick:Q,onKeydown:V.value&&!y.value&&je},{default:()=>{var te;return[st(V.value||m.value,"v-list-item"),U&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(q,{key:"prepend-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,H.value)]}}):v(ie,null,[e.prependAvatar&&v(re,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[Ee&&v(Ct,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Ke&&v(kt,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(te=n.default)==null?void 0:te.call(n,H.value)]),We&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(q,{key:"append-defaults",disabled:!X,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,H.value)]}}):v(ie,null,[e.appendIcon&&v(ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(re,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ze("ripple"),V.value&&e.ripple]])}),{}}}),It=A({color:String,inset:Boolean,sticky:Boolean,title:String,...F(),...R()},"v-list-subheader"),wt=x()({name:"VListSubheader",props:It(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:i}=de(k(e,"color"));return _(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[a&&v("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Pt=A({items:Array},"v-list-children"),Te=x()({name:"VListChildren",props:Pt(),setup(e,l){let{slots:t}=l;return Ae(),()=>{var n,i;return((n=t.default)==null?void 0:n.call(t))??((i=e.items)==null?void 0:i.map(a=>{var c,d;let{children:s,props:r,type:S,raw:g}=a;if(S==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??v(ct,r,null);if(S==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(wt,r,{default:t.subheader});const h={subtitle:t.subtitle?m=>{var y;return(y=t.subtitle)==null?void 0:y.call(t,{...m,item:g})}:void 0,prepend:t.prepend?m=>{var y;return(y=t.prepend)==null?void 0:y.call(t,{...m,item:g})}:void 0,append:t.append?m=>{var y;return(y=t.append)==null?void 0:y.call(t,{...m,item:g})}:void 0,default:t.default?m=>{var y;return(y=t.default)==null?void 0:y.call(t,{...m,item:g})}:void 0,title:t.title?m=>{var y;return(y=t.title)==null?void 0:y.call(t,{...m,item:g})}:void 0},[u,o]=oe.filterProps(r);return s?v(oe,se({value:r==null?void 0:r.value},u),{activator:m=>{let{props:y}=m;return t.header?t.header({props:{...r,...y}}):v(ce,se(r,y),h)},default:()=>v(Te,{items:s},t)}):t.item?t.item(r):v(ce,r,h)}))}}}),At=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function De(e,l){const t=I(l,e.itemTitle,l),n=e.returnObject?l:I(l,e.itemValue,t),i=I(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?me(l,["children"])[1]:l:void 0:I(l,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(i)?Fe(e,i):void 0,raw:l}}function Fe(e,l){const t=[];for(const n of l)t.push(De(e,n));return t}function Et(e){const l=f(()=>Fe(e,e.items));function t(i){return i.map(a=>l.value.find(r=>Je(a,r.value))??De(e,a))}function n(i){return i.map(a=>{let{props:s}=a;return s.value})}return{items:l,transformIn:t,transformOut:n}}function Lt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Bt(e,l){const t=I(l,e.itemType,"item"),n=Lt(l)?l:I(l,e.itemTitle),i=I(l,e.itemValue,void 0),a=I(l,e.itemChildren),s=e.itemProps===!0?me(l,["children"])[1]:I(l,e.itemProps),r={title:n,value:i,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?_e(e,a):void 0,raw:l}}function _e(e,l){const t=[];for(const n of l)t.push(Bt(e,n));return t}function xt(e){return{items:f(()=>_e(e,e.items))}}const Ot=A({activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...gt({selectStrategy:"single-leaf",openStrategy:"list"}),...ke(),...F(),...pe(),...ye(),...Ce(),itemType:{type:String,default:"type"},...At(),...Ve(),...R(),...Y(),...Se({variant:"text"})},"v-list"),Kt=x()({name:"VList",props:Ot(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=xt(e),{themeClasses:i}=Z(e),{backgroundColorClasses:a,backgroundColorStyles:s}=Qe(k(e,"bgColor")),{borderClasses:r}=Ie(e),{densityClasses:S}=be(e),{dimensionStyles:g}=ge(e),{elevationClasses:h}=we(e),{roundedClasses:u}=Pe(e),{open:o,select:c}=ht(e),d=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=k(e,"activeColor"),y=k(e,"color");Ae(),Xe({VListGroup:{activeColor:m,color:y},VListItem:{activeClass:k(e,"activeClass"),activeColor:m,color:y,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),variant:k(e,"variant")}});const V=T(!1),L=P();function j(b){V.value=!0}function E(b){V.value=!1}function K(b){var G;!V.value&&!(b.relatedTarget&&((G=L.value)!=null&&G.contains(b.relatedTarget)))&&w()}function W(b){if(L.value){if(b.key==="ArrowDown")w("next");else if(b.key==="ArrowUp")w("prev");else if(b.key==="Home")w("first");else if(b.key==="End")w("last");else return;b.preventDefault()}}function w(b){if(L.value)return et(L.value,b)}return _(()=>v(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,a.value,r.value,S.value,h.value,d.value,u.value,e.class],style:[s.value,g.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:j,onFocusout:E,onFocus:K,onKeydown:W},{default:()=>[v(Te,{items:n.value},t)]})),{open:o,select:c,focus:w}}});export{Kt as V,ce as a,At as m,De as t,Et as u};