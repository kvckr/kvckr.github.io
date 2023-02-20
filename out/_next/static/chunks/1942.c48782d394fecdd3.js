"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1942],{5762:function(e,r,t){const o=t(4141).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
  background-color: rgb(225, 225, 225);
  border: ${e=>{let{$active:r}=e;return r?"2px solid rgb(0, 120, 215)":"1px solid rgb(173, 173, 173)"}};
  font-family: ${e=>{let{theme:r}=e;return r.formats.systemFont}};
  font-size: 12px;
  height: 23px;
  transition: all 0.25s ease;
  width: 73px;

  &:focus {
    border: 2px solid rgb(0, 120, 215);
  }

  &:hover {
    background-color: rgb(229, 241, 251);
    border: 1px solid rgb(0, 120, 215);
  }

  &:active {
    background-color: rgb(204, 228, 247);
    border: 1px solid rgb(0, 84, 153);
    transition: none;
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(191, 191, 191);
  }
`;r.Z=o},1942:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var o=t(5893),n=t(5762),i=t(4141);const s=i.iv`
  animation: gradient 5s ease-in-out alternate infinite;
  background: ${e=>{let{theme:r}=e;return`linear-gradient(-45deg, #fff, ${r.colors.progressBarRgb}, #fff)`}};
  background-size: 300% 300%;
  content: "";
  inset: 0;
  position: absolute;
`;var a=i.ZP.div.withConfig({componentId:"sc-71ad378e-0"})`
  h1,
  div {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px - 41px - 2px);
    justify-content: space-around;
    padding: 0 22px;

    progress {
      border: 1px solid rgb(188, 188, 188);
      height: 15px;
      overflow: hidden;
      position: relative;
      width: 100%;

      &::-webkit-progress-bar {
        background: rgb(230, 230, 230);
      }

      &::-webkit-progress-value {
        background: ${e=>{let{theme:r}=e;return r.colors.progressBarRgb}};
      }

      &::-moz-progress-bar {
        background: ${e=>{let{theme:r}=e;return r.colors.progressBarRgb}};
      }

      &:indeterminate {
        /* stylelint-disable-next-line block-no-empty */
        &::-moz-progress-bar {
          ${s}
        }

        /* stylelint-disable-next-line block-no-empty */
        &::after {
          ${s}
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  div {
    margin-top: -3px;
  }

  h1 {
    background: linear-gradient(
      to right,
      rgb(220, 229, 244),
      rgb(155, 192, 227),
      rgb(0, 43, 85)
    );
    display: flex;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    place-items: flex-start;
    white-space: nowrap;
    width: 100%;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
  }

  nav {
    background-color: rgb(240, 240, 240);
    border-top: 1px solid rgb(223, 223, 223);
    bottom: 0;
    box-sizing: content-box;
    display: flex;
    height: 41px;
    padding-bottom: 1px;
    place-items: center;
    position: absolute;
    width: 100%;

    ${n.Z} {
      padding-bottom: 1px;
      position: absolute;
      right: 23px;
    }
  }
`,l=t(2675),d=t(1864),c=t(7294),g=t(8680),b=t(9595);const p=e=>Array.isArray(e?.[0]);var u=e=>{let{id:r}=e;const{argument:t,closeWithTransition:i,processes:{[r]:s}={},title:u}=(0,l.z)(),{closing:f,fileReaders:h,url:x}=s||{},[m,k]=(0,c.useState)(),[v="",{name:y=""}={}]=m||[],[$,w]=(0,c.useState)(0),E=(0,c.useMemo)((()=>x&&!h?"Extracting":"Copying"),[h,x]),I=(0,c.useRef)(!1),C=(0,c.useCallback)((()=>{I.current=!1,i(r)}),[i,r]),z=(0,c.useCallback)((e=>{let[r,...t]=e;const o=0===t.length;r.read().then((()=>{if(w((e=>e+1)),o)r.done?.(),C();else{const[{directory:e,name:r}]=t;k([e,{name:r}])}})),o||z(t)}),[C]),j=(0,c.useCallback)((e=>{let[[r,t,o],...n]=e,i=0;k([t,r]),o.addEventListener("progress",(e=>{let{loaded:r=0}=e;const t=r-i;w((e=>e+t)),i=r}),{passive:!0}),o.addEventListener("loadend",(()=>{n.length>0?j(n):C()}),g.K7),o.readAsArrayBuffer(r)}),[C]),N=(0,c.useMemo)((()=>p(h)?h.reduce(((e,r)=>{let[{size:t=0}]=r;return e+t}),0):h?.length||Number.POSITIVE_INFINITY),[h]);return(0,c.useEffect)((()=>{if(!I.current)if(h)if(h?.length>0)if(I.current=!0,p(h))j(h);else{const[{directory:e,name:r}]=h;k([e,{name:r}]),z(h)}else i(r);else x&&k([(0,d.dirname)(x),{name:(0,d.basename)(x)}])}),[i,h,r,j,z,x]),(0,c.useEffect)((()=>{if(I.current){const e=Math.floor($/N*100);t(r,"progress",e),u(r,`${e}% complete`)}}),[t,r,$,u,N]),(0,c.useEffect)((()=>u(r,`${E}...`)),[E,r,u]),(0,c.useEffect)((()=>()=>{f&&I.current&&(p(h)?h.forEach((e=>{let[,,r]=e;return r.abort()})):(h?.forEach((e=>e.abort())),h?.[0]?.done?.()))}),[f,h]),(0,o.jsxs)(a,{onContextMenu:b.nK,children:[(0,o.jsx)("h1",{children:y?`${E} '${y.length>=37?`${y.slice(0,37)}...`:y}'`:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:v?`To '${v}'`:""}),(0,o.jsx)("progress",{max:N,value:N===Number.POSITIVE_INFINITY?void 0:$})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(n.Z,{onClick:()=>i(r),children:"Cancel"})})]})}}}]);