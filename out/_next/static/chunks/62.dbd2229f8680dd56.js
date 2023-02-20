"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{8513:function(e,t,n){var a=n(5893),i=n(4393),r=n(2675),o=n(5152),l=n.n(o),s=n(7294);const c=l()((()=>n.e(6709).then(n.bind(n,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:o,children:l}=e;const{processes:{[t]:{url:u=""}={}}}=(0,r.z)(),d=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),b=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)(c,{}),(0,a.jsx)(o,{ref:d,style:b,...(0,i.Z)({id:t}),children:l})]})}},62:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(5893),i=n(8513),r=n(4141).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
  height: 100%;
  width: 100%;

  &.drop {
    &::before {
      color: #ffad33;
      content: "Drop SWF/SPL file here";
      display: flex;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      left: 0;
      place-content: center;
      place-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`,o=n(4899),l=n(5620),s=n(2675),c=n(1864),u=n(7294),d=n(9595),f=(e,t,n,a)=>{const{processes:{[e]:{libs:i=[]}={}}={}}=(0,s.z)(),[r,f]=(0,u.useState)(),{appendFileToTitle:p}=(0,o.Z)(e),{readFile:b}=(0,l.o)(),h=(0,u.useCallback)((async()=>{n.current?.classList.remove("drop"),await(r?.load({data:await b(t)})),p((0,c.basename)(t,(0,c.extname)(t)))}),[p,n,r,b,t]);(0,u.useEffect)((()=>{(0,d.mb)(i).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:!0,backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1},f(window.RufflePlayer.newest().createPlayer()),t||n.current?.classList.add("drop"))}))}),[n,i,t]),(0,u.useEffect)((()=>(n.current&&r&&(n.current.append(r),a(!1)),()=>r?.remove())),[n,r,a]),(0,u.useEffect)((()=>{n.current&&r&&t&&h()}),[n,h,r,t])},p=e=>{let{id:t}=e;return(0,a.jsx)(i.Z,{StyledComponent:r,id:t,useHook:f})}},4393:function(e,t,n){var a=n(6166),i=n(80),r=n(6050),o=n(5620),l=n(2675),s=n(6819),c=n(1864),u=n(7294),d=n(8680),f=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:b,onDragOver:h,updatePositions:m}=e;const{url:w}=(0,l.z)(),{iconPositions:y,sortOrders:v,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:$,updateFolder:k,writeFile:x}=(0,o.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(d.Ll,e);await $(d.Ll),await x(a,t,!0)&&(n===r.v.UPDATE_URL&&w(p,a),k(d.Ll,e))}else n===r.v.UPDATE_URL&&w(p,e)}),[p,$,k,w,x]),{openTransferDialog:C}=(0,a.Z)();return{onDragLeave:b,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,i.p4)(e);if(0===t.length&&""===a)return;const r={x:e.clientX,y:e.clientY};let o=[];if(a){try{o=JSON.parse(a)}catch{}const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!y[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(y[a]);return(0,c.basename)(a)})),(0,f.vi)(n,e.target,y,v,r,o,g)}(0,i.WG)(e,t||L,n,C,Boolean(p))}}}},4899:function(e,t,n){var a=n(2675),i=n(3989),r=n(7294),o=n(8680);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(o.CC),{title:l}=i.Z[n]||{};return{appendFileToTitle:(0,r.useCallback)(((n,a)=>{const i=n?` - ${n}${a?` ${o.xy}`:""}`:"";t(e,`${l}${i}`)}),[e,l,t]),prependFileToTitle:(0,r.useCallback)(((n,a)=>{const i=n?`${a?`${o.xy} `:""}${n} - `:"";t(e,`${i}${l}`)}),[e,l,t])}}}}]);