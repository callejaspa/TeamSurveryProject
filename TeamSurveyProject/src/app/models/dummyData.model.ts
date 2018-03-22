export class DummyData {
    public $key: string;
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

    public getKey = (): string => {
        return this.$key;
    }

    public clear = (): void => {
        this.$key = undefined;
        this.FirstName = undefined;
        this.LastName = undefined;
    }
}

export interface DummyDto {
    FirstName: string;
    LastName: string;
}