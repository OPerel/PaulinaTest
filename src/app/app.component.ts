import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PaulinaTest';
  isAuthenticated: boolean;

  constructor(private auth: AuthService) {
    this.auth.authState(); // Subscribe to authentication state changes
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.auth.getIsAuthenticated();
    if (this.isAuthenticated) {
      this.auth.sessionId();
    }
  }
}
