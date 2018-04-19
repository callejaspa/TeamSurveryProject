export class Survey {
    public $key: string;
    public AnswerOne: string;
    public AnswerTwo: string;
    public AnswerThree: string;
    public For: string;

    constructor() {
    }

    public toDto = (): SurveyDto => {
        var dataObject = {
            AnswerOne: this.AnswerOne,
            AnswerTwo: this.AnswerTwo,
            AnswerThree: this.AnswerThree,
            For: this.For,
        };
        console.log(dataObject);
        return dataObject;
    }

    public getKey = (): string => {
        return this.$key;
    }

    public clear = (): void => {
        this.$key = undefined;
        this.AnswerOne = undefined;
        this.AnswerTwo = undefined;
        this.AnswerThree = undefined;
        this.For = undefined;
    }
}

export interface SurveyDto {
    AnswerOne: string;
    AnswerTwo: string;
    AnswerThree: string;
    For: string;
}