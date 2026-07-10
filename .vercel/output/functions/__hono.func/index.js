var wi=Object.defineProperty;var Or=t=>{throw TypeError(t)};var _i=(t,e,s)=>e in t?wi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>_i(t,typeof e!="symbol"?e+"":e,s),Ws=(t,e,s)=>e.has(t)||Or("Cannot "+s);var g=(t,e,s)=>(Ws(t,e,"read from private field"),s?s.call(t):e.get(t)),T=(t,e,s)=>e.has(t)?Or("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),S=(t,e,s,r)=>(Ws(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),O=(t,e,s)=>(Ws(t,e,"access private method"),s);var jr=(t,e,s,r)=>({set _(a){S(t,e,a,s)},get _(){return g(t,e,r)}});import{Http2ServerRequest as Lt,constants as ki}from"http2";import{Readable as Cr}from"stream";import Si from"crypto";var Pr=(t,e,s)=>(r,a)=>{let i=-1;return n(0);async function n(o){if(o<=i)throw new Error("next() called multiple times");i=o;let l,c=!1,d;if(t[o]?(d=t[o][0][0],r.req.routeIndex=o):d=o===t.length&&a||void 0,d)try{l=await d(r,()=>n(o+1))}catch(h){if(h instanceof Error&&e)r.error=h,l=await e(h,r),c=!0;else throw h}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},Ei=Symbol(),xi=async(t,e=Object.create(null))=>{const{all:s=!1,dot:r=!1}=e,i=(t instanceof ja?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?$i(t,{all:s,dot:r}):{}};async function $i(t,e){const s=await t.formData();return s?Ti(s,e):{}}function Ti(t,e){const s=Object.create(null);return t.forEach((r,a)=>{e.all||a.endsWith("[]")?Ri(s,a,r):s[a]=r}),e.dot&&Object.entries(s).forEach(([r,a])=>{r.includes(".")&&(Ai(s,r,a),delete s[r])}),s}var Ri=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Ai=(t,e,s)=>{if(/(?:^|\.)__proto__\./.test(e))return;let r=t;const a=e.split(".");a.forEach((i,n)=>{n===a.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Ta=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Oi=t=>{const{groups:e,path:s}=ji(t),r=Ta(s);return Ci(r,e)},ji=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,r)=>{const a=`@${r}`;return e.push([a,s]),a}),{groups:e,path:t}},Ci=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[r]=e[s];for(let a=t.length-1;a>=0;a--)if(t[a].includes(r)){t[a]=t[a].replace(r,e[s][1]);break}}return t},ls={},Pi=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${t}#${e}`;return ls[r]||(s[2]?ls[r]=e&&e[0]!==":"&&e[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:ls[r]=[t,s[1],!0]),ls[r]}return null},qs=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},Ii=t=>qs(t,decodeURI),Ra=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let r=s;for(;r<e.length;r++){const a=e.charCodeAt(r);if(a===37){const i=e.indexOf("?",r),n=e.indexOf("#",r),o=i===-1?n===-1?void 0:n:n===-1?i:Math.min(i,n),l=e.slice(s,o);return Ii(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(a===63||a===35)break}return e.slice(s,r)},qi=t=>{const e=Ra(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},Ue=(t,e,...s)=>(s.length&&(e=Ue(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),Aa=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let r="";return e.forEach(a=>{if(a!==""&&!/\:/.test(a))r+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){s.length===0&&r===""?s.push("/"):s.push(r);const i=a.replace("?","");r+="/"+i,s.push(r)}else r+="/"+a}),s.filter((a,i,n)=>n.indexOf(a)===i)},Ks=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?qs(t,yr):t):t,Oa=(t,e,s)=>{let r;if(!s&&e&&!/[%+]/.test(e)){let n=t.indexOf("?",8);if(n===-1)return;for(t.startsWith(e,n+1)||(n=t.indexOf(`&${e}`,n+1));n!==-1;){const o=t.charCodeAt(n+e.length+1);if(o===61){const l=n+e.length+2,c=t.indexOf("&",l);return Ks(t.slice(l,c===-1?void 0:c))}else if(o==38||isNaN(o))return"";n=t.indexOf(`&${e}`,n+1)}if(r=/[%+]/.test(t),!r)return}const a={};r??(r=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const n=t.indexOf("&",i+1);let o=t.indexOf("=",i);o>n&&n!==-1&&(o=-1);let l=t.slice(i+1,o===-1?n===-1?void 0:n:o);if(r&&(l=Ks(l)),i=n,l==="")continue;let c;o===-1?c="":(c=t.slice(o+1,n===-1?void 0:n),r&&(c=Ks(c))),s?(a[l]&&Array.isArray(a[l])||(a[l]=[]),a[l].push(c)):a[l]??(a[l]=c)}return e?a[e]:a},Li=Oa,Ni=(t,e)=>Oa(t,e,!0),yr=decodeURIComponent,Ir=t=>qs(t,yr),ut,se,$e,Ca,Pa,rr,we,_a,ja=(_a=class{constructor(t,e="/",s=[[]]){T(this,$e);x(this,"raw");T(this,ut);T(this,se);x(this,"routeIndex",0);x(this,"path");x(this,"bodyCache",{});T(this,we,t=>{const{bodyCache:e,raw:s}=this,r=e[t];if(r)return r;const a=Object.keys(e)[0];return a?e[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,S(this,se,s),S(this,ut,{})}param(t){return t?O(this,$e,Ca).call(this,t):O(this,$e,Pa).call(this)}query(t){return Li(this.url,t)}queries(t){return Ni(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,r)=>{e[r]=s}),e}async parseBody(t){return xi(this,t)}json(){return g(this,we).call(this,"text").then(t=>JSON.parse(t))}text(){return g(this,we).call(this,"text")}arrayBuffer(){return g(this,we).call(this,"arrayBuffer")}bytes(){return g(this,we).call(this,"arrayBuffer").then(t=>new Uint8Array(t))}blob(){return g(this,we).call(this,"blob")}formData(){return g(this,we).call(this,"formData")}addValidatedData(t,e){g(this,ut)[t]=e}valid(t){return g(this,ut)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ei](){return g(this,se)}get matchedRoutes(){return g(this,se)[0].map(([[,t]])=>t)}get routePath(){return g(this,se)[0].map(([[,t]])=>t)[this.routeIndex].path}},ut=new WeakMap,se=new WeakMap,$e=new WeakSet,Ca=function(t){const e=g(this,se)[0][this.routeIndex][1][t],s=O(this,$e,rr).call(this,e);return s&&/\%/.test(s)?Ir(s):s},Pa=function(){const t={},e=Object.keys(g(this,se)[0][this.routeIndex][1]);for(const s of e){const r=O(this,$e,rr).call(this,g(this,se)[0][this.routeIndex][1][s]);r!==void 0&&(t[s]=/\%/.test(r)?Ir(r):r)}return t},rr=function(t){return g(this,se)[1]?g(this,se)[1][t]:t},we=new WeakMap,_a),Ui={Stringify:1},Ia=async(t,e,s,r,a)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(a?a[0]+=t:a=[t],Promise.all(i.map(o=>o({phase:e,buffer:a,context:r}))).then(o=>Promise.all(o.filter(Boolean).map(l=>Ia(l,e,!1,r,a))).then(()=>a[0]))):Promise.resolve(t)},Di="text/plain; charset=UTF-8",Gs=(t,e)=>({"Content-Type":t,...e}),At=(t,e)=>new Response(t,e),Xt,Qt,_e,ft,ke,J,Zt,pt,gt,We,es,ts,je,at,ka,Bi=(ka=class{constructor(t,e){T(this,je);T(this,Xt);T(this,Qt);x(this,"env",{});T(this,_e);x(this,"finalized",!1);x(this,"error");T(this,ft);T(this,ke);T(this,J);T(this,Zt);T(this,pt);T(this,gt);T(this,We);T(this,es);T(this,ts);x(this,"render",(...t)=>(g(this,pt)??S(this,pt,e=>this.html(e)),g(this,pt).call(this,...t)));x(this,"setLayout",t=>S(this,Zt,t));x(this,"getLayout",()=>g(this,Zt));x(this,"setRenderer",t=>{S(this,pt,t)});x(this,"header",(t,e,s)=>{this.finalized&&S(this,J,At(g(this,J).body,g(this,J)));const r=g(this,J)?g(this,J).headers:g(this,We)??S(this,We,new Headers);e===void 0?r.delete(t):s!=null&&s.append?r.append(t,e):r.set(t,e)});x(this,"status",t=>{S(this,ft,t)});x(this,"set",(t,e)=>{g(this,_e)??S(this,_e,new Map),g(this,_e).set(t,e)});x(this,"get",t=>g(this,_e)?g(this,_e).get(t):void 0);x(this,"newResponse",(...t)=>O(this,je,at).call(this,...t));x(this,"body",(t,e,s)=>O(this,je,at).call(this,t,e,s));x(this,"text",(t,e,s)=>!g(this,We)&&!g(this,ft)&&!e&&!s&&!this.finalized?new Response(t):O(this,je,at).call(this,t,e,Gs(Di,s)));x(this,"json",(t,e,s)=>O(this,je,at).call(this,JSON.stringify(t),e,Gs("application/json",s)));x(this,"html",(t,e,s)=>{const r=a=>O(this,je,at).call(this,a,e,Gs("text/html; charset=UTF-8",s));return typeof t=="object"?Ia(t,Ui.Stringify,!1,{}).then(r):r(t)});x(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});x(this,"notFound",()=>(g(this,gt)??S(this,gt,()=>At()),g(this,gt).call(this,this)));S(this,Xt,t),e&&(S(this,ke,e.executionCtx),this.env=e.env,S(this,gt,e.notFoundHandler),S(this,ts,e.path),S(this,es,e.matchResult))}get req(){return g(this,Qt)??S(this,Qt,new ja(g(this,Xt),g(this,ts),g(this,es))),g(this,Qt)}get event(){if(g(this,ke)&&"respondWith"in g(this,ke))return g(this,ke);throw Error("This context has no FetchEvent")}get executionCtx(){if(g(this,ke))return g(this,ke);throw Error("This context has no ExecutionContext")}get res(){return g(this,J)||S(this,J,At(null,{headers:g(this,We)??S(this,We,new Headers)}))}set res(t){if(g(this,J)&&t){t=At(t.body,t);for(const[e,s]of g(this,J).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const r=g(this,J).headers.getSetCookie();t.headers.delete("set-cookie");for(const a of r)t.headers.append("set-cookie",a)}else t.headers.set(e,s)}S(this,J,t),this.finalized=!0}get var(){return g(this,_e)?Object.fromEntries(g(this,_e)):{}}},Xt=new WeakMap,Qt=new WeakMap,_e=new WeakMap,ft=new WeakMap,ke=new WeakMap,J=new WeakMap,Zt=new WeakMap,pt=new WeakMap,gt=new WeakMap,We=new WeakMap,es=new WeakMap,ts=new WeakMap,je=new WeakSet,at=function(t,e,s){const r=g(this,J)?new Headers(g(this,J).headers):g(this,We)??new Headers;if(typeof e=="object"&&"headers"in e){const i=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[n,o]of i)n.toLowerCase()==="set-cookie"?r.append(n,o):r.set(n,o)}if(s)for(const[i,n]of Object.entries(s))if(typeof n=="string")r.set(i,n);else{r.delete(i);for(const o of n)r.append(i,o)}const a=typeof e=="number"?e:(e==null?void 0:e.status)??g(this,ft);return At(t,{status:a,headers:r})},ka),D="ALL",Hi="all",zi=["get","post","put","delete","options","patch"],qa="Can not add a route since the matcher is already built.",La=class extends Error{},Mi="__COMPOSED_HANDLER",Fi=t=>t.text("404 Not Found",404),qr=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},ne,B,Na,oe,De,vs,bs,mt,Wi=(mt=class{constructor(e={}){T(this,B);x(this,"get");x(this,"post");x(this,"put");x(this,"delete");x(this,"options");x(this,"patch");x(this,"all");x(this,"on");x(this,"use");x(this,"router");x(this,"getPath");x(this,"_basePath","/");T(this,ne,"/");x(this,"routes",[]);T(this,oe,Fi);x(this,"errorHandler",qr);x(this,"onError",e=>(this.errorHandler=e,this));x(this,"notFound",e=>(S(this,oe,e),this));x(this,"fetch",(e,...s)=>O(this,B,bs).call(this,e,s[1],s[0],e.method));x(this,"request",(e,s,r,a)=>e instanceof Request?this.fetch(s?new Request(e,s):e,r,a):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${Ue("/",e)}`,s),r,a)));x(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(O(this,B,bs).call(this,e.request,e,void 0,e.request.method))})});[...zi,Hi].forEach(i=>{this[i]=(n,...o)=>(typeof n=="string"?S(this,ne,n):O(this,B,De).call(this,i,g(this,ne),n),o.forEach(l=>{O(this,B,De).call(this,i,g(this,ne),l)}),this)}),this.on=(i,n,...o)=>{for(const l of[n].flat()){S(this,ne,l);for(const c of[i].flat())o.map(d=>{O(this,B,De).call(this,c.toUpperCase(),g(this,ne),d)})}return this},this.use=(i,...n)=>(typeof i=="string"?S(this,ne,i):(S(this,ne,"*"),n.unshift(i)),n.forEach(o=>{O(this,B,De).call(this,D,g(this,ne),o)}),this);const{strict:r,...a}=e;Object.assign(this,a),this.getPath=r??!0?e.getPath??Ra:qi}route(e,s){const r=this.basePath(e);return s.routes.map(a=>{var n;let i;s.errorHandler===qr?i=a.handler:(i=async(o,l)=>(await Pr([],s.errorHandler)(o,()=>a.handler(o,l))).res,i[Mi]=a.handler),O(n=r,B,De).call(n,a.method,a.path,i,a.basePath)}),this}basePath(e){const s=O(this,B,Na).call(this);return s._basePath=Ue(this._basePath,e),s}mount(e,s,r){let a,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?a=l=>l:a=r.replaceRequest));const n=i?l=>{const c=i(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};a||(a=(()=>{const l=Ue(this._basePath,e),c=l==="/"?0:l.length;return d=>{const h=new URL(d.url);return h.pathname=this.getPath(d).slice(c)||"/",new Request(h,d)}})());const o=async(l,c)=>{const d=await s(a(l.req.raw),...n(l));if(d)return d;await c()};return O(this,B,De).call(this,D,Ue(e,"*"),o),this}},ne=new WeakMap,B=new WeakSet,Na=function(){const e=new mt({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,S(e,oe,g(this,oe)),e.routes=this.routes,e},oe=new WeakMap,De=function(e,s,r,a){e=e.toUpperCase(),s=Ue(this._basePath,s);const i={basePath:a!==void 0?Ue(this._basePath,a):this._basePath,path:s,method:e,handler:r};this.router.add(e,s,[r,i]),this.routes.push(i)},vs=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},bs=function(e,s,r,a){if(a==="HEAD")return(async()=>new Response(null,await O(this,B,bs).call(this,e,s,r,"GET")))();const i=this.getPath(e,{env:r}),n=this.router.match(a,i),o=new Bi(e,{path:i,matchResult:n,env:r,executionCtx:s,notFoundHandler:g(this,oe)});if(n[0].length===1){let c;try{c=n[0][0][0][0](o,async()=>{o.res=await g(this,oe).call(this,o)})}catch(d){return O(this,B,vs).call(this,d,o)}return c instanceof Promise?c.then(d=>d||(o.finalized?o.res:g(this,oe).call(this,o))).catch(d=>O(this,B,vs).call(this,d,o)):c??g(this,oe).call(this,o)}const l=Pr(n[0],this.errorHandler,g(this,oe));return(async()=>{try{const c=await l(o);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return O(this,B,vs).call(this,c,o)}})()},mt),Ua=[];function Ki(t,e){const s=this.buildAllMatchers(),r=((a,i)=>{const n=s[a]||s[D],o=n[2][i];if(o)return o;const l=i.match(n[0]);if(!l)return[[],Ua];const c=l.indexOf("",1);return[n[1][c],l]});return this.match=r,r(t,e)}var Ss="[^/]+",Nt=".*",Ut="(?:|/.*)",it=Symbol(),Gi=new Set(".\\+*[^]$()");function Vi(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===Nt||t===Ut?1:e===Nt||e===Ut?-1:t===Ss?1:e===Ss?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var Ke,Ge,le,Ye,Ji=(Ye=class{constructor(){T(this,Ke);T(this,Ge);T(this,le,Object.create(null))}insert(e,s,r,a,i){if(e.length===0){if(g(this,Ke)!==void 0)throw it;if(i)return;S(this,Ke,s);return}const[n,...o]=e,l=n==="*"?o.length===0?["","",Nt]:["","",Ss]:n==="/*"?["","",Ut]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const d=l[1];let h=l[2]||Ss;if(d&&l[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw it;if(c=g(this,le)[h],!c){if(Object.keys(g(this,le)).some(u=>u!==Nt&&u!==Ut))throw it;if(i)return;c=g(this,le)[h]=new Ye,d!==""&&S(c,Ge,a.varIndex++)}!i&&d!==""&&r.push([d,g(c,Ge)])}else if(c=g(this,le)[n],!c){if(Object.keys(g(this,le)).some(d=>d.length>1&&d!==Nt&&d!==Ut))throw it;if(i)return;c=g(this,le)[n]=new Ye}c.insert(o,s,r,a,i)}buildRegExpStr(){const s=Object.keys(g(this,le)).sort(Vi).map(r=>{const a=g(this,le)[r];return(typeof g(a,Ge)=="number"?`(${r})@${g(a,Ge)}`:Gi.has(r)?`\\${r}`:r)+a.buildRegExpStr()});return typeof g(this,Ke)=="number"&&s.unshift(`#${g(this,Ke)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Ke=new WeakMap,Ge=new WeakMap,le=new WeakMap,Ye),Ps,ss,Sa,Yi=(Sa=class{constructor(){T(this,Ps,{varIndex:0});T(this,ss,new Ji)}insert(t,e,s){const r=[],a=[];for(let n=0;;){let o=!1;if(t=t.replace(/\{[^}]+\}/g,l=>{const c=`@\\${n}`;return a[n]=[c,l],n++,o=!0,c}),!o)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=a.length-1;n>=0;n--){const[o]=a[n];for(let l=i.length-1;l>=0;l--)if(i[l].indexOf(o)!==-1){i[l]=i[l].replace(o,a[n][1]);break}}return g(this,ss).insert(i,e,r,g(this,Ps),s),r}buildRegExp(){let t=g(this,ss).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],r=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,n)=>i!==void 0?(s[++e]=Number(i),"$()"):(n!==void 0&&(r[Number(n)]=++e),"")),[new RegExp(`^${t}`),s,r]}},Ps=new WeakMap,ss=new WeakMap,Sa),Xi=[/^$/,[],Object.create(null)],ys=Object.create(null);function Da(t){return ys[t]??(ys[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Qi(){ys=Object.create(null)}function Zi(t){var c;const e=new Yi,s=[];if(t.length===0)return Xi;const r=t.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,h],[u,f])=>d?1:u?-1:h.length-f.length),a=Object.create(null);for(let d=0,h=-1,u=r.length;d<u;d++){const[f,p,m]=r[d];f?a[p]=[m.map(([y])=>[y,Object.create(null)]),Ua]:h++;let _;try{_=e.insert(p,h,f)}catch(y){throw y===it?new La(p):y}f||(s[h]=m.map(([y,b])=>{const v=Object.create(null);for(b-=1;b>=0;b--){const[$,M]=_[b];v[$]=M}return[y,v]}))}const[i,n,o]=e.buildRegExp();for(let d=0,h=s.length;d<h;d++)for(let u=0,f=s[d].length;u<f;u++){const p=(c=s[d][u])==null?void 0:c[1];if(!p)continue;const m=Object.keys(p);for(let _=0,y=m.length;_<y;_++)p[m[_]]=o[p[m[_]]]}const l=[];for(const d in n)l[d]=s[n[d]];return[i,l,a]}function Ze(t,e){if(t){for(const s of Object.keys(t).sort((r,a)=>a.length-r.length))if(Da(s).test(e))return[...t[s]]}}var Ce,Pe,Is,Ba,Ea,en=(Ea=class{constructor(){T(this,Is);x(this,"name","RegExpRouter");T(this,Ce);T(this,Pe);x(this,"match",Ki);S(this,Ce,{[D]:Object.create(null)}),S(this,Pe,{[D]:Object.create(null)})}add(t,e,s){var o;const r=g(this,Ce),a=g(this,Pe);if(!r||!a)throw new Error(qa);r[t]||[r,a].forEach(l=>{l[t]=Object.create(null),Object.keys(l[D]).forEach(c=>{l[t][c]=[...l[D][c]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const l=Da(e);t===D?Object.keys(r).forEach(c=>{var d;(d=r[c])[e]||(d[e]=Ze(r[c],e)||Ze(r[D],e)||[])}):(o=r[t])[e]||(o[e]=Ze(r[t],e)||Ze(r[D],e)||[]),Object.keys(r).forEach(c=>{(t===D||t===c)&&Object.keys(r[c]).forEach(d=>{l.test(d)&&r[c][d].push([s,i])})}),Object.keys(a).forEach(c=>{(t===D||t===c)&&Object.keys(a[c]).forEach(d=>l.test(d)&&a[c][d].push([s,i]))});return}const n=Aa(e)||[e];for(let l=0,c=n.length;l<c;l++){const d=n[l];Object.keys(a).forEach(h=>{var u;(t===D||t===h)&&((u=a[h])[d]||(u[d]=[...Ze(r[h],d)||Ze(r[D],d)||[]]),a[h][d].push([s,i-c+l+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(g(this,Pe)).concat(Object.keys(g(this,Ce))).forEach(e=>{t[e]||(t[e]=O(this,Is,Ba).call(this,e))}),S(this,Ce,S(this,Pe,void 0)),Qi(),t}},Ce=new WeakMap,Pe=new WeakMap,Is=new WeakSet,Ba=function(t){const e=[];let s=t===D;return[g(this,Ce),g(this,Pe)].forEach(r=>{const a=r[t]?Object.keys(r[t]).map(i=>[i,r[t][i]]):[];a.length!==0?(s||(s=!0),e.push(...a)):t!==D&&e.push(...Object.keys(r[D]).map(i=>[i,r[D][i]]))}),s?Zi(e):null},Ea),Ie,Se,xa,tn=(xa=class{constructor(t){x(this,"name","SmartRouter");T(this,Ie,[]);T(this,Se,[]);S(this,Ie,t.routers)}add(t,e,s){if(!g(this,Se))throw new Error(qa);g(this,Se).push([t,e,s])}match(t,e){if(!g(this,Se))throw new Error("Fatal error");const s=g(this,Ie),r=g(this,Se),a=s.length;let i=0,n;for(;i<a;i++){const o=s[i];try{for(let l=0,c=r.length;l<c;l++)o.add(...r[l]);n=o.match(t,e)}catch(l){if(l instanceof La)continue;throw l}this.match=o.match.bind(o),S(this,Ie,[o]),S(this,Se,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(g(this,Se)||g(this,Ie).length!==1)throw new Error("No active router has been determined yet.");return g(this,Ie)[0]}},Ie=new WeakMap,Se=new WeakMap,xa),Ot=Object.create(null),sn=t=>{for(const e in t)return!0;return!1},qe,G,Ve,vt,F,Ee,Be,bt,rn=(bt=class{constructor(e,s,r){T(this,Ee);T(this,qe);T(this,G);T(this,Ve);T(this,vt,0);T(this,F,Ot);if(S(this,G,r||Object.create(null)),S(this,qe,[]),e&&s){const a=Object.create(null);a[e]={handler:s,possibleKeys:[],score:0},S(this,qe,[a])}S(this,Ve,[])}insert(e,s,r){S(this,vt,++jr(this,vt)._);let a=this;const i=Oi(s),n=[];for(let o=0,l=i.length;o<l;o++){const c=i[o],d=i[o+1],h=Pi(c,d),u=Array.isArray(h)?h[0]:c;if(u in g(a,G)){a=g(a,G)[u],h&&n.push(h[1]);continue}g(a,G)[u]=new bt,h&&(g(a,Ve).push(h),n.push(h[1])),a=g(a,G)[u]}return g(a,qe).push({[e]:{handler:r,possibleKeys:n.filter((o,l,c)=>c.indexOf(o)===l),score:g(this,vt)}}),a}search(e,s){var d;const r=[];S(this,F,Ot);let i=[this];const n=Ta(s),o=[],l=n.length;let c=null;for(let h=0;h<l;h++){const u=n[h],f=h===l-1,p=[];for(let _=0,y=i.length;_<y;_++){const b=i[_],v=g(b,G)[u];v&&(S(v,F,g(b,F)),f?(g(v,G)["*"]&&O(this,Ee,Be).call(this,r,g(v,G)["*"],e,g(b,F)),O(this,Ee,Be).call(this,r,v,e,g(b,F))):p.push(v));for(let $=0,M=g(b,Ve).length;$<M;$++){const j=g(b,Ve)[$],C=g(b,F)===Ot?{}:{...g(b,F)};if(j==="*"){const Xe=g(b,G)["*"];Xe&&(O(this,Ee,Be).call(this,r,Xe,e,g(b,F)),S(Xe,F,C),p.push(Xe));continue}const[Ms,ee,Tt]=j;if(!u&&!(Tt instanceof RegExp))continue;const ge=g(b,G)[Ms];if(Tt instanceof RegExp){if(c===null){c=new Array(l);let Qe=s[0]==="/"?1:0;for(let Rt=0;Rt<l;Rt++)c[Rt]=Qe,Qe+=n[Rt].length+1}const Xe=s.substring(c[h]),Fs=Tt.exec(Xe);if(Fs){if(C[ee]=Fs[0],O(this,Ee,Be).call(this,r,ge,e,g(b,F),C),sn(g(ge,G))){S(ge,F,C);const Qe=((d=Fs[0].match(/\//))==null?void 0:d.length)??0;(o[Qe]||(o[Qe]=[])).push(ge)}continue}}(Tt===!0||Tt.test(u))&&(C[ee]=u,f?(O(this,Ee,Be).call(this,r,ge,e,C,g(b,F)),g(ge,G)["*"]&&O(this,Ee,Be).call(this,r,g(ge,G)["*"],e,C,g(b,F))):(S(ge,F,C),p.push(ge)))}}const m=o.shift();i=m?p.concat(m):p}return r.length>1&&r.sort((h,u)=>h.score-u.score),[r.map(({handler:h,params:u})=>[h,u])]}},qe=new WeakMap,G=new WeakMap,Ve=new WeakMap,vt=new WeakMap,F=new WeakMap,Ee=new WeakSet,Be=function(e,s,r,a,i){for(let n=0,o=g(s,qe).length;n<o;n++){const l=g(s,qe)[n],c=l[r]||l[D],d={};if(c!==void 0&&(c.params=Object.create(null),e.push(c),a!==Ot||i&&i!==Ot))for(let h=0,u=c.possibleKeys.length;h<u;h++){const f=c.possibleKeys[h],p=d[c.score];c.params[f]=i!=null&&i[f]&&!p?i[f]:a[f]??(i==null?void 0:i[f]),d[c.score]=!0}}},bt),Je,$a,an=($a=class{constructor(){x(this,"name","TrieRouter");T(this,Je);S(this,Je,new rn)}add(t,e,s){const r=Aa(e);if(r){for(let a=0,i=r.length;a<i;a++)g(this,Je).insert(t,r[a],s);return}g(this,Je).insert(t,e,s)}match(t,e){return g(this,Je).search(t,e)}},Je=new WeakMap,$a),Q=class extends Wi{constructor(t={}){super(t),this.router=t.router??new tn({routers:[new en,new an]})}},Ha=/^[\w!#$%&'*.^`|~+-]+$/,nn=/^[ !#-:<-[\]-~]*$/,Lr=t=>{let e=0,s=t.length;for(;e<s;){const r=t.charCodeAt(e);if(r!==32&&r!==9)break;e++}for(;s>e;){const r=t.charCodeAt(s-1);if(r!==32&&r!==9)break;s--}return e===0&&s===t.length?t:t.slice(e,s)},Nr=(t,e)=>{if(e&&t.indexOf(e)===-1)return{};const s=t.split(";"),r=Object.create(null);for(const a of s){const i=a.indexOf("=");if(i===-1)continue;const n=Lr(a.substring(0,i));if(e&&e!==n||!Ha.test(n)||n in r)continue;let o=Lr(a.substring(i+1));if(o.startsWith('"')&&o.endsWith('"')&&(o=o.slice(1,-1)),nn.test(o)&&(r[n]=o.indexOf("%")!==-1?qs(o,yr):o,e))break}return r},on=(t,e,s={})=>{if(!Ha.test(t))throw new Error("Invalid cookie name");let r=`${t}=${e}`;if(t.startsWith("__Secure-")&&!s.secure)throw new Error("__Secure- Cookie must have Secure attributes");if(t.startsWith("__Host-")){if(!s.secure)throw new Error("__Host- Cookie must have Secure attributes");if(s.path!=="/")throw new Error('__Host- Cookie must have Path attributes with "/"');if(s.domain)throw new Error("__Host- Cookie must not have Domain attributes")}for(const a of["domain","path","sameSite","priority"])if(s[a]&&/[;\r\n]/.test(s[a]))throw new Error(`${a} must not contain ";", "\\r", or "\\n"`);if(s&&typeof s.maxAge=="number"&&s.maxAge>=0){if(s.maxAge>3456e4)throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");r+=`; Max-Age=${s.maxAge|0}`}if(s.domain&&s.prefix!=="host"&&(r+=`; Domain=${s.domain}`),s.path&&(r+=`; Path=${s.path}`),s.expires){if(s.expires.getTime()-Date.now()>3456e7)throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");r+=`; Expires=${s.expires.toUTCString()}`}if(s.httpOnly&&(r+="; HttpOnly"),s.secure&&(r+="; Secure"),s.sameSite&&(r+=`; SameSite=${s.sameSite.charAt(0).toUpperCase()+s.sameSite.slice(1)}`),s.priority&&(r+=`; Priority=${s.priority.charAt(0).toUpperCase()+s.priority.slice(1)}`),s.partitioned){if(!s.secure)throw new Error("Partitioned Cookie must have Secure attributes");r+="; Partitioned"}return r},Vs=(t,e,s)=>(e=encodeURIComponent(e),on(t,e,s)),Te=(t,e,s)=>{const r=t.req.raw.headers.get("Cookie");if(typeof e=="string"){if(!r)return;let i=e;return s==="secure"?i="__Secure-"+e:s==="host"&&(i="__Host-"+e),Nr(r,i)[i]}return r?Nr(r):{}},ln=(t,e,s)=>{let r;return(s==null?void 0:s.prefix)==="secure"?r=Vs("__Secure-"+t,e,{path:"/",...s,secure:!0}):(s==null?void 0:s.prefix)==="host"?r=Vs("__Host-"+t,e,{...s,path:"/",secure:!0,domain:void 0}):r=Vs(t,e,{path:"/",...s}),r},ar=(t,e,s,r)=>{const a=ln(e,s,r);t.header("Set-Cookie",a,{append:!0})},Ur=(t,e,s)=>{const r=Te(t,e,s==null?void 0:s.prefix);return ar(t,e,"",{...s,maxAge:0}),r},cn=t=>{const e={origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[],...t},s=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(e.origin),r=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(e.allowMethods);return async function(i,n){var c;function o(d,h){i.res.headers.set(d,h)}const l=await s(i.req.header("origin")||"",i);if(l&&o("Access-Control-Allow-Origin",l),e.credentials&&o("Access-Control-Allow-Credentials","true"),(c=e.exposeHeaders)!=null&&c.length&&o("Access-Control-Expose-Headers",e.exposeHeaders.join(",")),i.req.method==="OPTIONS"){e.origin!=="*"&&o("Vary","Origin"),e.maxAge!=null&&o("Access-Control-Max-Age",e.maxAge.toString());const d=await r(i.req.header("origin")||"",i);d.length&&o("Access-Control-Allow-Methods",d.join(","));let h=e.allowHeaders;if(!(h!=null&&h.length)){const u=i.req.header("Access-Control-Request-Headers");u&&(h=u.split(/\s*,\s*/))}return h!=null&&h.length&&(o("Access-Control-Allow-Headers",h.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await n(),e.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};function Ls(t,e){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(s[r[a]]=t[r[a]]);return s}function dn(t,e,s,r){function a(i){return i instanceof s?i:new s(function(n){n(i)})}return new(s||(s=Promise))(function(i,n){function o(d){try{c(r.next(d))}catch(h){n(h)}}function l(d){try{c(r.throw(d))}catch(h){n(h)}}function c(d){d.done?i(d.value):a(d.value).then(o,l)}c((r=r.apply(t,e||[])).next())})}const hn=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class wr extends Error{constructor(e,s="FunctionsError",r){super(e),this.name=s,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class un extends wr{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Dr extends wr{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Br extends wr{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var ir;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(ir||(ir={}));class fn{constructor(e,{headers:s={},customFetch:r,region:a=ir.Any}={}){this.url=e,this.headers=s,this.region=a,this.fetch=hn(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return dn(this,arguments,void 0,function*(s,r={}){var a;let i,n;try{const{headers:o,method:l,body:c,signal:d,timeout:h}=r;let u={},{region:f}=r;f||(f=this.region);const p=new URL(`${this.url}/${s}`);f&&f!=="any"&&(u["x-region"]=f,p.searchParams.set("forceFunctionRegion",f));let m;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(u["Content-Type"]="application/octet-stream",m=c):typeof c=="string"?(u["Content-Type"]="text/plain",m=c):typeof FormData<"u"&&c instanceof FormData?m=c:(u["Content-Type"]="application/json",m=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?m=JSON.stringify(c):m=c;let _=d;h&&(n=new AbortController,i=setTimeout(()=>n.abort(),h),d?(_=n.signal,d.addEventListener("abort",()=>n.abort())):_=n.signal);const y=yield this.fetch(p.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},u),this.headers),o),body:m,signal:_}).catch(M=>{throw new un(M)}),b=y.headers.get("x-relay-error");if(b&&b==="true")throw new Dr(y);if(!y.ok)throw new Br(y);let v=((a=y.headers.get("Content-Type"))!==null&&a!==void 0?a:"text/plain").split(";")[0].trim(),$;return v==="application/json"?$=yield y.json():v==="application/octet-stream"||v==="application/pdf"?$=yield y.blob():v==="text/event-stream"?$=y:v==="multipart/form-data"?$=yield y.formData():$=yield y.text(),{data:$,error:null,response:y}}catch(o){return{data:null,error:o,response:o instanceof Br||o instanceof Dr?o.context:void 0}}finally{i&&clearTimeout(i)}})}}const za=3,Hr=t=>Math.min(1e3*2**t,3e4),pn=[520,503],Ma=["GET","HEAD","OPTIONS"];var zr=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Mr(t,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",a),s()},t);function a(){clearTimeout(r),s()}e==null||e.addEventListener("abort",a)})}function gn(t,e,s,r){return!(!r||s>=za||!Ma.includes(t)||!pn.includes(e))}var mn=class{constructor(t){var e,s,r,a,i;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(s=t.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(a=t.urlLengthLimit)!==null&&a!==void 0?a:8e3,this.retryEnabled=(i=t.retry)!==null&&i!==void 0?i:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const n=this.headers.get("Accept");n==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!n||n==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let i=(async()=>{let n=0;for(;;){const c={};s.headers.forEach((h,u)=>{c[u]=h}),n>0&&(c["X-Retry-Count"]=String(n));let d;try{d=await r(s.url.toString(),{method:s.method,headers:c,body:JSON.stringify(s.body,(h,u)=>typeof u=="bigint"?u.toString():u),signal:s.signal})}catch(h){if((h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"||!Ma.includes(s.method))throw h;if(s.retryEnabled&&n<za){const u=Hr(n);n++,await Mr(u,s.signal);continue}throw h}if(gn(s.method,d.status,n,s.retryEnabled)){var o,l;const h=(o=(l=d.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,u=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:Hr(n);await d.text(),n++,await Mr(u,s.signal);continue}return await s.processResponse(d)}})();return this.shouldThrowOnError||(i=i.catch(n=>{var o;let l="",c="",d="";const h=n==null?void 0:n.cause;if(h){var u,f,p,m;const b=(u=h==null?void 0:h.message)!==null&&u!==void 0?u:"",v=(f=h==null?void 0:h.code)!==null&&f!==void 0?f:"";l=`${(p=n==null?void 0:n.name)!==null&&p!==void 0?p:"FetchError"}: ${n==null?void 0:n.message}`,l+=`

Caused by: ${(m=h==null?void 0:h.name)!==null&&m!==void 0?m:"Error"}: ${b}`,v&&(l+=` (${v})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var _;l=(_=n==null?void 0:n.stack)!==null&&_!==void 0?_:""}const y=this.url.toString().length;return(n==null?void 0:n.name)==="AbortError"||(n==null?void 0:n.code)==="ABORT_ERR"?(d="",c="Request was aborted (timeout or manual cancellation)",y>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${y} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(d="",c="HTTP headers exceeded server limits (typically 16KB)",y>this.urlLengthLimit&&(c+=`. Your request URL is ${y} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=n==null?void 0:n.name)!==null&&o!==void 0?o:"FetchError"}: ${n==null?void 0:n.message}`,details:l,hint:c,code:d},data:null,count:null,status:0,statusText:""}})),i.then(t,e)}async processResponse(t){var e=this;let s=null,r=null,a=null,i=t.status,n=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const u=await t.text();if(u!=="")if(e.headers.get("Accept")==="text/csv")r=u;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))r=u;else try{r=JSON.parse(u)}catch{if(s={message:u},r=null,e.shouldThrowOnError)throw new zr({message:u,details:"",hint:"",code:""})}}const d=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),h=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");d&&h&&h.length>1&&(a=parseInt(h[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(s={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,a=null,i=406,n="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const d=await t.text();try{s=JSON.parse(d),Array.isArray(s)&&t.status===404&&(r=[],s=null,i=200,n="OK")}catch{t.status===404&&d===""?(i=204,n="No Content"):s={message:d}}if(s&&e.shouldThrowOnError)throw new zr(s)}return{success:s===null,error:s,data:r,count:a,status:i,statusText:n}}returns(){return this}overrideTypes(){return this}},vn=class extends mn{throwOnError(){return super.throwOnError()}select(t){let e=!1;const s=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:s,foreignTable:r,referencedTable:a=r}={}){const i=a?`${a}.order`:"order",n=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${n?`${n},`:""}${t}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:s=e}={}){const r=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:s,referencedTable:r=s}={}){const a=typeof r>"u"?"offset":`${r}.offset`,i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(a,`${t}`),this.url.searchParams.set(i,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:s=!1,buffers:r=!1,wal:a=!1,format:i="text"}={}){var n;const o=[t?"analyze":null,e?"verbose":null,s?"settings":null,r?"buffers":null,a?"wal":null].filter(Boolean).join("|"),l=(n=this.headers.get("Accept"))!==null&&n!==void 0?n:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`),i==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const Fr=new RegExp("[,()]");var nt=class extends vn{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const s=Array.from(new Set(e)).map(r=>typeof r=="string"&&Fr.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}notIn(t,e){const s=Array.from(new Set(e)).map(r=>typeof r=="string"&&Fr.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${s})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:s,type:r}={}){let a="";r==="plain"?a="pl":r==="phrase"?a="ph":r==="websearch"&&(a="w");const i=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${a}fts${i}.${e}`),this}match(t){return Object.entries(t).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(t,e,s){return this.url.searchParams.append(t,`not.${e}.${s}`),this}or(t,{foreignTable:e,referencedTable:s=e}={}){const r=s?`${s}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,s){return this.url.searchParams.append(t,`${e}.${s}`),this}},bn=class{constructor(t,{headers:e={},schema:s,fetch:r,urlLengthLimit:a=8e3,retry:i}){this.url=t,this.headers=new Headers(e),this.schema=s,this.fetch=r,this.urlLengthLimit=a,this.retry=i}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:s=!1,count:r}=e??{},a=s?"HEAD":"GET";let i=!1;const n=(t??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",n),r&&l.append("Prefer",`count=${r}`),new nt({method:a,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:s=!0}={}){var r;const a="POST",{url:i,headers:n}=this.cloneRequestState();if(e&&n.append("Prefer",`count=${e}`),s||n.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);i.searchParams.set("columns",l.join(","))}}return new nt({method:a,url:i,headers:n,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:s=!1,count:r,defaultToNull:a=!0}={}){var i;const n="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),r&&l.append("Prefer",`count=${r}`),a||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((d,h)=>d.concat(Object.keys(h)),[]);if(c.length>0){const d=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",d.join(","))}}return new nt({method:n,url:o,headers:l,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var s;const r="PATCH",{url:a,headers:i}=this.cloneRequestState();return e&&i.append("Prefer",`count=${e}`),new nt({method:r,url:a,headers:i,schema:this.schema,body:t,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const s="DELETE",{url:r,headers:a}=this.cloneRequestState();return t&&a.append("Prefer",`count=${t}`),new nt({method:s,url:r,headers:a,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function zt(t){"@babel/helpers - typeof";return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zt(t)}function yn(t,e){if(zt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(zt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wn(t){var e=yn(t,"string");return zt(e)=="symbol"?e:e+""}function _n(t,e,s){return(e=wn(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Wr(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,r)}return s}function cs(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Wr(Object(s),!0).forEach(function(r){_n(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Wr(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}var kn=class Fa{constructor(e,{headers:s={},schema:r,fetch:a,timeout:i,urlLengthLimit:n=8e3,retry:o}={}){this.url=e,this.headers=new Headers(s),this.schemaName=r,this.urlLengthLimit=n;const l=a??globalThis.fetch;i!==void 0&&i>0?this.fetch=(c,d)=>{const h=new AbortController,u=setTimeout(()=>h.abort(),i),f=d==null?void 0:d.signal;if(f){if(f.aborted)return clearTimeout(u),l(c,d);const p=()=>{clearTimeout(u),h.abort()};return f.addEventListener("abort",p,{once:!0}),l(c,cs(cs({},d),{},{signal:h.signal})).finally(()=>{clearTimeout(u),f.removeEventListener("abort",p)})}return l(c,cs(cs({},d),{},{signal:h.signal})).finally(()=>clearTimeout(u))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new bn(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Fa(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:r=!1,get:a=!1,count:i}={}){var n;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const d=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(d)),h=r&&Object.values(s).some(d);h?(o="POST",c=s):r||a?(o=r?"HEAD":"GET",Object.entries(s).filter(([f,p])=>p!==void 0).map(([f,p])=>[f,Array.isArray(p)?`{${p.join(",")}}`:`${p}`]).forEach(([f,p])=>{l.searchParams.append(f,p)})):(o="POST",c=s);const u=new Headers(this.headers);return h?u.set("Prefer",i?`count=${i},return=minimal`:"return=minimal"):i&&u.set("Prefer",`count=${i}`),new nt({method:o,url:l,headers:u,schema:this.schemaName,body:c,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Sn{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const a=globalThis.process;if(a){const i=a.versions;if(i&&i.node){const n=i.node,o=parseInt(n.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const En="2.108.2",xn=`realtime-js/${En}`,$n="1.0.0",Wa="2.0.0",Tn=Wa,Rn=1e4,An=100,Re={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Ka={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},nr={connecting:"connecting",closing:"closing",closed:"closed"};class On{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,r;const a=(r=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,a)}_encodeJsonUserBroadcastPush(e){var s,r;const a=(r=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&r!==void 0?r:{},n=new TextEncoder().encode(JSON.stringify(a)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,s,r){var a,i;const n=e.topic,o=(a=e.ref)!==null&&a!==void 0?a:"",l=(i=e.join_ref)!==null&&i!==void 0?i:"",c=e.payload.event,d=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(d).length===0?"":JSON.stringify(d);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(n.length>255)throw new Error(`topic length ${n.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const u=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+n.length+c.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+u);let p=new DataView(f),m=0;p.setUint8(m++,this.KINDS.userBroadcastPush),p.setUint8(m++,l.length),p.setUint8(m++,o.length),p.setUint8(m++,n.length),p.setUint8(m++,c.length),p.setUint8(m++,h.length),p.setUint8(m++,s),Array.from(l,y=>p.setUint8(m++,y.charCodeAt(0))),Array.from(o,y=>p.setUint8(m++,y.charCodeAt(0))),Array.from(n,y=>p.setUint8(m++,y.charCodeAt(0))),Array.from(c,y=>p.setUint8(m++,y.charCodeAt(0))),Array.from(h,y=>p.setUint8(m++,y.charCodeAt(0)));var _=new Uint8Array(f.byteLength+r.byteLength);return _.set(new Uint8Array(f),0),_.set(new Uint8Array(r),f.byteLength),_.buffer}decode(e,s){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return s(r)}if(typeof e=="string"){const r=JSON.parse(e),[a,i,n,o,l]=r;return s({join_ref:a,ref:i,topic:n,event:o,payload:l})}return s({})}_binaryDecode(e){const s=new DataView(e),r=s.getUint8(0),a=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,a)}}_decodeUserBroadcast(e,s,r){const a=s.getUint8(1),i=s.getUint8(2),n=s.getUint8(3),o=s.getUint8(4);let l=this.HEADER_LENGTH+4;const c=r.decode(e.slice(l,l+a));l=l+a;const d=r.decode(e.slice(l,l+i));l=l+i;const h=r.decode(e.slice(l,l+n));l=l+n;const u=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(r.decode(u)):u,p={type:this.BROADCAST_EVENT,event:d,payload:f};return n>0&&(p.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>s.includes(r)))}}var P;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(P||(P={}));const Kr=(t,e,s={})=>{var r;const a=(r=s.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((i,n)=>(i[n]=jn(n,t,e,a),i),{}):{}},jn=(t,e,s,r)=>{const a=e.find(o=>o.name===t),i=a==null?void 0:a.type,n=s[t];return i&&!r.includes(i)?Ga(i,n):or(n)},Ga=(t,e)=>{if(t.charAt(0)==="_"){const s=t.slice(1,t.length);return qn(e,s)}switch(t){case P.bool:return Cn(e);case P.float4:case P.float8:case P.int2:case P.int4:case P.int8:case P.numeric:case P.oid:return Pn(e);case P.json:case P.jsonb:return In(e);case P.timestamp:return Ln(e);case P.abstime:case P.date:case P.daterange:case P.int4range:case P.int8range:case P.money:case P.reltime:case P.text:case P.time:case P.timestamptz:case P.timetz:case P.tsrange:case P.tstzrange:return or(e);default:return or(e)}},or=t=>t,Cn=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Pn=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},In=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},qn=(t,e)=>{if(typeof t!="string")return t;const s=t.length-1,r=t[s];if(t[0]==="{"&&r==="}"){let i;const n=t.slice(1,s);try{i=JSON.parse("["+n+"]")}catch{i=n?n.split(","):[]}return i.map(o=>Ga(e,o))}return t},Ln=t=>typeof t=="string"?t.replace(" ","T"):t,Va=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Dt=t=>typeof t=="function"?t:function(){return t},Nn=typeof self<"u"?self:null,ot=typeof window<"u"?window:null,ue=Nn||ot||globalThis,Un="2.0.0",Dn=1e4,Bn=1e3,fe={connecting:0,open:1,closing:2,closed:3},X={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ve={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},lr={longpoll:"longpoll",websocket:"websocket"},Hn={complete:4},cr="base64url.bearer.phx.",ds=class{constructor(t,e,s,r){this.channel=t,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:s}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Ja=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},zn=class{constructor(t,e,s){this.state=X.closed,this.topic=t,this.params=Dt(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new ds(this,ve.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Ja(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=X.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=X.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=X.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=X.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new ds(this,ve.leave,Dt({}),this.timeout).send(),this.state=X.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ve.reply,(r,a)=>{this.trigger(this.replyEventName(a),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=X.closed,this.bindings=[]}onClose(t){this.on(ve.close,t)}onError(t){return this.on(ve.error,e=>t(e))}on(t,e){let s=this.bindingRef++;return this.bindings.push({event:t,ref:s,callback:e}),s}off(t,e){this.bindings=this.bindings.filter(s=>!(s.event===t&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new ds(this,t,function(){return e},s);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=X.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ve.close,"leave")},s=new ds(this,ve.leave,Dt({}),t);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(t,e,s){return e}filterBindings(t,e,s){return!0}isMember(t,e,s,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:s,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=X.joining,this.joinPush.resend(t))}trigger(t,e,s,r){let a=this.onMessage(t,e,s,r);if(e&&!a)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(n=>n.event===t&&this.filterBindings(n,e,s));for(let n=0;n<i.length;n++)i[n].callback(a,s,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===X.closed}isErrored(){return this.state===X.errored}isJoined(){return this.state===X.joined}isJoining(){return this.state===X.joining}isLeaving(){return this.state===X.leaving}},Es=class{static request(t,e,s,r,a,i,n){if(ue.XDomainRequest){let o=new ue.XDomainRequest;return this.xdomainRequest(o,t,e,r,a,i,n)}else if(ue.XMLHttpRequest){let o=new ue.XMLHttpRequest;return this.xhrRequest(o,t,e,s,r,a,i,n)}else{if(ue.fetch&&ue.AbortController)return this.fetchRequest(t,e,s,r,a,i,n);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,s,r,a,i,n){let o={method:t,headers:s,body:r},l=null;return a&&(l=new AbortController,setTimeout(()=>l.abort(),a),o.signal=l.signal),ue.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>n&&n(c)).catch(c=>{c.name==="AbortError"&&i?i():n&&n(null)}),l}static xdomainRequest(t,e,s,r,a,i,n){return t.timeout=a,t.open(e,s),t.onload=()=>{let o=this.parseJSON(t.responseText);n&&n(o)},i&&(t.ontimeout=i),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,s,r,a,i,n,o){t.open(e,s,!0),t.timeout=i;for(let[l,c]of Object.entries(r))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===Hn.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},n&&(t.ontimeout=n),t.send(a),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let s=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let a=e?`${e}[${r}]`:r,i=t[r];typeof i=="object"?s.push(this.serialize(i,a)):s.push(encodeURIComponent(a)+"="+encodeURIComponent(i))}return s.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let s=t.match(/\?/)?"&":"?";return`${t}${s}${this.serialize(e)}`}},Mn=t=>{let e="",s=new Uint8Array(t),r=s.byteLength;for(let a=0;a<r;a++)e+=String.fromCharCode(s[a]);return btoa(e)},et=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(cr)&&(this.authToken=atob(e[1].slice(cr.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=fe.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+lr.websocket),"$1/"+lr.longpoll)}endpointURL(){return Es.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,s){this.close(t,e,s),this.readyState=fe.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===fe.open||this.readyState===fe.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:r,messages:a}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else s=0;switch(s){case 200:a.forEach(i=>{setTimeout(()=>this.onmessage({data:i}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=fe.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(t){typeof t!="string"&&(t=Mn(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,s){for(let a of this.reqs)a.abort();this.readyState=fe.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,s,r,a){let i,n=()=>{this.reqs.delete(i),r()};i=Es.request(t,this.endpointURL(),e,s,this.timeout,n,o=>{this.reqs.delete(i),this.isActive()&&a(o)}),this.reqs.add(i)}},Fn=class Ct{constructor(e,s={}){let r=s.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,a=>{let{onJoin:i,onLeave:n,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ct.syncState(this.state,a,i,n),this.pendingDiffs.forEach(l=>{this.state=Ct.syncDiff(this.state,l,i,n)}),this.pendingDiffs=[],o()}),this.channel.on(r.diff,a=>{let{onJoin:i,onLeave:n,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(a):(this.state=Ct.syncDiff(this.state,a,i,n),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ct.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,r,a){let i=this.clone(e),n={},o={};return this.map(i,(l,c)=>{s[l]||(o[l]=c)}),this.map(s,(l,c)=>{let d=i[l];if(d){let h=c.metas.map(m=>m.phx_ref),u=d.metas.map(m=>m.phx_ref),f=c.metas.filter(m=>u.indexOf(m.phx_ref)<0),p=d.metas.filter(m=>h.indexOf(m.phx_ref)<0);f.length>0&&(n[l]=c,n[l].metas=f),p.length>0&&(o[l]=this.clone(d),o[l].metas=p)}else n[l]=c}),this.syncDiff(i,{joins:n,leaves:o},r,a)}static syncDiff(e,s,r,a){let{joins:i,leaves:n}=this.clone(s);return r||(r=function(){}),a||(a=function(){}),this.map(i,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let d=e[o].metas.map(u=>u.phx_ref),h=c.metas.filter(u=>d.indexOf(u.phx_ref)<0);e[o].metas.unshift(...h)}r(o,c,l)}),this.map(n,(o,l)=>{let c=e[o];if(!c)return;let d=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>d.indexOf(h.phx_ref)<0),a(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,s){return s||(s=function(r,a){return a}),this.map(e,(r,a)=>s(r,a))}static map(e,s){return Object.getOwnPropertyNames(e).map(r=>s(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},hs={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let s=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(s))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[s,r,a,i,n]=JSON.parse(t);return e({join_ref:s,ref:r,topic:a,event:i,payload:n})}},binaryEncode(t){let{join_ref:e,ref:s,event:r,topic:a,payload:i}=t,n=this.META_LENGTH+e.length+s.length+a.length+r.length,o=new ArrayBuffer(this.HEADER_LENGTH+n),l=new DataView(o),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,e.length),l.setUint8(c++,s.length),l.setUint8(c++,a.length),l.setUint8(c++,r.length),Array.from(e,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(s,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(a,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(r,h=>l.setUint8(c++,h.charCodeAt(0)));var d=new Uint8Array(o.byteLength+i.byteLength);return d.set(new Uint8Array(o),0),d.set(new Uint8Array(i),o.byteLength),d.buffer},binaryDecode(t){let e=new DataView(t),s=e.getUint8(0),r=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,s){let r=e.getUint8(1),a=e.getUint8(2),i=e.getUint8(3),n=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(t.slice(n,n+r));n=n+r;let l=s.decode(t.slice(n,n+a));n=n+a;let c=s.decode(t.slice(n,n+i));n=n+i;let d=t.slice(n,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:d}},decodeReply(t,e,s){let r=e.getUint8(1),a=e.getUint8(2),i=e.getUint8(3),n=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(t.slice(o,o+r));o=o+r;let c=s.decode(t.slice(o,o+a));o=o+a;let d=s.decode(t.slice(o,o+i));o=o+i;let h=s.decode(t.slice(o,o+n));o=o+n;let u=t.slice(o,t.byteLength),f={status:h,response:u};return{join_ref:l,ref:c,topic:d,event:ve.reply,payload:f}},decodeBroadcast(t,e,s){let r=e.getUint8(1),a=e.getUint8(2),i=this.HEADER_LENGTH+2,n=s.decode(t.slice(i,i+r));i=i+r;let o=s.decode(t.slice(i,i+a));i=i+a;let l=t.slice(i,t.byteLength);return{join_ref:null,ref:null,topic:n,event:o,payload:l}}},Wn=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Dn,this.transport=e.transport||ue.WebSocket||et,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=ue&&ue.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=hs.encode.bind(hs),this.defaultDecoder=hs.decode.bind(hs),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==et?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;ot&&ot.addEventListener&&(ot.addEventListener("pagehide",a=>{this.conn&&(this.disconnect(),r=this.connectClock)}),ot.addEventListener("pageshow",a=>{r===this.connectClock&&(r=null,this.connect())}),ot.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=a=>e.rejoinAfterMs?e.rejoinAfterMs(a):[1e3,2e3,5e3][a-1]||1e4,this.reconnectAfterMs=a=>e.reconnectAfterMs?e.reconnectAfterMs(a):[10,50,100,150,200,250,500,1e3,2e3][a-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(a,i,n)=>{console.log(`${a}: ${i}`,n)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Dt(e.params||{}),this.endPoint=`${t}/${lr.websocket}`,this.vsn=e.vsn||Un,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Ja(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return et}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Es.appendParams(Es.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,s)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Dt(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==et?this.connectWithFallback(et,this.longPollFallbackMs):this.transportConnect())}log(t,e,s){this.logger&&this.logger(t,e,s)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(a=>{a.ref===e&&(this.off([r]),t(Date.now()-s))});return!0}transportName(t){switch(t){case et:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${cr}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let s=!1,r=!0,a,i,n=this.transportName(t),o=l=>{this.log("transport",`falling back to ${n}...`,l),this.off([a,i]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${n}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),i=this.onError(l=>{this.log("transport","error",l),r&&!s&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!r){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Bn,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,s){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,s||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,s=1){if(s===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,s+1)},150*s)}waitForSocketClosed(t,e,s=1){if(s===5||t.readyState===fe.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,s+1)},150*s)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",t,e,s),(e===this.transport||s>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ve.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case fe.connecting:return"connecting";case fe.open:return"open";case fe.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>t.indexOf(s)===-1)}channel(t,e={}){let s=new zn(t,e,this);return this.channels.push(s),s}push(t){if(this.hasLogger()){let{topic:e,event:s,payload:r,ref:a,join_ref:i}=t;this.log("push",`${e} ${s} (${i}, ${a})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:s,event:r,payload:a,ref:i,join_ref:n}=e;if(i&&i===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(a.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${a.status||""} ${s} ${r} ${i&&"("+i+")"||""}`.trim(),a);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,r,a,n)&&l.trigger(r,a,i,n)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([s,r])=>{try{r(...e)}catch(a){this.log("error",`error in ${t} callback`,a)}})}catch(s){this.log("error",`error triggering ${t} callbacks`,s)}}leaveOpenTopic(t){let e=this.channels.find(s=>s.topic===t&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class Bt{constructor(e,s){const r=Gn(s);this.presence=new Fn(e.getChannel(),r),this.presence.onJoin((a,i,n)=>{const o=Bt.onJoinPayload(a,i,n);e.getChannel().trigger("presence",o)}),this.presence.onLeave((a,i,n)=>{const o=Bt.onLeavePayload(a,i,n);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return Bt.transformState(this.presence.state)}static transformState(e){return e=Kn(e),Object.getOwnPropertyNames(e).reduce((s,r)=>{const a=e[r];return s[r]=ws(a),s},{})}static onJoinPayload(e,s,r){const a=Gr(s),i=ws(r);return{event:"join",key:e,currentPresences:a,newPresences:i}}static onLeavePayload(e,s,r){const a=Gr(s),i=ws(r);return{event:"leave",key:e,currentPresences:a,leftPresences:i}}}function ws(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Kn(t){return JSON.parse(JSON.stringify(t))}function Gn(t){return(t==null?void 0:t.events)&&{events:t.events}}function Gr(t){return t!=null&&t.metas?ws(t):[]}var Vr;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Vr||(Vr={}));class Vn{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new Bt(this.channel.channelAdapter,s)}}function Jn(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class Yn{constructor(e,s,r){const a=Xn(r);this.channel=e.getSocket().channel(s,a),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,r){let a;try{a=this.channel.push(e,s,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>An){const i=this.channel.pushBuffer.shift();i.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${i.event}`,i.payload())}return a}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===Re.joined}isJoined(){return this.state===Re.joined}isJoining(){return this.state===Re.joining}isClosed(){return this.state===Re.closed}isLeaving(){return this.state===Re.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Xn(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Jr;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Jr||(Jr={}));var ct;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(ct||(ct={}));var be;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(be||(be={}));class Ht{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},r){var a,i;if(this.topic=e,this.params=s,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new Yn(this.socket.socketAdapter,e,this.params),this.presence=new Vn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Va(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((i=(a=this.params.config)===null||a===void 0?void 0:a.broadcast)===null||i===void 0)&&i.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var r,a,i;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:n,presence:o,private:l}}=this.params,c=(a=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(f=>f.filter))!==null&&a!==void 0?a:[],d=!!this.bindings[ct.PRESENCE]&&this.bindings[ct.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,h={},u={broadcast:n,presence:Object.assign(Object.assign({},o),{enabled:d}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>{e==null||e(be.CHANNEL_ERROR,Jn(f))}),this._onClose(()=>e==null?void 0:e(be.CLOSED)),this.updateJoinPayload(Object.assign({config:u},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e==null||e(be.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=Re.errored;const p=Object.values(f).join(", ")||"error";e==null||e(be.CHANNEL_ERROR,new Error(p,{cause:f}))}).receive("timeout",()=>{e==null||e(be.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var r;const a=this.bindings.postgres_changes,i=(r=a==null?void 0:a.length)!==null&&r!==void 0?r:0,n=[];for(let o=0;o<i;o++){const l=a[o],{filter:{event:c,schema:d,table:h,filter:u}}=l,f=e&&e[o];if(f&&f.event===c&&Ht.isFilterValueEqual(f.schema,d)&&Ht.isFilterValueEqual(f.table,h)&&Ht.isFilterValueEqual(f.filter,u))n.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=Re.errored,s==null||s(be.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=n,this.state!=Re.errored&&s&&s(be.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,r){const a=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===ct.PRESENCE||e===ct.POSTGRES_CHANGES;if(a&&i)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,r)}async httpSend(e,s,r={}){var a;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const i=s instanceof ArrayBuffer||ArrayBuffer.isView(s),n={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":i?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(n.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:n,body:i?s:JSON.stringify(s)},c=await this._fetchWithTimeout(o.toString(),l,(a=r.timeout)!==null&&a!==void 0?a:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let d=c.statusText;try{const h=await c.json();d=h.error||h.message||d}catch{}return Promise.reject(new Error(d))}async send(e,s={}){var r,a;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:i,payload:n}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:n,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=s.timeout)!==null&&r!==void 0?r:this.timeout);return await((a=c.body)===null||a===void 0?void 0:a.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var n,o,l;const c=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(n=this.params)===null||n===void 0?void 0:n.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,r){const a=new AbortController,i=setTimeout(()=>a.abort(),r),n=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:a.signal}));return clearTimeout(i),n}_on(e,s,r){const a=e.toLocaleLowerCase(),i=this.channelAdapter.on(e,r),n={type:a,filter:s,callback:r,ref:i};return this.bindings[a]?this.bindings[a].push(n):this.bindings[a]=[n],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,r)=>{var a,i,n,o,l,c,d;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,r))return!1;const u=(a=this.bindings[h])===null||a===void 0?void 0:a.find(f=>f.ref===e.ref);if(!u)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in u){const f=u.id,p=(i=u.filter)===null||i===void 0?void 0:i.event;return f&&((n=s.ids)===null||n===void 0?void 0:n.includes(f))&&(p==="*"||(p==null?void 0:p.toLocaleLowerCase())===((o=s.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=u==null?void 0:u.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((d=s==null?void 0:s.event)===null||d===void 0?void 0:d.toLocaleLowerCase())}else return u.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,s){const{close:r,error:a,leave:i,join:n}=Ka;return s&&[r,a,i,n].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,r)=>{if(typeof s=="object"&&"ids"in s){const a=s.data,{schema:i,table:n,commit_timestamp:o,type:l,errors:c}=a;return Object.assign(Object.assign({},{schema:i,table:n,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(a))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const r of e.bindings[s])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=Kr(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=Kr(e.columns,e.old_record)),s}}class Qn{constructor(e,s){this.socket=new Wn(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,r,a=1e4){return new Promise(i=>{setTimeout(()=>i("timeout"),a),this.socket.disconnect(()=>{e(),i("ok")},s,r)})}push(e){this.socket.push(e)}log(e,s,r){this.socket.log(e,s,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==nr.connecting}isDisconnecting(){return this.socket.connectionState()==nr.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Yr={HEARTBEAT_INTERVAL:25e3},Zn=[1e3,2e3,5e3,1e4],eo=1e4;function to(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var s;return(s=Array.from(t.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){t.delete(e)},setItem(e,s){t.set(e,String(s))}}}function so(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return to()}const ro=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class ao{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new On,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),!(!((r=s==null?void 0:s.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const a=this._initializeOptions(s);this.socketAdapter=new Qn(e,a),this.httpEndpoint=Va(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async r=>{const a=await r.unsubscribe();return r.teardown(),a}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,r){this.socketAdapter.log(e,s,r)}connectionState(){return this.socketAdapter.connectionState()||nr.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const r=`realtime:${e}`,a=this.getChannels().find(i=>i.topic===r);if(a)return a;{const i=new Ht(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(i),i}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let s,r=!1;if(e)s=e,r=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(a){this.log("error","Error fetching access token from callback",a),s=this.accessTokenValue}else s=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(a=>{const i={access_token:s,version:xn};s&&a.updateJoinPayload(i),a.joinedOnce&&a.channelAdapter.isJoined()&&a.channelAdapter.push(Ka.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,r)=>{s=="sent"&&this._setAuthSafely(),e&&e(s,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const r=new Blob([ro],{type:"application/javascript"});s=URL.createObjectURL(r)}return s}_initializeOptions(e){var s,r,a,i,n,o,l,c,d,h,u,f;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const p={};p.timeout=(a=e==null?void 0:e.timeout)!==null&&a!==void 0?a:Rn,p.heartbeatIntervalMs=(i=e==null?void 0:e.heartbeatIntervalMs)!==null&&i!==void 0?i:Yr.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(n=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&n!==void 0?n:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Yr.HEARTBEAT_INTERVAL),p.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:Sn.getWebSocketConstructor(),p.params=e==null?void 0:e.params,p.logger=e==null?void 0:e.logger,p.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),p.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:so(),p.reconnectAfterMs=(d=e==null?void 0:e.reconnectAfterMs)!==null&&d!==void 0?d:(b=>Zn[b-1]||eo);let m,_;const y=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:Tn;switch(y){case $n:m=(b,v)=>v(JSON.stringify(b)),_=(b,v)=>v(JSON.parse(b));break;case Wa:m=this.serializer.encode.bind(this.serializer),_=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${p.vsn}`)}if(p.vsn=y,p.encode=(u=e==null?void 0:e.encode)!==null&&u!==void 0?u:m,p.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:_,p.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,p.params=Object.assign(Object.assign({},p.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,p.autoSendHeartbeat=!this.worker}return p}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Mt=class extends Error{constructor(t,e){var s;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function io(t,e,s){const r=new URL(e,t);if(s)for(const[a,i]of Object.entries(s))i!==void 0&&r.searchParams.set(a,i);return r.toString()}async function no(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function oo(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:s,path:r,query:a,body:i,headers:n}){const o=io(t.baseUrl,r,a),l=await no(t.auth),c=await e(o,{method:s,headers:{...i?{"Content-Type":"application/json"}:{},...l,...n},body:i?JSON.stringify(i):void 0}),d=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),u=h&&d?JSON.parse(d):d;if(!c.ok){const f=h?u:void 0,p=f==null?void 0:f.error;throw new Mt((p==null?void 0:p.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:p==null?void 0:p.type,icebergCode:p==null?void 0:p.code,details:f})}return{status:c.status,headers:c.headers,data:u}}}}function us(t){return t.join("")}var lo=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:us(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const s={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${us(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${us(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${us(t.namespace)}`}),!0}catch(e){if(e instanceof Mt&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(s){if(s instanceof Mt&&s.status===409)return;throw s}}};function tt(t){return t.join("")}var co=class{constructor(t,e="",s){this.client=t,this.prefix=e,this.accessDelegation=s}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(t,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${tt(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(s){if(s instanceof Mt&&s.status===404)return!1;throw s}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(s){if(s instanceof Mt&&s.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw s}}},ho=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const s=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=oo({baseUrl:s,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new lo(this.client,e),this.tableOps=new co(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function uo(t,e){if(Ft(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(Ft(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fo(t){var e=uo(t,"string");return Ft(e)=="symbol"?e:e+""}function po(t,e,s){return(e=fo(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Xr(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,r)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Xr(Object(s),!0).forEach(function(r){po(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Xr(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}var Ns=class extends Error{constructor(t,e="storage",s,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Us(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var dr=class extends Ns{constructor(t,e,s,r="storage"){super(t,r,e,s),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s}toJSON(){return E({},super.toJSON())}},Ya=class extends Ns{constructor(t,e,s="storage"){super(t,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function xs(t,e,s){const r=E({},t),a=e.toLowerCase();for(const i of Object.keys(r))i.toLowerCase()===a&&delete r[i];return r[a]=s,r}function go(t){const e={};for(const[s,r]of Object.entries(t))e[s.toLowerCase()]=r;return e}const mo=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),vo=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},hr=t=>{if(Array.isArray(t))return t.map(s=>hr(s));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([s,r])=>{const a=s.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[a]=hr(r)}),e},bo=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Qr=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(t)},yo=async(t,e,s,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const a=t;let i=parseInt(String(a.status),10);Number.isFinite(i)||(i=500),a.json().then(n=>{const o=(n==null?void 0:n.statusCode)||(n==null?void 0:n.code)||i+"";e(new dr(Qr(n),i,o,r))}).catch(()=>{const n=i+"";e(new dr(a.statusText||`HTTP ${i} error`,i,n,r))})}else e(new Ya(Qr(t),t,r))},wo=(t,e,s,r)=>{const a={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return E(E({},a),s);if(vo(r)){var i;const n=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(n))l.toLowerCase()==="content-type"&&(o=c);a.headers=xs(n,"Content-Type",(i=o)!==null&&i!==void 0?i:"application/json"),a.body=JSON.stringify(r)}else a.body=r;return e!=null&&e.duplex&&(a.duplex=e.duplex),E(E({},a),s)};async function jt(t,e,s,r,a,i,n){return new Promise((o,l)=>{t(s,wo(e,r,a,i)).then(c=>{if(!c.ok)throw c;if(r!=null&&r.noResolveJson)return c;if(n==="vectors"){const d=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!d||!d.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>yo(c,l,r,n))})}function Xa(t="storage"){return{get:async(e,s,r,a)=>jt(e,"GET",s,r,a,void 0,t),post:async(e,s,r,a,i)=>jt(e,"POST",s,a,i,r,t),put:async(e,s,r,a,i)=>jt(e,"PUT",s,a,i,r,t),head:async(e,s,r,a)=>jt(e,"HEAD",s,E(E({},r),{},{noResolveJson:!0}),a,void 0,t),remove:async(e,s,r,a,i)=>jt(e,"DELETE",s,a,i,r,t)}}const _o=Xa("storage"),{get:Wt,post:ie,put:ur,head:ko,remove:_r}=_o,Z=Xa("vectors");var _t=class{constructor(t,e={},s,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=go(e),this.fetch=mo(s),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=xs(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(Us(s))return{data:null,error:s};throw s}}};let Qa;Qa=Symbol.toStringTag;var So=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Qa]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Us(e))return{data:null,error:e};throw e}}};let Za;Za=Symbol.toStringTag;var Eo=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Za]="BlobDownloadBuilder",this.promise=null}asStream(){return new So(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Us(e))return{data:null,error:e};throw e}}};const xo={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Zr={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var $o=class extends _t{constructor(t,e={},s,r){super(t,e,r,"storage"),this.bucketId=s}async uploadOrUpdate(t,e,s,r){var a=this;return a.handleOperation(async()=>{let i;const n=E(E({},Zr),r);let o=E(E({},a.headers),t==="POST"&&{"x-upsert":String(n.upsert)});const l=n.metadata;if(typeof Blob<"u"&&s instanceof Blob?(i=new FormData,i.append("cacheControl",n.cacheControl),l&&i.append("metadata",a.encodeMetadata(l)),i.append("",s)):typeof FormData<"u"&&s instanceof FormData?(i=s,i.has("cacheControl")||i.append("cacheControl",n.cacheControl),l&&!i.has("metadata")&&i.append("metadata",a.encodeMetadata(l))):(i=s,o["cache-control"]=`max-age=${n.cacheControl}`,o["content-type"]=n.contentType,l&&(o["x-metadata"]=a.toBase64(a.encodeMetadata(l))),(typeof ReadableStream<"u"&&i instanceof ReadableStream||i&&typeof i=="object"&&"pipe"in i&&typeof i.pipe=="function")&&!n.duplex&&(n.duplex="half")),r!=null&&r.headers)for(const[u,f]of Object.entries(r.headers))o=xs(o,u,f);const c=a._removeEmptyFolders(e),d=a._getFinalPath(c),h=await(t=="PUT"?ur:ie)(a.fetch,`${a.url}/object/${d}`,i,E({headers:o},n!=null&&n.duplex?{duplex:n.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(t,e,s){return this.uploadOrUpdate("POST",t,e,s)}async uploadToSignedUrl(t,e,s,r){var a=this;const i=a._removeEmptyFolders(t),n=a._getFinalPath(i),o=new URL(a.url+`/object/upload/sign/${n}`);return o.searchParams.set("token",e),a.handleOperation(async()=>{let l;const c=E(E({},Zr),r);let d=E(E({},a.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",a.encodeMetadata(h)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",a.encodeMetadata(h))):(l=s,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType,h&&(d["x-metadata"]=a.toBase64(a.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),r!=null&&r.headers)for(const[u,f]of Object.entries(r.headers))d=xs(d,u,f);return{path:i,fullPath:(await ur(a.fetch,o.toString(),l,E({headers:d},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var s=this;return s.handleOperation(async()=>{let r=s._getFinalPath(t);const a=E({},s.headers);e!=null&&e.upsert&&(a["x-upsert"]="true");const i=await ie(s.fetch,`${s.url}/object/upload/sign/${r}`,{},{headers:a}),n=new URL(s.url+i.url),o=n.searchParams.get("token");if(!o)throw new Ns("No token returned by API");return{signedUrl:n.toString(),path:t,token:o}})}async update(t,e,s){return this.uploadOrUpdate("PUT",t,e,s)}async move(t,e,s){var r=this;return r.handleOperation(async()=>await ie(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:r.headers}))}async copy(t,e,s){var r=this;return r.handleOperation(async()=>({path:(await ie(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,s){var r=this;return r.handleOperation(async()=>{let a=r._getFinalPath(t);const i=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let n=await ie(r.fetch,`${r.url}/object/sign/${a}`,E({expiresIn:e},i?{transform:s.transform}:{}),{headers:r.headers});const o=new URLSearchParams;s!=null&&s.download&&o.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&o.set("cacheNonce",String(s.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${r.url}${n.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,s){var r=this;return r.handleOperation(async()=>{const a=await ie(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),i=new URLSearchParams;s!=null&&s.download&&i.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&i.set("cacheNonce",String(s.cacheNonce));const n=i.toString();return a.map(o=>E(E({},o),{},{signedUrl:o.signedURL?encodeURI(`${r.url}${o.signedURL}${n?`&${n}`:""}`):null}))})}download(t,e,s){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",a=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(a,e.transform),(e==null?void 0:e.cacheNonce)!=null&&a.set("cacheNonce",String(e.cacheNonce));const i=a.toString(),n=this._getFinalPath(t),o=()=>Wt(this.fetch,`${this.url}/${r}/${n}${i?`?${i}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new Eo(o,this.shouldThrowOnError)}async info(t){var e=this;const s=e._getFinalPath(t);return e.handleOperation(async()=>hr(await Wt(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(t){var e=this;const s=e._getFinalPath(t);try{return await ko(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(a){if(e.shouldThrowOnError)throw a;if(Us(a)){var r;const i=a instanceof dr?a.status:a instanceof Ya?(r=a.originalError)===null||r===void 0?void 0:r.status:void 0;if(i!==void 0&&[400,404].includes(i))return{data:!1,error:a}}throw a}}getPublicUrl(t,e){const s=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const a=r.toString(),i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${s}`)+(a?`?${a}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await _r(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,s){var r=this;return r.handleOperation(async()=>{const a=E(E(E({},xo),e),{},{prefix:t||""});return await ie(r.fetch,`${r.url}/object/list/${r.bucketId}`,a,{headers:r.headers},s)})}async listV2(t,e){var s=this;return s.handleOperation(async()=>{const r=E({},t);return await ie(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,r,{headers:s.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const To="2.108.2",as={"X-Client-Info":`storage-js/${To}`};var Ro=class extends _t{constructor(t,e={},s,r){const a=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(a.hostname)&&!a.hostname.includes("storage.supabase.")&&(a.hostname=a.hostname.replace("supabase.","storage.supabase."));const i=a.href.replace(/\/$/,""),n=E(E({},as),e);super(i,n,s,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(t);return await Wt(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Wt(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var s=this;return s.handleOperation(async()=>await ie(s.fetch,`${s.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(t,e){var s=this;return s.handleOperation(async()=>await ur(s.fetch,`${s.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await ie(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await _r(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Ao=class extends _t{constructor(t,e={},s){const r=t.replace(/\/$/,""),a=E(E({},as),e);super(r,a,s,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await ie(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&s.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&s.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&s.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&s.set("sortOrder",t.sortOrder),t!=null&&t.search&&s.set("search",t.search);const r=s.toString(),a=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await Wt(e.fetch,a,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await _r(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!bo(t))throw new Ns("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new ho({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(s,{get(a,i){const n=a[i];return typeof n!="function"?n:async(...o)=>{try{return{data:await n.apply(a,o),error:null}}catch(l){if(r)throw l;return{data:null,error:l}}}}})}},Oo=class extends _t{constructor(t,e={},s){const r=t.replace(/\/$/,""),a=E(E({},as),{},{"Content-Type":"application/json"},e);super(r,a,s,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var s=this;return s.handleOperation(async()=>await Z.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var s=this;return s.handleOperation(async()=>await Z.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers})||{})}},jo=class extends _t{constructor(t,e={},s){const r=t.replace(/\/$/,""),a=E(E({},as),{},{"Content-Type":"application/json"},e);super(r,a,s,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Co=class extends _t{constructor(t,e={},s){const r=t.replace(/\/$/,""),a=E(E({},as),{},{"Content-Type":"application/json"},e);super(r,a,s,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Z.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Po=class extends Co{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Io(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,s=this;return e().call(s,t)}async getBucket(t){var e=()=>super.getBucket,s=this;return e().call(s,t)}async listBuckets(t={}){var e=()=>super.listBuckets,s=this;return e().call(s,t)}async deleteBucket(t){var e=()=>super.deleteBucket,s=this;return e().call(s,t)}},Io=class extends Oo{constructor(t,e,s,r){super(t,e,r),this.vectorBucketName=s}async createIndex(t){var e=()=>super.createIndex,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,t)}index(t){return new qo(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},qo=class extends jo{constructor(t,e,s,r,a){super(t,e,a),this.vectorBucketName=s,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(t){var e=()=>super.getVectors,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,s=this;return e().call(s,E(E({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},Lo=class extends Ro{constructor(t,e={},s,r){super(t,e,s,r)}from(t){return new $o(this.url,this.headers,t,this.fetch)}get vectors(){return new Po(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Ao(this.url+"/iceberg",this.headers,this.fetch)}};const ei="2.108.2",ye=30*1e3,Pt=3,Js=Pt*ye,No=2*ye,Uo="http://localhost:9999",Do="supabase.auth.token",Bo={"X-Client-Info":`gotrue-js/${ei}`},fr="X-Supabase-Api-Version",ti={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Ho=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,zo=600*1e3;class Kt extends Error{constructor(e,s,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function w(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class Mo extends Kt{constructor(e,s,r){super(e,s,r),this.name="AuthApiError",this.status=s,this.code=r}}function Fo(t){return w(t)&&t.name==="AuthApiError"}class ce extends Kt{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class pe extends Kt{constructor(e,s,r,a){super(e,r,a),this.name=s,this.status=r}}class z extends pe{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function fs(t){return w(t)&&t.name==="AuthSessionMissingError"}class st extends pe{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ps extends pe{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class gs extends pe{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Wo(t){return w(t)&&t.name==="AuthImplicitGrantRedirectError"}class ea extends pe{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Ko extends pe{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class pr extends pe{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function ta(t){return w(t)&&t.name==="AuthRetryableFetchError"}class sa extends pe{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Go(t){return w(t)&&t.name==="AuthRefreshDiscardedError"}class ra extends pe{constructor(e,s,r){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class $s extends pe{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ts="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),aa=` 	
\r=`.split(""),Vo=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<aa.length;e+=1)t[aa[e].charCodeAt(0)]=-2;for(let e=0;e<Ts.length;e+=1)t[Ts[e].charCodeAt(0)]=e;return t})();function ia(t,e,s){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;s(Ts[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;s(Ts[r]),e.queuedBits-=6}}function si(t,e,s){const r=Vo[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function na(t){const e=[],s=n=>{e.push(String.fromCodePoint(n))},r={utf8seq:0,codepoint:0},a={queue:0,queuedBits:0},i=n=>{Xo(n,r,s)};for(let n=0;n<t.length;n+=1)si(t.charCodeAt(n),a,i);return e.join("")}function Jo(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function Yo(t,e){for(let s=0;s<t.length;s+=1){let r=t.charCodeAt(s);if(r>55295&&r<=56319){const a=(r-55296)*1024&65535;r=(t.charCodeAt(s+1)-56320&65535|a)+65536,s+=1}Jo(r,e)}}function Xo(t,e,s){if(e.utf8seq===0){if(t<=127){s(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function ht(t){const e=[],s={queue:0,queuedBits:0},r=a=>{e.push(a)};for(let a=0;a<t.length;a+=1)si(t.charCodeAt(a),s,r);return new Uint8Array(e)}function Qo(t){const e=[];return Yo(t,s=>e.push(s)),new Uint8Array(e)}function Me(t){const e=[],s={queue:0,queuedBits:0},r=a=>{e.push(a)};return t.forEach(a=>ia(a,s,r)),ia(null,s,r),e.join("")}function Zo(t){return Math.round(Date.now()/1e3)+t}function el(){return Symbol("auth-callback")}const K=()=>typeof window<"u"&&typeof document<"u",Le={tested:!1,writable:!1},ri=()=>{if(!K())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Le.tested)return Le.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),Le.tested=!0,Le.writable=!0}catch{Le.tested=!0,Le.writable=!1}return Le.writable};function tl(t){const e={},s=new URL(t);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((a,i)=>{e[i]=a})}catch{}return s.searchParams.forEach((r,a)=>{e[a]=r}),e}const ai=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),sl=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",lt=async(t,e,s)=>{await t.setItem(e,JSON.stringify(s))},re=async(t,e)=>{const s=await t.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},L=async(t,e)=>{await t.removeItem(e)};class Ds{constructor(){this.promise=new Ds.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}Ds.promiseConstructor=Promise;function ms(t){const e=t.split(".");if(e.length!==3)throw new $s("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Ho.test(e[r]))throw new $s("JWT not in base64url format");return{header:JSON.parse(na(e[0])),payload:JSON.parse(na(e[1])),signature:ht(e[2]),raw:{header:e[0],payload:e[1]}}}async function rl(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function al(t,e){return new Promise((r,a)=>{(async()=>{for(let i=0;i<1/0;i++)try{const n=await t(i);if(!e(i,null,n)){r(n);return}}catch(n){if(!e(i,n)){a(n);return}}})()})}function il(t){return("0"+t.toString(16)).substr(-2)}function nl(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=s.length;let a="";for(let i=0;i<56;i++)a+=s.charAt(Math.floor(Math.random()*r));return a}return crypto.getRandomValues(e),Array.from(e,il).join("")}async function ol(t){const s=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",s),a=new Uint8Array(r);return Array.from(a).map(i=>String.fromCharCode(i)).join("")}async function ll(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const s=await ol(t);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ne(t,e,s=!1){const r=nl();let a=r;s&&(a+="/recovery"),await lt(t,`${e}-code-verifier`,a);const i=await ll(r);return[i,r===i?"plain":"s256"]}const cl=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function dl(t){const e=t.headers.get(fr);if(!e||!e.match(cl))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function hl(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function ul(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const fl=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function me(t){if(!fl.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function ae(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Ys(){const t={};return new Proxy(t,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const r=s.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function pl(t,e){return new Proxy(t,{get:(s,r,a)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const i=r.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)"||i==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,r,a)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,r,a)}})}function oa(t){return JSON.parse(JSON.stringify(t))}const He=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},gl=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function la(t){var e;if(!sl(t))throw new pr(He(t),0);if(gl.includes(t.status))throw new pr(He(t),t.status);let s;try{s=await t.json()}catch(i){throw new ce(He(i),i)}let r;const a=dl(t);if(a&&a.getTime()>=ti["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?r=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(r=s.error_code),r){if(r==="weak_password")throw new ra(He(s),t.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new z}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((i,n)=>i&&typeof n=="string",!0))throw new ra(He(s),t.status,s.weak_password.reasons);throw new Mo(He(s),t.status||500,r)}const ml=(t,e,s,r)=>{const a={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),a.body=JSON.stringify(r),Object.assign(Object.assign({},a),s))};async function k(t,e,s,r){var a;const i=Object.assign({},r==null?void 0:r.headers);i[fr]||(i[fr]=ti["2024-01-01"].name),r!=null&&r.jwt&&(i.Authorization=`Bearer ${r.jwt}`);const n=(a=r==null?void 0:r.query)!==null&&a!==void 0?a:{};r!=null&&r.redirectTo&&(n.redirect_to=r.redirectTo);const o=Object.keys(n).length?"?"+new URLSearchParams(n).toString():"",l=await vl(t,e,s+o,{headers:i,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function vl(t,e,s,r,a,i){const n=ml(e,r,a,i);let o;try{o=await t(s,Object.assign({},n))}catch(l){throw console.error(l),new pr(He(l),0)}if(o.ok||await la(o),r!=null&&r.noResolveJson)return o;try{return await o.json()}catch(l){await la(l)}}function te(t){var e;let s=null;wl(t)&&(s=Object.assign({},t),t.expires_at||(s.expires_at=Zo(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:s,user:r},error:null}}function ca(t){const e=te(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((s,r)=>s&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Ae(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function bl(t){return{data:t,error:null}}function yl(t){const{action_link:e,email_otp:s,hashed_token:r,redirect_to:a,verification_type:i}=t,n=Ls(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:s,hashed_token:r,redirect_to:a,verification_type:i},l=Object.assign({},n);return{data:{properties:o,user:l},error:null}}function da(t){return t}function wl(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const Xs=["global","local","others"];class _l{constructor({url:e="",headers:s={},fetch:r,experimental:a}){this.url=e,this.headers=s,this.fetch=ai(r),this.experimental=a??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=Xs[0]){if(Xs.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Xs.join(", ")}`);try{return await k(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(w(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,s={}){try{return await k(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Ae})}catch(r){if(w(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:s}=e,r=Ls(e,["options"]),a=Object.assign(Object.assign({},r),s);return"newEmail"in r&&(a.new_email=r==null?void 0:r.newEmail,delete a.newEmail),await k(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:a,headers:this.headers,xform:yl,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(w(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await k(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ae})}catch(s){if(w(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,r,a,i,n,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await k(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:"",per_page:(i=(a=e==null?void 0:e.perPage)===null||a===void 0?void 0:a.toString())!==null&&i!==void 0?i:""},xform:da});if(d.error)throw d.error;const h=await d.json(),u=(n=d.headers.get("x-total-count"))!==null&&n!==void 0?n:0,f=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(p=>{const m=parseInt(p.split(";")[0].split("=")[1].substring(0,1)),_=JSON.parse(p.split(";")[1].split("=")[1]);c[`${_}Page`]=m}),c.total=parseInt(u)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(w(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){me(e);try{return await k(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ae})}catch(s){if(w(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){me(e);try{return await k(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:Ae})}catch(r){if(w(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,s=!1){me(e);try{return await k(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:Ae})}catch(r){if(w(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){me(e.userId);try{const{data:s,error:r}=await k(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:a=>({data:{factors:a},error:null})});return{data:s,error:r}}catch(s){if(w(s))return{data:null,error:s};throw s}}async _deleteFactor(e){me(e.userId),me(e.id);try{return{data:await k(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(w(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,r,a,i,n,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await k(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:"",per_page:(i=(a=e==null?void 0:e.perPage)===null||a===void 0?void 0:a.toString())!==null&&i!==void 0?i:""},xform:da});if(d.error)throw d.error;const h=await d.json(),u=(n=d.headers.get("x-total-count"))!==null&&n!==void 0?n:0,f=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(p=>{const m=parseInt(p.split(";")[0].split("=")[1].substring(0,1)),_=JSON.parse(p.split(";")[1].split("=")[1]);c[`${_}Page`]=m}),c.total=parseInt(u)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(w(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await k(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await k(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await k(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(w(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await k(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(w(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await k(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await k(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:r=>{var a;return{data:{providers:(a=r==null?void 0:r.providers)!==null&&a!==void 0?a:[]},error:null}}})}catch(s){if(w(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await k(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await k(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await k(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(w(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await k(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(w(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){ae(this.experimental),me(e.userId);try{return await k(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(w(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){ae(this.experimental),me(e.userId),me(e.passkeyId);try{return await k(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(w(s))return{data:null,error:s};throw s}}}function ha(t={}){return{getItem:e=>t[e]||null,setItem:(e,s)=>{t[e]=s},removeItem:e=>{delete t[e]}}}globalThis&&ri()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class kl extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Sl(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function ii(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function El(t){return parseInt(t,16)}function xl(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function $l(t){var e;const{chainId:s,domain:r,expirationTime:a,issuedAt:i=new Date,nonce:n,notBefore:o,requestId:l,resources:c,scheme:d,uri:h,version:u}=t;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(n&&n.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${n}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(u!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${u}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const f=ii(t.address),p=d?`${d}://${r}`:r,m=t.statement?`${t.statement}
`:"",_=`${p} wants you to sign in with your Ethereum account:
${f}

${m}`;let y=`URI: ${h}
Version: ${u}
Chain ID: ${s}${n?`
Nonce: ${n}`:""}
Issued At: ${i.toISOString()}`;if(a&&(y+=`
Expiration Time: ${a.toISOString()}`),o&&(y+=`
Not Before: ${o.toISOString()}`),l&&(y+=`
Request ID: ${l}`),c){let b=`
Resources:`;for(const v of c){if(!v||typeof v!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);b+=`
- ${v}`}y+=b}return`${_}
${y}`}class U extends Error{constructor({message:e,code:s,cause:r,name:a}){var i;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(i=a??(r instanceof Error?r.name:void 0))!==null&&i!==void 0?i:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Rs extends U{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function Tl({error:t,options:e}){var s,r,a;const{publicKey:i}=e;if(!i)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new U({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((s=i.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new U({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=i.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new U({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((a=i.authenticatorSelection)===null||a===void 0?void 0:a.userVerification)==="required")return new U({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new U({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new U({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return i.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new U({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new U({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const n=window.location.hostname;if(ni(n)){if(i.rp.id!==n)return new U({message:`The RP ID "${i.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new U({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(i.user.id.byteLength<1||i.user.id.byteLength>64)return new U({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new U({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new U({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function Rl({error:t,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new U({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new U({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(ni(r)){if(s.rpId!==r)return new U({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new U({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new U({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new U({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Al{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const gr=new Al;function ua(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:s,excludeCredentials:r}=t,a=Ls(t,["challenge","user","excludeCredentials"]),i=ht(e).buffer,n=Object.assign(Object.assign({},s),{id:ht(s.id).buffer}),o=Object.assign(Object.assign({},a),{challenge:i,user:n});if(r&&r.length>0){o.excludeCredentials=new Array(r.length);for(let l=0;l<r.length;l++){const c=r[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:ht(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function fa(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:s}=t,r=Ls(t,["challenge","allowCredentials"]),a=ht(e).buffer,i=Object.assign(Object.assign({},r),{challenge:a});if(s&&s.length>0){i.allowCredentials=new Array(s.length);for(let n=0;n<s.length;n++){const o=s[n];i.allowCredentials[n]=Object.assign(Object.assign({},o),{id:ht(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return i}function pa(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t;return{id:t.id,rawId:t.id,response:{attestationObject:Me(new Uint8Array(t.response.attestationObject)),clientDataJSON:Me(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function ga(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t,r=t.getClientExtensionResults(),a=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:Me(new Uint8Array(a.authenticatorData)),clientDataJSON:Me(new Uint8Array(a.clientDataJSON)),signature:Me(new Uint8Array(a.signature)),userHandle:a.userHandle?Me(new Uint8Array(a.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function ni(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function As(){var t,e;return!!(K()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function oi(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Rs("Browser returned unexpected credential type",e)}:{data:null,error:new Rs("Empty credential response",e)}}catch(e){return{data:null,error:Tl({error:e,options:t})}}}async function li(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Rs("Browser returned unexpected credential type",e)}:{data:null,error:new Rs("Empty credential response",e)}}catch(e){return{data:null,error:Rl({error:e,options:t})}}}const Ol={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},jl={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Os(...t){const e=a=>a!==null&&typeof a=="object"&&!Array.isArray(a),s=a=>a instanceof ArrayBuffer||ArrayBuffer.isView(a),r={};for(const a of t)if(a)for(const i in a){const n=a[i];if(n!==void 0)if(Array.isArray(n))r[i]=n;else if(s(n))r[i]=n;else if(e(n)){const o=r[i];e(o)?r[i]=Os(o,n):r[i]=Os(n)}else r[i]=n}return r}function Cl(t,e){return Os(Ol,t,e||{})}function Pl(t,e){return Os(jl,t,e||{})}class Il{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:r,signal:a},i){var n;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!o)return{data:null,error:l};const c=a??gr.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:d}=o.webauthn.credential_options.publicKey;if(!d.name){const h=r;if(h)d.name=`${d.id}:${h}`;else{const f=(await this.client.getUser()).data.user,p=((n=f==null?void 0:f.user_metadata)===null||n===void 0?void 0:n.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";d.name=`${d.id}:${p}`}}d.displayName||(d.displayName=d.name)}switch(o.webauthn.type){case"create":{const d=Cl(o.webauthn.credential_options.publicKey,i==null?void 0:i.create),{data:h,error:u}=await oi({publicKey:d,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:u}}case"request":{const d=Pl(o.webauthn.credential_options.publicKey,i==null?void 0:i.request),{data:h,error:u}=await li(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:d,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:u}}}}catch(o){return w(o)?{data:null,error:o}:{data:null,error:new ce("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:s,webauthn:r}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:a}={}},i){if(!s)return{data:null,error:new Kt("rpId is required for WebAuthn authentication")};try{if(!As())return{data:null,error:new ce("Browser does not support WebAuthn",null)};const{data:n,error:o}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:r},signal:a},{request:i});if(!n)return{data:null,error:o};const{webauthn:l}=n;return this._verify({factorId:e,challengeId:n.challengeId,webauthn:{type:l.type,rpId:s,rpOrigins:r,credential_response:l.credential_response}})}catch(n){return w(n)?{data:null,error:n}:{data:null,error:new ce("Unexpected error in authenticate",n)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:a}={}},i){if(!s)return{data:null,error:new Kt("rpId is required for WebAuthn registration")};try{if(!As())return{data:null,error:new ce("Browser does not support WebAuthn",null)};const{data:n,error:o}=await this._enroll({friendlyName:e});if(!n)return await this.client.mfa.listFactors().then(d=>{var h;return(h=d.data)===null||h===void 0?void 0:h.all.find(u=>u.factor_type==="webauthn"&&u.friendly_name===e&&u.status!=="unverified")}).then(d=>d?this.client.mfa.unenroll({factorId:d==null?void 0:d.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:n.id,friendlyName:n.friendly_name,webauthn:{rpId:s,rpOrigins:r},signal:a},{create:i});return l?this._verify({factorId:n.id,challengeId:l.challengeId,webauthn:{rpId:s,rpOrigins:r,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(n){return w(n)?{data:null,error:n}:{data:null,error:new ce("Unexpected error in register",n)}}}}Sl();const ql={url:Uo,storageKey:Do,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Bo,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},rt={};class Gt{get jwks(){var e,s;return(s=(e=rt[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){rt[this.storageKey]=Object.assign(Object.assign({},rt[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=rt[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){rt[this.storageKey]=Object.assign(Object.assign({},rt[this.storageKey]),{cachedAt:e})}constructor(e){var s,r,a;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const i=Object.assign(Object.assign({},ql),e);if(this.storageKey=i.storageKey,this.instanceID=(s=Gt.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Gt.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.instanceID>0&&K()){const n=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(n),this.logDebugMessages&&console.trace(n)}if(this.persistSession=i.persistSession,this.autoRefreshToken=i.autoRefreshToken,this.experimental=(r=i.experimental)!==null&&r!==void 0?r:{},this.admin=new _l({url:i.url,headers:i.headers,fetch:i.fetch,experimental:this.experimental}),this.url=i.url,this.headers=i.headers,this.fetch=ai(i.fetch),this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,this.throwOnError=i.throwOnError,this.lockAcquireTimeout=i.lockAcquireTimeout,i.lock!=null&&(this.lock=i.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Il(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:ri()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ha(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=ha(this.memoryStorage)),K()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(n){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",n)}(a=this.broadcastChannel)===null||a===void 0||a.addEventListener("message",async n=>{this._debug("received broadcast notification from other tab or client",n),(n.data.event==="TOKEN_REFRESHED"||n.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(n.data.event,n.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}i.skipAutoInitialize||this.initialize().catch(n=>{this._debug("#initialize()","error",n)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${ei}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let s={},r="none";if(K()&&(s=tl(window.location.href),this._isImplicitGrantCallback(s)?r="implicit":await this._isPKCECallback(s)&&(r="pkce")),K()&&this.detectSessionInUrl&&r!=="none"){const{data:a,error:i}=await this._getSessionFromURL(s,r);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),Wo(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return{error:i}}const{session:n,redirectType:o}=a;return this._debug("#_initialize()","detected session in URL",n,"redirect type",o),await this._saveSession(n),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",n):await this._notifyAllSubscribers("SIGNED_IN",n)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return w(s)?this._returnResult({error:s}):this._returnResult({error:new ce("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,r,a;try{const i=await k(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}},xform:te}),{data:n,error:o}=i;if(o||!n)return this._returnResult({data:{user:null,session:null},error:o});const l=n.session,c=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(w(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signUp(e){var s,r,a;try{let i;if("email"in e){const{email:d,password:h,options:u}=e;let f=null,p=null;this.flowType==="pkce"&&([f,p]=await Ne(this.storage,this.storageKey)),i=await k(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:u==null?void 0:u.emailRedirectTo,body:{email:d,password:h,data:(s=u==null?void 0:u.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken},code_challenge:f,code_challenge_method:p},xform:te})}else if("phone"in e){const{phone:d,password:h,options:u}=e;i=await k(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(r=u==null?void 0:u.data)!==null&&r!==void 0?r:{},channel:(a=u==null?void 0:u.channel)!==null&&a!==void 0?a:"sms",gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}},xform:te})}else throw new ps("You must provide either an email or phone number and a password");const{data:n,error:o}=i;if(o||!n)return await L(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=n.session,c=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithPassword(e){try{let s;if("email"in e){const{email:i,password:n,options:o}=e;s=await k(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:n,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:ca})}else if("phone"in e){const{phone:i,password:n,options:o}=e;s=await k(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:n,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:ca})}else throw new ps("You must provide either an email or phone number and a password");const{data:r,error:a}=s;if(a)return this._returnResult({data:{user:null,session:null},error:a});if(!r||!r.session||!r.user){const i=new st;return this._returnResult({data:{user:null,session:null},error:i})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:a})}catch(s){if(w(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,r,a,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(a=e.options)===null||a===void 0?void 0:a.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,r,a,i,n,o,l,c,d,h,u;let f,p;if("message"in e)f=e.message,p=e.signature;else{const{chain:m,wallet:_,statement:y,options:b}=e;let v;if(K())if(typeof _=="object")v=_;else{const ee=window;if("ethereum"in ee&&typeof ee.ethereum=="object"&&"request"in ee.ethereum&&typeof ee.ethereum.request=="function")v=ee.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof _!="object"||!(b!=null&&b.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");v=_}const $=new URL((s=b==null?void 0:b.url)!==null&&s!==void 0?s:window.location.href),M=await v.request({method:"eth_requestAccounts"}).then(ee=>ee).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!M||M.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const j=ii(M[0]);let C=(r=b==null?void 0:b.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!C){const ee=await v.request({method:"eth_chainId"});C=El(ee)}const Ms={domain:$.host,address:j,statement:y,uri:$.href,version:"1",chainId:C,nonce:(a=b==null?void 0:b.signInWithEthereum)===null||a===void 0?void 0:a.nonce,issuedAt:(n=(i=b==null?void 0:b.signInWithEthereum)===null||i===void 0?void 0:i.issuedAt)!==null&&n!==void 0?n:new Date,expirationTime:(o=b==null?void 0:b.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=b==null?void 0:b.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=b==null?void 0:b.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(d=b==null?void 0:b.signInWithEthereum)===null||d===void 0?void 0:d.resources};f=$l(Ms),p=await v.request({method:"personal_sign",params:[xl(f),j]})}try{const{data:m,error:_}=await k(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:p},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(u=e.options)===null||u===void 0?void 0:u.captchaToken}}:null),xform:te});if(_)throw _;if(!m||!m.session||!m.user){const y=new st;return this._returnResult({data:{user:null,session:null},error:y})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:_})}catch(m){if(w(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async signInWithSolana(e){var s,r,a,i,n,o,l,c,d,h,u,f;let p,m;if("message"in e)p=e.message,m=e.signature;else{const{chain:_,wallet:y,statement:b,options:v}=e;let $;if(K())if(typeof y=="object")$=y;else{const j=window;if("solana"in j&&typeof j.solana=="object"&&("signIn"in j.solana&&typeof j.solana.signIn=="function"||"signMessage"in j.solana&&typeof j.solana.signMessage=="function"))$=j.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof y!="object"||!(v!=null&&v.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");$=y}const M=new URL((s=v==null?void 0:v.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in $&&$.signIn){const j=await $.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},v==null?void 0:v.signInWithSolana),{version:"1",domain:M.host,uri:M.href}),b?{statement:b}:null));let C;if(Array.isArray(j)&&j[0]&&typeof j[0]=="object")C=j[0];else if(j&&typeof j=="object"&&"signedMessage"in j&&"signature"in j)C=j;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)p=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),m=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in $)||typeof $.signMessage!="function"||!("publicKey"in $)||typeof $!="object"||!$.publicKey||!("toBase58"in $.publicKey)||typeof $.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");p=[`${M.host} wants you to sign in with your Solana account:`,$.publicKey.toBase58(),...b?["",b,""]:[""],"Version: 1",`URI: ${M.href}`,`Issued At: ${(a=(r=v==null?void 0:v.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&a!==void 0?a:new Date().toISOString()}`,...!((i=v==null?void 0:v.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${v.signInWithSolana.notBefore}`]:[],...!((n=v==null?void 0:v.signInWithSolana)===null||n===void 0)&&n.expirationTime?[`Expiration Time: ${v.signInWithSolana.expirationTime}`]:[],...!((o=v==null?void 0:v.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${v.signInWithSolana.chainId}`]:[],...!((l=v==null?void 0:v.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${v.signInWithSolana.nonce}`]:[],...!((c=v==null?void 0:v.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${v.signInWithSolana.requestId}`]:[],...!((h=(d=v==null?void 0:v.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...v.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const j=await $.signMessage(new TextEncoder().encode(p),"utf8");if(!j||!(j instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");m=j}}try{const{data:_,error:y}=await k(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:p,signature:Me(m)},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:te});if(y)throw y;if(!_||!_.session||!_.user){const b=new st;return this._returnResult({data:{user:null,session:null},error:b})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:y})}catch(_){if(w(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async _exchangeCodeForSession(e){const s=await re(this.storage,`${this.storageKey}-code-verifier`),[r,a]=(s??"").split("/");try{if(!r&&this.flowType==="pkce")throw new Ko;const{data:i,error:n}=await k(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:te});if(await L(this.storage,`${this.storageKey}-code-verifier`),n)throw n;if(!i||!i.session||!i.user){const o=new st;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers(a==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",i.session)),this._returnResult({data:Object.assign(Object.assign({},i),{redirectType:a??null}),error:n})}catch(i){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(i))return this._returnResult({data:{user:null,session:null,redirectType:null},error:i});throw i}}async signInWithIdToken(e){try{const{options:s,provider:r,token:a,access_token:i,nonce:n}=e,o=await k(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:a,access_token:i,nonce:n,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:te}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const d=new st;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(s){if(w(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,r,a,i,n;try{if("email"in e){const{email:o,options:l}=e;let c=null,d=null;this.flowType==="pkce"&&([c,d]=await Ne(this.storage,this.storageKey));const{error:h}=await k(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(s=l==null?void 0:l.data)!==null&&s!==void 0?s:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:d}=await k(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(a=l==null?void 0:l.data)!==null&&a!==void 0?a:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(n=l==null?void 0:l.channel)!==null&&n!==void 0?n:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:d})}throw new ps("You must provide either an email or phone number.")}catch(o){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var s,r;try{let a,i;"options"in e&&(a=(s=e.options)===null||s===void 0?void 0:s.redirectTo,i=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:n,error:o}=await k(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:a,xform:te});if(o)throw o;if(!n)throw new Error("An error occurred on token verification.");const l=n.session,c=n.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(a){if(w(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithSSO(e){var s,r,a,i,n;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await Ne(this.storage,this.storageKey));const c=await k(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(s=e.options)===null||s===void 0?void 0:s.redirectTo)!==null&&r!==void 0?r:void 0}),!((a=e==null?void 0:e.options)===null||a===void 0)&&a.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:bl});return!((i=c.data)===null||i===void 0)&&i.url&&K()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)throw r;if(!s)throw new z;const{error:a}=await k(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:a})})}catch(e){if(w(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const s=`${this.url}/resend`;if("email"in e){const{email:r,type:a,options:i}=e;let n=null,o=null;this.flowType==="pkce"&&([n,o]=await Ne(this.storage,this.storageKey));const{error:l}=await k(this.fetch,"POST",s,{headers:this.headers,body:{email:r,type:a,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken},code_challenge:n,code_challenge_method:o},redirectTo:i==null?void 0:i.emailRedirectTo});return l&&await L(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:r,type:a,options:i}=e,{data:n,error:o}=await k(this.fetch,"POST",s,{headers:this.headers,body:{phone:r,type:a,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:n==null?void 0:n.message_id},error:o})}throw new ps("You must provide either an email or phone number and a type")}catch(s){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),a=(async()=>(await r,await s()))();return this.pendingInLock.push((async()=>{try{await a}catch{}})()),a}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=s();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const a=[...this.pendingInLock];await Promise.all(a),this.pendingInLock.splice(0,a.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await re(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<Js:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const n=await re(this.userStorage,this.storageKey+"-user");n!=null&&n.user?e.user=n.user:e.user=Ys()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const n={value:this.suppressGetSessionWarning};e.user=pl(e.user,n),n.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:a,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await re(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:a},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let s;return this.lock!=null?s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):s=await this._getUser(),s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await k(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ae}):await this._useSession(async s=>{var r,a,i;const{data:n,error:o}=s;if(o)throw o;return!(!((r=n.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new z}:await k(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(a=n.session)===null||a===void 0?void 0:a.access_token)!==null&&i!==void 0?i:void 0,xform:Ae})})}catch(s){if(w(s))return fs(s)&&(await this._removeSession(),await L(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s)):await this._updateUser(e,s)}async _updateUser(e,s={}){try{return await this._useSession(async r=>{const{data:a,error:i}=r;if(i)throw i;if(!a.session)throw new z;const n=a.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await Ne(this.storage,this.storageKey));const{data:c,error:d}=await k(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s==null?void 0:s.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:n.access_token,xform:Ae});if(d)throw d;return n.user=c.user,await this._saveSession(n),await this._notifyAllSubscribers("USER_UPDATED",n),this._returnResult({data:{user:n.user},error:null})})}catch(r){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new z;const s=Date.now()/1e3;let r=s,a=!0,i=null;const{payload:n}=ms(e.access_token);if(n.exp&&(r=n.exp,a=r<=s),a){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};i=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});i={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:r-s,expires_at:r},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(s){if(w(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async s=>{var r;if(!e){const{data:n,error:o}=s;if(o)throw o;e=(r=n.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new z;const{data:a,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{user:null,session:null},error:i}):a?this._returnResult({data:{user:a.user,session:a},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(w(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var r;try{if(!K())throw new gs("No browser detected.");if(e.error||e.error_description||e.error_code)throw new gs(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new ea("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new gs("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new ea("No code detected.");const{data:v,error:$}=await this._exchangeCodeForSession(e.code);if($)throw $;const M=new URL(window.location.href);return M.searchParams.delete("code"),window.history.replaceState(window.history.state,"",M.toString()),{data:{session:v.session,redirectType:(r=v.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:a,provider_refresh_token:i,access_token:n,refresh_token:o,expires_in:l,expires_at:c,token_type:d}=e;if(!n||!l||!o||!d)throw new gs("No session defined in URL");const h=Math.round(Date.now()/1e3),u=parseInt(l);let f=h+u;c&&(f=parseInt(c));const p=f-h;p*1e3<=ye&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${u}s`);const m=f-u;h-m>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",m,f,h):h-m<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",m,f,h);const{data:_,error:y}=await this._getUser(n);if(y)throw y;const b={provider_token:a,provider_refresh_token:i,access_token:n,expires_in:u,expires_at:f,refresh_token:o,token_type:d,user:_.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:b,redirectType:e.type},error:null})}catch(a){if(w(a))return this._returnResult({data:{session:null,redirectType:null},error:a});throw a}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const s=await re(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&s)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var r;const{data:a,error:i}=s;if(i&&!fs(i))return this._returnResult({error:i});const n=(r=a.session)===null||r===void 0?void 0:r.access_token;if(n){const{error:o}=await this.admin.signOut(n,e);if(o&&!(Fo(o)&&(o.status===404||o.status===401||o.status===403)||fs(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await L(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const s=el(),r={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)}):await this._emitInitialSession(s)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async s=>{var r,a;try{const{data:{session:i},error:n}=s;if(n)throw n;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((a=this.stateChangeEmitters.get(e))===null||a===void 0?void 0:a.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),fs(i)?console.warn(i):console.error(i)}})}async resetPasswordForEmail(e,s={}){let r=null,a=null;this.flowType==="pkce"&&([r,a]=await Ne(this.storage,this.storageKey,!0));try{return await k(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:a,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(i){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(i))return this._returnResult({data:null,error:i});throw i}}async getUserIdentities(){var e;try{const{data:s,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;try{const{data:r,error:a}=await this._useSession(async i=>{var n,o,l,c,d;const{data:h,error:u}=i;if(u)throw u;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await k(this.fetch,"GET",f,{headers:this.headers,jwt:(d=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0})});if(a)throw a;return K()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(w(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var r;try{const{error:a,data:{session:i}}=s;if(a)throw a;const{options:n,provider:o,token:l,access_token:c,nonce:d}=e,h=await k(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=i==null?void 0:i.access_token)!==null&&r!==void 0?r:void 0,body:{provider:o,id_token:l,access_token:c,nonce:d,link_identity:!0,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:te}),{data:u,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!u||!u.session||!u.user?this._returnResult({data:{user:null,session:null},error:new st}):(u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("USER_UPDATED",u.session)),this._returnResult({data:u,error:f}))}catch(a){if(await L(this.storage,`${this.storageKey}-code-verifier`),w(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var r,a;const{data:i,error:n}=s;if(n)throw n;return await k(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(a=(r=i.session)===null||r===void 0?void 0:r.access_token)!==null&&a!==void 0?a:void 0})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s="#_refreshAccessToken()";this._debug(s,"begin");try{const r=Date.now();return await al(async a=>(a>0&&await rl(200*Math.pow(2,a-1)),this._debug(s,"refreshing attempt",a),await k(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:te})),(a,i)=>{const n=200*Math.pow(2,a);return i&&ta(i)&&Date.now()+n-r<ye})}catch(r){if(this._debug(s,"error",r),w(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",r),K()&&!s.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,s;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const a=await re(this.storage,this.storageKey);if(a&&this.userStorage){let n=await re(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!n&&(n={user:a.user},await lt(this.userStorage,this.storageKey+"-user",n)),a.user=(e=n==null?void 0:n.user)!==null&&e!==void 0?e:Ys()}else if(a&&!a.user&&!a.user){const n=await re(this.storage,this.storageKey+"-user");n&&(n!=null&&n.user)?(a.user=n.user,await L(this.storage,this.storageKey+"-user"),await lt(this.storage,this.storageKey,a)):a.user=Ys()}if(this._debug(r,"session from storage",a),!this._isValidSession(a)){this._debug(r,"session is not valid"),a!==null&&await this._removeSession();return}const i=((s=a.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Js;if(this._debug(r,`session has${i?"":" not"} expired with margin of ${Js}s`),i){if(this.autoRefreshToken&&a.refresh_token){const{error:n}=await this._callRefreshToken(a.refresh_token);n&&(Go(n)?this._debug(r,"refresh discarded by commit guard",n):this._debug(r,"refresh failed",n))}}else if(a.user&&a.user.__isUserNotAvailableProxy===!0)try{const{data:n,error:o}=await this._getUser(a.access_token);!o&&(n!=null&&n.user)?(a.user=n.user,await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(n){console.error("Error getting user data:",n),this._debug(r,"error getting user data, skipping SIGNED_IN notification",n)}else await this._notifyAllSubscribers("SIGNED_IN",a)}catch(a){this._debug(r,"error",a),console.error(a);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var s,r;if(!e)throw new z;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const a="#_callRefreshToken()";this._debug(a,"begin");try{this.refreshingDeferred=new Ds;const i=await re(this.storage,this.storageKey),{data:n,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!n.session)throw new z;const l=await re(this.storage,this.storageKey);if(i!==null&&(l===null||l.refresh_token!==i.refresh_token)){this._debug(a,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const u={data:null,error:new sa};return this.refreshingDeferred.resolve(u),u}const d=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==d){this._debug(a,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await L(this.storage,this.storageKey),this.userStorage&&await L(this.userStorage,this.storageKey+"-user");const u={data:null,error:new sa};return this.refreshingDeferred.resolve(u),u}await this._notifyAllSubscribers("TOKEN_REFRESHED",n.session);const h={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(i){if(this._debug(a,"error",i),w(i)){const n={data:null,error:i};if(!ta(i)){const o=await re(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(a,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+No},(s=this.refreshingDeferred)===null||s===void 0||s.resolve(n),n}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(i),i}finally{this.refreshingDeferred=null,this._debug(a,"end")}}async _notifyAllSubscribers(e,s,r=!0){const a=`#_notifyAllSubscribers(${e})`;this._debug(a,"begin",s,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:s});const i=[],n=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,s)}catch(l){i.push(l)}});if(await Promise.all(n),i.length>0){for(let o=0;o<i.length;o+=1)console.error(i[o]);throw i[0]}}finally{this._debug(a,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await L(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},e),r=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&s.user&&await lt(this.userStorage,this.storageKey+"-user",{user:s.user});const a=Object.assign({},s);delete a.user;const i=oa(a);await lt(this.storage,this.storageKey,i)}else{const a=oa(s);await lt(this.storage,this.storageKey,a)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await L(this.storage,this.storageKey),await L(this.storage,this.storageKey+"-code-verifier"),await L(this.storage,this.storageKey+"-user"),this.userStorage&&await L(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&K()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ye);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:r}}=s;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((r.expires_at*1e3-e)/ye);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${ye}ms, refresh threshold is ${Pt} ticks`),a<=Pt&&await this._callRefreshToken(r.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof kl)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async s=>{const{data:{session:r}}=s;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const a=Math.floor((r.expires_at*1e3-e)/ye);this._debug("#_autoRefreshTokenTick()",`access token expires in ${a} ticks, a tick lasts ${ye}ms, refresh threshold is ${Pt} ticks`),a<=Pt&&await this._callRefreshToken(r.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!K()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;if(this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(s,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,r){const a=[`provider=${encodeURIComponent(s)}`];if(r!=null&&r.redirectTo&&a.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&a.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[i,n]=await Ne(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(n)}`});a.push(o.toString())}if(r!=null&&r.queryParams){const i=new URLSearchParams(r.queryParams);a.push(i.toString())}return r!=null&&r.skipBrowserRedirect&&a.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${a.join("&")}`}async _unenroll(e){try{return await this._useSession(async s=>{var r;const{data:a,error:i}=s;return i?this._returnResult({data:null,error:i}):await k(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=a==null?void 0:a.session)===null||r===void 0?void 0:r.access_token})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var r,a;const{data:i,error:n}=s;if(n)return this._returnResult({data:null,error:n});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await k(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((a=l==null?void 0:l.totp)===null||a===void 0)&&a.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){const s=async()=>{try{return await this._useSession(async r=>{var a;const{data:i,error:n}=r;if(n)return this._returnResult({data:null,error:n});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?pa(e.webauthn.credential_response):ga(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await k(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(a=i==null?void 0:i.session)===null||a===void 0?void 0:a.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challenge(e){const s=async()=>{try{return await this._useSession(async r=>{var a;const{data:i,error:n}=r;if(n)return this._returnResult({data:null,error:n});const o=await k(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(a=i==null?void 0:i.session)===null||a===void 0?void 0:a.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:ua(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:fa(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challengeAndVerify(e){const{data:s,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:r}=await this.getUser();if(r)return{data:null,error:r};const a={all:[],phone:[],totp:[],webauthn:[]};for(const i of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])a.all.push(i),i.status==="verified"&&a[i.factor_type].push(i);return{data:a,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,r,a,i;if(e)try{const{payload:f}=ms(e);let p=null;f.aal&&(p=f.aal);let m=p;const{data:{user:_},error:y}=await this.getUser(e);if(y)return this._returnResult({data:null,error:y});((r=(s=_==null?void 0:_.factors)===null||s===void 0?void 0:s.filter($=>$.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(m="aal2");const v=f.amr||[];return{data:{currentLevel:p,nextLevel:m,currentAuthenticationMethods:v},error:null}}catch(f){if(w(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:n},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!n)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=ms(n.access_token);let c=null;l.aal&&(c=l.aal);let d=c;((i=(a=n.user.factors)===null||a===void 0?void 0:a.filter(f=>f.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(d="aal2");const u=l.amr||[];return{data:{currentLevel:c,nextLevel:d,currentAuthenticationMethods:u},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:r},error:a}=s;return a?this._returnResult({data:null,error:a}):r?await k(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new z})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async r=>{const{data:{session:a},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!a)return this._returnResult({data:null,error:new z});const n=await k(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:a.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return n.data&&n.data.redirect_url&&K()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(n.data.redirect_url),n})}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,s){try{return await this._useSession(async r=>{const{data:{session:a},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!a)return this._returnResult({data:null,error:new z});const n=await k(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:a.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return n.data&&n.data.redirect_url&&K()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(n.data.redirect_url),n})}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;return r?this._returnResult({data:null,error:r}):s?await k(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:a=>({data:a,error:null})}):this._returnResult({data:null,error:new z})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:r},error:a}=s;return a?this._returnResult({data:null,error:a}):r?(await k(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new z})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let r=s.keys.find(o=>o.kid===e);if(r)return r;const a=Date.now();if(r=this.jwks.keys.find(o=>o.kid===e),r&&this.jwks_cached_at+zo>a)return r;const{data:i,error:n}=await k(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(n)throw n;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=a,r=i.keys.find(o=>o.kid===e),!r)?null:r}async getClaims(e,s={}){try{let r=e;if(!r){const{data:f,error:p}=await this.getSession();if(p||!f.session)return this._returnResult({data:null,error:p});r=f.session.access_token}const{header:a,payload:i,signature:n,raw:{header:o,payload:l}}=ms(r);if(!(s!=null&&s.allowExpired))try{hl(i.exp)}catch(f){throw new $s(f instanceof Error?f.message:"JWT validation failed")}const c=!a.alg||a.alg.startsWith("HS")||!a.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(a.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!c){const{error:f}=await this.getUser(r);if(f)throw f;return{data:{claims:i,header:a,signature:n},error:null}}const d=ul(a.alg),h=await crypto.subtle.importKey("jwk",c,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,n,Qo(`${o}.${l}`)))throw new $s("Invalid JWT signature");return{data:{claims:i,header:a,signature:n},error:null}}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var s,r,a;ae(this.experimental);try{if(!As())return this._returnResult({data:null,error:new ce("Browser does not support WebAuthn",null)});const{data:i,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(n||!i)return this._returnResult({data:null,error:n});const o=fa(i.options),l=(a=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&a!==void 0?a:gr.createNewAbortSignal(),{data:c,error:d}=await li({publicKey:o,signal:l});if(d||!c)return this._returnResult({data:null,error:d??new ce("WebAuthn ceremony failed",null)});const h=ga(c);return this._verifyPasskeyAuthentication({challengeId:i.challenge_id,credential:h})}catch(i){if(w(i))return this._returnResult({data:null,error:i});throw i}}async registerPasskey(e){var s,r;ae(this.experimental);try{if(!As())return this._returnResult({data:null,error:new ce("Browser does not support WebAuthn",null)});const{data:a,error:i}=await this._startPasskeyRegistration();if(i||!a)return this._returnResult({data:null,error:i});const n=ua(a.options),o=(r=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&r!==void 0?r:gr.createNewAbortSignal(),{data:l,error:c}=await oi({publicKey:n,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new ce("WebAuthn ceremony failed",null)});const d=pa(l);return this._verifyPasskeyRegistration({challengeId:a.challenge_id,credential:d})}catch(a){if(w(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyRegistration(){ae(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new z});const{data:a,error:i}=await k(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:a,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){ae(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:a}=s;if(a)return this._returnResult({data:null,error:a});if(!r)return this._returnResult({data:null,error:new z});const{data:i,error:n}=await k(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:i,error:null})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;ae(this.experimental);try{const{data:r,error:a}=await k(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:r,error:null})}catch(r){if(w(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){ae(this.experimental);try{const{data:s,error:r}=await k(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:te});return r?this._returnResult({data:null,error:r}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){ae(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new z});const{data:a,error:i}=await k(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:n=>({data:n,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:a,error:null})})}catch(e){if(w(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){ae(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:a}=s;if(a)return this._returnResult({data:null,error:a});if(!r)return this._returnResult({data:null,error:new z});const{data:i,error:n}=await k(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:i,error:null})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){ae(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:a}=s;if(a)return this._returnResult({data:null,error:a});if(!r)return this._returnResult({data:null,error:new z});const{error:i}=await k(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(s){if(w(s))return this._returnResult({data:null,error:s});throw s}}}Gt.nextInstanceID={};const Ll=Gt,Nl="2.108.2";let It="",js;if(typeof Deno<"u"){var Qs;It="deno",js=(Qs=Deno.version)===null||Qs===void 0?void 0:Qs.deno}else if(typeof document<"u")It="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")It="react-native";else{var Zs;It="node",js=typeof process<"u"?(Zs=process.version)===null||Zs===void 0?void 0:Zs.replace(/^v/,""):void 0}const ci=[`runtime=${It}`];js&&ci.push(`runtime-version=${js}`);const Ul={"X-Client-Info":`supabase-js/${Nl}; ${ci.join("; ")}`},Dl={headers:Ul},Bl={schema:"public"},Hl={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},zl={},Ml={enabled:!1,respectSamplingDecision:!0};function Fl(t,e,s,r){function a(i){return i instanceof s?i:new s(function(n){n(i)})}return new(s||(s=Promise))(function(i,n){function o(d){try{c(r.next(d))}catch(h){n(h)}}function l(d){try{c(r.throw(d))}catch(h){n(h)}}function c(d){d.done?i(d.value):a(d.value).then(o,l)}c((r=r.apply(t,[])).next())})}let er=null;const Wl="@opentelemetry/api";function Kl(){return er===null&&(er=import(Wl).catch(()=>null)),er}function Gl(){return Fl(this,void 0,void 0,function*(){try{const t=yield Kl();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const s=e.traceparent;return s?{traceparent:s,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function Vl(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[s,r,a,i]=e;if(s.length!==2||r.length!==32||a.length!==16||i.length!==2)return null;const n=/^[0-9a-f]+$/i;return!n.test(s)||!n.test(r)||!n.test(a)||!n.test(i)||r==="00000000000000000000000000000000"||a==="0000000000000000"?null:{version:s,traceId:r,parentId:a,traceFlags:i,isSampled:(parseInt(i,16)&1)===1}}function Jl(t,e){if(!t||!e||e.length===0)return!1;let s;if(t instanceof URL)s=t;else try{s=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(Yl(s.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(s.hostname))return!0}else if(typeof r=="function"&&r(s))return!0}catch{continue}return!1}function Yl(t,e){if(e===t)return!0;if(e.startsWith("*.")){const s=e.slice(2);if(t.endsWith(s)&&(t===s||t.endsWith("."+s)))return!0}return!1}function Xl(t){const e=[];try{const s=new URL(t);e.push(s.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Vt(t){"@babel/helpers - typeof";return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt(t)}function Ql(t,e){if(Vt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(Vt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zl(t){var e=Ql(t,"string");return Vt(e)=="symbol"?e:e+""}function ec(t,e,s){return(e=Zl(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ma(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,r)}return s}function q(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ma(Object(s),!0).forEach(function(r){ec(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ma(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}const tc=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),sc=()=>Headers,rc=(t,e,s,r,a)=>{const i=tc(r),n=sc(),o=(a==null?void 0:a.enabled)===!0,l=(a==null?void 0:a.respectSamplingDecision)!==!1,c=o?Xl(e):null;return async(d,h)=>{var u;const f=(u=await s())!==null&&u!==void 0?u:t;let p=new n(h==null?void 0:h.headers);if(p.has("apikey")||p.set("apikey",t),p.has("Authorization")||p.set("Authorization",`Bearer ${f}`),c){const m=await ac(d,c,l);m&&(m.traceparent&&!p.has("traceparent")&&p.set("traceparent",m.traceparent),m.tracestate&&!p.has("tracestate")&&p.set("tracestate",m.tracestate),m.baggage&&!p.has("baggage")&&p.set("baggage",m.baggage))}return i(d,q(q({},h),{},{headers:p}))}};async function ac(t,e,s){if(!Jl(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await Gl();if(!r||!r.traceparent)return null;if(s){const a=Vl(r.traceparent);if(a&&!a.isSampled)return null}return r}function va(t){return typeof t=="boolean"?{enabled:t}:t}function ic(t){return t.endsWith("/")?t:t+"/"}function nc(t,e){var s,r,a,i,n,o;const{db:l,auth:c,realtime:d,global:h}=t,{db:u,auth:f,realtime:p,global:m}=e,_=va(t.tracePropagation),y=va(e.tracePropagation),b={db:q(q({},u),l),auth:q(q({},f),c),realtime:q(q({},p),d),storage:{},global:q(q(q({},m),h),{},{headers:q(q({},(s=m==null?void 0:m.headers)!==null&&s!==void 0?s:{}),(r=h==null?void 0:h.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(a=(i=_==null?void 0:_.enabled)!==null&&i!==void 0?i:y==null?void 0:y.enabled)!==null&&a!==void 0?a:!1,respectSamplingDecision:(n=(o=_==null?void 0:_.respectSamplingDecision)!==null&&o!==void 0?o:y==null?void 0:y.respectSamplingDecision)!==null&&n!==void 0?n:!0},accessToken:async()=>""};return t.accessToken?b.accessToken=t.accessToken:delete b.accessToken,b}function oc(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(ic(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var lc=class extends Ll{constructor(t){super(t)}},cc=class{constructor(t,e,s){var r,a;this.supabaseUrl=t,this.supabaseKey=e;const i=oc(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const n=`sb-${i.hostname.split(".")[0]}-auth-token`,o={db:Bl,realtime:zl,auth:q(q({},Hl),{},{storageKey:n}),global:Dl,tracePropagation:Ml},l=nc(s??{},o);if(this.settings=l,this.storageKey=(r=l.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(a=l.global.headers)!==null&&a!==void 0?a:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(d,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=rc(e,t,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(q({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(d=>this.realtime.setAuth(d)).catch(d=>console.warn("Failed to set initial Realtime auth token:",d)),this.rest=new kn(new URL("rest/v1",i).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new Lo(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new fn(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,s)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,s;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(s=r.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:r,userStorage:a,storageKey:i,flowType:n,lock:o,debug:l,throwOnError:c,experimental:d,lockAcquireTimeout:h,skipAutoInitialize:u},f,p){const m={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new lc({url:this.authUrl.href,headers:q(q({},m),f),storageKey:i,autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:r,userStorage:a,flowType:n,lock:o,debug:l,throwOnError:c,experimental:d,fetch:p,lockAcquireTimeout:h,skipAutoInitialize:u,hasCustomAuthorizationHeader:Object.keys(this.headers).some(_=>_.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new ao(this.realtimeUrl.href,q(q({},t),{},{params:q(q({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const kr=(t,e,s)=>new cc(t,e,s);function dc(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}dc()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const hc=t=>kr(t.SUPABASE_URL,t.SUPABASE_KEY,{auth:{persistSession:!1,autoRefreshToken:!1}}),uc=t=>{const e=t.SUPABASE_SERVICE_ROLE_KEY||t.SUPABASE_KEY;return kr(t.SUPABASE_URL,e,{auth:{persistSession:!1,autoRefreshToken:!1}})},Sr=(t,e)=>kr(t.SUPABASE_URL,t.SUPABASE_KEY,{auth:{persistSession:!1,autoRefreshToken:!1},global:{headers:{Authorization:`Bearer ${e}`}}}),Er=t=>{const e=(t==null?void 0:t.env)||{},s=globalThis,r=typeof s.process<"u"?s.process.env:{};return{SUPABASE_URL:e.SUPABASE_URL||r.SUPABASE_URL||"",SUPABASE_KEY:e.SUPABASE_KEY||r.SUPABASE_KEY||"",SUPABASE_SERVICE_ROLE_KEY:e.SUPABASE_SERVICE_ROLE_KEY||r.SUPABASE_SERVICE_ROLE_KEY}},fc=(t,e)=>e?Sr(t,e):hc(t),I=t=>{const e=t.req.header("Authorization"),s=e!=null&&e.toLowerCase().startsWith("bearer ")?e.slice(7).trim():void 0,r=Te(t,"sb-access-token"),a=s||r;return fc(Er(t),a)},R=t=>uc(Er(t)),Bs=new Q;Bs.get("/google",async t=>{const e=I(t),s=new URL("/api/auth/callback",new URL(t.req.url).origin).href,{data:r,error:a}=await e.auth.signInWithOAuth({provider:"google",options:{redirectTo:s}});return a||!r.url?(console.error("Google OAuth error:",a==null?void 0:a.message),t.redirect("/login?error=oauth_failed")):t.redirect(r.url)});Bs.get("/callback",async t=>{const e=I(t),s=t.req.query("code");if(t.req.query("error"))return t.redirect("/login?error=cancelled");if(s){const{data:a,error:i}=await e.auth.exchangeCodeForSession(s);!i&&a.session&&(ar(t,"sb-access-token",a.session.access_token,{path:"/",maxAge:604800,httpOnly:!0}),ar(t,"sb-refresh-token",a.session.refresh_token,{path:"/",maxAge:604800,httpOnly:!0}))}return t.redirect("/dashboard")});Bs.get("/logout",async t=>(Ur(t,"sb-access-token",{path:"/"}),Ur(t,"sb-refresh-token",{path:"/"}),t.redirect("/login")));const xr=async(t,e)=>{const s=t.req.header("Authorization"),r=s!=null&&s.toLowerCase().startsWith("bearer ")?s.slice(7).trim():void 0,a=Te(t,"sb-access-token"),i=r||a;if(!i)return t.json({error:"غير مصرّح: يرجى تسجيل الدخول أولاً"},401);try{const n=Sr(t.env,i),{data:{user:o},error:l}=await n.auth.getUser(i);if(l||!o)return t.json({error:"جلسة غير صالحة: يرجى إعادة تسجيل الدخول"},401);t.set("user",o),t.set("token",i),await e()}catch{return t.json({error:"خطأ في التحقق من الهوية"},500)}},N=async(t,e)=>{const s=t.get("token")||Te(t,"sb-access-token");if(!s)return t.json({error:"غير مصرّح: يرجى تسجيل الدخول أولاً"},401);try{const r=Sr(t.env,s),{data:{user:a},error:i}=await r.auth.getUser(s);if(i||!a)return t.json({error:"جلسة غير صالحة"},401);const{data:n}=await r.from("profiles").select("role").eq("id",a.id).single();if((n==null?void 0:n.role)!=="admin")return t.json({error:"ليس لديك صلاحية للقيام بهذا الإجراء"},403);t.set("user",a),t.set("token",s),await e()}catch{return t.json({error:"خطأ في التحقق من الصلاحيات"},500)}},kt=new Q;kt.get("/",async t=>{const e=I(t),{data:s,error:r}=await e.from("campaigns").select("*").eq("is_published",!0).order("created_at",{ascending:!1});return r?t.json({error:r.message},400):t.json({data:s})});kt.get("/:id",async t=>{const e=I(t),s=t.req.param("id"),{data:r,error:a}=await e.from("campaigns").select("*").eq("id",s).eq("is_published",!0).single();return a?t.json({error:a.message},400):t.json({data:r})});kt.post("/add",N,async t=>{const e=R(t),s=await t.req.parseBody(),r=s.title,a=s.category,i=Number(s.goal);if(!r||!i||isNaN(i)||i<=0)return t.redirect("/dashboard/campaigns?error=invalid_inputs");const{error:n}=await e.from("campaigns").insert([{title:r,category:a,goal:i,image_url:s.image_url||null,is_urgent:s.is_urgent==="true",description:s.description||null}]);return n?(console.error("Error creating campaign:",n.message),t.redirect("/dashboard/campaigns?error=db_error")):t.redirect("/dashboard/campaigns?success=1")});kt.post("/edit/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),a=r.title,i=r.category,n=Number(r.goal);if(!a||!n||isNaN(n)||n<=0)return t.redirect("/dashboard/campaigns?error=invalid_inputs");const{error:o}=await e.from("campaigns").update({title:a,category:i,goal:n,image_url:r.image_url||null,is_urgent:r.is_urgent==="true",description:r.description||null}).eq("id",s);return o?(console.error("Error updating campaign:",o.message),t.redirect("/dashboard/campaigns?error=db_error")):t.redirect("/dashboard/campaigns?success=1")});kt.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("campaigns").delete().eq("id",s);return r?(console.error("Error deleting campaign:",r.message),t.redirect("/dashboard/campaigns?error=db_error")):t.redirect("/dashboard/campaigns?success=1")});const St=new Q;St.post("/",async t=>{const e=I(t),s=t.req.header("Authorization");let r=null;if(s){const p=s.replace("Bearer ",""),{data:{user:m}}=await e.auth.getUser(p);m&&(r=m.id)}const a=await t.req.json(),{amount:i,donation_type:n,campaign_id:o,donor_name:l,donor_phone:c,donor_email:d,payment_method:h}=a;if(!i||!l||!c||!h)return t.json({error:"الحقول المطلوبة غير مكتملة"},400);const{data:u,error:f}=await e.from("donations").insert([{profile_id:r,campaign_id:o||null,amount:Number(i),donation_type:n||"once",donor_name:l,donor_phone:c,donor_email:d||null,payment_method:h,payment_status:"pending",status:"pending"}]).select().single();return f?t.json({error:f.message},400):t.json({data:u,message:"تم التبرع بنجاح. شكرًا لك!"})});St.get("/my",xr,async t=>{const e=t.get("user"),s=R(t),{data:r,error:a}=await s.from("donations").select("*, campaigns(title, category)").eq("profile_id",e.id).order("created_at",{ascending:!1});return a?t.json({error:a.message},400):t.json({data:r})});St.post("/add",async t=>{const e=R(t),s=await t.req.parseBody(),r=Number(s.amount)||0,a=(s.donor_name||"").trim(),i=(s.donor_phone||"").trim();if(!r||!a||!i)return t.redirect("/donate?error=missing");const{error:n}=await e.from("donations").insert([{amount:r,donation_type:s.donation_type||"once",donor_name:a,donor_phone:i,donor_email:s.donor_email||null,payment_method:s.payment_method||"card",payment_status:"pending",status:"pending"}]);return n?(console.error("Donation insert error:",n.message),t.redirect("/donate?error=db")):t.redirect("/donate?success=1")});St.post("/status/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),{error:a}=await e.from("donations").update({status:r.status}).eq("id",s);return a?t.redirect("/dashboard/donations?error=1"):t.redirect("/dashboard/donations?success=1")});St.get("/stats",N,async t=>{const e=R(t),[{count:s},{count:r},{count:a},{data:i}]=await Promise.all([e.from("donations").select("*",{count:"exact",head:!0}),e.from("campaigns").select("*",{count:"exact",head:!0}),e.from("volunteers").select("*",{count:"exact",head:!0}),e.from("donations").select("amount")]),n=(i||[]).reduce((o,l)=>o+Number(l.amount||0),0);return t.json({total_donations:n,total_campaigns:r||0,total_donors:s||0,total_volunteers:a||0})});const Hs=new Q;Hs.post("/",async t=>{const e=R(t);let s=null;const r=Te(t,"sb-access-token");if(r)try{s=JSON.parse(atob(r.split(".")[1])).sub}catch{}const a=t.req.header("content-type")||"";let i;a.includes("application/json")?i=await t.req.json():i=await t.req.parseBody();const{full_name:n,age:o,phone:l,city:c,preferred_role:d,skills:h}=i;if(!n||!l)return a.includes("application/json")?t.json({error:"الاسم ورقم الهاتف مطلوبان"},400):t.redirect("/volunteers?error=missing_fields");const{error:u}=await e.from("volunteers").insert([{profile_id:s,full_name:n,age:o?parseInt(o):null,phone:l,city:c,preferred_role:d,skills:h,status:"pending"}]);return a.includes("application/json")?u?t.json({error:u.message},400):t.json({message:"تم إرسال طلب التطوع بنجاح."}):u?t.redirect("/volunteers?error="+encodeURIComponent(u.message)):t.redirect("/volunteers?success=1#volForm")});Hs.get("/my",xr,async t=>{const e=t.get("user"),s=R(t),{data:r,error:a}=await s.from("volunteers").select("*").eq("profile_id",e.id).order("created_at",{ascending:!1});return a?t.json({error:a.message},400):t.json({data:r})});Hs.post("/status/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),{error:a}=await e.from("volunteers").update({status:r.status}).eq("id",s);return a?t.redirect("/dashboard/volunteers?error=1"):t.redirect("/dashboard/volunteers?success=1")});const $r=new Q;$r.post("/",async t=>{const e=R(t),s=t.req.header("content-type")||"";let r;s.includes("application/json")?r=await t.req.json():r=await t.req.parseBody();const{name:a,email:i,phone:n,subject:o,message:l}=r;if(!a||!i||!l)return s.includes("application/json")?t.json({error:"الرجاء ملء جميع الحقول المطلوبة"},400):t.redirect("/contact?error=missing_fields");const{error:c}=await e.from("contacts").insert([{name:a,email:i,phone:n||null,subject:o||null,message:l,status:"unread"}]);return s.includes("application/json")?c?t.json({error:c.message},400):t.json({message:"تم إرسال رسالتك بنجاح."}):c?t.redirect("/contact?error="+encodeURIComponent(c.message)):t.redirect("/contact?success=1")});$r.post("/status/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),{error:a}=await e.from("contacts").update({status:r.status}).eq("id",s);return a?t.redirect("/dashboard/contacts?error=1"):t.redirect("/dashboard/contacts?success=1")});const Et=new Q;Et.get("/",async t=>{const e=I(t),{data:s,error:r}=await e.from("news").select("*").eq("is_published",!0).order("publish_date",{ascending:!1});return r?t.json({error:r.message},400):t.json({data:s})});Et.get("/:id",async t=>{const e=I(t),s=t.req.param("id"),{data:r,error:a}=await e.from("news").select("*").eq("id",s).eq("is_published",!0).single();return a?t.json({error:a.message},400):t.json({data:r})});Et.post("/add",N,async t=>{const e=R(t),s=await t.req.parseBody(),r=s.title,a=s.content,i=s.excerpt;if(!r||!a||!i)return t.redirect("/dashboard/news?error=missing_fields");const{error:n}=await e.from("news").insert([{title:r,category:s.category||null,excerpt:i,content:a,image_url:s.image_url||null}]);return n?(console.error("Error creating news:",n.message),t.redirect("/dashboard/news?error=db_error")):t.redirect("/dashboard/news?success=1")});Et.post("/edit/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),a=r.title,i=r.content,n=r.excerpt;if(!a||!i||!n)return t.redirect("/dashboard/news?error=missing_fields");const{error:o}=await e.from("news").update({title:a,category:r.category||null,excerpt:n,content:i,image_url:r.image_url||null}).eq("id",s);return o?t.redirect("/dashboard/news?error=db_error"):t.redirect("/dashboard/news?success=1")});Et.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("news").delete().eq("id",s);return r?t.redirect("/dashboard/news?error=db_error"):t.redirect("/dashboard/news?success=1")});const is=new Q;is.get("/",async t=>{const e=I(t),{data:s,error:r}=await e.from("events").select("*").eq("is_published",!0).order("event_date",{ascending:!1});return r?t.json({error:r.message},400):t.json({data:s})});is.post("/add",N,async t=>{const e=R(t),s=await t.req.parseBody(),r=s.title;if(!r)return t.redirect("/dashboard/events?error=missing_fields");const{error:a}=await e.from("events").insert([{title:r,type:s.type||null,place:s.place||null,event_date:s.event_date?new Date(s.event_date).toISOString():null,description:s.description,image_url:s.image_url||null}]);return a?(console.error("Error creating event:",a.message),t.redirect("/dashboard/events?error=db_error")):t.redirect("/dashboard/events?success=1")});is.post("/edit/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),a=r.title;if(!a)return t.redirect("/dashboard/events?error=missing_fields");const{error:i}=await e.from("events").update({title:a,type:r.type||null,place:r.place||null,event_date:r.event_date?new Date(r.event_date).toISOString():null,description:r.description,image_url:r.image_url||null}).eq("id",s);return i?(console.error("Error updating event:",i.message),t.redirect("/dashboard/events?error=db_error")):t.redirect("/dashboard/events?success=1")});is.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("events").delete().eq("id",s);return r?(console.error("Error deleting event:",r.message),t.redirect("/dashboard/events?error=db_error")):t.redirect("/dashboard/events?success=1")});const ns=new Q;ns.get("/",async t=>{const e=I(t),{data:s,error:r}=await e.from("stories").select("*").eq("is_published",!0).order("created_at",{ascending:!1});return r?t.json({error:r.message},400):t.json({data:s})});ns.post("/add",N,async t=>{const e=R(t),s=await t.req.parseBody(),r=s.name,a=s.content;if(!r||!a)return t.redirect("/dashboard/stories?error=missing_fields");const{error:i}=await e.from("stories").insert([{name:r,role:s.role||null,rating:s.rating?Number(s.rating):5,content:a,image_url:s.image_url||null}]);return i?(console.error("Insert error:",i.message),t.redirect("/dashboard/stories?error=db_error")):t.redirect("/dashboard/stories?success=1")});ns.post("/edit/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),a=r.name,i=r.content;if(!a||!i)return t.redirect("/dashboard/stories?error=missing_fields");const{error:n}=await e.from("stories").update({name:a,role:r.role||null,rating:r.rating?Number(r.rating):5,content:i,image_url:r.image_url||null}).eq("id",s);return n?(console.error("Update error:",n.message),t.redirect("/dashboard/stories?error=db_error")):t.redirect("/dashboard/stories?success=1")});ns.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("stories").delete().eq("id",s);return r?(console.error("Delete error:",r.message),t.redirect("/dashboard/stories?error=db_error")):t.redirect("/dashboard/stories?success=1")});const xt=new Q;xt.get("/",async t=>{const e=I(t),{data:s,error:r}=await e.from("jobs").select("*").eq("is_published",!0).order("created_at",{ascending:!1});return r?t.json({error:r.message},400):t.json({data:s})});xt.post("/add",N,async t=>{const e=R(t),s=await t.req.parseBody(),{error:r}=await e.from("jobs").insert([{title:s.title,department:s.department||null,job_type:s.job_type||null,location:s.location||null,description:s.description||null,is_active:s.is_active==="true"}]);return r?(console.error("Error creating job:",r.message),t.redirect("/dashboard/jobs?error=1")):t.redirect("/dashboard/jobs?success=1")});xt.post("/edit/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),{error:a}=await e.from("jobs").update({title:r.title,department:r.department||null,job_type:r.job_type||null,location:r.location||null,description:r.description||null,is_active:r.is_active==="true"}).eq("id",s);return a?t.redirect("/dashboard/jobs?error=1"):t.redirect("/dashboard/jobs?success=1")});xt.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("jobs").delete().eq("id",s);return r?t.redirect("/dashboard/jobs?error=1"):t.redirect("/dashboard/jobs?success=1")});xt.post("/apply",async t=>{const e=R(t),s=t.req.header("content-type")||"";let r;s.includes("application/json")?r=await t.req.json():r=await t.req.parseBody();const{job_id:a,full_name:i,email:n,phone:o,bio:l,cv_url:c}=r;if(!i||!n||!o)return s.includes("application/json")?t.json({error:"الرجاء ملء جميع الحقول الإلزامية"},400):t.redirect("/careers?error=missing_fields");const{error:d}=await e.from("job_applications").insert([{job_id:a||null,full_name:i,email:n,phone:o,bio:l,cv_url:c,status:"pending"}]);return s.includes("application/json")?d?t.json({error:d.message},400):t.json({message:"تم تقديم طلبك بنجاح."}):d?t.redirect("/careers?error="+encodeURIComponent(d.message)):t.redirect("/careers?success=1#applyForm")});const zs=new Q;zs.post("/",async t=>{const e=R(t),s=t.req.header("content-type")||"";let r;s.includes("application/json")?r=await t.req.json():r=await t.req.parseBody();const{email:a}=r;if(!a){if(!s.includes("application/json")){const n=t.req.header("referer")||"/";return t.redirect(n)}return t.json({error:"البريد الإلكتروني مطلوب"},400)}const{error:i}=await e.from("newsletter_subscribers").upsert([{email:a,status:"subscribed"}],{onConflict:"email"});if(!s.includes("application/json")){const n=t.req.header("referer")||"/",o=n.includes("?")?"&":"?";return i?(console.error("Newsletter subscription error:",i.message),t.redirect(n+o+"news_error=1")):t.redirect(n+o+"news_success=1")}return i?t.json({error:i.message},400):t.json({message:"تم الاشتراك بنجاح في النشرة البريدية."})});zs.post("/status/:id",N,async t=>{const e=R(t),s=t.req.param("id"),r=await t.req.parseBody(),{error:a}=await e.from("newsletter_subscribers").update({status:r.status}).eq("id",s);return a?t.redirect("/dashboard/newsletter?error=1"):t.redirect("/dashboard/newsletter?success=1")});zs.post("/delete/:id",N,async t=>{const e=R(t),s=t.req.param("id"),{error:r}=await e.from("newsletter_subscribers").delete().eq("id",s);return r?t.redirect("/dashboard/newsletter?error=1"):t.redirect("/dashboard/newsletter?success=1")});const di=new Q;di.post("/update",xr,async t=>{var o;const e=R(t),s=t.get("user"),r=await t.req.parseBody(),{full_name:a,phone:i}=r,{error:n}=await e.from("profiles").update({full_name:a||((o=s.user_metadata)==null?void 0:o.full_name),phone:i||null}).eq("id",s.id);return n?t.redirect("/profile?error="+encodeURIComponent(n.message)):t.redirect("/profile?success=1")});const V=new Q;V.use("*",cn({origin:"*",allowMethods:["GET","POST","PUT","DELETE","OPTIONS"],allowHeaders:["Content-Type","Authorization"],maxAge:86400}));V.onError((t,e)=>(console.error("[API Error]",t.message,t.stack),e.json({error:"حدث خطأ داخلي في الخادم"},500)));V.use("*",async(t,e)=>{const s=Date.now();await e();const r=Date.now()-s;console.log(`[${t.req.method}] ${t.req.path} — ${t.res.status} (${r}ms)`)});V.get("/health",t=>t.json({status:"ok",timestamp:new Date().toISOString()}));V.route("/auth",Bs);V.route("/campaigns",kt);V.route("/donations",St);V.route("/volunteers",Hs);V.route("/contacts",$r);V.route("/news",Et);V.route("/events",is);V.route("/stories",ns);V.route("/jobs",xt);V.route("/newsletter",zs);V.route("/profile",di);const Jt="/static/img/logo.png",pc=()=>`
<div id="preloader">
  <div class="pl-inner">
    <div style="position:relative;display:grid;place-items:center">
      <div class="pl-ring"></div>
      <div class="pl-logo"><img src="${Jt}" alt="شعار المؤسسة"></div>
    </div>
    <div class="pl-bar"><span></span></div>
    <div class="pl-text">مؤسسة الدكتور عمر هشام الخيرية</div>
  </div>
</div>`,gc=[{href:"/",label:"الرئيسية",key:"home"},{href:"/about",label:"من نحن",key:"about"},{label:"أنشطتنا",key:"work",children:[{href:"/campaigns",label:"الحملات",icon:"fa-bullhorn"},{href:"/achievements",label:"الإنجازات",icon:"fa-trophy"},{href:"/success-stories",label:"قصص النجاح",icon:"fa-heart"},{href:"/events",label:"الفعاليات",icon:"fa-calendar-check"},{href:"/gallery",label:"معرض الصور",icon:"fa-images"}]},{label:"شارك معنا",key:"join",children:[{href:"/donate",label:"تبرّع الآن",icon:"fa-hand-holding-heart"},{href:"/volunteers",label:"التطوّع",icon:"fa-hands-helping"},{href:"/careers",label:"الوظائف",icon:"fa-briefcase"}]},{href:"/news",label:"الأخبار",key:"news"},{label:"المزيد",key:"more",children:[{href:"/transparency",label:"الشفافية المالية",icon:"fa-scale-balanced"},{href:"/faq",label:"الأسئلة الشائعة",icon:"fa-circle-question"},{href:"/contact",label:"تواصل معنا",icon:"fa-envelope"},{href:"/dashboard",label:"لوحة التحكم",icon:"fa-gauge-high"}]}],mc=(t="",e)=>{const s=a=>a.children?`
      <li class="nav-item-drop">
        <button class="nav-trigger">${a.label} <i class="fas fa-chevron-down" style="font-size:.6rem"></i></button>
        <div class="nav-drop">
          ${a.children.map(n=>`<a href="${n.href}"><i class="fas ${n.icon}"></i><span>${n.label}</span></a>`).join("")}
        </div>
      </li>`:`<li class="${t===a.key?"active":""}"><a href="${a.href}">${a.label}</a></li>`,r=e?'<a href="/profile" class="nav-account" title="حسابي"><i class="fas fa-user-circle"></i><span>حسابي</span></a>':'<a href="/login" class="nav-account" title="تسجيل الدخول"><i class="fas fa-user-shield"></i><span>تسجيل الدخول</span></a>';return`
  <header class="nav" id="mainNav">
    <div class="wrap-wide">
      <a href="/" class="brand" aria-label="الصفحة الرئيسية">
        <img src="${Jt}" alt="شعار مؤسسة الدكتور عمر هشام الخيرية">
        <span class="brand-txt"><b>مؤسسة د. عمر هشام</b><span>الخيرية · العطاء بإيمان</span></span>
      </a>
      <ul class="nav-links">${gc.map(a=>{if(a.key==="more"){const i=(e==null?void 0:e.role)==="admin",n=a.children.filter(o=>o.href!=="/dashboard"||i);return s({...a,children:n})}return s(a)}).join("")}</ul>
      <div class="nav-cta">
        ${r}
        <button class="theme-btn" id="themeToggle" title="تبديل المظهر" aria-label="تبديل المظهر"><i class="fas fa-moon"></i></button>
        <a href="/donate" class="btn btn-gold magnetic"><i class="fas fa-hand-holding-heart"></i> تبرّع الآن</a>
      </div>
      <button class="burger" id="burger" aria-label="القائمة"><span></span></button>
    </div>
  </header>

  <div class="drawer" id="drawer">
    <div class="drawer-overlay" data-close></div>
    <div class="drawer-panel">
      <div class="drawer-head">
        <a href="/" class="brand"><img src="${Jt}" style="width:42px;height:42px"><span class="brand-txt"><b>مؤسسة د. عمر هشام</b></span></a>
        <button class="burger open" id="burgerClose" aria-label="إغلاق"><span></span></button>
      </div>
      <a href="/">الرئيسية</a>
      <a href="/about">من نحن</a>
      <a href="/campaigns">الحملات</a>
      <a href="/achievements">الإنجازات</a>
      <a href="/success-stories">قصص النجاح</a>
      <a href="/events">الفعاليات</a>
      <a href="/gallery">معرض الصور</a>
      <a href="/donate">تبرّع الآن</a>
      <a href="/volunteers">التطوّع</a>
      <a href="/careers">الوظائف</a>
      <a href="/news">الأخبار</a>
      <a href="/transparency">الشفافية المالية</a>
      <a href="/faq">الأسئلة الشائعة</a>
      <a href="/contact">تواصل معنا</a>
      ${(e==null?void 0:e.role)==="admin"?'<a href="/dashboard">لوحة التحكم</a>':""}
      ${r}
      <a href="/donate" class="btn btn-gold btn-block" style="margin-top:1.2rem"><i class="fas fa-hand-holding-heart"></i> تبرّع الآن</a>
    </div>
  </div>`},vc=(t="")=>{const e=`
<a href="#" class="totop" id="toTop" aria-label="إلى الأعلى"><i class="fas fa-arrow-up"></i></a>
`;return t!=="home"?e:`
<footer class="footer">
  <div class="footer-glow"></div>
  <div class="wrap-wide">
    <div class="footer-grid">
      <div>
        <a href="/" class="brand">
          <img src="${Jt}" alt="الشعار">
          <span class="brand-txt"><b>مؤسسة د. عمر هشام</b><span>الخيرية</span></span>
        </a>
        <p style="margin-top:1.2rem;max-width:320px">مؤسسة خيرية إنسانية تعمل على إغاثة المحتاجين، ودعم المرضى، ونشر العلم، وتحفيظ القرآن الكريم بروح الإيمان والإحسان. مقرنا الرئيسي: كفر العنانية.</p>
      </div>
      <div>
        <h4>روابط سريعة</h4>
        <div class="footer-links">
          <a href="/about">من نحن</a>
          <a href="/campaigns">الحملات</a>
          <a href="/achievements">الإنجازات</a>
          <a href="/success-stories">قصص النجاح</a>
          <a href="/news">الأخبار</a>
        </div>
      </div>
      <div>
        <h4>شارك معنا</h4>
        <div class="footer-links">
          <a href="/donate">تبرّع الآن</a>
          <a href="/volunteers">كن متطوعًا</a>
          <a href="/careers">الوظائف</a>
          <a href="/transparency">الشفافية المالية</a>
          <a href="/contact">تواصل معنا</a>
        </div>
      </div>
      <div>
        <h4>النشرة البريدية</h4>
        <p>اشترك ليصلك جديد المؤسسة وحملاتها الإنسانية.</p>
        <form action="/api/newsletter" method="POST" class="footer-newsletter">
          <input type="email" name="email" placeholder="بريدك الإلكتروني" required aria-label="البريد الإلكتروني">
          <button class="btn btn-primary btn-sm" type="submit"><i class="fas fa-paper-plane"></i></button>
        </form>
        <div class="chip chip-emerald" style="margin-top:1rem"><i class="fas fa-shield-halved"></i> جهة مرخّصة ومعتمدة</div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>مؤسسة الدكتور عمر هشام الخيرية · جميع الحقوق محفوظة</span>
      <div style="display:flex;gap:1.4rem">
        <a href="/transparency">سياسة الخصوصية</a>
        <a href="/transparency">الشروط والأحكام</a>
        <a href="/faq">المساعدة</a>
      </div>
    </div>
  </div>
</footer>
${e}
`},H=(t,e)=>`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title} · مؤسسة الدكتور عمر هشام الخيرية</title>
  <meta name="description" content="${t.desc||"مؤسسة الدكتور عمر هشام الخيرية — العطاء بإيمان والإحسان للجميع"}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ar_EG">
  <meta property="og:site_name" content="مؤسسة الدكتور عمر هشام الخيرية">
  <meta property="og:title" content="${t.title} · مؤسسة الدكتور عمر هشام الخيرية">
  <meta property="og:description" content="${t.desc||"مؤسسة الدكتور عمر هشام الخيرية — العطاء بإيمان والإحسان للجميع"}">
  <meta property="og:image" content="${t.image||"/static/img/og-image.png"}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${t.title} · مؤسسة الدكتور عمر هشام الخيرية">
  <meta name="twitter:description" content="${t.desc||"مؤسسة الدكتور عمر هشام الخيرية — العطاء بإيمان والإحسان للجميع"}">
  <meta name="twitter:image" content="${t.image||"/static/img/og-image.png"}">
  ${t.canonical?`<link rel="canonical" href="${t.canonical}">`:""}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"NGO",name:"مؤسسة الدكتور عمر هشام الخيرية",url:"https://omarhesham.org/",logo:"https://omarhesham.org/static/img/logo.png",areaServed:"Egypt"})}<\/script>
  <link rel="icon" type="image/png" href="${Jt}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body data-page="${t.active||""}">
  ${pc()}
  ${mc(t.active,t.user)}
  <main>${e}</main>
  ${vc(t.active)}
  <script>window.__USER = ${JSON.stringify(t.user||null)};<\/script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"><\/script>
  <script src="/static/app.js"><\/script>
  <script src="/static/presence.js"><\/script>
</body>
</html>`,W=(t,e,s)=>`
<section class="page-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-glow g1"></div>
  <div class="hero-glow g3"></div>
  <div class="wrap">
    <div class="crumbs reveal"><a href="/">الرئيسية</a> <i class="fas fa-chevron-left"></i> <span>${s}</span></div>
    <h1 class="h-xl reveal d1">${t}</h1>
    <p class="lead reveal d2">${e}</p>
  </div>
  <div class="wave-divider">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path fill="#fbfaf6" d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,90 L0,90 Z"></path></svg>
  </div>
</section>`,de=()=>`
<section class="section">
  <div class="wrap">
    <div class="cta-banner reveal-scale">
      <span class="eyebrow" style="color:#ffe9b8;justify-content:center">معًا نصنع الأثر</span>
      <h2 class="h-xl" style="margin-top:1rem">عطاؤك اليوم يُغيّر حياة غدًا</h2>
      <p class="lead" style="margin:1rem auto 0;max-width:620px">انضمّ إلى أهل الخير الذين يصنعون أملاً حقيقيًا. كل تبرّع يصل إلى مستحقيه بأمانة وشفافية كاملة.</p>
      <div class="hero-actions">
        <a href="/donate" class="btn btn-gold btn-lg magnetic"><i class="fas fa-hand-holding-heart"></i> تبرّع الآن</a>
        <a href="/volunteers" class="btn btn-outline-light btn-lg"><i class="fas fa-hands-helping"></i> كن متطوعًا</a>
      </div>
    </div>
  </div>
</section>`,bc=(t,e=800,s=600)=>`https://images.unsplash.com/${t}?auto=format&fit=crop&w=${e}&h=${s}&q=80`,yc=[{icon:"fa-cow",cls:"ic-gold",title:"مشروع الأضاحي",desc:"توزيع اللحوم والأضاحي على الأسر الأولى بالرعاية في المواسم والأعياد لإدخال الفرحة ومشاركة البركة.",href:"/donate"},{icon:"fa-utensils",cls:"ic-emerald",title:"إطعام الطعام",desc:"توزيع كراتين رمضان والوجبات الغذائية المطهية على الأسر المحتاجة والعمالة غير المنتظمة.",href:"/donate"},{icon:"fa-stethoscope",cls:"ic-blue",title:"الدعم الصحي",desc:"دعم المستشفيات، وصرف علاجات شهرية، ومساندة مرضى السرطان، والمساهمة في العمليات الجراحية.",href:"/donate"},{icon:"fa-book-quran",cls:"ic-crimson",title:"مسابقات القرآن الكريم",desc:"حلقات تحفيظ للأطفال ومسابقات قرآنية بجوائز قيمة لتحفيز أبنائنا على حفظ كتاب الله وتدبره.",href:"/donate"},{icon:"fa-graduation-cap",cls:"ic-gold",title:"الدعم التعليمي",desc:"تكريم المتفوقين، ودفع مصاريف الطلبة غير القادرين، وتوفير المستلزمات المدرسية الكاملة.",href:"/donate"},{icon:"fa-shirt",cls:"ic-emerald",title:"المبادرات المجتمعية",desc:"توزيع ملابس العيد، وتنظيم مسابقات في الشوارع، وتوزيع هدايا على الأطفال، وخدمة الأهالي.",href:"/donate"}],wc=[{q:"كيف أتبرع للمؤسسة؟",a:"يمكنك التبرع عبر إنستاباي بالتحويل البنكي للبنك الزراعي المصري (حساب رقم 10010397596901014)، أو عبر إنستاباي أو فودافون كاش على الرقم 01060920249، أو التبرع المباشر نقدياً عبر الأستاذ جمال عبد الخالق."},{q:"ما هي مجالات عمل المؤسسة؟",a:"نعمل في مجالات متعددة تشمل: الدعم الصحي، وإطعام الطعام، ودعم التعليم، ومسابقات القرآن الكريم، والمشاريع الإنتاجية، ومصارف الزكاة والصدقات، والمشاريع المجتمعية."},{q:"أين يقع مقر المؤسسة؟",a:"مقر المؤسسة في كفر العنانية، جمهورية مصر العربية."},{q:"هل المؤسسة مرخّصة رسميًا؟",a:"نعم، المؤسسة مسجّلة ومرخّصة لدى الجهات المختصة وتعمل بشفافية كاملة."},{q:"كم سعر صك الأضحية؟",a:"صك الصدقة: ٥٠٠ جنيه، وصك الأضحية الكامل: ١١,٠٠٠ جنيه. تقبل الله منا ومنكم صالح الأعمال."},{q:"كيف يمكنني التأكد من وصول تبرعي؟",a:"تلتزم المؤسسة بأعلى معايير الشفافية، وننشر تقارير الصرف والإنجازات بشكل مستمر على منصتنا."}],_c=[{icon:"fa-heart",cls:"ic-crimson",title:"الإخلاص",desc:"نُخلص في العمل لوجه الله تعالى، ونجعل كل ما نقدمه خالصاً لوجهه الكريم."},{icon:"fa-eye",cls:"ic-blue",title:"الشفافية",desc:"نلتزم بالوضوح في كل ما نقدمه ونعمل بأعلى معايير الأمانة والمسؤولية."},{icon:"fa-shield-halved",cls:"ic-emerald",title:"المسؤولية",desc:"نتحمل مسؤوليتنا تجاه المجتمع ونعمل بجد لتحقيق أثر حقيقي ومستدام."},{icon:"fa-hand-holding-heart",cls:"ic-gold",title:"الرحمة",desc:"نقف مع المحتاجين بعطف ورحمة، ونؤمن أن التكافل والتراحم أساس بناء المجتمع."},{icon:"fa-handshake",cls:"ic-blue",title:"الشراكة",desc:"نعمل مع شركائنا من أجل أثر أكبر ونؤمن أن العمل الجماعي يصنع الفارق."}],kc=({campaigns:t=[],news:e=[],stories:s=[],stats:r={total_donors:0,total_campaigns:0,total_volunteers:0},partners:a=[]}={})=>`
<!-- ============ HERO ============ -->
<section class="hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-glow g1"></div>
  <div class="hero-glow g2"></div>
  <div class="hero-glow g3"></div>
  <div class="wrap-wide">
    <div class="hero-copy">
      <span class="hero-badge reveal"><span class="dot"></span> عطاء مستمر... لتنمية الإنسان والمجتمع</span>
      <h1 class="display reveal d1">العطاء بإيمان<br>والإحسان <span class="accent">للجميع</span></h1>
      <p class="lead reveal d2">مؤسسة الدكتور عمر هشام الخيرية — عطاء مستمر لتنمية الإنسان والمجتمع. نعمل في الدعم الصحي وإطعام الطعام ومسابقات القرآن الكريم والتعليم والمشاريع المجتمعية. معاً نصنع الأمل.</p>
      <div class="hero-actions reveal d3">
        <a href="/donate" class="btn btn-gold btn-lg magnetic"><i class="fas fa-hand-holding-heart"></i> ابدأ عطاءك</a>
        <a href="/about" class="btn btn-outline-light btn-lg"><i class="fas fa-circle-play"></i> تعرّف علينا</a>
      </div>
    </div>

    <!-- Professional Logo Showcase -->
    <div class="hero-portrait reveal-scale d2" id="heroPortrait">
      <div class="hp-orbit o1"></div>
      <div class="hp-orbit o2"></div>
      <div class="hp-disc" data-tilt style="background:none;box-shadow:none">
        <img class="hp-img" src="/static/img/logo.png" alt="شعار مؤسسة الدكتور عمر هشام الخيرية" style="object-fit:contain;width:100%;height:100%;filter:drop-shadow(0 20px 40px rgba(0,0,0,0.3))">
        <div class="hp-ground"></div>
      </div>
      <i class="fas fa-star fa-lg hp-sparkle" style="top:8%;inset-inline-start:18%"></i>
      <i class="fas fa-star hp-sparkle" style="bottom:30%;inset-inline-start:-2%;animation-delay:.7s"></i>
      <i class="fas fa-heart hp-sparkle" style="top:30%;inset-inline-end:6%;color:#ff5252;animation-delay:1.1s"></i>
    </div>
  </div>
  <div class="wave-divider">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path fill="#fbfaf6" d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,90 L0,90 Z"></path></svg>
  </div>
</section>

<!-- ============ PROGRAMS ============ -->
<section class="section bg-aurora">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">مجالات عملنا</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">برامج تُلامس <span class="text-grad-brand">كل احتياج إنساني</span></h2>
      <p class="lead reveal d2">نعمل عبر برامج متكاملة تُغطي أولويات الإنسان: الغذاء، والصحة، والتعليم، والمأوى، حتى نصل بالخير إلى من يستحقه.</p>
    </div>
    <div class="grid cols-3">
      ${yc.map((i,n)=>`
      <article class="card reveal d${n%3+1}">
        <div class="card-icon ${i.cls}"><i class="fas ${i.icon}"></i></div>
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
        <a href="${i.href}" class="card-link">اعرف المزيد <i class="fas fa-arrow-left"></i></a>
      </article>`).join("")}
    </div>
  </div>
</section>

<!-- ============ ABOUT SPLIT ============ -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="split">
      <div class="reveal-x">
        <div class="frame">
          <div class="frame-deco fd1"></div>
          <div class="frame-deco fd2"></div>
          <img src="${bc("photo-1593113630400-ea4288922497",700,560)}" alt="فريق المؤسسة">
        </div>
      </div>
      <div class="reveal d1">
        <span class="eyebrow">من نحن</span>
        <h2 class="h-xl" style="margin:.8rem 0 1rem">رسالةٌ إنسانية<br>تنبع من <span class="text-grad-emerald">الإيمان</span></h2>
        <p class="lead" style="margin-bottom:1.6rem">مؤسسة الدكتور عمر هشام الخيرية بكفر العنانية، تعمل على تنمية الإنسان والمجتمع عبر مشروع الأضاحي وإطعام الطعام والدعم الصحي ومسابقات القرآن الكريم ودعم التعليم والمشاريع المجتمعية.</p>
        <ul class="feature-list">
          <li><span class="fi ic-emerald"><i class="fas fa-bullseye"></i></span><div><b>رؤية واضحة</b><p>مجتمع متكافل لا يُترك فيه محتاجٌ دون عون.</p></div></li>
          <li><span class="fi ic-blue"><i class="fas fa-route"></i></span><div><b>منهج مؤسسي</b><p>إجراءات دقيقة تضمن وصول الدعم لمستحقيه.</p></div></li>
          <li><span class="fi ic-gold"><i class="fas fa-award"></i></span><div><b>أثر موثّق</b><p>تقارير وأرقام تعكس واقع ما نُنجزه على الأرض.</p></div></li>
        </ul>
        <a href="/about" class="btn btn-primary magnetic" style="margin-top:1.4rem"><i class="fas fa-arrow-left"></i> قصتنا كاملة</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ CAMPAIGNS ============ -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">حملاتنا النشطة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">كن جزءًا من <span class="text-grad-gold">قصة عطاء</span></h2>
      <p class="lead reveal d2">اختر الحملة التي تُلامس قلبك، وتابع أثر تبرّعك خطوةً بخطوة حتى يصل إلى مستحقيه.</p>
    </div>
    <div class="grid cols-3">
      ${t!=null&&t.length?t.slice(0,3).map((i,n)=>`
      <article class="campaign reveal d${n+1}">
        <div class="campaign-media">
          <img src="${i.image_url||"/static/img/placeholder.jpg"}" alt="${i.title}" loading="lazy">
          <span class="chip chip-blue tag">${i.category}</span>
          ${i.is_urgent?'<span class="urgency"><i class="fas fa-bolt"></i> عاجلة</span>':""}
        </div>
        <div class="campaign-body">
          <h3><a href="/campaigns/${i.id}">${i.title}</a></h3>
          <p>${i.description}</p>
          <div class="campaign-foot">
            <a href="/campaigns/${i.id}" class="chip chip-emerald"><i class="fas fa-seedling"></i> التفاصيل</a>
            <a href="/donate?campaign=${i.id}" class="btn btn-primary btn-sm"><i class="fas fa-heart"></i> تبرّع</a>
          </div>
        </div>
      </article>`).join(""):'<p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">جاري إطلاق حملاتنا الجديدة.</p>'}
    </div>
    <div class="center" style="margin-top:2.6rem">
      <a href="/campaigns" class="btn btn-ghost btn-lg">عرض كل الحملات <i class="fas fa-arrow-left"></i></a>
    </div>
  </div>
</section>

<!-- ============ IMPACT / HOW IT WORKS ============ -->
<section class="section bg-sand">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">كيف نعمل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">من تبرّعك إلى <span class="text-grad-brand">الأثر</span> بوضوح وشفافية</h2>
    </div>
    <div class="grid cols-4">
      ${[{ic:"fa-hand-holding-dollar",t:"تتبرّع",d:"تختار الحملة وتتبرّع بأمان عبر وسائل دفع متعددة."},{ic:"fa-magnifying-glass-chart",t:"ندرس الحالات",d:"نفحص ونتحقّق من المستحقين بدقّة وشفافية."},{ic:"fa-truck-fast",t:"نُوصِل الدعم",d:"فرقنا الميدانية تُسلّم المساعدات يدًا بيد."},{ic:"fa-file-circle-check",t:"تتابع الأثر",d:"يصلك تقرير موثّق بأثر تبرّعك على أرض الواقع."}].map((i,n)=>`
      <div class="card reveal d${n+1}" style="text-align:center">
        <div class="card-icon ic-blue" style="margin-inline:auto;position:relative">
          <i class="fas ${i.ic}"></i>
        </div>
        <h3>${i.t}</h3><p>${i.d}</p>
      </div>`).join("")}
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">قصص من الميدان</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">حياةٌ <span class="text-grad-emerald">تغيّرت</span> بفضل عطائكم</h2>
    </div>
    <div class="grid cols-3">
      ${s!=null&&s.length?s.map((i,n)=>`
      <figure class="testi reveal d${n+1}">
        <span class="quote-mark">”</span>
        <div class="stars" style="margin-bottom:.8rem">${'<i class="fas fa-star"></i>'.repeat(i.rating||5)}</div>
        <p>${i.content}</p>
        <figcaption class="who">
          <span class="avatar placeholder">${i.name.charAt(0)}</span>
          <span><b>${i.name}</b><span>${i.role}</span></span>
        </figcaption>
      </figure>`).join(""):'<p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">قريباً سنشارككم أثر العطاء.</p>'}
    </div>
    <div class="center" style="margin-top:2.4rem"><a href="/success-stories" class="btn btn-ghost">المزيد من القصص <i class="fas fa-arrow-left"></i></a></div>
  </div>
</section>

<!-- ============ NEWS PREVIEW ============ -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">آخر الأخبار</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">جديد <span class="text-grad-blue">المؤسسة</span></h2>
    </div>
    <div class="grid cols-3">
      ${e!=null&&e.length?e.slice(0,3).map((i,n)=>`
      <article class="news-card reveal d${n+1}">
        <div class="news-media"><img src="${i.image_url||"/static/img/placeholder.jpg"}" alt="${i.title}" loading="lazy"><span class="chip chip-gold" style="position:absolute;top:1rem;inset-inline-start:1rem">${i.category}</span></div>
        <div class="news-body">
          <h3>${i.title}</h3>
          <p style="color:var(--muted);font-size:.92rem">${i.excerpt}</p>
          <a href="/news/${i.id}" class="card-link">اقرأ المزيد <i class="fas fa-arrow-left"></i></a>
        </div>
      </article>`).join(""):'<p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">لا توجد أخبار متاحة حالياً.</p>'}
    </div>
  </div>
</section>

${de()}
`,Sc=(t={total_donors:0,total_campaigns:0,total_volunteers:0})=>W("عطاء مستمر... لتنمية الإنسان والمجتمع","تعرّف على مؤسسة الدكتور عمر هشام الخيرية — رؤيتها، رسالتها، وقيمها التي تقود كل ما نفعله.","من نحن")+`
<!-- Founder split -->
<section class="section">
  <div class="wrap">
    <div class="split">
      <div class="reveal-x">
        <div class="frame">
          <div class="frame-deco fd1"></div>
          <div class="frame-deco fd2"></div>
          <img src="/static/img/omar-portrait.png" alt="الدكتور عمر هشام رحمه الله">
        </div>
        <p style="text-align:center;margin-top:1rem;color:var(--muted);font-style:italic">المرحوم الدكتور عمر هشام (رحمه الله)</p>
      </div>
      <div class="reveal d1">
        <span class="eyebrow">قصة الأثر والوفاء</span>
        <h2 class="h-xl" style="margin:.8rem 0 1rem">تأسيس <span class="text-grad-blue">وفاءً لذكراه</span></h2>
        <p class="lead">«لم يكن عمر مجرد ابن، بل كان طالباً متميزاً في كلية الطب، يحمل في قلبه حلم مداواة الناس والتخفيف عنهم. بعد أن اختاره الله إلى جواره، أردت أن يمتد حلمه وألا ينقطع أثره الطيب عن الدنيا.»</p>
        <p style="margin-top:1rem;color:var(--muted)">أسستُ هذه المؤسسة الخيرية كصدقة جارية لتكون يداً ممتدة لكل مريض ومحتاج، ولتستمر رسالة ابني الحبيب في نشر الخير والرحمة والإحسان بين الناس.</p>
        <div style="margin-top:1.6rem;display:flex;gap:1rem;align-items:center">
          <span class="avatar placeholder" style="width:56px;height:56px">هـ</span>
          <div><b style="font-size:1.05rem">المهندس هشام صبري</b><br><span style="color:var(--muted);font-size:.9rem">مؤسس المؤسسة ورئيس مجلس الإدارة</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Chairman's Message -->
<section class="section bg-cream" style="border-top: 1px solid rgba(12,26,43,.05); border-bottom: 1px solid rgba(12,26,43,.05);">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">كلمة رئيس مجلس الإدارة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">عطاء مستمر <span class="text-grad-gold">لإنسان أفضل ومجتمع أبقى</span></h2>
    </div>
    
    <div class="card reveal" style="max-width:900px;margin:0 auto;padding:2.5rem;line-height:2.2;font-size:1.08rem;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:120px;height:120px;background:var(--grad-gold);opacity:0.06;border-radius:0 0 0 100%"></div>
      <i class="fas fa-quote-right" style="position:absolute;top:1.5rem;right:1.5rem;font-size:3rem;opacity:0.06;color:var(--brand-gold)"></i>
      
      <p style="margin-bottom:1.2rem;font-weight:700;color:var(--brand-gold)">بسم الله الرحمن الرحيم</p>
      <p style="margin-bottom:1rem">الحمد لله رب العالمين والصلاة والسلام على سيدنا محمد وعلى آله وصحبه أجمعين.</p>
      <p style="margin-bottom:1rem">أعزائي القراء الكرام، شركاء الخير والداعمين لمسيرة العطاء...</p>
      <p style="margin-bottom:1rem">منذ انطلاقتها، كانت رؤيتنا واضحة ورسالتنا نبيلة. نؤمن أن العمل الخيري ليس مجرد مساعدات مادية، بل هو <strong>استثمار في الإنسان</strong> وتمكين له ليكون فاعلاً ومنتجاً في مجتمعه.</p>
      <p style="margin-bottom:1rem">ومن هذا المنطلق نعمل في المؤسسة على مجالات متعددة: <strong>الدعم الصحي، وإطعام الطعام، ودعم التعليم والقرآن الكريم، والمشاريع الإنتاجية، ومصارف الزكاة والصدقات، والمشاريع المجتمعية.</strong></p>
      <p style="margin-bottom:1rem">كل مشروع ننفذه وكل يد نمدها هو ثمرة ثقة منحتمونا إياها وتوفيق من الله عز وجل. ولم يكن هذا الإنجاز ليتحقق لولا جهود فريق العمل المتفاني ودعم شركائنا الدائم وتكاتف أهل الخير الذين نذروا أموالهم لبناء مستقبل أفضل لأبنائنا ومجتمعنا.</p>
      <p style="margin-bottom:1rem">وفي هذه المنصة نأخذكم في جولة داخل أنشطتنا ومشاريعنا، ونستعرض قصصاً واقعية لأرواح تغيرت وحياة تحسنت بفضل الله ثم بفضلكم.</p>
      <p style="margin-bottom:1rem;font-weight:700;color:var(--ink-700)">ختاماً... نسأل الله عز وجل أن يجعل ما نقدمه خالصاً لوجهه الكريم، وأن يتقبله منا ويجعله في ميزان حسناتنا وحسناتكم.</p>
      <p style="font-weight:800;color:var(--brand-gold);font-size:1.2rem;margin-top:1.5rem">معاً نصنع الأمل 🤝</p>
      
      <div style="margin-top:2rem;display:flex;gap:1rem;align-items:center;border-top:1px solid var(--ink-100);padding-top:1.5rem">
        <span class="avatar placeholder" style="width:56px;height:56px;background:var(--grad-gold);color:#fff">هـ</span>
        <div><b style="font-size:1.05rem">المهندس هشام صبري</b><br><span style="color:var(--muted);font-size:.9rem">رئيس مجلس الإدارة</span></div>
      </div>
    </div>

    <div class="card reveal d1" style="max-width:900px;margin:2rem auto 0;padding:2rem;text-align:center;background:var(--grad-hero);color:#fff;border-radius:1.2rem">
      <i class="fas fa-book-quran" style="font-size:2rem;margin-bottom:1rem;color:var(--brand-gold)"></i>
      <p style="font-size:1.15rem;line-height:2;font-weight:600">﴿ مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ ﴾</p>
      <p style="opacity:.7;margin-top:.5rem;font-size:.9rem">سورة البقرة</p>
    </div>
  </div>
</section>

<!-- Prayers and Remembrance -->
<section class="section" style="border-top: 1px solid rgba(12,26,43,.05); border-bottom: 1px solid rgba(12,26,43,.05);">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">دعاء وصدقة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">أدعية وأذكار <span class="text-grad-emerald">للدكتور عمر هشام</span></h2>
      <p class="lead" style="margin-top:1rem">شاركنا بالدعاء لفقيدنا الشاب الدكتور عمر هشام، نسأل الله أن يتقبله في الصالحين ويجعل هذا العمل شفيعاً له.</p>
    </div>
    
    <div class="grid cols-3">
      <article class="card reveal d1" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-blue" style="margin-inline:auto"><i class="fas fa-hands-praying"></i></div>
        <h3>دعاء للمتوفى</h3>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--ink-700); margin-top:1rem">«اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس.»</p>
      </article>
      
      <article class="card reveal d2" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-gold" style="margin-inline:auto"><i class="fas fa-book-quran"></i></div>
        <h3>سورة الفاتحة</h3>
        <p style="font-size:1.1rem; line-height:2; font-weight:700; color:var(--blue-900); margin-top:1rem" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، الرَّحْمَنِ الرَّحِيمِ، مَالِكِ يَوْمِ الدِّينِ، إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ، اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ، صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
        </p>
      </article>

      <article class="card reveal d3" style="text-align:center; display:flex; flex-direction:column; justify-content:center; padding:2rem;">
        <div class="card-icon ic-emerald" style="margin-inline:auto"><i class="fas fa-heart-pulse"></i></div>
        <h3>دعاء الأثر والقبول</h3>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--ink-700); margin-top:1rem">«اللهم اجعل كل عمل خيري وعلاج لمريض ومساعدة لمحتاج تقوم بها هذه المؤسسة صدقة جارية في ميزان حسنات عمر، واجعله شفيعاً له ومقراً لعينيه في جنات النعيم.»</p>
      </article>
    </div>

    <div class="center" style="margin-top:3rem">
      <button onclick="if(window.__toast) window.__toast('جزاك الله خيراً، وتقبل الله دعاءك ورحم فقيدنا وغفر له وجعل مثواه الجنة.')" class="btn btn-primary btn-lg magnetic">
        <i class="fas fa-circle-check"></i> قرأت الفاتحة وتمنيت له الرحمة
      </button>
    </div>
  </div>
</section>

<!-- Mission / Vision -->
<section class="section bg-aurora">
  <div class="wrap">
    <div class="grid cols-2">
      <div class="glass-card reveal-x">
        <div class="card-icon ic-blue"><i class="fas fa-eye"></i></div>
        <h3 class="h-lg">رؤيتنا</h3>
        <p class="lead" style="margin-top:.6rem">مجتمعٌ متكافلٌ ومتماسك، لا يُترك فيه إنسانٌ دون رعاية. نؤمن أن خدمة الإنسان واجب ومسؤولية، وأن التكافل والتراحم هما أساس بناء مجتمع قوي.</p>
      </div>
      <div class="glass-card reveal d1">
        <div class="card-icon ic-emerald"><i class="fas fa-flag"></i></div>
        <h3 class="h-lg">رسالتنا</h3>
        <p class="lead" style="margin-top:.6rem">عطاء مستمر لتنمية الإنسان والمجتمع. نعمل عبر برامجنا ومبادراتنا على تقديم الدعم المباشر للأسر المحتاجة، والوقوف بجانب المرضى، ومساعدة كل من يحتاج إلى عون.</p>
      </div>
    </div>
  </div>
</section>

<!-- Goals -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">نحو مجتمع أفضل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">أهدافنا في <span class="text-grad-emerald">الدعم المجتمعي</span></h2>
    </div>
    <div class="grid cols-4">
      ${[{i:"fa-scale-balanced",t:"الاستقرار الاجتماعي",d:"المساهمة في تحقيق الاستقرار الاجتماعي للأسر المحتاجة.",c:"ic-blue"},{i:"fa-heart-circle-check",t:"روح التكافل",d:"تعزيز روح التكافل والمحبة في المجتمع.",c:"ic-crimson"},{i:"fa-hospital",t:"مساعدة المرضى",d:"مساعدة المرضى وتوفير الاحتياجات الأساسية لهم.",c:"ic-emerald"},{i:"fa-hand-holding-heart",t:"تخفيف الأعباء",d:"تخفيف الأعباء عن الأسر المحتاجة والمتعففة.",c:"ic-gold"}].map((e,s)=>`
      <article class="card reveal d${s+1}" style="text-align:center">
        <div class="card-icon ${e.c}" style="margin-inline:auto"><i class="fas ${e.i}"></i></div>
        <h3>${e.t}</h3><p>${e.d}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<!-- Values -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">قيمنا التي نؤمن بها</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">قيمٌ نعيشها <span class="text-grad-gold">قبل أن نقولها</span></h2>
    </div>
    <div class="grid cols-3" style="max-width:960px;margin:0 auto">
      ${_c.map((e,s)=>`
      <article class="card reveal d${s%3+1}" style="text-align:center">
        <div class="card-icon ${e.cls}" style="margin-inline:auto"><i class="fas ${e.icon}"></i></div>
        <h3>${e.title}</h3><p>${e.desc}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<!-- Team -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">مجلس الإدارة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إدارة <span class="text-grad-emerald">المؤسسة</span></h2>
    </div>
    <div class="grid cols-2" style="max-width:700px;margin:0 auto">
      ${[{n:"المهندس هشام صبري",r:"المؤسس ورئيس مجلس الإدارة",i:"fa-user-tie"},{n:"الأستاذ جمال عبد الخالق",r:"مسؤول التبرعات النقدية",i:"fa-hand-holding-dollar"}].map((e,s)=>`
      <article class="card reveal d${s+1}" style="text-align:center">
        <div class="card-icon ic-blue" style="margin-inline:auto;width:84px;height:84px;border-radius:50%;font-size:2rem"><i class="fas ${e.i}"></i></div>
        <h3 style="font-size:1.1rem">${e.n}</h3>
        <p style="color:var(--blue-700);font-weight:700">${e.r}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

${de()}
`,Ec=(t=[])=>W("حملاتنا الإنسانية","اختر القضية التي تُلامس قلبك، وكن سببًا في تغيير حياة. كل حملة موثّقة وكل تبرّع يصل بأمانة.","الحملات")+`
<section class="section">
  <div class="wrap">
    <!-- filter tabs -->
    <div class="center" style="margin-bottom:2.6rem">
      <div class="tabs" id="campFilter" role="tablist">
        <button class="tab active" data-filter="all">الكل</button>
        <button class="tab" data-filter="صحة">صحة</button>
        <button class="tab" data-filter="غذاء">غذاء</button>
        <button class="tab" data-filter="تعليم">تعليم</button>
        <button class="tab" data-filter="مياه">مياه</button>
        <button class="tab" data-filter="كساء">كساء</button>
        <button class="tab" data-filter="إسكان">إسكان</button>
      </div>
    </div>

    <div class="grid cols-3" id="campGrid">
      ${t.length?t.map((e,s)=>`
      <article class="campaign reveal d${s%3+1}" data-cat="${e.category}">
        <div class="campaign-media">
          <img src="${e.image_url||"/static/img/placeholder.jpg"}" alt="${e.title}" loading="lazy">
          <span class="chip chip-blue tag">${e.category}</span>
          ${e.is_urgent?'<span class="urgency"><i class="fas fa-bolt"></i> عاجلة</span>':""}
        </div>
        <div class="campaign-body">
          <h3><a href="/campaigns/${e.id}">${e.title}</a></h3>
          <p>${e.description}</p>
          <div class="campaign-foot">
            <a href="/campaigns/${e.id}" class="chip chip-emerald"><i class="fas fa-seedling"></i> التفاصيل</a>
            <a href="/donate?campaign=${e.id}" class="btn btn-primary btn-sm"><i class="fas fa-heart"></i> تبرّع</a>
          </div>
        </div>
      </article>`).join(""):'<p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">لا توجد حملات متاحة حالياً.</p>'}
    </div>
  </div>
</section>
${de()}
`,xc=()=>W("مسيرة من الإنجاز والعطاء","بفضل الله ثم بفضل شركائنا وداعمينا، نصنع أثراً حقيقياً في حياة الناس.","الإنجازات")+`
<!-- Spending Report -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">تقرير صرف الدعم</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">الحمد لله <span class="text-grad-gold">تم صرف الدعم</span></h2>
      <p class="lead reveal d2">نسأل الله أن يجعل هذا العمل في ميزان حسنات كل من شارك وساهم، وأن يبارك في كل يد امتدت للخير.</p>
    </div>
    <div class="grid cols-2" style="max-width:860px;margin:0 auto">
      <div class="card reveal d1" style="text-align:center;padding:2.3rem;border-top:4px solid var(--brand-gold)">
        <div class="card-icon ic-gold" style="margin-inline:auto"><i class="fas fa-family"></i></div>
        <h3 class="h-lg" style="color:var(--gold-700)" dir="rtl">دعم بقيمة ٦٠,٠٠٠ جنيه</h3>
        <p style="font-size:1.05rem;font-weight:800;margin-top:.5rem">دعم الأسر المحتاجة</p>
        <p style="color:var(--muted);margin-top:.5rem">دعم مباشر لعدد ٥٠ أسرة من الأسر الأولى بالرعاية.</p>
      </div>
      <div class="card reveal d2" style="text-align:center;padding:2.3rem;border-top:4px solid var(--emerald-600)">
        <div class="card-icon ic-emerald" style="margin-inline:auto"><i class="fas fa-heart-pulse"></i></div>
        <h3 class="h-lg" style="color:var(--emerald-700)" dir="rtl">دعم بقيمة ٢٠,٠٠٠ جنيه</h3>
        <p style="font-size:1.05rem;font-weight:800;margin-top:.5rem">دعم المرضى</p>
        <p style="color:var(--muted);margin-top:.5rem">مساهمة علاجية ومالية لمساندة المرضى غير القادرين.</p>
      </div>
    </div>
  </div>
</section>

<!-- Health Section -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">صحة أفضل... حياة أكرم</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إنجازاتنا في <span class="text-grad-blue">المجال الصحي</span></h2>
      <p class="lead reveal d2">نؤمن بأن الصحة نعمة عظيمة وحق من حقوق الإنسان، ولذلك نعمل على دعم المرضى وتقديم المساعدات الطبية والعلاجية.</p>
    </div>
    <div class="grid cols-3">
      ${[{i:"fa-stethoscope",t:"عيادة أنف وأذن وحنجرة",d:"دعم مستشفى كفر العنانية بعيادة أنف وأذن وحنجرة لدعم المرضى وتوفير الكشف والعلاج المتخصص.",c:"ic-blue"},{i:"fa-bolt",t:"تطوير البنية التحتية",d:"دعم المستشفى بتطوير وتعديل أعمال الكهرباء لتحسين الخدمات وضمان بيئة آمنة للمرضى.",c:"ic-gold"},{i:"fa-pills",t:"صرف علاجات شهرية",d:"توفير الأدوية والعلاجات الشهرية للمرضى غير القادرين بشكل مستمر.",c:"ic-emerald"},{i:"fa-ribbon",t:"دعم مرضى السرطان",d:"مساعدات شهرية لمرضى السرطان لمساندتهم في رحلتهم العلاجية وتخفيف الأعباء عنهم.",c:"ic-crimson"},{i:"fa-hospital",t:"عمليات جراحية",d:"المساهمة في إجراء عمليات جراحية لغير القادرين بالتعاون مع المستشفيات المتخصصة.",c:"ic-blue"}].map((t,e)=>`
      <article class="card reveal d${e%3+1}">
        <div class="card-icon ${t.c}"><i class="fas ${t.i}"></i></div>
        <h3>${t.t}</h3><p>${t.d}</p>
      </article>`).join("")}
    </div>
    <div class="center" style="margin-top:2rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-hero);color:#fff;border-radius:1rem">
        <p style="font-size:1.1rem;line-height:1.8;font-weight:600">﴿ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ﴾</p>
        <p style="opacity:.6;font-size:.85rem;margin-top:.4rem">سورة المائدة</p>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">أجيال متعلمة... مستقبل أفضل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">إنجازاتنا في <span class="text-grad-emerald">المجال التعليمي</span></h2>
      <p class="lead reveal d2">نؤمن أن التعليم هو أساس بناء الإنسان والمجتمع. نولي اهتماماً كبيراً بدعم المنظومة التعليمية ومساندة الطلاب في مختلف المراحل.</p>
    </div>
    <div class="grid cols-3">
      ${[{i:"fa-print",t:"دعم المدارس",d:"دعم عدد من المدارس في القرى بماكينات تصوير حديثة لتيسير العمل الإداري والتعليمي وخدمة الطلاب والمعلمين."},{i:"fa-trophy",t:"تكريم المتفوقين",d:"تكريم الطلبة المتفوقين في جميع المراحل الدراسية وتحفيزهم على الاستمرار في التفوق والنجاح."},{i:"fa-graduation-cap",t:"دفع المصاريف الدراسية",d:"دفع مصاريف الطلبة غير القادرين لمساعدتهم على استكمال تعليمهم دون انقطاع."},{i:"fa-bag-shopping",t:"مستلزمات مدرسية كاملة",d:"توفير المستلزمات المدرسية كاملة للطلاب: شنط، أدوات كتابية، كتب، زي مدرسي وغيرها."},{i:"fa-magnifying-glass-chart",t:"متابعة مستمرة",d:"متابعة مستمرة للطلاب طوال العام الدراسي للاطمئنان على مستواهم الدراسي وحل أي تحديات تواجههم."},{i:"fa-house-chimney",t:"زيارات تكريمية",d:"تكريم الأوائل بزيارات منزلية من أعضاء المؤسسة لتكريمهم وتقديرهم وتشجيعهم وأسرهم."}].map((t,e)=>`
      <article class="card reveal d${e%3+1}">
        <div class="card-icon ${e%2===0?"ic-gold":"ic-emerald"}"><i class="fas ${t.i}"></i></div>
        <h3>${t.t}</h3><p>${t.d}</p>
      </article>`).join("")}
    </div>
    <div class="center" style="margin-top:2rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-gold);color:#fff;border-radius:1rem">
        <p style="font-size:1.1rem;line-height:1.8;font-weight:600">العلم يبني بيوتاً لا عماد لها 🏛️<br>والجهل يهدم بيوت العز والكرم</p>
      </div>
    </div>
  </div>
</section>

<!-- Quran Section -->
<section class="section bg-aurora">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">غرس اليوم... نور المستقبل</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">مشاريعنا في <span class="text-grad-brand">تحفيظ القرآن الكريم</span></h2>
      <p class="lead reveal d2">نؤمن بأن القرآن الكريم هو المنهج الرباني الذي يصلح القلوب ويبني الأجيال ويصنع القادة.</p>
    </div>
    <div class="grid cols-2" style="max-width:850px;margin:0 auto">
      <div class="card reveal d1" style="border-top:4px solid var(--brand-gold)">
        <div class="card-icon ic-gold"><i class="fas fa-trophy"></i></div>
        <h3>مسابقات القرآن الكريم</h3>
        <ul style="list-style:none;padding:0;margin-top:1rem;line-height:2.2">
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> مشاركة واسعة من الأبناء والبنات في مختلف الأعمار</li>
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> حفظ وتلاوة وتجويد في أجواء إيمانية تنافسية مميزة</li>
          <li><i class="fas fa-check-circle" style="color:var(--brand-gold);margin-left:.5rem"></i> جوائز قيمة للفائزين تشجيعاً للمتميزين وتحفيزاً لمواصلة الطريق</li>
        </ul>
      </div>
      <div class="card reveal d2" style="border-top:4px solid #2ecc71">
        <div class="card-icon ic-emerald"><i class="fas fa-book-open-reader"></i></div>
        <h3>حلقات التحفيظ للأطفال</h3>
        <ul style="list-style:none;padding:0;margin-top:1rem;line-height:2.2">
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> مناهج مبسطة تناسب أعمار الأطفال</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> معلمون مؤهلون في بيئة آمنة ومحفزة</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> متابعة مستمرة ومراجعة دورية لحفظ القرآن الكريم</li>
          <li><i class="fas fa-check-circle" style="color:#2ecc71;margin-left:.5rem"></i> تعليم وتربية لغرس القيم والأخلاق القرآنية</li>
        </ul>
      </div>
    </div>
    <div class="center" style="margin-top:2.5rem">
      <div class="card reveal" style="max-width:600px;display:inline-block;text-align:center;padding:1.5rem;background:var(--grad-hero);color:#fff;border-radius:1rem">
        <i class="fas fa-book-quran" style="font-size:2rem;color:var(--brand-gold);margin-bottom:.8rem"></i>
        <p style="font-size:1.15rem;line-height:1.8;font-weight:600">«خيركم من تعلّم القرآن وعلّمه»</p>
        <p style="opacity:.6;font-size:.85rem;margin-top:.4rem">صحيح البخاري</p>
      </div>
    </div>
  </div>
</section>

<!-- Food & Family Support -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">الغذاء حق... والتكافل واجب... والعطاء رسالة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">التكافل الغذائي <span class="text-grad-emerald">ودعم الأسر</span></h2>
    </div>
    <div class="grid cols-4">
      ${[{i:"fa-cow",t:"توزيع اللحوم",d:"توزيع اللحوم الطازجة على الأسر الأولى بالرعاية في المواسم والأعياد لإدخال الفرحة ومشاركة البركة."},{i:"fa-box-open",t:"كراتين رمضان",d:"توزيع كراتين رمضان داخل القرى والأحياء الأكثر احتياجاً، تحتوي على المواد الغذائية الأساسية التي تكفي الأسرة لمدة شهر كامل."},{i:"fa-shirt",t:"ملابس العيد",d:"توزيع ملابس جديدة على الأطفال والأسر المحتاجة لإدخال السرور عليهم في أيام العيد."},{i:"fa-utensils",t:"الوجبات الغذائية",d:"توزيع وجبات غذائية مطهية بشكل يومي ودوري على الأسر المحتاجة والعمالة غير المنتظمة."}].map((t,e)=>`
      <article class="card reveal d${e+1}" style="text-align:center">
        <div class="card-icon ${e%2===0?"ic-gold":"ic-emerald"}" style="margin-inline:auto"><i class="fas ${t.i}"></i></div>
        <h3>${t.t}</h3><p>${t.d}</p>
      </article>`).join("")}
    </div>
    <p class="center reveal" style="margin-top:2rem;font-size:1.1rem;font-weight:700;color:var(--brand-gold)">بفضل الله ثم دعمكم نرسم البسمة على وجوههم ونصنع الفرق في حياتهم 💛</p>
  </div>
</section>

<!-- Community Initiatives -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">خدمة المجتمع رسالة إنسانية عظيمة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">مبادرات المؤسسة <span class="text-grad-brand">المجتمعية</span></h2>
    </div>
    <div class="grid cols-4">
      ${[{i:"fa-gamepad",t:"مسابقات في الشوارع",d:"تنظيم مسابقات ترفيهية وتعليمية في الشوارع لتعزيز روح التكافل والمرح."},{i:"fa-gift",t:"هدايا للأطفال",d:"توزيع هدايا على الأطفال لإدخال الفرحة والسرور على قلوبهم."},{i:"fa-people-group",t:"خدمة الأهالي",d:"خدمة الأهالي وحل المشكلات المجتمعية بالتعاون مع الجهات المعنية."},{i:"fa-seedling",t:"مبادرات تنموية",d:"دعم المبادرات الإنسانية والتنموية، لأن الخير لا يتوقف عند حدود."}].map((t,e)=>`
      <article class="card reveal d${e+1}" style="text-align:center">
        <div class="card-icon ic-blue" style="margin-inline:auto"><i class="fas ${t.i}"></i></div>
        <h3>${t.t}</h3><p>${t.d}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<div class="center" style="padding:3rem 0">
  <p style="font-size:1.2rem;font-weight:800;color:var(--brand-gold)">شكراً لكل من كان سبباً في هذا الخير 💚</p>
</div>

${de()}
`,$c=()=>W("تبرّع الآن","عطاؤك يصل بأمانة وخصوصية إلى مستحقيه. اختر الطريقة الأنسب لك، وسجّل بياناتك ليتم توثيق التبرع ومتابعته داخل المؤسسة.","تبرّع")+`
<section class="section">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <div class="form-card reveal-x">
        <h2 class="h-lg" style="margin-bottom:.4rem">بيانات التبرع</h2>
        <p style="color:var(--muted);margin-bottom:1.6rem">املأ البيانات الأساسية بعد إتمام التحويل أو قبل التنسيق مع الفريق، حتى يتم تسجيل التبرع ومراجعته.</p>

        <form id="donateForm" method="POST" action="/api/donations/add">
          <input type="hidden" name="donation_type" value="once">
          <input type="hidden" name="payment_method" id="paymentInput" value="instapay_bank">

          <div class="field">
            <label for="amount">المبلغ المراد التبرع به <span class="req">*</span></label>
            <input type="number" id="amount" name="amount" required placeholder="اكتب المبلغ المناسب">
          </div>

          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label for="dn">الاسم <span class="req">*</span></label><input id="dn" name="donor_name" required placeholder="اسمك الكريم"></div>
            <div class="field"><label for="dp">وسيلة التواصل <span class="req">*</span></label><input id="dp" name="donor_phone" required placeholder="رقم الهاتف أو وسيلة التواصل"></div>
          </div>
          <div class="field"><label for="de">البريد الإلكتروني</label><input type="email" id="de" name="donor_email" placeholder="بريدك الإلكتروني"></div>

          <div class="field">
            <label>طريقة التبرع</label>
            <div class="grid cols-3" style="gap:.7rem">
              <label class="amount-opt active" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='instapay_bank';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-building-columns"></i> إنستاباي</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='vodafone_cash';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-wallet"></i> فودافون كاش</label>
              <label class="amount-opt" style="display:flex;gap:.5rem;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById('paymentInput').value='cash';this.parentElement.querySelectorAll('.amount-opt').forEach(o=>o.classList.remove('active'));this.classList.add('active')"><i class="fas fa-money-bill-wave"></i> نقدي</label>
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-block btn-lg magnetic" style="margin-top:1rem"><i class="fas fa-hand-holding-heart"></i> إرسال بيانات التبرع</button>
          <p class="center" style="margin-top:1rem;color:var(--muted);font-size:.85rem"><i class="fas fa-shield-halved" style="color:var(--emerald-700)"></i> بياناتك محفوظة ولا تُستخدم إلا لتأكيد التبرع.</p>
        </form>
      </div>

      <div class="reveal d1">
        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--brand-gold)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-building-columns" style="color:var(--brand-gold)"></i> إنستاباي / تحويل بنكي
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">افتح تطبيق إنستاباي، اختر تحويل بنكي، ثم البنك الزراعي المصري، وأدخل رقم الحساب التالي:</p>
          <button type="button" class="copy-box" onclick="navigator.clipboard.writeText('10010397596901014');if(window.__toast) window.__toast('تم نسخ رقم الحساب')">10010397596901014</button>
          <p style="color:var(--muted);font-size:.88rem;margin-top:.6rem">بعد التحويل، أرسل بياناتك من النموذج لتوثيق التبرع.</p>
        </div>

        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--emerald-600)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-mobile-screen-button" style="color:var(--emerald-600)"></i> إنستاباي أو فودافون كاش
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">يمكن التبرع عبر رقم المؤسسة المخصص للتحويلات الإلكترونية:</p>
          <button type="button" class="copy-box" onclick="navigator.clipboard.writeText('01060920249');if(window.__toast) window.__toast('تم نسخ رقم التحويل')">01060920249</button>
          <p style="color:var(--muted);font-size:.88rem;margin-top:.6rem">الرقم يعمل على إنستاباي وفودافون كاش.</p>
        </div>

        <div class="card" style="margin-bottom:1.4rem;border-right:4px solid var(--blue-600)">
          <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
            <i class="fas fa-handshake" style="color:var(--blue-600)"></i> الدفع المباشر
          </h3>
          <p style="line-height:1.9;color:var(--ink-700)">للتبرع النقدي المباشر، يتم التنسيق مع الأستاذ جمال عبد الخالق لتأكيد الاستلام والتوثيق.</p>
        </div>

        <div class="glass-card" style="background:var(--grad-hero);color:#fff">
          <div class="card-icon ic-gold" style="margin-bottom:1rem"><i class="fas fa-hand-holding-heart"></i></div>
          <h3 style="color:#fff">صكوك الأضاحي</h3>
          <p style="color:rgba(255,255,255,.85);margin-top:.5rem;font-size:1rem">شارك فرحة العيد، واجعل أضحيتك أجرًا لك وفرحة لهم.</p>
          <div class="grid cols-2" style="gap:1rem;margin-top:1.2rem">
            <div style="background:rgba(255,255,255,.12);padding:1rem;border-radius:.8rem;text-align:center">
              <div style="font-size:1.35rem;font-weight:900;color:#fff">٥٠٠ جنيه</div>
              <div style="opacity:.75;font-size:.86rem">صك الصدقة</div>
            </div>
            <div style="background:rgba(255,255,255,.15);padding:1rem;border-radius:.8rem;text-align:center;border:1px solid rgba(255,202,95,.42)">
              <div style="font-size:1.35rem;font-weight:900;color:var(--gold-400)">١١,٠٠٠ جنيه</div>
              <div style="opacity:.75;font-size:.86rem">صك الأضحية الكامل</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
(function(){
  const p = new URLSearchParams(window.location.search);
  if(p.get('success')==='1') {
    setTimeout(function(){ if(window.__toast) window.__toast('جزاك الله خيرًا، تم استلام بيانات التبرع بنجاح'); }, 600);
    history.replaceState(null,'','/donate');
  }
  if(p.get('error')) {
    setTimeout(function(){ if(window.__toast) window.__toast('حدث خطأ، يرجى المحاولة مرة أخرى'); }, 600);
    history.replaceState(null,'','/donate');
  }
})();
<\/script>
`,Tc=(t=!1,e=null)=>W("كن متطوّعًا معنا","وقتك ومهاراتك هدايا لا تُقدّر بثمن. انضمّ إلى أسرة المتطوّعين وكن جزءًا من صناعة الأثر.","التطوّع")+`
<!-- roles -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">مجالات التطوّع</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">اختر <span class="text-grad-brand">دورك في العطاء</span></h2>
    </div>
    <div class="grid cols-3">
      ${[{i:"fa-truck-medical",c:"ic-crimson",t:"التطوّع الميداني",d:"المشاركة في توزيع المساعدات والقوافل الإغاثية على الأرض."},{i:"fa-stethoscope",c:"ic-blue",t:"التطوّع الطبي",d:"أطباء وممرضون للمشاركة في القوافل الصحية المجانية."},{i:"fa-laptop-code",c:"ic-emerald",t:"التطوّع الرقمي",d:"دعم تقني وتصميم وإدارة محتوى ووسائل تواصل."},{i:"fa-chalkboard-user",c:"ic-gold",t:"التطوّع التعليمي",d:"تدريس ودروس تقوية وأنشطة للطلاب المكفولين."},{i:"fa-bullhorn",c:"ic-blue",t:"التوعية والحملات",d:"نشر الوعي وتنظيم الفعاليات وجمع التبرّعات."},{i:"fa-hands-holding-child",c:"ic-emerald",t:"رعاية الأسر",d:"متابعة الحالات وتقديم الدعم النفسي والاجتماعي."}].map((s,r)=>`
      <article class="card role-card reveal d${r%3+1}">
        <div class="card-icon ${s.c}"><i class="fas ${s.i}"></i></div>
        <h3>${s.t}</h3><p>${s.d}</p>
        <a href="#volForm" class="card-link" style="justify-content:center">سجّل اهتمامك <i class="fas fa-arrow-left"></i></a>
      </article>`).join("")}
    </div>
  </div>
</section>

<!-- perks + form -->
<section class="section bg-cream" id="volForm">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <div class="reveal-x">
        <span class="eyebrow">لماذا تتطوّع معنا؟</span>
        <h2 class="h-xl" style="margin:.8rem 0 1.4rem">تجربةٌ <span class="text-grad-emerald">تستحقها</span></h2>
        <ul class="feature-list">
          <li><span class="fi ic-emerald"><i class="fas fa-certificate"></i></span><div><b>شهادات معتمدة</b><p>وثّق ساعات تطوّعك بشهادات رسمية تدعم مسيرتك.</p></div></li>
          <li><span class="fi ic-blue"><i class="fas fa-people-group"></i></span><div><b>مجتمع ملهم</b><p>انضم لشبكة من المتطوّعين الشغوفين بالعطاء.</p></div></li>
          <li><span class="fi ic-gold"><i class="fas fa-graduation-cap"></i></span><div><b>تدريب وتطوير</b><p>ورش وبرامج لصقل مهاراتك القيادية والميدانية.</p></div></li>
          <li><span class="fi ic-crimson"><i class="fas fa-heart"></i></span><div><b>أثرٌ حقيقي</b><p>اشعر بمعنى العطاء حين تلمس حياة الناس بيديك.</p></div></li>
        </ul>
      </div>
      <div class="form-card reveal d1">
        <h3 class="h-lg" style="margin-bottom:1.2rem">استمارة التطوّع</h3>
        ${t?'<div style="background:var(--emerald-600);color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-check-circle"></i> شكرًا لك! تم تسجيل طلبك بنجاح وسنتواصل معك قريبًا.</div>':""}
        ${e?`<div style="background:#e53935;color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-exclamation-circle"></i> حدث خطأ: ${e}</div>`:""}
        <form action="/api/volunteers" method="POST">
          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label>الاسم <span class="req">*</span></label><input name="full_name" required placeholder="اسمك الكامل"></div>
            <div class="field"><label>العمر</label><input name="age" type="number" placeholder="العمر"></div>
          </div>
          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label>الجوال <span class="req">*</span></label><input name="phone" required placeholder="رقم التواصل"></div>
            <div class="field"><label>المدينة</label><input name="city" placeholder="المحافظة / المدينة"></div>
          </div>
          <div class="field"><label>مجال التطوّع المفضّل</label>
            <select name="preferred_role"><option>التطوّع الميداني</option><option>التطوّع الطبي</option><option>التطوّع الرقمي</option><option>التطوّع التعليمي</option><option>التوعية والحملات</option><option>رعاية الأسر</option></select>
          </div>
          <div class="field"><label>أوقات إتاحتك ومهاراتك</label><textarea name="skills" placeholder="أخبرنا عن مهاراتك والأوقات التي تستطيع التطوّع فيها"></textarea></div>
          <button type="submit" class="btn btn-primary btn-block btn-lg magnetic"><i class="fas fa-hands-helping"></i> أرسل طلب التطوّع</button>
        </form>
      </div>
    </div>
  </div>
</section>

${de()}
`,Rc=[{src:"/static/img/gallery-1.jpg",t:"مشروع الأضاحي وتوزيع اللحوم",cat:"ميدان"},{src:"/static/img/gallery-2.jpg",t:"توزيع الكراتين والمساعدات الغذائية",cat:"غذاء"},{src:"/static/img/gallery-3.jpg",t:"دعم عيادة الأنف والأذن والحنجرة",cat:"صحة"},{src:"/static/img/gallery-4.jpg",t:"تكريم المتفوقين ودعم التعليم",cat:"تعليم"},{src:"/static/img/gallery-5.jpg",t:"حلقات تحفيظ القرآن الكريم للأطفال",cat:"تعليم"},{src:"/static/img/gallery-6.jpg",t:"أنشطة وفعاليات تطوعية مع الشباب",cat:"ميدان"},{src:"/static/img/gallery-7.jpg",t:"زيارات المرضى وتوفير الدعم الصحي",cat:"صحة"},{src:"/static/img/gallery-8.jpg",t:"المبادرات الرمضانية وتوزيع الوجبات",cat:"غذاء"}],Ac=()=>W("معرض الصور","لحظاتٌ من الميدان توثّق رحلة العطاء، وتروي قصص الأمل التي صنعناها معًا.","معرض الصور")+`
<section class="section">
  <div class="wrap">
    <div class="center" style="margin-bottom:2.4rem">
      <div class="tabs" id="galFilter">
        <button class="tab active" data-filter="all">الكل</button>
        <button class="tab" data-filter="صحة">صحة</button>
        <button class="tab" data-filter="غذاء">غذاء</button>
        <button class="tab" data-filter="تعليم">تعليم</button>
        <button class="tab" data-filter="ميدان">ميدان</button>
      </div>
    </div>
    <div class="masonry reveal">
      ${Rc.map((t,e)=>`
      <div class="g-item" data-cat="${t.cat}">
        <img src="${t.src}" alt="${t.t}" loading="lazy">
        <div class="g-overlay"><span><i class="fas fa-camera"></i> ${t.t}</span></div>
      </div>`).join("")}
    </div>
  </div>
</section>

<!-- video block -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="split">
      <div class="reveal-x">
        <span class="eyebrow">شاهد قصتنا</span>
        <h2 class="h-xl" style="margin:.8rem 0 1rem">رحلةٌ من <span class="text-grad-blue">العطاء</span> بالصورة والصوت</h2>
        <p class="lead">شاهد كيف يتحوّل تبرّعك إلى ابتسامةٍ على وجه طفل، وإلى أملٍ في قلب أسرة. وثائقيٌّ قصير من قلب الميدان.</p>
        <a href="/campaigns" class="btn btn-primary magnetic" style="margin-top:1.4rem"><i class="fas fa-heart"></i> ادعم حملاتنا</a>
      </div>
      <div class="reveal d1 frame" style="aspect-ratio:16/9;display:grid;place-items:center;background:var(--grad-hero);cursor:pointer">
        <button class="lang-btn" style="width:84px;height:84px;font-size:1.8rem;background:rgba(255,255,255,.95);color:var(--blue-700)"><i class="fas fa-play"></i></button>
      </div>
    </div>
  </div>
</section>

${de()}
`,Oc=(t=[])=>W("أخبار المؤسسة","تابع آخر مستجدّات حملاتنا وفعالياتنا وأثرنا الإنساني على أرض الواقع.","الأخبار")+`
<section class="section">
  <div class="wrap">
    ${t.length>0?`
    <!-- featured -->
    <article class="news-card reveal" style="margin-bottom:3rem">
      <div class="split" style="gap:0;align-items:stretch">
        <div class="news-media" style="aspect-ratio:auto"><img src="${t[0].image_url||"/static/img/placeholder.jpg"}" alt="${t[0].title}" style="height:100%;min-height:320px"></div>
        <div style="padding:clamp(1.6rem,3vw,2.6rem);display:flex;flex-direction:column;justify-content:center">
          <span class="chip chip-gold" style="align-self:flex-start;margin-bottom:1rem">خبر مميّز · ${t[0].category}</span>
          <h2 class="h-lg">${t[0].title}</h2>
          <p class="lead" style="margin:1rem 0">${t[0].excerpt}</p>
          <div class="news-date" style="margin-bottom:1rem"><span><i class="fas fa-user"></i> فريق التحرير</span></div>
          <a href="/news/${t[0].id}" class="btn btn-primary magnetic" style="align-self:flex-start"><i class="fas fa-book-open"></i> اقرأ المقال كاملاً</a>
        </div>
      </div>
    </article>

    <div class="grid cols-3">
      ${t.slice(1).map((e,s)=>`
      <article class="news-card reveal d${s%3+1}">
        <div class="news-media"><img src="${e.image_url||"/static/img/placeholder.jpg"}" alt="${e.title}" loading="lazy"><span class="chip chip-blue" style="position:absolute;top:1rem;inset-inline-start:1rem">${e.category}</span></div>
        <div class="news-body">
          <h3>${e.title}</h3>
          <p style="color:var(--muted);font-size:.92rem">${e.excerpt}</p>
          <a href="/news/${e.id}" class="card-link">اقرأ المزيد <i class="fas fa-arrow-left"></i></a>
        </div>
      </article>`).join("")}
    </div>

    <div class="center" style="margin-top:3rem">
      <button class="btn btn-ghost btn-lg">تحميل المزيد <i class="fas fa-rotate"></i></button>
    </div>
    `:'<p style="text-align:center;color:var(--muted);padding:4rem 0;font-size:1.1rem">لا توجد أخبار منشورة حالياً. يرجى العودة لاحقاً لمعرفة جديد المؤسسة.</p>'}
  </div>
</section>
`,jc=(t=[])=>W("الفعاليات والمناسبات","انضمّ إلينا في فعالياتنا القادمة — قوافل، ملتقيات، وحفلات خيرية تصنع الفرق معًا.","الفعاليات")+`
<section class="section">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <!-- featured event -->
      <div class="reveal-x">
        ${t.length>0?`
        <article class="campaign">
          <div class="campaign-media"><img src="${t[0].image_url||"/static/img/placeholder.jpg"}" alt="${t[0].title}"><span class="chip chip-gold tag">فعالية مميّزة</span></div>
          <div class="campaign-body">
            <h3 class="h-lg">${t[0].title}</h3>
            <p>${t[0].description}</p>
            <div style="display:flex;gap:1.4rem;flex-wrap:wrap;margin:.6rem 0">
              <span class="chip chip-blue"><i class="fas fa-calendar"></i> موعد يعلن لاحقًا</span>
              <span class="chip"><i class="fas fa-location-dot"></i> ${t[0].place||"المكان يعلن لاحقًا"}</span>
            </div>
            <a href="/events/${t[0].id}" class="btn btn-primary magnetic"><i class="fas fa-ticket"></i> تفاصيل الفعالية</a>
          </div>
        </article>
        `:'<p style="color:var(--muted)">لا توجد فعاليات مميزة حالياً.</p>'}
      </div>

      <!-- upcoming list -->
      <div class="reveal d1">
        <h2 class="h-lg" style="margin-bottom:1.4rem">الفعاليات القادمة</h2>
        <div class="flow">
          ${t.length?t.map(e=>`
            <div class="event-row">
              <div class="card-icon ic-blue" style="margin:0;flex-shrink:0"><i class="fas fa-calendar-check"></i></div>
              <div style="flex:1">
                <span class="chip chip-blue" style="margin-bottom:.4rem">فعالية</span>
                <h3 style="font-size:1.08rem">${e.title}</h3>
                <p style="color:var(--muted);font-size:.88rem"><i class="fas fa-location-dot"></i> ${e.place||"المكان يعلن لاحقًا"}</p>
              </div>
              <a href="/events/${e.id}" class="btn btn-ghost btn-sm">التفاصيل</a>
            </div>`).join(""):'<p style="text-align:center;color:var(--muted);padding:2rem">لا توجد فعاليات قادمة حالياً.</p>'}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- past events -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">من أرشيف فعالياتنا</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">لحظاتٌ <span class="text-grad-emerald">لا تُنسى</span></h2>
    </div>
    <div class="grid cols-3">
      <p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">قريباً سنشارككم أرشيف الفعاليات السابقة.</p>
    </div>
  </div>
</section>

${de()}
`,Cc=(t=!1,e=null)=>W("تواصل معنا","نحن هنا لسماعك. سواء كان لديك استفسار، اقتراح، أو رغبة في الشراكة — لا تتردّد في مراسلتنا.","تواصل معنا")+`
<section class="section">
  <div class="wrap">
    <div class="grid cols-3" style="margin-bottom:3rem">
      ${[{i:"fa-location-dot",c:"ic-blue",t:"العنوان",d:"كفر العنانية، الدقهلية، جمهورية مصر العربية"},{i:"fa-phone-volume",c:"ic-emerald",t:"الهاتف",d:"01060920249"},{i:"fa-envelope-open-text",c:"ic-gold",t:"البريد",d:"info@omarhesham.org"}].map((s,r)=>`
      <article class="card reveal d${r+1}" style="text-align:center">
        <div class="card-icon ${s.c}" style="margin-inline:auto"><i class="fas ${s.i}"></i></div>
        <h3>${s.t}</h3><p>${s.d}</p>
      </article>`).join("")}
    </div>

    <div class="split" style="align-items:start">
      <div class="form-card reveal-x">
        <h2 class="h-lg" style="margin-bottom:.4rem">أرسل لنا رسالة</h2>
        <p style="color:var(--muted);margin-bottom:1.6rem">سنردّ عليك في أقرب وقت ممكن.</p>
        ${t?'<div style="background:var(--emerald-600);color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-check-circle"></i> تم إرسال رسالتك بنجاح، شكرًا لتواصلك 💌</div>':""}
        ${e?`<div style="background:#e53935;color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-exclamation-circle"></i> حدث خطأ: ${e}</div>`:""}
        <form action="/api/contacts" method="POST">
          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label>الاسم <span class="req">*</span></label><input name="name" required placeholder="اسمك الكريم"></div>
            <div class="field"><label>البريد <span class="req">*</span></label><input name="email" type="email" required placeholder="email@example.com"></div>
          </div>
          <div class="grid cols-2" style="gap:0 1rem">
            <div class="field"><label>الجوال</label><input name="phone" placeholder="رقم التواصل"></div>
            <div class="field"><label>الموضوع</label><select name="subject"><option>استفسار عام</option><option>شراكة</option><option>شكوى أو اقتراح</option><option>إعلام وصحافة</option></select></div>
          </div>
          <div class="field"><label>رسالتك <span class="req">*</span></label><textarea name="message" required placeholder="اكتب رسالتك هنا..."></textarea></div>
          <button type="submit" class="btn btn-primary btn-block btn-lg magnetic"><i class="fas fa-paper-plane"></i> إرسال الرسالة</button>
        </form>
      </div>

      <div class="reveal d1">
        <div class="frame" style="aspect-ratio:4/3;background:var(--grad-hero);display:grid;place-items:center;color:#fff;text-align:center">
          <div><i class="fas fa-map-location-dot" style="font-size:3rem;color:var(--gold-400)"></i><p style="margin-top:1rem;font-weight:800">كفر العنانية · الدقهلية</p><p style="color:rgba(255,255,255,.7);font-size:.9rem">موقعنا على الخريطة</p></div>
        </div>
        <div class="card" style="margin-top:1.4rem">
          <h3 style="margin-bottom:1rem"><i class="fas fa-clock" style="color:var(--blue-600)"></i> ساعات العمل</h3>
          <div class="metric-row"><span>أيام العمل</span><b>متاحون لخدمتكم</b></div>
          <div class="metric-row"><span>الجمعة</span><b style="color:var(--crimson)">إجازة</b></div>
          <div class="social" style="margin-top:1.2rem">
            <a href="#" style="background:var(--cream);color:var(--ink-700)"><i class="fab fa-facebook-f"></i></a>
            <a href="#" style="background:var(--cream);color:var(--ink-700)"><i class="fab fa-x-twitter"></i></a>
            <a href="#" style="background:var(--cream);color:var(--ink-700)"><i class="fab fa-instagram"></i></a>
            <a href="#" style="background:var(--cream);color:var(--ink-700)"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,Pc=()=>W("الأسئلة الشائعة","جمعنا لك إجابات أكثر الأسئلة تكرارًا. لم تجد ما تبحث عنه؟ تواصل معنا مباشرة.","الأسئلة الشائعة")+`
<section class="section">
  <div class="wrap">
    <div class="accordion" id="faqAcc">
      ${wc.map((t,e)=>`
      <div class="acc-item reveal d${e%4+1}${e===0?" open":""}">
        <button class="acc-head">${t.q} <i class="fas fa-chevron-down"></i></button>
        <div class="acc-body"${e===0?' style="max-height:300px"':""}>
          <div class="acc-body-inner">${t.a}</div>
        </div>
      </div>`).join("")}
    </div>

    <div class="cta-banner reveal-scale" style="margin-top:3.5rem">
      <h2 class="h-lg">لم تجد إجابتك؟</h2>
      <p class="lead" style="margin:.8rem auto 0;max-width:520px">فريق خدمة المتبرّعين جاهزٌ للإجابة على كل استفساراتك.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-gold btn-lg magnetic"><i class="fas fa-envelope"></i> تواصل معنا</a>
        <a href="/contact" class="btn btn-outline-light btn-lg"><i class="fas fa-message"></i> أرسل رسالة</a>
      </div>
    </div>
  </div>
</section>
`,Ic=(t=[])=>W("قصص النجاح","خلف كل رقمٍ إنسانٌ وحياةٌ تغيّرت. هذه بعض القصص التي صنعها عطاؤكم.","قصص النجاح")+`
<section class="section">
  <div class="wrap flow" style="gap:3rem">
    ${t.filter(e=>e.image_url).slice(0,3).map((e,s)=>`
    <article class="news-card reveal" style="background:transparent;box-shadow:none;border:none">
      <div class="split" style="gap:clamp(20px,4vw,50px);${s%2?"direction:rtl":""}">
        <div class="frame" style="${s%2?"order:2":""}">
          <div class="frame-deco ${s%2?"fd2":"fd1"}"></div>
          <img src="${e.image_url}" alt="${e.name}" loading="lazy">
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;${s%2?"order:1":""}">
          <span class="chip chip-${["blue","gold","emerald"][s%3]}" style="align-self:flex-start">${e.role}</span>
          <p class="lead" style="margin-top:1.4rem">${e.content}</p>
          <div class="who" style="margin-top:1.4rem;display:flex;gap:.8rem;align-items:center">
            <span class="avatar placeholder">${e.name.charAt(0)}</span>
            <b>${e.name}</b>
          </div>
        </div>
      </div>
    </article>`).join("")}
    ${t.filter(e=>e.image_url).length===0?'<p style="text-align:center;color:var(--muted);padding:2rem">جاري إضافة قصص مصورة قريباً.</p>':""}
  </div>
</section>

<!-- short testimonials wall -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">كلمات من القلب</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">شهاداتُ <span class="text-grad-emerald">المستفيدين</span></h2>
    </div>
    <div class="grid cols-3">
      ${t.filter(e=>!e.image_url).map((e,s)=>`
      <figure class="testi reveal d${s%3+1}">
        <span class="quote-mark">”</span>
        <div class="stars" style="margin-bottom:.8rem">${'<i class="fas fa-star"></i>'.repeat(e.rating||5)}</div>
        <p>${e.content}</p>
        <figcaption class="who"><span class="avatar placeholder">${e.name.charAt(0)}</span><span><b>${e.name}</b><span>${e.role}</span></span></figcaption>
      </figure>`).join("")}
      ${t.filter(e=>!e.image_url).length===0?'<p style="text-align:center;grid-column:1/-1;color:var(--muted);padding:2rem">لا توجد شهادات حالياً.</p>':""}
    </div>
  </div>
</section>

${de()}
`,qc=()=>W("الشفافية المالية","ثقتكم أمانة. نعرض هنا منهج المؤسسة في إدارة التبرعات ومراجعتها إلى أن تُنشر التقارير الرسمية المعتمدة.","الشفافية المالية")+`
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">منهج واضح</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">شفافية قبل <span class="text-grad-emerald">الأرقام</span></h2>
      <p class="lead reveal d2">في مرحلة البداية نفضّل عدم عرض مؤشرات رقمية غير مكتملة. نلتزم بدلاً من ذلك بمنهج واضح للتوثيق والمراجعة وحفظ الثقة.</p>
    </div>

    <div class="grid cols-3">
      ${[{i:"fa-receipt",c:"ic-blue",t:"توثيق كل تبرع",d:"كل تبرع يصل للمؤسسة يتم تسجيله ومراجعته داخل لوحة التحكم قبل توجيهه للغرض المناسب."},{i:"fa-user-check",c:"ic-emerald",t:"مراجعة داخلية",d:"تتم متابعة التبرعات والطلبات من الإدارة لضمان وضوح المصدر ووجهة الصرف."},{i:"fa-hand-holding-heart",c:"ic-gold",t:"صرف مسؤول",d:"توجيه الدعم يتم حسب الاحتياج الفعلي وبما يراعي الأمانة والخصوصية وكرامة المستفيدين."}].map((t,e)=>`
      <article class="card reveal d${e+1}" style="text-align:center">
        <div class="card-icon ${t.c}" style="margin-inline:auto"><i class="fas ${t.i}"></i></div>
        <h3>${t.t}</h3>
        <p>${t.d}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section bg-cream">
  <div class="wrap">
    <div class="split" style="align-items:start">
      <div class="panel reveal-x">
        <h3>ما الذي سننشره لاحقًا؟</h3>
        <ul class="feature-list" style="margin-top:1rem">
          <li><span class="fi ic-blue"><i class="fas fa-file-circle-check"></i></span><div><b>تقارير دورية</b><p>ملخصات واضحة عن أوجه الصرف بعد اعتمادها من الإدارة.</p></div></li>
          <li><span class="fi ic-emerald"><i class="fas fa-scale-balanced"></i></span><div><b>سياسات صرف</b><p>شرح مبسط للمعايير التي تحكم توجيه الدعم للحالات والحملات.</p></div></li>
          <li><span class="fi ic-gold"><i class="fas fa-shield-halved"></i></span><div><b>تحديثات موثقة</b><p>عرض الأخبار والإنجازات بعد اكتمال توثيقها بدون مبالغة أو أرقام غير مكتملة.</p></div></li>
        </ul>
      </div>

      <div class="panel reveal d1">
        <h3>وعدنا لكم</h3>
        <p class="lead" style="margin-top:.8rem">لن نعرض رقمًا لمجرد الظهور. عندما تتوفر بيانات مكتملة ومعتمدة، ستُنشر بطريقة واضحة تحترم ثقة المتبرعين وخصوصية المستفيدين.</p>
        <div style="margin-top:1.4rem">
          <a href="/contact" class="btn btn-primary magnetic"><i class="fas fa-envelope"></i> تواصل معنا</a>
        </div>
      </div>
    </div>
  </div>
</section>

${de()}
`,Lc=(t=[],e=!1,s=null)=>W("انضمّ إلى فريقنا","ابنِ مسيرتك المهنية في بيئةٍ ملهمة، واجعل عملك اليومي رسالةً إنسانية تترك أثرًا.","الوظائف")+`
<!-- why work with us -->
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">لماذا نحن؟</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">أكثر من <span class="text-grad-brand">مجرّد وظيفة</span></h2>
    </div>
    <div class="grid cols-4">
      ${[{i:"fa-seedling",c:"ic-emerald",t:"رسالة ذات معنى",d:"عملك يلامس حياة آلاف المحتاجين كل يوم."},{i:"fa-arrow-trend-up",c:"ic-blue",t:"نموّ مهني",d:"مسارات تطوير وتدريب مستمر لصقل مهاراتك."},{i:"fa-people-roof",c:"ic-gold",t:"بيئة محفّزة",d:"فريقٌ متعاون وثقافة عملٍ إيجابية وداعمة."},{i:"fa-scale-balanced",c:"ic-crimson",t:"توازن الحياة",d:"مرونة في العمل واحترام لوقتك الشخصي."}].map((r,a)=>`
      <article class="card reveal d${a+1}" style="text-align:center">
        <div class="card-icon ${r.c}" style="margin-inline:auto"><i class="fas ${r.i}"></i></div>
        <h3 style="font-size:1.08rem">${r.t}</h3><p>${r.d}</p>
      </article>`).join("")}
    </div>
  </div>
</section>

<!-- open positions -->
<section class="section bg-cream">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow reveal" style="justify-content:center">الوظائف المتاحة</span>
      <h2 class="h-xl reveal d1" style="margin-top:.8rem">فرصٌ <span class="text-grad-emerald">في انتظارك</span></h2>
    </div>
    <div class="flow" style="max-width:900px;margin-inline:auto">
      ${t.length?t.map((r,a)=>`
      <article class="job-card reveal d${a%3+1}">
        <div style="display:flex;gap:1rem;align-items:center">
          <div class="card-icon ic-blue" style="margin:0;flex-shrink:0"><i class="fas fa-briefcase"></i></div>
          <div>
            <b style="font-size:1.12rem">${r.title}</b>
            <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:.4rem">
              <span class="chip chip-blue"><i class="fas fa-building"></i> ${r.department}</span>
              <span class="chip"><i class="fas fa-location-dot"></i> ${r.location}</span>
              <span class="chip chip-emerald"><i class="fas fa-clock"></i> ${r.job_type}</span>
            </div>
          </div>
        </div>
        <a href="#applyForm" class="btn btn-primary btn-sm magnetic">تقدّم الآن <i class="fas fa-arrow-left"></i></a>
      </article>`).join(""):'<p style="text-align:center;color:var(--muted);padding:2rem">لا توجد شواغر حالياً.</p>'}
    </div>
  </div>
</section>

<!-- application form -->
<section class="section" id="applyForm">
  <div class="wrap" style="max-width:760px">
    <div class="form-card reveal-scale">
      <div class="sec-head center" style="margin-bottom:2rem">
        <h2 class="h-lg">قدّم طلبك</h2>
        <p style="color:var(--muted)">املأ النموذج وأرفق سيرتك الذاتية وسنتواصل معك.</p>
      </div>
      ${e?'<div style="background:var(--emerald-600);color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-check-circle"></i> تم استلام طلبك بنجاح، سنتواصل معك قريبًا 📩</div>':""}
      ${s?`<div style="background:#e53935;color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;text-align:center;font-weight:700"><i class="fas fa-exclamation-circle"></i> حدث خطأ: ${s}</div>`:""}
      <form action="/api/jobs/apply" method="POST">
        <div class="grid cols-2" style="gap:0 1rem">
          <div class="field"><label>الاسم الكامل <span class="req">*</span></label><input name="full_name" required placeholder="اسمك"></div>
          <div class="field"><label>البريد <span class="req">*</span></label><input name="email" type="email" required placeholder="email@example.com"></div>
        </div>
        <div class="grid cols-2" style="gap:0 1rem">
          <div class="field"><label>الجوال <span class="req">*</span></label><input name="phone" required placeholder="رقم التواصل"></div>
          <div class="field"><label>الوظيفة المتقدّم لها</label><select name="job_id">${t.map(r=>`<option value="${r.id}">${r.title}</option>`).join("")}</select></div>
        </div>
        <div class="field"><label>نبذة عنك</label><textarea name="bio" placeholder="أخبرنا عن خبراتك ولماذا ترغب بالانضمام إلينا"></textarea></div>
        <div class="field"><label>السيرة الذاتية (رابط)</label><input type="url" name="cv_url" placeholder="رابط Google Drive أو LinkedIn"></div>
        <button type="submit" class="btn btn-primary btn-block btn-lg magnetic"><i class="fas fa-paper-plane"></i> إرسال الطلب</button>
      </form>
    </div>
  </div>
</section>

${de()}
`,Tr="/static/img/og-image.png",Y=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),hi=t=>{if(!t)return"موعد يعلن لاحقًا";const e=new Date(t);return Number.isNaN(e.getTime())?"موعد يعلن لاحقًا":e.toLocaleDateString("ar-EG",{year:"numeric",month:"long",day:"numeric"})},ba=t=>Number(t||0).toLocaleString("ar-EG"),Nc=t=>{const e=Y(t.title),s=Y(t.excerpt||t.content||""),r=Y(t.content||t.excerpt||""),a=Y(t.image_url||Tr);return W(e,s,"الأخبار")+`
<section class="section">
  <div class="wrap detail-wrap">
    <article class="detail-article">
      <img class="detail-cover" src="${a}" alt="${e}" loading="eager">
      <div class="detail-meta">
        <span class="chip chip-blue"><i class="fas fa-newspaper"></i> ${Y(t.category||"خبر")}</span>
        <span class="chip"><i class="fas fa-calendar"></i> ${hi(t.publish_date||t.created_at)}</span>
      </div>
      <div class="detail-content">
        ${r.split(`
`).filter(Boolean).map(i=>`<p>${i}</p>`).join("")}
      </div>
      <div class="detail-actions">
        <a href="/news" class="btn btn-ghost"><i class="fas fa-arrow-right"></i> العودة للأخبار</a>
        <a href="/donate" class="btn btn-gold"><i class="fas fa-hand-holding-heart"></i> ساهم في الأثر</a>
      </div>
    </article>
  </div>
</section>`},Uc=t=>{const e=Y(t.title),s=Y(t.description||""),r=Y(t.image_url||Tr),a=Number(t.goal||0),i=Number(t.raised||0),n=a>0?Math.min(100,Math.round(i/a*100)):0;return W(e,s,"الحملات")+`
<section class="section">
  <div class="wrap detail-wrap">
    <article class="detail-article">
      <img class="detail-cover" src="${r}" alt="${e}" loading="eager">
      <div class="detail-meta">
        <span class="chip chip-blue"><i class="fas fa-tag"></i> ${Y(t.category||"حملة")}</span>
        ${t.is_urgent?'<span class="chip chip-crimson"><i class="fas fa-bolt"></i> عاجلة</span>':""}
      </div>
      <div class="detail-content"><p>${s}</p></div>
      <div class="detail-progress">
        <div class="campaign-meta">
          <span class="raised">تم جمع ${ba(i)} ج.م</span>
          <span class="goal">الهدف ${ba(a)} ج.م</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${n}%;background:var(--grad-emerald)"></div></div>
        <strong>${n}%</strong>
      </div>
      <div class="detail-actions">
        <a href="/campaigns" class="btn btn-ghost"><i class="fas fa-arrow-right"></i> كل الحملات</a>
        <a href="/donate?campaign=${Y(t.id)}" class="btn btn-gold btn-lg"><i class="fas fa-heart"></i> تبرع لهذه الحملة</a>
      </div>
    </article>
  </div>
</section>
${de()}`},Dc=t=>{const e=Y(t.title),s=Y(t.description||""),r=Y(t.image_url||Tr);return W(e,s,"الفعاليات")+`
<section class="section">
  <div class="wrap detail-wrap">
    <article class="detail-article">
      <img class="detail-cover" src="${r}" alt="${e}" loading="eager">
      <div class="detail-meta">
        <span class="chip chip-blue"><i class="fas fa-calendar-check"></i> ${Y(t.type||"فعالية")}</span>
        <span class="chip"><i class="fas fa-calendar"></i> ${hi(t.event_date)}</span>
        <span class="chip"><i class="fas fa-location-dot"></i> ${Y(t.place||"المكان يعلن لاحقًا")}</span>
      </div>
      <div class="detail-content"><p>${s}</p></div>
      <div class="detail-actions">
        <a href="/events" class="btn btn-ghost"><i class="fas fa-arrow-right"></i> كل الفعاليات</a>
        <a href="/contact" class="btn btn-primary"><i class="fas fa-envelope"></i> تواصل للحجز أو الاستفسار</a>
      </div>
    </article>
  </div>
</section>`},ui="/static/img/logo.png",Bc=t=>`
<aside class="dash-side" id="dashSide">
  <div class="ds-brand">
    <a href="/" class="ds-logo-link">
      <img src="${ui}" alt="Logo" class="ds-logo-img">
      <div class="ds-brand-text">
        <span class="ds-brand-name">د. عمر هشام</span>
        <span class="ds-brand-sub">لوحة التحكم</span>
      </div>
    </a>
  </div>

  <div class="ds-section-label">الرئيسية</div>
  <nav class="dash-nav">
    <a href="/dashboard" class="ds-link ${t==="overview"?"active":""}"><i class="fas fa-gauge-high"></i><span>النظرة العامة</span></a>
    <a href="/dashboard/campaigns" class="ds-link ${t==="campaigns"?"active":""}"><i class="fas fa-bullhorn"></i><span>الحملات</span></a>
    <a href="/dashboard/donations" class="ds-link ${t==="donations"?"active":""}"><i class="fas fa-hand-holding-dollar"></i><span>التبرّعات</span></a>
  </nav>

  <div class="ds-section-label">إدارة المحتوى</div>
  <nav class="dash-nav">
    <a href="/dashboard/news" class="ds-link ${t==="news"?"active":""}"><i class="fas fa-newspaper"></i><span>الأخبار</span></a>
    <a href="/dashboard/events" class="ds-link ${t==="events"?"active":""}"><i class="fas fa-calendar-check"></i><span>الفعاليات</span></a>
    <a href="/dashboard/stories" class="ds-link ${t==="stories"?"active":""}"><i class="fas fa-heart"></i><span>قصص النجاح</span></a>
    <a href="/dashboard/jobs" class="ds-link ${t==="jobs"?"active":""}"><i class="fas fa-briefcase"></i><span>الوظائف</span></a>
  </nav>

  <div class="ds-section-label">الأشخاص</div>
  <nav class="dash-nav">
    <a href="/dashboard/volunteers" class="ds-link ${t==="volunteers"?"active":""}"><i class="fas fa-hands-helping"></i><span>المتطوّعون</span></a>
    <a href="/dashboard/contacts" class="ds-link ${t==="contacts"?"active":""}"><i class="fas fa-envelope"></i><span>رسائل التواصل</span></a>
    <a href="/dashboard/newsletter" class="ds-link ${t==="newsletter"?"active":""}"><i class="fas fa-envelope-open-text"></i><span>النشرة البريدية</span></a>
    <a href="/dashboard/users" class="ds-link ${t==="users"?"active":""}"><i class="fas fa-users-gear"></i><span>المسجلين</span></a>
  </nav>

  <div class="ds-footer">
    <a href="/" target="_blank" class="ds-link"><i class="fas fa-external-link-alt"></i><span>عرض الموقع</span></a>
    <a href="/api/auth/logout" class="ds-link ds-logout"><i class="fas fa-right-from-bracket"></i><span>تسجيل الخروج</span></a>
  </div>
</aside>`,he=(t,e,s)=>`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e} · لوحة التحكم</title>
  <link rel="icon" type="image/png" href="${ui}">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
  <style>
    /* ===== Dashboard Premium Overrides ===== */
    .dash { display: grid; grid-template-columns: 270px 1fr; min-height: 100vh; background: var(--bg); }

    /* Sidebar */
    .dash-side {
      background: #0b1224; color: #fff; position: sticky; top: 0; height: 100vh; overflow-y: auto;
      display: flex; flex-direction: column; border-inline-end: 1px solid rgba(255,255,255,.06);
      scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.1) transparent;
    }
    .ds-brand { padding: 1.3rem 1.2rem; border-bottom: 1px solid rgba(255,255,255,.06); }
    .ds-logo-link { display: flex; align-items: center; gap: .8rem; text-decoration: none; color: #fff; }
    .ds-logo-img { width: 40px; height: 40px; border-radius: 12px; background: rgba(255,255,255,.08); padding: 3px; }
    .ds-brand-name { font-weight: 800; font-size: .95rem; display: block; }
    .ds-brand-sub { font-size: .72rem; color: var(--gold-400); font-weight: 600; display: block; margin-top: 1px; }
    .ds-section-label {
      font-size: .68rem; font-weight: 700; color: rgba(255,255,255,.3); text-transform: uppercase;
      letter-spacing: .1em; padding: 1.2rem 1.2rem .5rem; margin-top: .2rem;
    }
    .dash-nav { display: flex; flex-direction: column; gap: 2px; padding: 0 .7rem; }
    .ds-link {
      display: flex; align-items: center; gap: .75rem; padding: .7rem .85rem; border-radius: 10px;
      font-weight: 600; font-size: .88rem; color: rgba(255,255,255,.6); transition: all .2s; text-decoration: none;
      position: relative;
    }
    .ds-link i { width: 18px; text-align: center; font-size: .9rem; }
    .ds-link:hover { background: rgba(255,255,255,.06); color: rgba(255,255,255,.9); }
    .ds-link.active { background: linear-gradient(135deg, rgba(30,136,229,.2), rgba(67,160,71,.15)); color: #fff; border: 1px solid rgba(30,136,229,.2); }
    .ds-link.active i { color: var(--blue-400); }
    .ds-link.active::after {
      content: ''; position: absolute; top: 8px; bottom: 8px; inset-inline-start: 0; width: 4px; background: var(--gold-400); border-radius: 4px;
    }
    .ds-footer { margin-top: auto; padding: .7rem; border-top: 1px solid rgba(255,255,255,.06); }
    .ds-logout { color: rgba(255,100,100,.7) !important; }
    .ds-logout:hover { color: #ff6b6b !important; background: rgba(255,100,100,.1) !important; }

    /* Main */
    .dash-main {
      padding: 1.5rem clamp(1.2rem, 2.5vw, 2rem); min-width: 0; overflow-x: hidden;
      animation: dashContentFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    @keyframes dashContentFadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .dash-topbar {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.8rem;
      padding: 1rem 1.5rem; background: var(--surface); border: 1px solid rgba(12,26,43,.05);
      border-radius: 16px; box-shadow: var(--sh-xs);
    }
    [data-theme="dark"] .dash-topbar { background: var(--surface); border-color: rgba(255,255,255,.05); }
    .dash-topbar h1 { font-size: 1.25rem; font-weight: 800; margin: 0; }

    /* KPI Cards */
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
    .kpi-card {
      background: var(--surface); border-radius: 16px; padding: 1.4rem; border: 1px solid rgba(12,26,43,.05);
      box-shadow: var(--sh-xs); transition: all .25s; position: relative; overflow: hidden;
    }
    .kpi-card:hover { transform: translateY(-3px); box-shadow: var(--sh-sm); }
    .kpi-card::after {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      border-radius: 16px 16px 0 0;
    }
    .kpi-card.kpi-blue::after { background: var(--grad-blue); }
    .kpi-card.kpi-emerald::after { background: var(--grad-emerald); }
    .kpi-card.kpi-gold::after { background: var(--grad-gold); }
    .kpi-card.kpi-crimson::after { background: linear-gradient(135deg, #e53935, #b71c1c); }
    .kpi-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .8rem; }
    .kpi-icon {
      width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; font-size: 1.1rem;
    }
    .kpi-icon.bg-blue { background: rgba(30,136,229,.1); color: var(--blue-600); }
    .kpi-icon.bg-emerald { background: rgba(67,160,71,.1); color: var(--emerald-600); }
    .kpi-icon.bg-gold { background: rgba(245,124,0,.1); color: var(--gold-600); }
    .kpi-icon.bg-crimson { background: rgba(229,57,53,.1); color: var(--crimson); }
    .kpi-value { font-size: 1.7rem; font-weight: 900; line-height: 1.2; color: var(--ink-900); }
    .kpi-label { font-size: .82rem; color: var(--muted); font-weight: 600; margin-top: .15rem; }

    /* Chart panels */
    .chart-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
    .chart-panel {
      background: var(--surface); border-radius: 16px; padding: 1.4rem; border: 1px solid rgba(12,26,43,.05);
      box-shadow: var(--sh-xs);
    }
    .chart-panel h3 { font-size: 1rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: .5rem; }
    .chart-panel h3 i { font-size: .85rem; }

    /* Data panel */
    .data-panel {
      background: var(--surface); border-radius: 16px; padding: 1.4rem; border: 1px solid rgba(12,26,43,.05);
      box-shadow: var(--sh-xs); margin-bottom: 1.5rem;
    }
    .data-panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .data-panel-header h3 { font-size: 1rem; font-weight: 700; margin: 0; display: flex; align-items: center; gap: .5rem; }
    .data-panel-header a { font-size: .85rem; font-weight: 700; color: var(--blue-600); text-decoration: none; }
    .data-panel-header a:hover { text-decoration: underline; }

    /* Quick stats row */
    .quick-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: .8rem; margin-bottom: 1.5rem; }
    .qs-item {
      background: var(--surface); border-radius: 12px; padding: 1rem; border: 1px solid rgba(12,26,43,.05);
      display: flex; align-items: center; gap: .8rem;
    }
    .qs-icon { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; font-size: .85rem; }
    .qs-value { font-weight: 800; font-size: 1.1rem; }
    .qs-label { font-size: .72rem; color: var(--muted); font-weight: 600; }

    .dash-overlay {
      position: fixed; inset: 0; background: rgba(6,16,32,.55); backdrop-filter: blur(4px);
      z-index: 55; opacity: 0; visibility: hidden; transition: .3s var(--ease);
    }
    .dash-overlay.show { opacity: 1; visibility: visible; }

    /* Responsive */
    @media (max-width: 980px) {
      .dash { grid-template-columns: 1fr; }
      .dash-side { position: fixed; inset-inline-start: 0; top: 0; width: 270px; transform: translateX(100%); z-index: 60; transition: .3s; }
      [dir="rtl"] .dash-side { transform: translateX(100%); }
      .dash-side.open { transform: none; }
      .chart-grid { grid-template-columns: 1fr; }
      .kpi-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .kpi-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="dash">
    ${Bc(t)}
    <div class="dash-overlay" id="dashOverlay" onclick="document.getElementById('dashSide').classList.remove('open'); document.getElementById('dashOverlay').classList.remove('show')"></div>
    <div class="dash-main">
      <div class="dash-topbar">
        <div style="display:flex;align-items:center;gap:1rem">
          <button class="burger" id="dashBurger" style="display:none" onclick="document.getElementById('dashSide').classList.toggle('open'); document.getElementById('dashOverlay').classList.toggle('show')"><span></span></button>
          <h1>${e}</h1>
        </div>
        <div style="display:flex;gap:.6rem;align-items:center">
          <button class="theme-btn" id="themeToggle" title="تبديل المظهر" aria-label="تبديل المظهر" style="width:36px;height:36px;font-size:.95rem"><i class="fas fa-moon"></i></button>
          <a href="/profile" class="avatar placeholder" style="width:38px;height:38px;text-decoration:none;font-size:.85rem" title="حسابي">ع</a>
        </div>
      </div>
      
      ${s}
      
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"><\/script>
  <script src="/static/app.js"><\/script>
  <script src="/static/presence.js"><\/script>
  <script>
    (function(){
      const p = new URLSearchParams(window.location.search);
      if(p.get('success')==='1') {
        setTimeout(function(){ if(window.__toast) window.__toast('تمت العملية بنجاح ✅'); }, 500);
        history.replaceState(null,'', window.location.pathname);
      }
      if(p.get('error')) {
        setTimeout(function(){ if(window.__toast) window.__toast('حدث خطأ. تأكد من البيانات وحاول مجدداً ❌'); }, 500);
        history.replaceState(null,'', window.location.pathname);
      }
      // Mobile sidebar toggle
      const burger = document.getElementById('dashBurger');
      if (window.innerWidth <= 980 && burger) burger.style.display = 'grid';

      // Sidebar scroll preservation
      const side = document.getElementById('dashSide');
      if (side) {
        const savedScroll = sessionStorage.getItem('dashSideScroll');
        if (savedScroll) {
          side.scrollTop = parseInt(savedScroll, 10);
        }
        side.addEventListener('click', function(e) {
          const link = e.target.closest('.ds-link');
          if (link) {
            sessionStorage.setItem('dashSideScroll', side.scrollTop);
          }
        });
        const activeLink = side.querySelector('.ds-link.active');
        if (activeLink) {
          activeLink.scrollIntoView({ block: 'nearest', behavior: 'instant' });
        }
      }
    })();
  <\/script>
</body>
</html>`,Hc=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],zc={card:"بطاقة ائتمانية",transfer:"تحويل بنكي",wallet:"محفظة إلكترونية",instapay:"إنستاباي",vodafone_cash:"فودافون كاش",أخرى:"أخرى"},Mc=["#1e88e5","#43a047","#f57c00","#e53935","#8e24aa","#00897b","#5c6bc0"],Fc=(t,e)=>{const s=t.monthly_chart||new Array(12).fill(0),r=t.method_chart||{},a=Object.keys(r).map(l=>zc[l]||l),i=Object.values(r),n=s.some(l=>l>0),o=i.length>0&&i.some(l=>l>0);return he("overview","النظرة العامة",`
  <!-- KPI Cards -->
  <div class="kpi-grid">
    <div class="kpi-card kpi-emerald">
      <div class="kpi-header">
        <div class="kpi-icon bg-emerald"><i class="fas fa-sack-dollar"></i></div>
      </div>
      <div class="kpi-value">${Number(t.total_donations||0).toLocaleString("ar-EG")}</div>
      <div class="kpi-label">إجمالي التبرّعات (ج.م)</div>
    </div>
    <div class="kpi-card kpi-blue">
      <div class="kpi-header">
        <div class="kpi-icon bg-blue"><i class="fas fa-bullhorn"></i></div>
      </div>
      <div class="kpi-value">${t.total_campaigns||0}</div>
      <div class="kpi-label">حملة نشطة</div>
    </div>
    <div class="kpi-card kpi-gold">
      <div class="kpi-header">
        <div class="kpi-icon bg-gold"><i class="fas fa-receipt"></i></div>
      </div>
      <div class="kpi-value">${t.total_donors||0}</div>
      <div class="kpi-label">عملية تبرّع</div>
    </div>
    <div class="kpi-card kpi-crimson">
      <div class="kpi-header">
        <div class="kpi-icon bg-crimson"><i class="fas fa-hands-helping"></i></div>
      </div>
      <div class="kpi-value">${t.total_volunteers||0}</div>
      <div class="kpi-label">متطوّع مسجل</div>
    </div>
  </div>

  <!-- Quick Stats Row -->
  <div class="quick-stats">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(229,57,53,.08);color:#e53935"><i class="fas fa-envelope"></i></div>
      <div><div class="qs-value">${t.unread_contacts||0}</div><div class="qs-label">رسالة غير مقروءة</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(245,124,0,.08);color:#f57c00"><i class="fas fa-user-clock"></i></div>
      <div><div class="qs-value">${t.pending_volunteers||0}</div><div class="qs-label">متطوّع بانتظار الموافقة</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-envelope-open-text"></i></div>
      <div><div class="qs-value">${t.total_subscribers||0}</div><div class="qs-label">مشترك بالنشرة</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(67,160,71,.08);color:#43a047"><i class="fas fa-calendar-check"></i></div>
      <div><div class="qs-value">${t.total_events||0}</div><div class="qs-label">فعالية</div></div>
    </div>
  </div>

  <!-- Charts -->
  <div class="chart-grid">
    <div class="chart-panel">
      <h3><i class="fas fa-chart-area" style="color:var(--emerald-600)"></i> التبرعات الشهرية (${new Date().getFullYear()})</h3>
      ${n?'<div style="position:relative;height:260px"><canvas id="monthlyChart"></canvas></div>':`<div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
            <i class="fas fa-chart-area" style="font-size:2.5rem;opacity:.15;margin-bottom:.8rem;display:block"></i>
            <p>لا توجد بيانات تبرعات لهذا العام بعد</p>
          </div>`}
    </div>
    <div class="chart-panel">
      <h3><i class="fas fa-chart-pie" style="color:var(--blue-600)"></i> توزيع وسائل الدفع</h3>
      ${o?'<div style="position:relative;height:260px;display:flex;align-items:center;justify-content:center"><canvas id="methodChart"></canvas></div>':`<div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
            <i class="fas fa-chart-pie" style="font-size:2.5rem;opacity:.15;margin-bottom:.8rem;display:block"></i>
            <p>لا توجد بيانات كافية</p>
          </div>`}
    </div>
  </div>

  <!-- Recent Donations -->
  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-clock-rotate-left" style="color:var(--gold-600)"></i> أحدث التبرّعات</h3>
      <a href="/dashboard/donations">عرض الكل <i class="fas fa-arrow-left"></i></a>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>المتبرّع</th><th>المبلغ</th><th>الطريقة</th><th>الحالة</th><th>التاريخ</th></tr></thead>
        <tbody>
          ${e.length?e.map(l=>`
          <tr>
            <td><b>${l.donor_name}</b></td>
            <td><b style="color:var(--emerald-700)">${Number(l.amount).toLocaleString("ar-EG")} ج.م</b></td>
            <td>${l.payment_method==="card"?"بطاقة":l.payment_method==="transfer"?"تحويل":l.payment_method==="wallet"?"محفظة":l.payment_method==="instapay"?"إنستاباي":l.payment_method||"-"}</td>
            <td><span class="badge badge-${l.status==="completed"?"ok":l.status==="pending"?"pend":"info"}">${l.status==="completed"?"مكتمل":l.status==="pending"?"معلّق":l.status}</span></td>
            <td style="color:var(--muted)">${new Date(l.created_at).toLocaleDateString("ar-EG")}</td>
          </tr>`).join(""):'<tr><td colspan="5" style="text-align:center;padding:2.5rem;color:var(--muted)"><i class="fas fa-inbox" style="font-size:2rem;opacity:.2;display:block;margin-bottom:.5rem"></i>لا توجد تبرعات بعد</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Charts Script — REAL DATA ONLY -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof Chart === 'undefined') return;
      Chart.defaults.font.family = 'Cairo, sans-serif';
      
      // Check dark mode
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      Chart.defaults.color = isDark ? '#8b95a8' : '#4b5b6e';
      const gridColor = isDark ? 'rgba(255,255,255,.06)' : 'rgba(12,26,43,.06)';

      // Monthly donations chart (REAL DATA from server)
      const monthlyEl = document.getElementById('monthlyChart');
      if (monthlyEl) {
        const ctx = monthlyEl.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 0, 260);
        grad.addColorStop(0, 'rgba(67,160,71,.3)');
        grad.addColorStop(1, 'rgba(67,160,71,0)');
        new Chart(monthlyEl, {
          type: 'line',
          data: {
            labels: ${JSON.stringify(Hc)},
            datasets: [{
              label: 'التبرعات (ج.م)',
              data: ${JSON.stringify(s)},
              borderColor: '#43a047',
              backgroundColor: grad,
              fill: true,
              tension: .4,
              borderWidth: 2.5,
              pointRadius: 3,
              pointHoverRadius: 6,
              pointBackgroundColor: '#43a047',
              pointBorderColor: '#fff',
              pointBorderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: function(v) { return v.toLocaleString('ar-EG'); } } },
              x: { grid: { display: false } }
            },
            interaction: { intersect: false, mode: 'index' }
          }
        });
      }

      // Payment method chart (REAL DATA from server)
      const methodEl = document.getElementById('methodChart');
      if (methodEl) {
        const labels = ${JSON.stringify(a)};
        const values = ${JSON.stringify(i)};
        const colors = ${JSON.stringify(Mc)}.slice(0, labels.length);
        new Chart(methodEl, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: values,
              backgroundColor: colors,
              borderWidth: 0,
              hoverOffset: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
              legend: { position: 'bottom', labels: { padding: 14, font: { size: 12, weight: 600 } } }
            }
          }
        });
      }
    });
  <\/script>
  `)},Wc=t=>he("campaigns","إدارة الحملات",`
  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-bullhorn" style="color:var(--gold-600)"></i> الحملات الإنسانية <span style="font-weight:400;font-size:.82rem;color:var(--muted)">(${t.length})</span></h3>
      <a href="#addCampaign" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> إضافة حملة</a>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>عنوان الحملة</th><th>التصنيف</th><th>الهدف</th><th>المدفوع</th><th>التقدّم</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(e=>{const s=e.goal>0?Math.min(100,Math.round(Number(e.raised||0)/Number(e.goal)*100)):0;return`
          <tr>
            <td><b>${e.title}</b></td>
            <td><span class="badge badge-info">${e.category||"-"}</span></td>
            <td>${Number(e.goal).toLocaleString("ar-EG")} ج.م</td>
            <td style="color:var(--emerald-700);font-weight:700">${Number(e.raised||0).toLocaleString("ar-EG")} ج.م</td>
            <td style="min-width:120px">
              <div style="display:flex;align-items:center;gap:.5rem">
                <div style="flex:1;height:6px;border-radius:3px;background:rgba(12,26,43,.06);overflow:hidden">
                  <div style="width:${s}%;height:100%;border-radius:3px;background:${s>=80?"var(--emerald-600)":s>=50?"var(--gold-600)":"var(--blue-600)"};transition:width .3s"></div>
                </div>
                <span style="font-size:.75rem;font-weight:700;color:var(--muted)">${s}%</span>
              </div>
            </td>
            <td>${e.is_urgent?'<span class="badge badge-pend">عاجل</span>':'<span class="badge badge-ok">عادي</span>'}</td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(e.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <div style="display:flex;gap:.3rem">
                <button class="btn btn-sm btn-ghost" onclick="editCampaign('${e.id}', \`${e.title.replace(/`/g,"\\`")}\`, '${e.category}', ${e.goal}, '${e.image_url||""}', ${e.is_urgent}, \`${(e.description||"").replace(/`/g,"\\`")}\`)" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/campaigns/delete/${e.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه الحملة؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`}).join(""):'<tr><td colspan="8" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-bullhorn" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد حملات مسجلة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Add form -->
  <div class="data-panel" id="addCampaign">
    <h3 style="margin-bottom:1.5rem" id="campFormTitle"><i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> حملة جديدة</h3>
    <form action="/api/campaigns/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>عنوان الحملة <span class="req">*</span></label><input type="text" name="title" required></div>
        <div class="field"><label>التصنيف</label>
          <select name="category">
            <option value="صحة">صحة</option>
            <option value="غذاء">غذاء</option>
            <option value="تعليم">تعليم</option>
            <option value="إغاثة">إغاثة عامة</option>
          </select>
        </div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>المبلغ المستهدف (ج.م) <span class="req">*</span></label><input type="number" name="goal" required></div>
        <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      </div>
      <div class="field">
        <label><input type="checkbox" name="is_urgent" value="true"> حملة عاجلة؟</label>
      </div>
      <div class="field"><label>وصف الحملة</label><textarea name="description" rows="4"></textarea></div>
      <button type="submit" class="btn btn-primary" id="campSubmitBtn"><i class="fas fa-save"></i> حفظ الحملة</button>
    </form>
  </div>
  
  <script>
    function editCampaign(id, title, category, goal, image_url, is_urgent, description) {
      document.getElementById('addCampaign').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addCampaign form');
      form.action = '/api/campaigns/edit/' + id;
      form.elements['title'].value = title;
      form.elements['category'].value = category;
      form.elements['goal'].value = goal;
      form.elements['image_url'].value = image_url;
      form.elements['is_urgent'].checked = is_urgent;
      form.elements['description'].value = description;
      
      document.getElementById('campFormTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--gold-600)"></i> تعديل الحملة';
      document.getElementById('campSubmitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث الحملة';
    }
  <\/script>
  `),Kc=t=>{const e=t.reduce((a,i)=>a+Number(i.amount||0),0),s=t.filter(a=>a.status==="completed").length,r=t.filter(a=>a.status==="pending").length;return he("donations","سجل التبرّعات",`
  <!-- Mini KPIs -->
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(67,160,71,.08);color:#43a047"><i class="fas fa-coins"></i></div>
      <div><div class="qs-value">${e.toLocaleString("ar-EG")} ج.م</div><div class="qs-label">إجمالي المبالغ</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-receipt"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">عملية تبرّع</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(46,204,113,.08);color:#27ae60"><i class="fas fa-check-circle"></i></div>
      <div><div class="qs-value">${s}</div><div class="qs-label">مكتملة</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(245,124,0,.08);color:#f57c00"><i class="fas fa-hourglass-half"></i></div>
      <div><div class="qs-value">${r}</div><div class="qs-label">معلّقة</div></div>
    </div>
  </div>

  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-hand-holding-dollar" style="color:var(--emerald-600)"></i> جميع التبرّعات</h3>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>#</th><th>المتبرّع</th><th>البريد</th><th>الهاتف</th><th>المبلغ</th><th>الطريقة</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map((a,i)=>`
          <tr>
            <td style="font-family:monospace;color:var(--muted);font-size:.8rem">${i+1}</td>
            <td><b>${a.donor_name}</b></td>
            <td style="font-size:.85rem">${a.donor_email||"-"}</td>
            <td style="direction:ltr;font-size:.85rem">${a.donor_phone||"-"}</td>
            <td><b style="color:var(--emerald-700)">${Number(a.amount).toLocaleString("ar-EG")} ج.م</b></td>
            <td><span class="badge badge-info">${a.payment_method==="card"?"بطاقة":a.payment_method==="transfer"?"تحويل":a.payment_method==="wallet"?"محفظة":a.payment_method==="instapay"?"إنستاباي":a.payment_method||"-"}</span></td>
            <td><span class="badge badge-${a.status==="completed"?"ok":a.status==="pending"?"pend":"info"}">${a.status==="completed"?"مكتمل":a.status==="pending"?"معلّق":a.status}</span></td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(a.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <form action="/api/donations/status/${a.id}" method="POST" style="display:inline">
                <input type="hidden" name="status" value="${a.status==="completed"?"pending":"completed"}">
                <button type="submit" class="btn btn-sm ${a.status==="completed"?"btn-ghost":"btn-primary"}" style="font-size:.78rem" title="تغيير الحالة">
                  <i class="fas ${a.status==="completed"?"fa-rotate-left":"fa-check"}"></i>
                  ${a.status==="completed"?"تراجع":"تأكيد"}
                </button>
              </form>
            </td>
          </tr>`).join(""):'<tr><td colspan="9" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-inbox" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد تبرعات مسجلة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `)},Gc=t=>{const e=t.filter(r=>r.status==="approved").length,s=t.filter(r=>r.status==="pending").length;return he("volunteers","المتطوّعون",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-users"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي المتطوعين</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(46,204,113,.08);color:#27ae60"><i class="fas fa-user-check"></i></div>
      <div><div class="qs-value">${e}</div><div class="qs-label">مقبولين</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(245,124,0,.08);color:#f57c00"><i class="fas fa-user-clock"></i></div>
      <div><div class="qs-value">${s}</div><div class="qs-label">بانتظار الموافقة</div></div>
    </div>
  </div>

  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-hands-helping" style="color:var(--blue-600)"></i> طلبات التطوع</h3>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>العمر</th><th>المدينة</th><th>الهاتف</th><th>الدور المفضل</th><th>المهارات</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(r=>`
          <tr>
            <td><b>${r.full_name}</b></td>
            <td>${r.age||"-"}</td>
            <td>${r.city||"-"}</td>
            <td><a href="tel:${r.phone}" dir="ltr" style="color:var(--blue-600)">${r.phone}</a></td>
            <td>${r.preferred_role||"-"}</td>
            <td style="max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${r.skills||""}">${r.skills||"-"}</td>
            <td><span class="badge badge-${r.status==="approved"?"ok":r.status==="pending"?"pend":"info"}">${r.status==="approved"?"مقبول":r.status==="pending"?"قيد المراجعة":r.status==="rejected"?"مرفوض":r.status}</span></td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(r.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <form action="/api/volunteers/status/${r.id}" method="POST" style="display:flex;gap:.25rem">
                ${r.status!=="approved"?'<button type="submit" name="status" value="approved" class="btn btn-sm btn-ghost" style="color:var(--emerald-700)" title="قبول"><i class="fas fa-check"></i></button>':""}
                ${r.status!=="rejected"?'<button type="submit" name="status" value="rejected" class="btn btn-sm btn-ghost" style="color:var(--crimson)" title="رفض"><i class="fas fa-times"></i></button>':""}
                ${r.status!=="pending"?'<button type="submit" name="status" value="pending" class="btn btn-sm btn-ghost" style="color:var(--gold-600)" title="إعادة للمراجعة"><i class="fas fa-clock"></i></button>':""}
              </form>
            </td>
          </tr>`).join(""):'<tr><td colspan="9" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-users" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا يوجد متطوعين مسجلين</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `)},Vc=t=>{const e=t.filter(s=>s.status==="unread").length;return he("contacts","رسائل التواصل",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-envelope"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي الرسائل</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(229,57,53,.08);color:#e53935"><i class="fas fa-envelope-circle-exclamation"></i></div>
      <div><div class="qs-value">${e}</div><div class="qs-label">غير مقروءة</div></div>
    </div>
  </div>

  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-inbox" style="color:var(--blue-600)"></i> الرسائل الواردة</h3>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>البريد الإلكتروني</th><th>الموضوع</th><th>الرسالة</th><th>الحالة</th><th>التاريخ</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(s=>`
          <tr style="${s.status==="unread"?"background:rgba(245,124,0,.03)":""}">
            <td><b>${s.name}</b></td>
            <td><a href="mailto:${s.email}" dir="ltr" style="color:var(--blue-600);font-size:.85rem">${s.email}</a></td>
            <td>${s.subject||"-"}</td>
            <td style="max-width:280px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:help" title="${(s.message||"").replace(/"/g,"&quot;")}">${s.message}</td>
            <td><span class="badge badge-${s.status==="unread"?"pend":s.status==="replied"?"ok":"info"}">${s.status==="unread"?"غير مقروءة":s.status==="replied"?"تم الرد":s.status==="read"?"مقروءة":s.status}</span></td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(s.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <form action="/api/contacts/status/${s.id}" method="POST" style="display:flex;gap:.25rem">
                ${s.status==="unread"?'<button type="submit" name="status" value="read" class="btn btn-sm btn-ghost" style="color:var(--blue-600)" title="تحديد كمقروءة"><i class="fas fa-eye"></i></button>':""}
                ${s.status!=="replied"?'<button type="submit" name="status" value="replied" class="btn btn-sm btn-ghost" style="color:var(--emerald-700)" title="تم الرد"><i class="fas fa-reply"></i></button>':""}
              </form>
            </td>
          </tr>`).join(""):'<tr><td colspan="7" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-envelope" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد رسائل واردة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `)},Jc=t=>he("news","الأخبار والمقالات",`
  <div class="data-panel" style="margin-bottom:1.5rem">
    <div class="data-panel-header">
      <h3><i class="fas fa-newspaper" style="color:var(--blue-600)"></i> المقالات المنشورة <span style="font-weight:400;font-size:.82rem;color:var(--muted)">(${t.length})</span></h3>
      <a href="#addNews" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> إضافة خبر</a>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>عنوان الخبر</th><th>التصنيف</th><th>تاريخ النشر</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(e=>`
          <tr>
            <td><b>${e.title}</b></td>
            <td><span class="badge badge-info">${e.category||"-"}</span></td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(e.publish_date).toLocaleDateString("ar-EG")}</td>
            <td>
              <div style="display:flex;gap:.3rem">
                <button class="btn btn-sm btn-ghost" onclick="editNews('${e.id}', \`${e.title.replace(/`/g,"\\`")}\`, '${e.category||""}', \`${(e.excerpt||"").replace(/`/g,"\\`")}\`, \`${(e.content||"").replace(/`/g,"\\`")}\`, '${e.image_url||""}')" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/news/delete/${e.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذا الخبر؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join(""):'<tr><td colspan="4" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-newspaper" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد أخبار مسجلة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <div class="data-panel" id="addNews">
    <h3 style="margin-bottom:1.5rem" id="newsFormTitle"><i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> خبر جديد</h3>
    <form action="/api/news/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>عنوان الخبر <span class="req">*</span></label><input type="text" name="title" required></div>
        <div class="field"><label>التصنيف</label><input type="text" name="category" placeholder="مثال: إنجازات، تغطية إعلامية"></div>
      </div>
      <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      <div class="field"><label>مقتطف (Excerpt) <span class="req">*</span></label><textarea name="excerpt" rows="2" required></textarea></div>
      <div class="field"><label>المحتوى الكامل <span class="req">*</span></label><textarea name="content" rows="6" required></textarea></div>
      <button type="submit" class="btn btn-primary" id="newsSubmitBtn"><i class="fas fa-save"></i> حفظ ونشر</button>
    </form>
  </div>
  
  <script>
    function editNews(id, title, category, excerpt, content, image_url) {
      document.getElementById('addNews').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addNews form');
      form.action = '/api/news/edit/' + id;
      form.elements['title'].value = title;
      form.elements['category'].value = category;
      form.elements['excerpt'].value = excerpt;
      form.elements['content'].value = content;
      form.elements['image_url'].value = image_url;
      
      document.getElementById('newsFormTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--gold-600)"></i> تعديل الخبر';
      document.getElementById('newsSubmitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث الخبر';
    }
  <\/script>
  `),Yc=t=>{const e=t.filter(s=>new Date(s.event_date)>new Date).length;return he("events","الفعاليات والأنشطة",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-calendar-days"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي الفعاليات</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(67,160,71,.08);color:#43a047"><i class="fas fa-calendar-check"></i></div>
      <div><div class="qs-value">${e}</div><div class="qs-label">فعالية قادمة</div></div>
    </div>
  </div>

  <div class="data-panel" style="margin-bottom:1.5rem">
    <div class="data-panel-header">
      <h3><i class="fas fa-calendar-check" style="color:var(--blue-600)"></i> الفعاليات</h3>
      <a href="#addEvent" class="btn btn-primary btn-sm" onclick="resetEventForm()"><i class="fas fa-plus"></i> إضافة فعالية</a>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>عنوان الفعالية</th><th>النوع</th><th>المكان</th><th>التاريخ</th><th>الحالة</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(s=>{const r=new Date(s.event_date)>new Date;return`
          <tr>
            <td><b>${s.title}</b></td>
            <td><span class="badge badge-info">${s.type||"-"}</span></td>
            <td>${s.place||"-"}</td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(s.event_date).toLocaleString("ar-EG",{dateStyle:"medium",timeStyle:"short"})}</td>
            <td><span class="badge badge-${r?"ok":"info"}">${r?"قادمة":"منتهية"}</span></td>
            <td>
              <div style="display:flex;gap:.3rem">
                <button class="btn btn-sm btn-ghost" onclick="editEvent('${s.id}', \`${s.title.replace(/`/g,"\\`")}\`, '${s.type||""}', '${s.place||""}', '${s.event_date?new Date(s.event_date).toISOString().slice(0,16):""}', \`${(s.description||"").replace(/`/g,"\\`")}\`, '${s.image_url||""}')" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/events/delete/${s.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه الفعالية؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`}).join(""):'<tr><td colspan="6" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-calendar" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد فعاليات مسجلة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <div class="data-panel" id="addEvent">
    <h3 style="margin-bottom:1.5rem" id="formTitle"><i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> فعالية جديدة</h3>
    <form action="/api/events/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>عنوان الفعالية <span class="req">*</span></label><input type="text" name="title" required></div>
        <div class="field"><label>النوع (ميداني، رقمي)</label><input type="text" name="type"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>المكان</label><input type="text" name="place"></div>
        <div class="field"><label>تاريخ الفعالية <span class="req">*</span></label><input type="datetime-local" name="event_date" required></div>
      </div>
      <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      <div class="field"><label>وصف الفعالية <span class="req">*</span></label><textarea name="description" rows="4" required></textarea></div>
      <button type="submit" class="btn btn-primary" id="submitBtn"><i class="fas fa-save"></i> حفظ الفعالية</button>
    </form>
  </div>

  <script>
    function editEvent(id, title, type, place, event_date, description, image_url) {
      document.getElementById('addEvent').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addEvent form');
      form.action = '/api/events/edit/' + id;
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--gold-600)"></i> تعديل الفعالية';
      form.elements['title'].value = title;
      form.elements['type'].value = type;
      form.elements['place'].value = place;
      form.elements['event_date'].value = event_date;
      form.elements['image_url'].value = image_url;
      form.elements['description'].value = description;
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث الفعالية';
    }
    function resetEventForm() {
      const form = document.querySelector('#addEvent form');
      form.action = '/api/events/add';
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> فعالية جديدة';
      form.reset();
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> حفظ الفعالية';
    }
  <\/script>
  `)},Xc=t=>he("stories","قصص النجاح",`
  <div class="data-panel" style="margin-bottom:1.5rem">
    <div class="data-panel-header">
      <h3><i class="fas fa-heart" style="color:var(--crimson)"></i> القصص الملهمة <span style="font-weight:400;font-size:.82rem;color:var(--muted)">(${t.length})</span></h3>
      <a href="#addStory" class="btn btn-primary btn-sm" onclick="resetStoryForm()"><i class="fas fa-plus"></i> إضافة قصة</a>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>الاسم</th><th>الدور/الصفة</th><th>التقييم</th><th>تاريخ الإضافة</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(e=>`
          <tr>
            <td><b>${e.name}</b></td>
            <td><span class="badge badge-info">${e.role||"-"}</span></td>
            <td style="color:var(--gold-500)">${"★".repeat(e.rating||5)}${"☆".repeat(5-(e.rating||5))}</td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(e.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <div style="display:flex;gap:.3rem">
                <button class="btn btn-sm btn-ghost" onclick="editStory('${e.id}', \`${e.name.replace(/`/g,"\\`")}\`, '${e.role||""}', ${e.rating}, '${e.image_url||""}', \`${e.content.replace(/`/g,"\\`")}\`)" title="تعديل"><i class="fas fa-edit"></i></button>
                <form action="/api/stories/delete/${e.id}" method="POST" style="display:inline" onsubmit="return confirm('هل أنت متأكد من حذف هذه القصة؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join(""):'<tr><td colspan="5" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-heart" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا توجد قصص مسجلة</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <div class="data-panel" id="addStory">
    <h3 style="margin-bottom:1.5rem" id="formTitle"><i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> قصة جديدة</h3>
    <form action="/api/stories/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>اسم صاحب القصة <span class="req">*</span></label><input type="text" name="name" required></div>
        <div class="field"><label>الدور أو الصفة</label><input type="text" name="role" placeholder="مثال: متبرع، مستفيد"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>التقييم (1-5)</label><input type="number" name="rating" min="1" max="5" value="5"></div>
        <div class="field"><label>رابط الصورة</label><input type="url" name="image_url" placeholder="https://..."></div>
      </div>
      <div class="field"><label>القصة أو التجربة <span class="req">*</span></label><textarea name="content" rows="4" required></textarea></div>
      <button type="submit" class="btn btn-primary" id="submitBtn"><i class="fas fa-save"></i> حفظ القصة</button>
    </form>
  </div>

  <script>
    function editStory(id, name, role, rating, image_url, content) {
      document.getElementById('addStory').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addStory form');
      form.action = '/api/stories/edit/' + id;
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--gold-600)"></i> تعديل القصة';
      form.elements['name'].value = name;
      form.elements['role'].value = role;
      form.elements['rating'].value = rating;
      form.elements['image_url'].value = image_url;
      form.elements['content'].value = content;
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث القصة';
    }
    function resetStoryForm() {
      const form = document.querySelector('#addStory form');
      form.action = '/api/stories/add';
      document.getElementById('formTitle').innerHTML = '<i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> قصة جديدة';
      form.reset();
      document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> حفظ القصة';
    }
  <\/script>
  `),Qc=(t,e)=>{const s=t.filter(r=>r.is_active).length;return he("jobs","الوظائف والتوظيف",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-briefcase"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي الوظائف</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(46,204,113,.08);color:#27ae60"><i class="fas fa-check-circle"></i></div>
      <div><div class="qs-value">${s}</div><div class="qs-label">وظيفة نشطة</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(245,124,0,.08);color:#f57c00"><i class="fas fa-file-lines"></i></div>
      <div><div class="qs-value">${e.length}</div><div class="qs-label">طلب تقديم</div></div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
    <div class="data-panel">
      <div class="data-panel-header">
        <h3><i class="fas fa-briefcase" style="color:var(--blue-600)"></i> الوظائف</h3>
        <a href="#addJob" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> إضافة</a>
      </div>
      <div style="overflow-x:auto">
        <table class="dtable">
          <thead><tr><th>المسمى</th><th>القسم</th><th>النوع</th><th>الحالة</th><th>إجراء</th></tr></thead>
          <tbody>
            ${t.length?t.map(r=>`
            <tr>
              <td><b>${r.title}</b></td>
              <td>${r.department||"-"}</td>
              <td><span class="badge badge-info">${r.job_type||"-"}</span></td>
              <td>${r.is_active?'<span class="badge badge-ok">نشط</span>':'<span class="badge badge-info">مغلق</span>'}</td>
              <td>
                <div style="display:flex;gap:.3rem">
                  <button class="btn btn-sm btn-ghost" onclick="editJob('${r.id}', \`${r.title.replace(/`/g,"\\`")}\`, '${r.department||""}', '${r.job_type||""}', '${r.location||""}', \`${(r.description||"").replace(/`/g,"\\`")}\`, ${r.is_active})" title="تعديل"><i class="fas fa-edit"></i></button>
                  <form action="/api/jobs/delete/${r.id}" method="POST" style="display:inline" onsubmit="return confirm('حذف هذه الوظيفة؟')">
                    <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                  </form>
                </div>
              </td>
            </tr>`).join(""):'<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--muted)">لا توجد وظائف</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="data-panel">
      <div class="data-panel-header">
        <h3><i class="fas fa-file-lines" style="color:var(--gold-600)"></i> طلبات التقديم</h3>
      </div>
      <div style="overflow-x:auto">
        <table class="dtable">
          <thead><tr><th>المتقدم</th><th>الهاتف</th><th>الحالة</th></tr></thead>
          <tbody>
            ${e.length?e.map(r=>`
            <tr>
              <td><b>${r.full_name}</b></td>
              <td><a href="tel:${r.phone}" dir="ltr" style="color:var(--blue-600)">${r.phone}</a></td>
              <td><span class="badge badge-${r.status==="pending"?"pend":r.status==="accepted"?"ok":"info"}">${r.status==="pending"?"قيد المراجعة":r.status==="accepted"?"مقبول":r.status}</span></td>
            </tr>`).join(""):'<tr><td colspan="3" style="text-align:center;padding:2rem;color:var(--muted)">لا توجد طلبات</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="data-panel" id="addJob">
    <h3 style="margin-bottom:1.5rem" id="jobFormTitle"><i class="fas fa-plus-circle" style="color:var(--blue-600)"></i> وظيفة جديدة</h3>
    <form action="/api/jobs/add" method="POST">
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>المسمى الوظيفي <span class="req">*</span></label><input type="text" name="title" required></div>
        <div class="field"><label>القسم</label><input type="text" name="department" placeholder="مثال: الإدارة، العمليات"></div>
      </div>
      <div class="grid cols-2" style="gap:1rem">
        <div class="field"><label>نوع الدوام</label>
          <select name="job_type">
            <option value="دوام كامل">دوام كامل</option>
            <option value="دوام جزئي">دوام جزئي</option>
            <option value="تعاقد">تعاقد حر</option>
            <option value="تطوع">تطوع</option>
          </select>
        </div>
        <div class="field"><label>المكان</label><input type="text" name="location" placeholder="مثال: القاهرة، أو عن بعد"></div>
      </div>
      <div class="field"><label>الوصف الوظيفي والمتطلبات</label><textarea name="description" rows="4"></textarea></div>
      <div class="field">
        <label><input type="checkbox" name="is_active" value="true" checked> الوظيفة متاحة للتقديم حالياً</label>
      </div>
      <button type="submit" class="btn btn-primary" id="jobSubmitBtn"><i class="fas fa-save"></i> حفظ الوظيفة</button>
    </form>
  </div>
  
  <script>
    function editJob(id, title, department, job_type, location, description, is_active) {
      document.getElementById('addJob').scrollIntoView({ behavior: 'smooth' });
      const form = document.querySelector('#addJob form');
      form.action = '/api/jobs/edit/' + id;
      form.elements['title'].value = title;
      form.elements['department'].value = department;
      form.elements['job_type'].value = job_type;
      form.elements['location'].value = location;
      form.elements['description'].value = description;
      form.elements['is_active'].checked = is_active;
      
      document.getElementById('jobFormTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--gold-600)"></i> تعديل الوظيفة';
      document.getElementById('jobSubmitBtn').innerHTML = '<i class="fas fa-save"></i> تحديث الوظيفة';
    }
  <\/script>
  `)},Zc=t=>{const e=t.filter(s=>s.status==="subscribed"||s.status==="active").length;return he("newsletter","النشرة البريدية",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-users"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي المشتركين</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(46,204,113,.08);color:#27ae60"><i class="fas fa-user-check"></i></div>
      <div><div class="qs-value">${e}</div><div class="qs-label">مشترك نشط</div></div>
    </div>
  </div>

  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-envelope-open-text" style="color:var(--blue-600)"></i> المشتركون</h3>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>#</th><th>البريد الإلكتروني</th><th>الحالة</th><th>تاريخ الاشتراك</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map((s,r)=>`
          <tr>
            <td style="color:var(--muted);font-size:.82rem">${r+1}</td>
            <td><b style="direction:ltr;display:inline-block">${s.email}</b></td>
            <td><span class="badge badge-${s.status==="subscribed"||s.status==="active"?"ok":"info"}">${s.status==="subscribed"||s.status==="active"?"نشط":s.status==="unsubscribed"?"ملغي":s.status}</span></td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(s.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <div style="display:flex;gap:.3rem">
                <form action="/api/newsletter/status/${s.id}" method="POST" style="display:inline">
                  <input type="hidden" name="status" value="${s.status==="subscribed"||s.status==="active"?"unsubscribed":"active"}">
                  <button type="submit" class="btn btn-sm ${s.status==="subscribed"||s.status==="active"?"btn-ghost":"btn-primary"}" style="font-size:.78rem" title="تغيير الحالة">
                    <i class="fas ${s.status==="subscribed"||s.status==="active"?"fa-ban":"fa-check"}"></i>
                  </button>
                </form>
                <form action="/api/newsletter/delete/${s.id}" method="POST" style="display:inline" onsubmit="return confirm('حذف هذا المشترك؟')">
                  <button type="submit" class="btn btn-sm btn-ghost" style="color:var(--danger)" title="حذف"><i class="fas fa-trash"></i></button>
                </form>
              </div>
            </td>
          </tr>`).join(""):'<tr><td colspan="5" style="text-align:center;padding:3rem;color:var(--muted)"><i class="fas fa-envelope-open-text" style="font-size:2rem;opacity:.15;display:block;margin-bottom:.5rem"></i>لا يوجد مشتركون</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>
  `)},ed=t=>{const e=t.filter(r=>r.role==="admin").length,s=t.length-e;return he("users","المستخدمين والمسجلين",`
  <div class="quick-stats" style="margin-bottom:1.2rem">
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(30,136,229,.08);color:#1e88e5"><i class="fas fa-users-gear"></i></div>
      <div><div class="qs-value">${t.length}</div><div class="qs-label">إجمالي المسجلين</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(46,204,113,.08);color:#27ae60"><i class="fas fa-shield-halved"></i></div>
      <div><div class="qs-value">${e}</div><div class="qs-label">المدراء</div></div>
    </div>
    <div class="qs-item">
      <div class="qs-icon" style="background:rgba(245,124,0,.08);color:#f57c00"><i class="fas fa-user"></i></div>
      <div><div class="qs-value">${s}</div><div class="qs-label">مستخدمين عاديين</div></div>
    </div>
  </div>

  <div class="data-panel" style="margin-bottom:1.5rem;border:1px solid rgba(46,204,113,.2);background:rgba(46,204,113,.02)">
    <h3 style="margin-bottom:1rem;display:flex;align-items:center;gap:.5rem;font-size:1rem;font-weight:700">
      <span class="live-dot" style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 8px #2ecc71"></span>
      المتواجدون الآن في الموقع (نشطين)
    </h3>
    <div id="onlineUsersList" style="display:flex;gap:.8rem;flex-wrap:wrap">
      <p style="color:var(--muted);font-size:.85rem"><i class="fas fa-circle-notch fa-spin"></i> جاري جلب بيانات المتواجدين حالياً...</p>
    </div>
  </div>

  <div class="data-panel">
    <div class="data-panel-header">
      <h3><i class="fas fa-users-gear" style="color:var(--blue-600)"></i> قائمة المستخدمين</h3>
    </div>
    <div style="overflow-x:auto">
      <table class="dtable">
        <thead><tr><th>المستخدم</th><th>البريد الإلكتروني</th><th>الصلاحية</th><th>تاريخ التسجيل</th><th>إجراء</th></tr></thead>
        <tbody>
          ${t.length?t.map(r=>`
          <tr>
            <td>
              <div style="display:flex;align-items:center;gap:.7rem">
                ${r.avatar_url?`<img src="${r.avatar_url}" alt="" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:1.5px solid var(--ink-100)">`:'<span class="avatar placeholder" style="width:36px;height:36px;font-size:.85rem;font-weight:700">👤</span>'}
                <b>${r.full_name||"بدون اسم"}</b>
              </div>
            </td>
            <td style="direction:ltr;text-align:right;font-size:.85rem">${r.email||"-"}</td>
            <td>
              <span class="badge badge-${r.role==="admin"?"ok":"info"}" style="display:inline-flex;align-items:center;gap:.3rem">
                <i class="fas ${r.role==="admin"?"fa-shield-halved":"fa-user"}"></i> ${r.role==="admin"?"مدير":"مستخدم"}
              </span>
            </td>
            <td style="color:var(--muted);font-size:.85rem">${new Date(r.created_at).toLocaleDateString("ar-EG")}</td>
            <td>
              <form action="/api/users/${r.id}/role" method="POST" style="display:inline">
                <input type="hidden" name="role" value="${r.role==="admin"?"user":"admin"}">
                <button type="submit" class="btn btn-sm ${r.role==="admin"?"btn-ghost":"btn-primary"}" style="font-size:.78rem">
                  <i class="fas ${r.role==="admin"?"fa-user-minus":"fa-user-shield"}"></i>
                  ${r.role==="admin"?"تنزيل الصلاحية":"ترقية لمدير"}
                </button>
              </form>
            </td>
          </tr>`).join(""):'<tr><td colspan="5" style="text-align:center;padding:3rem;color:var(--muted)">لا يوجد مستخدمون مسجلون</td></tr>'}
        </tbody>
      </table>
    </div>
  </div>

  <script>
    window.addEventListener('onlineUsersSync', (e) => {
      const users = e.detail;
      const list = document.getElementById('onlineUsersList');
      if (!list) return;
      if (!users || users.length === 0) {
        list.innerHTML = '<p style="color:var(--muted);font-size:.85rem">لا يوجد مستخدمون متواجدون حالياً.</p>';
        return;
      }
      
      list.innerHTML = users.map(u => {
        const avatarHtml = u.avatar 
          ? '<img src="' + u.avatar + '" alt="" style="width:28px;height:28px;border-radius:50%;object-fit:cover">' 
          : '<span class="avatar placeholder" style="width:28px;height:28px;font-size:.7rem">' + (u.name ? u.name.charAt(0) : 'U') + '</span>';
        
        return '<div style="display:flex;align-items:center;gap:.6rem;background:var(--surface);padding:.4rem .8rem;border-radius:2rem;box-shadow:var(--sh-xs);border:1px solid rgba(12,26,43,.04)">' +
                 avatarHtml +
                 '<div>' +
                   '<div style="font-weight:700;font-size:.8rem">' + (u.name || 'بدون اسم') + '</div>' +
                   '<div style="font-size:.65rem;color:var(--muted)">' + (u.role === 'admin' ? 'مدير' : 'مستخدم') + '</div>' +
                 '</div>' +
               '</div>';
      }).join('');
    });
  <\/script>
  `)},ya="/static/img/logo.png",td=(t,e)=>`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t} · مؤسسة الدكتور عمر هشام الخيرية</title>
  <link rel="icon" type="image/png" href="${ya}">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body>
  <div class="auth">
    <div class="auth-side">
      <div class="hero-bg-grid"></div>
      <div class="hero-glow g3"></div>
      <div class="auth-side-inner">
        <a href="/" class="brand" style="margin-bottom:2rem">
          <img src="${ya}" style="width:60px;height:60px">
          <span class="brand-txt"><b style="color:#fff;font-size:1.1rem">مؤسسة د. عمر هشام</b><span style="color:var(--gold-400)">الخيرية</span></span>
        </a>
        <h2 class="h-xl" style="color:#fff">العطاء بإيمان<br>والإحسان <span style="color:var(--gold-400)">للجميع</span></h2>
        <p class="lead" style="color:rgba(255,255,255,.8);margin-top:1rem">انضمّ إلى منصّتنا وكن جزءًا من رحلة الأثر الإنساني. تابع تبرّعاتك، وأنشطتك التطوّعية، وأثرك في مكانٍ واحد.</p>
      </div>
    </div>
    <div class="auth-form-wrap">
      <div class="auth-card">${e}</div>
    </div>
  </div>
  <script src="/static/app.js"><\/script>
</body>
</html>`,sd=()=>td("تسجيل الدخول",`
  <h1 class="h-lg" style="margin-bottom:.4rem">أهلاً بك في المؤسسة 👋</h1>
  <p style="color:var(--muted);margin-bottom:2rem">سجّل دخولك لمتابعة أثرك أو تابع كضيف.</p>
  
  <div id="authError" style="display:none;background:rgba(231,76,60,.12);color:#c0392b;padding:.8rem 1.2rem;border-radius:.6rem;margin-bottom:1.2rem;font-weight:600;font-size:.9rem;text-align:center"></div>

  <div style="display:flex;flex-direction:column;gap:1rem">
    <a href="/api/auth/google" class="btn btn-primary btn-block btn-lg magnetic" style="display:flex;align-items:center;justify-content:center;gap:.8rem;background:#fff;color:#333;border:1px solid #ddd">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style="width:24px;height:24px">
      تسجيل الدخول بواسطة Google
    </a>
    
    <div style="display:flex;align-items:center;gap:1rem;margin:1rem 0;color:var(--muted)">
      <span style="flex:1;height:1px;background:var(--ink-100)"></span> 
      أو 
      <span style="flex:1;height:1px;background:var(--ink-100)"></span>
    </div>
    
    <a href="/" class="btn btn-ghost btn-block btn-lg">
      <i class="fas fa-home"></i> العودة للرئيسية
    </a>
  </div>

  <script>
    (function(){
      // 1. Check for OAuth hash fragment (Implicit Flow)
      var hash = window.location.hash.substring(1);
      var params = new URLSearchParams(hash);
      var accessToken = params.get('access_token');
      var refreshToken = params.get('refresh_token');

      if (accessToken && refreshToken) {
        // Set cookies valid for 7 days
        document.cookie = "sb-access-token=" + accessToken + "; path=/; max-age=604800";
        document.cookie = "sb-refresh-token=" + refreshToken + "; path=/; max-age=604800";
        // Clean URL and redirect to dashboard
        window.location.hash = '';
        window.location.href = '/dashboard';
        return; // Stop execution
      }

      // 2. Check for errors
      var p = new URLSearchParams(window.location.search);
      var e = p.get('error');
      if(e) {
        var box = document.getElementById('authError');
        var msgs = {
          'unauthorized': '⚠️ يرجى تسجيل الدخول أولاً للوصول إلى لوحة التحكم.',
          'not_admin': '🚫 ليس لديك صلاحية الوصول إلى لوحة التحكم. تواصل مع المدير.',
          'cancelled': '↩️ تم إلغاء عملية تسجيل الدخول.',
          'oauth_failed': '❌ حدث خطأ أثناء الاتصال بـ Google. حاول مرة أخرى.'
        };
        box.textContent = msgs[e] || 'حدث خطأ غير متوقع.';
        box.style.display = 'block';
        history.replaceState(null, '', '/login');
      }
    })();
  <\/script>
`),rd=(t,e,s)=>{const r=e.reduce((a,i)=>a+Number(i.amount),0);return`
  ${W("حسابي الشخصي","مرحباً بك في مساحتك الخاصة لمتابعة أثرك الإنساني.","حسابي")}

  <section class="section" style="padding-top:2rem; background:var(--bg-muted)">
    <div class="wrap">
      <div style="display:grid;grid-template-columns:300px 1fr;gap:2rem;align-items:start">
        
        <!-- Sidebar / User Card -->
        <div class="card" style="position:sticky;top:6rem;text-align:center;padding:2.5rem 1.5rem">
          <div style="width:120px;height:120px;margin:0 auto 1.5rem;border-radius:50%;overflow:hidden;border:4px solid var(--brand-gold);box-shadow:0 10px 30px rgba(212,175,55,0.2)">
            <img src="${t.avatar||"https://ui-avatars.com/api/?name="+encodeURIComponent(t.name)}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover">
          </div>
          <h2 class="h-md" style="margin-bottom:.5rem">${t.name}</h2>
          <p style="color:var(--muted);margin-bottom:1.5rem;word-break:break-all">${t.email}</p>
          
          <div style="display:flex;flex-direction:column;gap:1rem">
            ${t.role==="admin"?'<a href="/dashboard" class="btn btn-gold btn-block"><i class="fas fa-gauge-high"></i> لوحة التحكم</a>':""}
            <a href="/api/auth/logout" class="btn btn-outline-light btn-block"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
          </div>
        </div>

        <!-- Main Content -->
        <div style="display:flex;flex-direction:column;gap:2rem">
          
          <!-- Quick Stats -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1.5rem">
            <div class="card" style="padding:1.5rem;display:flex;align-items:center;gap:1.5rem">
              <div style="width:60px;height:60px;border-radius:1rem;background:rgba(212,175,55,0.1);color:var(--brand-gold);display:grid;place-items:center;font-size:1.8rem">
                <i class="fas fa-hand-holding-heart"></i>
              </div>
              <div>
                <div style="font-size:1.8rem;font-weight:800;color:var(--ink-400)">${r}</div>
                <div style="color:var(--muted);font-size:.9rem">إجمالي التبرعات (ج.م)</div>
              </div>
            </div>
            
            <div class="card" style="padding:1.5rem;display:flex;align-items:center;gap:1.5rem">
              <div style="width:60px;height:60px;border-radius:1rem;background:rgba(46,204,113,0.1);color:#2ecc71;display:grid;place-items:center;font-size:1.8rem">
                <i class="fas fa-hands-helping"></i>
              </div>
              <div>
                <div style="font-size:1.5rem;font-weight:800;color:var(--ink-400)">${s?"نشط":"غير مسجل"}</div>
                <div style="color:var(--muted);font-size:.9rem">حالة التطوع</div>
              </div>
            </div>
          </div>

          <!-- Donation History -->
          <div class="card">
            <h3 class="h-sm" style="margin-bottom:1.5rem;display:flex;align-items:center;gap:.8rem">
              <i class="fas fa-history" style="color:var(--brand-gold)"></i> سجل التبرعات
            </h3>
            
            ${e.length===0?`
              <div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
                <i class="fas fa-box-open" style="font-size:3rem;opacity:0.2;margin-bottom:1rem"></i>
                <p>لم تقم بأي تبرعات بعد. عطاؤك يصنع فرقاً كبيراً!</p>
                <a href="/donate" class="btn btn-primary" style="margin-top:1rem">تبرع الآن</a>
              </div>
            `:`
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>التاريخ</th>
                      <th>نوع التبرع</th>
                      <th>وسيلة الدفع</th>
                      <th>المبلغ</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${e.map(a=>`
                      <tr>
                        <td>${new Date(a.created_at).toLocaleDateString("ar-EG")}</td>
                        <td><span class="chip chip-gold">${a.donation_type==="monthly"?"شهري":"مرة واحدة"}</span></td>
                        <td>${a.payment_method==="card"?"بطاقة ائتمانية":a.payment_method==="instapay"?"إنستاباي":"فودافون كاش"}</td>
                        <td style="font-weight:700">${a.amount} ج.م</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            `}
          </div>

          <!-- Volunteer Section -->
          ${s?`
          <div class="card" style="border-right: 4px solid #2ecc71">
            <h3 class="h-sm" style="margin-bottom:1rem;display:flex;align-items:center;gap:.8rem">
              <i class="fas fa-user-astronaut" style="color:#2ecc71"></i> بيانات التطوع
            </h3>
            <p><strong>الدور المفضل:</strong> ${s.preferred_role}</p>
            <p style="margin-top:.5rem"><strong>المهارات:</strong> ${s.skills}</p>
            <p style="margin-top:.5rem"><strong>تاريخ الانضمام:</strong> ${new Date(s.created_at).toLocaleDateString("ar-EG")}</p>
          </div>
          `:`
          <div class="card" style="background: linear-gradient(135deg, rgba(212,175,55,0.05), transparent); border: 1px dashed var(--brand-gold)">
            <h3 class="h-sm" style="margin-bottom:.5rem">انضم لفريق المتطوعين</h3>
            <p style="color:var(--muted);margin-bottom:1rem">هل ترغب في المساهمة بوقتك ومهاراتك في أعمالنا الخيرية؟</p>
            <a href="/volunteers" class="btn btn-outline-gold"><i class="fas fa-arrow-left"></i> سجل كمتطوع</a>
          </div>
          `}
          
          <!-- Profile Update Form -->
          <div class="card">
            <h3 class="h-sm" style="margin-bottom:1.5rem;display:flex;align-items:center;gap:.8rem">
              <i class="fas fa-user-edit" style="color:var(--brand-gold)"></i> تحديث البيانات
            </h3>
            <form action="/api/profile/update" method="POST">
              <div class="grid cols-2" style="gap:1rem">
                <div class="field">
                  <label>الاسم الكامل</label>
                  <input type="text" name="full_name" value="${t.name||""}" required>
                </div>
                <div class="field">
                  <label>رقم الهاتف</label>
                  <input type="tel" name="phone" value="${t.phone||""}" dir="ltr">
                </div>
              </div>
              <div style="margin-top:1rem">
                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> حفظ التعديلات</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  `},A=new Q;A.route("/api",V);A.use("*",async(t,e)=>{var r,a;const s=Te(t,"sb-access-token");if(s)try{const i=JSON.parse(atob(s.split(".")[1]));let n="user";try{const o=I(t),{data:l}=await o.from("profiles").select("role").eq("id",i.sub).single();l!=null&&l.role&&(n=l.role)}catch{}t.set("user",{id:i.sub,email:i.email,name:((r=i.user_metadata)==null?void 0:r.full_name)||i.email,avatar:(a=i.user_metadata)==null?void 0:a.avatar_url,role:n})}catch{}await e()});A.get("/api/config",t=>{const e=Er(t);return t.json({supabaseUrl:e.SUPABASE_URL,supabaseKey:e.SUPABASE_KEY,user:t.get("user")||null})});A.get("/",async t=>{const e=I(t),[{data:s},{data:r},{data:a}]=await Promise.all([e.from("campaigns").select("*").eq("is_published",!0).order("created_at",{ascending:!1}).limit(3),e.from("news").select("*").eq("is_published",!0).order("publish_date",{ascending:!1}).limit(3),e.from("stories").select("*").eq("is_published",!0).order("created_at",{ascending:!1}).limit(3)]);return t.html(H({user:t.get("user"),title:"الرئيسية",active:"home",desc:"مؤسسة الدكتور عمر هشام الخيرية — نزرع الأمل ونصنع حياةً كريمة عبر برامج الإغاثة والصحة والتعليم."},kc({campaigns:s,news:r,stories:a})))});A.get("/about",t=>t.html(H({user:t.get("user"),title:"من نحن",active:"about"},Sc())));A.get("/campaigns",async t=>{const e=I(t),{data:s}=await e.from("campaigns").select("*").eq("is_published",!0).order("created_at",{ascending:!1});return t.html(H({user:t.get("user"),title:"الحملات",active:"work"},Ec(s||[])))});A.get("/campaigns/:id",async t=>{const e=I(t),{data:s,error:r}=await e.from("campaigns").select("*").eq("id",t.req.param("id")).eq("is_published",!0).single();return r||!s?t.notFound():t.html(H({user:t.get("user"),title:s.title,active:"work",desc:s.description||"تفاصيل حملة من حملات مؤسسة الدكتور عمر هشام الخيرية",image:s.image_url},Uc(s)))});A.get("/achievements",t=>t.html(H({user:t.get("user"),title:"الإنجازات",active:"work"},xc())));A.get("/success-stories",async t=>{const e=I(t),{data:s}=await e.from("stories").select("*").eq("is_published",!0).order("created_at",{ascending:!1});return t.html(H({user:t.get("user"),title:"قصص النجاح",active:"work"},Ic(s||[])))});A.get("/events",async t=>{const e=I(t),{data:s}=await e.from("events").select("*").eq("is_published",!0).order("event_date",{ascending:!0});return t.html(H({user:t.get("user"),title:"الفعاليات",active:"work"},jc(s||[])))});A.get("/events/:id",async t=>{const e=I(t),{data:s,error:r}=await e.from("events").select("*").eq("id",t.req.param("id")).eq("is_published",!0).single();return r||!s?t.notFound():t.html(H({user:t.get("user"),title:s.title,active:"work",desc:s.description||"تفاصيل فعالية من فعاليات مؤسسة الدكتور عمر هشام الخيرية",image:s.image_url},Dc(s)))});A.get("/gallery",t=>t.html(H({user:t.get("user"),title:"معرض الصور",active:"work"},Ac())));A.get("/donate",t=>t.html(H({user:t.get("user"),title:"تبرّع الآن",active:"join"},$c())));A.get("/volunteers",t=>t.html(H({user:t.get("user"),title:"التطوّع",active:"join"},Tc(t.req.query("success")==="1",t.req.query("error")))));A.get("/careers",async t=>{const e=I(t),{data:s}=await e.from("jobs").select("*").eq("is_active",!0).eq("is_published",!0).order("created_at",{ascending:!1});return t.html(H({user:t.get("user"),title:"الوظائف",active:"join"},Lc(s||[],t.req.query("success")==="1",t.req.query("error"))))});A.get("/news",async t=>{const e=I(t),{data:s}=await e.from("news").select("*").eq("is_published",!0).order("publish_date",{ascending:!1});return t.html(H({user:t.get("user"),title:"المركز الإعلامي",active:"news"},Oc(s||[])))});A.get("/news/:id",async t=>{const e=I(t),{data:s,error:r}=await e.from("news").select("*").eq("id",t.req.param("id")).eq("is_published",!0).single();return r||!s?t.notFound():t.html(H({user:t.get("user"),title:s.title,active:"news",desc:s.excerpt||s.content||"خبر من أخبار مؤسسة الدكتور عمر هشام الخيرية",image:s.image_url},Nc(s)))});A.get("/transparency",t=>t.html(H({user:t.get("user"),title:"الشفافية المالية",active:"more"},qc())));A.get("/profile",async t=>{const e=Te(t,"sb-access-token");if(!e)return t.redirect("/login");const s=I(t),{data:{user:r}}=await s.auth.getUser(e);if(!r)return t.redirect("/login");const{data:a}=await s.from("profiles").select("*").eq("id",r.id).single(),[{data:i},{data:n}]=await Promise.all([s.from("donations").select("*").eq("profile_id",r.id).order("created_at",{ascending:!1}),s.from("volunteers").select("*").eq("profile_id",r.id).limit(1)]),o={...a,name:a==null?void 0:a.full_name,avatar:a==null?void 0:a.avatar_url,email:a==null?void 0:a.email};return t.html(H({user:o,title:"حسابي الشخصي"},rd(o,i||[],n==null?void 0:n[0])))});A.get("/faq",t=>t.html(H({user:t.get("user"),title:"الأسئلة الشائعة",active:"more"},Pc())));A.get("/contact",t=>t.html(H({user:t.get("user"),title:"تواصل معنا",active:"more"},Cc(t.req.query("success")==="1",t.req.query("error")))));const fi=async(t,e)=>{const s=I(t),r=Te(t,"sb-access-token");if(!r)return t.redirect("/login?error=unauthorized");const{data:{user:a},error:i}=await s.auth.getUser(r);if(i||!a)return t.redirect("/login?error=unauthorized");const{data:n}=await s.from("profiles").select("role").eq("id",a.id).single();if((n==null?void 0:n.role)!=="admin")return t.redirect("/");await e()};A.use("/dashboard",fi);A.use("/dashboard/*",fi);A.get("/dashboard",async t=>{const e=R(t),[{count:s},{count:r},{count:a},{count:i},{count:n},{count:o},{count:l},{count:c},{count:d},{data:h},{data:u}]=await Promise.all([e.from("donations").select("*",{count:"exact",head:!0}),e.from("campaigns").select("*",{count:"exact",head:!0}),e.from("volunteers").select("*",{count:"exact",head:!0}),e.from("contacts").select("*",{count:"exact",head:!0}),e.from("contacts").select("*",{count:"exact",head:!0}).eq("status","unread"),e.from("volunteers").select("*",{count:"exact",head:!0}).eq("status","pending"),e.from("newsletter_subscribers").select("*",{count:"exact",head:!0}),e.from("news").select("*",{count:"exact",head:!0}),e.from("events").select("*",{count:"exact",head:!0}),e.from("donations").select("*").order("created_at",{ascending:!1}).limit(7),e.from("donations").select("amount, payment_method, created_at")]),f=(u||[]).reduce((v,$)=>v+Number($.amount||0),0),p=new Array(12).fill(0),_=new Date().getFullYear();(u||[]).forEach(v=>{const $=new Date(v.created_at);$.getFullYear()===_&&(p[$.getMonth()]+=Number(v.amount||0))});const y={};(u||[]).forEach(v=>{const $=v.payment_method||"أخرى";y[$]=(y[$]||0)+Number(v.amount||0)});const b={total_donations:f,total_campaigns:r||0,total_donors:s||0,total_volunteers:a||0,unread_contacts:n||0,pending_volunteers:o||0,total_subscribers:l||0,total_events:d||0,monthly_chart:p,method_chart:y};return t.html(Fc(b,h||[]))});A.get("/dashboard/campaigns",async t=>{const e=R(t),{data:s}=await e.from("campaigns").select("*").order("created_at",{ascending:!1});return t.html(Wc(s||[]))});A.get("/dashboard/donations",async t=>{const e=R(t),{data:s}=await e.from("donations").select("*").order("created_at",{ascending:!1});return t.html(Kc(s||[]))});A.get("/dashboard/volunteers",async t=>{const e=R(t),{data:s}=await e.from("volunteers").select("*").order("created_at",{ascending:!1});return t.html(Gc(s||[]))});A.get("/dashboard/contacts",async t=>{const e=R(t),{data:s}=await e.from("contacts").select("*").order("created_at",{ascending:!1});return t.html(Vc(s||[]))});A.get("/dashboard/news",async t=>{const e=R(t),{data:s}=await e.from("news").select("*").order("created_at",{ascending:!1});return t.html(Jc(s||[]))});A.get("/dashboard/events",async t=>{const e=R(t),{data:s}=await e.from("events").select("*").order("created_at",{ascending:!1});return t.html(Yc(s||[]))});A.get("/dashboard/stories",async t=>{const e=R(t),{data:s}=await e.from("stories").select("*").order("created_at",{ascending:!1});return t.html(Xc(s||[]))});A.get("/dashboard/jobs",async t=>{const e=R(t),[{data:s},{data:r}]=await Promise.all([e.from("jobs").select("*").order("created_at",{ascending:!1}),e.from("job_applications").select("*").order("created_at",{ascending:!1})]);return t.html(Qc(s||[],r||[]))});A.get("/dashboard/newsletter",async t=>{const e=R(t),{data:s}=await e.from("newsletter_subscribers").select("*").order("created_at",{ascending:!1});return t.html(Zc(s||[]))});A.get("/dashboard/users",async t=>{const e=R(t),{data:s}=await e.from("profiles").select("*").order("created_at",{ascending:!1});return t.html(ed(s||[]))});A.post("/api/users/:id/role",async t=>{const e=I(t),s=Te(t,"sb-access-token");if(!s)return t.redirect("/login?error=unauthorized");const{data:{user:r}}=await e.auth.getUser(s);if(!r)return t.redirect("/login?error=unauthorized");const{data:a}=await e.from("profiles").select("role").eq("id",r.id).single();if((a==null?void 0:a.role)!=="admin")return t.redirect("/login?error=not_admin");const i=t.req.param("id"),o=(await t.req.parseBody()).role;return["admin","user"].includes(o)?(await e.from("profiles").update({role:o}).eq("id",i),t.redirect("/dashboard/users?success=1")):t.redirect("/dashboard/users?error=invalid_role")});A.get("/login",t=>t.html(sd()));A.notFound(t=>t.html(H({user:t.get("user"),title:"الصفحة غير موجودة"},`
<section class="page-hero" style="min-height:70vh;display:grid;place-items:center">
  <div class="hero-bg-grid"></div><div class="hero-glow g1"></div><div class="hero-glow g3"></div>
  <div class="wrap center" style="position:relative;z-index:3">
    <div style="font-size:clamp(5rem,18vw,11rem);font-weight:900;line-height:1;background:var(--grad-gold);-webkit-background-clip:text;background-clip:text;color:transparent">٤٠٤</div>
    <h1 class="h-xl" style="color:#fff;margin-top:1rem">الصفحة غير موجودة</h1>
    <p class="lead" style="color:rgba(255,255,255,.8);margin:1rem auto 2rem;max-width:480px">يبدو أن الصفحة التي تبحث عنها قد انتقلت أو لم تعد متوفرة.</p>
    <a href="/" class="btn btn-gold btn-lg magnetic"><i class="fas fa-house"></i> العودة للرئيسية</a>
  </div>
</section>`)));A.get("/sitemap.xml",t=>(t.header("Content-Type","application/xml"),t.body(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url><loc>https://omarhesham.org/</loc><priority>1.0</priority></url>
   <url><loc>https://omarhesham.org/about</loc><priority>0.8</priority></url>
   <url><loc>https://omarhesham.org/campaigns</loc><priority>0.9</priority></url>
   <url><loc>https://omarhesham.org/achievements</loc><priority>0.7</priority></url>
   <url><loc>https://omarhesham.org/success-stories</loc><priority>0.8</priority></url>
   <url><loc>https://omarhesham.org/events</loc><priority>0.8</priority></url>
   <url><loc>https://omarhesham.org/gallery</loc><priority>0.6</priority></url>
   <url><loc>https://omarhesham.org/donate</loc><priority>0.9</priority></url>
   <url><loc>https://omarhesham.org/volunteers</loc><priority>0.8</priority></url>
   <url><loc>https://omarhesham.org/careers</loc><priority>0.7</priority></url>
   <url><loc>https://omarhesham.org/news</loc><priority>0.8</priority></url>
   <url><loc>https://omarhesham.org/transparency</loc><priority>0.7</priority></url>
   <url><loc>https://omarhesham.org/faq</loc><priority>0.5</priority></url>
   <url><loc>https://omarhesham.org/contact</loc><priority>0.7</priority></url>
</urlset>`)));var ze=class extends Error{constructor(t,e){super(t,e),this.name="RequestError"}},ad=t=>t instanceof ze?t:new ze(t.message,{cause:t}),id=global.Request,Yt=class extends id{constructor(e,s){var r;typeof e=="object"&&wt in e&&(e=e[wt]()),typeof((r=s==null?void 0:s.body)==null?void 0:r.getReader)<"u"&&(s.duplex??(s.duplex="half")),super(e,s)}},nd=t=>{const e=[],s=t.rawHeaders;for(let r=0;r<s.length;r+=2){const{[r]:a,[r+1]:i}=s;a.charCodeAt(0)!==58&&e.push([a,i])}return new Headers(e)},pi=Symbol("wrapBodyStream"),od=(t,e,s,r,a)=>{const i={method:t,headers:s,signal:a.signal};if(t==="TRACE"){i.method="GET";const n=new Yt(e,i);return Object.defineProperty(n,"method",{get(){return"TRACE"}}),n}if(!(t==="GET"||t==="HEAD"))if("rawBody"in r&&r.rawBody instanceof Buffer)i.body=new ReadableStream({start(n){n.enqueue(r.rawBody),n.close()}});else if(r[pi]){let n;i.body=new ReadableStream({async pull(o){try{n||(n=Cr.toWeb(r).getReader());const{done:l,value:c}=await n.read();l?o.close():o.enqueue(c)}catch(l){o.error(l)}}})}else i.body=Cr.toWeb(r);return new Yt(e,i)},wt=Symbol("getRequestCache"),_s=Symbol("requestCache"),ks=Symbol("incomingKey"),Cs=Symbol("urlKey"),tr=Symbol("headersKey"),Oe=Symbol("abortControllerKey"),ld=Symbol("getAbortController"),os={get method(){return this[ks].method||"GET"},get url(){return this[Cs]},get headers(){return this[tr]||(this[tr]=nd(this[ks]))},[ld](){return this[wt](),this[Oe]},[wt](){return this[Oe]||(this[Oe]=new AbortController),this[_s]||(this[_s]=od(this.method,this[Cs],this.headers,this[ks],this[Oe]))}};["body","bodyUsed","cache","credentials","destination","integrity","mode","redirect","referrer","referrerPolicy","signal","keepalive"].forEach(t=>{Object.defineProperty(os,t,{get(){return this[wt]()[t]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(t=>{Object.defineProperty(os,t,{value:function(){return this[wt]()[t]()}})});Object.defineProperty(os,Symbol.for("nodejs.util.inspect.custom"),{value:function(t,e,s){const r={method:this.method,url:this.url,headers:this.headers,nativeRequest:this[_s]};return`Request (lightweight) ${s(r,{...e,depth:t==null?null:t-1})}`}});Object.setPrototypeOf(os,Yt.prototype);var cd=(t,e)=>{const s=Object.create(os);s[ks]=t;const r=t.url||"";if(r[0]!=="/"&&(r.startsWith("http://")||r.startsWith("https://"))){if(t instanceof Lt)throw new ze("Absolute URL for :path is not allowed in HTTP/2");try{const o=new URL(r);s[Cs]=o.href}catch(o){throw new ze("Invalid absolute URL",{cause:o})}return s}const a=(t instanceof Lt?t.authority:t.headers.host)||e;if(!a)throw new ze("Missing host header");let i;if(t instanceof Lt){if(i=t.scheme,!(i==="http"||i==="https"))throw new ze("Unsupported scheme")}else i=t.socket&&t.socket.encrypted?"https":"http";const n=new URL(`${i}://${a}${r}`);if(n.hostname.length!==a.length&&n.hostname!==a.replace(/:\d+$/,""))throw new ze("Invalid host header");return s[Cs]=n.href,s},qt=Symbol("responseCache"),dt=Symbol("getResponseCache"),Fe=Symbol("cache"),Rr=global.Response,rs,xe,yt,$t=(yt=class{constructor(e,s){T(this,rs);T(this,xe);let r;if(S(this,rs,e),s instanceof yt){const a=s[qt];if(a){S(this,xe,a),this[dt]();return}else S(this,xe,g(s,xe)),r=new Headers(g(s,xe).headers)}else S(this,xe,s);(typeof e=="string"||typeof(e==null?void 0:e.getReader)<"u"||e instanceof Blob||e instanceof Uint8Array)&&(this[Fe]=[(s==null?void 0:s.status)||200,e,r||(s==null?void 0:s.headers)])}[dt](){return delete this[Fe],this[qt]||(this[qt]=new Rr(g(this,rs),g(this,xe)))}get headers(){const e=this[Fe];return e?(e[2]instanceof Headers||(e[2]=new Headers(e[2]||{"content-type":"text/plain; charset=UTF-8"})),e[2]):this[dt]().headers}get status(){var e;return((e=this[Fe])==null?void 0:e[0])??this[dt]().status}get ok(){const e=this.status;return e>=200&&e<300}},rs=new WeakMap,xe=new WeakMap,yt);["body","bodyUsed","redirected","statusText","trailers","type","url"].forEach(t=>{Object.defineProperty($t.prototype,t,{get(){return this[dt]()[t]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(t=>{Object.defineProperty($t.prototype,t,{value:function(){return this[dt]()[t]()}})});Object.defineProperty($t.prototype,Symbol.for("nodejs.util.inspect.custom"),{value:function(t,e,s){const r={status:this.status,headers:this.headers,ok:this.ok,nativeResponse:this[qt]};return`Response (lightweight) ${s(r,{...e,depth:t==null?null:t-1})}`}});Object.setPrototypeOf($t,Rr);Object.setPrototypeOf($t.prototype,Rr.prototype);async function dd(t){return Promise.race([t,Promise.resolve().then(()=>Promise.resolve(void 0))])}function gi(t,e,s){const r=o=>{t.cancel(o).catch(()=>{})};return e.on("close",r),e.on("error",r),(s??t.read()).then(n,a),t.closed.finally(()=>{e.off("close",r),e.off("error",r)});function a(o){o&&e.destroy(o)}function i(){t.read().then(n,a)}function n({done:o,value:l}){try{if(o)e.end();else if(!e.write(l))e.once("drain",i);else return t.read().then(n,a)}catch(c){a(c)}}}function hd(t,e){if(t.locked)throw new TypeError("ReadableStream is locked.");return e.destroyed?void 0:gi(t.getReader(),e)}var mr=t=>{const e={};t instanceof Headers||(t=new Headers(t??void 0));const s=[];for(const[r,a]of t)r==="set-cookie"?s.push(a):e[r]=a;return s.length>0&&(e["set-cookie"]=s),e["content-type"]??(e["content-type"]="text/plain; charset=UTF-8"),e},ud="x-hono-already-sent";typeof global.crypto>"u"&&(global.crypto=Si);var Ar=Symbol("outgoingEnded"),wa=Symbol("incomingDraining"),fd=500,pd=64*1024*1024,sr=t=>{var o,l,c;const e=t;if(t.destroyed||e[wa])return;if(e[wa]=!0,t instanceof Lt){try{(l=(o=t.stream)==null?void 0:o.close)==null||l.call(o,ki.NGHTTP2_NO_ERROR)}catch{}return}let s=0;const r=()=>{clearTimeout(i),t.off("data",n),t.off("end",r),t.off("error",r)},a=()=>{r();const d=t.socket;d&&!d.destroyed&&d.destroySoon()},i=setTimeout(a,fd);(c=i.unref)==null||c.call(i);const n=d=>{s+=d.length,s>pd&&a()};t.on("data",n),t.on("end",r),t.on("error",r),t.resume()},gd=()=>new Response(null,{status:400}),mi=t=>new Response(null,{status:t instanceof Error&&(t.name==="TimeoutError"||t.constructor.name==="TimeoutError")?504:500}),vr=(t,e)=>{const s=t instanceof Error?t:new Error("unknown error",{cause:t});s.code==="ERR_STREAM_PREMATURE_CLOSE"?console.info("The user aborted a request."):(console.error(t),e.headersSent||e.writeHead(500,{"Content-Type":"text/plain"}),e.end(`Error: ${s.message}`),e.destroy(s))},vi=t=>{"flushHeaders"in t&&t.writable&&t.flushHeaders()},bi=async(t,e)=>{var n,o;let[s,r,a]=t[Fe],i=!1;if(!a)a={"content-type":"text/plain; charset=UTF-8"};else if(a instanceof Headers)i=a.has("content-length"),a=mr(a);else if(Array.isArray(a)){const l=new Headers(a);i=l.has("content-length"),a=mr(l)}else for(const l in a)if(l.length===14&&l.toLowerCase()==="content-length"){i=!0;break}i||(typeof r=="string"?a["Content-Length"]=Buffer.byteLength(r):r instanceof Uint8Array?a["Content-Length"]=r.byteLength:r instanceof Blob&&(a["Content-Length"]=r.size)),e.writeHead(s,a),typeof r=="string"||r instanceof Uint8Array?e.end(r):r instanceof Blob?e.end(new Uint8Array(await r.arrayBuffer())):(vi(e),await((n=hd(r,e))==null?void 0:n.catch(l=>vr(l,e)))),(o=e[Ar])==null||o.call(e)},md=t=>typeof t.then=="function",vd=async(t,e,s={})=>{var a;if(md(t))if(s.errorHandler)try{t=await t}catch(i){const n=await s.errorHandler(i);if(!n)return;t=n}else t=await t.catch(mi);if(Fe in t)return bi(t,e);const r=mr(t.headers);if(t.body){const i=t.body.getReader(),n=[];let o=!1,l;if(r["transfer-encoding"]!=="chunked"){let c=2;for(let d=0;d<c;d++){l||(l=i.read());const h=await dd(l).catch(u=>{console.error(u),o=!0});if(!h){if(d===1){await new Promise(u=>setTimeout(u)),c=3;continue}break}if(l=void 0,h.value&&n.push(h.value),h.done){o=!0;break}}o&&!("content-length"in r)&&(r["content-length"]=n.reduce((d,h)=>d+h.length,0))}e.writeHead(t.status,r),n.forEach(c=>{e.write(c)}),o?e.end():(n.length===0&&vi(e),await gi(i,e,l))}else r[ud]||(e.writeHead(t.status,r),e.end());(a=e[Ar])==null||a.call(e)},bd=(t,e={})=>{const s=e.autoCleanupIncoming??!0;return e.overrideGlobalObjects!==!1&&global.Request!==Yt&&(Object.defineProperty(global,"Request",{value:Yt}),Object.defineProperty(global,"Response",{value:$t})),async(r,a)=>{let i,n;try{n=cd(r,e.hostname);let o=!s||r.method==="GET"||r.method==="HEAD";if(o||(r[pi]=!0,r.on("end",()=>{o=!0}),r instanceof Lt&&(a[Ar]=()=>{o||setTimeout(()=>{o||setTimeout(()=>{sr(r)})})}),a.on("finish",()=>{o||sr(r)})),a.on("close",()=>{n[Oe]&&(r.errored?n[Oe].abort(r.errored.toString()):a.writableFinished||n[Oe].abort("Client connection prematurely closed.")),o||setTimeout(()=>{o||setTimeout(()=>{sr(r)})})}),i=t(n,{incoming:r,outgoing:a}),Fe in i)return bi(i,a)}catch(o){if(i)return vr(o,a);if(e.errorHandler){if(i=await e.errorHandler(n?o:ad(o)),!i)return}else n?i=mi(o):i=gd()}try{return await vd(i,a,e)}catch(o){return vr(o,a)}}},yd=t=>bd(t.fetch);const br=new Q,wd=Object.assign({"/src/index.tsx":A});let yi=!1;for(const[,t]of Object.entries(wd))t&&(br.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),br.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),yi=!0);if(!yi)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const $d=yd(br);export{$d as default};
