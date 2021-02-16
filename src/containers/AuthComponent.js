import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import SignIn from "../components/SignIn";

class AuthComponent extends Component {
  render() {
    const { authedUser, children } = this.props;
    return authedUser == null ? <SignIn /> : <Fragment>{children}</Fragment>;
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(AuthComponent);
