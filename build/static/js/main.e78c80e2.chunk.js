(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[0],{100:function(e,a,t){e.exports=t(144)},105:function(e,a,t){},106:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),o=(t(105),t(16)),i=t(23),m=t(36),s=t(146),u=t(27),E=t(1);t(106);var d=function(e){var a=e.points;return l.a.createElement("div",{className:"Badge"},l.a.createElement(s.a,{className:"".concat(E.a.MINIMAL," GreenPointBadge"),icon:"tree",text:"".concat(a," green points")}))};var p=function(){return l.a.createElement("header",{className:"Header"},l.a.createElement(s.e,null,l.a.createElement(s.f,{align:u.a.LEFT},l.a.createElement(s.g,null,l.a.createElement(o.b,{to:"/"},l.a.createElement(s.d,{icon:m.a.HEATMAP})," eConnect"))),l.a.createElement(s.f,{align:u.a.RIGHT},l.a.createElement(d,{points:"20"}))))};t(135);var v=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(s.e,null,l.a.createElement(s.f,{align:u.a.CENTER},l.a.createElement(o.b,{activeClassName:"active",to:"/me"},l.a.createElement(s.a,{className:E.a.MINIMAL,icon:"user",text:"Me"})),l.a.createElement(o.b,{activeClassName:"active",to:"/learn"},l.a.createElement(s.a,{className:E.a.MINIMAL,icon:"trending-up",text:"Learn"})),l.a.createElement(o.b,{activeClassName:"active",to:"/explore"},l.a.createElement(s.a,{className:E.a.MINIMAL,icon:"layout",text:"Explore"})))))},f=t(26);t(136);var h=function(e){var a=e.type,t=e.description,n=l.a.useState(1),r=Object(f.a)(n,2),c=r[0],o=r[1];return l.a.createElement("div",{className:"Quiz"},l.a.createElement("h1",null,a," Assessment"),l.a.createElement("p",null,t),l.a.createElement(s.c,{label:"1. How well do you XYZ?",labelFor:"text-input"},l.a.createElement(s.i,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return o(e)},labelRenderer:function(e){return e},value:c})),l.a.createElement(s.c,{label:"2. How well do you XYZ?",labelFor:"text-input"},l.a.createElement(s.i,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return o(e)},labelRenderer:function(e){return e},value:c})),l.a.createElement(s.c,{label:"How well do you XYZ?",labelFor:"text-input"},l.a.createElement(s.i,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return o(e)},labelRenderer:function(e){return e},value:c})),l.a.createElement(s.c,{label:"3. How well do you XYZ?",labelFor:"text-input"},l.a.createElement(s.i,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return o(e)},labelRenderer:function(e){return e},value:c})),l.a.createElement(s.c,{label:"4. How well do you XYZ?",labelFor:"text-input"},l.a.createElement(s.i,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return o(e)},labelRenderer:function(e){return e},value:c})),l.a.createElement(s.a,{type:"submit",title:"Submit assessment"},"Submit assessment"))};var b=function(){return l.a.createElement("div",{className:"Achievement"},"THINGS")},N=t(21);t(137);var g=function(){return l.a.createElement("div",{className:"Rewards"},l.a.createElement(s.b,{interactive:!0,elevation:N.a.TWO},l.a.createElement("h5",null,l.a.createElement(d,{points:"20"}),l.a.createElement("a",{href:"http://www.test.com"},"Cruelty Free Shop"),l.a.createElement("span",{className:"right"},"20% off")),l.a.createElement("p",null,"Get a discount of 25% for XYZ"),l.a.createElement(s.a,null,"REDEEM")))};t(138);var C=function(){var e=l.a.useState("Achievement"),a=Object(f.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{className:"Me"},l.a.createElement("div",{className:"profile"}),l.a.createElement("div",{className:"info"},"Jane Smith",l.a.createElement("br",null),"Testville NSW",l.a.createElement("br",null),"Level 10 - Captain Planet",l.a.createElement("br",null),l.a.createElement(d,{points:"20"})),l.a.createElement(s.k,{onChange:function(e){n(e)},selectedTabId:t},l.a.createElement(s.j,{id:"Achievement",title:"Achievement",panel:l.a.createElement(b,null)}),l.a.createElement(s.j,{id:"Rewards",title:"Rewards",panel:l.a.createElement(g,null)}),l.a.createElement(s.k.Expander,null)))};var S=function(){return l.a.createElement("div",{className:"Community"},"Leaderboard TODO: Data and map")};var w=function(){return l.a.createElement("div",{className:"Community"},"COMMUNITY TODO: Data")};t(139);var x=function(){var e=l.a.useState("Leaderboard"),a=Object(f.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{className:"Explore"},l.a.createElement(s.k,{onChange:function(e){n(e)},selectedTabId:t},l.a.createElement(s.j,{id:"Leaderboard",title:"Leaderboard",panel:l.a.createElement(S,null)}),l.a.createElement(s.j,{id:"Community",title:"Community",panel:l.a.createElement(w,null)}),l.a.createElement(s.k.Expander,null)))};t(140);var y=function(e){var a=e.name,t=e.score,n=e.total,r=e.icon,c=e.link,i=t===n;return l.a.createElement(o.b,{to:c},l.a.createElement("div",{className:i?"Challenge":"Challenge complete"},l.a.createElement("div",{className:"name"},a," ",l.a.createElement(s.d,{icon:r})),l.a.createElement("div",{className:"score"},t," GREEN POINTS"),i&&l.a.createElement("div",{className:"total"},"COMPLETE"),!i&&l.a.createElement("div",{className:"total"},t," / ",n," GP")))};t(141);var L=function(){return l.a.createElement("div",{className:"Learn"},l.a.createElement(s.b,{interactive:!0,elevation:N.a.TWO,className:"Learn__dashboard"},l.a.createElement("p",null,"NEW CHALLENGES THIS WEEK. Earn 800 more points to get to 1000 points."),l.a.createElement(s.h,{intent:"success",value:.2,animate:!0,stripes:!1,className:"Learn__progress"}),l.a.createElement("p",null,"You can complete the following challenges to redeem all points for this week.")),l.a.createElement(y,{name:"Recycling 101",score:"3",total:"15",icon:"tree",link:"/recycling"}),l.a.createElement(y,{name:"Food Waste",score:"3",total:"15",icon:"tree",link:""}),l.a.createElement(y,{name:"Compost Challenge",score:"15",total:"15",icon:"heatmap"}),l.a.createElement(y,{name:"Compost Challenge",score:"15",total:"15",icon:"heatmap"}))};t(142),t(143);var I=function(){return l.a.createElement(o.a,null,l.a.createElement(p,null),l.a.createElement("div",{className:"content"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/me"},l.a.createElement(C,null)),l.a.createElement(i.a,{path:"/learn"},l.a.createElement(L,null)),l.a.createElement(i.a,{path:"/explore"},l.a.createElement(x,null)),l.a.createElement(i.a,{path:"/recycling"},l.a.createElement(h,{type:"Recycling",description:"Complete this quiz to earn 32 extra points"})),l.a.createElement(i.a,{path:"/"},l.a.createElement(C,null)))),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.e78c80e2.chunk.js.map