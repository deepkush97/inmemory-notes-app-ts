(this["webpackJsonpinmemory-notes-app-ts"]=this["webpackJsonpinmemory-notes-app-ts"]||[]).push([[0],{110:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(110),n(59)),s=n(11),l=n(16),j=n(163),d=n(166),u=n(168),b=n(169),O=n(200),h=n(170),p=n(171),f=n(204),m=n(173),x=n(201),g=n(175),v=n(176),y=n(93),w=n.n(y),C=n(50),S=n(29),N=n.n(S),k=n(47),B=n(202),F=n(60),R=n(69),M=n(68),T=new(function(e){Object(R.a)(n,e);var t=Object(M.a)(n);function n(e){var a;return Object(F.a)(this,n),(a=t.call(this,e)).notes=void 0,a.version(1).stores({notes:"++id,title,details,category"}),a.notes=a.table("notes"),a}return n}(n(88).a))("todoDatabase"),D=n(4),I={notes:[],saveNote:function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(){})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteNote:function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(){})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=r.a.createContext(I),G=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(l.a)(n,2),o=r[0],i=r[1];function c(){return s.apply(this,arguments)}function s(){return(s=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.notes.toArray();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){return T.open().catch((function(e){console.error("Open failed: ".concat(e.message))})),c(),function(){T.close()}}),[]);var j={notes:o,saveNote:function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.notes.add(Object(C.a)(Object(C.a)({},t),{},{id:Object(B.a)()}));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteNote:function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.notes.delete(String(t)),c();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return Object(D.jsx)(L.Provider,{value:j,children:t})},W=Object(j.a)({field:{marginBottom:20,display:"block"}}),P=function(){var e=W(),t=Object(s.f)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(""),j=Object(l.a)(c,2),y=j[0],C=j[1],S=Object(a.useState)(!1),N=Object(l.a)(S,2),k=N[0],B=N[1],F=Object(a.useState)(!1),R=Object(l.a)(F,2),M=R[0],T=R[1],I=Object(a.useState)("todo"),G=Object(l.a)(I,2),P=G[0],z=G[1],E=Object(a.useContext)(L).saveNote;return Object(D.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),B(!1),T(!1),""===o&&B(!0),""===y&&T(!0),o&&y&&(E({title:o,details:y,category:P}),t.push("/"))},children:Object(D.jsxs)(d.a,{children:[Object(D.jsx)(u.a,{title:"Create a Note"}),Object(D.jsxs)(b.a,{children:[Object(D.jsx)(O.a,{className:e.field,onChange:function(e){return i(e.target.value)},label:"Note Title",variant:"outlined",fullWidth:!0,required:!0,error:k}),Object(D.jsx)(O.a,{className:e.field,onChange:function(e){return C(e.target.value)},label:"Details",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,required:!0,error:M}),Object(D.jsxs)(h.a,{className:e.field,children:[Object(D.jsx)(p.a,{children:"Note Category"}),Object(D.jsxs)(f.a,{value:P,onChange:function(e){return z(e.target.value)},children:[Object(D.jsx)(m.a,{value:"personal",control:Object(D.jsx)(x.a,{color:"primary"}),label:"Personal"}),Object(D.jsx)(m.a,{value:"todo",control:Object(D.jsx)(x.a,{color:"primary"}),label:"Todo"}),Object(D.jsx)(m.a,{value:"reminders",control:Object(D.jsx)(x.a,{color:"primary"}),label:"Reminder"}),Object(D.jsx)(m.a,{value:"work",control:Object(D.jsx)(x.a,{color:"primary"}),label:"Work"})]})]})]}),Object(D.jsx)(g.a,{children:Object(D.jsx)(v.a,{type:"submit",color:"primary",variant:"contained",endIcon:Object(D.jsx)(w.a,{}),children:"Submit"})})]})})},z=n(95),E=n(71),q=n(177),A=n(181),J=n(179),H=n(180),U=n(178),V=Object(j.a)({deleteBtn:{color:E.a[600]}}),X=function(e){var t=e.deleteConfirmation,n=e.closeDeleteConfirmation,a=e.handleConfirmDelete,r=V();return Object(D.jsxs)(q.a,{open:t,onClose:n,children:[Object(D.jsx)(U.a,{children:"Delete confirmation"}),Object(D.jsx)(J.a,{children:Object(D.jsx)(H.a,{children:"Are you sure want to delete this note?"})}),Object(D.jsxs)(A.a,{children:[Object(D.jsx)(v.a,{onClick:n,color:"default",autoFocus:!0,children:"Cancel"}),Object(D.jsx)(v.a,{onClick:a,className:r.deleteBtn,children:"Confirm"})]})]})},Y=n(182),K=n(30),Q=Object(j.a)((function(e){return{notesGrid:{display:"flex",marginLeft:-e.spacing(2),width:"auto"},notesColumnGrid:{paddingLeft:e.spacing(2),backgroundClip:"padding-box"},divSpaced:{marginBottom:e.spacing(2)},noNotesContainer:{height:"94vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}})),Z=function(){var e=Q(),t=Object(s.f)();return Object(D.jsxs)(Y.a,{className:e.noNotesContainer,children:[Object(D.jsx)(K.a,{variant:"h5",gutterBottom:!0,children:"There is no notes here."}),Object(D.jsx)(v.a,{variant:"outlined",onClick:function(){return t.push("/create")},children:"Create a new note"})]})},$=n(24),_=n(203),ee=n(205),te=n(174),ne=n(186),ae=n(183),re=n(73),oe=n(70),ie=n(72),ce=n(184),se=n(185),le=n(3),je=Object(j.a)((function(e){return Object(_.a)({expand:{transform:"rotate(0deg)",margin:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},content:{minHeight:e.spacing(2)},deleteBtn:{color:E.a[400]},avatar:{backgroundColor:function(e){var t=e.category;return"work"===t?ae.a[400]:"personal"===t?re.a[300]:"todo"===t?oe.a[300]:ie.a[300]}}})})),de=function(e){var t=e.note,n=e.handleDelete,r=je(t),o=Object(a.useState)(!1),i=Object(l.a)(o,2),c=i[0],s=i[1];return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(d.a,{children:[Object(D.jsx)(u.a,{avatar:Object(D.jsx)(ee.a,{className:r.avatar,children:t.category[0].toUpperCase()}),action:Object(D.jsx)(te.a,{className:r.deleteBtn,onClick:function(){return n()},children:Object(D.jsx)(ce.a,{})}),title:t.title,subheader:t.category}),!c&&Object(D.jsx)(b.a,{className:r.content,children:Object(D.jsx)(K.a,{variant:"body2",color:"textSecondary",component:"p",children:t.details.length>30?"".concat(t.details.substr(0,30),"..."):t.details})}),t.details.length>30&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(g.a,{disableSpacing:!0,children:Object(D.jsx)(te.a,{className:Object(le.a)(r.expand,Object($.a)({},r.expandOpen,c)),onClick:function(){s((function(e){return!e}))},"aria-expanded":c,"aria-label":"show more",children:Object(D.jsx)(se.a,{})})}),Object(D.jsx)(ne.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(D.jsx)(b.a,{children:Object(D.jsx)(K.a,{paragraph:!0,variant:"body2",children:t.details})})})]})]})})},ue=Object(j.a)((function(e){return{notesGrid:{display:"flex",marginLeft:-e.spacing(2),width:"auto"},notesColumnGrid:{paddingLeft:e.spacing(2),backgroundClip:"padding-box"},divSpaced:{marginBottom:e.spacing(2)}}})),be=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),c=i[0],s=i[1],j=Object(a.useContext)(L),d=j.notes,u=j.deleteNote,b=ue();return Object(D.jsx)(D.Fragment,{children:d.length>0?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(z.a,{breakpointCols:{default:3,1100:2,700:1},className:b.notesGrid,columnClassName:b.notesColumnGrid,children:d.map((function(e){return Object(D.jsx)("div",{className:b.divSpaced,children:Object(D.jsx)(de,{note:e,handleDelete:function(){return t=e.id,r(!0),void s(t);var t}})},e.id)}))}),Object(D.jsx)(X,{deleteConfirmation:n,closeDeleteConfirmation:function(){return r(!1)},handleConfirmDelete:function(){r(!1),u(c),s("")}})]}):Object(D.jsx)(Z,{})})},Oe=n(94),he=n(187),pe={htmlFontSize:16,fontFamily:'"Roboto Mono", monospace',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700,h1:{fontFamily:'"Roboto Slab", serif'},h2:{fontFamily:'"Roboto Slab", serif'},h3:{fontFamily:'"Roboto Slab", serif'},h4:{fontFamily:'"Roboto Slab", serif'},h5:{fontFamily:'"Roboto Slab", serif'},h6:{fontFamily:'"Roboto Slab", serif'},subtitle1:{fontFamily:'"Roboto Mono", monospace'},subtitle2:{fontFamily:'"Roboto Mono", monospace'},body1:{fontFamily:'"Roboto Mono", monospace'},body2:{fontFamily:'"Roboto Mono", monospace'},button:{fontFamily:'"Roboto Mono", monospace'},caption:{fontFamily:'"Roboto Mono", monospace'},overline:{fontFamily:'"Roboto Mono", monospace'}},fe=Object(a.createContext)({currentTheme:"light",toggleTheme:function(){}}),me=function(e){var t=e.children,n=Object(a.useState)("light"),r=Object(l.a)(n,2),o=r[0],i=r[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("globalThemeType");"light"!==e&&"dark"!==e||i(e)}),[]);var c={currentTheme:o,toggleTheme:function(){var e="dark"===o?"light":"dark";"undefined"!==typeof window&&localStorage.setItem("globalThemeType",e),i(e)}},s=Object(Oe.a)({palette:{type:o},typography:pe});return Object(D.jsx)(fe.Provider,{value:c,children:Object(D.jsx)(he.a,{theme:s,children:t})})},xe=n(198),ge=n(188),ve=n(189),ye=n(190),we=n(199),Ce=Object(j.a)((function(e){return Object(_.a)({appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},navTitle:{transition:e.transitions.create(["display"],{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})},menuButton:{marginLeft:4,marginRight:30},hide:{display:"none"},date:{marginRight:24,marginLeft:"auto"}})})),Se=function(e){var t=e.open,n=e.openSideBar,a=Ce();return Object(D.jsx)(ge.a,{position:"fixed",elevation:0,className:Object(le.a)(a.appBar,Object($.a)({},a.appBarShift,t)),children:Object(D.jsxs)(ve.a,{disableGutters:!0,children:[Object(D.jsx)(te.a,{color:"inherit","aria-label":"open drawer",onClick:n,className:Object(le.a)(a.menuButton,Object($.a)({},a.hide,t)),children:Object(D.jsx)(ye.a,{})}),Object(D.jsx)(K.a,{variant:"h6",noWrap:!0,className:Object(le.a)(a.navTitle,Object($.a)({},a.hide,t)),children:"InMemory Notes"}),Object(D.jsx)(K.a,{className:a.date,children:Object(we.a)(new Date,"do MMMM Y")})]})})},Ne=n(206),ke=n(194),Be=n(172),Fe=n(195),Re=n(196),Me=n(197),Te=n(191),De=n(192),Ie=n(193),Le=Object(j.a)((function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},toolbar:Object(C.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),title:{paddingLeft:e.spacing(2)},active:{background:"#f4f4f4"}}})),Ge=function(e){var t,n,a=e.closeSideBar,r=e.open,o=Le(),i=Object(s.f)(),c=Object(s.g)(),l=[{text:"My Notes",icon:Object(D.jsx)(Te.a,{color:"secondary"}),path:"/"},{text:"Create Note",icon:Object(D.jsx)(De.a,{color:"secondary"}),path:"/create"}];return Object(D.jsxs)(Ne.a,{variant:"permanent",className:Object(le.a)(o.drawer,(t={},Object($.a)(t,o.drawerOpen,r),Object($.a)(t,o.drawerClose,!r),t)),classes:{paper:Object(le.a)((n={},Object($.a)(n,o.drawerOpen,r),Object($.a)(n,o.drawerClose,!r),n))},children:[Object(D.jsxs)("div",{className:o.toolbar,children:[Object(D.jsx)(K.a,{variant:"h6",className:o.title,children:"InMemory Notes"}),Object(D.jsx)(te.a,{onClick:a,children:Object(D.jsx)(Ie.a,{})})]}),Object(D.jsx)(ke.a,{}),Object(D.jsx)(Be.a,{children:l.map((function(e){return Object(D.jsxs)(Fe.a,{button:!0,onClick:function(){return i.push(e.path)},className:c.pathname===e.path?o.active:"",children:[Object(D.jsx)(Re.a,{children:e.icon}),Object(D.jsx)(Me.a,{primary:e.text})]},e.text)}))})]})},We=Object(j.a)((function(e){return Object(_.a)({root:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)}})})),Pe=function(e){var t=e.children,n=We(),r=Object(a.useState)(!1),o=Object(l.a)(r,2),i=o[0],c=o[1];return Object(D.jsxs)("div",{className:n.root,children:[Object(D.jsx)(xe.a,{}),Object(D.jsx)(Se,{openSideBar:function(){return c(!0)},open:i}),Object(D.jsx)(Ge,{closeSideBar:function(){return c(!1)},open:i}),Object(D.jsxs)("main",{className:n.content,children:[Object(D.jsx)("div",{className:n.toolbar}),t]})]})};var ze=function(){return Object(D.jsx)(G,{children:Object(D.jsx)(me,{children:Object(D.jsx)(c.a,{basename:"/inmemory-notes-app-ts",children:Object(D.jsx)(Pe,{children:Object(D.jsxs)(s.c,{children:[Object(D.jsx)(s.a,{exact:!0,path:"/",children:Object(D.jsx)(be,{})}),Object(D.jsx)(s.a,{path:"/create",children:Object(D.jsx)(P,{})})]})})})})})};i.a.render(Object(D.jsx)(ze,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.b040599f.chunk.js.map