"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[826],{826:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(433),a=n(683),u=n(861),c=n(439),s=n(757),o=n.n(s),i=n(791),f=n(766),l=n(929),g=n(567),h=n(394),p="SearchForm_form__o80os",d=n(184);function Z(e){var t=e.searchValue,n=e.searchSubmit,r=(0,i.useState)(""),a=(0,c.Z)(r,2),u=a[0],s=a[1],o=(0,i.useState)(!0),f=(0,c.Z)(o,2),l=f[0],g=f[1];(0,i.useEffect)((function(){if(l)return s(t),void g(!1)}),[l,t]);return(0,d.jsxs)("form",{className:p,action:"query",onSubmit:function(e){if(e.preventDefault(),!u)return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442");n(u),g(!1)},children:[(0,d.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},value:u}),(0,d.jsx)("button",{type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]})}var m=n(87);function v(){var e,t=(0,i.useState)([]),n=(0,c.Z)(t,2),s=n[0],p=n[1],v=(0,i.useState)(!0),x=(0,c.Z)(v,2),S=x[0],j=x[1],b=(0,i.useState)({search:"",page:1,get:!1,loading:!1}),k=(0,c.Z)(b,2),_=k[0],w=k[1],y=(0,m.lr)(),q=(0,c.Z)(y,2),C=q[0],E=q[1],F=null!==(e=C.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){if(""!==F&&S)return j(!1),void w({page:1,search:F,get:!0,loading:!0})}),[F,S]),(0,i.useEffect)((function(){if(_.get&&""!==_.search){var e=function(){var e=(0,u.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.gW)(_.search,_.page);case 2:(t=e.sent).results.length?1===_.page?(p(t.results),w((function(e){return(0,a.Z)((0,a.Z)({},e),{},{get:!1,loading:!1})}))):(p((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))})),w((function(e){return(0,a.Z)((0,a.Z)({},e),{},{get:!1,loading:!1})}))):alert("\u0417\u0430 \u0432\u0438\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c ".concat(_.search,"  \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0456"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z,{searchValue:F,searchSubmit:function(e){if(e===_.search)return alert('\u0412\u0438 \u0432\u0432\u0435\u043b\u0438 \u0437\u0430\u043f\u0438\u0442 "'.concat(e,'" \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e'));w({page:1,search:e,get:!0,loading:!0}),E({query:e})}}),0!==s.length&&(0,d.jsx)(l.Z,{filmData:s,sectionTitle:'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(_.search,'"')}),_.loading?(0,d.jsx)(g.g,{}):0!==s.length&&(0,d.jsx)(h.$,{addMoreFn:function(){return w((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:e.page+1,get:!0,loading:!0})}))}})]})}}}]);
//# sourceMappingURL=826.d357a609.chunk.js.map