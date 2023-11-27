import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from 'src/app/service/login.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private oauthService: OAuthService, private loginService: LoginService) {}

  public login(): void {
    this.loginService.login();
  }

  public logout(): void {
    this.loginService.logout();
  }

  get getAccessToken() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

}
