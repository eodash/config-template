function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/user_config-DQULFMLv.js","assets/index-BpFfTGqO.js","assets/index-B18NEfSV.css","assets/MobileLayout-g5JXIRCP.js","assets/VMain-D5TpJ_bl.js","assets/ssrBoot-BBx1_9Vq.js","assets/color-fO5Aq4Nt.js","assets/ssrBoot-BdorctIc.css","assets/VMain-Byt37V4c.css","assets/MobileLayout-WyEXb2ji.css","assets/DashboardLayout-DYJtOk2t.js","assets/DashboardLayout-BFl1iksG.css","assets/Header-LgP3PixQ.js","assets/Header-CvxgFWiI.css","assets/Footer-P94lqQ5-.js","assets/Footer-CfszXuCo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as g,e as y,_ as s,s as v,w as c,u as E,a as C,b as T,d as _,c as D,o as A,f as w,g as O,h as i,j as n,n as R,F as L,l as P,k as V}from"./index-BpFfTGqO.js";const I=async()=>{const o=g(y),e=t=>{Object.keys(o).forEach(a=>{o[a]=t[a]})};try{e((await s(()=>import(new URL("/config-template/pr-preview/pr-6/config.js",import.meta.url).href),__vite__mapDeps([]))).default)}catch{try{e((await s(()=>import("./user_config-DQULFMLv.js"),__vite__mapDeps([0,1,2]))).default)}catch{console.error("no dashboard configuration assigned")}}return o},U=o=>o(v),j=(o,e)=>{const t=o.__vccOpts||o;for(const[a,r]of e)t[a]=r;return t},x={__name:"Dashboard",async setup(o){let e,t;V(b=>({"127c4b03":n(l)}));const a=([e,t]=c(()=>I()),e=await e,t(),e),r=E("dashboardTheme",a.brand?.theme);r.global.name.value="dashboardTheme";const l=([e,t]=c(()=>P(a.brand?.font?.family,a.brand?.font?.link)),e=await e,t(),e),{loadSTAC:m}=C();[e,t]=c(()=>m()),await e,t();const{smAndDown:u}=T(),p=u.value?_(()=>s(()=>import("./MobileLayout-g5JXIRCP.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9]))):_(()=>s(()=>import("./DashboardLayout-DYJtOk2t.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,11]))),f=_(()=>s(()=>import("./Header-LgP3PixQ.js"),__vite__mapDeps([12,1,2,6,5,7,13]))),h=_(()=>s(()=>import("./Footer-P94lqQ5-.js"),__vite__mapDeps([14,1,2,6,15]))),{mainRect:d}=D();return A(()=>{r.global.name.value="light"}),(b,k)=>(w(),O(L,null,[i(n(f)),i(n(p),{style:R(`height: calc(100dvh - ${n(d).top+n(d).bottom}px)`)},null,8,["style"]),i(n(h))],64))}},S=j(x,[["__scopeId","data-v-3c83a0bb"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{z as D,j as _,U as d};
