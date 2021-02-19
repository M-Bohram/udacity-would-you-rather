import { LOGIN_USER, LOGOUT_USER } from '../actions/auth';
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/question';

const initialState = null;

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, ...action.user };
        case LOGOUT_USER:
            return null;
        case SAVE_QUESTION:
            const { question } = action;
            return {
                ...state,
                questions: [...state.questions, question.id],
            };
        case SAVE_QUESTION_ANSWER:
            const { qid, answer } = action;
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [qid]: answer,
                },
            };
        default:
            return state;
    }
}

export default authReducer;
