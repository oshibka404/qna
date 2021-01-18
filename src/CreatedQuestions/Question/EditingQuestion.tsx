import React, { useState } from 'react';
import { edit } from '../../store/questionsSlice';
import './Question.css';
import { useDispatch } from 'react-redux';

function EditingQuestion(props: EditingQuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [unsavedQuestion, setUnsavedQuestion] = useState(props.question);
  const [unsavedAnswer, setUnsavedAnswer] = useState(props.answer);
  const dispatch = useDispatch();
  return (
    <article 
      className="Question Question--editing"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="Question-question">
        <div className="Question-questionText">
          <input 
              value={unsavedQuestion}
              onChange={(e) => setUnsavedQuestion(e.target.value)} 
          />
        </div>
        <button
          className="Question-save"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(edit({
            id: props.id,
            question: unsavedQuestion,
            answer: unsavedAnswer,
            }))
            props.setIsEditing(false);
          }}
        >✓</button>
        <button className="Question-undo" onClick={(e) => {
          e.stopPropagation();
          props.setIsEditing(false);
          setUnsavedQuestion(props.question);
          setUnsavedAnswer(props.answer);
        }}>⎌</button>
      </div>
      <div className="Question-answer">
        <input 
          value={unsavedAnswer}
          onChange={(e) => setUnsavedAnswer(e.target.value)} 
        />
      </div>
    </article>
  );
}

interface EditingQuestionProps {
  question: string;
  answer: string;
  id: number;
  setIsEditing: (v: boolean) => void;
}

interface QuestionProps {
    question: string;
    answer: string;
    id: number;
}

export default EditingQuestion;
