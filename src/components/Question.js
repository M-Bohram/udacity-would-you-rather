import React, { Component } from 'react';
import { connect } from 'react-redux';
import BriefQuestion from './BriefQuestion';

class Question extends Component {
    render() {
        const {
            authedUser,
            questions,
            users,
            questionId,
            showAnswered,
        } = this.props;
        const question = questions[questionId];
        const { avatarURL, name } = users[question.author];
        const author = { avatarURL, name };
        const optionOne = question.optionOne.text;
        return (
            Object.keys(authedUser.answers).includes(questionId) ===
                showAnswered && (
                <BriefQuestion
                    author={author}
                    optionOne={optionOne}
                    questionId={questionId}
                />
            )
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

export default connect(mapStateToProps)(Question);
