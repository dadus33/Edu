import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Base64Util } from '../utils/base64.util';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private currentRoute: ActivatedRoute) {
    }

    previousLocation: string = "";

    responseString: string = '';

    email: string = '';
    password: string = '';

    canLogin(): boolean {
        if (!this.password || !this.email) {
            return false;
        }
        return true;
    }

    login() {
        this.responseString = "Logging you in...";
        this.authService.tryAuthenticate(this.email, this.password)
            .subscribe(
                (success) => {
                    if (success) {
                        this.responseString = "Successfull login!";
                        this.goToPreviousPage();
                        return;
                    }

                    this.responseString = "Invalid username or password!";
                    this.email = "";
                    this.password = "";
                }
            );
    }


    ngOnInit() {
        this.previousLocation = this.currentRoute.snapshot.queryParamMap.get("from");

        if (!this.previousLocation) {
            this.previousLocation = "";
        }

        this.previousLocation = Base64Util.fromBase64Url(this.previousLocation);

        if (this.authService.isAuthenticated()) {
            this.goToPreviousPage();
        }
    }
    

    goToPreviousPage() {
        this.router.navigate([this.previousLocation]);
    }


}
