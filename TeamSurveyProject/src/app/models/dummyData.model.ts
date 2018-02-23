export class DummyData {
    public FirstName: string;
    public LastName: string;

    constructor(obj?: any) {
        console.log(obj);
        this.FirstName = obj && obj.firstName || "";
        this.LastName = obj && obj.lastName || "";
    }

    public toDto = (): DummyDto => {
        return {
            FirstName: this.FirstName,
            LastName: this.LastName
        }
    }
}

export interface DummyDto {
    FirstName: string;
    LastName: string;
}