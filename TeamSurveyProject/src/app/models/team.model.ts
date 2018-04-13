export class Team {
    Course: string;
    Instructor: string;
    Name: string;
    Semester: string;

    constructor() {

    }

    public toDto = (): TeamDto => {
        var dtoObject = {
            Name: this.Name,
            Instructor: this.Instructor,
            Course: this.Course,
            Semester: this.Semester
        };
        console.log(dtoObject);
        return dtoObject;
    }

    public clear = (): void => {
        this.Name = undefined;
        this.Instructor = undefined;
        this.Course = undefined;
        this.Semester = undefined;
    }
}

export interface TeamDto {
    Name: string;
    Instructor: string;
    Course: string;
    Semester: string;
}
