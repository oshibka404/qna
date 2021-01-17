import React from 'react';
import './CreatedQuestions.css';
import Question from './Question';

function CreatedQuestions() {
  const questionList = [
    {
        question: 'How to add a question?',
        answer: 'Just use the form below!',
    }
  ];
  return (
    <div className="CreatedQuestions">
        <h2>Created questions</h2>
        <div className="CreatedQuestions-list">
            {questionList.map(
                (item) => (
                    <Question
                        question={item.question}
                        answer={item.answer}
                    />
                )
            )}
        </div>
        <div className="CreatedQuestions-footer">
          <button>Sort Questions</button>
          <button>Remove Questions</button>
        </div>
    </div>
  );
}

export default CreatedQuestions;
