function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./index-BpFfTGqO.js";import{d as u}from"./Dashboard-CwZ1dG1-.js";const y=u(l=>{const m=l.stac.useSTAcStore(),{mapInstance:r,currentUrl:s}=l.states;let n=null;return{id:"template-id",stacEndpoint:"https://eodash.github.io/catalog-template/template_catalog/catalog.json",routes:[],brand:{name:"Dashboard",font:{family:"Poppins"},theme:{colors:{primary:"#880808",secondary:"#AA4A44",background:"#d3d3d3",surface:"#d3d3d3"}}},template:{gap:6,background:{id:Symbol(),widget:{link:()=>p(()=>import("./eox-map-CxpaFfLZ.js"),__vite__mapDeps([])),properties:{class:"fill-height fill-width overflow-none",center:[15,48],layers:[{type:"Tile",source:{type:"OSM"}}]},tagName:"eox-map",onMounted(o,e,t){o.zoom=t.currentRoute.value.query.z,r.value=o.map,r.value?.on("moveend",n=i=>{t.push({query:{z:`${i.map.getView().getZoom()}`}})})},onUnmounted(o,e,t){r.value?.un("moveend",n)}},type:"web-component"},widgets:[{id:Symbol(),title:"Tools",layout:{x:0,y:0,w:3,h:12},widget:{link:"https://cdn.skypack.dev/@eox/itemfilter",properties:{config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect",featured:!0}],aggregateResults:"themes",enableHighlighting:!0,onSelect:async o=>{await m.loadSelectedSTAC(o.href)}}},onMounted:async function(o,e,t){o.apply(e?.stac)},tagName:"eox-itemfilter"},type:"web-component"},{layout:{x:9,y:0,w:3,h:12},defineWidget:o=>{const e=o?.links.find(t=>t.rel=="wms")??!1;return e?{id:`${e["wms:layers"][0]} Map`,title:"Map",type:"web-component",widget:{link:"https://cdn.skypack.dev/@eox/map",properties:{class:"fill-height fill-width",center:[15,48],layers:[{type:"Tile",source:{type:"TileWMS",url:e.href,params:{LAYERS:e["wms:layers"],TILED:!0},ratio:1,serverType:"geoserver"}}]},tagName:"eox-map",onMounted(t,i,a){t.zoom=a.currentRoute.value.query.z,r.value=t.map,r.value?.on("moveend",n=d=>{a.push({query:{z:`${d.map.getView().getZoom()}`}})})},onUnmounted(t,i,a){r.value?.un("moveend",n)}}}:{id:"Information",title:"Information",type:"web-component",widget:{link:"@eox/stacinfo",tagName:"eox-stacinfo",properties:{for:s,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}}}},{id:Symbol(),title:"Container",type:"internal",layout:{x:4,y:8,w:4,h:3},widget:{name:"WidgetsContainer",props:{widgets:[{id:Symbol(),title:"Information",type:"web-component",widget:{link:()=>p(()=>import("./eox-stacinfo-DQG2MPAj.js"),__vite__mapDeps([])),tagName:"eox-stacinfo",properties:{for:s,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}},{defineWidget:o=>{const e=o?.assets?.legend?.href??!1;return e?{id:e,title:"Legend",type:"web-component",widget:{link:"https://unpkg.com/progressive-image-element@latest/dist/index.js",tagName:"progressive-image",properties:{src:e},onMounted(t){const i=document.createElement("img");i.src=e,t.appendChild(i)}}}:{id:"reset-zoom",title:"Reset Zoom",type:"web-component",widget:{link:new URL("/config-template/pr-preview/pr-6/reset-zoom-btn/ResetZoom.S2AXqNgZ.js",import.meta.url).href,tagName:"reset-zoom-btn",properties:{map:r,to:6}}}}}]}}}]}}});export{y as default};
