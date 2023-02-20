const ChooserCanvas=(e,t,o,s,i,r,n,a,l,c,h,d,p)=>{const g=p(o,s);let u=ChooserCanvas.cache[e];u||(u=ChooserCanvas.cache[e]=E("img"),u.onerror=()=>{delete ChooserCanvas.cache[e]},u.src=e);const _=()=>{try{g.ctx.drawImage(u,i,r,n,a,l,c,h,d)}catch(e){}g.style.filter=t?"invert()":""};return $(u).on("load",_),_(),g};ChooserCanvas.cache={};const ChooserDiv=(e,t,o,s,i,r,n,a,l,c,h,d,p)=>{const g=p(o,s);g.classList.add(e),g.style.width=n+"px",g.style.height=a+"px";const u=()=>{const e=window.devicePixelRatio>=3||window.devicePixelRatio%1!=0;g.classList.toggle("use-svg",e)};return g._on_zoom_etc&&$G.off("theme-load resize",g._on_zoom_etc),$G.on("theme-load resize",u),g._on_zoom_etc=u,u(),g.style.backgroundPosition=`${-i}px ${-r}px`,g.style.borderColor="transparent",g.style.borderStyle="solid",g.style.borderLeftWidth=l+"px",g.style.borderTopWidth=c+"px",g.style.borderRightWidth=o-l-h+"px",g.style.borderBottomWidth=s-c-d+"px",g.style.backgroundClip="content-box",g.style.filter=t?"invert()":"",g},$Choose=(e,t,o,s,i)=>{const r=$(E("div")).addClass("chooser").css("touch-action","none"),n=e=>{s(e)||(o(e),$G.trigger("option-changed"))};return r.on("update",(()=>{if(!r.is(":visible"))return;r.empty();for(let o=0;o<e.length;o++)(e=>{const o=$(E("div")).addClass("chooser-option").appendTo(r);o.data("thing",e);const n=(e,t)=>{let s=o.find("canvas")[0];return s?(s.width!==e&&(s.width=e),s.height!==t&&(s.height=t)):(s=make_canvas(e,t),o.append(s)),s},a=(e,t)=>{let s=o.find("div")[0];return s?(s.style.width!==e+"px"&&(s.style.width=e+"px"),s.style.height!==t+"px"&&(s.style.height=t+"px")):(s=E("div"),s.style.width=e+"px",s.style.height=t+"px",o.append(s)),s},l=()=>{const l=getComputedStyle(r[0]).getPropertyValue("--Hilight"),c=i?"rgb(192, 192, 192)":"";o.css({backgroundColor:s(e)?l:c}),t(e,s(e),n,a)};l(),$G.on("option-changed theme-load redraw-tool-options-because-webglcontextrestored",l)})(e[o]);const o=e=>{const t=e.target.closest(".chooser-option");t&&n($(t).data("thing"))},a=e=>{const t=e.originalEvent.changedTouches[0],o=document.elementFromPoint(t.clientX,t.clientY).closest(".chooser-option");o&&n($(o).data("thing")),e.preventDefault()};r.on("pointerdown click",(e=>{const t=e.target.closest(".chooser-option");t&&n($(t).data("thing")),"pointerdown"===e.type&&(r.on("pointerover",o),r.on("touchmove",a))})),$G.on("pointerup pointercancel",(()=>{r.off("pointerover",o),r.off("touchmove",a)}))})),r},$ChooseShapeStyle=()=>{const e=$Choose([{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}],(({stroke:e,fill:t},o,s)=>{const i=s(39,21),r=i.ctx;let n=5;const a=getComputedStyle(i);return r.fillStyle=o?a.getPropertyValue("--HilightText"):a.getPropertyValue("--WindowText"),e&&r.fillRect(n,n,i.width-2*n,i.height-2*n),n+=1,r.fillStyle=a.getPropertyValue("--ButtonShadow"),t?r.fillRect(n,n,i.width-2*n,i.height-2*n):r.clearRect(n,n,i.width-2*n,i.height-2*n),i}),(({stroke:t,fill:o})=>{e.stroke=t,e.fill=o}),(({stroke:t,fill:o})=>e.stroke===t&&e.fill===o)).addClass("choose-shape-style");return e.fill=!1,e.stroke=!0,e},$choose_brush=$Choose((()=>{const e=[7,4,1],t=[8,5,2],o=[];return["circle","square","reverse_diagonal","diagonal"].forEach((s=>{("circle"===s?e:t).forEach((e=>{o.push({shape:s,size:e})}))})),o})(),((e,t,o)=>{const s=o(10,10),i=getComputedStyle(s),r=e.shape,n=e.size,a=t?i.getPropertyValue("--HilightText"):i.getPropertyValue("--WindowText");return stamp_brush_canvas(s.ctx,5,5,r,n),replace_colors_with_swatch(s.ctx,a),s}),(({shape:e,size:t})=>{brush_shape=e,brush_size=t}),(({shape:e,size:t})=>brush_shape===e&&brush_size===t)).addClass("choose-brush"),$choose_eraser_size=$Choose([4,6,8,10],((e,t,o)=>{const s=o(39,16),i=getComputedStyle(s);return s.ctx.fillStyle=t?i.getPropertyValue("--HilightText"):i.getPropertyValue("--WindowText"),render_brush(s.ctx,"square",e),s}),(e=>{eraser_size=e}),(e=>eraser_size===e)).addClass("choose-eraser"),$choose_stroke_size=$Choose([1,2,3,4,5],((e,t,o)=>{const s=o(39,12),i=(12-e)/2,r=getComputedStyle(s);return s.ctx.fillStyle=t?r.getPropertyValue("--HilightText"):r.getPropertyValue("--WindowText"),s.ctx.fillRect(5,~~i,29,e),s}),(e=>{stroke_size=e}),(e=>stroke_size===e)).addClass("choose-stroke-size"),magnifications=[1,2,6,8,10],$choose_magnification=$Choose(magnifications,((e,t,o,s)=>{const i=magnifications.indexOf(e),r=10===e,n=ChooserDiv("magnification-option",t,39,r?2:13,23*i,0,23,9,8,2,23,9,s);return r&&$(n).addClass("secret-option"),n}),(e=>{set_magnification(e)}),(e=>e===magnification),!0).addClass("choose-magnification").css({position:"relative"});$choose_magnification.on("update",(()=>{$choose_magnification.find(".secret-option").parent().css({position:"absolute",bottom:"-2px",left:0,opacity:0,height:2,overflow:"hidden"})}));const airbrush_sizes=[9,16,24],$choose_airbrush_size=$Choose(airbrush_sizes,((e,t,o)=>{const s=airbrush_sizes.indexOf(e),i=airbrush_sizes.length,r=4*!(2===s),n=72/i-2*r;return ChooserCanvas("images/options-airbrush-size.png",t,n,23,72/i*s+r,0,n,23,0,0,n,23,o)}),(e=>{airbrush_size=e}),(e=>e===airbrush_size),!0).addClass("choose-airbrush-size"),$choose_transparent_mode=$Choose([!1,!0],((e,t,o,s)=>{get_theme().replace(/\.css/i,"");return ChooserDiv("transparent-mode-option",!1,39,27,0,e?22:0,35,23,2,2,35,23,s)}),(e=>{tool_transparent_mode=e}),(e=>e===tool_transparent_mode),!0).addClass("choose-transparent-mode");