var ViscaColorPicker=(()=>{var C=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var ee=(e,t)=>{for(var n in t)C(e,n,{get:t[n],enumerable:!0})},te=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Q(t))!Z.call(e,r)&&r!==n&&C(e,r,{get:()=>t[r],enumerable:!(i=K(t,r))||i.enumerable});return e};var re=e=>te(C({},"__esModule",{value:!0}),e);var ge={};ee(ge,{init:()=>fe});var N=e=>Math.round(Math.min(255,Math.max(0,e))).toString(16).padStart(2,"0"),M=(e,t,n)=>`#${N(e)}${N(t)}${N(n)}`;function S(e){if(typeof e!="string")return null;let t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let n=t[1].toLowerCase();return n.length===3?`#${[...n].map(i=>i+i).join("")}`:`#${n}`}var P=e=>e===void 0?1:e.endsWith("%")?parseFloat(e)/100:parseFloat(e),v="(-?[\\d.]+(?:e[-+]?\\d+)?%?)",I="\\s*[,\\s]\\s*",ne=new RegExp(`^rgba?\\(\\s*${v}${I}${v}${I}${v}(?:\\s*[,/]\\s*${v})?\\s*\\)$`,"i"),oe=new RegExp(`^color\\(\\s*srgb\\s+${v}\\s+${v}\\s+${v}(?:\\s*/\\s*${v})?\\s*\\)$`,"i");function ie(e){let t=String(e).trim(),n=/^#[0-9a-f]{6}$/i.test(t)?t.toLowerCase():null;if(n)return n;let i=ne.exec(t);if(i){if(P(i[4])<1)return null;let o=s=>s.endsWith("%")?parseFloat(s)/100*255:parseFloat(s);return M(o(i[1]),o(i[2]),o(i[3]))}let r=oe.exec(t);if(r){if(P(r[4])<1)return null;let o=s=>(s.endsWith("%")?parseFloat(s)/100:parseFloat(s))*255;return M(o(r[1]),o(r[2]),o(r[3]))}}function se(e,t){let n=e.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!n)return null;n.canvas.width=1,n.canvas.height=1,n.fillStyle=t,n.fillRect(0,0,1,1);let[i,r,o,s]=n.getImageData(0,0,1,1).data;return s===255?M(i,r,o):null}function j(e){return t=>{let n=e.documentElement,i=e.defaultView;if(!i.getComputedStyle(n).getPropertyValue(t).trim())return null;let r=e.createElement("span"),o=e.createElement("span");r.style.setProperty("display","none","important"),o.style.setProperty("color",`var(${t})`),r.append(o),n.append(r);try{r.style.color="rgb(1, 2, 3)";let s=i.getComputedStyle(o).color;r.style.color="rgb(4, 5, 6)";let p=i.getComputedStyle(o).color;if(s!==p)return null;let d=ie(s);return d===void 0?se(e,s):d}catch{return null}finally{r.remove()}}}var G=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),H=e=>typeof e=="string"&&e.trim()!=="";function T(e){let t=[];if(!G(e))return{errors:["\u5F15\u6570\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"],config:null};if(H(e.id)||t.push("id \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),!Array.isArray(e.colors)||e.colors.length===0)return t.push("colors \u306B 1 \u4EF6\u4EE5\u4E0A\u306E\u914D\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"),{errors:t,config:null};let n=new Set,i=e.colors.map((r,o)=>{let s=`colors[${o}]`;if(!G(r))return t.push(`${s} \u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`),null;typeof r.var!="string"||!/^--.+/.test(r.var)?t.push(`${s}.var \u306B "--" \u3067\u59CB\u307E\u308B CSS \u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`):n.has(r.var)?t.push(`${s}.var "${r.var}" \u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059`):n.add(r.var),H(r.label)||t.push(`${s}.label \u306B\u7A7A\u3067\u306A\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`);let p=null;return r.default!==void 0&&(p=S(r.default),(!p||!r.default.trim().startsWith("#"))&&t.push(`${s}.default \u306F "#rrggbb" \u307E\u305F\u306F "#rgb" \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044`)),{var:r.var,label:r.label,default:p}});return t.length>0?{errors:t,config:null}:{errors:t,config:{id:e.id,colors:i}}}function A(e,t,n){n?e.style.setProperty(t,n):e.style.removeProperty(t)}function D(e,t,n){for(let i of t)A(e,i,n[i]??null)}function F(e,t,n){let i=t.map(({var:r})=>[r,e.style.getPropertyValue(r),e.style.getPropertyPriority(r)]);for(let[r]of i)e.style.removeProperty(r);try{let r={};for(let o of t){if(o.default){r[o.var]=o.default;continue}try{r[o.var]=n(o.var)??null}catch{r[o.var]=null}}return r}finally{for(let[r,o,s]of i)o&&e.style.setProperty(r,o,s)}}function ae(e,t,n){let i=Math.max(8,n.width-t.width-8),r=Math.max(8,n.height-t.height-8);return{x:Math.round(Math.min(Math.max(e.x,8),i)),y:Math.round(Math.min(Math.max(e.y,8),r))}}function _({win:e,panel:t,handles:n,position:i,onMove:r}){let o=i,s=()=>({width:e.document.documentElement.clientWidth||e.innerWidth,height:e.document.documentElement.clientHeight||e.innerHeight}),p=m=>{let l=t.getBoundingClientRect(),{x:h,y:x}=ae(m,l,s());return t.style.left=`${h}px`,t.style.top=`${x}px`,t.style.bottom="auto",{x:h,y:x}},d=()=>{o&&p(o)};for(let m of n){let l=null,h=!1,x=u=>{if(u.pointerId!==l.id)return;let g=u.clientX-l.pointerX,a=u.clientY-l.pointerY;if(!h){if(Math.hypot(g,a)<4)return;h=!0,t.classList.add("is-dragging")}u.preventDefault(),p({x:l.x+g,y:l.y+a})},b=u=>{if(u.pointerId!==l.id||(l=null,e.removeEventListener("pointermove",x),e.removeEventListener("pointerup",b),e.removeEventListener("pointercancel",b),!h))return;h=!1,t.classList.remove("is-dragging");let g=t.getBoundingClientRect();o={x:Math.round(g.left),y:Math.round(g.top)},r(o);let a=c=>{c.preventDefault(),c.stopImmediatePropagation()};m.addEventListener("click",a,{capture:!0,once:!0}),e.setTimeout(()=>m.removeEventListener("click",a,{capture:!0}),0)};m.addEventListener("pointerdown",u=>{if(u.button!==0||l)return;let g=t.getBoundingClientRect();l={pointerX:u.clientX,pointerY:u.clientY,x:g.left,y:g.top,id:u.pointerId},e.addEventListener("pointermove",x),e.addEventListener("pointerup",b),e.addEventListener("pointercancel",b)})}return e.addEventListener("resize",d),{refresh:d}}var le="visca-color-picker",R="\u30C6\u30FC\u30DE\u30AB\u30E9\u30FC\u5909\u66F4",B="http://www.w3.org/2000/svg";var ce=["M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","M3 3v5h5"],pe=`
  :host { all: initial; }
  *, *::before, *::after { box-sizing: border-box; }
  .panel {
    position: fixed;
    bottom: 16px;
    left: 16px;
    z-index: 2147483647;
    /* \u4F4D\u7F6E\u306B\u3088\u3063\u3066\u5E45\u304C\u7E2E\u307E\u306A\u3044\u3088\u3046\u306B\u3059\u308B\uFF08\u753B\u9762\u5185\u306B\u53CE\u3081\u308B\u4F4D\u7F6E\u306E\u8A08\u7B97\u3067\u6B63\u3057\u3044\u5927\u304D\u3055\u3092\u6E2C\u308B\u305F\u3081\uFF09 */
    width: max-content;
    max-width: calc(100vw - 16px);
    font: 13px/1.4 system-ui, -apple-system, "Hiragino Sans", "Noto Sans JP", sans-serif;
    color: #222;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgb(0 0 0 / 25%);
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
    padding: 10px 12px;
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
`,f=(e,t,n={},i=[])=>{let r=e.createElement(t);for(let[o,s]of Object.entries(n))o==="className"?r.className=s:o==="text"?r.textContent=s:r.setAttribute(o,s);return r.append(...i),r};function X(e,{colors:t,onColor:n,onReset:i,onResetColor:r,onMinimize:o}){let s=e.createElement(le);s.setAttribute("style","all: initial");let p=s.attachShadow({mode:"open"}),d=t.map(()=>f(e,"span",{className:"chip"})),m=t.map(c=>{let w=f(e,"input",{type:"color","aria-label":c.label}),y=f(e,"input",{type:"text",maxlength:"7",spellcheck:"false",autocomplete:"off",inputmode:"text","aria-label":`${c.label}\uFF0816 \u9032\u6570\uFF09`});w.addEventListener("input",()=>n(c.var,w.value.toLowerCase())),y.addEventListener("input",()=>{let L=S(y.value);L&&n(c.var,L)}),y.addEventListener("change",()=>{g&&(y.value=g.values[c.var])});let $=f(e,"div",{className:"row"},[f(e,"span",{className:"label",text:c.label,title:c.label}),w,y]),E=null;return t.length>1&&(E=f(e,"button",{type:"button",className:"reset-color","data-action":"reset-color",title:`${c.label}\u3092\u30EA\u30BB\u30C3\u30C8`,"aria-label":`${c.label}\u3092\u30EA\u30BB\u30C3\u30C8`},[W(e)]),E.addEventListener("click",()=>r(c.var)),$.classList.add("has-reset"),$.append(E)),{color:c,colorInput:w,textInput:y,resetButton:E,row:$}}),l=f(e,"button",{type:"button",className:"reset-all","data-action":"reset"},[W(e),f(e,"span",{text:t.length>1?"\u3059\u3079\u3066\u30EA\u30BB\u30C3\u30C8":"\u30EA\u30BB\u30C3\u30C8"})]);l.addEventListener("click",i);let h=f(e,"button",{type:"button",className:"minimize","data-action":"minimize",title:"\u6700\u5C0F\u5316","aria-label":"\u6700\u5C0F\u5316",text:"\u2212"});h.addEventListener("click",()=>o(!0));let x=f(e,"button",{type:"button",className:"restore","data-action":"restore",title:R,"aria-label":`${R}\u3092\u958B\u304F`},d);x.addEventListener("click",()=>o(!1));let b=f(e,"div",{className:"head",title:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5"},[f(e,"span",{className:"title",text:R}),h]),u=f(e,"div",{className:"panel",role:"region","aria-label":R},[x,f(e,"div",{className:"content"},[b,f(e,"div",{className:"body"},[...m.map(c=>c.row),f(e,"div",{className:"actions"},[l])])])]);p.append(f(e,"style",{text:pe}),u);let g=null;function a(c){g=c,m.forEach(({color:w,colorInput:y,textInput:$,resetButton:E},L)=>{let z=c.values[w.var];y.value=z,p.activeElement!==$&&($.value=z),d[L].style.backgroundColor=z,E&&(E.disabled=!c.changed.includes(w.var))}),l.disabled=c.changed.length===0,u.classList.toggle("is-minimized",c.minimized)}return{host:s,panel:u,handles:[b,x],render:a}}function W(e){let t=e.createElementNS(B,"svg"),n={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"};for(let[i,r]of Object.entries(n))t.setAttribute(i,r);for(let i of ce){let r=e.createElementNS(B,"path");r.setAttribute("d",i),t.append(r)}return t}var de="visca-color-picker:",O=()=>({colors:{},minimized:!1,position:null}),ue=e=>typeof e=="object"&&e!==null&&Number.isFinite(e.x)&&Number.isFinite(e.y);function V(e){try{return e.sessionStorage??null}catch{return null}}function Y(e,t){let n=`${de}${e}`;return{load:()=>{try{let o=t()?.getItem(n);if(!o)return O();let s=JSON.parse(o);if(typeof s!="object"||s===null||Array.isArray(s))return O();let p={};if(typeof s.colors=="object"&&s.colors!==null)for(let[m,l]of Object.entries(s.colors)){let h=S(l);m.startsWith("--")&&h&&(p[m]=h)}let d=ue(s.position)?{x:s.position.x,y:s.position.y}:null;return{colors:p,minimized:s.minimized===!0,position:d}}catch{return O()}},save:o=>{try{let s=t();if(!s)return;let p=o.position??null;Object.keys(o.colors).length===0&&!o.minimized&&!p?s.removeItem(n):s.setItem(n,JSON.stringify({colors:o.colors,minimized:o.minimized,position:p}))}catch{}}}}var k="[ViscaColorPicker]",J=Symbol.for("visca-color-picker.initialized"),me=(e,t)=>{e.readyState==="loading"?e.addEventListener("DOMContentLoaded",t,{once:!0}):t()};function q(e,t){try{let{win:n,doc:i}=t;if(n[J]){console.warn(`${k} \u3059\u3067\u306B\u521D\u671F\u5316\u6E08\u307F\u306E\u305F\u3081\u30012 \u56DE\u76EE\u4EE5\u964D\u306E init() \u306F\u7121\u8996\u3057\u307E\u3059`);return}let{errors:r,config:o}=T(e);if(!o){console.error(`${k} \u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u306A\u3044\u305F\u3081\u8868\u793A\u3057\u307E\u305B\u3093
${r.map(l=>`- ${l}`).join(`
`)}`);return}n[J]=!0;let s=i.documentElement,p=o.colors.map(l=>l.var),d=Y(o.id,t.getStorage),m=d.load();m.colors=Object.fromEntries(Object.entries(m.colors).filter(([l])=>p.includes(l))),D(s,p,m.colors),me(i,()=>U(o,t,d,m,!0))}catch(n){console.error(`${k} \u521D\u671F\u5316\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,n)}}function U(e,t,n,i,r){try{let{win:o,doc:s}=t,p=s.documentElement,d=F(p,e.colors,t.resolveColor),m=e.colors.filter(a=>!d[a.var]);if(m.length>0&&r&&s.readyState!=="complete"){o.addEventListener("load",()=>U(e,t,n,i,!1),{once:!0});return}for(let{var:a}of m)console.warn(`${k} ${a} \u306E\u5024\u3092\u8272\u3068\u3057\u3066\u89E3\u91C8\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u30D1\u30CD\u30EB\u306B\u8868\u793A\u3057\u307E\u305B\u3093`);let l=e.colors.filter(a=>d[a.var]);if(l.length===0)return;let h=a=>i.colors[a]??d[a],x=(a,c)=>{c===d[a]?delete i.colors[a]:i.colors[a]=c,A(p,a,i.colors[a]??null)},b=()=>{n.save(i),u.render({values:Object.fromEntries(l.map(a=>[a.var,h(a.var)])),changed:Object.keys(i.colors),minimized:i.minimized}),g?.refresh()};for(let{var:a}of l)i.colors[a]&&x(a,i.colors[a]);let u=X(s,{colors:l,onColor:(a,c)=>{x(a,c),b()},onReset:()=>{for(let{var:a}of l)x(a,d[a]);b()},onResetColor:a=>{x(a,d[a]),b()},onMinimize:a=>{i.minimized=a,b()}}),g=null;b(),(s.body??p).append(u.host),g=_({win:o,panel:u.panel,handles:u.handles,position:i.position,onMove:a=>{i.position=a,n.save(i)}}),g.refresh()}catch(o){console.error(`${k} \u30D1\u30CD\u30EB\u306E\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,o)}}function fe(e){q(e,{win:window,doc:document,getStorage:()=>V(window),resolveColor:j(document)})}return re(ge);})();
/*! Lucide "rotate-ccw" icon | ISC License | Copyright (c) Lucide Icons and Contributors | https://lucide.dev/license */
