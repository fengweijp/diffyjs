!function(r){function e(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return r[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=r,e.c=t,e.p="/",e(0)}([function(r,e,t){"use strict";var n=t(1),o=void 0,i=void 0,a=void 0,u=void 0,c=void 0,s=function(r){var e=r.data,t=e.buffer,s=e.data1,d=e.data2,f=e.width,v=e.height,l=e.sensitivity,p=0;c=1-l,o=new Uint32Array(t);for(var g=0;g<v;++g)for(var x=0;x<f;++x)p=g*f+x,i=(s[4*p]+s[4*p+1]+s[4*p+2])/3/c,a=(d[4*p]+d[4*p+1]+d[4*p+2])/3/c,u=(0,n.polarize)((0,n.abs)(i-a),21),o[p]=255<<24|u<<16|u<<8|u;postMessage(t)};onmessage=s},function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createOnceLog=function(){var r=0;return function(){if(r<1){var e;(e=console).log.apply(e,arguments)}r++}},e.$=function(r){return document.querySelector(r)},e.round=function(r){return r+.5>>0},e.abs=function(r){return(r^r>>31)-(r>>31)},e.polarize=function(r,e){return r>e?0:255}}]);
//# sourceMappingURL=a6882b19b6c320d25dad.worker.js.map