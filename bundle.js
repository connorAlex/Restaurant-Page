(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n}\n\n.content{\n    display:grid;\n    grid-template-rows: 1fr 10fr 1fr;\n    grid-template-columns: 1fr;\n\n    width: 100vw;\n    height: 100vh;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid;\n    border-color: black;\n\n}\n\n.container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid;\n    border-color: black;\n}\n\n.pages {\n    display: flex;\n    width: 70%;\n    justify-content: space-evenly;\n    \n    border: 1px solid;\n    border-color: black;\n}\n\n.subject {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid;\n    border-color: black;\n\n    height: 85%;\n    width: 70%;\n    gap: 5px;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n\n    margin: 10px;\n    gap: 15px;\n    padding: 25px;\n    width: 50%;\n    \n    border: 1px solid;\n    border-color: black;\n}\n\n.img {\n    border: 1px solid;\n    border-color: black;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid;\n    border-color: black;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=c[d]||0,u="".concat(d," ").concat(l);c[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),d=0;d<c.length;d++){var l=t(c[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=e=>{const n=document.createElement("div");n.classList.add("subject");const t=document.createElement("div");t.classList.add("card");const r=document.createElement("div");r.innerHTML="Title of Food";const o=document.createElement("div");return o.innerHTML="This is a description of food",t.appendChild(r),t.appendChild(o),n.appendChild(t),n};var n=t(379),r=t.n(n),o=t(795),c=t.n(o),a=t(569),i=t.n(a),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),m=t.n(p),f=t(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=u(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".content");let b=(()=>{const e=document.createElement("div");e.classList.add("nav"),e.innerHTML="La Passerelle";const n=document.createElement("div");n.classList.add("container");const t=document.createElement("div");t.classList.add("pages"),n.appendChild(t);const r=document.createElement("div");r.classList.add("subject"),n.appendChild(r);const o=document.createElement("button");o.classList.add("about"),o.innerHTML="About";const c=document.createElement("button");c.classList.add("menu"),c.innerHTML="Menu";const a=document.createElement("button");a.classList.add("contact"),a.innerHTML="Contact",t.appendChild(o),t.appendChild(c),t.appendChild(a);const i=document.createElement("footer");return i.innerHTML="Footer",{nav:e,container:n,footer:i}})();for(const[e,n]of Object.entries(b))h.appendChild(n);let y=document.querySelector(".subject");y.appendChild(e());let g=document.querySelector(".about"),x=document.querySelector(".menu"),L=document.querySelector(".contact");g.onclick=()=>y.replaceChildren((()=>{console.log("about selected");const e=document.createElement("div");e.classList.add("subject");const n=document.createElement("div");n.classList.add("subtitle"),n.innerHTML="About Us",e.appendChild(n);const t=document.createElement("div");return t.classList.add("desc"),t.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere vehicula. Vestibulum augue massa, euismod eleifend lectus vitae, dictum ultricies enim. Donec felis metus, iaculis ornare dolor eget, venenatis ullamcorper sapien. Aenean ut leo mauris. Integer in leo vulputate, gravida enim a, egestas mi. Nam consectetur a orci eu consequat. Quisque dictum elit eget maximus placerat. Aliquam tincidunt elementum quam non semper.",e.appendChild(t),e})()),x.onclick=()=>y.replaceChildren(e()),L.onclick=()=>y.replaceChildren((()=>{const e=document.createElement("div");e.classList.add("subject");const n=document.createElement("div");n.classList.add("card");const t=document.createElement("div");t.innerHTML="Title of Drink";const r=document.createElement("div");return r.innerHTML="This is a description of drink",n.appendChild(t),n.appendChild(r),e.appendChild(n),e})())})()})();