import { Survey } from "./Survey.model";

export class Team {
    public Name: string;
    public Instructor: string;
    public Course: string;
    public Semester: string;

    public SurveysTotal: number;
    public SurveysComplete: number;

    public Surveys: Array<Survey>

    constructor() {
        
    }

    public toDto = (): TeamDto => {
        var dtoObject = {
            Name: this.Name,
            Instructor: this.Instructor,
            Course: this.Course,
            Semester: this.Semester,
            SurveysTotal: this.SurveysTotal,
            SurveysComplete: this.SurveysComplete,
            Surveys: this.Surveys
        };
        console.log(dtoObject);
        return dtoObject;
    }

    public clear = (): void => {
        this.Name = undefined;
        this.Instructor = undefined;
        this.Course = undefined;
        this.Semester = undefined;
        this.SurveysTotal = undefined;
        this.SurveysComplete = undefined;
        this.Surveys = undefined;
    }
}

export interface TeamDto {
    Name: string;
    Instructor: string;
    Course: string;
    Semester: string;
    SurveysTotal: number;
    SurveysComplete: number;
    Surveys: Array<Survey>
}
