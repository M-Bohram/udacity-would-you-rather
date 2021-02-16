import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/BriefQuestion.module.css";

function BriefQuestion({ author, optionOne, questionId }) {
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
          <p className={classes.optionOne}>
            .............. {optionOne}.............
          </p>
          <Link
            className={classes.questionButton}
            to={`/question/${questionId}`}
          >
            View Poll
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BriefQuestion;
