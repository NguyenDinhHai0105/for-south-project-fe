import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from 'src/app/model/technology';
import { LoginService } from 'src/app/service/login.service';
import { TechnologyService } from 'src/app/service/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{
  
  topicId!: string;
  technologies!: Technology[];

  constructor(private loginService: LoginService, private route: ActivatedRoute, private technologyService: TechnologyService, private router: Router) {};

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.topicId = this.route.snapshot.params['id'];
    this.getTechnology();
  }

  public getTechnology() {
    this.technologyService.getAllTechnologiesOfTopic(this.topicId).subscribe(
      data => {
        this.technologies = data;
        console.log(data);
      })
  }

  get isAdmin() {
    return this.loginService.checkRoles;
  }

  public deleteTechnologyById(id: string) {
    this.technologyService.deleteByTechnologyId(id).subscribe(
      data => {
        this.getTechnology();
      }
    );
  }

}
