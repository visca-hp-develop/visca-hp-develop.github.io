var ViscaColorPicker=(()=>{var A=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var me=Object.prototype.hasOwnProperty;var fe=(e,t)=>{for(var o in t)A(e,o,{get:t[o],enumerable:!0})},he=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ue(t))!me.call(e,i)&&i!==o&&A(e,i,{get:()=>t[i],enumerable:!(r=de(t,i))||r.enumerable});return e};var ge=e=>he(A({},"__esModule",{value:!0}),e);var Oe={};fe(Oe,{init:()=>Me});var M=e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,"0"),O=(e,t,o)=>`#${M(e)}${M(t)}${M(o)}`;function S(e){if(typeof e!="string")return null;let t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let o=t[1].toLowerCase();return o.length===3?`#${[...o].map(r=>r+r).join("")}`:`#${o}`}var G=e=>e===void 0?1:e.endsWith("%")?parseFloat(e)/100:parseFloat(e),$="(-?[\\d.]+(?:e[-+]?\\d+)?%?)",H="\\s*[,\\s]\\s*",xe=new RegExp(`^rgba?\\(\\s*${$}${H}${$}${H}${$}(?:\\s*[,/]\\s*${$})?\\s*\\)$`,"i"),be=new RegExp(`^color\\(\\s*srgb\\s+${$}\\s+${$}\\s+${$}(?:\\s*/\\s*${$})?\\s*\\)$`,"i");function ye(e){let t=String(e).trim(),o=/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():null;if(o)return o;let r=xe.exec(t);if(r){if(G(r[4])<1)return null;let n=s=>s.endsWith("%")?parseFloat(s)/100*255:parseFloat(s);return O(n(r[1]),n(r[2]),n(r[3]))}let i=be.exec(t);if(i){if(G(i[4])<1)return null;let n=s=>(s.endsWith("%")?parseFloat(s)/100:parseFloat(s))*255;return O(n(i[1]),n(i[2]),n(i[3]))}}function ve(e,t){let o=e.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!o)return null;o.canvas.width=1,o.canvas.height=1,o.fillStyle=t,o.fillRect(0,0,1,1);let[r,i,n,s]=o.getImageData(0,0,1,1).data;return s===255?O(r,i,n):null}function W(e){return t=>{let o=e.documentElement,r=e.defaultView;if(!r.getComputedStyle(o).getPropertyValue(t).trim())return null;let i=e.createElement("span"),n=e.createElement("span");i.style.setProperty("display","none","important"),n.style.setProperty("color",`var(${t})`),i.append(n),o.append(i);try{i.style.color="rgb(1, 2, 3)";let s=r.getComputedStyle(n).color;i.style.color="rgb(4, 5, 6)";let l=r.getComputedStyle(n).color;if(s!==l)return null;let c=ye(s);return c===void 0?ve(e,s):c}catch{return null}finally{i.remove()}}}var _="16px",V=["left","bottom"],we=/^(0|-?(\d+|\d*\.\d+)(px|rem|em|%|vw|vh|svh|dvh|lvh))$/,I=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),$e=e=>typeof e=="number"&&Number.isFinite(e)?`${e}px`:typeof e=="string"&&we.test(e.trim())?e.trim():null;function B(e,t,o){let r={};for(let i of V){if(e[i]===void 0)continue;let n=$e(e[i]);n?r[i]=n:o.push(`${t}.${i} \u306B\u306F\u6570\u5024\uFF08px\uFF09\u307E\u305F\u306F "5rem" \u306E\u3088\u3046\u306A CSS \u306E\u9577\u3055\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`)}return r}function X(e,t){let o={left:_,bottom:_,breakpoints:[]};if(e===void 0)return o;if(!I(e))return t.push("placement \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),o;if(Object.assign(o,B(e,"placement",t)),e.breakpoints!==void 0)if(!I(e.breakpoints))t.push("placement.breakpoints \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044");else{for(let[r,i]of Object.entries(e.breakpoints)){let n=`placement.breakpoints[${r}]`;if(!/^[1-9]\d*$/.test(r)){t.push(`${n} \u306E\u30AD\u30FC\u306B\u306F\u753B\u9762\u5E45\uFF08\u6B63\u306E\u6574\u6570\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);continue}if(!I(i)){t.push(`${n} \u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);continue}o.breakpoints.push({maxWidth:Number(r),...B(i,n,t)})}o.breakpoints.sort((r,i)=>i.maxWidth-r.maxWidth)}return o}function Y(e,t){let o=r=>V.filter(i=>r[i]).map(i=>`${i}: ${r[i]};`).join(" ");return[`${t} { ${o(e)} }`,...e.breakpoints.map(r=>`@media (width <= ${r.maxWidth}px) { ${t} { ${o(r)} } }`)].join(`
`)}var J=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),U=e=>typeof e=="string"&&e.trim()!=="";function q(e){let t=[];if(!J(e))return{errors:["\u5F15\u6570\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"],config:null};if(U(e.id)||t.push("id \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),!Array.isArray(e.colors)||e.colors.length===0)return t.push("colors \u306B 1 \u4EF6\u4EE5\u4E0A\u306E\u914D\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),{errors:t,config:null};let o=new Set,r=e.colors.map((n,s)=>{let l=`colors[${s}]`;if(!J(n))return t.push(`${l} \u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`),null;typeof n.var!="string"||!/^--.+/.test(n.var)?t.push(`${l}.var \u306B "--" \u3067\u59CB\u307E\u308B CSS \u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`):o.has(n.var)?t.push(`${l}.var "${n.var}" \u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059`):o.add(n.var),U(n.label)||t.push(`${l}.label \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);let c=null;return n.default!==void 0&&(c=S(n.default),(!c||!n.default.trim().startsWith("#"))&&t.push(`${l}.default \u306F "#rrggbb" \u307E\u305F\u306F "#rgb" \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`)),{var:n.var,label:n.label,default:c}}),i=X(e.placement,t);return t.length>0?{errors:t,config:null}:{errors:t,config:{id:e.id,colors:r,placement:i}}}function P(e,t,o){o?e.style.setProperty(t,o):e.style.removeProperty(t)}function K(e,t,o){for(let r of t)P(e,r,o[r]??null)}function Q(e,t,o){let r=t.map(({var:i})=>[i,e.style.getPropertyValue(i),e.style.getPropertyPriority(i)]);for(let[i]of r)e.style.removeProperty(i);try{let i={};for(let n of t){if(n.default){i[n.var]=n.default;continue}try{i[n.var]=o(n.var)??null}catch{i[n.var]=null}}return i}finally{for(let[i,n,s]of r)n&&e.style.setProperty(i,n,s)}}function Ee(e,t,o){let r=Math.max(8,o.width-t.width-8),i=Math.max(8,o.height-t.height-8);return{left:Math.round(Math.min(Math.max(e.left,8),r)),bottom:Math.round(Math.min(Math.max(e.bottom,8),i))}}function N(e,t){let o=t.getBoundingClientRect(),r=e.getComputedStyle(t),i=e.document.documentElement.clientWidth||e.innerWidth,n=e.document.documentElement.clientHeight||e.innerHeight,s=Number.isFinite(parseFloat(r.left))?parseFloat(r.left):o.left,l=Number.isFinite(parseFloat(r.bottom))?parseFloat(r.bottom):n-o.bottom;return{rect:o,position:{left:s,bottom:l},viewport:{width:i,height:o.bottom+l}}}function Z({win:e,panel:t,handles:o,position:r,onMove:i}){let n=r,s=c=>{let{rect:p,viewport:d}=N(e,t),h=Ee(c,p,d);return t.style.left=`${h.left}px`,t.style.bottom=`${h.bottom}px`,h},l=()=>{n&&s(n)};for(let c of o){let p=null,d=!1,h=u=>{if(u.pointerId!==p.id)return;let g=u.clientX-p.pointerX,b=u.clientY-p.pointerY;if(!d){if(Math.hypot(g,b)<4)return;d=!0,t.classList.add("is-dragging")}u.preventDefault(),s({left:p.left+g,bottom:p.bottom-b})},x=u=>{if(u.pointerId!==p.id||(p=null,e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",x),e.removeEventListener("pointercancel",x),!d))return;d=!1,t.classList.remove("is-dragging");let{position:g}=N(e,t);n={left:Math.round(g.left),bottom:Math.round(g.bottom)},i(n);let b=a=>{a.preventDefault(),a.stopImmediatePropagation()};c.addEventListener("click",b,{capture:!0,once:!0}),e.setTimeout(()=>c.removeEventListener("click",b,{capture:!0}),0)};c.addEventListener("pointerdown",u=>{if(u.button!==0||p)return;let{position:g}=N(e,t);p={pointerX:u.clientX,pointerY:u.clientY,...g,id:u.pointerId},e.addEventListener("pointermove",h),e.addEventListener("pointerup",x),e.addEventListener("pointercancel",x)})}return e.addEventListener("resize",l),{refresh:l}}var j=200,Se="cubic-bezier(0.2, 0, 0, 1)";function F(e){let{rect:t,position:o}=N(e.ownerDocument.defaultView,e);return{rect:t,position:o,radius:ke(e,t)}}function ee({win:e,panel:t,from:o,fadeIn:r}){if(typeof t.animate!="function"||e.matchMedia?.("(prefers-reduced-motion: reduce)").matches||e.document.visibilityState==="hidden")return;let i=F(t),n=t.style.left!=="",s=({rect:l,position:c,radius:p})=>({width:`${l.width}px`,height:`${l.height}px`,borderRadius:`${p}px`,...n?{left:`${c.left}px`,bottom:`${c.bottom}px`}:{}});t.animate([s(o),s(i)],{duration:j,easing:Se}),r.animate([{opacity:0},{opacity:1}],{duration:j*.75,delay:j*.4,easing:"ease-out",fill:"backwards"})}function ke(e,t){let o=parseFloat(e.ownerDocument.defaultView.getComputedStyle(e).borderTopLeftRadius)||0;return Math.min(o,t.width/2,t.height/2)}var Le="visca-color-picker",C="\u30C6\u30FC\u30DE\u30AB\u30E9\u30FC\u5909\u66F4",te="http://www.w3.org/2000/svg";var Ne=["M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","M3 3v5h5"],ze=`
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
`,f=(e,t,o={},r=[])=>{let i=e.createElement(t);for(let[n,s]of Object.entries(o))n==="className"?i.className=s:n==="text"?i.textContent=s:i.setAttribute(n,s);return i.append(...r),i};function ne(e,{colors:t,onColor:o,onReset:r,onResetColor:i,onMinimize:n,placement:s}){let l=e.createElement(Le);l.setAttribute("style","all: initial");let c=l.attachShadow({mode:"open"}),p=t.map(()=>f(e,"span",{className:"chip"})),d=t.map(m=>{let k=f(e,"input",{type:"color","aria-label":m.label}),y=f(e,"input",{type:"text",maxlength:"7",spellcheck:"false",autocomplete:"off",inputmode:"text","aria-label":`${m.label}\uFF0816 \u9032\u6570\uFF09`});k.addEventListener("input",()=>o(m.var,k.value.toLowerCase())),y.addEventListener("input",()=>{let L=S(y.value);L&&o(m.var,L)}),y.addEventListener("change",()=>{v&&(y.value=v.values[m.var])});let w=f(e,"div",{className:"row"},[f(e,"span",{className:"label",text:m.label,title:m.label}),k,y]),E=null;return t.length>1&&(E=f(e,"button",{type:"button",className:"reset-color","data-action":"reset-color",title:`${m.label}\u3092\u30EA\u30BB\u30C3\u30C8`,"aria-label":`${m.label}\u3092\u30EA\u30BB\u30C3\u30C8`},[oe(e)]),E.addEventListener("click",()=>i(m.var)),w.classList.add("has-reset"),w.append(E)),{color:m,colorInput:k,textInput:y,resetButton:E,row:w}}),h=f(e,"button",{type:"button",className:"reset-all","data-action":"reset"},[oe(e),f(e,"span",{text:t.length>1?"\u3059\u3079\u3066\u30EA\u30BB\u30C3\u30C8":"\u30EA\u30BB\u30C3\u30C8"})]);h.addEventListener("click",r);let x=f(e,"button",{type:"button",className:"minimize","data-action":"minimize",title:"\u6700\u5C0F\u5316","aria-label":"\u6700\u5C0F\u5316",text:"\u2212"});x.addEventListener("click",()=>n(!0));let u=f(e,"button",{type:"button",className:"restore","data-action":"restore",title:C,"aria-label":`${C}\u3092\u958B\u304F`},p);u.addEventListener("click",()=>n(!1));let g=f(e,"div",{className:"head",title:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5"},[f(e,"span",{className:"title",text:C}),x]),b=f(e,"div",{className:"content"},[g,f(e,"div",{className:"body"},[...d.map(m=>m.row),f(e,"div",{className:"actions"},[h])])]),a=f(e,"div",{className:"panel",role:"region","aria-label":C},[u,b]);c.append(f(e,"style",{text:`${ze}
${Y(s,".panel")}`}),a);let v=null;function ce(m){d.forEach(({color:w,colorInput:E,textInput:L,resetButton:D},pe)=>{let R=m.values[w.var];E.value=R,c.activeElement!==L&&(L.value=R),p[pe].style.backgroundColor=R,D&&(D.disabled=!m.changed.includes(w.var))}),h.disabled=m.changed.length===0;let y=v!==null&&a.classList.contains("is-minimized")!==m.minimized&&a.isConnected?F(a):null;y&&a.getAnimations?.().forEach(w=>w.cancel()),a.classList.toggle("is-minimized",m.minimized),v=m,y&&queueMicrotask(()=>ee({win:e.defaultView,panel:a,from:y,fadeIn:m.minimized?u:b}))}return{host:l,panel:a,handles:[g,u],render:ce}}function oe(e){let t=e.createElementNS(te,"svg"),o={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"};for(let[r,i]of Object.entries(o))t.setAttribute(r,i);for(let r of Ne){let i=e.createElementNS(te,"path");i.setAttribute("d",r),t.append(i)}return t}var Ce="visca-color-picker:",T=()=>({colors:{},minimized:!0,position:null}),Re=e=>typeof e=="object"&&e!==null&&Number.isFinite(e.left)&&Number.isFinite(e.bottom);function re(e){try{return e.sessionStorage??null}catch{return null}}function ie(e,t){let o=`${Ce}${e}`;return{load:()=>{try{let n=t()?.getItem(o);if(!n)return T();let s=JSON.parse(n);if(typeof s!="object"||s===null||Array.isArray(s))return T();let l={};if(typeof s.colors=="object"&&s.colors!==null)for(let[p,d]of Object.entries(s.colors)){let h=S(d);p.startsWith("--")&&h&&(l[p]=h)}let c=Re(s.position)?{left:s.position.left,bottom:s.position.bottom}:null;return{colors:l,minimized:s.minimized!==!1,position:c}}catch{return T()}},save:n=>{try{let s=t();if(!s)return;let l=n.position??null;Object.keys(n.colors).length===0&&n.minimized&&!l?s.removeItem(o):s.setItem(o,JSON.stringify({colors:n.colors,minimized:n.minimized,position:l}))}catch{}}}}var z="[ViscaColorPicker]",se=Symbol.for("visca-color-picker.initialized"),Ae=(e,t)=>{e.readyState==="loading"?e.addEventListener("DOMContentLoaded",t,{once:!0}):t()};function ae(e,t){try{let{win:o,doc:r}=t;if(o[se]){console.warn(`${z} \u3059\u3067\u306B\u521D\u671F\u5316\u6E08\u307F\u306E\u305F\u3081\u30012 \u56DE\u76EE\u4EE5\u964D\u306E init() \u306F\u7121\u8996\u3057\u307E\u3059`);return}let{errors:i,config:n}=q(e);if(!n){console.error(`${z} \u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u306A\u3044\u305F\u3081\u8868\u793A\u3057\u307E\u305B\u3093
${i.map(d=>`- ${d}`).join(`
`)}`);return}o[se]=!0;let s=r.documentElement,l=n.colors.map(d=>d.var),c=ie(n.id,t.getStorage),p=c.load();p.colors=Object.fromEntries(Object.entries(p.colors).filter(([d])=>l.includes(d))),K(s,l,p.colors),Ae(r,()=>le(n,t,c,p,!0))}catch(o){console.error(`${z} \u521D\u671F\u5316\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,o)}}function le(e,t,o,r,i){try{let{win:n,doc:s}=t,l=s.documentElement,c=Q(l,e.colors,t.resolveColor),p=e.colors.filter(a=>!c[a.var]);if(p.length>0&&i&&s.readyState!=="complete"){n.addEventListener("load",()=>le(e,t,o,r,!1),{once:!0});return}for(let{var:a}of p)console.warn(`${z} ${a} \u306E\u5024\u3092\u8272\u3068\u3057\u3066\u89E3\u91C8\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u30D1\u30CD\u30EB\u306B\u8868\u793A\u3057\u307E\u305B\u3093`);let d=e.colors.filter(a=>c[a.var]);if(d.length===0)return;let h=a=>r.colors[a]??c[a],x=(a,v)=>{v===c[a]?delete r.colors[a]:r.colors[a]=v,P(l,a,r.colors[a]??null)},u=()=>{o.save(r),g.render({values:Object.fromEntries(d.map(a=>[a.var,h(a.var)])),changed:Object.keys(r.colors),minimized:r.minimized}),b?.refresh()};for(let{var:a}of d)r.colors[a]&&x(a,r.colors[a]);let g=ne(s,{colors:d,placement:e.placement,onColor:(a,v)=>{x(a,v),u()},onReset:()=>{for(let{var:a}of d)x(a,c[a]);u()},onResetColor:a=>{x(a,c[a]),u()},onMinimize:a=>{r.minimized=a,u()}}),b=null;u(),(s.body??l).append(g.host),b=Z({win:n,panel:g.panel,handles:g.handles,position:r.position,onMove:a=>{r.position=a,o.save(r)}}),b.refresh()}catch(n){console.error(`${z} \u30D1\u30CD\u30EB\u306E\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,n)}}function Me(e){ae(e,{win:window,doc:document,getStorage:()=>re(window),resolveColor:W(document)})}return ge(Oe);})();
/*! Lucide "rotate-ccw" icon | ISC License | Copyright (c) Lucide Icons and Contributors | https://lucide.dev/license */
