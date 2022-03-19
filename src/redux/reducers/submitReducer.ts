import { submitTypes, submitType } from '../types';

const submitReducer = (state: SubmittedData = {
    score: 0,
    step: 1,
    data: []
}, action: submitType) => {
    switch (action.type) {
        case submitTypes.SUBMIT:
            return action.payload;
        default:
            return state;
    }
}
export default submitReducer;