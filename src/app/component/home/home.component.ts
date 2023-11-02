import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Topic } from 'src/app/model/topic';
import { LoginService } from 'src/app/service/login.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  topics!: Topic[];

  constructor(private oauthService: OAuthService, private topicService: TopicService, private loginService: LoginService) {}


  ngOnInit(): void {
    this.getAllTopicToDisplayInHomePage();
  }

  public login(): void {
    this.loginService.login();
  }

  public logout(): void {
    this.loginService.logout();
  }

  get getAccessToken() {
    let claims: any = this.oauthService.getIdentityClaims();
    // console.log(this.oauthService.getAccessToken())
    return claims ? claims : null;
  }

  public getAllTopicToDisplayInHomePage() {
    this.topicService.getAllTopic().subscribe(
      data => {
        this.topics = data;
        console.log(this.topics);
      }
    )
  }
}
