import{makeFullScreenQuad,makePipeline}from"./utils.js";import makeBloomPass from"./bloomPass.js";import makeImagePass from"./imagePass.js";import getLKG from"./lkgHelper.js";import makeMirrorPass from"./mirrorPass.js";import makePalettePass from"./palettePass.js";import makeQuiltPass from"./quiltPass.js";import makeRain from"./rainPass.js";import makeStripePass from"./stripePass.js";const effects={none:null,plain:makePalettePass,palette:makePalettePass,customStripes:makeStripePass,stripes:makeStripePass,pride:makeStripePass,transPride:makeStripePass,trans:makeStripePass,image:makeImagePass,mirror:makeMirrorPass},dimensions={width:1,height:1},loadJS=e=>new Promise(((t,a)=>{const s=document.createElement("script");s.onload=t,s.onerror=a,s.src=e,document.body.appendChild(s)}));delete window.Matrix;let previouslyLoaded=!1;window.Matrix=async(e,t)=>{await Promise.all([loadJS("/System/Matrix/lib/regl.min.js"),loadJS("/System/Matrix/lib/gl-matrix.js")]);const a=(a=t.resolution)=>{const s="number"==typeof a?a:t.resolution;e.width=Math.ceil(e.clientWidth*s),e.height=Math.ceil(e.clientHeight*s)};window.onresize=a,previouslyLoaded&&(a(1.01),setTimeout(a,250));const s=createREGL({canvas:e,extensions:["OES_texture_half_float","OES_texture_half_float_linear"],optionalExtensions:["EXT_color_buffer_half_float","WEBGL_color_buffer_float","OES_standard_derivatives"]}),i=await getLKG(t.useHoloplay,!0),o=makeFullScreenQuad(s),r=t.effect in effects?t.effect:"palette",m=makePipeline({regl:s,config:t,lkg:i},[makeRain,makeBloomPass,effects[r],makeQuiltPass]),l={tex:m[m.length-1].outputs.primary},n=s({uniforms:l});await Promise.all(m.map((e=>e.ready)));const c=s.frame((({viewportWidth:e,viewportHeight:a})=>{if(t.once&&c.cancel(),dimensions.width!==e||dimensions.height!==a){dimensions.width=e,dimensions.height=a;for(const t of m)t.setSize(e,a)}o((()=>{for(const e of m)e.execute();n()}))}));window.WallpaperDestroy=()=>{previouslyLoaded=!0;try{n.destroy()}catch{}try{o.destroy()}catch{}try{l.tex.destroy()}catch{}try{s.destroy()}catch{}try{c.cancel()}catch{}}};