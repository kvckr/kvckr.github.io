"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5806],{8513:function(e,t,i){var n=i(5893),o=i(4393),r=i(2675),a=i(5152),s=i.n(a),l=i(7294);const c=s()((()=>i.e(6709).then(i.bind(i,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:i,StyledComponent:a,children:s}=e;const{processes:{[t]:{url:u=""}={}}}=(0,r.z)(),h=(0,l.useRef)(null),[d,p]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return i(t,u,h,p,d),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(c,{}),(0,n.jsx)(a,{ref:h,style:f,...(0,o.Z)({id:t}),children:s})]})}},5806:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),o=i(8513),r=i(4141).ZP.div.withConfig({componentId:"sc-ff609c9c-0"})`
  canvas {
    background-color: #000;
    height: auto !important;
    width: auto !important;
  }

  div {
    font-family: "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    position: relative;
    white-space: pre;
  }
`;const a={autostart:!0,bios:{url:"/Program Files/Virtual x86/bios/seabios.bin"},log_level:0,network_relay_url:"wss://relay.widgetry.org/",vga_bios:{url:"/Program Files/Virtual x86/bios/vgabios.bin"},wasm_path:"/Program Files/Virtual x86/v86.wasm"},s=new Set([160,180,200,320,360,400,720,1200,1440,1722,2880]),l=(e,t)=>".bin"===e?"bzimage":(e=>s.has(e>>10)&&0==(1023&e)||512===e)(t)?"fda":"hda";var c=i(5835),u=i(7294);const h="screen-set-size-graphical",d="screen-set-size-text";var p=(e,t,i)=>{const{updateWindowSize:n}=(0,c.Z)(e);(0,u.useEffect)((()=>{const e=e=>{let[t,i]=e;return n(i,t)},o=e=>{let[,i]=e;const{height:o,width:r}=t.current?.querySelector("span:last-of-type")?.getBoundingClientRect()||{};o&&r&&n(i*o,r)};return i?.add_listener(h,e),i?.add_listener(d,o),()=>{i?.remove_listener(h,e),i?.remove_listener(d,o)}}),[i,t,n])},f=i(4899),m=i(5620),g=i(3564),w=i(2675),b=i(6819),x=i(1864),v=i(8680),y=i(9595),_=i(8764).Buffer,T=(e,t,i,n,o)=>{const{processes:{[e]:r}}=(0,w.z)(),{foregroundId:s}=(0,b.k)(),{closing:c,libs:h=[]}=r||{},{appendFileToTitle:d}=(0,f.Z)(e),T=(0,u.useRef)(!1),[k,z]=(0,u.useState)({}),{exists:C,mkdirRecursive:$,readFile:L,updateFolder:S,writeFile:R}=(0,m.o)(),E=(0,u.useCallback)((e=>new Promise(((t,i)=>{k[e]?.save_state().then(t).catch(i)}))),[k]),M=(0,u.useCallback)((async(e,t)=>{const i=`${(0,x.basename)(e)}.bin.save`;await C(v.Tl)||(await $(v.Tl),S((0,x.dirname)(v.Tl)));const n=(0,x.join)(v.Tl,i);if(await R(n,_.from(await E(e)),!0)){if(t){const e=(0,x.join)(v.Xo,v.Tl),i=(0,x.join)(v.Xo,`${n}${v.Qy}`);await C(e)||(await $(e),S((0,x.dirname)(v.Tl))),await R(i,t,!0)}try{k[e]?.destroy()}catch{}finally{S(v.Tl,i)}}}),[k,C,$,E,S,R]),F=(0,u.useCallback)((async()=>{const[e]=Object.keys(k);e&&await M(e);const n=t?await L(t):_.from(""),o=(0,x.extname)(t).toLowerCase(),r=".iso"===o,s=(0,y.YS)(n),c={[r?"cdrom":l(o,n.length)]:{async:!1,size:n.length,url:s,use_parts:!1}},{deviceMemory:u=.25}=navigator,h={boot_order:r?531:561,memory_size:128*u*1024*1024,screen_container:i.current,vga_memory_size:8*u*1024*1024,...c,...a},p=(0,x.join)(v.Tl,`${(0,x.basename)(t)}.bin.save`),f=await C(p)?(0,y.YS)(await L(p)):void 0;f&&(h.initial_state={url:f}),h.filesystem={basefs:URL.createObjectURL(new Blob([JSON.stringify((0,g.uh)())],{type:"application/json"})),baseurl:window.location?.origin??"/"};const m=new window.V86Starter(h);m.add_listener("emulator-loaded",(()=>{T.current?m.destroy():(d((0,x.basename)(t)),(0,y.EK)(s),h.initial_state&&(0,y.EK)(h.initial_state.url),h.filesystem&&(0,y.EK)(h.filesystem.basefs),i.current?.addEventListener("click",m.lock_mouse),z({[t]:m}))}))}),[d,M,i,k,C,L,t]);p(e,i,k[t]),(0,u.useEffect)((()=>{o&&(0,y.mb)(h).then((()=>{window.V86Starter&&n(!1)}))}),[h,o,n]),(0,u.useEffect)((()=>{const t=s===e;Object.values(k).forEach((e=>e?.keyboard_set_status(t)))}),[k,s,e]),(0,u.useEffect)((()=>{!r||c||o||t in k||(z({[t]:void 0}),F());const e=i.current;return()=>{if(t&&c&&!T.current&&(T.current=!0,k[t])){const i=e=>{window.setTimeout((()=>M(t,e)),v.jx.WINDOW)};(async()=>{let i;if(k[t]?.v86.cpu.devices.vga.graphical_mode)i=e?.querySelector("canvas")?.toDataURL("image/png");else if(e instanceof HTMLElement){const t=await(0,y.mZ)();i=await(t?.toPng(e,{skipAutoScale:!0}))}return i?_.from(i.replace("data:image/png;base64,",""),"base64"):void 0})().then(i).catch(i)}}}),[M,c,i,k,F,o,r,t])},k=e=>{let{id:t}=e;return(0,n.jsxs)(o.Z,{StyledComponent:r,id:t,useHook:T,children:[(0,n.jsx)("div",{onContextMenuCapture:y.nK}),(0,n.jsx)("canvas",{onContextMenuCapture:y.nK})]})}},4393:function(e,t,i){var n=i(6166),o=i(80),r=i(6050),a=i(5620),s=i(2675),l=i(6819),c=i(1864),u=i(7294),h=i(8680),d=i(9595);t.Z=e=>{let{callback:t,directory:i=h.Ll,id:p,onDragLeave:f,onDragOver:m,updatePositions:g}=e;const{url:w}=(0,s.z)(),{iconPositions:b,sortOrders:x,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:y,updateFolder:_,writeFile:T}=(0,a.o)(),k=(0,u.useCallback)((async(e,t,i)=>{if(p)if(t){const n=(0,c.join)(h.Ll,e);await y(h.Ll),await T(n,t,!0)&&(i===r.v.UPDATE_URL&&w(p,n),_(h.Ll,e))}else i===r.v.UPDATE_URL&&w(p,e)}),[p,y,_,w,T]),{openTransferDialog:z}=(0,n.Z)();return{onDragLeave:f,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const r={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}const[e]=a;if(!e)return;if(e.startsWith(i)&&(0,c.basename)(e)===(0,c.relative)(i,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${i}/${e}`])return e;let t=0,n="";do{t+=1,n=`${i}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[n]);return(0,c.basename)(n)})),(0,d.vi)(i,e.target,b,x,r,a,v)}(0,o.WG)(e,t||k,i,z,Boolean(p))}}}},8465:function(e,t,i){i.d(t,{BS:function(){return a},FC:function(){return o},F_:function(){return n},wV:function(){return r}});const n={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},r=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${r}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},8459:function(e,t,i){i.d(t,{Rf:function(){return s},b$:function(){return u},hu:function(){return a},ix:function(){return c},mZ:function(){return l}});var n=i(8465),o=i(8680),r=i(9595);const a=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[a]=e.split(o.CC),s=`${a}${o.CC}`,l=i.find((e=>e.startsWith(s)))||"",{componentWindow:c}=t?.[l]||{},{x:u=0,y:h=0,width:d=0,height:p=0}=c?.getBoundingClientRect()||{};return u+n+d>(0,r.E9)()||h+n+p>(0,r.sI)()||!u&&!h?void 0:{x:u+n,y:h+n}},s=e=>{let{height:t,width:i}=e;const[n,a]=[(0,r.sI)(),(0,r.E9)()];return{x:Math.floor(a/2-(0,r.Vy)(i)/2),y:Math.floor((n-o.bK)/2-(0,r.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:n,size:o}=e||{},{x:a=0,y:s=0}=n||{},{height:c=0,width:u=0}=o||{};return i?a+l.RIGHT>t.x||a+(0,r.Vy)(u)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:a<0||s<0||a+(0,r.Vy)(u)>t.x||s+(0,r.Vy)(c)>t.y},u=(e,t)=>{const i=Number(e.height),a=Number(e.width),[s,l]=[(0,r.sI)(),(0,r.E9)()],c=s-o.bK,u=Math.max(n.wV,Math.min(i,c)),h=Math.max(n.BS,Math.min(a,l));if(!t)return{height:u,width:h};const d=i===u,p=a===h;return d||p?d?p?{height:u,width:h}:{height:Math.round(u/(a/h)),width:h}:{height:u,width:Math.round(h/(i/u))}:i>a?{height:u,width:Math.round(h/(c/u))}:{height:Math.round(u/(l/h)),width:h}}},4899:function(e,t,i){var n=i(2675),o=i(3989),r=i(7294),a=i(8680);t.Z=e=>{const{title:t}=(0,n.z)(),[i]=e.split(a.CC),{title:s}=o.Z[i]||{};return{appendFileToTitle:(0,r.useCallback)(((i,n)=>{const o=i?` - ${i}${n?` ${a.xy}`:""}`:"";t(e,`${s}${o}`)}),[e,s,t]),prependFileToTitle:(0,r.useCallback)(((i,n)=>{const o=i?`${n?`${a.xy} `:""}${i} - `:"";t(e,`${o}${s}`)}),[e,s,t])}}},5835:function(e,t,i){var n=i(8459),o=i(2675),r=i(6819),a=i(7294),s=i(4141);t.Z=e=>{const{setWindowStates:t}=(0,r.k)(),{processes:{[e]:{lockAspectRatio:i=!1,maximized:l=!1}={}}={}}=(0,o.z)(),{sizes:{titleBar:c}}=(0,s.Fg)();return{updateWindowSize:(0,a.useCallback)(((o,r)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,n.b$)({height:o+c.height,width:r},i)}})))),[e,i,l,t,c.height])}}}}]);