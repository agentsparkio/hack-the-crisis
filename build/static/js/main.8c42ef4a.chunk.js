(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[0],{102:function(e,a,t){e.exports=t(171)},107:function(e,a,t){},108:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),o=(t(107),t(17)),i=t(14),m=t(24),s=t(37),u=t(173),E=t(27),d=t(10);t(108);var p=function(e){var a=e.title,t=e.location,n=l.a.createElement(u.e,null,l.a.createElement(i.b,{to:"/profile"},l.a.createElement(u.g,{icon:"user",text:"Profile"})),l.a.createElement(i.b,{to:"/timeline"},l.a.createElement(u.g,{icon:"star",text:"My Badges"})),l.a.createElement(i.b,{to:"/my-data"},l.a.createElement(u.g,{icon:"timeline-line-chart",text:"My Data"})),l.a.createElement(u.g,{icon:"map",text:"Map (coming soon)",disabled:!0}),l.a.createElement(u.f,null),l.a.createElement(i.b,{to:"/about"},l.a.createElement(u.g,{icon:"help",text:"About"})),l.a.createElement(u.g,{icon:"log-out",text:"Logout",disabled:!0}));return l.a.createElement("header",{className:"Header"},l.a.createElement(u.h,null,l.a.createElement(u.i,{align:E.a.LEFT,className:"Header__logo"},l.a.createElement(u.d,{icon:s.a.CIRCLE}),l.a.createElement(u.j,null,l.a.createElement(i.b,{to:"/"},l.a.createElement("h1",null,a))," ",l.a.createElement("span",{className:"Header__tag"},"Improve your life."))),l.a.createElement(u.i,{align:E.a.RIGHT,className:"Header__points"},l.a.createElement("span",{className:"Header__location"},"Your location is ",t," ",l.a.createElement(u.d,{icon:"geolocation"})),l.a.createElement(u.k,{content:n,position:d.a.RIGHT_BOTTOM},l.a.createElement(u.d,{icon:"user",className:"Header__profileIcon"})))))},g=t(1);t(137);var h=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(u.h,null,l.a.createElement(u.i,{align:E.a.CENTER},l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/me"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"dashboard",text:"Dashboard"})),l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/learn"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"heart",text:"Learn"})),l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/explore"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"layout",text:"Explore"})))))},f=t(60),v=t.n(f),b=t(61),N=t.n(b);t(138);var C=function(e){var a=e.points,t=e.isHidden,n=N()(),c=n.width,r=n.height;return t?null:l.a.createElement("div",{className:"Complete"},l.a.createElement(v.a,{width:c,height:r}),l.a.createElement("div",{className:"Complete__pointsContainer"},l.a.createElement("span",{className:"Complete__pointsBrackets"}," ","{"," "),l.a.createElement("div",{className:"Complete__pointsStack"},l.a.createElement("span",{className:"Complete__points"}," ",a," "),l.a.createElement("span",{className:"Complete__pointsTxt"},"GREEN POINTS")),l.a.createElement("span",{className:"Complete__pointsBrackets"}," ","}","  ")),l.a.createElement(u.a,{className:"Complete__wohoo",onClick:function(){window.history.back()}},"WOHOO!"))};t(144);var _=function(e){var a=e.type,t=(e.description,e.points),n=l.a.useState(1),c=Object(o.a)(n,2),r=c[0],i=c[1],m=l.a.useState(!1),s=Object(o.a)(m,2),E=s[0],d=s[1];return l.a.createElement("div",{className:"Quiz"},E&&l.a.createElement(C,{points:t,isHidden:!E}),l.a.createElement("h1",null,a," Assessment"),l.a.createElement("p",null,"Complete quiz for an extra ",t," points"),l.a.createElement(u.c,{label:"1. How well do you XYZ?",labelFor:"text-input"},l.a.createElement(u.l,{min:0,max:10,stepSize:1,labelStepSize:1,onChange:function(e){return i(e)},labelRenderer:function(e){return e},value:r})),l.a.createElement(u.a,{onClick:function(){return d(!0)},type:"submit",title:"Submit assessment"},"Submit assessment"))};t(145);var y=function(e){var a=e.location,t=e.points,n=e.userName;return l.a.createElement("div",{className:"Profile"},l.a.createElement("div",{className:"profile"}),l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,n),l.a.createElement("div",{className:"Profile__points"},t),l.a.createElement("div",{className:"Profile__pointsText"},"Green Points"),l.a.createElement(u.d,{icon:"geolocation"})," ",a))};t(146);var w=function(e){var a=e.points,t=e.icon,n=isNaN(a)?"badge":"points",c=l.a.createElement("svg",{version:"1.1",className:"Badge__leaf",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"551.391px",height:"551.391px",viewBox:"0 0 551.391 551.391"},l.a.createElement("g",null,l.a.createElement("path",{d:"M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121 c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479 c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875 c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z"})),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null));return l.a.createElement("div",{className:"Badge ".concat(n)},l.a.createElement(u.a,{className:"".concat(g.a.MINIMAL," ")},"points"===n&&c,t&&l.a.createElement(u.d,{icon:t}),l.a.createElement("span",{className:"Badge__text"},a," ","points"===n?"Green Points":"")))},x=t(22);t(147);var S=function(e){var a=e.image,t=e.title,n=e.description;return l.a.createElement("div",{className:"Article"},l.a.createElement(u.b,{interactive:!0,elevation:x.a.TWO},l.a.createElement("div",{className:"Article__image",style:{backgroundImage:'url("'.concat(a,'")')}}),l.a.createElement("div",{className:"Article__content"},l.a.createElement("h5",null,l.a.createElement("a",{href:"http://www.test.com"},t)),l.a.createElement("p",{class:"Article__desc"},n))),l.a.createElement("div",{className:"clear"}))};t(148);var k=function(){return l.a.createElement("div",{className:"Rewards"},l.a.createElement(S,{title:"15% off Wine at Marrickville Fish n Chip Takeout",description:"Save 20% off all sustainable and organically grown food. Voucher Code: 666. ",image:"hand-hold-show-recyclable-plastic-600w-612750737.webp"}),l.a.createElement(S,{title:"Glebe Cruelty Free Shop 20% off",description:"Save 20% off all sustainable and organically grown food. ",image:"trash-recycle-reduce-ecology-environment-600w-731239045.webp"}),l.a.createElement(S,{title:"Devil By Design 6.66% off",description:"Save 20% off all sustainable and organically grown food. Voucher Code: 666. ",image:"plastic-bottle-garbage-recycling-concept-600w-698172910.webp"}))};t(149);var O=function(){return l.a.createElement("div",{className:"MyData container"},l.a.createElement(u.b,null,l.a.createElement("h2",null,"You have no data yet :(")))};t(150);var M=function(e){var a=e.location,t=l.a.useState("MyData"),n=Object(o.a)(t,2),c=(n[0],n[1],l.a.useState(!0)),r=Object(o.a)(c,2),i=r[0],m=r[1];return l.a.createElement("div",{className:"Dashboard container"},i&&l.a.createElement(u.b,{interactive:!1,className:"Dashboard__alert"},l.a.createElement("h2",{className:"Learn__dashboardHeader"},"Want some competition?"),l.a.createElement("p",null,"Start the ",l.a.createElement("strong",null,"Greta Thunberg Challenge")," and earn 200 points."),l.a.createElement("p",null,l.a.createElement(u.a,{intent:"success",className:"rightMargin"},"Begin challenge"),l.a.createElement(u.a,{intent:"info",onClick:function(){return m(!1)}},"No thank you"))),l.a.createElement("h1",null,"Dashboard"),l.a.createElement(O,null),l.a.createElement("h3",null,"Local Offers from ",a),l.a.createElement(k,null),l.a.createElement("h3",null,"Daily Challenges"),l.a.createElement(k,null))};t(151);var I=function(){return l.a.createElement("div",{className:"Map"},l.a.createElement("img",{src:"./map.png"}))};var T=function(){return l.a.createElement("div",{className:"Leaderboard"},l.a.createElement(I,null))};t(152);var L=function(){var e=l.a.useState("Leaderboard"),a=Object(o.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{className:"Explore container-wide"},l.a.createElement(u.n,{onChange:function(e){n(e)},selectedTabId:t},l.a.createElement(u.m,{id:"Leaderboard",title:"Leaderboard",panel:l.a.createElement(T,null)}),l.a.createElement(u.m,{id:"Community",title:"Community",panel:l.a.createElement(k,null)}),l.a.createElement(u.n.Expander,null)))};t(153);var A=function(e){var a=e.name,t=e.score,n=e.total,c=e.icon,r=e.link,o=e.theme,m=t===n;return l.a.createElement(i.b,{to:r,className:m?"Challenge ".concat(o):"Challenge complete ".concat(o)},l.a.createElement("div",{className:"name"},a),l.a.createElement(u.d,{icon:c,className:"bottomMargin Challenge__icon"}),l.a.createElement("div",{className:"clear"}),m&&l.a.createElement("div",{className:"total complete"},"COMPLETE"),!m&&l.a.createElement("div",{className:"total"},t," GREEN POINTS"))};t(154);var B=function(){return l.a.createElement("div",{className:"Learn container"},l.a.createElement("h1",null,"Learn by doing."),l.a.createElement("p",null,"You can complete the following challenges to redeem all points for this week. "),l.a.createElement("p",null,"The more you learn, the more green points you earn."),l.a.createElement("h3",null,"Local Challenges"),l.a.createElement(A,{name:"Recycling 101",score:"3",total:"15",icon:"refresh",link:"/recycling"}),l.a.createElement(A,{name:"Food Waste",score:"3",total:"15",icon:"tree",link:""}),l.a.createElement(A,{name:"Compost Challenge",score:"15",total:"15",icon:"heatmap"}),l.a.createElement("div",{className:"clear"}),l.a.createElement("h3",null,"National Challenges"),l.a.createElement(A,{name:"Donations to Red Cross",score:"12",total:"15",icon:"plus",theme:"COVID19"}),l.a.createElement(A,{name:"Donations to Salvos",score:"12",total:"15",icon:"plus",theme:"COVID19"}))},D=t(41),H=(t(167),t(42));t(168);var P=function(){return l.a.createElement("div",{className:"Achievement container"},l.a.createElement(D.VerticalTimeline,null,H.achievements.length&&H.achievements.map((function(e){return l.a.createElement(D.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#efefef",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #efefef"},date:e.datetimestamp,iconStyle:{background:"#efefef",color:"".concat(e.colour)},icon:l.a.createElement(u.d,{icon:e.badge})},l.a.createElement(w,{points:e.details,icon:e.badge}),l.a.createElement("div",{className:"right Achievement__points"},l.a.createElement(w,{points:e.points})),l.a.createElement("div",{className:"clear"}))})),"}"))};var R=function(e){var a=e.title;return l.a.createElement("div",{className:"About container"},l.a.createElement("h1",null,"About ",a),l.a.createElement("h2",null,"PROBLEM"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Surplus of food / excess money"),l.a.createElement("li",null,"Household waste / charity"),l.a.createElement("li",null,"People have more time now / life improvement")),l.a.createElement("h2",null,"SOLUTION"),l.a.createElement("p",null,"Donations and Waste Management"))};t(169),t(170);var G=function(){var e=l.a.useState("Jane Smith"),a=Object(o.a)(e,2),t=a[0],n=(a[1],l.a.useState("Zero Waste")),c=Object(o.a)(n,2),r=c[0],s=(c[1],l.a.useState("Marrickville")),u=Object(o.a)(s,2),E=u[0],d=(u[1],l.a.useState(200)),g=Object(o.a)(d,2),f=g[0];return g[1],l.a.createElement(i.a,null,l.a.createElement(p,{title:r,location:E}),l.a.createElement("div",{className:"content"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/profile"},l.a.createElement(y,{userName:t,points:f,location:E})),l.a.createElement(m.a,{path:"/about"},l.a.createElement(R,{title:r})),l.a.createElement(m.a,{path:"/timeline"},l.a.createElement(P,null)),l.a.createElement(m.a,{path:"/my-data"},l.a.createElement(O,null)),l.a.createElement(m.a,{path:"/learn"},l.a.createElement(B,null)),l.a.createElement(m.a,{path:"/explore"},l.a.createElement(L,null)),l.a.createElement(m.a,{path:"/recycling"},l.a.createElement(_,{type:"Recycling",description:"Complete this quiz to earn 32 extra points",points:20})),l.a.createElement(m.a,{path:"/"},l.a.createElement(M,{location:E})))),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e){e.exports=JSON.parse('{"achievements":[{"datetimestamp":"2020-09-02","details":"Veggie Patch Badge","points":340,"badge":"heatmap","colour":"gold"},{"datetimestamp":"2020-10-02","details":"Green Badge","points":400,"badge":"tree","colour":"darkgreen"},{"datetimestamp":"2020-11-02","details":"Captain Planet Badge","points":500,"badge":"globe","colour":"lightblue"},{"datetimestamp":"2020-09-02","details":"Greta Thunberg Unlocked","points":2200,"badge":"star","colour":"purple"},{"datetimestamp":"2020-10-02","details":"Green Thumb Challenge","points":2800,"badge":"star","colour":"pink"},{"datetimestamp":"2020-11-02","details":"COVID-19 Challenge","points":900,"badge":"lightbulb","colour":"red"}]}')}},[[102,1,2]]]);
//# sourceMappingURL=main.8c42ef4a.chunk.js.map