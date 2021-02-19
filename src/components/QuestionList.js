import React from 'react';

import Question from './Question';

const QuestionList = ({ questions, showAnswered }) => {
    return questions.map((question) => (
        <Question
            key={question.id}
            questionId={question.id}
            showAnswered={showAnswered}
        />
    ));
};

export default QuestionList;
