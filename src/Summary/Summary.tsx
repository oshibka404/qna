import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../store/questionsSlice';
import pluralize from '../utils/pluralize';
import './Summary.css';

function Summary() {
  const count = useSelector(selectCount);
  return (
    <div className="Summary">
        Here you can find {count} {pluralize(count, 'question', 'questions')}.
        Feel free to create your own questions!
    </div>
  );
}

export default Summary;
