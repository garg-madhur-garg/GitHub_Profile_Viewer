(this.webpackJsonpgithub_profiles=this.webpackJsonpgithub_profiles||[]).push([[0],[,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var o=e(1),c=e.n(o),i=e(3),a=e.n(i),r=(e(9),e(10),e(4)),s=(e(11),e(0));var l=function(){var t=Object(o.useState)(""),n=Object(r.a)(t,2),e=n[0],c=n[1],i=e.split(" ").join("");return Object(s.jsx)("div",{className:"TextBox",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",value:e,onChange:function(t){c(t.target.value)},required:!0,placeholder:"Username",autoFocus:!0}),Object(s.jsx)("button",{onClick:function(t){fetch("https://api.github.com/users/"+i).then((function(t){return t.json()})).then((function(t){"Not Found"!==t.message?function(t){console.log(t),document.getElementById("display").innerHTML='<div className="container">\n            <img src='.concat(t.avatar_url,' alt="avatar"/>\n            <h2>Bio: ').concat(t.bio,"</h2>\n            <h2>Followers: ").concat(t.followers,"</h2>\n            <h2>Following: ").concat(t.following,"</h2>\n            <h2>Location: ").concat(t.location,"</h2>\n            <h2>Public Repo: ").concat(t.public_repos,'</h2>\n            <a href="https://www.github.com/').concat(t.login,'" target="_blank"><button>See Profile</button></a>\n        </div>')}(t):document.getElementById("display").innerHTML="Not Found"})),t.preventDefault()},children:"Search"})]})})};var u=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Github Profile Viewer"}),Object(s.jsx)(l,{})]})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.1a0dac66.chunk.js.map