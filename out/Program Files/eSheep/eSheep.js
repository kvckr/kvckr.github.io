window.Sheep=class eSheep{constructor(e,t){this.userOptions=e||{},this.id=Date.now()+Math.random(),this.DOMdiv=document.createElement("div"),this.DOMdiv.setAttribute("id",this.id),this.DOMimg=document.createElement("img"),this.parser=new DOMParser,this.xmlDoc=null,this.prepareToDie=!1,this.isChild=null!=t,this.tilesX=1,this.tilesY=1,this.imageW=1,this.imageH=1,this.imageX=1,this.imageY=1,this.flipped=!1,this.dragging=!1,this.infobox=!1,this.animationId=0,this.animationStep=0,this.animationNode=null,this.sprite=new Image,this.HTMLelement=null,this.randS=100*Math.random(),this.screenW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.screenH=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}Start(e){if(void 0!==e&&null!=e){const t=new XMLHttpRequest,i=this;t.open("GET",e,!0),t.addEventListener("readystatechange",(function(){4==this.readyState&&(200==this.status?i._parseXML(this.responseText):console.error(`XML not available: ${this.statusText}\n${this.responseText}`))})),t.send(null)}}remove(){this.prepareToDie=!0,setTimeout((()=>{this.DOMdiv=this.DOMimg=null,document.getElementById(this.id).outerHTML=""}),500)}_parseXML(e){this.xmlDoc=this.parser.parseFromString(e,"text/xml");const t=this.xmlDoc.querySelectorAll("image")[0];this.tilesX=t.querySelectorAll("tilesx")[0].textContent,this.tilesY=t.querySelectorAll("tilesy")[0].textContent,this.sprite.addEventListener("load",(()=>{let e=`width:${this.sprite.width}px;height:${this.sprite.height}px;position:absolute;top:0px;left:0px;max-width: none;`;this.DOMimg.setAttribute("style",e),this.DOMimg.addEventListener("dragstart",(e=>(e.preventDefault(),!1))),this.imageW=this.sprite.width/this.tilesX,this.imageH=this.sprite.height/this.tilesY,e=`width:${this.imageW}px;height:${this.imageH}px;position:fixed;top:${this.imageY}px;left:${this.imageX}px;transform:rotatey(0deg);cursor:move;z-index:2000;overflow:hidden;image-rendering: crisp-edges;`,this.DOMdiv.setAttribute("style",e),this.DOMdiv.appendChild(this.DOMimg),this.isChild?this._spawnChild():this._spawnESheep()})),this.sprite.src=`data:image/png;base64,${t.querySelectorAll("png")[0].textContent}`,this.DOMimg.setAttribute("src",this.sprite.src),this.DOMdiv.addEventListener("mousemove",(e=>{if(!this.dragging&&1==e.buttons&&0==e.button){this.dragging=!0,this.HTMLelement=null;const e=this.xmlDoc.querySelectorAll("animations")[0].querySelectorAll("animation");for(const t of e)if("drag"==t.querySelectorAll("name")[0].textContent){this.animationId=t.getAttribute("id"),this.animationStep=0,this.animationNode=t;break}}})),document.body.addEventListener("mousemove",(e=>{this.dragging&&(this.imageX=Number.parseInt(e.clientX)-this.imageW/2,this.imageY=Number.parseInt(e.clientY)-this.imageH/2,this.DOMdiv.style.left=`${this.imageX}px`,this.DOMdiv.style.top=`${this.imageY}px`)})),document.body.addEventListener("resize",(()=>{this.screenW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.screenH=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.imageY+this.imageH>this.screenH&&(this.imageY=this.screenH-this.imageH,this.DOMdiv.style.top=`${this.imageY}px`),this.imageX+this.imageW>this.screenW&&(this.imageX=this.screenW-this.imageW,this.DOMdiv.style.left=`${this.imageX}px`)})),this.DOMdiv.addEventListener("contextmenu",(e=>(e.preventDefault(),!1))),this.DOMdiv.addEventListener("mouseup",(e=>{this.dragging&&(this.dragging=!1)})),(this.userOptions.spawnContainer||document.body).appendChild(this.DOMdiv)}_setPosition(e,t,i){this.DOMdiv&&(i?(this.imageX=Number.parseInt(e),this.imageY=Number.parseInt(t)):(this.imageX=Number.parseInt(this.imageX)+Number.parseInt(e),this.imageY=Number.parseInt(this.imageY)+Number.parseInt(t)),this.DOMdiv.style.left=`${this.imageX}px`,this.DOMdiv.style.top=`${this.imageY}px`)}_spawnESheep(){const e=this.xmlDoc.querySelectorAll("spawns")[0].querySelectorAll("spawn");let t=0;for(var i=0;i<e.length;i++)t+=Number.parseInt(e[0].getAttribute("probability"));const s=Math.random()*t;for(t=0,i=0;i<e.length;i++)if(t+=Number.parseInt(e[i].getAttribute("probability")),t>=s||i==e.length-1){this._setPosition(this._parseKeyWords(e[i].querySelectorAll("x")[0].textContent),this._parseKeyWords(e[i].querySelectorAll("y")[0].textContent),!0),this.animationId=e[i].querySelectorAll("next")[0].textContent,this.animationStep=0;var n=this.xmlDoc.querySelectorAll("animations")[0].querySelectorAll("animation");for(let e=0;e<n.length;e++)if(n[e].getAttribute("id")==this.animationId){this.animationNode=n[e];n=this.xmlDoc.querySelectorAll("childs")[0].querySelectorAll("child");for(const e of n)if(e.getAttribute("animationid")==this.animationId){const t=new eSheep(null,!0);t.animationId=e.querySelectorAll("next")[0].textContent;const i=e.querySelectorAll("x")[0].textContent,s=e.querySelectorAll("y")[0].textContent;t._setPosition(this._parseKeyWords(i),this._parseKeyWords(s),!0),t.Start(this.animationFile);break}break}break}this._nextESheepStep()}_spawnChild(){const e=this.xmlDoc.querySelectorAll("animations")[0].querySelectorAll("animation");for(const t of e)if(t.getAttribute("id")==this.animationId){this.animationNode=t;break}this._nextESheepStep()}_parseKeyWords(value){value=value.replace(/screenW/g,this.screenW),value=value.replace(/screenH/g,this.screenH),value=value.replace(/areaW/g,this.screenH),value=value.replace(/areaH/g,this.screenH),value=value.replace(/imageW/g,this.imageW),value=value.replace(/imageH/g,this.imageH),value=value.replace(/random/g,100*Math.random()),value=value.replace(/randS/g,this.randS),value=value.replace(/imageX/g,this.imageX),value=value.replace(/imageY/g,this.imageY);let ret=0;try{ret=eval(value)}catch(e){console.error(`Unable to parse this position: \n'${value}'\n Error message: \n${e.message}`)}return ret}_getNextRandomNode(e){const t=e.querySelectorAll("next");var i=this.xmlDoc.querySelectorAll("animations")[0].querySelectorAll("animation");let s=0,n=!1;if(0===t.length)return this.isChild?this.DOMdiv.remove():this._spawnESheep(),!1;for(var a=0;a<t.length;a++)s+=Number.parseInt(t[a].getAttribute("probability"));const r=Math.random()*s;let o=0;for(s=0,a=0;a<t.length;a++)if(s+=Number.parseInt(t[a].getAttribute("probability")),s>=r){o=a;break}for(a=0;a<i.length;a++)if(i[a].getAttribute("id")==t[o].textContent){this.animationId=i[a].getAttribute("id"),this.animationStep=0,this.animationNode=i[a],n=!0;break}if(n){i=this.xmlDoc.querySelectorAll("childs")[0].querySelectorAll("child");for(a=0;a<i.length;a++)if(i[a].getAttribute("animationid")==this.animationId){const e=new eSheep(null,!0);e.animationId=i[a].querySelectorAll("next")[0].textContent;const t=i[a].querySelectorAll("x")[0].textContent,s=i[a].querySelectorAll("y")[0].textContent;e._setPosition(this._parseKeyWords(t),this._parseKeyWords(s),!0),e.Start(this.animationFile);break}}return n}_checkOverlapping(){const e=this.imageX,t=this.imageY+this.imageH;let i,s=20;this.HTMLelement&&(s=5);for(const n in this.userOptions.collisionsWith){const a=document.body.getElementsByTagName(this.userOptions.collisionsWith[n]);for(const n of a)if(i=n.getBoundingClientRect(),t>i.top-2&&t<i.top+s&&e>i.left&&e<i.right-this.imageW){const e=window.getComputedStyle(n);if("none"!=e.display&&"0"!=e.opacity)return n}}return!1}_getNodeValue(e,t,i){if(this.animationNode&&this.animationNode.getElementsByTagName(e)){if(this.animationNode.getElementsByTagName(e)[0].getElementsByTagName(t)[0]){const i=this.animationNode.getElementsByTagName(e)[0].getElementsByTagName(t)[0].textContent;return this._parseKeyWords(i)}return i}}_nextESheepStep(){if(this.prepareToDie)return;let e=this._getNodeValue("start","x",0);const t=this._getNodeValue("start","y",0),i=(this._getNodeValue("start","offsety",0),this._getNodeValue("start","opacity",1),this._getNodeValue("start","interval",1e3));let s=this._getNodeValue("end","x",0);const n=this._getNodeValue("end","y",0),a=(this._getNodeValue("end","offsety",0),this._getNodeValue("end","interval",1),this._getNodeValue("end","interval",1e3)),r=this._parseKeyWords(this.animationNode.querySelectorAll("sequence")[0].getAttribute("repeat")),o=this.animationNode.querySelectorAll("sequence")[0].getAttribute("repeatfrom"),h=this.animationNode.querySelectorAll("gravity"),l=this.animationNode.querySelectorAll("border"),m=this.animationNode.querySelectorAll("frame").length+(this.animationNode.querySelectorAll("frame").length-o)*r;let d;if(d=this.animationStep<this.animationNode.querySelectorAll("frame").length?this.animationNode.querySelectorAll("frame")[this.animationStep].textContent:0==o?this.animationNode.querySelectorAll("frame")[this.animationStep%this.animationNode.querySelectorAll("frame").length].textContent:this.animationNode.querySelectorAll("frame")[Number.parseInt(o)+Number.parseInt((this.animationStep-o)%(this.animationNode.querySelectorAll("frame").length-o))].textContent,this.DOMimg.style.left=-this.imageW*(d%this.tilesX)+"px",this.DOMimg.style.top=-this.imageH*Number.parseInt(d/this.tilesX)+"px",this.dragging||this.infobox)return this.animationStep++,void setTimeout(this._nextESheepStep.bind(this),50);if(this.flipped&&(e=-e,s=-s),0==this.animationStep?this._setPosition(e,t,!1):this._setPosition(Number.parseInt(e)+Number.parseInt((s-e)*this.animationStep/m),Number.parseInt(t)+Number.parseInt((n-t)*this.animationStep/m),!1),this.animationStep++,this.animationStep>=m){if(this.animationNode.querySelectorAll("action")[0]&&"flip"===this.animationNode.querySelectorAll("action")[0].textContent)"rotateY(0deg)"==this.DOMdiv.style.transform?(this.DOMdiv.style.transform="rotateY(180deg)",this.flipped=!0):(this.DOMdiv.style.transform="rotateY(0deg)",this.flipped=!1);if(!this._getNextRandomNode(this.animationNode.querySelectorAll("sequence")[0]))return}let g=!1;return l&&l[0]&&l[0].querySelectorAll("next")&&(s<0&&this.imageX<0?(this.imageX=0,g=!0):s>0&&this.imageX>this.screenW-this.imageW?(this.imageX=this.screenW-this.imageW,this.DOMdiv.style.left=`${Number.parseInt(this.imageX)}px`,g=!0):n<0&&this.imageY<0?(this.imageY=0,g=!0):n>0&&this.imageY>this.screenH-this.imageH?(this.imageY=this.screenH-this.imageH,g=!0):n>0?this._checkOverlapping()&&this.imageY>this.imageH&&(this.HTMLelement=this._checkOverlapping(),this.imageY=Math.ceil(this.HTMLelement.getBoundingClientRect().top)-this.imageH,g=!0):this.HTMLelement&&!this._checkOverlapping()&&(this.imageY+this.imageH>this.HTMLelement.getBoundingClientRect().top+3||this.imageY+this.imageH<this.HTMLelement.getBoundingClientRect().top-3?this.HTMLelement=null:this.imageX<this.HTMLelement.getBoundingClientRect().left?(this.imageX=Number.parseInt(this.imageX+3),g=!0):(this.imageX=Number.parseInt(this.imageX-3),g=!0),this.DOMdiv.style.left=`${Number.parseInt(this.imageX)}px`),g&&!this._getNextRandomNode(l[0]))||!g&&h&&h[0]&&h[0].querySelectorAll("next")&&this.imageY<this.screenH-this.imageH-2&&(null==this.HTMLelement?g=!0:this._checkOverlapping()||(g=!0,this.HTMLelement=null),g&&!this._getNextRandomNode(h[0]))?void 0:!g&&(this.imageX<-this.imageW&&s<0||this.imageX>this.screenW&&s>0||this.imageY<-this.imageH&&t<0||this.imageY>this.screenH&&n>0)?(g=!0,void(this.isChild||this._spawnESheep())):void setTimeout(this._nextESheepStep.bind(this),Number.parseInt(i)+Number.parseInt((a-i)*this.animationStep/m))}};