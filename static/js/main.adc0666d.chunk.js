(this["webpackJsonpmovie-app-ss2"]=this["webpackJsonpmovie-app-ss2"]||[]).push([[0],{37:function(e,t,s){},59:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(29),r=s.n(i),c=(s(37),s(17)),o=s.n(c),l=s(30),u=s(11),j=s(12),m=s(14),d=s(13),b=s(31),p=s.n(b),h=s(5),v=s.n(h),O=s(9),x=(s(59),s(1));function f(e){var t=e.id,s=e.year,a=e.title,n=e.summary,i=e.poster,r=e.genres;return Object(x.jsx)("div",{className:"movie",children:Object(x.jsxs)(O.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:i,genres:r}},children:[Object(x.jsx)("img",{src:i,alt:a,title:a}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("h3",{className:"movie__title",children:a}),Object(x.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(x.jsx)("li",{children:e},t)}))}),Object(x.jsx)("h3",{className:"movie__year",children:s}),Object(x.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"...."]})]})]})})}f.prototype={id:v.a.number.isRequired,year:v.a.number.isRequired,title:v.a.string.isRequired,summary:v.a.string.isRequired,poster:v.a.string.isRequired,genres:v.a.arrayOf(v.a.string.isRequired)};var g=f,y=(s(64),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovie=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,e.setState({isLoading:!1,movies:a});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("span",{className:"loader__text",children:"Loading...."})}):Object(x.jsx)("div",{className:"movies",children:s.map((function(e){return Object(x.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));s(65);var _=function(e){return console.log(e),Object(x.jsxs)("div",{className:"about__container",children:[Object(x.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(x.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},N=(s(66),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log(t.state),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(x.jsxs)("div",{className:"Detail",children:[Object(x.jsx)("h3",{children:e.state.title}),Object(x.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(x.jsx)("p",{children:e.state.summary})]}):null}}]),s}(n.a.Component)),w=s(2);s(67);var k=function(){return Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(O.b,{to:"/",children:"Home"}),Object(x.jsx)(O.b,{to:"/about",children:"About"})]})};var q=function(){return Object(x.jsxs)(O.a,{children:[Object(x.jsx)(k,{}),Object(x.jsx)(w.a,{path:"/",exact:!0,component:y}),Object(x.jsx)(w.a,{path:"/about",component:_}),Object(x.jsx)(w.a,{path:"/movie/:id",component:N})]})};r.a.render(Object(x.jsx)(q,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.adc0666d.chunk.js.map