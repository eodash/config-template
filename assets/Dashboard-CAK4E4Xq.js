function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/user_config-BZ6DvQVv.js","assets/index-DninsxL-.js","assets/index-CAaeCq6Y.css","assets/MobileLayout-CVAsluHi.js","assets/VMain-DHZXgrpt.js","assets/ssrBoot-D1zDvvwJ.js","assets/color-B4RIgATd.js","assets/ssrBoot-BdorctIc.css","assets/VMain-Byt37V4c.css","assets/MobileLayout-CWDT8WHd.css","assets/DashboardLayout-BR4ZWaSz.js","assets/DashboardLayout-BR7HmSpJ.css","assets/Header-DhRWxONz.js","assets/Header-C0TiFeWz.css","assets/Footer-DBJ8nzWN.js","assets/Footer-Ddn0mDFz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as b,e as E,_ as n,s as v,w as _,u as g,a as T,b as D,d as c,c as w,o as A,f as O,g as R,h as d,j as s,n as C,F as I,l as L,k as P}from"./index-DninsxL-.js";const V=async()=>{const a=b(E),t=e=>{Object.keys(a).forEach(o=>{a[o]=e[o]})};try{t((await n(()=>import(new URL("/config.js",import.meta.url).href),__vite__mapDeps([]))).default)}catch{try{t(await n(()=>import("./user_config-BZ6DvQVv.js"),__vite__mapDeps([0,1,2])).then(async e=>await e.default))}catch{console.error("no dashboard configuration defined")}}return a},U=async a=>await a(v),j=(a,t)=>{const e=a.__vccOpts||a;for(const[o,r]of t)e[o]=r;return e},x={__name:"Dashboard",async setup(a){let t,e;P(y=>({87700322:s(l)}));const o=([t,e]=_(()=>V()),t=await t,e(),t),r=g("dashboardTheme",o.brand?.theme);r.global.name.value="dashboardTheme";const l=([t,e]=_(()=>L(o.brand?.font?.family,o.brand?.font?.link)),t=await t,e(),t),{loadSTAC:m}=T();[t,e]=_(()=>m()),await t,e();const{smAndDown:u}=D(),h=u.value?c(()=>n(()=>import("./MobileLayout-CVAsluHi.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9]))):c(()=>n(()=>import("./DashboardLayout-BR4ZWaSz.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,11]))),p=c(()=>n(()=>import("./Header-DhRWxONz.js"),__vite__mapDeps([12,1,2,6,5,7,13]))),f=c(()=>n(()=>import("./Footer-DBJ8nzWN.js"),__vite__mapDeps([14,1,2,6,15]))),{mainRect:i}=w();return A(()=>{r.global.name.value="light"}),(y,k)=>(O(),R(I,null,[d(s(p)),d(s(h),{style:C(`height: calc(100dvh - ${s(i).top+s(i).bottom}px)`)},null,8,["style"]),d(s(f))],64))}},S=j(x,[["__scopeId","data-v-40d6e838"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{z as D,j as _,U as c};
