"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8258],{8258:function(a,e,n){n.r(e),n.d(e,{convert:function(){return i}});var t=n(1864),s=n(9595),r=n(8764).Buffer;const i=async(a,e,n)=>{const i=[];await(0,s.mb)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"]);const{call:m}=window["wasm-imagemagick"];return await Promise.all(a.map((async a=>{let[s,o]=a;const c=(0,t.basename)(s),u=`${(0,t.basename)(s,(0,t.extname)(s))}.${e}`,{outputFiles:[l]=[],stderr:b,stdout:f}=await m([{content:o,name:c}],["convert",c,"-verbose",u]),w=[...f,...b].join("\n");w&&n?.println(w),i.push([(0,t.join)((0,t.dirname)(s),u),l?.blob?r.from(await l.blob.arrayBuffer()):r.from("")])}))),i}}}]);