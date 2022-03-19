// Initial Question
export enum questionsTypes {
    INITIAL = 'INITIAL'
}
interface InitialQuestions {
    type: questionsTypes.INITIAL,
    payload: Question[]
}
export type questionsType = InitialQuestions;

// Submit
export enum submitTypes {
    SUBMIT = 'SUBMIT'
}
interface submit {
    type: submitTypes.SUBMIT,
    payload: Answer[]
}
export type submitType = submit;