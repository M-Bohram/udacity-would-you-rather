import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

import classes from "../styles/NavBar.module.css";

class NavBar extends Component {
  state = {
    selectedPage: "",
  };

  componentDidMount() {
    this.props.history.listen((location) => {
      switch (location.pathname) {
        case "/":
          this.setState({ selectedPage: "home" });
          break;
        case "/add":
          this.setState({ selectedPage: "newQuestion" });
          break;
        case "/leaderboard":
          this.setState({ selectedPage: "leaderboard" });
          break;
        default:
          this.setState({ selectedPage: "" });
      }
    });
  }

  handleUserLogout = () => {
    this.props.dispatch(logoutUser());
  };

  changeCurrentPage = (page) => {
    this.setState({ selectedPage: page });
  };

  render() {
    const { authedUser } = this.props;
    return (
      <Fragment>
        <div className={classes.container}>
          <ul className={classes.tabs}>
            <li>
              <Link
                onClick={() => this.changeCurrentPage("home")}
                className={
                  this.state.selectedPage === "home"
                    ? classes.activeTab
                    : classes.navtab
                }
                to="/"
                exact={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => this.changeCurrentPage("newQuestion")}
                className={
                  this.state.selectedPage === "newQuestion"
                    ? classes.activeTab
                    : classes.navtab
                }
                to="/add"
              >
                New Question
              </Link>
            </li>
            <li>
              <Link
                onClick={() => this.changeCurrentPage("leaderboard")}
                className={
                  this.state.selectedPage === "leaderboard"
                    ? classes.activeTab
                    : classes.navtab
                }
                to="/leaderboard"
              >
                Leaderboard
              </Link>
            </li>
          </ul>

          {authedUser && (
            <ul className={classes.auth}>
              <li>
                <div className={classes.info}>
                  <h3 className={classes.name}>Welcome, {authedUser.name}</h3>
                  <img
                    className={classes.avatar}
                    src={
                      require(`../../assets/images/${authedUser.avatarURL}`)
                        .default
                    }
                  />
                </div>
              </li>
              <li>
                <button
                  className={classes.logout}
                  onClick={this.handleUserLogout}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </div>
        <hr />
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
