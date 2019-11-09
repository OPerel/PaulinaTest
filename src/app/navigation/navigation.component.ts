import { Component, Input } from '@angular/core';
import { AuthService  } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() userEmail: string;

  constructor(private auth: AuthService) {}

  async logout() {
    this.auth.logout();
  }
}
