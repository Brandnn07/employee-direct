(this["webpackJsonpemployee-direct"]=this["webpackJsonpemployee-direct"]||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(13),a=n.n(c),l=n(0);var i=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Employee Directory!"})})},o=n(47),h=n(14),u=n(15),j=n(20),d=n(19);var m=function(e){return Object(l.jsx)("form",{children:Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for someone!",id:"search"})})})};var p=function(e){return Object(l.jsxs)("table",{className:"table table-hover table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Picture"}),Object(l.jsx)("th",{onClick:e.sortName,style:{cursor:"pointer"},children:"Name"}),Object(l.jsx)("th",{children:"Phone #"}),Object(l.jsx)("th",{children:"Email"})]})}),Object(l.jsx)("tbody",{children:e.results.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture.thumbnail,alt:"employee"})}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.email})]},e.id.value)}))})]})},b=n(16),O=n.n(b),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",results:[],employeesSorted:[],filter:"up"},e.getEmployees=function(){O.a.get("https://randomuser.me/api/?results=30&nat=us").then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e,"here")}))},e.sortName=function(){alert("hello!")},e.sortEmail=function(){console.log("yeppers")},e.handleInputChange=function(t){t.preventDefault(),e.setState({search:t.target.value});var n=t.target.value,r=e.state.results.filter((function(e){return[e.name.first,e.name.last].some((function(e){return e.includes(n)}))}));e.setState({employeesSorted:r})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{handleInputChange:this.handleInputChange}),this.state.employeesSorted.length?Object(l.jsx)(p,{onClick:this.sortName,handleInputChange:this.handleInputChange,results:this.state.employeesSorted}):Object(l.jsx)(p,{handleInputChange:this.handleInputChange,onClick:this.sortName,results:this.state.results})]})}}]),n}(r.Component);var f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(o.a,{children:Object(l.jsx)(x,{})})]})};n(44);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.19c8da51.chunk.js.map