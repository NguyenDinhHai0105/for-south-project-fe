import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../model/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl = "http://localhost:8080/api/v1/topic";

  constructor(private httpClient: HttpClient) {}

  public getAllTopic(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  public addTopic(topic: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(this.baseUrl, topic);
  }
}
