!function(){"use strict";var t={554:function(t,e,o){t.exports=o.p+"./img/github.png"},990:function(t,e,o){t.exports=o.p+"./img/gmail.png"},633:function(t,e,o){t.exports=o.p+"./img/mazeGame.png"},945:function(t,e,o){t.exports=o.p+"./img/preloader.gif"},813:function(t,e,o){t.exports=o.p+"./img/stAva.jpg"},941:function(t,e,o){t.exports=o.p+"./img/svetofor.png"},303:function(t,e,o){t.exports=o.p+"./img/telegram.png"},493:function(t,e,o){t.exports=o.p+"./img/todoTs.png"},483:function(t,e,o){t.exports=o.p+"./img/vk.png"}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){o(945),o(813),o(633),o(554),o(990),o(941),o(303),o(493),o(483);var t=document.querySelector(".hello_btn"),e=document.querySelector(".resume")?document.querySelector(".resume"):void 0,n=document.querySelector("body"),i=document.querySelector(".header_burger"),r=document.querySelector(".header__menu"),c=document.getElementById("preloader");window.addEventListener("load",(function(){setTimeout((function(){c.classList.add("finish")}),1e3)}));var s=t?t.classList.contains("active"):void 0,a=n.classList.contains("lock"),l=i.classList.contains("lock");i.addEventListener("click",(function(){a&&!l?(i.classList.toggle("active"),r.classList.toggle("active")):(n.classList.toggle("lock"),i.classList.toggle("active"),r.classList.toggle("active"))}));t.addEventListener("click",(function(){if(!a&&s){var o=window.pageYOffset;window.scrollBy(0,-o)}n.classList.toggle("lock"),t.classList.toggle("active"),e.classList.toggle("active"),l=!l,a=!a})),window.onbeforeunload=function(){window.scrollTo(0,0)}}()}();