"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5384],{5384:function(t,n,e){e.r(n),e.d(n,{decodeQoi:function(){return r}});var o=e(8764).Buffer;function s(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const{length:e}=n,o=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)].concat(n);return[e>>24&255,e>>16&255,e>>8&255,255&e].concat(o,function(t){const n=[];let e=0;for(let t=0;t<256;++t)e=t,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,e=1&e?3988292384^e>>>1:e>>>1,n[t]=e;e=-1;for(const o of t)e=e>>>8^n[255&(e^o)];return e^=-1,[e>>24&255,e>>16&255,e>>8&255,255&e]}(o))}const r=t=>o.from(new Uint8Array(function(t){if(t.length<22||113!==t[0]||111!==t[1]||105!==t[2]||102!==t[3])return;const n=t[4]<<24|t[5]<<16|t[6]<<8|t[7],e=t[12],o=t[13];if(3!==e&&4!==e&&1!==o)return;const r=t.length-8,c=[],u=Array.from({length:64}).fill(0);let h=255,f=14;for(;f<r;){const n=t[f],e=n>>6;if(255===n){const n=t[f+1],e=t[f+2],o=t[f+3],s=t[f+4];f+=5,h=n<<24|e<<16|o<<8|s,u[(3*n+5*e+7*o+11*s)%64]=h,c.push(h)}else if(254===n){const n=t[f+1],e=t[f+2],o=t[f+3],s=255&h;f+=4,h=n<<24|e<<16|o<<8|s,u[(3*n+5*e+7*o+11*s)%64]=h,c.push(h)}else if(0===e){if(0===t[f]&&0===t[f+1]&&0===t[f+2]&&0===t[f+3]&&0===t[f+4]&&0===t[f+5]&&0===t[f+6]&&1===t[f+7])break;f+=1,h=u[n],c.push(h)}else if(1===e){const t=(n>>4&3)-2+(h>>24&255)&255,e=(n>>2&3)-2+(h>>16&255)&255,o=(3&n)-2+(h>>8&255)&255,s=255&h;f+=1,h=t<<24|e<<16|o<<8|s,u[(3*t+5*e+7*o+11*s)%64]=h,c.push(h)}else if(2===e){const e=t[f+1],o=(63&n)-32&255,s=(h>>24&255)+((e>>4&15)-8+o&255)&255,r=(h>>16&255)+o&255,l=(h>>8&255)+((15&e)-8+o&255)&255,i=255&h;f+=2,h=s<<24|r<<16|l<<8|i,u[(3*s+5*r+7*l+11*i)%64]=h,c.push(h)}else{for(let t=1+(63&n);t>0;--t)c.push(h);f+=1}}return function(t,n,e){const o=[],r=[120,1],c=1+n*e,u=65535^c;for(let s=0;t.length!=s;s+=n){const h=s+n;r.push(h===t.length?1:0,255&c,c>>8&255,255&u,u>>8&255),o.push(1),r.push(0);for(let n=s;h!==n;++n){const s=t[n];o.push(s>>24&255),r.push(s>>24&255),o.push(s>>16&255),r.push(s>>16&255),o.push(s>>8&255),r.push(s>>8&255),4===e&&(o.push(255&s),r.push(255&s))}}const h=t.length/n;return[137,80,78,71,13,10,26,10].concat(s("IHDR",[n>>24&255,n>>16&255,n>>8&255,255&n,h>>24&255,h>>16&255,h>>8&255,255&h,8,3===e?2:6,0,0,0]),s("IDAT",r.concat(function(t){let n=0,e=0;for(const o of t)n=(n+o)%65521,e=(e+n)%65521;return[e>>8,255&e,n>>8,255&n]}(o))),s("IEND"))}(c,n,e)}(new Uint8Array(t))))}}]);