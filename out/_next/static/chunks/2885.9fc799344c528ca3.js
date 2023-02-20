"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{8513:function(e,t,n){var r=n(5893),o=n(4393),i=n(2675),a=n(5152),l=n.n(a),c=n(7294);const s=l()((()=>n.e(6709).then(n.bind(n,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:a,children:l}=e;const{processes:{[t]:{url:b=""}={}}}=(0,i.z)(),u=(0,c.useRef)(null),[d,g]=(0,c.useState)(!0),A=(0,c.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return n(t,b,u,g,d),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(s,{}),(0,r.jsx)(a,{ref:u,style:A,...(0,o.Z)({id:t}),children:l})]})}},2885:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(8513),i=n(4141),a=n(7489),l=n(8680),c=i.ZP.div.withConfig({componentId:"sc-96c8037f-0"})`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,a.Z)(l.BQ)};

    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`,s=n(3989);const{height:b=0,width:u=0}=s.Z.BoxedWine.defaultSize||{},d={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${u}x${b}`,root:"/fullWine1.7.55-v8"},g=e=>[...Object.entries(d),...Object.entries(e)].map((e=>{let[t,n]=e;return`${t}=${n}`})).join("&");var A=n(4899),p=n(5620),m=n(2675),k=n(1864),h=n(7294),w=n(9595),f=n(8764).Buffer,v=(e,t,r,o)=>{const{appendFileToTitle:i}=(0,A.Z)(e),{processes:{[e]:{libs:a=[]}={}}={}}=(0,m.z)(),{readFile:l}=(0,p.o)(),c=(0,h.useRef)(),s=(0,h.useRef)(),b=(0,h.useCallback)((async()=>{let e={},c=t?await l(t):f.from("");const b=(0,k.extname)(t).toLowerCase(),u=".exe"===b,{zipAsync:d}=await n.e(54).then(n.bind(n,54)),A=u||!t?(0,k.basename)(t,b):await(async e=>{const{unzip:t}=await n.e(54).then(n.bind(n,54)),r=Object.entries(await t(e)),[[o]=[]]=r.filter((e=>{let[t]=e;return t.toLowerCase().endsWith(".exe")})).sort(((e,t)=>{let[,n]=e,[,r]=t;return r.length-n.length}));return o})(c);u&&(c=f.from(await d({[(0,k.basename)(t)]:c}))),e={...c?{"app-payload":c.toString("base64")}:{},...A?{p:A}:{}},s.current||(r.current?.prepend(document.createElement("ol")),s.current=window.setInterval((()=>{(0,w.H5)(r.current?.querySelector("canvas"))&&(clearInterval(s.current),s.current=void 0,r.current?.querySelector("ol")?.remove())}),100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:e=>{const t=r.current?.querySelector("ol");if(t){const n=document.createElement("li");n.textContent=e,t.append(n),t.scrollTop=t.scrollHeight,setTimeout((()=>t.scrollTo(0,t.scrollHeight)),10)}},urlParams:g(e)},(0,w.mb)(a).then((()=>{t&&i(A||(0,k.basename)(t));try{window.BoxedWineShell((()=>o(!1)))}catch{}}))}),[i,r,a,l,o,t]);(0,h.useEffect)((()=>(c.current!==t&&(c.current=t,b()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}})),[b,t])},x=e=>{let{id:t}=e;return(0,r.jsx)(o.Z,{StyledComponent:c,id:t,useHook:v,children:(0,r.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:w.nK})})}},4393:function(e,t,n){var r=n(6166),o=n(80),i=n(6050),a=n(5620),l=n(2675),c=n(6819),s=n(1864),b=n(7294),u=n(8680),d=n(9595);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:g,onDragLeave:A,onDragOver:p,updatePositions:m}=e;const{url:k}=(0,l.z)(),{iconPositions:h,sortOrders:w,setIconPositions:f}=(0,c.k)(),{mkdirRecursive:v,updateFolder:x,writeFile:$}=(0,a.o)(),C=(0,b.useCallback)((async(e,t,n)=>{if(g)if(t){const r=(0,s.join)(u.Ll,e);await v(u.Ll),await $(r,t,!0)&&(n===i.v.UPDATE_URL&&k(g,r),x(u.Ll,e))}else n===i.v.UPDATE_URL&&k(g,e)}),[g,v,x,k,$]),{openTransferDialog:y}=(0,r.Z)();return{onDragLeave:A,onDragOver:e=>{p?.(e),(0,d.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,o.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,s.basename)(e)===(0,s.relative)(n,e))return;a=a.map((e=>(0,s.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!h[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,s.basename)(e,(0,s.extname)(e))} (${t})${(0,s.extname)(e)}`}while(h[r]);return(0,s.basename)(r)})),(0,d.vi)(n,e.target,h,w,i,a,f)}(0,o.WG)(e,t||C,n,y,Boolean(g))}}}},4899:function(e,t,n){var r=n(2675),o=n(3989),i=n(7294),a=n(8680);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:l}=o.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,r)=>{const o=n?` - ${n}${r?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((n,r)=>{const o=n?`${r?`${a.xy} `:""}${n} - `:"";t(e,`${o}${l}`)}),[e,l,t])}}},7489:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4141);const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC";var c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r.iv`
  overflow: auto;
  scrollbar-color: rgb(77, 77, 77) rgb(23, 23, 23);
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: rgb(23, 23, 23);
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgb(77, 77, 77);
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: rgb(77, 77, 77);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(122, 122, 122);
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: rgb(166, 166, 166);
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: rgb(23, 23, 23);
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid rgb(23, 23, 23);
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: rgb(55, 55, 55);
    }

    &:active {
      background-color: rgb(166, 166, 166);
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: color-burn;
  }
`}}}]);