import { Survey, SurveyDto } from "./Survey.model";

export class DummyData {
    public $key: string;
    public Name: string;
    public Number: string;
    public Survey: Survey;

    // public Question1A: string;
    // public Question1B: string;
    // public Question1C: string;
    // public Question1D: string;
    // public Question1E: string;
    // public Question1F: string;
    // public Question2: string;
    // public Question3: string;

    constructor(survey: Survey) {
        this.Survey = survey;
    }

    public toDto = (): DummyDto => {
        var dtoObject = {
            Name: this.Name,
            Number: this.Number,
            Survey: this.Survey.toDto()

            // Question1A: this.Question1A,
            // Question1B: this.Question1B,
            // Question1C: this.Question1C,
            // Question1D: this.Question1D,
            // Question1E: this.Question1E,
            // Question1F: this.Question1F,
            // Question2: this.Question2,
            // Question3: this.Question3
        };
        console.log(dtoObject);
        return dtoObject;
    }

    public getKey = (): string => {
        return this.$key;
    }

    public clear = (): void => {
        this.$key = undefined;
        this.Name = undefined;
        this.Number = undefined;
        this.Survey = undefined;

        // this.Question1A = undefined;
        // this.Question1B = undefined;
        // this.Question1C = undefined;
        // this.Question1D = undefined;
        // this.Question1E = undefined;
        // this.Question1F = undefined;
        // this.Question2 = undefined;
        // this.Question3 = undefined;
    }
}

export interface DummyDto {
    Name: string;
    Number: string;
    Survey: SurveyDto;

    // Question1A: string;
    // Question1B: string;
    // Question1C: string;
    // Question1D: string;
    // Question1E: string;
    // Question1F: string;
    // Question2: string;
    // Question3: string;
}