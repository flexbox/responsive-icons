/*
yummi-loader.js - // v1.0 http://gummibearlab.github.io/Yummi-loader/
Licensed under the MIT license

Copyright (c) 2013 Daniele Tabanella (gummibearlab)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function findMaxYLValue(){var n=[];$('*[class*="anim_"]').each(function(){var t,a,i=$(this).attr("class").split(" ");for(t=0;t<i.length;++t)if(a=i[t],"anim_"===a.substring(0,5)){n.push(a.substring(5));break}});var t=".anim_"+Math.max.apply(Math,n),a=$(t).first();a.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){var n=a.css("transition-delay");transitionDelay=Math.ceil(1*parseFloat(1e3*n.substring(0,n.length-1)))/1})}var transitionDelay=0;findMaxYLValue(),$("body").on("click",".trigger",function(n){n.preventDefault(),$body.toggleClass("on off");var t=$(this).attr("href");setTimeout(function(){location.href=t},transitionDelay)});