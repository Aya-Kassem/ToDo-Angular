"use strict";(self.webpackChunkToDo=self.webpackChunkToDo||[]).push([[592],{6118:(f,r,i)=>{i.d(r,{$:()=>_});var e=i(4946),l=i(5619),c=i(9972),a=i(8980),m=i(4089);function p(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"i",4),e.qZA(),e.TgZ(3,"span",5),e._uU(4),e.qZA(),e.TgZ(5,"p",6),e._uU(6),e.qZA(),e.TgZ(7,"div",7)(8,"button",8),e.NdJ("click",function(){e.CHM(t),e.oxw();const s=e.MAs(1);return e.KtG(s.accept())}),e.qZA(),e.TgZ(9,"button",9),e.NdJ("click",function(){e.CHM(t),e.oxw();const s=e.MAs(1);return e.KtG(s.reject())}),e.qZA()()()}if(2&n){const t=u.$implicit;e.xp6(4),e.Oqu(t.header),e.xp6(2),e.Oqu(t.message)}}let _=(()=>{class n{constructor(t){this._ConfirmationService=t,this.response=new e.vpe,this.fire=new l.X(!1)}ngAfterContentInit(){this.subscription=this.fire.subscribe(t=>{t&&this.confirm()})}confirm(){this._ConfirmationService.confirm({message:this.msg,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>this.acceptFunc(),reject:()=>this.rejectFunc()})}acceptFunc(){this.response.emit(!0)}rejectFunc(){this.response.emit(!1)}ngOnDestroy(){this.subscription.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(c.YP))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-confirm-dialog"]],inputs:{msg:"msg",fire:"fire"},outputs:{response:"response"},decls:3,vars:0,consts:[["cd",""],["pTemplate","headless"],[1,"flex","flex-column","align-items-center","p-5","surface-overlay","border-round"],[1,"border-circle","bg-primary","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(o,s){1&o&&(e.TgZ(0,"p-confirmDialog",null,0),e.YNc(2,p,10,2,"ng-template",1),e.qZA())},dependencies:[a.Q,m.Hq,c.jx],encapsulation:2})}return n})()}}]);