(e=>{let a,t,o=!1;function l(){a&&a.close(),a=$DialogWindow().title("Manage Storage").addClass("storage-manager squish");const e=$(E("table")).appendTo(a.$main),t=$(E("p")).appendTo(a.$main).html("Any images you've saved to your computer with <b>File > Save</b> will not be affected.");a.$Button("Close",(()=>{a.close()}));const o=(a,o)=>{const l=$(E("tr")).appendTo(e),n=$(E("img")).attr({src:o}).addClass("thumbnail-img"),r=$(E("button")).text("Remove").addClass("remove-button"),s=`#${a.replace("image#","local:")}`,i=$(E("a")).attr({href:s,target:"_blank"}).text(localize("Open")),c=$(E("a")).attr({href:s,target:"_blank"}).addClass("thumbnail-container");c.append(n),$(E("td")).append(c).appendTo(l),$(E("td")).append(i).appendTo(l),$(E("td")).append(r).appendTo(l),r.on("click",(()=>{localStorage.removeItem(a),l.remove(),0==e.find("tr").length&&t.html("<p>All clear!</p>")}))};let l=!1;try{localStorage.length>0?l=!0:(localStorage._available=!0,l=localStorage._available,delete localStorage._available)}catch(e){}if(l)for(const e in localStorage)if(e.match(/^image#/)){let a=localStorage[e];try{'"'===a[0]&&(a=JSON.parse(a))}catch(e){}o(e,a)}l?0==e.find("tr").length&&t.html("<p>All clear!</p>"):t.html("<p>Please enable local storage in your browser's settings for local backup. It may be called Cookies, Storage, or Site Data.</p>"),a.$content.width(450),a.center(),a.find(".remove-button").focus()}e.storage_quota_exceeded=async function(){if(t&&(t.close(),t=null),o)return;const{promise:e,$window:a}=showMessageBox({title:"Storage Error",messageHTML:"\n\t\t\t<p>JS Paint stores images as you work on them so that if you close your browser or tab or reload the page your images are usually safe.</p>\n\t\t\t<p>However, it has run out of space to do so.</p>\n\t\t\t<p>You can still save the current image with <b>File > Save</b>. You should save frequently, or free up enough space to keep the image safe.</p>\n\t\t",buttons:[{label:"Manage Storage",value:"manage",default:!0},{label:"Ignore",value:"ignore"}],iconID:"warning"});t=a;const n=await e;"ignore"===n?o=!0:"manage"===n&&(o=!1,l())},e.manage_storage=l})(window);