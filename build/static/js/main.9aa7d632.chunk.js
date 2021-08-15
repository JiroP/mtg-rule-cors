(this["webpackJsonpmtg-rule-browser"]=this["webpackJsonpmtg-rule-browser"]||[]).push([[0],{96:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(24),s=n.n(a),i=n(21),o=n(39),u=n.n(o),l=n(53),j=n(20),d=n(119),h=n(124),b=n(120),p=n(122),O=n(117),g=n(121),m=n(115),f=n(60),x=n(118),v=n(6),w=n(54),R=n.n(w),N=Object(r.createContext)({rulesArray:[],rulesDict:{}}),k=function(e){var t={},n=function(e){return function(e){return new RegExp("^\\d[.] ").test(e)}(e)?"section":function(e){return new RegExp("^\\d{3}[.] ").test(e)}(e)?"chapter":function(e){return new RegExp("^\\d{3}[.]\\d{1,3}[.] ").test(e)}(e)?"rule":"subRule"},r=e.replace(/\r\n/g,"\n").split(/\n{2,}|\n \n/g),c=r.findIndex((function(e){return"Credits"===e}))+1,a=r.slice(c).findIndex((function(e){return"Glossary"===e})),s=r.slice(c,c+a);return s.forEach((function(e){!function(e,n){var r,c=function(e){return e.slice(4,7).replace(/\D/g,"").length},a=function(e){return e[0]},s=function(e){return e.slice(1,3)},i=function(e){var t=c(e);return e.slice(4,4+t)};switch(n){case"section":var o=a(e);t[o]={title:e,chapters:{}};break;case"chapter":var u=a(e),l=s(e);t[u].chapters[l]={title:e,rules:{}};break;case"rule":var j=a(e),d=s(e),h=i(e);t[j].chapters[d].rules[h]={title:e,subRules:{}};break;case"subRule":var b=a(e),p=s(e),O=i(e),g=(r=e)[4+c(r)];t[b].chapters[p].rules[O].subRules[g]={title:e}}}(e,n(e))})),{rulesDict:t,rulesArray:s}},B=n(2),y=Object(m.a)((function(){return{chapter:{color:"white",marginLeft:"10px"}}})),C=function(e){var t=e.title,n=e.id,r=e.sectionId,c=y();return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(i.b,{to:"/chapter/".concat(r,"/").concat(n),children:Object(B.jsx)(O.a,{className:c.chapter,children:t})})})},I="#323F4B",S="#52606D",D="#616E7C",F=Object(m.a)((function(e){return{section:{marginTop:e.spacing(1),marginBottom:e.spacing(1),color:"white"},chapterRoot:{background:S,borderRadius:"10px"}}})),H=function(e){var t=e.chapters,n=e.title,r=e.id,c=F(),a=Object.entries(t).sort((function(e,t){return e[0].localeCompare(t[0])}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(O.a,{className:c.section,children:n}),Object(B.jsx)("div",{className:c.chapterRoot,children:a.map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(B.jsx)(C,{id:n,sectionId:r,rules:c.rules,title:c.title},"chapter-".concat(c.title))}))})]})},L=function(e){var t=e.rulesArray,n=e.rulesDict;return t.length?Object(B.jsx)(B.Fragment,{children:Object.entries(n).map((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1],c=r.title,a=r.chapters;return Object(B.jsx)(H,{id:n,title:c,chapters:a},"Section-".concat(c))}))}):null},E=n(42),T=n(123),A=n(16),M=n(59),P=n.n(M),J=Object(m.a)((function(e){return{search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(A.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),G=function(e){var t=e.handleSearch,n=J(),c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1];return Object(B.jsxs)("div",{className:n.search,children:[Object(B.jsx)("div",{className:n.searchIcon,children:Object(B.jsx)(P.a,{})}),Object(B.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s),i("")},children:Object(B.jsx)(T.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){i(e.target.value)},value:s})})]})},U=Object(m.a)((function(e){return{rulesRoot:{background:D,borderRadius:"10px",marginBottom:e.spacing(2)},rule:{marginLeft:e.spacing(2),marginTop:e.spacing(1.5),marginBottom:e.spacing(1.5)}}})),q=function(){var e=U(),t=Object(v.h)().search,n=Object(r.useContext)(N).rulesArray,c=new URLSearchParams(t).get("value");return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(O.a,{variant:"h4",children:["Search results for '",c,"':"]}),Object(B.jsx)("div",{className:e.rulesRoot,children:c?n.filter((function(e){return e.toLowerCase().includes(c.toLowerCase())})).map((function(t){return Object(B.jsx)(O.a,{className:e.rule,children:t},"search-".concat(t))})):null})]})},z=Object(m.a)((function(e){return{rule:{marginLeft:e.spacing(2),marginTop:e.spacing(1.5),marginBottom:e.spacing(1.5)},subRule:{marginLeft:e.spacing(3),marginTop:e.spacing(1),marginBottom:e.spacing(1)}}})),K=function(e){var t=e.subRules,n=e.title,r=z();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(O.a,{className:r.rule,children:n}),Object.values(t).map((function(e){return Object(B.jsx)(O.a,{className:r.subRule,children:e.title},"subrule".concat(e.title))}))]})},Q=Object(m.a)((function(e){return{root:{background:D,borderRadius:"10px",marginBottom:e.spacing(2)},notFoundHeader:{color:"white"}}})),V=function(e){var t=e.rules,n=Q();return Object(B.jsx)("div",{className:n.root,children:t?Object.values(t).map((function(e){var t=e.subRules,n=e.title;return Object(B.jsx)(K,{subRules:t,title:n},"rule-container-".concat(n))})):Object(B.jsx)(O.a,{className:n.notFoundHeader,variant:"h2",children:"Rules not found for the chapter. :("})})},W=Object(m.a)((function(e){return{chapterHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),color:"white"},sectionHeader:{paddingBottom:e.spacing(2),paddingTop:e.spacing(2),color:"white"}}})),X=function(){var e=W(),t=Object(r.useContext)(N).rulesDict,n=Object(v.i)(),c=n.chapterId,a=t[n.sectionId];if(!a)return Object(B.jsx)(O.a,{className:e.sectionHeader,variant:"h4",children:"Section not found"});var s=a.title,i=a.chapters,o=null===i||void 0===i?void 0:i[c];if(!o)return Object(B.jsx)(O.a,{className:e.sectionHeader,variant:"h4",children:"Chapter not found"});var u=o.title,l=o.rules;return Object(B.jsx)(B.Fragment,{children:u?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(O.a,{className:e.sectionHeader,variant:"h4",children:s}),Object(B.jsx)(O.a,{className:e.chapterHeader,variant:"h5",children:u}),Object(B.jsx)(V,{rules:l})]}):Object(B.jsx)(O.a,{className:e.sectionHeader,variant:"h4",children:"Chapter not found"})})},Y=Object(m.a)((function(e){return{container:{background:I,paddingBottom:e.spacing(3),paddingTop:e.spacing(2),marginTop:e.spacing(1),borderRadius:"10px"},appBar:{background:D},homeButton:{marginRight:e.spacing(2)},title:{}}})),Z=function(){var e=Y(),t=Object(r.useMemo)((function(){return Object(f.a)({palette:{type:"dark"}})}),[]),n=Object(v.g)(),c=Object(r.useState)({}),a=Object(j.a)(c,2),s=a[0],o=a[1],m=Object(r.useState)([]),w=Object(j.a)(m,2),y=w[0],C=w[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("/api/mtg");case 3:t=e.sent,n=k(t.data),r=n.rulesArray,c=n.rulesDict,o(c),C(r),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),y.length?Object(B.jsx)(x.a,{theme:t,children:Object(B.jsxs)(d.a,{children:[Object(B.jsx)(h.a,{className:e.appBar,children:Object(B.jsxs)(b.a,{children:[Object(B.jsx)(i.b,{to:"/",children:Object(B.jsx)(p.a,{className:e.homeButton,children:"Home"})}),Object(B.jsx)(O.a,{variant:"h6",className:e.title,children:"Magic the gathering rules browser"}),Object(B.jsx)(G,{handleSearch:function(e){e&&n.push("/search?value=".concat(e))}})]})}),Object(B.jsx)(b.a,{}),Object(B.jsx)(g.a,{className:e.container,children:Object(B.jsx)(N.Provider,{value:{rulesArray:y,rulesDict:s},children:Object(B.jsxs)(v.d,{children:[Object(B.jsx)(v.b,{path:"/chapter/:sectionId/:chapterId",children:Object(B.jsx)(X,{})}),Object(B.jsx)(v.b,{path:"/search",children:Object(B.jsx)(q,{})}),Object(B.jsx)(v.b,{exact:!0,path:"/home",children:Object(B.jsx)(L,{rulesDict:s,rulesArray:y})}),Object(B.jsx)(v.a,{path:"/",to:"/home"})]})})})]})}):null},$=Object(v.j)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));s.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsxs)(i.a,{children:[Object(B.jsx)($,{}),Object(B.jsx)(Z,{})]})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.9aa7d632.chunk.js.map