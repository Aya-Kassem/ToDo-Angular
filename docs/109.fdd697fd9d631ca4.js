"use strict";(self.webpackChunkToDo=self.webpackChunkToDo||[]).push([[109],{9109:(S,g,i)=>{i.r(g),i.d(g,{StickyWallModule:()=>W});var r=i(6814),s=i(95),C=i(5619),t=i(4946),p=i(2785),O=i(6118),P=i(4248),_=i(737);function y(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",4)(1,"div",13)(2,"div",14)(3,"div"),t._UZ(4,"i",15)(5,"div",16),t.qZA(),t.TgZ(6,"i",17),t.NdJ("click",function(){const l=t.CHM(n).index,d=t.oxw();return t.KtG(d.deleteNote(l))}),t.qZA()(),t.TgZ(7,"div",18),t.NdJ("keydown",function(){const l=t.CHM(n).index,d=t.oxw();return t.KtG(d.showSpinner(l))}),t.qZA()()()}if(2&o){const n=a.$implicit,e=a.index;t.xp6(4),t.uIk("id","check-"+e),t.xp6(1),t.uIk("id","spinner-"+e),t.xp6(2),t.Q6J("innerHTML",n.noteBody,t.oJD),t.uIk("note","noteBody-"+e)}}function h(o,a){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-confirm-dialog",19),t.NdJ("response",function(c){t.CHM(n);const l=t.oxw();return t.KtG(l.confirmAction(c))}),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("msg",n.ConfirmMsg)("fire",n.NoteActionReq)}}function u(o,a){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-toast",20),t.NdJ("response",function(c){t.CHM(n);const l=t.oxw();return t.KtG(l.toastClosed(c))}),t.qZA(),t.BQk()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("msg",n.success)("fire",n.changesApplied)("type",n.notification)}}let m=(()=>{class o{constructor(n){this._NavService=n,this.allNotes=[],this.NoteActionReq=new C.X(!1),this.changesApplied=new C.X(!1),this.notification="notification",this.noteForm=new s.cw({noteBody:new s.NI("",s.kI.required)}),this.spanElement=document.createElement("span")}ngOnInit(){this._NavService.getNotes().subscribe(n=>{this.allNotes=n?JSON.parse(n):[]})}editNote(n){let e=document.querySelector(`[note="noteBody-${n}"]`),c=this.allNotes[n];this.noteIndex=n,c.noteBody=e.innerHTML,this._NavService.setNotes(JSON.stringify(this.allNotes)),this.hideSpinner(n)}deleteNote(n){this.noteIndex=n,this.ConfirmMsg="Are You Sure You Want to Delete This Note?!",this.NoteActionReq.next(!0)}createNote(){this.getUserText();const n=this.noteForm.value.noteBody;let e;null!=this.noteIndex&&(e=this.allNotes[this.noteIndex]),n&&e&&(e.noteBody=n),n&&!e&&this.allNotes.push({noteBody:n}),this._NavService.setNotes(JSON.stringify(this.allNotes)),this.noteForm.reset(),this.noteIndex=null}confirmAction(n){this.NoteActionReq.next(!1),n&&(this.success="Note Deleted Successfully",this.allNotes.splice(this.noteIndex,1),this._NavService.setNotes(JSON.stringify(this.allNotes)),this.changesApplied.next(!0))}toastClosed(n){n&&this.changesApplied.next(!1),this.noteIndex=null}getUserText(){let n=document.querySelector(".description");this.noteForm.controls.noteBody.setValue(n.innerHTML)}saveNoteChanges(n){setTimeout(()=>this.editNote(n),1500)}showSpinner(n){document.querySelector(`[id="check-${n}"]`).classList.add("d-none"),document.querySelector(`[id="spinner-${n}"]`).classList.remove("d-none"),this.saveNoteChanges(n)}hideSpinner(n){let e=document.querySelector(`[id="spinner-${n}"]`);document.querySelector(`[id="check-${n}"]`).classList.remove("d-none"),e.classList.add("d-none")}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(p.t))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-sticky-wall"]],decls:16,vars:4,consts:[[1,"stickyWall","container-fluid"],[1,"row","mb-3"],[1,"main-header"],[1,"row","allNotes"],[1,"col-sm-6","col-md-4","p-0","my-2"],[1,"d-flex","align-items-center","addNote","flex-column","p-0","mx-1",3,"formGroup","ngSubmit"],[1,"heading","py-1","border-bottom","d-flex","align-items-center","justify-content-between"],[1,"saveNote","m-0","px-2"],["type","submit"],["type","submit","pTooltip","Save",1,"bi","bi-save","px-2"],["contenteditable","true",1,"description","note-description","p-2"],["class","col-sm-6 col-md-4 p-0 my-2",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"p-0","stickyNote","mx-1","d-flex","flex-column"],[1,"noteStyle","border-bottom","mt-auto","d-flex","align-items-center","justify-content-between","p-1"],[1,"bi","bi-check-lg","check","px-1"],["role","status",1,"spinner-border","d-none","px-1"],["pTooltip","delete",1,"bi","bi-trash","px-1",3,"click"],["contenteditable","true",1,"note","note-description","px-3","py-2",3,"innerHTML","keydown"],[3,"msg","fire","response"],[3,"msg","fire","type","response"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sticky Wall"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"form",5),t.NdJ("ngSubmit",function(){return c.createNote()}),t.TgZ(7,"div",6)(8,"p",7),t._uU(9,"Write Your Notes!"),t.qZA(),t.TgZ(10,"button",8),t._UZ(11,"i",9),t.qZA()(),t._UZ(12,"div",10),t.qZA()(),t.YNc(13,y,8,4,"div",11),t.YNc(14,h,2,2,"ng-container",12),t.YNc(15,u,2,3,"ng-container",12),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("formGroup",c.noteForm),t.xp6(7),t.Q6J("ngForOf",c.allNotes),t.xp6(1),t.Q6J("ngIf",c.NoteActionReq.value),t.xp6(1),t.Q6J("ngIf",c.changesApplied.value))},dependencies:[r.sg,r.O5,s._Y,s.JL,s.sg,O.$,P.q,_.u],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}.stickyWall[_ngcontent-%COMP%]{width:100%}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]{height:250px;border-radius:5px;box-shadow:#00000029 0 1px 4px;padding:10px}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{width:100%}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:inherit}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .saveNote[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .saveNote[_ngcontent-%COMP%]{font-weight:500;color:#5c5470}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%]{height:40px}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%]{width:100%;border:none;overflow-x:auto}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%]{resize:none;height:100%}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .note-heading[_ngcontent-%COMP%]:focus, .stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%]:focus, .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-heading[_ngcontent-%COMP%]:focus, .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%]:focus{outline:none;border:none}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:17px;color:var(--IconsColor)}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.check), .stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .noteStyle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.check), .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:60%}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus-visible, .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus-visible{outline:none}.stickyWall[_ngcontent-%COMP%]   .stickyNote[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:transparent transparent;overflow:auto}.stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-description[_ngcontent-%COMP%], .stickyWall[_ngcontent-%COMP%]   .addNote[_ngcontent-%COMP%]   .note-heading[_ngcontent-%COMP%]{background-color:var(--lightGrey)}.clicked[_ngcontent-%COMP%]{color:#fff!important;background-color:var(--IconsColor);border-radius:3px}.bold[_ngcontent-%COMP%]{font-weight:700}.italic[_ngcontent-%COMP%]{font-style:italic}"]})}return o})();var M=i(2253);const k=[{path:"",component:m,canActivate:[i(6194).p]}];let f=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[M.Bz.forChild(k),M.Bz]})}return o})();var x=i(2078),v=i(5895);let W=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[r.ez,f,s.u5,s.UX,x.R,v.R,_.z]})}return o})()}}]);