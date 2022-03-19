import { submitTypes } from '../types';

export const submitAnswer = (payload: SubmittedData) => {
    return {
        type: submitTypes.SUBMIT,
        payload
    };
}
export default submitAnswer;