export class Team {
<<<<<<< HEAD
    Course: string;
    Instructor: string;
    Name: string;
    Semester: string;

    constructor() {

=======
    public Name: string;
    public Instructor: string;
    public Course: string;
    public Semester: string;

    constructor() {
        
>>>>>>> master
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
<<<<<<< HEAD
}
=======
}
>>>>>>> master
