import {Component} from '@angular/core';
import {Auth} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';

@Component({
  selector: 'dashboard',
  templateUrl: '/dashboard/dashboard.component.html',
  styleUrls: ['/dashboard/dashboard.scss'],
  providers: [Auth, AuthGuard]
})
export class DashboardComponent {
  constructor(private auth: Auth) {}

}
