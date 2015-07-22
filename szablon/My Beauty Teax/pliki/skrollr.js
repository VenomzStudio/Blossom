!function(a,b,c){"use strict";function V(c){if(h=b.documentElement,i=b.body,R(),sb=this,c=c||{},zb=c.constants||{},c.easing)for(var d in c.easing)U[d]=c.easing[d];Nb=c.edgeStrategy||"set",vb={beforerender:c.beforerender,render:c.render},wb=c.forceHeight!==!1,wb&&(yb=c.scale||1),Ab=c.mobileDeceleration||x,Ib=c.smoothScrolling!==!1,Jb=c.smoothScrollingDuration||y,Kb={targetTop:sb.getScrollTop()},Ob=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Ob?(ub=b.getElementById("skrollr-body"),ub&&fb(),W(),nb(h,[r,u],[s])):nb(h,[r,t],[s]),sb.refresh(),gb(a,"resize orientationchange",function(){var a=h.clientWidth,b=h.clientHeight;(b!==Fb||a!==Eb)&&(Fb=b,Eb=a,Gb=!0)});var e=S();return function f(){Z(),Sb=e(f)}(),sb}var h,i,d={get:function(){return sb},init:function(a){return sb||new V(a)},VERSION:"0.6.22"},e=Object.prototype.hasOwnProperty,f=a.Math,g=a.getComputedStyle,j="touchstart",k="touchmove",l="touchcancel",m="touchend",n="skrollable",o=n+"-before",p=n+"-between",q=n+"-after",r="skrollr",s="no-"+r,t=r+"-desktop",u=r+"-mobile",v="linear",w=1e3,x=.004,y=200,z="start",A="end",B="center",C="bottom",D="___skrollable_id",E=/^(?:input|textarea|button|select)$/i,F=/^\s+|\s+$/g,G=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,H=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,I=/^([a-z\-]+)\[(\w+)\]$/,J=/-([a-z])/g,K=function(a,b){return b.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,N=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,O=/[a-z\-]+-gradient/g,P="",Q="",R=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(g){var b=g(i,null);for(var c in b)if(P=c.match(a)||+c==c&&b[c].match(a))break;if(!P)return P=Q="",void 0;P=P[0],"-"===P.slice(0,1)?(Q=P,P={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[P]):Q="-"+P.toLowerCase()+"-"}},S=function(){var b=a.requestAnimationFrame||a[P.toLowerCase()+"RequestAnimationFrame"],c=qb();return(Ob||!b)&&(b=function(b){var d=qb()-c,e=f.max(0,1e3/60-d);return a.setTimeout(function(){c=qb(),b()},e)}),b},T=function(){var b=a.cancelAnimationFrame||a[P.toLowerCase()+"CancelAnimationFrame"];return(Ob||!b)&&(b=function(b){return a.clearTimeout(b)}),b},U={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-f.cos(a*f.PI)/2+.5},sqrt:function(a){return f.sqrt(a)},outCubic:function(a){return f.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-f.abs(3*f.cos(1.028*a*b)/b)}};V.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,tb=[],Mb=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=Ib,k=Nb;if(g.attributes){for(var l=0,m=g.attributes.length;m>l;l++){var o=g.attributes[l];if("data-anchor-target"!==o.name)if("data-smooth-scrolling"!==o.name)if("data-edge-strategy"!==o.name){var p=o.name.match(G);if(null!==p){var q={props:o.value,element:g};i.push(q);var r=p[1];r&&(q.constant=r.substr(1));var s=p[2];/p$/.test(s)?(q.isPercentage=!0,q.offset=(0|s.slice(0,-1))/100):q.offset=0|s;var t=p[3],u=p[4]||t;t&&t!==z&&t!==A?(q.mode="relative",q.anchors=[t,u]):(q.mode="absolute",t===A?q.isEnd=!0:q.isPercentage||(q.offset=q.offset*yb))}}else k=o.value;else j="off"!==o.value;else if(h=b.querySelector(o.value),null===h)throw'Unable to find anchor target "'+o.value+'"'}if(i.length){var v,w,x;!f&&D in g?(x=g[D],v=tb[x].styleAttr,w=tb[x].classAttr):(x=g[D]=Mb++,v=g.style.cssText,w=mb(g)),tb[x]={element:g,styleAttr:v,classAttr:w,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k},nb(g,[n],[])}}}for(jb(),d=0,e=a.length;e>d;d++){var y=tb[a[d][D]];y!==c&&($(y),ab(y))}return sb},V.prototype.relativeToAbsolute=function(a,b,c){var d=h.clientHeight,e=a.getBoundingClientRect(),f=e.top,g=e.bottom-e.top;return b===C?f-=d:b===B&&(f-=d/2),c===C?f+=g:c===B&&(f+=g/2),f+=sb.getScrollTop(),0|f+.5},V.prototype.animateTo=function(a,b){b=b||{};var d=qb(),e=sb.getScrollTop();return Hb={startTop:e,topDiff:a-e,targetTop:a,duration:b.duration||w,startTime:d,endTime:d+(b.duration||w),easing:U[b.easing||v],done:b.done},Hb.topDiff||(Hb.done&&Hb.done.call(sb,!1),Hb=c),sb},V.prototype.stopAnimateTo=function(){Hb&&Hb.done&&Hb.done.call(sb,!0),Hb=c},V.prototype.isAnimatingTo=function(){return!!Hb},V.prototype.setScrollTop=function(b,c){return Lb=c===!0,Ob?Pb=f.min(f.max(b,0),xb):a.scrollTo(0,b),sb},V.prototype.getScrollTop=function(){return Ob?Pb:a.pageYOffset||h.scrollTop||i.scrollTop||0},V.prototype.getMaxScrollTop=function(){return xb},V.prototype.on=function(a,b){return vb[a]=b,sb},V.prototype.off=function(a){return delete vb[a],sb},V.prototype.destroy=function(){var a=T();a(Sb),ib(),nb(h,[s],[r,t,u]);for(var b=0,e=tb.length;e>b;b++)eb(tb[b].element);h.style.overflow=i.style.overflow="auto",h.style.height=i.style.height="auto",ub&&d.setStyle(ub,"transform","none"),sb=c,ub=c,vb=c,wb=c,xb=0,yb=1,zb=c,Ab=c,Bb="down",Cb=-1,Eb=0,Fb=0,Gb=!1,Hb=c,Ib=c,Jb=c,Kb=c,Lb=c,Mb=0,Nb=c,Ob=!1,Pb=0,Qb=c};var W=function(){var d,e,g,n,o,p,q,r,s,t,u,v;gb(h,[j,k,l,m].join(" "),function(a){var h=a.changedTouches[0];for(n=a.target;3===n.nodeType;)n=n.parentNode;switch(o=h.clientY,p=h.clientX,t=a.timeStamp,E.test(n.tagName)||a.preventDefault(),a.type){case j:d&&d.blur(),sb.stopAnimateTo(),d=n,e=q=o,g=p,s=t;break;case k:E.test(n.tagName)&&b.activeElement!==n&&a.preventDefault(),r=o-q,v=t-u,sb.setScrollTop(Pb-r,!0),q=o,u=t;break;default:case l:case m:var i=e-o,w=g-p,x=w*w+i*i;if(49>x){if(!E.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,h.screenX,h.screenY,h.clientX,h.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=f.max(f.min(z,3),-3);var A=f.abs(z/Ab),B=z*A+.5*Ab*A*A,C=sb.getScrollTop()-B,D=0;C>xb?(D=(xb-C)/B,C=xb):0>C&&(D=-C/B,C=0),A*=1-D,sb.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),h.style.overflow=i.style.overflow="hidden"},X=function(){var c,d,e,g,i,j,k,l,m,n,o,a=h.clientHeight,b=kb();for(l=0,m=tb.length;m>l;l++)for(c=tb[l],d=c.element,e=c.anchorTarget,g=c.keyFrames,i=0,j=g.length;j>i;i++)k=g[i],n=k.offset,o=b[k.constant]||0,k.frame=n,k.isPercentage&&(n*=a,k.frame=n),"relative"===k.mode&&(eb(d),k.frame=sb.relativeToAbsolute(e,k.anchors[0],k.anchors[1])-n,eb(d,!0)),k.frame+=o,wb&&!k.isEnd&&k.frame>xb&&(xb=k.frame);for(xb=f.max(xb,lb()),l=0,m=tb.length;m>l;l++){for(c=tb[l],g=c.keyFrames,i=0,j=g.length;j>i;i++)k=g[i],o=b[k.constant]||0,k.isEnd&&(k.frame=xb-k.offset+o);c.keyFrames.sort(rb)}},Y=function(a,b){for(var c=0,f=tb.length;f>c;c++){var t,u,g=tb[c],h=g.element,i=g.smoothScrolling?a:b,j=g.keyFrames,k=j[0].frame,l=j[j.length-1].frame,m=k>i,r=i>l,s=j[m?0:j.length-1];if(m||r){if(m&&-1===g.edge||r&&1===g.edge)continue;switch(nb(h,[m?o:q],[o,p,q]),g.edge=m?-1:1,g.edgeStrategy){case"reset":eb(h);continue;case"ease":i=s.frame;break;default:case"set":var v=s.props;for(t in v)e.call(v,t)&&(u=db(v[t].value),d.setStyle(h,t,u));continue}}else 0!==g.edge&&(nb(h,[n,p],[o,q]),g.edge=0);for(var w=0,x=j.length-1;x>w;w++)if(i>=j[w].frame&&i<=j[w+1].frame){var y=j[w],z=j[w+1];for(t in y.props)if(e.call(y.props,t)){var A=(i-y.frame)/(z.frame-y.frame);A=y.props[t].easing(A),u=cb(y.props[t].value,z.props[t].value,A),u=db(u),d.setStyle(h,t,u)}break}}},Z=function(){Gb&&(Gb=!1,jb());var b,f,a=sb.getScrollTop(),e=qb();if(Hb)e>=Hb.endTime?(a=Hb.targetTop,b=Hb.done,Hb=c):(f=Hb.easing((e-Hb.startTime)/Hb.duration),a=0|Hb.startTop+f*Hb.topDiff),sb.setScrollTop(a,!0);else if(!Lb){var g=Kb.targetTop-a;g&&(Kb={startTop:Cb,topDiff:a-Cb,targetTop:a,startTime:Db,endTime:Db+Jb}),e<=Kb.endTime&&(f=U.sqrt((e-Kb.startTime)/Jb),a=0|Kb.startTop+f*Kb.topDiff)}if(Ob&&ub&&d.setStyle(ub,"transform","translate(0, "+-Pb+"px) "+Qb),Lb||Cb!==a){Bb=a>Cb?"down":Cb>a?"up":Bb,Lb=!1;var h={curTop:a,lastTop:Cb,maxTop:xb,direction:Bb},i=vb.beforerender&&vb.beforerender.call(sb,h);i!==!1&&(Y(a,sb.getScrollTop()),Cb=a,vb.render&&vb.render.call(sb,h)),b&&b.call(sb,!1)}Db=e},$=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var e,f,g,i,d=a.keyFrames[b],h={};null!==(i=H.exec(d.props));)g=i[1],f=i[2],e=g.match(I),null!==e?(g=e[1],e=e[2]):e=v,f=f.indexOf("!")?_(f):[f.slice(1)],h[g]={value:f,easing:U[e]};d.props=h}},_=function(a){var b=[];return N.lastIndex=0,a=a.replace(N,function(a){return a.replace(L,function(a){return 100*(a/255)+"%"})}),Q&&(O.lastIndex=0,a=a.replace(O,function(a){return Q+a})),a=a.replace(L,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ab=function(a){var c,d,b={};for(c=0,d=a.keyFrames.length;d>c;c++)bb(a.keyFrames[c],b);for(b={},c=a.keyFrames.length-1;c>=0;c--)bb(a.keyFrames[c],b)},bb=function(a,b){var c;for(c in b)e.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},cb=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},db=function(a){var b=1;return M.lastIndex=0,a[0].replace(M,function(){return a[b++]})},eb=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=tb[d[D]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,nb(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=mb(d),d.style.cssText=c.styleAttr,nb(d,c.classAttr)))},fb=function(){Qb="translateZ(0)",d.setStyle(ub,"transform",Qb);var a=g(ub),b=a.getPropertyValue("transform"),c=a.getPropertyValue(Q+"transform"),e=b&&"none"!==b||c&&"none"!==c;e||(Qb="")};d.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(J,K).replace("-",""),"zIndex"===b)d[b]=isNaN(c)?c:""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{P&&(d[P+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var sb,tb,ub,vb,wb,zb,Ab,Hb,Ib,Jb,Kb,Lb,Nb,Qb,Sb,gb=d.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Rb.push({element:b,name:f,listener:d})},hb=d.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ib=function(){for(var a,b=0,c=Rb.length;c>b;b++)a=Rb[b],hb(a.element,a.name,a.listener);Rb=[]},jb=function(){var a=sb.getScrollTop();xb=0,wb&&!Ob&&(i.style.height="auto"),X(),wb&&!Ob&&(i.style.height=xb+h.clientHeight+"px"),Ob?sb.setScrollTop(f.min(sb.getScrollTop(),xb)):sb.setScrollTop(a,!0),Lb=!0},kb=function(){var c,d,a=h.clientHeight,b={};for(c in zb)d=zb[c],"function"==typeof d?d=d.call(sb):/p$/.test(d)&&(d=d.slice(0,-1)/100*a),b[c]=d;return b},lb=function(){var a=ub&&ub.offsetHeight||0,b=f.max(a,i.scrollHeight,i.offsetHeight,h.scrollHeight,h.offsetHeight,h.clientHeight);return b-h.clientHeight},mb=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},nb=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return b[f]=d,void 0;for(var g=b[f],h=0,i=e.length;i>h;h++)g=pb(g).replace(pb(e[h])," ");g=ob(g);for(var j=0,k=d.length;k>j;j++)-1===pb(g).indexOf(pb(d[j]))&&(g+=" "+d[j]);b[f]=ob(g)},ob=function(a){return a.replace(F,"")},pb=function(a){return" "+a+" "},qb=Date.now||function(){return+new Date},rb=function(a,b){return a.frame-b.frame},xb=0,yb=1,Bb="down",Cb=-1,Db=qb(),Eb=0,Fb=0,Gb=!1,Mb=0,Ob=!1,Pb=0,Rb=[];"function"==typeof define&&define.amd?define("skrollr",function(){return d}):a.skrollr=d}(window,document);