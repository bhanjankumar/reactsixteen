(this.webpackJsonpreactsixteen=this.webpackJsonpreactsixteen||[]).push([[0],{15:function(e,t){},18:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"logout",(function(){return E}));var r={};n.r(r),n.d(r,"loginCheck",(function(){return N}));var c={};n.r(c),n.d(c,"searchAction",(function(){return y})),n.d(c,"getPlanetlist",(function(){return _})),n.d(c,"homePage",(function(){return w}));var o={};n.r(o),n.d(o,"addNumData",(function(){return k})),n.d(o,"navToHomePage",(function(){return P}));var l=n(0),i=n.n(l),s=n(9),u=n.n(s),m=(n(23),n(24),n(25),n(5)),p=n(3),d=n(4),f=n(7),h=n(6),v=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("nav",{className:"navbar-dark"},this.props.loginSuccess&&i.a.createElement("div",{className:"logout",onClick:function(){return e.props.logout()}},"Logout"))))}}]),n}(l.PureComponent),E=function(){return{type:"NAV_TO_HOME"}},b=Object(m.b)((function(e,t){return{loginSuccess:e.home&&e.home.loginSuccess}}),a)(v),g=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("footer",{className:"page-footer font-small blue pt-4"},i.a.createElement("div",{className:"footer-copyright text-center py-1"},"\xa9Copyright:")))}}]),n}(l.PureComponent),O=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.call(this)}return Object(d.a)(n,[{key:"loginCheck",value:function(){var e={username:this.refs.username.value,password:this.refs.password.value};this.props.loginCheck(e)}},{key:"render",value:function(){var e=this,t=this.props.errorLogin;return i.a.createElement("div",{className:"content"},i.a.createElement("div",{id:"login"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"login-row",className:"row justify-content-center align-items-center"},i.a.createElement("div",{id:"login-column",className:"col-md-6"},i.a.createElement("div",{id:"login-box",className:"col-md-12"},i.a.createElement("h3",{className:"text-center"},"Login"),t,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"username"},"Username:"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",ref:"username",className:"form-control"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"password"},"Password:"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",ref:"password",className:"form-control"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{onClick:function(){return e.loginCheck()},className:"btn btn-info btn-md"},"Login"))))))))}}]),n}(l.PureComponent),N=function(e){return function(t){var n=e.username,a=e.password;fetch("https://swapi.dev/api/people/?search=".concat(n),{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){var n=e.results[0]?e.results[0].birth_year:"";t(n==a?{type:"NAV_LOGIN_SUCCESS"}:{type:"NAV_LOGIN_FAIL"})}))}},j=Object(m.b)((function(e,t){return{errorLogin:e.home.error}}),r)(O),S=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleChangeData=function(e){var t=e.target.value;a.props.searchAction(t)},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.platestListData,t=Math.max.apply(null,e&&e.map((function(e){return"unknown"!=e.population?e.population:""})));return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("h3",null,"Search"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},i.a.createElement("input",{type:"search",onChange:this.handleChangeData,className:"form-control",placeholder:"Search..."}))),i.a.createElement("div",{className:"row"},e&&e.map((function(e,n){return"unknown"!=e.population?i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:e.population==t?"planets-list boldBdr":"planets-list"},i.a.createElement("div",{className:"title"},e.name),i.a.createElement("div",{className:"gravity"},e.gravity),i.a.createElement("div",{className:"terrain"},e.terrain),i.a.createElement("div",{className:"population"},e.population))):""})))))}}]),n}(l.PureComponent),y=function(e){return function(t){fetch("https://swapi.dev/api/planets/?search=".concat(e),{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){t({type:"NAV_PLANET_LIST",data:e.results})}))}},_=function(){return function(e){fetch("https://swapi.dev/api/planets/",{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){e({type:"NAV_PLANET_LIST",data:t.results,loginSuccess:!0})}))}},w=function(){return{type:"NAV_TO_HOME"}},C=Object(m.b)((function(e,t){return{platestListData:e.Search&&e.Search.data,loginSuccess:e.Search&&e.Search.loginSuccess,orderSt:e.Search&&e.Search.order}}),c)(S),L=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(j,null),i.a.createElement(C,null),i.a.createElement(g,null))}}]),n}(l.PureComponent),A=n(15),k=function(){return{type:A.NAV_TO_SUPPORT}},P=function(){alert("home")},T=Object(m.b)((function(e,t){return{}}),o)(L),V=n(17);n(32),n(33),Object(V.a)();var I=function(){return i.a.createElement("div",null,i.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(8),D=n(2),G={loginSuccess:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(D.a)({},G),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAV_LOGIN_FAIL":return Object(D.a)(Object(D.a)({},e),{},{error:"Login Failed Please try again..."});case"NAV_LOGIN_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loginSuccess:!0});default:return e}},U={loginSuccess:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(D.a)({},U),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAV_PLANET_LIST":return Object(D.a)(Object(D.a)({},e),{},{data:t.data});case"NAV_TO_HOME":return Object(D.a)(Object(D.a)({},e),{},{data:null,loginSuccess:!1});case"NAV_LOGIN_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loginSuccess:!0});default:return e}},B=Object(x.c)({home:M,Search:H}),F=function(e,t){return"RESET_APP_STORE"===t.type&&(e=void 0),B(e,t)},R=n(16),J=Object(x.d)(F,Object(x.a)(R.a));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,{store:J},i.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.71f45bf6.chunk.js.map