import React, { useState } from 'react';
import classNames from "classnames";
import { deleteQuestion } from '../../store/questionsSlice';
import './Question.css';
import { useDispatch } from 'react-redux';

function Question(props: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  return (
    <article 
      className={classNames('Question', {
        'Question--expanded': isExpanded,
      })}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="Question-question">
        <div className="Question-questionText">
          — {props.question}
        </div>
        <button className="Question-delete" onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteQuestion(props.id))
        }}>✖</button>
      </div>
      <div className="Question-answer">
        — {props.answer}
      </div>
    </article>
  );
}

interface QuestionProps {
    question: string;
    answer: string;
    id: number;
}

export default Question;
