var ViscaColorPicker=(()=>{var z=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var de=Object.prototype.hasOwnProperty;var ue=(e,t)=>{for(var r in t)z(e,r,{get:t[r],enumerable:!0})},me=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of pe(t))!de.call(e,o)&&o!==r&&z(e,o,{get:()=>t[o],enumerable:!(i=ce(t,o))||i.enumerable});return e};var fe=e=>me(z({},"__esModule",{value:!0}),e);var Ae={};ue(Ae,{init:()=>ze});var A=e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,"0"),O=(e,t,r)=>`#${A(e)}${A(t)}${A(r)}`;function S(e){if(typeof e!="string")return null;let t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let r=t[1].toLowerCase();return r.length===3?`#${[...r].map(i=>i+i).join("")}`:`#${r}`}var D=e=>e===void 0?1:e.endsWith("%")?parseFloat(e)/100:parseFloat(e),$="(-?[\\d.]+(?:e[-+]?\\d+)?%?)",F="\\s*[,\\s]\\s*",he=new RegExp(`^rgba?\\(\\s*${$}${F}${$}${F}${$}(?:\\s*[,/]\\s*${$})?\\s*\\)$`,"i"),ge=new RegExp(`^color\\(\\s*srgb\\s+${$}\\s+${$}\\s+${$}(?:\\s*/\\s*${$})?\\s*\\)$`,"i");function xe(e){let t=String(e).trim(),r=/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():null;if(r)return r;let i=he.exec(t);if(i){if(D(i[4])<1)return null;let n=s=>s.endsWith("%")?parseFloat(s)/100*255:parseFloat(s);return O(n(i[1]),n(i[2]),n(i[3]))}let o=ge.exec(t);if(o){if(D(o[4])<1)return null;let n=s=>(s.endsWith("%")?parseFloat(s)/100:parseFloat(s))*255;return O(n(o[1]),n(o[2]),n(o[3]))}}function be(e,t){let r=e.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!r)return null;r.canvas.width=1,r.canvas.height=1,r.fillStyle=t,r.fillRect(0,0,1,1);let[i,o,n,s]=r.getImageData(0,0,1,1).data;return s===255?O(i,o,n):null}function G(e){return t=>{let r=e.documentElement,i=e.defaultView;if(!i.getComputedStyle(r).getPropertyValue(t).trim())return null;let o=e.createElement("span"),n=e.createElement("span");o.style.setProperty("display","none","important"),n.style.setProperty("color",`var(${t})`),o.append(n),r.append(o);try{o.style.color="rgb(1, 2, 3)";let s=i.getComputedStyle(n).color;o.style.color="rgb(4, 5, 6)";let l=i.getComputedStyle(n).color;if(s!==l)return null;let p=xe(s);return p===void 0?be(e,s):p}catch{return null}finally{o.remove()}}}var H="16px",B=["left","bottom"],ye=/^(0|-?(\d+|\d*\.\d+)(px|rem|em|%|vw|vh|svh|dvh|lvh))$/,M=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),ve=e=>typeof e=="number"&&Number.isFinite(e)?`${e}px`:typeof e=="string"&&ye.test(e.trim())?e.trim():null;function W(e,t,r){let i={};for(let o of B){if(e[o]===void 0)continue;let n=ve(e[o]);n?i[o]=n:r.push(`${t}.${o} \u306B\u306F\u6570\u5024\uFF08px\uFF09\u307E\u305F\u306F "5rem" \u306E\u3088\u3046\u306A CSS \u306E\u9577\u3055\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`)}return i}function _(e,t){let r={left:H,bottom:H,breakpoints:[]};if(e===void 0)return r;if(!M(e))return t.push("placement \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),r;if(Object.assign(r,W(e,"placement",t)),e.breakpoints!==void 0)if(!M(e.breakpoints))t.push("placement.breakpoints \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044");else{for(let[i,o]of Object.entries(e.breakpoints)){let n=`placement.breakpoints[${i}]`;if(!/^[1-9]\d*$/.test(i)){t.push(`${n} \u306E\u30AD\u30FC\u306B\u306F\u753B\u9762\u5E45\uFF08\u6B63\u306E\u6574\u6570\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);continue}if(!M(o)){t.push(`${n} \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);continue}r.breakpoints.push({maxWidth:Number(i),...W(o,n,t)})}r.breakpoints.sort((i,o)=>o.maxWidth-i.maxWidth)}return r}function V(e,t){let r=i=>B.filter(o=>i[o]).map(o=>`${o}: ${i[o]};`).join(" ");return[`${t} { ${r(e)} }`,...e.breakpoints.map(i=>`@media (width <= ${i.maxWidth}px) { ${t} { ${r(i)} } }`)].join(`
`)}var X=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),U=e=>typeof e=="string"&&e.trim()!=="";function Y(e){let t=[];if(!X(e))return{errors:["\u5F15\u6570\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"],config:null};if(U(e.id)||t.push("id \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),!Array.isArray(e.colors)||e.colors.length===0)return t.push("colors \u306B 1 \u4EF6\u4EE5\u4E0A\u306E\u914D\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),{errors:t,config:null};let r=new Set,i=e.colors.map((n,s)=>{let l=`colors[${s}]`;if(!X(n))return t.push(`${l} \u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`),null;typeof n.var!="string"||!/^--.+/.test(n.var)?t.push(`${l}.var \u306B "--" \u3067\u59CB\u307E\u308B CSS \u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`):r.has(n.var)?t.push(`${l}.var "${n.var}" \u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059`):r.add(n.var),U(n.label)||t.push(`${l}.label \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);let p=null;return n.default!==void 0&&(p=S(n.default),(!p||!n.default.trim().startsWith("#"))&&t.push(`${l}.default \u306F "#rrggbb" \u307E\u305F\u306F "#rgb" \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`)),{var:n.var,label:n.label,default:p}}),o=_(e.placement,t);return t.length>0?{errors:t,config:null}:{errors:t,config:{id:e.id,colors:i,placement:o}}}function I(e,t,r){r?e.style.setProperty(t,r):e.style.removeProperty(t)}function J(e,t,r){for(let i of t)I(e,i,r[i]??null)}function q(e,t,r){let i=t.map(({var:o})=>[o,e.style.getPropertyValue(o),e.style.getPropertyPriority(o)]);for(let[o]of i)e.style.removeProperty(o);try{let o={};for(let n of t){if(n.default){o[n.var]=n.default;continue}try{o[n.var]=r(n.var)??null}catch{o[n.var]=null}}return o}finally{for(let[o,n,s]of i)n&&e.style.setProperty(o,n,s)}}function we(e,t,r){let i=Math.max(8,r.width-t.width-8),o=Math.max(8,r.height-t.height-8);return{x:Math.round(Math.min(Math.max(e.x,8),i)),y:Math.round(Math.min(Math.max(e.y,8),o))}}function K({win:e,panel:t,handles:r,position:i,onMove:o}){let n=i,s=()=>({width:e.document.documentElement.clientWidth||e.innerWidth,height:e.document.documentElement.clientHeight||e.innerHeight}),l=u=>{let c=t.getBoundingClientRect(),{x:h,y:b}=we(u,c,s());return t.style.left=`${h}px`,t.style.top=`${b}px`,t.style.bottom="auto",{x:h,y:b}},p=()=>{n&&l(n)};for(let u of r){let c=null,h=!1,b=m=>{if(m.pointerId!==c.id)return;let x=m.clientX-c.pointerX,a=m.clientY-c.pointerY;if(!h){if(Math.hypot(x,a)<4)return;h=!0,t.classList.add("is-dragging")}m.preventDefault(),l({x:c.x+x,y:c.y+a})},g=m=>{if(m.pointerId!==c.id||(c=null,e.removeEventListener("pointermove",b),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",g),!h))return;h=!1,t.classList.remove("is-dragging");let x=t.getBoundingClientRect();n={x:Math.round(x.left),y:Math.round(x.top)},o(n);let a=y=>{y.preventDefault(),y.stopImmediatePropagation()};u.addEventListener("click",a,{capture:!0,once:!0}),e.setTimeout(()=>u.removeEventListener("click",a,{capture:!0}),0)};u.addEventListener("pointerdown",m=>{if(m.button!==0||c)return;let x=t.getBoundingClientRect();c={pointerX:m.clientX,pointerY:m.clientY,x:x.left,y:x.top,id:m.pointerId},e.addEventListener("pointermove",b),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g)})}return e.addEventListener("resize",p),{refresh:p}}var $e="cubic-bezier(0.2, 0, 0, 1)";function P(e){let t=e.getBoundingClientRect();return{rect:t,radius:Ee(e,t)}}function Q({win:e,panel:t,from:r,fadeIn:i}){if(typeof t.animate!="function"||e.matchMedia?.("(prefers-reduced-motion: reduce)").matches||e.document.visibilityState==="hidden")return;let o=P(t),n=t.style.top!=="",s=({rect:l,radius:p})=>({width:`${l.width}px`,height:`${l.height}px`,borderRadius:`${p}px`,...n?{left:`${l.left}px`,top:`${l.top}px`}:{}});t.animate([s(r),s(o)],{duration:200,easing:$e}),i.animate([{opacity:0},{opacity:1}],{duration:200*.75,delay:200*.4,easing:"ease-out",fill:"backwards"})}function Ee(e,t){let r=parseFloat(e.ownerDocument.defaultView.getComputedStyle(e).borderTopLeftRadius)||0;return Math.min(r,t.width/2,t.height/2)}var Se="visca-color-picker",C="\u30C6\u30FC\u30DE\u30AB\u30E9\u30FC\u5909\u66F4",Z="http://www.w3.org/2000/svg";var ke=["M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","M3 3v5h5"],Re=`
  :host { all: initial; }
  *, *::before, *::after { box-sizing: border-box; }
  /* \u521D\u671F\u4F4D\u7F6E\uFF08left / bottom\uFF09\u306F init() \u306E placement \u304B\u3089\u4F5C\u308B */
  .panel {
    position: fixed;
    z-index: 2147483647;
    /* \u4F4D\u7F6E\u306B\u3088\u3063\u3066\u5E45\u304C\u7E2E\u307E\u306A\u3044\u3088\u3046\u306B\u3059\u308B\uFF08\u753B\u9762\u5185\u306B\u53CE\u3081\u308B\u4F4D\u7F6E\u306E\u8A08\u7B97\u3067\u6B63\u3057\u3044\u5927\u304D\u3055\u3092\u6E2C\u308B\u305F\u3081\uFF09 */
    width: max-content;
    max-width: calc(100vw - 16px);
    font: 13px/1.4 system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif;
    color: #222;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgb(0 0 0 / 25%);
    /* \u958B\u9589\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u4E2D\u306B\u4E2D\u8EAB\u304C\u306F\u307F\u51FA\u3055\u306A\u3044\u3088\u3046\u306B\u3059\u308B */
    overflow: hidden;
  }
  button { font: inherit; color: inherit; cursor: pointer; }
  .head {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 8px 12px;
    cursor: grab;
    touch-action: none;
    user-select: none;
  }
  .title { font-weight: bold; white-space: nowrap; }
  .minimize {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    padding: 0;
    font-size: 18px;
    line-height: 1;
    background: none;
    border: 0;
    border-radius: 6px;
  }
  .minimize:hover { background: #eee; }
  .body { display: grid; gap: 8px; padding: 0 12px 12px; }
  .row { display: grid; grid-template-columns: minmax(4em, auto) 32px 92px; gap: 8px; align-items: center; }
  .row.has-reset { grid-template-columns: minmax(4em, auto) 32px 92px 28px; }
  .label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  /* \u8272\u7389\uFF08\u6700\u5C0F\u5316\u6642\u306E\u30C1\u30C3\u30D7\u3068\u540C\u3058\u6B63\u5186\uFF09 */
  input[type="color"] {
    width: 32px;
    height: 32px;
    padding: 0;
    cursor: pointer;
    background: none;
    border: 1px solid rgb(0 0 0 / 15%);
    border-radius: 50%;
    appearance: none;
  }
  input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
  input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 50%; }
  input[type="color"]::-moz-color-swatch { border: 0; border-radius: 50%; }
  input[type="text"] {
    width: 100%;
    height: 32px;
    padding: 4px 6px;
    font: 13px ui-monospace, SFMono-Regular, Menlo, monospace;
    color: #222;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  /* \u8272\u3054\u3068\u306E\u30EA\u30BB\u30C3\u30C8\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8272\u306E\u3068\u304D\u306F\u62BC\u305B\u306A\u3044\uFF09 */
  .reset-color {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    padding: 0;
    color: #555;
    background: none;
    border: 0;
    border-radius: 6px;
  }
  .reset-color:hover:not(:disabled) { color: #222; background: #eee; }
  .reset-color:disabled { cursor: default; opacity: 0.3; }
  .reset-color svg { width: 16px; height: 16px; }
  /* \u4E00\u62EC\u30EA\u30BB\u30C3\u30C8\uFF08\u8272\u306E\u884C\u3068\u533A\u5207\u308A\u3001\u53F3\u5BC4\u305B\u306E\u63A7\u3048\u3081\u306A\u30C6\u30AD\u30B9\u30C8\u30DC\u30BF\u30F3\uFF09 */
  .actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 8px;
    margin-top: 2px;
    border-top: 1px solid #eee;
  }
  .reset-all {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    min-height: 28px;
    padding: 4px 10px;
    font-size: 12px;
    color: #555;
    white-space: nowrap;
    background: none;
    border: 0;
    border-radius: 999px;
  }
  .reset-all:hover:not(:disabled) { color: #222; background: #eee; }
  .reset-all:disabled { cursor: default; opacity: 0.4; }
  .reset-all svg { width: 14px; height: 14px; }
  .restore {
    display: none;
    gap: 6px;
    align-items: center;
    /* \u4E0A\u4E0B\u5DE6\u53F3\u306E\u4F59\u767D\u3092\u305D\u308D\u3048\u3001\u8272\u304C 1 \u3064\u306E\u3068\u304D\u306F\u6B63\u5186\u306B\u3059\u308B */
    padding: 10px;
    background: none;
    border: 0;
    border-radius: 999px;
    touch-action: none;
    user-select: none;
  }
  .panel.is-dragging, .panel.is-dragging * { cursor: grabbing; }
  .chip { width: 18px; height: 18px; border: 1px solid rgb(0 0 0 / 15%); border-radius: 50%; }
  .panel.is-minimized { border-radius: 999px; }
  .panel.is-minimized .content { display: none; }
  .panel.is-minimized .restore { display: flex; }
  :focus-visible { outline: 2px solid #1a73e8; outline-offset: 1px; }
  /* \u30BF\u30C3\u30C1\u64CD\u4F5C\u306E\u7AEF\u672B\u3067\u306F\u64CD\u4F5C\u3057\u3084\u3059\u3044\u5927\u304D\u3055\u306B\u3057\u3001iOS \u306E\u5165\u529B\u6642\u30BA\u30FC\u30E0\u3092\u9632\u3050 */
  @media (pointer: coarse) {
    .row { grid-template-columns: minmax(4em, auto) 40px 104px; }
    .row.has-reset { grid-template-columns: minmax(4em, auto) 40px 104px 40px; }
    .reset-color { width: 40px; height: 40px; }
    input[type="color"] { width: 40px; height: 40px; }
    input[type="text"], .reset-all, .minimize { min-height: 40px; }
    .minimize { width: 40px; }
    input[type="text"] { font-size: 16px; }
    .chip { width: 22px; height: 22px; }
  }
`,f=(e,t,r={},i=[])=>{let o=e.createElement(t);for(let[n,s]of Object.entries(r))n==="className"?o.className=s:n==="text"?o.textContent=s:o.setAttribute(n,s);return o.append(...i),o};function te(e,{colors:t,onColor:r,onReset:i,onResetColor:o,onMinimize:n,placement:s}){let l=e.createElement(Se);l.setAttribute("style","all: initial");let p=l.attachShadow({mode:"open"}),u=t.map(()=>f(e,"span",{className:"chip"})),c=t.map(d=>{let k=f(e,"input",{type:"color","aria-label":d.label}),v=f(e,"input",{type:"text",maxlength:"7",spellcheck:"false",autocomplete:"off",inputmode:"text","aria-label":`${d.label}\uFF0816 \u9032\u6570\uFF09`});k.addEventListener("input",()=>r(d.var,k.value.toLowerCase())),v.addEventListener("input",()=>{let R=S(v.value);R&&r(d.var,R)}),v.addEventListener("change",()=>{y&&(v.value=y.values[d.var])});let w=f(e,"div",{className:"row"},[f(e,"span",{className:"label",text:d.label,title:d.label}),k,v]),E=null;return t.length>1&&(E=f(e,"button",{type:"button",className:"reset-color","data-action":"reset-color",title:`${d.label}\u3092\u30EA\u30BB\u30C3\u30C8`,"aria-label":`${d.label}\u3092\u30EA\u30BB\u30C3\u30C8`},[ee(e)]),E.addEventListener("click",()=>o(d.var)),w.classList.add("has-reset"),w.append(E)),{color:d,colorInput:k,textInput:v,resetButton:E,row:w}}),h=f(e,"button",{type:"button",className:"reset-all","data-action":"reset"},[ee(e),f(e,"span",{text:t.length>1?"\u3059\u3079\u3066\u30EA\u30BB\u30C3\u30C8":"\u30EA\u30BB\u30C3\u30C8"})]);h.addEventListener("click",i);let b=f(e,"button",{type:"button",className:"minimize","data-action":"minimize",title:"\u6700\u5C0F\u5316","aria-label":"\u6700\u5C0F\u5316",text:"\u2212"});b.addEventListener("click",()=>n(!0));let g=f(e,"button",{type:"button",className:"restore","data-action":"restore",title:C,"aria-label":`${C}\u3092\u958B\u304F`},u);g.addEventListener("click",()=>n(!1));let m=f(e,"div",{className:"head",title:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5"},[f(e,"span",{className:"title",text:C}),b]),x=f(e,"div",{className:"content"},[m,f(e,"div",{className:"body"},[...c.map(d=>d.row),f(e,"div",{className:"actions"},[h])])]),a=f(e,"div",{className:"panel",role:"region","aria-label":C},[g,x]);p.append(f(e,"style",{text:`${Re}
${V(s,".panel")}`}),a);let y=null;function ae(d){c.forEach(({color:w,colorInput:E,textInput:R,resetButton:T},le)=>{let L=d.values[w.var];E.value=L,p.activeElement!==R&&(R.value=L),u[le].style.backgroundColor=L,T&&(T.disabled=!d.changed.includes(w.var))}),h.disabled=d.changed.length===0;let v=y!==null&&a.classList.contains("is-minimized")!==d.minimized&&a.isConnected?P(a):null;v&&a.getAnimations?.().forEach(w=>w.cancel()),a.classList.toggle("is-minimized",d.minimized),y=d,v&&queueMicrotask(()=>Q({win:e.defaultView,panel:a,from:v,fadeIn:d.minimized?g:x}))}return{host:l,panel:a,handles:[m,g],render:ae}}function ee(e){let t=e.createElementNS(Z,"svg"),r={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"};for(let[i,o]of Object.entries(r))t.setAttribute(i,o);for(let i of ke){let o=e.createElementNS(Z,"path");o.setAttribute("d",i),t.append(o)}return t}var Ne="visca-color-picker:",j=()=>({colors:{},minimized:!0,position:null}),Ce=e=>typeof e=="object"&&e!==null&&Number.isFinite(e.x)&&Number.isFinite(e.y);function ne(e){try{return e.sessionStorage??null}catch{return null}}function re(e,t){let r=`${Ne}${e}`;return{load:()=>{try{let n=t()?.getItem(r);if(!n)return j();let s=JSON.parse(n);if(typeof s!="object"||s===null||Array.isArray(s))return j();let l={};if(typeof s.colors=="object"&&s.colors!==null)for(let[u,c]of Object.entries(s.colors)){let h=S(c);u.startsWith("--")&&h&&(l[u]=h)}let p=Ce(s.position)?{x:s.position.x,y:s.position.y}:null;return{colors:l,minimized:s.minimized!==!1,position:p}}catch{return j()}},save:n=>{try{let s=t();if(!s)return;let l=n.position??null;Object.keys(n.colors).length===0&&n.minimized&&!l?s.removeItem(r):s.setItem(r,JSON.stringify({colors:n.colors,minimized:n.minimized,position:l}))}catch{}}}}var N="[ViscaColorPicker]",oe=Symbol.for("visca-color-picker.initialized"),Le=(e,t)=>{e.readyState==="loading"?e.addEventListener("DOMContentLoaded",t,{once:!0}):t()};function ie(e,t){try{let{win:r,doc:i}=t;if(r[oe]){console.warn(`${N} \u3059\u3067\u306B\u521D\u671F\u5316\u6E08\u307F\u306E\u305F\u3081\u30012 \u56DE\u76EE\u4EE5\u964D\u306E init() \u306F\u7121\u8996\u3057\u307E\u3059`);return}let{errors:o,config:n}=Y(e);if(!n){console.error(`${N} \u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u306A\u3044\u305F\u3081\u8868\u793A\u3057\u307E\u305B\u3093
${o.map(c=>`- ${c}`).join(`
`)}`);return}r[oe]=!0;let s=i.documentElement,l=n.colors.map(c=>c.var),p=re(n.id,t.getStorage),u=p.load();u.colors=Object.fromEntries(Object.entries(u.colors).filter(([c])=>l.includes(c))),J(s,l,u.colors),Le(i,()=>se(n,t,p,u,!0))}catch(r){console.error(`${N} \u521D\u671F\u5316\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,r)}}function se(e,t,r,i,o){try{let{win:n,doc:s}=t,l=s.documentElement,p=q(l,e.colors,t.resolveColor),u=e.colors.filter(a=>!p[a.var]);if(u.length>0&&o&&s.readyState!=="complete"){n.addEventListener("load",()=>se(e,t,r,i,!1),{once:!0});return}for(let{var:a}of u)console.warn(`${N} ${a} \u306E\u5024\u3092\u8272\u3068\u3057\u3066\u89E3\u91C8\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u30D1\u30CD\u30EB\u306B\u8868\u793A\u3057\u307E\u305B\u3093`);let c=e.colors.filter(a=>p[a.var]);if(c.length===0)return;let h=a=>i.colors[a]??p[a],b=(a,y)=>{y===p[a]?delete i.colors[a]:i.colors[a]=y,I(l,a,i.colors[a]??null)},g=()=>{r.save(i),m.render({values:Object.fromEntries(c.map(a=>[a.var,h(a.var)])),changed:Object.keys(i.colors),minimized:i.minimized}),x?.refresh()};for(let{var:a}of c)i.colors[a]&&b(a,i.colors[a]);let m=te(s,{colors:c,placement:e.placement,onColor:(a,y)=>{b(a,y),g()},onReset:()=>{for(let{var:a}of c)b(a,p[a]);g()},onResetColor:a=>{b(a,p[a]),g()},onMinimize:a=>{i.minimized=a,g()}}),x=null;g(),(s.body??l).append(m.host),x=K({win:n,panel:m.panel,handles:m.handles,position:i.position,onMove:a=>{i.position=a,r.save(i)}}),x.refresh()}catch(n){console.error(`${N} \u30D1\u30CD\u30EB\u306E\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,n)}}function ze(e){ie(e,{win:window,doc:document,getStorage:()=>ne(window),resolveColor:G(document)})}return fe(Ae);})();
/*! Lucide "rotate-ccw" icon | ISC License | Copyright (c) Lucide Icons and Contributors | https://lucide.dev/license */
