(this.webpackJsonphabby=this.webpackJsonphabby||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c,i,r=n(0),s=n.n(r),o=n(14),a=n.n(o),j=(n(35),n(36),n(16)),l=n(3),b="#E9C46A",u="#E76F51",h=n(11),O=(n(37),n(17)),x=n(18),d=x.a.div(c||(c=Object(O.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  background-color: ",";\n  font-size: ",";\n  color: ",";\n  text-align: center;\n  line-height: ",";\n"])),(function(e){return e.size+"px"||!1}),(function(e){return e.size+"px"||!1}),(function(e){return e.color||"black"}),(function(e){return e.size/4+"px"||!1}),(function(e){return e.textColor||"black"}),(function(e){return e.size+"px"||!1})),m=x.a.div(i||(i=Object(O.a)(["\n  position: relative;\n  h1 {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    left: ",";\n    text-align: center;\n    line-height: ",";\n    width: ",";\n    color: ",";\n    font-size: ",";\n  }\n"])),(function(e){return e.moveRight+"px"||!1}),(function(e){return e.size-e.moveUp+"px"||!1}),(function(e){return e.size+"px"||!1}),(function(e){return e.textColor||"black"}),(function(e){return e.size/5.5+"px"||!1})),f=n(29),p=n.n(f),v=n(28),g=n.n(v),S=n(2),z=function(e){var t=Object(r.useState)("00"),n=Object(h.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)("00"),o=Object(h.a)(s,2),a=o[0],j=o[1],l=Object(r.useState)("00"),b=Object(h.a)(l,2),u=b[0],O=b[1],x=Object(r.useState)(!1),d=Object(h.a)(x,2),m=d[0],f=d[1],p=Object(r.useState)(0),v=Object(h.a)(p,2),g=v[0],z=v[1];return Object(r.useEffect)((function(){var e;return m&&(e=setInterval((function(){var e=g%60,t=Math.floor(g/60),n=Math.floor(g/3600),c=1===String(e).length?"0".concat(e):e,r=1===String(t).length?"0".concat(t):t,s=1===String(n).length?"0".concat(n):n;i(c),j(r),O(s),z((function(e){return e+1}))}),1e3)),function(){return clearInterval(e)}}),[m,g]),Object(r.useEffect)((function(){!1===e.timerActive?(0!==g&&(console.log("Counter timerActive: ",g),f(!1)),z(0)):f(!0)}),[e.timerActive]),Object(S.jsx)("div",{className:"timer",children:Object(S.jsxs)("h1",{children:[Object(S.jsx)("span",{className:"timer-hour",children:u}),Object(S.jsx)("span",{children:":"}),Object(S.jsx)("span",{className:"timer-minute",children:a}),Object(S.jsx)("span",{children:":"}),Object(S.jsx)("span",{className:"timer-second",children:c})]})})},N=function(e){var t=Object(r.useState)("START"),n=Object(h.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(!1),o=Object(h.a)(s,2),a=o[0],j=o[1],l=280,O=b,x="white";return Object(S.jsxs)("div",{className:"page-home",children:[Object(S.jsxs)("div",{className:"home-top",children:[Object(S.jsxs)("div",{className:"home-activity",children:[Object(S.jsx)(d,{color:u,size:120})," ",Object(S.jsx)("h2",{children:"Reading"})]}),Object(S.jsxs)("div",{className:"home-timer",children:[Object(S.jsx)("button",{onClick:function(){!1===a?(i("STOP"),j(!0)):(i("START"),j(!1))},children:c}),Object(S.jsx)(z,{timerActive:a})]})]}),Object(S.jsx)("div",{className:"home-bottom-bar",children:Object(S.jsxs)("div",{className:"home-bottom",children:[" ",Object(S.jsxs)(m,{size:l,textColor:x,moveUp:0,children:[Object(S.jsx)(g.a,{className:"home-icon",style:{fontSize:l,color:O}}),Object(S.jsx)("h1",{children:"TAGS"})]}),Object(S.jsxs)(m,{size:270,textColor:x,moveUp:0,children:[Object(S.jsx)(d,{color:O,size:270}),Object(S.jsx)("h1",{style:{fontSize:67.5},children:"STATS"})]}),Object(S.jsxs)(m,{size:l,textColor:x,moveUp:30,moveRight:18,children:[Object(S.jsx)(p.a,{className:"home-icon",style:{fontSize:300,color:O}}),Object(S.jsx)("h1",{children:"GOALS"})]})]})})]})};var A=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(j.a,{children:Object(S.jsx)(l.c,{children:Object(S.jsx)(l.a,{exact:!0,path:"/habby/",component:function(){return Object(S.jsx)(N,{})}})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(A,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.377d907c.chunk.js.map