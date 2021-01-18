import React, { useState } from 'react';
import classNames from "classnames";
import { deleteQuestion } from '../../store/questionsSlice';
import './Question.css';
import { useDispatch } from 'react-redux';
import EditingQuestion from './EditingQuestion';

function Question(props: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  return isEditing 
      ? (
        <EditingQuestion 
          {...props}
          setIsEditing={setIsEditing} 
        />
      ) : (
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
              
            <button
              className="Question-edit"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >✎</button>
            <button className="Question-delete" onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteQuestion(props.id));
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
