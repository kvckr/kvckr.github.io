#!/usr/bin/env node
const dedent=require("dedent"),ejs=require("ejs"),fs=require("fs"),glob=require("glob"),hljs=require("highlight.js"),mkdirp=require("mkdirp"),path=require("path"),postcss=require("postcss"),{homepage,version}=require("./package.json");function buildCSS(){const e=`/*! 98.css custom build - ${homepage} */\n`+fs.readFileSync("style.css");return postcss().use(require("postcss-inline-svg")).use(require("postcss-copy")({dest:"dist",template:"[name].[ext]"})).process(e,{from:"style.css",to:"dist/98.custom-build.css",map:{inline:!1}}).then((e=>{mkdirp.sync("dist"),fs.writeFileSync("dist/98.custom-build.css",e.css),fs.writeFileSync("dist/98.custom-build.css.map",e.map.toString())}))}function buildDocs(){let e=0;const s=fs.readFileSync("docs/index.html.ejs","utf-8");glob("docs/*",((e,s)=>{if(e)throw"error globbing dist directory.";s.forEach((e=>fs.copyFileSync(e,path.join("dist",path.basename(e)))))})),fs.writeFileSync(path.join(__dirname,"/dist/index.html"),ejs.render(s,{getNewId:function(){return++e},getCurrentId:function(){return e},example:function(e){const s=/\[\[(.*)\]\]/g,i=dedent(e);return`<div class="example">\n      ${i.replace(s,"$1")}\n      <details>\n        <summary>Show code</summary>\n        <pre><code>${hljs.highlight("html",i.replace(s,"")).value}</code></pre>\n      </details>\n    </div>`}}))}function build(){buildCSS().then(buildDocs).catch((e=>console.log(e)))}module.exports=build,build();