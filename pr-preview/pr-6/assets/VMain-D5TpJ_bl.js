function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsContainer-Cc-Q-1mv.js","assets/index-BpFfTGqO.js","assets/index-B18NEfSV.css","assets/ssrBoot-BBx1_9Vq.js","assets/color-fO5Aq4Nt.js","assets/ssrBoot-BdorctIc.css","assets/DynamicWebComponent-DxY5Dk6j.js","assets/IframeWrapper-Cy5Qd7db.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{N as m,O as p,a as _,P as f,Q as a,d as i,_ as r,q as g,r as v,t as b,c as y,R as w,h as d}from"./index-BpFfTGqO.js";import{u as W}from"./ssrBoot-BBx1_9Vq.js";import{m as V}from"./color-fO5Aq4Nt.js";const P=Object.assign({"/widgets/WidgetsContainer.vue":()=>r(()=>import("./WidgetsContainer-Cc-Q-1mv.js"),__vite__mapDeps([0,1,2,3,4,5]))}),T=e=>{const t=[];for(const o of e??[]){const s=m({component:null,props:{},title:"",id:Symbol(),no:"4"});if("defineWidget"in(o??{})){const{selectedStac:n}=p(_());f(n,u=>{const l=a(o?.defineWidget(u));s.value=s.value.id===l.id?s.value:c(l)},{immediate:!0})}else s.value=c(o);t.push(s)}return t},c=e=>{const t={component:null,props:{},title:"",id:Symbol()};switch(e?.type){case"internal":t.component=i({loader:P[`/widgets/${e?.widget.name}.vue`],suspensible:!0}),t.props=a(e?.widget.props??{});break;case"web-component":t.component=i({loader:()=>r(()=>import("./DynamicWebComponent-DxY5Dk6j.js"),__vite__mapDeps([6,1,2])),suspensible:!0}),t.props=a(e.widget);break;case"iframe":t.component=i({loader:()=>r(()=>import("./IframeWrapper-Cy5Qd7db.js"),__vite__mapDeps([7,1,2])),suspensible:!0}),t.props=a(e.widget);break;default:console.error("Widget type not found");break}return t.title=e?.title??"",t.id=e?.id??t.id,t},S=g({scrollable:Boolean,...v(),...V({tag:"main"})},"VMain"),h=b()({name:"VMain",props:S(),setup(e,t){let{slots:o}=t;const{mainStyles:s}=y(),{ssrBootStyles:n}=W();return w(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,n.value,e.style]},{default:()=>[e.scrollable?d("div",{class:"v-main__scroller"},[o.default?.()]):o.default?.()]})),{}}});export{h as V,T as u};
