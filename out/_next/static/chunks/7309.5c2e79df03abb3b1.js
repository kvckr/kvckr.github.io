"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7309],{8513:function(e,n,o){var r=o(5893),t=o(4393),i=o(2675),a=o(5152),l=o.n(a),s=o(7294);const d=l()((()=>o.e(6709).then(o.bind(o,6709))),{loadableGenerated:{webpack:()=>[6709]}});n.Z=e=>{let{id:n,useHook:o,StyledComponent:a,children:l}=e;const{processes:{[n]:{url:c=""}={}}}=(0,i.z)(),p=(0,s.useRef)(null),[f,u]=(0,s.useState)(!0),b=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return o(n,c,p,u,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(d,{}),(0,r.jsx)(a,{ref:p,style:b,...(0,t.Z)({id:n}),children:l})]})}},7309:function(e,n,o){o.r(n),o.d(n,{default:function(){return u}});var r=o(5893),t=o(8513),i=o(4141).ZP.div.withConfig({componentId:"sc-6ab2827b-0"})`
  article {
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-y: scroll;
    padding: 16px 32px;
    width: 100%;
    word-wrap: break-word;

    * {
      all: revert;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgba(27, 31, 35, 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }
  }
`,a=o(4899),l=o(5620),s=o(2675),d=o(1864),c=o(7294),p=o(9595),f=(e,n,o,r,t)=>{const{readFile:i}=(0,l.o)(),{prependFileToTitle:f}=(0,a.Z)(e),{open:u,processes:{[e]:{libs:b=[]}={}}={}}=(0,s.z)(),g=(0,c.useCallback)((async()=>{const e=await i(n),r=o.current?.querySelector("article");r instanceof HTMLElement&&(r.innerHTML=window.DOMPurify.sanitize(window.marked.parse(e.toString(),{headerIds:!1})),r.querySelectorAll("a").forEach((e=>e.addEventListener("click",(n=>{(0,p.nK)(n),(0,p.yk)(e.href)?u("VideoPlayer",{url:e.href}):window.open(e.href,"_blank","noopener, noreferrer")})))),r.scrollTop=0),f((0,d.basename)(n))}),[o,u,f,i,n]);(0,c.useEffect)((()=>{t&&(0,p.mb)(b).then((()=>{window.marked&&r(!1)}))}),[b,t,r]),(0,c.useEffect)((()=>{!t&&n&&g()}),[g,t,n])},u=e=>{let{id:n}=e;return(0,r.jsx)(t.Z,{StyledComponent:i,id:n,useHook:f,children:(0,r.jsx)("article",{})})}},4393:function(e,n,o){var r=o(6166),t=o(80),i=o(6050),a=o(5620),l=o(2675),s=o(6819),d=o(1864),c=o(7294),p=o(8680),f=o(9595);n.Z=e=>{let{callback:n,directory:o=p.Ll,id:u,onDragLeave:b,onDragOver:g,updatePositions:h}=e;const{url:x}=(0,l.z)(),{iconPositions:m,sortOrders:k,setIconPositions:w}=(0,s.k)(),{mkdirRecursive:v,updateFolder:y,writeFile:$}=(0,a.o)(),z=(0,c.useCallback)((async(e,n,o)=>{if(u)if(n){const r=(0,d.join)(p.Ll,e);await v(p.Ll),await $(r,n,!0)&&(o===i.v.UPDATE_URL&&x(u,r),y(p.Ll,e))}else o===i.v.UPDATE_URL&&x(u,e)}),[u,v,y,x,$]),{openTransferDialog:L}=(0,r.Z)();return{onDragLeave:b,onDragOver:e=>{g?.(e),(0,f.nK)(e)},onDrop:e=>{if(h&&e.target instanceof HTMLElement){const{files:n,text:r}=(0,t.p4)(e);if(0===n.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}const[e]=a;if(!e)return;if(e.startsWith(o)&&(0,d.basename)(e)===(0,d.relative)(o,e))return;a=a.map((e=>(0,d.basename)(e)))}else a=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!m[`${o}/${e}`])return e;let n=0,r="";do{n+=1,r=`${o}/${(0,d.basename)(e,(0,d.extname)(e))} (${n})${(0,d.extname)(e)}`}while(m[r]);return(0,d.basename)(r)})),(0,f.vi)(o,e.target,m,k,i,a,w)}(0,t.WG)(e,n||z,o,L,Boolean(u))}}}},4899:function(e,n,o){var r=o(2675),t=o(3989),i=o(7294),a=o(8680);n.Z=e=>{const{title:n}=(0,r.z)(),[o]=e.split(a.CC),{title:l}=t.Z[o]||{};return{appendFileToTitle:(0,i.useCallback)(((o,r)=>{const t=o?` - ${o}${r?` ${a.xy}`:""}`:"";n(e,`${l}${t}`)}),[e,l,n]),prependFileToTitle:(0,i.useCallback)(((o,r)=>{const t=o?`${r?`${a.xy} `:""}${o} - `:"";n(e,`${t}${l}`)}),[e,l,n])}}}}]);