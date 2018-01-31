import { Component } from '@angular/core';
import { KeycloakService } from './keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  constructor(private keycloakService: KeycloakService) {}

  onLogout() {
    KeycloakService.logout();
  }

  getUserName() {
    this.message = KeycloakService.getFullName();
  }

  getTokenParsed() {
    this.message = JSON.stringify(KeycloakService.getTokenParsed());
  }
}
