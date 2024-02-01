"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var m=s(function(z,l){
var F=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/math-base-assert-is-nanf/dist');function R(n,r,t){var v,u,a,e,i;if(n<=0)return NaN;if(n===1||t===0)return q(r[0])?NaN:0;for(t<0?a=(1-n)*t:a=0,u=r[a],v=u,i=1;i<n;i++){if(a+=t,e=r[a],q(e))return e;e<u?u=e:e>v&&(v=e)}return F(v-u)}l.exports=R
});var g=s(function(A,p){
var T=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist');function _(n,r,t,v){var u,a,e,i,f;if(n<=0)return NaN;if(n===1||t===0)return c(r[v])?NaN:0;for(e=v,a=r[e],u=a,f=1;f<n;f++){if(e+=t,i=r[e],c(i))return i;i<a?a=i:i>u&&(u=i)}return T(u-a)}p.exports=_
});var j=s(function(B,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=m(),O=g();E(x,"ndarray",O);y.exports=x
});var b=require("path").join,d=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=j(),o,N=d(b(__dirname,"./native.js"));h(N)?o=k:o=N;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
