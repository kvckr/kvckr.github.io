const fs=require("fs"),path=require("path"),glob=require("glob"),logFile=fs.createWriteStream(path.join(__dirname,"forge-hook.log"));logFile.write("Hello World\n\n"),module.exports={packagerConfig:{},makers:[{name:"@electron-forge/maker-squirrel",config:{name:"tracky_mouse_electron"}},{name:"@electron-forge/maker-zip",platforms:["darwin"]},{name:"@electron-forge/maker-deb",config:{}},{name:"@electron-forge/maker-rpm",config:{}}],hooks:{prePackage:e=>(logFile.write("prePackage hook\n\n"),new Promise(((e,r)=>{const o=path.resolve(`${__dirname}/../`),i=`${__dirname}/copied/`,a=`${o}/**`;logFile.write(`appGlob: ${a} \n\n`),glob(a,{ignore:[".*/**","**/tracky-mouse-electron/**","**/node_modules/**","**/private/**"]},(async(a,n)=>{if(logFile.write(`glob callback, files:\n${JSON.stringify(n)}\n\n`),logFile.write(`Deleting ${i}\n\n`),await fs.promises.rmdir(i,{recursive:!0}),a)return logFile.write(`Failed to copy app files:\n${a}`),void r(a);const l=[];for(const e of n){const r=path.join(i,path.relative(o,e));fs.statSync(e).isDirectory()||(await fs.promises.mkdir(path.dirname(r),{recursive:!0}),logFile.write(`Copy: ${e}\n`),logFile.write(`To: ${r}\n`),l.push(fs.promises.copyFile(e,r)))}await Promise.all(l),e()}))})))}};