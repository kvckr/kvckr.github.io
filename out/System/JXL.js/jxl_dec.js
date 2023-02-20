var Module=function(n){var r,t,e,o,a,i,u,c,f,s,l,p,d,v,h,y,g;(n=void 0!==(n=n||{})?n:{}).ready=new Promise((function(n,e){r=n,t=e}));var m={};for(e in n)n.hasOwnProperty(e)&&(m[e]=n[e]);var w=[],b="";b=0!==(b=self.location.href).indexOf("blob:")?b.substr(0,b.lastIndexOf("/")+1):"",o=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var A=n.print||console.log.bind(console),T=n.printErr||console.warn.bind(console);for(e in m)m.hasOwnProperty(e)&&(n[e]=m[e]);m=null,n.arguments&&(w=n.arguments),n.thisProgram&&n.thisProgram,n.quit&&n.quit;var _=function(n){n};n.wasmBinary&&(a=n.wasmBinary),n.noExitRuntime,"object"!=typeof WebAssembly&&N("no native wasm support detected");var E=!1,P=new TextDecoder("utf8");function C(n,r){if(!n)return"";for(var t=n+r,e=n;!(e>=t)&&f[e];)++e;return P.decode(f.subarray(n,e))}var W=new TextDecoder("utf-16le");function k(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&l[e];)++e;return t=e<<1,W.decode(f.subarray(n,t))}function F(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,a=0;a<o;++a){var i=n.charCodeAt(a);s[r>>1]=i,r+=2}return s[r>>1]=0,r-e}function R(n){return 2*n.length}function I(n,r){for(var t=0,e="";!(t>=r/4);){var o=p[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var a=o-65536;e+=String.fromCharCode(55296|a>>10,56320|1023&a)}else e+=String.fromCharCode(o)}return e}function U(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),p[r>>2]=i,(r+=4)+4>o)break}return p[r>>2]=0,r-e}function j(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function S(n,r){return n%r>0&&(n+=r-n%r),n}function O(r){u=r,n.HEAP8=c=new Int8Array(r),n.HEAP16=s=new Int16Array(r),n.HEAP32=p=new Int32Array(r),n.HEAPU8=f=new Uint8Array(r),n.HEAPU16=l=new Uint16Array(r),n.HEAPU32=d=new Uint32Array(r),n.HEAPF32=v=new Float32Array(r),n.HEAPF64=h=new Float64Array(r)}n.INITIAL_MEMORY;var x=[],M=[],D=[];function B(n){x.unshift(n)}function H(n){D.unshift(n)}var V,q=0,z=null,L=null;function N(r){n.onAbort&&n.onAbort(r),T(r+=""),E=!0,1,r="abort("+r+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}function G(n){return n.startsWith("data:application/octet-stream;base64,")}if(n.preloadedImages={},n.preloadedAudios={},n.locateFile)!G(J="jxl_dec.wasm")&&(V=J,J=n.locateFile?n.locateFile(V,b):b+V);else var J="jxl_dec.wasm";function X(n){try{if(n==J&&a)return new Uint8Array(a);if(o)return o(n);throw"both async and sync fetching of the wasm failed"}catch(n){N(n)}}function Y(r){for(;r.length>0;){var t=r.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?y.get(e)():y.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(n)}}function Z(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw TypeError("Unknown type size: "+n)}}var $=void 0;function K(n){for(var r="",t=n;f[t];)r+=$[f[t++]];return r}var Q={},nn={},rn={};function tn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function en(n,r){return Function("body","return function "+(n=tn(n))+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function on(n,r){var t=en(r,(function(n){this.name=r,this.message=n;var t=Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var an=void 0;function un(n){throw new an(n)}var cn=void 0;function fn(n){throw new cn(n)}function sn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||un('type "'+e+'" must have a positive integer typeid pointer'),nn.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;un("Cannot register type '"+e+"' twice")}if(nn[n]=r,delete rn[n],Q.hasOwnProperty(n)){var o=Q[n];delete Q[n],o.forEach((function(n){n()}))}}var ln=[],pn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function dn(n){n>4&&0==--pn[n].refcount&&(pn[n]=void 0,ln.push(n))}function vn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=ln.length?ln.pop():pn.length;return pn[r]={refcount:1,value:n},r}}function hn(n){return this.fromWireType(d[n>>2])}function yn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function gn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}var mn=void 0;function wn(n){var r=Fn(n),t=K(r);return kn(r),t}var bn={};function An(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Tn(n,r){var t=nn[n];return void 0===t&&un(r+" has unknown type "+wn(n)),t}var _n={};function En(n){try{return i.grow(n-u.byteLength+65535>>>16),O(i.buffer),1}catch(n){}}var Pn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=Pn.buffers[n];0===r||10===r?((1===n?A:T)(function(n,r,t){for(var e=r+void 0,o=r;n[o]&&!(o>=e);)++o;return P.decode(n.subarray?n.subarray(r,o):new Uint8Array(n.slice(r,o)))}(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return Pn.varargs+=4,p[Pn.varargs-4>>2]},getStr:function(n){return C(n)},get64:function(n,r){return n}};!function(){for(var n=Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);$=n}(),an=n.BindingError=on(Error,"BindingError"),cn=n.InternalError=on(Error,"InternalError"),n.count_emval_handles=function(){for(var n=0,r=5;r<pn.length;++r)void 0!==pn[r]&&++n;return n},n.get_first_emval=function(){for(var n=5;n<pn.length;++n)if(void 0!==pn[n])return pn[n];return null},mn=n.UnboundTypeError=on(Error,"UnboundTypeError");var Cn={b:function(n,r,t,e){N("Assertion failed: "+C(n)+", at: "+[r?C(r):"unknown filename",t,e?C(e):"unknown function"])},m:function(n,r){},r:function(n,r,t,e,o){},n:function(n,r,t,e,o){var a=Z(t);sn(n,{name:r=K(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=c;else if(2===t)e=s;else{if(4!==t)throw TypeError("Unknown boolean type size: "+r);e=p}return this.fromWireType(e[n>>a])},destructorFunction:null})},w:function(n,r){sn(n,{name:r=K(r),fromWireType:function(n){var r=pn[n].value;return dn(n),r},toWireType:function(n,r){return vn(r)},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:null})},j:function(n,r,t){var e=Z(t);sn(n,{name:r=K(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw TypeError('Cannot convert "'+yn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:function(n,r){switch(r){case 2:return function(n){return this.fromWireType(v[n>>2])};case 3:return function(n){return this.fromWireType(h[n>>3])};default:throw TypeError("Unknown float type: "+n)}}(r,e),destructorFunction:null})},p:function(r,t,e,o,a,i){var u,c,f,s,l,d,v=function(n,r){for(var t=[],e=0;e<n;e++)t.push(p[(r>>2)+e]);return t}(t,e);r=K(r),c=a,u=K(u=o),"function"!=typeof(f=function(){var r,t,e;return u.includes("j")?(r=u,t=c,e=[],function(){e.length=arguments.length;for(var o=0;o<arguments.length;o++)e[o]=arguments[o];return function(r,t,e){var o,a,i;return r.includes("j")?(o=t,a=e,i=n["dynCall_"+r],a&&a.length?i.apply(null,[o].concat(a)):i.call(null,o)):y.get(t).apply(null,e)}(r,t,e)}):y.get(c)}())&&un("unknown function pointer with signature "+u+": "+c),a=f,s=r,l=function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){if(!e[r]&&!nn[r]){if(rn[r])return void rn[r].forEach(n);t.push(r),e[r]=!0}})),new mn(n+": "+t.map(wn).join([", "]))}("Cannot call "+r+" due to unbound types",v)},d=t-1,n.hasOwnProperty(s)?((void 0===d||void 0!==n[s].overloadTable&&void 0!==n[s].overloadTable[d])&&un("Cannot register public name '"+s+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||un("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(n,s,s),n.hasOwnProperty(d)&&un("Cannot register multiple overloads of a function with the same number of arguments ("+d+")!"),n[s].overloadTable[d]=l):(n[s]=l,void 0!==d&&(n[s].numArguments=d)),function(n,r,t){function e(r){var e=t(r);e.length!==n.length&&fn("Mismatched type converter count");for(var o=0;o<n.length;++o)sn(n[o],e[o])}n.forEach((function(n){rn[n]=r}));var o=Array(r.length),a=[],i=0;r.forEach((function(n,r){nn.hasOwnProperty(n)?o[r]=nn[n]:(a.push(n),Q.hasOwnProperty(n)||(Q[n]=[]),Q[n].push((function(){o[r]=nn[n],++i===a.length&&e(o)})))})),0===a.length&&e(o)}([],v,(function(e){var o,u,c,f=[e[0],null].concat(e.slice(1));return o=r,u=function(n,r,t,e,o){var a=r.length;a<2&&un("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&!1,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+tn(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",v=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[un,e,o,gn,r[0],r[1]];i&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+d+", arg"+c+"); // "+r[c+2].name+"\n",v.push("argType"+c),h.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var y=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[c].name+"\n",v.push(y+"_dtor"),h.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",v.push(p),function(n,r){if(!(n instanceof Function))throw TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=en(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,o=n.apply(e,r);return o instanceof Object?o:e}(Function,v).apply(null,h)}(r,f,0,a,i),c=t-1,n.hasOwnProperty(o)||fn("Replacing nonexistant public symbol"),void 0!==n[o].overloadTable&&void 0!==c?n[o].overloadTable[c]=u:(n[o]=u,n[o].argCount=c),[]}))},d:function(n,r,t,e,o){r=K(r),-1===o&&(o=4294967295);var a=Z(t),i=function(n){return n};if(0===e){var u=32-8*t;i=function(n){return n<<u>>>u}}var v=r.includes("unsigned");sn(n,{name:r,fromWireType:i,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw TypeError('Cannot convert "'+yn(t)+'" to '+this.name);if(t<e||t>o)throw TypeError('Passing a number "'+yn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return v?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:function(n,r,t){switch(r){case 0:return t?function(n){return c[n]}:function(n){return f[n]};case 1:return t?function(n){return s[n>>1]}:function(n){return l[n>>1]};case 2:return t?function(n){return p[n>>2]}:function(n){return d[n>>2]};default:throw TypeError("Unknown integer type: "+n)}}(r,a,0!==e),destructorFunction:null})},c:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=d,t=r[n>>=2],o=r[n+1];return new e(u,o,t)}sn(n,{name:t=K(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},k:function(n,r){var t="std::string"===(r=K(r));sn(n,{name:r,fromWireType:function(n){var r,e=d[n>>2];if(t)for(var o=n+4,a=0;a<=e;++a){var i=n+4+a;if(a==e||0==f[i]){var u=C(o,i-o);void 0===r?r=u:(r+="\0",r+=u),o=i+1}}else{var c=Array(e);for(a=0;a<e;++a)c[a]=String.fromCharCode(f[n+4+a]);r=c.join("")}return kn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||un("Cannot pass non-string to std::string");var o=(t&&e?function(){return function(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}(r)}:function(){return r.length})(),a=Wn(4+o+1);if(d[a>>2]=o,t&&e)(function(n,r,t,e){if(!(e>0))return 0;for(var o=t,a=t+e-1,i=0;i<n.length;++i){var u=n.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++i)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}r[t]=0})(r,f,a+4,o+1);else if(e)for(var i=0;i<o;++i){var u=r.charCodeAt(i);u>255&&(kn(a),un("String has UTF-16 code units that do not fit in 8 bits")),f[a+4+i]=u}else for(i=0;i<o;++i)f[a+4+i]=r[i];return null!==n&&n.push(kn,a),a},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:function(n){kn(n)}})},g:function(n,r,t){var e,o,a,i,u;t=K(t),2===r?(e=k,o=F,i=R,a=function(){return l},u=1):4===r&&(e=I,o=U,i=j,a=function(){return d},u=2),sn(n,{name:t,fromWireType:function(n){for(var t,o=d[n>>2],i=a(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==i[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+="\0",t+=l),c=s+r}}return kn(n),t},toWireType:function(n,e){"string"!=typeof e&&un("Cannot pass non-string to C++ string type "+t);var a=i(e),c=Wn(4+a+r);return d[c>>2]=a>>u,o(e,c+4,a+r),null!==n&&n.push(kn,c),c},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:function(n){kn(n)}})},o:function(n,r){sn(n,{isVoid:!0,name:r=K(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},e:dn,l:function(n){var r,t;return 0===n?vn(An()):(n=void 0===(t=bn[r=n])?K(r):t,vn(An()[n]))},h:function(n){n>4&&(pn[n].refcount+=1)},i:function(r,t,e,o){(a=r)||un("Cannot use deleted val. handle = "+a),r=pn[a].value;var a,i=_n[t];return i||(i=function(r){for(var t="",e=0;e<r;++e)t+=(0!==e?", ":"")+"arg"+e;var o="return function emval_allocator_"+r+"(constructor, argTypes, args) {\n";for(e=0;e<r;++e)o+="var argType"+e+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+e+'], "parameter '+e+'");\nvar arg'+e+" = argType"+e+".readValueFromPointer(args);\nargs += argType"+e+"['argPackAdvance'];\n";return Function("requireRegisteredType","Module","__emval_register",o+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n")(Tn,n,vn)}(t),_n[t]=i),i(r,e,o)},a:function(){N()},t:function(n,r,t){f.copyWithin(n,r,r+t)},f:function(n){var r=f.length;if((n>>>=0)>2147483648)return!1;for(var t=1;t<=4;t*=2){var e=r*(1+.2/t);if(e=Math.min(e,n+100663296),En(Math.min(2147483648,S(Math.max(n,e),65536))))return!0}return!1},u:function(n){return 0},q:function(n,r,t,e,o){},v:function(n,r,t,e){for(var o=0,a=0;a<t;a++){for(var i=p[r+8*a>>2],u=p[r+(8*a+4)>>2],c=0;c<u;c++)Pn.printChar(n,f[i+c]);o+=u}return p[e>>2]=o,0},s:function(n){_(n)}};!function(){var r={a:Cn};function e(r,t){var e,o=r.exports;n.asm=o,O((i=n.asm.x).buffer),y=n.asm.D,e=n.asm.y,M.unshift(e),function(r){if(q--,n.monitorRunDependencies&&n.monitorRunDependencies(q),0==q&&(null!==z&&(clearInterval(z),z=null),L)){var t=L;L=null,t()}}()}function o(n){e(n.instance)}function u(n){return(a||"function"!=typeof fetch?Promise.resolve().then((function(){return X(J)})):fetch(J,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+J+"'";return n.arrayBuffer()})).catch((function(){return X(J)}))).then((function(n){return WebAssembly.instantiate(n,r)})).then(n,(function(n){T("failed to asynchronously prepare wasm: "+n),N(n)}))}if(q++,n.monitorRunDependencies&&n.monitorRunDependencies(q),n.instantiateWasm)try{return n.instantiateWasm(r,e)}catch(n){return T("Module.instantiateWasm callback failed with error: "+n),!1}(a||"function"!=typeof WebAssembly.instantiateStreaming||G(J)||"function"!=typeof fetch?u(o):fetch(J,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(o,(function(n){return T("wasm streaming compile failed: "+n),T("falling back to ArrayBuffer instantiation"),u(o)}))}))).catch(t)}();n.___wasm_call_ctors=function(){return(n.___wasm_call_ctors=n.asm.y).apply(null,arguments)};var Wn=n._malloc=function(){return(Wn=n._malloc=n.asm.z).apply(null,arguments)},kn=n._free=function(){return(kn=n._free=n.asm.A).apply(null,arguments)},Fn=n.___getTypeName=function(){return(Fn=n.___getTypeName=n.asm.B).apply(null,arguments)};n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.C).apply(null,arguments)},n.dynCall_iiji=function(){return(n.dynCall_iiji=n.asm.E).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.F).apply(null,arguments)};function Rn(t){function e(){!g&&(g=!0,n.calledRun=!0,E||(!0,Y(M),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)H(n.postRun.shift());Y(D)}()))}t=t||w,q>0||(!function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)B(n.preRun.shift());Y(x)}(),!(q>0)&&(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(L=function n(){g||Rn(),g||(L=n)},n.run=Rn,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Rn(),n.ready};addEventListener("message",(async n=>{if(n.data.image){let r=performance.now(),t=(await Module({noInitialRun:!0})).decode(n.data.image);if(!t)throw"Error decoding "+n.data.jxlSrc;console.log("Finished decoding",n.data.jxlSrc,"in",performance.now()-r,"ms"),postMessage({imgData:t})}else if(n.data.canvas){n.data.canvas.getContext("2d").putImageData(n.data.imgData,0,0);let r=await n.data.canvas.convertToBlob({type:"image/"+n.data.imageType});postMessage({blob:r,url:URL.createObjectURL(r)})}}));