import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}



  public getAllTopic(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/api/v1/topic');
  }
}
