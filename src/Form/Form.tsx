import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/questionsSlice';
import './Form.css';

function Form() {
  const [qText, setQText] = useState('');
  const [aText, setAText] = useState('');
  const [errorText, setErrorText] = useState<string|null>(null);
  const dispatch = useDispatch();

  function resetForm() {
    setQText('');
    setAText('');
  }

  function validateForm() : string[] {
    const errors : string[] = [];

    if (qText.length === 0) {
      errors.push('Question text is empty');
    }

    if (aText.length === 0) {
      errors.push('Answer text is empty');
    }

    return errors;
  }

  function submitForm() {
    const errors = validateForm();
    if (errors.length) {
      setErrorText(errors.join(', '))
      return; 
    } else {
      dispatch(add({
        question: qText,
        answer: aText,
      }));
      resetForm();
      setErrorText(null);
    }
  }
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
        <button onClick={submitForm}>Submit</button>
        <span className="Form-error">{errorText}</span>
      </div>
    </div>
  );
}

export default Form;
