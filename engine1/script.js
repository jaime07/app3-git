// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_bubbles(b,l,n){var e=jQuery;var f=e(this);var i=b.noCanvas||!document.createElement("canvas").getContext;var k=b.width,p=b.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_bubbles").appendTo(n);if(!i){var a=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=a.get(0).getContext("2d")}var j={easeOutBack:function(u,v,h,z,y,w){if(w==undefined){w=1.70158}return z*((v=v/y-1)*v*((w+1)*v+w)+1)+h},easeOutBackCubic:function(u,v,h,A,z,w){var y=(v/=z)*v;return h+A*(-1.5*y*v*y+2*y*y+4*y*v+-9*y+5.5*v)},easeOutCubic:function(u,v,h,y,w){return y*((v=v/w-1)*v*v+1)+h},easeOutExpo:function(u,v,h,y,w){return(v==w)?h+y:y*(-Math.pow(2,-10*v/w)+1)+h}};var s=[["#bbbbbb",0.5,0.5],["#b3b3b3",0.2,0.2],["#b6b6b6",0.5,0.2],["#b9b9b9",0.8,0.2],["#cccccc",0.2,0.8],["#c3c3c3",0.5,0.8],["#c6c6c6",0.8,0.8]];var c=[[[0.5,0.5,0.7,0.15],[0.5,0.5,0.6,0.3],[0.5,0.5,0.5,0.45],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.75],[0.5,0.5,0.2,0.9],[0.5,0.5,0.1,1]],[[0.5,0.5,0.7,1],[0.5,0.5,0.6,0.9],[0.5,0.5,0.5,0.75],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.45],[0.5,0.5,0.2,0.3],[0.5,0.5,0.1,0.15]]];var m=[[[0.5,0.5,0,1],[0.5,0.5,0,0.9],[0.5,0.5,0,0.75],[0.5,0.5,0,0.6],[0.5,0.5,0,0.45],[0.5,0.5,0,0.3],[0.5,0.5,0,0.15]],[[0.5,0.5,0,0.15],[0.5,0.5,0,0.3],[0.5,0.5,0,0.45],[0.5,0.5,0,0.6],[0.5,0.5,0,0.75],[0.5,0.5,0,0.9],[0.5,0.5,0,1]],[[0.5,7.5,0.7,0.75],[0.5,7.5,0.6,0.15],[0.5,7.5,0.5,1],[0.5,7.5,0.4,0.3],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.6],[0.5,7.5,0.1,0.9]],[[0.5,7.5,0.7,1],[0.5,7.5,0.6,0.9],[0.5,7.5,0.5,0.75],[0.5,7.5,0.4,0.6],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.3],[0.5,7.5,0.1,0.15]]];function d(u){if(Object.prototype.toString.call(u)==="[object Array]"){return u[Math.floor(Math.random()*(u.length))]}else{var h;var t=0;for(var v in u){if(Math.random()<1/++t){h=v}}return/linear|swing/g.test(h)?d(u):h}}function q(B,A,v,z,t){B.clearRect(0,0,k,p);for(var u=0,y=v.length;u<y;u++){var h=Math.max(0,Math.min(1,A-v[u][3]*(1-A)));if(t&&j[t]){h=j[t](1,h,0,1,1,1)}var w=k;if(k/p<=1.8&&k/p>0.7){w*=2}else{if(k/p<=0.7){w=p*2}}var x=v[u][2]*h*w;if(z){x=(v[u][2]+(z[u][2]-v[u][2])*h)*w}x=Math.max(0,x);B.beginPath();B.arc((v[u][0]+((z?z[u][0]:0.5)-v[u][0])*h)*k,(v[u][1]+((z?z[u][1]:0.5)-v[u][1])*h)*p,x,0,2*Math.PI,false);B.fillStyle=s[u][0];B.fill()}}this.go=function(B,w){if(i){n.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},b.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=n.width();p=n.height();a.attr({width:k,height:p});var z=l.get(w);for(var x=0,A=s.length;x<A;x++){var u=Math.abs(s[x][1]),h=Math.abs(s[x][2]);s[x][0]=r(z,{x:u*k,y:h*p,w:2,h:2})||s[x][0]}var t=d(c);var v=d(m);var y=d(j);wowAnimate(function(C){q(o,C,t,0,y)},0,1,b.duration/2,function(){n.find(".ws_list").css({left:(B?-B+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});y=d(j);wowAnimate(function(C){q(o,1-C,v,t,y)},0,1,b.duration/2,function(){o.clearRect(0,0,k,p);f.trigger("effectEnd")})})}};function r(C,t){t=t||{};var E=1,w=t.exclude||[],B;var y=document.createElement("canvas"),v=y.getContext("2d"),u=y.width=C.naturalWidth,I=y.height=C.naturalHeight;v.drawImage(C,0,0,C.naturalWidth,C.naturalHeight);try{B=v.getImageData(t.x?t.x:0,t.y?t.y:0,t.w?t.w:C.width,t.h?t.h:C.height)["data"]}catch(D){return false}var x=(t.w?t.w:C.width*t.h?t.h:C.height)||B.length,z={},G="",F=[],h={dominant:{name:"",count:0}};var A=0;while(A<x){F[0]=B[A];F[1]=B[A+1];F[2]=B[A+2];G=F.join(",");if(G in z){z[G]=z[G]+1}else{z[G]=1}if(w.indexOf(["rgb(",G,")"].join(""))===-1){var H=z[G];if(H>h.dominant.count){h.dominant.name=G;h.dominant.count=H}}A+=E*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_collage(r,I,A){var y=jQuery,f=y(this),C=y(".ws_list",A),m=r.maxQuality||true,u=r.maxPreload||20,E=!r.noCanvas&&document.createElement("canvas").getContext,e=10,F=false,M=0.3,l=0.7,w=-180,a=180,d=I.length,S=[];var v=y("<div>").addClass("ws_effect ws_collage").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,overflow:"hidden","z-index":8}).appendTo(A);function H(x,j,i){return parseFloat(i*(j-x)+x)}function R(W,V,N){var i=N*V.x,X=N*V.y,j=N*V.width,U=N*V.height;if(E){W.save();W.translate(i+0.5*j,X+0.5*U);W.rotate(V.angle*Math.PI/180);W.scale(V.scale,V.scale);if(V.img){W.drawImage(V.img,-0.5*j,-0.5*U,j,U)}W.restore()}else{y("<img>").attr("src",V.img).css({position:"absolute",width:100*j/r.width+"%",height:100*U/r.height+"%",left:100*i/r.width+"%",top:100*X/r.height+"%"}).appendTo(W)}}function c(V,Y,U,N,W,Z){var x=S[V],X=S[Y],i=new Date;if(E){var j=y(I[Y]);j={width:j.width(),height:j.height(),marginTop:parseFloat(j.css("marginTop")),marginLeft:parseFloat(j.css("marginLeft"))};y(t).css(j)}wowAnimate(function(aa){var aj=1-2*aa;if(aj<0){aj*=-1;if(aj>1){aj=1}}aj=jQuery.easing.easeInOutQuad(1,aj,0,1,1);aa=jQuery.easing.easeInOutQuad(1,aa,0,1,1);if(E){o.width=N;o.height=W;t.width=N;t.height=W;var ab=H(r.width/X.width,r.width/x.width,aa),ac=H(0.5,H(1/X.scale,1/x.scale,aa),aj),ag=H(1/X.scale,1/x.scale,aa),ah=H(X.angle,x.angle,aa),ai=U*x.width,ad=U*x.height,af=U*H(X.x,x.x,aa),ae=U*H(X.y,x.y,aa);if(Q&&k){o.ctx.drawImage(k,0,0,N,W);o.ctx.save();o.ctx.translate(af+0.5*ai,ae+0.5*ad);o.ctx.rotate(-ah*Math.PI/180);o.ctx.scale(ag,ag);o.ctx.translate(-(af+0.5*ai),-(ae+0.5*ad));o.ctx.transform(ag,0,0,ag,-af*ag,-ae*ag);o.ctx.drawImage(k,-N,-W,N*4,W*4);o.ctx.restore()}o.ctx.transform(ab,0,0,ab,-af*ab,-ae*ab);o.ctx.translate(af+0.5*ai,ae+0.5*ad);o.ctx.rotate(-ah*Math.PI/180);o.ctx.scale(ac,ac);o.ctx.translate(-(af+0.5*ai),-(ae+0.5*ad));o.ctx.globalAlpha=H(0.2,1,aj);if(m){for(P in S){R(o.ctx,S[P],U)}}else{o.ctx.drawImage(L,0,0)}o.ctx.globalAlpha=1;o.ctx.globalAlpha=H(0,1,aj);R(o.ctx,x,U);o.ctx.globalAlpha=H(1,0,aa*2>1?1:aa*2);R(o.ctx,X,U);o.ctx.globalAlpha=1;t.ctx.drawImage(o,0,0)}else{var ak=H(2,N/(X.width*U),aj),af=-U*H(X.x,x.x,aa)*ak,ae=-U*H(X.y,x.y,aa)*ak,ai=N*ak,ad=W*ak;t.css({left:af,top:ae,width:ai,height:ad})}v.show()},0,1,r.duration,function(){Z()})}function B(V,i,U,j,N){if(V>i||!S[V]||S[V].img){return}var x=new Image();x.onload=function(){S[V].img=x;if(U&&V!=N[0]&&V!=N[1]){R(j,S[V],1);B(V+1,i,true,j,N)}else{B(V+1,i,false)}};x.onerror=function(){if(U&&V!=N[0]&&V!=N[1]){R(j,S[V],1);B(V+1,i,true,j,N)}else{B(V+1,i,false)}};x.src=I[V].src}var q=0,p=0,s=r.width/(Math.sqrt(d)+1),z=r.height/(Math.sqrt(d)+1),b=Math.floor(r.width/s);for(P=0;P<d;P++){if(s+q>s*b){p=Math.floor(s*(P+1)/r.width)*z;q=0}S[P]={x:q,y:p,width:s,height:z,img:null};if(E){S[P].scale=H(M,l,Math.random());S[P].angle=H(w,a,Math.random())}q+=parseFloat(s)}for(var O,D,P=S.length;P;O=parseInt(Math.random()*P),D=S[--P],S[P]=S[O],S[O]=D){}if(E){var t=y("<canvas>")[0];t.ctx=t.getContext("2d");t.width=v.width();t.height=v.height();var o=y("<canvas>")[0];o.ctx=o.getContext("2d");o.width=v.width();o.height=v.height();var k=y("<canvas>")[0];k.ctx=k.getContext("2d");k.width=v.width();k.height=v.height();if(!m){var L=y("<canvas>")[0];L.ctx=L.getContext("2d");L.width=v.width();L.height=v.height()}v.append(t)}else{var t=v.clone().removeClass("ws_effect").css({overflow:"visible"});v.css("display","none").append(t);for(P in S){S[P].img=I[P].src;R(t,S[P],1)}var h=(d%b=="undefined"?0:d%b);startRight=0,bottomAddCount=2*b-h,rightAddCount=Math.ceil(d/b)+1;for(var P=0;P<bottomAddCount;P++){R(t,{img:I[P%I.length].src,width:s,height:z,x:s*((h+P)%b),y:p+Math.floor((h+P)/b)*z},1)}for(var P=0;P<bottomAddCount;P++){R(t,{img:I[P%I.length].src,width:s,height:z,x:s*b,y:P*z},1)}}var G,Q;this.go=function(x,U){if(G){return -1}if(r.images){S[x].img=I[x]}if(window.XMLHttpRequest){if(E){var N=r.width,j=r.height,i=1;B(U,U,false);B(x,x,false);if(m){B(2,u+1,false)}else{L.width=N;L.height=j;B(2,u+1,true,L.ctx,[U,x])}if(!Q&&!F){rand=Math.round(H(0,d-1,Math.random()));k.width=v.width();k.height=v.height();Q=J(y(I[rand]),e,k)}}else{var N=A.width(),j=A.height(),i=N/r.width}G=new c(x,U,i,N,j,function V(){f.trigger("effectEnd");v.hide();G=0;if(!m&&E){for(i in S){S[i].img=null}}})}else{G=0;C.stop(true).animate({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},r.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}};function J(i,x,j){if(E){j.ctx.drawImage(i.get(0),0,0);if(!n(j.ctx,0,0,j.width,j.height,x)){j.ctx.drawImage(i.get(0),0,0)}return true}return cont}var g=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var K=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function n(aI,ap,an,j,N,az){if(isNaN(az)||az<1){return}az|=0;var aD;try{aD=aI.getImageData(ap,an,j,N)}catch(aH){console.log("error:unable to access image data: "+aH);return false}var X=aD.data;var ax,aw,aF,aC,ae,ah,ab,V,W,am,ac,ao,ak,at,ay,af,aa,ag,ai,ar;var aG=az+az+1;var au=j<<2;var ad=j-1;var aB=N-1;var Z=az+1;var aA=Z*(Z+1)/2;var aq=new T();var al=aq;for(aF=1;aF<aG;aF++){al=al.next=new T();if(aF==Z){var Y=al}}al.next=aq;var aE=null;var av=null;ab=ah=0;var aj=g[az];var U=K[az];for(aw=0;aw<N;aw++){at=ay=af=V=W=am=0;ac=Z*(aa=X[ah]);ao=Z*(ag=X[ah+1]);ak=Z*(ai=X[ah+2]);V+=aA*aa;W+=aA*ag;am+=aA*ai;al=aq;for(aF=0;aF<Z;aF++){al.r=aa;al.g=ag;al.b=ai;al=al.next}for(aF=1;aF<Z;aF++){aC=ah+((ad<aF?ad:aF)<<2);V+=(al.r=(aa=X[aC]))*(ar=Z-aF);W+=(al.g=(ag=X[aC+1]))*ar;am+=(al.b=(ai=X[aC+2]))*ar;at+=aa;ay+=ag;af+=ai;al=al.next}aE=aq;av=Y;for(ax=0;ax<j;ax++){X[ah]=(V*aj)>>U;X[ah+1]=(W*aj)>>U;X[ah+2]=(am*aj)>>U;V-=ac;W-=ao;am-=ak;ac-=aE.r;ao-=aE.g;ak-=aE.b;aC=(ab+((aC=ax+az+1)<ad?aC:ad))<<2;at+=(aE.r=X[aC]);ay+=(aE.g=X[aC+1]);af+=(aE.b=X[aC+2]);V+=at;W+=ay;am+=af;aE=aE.next;ac+=(aa=av.r);ao+=(ag=av.g);ak+=(ai=av.b);at-=aa;ay-=ag;af-=ai;av=av.next;ah+=4}ab+=j}for(ax=0;ax<j;ax++){ay=af=at=W=am=V=0;ah=ax<<2;ac=Z*(aa=X[ah]);ao=Z*(ag=X[ah+1]);ak=Z*(ai=X[ah+2]);V+=aA*aa;W+=aA*ag;am+=aA*ai;al=aq;for(aF=0;aF<Z;aF++){al.r=aa;al.g=ag;al.b=ai;al=al.next}ae=j;for(aF=1;aF<=az;aF++){ah=(ae+ax)<<2;V+=(al.r=(aa=X[ah]))*(ar=Z-aF);W+=(al.g=(ag=X[ah+1]))*ar;am+=(al.b=(ai=X[ah+2]))*ar;at+=aa;ay+=ag;af+=ai;al=al.next;if(aF<aB){ae+=j}}ah=ax;aE=aq;av=Y;for(aw=0;aw<N;aw++){aC=ah<<2;X[aC]=(V*aj)>>U;X[aC+1]=(W*aj)>>U;X[aC+2]=(am*aj)>>U;V-=ac;W-=ao;am-=ak;ac-=aE.r;ao-=aE.g;ak-=aE.b;aC=(ax+(((aC=aw+Z)<aB?aC:aB)*j))<<2;V+=(at+=(aE.r=X[aC]));W+=(ay+=(aE.g=X[aC+1]));am+=(af+=(aE.b=X[aC+2]));aE=aE.next;ac+=(aa=av.r);ao+=(ag=av.g);ak+=(ai=av.b);at-=aa;ay-=ag;af-=ai;av=av.next;ah+=j}}aI.putImageData(aD,ap,an);return true}function T(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}}jQuery.extend(jQuery.easing,{easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a}});/*
 * jQuery 2d Transform v0.9.3
 * http://wiki.github.com/heygrady/transform/
 *
 * Copyright 2010, Grady Kuhnline
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 * 
 * Date: Wed Dec 19 13:27:21 2012 -0500
 */
