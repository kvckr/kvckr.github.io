var UPNG={toRGBA8:function(e){var r=e.width,t=e.height;if(null==e.tabs.acTL)return[UPNG.toRGBA8.decodeImage(e.data,r,t,e).buffer];var n=[];null==e.frames[0].data&&(e.frames[0].data=e.data);for(var a=r*t*4,i=new Uint8Array(a),f=new Uint8Array(a),o=new Uint8Array(a),l=0;l<e.frames.length;l++){var s=e.frames[l],c=s.rect.x,u=s.rect.y,d=s.rect.width,h=s.rect.height,v=UPNG.toRGBA8.decodeImage(s.data,d,h,e);if(0!=l)for(var U=0;U<a;U++)o[U]=i[U];if(0==s.blend?UPNG._copyTile(v,d,h,i,r,t,c,u,0):1==s.blend&&UPNG._copyTile(v,d,h,i,r,t,c,u,1),n.push(i.buffer.slice(0)),0==s.dispose);else if(1==s.dispose)UPNG._copyTile(f,d,h,i,r,t,c,u,0);else if(2==s.dispose)for(U=0;U<a;U++)i[U]=o[U]}return n}};UPNG.toRGBA8.decodeImage=function(e,r,t,n){var a=r*t,i=UPNG.decode._getBPP(n),f=Math.ceil(r*i/8),o=new Uint8Array(4*a),l=new Uint32Array(o.buffer),s=n.ctype,c=n.depth,u=UPNG._bin.readUshort;Date.now();if(6==s){var d=a<<2;if(8==c)for(var h=0;h<d;h+=4)o[h]=e[h],o[h+1]=e[h+1],o[h+2]=e[h+2],o[h+3]=e[h+3];if(16==c)for(h=0;h<d;h++)o[h]=e[h<<1]}else if(2==s){var v=n.tabs.tRNS;if(null==v){if(8==c)for(h=0;h<a;h++){var U=3*h;l[h]=255<<24|e[U+2]<<16|e[U+1]<<8|e[U]}if(16==c)for(h=0;h<a;h++){U=6*h;l[h]=255<<24|e[U+4]<<16|e[U+2]<<8|e[U]}}else{var g=v[0],N=v[1],P=v[2];if(8==c)for(h=0;h<a;h++){var p=h<<2;U=3*h;l[h]=255<<24|e[U+2]<<16|e[U+1]<<8|e[U],e[U]==g&&e[U+1]==N&&e[U+2]==P&&(o[p+3]=0)}if(16==c)for(h=0;h<a;h++){p=h<<2,U=6*h;l[h]=255<<24|e[U+4]<<16|e[U+2]<<8|e[U],u(e,U)==g&&u(e,U+2)==N&&u(e,U+4)==P&&(o[p+3]=0)}}}else if(3==s){var G=n.tabs.PLTE,b=n.tabs.tRNS,w=b?b.length:0;if(1==c)for(var y=0;y<t;y++){var m=y*f,A=y*r;for(h=0;h<r;h++){p=A+h<<2;var _=3*(H=e[m+(h>>3)]>>7-((7&h)<<0)&1);o[p]=G[_],o[p+1]=G[_+1],o[p+2]=G[_+2],o[p+3]=H<w?b[H]:255}}if(2==c)for(y=0;y<t;y++)for(m=y*f,A=y*r,h=0;h<r;h++){p=A+h<<2,_=3*(H=e[m+(h>>2)]>>6-((3&h)<<1)&3);o[p]=G[_],o[p+1]=G[_+1],o[p+2]=G[_+2],o[p+3]=H<w?b[H]:255}if(4==c)for(y=0;y<t;y++)for(m=y*f,A=y*r,h=0;h<r;h++){p=A+h<<2,_=3*(H=e[m+(h>>1)]>>4-((1&h)<<2)&15);o[p]=G[_],o[p+1]=G[_+1],o[p+2]=G[_+2],o[p+3]=H<w?b[H]:255}if(8==c)for(h=0;h<a;h++){var H;p=h<<2,_=3*(H=e[h]);o[p]=G[_],o[p+1]=G[_+1],o[p+2]=G[_+2],o[p+3]=H<w?b[H]:255}}else if(4==s){if(8==c)for(h=0;h<a;h++){p=h<<2;var I=e[M=h<<1];o[p]=I,o[p+1]=I,o[p+2]=I,o[p+3]=e[M+1]}if(16==c)for(h=0;h<a;h++){var M;p=h<<2,I=e[M=h<<2];o[p]=I,o[p+1]=I,o[p+2]=I,o[p+3]=e[M+2]}}else if(0==s)for(g=n.tabs.tRNS?n.tabs.tRNS:-1,y=0;y<t;y++){var q=y*f,R=y*r;if(1==c)for(var T=0;T<r;T++){var z=(I=255*(e[q+(T>>>3)]>>>7-(7&T)&1))==255*g?0:255;l[R+T]=z<<24|I<<16|I<<8|I}else if(2==c)for(T=0;T<r;T++){z=(I=85*(e[q+(T>>>2)]>>>6-((3&T)<<1)&3))==85*g?0:255;l[R+T]=z<<24|I<<16|I<<8|I}else if(4==c)for(T=0;T<r;T++){z=(I=17*(e[q+(T>>>1)]>>>4-((1&T)<<2)&15))==17*g?0:255;l[R+T]=z<<24|I<<16|I<<8|I}else if(8==c)for(T=0;T<r;T++){z=(I=e[q+T])==g?0:255;l[R+T]=z<<24|I<<16|I<<8|I}else if(16==c)for(T=0;T<r;T++){I=e[q+(T<<1)],z=u(e,q+(T<<h))==g?0:255;l[R+T]=z<<24|I<<16|I<<8|I}}return o},UPNG.decode=function(e){for(var r,t=new Uint8Array(e),n=8,a=UPNG._bin,i=a.readUshort,f=a.readUint,o={tabs:{},frames:[]},l=new Uint8Array(t.length),s=0,c=0,u=[137,80,78,71,13,10,26,10],d=0;d<8;d++)if(t[d]!=u[d])throw"The input is not a PNG file!";for(;n<t.length;){var h=a.readUint(t,n);n+=4;var v=a.readASCII(t,n,4);if(n+=4,"IHDR"==v)UPNG.decode._IHDR(t,n,o);else if("CgBI"==v)o.tabs[v]=t.slice(n,n+4);else if("IDAT"==v){for(d=0;d<h;d++)l[s+d]=t[n+d];s+=h}else if("acTL"==v)o.tabs[v]={num_frames:f(t,n),num_plays:f(t,n+4)},r=new Uint8Array(t.length);else if("fcTL"==v){var U;if(0!=c)(U=o.frames[o.frames.length-1]).data=UPNG.decode._decompress(o,r.slice(0,c),U.rect.width,U.rect.height),c=0;var g={x:f(t,n+12),y:f(t,n+16),width:f(t,n+4),height:f(t,n+8)},N=i(t,n+22);N=i(t,n+20)/(0==N?100:N);var P={rect:g,delay:Math.round(1e3*N),dispose:t[n+24],blend:t[n+25]};o.frames.push(P)}else if("fdAT"==v){for(d=0;d<h-4;d++)r[c+d]=t[n+d+4];c+=h-4}else if("pHYs"==v)o.tabs[v]=[a.readUint(t,n),a.readUint(t,n+4),t[n+8]];else if("cHRM"==v){o.tabs[v]=[];for(d=0;d<8;d++)o.tabs[v].push(a.readUint(t,n+4*d))}else if("tEXt"==v||"zTXt"==v){null==o.tabs[v]&&(o.tabs[v]={});var p=a.nextZero(t,n),G=a.readASCII(t,n,p-n),b=n+h-p-1;if("tEXt"==v)A=a.readASCII(t,p+1,b);else{var w=UPNG.decode._inflate(t.slice(p+2,p+2+b));A=a.readUTF8(w,0,w.length)}o.tabs[v][G]=A}else if("iTXt"==v){null==o.tabs[v]&&(o.tabs[v]={});p=0;var y=n;p=a.nextZero(t,y);G=a.readASCII(t,y,p-y);var m=t[y=p+1];t[y+1];y+=2,p=a.nextZero(t,y);a.readASCII(t,y,p-y);y=p+1,p=a.nextZero(t,y);var A;a.readUTF8(t,y,p-y),b=h-((y=p+1)-n);if(0==m)A=a.readUTF8(t,y,b);else{w=UPNG.decode._inflate(t.slice(y,y+b));A=a.readUTF8(w,0,w.length)}o.tabs[v][G]=A}else if("PLTE"==v)o.tabs[v]=a.readBytes(t,n,h);else if("hIST"==v){var _=o.tabs.PLTE.length/3;o.tabs[v]=[];for(d=0;d<_;d++)o.tabs[v].push(i(t,n+2*d))}else if("tRNS"==v)3==o.ctype?o.tabs[v]=a.readBytes(t,n,h):0==o.ctype?o.tabs[v]=i(t,n):2==o.ctype&&(o.tabs[v]=[i(t,n),i(t,n+2),i(t,n+4)]);else if("gAMA"==v)o.tabs[v]=a.readUint(t,n)/1e5;else if("sRGB"==v)o.tabs[v]=t[n];else if("bKGD"==v)0==o.ctype||4==o.ctype?o.tabs[v]=[i(t,n)]:2==o.ctype||6==o.ctype?o.tabs[v]=[i(t,n),i(t,n+2),i(t,n+4)]:3==o.ctype&&(o.tabs[v]=t[n]);else if("IEND"==v)break;n+=h;a.readUint(t,n);n+=4}0!=c&&((U=o.frames[o.frames.length-1]).data=UPNG.decode._decompress(o,r.slice(0,c),U.rect.width,U.rect.height),c=0);return o.data=UPNG.decode._decompress(o,l,o.width,o.height),delete o.compress,delete o.interlace,delete o.filter,o},UPNG.decode._decompress=function(e,r,t,n){Date.now();var a=UPNG.decode._getBPP(e),i=Math.ceil(t*a/8),f=new Uint8Array((i+1+e.interlace)*n);r=e.tabs.CgBI?UPNG.inflateRaw(r,f):UPNG.decode._inflate(r,f);Date.now();return 0==e.interlace?r=UPNG.decode._filterZero(r,e,0,t,n):1==e.interlace&&(r=UPNG.decode._readInterlace(r,e)),r},UPNG.decode._inflate=function(e,r){return UPNG.inflateRaw(new Uint8Array(e.buffer,2,e.length-6),r)},UPNG.inflateRaw=function(){var e,r,t={};return t.H={},t.H.N=function(e,r){var n,a,i=Uint8Array,f=0,o=0,l=0,s=0,c=0,u=0,d=0,h=0,v=0;if(3==e[0]&&0==e[1])return r||new i(0);var U=t.H,g=U.b,N=U.e,P=U.R,p=U.n,G=U.A,b=U.Z,w=U.m,y=null==r;for(y&&(r=new i(e.length>>>2<<5));0==f;)if(f=g(e,v,1),o=g(e,v+1,2),v+=3,0!=o){if(y&&(r=t.H.W(r,h+(1<<17))),1==o&&(n=w.J,a=w.h,u=511,d=31),2==o){l=N(e,v,5)+257,s=N(e,v+5,5)+1,c=N(e,v+10,4)+4;v+=14;for(var m=1,A=0;A<38;A+=2)w.Q[A]=0,w.Q[A+1]=0;for(A=0;A<c;A++){var _=N(e,v+3*A,3);w.Q[1+(w.X[A]<<1)]=_,_>m&&(m=_)}v+=3*c,p(w.Q,m),G(w.Q,m,w.u),n=w.w,a=w.d,v=P(w.u,(1<<m)-1,l+s,e,v,w.v);var H=U.V(w.v,0,l,w.C);u=(1<<H)-1;var I=U.V(w.v,l,s,w.D);d=(1<<I)-1,p(w.C,H),G(w.C,H,n),p(w.D,I),G(w.D,I,a)}for(;;){var M=n[b(e,v)&u];v+=15&M;var q=M>>>4;if(q>>>8==0)r[h++]=q;else{if(256==q)break;var R=h+q-254;if(q>264){var T=w.q[q-257];R=h+(T>>>3)+N(e,v,7&T),v+=7&T}var z=a[b(e,v)&d];v+=15&z;var D=z>>>4,x=w.c[D],B=(x>>>4)+g(e,v,15&x);for(v+=15&x;h<R;)r[h]=r[h++-B],r[h]=r[h++-B],r[h]=r[h++-B],r[h]=r[h++-B];h=R}}}else{0!=(7&v)&&(v+=8-(7&v));var C=4+(v>>>3),S=e[C-4]|e[C-3]<<8;y&&(r=t.H.W(r,h+S)),r.set(new i(e.buffer,e.byteOffset+C,S),h),v=C+S<<3,h+=S}return r.length==h?r:r.slice(0,h)},t.H.W=function(e,r){var t=e.length;if(r<=t)return e;var n=new Uint8Array(t<<1);return n.set(e,0),n},t.H.R=function(e,r,n,a,i,f){for(var o=t.H.e,l=t.H.Z,s=0;s<n;){var c=e[l(a,i)&r];i+=15&c;var u=c>>>4;if(u<=15)f[s]=u,s++;else{var d=0,h=0;16==u?(h=3+o(a,i,2),i+=2,d=f[s-1]):17==u?(h=3+o(a,i,3),i+=3):18==u&&(h=11+o(a,i,7),i+=7);for(var v=s+h;s<v;)f[s]=d,s++}}return i},t.H.V=function(e,r,t,n){for(var a=0,i=0,f=n.length>>>1;i<t;){var o=e[i+r];n[i<<1]=0,n[1+(i<<1)]=o,o>a&&(a=o),i++}for(;i<f;)n[i<<1]=0,n[1+(i<<1)]=0,i++;return a},t.H.n=function(e,r){for(var n,a,i,f,o=t.H.m,l=e.length,s=o.j,c=0;c<=r;c++)s[c]=0;for(c=1;c<l;c+=2)s[e[c]]++;var u=o.K;for(n=0,s[0]=0,a=1;a<=r;a++)n=n+s[a-1]<<1,u[a]=n;for(i=0;i<l;i+=2)0!=(f=e[i+1])&&(e[i]=u[f],u[f]++)},t.H.A=function(e,r,n){for(var a=e.length,i=t.H.m.r,f=0;f<a;f+=2)if(0!=e[f+1])for(var o=f>>1,l=e[f+1],s=o<<4|l,c=r-l,u=e[f]<<c,d=u+(1<<c);u!=d;){n[i[u]>>>15-r]=s,u++}},t.H.l=function(e,r){for(var n=t.H.m.r,a=15-r,i=0;i<e.length;i+=2){var f=e[i]<<r-e[i+1];e[i]=n[f]>>>a}},t.H.M=function(e,r,t){t<<=7&r;var n=r>>>3;e[n]|=t,e[n+1]|=t>>>8},t.H.I=function(e,r,t){t<<=7&r;var n=r>>>3;e[n]|=t,e[n+1]|=t>>>8,e[n+2]|=t>>>16},t.H.e=function(e,r,t){return(e[r>>>3]|e[1+(r>>>3)]<<8)>>>(7&r)&(1<<t)-1},t.H.b=function(e,r,t){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16)>>>(7&r)&(1<<t)-1},t.H.Z=function(e,r){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16)>>>(7&r)},t.H.i=function(e,r){return(e[r>>>3]|e[1+(r>>>3)]<<8|e[2+(r>>>3)]<<16|e[3+(r>>>3)]<<24)>>>(7&r)},t.H.m=(e=Uint16Array,r=Uint32Array,{K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new r(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new r(286),Y:new r(30),a:new r(19),t:new r(15e3),k:new e(65536),g:new e(32768)}),function(){for(var e=t.H.m,r=0;r<32768;r++){var n=r;n=(4278255360&(n=(4042322160&(n=(3435973836&(n=(2863311530&n)>>>1|(1431655765&n)<<1))>>>2|(858993459&n)<<2))>>>4|(252645135&n)<<4))>>>8|(16711935&n)<<8,e.r[r]=(n>>>16|n<<16)>>>17}function a(e,r,t){for(;0!=r--;)e.push(0,t)}for(r=0;r<32;r++)e.q[r]=e.S[r]<<3|e.T[r],e.c[r]=e.p[r]<<4|e.z[r];a(e._,144,8),a(e._,112,9),a(e._,24,7),a(e._,8,8),t.H.n(e._,9),t.H.A(e._,9,e.J),t.H.l(e._,9),a(e.$,32,5),t.H.n(e.$,5),t.H.A(e.$,5,e.h),t.H.l(e.$,5),a(e.Q,19,0),a(e.C,286,0),a(e.D,30,0),a(e.v,320,0)}(),t.H.N}(),UPNG.decode._readInterlace=function(e,r){for(var t=r.width,n=r.height,a=UPNG.decode._getBPP(r),i=a>>3,f=Math.ceil(t*a/8),o=new Uint8Array(n*f),l=0,s=[0,0,4,0,2,0,1],c=[0,4,0,2,0,1,0],u=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1],h=0;h<7;){for(var v=u[h],U=d[h],g=0,N=0,P=s[h];P<n;)P+=v,N++;for(var p=c[h];p<t;)p+=U,g++;var G=Math.ceil(g*a/8);UPNG.decode._filterZero(e,r,l,g,N);for(var b=0,w=s[h];w<n;){for(var y=c[h],m=l+b*G<<3;y<t;){var A;if(1==a)A=(A=e[m>>3])>>7-(7&m)&1,o[w*f+(y>>3)]|=A<<7-((7&y)<<0);if(2==a)A=(A=e[m>>3])>>6-(7&m)&3,o[w*f+(y>>2)]|=A<<6-((3&y)<<1);if(4==a)A=(A=e[m>>3])>>4-(7&m)&15,o[w*f+(y>>1)]|=A<<4-((1&y)<<2);if(a>=8)for(var _=w*f+y*i,H=0;H<i;H++)o[_+H]=e[(m>>3)+H];m+=a,y+=U}b++,w+=v}g*N!=0&&(l+=N*(1+G)),h+=1}return o},UPNG.decode._getBPP=function(e){return[1,null,3,1,2,null,4][e.ctype]*e.depth},UPNG.decode._filterZero=function(e,r,t,n,a){var i=UPNG.decode._getBPP(r),f=Math.ceil(n*i/8),o=UPNG.decode._paeth;i=Math.ceil(i/8);var l=0,s=1,c=e[t],u=0;if(c>1&&(e[t]=[0,0,1][c-2]),3==c)for(u=i;u<f;u++)e[u+1]=e[u+1]+(e[u+1-i]>>>1)&255;for(var d=0;d<a;d++)if(u=0,0==(c=e[(s=(l=t+d*f)+d+1)-1]))for(;u<f;u++)e[l+u]=e[s+u];else if(1==c){for(;u<i;u++)e[l+u]=e[s+u];for(;u<f;u++)e[l+u]=e[s+u]+e[l+u-i]}else if(2==c)for(;u<f;u++)e[l+u]=e[s+u]+e[l+u-f];else if(3==c){for(;u<i;u++)e[l+u]=e[s+u]+(e[l+u-f]>>>1);for(;u<f;u++)e[l+u]=e[s+u]+(e[l+u-f]+e[l+u-i]>>>1)}else{for(;u<i;u++)e[l+u]=e[s+u]+o(0,e[l+u-f],0);for(;u<f;u++)e[l+u]=e[s+u]+o(e[l+u-i],e[l+u-f],e[l+u-i-f])}return e},UPNG.decode._paeth=function(e,r,t){var n=e+r-t,a=n-e,i=n-r,f=n-t;return a*a<=i*i&&a*a<=f*f?e:i*i<=f*f?r:t},UPNG.decode._IHDR=function(e,r,t){var n=UPNG._bin;t.width=n.readUint(e,r),r+=4,t.height=n.readUint(e,r),r+=4,t.depth=e[r],r++,t.ctype=e[r],r++,t.compress=e[r],r++,t.filter=e[r],r++,t.interlace=e[r],r++},UPNG._bin={nextZero:function(e,r){for(;0!=e[r];)r++;return r},readUshort:function(e,r){return e[r]<<8|e[r+1]},writeUshort:function(e,r,t){e[r]=t>>8&255,e[r+1]=255&t},readUint:function(e,r){return 16777216*e[r]+(e[r+1]<<16|e[r+2]<<8|e[r+3])},writeUint:function(e,r,t){e[r]=t>>24&255,e[r+1]=t>>16&255,e[r+2]=t>>8&255,e[r+3]=255&t},readASCII:function(e,r,t){for(var n="",a=0;a<t;a++)n+=String.fromCharCode(e[r+a]);return n},writeASCII:function(e,r,t){for(var n=0;n<t.length;n++)e[r+n]=t.charCodeAt(n)},readBytes:function(e,r,t){for(var n=[],a=0;a<t;a++)n.push(e[r+a]);return n},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,r,t){for(var n,a="",i=0;i<t;i++)a+="%"+UPNG._bin.pad(e[r+i].toString(16));try{n=decodeURIComponent(a)}catch(n){return UPNG._bin.readASCII(e,r,t)}return n}},UPNG._copyTile=function(e,r,t,n,a,i,f,o,l){for(var s=Math.min(r,a),c=Math.min(t,i),u=0,d=0,h=0;h<c;h++)for(var v=0;v<s;v++)if(f>=0&&o>=0?(u=h*r+v<<2,d=(o+h)*a+f+v<<2):(u=(-o+h)*r-f+v<<2,d=h*a+v<<2),0==l)n[d]=e[u],n[d+1]=e[u+1],n[d+2]=e[u+2],n[d+3]=e[u+3];else if(1==l){var U=e[u+3]*(1/255),g=e[u]*U,N=e[u+1]*U,P=e[u+2]*U,p=n[d+3]*(1/255),G=n[d]*p,b=n[d+1]*p,w=n[d+2]*p,y=1-U,m=U+p*y,A=0==m?0:1/m;n[d+3]=255*m,n[d+0]=(g+G*y)*A,n[d+1]=(N+b*y)*A,n[d+2]=(P+w*y)*A}else if(2==l){U=e[u+3],g=e[u],N=e[u+1],P=e[u+2],p=n[d+3],G=n[d],b=n[d+1],w=n[d+2];U==p&&g==G&&N==b&&P==w?(n[d]=0,n[d+1]=0,n[d+2]=0,n[d+3]=0):(n[d]=g,n[d+1]=N,n[d+2]=P,n[d+3]=U)}else if(3==l){U=e[u+3],g=e[u],N=e[u+1],P=e[u+2],p=n[d+3],G=n[d],b=n[d+1],w=n[d+2];if(U==p&&g==G&&N==b&&P==w)continue;if(U<220&&p>20)return!1}return!0},UPNG.encode=function(e,r,t,n,a,i,f){null==n&&(n=0),null==f&&(f=!1);var o=UPNG.encode.compress(e,r,t,n,[!1,!1,!1,0,f]);return UPNG.encode.compressPNG(o,-1),UPNG.encode._main(o,r,t,a,i)},UPNG.encodeLL=function(e,r,t,n,a,i,f,o){for(var l={ctype:0+(1==n?0:2)+(0==a?0:4),depth:i,frames:[]},s=(Date.now(),(n+a)*i),c=s*r,u=0;u<e.length;u++)l.frames.push({rect:{x:0,y:0,width:r,height:t},img:new Uint8Array(e[u]),blend:0,dispose:1,bpp:Math.ceil(s/8),bpl:Math.ceil(c/8)});return UPNG.encode.compressPNG(l,0,!0),UPNG.encode._main(l,r,t,f,o)},UPNG.encode._main=function(e,r,t,n,a){null==a&&(a={});var i=UPNG.crc.crc,f=UPNG._bin.writeUint,o=UPNG._bin.writeUshort,l=UPNG._bin.writeASCII,s=8,c=e.frames.length>1,u=!1,d=33+(c?20:0);if(null!=a.sRGB&&(d+=13),null!=a.pHYs&&(d+=21),3==e.ctype){for(var h=e.plte.length,v=0;v<h;v++)e.plte[v]>>>24!=255&&(u=!0);d+=8+3*h+4+(u?8+1*h+4:0)}for(var U=0;U<e.frames.length;U++){c&&(d+=38),d+=(m=e.frames[U]).cimg.length+12,0!=U&&(d+=4)}d+=12;var g=new Uint8Array(d),N=[137,80,78,71,13,10,26,10];for(v=0;v<8;v++)g[v]=N[v];if(f(g,s,13),l(g,s+=4,"IHDR"),f(g,s+=4,r),f(g,s+=4,t),g[s+=4]=e.depth,g[++s]=e.ctype,g[++s]=0,g[++s]=0,g[++s]=0,f(g,++s,i(g,s-17,17)),s+=4,null!=a.sRGB&&(f(g,s,1),l(g,s+=4,"sRGB"),g[s+=4]=a.sRGB,f(g,++s,i(g,s-5,5)),s+=4),null!=a.pHYs&&(f(g,s,9),l(g,s+=4,"pHYs"),f(g,s+=4,a.pHYs[0]),f(g,s+=4,a.pHYs[1]),g[s+=4]=a.pHYs[2],f(g,++s,i(g,s-13,13)),s+=4),c&&(f(g,s,8),l(g,s+=4,"acTL"),f(g,s+=4,e.frames.length),f(g,s+=4,null!=a.loop?a.loop:0),f(g,s+=4,i(g,s-12,12)),s+=4),3==e.ctype){f(g,s,3*(h=e.plte.length)),l(g,s+=4,"PLTE"),s+=4;for(v=0;v<h;v++){var P=3*v,p=e.plte[v],G=255&p,b=p>>>8&255,w=p>>>16&255;g[s+P+0]=G,g[s+P+1]=b,g[s+P+2]=w}if(f(g,s+=3*h,i(g,s-3*h-4,3*h+4)),s+=4,u){f(g,s,h),l(g,s+=4,"tRNS"),s+=4;for(v=0;v<h;v++)g[s+v]=e.plte[v]>>>24&255;f(g,s+=h,i(g,s-h-4,h+4)),s+=4}}var y=0;for(U=0;U<e.frames.length;U++){var m=e.frames[U];c&&(f(g,s,26),l(g,s+=4,"fcTL"),f(g,s+=4,y++),f(g,s+=4,m.rect.width),f(g,s+=4,m.rect.height),f(g,s+=4,m.rect.x),f(g,s+=4,m.rect.y),o(g,s+=4,n[U]),o(g,s+=2,1e3),g[s+=2]=m.dispose,g[++s]=m.blend,f(g,++s,i(g,s-30,30)),s+=4);var A=m.cimg;f(g,s,(h=A.length)+(0==U?0:4));var _=s+=4;l(g,s,0==U?"IDAT":"fdAT"),s+=4,0!=U&&(f(g,s,y++),s+=4),g.set(A,s),f(g,s+=h,i(g,_,s-_)),s+=4}return f(g,s,0),l(g,s+=4,"IEND"),f(g,s+=4,i(g,s-4,4)),s+=4,g.buffer},UPNG.encode.compressPNG=function(e,r,t){for(var n=0;n<e.frames.length;n++){var a=e.frames[n],i=(a.rect.width,a.rect.height),f=new Uint8Array(i*a.bpl+i);a.cimg=UPNG.encode._filterZero(a.img,i,a.bpp,a.bpl,f,r,t)}},UPNG.encode.compress=function(e,r,t,n,a){for(var i=a[0],f=a[1],o=a[2],l=a[3],s=a[4],c=6,u=8,d=255,h=0;h<e.length;h++)for(var v=new Uint8Array(e[h]),U=v.length,g=0;g<U;g+=4)d&=v[g+3];var N=255!=d,P=UPNG.encode.framize(e,r,t,i,f,o),p={},G=[],b=[];if(0!=n){var w=[];for(g=0;g<P.length;g++)w.push(P[g].img.buffer);var y=UPNG.encode.concatRGBA(w),m=UPNG.quantize(y,n);console.log(m);var A=0,_=new Uint8Array(m.abuf);for(g=0;g<P.length;g++){var H=(Q=P[g].img).length;b.push(new Uint8Array(m.inds.buffer,A>>2,H>>2));for(h=0;h<H;h+=4)Q[h]=_[A+h],Q[h+1]=_[A+h+1],Q[h+2]=_[A+h+2],Q[h+3]=_[A+h+3];A+=H}for(g=0;g<m.plte.length;g++)G.push(m.plte[g].est.rgba)}else for(h=0;h<P.length;h++){var I=P[h],M=new Uint32Array(I.img.buffer),q=I.rect.width,R=(U=M.length,new Uint8Array(U));b.push(R);for(g=0;g<U;g++){var T=M[g];if(0!=g&&T==M[g-1])R[g]=R[g-1];else if(g>q&&T==M[g-q])R[g]=R[g-q];else{var z=p[T];if(null==z&&(p[T]=z=G.length,G.push(T),G.length>=300))break;R[g]=z}}}var D=G.length;D<=256&&0==s&&(u=D<=2?1:D<=4?2:D<=16?4:8,u=Math.max(u,l));for(h=0;h<P.length;h++){(I=P[h]).rect.x,I.rect.y,q=I.rect.width;var x=I.rect.height,B=I.img,C=(new Uint32Array(B.buffer),4*q),S=4;if(D<=256&&0==s){C=Math.ceil(u*q/8);for(var L=new Uint8Array(C*x),Z=b[h],E=0;E<x;E++){g=E*C;var F=E*q;if(8==u)for(var Y=0;Y<q;Y++)L[g+Y]=Z[F+Y];else if(4==u)for(Y=0;Y<q;Y++)L[g+(Y>>1)]|=Z[F+Y]<<4-4*(1&Y);else if(2==u)for(Y=0;Y<q;Y++)L[g+(Y>>2)]|=Z[F+Y]<<6-2*(3&Y);else if(1==u)for(Y=0;Y<q;Y++)L[g+(Y>>3)]|=Z[F+Y]<<7-1*(7&Y)}B=L,c=3,S=1}else if(0==N&&1==P.length){L=new Uint8Array(q*x*3);var k=q*x;for(g=0;g<k;g++){var Q,X=4*g;L[Q=3*g]=B[X],L[Q+1]=B[X+1],L[Q+2]=B[X+2]}B=L,c=2,S=3,C=3*q}I.img=B,I.bpl=C,I.bpp=S}return{ctype:c,depth:u,plte:G,frames:P}},UPNG.encode.framize=function(e,r,t,n,a,i){for(var f=[],o=0;o<e.length;o++){var l,s=new Uint8Array(e[o]),c=new Uint32Array(s.buffer),u=0,d=0,h=r,v=t,U=n?1:0;if(0!=o){for(var g=i||n||1==o||0!=f[o-2].dispose?1:2,N=0,P=1e9,p=0;p<g;p++){for(var G=new Uint8Array(e[o-1-p]),b=new Uint32Array(e[o-1-p]),w=r,y=t,m=-1,A=-1,_=0;_<t;_++)for(var H=0;H<r;H++){c[D=_*r+H]!=b[D]&&(H<w&&(w=H),H>m&&(m=H),_<y&&(y=_),_>A&&(A=_))}-1==m&&(w=y=m=A=0),a&&(1==(1&w)&&w--,1==(1&y)&&y--);var I=(m-w+1)*(A-y+1);I<P&&(P=I,N=p,u=w,d=y,h=m-w+1,v=A-y+1)}G=new Uint8Array(e[o-1-N]);1==N&&(f[o-1].dispose=2),l=new Uint8Array(h*v*4),UPNG._copyTile(G,r,t,l,h,v,-u,-d,0),1==(U=UPNG._copyTile(s,r,t,l,h,v,-u,-d,3)?1:0)?UPNG.encode._prepareDiff(s,r,t,l,{x:u,y:d,width:h,height:v}):UPNG._copyTile(s,r,t,l,h,v,-u,-d,0)}else l=s.slice(0);f.push({rect:{x:u,y:d,width:h,height:v},img:l,blend:U,dispose:0})}if(n)for(o=0;o<f.length;o++){if(1!=(x=f[o]).blend){var M=x.rect,q=f[o-1].rect,R=Math.min(M.x,q.x),T=Math.min(M.y,q.y),z={x:R,y:T,width:Math.max(M.x+M.width,q.x+q.width)-R,height:Math.max(M.y+M.height,q.y+q.height)-T};f[o-1].dispose=1,o-1!=0&&UPNG.encode._updateFrame(e,r,t,f,o-1,z,a),UPNG.encode._updateFrame(e,r,t,f,o,z,a)}}if(1!=e.length)for(var D=0;D<f.length;D++){var x;(x=f[D]).rect.width*x.rect.height}return f},UPNG.encode._updateFrame=function(e,r,t,n,a,i,f){for(var o=Uint8Array,l=Uint32Array,s=new o(e[a-1]),c=new l(e[a-1]),u=a+1<e.length?new o(e[a+1]):null,d=new o(e[a]),h=new l(d.buffer),v=r,U=t,g=-1,N=-1,P=0;P<i.height;P++)for(var p=0;p<i.width;p++){var G=i.x+p,b=i.y+P,w=b*r+G,y=h[w];0==y||0==n[a-1].dispose&&c[w]==y&&(null==u||0!=u[4*w+3])||(G<v&&(v=G),G>g&&(g=G),b<U&&(U=b),b>N&&(N=b))}-1==g&&(v=U=g=N=0),f&&(1==(1&v)&&v--,1==(1&U)&&U--),i={x:v,y:U,width:g-v+1,height:N-U+1};var m=n[a];m.rect=i,m.blend=1,m.img=new Uint8Array(i.width*i.height*4),0==n[a-1].dispose?(UPNG._copyTile(s,r,t,m.img,i.width,i.height,-i.x,-i.y,0),UPNG.encode._prepareDiff(d,r,t,m.img,i)):UPNG._copyTile(d,r,t,m.img,i.width,i.height,-i.x,-i.y,0)},UPNG.encode._prepareDiff=function(e,r,t,n,a){UPNG._copyTile(e,r,t,n,a.width,a.height,-a.x,-a.y,2)},UPNG.encode._filterZero=function(e,r,t,n,a,i,f){var o,l=[],s=[0,1,2,3,4];-1!=i?s=[i]:(r*n>5e5||1==t)&&(s=[0]),f&&(o={level:0});for(var c=a.length>1e7&&null!=UZIP?UZIP:pako,u=(Date.now(),0);u<s.length;u++){for(var d=0;d<r;d++)UPNG.encode._filterLine(a,e,d,n,t,s[u]);l.push(c.deflate(a,o))}var h,v=1e9;for(u=0;u<l.length;u++)l[u].length<v&&(h=u,v=l[u].length);return l[h]},UPNG.encode._filterLine=function(e,r,t,n,a,i){var f=t*n,o=f+t,l=UPNG.decode._paeth;if(e[o]=i,o++,0==i)if(n<500)for(var s=0;s<n;s++)e[o+s]=r[f+s];else e.set(new Uint8Array(r.buffer,f,n),o);else if(1==i){for(s=0;s<a;s++)e[o+s]=r[f+s];for(s=a;s<n;s++)e[o+s]=r[f+s]-r[f+s-a]+256&255}else if(0==t){for(s=0;s<a;s++)e[o+s]=r[f+s];if(2==i)for(s=a;s<n;s++)e[o+s]=r[f+s];if(3==i)for(s=a;s<n;s++)e[o+s]=r[f+s]-(r[f+s-a]>>1)+256&255;if(4==i)for(s=a;s<n;s++)e[o+s]=r[f+s]-l(r[f+s-a],0,0)+256&255}else{if(2==i)for(s=0;s<n;s++)e[o+s]=r[f+s]+256-r[f+s-n]&255;if(3==i){for(s=0;s<a;s++)e[o+s]=r[f+s]+256-(r[f+s-n]>>1)&255;for(s=a;s<n;s++)e[o+s]=r[f+s]+256-(r[f+s-n]+r[f+s-a]>>1)&255}if(4==i){for(s=0;s<a;s++)e[o+s]=r[f+s]+256-l(0,r[f+s-n],0)&255;for(s=a;s<n;s++)e[o+s]=r[f+s]+256-l(r[f+s-a],r[f+s-n],r[f+s-a-n])&255}}},UPNG.crc={table:function(){for(var e=new Uint32Array(256),r=0;r<256;r++){for(var t=r,n=0;n<8;n++)1&t?t=3988292384^t>>>1:t>>>=1;e[r]=t}return e}(),update:function(e,r,t,n){for(var a=0;a<n;a++)e=UPNG.crc.table[255&(e^r[t+a])]^e>>>8;return e},crc:function(e,r,t){return 4294967295^UPNG.crc.update(4294967295,e,r,t)}},UPNG.quantize=function(e,r){var t,n=new Uint8Array(e),a=n.slice(0),i=new Uint32Array(a.buffer),f=UPNG.quantize.getKDtree(a,r),o=f[0],l=f[1],s=UPNG.quantize.planeDst,c=n,u=i,d=c.length,h=new Uint8Array(n.length>>2);if(n.length<2e7)for(var v=0;v<d;v+=4){var U=c[v]*(1/255),g=c[v+1]*(1/255),N=c[v+2]*(1/255),P=c[v+3]*(1/255);t=UPNG.quantize.getNearest(o,U,g,N,P),h[v>>2]=t.ind,u[v>>2]=t.est.rgba}else for(v=0;v<d;v+=4){U=c[v]*(1/255),g=c[v+1]*(1/255),N=c[v+2]*(1/255),P=c[v+3]*(1/255);for(t=o;t.left;)t=s(t.est,U,g,N,P)<=0?t.left:t.right;h[v>>2]=t.ind,u[v>>2]=t.est.rgba}return{abuf:a.buffer,inds:h,plte:l}},UPNG.quantize.getKDtree=function(e,r,t){null==t&&(t=1e-4);var n=new Uint32Array(e.buffer),a={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};a.bst=UPNG.quantize.stats(e,a.i0,a.i1),a.est=UPNG.quantize.estats(a.bst);for(var i=[a];i.length<r;){for(var f=0,o=0,l=0;l<i.length;l++)i[l].est.L>f&&(f=i[l].est.L,o=l);if(f<t)break;var s=i[o],c=UPNG.quantize.splitPixels(e,n,s.i0,s.i1,s.est.e,s.est.eMq255);if(s.i0>=c||s.i1<=c)s.est.L=0;else{var u={i0:s.i0,i1:c,bst:null,est:null,tdst:0,left:null,right:null};u.bst=UPNG.quantize.stats(e,u.i0,u.i1),u.est=UPNG.quantize.estats(u.bst);var d={i0:c,i1:s.i1,bst:null,est:null,tdst:0,left:null,right:null};d.bst={R:[],m:[],N:s.bst.N-u.bst.N};for(l=0;l<16;l++)d.bst.R[l]=s.bst.R[l]-u.bst.R[l];for(l=0;l<4;l++)d.bst.m[l]=s.bst.m[l]-u.bst.m[l];d.est=UPNG.quantize.estats(d.bst),s.left=u,s.right=d,i[o]=u,i.push(d)}}i.sort((function(e,r){return r.bst.N-e.bst.N}));for(l=0;l<i.length;l++)i[l].ind=l;return[a,i]},UPNG.quantize.getNearest=function(e,r,t,n,a){if(null==e.left)return e.tdst=UPNG.quantize.dist(e.est.q,r,t,n,a),e;var i=UPNG.quantize.planeDst(e.est,r,t,n,a),f=e.left,o=e.right;i>0&&(f=e.right,o=e.left);var l=UPNG.quantize.getNearest(f,r,t,n,a);if(l.tdst<=i*i)return l;var s=UPNG.quantize.getNearest(o,r,t,n,a);return s.tdst<l.tdst?s:l},UPNG.quantize.planeDst=function(e,r,t,n,a){var i=e.e;return i[0]*r+i[1]*t+i[2]*n+i[3]*a-e.eMq},UPNG.quantize.dist=function(e,r,t,n,a){var i=r-e[0],f=t-e[1],o=n-e[2],l=a-e[3];return i*i+f*f+o*o+l*l},UPNG.quantize.splitPixels=function(e,r,t,n,a,i){var f=UPNG.quantize.vecDot;n-=4;for(;t<n;){for(;f(e,t,a)<=i;)t+=4;for(;f(e,n,a)>i;)n-=4;if(t>=n)break;var o=r[t>>2];r[t>>2]=r[n>>2],r[n>>2]=o,t+=4,n-=4}for(;f(e,t,a)>i;)t-=4;return t+4},UPNG.quantize.vecDot=function(e,r,t){return e[r]*t[0]+e[r+1]*t[1]+e[r+2]*t[2]+e[r+3]*t[3]},UPNG.quantize.stats=function(e,r,t){for(var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,0],i=t-r>>2,f=r;f<t;f+=4){var o=e[f]*(1/255),l=e[f+1]*(1/255),s=e[f+2]*(1/255),c=e[f+3]*(1/255);a[0]+=o,a[1]+=l,a[2]+=s,a[3]+=c,n[0]+=o*o,n[1]+=o*l,n[2]+=o*s,n[3]+=o*c,n[5]+=l*l,n[6]+=l*s,n[7]+=l*c,n[10]+=s*s,n[11]+=s*c,n[15]+=c*c}return n[4]=n[1],n[8]=n[2],n[9]=n[6],n[12]=n[3],n[13]=n[7],n[14]=n[11],{R:n,m:a,N:i}},UPNG.quantize.estats=function(e){var r=e.R,t=e.m,n=e.N,a=t[0],i=t[1],f=t[2],o=t[3],l=0==n?0:1/n,s=[r[0]-a*a*l,r[1]-a*i*l,r[2]-a*f*l,r[3]-a*o*l,r[4]-i*a*l,r[5]-i*i*l,r[6]-i*f*l,r[7]-i*o*l,r[8]-f*a*l,r[9]-f*i*l,r[10]-f*f*l,r[11]-f*o*l,r[12]-o*a*l,r[13]-o*i*l,r[14]-o*f*l,r[15]-o*o*l],c=s,u=UPNG.M4,d=[Math.random(),Math.random(),Math.random(),Math.random()],h=0,v=0;if(0!=n)for(var U=0;U<16&&(d=u.multVec(c,d),v=Math.sqrt(u.dot(d,d)),d=u.sml(1/v,d),!(0!=U&&Math.abs(v-h)<1e-9));U++)h=v;var g=[a*l,i*l,f*l,o*l];return{Cov:s,q:g,e:d,L:h,eMq255:u.dot(u.sml(255,g),d),eMq:u.dot(d,g),rgba:(Math.round(255*g[3])<<24|Math.round(255*g[2])<<16|Math.round(255*g[1])<<8|Math.round(255*g[0])<<0)>>>0}},UPNG.M4={multVec:function(e,r){return[e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3],e[4]*r[0]+e[5]*r[1]+e[6]*r[2]+e[7]*r[3],e[8]*r[0]+e[9]*r[1]+e[10]*r[2]+e[11]*r[3],e[12]*r[0]+e[13]*r[1]+e[14]*r[2]+e[15]*r[3]]},dot:function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]},sml:function(e,r){return[e*r[0],e*r[1],e*r[2],e*r[3]]}},UPNG.encode.concatRGBA=function(e){for(var r=0,t=0;t<e.length;t++)r+=e[t].byteLength;var n=new Uint8Array(r),a=0;for(t=0;t<e.length;t++){for(var i=new Uint8Array(e[t]),f=i.length,o=0;o<f;o+=4){var l=i[o],s=i[o+1],c=i[o+2],u=i[o+3];0==u&&(l=s=c=0),n[a+o]=l,n[a+o+1]=s,n[a+o+2]=c,n[a+o+3]=u}a+=f}return n.buffer};