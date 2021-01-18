import React, { useState } from 'react';
import classNames from "classnames";
import { deleteQuestion, edit } from '../../store/questionsSlice';
import './Question.css';
import { useDispatch } from 'react-redux';

function Question(props: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [unsavedQuestion, setUnsavedQuestion] = useState(props.question);
  const [unsavedAnswer, setUnsavedAnswer] = useState(props.answer);
  const dispatch = useDispatch();
  return (
    <article 
      className={classNames('Question', {
        'Question--expanded': isExpanded,
        'Question--editing': isEditing,
      })}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="Question-question">
        <div className="Question-questionText">
          {
            isEditing 
              ? (
                <input 
                  value={unsavedQuestion}
                  onChange={(e) => setUnsavedQuestion(e.target.value)} 
                />
              ) : `— ${props.question}`
          }
        </div>
        {
          isEditing
            ? (
              <button
                className="Question-save"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(edit({
                    id: props.id,
                    question: unsavedQuestion,
                    answer: unsavedAnswer,
                  }))
                  setIsEditing(false);
                }}
              >✓</button>
            ) : (
              <button
                className="Question-edit"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
              >✎</button>
            )
        }
        {
          isEditing 
            ? <button className="Question-undo" onClick={(e) => {
              e.stopPropagation();
              setIsEditing(false);
              setUnsavedQuestion(props.question);
              setUnsavedAnswer(props.answer);
            }}>⎌</button>
            : <button className="Question-delete" onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteQuestion(props.id));
          }}>✖</button>
        }
      </div>
      <div className="Question-answer">
      {
            isEditing 
              ? (
                <input 
                  value={unsavedAnswer}
                  onChange={(e) => setUnsavedAnswer(e.target.value)} 
                />
              ) : `— ${props.answer}`
          }
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
