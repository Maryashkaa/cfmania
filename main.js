(()=>{"use strict";var t={189:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(354),r=n.n(o),a=n(314),c=n.n(a)()(r());c.push([t.id,"// extracted by mini-css-extract-plugin\nexport {};","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by mini-css-extract-plugin\nexport {};"],sourceRoot:""}]);const i=c},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},c=[],i=0;i<t.length;i++){var s=t[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=o(t,r),d=0;d<a.length;d++){var u=n(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,n.d({},{bW:()=>x,NV:()=>g});const o=n.p+"400da9a29d7538c16604.jpg",r=function(){const t=document.createElement("root");t.id="root";const e=document.createElement("div");e.classList.add("main-text");const n=document.createElement("h1");n.classList.add("coffemania"),n.textContent="coffeemania";const r=document.createElement("h1");r.classList.add("byM"),r.textContent="by Maryashka",e.appendChild(n),e.appendChild(r);const a=document.createElement("div");a.classList.add("main-block");const c=document.createElement("div");c.classList.add("place"),c.textContent="about us";const i=document.createElement("div");i.classList.add("text"),i.textContent="Кофемания — это не просто кофейня, это штаб-квартира вселенной для темщиков. Здесь все собравшиеся обсуждают темки на миллиарды, пока ждут свой раф на кокосовом, а каждый глоток кофе — это новый виток философских размышлений. Тут, среди ароматов свежесваренного кофе и лёгкого блеска украшений, Кофемания становится местом, где каждое обсуждение может стать началом нового открытия. Так что, если вы искали место, где можно обсудить смысл жизни за чашечкой эспрессо, вы попали в правильное место. Наслаждайтесь!",a.appendChild(c),a.appendChild(i);const s=document.createElement("img");return s.src=o,s.width=1500,s.height=500,t.appendChild(x()),t.appendChild(e),t.appendChild(a),t.appendChild(s),t},a=function(){const t=document.createElement("div");t.id="menu-page";const e=document.createElement("h1");e.textContent="Menu",e.classList.add("menu-title");const n=document.createElement("button");n.textContent="Home",n.classList.add("home-button"),n.addEventListener("click",(()=>{g(r)})),t.appendChild(n),t.appendChild(e);const o=document.createElement("div");o.classList.add("menu-item"),o.textContent="Щавелевый - 95$";const a=document.createElement("div");a.classList.add("menu-item"),a.textContent="Раф урбеч - 59$";const c=document.createElement("div");c.classList.add("menu-item"),c.textContent="Espresso - $4";const i=document.createElement("div");return c.classList.add("menu-item"),c.textContent="Рэдбул тоник - 0$",t.appendChild(e),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(i),t},c=function(){const t=document.createElement("div");t.id="contact-page";const e=document.createElement("h1");e.textContent="Contact Us",e.classList.add("contact-title");const n=document.createElement("div");n.classList.add("contact-info"),n.innerHTML="\n        <p>Phone: +7 (999) 995-95-95</p>\n        <p>Email: info@coffeemania.ru</p>\n        <p>Address: Putitna 22 </p>\n    ",t.appendChild(e),t.appendChild(n);const o=document.createElement("button");return o.textContent="Home",o.classList.add("home-button"),o.addEventListener("click",(()=>{g(r)})),t.appendChild(o),t.appendChild(e),t.appendChild(n),t};var i=n(72),s=n.n(i),d=n(825),u=n.n(d),p=n(659),l=n.n(p),m=n(56),f=n.n(m),h=n(540),v=n.n(h),C=n(113),y=n.n(C),E=n(189),b={};if(b.styleTagTransform=y(),b.setAttributes=f(),b.insert=l().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=v(),s()(E.A,b),E.A&&E.A.locals&&E.A.locals,!document.getElementById("root")){const t=document.createElement("div");t.id="root",document.body.appendChild(t)}function g(t){!function(){const t=document.getElementById("root");t&&(t.innerHTML="")}(),document.getElementById("root").appendChild(t())}function x(){const t=document.createElement("nav"),e=document.createElement("button");e.textContent="Home",e.addEventListener("click",(()=>g(r)));const n=document.createElement("button");n.textContent="Menu",n.addEventListener("click",(()=>g(a)));const o=document.createElement("button");return o.textContent="Contact",o.addEventListener("click",(()=>g(c))),t.appendChild(e),t.appendChild(n),t.appendChild(o),t}document.getElementById("root").appendChild(r())})();
//# sourceMappingURL=main.js.map