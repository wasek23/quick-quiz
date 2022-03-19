import { questionsTypes, questionsType } from '../types';

const questionsReducer = (state: Question[] = [], action: questionsType) => {
    switch (action.type) {
        case questionsTypes.INITIAL:
            return action.payload;
        default:
            return state;
    }
}
export default questionsReducer;