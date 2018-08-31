import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { delay } from 'q';


const loginUrl: string = "api/account/login";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }


    public isAuthenticated(): boolean {
        let encodedToken: string = <string>localStorage.getItem("token");

        if (!encodedToken) {
            return false;
        }

        let token: { exp: number } = jwt_decode(encodedToken);

        if (!token) {
            return false;
        }

        let expiryDate: number = token.exp * 1000; //Date.now() returns number of millis, not seconds
        if (Date.now() > expiryDate) {
            return false;
        }

        return true;
    }

    public tryAuthenticate(email: string, password: string): Observable<boolean> {
        const successObservable: Observable<boolean> = new Observable<boolean>(
            (observer) => {
                this.http.post(loginUrl, { email: email, password: password }, { responseType: "text" }).subscribe(
                    async (data) => {
                        localStorage.setItem("token", data);
                        observer.next(true);
                    },
                    async (error) => {
                        console.log(error);
                        observer.next(false);
                    }
                );
            }
        );
        return successObservable;
    }

}
