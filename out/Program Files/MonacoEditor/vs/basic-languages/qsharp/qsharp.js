/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/qsharp/qsharp",["require","require"],(e=>(()=>{var e,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,a=(e="undefined"!=typeof WeakMap?new WeakMap:0,(a,s)=>e&&e.get(a)||(s=((e,a,s,i)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let l of n(a))!r.call(e,l)&&(s||"default"!==l)&&t(e,l,{get:()=>a[l],enumerable:!(i=o(a,l))||i.enumerable});return e})((e=>t(e,"__esModule",{value:!0}))({}),a,1),e&&e.set(a,s),s)),s={};((e,o)=>{for(var n in o)t(e,n,{get:o[n],enumerable:!0})})(s,{conf:()=>i,language:()=>l});var i={comments:{lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},l={keywords:["namespace","open","as","operation","function","body","adjoint","newtype","controlled","if","elif","else","repeat","until","fixup","for","in","while","return","fail","within","apply","Adjoint","Controlled","Adj","Ctl","is","self","auto","distribute","invert","intrinsic","let","set","w/","new","not","and","or","use","borrow","using","borrowing","mutable"],typeKeywords:["Unit","Int","BigInt","Double","Bool","String","Qubit","Result","Pauli","Range"],invalidKeywords:["abstract","base","bool","break","byte","case","catch","char","checked","class","const","continue","decimal","default","delegate","do","double","enum","event","explicit","extern","finally","fixed","float","foreach","goto","implicit","int","interface","lock","long","null","object","operator","out","override","params","private","protected","public","readonly","ref","sbyte","sealed","short","sizeof","stackalloc","static","string","struct","switch","this","throw","try","typeof","unit","ulong","unchecked","unsafe","ushort","virtual","void","volatile"],constants:["true","false","PauliI","PauliX","PauliY","PauliZ","One","Zero"],builtin:["X","Y","Z","H","HY","S","T","SWAP","CNOT","CCNOT","MultiX","R","RFrac","Rx","Ry","Rz","R1","R1Frac","Exp","ExpFrac","Measure","M","MultiM","Message","Length","Assert","AssertProb","AssertEqual"],operators:["and=","<-","->","*","*=","@","!","^","^=",":","::","..","==","...","=","=>",">",">=","<","<=","-","-=","!=","or=","%","%=","|","+","+=","?","/","/=","&&&","&&&=","^^^","^^^=",">>>",">>>=","<<<","<<<=","|||","|||=","~~~","_","w/","w/="],namespaceFollows:["namespace","open"],symbols:/[=><!~?:&|+\-*\/\^%@._]+/,escapes:/\\[\s\S]/,tokenizer:{root:[[/[a-zA-Z_$][\w$]*/,{cases:{"@namespaceFollows":{token:"keyword.$0",next:"@namespace"},"@typeKeywords":"type","@keywords":"keyword","@constants":"constant","@builtin":"keyword","@invalidKeywords":"invalid","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],namespace:[{include:"@whitespace"},[/[A-Za-z]\w*/,"namespace"],[/[\.=]/,"delimiter"],["","","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"],[/(\/\/).*/,"comment"]]}};return a(s)})()));