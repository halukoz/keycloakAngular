import { Component } from '@angular/core';
import { KeycloakService } from './keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private keycloakService: KeycloakService) {}

  onLogout() {
    KeycloakService.logout();
    console.log('log out');
  }
}
