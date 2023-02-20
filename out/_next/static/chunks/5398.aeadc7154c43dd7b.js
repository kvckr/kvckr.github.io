"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5398],{8513:function(e,n,t){var r=t(5893),i=t(4393),o=t(2675),a=t(5152),s=t.n(a),d=t(7294);const l=s()((()=>t.e(6709).then(t.bind(t,6709))),{loadableGenerated:{webpack:()=>[6709]}});n.Z=e=>{let{id:n,useHook:t,StyledComponent:a,children:s}=e;const{processes:{[n]:{url:c=""}={}}}=(0,o.z)(),u=(0,d.useRef)(null),[w,f]=(0,d.useState)(!0),m=(0,d.useMemo)((()=>({contain:"strict",visibility:w?"hidden":"visible"})),[w]);return t(n,c,u,f,w),(0,r.jsxs)(r.Fragment,{children:[w&&(0,r.jsx)(l,{}),(0,r.jsx)(a,{ref:u,style:m,...(0,i.Z)({id:n}),children:s})]})}},5398:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),i=t(8513),o=t(4141).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
  .eruda-container {
    position: relative !important;
    z-index: 1 !important;

    .eruda-dev-tools {
      height: 100% !important;
      opacity: 100% !important;

      .eruda-nav-bar-container {
        .eruda-nav-bar {
          overflow: hidden;
        }
      }
    }

    .eruda-entry-btn {
      display: none;
    }
  }
`,a=t(2675),s=t(7294),d=t(9595);const l={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var c=(e,n,t,r,i)=>{const{processes:{[e]:{closing:o=!1,libs:c=[]}={}}={}}=(0,a.z)();(0,s.useEffect)((()=>{(0,d.mb)(c).then((()=>{if(window.eruda&&t.current){const e=t.current.querySelector("div"),n=(0,d.E9)();e&&(window.eruda.init({...l,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),n<395&&window.eruda.remove("resources"),n<321&&window.eruda.remove("sources"),window.eruda.show(),r(!1))}}))}),[t,c,r]),(0,s.useEffect)((()=>(window.eruda&&n&&!i&&!o&&window.eruda.show(n),()=>{o&&window.eruda?.destroy()})),[o,i,n])},u=e=>{let{id:n}=e;return(0,r.jsx)(i.Z,{StyledComponent:o,id:n,useHook:c,children:(0,r.jsx)("div",{})})}},4393:function(e,n,t){var r=t(6166),i=t(80),o=t(6050),a=t(5620),s=t(2675),d=t(6819),l=t(1864),c=t(7294),u=t(8680),w=t(9595);n.Z=e=>{let{callback:n,directory:t=u.Ll,id:f,onDragLeave:m,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,s.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,d.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:L}=(0,a.o)(),D=(0,c.useCallback)((async(e,n,t)=>{if(f)if(n){const r=(0,l.join)(u.Ll,e);await k(u.Ll),await L(r,n,!0)&&(t===o.v.UPDATE_URL&&h(f,r),x(u.Ll,e))}else t===o.v.UPDATE_URL&&h(f,e)}),[f,k,x,h,L]),{openTransferDialog:E}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{p?.(e),(0,w.nK)(e)},onDrop:e=>{if(v&&e.target instanceof HTMLElement){const{files:n,text:r}=(0,i.p4)(e);if(0===n.length&&""===r)return;const o={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}const[e]=a;if(!e)return;if(e.startsWith(t)&&(0,l.basename)(e)===(0,l.relative)(t,e))return;a=a.map((e=>(0,l.basename)(e)))}else a=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,l.basename)(e,(0,l.extname)(e))} (${n})${(0,l.extname)(e)}`}while(b[r]);return(0,l.basename)(r)})),(0,w.vi)(t,e.target,b,y,o,a,g)}(0,i.WG)(e,n||D,t,E,Boolean(f))}}}}}]);