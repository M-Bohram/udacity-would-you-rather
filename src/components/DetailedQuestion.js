import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/question";
import AuthComponent from "../containers/AuthComponent";

import AnsweredQuestion from "./AnsweredQuestion";
import classes from "../styles/DetailedQuestion.module.css";

class DetailedQuestion extends Component {
  state = {
    radio: null,
    answered: false,
  };

  handleSubmitAnswer = () => {
    const answer = this.state.radio;
    const question = this.props.questions[this.props.match.params.questionId];

    this.props.dispatch(
      handleSaveQuestionAnswer({
        authedUser: this.props.authedUser.id,
        qid: question.id,
        answer,
      })
    );
    this.setState({ answered: true });
  };

  changeRadioValue = (e) => {
    this.setState({ radio: e.target.value });
  };

  render() {
    const questionId = this.props.match.params.questionId;
    const { questions, authedUser, users } = this.props;

    const question = questions[questionId];
    // if (question) {
    const authorObj = question && users[question.author];
    const alreadyAnswered =
      question &&
      authedUser &&
      Object.keys(authedUser.answers).includes(questionId);

    const author = question &&
      authedUser && {
        avatarURL: authorObj.avatarURL,
        name: authorObj.name,
      };
    const options = question && {
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
    };
    const votes = question && {
      optionOne: question.optionOne.votes.length,
      optionTwo: question.optionTwo.votes.length,
    };
    const userVote =
      question && alreadyAnswered
        ? authedUser.answers[questionId]
        : this.state.radio;
    // } else {

    // }

    return (
      <AuthComponent>
        {!question && (
          <div className={classes.emptyContainer}>
            <h3 className={classes.emptyTitle}>Error 404</h3>
            <p className={classes.emptySubtitle}>
              Sorry, This question is not found!
            </p>
          </div>
        )}
        {question &&
          (this.state.answered || alreadyAnswered ? (
            <div className={classes.answerContainer}>
              <AnsweredQuestion
                author={author}
                options={options}
                votes={votes}
                userVote={userVote}
              />
            </div>
          ) : (
            <div className={classes.container}>
              <p className={classes.header}>
                <span className={classes.headerName}>
                  {question && author && author.name}
                </span>{" "}
                asks ...
              </p>
              <div className={classes.body}>
                <img
                  className={classes.avatar}
                  src={
                    question &&
                    author &&
                    require(`../../assets/images/${author.avatarURL}`).default
                  }
                />
                <div className={classes.form}>
                  <div className={classes.inputGroup}>
                    <input
                      id="optionOne"
                      name="poll"
                      type="radio"
                      value="optionOne"
                      className={classes.formInput}
                      onChange={this.changeRadioValue}
                    />
                    <label className={classes.formLabel} htmlFor="optionOne">
                      {question.optionOne.text}
                    </label>
                  </div>
                  <br />
                  <div className={classes.inputGroup}>
                    <input
                      id="optionTwo"
                      name="poll"
                      type="radio"
                      value="optionTwo"
                      className={classes.formInput}
                      onChange={this.changeRadioValue}
                    />
                    <label className={classes.formLabel} htmlFor="optionTwo">
                      {question.optionTwo.text}
                    </label>
                  </div>
                  <br />
                  <button
                    className={classes.button}
                    onClick={this.handleSubmitAnswer}
                    disabled={this.state.radio ? false : true}
                  >
                    Answer
                  </button>
                </div>
              </div>
            </div>
          ))}
      </AuthComponent>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return { authedUser, users, questions };
}

export default connect(mapStateToProps)(DetailedQuestion);
