(this["webpackJsonptask-hub"]=this["webpackJsonptask-hub"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(10),o=n.n(i),s=(n(95),n(24)),j=n(16),l=(n(96),n(137)),d=n(139),u=n(78),b=n(140),O=n(135),p=Object(O.a)((function(){return{nav:{display:"flex",justifyContent:"space-between"}}})),m=n(141),f=n(142),x="TASK",h="COLUMN",g="/TaskHub/",v=function(){var e=p();return Object(c.jsx)(l.a,{position:"fixed",children:Object(c.jsxs)(d.a,{className:e.nav,children:[Object(c.jsx)(u.a,{variant:"h6",children:"Taskhub"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{to:g,color:"inherit",component:s.c,children:Object(c.jsx)(m.a,{})}),Object(c.jsx)(b.a,{href:"https://github.com/kingfishergod/".concat(g),color:"inherit",children:Object(c.jsx)(f.a,{})})]})]})})},y=n(17),C=n(156),D=n(143),k=n(145),I=n(144),T=Object(O.a)((function(){return{projectsHeader:{display:"flex",justifyContent:"space-between"},projectDivider:{height:2,marginTop:".5em",marginBottom:"2em"}}})),E=function(e){var t=e.toggleModal,n=T();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:n.projectsHeader,children:[Object(c.jsx)(u.a,{variant:"h6",children:"Projects"})," ",Object(c.jsx)(D.a,{onClick:t,startIcon:Object(c.jsx)(I.a,{}),children:" Add Project "})]}),Object(c.jsx)(k.a,{className:n.projectDivider})]})},N=n(7),S=n(150),P=n(151),A=n(152),M=n(153),w=n(154),R=n(155),W=Object(O.a)((function(e){return{projectCardActions:{display:"flex",justifyContent:"space-between"},projectCard:{display:"flex",flexDirection:"column"},projectCardContent:{flexGrow:1}}})),L=n(40),B=n(162),U=n(146),_=n(147),H=n(158),F=n(148),J=Object(O.a)((function(e){return{input:{marginBottom:e.spacing(1)},title:{textAlign:"center"}}})),K=function(e){var t=e.id,n=e.name,r=e.title,i=e.toggleModal,o=e.submit,s=e.open,l=J(),d=Object(j.f)(),u=Object(a.useState)({name:n}),b=Object(y.a)(u,2),O=b[0],p=b[1];Object(a.useEffect)((function(){p({name:n})}),[s,n]);return Object(c.jsxs)(B.a,{fullWidth:!0,open:s,onClose:i,children:[Object(c.jsxs)(U.a,{className:l.title,children:["".concat(r," Project")," "]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(Object(N.a)({id:t},O),t?i:d.push),p({name:""})},children:[Object(c.jsx)(_.a,{children:Object(c.jsx)(H.a,{onChange:function(e){var t=e.target,n=t.value,c=t.name;p((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(L.a)({},c,n))}))},required:!0,className:l.input,label:"Name",id:"name",name:"name",fullWidth:!0,value:O.name})}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)(D.a,{onClick:i,type:"button",color:"primary",children:[" ","Cancel"," "]}),Object(c.jsxs)(D.a,{type:"submit",color:"primary",children:[" ","".concat(r," Project")," "]})]})]})]})},V=n(149),q=function(e){var t=e.handleDelete,n=e.open,a=e.item,r=e.toggleAlert;return Object(c.jsxs)(B.a,{open:n,onClose:r,children:[Object(c.jsxs)(U.a,{children:["Delete ".concat(a)," "]}),Object(c.jsxs)(_.a,{children:[" ",Object(c.jsx)(V.a,{children:"Are you sure you want to delete this ".concat(a.toLowerCase(),"?")})," "]}),Object(c.jsxs)(F.a,{children:[Object(c.jsx)(D.a,{onClick:t,color:"primary",children:" Yes"}),Object(c.jsx)(D.a,{onClick:r,color:"primary",children:" No"})]})]})},z="ADDPROJECT",G="DELETEPROJECT",X="UPDATEPROJECT",Y=n(161),Q=n(14),Z="ADDCOLUMN",$="REMOVECOLUMN",ee="UPDATECOLUMN",te="REORDERCOLUMNS",ne=function(e,t,n){return function(c){c({type:$,payload:{id:e,field:t}}),n()}},ce="ADDTASK",ae="UPDATETASK",re="REMOVETASKS",ie="REORDERTASKS",oe=function(e,t,n){return function(c){c({type:re,payload:{id:e,field:t}}),n()}},se={deleteProject:function(e,t){return function(n){n({type:G,payload:e}),t()}},updateProject:function(e,t){return function(n){n({type:X,payload:e}),t()}},removeColumns:ne,removeTasks:oe},je=Object(Q.b)(null,se)((function(e){var t=e.id,n=e.name,r=e.deleteProject,i=e.updateProject,o=e.removeColumns,j=e.removeTasks,l=W(),d=Object(a.useState)(!1),O=Object(y.a)(d,2),p=O[0],m=O[1],f=Object(a.useState)(!1),x=Object(y.a)(f,2),h=x[0],v=x[1],C=function(){return m((function(e){return!e}))},k=function(){return v((function(e){return!e}))},I=function(){return v(!1)};return Object(c.jsxs)(S.a,{item:!0,xs:12,sm:6,md:4,children:[Object(c.jsx)(q,{handleDelete:function(){j(t,"projectID",I),o(t,"projectID",I),r(t,I)},item:"Project",open:h,toggleAlert:k}),Object(c.jsx)(K,{open:p,submit:i,toggleModal:C,title:"Edit",id:t,name:n}),Object(c.jsxs)(P.a,{className:l.projectCard,children:[Object(c.jsx)(A.a,{className:l.projectCardContent,children:Object(c.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n})}),Object(c.jsxs)(M.a,{className:l.projectCardActions,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{onClick:C,children:Object(c.jsx)(w.a,{})}),Object(c.jsx)(b.a,{onClick:k,children:Object(c.jsx)(R.a,{})})]}),Object(c.jsx)(D.a,{to:"".concat(g,"project/").concat(t),type:"button",component:s.b,children:"View"})]})]})]},t)})),le=function(e){var t=e.projects;return Object(c.jsx)("div",{children:Object(c.jsx)(S.a,{container:!0,spacing:2,children:t.map((function(e){return Object(c.jsx)(je,Object(N.a)({},e),e.id)}))})})},de={addProject:function(e,t){return function(n){e.id=Object(Y.a)(),n({type:z,payload:e}),t("".concat(g,"project/").concat(e.id))}}},ue=Object(Q.b)((function(e){return{projects:e.projects.projects}}),de)((function(e){var t=e.projects,n=e.addProject,r=Object(a.useState)(!1),i=Object(y.a)(r,2),o=i[0],s=i[1],j=function(){return s((function(e){return!e}))};return Object(c.jsxs)(C.a,{component:"main",maxWidth:"md",children:[Object(c.jsx)("div",{children:Object(c.jsx)(K,{id:"",open:o,submit:n,name:"",description:"",toggleModal:j,title:"Add"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{toggleModal:j}),Object(c.jsx)(le,{projects:t})]})]})})),be=n(159),Oe=function(e){var t=e.open,n=e.toggleModal,r=e.name,i=e.title,o=e.submit,s=e.id,l=Object(a.useState)({name:r}),d=Object(y.a)(l,2),u=d[0],b=d[1],O=Object(j.g)().id;Object(a.useEffect)((function(){b({name:r})}),[t,r]);var p=J();return Object(c.jsxs)(B.a,{fullWidth:!0,open:t,onClose:n,children:[Object(c.jsxs)(U.a,{className:p.title,children:["".concat(i," Column")," "]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(Object(N.a)(Object(N.a)({id:s},u),{},{projectID:O,type:h}),n),!s&&b({name:""})},children:[Object(c.jsx)(_.a,{children:Object(c.jsx)(H.a,{onChange:function(e){var t=e.target.value;b({name:t})},required:!0,className:p.input,label:"Name",id:"name",name:"name",fullWidth:!0,value:u.name})}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)(D.a,{onClick:n,type:"button",color:"primary",children:[" ","Cancel"," "]}),Object(c.jsxs)(D.a,{type:"submit",color:"primary",children:[" ","".concat(i," Column")," "]})]})]})]})},pe={removeColumns:ne,updateColumn:function(e,t){return function(n){n({type:ee,payload:e}),t()}},removeTasks:oe},me=Object(Q.b)(null,pe)((function(e){var t=e.name,n=e.projectID,r=e.removeColumns,i=e.id,o=e.updateColumn,s=e.removeTasks,j=Object(a.useState)(!1),l=Object(y.a)(j,2),d=l[0],O=l[1],p=Object(a.useState)(!1),m=Object(y.a)(p,2),f=m[0],x=m[1],h=function(){return O((function(e){return!e}))},g=function(){return x((function(e){return!e}))};return Object(c.jsxs)(be.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(c.jsx)(Oe,{id:i,projectID:n,open:f,toggleModal:g,name:t,title:"Edit",submit:o}),Object(c.jsx)(q,{open:d,handleDelete:function(){r(i,"id",h),s(i,"columnID",h)},toggleAlert:h,item:"Column"}),Object(c.jsxs)(u.a,{style:{overflow:"hidden",textOverflow:"ellipsis"},variant:"h6",children:[" ",t,"  "]}),Object(c.jsxs)(be.a,{display:"flex",alignItems:"center",children:[Object(c.jsx)(b.a,{onClick:h,children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(b.a,{onClick:g,children:Object(c.jsx)(w.a,{})})]})]})})),fe=n(157),xe={removeTasks:oe},he=Object(Q.b)(null,xe)((function(e){var t=e.open,n=e.toggleModal,r=e.title,i=e.submit,o=e.id,s=e.name,j=e.description,l=e.columnID,d=e.removeTasks,u=e.projectID,b=Object(a.useState)({name:s,description:j}),O=Object(y.a)(b,2),p=O[0],m=O[1];Object(a.useEffect)((function(){m({name:s,description:j})}),[t,s,j]);var f=function(e){var t=e.target,n=t.value,c=t.name;m((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(L.a)({},c,n))}))},h=J();return Object(c.jsxs)(B.a,{fullWidth:!0,open:t,onClose:n,children:[Object(c.jsxs)(U.a,{className:h.title,children:["".concat(r," Task")," "]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(Object(N.a)(Object(N.a)({id:o},p),{},{columnID:l,projectID:u,type:x}),n),m({name:"",description:""})},children:[Object(c.jsxs)(_.a,{children:[Object(c.jsx)(H.a,{onChange:f,required:!0,className:h.input,label:"Name",id:"name",name:"name",fullWidth:!0,value:p.name}),Object(c.jsx)(H.a,{onChange:f,className:h.input,label:"Description",id:"description",name:"description",fullWidth:!0,value:p.description})]}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)(D.a,{onClick:n,type:"button",color:"primary",children:[" ","Cancel"," "]}),"Edit"===r&&Object(c.jsx)(D.a,{onClick:function(){d(o,"id",n)},type:"button",color:"primary",children:"Delete Task"}),Object(c.jsxs)(D.a,{type:"submit",color:"primary",children:[" ","".concat(r," Task")," "]})]})]})]})})),ge=n(36),ve={updateTask:function(e,t){return function(n){n({type:ae,payload:e}),t()}}},ye=Object(Q.b)(null,ve)((function(e){var t=e.name,n=e.description,r=e.id,i=e.projectID,o=e.updateTask,s=e.columnID,j=e.index,l=Object(a.useState)(!1),d=Object(y.a)(l,2),b=d[0],O=d[1],p=function(){return O((function(e){return!e}))};return Object(c.jsx)(ge.b,{index:j,draggableId:r,children:function(e){return Object(c.jsxs)(be.a,Object(N.a)(Object(N.a)(Object(N.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{marginTop:"1em",children:[Object(c.jsx)(he,{columnID:s,projectID:i,submit:o,open:b,title:"Edit",toggleModal:p,name:t,id:r,description:n}),Object(c.jsx)(P.a,{variant:"outlined",className:"clickable",onClick:p,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(be.a,{display:"flex",children:Object(c.jsx)(u.a,{gutterBottom:!0,variant:"body1",style:{fontWeight:"600"},children:t})}),Object(c.jsx)(u.a,{gutterBottom:!0,variant:"body2",children:n})]})})]}))}},r)})),Ce=n(56),De=function(e,t){return t.match.params.id},ke=Object(Ce.a)([function(e){return e.columns.columns},De],(function(e,t){return e.filter((function(e){return e.projectID===t}))})),Ie=Object(Ce.a)([function(e,t){return t.id},function(e){return e.tasks.tasks}],(function(e,t){return t.filter((function(t){return t.columnID===e}))})),Te=Object(Ce.a)([function(e){return e.projects.projects},De],(function(e,t){return e.find((function(e){return e.id===t}))||{name:"",sections:[]}})),Ee={addTask:function(e,t){return function(n){e.id=Object(Y.a)(),n({type:ce,payload:e}),t()}}},Ne=Object(Q.b)((function(e,t){return{tasks:Ie(e,t)}}),Ee)((function(e){var t=e.name,n=e.id,r=e.tasks,i=e.projectID,o=e.addTask,s=e.index,j=Object(a.useState)(!1),l=Object(y.a)(j,2),d=l[0],u=l[1],b=function(){return u((function(e){return!e}))};return Object(c.jsx)(ge.b,{draggableId:n,index:s,children:function(e){return Object(c.jsx)(be.a,Object(N.a)(Object(N.a)(Object(N.a)({height:"fit-content",ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{width:"280px",marginRight:".5em",children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(he,{projectID:i,columnID:n,name:"",id:"",submit:o,toggleModal:b,open:d,description:"",title:"Add"}),Object(c.jsx)(me,{projectID:i,id:n,name:t}),Object(c.jsx)(D.a,{style:{marginBottom:"1em",marginTop:"1em"},onClick:b,variant:"outlined",size:"small",fullWidth:!0,startIcon:Object(c.jsx)(fe.a,{}),children:" Add Task "}),Object(c.jsx)(ge.c,{type:x,droppableId:n,index:s,children:function(e){return Object(c.jsxs)(be.a,Object(N.a)(Object(N.a)({ref:e.innerRef},e.droppableProps),{},{children:[r&&r.map((function(e,t){return Object(c.jsx)(ye,Object(N.a)({index:t,columnID:n,projectID:i},e),e.id)})),e.placeholder]}))}})]})})}))}})})),Se={addColumn:function(e,t){return function(n){e.id=Object(Y.a)(),n({type:Z,payload:e}),t()}}},Pe=Object(Q.b)(null,Se)((function(e){var t=e.open,n=e.toggleModal,a=e.addColumn;return Object(c.jsxs)(be.a,{width:"280px",marginRight:".5em",children:[Object(c.jsx)(Oe,{open:t,toggleModal:n,name:"",title:"Add",submit:a}),Object(c.jsx)(P.a,{children:Object(c.jsx)(A.a,{children:Object(c.jsx)(D.a,{style:{marginTop:".4em"},onClick:n,startIcon:Object(c.jsx)(fe.a,{}),children:" Add Section "})})})]})})),Ae=Object(O.a)((function(e){return{container:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},btn:{margin:e.spacing(3,0,2)},title:{margin:e.spacing(2,0)},toolbar:e.mixins.toolbar}})),Me=function(){var e=Ae();return Object(c.jsx)(C.a,{maxWidth:"sm",children:Object(c.jsxs)(be.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(c.jsx)(u.a,{variant:"h1",children:"404"}),Object(c.jsx)(u.a,{variant:"h3",children:"Sorry, Page Not Found"}),Object(c.jsx)(D.a,{className:e.btn,to:g,variant:"contained",color:"primary",component:s.b,children:"Go Back Home"})]})})},we={reorderTasks:function(e){return function(t){t({type:ie,payload:e})}},reorderColumns:function(e){return function(t){t({type:te,payload:e})}}},Re=Object(Q.b)((function(e,t){return{project:Te(e,t),columns:ke(e,t)}}),we)((function(e){var t=e.project,n=e.match,r=e.columns,i=e.reorderTasks,o=e.reorderColumns,s=t.name,j=Object(a.useState)(!1),l=Object(y.a)(j,2),d=l[0],b=l[1],O=n.params.id;if(""===s)return Object(c.jsx)(Me,{});return Object(c.jsxs)(be.a,{children:[Object(c.jsx)(be.a,{display:"flex",justifyContent:"space-between",children:Object(c.jsx)(u.a,{variant:"h4",children:s})}),Object(c.jsx)(be.a,{children:Object(c.jsxs)(be.a,{marginTop:"1em",display:"flex",width:"fit-content",children:[Object(c.jsx)(ge.a,{onDragEnd:function(e){var t=e.destination,n=e.source;t&&(t.droppableId===n.droppableId&&t.index===n.index||(e.type===x?i(e):o(e)))},children:Object(c.jsx)(ge.c,{droppableId:"all-columns",type:h,direction:"horizontal",children:function(e){return Object(c.jsxs)(be.a,Object(N.a)(Object(N.a)({display:"flex",ref:e.innerRef},e.droppableProps),{},{children:[r&&r.map((function(e,t){return Object(c.jsx)(Ne,Object(N.a)({index:t,projectID:O},e),e.id)})),e.placeholder]}))}})}),Object(c.jsx)(Pe,{open:d,toggleModal:function(){return b((function(e){return!e}))}})]})})]})})),We=n(19),Le=n(63),Be=n(74),Ue=n(75),_e=n.n(Ue),He=n(27),Fe={projects:[]},Je={columns:[]},Ke={tasks:[]},Ve=Object(We.c)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case z:return Object(N.a)(Object(N.a)({},e),{},{projects:[c].concat(Object(He.a)(e.projects))});case X:return Object(N.a)(Object(N.a)({},e),{},{projects:e.projects.map((function(e){return e.id===c.id?c:e}))});case G:return Object(N.a)(Object(N.a)({},e),{},{projects:e.projects.filter((function(e){return e.id!==c}))});default:return e}},columns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case Z:return Object(N.a)(Object(N.a)({},e),{},{columns:[].concat(Object(He.a)(e.columns),[c])});case $:var a=c.id,r=c.field;return Object(N.a)(Object(N.a)({},e),{},{columns:e.columns.filter((function(e){return e[r]!==a}))});case ee:return Object(N.a)(Object(N.a)({},e),{},{columns:e.columns.map((function(e){return e.id===c.id?c:e}))});case te:var i=c.draggableId,o=c.destination,s=Object(He.a)(e.columns),j=s.findIndex((function(e){return e.id===i}));return j=s.splice(j,1)[0],(s=s.filter((function(e){return e.projectID===j.projectID}))).splice(o.index,0,j),Object(N.a)(Object(N.a)({},e),{},{columns:[].concat(Object(He.a)(e.columns.filter((function(e){return e.projectID!==j.projectID}))),Object(He.a)(s))});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0,n=t.payload,c=t.type;switch(c){case ce:return Object(N.a)(Object(N.a)({},e),{},{tasks:[].concat(Object(He.a)(e.tasks),[n])});case ae:return Object(N.a)(Object(N.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===n.id?n:e}))});case re:var a=n.id,r=n.field;return Object(N.a)(Object(N.a)({},e),{},{tasks:e.tasks.filter((function(e){return e[r]!==a}))});case ie:var i=n.draggableId,o=n.destination,s=Object(He.a)(e.tasks),j=s.findIndex((function(e){return e.id===i}));return(j=s.splice(j,1)[0]).columnID=o.droppableId,s.splice(o.index,0,j),Object(N.a)(Object(N.a)({},e),{},{tasks:s});default:return e}}}),qe={key:"root",storage:_e.a},ze=[Be.a],Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||We.d,Xe=Object(Le.a)(qe,Ve),Ye=Object(We.e)(Xe,{},Ge(We.a.apply(void 0,ze)));Object(Le.b)(Ye);var Qe=function(){var e=Ae();return Object(c.jsx)(Q.a,{store:Ye,children:Object(c.jsx)("div",{className:"app-container",children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(v,{}),Object(c.jsx)("div",{className:e.toolbar}),Object(c.jsx)("div",{className:"app-content",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:g,component:ue}),Object(c.jsx)(j.a,{path:"".concat(g,"project/:id"),component:Re}),Object(c.jsx)(j.a,{path:"*",component:Me})]})})]})})})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Qe,{})}),document.getElementById("root")),Ze()},95:function(e,t,n){},96:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.2c80ef6f.chunk.js.map