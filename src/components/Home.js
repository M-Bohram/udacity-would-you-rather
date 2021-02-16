import React, { Component } from "react";
import { connect } from "react-redux";
import AuthComponent from "../containers/AuthComponent";
import QuestionList from "../components/QuestionList";

import classes from "../styles/Home.module.css";

class Home extends Component {
  state = {
    showAnswered: false,
  };

  changeQuestionsView = (state) => {
    if (state == "unanswered") this.setState({ showAnswered: false });
    if (state == "answered") this.setState({ showAnswered: true });
  };

  render() {
    const { authedUser, questions, users } = this.props;
    const { showAnswered } = this.state;
    console.log(questions);
    return (
      <AuthComponent>
        <div className={classes.container}>
          <div className={classes.header}>
            <div
              className={
                !showAnswered ? classes.activeTab : classes.inactiveTab
              }
              onClick={() => this.changeQuestionsView("unanswered")}
            >
              Unanswered Questions
            </div>
            <div
              className={showAnswered ? classes.activeTab : classes.inactiveTab}
              onClick={() => this.changeQuestionsView("answered")}
            >
              Answered Questions
            </div>
          </div>
          <div className={classes.separator} />
          <QuestionList
            authedUser={authedUser}
            questions={questions}
            users={users}
            showAnswered={this.state.showAnswered}
          />
        </div>
      </AuthComponent>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
