"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7365],{7365:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(5893);const s=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}),r=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}),i=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}),a=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})}),l="48px",c="32px";var u=n(4141).ZP.div.withConfig({componentId:"sc-a414f095-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${c};
  padding-top: ${l};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${c} ${c};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${l};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${l};
      width: ${l};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }
`,d=n(7294),m=n(7631),h=n(4899),f=n(2675),v=n(9121),p=n(1864);const g={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var x=(e,t,n)=>{const[o,s]=(0,d.useState)(),{getScale:r,reset:i,zoomIn:a,zoomOut:l,zoomToPoint:c,zoomWithWheel:u}=o||{},{processes:{[e]:x}}=(0,f.z)(),{closing:w,componentWindow:b,url:T=""}=x||{},{prependFileToTitle:L}=(0,h.Z)(e),z=(0,d.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:s=0}={}}=e||{};if(T&&t){const{minScale:e,step:r}=g,i=t<e+r;i&&(n||s)&&window.setTimeout((()=>o?.reset()),50),w||L(i?(0,p.basename)(T):`${(0,p.basename)(T)} (${Math.floor(100*t)}%)`)}}),[w,o,L,T]),j=(0,d.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,v.Z)(b,i),(0,d.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",z),n.addEventListener("wheel",j)),()=>{t?.removeEventListener("panzoomchange",z),n?.removeEventListener("wheel",j)})),[n,t,z,j]),(0,d.useEffect)((()=>(t&&!o&&s((0,m.Z)(t,g)),()=>o?.destroy())),[t,o]),{reset:i,scale:r?.(),zoomIn:a,zoomOut:l,zoomToPoint:c}},w=n(4393),b=n(5620),T=n(1087),L=n(6315),z=n(8680),j=n(9595),E=n(8764).Buffer;const{maxScale:k,minScale:$}=g;var y=e=>{let{id:t}=e;const{processes:{[t]:l}={}}=(0,f.z)(),{closing:c=!1,url:m=""}=l||{},[v,g]=(0,d.useState)({}),[y,C]=(0,d.useState)(!1),{prependFileToTitle:Z}=(0,h.Z)(t),{readFile:P}=(0,b.o)(),S=(0,d.useRef)(null),F=(0,d.useRef)(null),q=(0,d.useRef)(null),{reset:M,scale:H,zoomIn:O,zoomOut:B,zoomToPoint:D}=x(t,F.current,q.current),{fullscreen:R,toggleFullscreen:I}=(e=>{const[t,n]=(0,d.useState)(!1),o=()=>{const e=()=>{document.fullscreenElement||(document.removeEventListener("fullscreenchange",e),n(!1))};document.fullscreenElement&&(n(!0),document.addEventListener("fullscreenchange",e))};return{fullscreen:t,toggleFullscreen:()=>{t?document.exitFullscreen():e.current?.requestFullscreen({navigationUI:"show"}).then(o)}}})(S),U=(0,d.useCallback)((async()=>{let e=await P(m);const t=(0,p.extname)(m).toLowerCase();if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,j.iQ)(),{parseAni:o}=await n.e(396).then(n.bind(n,396));let s=[];try{({images:s}=o(e))}catch{return e}return await Promise.all(s.map((e=>new Promise((n=>{const o=new Image,s=(0,j.YS)(E.from(e));o.addEventListener("load",(()=>{t.addFrame(o),(0,j.EK)(s),n()}),z.K7),o.src=s}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(E.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,j.fv)(await(0,j.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(5384).then(n.bind(n,5384));e=t(e)}else z.M0.has(t)&&(e=(await Promise.all([n.e(9591),n.e(6173)]).then(n.t.bind(n,7881,23))).bufferToURI(e).replace("data:image/png;base64,",""));g((t=>{const[n]=Object.keys(t);if(n){if(n===m)return t;M?.()}return{[m]:(0,j.wB)(m,e)}})),Z((0,p.basename)(m))}),[Z,P,M,m]),_=(0,d.useMemo)((()=>({display:v[m]&&!y?"block":"none"})),[y,v,m]);return(0,d.useEffect)((()=>{!m||v[m]||c||U()}),[c,U,v,m]),(0,o.jsxs)(u,{ref:S,...(0,w.Z)({id:t}),children:[(0,o.jsxs)("nav",{className:"top",children:[(0,o.jsx)(L.Z,{disabled:!m||H===k||y,onClick:O,...(0,j.PS)("Zoom in"),children:(0,o.jsx)(i,{})}),(0,o.jsx)(L.Z,{disabled:!m||H===$||y,onClick:B,...(0,j.PS)("Zoom out"),children:(0,o.jsx)(a,{})})]}),(0,o.jsxs)("figure",{ref:q,...(0,T.Z)((e=>{H===$?D?.(2*$,e,{animate:!0}):M?.()})),children:[(0,o.jsx)("img",{ref:F,alt:(0,p.basename)(m,(0,p.extname)(m)),decoding:"async",loading:"eager",onError:()=>C(!0),onLoad:()=>C(!1),src:v[m],style:_,...z.h7}),y&&(0,o.jsxs)("div",{children:[(0,p.basename)(m),(0,o.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,o.jsx)("nav",{className:"bottom",children:(0,o.jsx)(L.Z,{disabled:!m,onClick:I,...(0,j.PS)("Full-screen"),children:R?(0,o.jsx)(r,{}):(0,o.jsx)(s,{})})})]})}},4393:function(e,t,n){var o=n(6166),s=n(80),r=n(6050),i=n(5620),a=n(2675),l=n(6819),c=n(1864),u=n(7294),d=n(8680),m=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,a.z)(),{iconPositions:x,sortOrders:w,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:T,updateFolder:L,writeFile:z}=(0,i.o)(),j=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const o=(0,c.join)(d.Ll,e);await T(d.Ll),await z(o,t,!0)&&(n===r.v.UPDATE_URL&&g(h,o),L(d.Ll,e))}else n===r.v.UPDATE_URL&&g(h,e)}),[h,T,L,g,z]),{openTransferDialog:E}=(0,o.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,s.p4)(e);if(0===t.length&&""===o)return;const r={x:e.clientX,y:e.clientY};let i=[];if(o){try{i=JSON.parse(o)}catch{}const[e]=i;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;i=i.map((e=>(0,c.basename)(e)))}else i=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);i=i.map((e=>{if(!x[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(x[o]);return(0,c.basename)(o)})),(0,m.vi)(n,e.target,x,w,r,i,b)}(0,s.WG)(e,t||j,n,E,Boolean(h))}}}},4899:function(e,t,n){var o=n(2675),s=n(3989),r=n(7294),i=n(8680);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(i.CC),{title:a}=s.Z[n]||{};return{appendFileToTitle:(0,r.useCallback)(((n,o)=>{const s=n?` - ${n}${o?` ${i.xy}`:""}`:"";t(e,`${a}${s}`)}),[e,a,t]),prependFileToTitle:(0,r.useCallback)(((n,o)=>{const s=n?`${o?`${i.xy} `:""}${n} - `:"";t(e,`${s}${a}`)}),[e,a,t])}}},1087:function(e,t,n){var o=n(7294),s=n(8680);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,o.useRef)(),r=(0,o.useRef)(0),i=(0,o.useCallback)((o=>{const i=o.clientX||o.clientY,a="dblclick"===o.type;if(!i&&!a)return;const l=()=>{o.stopPropagation(),e(o)},c=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},u=()=>{r.current>=5&&c(),void 0===n.current?(o.target.removeEventListener("pointermove",u),r.current=0):r.current+=1};t&&!a||!i&&a?l():void 0===n.current?(n.current=window.setTimeout(c,s.jx.DOUBLE_CLICK),o.target.addEventListener("pointermove",u,{passive:!0})):(c(),l())}),[e,t]);return{onClick:i,onDoubleClick:i}}},9121:function(e,t,n){var o=n(7294);t.Z=(e,t)=>{const[n,s]=(0,o.useState)();(0,o.useEffect)((()=>{t&&s(new ResizeObserver(t))}),[t]),(0,o.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);