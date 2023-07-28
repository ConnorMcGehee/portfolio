import{r as We,s as Xe,n as De,f as qe,h as st,i as Mt,j as zt,e as we,k as it,l as Lt}from"../chunks/scheduler.be1277ff.js";import{t as q,d as U,y as at,z as Tt,S as Ze,i as Fe,e as Re,a as se,f as C,A as Oe,B as Ne,j as D,k as f,C as Te,x as y,g as I,s as Q,m as le,r as ce,h as B,c as $,n as re,u as ue,l as W,v as he,D as K,o as kt,w as de,p as je,b as Ve,E as Ye,F as Ot,G as Nt,H as Et}from"../chunks/index.a4d4804f.js";import{w as Je}from"../chunks/index.b32db91d.js";const At=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function He(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ht(e,t){q(e,1,1,()=>{t.delete(e.key)})}function It(e,t,n,l,c,a,i,u,o,d,m,r){let s=e.length,p=a.length,g=s;const b={};for(;g--;)b[e[g].key]=g;const _=[],T=new Map,z=new Map,w=[];for(g=p;g--;){const S=r(c,a,g),N=n(S);let E=i.get(N);E?l&&w.push(()=>E.p(S,t)):(E=d(N,S),E.c()),T.set(N,_[g]=E),N in b&&z.set(N,Math.abs(g-b[N]))}const v=new Set,L=new Set;function O(S){U(S,1),S.m(u,m),i.set(S.key,S),m=S.first,p--}for(;s&&p;){const S=_[p-1],N=e[s-1],E=S.key,h=N.key;S===N?(m=S.first,s--,p--):T.has(h)?!i.has(E)||v.has(E)?O(S):L.has(h)?s--:z.get(E)>z.get(h)?(L.add(E),O(S)):(v.add(h),s--):(o(N,i),s--)}for(;s--;){const S=e[s];T.has(S.key)||o(S,i)}for(;p;)O(_[p-1]);return We(w),_}const Bt=!0,En=Object.freeze(Object.defineProperty({__proto__:null,prerender:Bt},Symbol.toStringTag,{value:"Module"})),Dt="/portfolio/_app/immutable/assets/headshot.7792eacc.jpg",jt="/portfolio/_app/immutable/assets/playvert.79fa768a.jpg",Vt="/portfolio/_app/immutable/assets/brewery-locator.97c3d420.jpg",Xt="/portfolio/_app/immutable/assets/mastermind.88d7c669.jpg",Ut="/portfolio/_app/immutable/assets/towers-of-hanoi.5d675a30.jpg",Ue=Je(0),Gt={title:"Playvert",imageSrc:jt,url:"https://playvert.com",repo:"https://github.com/ConnorMcGehee/Playvert",description:"Playvert is a versatile web application designed for sharing playlists across multiple music streaming platforms."},Rt={title:"Brewery Locator",imageSrc:Vt,url:"https://connormcgehee.github.io/Brewery-Locator/",repo:"https://github.com/ConnorMcGehee/Brewery-Locator",description:"Brewery Locator uses the Open Brewery DB API to locate and display the nearest breweries to the user."},Yt={title:"Mastermind",imageSrc:Xt,url:"https://connormcgehee.github.io/Mastermind/",repo:"https://github.com/ConnorMcGehee/Mastermind",description:"Mastermind is a JavaScript game based off of the Israelian code-breaking board game. Written in vanilla JS, CSS, and HTML."},Wt={title:"Towers of Hanoi",imageSrc:Ut,url:"https://connormcgehee.github.io/TowersOfHanoi/",repo:"https://github.com/ConnorMcGehee/TowersOfHanoi",description:"Towers of Hanoi is a JavaScript game based off the popular mathematical puzzle. Written in vanilla JS, CSS, and HTML."},et=Je([Wt,Yt,Rt,Gt]),tt=Je(""),Pe={dragStart:!0},qt=(e,t={})=>{let{bounds:n,axis:l="both",gpuAcceleration:c=!0,legacyTranslate:a=!0,transform:i,applyUserSelectHack:u=!0,disabled:o=!1,ignoreMultitouch:d=!1,recomputeBounds:m=Pe,grid:r,position:s,cancel:p,handle:g,defaultClass:b="neodrag",defaultClassDragging:_="neodrag-dragging",defaultClassDragged:T="neodrag-dragged",defaultPosition:z={x:0,y:0},onDragStart:w,onDrag:v,onDragEnd:L}=t,O=!1,S=ae(z.x)?be(z.x,e):z.x,N=ae(z.y)?be(z.y,e):z.y,E=0,h=0,Z=0,x=0,{x:M,y:ee}=s?{x:(s==null?void 0:s.x)??0,y:(s==null?void 0:s.y)??0}:z;G(M,ee);let Ee,Ce,oe="",te,ne,ie,me,ze,Le=!!s;m={...Pe,...m};const Se=document.body.style,ge=e.classList;function G(k=S,H=N){const Y=["%","cm","mm","Q","in","pc","pt","px","em","ex","ch","rem","lh","rlh","vw","vh","vmin","vmax","vb","vi","svw","svh","lvw","lvh","dvw","dvh"];k=ae(k)?k.trim().toLowerCase():k,H=ae(H)?H.trim().toLowerCase():H;let F,X;if(ae(k)&&k.startsWith("calc")&&k.endsWith(")"))F=k;else{let J=ae(k)?k.match(/([-+]?\d*\.?\d+)([a-z%]*)/i):null,pe,_e;if(J?(pe=J[1],_e=J[2]||"px"):(pe=k,_e="px"),!Y.includes(_e))throw new Error(`Invalid X unit: ${_e}`);F=`${pe}${_e}`}if(ae(H)&&H.startsWith("calc")&&H.endsWith(")"))X=H;else{let J=ae(H)?H.match(/([-+]?\d*\.?\d+)([a-z%]*)/i):null,pe,_e;if(J?(pe=J[1],_e=J[2]||"px"):(pe=H,_e="px"),!Y.includes(_e))throw new Error(`Invalid Y unit: ${_e}`);X=`${pe}${_e}`}if(!i){let J=`${F}, ${X}`;return $e(e,"transform",c?`translate3d(${J}, 0)`:`translate(${J})`)}const P=i({offsetX:k,offsetY:H,rootNode:e});ae(P)&&$e(e,"transform",P)}const ye=()=>({offsetX:S,offsetY:N,rootNode:e,currentNode:ze}),V=(k,H)=>{const Y=ye();e.dispatchEvent(new CustomEvent(k,{detail:Y})),H==null||H(Y)};function Ke(){V("neodrag:start",w)}function A(){V("neodrag:end",L)}function R(){V("neodrag",v)}const j=addEventListener;j("pointerdown",Ie,!1),j("pointerup",ke,!1),j("pointermove",Me,!1),$e(e,"touch-action","none");const fe=()=>{let k=e.offsetWidth/ne.width;return isNaN(k)&&(k=1),k};function be(k,H=document.body){const Y=k.startsWith("-"),F=Y?k.slice(1):k,X=document.createElement("div");X.style.width=F,X.style.visibility="hidden",H.appendChild(X);const P=getComputedStyle(X),J=parseFloat(P.width);return H.removeChild(X),Y?-J:J}function Ie(k){if(o||k.button===2||d&&!k.isPrimary)return;if(m.dragStart&&(te=Qe(n,e)),ae(g)&&ae(p)&&g===p)throw new Error("`handle` selector can't be same as `cancel` selector");if(ge.add(b),ie=Ft(g,e),me=Jt(p,e),Ee=/(both|x)/.test(l),Ce=/(both|y)/.test(l),ft(me,ie))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const H=k.composedPath()[0];if(ie.some(P=>{var J;return P.contains(H)||((J=P.shadowRoot)==null?void 0:J.contains(H))})&&!ft(me,[H]))ze=ie.length===1?e:ie.find(P=>P.contains(H)),O=!0;else return;ne=e.getBoundingClientRect(),u&&(oe=Se.userSelect,Se.userSelect="none"),Ke();const{clientX:Y,clientY:F}=k,X=fe();if(Ee){const P=ae(M)?be(M,e):M;E=Y-P/X}if(Ce){const P=ae(ee)?be(ee,e):ee;h=F-P/X}te&&(Z=Y-ne.left,x=F-ne.top)}function ke(){O&&(m.dragEnd&&(te=Qe(n,e)),ge.remove(_),ge.add(T),u&&(Se.userSelect=oe),A(),Ee&&(E=S),Ce&&(h=N),O=!1)}function Me(k){if(!O)return;m.drag&&(te=Qe(n,e)),ge.add(_),k.preventDefault(),ne=e.getBoundingClientRect();let H=k.clientX,Y=k.clientY;const F=fe();if(te){const X={left:te.left+Z,top:te.top+x,right:te.right+Z-ne.width,bottom:te.bottom+x-ne.height};H=ot(H,X.left,X.right),Y=ot(Y,X.top,X.bottom)}if(Array.isArray(r)){let[X,P]=r;if(isNaN(+X)||X<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+P)||P<0)throw new Error("2nd argument of `grid` must be a valid positive number");let J=H-E,pe=Y-h;[J,pe]=Zt([X/F,P/F],J,pe),H=E+J,Y=h+pe}Ee&&(S=Math.round((H-E)*F)),Ce&&(N=Math.round((Y-h)*F)),M=S,ee=N,R(),G()}return{destroy:()=>{const k=removeEventListener;k("pointerdown",Ie,!1),k("pointerup",ke,!1),k("pointermove",Me,!1)},update:k=>{var Y,F;l=k.axis||"both",o=k.disabled??!1,d=k.ignoreMultitouch??!1,g=k.handle,n=k.bounds,m=k.recomputeBounds??Pe,p=k.cancel,u=k.applyUserSelectHack??!0,r=k.grid,c=k.gpuAcceleration??!0,a=k.legacyTranslate??!0,i=k.transform;const H=ge.contains(T);ge.remove(b,T),b=k.defaultClass??"neodrag",_=k.defaultClassDragging??"neodrag-dragging",T=k.defaultClassDragged??"neodrag-dragged",ge.add(b),H&&ge.add(T),Le&&(M=S=((Y=k.position)==null?void 0:Y.x)??S,ee=N=((F=k.position)==null?void 0:F.y)??N,G())}}},ot=(e,t,n)=>Math.min(Math.max(e,t),n),ae=e=>typeof e=="string",Zt=([e,t],n,l)=>{const c=(u,o)=>o===0?0:Math.ceil(u/o)*o,a=c(n,e),i=c(l,t);return[a,i]};function Ft(e,t){if(!e)return[t];if(rt(e))return[e];if(Array.isArray(e))return e;const n=t.querySelectorAll(e);if(n===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(n.values())}function Jt(e,t){if(!e)return[];if(rt(e))return[e];if(Array.isArray(e))return e;const n=t.querySelectorAll(e);if(n===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(n.values())}const ft=(e,t)=>e.some(n=>t.some(l=>n.contains(l)));function Qe(e,t){if(e===void 0)return;if(rt(e))return e.getBoundingClientRect();if(typeof e=="object"){const{top:l=0,left:c=0,right:a=0,bottom:i=0}=e,u=window.innerWidth-a,o=window.innerHeight-i;return{top:l,right:u,bottom:o,left:c}}if(e==="parent")return t.parentNode.getBoundingClientRect();const n=document.querySelector(e);if(n===null)throw new Error("The selector provided for bound doesn't exists in the document.");return n.getBoundingClientRect()}const $e=(e,t,n)=>e.style.setProperty(t,n),rt=e=>e instanceof HTMLElement;function ct(e){return Object.prototype.toString.call(e)==="[object Date]"}function nt(e,t,n,l){if(typeof n=="number"||ct(n)){const c=l-n,a=(n-t)/(e.dt||1/60),i=e.opts.stiffness*c,u=e.opts.damping*a,o=(i-u)*e.inv_mass,d=(a+o)*e.dt;return Math.abs(d)<e.opts.precision&&Math.abs(c)<e.opts.precision?l:(e.settled=!1,ct(n)?new Date(n.getTime()+d):n+d)}else{if(Array.isArray(n))return n.map((c,a)=>nt(e,t[a],n[a],l[a]));if(typeof n=="object"){const c={};for(const a in n)c[a]=nt(e,t[a],n[a],l[a]);return c}else throw new Error(`Cannot spring ${typeof n} values`)}}function Ae(e,t={}){const n=Je(e),{stiffness:l=.15,damping:c=.8,precision:a=.01}=t;let i,u,o,d=e,m=e,r=1,s=0,p=!1;function g(_,T={}){m=_;const z=o={};return e==null||T.hard||b.stiffness>=1&&b.damping>=1?(p=!0,i=at(),d=_,n.set(e=m),Promise.resolve()):(T.soft&&(s=1/((T.soft===!0?.5:+T.soft)*60),r=0),u||(i=at(),p=!1,u=Tt(w=>{if(p)return p=!1,u=null,!1;r=Math.min(r+s,1);const v={inv_mass:r,opts:b,settled:!0,dt:(w-i)*60/1e3},L=nt(v,d,e,m);return i=w,d=e,n.set(e=L),v.settled&&(u=null),!v.settled})),new Promise(w=>{u.promise.then(()=>{z===o&&w()})}))}const b={set:g,update:(_,T)=>g(_(m,e),T),subscribe:n.subscribe,stiffness:l,damping:c,precision:a};return b}function Kt(e){const t=e-1;return t*t*t+1}const Ge=parseFloat;function lt(e,t=";"){let n;if(Array.isArray(e))n=e.filter(l=>l);else{n=[];for(const l in e)e[l]&&n.push(`${l}:${e[l]}`)}return n.join(t)}function Pt(e,t,n,l){let c,a;const i="1em";let u,o,d,m="-.125em";const r="visible";return l&&(d="center",a="1.25em"),n&&(c=n),t&&(t=="lg"?(o="1.33333em",u=".75em",m="-.225em"):t=="xs"?o=".75em":t=="sm"?o=".875em":o=t.replace("x","em")),lt([lt({float:c,width:a,height:i,"line-height":u,"font-size":o,"text-align":d,"vertical-align":m,"transform-origin":"center",overflow:r}),e])}function Qt(e,t,n,l,c,a=1,i="",u=""){let o=1,d=1;return c&&(c=="horizontal"?o=-1:c=="vertical"?d=-1:o=d=-1),lt([`translate(${Ge(t)*a}${i},${Ge(n)*a}${i})`,`scale(${o*Ge(e)},${d*Ge(e)})`,l&&`rotate(${l}${u})`]," ")}function ut(e){let t,n,l,c,a,i,u,o;function d(s,p){return typeof s[10][4]=="string"?xt:$t}let m=d(e),r=m(e);return{c(){t=Oe("svg"),n=Oe("g"),l=Oe("g"),r.c(),this.h()},l(s){t=Ne(s,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var p=D(t);n=Ne(p,"g",{transform:!0,"transform-origin":!0});var g=D(n);l=Ne(g,"g",{transform:!0});var b=D(l);r.l(b),b.forEach(C),g.forEach(C),p.forEach(C),this.h()},h(){f(l,"transform",e[12]),f(n,"transform",c="translate("+e[10][0]/2+" "+e[10][1]/2+")"),f(n,"transform-origin",a=e[10][0]/4+" 0"),f(t,"id",i=e[1]||void 0),f(t,"class",u="svelte-fa "+e[0]+" svelte-1cj2gr0"),f(t,"style",e[11]),f(t,"viewBox",o="0 0 "+e[10][0]+" "+e[10][1]),f(t,"aria-hidden","true"),f(t,"role","img"),f(t,"xmlns","http://www.w3.org/2000/svg"),Te(t,"pulse",e[4]),Te(t,"spin",e[3])},m(s,p){se(s,t,p),y(t,n),y(n,l),r.m(l,null)},p(s,p){m===(m=d(s))&&r?r.p(s,p):(r.d(1),r=m(s),r&&(r.c(),r.m(l,null))),p&4096&&f(l,"transform",s[12]),p&1024&&c!==(c="translate("+s[10][0]/2+" "+s[10][1]/2+")")&&f(n,"transform",c),p&1024&&a!==(a=s[10][0]/4+" 0")&&f(n,"transform-origin",a),p&2&&i!==(i=s[1]||void 0)&&f(t,"id",i),p&1&&u!==(u="svelte-fa "+s[0]+" svelte-1cj2gr0")&&f(t,"class",u),p&2048&&f(t,"style",s[11]),p&1024&&o!==(o="0 0 "+s[10][0]+" "+s[10][1])&&f(t,"viewBox",o),p&17&&Te(t,"pulse",s[4]),p&9&&Te(t,"spin",s[3])},d(s){s&&C(t),r.d()}}}function $t(e){let t,n,l,c,a,i,u,o,d,m;return{c(){t=Oe("path"),i=Oe("path"),this.h()},l(r){t=Ne(r,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),D(t).forEach(C),i=Ne(r,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),D(i).forEach(C),this.h()},h(){f(t,"d",n=e[10][4][0]),f(t,"fill",l=e[6]||e[2]||"currentColor"),f(t,"fill-opacity",c=e[9]!=!1?e[7]:e[8]),f(t,"transform",a="translate("+e[10][0]/-2+" "+e[10][1]/-2+")"),f(i,"d",u=e[10][4][1]),f(i,"fill",o=e[5]||e[2]||"currentColor"),f(i,"fill-opacity",d=e[9]!=!1?e[8]:e[7]),f(i,"transform",m="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(r,s){se(r,t,s),se(r,i,s)},p(r,s){s&1024&&n!==(n=r[10][4][0])&&f(t,"d",n),s&68&&l!==(l=r[6]||r[2]||"currentColor")&&f(t,"fill",l),s&896&&c!==(c=r[9]!=!1?r[7]:r[8])&&f(t,"fill-opacity",c),s&1024&&a!==(a="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&f(t,"transform",a),s&1024&&u!==(u=r[10][4][1])&&f(i,"d",u),s&36&&o!==(o=r[5]||r[2]||"currentColor")&&f(i,"fill",o),s&896&&d!==(d=r[9]!=!1?r[8]:r[7])&&f(i,"fill-opacity",d),s&1024&&m!==(m="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&f(i,"transform",m)},d(r){r&&(C(t),C(i))}}}function xt(e){let t,n,l,c;return{c(){t=Oe("path"),this.h()},l(a){t=Ne(a,"path",{d:!0,fill:!0,transform:!0}),D(t).forEach(C),this.h()},h(){f(t,"d",n=e[10][4]),f(t,"fill",l=e[2]||e[5]||"currentColor"),f(t,"transform",c="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(a,i){se(a,t,i)},p(a,i){i&1024&&n!==(n=a[10][4])&&f(t,"d",n),i&36&&l!==(l=a[2]||a[5]||"currentColor")&&f(t,"fill",l),i&1024&&c!==(c="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&f(t,"transform",c)},d(a){a&&C(t)}}}function en(e){let t,n=e[10][4]&&ut(e);return{c(){n&&n.c(),t=Re()},l(l){n&&n.l(l),t=Re()},m(l,c){n&&n.m(l,c),se(l,t,c)},p(l,[c]){l[10][4]?n?n.p(l,c):(n=ut(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:De,o:De,d(l){l&&C(t),n&&n.d(l)}}}function tn(e,t,n){let{class:l=""}=t,{id:c=""}=t,{style:a=""}=t,{icon:i}=t,{size:u=""}=t,{color:o=""}=t,{fw:d=!1}=t,{pull:m=""}=t,{scale:r=1}=t,{translateX:s=0}=t,{translateY:p=0}=t,{rotate:g=""}=t,{flip:b=!1}=t,{spin:_=!1}=t,{pulse:T=!1}=t,{primaryColor:z=""}=t,{secondaryColor:w=""}=t,{primaryOpacity:v=1}=t,{secondaryOpacity:L=.4}=t,{swapOpacity:O=!1}=t,S,N,E;return e.$$set=h=>{"class"in h&&n(0,l=h.class),"id"in h&&n(1,c=h.id),"style"in h&&n(13,a=h.style),"icon"in h&&n(14,i=h.icon),"size"in h&&n(15,u=h.size),"color"in h&&n(2,o=h.color),"fw"in h&&n(16,d=h.fw),"pull"in h&&n(17,m=h.pull),"scale"in h&&n(18,r=h.scale),"translateX"in h&&n(19,s=h.translateX),"translateY"in h&&n(20,p=h.translateY),"rotate"in h&&n(21,g=h.rotate),"flip"in h&&n(22,b=h.flip),"spin"in h&&n(3,_=h.spin),"pulse"in h&&n(4,T=h.pulse),"primaryColor"in h&&n(5,z=h.primaryColor),"secondaryColor"in h&&n(6,w=h.secondaryColor),"primaryOpacity"in h&&n(7,v=h.primaryOpacity),"secondaryOpacity"in h&&n(8,L=h.secondaryOpacity),"swapOpacity"in h&&n(9,O=h.swapOpacity)},e.$$.update=()=>{e.$$.dirty&16384&&n(10,S=i&&i.icon||[0,0,"",[],""]),e.$$.dirty&237568&&n(11,N=Pt(a,u,m,d)),e.$$.dirty&8126464&&n(12,E=Qt(r,s,p,g,b,512))},[l,c,o,_,T,z,w,v,L,O,S,N,E,a,i,u,d,m,r,s,p,g,b]}class ve extends Ze{constructor(t){super(),Fe(this,t,tn,en,Xe,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var nn={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Ct={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ln={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},rn={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},sn={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},an={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},on={prefix:"fas",iconName:"angles-up",icon:[448,512,["angle-double-up"],"f102","M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"]},fn={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},St={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function cn(e){let t,n,l,c,a,i,u,o=e[0].description+"",d,m,r,s,p,g,b,_,T,z,w,v,L,O,S,N;return qe(e[18]),s=new ve({props:{icon:Ct}}),T=new ve({props:{icon:fn}}),{c(){t=I("figure"),n=I("img"),a=Q(),i=I("figcaption"),u=I("p"),d=le(o),m=Q(),r=I("a"),ce(s.$$.fragment),p=le("    Github Repository"),b=Q(),_=I("a"),ce(T.$$.fragment),z=le("   Visit Site"),this.h()},l(E){t=B(E,"FIGURE",{draggable:!0,class:!0,style:!0});var h=D(t);n=B(h,"IMG",{draggable:!0,src:!0,alt:!0,class:!0}),a=$(h),i=B(h,"FIGCAPTION",{class:!0});var Z=D(i);u=B(Z,"P",{class:!0});var x=D(u);d=re(x,o),x.forEach(C),m=$(Z),r=B(Z,"A",{href:!0,target:!0});var M=D(r);ue(s.$$.fragment,M),p=re(M,"    Github Repository"),M.forEach(C),b=$(Z),_=B(Z,"A",{href:!0,target:!0});var ee=D(_);ue(T.$$.fragment,ee),z=re(ee,"   Visit Site"),ee.forEach(C),Z.forEach(C),h.forEach(C),this.h()},h(){f(n,"draggable","false"),st(n.src,l=e[0].imageSrc)||f(n,"src",l),f(n,"alt",c="Screenshot of "+e[0].title),f(n,"class","svelte-1qto0zk"),f(u,"class","svelte-1qto0zk"),f(r,"href",g=e[0].repo),f(r,"target","_blank"),f(_,"href",w=e[0].url),f(_,"target","_blank"),f(i,"class","description svelte-1qto0zk"),f(t,"draggable","false"),f(t,"class",v="card "+e[5]+" svelte-1qto0zk"),W(t,"rotate",e[8]+"deg"),W(t,"opacity",e[9]),W(t,"z-index",e[5]?e[4].length:e[1]),W(t,"width",e[10].width+"rem"),W(t,"left",e[10].translateZ+"rem"),W(t,"top",e[10].translateZ+"rem"),Te(t,"behind",!e[2])},m(E,h){se(E,t,h),y(t,n),y(t,a),y(t,i),y(i,u),y(u,d),y(i,m),y(i,r),he(s,r,null),y(r,p),y(i,b),y(i,_),he(T,_,null),y(_,z),O=!0,S||(N=[K(window,"resize",e[18]),Mt(L=qt.call(null,t,e[6])),K(t,"animationend",e[19]),K(t,"pointerover",e[20]),K(t,"pointerleave",e[21])],S=!0)},p(E,[h]){(!O||h&1&&!st(n.src,l=E[0].imageSrc))&&f(n,"src",l),(!O||h&1&&c!==(c="Screenshot of "+E[0].title))&&f(n,"alt",c),(!O||h&1)&&o!==(o=E[0].description+"")&&kt(d,o),(!O||h&1&&g!==(g=E[0].repo))&&f(r,"href",g),(!O||h&1&&w!==(w=E[0].url))&&f(_,"href",w),(!O||h&32&&v!==(v="card "+E[5]+" svelte-1qto0zk"))&&f(t,"class",v),(!O||h&256)&&W(t,"rotate",E[8]+"deg"),(!O||h&512)&&W(t,"opacity",E[9]),(!O||h&50)&&W(t,"z-index",E[5]?E[4].length:E[1]),(!O||h&1024)&&W(t,"width",E[10].width+"rem"),(!O||h&1024)&&W(t,"left",E[10].translateZ+"rem"),(!O||h&1024)&&W(t,"top",E[10].translateZ+"rem"),L&&zt(L.update)&&h&64&&L.update.call(null,E[6]),(!O||h&36)&&Te(t,"behind",!E[2])},i(E){O||(U(s.$$.fragment,E),U(T.$$.fragment,E),O=!0)},o(E){q(s.$$.fragment,E),q(T.$$.fragment,E),O=!1},d(E){E&&C(t),de(s),de(T),S=!1,We(N)}}}const xe=75;function un(e,t,n){let l,c,a,i,u,o;we(e,et,M=>n(4,l=M)),we(e,Ue,M=>n(16,c=M)),we(e,tt,M=>n(17,a=M));let{project:d}=t,{index:m}=t,r={x:0,y:0},s=Ae(1,{stiffness:.08,damping:.5});we(e,s,M=>n(9,u=M));let p=Ae({width:17,translateZ:0},{stiffness:.08,damping:.5});we(e,p,M=>n(10,o=M));let g=null,b,_=!1;function T({offsetX:M}){Ue.set(M),s.set(1-Math.abs(M/375))}function z(){if(Math.abs(c)>xe){const ee=c<-xe?"left":"right";w(c),v(ee)}else s.set(1),w(0)}function w(M){n(15,r={...r,x:M}),Ue.set(M)}function v(M){tt.set(""),n(5,g=`swipe-${M}`),s.set(0),L()}function L(){Ue.set(0),et.update(M=>(M.unshift(M.splice(m,1)[0]),M))}const O=Ae(0,{stiffness:.08,damping:.3});we(e,O,M=>n(8,i=M));let S=0,N=!1;function E(){n(3,S=window.innerWidth)}const h=()=>{N||p.set({width:17,translateZ:0}),w(0),setTimeout(()=>{s.set(1),n(5,g=null)},100)},Z=()=>{_&&!N&&p.set({width:18,translateZ:-.5})},x=()=>{_&&!N&&p.set({width:17,translateZ:0})};return e.$$set=M=>{"project"in M&&n(0,d=M.project),"index"in M&&n(1,m=M.index)},e.$$.update=()=>{if(e.$$.dirty&18&&n(2,_=m===l.length-1),e.$$.dirty&32772&&n(6,b={axis:"x",legacyTranslate:!1,position:r,onDrag:T,onDragEnd:z,disabled:!_}),e.$$.dirty&131076&&a&&_&&v(a),e.$$.dirty&65554){let M=Math.abs(c)/xe;switch(m){case l.length-2:O.set(Math.min(-7*(1-M),0));break;case l.length-3:O.set(Math.max(7*(1-M*2),-7));break;default:O.set(0)}}e.$$.dirty&8&&(S<384?(p.update(M=>({...M,width:14})),n(7,N=!0)):(p.update(M=>({...M,width:17})),n(7,N=!1)))},[d,m,_,S,l,g,b,N,i,u,o,s,p,w,O,r,c,a,E,h,Z,x]}class hn extends Ze{constructor(t){super(),Fe(this,t,un,cn,Xe,{project:0,index:1})}}function ht(e,{delay:t=0,duration:n=400,easing:l=Lt}={}){const c=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:l,css:a=>`opacity: ${a*c}`}}function dt(e,{delay:t=0,duration:n=400,easing:l=Kt,x:c=0,y:a=0,opacity:i=0}={}){const u=getComputedStyle(e),o=+u.opacity,d=u.transform==="none"?"":u.transform,m=o*(1-i),[r,s]=it(c),[p,g]=it(a);return{delay:t,duration:n,easing:l,css:(b,_)=>`
			transform: ${d} translate(${(1-b)*r}${s}, ${(1-b)*p}${g});
			opacity: ${o-m*_}`}}function mt(e,t,n){const l=e.slice();return l[18]=t[n],l[20]=n,l}function gt(e,t){let n,l,c;return l=new hn({props:{project:t[18],index:t[20]}}),{key:e,first:null,c(){n=Re(),ce(l.$$.fragment),this.h()},l(a){n=Re(),ue(l.$$.fragment,a),this.h()},h(){this.first=n},m(a,i){se(a,n,i),he(l,a,i),c=!0},p(a,i){t=a;const u={};i&4&&(u.project=t[18]),i&4&&(u.index=t[20]),l.$set(u)},i(a){c||(U(l.$$.fragment,a),c=!0)},o(a){q(l.$$.fragment,a),c=!1},d(a){a&&C(n),de(l,a)}}}function pt(e){let t,n,l=e[2][e[2].length-1].title+"",c,a,i,u;return{c(){t=I("a"),n=I("h2"),c=le(l),this.h()},l(o){t=B(o,"A",{href:!0,target:!0,class:!0});var d=D(t);n=B(d,"H2",{class:!0});var m=D(n);c=re(m,l),m.forEach(C),d.forEach(C),this.h()},h(){f(n,"class","svelte-15ytngg"),f(t,"href",a=e[2][e[2].length-1].url),f(t,"target","_blank"),f(t,"class","title svelte-15ytngg")},m(o,d){se(o,t,d),y(t,n),y(n,c),u=!0},p(o,d){(!u||d&4)&&l!==(l=o[2][o[2].length-1].title+"")&&kt(c,l),(!u||d&4&&a!==(a=o[2][o[2].length-1].url))&&f(t,"href",a)},i(o){u||(o&&qe(()=>{u&&(i||(i=Ye(t,ht,{duration:150},!0)),i.run(1))}),u=!0)},o(o){o&&(i||(i=Ye(t,ht,{duration:150},!1)),i.run(0)),u=!1},d(o){o&&C(t),o&&i&&i.end()}}}function dn(e){let t,n,l=[],c=new Map,a,i=e[2][e[2].length-1].title,u,o,d,m,r,s,p,g,b;qe(e[10]);let _=He(e[2]);const T=w=>w[18].url;for(let w=0;w<_.length;w+=1){let v=mt(e,_,w),L=T(v);c.set(L,l[w]=gt(L,v))}let z=pt(e);return d=new ve({props:{icon:St}}),s=new ve({props:{icon:sn}}),{c(){t=I("div"),n=I("div");for(let w=0;w<l.length;w+=1)l[w].c();a=Q(),z.c(),u=Q(),o=I("button"),ce(d.$$.fragment),m=Q(),r=I("button"),ce(s.$$.fragment),this.h()},l(w){t=B(w,"DIV",{id:!0,class:!0});var v=D(t);n=B(v,"DIV",{id:!0,style:!0,class:!0});var L=D(n);for(let N=0;N<l.length;N+=1)l[N].l(L);L.forEach(C),a=$(v),z.l(v),u=$(v),o=B(v,"BUTTON",{class:!0,style:!0});var O=D(o);ue(d.$$.fragment,O),O.forEach(C),m=$(v),r=B(v,"BUTTON",{class:!0,style:!0});var S=D(r);ue(s.$$.fragment,S),S.forEach(C),v.forEach(C),this.h()},h(){f(n,"id","cards-container"),W(n,"width",e[1]+"rem"),f(n,"class","svelte-15ytngg"),f(o,"class","dislike icon svelte-15ytngg"),W(o,"width",e[3].width+"rem"),W(o,"font-size",e[3].font+"rem"),f(r,"class","love icon svelte-15ytngg"),W(r,"width",e[4].width+"rem"),W(r,"font-size",e[4].font+"rem"),f(t,"id","projects"),f(t,"class","svelte-15ytngg")},m(w,v){se(w,t,v),y(t,n);for(let L=0;L<l.length;L+=1)l[L]&&l[L].m(n,null);y(t,a),z.m(t,null),y(t,u),y(t,o),he(d,o,null),y(t,m),y(t,r),he(s,r,null),p=!0,g||(b=[K(window,"resize",e[10]),K(o,"click",e[11]),K(o,"pointerover",e[12]),K(o,"pointerleave",e[13]),K(r,"click",e[14]),K(r,"pointerover",e[15]),K(r,"pointerleave",e[16])],g=!0)},p(w,[v]){v&4&&(_=He(w[2]),je(),l=It(l,v,T,1,w,_,c,n,Ht,gt,null,mt),Ve()),(!p||v&2)&&W(n,"width",w[1]+"rem"),v&4&&Xe(i,i=w[2][w[2].length-1].title)?(je(),q(z,1,1,De),Ve(),z=pt(w),z.c(),U(z,1),z.m(t,u)):z.p(w,v),(!p||v&8)&&W(o,"width",w[3].width+"rem"),(!p||v&8)&&W(o,"font-size",w[3].font+"rem"),(!p||v&16)&&W(r,"width",w[4].width+"rem"),(!p||v&16)&&W(r,"font-size",w[4].font+"rem")},i(w){if(!p){for(let v=0;v<_.length;v+=1)U(l[v]);U(z),U(d.$$.fragment,w),U(s.$$.fragment,w),p=!0}},o(w){for(let v=0;v<l.length;v+=1)q(l[v]);q(z),q(d.$$.fragment,w),q(s.$$.fragment,w),p=!1},d(w){w&&C(t);for(let v=0;v<l.length;v+=1)l[v].d();z.d(w),de(d),de(s),g=!1,We(b)}}}function mn(e,t,n){let l,c,a,i;we(e,et,L=>n(2,c=L));function u(L){tt.set(L)}const o=Ae({width:3.5,font:2},{stiffness:.1,damping:.3});we(e,o,L=>n(3,a=L));const d=Ae({width:3.5,font:1.65},{stiffness:.1,damping:.3});we(e,d,L=>n(4,i=L));const m=Ae(17,{stiffness:.08,damping:.5});we(e,m,L=>n(1,l=L));function r(){u("left")}function s(){u("right")}let p=0;function g(){n(0,p=window.innerWidth)}const b=()=>r(),_=()=>o.set({width:4.25,font:2.4}),T=()=>o.set({width:3.5,font:1.65}),z=()=>s(),w=()=>d.set({width:4.25,font:2.4}),v=()=>d.set({width:3.5,font:1.65});return e.$$.update=()=>{e.$$.dirty&1&&(p<384?m.set(14):m.set(17))},[p,l,c,a,i,o,d,m,r,s,g,b,_,T,z,w,v]}class gn extends Ze{constructor(t){super(),Fe(this,t,mn,dn,Xe,{})}}const{document:Be}=At;function _t(e,t,n){const l=e.slice();return l[8]=t[n],l}function wt(e,t,n){const l=e.slice();return l[8]=t[n],l}function vt(e){let t,n,l,c,a,i,u,o,d,m;l=new ve({props:{icon:St}});let r=He(e[1]),s=[];for(let g=0;g<r.length;g+=1)s[g]=yt(wt(e,r,g));const p=g=>q(s[g],1,1,()=>{s[g]=null});return{c(){t=I("div"),n=I("button"),ce(l.$$.fragment),c=le(" Close Menu"),a=Q(),i=I("ul");for(let g=0;g<s.length;g+=1)s[g].c();this.h()},l(g){t=B(g,"DIV",{id:!0,class:!0});var b=D(t);n=B(b,"BUTTON",{id:!0,class:!0});var _=D(n);ue(l.$$.fragment,_),c=re(_," Close Menu"),_.forEach(C),a=$(b),i=B(b,"UL",{class:!0});var T=D(i);for(let z=0;z<s.length;z+=1)s[z].l(T);T.forEach(C),b.forEach(C),this.h()},h(){f(n,"id","close"),f(n,"class","svelte-169y4wo"),f(i,"class","svelte-169y4wo"),f(t,"id","menu"),f(t,"class","svelte-169y4wo")},m(g,b){se(g,t,b),y(t,n),he(l,n,null),y(n,c),y(t,a),y(t,i);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(i,null);o=!0,d||(m=K(n,"click",e[3]),d=!0)},p(g,b){if(b&2){r=He(g[1]);let _;for(_=0;_<r.length;_+=1){const T=wt(g,r,_);s[_]?(s[_].p(T,b),U(s[_],1)):(s[_]=yt(T),s[_].c(),U(s[_],1),s[_].m(i,null))}for(je(),_=r.length;_<s.length;_+=1)p(_);Ve()}},i(g){if(!o){U(l.$$.fragment,g);for(let b=0;b<r.length;b+=1)U(s[b]);g&&qe(()=>{o&&(u||(u=Ye(t,dt,{y:-150},!0)),u.run(1))}),o=!0}},o(g){q(l.$$.fragment,g),s=s.filter(Boolean);for(let b=0;b<s.length;b+=1)q(s[b]);g&&(u||(u=Ye(t,dt,{y:-150},!1)),u.run(0)),o=!1},d(g){g&&C(t),de(l),Et(s,g),g&&u&&u.end(),d=!1,m()}}}function yt(e){let t,n,l,c,a=e[8].name+"",i,u,o,d,m;return l=new ve({props:{icon:e[8].icon}}),{c(){t=I("li"),n=I("a"),ce(l.$$.fragment),c=le("   "),i=le(a),u=Q(),this.h()},l(r){t=B(r,"LI",{});var s=D(t);n=B(s,"A",{href:!0,target:!0});var p=D(n);ue(l.$$.fragment,p),c=re(p,"   "),i=re(p,a),p.forEach(C),u=$(s),s.forEach(C),this.h()},h(){f(n,"href",e[8].url),f(n,"target","_blank")},m(r,s){se(r,t,s),y(t,n),he(l,n,null),y(n,c),y(n,i),y(t,u),o=!0,d||(m=K(n,"click",_n),d=!0)},p:De,i(r){o||(U(l.$$.fragment,r),o=!0)},o(r){q(l.$$.fragment,r),o=!1},d(r){r&&C(t),de(l),d=!1,m()}}}function bt(e){let t,n,l,c,a=e[8].name+"",i,u,o,d;return l=new ve({props:{icon:e[8].icon}}),{c(){t=I("li"),n=I("a"),ce(l.$$.fragment),c=le("   "),i=le(a),this.h()},l(m){t=B(m,"LI",{});var r=D(t);n=B(r,"A",{href:!0,target:!0});var s=D(n);ue(l.$$.fragment,s),c=re(s,"   "),i=re(s,a),s.forEach(C),r.forEach(C),this.h()},h(){f(n,"href",e[8].url),f(n,"target","_blank")},m(m,r){se(m,t,r),y(t,n),he(l,n,null),y(n,c),y(n,i),u=!0,o||(d=K(n,"click",wn),o=!0)},p:De,i(m){u||(U(l.$$.fragment,m),u=!0)},o(m){q(l.$$.fragment,m),u=!1},d(m){m&&C(t),de(l),o=!1,d()}}}function pn(e){let t,n,l,c,a,i,u,o=`<img src="${Dt}" alt="Headshot" id="headshot" class="svelte-169y4wo"/> <h1 class="svelte-169y4wo">Connor McGehee</h1>`,d,m,r,s,p,g,b="<projects />",_,T,z,w,v,L,O,S,N,E,h,Z,x,M,ee="<contact />",Ee,Ce,oe,te,ne,ie,me,ze,Le,Se,ge,G=e[0]&&vt(e);w=new ve({props:{icon:rn}}),L=new gn({}),x=new ve({props:{icon:on}});let ye=He(e[1]),V=[];for(let A=0;A<ye.length;A+=1)V[A]=bt(_t(e,ye,A));const Ke=A=>q(V[A],1,1,()=>{V[A]=null});return me=new ve({props:{icon:an}}),{c(){t=I("link"),n=I("link"),l=I("link"),c=I("meta"),a=Q(),i=I("main"),u=I("button"),u.innerHTML=o,d=Q(),G&&G.c(),m=Q(),r=I("section"),s=I("hr"),p=Q(),g=I("h2"),_=le(b),T=le(`
             
            `),z=I("span"),ce(w.$$.fragment),v=Q(),ce(L.$$.fragment),O=Q(),S=I("section"),N=I("hr"),E=Q(),h=I("h2"),Z=I("span"),ce(x.$$.fragment),M=le(`
             
            `),Ee=le(ee),Ce=Q(),oe=I("ul");for(let A=0;A<V.length;A+=1)V[A].c();te=Q(),ne=I("li"),ie=I("a"),ce(me.$$.fragment),ze=le("   Email"),this.h()},l(A){const R=Ot("svelte-1dt4rj2",Be.head);t=B(R,"LINK",{rel:!0,href:!0}),n=B(R,"LINK",{rel:!0,href:!0,crossorigin:!0}),l=B(R,"LINK",{href:!0,rel:!0}),c=B(R,"META",{name:!0,content:!0}),R.forEach(C),a=$(A),i=B(A,"MAIN",{class:!0});var j=D(i);u=B(j,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Nt(u)!=="svelte-t02x0r"&&(u.innerHTML=o),d=$(j),G&&G.l(j),m=$(j),r=B(j,"SECTION",{id:!0,class:!0});var fe=D(r);s=B(fe,"HR",{class:!0}),p=$(fe),g=B(fe,"H2",{class:!0});var be=D(g);_=re(be,b),T=re(be,`
             
            `),z=B(be,"SPAN",{class:!0});var Ie=D(z);ue(w.$$.fragment,Ie),Ie.forEach(C),be.forEach(C),v=$(fe),ue(L.$$.fragment,fe),fe.forEach(C),O=$(j),S=B(j,"SECTION",{id:!0,class:!0});var ke=D(S);N=B(ke,"HR",{class:!0}),E=$(ke),h=B(ke,"H2",{class:!0});var Me=D(h);Z=B(Me,"SPAN",{class:!0});var k=D(Z);ue(x.$$.fragment,k),k.forEach(C),M=re(Me,`
             
            `),Ee=re(Me,ee),Me.forEach(C),Ce=$(ke),oe=B(ke,"UL",{class:!0});var H=D(oe);for(let X=0;X<V.length;X+=1)V[X].l(H);te=$(H),ne=B(H,"LI",{id:!0});var Y=D(ne);ie=B(Y,"A",{href:!0});var F=D(ie);ue(me.$$.fragment,F),ze=re(F,"   Email"),F.forEach(C),Y.forEach(C),H.forEach(C),ke.forEach(C),j.forEach(C),this.h()},h(){f(t,"rel","preconnect"),f(t,"href","https://fonts.googleapis.com"),f(n,"rel","preconnect"),f(n,"href","https://fonts.gstatic.com"),f(n,"crossorigin","true"),f(l,"href","https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap"),f(l,"rel","stylesheet"),f(c,"name","viewport"),f(c,"content","width=device-width, initial-scale=1, maximum-scale=1"),f(u,"id","header"),f(u,"class","svelte-169y4wo"),f(s,"class","svelte-169y4wo"),f(z,"class","svelte-169y4wo"),f(g,"class","svelte-169y4wo"),f(r,"id","projects-section"),f(r,"class","svelte-169y4wo"),f(N,"class","svelte-169y4wo"),f(Z,"class","svelte-169y4wo"),f(h,"class","svelte-169y4wo"),f(ie,"href","mailto:connormcgehee5@gmail.com"),f(ne,"id","email"),f(oe,"class","svelte-169y4wo"),f(S,"id","contact-section"),f(S,"class","svelte-169y4wo"),f(i,"class","svelte-169y4wo")},m(A,R){y(Be.head,t),y(Be.head,n),y(Be.head,l),y(Be.head,c),se(A,a,R),se(A,i,R),y(i,u),y(i,d),G&&G.m(i,null),y(i,m),y(i,r),y(r,s),y(r,p),y(r,g),y(g,_),y(g,T),y(g,z),he(w,z,null),y(r,v),he(L,r,null),y(i,O),y(i,S),y(S,N),y(S,E),y(S,h),y(h,Z),he(x,Z,null),y(h,M),y(h,Ee),y(S,Ce),y(S,oe);for(let j=0;j<V.length;j+=1)V[j]&&V[j].m(oe,null);y(oe,te),y(oe,ne),y(ne,ie),he(me,ie,null),y(ie,ze),Le=!0,Se||(ge=[K(u,"click",e[2]),K(z,"pointerdown",e[4]),K(Z,"pointerdown",e[5]),K(i,"click",e[6]),K(i,"keydown",e[7])],Se=!0)},p(A,[R]){if(A[0]?G?(G.p(A,R),R&1&&U(G,1)):(G=vt(A),G.c(),U(G,1),G.m(i,m)):G&&(je(),q(G,1,1,()=>{G=null}),Ve()),R&2){ye=He(A[1]);let j;for(j=0;j<ye.length;j+=1){const fe=_t(A,ye,j);V[j]?(V[j].p(fe,R),U(V[j],1)):(V[j]=bt(fe),V[j].c(),U(V[j],1),V[j].m(oe,te))}for(je(),j=ye.length;j<V.length;j+=1)Ke(j);Ve()}},i(A){if(!Le){U(G),U(w.$$.fragment,A),U(L.$$.fragment,A),U(x.$$.fragment,A);for(let R=0;R<ye.length;R+=1)U(V[R]);U(me.$$.fragment,A),Le=!0}},o(A){q(G),q(w.$$.fragment,A),q(L.$$.fragment,A),q(x.$$.fragment,A),V=V.filter(Boolean);for(let R=0;R<V.length;R+=1)q(V[R]);q(me.$$.fragment,A),Le=!1},d(A){A&&(C(a),C(i)),C(t),C(n),C(l),C(c),G&&G.d(),de(w),de(L),de(x),Et(V,A),de(me),Se=!1,We(ge)}}}const _n=e=>e.stopPropagation(),wn=e=>e.stopPropagation();function vn(e,t,n){let l=!1;return[l,[{name:"Github",url:"https://github.com/ConnorMcGehee/",icon:Ct},{name:"LinkedIn",url:"https://www.linkedin.com/in/connor-mcgehee/",icon:nn},{name:"Twitter",url:"https://twitter.com/ConnorMcGehee5",icon:ln}],r=>{r.stopPropagation(),n(0,l=!l)},()=>n(0,l=!1),()=>{const r=document.querySelector("#email");r==null||r.scrollIntoView({behavior:"smooth"})},()=>{const r=document.querySelector("#header");r==null||r.scrollIntoView({behavior:"smooth"})},()=>n(0,l=!1),()=>n(0,l=!l)]}class Cn extends Ze{constructor(t){super(),Fe(this,t,vn,pn,Xe,{})}}export{Cn as component,En as universal};
