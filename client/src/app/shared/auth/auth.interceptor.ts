import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';

import { tap } from 'rxjs/operators';
// import { UserService } from 'src/app/modules/employe/services/user.service';
// import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { UserApiService } from '../services/user-api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userApiService: UserApiService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            let clonedreq;
            clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userApiService.getToken())
            });

            //   if (this.adminService.isAdmin === false) {
            //        clonedreq = req.clone({
            //           headers: req.headers.set("Authorization", "Bearer " + this.userApiService.getToken())
            //       });
            //   }
            //   else {
            //       clonedreq = req.clone({
            //           headers: req.headers.set("Authorization", "Bearer " + this.adminService.getToken())
            //       });
            //   }

            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    err => {
                        console.log("ERROR", err);
                        if (err['statusText'] === "Unknown Error") {
                            // this.toasterMsgService.error(err['statusText']);
                        }

                        // this.router.navigateByUrl('/user/login');
                        //   if (err.error.auth == false && this.adminService.isAdmin === false) {
                        //       this.router.navigateByUrl('/employee/login');
                        //   }
                        //   else if (err.error.auth == false &&  this.adminService.isAdmin === true) {
                        //       this.router.navigateByUrl('/admin/login');
                        //   }
                    })
            );
        }
    }
}
