!function e(){var t=window.document,i=t.documentElement,a=navigator.appVersion.match(/(iphone)/gi),n=navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),d=.5,r=100,o=window.devicePixelRatio||1,l=1;i.style.fontSize="100px";var m=t.createElement("div");m.setAttribute("style","width:1rem; display:none"),i.appendChild(m);var s=window.getComputedStyle(m).width;i.removeChild(m),s!==i.style.fontSize&&(l=100/parseInt(s)),a||n&&n[1]>534||(o=1);var p=1/o;i.setAttribute("data-dpr",o);var c=t.querySelector('meta[name="viewport"]');c||(c=t.createElement("meta"),c.setAttribute("name","viewport"),t.head.appendChild(c)),c.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+p+",maximum-scale="+p+",minimum-scale="+p),i.style.fontSize=o*d*r*l+"px",window.addEventListener("resize",e)}();