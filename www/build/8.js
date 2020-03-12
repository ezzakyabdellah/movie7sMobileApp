webpackJsonp([8],{282:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u(0),o=(u(2),u(84),u(96)),a=u(88),e=(u(294),function(){function n(n,l,u,t,o){this.toastCtrl=n,this.navCtrl=l,this.navParams=u,this.api=t,this.store=o,this._pageNo=2,this.getUpcoming()}return n.prototype.goToDetailsPage=function(n){this.navCtrl.push("MovieDetails",{id:n.id,data:n})},n.prototype.search=function(){this.navCtrl.push("Search",{type:"movies"})},n.prototype.getTopRated=function(){var n=this;this.store.getTopRated().then(function(l){n.topRated=l.results}),this.api.topRated(this._pageNo).subscribe(function(l){l.results&&(n.topRated=l.results)})},n.prototype.getPopular=function(){var n=this;console.log("getting popular"),this.store.getPopular().then(function(l){n.popular=l.results}),this.api.popular(this._pageNo).subscribe(function(l){l.results&&(n.popular=l.results)})},n.prototype.getLatest=function(){var n=this;this.api.latest(this._pageNo).subscribe(function(l){l.results&&(n.latest=l.results)})},n.prototype.getUpcoming=function(){var n=this;this.api.upcoming().subscribe(function(l){console.log("recieved upcoming"),n.store.setLatest(l),n.upcoming=l.results},function(l){n.loadOffline()})},n.prototype.loadOffline=function(n){var l=this;this.presentToast(n||"You are currently offline, serving you cached content"),this.store.getUpcoming().then(function(n){n.results[0]?(l.presentToast("You are currently offline, serving you cached content"),l.upcoming=n.results):l.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")})},n.prototype.doInfinite=function(n){var l=this;console.log("async operation started"),this.api.upcoming(this._pageNo).toPromise().then(function(u){u.results&&(l.upcoming=l.upcoming.concat(u.results),l._pageNo++,n.complete(),console.log("async operation ended"))}).catch(function(n){l.presentToast("Can't fetch you more movies. There seems to be something wrong with the network 😥📵")})},n.prototype.presentToast=function(n){this.toastCtrl.create({position:"bottom",duration:4e3,message:n}).present()},n}()),i=function(){return function(){}}(),s=u(216),c=u(217),r=u(218),p=u(219),g=u(220),d=u(221),_=u(222),b=u(223),f=u(224),h=u(143),m=u(89),v=u(1),k=u(86),Y=u(5),j=u(291),Z=u(45),y=u(8),T=u(20),C=u(46),I=u(19),z=u(140),x=u(23),P=u(138),w=u(37),S=u(38),N=u(292),q=u(134),A=u(225),F=u(21),M=u(4),O=u(9),R=u(25),U=u(144),H=u(12),X=u(85),D=u(293),G=u(135),L=u(90),$=u(11),B=t.X({encapsulation:2,styles:[],data:{}});function V(n){return t._22(0,[(n()(),t.Z(0,0,null,null,9,"ion-col",[["class","col"],["col-12",""],["col-lg-4",""],["col-md-6",""]],null,null,null,null,null)),t.Y(1,16384,null,0,h.a,[],null,null),(n()(),t._20(-1,null,["\n      "])),(n()(),t.Z(3,0,null,null,5,"ion-card",[],null,[[null,"click"]],function(n,l,u){var t=!0;"click"===l&&(t=!1!==n.component.goToDetailsPage(n.context.$implicit)&&t);return t},null,null)),t.Y(4,16384,null,0,m.a,[v.a,t.j,t.z],null,null),(n()(),t._20(-1,null,["\n        "])),(n()(),t.Z(6,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),t._20(-1,null,["\n        "])),(n()(),t._20(-1,null,["\n      "])),(n()(),t._20(-1,null,["\n    "]))],null,function(n,l){n(l,6,0,"https://image.tmdb.org/t/p/w500"+l.context.$implicit.poster_path,l.context.$implicit.title)})}function E(n){return t._22(0,[(n()(),t.Z(0,0,null,null,32,"ion-header",[],null,null,null,null,null)),t.Y(1,16384,null,0,k.a,[v.a,t.j,t.z,[2,Y.a]],null,null),(n()(),t._20(-1,null,["\n  "])),(n()(),t.Z(3,0,null,null,28,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),t.Y(4,49152,null,0,Z.a,[y.a,[2,Y.a],[2,T.a],v.a,t.j,t.z],null,null),(n()(),t._20(-1,3,["\n    "])),(n()(),t.Z(6,0,null,0,8,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var o=!0;"click"===l&&(o=!1!==t._13(n,8).toggle()&&o);return o},C.b,C.a)),t.Y(7,1097728,[[1,4]],0,I.a,[[8,""],v.a,t.j,t.z],null,null),t.Y(8,1064960,null,0,z.a,[x.a,[2,Y.a],[2,I.a],[2,Z.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(9,16384,null,1,P.a,[v.a,t.j,t.z,[2,w.a],[2,Z.a]],null,null),t._18(603979776,1,{_buttons:1}),(n()(),t._20(-1,0,["\n      "])),(n()(),t.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(13,147456,null,0,S.a,[v.a,t.j,t.z],{name:[0,"name"]},null),(n()(),t._20(-1,0,["\n    "])),(n()(),t._20(-1,3,["\n    "])),(n()(),t.Z(16,0,null,3,2,"ion-title",[],null,null,null,N.b,N.a)),t.Y(17,49152,null,0,q.a,[v.a,t.j,t.z,[2,w.a],[2,Z.a]],null,null),(n()(),t._20(-1,0,["MOVIES"])),(n()(),t._20(-1,3,["\n    "])),(n()(),t.Z(20,0,null,2,10,"ion-buttons",[["end",""]],null,[[null,"click"]],function(n,l,u){var t=!0;"click"===l&&(t=!1!==n.component.search()&&t);return t},null,null)),t.Y(21,16384,null,1,P.a,[v.a,t.j,t.z,[2,w.a],[2,Z.a]],null,null),t._18(603979776,2,{_buttons:1}),(n()(),t._20(-1,null,["\n      "])),(n()(),t.Z(24,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,null,null,C.b,C.a)),t.Y(25,1097728,[[2,4]],0,I.a,[[8,""],v.a,t.j,t.z],null,null),(n()(),t._20(-1,0,["\n        "])),(n()(),t.Z(27,0,null,0,1,"ion-icon",[["name","search"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(28,147456,null,0,S.a,[v.a,t.j,t.z],{name:[0,"name"]},null),(n()(),t._20(-1,0,["\n      "])),(n()(),t._20(-1,null,["\n    "])),(n()(),t._20(-1,3,["\n  "])),(n()(),t._20(-1,null,["\n"])),(n()(),t._20(-1,null,["\n\n"])),(n()(),t.Z(34,0,null,null,16,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,A.b,A.a)),t.Y(35,4374528,null,0,F.a,[v.a,M.a,O.a,t.j,t.z,y.a,R.a,t.u,[2,Y.a],[2,T.a]],null,null),(n()(),t._20(-1,1,["\n  "])),(n()(),t.Z(37,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(38,16384,null,0,U.a,[],null,null),(n()(),t._20(-1,null,["\n    "])),(n()(),t.U(16777216,null,null,1,null,V)),t.Y(41,802816,null,0,H.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(n()(),t._20(-1,null,["\n  "])),(n()(),t._20(-1,1,["\n  "])),(n()(),t.Z(44,0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,u){var t=!0;"ionInfinite"===l&&(t=!1!==n.component.doInfinite(u)&&t);return t},null,null)),t.Y(45,1196032,null,0,X.a,[F.a,t.u,t.j,O.a],null,{ionInfinite:"ionInfinite"}),(n()(),t._20(-1,null,["\n    "])),(n()(),t.Z(47,0,null,null,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Getting more movies... Hold on"]],[[1,"state",0]],null,null,D.b,D.a)),t.Y(48,114688,null,0,G.a,[X.a,v.a],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(n()(),t._20(-1,null,["\n  "])),(n()(),t._20(-1,1,["\n"])),(n()(),t._20(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,8,0,"");n(l,13,0,"menu");n(l,28,0,"search"),n(l,41,0,u.upcoming);n(l,48,0,"bubbles","Getting more movies... Hold on")},function(n,l){n(l,3,0,t._13(l,4)._hidden,t._13(l,4)._sbPadding),n(l,6,0,t._13(l,8).isHidden),n(l,12,0,t._13(l,13)._hidden),n(l,27,0,t._13(l,28)._hidden),n(l,34,0,t._13(l,35).statusbarPadding,t._13(l,35)._hasRefresher),n(l,47,0,t._13(l,48).inf.state)})}var J=t.V("page-movies",e,function(n){return t._22(0,[(n()(),t.Z(0,0,null,null,1,"page-movies",[],null,null,null,E,B)),t.Y(1,49152,null,0,e,[L.a,T.a,$.a,o.a,a.a],null,null)],null,null)},{},{},[]),W=u(18),K=u(136),Q=u(39);u.d(l,"MoviesModuleNgFactory",function(){return nn});var nn=t.W(i,[],function(n){return t._10([t._11(512,t.i,t.S,[[8,[s.a,c.a,r.a,p.a,g.a,d.a,_.a,b.a,f.a,J]],[3,t.i],t.s]),t._11(4608,H.l,H.k,[t.r,[2,H.u]]),t._11(4608,W.k,W.k,[]),t._11(4608,W.c,W.c,[]),t._11(512,H.b,H.b,[]),t._11(512,W.j,W.j,[]),t._11(512,W.d,W.d,[]),t._11(512,W.i,W.i,[]),t._11(512,K.a,K.a,[]),t._11(512,K.b,K.b,[]),t._11(512,i,i,[]),t._11(256,Q.a,e,[])])})},291:function(n,l,u){"use strict";u.d(l,"a",function(){return c}),l.b=r;var t=u(0),o=u(12),a=u(46),e=u(19),i=u(1),s=u(38),c=(u(45),u(5),u(20),t.X({encapsulation:2,styles:[],data:{}}));function r(n){return t._22(0,[(n()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var t=!0;"click"===l&&(t=!1!==n.component.backButtonClick(u)&&t);return t},a.b,a.a)),t.Y(3,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(n()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,s.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(n()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),t._20(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(n()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(n,l){var u=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+u._mode);n(l,3,0,"back-button","back-button-"+u._mode);n(l,6,0,"back-button-icon","back-button-icon-"+u._mode),n(l,7,0,u._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+u._mode);n(l,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(n,l){var u=l.component;n(l,2,0,u._hideBb),n(l,5,0,t._13(l,7)._hidden),n(l,10,0,u._backText)})}},292:function(n,l,u){"use strict";u.d(l,"a",function(){return a}),l.b=e;var t=u(0),o=u(12),a=(u(134),u(1),u(37),u(45),t.X({encapsulation:2,styles:[],data:{}}));function e(n){return t._22(2,[(n()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}},293:function(n,l,u){"use strict";u.d(l,"a",function(){return s}),l.b=p;var t=u(0),o=u(226),a=u(57),e=u(1),i=u(12),s=(u(135),u(85),t.X({encapsulation:2,styles:[],data:{}}));function c(n){return t._22(0,[(n()(),t.Z(0,0,null,null,2,"div",[["class","infinite-loading-spinner"]],null,null,null,null,null)),(n()(),t.Z(1,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,o.b,o.a)),t.Y(2,114688,null,0,a.a,[e.a,t.j,t.z],{name:[0,"name"]},null)],function(n,l){n(l,2,0,l.component.loadingSpinner)},function(n,l){n(l,1,0,t._13(l,2)._paused)})}function r(n){return t._22(0,[(n()(),t.Z(0,0,null,null,0,"div",[["class","infinite-loading-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.loadingText)})}function p(n){return t._22(0,[(n()(),t.Z(0,0,null,null,4,"div",[["class","infinite-loading"]],null,null,null,null,null)),(n()(),t.U(16777216,null,null,1,null,c)),t.Y(2,16384,null,0,i.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(n()(),t.U(16777216,null,null,1,null,r)),t.Y(4,16384,null,0,i.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.loadingSpinner),n(l,4,0,u.loadingText)},null)}},294:function(n,l){}});