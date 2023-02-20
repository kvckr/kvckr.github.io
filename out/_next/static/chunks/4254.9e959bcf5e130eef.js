"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4254],{4254:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(5893),r=n(4141).ZP.div.withConfig({componentId:"sc-489ea70c-0"})`
  font-size: 13px;
  overflow-y: scroll;
  overflow-x: hidden;

  ol {
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    padding: 2px 0;
  }

  figure {
    align-items: center;
    display: flex;
    padding-top: 2px;

    figcaption {
      padding-right: 15px;
    }
  }
`,s=n(4393),a=n(5620),o=n(2675),l=n(3989),c=n(7294);const u=[12,18,24,36,48,60,72],d=e=>e?e.en||Object.values(e)[0]:"",f=e=>{let{font:t,fontSize:n,hideLabel:r,text:s}=e;const a=(0,c.useRef)(null),o=(0,i.jsx)("canvas",{ref:a});return(0,c.useEffect)((()=>{if(!t||!a.current)return;const e=Math.ceil(1.3333333333333333*n),i=t.getPath(s||"The quick brown fox jumps over the lazy dog. 1234567890",0,e,e),{x2:r,y2:o}=i.getBoundingBox();a.current.setAttribute("height",`${Math.ceil(o)}`),a.current.setAttribute("width",`${Math.ceil(r)}`),i.draw(a.current.getContext("2d"))}),[t,n,s]),r?o:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:n}),o]})};var p=e=>{let{id:t}=e;const{processes:{[t]:{url:p=""}={}}={},title:h}=(0,o.z)(),{readFile:x}=(0,a.o)(),[m,g]=(0,c.useState)(),j=(0,c.useCallback)((async e=>{const{default:t}=await Promise.all([n.e(3257),n.e(6102)]).then(n.bind(n,4422)),{buffer:i}=await x(e);g(t.parse(i))}),[x]),{name:v,types:b,version:y}=(0,c.useMemo)((()=>{const e=[];return m?.supported&&e.push("OpenType Layout"),"truetype"===m?.outlinesFormat&&e.push("TrueType Outlines"),{name:d(m?.names.fullName),types:e.join(", "),version:d(m?.names.version)}}),[m]);return(0,c.useEffect)((()=>{p&&j(p)}),[j,p]),(0,c.useEffect)((()=>h(t,v?`${v} (${l.Z.OpenType.title})`:l.Z.OpenType.title)),[t,v,h]),(0,i.jsx)(r,{...(0,s.Z)({id:t}),children:m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",v]}),(0,i.jsxs)("li",{children:["Version: ",y]}),(0,i.jsx)("li",{children:b})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(f,{font:m,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(f,{font:m,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:u.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(f,{font:m,fontSize:e})},e)))})]})})}},4393:function(e,t,n){var i=n(6166),r=n(80),s=n(6050),a=n(5620),o=n(2675),l=n(6819),c=n(1864),u=n(7294),d=n(8680),f=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:h,onDragOver:x,updatePositions:m}=e;const{url:g}=(0,o.z)(),{iconPositions:j,sortOrders:v,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:y,updateFolder:w,writeFile:L}=(0,a.o)(),k=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const i=(0,c.join)(d.Ll,e);await y(d.Ll),await L(i,t,!0)&&(n===s.v.UPDATE_URL&&g(p,i),w(d.Ll,e))}else n===s.v.UPDATE_URL&&g(p,e)}),[p,y,w,g,L]),{openTransferDialog:T}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{x?.(e),(0,f.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,r.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!j[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(j[i]);return(0,c.basename)(i)})),(0,f.vi)(n,e.target,j,v,s,a,b)}(0,r.WG)(e,t||k,n,T,Boolean(p))}}}}}]);