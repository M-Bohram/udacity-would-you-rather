import React, { Component } from "react";
import AuthComponent from "../containers/AuthComponent";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/question";
import AnsweredQuestion from "./AnsweredQuestion";
import classes from "../styles/NewQuestion.module.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    submitted: false,
  };

  submitNewQuestion = () => {
    let optionOneText = this.state.optionOne;
    let optionTwoText = this.state.optionTwo;
    let author = this.props.authedUser.id;
    this.props.dispatch(
      handleSaveQuestion({ optionOneText, optionTwoText, author })
    );
    this.setState({ submitted: true });
  };

  handleChange = (e, option) => {
    if (option === "one") this.setState({ optionOne: e.target.value });
    if (option === "two") this.setState({ optionTwo: e.target.value });
  };
  render() {
    return (
      <AuthComponent>
        <div className={classes.container}>
          <h2 className={classes.title}>Create New Question</h2>
          <p className={classes.subtitle}>Would you rather ...</p>
          <div className={classes.form}>
            <input
              type="text"
              className={classes.input}
              placeholder="Enter Option One Text Here"
              onChange={(e) => this.handleChange(e, "one")}
              value={this.state.optionOne}
            />
            <p className={classes.separator}>_______ OR _______</p>
            <input
              type="text"
              className={classes.input}
              placeholder="Enter Option Two Text Here"
              onChange={(e) => this.handleChange(e, "two")}
              value={this.state.optionTwo}
            />
            <button className={classes.button} onClick={this.submitNewQuestion}>
              Submit
            </button>
          </div>
        </div>
      </AuthComponent>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(NewQuestion);
