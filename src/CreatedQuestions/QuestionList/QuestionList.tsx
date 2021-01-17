import React from 'react';
import { QuestionData } from '../../store/questionsSlice';
import Question from '../Question/Question';

function QuestionList(props: QuestionListProps) {
  return <div className="CreatedQuestions-list">
    {props.questions.map(
      (item) => <Question key={item.id} {...item}/>
    )}
  </div>
}

interface QuestionListProps {
  questions: QuestionData[];
}

export default QuestionList;
