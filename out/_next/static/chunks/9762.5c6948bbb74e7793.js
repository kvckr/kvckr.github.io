(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9762],{9762:function(e){e.exports=function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var l=n[o]={exports:{}};t[o][0].call(l.exports,(function(e){return r(t[o][1][e]||e)}),l,l.exports,e,t,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,a,h,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(o(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),i=(l=n.slice()).length,h=0;h<i;h++)l[h].apply(this,a);return!0},i.prototype.addListener=function(e,t){var n;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},i.prototype.removeListener=function(e,t){var n,i,o,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,n){var i,r,s,o,a;a=navigator.userAgent.toLowerCase(),o=navigator.platform.toLowerCase(),s="ie"===(i=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(r={name:"version"===i[1]?i[3]:i[1],version:s||parseFloat("opera"===i[1]&&i[4]?i[4]:i[2]),platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||o.match(/mac|win|linux/)||["other"])[0]}})[r.name]=!0,r[r.name+parseInt(r.version,10)]=!0,r.platform[r.platform.name]=!0,t.exports=r},{}],3:[function(e,t,n){var i,r,s,o={}.hasOwnProperty,a=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},h=[].slice;i=e("events").EventEmitter,s=e("./browser.coffee"),r=function(e){var t,n;function i(e){var n,i,r;for(i in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e),t)r=t[i],null==(n=this.options)[i]&&(n[i]=r)}return function(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype}(i,e),t={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},n={delay:500,copy:!1},i.prototype.setOption=function(e,t){if(this.options[e]=t,null!=this._canvas&&("width"===e||"height"===e))return this._canvas[e]=t},i.prototype.setOptions=function(e){var t,n,i;for(t in n=[],e)o.call(e,t)&&(i=e[t],n.push(this.setOption(t,i)));return n},i.prototype.addFrame=function(e,t){var i,r;for(r in null==t&&(t={}),(i={}).transparent=this.options.transparent,n)i[r]=t[r]||n[r];if(null==this.options.width&&this.setOption("width",e.width),null==this.options.height&&this.setOption("height",e.height),"undefined"!=typeof ImageData&&null!==ImageData&&e instanceof ImageData)i.data=e.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&e instanceof WebGLRenderingContext)t.copy?i.data=this.getContextData(e):i.context=e;else{if(null==e.childNodes)throw new Error("Invalid image");t.copy?i.data=this.getImageData(e):i.image=e}return this.frames.push(i)},i.prototype.render=function(){var e,t,n;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var e,t,n;for(n=[],e=0,t=this.frames.length;0<=t?e<t:e>t;0<=t?++e:--e)n.push(null);return n}.call(this),t=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(e=0,n=t;0<=n?e<n:e>n;0<=n?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},i.prototype.abort=function(){for(var e;null!=(e=this.activeWorkers.shift());)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},i.prototype.spawnWorkers=function(){var e,t,n,i;return e=Math.min(this.options.workers,this.frames.length),function(){n=[];for(var i=t=this.freeWorkers.length;t<=e?i<e:i>e;t<=e?i++:i--)n.push(i);return n}.apply(this).forEach((i=this,function(e){var t;return i.log("spawning worker "+e),(t=new Worker(i.options.workerScript)).onmessage=function(e){return i.activeWorkers.splice(i.activeWorkers.indexOf(t),1),i.freeWorkers.push(t),i.frameFinished(e.data)},i.freeWorkers.push(t)})),e},i.prototype.frameFinished=function(e){var t,n;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,!0===this.options.globalPalette&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(t=1,n=this.freeWorkers.length;1<=n?t<n:t>n;1<=n?++t:--t)this.renderNextFrame();return a.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},i.prototype.finishRendering=function(){var e,t,n,i,r,s,o,a,h,l,f,p,u,c,v,d;for(a=0,r=0,h=(c=this.imageParts).length;r<h;r++)a+=((t=c[r]).data.length-1)*t.pageSize+t.cursor;for(a+=t.pageSize-t.cursor,this.log("rendering finished - filesize "+Math.round(a/1e3)+"kb"),e=new Uint8Array(a),p=0,s=0,l=(v=this.imageParts).length;s<l;s++)for(n=o=0,f=(d=(t=v[s]).data).length;o<f;n=++o)u=d[n],e.set(u,p),n===t.data.length-1?p+=t.cursor:p+=t.pageSize;return i=new Blob([e],{type:"image/gif"}),this.emit("finished",i,e)},i.prototype.renderNextFrame=function(){var e,t,n;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],n=this.freeWorkers.shift(),t=this.getTask(e),this.log("starting frame "+(t.index+1)+" of "+this.frames.length),this.activeWorkers.push(n),n.postMessage(t)},i.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},i.prototype.getImageData=function(e){var t;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(t=this._canvas.getContext("2d")).setFill=this.options.background,t.fillRect(0,0,this.options.width,this.options.height),t.drawImage(e,0,0),this.getContextData(t)},i.prototype.getTask=function(e){var t,n;if(n={index:t=this.frames.indexOf(e),last:t===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=e.data)n.data=e.data;else if(null!=e.context)n.data=this.getContextData(e.context);else{if(null==e.image)throw new Error("Invalid frame");n.data=this.getImageData(e.image)}return n},i.prototype.log=function(){var e;if(e=1<=arguments.length?h.call(arguments,0):[],this.options.debug)return console.log.apply(console,e)},i}(i),t.exports=r},{"./browser.coffee":2,events:1}]},{},[3])(3)}}]);