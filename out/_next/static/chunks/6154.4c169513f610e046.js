"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6154],{6154:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var r=i(5893),n=i(6207),o=i(4141),s=o.ZP.nav.withConfig({componentId:"sc-e840bc6c-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 7px;
  overflow: hidden;
  padding-top: 4px;
  position: absolute;
  top: 0;
  transition-duration: 150ms;
  width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.width}}px;
  z-index: 1;

  &:hover:not(&.collapsed) {
    backdrop-filter: blur(12px);
    background-color: hsla(0, 0%, 10%, 95%);
    box-shadow: 8px 0 5px -5px hsla(0, 0%, 10%, 50%);
    transition: all 300ms ease, backdrop-filter 1ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.expandedWidth}};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: hsla(0, 0%, 10%, 75%);
    }
  }
`,l=o.ZP.li.withConfig({componentId:"sc-e7e2e9b7-0"})`
  border: 1px solid transparent;
  display: flex;
  height: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.height}};
  place-content: center;
  place-items: center;
  transition-duration: 150ms;
  width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.width}}px;

  &::before {
    border-left: ${t=>{let{$active:e,theme:i}=t;return`4px solid ${e?i.colors.highlight:"transparent"}`}};
    content: "";
    height: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.height}};
    left: 0;
    position: absolute;
    width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.width}}px;
  }

  figure {
    color: ${t=>{let{$active:e,theme:i}=t;return e?i.colors.highlight:i.colors.text}};
    display: flex;
    place-items: center;

    svg {
      fill: ${t=>{let{$active:e,theme:i}=t;return e?i.colors.highlight:i.colors.text}};
      height: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.iconSize}};
      left: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.iconSize}};
      margin-left: 1px;
      position: absolute;
      width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.iconSize}};
    }

    figcaption {
      border: 1px solid transparent;
      left: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.width}}px;
      position: absolute;
      white-space: nowrap;

      strong {
        font-weight: 600;
      }
    }
  }

  ${s}:hover:not(${s}.collapsed) & {
    transition: width 300ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.expandedWidth}};
  }

  &:hover {
    background-color: hsla(0, 0%, 35%, 70%);
    border: 1px solid hsla(0, 0%, 45%, 70%);
  }

  &:active {
    background-color: hsla(0, 0%, 40%, 70%);
  }
`,a=i(7294),h=i(5786),c=t=>{let{action:e,active:i,heading:n,icon:o,name:s,tooltip:c}=t;const d=(0,a.useRef)(null);return(0,r.jsx)(l,{ref:d,$active:i,"aria-label":s,onClick:e,title:c,...(0,h.G)(d.current,!0),children:(0,r.jsxs)("figure",{children:[o,(0,r.jsx)("figcaption",{children:n?(0,r.jsx)("strong",{children:s}):s})]})})};const d=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 22v-6h6v6H0zm2-4v2h2v-2H2zm-2-4V8h6v6H0zm2-4v2h2v-2H2zM0 6V0h6v6H0zm2-4v2h2V2H2zm8 10v-2h18v2H10zm14 6v2H10v-2h14zM10 2h22v2H10V2zM0 30v-6h6v6H0zm2-4v2h2v-2H2zm8 2v-2h18v2H10z"})}),u=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 10H0V8h32v2zm0 16H0v-2h32v2zm0-8.016H0V16h32v1.984z"})}),p=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z"})}),g=()=>{const{colors:t}=(0,o.Fg)();return(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M17 16h-2V0h2v16zm3.313-11.312q2.156.688 3.945 2t3.063 3.078 1.977 3.875.703 4.359q0 1.938-.5 3.727t-1.414 3.344-2.188 2.828-2.828 2.188-3.344 1.414-3.727.5-3.727-.5-3.344-1.414-2.828-2.188-2.188-2.828-1.414-3.344-.5-3.727q0-2.25.703-4.359t1.977-3.875 3.063-3.078 3.945-2l.625 1.891q-1.859.609-3.391 1.734t-2.625 2.625-1.695 3.305-.602 3.758q0 1.656.43 3.188t1.211 2.867 1.875 2.43 2.43 1.875 2.867 1.211 3.188.43 3.188-.43 2.867-1.211 2.43-1.875 1.875-2.43 1.211-2.867.43-3.188q0-1.953-.602-3.758t-1.695-3.305-2.625-2.625-3.391-1.734z",stroke:t.text,strokeWidth:"1"})})},x=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z"})}),m=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z"})});var w=i(5620),v=i(3564),b=i(2675),f=i(6819),$=i(8680),z=i(9595);const M=t=>{let{sidebarButtons:e}=t;return(0,r.jsx)("ol",{children:e.map((t=>(0,r.jsx)(c,{...t},t.name)))})};var k=t=>{let{height:e}=t;const{rootFs:i}=(0,w.o)(),{open:n}=(0,b.z)(),{setHaltSession:l}=(0,f.k)(),[h,c]=(0,a.useState)(!0),k=(0,a.useRef)(),j=()=>{k.current&&clearTimeout(k.current)},S=[{heading:!0,icon:(0,r.jsx)(u,{}),name:"START",...h&&{tooltip:"Expand"}},{active:!0,icon:(0,r.jsx)(d,{}),name:"All apps",...h&&{tooltip:"All apps"}}],{sizes:H}=(0,o.Fg)(),B=(0,z.sI)(),V=(0,a.useMemo)((()=>Math.floor((B-$.bK)/H.startMenu.sideBar.width)),[H.startMenu.sideBar.width,B]),y=[V>3?{action:()=>n("FileExplorer",{url:`${$.Sd}/Documents`},"/System/Icons/documents.webp"),icon:(0,r.jsx)(p,{}),name:"Documents",...h&&{tooltip:"Documents"}}:void 0,V>4?{action:()=>n("FileExplorer",{url:`${$.Sd}/Pictures`},"/System/Icons/pictures.webp"),icon:(0,r.jsx)(x,{}),name:"Pictures",...h&&{tooltip:"Pictures"}}:void 0,V>5?{action:()=>n("FileExplorer",{url:`${$.Sd}/Videos`},"/System/Icons/videos.webp"),icon:(0,r.jsx)(m,{}),name:"Videos",...h&&{tooltip:"Videos"}}:void 0,{action:()=>{l(!0),(0,v.zE)(i).finally((()=>window.location.reload()))},icon:(0,r.jsx)(g,{}),name:"Power",tooltip:"Clears session data and reloads the page."}].filter(Boolean);return(0,a.useEffect)((()=>j),[]),(0,r.jsxs)(s,{className:h?"collapsed":void 0,onClick:()=>{j(),c((t=>!t))},onContextMenu:z.nK,onMouseEnter:()=>{k.current=window.setTimeout((()=>c(!1)),700)},onMouseLeave:()=>{j(),c(!0)},style:{height:e},children:[(0,r.jsx)(M,{sidebarButtons:S}),(0,r.jsx)(M,{sidebarButtons:y})]})},j=i(8541),S=i(9019),H=i(7489);const B=$.H$-3,V=o.iv`
  &::-webkit-scrollbar {
    width: ${t=>{let{$showScrolling:e}=t;return e?$.H$:3}}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${t=>{let{$showScrolling:e}=t;return e?void 0:"transparent"}};
  }

  &::-webkit-scrollbar-button:single-button {
    background-color: ${t=>{let{$showScrolling:e}=t;return e?void 0:"transparent"}};
    border: ${t=>{let{$showScrolling:e}=t;return e?void 0:"1px solid transparent"}};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${t=>{let{$showScrolling:e}=t;return e?void 0:"rgb(167, 167, 167)"}};
  }
