"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990,1791],{990:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var o=t(5893),n=t(1127),i=t(5762),l=t(4141).ZP.div.withConfig({componentId:"sc-4317e47b-0"})`
  background-color: #fff;
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;

  figure {
    display: flex;
    flex-direction: row;
    padding: 20px 11px 14px;

    figcaption {
      line-height: 15px;
      margin-bottom: 4px;
    }

    img {
      height: 32px;
      margin-right: 19px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    label {
      margin-top: 3px;
      padding: 0 11px;
    }

    div {
      position: relative;
      width: 100%;

      input,
      select {
        border: 1px solid rgb(122, 122, 122);
        border-radius: 0;
        font-family: ${e=>{let{theme:r}=e;return r.formats.systemFont}};
        font-size: 12px;
        height: 23px;
        line-height: 16px;
        margin: 0 13px 21px 8px;
        padding-bottom: 2px;
        padding-left: 5px;
        width: 100%;
      }

      select {
        background-color: #fff;
        clip-path: inset(0 0 0 calc(100% - 20px));
        position: absolute;
        width: calc(100% - 21px);

        &:disabled {
          border: 1px solid rgb(122, 122, 122);
          opacity: 100%;
        }
      }

      input {
        border-right: 0;
        margin-right: 33px;

        &:focus {
          border: 1px solid rgb(0, 120, 215);
          border-right: 0;

          + select {
            border-color: rgb(0, 120, 215);
          }
        }
      }
    }
  }

  nav {
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    height: 100%;

    ${i.Z} {
      height: 24px;
      margin-top: 19px;
      position: absolute;
      right: 12px;
      width: 86px;

      &:first-child {
        right: 107px;
      }
    }
  }
`,s=t(9893),a=t(4393),c=t(5620),p=t(2675),d=t(3989),u=t(6819),h=t(1864),g=t(7294),x=t(8680),f=t(9595),m=t(3201),b=t(1791);const w="open",y={cmd:"Terminal",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},S=`Type the name of a program, folder, document, or Internet resource, and ${x.Ou.alias} will open it for you.`,k=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),v={esheep:b.default,sheep:b.default};var C=()=>{const{open:e,closeWithTransition:r,processes:{Run:t}={}}=(0,p.z)(),{createPath:b,exists:C,readFile:F,stat:j,updateFolder:P}=(0,c.o)(),{foregroundId:L,runHistory:_,setRunHistory:E}=(0,u.k)(),$=(0,g.useRef)(null),[I,R]=(0,g.useState)(!0),[Z,M]=(0,g.useState)(!_[0]),[O,K]=(0,g.useState)(!1),T=(0,g.useCallback)((async t=>{if(!t)return;K(!0);const o=()=>E((e=>e[0]===t?e:[t,...e])),[i,...l]=(0,n.$4)(t);let a=t,c=!0;const p=await C(a);p||(a=l.length>0?l.join(" "):i);const u=a.startsWith("ipfs://");if(p||u||await C(a)){if(u)try{const e=await(0,m.getIpfsResource)(a);a=(0,h.join)(x.Ll,await b(await(0,m.getIpfsFileName)(a,e),x.Ll,e)),P(x.Ll,(0,h.basename)(a))}catch{}if((await j(a)).isDirectory())e("FileExplorer",{url:a},""),o();else if(i&&l.length>0&&a!==t){const r=Object.keys(d.Z).find((e=>e.toLowerCase()===i.toLowerCase()));r?(e(r,{url:"Browser"===r&&u?l.join(" "):a}),o()):(k(i),c=!1)}else{const r=(0,h.extname)(a);if(r===x.zm){const{pid:r,url:t}=(0,s.OE)(await F(a));r&&e(r,{url:t})}else{const o=(0,s.Wd)(r);o&&e(o,{url:"Browser"===o&&u?t:a})}o()}}else{const r=Object.keys(d.Z).find((e=>e.toLowerCase()===(y[a.toLowerCase()]||a).toLowerCase()));r?(e(r),o()):v[t.toLowerCase()]?(v[t.toLowerCase()](),o()):(k(t),c=!1)}K(!1),c&&r("Run")}),[r,b,C,e,F,E,j,P]);return(0,g.useLayoutEffect)((()=>{"Run"===L&&($.current?.focus(x.eS),$.current?.value&&$.current?.select())}),[L]),(0,g.useLayoutEffect)((()=>{t?.url&&$.current&&($.current.value=`${$.current.value.trimEnd()} ${t.url}`.trim(),M(!1))}),[t?.url]),(0,o.jsxs)(l,{...(0,a.Z)({id:"Run"}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,f.nK)(e)},children:[(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{alt:"Run",src:"/System/Icons/32x32/run.webp"}),(0,o.jsx)("figcaption",{children:S})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:w,children:"Open:"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{ref:$,autoComplete:"off",defaultValue:_[0],disabled:O,enterKeyHint:"go",id:w,onBlurCapture:e=>{let{relatedTarget:r}=e;!t?.componentWindow||t.componentWindow.contains(r)?$.current?.focus(x.eS):R(!1)},onFocusCapture:()=>R(!0),onKeyDownCapture:e=>{const{key:t}=e;"Enter"===t&&T($.current?.value.trim()),"Escape"===t&&((0,f.nK)(e),r("Run"))},onKeyUp:e=>{let{target:r}=e;return M(!r?.value)},spellCheck:"false",type:"text"}),(0,o.jsx)("select",{disabled:0===_.length,onChange:e=>{let{target:r}=e;$.current&&($.current.value=r.value,M(!1))},onClick:e=>{let{target:r}=e;r instanceof HTMLSelectElement&&-1!==r.selectedIndex&&(r.selectedIndex=-1)},children:_.map(((e,r)=>(0,o.jsx)("option",{value:e,children:e},`${e}-${r}`)))})]})]}),(0,o.jsxs)("nav",{children:[(0,o.jsx)(i.Z,{$active:I,disabled:Z||O,onClick:()=>T($.current?.value.trim()),children:"OK"}),(0,o.jsx)(i.Z,{disabled:O,onClick:()=>r("Run"),children:"Cancel"})]})]})}},5762:function(e,r,t){const o=t(4141).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
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
`;r.Z=o},1791:function(e,r,t){t.r(r);var o=t(9595);const n={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]};let i=!1;r.default=()=>(0,o.mb)(["/Program Files/eSheep/eSheep.js"]).then((()=>{if(window.Sheep){const e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});i?e.Start((()=>{const e=Object.keys(n).flatMap((e=>{const[,r]=n[e];return Array.from({length:r}).fill(e)})),r=Math.floor(Math.random()*e.length),[t]=n[e[r]];return t})()):(i=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}}))}}]);