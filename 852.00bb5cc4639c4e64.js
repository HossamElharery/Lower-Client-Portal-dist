"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[852],{1852:(y,P,d)=>{d.r(P),d.d(P,{default:()=>J});var e=d(6814),g=d(846),t=d(5879);let p=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-main-department"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,c){1&o&&t._UZ(0,"router-outlet")},dependencies:[e.ez,g.lC]})}return r})();var a=d(4414),C=d(8733),l=d(6223),f=d(9453);const h=["fileInput"];function b(r,A){if(1&r&&(t.TgZ(0,"div",26),t._UZ(1,"input",31),t.TgZ(2,"a",32),t._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),t.qZA()()),2&r){const n=A.$implicit;t.xp6(1),t.Q6J("value",n.original),t.xp6(1),t.Q6J("href",n.original,t.LSH)}}function i(r,A){if(1&r&&(t.ynx(0),t.YNc(1,b,4,2,"div",30),t.BQk()),2&r){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.conversionUrls)}}function _(r,A){if(1&r&&(t.ynx(0),t.TgZ(1,"div",18)(2,"button",33),t._UZ(3,"i",34),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u062c\u062f\u064a\u062f "),t.qZA(),t.TgZ(5,"a",35),t.ALo(6,"localize"),t._uU(7,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()(),t.BQk()),2&r){const n=t.oxw();t.xp6(2),t.Q6J("disabled",!n.departmentForm.valid),t.xp6(3),t.Q6J("routerLink",t.lcZ(6,2,"/dashboard/departments"))}}function s(r,A){if(1&r){const n=t.EpF();t.TgZ(0,"div",18)(1,"button",36),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.updateDepartment())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645 "),t.qZA(),t.TgZ(3,"a",35),t.ALo(4,"localize"),t._uU(5,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("disabled",!n.departmentForm.valid),t.xp6(2),t.Q6J("routerLink",t.lcZ(4,2,"/dashboard/departments"))}}let m=(()=>{class r{constructor(n,o,c,v){this.activatedRoute=n,this.desService=o,this.localize=c,this.router=v,this.isEditMode=!1,this.departmentId="",this.conversionUrls=[],this.departmentForm=new l.cw({name:new l.NI("",l.kI.required),description:new l.NI("",l.kI.required),files:new l.NI([])}),this.loading=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(n=>{const o=n.get("id");o&&(this.isEditMode=!0,this.departmentId=o,this.getDepartment(o))})}getDepartment(n){this.loading=!0,this.desService.GetDepartmentById(n).subscribe({next:o=>{this.departmentDetails=o.data,this.setFormVluesEditMode(this.departmentDetails),console.log(this.departmentDetails),this.loading=!1},error:o=>{this.loading=!1,console.error("There was an error!",o)}})}setFormVluesEditMode(n){if(this.departmentForm.patchValue({name:n.name,description:n.description}),n.conversion_urls)for(let o in n.conversion_urls)n.conversion_urls[o].forEach(c=>{this.conversionUrls.push(c)})}onFilesSelected(n){const o=Array.from(n.target.files),c=this.departmentForm.get("files")?.value||[];this.departmentForm.get("files")?.setValue([...c,...o])}discardFiles(){this.departmentForm.get("files")?.setValue([]),this.fileInput.nativeElement.value=""}navigateToDepartmentsList(){const n=this.localize.translateRoute("/dashboard/departments");this.router.navigate([n])}updateDepartment(){this.departmentForm.valid&&(this.loading=!0,this.desService.UpdateDepartment({department_id:this.departmentDetails.id,name:this.departmentForm.controls.name.value,description:this.departmentForm.controls.description.value,files:this.departmentForm.controls.files.value,_method:"PATCH"}).subscribe({next:o=>{console.log(o),this.loading=!1,this.navigateToDepartmentsList()},error:o=>{this.loading=!1,console.error("There was an error!",o)}}))}onSubmit(){this.departmentForm.valid&&(this.loading=!0,this.desService.AddDepartment({name:this.departmentForm.controls.name.value,description:this.departmentForm.controls.description.value,files:this.departmentForm.controls.files.value}).subscribe({next:o=>{this.loading=!1,this.navigateToDepartmentsList()},error:o=>{this.loading=!1,console.error("There was an error!",o)}}))}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g.gz),t.Y36(f._),t.Y36(C.An),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-add-department"]],viewQuery:function(o,c){if(1&o&&t.Gf(h,5),2&o){let v;t.iGM(v=t.CRH())&&(c.fileInput=v.first)}},standalone:!0,features:[t.jDz],decls:41,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","name","name",1,"form-control","form-control-lg"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],["type","text","formControlName","description","name","description",1,"form-control","form-control-lg"],[1,"form-group","col-md-12","mb-3"],["for","files",1,"form-label"],[4,"ngIf"],["type","file","id","files","multiple","","accept","image/*",1,"form-control",3,"change"],["fileInput",""],[1,"mt-2"],["type","button",1,"btn","btn-danger",2,"background","red !important",3,"click"],[4,"ngIf","ngIfElse"],["editButton",""],["class","mt-2",4,"ngFor","ngForOf"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"btn","mb-sm-0","mb-2",3,"routerLink"],["type","button",1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled","click"]],template:function(o,c){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"form",13),t.NdJ("ngSubmit",function(){return c.onSubmit()}),t.TgZ(20,"div",14)(21,"div",15)(22,"label",16),t._uU(23,"\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645"),t.qZA(),t._UZ(24,"input",17),t.qZA(),t.TgZ(25,"div",18)(26,"label",19),t._uU(27,"\u0648\u0635\u0641 \u0627\u0644\u0642\u0633\u0645"),t.qZA(),t._UZ(28,"input",20),t.qZA(),t.TgZ(29,"div",21)(30,"label",22),t._uU(31,"\u0627\u0644\u0635\u0648\u0631"),t.qZA(),t.YNc(32,i,2,1,"ng-container",23),t.TgZ(33,"input",24,25),t.NdJ("change",function(x){return c.onFilesSelected(x)}),t.qZA(),t.TgZ(35,"div",26)(36,"button",27),t.NdJ("click",function(){return c.discardFiles()}),t._uU(37," \u062a\u062c\u0627\u0647\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0635\u0648\u0631 "),t.qZA()()(),t.YNc(38,_,8,4,"ng-container",28),t.YNc(39,s,6,4,"ng-template",null,29,t.W1O),t.qZA()()()()()()()()),2&o){const v=t.MAs(40);t.xp6(10),t.Q6J("routerLink",t.lcZ(11,5,"/dashboard/departments")),t.xp6(9),t.Q6J("formGroup",c.departmentForm),t.xp6(13),t.Q6J("ngIf",c.isEditMode&&c.conversionUrls.length>0),t.xp6(6),t.Q6J("ngIf",!c.isEditMode)("ngIfElse",v)}},dependencies:[e.ez,e.sg,e.O5,a.L,g.Bz,g.rH,C.fQ,C.lO,l.u5,l._Y,l.Fj,l.JJ,l.JL,l.UX,l.sg,l.u]})}return r})();var u=d(1818),Z=d(8034),T=d(5123),U=d(7700);const D=function(r,A){return[r,A]};function O(r,A){if(1&r){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",26)(8,"a",27),t.ALo(9,"localize"),t._UZ(10,"i",28),t._uU(11," \u0639\u0631\u0636"),t.qZA(),t.TgZ(12,"a",29),t.ALo(13,"localize"),t._UZ(14,"i",30),t._uU(15," \u062a\u0639\u062f\u064a\u0644 "),t.qZA(),t.TgZ(16,"button",31),t.NdJ("click",function(){const v=t.CHM(n).$implicit,x=t.oxw();return t.KtG(x.deleteDepartment(v.id,v.name))}),t._UZ(17,"i",32),t._uU(18," \u062d\u0630\u0641 "),t.qZA()()()}if(2&r){const n=A.$implicit,o=A.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Q6J("routerLink",t.WLB(9,D,t.lcZ(9,5,"/dashboard/departments/view-department"),n.id)),t.xp6(4),t.Q6J("routerLink",t.WLB(12,D,t.lcZ(13,7,"/dashboard/departments/add-department"),n.id))}}function M(r,A){1&r&&(t.TgZ(0,"tr")(1,"td",33),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}function F(r,A){1&r&&(t.TgZ(0,"label",22),t._uU(1,"\u0627\u0644\u0635\u0648\u0631"),t.qZA())}function L(r,A){if(1&r&&(t.TgZ(0,"div",24),t._UZ(1,"input",25),t.TgZ(2,"a",26),t._uU(3,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641"),t.qZA()()),2&r){const n=A.$implicit;t.xp6(1),t.Q6J("value",n.original),t.xp6(1),t.Q6J("href",n.original,t.LSH)}}function I(r,A){if(1&r&&(t.ynx(0),t.YNc(1,L,4,2,"div",23),t.BQk()),2&r){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.conversionUrls)}}function w(r,A){if(1&r&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"label",15),t._uU(4,"\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645"),t.qZA(),t._UZ(5,"input",16),t.qZA(),t.TgZ(6,"div",17)(7,"label",18),t._uU(8,"\u0648\u0635\u0641 \u0627\u0644\u0642\u0633\u0645"),t.qZA(),t._UZ(9,"input",19),t.qZA(),t.TgZ(10,"div",17),t.YNc(11,F,2,0,"label",20),t.YNc(12,I,2,1,"ng-container",21),t.qZA()()()),2&r){const n=t.oxw();t.xp6(5),t.s9C("value",n.department.name),t.xp6(4),t.s9C("value",n.department.description),t.xp6(2),t.Q6J("ngIf",n.conversionUrls.length>0),t.xp6(1),t.Q6J("ngIf",n.conversionUrls.length>0)}}function k(r,A){1&r&&(t.TgZ(0,"div",12)(1,"h4",27),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const J=[{path:"",component:p,children:[{path:"",component:(()=>{class r{constructor(n,o,c){this.desService=n,this.employeeService=o,this.dialog=c,this.departments=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getAllDepartments()}getAllDepartments(n=1){this.loading=!0,this.desService.getDepartmentsList({page:n}).subscribe({next:o=>{this.departments=o.data,console.log(o.pagination.current_page),this.currentPage=o.pagination.current_page,this.totalPages=o.pagination.last_page,this.loading=!1},error:o=>{this.loading=!1,console.error("There was an error!",o)}})}deleteDepartment(n,o){this.dialog.open(Z.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${o} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(v=>{v&&this.desService.DeleteDepartment(n).subscribe({next:x=>{this.getAllDepartments()},error:x=>{console.error("There was an error deleting the admin!",x)}})})}onPageChange(n){this.getAllDepartments(n)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(f._),t.Y36(T.M),t.Y36(U.uw))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-departments-list"]],standalone:!0,features:[t.jDz],decls:49,vars:10,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-8"],[1,"col-sm-4","addDep","text-sm-end"],[1,"btn","px-4",3,"routerLink"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[3,"currentPage","totalPages","pageChange"],[1,"action"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","7",1,"text-center"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0623\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062c\u062f\u064a\u062f"),t.qZA()()(),t.TgZ(13,"div",7)(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"a",13),t.ALo(20,"localize"),t._UZ(21,"i",14),t._uU(22," \u0623\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062c\u062f\u064a\u062f "),t.qZA()(),t.TgZ(23,"div",15),t._UZ(24,"input",16),t.qZA(),t.TgZ(25,"div",17)(26,"button",18),t._UZ(27,"i",19),t._uU(28," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(29,"div",10)(30,"div",20)(31,"table",21)(32,"thead")(33,"tr")(34,"th"),t._uU(35,"\u062a\u0631\u0642\u064a\u0645"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"\u0627\u0644\u0642\u0633\u0645"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"\u0627\u0644\u0648\u0635\u0641"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"\u0627\u062c\u0631\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(42,"tbody"),t.YNc(43,O,19,15,"tr",22),t.YNc(44,M,3,0,"tr",23),t.qZA()()()(),t.TgZ(45,"div",10)(46,"div",24)(47,"div",8)(48,"pagination",25),t.NdJ("pageChange",function(x){return c.onPageChange(x)}),t.qZA()()()()()()()()),2&o&&(t.xp6(10),t.Q6J("routerLink",t.lcZ(11,6,"/dashboard/departments/add-department")),t.xp6(9),t.Q6J("routerLink",t.lcZ(20,8,"/dashboard/departments/add-department")),t.xp6(24),t.Q6J("ngForOf",c.departments),t.xp6(1),t.Q6J("ngIf",0===c.departments.length&&!c.loading),t.xp6(4),t.Q6J("currentPage",c.currentPage)("totalPages",c.totalPages))},dependencies:[e.ez,e.sg,e.O5,a.L,g.Bz,g.rH,C.fQ,C.lO,l.u5,u.Q]})}return r})(),data:{breadcrumbs:[{label:"\u0627\u0644\u0623\u0642\u0633\u0627\u0645",url:"/dashboard/departments"}]}},{path:":slug",component:m,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645",url:"/dashboard/departments/add-department"}]}},{path:"add-department/:id",component:m,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645"}]}},{path:"view-department/:id",component:(()=>{class r{constructor(n,o,c,v,x,q){this.activatedRoute=n,this.desService=o,this.localize=c,this.router=v,this.dialog=x,this.employeeService=q,this.conversionUrls=[]}ngOnInit(){this.activatedRoute.paramMap.subscribe(n=>{const o=n.get("id");o&&this.desService.GetDepartmentById(o).subscribe({next:c=>{if(this.department=c.data,this.department.conversion_urls)for(let v in this.department.conversion_urls)this.department.conversion_urls[v].forEach(x=>{this.conversionUrls.push(x)})},error:c=>{console.error("Error fetching department:",c)}})})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g.gz),t.Y36(f._),t.Y36(C.An),t.Y36(g.F0),t.Y36(U.uw),t.Y36(T.M))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-view-department"]],standalone:!0,features:[t.jDz],decls:19,vars:5,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","name",1,"form-label"],["type","text","name","name",1,"form-control","form-control-lg",3,"value"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],["type","text","name","description",1,"form-control","form-control-lg",3,"value"],["for","files","class","form-label",4,"ngIf"],[4,"ngIf"],["for","files",1,"form-label"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],["type","text","readonly","",1,"form-control","form-control-lg","mb-2",3,"value"],["target","_blank",1,"btn","btn-primary","mb-2",3,"href"],[1,"text-center"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0645\u0648\u0638\u0641\u064a\u0646 \u0627\u0644\u0642\u0633\u0645"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,w,13,4,"div",11),t.YNc(18,k,3,0,"div",11),t.qZA()()()()),2&o&&(t.xp6(10),t.Q6J("routerLink",t.lcZ(11,3,"/dashboard/departments")),t.xp6(7),t.Q6J("ngIf",c.department),t.xp6(1),t.Q6J("ngIf",!c.department))},dependencies:[e.ez,e.sg,e.O5,a.L,g.Bz,g.rH,C.fQ,C.lO,l.u5]})}return r})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0633\u0645"}]}}]}]},5123:(y,P,d)=>{d.d(P,{M:()=>p});var e=d(9862),g=d(553),t=d(5879);let p=(()=>{class a{constructor(l){this.http=l,this.employeesUrl=`${g.N.url}employee`}GetEmployeesList(l){let f=new e.LE;return l&&Object.keys(l).forEach(h=>{f=f.append(h,l[h])}),this.http.get(this.employeesUrl,{params:f})}GetAllEmployeesList(){return this.http.get(`${this.employeesUrl}/get/all`)}GetEmployeeById(l){return this.http.get(`${this.employeesUrl}/${l}`)}DeleteEmployee(l){return this.http.delete(`${this.employeesUrl}/${l}`)}AddEmployee(l,f){let h=new e.LE;f&&Object.keys(f).forEach(i=>{h=h.append(i,f[i])});const b=new FormData;return Object.keys(l).forEach(i=>{const _=l[i];null!=_&&(Array.isArray(_)?_.forEach((s,m)=>{s instanceof File&&b.append(`files[avatar][${m}]`,s)}):b.append(i,_))}),this.http.post(this.employeesUrl,b,{params:h})}UpdateEmployee(l,f,h){const b=`${this.employeesUrl}/${l}`;let i=new e.LE;h&&Object.keys(h).forEach(s=>{i=i.append(s,h[s])});const _=new FormData;return Object.keys(f).forEach(s=>{const m=f[s];Array.isArray(m)?m.forEach((u,Z)=>{u instanceof File&&_.append(`files[avatar][${Z}]`,u)}):_.append(s,m)}),this.http.post(b,_,{params:i})}static#t=this.\u0275fac=function(f){return new(f||a)(t.LFG(e.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},8034:(y,P,d)=>{d.d(P,{$:()=>C});var e=d(6814),g=d(7700),t=d(2296),p=d(5879),a=d(4286);let C=(()=>{class l{constructor(h,b,i){this.dialogRef=h,this.data=b,this._MessagesService=i}onConfirmClick(){this.dialogRef.close(!0)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(b){return new(b||l)(p.Y36(g.so),p.Y36(g.WI),p.Y36(a.K))};static#e=this.\u0275cmp=p.Xpm({type:l,selectors:[["app-confirm-dialog"]],standalone:!0,features:[p.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(b,i){1&b&&(p.TgZ(0,"div",0)(1,"h2",1),p._uU(2),p.qZA(),p.TgZ(3,"mat-dialog-content"),p._uU(4),p.qZA(),p.TgZ(5,"mat-dialog-actions",2)(6,"button",3),p.NdJ("click",function(){return i.onCancelClick()}),p._uU(7,"\u0627\u0644\u063a\u0627\u0621"),p.qZA(),p.TgZ(8,"button",4),p.NdJ("click",function(){return i.onConfirmClick()}),p._uU(9," \u062a\u0627\u0643\u064a\u062f "),p.qZA()()()),2&b&&(p.xp6(2),p.Oqu(i.data.title),p.xp6(2),p.Oqu(i.data.message))},dependencies:[e.ez,g.Is,g.uh,g.xY,g.H8,t.ot,t.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return l})()},4414:(y,P,d)=>{d.d(P,{L:()=>b});var e=d(6814),g=d(846),t=d(8733),p=d(2181),a=d(5879);function C(i,_){1&i&&(a.TgZ(0,"li",6),a._uU(1,"/"),a.qZA())}function l(i,_){if(1&i&&(a.ynx(0),a.TgZ(1,"li",4)(2,"a",5),a.ALo(3,"localize"),a._uU(4),a.qZA()(),a.YNc(5,C,2,0,"li",3),a.BQk()),2&i){const s=_.$implicit,m=_.index,u=a.oxw().$implicit;a.xp6(2),a.Q6J("routerLink",a.lcZ(3,3,s.url)),a.xp6(2),a.Oqu(s.label),a.xp6(1),a.Q6J("ngIf",m<u.segments.length-1)}}function f(i,_){1&i&&(a.TgZ(0,"li",6),a._uU(1,"/"),a.qZA())}function h(i,_){if(1&i&&(a.ynx(0),a.YNc(1,l,6,5,"ng-container",2),a.YNc(2,f,2,0,"li",3),a.BQk()),2&i){const s=_.$implicit,m=_.index,u=a.oxw();a.xp6(1),a.Q6J("ngForOf",s.segments),a.xp6(1),a.Q6J("ngIf",m<u.breadcrumbs.length-1)}}let b=(()=>{class i{constructor(s,m){this.router=s,this.activatedRoute=m,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,p.h)(s=>s instanceof g.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(s,m="",u=[]){let Z=[],T=s;for(;T.firstChild;){T=T.firstChild;const U=T.snapshot.url.map(O=>O.path).join("/");""!==U&&(m+=`/${U}`);const D=T.snapshot.data.breadcrumbs;if(D&&D!=Z&&Array.isArray(D)&&""!==U){Z=D;const O=D.map(M=>({label:M.label,url:M.url||m}));u.push({segments:O})}}return u}ngOnDestroy(){}static#t=this.\u0275fac=function(m){return new(m||i)(a.Y36(g.F0),a.Y36(g.gz))};static#e=this.\u0275cmp=a.Xpm({type:i,selectors:[["app-breadcrumb"]],standalone:!0,features:[a.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(m,u){1&m&&(a.TgZ(0,"nav",0)(1,"ol",1),a.YNc(2,h,3,2,"ng-container",2),a.qZA()()),2&m&&(a.xp6(2),a.Q6J("ngForOf",u.breadcrumbs))},dependencies:[e.ez,e.sg,e.O5,g.Bz,g.rH,t.fQ,t.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return i})()},1818:(y,P,d)=>{d.d(P,{Q:()=>b});var e=d(5879),g=d(6223),t=d(6814);function p(i,_){if(1&i){const s=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){e.CHM(s);const u=e.oxw();return e.KtG(u.navigateTo(1))}),e._uU(2,"1"),e.qZA()()}}function a(i,_){1&i&&(e.TgZ(0,"li",2)(1,"a",9),e._uU(2,"..."),e.qZA()())}function C(i,_){if(1&i){const s=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){const Z=e.CHM(s).$implicit,T=e.oxw();return e.KtG(T.navigateTo(Z))}),e._uU(2),e.qZA()()}if(2&i){const s=_.$implicit,m=e.oxw();e.ekj("active",m.currentPage===s),e.xp6(2),e.Oqu(s)}}function l(i,_){1&i&&(e.TgZ(0,"li",2)(1,"a",9),e._uU(2,"..."),e.qZA()())}function f(i,_){if(1&i){const s=e.EpF();e.TgZ(0,"li",2)(1,"a",8),e.NdJ("click",function(){e.CHM(s);const u=e.oxw();return e.KtG(u.navigateTo(u.totalPages))}),e._uU(2),e.qZA()()}if(2&i){const s=e.oxw();e.xp6(2),e.Oqu(s.totalPages)}}const h={provide:g.JU,useExisting:(0,e.Gpc)(()=>b),multi:!0};let b=(()=>{class i{constructor(){this.pageChange=new e.vpe}navigateTo(s){this.pageChange.emit(s),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const s=[];if(this.totalPages<=5)for(let u=1;u<=this.totalPages;u++)s.push(u);else{let u,Z;this.currentPage<=Math.floor(2.5)?(u=1,Z=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(u=this.totalPages-5+1,Z=this.totalPages):(u=this.currentPage-Math.floor(2.5),Z=this.currentPage+Math.floor(2.5));for(let T=u;T<=Z;T++)s.push(T)}return s}static#t=this.\u0275fac=function(m){return new(m||i)};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[e._Bn([h]),e.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(m,u){1&m&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),e.NdJ("click",function(){return u.navigateTo(u.currentPage-1)}),e.TgZ(4,"span",4),e._uU(5,"\xab"),e.qZA()()(),e.YNc(6,p,3,0,"li",5),e.YNc(7,a,3,0,"li",5),e.YNc(8,C,3,3,"li",6),e.YNc(9,l,3,0,"li",5),e.YNc(10,f,3,1,"li",5),e.TgZ(11,"li",2)(12,"a",7),e.NdJ("click",function(){return u.navigateTo(u.currentPage+1)}),e.TgZ(13,"span",4),e._uU(14,"\xbb"),e.qZA()()()()()),2&m&&(e.xp6(2),e.ekj("disabled",1===u.currentPage),e.xp6(4),e.Q6J("ngIf",u.currentPage>3),e.xp6(1),e.Q6J("ngIf",u.currentPage>4),e.xp6(1),e.Q6J("ngForOf",u.calculatePages()),e.xp6(1),e.Q6J("ngIf",u.currentPage<u.totalPages-3),e.xp6(1),e.Q6J("ngIf",u.currentPage<u.totalPages-2),e.xp6(1),e.ekj("disabled",u.currentPage===u.totalPages))},dependencies:[t.ez,t.sg,t.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return i})()}}]);