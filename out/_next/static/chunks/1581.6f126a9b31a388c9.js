"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1581],{8513:function(e,t,r){var o=r(5893),i=r(4393),n=r(2675),a=r(5152),s=r.n(a),l=r(7294);const c=s()((()=>r.e(6709).then(r.bind(r,6709))),{loadableGenerated:{webpack:()=>[6709]}});t.Z=e=>{let{id:t,useHook:r,StyledComponent:a,children:s}=e;const{processes:{[t]:{url:d=""}={}}}=(0,n.z)(),u=(0,l.useRef)(null),[p,h]=(0,l.useState)(!0),g=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return r(t,d,u,h,p),(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(c,{}),(0,o.jsx)(a,{ref:u,style:g,...(0,i.Z)({id:t}),children:s})]})}},1581:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=r(5893),i=r(8513),n=r(4141).ZP.div.withConfig({componentId:"sc-789bba0a-0"})`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      display: flex !important;
      opacity: 100% !important;
      padding: 0 1;
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: Sans-Serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: -3px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`,a=r(1864);const s={1:4,2:2,3:1,4:.5},l={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}};var c=r(4899),d=r(5835),u=r(5620),p=r(2675),h=r(7294),g=r(9595),b=(e,t,r,o,i)=>{const{readFile:n}=(0,u.o)(),{linkElement:b,processes:{[e]:{closing:m=!1,libs:v=[]}={}}}=(0,p.z)(),{updateWindowSize:x}=(0,d.Z)(e),[f,w]=(0,h.useState)(),{prependFileToTitle:y}=(0,c.Z)(e),k=(0,h.useCallback)((()=>{const{src:e=[]}=f?.getMedia()||{};if(Array.isArray(e)&&e.length>0){const[{src:r,url:o}]=e;r.startsWith("blob:")&&(o!==t||m)&&(0,g.EK)(r)}}),[m,f,t]),j=(0,h.useCallback)((async()=>{k();const e=(0,g.yk)(t),r=e?"video/youtube":(e=>{switch((0,a.extname)(e).toLowerCase()){case".m3u8":return"application/x-mpegURL";case".m4v":case".mkv":case".mov":case".mp4":default:return"video/mp4";case".oga":return"audio/ogg";case".ogg":case".ogm":case".ogv":return"video/ogg";case".wav":return"audio/wav";case".webm":return"video/webm"}})(t);return{src:e?t:(0,g.YS)(await n(t),(0,g.G6)()?r:void 0),type:r,url:t}}),[k,n,t]),T=(0,h.useCallback)((()=>{const[i]=r.current?.childNodes??[],n=window.videojs(i,l,(()=>{n.on("firstplay",(()=>{const[e,t]=[n.videoHeight(),n.videoWidth()],[r,o]=[(0,g.sI)(),(0,g.E9)()];if(e&&t){const i=30+e;i>r||t>o?x(o*(i/t),o):x(i,t)}}));const a=()=>{try{n.isFullscreen()?n.exitFullscreen():n.requestFullscreen()}catch{}};i.addEventListener("dblclick",a),i.addEventListener("mousewheel",(e=>{n.volume(n.volume()+(e.deltaY>0?-.1:.1))})),r.current?.closest("section")?.addEventListener("keydown",(e=>{let{key:t,altKey:r,ctrlKey:o}=e;if(r)s[t]?x(n.videoHeight()/s[t],n.videoWidth()/s[t]):"Enter"===t&&a();else if(!o)switch(t){case" ":n.paused()?n.play():n.pause();break;case"ArrowUp":n.volume(n.volume()+.1);break;case"ArrowDown":n.volume(n.volume()-.1);break;case"ArrowLeft":n.currentTime(n.currentTime()-10);break;case"ArrowRight":n.currentTime(n.currentTime()+10)}})),w(n),o(!1),(0,g.yk)(t)||b(e,"peekElement",i)}))}),[r,e,b,o,x,t]),z=(0,h.useCallback)((async()=>{if(f&&t)try{f.src(await j()),y((0,g.yk)(t)?"YouTube":(0,a.basename)(t))}catch{}}),[j,f,y,t]);(0,h.useEffect)((()=>(i&&!f&&(0,g.mb)(v).then((()=>{void 0!==window.videojs&&T()})),()=>{m&&(k(),f?.dispose())})),[k,m,v,T,i,f]),(0,h.useEffect)((()=>{!i&&!m&&f&&t&&z()}),[m,z,i,f,t])},m=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:n,id:t,useHook:b,children:(0,o.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})}},4393:function(e,t,r){var o=r(6166),i=r(80),n=r(6050),a=r(5620),s=r(2675),l=r(6819),c=r(1864),d=r(7294),u=r(8680),p=r(9595);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:h,onDragLeave:g,onDragOver:b,updatePositions:m}=e;const{url:v}=(0,s.z)(),{iconPositions:x,sortOrders:f,setIconPositions:w}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:j}=(0,a.o)(),T=(0,d.useCallback)((async(e,t,r)=>{if(h)if(t){const o=(0,c.join)(u.Ll,e);await y(u.Ll),await j(o,t,!0)&&(r===n.v.UPDATE_URL&&v(h,o),k(u.Ll,e))}else r===n.v.UPDATE_URL&&v(h,e)}),[h,y,k,v,j]),{openTransferDialog:z}=(0,o.Z)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,p.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const n={x:e.clientX,y:e.clientY};let a=[];if(o){try{a=JSON.parse(o)}catch{}const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!x[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(x[o]);return(0,c.basename)(o)})),(0,p.vi)(r,e.target,x,f,n,a,w)}(0,i.WG)(e,t||T,r,z,Boolean(h))}}}},8465:function(e,t,r){r.d(t,{BS:function(){return a},FC:function(){return i},F_:function(){return o},wV:function(){return n}});const o={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},8459:function(e,t,r){r.d(t,{Rf:function(){return s},b$:function(){return d},hu:function(){return a},ix:function(){return c},mZ:function(){return l}});var o=r(8465),i=r(8680),n=r(9595);const a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[a]=e.split(i.CC),s=`${a}${i.CC}`,l=r.find((e=>e.startsWith(s)))||"",{componentWindow:c}=t?.[l]||{},{x:d=0,y:u=0,width:p=0,height:h=0}=c?.getBoundingClientRect()||{};return d+o+p>(0,n.E9)()||u+o+h>(0,n.sI)()||!d&&!u?void 0:{x:d+o,y:u+o}},s=e=>{let{height:t,width:r}=e;const[o,a]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(a/2-(0,n.Vy)(r)/2),y:Math.floor((o-i.bK)/2-(0,n.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:o,size:i}=e||{},{x:a=0,y:s=0}=o||{},{height:c=0,width:d=0}=i||{};return r?a+l.RIGHT>t.x||a+(0,n.Vy)(d)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:a<0||s<0||a+(0,n.Vy)(d)>t.x||s+(0,n.Vy)(c)>t.y},d=(e,t)=>{const r=Number(e.height),a=Number(e.width),[s,l]=[(0,n.sI)(),(0,n.E9)()],c=s-i.bK,d=Math.max(o.wV,Math.min(r,c)),u=Math.max(o.BS,Math.min(a,l));if(!t)return{height:d,width:u};const p=r===d,h=a===u;return p||h?p?h?{height:d,width:u}:{height:Math.round(d/(a/u)),width:u}:{height:d,width:Math.round(u/(r/d))}:r>a?{height:d,width:Math.round(u/(c/d))}:{height:Math.round(d/(l/u)),width:u}}},4899:function(e,t,r){var o=r(2675),i=r(3989),n=r(7294),a=r(8680);t.Z=e=>{const{title:t}=(0,o.z)(),[r]=e.split(a.CC),{title:s}=i.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,o)=>{const i=r?` - ${r}${o?` ${a.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,n.useCallback)(((r,o)=>{const i=r?`${o?`${a.xy} `:""}${r} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}},5835:function(e,t,r){var o=r(8459),i=r(2675),n=r(6819),a=r(7294),s=r(4141);t.Z=e=>{const{setWindowStates:t}=(0,n.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:l=!1}={}}={}}=(0,i.z)(),{sizes:{titleBar:c}}=(0,s.Fg)();return{updateWindowSize:(0,a.useCallback)(((i,n)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,o.b$)({height:i+c.height,width:n},r)}})))),[e,r,l,t,c.height])}}}}]);