import * as API from "../_DATA";

const GET_QUESTIONS = "GET_QUESTIONS";
const SAVE_QUESTION = "SAVE_QUESTION";
const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function handleGetQuestions() {
  return (dispatch) => {
    API._getQuestions().then((questions) => {
      dispatch(getQuestions(questions));
    });
  };
}

function handleSaveQuestion(question) {
  return (dispatch) => {
    API._saveQuestion(question).then((_question) => {
      dispatch(saveQuestion(_question));
    });
  };
}

function handleSaveQuestionAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    API._saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveQuestionAnswer({ authedUser, qid, answer }));
    });
  };
}

export { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER };
export { handleGetQuestions, handleSaveQuestion, handleSaveQuestionAnswer };
