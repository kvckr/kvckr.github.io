!function(){var e={8156:function(e,t,n){"use strict";n(9595);const r=["/System/ShaderToy/CoastalLandscape/piLibs.js","/System/ShaderToy/CoastalLandscape/effect.js","/System/ShaderToy/CoastalLandscape/init.js"];globalThis.addEventListener("message",(e=>{let{data:t}=e;if("undefined"!=typeof WebGLRenderingContext)if("init"===t)globalThis.importScripts(...r);else if(t instanceof DOMRect)globalThis.demoCanvasRect=t,globalThis.updateLandscapeSize();else{const{canvas:e,devicePixelRatio:n}=t;globalThis.devicePixelRatio=n,globalThis.effectInit(e)}}),{passive:!0})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}},c=!0;try{e[r](i,i.exports,n),c=!1}finally{c&&delete t[r]}return i.exports}n.m=e,n.x=function(){var e=n.O(void 0,[5120,9595],(function(){return n(8156)}));return n.O(e)},function(){var e=[];n.O=function(t,r,o,i){if(!r){var c=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,f=0;f<r.length;f++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[f])}))?r.splice(f--,1):(u=!1,i<c&&(c=i));if(u){e.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return r[e]}}));return c.default=function(){return r},n.d(i,c),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+e+"."+{3201:"f5a967f43c4e52f0",3301:"af59aedda1e70e9e",3545:"6052f80a27cc773b",5120:"f4d6a6f2e5165701",8060:"2bbac08cdc136a71",8090:"1833e29dc1254b62",9595:"d34d50411414df18",9762:"5c6948bbb74e7793"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.tt=function(){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e}}(),n.tu=function(e){return n.tt().createScriptURL(e)},n.p="/_next/",function(){var e={5183:1};n.f.i=function(t,r){e[t]||importScripts(n.tu(n.p+n.u(t)))};var t=self.webpackChunk_N_E=self.webpackChunk_N_E||[],r=t.push.bind(t);t.push=function(t){var o=t[0],i=t[1],c=t[2];for(var u in i)n.o(i,u)&&(n.m[u]=i[u]);for(c&&c(n);o.length;)e[o.pop()]=1;r(t)}}(),function(){var e=n.x;n.x=function(){return Promise.all([n.e(5120),n.e(9595)]).then(e)}}();var r=n.x();_N_E=r}();