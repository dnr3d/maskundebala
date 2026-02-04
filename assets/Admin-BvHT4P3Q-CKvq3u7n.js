import{D as Et,F as Oe,A as se,x as t,d as tt,u as ve,n as De,k as U,a as Bt,M as Ne,$ as Lt,X as Ot,p as rt,z as J,v as qt}from"./index-C7dBE-HK.js";const It=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pt=J("arrow-down",It),Ut=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Rt=J("calendar",Ut),Ht=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$t=J("external-link",Ht),Wt=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Gt=J("layout-dashboard",Wt),Qt=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Xt=J("log-out",Qt),Jt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Te=J("mail",Jt),Zt=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Kt=J("pencil",Zt),Yt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],er=J("phone",Yt),tr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],at=J("plus",tr),rr=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ar=J("save",rr),sr=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],je=J("trash-2",sr),ir=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],lr=J("type",ir),or=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],nr=J("video",or);var be=e=>e.type==="checkbox",ne=e=>e instanceof Date,W=e=>e==null;const gt=e=>typeof e=="object";var L=e=>!W(e)&&!Array.isArray(e)&&gt(e)&&!ne(e),dr=e=>L(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ur=(e,s)=>e.has(cr(s)),pr=e=>{const s=e.constructor&&e.constructor.prototype;return L(s)&&s.hasOwnProperty("isPrototypeOf")},qe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function q(e){if(e instanceof Date)return new Date(e);const s=typeof FileList<"u"&&e instanceof FileList;if(qe&&(e instanceof Blob||s))return e;const r=Array.isArray(e);if(!r&&!(L(e)&&pr(e)))return e;const i=r?[]:Object.create(Object.getPrototypeOf(e));for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&(i[u]=q(e[u]));return i}var Ve=e=>/^\w*$/.test(e),T=e=>e===void 0,Ie=e=>Array.isArray(e)?e.filter(Boolean):[],Pe=e=>Ie(e.replace(/["|']|\]/g,"").split(/\.|\[/)),g=(e,s,r)=>{if(!s||!L(e))return r;const i=(Ve(s)?[s]:Pe(s)).reduce((u,d)=>W(u)?u:u[d],e);return T(i)||i===e?T(e[s])?r:e[s]:i},re=e=>typeof e=="boolean",ee=e=>typeof e=="function",M=(e,s,r)=>{let i=-1;const u=Ve(s)?[s]:Pe(s),d=u.length,n=d-1;for(;++i<d;){const o=u[i];let F=r;if(i!==n){const N=e[o];F=L(N)||Array.isArray(N)?N:isNaN(+u[i+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=F,e=e[o]}};const st={BLUR:"blur",FOCUS_OUT:"focusout"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ae={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},fr=U.createContext(null);fr.displayName="HookFormControlContext";var mr=(e,s,r,i=!0)=>{const u={defaultValues:s._defaultValues};for(const d in e)Object.defineProperty(u,d,{get:()=>{const n=d;return s._proxyFormState[n]!==te.all&&(s._proxyFormState[n]=!i||te.all),e[n]}});return u};const xr=typeof window<"u"?U.useLayoutEffect:U.useEffect;var X=e=>typeof e=="string",hr=(e,s,r,i,u)=>X(e)?(i&&s.watch.add(e),g(r,e,u)):Array.isArray(e)?e.map(d=>(i&&s.watch.add(d),g(r,d))):(i&&(s.watchAll=!0),r),Ee=e=>W(e)||!gt(e);function le(e,s,r=new WeakSet){if(Ee(e)||Ee(s))return Object.is(e,s);if(ne(e)&&ne(s))return Object.is(e.getTime(),s.getTime());const i=Object.keys(e),u=Object.keys(s);if(i.length!==u.length)return!1;if(r.has(e)||r.has(s))return!0;r.add(e),r.add(s);for(const d of i){const n=e[d];if(!u.includes(d))return!1;if(d!=="ref"){const o=s[d];if(ne(n)&&ne(o)||L(n)&&L(o)||Array.isArray(n)&&Array.isArray(o)?!le(n,o,r):!Object.is(n,o))return!1}}return!0}const gr=U.createContext(null);gr.displayName="HookFormContext";var br=(e,s,r,i,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:u||!0}}:{},he=e=>Array.isArray(e)?e:[e],it=()=>{let e=[];return{get observers(){return e},next:s=>{for(const r of e)r.next&&r.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(r=>r!==s)}}),unsubscribe:()=>{e=[]}}};function bt(e,s){const r={};for(const i in e)if(e.hasOwnProperty(i)){const u=e[i],d=s[i];if(u&&L(u)&&d){const n=bt(u,d);L(n)&&(r[i]=n)}else e[i]&&(r[i]=d)}return r}var H=e=>L(e)&&!Object.keys(e).length,Ue=e=>e.type==="file",ke=e=>{if(!qe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},yt=e=>e.type==="select-multiple",Re=e=>e.type==="radio",yr=e=>Re(e)||be(e),ze=e=>ke(e)&&e.isConnected;function vr(e,s){const r=s.slice(0,-1).length;let i=0;for(;i<r;)e=T(e)?i++:e[s[i++]];return e}function jr(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function B(e,s){const r=Array.isArray(s)?s:Ve(s)?[s]:Pe(s),i=r.length===1?e:vr(e,r),u=r.length-1,d=r[u];return i&&delete i[d],u!==0&&(L(i)&&H(i)||Array.isArray(i)&&jr(i))&&B(e,r.slice(0,-1)),e}var kr=e=>{for(const s in e)if(ee(e[s]))return!0;return!1};function vt(e){return Array.isArray(e)||L(e)&&!kr(e)}function Be(e,s={}){for(const r in e){const i=e[r];vt(i)?(s[r]=Array.isArray(i)?[]:{},Be(i,s[r])):T(i)||(s[r]=!0)}return s}function ue(e,s,r){r||(r=Be(s));for(const i in e){const u=e[i];if(vt(u))T(s)||Ee(r[i])?r[i]=Be(u,Array.isArray(u)?[]:{}):ue(u,W(s)?{}:s[i],r[i]);else{const d=s[i];r[i]=!le(u,d)}}return r}const lt={value:!1,isValid:!1},ot={value:!0,isValid:!0};var jt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:lt}return lt},kt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:i})=>T(e)?e:s?e===""?NaN:e&&+e:r&&X(e)?new Date(e):i?i(e):e;const nt={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,nt):nt;function dt(e){const s=e.ref;return Ue(s)?s.files:Re(s)?wt(e.refs).value:yt(s)?[...s.selectedOptions].map(({value:r})=>r):be(s)?jt(e.refs).value:kt(T(s.value)?e.ref.value:s.value,e)}var wr=(e,s,r,i)=>{const u={};for(const d of e){const n=g(s,d);n&&M(u,d,n._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:i}},we=e=>e instanceof RegExp,xe=e=>T(e)?e:we(e)?e.source:L(e)?we(e.value)?e.value.source:e.value:e,ct=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched});const ut="AsyncFunction";var Nr=e=>!!e&&!!e.validate&&!!(ee(e.validate)&&e.validate.constructor.name===ut||L(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===ut)),Vr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),pt=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ge=(e,s,r,i)=>{for(const u of r||Object.keys(e)){const d=g(e,u);if(d){const{_f:n,...o}=d;if(n){if(n.refs&&n.refs[0]&&s(n.refs[0],u)&&!i||n.ref&&s(n.ref,n.name)&&!i)return!0;if(ge(o,s))break}else if(L(o)&&ge(o,s))break}}};function ft(e,s,r){const i=g(e,r);if(i||Ve(r))return{error:i,name:r};const u=r.split(".");for(;u.length;){const d=u.join("."),n=g(s,d),o=g(e,d);if(n&&!Array.isArray(n)&&r!==d)return{name:r};if(o&&o.type)return{name:d,error:o};if(o&&o.root&&o.root.type)return{name:`${d}.root`,error:o.root};u.pop()}return{name:r}}var Sr=(e,s,r,i)=>{r(e);const{name:u,...d}=e;return H(d)||Object.keys(d).length>=Object.keys(s).length||Object.keys(d).find(n=>s[n]===(!i||te.all))},_r=(e,s,r)=>!e||!s||e===s||he(e).some(i=>i&&(r?i===s:i.startsWith(s)||s.startsWith(i))),Fr=(e,s,r,i,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?i.isOnBlur:u.isOnBlur)?!e:(r?i.isOnChange:u.isOnChange)?e:!0,Ar=(e,s)=>!Ie(g(e,s)).length&&B(e,s),Cr=(e,s,r)=>{const i=he(g(e,r));return M(i,"root",s[r]),M(e,r,i),e};function mt(e,s,r="validate"){if(X(e)||Array.isArray(e)&&e.every(X)||re(e)&&!e)return{type:r,message:X(e)?e:"",ref:s}}var ce=e=>L(e)&&!we(e)?e:{value:e,message:""},xt=async(e,s,r,i,u,d)=>{const{ref:n,refs:o,required:F,maxLength:N,minLength:D,min:V,max:z,pattern:p,validate:j,name:v,valueAsNumber:E,mount:$}=e._f,k=g(r,v);if(!$||s.has(v))return{};const K=o?o[0]:n,b=w=>{u&&K.reportValidity&&(K.setCustomValidity(re(w)?"":w||""),K.reportValidity())},x={},S=Re(n),I=be(n),G=S||I,de=(E||Ue(n))&&T(n.value)&&T(k)||ke(n)&&n.value===""||k===""||Array.isArray(k)&&!k.length,Z=br.bind(null,v,i,x),ye=(w,_,O,P=ae.maxLength,Y=ae.minLength)=>{const Q=w?_:O;x[v]={type:w?P:Y,message:Q,ref:n,...Z(w?P:Y,Q)}};if(d?!Array.isArray(k)||!k.length:F&&(!G&&(de||W(k))||re(k)&&!k||I&&!jt(o).isValid||S&&!wt(o).isValid)){const{value:w,message:_}=X(F)?{value:!!F,message:F}:ce(F);if(w&&(x[v]={type:ae.required,message:_,ref:K,...Z(ae.required,_)},!i))return b(_),x}if(!de&&(!W(V)||!W(z))){let w,_;const O=ce(z),P=ce(V);if(!W(k)&&!isNaN(k)){const Y=n.valueAsNumber||k&&+k;W(O.value)||(w=Y>O.value),W(P.value)||(_=Y<P.value)}else{const Y=n.valueAsDate||new Date(k),Q=me=>new Date(new Date().toDateString()+" "+me),pe=n.type=="time",fe=n.type=="week";X(O.value)&&k&&(w=pe?Q(k)>Q(O.value):fe?k>O.value:Y>new Date(O.value)),X(P.value)&&k&&(_=pe?Q(k)<Q(P.value):fe?k<P.value:Y<new Date(P.value))}if((w||_)&&(ye(!!w,O.message,P.message,ae.max,ae.min),!i))return b(x[v].message),x}if((N||D)&&!de&&(X(k)||d&&Array.isArray(k))){const w=ce(N),_=ce(D),O=!W(w.value)&&k.length>+w.value,P=!W(_.value)&&k.length<+_.value;if((O||P)&&(ye(O,w.message,_.message),!i))return b(x[v].message),x}if(p&&!de&&X(k)){const{value:w,message:_}=ce(p);if(we(w)&&!k.match(w)&&(x[v]={type:ae.pattern,message:_,ref:n,...Z(ae.pattern,_)},!i))return b(_),x}if(j){if(ee(j)){const w=await j(k,r),_=mt(w,K);if(_&&(x[v]={..._,...Z(ae.validate,_.message)},!i))return b(_.message),x}else if(L(j)){let w={};for(const _ in j){if(!H(w)&&!i)break;const O=mt(await j[_](k,r),K,_);O&&(w={...O,...Z(_,O.message)},b(O.message),i&&(x[v]=w))}if(!H(w)&&(x[v]={ref:K,...w},!i))return x}}return b(!0),x};const Dr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function zr(e={}){let s={...Dr,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ee(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},i={},u=L(s.defaultValues)||L(s.values)?q(s.defaultValues||s.values)||{}:{},d=s.shouldUnregister?{}:q(u),n={action:!1,mount:!1,watch:!1,keepIsValid:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},F,N=0;const D={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={...D};let z={...V};const p={array:it(),state:it()},j=s.criteriaMode===te.all,v=a=>l=>{clearTimeout(N),N=setTimeout(a,l)},E=async a=>{if(!n.keepIsValid&&!s.disabled&&(V.isValid||z.isValid||a)){let l;s.resolver?(l=H((await G()).errors),$()):l=await Z(i,!0),l!==r.isValid&&p.state.next({isValid:l})}},$=(a,l)=>{!s.disabled&&(V.isValidating||V.validatingFields||z.isValidating||z.validatingFields)&&((a||Array.from(o.mount)).forEach(c=>{c&&(l?M(r.validatingFields,c,l):B(r.validatingFields,c))}),p.state.next({validatingFields:r.validatingFields,isValidating:!H(r.validatingFields)}))},k=(a,l=[],c,h,m=!0,f=!0)=>{if(h&&c&&!s.disabled){if(n.action=!0,f&&Array.isArray(g(i,a))){const y=c(g(i,a),h.argA,h.argB);m&&M(i,a,y)}if(f&&Array.isArray(g(r.errors,a))){const y=c(g(r.errors,a),h.argA,h.argB);m&&M(r.errors,a,y),Ar(r.errors,a)}if((V.touchedFields||z.touchedFields)&&f&&Array.isArray(g(r.touchedFields,a))){const y=c(g(r.touchedFields,a),h.argA,h.argB);m&&M(r.touchedFields,a,y)}(V.dirtyFields||z.dirtyFields)&&(r.dirtyFields=ue(u,d)),p.state.next({name:a,isDirty:w(a,l),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else M(d,a,l)},K=(a,l)=>{M(r.errors,a,l),p.state.next({errors:r.errors})},b=a=>{r.errors=a,p.state.next({errors:r.errors,isValid:!1})},x=(a,l,c,h)=>{const m=g(i,a);if(m){const f=g(d,a,T(c)?g(u,a):c);T(f)||h&&h.defaultChecked||l?M(d,a,l?f:dt(m._f)):P(a,f),n.mount&&!n.action&&E()}},S=(a,l,c,h,m)=>{let f=!1,y=!1;const A={name:a};if(!s.disabled){if(!c||h){(V.isDirty||z.isDirty)&&(y=r.isDirty,r.isDirty=A.isDirty=w(),f=y!==A.isDirty);const C=le(g(u,a),l);y=!!g(r.dirtyFields,a),C?B(r.dirtyFields,a):M(r.dirtyFields,a,!0),A.dirtyFields=r.dirtyFields,f=f||(V.dirtyFields||z.dirtyFields)&&y!==!C}if(c){const C=g(r.touchedFields,a);C||(M(r.touchedFields,a,c),A.touchedFields=r.touchedFields,f=f||(V.touchedFields||z.touchedFields)&&C!==c)}f&&m&&p.state.next(A)}return f?A:{}},I=(a,l,c,h)=>{const m=g(r.errors,a),f=(V.isValid||z.isValid)&&re(l)&&r.isValid!==l;if(s.delayError&&c?(F=v(()=>K(a,c)),F(s.delayError)):(clearTimeout(N),F=null,c?M(r.errors,a,c):B(r.errors,a)),(c?!le(m,c):m)||!H(h)||f){const y={...h,...f&&re(l)?{isValid:l}:{},errors:r.errors,name:a};r={...r,...y},p.state.next(y)}},G=async a=>($(a,!0),await s.resolver(d,s.context,wr(a||o.mount,i,s.criteriaMode,s.shouldUseNativeValidation))),de=async a=>{const{errors:l}=await G(a);if($(a),a)for(const c of a){const h=g(l,c);h?M(r.errors,c,h):B(r.errors,c)}else r.errors=l;return l},Z=async(a,l,c={valid:!0})=>{for(const h in a){const m=a[h];if(m){const{_f:f,...y}=m;if(f){const A=o.array.has(f.name),C=m._f&&Nr(m._f);C&&V.validatingFields&&$([f.name],!0);const R=await xt(m,o.disabled,d,j,s.shouldUseNativeValidation&&!l,A);if(C&&V.validatingFields&&$([f.name]),R[f.name]&&(c.valid=!1,l||e.shouldUseNativeValidation))break;!l&&(g(R,f.name)?A?Cr(r.errors,R,f.name):M(r.errors,f.name,R[f.name]):B(r.errors,f.name))}!H(y)&&await Z(y,l,c)}}return c.valid},ye=()=>{for(const a of o.unMount){const l=g(i,a);l&&(l._f.refs?l._f.refs.every(c=>!ze(c)):!ze(l._f.ref))&&Se(a)}o.unMount=new Set},w=(a,l)=>!s.disabled&&(a&&l&&M(d,a,l),!le(He(),u)),_=(a,l,c)=>hr(a,o,{...n.mount?d:T(l)?u:X(a)?{[a]:l}:l},c,l),O=a=>Ie(g(n.mount?d:u,a,s.shouldUnregister?g(u,a,[]):[])),P=(a,l,c={})=>{const h=g(i,a);let m=l;if(h){const f=h._f;f&&(!f.disabled&&M(d,a,kt(l,f)),m=ke(f.ref)&&W(l)?"":l,yt(f.ref)?[...f.ref.options].forEach(y=>y.selected=m.includes(y.value)):f.refs?be(f.ref)?f.refs.forEach(y=>{(!y.defaultChecked||!y.disabled)&&(Array.isArray(m)?y.checked=!!m.find(A=>A===y.value):y.checked=m===y.value||!!m)}):f.refs.forEach(y=>y.checked=y.value===m):Ue(f.ref)?f.ref.value="":(f.ref.value=m,f.ref.type||p.state.next({name:a,values:q(d)})))}(c.shouldDirty||c.shouldTouch)&&S(a,m,c.shouldTouch,c.shouldDirty,!0),c.shouldValidate&&me(a)},Y=(a,l,c)=>{for(const h in l){if(!l.hasOwnProperty(h))return;const m=l[h],f=a+"."+h,y=g(i,f);(o.array.has(a)||L(m)||y&&!y._f)&&!ne(m)?Y(f,m,c):P(f,m,c)}},Q=(a,l,c={})=>{const h=g(i,a),m=o.array.has(a),f=q(l);M(d,a,f),m?(p.array.next({name:a,values:q(d)}),(V.isDirty||V.dirtyFields||z.isDirty||z.dirtyFields)&&c.shouldDirty&&p.state.next({name:a,dirtyFields:ue(u,d),isDirty:w(a,f)})):h&&!h._f&&!W(f)?Y(a,f,c):P(a,f,c),pt(a,o)?p.state.next({...r,name:a,values:q(d)}):p.state.next({name:n.mount?a:void 0,values:q(d)})},pe=async a=>{n.mount=!0;const l=a.target;let c=l.name,h=!0;const m=g(i,c),f=C=>{h=Number.isNaN(C)||ne(C)&&isNaN(C.getTime())||le(C,g(d,c,C))},y=ct(s.mode),A=ct(s.reValidateMode);if(m){let C,R;const oe=l.type?dt(m._f):dr(a),ie=a.type===st.BLUR||a.type===st.FOCUS_OUT,zt=!Vr(m._f)&&!s.resolver&&!g(r.errors,c)&&!m._f.deps||Fr(ie,g(r.touchedFields,c),r.isSubmitted,A,y),Ae=pt(c,o,ie);M(d,c,oe),ie?(!l||!l.readOnly)&&(m._f.onBlur&&m._f.onBlur(a),F&&F(0)):m._f.onChange&&m._f.onChange(a);const Ce=S(c,oe,ie),Mt=!H(Ce)||Ae;if(!ie&&p.state.next({name:c,type:a.type,values:q(d)}),zt)return(V.isValid||z.isValid)&&(s.mode==="onBlur"?ie&&E():ie||E()),Mt&&p.state.next({name:c,...Ae?{}:Ce});if(!ie&&Ae&&p.state.next({...r}),s.resolver){const{errors:Ye}=await G([c]);if($([c]),f(oe),h){const Tt=ft(r.errors,i,c),et=ft(Ye,i,Tt.name||c);C=et.error,c=et.name,R=H(Ye)}}else $([c],!0),C=(await xt(m,o.disabled,d,j,s.shouldUseNativeValidation))[c],$([c]),f(oe),h&&(C?R=!1:(V.isValid||z.isValid)&&(R=await Z(i,!0)));h&&(m._f.deps&&(!Array.isArray(m._f.deps)||m._f.deps.length>0)&&me(m._f.deps),I(c,R,C,Ce))}},fe=(a,l)=>{if(g(r.errors,l)&&a.focus)return a.focus(),1},me=async(a,l={})=>{let c,h;const m=he(a);if(s.resolver){const f=await de(T(a)?a:m);c=H(f),h=a?!m.some(y=>g(f,y)):c}else a?(h=(await Promise.all(m.map(async f=>{const y=g(i,f);return await Z(y&&y._f?{[f]:y}:y)}))).every(Boolean),!(!h&&!r.isValid)&&E()):h=c=await Z(i);return p.state.next({...!X(a)||(V.isValid||z.isValid)&&c!==r.isValid?{}:{name:a},...s.resolver||!a?{isValid:c}:{},errors:r.errors}),l.shouldFocus&&!h&&ge(i,fe,a?m:o.mount),h},He=(a,l)=>{let c={...n.mount?d:u};return l&&(c=bt(l.dirtyFields?r.dirtyFields:r.touchedFields,c)),T(a)?c:X(a)?g(c,a):a.map(h=>g(c,h))},$e=(a,l)=>({invalid:!!g((l||r).errors,a),isDirty:!!g((l||r).dirtyFields,a),error:g((l||r).errors,a),isValidating:!!g(r.validatingFields,a),isTouched:!!g((l||r).touchedFields,a)}),Vt=a=>{a&&he(a).forEach(l=>B(r.errors,l)),p.state.next({errors:a?r.errors:{}})},We=(a,l,c)=>{const h=(g(i,a,{_f:{}})._f||{}).ref,m=g(r.errors,a)||{},{ref:f,message:y,type:A,...C}=m;M(r.errors,a,{...C,...l,ref:h}),p.state.next({name:a,errors:r.errors,isValid:!1}),c&&c.shouldFocus&&h&&h.focus&&h.focus()},St=(a,l)=>ee(a)?p.state.subscribe({next:c=>"values"in c&&a(_(void 0,l),c)}):_(a,l,!0),Ge=a=>p.state.subscribe({next:l=>{_r(a.name,l.name,a.exact)&&Sr(l,a.formState||V,Dt,a.reRenderRoot)&&a.callback({values:{...d},...r,...l,defaultValues:u})}}).unsubscribe,_t=a=>(n.mount=!0,z={...z,...a.formState},Ge({...a,formState:{...D,...a.formState}})),Se=(a,l={})=>{for(const c of a?he(a):o.mount)o.mount.delete(c),o.array.delete(c),l.keepValue||(B(i,c),B(d,c)),!l.keepError&&B(r.errors,c),!l.keepDirty&&B(r.dirtyFields,c),!l.keepTouched&&B(r.touchedFields,c),!l.keepIsValidating&&B(r.validatingFields,c),!s.shouldUnregister&&!l.keepDefaultValue&&B(u,c);p.state.next({values:q(d)}),p.state.next({...r,...l.keepDirty?{isDirty:w()}:{}}),!l.keepIsValid&&E()},Qe=({disabled:a,name:l})=>{if(re(a)&&n.mount||a||o.disabled.has(l)){const c=o.disabled.has(l)!==!!a;a?o.disabled.add(l):o.disabled.delete(l),c&&n.mount&&!n.action&&E()}},_e=(a,l={})=>{let c=g(i,a);const h=re(l.disabled)||re(s.disabled);return M(i,a,{...c||{},_f:{...c&&c._f?c._f:{ref:{name:a}},name:a,mount:!0,...l}}),o.mount.add(a),c?Qe({disabled:re(l.disabled)?l.disabled:s.disabled,name:a}):x(a,!0,l.value),{...h?{disabled:l.disabled||s.disabled}:{},...s.progressive?{required:!!l.required,min:xe(l.min),max:xe(l.max),minLength:xe(l.minLength),maxLength:xe(l.maxLength),pattern:xe(l.pattern)}:{},name:a,onChange:pe,onBlur:pe,ref:m=>{if(m){_e(a,l),c=g(i,a);const f=T(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,y=yr(f),A=c._f.refs||[];if(y?A.find(C=>C===f):f===c._f.ref)return;M(i,a,{_f:{...c._f,...y?{refs:[...A.filter(ze),f,...Array.isArray(g(u,a))?[{}]:[]],ref:{type:f.type,name:a}}:{ref:f}}}),x(a,!1,void 0,f)}else c=g(i,a,{}),c._f&&(c._f.mount=!1),(s.shouldUnregister||l.shouldUnregister)&&!(ur(o.array,a)&&n.action)&&o.unMount.add(a)}}},Fe=()=>s.shouldFocusError&&ge(i,fe,o.mount),Ft=a=>{re(a)&&(p.state.next({disabled:a}),ge(i,(l,c)=>{const h=g(i,c);h&&(l.disabled=h._f.disabled||a,Array.isArray(h._f.refs)&&h._f.refs.forEach(m=>{m.disabled=h._f.disabled||a}))},0,!1))},Xe=(a,l)=>async c=>{let h;c&&(c.preventDefault&&c.preventDefault(),c.persist&&c.persist());let m=q(d);if(p.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:y}=await G();$(),r.errors=f,m=q(y)}else await Z(i);if(o.disabled.size)for(const f of o.disabled)B(m,f);if(B(r.errors,"root"),H(r.errors)){p.state.next({errors:{}});try{await a(m,c)}catch(f){h=f}}else l&&await l({...r.errors},c),Fe(),setTimeout(Fe);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:H(r.errors)&&!h,submitCount:r.submitCount+1,errors:r.errors}),h)throw h},At=(a,l={})=>{g(i,a)&&(T(l.defaultValue)?Q(a,q(g(u,a))):(Q(a,l.defaultValue),M(u,a,q(l.defaultValue))),l.keepTouched||B(r.touchedFields,a),l.keepDirty||(B(r.dirtyFields,a),r.isDirty=l.defaultValue?w(a,q(g(u,a))):w()),l.keepError||(B(r.errors,a),V.isValid&&E()),p.state.next({...r}))},Je=(a,l={})=>{const c=a?q(a):u,h=q(c),m=H(a),f=m?u:h;if(l.keepDefaultValues||(u=c),!l.keepValues){if(l.keepDirtyValues){const y=new Set([...o.mount,...Object.keys(ue(u,d))]);for(const A of Array.from(y)){const C=g(r.dirtyFields,A),R=g(d,A),oe=g(f,A);C&&!T(R)?M(f,A,R):!C&&!T(oe)&&Q(A,oe)}}else{if(qe&&T(a))for(const y of o.mount){const A=g(i,y);if(A&&A._f){const C=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(ke(C)){const R=C.closest("form");if(R){R.reset();break}}}}if(l.keepFieldsRef)for(const y of o.mount)Q(y,g(f,y));else i={}}d=s.shouldUnregister?l.keepDefaultValues?q(u):{}:q(f),p.array.next({values:{...f}}),p.state.next({values:{...f}})}o={mount:l.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},n.mount=!V.isValid||!!l.keepIsValid||!!l.keepDirtyValues||!s.shouldUnregister&&!H(f),n.watch=!!s.shouldUnregister,n.keepIsValid=!!l.keepIsValid,n.action=!1,l.keepErrors||(r.errors={}),p.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:m?!1:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!le(a,u)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:m?{}:l.keepDirtyValues?l.keepDefaultValues&&d?ue(u,d):r.dirtyFields:l.keepDefaultValues&&a?ue(u,a):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:u})},Ze=(a,l)=>Je(ee(a)?a(d):a,{...s.resetOptions,...l}),Ct=(a,l={})=>{const c=g(i,a),h=c&&c._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&setTimeout(()=>{m.focus(),l.shouldSelect&&ee(m.select)&&m.select()})}},Dt=a=>{r={...r,...a}},Ke={control:{register:_e,unregister:Se,getFieldState:$e,handleSubmit:Xe,setError:We,_subscribe:Ge,_runSchema:G,_updateIsValidating:$,_focusError:Fe,_getWatch:_,_getDirty:w,_setValid:E,_setFieldArray:k,_setDisabledField:Qe,_setErrors:b,_getFieldArray:O,_reset:Je,_resetDefaultValues:()=>ee(s.defaultValues)&&s.defaultValues().then(a=>{Ze(a,s.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:ye,_disableForm:Ft,_subjects:p,_proxyFormState:V,get _fields(){return i},get _formValues(){return d},get _state(){return n},set _state(a){n=a},get _defaultValues(){return u},get _names(){return o},set _names(a){o=a},get _formState(){return r},get _options(){return s},set _options(a){s={...s,...a}}},subscribe:_t,trigger:me,register:_e,handleSubmit:Xe,watch:St,setValue:Q,getValues:He,reset:Ze,resetField:At,clearErrors:Vt,unregister:Se,setError:We,setFocus:Ct,getFieldState:$e};return{...Ke,formControl:Ke}}function Me(e={}){const s=U.useRef(void 0),r=U.useRef(void 0),[i,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});if(!s.current)if(e.formControl)s.current={...e.formControl,formState:i},e.defaultValues&&!ee(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:n,...o}=zr(e);s.current={...o,formState:i}}const d=s.current.control;return d._options=e,xr(()=>{const n=d._subscribe({formState:d._proxyFormState,callback:()=>u({...d._formState}),reRenderRoot:!0});return u(o=>({...o,isReady:!0})),d._formState.isReady=!0,n},[d]),U.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),U.useEffect(()=>{e.mode&&(d._options.mode=e.mode),e.reValidateMode&&(d._options.reValidateMode=e.reValidateMode)},[d,e.mode,e.reValidateMode]),U.useEffect(()=>{e.errors&&(d._setErrors(e.errors),d._focusError())},[d,e.errors]),U.useEffect(()=>{e.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,e.shouldUnregister]),U.useEffect(()=>{if(d._proxyFormState.isDirty){const n=d._getDirty();n!==i.isDirty&&d._subjects.state.next({isDirty:n})}},[d,i.isDirty]),U.useEffect(()=>{var n;e.values&&!le(e.values,r.current)?(d._reset(e.values,{keepFieldsRef:!0,...d._options.resetOptions}),!((n=d._options.resetOptions)===null||n===void 0)&&n.keepIsValid||d._setValid(),r.current=e.values,u(o=>({...o}))):d._resetDefaultValues()},[d,e.values]),U.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),s.current.formState=U.useMemo(()=>mr(i,d),[d,i]),s.current}function Mr(){const{hero:e,updateHero:s,about:r,updateAbout:i,contact:u,updateContact:d,translations:n,language:o,updateServicePackage:F,updateTranslation:N}=Ne(),D=(b,x,S)=>{N(b,x,S)},{register:V,handleSubmit:z}=Me({defaultValues:e}),{register:p,handleSubmit:j}=Me({defaultValues:r}),{register:v,handleSubmit:E}=Me({defaultValues:u}),$=n[o].services.packages,k=(b,x,S)=>{F(o,b,{[x]:S})},K=(b,x)=>{const S=x.split(`
`).filter(I=>I.trim()!=="");F(o,b,{includes:S})};return t.jsxs("div",{className:"admin-section",children:[t.jsx("h2",{children:"Content Editor"}),t.jsxs("div",{className:"grid-12",children:[t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:z(b=>s(b)),className:"admin-form",children:[t.jsx("h3",{children:"Hero Section"}),t.jsx("label",{children:"Headline Line 1"}),t.jsx("input",{...V("headlineFirst")}),t.jsx("label",{children:"Headline Line 2"}),t.jsx("input",{...V("headlineSecond")}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{...V("subhead")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Hero"})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["About Section (",o,")"]}),t.jsx("label",{children:"Tagline"}),t.jsx("input",{defaultValue:n[o].about.tag,onBlur:b=>{const x={...n[o].about,tag:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Main Title"}),t.jsx("textarea",{defaultValue:n[o].about.title,rows:3,onBlur:b=>{const x={...n[o].about,title:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{defaultValue:n[o].about.desc,rows:5,onBlur:b=>{const x={...n[o].about,desc:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"CV Upload (PDF, Max 2MB)"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx("input",{type:"file",accept:"application/pdf",onChange:b=>{const x=b.target.files[0];if(x){if(x.size>2*1024*1024){alert("File is too large! Max 2MB.");return}const S=new FileReader;S.onloadend=()=>{i({cv:S.result}),alert("CV Uploaded!")},S.readAsDataURL(x)}}}),r.cv&&t.jsx("span",{style:{color:"#4ade80",fontSize:"0.8rem"},children:"✓ CV Uploaded"})]}),t.jsx("h4",{style:{marginTop:"20px",marginBottom:"10px"},children:"Skills Levels"}),t.jsx("div",{className:"skills-editor",children:n[o].about.skills.map((b,x)=>t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"5px"},children:[t.jsx("span",{style:{fontSize:"0.8rem",width:"100px"},children:b.name}),t.jsx("input",{type:"number",defaultValue:b.level,style:{width:"60px"},onBlur:S=>{const I=[...n[o].about.skills];I[x]={...I[x],level:parseInt(S.target.value)};const G={...n[o].about,skills:I};D(o,"about",G)}})]},x))})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:E(b=>d(b)),className:"admin-form",children:[t.jsx("h3",{children:"Contact Info"}),t.jsx("label",{children:"Email"}),t.jsx("input",{...v("email")}),t.jsx("label",{children:"Location"}),t.jsx("input",{...v("location")}),t.jsx("label",{children:"Status"}),t.jsx("input",{...v("status")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Contact"})]})}),t.jsxs("div",{className:"col-12",style:{marginTop:"40px"},children:[t.jsx("h3",{children:"Service Packages (ENG)"}),t.jsx("div",{className:"services-edit-grid",children:$.map((b,x)=>t.jsxs("div",{className:"admin-form service-form",children:[t.jsxs("h4",{children:["Package ",x+1]}),t.jsx("label",{children:"Title"}),t.jsx("input",{value:b.title,onChange:S=>k(x,"title",S.target.value)}),t.jsx("label",{children:"Subtitle (Type)"}),t.jsx("input",{value:b.subtitle,onChange:S=>k(x,"subtitle",S.target.value)}),t.jsx("label",{children:"Target Audience"}),t.jsx("input",{value:b.for,onChange:S=>k(x,"for",S.target.value)}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{value:b.desc,onChange:S=>k(x,"desc",S.target.value),rows:3}),t.jsx("label",{children:"Includes (One per line)"}),t.jsx("textarea",{defaultValue:b.includes.join(`
`),onBlur:S=>K(x,S.target.value),rows:5,placeholder:`Feature 1
Feature 2
Feature 3`}),t.jsx("label",{children:"Value Prop"}),t.jsx("textarea",{value:b.value,onChange:S=>k(x,"value",S.target.value),rows:2})]},b.id))})]}),t.jsxs("div",{className:"col-12",style:{marginTop:"40px"},children:[t.jsxs("h3",{children:["Process Section (",o,")"]}),t.jsxs("div",{className:"admin-form",children:[t.jsx("label",{children:"Section Title"}),t.jsx("input",{defaultValue:n[o].process.title,onBlur:b=>{const x={...n[o].process,title:b.target.value};D(o,"process",x)}}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{defaultValue:n[o].process.sub,onBlur:b=>{const x={...n[o].process,sub:b.target.value};D(o,"process",x)}}),t.jsxs("div",{style:{marginTop:"20px"},children:[t.jsx("h4",{children:"Steps"}),n[o].process.steps.map((b,x)=>t.jsx("div",{style:{marginBottom:"20px",padding:"15px",background:"#f5f5f5",borderRadius:"8px"},children:t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{children:["Step ",b.num," Title"]}),t.jsx("input",{defaultValue:b.title,onBlur:S=>{const I=[...n[o].process.steps];I[x]={...I[x],title:S.target.value};const G={...n[o].process,steps:I};D(o,"process",G)}})]}),t.jsxs("div",{style:{flex:2},children:[t.jsx("label",{children:"Description"}),t.jsx("textarea",{defaultValue:b.desc,rows:2,onBlur:S=>{const I=[...n[o].process.steps];I[x]={...I[x],desc:S.target.value};const G={...n[o].process,steps:I};D(o,"process",G)}})]})]})},x))]})]})]}),t.jsx("div",{className:"col-6",style:{marginTop:"20px"},children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["Pricing Section (",o,")"]}),t.jsx("label",{children:"Title"}),t.jsx("input",{defaultValue:n[o].pricing.title,onBlur:b=>{const x={...n[o].pricing,title:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{defaultValue:n[o].pricing.sub,onBlur:b=>{const x={...n[o].pricing,sub:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Budget Label"}),t.jsx("input",{defaultValue:n[o].pricing.label,onBlur:b=>{const x={...n[o].pricing,label:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Button Text"}),t.jsx("input",{defaultValue:n[o].pricing.btn,onBlur:b=>{const x={...n[o].pricing,btn:b.target.value};D(o,"pricing",x)}})]})}),t.jsx("div",{className:"col-6",style:{marginTop:"20px"},children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["Quiz Section (",o,")"]}),t.jsx("label",{children:"Intro Title"}),t.jsx("input",{defaultValue:n[o].quiz.introTitle,onBlur:b=>{const x={...n[o].quiz,introTitle:b.target.value};D(o,"quiz",x)}}),t.jsx("label",{children:"Intro Description"}),t.jsx("textarea",{defaultValue:n[o].quiz.introDesc,rows:3,onBlur:b=>{const x={...n[o].quiz,introDesc:b.target.value};D(o,"quiz",x)}}),t.jsx("label",{children:"Success Title"}),t.jsx("input",{defaultValue:n[o].quiz.successTitle,onBlur:b=>{const x={...n[o].quiz,successTitle:b.target.value};D(o,"quiz",x)}})]})})]}),t.jsx("style",{jsx:"true",children:`
        .admin-section { padding: 20px; color: #111; }
        .col-4 { grid-column: span 4; }
        .col-6 { grid-column: span 6; }
        .col-12 { grid-column: span 12; }
        
        .services-edit-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }

        .service-form {
            background: #ffffff;
        }

        .admin-form {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            border: 1px solid #e5e5e5;
            box-shadow: 0 2px 5px rgba(0,0,0,0.02);
        }

        label { font-size: 0.8rem; color: #666; margin-top: 5px; }

        input, textarea {
            background: #f9f9f9;
            border: 1px solid #ddd;
            color: #000;
            padding: 8px;
            border-radius: 4px;
            width: 100%;
        }
        
        input:focus, textarea:focus {
            outline: none; border-color: #000;
        }

        .btn-save {
            margin-top: 10px;
            background: #000;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.2s;
        }
        .btn-save:hover { background: #333; }

        @media (max-width: 1000px) {
            .col-4 { grid-column: span 12; margin-bottom: 20px; }
            .services-edit-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Tr(){const{projects:e,deleteProject:s,categories:r,addCategory:i,deleteCategory:u}=Ne(),d=Oe(),[n,o]=se.useState(""),F=()=>{n&&!r.includes(n)&&(i(n),o(""))};return t.jsxs("div",{className:"admin-section",children:[t.jsxs("div",{className:"header-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[t.jsx("h2",{children:"Portfolio Projects"}),t.jsxs("button",{onClick:()=>d("/admin/project/new"),className:"btn-primary",children:[t.jsx(at,{size:16})," Add New Project"]})]}),t.jsxs("div",{className:"grid-12",style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"20px"},children:[t.jsx("div",{className:"col-form",style:{gridColumn:"span 4"},children:t.jsxs("div",{className:"admin-form",children:[t.jsx("h3",{children:"Categories"}),t.jsxs("div",{style:{display:"flex",gap:"5px"},children:[t.jsx("input",{type:"text",placeholder:"New Category",value:n,onChange:N=>o(N.target.value)}),t.jsx("button",{onClick:F,className:"btn-primary",style:{padding:"0 10px"},children:t.jsx(at,{size:16})})]}),t.jsx("ul",{className:"cat-list",children:r&&r.map(N=>t.jsxs("li",{className:"cat-item",children:[t.jsx("span",{children:N}),t.jsx("button",{onClick:()=>u(N),className:"btn-icon delete",children:t.jsx(je,{size:14})})]},N))})]})}),t.jsxs("div",{className:"col-list",style:{gridColumn:"span 8"},children:[t.jsx("h3",{children:"Current Projects"}),t.jsx("ul",{className:"project-list",children:e.map(N=>t.jsxs("li",{className:"project-item",children:[t.jsx("div",{className:"p-img-preview",style:{background:N.img&&(N.img.startsWith("data:")||N.img.startsWith("http"))?`url(${N.img})`:N.img}}),t.jsxs("div",{className:"p-info",children:[t.jsx("strong",{children:N.title}),t.jsx("span",{children:N.category})]}),t.jsxs("div",{className:"p-actions",children:[t.jsx("button",{onClick:()=>d(`/admin/project/${N.id}`),className:"btn-icon edit",children:t.jsx(Kt,{size:16})}),t.jsx("button",{onClick:()=>s(N.id),className:"btn-icon delete",children:t.jsx(je,{size:16})})]})]},N.id))})]})]}),t.jsx("style",{jsx:"true",children:`
        .admin-section { padding: 20px; color: #111; }
        .col-form { grid-column: span 4; }
        .col-list { grid-column: span 12; }
        .admin-form { display: flex; flex-direction: column; gap: 10px; background: #ffffff; padding: 20px; border-radius: 8px; position: sticky; top: 20px; border: 1px solid #e5e5e5; }
        
        input[type="text"], select, textarea { 
            background: #f9f9f9; 
            border: 1px solid #ddd; 
            color: #000; 
            padding: 10px; 
            border-radius: 4px; 
            font-family: inherit;
        }
        
        textarea { resize: vertical; }
        
        .hint { font-size: 0.8rem; color: #666; margin-bottom: 5px; }

        .hidden-input { display: none; }
        .upload-btn { background: #eee; color: #000; padding: 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px dashed #ccc; }
        .preview-box { width: 100%; height: 150px; background: #f9f9f9; border-radius: 4px; overflow: hidden; margin-top: 5px; border: 1px solid #eee; }
        .preview-box img { width: 100%; height: 100%; object-fit: cover; }
        .project-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .project-item { display: flex; align-items: center; background: #ffffff; padding: 15px; border-radius: 4px; gap: 15px; border: 1px solid #e5e5e5; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
        .p-img-preview { width: 50px; height: 50px; border-radius: 4px; background-size: cover !important; background-position: center !important; background-color: #eee; }
        .p-info { flex: 1; display: flex; flex-direction: column; }
        .p-actions { display: flex; gap: 5px; }
        .btn-icon { background: #f0f0f0; border: none; cursor: pointer; padding: 8px; border-radius: 4px; color: #666; }
        
        /* Cropper Styles */
        .crop-modal {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.8);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .crop-container {
            position: relative;
            width: 80%;
            height: 70%;
            background: #fff;
        }
        .crop-controls {
            margin-top: 20px;
            display: flex;
            gap: 20px;
            width: 300px;
            align-items: center;
        }
        .zoom-range { width: 100%; }
        .btn-crop-confirm { background: black; color: white; padding: 10px 20px; border-radius: 30px; border: none; font-weight: bold; cursor: pointer; display: flex; gap: 5px; align-items: center; }

        @media (max-width: 1000px) { .col-form, .col-list { grid-column: span 12 !important; } }
        .cat-list { list-style: none; margin-top: 10px; display: flex; flex-direction: column; gap: 5px; }
        .cat-item { display: flex; justify-content: space-between; align-items: center; padding: 8px; background: #f9f9f9; border-radius: 4px; border: 1px solid #eee; }
      `})]})}function Nt(){const{inquiries:e,deleteInquiry:s,markInquiryRead:r}=Ne();return e.length?t.jsxs("div",{className:"admin-section",children:[t.jsxs("h2",{children:["Inquiries ",t.jsx("span",{className:"count-badge",children:e.length})]}),t.jsx("div",{className:"inquiry-grid",children:e.map(i=>t.jsxs("div",{className:`inquiry-card ${i.read?"read":"unread"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("span",{className:"name",children:[i.firstName," ",i.lastName]}),t.jsxs("span",{className:"date",children:[t.jsx(Rt,{size:12,style:{marginRight:5}}),new Date(i.date).toLocaleDateString()]})]}),t.jsxs("div",{className:"card-details",children:[t.jsxs("div",{className:"detail-row",children:[t.jsx(Te,{size:14,color:"#888"}),t.jsx("a",{href:`mailto:${i.email}`,children:i.email})]}),t.jsxs("div",{className:"detail-row",children:[t.jsx(er,{size:14,color:"#888"}),t.jsx("a",{href:`tel:${i.phone}`,children:i.phone})]})]}),t.jsxs("div",{className:"project-details",children:[t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Task"}),t.jsx("span",{className:"value",children:i.task||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Budget"}),t.jsx("span",{className:"value highlight",children:i.budget||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Deadline"}),t.jsx("span",{className:"value",children:i.deadline||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"References"}),t.jsx("span",{className:"value",children:i.references||"-"})]})]}),i.comment&&!i.task&&t.jsxs("div",{className:"comment-box",children:[t.jsx("strong",{children:"Message:"}),t.jsx("p",{children:i.comment})]}),t.jsxs("div",{className:"card-actions",children:[!i.read&&t.jsx("button",{onClick:()=>r(i.id),className:"btn-action check",title:"Mark Read",children:t.jsx(qt,{size:16})}),t.jsx("a",{href:`mailto:${i.email}?subject=Re: Project Inquiry`,className:"btn-action reply",title:"Reply",children:t.jsx($t,{size:16})}),t.jsx("button",{onClick:()=>s(i.id),className:"btn-action delete",title:"Delete",children:t.jsx(je,{size:16})})]})]},i.id))}),t.jsx("style",{jsx:"true",children:`
            .admin-section { padding: 20px; color: #111; }
            .count-badge { background: #eee; color: black; padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; margin-left: 10px; font-weight: bold; }
            
            .inquiry-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }

            .inquiry-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 8px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                position: relative;
                box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            }

            .inquiry-card.unread {
                border-left: 3px solid #000;
                background: #fdfdfd;
            }

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .name { font-weight: 700; font-size: 1.1rem; color: #000; }
            .date { font-size: 0.8rem; color: #666; display: flex; align-items: center; }

            .detail-row {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.9rem;
                margin-bottom: 5px;
            }
            .detail-row a { color: #555; text-decoration: none; }
            .detail-row a:hover { color: #000; }

            .comment-box {
                margin: 10px 0;
                padding: 10px;
                background: #f9f9f9;
                border-radius: 4px;
                font-size: 0.9rem;
                border: 1px solid #eee;
            }
            .comment-box strong { display: block; margin-bottom: 5px; color: #444; font-size: 0.8rem; }
            .comment-box p { color: #222; white-space: pre-wrap; margin: 0; }

            .project-details {
                background: #fdfdfd;
                border: 1px solid #f0f0f0;
                border-radius: 6px;
                padding: 15px;
                display: grid;
                gap: 12px;
                margin-top: 10px;
            }

            .detail-item {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .detail-item .label {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #888;
                font-weight: 600;
            }

            .detail-item .value {
                font-size: 0.95rem;
                color: #222;
                font-weight: 500;
            }

            .detail-item .value.highlight {
                color: #000;
                font-weight: 700;
                background: #e0f2fe; /* Light Blue highlight */
                padding: 2px 6px;
                border-radius: 4px;
                display: inline-block;
                width: fit-content;
            }

            .card-actions {
                display: flex;
                gap: 10px;
                margin-top: 5px;
                border-top: 1px solid #eee;
                padding-top: 15px;
            }

            .btn-action {
                background: #f5f5f5;
                border: 1px solid #eee;
                color: #666;
                width: 35px;
                height: 35px;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.2s;
            }
            
            .btn-action:hover { color: black; border-color: #ccc; }
            .btn-action.check:hover { background: #dcfce7; color: #166534; border-color: #bbf7d0; }
            .btn-action.reply:hover { background: #dbeafe; color: #1e40af; border-color: #bfdbfe; }
            .btn-action.delete:hover { background: #fee2e2; color: #991b1b; border-color: #fecaca; }

        `})]}):t.jsxs("div",{className:"admin-section",children:[t.jsx("h2",{children:"Inquiries"}),t.jsxs("div",{className:"empty-state",children:[t.jsx(Te,{size:40,color:"#333"}),t.jsx("p",{children:"No inquiries yet."})]}),t.jsx("style",{jsx:"true",children:`
                .admin-section { padding: 20px; color: #111; }
                .empty-state {
                    background: #ffffff;
                    padding: 40px;
                    border-radius: 8px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    color: #666;
                    border: 1px solid #e5e5e5;
                }
              `})]})}function Er({onLogin:e}){const[s,r]=se.useState(""),[i,u]=se.useState(""),[d,n]=se.useState(""),o=F=>{if(F.preventDefault(),!s||!i){n("Please fill in all fields");return}e(s,i)};return t.jsxs("div",{className:"login-container",children:[t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"title",children:"Admin Login"}),t.jsxs("form",{onSubmit:o,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:s,onChange:F=>r(F.target.value),placeholder:"admin@example.com",className:"input-field"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Password"}),t.jsx("input",{type:"password",value:i,onChange:F=>u(F.target.value),placeholder:"••••••••",className:"input-field"})]}),d&&t.jsx("p",{className:"error",children:d}),t.jsx("button",{type:"submit",className:"submit-btn",children:"Access Dashboard"})]})]}),t.jsx("style",{jsx:"true",children:`
        .login-container {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          color: #000;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          color: #000;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #555;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 6px;
          color: #000;
          font-family: inherit;
          transition: 0.3s;
        }

        .input-field:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #000;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #333;
        }

        .error {
          color: #ef4444;
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 15px;
        }
      `})]})}function ht(){const{id:e}=Bt(),s=Oe(),{projects:r,updateProject:i,addProject:u,categories:d}=Ne(),[n,o]=se.useState({title:"",category:"Branding",img:"",link:"",content:[]});se.useEffect(()=>{if(e&&e!=="new"){const p=r.find(j=>j.id===parseInt(e)||j.id===e);if(p){let j=p.content||[];j.length===0&&p.galleryImages&&p.galleryImages.length>0&&(j=p.galleryImages.map(v=>({id:crypto.randomUUID(),type:"image",value:v}))),o({...p,content:j})}}},[e,r]);const F=()=>{e&&e!=="new"?i(n.id,n):u({...n,id:Date.now()}),alert("Project Saved!"),s("/admin")},N=p=>{o(j=>({...j,content:[...j.content,{id:crypto.randomUUID(),type:p,value:""}]}))},D=(p,j)=>{o(v=>({...v,content:v.content.map(E=>E.id===p?{...E,value:j}:E)}))},V=(p,j)=>{const v=[...n.content];j===-1&&p>0?[v[p],v[p-1]]=[v[p-1],v[p]]:j===1&&p<v.length-1&&([v[p],v[p+1]]=[v[p+1],v[p]]),o(E=>({...E,content:v}))},z=p=>{confirm("Delete this block?")&&o(j=>({...j,content:j.content.filter(v=>v.id!==p)}))};return t.jsxs("div",{className:"editor-container",children:[t.jsxs("header",{className:"editor-header",children:[t.jsxs("div",{className:"left",children:[t.jsx("button",{onClick:()=>s("/admin"),className:"btn-icon",children:t.jsx(Lt,{size:20})}),t.jsx("h1",{children:e==="new"?"New Project":"Edit Project"})]}),t.jsxs("button",{onClick:F,className:"btn-save",children:[t.jsx(ar,{size:18})," Save Changes"]})]}),t.jsxs("div",{className:"editor-layout",children:[t.jsx("div",{className:"editor-main",children:t.jsxs("div",{className:"canvas",children:[n.content.length===0&&t.jsx("div",{className:"empty-state",children:t.jsx("p",{children:"Canvas is empty. Add blocks from the right sidebar."})}),n.content.map((p,j)=>t.jsxs("div",{className:"block-wrapper",children:[t.jsxs("div",{className:"block-controls",children:[t.jsx("span",{className:"block-type",children:p.type}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:()=>V(j,-1),disabled:j===0,children:t.jsx(Ot,{size:14})}),t.jsx("button",{onClick:()=>V(j,1),disabled:j===n.content.length-1,children:t.jsx(Pt,{size:14})}),t.jsx("button",{onClick:()=>z(p.id),className:"btn-delete",children:t.jsx(je,{size:14})})]})]}),t.jsxs("div",{className:"block-content",children:[p.type==="text"&&t.jsx("textarea",{value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Type your story here...",rows:4}),p.type==="image"&&t.jsxs("div",{className:"image-block",children:[t.jsx("input",{type:"text",value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Paste Image URL..."}),p.value&&t.jsx("div",{className:"img-preview",children:t.jsx("img",{src:p.value,alt:"Preview",onError:v=>v.target.style.display="none"})})]}),p.type==="video"&&t.jsxs("div",{className:"video-block",children:[t.jsx("input",{type:"text",value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Paste YouTube, Vimeo, or MP4 URL..."}),p.value&&t.jsx("div",{className:"vid-preview",children:t.jsxs("p",{style:{fontSize:"0.8rem",color:"#888"},children:["Video Preview: ",p.value," (Check frontend for actual playback)"]})})]})]})]},p.id))]})}),t.jsxs("aside",{className:"editor-sidebar",children:[t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Content Blocks"}),t.jsxs("div",{className:"tools-grid",children:[t.jsxs("button",{className:"tool-btn",onClick:()=>N("image"),children:[t.jsx(rt,{size:20})," Image"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>N("text"),children:[t.jsx(lr,{size:20})," Text"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>N("video"),children:[t.jsx(nr,{size:20})," Video"]})]})]}),t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Project Settings"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title"}),t.jsx("input",{type:"text",value:n.title,onChange:p=>o({...n,title:p.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Category"}),t.jsx("select",{value:n.category,onChange:p=>o({...n,category:p.target.value}),children:d&&d.map(p=>t.jsx("option",{value:p,children:p},p))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Cover Image"}),t.jsxs("div",{className:"upload-row",style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[t.jsx("input",{type:"text",value:n.img,onChange:p=>o({...n,img:p.target.value}),placeholder:"Image URL",style:{flex:1}}),t.jsxs("label",{className:"btn-icon",style:{cursor:"pointer",background:"#222",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",width:"40px"},children:[t.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:p=>{const j=p.target.files[0];if(j){const v=new FileReader;v.onloadend=()=>{o(E=>({...E,img:v.result}))},v.readAsDataURL(j)}}}),t.jsx(rt,{size:18})]})]}),n.img&&t.jsx("img",{src:n.img,className:"sidebar-preview",alt:"Cover"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Live Link"}),t.jsx("input",{type:"text",value:n.link,onChange:p=>o({...n,link:p.target.value})})]})]})]})]}),t.jsx("style",{jsx:"true",children:`
                .editor-container {
                    min-height: 100vh;
                    background: #f8f9fa;
                    color: #111;
                    display: flex;
                    flex-direction: column;
                }
                
                .editor-header {
                    height: 60px;
                    border-bottom: 1px solid #e5e5e5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    background: #ffffff;
                }
                
                .left { display: flex; align-items: center; gap: 15px; }
                .left h1 { font-size: 1.2rem; margin: 0; color: #000; }
                
                .btn-icon { background: none; border: none; color: #666; cursor: pointer; padding: 5px; }
                .btn-icon:hover { color: #000; }
                
                .btn-save {
                    background: #000; color: white; border: none; padding: 8px 16px; border-radius: 4px;
                    font-weight: bold; cursor: pointer; display: flex; gap: 8px; align-items: center;
                }
                .btn-save:hover { background: #333; }

                .editor-layout {
                    flex: 1;
                    display: flex;
                    overflow: hidden;
                }

                .editor-main {
                    flex: 1;
                    overflow-y: auto;
                    padding: 40px;
                    background: #f8f9fa;
                    display: flex;
                    justify-content: center;
                }

                .canvas {
                    width: 100%;
                    max-width: 800px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding-bottom: 100px;
                }
                
                .empty-state {
                    text-align: center; color: #666; margin-top: 100px; border: 2px dashed #ccc; padding: 50px; border-radius: 8px;
                }

                .block-wrapper {
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                    border-radius: 6px;
                    padding: 0;
                    position: relative;
                    transition: border-color 0.2s;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }
                .block-wrapper:hover { border-color: #ccc; }

                .block-controls {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 8px 12px;
                    background: #fdfdfd;
                    border-bottom: 1px solid #eee;
                    border-radius: 6px 6px 0 0;
                }
                
                .block-type { font-size: 0.75rem; text-transform: uppercase; color: #666; font-weight: bold; }
                .actions { display: flex; gap: 5px; }
                .actions button { background: none; border: none; color: #888; cursor: pointer; padding: 4px; border-radius: 4px; }
                .actions button:hover { background: #eee; color: #000; }
                .actions .btn-delete:hover { background: #fee2e2; color: #991b1b; }

                .block-content { padding: 15px; }
                
                textarea {
                    width: 100%; background: none; border: none; color: #111; font-family: inherit; font-size: 1rem; resize: vertical; line-height: 1.5; outline: none;
                }
                
                .image-block input, .video-block input {
                    width: 100%; background: #f9f9f9; border: 1px solid #ddd; padding: 8px; color: #000; border-radius: 4px; margin-bottom: 10px;
                }
                .img-preview img {
                    width: 100%; border-radius: 4px; border: 1px solid #eee;
                }

                .editor-sidebar {
                    width: 300px;
                    background: #ffffff;
                    border-left: 1px solid #e5e5e5;
                    padding: 20px;
                    overflow-y: auto;
                }

                .sidebar-section { margin-bottom: 30px; }
                .sidebar-section h3 { font-size: 0.9rem; color: #666; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 1px; }

                .tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                .tool-btn {
                    display: flex; flex-direction: column; align-items: center; gap: 10px;
                    background: #f9f9f9; border: 1px solid #eee; color: #444;
                    padding: 15px; border-radius: 6px; cursor: pointer; transition: 0.2s;
                }
                .tool-btn:hover { background: #f0f0f0; color: #000; border-color: #ddd; }

                .form-group { margin-bottom: 15px; }
                .form-group label { display: block; font-size: 0.8rem; color: #666; margin-bottom: 5px; }
                .form-group input, .form-group select {
                    width: 100%; background: #f9f9f9; border: 1px solid #ddd; color: #000; padding: 8px; border-radius: 4px;
                }
                .sidebar-preview { width: 100%; height: 150px; object-fit: cover; margin-top: 5px; border-radius: 4px; border: 1px solid #eee; }

            `})]})}class Le extends U.Component{constructor(s){super(s),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(s){return{hasError:!0}}componentDidCatch(s,r){this.setState({error:s,errorInfo:r}),console.error("Uncaught error:",s,r)}render(){return this.state.hasError?t.jsxs("div",{style:{padding:40,color:"red",background:"#fff"},children:[t.jsx("h1",{children:"Something went wrong."}),t.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),t.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}function Br(){return t.jsx(Le,{children:t.jsxs("div",{style:{padding:20},children:[t.jsx("h1",{style:{color:"#111",marginBottom:20},children:"Dashboard Overview"}),t.jsxs("div",{style:{display:"grid",gap:20},children:[t.jsx(Nt,{}),t.jsx(Tr,{}),t.jsx(Mr,{})]})]})})}function Or(){const e=Et(),s=Oe(),[r,i]=se.useState(!1),[u,d]=se.useState(!0);se.useEffect(()=>{localStorage.getItem("isAdmin")==="true"&&i(!0),d(!1)},[]);const n=(F,N)=>{const D="dbeksultan6@gmail.com",V="Medinabexultan_0109",z=F.trim(),p=N.trim();console.log("Attempting login with:",z),z===D&&p===V?(localStorage.setItem("isAdmin","true"),i(!0)):(alert("Invalid credentials"),console.error("Login failed"))},o=()=>{localStorage.removeItem("isAdmin"),i(!1),s("/")};return u?t.jsx("div",{style:{color:"white",padding:50},children:"Loading..."}):r?e.pathname.includes("/project/")?t.jsx(Le,{children:t.jsx(tt,{children:t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})})})}):t.jsx(Le,{children:t.jsxs("div",{className:"admin-layout",children:[t.jsxs("aside",{className:"admin-sidebar",children:[t.jsxs("h2",{className:"brand",children:["D/W ",t.jsx("span",{className:"mono-text",children:"Admin"})]}),t.jsxs("nav",{children:[t.jsxs(De,{to:"/admin",className:`admin-link ${e.pathname==="/admin"?"active":""}`,children:[t.jsx(Gt,{size:18})," Dashboard"]}),t.jsxs(De,{to:"/admin/inquiries",className:`admin-link ${e.pathname==="/admin/inquiries"?"active":""}`,children:[t.jsx(Te,{size:18})," Inquiries"]}),t.jsxs("button",{onClick:o,className:"admin-link logout-btn",children:[t.jsx(Xt,{size:18})," Logout"]}),t.jsx(De,{to:"/",className:"admin-link",children:"Back to Site"})]})]}),t.jsx("main",{className:"admin-content",children:t.jsxs(tt,{children:[t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})}),t.jsx(ve,{path:"/",element:t.jsx(Br,{})}),t.jsx(ve,{path:"/inquiries",element:t.jsx(Nt,{})})]})}),t.jsx("style",{jsx:"true",children:`
            .admin-layout {
                display: flex;
                min-height: 100vh;
                background: #f8f9fa; /* Light Grey Background */
                color: #111; /* Dark Text */
            }

            .admin-sidebar {
                width: 250px;
                background: #ffffff; /* White Sidebar */
                border-right: 1px solid #e5e5e5;
                padding: 30px;
                display: flex;
                flex-direction: column;
                gap: 40px;
            }

            .brand { color: #000; margin-bottom: 20px; }
            .brand span { font-size: 0.8rem; color: #888; }

            .admin-link {
                display: flex;
                align-items: center;
                gap: 15px;
                color: #666; /* Grey links */
                text-decoration: none;
                padding: 10px;
                border-radius: 6px;
                transition: 0.2s;
                background: none;
                border: none;
                font-size: 1rem;
                cursor: pointer;
                width: 100%;
                text-align: left;
            }

            .admin-link:hover, .admin-link.active {
                background: #f0f0f0;
                color: #000;
            }
            
            .logout-btn {
                color: #ef4444;
            }
            .logout-btn:hover {
                background: #fee2e2;
                color: #dc2626;
            }

            .admin-content {
                flex: 1;
                overflow-y: auto;
                max-height: 100vh;
            }
        `})]})}):t.jsx(Er,{onLogin:n})}export{Or as default};
