"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[723],{5723:(I,Z,l)=>{l.r(Z),l.d(Z,{default:()=>j});var e=l(6814),p=l(4414),_=l(846),s=l(8733),n=l(6223),T=l(1818),A=l(8034),t=l(5879),b=l(1717),v=l(7700);const a=function(o,g){return[o,g]};function f(o,g){if(1&o){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",24)(8,"a",25),t.ALo(9,"localize"),t._UZ(10,"i",26),t._uU(11," \u0639\u0631\u0636"),t.qZA(),t.TgZ(12,"a",27),t.ALo(13,"localize"),t._UZ(14,"i",28),t._uU(15," \u062a\u0639\u062f\u064a\u0644 "),t.qZA(),t.TgZ(16,"button",29),t.NdJ("click",function(){const y=t.CHM(i).$implicit,P=t.oxw();return t.KtG(P.deleteCity(y.id,y.name))}),t._UZ(17,"i",30),t._uU(18," \u062d\u0630\u0641 "),t.qZA()()()}if(2&o){const i=g.$implicit,r=g.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(i.iso2),t.xp6(2),t.Q6J("routerLink",t.WLB(9,a,t.lcZ(9,5,"/dashboard/cities/view-city"),i.id)),t.xp6(4),t.Q6J("routerLink",t.WLB(12,a,t.lcZ(13,7,"/dashboard/cities/add-city"),i.id))}}function d(o,g){1&o&&(t.TgZ(0,"tr")(1,"td",31),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let m=(()=>{class o{constructor(i,r,u,y){this.citiesService=i,this.localize=r,this.router=u,this.dialog=y,this.cities=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getListCities()}onPageChange(i){this.getListCities(i)}getListCities(i=1){this.loading=!0,this.citiesService.getCitiesList({page:i}).subscribe({next:r=>{this.cities=r.data,this.currentPage=r.pagination.current_page,this.totalPages=r.pagination.last_page,this.loading=!1},error:r=>{this.loading=!1,console.log(r)}})}viewCity(i){if(i){const r=this.localize.translateRoute("/dashboard/cities/view-city");this.router.navigate([r,i.id])}else console.error("No city to view")}deleteCity(i,r){const u={city_id:i};this.dialog.open(A.$,{width:"500px",data:{title:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 ${r}\u061f`}}).afterClosed().subscribe(P=>{P&&this.citiesService.deleteCurrency(u).subscribe({next:M=>{this.getListCities()},error:M=>{console.log("there was an error deleting currency:",M)}})})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(b.e),t.Y36(s.An),t.Y36(_.F0),t.Y36(v.uw))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cities-list"]],standalone:!0,features:[t.jDz],decls:43,vars:6,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-12"],[1,"row","list-row"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-7","col-lg-6","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-md-8"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-4","text-center"],[1,"text-center","mb-0"],[1,"action"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","6",1,"text-center"]],template:function(r,u){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u062f\u0646"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u0646"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",4)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",11)(17,"button",12),t._UZ(18,"i",13),t._uU(19," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(20,"div",14)(21,"div",15)(22,"table",16)(23,"thead")(24,"tr")(25,"th"),t._uU(26,"\u062a\u0631\u0642\u064a\u0645"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"\u0627\u0633\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"\u0631\u0645\u0632 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"\u0627\u062c\u0631\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(33,"tbody"),t.YNc(34,f,19,15,"tr",17),t.YNc(35,d,3,0,"tr",18),t.qZA()()()(),t.TgZ(36,"div",7)(37,"div",19)(38,"div",20)(39,"pagination",21),t.NdJ("pageChange",function(P){return u.onPageChange(P)}),t.qZA()(),t.TgZ(40,"div",22)(41,"p",23),t._uU(42),t.qZA()()()()()()()()),2&r&&(t.xp6(34),t.Q6J("ngForOf",u.cities),t.xp6(1),t.Q6J("ngIf",0===u.cities.length&&!u.loading),t.xp6(4),t.Q6J("currentPage",u.currentPage)("totalPages",u.totalPages),t.xp6(3),t.AsE(" \u0635\u0641\u062d\u0629 \u0631\u0642\u0645 ",u.currentPage," \u0645\u0646 \u0623\u0635\u0644 ",u.totalPages," \u0635\u0641\u062d\u0629 "))},dependencies:[e.ez,e.sg,e.O5,p.L,_.Bz,_.rH,s.fQ,s.lO,n.u5,T.Q]})}return o})(),c=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-city"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(r,u){1&r&&t._UZ(0,"router-outlet")},dependencies:[e.ez,_.lC]})}return o})();var h=l(4286),C=l(9172);function F(o,g){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u0625\u0636\u0627\u0641\u0629 \u0645\u062f\u064a\u0646\u0629"),t.qZA())}function x(o,g){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u062a\u0639\u062f\u064a\u0644 \u0645\u062f\u064a\u0646\u0629"),t.qZA())}function O(o,g){1&o&&(t.TgZ(0,"div",26),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function U(o,g){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij(" ",null==i.cityForm.controls.name.errors?null:i.cityForm.controls.name.errors.serverError[0]," ")}}function E(o,g){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,O,2,0,"div",18),t.YNc(2,U,2,1,"div",18),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.name.errors?null:i.cityForm.controls.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.name.errors?null:i.cityForm.controls.name.errors.serverError)}}function w(o,g){1&o&&(t.TgZ(0,"div",26),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function L(o,g){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij(" ",null==i.cityForm.controls.iso2.errors?null:i.cityForm.controls.iso2.errors.serverError[0]," ")}}function D(o,g){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,w,2,0,"div",18),t.YNc(2,L,2,1,"div",18),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.iso2.errors?null:i.cityForm.controls.iso2.errors.required),t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.iso2.errors?null:i.cityForm.controls.iso2.errors.serverError)}}function J(o,g){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&o){const i=g.$implicit;t.Q6J("value",i.id),t.xp6(1),t.hij(" ",i.name," ")}}function N(o,g){1&o&&(t.TgZ(0,"div",26),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Y(o,g){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij(" ",null==i.cityForm.controls.country_id.errors?null:i.cityForm.controls.country_id.errors.serverError[0]," ")}}function Q(o,g){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,N,2,0,"div",18),t.YNc(2,Y,2,1,"div",18),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.country_id.errors?null:i.cityForm.controls.country_id.errors.required),t.xp6(1),t.Q6J("ngIf",null==i.cityForm.controls.country_id.errors?null:i.cityForm.controls.country_id.errors.serverError)}}function B(o,g){if(1&o&&(t.ynx(0),t.TgZ(1,"div",28)(2,"button",29),t._UZ(3,"i",30),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0645\u062f\u064a\u0646\u0629 "),t.qZA()(),t.BQk()),2&o){const i=t.oxw();t.xp6(2),t.Q6J("disabled",!i.cityForm.valid)}}function k(o,g){if(1&o){const i=t.EpF();t.TgZ(0,"div",28)(1,"button",31),t.NdJ("click",function(){t.CHM(i);const u=t.oxw();return t.KtG(u.updateClient())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 "),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(1),t.Q6J("disabled",!i.cityForm.valid)}}const z=function(o){return[o]};let q=(()=>{class o{constructor(i,r,u,y,P,M){this.activatedRoute=i,this.citiesService=r,this.router=u,this.localize=y,this._MessagesService=P,this.allCountriesService=M,this.isEditMode=!1,this.cityId="",this.countries=[],this.cityForm=new n.cw({name:new n.NI("",n.kI.required),iso2:new n.NI("",n.kI.required),country_id:new n.NI("",n.kI.required)})}ngOnInit(){this.activatedRoute.paramMap.subscribe(i=>{const r=i.get("id");r&&(this.isEditMode=!0,this.cityId=r,this.citiesService.getCityById(r).subscribe(u=>{u&&u.data&&this.setFormValues(u.data)}))}),this.getListCountries()}getListCountries(){this.allCountriesService.GetCountriesList().subscribe({next:i=>{this.countries=i.data},error:i=>{console.log(i)}})}navigateToCitiesList(){const i=this.localize.translateRoute("/dashboard/cities");this.router.navigate([i])}setFormValues(i){this.cityForm.controls.name.setValue(i.name),this.cityForm.controls.iso2.setValue(i.iso2),this.cityForm.controls.country_id.setValue(i.country.id)}updateClient(){this.cityForm.valid&&this.citiesService.updateCity({name:this.cityForm.controls.name.value||"",iso2:this.cityForm.controls.iso2.value||"",country_id:this.cityForm.controls.iso2.value||""}).subscribe({next:r=>{this.navigateToCitiesList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u062a\u062d\u062f\u064a\u062b",3e3)},error:r=>{console.log("Failed to update city:",r)}})}onSubmit(){this.cityForm.valid&&this.citiesService.addCity({name:this.cityForm.controls.name.value||"",iso2:this.cityForm.controls.iso2.value||"",country_id:this.cityForm.controls.iso2.value||""}).subscribe({next:r=>{this.navigateToCitiesList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:r=>{console.log("Failed to add city:",r)}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(_.gz),t.Y36(b.e),t.Y36(_.F0),t.Y36(s.An),t.Y36(h.K),t.Y36(C.K))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-city"]],standalone:!0,features:[t.jDz],decls:41,vars:14,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","name","name","id","name",1,"form-control","form-control-lg"],["class","ms-error",4,"ngIf"],["for","iso2",1,"form-label"],["type","text","formControlName","iso2","name","iso2","id","iso2",1,"form-control","form-control-lg"],["for","country_id",1,"form-label"],["name","country_id","id","country_id","formControlName","country_id",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"ms-error"],[3,"value"],[1,"form-group","col-12","my-3"],[1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(r,u){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u062f\u0646"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u0646"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11),t.YNc(18,F,2,0,"h5",12),t.YNc(19,x,2,0,"h5",12),t.TgZ(20,"form",13),t.NdJ("ngSubmit",function(){return u.onSubmit()}),t.TgZ(21,"div",14)(22,"div",15)(23,"label",16),t._uU(24,"\u0627\u0633\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t._UZ(25,"input",17),t.YNc(26,E,3,2,"div",18),t.qZA(),t.TgZ(27,"div",15)(28,"label",19),t._uU(29,"\u0631\u0645\u0632 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t._UZ(30,"input",20),t.YNc(31,D,3,2,"div",18),t.qZA(),t.TgZ(32,"div",15)(33,"label",21),t._uU(34,"\u0627\u0644\u062f\u0648\u0644\u0629 \u0627\u0644\u062a\u0627\u0628\u0639\u0629 \u0644\u0647\u0627"),t.qZA(),t.TgZ(35,"select",22),t.YNc(36,J,2,2,"option",23),t.qZA(),t.YNc(37,Q,3,2,"div",18),t.qZA(),t.YNc(38,B,5,1,"ng-container",24),t.YNc(39,k,3,1,"ng-template",null,25,t.W1O),t.qZA()()()()()()()),2&r){const y=t.MAs(40);t.xp6(10),t.Q6J("routerLink",t.VKq(12,z,t.lcZ(11,10,"/dashboard/cities"))),t.xp6(8),t.Q6J("ngIf",!u.isEditMode),t.xp6(1),t.Q6J("ngIf",u.isEditMode),t.xp6(1),t.Q6J("formGroup",u.cityForm),t.xp6(6),t.Q6J("ngIf",u.cityForm.controls.name.invalid&&(u.cityForm.controls.name.dirty||u.cityForm.controls.name.touched)),t.xp6(5),t.Q6J("ngIf",u.cityForm.controls.iso2.invalid&&(u.cityForm.controls.iso2.dirty||u.cityForm.controls.iso2.touched)),t.xp6(5),t.Q6J("ngForOf",u.countries),t.xp6(1),t.Q6J("ngIf",u.cityForm.controls.country_id.invalid&&(u.cityForm.controls.country_id.dirty||u.cityForm.controls.country_id.touched)),t.xp6(1),t.Q6J("ngIf",!u.isEditMode)("ngIfElse",y)}},dependencies:[e.ez,e.sg,e.O5,n.u5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,p.L,s.fQ,s.lO,n.UX,n.sg,n.u,_.Bz,_.rH],styles:[".ms-error[_ngcontent-%COMP%]{color:red;margin-top:5px}"]})}return o})();function S(o,g){if(1&o&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"label",15),t._uU(4,"\u0627\u0633\u0645 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t._UZ(5,"input",16),t.qZA(),t.TgZ(6,"div",14)(7,"label",17),t._uU(8,"\u0631\u0645\u0632 \u0627\u0644\u0645\u062f\u064a\u0646\u0629"),t.qZA(),t._UZ(9,"input",16),t.qZA(),t.TgZ(10,"div",14)(11,"label",17),t._uU(12,"\u0627\u0644\u062f\u0648\u0644\u0629 \u0627\u0644\u062a\u0627\u0628\u0639\u0629 \u0644\u0647\u0627"),t.qZA(),t._UZ(13,"input",16),t.qZA()()()),2&o){const i=t.oxw();t.xp6(5),t.s9C("value",i.city.name),t.xp6(4),t.s9C("value",i.city.iso2),t.xp6(4),t.s9C("value",i.city.country.name)}}function R(o,g){1&o&&(t.TgZ(0,"div",12)(1,"h4",18),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const K=function(o){return[o]},j=[{path:"",component:c,children:[{path:"",component:m,data:{breadcrumbs:[{label:"\u0627\u0644\u0645\u062f\u0646",url:"/dashboard/cities"}]}},{path:":slug",component:q,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u0645\u062f\u064a\u0646\u0629",url:"/dashboard/cities/add-city"}]}},{path:"add-city/:id",component:q,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u064a\u0646\u0629",url:"/dashboard/cities/add-city"}]}},{path:"view-city/:id",component:(()=>{class o{constructor(i,r){this.activatedRoute=i,this.citiesService=r,this.cityId=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(i=>{const r=i.get("id");r&&(this.cityId=r,this.citiesService.getCityById(r).subscribe(u=>{u&&u.data&&(this.city=u.data)}))})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(_.gz),t.Y36(b.e))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-city"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","readonly","",1,"form-control","form-control-lg",3,"value"],["for","iso2",1,"form-label"],[1,"text-center"]],template:function(r,u){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u062f\u0648\u0644"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062f\u0648\u0644"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,S,14,3,"div",11),t.YNc(18,R,3,0,"div",11),t.qZA()()()()),2&r&&(t.xp6(10),t.Q6J("routerLink",t.VKq(5,K,t.lcZ(11,3,"/dashboard/cities"))),t.xp6(7),t.Q6J("ngIf",u.city),t.xp6(1),t.Q6J("ngIf",!u.city))},dependencies:[e.ez,e.O5,p.L,_.Bz,_.rH,s.fQ,s.lO]})}return o})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u064a\u0646\u0629",url:"/dashboard/cities/view-city"}]}}]}]},8034:(I,Z,l)=>{l.d(Z,{$:()=>T});var e=l(6814),p=l(7700),_=l(2296),s=l(5879),n=l(4286);let T=(()=>{class A{constructor(b,v,a){this.dialogRef=b,this.data=v,this._MessagesService=a}onConfirmClick(){this.dialogRef.close(!0)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(v){return new(v||A)(s.Y36(p.so),s.Y36(p.WI),s.Y36(n.K))};static#e=this.\u0275cmp=s.Xpm({type:A,selectors:[["app-confirm-dialog"]],standalone:!0,features:[s.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(v,a){1&v&&(s.TgZ(0,"div",0)(1,"h2",1),s._uU(2),s.qZA(),s.TgZ(3,"mat-dialog-content"),s._uU(4),s.qZA(),s.TgZ(5,"mat-dialog-actions",2)(6,"button",3),s.NdJ("click",function(){return a.onCancelClick()}),s._uU(7,"\u0627\u0644\u063a\u0627\u0621"),s.qZA(),s.TgZ(8,"button",4),s.NdJ("click",function(){return a.onConfirmClick()}),s._uU(9," \u062a\u0627\u0643\u064a\u062f "),s.qZA()()()),2&v&&(s.xp6(2),s.Oqu(a.data.title),s.xp6(2),s.Oqu(a.data.message))},dependencies:[e.ez,p.Is,p.uh,p.xY,p.H8,_.ot,_.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return A})()},4414:(I,Z,l)=>{l.d(Z,{L:()=>v});var e=l(6814),p=l(846),_=l(8733),s=l(2181),n=l(5879);function T(a,f){1&a&&(n.TgZ(0,"li",6),n._uU(1,"/"),n.qZA())}function A(a,f){if(1&a&&(n.ynx(0),n.TgZ(1,"li",4)(2,"a",5),n.ALo(3,"localize"),n._uU(4),n.qZA()(),n.YNc(5,T,2,0,"li",3),n.BQk()),2&a){const d=f.$implicit,m=f.index,c=n.oxw().$implicit;n.xp6(2),n.Q6J("routerLink",n.lcZ(3,3,d.url)),n.xp6(2),n.Oqu(d.label),n.xp6(1),n.Q6J("ngIf",m<c.segments.length-1)}}function t(a,f){1&a&&(n.TgZ(0,"li",6),n._uU(1,"/"),n.qZA())}function b(a,f){if(1&a&&(n.ynx(0),n.YNc(1,A,6,5,"ng-container",2),n.YNc(2,t,2,0,"li",3),n.BQk()),2&a){const d=f.$implicit,m=f.index,c=n.oxw();n.xp6(1),n.Q6J("ngForOf",d.segments),n.xp6(1),n.Q6J("ngIf",m<c.breadcrumbs.length-1)}}let v=(()=>{class a{constructor(d,m){this.router=d,this.activatedRoute=m,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,s.h)(d=>d instanceof p.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(d,m="",c=[]){let h=[],C=d;for(;C.firstChild;){C=C.firstChild;const F=C.snapshot.url.map(O=>O.path).join("/");""!==F&&(m+=`/${F}`);const x=C.snapshot.data.breadcrumbs;if(x&&x!=h&&Array.isArray(x)&&""!==F){h=x;const O=x.map(U=>({label:U.label,url:U.url||m}));c.push({segments:O})}}return c}ngOnDestroy(){}static#t=this.\u0275fac=function(m){return new(m||a)(n.Y36(p.F0),n.Y36(p.gz))};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-breadcrumb"]],standalone:!0,features:[n.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(m,c){1&m&&(n.TgZ(0,"nav",0)(1,"ol",1),n.YNc(2,b,3,2,"ng-container",2),n.qZA()()),2&m&&(n.xp6(2),n.Q6J("ngForOf",c.breadcrumbs))},dependencies:[e.ez,e.sg,e.O5,p.Bz,p.rH,_.fQ,_.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return a})()},1818:(I,Z,l)=>{l.d(Z,{Q:()=>v});var e=l(5879),p=l(6223),_=l(6814);function s(a,f){if(1&a){const d=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){e.CHM(d);const c=e.oxw();return e.KtG(c.navigateTo(1))}),e._uU(2,"1"),e.qZA()()}}function n(a,f){1&a&&(e.TgZ(0,"li",2)(1,"a",9),e._uU(2,"..."),e.qZA()())}function T(a,f){if(1&a){const d=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){const h=e.CHM(d).$implicit,C=e.oxw();return e.KtG(C.navigateTo(h))}),e._uU(2),e.qZA()()}if(2&a){const d=f.$implicit,m=e.oxw();e.ekj("active",m.currentPage===d),e.xp6(2),e.Oqu(d)}}function A(a,f){1&a&&(e.TgZ(0,"li",2)(1,"a",9),e._uU(2,"..."),e.qZA()())}function t(a,f){if(1&a){const d=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){e.CHM(d);const c=e.oxw();return e.KtG(c.navigateTo(c.totalPages))}),e._uU(2),e.qZA()()}if(2&a){const d=e.oxw();e.xp6(2),e.Oqu(d.totalPages)}}const b={provide:p.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0};let v=(()=>{class a{constructor(){this.pageChange=new e.vpe}navigateTo(d){this.pageChange.emit(d),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const d=[];if(this.totalPages<=5)for(let c=1;c<=this.totalPages;c++)d.push(c);else{let c,h;this.currentPage<=Math.floor(2.5)?(c=1,h=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(c=this.totalPages-5+1,h=this.totalPages):(c=this.currentPage-Math.floor(2.5),h=this.currentPage+Math.floor(2.5));for(let C=c;C<=h;C++)d.push(C)}return d}static#t=this.\u0275fac=function(m){return new(m||a)};static#e=this.\u0275cmp=e.Xpm({type:a,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[e._Bn([b]),e.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(m,c){1&m&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),e.NdJ("click",function(){return c.navigateTo(c.currentPage-1)}),e.TgZ(4,"span",4),e._uU(5,"\xab"),e.qZA()()(),e.YNc(6,s,3,0,"li",5),e.YNc(7,n,3,0,"li",5),e.YNc(8,T,3,3,"li",6),e.YNc(9,A,3,0,"li",5),e.YNc(10,t,3,1,"li",5),e.TgZ(11,"li",2)(12,"a",7),e.NdJ("click",function(){return c.navigateTo(c.currentPage+1)}),e.TgZ(13,"span",4),e._uU(14,"\xbb"),e.qZA()()()()()),2&m&&(e.xp6(2),e.ekj("disabled",1===c.currentPage),e.xp6(4),e.Q6J("ngIf",c.currentPage>3),e.xp6(1),e.Q6J("ngIf",c.currentPage>4),e.xp6(1),e.Q6J("ngForOf",c.calculatePages()),e.xp6(1),e.Q6J("ngIf",c.currentPage<c.totalPages-3),e.xp6(1),e.Q6J("ngIf",c.currentPage<c.totalPages-2),e.xp6(1),e.ekj("disabled",c.currentPage===c.totalPages))},dependencies:[_.ez,_.sg,_.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return a})()}}]);