"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8749,6709],{8749:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(5893),i=n(4141).ZP.div.withConfig({componentId:"sc-34e85a2d-0"})`
  iframe {
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`,o=n(6709),r=n(4393),s=n(4899),l=n(5620),c=n(2675),f=n(6819),d=n(1864),u=n(7294),p=n(8680),m=n(8764).Buffer,w=e=>{let{id:t}=e;const{closeWithTransition:n,processes:{[t]:{libs:[w=""]=[],url:g=""}={}}={}}=(0,c.z)(),{createPath:h,exists:y,readFile:b,updateFolder:v,writeFile:k}=(0,l.o)(),{foregroundId:x,setForegroundId:$,setWallpaper:F}=(0,f.k)(),L=(0,u.useRef)(null),[D,T]=(0,u.useState)(!1),[E,_]=(0,u.useState)(),{prependFileToTitle:C}=(0,s.Z)(t),B=(0,u.useCallback)((e=>t=>{const n=(0,d.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await k(n,m.from(await(t?.arrayBuffer())),!0),F(n,e)}))}),[F,k]),{onDragOver:W,onDrop:H}=(0,r.Z)({id:t}),P=(0,u.useMemo)((()=>({opacity:D?1:0})),[D]);return(0,u.useEffect)((()=>{C("Untitled")}),[C]),(0,u.useEffect)((()=>{x!==t&&L.current?.contentWindow?.addEventListener("click",(()=>$(t)),p.K7)}),[x,t,$]),(0,u.useEffect)((()=>{const{contentWindow:e}=L.current||{};if(D&&e&&!E){const a=e,i=a.systemHooks.showOpenFileDialog,o=a.file_new;_(a),a.file_new=()=>{C("Untitled"),o()},a.systemHooks.setWallpaperTiled=B("tile"),a.systemHooks.setWallpaperCentered=B("center"),a.systemHooks.showOpenFileDialog=async e=>{const{file:t}=await i(e);return C(t.name),{file:t}},a.close=()=>n(t),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async e=>{let{defaultFileName:t,getBlob:n}=e;return v(p.Ll,await h(`${t}.png`,p.Ll,m.from(await(await n("image/png")).arrayBuffer())))},a.systemHooks.writeBlobToHandle=async(e,t)=>{await y(e)&&(await k(e,m.from(await t.arrayBuffer()),!0),v((0,d.dirname)(e),(0,d.basename)(e)))},e.addEventListener("dragover",W),e.addEventListener("drop",H)}}),[n,h,y,t,E,D,W,H,C,B,v,k]),(0,u.useEffect)((()=>{E&&g&&b(g).then((e=>{E.open_from_file(new File([e],g),g),C((0,d.basename)(g))}))}),[E,C,b,g]),(0,a.jsxs)(i,{children:[!D&&(0,a.jsx)(o.default,{className:"loading"}),(0,a.jsx)("iframe",{ref:L,height:"100%",id:"jspaint-iframe",onLoad:()=>T(!0),src:w,style:P,title:t,width:"100%",...p.v0})]})}},6709:function(e,t,n){n.r(t);const a=n(4141).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=a},4393:function(e,t,n){var a=n(6166),i=n(80),o=n(6050),r=n(5620),s=n(2675),l=n(6819),c=n(1864),f=n(7294),d=n(8680),u=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:w,updatePositions:g}=e;const{url:h}=(0,s.z)(),{iconPositions:y,sortOrders:b,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:$}=(0,r.o)(),F=(0,f.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(d.Ll,e);await k(d.Ll),await $(a,t,!0)&&(n===o.v.UPDATE_URL&&h(p,a),x(d.Ll,e))}else n===o.v.UPDATE_URL&&h(p,e)}),[p,k,x,h,$]),{openTransferDialog:L}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,u.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,i.p4)(e);if(0===t.length&&""===a)return;const o={x:e.clientX,y:e.clientY};let r=[];if(a){try{r=JSON.parse(a)}catch{}const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!y[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(y[a]);return(0,c.basename)(a)})),(0,u.vi)(n,e.target,y,b,o,r,v)}(0,i.WG)(e,t||F,n,L,Boolean(p))}}}},4899:function(e,t,n){var a=n(2675),i=n(3989),o=n(7294),r=n(8680);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,a)=>{const i=n?` - ${n}${a?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,o.useCallback)(((n,a)=>{const i=n?`${a?`${r.xy} `:""}${n} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}}}]);