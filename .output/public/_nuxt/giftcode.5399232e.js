import{P as n,r as o,Q as c}from"./entry.75e5da12.js";const g=n("giftcode",()=>{const a=o(!1),l=o([]),i=o([]);return{listGiftCodes:l,listLogsGiftCodes:i,statusCreateGiftCode:a,createGiftCode:async s=>{const e=await c.chanle.post("giftcode/create",{json:s}).json().catch(()=>null);e&&e.success?a.value=!0:a.value=!1},getAllGiftCode:async(s="all")=>{var t;const e=await((t=c.chanle)==null?void 0:t.get("giftcode?type="+s).json().catch(()=>null));e&&e.success&&(l.value=e.data)},getAllLogsGiftCode:async(s="all")=>{var t;const e=await((t=c.chanle)==null?void 0:t.get("giftcode/logs").json().catch(()=>null));e&&e.success&&(i.value=e.data)}}});export{g as u};
