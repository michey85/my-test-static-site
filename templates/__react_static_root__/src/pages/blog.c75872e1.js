(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),l=n.n(a),o=n(15),r=n(12);function c(){var e=Object(o.useRouteData)().items;return l.a.createElement("div",null,l.a.createElement("h1",null,"It's blog time."),l.a.createElement("div",null,l.a.createElement("a",{href:"#bottom",id:"top"},"Scroll to bottom!")),l.a.createElement("br",null),"All Posts:",l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.sys.id},l.a.createElement(r.a,{to:"/blog/post/".concat(e.sys.id,"/")},e.fields.name))}))),l.a.createElement("a",{href:"#top",id:"bottom"},"Scroll to top!"))}}}]);