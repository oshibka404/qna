import React from 'react';
import './CreatedQuestions.css';
import EmptyQuestionList from './EmptyQuestionList/EmptyQuestionList';
import QuestionList, { QuestionData } from './QuestionList/QuestionList';

function CreatedQuestions() {
  const questions: QuestionData[] = [
    {
      question: 'How to add a question?',
      answer: 'Just use the form below!',
    }
  ];
  return (
    <div className="CreatedQuestions">
        <h2>Created questions</h2>
        {
          questions.length > 0
            ? <QuestionList questions={questions}/>
            : <EmptyQuestionList />
        }
        <div className="CreatedQuestions-footer">
          <button>Sort Questions</button>
          <button>Remove Questions</button>
        </div>
    </div>
  );
}

export default CreatedQuestions;
