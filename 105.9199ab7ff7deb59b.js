"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[105],{8105:(B,g,n)=>{n.r(g),n.d(g,{default:()=>D});var d=n(6814),Z=n(1818),c=n(8733),l=n(846),m=n(4414),o=n(6223),v=n(8034),t=n(5879),_=n(7444),h=n(7700);const f=function(u,i){return[u,i]};function A(u,i){if(1&u){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"span"),t._uU(5),t.qZA()(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td")(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",26)(14,"span",27),t._uU(15),t.qZA()(),t.TgZ(16,"td",28)(17,"a",29),t.ALo(18,"localize"),t._UZ(19,"i",30),t._uU(20," \u0639\u0631\u0636"),t.qZA(),t.TgZ(21,"a",31),t.ALo(22,"localize"),t._UZ(23,"i",32),t._uU(24," \u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(25,"button",33),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteTask(r.id))}),t._UZ(26,"i",34),t._uU(27," \u062d\u0630\u0641 "),t.qZA()()()}if(2&u){const e=i.$implicit,a=i.index;t.xp6(2),t.Oqu(a+1),t.xp6(3),t.Oqu(e.client_name),t.xp6(2),t.Oqu(e.project.name),t.xp6(2),t.Tol("in_progress"==e.task_status?"taskActive":"completed"==e.task_status?"taskPause":"taskStop"),t.xp6(1),t.Oqu(e.task_status),t.xp6(2),t.Oqu(e.data_trust),t.xp6(3),t.Oqu(e.date),t.xp6(2),t.Q6J("routerLink",t.WLB(14,f,t.lcZ(18,10,"/dashboard/tasks/view-task"),e.id)),t.xp6(4),t.Q6J("routerLink",t.WLB(17,f,t.lcZ(22,12,"/dashboard/tasks/add-task"),e.id))}}function T(u,i){1&u&&(t.TgZ(0,"tr")(1,"td",35),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let b=(()=>{class u{constructor(e,a,s,r){this.router=e,this.localize=a,this.taskService=s,this.dialog=r,this.tasks=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getListTasks()}getListTasks(e=1){this.loading=!0,this.taskService.TaskLists(e).subscribe({next:a=>{a&&a.data&&(this.tasks=a.data,this.currentPage=a.pagination.current_page,this.totalPages=a.pagination.last_page,this.loading=!1)},error:a=>{console.log("There is an error: ",a)}})}onPageChange(e){this.getListTasks(e)}navigateToAddTask(){const e=this.localize.translateRoute("/dashboard/tasks/add-task");this.router.navigate([e])}deleteTask(e){this.dialog.open(v.$,{width:"500px",data:{title:"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:"\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0627\u0644\u0645\u0647\u0645\u0629\u061f"}}).afterClosed().subscribe(s=>{s&&this.taskService.deleteTask(e).subscribe({next:r=>{this.getListTasks()},error:r=>{console.log("there was an error deleting currency:",r)}})})}viewTask(e){if(e){const a=this.localize.translateRoute("/dashboard/tasks/view-task");this.router.navigate([a,e.id])}else console.error("No employee to view")}static#t=this.\u0275fac=function(a){return new(a||u)(t.Y36(l.F0),t.Y36(c.An),t.Y36(_.M),t.Y36(h.uw))};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-tasks-list"]],standalone:!0,features:[t.jDz],decls:49,vars:4,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100",3,"click"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-md-12"],[3,"currentPage","totalPages","pageChange"],[1,"fw-bold"],[1,"btn","btn-primary","text-light"],[1,"action","text-center"],[1,"btn","get",3,"routerLink"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","6",1,"text-center"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t.NdJ("click",function(){return s.navigateToAddTask()}),t._UZ(16,"i",12),t._uU(17," \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062c\u062f\u064a\u062f "),t.qZA()(),t.TgZ(18,"div",13),t._UZ(19,"input",14),t.qZA(),t.TgZ(20,"div",15)(21,"button",16),t._UZ(22,"i",17),t._uU(23," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(24,"div",18)(25,"div",19)(26,"table",20)(27,"thead")(28,"tr")(29,"th"),t._uU(30,"#"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"\u062d\u0627\u0644\u0647 \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"\u0627\u0644\u0639\u0647\u062f\u0629"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t._UZ(41,"th"),t.qZA()(),t.TgZ(42,"tbody"),t.YNc(43,A,28,20,"tr",21),t.YNc(44,T,3,0,"tr",22),t.qZA()()()(),t.TgZ(45,"div",8)(46,"div",23)(47,"div",24)(48,"pagination",25),t.NdJ("pageChange",function(p){return s.onPageChange(p)}),t.qZA()()()()()()()()),2&a&&(t.xp6(43),t.Q6J("ngForOf",s.tasks),t.xp6(1),t.Q6J("ngIf",0===s.tasks.length&&!s.loading),t.xp6(4),t.Q6J("currentPage",s.currentPage)("totalPages",s.totalPages))},dependencies:[d.ez,d.sg,d.O5,Z.Q,c.fQ,c.lO,l.Bz,l.rH,m.L,o.u5]})}return u})();var x=n(4286),U=n(4114),q=n(5862);function C(u,i){if(1&u&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&u){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function F(u,i){if(1&u&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&u){const e=i.$implicit;t.Q6J("value",e.name),t.xp6(1),t.hij(" ",e.name," ")}}function w(u,i){if(1&u&&(t.ynx(0),t.TgZ(1,"div",40)(2,"button",41),t._UZ(3,"i",42),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0645\u0629 "),t.qZA()(),t.BQk()),2&u){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.taskForm.valid)}}function y(u,i){if(1&u){const e=t.EpF();t.TgZ(0,"div",40)(1,"button",43),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.updateTask())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 "),t.qZA()()}if(2&u){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.taskForm.valid)}}const I=function(u){return[u]};let k=(()=>{class u{constructor(e,a,s,r,p,E,P){this.activatedRoute=e,this.taskService=a,this.localize=s,this.router=r,this._MessagesService=p,this.projectServices=E,this.clientsService=P,this.isEditMode=!1,this.projects=[],this.clients=[],this.taskId="",this.taskForm=new o.cw({project_id:new o.NI("",o.kI.required),client_name:new o.NI("",o.kI.required),instructions:new o.NI("",o.kI.required),notes:new o.NI("",o.kI.required),data_trust:new o.NI("",o.kI.required),date:new o.NI("",o.kI.required),task_status:new o.NI("",o.kI.required)})}ngOnInit(){this.getProjectList(),this.getClientsList(),this.activatedRoute.paramMap.subscribe(e=>{const a=e.get("id");a&&(this.isEditMode=!0,this.taskId=a,this.taskService.getTaskById(a).subscribe(s=>{s&&s.data&&this.setFormValues(s.data)}))})}getProjectList(){this.projectServices.projectLists().subscribe({next:e=>{e&&e.data&&(this.projects=e.data)}})}getClientsList(){this.clientsService.getClientsList().subscribe({next:e=>{e&&e.data&&(console.log(this.clients),this.clients=e.data)}})}setFormValues(e){this.taskForm.controls.project_id.setValue(e.project_id),this.taskForm.controls.client_name.setValue(e.client_name),this.taskForm.controls.instructions.setValue(e.instructions),this.taskForm.controls.notes.setValue(e.notes),this.taskForm.controls.data_trust.setValue(e.data_trust),this.taskForm.controls.date.setValue(e.date),this.taskForm.controls.task_status.setValue(e.task_status)}updateTask(){this.taskForm.valid&&this.taskService.updateTask(this.taskId,{project_id:this.taskForm.controls.project_id.value||"",client_name:this.taskForm.controls.client_name.value||"",instructions:this.taskForm.controls.instructions.value||"",notes:this.taskForm.controls.notes.value||"",data_trust:this.taskForm.controls.data_trust.value||"",date:this.taskForm.controls.date.value||"",task_status:this.taskForm.controls.task_status.value||"",_method:"PATCH"}).subscribe({next:a=>{this.navigateToTasksList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:a=>{console.error("Failed to add admin:",a)}})}navigateToTasksList(){const e=this.localize.translateRoute("/dashboard/tasks");this.router.navigate([e])}onSubmit(){this.taskForm.valid&&this.taskService.addTask({project_id:this.taskForm.controls.project_id.value||"",client_name:this.taskForm.controls.client_name.value||"",instructions:this.taskForm.controls.instructions.value||"",notes:this.taskForm.controls.notes.value||"",data_trust:this.taskForm.controls.data_trust.value||"",date:this.taskForm.controls.date.value||"",task_status:"progress"}).subscribe({next:a=>{this.navigateToTasksList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:a=>{console.error("Failed to add admin:",a)}})}static#t=this.\u0275fac=function(a){return new(a||u)(t.Y36(l.gz),t.Y36(_.M),t.Y36(c.An),t.Y36(l.F0),t.Y36(x.K),t.Y36(U.m),t.Y36(q.a))};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-add-task"]],standalone:!0,features:[t.jDz],decls:66,vars:10,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","project_id",1,"form-label"],["name","project_id","formControlName","project_id","id","project_id",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],["for","client_name",1,"form-label"],["name","client_name","formControlName","client_name","id","client_name",1,"form-select","form-select-lg"],["for","data_trust",1,"form-label"],["type","text","name","data_trust","id","data_trust","formControlName","data_trust",1,"form-control","form-control-lg"],[1,"form-label"],["formControlName","task_status","value","pending","type","radio","name","task_status","id","active","hidden",""],["for","active",1,"me-2"],["formControlName","task_status","value","progress","type","radio","name","task_status","id","paused","hidden",""],["for","paused",1,"me-2"],["formControlName","task_status","value","completed","type","radio","name","task_status","id","stop","hidden",""],["for","stop",1,"me-2"],["for","notes",1,"form-label"],["formControlName","notes","name","notes","id","notes","cols","30","rows","3",1,"form-control"],["for","instructions",1,"form-label"],["formControlName","instructions","name","instructions","id","instructions","cols","30","rows","3",1,"form-control"],[1,"input-group","input-group-lg"],["for","date",1,"input-group-text"],[1,"fa-regular","fa-calendar"],["type","date","formControlName","date","name","date","id","date",1,"form-control","form-control-lg"],[4,"ngIf","ngIfElse"],["editButton",""],[3,"value"],[1,"form-group","col-12","mb-3"],["type","submit",1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(a,s){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"h5"),t._uU(19,"\u0623\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629"),t.qZA(),t.TgZ(20,"form",12),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(21,"div",13)(22,"div",14)(23,"label",15),t._uU(24,"\u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(25,"select",16),t.YNc(26,C,2,2,"option",17),t.qZA()(),t.TgZ(27,"div",14)(28,"label",18),t._uU(29,"\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644"),t.qZA(),t.TgZ(30,"select",19),t.YNc(31,F,2,2,"option",17),t.qZA()(),t.TgZ(32,"div",14)(33,"label",20),t._uU(34,"\u0627\u0644\u0639\u0647\u062f\u0629"),t.qZA(),t._UZ(35,"input",21),t.qZA(),t.TgZ(36,"div",14)(37,"p",22),t._uU(38,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t._UZ(39,"input",23),t.TgZ(40,"label",24),t._uU(41,"\u0645\u0639\u0644\u0642\u0629"),t.qZA(),t._UZ(42,"input",25),t.TgZ(43,"label",26),t._uU(44,"\u0645\u0633\u062a\u0645\u0631\u0629"),t.qZA(),t._UZ(45,"input",27),t.TgZ(46,"label",28),t._uU(47,"\u0645\u063a\u0644\u0642"),t.qZA()(),t.TgZ(48,"div",14)(49,"label",29),t._uU(50,"\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA(),t._UZ(51,"textarea",30),t.qZA(),t.TgZ(52,"div",14)(53,"label",31),t._uU(54,"\u062a\u0639\u0644\u064a\u0645\u0627\u062a"),t.qZA(),t._UZ(55,"textarea",32),t.qZA(),t.TgZ(56,"div",14)(57,"p",22),t._uU(58,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t.TgZ(59,"div",33)(60,"label",34),t._UZ(61,"i",35),t.qZA(),t._UZ(62,"input",36),t.qZA()(),t.YNc(63,w,5,1,"ng-container",37),t.YNc(64,y,3,1,"ng-template",null,38,t.W1O),t.qZA()()()()()()()),2&a){const r=t.MAs(65);t.xp6(10),t.Q6J("routerLink",t.VKq(8,I,t.lcZ(11,6,"/dashboard/tasks"))),t.xp6(10),t.Q6J("formGroup",s.taskForm),t.xp6(6),t.Q6J("ngForOf",s.projects),t.xp6(5),t.Q6J("ngForOf",s.clients),t.xp6(32),t.Q6J("ngIf",!s.isEditMode)("ngIfElse",r)}},dependencies:[d.ez,d.sg,d.O5,m.L,l.Bz,l.rH,c.fQ,c.lO,o.u5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o._,o.JJ,o.JL,o.UX,o.sg,o.u]})}return u})();function N(u,i){1&u&&t._UZ(0,"input",35)}function j(u,i){1&u&&(t.TgZ(0,"label",36),t._uU(1,"\u0627\u0646\u062a\u0647\u062a"),t.qZA())}function J(u,i){1&u&&t._UZ(0,"input",37)}function Q(u,i){1&u&&(t.TgZ(0,"label",38),t._uU(1,"\u0645\u0633\u062a\u0645\u0631\u0629"),t.qZA())}function Y(u,i){1&u&&t._UZ(0,"input",39)}function z(u,i){1&u&&(t.TgZ(0,"label",40),t._uU(1,"\u0645\u063a\u0644\u0642"),t.qZA())}const O=function(u,i){return[u,i]};function S(u,i){if(1&u&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"p",15),t._uU(4,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"),t.qZA(),t.TgZ(5,"a",16),t.ALo(6,"localize"),t._uU(7),t.qZA()(),t.TgZ(8,"div",17)(9,"label",18),t._uU(10,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644"),t.qZA(),t._UZ(11,"input",19),t.qZA(),t.TgZ(12,"div",17)(13,"label",20),t._uU(14,"\u0627\u0644\u0639\u0647\u062f\u0629"),t.qZA(),t._UZ(15,"input",21),t.qZA(),t.TgZ(16,"div",17)(17,"label",22),t._uU(18,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t._UZ(19,"input",23),t.qZA(),t.TgZ(20,"div",17)(21,"label",24),t._uU(22,"\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA(),t.TgZ(23,"textarea",25),t._uU(24),t.qZA()(),t.TgZ(25,"div",17)(26,"label",26),t._uU(27,"\u062a\u0639\u0644\u064a\u0645\u0627\u062a"),t.qZA(),t.TgZ(28,"textarea",27),t._uU(29),t.qZA()(),t.TgZ(30,"div",17)(31,"p",28),t._uU(32,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0629"),t.qZA(),t.YNc(33,N,1,0,"input",29),t.YNc(34,j,2,0,"label",30),t.YNc(35,J,1,0,"input",31),t.YNc(36,Q,2,0,"label",32),t.YNc(37,Y,1,0,"input",33),t.YNc(38,z,2,0,"label",34),t.qZA()()()),2&u){const e=t.oxw();t.xp6(5),t.Q6J("routerLink",t.WLB(15,O,t.lcZ(6,13,"/dashboard/projects/view-project"),e.task.project.id)),t.xp6(2),t.Oqu(e.task.project.name),t.xp6(4),t.s9C("value",e.task.client_name),t.xp6(4),t.s9C("value",e.task.data_trust),t.xp6(4),t.s9C("value",e.task.date),t.xp6(5),t.Oqu(e.task.notes),t.xp6(5),t.Oqu(e.task.instructions),t.xp6(4),t.Q6J("ngIf","completed"==e.task.task_status),t.xp6(1),t.Q6J("ngIf","completed"==e.task.task_status),t.xp6(1),t.Q6J("ngIf","in progress"==e.task.task_status),t.xp6(1),t.Q6J("ngIf","in progress"==e.task.task_status),t.xp6(1),t.Q6J("ngIf","stopped"==e.task.task_status),t.xp6(1),t.Q6J("ngIf","stopped"==e.task.task_status)}}function V(u,i){1&u&&(t.TgZ(0,"div",12)(1,"h4",41),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const M=function(u){return[u]},D=[{path:"",component:(()=>{class u{static#t=this.\u0275fac=function(a){return new(a||u)};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-main-task"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(a,s){1&a&&t._UZ(0,"router-outlet")},dependencies:[d.ez,l.lC]})}return u})(),children:[{path:"",component:b,data:{breadcrumbs:[{label:"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a",url:"/dashboard/tasks/add-task"}]}},{path:":slug",component:k,data:{breadcrumbs:[{label:" \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629",url:"/dashboard/tasks/add-task"}]}},{path:"add-task/:id",component:k,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629",url:"/dashboard/tasks/add-task"}]}},{path:"view-task/:id",component:(()=>{class u{constructor(e,a){this.activatedRoute=e,this.taskService=a}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const a=e.get("id");a&&this.taskService.getTaskById(a).subscribe({next:s=>{this.task=s.data,console.log(this.task)}})})}static#t=this.\u0275fac=function(a){return new(a||u)(t.Y36(l.gz),t.Y36(_.M))};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-view-task"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3","action"],[1,"form-label"],[1,"btn","get",3,"routerLink"],[1,"form-group","col-md-6","mb-3"],["for","client_name",1,"form-label"],["id","client_name","type","text","readonly","",1,"form-control","form-control-lg",3,"value"],["for","data_trust",1,"form-label"],["id","data_trust","type","text","readonly","",1,"form-control","form-control-lg",3,"value"],["for","name",1,"form-label"],["type","text","readonly","",1,"form-control","form-control-lg",3,"value"],["for","notes",1,"form-label"],["id","notes","cols","30","rows","3","readonly","",1,"form-control"],["for","instructions",1,"form-label"],["id","instructions","cols","30","rows","3",1,"form-control"],["for","task_status",1,"form-label"],["value","completed","type","radio","id","active","hidden","","checked","",4,"ngIf"],["for","active","class","me-2",4,"ngIf"],["checked","","value","in_progress","type","radio","id","paused","hidden","",4,"ngIf"],["for","paused","class","me-2",4,"ngIf"],["checked","","value","closed","type","radio","id","stop","hidden","",4,"ngIf"],["for","stop","class","me-2",4,"ngIf"],["value","completed","type","radio","id","active","hidden","","checked",""],["for","active",1,"me-2"],["checked","","value","in_progress","type","radio","id","paused","hidden",""],["for","paused",1,"me-2"],["checked","","value","closed","type","radio","id","stop","hidden",""],["for","stop",1,"me-2"],[1,"text-center"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,S,39,18,"div",11),t.YNc(18,V,3,0,"div",11),t.qZA()()()()),2&a&&(t.xp6(10),t.Q6J("routerLink",t.VKq(5,M,t.lcZ(11,3,"/dashboard/tasks"))),t.xp6(7),t.Q6J("ngIf",s.task),t.xp6(1),t.Q6J("ngIf",!s.task))},dependencies:[d.ez,d.O5,m.L,l.Bz,l.rH,c.fQ,c.lO]})}return u})(),data:{breadcrumbs:[{label:"\u0639\u0631\u0636 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629",url:"/dashboard/tasks/view-task"}]}}]}]}}]);