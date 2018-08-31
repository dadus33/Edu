import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service'
import { Base64Util } from '../../shared/utils/base64.util';
@Injectable()
export class AuthRouteGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
        
    }

    canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(["/login"], { queryParams: { "from": Base64Util.toBase64Url(window.location.pathname) } });
            return false;
        }
        return true;
    }

}
