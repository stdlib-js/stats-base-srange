// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var f=t;var c="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var b,v="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(o=r)&&_.call(o,a);try{r[v]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[v]=e:delete r[v],n}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null;var j,w="function"==typeof Float32Array?Float32Array:void 0;j=function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var S=new j(1);var h="function"==typeof c?c:function(r){return S[0]=r,S[0]};function N(r){return r!=r}function A(r,t,e){var n,o,a,l,u;if(r<=0)return NaN;if(1===r||0===e)return N(t[0])?NaN:0;for(n=o=t[a=e<0?(1-r)*e:0],u=1;u<r;u++){if(N(l=t[a+=e]))return l;l<o?o=l:l>n&&(n=l)}return h(n-o)}function F(r,t,e,n){var o,a,l,u,i;if(r<=0)return NaN;if(1===r||0===e)return N(t[n])?NaN:0;for(o=a=t[l=n],i=1;i<r;i++){if(N(u=t[l+=e]))return u;u<a?a=u:u>o&&(o=u)}return h(o-a)}f(A,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:F});export{A as default,F as ndarray};
//# sourceMappingURL=mod.js.map