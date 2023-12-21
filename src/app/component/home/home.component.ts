import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OAuthService } from 'angular-oauth2-oidc';
import { Topic } from 'src/app/model/topic';
import { LoginService } from 'src/app/service/login.service';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics!: Topic[];

  constructor(private topicService: TopicService, private router: Router, private loginService: LoginService, private oauth: OAuthService) { }

  title = 'angular';

  ngOnInit(): void {
    this.getAllTopicToDisplayInHomePage();
  }

  public getAllTopicToDisplayInHomePage() {
    this.topicService.getAllTopic().subscribe(
      data => {
        this.topics = data;
      }
    )
  }

  get isAdmin() {
    return this.loginService.checkRoles;
  }




  // goToTechnolygy(id: string) {
  //   this.router.navigate(['technology']);
  // }
}
