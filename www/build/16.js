webpackJsonp([16],{276:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(2),u(84),u(139)),i=u(137),o=function(){function l(l,n,u,t){this._tmdb=l,this.MovApi=n,this.navCtrl=u,this.navParams=t,this.pet="a",this._pageNo=2,this.size=342,this.items=[],this.upcomingMovies=[],this.cannotLoadContent=!0,this._page1=0,this.data4=[],this.loadFirst()}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AnimePage")},l.prototype.loadFirst=function(){var l=this;this.MovApi.getSeasonsByCategory(this._page1,7).toPromise().then(function(n){l.converter(n,l.data4),l._page1++})},l.prototype.load=function(l,n){var u=this;return this.MovApi.getSeasonsByCategory(this._page1,7).toPromise().then(function(n){u.converter(n,u.data4),u._page1++,l.complete()})},l.prototype.converter=function(l,n){var u=this;return new Promise(function(t,a){for(var i=function(l){var t={fav:!1,tmdb:l.tmdb,created_at:l.created_at,season:l.num,seasonTmdb:l.tmdb,num:l.num,tv:l.tv,type:l.type,poster:"",release_date:"",vote_average:"",first_air_date:"",title:"",name:"",Epi:l.Epi};u.getTMDB(t).subscribe(function(l){t.poster=l.poster_path,t.release_date=l.release_date,t.vote_average=l.vote_average,t.first_air_date=l.air_date,t.title=l.title,t.name=l.name,n.push(t)})},o=0,e=l;o<e.length;o++){i(e[o])}t(n)})},l.prototype.getTMDB=function(l){return this._tmdb.getSeason(l.tv,l.num)},l}(),e=function(){return function(){}}(),c=u(216),s=u(217),r=u(218),_=u(219),d=u(220),m=u(221),p=u(222),b=u(223),f=u(224),g=u(38),v=u(1),h=u(143),k=u(89),Z=u(144),Y=u(12),j=u(86),y=u(5),x=u(291),z=u(45),I=u(8),C=u(20),$=u(46),T=u(19),F=u(140),A=u(23),w=u(138),P=u(37),S=u(292),M=u(134),q=u(225),B=u(21),D=u(4),U=u(9),E=u(25),L=u(85),X=u(293),O=u(135),V=u(11),H=t.X({encapsulation:2,styles:[],data:{}});function N(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"ion-icon",[["name","ios-bookmark"],["role","img"]],[[2,"hide",null]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.unfavoriteFilm(l.parent.context.$implicit)&&t);return t},null,null)),t.Y(1,147456,null,0,g.a,[v.a,t.j,t.z],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"ios-bookmark")},function(l,n){l(n,0,0,t._13(n,1)._hidden)})}function J(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"ion-icon",[["name","ios-bookmark-outline"],["role","img"]],[[2,"hide",null]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.favoriteFilm(l.parent.context.$implicit)&&t);return t},null,null)),t.Y(1,147456,null,0,g.a,[v.a,t.j,t.z],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"ios-bookmark-outline")},function(l,n){l(n,0,0,t._13(n,1)._hidden)})}function R(l){return t._22(0,[(l()(),t.Z(0,0,null,null,53,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),t.Y(1,16384,null,0,h.a,[],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(3,0,null,null,49,"ion-card",[],null,null,null,null,null)),t.Y(4,16384,null,0,k.a,[v.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(6,0,null,null,3,"div",[["class","iconn"]],null,null,null,null,null)),(l()(),t._20(7,null,["\n          ","","\n          "])),(l()(),t.Z(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._20(9,null,[" ","\n        "])),(l()(),t._20(-1,null,["\n\n        "])),(l()(),t.Z(11,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.goToDetailsPage(l.context.$implicit)&&t);return t},null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(13,0,null,null,38,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(15,0,null,null,35,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(16,16384,null,0,Z.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(18,0,null,null,9,"ion-col",[["class","fav col"]],null,null,null,null,null)),t.Y(19,16384,null,0,h.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.U(16777216,null,null,1,null,N)),t.Y(22,16384,null,0,Y.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.U(16777216,null,null,1,null,J)),t.Y(25,16384,null,0,Y.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(29,0,null,null,8,"ion-col",[["class","col"]],null,null,null,null,null)),t.Y(30,16384,null,0,h.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(32,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["الحلقات\n              "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(35,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t._20(36,null,["",""])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(39,0,null,null,10,"ion-col",[["class","col"]],null,null,null,null,null)),t.Y(40,16384,null,0,h.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(42,0,null,null,1,"ion-icon",[["name","md-time"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(43,147456,null,0,g.a,[v.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(45,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t._20(46,null,["","",""])),t._16(47,2),t._16(48,2),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "]))],function(l,n){l(n,22,0,n.context.$implicit.fav),l(n,25,0,!n.context.$implicit.fav);l(n,43,0,"md-time")},function(l,n){var u=n.component;l(n,7,0,n.context.$implicit.name,n.context.$implicit.title),l(n,9,0,"epi"==n.context.$implicit.type?"S"+n.context.$implicit.season+" E"+n.context.$implicit.num:""),l(n,11,0,"https://image.tmdb.org/t/p/w"+u.size+n.context.$implicit.poster,n.context.$implicit.title),l(n,36,0,n.context.$implicit.Epi),l(n,42,0,t._13(n,43)._hidden),l(n,46,0,t._21(n,46,0,l(n,47,0,t._13(n.parent,0),n.context.$implicit.release_date,"yyyy")),t._21(n,46,1,l(n,48,0,t._13(n.parent,0),n.context.$implicit.first_air_date,"yyyy")))})}function W(l){return t._22(0,[t._14(0,Y.d,[t.r]),(l()(),t.Z(1,0,null,null,32,"ion-header",[],null,null,null,null,null)),t.Y(2,16384,null,0,j.a,[v.a,t.j,t.z,[2,y.a]],null,null),(l()(),t._20(-1,null,["\n  "])),(l()(),t.Z(4,0,null,null,28,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,x.b,x.a)),t.Y(5,49152,null,0,z.a,[I.a,[2,y.a],[2,C.a],v.a,t.j,t.z],null,null),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(7,0,null,0,8,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var a=!0;"click"===n&&(a=!1!==t._13(l,9).toggle()&&a);return a},$.b,$.a)),t.Y(8,1097728,[[1,4]],0,T.a,[[8,""],v.a,t.j,t.z],null,null),t.Y(9,1064960,null,0,F.a,[A.a,[2,y.a],[2,T.a],[2,z.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(10,16384,null,1,w.a,[v.a,t.j,t.z,[2,P.a],[2,z.a]],null,null),t._18(603979776,1,{_buttons:1}),(l()(),t._20(-1,0,["\n      "])),(l()(),t.Z(13,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(14,147456,null,0,g.a,[v.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n    "])),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(17,0,null,3,2,"ion-title",[],null,null,null,S.b,S.a)),t.Y(18,49152,null,0,M.a,[v.a,t.j,t.z,[2,P.a],[2,z.a]],null,null),(l()(),t._20(-1,0,["\n        انمي ومانجا        \n    "])),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(21,0,null,2,10,"ion-buttons",[["end",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.search()&&t);return t},null,null)),t.Y(22,16384,null,1,w.a,[v.a,t.j,t.z,[2,P.a],[2,z.a]],null,null),t._18(603979776,2,{_buttons:1}),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(25,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,null,null,$.b,$.a)),t.Y(26,1097728,[[2,4]],0,T.a,[[8,""],v.a,t.j,t.z],null,null),(l()(),t._20(-1,0,["\n        "])),(l()(),t.Z(28,0,null,0,1,"ion-icon",[["name","search"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(29,147456,null,0,g.a,[v.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n      "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,3,["\n  "])),(l()(),t._20(-1,null,["\n"])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t.Z(35,0,null,null,16,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,q.b,q.a)),t.Y(36,4374528,null,0,B.a,[v.a,D.a,U.a,t.j,t.z,I.a,E.a,t.u,[2,y.a],[2,C.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(38,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(39,16384,null,0,Z.a,[],null,null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,R)),t.Y(42,802816,null,0,Y.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(45,0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,u){var t=!0;"ionInfinite"===n&&(t=!1!==u.waitFor(l.component.doInfinite())&&t);return t},null,null)),t.Y(46,1196032,null,0,L.a,[B.a,t.u,t.j,U.a],null,{ionInfinite:"ionInfinite"}),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(48,0,null,null,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","... جار التحميل"]],[[1,"state",0]],null,null,X.b,X.a)),t.Y(49,114688,null,0,O.a,[L.a,v.a],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,"");l(n,14,0,"menu");l(n,29,0,"search"),l(n,42,0,u.data4);l(n,49,0,"bubbles","... جار التحميل")},function(l,n){l(n,4,0,t._13(n,5)._hidden,t._13(n,5)._sbPadding),l(n,7,0,t._13(n,9).isHidden),l(n,13,0,t._13(n,14)._hidden),l(n,28,0,t._13(n,29)._hidden),l(n,35,0,t._13(n,36).statusbarPadding,t._13(n,36)._hasRefresher),l(n,48,0,t._13(n,49).inf.state)})}var G=t.V("page-anime",o,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-anime",[],null,null,null,W,H)),t.Y(1,49152,null,0,o,[i.a,a.a,C.a,V.a],null,null)],null,null)},{},{},[]),K=u(18),Q=u(136),ll=u(39);u.d(n,"AnimePageModuleNgFactory",function(){return nl});var nl=t.W(e,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[c.a,s.a,r.a,_.a,d.a,m.a,p.a,b.a,f.a,G]],[3,t.i],t.s]),t._11(4608,Y.l,Y.k,[t.r,[2,Y.u]]),t._11(4608,K.k,K.k,[]),t._11(4608,K.c,K.c,[]),t._11(512,Y.b,Y.b,[]),t._11(512,K.j,K.j,[]),t._11(512,K.d,K.d,[]),t._11(512,K.i,K.i,[]),t._11(512,Q.a,Q.a,[]),t._11(512,Q.b,Q.b,[]),t._11(512,e,e,[]),t._11(256,ll.a,o,[])])})},291:function(l,n,u){"use strict";u.d(n,"a",function(){return s}),n.b=r;var t=u(0),a=u(12),i=u(46),o=u(19),e=u(1),c=u(38),s=(u(45),u(5),u(20),t.X({encapsulation:2,styles:[],data:{}}));function r(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.backButtonClick(u)&&t);return t},i.b,i.a)),t.Y(3,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,o.a,[[8,"bar-button"],e.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,c.a,[e.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._20(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,t._13(n,7)._hidden),l(n,10,0,u._backText)})}},292:function(l,n,u){"use strict";u.d(n,"a",function(){return i}),n.b=o;var t=u(0),a=u(12),i=(u(134),u(1),u(37),u(45),t.X({encapsulation:2,styles:[],data:{}}));function o(l){return t._22(2,[(l()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}},293:function(l,n,u){"use strict";u.d(n,"a",function(){return c}),n.b=_;var t=u(0),a=u(226),i=u(57),o=u(1),e=u(12),c=(u(135),u(85),t.X({encapsulation:2,styles:[],data:{}}));function s(l){return t._22(0,[(l()(),t.Z(0,0,null,null,2,"div",[["class","infinite-loading-spinner"]],null,null,null,null,null)),(l()(),t.Z(1,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,a.b,a.a)),t.Y(2,114688,null,0,i.a,[o.a,t.j,t.z],{name:[0,"name"]},null)],function(l,n){l(n,2,0,n.component.loadingSpinner)},function(l,n){l(n,1,0,t._13(n,2)._paused)})}function r(l){return t._22(0,[(l()(),t.Z(0,0,null,null,0,"div",[["class","infinite-loading-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.loadingText)})}function _(l){return t._22(0,[(l()(),t.Z(0,0,null,null,4,"div",[["class","infinite-loading"]],null,null,null,null,null)),(l()(),t.U(16777216,null,null,1,null,s)),t.Y(2,16384,null,0,e.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,r)),t.Y(4,16384,null,0,e.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loadingSpinner),l(n,4,0,u.loadingText)},null)}}});