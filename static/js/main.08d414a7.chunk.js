(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{32:function(t,e,c){},33:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(13),s=c.n(a),i=c(6),o=c(9),r=c(2),l=(c(32),c(8)),u=c(3),j=c(7),b=(c(33),c(1)),O=function(t){var e=+t.match.params.id,c=Object(n.useState)(["",""]),a=Object(j.a)(c,2),s=a[0],r=a[1],O=Object(n.useState)(""),d=Object(j.a)(O,2),h=d[0],m=d[1],f=Object(n.useState)(!0),p=Object(j.a)(f,2),_=p[0],v=p[1],x=Object(n.useState)(""),N=Object(j.a)(x,2),y=N[0],g=N[1],k=Object(n.useState)(""),C=Object(j.a)(k,2),S=C[0],E=C[1],w=Object(i.c)((function(t){return t.contacts})),A=Object(n.useState)(w.find((function(t){return t.id===e}))),B=Object(j.a)(A,2),D=B[0],I=B[1],T=Object.keys(D);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Contact Info"}),Object(b.jsx)(o.b,{className:"contact__link",to:"/",children:"Back to contacts list"}),Object(b.jsx)("button",{className:"contact__back",type:"button",onClick:function(){return function(t){var e=confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f?");""!==t[0]&&e&&I(Object(u.a)(Object(u.a)({},D),{},Object(l.a)({},t[0],t[1])))}(s)},children:"Back"}),D&&Object(b.jsxs)("div",{className:"contact__info",children:[T.map((function(t){return Object(b.jsxs)("div",{className:"contact__fields",children:[Object(b.jsx)("div",{className:"contact__field",children:t}),Object(b.jsx)("input",{className:"contact__info",value:D[t],onClick:function(){return g(t)}}),t===y&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{className:"contact__info",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 ".concat(t),value:S,onChange:function(t){var e=t.target;E(e.value)}}),Object(b.jsx)("button",{className:"contact__change",disabled:0===S.length,type:"button",onClick:function(){return function(t){r([t,D[t]]),confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?")&&I(Object(u.a)(Object(u.a)({},D),{},Object(l.a)({},t,S))),E("")}(t)},children:"change"}),Object(b.jsx)("button",{className:"contact__delete-key",type:"button",onClick:function(){return function(t){r([t,D[t]]),confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?")&&(delete D[t],I(Object(u.a)({},D)))}(t)},children:"delete"})]})]},t)})),Object(b.jsxs)("div",{className:"contact__create-field",children:[Object(b.jsx)("h2",{children:"Create new field"}),Object(b.jsx)("input",{className:"contact__create",type:"text",value:h,placeholder:"New Field",onChange:function(t){var e=t.target;m(e.value),v(!0)}}),Object(b.jsx)("button",{className:"contact__create-button",type:"button",onClick:function(){if(h.includes(":")){var t={key:h.split(":")[0],value:h.split(":")[1]};t.key.trim().length>0&&t.value.trim().length>0?(I(Object(u.a)(Object(u.a)({},D),{},Object(l.a)({},t.key,t.value))),m("")):v(!1)}else v(!1)},children:"Add new field"}),!_&&Object(b.jsx)("p",{style:{color:"red"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432 \u0432\u0438\u0434\u0435 key:value"})]})]})]})},d=c(19),h=c(22),m="CREATE_CONTACT",f="REMOVE_CONTACT",p="ADD_FIELD",_={contacts:Object(d.a)([{id:1,name:"Alla Malvina",username:"Samantha",email:"Nathan@yesenia.net",phone:"1-463-123-4447"},{id:2,name:"Samson Sim",username:"Samantha",email:"Nathan@yesenia.net",phone:"1-463-123-4447"},{id:3,name:"Sasha Bauch",username:"Samantha",email:"Nathan@yesenia.net",phone:"1-463-123-4447"},{id:4,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",phone:"1-463-123-4447"},{id:5,name:"Igor Loger",username:"Samantha",email:"Nathan@yesenia.net",phone:"1-463-123-4447"}])},v=Object(h.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(u.a)(Object(u.a)({},t),{},{contacts:[].concat(Object(d.a)(t.contacts),[e.value])});case f:return Object(u.a)(Object(u.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==e.value}))});case p:return Object(u.a)(Object(u.a)({},t),{},{contacts:t.contacts.map((function(t){var c=e.id,n=e.key,a=e.value;return t.id===c?Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},n,a)):t}))});default:return Object(u.a)({},t)}})),x=(c(39),function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.contacts})),c=Object(n.useState)(""),a=Object(j.a)(c,2),s=a[0],o=a[1],r=Object(n.useState)(""),l=Object(j.a)(r,2),u=l[0],O=l[1],d=Object(n.useState)(""),h=Object(j.a)(d,2),f=h[0],p=h[1],_=function(){var c={id:e.length+1,name:s,email:u,phone:f};""===c.name.trim()?alert("Invalid Name"):t({type:m,value:c})};return Object(b.jsxs)("form",{className:"contact__form",onSubmit:function(t){t.preventDefault(),_()},children:[Object(b.jsx)("input",{className:"contact__input",type:"text",placeholder:"Name",value:s,onChange:function(t){var e=t.target;return o(e.value)}}),Object(b.jsx)("input",{className:"contact__input",type:"email",placeholder:"Email",value:u,onChange:function(t){var e=t.target;return O(e.value)}}),Object(b.jsx)("input",{className:"contact__input",type:"tel",placeholder:"Phone",value:f,onChange:function(t){var e=t.target;return p(e.value)}}),Object(b.jsx)("button",{className:"contact__button",type:"submit",children:"Create contact"})]})}),N=(c(40),function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.contacts})),c=function(e){confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442?")&&t({type:f,value:e})};return Object(b.jsx)("ul",{className:"contact__list",children:e.map((function(t){return Object(b.jsxs)("li",{className:"contact__item",children:[t.name,Object(b.jsxs)("div",{className:"contact__buttons",children:[Object(b.jsx)(o.b,{to:"/".concat(t.id),className:"contact__link",children:"Contact info"}),Object(b.jsx)("button",{className:"contact__delete",type:"button",onClick:function(){return c(t.id)},children:"Delete contact"})]})]},t.id)}))})}),y=(c(41),function(){var t=Object(i.c)((function(t){return t.contacts}));return Object(b.jsxs)("div",{className:"contacts__page",children:[Object(b.jsx)("h1",{className:"contacts__title",children:"Contacts Page"}),Object(b.jsxs)("div",{className:"contacts__sector",children:[t.length>0&&Object(b.jsx)(N,{}),Object(b.jsx)(x,{})]})]})}),g=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,children:Object(b.jsx)(y,{})}),Object(b.jsx)(r.a,{path:"/:id",component:O})]})})};s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(i.a,{store:v,children:Object(b.jsx)(g,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.08d414a7.chunk.js.map