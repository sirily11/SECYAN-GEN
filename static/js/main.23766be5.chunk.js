(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{182:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),i=(n(182),n(183),n(70)),s=n.n(i),l=n(90),u=n(91),d=n(92),j=n(171),b=n(169),h=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"getURL",value:function(e){return new URL(e,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_URL).href}}]),e}(),p=n(157),O=n.n(p),x=n(11),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).post=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.getURL("generate"),console.log("url",t),e.next=4,O.a.post(t,{sql:a.state.code,table:a.state.tableStructure});case 4:n=e.sent,console.log(n.data),a.setState({result:n.data});case 7:case"end":return e.stop()}}),e)}))),a.setCode=function(e){a.setState({code:e}),window.localStorage.setItem("code",e)},a.setTable=function(e){a.setState({tableStructure:e}),window.localStorage.setItem("tableStructure",e)},a.state={setCode:a.setCode,setTable:a.setTable,post:a.post},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("code"),t=window.localStorage.getItem("tableStructure");this.setState({code:null!==e&&void 0!==e?e:"",tableStructure:null!==t&&void 0!==t?t:""})}},{key:"render",value:function(){return Object(x.jsx)(v.Provider,{value:this.state,children:this.props.children})}}]),n}(a.Component),f={},v=c.a.createContext(f),S=n(34),m=n(123),w=n(306),C=n(305),T=n(72),y=n(41),k=n(307),E=n(107),L=n(167),_=n(122),P=n.n(_),R=n(124),I=n(30),F=n(125),A=n(308),D=n(172),H=n(166),N=n(158),U=n.n(N);function B(){var e=c.a.useContext(v).result;return Object(x.jsx)("div",{style:{height:300,width:300},children:e&&Object(x.jsx)(U.a,{data:e.joinGraph,orientation:"vertical",pathFunc:"step",translate:{y:100,x:100}})})}var K=w.a.Title;w.a.Paragraph,w.a.Text,w.a.Link;function G(){var e=c.a.useContext(v).result,t=c.a.useState(!1),n=Object(S.a)(t,2),a=n[0],r=n[1];return c.a.useEffect((function(){r(!1)}),[e]),Object(x.jsxs)(k.a,{style:{width:"100%",height:"90vh",overflow:"scroll"},children:[Object(x.jsx)(A.a,{style:{position:"fixed",top:110,right:40},children:Object(x.jsxs)(T.a,{gutter:[10,10],children:[Object(x.jsx)(y.a,{children:Object(x.jsx)(E.a,{onClick:function(){var t;navigator.clipboard.writeText(null!==(t=null===e||void 0===e?void 0:e.code)&&void 0!==t?t:""),r(!0)},children:a?"Copied":"Copy"})}),Object(x.jsx)(y.a,{children:Object(x.jsx)(D.a,{content:Object(x.jsx)(B,{}),placement:"leftBottom",children:Object(x.jsx)(E.a,{children:"Show Join Tree"})})})]})}),Object(x.jsx)(w.a,{children:Object(x.jsx)(K,{children:"Result"})}),Object(x.jsx)(F.a,Object(I.a)(Object(I.a)({},F.b),{},{code:e.code,language:"cpp",theme:H.a,children:function(e){var t=e.className,n=e.style,a=e.tokens,c=e.getLineProps,r=e.getTokenProps;return Object(x.jsx)("pre",{className:t,style:n,children:a.map((function(e,t){return Object(x.jsx)("div",Object(I.a)(Object(I.a)({},c({line:e,key:t})),{},{children:e.map((function(e,t){return Object(x.jsx)("span",Object(I.a)({},r({token:e,key:t})))}))}))}))})}}))]})}var J=m.a.TabPane,W=w.a.Link;function q(){var e=c.a.useState(window.innerHeight),t=Object(S.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),o=Object(S.a)(r,2),i=o[0],u=o[1];c.a.useEffect((function(){window.addEventListener("resize",(function(){a(window.innerHeight)}))}),[]);var d=c.a.useContext(v),j=d.setCode,b=d.setTable,h=d.code,p=d.tableStructure,O=d.result,g=d.post;return Object(x.jsxs)(P.a,{style:{maxHeight:"100vh",overflow:"hidden",padding:10},children:[Object(x.jsx)(C.a,{title:"CodeGen"}),Object(x.jsx)(_.Content,{children:Object(x.jsxs)(T.a,{style:{height:"80%"},gutter:[16,10],children:[Object(x.jsx)(y.a,{span:8,children:Object(x.jsxs)(k.a,{children:[Object(x.jsxs)(m.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(x.jsx)(J,{tab:"SQL Statement",children:Object(x.jsx)(R.a,{height:n-300,language:"sql",value:h,options:{minimap:{enabled:!1}},onChange:function(e){e&&j(e)}})},"1"),Object(x.jsxs)(J,{tab:"Table structure",children:[Object(x.jsx)(w.a,{children:Object(x.jsx)(W,{target:"_blank",href:"https://github.com/sirily11/SECYAN-GEN/blob/master/examples/table_config.json",children:"Example Table Structure"})}),Object(x.jsx)(R.a,{height:n-300,value:p,language:"json",options:{minimap:{enabled:!1}},onChange:function(e){e&&b(e)}})]},"2")]}),Object(x.jsx)(T.a,{style:{justifyContent:"flex-end",marginTop:10},children:Object(x.jsx)(E.a,{type:"primary",loading:i,onClick:Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),0!==(null===h||void 0===h?void 0:h.length)&&0!==(null===p||void 0===p?void 0:p.length)){e.next=4;break}return window.alert("Invaild Input"),e.abrupt("return");case 4:return e.prev=4,e.next=7,g();case 7:L.a.info({message:"Code generated"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),L.a.open({message:"Cannot generate code",description:"".concat(e.t0),duration:5});case 13:u(!1);case 14:case"end":return e.stop()}}),e,null,[[4,10]])}))),children:"Convert"})})]})}),Object(x.jsx)(y.a,{span:16,children:O&&Object(x.jsx)(G,{})})]})})]})}var M=function(){return Object(x.jsx)(g,{children:Object(x.jsx)(q,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,309)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),z()}},[[301,1,2]]]);
//# sourceMappingURL=main.23766be5.chunk.js.map