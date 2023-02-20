"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6207],{6207:function(e,t,n){n.d(t,{Z:function(){return fe}});var r=n(5893),a=n(4668),o=n(9893),i=n(5727),l=n(1773),s=n(4141),c=s.ZP.li.withConfig({componentId:"sc-ec83127d-0"})`
  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      width: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }
    }

    &:hover {
      background-color: hsla(0, 0%, 35%, 70%);
      border: 1px solid hsla(0, 0%, 45%, 70%);
    }
  }
`,u=n(8541);const d={icon:{StyledFileEntry:i.Z,StyledFileManager:l.Z},list:{StyledFileEntry:c,StyledFileManager:u.Z}},g={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}};var b=n(7294),m=n(626),f=n(8680);const p=e=>{let{baseIcon:t,icon:n,isFirstImage:a,name:o,totalSubIcons:i,view:l}=e;const s=(0,b.useMemo)((()=>g[[f.MB,f.EV].includes(n)||n.startsWith("blob:")?l:"sub"]),[n,l]),c=(0,b.useMemo)((()=>{if(n===f.EV)return{zIndex:3};if(t===f._l){return{objectFit:"cover",transform:(a&&i-1>1?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)")+" translateZ(0px)",zIndex:a?2:1}}}),[t,n,a,i]);return(0,r.jsx)(m.Z,{$eager:n===f.MB,alt:o,src:n,style:c,...s})};var h=e=>{let{icon:t,name:n,showShortcutIcon:a,subIcons:o,view:i}=e;const l=(0,b.useMemo)((()=>a?o?.filter((e=>e!==f.MB)):o),[a,o]),s=(0,b.useMemo)((()=>l?.filter((e=>e!==t))||[]),[t,l]);return(0,r.jsx)(r.Fragment,{children:s.map(((e,a)=>(0,r.jsx)(p,{baseIcon:t,icon:e,isFirstImage:0===a,name:n,totalSubIcons:s.length,view:i},e)))})},w=n(5620),v=n(2675),y=n(3989),A=n(6819),x=n(1816),E=n(1864),k=e=>{const{setForegroundId:t}=(0,A.k)(),{createPath:r,updateFolder:a}=(0,w.o)(),{minimize:o,open:i,url:l}=(0,v.z)(),s=(0,x.R)();return(0,b.useCallback)((async(c,u)=>{const{preferProcessIcon:d,singleton:g,icon:b}=y.Z[c]||{},m=Object.keys(s.current).find((e=>e.startsWith(`${c}${f.CC}`)));let p=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:o}=await n.e(3201).then(n.bind(n,3201)),i=await o(e);p=(0,E.join)(f.Ll,await r(await t(e,i),f.Ll,i)),a(f.Ll,(0,E.basename)(p))}g&&m?(l(m,p),s.current[m].minimized&&o(m),t(m)):i(c,{url:p},g||u===f._l||d?b:u)}),[r,o,i,s,t,l,a,e])},S=n(4053);const M=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),F=[".aac",".mp3",".ogg",".wav"],$=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),L=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"],D=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),O=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var C=n(8764).Buffer,j=(e,t,r,i,l,s,c,u,d)=>{let{archiveFiles:g,deleteLocalPath:m,downloadFiles:p,extractFiles:h,newShortcut:x}=l,{blurEntry:j,focusEntry:I}=s;const{open:R,url:T}=(0,v.z)(),{setWallpaper:z}=(0,A.k)(),P=(0,E.basename)(r),Z=c.includes(P),W=k(e),{copyEntries:B,createPath:N,lstat:K,mapFs:U,moveEntries:H,readFile:G,rootFs:V,unMapFs:X,updateFolder:Q}=(0,w.o)(),{contextMenu:Y}=(0,S.H)(),{onContextMenuCapture:_,...J}=(0,b.useMemo)((()=>Y?.((()=>{const l=(0,E.extname)(e).toLowerCase(),{process:s=[]}=l in a.Z?a.Z[l]:{},b=s.filter((e=>e!==t)),w=b.filter((e=>e!==t)),v=()=>1!==c.length&&Z?[...new Set([r,...c.map((e=>(0,E.join)((0,E.dirname)(r),e)))])]:[r],A=[],k=(0,E.extname)(r).toLowerCase(),S=k===f.zm,j=V?.mountList.some((e=>e===r&&"FileSystemAccess"===V?.mntMap[e]?.getName()));if(!d&&!j){const e=(0,o.Wd)(l);if(A.push({action:()=>H(v()),label:"Cut"},{action:()=>B(v()),label:"Copy"},f.Os),(e||S||!k&&!l)&&A.push({action:()=>v().forEach((async t=>{const n=e&&!(await K(t)).isDirectory()?e:"FileExplorer";x(t,n)})),label:"Create shortcut"}),A.push({action:()=>v().forEach((e=>m(e))),label:"Delete"},{action:()=>i(P),label:"Rename"}),r)if(r===(0,E.join)(f.Ll,f.Bb)){if((0,f.A)()){const e=(e,t)=>{U(e,t).then((e=>{Q("/",e),R("FileExplorer",{url:(0,E.join)("/",e)})})).catch((()=>{}))};A.unshift({action:()=>e("/"),label:"Map directory"},...navigator.storage?.getDirectory?[{action:async()=>e("/OPFS",await navigator.storage.getDirectory()),label:"Map OPFS"}]:[],f.Os)}}else{A.unshift(f.Os),(f.Ao.has(k)||f.my.has(k))&&A.unshift({action:()=>h(r),label:"Extract Here"});const o=M.has(k),i=D.has(k),l=$.has(k);if(o||i||l){const e=o||l,t=e?o?F:L:O;A.unshift(f.Os,{label:"Convert to",menu:t.filter((e=>e!==k)).map((t=>{const a=t.replace(".","");return{action:async()=>{const t=await Promise.all(v().map((async e=>[e,await G(e)]))),o=e?(await n.e(2145).then(n.bind(n,2145))).transcode:(await n.e(8258).then(n.bind(n,8258))).convert,i=await o(t,a);await Promise.all(i.map((async e=>{let[t,n]=e;const a=(0,E.basename)(t),o=(0,E.dirname)(r);Q(o,await N(a,o,n))})))},label:a.toUpperCase()}}))})}f.Tj.includes(k)&&A.unshift(f.Os,{label:"Convert to",menu:f.Tj.filter((e=>e!==k)).map((e=>{const t=e.replace(".","");return{action:()=>{v().forEach((async e=>{const a=`${(0,E.dirname)(e)}/${(0,E.basename)(e,(0,E.extname)(e))}.${t}`,{convertSheet:o}=await n.e(2282).then(n.bind(n,2282)),i=await o(await G(e),t),l=(0,E.dirname)(r);Q(l,await N((0,E.basename)(a),l,C.from(i)))}))},label:t.toUpperCase()}}))}),".m3u"!==k&&f.uH.has(k)&&A.unshift(f.Os,{action:()=>{v().forEach((async e=>{const t=`${(0,E.dirname)(e)}/${(0,E.basename)(e,(0,E.extname)(e))}.m3u`,{createM3uPlaylist:a,tracksFromPlaylist:o}=await n.e(5588).then(n.bind(n,5588)),i=a(await o((await G(e)).toString(),(0,E.extname)(e))),l=(0,E.dirname)(r);Q(l,await N((0,E.basename)(t),l,C.from(i)))}))},label:"Convert to M3U"}),A.unshift({action:()=>g(v()),label:"Add to archive..."},{action:()=>p(v()),label:"Download"}),S||"FileExplorer"===t||a.y.forEach((t=>{t===e||w.includes(t)||w.push(t)}))}A.unshift(f.Os)}if(j&&A.push(f.Os,{action:()=>X(r),label:"Disconnect"}),f.ru.has(l)&&A.unshift({action:()=>{R("Paint",{url:e})},label:"Edit"}),f.lM.has(k)&&!f.GM.has(k)&&A.unshift({label:"Set as desktop background",menu:[{action:()=>z(r,"fill"),label:"Fill"},{action:()=>z(r,"fit"),label:"Fit"},{action:()=>z(r,"stretch"),label:"Stretch"},{action:()=>z(r,"tile"),label:"Tile"},{action:()=>z(r,"center"),label:"Center"}]}),w.length>0&&A.unshift({label:"Open with",menu:w.map((e=>{const{icon:t,title:n}=y.Z[e]||{};return{action:()=>{W(e,t)},icon:t,label:n}}))}),t){const{icon:n}=y.Z[t]||{};if(S&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===l||".zip"===l;A.unshift({action:()=>R("FileExplorer",{url:(0,E.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}u&&"FileExplorer"===t&&!f.my.has(l)&&A.unshift({action:()=>{W(t,n)},label:"Open in new window"}),A.unshift({action:()=>{"FileExplorer"===t&&u&&!f.my.has(l)?T(u,e):W(t,n)},icon:n,label:"Open",primary:!0})}return A}))),[g,P,T,Y,B,N,m,p,h,u,c,Z,K,U,H,x,R,W,r,t,G,d,V?.mntMap,V?.mountList,i,z,X,Q,e]);return{onContextMenuCapture:e=>{Z||(j(),I(P)),_(e)},...J}},I=n(4393),R=n(9019),T=n(1087),z=n(5152),P=n.n(z),Z=n(6315),W=n(9595),B=n(5786),N=n(8764).Buffer;const K=P()((()=>n.e(7043).then(n.bind(n,7043)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[7043]}}),U=P()((()=>n.e(2190).then(n.bind(n,2190))),{loadableGenerated:{webpack:()=>[2190]}}),H=[],G=[];var V=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:i,focusedEntries:l,focusFunctions:c,hideShortcutIcon:u,isLoadingFileManager:d,loadIconImmediately:p,name:y,path:A,readOnly:x,renaming:S,selectionRect:M,setRenaming:F,stats:$,useNewFolderIcon:L,view:D}=e;const{blurEntry:O,focusEntry:C}=c,{url:z}=(0,v.z)(),[{comment:P,getIcon:V,icon:X,pid:Q,subIcons:Y,url:_},J]=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[r,a]=(0,b.useState)((()=>({icon:"",pid:"",url:""}))),i=(0,b.useRef)(!1),l=e=>{a(e),i.current=!1},{fs:s,rootFs:c}=(0,w.o)();return(0,b.useEffect)((()=>{if(!i.current&&s&&c){i.current=!0;const r=(0,E.extname)(e).toLowerCase();!r||t&&!f.my.has(r)&&"FileSystemAccess"!==c.mntMap[e]?.getName()?(0,o.g7)(s,c,e,t,n,l):(0,o.Z7)(s,e,r,l)}}),[s,t,e,c,n]),[r,a]}(A,$.isDirectory(),L),q=k(_),{createPath:ee,exists:te,mkdirRecursive:ne,pasteList:re,readFile:ae,stat:oe,unlink:ie,updateFolder:le,writeFile:se}=(0,w.o)(),[ce,ue]=(0,b.useState)(!1),{formats:de,sizes:ge}=(0,s.Fg)(),be="list"===D,me=(0,b.useRef)(null),pe=(0,b.useRef)(null),he=(0,E.basename)(A),we=(0,E.extname)(_).toLowerCase(),ve=(0,b.useMemo)((()=>f.lM.has(we)||f.qy.has(we)||(0,W.yk)(_)),[_,we]),ye=1===l.length&&l[0]===he,Ae=(0,E.extname)(A).toLowerCase(),xe=Ae===f.zm,Ee=xe?_:A,ke=(0,I.Z)({callback:async(e,t)=>{if(!l.includes(he)){const n=await ee(e,Ee,t);n&&le(Ee,n)}},directory:Ee,onDragLeave:()=>me.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>me.current?.parentElement?.classList.add("focus-within")}),Se="FileExplorer"===Q,Me=(0,b.useMemo)((()=>((e,t,n,r)=>{const a=e.replace(/-/g,f.Zf),{lines:i}=(0,o.oc)(a,t,n,r);return i.length>2?`${(e.includes(" ")?i.slice(0,2).join(""):i[0]).slice(0,-3)}...`:a})(y,ge.fileEntry.fontSize,de.systemFont,ge.fileEntry[be?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[de.systemFont,be,y,ge.fileEntry]),Fe=(0,b.useRef)(null),$e=(0,b.useRef)(!1),Le=(0,b.useRef)(!1),De=(0,b.useRef)(),Oe=(0,b.useCallback)((async()=>{if($.isDirectory())return"";if(xe)return P||(_?_.startsWith("http:")||_.startsWith("https:")?_:`Location: ${(0,E.basename)(_,(0,E.extname)(_))} (${(0,E.dirname)(_)})`:"");const e=a.Z[Ae]?.type||`${Ae.toUpperCase().replace(".","")} File`,t=$.size<0?await oe(A):$,{size:n}=t,r=(0,o.GA)(A,t),i=(0,W.UR)(n);return`Type: ${e}${"-1"===i?"":`\nSize: ${i}`}\nDate modified: ${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(f.ZW,de.dateModified).format(r)}`}),[P,Ae,de.dateModified,xe,A,oe,$,_]),[Ce,je]=(0,b.useState)(),Ie=(0,b.useCallback)((()=>{Se&&n&&!f.my.has(we)?(z(n,_),O()):Se&&be?ue((e=>!e)):q(Q,ve?void 0:X)}),[O,z,n,X,ve,be,q,Se,Q,_,we]),Re=(0,b.useMemo)((()=>S?{pointerEvents:"all"}:void 0),[S]);return(0,b.useEffect)((()=>{if(!d&&!$e.current){const e=async()=>{if(X.startsWith("blob:")||X.startsWith("data:")){if(X.startsWith("data:image/jpeg;base64,"))return;$e.current=!0;const e=(0,E.join)(f.Xo,`${A}${f.Qy}`);if(".ico"!==we&&!_.startsWith(f.OT)&&!_.startsWith(f.P7)&&!await te(e)&&Fe.current instanceof HTMLImageElement){const t=async()=>{if(Fe.current instanceof HTMLImageElement){const n=()=>(G.shift(),G[0]?.());let r="";if(Fe.current.currentSrc.startsWith("data:image/gif;base64,"))r=Fe.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Fe.current,{naturalHeight:a,naturalWidth:o}=Fe.current,i=o/a;let l,s;i!==n/e&&(o>a?l=e/i:s=n*i);const c=await(0,W.mZ)(),u=await(c?.toCanvas(Fe.current,{height:l,skipAutoScale:!0,style:{objectPosition:l?"top":s?"left":void 0},width:s}));u&&!(0,W.Tv)(u)?r=u.toDataURL("image/png"):setTimeout(t,f.jx.WINDOW)}r&&G.push((async()=>{const t=(0,E.dirname)(e);await ne(t);const a=N.from(r.replace(/data:(.*);base64,/,""),"base64");return await se(e,a,!0),J((e=>({...e,icon:(0,W.YS)(a)}))),le(t,(0,E.basename)(e)),n()})),1===G.length&&await G[0]()}};Fe.current.complete?t():Fe.current.addEventListener("load",t,f.K7)}}else{const e=(0,E.join)(f.Xo,`${A}${f.Qy}`);if(await te(e)){$e.current=!0;const t=await ae(e);if(t.length>=f.zj)J((e=>({...e,icon:(0,W.YS)(t)})));else try{await ie(e),le((0,E.dirname)(A))}catch{}}else!Le.current&&me.current&&"function"==typeof V&&(Le.current=!0,new IntersectionObserver(((e,t)=>{let[{intersectionRatio:n}]=e;n>0&&(t.disconnect(),De.current=new AbortController,V(De.current.signal))}),{root:i.current,rootMargin:"5px"}).observe(me.current))}};e()}}),[te,i,V,X,d,ne,A,ae,J,ie,le,_,we,se]),(0,b.useEffect)((()=>()=>{try{De?.current?.abort?.()}catch{}}),[]),(0,b.useLayoutEffect)((()=>{if(me.current&&i.current){const e=l.includes(he),t=H.includes(he),n=e||t;if(e&&t&&H.splice(H.indexOf(he),1),M){const e=((e,t,n,r)=>{const{x:a=0,y:o=0,width:i=0,height:l=0}=n,s=new DOMRect(a,o,Number(i),Number(l));return!(e.left-t.left>=s.right||e.top-t.top>=s.bottom||e.right-t.left<=s.left||e.bottom-t.top+r<=s.top)})(me.current.getBoundingClientRect(),i.current.getBoundingClientRect(),M,i.current.scrollTop);e&&!n?(H.push(he),C(he),me.current.focus(f.eS)):!e&&n&&O(he)}else n&&1===l.length&&!me.current.contains(document.activeElement)&&(O(),C(he),me.current.focus(f.eS))}}),[O,i,he,C,l,M]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{ref:me,"aria-label":y,onMouseOver:()=>Oe().then(je),title:Ce,...be&&{...f.Cz,as:R.m.button},...(0,T.Z)(Ie,be),...Se&&ke,...j(_,Q,A,F,t,c,l,n,x),children:(0,r.jsxs)("figure",{ref:pe,style:Re,...be&&(0,B.G)(pe.current),children:[(0,r.jsx)(m.Z,{ref:Fe,$eager:p,$moving:"move"===re[A],alt:y,src:X,...g[D]}),(0,r.jsx)(h,{icon:X,name:y,showShortcutIcon:Boolean(u||$.systemShortcut),subIcons:Y,view:D}),S?(0,r.jsx)(U,{name:y,path:A,renameFile:(e,n)=>{t.renameFile(e,n),F("")}}):(0,r.jsx)("figcaption",{children:ye&&y.length!==Me.length?y:Me}),be&&Se&&(0,r.jsx)(K,{flip:ce})]})}),ce&&(0,r.jsx)(fe,{url:_,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};const X=s.vJ`
  body {
    pointer-events: none;
  }
