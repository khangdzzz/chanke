import{P as o,r as s,Q as i}from"./entry.75e5da12.js";const f=o("maintain",()=>{const e=s(!1),t=s(!1),c=s();return{isSuccess:e,isFail:t,maintain:c,create:async n=>{const a=await i.chanle.post("maintain/create",{json:n}).json().catch(()=>null);e.value=(a==null?void 0:a.success)??!1,t.value=!e.value},getCalenderMaintain:async()=>{var a;const n=await((a=i.chanle)==null?void 0:a.get("maintain").json().catch(()=>null));n&&n.success&&(c.value=n.data[0])}}});export{f as u};
