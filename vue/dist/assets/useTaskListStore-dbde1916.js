import{cF as l,r as s,m as c,aF as r,cG as i}from"./index-b92d12d2.js";const p=l("useTaskListStore",()=>{const t=s(new Map),a=c(new r),n=s(3),u=s([]),o=s(-1),e=s(null);return{checkBaiduyunInstalled:async()=>(e.value===null&&(e.value=i()),e.value),baiduyunInstalled:e,pollInterval:n,taskLogMap:t,queue:a,tasks:u,showDirAutoCompletedIdx:o}},{persist:{paths:["pollInterval","tasks"],key:"useTaskListStore-v0.0.1"}});export{p as u};
