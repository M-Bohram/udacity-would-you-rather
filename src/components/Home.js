import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthComponent from '../containers/AuthComponent';
import QuestionList from '../components/QuestionList';

import classes from '../styles/Home.module.css';

class Home extends Component {
    state = {
        showAnswered: false,
    };

    changeQuestionsView = (state) => {
        if (state === 'unanswered') this.setState({ showAnswered: false });
        if (state === 'answered') this.setState({ showAnswered: true });
    };

    render() {
        const { showAnswered } = this.state;
        let { questions } = this.props;
        questions = Object.values(questions);
        questions = questions.sort((q1, q2) => q2.timestamp - q1.timestamp);

        return (
            <AuthComponent>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div
                            className={
                                !showAnswered
                                    ? classes.activeTab
                                    : classes.inactiveTab
                            }
                            onClick={() =>
                                this.changeQuestionsView('unanswered')
                            }
                        >
                            Unanswered Questions
                        </div>
                        <div
                            className={
                                showAnswered
                                    ? classes.activeTab
                                    : classes.inactiveTab
                            }
                            onClick={() => this.changeQuestionsView('answered')}
                        >
                            Answered Questions
                        </div>
                    </div>
                    <div className={classes.separator} />
                    <QuestionList
                        questions={questions}
                        showAnswered={this.state.showAnswered}
                    />
                </div>
            </AuthComponent>
        );
    }
}

function mapStateToProps({ questions }) {
    return {
        questions,
    };
}

export default connect(mapStateToProps)(Home);
