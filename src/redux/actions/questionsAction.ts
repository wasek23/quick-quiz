import { questionsTypes } from '../types';

export const initialQuestions = (payload: Question[]) => {
    return {
        type: questionsTypes.INITIAL,
        payload
    };
}
export default initialQuestions;