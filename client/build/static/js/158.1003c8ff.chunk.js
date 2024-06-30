"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,s){s(2791);var t=s(184);n.Z=function(){return(0,t.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,s){s.d(n,{Z:function(){return l}});s(2791);var t=s(6355),r=s(3495),i=s(1087),o=s(184),l=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.tBk,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.V2E,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/viveknair_6915",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.Zf_,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://www.linkedin.com/in/vivek-nair-5073b2251",target:"_blank",rel:"noreferrer",children:"Vivek"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return x}});var t=s(9439),r=s(2791),i=s(7689),o=s(1087),l=s(3495),a=s(9434),c=s(5318),d=s(3853),u=s(1213),h=s(456),m=s(184),x=function(){var e=(0,r.useState)(!1),n=(0,t.Z)(e,2),s=n[0],x=n[1],j=(0,a.I0)(),p=(0,i.s0)(),f=(0,r.useState)(localStorage.getItem("token")||""),v=(0,t.Z)(f,2),g=v[0],k=(v[1],(0,r.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),N=(0,t.Z)(k,2),b=N[0];N[1];return(0,m.jsxs)("header",{children:[(0,m.jsxs)("nav",{className:s?"nav-active":"",children:[(0,m.jsx)("h2",{className:"nav-logo",children:(0,m.jsx)(o.OL,{to:"/",children:"DocFinder Pro"})}),(0,m.jsxs)("ul",{className:"nav-links",children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/",children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&b.isAdmin&&(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!b.isAdmin&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,m.jsx)("li",{children:(0,m.jsx)("span",{className:"btn",onClick:function(){j((0,c.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,m.jsxs)("div",{className:"menu-icons",children:[!s&&(0,m.jsx)(d.cur,{className:"menu-open",onClick:function(){x(!0)}}),s&&(0,m.jsx)(u.ySC,{className:"menu-close",onClick:function(){x(!1)}})]})]})}},3158:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var t=s(4165),r=s(5861),i=s(9439),o=s(2791),l=s(4942),a=s(1413),c=s(3263),d=s(3402),u=s(4373),h=s(184),m=function(e){var n=e.setModalOpen,s=e.ele,m=(0,o.useState)({date:"",time:""}),x=(0,i.Z)(m,2),j=x[0],p=x[1],f=function(e){var n=e.target,s=n.name,t=n.value;return p((0,a.Z)((0,a.Z)({},j),{},(0,l.Z)({},s,t)))},v=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(r){var i,o,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(c.Z.post("/appointment/bookappointment",{doctorId:null===s||void 0===s||null===(i=s.userId)||void 0===i?void 0:i._id,date:j.date,time:j.time,doctorname:"".concat(null===s||void 0===s||null===(o=s.userId)||void 0===o?void 0:o.firstname," ").concat(null===s||void 0===s||null===(l=s.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:n(!1),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"modal flex-center",children:(0,h.jsxs)("div",{className:"modal__content",children:[(0,h.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,h.jsx)(u.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,h.jsx)("div",{className:"register-container flex-center book",children:(0,h.jsxs)("form",{className:"register-form",children:[(0,h.jsx)("input",{type:"date",name:"date",className:"form-input",value:j.date,onChange:f}),(0,h.jsx)("input",{type:"time",name:"time",className:"form-input",value:j.time,onChange:f}),(0,h.jsx)("button",{type:"submit",className:"btn form-btn",onClick:v,children:"book"})]})})]})})})},x=function(e){var n,s,t,r,l=e.ele,a=(0,o.useState)(!1),c=(0,i.Z)(a,2),u=c[0],x=c[1],j=(0,o.useState)(localStorage.getItem("token")||""),p=(0,i.Z)(j,2),f=p[0];p[1];return(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-img flex-center",children:(0,h.jsx)("img",{src:(null===l||void 0===l||null===(n=l.userId)||void 0===n?void 0:n.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,h.jsxs)("h3",{className:"card-name",children:["Dr. ",(null===l||void 0===l||null===(s=l.userId)||void 0===s?void 0:s.firstname)+" "+(null===l||void 0===l||null===(t=l.userId)||void 0===t?void 0:t.lastname)]}),(0,h.jsxs)("p",{className:"specialization",children:[(0,h.jsx)("strong",{children:"Specialization: "}),null===l||void 0===l?void 0:l.specialization]}),(0,h.jsxs)("p",{className:"experience",children:[(0,h.jsx)("strong",{children:"Experience: "}),null===l||void 0===l?void 0:l.experience,"yrs"]}),(0,h.jsxs)("p",{className:"fees",children:[(0,h.jsx)("strong",{children:"Fees per consultation: "}),"$ ",null===l||void 0===l?void 0:l.fees]}),(0,h.jsxs)("p",{className:"phone",children:[(0,h.jsx)("strong",{children:"Phone: "}),null===l||void 0===l||null===(r=l.userId)||void 0===r?void 0:r.mobile]}),(0,h.jsx)("button",{className:"btn appointment-btn",onClick:function(){if(""===f)return d.Am.error("You must log in first");x(!0)},children:"Book Appointment"}),u&&(0,h.jsx)(m,{setModalOpen:x,ele:l})]})},j=s(6794),p=s(3841),f=s(4971),v=s(3200),g=s(9434),k=s(5318),N=s(3321),b=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),s=n[0],l=n[1],a=(0,g.I0)(),c=(0,g.v9)((function(e){return e.root})).loading,d=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((0,k.K4)(!0)),e.next=3,(0,f.Z)("/doctor/getalldoctors");case 3:n=e.sent,l(n),a((0,k.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){d()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{}),c&&(0,h.jsx)(v.Z,{}),!c&&(0,h.jsxs)("section",{className:"container doctors",children:[(0,h.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),s.length>0?(0,h.jsx)("div",{className:"doctors-card-container",children:s.map((function(e){return(0,h.jsx)(x,{ele:e},e._id)}))}):(0,h.jsx)(N.Z,{})]}),(0,h.jsx)(j.Z,{})]})}}}]);
//# sourceMappingURL=158.1003c8ff.chunk.js.map