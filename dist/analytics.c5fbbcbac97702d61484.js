!function(){var n,t,c;window.analytics=(n=0,t=!1,c=function(){return n++},document.addEventListener("click",c),{destroy:function(){document.removeEventListener("click",c),t=!0},getClicks:function(){return t?"Analytics is destroyed, Total clicks count = ".concat(n):n}})}();