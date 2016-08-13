import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'Footer',
  templateUrl: './app/footer.html',
  styleUrls: ['./app/footer.scss']
})
export class Footer {
  constructor(private router: Router) {}

  gotoDashboard() {
    this.router.navigate(['dashboard']);
  }
}
