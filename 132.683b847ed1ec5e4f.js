"use strict";(self.webpackChunkClientPortal=self.webpackChunkClientPortal||[]).push([[132],{6132:(w,m,s)=>{s.r(m),s.d(m,{default:()=>q});var a=s(6814),r=s(846),t=s(5879);let Z=(()=>{class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-notes"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(u,n){1&u&&t._UZ(0,"router-outlet")},dependencies:[a.ez,r.lC]})}return e})();var p=s(4414),l=s(8733),i=s(6223);function A(e,d){if(1&e&&(t.ynx(0),t.TgZ(1,"div",21)(2,"button",22),t._UZ(3,"i",23),t._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629 "),t.qZA(),t.TgZ(5,"a",24),t.ALo(6,"localize"),t._uU(7,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()(),t.BQk()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("disabled",!o.noteForm.valid),t.xp6(3),t.Q6J("routerLink",t.lcZ(6,2,"/dashboard/notes"))}}function b(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"div",21)(1,"button",25),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.updateNote())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629 "),t.qZA(),t.TgZ(3,"a",24),t.ALo(4,"localize"),t._uU(5,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("disabled",!o.noteForm.valid),t.xp6(2),t.Q6J("routerLink",t.lcZ(4,2,"/dashboard/notes"))}}let f=(()=>{class e{constructor(o,u,n){this.activatedRoute=o,this.localize=u,this.router=n,this.isEditMode=!1,this.noteId="",this.noteForm=new i.cw({polyMorph:new i.NI("",i.kI.required),description:new i.NI("",i.kI.required)}),this.loading=!1,this.notes=[{id:2,polyMorph:"hossam",description:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f"}]}ngOnInit(){this.activatedRoute.paramMap.subscribe(o=>{const u=o.get("id");u&&(this.isEditMode=!0,this.noteId=u,this.getNote(u))})}getNote(o){this.loading=!0;const u=this.notes.find(n=>n.id==o);u&&(this.noteDetails=u,this.setFormValuesEditMode(this.noteDetails)),this.loading=!1}setFormValuesEditMode(o){this.noteForm.patchValue({polyMorph:o.polyMorph,description:o.description})}navigateToNotesList(){const o=this.localize.translateRoute("/dashboard/notes");this.router.navigate([o])}updateNote(){this.noteForm.valid&&(this.loading=!0,console.log("Note updated:",this.noteForm.value),this.loading=!1,this.navigateToNotesList())}onSubmit(){this.noteForm.valid&&(this.loading=!0,console.log("New note added:",this.noteForm.value),this.loading=!1,this.navigateToNotesList())}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(r.gz),t.Y36(l.An),t.Y36(r.F0))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-notes"]],standalone:!0,features:[t.jDz],decls:31,vars:6,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","polyMorph",1,"form-label"],["type","text","formControlName","polyMorph","name","polyMorph",1,"form-control","form-control-lg"],["for","description",1,"form-label"],["type","text","formControlName","description","name","description",1,"form-control","form-control-lg"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"form-group","col-12","mb-3"],[1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"btn","mb-sm-0","mb-2",3,"routerLink"],["type","button",1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled","click"]],template:function(u,n){if(1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"form",12),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(19,"div",13)(20,"div",14)(21,"label",15),t._uU(22,"\u0627\u0644\u0627\u0633\u0645"),t.qZA(),t._UZ(23,"input",16),t.qZA(),t.TgZ(24,"div",14)(25,"label",17),t._uU(26,"\u0627\u0644\u0648\u0635\u0641"),t.qZA(),t._UZ(27,"input",18),t.qZA(),t.YNc(28,A,8,4,"ng-container",19),t.YNc(29,b,6,4,"ng-template",null,20,t.W1O),t.qZA()()()()()()()),2&u){const c=t.MAs(30);t.xp6(10),t.Q6J("routerLink",t.lcZ(11,4,"/dashboard/notes")),t.xp6(8),t.Q6J("formGroup",n.noteForm),t.xp6(10),t.Q6J("ngIf",!n.isEditMode)("ngIfElse",c)}},dependencies:[a.ez,a.O5,p.L,r.Bz,r.rH,l.fQ,l.lO,i.u5,i._Y,i.Fj,i.JJ,i.JL,i.UX,i.sg,i.u]})}return e})();var v=s(8034),_=s(7700);const g=function(e,d){return[e,d]};function x(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",22)(8,"a",23),t.ALo(9,"localize"),t._uU(10," \u0639\u0631\u0636 "),t.qZA(),t.TgZ(11,"a",24),t.ALo(12,"localize"),t._UZ(13,"i",25),t._uU(14," \u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(15,"button",26),t.NdJ("click",function(){const c=t.CHM(o).$implicit,h=t.oxw();return t.KtG(h.deleteAgenda(c.id,c.polyMorph))}),t._UZ(16,"i",27),t._uU(17," \u062d\u0630\u0641 "),t.qZA()()()}if(2&e){const o=d.$implicit;t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.polyMorph),t.xp6(2),t.Oqu(o.description),t.xp6(2),t.Q6J("routerLink",t.WLB(9,g,t.lcZ(9,5,"/dashboard/notes/view-notes"),o.id)),t.xp6(3),t.Q6J("routerLink",t.WLB(12,g,t.lcZ(12,7,"/dashboard/notes/add-notes"),o.id))}}function T(e,d){1&e&&(t.TgZ(0,"tr")(1,"td",28),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}function y(e,d){if(1&e&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"label",15),t._uU(4,"\u0627\u0644\u0627\u0633\u0645"),t.qZA(),t._UZ(5,"input",16),t.qZA(),t.TgZ(6,"div",14)(7,"label",17),t._uU(8,"\u0627\u0644\u0648\u0635\u0641"),t.qZA(),t._UZ(9,"input",18),t.qZA()()()),2&e){const o=t.oxw();t.xp6(5),t.s9C("value",o.note.polyMorph),t.xp6(4),t.s9C("value",o.note.description)}}function N(e,d){1&e&&(t.TgZ(0,"div",12)(1,"h4",19),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const C=function(e){return[e]},q=[{path:"",component:Z,children:[{path:"",component:(()=>{class e{constructor(o){this.dialog=o,this.notes=[{id:2,polyMorph:"hossam",description:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f"}],this.searchQuery="",this.loading=!0}ngOnInit(){this.getAllAgendas()}getAllAgendas(o=1){this.loading=!0}deleteAgenda(o,u){this.dialog.open(v.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${u} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(h=>{})}onPageChange(o){this.getAllAgendas(o)}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(_.uw))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-notes"]],standalone:!0,features:[t.jDz],decls:40,vars:5,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-8"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"routerLink"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"table-responsive"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"action","text-end"],[1,"btn","showAll","text-decoration-none","me-2",3,"routerLink"],[1,"btn","edit","me-2","mt-1",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],[1,"btn","delete","bg-danger","me-2","mt-1",3,"click"],[1,"fa-regular","fa-trash-can"],["colspan","15",1,"text-center"]],template:function(u,n){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u062c\u062f\u0648\u0644"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u062c\u062f\u0648\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t.ALo(16,"localize"),t._UZ(17,"i",12),t._uU(18," \u0623\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0647 "),t.qZA()(),t.TgZ(19,"div",13),t._UZ(20,"input",14),t.qZA(),t.TgZ(21,"div",15)(22,"button",16),t._UZ(23,"i",17),t._uU(24," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()(),t.TgZ(25,"div",18)(26,"table",19)(27,"thead")(28,"tr")(29,"th"),t._uU(30,"\u0631\u0642\u0645 "),t.qZA(),t.TgZ(31,"th"),t._uU(32,"\u0645\u062a\u0639\u062f\u062f "),t.qZA(),t.TgZ(33,"th"),t._uU(34,"\u0645\u0644\u0627\u062d\u0638\u0627\u062a "),t.qZA(),t.TgZ(35,"th"),t._uU(36,"\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(37,"tbody"),t.YNc(38,x,18,15,"tr",20),t.YNc(39,T,3,0,"tr",21),t.qZA()()()()()()()()),2&u&&(t.xp6(15),t.Q6J("routerLink",t.lcZ(16,3,"/dashboard/notes/add-notes")),t.xp6(23),t.Q6J("ngForOf",n.notes),t.xp6(1),t.Q6J("ngIf",0===n.notes.length))},dependencies:[a.ez,a.sg,a.O5,p.L,r.Bz,r.rH,l.fQ,l.lO,i.u5]})}return e})(),data:{breadcrumbs:[{label:"\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a",url:"/dashboard/notes"}]}},{path:":slug",component:f,data:{breadcrumbs:[{label:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629",url:"/dashboard/notes/add-notes"}]}},{path:"add-notes/:id",component:f,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"}]}},{path:"view-notes/:id",component:(()=>{class e{constructor(o){this.activatedRoute=o,this.notes=[{id:2,polyMorph:"hossam",description:"\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f"}]}ngOnInit(){this.activatedRoute.paramMap.subscribe(o=>{const u=o.get("id");u&&(this.note=this.notes.find(n=>n.id==u),console.log(this.note))})}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(r.gz))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-view-notes"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],["class","card-body",4,"ngIf"],[1,"card-body"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","polyMorph",1,"form-label"],["id","polyMorph","type","text","readonly","",1,"form-control","form-control-lg",3,"value"],["for","description",1,"form-label"],["id","description","type","text","readonly","",1,"form-control","form-control-lg",3,"value"],[1,"text-center"]],template:function(u,n){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10),t.YNc(17,y,10,2,"div",11),t.YNc(18,N,3,0,"div",11),t.qZA()()()()),2&u&&(t.xp6(10),t.Q6J("routerLink",t.VKq(5,C,t.lcZ(11,3,"/dashboard/notes"))),t.xp6(7),t.Q6J("ngIf",n.note),t.xp6(1),t.Q6J("ngIf",!n.note))},dependencies:[a.ez,a.O5,p.L,r.Bz,r.rH,l.fQ,l.lO]})}return e})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"}]}}]}]}}]);