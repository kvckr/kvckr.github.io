"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9808],{9808:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(5893),r=n(4141).ZP.footer.withConfig({componentId:"sc-753ffae9-0"})`
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: rgb(247, 247, 247);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${e=>{let{theme:t}=e;return t.sizes.fileExplorer.statusBarHeight}};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 10px;

    &::after {
      border-right: 1px solid rgb(247, 247, 247);
      content: "";
      height: 11px;
      margin-left: 11px;
      position: relative;
      top: 3px;
    }

    .selected {
      margin-right: 10px;
      overflow: hidden;
    }
  }
`,s=n(5620),c=n(9121),o=n(1864),a=n(7294),l=n(9595),u=e=>{let{count:t,directory:n,fileDrop:u,selected:f}=e;const{exists:d,lstat:p,stat:h}=(0,s.o)(),[g,x]=(0,a.useState)(-1),[w,m]=(0,a.useState)(!1),b=e=>m(e>225),v=(0,a.useRef)(null);return(0,a.useEffect)((()=>{(async()=>{x(await f.reduce((async(e,t)=>{const i=await e;if(-2===i)return-2;const r=(0,o.join)(n,t);try{if(await d(r))return(await p(r)).isDirectory()?-2:(-1===i?0:i)+(await h(r)).size}catch{}return e}),Promise.resolve(-1)))})()}),[n,d,p,f,h]),(0,a.useLayoutEffect)((()=>{v.current&&b(v.current.getBoundingClientRect().width)}),[]),(0,c.Z)(v.current,(0,a.useCallback)((e=>{let[{contentRect:{width:t=0}={}}]=e;return b(t)}),[])),(0,i.jsxs)(r,{ref:v,onContextMenuCapture:l.nK,...u,children:[(0,i.jsxs)("div",{...(0,l.PS)("Total item count"),children:[t," item",1===t?"":"s"]}),w&&f.length>0&&(0,i.jsxs)("div",{className:"selected",...(0,l.PS)("Selected item count and size"),children:[f.length," item",1===f.length?"":"s"," selected",-1!==g&&-2!==g?`  ${(0,l.UR)(g)}`:""]})]})}},9121:function(e,t,n){var i=n(7294);t.Z=(e,t)=>{const[n,r]=(0,i.useState)();(0,i.useEffect)((()=>{t&&r(new ResizeObserver(t))}),[t]),(0,i.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);