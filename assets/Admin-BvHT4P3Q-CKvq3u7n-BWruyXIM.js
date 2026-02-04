import{j as Bt,e as Ee,P as ie,x as t,g as tt,c as ve,Z as De,F as U,l as Ot,T as Ve,n as Lt,H as Et,b as rt,N as Y,v as It}from"./index-B7vTmPMz.js";const qt=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pt=Y("arrow-down",qt),Ut=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Rt=Y("calendar",Ut),Ht=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wt=Y("external-link",Ht),Gt=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Qt=Y("layout-dashboard",Gt),Zt=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Kt=Y("log-out",Zt),Yt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Me=Y("mail",Yt),$t=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Xt=Y("pencil",$t),Jt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],er=Y("phone",Jt),tr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],st=Y("plus",tr),rr=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],sr=Y("save",rr),ir=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],je=Y("trash-2",ir),ar=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],nr=Y("type",ar),or=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],lr=Y("video",or);var be=e=>e.type==="checkbox",le=e=>e instanceof Date,G=e=>e==null;const gt=e=>typeof e=="object";var L=e=>!G(e)&&!Array.isArray(e)&&gt(e)&&!le(e),dr=e=>L(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ur=(e,i)=>e.has(cr(i)),pr=e=>{const i=e.constructor&&e.constructor.prototype;return L(i)&&i.hasOwnProperty("isPrototypeOf")},Ie=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function I(e){if(e instanceof Date)return new Date(e);const i=typeof FileList<"u"&&e instanceof FileList;if(Ie&&(e instanceof Blob||i))return e;const r=Array.isArray(e);if(!r&&!(L(e)&&pr(e)))return e;const a=r?[]:Object.create(Object.getPrototypeOf(e));for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=I(e[u]));return a}var Ne=e=>/^\w*$/.test(e),M=e=>e===void 0,qe=e=>Array.isArray(e)?e.filter(Boolean):[],Pe=e=>qe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),g=(e,i,r)=>{if(!i||!L(e))return r;const a=(Ne(i)?[i]:Pe(i)).reduce((u,d)=>G(u)?u:u[d],e);return M(a)||a===e?M(e[i])?r:e[i]:a},re=e=>typeof e=="boolean",ee=e=>typeof e=="function",T=(e,i,r)=>{let a=-1;const u=Ne(i)?[i]:Pe(i),d=u.length,l=d-1;for(;++a<d;){const o=u[a];let F=r;if(a!==l){const V=e[o];F=L(V)||Array.isArray(V)?V:isNaN(+u[a+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=F,e=e[o]}};const it={BLUR:"blur",FOCUS_OUT:"focusout"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},fr=U.createContext(null);fr.displayName="HookFormControlContext";var mr=(e,i,r,a=!0)=>{const u={defaultValues:i._defaultValues};for(const d in e)Object.defineProperty(u,d,{get:()=>{const l=d;return i._proxyFormState[l]!==te.all&&(i._proxyFormState[l]=!a||te.all),e[l]}});return u};const xr=typeof window<"u"?U.useLayoutEffect:U.useEffect;var K=e=>typeof e=="string",hr=(e,i,r,a,u)=>K(e)?(a&&i.watch.add(e),g(r,e,u)):Array.isArray(e)?e.map(d=>(a&&i.watch.add(d),g(r,d))):(a&&(i.watchAll=!0),r),Be=e=>G(e)||!gt(e);function ne(e,i,r=new WeakSet){if(Be(e)||Be(i))return Object.is(e,i);if(le(e)&&le(i))return Object.is(e.getTime(),i.getTime());const a=Object.keys(e),u=Object.keys(i);if(a.length!==u.length)return!1;if(r.has(e)||r.has(i))return!0;r.add(e),r.add(i);for(const d of a){const l=e[d];if(!u.includes(d))return!1;if(d!=="ref"){const o=i[d];if(le(l)&&le(o)||L(l)&&L(o)||Array.isArray(l)&&Array.isArray(o)?!ne(l,o,r):!Object.is(l,o))return!1}}return!0}const gr=U.createContext(null);gr.displayName="HookFormContext";var br=(e,i,r,a,u)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},he=e=>Array.isArray(e)?e:[e],at=()=>{let e=[];return{get observers(){return e},next:i=>{for(const r of e)r.next&&r.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(r=>r!==i)}}),unsubscribe:()=>{e=[]}}};function bt(e,i){const r={};for(const a in e)if(e.hasOwnProperty(a)){const u=e[a],d=i[a];if(u&&L(u)&&d){const l=bt(u,d);L(l)&&(r[a]=l)}else e[a]&&(r[a]=d)}return r}var H=e=>L(e)&&!Object.keys(e).length,Ue=e=>e.type==="file",ke=e=>{if(!Ie)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},yt=e=>e.type==="select-multiple",Re=e=>e.type==="radio",yr=e=>Re(e)||be(e),ze=e=>ke(e)&&e.isConnected;function vr(e,i){const r=i.slice(0,-1).length;let a=0;for(;a<r;)e=M(e)?a++:e[i[a++]];return e}function jr(e){for(const i in e)if(e.hasOwnProperty(i)&&!M(e[i]))return!1;return!0}function O(e,i){const r=Array.isArray(i)?i:Ne(i)?[i]:Pe(i),a=r.length===1?e:vr(e,r),u=r.length-1,d=r[u];return a&&delete a[d],u!==0&&(L(a)&&H(a)||Array.isArray(a)&&jr(a))&&O(e,r.slice(0,-1)),e}var kr=e=>{for(const i in e)if(ee(e[i]))return!0;return!1};function vt(e){return Array.isArray(e)||L(e)&&!kr(e)}function Oe(e,i={}){for(const r in e){const a=e[r];vt(a)?(i[r]=Array.isArray(a)?[]:{},Oe(a,i[r])):M(a)||(i[r]=!0)}return i}function ue(e,i,r){r||(r=Oe(i));for(const a in e){const u=e[a];if(vt(u))M(i)||Be(r[a])?r[a]=Oe(u,Array.isArray(u)?[]:{}):ue(u,G(i)?{}:i[a],r[a]);else{const d=i[a];r[a]=!ne(u,d)}}return r}const nt={value:!1,isValid:!1},ot={value:!0,isValid:!0};var jt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!M(e[0].attributes.value)?M(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:nt}return nt},kt=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:a})=>M(e)?e:i?e===""?NaN:e&&+e:r&&K(e)?new Date(e):a?a(e):e;const lt={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,lt):lt;function dt(e){const i=e.ref;return Ue(i)?i.files:Re(i)?wt(e.refs).value:yt(i)?[...i.selectedOptions].map(({value:r})=>r):be(i)?jt(e.refs).value:kt(M(i.value)?e.ref.value:i.value,e)}var wr=(e,i,r,a)=>{const u={};for(const d of e){const l=g(i,d);l&&T(u,d,l._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},we=e=>e instanceof RegExp,xe=e=>M(e)?e:we(e)?e.source:L(e)?we(e.value)?e.value.source:e.value:e,ct=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched});const ut="AsyncFunction";var Vr=e=>!!e&&!!e.validate&&!!(ee(e.validate)&&e.validate.constructor.name===ut||L(e.validate)&&Object.values(e.validate).find(i=>i.constructor.name===ut)),Nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),pt=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ge=(e,i,r,a)=>{for(const u of r||Object.keys(e)){const d=g(e,u);if(d){const{_f:l,...o}=d;if(l){if(l.refs&&l.refs[0]&&i(l.refs[0],u)&&!a||l.ref&&i(l.ref,l.name)&&!a)return!0;if(ge(o,i))break}else if(L(o)&&ge(o,i))break}}};function ft(e,i,r){const a=g(e,r);if(a||Ne(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const d=u.join("."),l=g(i,d),o=g(e,d);if(l&&!Array.isArray(l)&&r!==d)return{name:r};if(o&&o.type)return{name:d,error:o};if(o&&o.root&&o.root.type)return{name:`${d}.root`,error:o.root};u.pop()}return{name:r}}var Sr=(e,i,r,a)=>{r(e);const{name:u,...d}=e;return H(d)||Object.keys(d).length>=Object.keys(i).length||Object.keys(d).find(l=>i[l]===(!a||te.all))},_r=(e,i,r)=>!e||!i||e===i||he(e).some(a=>a&&(r?a===i:a.startsWith(i)||i.startsWith(a))),Fr=(e,i,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(i||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,Ar=(e,i)=>!qe(g(e,i)).length&&O(e,i),Cr=(e,i,r)=>{const a=he(g(e,r));return T(a,"root",i[r]),T(e,r,a),e};function mt(e,i,r="validate"){if(K(e)||Array.isArray(e)&&e.every(K)||re(e)&&!e)return{type:r,message:K(e)?e:"",ref:i}}var ce=e=>L(e)&&!we(e)?e:{value:e,message:""},xt=async(e,i,r,a,u,d)=>{const{ref:l,refs:o,required:F,maxLength:V,minLength:D,min:N,max:z,pattern:p,validate:j,name:v,valueAsNumber:B,mount:W}=e._f,k=g(r,v);if(!W||i.has(v))return{};const X=o?o[0]:l,b=w=>{u&&X.reportValidity&&(X.setCustomValidity(re(w)?"":w||""),X.reportValidity())},x={},S=Re(l),q=be(l),Q=S||q,de=(B||Ue(l))&&M(l.value)&&M(k)||ke(l)&&l.value===""||k===""||Array.isArray(k)&&!k.length,$=br.bind(null,v,a,x),ye=(w,_,E,P=se.maxLength,J=se.minLength)=>{const Z=w?_:E;x[v]={type:w?P:J,message:Z,ref:l,...$(w?P:J,Z)}};if(d?!Array.isArray(k)||!k.length:F&&(!Q&&(de||G(k))||re(k)&&!k||q&&!jt(o).isValid||S&&!wt(o).isValid)){const{value:w,message:_}=K(F)?{value:!!F,message:F}:ce(F);if(w&&(x[v]={type:se.required,message:_,ref:X,...$(se.required,_)},!a))return b(_),x}if(!de&&(!G(N)||!G(z))){let w,_;const E=ce(z),P=ce(N);if(!G(k)&&!isNaN(k)){const J=l.valueAsNumber||k&&+k;G(E.value)||(w=J>E.value),G(P.value)||(_=J<P.value)}else{const J=l.valueAsDate||new Date(k),Z=me=>new Date(new Date().toDateString()+" "+me),pe=l.type=="time",fe=l.type=="week";K(E.value)&&k&&(w=pe?Z(k)>Z(E.value):fe?k>E.value:J>new Date(E.value)),K(P.value)&&k&&(_=pe?Z(k)<Z(P.value):fe?k<P.value:J<new Date(P.value))}if((w||_)&&(ye(!!w,E.message,P.message,se.max,se.min),!a))return b(x[v].message),x}if((V||D)&&!de&&(K(k)||d&&Array.isArray(k))){const w=ce(V),_=ce(D),E=!G(w.value)&&k.length>+w.value,P=!G(_.value)&&k.length<+_.value;if((E||P)&&(ye(E,w.message,_.message),!a))return b(x[v].message),x}if(p&&!de&&K(k)){const{value:w,message:_}=ce(p);if(we(w)&&!k.match(w)&&(x[v]={type:se.pattern,message:_,ref:l,...$(se.pattern,_)},!a))return b(_),x}if(j){if(ee(j)){const w=await j(k,r),_=mt(w,X);if(_&&(x[v]={..._,...$(se.validate,_.message)},!a))return b(_.message),x}else if(L(j)){let w={};for(const _ in j){if(!H(w)&&!a)break;const E=mt(await j[_](k,r),X,_);E&&(w={...E,...$(_,E.message)},b(E.message),a&&(x[v]=w))}if(!H(w)&&(x[v]={ref:X,...w},!a))return x}}return b(!0),x};const Dr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function zr(e={}){let i={...Dr,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:ee(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},a={},u=L(i.defaultValues)||L(i.values)?I(i.defaultValues||i.values)||{}:{},d=i.shouldUnregister?{}:I(u),l={action:!1,mount:!1,watch:!1,keepIsValid:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},F,V=0;const D={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},N={...D};let z={...N};const p={array:at(),state:at()},j=i.criteriaMode===te.all,v=s=>n=>{clearTimeout(V),V=setTimeout(s,n)},B=async s=>{if(!l.keepIsValid&&!i.disabled&&(N.isValid||z.isValid||s)){let n;i.resolver?(n=H((await Q()).errors),W()):n=await $(a,!0),n!==r.isValid&&p.state.next({isValid:n})}},W=(s,n)=>{!i.disabled&&(N.isValidating||N.validatingFields||z.isValidating||z.validatingFields)&&((s||Array.from(o.mount)).forEach(c=>{c&&(n?T(r.validatingFields,c,n):O(r.validatingFields,c))}),p.state.next({validatingFields:r.validatingFields,isValidating:!H(r.validatingFields)}))},k=(s,n=[],c,h,m=!0,f=!0)=>{if(h&&c&&!i.disabled){if(l.action=!0,f&&Array.isArray(g(a,s))){const y=c(g(a,s),h.argA,h.argB);m&&T(a,s,y)}if(f&&Array.isArray(g(r.errors,s))){const y=c(g(r.errors,s),h.argA,h.argB);m&&T(r.errors,s,y),Ar(r.errors,s)}if((N.touchedFields||z.touchedFields)&&f&&Array.isArray(g(r.touchedFields,s))){const y=c(g(r.touchedFields,s),h.argA,h.argB);m&&T(r.touchedFields,s,y)}(N.dirtyFields||z.dirtyFields)&&(r.dirtyFields=ue(u,d)),p.state.next({name:s,isDirty:w(s,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else T(d,s,n)},X=(s,n)=>{T(r.errors,s,n),p.state.next({errors:r.errors})},b=s=>{r.errors=s,p.state.next({errors:r.errors,isValid:!1})},x=(s,n,c,h)=>{const m=g(a,s);if(m){const f=g(d,s,M(c)?g(u,s):c);M(f)||h&&h.defaultChecked||n?T(d,s,n?f:dt(m._f)):P(s,f),l.mount&&!l.action&&B()}},S=(s,n,c,h,m)=>{let f=!1,y=!1;const A={name:s};if(!i.disabled){if(!c||h){(N.isDirty||z.isDirty)&&(y=r.isDirty,r.isDirty=A.isDirty=w(),f=y!==A.isDirty);const C=ne(g(u,s),n);y=!!g(r.dirtyFields,s),C?O(r.dirtyFields,s):T(r.dirtyFields,s,!0),A.dirtyFields=r.dirtyFields,f=f||(N.dirtyFields||z.dirtyFields)&&y!==!C}if(c){const C=g(r.touchedFields,s);C||(T(r.touchedFields,s,c),A.touchedFields=r.touchedFields,f=f||(N.touchedFields||z.touchedFields)&&C!==c)}f&&m&&p.state.next(A)}return f?A:{}},q=(s,n,c,h)=>{const m=g(r.errors,s),f=(N.isValid||z.isValid)&&re(n)&&r.isValid!==n;if(i.delayError&&c?(F=v(()=>X(s,c)),F(i.delayError)):(clearTimeout(V),F=null,c?T(r.errors,s,c):O(r.errors,s)),(c?!ne(m,c):m)||!H(h)||f){const y={...h,...f&&re(n)?{isValid:n}:{},errors:r.errors,name:s};r={...r,...y},p.state.next(y)}},Q=async s=>(W(s,!0),await i.resolver(d,i.context,wr(s||o.mount,a,i.criteriaMode,i.shouldUseNativeValidation))),de=async s=>{const{errors:n}=await Q(s);if(W(s),s)for(const c of s){const h=g(n,c);h?T(r.errors,c,h):O(r.errors,c)}else r.errors=n;return n},$=async(s,n,c={valid:!0})=>{for(const h in s){const m=s[h];if(m){const{_f:f,...y}=m;if(f){const A=o.array.has(f.name),C=m._f&&Vr(m._f);C&&N.validatingFields&&W([f.name],!0);const R=await xt(m,o.disabled,d,j,i.shouldUseNativeValidation&&!n,A);if(C&&N.validatingFields&&W([f.name]),R[f.name]&&(c.valid=!1,n||e.shouldUseNativeValidation))break;!n&&(g(R,f.name)?A?Cr(r.errors,R,f.name):T(r.errors,f.name,R[f.name]):O(r.errors,f.name))}!H(y)&&await $(y,n,c)}}return c.valid},ye=()=>{for(const s of o.unMount){const n=g(a,s);n&&(n._f.refs?n._f.refs.every(c=>!ze(c)):!ze(n._f.ref))&&Se(s)}o.unMount=new Set},w=(s,n)=>!i.disabled&&(s&&n&&T(d,s,n),!ne(He(),u)),_=(s,n,c)=>hr(s,o,{...l.mount?d:M(n)?u:K(s)?{[s]:n}:n},c,n),E=s=>qe(g(l.mount?d:u,s,i.shouldUnregister?g(u,s,[]):[])),P=(s,n,c={})=>{const h=g(a,s);let m=n;if(h){const f=h._f;f&&(!f.disabled&&T(d,s,kt(n,f)),m=ke(f.ref)&&G(n)?"":n,yt(f.ref)?[...f.ref.options].forEach(y=>y.selected=m.includes(y.value)):f.refs?be(f.ref)?f.refs.forEach(y=>{(!y.defaultChecked||!y.disabled)&&(Array.isArray(m)?y.checked=!!m.find(A=>A===y.value):y.checked=m===y.value||!!m)}):f.refs.forEach(y=>y.checked=y.value===m):Ue(f.ref)?f.ref.value="":(f.ref.value=m,f.ref.type||p.state.next({name:s,values:I(d)})))}(c.shouldDirty||c.shouldTouch)&&S(s,m,c.shouldTouch,c.shouldDirty,!0),c.shouldValidate&&me(s)},J=(s,n,c)=>{for(const h in n){if(!n.hasOwnProperty(h))return;const m=n[h],f=s+"."+h,y=g(a,f);(o.array.has(s)||L(m)||y&&!y._f)&&!le(m)?J(f,m,c):P(f,m,c)}},Z=(s,n,c={})=>{const h=g(a,s),m=o.array.has(s),f=I(n);T(d,s,f),m?(p.array.next({name:s,values:I(d)}),(N.isDirty||N.dirtyFields||z.isDirty||z.dirtyFields)&&c.shouldDirty&&p.state.next({name:s,dirtyFields:ue(u,d),isDirty:w(s,f)})):h&&!h._f&&!G(f)?J(s,f,c):P(s,f,c),pt(s,o)?p.state.next({...r,name:s,values:I(d)}):p.state.next({name:l.mount?s:void 0,values:I(d)})},pe=async s=>{l.mount=!0;const n=s.target;let c=n.name,h=!0;const m=g(a,c),f=C=>{h=Number.isNaN(C)||le(C)&&isNaN(C.getTime())||ne(C,g(d,c,C))},y=ct(i.mode),A=ct(i.reValidateMode);if(m){let C,R;const oe=n.type?dt(m._f):dr(s),ae=s.type===it.BLUR||s.type===it.FOCUS_OUT,zt=!Nr(m._f)&&!i.resolver&&!g(r.errors,c)&&!m._f.deps||Fr(ae,g(r.touchedFields,c),r.isSubmitted,A,y),Ae=pt(c,o,ae);T(d,c,oe),ae?(!n||!n.readOnly)&&(m._f.onBlur&&m._f.onBlur(s),F&&F(0)):m._f.onChange&&m._f.onChange(s);const Ce=S(c,oe,ae),Tt=!H(Ce)||Ae;if(!ae&&p.state.next({name:c,type:s.type,values:I(d)}),zt)return(N.isValid||z.isValid)&&(i.mode==="onBlur"?ae&&B():ae||B()),Tt&&p.state.next({name:c,...Ae?{}:Ce});if(!ae&&Ae&&p.state.next({...r}),i.resolver){const{errors:Je}=await Q([c]);if(W([c]),f(oe),h){const Mt=ft(r.errors,a,c),et=ft(Je,a,Mt.name||c);C=et.error,c=et.name,R=H(Je)}}else W([c],!0),C=(await xt(m,o.disabled,d,j,i.shouldUseNativeValidation))[c],W([c]),f(oe),h&&(C?R=!1:(N.isValid||z.isValid)&&(R=await $(a,!0)));h&&(m._f.deps&&(!Array.isArray(m._f.deps)||m._f.deps.length>0)&&me(m._f.deps),q(c,R,C,Ce))}},fe=(s,n)=>{if(g(r.errors,n)&&s.focus)return s.focus(),1},me=async(s,n={})=>{let c,h;const m=he(s);if(i.resolver){const f=await de(M(s)?s:m);c=H(f),h=s?!m.some(y=>g(f,y)):c}else s?(h=(await Promise.all(m.map(async f=>{const y=g(a,f);return await $(y&&y._f?{[f]:y}:y)}))).every(Boolean),!(!h&&!r.isValid)&&B()):h=c=await $(a);return p.state.next({...!K(s)||(N.isValid||z.isValid)&&c!==r.isValid?{}:{name:s},...i.resolver||!s?{isValid:c}:{},errors:r.errors}),n.shouldFocus&&!h&&ge(a,fe,s?m:o.mount),h},He=(s,n)=>{let c={...l.mount?d:u};return n&&(c=bt(n.dirtyFields?r.dirtyFields:r.touchedFields,c)),M(s)?c:K(s)?g(c,s):s.map(h=>g(c,h))},We=(s,n)=>({invalid:!!g((n||r).errors,s),isDirty:!!g((n||r).dirtyFields,s),error:g((n||r).errors,s),isValidating:!!g(r.validatingFields,s),isTouched:!!g((n||r).touchedFields,s)}),Nt=s=>{s&&he(s).forEach(n=>O(r.errors,n)),p.state.next({errors:s?r.errors:{}})},Ge=(s,n,c)=>{const h=(g(a,s,{_f:{}})._f||{}).ref,m=g(r.errors,s)||{},{ref:f,message:y,type:A,...C}=m;T(r.errors,s,{...C,...n,ref:h}),p.state.next({name:s,errors:r.errors,isValid:!1}),c&&c.shouldFocus&&h&&h.focus&&h.focus()},St=(s,n)=>ee(s)?p.state.subscribe({next:c=>"values"in c&&s(_(void 0,n),c)}):_(s,n,!0),Qe=s=>p.state.subscribe({next:n=>{_r(s.name,n.name,s.exact)&&Sr(n,s.formState||N,Dt,s.reRenderRoot)&&s.callback({values:{...d},...r,...n,defaultValues:u})}}).unsubscribe,_t=s=>(l.mount=!0,z={...z,...s.formState},Qe({...s,formState:{...D,...s.formState}})),Se=(s,n={})=>{for(const c of s?he(s):o.mount)o.mount.delete(c),o.array.delete(c),n.keepValue||(O(a,c),O(d,c)),!n.keepError&&O(r.errors,c),!n.keepDirty&&O(r.dirtyFields,c),!n.keepTouched&&O(r.touchedFields,c),!n.keepIsValidating&&O(r.validatingFields,c),!i.shouldUnregister&&!n.keepDefaultValue&&O(u,c);p.state.next({values:I(d)}),p.state.next({...r,...n.keepDirty?{isDirty:w()}:{}}),!n.keepIsValid&&B()},Ze=({disabled:s,name:n})=>{if(re(s)&&l.mount||s||o.disabled.has(n)){const c=o.disabled.has(n)!==!!s;s?o.disabled.add(n):o.disabled.delete(n),c&&l.mount&&!l.action&&B()}},_e=(s,n={})=>{let c=g(a,s);const h=re(n.disabled)||re(i.disabled);return T(a,s,{...c||{},_f:{...c&&c._f?c._f:{ref:{name:s}},name:s,mount:!0,...n}}),o.mount.add(s),c?Ze({disabled:re(n.disabled)?n.disabled:i.disabled,name:s}):x(s,!0,n.value),{...h?{disabled:n.disabled||i.disabled}:{},...i.progressive?{required:!!n.required,min:xe(n.min),max:xe(n.max),minLength:xe(n.minLength),maxLength:xe(n.maxLength),pattern:xe(n.pattern)}:{},name:s,onChange:pe,onBlur:pe,ref:m=>{if(m){_e(s,n),c=g(a,s);const f=M(m.value)&&m.querySelectorAll&&m.querySelectorAll("input,select,textarea")[0]||m,y=yr(f),A=c._f.refs||[];if(y?A.find(C=>C===f):f===c._f.ref)return;T(a,s,{_f:{...c._f,...y?{refs:[...A.filter(ze),f,...Array.isArray(g(u,s))?[{}]:[]],ref:{type:f.type,name:s}}:{ref:f}}}),x(s,!1,void 0,f)}else c=g(a,s,{}),c._f&&(c._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(ur(o.array,s)&&l.action)&&o.unMount.add(s)}}},Fe=()=>i.shouldFocusError&&ge(a,fe,o.mount),Ft=s=>{re(s)&&(p.state.next({disabled:s}),ge(a,(n,c)=>{const h=g(a,c);h&&(n.disabled=h._f.disabled||s,Array.isArray(h._f.refs)&&h._f.refs.forEach(m=>{m.disabled=h._f.disabled||s}))},0,!1))},Ke=(s,n)=>async c=>{let h;c&&(c.preventDefault&&c.preventDefault(),c.persist&&c.persist());let m=I(d);if(p.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:y}=await Q();W(),r.errors=f,m=I(y)}else await $(a);if(o.disabled.size)for(const f of o.disabled)O(m,f);if(O(r.errors,"root"),H(r.errors)){p.state.next({errors:{}});try{await s(m,c)}catch(f){h=f}}else n&&await n({...r.errors},c),Fe(),setTimeout(Fe);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:H(r.errors)&&!h,submitCount:r.submitCount+1,errors:r.errors}),h)throw h},At=(s,n={})=>{g(a,s)&&(M(n.defaultValue)?Z(s,I(g(u,s))):(Z(s,n.defaultValue),T(u,s,I(n.defaultValue))),n.keepTouched||O(r.touchedFields,s),n.keepDirty||(O(r.dirtyFields,s),r.isDirty=n.defaultValue?w(s,I(g(u,s))):w()),n.keepError||(O(r.errors,s),N.isValid&&B()),p.state.next({...r}))},Ye=(s,n={})=>{const c=s?I(s):u,h=I(c),m=H(s),f=m?u:h;if(n.keepDefaultValues||(u=c),!n.keepValues){if(n.keepDirtyValues){const y=new Set([...o.mount,...Object.keys(ue(u,d))]);for(const A of Array.from(y)){const C=g(r.dirtyFields,A),R=g(d,A),oe=g(f,A);C&&!M(R)?T(f,A,R):!C&&!M(oe)&&Z(A,oe)}}else{if(Ie&&M(s))for(const y of o.mount){const A=g(a,y);if(A&&A._f){const C=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(ke(C)){const R=C.closest("form");if(R){R.reset();break}}}}if(n.keepFieldsRef)for(const y of o.mount)Z(y,g(f,y));else a={}}d=i.shouldUnregister?n.keepDefaultValues?I(u):{}:I(f),p.array.next({values:{...f}}),p.state.next({values:{...f}})}o={mount:n.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!N.isValid||!!n.keepIsValid||!!n.keepDirtyValues||!i.shouldUnregister&&!H(f),l.watch=!!i.shouldUnregister,l.keepIsValid=!!n.keepIsValid,l.action=!1,n.keepErrors||(r.errors={}),p.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:m?!1:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!ne(s,u)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:m?{}:n.keepDirtyValues?n.keepDefaultValues&&d?ue(u,d):r.dirtyFields:n.keepDefaultValues&&s?ue(u,s):n.keepDirty?r.dirtyFields:{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:u})},$e=(s,n)=>Ye(ee(s)?s(d):s,{...i.resetOptions,...n}),Ct=(s,n={})=>{const c=g(a,s),h=c&&c._f;if(h){const m=h.refs?h.refs[0]:h.ref;m.focus&&setTimeout(()=>{m.focus(),n.shouldSelect&&ee(m.select)&&m.select()})}},Dt=s=>{r={...r,...s}},Xe={control:{register:_e,unregister:Se,getFieldState:We,handleSubmit:Ke,setError:Ge,_subscribe:Qe,_runSchema:Q,_updateIsValidating:W,_focusError:Fe,_getWatch:_,_getDirty:w,_setValid:B,_setFieldArray:k,_setDisabledField:Ze,_setErrors:b,_getFieldArray:E,_reset:Ye,_resetDefaultValues:()=>ee(i.defaultValues)&&i.defaultValues().then(s=>{$e(s,i.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:ye,_disableForm:Ft,_subjects:p,_proxyFormState:N,get _fields(){return a},get _formValues(){return d},get _state(){return l},set _state(s){l=s},get _defaultValues(){return u},get _names(){return o},set _names(s){o=s},get _formState(){return r},get _options(){return i},set _options(s){i={...i,...s}}},subscribe:_t,trigger:me,register:_e,handleSubmit:Ke,watch:St,setValue:Z,getValues:He,reset:$e,resetField:At,clearErrors:Nt,unregister:Se,setError:Ge,setFocus:Ct,getFieldState:We};return{...Xe,formControl:Xe}}function Te(e={}){const i=U.useRef(void 0),r=U.useRef(void 0),[a,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});if(!i.current)if(e.formControl)i.current={...e.formControl,formState:a},e.defaultValues&&!ee(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:l,...o}=zr(e);i.current={...o,formState:a}}const d=i.current.control;return d._options=e,xr(()=>{const l=d._subscribe({formState:d._proxyFormState,callback:()=>u({...d._formState}),reRenderRoot:!0});return u(o=>({...o,isReady:!0})),d._formState.isReady=!0,l},[d]),U.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),U.useEffect(()=>{e.mode&&(d._options.mode=e.mode),e.reValidateMode&&(d._options.reValidateMode=e.reValidateMode)},[d,e.mode,e.reValidateMode]),U.useEffect(()=>{e.errors&&(d._setErrors(e.errors),d._focusError())},[d,e.errors]),U.useEffect(()=>{e.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,e.shouldUnregister]),U.useEffect(()=>{if(d._proxyFormState.isDirty){const l=d._getDirty();l!==a.isDirty&&d._subjects.state.next({isDirty:l})}},[d,a.isDirty]),U.useEffect(()=>{var l;e.values&&!ne(e.values,r.current)?(d._reset(e.values,{keepFieldsRef:!0,...d._options.resetOptions}),!((l=d._options.resetOptions)===null||l===void 0)&&l.keepIsValid||d._setValid(),r.current=e.values,u(o=>({...o}))):d._resetDefaultValues()},[d,e.values]),U.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),i.current.formState=U.useMemo(()=>mr(a,d),[d,a]),i.current}function Tr(){const{hero:e,updateHero:i,about:r,updateAbout:a,contact:u,updateContact:d,translations:l,language:o,updateServicePackage:F,updateTranslation:V}=Ve(),D=(b,x,S)=>{V(b,x,S)},{register:N,handleSubmit:z}=Te({defaultValues:e}),{register:p,handleSubmit:j}=Te({defaultValues:r}),{register:v,handleSubmit:B}=Te({defaultValues:u}),W=l[o].services.packages,k=(b,x,S)=>{F(o,b,{[x]:S})},X=(b,x)=>{const S=x.split(`
`).filter(q=>q.trim()!=="");F(o,b,{includes:S})};return t.jsxs("div",{className:"admin-section",children:[t.jsx("h2",{children:"Content Editor"}),t.jsxs("div",{className:"grid-12",children:[t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:z(b=>i(b)),className:"admin-form",children:[t.jsx("h3",{children:"Hero Section"}),t.jsx("label",{children:"Headline Line 1"}),t.jsx("input",{...N("headlineFirst")}),t.jsx("label",{children:"Headline Line 2"}),t.jsx("input",{...N("headlineSecond")}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{...N("subhead")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Hero"})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["About Section (",o,")"]}),t.jsx("label",{children:"Tagline"}),t.jsx("input",{defaultValue:l[o].about.tag,onBlur:b=>{const x={...l[o].about,tag:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Main Title"}),t.jsx("textarea",{defaultValue:l[o].about.title,rows:3,onBlur:b=>{const x={...l[o].about,title:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{defaultValue:l[o].about.desc,rows:5,onBlur:b=>{const x={...l[o].about,desc:b.target.value};D(o,"about",x)}}),t.jsx("label",{children:"CV Upload (PDF, Max 2MB)"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx("input",{type:"file",accept:"application/pdf",onChange:b=>{const x=b.target.files[0];if(x){if(x.size>2*1024*1024){alert("File is too large! Max 2MB.");return}const S=new FileReader;S.onloadend=()=>{a({cv:S.result}),alert("CV Uploaded!")},S.readAsDataURL(x)}}}),r.cv&&t.jsx("span",{style:{color:"#4ade80",fontSize:"0.8rem"},children:"✓ CV Uploaded"})]}),t.jsx("h4",{style:{marginTop:"20px",marginBottom:"10px"},children:"Skills Levels"}),t.jsx("div",{className:"skills-editor",children:l[o].about.skills.map((b,x)=>t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"5px"},children:[t.jsx("span",{style:{fontSize:"0.8rem",width:"100px"},children:b.name}),t.jsx("input",{type:"number",defaultValue:b.level,style:{width:"60px"},onBlur:S=>{const q=[...l[o].about.skills];q[x]={...q[x],level:parseInt(S.target.value)};const Q={...l[o].about,skills:q};D(o,"about",Q)}})]},x))})]})}),t.jsx("div",{className:"col-4",children:t.jsxs("form",{onSubmit:B(b=>d(b)),className:"admin-form",children:[t.jsx("h3",{children:"Contact Info"}),t.jsx("label",{children:"Email"}),t.jsx("input",{...v("email")}),t.jsx("label",{children:"Location"}),t.jsx("input",{...v("location")}),t.jsx("label",{children:"Status"}),t.jsx("input",{...v("status")}),t.jsx("button",{type:"submit",className:"btn-save",children:"Save Contact"})]})}),t.jsxs("div",{className:"col-12",style:{marginTop:"40px"},children:[t.jsx("h3",{children:"Service Packages (ENG)"}),t.jsx("div",{className:"services-edit-grid",children:W.map((b,x)=>t.jsxs("div",{className:"admin-form service-form",children:[t.jsxs("h4",{children:["Package ",x+1]}),t.jsx("label",{children:"Title"}),t.jsx("input",{value:b.title,onChange:S=>k(x,"title",S.target.value)}),t.jsx("label",{children:"Subtitle (Type)"}),t.jsx("input",{value:b.subtitle,onChange:S=>k(x,"subtitle",S.target.value)}),t.jsx("label",{children:"Target Audience"}),t.jsx("input",{value:b.for,onChange:S=>k(x,"for",S.target.value)}),t.jsx("label",{children:"Description"}),t.jsx("textarea",{value:b.desc,onChange:S=>k(x,"desc",S.target.value),rows:3}),t.jsx("label",{children:"Includes (One per line)"}),t.jsx("textarea",{defaultValue:b.includes.join(`
`),onBlur:S=>X(x,S.target.value),rows:5,placeholder:`Feature 1
Feature 2
Feature 3`}),t.jsx("label",{children:"Value Prop"}),t.jsx("textarea",{value:b.value,onChange:S=>k(x,"value",S.target.value),rows:2})]},b.id))})]}),t.jsxs("div",{className:"col-12",style:{marginTop:"40px"},children:[t.jsxs("h3",{children:["Process Section (",o,")"]}),t.jsxs("div",{className:"admin-form",children:[t.jsx("label",{children:"Section Title"}),t.jsx("input",{defaultValue:l[o].process.title,onBlur:b=>{const x={...l[o].process,title:b.target.value};D(o,"process",x)}}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{defaultValue:l[o].process.sub,onBlur:b=>{const x={...l[o].process,sub:b.target.value};D(o,"process",x)}}),t.jsxs("div",{style:{marginTop:"20px"},children:[t.jsx("h4",{children:"Steps"}),l[o].process.steps.map((b,x)=>t.jsx("div",{style:{marginBottom:"20px",padding:"15px",background:"#f5f5f5",borderRadius:"8px"},children:t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{children:["Step ",b.num," Title"]}),t.jsx("input",{defaultValue:b.title,onBlur:S=>{const q=[...l[o].process.steps];q[x]={...q[x],title:S.target.value};const Q={...l[o].process,steps:q};D(o,"process",Q)}})]}),t.jsxs("div",{style:{flex:2},children:[t.jsx("label",{children:"Description"}),t.jsx("textarea",{defaultValue:b.desc,rows:2,onBlur:S=>{const q=[...l[o].process.steps];q[x]={...q[x],desc:S.target.value};const Q={...l[o].process,steps:q};D(o,"process",Q)}})]})]})},x))]})]})]}),t.jsx("div",{className:"col-6",style:{marginTop:"20px"},children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["Pricing Section (",o,")"]}),t.jsx("label",{children:"Title"}),t.jsx("input",{defaultValue:l[o].pricing.title,onBlur:b=>{const x={...l[o].pricing,title:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Subtitle"}),t.jsx("input",{defaultValue:l[o].pricing.sub,onBlur:b=>{const x={...l[o].pricing,sub:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Budget Label"}),t.jsx("input",{defaultValue:l[o].pricing.label,onBlur:b=>{const x={...l[o].pricing,label:b.target.value};D(o,"pricing",x)}}),t.jsx("label",{children:"Button Text"}),t.jsx("input",{defaultValue:l[o].pricing.btn,onBlur:b=>{const x={...l[o].pricing,btn:b.target.value};D(o,"pricing",x)}})]})}),t.jsx("div",{className:"col-6",style:{marginTop:"20px"},children:t.jsxs("div",{className:"admin-form",children:[t.jsxs("h3",{children:["Quiz Section (",o,")"]}),t.jsx("label",{children:"Intro Title"}),t.jsx("input",{defaultValue:l[o].quiz.introTitle,onBlur:b=>{const x={...l[o].quiz,introTitle:b.target.value};D(o,"quiz",x)}}),t.jsx("label",{children:"Intro Description"}),t.jsx("textarea",{defaultValue:l[o].quiz.introDesc,rows:3,onBlur:b=>{const x={...l[o].quiz,introDesc:b.target.value};D(o,"quiz",x)}}),t.jsx("label",{children:"Success Title"}),t.jsx("input",{defaultValue:l[o].quiz.successTitle,onBlur:b=>{const x={...l[o].quiz,successTitle:b.target.value};D(o,"quiz",x)}})]})})]}),t.jsx("style",{jsx:"true",children:`
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
      `})]})}function Mr(){const{projects:e,deleteProject:i,categories:r,addCategory:a,deleteCategory:u}=Ve(),d=Ee(),[l,o]=ie.useState(""),F=()=>{l&&!r.includes(l)&&(a(l),o(""))};return t.jsxs("div",{className:"admin-section",children:[t.jsxs("div",{className:"header-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[t.jsx("h2",{children:"Portfolio Projects"}),t.jsxs("button",{onClick:()=>d("/admin/project/new"),className:"btn-primary",children:[t.jsx(st,{size:16})," Add New Project"]})]}),t.jsxs("div",{className:"grid-12",style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"20px"},children:[t.jsx("div",{className:"col-form",style:{gridColumn:"span 4"},children:t.jsxs("div",{className:"admin-form",children:[t.jsx("h3",{children:"Categories"}),t.jsxs("div",{style:{display:"flex",gap:"5px"},children:[t.jsx("input",{type:"text",placeholder:"New Category",value:l,onChange:V=>o(V.target.value)}),t.jsx("button",{onClick:F,className:"btn-primary",style:{padding:"0 10px"},children:t.jsx(st,{size:16})})]}),t.jsx("ul",{className:"cat-list",children:r&&r.map(V=>t.jsxs("li",{className:"cat-item",children:[t.jsx("span",{children:V}),t.jsx("button",{onClick:()=>u(V),className:"btn-icon delete",children:t.jsx(je,{size:14})})]},V))})]})}),t.jsxs("div",{className:"col-list",style:{gridColumn:"span 8"},children:[t.jsx("h3",{children:"Current Projects"}),t.jsx("ul",{className:"project-list",children:e.map(V=>t.jsxs("li",{className:"project-item",children:[t.jsx("div",{className:"p-img-preview",style:{background:V.img&&(V.img.startsWith("data:")||V.img.startsWith("http"))?`url(${V.img})`:V.img}}),t.jsxs("div",{className:"p-info",children:[t.jsx("strong",{children:V.title}),t.jsx("span",{children:V.category})]}),t.jsxs("div",{className:"p-actions",children:[t.jsx("button",{onClick:()=>d(`/admin/project/${V.id}`),className:"btn-icon edit",children:t.jsx(Xt,{size:16})}),t.jsx("button",{onClick:()=>i(V.id),className:"btn-icon delete",children:t.jsx(je,{size:16})})]})]},V.id))})]})]}),t.jsx("style",{jsx:"true",children:`
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
      `})]})}function Vt(){const{inquiries:e,deleteInquiry:i,markInquiryRead:r}=Ve();return e.length?t.jsxs("div",{className:"admin-section",children:[t.jsxs("h2",{children:["Inquiries ",t.jsx("span",{className:"count-badge",children:e.length})]}),t.jsx("div",{className:"inquiry-grid",children:e.map(a=>t.jsxs("div",{className:`inquiry-card ${a.read?"read":"unread"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("span",{className:"name",children:[a.firstName," ",a.lastName]}),t.jsxs("span",{className:"date",children:[t.jsx(Rt,{size:12,style:{marginRight:5}}),new Date(a.date).toLocaleDateString()]})]}),t.jsxs("div",{className:"card-details",children:[t.jsxs("div",{className:"detail-row",children:[t.jsx(Me,{size:14,color:"#888"}),t.jsx("a",{href:`mailto:${a.email}`,children:a.email})]}),t.jsxs("div",{className:"detail-row",children:[t.jsx(er,{size:14,color:"#888"}),t.jsx("a",{href:`tel:${a.phone}`,children:a.phone})]})]}),t.jsxs("div",{className:"project-details",children:[t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Task"}),t.jsx("span",{className:"value",children:a.task||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Budget"}),t.jsx("span",{className:"value highlight",children:a.budget||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"Deadline"}),t.jsx("span",{className:"value",children:a.deadline||"-"})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"label",children:"References"}),t.jsx("span",{className:"value",children:a.references||"-"})]})]}),a.comment&&!a.task&&t.jsxs("div",{className:"comment-box",children:[t.jsx("strong",{children:"Message:"}),t.jsx("p",{children:a.comment})]}),t.jsxs("div",{className:"card-actions",children:[!a.read&&t.jsx("button",{onClick:()=>r(a.id),className:"btn-action check",title:"Mark Read",children:t.jsx(It,{size:16})}),t.jsx("a",{href:`mailto:${a.email}?subject=Re: Project Inquiry`,className:"btn-action reply",title:"Reply",children:t.jsx(Wt,{size:16})}),t.jsx("button",{onClick:()=>i(a.id),className:"btn-action delete",title:"Delete",children:t.jsx(je,{size:16})})]})]},a.id))}),t.jsx("style",{jsx:"true",children:`
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
              `})]})}function Br({onLogin:e}){const[i,r]=ie.useState(""),[a,u]=ie.useState(""),[d,l]=ie.useState(""),o=F=>{if(F.preventDefault(),!i||!a){l("Please fill in all fields");return}e(i,a)};return t.jsxs("div",{className:"login-container",children:[t.jsxs("div",{className:"login-card",children:[t.jsx("h2",{className:"title",children:"Admin Login"}),t.jsxs("form",{onSubmit:o,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:i,onChange:F=>r(F.target.value),placeholder:"admin@example.com",className:"input-field"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Password"}),t.jsx("input",{type:"password",value:a,onChange:F=>u(F.target.value),placeholder:"••••••••",className:"input-field"})]}),d&&t.jsx("p",{className:"error",children:d}),t.jsx("button",{type:"submit",className:"submit-btn",children:"Access Dashboard"})]})]}),t.jsx("style",{jsx:"true",children:`
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
      `})]})}function ht(){const{id:e}=Ot(),i=Ee(),{projects:r,updateProject:a,addProject:u,categories:d}=Ve(),[l,o]=ie.useState({title:"",category:"Branding",img:"",link:"",content:[]});ie.useEffect(()=>{if(e&&e!=="new"){const p=r.find(j=>j.id===parseInt(e)||j.id===e);if(p){let j=p.content||[];j.length===0&&p.galleryImages&&p.galleryImages.length>0&&(j=p.galleryImages.map(v=>({id:crypto.randomUUID(),type:"image",value:v}))),o({...p,content:j})}}},[e,r]);const F=()=>{e&&e!=="new"?a(l.id,l):u({...l,id:Date.now()}),alert("Project Saved!"),i("/admin")},V=p=>{o(j=>({...j,content:[...j.content,{id:crypto.randomUUID(),type:p,value:""}]}))},D=(p,j)=>{o(v=>({...v,content:v.content.map(B=>B.id===p?{...B,value:j}:B)}))},N=(p,j)=>{const v=[...l.content];j===-1&&p>0?[v[p],v[p-1]]=[v[p-1],v[p]]:j===1&&p<v.length-1&&([v[p],v[p+1]]=[v[p+1],v[p]]),o(B=>({...B,content:v}))},z=p=>{confirm("Delete this block?")&&o(j=>({...j,content:j.content.filter(v=>v.id!==p)}))};return t.jsxs("div",{className:"editor-container",children:[t.jsxs("header",{className:"editor-header",children:[t.jsxs("div",{className:"left",children:[t.jsx("button",{onClick:()=>i("/admin"),className:"btn-icon",children:t.jsx(Lt,{size:20})}),t.jsx("h1",{children:e==="new"?"New Project":"Edit Project"})]}),t.jsxs("button",{onClick:F,className:"btn-save",children:[t.jsx(sr,{size:18})," Save Changes"]})]}),t.jsxs("div",{className:"editor-layout",children:[t.jsx("div",{className:"editor-main",children:t.jsxs("div",{className:"canvas",children:[l.content.length===0&&t.jsx("div",{className:"empty-state",children:t.jsx("p",{children:"Canvas is empty. Add blocks from the right sidebar."})}),l.content.map((p,j)=>t.jsxs("div",{className:"block-wrapper",children:[t.jsxs("div",{className:"block-controls",children:[t.jsx("span",{className:"block-type",children:p.type}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:()=>N(j,-1),disabled:j===0,children:t.jsx(Et,{size:14})}),t.jsx("button",{onClick:()=>N(j,1),disabled:j===l.content.length-1,children:t.jsx(Pt,{size:14})}),t.jsx("button",{onClick:()=>z(p.id),className:"btn-delete",children:t.jsx(je,{size:14})})]})]}),t.jsxs("div",{className:"block-content",children:[p.type==="text"&&t.jsx("textarea",{value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Type your story here...",rows:4}),p.type==="image"&&t.jsxs("div",{className:"image-block",children:[t.jsx("input",{type:"text",value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Paste Image URL..."}),p.value&&t.jsx("div",{className:"img-preview",children:t.jsx("img",{src:p.value,alt:"Preview",onError:v=>v.target.style.display="none"})})]}),p.type==="video"&&t.jsxs("div",{className:"video-block",children:[t.jsx("input",{type:"text",value:p.value,onChange:v=>D(p.id,v.target.value),placeholder:"Paste YouTube, Vimeo, or MP4 URL..."}),p.value&&t.jsx("div",{className:"vid-preview",children:t.jsxs("p",{style:{fontSize:"0.8rem",color:"#888"},children:["Video Preview: ",p.value," (Check frontend for actual playback)"]})})]})]})]},p.id))]})}),t.jsxs("aside",{className:"editor-sidebar",children:[t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Content Blocks"}),t.jsxs("div",{className:"tools-grid",children:[t.jsxs("button",{className:"tool-btn",onClick:()=>V("image"),children:[t.jsx(rt,{size:20})," Image"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>V("text"),children:[t.jsx(nr,{size:20})," Text"]}),t.jsxs("button",{className:"tool-btn",onClick:()=>V("video"),children:[t.jsx(lr,{size:20})," Video"]})]})]}),t.jsxs("div",{className:"sidebar-section",children:[t.jsx("h3",{children:"Project Settings"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title"}),t.jsx("input",{type:"text",value:l.title,onChange:p=>o({...l,title:p.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Category"}),t.jsx("select",{value:l.category,onChange:p=>o({...l,category:p.target.value}),children:d&&d.map(p=>t.jsx("option",{value:p,children:p},p))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Cover Image"}),t.jsxs("div",{className:"upload-row",style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[t.jsx("input",{type:"text",value:l.img,onChange:p=>o({...l,img:p.target.value}),placeholder:"Image URL",style:{flex:1}}),t.jsxs("label",{className:"btn-icon",style:{cursor:"pointer",background:"#222",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",width:"40px"},children:[t.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:p=>{const j=p.target.files[0];if(j){const v=new FileReader;v.onloadend=()=>{o(B=>({...B,img:v.result}))},v.readAsDataURL(j)}}}),t.jsx(rt,{size:18})]})]}),l.img&&t.jsx("img",{src:l.img,className:"sidebar-preview",alt:"Cover"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Live Link"}),t.jsx("input",{type:"text",value:l.link,onChange:p=>o({...l,link:p.target.value})})]})]})]})]}),t.jsx("style",{jsx:"true",children:`
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

            `})]})}class Le extends U.Component{constructor(i){super(i),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,r){this.setState({error:i,errorInfo:r}),console.error("Uncaught error:",i,r)}render(){return this.state.hasError?t.jsxs("div",{style:{padding:40,color:"red",background:"#fff"},children:[t.jsx("h1",{children:"Something went wrong."}),t.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),t.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}function Or(){return t.jsx(Le,{children:t.jsxs("div",{style:{padding:20},children:[t.jsx("h1",{style:{color:"#111",marginBottom:20},children:"Dashboard Overview"}),t.jsxs("div",{style:{display:"grid",gap:20},children:[t.jsx(Vt,{}),t.jsx(Mr,{}),t.jsx(Tr,{})]})]})})}function Er(){const e=Bt(),i=Ee(),[r,a]=ie.useState(!1),[u,d]=ie.useState(!0);ie.useEffect(()=>{localStorage.getItem("isAdmin")==="true"&&a(!0),d(!1)},[]);const l=(F,V)=>{const D="dbeksultan6@gmail.com",N="Medinabexultan_0109",z=F.trim(),p=V.trim();console.log("Attempting login with:",z),z===D&&p===N?(localStorage.setItem("isAdmin","true"),a(!0)):(alert("Invalid credentials"),console.error("Login failed"))},o=()=>{localStorage.removeItem("isAdmin"),a(!1),i("/")};return u?t.jsx("div",{style:{color:"white",padding:50},children:"Loading..."}):r?e.pathname.includes("/project/")?t.jsx(Le,{children:t.jsx(tt,{children:t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})})})}):t.jsx(Le,{children:t.jsxs("div",{className:"admin-layout",children:[t.jsxs("aside",{className:"admin-sidebar",children:[t.jsxs("h2",{className:"brand",children:["D/W ",t.jsx("span",{className:"mono-text",children:"Admin"})]}),t.jsxs("nav",{children:[t.jsxs(De,{to:"/admin",className:`admin-link ${e.pathname==="/admin"?"active":""}`,children:[t.jsx(Qt,{size:18})," Dashboard"]}),t.jsxs(De,{to:"/admin/inquiries",className:`admin-link ${e.pathname==="/admin/inquiries"?"active":""}`,children:[t.jsx(Me,{size:18})," Inquiries"]}),t.jsxs("button",{onClick:o,className:"admin-link logout-btn",children:[t.jsx(Kt,{size:18})," Logout"]}),t.jsx(De,{to:"/",className:"admin-link",children:"Back to Site"})]})]}),t.jsx("main",{className:"admin-content",children:t.jsxs(tt,{children:[t.jsx(ve,{path:"/project/:id",element:t.jsx(ht,{})}),t.jsx(ve,{path:"/",element:t.jsx(Or,{})}),t.jsx(ve,{path:"/inquiries",element:t.jsx(Vt,{})})]})}),t.jsx("style",{jsx:"true",children:`
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
        `})]})}):t.jsx(Br,{onLogin:l})}export{Er as default};
