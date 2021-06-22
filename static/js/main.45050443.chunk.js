(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,i,a,c,d,l,s,b,u,j,g,h,x,O,f,p,m,k,v,w=t(1),y=t.n(w),D=t(12),C=t.n(D),z=(t(21),t(16)),S=t(6),T=t(5),F=t(2),I=t(3),N=I.b.form(r||(r=Object(F.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n    margin: 20px;\n\n    @media (max-width: 610px) {\n        grid-template-columns: 1fr;\n    }\n"]))),A=I.b.input(o||(o=Object(F.a)(["\n    padding: 10px;\n    border: 1px solid #ddd;\n    color: hsl(0, 0%, 60%);\n    outline-color: rgb(65, 65, 65);\n    outline-width: thin;\n"]))),H=I.b.button(i||(i=Object(F.a)(["\n    background: hsl(180, 100%, 25%);\n    color: white;\n    padding: 10px;\n    border: none;\n\n    &:hover {\n        background: hsl(180, 100%, 30%);\n        transform: scale(1.05);\n        transition: 0.5s;\n    }\n\n    &:active {\n        background: hsl(180, 100%, 50%);\n        transform: scale(1.01);\n        transition: 0.5s;\n    }\n"]))),J=t(0),L=function(n){var e=n.addNewTask,t=Object(w.useState)(""),r=Object(T.a)(t,2),o=r[0],i=r[1],a=Object(w.useRef)(null);return Object(J.jsxs)(N,{onSubmit:function(n){n.preventDefault();var t=o.trim();t&&(e(t),i(""))},children:[Object(J.jsx)(A,{ref:a,value:o,required:!0,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return i(e.value)}}),Object(J.jsx)(H,{onClick:function(){return a.current.focus()},children:"Dodaj zadanie"})]})},P=I.b.ul(a||(a=Object(F.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),B=I.b.li(c||(c=Object(F.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 20px;\n    align-items: center;\n    margin: 0 20px;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n\n    ","\n"])),(function(n){return n.hidden&&Object(I.a)(d||(d=Object(F.a)(["\n      display: none;\n    "])))})),E=I.b.span(l||(l=Object(F.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(I.a)(s||(s=Object(F.a)(["\n      text-decoration-line: line-through;\n    "])))})),M=I.b.button(b||(b=Object(F.a)(['\n    width: 30px;\n    height: 30px;\n    color: white;\n    border: none;\n    font-family: "Material Icons Outlined";\n    font-size: 16px;\n    padding: 0;\n\n      ',"\n\n        &:hover  {\n          background-color: hsl(120, 100%, 35%);\n          transition: 1s;\n        }\n\n        &:active {\n          background-color: hsl(120, 100%, 45%);\n          transition: 1s;\n        }\n\n      ","\n"])),(function(n){return n.toggleDone&&Object(I.a)(u||(u=Object(F.a)(["\n          background-color: green;\n      "])))}),(function(n){return n.remove&&Object(I.a)(j||(j=Object(F.a)(["\n        background-color: crimson;\n\n        &:hover {\n          background-color: hsl(348, 83%, 57%);\n        }\n\n        &:active {\n          background-color: hsl(348, 83%, 67%);\n          transition: 1s;\n        }\n      "])))})),U=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(J.jsx)(P,{children:e.map((function(n){return Object(J.jsxs)(B,{hidden:n.done&&t,children:[Object(J.jsx)(M,{toggleDone:!0,onClick:function(){return o(n.id)},children:n.done?"done":""}),Object(J.jsx)(E,{done:n.done,children:n.content}),Object(J.jsx)(M,{remove:!0,onClick:function(){return r(n.id)},children:"delete"})]},n.id)}))})},q=I.b.div(g||(g=Object(F.a)(["\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 20px;\n\n    @media (max-width: 790px){\n        justify-content: center;\n        margin-right: 0;\n    }\n\n    @media (max-width: 610px) {\n        flex-direction: column;\n    }\n"]))),R=I.b.button(h||(h=Object(F.a)(["\n    color: teal;\n    border: none;\n    transition: color 0.5s;\n    background-color: transparent;\n\n    @media (max-width: 790px){\n        margin: 10px;\n    }\n\n    &:hover {\n        color: hsl(180, 100%, 35%);\n    }\n\n    ","\n"])),(function(n){return n.disabled&&Object(I.a)(x||(x=Object(F.a)(["\n        color: rgb(203, 203, 203);\n    "])))})),Z=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone,i=n.deleteAllTasks;return Object(J.jsxs)(q,{children:[" ",e.length>0&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R,{onClick:r,disabled:e.every((function(n){return!n.done})),children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(J.jsx)(R,{onClick:o,disabled:e.every((function(n){return n.done})),children:t?"":"Zaznacz wszystkie"}),Object(J.jsx)(R,{onClick:i,children:"Usu\u0144 wszystkie"})]})]})},G=I.b.section(O||(O=Object(F.a)(["\n    display: grid;\n    margin: 10px;\n     box-shadow: 0 0 5px hsl(0, 0%, 86%);\n    background-color: white;\n"]))),K=I.b.header(f||(f=Object(F.a)(["\ndisplay: grid;\n    grid-template-columns: auto auto;\n    border-bottom: 3px solid rgb(241 240 242);\n\n    @media (max-width: 790px) {\n        grid-template-columns: 1fr;\n    }\n"]))),Q=I.b.div(p||(p=Object(F.a)(["\n    background-color: white;\n"]))),V=I.b.h2(m||(m=Object(F.a)(["\n    margin-left: 20px;\n\n    @media (max-width: 790px) {\n        text-align: center;\n        margin-left: 0;\n    }\n"]))),W=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(J.jsxs)(G,{children:[Object(J.jsxs)(K,{children:[Object(J.jsx)(V,{children:e}),r]}),Object(J.jsx)(Q,{children:t})]})},X=I.b.header(k||(k=Object(F.a)(["\n    margin: 10px;\n    padding-top: 20px;\n\n    @media (max-width: 790px) {\n        text-align: center;\n    }\n"]))),Y=function(n){var e=n.title;return Object(J.jsx)(X,{children:Object(J.jsx)("h1",{className:"header",children:e})})},$=I.b.main(v||(v=Object(F.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n"]))),_=function(n){var e=n.children;return Object(J.jsx)($,{children:e})};var nn=function(){var n=Object(w.useState)(!1),e=Object(T.a)(n,2),t=e[0],r=e[1],o=Object(w.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),i=Object(T.a)(o,2),a=i[0],c=i[1];return Object(w.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]),Object(J.jsxs)(_,{children:[Object(J.jsx)(Y,{title:"Lista zada\u0144"}),Object(J.jsx)(W,{title:"Dodaj nowe zadanie",body:Object(J.jsx)(L,{addNewTask:function(n){c((function(e){return[].concat(Object(z.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(J.jsx)(W,{title:"Lista zada\u0144",body:Object(J.jsx)(U,{tasks:a,hideDone:t,removeTask:function(n){c((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){c((function(e){return e.map((function(e){return e.id===n?Object(S.a)(Object(S.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(J.jsx)(Z,{tasks:a,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:function(){c((function(n){return n.map((function(n){return Object(S.a)(Object(S.a)({},n),{},{done:!0})}))}))},deleteAllTasks:function(){c([])}})})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),i(n),a(n)}))};C.a.render(Object(J.jsx)(y.a.StrictMode,{children:Object(J.jsx)(nn,{})}),document.getElementById("root")),en()}},[[25,1,2]]]);
//# sourceMappingURL=main.45050443.chunk.js.map