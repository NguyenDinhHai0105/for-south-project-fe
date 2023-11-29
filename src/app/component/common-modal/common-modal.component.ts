import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/model/topic';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent {
  topic: Topic = new Topic();

  constructor(private topicService: TopicService, private router: Router) {}

  saveTopic() {
    this.topicService.addTopic(this.topic).subscribe(
      data => {
        console.log(data);
        this.goToTopicList();
      }
    ),
    console.error();        
  }

  goToTopicList() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.saveTopic();
    // this.router.navigate(['/home']);
  }
}
