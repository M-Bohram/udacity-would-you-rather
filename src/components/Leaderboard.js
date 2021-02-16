import React, { Component, Fragment } from "react";
import AuthComponent from "../containers/AuthComponent";
import { connect } from "react-redux";

import "../styles/Leaderboard.css";

function UserBoard({ user }) {
  const { name, avatarURL, answers, questions } = user.user;
  const { points } = user;
  const numberOfAnswers = Object.keys(answers).length;
  const numberOfQuestions = questions.length;

  return (
    <div className="card">
      <div className="author">
        <p className="author__name"> {name}</p>
        <img
          className="author__avatar"
          src={require(`../../assets/images/${avatarURL}`).default}
        />
      </div>
      <div className="info">
        <p className="info__questions">{`No. of asked questions: ${numberOfQuestions}`}</p>
        <p className="info__answers">
          {`No. of answered questions: ${numberOfAnswers}`}
        </p>
      </div>
      <div className="score">
        <p className="score__word">Score</p>
        <p className="score__points">{points}</p>
      </div>
    </div>
  );
}

class Leaderboard extends Component {
  state = {
    users: [],
  };

  evaluateUserPoints = (user) => {
    return user.questions.length + Object.keys(user.answers).length;
  };

  componentDidMount() {
    const { users } = this.props;
    let sortedUsers = [];
    Object.keys(users).forEach((userId) => {
      const user = users[userId];
      sortedUsers.push({
        user: users[userId],
        points: this.evaluateUserPoints(user),
      });
    });
    sortedUsers.sort((user1, user2) => user2.points - user1.points);
    this.setState({ users: sortedUsers });
  }

  render() {
    const { users } = this.state;
    return (
      <AuthComponent>
        <div className="container">
          {users.map((user) => (
            <UserBoard key={user.user.id} user={user} />
          ))}
        </div>
      </AuthComponent>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
