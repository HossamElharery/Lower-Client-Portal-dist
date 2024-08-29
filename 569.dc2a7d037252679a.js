"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[569],{7569:(I,T,d)=>{d.r(T),d.d(T,{default:()=>_t});var r=d(6814),f=d(846),t=d(5879);let _=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-power-attorney"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(i,n){1&i&&t._UZ(0,"router-outlet")},dependencies:[r.ez,f.lC]})}return o})();var u=d(4414),h=d(8733),c=d(6223),U=d(1818),x=d(8034),v=d(9862),a=d(553);let y=(()=>{class o{constructor(e){this.http=e,this.powerAttorneyUrl=`${a.N.url}power-attorneys`}getPowerAttorneysList(e){let i=new v.LE;return e&&Object.keys(e).forEach(n=>{i=i.append(n,e[n])}),this.http.get(this.powerAttorneyUrl,{params:i})}getPowerAttorneysById(e){return this.http.get(`${this.powerAttorneyUrl}/show?power_attorney_id=${e}`)}deletePowerAttorney(e){return this.http.delete(`${this.powerAttorneyUrl}/destroy?power_attorney_id=${e}`)}addPowerAttorney(e,i){let n=new v.LE;i&&Object.keys(i).forEach(A=>{n=n.append(A,i[A])});const g=new FormData;return Object.keys(e).forEach(A=>{const Z=e[A];Array.isArray(Z)?Z.forEach((F,E)=>{F instanceof File&&g.append(`files[documents][${E}]`,F)}):g.append(A,Z)}),this.http.post(this.powerAttorneyUrl,g,{params:n})}updatePowerAttorney(e,i,n){let g=new v.LE;n&&Object.keys(n).forEach(Z=>{g=g.append(Z,n[Z])});const A=new FormData;return Object.keys(i).forEach(Z=>{const F=i[Z];Array.isArray(F)?F.forEach((E,mt)=>{E instanceof File&&A.append(`files[documents][${mt}]`,E)}):A.append(Z,F)}),this.http.post(`${this.powerAttorneyUrl}/update?power_attorney_id=${e}`,A,{params:g})}static#t=this.\u0275fac=function(i){return new(i||o)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var p=d(7700);const m=function(o,s){return[o,s]};function l(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",27)(14,"a",28),t.ALo(15,"localize"),t._UZ(16,"i",29),t._uU(17," \u0639\u0631\u0636"),t.qZA(),t.TgZ(18,"a",30),t.ALo(19,"localize"),t._UZ(20,"i",31),t._uU(21," \u062a\u0639\u062f\u064a\u0644 "),t.qZA(),t.TgZ(22,"button",32),t.NdJ("click",function(){const g=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.deletePOA(g.id,g.principal_name))}),t._UZ(23,"i",33),t._uU(24," \u062d\u0630\u0641 "),t.qZA()()()}if(2&o){const e=s.$implicit,i=s.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.attorney_number),t.xp6(2),t.Oqu(e.notary_office),t.xp6(2),t.Oqu(e.principal_name),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.client.code),t.xp6(2),t.Q6J("routerLink",t.WLB(12,m,t.lcZ(15,8,"/dashboard/power-attorneys/view-power-attorney"),e.id)),t.xp6(4),t.Q6J("routerLink",t.WLB(15,m,t.lcZ(19,10,"/dashboard/power-attorneys/add-power-attorney"),e.id))}}function w(o,s){1&o&&(t.TgZ(0,"tr")(1,"td",34),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let b=(()=>{class o{constructor(e,i,n,g){this.powerAttorneysServices=e,this.localize=i,this.router=n,this.dialog=g,this.POAs=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getListPOAs()}onPageChange(e){this.getListPOAs(e)}getListPOAs(e=1){this.loading=!0,this.powerAttorneysServices.getPowerAttorneysList({page:e}).subscribe({next:i=>{this.POAs=i.data,this.currentPage=i.pagination.current_page,this.totalPages=i.pagination.last_page,this.loading=!1},error:i=>{this.loading=!1,console.log(i)}})}deletePOA(e,i){this.dialog.open(x.$,{width:"500px",data:{title:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 ${i}\u061f`}}).afterClosed().subscribe(g=>{g&&this.powerAttorneysServices.deletePowerAttorney(e).subscribe({next:A=>{this.getListPOAs()},error:A=>{console.log("there was an error deleting Court:",A)}})})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(y),t.Y36(h.An),t.Y36(f.F0),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-power-attorneys-list"]],standalone:!0,features:[t.jDz],decls:54,vars:9,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-12"],[1,"row","list-row"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-3","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-6","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-md-8"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-4","text-center"],[1,"text-center","mb-0"],[1,"action"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","7",1,"text-center"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",4)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t.ALo(16,"localize"),t._UZ(17,"i",11),t._uU(18," \u0625\u0636\u0627\u0641\u0629 \u062a\u0648\u0643\u064a\u0644 \u062c\u062f\u064a\u062f "),t.qZA()(),t.TgZ(19,"div",12),t._UZ(20,"input",13),t.qZA(),t.TgZ(21,"div",14)(22,"button",15),t._UZ(23,"i",16),t._uU(24," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(25,"div",17)(26,"div",18)(27,"table",19)(28,"thead")(29,"tr")(30,"th"),t._uU(31,"\u062a\u0631\u0642\u064a\u0645"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"\u0631\u0642\u0645 \u0627\u0644\u0645\u062d\u0636\u0631"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"\u0645\u0643\u062a\u0628 \u0643\u0627\u062a\u0628 \u0627\u0644\u0639\u062f\u0644"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"\u0639\u0645\u064a\u0644 \u0631\u0642\u0645"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"\u0627\u062c\u0631\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(44,"tbody"),t.YNc(45,l,25,18,"tr",20),t.YNc(46,w,3,0,"tr",21),t.qZA()()()(),t.TgZ(47,"div",7)(48,"div",22)(49,"div",23)(50,"pagination",24),t.NdJ("pageChange",function(A){return n.onPageChange(A)}),t.qZA()(),t.TgZ(51,"div",25)(52,"p",26),t._uU(53),t.qZA()()()()()()()()),2&i&&(t.xp6(15),t.Q6J("routerLink",t.lcZ(16,7,"/dashboard/power-attorneys/add-power-attorney")),t.xp6(30),t.Q6J("ngForOf",n.POAs),t.xp6(1),t.Q6J("ngIf",0===n.POAs.length&&!n.loading),t.xp6(4),t.Q6J("currentPage",n.currentPage)("totalPages",n.totalPages),t.xp6(3),t.AsE(" \u0635\u0641\u062d\u0629 \u0631\u0642\u0645 ",n.currentPage," \u0645\u0646 \u0623\u0635\u0644 ",n.totalPages," \u0635\u0641\u062d\u0629 "))},dependencies:[r.ez,r.sg,r.O5,u.L,f.Bz,f.rH,h.fQ,h.lO,c.u5,U.Q]})}return o})();var C=d(5862),P=d(4286);const O=["fileInput"];function q(o,s){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u0625\u0636\u0627\u0641\u0629 \u062a\u0648\u0643\u064a\u0644"),t.qZA())}function N(o,s){1&o&&(t.TgZ(0,"h5"),t._uU(1,"\u062a\u0639\u062f\u064a\u0644 \u062a\u0648\u0643\u064a\u0644"),t.qZA())}function J(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Q(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.attorney_number.errors?null:e.powerAttorneyForm.controls.attorney_number.errors.serverError[0]," ")}}function D(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,J,2,0,"div",18),t.YNc(2,Q,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.attorney_number.errors?null:e.powerAttorneyForm.controls.attorney_number.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.attorney_number.errors?null:e.powerAttorneyForm.controls.attorney_number.errors.serverError)}}function L(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Y(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.notary_office.errors?null:e.powerAttorneyForm.controls.notary_office.errors.serverError[0]," ")}}function k(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,L,2,0,"div",18),t.YNc(2,Y,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.notary_office.errors?null:e.powerAttorneyForm.controls.notary_office.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.notary_office.errors?null:e.powerAttorneyForm.controls.notary_office.errors.serverError)}}function B(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function S(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.principal_name.errors?null:e.powerAttorneyForm.controls.principal_name.errors.serverError[0]," ")}}function z(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,B,2,0,"div",18),t.YNc(2,S,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.principal_name.errors?null:e.powerAttorneyForm.controls.principal_name.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.principal_name.errors?null:e.powerAttorneyForm.controls.principal_name.errors.serverError)}}function R(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function j(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.date.errors?null:e.powerAttorneyForm.controls.date.errors.serverError[0]," ")}}function $(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,R,2,0,"div",18),t.YNc(2,j,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.date.errors?null:e.powerAttorneyForm.controls.date.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.date.errors?null:e.powerAttorneyForm.controls.date.errors.serverError)}}function K(o,s){if(1&o&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.user.name," ")}}function V(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function W(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.client_id.errors?null:e.powerAttorneyForm.controls.client_id.errors.serverError[0]," ")}}function H(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,V,2,0,"div",18),t.YNc(2,W,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.client_id.errors?null:e.powerAttorneyForm.controls.client_id.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.client_id.errors?null:e.powerAttorneyForm.controls.client_id.errors.serverError)}}function G(o,s){1&o&&(t.TgZ(0,"div",38),t._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function X(o,s){if(1&o&&(t.TgZ(0,"div",38),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",null==e.powerAttorneyForm.controls.letter.errors?null:e.powerAttorneyForm.controls.letter.errors.serverError[0]," ")}}function tt(o,s){if(1&o&&(t.TgZ(0,"div",38),t.YNc(1,G,2,0,"div",18),t.YNc(2,X,2,1,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.letter.errors?null:e.powerAttorneyForm.controls.letter.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.powerAttorneyForm.controls.letter.errors?null:e.powerAttorneyForm.controls.letter.errors.serverError)}}function et(o,s){if(1&o&&(t.TgZ(0,"div",34),t._UZ(1,"input",41),t.TgZ(2,"a",42),t._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),t.qZA()()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("value",e.original),t.xp6(1),t.Q6J("href",e.original,t.LSH)}}function ot(o,s){if(1&o&&(t.ynx(0),t.YNc(1,et,4,2,"div",40),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.conversionUrls)}}function rt(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"div",43)(2,"button",44),t._UZ(3,"i",45),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u062a\u0648\u0643\u064a\u0644 "),t.qZA()(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.powerAttorneyForm.valid)}}function nt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",43)(1,"button",46),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.updatePowerAttorney())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0643\u064a\u0644 "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.powerAttorneyForm.valid)}}const it=function(o){return[o]};let M=(()=>{class o{constructor(e,i,n,g,A,Z){this.activatedRoute=e,this.powerAttorneyService=i,this.clientsService=n,this.localize=g,this._MessagesService=A,this.router=Z,this.conversionUrls=[],this.isEditMode=!1,this.powerAttorney_id="",this.clients=[],this.file=[],this.powerAttorneyForm=new c.cw({attorney_number:new c.NI("",c.kI.required),notary_office:new c.NI("",c.kI.required),principal_name:new c.NI("",c.kI.required),client_id:new c.NI("",c.kI.required),date:new c.NI("",c.kI.required),letter:new c.NI("",c.kI.required),files:new c.NI([])})}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const i=e.get("id");i&&(this.isEditMode=!0,this.powerAttorney_id=i,this.powerAttorneyService.getPowerAttorneysById(i).subscribe(n=>{n&&n.data&&this.setFormValues(n.data)}))}),this.getListClients()}setFormValues(e){if(console.log(e),this.powerAttorneyForm.controls.attorney_number.setValue(e.attorney_number),this.powerAttorneyForm.controls.notary_office.setValue(e.notary_office),this.powerAttorneyForm.controls.principal_name.setValue(e.principal_name),this.powerAttorneyForm.controls.client_id.setValue(e.client.id),this.powerAttorneyForm.controls.date.setValue(e.date),this.powerAttorneyForm.controls.letter.setValue(e.letter),e.conversion_urls)for(let i in e.conversion_urls)e.conversion_urls[i].forEach(n=>{this.conversionUrls.push(n)})}navigateToPOWsList(){const e=this.localize.translateRoute("/dashboard/power-attorneys");this.router.navigate([e])}getListClients(){this.clientsService.getClientsList().subscribe({next:e=>{this.clients=e.data},error:e=>{console.log(e)}})}onFilesSelected(e){const i=Array.from(e.target.files),n=this.powerAttorneyForm.get("files")?.value||[];this.powerAttorneyForm.get("files")?.setValue([...n,...i])}discardFiles(){this.powerAttorneyForm.get("files")?.setValue([]),this.fileInput.nativeElement.value=""}onSubmit(){this.powerAttorneyForm.valid&&this.powerAttorneyService.addPowerAttorney({attorney_number:this.powerAttorneyForm.controls.attorney_number.value||"",notary_office:this.powerAttorneyForm.controls.notary_office.value||"",principal_name:this.powerAttorneyForm.controls.principal_name.value||"",client_id:this.powerAttorneyForm.controls.client_id.value||"",date:this.powerAttorneyForm.controls.date.value||"",letter:this.powerAttorneyForm.controls.letter.value||"",files:this.powerAttorneyForm.controls.files.value||""}).subscribe({next:i=>{this.navigateToPOWsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:i=>{console.log("Failed to add Power Attorney:",i)}})}updatePowerAttorney(){this.powerAttorneyForm.valid&&this.powerAttorneyService.updatePowerAttorney(this.powerAttorney_id,{attorney_number:this.powerAttorneyForm.controls.attorney_number.value||"",notary_office:this.powerAttorneyForm.controls.notary_office.value||"",principal_name:this.powerAttorneyForm.controls.principal_name.value||"",client_id:this.powerAttorneyForm.controls.client_id.value||"",date:this.powerAttorneyForm.controls.date.value||"",letter:this.powerAttorneyForm.controls.letter.value||"",files:this.powerAttorneyForm.controls.files.value||"",_method:"PATCH"}).subscribe({next:i=>{this.navigateToPOWsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u062a\u062d\u062f\u064a\u062b",3e3)},error:i=>{console.log("Failed to update court:",i)}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(f.gz),t.Y36(y),t.Y36(C.a),t.Y36(h.An),t.Y36(P.K),t.Y36(f.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-power-attorney"]],viewQuery:function(i,n){if(1&i&&t.Gf(O,5),2&i){let g;t.iGM(g=t.CRH())&&(n.fileInput=g.first)}},standalone:!0,features:[t.jDz],decls:65,vars:18,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","attorney_number",1,"form-label"],["type","text","formControlName","attorney_number","name","attorney_number","id","attorney_number",1,"form-control","form-control-lg"],["class","ms-error",4,"ngIf"],["for","notary_office",1,"form-label"],["type","text","formControlName","notary_office","name","notary_office","id","notary_office",1,"form-control","form-control-lg"],["for","principal_name",1,"form-label"],["type","text","formControlName","principal_name","name","principal_name","id","principal_name",1,"form-control","form-control-lg"],["for","date",1,"form-label"],["type","date","formControlName","date","name","date","id","date",1,"form-control","form-control-lg"],["for","client_id",1,"form-label"],["name","client_id","id","client_id","formControlName","client_id",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],["for","letter",1,"form-label"],["type","text","name","letter","id","letter","formControlName","letter","rows","1",1,"form-control","form-control-lg"],[1,"form-group","col-md-12","mb-3"],["for","files",1,"form-label"],["type","file","id","files","multiple","","accept","image/*",1,"form-control",3,"change"],["fileInput",""],[1,"mt-2"],["type","button",1,"btn","btn-danger",2,"background","red !important",3,"click"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"ms-error"],[3,"value"],["class","mt-2",4,"ngFor","ngForOf"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"form-group","col-12","my-3"],[1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(i,n){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11),t.YNc(18,q,2,0,"h5",12),t.YNc(19,N,2,0,"h5",12),t.TgZ(20,"form",13),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(21,"div",14)(22,"div",15)(23,"label",16),t._uU(24,"\u0631\u0642\u0645 \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA(),t._UZ(25,"input",17),t.YNc(26,D,3,2,"div",18),t.qZA(),t.TgZ(27,"div",15)(28,"label",19),t._uU(29,"\u0645\u0643\u062a\u0628 \u0643\u0627\u062a\u0628 \u0627\u0644\u0639\u062f\u0644"),t.qZA(),t._UZ(30,"input",20),t.YNc(31,k,3,2,"div",18),t.qZA(),t.TgZ(32,"div",15)(33,"label",21),t._uU(34,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a"),t.qZA(),t._UZ(35,"input",22),t.YNc(36,z,3,2,"div",18),t.qZA(),t.TgZ(37,"div",15)(38,"label",23),t._uU(39,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),t.qZA(),t._UZ(40,"input",24),t.YNc(41,$,3,2,"div",18),t.qZA(),t.TgZ(42,"div",15)(43,"label",25),t._uU(44,"\u0627\u0644\u0639\u0645\u064a\u0644"),t.qZA(),t.TgZ(45,"select",26),t.YNc(46,K,2,2,"option",27),t.qZA(),t.YNc(47,H,3,2,"div",18),t.qZA(),t.TgZ(48,"div",15)(49,"label",28),t._uU(50,"\u0627\u0644\u062e\u0637\u0627\u0628"),t.qZA(),t._UZ(51,"textarea",29),t.YNc(52,tt,3,2,"div",18),t.qZA(),t.TgZ(53,"div",30)(54,"label",31),t._uU(55,"\u0627\u0644\u0635\u0648\u0631"),t.qZA(),t.YNc(56,ot,2,1,"ng-container",12),t.TgZ(57,"input",32,33),t.NdJ("change",function(A){return n.onFilesSelected(A)}),t.qZA(),t.TgZ(59,"div",34)(60,"button",35),t.NdJ("click",function(){return n.discardFiles()}),t._uU(61," \u062a\u062c\u0627\u0647\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0635\u0648\u0631 "),t.qZA()()(),t.YNc(62,rt,5,1,"ng-container",36),t.YNc(63,nt,3,1,"ng-template",null,37,t.W1O),t.qZA()()()()()()()),2&i){const g=t.MAs(64);t.xp6(10),t.Q6J("routerLink",t.VKq(16,it,t.lcZ(11,14,"/dashboard/power-attorneys"))),t.xp6(8),t.Q6J("ngIf",!n.isEditMode),t.xp6(1),t.Q6J("ngIf",n.isEditMode),t.xp6(1),t.Q6J("formGroup",n.powerAttorneyForm),t.xp6(6),t.Q6J("ngIf",n.powerAttorneyForm.controls.attorney_number.invalid&&(n.powerAttorneyForm.controls.attorney_number.dirty||n.powerAttorneyForm.controls.attorney_number.touched)),t.xp6(5),t.Q6J("ngIf",n.powerAttorneyForm.controls.notary_office.invalid&&(n.powerAttorneyForm.controls.notary_office.dirty||n.powerAttorneyForm.controls.notary_office.touched)),t.xp6(5),t.Q6J("ngIf",n.powerAttorneyForm.controls.principal_name.invalid&&(n.powerAttorneyForm.controls.principal_name.dirty||n.powerAttorneyForm.controls.principal_name.touched)),t.xp6(5),t.Q6J("ngIf",n.powerAttorneyForm.controls.date.invalid&&(n.powerAttorneyForm.controls.date.dirty||n.powerAttorneyForm.controls.date.touched)),t.xp6(5),t.Q6J("ngForOf",n.clients),t.xp6(1),t.Q6J("ngIf",n.powerAttorneyForm.controls.client_id.invalid&&(n.powerAttorneyForm.controls.client_id.dirty||n.powerAttorneyForm.controls.client_id.touched)),t.xp6(5),t.Q6J("ngIf",n.powerAttorneyForm.controls.letter.invalid&&(n.powerAttorneyForm.controls.letter.dirty||n.powerAttorneyForm.controls.letter.touched)),t.xp6(4),t.Q6J("ngIf",n.isEditMode&&n.conversionUrls.length>0),t.xp6(6),t.Q6J("ngIf",!n.isEditMode)("ngIfElse",g)}},dependencies:[r.ez,r.sg,r.O5,c.u5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,u.L,h.fQ,h.lO,c.UX,c.sg,c.u,f.Bz,f.rH],styles:[".ms-error[_ngcontent-%COMP%]{color:red;margin-top:5px}"]})}return o})();function ut(o,s){if(1&o&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.user.name," ")}}function at(o,s){1&o&&(t.TgZ(0,"label",32),t._uU(1,"\u0627\u0644\u0635\u0648\u0631"),t.qZA())}function lt(o,s){if(1&o&&(t.TgZ(0,"div",34),t._UZ(1,"input",35),t.TgZ(2,"a",36),t._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),t.qZA()()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("value",e.original),t.xp6(1),t.Q6J("href",e.original,t.LSH)}}function st(o,s){if(1&o&&(t.ynx(0),t.YNc(1,lt,4,2,"div",33),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.conversionUrls)}}function ct(o,s){if(1&o&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"label",15),t._uU(4,"\u0631\u0642\u0645 \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA(),t._UZ(5,"input",16),t.qZA(),t.TgZ(6,"div",14)(7,"label",17),t._uU(8,"\u0645\u0643\u062a\u0628 \u0643\u0627\u062a\u0628 \u0627\u0644\u0639\u062f\u0644"),t.qZA(),t._UZ(9,"input",18),t.qZA(),t.TgZ(10,"div",14)(11,"label",19),t._uU(12,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a"),t.qZA(),t._UZ(13,"input",20),t.qZA(),t.TgZ(14,"div",14)(15,"label",21),t._uU(16,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),t.qZA(),t._UZ(17,"input",22),t.qZA(),t.TgZ(18,"div",14)(19,"label",23),t._uU(20,"\u0627\u0644\u0639\u0645\u064a\u0644"),t.qZA(),t.TgZ(21,"select",24),t.YNc(22,ut,2,2,"option",25),t.qZA()(),t.TgZ(23,"div",14)(24,"label",26),t._uU(25,"\u0627\u0644\u062e\u0637\u0627\u0628"),t.qZA(),t.TgZ(26,"textarea",27),t._uU(27),t.qZA()(),t.TgZ(28,"div",28),t.YNc(29,at,2,0,"label",29),t.YNc(30,st,2,1,"ng-container",30),t.qZA()()()),2&o){const e=t.oxw();t.xp6(5),t.s9C("value",e.powerAttorney.attorney_number),t.xp6(4),t.s9C("value",e.powerAttorney.notary_office),t.xp6(4),t.s9C("value",e.powerAttorney.principal_name),t.xp6(4),t.s9C("value",e.powerAttorney.date),t.xp6(4),t.Q6J("value",e.powerAttorney.client.id),t.xp6(1),t.Q6J("ngForOf",e.clients),t.xp6(5),t.Oqu(e.powerAttorney.letter),t.xp6(2),t.Q6J("ngIf",e.conversionUrls.length>0),t.xp6(1),t.Q6J("ngIf",e.conversionUrls.length>0)}}function dt(o,s){1&o&&(t.TgZ(0,"div",12)(1,"h4",37),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const pt=function(o){return[o]},_t=[{path:"",component:_,children:[{path:"",component:b,data:{breadcrumbs:[{label:"\u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a",url:"/dashboard/power-attorneys"}]}},{path:":slug",component:M,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u062a\u0648\u0643\u064a\u0644",url:"/dashboard/power-attorneys/add-power-attorney"}]}},{path:"add-power-attorney/:id",component:M,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0643\u064a\u0644",url:"/dashboard/power-attorneys/add-power-attorney"}]}},{path:"view-power-attorney/:id",component:(()=>{class o{constructor(e,i,n){this.activatedRoute=e,this.POAServices=i,this.clientServices=n,this.conversionUrls=[],this.clients=[]}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const i=e.get("id");i&&this.POAServices.getPowerAttorneysById(i).subscribe({next:n=>{if(this.powerAttorney=n.data,console.log(this.powerAttorney),this.powerAttorney.conversion_urls)for(let g in this.powerAttorney.conversion_urls)this.powerAttorney.conversion_urls[g].forEach(A=>{this.conversionUrls.push(A)})},error:n=>{console.error("Error fetching Power Attorney:",n)}})}),this.getClientList()}getClientList(){this.clientServices.getAllClients().subscribe(e=>{this.clients=e.data})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(f.gz),t.Y36(y),t.Y36(C.a))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-power-attorney"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","attorney_number",1,"form-label"],["disabled","","type","text","name","attorney_number","id","attorney_number",1,"form-control","form-control-lg",3,"value"],["for","notary_office",1,"form-label"],["disabled","","type","text","name","notary_office","id","notary_office",1,"form-control","form-control-lg",3,"value"],["for","principal_name",1,"form-label"],["disabled","","type","text","name","principal_name","id","principal_name",1,"form-control","form-control-lg",3,"value"],["for","date",1,"form-label"],["disabled","","type","date","name","date","id","date",1,"form-control","form-control-lg",3,"value"],["for","client_id",1,"form-label"],["disabled","","name","client_id","id","client_id","readonly","",1,"form-control","form-control-lg",3,"value"],[3,"value",4,"ngFor","ngForOf"],["for","letter",1,"form-label"],["disabled","","type","text","name","letter","id","letter","formControlName","letter","rows","1",1,"form-control","form-control-lg"],[1,"form-group","col-12","mb-3"],["for","files","class","form-label",4,"ngIf"],[4,"ngIf"],[3,"value"],["for","files",1,"form-label"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"text-center"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0648\u0643\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0645\u064a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,ct,31,9,"div",11),t.YNc(18,dt,3,0,"div",11),t.qZA()()()()),2&i&&(t.xp6(10),t.Q6J("routerLink",t.VKq(5,pt,t.lcZ(11,3,"/dashboard/power-attorneys"))),t.xp6(7),t.Q6J("ngIf",n.powerAttorney),t.xp6(1),t.Q6J("ngIf",!n.powerAttorney))},dependencies:[r.ez,r.sg,r.O5,u.L,f.Bz,f.rH,h.fQ,h.lO]})}return o})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0648\u0643\u064a\u0644",url:"/dashboard/power-attorneys/view-power-attorney"}]}}]}]},8034:(I,T,d)=>{d.d(T,{$:()=>h});var r=d(6814),f=d(7700),t=d(2296),_=d(5879),u=d(4286);let h=(()=>{class c{constructor(x,v,a){this.dialogRef=x,this.data=v,this._MessagesService=a}onConfirmClick(){this.dialogRef.close(!0)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(v){return new(v||c)(_.Y36(f.so),_.Y36(f.WI),_.Y36(u.K))};static#e=this.\u0275cmp=_.Xpm({type:c,selectors:[["app-confirm-dialog"]],standalone:!0,features:[_.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(v,a){1&v&&(_.TgZ(0,"div",0)(1,"h2",1),_._uU(2),_.qZA(),_.TgZ(3,"mat-dialog-content"),_._uU(4),_.qZA(),_.TgZ(5,"mat-dialog-actions",2)(6,"button",3),_.NdJ("click",function(){return a.onCancelClick()}),_._uU(7,"\u0627\u0644\u063a\u0627\u0621"),_.qZA(),_.TgZ(8,"button",4),_.NdJ("click",function(){return a.onConfirmClick()}),_._uU(9," \u062a\u0627\u0643\u064a\u062f "),_.qZA()()()),2&v&&(_.xp6(2),_.Oqu(a.data.title),_.xp6(2),_.Oqu(a.data.message))},dependencies:[r.ez,f.Is,f.uh,f.xY,f.H8,t.ot,t.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return c})()},4414:(I,T,d)=>{d.d(T,{L:()=>v});var r=d(6814),f=d(846),t=d(8733),_=d(2181),u=d(5879);function h(a,y){1&a&&(u.TgZ(0,"li",6),u._uU(1,"/"),u.qZA())}function c(a,y){if(1&a&&(u.ynx(0),u.TgZ(1,"li",4)(2,"a",5),u.ALo(3,"localize"),u._uU(4),u.qZA()(),u.YNc(5,h,2,0,"li",3),u.BQk()),2&a){const p=y.$implicit,m=y.index,l=u.oxw().$implicit;u.xp6(2),u.Q6J("routerLink",u.lcZ(3,3,p.url)),u.xp6(2),u.Oqu(p.label),u.xp6(1),u.Q6J("ngIf",m<l.segments.length-1)}}function U(a,y){1&a&&(u.TgZ(0,"li",6),u._uU(1,"/"),u.qZA())}function x(a,y){if(1&a&&(u.ynx(0),u.YNc(1,c,6,5,"ng-container",2),u.YNc(2,U,2,0,"li",3),u.BQk()),2&a){const p=y.$implicit,m=y.index,l=u.oxw();u.xp6(1),u.Q6J("ngForOf",p.segments),u.xp6(1),u.Q6J("ngIf",m<l.breadcrumbs.length-1)}}let v=(()=>{class a{constructor(p,m){this.router=p,this.activatedRoute=m,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,_.h)(p=>p instanceof f.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(p,m="",l=[]){let w=[],b=p;for(;b.firstChild;){b=b.firstChild;const C=b.snapshot.url.map(O=>O.path).join("/");""!==C&&(m+=`/${C}`);const P=b.snapshot.data.breadcrumbs;if(P&&P!=w&&Array.isArray(P)&&""!==C){w=P;const O=P.map(q=>({label:q.label,url:q.url||m}));l.push({segments:O})}}return l}ngOnDestroy(){}static#t=this.\u0275fac=function(m){return new(m||a)(u.Y36(f.F0),u.Y36(f.gz))};static#e=this.\u0275cmp=u.Xpm({type:a,selectors:[["app-breadcrumb"]],standalone:!0,features:[u.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(m,l){1&m&&(u.TgZ(0,"nav",0)(1,"ol",1),u.YNc(2,x,3,2,"ng-container",2),u.qZA()()),2&m&&(u.xp6(2),u.Q6J("ngForOf",l.breadcrumbs))},dependencies:[r.ez,r.sg,r.O5,f.Bz,f.rH,t.fQ,t.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return a})()},1818:(I,T,d)=>{d.d(T,{Q:()=>v});var r=d(5879),f=d(6223),t=d(6814);function _(a,y){if(1&a){const p=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){r.CHM(p);const l=r.oxw();return r.KtG(l.navigateTo(1))}),r._uU(2,"1"),r.qZA()()}}function u(a,y){1&a&&(r.TgZ(0,"li",2)(1,"a",9),r._uU(2,"..."),r.qZA()())}function h(a,y){if(1&a){const p=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){const w=r.CHM(p).$implicit,b=r.oxw();return r.KtG(b.navigateTo(w))}),r._uU(2),r.qZA()()}if(2&a){const p=y.$implicit,m=r.oxw();r.ekj("active",m.currentPage===p),r.xp6(2),r.Oqu(p)}}function c(a,y){1&a&&(r.TgZ(0,"li",2)(1,"a",9),r._uU(2,"..."),r.qZA()())}function U(a,y){if(1&a){const p=r.EpF();r.TgZ(0,"li",2)(1,"a",8),r.NdJ("click",function(){r.CHM(p);const l=r.oxw();return r.KtG(l.navigateTo(l.totalPages))}),r._uU(2),r.qZA()()}if(2&a){const p=r.oxw();r.xp6(2),r.Oqu(p.totalPages)}}const x={provide:f.JU,useExisting:(0,r.Gpc)(()=>v),multi:!0};let v=(()=>{class a{constructor(){this.pageChange=new r.vpe}navigateTo(p){this.pageChange.emit(p),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const p=[];if(this.totalPages<=5)for(let l=1;l<=this.totalPages;l++)p.push(l);else{let l,w;this.currentPage<=Math.floor(2.5)?(l=1,w=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(l=this.totalPages-5+1,w=this.totalPages):(l=this.currentPage-Math.floor(2.5),w=this.currentPage+Math.floor(2.5));for(let b=l;b<=w;b++)p.push(b)}return p}static#t=this.\u0275fac=function(m){return new(m||a)};static#e=this.\u0275cmp=r.Xpm({type:a,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[r._Bn([x]),r.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(m,l){1&m&&(r.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),r.NdJ("click",function(){return l.navigateTo(l.currentPage-1)}),r.TgZ(4,"span",4),r._uU(5,"\xab"),r.qZA()()(),r.YNc(6,_,3,0,"li",5),r.YNc(7,u,3,0,"li",5),r.YNc(8,h,3,3,"li",6),r.YNc(9,c,3,0,"li",5),r.YNc(10,U,3,1,"li",5),r.TgZ(11,"li",2)(12,"a",7),r.NdJ("click",function(){return l.navigateTo(l.currentPage+1)}),r.TgZ(13,"span",4),r._uU(14,"\xbb"),r.qZA()()()()()),2&m&&(r.xp6(2),r.ekj("disabled",1===l.currentPage),r.xp6(4),r.Q6J("ngIf",l.currentPage>3),r.xp6(1),r.Q6J("ngIf",l.currentPage>4),r.xp6(1),r.Q6J("ngForOf",l.calculatePages()),r.xp6(1),r.Q6J("ngIf",l.currentPage<l.totalPages-3),r.xp6(1),r.Q6J("ngIf",l.currentPage<l.totalPages-2),r.xp6(1),r.ekj("disabled",l.currentPage===l.totalPages))},dependencies:[t.ez,t.sg,t.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return a})()}}]);