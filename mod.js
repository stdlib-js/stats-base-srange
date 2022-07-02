// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var f=e,c=function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r},y=t()?f:c;var p=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},v="function"==typeof Math.fround?Math.fround:null;var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return _&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d;var s=function(r){return m.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},w="function"==typeof Symbol?Symbol.toStringTag:"",S=j,h=w,N=d;var A=s,F=function(r){var t,e,n;if(null==r)return N.call(r);e=r[h],t=S(r,h);try{r[h]=void 0}catch(t){return N.call(r)}return n=N.call(r),t?r[h]=e:delete r[h],n},O=b()?F:A,P="function"==typeof Float32Array;var T=function(r){return P&&r instanceof Float32Array||"[object Float32Array]"===O(r)},E=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,V=T,k=E,x=I;var G="function"==typeof Float32Array?Float32Array:void 0,M=function(){throw new Error("not implemented")},C=new(function(){var r,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,5e40]),r=V(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?G:M)(1);var Y=v;"function"!=typeof Y&&(Y=function(r){return C[0]=r,C[0]});var q=Y;var z=function(r){return r!=r};function B(r,t,e){var n,o,a,u,l;if(r<=0)return NaN;if(1===r||0===e)return z(t[0])?NaN:0;for(n=o=t[a=e<0?(1-r)*e:0],l=1;l<r;l++){if(u=t[a+=e],z(u))return u;u<o?o=u:u>n&&(n=u)}return q(n-o)}function D(r,t,e,n){var o,a,u,l,i;if(r<=0)return NaN;if(1===r||0===e)return z(t[n])?NaN:0;for(o=a=t[u=n],i=1;i<r;i++){if(l=t[u+=e],z(l))return l;l<a?a=l:l>o&&(o=l)}return q(o-a)}p(B,"ndarray",D);export{B as default,D as ndarray};
//# sourceMappingURL=mod.js.map
