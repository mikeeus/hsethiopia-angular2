import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../auth/auth.service';

@Component({
  selector: 'Footer',
  templateUrl: './app/footer.html',
  styleUrls: ['./app/footer.scss'],
  providers: [
    Auth
  ]
})
export class Footer {
  constructor(
    private router: Router,
    private auth: Auth
  ) {}

  gotoDashboard() {
    this.router.navigate(['dashboard']);
  }
}
