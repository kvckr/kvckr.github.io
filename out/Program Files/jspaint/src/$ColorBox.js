(t=>{function o(t){const o=$(E("div")).addClass("swatch"),n=make_canvas();return $(n).css({pointerEvents:"none"}).appendTo(o),$G.on("theme-load",(()=>{e(o)})),o.data("swatch",t),e(o,t),o}function e(t,o){if(o instanceof CanvasPattern)t.addClass("pattern"),t[0].dataset.color="";else if("string"==typeof o)t.removeClass("pattern"),t[0].dataset.color=o;else if(void 0!==o)throw new TypeError("argument to update must be CanvasPattern or string (or undefined); got type "+typeof o);o=o||t.data("swatch"),t.data("swatch",o);const e=t.find("canvas")[0];requestAnimationFrame((()=>{e.width=t.innerWidth(),e.height=t.innerHeight(),o&&(e.ctx.fillStyle=o,e.ctx.fillRect(0,0,e.width,e.height))}))}t.$ColorBox=function(t){const n=$(E("div")).addClass("color-box"),r=o(selected_colors.ternary).addClass("current-colors"),a=$(E("div")).addClass("palette");n.append(r,a);const l=o(selected_colors.foreground).addClass("color-selection foreground-color"),c=o(selected_colors.background).addClass("color-selection background-color");r.append(c,l),$G.on("option-changed",(()=>{e(l,selected_colors.foreground),e(c,selected_colors.background),e(r,selected_colors.ternary)})),r.on("pointerdown",(()=>{const t=selected_colors.foreground;selected_colors.foreground=selected_colors.background,selected_colors.background=t,$G.triggerHandler("option-changed")}));const s=t=>{const e=o(t).addClass("color-button");e.appendTo(a);let n,r=!1,l=null;e.on("pointerdown",(t=>{ctrl=t.ctrlKey,button=t.button,0===button&&i.data("$last_fg_color_button",e);const o=ctrl?"ternary":0===button?"foreground":2===button?"background":null;o&&(r&&button===l?show_edit_colors_window(e,o):(selected_colors[o]=e.data("swatch"),$G.trigger("option-changed")),clearTimeout(n),n=setTimeout((()=>{r=!1,l=null}),400),r=!0,l=button)}))},d=()=>{a.empty(),palette.forEach(s);const o=a.find(".color-button");if(t){const t=o.outerHeight()+parseFloat(getComputedStyle(o[0]).getPropertyValue("margin-top"))+parseFloat(getComputedStyle(o[0]).getPropertyValue("margin-bottom"));a.height(Math.ceil(palette.length/2)*t)}else{const t=o.outerWidth()+parseFloat(getComputedStyle(o[0]).getPropertyValue("margin-left"))+parseFloat(getComputedStyle(o[0]).getPropertyValue("margin-right"));a.width(Math.ceil(palette.length/2)*t)}i.data("$last_fg_color_button",a.find(".color-button:first-child"))};let i;return t?(i=$Component(localize("Colors"),"colors-component","tall",n),i.appendTo("rtl"===get_direction()?$left:$right)):(i=$Component(localize("Colors"),"colors-component","wide",n),i.appendTo($bottom)),d(),$(window).on("theme-change",d),i.rebuild_palette=d,i},t.$Swatch=o,t.update_$swatch=e})(window);