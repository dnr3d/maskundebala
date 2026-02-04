import{T as Bt,a as qe,P as se,x as t,b as tt,c as ve,J as De,F as U,f as Et,j as Ne,o as Lt,q as qt,S as rt,z as Z,v as Ot}from"./index-BD8Om4yf.js";const It=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pt=Z("arrow-down",It),Ut=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Rt=Z("calendar",Ut),Ht=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wt=Z("external-link",Ht),Qt=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Gt=Z("layout-dashboard",Qt),Jt=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Xt=Z("log-out",Jt),Zt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Me=Z("mail",Zt),$t=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Kt=Z("pencil",$t),Yt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],er=Z("phone",Yt),tr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],at=Z("plus",tr),rr=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ar=Z("save",rr),sr=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],je=Z("trash-2",sr),ir=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],lr=Z("type",ir),or=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],nr=Z("video",or);var be=e=>e.type==="checkbox",ne=e=>e instanceof Date,Q=e=>e==null;const gt=e=>typeof e=="object";var L=e=>!Q(e)&&!Array.isArray(e)&&gt(e)&&!ne(e),dr=e=>L(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ur=(e,s)=>e.has(cr(s)),fr=e=>{const s=e.constructor&&e.constructor.prototype;return L(s)&&s.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function O(e){if(e instanceof Date)return new Date(e);const s=typeof FileList<"u"&&e instanceof FileList;if(Oe&&(e instanceof Blob||s))return e;const r=Array.isArray(e);if(!r&&!(L(e)&&fr(e)))return e;const i=r?[]:Object.create(Object.getPrototypeOf(e));for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&(i[u]=O(e[u]));return i}var Ve=e=>/^\w*$/.test(e),M=e=>e===void 0,Ie=e=>Array.isArray(e)?e.filter(Boolean):[],Pe=e=>Ie(e.replace(/["|']|\]/g,"").split(/\.|\[/)),g=(e,s,r)=>{if(!s||!L(e))return r;const i=(Ve(s)?[s]:Pe(s)).reduce((u,d)=>Q(u)?u:u[d],e);return M(i)||i===e?M(e[s])?r:e[s]:i},re=e=>typeof e=="boolean",ee=e=>typeof e=="function",T=(e,s,r)=>{let i=-1;const u=Ve(s)?[s]:Pe(s),d=u.length,n=d-1;for(;++i<d;){const o=u[i];let F=r;if(i!==n){const N=e[o];F=L(N)||Array.isArray(N)?N:isNaN(+u[i+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=F,e=e[o]}};const st={BLUR:"blur",FOCUS_OUT:"focusout"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ae={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},pr=U.createContext(null);pr.displayName="HookFormControlContext";var mr=(e,s,r,i=!0)=>{const u={defaultValues:s._defaultValues};for(const d in e)Object.defineProperty(u,d,{get:()=>{const n=d;return s._proxyFormState[n]!==te.all&&(s._proxyFormState[n]=!i||te.all),e[n]}});return u};const xr=typeof window<"u"?U.useLayoutEffect:U.useEffect;var X=e=>typeof e=="string",hr=(e,s,r,i,u)=>X(e)?(i&&s.watch.add(e),g(r,e,u)):Array.isArray(e)?e.map(d=>(i&&s.watch.add(d),g(r,d))):(i&&(s.watchAll=!0),r),Be=e=>Q(e)||!gt(e);function le(e,s,r=new WeakSet){if(Be(e)||Be(s))return Object.is(e,s);if(ne(e)&&ne(s))return Object.is(e.getTime(),s.getTime());const i=Object.keys(e),u=Object.keys(s);if(i.length!==u.length)return!1;if(r.has(e)||r.has(s))return!0;r.add(e),r.add(s);for(const d of i){const n=e[d];if(!u.includes(d))return!1;if(d!=="ref"){const o=s[d];if(ne(n)&&ne(o)||L(n)&&L(o)||Array.isArray(n)&&Array.isArray(o)?!le(n,o,r):!Object.is(n,o))return!1}}return!0}const gr=U.createContext(null);gr.displayName="HookFormContext";var br=(e,s,r,i,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:u||!0}}:{},he=e=>Array.isArray(e)?e:[e],it=()=>{let e=[];return{get observers(){return e},next:s=>{for(const r of e)r.next&&r.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(r=>r!==s)}}),unsubscribe:()=>{e=[]}}};function bt(e,s){const r={};for(const i in e)if(e.hasOwnProperty(i)){const u=e[i],d=s[i];if(u&&L(u)&&d){const n=bt(u,d);L(n)&&(r[i]=n)}else e[i]&&(r[i]=d)}return r}var H=e=>L(e)&&!Object.keys(e).length,Ue=e=>e.type==="file",ke=e=>{if(!Oe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},yt=e=>e.type==="select-multiple",Re=e=>e.type==="radio",yr=e=>Re(e)||be(e),ze=e=>ke(e)&&e.isConnected;function vr(e,s){const r=s.slice(0,-1).length;let i=0;for(;i<r;)e=M(e)?i++:e[s[i++]];return e}function jr(e){for(const s in e)if(e.hasOwnProperty(s)&&!M(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Ve(s)?[s]:Pe(s),i=r.length===1?e:vr(e,r),u=r.length-1,d=r[u];return i&&delete i[d],u!==0&&(L(i)&&H(i)||Array.isArray(i)&&jr(i))&&E(e,r.slice(0,-1)),e}var kr=e=>{for(const s in e)if(ee(e[s]))return!0;return!1};function vt(e){return Array.isArray(e)||L(e)&&!kr(e)}function Ee(e,s={}){for(const r in e){const i=e[r];vt(i)?(s[r]=Array.isArray(i)?[]:{},Ee(i,s[r])):M(i)||(s[r]=!0)}return s}function ue(e,s,r){r||(r=Ee(s));for(const i in e){const u=e[i];if(vt(u))M(s)||Be(r[i])?r[i]=Ee(u,Array.isArray(u)?[]:{}):ue(u,Q(s)?{}:s[i],r[i]);else{const d=s[i];r[i]=!le(u,d)}}return r}const lt={value:!1,isValid:!1},ot={value:!0,isValid:!0};var jt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!M(e[0].attributes.value)?M(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:lt}return lt},kt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:i})=>M(e)?e:s?e===""?NaN:e&&+e:r&&X(e)?new Date(e):i?i(e):e;const nt={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,nt):nt;function dt(e){const s=e.ref;return Ue(s)?s.files:Re(s)?wt(e.refs).value:yt(s)?[...s.selectedOptions].map(({value:r})=>r):be(s)?jt(e.refs).value:kt(M(s.value)?e.ref.value:s.value,e)}var wr=(e,s,r,i)=>{const u={};for(const d of e){const n=g(s,d);n&&T(u,d,n._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:i}},we=e=>e instanceof RegExp,xe=e=>M(e)?e:we(e)?e.source:L(e)?we(e.value)?e.value.source:e.value:e,ct=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched});const ut="AsyncFunction";var Nr=e=>!!e&&!!e.validate&&!!(ee(e.validate)&&e.validate.constructor.name===ut||L(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===ut)),Vr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ft=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ge=(e,s,r,i)=>{for(const u of r||Object.keys(e)){const d=g(e,u);if(d){const{_f:n,...o}=d;if(n){if(n.refs&&n.refs[0]&&s(n.refs[0],u)&&!i||n.ref&&s(n.ref,n.name)&&!i)return!0;if(ge(o,s))break}else if(L(o)&&ge(o,s))break}}};function pt(e,s,r){const i=g(e,r);if(i||Ve(r))return{error:i,name:r};const u=r.split(".");for(;u.length;){const d=u.join("."),n=g(s,d),o=g(e,d);if(n&&!Array.isArray(n)&&r!==d)return{name:r};if(o&&o.type)return{name:d,error:o};if(o&&o.root&&o.root.type)return{name:`${d}.root`,error:o.root};u.pop()}return{name:r}}var Sr=(e,s,r,i)=>{r(e);const{name:u,...d}=e;return H(d)||Object.keys(d).length>=Object.keys(s).length||Object.keys(d).find(n=>s[n]===(!i||te.all))},_r=(e,s,r)=>!e||!s||e===s||he(e).some(i=>i&&(r?i===s:i.startsWith(s)||s.startsWith(i))),Fr=(e,s,r,i,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?i.isOnBlur:u.isOnBlur)?!e:(r?i.isOnChange:u.isOnChange)?e:!0,Ar=(e,s)=>!Ie(g(e,s)).length&&E(e,s),Cr=(e,s,r)=>{const i=he(g(e,r));return T(i,"root",s[r]),T(e,r,i),e};function mt(e,s,r="validate"){if(X(e)||Array.isArray(e)&&e.every(X)||re(e)&&!e)return{type:r,message:X(e)?e:"",ref:s}}var ce=e=>L(e)&&!we(e)?e:{value:e,message:""},xt=async(e,s,r,i,u,d)=>{const{ref:n,refs:o,required:F,maxLength:N,minLength:D,min:V,max:z,pattern:f,validate:j,name:v,valueAsNumber:B,mount:W}=e._f,k=g(r,v);if(!W||s.has(v))return{};const K=o?o[0]:n,b=w=>{u&&K.reportValidity&&(K.setCustomValidity(re(w)?"":w||""),K.reportValidity())},x={},S=Re(n),I=be(n),G=S||I,de=(B||Ue(n))&&M(n.value)&&M(k)||ke(n)&&n.value===""||k===""||Array.isArray(k)&&!k.length,$=br.bind(null,v,i,x),ye=(w,_,q,P=ae.maxLength,Y=ae.minLength)=>{const J=w?_:q;x[v]={type:w?P:Y,message:J,ref:n,...$(w?P:Y,J)}};if(d?!Array.isArray(k)||!k.length:F&&(!G&&(de||Q(k))||re(k)&&!k||I&&!jt(o).isValid||S&&!wt(o).isValid)){const{value:w,message:_}=X(F)?{value:!!F,message:F}:ce(F);if(w&&(x[v]={type:ae.required,message:_,ref:K,...$(ae.required,_)},!i))return b(_),x}if(!de&&(!Q(V)||!Q(z))){let w,_;const q=ce(z),P=ce(V);if(!Q(k)&&!isNaN(k)){const Y=n.valueAsNumber||k&&+k;Q(q.value)||(w=Y>q.value),Q(P.value)||(_=Y<P.value)}else{const Y=n.valueAsDate||new Date(k),J=me=>new Date(new Date().toDateString()+" "+me),fe=n.type=="time",pe=n.type=="week";X(q.value)&&k&&(w=fe?J(k)>J(q.value):pe?k>q.value:Y>new Date(q.value)),X(P.value)&&k&&(_=fe?J(k)<J(P.value):pe?k<P.value:Y<new Date(P.value))}if((w||_)&&(ye(!!w,q.message,P.message,ae.max,ae.min),!i))return b(x[v].message),x}if((N||D)&&!de&&(X(k)||d&&Array.isArray(k))){const w=ce(N),_=ce(D),q=!Q(w.value)&&k.length>+w.value,P=!Q(_.value)&&k.length<+_.value;if((q||P)&&(ye(q,w.message,_.message),!i))return b(x[v].message),x}if(f&&!de&&X(k)){const{value:w,message:_}=ce(f);if(we(w)&&!k.match(w)&&(x[v]={type:ae.pattern,message:_,ref:n,...$(ae.pattern,_)},!i))return b(_),x}if(j){if(ee(j)){const w=await j(k,r),_=mt(w,K);if(_&&(x[v]={..._,...$(ae.validate,_.message)},!i))return b(_.message),x}else if(L(j)){let w={};for(const _ in j){if(!H(w)&&!i)break;const q=mt(await j[_](k,r),K,_);q&&(w={...q,...$(_,q.message)},b(q.message),i&&(x[v]=w))}if(!H(w)&&(x[v]={ref:K,...w},!i))return x}}return b(!0),x};const Dr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function zr(e={}){let s={...Dr,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ee(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},i={},u=L(s.defaultValues)||L(s.values)?O(s.defaultValues||s.values)||{}:{},d=s.shouldUnregister?{}:O(u),n={action:!1,mount:!1,watch:!1,keepIsValid:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},F,N=0;const D={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={...D};let z={...V};const f={array:it(),state:it()},j=s.criteriaMode===te.all,v=a=>l=>{clearTimeout(N),N=setTimeout(a,l)},B=async a=>{if(!n.keepIsValid&&!s.disabled&&(V.isValid||z.isValid||a)){let l;s.resolver?(l=H((await G()).errors),W()):l=await $(i,!0),l!==r.isValid&&f.state.next({isValid:l})}},W=(a,l)=>{!s.disabled&&(V.isValidating||V.validatingFields||z.isValidating||z.validatingFields)&&((a||Array.from(o.mount)).forEach(c=>{c&&(l?T(r.validatingFields,c,l):E(r.validatingFields,c))}),f.state.next({validatingFields:r.validatingFields,isValidating:!H(r.validatingFields)}))},k=(a,l=[],c,h,m=!0,p=!0)=>{if(h&&c&&!s.disabled){if(n.action=!0,p&&Array.isArray(g(i,a))){const y=c(g(i,a),h.argA,h.argB);m&&T(i,a,y)}if(p&&Array.isArray(g(r.errors,a))){const y=c(g(r.errors,a),h.argA,h.argB);m&&T(r.errors,a,y),Ar(r.errors,a)}if((V.touchedFields||z.touchedFields)&&p&&Array.isArray(g(r.touchedFields,a))){const y=c(g(r.touchedFields,a),h.argA,h.argB);m&&T(r.touchedFields,a,y)}(V.dirtyFields||z.dirtyFields)&&(r.dirtyFields=ue(u,d)),f.state.next({name:a,isDirty:w(a,l),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else T(d,a,l)},K=(a,l)=>{T(r.errors,a,l),f.state.next({errors:r.errors})},b=a=>{r.errors=a,f.state.next({errors:r.errors,isValid:!1})},x=(a,l,c,h)=>{const m=g(i,a);if(m){const p=g(d,a,M(c)?g(u,a):c);M(p)||h&&h.defaultChecked||l?T(d,a,l?p:dt(m._f)):P(a,p),n.mount&&!n.action&&B()}},S=(a,l,c,h,m)=>{let p=!1,y=!1;const A={name:a};if(!s.disabled){if(!c||h){(V.isDirty||z.isDirty)&&(y=r.isDirty,r.isDirty=A.isDirty=w(),p=y!==A.isDirty);const C=le(g(u,a),l);y=!!g(r.dirtyFields,a),C?E(r.dirtyFields,a):T(r.dirtyFields,a,!0),A.dirtyFields=r.dirtyFields,p=p||(V.dirtyFields||z.dirtyFields)&&y!==!C}if(c){const C=g(r.touchedFields,a);C||(T(r.touchedFields,a,c),A.touchedFields=r.touchedFields,p=p||(V.touchedFields||z.touchedFields)&&C!==c)}p&&m&&f.state.next(A)}return p?A:{}},I=(a,l,c,h)=>{const m=g(r.errors,a),p=(V.isValid||z.isValid)&&re(l)&&r.isValid!==l;if(s.delayError&&c?(F=v(()=>K(a,c)),F(s.delayError)):(clearTimeout(N),F=null,c?T(r.errors,a,c):E(r.errors,a)),(c?!le(m,c):m)||!H(h)||p){const y={...h,...p&&re(l)?{isValid:l}:{},errors:r.errors,name:a};r={...r,...y},f.state.next(y)}},G=async a=>(W(a,!0),await s.resolver(d,s.context,wr(a||o.mount,i,s.criteriaMode,s.shouldUseNativeValidation))),de=async a=>{const{errors:l}=await G(a);if(W(a),a)for(const c of a){const h=g(l,c);h?T(r.errors,c,h):E(r.errors,c)}else r.errors=l;return l},$=async(a,l,c={valid:!0})=>{for(const h in a){const m=a[h];if(m){const{_f:p,...y}=m;if(p){const A=o.array.has(p.name),C=m._f&&Nr(m._f);C&&V.validatingFields&&W([p.name],!0);const R=await xt(m,o.disabled,d,j,s.shouldUseNativeValidation&&!l,A);if(C&&V.validatingFields&&W([p.name]),R[p.name]&&(c.valid=!1,l||e.shouldUseNativeValidation))break;!l&&(g(R,p.name)?A?Cr(r.errors,R,p.name):T(r.errors,p.name,R[p.name]):E(r.errors,p.name))}!H(y)&&await $(y,l,c)}}return c.valid},ye=()=>{for(const a of o.unMount){const l=g(i,a);l&&(l._f.refs?l._f.refs.every(c=>!ze(c)):!ze(l._f.ref))&&Se(a)}o.unMount=new Set},w=(a,l)=>!s.disabled&&(a&&l&&T(d,a,l),!le(He(),u)),_=(a,l,c)=>hr(a,o,{...n.mount?d:M(l)?u:X(a)?{[a]:l}:l},c,l),q=a=>Ie(g(n.mount?d:u,a,s.shouldUnregister?g(u,a,[]):[])),P=(a,l,c={})=>{const h=g(i,a);let m=l;if(h){const p=h._f;p&&(!p.disabled&&T(d,a,kt(l,p)),m=ke(p.ref)&&Q(l)?"":l,yt(p.ref)?[...p.ref.options].forEach(y=>y.selected=m.includes(y.value)):p.refs?be(p.ref)?p.refs.forEach(y=>{(!y.defaultChecked||!y.disabled)&&(Array.isArray(m)?y.checked=!!m.find(A=>A===y.value):y.checked=m===y.value||!!m)}):p.refs.forEach(y=>y.checked=y.value===m):Ue(p.ref)?p.ref.value="":(p.ref.value=m,p.ref.type||f.state.next({name:a,values:O(d)})))}(c.shouldDirty||c.shouldTouch)&&S(a,m,c.shouldTouch,c.shouldDirty,!0),c.shouldValidate&&me(a)},Y=(a,l,c)=>{for(const h in l){if(!l.hasOwnProperty(h))return;const m=l[h],p=a+"."+h,y=g(i,p);(o.array.has(a)||L(m)||y&&!y._f)&&!ne(m)?Y(p,m,c):P(p,m,c)}},J=(a,l,c={})=>{const h=g(i,a),m=o.array.has(a),p=O(l);T(d,a,p),m?(f.array.next({name:a,values:O(d)}),(V.isDirty||V.dirtyFields||z.isDirty||z.dirtyFields)&&c.shouldDirty&&f.state.next({name:a,dirtyFields:ue(u,d),isDirty:w(a,p)})):h&&!h._f&&!Q(p)?Y(a,p,c):P(a,p,c),ft(a,o)?f.state.next({...r,name:a,values:O(d)}):f.state.next({name:n.mount?a:void 0,values:O(d)})},fe=async a=>{n.mount=!0;const l=a.target;let c=l.name,h=!0;const m=g(i,c),p=C=>{h=Number.isNaN(C)||ne(C)&&isNaN(C.getTime())||le(C,g(d,c,C))},y=ct(s.mode),A=ct(s.reValidateMode);if(m){let C,R;const oe=l.type?dt(m._f):dr(a),ie=a.type===st.BLUR||a.type===st.FOCUS_OUT,zt=!Vr(m._f)&&!s.resolver&&!g(r.errors,c)&&!m._f.deps||Fr(ie,g(r.touchedFields,c),r.isSubmitted,A,y),Ae=ft(c,o,ie);T(d,c,oe),ie?(!l||!l.readOnly)&&(m._f.onBlur&&m._f.onBlur(a),F&&F(0)):m._f.onChange&&m._f.onChange(a);const Ce=S(c,oe,ie),Tt=!H(Ce)||Ae;if(!ie&&f.state.next({name:c,type:a.type,values:O(d)}),zt)return(V.isValid||z.isValid)&&(s.mode==="onBlur"?ie&&B():ie||B()),Tt&&f.state.next({name:c,...Ae?{}:Ce});if(!ie&&Ae&&f.state.next({...r}),s.resolver){const{errors:Ye}=await G([c]);if(W([c]),p(oe),h){const Mt=pt(r.errors,i,c),et=pt(Ye,i,Mt.name||c);C=et.error,c=et.name,R=H(Ye)}}else W([c],!0),C=(await xt(m,o.disabled,d,j,s.shouldUseNativeValidation))[c],W([c]),p(oe),h&&(C?R=!1:(V.isValid||z.isValid)&&(R=await $(i,!0)));h&&(m._f.deps&&(!Array.isArray(m._f.deps)||m._f.deps.length>0)&&me(m._f.deps),I(c,R,C,Ce))}},pe=(a,l)=>{if(g(r.errors,l)&&a.focus)return a.focus(),1},me=async(a,l={})=>{let c,h;const m=he(a);if(s.resolver){const p=await de(M(a)?a:m);c=H(p),h=a?!m.some(y=>g(p,y)):c}else a?(h=(await Promise.all(m.map(async p=>{const y=g(i,p);return await $(y&&y._f?{[p]:y}:y)}))).every(Boolean),!(!h&&!r.isValid)&&B()):h=c=await $(i);return f.state.next({...!X(a)||(V.isValid||z.isValid)&&c!==r.isValid?{}:{name:a},...s.resolver||!a?{isValid:c}:{},errors:r.errors}),l.shouldFocus&&!h&&ge(i,pe,a?m:o.mount),h},He=(a,l)=>{let c={...n.mount?d:u};return l&&(c=bt(l.dirtyFields?r.dirtyFields:r.touchedFields,c)),M(a)?c:X(a)?g(c,a):a.map(h=>g(c,h))},We=(a,l)=>({invalid:!!g((l||r).errors,a),isDirty:!!g((l||r).dirtyFields,a),error:g((l||r).errors,a),isValidating:!!g(r.validatingFields,a),isTouched:!!g((l||r).touchedFields,a)}),Vt=a=>{a&&he(a).forEach(l=>E(r.errors,l)),f.state.next({errors:a?r.errors:{}})},Qe=(a,l,c)=>{const h=(g(i,a,{_f:{}})._f||{}).ref,m=g(r.errors,a)||{},{ref:p,message:y,type:A,...C}=m;T(r.errors,a,{...C,...l,ref:h}),f.state.next({name:a,errors:r.errors,isValid:!1}),c&&c.shouldFocus&&h&&h.focus&&h.focus()},St=(a,l)=>ee(a)?f.state.subscribe({next:c=>"values"in c&&a(_(void 0,l),c)}):_(a,l,!0),Ge=a=>f.state.subscribe({next:l=>{_r(a.name,l.name,a.exact)&&Sr(l,a.formState||V,Dt,a.reRenderRoot)&&a.callback({values:{...d},...r,...l,defaultValues:u})}}).unsubscribe,_t=a=>(n.mount=!0,z={...z,...a.formState},Ge({...a,formState:{...D,...a.formState}})),Se=(a,l={})=>{for(const c of a?he(a):o.mount)o.mount.delete(c),o.array.delete(c),l.keepValue||(E(i,c),E(d,c)),!l.keepError&&E(r.errors,c),!l.keepDirty&&E(r.dirtyFields,c),!l.keepTouched&&E(r.touchedFields,c),!l.keepIsValidating&&E(r.validatingFields,c),!s.shouldUnregister&&!l.keepDefaultValue&&E(u,c);f.state.next({values:O(d)}),f.state.next({...r,...l.keepDirty?{isDirty:w()}:{}}),!l.keepIsValid&&B()},Je=({disabled:a,name:l})=>{if(re(a)&&n.mount||a||o.disabled.has(l)){const c=o.disabled.has(l)!==!!a;a?o.disabled.add(l):o.disabled.delete(l),c&&n.mount&&!n.action&&B()}},_e=(a,l={})=>{let c=g(i,a);const h=re(l.disabled)||re(s.disabled);return T(i,a,{...c||{},_f:{...c&&c._f?c._f:{ref:{name:a}},name:a,mount:!0,...l}}),o.mount.add(a),c?Je({disabled:re(l.disabled)?l.disabled:s.disabled,name:a}):x(a,!0,l.value),{...h?{disabled:l.disabled||s.disabled}:{},...s.progressive?{required:!!l.required,min:xe(l.min),max:xe(l.max),minLength:xe(l.minLength),maxLength:xe(l.maxLength),pattern:xe(l.pattern)}:{},name:a,onChange:fe,onBlur:fe,ref:m=>{if(m){_e(a,l),c=g(i,a);const p=M(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,y=yr(p),A=c._f.refs||[];if(y?A.find(C=>C===p):p===c._f.ref)return;T(i,a,{_f:{...c._f,...y?{refs:[...A.filter(ze),p,...Array.isArray(g(u,a))?[{}]:[]],ref:{type:p.type,name:a}}:{ref:p}}}),x(a,!1,void 0,p)}else c=g(i,a,{}),c._f&&(c._f.mount=!1),(s.shouldUnregister||l.shouldUnregister)&&!(ur(o.array,a)&&n.action)&&o.unMount.add(a)}}},Fe=()=>s.shouldFocusError&&ge(i,pe,o.mount),Ft=a=>{re(a)&&(f.state.next({disabled:a}),ge(i,(l,c)=>{const h=g(i,c);h&&(l.disabled=h._f.disabled||a,Array.isArray(h._f.refs)&&h._f.refs.forEach(m=>{m.disabled=h._f.disabled||a}))},0,!1))},Xe=(a,l)=>async c=>{let h;c&&(c.preventDefault&&c.preventDefault(),c.persist&&c.persist());let m=O(d);if(f.state.next({isSubmitting:!0}),s.resolver){const{errors:p,values:y}=await G();W(),r.errors=p,m=O(y)}else await $(i);if(o.disabled.size)for(const p of o.disabled)E(m,p);if(E(r.errors,"root"),H(r.errors)){f.state.next({errors:{}});try{await a(m,c)}catch(p){h=p}}else l&&await l({...r.errors},c),Fe(),setTimeout(Fe);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:H(r.errors)&&!h,submitCount:r.submitCount+1,errors:r.errors}),h)throw h},At=(a,l={})=>{g(i,a)&&(M(l.defaultValue)?J(a,O(g(u,a))):(J(a,l.defaultValue),T(u,a,O(l.defaultValue))),l.keepTouched||E(r.touchedFields,a),l.keepDirty||(E(r.dirtyFields,a),r.isDirty=l.defaultValue?w(a,O(g(u,a))):w()),l.keepError||(E(r.errors,a),V.isValid&&B()),f.state.next({...r}))},Ze=(a,l={})=>{const c=a?O(a):u,h=O(c),m=H(a),p=m?u:h;if(l.keepDefaultValues||(u=c),!l.keepValues){if(l.keepDirtyValues){const y=new Set([...o.mount,...Object.keys(ue(u,d))]);for(const A of Array.from(y)){const C=g(r.dirtyFields,A),R=g(d,A),oe=g(p,A);C&&!M(R)?T(p,A,R):!C&&!M(oe)&&J(A,oe)}}else{if(Oe&&M(a))for(const y of o.mount){const A=g(i,y);if(A&&A._f){const C=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(ke(C)){const R=C.closest("form");if(R){R.reset();break}}}}if(l.keepFieldsRef)for(const y of o.mount)J(y,g(p,y));else i={}}d=s.shouldUnregister?l.keepDefaultValues?O(u):{}:O(p),f.array.next({values:{...p}}),f.state.next({values:{...p}})}o={mount:l.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},n.mount=!V.isValid||!!l.keepIsValid||!!l.keepDirtyValues||!s.shouldUnregister&&!H(p),n.watch=!!s.shouldUnregister,n.keepIsValid=!!l.keepIsValid,n.action=!1,l.keepErrors||(r.errors={}),f.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:m?!1:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!le(a,u)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:m?{}:l.keepDirtyValues?l.keepDefaultValues&&d?ue(u,d):r.dirtyFields:l.keepDefaultValues&&a?ue(u,a):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:u})},$e=(a,l)=>Ze(ee(a)?a(d):a,{...s.resetOptions,...l}),Ct=(a,l={})=>{const c=g(i,a),h=c&&c._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&setTimeout(()=>{m.focus(),l.shouldSelect&&ee(m.select)&&m.select()})}},Dt=a=>{r={...r,...a}},Ke={control:{register:_e,unregister:Se,getFieldState:We,handleSubmit:Xe,setError:Qe,_subscribe:Ge,_runSchema:G,_updateIsValidating:W,_focusError:Fe,_getWatch:_,_getDirty:w,_setValid:B,_setFieldArray:k,_setDisabledField:Je,_setErrors:b,_getFieldArray:q,_reset:Ze,_resetDefaultValues:()=>ee(s.defaultValues)&&s.defaultValues().then(a=>{$e(a,s.resetOptions),f.state.next({isLoading:!1})}),_removeUnmounted:ye,_disableForm:Ft,_subjects:f,_proxyFormState:V,get _fields(){return i},get _formValues(){return d},get _state(){return n},set _state(a){n=a},get _defaultValues(){return u},get _names(){return o},set _names(a){o=a},get _formState(){return r},get _options(){return s},set _options(a){s={...s,...a}}},subscribe:_t,trigger:me,register:_e,handleSubmit:Xe,watch:St,setValue:J,getValues:He,reset:$e,resetField:At,clearErrors:Vt,unregister:Se,setError:Qe,setFocus:Ct,getFieldState:We};return{...Ke,formControl:Ke}}function Te(e={}){const s=U.useRef(void 0),r=U.useRef(void 0),[i,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});if(!s.current)if(e.formControl)s.current={...e.formControl,formState:i},e.defaultValues&&!ee(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:n,...o}=zr(e);s.current={...o,formState:i}}const d=s.current.control;return d._options=e,xr(()=>{const n=d._subscribe({formState:d._proxyFormState,callback:()=>u({...d._formState}),reRenderRoot:!0});return u(o=>({...o,isReady:!0})),d._formState.isReady=!0,n},[d]),U.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),U.useEffect(()=>{e.mode&&(d._options.mode=e.mode),e.reValidateMode&&(d._options.reValidateMode=e.reValidateMode)},[d,e.mode,e.reValidateMode]),U.useEffect(()=>{e.errors&&(d._setErrors(e.errors),d._focusError())},[d,e.errors]),U.useEffect(()=>{e.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,e.shouldUnregister]),U.useEffect(()=>{if(d._proxyFormState.isDirty){const n=d._getDirty();n!==i.isDirty&&d._subjects.state.next({isDirty:n})}},[d,i.isDirty]),U.useEffect(()=>{var n;e.values&&!le(e.values,r.current)?(d._reset(e.values,{keepFieldsRef:!0,...d._options.resetOptions}),!((n=d._options.resetOptions)===null||n===void 0)&&n.keepIsValid||d._setValid(),r.current=e.values,u(o=>({...o}))):d._resetDefaultValues()},[d,e.values]),U.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),s.current.formState=U.useMemo(()=>mr(i,d),[d,i]),s.current}function Tr(){const{hero:e,updateHero:s,about:r,updateAbout:i,contact:u,updateContact:d,translations:n,language:o,updateServicePackage:F,updateTranslation:N}=Ne(),D=(b,x,S)=>{N(b,x,S)},{register:V,handleSubmit:z}=Te({defaultValues:e}),{register:f,handleSubmit:j}=Te({defaultValues:r}),{register:v,handleSubmit:B}=Te({defaultValues:u}),W=n[o].services.packages,k=(b,x,S)=>{F(o,b,{[x]:S})},K=(b,x)=>{const S=x.split(`
`).filter(I=>I.trim()!=="");F(o,b,{includes:S})};return t.jsxs("div",{className:"admin-section",children:[t.jsx("h2",{children:"Content Editor"}),t.jsxs("div",{className:"grid-12",children:[t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:z(b=>s(b)),className:"admin-form",children:[t.jsx("h3",{children:"Hero Section"}),t.jsx("label",{children:"Headline Line 1"}),t.jsx("input",{...V("headlineFirst")}),t.jsx("label",{children:"Headline Line 2"}),t.jsx("input",{...V("headlineSecond")}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{...V("subhead")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Hero"})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["About Section (",o,")"]}),t.jsx("label",{children:"Tagline"}),t.jsx("input",{defaultValue:n[o].about.tag,onBlur:b=>{const x={...n[o].about,tag:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Main Title"}),t.jsx("textarea",{defaultValue:n[o].about.title,rows:3,onBlur:b=>{const x={...n[o].about,title:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{defaultValue:n[o].about.desc,rows:5,onBlur:b=>{const x={...n[o].about,desc:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"CV Upload (PDF, Max 2MB)"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx("input",{type:"file",accept:"application/pdf",onChange:b=>{const x=b.target.files[0];if(x){if(x.size>2*1024*1024){alert("File is too large! Max 2MB.");return}const S=new FileReader;S.onloadend=()=>{i({cv:S.result}),alert("CV Uploaded!")},S.readAsDataURL(x)}}}),r.cv&&t.jsx("span",{style:{color:"#4ade80",fontSize:"0.8rem"},children:"✓ CV Uploaded"})]}),t.jsx("h4",{style:{marginTop:"20px",marginBottom:"10px"},children:"Skills Levels"}),t.jsx("div",{className:"skills-editor",children:n[o].about.skills.map((b,x)=>t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"5px"},children:[t.jsx("span",{style:{fontSize:"0.8rem",width:"100px"},children:b.name}),t.jsx("input",{type:"number",defaultValue:b.level,style:{width:"60px"},onBlur:S=>{const I=[...n[o].about.skills];I[x]={...I[x],level:parseInt(S.target.value)};const G={...n[o].about,skills:I};D(o,"about",G)}})]},x))})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:B(b=>d(b)),className:"admin-form",children:[t.jsx("h3",{children:"Contact Info"}),t.jsx("label",{children:"Email"}),t.jsx("input",{...v("email")}),t.jsx("label",{children:"Location"}),t.jsx("input",{...v("location")}),t.jsx("label",{children:"Status"}),t.jsx("input",{...v("status")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Contact"})]})}),t.jsxs("div",{className:"col-12",style:{marginTop:"40px"},children:[t.jsx("h3",{children:"Service Packages (ENG)"}),t.jsx("div",{className:"services-edit-grid",children:W.map((b,x)=>t.jsxs("div",{className:"admin-form service-form",children:[t.jsxs("h4",{children:["Package ",x+1]}),t.jsx("label",{children:"Title"}),t.jsx("input",{value:b.title,onChange:S=>k(x,"title",S.target.value)}),t.jsx("label",{children:"Subtitle (Type)"}),t.jsx("input",{value:b.subtitle,onChange:S=>k(x,"subtitle",S.target.value)}),t.jsx("label",{children:"Target Audience"}),t.jsx("input",{value:b.for,onChange:S=>k(x,"for",S.target.value)}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{value:b.desc,onChange:S=>k(x,"desc",S.target.value),rows:3}),t.jsx("label",{children:"Includes (One per line)"}),t.jsx("textarea",{defaultValue:b.includes.join(`
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
      `})]})}function Mr(){const{projects:e,deleteProject:s,categories:r,addCategory:i,deleteCategory:u}=Ne(),d=qe(),[n,o]=se.useState(""),F=()=>{n&&!r.includes(n)&&(i(n),o(""))};return t.jsxs("div",{className:"admin-section",children:[t.jsxs("div",{className:"header-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[t.jsx("h2",{children:"Portfolio Projects"}),t.jsxs("button",{onClick:()=>d("/admin/project/new"),className:"btn-primary",children:[t.jsx(at,{size:16})," Add New Project"]})]}),t.jsxs("div",{className:"grid-12",style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"20px"},children:[t.jsx("div",{className:"col-form",style:{gridColumn:"span 4"},children:t.jsxs("div",{className:"admin-form",children:[t.jsx("h3",{children:"Categories"}),t.jsxs("div",{style:{display:"flex",gap:"5px"},children:[t.jsx("input",{type:"text",placeholder:"New Category",value:n,onChange:N=>o(N.target.value)}),t.jsx("button",{onClick:F,className:"btn-primary",style:{padding:"0 10px"},children:t.jsx(at,{size:16})})]}),t.jsx("ul",{className:"cat-list",children:r&&r.map(N=>t.jsxs("li",{className:"cat-item",children:[t.jsx("span",{children:N}),t.jsx("button",{onClick:()=>u(N),className:"btn-icon delete",children:t.jsx(je,{size:14})})]},N))})]})}),t.jsxs("div",{className:"col-list",style:{gridColumn:"span 8"},children:[t.jsx("h3",{children:"Current Projects"}),t.jsx("ul",{className:"project-list",children:e.map(N=>t.jsxs("li",{className:"project-item",children:[t.jsx("div",{className:"p-img-preview",style:{background:N.img&&(N.img.startsWith("data:")||N.img.startsWith("http"))?`url(${N.img})`:N.img}}),t.jsxs("div",{className:"p-info",children:[t.jsx("strong",{children:N.title}),t.jsx("span",{children:N.category})]}),t.jsxs("div",{className:"p-actions",children:[t.jsx("button",{onClick:()=>d(`/admin/project/${N.id}`),className:"btn-icon edit",children:t.jsx(Kt,{size:16})}),t.jsx("button",{onClick:()=>s(N.id),className:"btn-icon delete",children:t.jsx(je,{size:16})})]})]},N.id))})]})]}),t.jsx("style",{jsx:"true",children:`
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
      `})]})}function Nt(){const{inquiries:e,deleteInquiry:s,markInquiryRead:r}=Ne();return e.length?t.jsxs("div",{className:"admin-section",children:[t.jsxs("h2",{children:["Inquiries ",t.jsx("span",{className:"count-badge",children:e.length})]}),t.jsx("div",{className:"inquiry-grid",children:e.map(i=>t.jsxs("div",{className:`inquiry-card ${i.read?"read":"unread"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("span",{className:"name",children:[i.firstName," ",i.lastName]}),t.jsxs("span",{className:"date",children:[t.jsx(Rt,{size:12,style:{marginRight:5}}),new Date(i.date).toLocaleDateString()]})]}),t.jsxs("div",{className:"card-details",children:[t.jsxs("div",{className:"detail-row",children:[t.jsx(Me,{size:14,color:"#888"}),t.jsx("a",{href:`mailto:${i.email}`,children:i.email})]}),t.jsxs("div",{className:"detail-row",children:[t.jsx(er,{size:14,color:"#888"}),t.jsx("a",{href:`tel:${i.phone}`,children:i.phone})]})]}),t.jsxs("div",{className:"project-details",children:[t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Task"}),t.jsx("span",{className:"value",children:i.task||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Budget"}),t.jsx("span",{className:"value highlight",children:i.budget||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Deadline"}),t.jsx("span",{className:"value",children:i.deadline||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"References"}),t.jsx("span",{className:"value",children:i.references||"-"})]})]}),i.comment&&!i.task&&t.jsxs("div",{className:"comment-box",children:[t.jsx("strong",{children:"Message:"}),t.jsx("p",{children:i.comment})]}),t.jsxs("div",{className:"card-actions",children:[!i.read&&t.jsx("button",{onClick:()=>r(i.id),className:"btn-action check",title:"Mark Read",children:t.jsx(Ot,{size:16})}),t.jsx("a",{href:`mailto:${i.email}?subject=Re: Project Inquiry`,className:"btn-action reply",title:"Reply",children:t.jsx(Wt,{size:16})}),t.jsx("button",{onClick:()=>s(i.id),className:"btn-action delete",title:"Delete",children:t.jsx(je,{size:16})})]})]},i.id))}),t.jsx("style",{jsx:"true",children:`
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

        `})]}):t.jsxs("div",{className:"admin-section",children:[t.jsx("h2",{children:"Inquiries"}),t.jsxs("div",{className:"empty-state",children:[t.jsx(Me,{size:40,color:"#333"}),t.jsx("p",{children:"No inquiries yet."})]}),t.jsx("style",{jsx:"true",children:`
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
              `})]})}function Br({onLogin:e}){const[s,r]=se.useState(""),[i,u]=se.useState(""),[d,n]=se.useState(""),o=F=>{if(F.preventDefault(),!s||!i){n("Please fill in all fields");return}e(s,i)};return t.jsxs("div",{className:"login-container",children:[t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"title",children:"Admin Login"}),t.jsxs("form",{onSubmit:o,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:s,onChange:F=>r(F.target.value),placeholder:"admin@example.com",className:"input-field"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Password"}),t.jsx("input",{type:"password",value:i,onChange:F=>u(F.target.value),placeholder:"••••••••",className:"input-field"})]}),d&&t.jsx("p",{className:"error",children:d}),t.jsx("button",{type:"submit",className:"submit-btn",children:"Access Dashboard"})]})]}),t.jsx("style",{jsx:"true",children:`
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
      `})]})}function ht(){const{id:e}=Et(),s=qe(),{projects:r,updateProject:i,addProject:u,categories:d}=Ne(),[n,o]=se.useState({title:"",category:"Branding",img:"",link:"",content:[]});se.useEffect(()=>{if(e&&e!=="new"){const f=r.find(j=>j.id===parseInt(e)||j.id===e);if(f){let j=f.content||[];j.length===0&&f.galleryImages&&f.galleryImages.length>0&&(j=f.galleryImages.map(v=>({id:crypto.randomUUID(),type:"image",value:v}))),o({...f,content:j})}}},[e,r]);const F=()=>{e&&e!=="new"?i(n.id,n):u({...n,id:Date.now()}),alert("Project Saved!"),s("/admin")},N=f=>{o(j=>({...j,content:[...j.content,{id:crypto.randomUUID(),type:f,value:""}]}))},D=(f,j)=>{o(v=>({...v,content:v.content.map(B=>B.id===f?{...B,value:j}:B)}))},V=(f,j)=>{const v=[...n.content];j===-1&&f>0?[v[f],v[f-1]]=[v[f-1],v[f]]:j===1&&f<v.length-1&&([v[f],v[f+1]]=[v[f+1],v[f]]),o(B=>({...B,content:v}))},z=f=>{confirm("Delete this block?")&&o(j=>({...j,content:j.content.filter(v=>v.id!==f)}))};return t.jsxs("div",{className:"editor-container",children:[t.jsxs("header",{className:"editor-header",children:[t.jsxs("div",{className:"left",children:[t.jsx("button",{onClick:()=>s("/admin"),className:"btn-icon",children:t.jsx(Lt,{size:20})}),t.jsx("h1",{children:e==="new"?"New Project":"Edit Project"})]}),t.jsxs("button",{onClick:F,className:"btn-save",children:[t.jsx(ar,{size:18})," Save Changes"]})]}),t.jsxs("div",{className:"editor-layout",children:[t.jsx("div",{className:"editor-main",children:t.jsxs("div",{className:"canvas",children:[n.content.length===0&&t.jsx("div",{className:"empty-state",children:t.jsx("p",{children:"Canvas is empty. Add blocks from the right sidebar."})}),n.content.map((f,j)=>t.jsxs("div",{className:"block-wrapper",children:[t.jsxs("div",{className:"block-controls",children:[t.jsx("span",{className:"block-type",children:f.type}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:()=>V(j,-1),disabled:j===0,children:t.jsx(qt,{size:14})}),t.jsx("button",{onClick:()=>V(j,1),disabled:j===n.content.length-1,children:t.jsx(Pt,{size:14})}),t.jsx("button",{onClick:()=>z(f.id),className:"btn-delete",children:t.jsx(je,{size:14})})]})]}),t.jsxs("div",{className:"block-content",children:[f.type==="text"&&t.jsx("textarea",{value:f.value,onChange:v=>D(f.id,v.target.value),placeholder:"Type your story here...",rows:4}),f.type==="image"&&t.jsxs("div",{className:"image-block",children:[t.jsx("input",{type:"text",value:f.value,onChange:v=>D(f.id,v.target.value),placeholder:"Paste Image URL..."}),f.value&&t.jsx("div",{className:"img-preview",children:t.jsx("img",{src:f.value,alt:"Preview",onError:v=>v.target.style.display="none"})})]}),f.type==="video"&&t.jsxs("div",{className:"video-block",children:[t.jsx("input",{type:"text",value:f.value,onChange:v=>D(f.id,v.target.value),placeholder:"Paste YouTube, Vimeo, or MP4 URL..."}),f.value&&t.jsx("div",{className:"vid-preview",children:t.jsxs("p",{style:{fontSize:"0.8rem",color:"#888"},children:["Video Preview: ",f.value," (Check frontend for actual playback)"]})})]})]})]},f.id))]})}),t.jsxs("aside",{className:"editor-sidebar",children:[t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Content Blocks"}),t.jsxs("div",{className:"tools-grid",children:[t.jsxs("button",{className:"tool-btn",onClick:()=>N("image"),children:[t.jsx(rt,{size:20})," Image"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>N("text"),children:[t.jsx(lr,{size:20})," Text"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>N("video"),children:[t.jsx(nr,{size:20})," Video"]})]})]}),t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Project Settings"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title"}),t.jsx("input",{type:"text",value:n.title,onChange:f=>o({...n,title:f.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Category"}),t.jsx("select",{value:n.category,onChange:f=>o({...n,category:f.target.value}),children:d&&d.map(f=>t.jsx("option",{value:f,children:f},f))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Cover Image"}),t.jsxs("div",{className:"upload-row",style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[t.jsx("input",{type:"text",value:n.img,onChange:f=>o({...n,img:f.target.value}),placeholder:"Image URL",style:{flex:1}}),t.jsxs("label",{className:"btn-icon",style:{cursor:"pointer",background:"#222",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",width:"40px"},children:[t.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:f=>{const j=f.target.files[0];if(j){const v=new FileReader;v.onloadend=()=>{o(B=>({...B,img:v.result}))},v.readAsDataURL(j)}}}),t.jsx(rt,{size:18})]})]}),n.img&&t.jsx("img",{src:n.img,className:"sidebar-preview",alt:"Cover"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Live Link"}),t.jsx("input",{type:"text",value:n.link,onChange:f=>o({...n,link:f.target.value})})]})]})]})]}),t.jsx("style",{jsx:"true",children:`
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

            `})]})}class Le extends U.Component{constructor(s){super(s),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(s){return{hasError:!0}}componentDidCatch(s,r){this.setState({error:s,errorInfo:r}),console.error("Uncaught error:",s,r)}render(){return this.state.hasError?t.jsxs("div",{style:{padding:40,color:"red",background:"#fff"},children:[t.jsx("h1",{children:"Something went wrong."}),t.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),t.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}function Er(){return t.jsx(Le,{children:t.jsxs("div",{style:{padding:20},children:[t.jsx("h1",{style:{color:"#111",marginBottom:20},children:"Dashboard Overview"}),t.jsxs("div",{style:{display:"grid",gap:20},children:[t.jsx(Nt,{}),t.jsx(Mr,{}),t.jsx(Tr,{})]})]})})}function qr(){const e=Bt(),s=qe(),[r,i]=se.useState(!1),[u,d]=se.useState(!0);se.useEffect(()=>{localStorage.getItem("isAdmin")==="true"&&i(!0),d(!1)},[]);const n=(F,N)=>{const D="dbeksultan6@gmail.com",V="Medinabexultan_0109",z=F.trim(),f=N.trim();console.log("Attempting login with:",z),z===D&&f===V?(localStorage.setItem("isAdmin","true"),i(!0)):(alert("Invalid credentials"),console.error("Login failed"))},o=()=>{localStorage.removeItem("isAdmin"),i(!1),s("/")};return u?t.jsx("div",{style:{color:"white",padding:50},children:"Loading..."}):r?e.pathname.includes("/project/")?t.jsx(Le,{children:t.jsx(tt,{children:t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})})})}):t.jsx(Le,{children:t.jsxs("div",{className:"admin-layout",children:[t.jsxs("aside",{className:"admin-sidebar",children:[t.jsxs("h2",{className:"brand",children:["D/W ",t.jsx("span",{className:"mono-text",children:"Admin"})]}),t.jsxs("nav",{children:[t.jsxs(De,{to:"/admin",className:`admin-link ${e.pathname==="/admin"?"active":""}`,children:[t.jsx(Gt,{size:18})," Dashboard"]}),t.jsxs(De,{to:"/admin/inquiries",className:`admin-link ${e.pathname==="/admin/inquiries"?"active":""}`,children:[t.jsx(Me,{size:18})," Inquiries"]}),t.jsxs("button",{onClick:o,className:"admin-link logout-btn",children:[t.jsx(Xt,{size:18})," Logout"]}),t.jsx(De,{to:"/",className:"admin-link",children:"Back to Site"})]})]}),t.jsx("main",{className:"admin-content",children:t.jsxs(tt,{children:[t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})}),t.jsx(ve,{path:"/",element:t.jsx(Er,{})}),t.jsx(ve,{path:"/inquiries",element:t.jsx(Nt,{})})]})}),t.jsx("style",{jsx:"true",children:`
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
        `})]})}):t.jsx(Br,{onLogin:n})}export{qr as default};
