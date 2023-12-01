import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceApi } from '../resource/resource-api';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private httpClient: HttpClient) { }

  public getAllTechnologiesOfTopic(id: string): Observable<any> {
    return this.httpClient.get<any>(`${ResourceApi.TECHNOLOGY_OF_TOPIC_URL}/${id}` );
  }

  public deleteByTechnologyId(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${ResourceApi.TECHNOLOGY_URL}?technologyId=${id}`);
  }

}
