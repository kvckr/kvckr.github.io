"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{426:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),r=n(6815),o=n(9019),a=n(4141),s=n(8680),c=(0,a.ZP)(o.m.div).withConfig({componentId:"sc-b4b09f83-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  bottom: ${s.bK}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;

  ${r.Z}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.activeForeground}};
    }
  }

  img {
    height: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.height}}px;
    margin: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.margin}}px;
    max-height: ${s.yM}px;
    max-width: ${s.yM}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20);
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }
`,l=()=>{const{sizes:{taskbar:e}}=(0,a.Fg)(),t=e.entry.peekImage.height+2*e.entry.peekImage.margin;return{animate:"active",exit:"initial",initial:"initial",transition:{duration:s.jx.WINDOW/s.i2,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}},h=n(2675),u=n(7294),d=n(9595);const g=async(e,t,n)=>{if(!t.current)return;const i=()=>window.requestAnimationFrame((()=>g(e,t,n))),r=await(0,d.mZ)(),o=await(r?.toCanvas(e,{...e.clientWidth>s.yM&&{canvasHeight:Math.round(s.yM/e.clientWidth*e.clientHeight),canvasWidth:s.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0"}}));if(o&&o.width>0&&o.height>0)if(o.getContext("2d")?.getImageData(0,0,o.width,o.height).data.some(Boolean)){const e=new Image,r=o.toDataURL();e.addEventListener("load",(()=>{t.current&&(n(r),window.setTimeout(i,s.i2/15))}),s.K7),e.src=r}else i()};var m=e=>{const{processes:{[e]:t}}=(0,h.z)(),{peekElement:n,componentWindow:i}=t||{},r=(0,u.useRef)(),[o,a]=(0,u.useState)(""),c=(0,u.useRef)(!0);return(0,u.useEffect)((()=>{const e=n||i;return!r.current&&e&&(r.current=window.setTimeout((()=>window.requestAnimationFrame((()=>g(e,c,a)))),document.querySelector(".peekWindow")?0:s.i2/2),c.current=!0),()=>{r.current&&(clearTimeout(r.current),r.current=void 0),c.current=!1}}),[i,n]),o},w=n(5917),p=n(1739),v=n(6819),x=n(6315),f=e=>{let{id:t}=e;const{minimize:n,processes:{[t]:{minimized:r=!1,title:o=t}={}}}=(0,h.z)(),{setForegroundId:a}=(0,v.k)(),{onClose:g}=(0,w.Z)(t),[f,b]=(0,u.useState)(0),k=m(t),y=l(),j=(0,u.useRef)(null);return(0,u.useLayoutEffect)((()=>{if(k){const{left:e=0,right:t=0}=j.current?.getBoundingClientRect()||{},n=(0,d.E9)();e<0?b(Math.abs(e)):t>n&&b(n-t)}}),[k]),k?(0,i.jsxs)(c,{ref:j,className:"peekWindow",onClick:()=>{r&&n(t),a(t)},style:f?{transform:`translateX(${f}px)`}:void 0,...y,...s.LL,children:[(0,i.jsx)("img",{alt:o,decoding:"async",loading:"eager",src:k,...s.h7}),(0,i.jsx)(x.Z,{onClick:g,...(0,d.PS)("Close"),children:(0,i.jsx)(p.Tw,{})})]}):null}},1739:function(e,t,n){n.d(t,{J6:function(){return a},Tw:function(){return s},bJ:function(){return o},dO:function(){return r}});var i=n(5893);const r=()=>(0,i.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0 0h10v1H0z"})}),o=()=>(0,i.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}),a=()=>(0,i.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}),s=()=>(0,i.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})}}]);