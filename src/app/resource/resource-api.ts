export class ResourceApi {

    public static readonly BASE_URL: string = 'http://localhost:8080';
    public static readonly TOPIC_URL: string = this.BASE_URL + '/api/v1/topics';
    
    //Technology api
    public static readonly TECHNOLOGY_URL: string = this.BASE_URL + '/api/v1/technologies';
    public static readonly TECHNOLOGY_OF_TOPIC_URL: string = this.TECHNOLOGY_URL + '/technologies-by-topic-id';

    //Catalogue api
    public static readonly CATALOGUE_URL: string = this.BASE_URL + '/api/v1/catalogues';
    public static readonly GET_CATALOGUE_BY_ID_URL: string = this.BASE_URL + '/api/v1/catalogues';
    public static readonly GET_CATALOGUES_BY_TECHNOLOGY_ID_URL: string = this.CATALOGUE_URL + '/get-catalogues-of-a-topic';
    public static readonly GET_TITLE_AND_ID_OF_CATALOGUES_BY_TECHNOLOGY_ID_URL: string = this.CATALOGUE_URL + '/get-title-and-id-of-catalogues-of-a-topic';

}
