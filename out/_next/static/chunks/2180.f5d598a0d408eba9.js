"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2180],{8513:function(e,t,n){var i=n(5893),a=n(4393),s=n(2675),l=n(5152),r=n.n(l),o=n(7294);const c=r()((()=>n.e(6709).then(n.bind(n,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:l,children:r}=e;const{processes:{[t]:{url:d=""}={}}}=(0,s.z)(),h=(0,o.useRef)(null),[p,g]=(0,o.useState)(!0),x=(0,o.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return n(t,d,h,g,p),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(l,{ref:h,style:x,...(0,a.Z)({id:t}),children:r})]})}},2180:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),a=n(8513);const s=()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})}),l=()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M32 17H0v-2h32v2z"})}),r=()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})}),o=()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})});var c=n(4141),d=c.ZP.nav.withConfig({componentId:"sc-8d1911a-0"})`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${e=>{let{theme:t}=e;return t.sizes.titleBar.height}}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &#subtract {
      margin-right: 7px;
    }

    &#add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &#download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &#scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`,h=n(4899),p=n(5620),g=n(2675),x=n(1864),u=n(7294),f=n(8680),w=n(9595);const v=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5];var m=(e,t,n,i)=>{const{readFile:a}=(0,p.o)(),{argument:s,processes:{[e]:l}={}}=(0,g.z)(),{libs:r=[],scale:o}=l||{},[c,d]=(0,u.useState)([]),m=(0,u.useCallback)((async(t,i)=>{const a=document.createElement("canvas"),l=a.getContext("2d",f.KU),r=await i.getPage(t);let c;if(o)c=r.getViewport({scale:o});else{const t=r.getViewport().viewBox[2],a=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-f.BQ;if(t>=e)return 1;const n=t/e,i=v.findIndex((e=>e>=n));return i>0?v[i-1]:1}(n.current?.clientWidth,t),{info:l}=await i.getMetadata();s(e,"scale",a),l?.Title&&s(e,"subTitle",l.Title),c=r.getViewport({scale:a})}return a.height=c.height,a.width=c.width,await r.render({canvasContext:l,viewport:c}).promise,a}),[s,n,e,o]),{prependFileToTitle:b}=(0,h.Z)(e),j=(0,u.useCallback)((async()=>{if(window.pdfjsLib&&t&&n.current){i(!0);const n=await window.pdfjsLib.getDocument(await a(t)).promise;s(e,"count",n.numPages),d(await Promise.all(Array.from({length:n.numPages}).map(((e,t)=>m(t+1,n))))),b((0,x.basename)(t))}i(!1)}),[s,n,e,b,a,m,i,t]);(0,u.useEffect)((()=>{(0,w.mb)(r).then((()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",j())}))}),[r,j]),(0,u.useEffect)((()=>{if(c.length>0){const t=n.current?.querySelector("#pages");t&&([...t.children].forEach((e=>e.remove())),c.forEach(((i,a)=>{const l=document.createElement("li"),r=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&s(e,"page",a+1)}))}),{root:n.current,threshold:.4});l.append(i),t.append(l),r.observe(l)})))}}),[s,n,e,c])},b=n(6315),j=e=>{let{id:t}=e;const{readFile:a}=(0,p.o)(),{argument:c,processes:{[t]:h}={}}=(0,g.z)(),{count:u=0,page:f=1,componentWindow:m,scale:j=1,subTitle:k="",url:y=""}=h||{};return(0,i.jsxs)(d,{children:[(0,i.jsx)("div",{className:"side-menu",children:(0,i.jsx)("span",{children:k||(0,x.basename)(y)})}),(0,i.jsxs)("ol",{children:[0!==u&&(0,i.jsxs)("li",{className:"pages",children:[(0,i.jsx)("input",{enterKeyHint:"go",onChange:e=>{let{target:n}=e;const i=Number(n.value);Number.isNaN(i)||i<1||i>u||(c(t,"page",i),m?.querySelectorAll("li")[i-1].scrollIntoView())},value:f})," ","/ ",u]}),(0,i.jsxs)("li",{id:"scale",children:[(0,i.jsx)(b.Z,{disabled:.25===j||0===u,id:"subtract",onClick:()=>c(t,"scale",v[v.indexOf(j)-1]),...(0,w.PS)("Zoom out"),children:(0,i.jsx)(l,{})}),(0,i.jsx)("input",{disabled:0===u,enterKeyHint:"done",onChange:e=>{let{target:n}=e;if(!n.value.endsWith("%")||n.value.length>4||n.value.length<2)return;const i=Number(n.value.replace("%",""))/100;Number.isNaN(i)||i>v[v.length-1]||i<v[0]||c(t,"scale",v[v.findIndex((e=>e>=i))])},value:`${Math.round(100*j)}%`}),(0,i.jsx)(b.Z,{disabled:5===j||0===u,id:"add",onClick:()=>c(t,"scale",v[v.indexOf(j)+1]),...(0,w.PS)("Zoom in"),children:(0,i.jsx)(s,{})})]})]}),(0,i.jsxs)("div",{className:"side-menu",children:[(0,i.jsx)(b.Z,{disabled:0===u,id:"download",onClick:async()=>{const e=document.createElement("a");e.href=(0,w.YS)(await a(y)),e.download=(0,x.basename)(y),e.click()},...(0,w.PS)("Download"),children:(0,i.jsx)(r,{})}),!(0,w.G6)()&&(0,i.jsx)(b.Z,{disabled:0===u,onClick:async()=>{const{default:e}=await n.e(8607).then(n.t.bind(n,8607,23));e({base64:!0,printable:(await a(y)).toString("base64"),type:"pdf"})},...(0,w.PS)("Print"),children:(0,i.jsx)(o,{})})]})]})},k=c.ZP.div.withConfig({componentId:"sc-667eaf8e-0"})`
  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 40px)`}};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`,y=e=>{let{id:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{StyledComponent:k,id:t,useHook:m,children:(0,i.jsx)("ol",{id:"pages"})}),(0,i.jsx)(j,{id:t})]})}},4393:function(e,t,n){var i=n(6166),a=n(80),s=n(6050),l=n(5620),r=n(2675),o=n(6819),c=n(1864),d=n(7294),h=n(8680),p=n(9595);t.Z=e=>{let{callback:t,directory:n=h.Ll,id:g,onDragLeave:x,onDragOver:u,updatePositions:f}=e;const{url:w}=(0,r.z)(),{iconPositions:v,sortOrders:m,setIconPositions:b}=(0,o.k)(),{mkdirRecursive:j,updateFolder:k,writeFile:y}=(0,l.o)(),C=(0,d.useCallback)((async(e,t,n)=>{if(g)if(t){const i=(0,c.join)(h.Ll,e);await j(h.Ll),await y(i,t,!0)&&(n===s.v.UPDATE_URL&&w(g,i),k(h.Ll,e))}else n===s.v.UPDATE_URL&&w(g,e)}),[g,j,k,w,y]),{openTransferDialog:z}=(0,i.Z)();return{onDragLeave:x,onDragOver:e=>{u?.(e),(0,p.nK)(e)},onDrop:e=>{if(f&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,a.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let l=[];if(i){try{l=JSON.parse(i)}catch{}const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[i]);return(0,c.basename)(i)})),(0,p.vi)(n,e.target,v,m,s,l,b)}(0,a.WG)(e,t||C,n,z,Boolean(g))}}}},4899:function(e,t,n){var i=n(2675),a=n(3989),s=n(7294),l=n(8680);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(l.CC),{title:r}=a.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,i)=>{const a=n?` - ${n}${i?` ${l.xy}`:""}`:"";t(e,`${r}${a}`)}),[e,r,t]),prependFileToTitle:(0,s.useCallback)(((n,i)=>{const a=n?`${i?`${l.xy} `:""}${n} - `:"";t(e,`${a}${r}`)}),[e,r,t])}}}}]);