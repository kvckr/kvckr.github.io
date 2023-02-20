!function(){"use strict";function t(){var t=this;this.versionnumber="1.2.5",this.imageToSVG=function(e,n,r){r=t.checkoptions(r),t.loadImage(e,(function(e){n(t.imagedataToSVG(t.getImgdata(e),r))}),r)},this.imagedataToSVG=function(e,n){n=t.checkoptions(n);var r=t.imagedataToTracedata(e,n);return t.getsvgstring(r,n)},this.imageToTracedata=function(e,n,r){r=t.checkoptions(r),t.loadImage(e,(function(e){n(t.imagedataToTracedata(t.getImgdata(e),r))}),r)},this.imagedataToTracedata=function(e,n){n=t.checkoptions(n);var r=t.colorquantization(e,n);if(0===n.layering)for(var s={layers:[],palette:r.palette,width:r.array[0].length-2,height:r.array.length-2},o=0;o<r.palette.length;o++){var a=t.batchtracepaths(t.internodes(t.pathscan(t.layeringstep(r,o),n.pathomit),n),n.ltres,n.qtres);s.layers.push(a)}else{var i=t.layering(r);n.layercontainerid&&t.drawLayers(i,t.specpalette,n.scale,n.layercontainerid);var l=t.batchpathscan(i,n.pathomit),c=t.batchinternodes(l,n);s={layers:t.batchtracelayers(c,n.ltres,n.qtres),palette:r.palette,width:e.width,height:e.height}}return s},this.optionpresets={default:{corsenabled:!1,ltres:1,qtres:1,pathomit:8,rightangleenhance:!0,colorsampling:2,numberofcolors:16,mincolorratio:0,colorquantcycles:3,layering:0,strokewidth:1,linefilter:!1,scale:1,roundcoords:1,viewbox:!1,desc:!1,lcpr:0,qcpr:0,blurradius:0,blurdelta:20},posterized1:{colorsampling:0,numberofcolors:2},posterized2:{numberofcolors:4,blurradius:5},curvy:{ltres:.01,linefilter:!0,rightangleenhance:!1},sharp:{qtres:.01,linefilter:!1},detailed:{pathomit:0,roundcoords:2,ltres:.5,qtres:.5,numberofcolors:64},smoothed:{blurradius:5,blurdelta:64},grayscale:{colorsampling:0,colorquantcycles:1,numberofcolors:7},fixedpalette:{colorsampling:0,colorquantcycles:1,numberofcolors:27},randomsampling1:{colorsampling:1,numberofcolors:8},randomsampling2:{colorsampling:1,numberofcolors:64},artistic1:{colorsampling:0,colorquantcycles:1,pathomit:0,blurradius:5,blurdelta:64,ltres:.01,linefilter:!0,numberofcolors:16,strokewidth:2},artistic2:{qtres:.01,colorsampling:0,colorquantcycles:1,numberofcolors:4,strokewidth:0},artistic3:{qtres:10,ltres:10,numberofcolors:8},artistic4:{qtres:10,ltres:10,numberofcolors:64,blurradius:5,blurdelta:256,strokewidth:2},posterized3:{ltres:1,qtres:1,pathomit:20,rightangleenhance:!0,colorsampling:0,numberofcolors:3,mincolorratio:0,colorquantcycles:3,blurradius:3,blurdelta:20,strokewidth:0,linefilter:!1,roundcoords:1,pal:[{r:0,g:0,b:100,a:255},{r:255,g:255,b:255,a:255}]}},this.checkoptions=function(e){"string"==typeof(e=e||{})&&(e=e.toLowerCase(),e=t.optionpresets[e]?t.optionpresets[e]:{});for(var n=Object.keys(t.optionpresets.default),r=0;r<n.length;r++)e.hasOwnProperty(n[r])||(e[n[r]]=t.optionpresets.default[n[r]]);return e},this.colorquantization=function(e,n){var r,s,o,a,i,l,c,h,g=[],d=0,p=[],u=e.width*e.height;if(e.data.length<4*u){for(var m=new Uint8ClampedArray(4*u),f=0;f<u;f++)m[4*f]=e.data[3*f],m[4*f+1]=e.data[3*f+1],m[4*f+2]=e.data[3*f+2],m[4*f+3]=255;e.data=m}for(i=0;i<e.height+2;i++)for(g[i]=[],a=0;a<e.width+2;a++)g[i][a]=-1;for(h=n.pal?n.pal:0===n.colorsampling?t.generatepalette(n.numberofcolors):1===n.colorsampling?t.samplepalette(n.numberofcolors,e):t.samplepalette2(n.numberofcolors,e),n.blurradius>0&&(e=t.blur(e,n.blurradius,n.blurdelta)),c=0;c<n.colorquantcycles;c++){if(c>0)for(l=0;l<h.length;l++)p[l].n>0&&(h[l]={r:Math.floor(p[l].r/p[l].n),g:Math.floor(p[l].g/p[l].n),b:Math.floor(p[l].b/p[l].n),a:Math.floor(p[l].a/p[l].n)}),p[l].n/u<n.mincolorratio&&c<n.colorquantcycles-1&&(h[l]={r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:Math.floor(255*Math.random())});for(a=0;a<h.length;a++)p[a]={r:0,g:0,b:0,a:0,n:0};for(i=0;i<e.height;i++)for(a=0;a<e.width;a++){for(d=4*(i*e.width+a),o=0,s=1024,l=0;l<h.length;l++)(r=Math.abs(h[l].r-e.data[d])+Math.abs(h[l].g-e.data[d+1])+Math.abs(h[l].b-e.data[d+2])+Math.abs(h[l].a-e.data[d+3]))<s&&(s=r,o=l);p[o].r+=e.data[d],p[o].g+=e.data[d+1],p[o].b+=e.data[d+2],p[o].a+=e.data[d+3],p[o].n++,g[i+1][a+1]=o}}return{array:g,palette:h}},this.samplepalette=function(t,e){for(var n,r=[],s=0;s<t;s++)n=4*Math.floor(Math.random()*e.data.length/4),r.push({r:e.data[n],g:e.data[n+1],b:e.data[n+2],a:e.data[n+3]});return r},this.samplepalette2=function(t,e){for(var n,r=[],s=Math.ceil(Math.sqrt(t)),o=Math.ceil(t/s),a=e.width/(s+1),i=e.height/(o+1),l=0;l<o;l++)for(var c=0;c<s&&r.length!==t;c++)n=4*Math.floor((l+1)*i*e.width+(c+1)*a),r.push({r:e.data[n],g:e.data[n+1],b:e.data[n+2],a:e.data[n+3]});return r},this.generatepalette=function(t){var e,n,r,s=[];if(t<8)for(var o=Math.floor(255/(t-1)),a=0;a<t;a++)s.push({r:a*o,g:a*o,b:a*o,a:255});else{var i=Math.floor(Math.pow(t,1/3)),l=Math.floor(255/(i-1)),c=t-i*i*i;for(e=0;e<i;e++)for(n=0;n<i;n++)for(r=0;r<i;r++)s.push({r:e*l,g:n*l,b:r*l,a:255});for(e=0;e<c;e++)s.push({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:Math.floor(255*Math.random())})}return s},this.layering=function(t){var e,n,r,s,o,a,i,l,c,h,g,d=[],p=0,u=t.array.length,m=t.array[0].length;for(g=0;g<t.palette.length;g++)for(d[g]=[],h=0;h<u;h++)for(d[g][h]=[],c=0;c<m;c++)d[g][h][c]=0;for(h=1;h<u-1;h++)for(c=1;c<m-1;c++)p=t.array[h][c],e=t.array[h-1][c-1]===p?1:0,n=t.array[h-1][c]===p?1:0,r=t.array[h-1][c+1]===p?1:0,s=t.array[h][c-1]===p?1:0,o=t.array[h][c+1]===p?1:0,a=t.array[h+1][c-1]===p?1:0,i=t.array[h+1][c]===p?1:0,l=t.array[h+1][c+1]===p?1:0,d[p][h+1][c+1]=1+2*o+4*l+8*i,s||(d[p][h+1][c]=2+4*i+8*a),n||(d[p][h][c+1]=0+2*r+4*o+8),e||(d[p][h][c]=0+2*n+4+8*s);return d},this.layeringstep=function(t,e){var n,r,s=[],o=t.array.length,a=t.array[0].length;for(r=0;r<o;r++)for(s[r]=[],n=0;n<a;n++)s[r][n]=0;for(r=1;r<o;r++)for(n=1;n<a;n++)s[r][n]=(t.array[r-1][n-1]===e?1:0)+(t.array[r-1][n]===e?2:0)+(t.array[r][n-1]===e?8:0)+(t.array[r][n]===e?4:0);return s},this.pathscan_combined_lookup=[[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[13,3,0,1],[13,2,-1,0],[7,1,0,-1],[7,0,1,0]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[11,1,0,-1],[14,0,1,0],[14,3,0,1],[11,2,-1,0]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]]],this.pathscan=function(e,n){for(var r,s=[],o=0,a=0,i=0,l=0,c=e[0].length,h=e.length,g=0,d=!0,p=!1,u=0;u<h;u++)for(var m=0;m<c;m++)if(4==e[u][m]||11==e[u][m])for(i=m,l=u,s[o]={},s[o].points=[],s[o].boundingbox=[i,l,i,l],s[o].holechildren=[],d=!1,a=0,p=11==e[u][m],g=1;!d;){if(s[o].points[a]={},s[o].points[a].x=i-1,s[o].points[a].y=l-1,s[o].points[a].t=e[l][i],i-1<s[o].boundingbox[0]&&(s[o].boundingbox[0]=i-1),i-1>s[o].boundingbox[2]&&(s[o].boundingbox[2]=i-1),l-1<s[o].boundingbox[1]&&(s[o].boundingbox[1]=l-1),l-1>s[o].boundingbox[3]&&(s[o].boundingbox[3]=l-1),r=t.pathscan_combined_lookup[e[l][i]][g],e[l][i]=r[0],g=r[1],i+=r[2],l+=r[3],i-1===s[o].points[0].x&&l-1===s[o].points[0].y)if(d=!0,s[o].points.length<n)s.pop();else{if(s[o].isholepath=!!p,p){for(var f=0,y=[-1,-1,c+1,h+1],b=0;b<o;b++)!s[b].isholepath&&t.boundingboxincludes(s[b].boundingbox,s[o].boundingbox)&&t.boundingboxincludes(y,s[b].boundingbox)&&(f=b,y=s[b].boundingbox);s[f].holechildren.push(o)}o++}a++}return s},this.boundingboxincludes=function(t,e){return t[0]<e[0]&&t[1]<e[1]&&t[2]>e[2]&&t[3]>e[3]},this.batchpathscan=function(e,n){var r=[];for(var s in e)e.hasOwnProperty(s)&&(r[s]=t.pathscan(e[s],n));return r},this.internodes=function(e,n){var r,s,o=[],a=0,i=0,l=0,c=0,h=0;for(r=0;r<e.length;r++)for(o[r]={},o[r].points=[],o[r].boundingbox=e[r].boundingbox,o[r].holechildren=e[r].holechildren,o[r].isholepath=e[r].isholepath,a=e[r].points.length,s=0;s<a;s++)i=(s+1)%a,l=(s+2)%a,c=(s-1+a)%a,h=(s-2+a)%a,n.rightangleenhance&&t.testrightangle(e[r],h,c,s,i,l)&&(o[r].points.length>0&&(o[r].points[o[r].points.length-1].linesegment=t.getdirection(o[r].points[o[r].points.length-1].x,o[r].points[o[r].points.length-1].y,e[r].points[s].x,e[r].points[s].y)),o[r].points.push({x:e[r].points[s].x,y:e[r].points[s].y,linesegment:t.getdirection(e[r].points[s].x,e[r].points[s].y,(e[r].points[s].x+e[r].points[i].x)/2,(e[r].points[s].y+e[r].points[i].y)/2)})),o[r].points.push({x:(e[r].points[s].x+e[r].points[i].x)/2,y:(e[r].points[s].y+e[r].points[i].y)/2,linesegment:t.getdirection((e[r].points[s].x+e[r].points[i].x)/2,(e[r].points[s].y+e[r].points[i].y)/2,(e[r].points[i].x+e[r].points[l].x)/2,(e[r].points[i].y+e[r].points[l].y)/2)});return o},this.testrightangle=function(t,e,n,r,s,o){return t.points[r].x===t.points[e].x&&t.points[r].x===t.points[n].x&&t.points[r].y===t.points[s].y&&t.points[r].y===t.points[o].y||t.points[r].y===t.points[e].y&&t.points[r].y===t.points[n].y&&t.points[r].x===t.points[s].x&&t.points[r].x===t.points[o].x},this.getdirection=function(t,e,n,r){return t<n?e<r?1:e>r?7:0:t>n?e<r?3:e>r?5:4:e<r?2:e>r?6:8},this.batchinternodes=function(e,n){var r=[];for(var s in e)e.hasOwnProperty(s)&&(r[s]=t.internodes(e[s],n));return r},this.tracepath=function(e,n,r){var s,o,a,i=0,l={segments:[]};for(l.boundingbox=e.boundingbox,l.holechildren=e.holechildren,l.isholepath=e.isholepath;i<e.points.length;){for(s=e.points[i].linesegment,o=-1,a=i+1;(e.points[a].linesegment===s||e.points[a].linesegment===o||-1===o)&&a<e.points.length-1;)e.points[a].linesegment!==s&&-1===o&&(o=e.points[a].linesegment),a++;a===e.points.length-1&&(a=0),l.segments=l.segments.concat(t.fitseq(e,n,r,i,a)),i=a>0?a:e.points.length}return l},this.fitseq=function(e,n,r,s,o){if(o>e.points.length||o<0)return[];var a,i,l,c=s,h=0,g=!0,d=o-s;d<0&&(d+=e.points.length);for(var p,u=(e.points[o].x-e.points[s].x)/d,m=(e.points[o].y-e.points[s].y)/d,f=(s+1)%e.points.length;f!=o;)(p=f-s)<0&&(p+=e.points.length),a=e.points[s].x+u*p,i=e.points[s].y+m*p,(l=(e.points[f].x-a)*(e.points[f].x-a)+(e.points[f].y-i)*(e.points[f].y-i))>n&&(g=!1),l>h&&(c=f,h=l),f=(f+1)%e.points.length;if(g)return[{type:"L",x1:e.points[s].x,y1:e.points[s].y,x2:e.points[o].x,y2:e.points[o].y}];var y=c;g=!0,h=0;var b=(y-s)/d,x=(1-b)*(1-b),w=2*(1-b)*b,v=b*b,M=(x*e.points[s].x+v*e.points[o].x-e.points[y].x)/-w,k=(x*e.points[s].y+v*e.points[o].y-e.points[y].y)/-w;for(f=s+1;f!=o;)w=2*(1-(b=(f-s)/d))*b,v=b*b,a=(x=(1-b)*(1-b))*e.points[s].x+w*M+v*e.points[o].x,i=x*e.points[s].y+w*k+v*e.points[o].y,(l=(e.points[f].x-a)*(e.points[f].x-a)+(e.points[f].y-i)*(e.points[f].y-i))>r&&(g=!1),l>h&&(c=f,h=l),f=(f+1)%e.points.length;if(g)return[{type:"Q",x1:e.points[s].x,y1:e.points[s].y,x2:M,y2:k,x3:e.points[o].x,y3:e.points[o].y}];var q=y;return t.fitseq(e,n,r,s,q).concat(t.fitseq(e,n,r,q,o))},this.batchtracepaths=function(e,n,r){var s=[];for(var o in e)e.hasOwnProperty(o)&&s.push(t.tracepath(e[o],n,r));return s},this.batchtracelayers=function(e,n,r){var s=[];for(var o in e)e.hasOwnProperty(o)&&(s[o]=t.batchtracepaths(e[o],n,r));return s},this.roundtodec=function(t,e){return+t.toFixed(e)},this.svgpathstring=function(e,n,r,s){var o,a=e.layers[n],i=a[r],l="";if(s.linefilter&&i.segments.length<3)return l;if(l="<path "+(s.desc?'desc="l '+n+" p "+r+'" ':"")+t.tosvgcolorstr(e.palette[n],s)+'d="',-1===s.roundcoords){for(l+="M "+i.segments[0].x1*s.scale+" "+i.segments[0].y1*s.scale+" ",o=0;o<i.segments.length;o++)l+=i.segments[o].type+" "+i.segments[o].x2*s.scale+" "+i.segments[o].y2*s.scale+" ",i.segments[o].hasOwnProperty("x3")&&(l+=i.segments[o].x3*s.scale+" "+i.segments[o].y3*s.scale+" ");l+="Z "}else{for(l+="M "+t.roundtodec(i.segments[0].x1*s.scale,s.roundcoords)+" "+t.roundtodec(i.segments[0].y1*s.scale,s.roundcoords)+" ",o=0;o<i.segments.length;o++)l+=i.segments[o].type+" "+t.roundtodec(i.segments[o].x2*s.scale,s.roundcoords)+" "+t.roundtodec(i.segments[o].y2*s.scale,s.roundcoords)+" ",i.segments[o].hasOwnProperty("x3")&&(l+=t.roundtodec(i.segments[o].x3*s.scale,s.roundcoords)+" "+t.roundtodec(i.segments[o].y3*s.scale,s.roundcoords)+" ");l+="Z "}for(var c=0;c<i.holechildren.length;c++){var h=a[i.holechildren[c]];if(-1===s.roundcoords)for(h.segments[h.segments.length-1].hasOwnProperty("x3")?l+="M "+h.segments[h.segments.length-1].x3*s.scale+" "+h.segments[h.segments.length-1].y3*s.scale+" ":l+="M "+h.segments[h.segments.length-1].x2*s.scale+" "+h.segments[h.segments.length-1].y2*s.scale+" ",o=h.segments.length-1;o>=0;o--)l+=h.segments[o].type+" ",h.segments[o].hasOwnProperty("x3")&&(l+=h.segments[o].x2*s.scale+" "+h.segments[o].y2*s.scale+" "),l+=h.segments[o].x1*s.scale+" "+h.segments[o].y1*s.scale+" ";else for(h.segments[h.segments.length-1].hasOwnProperty("x3")?l+="M "+t.roundtodec(h.segments[h.segments.length-1].x3*s.scale)+" "+t.roundtodec(h.segments[h.segments.length-1].y3*s.scale)+" ":l+="M "+t.roundtodec(h.segments[h.segments.length-1].x2*s.scale)+" "+t.roundtodec(h.segments[h.segments.length-1].y2*s.scale)+" ",o=h.segments.length-1;o>=0;o--)l+=h.segments[o].type+" ",h.segments[o].hasOwnProperty("x3")&&(l+=t.roundtodec(h.segments[o].x2*s.scale)+" "+t.roundtodec(h.segments[o].y2*s.scale)+" "),l+=t.roundtodec(h.segments[o].x1*s.scale)+" "+t.roundtodec(h.segments[o].y1*s.scale)+" ";l+="Z "}if(l+='" />',s.lcpr||s.qcpr){for(o=0;o<i.segments.length;o++)i.segments[o].hasOwnProperty("x3")&&s.qcpr&&(l+='<circle cx="'+i.segments[o].x2*s.scale+'" cy="'+i.segments[o].y2*s.scale+'" r="'+s.qcpr+'" fill="cyan" stroke-width="'+.2*s.qcpr+'" stroke="black" />',l+='<circle cx="'+i.segments[o].x3*s.scale+'" cy="'+i.segments[o].y3*s.scale+'" r="'+s.qcpr+'" fill="white" stroke-width="'+.2*s.qcpr+'" stroke="black" />',l+='<line x1="'+i.segments[o].x1*s.scale+'" y1="'+i.segments[o].y1*s.scale+'" x2="'+i.segments[o].x2*s.scale+'" y2="'+i.segments[o].y2*s.scale+'" stroke-width="'+.2*s.qcpr+'" stroke="cyan" />',l+='<line x1="'+i.segments[o].x2*s.scale+'" y1="'+i.segments[o].y2*s.scale+'" x2="'+i.segments[o].x3*s.scale+'" y2="'+i.segments[o].y3*s.scale+'" stroke-width="'+.2*s.qcpr+'" stroke="cyan" />'),!i.segments[o].hasOwnProperty("x3")&&s.lcpr&&(l+='<circle cx="'+i.segments[o].x2*s.scale+'" cy="'+i.segments[o].y2*s.scale+'" r="'+s.lcpr+'" fill="white" stroke-width="'+.2*s.lcpr+'" stroke="black" />');for(c=0;c<i.holechildren.length;c++){h=a[i.holechildren[c]];for(o=0;o<h.segments.length;o++)h.segments[o].hasOwnProperty("x3")&&s.qcpr&&(l+='<circle cx="'+h.segments[o].x2*s.scale+'" cy="'+h.segments[o].y2*s.scale+'" r="'+s.qcpr+'" fill="cyan" stroke-width="'+.2*s.qcpr+'" stroke="black" />',l+='<circle cx="'+h.segments[o].x3*s.scale+'" cy="'+h.segments[o].y3*s.scale+'" r="'+s.qcpr+'" fill="white" stroke-width="'+.2*s.qcpr+'" stroke="black" />',l+='<line x1="'+h.segments[o].x1*s.scale+'" y1="'+h.segments[o].y1*s.scale+'" x2="'+h.segments[o].x2*s.scale+'" y2="'+h.segments[o].y2*s.scale+'" stroke-width="'+.2*s.qcpr+'" stroke="cyan" />',l+='<line x1="'+h.segments[o].x2*s.scale+'" y1="'+h.segments[o].y2*s.scale+'" x2="'+h.segments[o].x3*s.scale+'" y2="'+h.segments[o].y3*s.scale+'" stroke-width="'+.2*s.qcpr+'" stroke="cyan" />'),!h.segments[o].hasOwnProperty("x3")&&s.lcpr&&(l+='<circle cx="'+h.segments[o].x2*s.scale+'" cy="'+h.segments[o].y2*s.scale+'" r="'+s.lcpr+'" fill="white" stroke-width="'+.2*s.lcpr+'" stroke="black" />')}}return l},this.getsvgstring=function(e,n){n=t.checkoptions(n);for(var r=e.width*n.scale,s=e.height*n.scale,o="<svg "+(n.viewbox?'viewBox="0 0 '+r+" "+s+'" ':'width="'+r+'" height="'+s+'" ')+'version="1.1" xmlns="http://www.w3.org/2000/svg" desc="Created with imagetracer.js version '+t.versionnumber+'" >',a=0;a<e.layers.length;a++)for(var i=0;i<e.layers[a].length;i++)e.layers[a][i].isholepath||(o+=t.svgpathstring(e,a,i,n));return o+="</svg>"},this.compareNumbers=function(t,e){return t-e},this.torgbastr=function(t){return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"},this.tosvgcolorstr=function(t,e){return'fill="rgb('+t.r+","+t.g+","+t.b+')" stroke="rgb('+t.r+","+t.g+","+t.b+')" stroke-width="'+e.strokewidth+'" opacity="'+t.a/255+'" '},this.appendSVGString=function(t,e){var n;e?(n=document.getElementById(e))||((n=document.createElement("div")).id=e,document.body.appendChild(n)):(n=document.createElement("div"),document.body.appendChild(n)),n.innerHTML+=t},this.gks=[[.27901,.44198,.27901],[.135336,.228569,.272192,.228569,.135336],[.086776,.136394,.178908,.195843,.178908,.136394,.086776],[.063327,.093095,.122589,.144599,.152781,.144599,.122589,.093095,.063327],[.049692,.069304,.089767,.107988,.120651,.125194,.120651,.107988,.089767,.069304,.049692]],this.blur=function(e,n,r){var s,o,a,i,l,c,h,g,d,p={width:e.width,height:e.height,data:[]};if((n=Math.floor(n))<1)return e;n>5&&(n=5),(r=Math.abs(r))>1024&&(r=1024);var u=t.gks[n-1];for(o=0;o<e.height;o++)for(s=0;s<e.width;s++){for(l=0,c=0,h=0,g=0,d=0,a=-n;a<n+1;a++)s+a>0&&s+a<e.width&&(i=4*(o*e.width+s+a),l+=e.data[i]*u[a+n],c+=e.data[i+1]*u[a+n],h+=e.data[i+2]*u[a+n],g+=e.data[i+3]*u[a+n],d+=u[a+n]);i=4*(o*e.width+s),p.data[i]=Math.floor(l/d),p.data[i+1]=Math.floor(c/d),p.data[i+2]=Math.floor(h/d),p.data[i+3]=Math.floor(g/d)}var m=new Uint8ClampedArray(p.data);for(o=0;o<e.height;o++)for(s=0;s<e.width;s++){for(l=0,c=0,h=0,g=0,d=0,a=-n;a<n+1;a++)o+a>0&&o+a<e.height&&(l+=m[i=4*((o+a)*e.width+s)]*u[a+n],c+=m[i+1]*u[a+n],h+=m[i+2]*u[a+n],g+=m[i+3]*u[a+n],d+=u[a+n]);i=4*(o*e.width+s),p.data[i]=Math.floor(l/d),p.data[i+1]=Math.floor(c/d),p.data[i+2]=Math.floor(h/d),p.data[i+3]=Math.floor(g/d)}for(o=0;o<e.height;o++)for(s=0;s<e.width;s++)i=4*(o*e.width+s),Math.abs(p.data[i]-e.data[i])+Math.abs(p.data[i+1]-e.data[i+1])+Math.abs(p.data[i+2]-e.data[i+2])+Math.abs(p.data[i+3]-e.data[i+3])>r&&(p.data[i]=e.data[i],p.data[i+1]=e.data[i+1],p.data[i+2]=e.data[i+2],p.data[i+3]=e.data[i+3]);return p},this.loadImage=function(t,e,n){var r=new Image;n&&n.corsenabled&&(r.crossOrigin="Anonymous"),r.onload=function(){var t=document.createElement("canvas");t.width=r.width,t.height=r.height,t.getContext("2d").drawImage(r,0,0),e(t)},r.src=t},this.getImgdata=function(t){return t.getContext("2d").getImageData(0,0,t.width,t.height)},this.specpalette=[{r:0,g:0,b:0,a:255},{r:128,g:128,b:128,a:255},{r:0,g:0,b:128,a:255},{r:64,g:64,b:128,a:255},{r:192,g:192,b:192,a:255},{r:255,g:255,b:255,a:255},{r:128,g:128,b:192,a:255},{r:0,g:0,b:192,a:255},{r:128,g:0,b:0,a:255},{r:128,g:64,b:64,a:255},{r:128,g:0,b:128,a:255},{r:168,g:168,b:168,a:255},{r:192,g:128,b:128,a:255},{r:192,g:0,b:0,a:255},{r:255,g:255,b:255,a:255},{r:0,g:128,b:0,a:255}],this.drawLayers=function(e,n,r,s){var o,a,i,l,c,h;for(c in r=r||1,s?(h=document.getElementById(s))||((h=document.createElement("div")).id=s,document.body.appendChild(h)):(h=document.createElement("div"),document.body.appendChild(h)),e)if(e.hasOwnProperty(c)){o=e[c][0].length,a=e[c].length;var g=document.createElement("canvas");g.width=o*r,g.height=a*r;var d=g.getContext("2d");for(l=0;l<a;l++)for(i=0;i<o;i++)d.fillStyle=t.torgbastr(n[e[c][l][i]%n.length]),d.fillRect(i*r,l*r,r,r);h.appendChild(g)}}}"function"==typeof define&&define.amd?define((function(){return new t})):"undefined"!=typeof module?module.exports=new t:"undefined"!=typeof self?self.ImageTracer=new t:window.ImageTracer=new t}();