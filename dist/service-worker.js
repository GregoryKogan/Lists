if(!self.define){let s,i={};const e=(e,n)=>(e=new URL(e+".js",n).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const o=s=>e(s,r),u={module:{uri:r},exports:t,require:o};i[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"lists"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/Lists/css/11.c4ceb4ce.css",revision:null},{url:"/Lists/css/241.bdce045a.css",revision:null},{url:"/Lists/css/33.5a8cc1de.css",revision:null},{url:"/Lists/css/527.4408d3d4.css",revision:null},{url:"/Lists/css/app.1c213052.css",revision:null},{url:"/Lists/css/chunk-vendors.7a67d796.css",revision:null},{url:"/Lists/fonts/materialdesignicons-webfont.27a0fd11.woff2",revision:null},{url:"/Lists/fonts/materialdesignicons-webfont.2f788fed.woff",revision:null},{url:"/Lists/fonts/materialdesignicons-webfont.325befe2.ttf",revision:null},{url:"/Lists/fonts/materialdesignicons-webfont.7df0a622.eot",revision:null},{url:"/Lists/img/logo.05d40773.svg",revision:null},{url:"/Lists/index.html",revision:"cadeb783d239da099763a82094947389"},{url:"/Lists/js/11.6388ec46.js",revision:null},{url:"/Lists/js/241.2733c802.js",revision:null},{url:"/Lists/js/307.7f02e11a.js",revision:null},{url:"/Lists/js/33.1715a57e.js",revision:null},{url:"/Lists/js/431.5664c705.js",revision:null},{url:"/Lists/js/527.318878b5.js",revision:null},{url:"/Lists/js/628.05120303.js",revision:null},{url:"/Lists/js/app.cebdf5ff.js",revision:null},{url:"/Lists/js/chunk-vendors.9c21920e.js",revision:null},{url:"/Lists/js/webfontloader.e52886ff.js",revision:null},{url:"/Lists/manifest.json",revision:"4cd1d0ce3b02523e5d27fc0d995336ba"},{url:"/Lists/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
