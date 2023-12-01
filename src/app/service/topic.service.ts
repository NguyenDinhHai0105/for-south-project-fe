import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../model/topic';
import { ResourceApi } from '../resource/resource-api';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient: HttpClient) {}

  public getAllTopic(): Observable<any> {
    return this.httpClient.get<any>(ResourceApi.TOPIC_URL);
  }

  public addTopic(topic: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(ResourceApi.TOPIC_URL, topic);
  }
}
