import React from 'react';
import Question from '../Question/Question';

function QuestionList(props: QuestionListProps) {
  return <div className="CreatedQuestions-list">
    {props.questions.map(
      (item) => <Question {...item}/>
    )}
  </div>
}

interface QuestionListProps {
  questions: QuestionData[];
}

export interface QuestionData {
  question: string;
  answer: string;
}

export default QuestionList;
