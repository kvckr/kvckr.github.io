const recordedDevice={buttons:[0,0,0,0],calibration:{DPI:{value:324},center:{value:.15018756687641144},configVersion:"3.0",flipImageX:{value:0},flipImageY:{value:0},flipSubp:{value:0},fringe:{value:0},invView:{value:1},pitch:{value:52.58013153076172},screenH:{value:2048},screenW:{value:1536},slope:{value:-7.145165920257568},verticalAngle:{value:0},viewCone:{value:40}},defaultQuilt:{quiltAspect:.75,quiltX:3840,quiltY:3840,tileX:8,tileY:6},hardwareVersion:"portrait",hwid:"LKG-P11063",index:0,joystickIndex:-1,state:"ok",unityIndex:1,windowCoords:[1440,900]},interpretDevice=e=>{if(null==e)return{enabled:!1,tileX:1,tileY:1};const t=Object.fromEntries(Object.entries(e.calibration).map((([e,t])=>[e,t.value])).filter((([e,t])=>null!=t))),l=t.screenW/t.DPI,i=t.pitch*l*Math.cos(Math.atan(1/t.slope)),n=t.screenH/(t.screenW*t.slope)*-(2*t.flipImageX-1),r=1/(3*t.screenW),a=e.defaultQuilt,u=[Math.floor(a.quiltX/a.tileX)*a.tileX/a.quiltX,Math.floor(a.quiltY/a.tileY)*a.tileY/a.quiltY];return{...a,...t,pitch:i,tilt:n,subp:r,quiltViewPortion:u,fov:15,enabled:!0}};export default async(e=!1,t=!1)=>{if(!e)return interpretDevice(null);const l=await import("../../lib/holoplaycore.module.js"),i=await new Promise(((e,t)=>new l.Client((t=>e(t.devices?.[0])),(t=>e(null)))));return interpretDevice(null==i&&t?recordedDevice:i)};