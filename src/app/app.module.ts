import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeycloakHttp, keycloakHttpFactory } from './keycloak/keycloak.http';
import { XHRBackend, RequestOptions } from '@angular/http';
import { KeycloakService } from './keycloak/keycloak.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: KeycloakHttp,
      useFactory: keycloakHttpFactory,
      deps: [XHRBackend, RequestOptions, KeycloakService]
   },
   KeycloakService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
