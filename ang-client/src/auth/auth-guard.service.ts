import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { Auth }                   from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.authenticated()) { return true; }
    else if (!this.auth.authenticated()) {
      // Navigate to the login page
      this.auth.lock.show();
      return false;
    }
    // Store the attempted URL for redirecting
    // this.auth.redirectUrl = state.url;

    
  }

}
