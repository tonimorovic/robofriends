(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),b=n(6),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(c.jsx)(u,{searchChange:this.onSearchChange}),Object(c.jsx)(f,{children:Object(c.jsx)(j,{robots:r})})]}):Object(c.jsx)("h1",{children:"Loading"})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(15);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.aff0ae34.chunk.js.map