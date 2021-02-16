import React, { Component, Fragment } from "react";
import question from "../reducers/question";

import Question from "./Question";

class QuestionList extends Component {
  render() {
    const { authedUser, questions, users, showAnswered } = this.props;
    // console.log("authedUser", authedUser);
    // console.log("questions", questions);
    // console.log("users", users);
    const questionsKeys = Object.keys(questions);
    return (
      <Fragment>
        {questionsKeys.map((questionId) => {
          const hasAnswered = Object.keys(authedUser.answers).includes(
            questionId
          );
          if (showAnswered && hasAnswered) {
            return (
              <Question
                showAnswered
                question={questions[questionId]}
                users={users}
                authedUser={authedUser}
                key={questionId}
              />
            );
          } else if (!showAnswered && !hasAnswered) {
            return (
              <Question
                question={questions[questionId]}
                users={users}
                authedUser={authedUser}
                key={questionId}
              />
            );
          }
        })}
      </Fragment>
    );
  }
}

export default QuestionList;
