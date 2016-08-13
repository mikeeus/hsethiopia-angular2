import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  options: any = {
    closable: false,
    allowedConnections: ['Username-Password-Authentication'],
    allowSignUp: false,
    auth: {
      redirect: true,
      redirectUrl: ''
    }
  }
  // configure Auth0
  lock = new Auth0Lock('wDsjnBtQyiyBzWolgHIv9BXg8Ek9tL4X', 
                       'mikeeus.auth0.com', this.options);
  constructor(private router: Router) {
    // Add callback for lock 'authenticated' event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.router.navigate(['dashboard']);
    });
  }
  
  public login() {
    // call the show method to display the widget
    this.lock.show();
  }

  public authenticated() {
    // Check if there is expired JWT
    // This searches for item in local storage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // remove token from local storage
    localStorage.removeItem('id_token');
    this.router.navigate(['']);
  }

}