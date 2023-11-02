import { Injectable } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authConfig: AuthConfig = {
    issuer: 'http://localhost:9090/realms/for-south-app',
    redirectUri: window.location.origin,
    clientId: 'for-south-ui',
    scope: 'openid profile email offline_access',
    dummyClientSecret: 'secret',
    responseType: 'code',
    showDebugInformation: true
  }

  constructor(private oauthService: OAuthService) {
    this.configure();
  }


  public login(): void {
    this.oauthService.initCodeFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public isLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
