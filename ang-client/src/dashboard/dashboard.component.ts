import {Component} from '@angular/core';
import {Auth} from '../auth/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: '/dashboard/dashboard.component.html',
  styleUrls: ['/dashboard/dashboard.scss'],
  providers: [Auth]
})
export class DashboardComponent {
  constructor(private auth: Auth) {}

}
