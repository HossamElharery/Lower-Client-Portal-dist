"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[312],{312:(C,U,d)=>{d.r(U),d.d(U,{default:()=>he});var o=d(6814),A=d(846),e=d(5879);let F=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-main-action-service"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(r,n){1&r&&e._UZ(0,"router-outlet")},dependencies:[o.ez,A.lC]})}return i})();var Z=d(4414),T=d(8733),u=d(6223),m=d(3222),f=d(9862),S=d(553);let l=(()=>{class i{constructor(t){this.http=t,this.actionServicesUrl=`${S.N.url}action-services`,this.allActionServicesUrl=`${S.N.url}action-services/get/all`}getActionServicesList(t){let r=new f.LE;return t&&Object.keys(t).forEach(n=>{r=r.append(n,t[n])}),this.http.get(this.actionServicesUrl,{params:r})}getAllActionServiceList(){return this.http.get(`${this.allActionServicesUrl}`)}getActionServiceById(t){return this.http.get(`${this.actionServicesUrl}/show?action_service_id=${t}`)}deleteActionService(t){return this.http.delete(`${this.actionServicesUrl}/destroy?action_service_id=${t}`)}addActionService(t,r){let n=new f.LE;r&&Object.keys(r).forEach(p=>{n=n.append(p,r[p])});const v=new FormData;return Object.keys(t).forEach(p=>{const b=t[p];Array.isArray(b)?b.forEach((x,q)=>{x instanceof File&&v.append(`files[documents][${q}]`,x)}):v.append(p,b)}),this.http.post(this.actionServicesUrl,v,{params:n})}updateActionService(t,r,n){let v=new f.LE;n&&Object.keys(n).forEach(b=>{v=v.append(b,n[b])});const p=new FormData;return Object.keys(r).forEach(b=>{const x=r[b];Array.isArray(x)?x.forEach((q,Ze)=>{q instanceof File&&p.append(`files[documents][${Ze}]`,q)}):p.append(b,x)}),this.http.post(`${this.actionServicesUrl}/update?action_service_id=${t}`,p,{params:v})}static#e=this.\u0275fac=function(r){return new(r||i)(e.LFG(f.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _=d(5465),s=d(5123),g=d(4286);const a=["fileInput"];function h(i,c){1&i&&(e.TgZ(0,"h5"),e._uU(1,"\u0625\u0636\u0627\u0641\u0629 \u062e\u062f\u0645\u0629"),e.qZA())}function y(i,c){1&i&&(e.TgZ(0,"h5"),e._uU(1,"\u062a\u0639\u062f\u064a\u0644 \u062e\u062f\u0645\u0629"),e.qZA())}function I(i,c){1&i&&(e.TgZ(0,"div",36),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function J(i,c){if(1&i&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",null==t.actionServiceForm.controls.title.errors?null:t.actionServiceForm.controls.title.errors.serverError[0]," ")}}function N(i,c){if(1&i&&(e.TgZ(0,"div",36),e.YNc(1,I,2,0,"div",18),e.YNc(2,J,2,1,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.title.errors?null:t.actionServiceForm.controls.title.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.title.errors?null:t.actionServiceForm.controls.title.errors.serverError)}}function L(i,c){1&i&&(e.TgZ(0,"div",36),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function Q(i,c){if(1&i&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",null==t.actionServiceForm.controls.description.errors?null:t.actionServiceForm.controls.description.errors.serverError[0]," ")}}function O(i,c){if(1&i&&(e.TgZ(0,"div",36),e.YNc(1,L,2,0,"div",18),e.YNc(2,Q,2,1,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.description.errors?null:t.actionServiceForm.controls.description.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.description.errors?null:t.actionServiceForm.controls.description.errors.serverError)}}function Y(i,c){if(1&i&&(e.TgZ(0,"option",37),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.s9C("value",t.id),e.xp6(1),e.hij(" ",t.code," ")}}function M(i,c){1&i&&(e.TgZ(0,"div",36),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function k(i,c){if(1&i&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",null==t.actionServiceForm.controls.client_service_id.errors?null:t.actionServiceForm.controls.client_service_id.errors.serverError[0]," ")}}function D(i,c){if(1&i&&(e.TgZ(0,"div",36),e.YNc(1,M,2,0,"div",18),e.YNc(2,k,2,1,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.client_service_id.errors?null:t.actionServiceForm.controls.client_service_id.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.client_service_id.errors?null:t.actionServiceForm.controls.client_service_id.errors.serverError)}}function B(i,c){if(1&i&&(e.TgZ(0,"option",37),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.s9C("value",t.id),e.xp6(1),e.hij(" ",t.code," ")}}function $(i,c){1&i&&(e.TgZ(0,"div",36),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function j(i,c){if(1&i&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",null==t.actionServiceForm.controls.employee_id.errors?null:t.actionServiceForm.controls.employee_id.errors.serverError[0]," ")}}function z(i,c){if(1&i&&(e.TgZ(0,"div",36),e.YNc(1,$,2,0,"div",18),e.YNc(2,j,2,1,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.employee_id.errors?null:t.actionServiceForm.controls.employee_id.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.employee_id.errors?null:t.actionServiceForm.controls.employee_id.errors.serverError)}}function V(i,c){1&i&&(e.TgZ(0,"div",36),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function H(i,c){if(1&i&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",null==t.actionServiceForm.controls.date.errors?null:t.actionServiceForm.controls.date.errors.serverError[0]," ")}}function G(i,c){if(1&i&&(e.TgZ(0,"div",36),e.YNc(1,V,2,0,"div",18),e.YNc(2,H,2,1,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.date.errors?null:t.actionServiceForm.controls.date.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.actionServiceForm.controls.date.errors?null:t.actionServiceForm.controls.date.errors.serverError)}}function R(i,c){if(1&i&&(e.TgZ(0,"div",32),e._UZ(1,"input",39),e.TgZ(2,"a",40),e._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),e.qZA()()),2&i){const t=c.$implicit;e.xp6(1),e.Q6J("value",t.original),e.xp6(1),e.Q6J("href",t.original,e.LSH)}}function K(i,c){if(1&i&&(e.ynx(0),e.YNc(1,R,4,2,"div",38),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.conversionUrls)}}function W(i,c){if(1&i&&(e.ynx(0),e.TgZ(1,"div",41)(2,"button",42),e._UZ(3,"i",43),e._uU(4," \u0625\u0636\u0627\u0641\u0629 \u062e\u062f\u0645\u0629 "),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("disabled",!t.actionServiceForm.valid)}}function X(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",41)(1,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateActionService())}),e._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629 "),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.actionServiceForm.valid)}}const ee=function(i){return[i]};let E=(()=>{class i{constructor(t,r,n,v,p,b,x){this.activatedRoute=t,this.actionServicesServices=r,this.localize=n,this.clientServicesService=v,this.employeeService=p,this._MessagesService=b,this.router=x,this.isEditMode=!1,this.actionService_id="",this.clientServices=[],this.employees=[],this.conversionUrls=[],this.file=[],this.selectedFile=[],this.actionServiceForm=new u.cw({title:new u.NI("",u.kI.required),description:new u.NI("",u.kI.required),date:new u.NI("",u.kI.required),client_service_id:new u.NI("",u.kI.required),employee_id:new u.NI("",u.kI.required),files:new u.NI([])})}onFilesSelected(t){const r=Array.from(t.target.files),n=this.actionServiceForm.get("files")?.value||[];this.actionServiceForm.get("files")?.setValue([...n,...r])}discardFiles(){this.actionServiceForm.get("files")?.setValue([]),this.fileInput.nativeElement.value=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const r=t.get("id");r&&(console.log(r),this.isEditMode=!0,this.actionService_id=r,this.actionServicesServices.getActionServiceById(r).subscribe(n=>{n&&n.data&&this.setFormValues(n.data)}))}),this.getClientServicesList(),this.getEmployeesList()}getClientServicesList(){this.clientServicesService.getAllClientService().subscribe(t=>{this.clientServices=t.data})}getEmployeesList(){this.employeeService.GetAllEmployeesList().subscribe(t=>{this.employees=t.data})}setFormValues(t){if(console.log(t),this.actionServiceForm.controls.title.setValue(t.title),this.actionServiceForm.controls.description.setValue(t.description),this.actionServiceForm.controls.date.setValue(t.date),this.actionServiceForm.controls.client_service_id.setValue(t.client_service.id),t.conversion_urls)for(let r in t.conversion_urls)t.conversion_urls[r].forEach(n=>{this.conversionUrls.push(n)})}navigateToActionServicesList(){const t=this.localize.translateRoute("/dashboard/action-services");this.router.navigate([t])}onSubmit(){this.actionServiceForm.valid&&this.actionServicesServices.addActionService({title:this.actionServiceForm.controls.title.value||"",description:this.actionServiceForm.controls.description.value||"",date:this.actionServiceForm.controls.date.value||"",client_service_id:this.actionServiceForm.controls.client_service_id.value||"",employee_id:this.actionServiceForm.controls.employee_id.value||"",files:this.actionServiceForm.controls.files.value||""}).subscribe({next:r=>{this.navigateToActionServicesList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:r=>{console.log("Failed to add service:",r)}})}updateActionService(){this.actionServiceForm.valid&&this.actionServicesServices.updateActionService(this.actionService_id,{title:this.actionServiceForm.controls.title.value||"",description:this.actionServiceForm.controls.description.value||"",date:this.actionServiceForm.controls.date.value||"",client_service_id:this.actionServiceForm.controls.client_service_id.value||"",employee_id:this.actionServiceForm.controls.employee_id.value||"",files:this.actionServiceForm.controls.files.value||"",_method:"PATCH"}).subscribe({next:r=>{this.navigateToActionServicesList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u062a\u062d\u062f\u064a\u062b",3e3)},error:r=>{console.log("Failed to update service:",r)}})}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(A.gz),e.Y36(l),e.Y36(T.An),e.Y36(_.U),e.Y36(s.M),e.Y36(g.K),e.Y36(A.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-action-service"]],viewQuery:function(r,n){if(1&r&&e.Gf(a,5),2&r){let v;e.iGM(v=e.CRH())&&(n.fileInput=v.first)}},standalone:!0,features:[e.jDz],decls:61,vars:19,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","formControlName","title","name","title","id","title",1,"form-control","form-control-lg"],["class","ms-error",4,"ngIf"],["for","description",1,"form-label"],[3,"control"],["for","client_service_id",1,"form-label"],["formControlName","client_service_id","name","client_service_id","id","client_service_id",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],["for","employee_id",1,"form-label"],["formControlName","employee_id","name","employee_id","id","employee_id",1,"form-select","form-select-lg"],["for","date",1,"form-label"],["type","date","formControlName","date","name","date","id","date",1,"form-control","form-control-lg"],[1,"form-group","col-md-12","mb-3"],["for","files",1,"form-label"],["type","file","id","files","multiple","","accept","image/*",1,"form-control",3,"change"],["fileInput",""],[1,"mt-2"],["type","button",1,"btn","btn-danger",2,"background","red !important",3,"click"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"ms-error"],[3,"value"],["class","mt-2",4,"ngFor","ngForOf"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"form-group","col-12","my-3"],[1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(r,n){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"a",6),e.ALo(11,"localize"),e._uU(12,"\u0631\u062c\u0648\u0639 "),e._UZ(13,"i",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11),e.YNc(18,h,2,0,"h5",12),e.YNc(19,y,2,0,"h5",12),e.TgZ(20,"form",13),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(21,"div",14)(22,"div",15)(23,"label",16),e._uU(24,"\u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e._UZ(25,"input",17),e.YNc(26,N,3,2,"div",18),e.qZA(),e.TgZ(27,"div",15)(28,"label",19),e._uU(29,"\u0627\u0644\u0648\u0635\u0641"),e.qZA(),e._UZ(30,"app-text-editor",20),e.YNc(31,O,3,2,"div",18),e.qZA(),e.TgZ(32,"div",15)(33,"label",21),e._uU(34,"\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u064a\u0644"),e.qZA(),e.TgZ(35,"select",22),e.YNc(36,Y,2,2,"option",23),e.qZA(),e.YNc(37,D,3,2,"div",18),e.qZA(),e.TgZ(38,"div",15)(39,"label",24),e._uU(40,"\u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646"),e.qZA(),e.TgZ(41,"select",25),e.YNc(42,B,2,2,"option",23),e.qZA(),e.YNc(43,z,3,2,"div",18),e.qZA(),e.TgZ(44,"div",15)(45,"label",26),e._uU(46,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),e.qZA(),e._UZ(47,"input",27),e.YNc(48,G,3,2,"div",18),e.qZA(),e.TgZ(49,"div",28)(50,"label",29),e._uU(51,"\u0627\u0644\u0635\u0648\u0631"),e.qZA(),e.YNc(52,K,2,1,"ng-container",12),e.TgZ(53,"input",30,31),e.NdJ("change",function(p){return n.onFilesSelected(p)}),e.qZA(),e.TgZ(55,"div",32)(56,"button",33),e.NdJ("click",function(){return n.discardFiles()}),e._uU(57," \u062a\u062c\u0627\u0647\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0635\u0648\u0631 "),e.qZA()()(),e.YNc(58,W,5,1,"ng-container",34),e.YNc(59,X,3,1,"ng-template",null,35,e.W1O),e.qZA()()()()()()()),2&r){const v=e.MAs(60);e.xp6(10),e.Q6J("routerLink",e.VKq(17,ee,e.lcZ(11,15,"/dashboard/action-services"))),e.xp6(8),e.Q6J("ngIf",!n.isEditMode),e.xp6(1),e.Q6J("ngIf",n.isEditMode),e.xp6(1),e.Q6J("formGroup",n.actionServiceForm),e.xp6(6),e.Q6J("ngIf",n.actionServiceForm.controls.title.invalid&&(n.actionServiceForm.controls.title.dirty||n.actionServiceForm.controls.title.touched)),e.xp6(4),e.Q6J("control",n.actionServiceForm.controls.description),e.xp6(1),e.Q6J("ngIf",n.actionServiceForm.controls.description.invalid&&(n.actionServiceForm.controls.description.dirty||n.actionServiceForm.controls.description.touched)),e.xp6(5),e.Q6J("ngForOf",n.clientServices),e.xp6(1),e.Q6J("ngIf",n.actionServiceForm.controls.client_service_id.invalid&&(n.actionServiceForm.controls.client_service_id.dirty||n.actionServiceForm.controls.client_service_id.touched)),e.xp6(5),e.Q6J("ngForOf",n.employees),e.xp6(1),e.Q6J("ngIf",n.actionServiceForm.controls.employee_id.invalid&&(n.actionServiceForm.controls.employee_id.dirty||n.actionServiceForm.controls.employee_id.touched)),e.xp6(5),e.Q6J("ngIf",n.actionServiceForm.controls.date.invalid&&(n.actionServiceForm.controls.date.dirty||n.actionServiceForm.controls.date.touched)),e.xp6(4),e.Q6J("ngIf",n.isEditMode&&n.conversionUrls.length>0),e.xp6(6),e.Q6J("ngIf",!n.isEditMode)("ngIfElse",v)}},dependencies:[o.ez,o.sg,o.O5,u.u5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,Z.L,T.fQ,T.lO,u.UX,u.sg,u.u,A.Bz,A.rH,m.d],styles:[".ms-error[_ngcontent-%COMP%]{color:red;margin-top:5px}"]})}return i})();var te=d(1818),ie=d(8034),w=d(7620),oe=d(7700);const P=function(i,c){return[i,c]};function ne(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e._UZ(7,"td",24),e.ALo(8,"safeHtml"),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",25)(12,"a",26),e.ALo(13,"localize"),e._UZ(14,"i",27),e._uU(15," \u0639\u0631\u0636"),e.qZA(),e.TgZ(16,"a",28),e.ALo(17,"localize"),e._UZ(18,"i",29),e._uU(19," \u062a\u0639\u062f\u064a\u0644"),e.qZA(),e.TgZ(20,"button",30),e.NdJ("click",function(){const v=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.deleteActionService(v.id,v.title))}),e._UZ(21,"i",31),e._uU(22," \u062d\u0630\u0641 "),e.qZA()()()}if(2&i){const t=c.$implicit,r=c.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Oqu(t.client_service.code),e.xp6(2),e.Oqu(t.title),e.xp6(1),e.Q6J("innerHTML",e.lcZ(8,7,t.description),e.oJD),e.xp6(3),e.Oqu(t.date),e.xp6(2),e.Q6J("routerLink",e.WLB(13,P,e.lcZ(13,9,"/dashboard/action-services/view-action-service"),t.id)),e.xp6(4),e.Q6J("routerLink",e.WLB(16,P,e.lcZ(17,11,"/dashboard/action-services/add-action-service"),t.id))}}function re(i,c){1&i&&(e.TgZ(0,"tr")(1,"td",32),e._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),e.qZA()())}const ue=["ClientService_id"];function ae(i,c){1&i&&(e.TgZ(0,"label",40),e._uU(1,"\u0627\u0644\u0635\u0648\u0631"),e.qZA())}function le(i,c){if(1&i&&(e.TgZ(0,"div",42),e._UZ(1,"input",43),e.TgZ(2,"a",44),e._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),e.qZA()()),2&i){const t=c.$implicit;e.xp6(1),e.Q6J("value",t.original),e.xp6(1),e.Q6J("href",t.original,e.LSH)}}function se(i,c){if(1&i&&(e.ynx(0),e.YNc(1,le,4,2,"div",41),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.conversionUrls)}}function de(i,c){if(1&i&&(e.TgZ(0,"div",27)(1,"div",28)(2,"label",29),e._uU(3,"\u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e._UZ(4,"input",30),e.qZA(),e.TgZ(5,"div",28)(6,"label",31),e._uU(7,"\u0627\u0644\u0648\u0635\u0641"),e.qZA(),e._UZ(8,"div",32),e.ALo(9,"safeHtml"),e.qZA(),e.TgZ(10,"div",28)(11,"label",33),e._uU(12,"\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u064a\u0644"),e.qZA(),e._UZ(13,"input",34),e.qZA(),e.TgZ(14,"div",28)(15,"label",35),e._uU(16,"\u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646"),e.qZA(),e._UZ(17,"input",36),e.qZA(),e.TgZ(18,"div",28)(19,"label",37),e._uU(20,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),e.qZA(),e._UZ(21,"input",38),e.qZA(),e.YNc(22,ae,2,0,"label",39),e.YNc(23,se,2,1,"ng-container",23),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.s9C("value",t.actionService.title),e.xp6(4),e.Q6J("innerHTML",e.lcZ(9,7,t.actionService.description),e.oJD),e.xp6(5),e.s9C("value",t.actionService.client_service.code),e.xp6(4),e.s9C("value",t.actionService.lawyer.user.name),e.xp6(4),e.s9C("value",t.actionService.date),e.xp6(1),e.Q6J("ngIf",t.conversionUrls.length>0),e.xp6(1),e.Q6J("ngIf",t.conversionUrls.length>0)}}function ve(i,c){1&i&&(e.TgZ(0,"h4",45),e._uU(1,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),e.qZA())}function pe(i,c){if(1&i&&e._UZ(0,"img",47),2&i){const t=e.oxw(2);e.Q6J("src",t.clientService.conversion_urls.custom_value_for_news[0].conversions["thumb-100"],e.LSH)}}function me(i,c){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e._UZ(5,"td",32),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e.YNc(11,pe,1,1,"img",46),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.clientService.code),e.xp6(2),e.Oqu(t.clientService.status),e.xp6(1),e.Q6J("innerHTML",t.clientService.description,e.oJD),e.xp6(2),e.Oqu(t.clientService.date),e.xp6(2),e.Oqu(null==t.clientService||null==t.clientService.employee?null:t.clientService.employee.name),e.xp6(2),e.Q6J("ngIf",null==t.clientService.conversion_urls||null==t.clientService.conversion_urls.custom_value_for_news?null:t.clientService.conversion_urls.custom_value_for_news.length)}}const _e=function(i,c){return[i,c]};function ge(i,c){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"a",6),e.ALo(3,"localize"),e.TgZ(4,"span"),e._uU(5),e.qZA()()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA()()),2&i){const t=c.$implicit;e.xp6(2),e.Q6J("routerLink",e.WLB(7,_e,e.lcZ(3,5,"/dashboard/employees/view-employee"),t.id)),e.xp6(3),e.Oqu(t.code),e.xp6(2),e.Oqu(t.status),e.xp6(2),e.Oqu(t.job_title),e.xp6(2),e.Oqu(t.address)}}function fe(i,c){if(1&i&&(e.TgZ(0,"div")(1,"div",28)(2,"label",48),e._uU(3,"\u0627\u0644\u0627\u0633\u0645"),e.qZA(),e._UZ(4,"input",49),e.qZA(),e.TgZ(5,"div",28)(6,"label",50),e._uU(7,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),e.qZA(),e._UZ(8,"input",51),e.qZA(),e.TgZ(9,"div",28)(10,"label",52),e._uU(11,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),e.qZA(),e._UZ(12,"input",53),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("value",t.createdByUser.name),e.xp6(4),e.Q6J("value",t.createdByUser.email),e.xp6(4),e.Q6J("value",t.createdByUser.phone)}}const Ae=function(i){return[i]},he=[{path:"",component:F,children:[{path:"",component:(()=>{class i{constructor(t,r){this.actionServiceServices=t,this.dialog=r,this.actionServices=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getActionServicesList()}onPageChange(t){this.getActionServicesList(t)}getActionServicesList(t=1){this.loading=!0,this.actionServiceServices.getActionServicesList({page:t}).subscribe({next:r=>{this.actionServices=r.data,console.log(r.data),this.currentPage=r.pagination.current_page,this.totalPages=r.pagination.last_page,this.loading=!1},error:r=>{this.loading=!1,console.error("There was an error!",r)}})}deleteActionService(t,r){this.dialog.open(ie.$,{width:"500px",data:{title:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 ${r}\u061f`}}).afterClosed().subscribe(v=>{v&&this.actionServiceServices.deleteActionService(t).subscribe({next:p=>{this.getActionServicesList()},error:p=>{console.log("there was an error deleting Service:",p)}})})}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(l),e.Y36(oe.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-action-services-list"]],standalone:!0,features:[e.jDz],decls:48,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-12"],[1,"row","list-row"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[3,"currentPage","totalPages","pageChange"],[3,"innerHTML"],[1,"action","text-center"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","4",1,"text-center"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA()(),e.TgZ(9,"div",5)(10,"div",4)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),e.ALo(16,"localize"),e._UZ(17,"i",11),e._uU(18," \u0625\u0636\u0627\u0641\u0629 \u062e\u062f\u0645\u0629 \u062c\u062f\u064a\u062f "),e.qZA()(),e.TgZ(19,"div",12),e._UZ(20,"input",13),e.qZA(),e.TgZ(21,"div",14)(22,"button",15),e._UZ(23,"i",16),e._uU(24," \u062a\u0635\u0646\u064a\u0641 "),e.qZA()()()(),e.TgZ(25,"div",17)(26,"div",18)(27,"table",19)(28,"thead")(29,"tr")(30,"th"),e._uU(31,"\u062a\u0631\u0642\u064a\u0645"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"\u0643\u0648\u062f \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u064a\u0644"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"\u0627\u0633\u0645 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"\u0627\u0644\u0648\u0635\u0641"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),e.qZA(),e._UZ(40,"th"),e.qZA()(),e.TgZ(41,"tbody"),e.YNc(42,ne,23,19,"tr",20),e.YNc(43,re,3,0,"tr",21),e.qZA()()()(),e.TgZ(44,"div",7)(45,"div",22)(46,"div",4)(47,"pagination",23),e.NdJ("pageChange",function(p){return n.onPageChange(p)}),e.qZA()()()()()()()()),2&r&&(e.xp6(15),e.Q6J("routerLink",e.lcZ(16,5,"/dashboard/action-services/add-action-service")),e.xp6(27),e.Q6J("ngForOf",n.actionServices),e.xp6(1),e.Q6J("ngIf",0===n.actionServices.length&&!n.loading),e.xp6(4),e.Q6J("currentPage",n.currentPage)("totalPages",n.totalPages))},dependencies:[o.ez,o.sg,o.O5,te.Q,T.fQ,T.lO,A.Bz,A.rH,Z.L,u.u5,w.z]})}return i})(),data:{breadcrumbs:[{label:"\u0627\u0644\u062e\u062f\u0645\u0627\u062a",url:"/dashboard/action-services"}]}},{path:":slug",component:E,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u062e\u062f\u0645\u0629",url:"/dashboard/action-services/add-action-service"}]}},{path:"add-action-service/:id",component:E,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629",url:"/dashboard/action-services/add-action-service"}]}},{path:"view-action-service/:id",component:(()=>{class i{constructor(t,r,n){this.activatedRoute=t,this.actionServices=r,this.clientServicesService=n,this.conversionUrls=[],this.clientServices=[],this.employees=[],this.actionService=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const r=t.get("id");r&&this.actionServices.getActionServiceById(r).subscribe({next:n=>{if(this.actionService=n.data,this.clientService=n.data.client_service,this.createdByUser=n.data.created_by_user,this.employees.push(n.data.lawyer),this.actionService.conversion_urls)for(let v in this.actionService.conversion_urls)this.actionService.conversion_urls[v].forEach(p=>{this.conversionUrls.push(p)})},error:n=>{console.error("Error fetching Service:",n)}})}),this.getClientServicesList()}getClientServicesList(){this.clientServicesService.getAllClientService().subscribe(t=>{this.clientServices=t.data})}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(A.gz),e.Y36(l),e.Y36(_.U))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-view-action-service"]],viewQuery:function(r,n){if(1&r&&e.Gf(ue,5),2&r){let v;e.iGM(v=e.CRH())&&(n.ClientService_id=v.first)}},standalone:!0,features:[e.jDz],decls:69,vars:10,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card"],[1,"card-body"],["id","nav-tab","role","tablist",1,"nav","nav-tabs"],["id","nav-action-service-tab","data-bs-toggle","tab","data-bs-target","#nav-action-service","type","button","role","tab","aria-controls","nav-action-service","aria-selected","true",1,"nav-link","active"],["id","nav-client-services-tab","data-bs-toggle","tab","data-bs-target","#nav-client-services","type","button","role","tab","aria-controls","nav-client-services","aria-selected","true",1,"nav-link"],["id","nav-employees-tab","data-bs-toggle","tab","data-bs-target","#nav-employees","type","button","role","tab","aria-controls","nav-employees","aria-selected","false",1,"nav-link"],["id","nav-created-by-user-tab","data-bs-toggle","tab","data-bs-target","#nav-created-by-user","type","button","role","tab","aria-controls","nav-created-by-user","aria-selected","false",1,"nav-link"],["id","nav-tabContent",1,"tab-content"],["id","nav-action-service","role","tabpanel","aria-labelledby","nav-action-service-tab","tabindex","0",1,"tab-pane","fade","show","active"],["class","row",4,"ngIf"],["class","text-center",4,"ngIf"],["id","nav-client-services","role","tabpanel","aria-labelledby","nav-client-services-tab","tabindex","0",1,"tab-pane","fade","pt-3"],[1,"table"],[4,"ngIf"],["id","nav-employees","role","tabpanel","aria-labelledby","nav-employees-tab","tabindex","0",1,"tab-pane","fade","pt-3"],[4,"ngFor","ngForOf"],["id","nav-created-by-user","role","tabpanel","aria-labelledby","nav-created-by-user-tab","tabindex","0",1,"tab-pane","fade","pt-3"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","disabled","","formControlName","title","name","title","id","title",1,"form-control","form-control-lg",3,"value"],["for","description",1,"form-label"],[3,"innerHTML"],["for","client_service_id",1,"form-label"],["disabled","","formControlName","client_service_id","name","client_service_id","id","client_service_id",1,"form-control","form-control-lg",3,"value"],["for","employee_id",1,"form-label"],["disabled","","name","employee_id","id","employee_id",1,"form-control","form-control-lg",3,"value"],["for","date",1,"form-label"],["disabled","","type","date","formControlName","date","name","date","id","date",1,"form-control","form-control-lg",3,"value"],["for","files","class","form-label",4,"ngIf"],["for","files",1,"form-label"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"text-center"],["alt","Service Image","class","img-thumbnail",3,"src",4,"ngIf"],["alt","Service Image",1,"img-thumbnail",3,"src"],["for","createdByUserName",1,"form-label"],["type","text","id","createdByUserName","readonly","",1,"form-control","form-control-lg",3,"value"],["for","createdByUserEmail",1,"form-label"],["type","email","id","createdByUserEmail","readonly","",1,"form-control","form-control-lg",3,"value"],["for","createdByUserPhone",1,"form-label"],["type","text","id","createdByUserPhone","readonly","",1,"form-control","form-control-lg",3,"value"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0627 \u062a\u0645 \u0639\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0645\u0627 \u062a\u0645 \u0639\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"a",6),e.ALo(11,"localize"),e._uU(12,"\u0631\u062c\u0648\u0639 "),e._UZ(13,"i",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"button",13),e._uU(20," \u0645\u0627 \u062a\u0645 \u0639\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0627\u062a "),e.qZA(),e.TgZ(21,"button",14),e._uU(22," \u0628\u064a\u0627\u0646\u0627\u062a \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u064a\u0644 "),e.qZA(),e.TgZ(23,"button",15),e._uU(24," \u0627\u0644\u0645\u062d\u0627\u0645\u064a "),e.qZA(),e.TgZ(25,"button",16),e._uU(26," \u0623\u0646\u0634\u0626 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "),e.qZA()(),e.TgZ(27,"div",17)(28,"div",18),e.YNc(29,de,24,9,"div",19),e.YNc(30,ve,2,0,"h4",20),e.qZA(),e.TgZ(31,"div",21)(32,"table",22)(33,"thead")(34,"tr")(35,"th"),e._uU(36,"\u0627\u0644\u0643\u0648\u062f"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"\u0627\u0644\u062d\u0627\u0644\u0629"),e.qZA(),e.TgZ(39,"th"),e._uU(40,"\u0627\u0644\u0648\u0635\u0641"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"\u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0633\u0624\u0648\u0644"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"\u0635\u0648\u0631 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA()()(),e.TgZ(47,"tbody"),e.YNc(48,me,12,6,"tr",23),e.qZA()()(),e.TgZ(49,"div",24)(50,"h5"),e._uU(51,"\u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646"),e.qZA(),e.TgZ(52,"table",22)(53,"thead")(54,"tr")(55,"th"),e._uU(56,"\u0627\u0644\u0643\u0648\u062f"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"\u0627\u0644\u062d\u0627\u0644\u0629"),e.qZA(),e.TgZ(59,"th"),e._uU(60,"\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a"),e.qZA(),e.TgZ(61,"th"),e._uU(62,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),e.qZA()()(),e.TgZ(63,"tbody"),e.YNc(64,ge,12,10,"tr",25),e.qZA()()(),e.TgZ(65,"div",26)(66,"h5"),e._uU(67,"\u0623\u0646\u0634\u0626 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),e.qZA(),e.YNc(68,fe,13,3,"div",23),e.qZA()()()()()()()),2&r&&(e.xp6(10),e.Q6J("routerLink",e.VKq(8,Ae,e.lcZ(11,6,"/dashboard/action-services"))),e.xp6(19),e.Q6J("ngIf",n.actionService),e.xp6(1),e.Q6J("ngIf",!n.actionService),e.xp6(18),e.Q6J("ngIf",n.clientService),e.xp6(16),e.Q6J("ngForOf",n.employees),e.xp6(4),e.Q6J("ngIf",n.createdByUser))},dependencies:[o.ez,o.sg,o.O5,Z.L,A.Bz,A.rH,T.fQ,T.lO,w.z]})}return i})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u062f\u0645\u0629",url:"/dashboard/action-services/view-action-service"}]}}]}]},5123:(C,U,d)=>{d.d(U,{M:()=>F});var o=d(9862),A=d(553),e=d(5879);let F=(()=>{class Z{constructor(u){this.http=u,this.employeesUrl=`${A.N.url}employee`}GetEmployeesList(u){let m=new o.LE;return u&&Object.keys(u).forEach(f=>{m=m.append(f,u[f])}),this.http.get(this.employeesUrl,{params:m})}GetAllEmployeesList(){return this.http.get(`${this.employeesUrl}/get/all`)}GetEmployeeById(u){return this.http.get(`${this.employeesUrl}/${u}`)}DeleteEmployee(u){return this.http.delete(`${this.employeesUrl}/${u}`)}AddEmployee(u,m){let f=new o.LE;m&&Object.keys(m).forEach(l=>{f=f.append(l,m[l])});const S=new FormData;return Object.keys(u).forEach(l=>{const _=u[l];null!=_&&(Array.isArray(_)?_.forEach((s,g)=>{s instanceof File&&S.append(`files[avatar][${g}]`,s)}):S.append(l,_))}),this.http.post(this.employeesUrl,S,{params:f})}UpdateEmployee(u,m,f){const S=`${this.employeesUrl}/${u}`;let l=new o.LE;f&&Object.keys(f).forEach(s=>{l=l.append(s,f[s])});const _=new FormData;return Object.keys(m).forEach(s=>{const g=m[s];Array.isArray(g)?g.forEach((a,h)=>{a instanceof File&&_.append(`files[avatar][${h}]`,a)}):_.append(s,g)}),this.http.post(S,_,{params:l})}static#e=this.\u0275fac=function(m){return new(m||Z)(e.LFG(o.eN))};static#t=this.\u0275prov=e.Yz7({token:Z,factory:Z.\u0275fac,providedIn:"root"})}return Z})()},1818:(C,U,d)=>{d.d(U,{Q:()=>S});var o=d(5879),A=d(6223),e=d(6814);function F(l,_){if(1&l){const s=o.EpF();o.TgZ(0,"li",2)(1,"a",8),o.NdJ("click",function(){o.CHM(s);const a=o.oxw();return o.KtG(a.navigateTo(1))}),o._uU(2,"1"),o.qZA()()}}function Z(l,_){1&l&&(o.TgZ(0,"li",2)(1,"a",9),o._uU(2,"..."),o.qZA()())}function T(l,_){if(1&l){const s=o.EpF();o.TgZ(0,"li",2)(1,"a",8),o.NdJ("click",function(){const h=o.CHM(s).$implicit,y=o.oxw();return o.KtG(y.navigateTo(h))}),o._uU(2),o.qZA()()}if(2&l){const s=_.$implicit,g=o.oxw();o.ekj("active",g.currentPage===s),o.xp6(2),o.Oqu(s)}}function u(l,_){1&l&&(o.TgZ(0,"li",2)(1,"a",9),o._uU(2,"..."),o.qZA()())}function m(l,_){if(1&l){const s=o.EpF();o.TgZ(0,"li",2)(1,"a",8),o.NdJ("click",function(){o.CHM(s);const a=o.oxw();return o.KtG(a.navigateTo(a.totalPages))}),o._uU(2),o.qZA()()}if(2&l){const s=o.oxw();o.xp6(2),o.Oqu(s.totalPages)}}const f={provide:A.JU,useExisting:(0,o.Gpc)(()=>S),multi:!0};let S=(()=>{class l{constructor(){this.pageChange=new o.vpe}navigateTo(s){this.pageChange.emit(s),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const s=[];if(this.totalPages<=5)for(let a=1;a<=this.totalPages;a++)s.push(a);else{let a,h;this.currentPage<=Math.floor(2.5)?(a=1,h=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(a=this.totalPages-5+1,h=this.totalPages):(a=this.currentPage-Math.floor(2.5),h=this.currentPage+Math.floor(2.5));for(let y=a;y<=h;y++)s.push(y)}return s}static#e=this.\u0275fac=function(g){return new(g||l)};static#t=this.\u0275cmp=o.Xpm({type:l,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[o._Bn([f]),o.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(g,a){1&g&&(o.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),o.NdJ("click",function(){return a.navigateTo(a.currentPage-1)}),o.TgZ(4,"span",4),o._uU(5,"\xab"),o.qZA()()(),o.YNc(6,F,3,0,"li",5),o.YNc(7,Z,3,0,"li",5),o.YNc(8,T,3,3,"li",6),o.YNc(9,u,3,0,"li",5),o.YNc(10,m,3,1,"li",5),o.TgZ(11,"li",2)(12,"a",7),o.NdJ("click",function(){return a.navigateTo(a.currentPage+1)}),o.TgZ(13,"span",4),o._uU(14,"\xbb"),o.qZA()()()()()),2&g&&(o.xp6(2),o.ekj("disabled",1===a.currentPage),o.xp6(4),o.Q6J("ngIf",a.currentPage>3),o.xp6(1),o.Q6J("ngIf",a.currentPage>4),o.xp6(1),o.Q6J("ngForOf",a.calculatePages()),o.xp6(1),o.Q6J("ngIf",a.currentPage<a.totalPages-3),o.xp6(1),o.Q6J("ngIf",a.currentPage<a.totalPages-2),o.xp6(1),o.ekj("disabled",a.currentPage===a.totalPages))},dependencies:[e.ez,e.sg,e.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return l})()}}]);