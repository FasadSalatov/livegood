import{r as n,j as e,B as c,c as d}from"./index-BBoWnwxs.js";import{B as k,a as N}from"./Balance-DSBv0PZ8.js";import{T as m,B as g}from"./arrow-right-orange-DDDBV_Iy.js";import{D as v,d as y,b as L,C as T,c as W}from"./CustomInputWithButtons-DPteP0DE.js";import{W as D}from"./WithdrawalFundsDialogForm-0vznPp9I.js";const E=[{id:0,type:"replenishment",amount:"50"},{id:1,type:"withdrawal",amount:"50"},{id:2,type:"replenishment",amount:"50"},{id:3,type:"withdrawal",amount:"50"},{id:4,type:"withdrawal",amount:"50"},{id:5,type:"replenishment",amount:"50"},{id:6,type:"withdrawal",amount:"50"},{id:7,type:"replenishment",amount:"50"},{id:8,type:"replenishment",amount:"50"},{id:9,type:"withdrawal",amount:"50"}],O=s=>n.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5843 15.3244C16.5843 15.3244 32.5532 18.6279 27.0039 21.8313C22.321 24.5343 6.18243 29.1817 3.92776 27.9809C2.72696 25.7263 7.37436 9.58767 10.0774 4.9048C13.2808 -0.644462 16.5843 15.3244 16.5843 15.3244Z",stroke:"#34C759",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M16.5842 15.3244L3.9277 27.981",stroke:"#34C759",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R=s=>n.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3244 16.5843C15.3244 16.5843 -0.644468 13.2808 4.9048 10.0774C9.58766 7.37436 25.7263 2.72696 27.9809 3.92776C29.1817 6.18242 24.5343 22.321 21.8313 27.0039C18.6279 32.5532 15.3244 16.5843 15.3244 16.5843Z",stroke:"#FF2D55",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M15.3245 16.5843L27.981 3.92773",stroke:"#FF2D55",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$="_wrapper_1rgdm_1",B="_right_1rgdm_10",S="_title_1rgdm_16",b="_amount_1rgdm_22",h={wrapper:$,right:B,title:S,amount:b},F=s=>{const{className:a="",transaction:r}=s;return e.jsxs(c,{className:d(h.wrapper,{},[a]),children:[e.jsxs(c,{className:h.right,children:[r.type==="replenishment"&&e.jsx(O,{}),r.type==="withdrawal"&&e.jsx(R,{}),e.jsxs(m,{className:h.title,children:[r.type==="replenishment"&&"Пополнение",r.type==="withdrawal"&&"Вывод"]})]}),e.jsxs(m,{className:h.amount,children:[r.amount," TON"]})]})},q="_wrapper_i3wfh_1",I="_scroll-end_i3wfh_15",M="_list-wrapper_i3wfh_19",u={wrapper:q,scrollEnd:I,listWrapper:M},P=s=>{const{className:a=""}=s,[r,i]=n.useState(!1),o=n.useRef(),p=()=>{var t,l;if(o.current){if(((t=o.current)==null?void 0:t.scrollTop)+((l=o.current)==null?void 0:l.clientHeight)+60>=o.current.scrollHeight){i(!0);return}i(!1)}};return n.useEffect(()=>{var t;return(t=o.current)==null||t.addEventListener("scroll",p),()=>{var l;(l=o.current)==null||l.removeEventListener("scroll",p)}},[]),e.jsx(c,{className:d(u.wrapper,{[`${u.scrollEnd}`]:r},[a]),children:e.jsx(c,{ref:o,className:u.listWrapper,children:E.map(t=>e.jsx(F,{transaction:t},`transaction-list-item-${t.id}`))})})},H="_wrapper_15fw6_1",V="_title_15fw6_12",x={wrapper:H,title:V},Z=s=>{const{className:a=""}=s;return e.jsxs(c,{className:d(x.wrapper,{},[a]),children:[e.jsx(m,{className:x.title,children:"Транзакции"}),e.jsx(P,{})]})},A="_form_cp2yq_1",z="_ton-label_cp2yq_7",w={form:A,tonLabel:z},G=s=>{const{className:a="",isOpen:r,onClose:i}=s,[o,p]=n.useState("1"),t=l=>{p(l)};return e.jsxs(v,{open:r,onClose:i,className:d(w.wrapper,{},[a]),children:[e.jsx(y,{children:"Пополнение"}),e.jsx(L,{children:e.jsxs(c,{className:w.form,children:[e.jsx(T,{value:o,onChange:t}),e.jsx(m,{className:w.tonLabel,children:"TON"})]})}),e.jsx(W,{children:e.jsx(g,{fullWidth:!0,variant:"contained",onClick:i,children:"Купить"})})]})},J="_wrapper_1ha4t_1",K="_actions_1ha4t_8",j={wrapper:J,actions:K},Q=s=>{const{className:a=""}=s,[r,i]=n.useState(!1),[o,p]=n.useState(!1),t=()=>{i(!0)},l=()=>{i(!1)},_=()=>{p(!0)},C=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{className:d(j.wrapper,{},[a]),children:[e.jsx(k,{}),e.jsxs(c,{className:j.actions,children:[e.jsx(g,{fullWidth:!0,variant:"contained",onClick:t,children:"Пополнить"}),e.jsx(g,{fullWidth:!0,variant:"outlined",onClick:_,children:"Вывести"})]})]}),e.jsx(G,{isOpen:r,onClose:l}),e.jsx(D,{isOpen:o,onClose:C})]})},U="_wrapper_qmuih_1",X="_background-ton-coins_qmuih_11",f={wrapper:U,backgroundTonCoins:X},ae=s=>{const{className:a=""}=s;return e.jsxs("div",{className:d(f.wrapper,{},[a]),children:[e.jsx("img",{className:f.backgroundTonCoins,src:N,alt:"Задний фон с TON коинами"}),e.jsx(Q,{}),e.jsx(Z,{})]})};export{ae as default};
