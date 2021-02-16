import { Component } from "react";
import { connect } from "react-redux";

import { loginUser } from "../actions/auth";

import classes from "../styles/SignIn.module.css";

class SignIn extends Component {
  state = {
    selectedUser: null,
  };

  handleChangeUser = (e) => {
    const selectedOption = e.target.value;
    const selectedUserObj = this.props.users[selectedOption];
    this.setState({ selectedUser: selectedUserObj });
  };

  handleSignIn = () => {
    this.props.dispatch(loginUser(this.state.selectedUser));
  };

  render() {
    const { users } = this.props;

    return (
      <div className={classes.container}>
        <h3 className={classes.title}>Welcome to Would You Rather ...</h3>
        <p className={classes.subtitle}>Please select a user to sign in</p>
        <div className={classes.form}>
          <select
            className={classes.select}
            value={this.state.userState}
            onChange={this.handleChangeUser}
          >
            <option className={classes.option} value="" hidden>
              select a user
            </option>
            {Object.keys(users).map((userId) => (
              <option key={users[userId].id} value={users[userId].id}>
                {users[userId].name}
              </option>
            ))}
          </select>
          <button
            className={classes.button}
            onClick={this.handleSignIn}
            disabled={this.state.selectedUser ? false : true}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(SignIn);
