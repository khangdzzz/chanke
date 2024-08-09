import{_ as D}from"./confirm-payment-intro.1e1af088.js";import{u as M}from"./transaction.d91f5d8f.js";import{u as B}from"./app.91f587ac.js";/* empty css             */import{V as E}from"./VSnackbar.2a38b56e.js";import{V as F}from"./VBtn.e95b6ffc.js";import{y as K,r as a,z as L,a as x,o as l,A as r,B as e,F as T,M as b,u as s,t as _,C as w,D as O,E as n,x as g,I as U}from"./entry.75e5da12.js";import"./VDialog.eedd4603.js";import"./VAvatar.727a47c0.js";import"./rounded.42519ff8.js";import"./VImg.1fb1b266.js";import"./index.fcb5bc87.js";import"./transition.20c87304.js";import"./dimensions.828db36b.js";import"./VIcon.54c6b0c4.js";import"./router.bbe94cc5.js";import"./VOverlay.8d6a580d.js";import"./dialog-transition.a9096680.js";const z={class:"container-player"},A={class:"table-manager"},G={class:"table"},R={class:"header"},$={class:"row"},j={class:"body"},q={class:"cell"},H={class:"cell"},J={class:"cell"},Q={class:"cell"},W={class:"cell"},X={class:"cell"},Y={class:"cell"},Z={class:"cell"},tt=K({__name:"index",setup(et){const C=a([{id:1,text:"NickName",width:"15%"},{id:2,text:"Tên Tài Khoản",width:"15%"},{id:3,text:"Số Tài Khoản",width:"15%"},{id:4,text:"Tổng Tiền Cược",width:"15%"},{id:5,text:"Tổng Tiền Thắng",width:"15%"},{id:6,text:"Tổng Tiền Thua",width:"15%"},{id:7,text:"Tiền Giới Thiệu",width:"15%"},{id:68,text:"Payment",width:"10%"}]);a(new Date),L(async()=>{await c.getCtvInfor()});const d=a(!1),u=a(""),i=a(!1),c=M(),I=async()=>{await c.getCtvInfor()},m=o=>o?Number(o).toLocaleString():0,N=x(()=>c.ctvData),h=a(""),p=a(""),y=a(0),f=B(),P=o=>{o.totalMoneyIntroNotPaymnent>2e4?(p.value=o.accountName,f.isOpenConfirmPaymentIntro=!0,h.value=o._id,y.value=o.totalMoneyIntroNotPaymnent):(i.value=!0,d.value=!1,u.value="Số tiền Thanh toán cần phải lớn hơn 20000")},S=x(()=>c.isPaymentIntro),k=async()=>{f.isOpenConfirmPaymentIntro=!1,await c.paymentIntro(h.value),S?(i.value=!0,d.value=!0,u.value="Đã Thực thiện thanh toán",await I()):(i.value=!0,d.value=!1,u.value="Thực thiện thanh toán thất bại")};return(o,v)=>{const V=D;return l(),r("div",z,[e("div",A,[e("table",G,[e("thead",R,[e("tr",$,[(l(!0),r(T,null,b(s(C),t=>(l(),r("th",{key:t.id,class:"head"},n(t.text),1))),128))])]),e("tbody",j,[(l(!0),r(T,null,b(s(N),t=>(l(),r("tr",{key:t._id,class:"row"},[e("td",q,n(t._id),1),e("td",H,n(t.accountName),1),e("td",J,n(t.accountNumber),1),e("td",Q,n(m(t.amountSum)),1),e("td",W,n(m(t.bonusSum)),1),e("td",X,n(m(t.bonusSum-t.amountSum)),1),e("td",Y,n(m(t.totalMoneyIntroNotPaymnent)),1),e("td",Z,[_(F,{class:"payment",variant:"outlined",disabled:!t.totalMoneyIntroNotPaymnent,onClick:nt=>P(t)},{default:w(()=>[g(" Payment ")]),_:2},1032,["disabled","onClick"])])]))),128))])])]),_(E,{modelValue:s(i),"onUpdate:modelValue":v[0]||(v[0]=t=>O(i)?i.value=t:null),timeout:1e3,rounded:"pill",location:"top",color:s(d)?"success":"red",elevation:"24",transition:"fade-transition"},{default:w(()=>[g(n(s(u)),1)]),_:1},8,["modelValue","color"]),_(V,{"user-name":s(p),content:s(y),onPayment:k},null,8,["user-name","content"])])}}});const bt=U(tt,[["__scopeId","data-v-0d143ec0"]]);export{bt as default};
