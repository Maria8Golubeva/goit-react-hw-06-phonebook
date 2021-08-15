(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={listItem:"styles_listItem__1Z_SQ",itemText:"styles_itemText__3rpva",deleteBtn:"styles_deleteBtn__1wz6o"}},18:function(e,t,n){e.exports={filterLabel:"styles_filterLabel__1r8wk",filterInput:"styles_filterInput__1SmmO"}},23:function(e,t,n){e.exports={contactsList:"styles_contactsList__1L6K7"}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(11),i=n.n(s),l=n(3),o=n(13),u=n(9),b=n(4),j=Object(b.b)("contacts/add",(function(e){return{payload:{id:e.id,name:e.name,number:e.number}}})),d=Object(b.b)("contacts/delete");var m=Object(b.c)([],(a={},Object(u.a)(a,j,(function(e,t){var n=t.payload;return[].concat(Object(o.a)(e),[n])})),Object(u.a)(a,d,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),f=Object(b.b)("filter/change"),O=Object(b.c)("",Object(u.a)({},f,(function(e,t){return t.payload}))),p=n(2),h=n(20),x=n.n(h),_=n(5),v=n(21),g={key:"contacts",storage:n.n(v).a,blacklist:["filter"]},y=[].concat(Object(o.a)(Object(b.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),[x.a]),L=Object(p.b)({contacts:m,filter:O}),N=Object(_.g)(g,L),w=Object(b.a)({reducer:N,middleware:y,devTools:!1}),C=Object(_.h)(w),k=n(22),I=(n(35),n(23)),B=n.n(I),A=n(1);var S=function(e){var t=e.children;return Object(A.jsx)("ul",{className:B.a.contactsList,children:t})},z=n(19),J=function(e){return e.contacts},T=function(e){var t=e.filter;return J(e).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},Z=n(6),F=n.n(Z),M=n(7),q=n.n(M);var D=function(){var e=Object(r.useState)(""),t=Object(z.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(z.a)(c,2),i=s[0],o=s[1],u=Object(l.d)(J),b=Object(l.c)(),d=function(e){switch(e.target.name){case"name":a(e.target.value);break;case"number":o(e.target.value);break;default:return}},m=function(){a(""),o("")},f=F.a.generate(),O=F.a.generate();return Object(A.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u.map((function(e){return e.name.toLowerCase()})).find((function(e){return e===n.toLowerCase()})))return alert("please change name"),void a("");var t={id:F.a.generate(),name:n,number:i};b(j(t)),m()},children:[Object(A.jsxs)("label",{className:q.a.formLabel,htmlFor:f,children:["Name",Object(A.jsx)("input",{id:f,className:q.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:d,value:n,required:!0})]}),Object(A.jsxs)("label",{className:q.a.formLabel,htmlFor:O,children:["Number",Object(A.jsx)("input",{id:O,className:q.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:d,value:i,required:!0})]}),Object(A.jsx)("button",{className:q.a.submitBtn,type:"submit",children:"Add Contact"})]})},Q=function(e){return e.filter},E=n(18),G=n.n(E);var K=function(){var e=Object(l.d)(Q),t=Object(l.c)(),n=F.a.generate();return Object(A.jsxs)("label",{className:G.a.filterLabel,htmlFor:n,children:["Search",Object(A.jsx)("input",{id:n,className:G.a.filterInput,type:"text",name:"filter",value:e,onChange:function(e){return t(f(e.target.value))}})]})},W=n(14),$=n.n(W);var H=function(){var e=Object(l.d)(T),t=Object(l.c)();return e.map((function(e){return Object(A.jsxs)("li",{className:$.a.listItem,children:[Object(A.jsxs)("p",{className:$.a.itemText,children:[e.name,": ",e.number]}),Object(A.jsx)("button",{className:$.a.deleteBtn,type:"button",onClick:function(){return t(d(e.id))},children:"Delete"})]},e.id)}))};var P=Object(l.b)(null)((function(){return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(D,{}),Object(A.jsx)(K,{}),Object(A.jsx)(S,{children:Object(A.jsx)(H,{})})]})}));n(45);i.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(l.a,{store:w,children:Object(A.jsx)(k.a,{loading:null,persistor:C,children:Object(A.jsx)(P,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={submitBtn:"styles_submitBtn__1iQGJ",formLabel:"styles_formLabel__2x8sy",formInput:"styles_formInput__3pWMp"}}},[[46,1,2]]]);
//# sourceMappingURL=main.ff2b883b.chunk.js.map