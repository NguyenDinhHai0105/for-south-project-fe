export class Topic {
    
    id!: string;
    name!: string;
    description!: string;
    createdDate!: any;
    lastModifiedDate!: any;

    constructor(id: string, name: string, createdDate: any, lastModifiedDate: any) {
        this.id = id;
        this.name = name;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
    }

}
