"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3521,54],{8513:function(e,t,n){var r=n(5893),i=n(4393),a=n(2675),o=n(5152),s=n.n(o),c=n(7294);const l=s()((()=>n.e(6709).then(n.bind(n,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:o,children:s}=e;const{processes:{[t]:{url:u=""}={}}}=(0,a.z)(),d=(0,c.useRef)(null),[f,m]=(0,c.useState)(!0),w=(0,c.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,m,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(l,{}),(0,r.jsx)(o,{ref:d,style:w,...(0,i.Z)({id:t}),children:s})]})}},3521:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),i=n(8513),a=n(4141).ZP.div.withConfig({componentId:"sc-1d70034d-0"})`
  &.drop {
    &::before {
      color: #f1f1f1;
      content: "Drop rom file here";
      display: flex;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      left: 0;
      place-content: center;
      place-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`,o=n(6320),s=n(4899),c=n(5620),l=n(2675),u=n(1864),d=n(7294),f=n(8680),m=n(9595),w=n(54),p=n(8764).Buffer,S=(e,t,n,r,i)=>{const{exists:a,mkdirRecursive:S,readFile:h,updateFolder:b,writeFile:v}=(0,c.o)(),{linkElement:E,processes:{[e]:{closing:F=!1}={}}={}}=(0,l.z)(),{prependFileToTitle:g}=(0,s.Z)(e),y=(0,d.useRef)(),k=(0,d.useRef)(""),$=(0,d.useCallback)((async()=>{if(!t)return;if(n.current?.classList.remove("drop"),k.current){if(k.current!==t&&(k.current="",window.EJS_terminate?.(),n.current)){const e=document.createElement("div");e.id="emulator",[...n.current.children].forEach((e=>e.remove())),n.current.append(e),$()}return}k.current=t;const e=(0,u.extname)(t);window.EJS_gameName=(0,u.basename)(t,e);const[i,{core:s="",zip:c=!1}={}]=(e=>{const t=e.toLowerCase();return Object.entries(o.P).find((e=>{let[,{ext:n}]=e;return n.includes(t)}))||[]})(e),l=await h(t);window.EJS_gameUrl=(0,m.YS)(c?p.from(await(0,w.zipAsync)({[(0,u.basename)(t)]:l})):l),window.EJS_core=s;const d=`${(0,u.basename)(t)}.sav`,E=(0,u.join)(f.Tl,d);window.EJS_onGameStart=e=>{let{detail:{emulator:t}}=e;(async()=>{await a(E)&&t.loadState?.(await h(E)),r(!1),y.current=t})()},window.EJS_onSaveState=e=>{let{screenshot:t,state:n}=e;window.EJS_terminate?.(),n&&(async()=>{if(await a(f.Tl)||await S(f.Tl),await v(E,p.from(n),!0)){const e=(0,u.join)(f.Xo,f.Tl),n=(0,u.join)(f.Xo,`${E}${f.Qy}`);await a(e)||(await S(e),b((0,u.dirname)(f.Tl))),await v(n,p.from(t),!0),b(f.Tl,d)}})()},window.EJS_player="#emulator",window.EJS_biosUrl="",window.EJS_pathtodata="Program Files/EmulatorJs/",window.EJS_startOnLoaded=!0,window.EJS_RESET_VARS=!0,window.EJS_Buttons={cacheManage:!1,loadState:!1,quickLoad:!1,quickSave:!1,saveState:!1,screenRecord:!1,screenshot:!1},await(0,m.mb)(["Program Files/EmulatorJs/loader.js"],void 0,!0),g(`${window.EJS_gameName} (${i})`)}),[n,a,S,g,h,r,b,t,v]);(0,d.useEffect)((()=>{t?$():(r(!1),n.current?.classList.add("drop"))}),[n,$,r,t]),(0,d.useEffect)((()=>{if(!i){const t=n.current?.querySelector("canvas");t instanceof HTMLCanvasElement&&E(e,"peekElement",t)}return()=>{!i&&F&&y.current?.elements.buttons.saveState?.click()}}),[F,n,e,E,i])},h=e=>{let{id:t}=e;return(0,r.jsx)(i.Z,{StyledComponent:a,id:t,useHook:S,children:(0,r.jsx)("div",{id:"emulator"})})}},4393:function(e,t,n){var r=n(6166),i=n(80),a=n(6050),o=n(5620),s=n(2675),c=n(6819),l=n(1864),u=n(7294),d=n(8680),f=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:m,onDragLeave:w,onDragOver:p,updatePositions:S}=e;const{url:h}=(0,s.z)(),{iconPositions:b,sortOrders:v,setIconPositions:E}=(0,c.k)(),{mkdirRecursive:F,updateFolder:g,writeFile:y}=(0,o.o)(),k=(0,u.useCallback)((async(e,t,n)=>{if(m)if(t){const r=(0,l.join)(d.Ll,e);await F(d.Ll),await y(r,t,!0)&&(n===a.v.UPDATE_URL&&h(m,r),g(d.Ll,e))}else n===a.v.UPDATE_URL&&h(m,e)}),[m,F,g,h,y]),{openTransferDialog:$}=(0,r.Z)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(S&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,i.p4)(e);if(0===t.length&&""===r)return;const a={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,l.basename)(e)===(0,l.relative)(n,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(b[r]);return(0,l.basename)(r)})),(0,f.vi)(n,e.target,b,v,a,o,E)}(0,i.WG)(e,t||k,n,$,Boolean(m))}}}},4899:function(e,t,n){var r=n(2675),i=n(3989),a=n(7294),o=n(8680);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(o.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)(((n,r)=>{const i=n?` - ${n}${r?` ${o.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,a.useCallback)(((n,r)=>{const i=n?`${r?`${o.xy} `:""}${n} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}},54:function(e,t,n){n.r(t),n.d(t,{addEntryToZippable:function(){return c},addFileToZip:function(){return d},createZippable:function(){return s},isFileInZip:function(){return f},unarchive:function(){return m},unzip:function(){return l},zipAsync:function(){return u}});var r=n(1864),i=n(8680),a=n(9595),o=n(8764).Buffer;const s=(e,t)=>e.split("/").reduceRight(((e,t)=>({[t]:e})),[t,i.BF]),c=(e,t)=>{const[[n,r]]=Object.entries(t);return e[n]=n in e?c(e[n],t[n]):r,e},l=e=>new Promise(((t,r)=>{n.e(3778).then(n.bind(n,3778)).then((n=>{let{unzip:i}=n;return i(e,((e,n)=>e?r(e):t(n)))}))})),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.BF;return new Promise(((r,i)=>{n.e(3778).then(n.bind(n,3778)).then((n=>{let{zip:a}=n;return a(e,t,((e,t)=>e?i(e):r(t)))}))}))},d=async(e,t,n,r)=>o.from(await u(c(e.length>0&&await l(e)||{},s(n,await r(t))))),f=(e,t)=>new Promise(((r,i)=>{n.e(3778).then(n.bind(n,3778)).then((n=>{let{unzip:a}=n;return a(e,((e,n)=>e?i(e):r(Object.keys(n).includes(t))))}))})),m=async(e,t)=>{if(window.SevenZip||await(0,a.mb)(["System/7zip/7zz.es6.js"]),!window.SevenZip)return{};const n=await window.SevenZip(),i=(0,r.basename)(e),s=(0,r.join)("/",(0,r.basename)(e,(0,r.extname)(e)));n.FS.mkdir(s),n.FS.chdir(s);const c=n.FS.open(i,"w+");n.FS.write(c,t,0,t.length),n.FS.close(c),n.callMain(["-y","x",i]);const l=n.FS.readdir(s),u=e=>(t,a)=>{if([".","..",i].includes(a))return t;const c=(0,r.join)(e,a),l=c.replace(s,"");try{n.FS.chmod(c,511)}catch{}return Object.assign(t,n.FS.isDir(n.FS.stat(c).mode)?{[(0,r.join)(l,"/")]:o.from(""),...n.FS.readdir(c).reduce(u(c),{})}:{[l]:n.FS.readFile(c,{flags:"r"})}),t};return l.reduce(u(s),{})}}}]);