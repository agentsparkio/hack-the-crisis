(this["webpackJsonphack-the-crisis"]=this["webpackJsonphack-the-crisis"]||[]).push([[0],{106:function(e,a,t){e.exports=t(176)},111:function(e,a,t){},112:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){},157:function(e,a,t){},158:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),o=(t(111),t(14)),i=t(16),m=t(24),s=t(37),u=t(178),E=t(27),d=t(10);t(112);var p=function(e){var a=e.title,t=e.location,n=l.a.createElement(u.d,null,l.a.createElement(i.b,{to:"/profile"},l.a.createElement(u.f,{icon:"user",text:"Profile"})),l.a.createElement(i.b,{to:"/timeline"},l.a.createElement(u.f,{icon:"star",text:"My Badges"})),l.a.createElement(i.b,{to:"/my-data"},l.a.createElement(u.f,{icon:"timeline-line-chart",text:"My Data"})),l.a.createElement(u.f,{icon:"map",text:"Map (coming soon)",disabled:!0}),l.a.createElement(u.e,null),l.a.createElement(i.b,{to:"/about"},l.a.createElement(u.f,{icon:"help",text:"About"})),l.a.createElement(u.f,{icon:"log-out",text:"Logout",disabled:!0}));return l.a.createElement("header",{className:"Header"},l.a.createElement(u.g,null,l.a.createElement(u.h,{align:E.a.LEFT,className:"Header__logo"},l.a.createElement(u.c,{icon:s.a.CIRCLE}),l.a.createElement(u.i,null,l.a.createElement(i.b,{to:"/"},l.a.createElement("h1",null,a))," ",l.a.createElement("span",{className:"Header__tag"},"Improve your life."))),l.a.createElement(u.h,{align:E.a.RIGHT,className:"Header__points"},l.a.createElement("span",{className:"Header__location"},"Your location is ",t," ",l.a.createElement(u.c,{icon:"geolocation"})),l.a.createElement(u.j,{content:n,position:d.a.RIGHT_BOTTOM},l.a.createElement(u.c,{icon:"user",className:"Header__profileIcon"})))))},g=t(1);t(141);var h=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(u.g,null,l.a.createElement(u.h,{align:E.a.CENTER},l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/learn"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"heart",text:"Learn"})),l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/dashboard"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"walk",text:"Do"})),l.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/explore"},l.a.createElement(u.a,{className:g.a.MINIMAL,icon:"layout",text:"Explore"})))))},f=t(60),v=t.n(f),b=t(61),N=t.n(b);t(142);var _=function(e){var a=e.points,t=e.isHidden,n=N()(),c=n.width,r=n.height;return t?null:l.a.createElement("div",{className:"Complete"},l.a.createElement(v.a,{width:c,height:r}),l.a.createElement("div",{className:"Complete__pointsContainer"},l.a.createElement("span",{className:"Complete__pointsBrackets"}," ","{"," "),l.a.createElement("div",{className:"Complete__pointsStack"},l.a.createElement("span",{className:"Complete__points"}," ",a," "),l.a.createElement("span",{className:"Complete__pointsTxt"},"GREEN POINTS")),l.a.createElement("span",{className:"Complete__pointsBrackets"}," ","}","  ")),l.a.createElement(u.a,{className:"Complete__wohoo",onClick:function(){window.history.back()}},"WOHOO!"))},y=(t(148),t(62));var C=function(e){var a=e.type,t=(e.description,e.points),n=l.a.useState("one"),c=Object(o.a)(n,2),r=c[0],i=(c[1],l.a.useState(!1)),m=Object(o.a)(i,2),s=m[0],E=m[1],d=l.a.useState(y.questions),p=Object(o.a)(d,2),g=p[0];return p[1],l.a.createElement("div",{className:"Quiz"},s&&l.a.createElement(_,{points:t,isHidden:!s}),l.a.createElement("h1",null,a," Quiz"),l.a.createElement("p",null,"Complete quiz for ",t," points. Begin..."),l.a.createElement("div",{className:"bottomSpace"}),g.map((function(e,a){if("radio"===e.type){var t=e.answers.map((function(e){return l.a.createElement(u.k,{label:e.label,value:e.label})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.l,{inline:"inline",label:"".concat(a+1,". ").concat(e.label),name:"group",onChange:function(e){},selectedValue:r},t),l.a.createElement("div",{className:"bottomSpace"}))}})),l.a.createElement("div",{className:"bottomSpace"}),l.a.createElement(u.a,{intent:"success",onClick:function(){return E(!0)},type:"submit",title:"Submit assessment"},"Submit assessment"))};t(149);var w=function(e){var a=e.location,t=e.points,n=e.userName;return l.a.createElement("div",{className:"Profile"},l.a.createElement("div",{className:"profile"}),l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,n),l.a.createElement("div",{className:"Profile__points"},t),l.a.createElement("div",{className:"Profile__pointsText"},"Green Points"),l.a.createElement(u.c,{icon:"geolocation"})," ",a))};t(150);var x=function(e){var a=e.points,t=e.icon,n=isNaN(a)?"badge":"points",c=l.a.createElement("svg",{version:"1.1",className:"Badge__leaf",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"551.391px",height:"551.391px",viewBox:"0 0 551.391 551.391"},l.a.createElement("g",null,l.a.createElement("path",{d:"M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121 c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479 c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875 c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z"})),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null));return l.a.createElement("div",{className:"Badge ".concat(n)},l.a.createElement("div",{className:"".concat(g.a.MINIMAL," ")},"points"===n&&c,t&&l.a.createElement(u.c,{icon:t}),l.a.createElement("span",{className:"Badge__text"},a," ","points"===n?"Green Points":"")))},S=t(22);t(151);var k=function(e){var a=e.image,t=e.title,n=e.description;return l.a.createElement("div",{className:"Article"},l.a.createElement(u.b,{interactive:!0,elevation:S.a.TWO},l.a.createElement("div",{className:"Article__image",style:{backgroundImage:'url("'.concat(a,'")')}}),l.a.createElement("div",{className:"Article__content"},l.a.createElement("h5",null,l.a.createElement("a",{href:"http://www.test.com"},t)),l.a.createElement("p",{class:"Article__desc"},n))),l.a.createElement("div",{className:"clear"}))};t(152);var M=function(){return l.a.createElement("div",{className:"Rewards"},l.a.createElement(k,{title:"15% off Wine at Marrickville Fish n Chip Takeout",description:"Save 20% off all sustainable and organically grown food. Voucher Code: 666. ",image:"leisure-people-technology-concept-happy-couple-laptop-computer-takeaway-pizza-drinking-red-wine-home-happy-151690785.jpg"}),l.a.createElement(k,{title:"Glebe Cruelty Free Shop 20% off",description:"Save 20% off all sustainable and organically grown food. ",image:"healthy-organic-food-apple-cider-vinegar-juice-glass-bottle-fresh-red-apples-healthy-organic-food-apple-cider-vinegar-153750037.jpg"}),l.a.createElement(k,{title:"Devil By Design 6.66% off",description:"Save 20% off all sustainable and organically grown food. Voucher Code: 666. ",image:"online-order-grocery-shopping-concept-food-delivery-ingredients-service-home-cooking-packages-box-icon-media-152464079.jpg"}))};t(153);var O=function(){return l.a.createElement("div",{className:"MyData"},l.a.createElement(u.b,null,l.a.createElement("h2",null,"You have no data yet :(")))};t(154),t(155);var R=function(e){var a=e.name,t=e.score,n=e.total,c=e.icon,r=e.link,o=e.theme,m=t===n;return l.a.createElement(i.b,{to:r,className:m?"Challenge ".concat(o," complete"):"Challenge ".concat(o)},l.a.createElement("div",{className:"name"},a),l.a.createElement(u.c,{icon:c,className:"bottomMargin Challenge__icon"}),l.a.createElement("div",{className:"clear"}),m&&l.a.createElement("div",{className:"total complete"},"COMPLETE"),!m&&l.a.createElement(x,{points:t}))};var I=function(e){var a=e.location,t=l.a.useState("MyData"),n=Object(o.a)(t,2),c=(n[0],n[1],l.a.useState(!0)),r=Object(o.a)(c,2),i=r[0],m=r[1];return l.a.createElement("div",{className:"Dashboard container"},i&&l.a.createElement(u.b,{interactive:!1,className:"Dashboard__alert"},l.a.createElement("h2",{className:"Learn__dashboardHeader"},"Want some competition?"),l.a.createElement("p",null,"Start the ",l.a.createElement("strong",null,"Greta Thunberg Challenge")," and earn 200 points."),l.a.createElement("p",null,l.a.createElement(u.a,{intent:"success",className:"rightMargin"},"Begin challenge"),l.a.createElement(u.a,{intent:"info",onClick:function(){return m(!1)}},"No thank you"))),l.a.createElement("h1",null,"Get active"),l.a.createElement("h3",null,"Local Offers from ",a," ",l.a.createElement(u.c,{icon:"geolocation"})),l.a.createElement(M,null),l.a.createElement("h3",null,"National Challenges"),l.a.createElement("div",{className:"flex"},l.a.createElement(R,{name:"Covid O War",score:"500",total:"1500",icon:"heatmap",theme:"COVID19"}),l.a.createElement(R,{name:"Red Cross Donate",score:"120",total:"1500",icon:"plus",theme:"RED"}),l.a.createElement(R,{name:"Salvos Donate",score:"12",total:"1500",icon:"plus",theme:"RED"})))},T=(t(156),t(63));var L=function(){var e=l.a.useState(T.leaderboard),a=Object(o.a)(e,2),t=a[0];return a[1],l.a.createElement("div",{className:"Map"},l.a.createElement("div",{className:"Map__itemHeader"},l.a.createElement("div",{className:"left"},"SUBURB"),l.a.createElement("div",{className:"right"},"POINTS"),l.a.createElement("div",{className:"bottomSpace clear"})),t.map((function(e){return l.a.createElement("div",{className:"Map__item"},l.a.createElement("div",{className:"left"},e.label),l.a.createElement("div",{className:"right"},e.points),l.a.createElement("div",{className:"clear"}))})),l.a.createElement("img",{src:"./map.png"}))};var B=function(){return l.a.createElement("div",{className:"Leaderboard"},l.a.createElement(L,null))};t(157);var j=function(){var e=l.a.useState("Leaderboard"),a=Object(o.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{className:"Explore container-wide"},l.a.createElement(u.n,{onChange:function(e){n(e)},selectedTabId:t},l.a.createElement(u.m,{id:"Leaderboard",title:"Leaderboard",panel:l.a.createElement(B,null)}),l.a.createElement(u.m,{id:"Community",title:"Community",panel:l.a.createElement(M,null)}),l.a.createElement(u.n.Expander,null)))};t(158);var H=function(){return l.a.createElement("div",{className:"Learn container"},l.a.createElement("h1",null,"Learn by doing."),l.a.createElement("p",null,"You can complete the following challenges to redeem all points for this week. "),l.a.createElement("p",null,"The more you learn, the more green points you earn."),l.a.createElement("h3",null,"Local Challenges"),l.a.createElement("div",{className:"flex"},l.a.createElement(R,{name:"Managing Waste",score:"300",total:"400",icon:"refresh",link:"/waste-management"}),l.a.createElement(R,{name:"Food Waste",score:"300",total:"400",icon:"tree",link:""}),l.a.createElement(R,{name:"Compost Challenge",score:"400",total:"400",icon:"heatmap"})),l.a.createElement("div",{className:"clear"}))},A=t(41),D=(t(171),t(42));t(172);var P=function(){return l.a.createElement("div",{className:"Achievement container"},l.a.createElement(A.VerticalTimeline,null,D.achievements.length&&D.achievements.map((function(e){return l.a.createElement(A.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"transparent",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #efefef"},date:e.datetimestamp,iconStyle:{background:"#efefef",color:"".concat(e.colour)},icon:l.a.createElement(u.c,{icon:e.badge})},l.a.createElement("h3",null,e.details),l.a.createElement("div",{className:"Achievement__points"},l.a.createElement(x,{points:e.points})),l.a.createElement("div",{className:"clear"}))}))))};t(173);var W=function(e){var a=e.title;return l.a.createElement("div",{className:"About container"},l.a.createElement("h1",null,"About ",a),l.a.createElement("h2",null,"PROBLEM"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Surplus of food / excess money"),l.a.createElement("li",null,"Household waste / charity"),l.a.createElement("li",null,"People have more time now / life improvement")),l.a.createElement("h2",null,"SOLUTION"),l.a.createElement("p",null,"Donations and Waste Management"))};t(174),t(175);var G=function(){var e=l.a.useState("Jane Smith"),a=Object(o.a)(e,2),t=a[0],n=(a[1],l.a.useState("Zero Waste")),c=Object(o.a)(n,2),r=c[0],s=(c[1],l.a.useState("Marrickville")),u=Object(o.a)(s,2),E=u[0],d=(u[1],l.a.useState(200)),g=Object(o.a)(d,2),f=g[0];return g[1],l.a.createElement(i.a,null,l.a.createElement(p,{title:r,location:E}),l.a.createElement("div",{className:"content"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/profile"},l.a.createElement(w,{userName:t,points:f,location:E})),l.a.createElement(m.a,{path:"/about"},l.a.createElement(W,{title:r})),l.a.createElement(m.a,{path:"/timeline"},l.a.createElement(P,null)),l.a.createElement(m.a,{path:"/my-data"},l.a.createElement("div",{className:"container"},l.a.createElement(O,null))),l.a.createElement(m.a,{path:"/learn"},l.a.createElement(H,null)),l.a.createElement(m.a,{path:"/explore"},l.a.createElement(j,null)),l.a.createElement(m.a,{path:"/waste-management"},l.a.createElement("div",{className:"container"},l.a.createElement(C,{type:"Waste Management",description:"Complete this quiz to earn 32 extra points",points:200}))),l.a.createElement(m.a,{path:"/"},l.a.createElement(I,{location:E})))),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e){e.exports=JSON.parse('{"achievements":[{"datetimestamp":"2020-09-02","details":"Veggie Patch Badge","points":340,"badge":"heatmap","colour":"gold"},{"datetimestamp":"2020-10-02","details":"Green Badge","points":400,"badge":"tree","colour":"darkgreen"},{"datetimestamp":"2020-11-02","details":"Captain Planet Badge","points":500,"badge":"globe","colour":"lightblue"},{"datetimestamp":"2020-09-02","details":"Greta Thunberg Unlocked","points":2200,"badge":"star","colour":"purple"},{"datetimestamp":"2020-10-02","details":"Green Thumb Challenge","points":2800,"badge":"star","colour":"pink"},{"datetimestamp":"2020-11-02","details":"COVID-19 Challenge","points":900,"badge":"lightbulb","colour":"red"}]}')},62:function(e){e.exports=JSON.parse('{"questions":[{"id":"1","type":"radio","label":"How do you feel about the future of waste management?","answers":[{"label":"Positive"},{"label":"Negative"}]},{"id":"2","type":"radio","label":"What do the 3 R\'s in waste disposal stand for?","answers":[{"label":"Reorganise, Reuse, Recycle"},{"label":"Reduce, Reuse, Recycle"},{"label":"Reduce, Remake, Recycle"}]}],"answers":[{"id":"1","answer":"Positive"}]}')},63:function(e){e.exports=JSON.parse('{"leaderboard":[{"label":"Marrickville","lat":"0","long":"0","points":"320000"},{"label":"Castle Hill","lat":"0","long":"0","points":"21300"},{"label":"Manly","lat":"0","long":"0","points":"18590"},{"label":"Epping","lat":"0","long":"0","points":"15692"}]}')}},[[106,1,2]]]);
//# sourceMappingURL=main.19bb785f.chunk.js.map