(function(f,g,j,b){var h=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,c=/^([\+\-]=)?([\d+.\-]+)(.*)$/,q=/%/;var d=j.createElement("modernizr"),e=d.style;function n(s){return parseFloat(s)}function l(){var s={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"};for(var t in s){if(typeof e[t]!="undefined"){return s[t]}}return null}function r(){if(typeof(g.Modernizr)!=="undefined"){return Modernizr.csstransforms}var t=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var s in t){if(e[t[s]]!==b){return true}}}var a=l(),i=a!==null?a+"transform":false,k=a!==null?a+"transform-origin":false;f.support.csstransforms=r();if(a=="-ms-"){i="msTransform";k="msTransformOrigin"}f.extend({transform:function(s){s.transform=this;this.$elem=f(s);this.applyingMatrix=false;this.matrix=null;this.height=null;this.width=null;this.outerHeight=null;this.outerWidth=null;this.boxSizingValue=null;this.boxSizingProperty=null;this.attr=null;this.transformProperty=i;this.transformOriginProperty=k}});f.extend(f.transform,{funcs:["matrix","origin","reflect","reflectX","reflectXY","reflectY","rotate","scale","scaleX","scaleY","skew","skewX","skewY","translate","translateX","translateY"]});f.fn.transform=function(s,t){return this.each(function(){var u=this.transform||new f.transform(this);if(s){u.exec(s,t)}})};f.transform.prototype={exec:function(s,t){t=f.extend(true,{forceMatrix:false,preserve:false},t);this.attr=null;if(t.preserve){s=f.extend(true,this.getAttrs(true,true),s)}else{s=f.extend(true,{},s)}this.setAttrs(s);if(f.support.csstransforms&&!t.forceMatrix){return this.execFuncs(s)}else{if(f.browser.msie||(f.support.csstransforms&&t.forceMatrix)){return this.execMatrix(s)}}return false},execFuncs:function(t){var s=[];for(var u in t){if(u=="origin"){this[u].apply(this,f.isArray(t[u])?t[u]:[t[u]])}else{if(f.inArray(u,f.transform.funcs)!==-1){s.push(this.createTransformFunc(u,t[u]))}}}this.$elem.css(i,s.join(" "));return true},execMatrix:function(z){var C,x,t;var F=this.$elem[0],B=this;function A(N,M){if(q.test(N)){return parseFloat(N)/100*B["safeOuter"+(M?"Height":"Width")]()}return o(F,N)}var s=/translate[X|Y]?/,u=[];for(var v in z){switch(f.type(z[v])){case"array":t=z[v];break;case"string":t=f.map(z[v].split(","),f.trim);break;default:t=[z[v]]}if(f.matrix[v]){if(f.cssAngle[v]){t=f.map(t,f.angle.toDegree)}else{if(!f.cssNumber[v]){t=f.map(t,A)}else{t=f.map(t,n)}}x=f.matrix[v].apply(this,t);if(s.test(v)){u.push(x)}else{C=C?C.x(x):x}}else{if(v=="origin"){this[v].apply(this,t)}}}C=C||f.matrix.identity();f.each(u,function(M,N){C=C.x(N)});var K=parseFloat(C.e(1,1).toFixed(6)),I=parseFloat(C.e(2,1).toFixed(6)),H=parseFloat(C.e(1,2).toFixed(6)),G=parseFloat(C.e(2,2).toFixed(6)),L=C.rows===3?parseFloat(C.e(1,3).toFixed(6)):0,J=C.rows===3?parseFloat(C.e(2,3).toFixed(6)):0;if(f.support.csstransforms&&a==="-moz-"){this.$elem.css(i,"matrix("+K+", "+I+", "+H+", "+G+", "+L+"px, "+J+"px)")}else{if(f.support.csstransforms){this.$elem.css(i,"matrix("+K+", "+I+", "+H+", "+G+", "+L+", "+J+")")}else{if(f.browser.msie){var w=", FilterType='nearest neighbor'";var D=this.$elem[0].style;var E="progid:DXImageTransform.Microsoft.Matrix(M11="+K+", M12="+H+", M21="+I+", M22="+G+", sizingMethod='auto expand'"+w+")";var y=D.filter||f.css(this.$elem[0],"filter")||"";D.filter=h.test(y)?y.replace(h,E):y?y+" "+E:E;this.applyingMatrix=true;this.matrix=C;this.fixPosition(C,L,J);this.applyingMatrix=false;this.matrix=null}}}return true},origin:function(s,t){if(f.support.csstransforms){if(typeof t==="undefined"){this.$elem.css(k,s)}else{this.$elem.css(k,s+" "+t)}return true}switch(s){case"left":s="0";break;case"right":s="100%";break;case"center":case b:s="50%"}switch(t){case"top":t="0";break;case"bottom":t="100%";break;case"center":case b:t="50%"}this.setAttr("origin",[q.test(s)?s:o(this.$elem[0],s)+"px",q.test(t)?t:o(this.$elem[0],t)+"px"]);return true},createTransformFunc:function(t,u){if(t.substr(0,7)==="reflect"){var s=u?f.matrix[t]():f.matrix.identity();return"matrix("+s.e(1,1)+", "+s.e(2,1)+", "+s.e(1,2)+", "+s.e(2,2)+", 0, 0)"}if(t=="matrix"){if(a==="-moz-"){u[4]=u[4]?u[4]+"px":0;u[5]=u[5]?u[5]+"px":0}}return t+"("+(f.isArray(u)?u.join(", "):u)+")"},fixPosition:function(B,y,x,D,s){var w=new f.matrix.calc(B,this.safeOuterHeight(),this.safeOuterWidth()),C=this.getAttr("origin");var v=w.originOffset(new f.matrix.V2(q.test(C[0])?parseFloat(C[0])/100*w.outerWidth:parseFloat(C[0]),q.test(C[1])?parseFloat(C[1])/100*w.outerHeight:parseFloat(C[1])));var t=w.sides();var u=this.$elem.css("position");if(u=="static"){u="relative"}var A={top:0,left:0};var z={position:u,top:(v.top+x+t.top+A.top)+"px",left:(v.left+y+t.left+A.left)+"px",zoom:1};this.$elem.css(z)}};function o(s,u){var t=c.exec(f.trim(u));if(t[3]&&t[3]!=="px"){var w="paddingBottom",v=f.style(s,w);f.style(s,w,u);u=p(s,w);f.style(s,w,v);return u}return parseFloat(u)}function p(t,u){if(t[u]!=null&&(!t.style||t.style[u]==null)){return t[u]}var s=parseFloat(f.css(t,u));return s&&s>-10000?s:0}})(jQuery,this,this.document);(function(d,c,a,f){d.extend(d.transform.prototype,{safeOuterHeight:function(){return this.safeOuterLength("height")},safeOuterWidth:function(){return this.safeOuterLength("width")},safeOuterLength:function(l){var p="outer"+(l=="width"?"Width":"Height");if(!d.support.csstransforms&&d.browser.msie){l=l=="width"?"width":"height";if(this.applyingMatrix&&!this[p]&&this.matrix){var k=new d.matrix.calc(this.matrix,1,1),n=k.offset(),g=this.$elem[p]()/n[l];this[p]=g;return g}else{if(this.applyingMatrix&&this[p]){return this[p]}}var o={height:["top","bottom"],width:["left","right"]};var h=this.$elem[0],j=parseFloat(d.css(h,l,true)),q=this.boxSizingProperty,i=this.boxSizingValue;if(!this.boxSizingProperty){q=this.boxSizingProperty=e()||"box-sizing";i=this.boxSizingValue=this.$elem.css(q)||"content-box"}if(this[p]&&this[l]==j){return this[p]}else{this[l]=j}if(q&&(i=="padding-box"||i=="content-box")){j+=parseFloat(d.css(h,"padding-"+o[l][0],true))||0+parseFloat(d.css(h,"padding-"+o[l][1],true))||0}if(q&&i=="content-box"){j+=parseFloat(d.css(h,"border-"+o[l][0]+"-width",true))||0+parseFloat(d.css(h,"border-"+o[l][1]+"-width",true))||0}this[p]=j;return j}return this.$elem[p]()}});var b=null;function e(){if(b){return b}var h={boxSizing:"box-sizing",MozBoxSizing:"-moz-box-sizing",WebkitBoxSizing:"-webkit-box-sizing",OBoxSizing:"-o-box-sizing"},g=a.body;for(var i in h){if(typeof g.style[i]!="undefined"){b=h[i];return b}}return null}})(jQuery,this,this.document);(function(g,f,b,h){var d=/([\w\-]*?)\((.*?)\)/g,a="data-transform",e=/\s/,c=/,\s?/;g.extend(g.transform.prototype,{setAttrs:function(i){var j="",l;for(var k in i){l=i[k];if(g.isArray(l)){l=l.join(", ")}j+=" "+k+"("+l+")"}this.attr=g.trim(j);this.$elem.attr(a,this.attr)},setAttr:function(k,l){if(g.isArray(l)){l=l.join(", ")}var j=this.attr||this.$elem.attr(a);if(!j||j.indexOf(k)==-1){this.attr=g.trim(j+" "+k+"("+l+")");this.$elem.attr(a,this.attr)}else{var i=[],n;d.lastIndex=0;while(n=d.exec(j)){if(k==n[1]){i.push(k+"("+l+")")}else{i.push(n[0])}}this.attr=i.join(" ");this.$elem.attr(a,this.attr)}},getAttrs:function(){var j=this.attr||this.$elem.attr(a);if(!j){return{}}var i={},l,k;d.lastIndex=0;while((l=d.exec(j))!==null){if(l){k=l[2].split(c);i[l[1]]=k.length==1?k[0]:k}}return i},getAttr:function(j){var i=this.getAttrs();if(typeof i[j]!=="undefined"){return i[j]}if(j==="origin"&&g.support.csstransforms){return this.$elem.css(this.transformOriginProperty).split(e)}else{if(j==="origin"){return["50%","50%"]}}return g.cssDefault[j]||0}});if(typeof(g.cssAngle)=="undefined"){g.cssAngle={}}g.extend(g.cssAngle,{rotate:true,skew:true,skewX:true,skewY:true});if(typeof(g.cssDefault)=="undefined"){g.cssDefault={}}g.extend(g.cssDefault,{scale:[1,1],scaleX:1,scaleY:1,matrix:[1,0,0,1,0,0],origin:["50%","50%"],reflect:[1,0,0,1,0,0],reflectX:[1,0,0,1,0,0],reflectXY:[1,0,0,1,0,0],reflectY:[1,0,0,1,0,0]});if(typeof(g.cssMultipleValues)=="undefined"){g.cssMultipleValues={}}g.extend(g.cssMultipleValues,{matrix:6,origin:{length:2,duplicate:true},reflect:6,reflectX:6,reflectXY:6,reflectY:6,scale:{length:2,duplicate:true},skew:2,translate:2});g.extend(g.cssNumber,{matrix:true,reflect:true,reflectX:true,reflectXY:true,reflectY:true,scale:true,scaleX:true,scaleY:true});g.each(g.transform.funcs,function(j,k){g.cssHooks[k]={set:function(n,o){var l=n.transform||new g.transform(n),i={};i[k]=o;l.exec(i,{preserve:true})},get:function(n,l){var i=n.transform||new g.transform(n);return i.getAttr(k)}}});g.each(["reflect","reflectX","reflectXY","reflectY"],function(j,k){g.cssHooks[k].get=function(n,l){var i=n.transform||new g.transform(n);return i.getAttr("matrix")||g.cssDefault[k]}})})(jQuery,this,this.document);(function(f,g,h,c){var d=/^([+\-]=)?([\d+.\-]+)(.*)$/;var a=f.fn.animate;f.fn.animate=function(p,l,o,n){var k=f.speed(l,o,n),j=f.cssMultipleValues;k.complete=k.old;if(!f.isEmptyObject(p)){if(typeof k.original==="undefined"){k.original={}}f.each(p,function(s,u){if(j[s]||f.cssAngle[s]||(!f.cssNumber[s]&&f.inArray(s,f.transform.funcs)!==-1)){var t=null;if(jQuery.isArray(p[s])){var r=1,q=u.length;if(j[s]){r=(typeof j[s].length==="undefined"?j[s]:j[s].length)}if(q>r||(q<r&&q==2)||(q==2&&r==2&&isNaN(parseFloat(u[q-1])))){t=u[q-1];u.splice(q-1,1)}}k.original[s]=u.toString();p[s]=parseFloat(u)}})}return a.apply(this,[arguments[0],k])};var b="paddingBottom";function i(k,l){if(k[l]!=null&&(!k.style||k.style[l]==null)){}var j=parseFloat(f.css(k,l));return j&&j>-10000?j:0}function e(u,v,w){var y=f.cssMultipleValues[this.prop],p=f.cssAngle[this.prop];if(y||(!f.cssNumber[this.prop]&&f.inArray(this.prop,f.transform.funcs)!==-1)){this.values=[];if(!y){y=1}var x=this.options.original[this.prop],t=f(this.elem).css(this.prop),j=f.cssDefault[this.prop]||0;if(!f.isArray(t)){t=[t]}if(!f.isArray(x)){if(f.type(x)==="string"){x=x.split(",")}else{x=[x]}}var l=y.length||y,s=0;while(x.length<l){x.push(y.duplicate?x[0]:j[s]||0);s++}var k,r,q,o=this,n=o.elem.transform;orig=f.style(o.elem,b);f.each(x,function(z,A){if(t[z]){k=t[z]}else{if(j[z]&&!y.duplicate){k=j[z]}else{if(y.duplicate){k=t[0]}else{k=0}}}if(p){k=f.angle.toDegree(k)}else{if(!f.cssNumber[o.prop]){r=d.exec(f.trim(k));if(r[3]&&r[3]!=="px"){if(r[3]==="%"){k=parseFloat(r[2])/100*n["safeOuter"+(z?"Height":"Width")]()}else{f.style(o.elem,b,k);k=i(o.elem,b);f.style(o.elem,b,orig)}}}}k=parseFloat(k);r=d.exec(f.trim(A));if(r){q=parseFloat(r[2]);w=r[3]||"px";if(p){q=f.angle.toDegree(q+w);w="deg"}else{if(!f.cssNumber[o.prop]&&w==="%"){k=(k/n["safeOuter"+(z?"Height":"Width")]())*100}else{if(!f.cssNumber[o.prop]&&w!=="px"){f.style(o.elem,b,(q||1)+w);k=((q||1)/i(o.elem,b))*k;f.style(o.elem,b,orig)}}}if(r[1]){q=((r[1]==="-="?-1:1)*q)+k}}else{q=A;w=""}o.values.push({start:k,end:q,unit:w})})}}if(f.fx.prototype.custom){(function(k){var j=k.custom;k.custom=function(o,n,l){e.apply(this,arguments);return j.apply(this,arguments)}}(f.fx.prototype))}if(f.Animation&&f.Animation.tweener){f.Animation.tweener(f.transform.funcs.join(" "),function(l,k){var j=this.createTween(l,k);e.apply(j,[j.start,j.end,j.unit]);return j})}f.fx.multipleValueStep={_default:function(j){f.each(j.values,function(k,l){j.values[k].now=l.start+((l.end-l.start)*j.pos)})}};f.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(j,k){f.fx.multipleValueStep[k]=function(n){var p=n.decomposed,l=f.matrix;m=l.identity();p.now={};f.each(p.start,function(q){p.now[q]=parseFloat(p.start[q])+((parseFloat(p.end[q])-parseFloat(p.start[q]))*n.pos);if(((q==="scaleX"||q==="scaleY")&&p.now[q]===1)||(q!=="scaleX"&&q!=="scaleY"&&p.now[q]===0)){return true}m=m.x(l[q](p.now[q]))});var o;f.each(n.values,function(q){switch(q){case 0:o=parseFloat(m.e(1,1).toFixed(6));break;case 1:o=parseFloat(m.e(2,1).toFixed(6));break;case 2:o=parseFloat(m.e(1,2).toFixed(6));break;case 3:o=parseFloat(m.e(2,2).toFixed(6));break;case 4:o=parseFloat(m.e(1,3).toFixed(6));break;case 5:o=parseFloat(m.e(2,3).toFixed(6));break}n.values[q].now=o})}});f.each(f.transform.funcs,function(k,l){function j(p){var o=p.elem.transform||new f.transform(p.elem),n={};if(f.cssMultipleValues[l]||(!f.cssNumber[l]&&f.inArray(l,f.transform.funcs)!==-1)){(f.fx.multipleValueStep[p.prop]||f.fx.multipleValueStep._default)(p);n[p.prop]=[];f.each(p.values,function(q,r){n[p.prop].push(r.now+(f.cssNumber[p.prop]?"":r.unit))})}else{n[p.prop]=p.now+(f.cssNumber[p.prop]?"":p.unit)}o.exec(n,{preserve:true})}if(f.Tween&&f.Tween.propHooks){f.Tween.propHooks[l]={set:j}}if(f.fx.step){f.fx.step[l]=j}});f.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(k,l){function j(r){var q=r.elem.transform||new f.transform(r.elem),p={};if(!r.initialized){r.initialized=true;if(l!=="matrix"){var o=f.matrix[l]().elements;var s;f.each(r.values,function(t){switch(t){case 0:s=o[0];break;case 1:s=o[2];break;case 2:s=o[1];break;case 3:s=o[3];break;default:s=0}r.values[t].end=s})}r.decomposed={};var n=r.values;r.decomposed.start=f.matrix.matrix(n[0].start,n[1].start,n[2].start,n[3].start,n[4].start,n[5].start).decompose();r.decomposed.end=f.matrix.matrix(n[0].end,n[1].end,n[2].end,n[3].end,n[4].end,n[5].end).decompose()}(f.fx.multipleValueStep[r.prop]||f.fx.multipleValueStep._default)(r);p.matrix=[];f.each(r.values,function(t,u){p.matrix.push(u.now)});q.exec(p,{preserve:true})}if(f.Tween&&f.Tween.propHooks){f.Tween.propHooks[l]={set:j}}if(f.fx.step){f.fx.step[l]=j}})})(jQuery,this,this.document);(function(g,h,j,c){var d=180/Math.PI;var k=200/Math.PI;var f=Math.PI/180;var e=2/1.8;var i=0.9;var a=Math.PI/200;var b=/^([+\-]=)?([\d+.\-]+)(.*)$/;g.extend({angle:{runit:/(deg|g?rad)/,radianToDegree:function(l){return l*d},radianToGrad:function(l){return l*k},degreeToRadian:function(l){return l*f},degreeToGrad:function(l){return l*e},gradToDegree:function(l){return l*i},gradToRadian:function(l){return l*a},toDegree:function(n){var l=b.exec(n);if(l){n=parseFloat(l[2]);switch(l[3]||"deg"){case"grad":n=g.angle.gradToDegree(n);break;case"rad":n=g.angle.radianToDegree(n);break}return n}return 0}}})})(jQuery,this,this.document);(function(f,e,b,g){if(typeof(f.matrix)=="undefined"){f.extend({matrix:{}})}var d=f.matrix;f.extend(d,{V2:function(h,i){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,2)}else{this.elements=[h,i]}this.length=2},V3:function(h,j,i){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,3)}else{this.elements=[h,j,i]}this.length=3},M2x2:function(i,h,k,j){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,4)}else{this.elements=Array.prototype.slice.call(arguments).slice(0,4)}this.rows=2;this.cols=2},M3x3:function(n,l,k,j,i,h,q,p,o){if(f.isArray(arguments[0])){this.elements=arguments[0].slice(0,9)}else{this.elements=Array.prototype.slice.call(arguments).slice(0,9)}this.rows=3;this.cols=3}});var c={e:function(k,h){var i=this.rows,j=this.cols;if(k>i||h>i||k<1||h<1){return 0}return this.elements[(k-1)*j+h-1]},decompose:function(){var v=this.e(1,1),t=this.e(2,1),q=this.e(1,2),p=this.e(2,2),o=this.e(1,3),n=this.e(2,3);if(Math.abs(v*p-t*q)<0.01){return{rotate:0+"deg",skewX:0+"deg",scaleX:1,scaleY:1,translateX:0+"px",translateY:0+"px"}}var l=o,j=n;var u=Math.sqrt(v*v+t*t);v=v/u;t=t/u;var i=v*q+t*p;q-=v*i;p-=t*i;var s=Math.sqrt(q*q+p*p);q=q/s;p=p/s;i=i/s;if((v*p-t*q)<0){v=-v;t=-t;u=-u}var w=f.angle.radianToDegree;var h=w(Math.atan2(t,v));i=w(Math.atan(i));return{rotate:h+"deg",skewX:i+"deg",scaleX:u,scaleY:s,translateX:l+"px",translateY:j+"px"}}};f.extend(d.M2x2.prototype,c,{toM3x3:function(){var h=this.elements;return new d.M3x3(h[0],h[1],0,h[2],h[3],0,0,0,1)},x:function(j){var k=typeof(j.rows)==="undefined";if(!k&&j.rows==3){return this.toM3x3().x(j)}var i=this.elements,h=j.elements;if(k&&h.length==2){return new d.V2(i[0]*h[0]+i[1]*h[1],i[2]*h[0]+i[3]*h[1])}else{if(h.length==i.length){return new d.M2x2(i[0]*h[0]+i[1]*h[2],i[0]*h[1]+i[1]*h[3],i[2]*h[0]+i[3]*h[2],i[2]*h[1]+i[3]*h[3])}}return false},inverse:function(){var i=1/this.determinant(),h=this.elements;return new d.M2x2(i*h[3],i*-h[1],i*-h[2],i*h[0])},determinant:function(){var h=this.elements;return h[0]*h[3]-h[1]*h[2]}});f.extend(d.M3x3.prototype,c,{x:function(j){var k=typeof(j.rows)==="undefined";if(!k&&j.rows<3){j=j.toM3x3()}var i=this.elements,h=j.elements;if(k&&h.length==3){return new d.V3(i[0]*h[0]+i[1]*h[1]+i[2]*h[2],i[3]*h[0]+i[4]*h[1]+i[5]*h[2],i[6]*h[0]+i[7]*h[1]+i[8]*h[2])}else{if(h.length==i.length){return new d.M3x3(i[0]*h[0]+i[1]*h[3]+i[2]*h[6],i[0]*h[1]+i[1]*h[4]+i[2]*h[7],i[0]*h[2]+i[1]*h[5]+i[2]*h[8],i[3]*h[0]+i[4]*h[3]+i[5]*h[6],i[3]*h[1]+i[4]*h[4]+i[5]*h[7],i[3]*h[2]+i[4]*h[5]+i[5]*h[8],i[6]*h[0]+i[7]*h[3]+i[8]*h[6],i[6]*h[1]+i[7]*h[4]+i[8]*h[7],i[6]*h[2]+i[7]*h[5]+i[8]*h[8])}}return false},inverse:function(){var i=1/this.determinant(),h=this.elements;return new d.M3x3(i*(h[8]*h[4]-h[7]*h[5]),i*(-(h[8]*h[1]-h[7]*h[2])),i*(h[5]*h[1]-h[4]*h[2]),i*(-(h[8]*h[3]-h[6]*h[5])),i*(h[8]*h[0]-h[6]*h[2]),i*(-(h[5]*h[0]-h[3]*h[2])),i*(h[7]*h[3]-h[6]*h[4]),i*(-(h[7]*h[0]-h[6]*h[1])),i*(h[4]*h[0]-h[3]*h[1]))},determinant:function(){var h=this.elements;return h[0]*(h[8]*h[4]-h[7]*h[5])-h[3]*(h[8]*h[1]-h[7]*h[2])+h[6]*(h[5]*h[1]-h[4]*h[2])}});var a={e:function(h){return this.elements[h-1]}};f.extend(d.V2.prototype,a);f.extend(d.V3.prototype,a)})(jQuery,this,this.document);(function(c,b,a,d){if(typeof(c.matrix)=="undefined"){c.extend({matrix:{}})}c.extend(c.matrix,{calc:function(e,f,g){this.matrix=e;this.outerHeight=f;this.outerWidth=g}});c.matrix.calc.prototype={coord:function(e,i,h){h=typeof(h)!=="undefined"?h:0;var g=this.matrix,f;switch(g.rows){case 2:f=g.x(new c.matrix.V2(e,i));break;case 3:f=g.x(new c.matrix.V3(e,i,h));break}return f},corners:function(e,h){var f=!(typeof(e)!=="undefined"||typeof(h)!=="undefined"),g;if(!this.c||!f){h=h||this.outerHeight;e=e||this.outerWidth;g={tl:this.coord(0,0),bl:this.coord(0,h),tr:this.coord(e,0),br:this.coord(e,h)}}else{g=this.c}if(f){this.c=g}return g},sides:function(e){var f=e||this.corners();return{top:Math.min(f.tl.e(2),f.tr.e(2),f.br.e(2),f.bl.e(2)),bottom:Math.max(f.tl.e(2),f.tr.e(2),f.br.e(2),f.bl.e(2)),left:Math.min(f.tl.e(1),f.tr.e(1),f.br.e(1),f.bl.e(1)),right:Math.max(f.tl.e(1),f.tr.e(1),f.br.e(1),f.bl.e(1))}},offset:function(e){var f=this.sides(e);return{height:Math.abs(f.bottom-f.top),width:Math.abs(f.right-f.left)}},area:function(e){var h=e||this.corners();var g={x:h.tr.e(1)-h.tl.e(1)+h.br.e(1)-h.bl.e(1),y:h.tr.e(2)-h.tl.e(2)+h.br.e(2)-h.bl.e(2)},f={x:h.bl.e(1)-h.tl.e(1)+h.br.e(1)-h.tr.e(1),y:h.bl.e(2)-h.tl.e(2)+h.br.e(2)-h.tr.e(2)};return 0.25*Math.abs(g.e(1)*f.e(2)-g.e(2)*f.e(1))},nonAffinity:function(){var f=this.sides(),g=f.top-f.bottom,e=f.left-f.right;return parseFloat(parseFloat(Math.abs((Math.pow(g,2)+Math.pow(e,2))/(f.top*f.bottom+f.left*f.right))).toFixed(8))},originOffset:function(h,g){h=h?h:new c.matrix.V2(this.outerWidth*0.5,this.outerHeight*0.5);g=g?g:new c.matrix.V2(0,0);var e=this.coord(h.e(1),h.e(2));var f=this.coord(g.e(1),g.e(2));return{top:(f.e(2)-g.e(2))-(e.e(2)-h.e(2)),left:(f.e(1)-g.e(1))-(e.e(1)-h.e(1))}}}})(jQuery,this,this.document);(function(e,d,a,f){if(typeof(e.matrix)=="undefined"){e.extend({matrix:{}})}var c=e.matrix,g=c.M2x2,b=c.M3x3;e.extend(c,{identity:function(k){k=k||2;var l=k*k,n=new Array(l),j=k+1;for(var h=0;h<l;h++){n[h]=(h%j)===0?1:0}return new c["M"+k+"x"+k](n)},matrix:function(){var h=Array.prototype.slice.call(arguments);switch(arguments.length){case 4:return new g(h[0],h[2],h[1],h[3]);case 6:return new b(h[0],h[2],h[4],h[1],h[3],h[5],0,0,1)}},reflect:function(){return new g(-1,0,0,-1)},reflectX:function(){return new g(1,0,0,-1)},reflectXY:function(){return new g(0,1,1,0)},reflectY:function(){return new g(-1,0,0,1)},rotate:function(l){var i=e.angle.degreeToRadian(l),k=Math.cos(i),n=Math.sin(i);var j=k,h=n,p=-n,o=k;return new g(j,p,h,o)},scale:function(i,h){i=i||i===0?i:1;h=h||h===0?h:i;return new g(i,0,0,h)},scaleX:function(h){return c.scale(h,1)},scaleY:function(h){return c.scale(1,h)},skew:function(k,i){k=k||0;i=i||0;var l=e.angle.degreeToRadian(k),j=e.angle.degreeToRadian(i),h=Math.tan(l),n=Math.tan(j);return new g(1,h,n,1)},skewX:function(h){return c.skew(h)},skewY:function(h){return c.skew(0,h)},translate:function(i,h){i=i||0;h=h||0;return new b(1,0,i,0,1,h,0,0,1)},translateX:function(h){return c.translate(h)},translateY:function(h){return c.translate(0,h)}})})(jQuery,this,this.document);// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_flip(c,n,e){var f=jQuery;var g=f(this);var m=c.cols||Math.round(c.width/90);var l=c.rows||Math.round(c.height/30);var k=f("<div>").addClass("ws_effect ws_flip").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var q=[];var a=[m*0.7,m*2.5];var o=[[],[]];function p(j,w,x){if(!j[x]){j[x]=[]}j[x][j[x].length]=w}for(var h=0;h<m*l;h++){var t=h%m,s=Math.floor(h/m);var r=q[h]=document.createElement("div");f(r).css({position:"absolute",overflow:"hidden"}).append(f("<img>").css({position:"absolute",top:0,left:0})).appendTo(k);p(o[0],r,2*s+t);p(o[1],r,Math.abs(h-(m*l>>1)))}function v(){var z=k.width();var B=k.height();for(var A=0;A<m*l;A++){var y=A%m,x=Math.floor(A/m);var E=Math.round(z*(y)/m),C=Math.round(B*(x)/l),w=Math.round(z*(y+1)/m)-E,D=Math.round(B*(x+1)/l)-C;f(q[A]).css({width:w+"px",height:D+"px",left:E+"px",top:C+"px"}).data({width:w,height:D})}}function d(w,j,i){if(!c.support.transform){w.each(function(x,y){y=f(y);y.animate({width:y.data("width")*0.8+"px",height:0},{easing:"easeInOutCubic",duration:j,complete:i})})}else{w.animate({scaleX:0.8,scaleY:-1},{easing:"easeInOutCubic",duration:j,complete:i})}}function b(w,j,i){if(!c.support.transform){w.each(function(x,y){y=f(y);y.animate({width:y.data("width")+"px",height:y.data("height")+"px"},{easing:"easeInOutCubic",duration:j,complete:i})})}else{w.animate({scaleX:1,scaleY:1},{easing:"easeInOutCubic",duration:j,complete:function(){w.css({"-o-transform":"none"});if(i){i()}}})}}var u;this.go=function(C,w){if(u){return -1}u=1;v();var j=("type" in c)?c.type:Math.round(Math.random()*(o.length-1));var i=f(n.get(w));i={width:i.width(),height:i.height(),marginTop:parseFloat(i.css("marginTop")),marginLeft:parseFloat(i.css("marginLeft"))};var y=e.width()/m,z=e.height()/l;f(q).stop(1,1).css({opacity:1,"z-index":3}).find("img").attr("src",n.get(w).src).css(i).each(function(I){var J=I%m,H=Math.floor(I/m);f(this).css({left:-y*J,top:-z*H})});k.show();var B=f(".ws_list",e);B.find("img").css({visibility:"hidden"});var G=o[j];var F=Math.round(a[j]);var D=c.duration*0.9/(G.length+2*F);var x=D*F;if(c.support.transform){x/=2}var A=0;function E(){if(A<G.length){d(f(G[A]),x)}var J=A-F;if(J>=0&&J<G.length){var I=f(G[J]);var H;if(J>=G.length-1){H=function(){if(u){B.find("img").css({visibility:"visible"});g.trigger("effectEnd");k.hide();u=0}}}b(I,x,H);I.find("img").attr("src",n.get(C).src)}A++;if(A-F<G.length){setTimeout(E,D)}}E()}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"bubbles,collage,flip",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});