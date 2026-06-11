"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(O,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-ninf/dist');function l(e,r,t){return i(e)||i(r)||i(t)||r>=t?NaN:e<r?N:e>=t?0:v((e-r)/(t-r))}a.exports=l
});var s=f(function(R,o){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist');function F(e,r){if(u(e)||u(r)||e>=r)return y(NaN);return t;function t(n){return u(n)?NaN:n<e?p:n>=r?0:d((n-e)/(r-e))}}o.exports=F
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),I=s();g(q,"factory",I);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
