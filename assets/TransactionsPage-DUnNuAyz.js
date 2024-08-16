import{r as a,j as e,B as c,c as d}from"./index-BoRcZLqF.js";import{B as C,a as N}from"./Balance-CD7vQTJL.js";import{T as m,B as g}from"./arrow-right-orange-Bups30xZ.js";import{D as v,d as y,b as T,C as W,c as L}from"./CustomInputWithButtons-CdIxIyva.js";import{W as B}from"./WithdrawalFundsDialogForm-UZ7rhL5y.js";const D=[{id:0,type:"replenishment",amount:"50"},{id:1,type:"withdrawal",amount:"50"},{id:2,type:"replenishment",amount:"50"},{id:3,type:"withdrawal",amount:"50"},{id:4,type:"withdrawal",amount:"50"},{id:5,type:"replenishment",amount:"50"},{id:6,type:"withdrawal",amount:"50"},{id:7,type:"replenishment",amount:"50"},{id:8,type:"replenishment",amount:"50"},{id:9,type:"withdrawal",amount:"50"}],E=s=>a.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5843 15.3244C16.5843 15.3244 32.5532 18.6279 27.0039 21.8313C22.321 24.5343 6.18243 29.1817 3.92776 27.9809C2.72696 25.7263 7.37436 9.58767 10.0774 4.9048C13.2808 -0.644462 16.5843 15.3244 16.5843 15.3244Z",stroke:"#34C759",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M16.5842 15.3244L3.9277 27.981",stroke:"#34C759",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O=s=>a.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3244 16.5843C15.3244 16.5843 -0.644468 13.2808 4.9048 10.0774C9.58766 7.37436 25.7263 2.72696 27.9809 3.92776C29.1817 6.18242 24.5343 22.321 21.8313 27.0039C18.6279 32.5532 15.3244 16.5843 15.3244 16.5843Z",stroke:"#FF2D55",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.3245 16.5843L27.981 3.92773",stroke:"#FF2D55",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R="_wrapper_1rgdm_1",$="_right_1rgdm_10",b="_title_1rgdm_16",S="_amount_1rgdm_22",h={wrapper:R,right:$,title:b,amount:S},F=s=>{const{className:o="",transaction:n}=s;return e.jsxs(c,{className:d(h.wrapper,{},[o]),children:[e.jsxs(c,{className:h.right,children:[n.type==="replenishment"&&e.jsx(E,{}),n.type==="withdrawal"&&e.jsx(O,{}),e.jsxs(m,{className:h.title,children:[n.type==="replenishment"&&"Пополнение",n.type==="withdrawal"&&"Вывод"]})]}),e.jsxs(m,{className:h.amount,children:[n.amount," TON"]})]})},q="_wrapper_i3wfh_1",I="_scroll-end_i3wfh_15",M="_list-wrapper_i3wfh_19",u={wrapper:q,scrollEnd:I,listWrapper:M},P=s=>{const{className:o=""}=s,[n,l]=a.useState(!1),t=a.useRef(),p=()=>{var r,i;if(t.current){if(((r=t.current)==null?void 0:r.scrollTop)+((i=t.current)==null?void 0:i.clientHeight)+60>=t.current.scrollHeight){l(!0);return}l(!1)}};return a.useEffect(()=>{var r;return(r=t.current)==null||r.addEventListener("scroll",p),()=>{var i;(i=t.current)==null||i.removeEventListener("scroll",p)}},[]),e.jsx(c,{className:d(u.wrapper,{[`${u.scrollEnd}`]:n},[o]),children:e.jsx(c,{ref:t,className:u.listWrapper,children:D.map(r=>e.jsx(F,{transaction:r},`transaction-list-item-${r.id}`))})})},A="_wrapper_15fw6_1",H="_title_15fw6_12",x={wrapper:A,title:H},V=s=>{const{className:o=""}=s;return e.jsxs(c,{className:d(x.wrapper,{},[o]),children:[e.jsx(m,{className:x.title,children:"Транзакции"}),e.jsx(P,{})]})},Z="_form_cp2yq_1",z="_ton-label_cp2yq_7",w={form:Z,tonLabel:z},G=s=>{const{className:o="",isOpen:n,onClose:l}=s,[t,p]=a.useState("1"),r=i=>{p(i)};return e.jsxs(v,{open:n,onClose:l,className:d(w.wrapper,{},[o]),children:[e.jsx(y,{children:"Пополнение"}),e.jsx(T,{children:e.jsxs(c,{className:w.form,children:[e.jsx(W,{value:t,onChange:r}),e.jsx(m,{className:w.tonLabel,children:"TON"})]})}),e.jsx(L,{children:e.jsx(g,{fullWidth:!0,variant:"contained",onClick:l,children:"Купить"})})]})},J="_wrapper_1ha4t_1",K="_actions_1ha4t_8",f={wrapper:J,actions:K},Q=s=>{const{className:o=""}=s,[n,l]=a.useState(!1),[t,p]=a.useState(!1),r=()=>{l(!0)},i=()=>{l(!1)},_=()=>{p(!0)},k=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{className:d(f.wrapper,{},[o]),children:[e.jsx(C,{}),e.jsxs(c,{className:f.actions,children:[e.jsx(g,{fullWidth:!0,variant:"contained",onClick:r,children:"Пополнить"}),e.jsx(g,{fullWidth:!0,variant:"outlined",onClick:_,children:"Вывести"})]})]}),e.jsx(G,{isOpen:n,onClose:i}),e.jsx(B,{isOpen:t,onClose:k})]})},U="_wrapper_qmuih_1",X="_background-ton-coins_qmuih_11",j={wrapper:U,backgroundTonCoins:X},ae=s=>{const{className:o=""}=s;return a.useEffect(()=>{var l;const n=(l=window.Telegram)==null?void 0:l.WebApp;if(n&&n.BackButton){const t=n.BackButton;return window.location.search&&window.location.pathname!=="/"?t.show():t.hide(),t.onClick(()=>{window.history.back()}),()=>{t.offClick()}}},[]),e.jsxs("div",{className:d(j.wrapper,{},[o]),children:[e.jsx("img",{className:j.backgroundTonCoins,src:N,alt:"Задний фон с TON коинами"}),e.jsx(Q,{}),e.jsx(V,{})]})};export{ae as default};
