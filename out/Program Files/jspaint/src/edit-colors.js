(t=>{let e,o=!1;try{o="true"===localStorage.dev_edit_colors}catch(t){}function s(t,o){t=t||$colorbox.data("$last_fg_color_button"),o=o||"foreground";const s=t.closest(".palette, .color-box"),a=s.find(".swatch").toArray().indexOf(t[0]);!function(t,o){e&&e.close();const s=new $DialogWindow(localize("Edit Colors"));s.addClass("edit-colors-window"),e=s;let a=0,c=50,l=50,n=0;const r=()=>`hsl(${a}deg, ${c}%, ${l}%)`,i=(t,e,o)=>{const[s,n,r]=rgb_to_hsl(t,e,o);a=360*s,c=100*n,l=100*r},d=t=>{const[e,o,s]=get_rgba_from_color(t);i(e,o,s)},h=t=>{s.$content.find(".swatch").removeClass("selected"),t.addClass("selected"),d(t[0].dataset.color),t.closest("#custom-colors")&&(n=Math.max(0,v.indexOf(_.find(".swatch.selected")[0]))),E("hslrgb")},f=(t,e)=>{const o=$('<div class="color-grid" tabindex="0">').attr({id:e});for(const e of t){const t=$Swatch(e);t.appendTo(o).addClass("inset-deep"),t.attr("tabindex",-1)}let s=o.find(".swatch:first-child");const a=8,c=t=>{const e=o.find(".swatch:focus");if(!e.length)return;const s=o.find(".swatch"),c=s.toArray().indexOf(e[0]);if(-1===t&&c%a==0)return;if(1===t&&c%a==a-1)return;const l=c+t,n=$(s.toArray()[l]);n.length&&n.focus()};return o.on("keydown",(t=>{"ArrowRight"===t.code&&c(1),"ArrowLeft"===t.code&&c(-1),"ArrowDown"===t.code&&c(+a),"ArrowUp"===t.code&&c(-a),"Home"===t.code&&o.find(".swatch:first-child").focus(),"End"===t.code&&o.find(".swatch:last-child").focus(),"Space"!==t.code&&"Enter"!==t.code||(h(o.find(".swatch:focus")),D())})),o.on("pointerdown",(t=>{const e=$(t.target).closest(".swatch");e.length&&(h(e),D())})),o.on("dragstart",(t=>{t.preventDefault()})),o.on("focusin",(t=>{t.target.closest(".swatch")?s=$(t.target.closest(".swatch")):s.is(":focus")||s.focus(),o.attr("tabindex",-1)})),o.on("focusout",(t=>{o.attr("tabindex",0)})),o},p=$('<div class="left-right-split">').appendTo(s.$main),u=$('<div class="left-side">').appendTo(p),g=$('<div class="right-side">').appendTo(p).hide();u.append(`<label for="basic-colors">${display_hotkey("&Basic colors:")}</label>`);const m=f(basic_colors,"basic-colors").appendTo(u);u.append(`<label for="custom-colors">${display_hotkey("&Custom colors:")}</label>`);const b=[];for(let t=0;t<custom_colors.length;t++){b[8*(t%2)+Math.floor(t/2)]=custom_colors[t]}const _=f(b,"custom-colors").appendTo(u),w=_.find(".swatch").toArray(),v=[];for(let t=0;t<w.length;t++){const e=Math.floor(t/8);v[2*(t%8)+e]=w[t]}const y=$('<button class="define-custom-colors-button">').html(display_hotkey("&Define Custom Colors >>")).appendTo(u).on("click",(t=>{t.preventDefault(),g.show(),s.addClass("defining-custom-colors"),y.attr("disabled","disabled"),s.width()>=300&&L.h.focus(),x()})),x=()=>{(s.width()<300||document.body.classList.contains("eye-gaze-mode"))&&y.removeAttr("disabled")};$(window).on("resize",x);const k=$(`<label for="color-solid-canvas">${display_hotkey("Color|S&olid")}</label>`);k.css({position:"absolute",left:10,top:244});const C=make_canvas(175,187),M=make_canvas(10,187),A=make_canvas(58,40),R=make_canvas(5,9);$(A).css({position:"absolute",left:10,top:198});let T=!1,S=!1;const D=()=>{if(!T||S){for(let t=0;t<C.height;t+=6)for(let e=-1;e<C.width;e+=3)C.ctx.fillStyle=`hsl(${e/C.width*360}deg, ${100*(1-t/C.height)}%, 50%)`,C.ctx.fillRect(e,t,3,6);if(!T){const t=~~(a/360*C.width),e=~~((1-c/100)*C.height);C.ctx.fillStyle="black",C.ctx.fillRect(t-1,e-9,3,5),C.ctx.fillRect(t-1,e+5,3,5),C.ctx.fillRect(t-9,e-1,5,3),C.ctx.fillRect(t+5,e-1,5,3)}S=!T}for(let t=-2;t<M.height;t+=6)M.ctx.fillStyle=`hsl(${a}deg, ${c}%, ${100*(1-t/M.height)}%)`,M.ctx.fillRect(0,t,M.width,6);R.ctx.fillStyle=getComputedStyle(s.$content[0]).getPropertyValue("--ButtonText");for(let t=0;t<R.width;t++)R.ctx.fillRect(t,R.width-t-1,1,1+2*t);R.style.position="absolute",R.style.left="215px",R.style.top=3+~~((1-l/100)*M.height)+"px",A.ctx.fillStyle=r(),A.ctx.fillRect(0,0,A.width,A.height)};D(),$(C).addClass("rainbow-canvas inset-shallow"),$(M).addClass("luminosity-canvas inset-shallow"),$(A).addClass("result-color-canvas inset-shallow").attr("id","color-solid-canvas");const B=t=>{a=360*Math.min(1,Math.max(0,t.offsetX/C.width)),c=100*Math.min(1,Math.max(0,1-t.offsetY/C.height)),E("hsrgb"),D(),t.preventDefault()};$(C).on("pointerdown",(t=>{T=!0,B(t),$(C).on("pointermove",B),1234567890!==t.pointerId&&C.setPointerCapture(t.pointerId)})),$G.on("pointerup pointercancel",(t=>{$(C).off("pointermove",B),T=!1,D()}));const G=t=>{l=100*Math.min(1,Math.max(0,1-t.offsetY/M.height)),E("lrgb"),D(),t.preventDefault()};$(M).on("pointerdown",(t=>{G(t),$(M).on("pointermove",G),1234567890!==t.pointerId&&M.setPointerCapture(t.pointerId)})),$G.on("pointerup pointercancel",(t=>{$(M).off("pointermove",G)}));const L={};["hsl","rgb"].forEach(((t,e)=>{[...t].forEach(((t,o)=>{const s={h:"Hu&e:",s:"&Sat:",l:"&Lum:",r:"&Red:",g:"&Green:",b:"Bl&ue:"}[t],a=document.createElement("input");a.type="text",a.classList.add("inset-deep"),a.dataset.componentLetter=t,a.dataset.min=0,a.dataset.max={h:360,s:100,l:100,r:255,g:255,b:255}[t];const c=document.createElement("label");c.innerHTML=display_hotkey(s);const l=22;$(c).css({position:"absolute",left:63+80*e,top:202+o*l,textAlign:"right",display:"inline-block",width:40,height:20,lineHeight:"20px"}),$(a).css({position:"absolute",left:106+80*e,top:202+o*l+(o>1),width:21,height:14}),g.append(c,a),L[t]=a}))})),g.on("input","input",(t=>{const e=t.target,o=e.dataset.componentLetter;if(o)if(e.value.match(/^\d+$/)){let t=Number(e.value);if(t<e.dataset.min?(t=e.dataset.min,e.value=t):t>e.dataset.max&&(t=e.dataset.max,e.value=t),"hsl".indexOf(o)>-1){switch(o){case"h":a=t;break;case"s":c=t;break;case"l":l=t}E("rgb")}else{let[e,s,a]=get_rgba_from_color(r());const c={r:e,g:s,b:a};c[o]=t,i(c.r,c.g,c.b),E("hsl")}D()}else e.value.length&&(E(o),e.select())})),g.on("focusout","input",(t=>{const e=t.target,o=e.dataset.componentLetter;o&&(e.value.match(/^\d+$/)||(E(o),e.select()))})),s.on("keydown",(t=>{if(t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey){switch(t.key){case"o":d(r()),E("hslrgb"),D();break;case"b":case"c":m.find(".swatch.selected, .swatch").focus();break;case"e":L.h.focus();break;case"s":L.s.focus();break;case"l":L.l.focus();break;case"r":L.r.focus();break;case"g":L.g.focus();break;case"u":L.b.focus();break;case"a":H.is(":visible")&&H.click();break;case"d":y.click();break;default:return}t.preventDefault(),t.stopPropagation()}}));const E=t=>{for(const e of t){const t=L[e],[o,s,n]=get_rgba_from_color(r());t.value=Math.floor({h:a,s:c,l,r:o,g:s,b:n}[e])}};g.append(C,M,A,k,R);const H=$('<button class="add-to-custom-colors-button">').html(display_hotkey("&Add To Custom Colors")).appendTo(g).on("click",(t=>{t.preventDefault();const e=r();custom_colors[n]=e,update_$swatch($(v[n]),e),n=(n+1)%custom_colors.length,s.removeClass("defining-custom-colors")}));s.$Button(localize("OK"),(()=>{o(r()),s.close()}))[0].focus(),s.$Button(localize("Cancel"),(()=>{s.close()})),u.append(s.$buttons);for(const e of u.find(".swatch").toArray())if(get_rgba_from_color(e.dataset.color).join(",")===get_rgba_from_color(t).join(",")){h($(e)),e.focus();break}n=Math.max(0,v.indexOf(_.find(".swatch.selected")[0])),d(t),E("hslrgb"),s.center()}(selected_colors[o],(e=>{if((t=$(s.find(".swatch")[a])).length)if(!monochrome||0!==a&&14!==a)palette[a]=e,update_$swatch(t,e),selected_colors[o]=e,$G.triggerHandler("option-changed"),window.console&&console.log(`Updated palette: ${palette.map((()=>"%c█")).join("")}`,...palette.map((t=>`color: ${t};`)));else{let t=get_rgba_from_color(palette[a]);const o=get_rgba_from_color(e),s=get_rgba_from_color(palette[14-a]),c=detect_monochrome(main_ctx),l=selection&&selection.canvas?detect_monochrome(selection.canvas.ctx):c,n=l.isMonochrome&&l.presentNonTransparentRGBAs.every((t=>c.presentNonTransparentRGBAs.map((t=>t.toString())).includes(t.toString())));if(c.isMonochrome&&l.isMonochrome&&n){const e=(e,s)=>{if(2===s.length&&s.every((e=>`${e}`!=`${t}`))){const e=s.map((e=>Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])+Math.abs(e[2]-t[2])+Math.abs(e[3]-t[3])));t=e[0]<e[1]?s[0]:s[1]}const a=e.getImageData(0,0,e.canvas.width,e.canvas.height);replace_color_globally(a,t[0],t[1],t[2],t[3],o[0],o[1],o[2],o[3]),e.putImageData(a,0,0)};undoable({name:"Recolor",icon:get_help_folder_icon("p_color.png")},(()=>{e(main_ctx,c.presentNonTransparentRGBAs),selection&&selection.canvas&&(e(selection.canvas.ctx,l.presentNonTransparentRGBAs),selection.replace_source_canvas(selection.canvas))}))}palette=a?make_monochrome_palette(s,o):make_monochrome_palette(o,s),$colorbox.rebuild_palette(),selected_colors.foreground=palette[0],selected_colors.background=palette[14],selected_colors.ternary="",$G.triggerHandler("option-changed")}else show_error_message("Swatch no longer exists.")}))}o&&$((()=>{s(),$(".define-custom-colors-button").click(),e.css({left:80,top:50,opacity:.5})})),t.show_edit_colors_window=s})(window);