import React from 'react';
import { clear, selectIsSorted, selectQuestions, toggleSort } from '../store/questionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import './CreatedQuestions.css';
import EmptyQuestionList from './EmptyQuestionList/EmptyQuestionList';
import QuestionList from './QuestionList/QuestionList';
import Tooltip from '../Tooltip/Tooltip';

function CreatedQuestions() {
  const azSort = useSelector(selectIsSorted);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  return (
    <div className="CreatedQuestions">
        <Tooltip tooltipContent="Here you can find the created questions and their answers">
          <h2>Created questions</h2>
        </Tooltip>
        {
          questions.length > 0
            ? <QuestionList questions={questions}/>
            : <EmptyQuestionList />
        }
        <div className="CreatedQuestions-footer">
          <button onClick={() => dispatch(toggleSort())}>{
            azSort 
              ? 'Sort by time'
              : 'Sort A‑Z'
          }</button>
          <button 
            className="CreatedQuestions-removeAll"
            onClick={() => dispatch(clear())}
          >Remove questions</button>
        </div>
    </div>
  );
}

export default CreatedQuestions;
