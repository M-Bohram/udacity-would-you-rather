import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

import classes from '../styles/NavBar.module.css';

class NavBar extends Component {
    handleUserLogout = () => {
        this.props.dispatch(logoutUser());
    };

    render() {
        const { authedUser } = this.props;
        return (
            <Fragment>
                <div className={classes.container}>
                    <ul className={classes.tabs}>
                        <li>
                            <NavLink
                                to="/"
                                activeClassName={classes.activeTab}
                                exact
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/add"
                                activeClassName={classes.activeTab}
                                exact
                            >
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/leaderboard"
                                activeClassName={classes.activeTab}
                                exact
                            >
                                Leaderboard
                            </NavLink>
                        </li>
                    </ul>

                    {authedUser && (
                        <ul className={classes.auth}>
                            <li>
                                <div className={classes.info}>
                                    <h3 className={classes.name}>
                                        Welcome, {authedUser.name}
                                    </h3>
                                    <img
                                        alt="author avatar"
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
