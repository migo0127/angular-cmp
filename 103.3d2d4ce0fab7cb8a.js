"use strict";(self.webpackChunkangular_cmp=self.webpackChunkangular_cmp||[]).push([[103],{8880:(P,_,a)=>{a.d(_,{m:()=>l});var l=(()=>{return(c=l||(l={})).LINE="line",c.BAR="bar",c.RADAR="radar",c.DOUGHNUT="doughnut",c.PIE="pie",c.POLARAREA="polarArea",c.BUBBLE="bubble",c.SCATTER="scatter",l;var c})()},9103:(P,_,a)=>{a.r(_),a.d(_,{PagesModule:()=>Nt});var l=a(4710),c=a(9299),t=a(4650),C=a(1206),d=a(5412),h=a(3971),y=a(2480),v=a(4859),x=a(3267),p=a(6895);let w=(()=>{class e{transform(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"capitalize",type:e,pure:!0}),e})();const W=["userInfoDialog"];function N(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.Oqu(i.userInfo[n])}}function A(e,o){if(1&e&&(t.TgZ(0,"span")(1,"a",13),t._uU(2),t.qZA()()),2&e){const n=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("href",i.userInfo[n],t.LSH),t.xp6(1),t.hij(" ",i.userInfo[n]," ")}}function U(e,o){if(1&e&&(t.TgZ(0,"p")(1,"span"),t._uU(2),t.ALo(3,"capitalize"),t.qZA(),t.YNc(4,N,2,1,"span",12),t.YNc(5,A,3,2,"span",12),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.hij("",t.lcZ(3,3,n),"\uff1a"),t.xp6(2),t.Q6J("ngIf","github"!==n),t.xp6(1),t.Q6J("ngIf","github"===n)}}function I(e,o){if(1&e&&(t.TgZ(0,"section",6)(1,"h1",7),t._uU(2," UserInfo "),t.qZA(),t.TgZ(3,"div",8),t.YNc(4,U,6,5,"p",9),t.qZA(),t.TgZ(5,"div",10)(6,"button",11),t._uU(7," Close "),t.qZA()()()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.userInfoDisplayedColumns)}}let k=(()=>{class e{constructor(n,i,r,s){this.router=n,this.dialog=i,this.loginService=r,this.userInfoService=s,this.logoUrl="../../../assets/img/logo-1.png",this.userInfoDisplayedColumns=["role","name","mail","github"]}ngOnInit(){this.userInfo=this.userInfoService.userInfo}onClickLogo(){this.router.navigate(["/pages/dashboard"])}showUserInfo(){this.dialog.open(this.userInfoDialog)}onLogout(){this.loginService.logout()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0),t.Y36(d.uw),t.Y36(h.r),t.Y36(y.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu"]],viewQuery:function(n,i){if(1&n&&t.Gf(W,5),2&n){let r;t.iGM(r=t.CRH())&&(i.userInfoDialog=r.first)}},decls:11,vars:2,consts:[["id","menuContainer"],[1,"logoWrap"],["alt","migo",1,"cursor",3,"src","click"],[1,"userInfoWrap"],[1,"cursor",3,"click"],["userInfoDialog",""],[1,"userInfoDialogWrap"],["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-raised-button","","mat-dialog-close","","color","primary"],[4,"ngIf"],["target","_blank",3,"href"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav-content")(2,"section",1)(3,"img",2),t.NdJ("click",function(){return i.onClickLogo()}),t.qZA()(),t.TgZ(4,"section",3)(5,"span",4),t.NdJ("click",function(){return i.showUserInfo()}),t._uU(6),t.qZA(),t.TgZ(7,"span",4),t.NdJ("click",function(){return i.onLogout()}),t._uU(8," Logout "),t.qZA()()()(),t.YNc(9,I,8,1,"ng-template",null,5,t.W1O)),2&n&&(t.xp6(3),t.Q6J("src",i.logoUrl,t.LSH),t.xp6(3),t.hij(" ",i.userInfo.name," "))},dependencies:[v.lW,d.ZT,d.uh,d.xY,d.H8,x.TM,x.Rh,p.sg,p.O5,w],styles:["#menuContainer[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}#menuContainer[_ngcontent-%COMP%]{width:100%;height:100%;color:#fff;background-color:#5991fa}#menuContainer[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{width:95%;font-size:1.25rem;font-weight:700;margin:0 auto}#menuContainer[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]{height:80%;margin:0;overflow:hidden}#menuContainer[_ngcontent-%COMP%]   .logoWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:contain}#menuContainer[_ngcontent-%COMP%]   .userInfoWrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 1rem}.userInfoDialogWrap[_ngcontent-%COMP%]{width:22vw;min-width:425px}.userInfoDialogWrap[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{margin-bottom:1rem}.userInfoDialogWrap[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(50px,60px) 1fr;padding:.5rem;border-bottom:1px solid #c2c2c2}.userInfoDialogWrap[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{outline:none}@media screen and (max-width: 540px){.userInfoDialogWrap[_ngcontent-%COMP%]{width:250px;min-width:250px}.userInfoDialogWrap[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:0}.userInfoDialogWrap[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{word-wrap:break-word;padding:.5rem 0}.mat-dialog-actions[_ngcontent-%COMP%]{justify-content:flex-end}}"]}),e})();var u=a(4004),b=a(529);let Z=(()=>{class e{constructor(n){this.http=n}getSideNavList(){return this.http.get("assets/mock-data/side-nav-mock.json").pipe((0,u.U)(n=>n.sideNav))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(b.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=a(7392);function S(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li",4),t.NdJ("click",function(){const s=t.CHM(n).$implicit,m=t.oxw(4);return t.KtG(m.navigateTo(s))}),t._UZ(2,"mat-icon",5),t._uU(3),t.qZA(),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(2),t.Q6J("fontIcon",n.icon),t.xp6(1),t.hij(" ",n.label," ")}}function Q(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"ul",7),t.YNc(2,S,4,2,"ng-container",3),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngForOf",n.children)}}function F(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li",4),t.NdJ("click",function(){const s=t.CHM(n).$implicit,m=t.oxw(2);return t.KtG(m.navigateTo(s))}),t._UZ(2,"mat-icon",5),t._uU(3),t.qZA(),t.YNc(4,Q,3,1,"ng-container",6),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(2),t.Q6J("fontIcon",n.icon),t.xp6(1),t.hij(" ",n.label," "),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.children)&&n.visible)}}function j(e,o){if(1&e&&(t.TgZ(0,"ul",2),t.YNc(1,F,5,3,"ng-container",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.sideNavList)}}let J=(()=>{class e{constructor(n,i){this.router=n,this.sideNavService=i}ngOnInit(){this.sideNavService.getSideNavList().subscribe(n=>{this.sideNavList=n})}navigateTo(n){!n.url&&!n.children||(!n.url&&n.children?n.visible=!n.visible:this.router.navigate([`${n.url}`]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-side-nav"]],decls:2,vars:1,consts:[["id","sidenavWrap"],["class","mainList",4,"ngIf"],[1,"mainList"],[4,"ngFor","ngForOf"],[3,"click"],[3,"fontIcon"],[4,"ngIf"],[1,"childrenList"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0),t.YNc(1,j,2,1,"ul",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",i.sideNavList))},dependencies:[f.Hw,p.sg,p.O5],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}#sidenavWrap[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#f5f5f5ea;padding-top:1rem}#sidenavWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:30px;color:#292929;font-size:1.05rem;list-style-type:none;margin:0;padding:0 0 1rem 1.25rem}#sidenavWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:.35rem 0}#sidenavWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:22px;height:22px;color:#5991fa;margin-right:.25rem}"]}),e})();var M=a(1561);function Y(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li",6),t.NdJ("click",function(r){const m=t.CHM(n).$implicit,O=t.oxw(3);return t.KtG(O.navigateTo(m,r))}),t._UZ(2,"mat-icon",7),t._uU(3),t.qZA(),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(2),t.Q6J("fontIcon",n.icon),t.xp6(1),t.hij(" ",n.label," ")}}function L(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"ul",9),t.YNc(2,Y,4,2,"ng-container",5),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngForOf",n.children)}}function z(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li",6),t.NdJ("click",function(r){const m=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.navigateTo(m,r))}),t._UZ(2,"mat-icon",7),t._uU(3),t.qZA(),t.YNc(4,L,3,1,"ng-container",8),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(2),t.Q6J("fontIcon",n.icon),t.xp6(1),t.hij(" ",n.label," "),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.children)&&n.visible)}}let q=(()=>{class e{constructor(n,i){this.router=n,this.sideNavService=i}ngOnInit(){this.sideNavService.getSideNavList().subscribe(n=>{this.sideNavList=n})}navigateTo(n,i){!n.url&&!n.children||(!n.url&&n.children?(i.stopPropagation(),n.visible=!n.visible):this.router.navigate([`${n.url}`]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-mobile-side-nav"]],decls:7,vars:2,consts:[["mat-button","",1,"mobileNavWrap",3,"matMenuTriggerFor"],["fontIcon","menu"],[1,"matMenu"],["menu","matMenu"],[1,"mobileMainList"],[4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],[3,"fontIcon"],[4,"ngIf"],[1,"childrenList"]],template:function(n,i){if(1&n&&(t.TgZ(0,"section")(1,"button",0),t._UZ(2,"mat-icon",1),t.qZA(),t.TgZ(3,"mat-menu",2,3)(5,"ul",4),t.YNc(6,z,5,3,"ng-container",5),t.qZA()()()),2&n){const r=t.MAs(4);t.xp6(1),t.Q6J("matMenuTriggerFor",r),t.xp6(5),t.Q6J("ngForOf",i.sideNavList)}},dependencies:[v.lW,f.Hw,M.VK,M.OP,M.p6,p.sg,p.O5],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}.mobileNavWrap[_ngcontent-%COMP%]{width:45px;height:45px;min-width:45px;padding:0;margin:0;text-align:center;color:#fff;background-color:#5b72f3e6;border-radius:50%;box-shadow:0 0 6px #00000080}.mobileMainList[_ngcontent-%COMP%]{min-width:168px;max-width:200px;padding:0 1rem 0 .5rem}.mobileMainList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:40px;line-height:40px;padding:0 .5rem}.mobileMainList[_ngcontent-%COMP%]   .childrenList[_ngcontent-%COMP%]{padding:0 1rem 0 1.25rem}.mobileMainList[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}"]}),e})(),$=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:5,vars:0,consts:[["href","https://github.com/migo0127?tab=repositories","target","_blank"],["href","mailto:migo0127@gmail.com"]],template:function(n,i){1&n&&(t.TgZ(0,"p")(1,"a",0),t._uU(2,"Author: Migo"),t.qZA(),t.TgZ(3,"a",1),t._uU(4,"Mail: migo0127@gmail.com"),t.qZA()())},styles:["[_nghost-%COMP%]   p[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   p[_ngcontent-%COMP%], html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}[_nghost-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{direction:none;text-decoration:none}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{background-color:#5991fa}[_nghost-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-right:.5rem}"]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-pages"]],decls:12,vars:0,consts:[["id","pagesWrap"],[1,"menuWrap"],[1,"webNavContainer"],["cdkDragBoundary","body","cdkDrag","",1,"mobileNavContainer"],[1,"mainWrap"],[1,"mainContainer"],[1,"footerWrap"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"app-menu"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-side-nav"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-mobile-side-nav"),t.qZA(),t.TgZ(7,"div",4)(8,"div",5),t._UZ(9,"router-outlet"),t.qZA()(),t.TgZ(10,"div",6),t._UZ(11,"app-footer"),t.qZA()())},dependencies:[C.Zt,c.lC,k,J,q,$],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}#pagesWrap[_ngcontent-%COMP%]{display:grid;width:100%;height:100%;grid-template-columns:minmax(200px,12vw) 1fr;grid-template-rows:minmax(45px,5vh) 1fr minmax(40px,4vh)}#pagesWrap[_ngcontent-%COMP%]   .menuWrap[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3;width:100%;height:100%}#pagesWrap[_ngcontent-%COMP%]   .webNavContainer[_ngcontent-%COMP%]{box-shadow:0 0 5px 2px #0000004d;overflow:auto}#pagesWrap[_ngcontent-%COMP%]   .mobileNavContainer[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 540px){#pagesWrap[_ngcontent-%COMP%]   .webNavContainer[_ngcontent-%COMP%]{display:none}#pagesWrap[_ngcontent-%COMP%]   .mobileNavContainer[_ngcontent-%COMP%]{display:unset;position:absolute;top:6vh;left:1vw;z-index:1}}#pagesWrap[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%]{background-color:#e0e0e080;padding:1rem;overflow:auto}#pagesWrap[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%]{width:100%;min-height:-moz-fit-content;min-height:fit-content;padding:1rem;background-color:#fff;border-radius:3px;box-shadow:0 0 10px #0003}@media screen and (max-width: 541px){#pagesWrap[_ngcontent-%COMP%]   .mainWrap[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}}#pagesWrap[_ngcontent-%COMP%]   .footerWrap[_ngcontent-%COMP%]{grid-column-start:-3;grid-column-end:3;position:sticky;bottom:0;left:0}"]}),e})();var R=a(9541),T=a(8880);let H=(()=>{class e{constructor(n){this.http=n}getCostData(){return this.http.get("assets/mock-data/dashboard-cost-mock.json").pipe((0,u.U)(n=>n.costData))}getMarketingData(){return this.http.get("assets/mock-data/dashboard-marketing-data-mock.json").pipe((0,u.U)(n=>n.marketingData))}getAllChartData(){return this.http.get("assets/mock-data/dashboard-chart-data-mock.json")}getTableData(){return this.http.get("assets/mock-data/dashboard-table-data-mock.json").pipe((0,u.U)(n=>n.tableData))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(b.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=a(350),g=a(7155),D=a(6308),E=a(8326);function K(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.Oqu("half of year"))}function X(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu("current "+n.type)}}function V(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.Oqu("last half of year"))}function tt(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu("last "+n.type)}}function nt(e,o){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._UZ(2,"mat-icon",13),t.qZA(),t.TgZ(3,"p")(4,"span",14),t._uU(5),t.ALo(6,"number"),t.qZA(),t.ynx(7,15),t.YNc(8,K,2,1,"span",16),t.YNc(9,X,2,1,"span",17),t.BQk(),t.qZA(),t.TgZ(10,"p")(11,"span"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.ynx(14,15),t.YNc(15,V,2,1,"span",16),t.YNc(16,tt,2,1,"span",17),t.BQk(),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Q6J("ngClass",n.type)("fontIcon",n.icon),t.xp6(2),t.Q6J("ngClass",n.type),t.xp6(1),t.hij(" $",t.lcZ(6,9,n.current)," "),t.xp6(2),t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase","half"),t.xp6(4),t.hij("$",t.lcZ(13,11,n.last),""),t.xp6(2),t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase","half")}}function et(e,o){if(1&e&&(t.TgZ(0,"section",11),t.YNc(1,nt,17,13,"div",12),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.costData)}}function ot(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"app-chart-js",9),t.NdJ("chartHover",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.chartHovered(r,"pie"))})("chartClick",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.chartClicked(r,"pie"))}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("type",n.doughnutChartType)("data",n.doughnutChartData)("options",n.doughnutChartOptions)}}function it(e,o){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function at(e,o){if(1&e&&(t.TgZ(0,"ul"),t.YNc(1,it,2,1,"li",12),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==n.marketingData?null:n.marketingData.service)}}function rt(e,o){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n," ")}}function ct(e,o){if(1&e&&(t.TgZ(0,"ul"),t.YNc(1,rt,2,1,"li",12),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==n.marketingData?null:n.marketingData.network)}}function st(e,o){1&e&&(t.TgZ(0,"th",31),t._uU(1," # "),t.qZA())}function pt(e,o){if(1&e&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.index," ")}}function gt(e,o){1&e&&(t.TgZ(0,"th",31),t._uU(1," Name "),t.qZA())}function lt(e,o){if(1&e&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function dt(e,o){1&e&&(t.TgZ(0,"th",31),t._uU(1," Price "),t.qZA())}function mt(e,o){if(1&e&&(t.TgZ(0,"td",32),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n.price)," ")}}function _t(e,o){1&e&&(t.TgZ(0,"th",31),t._uU(1," Qty "),t.qZA())}function ht(e,o){if(1&e&&(t.TgZ(0,"td",32),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n.qty)," ")}}function ut(e,o){1&e&&(t.TgZ(0,"th",31),t._uU(1," Total "),t.qZA())}function Ct(e,o){if(1&e&&(t.TgZ(0,"td",32),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" $",t.lcZ(2,1,n.total)," ")}}function ft(e,o){1&e&&t._UZ(0,"tr",33)}function Mt(e,o){1&e&&t._UZ(0,"tr",34)}function Ot(e,o){if(1&e&&(t.TgZ(0,"section",18)(1,"p",19),t._uU(2,"Product Ranking"),t.qZA(),t.TgZ(3,"div",20)(4,"table",21),t.ynx(5,22),t.YNc(6,st,2,0,"th",23),t.YNc(7,pt,2,1,"td",24),t.BQk(),t.ynx(8,25),t.YNc(9,gt,2,0,"th",23),t.YNc(10,lt,2,1,"td",24),t.BQk(),t.ynx(11,26),t.YNc(12,dt,2,0,"th",23),t.YNc(13,mt,3,3,"td",24),t.BQk(),t.ynx(14,27),t.YNc(15,_t,2,0,"th",23),t.YNc(16,ht,3,3,"td",24),t.BQk(),t.ynx(17,28),t.YNc(18,ut,2,0,"th",23),t.YNc(19,Ct,3,3,"td",24),t.BQk(),t.YNc(20,ft,1,0,"tr",29),t.YNc(21,Mt,1,0,"tr",30),t.qZA()()()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("dataSource",n.tableData),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedTableColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedTableColumns)}}let Pt=(()=>{class e{constructor(n,i){this.dashboardService=n,this.chartOptionsUtilService=i,this.displayedTableColumns=["index","name","price","qty","total"]}ngOnInit(){this.initCostData(),this.initMarketingData(),this.initChartData(),this.initTableData()}initCostData(){this.dashboardService.getCostData().subscribe(n=>{this.costData=n})}initMarketingData(){this.dashboardService.getMarketingData().subscribe(n=>{this.marketingData=n})}initChartData(){this.dashboardService.getAllChartData().subscribe(n=>{if(n.doughnutChartData){this.doughnutChartType=T.m.DOUGHNUT,this.doughnutChartData=n.doughnutChartData;const i=this.chartOptionsUtilService.getBaseDoughnutChartOptions();i.plugins.title={display:!0,text:"Service Expenses",font:{size:18,weight:"normal"}},i.plugins.legend.display=!1,this.doughnutChartOptions=i}if(n.lineChartData){this.lineChartType=T.m.LINE,this.lineChartData=n.lineChartData;const i=this.chartOptionsUtilService.getBaseLineChartOptions();i.plugins.title={display:!0,text:"Average Usage Rate",font:{size:18,weight:"normal"}},this.lineChartOptions=i}})}initTableData(){this.dashboardService.getTableData().subscribe(n=>{this.tableData=n})}chartClicked(n,i){}chartHovered(n,i){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(H),t.Y36(G.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],viewQuery:function(n,i){if(1&n&&t.Gf(R.jh,5),2&n){let r;t.iGM(r=t.CRH())&&(i.chart=r.first)}},decls:14,vars:8,consts:[["class","costWrap",4,"ngIf"],[1,"chartWrap"],[1,"serviceWrap"],[1,"doughnutCharWrap"],[3,"type","data","options","chartHover","chartClick",4,"ngIf"],[1,"doughnutTotal"],[1,"serviceItemWrap"],[4,"ngIf"],[1,"targetRateWrap"],[3,"type","data","options","chartHover","chartClick"],["class","tableWrap",4,"ngIf"],[1,"costWrap"],[4,"ngFor","ngForOf"],[3,"ngClass","fontIcon"],[1,"mainText",3,"ngClass"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"tableWrap"],[1,"tableTitle"],[1,"tableContainer"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","price"],["matColumnDef","qty"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,i){1&n&&(t.TgZ(0,"div"),t.YNc(1,et,2,1,"section",0),t.TgZ(2,"section",1)(3,"div",2)(4,"div",3),t.YNc(5,ot,1,3,"app-chart-js",4),t.TgZ(6,"p",5),t._uU(7,"$1.22M"),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,at,2,1,"ul",7),t.YNc(10,ct,2,1,"ul",7),t.qZA()(),t.TgZ(11,"div",8)(12,"app-chart-js",9),t.NdJ("chartHover",function(s){return i.chartHovered(s,"mixed")})("chartClick",function(s){return i.chartClicked(s,"mixed")}),t.qZA()()(),t.YNc(13,Ot,22,3,"section",10),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",i.costData),t.xp6(4),t.Q6J("ngIf",i.doughnutChartData),t.xp6(4),t.Q6J("ngIf",null==i.marketingData?null:i.marketingData.service),t.xp6(1),t.Q6J("ngIf",null==i.marketingData?null:i.marketingData.network),t.xp6(2),t.Q6J("type",i.lineChartType)("data",i.lineChartData)("options",i.lineChartOptions),t.xp6(1),t.Q6J("ngIf",i.tableData))},dependencies:[f.Hw,g.BZ,g.fO,g.as,g.w1,g.Dz,g.nj,g.ge,g.ev,g.XQ,g.Gk,D.YE,D.nU,p.mk,p.sg,p.O5,p.RF,p.n9,p.ED,E.y,p.JJ],styles:[".costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.costWrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);border-radius:5px}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:max-content;min-height:max-content}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #c2c2c2}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#748194;padding-bottom:.5rem}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:.5rem}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .mainText[_ngcontent-%COMP%]{font-size:1.5rem}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3.5rem;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;text-align:center}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{color:#2c7be5}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .season[_ngcontent-%COMP%]{color:#27bcfd}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]{color:#00d27a}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{color:#f5803e}@media screen and (max-width: 1025px) and (min-width: 541px){.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:first-child){display:flex;flex-direction:column;justify-content:center;align-items:center}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:first-child)   .mainText[_ngcontent-%COMP%]{font-size:1.25rem}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:first-child)   span[_ngcontent-%COMP%]{padding-bottom:.25rem}}@media screen and (max-width: 540px){.costWrap[_ngcontent-%COMP%]{grid-template-columns:1fr}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:.5rem}.costWrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child){border-right:none;border-bottom:1px solid #c2c2c2}}.chartWrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(30vw,400px) 1fr;height:-moz-fit-content;height:fit-content;border-top:1px dotted #748194;border-bottom:1px dotted #748194}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]{padding:1rem 0;border-right:1px dotted #748194}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .doughnutCharWrap[_ngcontent-%COMP%]{height:250px;position:relative}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .doughnutCharWrap[_ngcontent-%COMP%]   .doughnutTotal[_ngcontent-%COMP%]{font-size:1.5rem;position:absolute;top:50%;left:50%;transform:translate(-50%,25%)}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .serviceItemWrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .serviceItemWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#748194;margin-top:1rem}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .serviceItemWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.25rem 0}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]   .serviceItemWrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{color:#000}.chartWrap[_ngcontent-%COMP%]   .targetRateWrap[_ngcontent-%COMP%]{width:100%;height:430px;padding:1rem 1.25rem}@media screen and (max-width: 1025px){.chartWrap[_ngcontent-%COMP%]{grid-template-columns:1fr}.chartWrap[_ngcontent-%COMP%]   .serviceWrap[_ngcontent-%COMP%]{border-right:none}.chartWrap[_ngcontent-%COMP%]   .doughnutCharWrap[_ngcontent-%COMP%]{width:100%;height:200px}.chartWrap[_ngcontent-%COMP%]   .targetRateWrap[_ngcontent-%COMP%]{width:100%;height:300px;padding:1rem 1.25rem}}.tableWrap[_ngcontent-%COMP%]{width:100%;height:300px}.tableWrap[_ngcontent-%COMP%]   .tableTitle[_ngcontent-%COMP%]{color:#666;font-size:18px;text-align:center}.tableWrap[_ngcontent-%COMP%]   .tableContainer[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:auto}.tableWrap[_ngcontent-%COMP%]   .tableContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%}.tableWrap[_ngcontent-%COMP%]   .tableContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[mat-header-cell][_ngcontent-%COMP%]{background-color:#fff;position:sticky;top:0;left:0}@media screen and (max-width: 480px){table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:max-content;padding:0 .25rem}}"]}),e})();var vt=a(5963),xt=a(8675),bt=a(2529),Zt=a(8505),Tt=a(3162),Dt=a(7134);function yt(e,o){if(1&e&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"json"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,1,n.date)," ")}}const wt=[{path:"",component:B,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:Pt},{path:"order",loadChildren:()=>a.e(342).then(a.bind(a,8342)).then(e=>e.OrderModule)},{path:"demo",component:(()=>{class e{constructor(){this.date=null,this.progressMode="determinate",this.progressValue=0}ngOnInit(){this.progress$=this.initProgress()}initProgress(){return(0,vt.H)(0,1e3).pipe((0,xt.O)(0),(0,u.U)(n=>n+1),(0,bt.o)(n=>n<=10),(0,Zt.b)(n=>(this.progressValue=n,n)))}onDateChange(n){this.date=n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-demo"]],decls:14,vars:8,consts:[["class","text",4,"ngIf"],[3,"dateChange"],[1,"progressWrap"],[1,"progressContainer"],[3,"mode","value"],[1,"progressTxt"],[1,"text"]],template:function(n,i){1&n&&(t.TgZ(0,"div")(1,"section")(2,"p"),t._uU(3,"Custom Period Demo\uff1a "),t.YNc(4,yt,3,3,"span",0),t.qZA(),t.TgZ(5,"app-period",1),t.NdJ("dateChange",function(s){return i.onDateChange(s)}),t.qZA()(),t.TgZ(6,"section",2)(7,"p"),t._uU(8,"Progress Bar Demo\uff1a"),t.qZA(),t.TgZ(9,"div",3),t._UZ(10,"mat-progress-bar",4),t.ALo(11,"async"),t.TgZ(12,"p",5),t._uU(13),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",i.date),t.xp6(6),t.Q6J("mode",i.progressMode)("value",t.lcZ(11,6,i.progress$)),t.xp6(2),t.Tol(i.progressValue>=5?"":"warnColor"),t.xp6(1),t.hij(" ",i.progressValue+"%"," "))},dependencies:[Tt.pW,p.O5,Dt.z,p.Ov,p.Ts],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden}p[_ngcontent-%COMP%]{margin:0;padding:0}input[_ngcontent-%COMP%]{font-size:1rem}.cursor[_ngcontent-%COMP%]{cursor:pointer}section[_ngcontent-%COMP%]{margin-bottom:1.25rem}p[_ngcontent-%COMP%]{margin:0 .5rem 1rem 0}.text[_ngcontent-%COMP%]{color:#f44336}.progressWrap[_ngcontent-%COMP%]   .progressContainer[_ngcontent-%COMP%]{height:3vh;position:relative}.progressWrap[_ngcontent-%COMP%]   .progressContainer[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:100%}.progressWrap[_ngcontent-%COMP%]   .progressContainer[_ngcontent-%COMP%]   .progressTxt[_ngcontent-%COMP%]{font-size:1.25rem;height:100%;line-height:3vh;position:absolute;top:0;left:50%}.progressWrap[_ngcontent-%COMP%]   .progressContainer[_ngcontent-%COMP%]   .warnColor[_ngcontent-%COMP%]{color:#f44336}"],changeDetection:0}),e})()},{path:"**",redirectTo:"dashboard"}]},{path:"**",redirectTo:"dashboard"}];let Wt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(wt),c.Bz]}),e})(),Nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.G,Wt]}),e})()},350:(P,_,a)=>{a.d(_,{R:()=>c});var l=a(4650);let c=(()=>{class t{constructor(){}getBaseBarChartOptions(){return{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},plugins:{legend:{display:!0},datalabels:{anchor:"end",align:"top"}}}}getBaseLineChartOptions(){return{responsive:!0,maintainAspectRatio:!1,elements:{line:{tension:.5}},scales:{y:{position:"left"}},plugins:{legend:{display:!0}}}}getPieChartOptions(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top"},datalabels:{formatter:(d,h)=>{if(h.chart.data.labels)return h.chart.data.labels[h.dataIndex]}}}}}getBaseDoughnutChartOptions(){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0},datalabels:{anchor:"end",align:"end"}},cutoutPercentage:25}}}return t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);