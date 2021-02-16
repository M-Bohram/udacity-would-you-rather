import {
  GET_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/question";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };
    case SAVE_QUESTION:
      const { question } = action;
      return { ...state, [question.id]: question };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      console.log(state);
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
