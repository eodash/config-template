import{_ as y,x as b,W as x,X as d,$ as t,a0 as r,a1 as l,a9 as _,a3 as n,a6 as u,a2 as p,a4 as c,d as h,a5 as g,F as f,a7 as v,ab as w}from"./index-DBoWNDl8.js";import{V as k}from"./VMain-XnWXrEcc.js";import"./ssrBoot-CqR98f8O.js";class A extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",A);customElements.define("eox-layout-item",C);const L=["gap"],$={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},E=["h","w","x","y"],M={__name:"DashboardLayout",setup(i){const a=b(x),[s]=d([a.template?.background]),o=d(a.template?.widgets);return(T,B)=>(t(),r(k,null,{default:l(()=>[_("eox-layout",{gap:n(a).template.gap??2},[n(s).component?(t(),u("eox-layout-item",$,[(t(),r(p,{suspensible:""},{default:l(()=>[(t(),r(c(n(s).component),h({id:"bg-widget"},n(s).props),null,16))]),_:1}))])):g("v-if",!0),(t(!0),u(f,null,v(n(o),(e,m)=>(t(),r(w,{key:m,name:"fade"},{default:l(()=>[e.value.component?(t(),u("eox-layout-item",{key:e.value.id,class:"panel",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(t(),r(p,{suspensible:""},{default:l(()=>[(t(),r(c(e.value.component),h({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,E)):g("v-if",!0)]),_:2},1024))),128))],8,L)]),_:1}))}},I=y(M,[["__scopeId","data-v-d836e339"]]);export{I as default};