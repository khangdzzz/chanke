import{P as j,r as c,Q as t}from"./entry.75e5da12.js";const C=j("game",()=>{const u=c([]),i=c([]),h=c(""),w=c("Chẵn Lẻ"),m=c([]),g=c([]),l=c(!1),o=c(""),G=async e=>{const a=await t.chanle.get(`game/getReward?gameType=${e}`).json().catch(()=>null);a!=null&&a.success&&(u.value=a.data)},d=async e=>{const a=e?`?status=${e}`:"",s=await t.chanle.get(`game/getGameDetail${a}`).json().catch(()=>null);s!=null&&s.success&&(g.value=s.data)},p=async e=>{const a=await t.chanle.get(`game/checkContentExits?content=${e}`).json().catch(()=>null);a!=null&&a.success?l.value=!0:l.value=!1},y=async e=>{const a=await t.chanle.post("game/createReward",{json:e}).json().catch(()=>null);a!=null&&a.success&&await n()},f=async e=>{const a=await t.chanle.post("game/createGame",{json:e}).json().catch(()=>null);a!=null&&a.success?o.value="success":o.value="fail"},n=async()=>{const e=await t.chanle.get("game/getAllGame").json().catch(()=>null);e!=null&&e.success&&(i.value=e.data)};return{reward:u,gameType:h,listGames:i,gameName:w,resultTypeList:m,isExitContentInDB:l,statusCreateNewGame:o,listGamesDetail:g,getReward:G,getAllGames:n,updateGame:async(e,a)=>{const s=await t.chanle.put(`game/updateGame/${e}`,{json:a}).json().catch(()=>null);s!=null&&s.success&&await n()},deleteGame:async e=>{const a=await t.chanle.delete(`game/deleteGame/${e}`).json().catch(()=>null);a!=null&&a.success&&await n()},createNewGame:y,getAllResultType:async()=>{const e=await t.chanle.get("game/getResultType").json().catch(()=>null);e!=null&&e.success&&(m.value=e.data)},checkContentExit:p,createNewGameDetail:f,getListGameDetail:d,updateStatusGame:async(e,a)=>{await t.chanle.put(`game/updateStatusGame/${e}`,{json:a}).json().catch(()=>null)}}});export{C as u};
