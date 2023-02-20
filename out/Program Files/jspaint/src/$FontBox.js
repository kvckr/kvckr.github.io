window.$FontBox=function(){const t=$(E("div")).addClass("font-box"),e=$(E("select")).addClass("inset-deep").attr({"aria-label":"Font Family","aria-description":localize("Selects the font used by the text.")}),a=$(E("input")).addClass("inset-deep").attr({type:"number",min:8,max:72,value:text_tool_font.size,"aria-label":"Font Size","aria-description":localize("Selects the point size of the text.")}).css({maxWidth:50}),o=$(E("span")).addClass("text-toolbar-button-group"),l=c(0,"bold","Bold",localize("Sets or clears the text bold attribute.")),n=c(1,"italic","Italic",localize("Sets or clears the text italic attribute.")),i=c(2,"underline","Underline",localize("Sets or clears the text underline attribute.")),s=c(3,"vertical","Vertical Writing Mode",localize("Only a Far East font can be used for vertical editing."));s.attr("disabled",!0),o.append(l,n,i,s),t.append(e,a,o);const d=()=>{text_tool_font.size=Number(a.val()),text_tool_font.family=e.val(),$G.trigger("option-changed")};FontDetective.each((t=>{const a=$(E("option"));a.val(t).text(t.name),e.append(a),text_tool_font.family||d()})),text_tool_font.family&&e.val(text_tool_font.family),e.on("change",d),a.on("change",d);const r=$ToolWindow();return r.title(localize("Fonts")),r.$content.append(t),r.center(),r;function c(t,e,a,o){const l=$(E("button")).addClass("toggle").attr({"aria-pressed":!1,"aria-label":a,"aria-description":o}),n=$(E("span")).addClass("icon").appendTo(l);return l.css({width:23,height:22,padding:0,display:"inline-flex",alignContent:"center",alignItems:"center",justifyContent:"center"}),n.css({flex:"0 0 auto",display:"block",width:16,height:16,"--icon-index":t}),l.on("click",(()=>{l.toggleClass("selected"),text_tool_font[e]=l.hasClass("selected"),l.attr("aria-pressed",l.hasClass("selected")),d()})),text_tool_font[e]&&l.addClass("selected").attr("aria-pressed",!0),l}};