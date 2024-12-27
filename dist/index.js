"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(z,l){
var j=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist');function R(e,r,i,q){var t,n,u,a,s;if(e<=0)return NaN;if(e===1||i===0)return c(r[q])?NaN:0;for(u=q,n=r[u],t=n,s=1;s<e;s++){if(u+=i,a=r[u],c(a))return a;a<n?n=a:a>t&&(t=a)}return j(t-n)}l.exports=R
});var p=v(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function F(e,r,i){return E(e,r,i,_(e,i))}m.exports=F
});var g=v(function(B,d){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),O=o();N(y,"ndarray",O);d.exports=y
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=g(),f,x=b(T(__dirname,"./native.js"));h(x)?f=k:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
