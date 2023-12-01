export class ResourceApi {

    public static readonly BASE_URL: string = 'http://localhost:8080';
    public static readonly TOPIC_URL: string = this.BASE_URL + '/api/v1/topics';
    public static readonly TECHNOLOGY_URL: string = this.BASE_URL + '/api/v1/technologies';
    public static readonly TECHNOLOGY_OF_TOPIC_URL: string = this.TECHNOLOGY_URL + '/technologies-by-topic-id';

}
