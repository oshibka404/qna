import React, { useState } from 'react';
import classNames from "classnames";
import './Question.css';

function Question(props: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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
        <button className="Question-delete">✖</button>
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
