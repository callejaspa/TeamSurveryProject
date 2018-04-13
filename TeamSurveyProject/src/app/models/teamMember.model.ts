export class TeamMember {
    public FirstName: string;
    public LastName: string;
    public Email: string;

    constructor() {
        
    }

    public toDto = (): TeamMemberDto => {
        var dtoObject = {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
        };
        console.log(dtoObject);
        return dtoObject;
    }

    public clear = (): void => {
        this.FirstName = undefined;
        this.LastName = undefined;
        this.Email = undefined;
    }
}

export interface TeamMemberDto {
    FirstName: string;
    LastName: string;
    Email: string;
}