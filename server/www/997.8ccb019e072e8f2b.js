"use strict";(self.webpackChunkmarkutting=self.webpackChunkmarkutting||[]).push([[997],{8997:(y,p,n)=>{n.r(p),n.d(p,{AuthModule:()=>m});var f=n(6895),l=n(5450),t=n(433),h=n(1606),o=n(8256),_=n(7952),v=n(7726);function Z(i,e){1&i&&(o.TgZ(0,"small",23),o._uU(1,"Email is required"),o.qZA())}function T(i,e){1&i&&(o.TgZ(0,"small",23),o._uU(1,"Email is invalid"),o.qZA())}function w(i,e){1&i&&(o.TgZ(0,"small",23),o._uU(1,"Password is required"),o.qZA())}function C(i,e){if(1&i&&(o.TgZ(0,"small",23),o._uU(1),o.qZA()),2&i){const r=o.oxw();o.xp6(1),o.hij(" ",r.serverErrorMessages,"")}}class c{constructor(e,r,s,d){this.fb=e,this.el=r,this.userApiService=s,this.router=d,this.submitted=!1,this.isLoading=!1}ngOnInit(){this.loginForm=this.fb.group({email:new t.NI(null,[t.kI.required,t.kI.email]),password:new t.NI(null,[t.kI.required])})}get f(){return this.loginForm.controls}submitForm(){if(this.submitted=!0,this.serverErrorMessages="",this.loginForm.valid)this.isLoading=!0,this.userApiService.postUserLogin(this.loginForm.value).subscribe(e=>{this.userApiService.setToken(e.token),this.router.navigate(["/advertiser/allvideocheckout"]),this.scrollTop(),this.isLoading=!1},e=>{this.serverErrorMessages=e.error.message,this.isLoading=!1});else for(const e of Object.keys(this.f))if(this.f[e].invalid){this.el.nativeElement.querySelector('[formControlName="'+e+'"]').focus();break}}scrollTop(){window.scrollTo({top:0})}}function b(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Name is required"),o.qZA())}function q(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Email is required"),o.qZA())}function U(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Email is invalid"),o.qZA())}function A(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Password is required"),o.qZA())}function E(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Please confirm your password."),o.qZA())}function N(i,e){1&i&&(o.TgZ(0,"small",25),o._uU(1,"Passwords do not match."),o.qZA())}function I(i,e){if(1&i&&(o.TgZ(0,"small",25),o._uU(1),o.qZA()),2&i){const r=o.oxw();o.xp6(1),o.hij(" ",r.serverErrorMessages,"")}}c.\u0275fac=function(e){return new(e||c)(o.Y36(t.qu),o.Y36(o.SBq),o.Y36(_.Q),o.Y36(l.F0))},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-login"]],hostVars:1,hostBindings:function(e,r){2&e&&o.d8E("@fallIn",void 0)},decls:37,vars:5,consts:[[1,"contact__area-6"],[1,"container","g-0","pt-120","pb-110"],[1,"line-3"],[1,"row"],[1,"col-xxl-6","col-xl-6","col-lg-6","col-md-6"],[1,"sec-title-wrapper"],[1,"sec-title-2","animation__char_come"],[1,"row","contact__btm"],[1,"col-xxl-5","col-xl-5","col-lg-5","col-md-5"],[1,"col-xxl-7","col-xl-7","col-lg-7","col-md-7"],[1,"contact__form"],[3,"formGroup","ngSubmit"],[1,"row","g-3"],[1,"col-xxl-6","col-xl-6","col-12"],["type","email","formControlName","email","placeholder","Email *"],["class","has-error",4,"ngIf"],["type","password","formControlName","password","placeholder","Password *"],[1,"link"],["routerLink","/auth/user/register",3,"click"],[1,"col-12"],[1,"btn_wrapper"],[1,"wc-btn-primary","btn-hover","btn-item"],[1,"fa-solid","fa-arrow-right"],[1,"has-error"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"span",2),o.TgZ(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"h2",6),o.qZA()(),o.TgZ(7,"div",4)(8,"div",5)(9,"h2",6),o._uU(10,"Log In"),o.qZA()()()(),o.TgZ(11,"div",7)(12,"div",8),o._UZ(13,"app-contact-data"),o.qZA(),o.TgZ(14,"div",9)(15,"div",10)(16,"form",11),o.NdJ("ngSubmit",function(){return r.submitForm()}),o.TgZ(17,"div",12)(18,"div",13),o._UZ(19,"input",14),o.YNc(20,Z,2,0,"small",15),o.YNc(21,T,2,0,"small",15),o.qZA(),o.TgZ(22,"div",13),o._UZ(23,"input",16),o.YNc(24,w,2,0,"small",15),o.qZA()(),o.YNc(25,C,2,1,"small",15),o.TgZ(26,"p",17),o._uU(27,"Don't have an account? "),o.TgZ(28,"a",18),o.NdJ("click",function(){return r.scrollTop()}),o._uU(29,"Register here"),o.qZA()(),o.TgZ(30,"div",12)(31,"div",19)(32,"div",20)(33,"button",21),o._UZ(34,"span"),o._uU(35," Login "),o._UZ(36,"i",22),o.qZA()()()()()()()()()()),2&e&&(o.xp6(16),o.Q6J("formGroup",r.loginForm),o.xp6(4),o.Q6J("ngIf",r.f.email.hasError("required")&&r.f.email.touched||r.f.email.hasError("required")&&r.submitted),o.xp6(1),o.Q6J("ngIf",r.f.email.hasError("email")&&r.f.email.touched||r.f.email.hasError("email")&&r.submitted),o.xp6(3),o.Q6J("ngIf",r.f.password.hasError("required")&&r.f.password.touched||r.f.password.hasError("required")&&r.submitted),o.xp6(1),o.Q6J("ngIf",null==r.serverErrorMessages?null:r.serverErrorMessages.trim()))},dependencies:[f.O5,l.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,v.n],styles:[".has-error[_ngcontent-%COMP%]{border-color:red;color:red}.has-error[_ngcontent-%COMP%]:focus{border-color:red;color:red}.contact__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin-bottom:0}.link[_ngcontent-%COMP%]{padding:20px 0}"],data:{animation:[(0,h.ph)()]}});class u{constructor(e,r,s,d){this.fb=e,this.el=r,this.router=s,this.userApiService=d,this.submitted=!1,this.isLoading=!1}ngOnInit(){this.signupForm=this.fb.group({fullName:new t.NI(null,[t.kI.required]),email:new t.NI(null,[t.kI.required,t.kI.email]),password:new t.NI(null,[t.kI.required]),confirmPassword:new t.NI(null,[t.kI.required])},{validator:this.ConfirmedValidator("password","confirmPassword")})}get f(){return this.signupForm.controls}ConfirmedValidator(e,r){return s=>{const g=s.controls[r];g.errors&&!g.errors.confirmedValidator||g.setErrors(s.controls[e].value!==g.value?{confirmedValidator:!0}:null)}}submitForm(){if(this.submitted=!0,this.serverErrorMessages="",this.signupForm.valid)this.isLoading=!0,this.userApiService.postRegisterUser({fullName:this.signupForm.value.fullName,email:this.signupForm.value.email,password:this.signupForm.value.password,confirmPassword:this.signupForm.value.confirmPassword}).subscribe(r=>{this.isLoading=!1,console.log(r),this.router.navigate(["/auth/user/login"])},r=>{console.log(r),this.isLoading=!1,this.serverErrorMessages=r.error.message});else for(const r of Object.keys(this.f))if(this.f[r].invalid){this.el.nativeElement.querySelector('[formControlName="'+r+'"]').focus();break}}scrollTop(){window.scrollTo({top:0})}}u.\u0275fac=function(e){return new(e||u)(o.Y36(t.qu),o.Y36(o.SBq),o.Y36(l.F0),o.Y36(_.Q))},u.\u0275cmp=o.Xpm({type:u,selectors:[["app-register"]],hostVars:1,hostBindings:function(e,r){2&e&&o.d8E("@fallIn",void 0)},decls:44,vars:8,consts:[[1,"contact__area-6"],[1,"container","g-0","pt-120","pb-110"],[1,"line-3"],[1,"row"],[1,"col-xxl-6","col-xl-6","col-lg-6","col-md-6"],[1,"sec-title-wrapper"],[1,"sec-title-2","animation__char_come"],[1,"row","contact__btm"],[1,"col-xxl-5","col-xl-5","col-lg-5","col-md-5"],[1,"col-xxl-7","col-xl-7","col-lg-7","col-md-7"],[1,"contact__form"],[3,"formGroup","ngSubmit"],[1,"row","g-3"],[1,"col-xxl-6","col-xl-6","col-12"],["type","text","formControlName","fullName","placeholder","Your Name *"],["class","has-error",4,"ngIf"],["type","email","formControlName","email","placeholder","Email *"],["type","password","formControlName","password","placeholder","Password *"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password *"],[1,"link"],["routerLink","/auth/user/login",3,"click"],[1,"col-12"],[1,"btn_wrapper"],[1,"wc-btn-primary","btn-hover","btn-item"],[1,"fa-solid","fa-arrow-right"],[1,"has-error"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"span",2),o.TgZ(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"h2",6),o.qZA()(),o.TgZ(7,"div",4)(8,"div",5)(9,"h2",6),o._uU(10,"Sign Up"),o.qZA()()()(),o.TgZ(11,"div",7)(12,"div",8),o._UZ(13,"app-contact-data"),o.qZA(),o.TgZ(14,"div",9)(15,"div",10)(16,"form",11),o.NdJ("ngSubmit",function(){return r.submitForm()}),o.TgZ(17,"div",12)(18,"div",13),o._UZ(19,"input",14),o.YNc(20,b,2,0,"small",15),o.qZA(),o.TgZ(21,"div",13),o._UZ(22,"input",16),o.YNc(23,q,2,0,"small",15),o.YNc(24,U,2,0,"small",15),o.qZA(),o.TgZ(25,"div",13),o._UZ(26,"input",17),o.YNc(27,A,2,0,"small",15),o.qZA(),o.TgZ(28,"div",13),o._UZ(29,"input",18),o.YNc(30,E,2,0,"small",15),o.YNc(31,N,2,0,"small",15),o.qZA()(),o.YNc(32,I,2,1,"small",15),o.TgZ(33,"p",19),o._uU(34,"Already have a account? "),o.TgZ(35,"a",20),o.NdJ("click",function(){return r.scrollTop()}),o._uU(36,"Login here"),o.qZA()(),o.TgZ(37,"div",12)(38,"div",21)(39,"div",22)(40,"button",23),o._UZ(41,"span"),o._uU(42," Signup "),o._UZ(43,"i",24),o.qZA()()()()()()()()()()),2&e&&(o.xp6(16),o.Q6J("formGroup",r.signupForm),o.xp6(4),o.Q6J("ngIf",r.f.fullName.hasError("required")&&r.f.fullName.touched||r.f.fullName.hasError("required")&&r.submitted),o.xp6(3),o.Q6J("ngIf",r.f.email.hasError("required")&&r.f.email.touched||r.f.email.hasError("required")&&r.submitted),o.xp6(1),o.Q6J("ngIf",r.f.email.hasError("email")&&r.f.email.touched||r.f.email.hasError("email")&&r.submitted),o.xp6(3),o.Q6J("ngIf",r.f.password.hasError("required")&&r.f.password.touched||r.f.password.hasError("required")&&r.submitted),o.xp6(3),o.Q6J("ngIf",r.f.confirmPassword.hasError("required")&&r.f.confirmPassword.touched||r.f.confirmPassword.hasError("required")&&r.submitted),o.xp6(1),o.Q6J("ngIf",r.f.confirmPassword.hasError("confirmedValidator")||r.f.password.hasError("confirmedValidator")),o.xp6(1),o.Q6J("ngIf",null==r.serverErrorMessages?null:r.serverErrorMessages.trim()))},dependencies:[f.O5,l.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,v.n],styles:[".has-error[_ngcontent-%COMP%]{border-color:red;color:red}.has-error[_ngcontent-%COMP%]:focus{border-color:red;color:red}.contact__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin-bottom:0}.link[_ngcontent-%COMP%]{padding:20px 0}"],data:{animation:[(0,h.ph)()]}});const M=[{path:"",redirectTo:"user/login",pathMatch:"full"},{path:"user",children:[{path:"login",component:c,data:{title:"User Login"}},{path:"register",component:u,data:{title:"User Signup"}}]}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[l.Bz.forChild(M),l.Bz]});var P=n(4466);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[f.ez,a,t.UX,P.m]})}}]);