export class Survey {
    public $key: string;
    public Question1A: string;
    public Question1B: string;
    public Question1C: string;
    public Question1D: string;
    public Question1E: string;
    public Question1F: string;
    public Question2: string;
    public Question3: string;

    constructor() {
    }

    public toDto = (): SurveyDto => {
        var dataObject = {
            Question1A: this.Question1A,
            Question1B: this.Question1B,
            Question1C: this.Question1C,
            Question1D: this.Question1D,
            Question1E: this.Question1E,
            Question1F: this.Question1F,
            Question2: this.Question2,
            Question3: this.Question3
        };
        console.log(dataObject);
        return dataObject;
    }

    public getKey = (): string => {
        return this.$key;
    }

    public clear = (): void => {
        this.$key = undefined;
        this.Question1A = undefined;
        this.Question1B = undefined;
        this.Question1C = undefined;
        this.Question1D = undefined;
        this.Question1E = undefined;
        this.Question1F = undefined;
        this.Question2 = undefined;
        this.Question3 = undefined;
    }
}

export interface SurveyDto {
    Question1A: string;
    Question1B: string;
    Question1C: string;
    Question1D: string;
    Question1E: string;
    Question1F: string;
    Question2: string;
    Question3: string;
}