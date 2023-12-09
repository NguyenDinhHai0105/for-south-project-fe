import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../model/catalogue';
import { ResourceApi } from '../resource/resource-api';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient: HttpClient) { }

  public getTitleAndIdOfCataloguesOfATechnology(technologyId: string): Observable<any> {
    return this.httpClient.get<any>(`${ResourceApi.GET_TITLE_AND_ID_OF_CATALOGUES_BY_TECHNOLOGY_ID_URL}/${technologyId}`);
  }

  public getCataloguesOfATechnology(technologyId: string): Observable<any> {
    return this.httpClient.get<any>(`${ResourceApi.GET_CATALOGUES_BY_TECHNOLOGY_ID_URL}/${technologyId}`);
  }

  public getCatalogueById(catalogueId: string): Observable<any> {
    return this.httpClient.get<any>(`${ResourceApi.GET_CATALOGUE_BY_ID_URL}/${catalogueId}`)
  }
}
