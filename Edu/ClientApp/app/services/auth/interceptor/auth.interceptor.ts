import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authedRequest: HttpRequest<any> = request.clone(
            {
                headers: request.headers.set("Authorization", "Bearer " + localStorage.getItem("token"))
            }
        );
        return next.handle(authedRequest);
    }

}