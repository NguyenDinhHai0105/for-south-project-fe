export class Topic {
    
    id!: string;
    name!: string;
    description!: string;
    technologyIds!: Array<string>;
    createdDate!: any;
    lastModifiedDate!: any;

    constructor(id: string, name: string, technologyIds: Array<string>, createdDate: any, lastModifiedDate: any) {
        this.id = id;
        this.name = name;
        this.technologyIds = technologyIds;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
    }

}
