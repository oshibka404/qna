import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/questionsSlice';
import './Form.css';

function Form() {
  const [qText, setQText] = useState('');
  const [aText, setAText] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="Form">
        <h2>Create a new question</h2>
        <label className="Form-label">
            Question:
            <input value={qText} onChange={(e) => {
                setQText(e.target.value);
            }} />
        </label>
        <label className="Form-label">
            Answer:
            <textarea value={aText} onChange={(e) => {
                setAText(e.target.value);
            }} />
        </label>
        <div className="Form-footer">
            <button onClick={() => dispatch(add({
              question: qText,
              answer: aText,
            }))}>Submit</button>
        </div>
    </div>
  );
}

export default Form;
