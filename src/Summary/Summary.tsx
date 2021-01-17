import React from 'react';
import pluralize from '../utils/pluralize';
import './Summary.css';

function Summary() {
  const n: number = 3;
  return (
    <div className="Summary">
        Here you can find {n} {pluralize(n, 'question', 'questions')}.
        Feel free to create your own questions!
    </div>
  );
}

export default Summary;
