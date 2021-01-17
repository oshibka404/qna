import React, { useState } from 'react';
import classNames from "classnames";
import './Form.css';

function Form() {
  const [qText, setQText] = useState('');
  const [aText, setAText] = useState('');
  const [count, setCount] = useState(0);
  const validate = () => {

  }
  const reset = () => {
    setQText('');
    setAText('');
  }
  const submit = () => {
    setCount(count+1);
    reset();
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
            <button onClick={submit}>Submit</button> ({count} times)
        </div>
    </div>
  );
}

export default Form;