`,Q=s.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;var Y=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(Q,{...e})]});const _=f.i2/60;var J=e=>{const[t,n]=(0,b.useState)((()=>Object.create(null))),[r,a]=(0,b.useState)((()=>Object.create(null))),{x:o,y:i}=t,{height:l,width:s}=r,c=(0,b.useRef)(),{menu:u,setMenu:d}=(0,S.H)(),g="number"==typeof o&&"number"==typeof i,m=()=>{a(Object.create(null)),n(Object.create(null))},f="number"==typeof s&&"number"==typeof l&&g,p=f?{height:`${Math.abs(Number(l))}px`,transform:`translate(\n            ${Number(o)+(Number(s)<0?Number(s):0)}px,\n            ${Number(i)+(Number(l)<0?Number(l):0)}px)`,width:`${Math.abs(Number(s))}px`}:{};return{isSelecting:f,selectionEvents:{onMouseDown:t=>{let{clientX:r,clientY:o,target:i}=t;if(i===e.current){const{scrollTop:t}=e.current,{x:i=0,y:l=0}=e.current.getBoundingClientRect();a(Object.create(null)),n({x:r-i,y:o-l+t}),u&&d(Object.create(null))}},...g?{onMouseLeave:m,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:l=0}=e.current||{},{x:s=0,y:u=0}=e.current?.getBoundingClientRect()||{};c.current||(a({height:r-u-(i||0)+l,width:n-s-(o||0)}),c.current=window.setTimeout((()=>{c.current=void 0}),_))},onMouseUp:m}:{}},selectionRect:f?{...t,...r}:void 0,selectionStyling:p}},q=(e,t,n,r,a)=>{let{blurEntry:o,focusEntry:i}=t;const l=(0,b.useRef)(n.current?.lastElementChild),[s,c]=(0,b.useState)(-1),{iconPositions:u,sortOrders:d,setIconPositions:g,setSortOrder:m}=(0,A.k)(),p=(0,b.useRef)(),h=(0,b.useRef)(Object.create(null)),w=(0,b.useRef)(!1),v=e=>{let{clientX:t,clientY:n}=e;h.current={...h.current,x:t,y:n}},y="MAIN"===n.current?.parentElement?.tagName,x=t=>r=>{(0,W.nK)(r),a&&e.length>0?((0,W.vi)(t,n.current,u,d,h.current,e,g),n.current?.removeEventListener("dragover",v)):-1!==s&&m(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(s,0,...e),n})),o()},k=t=>n=>{let{target:r}=n;if(!a&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},a=e.includes(t);c(a?-1:[...n].indexOf(r))}},S=(t,r,o)=>s=>{if(o)(0,W.nK)(s);else{if(i(r),s.dataTransfer.setData("application/json",JSON.stringify(e.length<=1?[(0,E.join)(t,r)]:e.map((e=>(0,E.join)(t,e))))),e.length>1&&p.current){const r=Object.keys(u);a&&!w.current&&(l.current&&n.current?.lastElementChild&&n.current.lastElementChild!==l.current||e.every((e=>r.includes(`${t}/${e}`))))&&(w.current=!0);const o=y?s.nativeEvent.clientX:s.nativeEvent.offsetX,i=w.current?s.nativeEvent.clientY:s.nativeEvent.offsetY;s.dataTransfer.setDragImage(p.current,o,i),a&&!w.current&&(w.current=!0)}Object.assign(s.dataTransfer,{effectAllowed:"move"}),a&&(h.current=e.length>1?{offsetX:s.nativeEvent.offsetX,offsetY:s.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",v,{passive:!0}))}},M=(0,b.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){p.current?p.current.src="":p.current=new Image;const t=await(0,W.mZ)(),r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:f.RJ,skipAutoScale:!0}));r&&(p.current.src=r)}}}),[n]),F=(0,b.useRef)();return(0,b.useEffect)((()=>{n.current?.lastElementChild&&!l.current&&(l.current=n.current.lastElementChild)}),[n,e]),(0,b.useEffect)((()=>{F.current&&window.clearTimeout(F.current),F.current=window.setTimeout((()=>{F.current=void 0,M()}),f.i2/2)}),[e,M]),(0,b.useEffect)((()=>{!r&&e.length>1&&M()}),[e.length,r,M]),(e,t,n)=>({draggable:!0,onDragEnd:x(e),onDragOver:k(t),onDragStart:S(e,t,n),style:y?u[(0,E.join)(e,t)]:void 0})},ee=n(6166),te=n(80),ne=(e,t,n,r,a,o,i,l,s)=>{let{blurEntry:c,focusEntry:u}=a,{newPath:d,pasteToFolder:g}=o;const{copyEntries:m,deletePath:p,moveEntries:h}=(0,w.o)(),{url:y}=(0,v.z)(),{openTransferDialog:x}=(0,ee.Z)(),{foregroundId:k}=(0,A.k)();return(0,b.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!k&&t===f.Ll||k===l)&&(e.stopImmediatePropagation?.(),(0,te.W)(e.clipboardData.files,t,d).then(x))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[k,l,d,x,t]),(0,b.useCallback)((a=>o=>{if("list"===s)return;const{ctrlKey:d,key:b,target:w,shiftKey:v}=o;if(!v)if(d)switch(b.toLowerCase()){case"a":if((0,W.nK)(o),w instanceof HTMLOListElement){const[e]=w.querySelectorAll("button");e?.focus(f.eS)}Object.keys(e).forEach((e=>u(e)));break;case"c":(0,W.nK)(o),m(n.map((e=>(0,E.join)(t,e))));break;case"x":(0,W.nK)(o),h(n.map((e=>(0,E.join)(t,e))));break;case"v":o.stopPropagation(),g()}else switch(b){case"F2":a&&((0,W.nK)(o),r(a));break;case"F5":l&&((0,W.nK)(o),i());break;case"Delete":n.length>0&&((0,W.nK)(o),n.forEach((async e=>{const n=(0,E.join)(t,e);await p(n),i(void 0,n)})),c());break;case"Backspace":l&&((0,W.nK)(o),y(l,(0,E.dirname)(t)));break;case"Enter":w instanceof HTMLButtonElement&&((0,W.nK)(o),w.dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})));break;default:if(b.startsWith("Arrow")){if((0,W.nK)(o),!(w instanceof HTMLElement))return;let e=w;if(!(w instanceof HTMLButtonElement||(e=w.querySelector("button"),e)))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let i="ArrowUp"===b||"ArrowDown"===b?document.elementFromPoint(t,n+("ArrowUp"===b?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===b?-a:2*a),n);if(i instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...i.children],n=e.indexOf(t);"ArrowUp"!==b&&"ArrowDown"!==b||(i=e["ArrowUp"===b?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}(i?.closest("button")||e)?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[c,y,m,p,e,u,n,l,h,g,r,i,t,s])},re=e=>{const[t,n]=(0,b.useState)([]),r=(0,b.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),a=(0,b.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),o=t=>{let{relatedTarget:n}=t;n instanceof HTMLElement&&e.current!==n&&e.current?.contains(n)||r()};return{blurEntry:r,focusEntry:a,focusableEntry:e=>{const n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,W.Wy)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onMouseDown:t=>{let{ctrlKey:o}=t;o?n?r(e):a(e):n||(r(),a(e))}}},focusedEntries:t}},ae=n(6050),oe=n(8764).Buffer;const ie=(0,o.sK)(".whtml"),le=(0,o.sK)(".txt"),se={day:"2-digit",hour:"2-digit",hour12:!1,minute:"2-digit",month:"2-digit",second:"2-digit",year:"numeric"};let ce,ue=2;var de=(e,t,r)=>{let{addToFolder:a,newPath:o,pasteToFolder:i,sortByOrder:[[l,s],c]}=t;const{contextMenu:u}=(0,S.H)(),{mapFs:d,pasteList:g={},readFile:m,writeFile:p,updateFolder:h}=(0,w.o)(),{setWallpaper:y,setIconPositions:x,wallpaperImage:k}=(0,A.k)(),M=(0,b.useCallback)((e=>{if("VANTA"===e){ue-=1;const e=0===ue;y("VANTA"+(e?" WIREFRAME":"")),e&&(ue=2)}else ue=2,y(e)}),[y]),{open:F}=(0,v.z)(),$=(0,b.useCallback)(((t,n)=>{x((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,E.dirname)(n)!==e}))))),c(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,a]=n;return[e,r===e?!a:t]})(t,n))}),[x,c,e]),L=(0,b.useCallback)((async()=>{if(ce){const{active:e}=ce;if(ce.getTracks().forEach((e=>e.stop())),ce=void 0,e)return}ce=await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:!0,video:{frameRate:30}});const[e]=ce.getVideoTracks(),{height:t,width:r}=e.getSettings(),a=new MediaRecorder(ce,{bitsPerSecond:t&&r?t*r*30:void 0,mimeType:"video/webm"}),o=`Screen Capture ${new Intl.DateTimeFormat(f.ZW,se).format(new Date).replace(/[/:]/g,"-").replace(",","")}.webm`,i=(0,E.join)(f.Ll,o),l=Date.now();let s=!1;a.start(),a.addEventListener("dataavailable",(async e=>{const{data:t}=e;if(t){const e=oe.from(await t.arrayBuffer());if(await p(i,s?oe.concat([await m(i),e]):e,s),"inactive"===a.state){const{default:e}=await n.e(6027).then(n.t.bind(n,6027,23));e((0,W.V4)(await m(i)),Date.now()-l,(async e=>{await p(i,oe.from(await e.arrayBuffer()),!0),h(f.Ll,o)}))}s=!0}}))}),[m,h,p]);return(0,b.useMemo)((()=>u?.((()=>{const t={action:()=>a(),label:"Add file(s)"},n={action:()=>d(e).then((t=>{h(e,t),F("FileExplorer",{url:(0,E.join)(e,t)})})).catch((()=>{})),label:"Map directory"},c=(0,f.A)()?[t,n]:[t];return[{label:"Sort by",menu:[{action:()=>$("name",!0),label:"Name",toggle:"name"===l},{action:()=>$("size",!1),label:"Size",toggle:"size"===l},{action:()=>$("type",!0),label:"Item type",toggle:"type"===l},{action:()=>$("date",!1),label:"Date modified",toggle:"date"===l},f.Os,{action:()=>$("",!0),label:"Ascending",toggle:s},{action:()=>$("",!1),label:"Descending",toggle:!s}]},{action:()=>h(e),label:"Refresh"},...r?[f.Os,{label:"Background",menu:[{action:()=>M("APOD"),label:"APOD",toggle:k.startsWith("APOD")},{action:()=>M("COASTAL_LANDSCAPE"),label:"Coastal Landscape",toggle:"COASTAL_LANDSCAPE"===k},{action:()=>M("HEXELLS"),label:"Hexells",toggle:"HEXELLS"===k},{action:()=>M("MATRIX 2D"),label:"Matrix (2D)",toggle:"MATRIX 2D"===k},{action:()=>M("MATRIX 3D"),label:"Matrix (3D)",toggle:"MATRIX 3D"===k},{action:()=>M("SLIDESHOW"),label:"Picture Slideshow",toggle:"SLIDESHOW"===k},{action:()=>M("VANTA"),label:"Vanta Waves"+("VANTA WIREFRAME"===k?" (Wireframe)":""),toggle:k.startsWith("VANTA")}]},...r&&"mediaDevices"in navigator&&"getDisplayMedia"in navigator.mediaDevices&&window.MediaRecorder?[{action:L,label:ce?.active?"Stop screen capture":"Capture screen"}]:[]]:[],f.Os,...c,{action:()=>F("Terminal",{url:e}),label:"Open Terminal here"},{action:()=>i(),disabled:0===Object.keys(g).length,label:"Paste"},f.Os,{label:"New",menu:[{action:()=>o("New folder",void 0,"rename"),icon:f.XN,label:"Folder"},f.Os,{action:()=>o("New Rich Text Document.whtml",oe.from(""),"rename"),icon:ie,label:"Rich Text Document"},{action:()=>o("New Text Document.txt",oe.from(""),"rename"),icon:le,label:"Text Document"}]},...r?[f.Os,{action:()=>F("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[a,L,u,s,r,d,o,F,g,i,M,l,h,$,e,k])},ge=n(3564);const be=P()((()=>n.e(9808).then(n.bind(n,9808))),{loadableGenerated:{webpack:()=>[9808]}}),me=P()((()=>n.e(6709).then(n.bind(n,6709))),{loadableGenerated:{webpack:()=>[6709]}});var fe=e=>{let{allowMovingDraggableEntries:t,hideFolders:n,hideLoading:a,hideScrolling:o,hideShortcutIcons:i,id:l,isDesktop:s,loadIconsImmediately:c,preloadShortcuts:u,readOnly:g,showStatusBar:m,skipFsWatcher:p,skipSorting:h,url:v,useNewFolderIcon:y,view:A}=e;const[x,k]=(0,b.useState)(v),[S,M]=(0,b.useState)(""),[F,$]=(0,b.useState)(!1),L=(0,b.useRef)(null),{focusedEntries:D,focusableEntry:O,...C}=re(L),{fileActions:j,files:R,folderActions:T,isLoading:z,updateFiles:P}=(0,ae.Z)(v,M,C,{hideFolders:n,hideLoading:a,preloadShortcuts:u,skipFsWatcher:p,skipSorting:h}),{mountFs:Z,rootFs:W,stat:B}=(0,w.o)(),{StyledFileEntry:N,StyledFileManager:K}=d[A],{isSelecting:U,selectionRect:H,selectionStyling:G,selectionEvents:X}=J(L),Q=q(D,C,L,U,t),_=(0,I.Z)({callback:T.newPath,directory:v,updatePositions:t}),ee=de(v,T,s),te=!a&&z||v!==x,oe=ne(R,v,D,M,C,T,P,l,A),[ie,le]=(0,b.useState)("prompt"),se=(0,b.useRef)(!1),ce=(0,b.useMemo)((()=>""===S?oe():void 0),[oe,S]);return(0,b.useEffect)((()=>{se.current||"granted"===ie||"FileSystemAccess"!==W?.mntMap[x]?.getName()||(se.current=!0,(0,ge.ZK)(x).then((e=>{const t="granted"===e;e&&!t||(le("granted"),t&&P())})).catch((e=>{"Permission already granted"===e.message&&le("granted")})).finally((()=>{se.current=!1})))}),[x,ie,W?.mntMap,P]),(0,b.useEffect)((()=>{!F&&f.my.has((0,E.extname)(v).toLowerCase())&&(async()=>{(await B(v)).isDirectory()||$((e=>(e||Z(v).then((()=>setTimeout(P,100))).catch((()=>{})),!0)))})()}),[Z,F,B,P,v]),(0,b.useEffect)((()=>{v!==x&&(T.resetFiles(),k(v),le("denied"))}),[x,T,v]),(0,b.useEffect)((()=>{te||L.current?.focus(f.eS)}),[te]),(0,r.jsxs)(r.Fragment,{children:[te?(0,r.jsx)(me,{}):(0,r.jsxs)(K,{ref:L,$scrollable:!o,onKeyDown:ce,...!g&&{$selecting:U,..._,...ee,...X},...f.LL,children:[U&&(0,r.jsx)(Y,{style:G}),Object.keys(R).map((e=>(0,r.jsx)(N,{$selecting:U,$visible:!z,...!g&&Q(v,e,S===e),...""===S&&{onKeyDown:oe(e)},...O(e),children:(0,r.jsx)(V,{fileActions:j,fileManagerId:l,fileManagerRef:L,focusFunctions:C,focusedEntries:D,hideShortcutIcon:i,isLoadingFileManager:z,loadIconImmediately:c,name:(0,E.basename)(e,f.zm),path:(0,E.join)(v,e),readOnly:g,renaming:S===e,selectionRect:H,setRenaming:M,stats:R[e],useNewFolderIcon:y,view:A})},e)))]}),m&&(0,r.jsx)(be,{count:te?0:Object.keys(R).length,directory:v,fileDrop:_,selected:D})]})}},4393:function(e,t,n){var r=n(6166),a=n(80),o=n(6050),i=n(5620),l=n(2675),s=n(6819),c=n(1864),u=n(7294),d=n(8680),g=n(9595);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:b,onDragLeave:m,onDragOver:f,updatePositions:p}=e;const{url:h}=(0,l.z)(),{iconPositions:w,sortOrders:v,setIconPositions:y}=(0,s.k)(),{mkdirRecursive:A,updateFolder:x,writeFile:E}=(0,i.o)(),k=(0,u.useCallback)((async(e,t,n)=>{if(b)if(t){const r=(0,c.join)(d.Ll,e);await A(d.Ll),await E(r,t,!0)&&(n===o.v.UPDATE_URL&&h(b,r),x(d.Ll,e))}else n===o.v.UPDATE_URL&&h(b,e)}),[b,A,x,h,E]),{openTransferDialog:S}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{f?.(e),(0,g.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const o={x:e.clientX,y:e.clientY};let i=[];if(r){try{i=JSON.parse(r)}catch{}const[e]=i;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;i=i.map((e=>(0,c.basename)(e)))}else i=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);i=i.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,g.vi)(n,e.target,w,v,o,i,y)}(0,a.WG)(e,t||k,n,S,Boolean(b))}}}},5727:function(e,t,n){const r=n(4141).ZP.li.withConfig({componentId:"sc-511dcb1e-0"})`
  display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      bottom: -1px;
      content: "";
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.text}};
        font-size: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.fontSize}};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px;
        text-shadow: ${e=>{let{theme:t}=e;return t.colors.fileEntry.textShadow}};
        word-break: break-word;
      }

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};
        width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.background}};

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.border}`}};
    }
  }

  &.focus-within {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.backgroundFocused}};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocused}`}};
    }

    &:hover {
      background-color: ${e=>{let{theme:t,$selecting:n}=e;return n?t.colors.fileEntry.backgroundFocused:t.colors.fileEntry.backgroundFocusedHover}};

      &::before {
        border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocusedHover}`}};
      }
    }
  }
`;t.Z=r},1773:function(e,t,n){var r=n(4141),a=n(7489),o=n(8680);const i=r.ZP.ol.withConfig({componentId:"sc-796d7865-0"})`
  ${e=>{let{$scrollable:t}=e;return t?(0,a.Z)(o.BQ):void 0}};

  column-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.columnGap}};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryWidth})`}};
  grid-template-rows: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryHeight})`}};
  height: 100%;
  overflow: ${e=>{let{$scrollable:t}=e;return t?void 0:"hidden"}};
  padding: ${e=>{let{theme:t}=e;return t.sizes.fileManager.padding}};
  place-content: flex-start;
  pointer-events: ${e=>{let{$selecting:t}=e;return t?"auto":void 0}};
  row-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.rowGap}};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${o.bK}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`;t.Z=i},8541:function(e,t,n){const r=n(4141).ZP.ol.withConfig({componentId:"sc-b9b2a10d-0"})`
  margin-left: 7px;
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;t.Z=r},1087:function(e,t,n){var r=n(7294),a=n(8680);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),o=(0,r.useRef)(0),i=(0,r.useCallback)((r=>{const i=r.clientX||r.clientY,l="dblclick"===r.type;if(!i&&!l)return;const s=()=>{r.stopPropagation(),e(r)},c=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},u=()=>{o.current>=5&&c(),void 0===n.current?(r.target.removeEventListener("pointermove",u),o.current=0):o.current+=1};t&&!l||!i&&l?s():void 0===n.current?(n.current=window.setTimeout(c,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",u,{passive:!0})):(c(),s())}),[e,t]);return{onClick:i,onDoubleClick:i}}},7489:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4141);const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC";var s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r.iv`
  overflow: auto;
  scrollbar-color: rgb(77, 77, 77) rgb(23, 23, 23);
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: rgb(23, 23, 23);
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgb(77, 77, 77);
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: rgb(77, 77, 77);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(122, 122, 122);
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: rgb(166, 166, 166);
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: rgb(23, 23, 23);
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid rgb(23, 23, 23);
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: rgb(55, 55, 55);
    }

    &:active {
      background-color: rgb(166, 166, 166);
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${i});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: color-burn;
  }
`}},5786:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{onMouseLeave:()=>e.removeAttribute("style"),onMouseMove:n=>{let{clientX:r,clientY:a,target:o}=n;if(e.contains(o)){const{left:n,top:o}=e.getBoundingClientRect(),i=r-n,l=a-o;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${i}px ${l}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${i}px ${l}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch`})}}}:{}}}}]);