interface Question {
    _id: string,
    question: string,
    options: string[],
}
interface Answer {
    _id: string,
    question: string,
    selectedAns: string,
    isCorrect: boolean
}
interface SubmittedData {
    score: number,
    step: number,
    data: Answer[]
}