`;var y=(0,o.ZP)(S.m.nav).withConfig({componentId:"sc-b8753eff-0"})`
  background-color: hsla(0, 0%, 13%, 95%);
  bottom: ${$.bK}px;
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: 0;
  max-height: ${t=>{let{theme:e}=t;return e.sizes.startMenu.maxHeight}}px;
  max-width: ${t=>{let{theme:e}=t;return e.sizes.startMenu.size}}px;
  position: absolute;
  width: 100%;
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
  }

  ${j.Z} {
    ${(0,H.Z)($.H$,-2,-1)};

    margin-top: 0;
    padding-left: ${t=>{let{theme:e}=t;return e.sizes.startMenu.sideBar.width}}px;
    padding-right: ${$.H$}px;
    padding-top: 7px;
    scrollbar-width: none;

    ${j.Z} {
      margin: 0;
      overflow: hidden;
      padding: 0;

      figure {
        picture {
          margin-left: 9px;
        }

        &:active {
          picture {
            margin-left: 13px;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    &:hover {
      ${V};
      padding-right: ${t=>{let{$showScrolling:e}=t;return e?0:`${B}px`}};

      @supports (scrollbar-width: thin) {
        padding-right: 5px;
        scrollbar-width: thin;
      }
    }

    @media (hover: none), (pointer: coarse) {
      ${V};

      &::-webkit-scrollbar-track {
        margin: 13px 0;
      }
    }
  }
`,I=o.ZP.span.withConfig({componentId:"sc-a718d402-0"})`
  backdrop-filter: blur(12px);
  height: ${t=>{let{$height:e}=t;return e}};
  inset: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`,T=()=>{const{sizes:{startMenu:t}}=(0,o.Fg)(),e=Math.min(t.maxHeight,(0,z.sI)()-$.bK);return{animate:"active",exit:"initial",initial:"initial",transition:{duration:$.jx.START_MENU/$.i2,ease:"circOut"},variants:{active:{height:`${e}px`,paddingTop:0},initial:{height:.75*e+"px",paddingTop:.5*e+"px"}}}},C=t=>{let{toggleStartMenu:e}=t;const i=(0,a.useRef)(null),[o,s]=(0,a.useState)(!1),l=T(),{height:h}=l.variants?.active??{};return(0,a.useLayoutEffect)((()=>i.current?.focus($.eS)),[]),(0,r.jsxs)(y,{ref:i,$showScrolling:o,onBlurCapture:t=>{let{relatedTarget:r}=t;const n=r;if(!n||!i.current?.contains(n)){const t=n===i.current?.nextSibling,r=n?.parentElement===i.current?.nextSibling;t||r?i.current?.focus($.eS):e(!1)}},onMouseMove:t=>{let{clientX:e=0}=t;const{width:r=0}=i.current?.getBoundingClientRect()||{};s(e>r-$.BQ)},...l,...$.LL,children:[(0,r.jsx)(I,{$height:h}),(0,r.jsx)(k,{height:h}),(0,r.jsx)(n.Z,{url:`${$.Sd}/Start Menu`,view:"list",hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0,useNewFolderIcon:!0})]})}}}]);