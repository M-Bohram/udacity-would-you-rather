import React, { Component } from "react";

import AnsweredQuestion from "./AnsweredQuestion";
import BriefQuestion from "./BriefQuestion";

class Question extends Component {
  render() {
    const { showAnswered, question, authedUser, users } = this.props;

    const { avatarURL, name } = users[question.author];
    const author = { avatarURL, name };
    const options = {
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
    };
    const votes = {
      optionOne: question.optionOne.votes.length,
      optionTwo: question.optionTwo.votes.length,
    };
    const userVote = question.optionOne.votes.includes(authedUser.id)
      ? "optionOne"
      : "optionTwo";

    return showAnswered ? (
      <BriefQuestion
        author={author}
        optionOne={options.optionOne}
        questionId={question.id}
      />
    ) : (
      <BriefQuestion
        author={author}
        optionOne={options.optionOne}
        questionId={question.id}
      />
    );
  }
}

export default Question;
