(this["webpackJsonpreact-test-create-react-app"]=this["webpackJsonpreact-test-create-react-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),s=n.n(i),o=(n(13),n(3)),c=n(4),l=n(6),u=n(5),f=n(7),d=(n(14),n(15),["Micha\u0142","Ania","Kasia","Tomek"]),h=function(e){var t=e.users;return t.length>0?a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)}))):a.a.createElement("p",null,"No results!")},m=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={filteredUsers:d},e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,n=this.getFilteredUsersForText(t);this.setState({filteredUsers:n})}},{key:"getFilteredUsersForText",value:function(e){return d.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{onInput:this.filterUsers.bind(this)}),a.a.createElement(h,{users:this.state.filteredUsers}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e3b22ce1.chunk.js.map