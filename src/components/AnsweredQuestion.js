import React, { Component } from "react";

import classes from "../styles/AnsweredQuestion.module.css";

function AnsweredQuestion({ author, options, votes, userVote }) {
  const totalVotes = votes.optionOne + votes.optionTwo;
  const optionOneVotesPercentage = Number(
    (votes.optionOne / totalVotes) * 100
  ).toFixed(2);
  const optionTwoVotesPercentage = Number(
    100 - optionOneVotesPercentage
  ).toFixed(2);

  return (
    <div className={classes.container}>
      <p className={classes.header}>
        <span className={classes.headerName}>{author.name}</span> asks ...
      </p>
      <div className={classes.infoContainer}>
        <img
          className={classes.avatar}
          src={require(`../../assets/images/${author.avatarURL}`).default}
        />
        <div className={classes.questionContainer}>
          <h3>Would you rather ...</h3>
          <div className={classes.optionContainer}>
            <div
              className={
                userVote === "optionOne" ? classes.answer : classes.option
              }
            >
              <p>{options.optionOne}</p>
            </div>
            <div className={classes.data}>
              <p>{`${votes.optionOne} Votes`}</p>
              <p>{`${optionOneVotesPercentage}%`}</p>
            </div>
          </div>
          <div className={classes.optionContainer}>
            <div
              className={
                userVote === "optionTwo" ? classes.answer : classes.option
              }
            >
              <p>{options.optionTwo}</p>
            </div>
            <div className={classes.data}>
              <p>{`${votes.optionTwo} Votes`}</p>
              <p>{`${optionTwoVotesPercentage}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
