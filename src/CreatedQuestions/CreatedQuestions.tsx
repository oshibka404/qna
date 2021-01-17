import React from 'react';
import { clear, selectIsSorted, selectQuestions, toggleSort } from '../store/questionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import './CreatedQuestions.css';
import EmptyQuestionList from './EmptyQuestionList/EmptyQuestionList';
import QuestionList from './QuestionList/QuestionList';

function CreatedQuestions() {
  const azSort = useSelector(selectIsSorted);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  return (
    <div className="CreatedQuestions">
        <h2>Created questions</h2>
        {
          questions.length > 0
            ? <QuestionList questions={questions}/>
            : <EmptyQuestionList />
        }
        <div className="CreatedQuestions-footer">
          <button onClick={() => dispatch(toggleSort())}>{
            azSort 
              ? 'Sort chronologically'
              : 'Sort alphabetically'
          }</button>
          <button 
            className="CreatedQuestions-removeAll"
            onClick={() => dispatch(clear())}
          >Remove Questions</button>
        </div>
    </div>
  );
}

export default CreatedQuestions;
