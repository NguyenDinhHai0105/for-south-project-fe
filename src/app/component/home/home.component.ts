import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OAuthService } from 'angular-oauth2-oidc';
import { Topic } from 'src/app/model/topic';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics!: Topic[];

  constructor(private topicService: TopicService, private router: Router, private oauthService: OAuthService, private jwtHelper: JwtHelperService) { }


  ngOnInit(): void {
    this.getAllTopicToDisplayInHomePage();
  }

  public getAllTopicToDisplayInHomePage() {
    this.topicService.getAllTopic().subscribe(
      data => {
        this.topics = data;
        console.log(this.topics);
      }
    )
  }

  get admin () {
    const token = this.oauthService.getAccessToken();
    const claims = this.jwtHelper.decodeToken(token);
    const roles = claims['realm_access'];
    const elements: string[] = roles['roles'];
    const adminIndex1: number = elements.indexOf('admin');
    if (adminIndex1 !== -1) {
      return true;
    } else {
      return false;
    }
  }



  // goToTechnolygy(id: string) {
  //   this.router.navigate(['technology']);
  // }
}
