import { GET_USERS } from '../actions/user';
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/question';

const initialState = {};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, ...action.users };
        case SAVE_QUESTION:
            const { question } = action;
            const { author } = question;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, question.id],
                },
            };
        case SAVE_QUESTION_ANSWER:
            const { qid, answer } = action;
            const authUser = action.authedUser;
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [qid]: answer,
                    },
                },
            };
        default:
            return state;
    }
}

export default userReducer;
