import{i as f,e as w,y as x,M as k,f as r,z as d,A as p,G as h,j as t,B as g,C as v,D as C,g as m,F as A,E,h as y,n as B,K as L}from"./index-2OdGfP9p.js";import{u as b,V}from"./VMain-DUwGcxvW.js";import{_ as $}from"./Dashboard-cDZnrMSn.js";import{V as M,a as D}from"./ssrBoot-BXp6IuWr.js";import"./color-Ct-VnWCB.js";class I extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(o,a,e){a!==e&&(this[o]=e),this.render()}}class z extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(o,a,e){a!==e&&(this[o]=e),this.render()}}customElements.define("eox-layout",I);customElements.define("eox-layout-item",z);const H=["gap"],P={class:"bg-widget",x:"0",y:"0",h:"12",w:"12"},S=["x","y","h","w"],T={__name:"DashboardLayout",setup(u){const o=f(w),[a]=b([o.template?.background]),e=o.template?.widgets,l=b(e),c=x([]),{slideBtns:n,slideInOut:_}=k(c,e);return(R,W)=>(r(),d(V,null,{default:p(()=>[h("eox-layout",{gap:t(o).template.gap??2},[h("eox-layout-item",P,[(r(),d(g(t(a).component),v(C(t(a).props)),null,16))]),(r(!0),m(A,null,E(t(e),(i,s)=>(r(),m("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:c,key:s,class:"custom-widget",x:i.layout.x,y:i.layout.y,h:i.layout.h,w:i.layout.w},[y(M,{position:"absolute",variant:"tonal",style:B(t(n)[s].style),class:"slide-btn",onClick:j=>t(_)(s)},{default:p(()=>[y(D,{icon:t(n)[s].active?t(n)[s].icon.in:t(n)[s].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"]),(r(),d(g(t(l)[s].value.component),L({key:t(l)[s].value.id},t(l)[s].value.props),null,16))],8,S))),128))],8,H)]),_:1}))}},q=$(T,[["__scopeId","data-v-66a736e2"]]);export{q as default};
