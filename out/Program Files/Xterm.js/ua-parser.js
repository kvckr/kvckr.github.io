!function(i,e){"use strict";var o="function",a="undefined",r="object",t="string",n="model",s="name",b="type",w="vendor",l="version",d="architecture",u="console",c="mobile",p="tablet",m="smarttv",f="wearable",g="embedded",h="Amazon",v="Apple",x="ASUS",k="BlackBerry",y="Browser",_="Chrome",E="Firefox",N="Google",S="Huawei",T="LG",A="Microsoft",q="Motorola",z="Opera",C="Samsung",R="Sony",U="Xiaomi",M="Zebra",O=function(i){var e={};for(var o in i)e[i[o].toUpperCase()]=i[o];return e},P=function(i,e){return typeof i===t&&-1!==j(e).indexOf(j(i))},j=function(i){return i.toLowerCase()},B=function(i,e){if(typeof i===t)return i=i.replace(/^\s+|\s+$/g,""),typeof e===a?i:i.substring(0,255)},D=function(i,a){for(var t,n,s,b,w,l,d=0;d<a.length&&!w;){var u=a[d],c=a[d+1];for(t=n=0;t<u.length&&!w;)if(w=u[t++].exec(i))for(s=0;s<c.length;s++)l=w[++n],typeof(b=c[s])===r&&b.length>0?2==b.length?typeof b[1]==o?this[b[0]]=b[1].call(this,l):this[b[0]]=b[1]:3==b.length?typeof b[1]!==o||b[1].exec&&b[1].test?this[b[0]]=l?l.replace(b[1],b[2]):e:this[b[0]]=l?b[1].call(this,l,b[2]):e:4==b.length&&(this[b[0]]=l?b[3].call(this,l.replace(b[1],b[2])):e):this[b]=l||e;d+=2}},G=function(i,o){for(var a in o)if(typeof o[a]===r&&o[a].length>0){for(var t=0;t<o[a].length;t++)if(P(o[a][t],i))return"?"===a?e:a}else if(P(o[a],i))return"?"===a?e:a;return i},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[l,[s,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[l,[s,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[s,l],[/opios[\/ ]+([\w\.]+)/i],[l,[s,z+" Mini"]],[/\bopr\/([\w\.]+)/i],[l,[s,z]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,l],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[l,[s,"UC"+y]],[/\bqbcore\/([\w\.]+)/i],[l,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[l,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[l,[s,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[l,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[l,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure "+y],l],[/\bfocus\/([\w\.]+)/i],[l,[s,E+" Focus"]],[/\bopt\/([\w\.]+)/i],[l,[s,z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[l,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[l,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[l,[s,z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[l,[s,"MIUI "+y]],[/fxios\/([-\w\.]+)/i],[l,[s,E]],[/\bqihu|(qi?ho?o?|360)browser/i],[[s,"360 "+y]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 "+y],l],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],l],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[s,l],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[s],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[s,"Facebook"],l],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[s,l],[/\bgsa\/([\w\.]+) .*safari\//i],[l,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[l,[s,_+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[s,_+" WebView"],l],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[l,[s,"Android "+y]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[s,l],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[l,[s,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[l,s],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[s,[l,G,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[s,l],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[s,"Netscape"],l],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[l,[s,E+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[s,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[d,"amd64"]],[/(ia32(?=;))/i],[[d,j]],[/((?:i[346]|x)86)[;\)]/i],[[d,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[d,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[d,"armhf"]],[/windows (ce|mobile); ppc;/i],[[d,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[d,/ower/,"",j]],[/(sun4\w)[;\)]/i],[[d,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[d,j]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[n,[w,C],[b,p]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[n,[w,C],[b,c]],[/\((ip(?:hone|od)[\w ]*);/i],[n,[w,v],[b,c]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[n,[w,v],[b,p]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[n,[w,S],[b,p]],[/huawei([-\w ]+)[;\)]/i,/\b(nexus 6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\) ]/i],[n,[w,S],[b,c]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte)?[_ ]?(?:\d?\w?)[_ ]?(?:plus)?) bui/i],[[n,/_/g," "],[w,U],[b,c]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[n,/_/g," "],[w,U],[b,p]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[n,[w,"OPPO"],[b,c]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[n,[w,"Vivo"],[b,c]],[/\b(rmx[12]\d{3})(?: bui|;)/i],[n,[w,"Realme"],[b,c]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[n,[w,q],[b,c]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[n,[w,q],[b,p]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[n,[w,T],[b,p]],[/(lm-?f100[nv]?|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+) bui/i],[n,[w,T],[b,c]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[n,[w,"Lenovo"],[b,p]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[n,/_/g," "],[w,"Nokia"],[b,c]],[/(pixel c)\b/i],[n,[w,N],[b,p]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[n,[w,N],[b,c]],[/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[n,[w,R],[b,c]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[n,"Xperia Tablet"],[w,R],[b,p]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1) bui/i,/oneplus (a\d{4})[) ]/i],[n,[w,"OnePlus"],[b,c]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[n,[w,h],[b,p]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[n,/(.+)/g,"Fire Phone $1"],[w,h],[b,c]],[/(playbook);[-\w\),; ]+(rim)/i],[n,w,[b,p]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[n,[w,k],[b,c]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[n,[w,x],[b,p]],[/ (z[es]6[027][01][km][ls]|zenfone \d\w?)\b/i],[n,[w,x],[b,c]],[/(nexus 9)/i],[n,[w,"HTC"],[b,p]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[w,[n,/_/g," "],[b,c]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[n,[w,"Acer"],[b,p]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[n,[w,"Meizu"],[b,c]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,n,[b,c]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,n,[b,p]],[/(surface duo)/i],[n,[w,A],[b,p]],[/droid [\d\.]+; (fp\du?) b/i],[n,[w,"Fairphone"],[b,c]],[/(u304aa)/i],[n,[w,"AT&T"],[b,c]],[/\bsie-(\w*)/i],[n,[w,"Siemens"],[b,c]],[/\b(rct\w+) b/i],[n,[w,"RCA"],[b,p]],[/\b(venue[\d ]{2,7}) b/i],[n,[w,"Dell"],[b,p]],[/\b(q(?:mv|ta)\w+) b/i],[n,[w,"Verizon"],[b,p]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[n,[w,"Barnes & Noble"],[b,p]],[/\b(tm\d{3}\w+) b/i],[n,[w,"NuVision"],[b,p]],[/\b(k88) b/i],[n,[w,"ZTE"],[b,p]],[/\b(nx\d{3}j) b/i],[n,[w,"ZTE"],[b,c]],[/\b(gen\d{3}) b.+49h/i],[n,[w,"Swiss"],[b,c]],[/\b(zur\d{3}) b/i],[n,[w,"Swiss"],[b,p]],[/\b((zeki)?tb.*\b) b/i],[n,[w,"Zeki"],[b,p]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],n,[b,p]],[/\b(ns-?\w{0,9}) b/i],[n,[w,"Insignia"],[b,p]],[/\b((nxa|next)-?\w{0,9}) b/i],[n,[w,"NextBook"],[b,p]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],n,[b,c]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],n,[b,c]],[/\b(ph-1) /i],[n,[w,"Essential"],[b,c]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[n,[w,"Envizen"],[b,p]],[/\b(trio[-\w\. ]+) b/i],[n,[w,"MachSpeed"],[b,p]],[/\btu_(1491) b/i],[n,[w,"Rotor"],[b,p]],[/(shield[\w ]+) b/i],[n,[w,"Nvidia"],[b,p]],[/(sprint) (\w+)/i],[w,n,[b,c]],[/(kin\.[onetw]{3})/i],[[n,/\./g," "],[w,A],[b,c]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[n,[w,M],[b,p]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[n,[w,M],[b,c]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,n,[b,u]],[/droid.+; (shield) bui/i],[n,[w,"Nvidia"],[b,u]],[/(playstation [345portablevi]+)/i],[n,[w,R],[b,u]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[n,[w,A],[b,u]],[/smart-tv.+(samsung)/i],[w,[b,m]],[/hbbtv.+maple;(\d+)/i],[[n,/^/,"SmartTV"],[w,C],[b,m]],[/(?:nux; netcast.+smarttv|lg netcast\.tv-201\d)/i],[[w,T],[b,m]],[/(apple) ?tv/i],[w,[n,v+" TV"],[b,m]],[/crkey/i],[[n,_+"cast"],[w,N],[b,m]],[/droid.+aft(\w)( bui|\))/i],[n,[w,h],[b,m]],[/\(dtv[\);].+(aquos)/i],[n,[w,"Sharp"],[b,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[w,B],[n,B],[b,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,m]],[/((pebble))app/i],[w,n,[b,f]],[/droid.+; (glass) \d/i],[n,[w,N],[b,f]],[/droid.+; (wt63?0{2,3})\)/i],[n,[w,M],[b,f]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[b,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[n,[b,c]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[n,[b,p]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,p]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,c]],[/(android[-\w\. ]{0,9});.+buil/i],[n,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[l,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[l,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[s,l],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[l,s]],gpu:[[/(intel|nvidia|sis|amd|apple|powervr)\W? (.+)/i,/(((?:radeon|adreno|geforce|mali).+))/i],[[w,G,{AMD:"Radeon",ARM:"Mali",NVIDIA:"GeForce",Qualcomm:"Adreno"}],[n,/ ?(\(.+?\)| direct3d.+| opengl.+|\/.+$| gpu$)/gi,""]]],os:[[/microsoft (windows) (vista|xp)/i],[s,l],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[s,[l,G,V]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[s,"Windows"],[l,G,V]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[l,/_/g,"."],[s,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[s,"Mac OS"],[l,/_/g,"."]],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[s,l],[/\(bb(10);/i],[l,[s,k]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[l,[s,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[l,[s,E+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[l,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[l,[s,_+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[s,"Chromium OS"],l],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopc]{0,4}bsd|dragonfly) ?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[s,l],[/(sunos) ?([\w\.\d]*)/i],[[s,"Solaris"],l],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[s,l]]},I=function(o,u){if(typeof o===r&&(u=o,o=e),!(this instanceof I))return new I(o,u).getResult();var c,p=o||(typeof i!==a&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),m=u?function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o}(W,u):W;if(this.getBrowser=function(){var i,o={};return o[s]=e,o[l]=e,D.call(o,p,m.browser),o.major=typeof(i=o.version)===t?i.replace(/[^\d\.]/g,"").split(".")[0]:e,o},this.getCPU=function(){var i={};return i[d]=e,D.call(i,p,m.cpu),i},this.getDevice=function(){var i={};return i[w]=e,i[n]=e,i[b]=e,D.call(i,p,m.device),i},this.getEngine=function(){var i={};return i[s]=e,i[l]=e,D.call(i,p,m.engine),i},this.getGPU=function(){var i={};return i[w]=e,i[n]=e,c&&D.call(i,c,m.gpu),i},this.getOS=function(){var i={};return i[s]=e,i[l]=e,D.call(i,p,m.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU(),gpu:this.getGPU()}},this.getRenderer=function(){return c},this.setRenderer=function(i){return c=i,this},this.getUA=function(){return p},this.setUA=function(i){return p=typeof i===t&&i.length>255?B(i,255):i,this},this.setUA(p),typeof i!==a&&i.document){var f=document.createElement("canvas"),g=f.getContext?f.getContext("webgl2")||f.getContext("webgl")||f.getContext("experimental-webgl"):e;this.setRenderer(g&&g.getParameter&&g.getExtension&&g.getExtension("WEBGL_debug_renderer_info")?g.getParameter(g.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL):e)}return this};I.VERSION="0.7.28-gpu-experimental",I.BROWSER=O([s,l,"major"]),I.CPU=O([d]),I.DEVICE=O([n,w,b,u,c,m,p,f,g]),I.ENGINE=I.OS=O([s,l]),typeof exports!==a?(typeof module!==a&&module.exports&&(exports=module.exports=I),exports.UAParser=I):typeof define===o&&define.amd?define((function(){return I})):typeof i!==a&&(i.UAParser=I);var L=typeof i!==a&&(i.jQuery||i.Zepto);if(L&&!L.ua){var $=new I;L.ua=$.getResult(),L.ua.get=function(){return $.getUA()},L.ua.set=function(i){$.setUA(i);var e=$.getResult();for(var o in e)L.ua[o]=e[o]}}}("object"==typeof window?window:this);